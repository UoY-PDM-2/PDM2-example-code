let levelState = 0;
let levels = [];

//fade values and states
let fadeAlpha = 0;
let fadeState = "idle"; 
const FADEOUT = 'out';
const FADEIDLE = 'idle';
const FADEIN = "in";
let targetLevel = null;

//create levels
function setup() {
  createCanvas(400, 400);

  levels.push(new LevelOne());
  levels.push(new LevelTwo());
}

//draw a level using a switch statment to set the current level
function draw() {
  background(220);

  switch(levelState){
    case 0:
      levels[0].draw();
      break;
    case 1:
      levels[1].draw();
      break;
  }
//draw our fade effect on the screen
  updateFade();
  drawFade();
}

//input to change levels
function keyPressed(){
  if(key === '1'){
    targetLevel = 0;
    fadeState = "out";
  } 
  else if(key === '2'){
    targetLevel = 1;
    fadeState = "out";
  }
}

//uses fadeAlpha to increase the alpha of a rect overtime (using draw rate in this case) to create a fade in/out effect
function updateFade() {

  if (fadeState === FADEOUT) {
    fadeAlpha += 10;

    if (fadeAlpha >= 255) {
      fadeAlpha = 255;
      
      levelState = targetLevel;

      fadeState = FADEIN;
    }
  } 
  else if (fadeState === FADEIN) {
    fadeAlpha -= 10;

    if (fadeAlpha <= 0) {
      fadeAlpha = 0;
      fadeState = FADEIDLE;
    }
  }
}

//uses the values from updateFade() to draw the rect for the fade effect
function drawFade() {
  if (fadeAlpha > 0){
    noStroke();
    fill(0, fadeAlpha);
    rect(0, 0, width, height);
  } 
}