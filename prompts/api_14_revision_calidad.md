# Prompt API 14 · Revisión de calidad

**Para qué:** antes de enseñar su producto, comprobar que no enseña lo que no debe y que los
datos tienen sentido. Copilot revisa, **ustedes deciden** qué cambiar.

**Antes de pegarlo:** la aplicación tiene que estar encendida y abierta en el navegador.

```
Revisa mi aplicación como si fueras el responsable de calidad, sin cambiar nada todavía:
1. Datos de personas: ¿qué páginas enseñan datos de una persona concreta (nombre, DNI,
   sueldo)? Dime dónde, para que yo decida si los dejo.
2. Datos raros: ¿hay meses o empresas con cifras que no tienen sentido (por ejemplo, un mes
   con muchas más nóminas que personas, o importes casi a cero)?
3. Enlaces: ¿se llega a todas las páginas haciendo clic desde el inicio?
4. Errores: usa next-devtools en el puerto 53971 y dime si hay errores.
Para cada punto, dime qué has encontrado y qué propones. Espera a que te diga qué arreglar.
```

**Después:** decidan, punto por punto, qué arreglar. Por ejemplo: *«Deja el 1 como está. En el
2, enseña el dato pero con un aviso de que puede ser de prueba.»*

**En nuestra prueba:** *COMERCIO BARCELONA* tiene en marzo de 2026 357 nóminas y
1.062.528 €, en enero 154, y en los demás meses entre 1 y 3. ¿Lo enseñamos? ¿Con un aviso? ¿Lo quitamos? Es una
decisión de producto, no de Copilot.
