---
name: wk-api-a3doc
description: Leer datos de la API de a3doc Cloud de Wolters Kluwer (el gestor documental): clientes, categorías y documentos. Úsala cuando haya que conectarse a a3doc, buscar qué datos ofrece, escribir código que la llame o llamarla desde la chat. Incluye el login propio de a3doc, cómo se pasa el token, los códigos de error y todos los métodos de lectura con sus campos.
---

# API de a3doc Cloud (Wolters Kluwer · gestor documental)

> ✅ **Probada el 28/10/2026 en preproducción** (`login`, `userinfo`, `getcustomerslistextended`,
> `containerstree`, `getdocuments`, `getdocumentsextended` con filtros, `logout`): 31 clientes,
> 177 categorías, 862 documentos. Los demás métodos salen de la documentación oficial
> (a3developers.wolterskluwer.es/doc/a3doccloud) sin probar.

**Es muy distinta de las otras API de WK.** No usa el login de Wolters Kluwer ni la cabecera
`Authorization`: tiene **su propio login** y el token va **dentro del cuerpo** de cada petición.
Y **todos los métodos son `POST`**, también los que solo leen.

## Reglas del curso

1. **Solo lecturas.** Aunque todo sea `POST`, se usan **solo los métodos de lectura** (lista
   abajo). Los que escriben — `uploadextended`, `updatedocumentattributes`,
   `updateappcompanyname`, `deletedocument` — **no se usan nunca**.
2. **Los datos son inventados** (entorno de prueba): se pueden usar todos.
3. **El usuario, la contraseña, la Apikey y el token** van en `.env.local`, que no se sube a
   GitHub.

## La conexión

| Qué | Valor |
|---|---|
| Dirección (producción, según la documentación) | `https://a3api.wolterskluwer.es/documentmanager` |
| Dirección (preproducción, la de la colección de Postman del curso) | `https://wkeapipre.azure-api.net/documentmanager` |
| Apikey | La de a3doc en Conectia, en la cabecera `Ocp-Apim-Subscription-Key` |
| Cabeceras | `Content-Type: application/json` y `Accept: application/json` |

Usen la dirección y la Apikey **que les hayan dado con su usuario**: son del mismo entorno.

**1 · El login.** `POST /login` con este cuerpo:

```json
{
  "tenant": "<código del cliente de a3doc>",
  "user": "<usuario>",
  "password": "<contraseña>",
  "deviceId": "<nombre del equipo + usuario de Windows>",
  "deviceType": 0,
  "devicePlatform": 98
}
```

Responde con `token`, `errorCode` y `errorMessage` (en el login vienen **sueltos**, no dentro de `status`).

**2 · Las lecturas.** Cada método lleva el token **en el cuerpo**:

```json
{ "token": "<el token del login>", "...": "los demás campos del método" }
```

**3 · Al terminar:** `POST /logout` con `{ "token": "..." }`. Importante: a3doc cuenta **licencias
de usuarios a la vez** (error 12); si no se cierra la sesión, puede bloquear a otros.

## Trampas

- **El error viene dentro de la respuesta.** La API puede responder HTTP 200 y aun así haber
  fallado: miren siempre `status.errorCode` (o `errorCode`). **0 = correcto.** Los demás códigos
  están en [`reference/info-adicional.md`](reference/info-adicional.md). Los más habituales:
  `3` parámetros mal, `4` usuario o contraseña incorrectos (o tenant que no existe), `6` token no
  válido (repetir el login), `12` no quedan licencias libres, `14` la categoría no existe,
  `15` el cliente no existe.
- **Las páginas empiezan en 0** (`PageIndex: 0` es la primera), no en 1 como en Nómina.
- **`PageSize` máximo: 100.** Lean todas las páginas hasta que una venga con menos.
- **Los nombres de los campos cambian de mayúsculas** según el método (`PageIndex` en unos,
  `pageIndex` en otros): copien exactamente los de [`reference/metodos.md`](reference/metodos.md).
- **`getdocumentsextended` da error 3 si faltan `Filter`, `sort` y `order`**, aunque la
  documentación diga que son opcionales. Este cuerpo funciona (comprobado):
  ```json
  { "token": "...", "ContainersIdstoSearch": [10], "SearchChildContainers": true,
    "PageIndex": 0, "PageSize": 100, "Filter": [], "sort": "DESC", "order": "DATE" }
  ```
  El total está en `countAllDocuments`. Cada documento trae `Code`, `Id`, `Title`, `Type`,
  `Size`, `Date` (dd/mm/aaaa), `DateModified`, `CustomerId`, `CustomerName`, `IsAppDoc` (texto
  `"true"`/`"false"`), `ContainersId` y `Attributes` (lista de `{id, name, value, description}`).
