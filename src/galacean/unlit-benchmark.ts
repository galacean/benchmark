/**
 * @title UnlitMaterial
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  DirectLight,
  GLTFResource,
  MeshRenderer,
  Texture2D,
  UnlitMaterial,
  WebGLEngine,
  Vector3
} from "@galacean/engine";
import * as dat from 'dat.gui';

function createUnlitMat(engine: WebGLEngine, baseTexture): UnlitMaterial {
  const unlitMat = new UnlitMaterial(engine);
  unlitMat.baseTexture = baseTexture;
  return unlitMat;
}

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const scene = engine.sceneManager.activeScene;
  const root = scene.createRootEntity("root");

  // Add camera.
  const cameraEntity = scene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 5, 10);
  cameraEntity.transform.lookAt(new Vector3(0, 0, 0));
  const camera = cameraEntity.addComponent(Camera);
  camera.enableFrustumCulling = false;

  const light = scene.createRootEntity("Light");
  light.transform.setPosition(0, 3, 0);
  light.transform.setRotation(-45, -45, 0);
  light.addComponent(DirectLight);

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
    ])
    .then((resources) => {
      const gltf = resources[0] as GLTFResource;
      const baseTexture = resources[1] as Texture2D;

      const popCat = gltf.instantiateSceneRoot();
      const transform = popCat.transform;
      transform.setPosition(0, 0, 0);
      transform.scale.scale(0.025);

      const meshRenderers = [];
      function instantiateModel(instantiateCount) {
        let childs = root.children.length;
        if (childs < instantiateCount) {
          for (; childs < instantiateCount; ++childs) {
            const entity = popCat.clone();
            root.addChild(entity);
            const x = (Math.random() * 7.5 - 7.5 / 2) * 2.5;
            const z = (Math.random() * 7.5 - 7.5 / 2) * 2.5;
            const transform = entity.transform;
            transform.setPosition(x * 2.5, 0, -z * 2.5);
            transform.setRotation(-90, Math.random() * 360, 0);

            entity.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
            const matClone = createUnlitMat(engine, baseTexture);
            meshRenderers.forEach((mr) => {
              mr.setMaterial(matClone);
            });
          }
        } else {
          for (; childs > instantiateCount; childs--) {
            root.children[childs-1].destroy();
          }
        }
      }

      const params = {
        instantiated: 100
      };
      const gui = new dat.GUI();
      gui.add(params, "instantiated", 0, 500).onChange(instantiateModel);

      instantiateModel(params.instantiated);
    });

  engine.run();
});
