/**
 * @title Point Light
 * @category Light
 */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

// init
const scene = new THREE.Scene();

// 初始化相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 40);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// 初始化渲染器
const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});

const controls = new OrbitControls(camera, renderer.domElement);

// 创建平面
const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 1);
const planeMaterial = new THREE.MeshStandardMaterial();
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// 创建点光源
const lightCount = 10;
for (let i = 0; i < lightCount; i++) {
  const light = new THREE.PointLight();
  light.position.set(random(-5, 5), random(1, 4), random(-5, 5));
  light.distance = 5;
  light.decay = 0.1;
  light.color.setRGB(random(0, 1), random(0, 1), random(0, 1));
  scene.add(light);

  const lightGeometry = new THREE.SphereGeometry(0.3, 32, 32);
  const lightMaterial = new THREE.MeshStandardMaterial({ emissive: 0xffffff });
  const lightMesh = new THREE.Mesh(lightGeometry, lightMaterial);
  lightMesh.position.copy(light.position);
  scene.add(lightMesh);
}

// 加载模型
const loader = new GLTFLoader();
loader.load(
  "https://mdn.alipayobjects.com/oasis_be/afts/file/A*nceKQadLab8AAAAAAAAAAAAADkp5AQ/DamagedHelmet.glb",
  (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    model.position.y = 1;
  }
);

// animation
function animation(time) {
  renderer.render(scene, camera);
  requestAnimationFrame(animation);
}
requestAnimationFrame(animation);
