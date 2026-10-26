# Idea · Avisos

**Para quién:** el asesor que no tiene tiempo de mirar empresa por empresa y quiere que la
aplicación le diga dónde mirar.

**Antes de pegarlo:** léanlo y cámbienlo si quieren. Es una idea, no una obligación.

```
## Propuesta
Quiero que la lista de empresas me avise de las que necesitan atención.

## Qué debe hacer
- En la lista de empresas, una columna «Avisos» con, para cada empresa, los que se cumplan:
  - «Sin movimientos»: ninguna alta ni baja en los últimos 12 meses;
  - «Sin nóminas»: ninguna nómina en los últimos 3 meses;
  - «Coste +10 %»: el coste de personal del último mes es más de un 10 % mayor que el del mes
    anterior.
- Si no hay ningún aviso, dejar la columna vacía.
- Explicar en una línea, debajo de la tabla, qué significa cada aviso.

## Qué NO debe hacer
- No escribir nada en la API.

## Cómo sabemos que salió bien
- Veo la columna «Avisos» en la lista de empresas.
- Cada aviso tiene sentido si miro la ficha de esa empresa.
```

**En nuestra prueba:** *Empresa 4* no tiene altas desde 2020 y *Ralf Test Company* no tiene
nóminas.
