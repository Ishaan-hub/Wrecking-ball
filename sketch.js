const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ball,rope,ground;


function setup(){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(1500,800,3000,20);

    box1 = new Box(700,300,80,80)
    box2 = new Box(700,300,80,80)
    box3 = new Box(700,300,80,80)
    box4= new Box(700,300,80,80)
    box5= new Box(700,300,80,80)
    box6= new Box(790,300,80,80)
    box7= new Box(790,300,80,80)
    box8= new Box(790,300,80,80)
    box9= new Box(790,300,80,80)
    box10= new Box(790,300,80,80)
    ball = new Ball(500,200,80,80)
    rope = new Rope(ball.body,{x:500,y:200})
}

function draw(){
    background(10,125,175)
    Engine.update(engine);

    ground.display();
    ball.display();
    rope.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}