- **Filtros comprobados** (en `Filter`, dentro de `getdocumentsextended`):
  - por cliente: `{"AttributeId": 1, "MatchWholeWord": true, "FilterValue": "<NIF>"}`
  - por fechas: `{"AttributeId": 4, "MatchWholeWord": false, "FilterValue": "2026-01-01", "FilterEndValue": "2026-12-31"}`
- **Cada llamada tarda más de 1 segundo** (login ~1 s, listado ~1,3 s). Para contar documentos
  por cliente, **no** hagan una llamada por cliente: lean todos los documentos una vez
  (`ContainersIdstoSearch: [1]`, de 100 en 100) y cuenten en la aplicación por `CustomerId`.
  **Las páginas, de una en una, no en paralelo:** con muchas peticiones a la vez la
  preproducción respondió HTTP 500 a todo, también al login (28/10/2026).
- **Una sesión por página:** login → lecturas → logout, con el logout en un `finally`.
- **En Next.js (con Cache Components), la parte que llama a a3doc va dentro de `<Suspense>`.**
  Si no, Next.js da el error «uncached data accessed outside of `<Suspense>`» (en `next dev`
  como aviso, y `next build` falla). **No lo arreglen con `"use cache"`:** haría el login al
  compilar y guardaría los datos. Comprobado: página en un componente síncrono, y la lectura en
  un componente `async` dentro de `<Suspense fallback=…>`.
- **En `getdocuments`, `count` es lo que hay en la página, no el total.** Para contar, usen
  `getdocumentsextended` (`countAllDocuments`).
- **`numDocuments` del árbol de categorías no coincide** con `countAllDocuments` (Laboral: 833 en
  el árbol, 622 al listar): un documento puede estar en varias categorías. Para contar
  documentos, usen el listado.

## Los métodos de lectura

Todos los detalles (cuerpo y respuesta) en [`reference/metodos.md`](reference/metodos.md).

| Método | Para qué |
|---|---|
| `POST /login` · `POST /logout` | Entrar y salir |
| `POST /userinfo` | Datos del usuario conectado |
| `POST /appinfo` | Datos de la aplicación |
| `POST /getcustomerslistextended` | **Clientes** a los que tiene acceso el usuario (`code`, `id` = NIF, `name`), con búsqueda por NIF o nombre. Cuerpo comprobado: `{"token":"...","PageIndex":0,"PageSize":100,"Order":1,"Sort":0,"Filter":""}` |
| `POST /containerstree` | **Categorías** en árbol (`id`, `name`, `parentId`, `numDocuments`, `children`); se puede filtrar por cliente. Raíz `1 Todos`; debajo `10 Laboral`, `200 Fiscal`, `500 Gestión`, `640 Facturas a contabilizar`… |
| `POST /getdocuments` | **Documentos** de una categoría, con búsqueda por texto, cliente o título |
| `POST /getdocumentsextended` | **Documentos** de varias categorías, con filtros por atributo (por ejemplo, por fechas) → `Id`, `Title`, `Type`, `Date`, `CustomerName`, `Size`… y `countAllDocuments` |
| `POST /datemodified` | Última modificación de un documento |
| `POST /deleteddocuments` | Documentos borrados entre dos fechas |
| `POST /download` | **Descargar** un documento: devuelve el archivo en Base64 (`content`) |

**Atributos de los documentos** (cliente, empresa, centro, trabajador, expediente…): su lista y
cómo filtrar por ellos están en [`reference/info-adicional.md`](reference/info-adicional.md).

**Ideas de producto:** cuántos documentos tiene cada cliente y de qué tipo, qué clientes llevan
tiempo sin documentos nuevos, documentos por categoría y por mes, buscador de documentos de un
cliente con enlace para descargarlos.

## Desde la chat

Con `curl.exe` (en Windows), leyendo las claves de `.env.local`:

```
curl.exe -s -X POST "<dirección>/getcustomerslistextended" ^
  -H "Content-Type: application/json" -H "Ocp-Apim-Subscription-Key: %A3DOC_APIKEY%" ^
  -d "{\"token\":\"%A3DOC_TOKEN%\",\"PageIndex\":0,\"PageSize\":25,\"Order\":1,\"Sort\":0,\"Filter\":\"\"}"
```
