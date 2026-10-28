export function ErrorA3doc({ error }: { error: unknown }) {
  const mensaje = error instanceof Error ? error.message : String(error);
  return <p className="rounded-lg bg-red-50 p-4 text-red-800">No se ha podido leer a3doc. {mensaje}</p>;
}

export const fechaCorta = (f: Date) =>
  f.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" });

export const mesesDesde = (f: Date, hoy: Date) =>
  (hoy.getFullYear() - f.getFullYear()) * 12 + (hoy.getMonth() - f.getMonth());
