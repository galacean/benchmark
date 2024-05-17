/**
 * @title Collider
 * @category Benchmark
 */

import {
  DirectionalLight,
  Engine,
  Scene,
  HemisphericLight,
  UniversalCamera,
  HavokPlugin,
  MeshBuilder,
  Vector3,
  PhysicsAggregate,
  PBRMaterial,
} from "@babylonjs/core";
import "@babylonjs/loaders";
import { PhysicsShapeType } from "babylonjs";
import HavokPhysics from "https://cdn.babylonjs.com/havok/HavokPhysics_es.js";

// Get the canvas element
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
document.body.appendChild(canvas);
// Generate the BABYLON 3D engine
const engine = new Engine(canvas, true);

canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;

// Create the scene
const createScene = async function () {
  const scene = new Scene(engine);
  const havokInstance = await HavokPhysics();
  const hk = new HavokPlugin(true, havokInstance);

  scene.enablePhysics(new Vector3(0, -9.8, 0), hk);

  const camera = new UniversalCamera(
    "UniversalCamera",
    new Vector3(-1, 1.5, 2),
    scene
  );

  // Targets the camera to a particular position. In this case the scene origin
  camera.setTarget(Vector3.Zero());
  const hemisphericLight = new HemisphericLight("hemisphericLight", new Vector3(0, 1, 0), scene);
  hemisphericLight.intensity = 1;

  const light = new DirectionalLight(
    "dir01",
    new Vector3(0, 0, 0),
    scene
  );
  light.position = new Vector3(-0.3, 1, 0.4);
  light.shadowEnabled = false;
  light.intensity = 1;

  // Create a ground plane
  const ground = MeshBuilder.CreateGround(
    "ground",
    { width: 30, height: 30 },
    scene
  );

  const mtl = new PBRMaterial("mtl", scene);
  mtl.albedoColor.set(
    0.2179807202597362,
    0.2939682161541871,
    0.31177952549087604
  );
  mtl.metallic = 0.0;
  mtl.roughness = 0.0;
  ground.material = mtl;
  ground.position = new Vector3(0, -0.5, 0);
  ground.receiveShadows = false;
  // Apply physics to the ground
  new PhysicsAggregate(
    ground,
    PhysicsShapeType.BOX,
    { mass: 0, restitution: 0 },
    scene
  );
  ground.isPickable = false;

  var boxCount = 0;
  setInterval(() => {
    if (boxCount > 1000) return;

    addBox(
      scene,
      new Vector3(0.075, 0.075, 0.075),
      new Vector3(
        Math.random() - 0.5,
        Math.random() * 2 + 2.5,
        Math.random() - 0.5
      )
    );

    boxCount++
  }, 16);

  return scene;
};

function addBox(scene: Scene, size: Vector3, position: Vector3) {
  const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
  box.position = position;
  box.scaling = size;
  const mtl = new PBRMaterial("mtl", scene);
  mtl.albedoColor.set(Math.random(), Math.random(), Math.random());
  mtl.metallic = 0.0;
  mtl.roughness = 0;
  box.material = mtl;
  box.isPickable = false;
  new PhysicsAggregate(
    box,
    PhysicsShapeType.BOX,
    { mass: 1, restitution: 0 },
    scene
  );
}

// Call the createScene function
  const scene = createScene();
  scene.then((scene) => {
    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
      scene.render();
    });
  });
// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
