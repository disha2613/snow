const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;

function preload(){
  bgImg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  winter = createSprite(300, 200, 20, 20);
  shiva = createSprite(400, 200, 50, 50);
  
  snow1 = new Snow(300,100,10,10);

}

function draw() {
  background(bgImg);
  Engine.update(engine);

  snow1.display();

  drawSprites();
}

function keyPressed(){
  if (keyCode === 32){
    shiva.velocityY = -5;
     
  }
        
}