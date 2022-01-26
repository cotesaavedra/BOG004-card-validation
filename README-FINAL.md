# Simulador de pago a través de un validador de tarjeta de crédito

## Índice

* [1. Resumen del proyecto](#1-Resumen)
* [2. Investigación UX](#2-investigacion-UX)
* [3. Especificaciones del proyecto](#3-especificaciones-del-proyecto)
* [4. Especificaciones técnicas](#4-especificaciones-tecnicas)
* [5. Requisitos de instalación](#5-requisitos-de-instalacion)

***

## 1. Resumen
Este proyecto simula un sistema de pago a través de la validación de la tarjeta de crédito que ingresa el comprador al momento de pagar. El cliente ingresa los números de su tarjeta de crédito, mastercard, visa, etc. El sistema muestra un pago exitoso o invalido según si la tarjeta es correcta o no. La determinación de este proyecto se realizó a través del algoritmo de luhn.

![IMAGEN PROCESO DE COMPRA](https://raw.githubusercontent.com/cotesaavedra/BOG004-card-validation/a99d2a560454aa1b8bce8a94596bb41f90a28313/proceso%20de%20compra.jpg)

## 2. Investigación UX
Para contextualizar, el simulador de pago está integrado a una e-commerce de papelería, el proyecto comienza con la parte final del proceso de compra, donde el cliente ingresa sus datos bancarios. Los usuarios son principalmente mujeres que deseen comprar algún artículo de librería y planificación, pudiendo adquirir estos productos y pagando por ellos a través de esta página, el proceso de compra será exitoso solo si su tarjeta bancaria es correcta.

![IMAGEN DEL PROTOTIPO EN PAPEL](https://raw.githubusercontent.com/cotesaavedra/BOG004-card-validation/main/prototipo-papel.jpg)
En relación al feedback otorgado por mis compañeras, se les mostró el prototipo creado en Adobe XD, con los colores, fuentes de texto y elementos que compondrían el proyecto, además se les comentó la temática del proyecto. Lo recibido en el feedback fue positivo, comentaron que era una buena idea el simulador de sistema de pago, además les pareció acorde la paleta de colores con la idea de papelería.

![Imagen 1](https://raw.githubusercontent.com/cotesaavedra/BOG004-card-validation/main/1.png)
![Imagen 2](https://raw.githubusercontent.com/cotesaavedra/BOG004-card-validation/main/pago-exitoso-tarjeta-valida.png)
![Imagen 3](https://raw.githubusercontent.com/cotesaavedra/BOG004-card-validation/main/tarjeta-invalida-pago-incorrecto.png)
Puede descargar el prototipo en Adobe XD [aquí](https://drive.google.com/file/d/1XVSenBwE9IA3ldDGzmsr0nOgbbu6gawp/view?usp=sharing)

## 3. Especificaciones del proyecto
La interfaz de este proyecto permite al usuario insertar el número de su tarjeta bancaria, el sistema lo procesa, en este punto se verifica si es o no válida. En el caso de que la tarjeta sea válida el sistema arrojará el mensaje de "compra exitosa" junto con los datos de su tarjeta, donde, por seguridad, los digitos están ocultos, excepto los 4 últimos dígitos. Por otro lado, si la tarjeta es inválida, el sistema mostrará en pantalla que hubo un error y que puede intentar nuevamente. Además el sistema no permite ingresar el campo vacío de "número de tarjeta".

## 4. Especificaciones técnicas
En este proyecto se utilizó HTML, CSS y Vanilla JavaScript. En el caso de JS, hay dos archivos:
#### index.js
Se centra en la funcionalidad de botones y cambio de estilos (CSS). 
#### validator.js
Permite hacer las validaciones correspondientes, utilizando el algoritmo de luhn a través condicionales y bucles. Dentro de este archivo puedes encontrar un objeto "Validator", que contiene dos métodos: isvalid y maskify.
###### isValid
Permite validar la tarjeta de crédito, comenzando con la obtención del número ingresado y guardandolo en un Array a través del bucle for, para luego, ejecutar el algoritmo de Luhn a través del bucle forEach y la condicional if, finalmente isvalid retorna un boolean.
##### maskify
Función donde a través del bucle for, se reemplazan los digitos de la tarjeta por "#" y se guardan en un nuevo array, excepto los últimos 4 digitos de la tarjeta, para luego mostrarlo en el caso de que la tarjeta sea válida.

## 5. Requisitos de instalación
Si usted quiere instalar este repositorio en su local y probar o revisar el código, deberá instalar git, un interpretador de lineas de comando y node.js. Deberá instalar las dependencias del proyecto con el comando npm install en la carpeta del proyecto, y podrá realizar las pruebas univarias usando el comando npm test.
Para ver el proyecto debe ejecutar el comando npm start
Podrá ver la interfaz del proyecto en su navegador utilizando la url https://localhost:3000