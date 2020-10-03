class chain{
    constructer(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
    var Options = {
    bodyA : body1,
    bodyB : body2,
    pointB:{x:this.offsetX, y:this.offsetY}
    }
    this.chain = Constraint.create(Options)
    this.pointB = pointB
    World.add(world, this.chain);
    }
    display(){
    Line()
    }
}
