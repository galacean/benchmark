/**
 * @title Collider
 * @category Benchmark
 */

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { AmmoPhysics } from "three/examples/jsm/physics/AmmoPhysics.js";
import Stats from "three/examples/jsm/libs/stats.module";

const scriptPromise = new Promise((resolve, reject) => {
  const script = document.createElement("script");
  document.body.appendChild(script);
  script.async = true;
  script.onload = resolve;
  script.onerror = reject;
  script.src = "./public/ammo.wasm.js";
});

scriptPromise.then(() => {
  let camera, scene, renderer, stats;
  let physics, position;

  init();

  async function init() {
    physics = await AmmoPhysics();
    position = new THREE.Vector3();

    //
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(-1, 1.5, 2);
    camera.lookAt(0, 0, 0);

    scene = new THREE.Scene();
    scene.background = new THREE.Color();
    var ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.color.set(new THREE.Color(1, 1, 1));
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight();
    dirLight.position.set(-0.3, 1, 0.4);
    dirLight.castShadow = false;
    scene.add(dirLight);

    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(30, 1, 30),
      new THREE.MeshStandardMaterial({ color: 0x374a4f })
    );
    floor.position.y = -0.5;
    floor.receiveShadow = false;
    scene.add(floor);
    physics.addMesh(floor);

    // Boxes
    const geometryBox = new THREE.BoxGeometry(0.075, 0.075, 0.075);

    var boxCount = 0;
    setInterval(() => {
      if (boxCount > 1000) return;

      addBox(
        new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() * 2 + 2.5,
          Math.random() - 0.5
        )
      );
      boxCount++;
    }, 16);

    function addBox(position) {
      let boxes = new THREE.Mesh(
        geometryBox,
        new THREE.MeshStandardMaterial({ color: 0xffffff * Math.random() })
      );
      boxes.castShadow = false;
      boxes.receiveShadow = false;
      scene.add(boxes);

      boxes.position.set(position.x, position.y, position.z);
      physics.addMesh(boxes, 1);
    }
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");
    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;

    renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.shadowMap.enabled = false;

    stats = new Stats();
    document.body.appendChild(stats.dom);

    //
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.y = 0.5;
    controls.update();

    animate();
  }

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);

    stats.update();
  }
});
