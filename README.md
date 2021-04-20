# TinyCode by Fabián Alfonso Beirutti Pérez
Tiny code project with a restriction of 1000 characters using p5.js. You can check the sketch on the following link:

<p align="center">https://fabbeiru.github.io/TinyCode/</p>

## Introducción
El objetivo de esta práctica de la asignatura de 4to, Creación de Interfaces de Usuario (CIU), es desarrollar un pequeño programa con temática libre y restricción de 1000 caracteres. Para ello, se ha pedido el diseño de un *sketch* usando la librería de JavaScript, P5.js, la cual, permite realizar una gran variedad de proyectos que se pueden llegar a incluir en el código de una página web, facilitando así su apreciación y/o uso para cualquier usuario que acceda a la dirección de Internet correspondiente.

Esta librería es muy versátil ya que, podemos programar nuestro programa o bien localmente al desarrollar el código que compone nuestra página web, o bien con el editor online que nos proporciona la página web de referencia de la biblioteca de JavaScript (<a href="https://p5js.org/es/">enlace a web p5.js</a>).
<p align="center"><img src="/tinyCodeGif.gif" alt="Tiny code project using P5.js"></img></p>

## Controles
Los controles de la aplicación se mostrarán en todo momento por pantalla para facilitar su uso al usuario:
- **Tecla R:** Limpia el lienzo/canvas y reinicia el efecto.
- **Tecla C:** Cambia el efecto que se visualiza en el lienzo/canvas.

## Descripción
Para este proyecto, hemos trabajado usando tanto el editor web como localmente. Además, al tener que desarrollar un programa con un límite de caracteres (1000), hemos trabajado usando una única clase JavaScript:
- **Sketch:** clase principal que muestra por pantalla los efectos y maneja la interacción del usuario con la interfaz.

## Explicación
### Sketch
Esta es la clase principal de la aplicación, la cual gestiona la información mostrada por pantalla al usuario (interfaz gráfica), esto es, el desarrollo de los métodos setup() y draw().
```java
function setup() {
  createCanvas(400, 400);
  background(220);
  startX = random(width);
  startY = random(height);
  speedX = 5;
  speedY = 4.5;
  circleEffect = true;
  x = width/2;
  y = height/2;
  sprayEffect = false;
}

function draw() {
  r = random (255);
  g = random (255);
  b = random (255);
  stroke(r, g, b);
  if (circleEffect) circles();
  else spray();
}
```
Como se puede ver, en la función *setup()*, cargamos e inicializamos todas las variables y objetos que vamos utilizar a lo largo del programa. Además, en la función *draw()*, controlamos, según los valores de variables booleanas que se manejan según la interacción del usuario con la aplicación, que efectos se muestran por pantalla.

Por otra parte, esta misma clase es la que maneja la interacción entre el usuario y la interfaz mediante la implementación de los métodos *keyTyped()*, entre otros. Un ejemplo se muestra a continuación:
```java
function keyTyped() {
  if (key === 'r' || key === 'R') {
    clear();
    background(220);
  }
  if (key === 'c' || key === 'C') {
    clear();
    background(220);
    circleEffect = !circleEffect;
    sprayEffect = !sprayEffect;
  } 
}
```
Por último, tenemos los métodos que definen los efectos a mostrar, *circles()* y *spray()*:
```java
function circles() {
  strokeWeight(12.5);
  point(startX, startY);
  startX += speedX;
  startY += speedY;

  if (startX < 0 || startX > width) speedX *= -1;

  if (startY < 0 || startY > height) speedY *= -1;
}

function spray() {
  strokeWeight(0.5);
  stroke(0);
  fill(r,g,b);
  for (let i = 0; i < 1000; i++) {
    x += random(-1, 1);
    y += random(-1, 1);
    x = constrain(x, 0, width);
    y = constrain(y, 0, height);
    ellipse(x, y, 15, 15);
  }
}
```

## Descarga y prueba
Para poder probar correctamente el código, descargar los ficheros (el .zip del repositorio) y en la carpeta obtenida al descomprimir el .zip, se encuentran los archivos de la aplicación listos para probar y ejecutar, en este caso, el archivo HTML *index.html*. Se nos abrirá entonces una ventana del navegador en el que se muestra el resultado del programa.

El archivo "README.md" es opcional, si se descarga no debería influir en el funcionamiento del código ya que, son usados para darle formato a la presentación y explicación del repositorio en la plataforma GitHub.

## Recursos empleados
Para la realización de este sistema planetario en 3D, se han consultado y/o utilizado los siguientes recursos:
* Guión de prácticas de la asignatura CIU
* <a href="https://p5js.org/es/">Página de oficial de P5.js y sus referencias y ayudas</a>
* Editor web de P5.js.
* Navegador web y un IDE de elección (para el trabajo local).

Por otro lado, las librerías empleadas fueron:
* <a href="https://p5js.org/es/">P5.js</a> dirigido por Moira Turner y creado por Lauren Lee McCathy..
