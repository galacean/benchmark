/**
 * @title Spine
 * @category Benchmark
 */

import * as THREE from "three";
import * as spine from "@esotericsoftware/spine-threejs";

let scene, camera, renderer;
let geometry, material, mesh, skeletonMesh;
let atlas;
let atlasLoader;
let assetManager;
let canvas;
let controls;
let lastFrameTime = Date.now() / 1000;

let baseUrl = "/";
let skeletonFile = "spineboy.json";
let atlasFile = "spineboy.atlas";
let animation = "walk";

let cloneGroup = [];
let cloneCount = 100;

function init() {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let width = window.innerWidth,
    height = window.innerHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 1, 3000);
    camera.position.z = 400;
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(width, height);

    assetManager = new spine.AssetManager(baseUrl);
    assetManager.loadText(skeletonFile);
    assetManager.loadTextureAtlas(atlasFile);

    requestAnimationFrame(load);
}

function load() {
    if (assetManager.isLoadingComplete()) {
    atlas = assetManager.require(atlasFile);
    atlasLoader = new spine.AtlasAttachmentLoader(atlas);
    let skeletonJson = new spine.SkeletonJson(atlasLoader);
    skeletonJson.scale = 0.4;
    let skeletonData = skeletonJson.readSkeletonData(
        assetManager.require(skeletonFile)
    );
    for (let i = 0; i < cloneCount; i ++) {
      const clone = new spine.SkeletonMesh({ skeletonData });
      clone.position.x = -100 + i * 2;
      clone.position.y = -100
      clone.state.setAnimation(0, animation, true);
      scene.add(clone);
      cloneGroup.push(clone);
    }
    requestAnimationFrame(render);
    } else requestAnimationFrame(load);
}

function render() {
    let now = Date.now() / 1000;
    let delta = now - lastFrameTime;
    lastFrameTime = now;

    resize();

    for (let i = 0; i < cloneGroup.length; i ++) {
      cloneGroup[i].update(delta);
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
}

function resize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    if (canvas.width != w || canvas.height != h) {
    canvas.width = w;
    canvas.height = h;
    }

    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    renderer.setSize(w, h);
}

init();

