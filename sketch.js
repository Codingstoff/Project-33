var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snowflake = [];
var backgroundIMG;

function preload() {
 
   backgroundIMG = loadImage("snow1.jpg")

}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundIMG);  
  Engine.update(engine);

  if(frameCount%70===0)
  {
      snowflake.push(new Snow(random(width/2-10,width/2+10),10,10));
  }

  for (var e = 0; e < snowflake.length; e++) {
    snowflake[e].display();
}
}