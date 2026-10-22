import { Suspense } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { connection } from "next/server";
import { COOKIE_TOKEN } from "@/lib/wk";
import {
  antiguedadMediaAnios,
  contarEnPlantilla,
  getCentros,
  getEmpleados,
  getEmpresas,
} from "@/lib/nomina";
import { ErrorApi } from "../error-api";

export default function FichaEmpresaPage({ params }: PageProps<"/empresas/[codigo]">) {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-12 font-sans">
      <Link href="/empresas" className="text-sm text-zinc-600 underline hover:text-zinc-900">
        ← Volver a mis empresas
      </Link>
      <Suspense fallback={<p className="text-zinc-500">Cargando la ficha…</p>}>
        <Ficha params={params} />
      </Suspense>
    </main>
  );
}

// Lee el código de la dirección, las cookies y la API: todo dentro de <Suspense>.
async function Ficha({ params }: { params: PageProps<"/empresas/[codigo]">["params"] }) {
  const { codigo } = await params;
  const token = (await cookies()).get(COOKIE_TOKEN)?.value;
  if (!token) redirect("/");

  let datos;
  try {
    const [empresas, empleados, centros] = await Promise.all([
      getEmpresas(token),
      getEmpleados(codigo, token),
      getCentros(codigo, token),
    ]);
    datos = { empresa: empresas.find((e) => String(e.companyCode) === codigo), empleados, centros };
  } catch (e) {
    return <ErrorApi error={e} />;
  }

  // Solo empresas a las que el usuario tiene acceso.
  if (!datos.empresa) notFound();

  await connection(); // a partir de aquí usamos la fecha de hoy
  const hoy = new Date();

  const enPlantilla = contarEnPlantilla(datos.empleados);
  const antiguedad = antiguedadMediaAnios(datos.empleados, hoy);

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
          {datos.empresa.companyName}
        </h1>
        <p className="mt-1 font-mono text-sm text-zinc-500">NIF {datos.empresa.identifierNumber}</p>
      </div>
      <dl className="grid gap-4 sm:grid-cols-3">
        <Dato titulo="Personas en plantilla" valor={enPlantilla.toLocaleString("es-ES")} />
        <Dato titulo="Centros de trabajo" valor={datos.centros.length.toLocaleString("es-ES")} />
        <Dato
          titulo="Antigüedad media"
          valor={`${antiguedad.toLocaleString("es-ES", { maximumFractionDigits: 1 })} años`}
        />
      </dl>
    </>
  );
}

function Dato({ titulo, valor }: { titulo: string; valor: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-5">
      <dt className="text-sm text-zinc-500">{titulo}</dt>
      <dd className="mt-2 text-3xl font-semibold tabular-nums text-zinc-900">{valor}</dd>
    </div>
  );
}
