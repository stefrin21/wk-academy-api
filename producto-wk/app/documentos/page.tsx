import { Suspense } from "react";
import Link from "next/link";
import { connection } from "next/server";
import { conA3doc, fechaDe, getClientes, getDocumentos } from "@/lib/a3doc";
import { ErrorA3doc, fechaCorta, mesesDesde } from "./comun";

export default function DocumentosPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-12 font-sans">
      <Link href="/" className="text-sm text-zinc-600 underline hover:text-zinc-900">
        ← Volver al inicio
      </Link>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Mis clientes en a3doc</h1>
        <p className="mt-1 text-zinc-600">El gestor documental: qué documentos tiene cada cliente y quién lleva tiempo parado.</p>
      </div>
      <Suspense fallback={<p className="text-zinc-500">Leyendo a3doc… (unos segundos)</p>}>
        <Resumen />
      </Suspense>
    </main>
  );
}

const PARADO = 12; // meses sin documentos nuevos

// Llama a a3doc en cada visita, por eso va dentro de <Suspense>.
async function Resumen() {
  await connection();
  let clientes, documentos;
  try {
    ({ clientes, documentos } = await conA3doc(async (token) => {
      const [clientes, documentos] = await Promise.all([getClientes(token), getDocumentos(token)]);
      return { clientes, documentos };
    }));
  } catch (e) {
    return <ErrorA3doc error={e} />;
  }

  const hoy = new Date();
  const filas = clientes
    .map((c) => {
      const suyos = documentos.filter((d) => d.CustomerId === c.id);
      const ultimo = suyos.length ? new Date(Math.max(...suyos.map((d) => fechaDe(d).getTime()))) : null;
      return { ...c, total: suyos.length, ultimo, meses: ultimo ? mesesDesde(ultimo, hoy) : null };
    })
    .sort((a, b) => b.total - a.total);
  const parados = filas.filter((f) => f.meses === null || f.meses >= PARADO).length;

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        <Cifra numero={clientes.length} texto="clientes" />
        <Cifra numero={documentos.length} texto="documentos" />
        <Cifra numero={parados} texto={`sin documentos nuevos en ${PARADO} meses`} aviso />
      </div>
      <table className="w-full text-left text-sm">
        <thead className="border-b text-zinc-500">
          <tr>
            <th className="py-2">Cliente</th>
            <th className="py-2">NIF</th>
            <th className="py-2 text-right">Documentos</th>
            <th className="py-2 pl-6">Último documento</th>
          </tr>
        </thead>
        <tbody>
          {filas.map((f) => (
            <tr key={f.code} className="border-b border-zinc-100 hover:bg-zinc-50">
              <td className="py-2">
                <Link href={`/documentos/${encodeURIComponent(f.id)}`} className="font-medium text-blue-700 hover:underline">
                  {f.name}
                </Link>
              </td>
              <td className="py-2 font-mono text-zinc-600">{f.id}</td>
              <td className="py-2 text-right tabular-nums">{f.total}</td>
              <td className="py-2 pl-6">
                {f.ultimo ? fechaCorta(f.ultimo) : "—"}
                {(f.meses === null || f.meses >= PARADO) && (
                  <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-800">
                    {f.meses === null ? "sin documentos" : `parado · ${f.meses} meses`}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Cifra({ numero, texto, aviso = false }: { numero: number; texto: string; aviso?: boolean }) {
  return (
    <div className={`rounded-xl p-4 ${aviso ? "bg-amber-50" : "bg-zinc-100"}`}>
      <p className={`text-3xl font-semibold tabular-nums ${aviso ? "text-amber-800" : "text-zinc-900"}`}>{numero}</p>
      <p className="text-sm text-zinc-600">{texto}</p>
    </div>
  );
}
