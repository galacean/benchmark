/**
 * @title Sprite
 * @category Benchmark
 */

import {
  Sprite,
  SpriteManager,
  Vector3,
  Engine,
  Scene,
  UniversalCamera,
} from "@babylonjs/core";

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
// 创建精灵纹理
var spriteManager = new SpriteManager(
  "spriteManager",
  "https://mdn.alipayobjects.com/huamei_w6ifet/afts/img/A*YwyMRq8_O-4AAAAAAAAAAAAADjCHAQ/original",
  col * row,
  { width: 407, height: 401 },
  scene
);

const offsetX = 3.2;
const offsetY = 2.5;
// 中心点所在行列
const centerX = col * 0.5;
const centerY = row * 0.5;
const sprites = [];
for (let i = 0; i < row; ++i) {
  for (let j = 0; j < col; ++j) {
    var sprite = new Sprite(`sprite_${i}_${j}`, spriteManager);
    sprite.position.x = (j - centerX) * offsetX;
    sprite.position.y = (i - centerY) * offsetY;
    sprite.size = 8; // 设置精灵大小
    sprites.push(sprite);
  }
}

// 帧更新函数
const speed = Math.PI / 360;
scene.onBeforeRenderObservable.add(function () {
  // 遍历所有精灵，每帧更新它们的旋转角度
  sprites.forEach(function (sprite) {
    sprite.angle += speed; // 每帧旋转一个角度
  });
});

// 渲染循环
engine.runRenderLoop(function () {
  scene.render();
});
