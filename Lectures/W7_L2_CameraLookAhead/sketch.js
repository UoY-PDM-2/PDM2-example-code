//there are multiple ways to do this
//this example focuses on moving the player rather than the camera giving us more room between the player and the area in front of them 

let x;
let y ;
let lookaheadX;
let lookaheadY;
let backgroundImg;

//Load in the background image
function preload(){
 backgroundImg = loadImage('assets/backgroudImg.png')
}

//set the player starting position (in this case no class so X & Y)
//we also set our lookahead direction to 0 so that our player starts in the center
function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
  lookaheadX = 0;
  lookaheadY = 0;
}

//draw  calls our functions the display different areas or pass vales. When using classes this would be us calling the class methods
function draw() {
  playerMovement();
  drawBackground();
  drawPlayer();
}

//draws our backgound image
function drawBackground(){
  background(220);
  //    img            starting pos + cavas offset - player offset for both X and Y
  image(backgroundImg, 50 + width/2 - x, 50 + height/2 - y);
}

//display player and NPC visuals
function drawPlayer(){
  fill(200,200,200);
  //player visual, we get the offset for position and canvas. we then apply a 'direction' offset using lookaheadX
  //lookaheadX/lookaheadY will be +1 or -1 to set up,down,left,right. *40 is the amout of lookahead offset we have
  //change the * 40 value to increase/decrease the amout of shift. We may want to use a variable for this
  rect(x + width/2 - x - lookaheadX * 40, y + height/2 - y - lookaheadY * 40,50,50);
  fill(100,100,100);
  rect(300 + width/2 - x, 200 +  height/2 - y, 50, 50)
}

//player movment, for larger examples, like a game we would want to use this with a class 
function playerMovement(){
  //if we press a set the amount of movment and the direction
  if (keyIsDown(65)) { // a
    x -= 5;
    //-1 x to move left
    lookaheadX = -1;
    lookaheadY = 0;
  }
  if (keyIsDown(68)) { // d
    x += 5;
    lookaheadX = +1;
    lookaheadY = 0;
  }
  if (keyIsDown(87)) { // w
    y -= 5;
    lookaheadY = -1;
    lookaheadX = 0;
  }
  if (keyIsDown(83)) { // s
    y += 5;
    lookaheadY = +1;
    lookaheadX = 0;
  }
}
