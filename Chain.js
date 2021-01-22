class Chain{
    constructor (body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA : body1,
            bodyB : body2,
            pointA: {x:this.offsetX, y:this.offsetY},
            //stiffness: 0.1,
            //length: 200
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke(0);
        line(pointA.x - this.offsetX, pointA.y - this.offsetY, pointB.x, pointB.y);
    }
    
}