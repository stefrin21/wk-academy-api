import "server-only";
import { wkGet } from "@/lib/wk";

// Lecturas de la API de Nómina (solo GET).

export type Empresa = {
  companyCode: number;
  companyName: string;
  identifierNumber: string; // NIF
};

// Solo los campos que usamos. Nunca se enseñan datos de personas concretas.
export type Empleado = {
  dropDate: string; // fecha de baja; "0001-01-01T00:00:00Z" = en activo
  enrolmentDate: string; // fecha de alta
};

const PAGE_SIZE = 50; // máximo de la API según la documentación

// Lee todas las páginas de una lista. La API pide siempre pageNumber y pageSize,
// y si no hay datos responde vacío: entonces devolvemos una lista vacía.
async function leerTodo<T>(ruta: string, token: string): Promise<T[]> {
  const todo: T[] = [];
  for (let pagina = 1; pagina <= 50; pagina++) {
    const datos = await wkGet<T[]>(ruta, token, { pageNumber: pagina, pageSize: PAGE_SIZE });
    if (!datos || datos.length === 0) break;
    todo.push(...datos);
    if (datos.length < PAGE_SIZE) break;
  }
  return todo;
}

export function getEmpresas(token: string): Promise<Empresa[]> {
  return leerTodo<Empresa>("/api/companies", token);
}

export function getEmpleados(empresa: number | string, token: string): Promise<Empleado[]> {
  return leerTodo<Empleado>(`/api/companies/${encodeURIComponent(String(empresa))}/employees`, token);
}

export type Centro = {
  workplaceCode: string;
  workplaceName: string;
};

export function getCentros(empresa: number | string, token: string): Promise<Centro[]> {
  return leerTodo<Centro>(`/api/companies/${encodeURIComponent(String(empresa))}/workplaces`, token);
}

// Antigüedad media en años de las personas en plantilla, a partir de la fecha de alta.
// Si no hay nadie, 0. `hoy` lo pasa la página (después de await connection()).
export function antiguedadMediaAnios(empleados: Empleado[], hoy: Date): number {
  const MS_ANIO = 365.25 * 24 * 60 * 60 * 1000;
  const anios = empleados
    .filter(estaEnPlantilla)
    .map((e) => Date.parse(e.enrolmentDate))
    .filter((alta) => Number.isFinite(alta) && alta > Date.UTC(1900, 0, 1))
    .map((alta) => Math.max(0, (hoy.getTime() - alta) / MS_ANIO));
  if (anios.length === 0) return 0;
  return anios.reduce((a, b) => a + b, 0) / anios.length;
}

// «En plantilla» = sin fecha de baja (la API pone 0001-01-01).
export function estaEnPlantilla(e: Empleado): boolean {
  return !e.dropDate || e.dropDate.startsWith("0001-01-01");
}

export function contarEnPlantilla(empleados: Empleado[]): number {
  return empleados.filter(estaEnPlantilla).length;
}
