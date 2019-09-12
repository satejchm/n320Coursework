//Sarah Tejchma
//N320
//September 5, 2019

//create drop class for rain drops
class Drop {
  constructor() {
    //set coordiantes for drops
    this.x = Math.random() * 400;
    this.y = 0;
  }

  update() {
    //create raindrop with blue fill color
    this.y++;
    fill(0, 0, 200);
    circle(this.x, this.y, 5);

    //set a counter for when the drops hit the rectangle
    if (this.y >= 275) {
      this.y = 0;
      this.x = Math.random() * 400;
      newGround.counter();
    }
  }
}

class Ground {
  constructor() {
    //set coordinates for rectangle
    this.x = 0;
    this.y = 275;
    this.blueStart = 0;

    //set starting color at 5 percent blue
    //set drop hit
  }

  update() {
    fill(0, 0, this.blueStart);
    //update that draws rectangle on the screen
    rect(this.x, this.y, 400, 25);
  }

  //drop hit called when a rain drop gets low enough (how do you inform it?)
  counter() {
    hit++;

    if (hit >= 10) {
      hit = 0;
      this.blueStart = this.blueStart + 25;
    }
  }
  //change color for every ten raindrops hit
}

class RainManager {
  constructor() {
    this.drops = [];
  }

  createDrop() {
    //make a new drop variable
    var newDrop = new Drop();

    //add drop to our collection
    this.drops.push(newDrop);
  }
  //this update puts random array of raindrops on the screen
  update() {
    for (var i = 0; i < this.drops.length; i++) {
      this.drops[i].update();
    }

    //countDrop() {
    //this.drops.foreach(function(newDrop) {
    //if (this.drops > 275 && this.drops ==10) {
    //this.drops--;
    // this.fill(0, 0, c=5+5);
    //}
    //})
  }

  //count rain drops
}

//global variables
var rainManager = new RainManager();
var newGround = new Ground();
var hit = 0;
var stopRain = 0;

//Run once before the application starts
function setup() {
  createCanvas(400, 300);
}

//runs 60 times a second, or so
function draw() {
  //clear background
  background(255);
  //create new drop on a 5 percent chance
  if (Math.random() < 0.05 && stopRain < 25) {
    stopRain++;

    rainManager.createDrop();
  }

  newGround.update();
  rainManager.update();
}
