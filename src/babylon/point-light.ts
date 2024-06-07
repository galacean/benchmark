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
  Vector3,
  PBRMaterial,
  Mesh,
  Light,
  UniversalCamera,
} from "@babylonjs/core";
import "@babylonjs/loaders";
// import { PBRMaterial } from "babylonjs";

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
  const scale = 2.5;
  const camera = new UniversalCamera(
    "UniversalCamera",
    new Vector3(-6.5 * scale, 6.58 * scale, 8.5 * scale),
    scene
  );
  camera.fov = (45 / 180) * Math.PI;

  // Targets the camera to a particular position. In this case the scene origin
  camera.setTarget(Vector3.Zero());

  // This attaches the camera to the canvas
  // camera.attachControl(canvas, true);

  // point light
  const lightCount = 10;
  for (let i = 0; i < lightCount; i++) {
    const light = new PointLight(
      "light",
      new Vector3(-10 + i * 2, 5, 0),
      scene
    );
    light.range = 20;
    light.falloffType = Light.FALLOFF_STANDARD;
    light.diffuse.set(
      Math.pow(0.5, 2.2),
      Math.pow(0.2, 2.2),
      Math.pow(0.7, 2.2)
    );

    const lightRenderer = MeshBuilder.CreateSphere(
      "sphere",
      { segments: 32, diameter: 0.6 },
      scene
    );
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
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const helmet = <any>container.instantiateModelsToScene(
          undefined,
          false,
          {
            doNotInstantiate: true,
          }
        );
        const node = helmet.rootNodes[0] as Mesh;
        const meshes = node.getChildMeshes();
        // @ts-ignore
        (meshes[0].material as PBRMaterial).maxSimultaneousLights = 20;
        (meshes[0].material as PBRMaterial).usePhysicalLightFalloff = false;
        node.position.x = -10 + i * 2;
        node.position.y = 2;
        node.position.z = -10 + j * 2;
      }
    }
    // container.meshes[0].position.y = 1;
    // planeMaterial.maxSimultaneousLights = lightCount;
    // container.materials[0].maxSimultaneousLights = lightCount;
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
