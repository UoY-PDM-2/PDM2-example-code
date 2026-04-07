
function setup() {
  createCanvas(400, 400);

  background(123)

  beginShape();
  vertex(100, 100);
  vertex(300, 100);
  vertex(300, 300);
  vertex(100, 300);

  beginContour();
  vertex(150, 150);
  vertex(150, 250);
  vertex(250, 250);
  vertex(250, 150);
  endContour();

  endShape(CLOSE);
}
