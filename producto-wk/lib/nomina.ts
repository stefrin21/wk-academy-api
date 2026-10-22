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

const PAGE_SIZE = 100;

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

// «En plantilla» = sin fecha de baja (la API pone 0001-01-01).
export function estaEnPlantilla(e: Empleado): boolean {
  return !e.dropDate || e.dropDate.startsWith("0001-01-01");
}

export function contarEnPlantilla(empleados: Empleado[]): number {
  return empleados.filter(estaEnPlantilla).length;
}
