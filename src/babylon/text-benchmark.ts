/**
 * @title Text
 * @category Benchmark
 */

import { Vector3, Engine, Scene, UniversalCamera } from "@babylonjs/core";
import { AdvancedDynamicTexture, TextBlock } from "@babylonjs/gui";

// 创建画布元素
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
document.body.appendChild(canvas);

// 初始化引擎
const engine = new Engine(canvas, true);

canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;
const scene = new Scene(engine);

var camera = new UniversalCamera(
  "UniversalCamera",
  new Vector3(0, 0, -180),
  scene
);
camera.setTarget(Vector3.Zero());

const col = 22;
const row = 90;
const offsetX = 37;
const offsetY = 20;
// 中心点所在行列
const centerX = col * 0.5;
const centerY = row * 0.5;
const texts = [];
const advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI", false, scene);
for (let i = 0; i < row; ++i) {
  for (let j = 0; j < col; ++j) {
    const textBlock = new TextBlock();
    textBlock.text = "hello";
    textBlock.color = "white";
    textBlock.fontSize = 36;
    advancedTexture.addControl(textBlock);
    textBlock.scaleX = 0.6;
    textBlock.scaleY = 0.6;
    textBlock.left = `${(j - centerX) * offsetX + 20}px`;
    textBlock.top = `${(i - centerY) * offsetY}px`;
    texts.push(textBlock);
  }
}

// 帧更新函数
const speed = Math.PI / 360;
scene.onBeforeRenderObservable.add(function () {
  // 遍历所有精灵，每帧更新它们的旋转角度
  texts.forEach(function (text) {
    text.rotation += speed; // 每帧旋转一个角度
  });
});

// 渲染循环
engine.runRenderLoop(function () {
  scene.render();
});
