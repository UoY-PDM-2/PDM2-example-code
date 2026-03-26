let levelState = 0;
let levels = [];

let nextLevel = 0;
let transitioning = false;

let offsetX = 0;
let direction = 0;
let slideSpeed = 10;

function setup() {
  createCanvas(400, 400);

  levels.push(new LevelOne());
  levels.push(new LevelTwo());
}

function draw() {
  background(220);

  if (transitioning) {
    push();
    translate(offsetX, 0);
    levels[levelState].draw();
    pop();

    push();
    translate(offsetX + width * direction, 0);
    levels[nextLevel].draw();
    pop();

    updateSlide();
  } else {
    levels[levelState].draw();
  }
}

function keyPressed(){
  if (transitioning) return;

  if(key === '1'){
    nextLevel = 0;
    direction = -1;
    transitioning = true;
    offsetX = 0;
  } 
  else if(key === '2'){
    nextLevel = 1;
    direction = 1;
    transitioning = true;
    offsetX = 0;
  }
}

function updateSlide() {
  offsetX -= slideSpeed * direction;

  if (abs(offsetX) >= width) {
    levelState = nextLevel;
    transitioning = false;
    offsetX = 0;
  }
}
