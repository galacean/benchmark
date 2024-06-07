/**
 * @title Texture
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  Entity,
  MeshRenderer,
  PrimitiveMesh,
  UnlitMaterial,
  WebGLEngine,
  Vector3
} from "@galacean/engine";
import * as dat from "dat.gui";
import { OrbitControl } from "@galacean/engine-toolkit";

function createCuboid(engine: WebGLEngine, count: number): Entity {
  const approxColCount = Math.ceil(Math.pow(count, 1/3));

  const root = new Entity(engine, "CubeContainer");
  const vec3Space = new Vector3(1.5, 1.5, 1.5);
  const entities = [];

  function recursive(curLayer) {
    if (entities.length > count) {
      return;
    }
    for (let i = 1; i <= curLayer; ++i) {
      for (let j = 0; j < i; ++j) {
        const entity = root.createChild(`Cube ${i}`);
        const renderer = entity.addComponent(MeshRenderer);
        renderer.mesh = PrimitiveMesh.createCuboid(engine, 1, 1, 1);
        renderer.setMaterial(new UnlitMaterial(engine));

        const transform =  entity.transform;
        transform.setPosition(i * vec3Space.x, (1 - curLayer) * vec3Space.y + 3, (curLayer - j) * vec3Space.z);

        entities.push(entity);
      }
    }
    recursive(curLayer + 1);
  }
  recursive(0);
  return root;
}

function changeCuobidTexture(meshs: MeshRenderer[], textures: []) {
  const lenTextures = textures.length;
  for (let i = 0, len = meshs.length; i < len; i++) {
    const mat = meshs[i].getMaterial() as UnlitMaterial;
    mat.baseTexture = textures[i % lenTextures];
  }
}

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const scene = engine.sceneManager.activeScene;

  // Add camera.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(10.2, 1.7, 16);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  const camera = cameraEntity.addComponent(Camera);
  cameraEntity.addComponent(OrbitControl);
  camera.enableFrustumCulling = false;

  engine.resourceManager
    .load([
      {
        url: 'https://mdn.alipayobjects.com/afts/img/A*yhp-SZbWhgoAAAAAAAAAAAAADrd2AQ/original_dog1_2048.jpeg',
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*KpSzT60tEQMAAAAAAAAAAAAADrd2AQ/original_dog2_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*aT1pS7fQpEIAAAAAAAAAAAAADrd2AQ/original_dog3_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*jaFyQ6nsFBgAAAAAAAAAAAAADrd2AQ/original_dog4_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*loYHQLtGAHcAAAAAAAAAAAAADrd2AQ/original_dog5_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
         url: "https://mdn.alipayobjects.com/afts/img/A*MIMrR7dW8DUAAAAAAAAAAAAADrd2AQ/original_dog6_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*7LUXSbhywNkAAAAAAAAAAAAADrd2AQ/original_dog7_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*lO2xRph4xAMAAAAAAAAAAAAADrd2AQ/original_dog8_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*DtM3R6j2LcYAAAAAAAAAAAAADrd2AQ/original_dog9_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*mJ5jSrWN3ocAAAAAAAAAAAAADrd2AQ/original_dog10_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*zY2GTL-qh-UAAAAAAAAAAAAADrd2AQ/original_dog11_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*b9XGRpYW-7MAAAAAAAAAAAAADrd2AQ/original_dog12_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*TIigRrRSJL8AAAAAAAAAAAAADrd2AQ/original_dog13_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*iUKmSZLmx_0AAAAAAAAAAAAADrd2AQ/original_dog14_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*577cTJf-YxMAAAAAAAAAAAAADrd2AQ/original_dog15_2048.jpeg",
        type: AssetType.Texture2D,
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*OlwcR7U_5TQAAAAAAAAAAAAADrd2AQ/original_dog16_2048.jpeg",
        type: AssetType.Texture2D,
      }
    ])
    .then((resources) => {
      const root = createCuboid(engine, 16);
      scene.addRootEntity(root);
      changeCuobidTexture(root.getComponentsIncludeChildren(MeshRenderer, []), resources);
    });

  engine.run();
});
