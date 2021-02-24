const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
const Constraint=Matter.Constraint
var engine,world;

function setup()
{
    createCanvas(3000,800);
    engine = Engine.create();
    world=engine.world;

    ground = new Ground(600,600,3000,20);
    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{x: 500, y:50});

    box1 = new Box(900,100,70,70);
    box2 = new Box(900,170,70,70);
    box3 = new Box(900,240,70,70);
    box4 = new Box(900,210,70,70);
    box5 = new Box(900,280,70,70);
    box6 = new Box(1000,100,70,70);
    box7 = new Box(1000,170,70,70);
    box8 = new Box(1000,240,70,70);
    box9 = new Box(1000,210,70,70);
    box10 = new Box(1000,280,70,70);
    box11 = new Box(1100,100,70,70);
    box12 = new Box(1100,170,70,70);
    box13 = new Box(1100,240,70,70);
    box14 = new Box(1100,210,70,70);
    box15 = new Box(1100,280,70,70);

}

function draw()
{
    background("pink");
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
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
}
