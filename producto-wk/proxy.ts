import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_REFRESH, COOKIE_TOKEN, guardarTokens, tokenDesdeRefresh } from "@/lib/wk";

// En Next.js 16 este archivo se llama proxy.ts (con el nombre middleware.ts no se ejecuta).
// Protege /empresas y sus páginas: sin sesión, vuelta al inicio.
export async function proxy(request: NextRequest) {
  // 1. Hay token: adelante.
  if (request.cookies.has(COOKIE_TOKEN)) {
    return NextResponse.next();
  }

  // 2. No hay token pero hay refresh_token: pedir uno nuevo a WK.
  const refresh = request.cookies.get(COOKIE_REFRESH)?.value;
  if (refresh) {
    try {
      const tokens = await tokenDesdeRefresh(refresh);

      // La página que viene ahora tiene que ver ya el token nuevo...
      request.cookies.set(COOKIE_TOKEN, tokens.access_token);
      const res = NextResponse.next({ request: { headers: request.headers } });
      // ...y el navegador lo guarda para las próximas veces.
      guardarTokens(res, tokens);
      return res;
    } catch (e) {
      console.error("[WK] No se ha podido renovar el token:", e);
    }
  }

  // 3. Sin sesión, o la renovación ha fallado: al inicio y sin cookies viejas.
  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.delete(COOKIE_TOKEN);
  res.cookies.delete(COOKIE_REFRESH);
  return res;
}

// Solo estas rutas pasan por el proxy. /, /entrar, /Login/CallbackFromWKA y /salir quedan libres.
export const config = {
  matcher: ["/empresas/:path*"],
};
