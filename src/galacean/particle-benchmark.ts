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
  Texture2D,
  Vector3,
  WebGLEngine,
} from "@galacean/engine";

// Create engine
WebGLEngine.create({
  canvas: "canvas",
  graphicDeviceOptions: { powerPreference: "high-performance" },
}).then((engine) => {
  Logger.enable();
  engine.canvas.resizeByClientSize();

  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  scene.background.solidColor = new Color(0, 0, 0, 1);

  // Create camera
  const cameraEntity = rootEntity.createChild("camera_entity");
  cameraEntity.transform.position = new Vector3(0, 0, 220);

  const camera = cameraEntity.addComponent(Camera);
  camera.farClipPlane = 500;

  const xCount = 25;
  const yCount = 20;
  const xSpacing = 3;
  const ySpacing = 5;

  engine.resourceManager
    .load({
      url: "https://mdn.alipayobjects.com/huamei_b4l2if/afts/img/A*JPsCSK5LtYkAAAAAAAAAAAAADil6AQ/original",
      type: AssetType.Texture2D,
    })
    .then((texture: Texture2D) => {
      const material = new ParticleMaterial(engine);
      material.baseColor = new Color(1.0, 1.0, 1.0, 1.0);
      material.blendMode = BlendMode.Normal;

      material.baseTexture = texture;

      const fireEntity = createFireParticle(engine, material);
      for (let x = 0; x < xCount; x++) {
        for (let y = 0; y < yCount; y++) {
          const cloneFire = fireEntity.clone();
          cloneFire.transform.setPosition(
            (x - xCount / 2) * xSpacing,
            (y - yCount / 2) * ySpacing,
            0
          );
          rootEntity.addChild(cloneFire);
        }
      }
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
