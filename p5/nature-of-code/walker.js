class Walker {

  constructor() {
    this.pos = createVector(width/2, 0);
    this.display();
    this.vel = createVector(0,0);
    this.acc = createVector(0, 0.1)
  }

  update() {
    background(51);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    
    w.display(this.x, this.y);
  }

  display() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}