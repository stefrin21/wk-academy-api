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

export type Atributo = { id: string; name: string; value: string; description: string };
export type Documento = {
  Code: number;
  Id: string;
  Title: string;
  Type: string;
  Size: number;
  Date: string; // dd/mm/aaaa
  DateModified: string;
  CustomerId: string;
  CustomerName: string;
  IsAppDoc: string;
  ContainersId: unknown;
  Attributes: Atributo[] | null;
};
type Filtro = { AttributeId: number; MatchWholeWord: boolean; FilterValue: string; FilterEndValue?: string };

const TAM = 100; // máximo de a3doc

/** Todos los documentos (de 100 en 100), opcionalmente filtrados. */
export async function getDocumentos(token: string, filtro: Filtro[] = []): Promise<Documento[]> {
  const pagina = (PageIndex: number) =>
    post<{ countAllDocuments: number; documents: Documento[] | null }>("getdocumentsextended", {
      token,
      ContainersIdstoSearch: [1], // «Todos»
      SearchChildContainers: true,
      PageIndex,
      PageSize: TAM,
      Filter: filtro, // obligatorio, aunque vaya vacío
      sort: "DESC",
      order: "DATE",
    });
  const primera = await pagina(0);
  const total = primera.countAllDocuments ?? 0;
  const resto = await Promise.all(
    Array.from({ length: Math.max(0, Math.ceil(total / TAM) - 1) }, (_, i) => pagina(i + 1)),
  );
  return [primera, ...resto].flatMap((p) => p.documents ?? []);
}

export const porCliente = (nif: string): Filtro[] => [
  { AttributeId: 1, MatchWholeWord: true, FilterValue: nif },
];

type Nodo = { id: string | number; name: string; children: Nodo[] | null };

/** id de cada categoría → nombre de su categoría principal (Laboral, Fiscal…). */
export async function getCategorias(token: string): Promise<Map<string, string>> {
  const { tree } = await post<{ tree: Nodo[] }>("containerstree", { token, customerId: "" });
  const mapa = new Map<string, string>();
  const marcar = (nodos: Nodo[] | null, principal: string) =>
    nodos?.forEach((n) => {
      mapa.set(String(n.id), principal);
      marcar(n.children, principal);
    });
  for (const raiz of tree ?? []) for (const p of raiz.children ?? []) {
    mapa.set(String(p.id), p.name);
    marcar(p.children, p.name);
  }
  return mapa;
}

export function categoriaDe(doc: Documento, mapa: Map<string, string>) {
  const ids = Array.isArray(doc.ContainersId) ? doc.ContainersId : String(doc.ContainersId ?? "").split(/[,; ]+/);
  for (const id of ids) {
    const nombre = mapa.get(String(id));
    if (nombre) return nombre;
  }
  return "Sin categoría";
}

/** Valor de una etiqueta del documento («Trabajador», «Modelo»…). */
export function etiqueta(doc: Documento, nombre: string) {
  const a = doc.Attributes?.find((x) => x.name.toLowerCase() === nombre.toLowerCase());
  return a ? a.description || a.value : "";
}

export function visibleParaCliente(doc: Documento) {
  const v = etiqueta(doc, "Visibilidad para usuarios Cliente") || etiqueta(doc, "Visibilidad");
  return v === "Visible" || v === "1" || v === "Editable";
}

/** «dd/mm/aaaa» → Date */
export function fechaDe(doc: Documento) {
  const [d, m, a] = doc.Date.split("/").map(Number);
  return new Date(a, m - 1, d);
}

export function descargar(token: string, documentId: string) {
  return post<{ content: string; length: number }>("download", { token, documentId });
}
