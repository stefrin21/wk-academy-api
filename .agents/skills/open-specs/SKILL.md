---
name: open-specs
description: Convertir una idea, una funcionalidad de un PRD o una petición suelta en un prompt-especificación listo para pegar en un asistente de código (Copilot, Claude…), en cualquier proyecto, siempre con la misma estructura — título «# Prompt NN · …», un bloque con Propuesta, Qué debe hacer, Qué NO debe hacer, Cómo sabemos que salió bien y Al terminar, y la nota «Después:» fuera del bloque. Úsala siempre que alguien quiera «escribir el prompt», «hacer la spec», «convertir mi idea / mi funcionalidad / mi historia de usuario en un prompt», preparar lo que va a construir, o pasar de un PRD al código, aunque no diga «spec». Solo escribe el prompt: no escribe código.
---

# Open specs · De una idea a un prompt para construirla

Esta skill escribe **el prompt** que después se pega en un asistente de código para construir
algo. No construye nada: escribe la especificación, la enseña y espera a que la persona diga que
sí. Separar el plan del código es lo que evita que el asistente haga de más o de menos.

Sirve para cualquier proyecto. Todo lo que es propio de un proyecto (sus reglas, su forma de
arrancar, sus datos, sus nombres) se descubre leyendo el proyecto, no se supone.

Quien la usa puede no ser programador. El prompt tiene que entenderse leyéndolo, en palabras
sencillas, y tiene que poder comprobarse sin saber programar.

## 1 · Saber qué hay que construir

La entrada puede ser:

- **Una funcionalidad de un PRD** u otro documento: léela entera, con sus criterios de éxito si
  los tiene. Son el punto de partida de «Cómo sabemos que salió bien».
- **Una idea en una frase**: «quiero ver qué clientes no han pagado este mes».
- **Una petición suelta**: «añade un filtro por fecha en la lista».

Si falta algo que cambia el prompt (para quién es, dónde se ve, con qué datos), haz **pocas
preguntas, numeradas, cada una con tu respuesta recomendada**, y espera. Si solo faltan detalles
menores, decide tú y dilo en una línea al enseñar el prompt.

## 2 · Conocer el proyecto antes de escribir

Un prompt que pide algo que ya existe, o que contradice las reglas del proyecto, hace perder
tiempo. Antes de escribir, mira lo justo:

1. **Las reglas del proyecto**, si existen: `.github/copilot-instructions.md`, `CLAUDE.md`,
   `AGENTS.md`, `CONTRIBUTING.md`, el `README`. Lo que digan (qué no tocar, cómo se arranca, si el
   asistente puede arrancar la aplicación o no, en qué idioma responder) manda sobre esta skill.
2. **Lo que ya está hecho**: la estructura de carpetas, las páginas o pantallas que existen, los
   módulos que ya hablan con datos o servicios. El prompt construye encima de eso: reutiliza lo
   que hay y dice dónde engancha lo nuevo (por ejemplo, un enlace desde una página existente).
3. **Las fuentes de datos**: si el proyecto usa una API, una base de datos o un archivo, busca su
   documentación (en el repo, en sus skills, en sus fichas) y comprueba que los datos que pide la
   idea existen de verdad. Escribe en el prompt los nombres exactos (rutas, tablas, campos). Si no
   puedes comprobar algo, dilo en el prompt: «si esto falla, enseñar el error de verdad y parar».
4. **Los prompts que ya hay**: si el proyecto guarda prompts o specs (una carpeta `prompts/`,
   `specs/`, `docs/specs/`…), míralos para seguir su numeración, su serie y su tono.
5. **El tamaño**: un prompt se construye y se prueba en una sesión corta (menos de una hora). Si
   la idea es más grande, pártela en varios prompts que se puedan probar uno a uno, y dilo.

## 3 · Escribir el prompt

Usa **exactamente** esta estructura. Las partes y su orden no cambian: así cada prompt se lee y
se comprueba igual, en cualquier proyecto.

````markdown
# Prompt NN · [Título corto, en palabras de quien lo va a usar]

**Antes de pegarlo:** [solo si hace falta: qué adjuntar o qué tener en cuenta]

```
## Propuesta
Quiero [lo que la persona quiere conseguir, en una o dos frases, sin palabras técnicas].

## Qué debe hacer
- [Una tarea concreta por línea: qué archivo, qué dato, qué se enseña y dónde.]
- ...

## Qué NO debe hacer
- [Lo que queda fuera de este prompt, para que no haga de más.]
- No cambiar nada que este prompt no pida.

## Cómo sabemos que salió bien
- [Algo que la persona puede ver o probar ella sola.]
- [El caso vacío o raro: «sin datos, enseña 0 / una frase, no un error».]

## Al terminar
Comprueba tú los puntos de «Cómo sabemos que salió bien» que se puedan comprobar sin mí.
Enséñame una tabla: qué has comprobado y qué ha salido. Y dime qué tengo que comprobar yo.
```

**Después:** [Lo que hace la persona cuando el asistente termina: qué abrir, qué probar, qué
reiniciar si hace falta.]
````

### Cómo rellenar cada parte

**Título** (fuera del bloque). Si el proyecto ya tiene prompts numerados, sigue su serie y su
numeración (por ejemplo, después de «Prompt API 05» viene «Prompt API 06»). Si no, empieza por
`# Prompt 01 · …`. El título dice lo que se va a conseguir, no cómo se hace: «Los clientes que no
han pagado», no «Endpoint de facturas».

