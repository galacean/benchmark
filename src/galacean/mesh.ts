/**
 * @title Mesh
 * @category Benchmark
 */

import {
  Camera,
  MeshRenderer,
  MeshTopology,
  PrimitiveMesh,
  WebGLEngine,
  AssetType,
  UnlitMaterial,
  Texture2D,
  VertexElement
} from '@galacean/engine';
import {
  Stats,
  OrbitControl
} from "@galacean/engine-toolkit";
import * as dat from "dat.gui";

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
  cameraEntity.addComponent(Stats);
  cameraEntity.addComponent(OrbitControl);

  engine.resourceManager.load(
    {
      url: "https://mdn.alipayobjects.com/oasis_be/afts/img/A*y-7ESpF4XNUAAAAAAAAAAAAADkp5AQ/original/earth.jpg",
      type: AssetType.Texture2D
    }
  ).then((texture) => {
    const modelEntity = scene.createRootEntity("Model");

    const mr = modelEntity.addComponent(MeshRenderer);
    mr.mesh = PrimitiveMesh.createSphere(engine, 1, segmentsValue(8), true);
    const mat = new UnlitMaterial(engine);
    mr.setMaterial(mat);
    mat.baseTexture = texture as Texture2D;

    const params = {
      Tris1e2: function () {
        mr.mesh = PrimitiveMesh.createSphere(engine, 1, segmentsValue(100), false);
      },
      Tris1e3: function () {
        mr.mesh = PrimitiveMesh.createSphere(engine, 1, segmentsValue(1e3), false);
      },
      Tris1e4: function () {
        mr.mesh = PrimitiveMesh.createSphere(engine, 1, segmentsValue(1e4), false);
      },
      Tris1e7: function () {
        mr.mesh = PrimitiveMesh.createSphere(engine, 1, segmentsValue(1e7), false);
      },
      Tris2e7: function () {
        mr.mesh = PrimitiveMesh.createSphere(engine, 1, segmentsValue(2e7), false);
      },
      topology: MeshTopology.Triangles,
    };

    const gui = new dat.GUI();
    gui.add(params, "Tris1e2").name("100面");
    gui.add(params, "Tris1e3").name("1000面");
    gui.add(params, "Tris1e4").name("10,000面");
    gui.add(params, "Tris1e7").name("10,000,000面");
    gui.add(params, "Tris2e7").name("20,000,000面");
  });

  engine.run();
});
