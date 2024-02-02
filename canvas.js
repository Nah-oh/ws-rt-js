var width = 380;
var height = 280;
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d");

function draw_line(startX, startY, endX, endY, color = "black") {
    // ctx.strokeStyle(color);
    ctx.lineTo(startX, startY);
    ctx.lineTo(endX, endY);
}

function clear_screen() {
    ctx.fillStyle = "red";
    ctx.clearRect(0, 0, width, height)
}

function gameLoop() {
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, width, height);

    ctx.lineWidth = 15

    ctx.beginPath();
    ctx.moveTo(120, 50);
    draw_line(120, 50, 180, 120, "black")
    ctx.closePath();
    ctx.stroke();
    ctx.strokeRect(60, 60, 50, 20)
    ctx.strokeRect(185, 60, 50, 20)
    
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
}

document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(gameLoop(), 1000 / 30)
})