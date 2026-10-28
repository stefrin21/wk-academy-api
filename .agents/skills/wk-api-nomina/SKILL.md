---
name: wk-api-nomina
description: Leer datos de la API de a3innuva Nómina de Wolters Kluwer (Conectia). Úsala siempre que haya que conectarse a esta API, buscar qué datos ofrece (empresas, empleados, contratos, nóminas, ausencias, bajas, centros, formación…), escribir código que la llame o llamarla desde la chat. Incluye el login, las cabeceras, las trampas comprobadas y la lista completa de las 189 lecturas con sus campos.
---

# API de a3innuva Nómina (Wolters Kluwer · Conectia)

Esta skill sirve para dos cosas: **escribir código** que lea la API (la aplicación `producto-wk`)
y **consultar la API desde la chat**. En los dos casos, las reglas son las mismas.

## Reglas del curso (siempre)

1. **Solo lecturas (GET).** La API también tiene operaciones para crear, cambiar y borrar: **no se
   usan nunca**.
2. **Los datos son inventados.** Muchas respuestas traen datos de personas (`completeName`,
   `identifierNumber`, `ssNAF`, cuentas bancarias, importes de una persona). Se pueden usar; si el
   producto no los necesita, mejor no enseñarlos.
3. **Las claves** (`WK_CLIENT_ID`, `WK_CLIENT_SECRET`, `WK_APIKEY`) y el token viven en `.env.local`
   (de `producto-wk/` o de `conexion/`), que no se sube a GitHub.

## La conexión

| Qué | Valor |
|---|---|
| Dirección base | `https://a3api.wolterskluwer.es/Laboral` |
| Login (navegador) | `https://login.wolterskluwer.eu/auth/core/connect/authorize` · flujo Authorization Code |
| Token | `POST https://login.wolterskluwer.eu/auth/core/connect/token` |
| Scope | `offline_access openid IDInfo WK.ES.A3EquipoContex` |
| Dirección de vuelta registrada | `http://localhost:53971/Login/CallbackFromWKA` (por eso el puerto 53971) |
| Duración del token | 1 hora. Con el `refresh_token`, `grant_type=refresh_token` en la misma dirección del token |

**Cada llamada lleva tres cabeceras:**

```
Ocp-Apim-Subscription-Key: <WK_APIKEY>
Authorization: Bearer <token>
api-version: 1.0
```

## Trampas comprobadas

- **Sin `api-version: 1.0`** algunas rutas responden 404.
- **Las listas piden siempre `pageNumber` y `pageSize`**; sin ellos, 404.
- **`pageSize` máximo: 50.** Leer **todas las páginas** (1, 2, 3…) hasta que una venga con menos
  de 50. La API acepta números mayores, pero corta sin avisar a los 300: una empresa grande sale
  incompleta.
- **Sin datos, la API responde `null` o vacío**, no una lista vacía: tratarlo como `[]` (0, no un
  error).
- **Fecha de baja de alguien en activo:** `"0001-01-01T00:00:00Z"` (con hora). Comprobar que
  **empieza por** `0001-01-01`.
- **Desde el terminal, `curl.exe`:** el cortafuegos de WK bloquea otras herramientas (por ejemplo
  Python) con «error code: 1010».
- **403 = falta un permiso del usuario en a3innuva.** Cada ruta dice qué permiso necesita (columna
  «permiso» en `reference/endpoints.md`).
- **Datos de prueba:** hay meses con muy pocas nóminas y otros con muchísimas. Avisar antes de
  enseñar una cifra rara.

## Cómo encontrar lo que hace falta

1. **Buscar la ruta** en [`reference/endpoints.md`](reference/endpoints.md): las 189 lecturas,
   agrupadas por área, con sus parámetros, lo que devuelven y el permiso que piden. Busquen por
   palabra en inglés: `employees`, `contracts`, `pays`, `absenteeisms`, `workplaces`, `training`…
2. **Ver los campos** de la respuesta en [`reference/schemas.md`](reference/schemas.md), buscando el
   nombre que aparece después de `→`.
3. **Leer solo lo necesario:** son archivos grandes; busquen la palabra, no los lean enteros.

**Las áreas, en castellano:**

| Área (en la API) | Qué hay |
|---|---|
| Companies, Workplaces, Cost centers | Empresas, centros de trabajo, centros de coste |
| Employees (y sus subáreas) | Empleados: contratos, salario, retribución, puesto, IRPF, anticipos, vida laboral, cuentas bancarias, convenio |
| Pays, Pays - Concepts, Variable concepts | Nóminas por mes y sus conceptos |
| Absenteeisms (y subáreas) | Ausencias: vacaciones, permisos retribuidos, huelgas, faltas, suspensiones |
| Temporary Disabilities (IT) | Bajas: enfermedad, accidente, nacimiento, riesgo en el embarazo… |
| Agreements, Calendars | Convenios y calendarios |
| Training | Formación |
| Common data | Tablas comunes: países, datos laborales, médicos |
| Employee portal, Security, Professionals, Custom data, Acccounting link | Portal del empleado, permisos, profesionales, datos personalizados, enlace contable |

## Rutas comprobadas con datos reales

| Ruta | Para qué | Campos útiles |
|---|---|---|
| `GET /api/companies` | Las empresas del usuario | `companyCode`, `companyName`, `identifierNumber` (NIF) |
| `GET /api/companies/{companyCode}/employees` | Empleados, en activo y de baja | `enrolmentDate`, `dropDate`, `workplaceCode` |
| `GET /api/companies/{companyCode}/workplaces` | Centros de trabajo | `workplaceCode`, `workplaceName` |
| `GET /api/companies/{companyCode}/pays/{year}/{month}` | Nóminas del mes, una por persona | `costBusiness` (coste empresa), `totalGross` (bruto) |
| `GET /api/companies/{companyCode}/temporarydisabilities/{year}/{month}` | Bajas (IT) del mes. Permiso «IT y Absentismos» | `temporaryDisabilityID`, `employeeCode`, `startdate`, `enddate`, `contingencyDescription` |

**Bajas (IT), comprobado el 28/10/2026:** una baja que dura varios meses sale **en cada mes**:
cuéntenla una sola vez, por su `temporaryDisabilityID`. En los datos de prueba,
`contingencyDescription` vale «Enfermedad» y hay muy pocas bajas (3 en 2026, en todas las empresas).

Las demás rutas vienen de la documentación oficial y no las hemos probado una a una: si una falla,
miren el código HTTP (401 token, 403 permiso, 404 dirección o parámetros) antes de cambiar nada.

## Desde la aplicación (producto-wk)

Usar `lib/wk.ts` (`wkGet`), que ya pone las tres cabeceras y lanza un error con el código HTTP, y
añadir las lecturas nuevas en `lib/nomina.ts`, leyendo todas las páginas. La parte que lee datos
va en un componente dentro de `<Suspense>`.

## Desde la chat (sin aplicación)

Si existe `conexion/.env.local` con `WK_TOKEN` (de la guía de conexión), se puede llamar con
`curl.exe` leyendo las claves de ese archivo:

```
curl.exe -s "https://a3api.wolterskluwer.es/Laboral/api/companies?pageNumber=1&pageSize=50" ^
  -H "Ocp-Apim-Subscription-Key: %WK_APIKEY%" -H "Authorization: Bearer %WK_TOKEN%" -H "api-version: 1.0"
```

Si responde 401, el token ha caducado: hay que repetir el login (enlace de login → código de la
dirección de vuelta → token).

Fuente: definición OpenAPI oficial «API a3innuva Nómina» v2, portal a3developers.wolterskluwer.es
(descargada el 26/10/2026).
