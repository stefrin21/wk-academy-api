# Prompt API 03 · Protección de rutas y renovación del token

**Antes de pegarlo:** en esta versión de Next.js el archivo que protege las rutas se llama
**`proxy.ts`**. Muchas guías dicen `middleware.ts`: con ese nombre **no funciona y no da ningún
error**.

```
## Propuesta
Quiero que nadie vea los datos sin haber entrado, y que la sesión no caduque cada hora.

## Qué debe hacer
- Crear producto-wk/proxy.ts (no middleware.ts: en Next.js 16 se llama proxy).
- Para /empresas y sus páginas:
  - si hay token, dejar pasar;
  - si no hay token pero hay refresh_token, pedir un token nuevo a WK (función de lib/wk.ts),
    guardarlo en las cookies y dejar pasar;
  - si no hay ninguno de los dos, o la renovación falla, mandar a la página de inicio.
- No proteger /, /entrar, /Login/CallbackFromWKA ni /salir.

## Qué NO debe hacer
- No llamar al archivo middleware.ts.
- No guardar los tokens en ningún sitio que no sean las cookies httpOnly.

## Cómo sabemos que salió bien
- Sin haber entrado, abro http://localhost:53971/empresas y acabo en la página de inicio.
- Existe producto-wk/proxy.ts.
```
