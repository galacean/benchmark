/**
 * @title Animation
 * @category Benchmark
 */

import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(6.5 * 1.5, 6.58 * 1.5, 8.5 * 1.5);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const scene = new THREE.Scene();

var ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.color.set(new THREE.Color(1, 1, 1));
scene.add(ambientLight);

let mixers = [];
const loader = new GLTFLoader();
console.time("load");
loader.load(
  "https://mdn.alipayobjects.com/rms/afts/file/A*DVfMRKjm6bMAAAAAAAAAAAAAARQnAQ/HVGirl.glb",
  function (glTF) {
    const model = glTF.scene;

    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        const cloneModel = clone(model);
        cloneModel.position.x = -2.4 * 1.8 + i * 0.6;
        cloneModel.position.z = -2.4 * 2 + j * 0.6;
        cloneModel.scale.set(0.05, 0.05, 0.05);

        scene.add(cloneModel);

        const mixer = new THREE.AnimationMixer(cloneModel);
        mixers.push(mixer);
        const animationAction = mixer.clipAction(glTF.animations[1]);
        animationAction.play();
      }
    }

    console.timeEnd("load");
  },
  undefined,
  function (error) {
    console.error(error);
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
  for (let i = 0; i < mixers.length; i++) {
    mixers[i].update(delta);
  }
  renderer.render(scene, camera);
  stats.update();
}
