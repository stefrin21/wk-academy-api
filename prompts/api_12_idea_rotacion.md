# Idea · Altas y bajas por año

**Para quién:** el asesor que quiere saber qué empresas cambian mucho de personal y cuáles
están estables.

**Antes de pegarlo:** léanlo y cámbienlo si quieren. Es una idea, no una obligación.

```
## Propuesta
Quiero ver en la ficha de cada empresa cuántas personas han entrado y salido cada año.

## Qué debe hacer
- Con los empleados de la empresa (/api/companies/{empresa}/employees), contar por año:
  - altas: por la fecha de alta (enrolmentDate);
  - bajas: por la fecha de baja (dropDate), sin contar las que empiezan por 0001-01-01,
    que son personas en activo.
- Enseñar los últimos 5 años en una tabla: año, altas y bajas.
- Si la empresa no tiene empleados, decirlo con una frase.
- Antes de escribir código, comprobar las rutas y los campos en
  .agents/skills/wk-api-nomina/SKILL.md.

## Qué NO debe hacer
- No escribir nada en la API.

## Cómo sabemos que salió bien
- En la ficha de una empresa veo la tabla de los últimos 5 años.
- Una empresa sin empleados enseña una frase, no un error.
```

**En nuestra prueba:** *COMERCIO BARCELONA* tiene 119 altas en 2023 y 17 bajas en 2024.
