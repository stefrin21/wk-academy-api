# Prompt API 06 · Copilot ve su aplicación (MCP de Next.js)

**Para qué:** hasta ahora, cuando algo fallaba, había que copiar el error y pegarlo en la chat.
Con este MCP, Copilot **mira directamente** la aplicación encendida: qué páginas tiene y qué
errores hay.

**Antes de pegarlo:** la aplicación tiene que estar encendida (`npm run dev` en `producto-wk`).

```
## Propuesta
Quiero que Copilot pueda ver mi aplicación mientras funciona, con el MCP de Next.js.

## Qué debe hacer
- Crear .vscode/mcp.json, en la carpeta del repositorio, con este servidor:
  {
    "servers": {
      "next-devtools": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "next-devtools-mcp@latest"]
      }
    }
  }
- Si .vscode/mcp.json ya existe, añadir el servidor sin borrar los que haya.
- Decirme cómo arrancarlo en VS Code.

## Qué NO debe hacer
- No tocar la aplicación de producto-wk.
- No cambiar nada que este prompt no pida (reglas en .github/copilot-instructions.md).

## Cómo sabemos que salió bien
- En .vscode/mcp.json aparece next-devtools y, encima, el botón para arrancarlo.
```

**Después:** abran `.vscode/mcp.json` y pulsen **Start**, encima de `next-devtools`. Luego,
en la chat, pregunten:

```
Usa el MCP next-devtools con mi aplicación, que está en el puerto 53971.
¿Qué páginas tiene?
```

Copilot tiene que responder con la lista de sus páginas: `/`, `/entrar`, `/empresas`,
`/empresas/[codigo]`… **El puerto 53971 hay que decírselo:** si no, el MCP puede buscar otra
aplicación.

**Para los errores:** con la aplicación abierta en el navegador, pregunten *«Usa next-devtools
en el puerto 53971: ¿hay errores en mi aplicación? Si los hay, explícamelos y arréglalos»*.
