/**
 * @title Particle
 * @category Benchmark
 */
import {
  AssetType,
  BlendMode,
  Camera,
  Color,
  Engine,
  Entity,
  Logger,
  ParticleCurveMode,
  ParticleGradientMode,
  ParticleMaterial,
  ParticleRenderer,
  SphereShape,
  Vector3,
  WebGLEngine,
} from "@galacean/engine";
import { Stats } from "@galacean/engine-toolkit";

// Create engine
WebGLEngine.create({
  canvas: "canvas",
  graphicDeviceOptions: { powerPreference: "high-performance" },
}).then((engine) => {
  Logger.enable();
  engine.canvas.resizeByClientSize();

  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  scene.background.solidColor = new Color(0.25, 0.25, 0.25, 1);

  // Create camera
  const cameraEntity = rootEntity.createChild("camera_entity");
  cameraEntity.transform.position = new Vector3(0, 1, 130);

  const camera = cameraEntity.addComponent(Camera);
  camera.farClipPlane = 200;
  cameraEntity.addComponent(Stats);
  camera.fieldOfView = 60;

  console.time("load");
  engine.resourceManager
    .load({
      url: "https://playground.babylonjs.com/textures/flare.png",
      type: AssetType.Texture2D,
    })
    .then((texture) => {
      const material = new ParticleMaterial(engine);
      material.baseColor = new Color(1.0, 1.0, 1.0, 1.0);
      material.blendMode = BlendMode.Additive;
      material.baseTexture = texture;

      const fireEntity = createFireParticle(engine, material);
      for (let i = 0; i < 18; i++) {
        for (let j = 0; j < 12; j++) {
          const cloneFire = fireEntity.clone();
          cloneFire.transform.setPosition(i * 15 - 130, j * 10 - 60, 0);
          rootEntity.addChild(cloneFire);
        }
      }

      console.timeEnd("load");
    });

  engine.run();
});

function createFireParticle(
  engine: Engine,
  material: ParticleMaterial
): Entity {
  const particleEntity = new Entity(engine);
  particleEntity.transform.rotate(90, 0, 0);

  const particleRenderer = particleEntity.addComponent(ParticleRenderer);
  particleRenderer.setMaterial(material);

  const generator = particleRenderer.generator;
  const { main, emission } = generator;

  const sphere = new SphereShape();
  sphere.radius = 1;
  emission.shape = sphere;

  main.startColor.mode = ParticleGradientMode.TwoConstants;
  main.startColor.constantMin = new Color(1, 0, 0, 1);
  main.startColor.constantMax = new Color(0, 1, 0, 1);

  main.startSize.mode = ParticleCurveMode.TwoConstants;
  main.startSize.constantMin = 0.1;
  main.startSize.constantMax = 0.5;

  main.startLifetime.mode = ParticleCurveMode.TwoConstants;
  main.startLifetime.constantMin = 0.3;
  main.startLifetime.constantMax = 1.5;

  emission.rateOverTime.constant = 1000;

  main.gravityModifier.mode = ParticleCurveMode.Constant;
  main.gravityModifier.constant = 1;

  main.startRotation3D = true;
  main.startRotationX.constant = 0;
  main.startRotationZ.constant = Math.PI;

  main.startSpeed.mode = ParticleCurveMode.TwoConstants;
  main.startSpeed.constantMin = 1;
  main.startSpeed.constantMax = 3;

  return particleEntity;
}
