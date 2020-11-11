class log
{
  constructor(x,y,heighttel,angle)
  {
    var logoptions = {   'restitution':0.8,
                        'friction':1.0,
                        'density':1.0
                                      }

    this.body = Bodies.rectangle(x,y,20,height,logoptions)  
    World.add(world, this.body)  
    Matter.Body.setAngle(this.body , angle)  
    this.width = 20; 
    this.height = heighttel;    
  }

  display()
      {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
            rectMode("CENTER")
            translate(pos.x, pos.y)
            fill("brown")
            rotate(angle)
            rect(0,0,this.width,this.height)
        pop();
      }
 
}