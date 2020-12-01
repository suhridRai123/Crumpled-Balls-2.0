var ball,invSprite,bd1,bd2,bd3;
var ballImg, dustImg
var ballb, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballImg = loadImage("paper.png")
	dustImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	ball=createSprite(100, 40, 10,10);
	ball.scale=0.5
	ball.shapeColor = "red"
	ball.addImage(ballImg)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bd1 = createSprite(820, 540, 200,20)
	bd1.shapeColor = color("grey")
	bd1.addImage(dustImg)

	engine = Engine.create();
	world = engine.world;

	ballb = Bodies.circle(200 , 200 , 5 , {restitution:-1, isStatic:false});
	World.add(world, ballb);

	invSprite = Bodies.rectangle(width/2, 250 , width, 10 , {isStatic:true} );
 	World.add(world, invSprite);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	bd1 = Bodies.rectangle(width/2, 650, 200, 60 , {isStatic:true} );
	World.add(world, bd1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball.x= ballb.position.x 
  ball.y= ballb.position.y
 drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
		invSprite.position.y = invSprite.position.y + 200
		ballb.position.x = ballb.position.x + 15
  }
}