import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_REFRESH, COOKIE_STATE, COOKIE_TOKEN } from "@/lib/wk";

// Cierra la sesión: borra las cookies y vuelve al inicio.
export async function GET(request: NextRequest) {
  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.delete(COOKIE_TOKEN);
  res.cookies.delete(COOKIE_REFRESH);
  res.cookies.delete(COOKIE_STATE);
  return res;
}