**Antes de pegarlo** (fuera del bloque, opcional). Solo cuando haga falta: un archivo que hay que
adjuntar al chat, algo que la persona tiene que tener listo, o una trampa conocida en la que el
asistente suele caer. Si no hace falta, quita la línea.

**Propuesta.** Empieza por «Quiero…». Es el *para qué*, en palabras de la persona: así el
asistente puede decidir bien los detalles que el prompt no dice.

**Qué debe hacer.** Es la parte más larga y la más concreta. Una tarea por línea, con:

- los **archivos** que se crean o se cambian, con su ruta;
- los **datos exactos** que se usan (rutas de la API, tablas, campos) y la regla de cálculo si la
  hay;
- **qué se enseña y dónde**, y cómo se llega desde lo que ya existe;
- las reglas técnicas del proyecto que apliquen a esta tarea (las que encontraste en el paso 2);
- qué pasa **si no hay datos** y qué pasa **si algo falla** (enseñar el error de verdad, no un
  mensaje genérico).

**Qué NO debe hacer.** Lo que queda fuera de este prompt («No hacer todavía gráficos», «No
instalar otras librerías»), las prohibiciones del proyecto que apliquen (por ejemplo, «solo
lecturas en la API»), y siempre, al final, **«No cambiar nada que este prompt no pida»**: es la
línea que más tiempo ahorra. Si el proyecto tiene un archivo de reglas, nómbralo en esa línea:
«No cambiar nada que este prompt no pida (reglas en .github/copilot-instructions.md)».

**Cómo sabemos que salió bien.** Dos a cuatro puntos que la persona puede comprobar **ella
sola**: en el navegador, en la aplicación, en un archivo. Con la dirección o el sitio exacto.
Siempre uno con el caso vacío o raro. Si viene de un PRD, parte de sus criterios de éxito y
hazlos comprobables.

**Al terminar.** Es lo que hace que el asistente compruebe su propio trabajo y le diga a la
persona qué le toca a ella. Adáptala al proyecto con lo que encontraste en el paso 2: cómo se
comprueba (los tests, una llamada a la aplicación, abrir un archivo) y si el asistente puede
arrancar la aplicación o no. Por ejemplo: «La aplicación ya está encendida en el puerto 3000: no
la arranques. Comprueba tú, con curl a http://localhost:3000, …». Si no hay nada que el
asistente pueda comprobar por su cuenta, quita esta parte.

**Después** (fuera del bloque). Lo que hace la persona cuando el asistente termina: abrir tal
página, probar cada punto, reiniciar algo si se ha cambiado la configuración, marcar la
funcionalidad como hecha en el PRD si venía de ahí.

### Estilo

- En el idioma de la persona, con frases cortas y sin jerga. Las palabras técnicas que hagan
  falta (nombres de archivos, rutas, campos, comandos) van tal cual, porque el asistente las
  necesita exactas.
- Líneas de unos 100 caracteres dentro del bloque, para que se lean bien en el chat.
- Cada línea de «Qué debe hacer» es algo que se puede hacer; cada línea de «Cómo sabemos que
  salió bien» es algo que se puede ver.

## 4 · Enseñarlo y esperar

1. Enseña el prompt completo en la chat.
2. Debajo, en dos o tres líneas: qué datos o partes del proyecto usa (y si los has podido
   comprobar), qué has decidido tú y, si la has partido, cuáles son los siguientes prompts.
3. Guárdalo donde el proyecto guarda sus prompts o specs. Si no hay sitio, en
   `docs/specs/NN-titulo-corto.md` (crea la carpeta si no existe).
4. **Espera a que la persona diga que sí.** Si corrige algo, cambia el prompt y enséñalo otra
   vez. No escribas código: el código se hace después, pegando el prompt.

## Ejemplo

Proyecto: una aplicación web de una tienda, con una página `/pedidos`. Entrada: *«quiero poder
descargar los pedidos del mes en Excel»*.

````markdown
# Prompt 03 · Descargar los pedidos del mes

```
## Propuesta
Quiero descargar en un archivo los pedidos de un mes, para abrirlos en Excel y hacer cuentas.

## Qué debe hacer
- En la página /pedidos, un botón «Descargar CSV» junto al selector de mes.
- El archivo trae una fila por pedido del mes elegido, con: número, fecha, cliente, importe
  y estado. Los mismos datos que ya enseña la tabla, leídos con la función que ya existe en
  lib/pedidos.ts.
- Separador «;» y coma decimal, para que Excel en español lo abra bien.
- Nombre del archivo: pedidos-AAAA-MM.csv.
- Si el mes no tiene pedidos, el botón sale desactivado y una frase lo dice.

## Qué NO debe hacer
- No cambiar la tabla ni el selector de mes.
- No instalar librerías para generar Excel: un CSV basta.
- No cambiar nada que este prompt no pida (reglas en .github/copilot-instructions.md).

## Cómo sabemos que salió bien
- En /pedidos, con un mes con pedidos, pulso «Descargar CSV» y se baja pedidos-AAAA-MM.csv.
- Lo abro en Excel y veo una fila por pedido, con los importes como números.
- Con un mes sin pedidos, el botón sale desactivado.

## Al terminar
La aplicación ya está encendida: no la arranques. Comprueba tú lo que se pueda sin el
navegador (por ejemplo, pide el CSV de un mes y mira sus primeras líneas). Enséñame una
tabla: qué has comprobado y qué ha salido. Y dime qué tengo que comprobar yo.
```

**Después:** descarguen el archivo de un mes con pedidos, ábranlo en Excel y comprueben que los
importes suman lo mismo que en la página.
````
