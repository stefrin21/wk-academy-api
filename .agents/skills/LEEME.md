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

## Cómo se usan

Escriban `/` en la chat de Copilot y elijan la skill, o pídanle a Copilot
«Lee `.agents/skills/<skill>/SKILL.md` y aplícala a…».
