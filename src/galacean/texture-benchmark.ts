/**
 * @title Texture
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  GLTFResource,
  MeshRenderer,
  Texture2D,
  UnlitMaterial,
  WebGLEngine
} from "@galacean/engine";
import * as dat from "dat.gui";

const textures = {
  None: undefined,
  '128': {
    url: 'https://mdn.alipayobjects.com/afts/img/A*0fb1RaBW3DUAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_128.png',
    type: AssetType.Texture2D,
  },
  '256': {
    url: 'https://mdn.alipayobjects.com/afts/img/A*HSY5QbxEMcQAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png',
    type: AssetType.Texture2D,
  },
  '512': {
    url: 'https://mdn.alipayobjects.com/afts/img/A*hUyIQIsnfSUAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_512.png',
    type: AssetType.Texture2D,
  },
  '1024': {
    url: 'https://mdn.alipayobjects.com/afts/img/A*cF_ZTIGvjjkAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_1024.png',
    type: AssetType.Texture2D,
  },
  '2048': {
    url: 'https://mdn.alipayobjects.com/afts/img/A*PX7WTqi3MLAAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_2048.png',
    type: AssetType.Texture2D,
  },
};

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const scene = engine.sceneManager.activeScene;

  // Add camera.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 0, 10);
  const camera = cameraEntity.addComponent(Camera);
  camera.enableFrustumCulling = false;

  engine.resourceManager
    .load({
      url: 'https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb',
      type: AssetType.GLTF,
    })
    .then((resources) => {
      const gltf = resources as GLTFResource;
      const unlitMat = new UnlitMaterial(engine);

      const params = {
        texture: 'None',
        enableMipMap: true,
        anisoLevel: 1,
      };
      const gui = new dat.GUI();
      gui.add(params, 'texture', Object.keys(textures))
      .onChange((value) => {
        if (value === 'None') {
          unlitMat.baseTexture = null;
          return;
        }
        engine.resourceManager.load(textures[value]).then((res) => {
          const tex = res as Texture2D;
          unlitMat.baseTexture = tex;
          unlitMat.baseTexture.anisoLevel = 1;

          // Revert back to default
          params.enableMipMap = true;
          params.anisoLevel = 1;
          gui.updateDisplay();
        });
      });
      gui.add(params, 'enableMipMap').onChange((value) => {
        if (params.texture === 'None') {
          return;
        }
        const img = new Image();
        img.src = URL.createObjectURL(
          new Blob([textures[params.texture].url], { type: 'image/png' }),
        );
        img.onload = () => {
          const { width, height } = img;
          const baseTexture = new Texture2D(
            engine,
            width,
            height,
            unlitMat.baseTexture.format,
            value,
          );
          baseTexture.setImageSource(img);
          baseTexture.generateMipmaps();
          unlitMat.baseTexture = baseTexture;
        };
      });
      gui.add(params, 'anisoLevel', [1, 2, 4, 8, 16])
      .onChange((value) => {
        const { baseTexture } = unlitMat;
        if (baseTexture) {
          baseTexture.anisoLevel = value;
        }
      });

      const popCat = gltf.instantiateSceneRoot();
      const { transform } = popCat;
      transform.setPosition(0, 0, 0);
      transform.scale.scale(0.025);
      scene.addRootEntity(popCat);

      // Replace material to UnlitMaterial.
      const meshRenderers = [];
      popCat.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
      meshRenderers.forEach((mr) => {
        mr.setMaterial(unlitMat);
      });

      const border = 15.5;
      for (let i = 0; i < 499; ++i) {
        const entity = popCat.clone();
        scene.addRootEntity(entity);
        const x = Math.random() * border - border / 2;
        const z = Math.random() * border - border / 2;
        const t = entity.transform;
        t.setPosition(x, 0, -z);
        t.setRotation(-90, Math.random() * 360, 0);
      }
    });

  engine.run();
});
