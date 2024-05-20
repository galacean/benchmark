/**
 * @title Particle
 * @category Benchmark
 */

import * as THREE from "three";
import ParticleSystem, {
  Body,
  Emitter,
  Life,
  Position,
  RadialVelocity,
  Rate,
  Span,
  SpriteRenderer,
  Vector3D,
  SphereZone,
  Mass,
  Scale,
  Gravity,
  Color,
  RandomDrift,
} from "three-nebula";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);

// Load texture for particles

const loader = new THREE.TextureLoader();
console.time("load");
loader.load(
  "https://playground.babylonjs.com/textures/flare.png",
  (texture) => {
    const material = new THREE.SpriteMaterial({
      map: texture,
      blending: THREE.AdditiveBlending,
    });
    console.timeEnd("load");
    // Create a particle system
    const createEmitter = (position) => {
      const emitter = new Emitter();
      return emitter
        .setRate(new Rate(new Span(10, 15), new Span(0.05, 0.1)))
        .addInitializers([
          new Body(new THREE.Sprite(material)),
          new Mass(1),
          new Life(0.3, 1.5),
          new Position(new SphereZone(1)),
          new RadialVelocity(new Span(1, 3), new Vector3D(0, 1, 0), 180),
        ])
        .addBehaviours([
          new Scale(new Span(0.1, 0.5), 0),
          new Gravity(1),
          new Color(new THREE.Color(1, 0, 0), new THREE.Color(0, 1, 0)),
          new RandomDrift(1, 1, 1, 0.05),
        ])
        .setPosition(position)
        .emit();
    };

    const system = new ParticleSystem();

    const xCount = 18;
    const yCount = 12;
    const spacing = 5;

    for (let x = 0; x < xCount; x++) {
      for (let y = 0; y < yCount; y++) {
        const position = new THREE.Vector3(
          (x - xCount / 2) * spacing,
          (y - yCount / 2) * spacing,
          0
        );
        const emitter = createEmitter(position);
        system.addEmitter(emitter);
      }
    }

    system.addRenderer(new SpriteRenderer(scene, THREE));

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      system.update();
      renderer.render(scene, camera);
    };

    animate();
  }
);
