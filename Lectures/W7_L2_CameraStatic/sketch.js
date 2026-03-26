let x;
let y ;
let backgroundImg;

//Load in the background image
function preload(){
 backgroundImg = loadImage('assets/backgroudImg.png')
}

//set the player starting position (in this case no class so X & Y)
function setup() {
  createCanvas(500, 500);
  x = width/2;
  y = height/2;
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
  image(backgroundImg, 0,0);
}

//display player and NPC visuals
function drawPlayer(){
  fill(200,200,200);
  rect(x, y,50,50);
   fill(100,100,100);
  rect(300, 200, 50, 50)

}

//player movment, for larger examples, like a game we would want to use this with a class 
function playerMovement(){
  if (keyIsDown(65)) { // a
    x -= 5;
  }
  if (keyIsDown(68)) { // d
    x += 5;
  }
  if (keyIsDown(87)) { // w
    y -= 5;
  }
  if (keyIsDown(83)) { // s
    y += 5;
  }
}
