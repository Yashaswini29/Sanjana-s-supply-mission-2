const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box;
var box1,box2;
var engine,world;

function preload()
{
	helicopterIMG= loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//box1= new box1(200,200,50,50);


	var ground_options ={
		isStatic: true
		
    }
	groundSprite=createSprite(width/2, 680, width, 10 );
	groundSprite.shapeColor=color(255)
	
	boxSprite=createSprite(width/2, 650, 300,10);
	boxSprite.shapeColor=color(255)

	box1Sprite=createSprite(550, 570, 10,150);
	box1Sprite.shapeColor=color(255)

	box2Sprite=createSprite(250, 570, 10,150);
	box2Sprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	 
	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
    
	 box = Bodies.rectangle(width/2, 650, 300, 10 , {isStatic:true} );
	 World.add(world, box);

	 box1 = Bodies.rectangle(550, 570, 10, 150 , {isStatic:true} );
	 World.add(world, box1);

	 box2 = Bodies.rectangle(250, 570, 10, 150 , {isStatic:true} );
	 World.add(world, box2);
	 
  
}


function draw() {
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //boxSprite.x= boxBody.position.x 
  //boxSprite.y= boxBody.position.y
  drawSprites();
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	//ground = Bodies.rectangle(width/2, 620, width, 10 , {isStatic:true} );
	//World.add(world, packageBody); 

	 //restitution:0.5
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



