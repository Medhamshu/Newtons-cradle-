class bob {
 constructor(x,y)
  {
    var options = {
        'isStatic':false,
        'friction': 1.0,
        'restitution':0.5,
        'density':1.0,
      }
      this.body = Bodies.circle(x, y, 22, options);
      this.radius = 22;
      World.add(world, this.body);  
  }
 display()
 {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('yellow');
    fill('yellow');
    ellipseMode(CENTER);
    ellipse(0, 0,40,40);
    pop();
 }

}