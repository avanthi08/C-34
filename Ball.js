class Ball
{
    constructor (x,y,radius,angle)
    {
        var options={
         density:1,
         frictionAir:0.004,
        }
        this.ball=Bodies.circle(x,y,radius,options);
       this.radius=radius;
        World.add(world,this.ball);
    }
    display()
    {
    var pos=this.ball.position;
    var a=this.ball.angle;
    push()
    translate(pos.x,pos.y);
    rotate(a);
    ellipseMode(RADIUS);
    fill("brown");
    ellipse(0,0,this.radius,this.radius);
    pop()
    }
}