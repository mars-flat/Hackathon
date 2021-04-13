var canvas;
var context;


window.onload = function(){
  // Starting code of the program
  console.log("starting");

  canvas = document.getElementById("gameCanvas");
  context = canvas.getContext("2d");

  drawRect(0, 0, 50, 50, "blue");
}

function drawRect(x, y, width, height, color){
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}

function fib(n) {
  if (n < 2) return n;
  return fib(n-1) + fib(n-2);
}
