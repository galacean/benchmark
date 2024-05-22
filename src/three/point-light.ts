/**
 * @title Point Light
 * @category Light
 */
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

// init
const scene = new THREE.Scene();

// 初始化相机
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const scale = 2.5;
camera.position.set(6.5 * scale, 6.58 * scale, 8.5 * scale);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// 初始化渲染器
const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});

const controls = new OrbitControls(camera, renderer.domElement);

// 创建点光源
const lightCount = 10;
for (let i = 0; i < lightCount; i++) {
  const light = new THREE.PointLight();
  light.position.set(-8 + i * 2, 5, 0);
  light.distance = 20;
  light.decay = 0.1;
  light.color.setRGB(
    Math.pow(0.5, 2.2),
    Math.pow(0.2, 2.2),
    Math.pow(0.7, 2.2)
  );
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
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const cloneModel = clone(model);
        cloneModel.position.x = -8 + i * 2;
        cloneModel.position.y = 2;
        cloneModel.position.z = -10 + j * 2;

        scene.add(cloneModel);
      }
    }
  }
);

// animation
function animation(time) {
  renderer.render(scene, camera);
  requestAnimationFrame(animation);
}
requestAnimationFrame(animation);
