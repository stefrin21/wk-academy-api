# Prompt API 07 · Su PRD, con las skills

**Para qué:** antes de construir su producto, dejar escrito **qué problema resuelve, para quién y
qué va a hacer**. Lo hacemos en tres pasos, con las skills que ya están en `.agents/skills/`.
Cada paso guarda un archivo en la carpeta `docs/`, y el siguiente lo usa.

**Antes de empezar:** piensen en **una idea en una frase**: qué le gustaría saber a un asesor
laboral sobre las empresas que lleva. Por ejemplo: *«saber qué empresas tienen más rotación de
personal este año»*.

### Paso 1 · El problema

```
Lee .agents/skills/problem-statement/SKILL.md y aplica la skill a esta idea:
[SU IDEA EN UNA FRASE]

Contexto: somos una asesoría laboral. Nuestra aplicación lee, con las API de Wolters Kluwer,
los datos de a3innuva Nómina de las empresas que llevamos: empresas, personas en plantilla,
fechas de alta y de baja, centros de trabajo y nóminas.

No propongas soluciones todavía. Separa hechos, supuestos y preguntas abiertas.
Responde en español y guárdalo en docs/problema.md.
```

### Paso 2 · El PRD

```
Lee .agents/skills/prd-development/SKILL.md.
Usa docs/problema.md y las reglas de #file:FICHA-API-WK.md.
Genera un PRD breve, de una página, para una primera versión que se pueda construir en una
mañana. Separa lo que sabemos de lo que suponemos y no inventes datos que falten.
Responde en español y guárdalo en docs/prd.md.
```

### Paso 3 · Las historias de usuario

```
Lee .agents/skills/user-story/SKILL.md.
A partir de docs/prd.md, escribe de 2 a 4 historias de usuario, ordenadas de la más
importante a la menos, cada una con sus criterios de aceptación.
Que cada una se pueda construir en menos de una hora con los datos de la API.
Responde en español y guárdalo en docs/historias.md.
```

**Cómo sabemos que salió bien:** en `docs/` hay tres archivos (`problema.md`, `prd.md` e
`historias.md`) y los han **leído y corregido**: Copilot propone, ustedes deciden.
