let dialogueBox;

//sets the canvas and instance of the class
function setup() {
  createCanvas(500, 500);
//in this case we are passing the text values as set strings, could we do this with JSON or a text file?
  dialogueBox = new DialogueBox([
    "Hey you!",
    "You're finally awake..."
  ]);
}

//draws box on screen
function draw() {
  background(220);
    //only drawn if there is still text to show. 
  if(dialogueBox.outOfLines === false)
  dialogueBox.draw();
}

//if mouse button pressed we move to the next array index
function mousePressed(){
  dialogueBox.nextLine()
}

