/**
 * @title FlipY
 * @category Basic
 */
import * as BABYLON from "babylonjs";

// 获取 canvas 元素
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// 创建渲染器
const engine = new BABYLON.Engine(canvas, true);

// 创建场景
const scene = new BABYLON.Scene(engine);

// 创建相机
const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 5, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

// 创建平面
const plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 2, height: 2 }, scene);

// 创建材质
const material = new BABYLON.StandardMaterial("material", scene);
const texture = new BABYLON.Texture(
  "https://mdn.alipayobjects.com/huamei_dmxymu/afts/img/A*z81hQ5sRQ0kAAAAAAAAAAAAADuuHAQ/original",
  scene
);
material.emissiveTexture = texture;
console.log(texture.invertY)

// 应用材质到平面
plane.material = material;

// 渲染循环
engine.runRenderLoop(() => {
  scene.render();
});
