---
name: wk-api-a3factura
description: Leer datos de la API de a3factura (a3innuva ERP) de Wolters Kluwer. Úsala cuando haya que conectarse a a3factura o buscar qué datos ofrece (facturas emitidas y recibidas, clientes, proveedores, cobros, pagos, vencimientos, productos, presupuestos, pedidos, albaranes…), escribir código que la llame o llamarla desde la chat. Incluye el login propio de a3factura, las cabeceras y la lista completa de las 267 lecturas con sus campos.
---

# API de a3factura (a3innuva ERP · Wolters Kluwer)

> ✅ **Login y lecturas principales probados el 29/10/2026** con una cuenta de prueba
> (*WKE_AI_Product_Academy_a3factura*): ver «Comprobado con datos reales» más abajo. El resto sale
> de la documentación oficial (OpenAPI «API a3innuva ERP - a3factura» 2.0, portal a3developers,
> 26/10/2026). Hace falta **una cuenta de a3factura** y **la Apikey de a3factura**: con las
> credenciales de Nómina no se entra. Lo que funcione o falle, apúntenlo aquí.

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

**Cada lectura lleva estas cabeceras:**

```
accept: application/json
Ocp-Apim-Subscription-Key: <Apikey de a3factura>
Authorization: <token>          (el token solo, SIN «Bearer»: con «Bearer» responde 401)
api-version: 2.0
```

## Comprobado con datos reales (29/10/2026)

- **Las credenciales son las de la aplicación web** (correo y contraseña), pero **sin MFA**: el
  código por correo solo lo pide la web.
- **Login:** funcionan `POST /api/token/signin` y `POST /api/users/login`, los dos con el cuerpo
  `{"mail": "...", "password": "..."}` y las cabeceras `Content-Type: application/json`,
  `api-version: 2.0` y la Apikey. Con `user` o `username` en vez de `mail`: **401**.
- **La respuesta del login** trae `token`, `refreshToken`, `id`, `mail`, `isAdvisor` y
  `companies` (con `id`, `name`, `idCDA`).
- **Con una sola empresa no hay que elegirla:** el token del login ya sirve para leer.
- **`Authorization: <token>`, sin «Bearer».** Con «Bearer» delante: **401**.
- **`pageSize`:** acepta al menos 500 sin cortar (en Nómina el máximo es 50). Aun así, lean
  página a página hasta que una venga incompleta.
- **Trampa de nombres:** el IVA se llama `totalTax` en las facturas emitidas y `taxTotal` en las
  recibidas.
- **Datos de prueba raros:** el panel de la web dice 48 millones € pendientes de cobro con menos
  de 30.000 € facturados en 2026. Avisen antes de enseñar una cifra rara.
- **Sin probar todavía:** cuánto dura el token y `POST /api/token/refresh`.

| Ruta | Elementos en la cuenta de prueba | Campos útiles |
|---|---|---|
| `GET /api/products` | 36 | `code`, `description`, `salePrice`, `purchasePrice`, `stockUnits` |
| `GET /api/customers` | 73 | `code`, `name`, `vatNumber`, `town`, `province`, `enabled` |
| `GET /api/suppliers` | 13 | `code`, `name`, `vatNumber`, `town`, `enabled` |
| `GET /api/saleInvoices` | 791 | `number`, `date`, `customerId`, `customerName`, `taxBase`, `totalTax`, `total`, `situation`, `isRectificative` |
| `GET /api/purchaseInvoices` | 40 | `number`, `date`, `supplierId`, `supplierName`, `taxBase`, `taxTotal`, `total`, `situation` |

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
