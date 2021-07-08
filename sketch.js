const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var dustbinImg,bin;

function preload(){
    dustbinImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    dustbin = createSprite(964,520,20,20);
   dustbin.addImage(dustbinImg);
    dustbin.scale = 0.45;

    dustbinPart1 = new Dustbin(902,505,10,120);
    dustbinPart2 = new Dustbin(962,565,130,10);
    dustbinPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(199, 192, 240);
    Engine.update(engine);
    textSize(20)
    fill (0)
 text("Maintain cleanliness around you and find godliness everywhere. press the up  Arrow key to throw the paper ball in the bin!!",33,23)  
   
    ground.display();
    crumpledPaper.display();
    dustbinPart1.display();
    dustbinPart2.display();
    dustbinPart3.display(); 
      
    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}
