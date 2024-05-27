/**
 * @title BlendShape
 * @category Benchmark
 */
import {
  WebGLEngine,
  GLTFResource,
  Camera,
  Animator,
  Vector3,
  DirectLight,
} from "@galacean/engine";

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity("root");

  // Create camera.
  const cameraEntity = rootEntity.createChild("Camera");
  // cameraEntity.addComponent(OrbitControl);
  cameraEntity.transform.setPosition(6.5 * 1.5, 6.58 * 1.5, 8.5 * 1.5);
  const camera = cameraEntity.addComponent(Camera);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  camera.farClipPlane = 1000;

  const lightEntity = scene.createRootEntity("light");
  const directLight = lightEntity.addComponent(DirectLight);
  directLight.intensity = 0.6;
  directLight.direction.set(0, -0.5, -1.0);

  engine.resourceManager
    .load("https://mdn.alipayobjects.com/oasis_be/afts/file/A*3WpzTqforh4AAAAAAAAAAAAADkp5AQ/HVGirl_BS_Root.glb")
    .then((gltf) => {
      const model = (gltf as GLTFResource).instantiateSceneRoot();
      model.transform.setScale(0.5, 0.5, 0.5);

      for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
          const modelClone = model.clone();
          rootEntity.addChild(modelClone);

          const { transform } = modelClone;
          transform.position.x = -2.4 * 1.8 + i * 0.6;
          transform.position.z = -2.4 * 2 + j * 0.6;

          const anmator = modelClone.getComponent(Animator);
          anmator.play("Samba", undefined, Math.random());
        }
      }
    });

  engine.run();
});
