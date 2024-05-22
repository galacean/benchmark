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
  WebGLEngine,
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit";
Logger.enable();

WebGLEngine.create({
  canvas: "canvas",
  graphicDeviceOptions: { powerPreference: "high-performance" },
}).then((engine) => {
  engine.canvas.resizeByClientSize();
  engine.sceneManager.activeScene.ambientLight.diffuseIntensity = 0;

  const rootEntity = engine.sceneManager.activeScene.createRootEntity();

  const scale = 2.5;
  const cameraEntity = rootEntity.createChild("camera");
  const camera = cameraEntity.addComponent(Camera);
  camera.fieldOfView = 45;
  cameraEntity.transform.setPosition(6.5 * scale, 6.58 * scale, 8.5 * scale);
  cameraEntity.addComponent(OrbitControl);

  const lightCount = 10;
  for (let i = 0; i < lightCount; i++) {
    const lightEntity = rootEntity.createChild("light" + i);
    lightEntity.transform.setPosition(-8 + i * 2, 5, 0);
    const light = lightEntity.addComponent(PointLight);
    light.distance = 20;
    light.color.set(0.5, 0.2, 0.7, 1.0);

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
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const defaultSceneRoot = gltf.instantiateSceneRoot();
          defaultSceneRoot.transform.setPosition(-8 + i * 2, 2, -10 + j * 2);
          entity.addChild(defaultSceneRoot);
        }
      }
    }),
    engine.run();
});
