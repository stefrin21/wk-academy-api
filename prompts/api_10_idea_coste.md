# Idea · El coste de personal, mes a mes

**Para quién:** el asesor que quiere ver, de un vistazo, cómo evoluciona lo que le cuesta a cada
empresa su plantilla.

**Antes de pegarlo:** léanlo y cámbienlo si quieren. Es una idea, no una obligación.

```
## Propuesta
Quiero ver en la ficha de cada empresa cuánto le ha costado su personal, mes a mes, en un
gráfico.

## Qué debe hacer
- Para cada uno de los últimos 12 meses, leer las nóminas de la empresa
  (/api/companies/{empresa}/pays/{año}/{mes}, con pageNumber y pageSize).
- Sumar, de cada mes, el coste para la empresa (costBusiness) y contar cuántas nóminas hay.
- Enseñarlo en la ficha de la empresa con un gráfico de barras (Apache ECharts): un mes por
  barra, y el número de nóminas al pasar el ratón.
- Si la empresa no tiene nóminas, decirlo con una frase en vez de enseñar un gráfico vacío.
- La parte que lee datos va en un componente dentro de <Suspense>.
- Antes de escribir código, comprobar las rutas y los campos en
  .agents/skills/wk-api-nomina/SKILL.md.

## Qué NO debe hacer
- No escribir nada en la API.

## Cómo sabemos que salió bien
- En la ficha de una empresa con nóminas veo un gráfico con sus meses.
- En una empresa sin nóminas veo una frase, no un error.
```

**En nuestra prueba:** *Just a dream, Jaleo DF* tiene 10 meses, entre 55.583 € y 64.622 €.
*Ralf Test Company* y *Empresa 4* no tienen nóminas.
