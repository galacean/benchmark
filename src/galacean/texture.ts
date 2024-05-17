/**
 * @title Texture
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  GLTFResource,
  MeshRenderer,
  RenderFace,
  Texture2D,
  UnlitMaterial,
  Vector3,
  WebGLEngine
} from "@galacean/engine";
import { OrbitControl, Stats } from "@galacean/engine-toolkit";
import * as dat from "dat.gui";

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const scene = engine.sceneManager.activeScene;

  // Add camera.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 0, 10);
  const camera = cameraEntity.addComponent(Camera);
  camera.enableFrustumCulling = false;
  cameraEntity.addComponent(Stats);
  cameraEntity.addComponent(OrbitControl);

  engine.resourceManager
    .load([
      {
        url: "https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",
        type: AssetType.GLTF
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*0fb1RaBW3DUAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_128.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*hUyIQIsnfSUAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_512.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*cF_ZTIGvjjkAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_1024.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*PX7WTqi3MLAAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_2048.png",
        type: AssetType.Texture2D
      }
    ])
    .then((resources) => {
      const gltf = <GLTFResource>resources[0];
      const tex256 =  <Texture2D>resources[1];
      const tex128 =  <Texture2D>resources[2];
      const tex512 =  <Texture2D>resources[3];
      const tex1024 =  <Texture2D>resources[4];
      const tex2048 =  <Texture2D>resources[5];

      const unlitMat = new UnlitMaterial(engine);
      unlitMat.renderFace = RenderFace.Double;

      const textures = {
        "None": undefined,
        "256": tex256,
        "128": tex128,
        "512": tex512,
        "1024": tex1024,
        "2048": tex2048
      };
      
      const params = {
        texture: "None",
        enableMipMap: false
      };
      const gui = new dat.GUI();
      gui.add(params, "texture", Object.keys(textures)).onChange(value => {
        unlitMat.baseTexture = textures[value];
      });

      const popCat = gltf.instantiateSceneRoot();
      const transform = popCat.transform;
      transform.setPosition(0, 0, 0);
      transform.scale.scale(0.01);
      scene.addRootEntity(popCat);

      // Replace material to UnlitMaterial.
      const meshRenderers = [];
      popCat.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
      meshRenderers.forEach((mr) => {
        mr.setMaterial(unlitMat);
      });

      const border = 7.5;
      function instantiateModel(instantiateCount) {
        for (let i = 0; i < instantiateCount; ++i) {
          const entity = popCat.clone();
          scene.addRootEntity(entity);
          const x = Math.random() * border - border / 2;
          const z =  Math.random() * border - border / 2;
          const transform = entity.transform;
          transform.setPosition(x, 0, -z);
          transform.setRotation(-90, Math.random() * 360, 0);
        }
      }
      instantiateModel(500);
    });

  engine.run();
});
