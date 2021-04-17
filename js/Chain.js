class Chain{
    
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.Sling= Constraint.create(options);
        this.bodyA = bodyA;
        this.pointB=pointB
      
        World.add(world, this.Sling);
    }
    fly(){
        this.Sling.bodyA=null
    }
    display(){
       if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
       // var pointB = this.Sling.bodyB.position
       var pointB=this.pointB
			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
       }
    }