/**
 * @title Point Light
 * @category Light
 */
import {
  Camera,
  GLTFResource,
  Logger,
  MeshRenderer,
  PBRMaterial,
  PointLight,
  PrimitiveMesh,
  UnlitMaterial,
  WebGLEngine
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit";
Logger.enable();

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

WebGLEngine.create({ canvas: "canvas", graphicDeviceOptions: { powerPreference: "high-performance" } }).then(
  (engine) => {
    engine.canvas.resizeByClientSize();

    const rootEntity = engine.sceneManager.activeScene.createRootEntity();

    const cameraEntity = rootEntity.createChild("camera");
    cameraEntity.addComponent(Camera);
    cameraEntity.transform.setPosition(0, 6, 40);
    cameraEntity.addComponent(OrbitControl);

    const planeEntity = rootEntity.createChild();
    const planeRenderer = planeEntity.addComponent(MeshRenderer);
    const planeMat = new PBRMaterial(engine);
    planeRenderer.mesh = PrimitiveMesh.createPlane(engine, 1000, 1000);
    planeRenderer.setMaterial(planeMat);

    const lightCount = 10;
    for (let i = 0; i < lightCount; i++) {
      const lightEntity = rootEntity.createChild("light" + i);
      lightEntity.transform.setPosition(random(-5, 5), random(1, 4), random(-5, 5));
      const light = lightEntity.addComponent(PointLight);
      light.distance = 5;
      light.color.set(random(0, 1), random(0, 1), random(0, 1), 1);

      const lightRenderer = lightEntity.addComponent(MeshRenderer);
      lightRenderer.mesh = PrimitiveMesh.createSphere(engine, 0.3, 32);
      lightRenderer.setMaterial(new UnlitMaterial(engine));
    }

    engine.resourceManager
      .load<GLTFResource>(
        "https://mdn.alipayobjects.com/oasis_be/afts/file/A*nceKQadLab8AAAAAAAAAAAAADkp5AQ/DamagedHelmet.glb"
      )
      .then((gltf) => {
        const entity = rootEntity.createChild("");
        const defaultSceneRoot = gltf.instantiateSceneRoot();
        defaultSceneRoot.transform.setPosition(0, 1, 0);
        entity.addChild(defaultSceneRoot);
      }),
      engine.run();
  }
);
