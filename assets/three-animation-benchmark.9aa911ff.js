import"./modulepreload-polyfill.c7c6310f.js";import{P as f,V as b,S as M,A as g,C as k,a as v,W as x,b as L}from"./three.module.8e9ca1de.js";import{S as y}from"./stats.module.9f3638b7.js";import{G as C}from"./GLTFLoader.b233667e.js";function R(n){const s=new Map,e=new Map,t=n.clone();return m(n,t,function(o,i){s.set(i,o),e.set(o,i)}),t.traverse(function(o){if(!o.isSkinnedMesh)return;const i=o,c=s.get(o),h=c.skeleton.bones;i.skeleton=c.skeleton.clone(),i.bindMatrix.copy(c.bindMatrix),i.skeleton.bones=h.map(function(u){return e.get(u)}),i.bind(i.skeleton,i.bindMatrix)}),t}function m(n,s,e){e(n,s);for(let t=0;t<n.children.length;t++)m(n.children[t],s.children[t],e)}const l=new f(45,window.innerWidth/window.innerHeight,.1,100);l.position.set(6.5*1.5,6.58*1.5,8.5*1.5);l.lookAt(new b(0,0,0));const d=new M;var p=new g(16777215);p.color.set(new k(1,1,1));d.add(p);let r=[];const S=new C;console.time("load");S.load("https://mdn.alipayobjects.com/rms/afts/file/A*DVfMRKjm6bMAAAAAAAAAAAAAARQnAQ/HVGirl.glb",function(n){const s=n.scene;for(let e=0;e<15;e++)for(let t=0;t<15;t++){const o=R(s);o.position.x=-2.4*1.8+e*.6,o.position.z=-2.4*2+t*.6,o.scale.set(.05,.05,.05),d.add(o);const i=new v(o);r.push(i),i.clipAction(n.animations[1]).play()}console.timeEnd("load")},void 0,function(n){console.error(n)});const a=document.getElementById("canvas");a.width=a.clientWidth*window.devicePixelRatio;a.height=a.clientHeight*window.devicePixelRatio;const A=new x({canvas:a,antialias:!0});A.setAnimationLoop(P);const w=new y;document.body.appendChild(w.dom);const G=new L;function P(n){var s=G.getDelta();for(let e=0;e<r.length;e++)r[e].update(s);A.render(d,l),w.update()}
