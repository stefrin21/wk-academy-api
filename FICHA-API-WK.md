# Ficha técnica · API de Wolters Kluwer

Para adjuntar en la chat de Copilot con `#file:FICHA-API-WK.md` cada vez que un prompt
hable con las API. Son las reglas que hemos comprobado probando la API de a3innuva Nómina.

## Credenciales

- Las da Wolters Kluwer: `WK_CLIENT_ID`, `WK_CLIENT_SECRET` y la Apikey de cada API.
- Van **solo** en `.env.local`. Nunca en el código, en GitHub ni en la chat.
- Se usan **solo en el servidor**. Nada de esto llega nunca al navegador.

## Login (OAuth, «Authorization Code»)

- No hay página de login propia: el usuario entra **en la página de Wolters Kluwer**, con su
  cuenta y la doble autenticación. La aplicación no ve nunca la contraseña.
- Dirección de login: `https://login.wolterskluwer.eu/auth/core/connect/authorize`
- Cambio del código por el token: `POST https://login.wolterskluwer.eu/auth/core/connect/token`
- Scope: `offline_access openid IDInfo WK.ES.A3EquipoContex`
- Dirección de vuelta registrada: `http://localhost:53971/Login/CallbackFromWKA`.
  Por eso la aplicación arranca en el **puerto 53971**, no en el 3000.
- El token dura **una hora**. Con el `refresh_token` se pide uno nuevo sin repetir el login
  (`grant_type=refresh_token`, a la misma dirección del token).

## Llamadas a la API

- Nómina: `https://a3api.wolterskluwer.es/Laboral`. Las demás API: ver
  `a3developers.wolterskluwer.es`.
- Cada llamada lleva **tres cabeceras**:
  - `Ocp-Apim-Subscription-Key`: la Apikey de esa API
  - `Authorization: Bearer` + el token
  - `api-version: 1.0`
- **Solo lectura (GET).** En este curso no se escribe nada en las API.

## Trampas comprobadas

- Sin `api-version: 1.0`, algunas rutas responden **404** («Resource not found»).
- Las listas piden siempre `pageNumber` y `pageSize`. Sin ellos, otra vez **404**.
- Si no hay datos (por ejemplo, una empresa sin empleados), la API responde **vacío**, no con una
  lista vacía.
- En Nómina, un empleado **en activo** tiene fecha de baja `"0001-01-01"`.

## Qué significa cada respuesta

`200` todo bien · `204` bien, sin datos · `401` falta el token o ha caducado · `403` el usuario no
tiene permiso · `404` dirección mal escrita, o faltan `api-version` o `pageNumber`/`pageSize` ·
`429` demasiadas llamadas seguidas.

## Datos personales

En pantalla **solo datos agregados** (totales, medias, recuentos). Nunca nombres, DNI ni importes
de personas concretas.
