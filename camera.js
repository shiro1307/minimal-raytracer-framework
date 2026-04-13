class Camera {
    constructor(rayDepth = 200) {
        this.rayDepth = rayDepth;
    }

    getRayForPixel(x, y, screenWidth, screenHeight) {
        const origin = new Vec3(0, 0, 0);
        const direction = new Vec3(
            (x - screenWidth / 2) / this.rayDepth,
            (y - screenHeight / 2) / this.rayDepth,
            -1
        ).unit();
        return new Ray(origin, direction);
    }
}
