let score = 0;

let listiners = {}

function setup() {
  createCanvas(400, 400);
  addEventListener("score", ()=> score += 10)


}

function draw() {
  background(220);
  console.log(score);
}


const addEventListener = (eventName, action) => {
  if(!listiners[eventName]){
    listiners[eventName] = [];
  }
  listiners[eventName].push(action); 
}

function mousePressed(){
  triggerEvent("score");
}

const triggerEvent = (eventName) =>{
  if(!listiners[eventName]){
    return;
  }
  for(let action of listiners[eventName]){
    action()
  }
}

