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
import { OrbitControl, Stats } from "@galacean/engine-toolkit";
import * as dat from 'dat.gui';

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const activeScene = engine.sceneManager.activeScene;
  const root = activeScene.createRootEntity("root");

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

      const startPosX = -3.5;
      const startPosY = -0.0375;
      const popCat = gltf.instantiateSceneRoot();
      popCat.transform.setPosition(startPosX, startPosY, 0);
      popCat.transform.setScale(0.075, 0.075, 0.075);

      // Replace material to UnlitMaterial.
      const meshRenderers = [];
      popCat.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
      meshRenderers.forEach((mr) => {
        mr.setMaterial(unlitMat);
      });

      const maxInstantiated = 200;
      const perLineInstantiated = 5;
      function instantiateModel(value) {
        let childs = root.children.length;
        if (childs < value) {
          for (; childs < value; childs++) {
            const entity = popCat.clone();
            root.addChild(entity);
            const x = childs % perLineInstantiated;
            const y = Math.floor(childs / perLineInstantiated);
            entity.transform.setPosition(startPosX + x * 1.5, startPosY, -y);
          }
        } else if (childs > value) {
          for (; childs > value; childs--) {
            root.children[childs-1].destroy();
          }
        }
      }

      const params = {
        instantiated: 0
      }
      const gui = new dat.GUI();
      gui.add(params, "instantiated", 0, maxInstantiated).onChange(instantiateModel);
    });

  engine.run();
});
