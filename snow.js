class Snow {
    constructor(x, y,r) {
        var options = {
            density: 1,
            friction:1,
            isStatic: false
        }
        
        this.body = Bodies.circle(x, y,this.r, options);
        this.image=image("snow4.webp")
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ImageMode(CENTER);
        image(pos.x, pos.y, this.image);
        

    }
};