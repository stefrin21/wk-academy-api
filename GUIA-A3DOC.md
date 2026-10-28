# Construir con a3doc · guía para el Módulo 5

Hoy cada uno elige **una** API para su producto:

- **Nómina:** siguen con su aplicación y los prompts `api_09` … `api_14`, como hasta ahora.
- **a3doc**, el gestor documental: construyen **a su manera, con sus propios prompts**. Esta guía
  les da el método.

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

**Las claves**, en `producto-wk/.env.local` (son las mismas del jueves):

```
A3DOC_URL=
A3DOC_APIKEY=
A3DOC_TENANT=
A3DOC_USUARIO=
A3DOC_PASSWORD=
```

## El método

El mismo ciclo de siempre, con **sus** prompts:

1. **La funcionalidad:** qué quiero y para quién.
2. **El prompt**, en cuatro partes (abajo).
3. **El código:** Copilot lo construye.
4. **Comprobar** en el navegador cada punto de «Cómo sabemos que salió bien».

Una funcionalidad cada vez. Cuando funcione, la siguiente.

**Siempre al principio del prompt:** `Usa la skill wk-api-a3doc.` Así Copilot conoce la API, sus
campos y sus trampas.

## El primer prompt: la conexión

Es el único que les damos. Cópienlo, cámbienlo si quieren y péguenlo en la chat de Copilot (modo
Agent):

```
Usa la skill wk-api-a3doc (lee .agents/skills/wk-api-a3doc/SKILL.md).

## Propuesta
Quiero que mi aplicación lea los datos de a3doc, el gestor documental,
y me enseñe la lista de mis clientes.

## Qué debe hacer
- Un archivo lib/a3doc.ts, solo para el servidor, que entre en a3doc con
  los datos de .env.local (A3DOC_URL, A3DOC_APIKEY, A3DOC_TENANT,
  A3DOC_USUARIO, A3DOC_PASSWORD), lea lo que haga falta y haga logout
  siempre al terminar, también si hay un error.
- Que mire errorCode en cada respuesta: si no es 0, que enseñe el mensaje.
- Una página /documentos con mis clientes: nombre y NIF.
- Un enlace a /documentos desde la página de inicio.

## Qué NO debe hacer
- Ni página de login ni botón «Entrar»: entra el servidor.
- No usar nunca los métodos que escriben (uploadextended,
  updatedocumentattributes, updateappcompanyname, deletedocument).
- No poner el usuario, la contraseña ni la Apikey en el código
  ni en el navegador.
- No tocar el login de Wolters Kluwer ni las páginas de Nómina.

## Cómo sabemos que salió bien
- En /documentos salen mis clientes (en la prueba eran 31).
- Si recargo la página varias veces, sigue funcionando.
```

**Qué responde Copilot:** crea `lib/a3doc.ts` y la página `/documentos`, y les dice cómo probarla.
Si no encuentra las claves, les pide que las pongan en `producto-wk/.env.local`.

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
| «errorCode 4» | Usuario, contraseña o tenant mal escritos en `.env.local`. |
| «errorCode 6» | El token ya no vale: que haga login otra vez. |
| «errorCode 12» | No quedan licencias libres: alguna sesión se ha quedado abierta. Avisen al profesor. |
| La página tarda mucho | Una llamada por cliente es lenta (más de 1 segundo cada una). Díganle: «Lee todos los documentos una vez, de 100 en 100, y cuenta en la aplicación». |
| «Copilot quiere subir o borrar un documento» | Díganle que no: solo lectura. |
| «Algo falla y no sé qué es» | «Usa next-devtools en el puerto 53971: ¿hay errores? Explícamelos y arréglalos.» |

## Las reglas de siempre

- **Solo lectura.** En a3doc todo es `POST`, también leer: usen solo los métodos de lectura.
- **Las credenciales van en `.env.local`**, que no se sube a GitHub.
- **Los datos son inventados:** se pueden usar todos.
