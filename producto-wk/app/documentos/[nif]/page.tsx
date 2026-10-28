import { Suspense } from "react";
import Link from "next/link";
import {
  categoriaDe,
  conA3doc,
  etiqueta,
  fechaDe,
  getCategorias,
  getDocumentos,
  porCliente,
  visibleParaCliente,
} from "@/lib/a3doc";
import { ErrorA3doc, fechaCorta } from "../comun";

export default function ClientePage({ params }: PageProps<"/documentos/[nif]">) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-12 font-sans">
      <Link href="/documentos" className="text-sm text-zinc-600 underline hover:text-zinc-900">
        ← Todos los clientes
      </Link>
      <Suspense fallback={<p className="text-zinc-500">Leyendo los documentos del cliente…</p>}>
        <Ficha params={params} />
      </Suspense>
    </main>
  );
}

// Lee params y llama a a3doc, por eso va dentro de <Suspense>.
async function Ficha({ params }: { params: PageProps<"/documentos/[nif]">["params"] }) {
  const nif = decodeURIComponent((await params).nif);
  let documentos, categorias;
  try {
    ({ documentos, categorias } = await conA3doc(async (token) => {
      const [documentos, categorias] = await Promise.all([getDocumentos(token, porCliente(nif)), getCategorias(token)]);
      return { documentos, categorias };
    }));
  } catch (e) {
    return <ErrorA3doc error={e} />;
  }

  const filas = documentos
    .map((d) => ({ d, fecha: fechaDe(d), categoria: categoriaDe(d, categorias) }))
    .sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
  const porCategoria = Object.entries(
    filas.reduce<Record<string, number>>((acc, f) => ({ ...acc, [f.categoria]: (acc[f.categoria] ?? 0) + 1 }), {}),
  ).sort((a, b) => b[1] - a[1]);
  const visibles = filas.filter((f) => visibleParaCliente(f.d)).length;
  const nombre = documentos[0]?.CustomerName ?? nif;

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">{nombre}</h1>
        <p className="mt-1 font-mono text-zinc-600">{nif}</p>
      </div>

      {filas.length === 0 ? (
        <p className="rounded-lg bg-zinc-100 p-4 text-zinc-700">Este cliente no tiene documentos en a3doc.</p>
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-sm text-white">{filas.length} documentos</span>
            {porCategoria.map(([cat, n]) => (
              <span key={cat} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800">
                {cat} · {n}
              </span>
            ))}
            <span className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-800">
              El cliente ve {visibles} de {filas.length}
            </span>
          </div>

          <table className="w-full text-left text-sm">
            <thead className="border-b text-zinc-500">
              <tr>
                <th className="py-2">Fecha</th>
                <th className="py-2">Documento</th>
                <th className="py-2">Categoría</th>
                <th className="py-2">Trabajador</th>
                <th className="py-2">¿Lo ve el cliente?</th>
              </tr>
            </thead>
            <tbody>
              {filas.map(({ d, fecha, categoria }) => (
                <tr key={d.Id} className="border-b border-zinc-100 hover:bg-zinc-50">
                  <td className="py-2 tabular-nums">{fechaCorta(fecha)}</td>
                  <td className="py-2">
                    <a
                      href={`/documentos/descargar/${encodeURIComponent(d.Id)}?nombre=${encodeURIComponent(d.Title + d.Type.toLowerCase())}`}
                      className="text-blue-700 hover:underline"
                    >
                      {d.Title}
                    </a>
                    <span className="ml-2 text-xs text-zinc-500">{d.Type.replace(".", "")} · {d.Size} KB</span>
                  </td>
                  <td className="py-2">{categoria}</td>
                  <td className="py-2">{etiqueta(d, "Trabajador") || "—"}</td>
                  <td className="py-2">{visibleParaCliente(d) ? "Sí" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}
