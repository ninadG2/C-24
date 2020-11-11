const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;
var box1, box2, box3, box4, box5;
var pig1, pig;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //layer 1
    box1 = new box(700,320,70,70);
    box2 = new box(920,320,70,70);
    log1 = new log(801,260,300,PI/2);
    pig1 = new Pig(810,350);
    //layer 2
    box3 = new box(700, 240, 70, 70);
    box4 = new box(920, 240, 70, 70);
    pig2 = new Pig(810, 220);
    log2 = new log(810,180,300,PI/2);
    //layer 3
     box5 = new box(810,160,70,70);
     log3 = new log(760,120,150,PI/7);
     //log4 = new log(870,120,150,-PI/7);

    ground1 = new ground(width/2,height-10,width,20)
    
    
   

    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    //layer 1
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    //layer 2
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    //layer 3
    box5.display();
     log3.display();
    // log4.display();
}