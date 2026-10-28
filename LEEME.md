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
| `.github/copilot-instructions.md` | Las reglas de trabajo de Copilot (hacer solo lo que pide el prompt, parar si algo falla dos veces…). Copilot las lee solo, en cada mensaje |
| `prompts/api_01` … `api_05` | La base: proyecto, login con WK, protección de las páginas, empresas y ficha |
| `prompts/api_06` … `api_08` | Copilot ve su aplicación (MCP), su PRD (con la skill `prd-development`) y su primera funcionalidad |
| `prompts/api_09` … `api_14` | Módulo 5: el plan del día, cuatro ideas de funcionalidades y la revisión de calidad |
| `GUIA-A3DOC.md` | Módulo 5, para quien construya con a3doc (el gestor documental): cómo funciona sin login, el primer prompt, ideas y errores |
| `.agents/skills/` | Skills ya instaladas: las cuatro de producto (`problem-statement`, `jobs-to-be-done`, `prd-development`, `user-story`) `grilling` / `grill-me`, para poner a prueba una idea, y las de las API de WK: `wk-api-nomina`, `wk-api-a3factura`, `wk-api-contabilidad` y `wk-api-a3doc` |

La aplicación se crea dentro de este repositorio, en la carpeta `producto-wk`.

## Reglas del producto

- **Solo lectura:** en este curso no se escribe nada en las API.
- **Las credenciales van en `.env.local`**, que no se sube a GitHub.
- **Los datos son inventados:** se pueden usar todos, también los de personas.
