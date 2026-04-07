function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

function draw() {
  background(123);

  fill(255)
  rect(100,100,100)

  fill(0)
  beginShape();

  vertex(0, 0);
  vertex(width, 0);
  vertex(width, height);
  vertex(0, height);

  beginContour();
  vertex(mouseX - 30, mouseY - 30);
  vertex(mouseX - 30, mouseY + 30);
  vertex(mouseX + 30, mouseY + 30);
  vertex(mouseX + 30, mouseY - 30);
  endContour();

  endShape(CLOSE);
}