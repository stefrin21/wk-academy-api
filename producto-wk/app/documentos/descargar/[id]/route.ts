import { conA3doc, descargar } from "@/lib/a3doc";

const TIPOS: Record<string, string> = {
  pdf: "application/pdf",
  rtf: "application/rtf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  jpg: "image/jpeg",
  png: "image/png",
  txt: "text/plain",
};

// Descarga un documento de a3doc (solo lectura). El nombre llega en ?nombre=
export async function GET(request: Request, { params }: RouteContext<"/documentos/descargar/[id]">) {
  const { id } = await params;
  const nombre = (new URL(request.url).searchParams.get("nombre") || "documento").replace(/["\\\r\n]/g, "");
  const extension = nombre.split(".").pop()?.toLowerCase() ?? "";
  try {
    const { content } = await conA3doc((token) => descargar(token, id));
    return new Response(Buffer.from(content, "base64"), {
      headers: {
        "Content-Type": TIPOS[extension] ?? "application/octet-stream",
        "Content-Disposition": `inline; filename*=UTF-8''${encodeURIComponent(nombre)}`,
      },
    });
  } catch (e) {
    return new Response(`No se ha podido descargar: ${e instanceof Error ? e.message : e}`, { status: 502 });
  }
}
