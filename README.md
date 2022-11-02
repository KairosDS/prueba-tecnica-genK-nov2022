# PRUEBA TÉCNICA GENERACIÓN K - 2 Noviembre 2022

# Instrucciones

- Haz un fork de este repositorio en tu cuenta de GitHub.
- Crear una rama para cada uno de los ejercicios y apartados ej: ejercicio1a, ejercicio 1b, ejercicio2, etc)
- Crea un archivo ejercicio1a, ejercicio1b, ejercicio2, etc. con la solución de cada uno de los ejercicios.
- Utiliza el fichero index.html como base para los ejercicios.
- Ejecuta el comando npm install para instalar las dependencias.
- Ejecuta el comando npm run start para ejecutar el proyecto.
- Añade en el fichero index.html una lista de enlaces a los ejercicios.

# Recomendaciones

- Utiliza 'conventional commits' para los mensajes de los commits

## Ejercicio 1

Dado este código base HTML que está en el fichero index.html:

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prueba de codigo</title>
  </head>
  <body></body>
</html>
```

### Apartado 1a

Escribe el código javascript necesario para pintar un botón en el body y que el botón tenga el texto **"1 botón"**

### Apartado 1b

Mediante javascript haz que al pasar el ratón por encima del botón cambie el texto **"1 botón"** por **"1 botóN"** y al quitar el ratón de encima que vuelva a poner **"1 botón"**

### Apartado 1c

Mediante javascript pinta/inserta 10 botones en el body con los textos "1 botón", "2 botón", "3 botón" y así sucesivamente hasta "10 botón"

### Apartado 1d

Mediante javscript pinta/inserta 1000 botones en el body siguiendo el mismo patrón que en el apartado c para los nombres de los botones.

### Apartado 1e

Una vez tienes pintados 1000 botones añade mediante javascript el código necesario para que al pasar el ratón por encima de cada botón se cambie la letra n de botón por N mayúscula y al quitar el ratón de encima que vuelva a poner la letra n en minúscula.

## Ejercicio 2

### Apartado 2a

Dados los arrays de arrays **array1** y **array2** obtén un nuevo array llamado **result** que sea el resultado de multiplicar las filas de primero por las columnas del segundo

### Apartado 2b

Convierte el array **result** en un array de strings con números de 3 cifras y completando con ceros a la izquierda los números que tengan menos de 3 cifras.

```javascript
const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];
```
