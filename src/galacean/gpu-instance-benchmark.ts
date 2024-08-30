/**
 * @title GPUInstance
 * @category Benchmark
 */

import {
  BlendFactor,
  BlendOperation,
  Buffer,
  BufferBindFlag,
  BufferMesh,
  BufferUsage,
  Camera,
  Color,
  ColorSpace,
  CompareFunction,
  CullMode,
  Entity,
  IndexFormat,
  Material,
  Mesh,
  MeshRenderer,
  PrimitiveMesh,
  Script,
  Shader,
  Vector2,
  Vector3,
  Vector4,
  VertexAttribute,
  VertexBufferBinding,
  VertexElement,
  VertexElementFormat,
  WebGLEngine
} from "@galacean/engine";
import { ShaderLab } from "@galacean/engine-shader-lab";
// import { OrbitControl } from "@galacean/engine-toolkit";

const galaxyShader = `
  Shader "Galaxy" {
    SubShader "GalaxyParticle" {
      Pass "Particle" {
        BlendState {
          Enabled = true;
          ColorBlendOperation = BlendOperation.Add;
          AlphaBlendOperation = BlendOperation.Add;
          SourceColorBlendFactor = BlendFactor.SourceAlpha;
          DestinationColorBlendFactor = BlendFactor.One;
          SourceAlphaBlendFactor = BlendFactor.SourceAlpha;
          DestinationAlphaBlendFactor = BlendFactor.One;
        }

        DepthState {
          Enabled = true;
          WriteEnabled = false;
          CompareFunction = CompareFunction.LessEqual;
        }

        RasterState {
          CullMode = CullMode.Back;
        }

        RenderQueueType = Transparent;

        mat4 renderer_LocalMat;
        mat4 renderer_MVPMat;
        vec3 camera_Position;
        vec4 colorInside;
        vec4 colorOutside;
        float u_time;
        float u_size;

        struct a2v {
          vec3 POSITION;
          vec2 TEXCOORD_0;
          float f_phi;
          float f_theta;
          float f_radiusRatio;
          float f_radius;
          float f_offsetRadius;
          float f_branchAngle;
          float f_size;
        };

        struct v2f {
          vec2 uv;
          float v_radiusRatio;
        };

        vec3 sphericalToCartesian(float phi, float theta) {
          float sinPhi = sin(phi);
          return vec3(sinPhi * sin(theta), cos(phi), sinPhi * cos(theta));
        }

        VertexShader = vert;
        FragmentShader = frag;

        v2f vert(a2v v) {
          v2f o;

          // billboad
          vec3 vertToCam = -(renderer_LocalMat * vec4(camera_Position, 1.0)).xyz;
          vertToCam = normalize(vertToCam);
          vec3 up = vec3(0.0, 1.0, 0.0);
          if (abs(vertToCam.y) > 0.999) {
            up.y = 0.0;
            up.z = 1.0;
          }
          vec3 right = normalize(cross(up, vertToCam));
          up = normalize(cross(right, vertToCam));

          vec3 billboardPos = v.POSITION * v.f_size * u_size;
          billboardPos = billboardPos.x * right + billboardPos.y * up + billboardPos.z * vertToCam;

          // Calculate instance position.
          float angle = v.f_branchAngle + u_time * (1.0 - v.f_radiusRatio);
          vec3 spherePosition = vec3(cos(angle), 0.0, sin(angle)) * v.f_radius;
          vec3 randomOffset = sphericalToCartesian(v.f_phi, v.f_theta) * v.f_offsetRadius;

          billboardPos = billboardPos + spherePosition + randomOffset;
          gl_Position = renderer_MVPMat * vec4(billboardPos, 1.0);

          o.uv = v.TEXCOORD_0;
          o.v_radiusRatio = v.f_radiusRatio;
          return o;
        }

        void frag(v2f i) {
          // Diffuse color.
          vec4 colorFinal = mix(colorInside, colorOutside, 1.0 - pow(1.0 - i.v_radiusRatio, 2.0));
          float alpha = (0.1 / (length(i.uv - vec2(0.5)))) - 0.2;
          if (alpha >= 0.0) {
            gl_FragColor = vec4(colorFinal.rgb, alpha);
          } else {
            discard;
          }
        }
      }
    }
  }
`;

