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
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(-1, 1.5, 2);
    camera.lookAt(0, 0.5, 0);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x666666);

    const hemiLight = new THREE.HemisphereLight();
    hemiLight.intensity = 0.3;
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight();
    dirLight.position.set(5, 5, 5);
    dirLight.castShadow = true;
    dirLight.shadow.camera.zoom = 2;
    scene.add(dirLight);

    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(10, 5, 10),
      new THREE.ShadowMaterial({ color: 0x444444 })
    );
    floor.position.y = -2.5;
    floor.receiveShadow = false;
    scene.add(floor);
    physics.addMesh(floor);

    // Boxes
    const geometryBox = new THREE.BoxGeometry(0.075, 0.075, 0.075);

    // for (let i = 0; i < 550; i++) {
    //   let boxes = new THREE.Mesh(
    //     geometryBox,
    //     new THREE.MeshLambertMaterial({ color: 0xffffff * Math.random() })
    //   );
    //   boxes.castShadow = false;
    //   boxes.receiveShadow = false;
    //   scene.add(boxes);

    //   boxes.position.set(
    //     Math.random() - 0.5,
    //     Math.random() * 2,
    //     Math.random() - 0.5
    //   );
    //   physics.addMesh(boxes, 1);
    // }

    var boxCount = 0;
    setInterval(() => {
      if (boxCount > 700) return;

      let boxes = new THREE.Mesh(
        geometryBox,
        new THREE.MeshLambertMaterial({ color: 0xffffff * Math.random() })
      );
      boxes.castShadow = false;
      boxes.receiveShadow = false;
      scene.add(boxes);

      boxes.position.set(
        Math.random() - 0.5,
        Math.random() * 2,
        Math.random() - 0.5
      );
      physics.addMesh(boxes, 1);
      boxCount++;
    }, 16);

    //
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
