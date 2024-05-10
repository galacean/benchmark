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
  MeshRenderer,
  Vector2,
  Vector3,
  WebGLEngine,
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit";

// Create engine object
WebGLEngine.create({ canvas: "canvas" }).then((engine) => {
  engine.canvas.resizeByClientSize();

  // Create root entity and get scene
  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  scene.ambientLight.diffuseSolidColor.set(1, 1, 1, 1);
  scene.ambientLight.diffuseIntensity = 0;

  // Create camera.
  const cameraEntity = rootEntity.createChild("Camera");
  // cameraEntity.addComponent(OrbitControl);
  cameraEntity.transform.setPosition(-65 * 1.5, 65.8 * 1.5, 85 * 1.5);
  const camera = cameraEntity.addComponent(Camera);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  camera.farClipPlane = 1000;

  const lightEntity = scene.createRootEntity("light");
  const directLight = lightEntity.addComponent(DirectLight);
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
      model.transform.setScale(0.005, 0.005, 0.005);

      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          const modelClone = model.clone();
          rootEntity.addChild(modelClone);

          const { transform } = modelClone;
          transform.position.x = -24 * 2 + i * 6;
          transform.position.z = -24 * 1.5 + j * 6;

          modelClone.getComponent(Animator).play(glTF.animations[1].name);
        }
      }

      console.timeEnd("load");
    });

  // Run engine
  engine.run();
});
