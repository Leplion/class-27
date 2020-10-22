class Chain{
   constructor(bodyA,bodyB){
     var options = {
     bodyA : bodyA,
     bodyB : bodyB,
     stiffness : 0.2,
     length : 0.5,
     }  
this.chain = Matter.Constraint.create(options)
World.add(world, this.chain);
   }
   display(){
   strokeWeight(4)
   stroke("black")    
   line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
   }
}