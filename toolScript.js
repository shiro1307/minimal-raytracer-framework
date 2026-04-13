const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const sx = parseInt(canvas.getAttribute("width"), 10);
const sy = parseInt(canvas.getAttribute("height"), 10);

function drawRect(x, y, w, h, color = "black") {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}