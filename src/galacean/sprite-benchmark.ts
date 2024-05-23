/**
 * @title Sprite
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  Script,
  Sprite,
  SpriteRenderer,
  Texture2D,
  WebGLEngine,
} from "@galacean/engine";

class Rotate extends Script {
  speed = 30;
  onUpdate(dt: number): void {
    this.entity.transform.rotation.z += this.speed * dt;
  }
}

WebGLEngine.create({
  canvas: "canvas",
  graphicDeviceOptions: { powerPreference: "high-performance" },
}).then((engine) => {
  engine.canvas.resizeByClientSize();
  // Create root entity.
  const rootEntity = engine.sceneManager.activeScene.createRootEntity();
  // Create camera.
  const cameraEntity = rootEntity.createChild("Camera");
  cameraEntity.transform.setPosition(0, 0, 50);
  const camera = cameraEntity.addComponent(Camera);
  camera.isOrthographic = true;
  camera.orthographicSize = (engine.canvas.height * 0.5) / 100;

  engine.resourceManager
    .load<Texture2D>({
      url: "https://mdn.alipayobjects.com/huamei_w6ifet/afts/img/A*YwyMRq8_O-4AAAAAAAAAAAAADjCHAQ/original",
      type: AssetType.Texture2D,
    })
    .then((texture: Texture2D) => {
      const sprite = new Sprite(engine, texture);

      const col = 22;
      const row = 90;
      const offsetX = 0.38;
      const offsetY = 0.2;
      // 中心点所在行列
      const centerX = col * 0.5;
      const centerY = row * 0.5;
      let index = 0;
      for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
          const entity = rootEntity.createChild(`sprite-${i}`);
          const sr = entity.addComponent(SpriteRenderer);
          entity.addComponent(Rotate);
          sr.sprite = sprite;
          sr && (sr.priority = index++);
          const transform = entity.transform;
          transform.setScale(0.2, 0.2, 0.2);
          transform.setPosition(
            (j - centerX) * offsetX,
            (i - centerY) * offsetY,
            0
          );
        }
      }
    });

  engine.run();
});
