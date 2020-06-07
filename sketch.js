
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
  
}


function draw(){
 background(r,g,b);
 //ellipse(mouseX,mouseY,40);
r=map(mouseX,0,1200,0,255);
g=map(mouseX,0,1200,255,0);
b=map(mouseY,0,1200,0,255);
//g=map()
fill(255);
ellipse(mouseX,mouseY,40);
drawSprites();
}