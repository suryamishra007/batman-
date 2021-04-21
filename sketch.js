const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrop = 100;
var drops = [];
var tb1,tb2,tb3,tb4
var boyA
var umbrel


function preload(){
    tb1 = loadImage("1.png")
    tb2 = loadImage("2.png")
    tb3 = loadImage("3.png")
    tb4 = loadImage("4.png")

    boyA = loadAnimation("walking_1.png","walking_2.png",
    "walking_3.png","walking_4.png",
    "walking_5.png","walking_6.png",
    "walking_7.png","walking_8.png")
}

function setup(){

    createCanvas(400,800);
   
    engine = Engine.create();
	world = engine.world;
 
    for(var i = 0;i<maxDrop; i++)
    {
        drops.push(new Drops(random(0,400), random(-400,400), 5));
    }

    umbrel = new Umbrella(200,700,100)

     
}

function draw(){

    background(0);

    Engine.update(engine)
    var n= Math.round(random(1,4))
      
    for(var i = 0;i<drops.length;i++)
    {
       drops[i].display();
       drops[i].update();

       if(frameCount%60 === 0)
       {
           switch(n)
           {
               case 1:drops[i].createtb1();
               break;

               case 2:drops[i].createtb2();
               break;

               case 3:drops[i].createtb3();
               break;

               case 4:drops[i].createtb4();
               break;
 
           }
       }
    }
    drawSprites();

    //drops.display();
    
}   

