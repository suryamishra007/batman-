class Drops {
    constructor(x,y,r)
    {
        var option = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
           
        }
       
        this.x = x;
        this.y = y;
        this.r = r;
       

        this.body = Bodies.circle(this.x,this.y,this.r/2,option);
        //this.image = loadImage("tcp.png");
        
        World.add(world,this.body);
        
    }

        display()
        {
            var pos = this.body.position;
            var angle = this.body.angle;
            
            push()
            translate(pos.x,pos.y)
            rotate(angle)
            //imageMode(CENTER)    
            //image(this.image,0,0,100,100)
            ellipseMode(CENTER)
            ellipse(0,0,this.r,this.r)
            pop()
        }

        createtb1()
        {
          image(tb1,-100,-50,500,300)
        }
        createtb2()
        {
            image(tb2,0,-50,500,300)
        }
        createtb3()
        {
            image(tb3,0,-50,500,300)
        }
        createtb4()
        {
            image(tb4,-80,-50,500,300)
        }

     update()
     {
         if(this.body.position.y > height)
         {
             Matter.Body.setPosition(this.body,{x:random(0,400),y:random(-200,10)})
             Matter.Body.setStatic(this.body,true);
             Matter.Body.setStatic(this.body,false);
         }
     }
    
  };

