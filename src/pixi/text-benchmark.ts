/**
 * @title Text
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
    const col = 22;
    const row = 90;
    const offsetX = 20;
    const offsetY = 10;
    // 中心点所在行列
    const centerX = col * 0.5;
    const centerY = row * 0.5;
    // 屏幕宽高
    const screen = app.screen;
    const halfWidth = screen.width * 0.5;
    const halfHeight = screen.height * 0.5;
    const texts = [];
    const style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 20,
      fill: 0xffffff,
    });
    for (let i = 0; i < row; ++i) {
      for (let j = 0; j < col; ++j) {
        const text = new PIXI.Text({
          text: "hello",
          style,
        });
        app.stage.addChild(text);
        text.anchor.set(0.5, 0.5);
        text.scale = 0.8;
        text.x = halfWidth + (j - centerX) * offsetX + 10;
        text.y = halfHeight + (i - centerY) * offsetY + 10;
        texts.push(text);
      }
    }

    app.ticker.add((time) => {
      for (let i = 0, n = texts.length; i < n; ++i) {
        texts[i].rotation += 0.01 * time.deltaTime;
      }
    });
  });
