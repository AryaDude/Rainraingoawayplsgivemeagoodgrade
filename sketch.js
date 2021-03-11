
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	stone = new Rock(160,500);
	stone2 = new Rock(260,500);
	stone3 = new Rock(360,500);
	stone4 = new Rock(460,500);
	stone5 = new Rock(560,500);
	chain = new Fling(stone.body,{x:160, y:500});
	chain1 = new Fling(stone2.body,{x:260, y:500});
	chain2 = new Fling(stone3.body,{x:360, y:500});
	chain3 = new Fling(stone4.body,{x:460, y:500});
	chain4 = new Fling(stone5.body,{x:560, y:500});
	ground = new Ground(360,500,500,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  ground.display();
  
  drawSprites();
 
}



function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }