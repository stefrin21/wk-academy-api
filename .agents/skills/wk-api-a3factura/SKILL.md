---
name: wk-api-a3factura
description: Leer datos de la API de a3factura (a3innuva ERP) de Wolters Kluwer. Úsala cuando haya que conectarse a a3factura o buscar qué datos ofrece (facturas emitidas y recibidas, clientes, proveedores, cobros, pagos, vencimientos, productos, presupuestos, pedidos, albaranes…), escribir código que la llame o llamarla desde la chat. Incluye el login propio de a3factura, las cabeceras y la lista completa de las 267 lecturas con sus campos.
---

# API de a3factura (a3innuva ERP · Wolters Kluwer)

> ⚠️ **Todavía sin probar.** Esta skill sale de la documentación oficial (OpenAPI «API a3innuva ERP
> - a3factura» 2.0, portal a3developers, 26/10/2026). Para probarla hace falta **una cuenta de
> a3factura con datos** y **la Apikey de Conectia de a3factura**: con las credenciales de Nómina
> no se entra. Lo que funcione o falle, apúntenlo aquí.

## Reglas del curso

1. **Solo lecturas (GET).** La API también crea, cambia, borra y **emite facturas**: no se usa
   nunca. La única excepción son las llamadas del login (abajo), que son `POST` pero no cambian
   datos.
2. **Los datos son inventados** (cuenta de prueba): se pueden usar todos.
3. **Las claves y el token** van en `.env.local`, que no se sube a GitHub.

## La conexión

**Distinta de Nómina.** a3factura tiene **su propio login**, con el correo y la contraseña de una
cuenta de a3factura (no la cuenta de Wolters Kluwer de Nómina).

| Qué | Valor |
|---|---|
| Dirección base | `https://a3api.wolterskluwer.es/a3factura` |
| `api-version` | **`2.0`** (no 1.0) |
| Apikey | La de **a3factura** en Conectia (`Ocp-Apim-Subscription-Key`) |

**El login, en tres llamadas:**

1. `POST /api/token/signin` con `{"mail": "...", "password": "..."}` → devuelve `token`,
   `refreshToken` y la lista de empresas (`companies`).
2. Si la cuenta tiene varias empresas: `GET /api/token/tenants` (con el token) para verlas, y
   `POST /api/token/tenants/{id}/select` para **elegir una** → devuelve un `token` nuevo, ya de esa
   empresa.
3. Con ese token, todas las lecturas. Para renovarlo: `POST /api/token/refresh`.

Existe también `POST /api/token/applicationToken` (con `applicationName` y `credentials`): parece
el login para aplicaciones, pero la documentación no dice de dónde salen esas credenciales.
**Pregúntenlo a la persona responsable de las API antes de usarlo.**

**Cada lectura lleva tres cabeceras:**

```
Ocp-Apim-Subscription-Key: <Apikey de a3factura>
Authorization: <token>          (la documentación lo llama «Access token»; si falla, prueben "Bearer <token>")
api-version: 2.0
```

## Las listas

Casi todas las listas aceptan `pageNumber`, `pageSize`, `orderBy`, `filter`, `searchBy`
(búsqueda libre) y `selection` (qué campos devolver). La documentación no dice el máximo de
`pageSize`: lean **todas las páginas** hasta que una venga incompleta, como en Nómina.

## Cómo encontrar lo que hace falta

1. **La ruta**, en [`reference/endpoints.md`](reference/endpoints.md): las 267 lecturas por área.
   Busquen por palabra en inglés: `saleInvoices`, `customers`, `dues`, `purchaseInvoices`,
   `products`, `suppliers`…
2. **Los campos**, en [`reference/schemas.md`](reference/schemas.md), buscando el nombre que va
   después de `→`. Si dice «Lista de `X`», los campos están en `X`.
3. Son archivos grandes: busquen la palabra, no los lean enteros.

**Las áreas más útiles para una asesoría:**

| Qué | Rutas para empezar |
|---|---|
| Facturas emitidas | `GET /api/saleInvoices` → número, fecha, cliente, `taxBase`, `totalTax`, `total` |
| Facturas recibidas | `GET /api/purchaseInvoices` |
| Clientes y proveedores | `GET /api/customers`, `GET /api/suppliers` |
| Cobros, pagos y vencimientos | `GET /api/dues`, `/api/dues/charges`, `/api/dues/payments` |
| Productos | `GET /api/products` |
| Presupuestos, pedidos y albaranes | `saleOffers`, `saleOrders`, `saleDeliveryNotes` (y los de compra) |
| La empresa | `GET /api/company`, `GET /api/companies` |
| Facturas registradas (SII) y TicketBAI | `registeredInvoices`, `GET /api/company/ticketbai` |

**Ideas de producto:** facturación por mes y por cliente, clientes que más facturan, cobros
pendientes y vencidos, días medios de cobro, IVA repercutido y soportado por trimestre.
