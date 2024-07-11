/**
 * @title Sprite
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  Script,
  Sprite,
  SpriteAtlas,
  SpriteRenderer,
  Texture2D,
  WebGLEngine,
} from "@galacean/engine";

class Rotate extends Script {
  speed = 60;
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
    .load<SpriteAtlas>({
      url: "https://mdn.alipayobjects.com/oasis_be/afts/file/A*s_FUSawb0sgAAAAAAAAAAAAADkp5AQ/SpriteAtlas.json",
      type: AssetType.SpriteAtlas,
    })
    .then((atlas: SpriteAtlas) => {
      const sprite1 = atlas.getSprite("/tex1-spr.png");
      const sprite2 = atlas.getSprite("/tex2-spr.png");

      const col = 88;
      const row = 90;
      const offsetX = 0.1;
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
          sr.sprite = i % 2 === 0 ? sprite1 : sprite2;
          sr && (sr.priority = index++);
          const transform = entity.transform;
          const scale = 0.075;
          transform.setScale(scale, scale, scale);
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
