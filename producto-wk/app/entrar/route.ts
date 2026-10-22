import { NextResponse } from "next/server";
import { COOKIE_STATE, loginUrl } from "@/lib/wk";

// Manda al usuario a la página de login de Wolters Kluwer.
export async function GET() {
  const state = crypto.randomUUID();
  const res = NextResponse.redirect(loginUrl(state));
  res.cookies.set(COOKIE_STATE, state, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 10 * 60, // 10 minutos para hacer el login
  });
  return res;
}
