import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_STATE, guardarTokens, tokenDesdeCodigo } from "@/lib/wk";

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

  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.delete(COOKIE_STATE);
  guardarTokens(res, tokens);
  return res;
}

function error(mensaje: string) {
  const seguro = mensaje.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  return new NextResponse(
    `<!doctype html><meta charset="utf-8"><p>${seguro}</p><p><a href="/">Volver al inicio</a></p>`,
    { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
