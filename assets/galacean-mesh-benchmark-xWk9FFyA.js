import"./modulepreload-polyfill-B5Qt9EMX.js";import{W as u,V as _,C as M}from"./module-zxCEsSWn.js";import{G as j}from"./dat.gui.module-mKA_0LW_.js";import{O as k}from"./index-C1eOlrDT.js";u.create({canvas:"canvas"}).then(e=>{e.canvas.resizeByClientSize();const m=e.sceneManager.activeScene,a=m.createRootEntity("Camera");a.transform.setPosition(0,5,10),a.transform.lookAt(new _(0,0,0));const f=a.addComponent(M);a.addComponent(k),f.enableFrustumCulling=!1;const n=m.createRootEntity("root");function r(o,b){if(n.children.length>0){const i=n.children;for(let c=i.length-1;c>=0;c--)i[c].destroy()}e.resourceManager.load(o).then(i=>{const l=i.instantiateSceneRoot();l.transform.scale.scale(.03),n.addChild(l);for(let d=0,g=b-1;d<g;++d){const p=l.clone(),C=(Math.random()*50-50/2)*2.5,y=(Math.random()*50-50/2)*2.5,h=p.transform;h.setPosition(C,0,-y),h.setRotation(-90,Math.random()*360,0),n.addChild(p)}})}const t={model:"Low",instantiated:1},s={Low:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*m9BeQLj1NCEAAAAAAAAAAAAADkp5AQ/popcat_combine_low.glb",Medium:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*WmviTKgN7_QAAAAAAAAAAAAADkp5AQ/popcat_combine.glb",High:"https://mdn.alipayobjects.com/oasis_be/afts/file/A*r7NhSKXOH6gAAAAAAAAAAAAADkp5AQ/popcat_combine_high2.glb"},A=new j;A.add(t,"model",Object.keys(s)).onChange(o=>{r(s[o],1),t.instantiated=1,A.updateDisplay()}),A.add(t,"instantiated",1,5e3,1).onFinishChange(o=>{r(s[t.model],o)}),r(s[t.model],1),e.run()});
