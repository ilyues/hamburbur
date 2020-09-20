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

  burgerStack = [ham, b, u, r, ger];
  burgerText = ['ham', 'b', 'u', 'r', 'ger'];
  currText = ['ham', 'b', 'u', 'r', 'ger'];
  currBurger = [ger, r, u, b, ham];


  makeButtons();
  canvas = createCanvas(windowWidth, 1000);
  background(252, 249, 240);

}

function makeButtons() {
  hamButton.position(0.72 * window.innerWidth, 175).mousePressed(function(){ pushOn(0);});
  bButton.position(0.79 * window.innerWidth, 175).mousePressed(function(){ pushOn(1);});
  uButton.position(0.72 * window.innerWidth, 280).mousePressed(function(){ pushOn(2);});
  rButton.position(0.79 * window.innerWidth, 280).mousePressed(function(){ pushOn(3); });
  gerButton.position(0.72 * window.innerWidth, 385).mousePressed(function(){ pushOn(4); }); 
  popButton.position(0.725 * window.innerWidth, 650).mousePressed(popOff); 
}

function draw() {
  // right text :(
  textSize(70);
  fill('#E5320B');
  textFont('Modak');
  textAlign(CENTER);
  text('PUSH', 0.78 * window.innerWidth, 100); 
  text('POP', 0.78 * window.innerWidth, 580);
  textSize(20);
  fill('#482D27');
  textFont('Capriola');
  textAlign(CENTER);
  text('an ingredient onto \nyour burger stack...', 0.78 * window.innerWidth, 130);
  text('the last ingredient\n off the stack!', 0.78 * window.innerWidth, 610);
  textAlign(RIGHT);
  text('...or', 0.84 * window.innerWidth, 460);
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
  base_y = 750;
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
  textSize(30);
  fill('#482D27');
  textFont('Capriola');
  textAlign(CENTER);
  text(burgerName, 0.50 * window.innerWidth, 925);
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