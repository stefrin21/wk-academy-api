# Ficha técnica · API de Wolters Kluwer

Para adjuntar en la chat de Copilot con `#file:FICHA-API-WK.md` cada vez que un prompt
hable con las API. Son las reglas que hemos comprobado probando la API de a3innuva Nómina.

## Credenciales

- Las da Wolters Kluwer: `WK_CLIENT_ID`, `WK_CLIENT_SECRET` y la Apikey de cada API.
- Van en `.env.local`, que no se sube a GitHub.
- Se usan **solo en el servidor**. Nada de esto llega nunca al navegador.

## Login (OAuth, «Authorization Code»)

- No hay página de login propia: el usuario entra **en la página de Wolters Kluwer**, con su
  cuenta y la doble autenticación. La aplicación no ve nunca la contraseña.
- Dirección de login: `https://login.wolterskluwer.eu/auth/core/connect/authorize`
- Cambio del código por el token: `POST https://login.wolterskluwer.eu/auth/core/connect/token`
- Scope: `offline_access openid IDInfo WK.ES.A3EquipoContex`
- Dirección de vuelta registrada: `http://localhost:53971/Login/CallbackFromWKA`.
  Por eso la aplicación arranca en el **puerto 53971**, no en el 3000.
- El token dura **una hora**. Con el `refresh_token` se pide uno nuevo sin repetir el login
  (`grant_type=refresh_token`, a la misma dirección del token).

## Llamadas a la API

- Nómina: `https://a3api.wolterskluwer.es/Laboral`. Las demás API: ver
  `a3developers.wolterskluwer.es`.
- Cada llamada lleva **tres cabeceras**:
  - `Ocp-Apim-Subscription-Key`: la Apikey de esa API
  - `Authorization: Bearer` + el token
  - `api-version: 1.0`
- **Solo lectura (GET).** En este curso no se escribe nada en las API.

## Rutas de Nómina que usamos

La lista completa de las 189 lecturas está en la skill `wk-api-nomina`
(`.agents/skills/wk-api-nomina/`). Para las otras API: `wk-api-a3factura`, `wk-api-contabilidad` y `wk-api-a3doc`
(cada una con su propia Apikey; a3doc, además, con su propio login: ver `GUIA-A3DOC.md`).

Todas con `pageNumber` y `pageSize`:

| Ruta | Qué devuelve | Campos útiles |
|---|---|---|
| `/api/companies` | Las empresas a las que el usuario tiene acceso | `companyCode`, `companyName`, `identifierNumber` (NIF) |
| `/api/companies/{empresa}/employees` | Los empleados, en activo y de baja | `enrolmentDate` (alta), `dropDate` (baja), `workplaceCode` |
| `/api/companies/{empresa}/workplaces` | Los centros de trabajo | `workplaceCode`, `workplaceName` |
| `/api/companies/{empresa}/pays/{año}/{mes}` | Las nóminas del mes, una por persona | `costBusiness` (coste para la empresa), `totalGross` (bruto) |

Empleados y nóminas traen también `completeName` e `identifierNumber` (nombre y DNI de cada
persona). Son datos inventados.

## Trampas comprobadas

- Sin `api-version: 1.0`, algunas rutas responden **404** («Resource not found»).
- Las listas piden siempre `pageNumber` y `pageSize`. Sin ellos, otra vez **404**.
- `pageSize` es **50 como máximo** (lo dice la documentación). Hay que **leer todas las páginas**
  (pageNumber 1, 2, 3…) hasta que una venga con menos de 50: si no, las empresas grandes salen
  cortadas. Ojo: la API acepta más de 50, pero corta sin avisar a los 300.
- Las listas aceptan también `filter` y `orderBy`, por ejemplo
  `filter=workplaceCode eq 1` y `orderBy=employeeCode asc` (no los hemos probado todavía: si
  fallan, filtren ustedes los datos después de leerlos).
- Si no hay datos (por ejemplo, una empresa sin empleados), la API responde **`null`** (o vacío),
  no con una lista vacía. Hay que tratarlo como una lista vacía: **0**, no un error.
- En Nómina, un empleado **en activo** tiene fecha de baja `"0001-01-01T00:00:00Z"`: hay que
  comprobar que **empiece por** `0001-01-01`.
- Para conectarse desde el terminal, usar `curl.exe`: el cortafuegos de WK bloquea otras
  herramientas (por ejemplo Python) con «error code: 1010».
- Si la aplicación da `fetch failed (SELF_SIGNED_CERT_IN_CHAIN)`, no es el código: es la red, la
  VPN o el antivirus del ordenador, que pone su propio certificado. Hay que parar la aplicación,
  escribir en PowerShell `$env:NODE_OPTIONS="--use-system-ca"` (en cmd:
  `set NODE_OPTIONS=--use-system-ca`) y volver a arrancar con `npm run dev`, en ese mismo
  terminal. **Nunca** `NODE_TLS_REJECT_UNAUTHORIZED=0` ni `rejectUnauthorized: false`: apagan la
  seguridad de todas las conexiones.

## Qué significa cada respuesta

`200` todo bien · `204` bien, sin datos · `401` falta el token o ha caducado · `403` el usuario no
tiene permiso · `404` dirección mal escrita, o faltan `api-version` o `pageNumber`/`pageSize` ·
`429` demasiadas llamadas seguidas.

## Datos de personas

Los datos son **inventados**: se pueden usar todos, también nombres, DNI e importes. Si el producto
no los necesita, mejor no enseñarlos.
