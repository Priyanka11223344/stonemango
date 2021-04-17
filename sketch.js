
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj;
var groundObject;
var launcherObject;
var mango1;
var world,boy;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var stone1;
var chain1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  mango1 = new mango(1090,200,40);
	mango2 = new mango(1030,85,40);
	mango3 = new mango(1020,170,40);
	mango4 = new mango(900,200,40);
	mango5 = new mango(950,140,40);
	mango6 = new mango(1120,50,40);
	mango7 = new mango(1120,130,40);
	mango8 = new mango(1220,240,40);
	mango9 = new mango(1000,250,40);
	mango10 = new mango(1190,180,40);
  stone1 = new StoneClass(200,100,30,30);
  chain1 = new Chain(stone1.body,{x:200,y:50});
  
     Engine.run(engine);

}

function draw() {
background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
  stone1.display();
  chain1.display();

  detectCollision (stone1,mango1);
  detectCollision (stone1,mango2);
  detectCollision (stone1,mango3);
  detectCollision (stone1,mango4);
  detectCollision (stone1,mango5);
  detectCollision (stone1,mango6);
  detectCollision (stone1,mango7);
  detectCollision (stone1,mango8);
  detectCollision (stone1,mango9);
  detectCollision (stone1,mango10);
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:235,y:420})
    launcherObject.attach(stone1.body);
  }
}

function detectCollision (lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.r + lstone.r){
   Matter.Body.setStatic(lmango.body,false);
 }
}