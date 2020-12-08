class Bob{
    constructor(x,y,r){
        var options = {
            isStatic : false , 
            resititution : 1 ,
            friction : 0.5,
            density : 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = r;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
       
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("purple");
        ellipse(0 , 0 , this.radius , this.radius);
        pop();
    }




}