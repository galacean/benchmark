/**
 * @title Sprite
 * @category Benchmark
 */

import * as PIXI from "pixi.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const app = new PIXI.Application();
app
  .init({
    canvas: canvas,
    resizeTo: window,
    width: canvas.width,
    height: canvas.height,
  })
  .then(() => {
    PIXI.Assets.load([
      {
        src: "https://mdn.alipayobjects.com/huamei_w6ifet/afts/img/A*YwyMRq8_O-4AAAAAAAAAAAAADjCHAQ/original",
        loadParser: "loadTextures",
      },
      {
        src: "https://mdn.alipayobjects.com/huamei_w6ifet/afts/img/A*ClJLS6U4HtsAAAAAAAAAAAAADjCHAQ/original",
        loadParser: "loadTextures",
      },
    ]).then((textureRecord) => {
      const col = 88;
      const row = 90;
      const offsetX = 5;
      const offsetY = 10;
      // 中心点所在行列
      const centerX = col * 0.5;
      const centerY = row * 0.5;
      // 屏幕宽高
      const screen = app.screen;
      const halfWidth = screen.width * 0.5;
      const halfHeight = screen.height * 0.5;
      const sprites = [];
      const texture1 =
        textureRecord[
          "https://mdn.alipayobjects.com/huamei_w6ifet/afts/img/A*YwyMRq8_O-4AAAAAAAAAAAAADjCHAQ/original"
        ];
      const texture2 = textureRecord['https://mdn.alipayobjects.com/huamei_w6ifet/afts/img/A*ClJLS6U4HtsAAAAAAAAAAAAADjCHAQ/original'];
      for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
          const sprite = new PIXI.Sprite(i % 2 === 0 ? texture1 : texture2);
          app.stage.addChild(sprite);
          sprite.scale = 0.045;
          sprite.anchor.set(0.5, 0.5);
          sprite.x = halfWidth + (j - centerX) * offsetX + 5;
          sprite.y = halfHeight + (i - centerY) * offsetY + 10;
          sprites.push(sprite);
        }
      }

      app.ticker.add((time) => {
        for (let i = 0, n = sprites.length; i < n; ++i) {
          sprites[i].rotation += 0.01 * time.deltaTime;
        }
      });
    });
  });
