import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_REFRESH, COOKIE_STATE, COOKIE_TOKEN, tokenDesdeCodigo } from "@/lib/wk";

// Aquí vuelve WK después del login (es la dirección registrada en WK).
export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const errorWk = request.nextUrl.searchParams.get("error");
  const stateGuardado = request.cookies.get(COOKIE_STATE)?.value;

  if (errorWk) {
    return error(`Wolters Kluwer ha devuelto un error: ${errorWk}`);
  }
  if (!code || !state || !stateGuardado || state !== stateGuardado) {
    return error("El login no es válido o ha caducado.");
  }

  let tokens;
  try {
    tokens = await tokenDesdeCodigo(code);
  } catch (e) {
    console.error("[WK] Error al pedir el token:", e);
    return error("No se ha podido obtener el token de Wolters Kluwer.");
  }

  const comunes = {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  };

  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.delete(COOKIE_STATE);
  res.cookies.set(COOKIE_TOKEN, tokens.access_token, {
    ...comunes,
    maxAge: tokens.expires_in,
  });
  if (tokens.refresh_token) {
    res.cookies.set(COOKIE_REFRESH, tokens.refresh_token, {
      ...comunes,
      maxAge: 30 * 24 * 60 * 60, // 30 días
    });
  }
  return res;
}

function error(mensaje: string) {
  const seguro = mensaje.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  return new NextResponse(
    `<!doctype html><meta charset="utf-8"><p>${seguro}</p><p><a href="/">Volver al inicio</a></p>`,
    { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
