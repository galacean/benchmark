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
} from '@galacean/engine';
import { OrbitControl } from "@galacean/engine-toolkit";

function segmentsValue(triangles: number) {
  return Math.floor(Math.sqrt(triangles / 2));
}

WebGLEngine.create({canvas: "canvas"}).then((engine) => {
  engine.canvas.resizeByClientSize();

  const scene = engine.sceneManager.activeScene;

  // Create camera entity.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 0, 10);
  cameraEntity.addComponent(Camera);
  cameraEntity.addComponent(OrbitControl);

  engine.resourceManager.load(
    {
      url: "https://mdn.alipayobjects.com/oasis_be/afts/img/A*y-7ESpF4XNUAAAAAAAAAAAAADkp5AQ/original/earth.jpg",
      type: AssetType.Texture2D
    }
  ).then((texture) => {
    const modelEntity = scene.createRootEntity("Model");

    const mr = modelEntity.addComponent(MeshRenderer);
    mr.mesh = PrimitiveMesh.createSphere(engine, 1, segmentsValue(4000000), true);
    const mat = new UnlitMaterial(engine);
    mr.setMaterial(mat);
    mat.baseTexture = texture as Texture2D;
  });

  engine.run();
});
