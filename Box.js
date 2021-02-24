class Box
{
    constructor (x,y,width,height)
    {
        var options={
            density:0.04,
            restitution:0.8,
            friction:1.0, 
        }
        this.rect=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.rect);
    }
    display()
    {
        var pos=this.rect.position;
        var angle = this.rect.angle;
        push();
        
    translate(pos.x,pos.y);
    rotate(angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        rect(0,0,this.width,this.height);
        pop();
}
}
