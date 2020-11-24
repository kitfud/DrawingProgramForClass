let canvas = document.getElementById("myCanvas")
let button = document.getElementById("clear")
var cKeyPressed;//hold a true or false value
canvas.width = 400;
canvas.height = 600;

let context = canvas.getContext("2d")

/*
context.beginPath()
context.moveTo(0,0)
context.lineTo(200,250)
context.stroke()
context.closePath()
*/

button.onclick = function (){
context.clearRect(0,0,canvas.width,canvas.height)
}

setInterval(drawShapes,50)

function drawShapes(){
  if(cKeyPressed){
  drawCircle()
  }

}

function drawCircle(){
//get a rnadom color
var color = getRandomColor(1.0);
var circleSize = getRandomInt(5,20);

var randomXPosition = getRandomInt(0,canvas.width);
var randomYPosition = getRandomInt(0,canvas.height);context.beginPath();
context.arc(randomXPosition, randomYPosition, circleSize, 0, Math.PI*2);
context.fillStyle = color; //fill the circle with our random color!
context.fill();
//get a random circle size

//choose a random x and y pos

//fill circle with random color

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor(alpha){
 //return some color values 
 let red = Math.floor(getRandomInt(0,255));
 let green = Math.floor(getRandomInt(0,255));
 let blue = Math.floor(getRandomInt(0,255));

 return "rgba("+ red + "," + green + "," + blue +"," + alpha+ ")";

}

document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);



function keyDownHandler(e){
  if(e.keyCode == 67){//letter c
    cKeyPressed = true;
  }
}
function keyUpHandler(e){
  if(e.keyCode == 67){//letter c
    cKeyPressed = false;
  }
}







//console.log("num1":num1)