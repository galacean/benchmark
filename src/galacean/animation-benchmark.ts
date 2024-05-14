/**
 * @title Animation
 * @category Benchmark
 */

import {
  Animator,
  AssetType,
  Camera,
  DirectLight,
  GLTFResource,
  Vector3,
  WebGLEngine,
} from "@galacean/engine";

// Create engine object
WebGLEngine.create({
  canvas: "canvas",
  graphicDeviceOptions: { powerPreference: "high-performance" },
}).then((engine) => {
  engine.canvas.resizeByClientSize();

  // Create root entity and get scene
  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  scene.ambientLight.diffuseSolidColor.set(1, 1, 1, 1);
  scene.ambientLight.diffuseIntensity = 0;

  // Create camera.
  const cameraEntity = rootEntity.createChild("Camera");
  // cameraEntity.addComponent(OrbitControl);
  cameraEntity.transform.setPosition(6.5 * 1.5, 6.58 * 1.5, 8.5 * 1.5);
  const camera = cameraEntity.addComponent(Camera);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  camera.farClipPlane = 1000;

  const lightEntity = scene.createRootEntity("light");
  const directLight = lightEntity.addComponent(DirectLight);
  directLight.intensity = 0.6;
  directLight.direction.set(0, -0.5, -1.0);

  console.time("load");
  // Load resources and add models.
  engine.resourceManager
    .load<GLTFResource>({
      url: "https://mdn.alipayobjects.com/rms/afts/file/A*DVfMRKjm6bMAAAAAAAAAAAAAARQnAQ/HVGirl.glb",
      type: AssetType.GLTF,
    })
    .then((glTF) => {
      const model = glTF.instantiateSceneRoot();
      model.transform.setScale(0.0005, 0.0005, 0.0005);

      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          const modelClone = model.clone();
          rootEntity.addChild(modelClone);

          const { transform } = modelClone;
          transform.position.x = -2.4 * 1.8 + i * 0.6;
          transform.position.z = -2.4 * 2 + j * 0.6;

          modelClone.getComponent(Animator).play(glTF.animations[1].name);
        }
      }

      console.timeEnd("load");
    });

  // Run engine
  engine.run();
});
