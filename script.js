var ball1;
var mu = 0.1;
function setup() {
  createCanvas(400, 400);
  ball1 = new Ball(100, 200, 4)
  ball2 = new Ball(200, 200, 2)
  
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    let wind = createVector(random(0,0.6), random(0,0.1));
    ball1.applyForce(wind);
    ball2.applyForce(wind);
  }
  let gravity = createVector(0, 0.2);
  let weight1 = p5.Vector.mult(gravity, ball1.mass);
  let weight2 = p5.Vector.mult(gravity, ball2.mass);
  ball1.applyForce(weight1)
  ball2.applyForce(weight2)
  colision(ball1, ball2)
  ball1.friction()
  ball1.update();
  ball1.edges();
  ball1.show()
  ball2.friction()
  ball2.update();
  ball2.edges();
  ball2.show()
}
function colision(a, b){
  let diffe1 = a.r + b.r
  let diffe2 = p5.Vector.mag(p5.Vector.sub(a.pos, b.pos))
  if (diffe1 >= diffe2){
    if (b.vel.x != abs(b.vel.x)){
        b.vel.x *= -1
        a.vel.x *= -1
    }else{
    b.vel.y *= -1
    a.vel.y *= -1
  }}
}