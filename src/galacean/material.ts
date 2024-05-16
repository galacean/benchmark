/**
 * @title Material
 * @category Benchmark
 */

import {
  Animator,
  AssetType,
  Camera,
  Color,
  DirectLight,
  GLTFResource,
  MeshRenderer,
  PBRMaterial,
  Texture2D,
  UnlitMaterial,
  WebGLEngine
} from "@galacean/engine";
import { OrbitControl, Stats } from "@galacean/engine-toolkit";
import * as dat from "dat.gui";

WebGLEngine.create({ canvas: "canvas" }).then(engine => {
  engine.canvas.resizeByClientSize();

  // Get default active scene.
  const activeScene = engine.sceneManager.activeScene;

  // Add camera.
  const cameraEntity = activeScene.createRootEntity("Camera");
  cameraEntity.transform.setPosition(0, 0, 10);
  cameraEntity.addComponent(Camera);
  cameraEntity.addComponent(Stats);
  cameraEntity.addComponent(OrbitControl);

  const light = activeScene.createRootEntity("Light");
  light.transform.setPosition(0, 3, 0);
  light.transform.setRotation(-45, -45, 0);
  light.addComponent(DirectLight);

  engine.resourceManager
    .load([
      {
        url: "https://mdn.alipayobjects.com/oasis_be/afts/file/A*TpmGQqVQ-OYAAAAAAAAAAAAADkp5AQ/pop_cat.glb",
        type: AssetType.GLTF
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*ID6_Sp9aTN8AAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*CWKPR5ghtnEAAAAAAAAAAAAADrd2AQ/original_DisplacementMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*5xp6QqUnEjkAAAAAAAAAAAAADrd2AQ/original_AmbientOcclusionMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*LCXiSYOU7egAAAAAAAAAAAAADrd2AQ/original_NormalMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*qGcYRLhBdiUAAAAAAAAAAAAADrd2AQ/original_SpecularMap.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*SizdTpDjx4UAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_emissive.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*xuseSpOuYNsAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_specular.png",
        type: AssetType.Texture2D
      },
      {
        url: "https://mdn.alipayobjects.com/afts/img/A*RbyoSpVuHlMAAAAAAAAAAAAADrd2AQ/original_Material.004_baseColor_normal.png",
        type: AssetType.Texture2D
      }
    ])
    .then((resources) => {
      const gltf = <GLTFResource>resources[0];
      const baseTexture = <Texture2D>resources[1];
      const displacementTexture = <Texture2D>resources[2];
      const aoTexture = <Texture2D>resources[3];
      const normalTexture = <Texture2D>resources[4];
      const specularTexture = <Texture2D>resources[5];
      const emissiveTexture = <Texture2D>resources[6];
      const clearCoatRoughnessTexture =  <Texture2D>resources[7];
      const clearCoatNormalTexture = <Texture2D>resources[8];

      const unlitMat = new UnlitMaterial(engine);
      unlitMat.baseTexture = baseTexture
      
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
      pbrMat.clearCoatTexture = baseTexture;
      pbrMat.clearCoatRoughness = 0.5;
      pbrMat.clearCoatRoughnessTexture = clearCoatRoughnessTexture;
      pbrMat.clearCoatNormalTexture = clearCoatNormalTexture;

      function changeMaterial(material) {
        meshRenderers.forEach((mr) => {
          mr.setMaterial(material);
        });
      }

      const materials = [ "Unlit", "PBR" ];
      const params = {
        PopCat: materials[0],
      };
      const gui = new dat.GUI();
      gui.add(params, "PopCat", materials).onChange(value => {
        if (value === "Unlit") {
          changeMaterial(unlitMat);
        } else {
          changeMaterial(pbrMat);
        }
      });

      const popCat = gltf.instantiateSceneRoot();
      popCat.transform.setPosition(-1.5, -1.5, 0);
      popCat.transform.setScale(0.3, 0.3, 0.3);
      activeScene.addRootEntity(popCat);

      const animator = popCat.getComponent(Animator);
      animator.play("Animation");

      const meshRenderers = [];
      popCat.getComponentsIncludeChildren(MeshRenderer, meshRenderers);
      changeMaterial(unlitMat);
    });

  engine.run();
});
