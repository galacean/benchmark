/**
 * @title Spine
 * @category Benchmark
 */

import { Camera, Vector3, WebGLEngine } from "@galacean/engine";
import { SpineAnimationRenderer, SpineResource } from "@galacean/engine-spine";

WebGLEngine.create({ canvas: "canvas" }).then((engine) => {
  engine.canvas.resizeByClientSize();
  const scene = engine.sceneManager.activeScene;
  const rootEntity = scene.createRootEntity();

  // camera
  const cameraEntity = rootEntity.createChild("camera_node");
  const camera = cameraEntity.addComponent(Camera);
  cameraEntity.transform.position = new Vector3(0, 0, 20);

  engine.resourceManager
    .load({
      url: "/spineboy.json",
      type: "spine",
    })
    .then((spineResouce: SpineResource) => {
      const spineEntity = spineResouce.instantiate();
      const spine = spineEntity.getComponent(SpineAnimationRenderer) as SpineAnimationRenderer;
      spine.defaultConfig.animationName = 'walk';
      for (let i = 0; i < 300; i++) {
        const clone = spineEntity.clone();
        clone.transform.setPosition(-3 + i * 0.02, -2, 0);
        const renderer = clone.getComponent(SpineAnimationRenderer) as SpineAnimationRenderer;
        renderer.priority = i;
        rootEntity.addChild(clone);
      }
    });

  engine.run();
});
