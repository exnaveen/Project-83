var current_position_of_x, current_position_of_y;
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var touchEvent = "empty";

var width = screen.width;
var height = screen.height;
new_width = screen.width - 70;
new_height = screen.height - 300;

var color;
var width;

document.getElementById("colorInput").value = "black";
document.getElementById("widthInput").value = 1;

if (width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").width = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color = document.getElementById("colorInput").value;
    width = document.getElementById("widthInput").value;
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) 
{
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    console.log("x  = " + current_position_of_x + "| y = " + current_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;


}