const vertexShader = `
  uniform mat4 renderer_LocalMat;
  uniform mat4 renderer_MVPMat;
  uniform vec3 camera_Position;
  uniform float u_time;
  uniform float u_size;

  attribute vec3 POSITION;
  attribute vec2 TEXCOORD_0;
  attribute float f_phi;
  attribute float f_theta;
  attribute float f_radiusRatio;
  attribute float f_radius;
  attribute float f_offsetRadius;
  attribute float f_branchAngle;
  attribute float f_size;

  varying vec2 uv;
  varying float v_radiusRatio;

  vec3 sphericalToCartesian(float phi, float theta) {
    float sinPhi = sin(phi);
    return vec3(sinPhi * sin(theta), cos(phi), sinPhi * cos(theta));
  }

  void main() {
    // billboad
    vec3 vertToCam = -(renderer_LocalMat * vec4(camera_Position, 1.0)).xyz;
    vertToCam = normalize(vertToCam);
    vec3 up = vec3(0.0, 1.0, 0.0);
    if (abs(vertToCam.y) > 0.999) {
      up.y = 0.0;
      up.z = 1.0;
    }
    vec3 right = normalize(cross(up, vertToCam));
    up = normalize(cross(right, vertToCam));

    vec3 billboardPos = POSITION * f_size * u_size;
    billboardPos = billboardPos.x * right + billboardPos.y * up + billboardPos.z * vertToCam;

    // Calculate instance position.
    float angle = f_branchAngle + u_time * (1.0 - f_radiusRatio);
    vec3 spherePosition = vec3(cos(angle), 0.0, sin(angle)) * f_radius;
    vec3 randomOffset = sphericalToCartesian(f_phi, f_theta) * f_offsetRadius;

    billboardPos = billboardPos + spherePosition + randomOffset;
    gl_Position = renderer_MVPMat * vec4(billboardPos, 1.0);

    uv = TEXCOORD_0;
    v_radiusRatio = f_radiusRatio;
  }
`;

const fragmentShader = `
  uniform vec4 colorInside;
  uniform vec4 colorOutside;

  varying vec2 uv;
  varying float v_radiusRatio;

  void main() {
    vec4 colorFinal = mix(colorInside, colorOutside, 1.0 - pow(1.0 - v_radiusRatio, 2.0));
    float alpha = (0.1 / (length(uv - vec2(0.5)))) - 0.2;
    if (alpha >= 0.0) {
      gl_FragColor = vec4(colorFinal.rgb, alpha);
    } else {
      discard;
    }
  }
`;

class GalaxyParticleSimulator extends Script {
  material: Material;

  angle: number;
  time: number = 0;

  onUpdate(deltaTime: number): void {
    this.time += deltaTime;
    this.material.shaderData.setFloat('u_time', this.time);
  }
}

export default class Main {
  constructor(public engine: WebGLEngine) {
    engine.canvas.resizeByClientSize();
  }

  run() {
    const scene = this.engine.sceneManager.scenes[0];
    scene.background.solidColor = new Color(32 / 255, 25 / 255, 25 / 255);

    const cameraEntity = scene.createRootEntity('Camera');
    cameraEntity.transform.setPosition(4, 2, 5);
    cameraEntity.transform.lookAt(new Vector3());
    const camera = cameraEntity.addComponent(Camera);
    camera.enableFrustumCulling = false;
    camera.nearClipPlane = 0.03;
    camera.farClipPlane = 1000;
    // cameraEntity.addComponent(OrbitControl);

    this.createGalaxy(scene.createRootEntity('Galaxy'));
  }

  createGalaxy(root: Entity) {
    // Shader.create(galaxyShader);
    Shader.create('Galaxy', vertexShader, fragmentShader);

    const galaxy = root.createChild('Galaxy-Geometry');
    const mr = galaxy.addComponent(MeshRenderer);
    mr.mesh = this.createBufferMesh(50000);
    const galaxyMat = new Material(this.engine, Shader.find('Galaxy'));
    mr.setMaterial(galaxyMat);
    galaxyMat.shaderData.setVector4("colorInside", new Vector4(255 / 255, 165 / 255, 117 / 255));
    galaxyMat.shaderData.setVector4("colorOutside", new Vector4(49 / 255, 21 / 255, 153 / 255));
    galaxyMat.shaderData.setFloat("u_size", 0.08);

    const { blendState, depthState, rasterState } = galaxyMat.renderState;
    const targetBlendState = blendState.targetBlendState;
    targetBlendState.enabled = true;
    targetBlendState.colorBlendOperation = BlendOperation.Add;
    targetBlendState.alphaBlendOperation = BlendOperation.Add;
    targetBlendState.sourceColorBlendFactor = BlendFactor.SourceAlpha;
    targetBlendState.destinationColorBlendFactor = BlendFactor.One;
    targetBlendState.sourceAlphaBlendFactor = BlendFactor.SourceAlpha;
    targetBlendState.destinationAlphaBlendFactor = BlendFactor.One;
    depthState.enabled = true;
    depthState.writeEnabled = false;
    rasterState.cullMode = CullMode.Back;

    const gps = galaxy.addComponent(GalaxyParticleSimulator);
    gps.material = galaxyMat;
  }

