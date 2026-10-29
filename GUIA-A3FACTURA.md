# Construir con a3factura · guía para el Módulo 5

Hoy cada uno elige **una** API para su producto:

- **Nómina:** siguen con su aplicación y los prompts `api_09` … `api_14`, como hasta ahora.
- **a3doc**, el gestor documental: con `GUIA-A3DOC.md`.
- **a3factura**, la facturación: construyen **a su manera, con sus propios prompts**. Esta guía
  les da el método, las reglas de la conexión e ideas.

Las tres valen igual para la demo. **No las mezclen hoy**: son entornos de prueba distintos y
sus empresas no coinciden.

## Antes de empezar: el acceso

a3factura necesita **una cuenta propia**, distinta de la de Nómina. Si quieren usarla, pídanla al
profesor. Wolters Kluwer les manda un correo para crear su usuario y su contraseña, y les da
**una Apikey de a3factura**.

- Con ese usuario y esa contraseña entran en la web (`https://a3factura-app.wolterskluwer.es`),
  que pide además un código por correo.
- La API usa **el mismo usuario y la misma contraseña, sin el código por correo**.

## Qué es a3factura

El programa de facturación de la empresa: lo que vende y a quién, lo que compra y a quién, y lo
que tiene pendiente de cobrar y de pagar.

En nuestra prueba (29/10/2026):

| Qué | Cuánto |
|---|---|
| Clientes | 73 |
| Proveedores | 13 |
| Productos | 36 (toneles, soportes…) |
| Facturas emitidas | 791, de 2024 a 2026 |
| Facturas recibidas | 40 |

**Ojo con los datos de prueba:** la web dice 48 millones € pendientes de cobro, con menos de
30.000 € facturados en 2026. Una cifra rara no siempre es un error de su aplicación.

## Lo distinto: no hay página de login

Con Nómina, ustedes entran en la página de Wolters Kluwer. Con a3factura **entra el servidor**,
solo:

1. Lee el usuario, la contraseña y la Apikey de `.env.local`.
2. Hace el login y recibe un token.
3. Lee lo que necesita la página, con ese token.

Ustedes abren la página y ven los datos. **Ni página de login ni botón «Entrar».** La contraseña
y el token no salen nunca del servidor.

**Las claves:** no tienen que preparar nada. Al conectar (abajo), Copilot añade en
`producto-wk/.env.local` estas líneas vacías y les dice qué poner en cada una:

```
A3F_APIKEY=
A3F_USER=
A3F_PASSWORD=
```

Ustedes **pegan los valores**: la Apikey del correo de Wolters Kluwer, su correo y su contraseña
de a3factura. Sin espacios ni comillas. Y **guarden el archivo**.

## El método

El mismo ciclo de siempre, con **sus** prompts:

1. **La funcionalidad:** qué quiero y para quién.
2. **El prompt**, en cuatro partes (abajo).
3. **El código:** Copilot lo construye.
4. **Comprobar** en el navegador cada punto de «Cómo sabemos que salió bien».

Una funcionalidad cada vez. Cuando funcione, la siguiente.

**Siempre al principio del prompt:** `Usa la skill wk-api-a3factura.` Así Copilot conoce la API,
sus campos y sus trampas. Y adjunten `#file:GUIA-A3FACTURA.md` la primera vez.

## Lo primero: la conexión

Su primera funcionalidad es conectar su aplicación con a3factura. **El prompt lo escriben
ustedes**, con las cuatro partes de abajo. Tiene que pedirle a Copilot estas siete cosas:

1. **La skill:** que empiece con `Usa la skill wk-api-a3factura.`
2. **Las claves:** que añada en `producto-wk/.env.local` las líneas vacías, les diga qué valor va
   en cada una y espere a que ustedes las rellenen.
3. **Solo en el servidor:** un archivo aparte para hablar con a3factura. Usuario, contraseña,
   Apikey y token nunca en el código ni en el navegador.
4. **Sin página de login:** entra el servidor, solo. Ni página ni botón «Entrar».
5. **El token tal cual:** en la cabecera `Authorization` va el token solo, **sin «Bearer»**.
6. **Solo lecturas (GET).** La única excepción es el login, que es un `POST` pero no cambia nada.
7. **Errores de verdad:** si algo falla, enseñar el código HTTP y la ruta, no un mensaje genérico.

