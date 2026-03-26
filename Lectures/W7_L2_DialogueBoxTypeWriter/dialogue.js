//class hold the dialogue info, handles drawing the text and the visual box
class DialogueBox {
    //properties
  dialogue;
  index;
  outOfLines;
  charIndex;     
  speed;   

    //constructer to set values
  constructor(dialogue) {
    this.dialogue = dialogue;
    this.index = 0;
    this.outOfLines = false;
    this.charIndex = 0;
    this.speed = 2; 
  }

  //draw box and text
  draw() {
    fill(0);
    stroke(255);
    rect(50, 250, 400, 100);

    fill(255);
    noStroke();
    textSize(16);

    //get current text line
    let currentLine = this.dialogue[this.index];

    //check char (per charicter) length, move onto next collection of charicters based on selected speed
    if (this.charIndex < currentLine.length) {
      this.charIndex += this.speed;
    }

    //show a limited amount of text based on the char value. we use floor() to make sure we have a whole number
    let visibleText = currentLine.substring(0, floor(this.charIndex));
    //show the text value
    text(visibleText, 70, 280);
  }

  //itterates into the next index in the array, if we are out of lines it stops the box being drawn
  nextLine() {
    this.index++;
    this.charIndex = 0; 

    if (this.index >= this.dialogue.length) {
      this.outOfLines = true;
    }
  }
}