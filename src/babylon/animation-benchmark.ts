/**
 * @title Animation
 * @category Benchmark
 */

import {
  Engine,
  Scene,
  Vector3,
  SceneLoader,
  AnimationGroup,
  DirectionalLight,
  UniversalCamera,
} from "@babylonjs/core";
import "@babylonjs/loaders";

// ... YOUR SCENE CREATION

// 创建画布元素
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
document.body.appendChild(canvas);

// 初始化引擎
const engine = new Engine(canvas, true);

canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;

// 创建场景函数
const createScene = (): Scene => {
  const scene = new Scene(engine);
  const camera = new UniversalCamera(
    "UniversalCamera",
    new Vector3(-6.5 * 1.5, 6.58 * 1.5, 8.5 * 1.5),
    scene
  );

  // Targets the camera to a particular position. In this case the scene origin
  camera.setTarget(Vector3.Zero());

  const light2 = new DirectionalLight(
    "dir01",
    new Vector3(0, -0.5, -1.0),
    scene
  );
  light2.position = new Vector3(0, 5, 5);

  // 加载模型
  SceneLoader.ImportMesh(
    "",
    "https://mdn.alipayobjects.com/rms/afts/file/A*DVfMRKjm6bMAAAAAAAAAAAAAARQnAQ/",
    "HVGirl.glb",
    scene,
    (meshes) => {
      const hero = meshes[0];
      hero.scaling.scaleInPlace(0.05);
      const sambaAnim = scene.getAnimationGroupByName(
        "Samba"
      ) as AnimationGroup;
      sambaAnim.start(true, 1.0, sambaAnim.from, sambaAnim.to, false);

      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          const newHero = hero.clone("j", hero.parent)!;
          newHero.position.x = -2.4 * 1.8 + i * 0.6;
          newHero.position.z = -2.4 * 2 + j * 0.6;
        }
      }
      hero.isVisible = false;
    }
  );

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
