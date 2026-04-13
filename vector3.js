class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    add(B) {
        return new Vec3(this.x + B.x, this.y + B.y, this.z + B.z);
    }

    subtract(B) {
        return new Vec3(this.x - B.x, this.y - B.y, this.z - B.z);
    }

    cross(B) {
        return new Vec3(
            this.y * B.z - this.z * B.y,
            this.z * B.x - this.x * B.z,
            this.x * B.y - this.y * B.x
        );
    }

    scale(k) {
        return new Vec3(this.x * k, this.y * k, this.z * k);
    }

    div(k) {
        return new Vec3(this.x / k, this.y / k, this.z / k);
    }

    dot(B) {
        return this.x * B.x + this.y * B.y + this.z * B.z;
    }

    angle(B) {
        const magA = this.mag(), magB = B.mag();
        if (magA === 0 || magB === 0) return 0;
        return Math.acos(this.dot(B) / (magA * magB));
    }

    unit() {
        const m = this.mag();
        if (m === 0) return new Vec3(0, 0, 0);
        return this.div(m);
    }

    project(B) {
        const mag2 = B.mag();
        if (mag2 === 0) return new Vec3(0, 0, 0);
        return B.scale(this.dot(B) / (mag2 * mag2));
    }

    rotateAroundAxis(axis, angle) {
        let k = axis.unit();

        let cos = Math.cos(angle);
        let sin = Math.sin(angle);

        return this.scale(cos)
            .add(k.cross(this).scale(sin))
            .add(k.scale(k.dot(this) * (1 - cos)));
    }

    toString() {
        return `[x: ${this.x}, y: ${this.y}, z: ${this.z}]`;
    }
}