# Prompt API 02 · Entrar con la cuenta de Wolters Kluwer

**Antes de pegarlo:** adjunten la ficha con `#file:FICHA-API-WK.md`. El login no se hace en
una página nuestra: el usuario entra en la página de Wolters Kluwer y vuelve a la aplicación.

```
## Propuesta
Quiero que el usuario entre en la aplicación con su cuenta de Wolters Kluwer.

## Qué debe hacer
- Crear lib/wk.ts, solo de servidor (import "server-only"), con:
  - la dirección de login de WK (flujo Authorization Code, con el scope de la ficha y un "state");
  - el cambio del código por el token, y el del refresh_token por un token nuevo;
  - una función wkGet para llamar a la API con las tres cabeceras de la ficha (solo GET), que devuelva
    los datos o lance un error con el código HTTP de verdad.
- Una ruta /entrar que mande a la página de login de WK y guarde el "state" en una cookie.
- La ruta /Login/CallbackFromWKA (exactamente esta: es la registrada en WK) que compruebe el
  state, pida el token y guarde el token y el refresh_token en dos cookies httpOnly.
- Una ruta /salir que borre las cookies y vuelva al inicio.
- En la página de inicio: el botón «Entrar con Wolters Kluwer» o, si hay sesión, «Sesión
  iniciada» y un enlace «Salir».
- Esta versión de Next.js tiene «Cache Components»: la parte que lee las cookies va en un
  componente dentro de <Suspense>. No usar `export const dynamic`.

## Qué NO debe hacer
- No crear un formulario de usuario y contraseña.
- No mandar nunca al navegador el client secret, la Apikey ni los tokens.
- No llamar todavía a la API para enseñar datos.
- No cambiar nada que este prompt no pida (reglas en .github/copilot-instructions.md).

## Cómo sabemos que salió bien
- Pulsando «Entrar con Wolters Kluwer» aparece la página de WK.
- Después del login vuelvo a http://localhost:53971 y veo «Sesión iniciada».
- Pulsando «Salir» vuelve a salir el botón de entrar.

## Al terminar
La aplicación ya está encendida en el puerto 53971: no la arranques.
Comprueba tú, con curl.exe a http://localhost:53971, los puntos de «Cómo sabemos que
salió bien» que se puedan comprobar sin el navegador. Enséñame una tabla: qué has
comprobado y qué ha salido. Y dime qué tengo que comprobar yo en el navegador.
```
