let ellipse0;
let button0;
let slider0;
let input0;
let buttonOfInput0;
let color0 = 0;
let text0;

function setup() {
  createElement("h1","HTML Tutorial");
  createCanvas(400,400).position(10,60);
  button0 = createButton("Click to color the ellipse").position(10,470);
  button0.mousePressed(changeColor);
  button0.mouseOver(mouseOverButton0);
    button0.mouseOut(mouseOutButton0);
  slider0 = createSlider(0,400,100).position(10,550);
  input0 = createInput("Type Your Name").position(150,550);
  input0.changed(changedFn);
  buttonOfInput0 = createButton("Send").position(330,544);
  buttonOfInput0.mousePressed(changedFn);
    buttonOfInput0.mouseOver(mouseOverButton1);
        buttonOfInput0.mouseOut(mouseOutButton1);
  createP("Position of button is "+button0.x+", "+button0.y).position(10,button0.y+button0.height);
  //in order to access of button0.x and .y value, there should be a value assigned to it in current function
}

function draw() { //fastlane mate, don't try to override this with DOM elements if not in draw
  background(150);
  noStroke();
  fill(color0);
  ellipse0 = ellipse(width/2,height/2,slider0.value(),slider0.value());
  buttonOfInput0.changed(changedFn);
  fill(255,0,255);
  textSize(14);
  text0 = text(input0.value(),100,100); //junk
}

function changeColor () {
  color0=random(255);
}

function changedFn() {
  buttonOfInput0.html("Sent!");
  input0.html("Type Your Name");
}

function mouseOverButton0() { //do I have to create functions for every DOM element?
  button0.style("background-color",color(255,200,0,150));
}

function mouseOutButton0() {
  button0.style("background-color",color(255,200,0,255));
}

function mouseOverButton1() {
  buttonOfInput0.style("background-color",color(255,200,0,150));
}

function mouseOutButton1() {
  buttonOfInput0.style("background-color",color(255,200,0,255));
}
//how can I manipulate DOM objects I created in html and have no reference here to them?
//position of DOM elements are relative to top left of this page,
//whereas positions of js objects are relative to top left of the canvas
