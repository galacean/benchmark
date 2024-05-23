/**
 * @title Text
 * @category Benchmark
 */

import * as THREE from "three";
import SpriteText from "three-spritetext";

const scene = new THREE.Scene();

// 创建正交相机
const width = window.innerWidth;
const height = window.innerHeight;
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
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
});
renderer.setSize(width, height);

const col = 22;
const row = 90;
const offsetX = 0.043;
const offsetY = 0.025;
// 中心点所在行列
const centerX = col * 0.5;
const centerY = row * 0.5;
const maps = [];
for (let i = 0; i < row; ++i) {
  for (let j = 0; j < col; ++j) {
    const text = new SpriteText("hello");
    text.scale.set(0.05, 0.05, 0.05);
    text.position.set((j - centerX) * offsetX, (i - centerY) * offsetY, 0);
    const map = text.material.map;
    map.center.set(0.5, 0.5);
    scene.add(text);
    maps.push(map);
  }
}

let rotationAngle = 0;
const speed = Math.PI / 360;
function updateSpriteRotation() {
  rotationAngle += speed;
  for (let i = 0, l = maps.length; i < l; ++i) {
    maps[i].rotation = rotationAngle;
  }
}

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  updateSpriteRotation();
  renderer.render(scene, camera);
}
animate();
