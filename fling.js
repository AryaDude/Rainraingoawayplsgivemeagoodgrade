class Fling{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.0004,
            length: 50,       
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    
	attach(body){
		this.chain.bodyA = body;
	}
    display(){
        if(this.chain.bodyA ){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        fill("blue")
        strokeWeight(4);
        stroke("blue")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.chain.bodyA = null;
    }
}