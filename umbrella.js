class Umbrella {
    constructor(x,y,r)
    {
        var option = {
            isStatic:true,
               
        }
       
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r,option)
        World.add(world,this.body);

        var boy = createSprite(this.body.position.x,this.body.position.y)
        boy.addAnimation("anime",boyA)
        boy.scale = 0.4
    }
}  