class Bob{
    constructor (x,y,diameter){
        var options ={
        isStatic :true,
        restitution :0.3,
        friction :0.5,
        density :1.2
        }
    this.body = Bodies.circle(x,y,diameter,options);
    this.diameter=diameter;
    World.add(world,this.body);
    }
    display(){
    push();
    fill("pink")
    circle(this.body.position.x,this.body.position.y,this.diameter);
    pop();
    }    
    }
    