const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const sx = parseInt(canvas.getAttribute("width"), 10);
const sy = parseInt(canvas.getAttribute("height"), 10);

const keys = {};
window.addEventListener("keydown", (e) => {
    keys[e.code] = true;
});
window.addEventListener("keyup", (e) => {
    keys[e.code] = false;
});

function drawRect(x, y, w, h, color = "black") {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}