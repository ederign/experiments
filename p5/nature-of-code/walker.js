class Walker {

  constructor() {
    this.pos = createVector(width/2, 0);
    this.display();
    this.vel = createVector(0,0);
    this.acc = createVector(0, 0.1)
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  display() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}