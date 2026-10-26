---
name: wk-api-contabilidad
description: Leer datos de la API de a3innuva Contabilidad de Wolters Kluwer. Úsala cuando haya que conectarse a la contabilidad o buscar qué datos ofrece (cuentas, plan contable, asientos, balance, cuenta de pérdidas y ganancias, facturas emitidas y recibidas, cobros, pagos, impuestos, clientes, proveedores…), escribir código que la llame o llamarla desde la chat. Incluye la conexión, la cabecera «context» y la lista completa de las 36 lecturas con sus campos.
---

# API de a3innuva Contabilidad (Wolters Kluwer)

> ⚠️ **Todavía sin probar.** Esta skill sale de la documentación oficial (OpenAPI «API a3innuva
> Contabilidad» 1.0, portal a3developers, 26/10/2026). Para probarla hace falta **la Apikey de
> Conectia de Contabilidad** y una cuenta con empresas en a3innuva Contabilidad. Lo que funcione
> o falle, apúntenlo aquí.

## Reglas del curso

1. **Solo lecturas (GET).** La API también crea y cambia asientos y cuentas: no se usa nunca.
2. **Los datos son inventados** (cuenta de prueba): se pueden usar todos.
3. **Las claves y el token** van en `.env.local`, que no se sube a GitHub.

## La conexión

Como Nómina: **el mismo login de Wolters Kluwer** (token OAuth, flujo Authorization Code) y una
Apikey, **pero la de Contabilidad**.

| Qué | Valor |
|---|---|
| Dirección base | `https://a3api.wolterskluwer.es/a3innuva-contabilidad` |
| Login y token | Los mismos de la skill `wk-api-nomina` |
| `api-version` | La documentación no la pide; si una ruta da 404, prueben `api-version: 1.0` |

**Sin comprobar:** si el mismo Client Id y el mismo scope de Nómina (`WK.ES.A3EquipoContex`) valen
también para Contabilidad. Si el token da 401 o 403, pregúntenlo a la persona responsable de las
API.

**Cada lectura lleva tres cabeceras:**

```
Ocp-Apim-Subscription-Key: <Apikey de Contabilidad>
Authorization: Bearer <token>
context: {"clientId": "<correlationId de la empresa>"}
```

## La cabecera `context`: elegir la empresa

Casi todas las rutas trabajan **sobre una empresa**, y la empresa se elige con la cabecera
`context`, no en la dirección:

1. `GET /api/companies` con `context: none` → la lista de empresas, cada una con su
   `correlationId` (algo como `A3TFR:061602:CM:98d52a37-…`), `vatName` (nombre) y `vatNumber` (NIF).
2. En las demás llamadas: `context: {"clientId": "<ese correlationId>"}`.

## Cómo encontrar lo que hace falta

1. **La ruta**, en [`reference/endpoints.md`](reference/endpoints.md): las 36 lecturas por área.
2. **Los campos**, en [`reference/schemas.md`](reference/schemas.md), buscando el nombre que va
   después de `→`.

| Qué | Rutas |
|---|---|
| Empresas | `GET /api/companies` |
| Plan contable y cuentas | `GET /api/chartOfAccounts`, `GET /api/accounts` |
| Ejercicios | `GET /api/accountingYears` |
| Balance y pérdidas y ganancias | `GET /api/BalanceSheets/state`, `GET /api/BalanceSheets/profitAndLost` |
| Asientos (diario) | `GET /api/journals` |
| Facturas emitidas y recibidas | `GET /api/issuedInvoices`, `GET /api/inputInvoices` (filtran por `Year`, `Document`, `InvoiceNumber`) |
| Cobros y pagos | `GET /api/charges`, `GET /api/payments` |
| Impuestos | `GET /api/taxes` |
| Clientes, proveedores, bancos | `GET /api/customers`, `/api/suppliers`, `/api/accountBanks` |

**Ideas de producto:** resultado del año por empresa, comparar el balance de varias empresas,
facturación emitida frente a recibida por trimestre, cobros y pagos pendientes.

## Las listas

Las listas aceptan `pageNumber` y `pageSize`. La documentación no dice el máximo: lean **todas las
páginas** hasta que una venga incompleta, como en Nómina.
