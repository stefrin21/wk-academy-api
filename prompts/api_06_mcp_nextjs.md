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

**Si no ven «Start»:** `Ctrl + Mayús + P` → `MCP: List Servers` → `next-devtools` → **Start Server**.

## Pruébenlo: pregúntenle lo que quieran

Con el MCP, Copilot **ve su aplicación encendida**, como ustedes en el navegador. Sirve para tres
cosas:

1. **Entender su aplicación:** cómo está hecha, qué páginas tiene, dónde está cada cosa.
2. **Resolver problemas:** cuando algo no va, Copilot mira solo qué pasa. Sin copiar y pegar
   errores.
3. **Estar al día:** consulta la documentación de la versión de Next.js que tienen instalada.

Elijan una pregunta, o invéntense la suya, con palabras normales. Tengan la aplicación abierta en
el navegador y empiecen siempre así: *«Usa next-devtools en el puerto 53971:»*.

```
Usa next-devtools en el puerto 53971: ¿qué páginas tiene mi aplicación?
Explícamelas como a alguien que no programa.
```

```
Usa next-devtools en el puerto 53971: estoy viendo esta página en el navegador.
¿De dónde salen los datos que veo?
```

```
Usa next-devtools en el puerto 53971: quiero cambiar el título de esta página.
¿Dónde está?
```

```
Usa next-devtools en el puerto 53971: algo no funciona en la página que tengo
abierta. Mira qué pasa y explícamelo en palabras sencillas.
```

```
Usa next-devtools en el puerto 53971: esta página tarda mucho en cargar. ¿Por qué?
```

**A partir de ahora, cuando algo falle:**

```
Usa next-devtools en el puerto 53971: ¿hay errores en mi aplicación?
Explícamelos en palabras sencillas y arréglalos.
```
