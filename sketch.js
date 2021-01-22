const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;
var roof;

function setup() {
	createCanvas(1000,1000);

    engine = Engine.create();
	world = engine.world;

  roof = new roofc(200,100,200,20);
  bob1 = new bob(200,300);
  bob2 = new bob(160,300);
  bob3 = new bob(120,300);
  bob4 = new bob(240,300);
  bob5 = new bob(280,300);

  chain1 = new Chain(roof.body,bob1.body,0,0);
  chain2 = new Chain(roof.body,bob2.body,40,0);
  chain3 = new Chain(roof.body,bob3.body,80,0);
  chain4 = new Chain(roof.body,bob4.body,-40,0);
  chain5 = new Chain(roof.body,bob5.body,-80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}