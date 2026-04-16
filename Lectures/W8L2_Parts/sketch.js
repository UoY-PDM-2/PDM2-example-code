let particles = [];
let particles2 = [];

function setup() {
  createCanvas(640, 240);
}

function draw() {
  background(255);
  particles.push(new Particle(width / 2, 20, color(0, 255,0 )));

  for (let i = particles.length - 1; i >= 0; i--) {
    let particle = particles[i];
    particle.run();
    if (particle.isDead()) {
      particles.splice(i, 1);
    }
  }


      particles2.push(new Particle(width / 2, 20, color(0, 0,255 )));

  for (let i = particles2.length - 1; i >= 0; i--) {
    let particle = particles2[i];
    particle.run();
    if (particle.isDead()) {
      particles2.splice(i, 1);
    }
  }
  
}



class Particle {
  constructor(x, y, col2) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.lifespan = 255.0;
    this.col2 = col2;
  }

  run() {
    let gravity = createVector(0, 0.05);
    this.applyForce(gravity);
    this.update();
    this.show();
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 2;
    this.acceleration.mult(0);
  }
  show() {
    stroke(0, this.lifespan);
    strokeWeight(2);
    fill(this.col2, this.lifespan);
    circle(this.position.x, this.position.y, 8);
  }
  isDead() {
    return (this.lifespan < 0.0);
  }
}



