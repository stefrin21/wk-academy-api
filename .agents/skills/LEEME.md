# Skills

Skills ya instaladas, para no tener que descargarlas.

## Skills de producto (Módulo 2)

| Skill | Para qué |
|---|---|
| `problem-statement` | El problema: quién está bloqueado, qué intenta hacer y por qué importa |
| `jobs-to-be-done` | El usuario: sus jobs, pains y gains |
| `prd-development` | El PRD: problema, usuarios, solución y criterios de éxito |
| `user-story` | Las historias de usuario, con criterios de aceptación en Gherkin |

**Origen:** [Product-Manager-Skills](https://github.com/deanpeters/Product-Manager-Skills), de Dean
Peters. Licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Los
archivos `SKILL.md` están copiados sin cambios.

## Poner a prueba una idea

| Skill | Para qué |
|---|---|
| `grilling` | Copilot les **interroga** sobre un plan, una decisión o una idea, en rondas de preguntas, cada una con su respuesta recomendada, hasta que no quede nada sin decidir |
| `grill-me` | Atajo que llama a `grilling` |

**Cuándo usarla:** antes de construir una funcionalidad, o con su PRD, para descubrir lo que no
habían pensado. Por ejemplo: *«Usa la skill grilling con mi idea: [su idea]»*. Copilot pregunta;
ustedes contestan («sí» acepta la respuesta recomendada).

**Origen:** [mattpocock/skills](https://github.com/mattpocock/skills), de Matt Pocock. Licencia MIT.
`grilling` está copiada sin cambios; a `grill-me` le hemos añadido una línea para que funcione
también en Copilot.

## Las API de Wolters Kluwer

| Skill | Para qué |
|---|---|
| `wk-api-nomina` | Todo sobre la API de a3innuva Nómina: el login, las cabeceras, las trampas, las **189 lecturas** que ofrece y sus campos. Copilot la usa para saber qué datos existen y cómo pedirlos |
| `wk-api-a3factura` | La API de a3factura: facturas emitidas y recibidas, clientes, cobros, pagos, productos… (**267 lecturas**). Tiene su propio login y su propia Apikey. **Sin probar todavía** |
| `wk-api-contabilidad` | La API de a3innuva Contabilidad: cuentas, asientos, balance, facturas, impuestos… (**36 lecturas**). Con su propia Apikey. **Sin probar todavía** |
| `wk-api-a3doc` | La API de a3doc Cloud, el gestor documental: clientes, categorías y documentos. Login propio, todo con `POST` y el token dentro del cuerpo. **Sin probar todavía** |

**Cuándo usarla:** cada vez que quieran algo de la API que no está en la ficha. Por ejemplo:
*«Usa la skill wk-api-nomina: ¿qué datos hay sobre las bajas por enfermedad?»* o *«…¿cómo saco
las horas de formación de cada empresa?»*.

**Origen:** la definición oficial de cada API (OpenAPI) del portal a3developers de Wolters Kluwer.

## Cómo se usan

Escriban `/` en la chat de Copilot y elijan la skill, o pídanle a Copilot
«Lee `.agents/skills/<skill>/SKILL.md` y aplícala a…».
