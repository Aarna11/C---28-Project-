class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.body = Constraint.create(options);
        World.add(world, this.body)
    }
    attach(body){
        this.SlingShot.bodyA = body;
    }
    
    fly(){
        this.SlingShot.bodyA = null;
    }
    display(){
    
        line(bodyA,bodyB);
    }
}
        
           