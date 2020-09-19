var ham, b, u, r, ger;
var base_x = 700;
var base_y = 800;
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
  //ham = loadImage('/assets/ham.png');
  //b = loadImage('assets/')
  hamButton = createImg('assets/hamButton.png');
  bButton = createImg('assets/bButton.png');
  uButton = createImg('assets/uButton.png');
  rButton = createImg('assets/rButton.png');
  gerButton = createImg('assets/gerButton.png');
  removeButton = createButton('remove');
}

function setup() {
  // put setup code here
  // for static
  ham = loadImage('assets/ham.png');
  b = loadImage('assets/b.png');
  u = loadImage('assets/u.png');
  r = loadImage('assets/r.png');
  ger = loadImage('assets/ger.png');

  burgerStack = [ham, b, u, r, ger];
  burgerText = ['ham', 'b', 'u', 'r', 'ger'];
  currText = ['ham', 'b', 'u', 'r', 'ger'];
  currBurger = [ger, r, u, b, ham];


  hamButton.position(1400, 100).mousePressed(function(){ pushOn(0);});
  bButton.position(1400, 220).mousePressed(function(){ pushOn(1);});
  uButton.position(1400, 340).mousePressed(function(){ pushOn(2);});
  rButton.position(1400, 460).mousePressed(function(){ pushOn(3); });
  gerButton.position(1400, 580).mousePressed(function(){ pushOn(4); }); 
  removeButton.position(1400, 700).mousePressed(popOff); 
  canvas = createCanvas(2000, 1000);
  
  // canvas.style('width', '100%');
  // canvas.style('height', $('#canvas').width() + 'px');
  // canvas.parent('canvas');
}

function draw() {
  visualiseBurger()
}

function popOff() {
  clear()
  currBurger.pop();
  currText.shift();
  visualiseBurger()

}

function pushOn(i) {
  clear()
  currBurger.push(burgerStack[i]);
  currText.unshift(burgerText[i]);
  visualiseBurger()
} 

function visualiseBurger() {
  base_y = 600;
  for (var j = 0; currBurger[j] != undefined; j++) {
    image(currBurger[j], base_x, base_y);
    if (j < 5 && (currBurger[j] === ham || 
      currBurger[j] === b)) {
      base_y -= 80;
    } else {
      base_y -= 40;
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
  text(burgerName, 900, 900);
}

function generateText() {

}

function throwAway() {
  clear();
}

function burgerTooLarge() {

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