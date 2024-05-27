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
  const scene = engine.sceneManager.activeScene;
  const root = scene.createRootEntity("root");

  // Add camera.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 0, 10);
  const camera = cameraEntity.addComponent(Camera);
  camera.enableFrustumCulling = false;
  cameraEntity.addComponent(Stats);
  cameraEntity.addComponent(OrbitControl);

  const light = scene.createRootEntity("Light");
  light.transform.setPosition(0, 3, 0);
  light.transform.setRotation(-45, -45, 0);
  light.addComponent(DirectLight);

  engine.resourceManager
    .load([
      {
        url: "https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",
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
      const transform = popCat.transform;
      transform.setPosition(0, 0, 0);
      transform.scale.scale(0.01);

      // Replace material to UnlitMaterial.
      const meshRenderers = [];
      popCat.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
      meshRenderers.forEach((mr) => {
        mr.setMaterial(unlitMat);
      });

      const border = 7.5;
      function instantiateModel(instantiateCount) {
        let childs = root.children.length;
        if (childs < instantiateCount) {
          for (; childs < instantiateCount; ++childs) {
            const entity = popCat.clone();
            root.addChild(entity);
            const x = Math.random() * border - border / 2;
            const z = Math.random() * border - border / 2;
            const transform = entity.transform;
            transform.setPosition(x, 0, -z);
            transform.setRotation(-90, Math.random() * 360, 0);
          }
        } else {
          for (; childs > instantiateCount; childs--) {
            root.children[childs-1].destroy();
          }
        }
      }

      const params = {
        instantiated: 0
      };
      const gui = new dat.GUI();
      gui.add(params, "instantiated", 0, 500).onChange(instantiateModel);
    });

  engine.run();
});
