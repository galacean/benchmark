/**
 * @title Collider
 * @category Benchmark
 */

import {
  BoxColliderShape,
  Camera,
  DirectLight,
  DynamicCollider,
  Entity,
  MeshRenderer,
  PBRMaterial,
  PlaneColliderShape,
  PrimitiveMesh,
  Quaternion,
  ShadowType,
  StaticCollider,
  Vector3,
  WebGLEngine,
} from "@galacean/engine";
import { OrbitControl } from "@galacean/engine-toolkit";

import { PhysXPhysics } from "@galacean/engine-physics-physx";

// init scene
function init(rootEntity: Entity) {
  const quat = new Quaternion();
  addPlane(
    rootEntity,
    new Vector3(30, 0.0, 30),
    new Vector3(0, -0.5, 0),
    new Quaternion()
  );

  var boxCount = 0;
  setInterval(() => {
    if (boxCount > 1000) return;

    addBox(
      rootEntity,
      new Vector3(0.075, 0.075, 0.075),
      new Vector3(
        Math.random() - 0.5,
        Math.random() * 2 + 2.5,
        Math.random() - 0.5
      ),
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
  mtl.roughness = 0.0;
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
  const boxCollider = boxEntity.addComponent(DynamicCollider);
  boxCollider.addShape(physicsBox);
  return boxEntity;
}
//----------------------------------------------------------------------------------------------------------------------
WebGLEngine.create({ canvas: "canvas", physics: new PhysXPhysics(), graphicDeviceOptions: { powerPreference: "high-performance" } }).then(
  (engine) => {
    engine.canvas.resizeByClientSize();
    const scene = engine.sceneManager.activeScene;
    const rootEntity = scene.createRootEntity();

    // init camera
    const cameraEntity = rootEntity.createChild("camera");
    cameraEntity.addComponent(Camera);
    const pos = cameraEntity.transform.position;
    pos.set(-1, 1.5, 2);
    cameraEntity.transform.lookAt(new Vector3());

    // init directional light
    const light = rootEntity.createChild("light");
    light.transform.setPosition(-0.3, 1, 0.4);
    light.transform.lookAt(new Vector3(0, 0, 0));
    const directLight = light.addComponent(DirectLight);
    directLight.intensity = 1;
    directLight.shadowType = ShadowType.None;

    init(rootEntity);

    engine.run();
  }
);
