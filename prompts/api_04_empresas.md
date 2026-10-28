# Prompt API 04 · Las empresas a las que tengo acceso

**Antes de pegarlo:** adjunten la ficha con `#file:FICHA-API-WK.md`.

```
## Propuesta
Quiero ver las empresas a las que tengo acceso, con cuántas personas tiene cada una en plantilla.

## Qué debe hacer
- Crear lib/nomina.ts, solo de servidor, con dos lecturas: la lista de empresas
  (/api/companies) y los empleados de una empresa (/api/companies/{empresa}/employees),
  siempre con pageNumber y pageSize=50, leyendo todas las páginas (1, 2, 3…) hasta que una
  venga con menos de 50. Si la API responde vacío, devolver una lista vacía.
- Contar como «en plantilla» a quien tiene fecha de baja "0001-01-01".
- Una página /empresas con una tabla: nombre (enlace a /empresas/[código]), NIF y personas en
  plantilla. Arriba, un enlace para volver al inicio; en el inicio, con sesión, un enlace a
  /empresas.
- La parte que lee datos va en un componente dentro de <Suspense>.
- Si algo falla, enseñar el error de verdad (el código HTTP y la ruta), no un mensaje genérico.

## Qué NO debe hacer
- No escribir nada en la API: solo lecturas.
- No cambiar nada que este prompt no pida (reglas en .github/copilot-instructions.md).

## Cómo sabemos que salió bien
- Desde el inicio, con sesión, llego a /empresas pulsando un enlace.
- /empresas enseña mis empresas con su número de personas en plantilla.

## Al terminar
La aplicación ya está encendida en el puerto 53971: no la arranques.
Comprueba tú, con curl.exe a http://localhost:53971, los puntos de «Cómo sabemos que
salió bien» que se puedan comprobar sin el navegador. Enséñame una tabla: qué has
comprobado y qué ha salido. Y dime qué tengo que comprobar yo en el navegador.
```
