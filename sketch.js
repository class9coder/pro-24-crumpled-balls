
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject1, paperObject2,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject1=new Paper(200,450,70);
	paperObject2=new Paper(290,480,70);

	groundObject=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1200,510,20,200);
	dustbin2=new Dustbin(1000,510,20,200);
	dustbin3=new Dustbin(1100,600,200,20);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
 
  
  paperObject1.display();
  paperObject2.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject1.body,paperObject1.body.position,{x:130,y:-145});
	  Matter.Body.applyForce(paperObject2.body,paperObject2.body.position,{x:120,y:-135});

  
	}
}


