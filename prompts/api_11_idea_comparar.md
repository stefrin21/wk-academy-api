# Idea · Comparar mis empresas

**Para quién:** el asesor que quiere ver todas sus empresas en una sola tabla y saber cuál es
distinta de las demás.

**Antes de pegarlo:** léanlo y cámbienlo si quieren. Es una idea, no una obligación.

```
## Propuesta
Quiero comparar todas mis empresas en una sola tabla.

## Qué debe hacer
- Una página /comparar, con un enlace desde la lista de empresas.
- Una fila por empresa con: personas en plantilla, centros de trabajo, antigüedad media en
  años y coste de personal del último mes con nóminas (suma de costBusiness).
- Poder ordenar la tabla pulsando en el título de cada columna.
- Si a una empresa le falta un dato, enseñar «—», no un error.
- La parte que lee datos va en un componente dentro de <Suspense>.

## Qué NO debe hacer
- No enseñar nombres, DNI ni importes de personas: solo totales y medias por empresa.
- No escribir nada en la API.

## Cómo sabemos que salió bien
- Desde la lista de empresas llego a /comparar con un clic.
- Veo todas mis empresas, y una empresa sin empleados enseña 0 o «—».
```

**En nuestra prueba:** 6 empresas, de 0 a 435 personas en plantilla.
