class CannonBall{
    constructor(x,y){
        var op = {
            restituition : 0.8,
            friction : 1,
            density : 1,
            isStatic : true,
        }
        
       this.body = Bodies.circle(x,y,40,op);
       World.add(world,this.body);
       this.r = 40;

       this.Image = loadImage("assets/cannonball.png");
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.Image,0,0,this.r,this.r);
        pop();
    }
    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle,20);
        Matter.Body.setVelocity(this.body,{
            x : velocity.x,
            y : velocity.y,
        })
        Matter.Body.setStatic(this.body,false);
    }
}