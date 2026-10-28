import "server-only";

// a3doc: login propio (usuario y contraseña de .env.local), todo con POST y el token en el cuerpo.
// Cada uso abre una sesión y la cierra siempre (logout), para no ocupar licencias.

export class A3docError extends Error {
  constructor(public codigo: number, mensaje: string) {
    super(`a3doc · error ${codigo}: ${mensaje}`);
  }
}

function env(nombre: string) {
  const valor = process.env[nombre];
  if (!valor) throw new Error(`Falta ${nombre} en .env.local`);
  return valor;
}

async function post<T>(metodo: string, cuerpo: object): Promise<T> {
  const res = await fetch(`${env("A3DOC_URL")}/${metodo}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Ocp-Apim-Subscription-Key": env("A3DOC_APIKEY"),
    },
    body: JSON.stringify(cuerpo),
    cache: "no-store",
  });
  if (!res.ok) throw new A3docError(res.status, `HTTP ${res.status}`);
  const datos = await res.json();
  // El error viene dentro de la respuesta: en el login suelto, en los demás dentro de status.
  const estado = datos.status ?? datos;
  const codigo = Number(estado.errorCode ?? 0);
  if (codigo !== 0) throw new A3docError(codigo, estado.errorMessage || "sin mensaje");
  return datos as T;
}

/** Abre una sesión, ejecuta las lecturas y cierra la sesión siempre. */
export async function conA3doc<T>(lecturas: (token: string) => Promise<T>): Promise<T> {
  const { token } = await post<{ token: string }>("login", {
    tenant: env("A3DOC_TENANT"),
    user: env("A3DOC_USUARIO"),
    password: env("A3DOC_PASSWORD"),
    deviceId: "producto-wk",
    deviceType: 0,
    devicePlatform: 98,
  });
  try {
    return await lecturas(token);
  } finally {
    await post("logout", { token }).catch(() => {});
  }
}

export type Cliente = { code: number; id: string; name: string };

export function getClientes(token: string) {
  return post<{ count: number; customers: Cliente[] }>("getcustomerslistextended", {
    token,
    PageIndex: 0,
    PageSize: 100,
    Order: 1,
    Sort: 0,
    Filter: "",
  }).then((r) => r.customers ?? []);
}
