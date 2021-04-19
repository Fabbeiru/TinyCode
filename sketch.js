var r, g, b;
var circleEffect;
var startX, startY;
var speedX, speedY;
var sprayEffect;
var x,y;

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