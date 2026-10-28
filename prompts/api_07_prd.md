# Prompt API 07 · Su PRD, con la skill

**Para qué:** antes de construir su producto, dejar escrito **qué problema resuelve, para quién y
qué va a hacer**, con **2 funcionalidades**. Lo hacemos con la skill `prd-development`, que ya
está en `.agents/skills/`. Copilot lo guarda en `docs/prd.md`.

**Antes de empezar:** piensen en **una idea en una frase**: qué le gustaría saber a un asesor
laboral sobre las empresas que lleva. Por ejemplo: *«saber qué empresas tienen más rotación de
personal este año»*. En el prompt, cambien `[SU IDEA EN UNA FRASE]` por la suya.

```
Lee .agents/skills/prd-development/SKILL.md y aplica la skill a esta idea:
[SU IDEA EN UNA FRASE]

Contexto: somos una asesoría laboral. Nuestra aplicación ya entra con Wolters Kluwer
y enseña nuestras empresas y la ficha de cada una. Lee los datos de a3innuva Nómina:
lo que existe de verdad está en .agents/skills/wk-api-nomina/SKILL.md.

Cómo lo quiero:
- Un PRD breve, de una página, en español. No me hagas preguntas: si te falta algo,
  escribe un supuesto y márcalo como «Supuesto».
- Solo estas partes: el problema, para quién, la solución, las 2 funcionalidades,
  cómo sabremos que funciona y qué queda fuera.
- Exactamente 2 funcionalidades, coherentes entre sí, que se puedan construir en
  menos de una hora cada una. Para cada una: qué hace, qué rutas de la API usa
  (compruébalas en la skill wk-api-nomina) y «Cómo sabemos que salió bien».
- Sin user stories.
Guárdalo en docs/prd.md y enséñame un resumen.
```

**Después:** **lean `docs/prd.md` y corríjanlo**: Copilot propone, ustedes deciden. Si algo no
les convence, díganselo con sus palabras: *«quita esto»*, *«esto no es así»*, *«la funcionalidad 2
es demasiado grande: pártela»*.

**Cómo sabemos que salió bien:** existe `docs/prd.md`, con 2 funcionalidades que usan datos que
la API tiene de verdad, y lo han **leído y corregido**.
