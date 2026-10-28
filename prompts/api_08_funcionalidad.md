# Prompt API 08 · Construir una funcionalidad suya

**Para qué:** convertir una de sus historias de usuario en una funcionalidad de verdad, dentro de
su aplicación. Siempre en dos tiempos: **primero el plan, después el código.**

### 1 · Primero, el plan

```
Lee la historia número [1] de docs/historias.md.
Conviértela en un prompt con cuatro partes: Propuesta, Qué debe hacer, Qué NO debe hacer
y Cómo sabemos que salió bien.
Respeta las reglas de #file:FICHA-API-WK.md: solo lecturas.
Lee .agents/skills/wk-api-nomina/SKILL.md y di qué rutas y campos de la API vas a usar.
Pide un enlace para llegar desde las páginas que ya existen.
En «Qué NO debe hacer», incluye: no cambiar nada que este prompt no pida (reglas en
.github/copilot-instructions.md).
Añade al final una parte «Al terminar», como en los prompts de prompts/api_02 a api_05: que
compruebes tú con curl.exe lo que se pueda sin el navegador y me enseñes una tabla.
Enséñame el prompt y espera a que te diga que sí. No escribas código todavía.
```

**Qué hacen ustedes:** léanlo. ¿Es lo que querían? ¿Falta algo? ¿Sobra algo? Corríjanlo
escribiéndole a Copilot lo que cambiarían.

### 2 · Después, el código

```
De acuerdo. Constrúyelo.
```

### 3 · Comprobarlo

Abran la aplicación y prueben cada punto de **«Cómo sabemos que salió bien»**. Si algo falla:

```
Usa next-devtools en el puerto 53971: ¿hay errores en mi aplicación?
Explícamelos en palabras sencillas y arréglalos.
```

Cuando funcione, marquen la historia como hecha en `docs/historias.md` y pasen a la siguiente.
