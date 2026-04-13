class Scene {
    constructor() {
        this.sphere = null;
    }

    setSphere(center, radius) {
        this.sphere = new Sphere(center, radius);
    }

    updateSphere(center) {
        if (this.sphere) {
            this.sphere.center = center;
        }
    }

    raycast(ray) {
        if (this.sphere) {
            const collision = this.sphere.getRayCollision(ray);
            if (collision) {
                return { distance: collision[0], normal: collision[1] };
            }
        }
        return null;
    }
}
