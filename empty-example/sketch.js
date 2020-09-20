var ham, b, u, r, ger;
var base_x = 0.5 * window.innerWidth;
var burgerStack, burgerText, currText, currBurger;
var hamButton, bButton, uButton, rButton, gerButton;

let buttonImages = [
  'assets/hamButton.png',
  'assets/bButton.png',
  'assets/uButton.png',
  'assets/rButton.png',
  'assets/gerButton.png',
]


function preload() {
  hamButton = createImg('assets/hamButton.png');
  bButton = createImg('assets/bButton.png');
  uButton = createImg('assets/uButton.png');
  rButton = createImg('assets/rButton.png');
  gerButton = createImg('assets/gerButton.png');
  popButton = createImg('assets/pop.png');
}

function setup() {
  imageMode(CENTER) 
  ham = loadImage('assets/ham.png');
  b = loadImage('assets/b.png');
  u = loadImage('assets/u.png');
  r = loadImage('assets/r.png');
  ger = loadImage('assets/ger.png');

  ham.resize(window.innerHeight * 0.4, 0);

  burgerStack = [ham, b, u, r, ger];
  burgerText = ['ham', 'b', 'u', 'r', 'ger'];
  currText = ['ham', 'b', 'u', 'r', 'ger'];
  currBurger = [ger, r, u, b, ham];


  makeButtons();
  canvas = createCanvas(windowWidth, windowHeight);
  background(252, 249, 240);

}

function makeButtons() {
  hamButton.position(0.72 * window.innerWidth, 0.175 * window.innerHeight).mousePressed(function(){ pushOn(0);}).size(windowWidth * 0.055, windowWidth * 0.055);
  bButton.position(0.78 * window.innerWidth, 0.175 * window.innerHeight).mousePressed(function(){ pushOn(1);}).size(windowWidth * 0.055, windowWidth * 0.055);
  uButton.position(0.72 * window.innerWidth, 0.280 * window.innerHeight).mousePressed(function(){ pushOn(2);}).size(windowWidth * 0.055, windowWidth * 0.055);
  rButton.position(0.78 * window.innerWidth, 0.280 * window.innerHeight).mousePressed(function(){ pushOn(3); }).size(windowWidth * 0.055, windowWidth * 0.055);
  gerButton.position(0.72 * window.innerWidth, 0.385 * window.innerHeight).mousePressed(function(){ pushOn(4); }).size(windowWidth * 0.055, windowWidth * 0.055);
  popButton.position(0.725 * window.innerWidth, 0.650 * window.innerHeight).mousePressed(popOff).size(windowWidth * 0.11, windowWidth * 0.11); 


}

function draw() {
  // right text :(
  textSize(window.innerHeight * 0.07);
  fill('#E5320B');
  textFont('Modak');
  textAlign(CENTER);
  text('PUSH', 0.78 * window.innerWidth, 0.1 * window.innerHeight); 
  text('POP', 0.78 * window.innerWidth, 0.58 * window.innerHeight);
  textSize(window.innerHeight * 0.02);
  fill('#482D27');
  textFont('Capriola');
  textAlign(CENTER);
  text('an ingredient onto \nyour burger stack...', 0.78 * window.innerWidth, window.innerHeight * 0.13);
  text('the last ingredient\n off the stack!', 0.78 * window.innerWidth, window.innerHeight * 0.61);
  textAlign(RIGHT);
  text('...or', 0.83 * window.innerWidth, 0.46 * window.innerHeight);
  visualiseBurger()
}

function windowResized() {
  makeButtons();
  base_x = 0.5 * window.innerWidth;
  resizeCanvas(windowWidth, 1000);
}

function popOff() {
  clear();
  currBurger.pop();
  currText.shift();
}

function pushOn(i) {
  clear();
  currBurger.push(burgerStack[i]);
  currText.unshift(burgerText[i]);
} 

function visualiseBurger() {
  base_y = 0.75 * window.innerHeight;
  for (var j = 0; currBurger[j] != undefined; j++) {
    image(currBurger[j], base_x, base_y);
    if ((currBurger[j] === ham || 
      currBurger[j] === b)) {
      base_y -= 90;
    } else {
      base_y -= 50;
    }
  }

  var burgerName = '';
  for (var j = 0; currText[j] != undefined; j++) {
    burgerName = burgerName + currText[j];
  }
  textSize(0.03 * window.innerHeight);
  fill('#482D27');
  textFont('Capriola');
  textAlign(CENTER);
  text(burgerName, 0.50 * window.innerWidth, 0.925 * window.innerHeight);
}



/* buttons - when pressed 
depending on which burger button:
- add image x by y position 
- add 'z' string to array 
- update array 
- regenerate text to print new array
- if array index > max then call thing that 
 tells u 'too much on ur burger!' (from ur mouse click, drops 
  and fades..)
 */