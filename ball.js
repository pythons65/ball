class Ball {
  constructor(x, y, m) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.mass = m
    this.r = sqrt(this.mass) * 10
  }
  show() {
    stroke(255);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0,0)
  }
  friction(){
    let diff = height - (this.pos.y + this.r);
    if(diff < 1){
      let fric = this.vel.copy()
      fric.normalize()
      fric.mult(-1)
       let normal = this.mass
       fric.setMag(mu * normal)
       this.applyForce(fric)
    }

  }
  applyForce(force){
    let f = p5.Vector.div(force, this.mass)
    this.acc.add(f)
  }
    edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }
}