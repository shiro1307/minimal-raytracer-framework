# Raytracer JS

A 3D raytracer built from scratch in vanilla JavaScript. Renders a shaded sphere using ray–object intersection and Phong lighting, with interactive controls for scene manipulation.

## Features

- Raytraced sphere rendering
- Basic Phong lighting (diffuse + specular)
- Real-time interaction (sphere position, light rotation)
- Modular architecture (camera, scene, renderer, lighting)
- Optimized rendering via resolution downscaling

## Rendering Pipeline

Per pixel:

1. Cast ray from camera
2. Compute sphere intersection
3. Calculate surface normal
4. Apply lighting
5. Render pixel

Scene re-renders on every interaction.

## Performance

- Internal: 160 × 120
- Display: 800 × 600
- ~19K rays/frame (optimized from 480K - resolution scaling)

## Tech

- JavaScript
- HTML5 Canvas

## Scope

Focused on core raytracing fundamentals.

## Possible Extensions

- Shadows
- Reflections
- Multiple objects
- Camera movement