  createBufferMesh(instanceCount): Mesh {
    const engine = this.engine;
    const geometry = new BufferMesh(this.engine, 'Galaxy');

    const PI = 3.1415926535;
    const PI2 = 6.28318530718;
    const branches = 3;

    const [ vertices, indices ] = this.setPlaneData(1, 1, 1, 1);

    const stride = 7;
    const instanceData = new Float32Array(instanceCount * stride);
    for (let i = 0, offset = 0; i < instanceCount; i++) {
      offset = stride*i;
      // Phi and Theta.
      instanceData[offset] = Math.random() * PI2;
      instanceData[offset+1] = Math.random() * PI;
      // Radius ratio.
      const radRat = Math.random();
      instanceData[offset+2] = radRat;
      instanceData[offset+3] = Math.pow(radRat, 1.5) * 5;
      // Offset radius.
      instanceData[offset+4] = Math.pow(Math.random(), 2.0) * radRat * 1.25;
      // Branch angle.
      instanceData[offset+5] = Math.floor(Math.random() * branches) * PI2 / branches;
      // Size.
      instanceData[offset+6] = Math.random();
    }

    const vertexBuffer = new Buffer(engine, BufferBindFlag.VertexBuffer, vertices, BufferUsage.Static);
    const instanceBuffer = new Buffer(engine, BufferBindFlag.VertexBuffer, instanceData, BufferUsage.Static);
    const indexBuffer = new Buffer(engine, BufferBindFlag.IndexBuffer, indices, BufferUsage.Static);

    geometry.setVertexElements([
      new VertexElement(VertexAttribute.Position, 0, VertexElementFormat.Vector3, 0, 0),
      new VertexElement(VertexAttribute.Normal, 12, VertexElementFormat.Vector3, 0, 0),
      new VertexElement(VertexAttribute.UV, 24, VertexElementFormat.Vector2, 0, 0),
      new VertexElement('f_phi', 0, VertexElementFormat.Float, 1, 1),
      new VertexElement('f_theta', 4, VertexElementFormat.Float, 1, 1),
      new VertexElement('f_radiusRatio', 8, VertexElementFormat.Float, 1, 1),
      new VertexElement('f_radius', 12, VertexElementFormat.Float, 1, 1),
      new VertexElement('f_offsetRadius', 16, VertexElementFormat.Float, 1, 1),
      new VertexElement('f_branchAngle', 20, VertexElementFormat.Float, 1, 1),
      new VertexElement('f_size', 24, VertexElementFormat.Float, 1, 1),
    ]);
    geometry.setVertexBufferBindings([
      new VertexBufferBinding(vertexBuffer, 32),
      new VertexBufferBinding(instanceBuffer, 28),
    ]);
    geometry.setIndexBufferBinding(indexBuffer, IndexFormat.UInt16);

    geometry.instanceCount = instanceCount;
    geometry.addSubMesh(0, indices.length);

    return geometry;
  }

  setPlaneData(
    width: number,
    height: number,
    horizontalSegments: number,
    verticalSegments: number,
  ): [Float32Array, Uint16Array] {
    horizontalSegments = Math.max(1, Math.floor(horizontalSegments));
    verticalSegments = Math.max(1, Math.floor(verticalSegments));

    const horizontalCount = horizontalSegments + 1;
    const verticalCount = verticalSegments + 1;
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const gridWidth = width / horizontalSegments;
    const gridHeight = height / verticalSegments;
    const vertexCount = horizontalCount * verticalCount;
    const rectangleCount = verticalSegments * horizontalSegments;
    const indices = new Uint16Array(rectangleCount * 6);
    const horizontalCountReciprocal = 1.0 / horizontalCount;
    const horizontalSegmentsReciprocal = 1.0 / horizontalSegments;
    const verticalSegmentsReciprocal = 1.0 / verticalSegments;

    const vertexFloatCount = 8;
    const vertices = new Float32Array(vertexCount * vertexFloatCount);

    for (let i = 0; i < vertexCount; ++i) {
      const x = i % horizontalCount;
      const z = (i * horizontalCountReciprocal) | 0;

      let offset = i * vertexFloatCount;
      // Position
      vertices[offset++] = z * gridHeight - halfHeight;
      vertices[offset++] = x * gridWidth - halfWidth;
      vertices[offset++] = 0;
      // Normal
      vertices[offset++] = 0;
      vertices[offset++] = 0;
      vertices[offset++] = 1;
      // TexCoord
      vertices[offset++] = x * horizontalSegmentsReciprocal;
      vertices[offset++] = z * verticalSegmentsReciprocal;
    }

    let offset = 0;
    for (let i = 0; i < rectangleCount; ++i) {
      const x = i % horizontalSegments;
      const y = (i * horizontalSegmentsReciprocal) | 0;

      const a = y * horizontalCount + x;
      const b = a + 1;
      const c = a + horizontalCount;
      const d = c + 1;

      indices[offset++] = a;
      indices[offset++] = c;
      indices[offset++] = b;
      indices[offset++] = c;
      indices[offset++] = d;
      indices[offset++] = b;
    }

    return [vertices, indices];
  }

}

WebGLEngine.create({
  canvas: "canvas", shaderLab: new ShaderLab(),
  // colorSpace: ColorSpace.Gamma,
  graphicDeviceOptions: {
    alpha: true,
    premultipliedAlpha: false,
    preserveDrawingBuffer: true
}}).then(engine => {
  const main = new Main(engine);
  main.run();

  engine.run();
});
