const Engine =Matter.Engine;
const World =Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
function setup() {
  canvas=createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,350,400,400,ground_options);

  World.add(world,ground);

 
  

}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode (CENTER) 
  rect(ground.position.x,ground.position.y,50,50)
  
}