const Engine = Matter.Engine; //universe
const World = Matter.World; //planets
const Bodies = Matter.Bodies; //humans on earth

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,options);
  World.add(world,ground);

  var balloptions={
   restitution: 0.5
  }

  ball = Bodies.circle(100,200,20,balloptions);
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}