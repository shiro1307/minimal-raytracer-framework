class Vec3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    add(other) {
        return new Vec3(this.x + other.x, this.y + other.y, this.z + other.z);
    }

    subtract(other) {
        return new Vec3(this.x - other.x, this.y - other.y, this.z - other.z);
    }

    cross(other) {
        return new Vec3(
            this.y * other.z - this.z * other.y,
            this.z * other.x - this.x * other.z,
            this.x * other.y - this.y * other.x
        );
    }

    scale(k) {
        return new Vec3(this.x * k, this.y * k, this.z * k);
    }

    div(k) {
        return new Vec3(this.x / k, this.y / k, this.z / k);
    }

    dot(other) {
        return this.x * other.x + this.y * other.y + this.z * other.z;
    }

    angle(other) {
        const magA = this.mag(), magB = other.mag();
        if (magA === 0 || magB === 0) return 0;
        return Math.acos(this.dot(other) / (magA * magB));
    }

    unit() {
        const m = this.mag();
        if (m === 0) return new Vec3(0, 0, 0);
        return this.div(m);
    }

    project(other) {
        const mag2 = other.mag();
        if (mag2 === 0) return new Vec3(0, 0, 0);
        return other.scale(this.dot(other) / (mag2 * mag2));
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