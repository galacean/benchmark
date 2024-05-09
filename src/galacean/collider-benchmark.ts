/**
 * @title Collider
 * @category Benchmark
 */

import {
    AmbientLight,
    AssetType,
    BoxColliderShape,
    Camera,
    CapsuleColliderShape,
    Color,
    DirectLight,
    DynamicCollider,
    Entity,
    Font,
    Layer,
    MeshRenderer,
    PBRMaterial,
    PlaneColliderShape,
    PointerButton,
    PrimitiveMesh,
    Quaternion,
    Script,
    ShadowType,
    SphereColliderShape,
    StaticCollider,
    TextRenderer,
    Vector3,
    WebGLEngine,
  } from "@galacean/engine";
  import { OrbitControl } from "@galacean/engine-toolkit";
  import { Stats } from "@galacean/engine-toolkit";

  import { PhysXPhysics } from "@galacean/engine-physics-physx";
  
  // init scene
  function init(rootEntity: Entity) {
    const quat = new Quaternion();
    addPlane(
      rootEntity,
      new Vector3(30, 0.0, 30),
      new Vector3(),
      new Quaternion()
    );
    // eslint-disable-next-line no-plusplus
    // for (let i = 0; i < 550; i++) {
    //   addBox(
    //       rootEntity,
    //       new Vector3(0.075, 0.075, 0.075),
    //       new Vector3(Math.random() - 0.5, Math.random() * 2 + 2.5, Math.random() - 0.5),
    //       quat
    //     );
    // }

    var boxCount = 0;
    setInterval(() => {
      if (boxCount > 700) return;
      
      addBox(
        rootEntity,
        new Vector3(0.075, 0.075, 0.075),
        new Vector3(Math.random() - 0.5, Math.random() * 2 + 2.5, Math.random() - 0.5),
        quat
      );
      boxCount++;
    }, 16);
  }


  
  function addPlane(
    rootEntity: Entity,
    size: Vector3,
    position: Vector3,
    rotation: Quaternion
  ): Entity {
    const mtl = new PBRMaterial(rootEntity.engine);
    mtl.baseColor.set(
      0.2179807202597362,
      0.2939682161541871,
      0.31177952549087604,
      1
    );
    mtl.roughness = 0.0;
    mtl.metallic = 0.0;
    const planeEntity = rootEntity.createChild();
    planeEntity.layer = Layer.Layer1;
  
    const renderer = planeEntity.addComponent(MeshRenderer);
    renderer.mesh = PrimitiveMesh.createCuboid(
      rootEntity.engine,
      size.x,
      size.y,
      size.z
    );
    renderer.setMaterial(mtl);
    planeEntity.transform.position = position;
    planeEntity.transform.rotationQuaternion = rotation;
    renderer.receiveShadows = false;

    const physicsPlane = new PlaneColliderShape();
    physicsPlane.position.set(0, size.y, 0);
    const planeCollider = planeEntity.addComponent(StaticCollider);
    planeCollider.addShape(physicsPlane);
  
    return planeEntity;
  }
  
  function addBox(
    rootEntity: Entity,
    size: Vector3,
    position: Vector3,
    rotation: Quaternion
  ): Entity {
    const mtl = new PBRMaterial(rootEntity.engine);
    mtl.baseColor.set(Math.random(), Math.random(), Math.random(), 1.0);
    mtl.metallic = 0.0;
    mtl.roughness = 0.5;
    const boxEntity = rootEntity.createChild();
    const renderer = boxEntity.addComponent(MeshRenderer);
    renderer.mesh = PrimitiveMesh.createCuboid(
      rootEntity.engine,
      size.x,
      size.y,
      size.z
    );
    renderer.setMaterial(mtl);
    boxEntity.transform.position = position;
    boxEntity.transform.rotationQuaternion = rotation;
    renderer.castShadows = false;

    const physicsBox = new BoxColliderShape();
    physicsBox.size = size;
    physicsBox.isTrigger = false;
    const boxCollider = boxEntity.addComponent(DynamicCollider);
    boxCollider.addShape(physicsBox);
  
    return boxEntity;
  }
  
  //----------------------------------------------------------------------------------------------------------------------
  WebGLEngine.create({ canvas: "canvas", physics: new PhysXPhysics() }).then((engine) => {  
    engine.canvas.resizeByClientSize();
    const scene = engine.sceneManager.activeScene;
    scene.shadowDistance = 50;
    const rootEntity = scene.createRootEntity();
  
    // init camera
    const cameraEntity = rootEntity.createChild("camera");
    cameraEntity.addComponent(Camera);
    const pos = cameraEntity.transform.position;
    pos.set(-1, 1.5, 2);
    cameraEntity.transform.lookAt(new Vector3());
    cameraEntity.addComponent(OrbitControl);
    cameraEntity.addComponent(Stats);
  
    // init directional light
    const light = rootEntity.createChild("light");
    light.transform.setPosition(-0.3, 1, 0.4);
    light.transform.lookAt(new Vector3(0, 0, 0));
    const directLight = light.addComponent(DirectLight);
    directLight.intensity = 1;
    directLight.shadowType = ShadowType.SoftLow;
    directLight.shadowStrength = 1;
  
    init(rootEntity);
  
    engine.resourceManager
      .load<AmbientLight>({
        type: AssetType.Env,
        url: "https://gw.alipayobjects.com/os/bmw-prod/89c54544-1184-45a1-b0f5-c0b17e5c3e68.bin",
      })
      .then((ambientLight) => {
        scene.ambientLight = ambientLight;
        engine.run();
      });
  });