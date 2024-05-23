/**
 * @title Sprite
 * @category Benchmark
 */
import * as THREE from "three";

const scene = new THREE.Scene();

// 创建正交相机
const width = window.innerWidth * window.devicePixelRatio;
const height = window.innerHeight * window.devicePixelRatio;
const aspectRatio = width / height;
const camera = new THREE.OrthographicCamera(
  -aspectRatio,
  aspectRatio,
  1,
  -1,
  0.1,
  1000
);
camera.position.z = 5;

// 创建渲染器，并指定 canvas 元素作为渲染目标
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;
const renderer = new THREE.WebGLRenderer({
  canvas,
});
renderer.setSize(width, height);

// 创建精灵纹理，传入图片的 URL
const spriteMap = new THREE.TextureLoader().load(
  "https://mdn.alipayobjects.com/huamei_w6ifet/afts/img/A*YwyMRq8_O-4AAAAAAAAAAAAADjCHAQ/original"
);
const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap });

const col = 22;
const row = 90;
const offsetX = 0.023;
const offsetY = 0.015;
// 中心点所在行列
const centerX = col * 0.5;
const centerY = row * 0.5;
const sprites = [];
for (let i = 0; i < row; ++i) {
  for (let j = 0; j < col; ++j) {
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(0.05, 0.05, 0.05); // 设置精灵大小
    scene.add(sprite);
    sprite.position.set((j - centerX) * offsetX - 0.2, (i - centerY) * offsetY + 0.5, 0);
    sprites.push(sprite);
  }
}

let rotationAngle = 0;
const map = spriteMaterial.map;
map.center.set(0.5, 0.5);
const speed = Math.PI / 360;
function updateSpriteRotation() {
  rotationAngle += speed;
  for (let i = 0, l = sprites.length; i < l; ++i) {
    map.rotation = rotationAngle;
  }
}

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  updateSpriteRotation();
  renderer.render(scene, camera);
}
animate();
