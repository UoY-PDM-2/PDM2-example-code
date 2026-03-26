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
//check our locking threshold, if we doing this for multiple levels you may want to use a class
  if(y <= 260){
    //if our threshold is met we stop following the player offset and keep our background stuck at the threshold value
     image(backgroundImg, 0 + width/2 - x, 0 + height/2 - 260);
  }else{
    //if we are not at out threshold keep the player offset
    image(backgroundImg, 0 + width/2 - x, 0 + height/2 - y);
  }
}

//display player and NPC visuals
function drawPlayer(){
  //check our locking threshold, if we doing this for multiple levels you may want to use a class
  if(y <= 260){
    fill(200,200,200);
    // this is the player, we need to use a different offset to let out player move around. for this example its (threshold - player Ypos)
    rect(x + width/2 - x, y + height/2 - y -(260 - y),50,50);
    fill(100,100,100);
    rect(300 + width/2 - x, 200 +  height/2 - 260, 50, 50)
    
  }else{
    fill(200,200,200);
    rect(x + width/2 - x, y + height/2 - y,50,50);
    fill(100,100,100);
    rect(300 + width/2 - x, 200 +  height/2 - y, 50, 50)
  }
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