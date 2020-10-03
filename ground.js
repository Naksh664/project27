class Ground {
    constructer(h){
        this.body = Bodies.rectangle(300,25,width,h,{isStatic:true});
        World.add(world,this.body);
        this.height = h;
        this.width = width;
    }

display(){
    rectMode(CENTER);
    push();
    fill("yellow");
    rect(400, 50, 300, 25);
    pop();
}    
}