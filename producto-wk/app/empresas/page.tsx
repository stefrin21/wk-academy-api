import { Suspense } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_TOKEN, WkApiError } from "@/lib/wk";
import { contarEnPlantilla, getEmpleados, getEmpresas } from "@/lib/nomina";

export default function EmpresasPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-12 font-sans">
      <Link href="/" className="text-sm text-zinc-600 underline hover:text-zinc-900">
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Mis empresas</h1>
      <Suspense fallback={<p className="text-zinc-500">Cargando empresas…</p>}>
        <TablaEmpresas />
      </Suspense>
    </main>
  );
}

// Lee las cookies y llama a la API, por eso va dentro de <Suspense>.
async function TablaEmpresas() {
  const token = (await cookies()).get(COOKIE_TOKEN)?.value;
  if (!token) redirect("/");

  let filas;
  try {
    const empresas = await getEmpresas(token);
    filas = await Promise.all(
      empresas.map(async (empresa) => ({
        ...empresa,
        enPlantilla: contarEnPlantilla(await getEmpleados(empresa.companyCode, token)),
      })),
    );
  } catch (e) {
    return <ErrorApi error={e} />;
  }

  if (filas.length === 0) {
    return <p className="text-zinc-600">No tienes acceso a ninguna empresa.</p>;
  }

  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr className="border-b border-zinc-300 text-sm text-zinc-500">
          <th className="py-2 pr-4 font-medium">Empresa</th>
          <th className="py-2 pr-4 font-medium">NIF</th>
          <th className="py-2 text-right font-medium">Personas en plantilla</th>
        </tr>
      </thead>
      <tbody>
        {filas.map((f) => (
          <tr key={f.companyCode} className="border-b border-zinc-200">
            <td className="py-3 pr-4">
              <Link
                href={`/empresas/${f.companyCode}`}
                className="font-medium text-blue-700 underline hover:text-blue-900"
              >
                {f.companyName}
              </Link>
            </td>
            <td className="py-3 pr-4 font-mono text-sm text-zinc-700">{f.identifierNumber}</td>
            <td className="py-3 text-right tabular-nums">{f.enPlantilla}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Enseña el error de verdad: código HTTP y ruta.
function ErrorApi({ error }: { error: unknown }) {
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
