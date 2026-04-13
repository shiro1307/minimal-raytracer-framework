class Renderer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.width = parseInt(this.canvas.getAttribute("width"), 10);
        this.height = parseInt(this.canvas.getAttribute("height"), 10);
    }

    clear(color = "black") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawPixel(x, y, size, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * size, y * size, size, size);
    }
}
