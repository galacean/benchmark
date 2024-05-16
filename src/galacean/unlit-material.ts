/**
 * @title UnlitMaterial
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  DirectLight,
  GLTFResource,
  MeshRenderer,
  Texture2D,
  UnlitMaterial,
  WebGLEngine
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit";

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const activeScene = engine.sceneManager.activeScene;

  // Add camera.
  const cameraEntity = activeScene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 0, 10);
  cameraEntity.addComponent(Camera);
  cameraEntity.addComponent(OrbitControl);

  const light = activeScene.createRootEntity("Light");
  light.transform.setPosition(0, 3, 0);
  light.transform.setRotation(-45, -45, 0);
  light.addComponent(DirectLight);

  engine.resourceManager
    .load([
      {
        url: "https://mdn.alipayobjects.com/oasis_be/afts/file/A*5yMJTIxb1l4AAAAAAAAAAAAADkp5AQ/popcat_base.glb",
        type: AssetType.GLTF
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",
        type: AssetType.Texture2D
      },
    ])
    .then((resources) => {
      const gltf = <GLTFResource>resources[0];

      const unlitMat = new UnlitMaterial(engine);
      unlitMat.baseTexture = <Texture2D>resources[1];

      const popCat = gltf.instantiateSceneRoot();
      popCat.transform.setPosition(-1.5, -1.5, 0);
      popCat.transform.setScale(0.3, 0.3, 0.3);
      activeScene.addRootEntity(popCat);

      // Replace material to UnlitMaterial.
      const meshRenderers = [];
      popCat.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
      meshRenderers.forEach((mr) => {
        mr.setMaterial(unlitMat);
      });
    });

  engine.run();
});
