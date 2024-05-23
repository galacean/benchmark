/**
 * @title Particle
 * @category Benchmark
 */

import {
  Engine,
  Scene,
  Vector3,
  DefaultRenderingPipeline,
  ParticleSystem,
  Color4,
  Texture,
  MeshBuilder,
  UniversalCamera,
} from "@babylonjs/core";
import "@babylonjs/loaders";

// Get the canvas element
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
document.body.appendChild(canvas);
// Generate the BABYLON 3D engine
const engine = new Engine(canvas, true);

canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;

// Create the scene
const createScene = function () {
  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new Scene(engine);
  scene.clearColor.set(0, 0, 0, 1);

  // Camera
  var camera = new UniversalCamera(
    "ArcRotateCamera",
    new Vector3(0, 0, -220),
    scene
  );

  // Set up new rendering pipeline
  const pipeline = new DefaultRenderingPipeline("default", true, scene);
  const texture = new Texture(
    "https://mdn.alipayobjects.com/huamei_b4l2if/afts/img/A*JPsCSK5LtYkAAAAAAAAAAAAADil6AQ/original",
    scene
  );

  // Fire!
  const xCount = 25;
  const yCount = 20;
  const xSpacing = 3;
  const ySpacing = 5;

  for (let i = 0; i < xCount; i++) {
    for (let j = 0; j < yCount; j++) {
      // Create a particle system
      const particleSystem = new ParticleSystem("particles", 1000, scene);

      // Texture for particles
      particleSystem.particleTexture = texture;

      const emitter = MeshBuilder.CreateSphere("emitter", { diameter: 1 });
      emitter.isVisible = false; // Hide the sphere mesh
      emitter.position = new Vector3(
        (i - xCount / 2) * xSpacing,
        (j - yCount / 2) * ySpacing,
        0
      );

      // Where the particles come from
      particleSystem.emitter = emitter;

      // Colors of all particles
      particleSystem.color1 = new Color4(1, 0, 0, 1);
      particleSystem.color2 = new Color4(0, 1, 0, 1);

      // Size of each particle (random between...
      particleSystem.minSize = 0.1;
      particleSystem.maxSize = 0.5;

      // Life time of each particle (random between...
      particleSystem.minLifeTime = 0.3;
      particleSystem.maxLifeTime = 1.5;

      // Emission rate
      particleSystem.emitRate = 1000;

      // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
      particleSystem.blendMode = ParticleSystem.BLENDMODE_STANDARD;

      // Set the gravity of all particles
      particleSystem.gravity = new Vector3(0, -9.81, 0);

      // Direction of each particle after it has been emitted
      particleSystem.direction1 = new Vector3(-1, -1, -1);
      particleSystem.direction2 = new Vector3(1, 1, 1);

      // Angular speed, in radians
      particleSystem.minAngularSpeed = 0;
      particleSystem.maxAngularSpeed = Math.PI;

      // Speed
      particleSystem.minEmitPower = 1;
      particleSystem.maxEmitPower = 3;

      // Start the particle system
      particleSystem.start();
    }
  }

  return scene;
};

// Call the createScene function
const scene = createScene();

// 渲染循环
engine.runRenderLoop(() => {
  scene.render();
});

// 响应窗口大小变化
window.addEventListener("resize", () => {
  engine.resize();
});
