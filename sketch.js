
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  bob1 = new Bob(300,250,30)
  bob2 = new Bob(350,250,30)
  bob3 = new Bob(400,250,30)
  bob4 = new Bob(450,250,30)
  bob5 = new Bob(500,250,30)
  ground = new Ground(20)
  
  chain1= new chain(bob1.body,ground.body,-bobDiameter*2,0)
  chain2= new chain(bob2.body,ground.body,-bobDiameter*2,0)
  chain3= new chain(bob3.body,ground.body,-bobDiameter*2,0)
  chain4= new chain(bob4.body,ground.body,-bobDiameter*2,0)
  chain5= new chain(bob5.body,ground.body,-bobDiameter*2,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground.display();

   drawSprites();
}



