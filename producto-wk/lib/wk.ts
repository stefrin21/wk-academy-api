import "server-only";
import type { NextResponse } from "next/server";

// Todo lo que habla con Wolters Kluwer. Solo se ejecuta en el servidor:
// el client secret, la Apikey y los tokens nunca llegan al navegador.

const AUTHORIZE_URL = "https://login.wolterskluwer.eu/auth/core/connect/authorize";
const TOKEN_URL = "https://login.wolterskluwer.eu/auth/core/connect/token";
const SCOPE = "offline_access openid IDInfo WK.ES.A3EquipoContex";
export const API_NOMINA = "https://a3api.wolterskluwer.es/Laboral";

// Nombres de las cookies (todas httpOnly).
export const COOKIE_STATE = "wk_state";
export const COOKIE_TOKEN = "wk_token";
export const COOKIE_REFRESH = "wk_refresh";

function env(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Falta ${name} en .env.local (y hay que reiniciar npm run dev).`);
  }
  return value;
}

export type WkTokens = {
  access_token: string;
  refresh_token?: string;
  expires_in: number; // segundos (normalmente 3600 = una hora)
  token_type: string;
};

// 1. Dirección de la página de login de WK.
export function loginUrl(state: string): string {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: env("WK_CLIENT_ID"),
    redirect_uri: env("WK_REDIRECT_URI"),
    scope: SCOPE,
    state,
  });
  return `${AUTHORIZE_URL}?${params}`;
}

async function pedirToken(campos: Record<string, string>): Promise<WkTokens> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: env("WK_CLIENT_ID"),
      client_secret: env("WK_CLIENT_SECRET"),
      ...campos,
    }),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new WkApiError(res.status, `WK no ha dado el token (${res.status}).`);
  }
  return res.json();
}

// 2. Cambiar el código que devuelve WK por el token.
export function tokenDesdeCodigo(code: string): Promise<WkTokens> {
  return pedirToken({
    grant_type: "authorization_code",
    code,
    redirect_uri: env("WK_REDIRECT_URI"),
  });
}

// 3. Pedir un token nuevo con el refresh_token, sin repetir el login.
export function tokenDesdeRefresh(refreshToken: string): Promise<WkTokens> {
  return pedirToken({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });
}

// Opciones comunes de nuestras cookies: el navegador no las puede leer (httpOnly).
export const opcionesCookie = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
};

// Guarda el token y el refresh_token en las cookies de la respuesta.
export function guardarTokens(res: NextResponse, tokens: WkTokens): void {
  res.cookies.set(COOKIE_TOKEN, tokens.access_token, {
    ...opcionesCookie,
    // Un minuto antes de que caduque en WK, para no usar un token a punto de morir.
    maxAge: Math.max(tokens.expires_in - 60, 60),
  });
  if (tokens.refresh_token) {
    res.cookies.set(COOKIE_REFRESH, tokens.refresh_token, {
      ...opcionesCookie,
      maxAge: 30 * 24 * 60 * 60, // 30 días
    });
  }
}

// Error con el código HTTP real de WK (401, 403, 404, 429...).
export class WkApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "WkApiError";
  }
}

// 4. Llamar a la API (solo GET) con las tres cabeceras de la ficha.
// Devuelve los datos, o null si la API responde sin datos (204 o vacío).
export async function wkGet<T = unknown>(
  ruta: string,
  token: string,
  query: Record<string, string | number> = {},
  base: string = API_NOMINA,
): Promise<T | null> {
  const url = new URL(base + ruta);
  for (const [clave, valor] of Object.entries(query)) {
    url.searchParams.set(clave, String(valor));
  }

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Ocp-Apim-Subscription-Key": env("WK_APIKEY"),
      Authorization: `Bearer ${token}`,
      "api-version": "1.0",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new WkApiError(res.status, `La API de WK respondió ${res.status} en ${ruta}.`);
  }
  const texto = await res.text();
  if (res.status === 204 || texto.trim() === "") {
    return null;
  }
  return JSON.parse(texto) as T;
}
