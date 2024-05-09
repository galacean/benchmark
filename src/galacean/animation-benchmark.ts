/**
 * @title Animation
 * @category Benchmark
 */

import {
  Animator,
  AssetType,
  Camera,
  GLTFResource,
  PBRMaterial,
  Texture2D,
  WebGLEngine,
} from "@galacean/engine";
import { Stats } from "@galacean/engine-toolkit";

// Create engine object
WebGLEngine.create({ canvas: "canvas" }).then((engine) => {
  engine.canvas.resizeByClientSize();

  // Create root entity and get scene
  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();
  scene.ambientLight.diffuseSolidColor.set(1, 1, 1, 1);

  // Create camera.
  const cameraEntity = rootEntity.createChild("Camera");
  cameraEntity.transform.setPosition(0, 5, 20);
  cameraEntity.addComponent(Camera);
  cameraEntity.addComponent(Stats);

  // Load resources and add models.
  engine.resourceManager
    .load([
      {
        url: "https://gw.alipayobjects.com/os/loanprod/bf055064-3eec-4d40-bce0-ddf11dfbb88a/5d78db60f211d21a43834e23/4f5e6bb277dd2fab8e2097d7a418c5bc.gltf",
        // url: "https://gw.alipayobjects.com/os/bmw-prod/5e3c1e4e-496e-45f8-8e05-f89f2bd5e4a4.glb",
        type: AssetType.GLTF,
      },
      {
        url: "https://gw.alipayobjects.com/mdn/rms_7c464e/afts/img/A*OStMT63k5o8AAAAAAAAAAAAAARQnAQ",
        type: AssetType.Texture2D,
      },
    ])
    .then((resources: Object[]) => {
      const glTF = <GLTFResource>resources[0];
      const baseTexture = <Texture2D>resources[1];
      const model = glTF.defaultSceneRoot;

      glTF.materials.forEach((material: PBRMaterial) => {
        material.baseTexture = baseTexture;
        material.baseColor.set(1, 1, 1, 1);
      });

      for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 18; j++) {
          const modelClone = model.clone();
          rootEntity.addChild(modelClone);

          const { transform } = modelClone;
          transform.setRotation(0, -90, 0);
          transform.setScale(0.5, 0.5, 0.5);
          transform.setPosition(i * 1.0 - 15.0, j * 1.2, -j * 3.5);

          modelClone.getComponent(Animator).play(glTF.animations[3].name);
        }
      }
    });

  // Run engine
  engine.run();
});
