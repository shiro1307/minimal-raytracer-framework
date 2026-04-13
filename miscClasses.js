class Ray {
    constructor(ori, dir) {
        this.origin = ori;
        this.direction = dir;
    }
}

function solveQuadratic(a, b, c) {
    const discr = b ** 2 - 4 * a * c;

    if (a !== 0 && discr >= 0) {

        const sqrtd = Math.sqrt(discr);

        let r1 = (-b - sqrtd) / (2 * a);
        let r2 = (-b + sqrtd) / (2 * a);

        return { r1, r2 };

    }

    return null;
}

class Sphere {
    constructor(ctr, rad) {
        this.center = ctr;
        this.radius = rad;
    }

    getRayCollision(ray) {

        let OC = ray.origin.subtract(this.center);

        let a = ray.direction.dot(ray.direction);
        let b = 2 * ray.direction.dot(OC);
        let c = OC.dot(OC) - this.radius ** 2;

        let res = solveQuadratic(a, b, c);

        if (!res) return null;

        let { r1, r2 } = res;

        // calculate ray distance
        const validRoots = [r1, r2].filter(r => r > 0);
        const raydist = validRoots.length ? Math.min(...validRoots) : null;
        if (!raydist) return null;

        //calculate normal vector
        let H = ray.origin.add(ray.direction.scale(raydist));
        let norm = H.subtract(this.center).unit();

        return [raydist, norm];

    }
}