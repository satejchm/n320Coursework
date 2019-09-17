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
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    //code below is the code to draw the circle on the page(have to put circle update in draw function to work)
    circle(this.position.x, this.position.y, 20);

    //this shows that if the ball goes out of bounds
    if (this.position.x < 0 || this.position.x > 400) {
      World.ballBeyond(this);

      //this listens so that if the ball goes out of bounds the rectangles increase in size
      newBox.bounds();
      newBox2.bounds();
    }
  }
}

//observing for ball to make changes
var World = {
  bgcolor: [237, 119, 83],
  //listener
  ballBeyond: function(whichBall) {
    this.bgcolor = [Math.random() * 255, Math.random() * 255, 83];
    whichBall.position.x = 100;
    whichBall.velocity.x = (Math.random() - 0.5) * 20;
  }
};

//class for a box
//the box is an observer as well because the bounds function is inside the ball waiting for when the ball is out of bounds
//when ball is out of bounds, the boxes increase in size
class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
  }

  update() {
    //creates rectangle to be used in draw function
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
