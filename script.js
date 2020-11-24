let canvas = document.getElementById("myCanvas")
let button = document.getElementById("clear")

var cKeyPressed;//hold a true or false value
var rKeyPressed; 

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
  if(rKeyPressed){
  drawRectangle()
  }

}

function drawRectangle(){



  
  console.log("drawRectangle")
  context.lineWidth = 10
  context.strokeStyle = "red"
  context.rect(10, 10, 150, 100);
  context.stroke()
  //context.fillStyle = "red";
  //context.fill();
}

function drawCircle(){
//get a rnadom color
var color = getRandomColor(1.0);
var circleSize = getRandomInt(5,20);

var randomXPosition = getRandomInt(0,canvas.width);
var randomYPosition = getRandomInt(0,canvas.height);context.beginPath();
context.arc(randomXPosition, randomYPosition, circleSize, 0, Math.PI*2);
context.fillStyle = color;
 //fill the circle with our random color!
context.fill();
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
  if(e.keyCode == 82){//letter c
    rKeyPressed = true;
  }
}


function keyUpHandler(e){
  if(e.keyCode == 67){//letter c
    cKeyPressed = false;
  }
  if(e.keyCode == 82){//letter c
    rKeyPressed = false;
  }
  
}

//setting up the key and the boolean value




//console.log("num1":num1)