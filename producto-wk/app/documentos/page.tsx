import { Suspense } from "react";
import Link from "next/link";
import { A3docError, conA3doc, getClientes } from "@/lib/a3doc";

export default function DocumentosPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-12 font-sans">
      <Link href="/" className="text-sm text-zinc-600 underline hover:text-zinc-900">
        ← Volver al inicio
      </Link>
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Mis clientes de a3doc</h1>
      <Suspense fallback={<p className="text-zinc-500">Cargando clientes…</p>}>
        <TablaClientes />
      </Suspense>
    </main>
  );
}

// Llama a a3doc en cada visita, por eso va dentro de <Suspense>.
async function TablaClientes() {
  let clientes;
  try {
    clientes = await conA3doc(getClientes);
  } catch (e) {
    const mensaje = e instanceof A3docError || e instanceof Error ? e.message : String(e);
    return <p className="rounded-lg bg-red-50 p-4 text-red-800">{mensaje}</p>;
  }
  return (
    <>
      <p className="text-zinc-600">{clientes.length} clientes</p>
      <table className="w-full text-left text-sm">
        <thead className="border-b text-zinc-500">
          <tr>
            <th className="py-2">NIF</th>
            <th className="py-2">Cliente</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.code} className="border-b border-zinc-100">
              <td className="py-2 font-mono">{c.id}</td>
              <td className="py-2">{c.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
