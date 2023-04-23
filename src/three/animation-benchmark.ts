/**
 * @title Animation
 * @category Benchmark
 */

import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { SkeletonUtils } from "three/examples/jsm/utils/SkeletonUtils";

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.y = 5;
camera.position.z = 20;

const scene = new THREE.Scene();

var ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.color.set(new THREE.Color(1, 1, 1));
scene.add(ambientLight);

// var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
// directionalLight.intensity = 0.6;
// directionalLight.position.set(0, 0, 1);
// directionalLight.rotateZ(90);
// scene.add(directionalLight);

// 创建一个TextureLoader对象
const textureLoader = new THREE.TextureLoader();

let mixers = [];
textureLoader.load(
  "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*OStMT63k5o8AAAAAAAAAAAAAARQnAQ",
  function (texture) {
    texture.flipY = false;
    const loader = new GLTFLoader();
    loader.load(
      "https://gw.alipayobjects.com/os/loanprod/bf055064-3eec-4d40-bce0-ddf11dfbb88a/5d78db60f211d21a43834e23/4f5e6bb277dd2fab8e2097d7a418c5bc.gltf",
      // "https://gw.alipayobjects.com/os/bmw-prod/5e3c1e4e-496e-45f8-8e05-f89f2bd5e4a4.glb",
      function (glTF) {
        const model = glTF.scene;

        // 遍历场景中的所有对象
        model.traverse(function (child) {
          // 检查对象是否具有材质
          if (child.isMesh) {
            // 遍历材质并修改纹理
            child.material.map = texture;
            child.material.color = new THREE.Color(1, 1, 1);
          }
        });

        for (let i = 0; i < 30; i++) {
          for (let j = 0; j < 18; j++) {
            const cloneModel = SkeletonUtils.clone(model);
            cloneModel.position.set(i * 1.0 - 15.0, j * 1.2, -j * 3.5);
            cloneModel.scale.set(0.5, 0.5, 0.5);

            cloneModel.rotation.set(0, -90, 0);

            scene.add(cloneModel);

            const mixer = new THREE.AnimationMixer(cloneModel);
            mixers.push(mixer);
            const animationAction = mixer.clipAction(glTF.animations[3]);
            animationAction.play();
          }
        }
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }
);

const canvas = <HTMLCanvasElement>document.getElementById("canvas");
canvas.width = canvas.clientWidth * window.devicePixelRatio;
canvas.height = canvas.clientHeight * window.devicePixelRatio;

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setAnimationLoop(animation);

const stats = new Stats();
document.body.appendChild(stats.dom);

const clock = new THREE.Clock();
function animation(time) {
  var delta = clock.getDelta();
  for (let mixer of mixers) {
    mixer.update(delta);
  }
  renderer.render(scene, camera);
  stats.update();
}
