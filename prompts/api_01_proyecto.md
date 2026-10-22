# Prompt API 01 · El proyecto y las credenciales

**Cómo se usa:** copien el bloque y péguenlo en la chat de Copilot, en modo **Agent**, desde la
carpeta del repositorio. Adjunten también la ficha: escriban `#file:FICHA-API-WK.md` en la chat.

```
## Propuesta
Quiero crear el proyecto web de mi producto sobre las API de Wolters Kluwer.

## Qué debe hacer
- Crear un proyecto Next.js llamado producto-wk, con TypeScript, Tailwind y App Router:
  npx create-next-app@latest producto-wk --yes
- Hacer que npm run dev arranque en el puerto 53971 (next dev -p 53971): es el puerto de la
  dirección de vuelta que Wolters Kluwer tiene registrada para el login.
- Crear producto-wk/.env.local con estas líneas vacías, que relleno yo:
  WK_CLIENT_ID=
  WK_CLIENT_SECRET=
  WK_APIKEY=
  WK_REDIRECT_URI=http://localhost:53971/Login/CallbackFromWKA
- Comprobar que .gitignore excluye .env.local.

## Qué NO debe hacer
- No escribir ninguna credencial: los valores los pongo yo.
- No crear páginas ni instalar otras librerías todavía.

## Cómo sabemos que salió bien
- Con cd producto-wk y npm run dev, http://localhost:53971 enseña la página de bienvenida.
- producto-wk/.env.local existe y .gitignore lo excluye.
```

**Después:** abran `producto-wk/.env.local`, peguen sus credenciales de Wolters Kluwer (una por
línea, sin espacios) y **guarden el archivo**. Paren `npm run dev` (Ctrl + C) y vuelvan a
arrancarlo: las claves se leen solo al arrancar.
