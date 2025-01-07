/**
 * @title Spine
 * @category Benchmark
 */

import * as PIXI from "pixi.js";
import { Spine } from '@esotericsoftware/spine-pixi-v8';

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
    PIXI.Assets.add({alias: "spineboyData", src: "/spineboy.json"});
    PIXI.Assets.add({alias: "spineboyAtlas", src: "/spineboy.atlas"});
    PIXI.Assets.load(["spineboyData", "spineboyAtlas"]).then(() => {
      const spineboy = Spine.from({skeleton: "spineboyData", atlas: "spineboyAtlas",
        scale: 0.5,
      });
      spineboy.state.setAnimation(0, "run", true);
      spineboy.x = window.innerWidth / 2;
      spineboy.y = window.innerHeight / 2 + spineboy.getBounds().height / 2;

      const clones = 300; // Number of clones
      for (let i = 1; i < clones; i++) {
        const clone = Spine.from({skeleton: "spineboyData", atlas: "spineboyAtlas",
          scale: 0.8,
        });
        clone.state.setAnimation(0, "walk", true);
        clone.x = -180 + spineboy.x + i * 1.5;
        clone.y = spineboy.y;
        app.stage.addChild(clone);
      }
    });
  });
