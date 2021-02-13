class SlingShot{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            pointB:body2,
            stiffness:0.5,
            length:5
        }

       this.sling =  Matter.Constraint.create(options)
       this.pointB = body2
    World . add(world,this.sling)
    }

display(){

if(this.sling.bodyA){
var pointA =this.sling.bodyA.position 
var pointB =this.sling.pointB
strokeWeight(2)
line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}

 fly(){
this.sling.bodyA = null

}

}