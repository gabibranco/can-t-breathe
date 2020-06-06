let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  textSize(22)
  textFont('Lexend Tera')
  text("I can't breathe", mouseX, mouseY);
}
