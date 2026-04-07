let pos;
let speed;

function setup() {
    createCanvas(400, 400);
    pos = createVector(width * 0.5, height * 0.5); 
    speed = 3;
    stroke(6);
}

function draw() {
    background(255);
    
    circle(pos.x, pos.y, 100);

    //add speed to movr forward
    pos.add(speed);

    // wrap around screen
    if (pos.x > width + 50) {
        pos.x = -50;
    }
}

function keyPressed() {
    if (key === 's') {
        saveGif('mySketch', 5);
    }
}