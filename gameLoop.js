let fac = 4;

let w = sx / fac;
let h = sy / fac;

function loop() {

    let A = new Sphere(new Vec3(
        ballX.value, -ballY.value, ballZ.value
    ),
        39);

    //sun-lighting
    let sundir = new Vec3(-1, -1, 1)
        .unit()
        .rotateAroundAxis(new Vec3(0, 0, 1), lightRotZ.value * (Math.PI / 180))
        .rotateAroundAxis(new Vec3(0, 1, 0), lightRotY.value * (Math.PI / 180))
        .rotateAroundAxis(new Vec3(1, 0, 0), lightRotX.value * (Math.PI / 180))

    drawRect(0, 0, sx, sy, "black");

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {

            let R = new Ray(
                new Vec3((x - w / 2), (y - h / 2), 0),
                new Vec3((x - w / 2) / 100, (y - h / 2) / 100, -1).unit()
            );

            let cast = A.getRayCollision(R);

            if (cast) {
                let norm = cast[1];

                // lambert lighting (correct)
                let sunfac = Math.max(0, norm.dot(sundir));

                // optional soft curve
                sunfac = Math.pow(sunfac, 0.7);

                let amb = 60

                let sun = (255 - amb) * sunfac + (amb);

                drawRect(
                    x * fac,
                    y * fac,
                    fac,
                    fac,
                    `rgb(${sun},${sun},${sun})`
                );
            }
        }
    }
}

loop();

['ballX', 'ballY', 'ballZ', 'lightRotX', 'lightRotY', 'lightRotZ'].forEach(id => {
    document.getElementById(id).oninput = () => loop();
});