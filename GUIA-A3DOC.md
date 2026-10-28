# Construir con a3doc · guía para el Módulo 5

Hoy cada uno elige **una** API para su producto:

- **Nómina:** siguen con su aplicación y los prompts `api_09` … `api_14`, como hasta ahora.
- **a3doc**, el gestor documental: construyen **a su manera, con sus propios prompts**. Esta guía
  les da el método, las reglas de la conexión e ideas.

Las dos valen igual para la demo. **No las mezclen hoy**: son entornos de prueba distintos y
sus empresas no coinciden.

## Qué es a3doc

El archivo digital de la asesoría: los documentos de cada cliente (contratos, nóminas, modelos
fiscales, facturas…), ordenados por **categorías** y con **etiquetas** (empresa, centro,
trabajador, modelo, período, fecha, si el cliente lo ve o no).

En nuestra prueba (28/10/2026):

| Qué | Cuánto |
|---|---|
| Clientes | 31: empresas de demostración (DEMO, S.L., A3SOFT, MONTAJES SAN JUAN…) y personas |
| Categorías | 177. Las grandes: Laboral, Fiscal, Gestión, Facturas a contabilizar, Otros Documentos |
| Documentos | 862, la mayoría de 2025 |

## Lo distinto: no hay página de login

Con Nómina, ustedes entran en la página de Wolters Kluwer. Con a3doc **entra el servidor**, solo:

1. Lee el tenant, el usuario y la contraseña de `.env.local`.
2. Hace el login y recibe un token.
3. Lee lo que necesita la página.
4. **Cierra la sesión (logout), siempre**, también si algo falla.

Ustedes abren la página y ven los datos. **Ni página de login ni botón «Entrar».** La contraseña
no sale nunca del servidor.

**Las claves:** no tienen que preparar nada. Al conectar (abajo), Copilot añade en
`producto-wk/.env.local` estas líneas vacías y les dice qué poner en cada una:

```
A3DOC_URL=
A3DOC_APIKEY=
A3DOC_TENANT=
A3DOC_USUARIO=
A3DOC_PASSWORD=
```

Ustedes **pegan los valores** que usaron el jueves para conectarse: la dirección, la Apikey, el
código de cliente (tenant), el usuario y la contraseña de a3doc.

## El método

El mismo ciclo de siempre, con **sus** prompts:

1. **La funcionalidad:** qué quiero y para quién.
2. **El prompt**, en cuatro partes (abajo).
3. **El código:** Copilot lo construye.
4. **Comprobar** en el navegador cada punto de «Cómo sabemos que salió bien».

Una funcionalidad cada vez. Cuando funcione, la siguiente.

**Siempre al principio del prompt:** `Usa la skill wk-api-a3doc.` Así Copilot conoce la API, sus
campos y sus trampas.

## Lo primero: la conexión

Su primera funcionalidad es conectar su aplicación con a3doc. **El prompt lo escriben ustedes**,
con las cuatro partes de abajo. Tiene que pedirle a Copilot estas seis cosas:

1. **La skill:** que empiece con `Usa la skill wk-api-a3doc.`
2. **Las claves:** que añada en `producto-wk/.env.local` las líneas vacías, les diga qué valor va
   en cada una y espere a que ustedes las rellenen.
3. **Solo en el servidor:** un archivo aparte para hablar con a3doc. Usuario, contraseña y Apikey
   nunca en el código ni en el navegador.
4. **Sin página de login:** entra el servidor, solo. Ni página ni botón «Entrar».
5. **Logout siempre** al terminar, también si algo falla.
6. **Mirar `errorCode`** en cada respuesta: si no es 0, enseñar el mensaje.

Y una primera página para comprobarlo: por ejemplo, la lista de sus clientes.

**No toquen** el login de Wolters Kluwer ni las páginas de Nómina.

**Cómo saben que salió bien:**

- La página enseña sus clientes (en nuestra prueba, 31).
- Si recargan varias veces, sigue funcionando.
- No hay ninguna página de login.

## Sus prompts: las cuatro partes

```
Usa la skill wk-api-a3doc.

## Propuesta
Quiero … para … (qué y para quién, en una frase)

## Qué debe hacer
- …

## Qué NO debe hacer
- Escribir en a3doc: solo lectura.
- …

## Cómo sabemos que salió bien
- …
```

**Un prompt malo:** «Hazme una aplicación con los documentos». Copilot se lo inventa todo.

**Un prompt bueno:** «Quiero ver en la ficha de cada cliente cuántos documentos tiene en cada
categoría, para saber qué le falta. En una tabla. Si no tiene documentos, una frase.»

## Ideas

Úsenlas, cámbienlas o inventen la suya:

| Idea | Para quién | Qué datos |
|---|---|---|
| **La ficha del cliente** | El asesor que busca un documento | Sus documentos: título, fecha, categoría, trabajador; y un botón para descargarlo |
| **¿Qué le falta?** | El asesor que cierra el trimestre | Por cliente, si tiene el modelo 130 de cada período (etiquetas «Modelo» y «Período») |
| **Clientes parados** | El responsable de la asesoría | Clientes sin documentos nuevos desde hace X meses (fecha del último documento) |
| **Por trabajador** | El asesor laboral | Los documentos de cada trabajador (etiqueta «Trabajador»): contratos, nóminas, finiquitos |
| **¿Lo ve el cliente?** | El asesor antes de una reunión | Qué documentos son visibles para el cliente y cuáles no |
| **El volumen de trabajo** | El responsable | Documentos por categoría y por mes, en un gráfico |

## Si algo no cuadra

| Lo que ven | Qué pasa y qué hacer |
|---|---|
| «errorCode 3» | Faltan campos en la petición. Díganle: «Mira las trampas de la skill wk-api-a3doc». |
| «errorCode 4» | Usuario, contraseña o tenant mal copiados en `producto-wk/.env.local`: cópienlos otra vez, sin espacios ni comillas. |
| «errorCode 6» | El token ya no vale: que haga login otra vez. |
| «errorCode 12» | No quedan licencias libres: alguna sesión se ha quedado abierta. Avisen al profesor. |
| La página tarda mucho | Una llamada por cliente es lenta (más de 1 segundo cada una). Díganle: «Lee todos los documentos una vez, de 100 en 100, y cuenta en la aplicación». |
| «outside of `<Suspense>`» o «blocking» | Díganle: «Pon la parte que llama a a3doc dentro de `<Suspense>`, como en las páginas de Nómina. No uses "use cache".» |
| «Copilot quiere subir o borrar un documento» | Díganle que no: solo lectura. |
| «Algo falla y no sé qué es» | «Usa next-devtools en el puerto 53971: ¿hay errores? Explícamelos y arréglalos.» |

## Las reglas de siempre

- **Solo lectura.** En a3doc todo es `POST`, también leer: usen solo los métodos de lectura.
- **Las credenciales van en `.env.local`**, que no se sube a GitHub.
- **Los datos son inventados:** se pueden usar todos.
