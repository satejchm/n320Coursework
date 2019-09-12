//Sarah Tejchma
//N320
//Week 3 Lab

//this creates the ball class to create a varaiable and draw the ball onto the scrren
class Ball {
  constructor() {
    //below are position/velocity coordinates for ball
    this.position = { x: 100, y: 100 };
    this.velocity = { x: 10, y: 0 };
  }

  update() {
    //code below shows
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    //code below
    circle(this.position.x, this.position.y, 20);

    //this shows that if the ball goes out of bounds
    if (this.position.x < 0 || this.position.x > 400) {
      World.ballBeyond(this);

      newBox.bounds();
      newBox2.bounds();
    }
  }
}

//singleton
var World = {
  bgcolor: [237, 119, 83],
  ballBeyond: function(whichBall) {
    this.bgcolor = [Math.random() * 255, Math.random() * 255, 83];
    whichBall.position.x = 100;
    whichBall.velocity.x = (Math.random() - 0.5) * 20;
  }
};

//class for a box
class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
  }

  update() {
    fill(0, 0, 50);
    rectMode("center");
    rect(this.x, this.y, this.size, this.size);
  }

  //Grows in size every time a ball hits an edge and is reset
  bounds() {
    this.size += 10;
  }
}

// "For fun": multiple balls

//instantiates new ball
var ball = new Ball();

//instantiates new box
var newBox = new Box(150, 100);
var newBox2 = new Box(250, 100);

function setup() {
  //sets canvas size
  createCanvas(400, 300);
}

function draw() {
  //references
  background(World.bgcolor);
  ball.update();

  newBox.update();
  newBox2.update();
}
