class Rope{
    constructor(bodyA, bodyB, offsetX , offsetY){
        this.oX = offsetX;
        this.oY = offsetY;

        var options = {
        bodyA : bodyA,
        bodyB : bodyB,
        pointB : {x : this.oX , y : this.oY}
     }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(3);
        //stroke("yellow")

        var a1x = pointA.x;
        var a1y = pointA.y;

        var a2x = pointB.x + this.oX;
        var a2y = pointB.y + this.oY;


        line(a1x, a1y, a2x , a2y );
    }

    

}