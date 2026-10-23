# WK AI Product Building Academy · Producto sobre las API de Wolters Kluwer

Repositorio de trabajo para construir, en los Módulos 4 y 5, un producto propio sobre las API de
Wolters Kluwer.

## Antes de empezar

- Las credenciales de Wolters Kluwer (client id, client secret y la Apikey de cada API) que les ha
  dado WK, y su cuenta WK con la doble autenticación activa.
- VS Code con Copilot en modo **Agent**, como en los módulos anteriores.

## Cómo se abre

1. `Cmd/Ctrl + Shift + P` → `Git: Clone` → pegar la dirección de este repositorio.
2. Elegir dónde guardarlo y pulsar **Open** cuando VS Code lo pregunte.

## Qué hay dentro

| Archivo | Para qué |
|---|---|
| `FICHA-API-WK.md` | Las reglas de las API que Copilot tiene que conocer. Se adjunta en la chat con `#file:FICHA-API-WK.md` |
| `prompts/api_01` … `api_05` | La base técnica: proyecto, login con WK, protección de rutas, empresas y ficha |
| `.agents/skills/` | Las cuatro skills de producto, ya instaladas: `problem-statement`, `jobs-to-be-done`, `prd-development` y `user-story` |

La aplicación se crea dentro de este repositorio, en la carpeta `producto-wk`.

## Reglas del producto

- **Solo lectura:** en este curso no se escribe nada en las API.
- **Solo datos agregados en pantalla:** nunca nombres, DNI ni importes de personas concretas.
- **Las credenciales solo en `producto-wk/.env.local`:** nunca en el código, en GitHub ni en la
  chat.
