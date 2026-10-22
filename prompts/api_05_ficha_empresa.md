# Prompt API 05 · La ficha de la empresa

**Antes de pegarlo:** adjunten la ficha con `#file:FICHA-API-WK.md`.

```
## Propuesta
Quiero una página por empresa con sus datos clave. Más adelante le añadiré las funcionalidades
de mi PRD.

## Qué debe hacer
- Una página /empresas/[código].
- Tres datos clave: personas en plantilla, centros de trabajo (/api/companies/{empresa}/workplaces)
  y antigüedad media en años (a partir de la fecha de alta de las personas en plantilla).
- Antes de calcular con la fecha de hoy, llamar a `await connection()` (de next/server).
- La lectura del código de la dirección y de los datos va dentro de <Suspense>.
- Un enlace para volver a /empresas.

## Qué NO debe hacer
- No enseñar nombres ni datos de personas concretas: solo totales y medias.
- No hacer todavía gráficos.

## Cómo sabemos que salió bien
- Desde la lista, pulsando una empresa, se abre su ficha con los tres datos.
- Una empresa sin empleados enseña 0, no un error.
```
