
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone1, treeImg;
var mango1, mango2, mango3, mango4, mango5;
var sling1;
var ground1;

function preload()
{
	treeImg = loadImage("Plucking mangoes/tree.png");
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400, 680, 800, 20);
	
	stone1 = new Stone(100, 50, 50);

	mango1 = new Mango(500, 475, 50);
	mango2 = new Mango(520, 460, 50);
	mango3 = new Mango(560, 450, 50);
	mango4 = new Mango(600, 470, 50);
	mango5 = new Mango(640, 480, 50);

	sling1 = new Sling(stone1.body, {x: 200, y: 600});

	

	Engine.run(engine);
  
}


function draw() {
  
	
  background(0);
  
  

  image(treeImg, 425, 400, 300, 300);
  image(boyImg, 200, 600, 50, 100);
  ground1.display();
  sling1.display();
  
  stone1.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);

 
  
  drawSprites();

  
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	sling1.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420});
		sling1.attach(stone1.body);
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body, false);
	}
}



