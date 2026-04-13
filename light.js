class Light {
    constructor(ambient = 60, falloff = 0.7) {
        this.ambient = ambient;
        this.falloff = falloff;
        this.direction = new Vec3(-1, -1, 1).unit();
    }

    setDirection(rotX, rotY, rotZ) {
        const baseDir = new Vec3(-1, -1, 1).unit();
        this.direction = baseDir
            .rotateAroundAxis(new Vec3(0, 0, 1), rotZ * (Math.PI / 180))
            .rotateAroundAxis(new Vec3(0, 1, 0), rotY * (Math.PI / 180))
            .rotateAroundAxis(new Vec3(1, 0, 0), rotX * (Math.PI / 180));
    }

    colorFromNormal(normal) {
        const sunFactor = Math.max(0, normal.dot(this.direction));
        const falloff = Math.pow(sunFactor, this.falloff);
        const brightness = Math.floor((255 - this.ambient) * falloff + this.ambient);
        return `rgb(${brightness},${brightness},${brightness})`;
    }
}
