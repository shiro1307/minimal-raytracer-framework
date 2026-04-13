const renderer = new Renderer("game");
const camera = new Camera(CONFIG.RAY_DEPTH);
const light = new Light(CONFIG.AMBIENT, CONFIG.LIGHT_FALLOFF);
const scene = new Scene();

// Initialize sphere
scene.setSphere(
    new Vec3(50, -50, -80),
    CONFIG.SPHERE_RADIUS
);

function loop() {
    renderer.clear();

    const w = renderer.width / CONFIG.DOWNSCALE;
    const h = renderer.height / CONFIG.DOWNSCALE;

    // Update from inputs
    light.setDirection(lightRotX.value, lightRotY.value, lightRotZ.value);
    scene.updateSphere(new Vec3(ballX.value, -ballY.value, ballZ.value));

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const ray = camera.getRayForPixel(x, y, w, h);
            const collision = scene.raycast(ray);

            if (collision) {
                const color = light.colorFromNormal(collision.normal);
                renderer.drawPixel(x, y, CONFIG.DOWNSCALE, color);
            }
        }
    }
}

loop();

const inputIds = ['ballX', 'ballY', 'ballZ', 'lightRotX', 'lightRotY', 'lightRotZ'];
inputIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.oninput = () => loop();
});