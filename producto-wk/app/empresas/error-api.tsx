import { WkApiError } from "@/lib/wk";

// Enseña el error de verdad: código HTTP y ruta.
export function ErrorApi({ error }: { error: unknown }) {
  const status = error instanceof WkApiError ? error.status : null;
  const mensaje = error instanceof Error ? error.message : String(error);
  return (
    <div className="rounded border border-red-300 bg-red-50 p-4 text-red-800">
      <p className="font-medium">Error al leer la API{status ? ` (HTTP ${status})` : ""}</p>
      <p className="mt-1 font-mono text-sm">{mensaje}</p>
      {status === 401 && (
        <p className="mt-2 text-sm">
          La sesión ha caducado. <a href="/entrar" className="underline">Vuelve a entrar</a>.
        </p>
      )}
    </div>
  );
}
