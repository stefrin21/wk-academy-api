# Prompt API 04 · Las empresas a las que tengo acceso

**Antes de pegarlo:** adjunten la ficha con `#file:FICHA-API-WK.md`.

```
## Propuesta
Quiero ver las empresas a las que tengo acceso, con cuántas personas tiene cada una en plantilla.

## Qué debe hacer
- Crear lib/nomina.ts, solo de servidor, con dos lecturas: la lista de empresas
  (/api/companies) y los empleados de una empresa (/api/companies/{empresa}/employees),
  siempre con pageNumber y pageSize. Si la API responde vacío, devolver una lista vacía.
- Contar como «en plantilla» a quien tiene fecha de baja "0001-01-01".
- Una página /empresas con una tabla: nombre (enlace a /empresas/[código]), NIF y personas en
  plantilla. Arriba, un enlace para volver al inicio; en el inicio, con sesión, un enlace a
  /empresas.
- La parte que lee datos va en un componente dentro de <Suspense>.
- Si algo falla, enseñar el error de verdad (el código HTTP y la ruta), no un mensaje genérico.

## Qué NO debe hacer
- No enseñar nombres ni datos de empleados: solo el número.
- No escribir nada en la API: solo lecturas.

## Cómo sabemos que salió bien
- Desde el inicio, con sesión, llego a /empresas pulsando un enlace.
- /empresas enseña mis empresas con su número de personas en plantilla.
```
