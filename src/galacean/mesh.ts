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

  const border = 50;
  function createModel(url, instantiateCount) {
    if (root.children.length > 0) {
      const children = root.children;
      for (let i = children.length - 1; i >= 0; i--) {
        children[i].destroy();
      }
    }
    engine.resourceManager.load(url).then((resource) => {
      const gltf = <GLTFResource>resource;
      const model = gltf.instantiateSceneRoot();
      model.transform.scale.scale(0.03);
      root.addChild(model);
      for (let i = 0, length = instantiateCount - 1; i < length; ++i) {
        const entity = model.clone();
        const x = Math.random() * border - border / 2;
        const z =  Math.random() * border - border / 2;
        const transform = entity.transform;
        transform.setPosition(x, 0, -z);
        transform.setRotation(-90, Math.random() * 360, 0);
        root.addChild(entity);
      }
    });
  }

  const params = {
    model: "Low",
    instantiated: 1
  };
  const modelURL = {
    "Low": "https://mdn.alipayobjects.com/oasis_be/afts/file/A*m9BeQLj1NCEAAAAAAAAAAAAADkp5AQ/popcat_combine_low.glb",
    "Medium": "https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",
    "High": "https://mdn.alipayobjects.com/oasis_be/afts/file/A*r7NhSKXOH6gAAAAAAAAAAAAADkp5AQ/popcat_combine_high2.glb"
  }
  const gui = new dat.GUI();
  gui.add(params, "model", Object.keys(modelURL)).onChange(value => {
    createModel(modelURL[value], 1);
    params.instantiated = 1;
    gui.updateDisplay();
  });
  gui.add(params, "instantiated", 1, 5000, 1).onFinishChange(value => {
    createModel(modelURL[params.model], value);
  });

  createModel(modelURL[params.model], 1);

  engine.run();
});