Y una primera página para comprobarlo: por ejemplo, la lista de sus clientes, con un enlace
desde la página de inicio.

**No toquen** el login de Wolters Kluwer ni las páginas de Nómina.

**Cómo saben que salió bien:**

- La página enseña sus clientes (en nuestra prueba, 73).
- Si recargan varias veces, sigue funcionando.
- No hay ninguna página de login.

## Sus prompts: las cuatro partes

```
Usa la skill wk-api-a3factura.

## Propuesta
Quiero … para … (qué y para quién, en una frase)

## Qué debe hacer
- …

## Qué NO debe hacer
- Escribir en a3factura: solo lectura.
- …

## Cómo sabemos que salió bien
- …
```

**Un prompt malo:** «Hazme un dashboard de facturas». Copilot se lo inventa todo.

**Un prompt bueno:** «Quiero ver cuánto he facturado cada mes de 2025, para saber qué meses van
peor. En una tabla, con la suma de `total` de las facturas emitidas de cada mes. Si un mes no
tiene facturas, 0.»

## Ideas

Úsenlas, cámbienlas o inventen la suya:

| Idea | Para quién | Qué datos |
|---|---|---|
| **Facturación por mes** | El gerente que mira cómo va el año | Facturas emitidas (`date`, `total`), sumadas por mes; comparar con el año anterior |
| **Los mejores clientes** | El comercial | Facturas emitidas por cliente (`customerName`, `total`): los 10 que más facturan |
| **¿Quién me debe?** | El que lleva los cobros | Las facturas sin cobrar y los vencimientos (`/api/dues`), por cliente y por antigüedad |
| **El IVA del trimestre** | El asesor fiscal | IVA repercutido (`totalTax` de las emitidas) menos IVA soportado (`taxTotal` de las recibidas), por trimestre |
| **Qué se vende** | El responsable de producto | Productos (`/api/products`) y su precio de venta y de compra: margen de cada uno |
| **En qué gasto** | El gerente | Facturas recibidas por proveedor (`supplierName`, `total`) |

## Si algo no cuadra

| Lo que ven | Qué pasa y qué hacer |
|---|---|
| **401** en el login | Usuario o contraseña mal copiados en `producto-wk/.env.local`: cópienlos otra vez, sin espacios ni comillas. O el campo del login no se llama `mail`: díganle «Mira la skill wk-api-a3factura: el login lleva `mail` y `password`». |
| **401** en las lecturas | El token va con «Bearer» delante. Díganle: «El token va solo, sin Bearer: mira la skill». |
| **404** | Falta la cabecera `api-version: 2.0` (no 1.0) o la ruta está mal escrita. |
| El IVA de las facturas recibidas sale vacío | En las recibidas el campo se llama `taxTotal`; en las emitidas, `totalTax`. |
| Una cifra enorme o rara | Los datos de prueba tienen cifras raras. Compárenla con la web de a3factura antes de cambiar nada. |
| `SELF_SIGNED_CERT_IN_CHAIN` o «fetch failed» | La red o el antivirus de su ordenador. Paren la aplicación, escriban en PowerShell `$env:NODE_OPTIONS="--use-system-ca"` y vuelvan a arrancar con `npm run dev`. **No** acepten que Copilot ponga `NODE_TLS_REJECT_UNAUTHORIZED=0`. |
| «outside of `<Suspense>`» o «blocking» | Díganle: «Pon la parte que llama a a3factura dentro de `<Suspense>`, como en las páginas de Nómina. No uses "use cache".» |
| La página tarda mucho | Que no haga una llamada por cliente: «Lee todas las facturas una vez, de 50 en 50, y cuenta en la aplicación». |
| «Copilot quiere crear o emitir una factura» | Díganle que no: solo lectura. |
| «Algo falla y no sé qué es» | «Usa next-devtools en el puerto 53971: ¿hay errores? Explícamelos y arréglalos.» |

## Las reglas de siempre

- **Solo lectura.** La API también crea, cambia, borra y emite facturas: no se usa nunca. Solo
  `GET`, más el login.
- **Las credenciales van en `.env.local`**, que no se sube a GitHub.
- **Los datos son inventados:** se pueden usar todos.
