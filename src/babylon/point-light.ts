/**
 * @title Point Light
 * @category Light
 */
import {
  ArcRotateCamera,
  Color3,
  Engine,
  MeshBuilder,
  PointLight,
  Scene,
  SceneLoader,
  StandardMaterial,
  Vector3
} from "@babylonjs/core";
import "@babylonjs/loaders";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// 创建画布元素
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
document.body.appendChild(canvas);

// 初始化引擎
const engine = new Engine(canvas, true);

canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;

const createScene = function () {
  // This creates a basic Babylon Scene object (non-mesh)
  const scene = new Scene(engine);

  // This creates and positions a free camera (non-mesh)
  const camera = new ArcRotateCamera("camera1", Math.PI / 2, Math.PI / 2 - 0.6, 40, new Vector3(0, 0, 0), scene);

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // Plane
  const plane = MeshBuilder.CreatePlane("plane", { width: 1000, height: 1000 }, scene);
  plane.rotation.x = Math.PI / 2;
  const planeMaterial = new StandardMaterial("material", scene);
  plane.material = planeMaterial;

  // point light
  const lightCount = 10;
  for (let i = 0; i < lightCount; i++) {
    const light = new PointLight("light", new Vector3(random(-5, 5), random(1, 4), random(-5, 5)), scene);
    light.range = 5;
    light.diffuse.set(random(0, 1), random(0, 1), random(0, 1));

    const lightRenderer = MeshBuilder.CreateSphere("sphere", { segments: 32, diameter: 0.6 }, scene);
    lightRenderer.position = light.position;
    const material = new StandardMaterial("material", scene);
    material.disableLighting = true;
    material.emissiveColor = new Color3(1, 1, 1);
    lightRenderer.material = material;
  }

  SceneLoader.LoadAssetContainerAsync(
    "https://mdn.alipayobjects.com/oasis_be/afts/file/A*nceKQadLab8AAAAAAAAAAAAADkp5AQ/DamagedHelmet.glb",
    "",
    scene
  ).then((container) => {
    container.addAllToScene();
    container.meshes[0].position.y = 1;
    planeMaterial.maxSimultaneousLights = lightCount;
    container.materials[0].maxSimultaneousLights = lightCount;
  });

  return scene;
};

// 调用创建场景函数
const scene = createScene();

// 渲染循环
engine.runRenderLoop(() => {
  scene.render();
});

// 响应窗口大小变化
window.addEventListener("resize", () => {
  engine.resize();
});
