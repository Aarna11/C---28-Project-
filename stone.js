class Stone{
    constructor(x,y,width,height){
        var options={
            'density': 1 ,
            'isStatic': true
        }
        this.body=Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
        this.body=loadImage("images/stone.png")
    }
    display()
	{
		
		push()
		
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
    }
   
};
