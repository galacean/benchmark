/**
 * @title Particle
 * @category Benchmark
 */

import {
  Engine,
  Scene,
  Vector3,
  ArcRotateCamera,
  DefaultRenderingPipeline,
  ParticleSystem,
  Color4,
  Texture,
  MeshBuilder,
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
var createScene = function () {
  // This creates a basic Babylon Scene object (non-mesh)
  var scene = new Scene(engine);

  // Camera
  var camera = new ArcRotateCamera(
    "ArcRotateCamera",
    0,
    0,
    50,
    new Vector3(0, 0, 0),
    scene
  );
  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // Set up new rendering pipeline
  const pipeline = new DefaultRenderingPipeline("default", true, scene);
  console.time("load");
  const texture = new Texture(
    "https://playground.babylonjs.com/textures/flare.png",
    scene
  );
  console.timeEnd("load");

  // Fire!
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 18; j++) {
      // Create a particle system
      const particleSystem = new ParticleSystem("particles", 1000, scene);

      // Texture for particles
      particleSystem.particleTexture = texture;

      const emitter = MeshBuilder.CreateSphere("emitter", { diameter: 1 });
      emitter.isVisible = false; // Hide the sphere mesh
      emitter.position = new Vector3(i * 3 - 17.5, 0, j * 4 - 35);

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
      particleSystem.blendMode = ParticleSystem.BLENDMODE_ONEONE;

      // Set the gravity of all particles
      particleSystem.gravity = new Vector3(9.81, 0, 0);

      // Direction of each particle after it has been emitted
      particleSystem.direction1 = new Vector3(-1, 1, -1);
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
