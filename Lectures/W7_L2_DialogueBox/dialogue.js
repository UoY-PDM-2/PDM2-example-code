//class hold the dialogue info, handles drawing the text and the visual box
class DialogueBox {
  //properties
  dialogue;
  index;
  outOfLines;
    //constructer to set values
    constructor(dialogue) {
    this.dialogue = dialogue;
    this.index = 0;
    this.outOfLines = false;
  }

  //draw box and text
  draw() {
    fill(0);
    stroke(255);
    rect(50, 250, 500, 100);

    fill(255);
    noStroke();
    textSize(16);
    //set the current text value to show on screen, comes from an array passed to our class
    text(this.dialogue[this.index], 70, 280);
  }

  //itterates into the next index in the array, if we are out of lines it stops the box being drawn
  nextLine() {
    this.index++;
    if (this.index >= this.dialogue.length) {
      this.outOfLines = true;
    } 
    
  }
}





