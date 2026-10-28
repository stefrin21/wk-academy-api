import { Suspense } from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { COOKIE_REFRESH, COOKIE_TOKEN } from "@/lib/wk";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-zinc-50 px-6 py-24 font-sans">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Producto WK</h1>
      <Suspense fallback={<p className="text-zinc-500">Cargando…</p>}>
        <Sesion />
      </Suspense>
      <div className="flex flex-col items-center gap-2 border-t border-zinc-200 pt-8">
        <p className="text-sm text-zinc-500">a3doc · el gestor documental (sin login: entra el servidor)</p>
        <Link
          href="/documentos"
          className="rounded-full border border-blue-700 px-6 py-3 font-medium text-blue-700 hover:bg-blue-50"
        >
          Ver mis documentos
        </Link>
      </div>
    </main>
  );
}

// Lee las cookies, por eso va dentro de <Suspense>.
async function Sesion() {
  const almacen = await cookies();
  const haySesion = almacen.has(COOKIE_TOKEN) || almacen.has(COOKIE_REFRESH);

  if (!haySesion) {
    return (
      // Enlace normal (no <Link>) para que Next no lo precargue.
      <a
        href="/entrar"
        className="rounded-full bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800"
      >
        Entrar con Wolters Kluwer
      </a>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-lg font-medium text-green-700">Sesión iniciada</p>
      <Link
        href="/empresas"
        className="rounded-full bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800"
      >
        Ver mis empresas
      </Link>
      <a href="/salir" className="text-zinc-600 underline hover:text-zinc-900">
        Salir
      </a>
    </div>
  );
}
