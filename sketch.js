
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var dustbinobj1;
var dustbinobj2;
var dustbinobj3;

	

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	

	dustbinobj1 = new Dustbin(660,380,60,20);
	dustbinobj2 = new Dustbin(620,340,20,100);
	dustbinobj3 = new Dustbin(700,340,20,100);

	paper1 = new Paper(200,280,40);
	
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper1.display();

 ground.display();
 

 dustbinobj1.display();
 dustbinobj2.display();
 dustbinobj3.display();

}
function keyPressed() {
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:55,y:-55})
}
}


