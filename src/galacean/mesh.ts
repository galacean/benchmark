/**
 * @title Mesh
 * @category Benchmark
 */

import {
  Camera,
  MeshRenderer,
  PrimitiveMesh,
  WebGLEngine,
  AssetType,
  UnlitMaterial,
  Texture2D,
  GLTFResource,
} from '@galacean/engine';
import { OrbitControl, Stats } from "@galacean/engine-toolkit";
import * as dat from "dat.gui";

WebGLEngine.create({canvas: "canvas"}).then((engine) => {
  engine.canvas.resizeByClientSize();

  const scene = engine.sceneManager.activeScene;

  // Create camera entity.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 0, 10);
  const camera = cameraEntity.addComponent(Camera);
  camera.enableFrustumCulling = false;
  cameraEntity.addComponent(Stats);
  cameraEntity.addComponent(OrbitControl);

  const root = scene.createRootEntity("root");

  function createModel(url) {
    if (root.children.length > 0) {
      const children = root.children;
      for (let i = 0, count = children.length; i < count; i++) {
        children[i].destroy();
      }
    }
    engine.resourceManager.load(url).then((resource) => {
      const gltf = <GLTFResource>resource;
      const model = gltf.instantiateSceneRoot();
      model.transform.scale.scale(0.3);
      root.addChild(model);
    });
  }

  const params = {
    model: "Base"
  };
  const modelURL = {
    "Low": "https://mdn.alipayobjects.com/oasis_be/afts/file/A*m9BeQLj1NCEAAAAAAAAAAAAADkp5AQ/popcat_combine_low.glb",
    "Base": "https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",
    "High": "https://mdn.alipayobjects.com/oasis_be/afts/file/A*r7NhSKXOH6gAAAAAAAAAAAAADkp5AQ/popcat_combine_high2.glb"
  }
  const gui = new dat.GUI();
  gui.add(params, "model", Object.keys(modelURL)).onChange(value => {
    createModel(modelURL[value]);
  });

  createModel(modelURL[params.model]);

  engine.run();
});
