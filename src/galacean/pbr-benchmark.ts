/**
 * @title PBRMaterial
 * @category Benchmark
 */

import {
  AssetType,
  Camera,
  DirectLight,
  GLTFResource,
  MeshRenderer,
  PBRMaterial,
  Texture2D,
  WebGLEngine,
  Vector3
} from "@galacean/engine";
import * as dat from "dat.gui";

function createPBRMat(engine: WebGLEngine, baseTexture, specularTexture, displacementTexture, normalTexture, emissiveTexture, aoTexture, clearCoatTexture, clearCoatRoughnessTexture, clearCoatNormalTexture): PBRMaterial {
  const pbrMat = new PBRMaterial(engine);
  pbrMat.baseTexture = baseTexture;
  pbrMat.ior = 1.5;
  pbrMat.metallic = 1;

  pbrMat.roughness = 0.7;
  pbrMat.roughnessMetallicTexture = specularTexture;

  pbrMat.anisotropy = 0.2;
  pbrMat.anisotropyRotation = 50;
  pbrMat.anisotropyTexture = displacementTexture;

  pbrMat.normalTexture = normalTexture;
  pbrMat.normalTextureIntensity = 0.5;

  pbrMat.emissiveTexture = emissiveTexture;

  pbrMat.occlusionTexture = aoTexture;
  pbrMat.occlusionTextureIntensity = 1.6;

  pbrMat.clearCoat = 0.5;
  pbrMat.clearCoatTexture = clearCoatTexture;
  pbrMat.clearCoatRoughness = 0.5;
  pbrMat.clearCoatRoughnessTexture = clearCoatRoughnessTexture;
  pbrMat.clearCoatNormalTexture = clearCoatNormalTexture;
  return pbrMat;
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
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*GDsZTKyeOIsAAAAAAAAAAAAADrd2AQ/original_original_DisplacementMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*-Kx-Qa49q_gAAAAAAAAAAAAADrd2AQ/original_original_AmbientOcclusionMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*nqaYT41yCQMAAAAAAAAAAAAADrd2AQ/original_original_NormalMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*DnByQ4n5nu4AAAAAAAAAAAAADrd2AQ/original_original_SpecularMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*0MmDTJ1br3cAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_emissive.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*W8_RSI4aq_kAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_specular.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*dGshSKjHoKgAAAAAAAAAAAAADrd2AQ/original_original_Material.004_baseColor_normal.png",
        type: AssetType.Texture2D
      }
    ])
    .then((resources) => {
      const gltf = resources[0] as GLTFResource;
      const baseTexture = resources[1] as Texture2D;
      const displacementTexture = resources[2] as Texture2D;
      const aoTexture = resources[3] as Texture2D;
      const normalTexture = resources[4] as Texture2D;
      const specularTexture = resources[5] as Texture2D;
      const emissiveTexture = resources[6] as Texture2D;
      const clearCoatRoughnessTexture =  resources[7] as Texture2D;
      const clearCoatNormalTexture = resources[8] as Texture2D;

      const popCat = gltf.instantiateSceneRoot();
      const transform = popCat.transform;
      transform.setPosition(0, 0, 0);
      transform.scale.scale(0.025);

      const meshRenderers = [];
      const pbrMaterials = [];
      function instantiateModel(instantiateCount) {
        let childs = root.children.length;
        if (childs < instantiateCount) {
          const baseTextureOrNull = params.baseTexture ? baseTexture : null;
          const specularTextureOrNull = params.specularTexture ? specularTexture : null;
          const displacementTextureOrNull = params.displacementTexture ? displacementTexture : null;
          const normalTextureOrNull = params.normalTexture ? normalTexture : null;
          const emissiveTextureOrNull = params.emissiveTexture ? emissiveTexture : null;
          const aoTextureOrNull = params.aoTexture ? aoTexture : null;
          const clearCoatTextureOrNull = params.clearCoatTexture ? baseTexture : null;
          const clearCoatRoughnessTextureOrNull = params.clearCoatTexture ? clearCoatRoughnessTexture : null;
          const clearCoatNormalTextureOrNull = params.clearCoatNormalTexture ? clearCoatNormalTexture : null;
          for (; childs < instantiateCount; ++childs) {
            const entity = popCat.clone();
            root.addChild(entity);
            const x = (Math.random() * 7.5 - 7.5 / 2) * 2.5;
            const z = (Math.random() * 7.5 - 7.5 / 2) * 2.5;
            const transform = entity.transform;
            transform.setPosition(x, 0, -z);
            transform.setRotation(-90, Math.random() * 360, 0);

            entity.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
            const pbrMat = createPBRMat(engine, baseTextureOrNull, specularTextureOrNull, displacementTextureOrNull, normalTextureOrNull, emissiveTextureOrNull, aoTextureOrNull, clearCoatTextureOrNull, clearCoatRoughnessTextureOrNull, clearCoatNormalTextureOrNull);
            meshRenderers.forEach((mr) => {
              mr.setMaterial(pbrMat);
            });
            pbrMaterials.push(pbrMat);
          }
          meshRenderers.splice(0, meshRenderers.length);
        } else {
          const deleteCount = childs - instantiateCount;
          for (; childs > instantiateCount; childs--) {
            root.children[childs-1].destroy();
          }
          pbrMaterials.splice(pbrMaterials.length - deleteCount, deleteCount);
        }
      }

      const params = {
        instantiated: 100,
        baseTexture: true,
        specularTexture: false,
        displacementTexture: false,
        normalTexture: false,
        emissiveTexture: false,
        aoTexture: false,
        clearCoatTexture: false,
        clearCoatRoughnessTexture: false,
        clearCoatNormalTexture: false
      };
      const gui = new dat.GUI();
      gui.add(params, "instantiated", 0, 500, 1).onChange(instantiateModel);
      gui.add(params, "baseTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.baseTexture = params.baseTexture ? baseTexture : null;
        });
      });
      gui.add(params, "specularTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.roughnessMetallicTexture = params.specularTexture ? specularTexture : null;
        });
      });
      gui.add(params, "displacementTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.anisotropyTexture = params.displacementTexture ? displacementTexture : null;
        });
      });
      gui.add(params, "normalTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.normalTexture = params.normalTexture ? normalTexture : null;
        });
      });
      gui.add(params, "aoTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.occlusionTexture = params.aoTexture ? aoTexture : null;
        });
      });
      gui.add(params, "emissiveTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.emissiveTexture = params.emissiveTexture ? emissiveTexture : null;
        });
      });
      gui.add(params, "clearCoatTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.clearCoatTexture = params.clearCoatTexture ? baseTexture : null;
        });
      });
      gui.add(params, "clearCoatRoughnessTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.clearCoatRoughnessTexture = params.clearCoatRoughnessTexture ? clearCoatRoughnessTexture : null;
        });
      });
      gui.add(params, "clearCoatNormalTexture").onChange(() => {
        pbrMaterials.forEach((mat: PBRMaterial) => {
          mat.clearCoatNormalTexture = params.clearCoatNormalTexture ? clearCoatNormalTexture : null;
        });
      });

      instantiateModel(params.instantiated);
    });

  engine.run();
});
