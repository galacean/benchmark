import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as m,P as w,V as h,W as p,k as A,l as g,c as M,M as f}from"./three.module-CJ2cXEKI.js";import{G as y,c as b}from"./SkeletonUtils-CsLGqZl0.js";import{O as u}from"./OrbitControls-CFadSetj.js";const a=new m,c=new w(45,window.innerWidth/window.innerHeight,.1,1e3),r=2.5;c.position.set(6.5*r,6.58*r,8.5*r);c.lookAt(new h(0,0,0));const s=document.getElementById("canvas");s.width=s.clientWidth*window.devicePixelRatio;s.height=s.clientHeight*window.devicePixelRatio;const d=new p({canvas:s,antialias:!0});new u(c,d.domElement);const v=10;for(let o=0;o<v;o++){const e=new A;e.position.set(-8+o*2,5,0),e.distance=20,e.decay=.1,e.color.setRGB(Math.pow(.5,2.2),Math.pow(.2,2.2),Math.pow(.7,2.2)),a.add(e);const n=new g(.3,32,32),i=new M({emissive:16777215}),t=new f(n,i);t.position.copy(e.position),a.add(t)}const G=new y;G.load("https://mdn.alipayobjects.com/oasis_be/afts/file/A*nceKQadLab8AAAAAAAAAAAAADkp5AQ/DamagedHelmet.glb",o=>{const e=o.scene;a.add(e),e.position.y=1;for(let n=0;n<10;n++)for(let i=0;i<10;i++){const t=b(e);t.position.x=-8+n*2,t.position.y=2,t.position.z=-10+i*2,a.add(t)}});function l(o){d.render(a,c),requestAnimationFrame(l)}requestAnimationFrame(l);