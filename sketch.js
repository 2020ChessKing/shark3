var shark, sharkIMG, x, y, fishSense, score;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	sharkIMG = loadImage('shark.png');
	fish1IMG = loadImage('fish1.png');
	fish2IMG = loadImage('fish2 (2).png');
	fish3IMG = loadImage('fish3.png');
	fish4IMG = loadImage('fish4.png');
	fish5IMG = loadImage('fish5.png');
	fish6IMG = loadImage('fish6.png');
	fish7IMG = loadImage('fish7.png');
	ggIMG = loadImage('gg.png');
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	shark = createSprite(400, 350);
	shark.addImage('fghjkl', sharkIMG);
	shark.scale = 0.3;


	fish1 = createSprite(700, 200);
	fish1.addImage('ertyehdyujf', fish1IMG);
	fish1.scale = 0.3;


	fish2 = createSprite(300, 600);
	fish2.addImage('ertyehdyujf', fish2IMG);
	fish2.scale = 0.15;

	
	fish3 = createSprite(156, 289);
	fish3.addImage('ertyehdyujf', fish3IMG);
	fish3.scale = 0.2;

	
	fish4 = createSprite(600, 200);
	fish4.addImage('ertyehdyujf', fish4IMG);
	fish4.scale = 0.2;

	
	fish5 = createSprite(133, 527);
	fish5.addImage('ertyehdyujf', fish5IMG);
	fish5.scale = 0.2;

	
	fish6 = createSprite(828, 470);
	fish6.addImage('ertyehdyujf', fish6IMG);
	fish6.scale = 0.2;

	
	fish7 =  createSprite(1203, 354);
	fish7.addImage('ertyehdyujf', fish7IMG);
	fish7.scale = 0.5;

	gg = createSprite(1400, 80);
	gg.addImage('dhj',ggIMG);
	gg.scale = 0.1;
	gg.visible = false;


	score = 0; 

	Engine.run(engine);

	x = shark.x;
	y = shark.y;
  
}


function draw() {

  rectMode(CENTER);
  background('#006A94');
  
  drawSprites();

  fill('white');
  text(score, 10, 20);

  if(shark.collide(fish1))
  {
	fish1.destroy();
	score = score + 1;
	gg.visible = true;
	
	setTimeout(function()
	{
		gg.visible = false;
	}, 1500);
  }

  
  if(shark.collide(fish2))
  {
	fish2.destroy();
	score = score + 1;
	gg.visible = true;
	
	setTimeout(function()
	{
		gg.visible = false;
	}, 1500);
  }

  if(shark.collide(fish3))
  {
	fish3.destroy();
	score = score + 1;
	gg.visible = true;
	
	setTimeout(function()
	{
		gg.visible = false;
	}, 1500);
  }

  if(shark.collide(fish4))
  {
	fish4.destroy();
	score = score + 1;
	gg.visible = true;
	
	setTimeout(function()
	{
		gg.visible = false;
	}, 1500);
  }

  if(shark.collide(fish5))
  {
	fish5.destroy();
	score = score + 1;
	gg.visible = true;
	
	setTimeout(function()
	{
		gg.visible = false;
	}, 1500);
  }

  if(shark.collide(fish6))
  {
	fish6.destroy();
	score = score + 1;
	gg.visible = true;
	
	setTimeout(function()
	{
		gg.visible = false;
	}, 1500);
  }

  if(shark.collide(fish7))
  {
	shark.destroy();
	score = 0;
	ender = createElement('h1', 'You Lose!!!!');
	ender.position(750, 350);
  }

  if(keyCode === 38)
  {
	shark.y = shark.y - 3;
  }
  else if(keyCode === 40)
  {
	shark.y = shark.y + 3;
  }
  else if(keyCode === 37)
  {
	shark.x = shark.x - 3;
  }

  else if(keyCode === 39)
  {
	  shark.x = shark.x + 3;
  }
  else{
	  shark.x = shark.x;
	  shark.y = shark.y;
  }
  
}
 



