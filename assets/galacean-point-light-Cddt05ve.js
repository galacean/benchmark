import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as g,n as b,o as an,p as z,V as h,q as Q,K as w,r as A,s as J,C as V,t as ee,u as ie,v as oe,R as He,T as Oe,w as ln,x as un,L as Ge,y as sn,f as Z,z as cn,F as je,Q as D,M as B,G as Ce,D as we,H as ce,I as Pe,i as Te,J as ue,N as Ke,O as Je,U as Xe,B as _n,X as dn,Y as mn,Z as hn,_ as L,$ as fn,a0 as vn,a1 as gn,a2 as be,b as $e,a3 as pn,a4 as Ye,W as xn,a5 as yn}from"./module-BxLNiwNf.js";function Cn(i,u){for(var l=0;l<u.length;l++){var t=u[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function wn(i,u,l){return u&&Cn(i.prototype,u),i}function _e(i,u){return _e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_e(i,u)}function Pn(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&_e(i,u)}(function(){g.getByName("u_width")})();(function(){g.getByName("u_min")})();(function(){g.getByName("u_max")})();(function(){g.getByName("u_boxColor")})();(function(){g.getByName("u_borderColor")})();b.create("box",`
#include <common>
#include <common_vert>

void main() {
  gl_Position = vec4(POSITION, 1.0);
}`,`
uniform vec2 u_min;
uniform vec2 u_max;
uniform vec4 u_boxColor;
uniform vec4 u_borderColor;
uniform float u_width;

void main() {
  float vColor = step(u_min.x + u_width, gl_FragCoord.x) * step(gl_FragCoord.x, u_max.x - u_width) * step(u_min.y + u_width, gl_FragCoord.y) * step(gl_FragCoord.y, u_max.y - u_width);
  float vBorder = step(u_min.x, gl_FragCoord.x) * step(gl_FragCoord.x, u_max.x) * step(u_min.y, gl_FragCoord.y) * step(gl_FragCoord.y, u_max.y);
  gl_FragColor = u_boxColor * vColor + (1. - vColor) * vBorder * u_borderColor;
}
`);new an;new h;new Q;new h;new h;new h;new h;new h;new h;new h;new h;new h;new h;new h;new h;new z;var y;(function(i){i[i.None=0]="None",i[i.ROTATE=1]="ROTATE",i[i.ZOOM=2]="ZOOM",i[i.PAN=4]="PAN",i[i.All=7]="All"})(y||(y={}));function ne(){return function(i){}}function te(i,u,l,t){var e=arguments.length,r=e<3?u:t===null?t=Object.getOwnPropertyDescriptor(u,l):t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,u,l,t);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(e<3?n(r):e>3?n(u,l,r):n(u,l))||r);return e>3&&r&&Object.defineProperty(u,l,r),r}var Me=function(){function i(){}return i.onUpdateHandler=function(l){return l.isKeyHeldDown(w.ArrowLeft)||l.isKeyHeldDown(w.KeyA)||l.isKeyHeldDown(w.ArrowUp)||l.isKeyHeldDown(w.KeyW)||l.isKeyHeldDown(w.ArrowDown)||l.isKeyHeldDown(w.KeyS)||l.isKeyHeldDown(w.ArrowRight)||l.isKeyHeldDown(w.KeyD)?y.PAN:y.None},i.onUpdateDelta=function(l,t){var e=l.movementSpeed,r=l.input;t.x=t.y=t.z=0,(r.isKeyHeldDown(w.ArrowLeft)||r.isKeyHeldDown(w.KeyA))&&(t.x-=e),(r.isKeyHeldDown(w.ArrowRight)||r.isKeyHeldDown(w.KeyD))&&(t.x+=e),(r.isKeyHeldDown(w.ArrowUp)||r.isKeyHeldDown(w.KeyW))&&(t.z-=e),(r.isKeyHeldDown(w.ArrowDown)||r.isKeyHeldDown(w.KeyS))&&(t.z+=e)},i}();Me=te([ne()],Me);var O,Ie;(function(i){i[i.Moving=0]="Moving",i[i.Distance=1]="Distance",i[i.None=2]="None"})(Ie||(Ie={}));var Se=(O=function(){function i(){}return i.onUpdateHandler=function(l){if(++this._frameIndex,l.pointers.length===1)if(l.isPointerHeldDown(A.Primary))this._updateType(y.ROTATE,0);else{var t=l.pointers[0].deltaPosition;(t.x!==0||t.y!==0)&&l.isPointerUp(A.Primary)?this._updateType(y.ROTATE,0):this._updateType(y.None,2)}else this._updateType(y.None,2);return this._handlerType},i.onUpdateDelta=function(l,t){var e=this,r=e._frameIndex;switch(this._deltaType){case 0:if(this._lastUsefulFrameIndex===r-1){var n=l.input.pointers[0].deltaPosition;t.x=n.x,t.y=n.y}else t.x=0,t.y=0;break}this._lastUsefulFrameIndex=r},i._updateType=function(l,t){(this._handlerType!==l||this._deltaType!==t)&&(this._handlerType=l,this._deltaType=t,this._lastUsefulFrameIndex=-1)},i}(),function(){O._deltaType=0}(),function(){O._handlerType=y.None}(),function(){O._frameIndex=0}(),function(){O._lastUsefulFrameIndex=-1}(),O);Se=te([ne()],Se);var Ee=J.zeroTolerance,X=function(){function i(l,t,e){this.radius=l,this.phi=t,this.theta=e,this._matrix=new z,this._matrixInv=new z,this.radius=l!==void 0?l:1,this.phi=t!==void 0?t:0,this.theta=e!==void 0?e:0}var u=i.prototype;return u.makeSafe=function(){var t=Math.floor(this.phi/Math.PI);return this.phi=J.clamp(this.phi,t*Math.PI+Ee,(t+1)*Math.PI-Ee),this},u.set=function(t,e,r){return this.radius=t,this.phi=e,this.theta=r,this},u.setYAxis=function(t){var e=i._xAxis,r=i._yAxis,n=i._zAxis;h.equals(e.set(1,0,0),r.copyFrom(t).normalize())&&e.set(0,1,0),h.cross(e,r,n),n.normalize(),h.cross(r,n,e);var a=this._matrix,o=a.elements;o[0]=e.x,o[1]=e.y,o[2]=e.z,o[4]=r.x,o[5]=r.y,o[6]=r.z,o[8]=n.x,o[9]=n.y,o[10]=n.z;var s=this._matrixInv,c=s.elements;c[0]=e.x,c[4]=e.y,c[8]=e.z,c[1]=r.x,c[5]=r.y,c[9]=r.z,c[2]=n.x,c[6]=n.y,c[10]=n.z},u.setFromVec3=function(t,e){return e===void 0&&(e=!1),t.transformNormal(this._matrixInv),this.radius=t.length(),this.radius===0?(this.theta=0,this.phi=0):e?(this.phi=2*Math.PI-Math.acos(J.clamp(t.y/this.radius,-1,1)),this.theta=Math.atan2(-t.x,-t.z)):(this.phi=Math.acos(J.clamp(t.y/this.radius,-1,1)),this.theta=Math.atan2(t.x,t.z)),this},u.setToVec3=function(t){var e=this,r=e.radius,n=e.phi,a=e.theta,o=Math.sin(n)*r;return this.phi-=Math.floor(this.phi/Math.PI/2)*Math.PI*2,t.set(o*Math.sin(a),r*Math.cos(n),o*Math.cos(a)),t.transformNormal(this._matrix),this.phi>Math.PI},i}();(function(){X._xAxis=new h})();(function(){X._yAxis=new h})();(function(){X._zAxis=new h})();var q=function(){function i(){}return i.onUpdateHandler=function(l){return l.isKeyHeldDown(w.ArrowLeft)||l.isKeyHeldDown(w.ArrowRight)||l.isKeyHeldDown(w.ArrowUp)||l.isKeyHeldDown(w.ArrowDown)?y.PAN:y.None},i.onUpdateDelta=function(l,t){var e=l.keyPanSpeed,r=l.input;t.x=t.y=0,r.isKeyHeldDown(w.ArrowLeft)&&(t.x+=e),r.isKeyHeldDown(w.ArrowRight)&&(t.x-=e),r.isKeyHeldDown(w.ArrowUp)&&(t.y+=e),r.isKeyHeldDown(w.ArrowDown)&&(t.y-=e)},i}();q=te([ne()],q);var U,Re;(function(i){i[i.Moving=0]="Moving",i[i.Distance=1]="Distance",i[i.None=2]="None"})(Re||(Re={}));var de=(U=function(){function i(){}return i.onUpdateHandler=function(l){++this._frameIndex;var t=l.pointers;switch(t.length){case 1:if(l.isPointerHeldDown(A.Secondary))this._updateType(y.PAN,0);else if(l.isPointerHeldDown(A.Auxiliary))this._updateType(y.ZOOM,0);else if(l.isPointerHeldDown(A.Primary))this._updateType(y.ROTATE,0);else{var e=l.pointers[0].deltaPosition;e.x!==0&&e.y!==0?l.isPointerUp(A.Secondary)?this._updateType(y.PAN,0):l.isPointerUp(A.Auxiliary)?this._updateType(y.ZOOM,0):l.isPointerUp(A.Primary)?this._updateType(y.ROTATE,0):this._updateType(y.None,2):this._updateType(y.None,2)}break;case 2:this._updateType(y.ZOOM,1);break;case 3:this._updateType(y.PAN,0);break;default:this._updateType(y.None,2);break}return this._handlerType},i.onUpdateDelta=function(l,t){var e=this,r=e._frameIndex;switch(this._deltaType){case 0:if(t.x=0,t.y=0,this._lastUsefulFrameIndex===r-1){for(var n=l.input.pointers,a=n.length,o=a-1;o>=0;o--){var s=n[o].deltaPosition;t.x+=s.x,t.y+=s.y}t.x/=a,t.y/=a}break;case 1:var c=l.input.pointers,d=c[0],m=c[1],f=Q.distance(d.position,m.position);this._lastUsefulFrameIndex===r-1?t.set(0,this._distanceOfPointers-f,0):t.set(0,0,0),this._distanceOfPointers=f;break}this._lastUsefulFrameIndex=r},i._updateType=function(l,t){(this._handlerType!==l||this._deltaType!==t)&&(this._handlerType=l,this._deltaType=t,this._lastUsefulFrameIndex=-1)},i}(),function(){U._deltaType=2}(),function(){U._handlerType=y.None}(),function(){U._frameIndex=0}(),function(){U._lastUsefulFrameIndex=-1}(),function(){U._distanceOfPointers=0}(),U);de=te([ne()],de);var me=function(){function i(){}return i.onUpdateHandler=function(l){var t=l.wheelDelta;return t.x===0&&t.y===0&&t.z===0?y.None:y.ZOOM},i.onUpdateDelta=function(l,t){t.copyFrom(l.input.wheelDelta)},i}();me=te([ne()],me);var Tn=function(i){Pn(u,i);function u(){var t;return t=i.apply(this,arguments)||this,t.inputDevices=[q,de,me],t.autoRotate=!1,t.autoRotateSpeed=Math.PI,t.enableDamping=!0,t.rotateSpeed=1,t.zoomSpeed=1,t.keyPanSpeed=7,t.dampingFactor=.1,t.zoomFactor=.2,t.minDistance=.1,t.maxDistance=1/0,t.minZoom=0,t.maxZoom=1/0,t.minPolarAngle=1/180*Math.PI,t.maxPolarAngle=179/180*Math.PI,t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t._enableKeys=!0,t._up=new h(0,1,0),t._target=new h,t._atTheBack=!1,t._spherical=new X,t._sphericalDelta=new X,t._sphericalDump=new X,t._zoomFrag=0,t._scale=1,t._panOffset=new h,t._tempVec3=new h,t._enableHandler=y.All,t}var l=u.prototype;return l.onAwake=function(){var e=this,r=e.engine,n=e.entity;this.canvas=r.canvas,this.input=r.inputManager,this.camera=n.getComponent(V),this.cameraTransform=n.transform,this._spherical.setYAxis(this._up),this._atTheBack=!1},l.onLateUpdate=function(e){this._updateInputDelta(e),this._updateTransform()},l._updateInputDelta=function(e){for(var r=y.None,n=this,a=n._tempVec3,o=n._enableHandler,s=this,c=s.inputDevices,d=s.input,m=c.length-1;m>=0;m--){var f=c[m],v=f.onUpdateHandler(d);if(v&o)switch(r|=v,f.onUpdateDelta(this,a),v){case y.ROTATE:this._rotate(a);break;case y.ZOOM:this._zoom(a);break;case y.PAN:this._pan(a);break}}var C=this,x=C._sphericalDump,P=C._sphericalDelta;if(this.enableDamping&&(o&y.ZOOM&&r^y.ZOOM&&(this._zoomFrag*=1-this.zoomFactor),o&y.ROTATE&&r^y.ROTATE&&(P.theta=x.theta*=1-this.dampingFactor,P.phi=x.phi*=1-this.dampingFactor)),r===y.None&&this.autoRotate){var T=this.autoRotateSpeed*e;P.theta-=T}},l._rotate=function(e){var r=2*Math.PI*e.x/this.canvas.width*this.rotateSpeed;this._sphericalDelta.theta-=r;var n=2*Math.PI*e.y/this.canvas.height*this.rotateSpeed;this._sphericalDelta.phi-=n,this.enableDamping&&(this._sphericalDump.theta=-r,this._sphericalDump.phi=-n)},l._zoom=function(e){e.y>0?this._scale/=Math.pow(.95,this.zoomSpeed):e.y<0&&(this._scale*=Math.pow(.95,this.zoomSpeed))},l._pan=function(e){var r=this.cameraTransform,n=r.worldMatrix.elements,a=this.canvas.height,o=h.distance(r.position,this.target)*(this.camera.fieldOfView/2)*(Math.PI/180),s=-2*e.x*(o/a),c=2*e.y*(o/a);this._panOffset.x+=n[0]*s+n[4]*c,this._panOffset.y+=n[1]*s+n[5]*c,this._panOffset.z+=n[2]*s+n[6]*c},l._updateTransform=function(){var e=this,r=e.cameraTransform,n=e.target,a=e._tempVec3,o=e._spherical,s=e._sphericalDelta,c=e._panOffset;a.copyFrom(r.worldUp),this._atTheBack=a.y<=0,h.subtract(r.position,n,a),o.setFromVec3(a,this._atTheBack),o.theta+=s.theta,o.phi+=s.phi,o.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,o.theta)),o.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,o.phi)),o.makeSafe(),this._scale!==1&&(this._zoomFrag=o.radius*(this._scale-1)),o.radius+=this._zoomFrag,o.radius=Math.max(this.minDistance,Math.min(this.maxDistance,o.radius)),this._atTheBack=o.setToVec3(a),h.add(n.add(c),a,r.worldPosition),r.lookAt(n,a.copyFrom(this.up).scale(this._atTheBack?-1:1)),this._zoomFrag=0,this._scale=1,s.set(0,0,0),c.set(0,0,0)},wn(u,[{key:"enableKeys",get:function(){return this._enableKeys},set:function(e){if(this._enableKeys!==e){this._enableKeys=e;var r=this.inputDevices;if(e)r.push(q);else for(var n=r.length-1;n>=0;n--)if(r[n]===q){r.splice(n,1);break}}}},{key:"up",get:function(){return this._up},set:function(e){this._up.copyFrom(e),this._spherical.setYAxis(e),this._atTheBack=!1}},{key:"target",get:function(){return this._target},set:function(e){this._target.copyFrom(e),this._atTheBack=!1}},{key:"enableRotate",get:function(){return(this._enableHandler&y.ROTATE)!==0},set:function(e){e?this._enableHandler|=y.ROTATE:this._enableHandler&=~y.ROTATE}},{key:"enableZoom",get:function(){return(this._enableHandler&y.ZOOM)!==0},set:function(e){e?this._enableHandler|=y.ZOOM:this._enableHandler&=~y.ZOOM}},{key:"enablePan",get:function(){return(this._enableHandler&y.PAN)!==0},set:function(e){e?this._enableHandler|=y.PAN:this._enableHandler&=~y.PAN}}]),u}(ee);function bn(i,u){for(var l=0;l<u.length;l++){var t=u[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function Mn(i,u,l){return u&&bn(i.prototype,u),i}function he(i,u){return he=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},he(i,u)}function In(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&he(i,u)}function Sn(i,u,l,t){var e=arguments.length,r=e<3?u:t===null?t=Object.getOwnPropertyDescriptor(u,l):t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,u,l,t);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(e<3?n(r):e>3?n(u,l,r):n(u,l))||r);return e>3&&r&&Object.defineProperty(u,l,r),r}var En=`#define GLSLIFY 1
#include <common>
uniform vec3 u_pickColor;void main(){gl_FragColor=vec4(u_pickColor,1.0);}`,Rn=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,G,Nn=b.create("framebuffer-picker-color",Rn,En),W=(G=function(i){In(u,i);function u(){var t;return t=i.apply(this,arguments)||this,t._renderersMap=[],t._frameBufferSize=new Q(1024,1024),t}var l=u.prototype;return l.onAwake=function(){this._camera=this.entity.getComponent(V)},l.pick=function(e,r){var n=this;return new Promise(function(a,o){n._setupRenderTarget();var s=n._readPixelFromRenderTarget(e,r),c=n._getRendererByPixel(s);a(c)})},l.regionPick=function(e,r,n,a){var o=this;return new Promise(function(s,c){o._setupRenderTarget();var d=o._readPixelFromRenderTarget(e,r,n,a),m=o._getRenderersByPixel(d);s(m)})},l._checkFrameBufferSize=function(){var e=this._pickRenderTarget,r=this.engine,n=this._frameBufferSize;(!e||n.x!=e.width||n.y!=e.height)&&(e&&e.destroy(),this._pickRenderTarget=new He(r,n.x,n.y,new Oe(r,n.x,n.y,ln.R8G8B8A8,!1)))},l._updateRenderersPickColor=function(e){for(var r=0,n=this._renderersMap,a=W._rootEntityRenderers,o=e.rootEntities,s=W._pickColorProperty,c=0,d=o.length;c<d;c++){o[c].getComponentsIncludeChildren(un,a);for(var m=0,f=a.length;m<f;m++){var v=a[m],C=v.shaderData,x=C.getVector3(s);x||(x=new h,C.setVector3(s,x)),this._uniqueId2Color(++r,x),n[r]=v}}},l._setupRenderTarget=function(){this._checkFrameBufferSize();var e=this._camera;this._updateRenderersPickColor(e.scene);var r=e.renderTarget,n=e.aspectRatio;e.renderTarget=this._pickRenderTarget,e.setReplacementShader(Nn),e.aspectRatio=n,e.render(),e.resetReplacementShader(),e.renderTarget=r,e.resetAspectRatio()},l._readPixelFromRenderTarget=function(e,r,n,a){var o,s,c,d=this._getCoordOnRenderTarget(e,r),m=arguments.length;if(m===2)o=W._pickPixel,s=c=1;else if(m===4){var f=this._getCoordOnRenderTarget(n,a);s=Math.abs(d.x-f.x),c=Math.abs(d.y-f.y),d.x=d.x<f.x?d.x:f.x,d.y=d.y<f.y?d.y:f.y,o=new Uint8Array(s*c*4)}return this._pickRenderTarget.getColorTexture().getPixelBuffer(d.x,d.y,s,c,0,o),o},l._getCoordOnRenderTarget=function(e,r){var n=this._pickRenderTarget,a=this.engine.canvas,o=this._camera.viewport,s=(o.z-o.x)*a.width,c=(o.w-o.y)*a.height;return{x:Math.floor((e-o.x)/s*(n.width-1)),y:Math.floor((r-o.y)/c*(n.height-1))}},l._getRendererByPixel=function(e){return this._renderersMap[this._color2UniqueId(e)]},l._getRenderersByPixel=function(e){var r=this,n=[],a=this._color2UniqueIds(e);return a.forEach(function(o){r._renderersMap[o]&&n.push(r._renderersMap[o])}),n},l._uniqueId2Color=function(e,r){e>=16777215&&(Ge.warn("Framebuffer Picker encounter primitive's id greater than 16777215"),r.set(0,0,0)),r.set((e&255)/255,((e&65280)>>8)/255,((e&16711680)>>16)/255)},l._color2UniqueId=function(e){return e[0]|e[1]<<8|e[2]<<16},l._color2UniqueIds=function(e){W._pickIds.clear();for(var r=0;r<e.length;r+=4){var n=e[r]|e[r+1]<<8|e[r+2]<<16;W._pickIds.add(n)}return W._pickIds},Mn(u,[{key:"frameBufferSize",get:function(){return this._frameBufferSize},set:function(e){this._frameBufferSize=e}}]),u}(ee),function(){G._rootEntityRenderers=[]}(),function(){G._pickPixel=new Uint8Array(4)}(),function(){G._pickIds=new Set}(),function(){G._pickColorProperty=g.getByName("u_pickColor")}(),G);W=Sn([ie(V,oe.CheckOnly)],W);function Ne(i,u){for(var l=0;l<u.length;l++){var t=u[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function pe(i,u,l){return u&&Ne(i.prototype,u),l&&Ne(i,l),i}var p=function(){function i(){}return i.createCuboidWireframe=function(l,t,e,r,n,a,o){var s=l/2,c=t/2,d=e/2,m=n;r[m++].set(-s,c,-d),r[m++].set(s,c,-d),r[m++].set(s,c,d),r[m++].set(-s,c,d),r[m++].set(-s,-c,-d),r[m++].set(s,-c,-d),r[m++].set(s,-c,d),r[m++].set(-s,-c,d),r[m++].set(-s,c,-d),r[m++].set(-s,c,d),r[m++].set(-s,-c,d),r[m++].set(-s,-c,-d),r[m++].set(s,c,-d),r[m++].set(s,c,d),r[m++].set(s,-c,d),r[m++].set(s,-c,-d),r[m++].set(-s,c,d),r[m++].set(s,c,d),r[m++].set(s,-c,d),r[m++].set(-s,-c,d),r[m++].set(-s,c,-d),r[m++].set(s,c,-d),r[m++].set(s,-c,-d),r[m++].set(-s,-c,-d),a[o++]=n,a[o++]=n+1,a[o++]=n+1,a[o++]=n+2,a[o++]=n+2,a[o++]=n+3,a[o++]=n+3,a[o++]=n,a[o++]=n+4,a[o++]=n+5,a[o++]=n+5,a[o++]=n+6,a[o++]=n+6,a[o++]=n+7,a[o++]=n+7,a[o++]=n+4,a[o++]=n+8,a[o++]=n+9,a[o++]=n+9,a[o++]=n+10,a[o++]=n+10,a[o++]=n+11,a[o++]=n+11,a[o++]=n+8,a[o++]=n+12,a[o++]=n+13,a[o++]=n+13,a[o++]=n+14,a[o++]=n+14,a[o++]=n+15,a[o++]=n+15,a[o++]=n+12,a[o++]=n+16,a[o++]=n+17,a[o++]=n+17,a[o++]=n+18,a[o++]=n+18,a[o++]=n+19,a[o++]=n+19,a[o++]=n+16,a[o++]=n+20,a[o++]=n+21,a[o++]=n+21,a[o++]=n+22,a[o++]=n+22,a[o++]=n+23,a[o++]=n+23,a[o++]=n+20},i.createSphereWireframe=function(l,t,e,r,n){i._shift.set(0,0,0),i.createCircleWireframe(l,0,i._shift,t,e,r,n),i.createCircleWireframe(l,1,i._shift,t,e+i.circleVertexCount,r,n+i.circleIndexCount),i.createCircleWireframe(l,2,i._shift,t,e+i.circleVertexCount*2,r,n+i.circleIndexCount*2)},i.createConeWireframe=function(l,t,e,r,n,a){i._shift.set(0,-t,0),i.createCircleWireframe(l,1,i._shift,e,r,n,a);var o=r+i.circleVertexCount,s=o;e[s++].set(0,0,0),e[s++].set(-l,-t,0),e[s++].set(l,-t,0),e[s++].set(0,-t,l),e[s++].set(0,-t,-l),a+=i.circleIndexCount,n[a++]=o,n[a++]=o+1,n[a++]=o,n[a++]=o+2,n[a++]=o,n[a++]=o+3,n[a++]=o,n[a++]=o+4},i.createUnboundCylinderWireframe=function(l,t,e,r,n){var a=5;i._shift.set(0,0,0),i.createCircleWireframe(l,1,i._shift,t,e,r,n);var o=e+i.circleVertexCount,s=o;n+=i.circleIndexCount;for(var c=0;c<8;c++){var d=J.degreeToRadian(45*c);t[s++].set(l*Math.cos(d),0,l*Math.sin(d)),t[s++].set(l*Math.cos(d),-a,l*Math.sin(d)),r[n+c*2]=o+2*c,r[n+c*2+1]=o+2*c+1}},i.createCapsuleWireframe=function(l,t,e,r,n,a){var o=i.circleIndexCount,s=i.circleVertexCount,c=t/2;i._shift.set(0,c,0),i.createCircleWireframe(l,1,i._shift,e,r,n,a),i._shift.set(0,-c,0),i.createCircleWireframe(l,1,i._shift,e,r+s,n,a+o),i.createEllipticWireframe(l,c,2,e,r+s*2,n,a+o*2),i.createEllipticWireframe(l,c,0,e,r+s*3,n,a+o*2+i.ellipticIndexCount)},i.createCircleWireframe=function(l,t,e,r,n,a,o){for(var s=i.circleVertexCount,c=Math.PI*2,d=1/s,m=n,f=0;f<s;++f){var v=f*d,C=v*c;switch(t){case 0:r[m++].set(e.x,l*Math.cos(C)+e.y,l*Math.sin(C)+e.z);break;case 1:r[m++].set(l*Math.cos(C)+e.x,e.y,l*Math.sin(C)+e.z);break;case 2:r[m++].set(l*Math.cos(C)+e.x,l*Math.sin(C)+e.y,e.z);break}var x=f+n;f<s-1?(a[o+2*f]=x,a[o+2*f+1]=x+1):(a[o+2*f]=x,a[o+2*f+1]=n)}},i.createEllipticWireframe=function(l,t,e,r,n,a,o){for(var s=i.circleVertexCount,c=Math.PI*2,d=1/s,m=n,f=0;f<s;++f){var v=f*d,C=v*c;switch(e){case 0:r[m++].set(0,l*Math.sin(C)+t,l*Math.cos(C));break;case 1:r[m++].set(l*Math.cos(C),t,l*Math.sin(C));break;case 2:r[m++].set(l*Math.cos(C),l*Math.sin(C)+t,0);break}f==s/2&&(t=-t);var x=f+n;f<s-1?(a[o+2*f]=x,a[o+2*f+1]=x+1):(a[o+2*f]=x,a[o+2*f+1]=n)}},i.createFrustumWireframe=function(l,t,e,r,n,a,o){i._shift.set(0,0,0),i.createCircleWireframe(l,2,i._shift,r,n,a,o),i._shift.set(0,0,-t);var s=J.degreeToRadian(e),c=Math.tan(s),d=l+c*t;i.createCircleWireframe(d,2,i._shift,r,n+i.circleVertexCount,a,o+i.circleIndexCount);var m=n+2*i.circleVertexCount,f=m;r[f++].set(0,0,0),r[f++].set(0,0,-t),r[f++].set(l,0,0),r[f++].set(d,0,-t),r[f++].set(-l,0,0),r[f++].set(-d,0,-t),r[f++].set(0,l,0),r[f++].set(0,d,-t),r[f++].set(0,-l,0),r[f++].set(0,-d,-t),o+=2*i.circleIndexCount,a[o++]=m,a[o++]=m+1,a[o++]=m+2,a[o++]=m+3,a[o++]=m+4,a[o++]=m+5,a[o++]=m+6,a[o++]=m+7,a[o++]=m+8,a[o++]=m+9},i.createHemisphereWireframe=function(l,t,e,r,n,a){for(var o=i.circleVertexCount/2,s=Math.PI,c=1/o,d=r,m=0;m<o+1;m++){var f=m*c,v=f*s;switch(t){case 0:e[d++].set(l*Math.sin(v),0,l*Math.cos(v));break;case 1:e[d++].set(0,l*Math.sin(v),l*Math.cos(v));break;case 2:e[d++].set(-l*Math.cos(v),0,-l*Math.sin(v));break}var C=m+r;m<o&&(n[a+2*m]=C,n[a+2*m+1]=C+1)}a+=i.circleVertexCount;for(var x=0;x<o+1;x++){var P=x*c,T=P*s;switch(t){case 0:e[d++].set(l*Math.sin(T),l*Math.cos(T),0);break;case 1:e[d++].set(l*Math.cos(T),l*Math.sin(T),0);break;case 2:e[d++].set(0,-l*Math.cos(T),-l*Math.sin(T));break}var I=x+r+o+1;x<o&&(n[a+2*x]=I,n[a+2*x+1]=I+1)}i._shift.set(0,0,0),i.createCircleWireframe(l,t,i._shift,e,r+i.circleVertexCount+2,n,a+i.circleVertexCount)},pe(i,null,[{key:"cuboidIndexCount",get:function(){return 48}},{key:"cuboidPositionCount",get:function(){return 24}},{key:"sphereIndexCount",get:function(){return i.circleIndexCount*3}},{key:"spherePositionCount",get:function(){return i.circlePositionCount*3}},{key:"coneIndexCount",get:function(){return i.circleIndexCount+8}},{key:"conePositionCount",get:function(){return i.circlePositionCount+5}},{key:"unboundCylinderIndexCount",get:function(){return i.circleIndexCount+16}},{key:"unboundCylinderPositionCount",get:function(){return i.circlePositionCount+16}},{key:"capsuleIndexCount",get:function(){return(i.circleIndexCount+i.ellipticIndexCount)*2}},{key:"capsulePositionCount",get:function(){return(i.circlePositionCount+i.ellipticPositionCount)*2}},{key:"circleIndexCount",get:function(){return i.circleVertexCount*2}},{key:"circlePositionCount",get:function(){return i.circleVertexCount}},{key:"ellipticIndexCount",get:function(){return i.circleVertexCount*2}},{key:"ellipticPositionCount",get:function(){return i.circleVertexCount}},{key:"frustumIndexCount",get:function(){return i.circleIndexCount*2+10}},{key:"frustumPositionCount",get:function(){return i.circleVertexCount*2+10}},{key:"hemisphereIndexCount",get:function(){return i.circleVertexCount*2+i.circleIndexCount}},{key:"hemispherePositionCount",get:function(){return i.circleVertexCount+2+i.circlePositionCount}}]),i}();(function(){p._shift=new h})();(function(){p.circleVertexCount=40})();function fe(i,u){return fe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},fe(i,u)}function Ze(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&fe(i,u)}function qe(i,u,l,t){var e=arguments.length,r=e<3?u:t===null?t=Object.getOwnPropertyDescriptor(u,l):t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,u,l,t);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(e<3?n(r):e>3?n(u,l,r):n(u,l))||r);return e>3&&r&&Object.defineProperty(u,l,r),r}(function(){g.getByName("u_lightDir")})();(function(){g.getByName("u_planarHeight")})();(function(){g.getByName("u_planarShadowColor")})();(function(){g.getByName("u_planarShadowFalloff")})();var An=new sn(`
    attribute vec4 POSITION;
    varying vec4 color;

    uniform vec3 u_lightDir;
    uniform float u_planarHeight;
    uniform vec4 u_planarShadowColor;
    uniform float u_planarShadowFalloff;

    uniform mat4 renderer_ModelMat;
    uniform mat4 camera_VPMat;

    #ifdef RENDERER_HAS_SKIN
      attribute vec4 JOINTS_0;
      attribute vec4 WEIGHTS_0;

      #ifdef RENDERER_USE_JOINT_TEXTURE
        uniform sampler2D renderer_JointSampler;
        uniform float renderer_JointCount;
        mat4 getJointMatrix(sampler2D smp, float index) {
            float base = index / renderer_JointCount;
            float hf = 0.5 / renderer_JointCount;
            float v = base + hf;

            vec4 m0 = texture2D(smp, vec2(0.125, v ));
            vec4 m1 = texture2D(smp, vec2(0.375, v ));
            vec4 m2 = texture2D(smp, vec2(0.625, v ));
            vec4 m3 = texture2D(smp, vec2(0.875, v ));

            return mat4(m0, m1, m2, m3);
        }
      #else
          uniform mat4 renderer_JointMatrix[ RENDERER_JOINTS_NUM ];
      #endif
    #endif

    vec3 ShadowProjectPos(vec4 vertPos) {
      vec3 shadowPos;

      // get the world space coordinates of the vertex
      vec3 worldPos = (renderer_ModelMat * vertPos).xyz;
      
      // world space coordinates of the shadow (the part below the ground is unchanged)
      shadowPos.y = min(worldPos.y , u_planarHeight);
      shadowPos.xz = worldPos.xz - u_lightDir.xz * max(0.0, worldPos.y - u_planarHeight) / u_lightDir.y;

      return shadowPos;
    }

    void main() {
     vec4 position = vec4(POSITION.xyz, 1.0 );
      #ifdef RENDERER_HAS_SKIN
          #ifdef RENDERER_USE_JOINT_TEXTURE
              mat4 skinMatrix =
                  WEIGHTS_0.x * getJointMatrix(renderer_JointSampler, JOINTS_0.x ) +
                  WEIGHTS_0.y * getJointMatrix(renderer_JointSampler, JOINTS_0.y ) +
                  WEIGHTS_0.z * getJointMatrix(renderer_JointSampler, JOINTS_0.z ) +
                  WEIGHTS_0.w * getJointMatrix(renderer_JointSampler, JOINTS_0.w );
          #else
              mat4 skinMatrix =
                  WEIGHTS_0.x * renderer_JointMatrix[ int( JOINTS_0.x ) ] +
                  WEIGHTS_0.y * renderer_JointMatrix[ int( JOINTS_0.y ) ] +
                  WEIGHTS_0.z * renderer_JointMatrix[ int( JOINTS_0.z ) ] +
                  WEIGHTS_0.w * renderer_JointMatrix[ int( JOINTS_0.w ) ];
          #endif
          position = skinMatrix * position;
      #endif

      // get the shadow's world space coordinates
      vec3 shadowPos = ShadowProjectPos(position);

      // convert to clip space
      gl_Position = camera_VPMat * vec4(shadowPos, 1.0);

      // get the world coordinates of the center point
      vec3 center = vec3(renderer_ModelMat[3].x, u_planarHeight, renderer_ModelMat[3].z);
      // calculate shadow falloff
      float falloff = 0.5 - clamp(distance(shadowPos , center) * u_planarShadowFalloff, 0.0, 1.0);

      // shadow color
      color = u_planarShadowColor;
      color.a *= falloff;
    }
    `,`
    varying vec4 color;
    void main() {
       gl_FragColor = color;
    }
    `);b.create("planarShadowShader",[b.find("pbr").subShaders[0].passes[0],An]);function Dn(i,u){for(var l=0;l<u.length;l++){var t=u[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function Wn(i,u,l){return u&&Dn(i.prototype,u),i}function ve(i,u){return ve=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ve(i,u)}function zn(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&ve(i,u)}(function(){g.getByName("u_far")})();(function(){g.getByName("u_near")})();(function(){g.getByName("u_primaryScale")})();(function(){g.getByName("u_secondaryScale")})();(function(){g.getByName("u_gridIntensity")})();(function(){g.getByName("u_axisIntensity")})();(function(){g.getByName("u_flipProgress")})();(function(){g.getByName("u_fade")})();b.create("grid",`
#include <common>
#include <common_vert>
uniform mat4 camera_ViewInvMat;

varying vec3 nearPoint;
varying vec3 farPoint;

vec3 UnprojectPoint(float x, float y, float z, mat4 viewInvMat, mat4 projInvMat) {
    vec4 unprojectedPoint =  viewInvMat * projInvMat * vec4(x, y, z, 1.0);
    return unprojectedPoint.xyz / unprojectedPoint.w;
}

void main() {
    float tol = 0.0001;
    mat4 viewInvMat = camera_ViewInvMat;
    if (abs(viewInvMat[3][1]) < tol) {
        viewInvMat[3][1] = tol;
    }
    mat4 projInvMat = INVERSE_MAT(camera_ProjMat);

    nearPoint = UnprojectPoint(POSITION.x, POSITION.y, -1.0, viewInvMat, projInvMat);// unprojecting on the near plane
    farPoint = UnprojectPoint(POSITION.x, POSITION.y, 1.0, viewInvMat, projInvMat);// unprojecting on the far plane
    gl_Position = vec4(POSITION, 1.0);// using directly the clipped coordinates
}`,`
#include <transform_declare>

uniform float u_far;
uniform float u_near;
uniform float u_primaryScale;
uniform float u_secondaryScale;
uniform float u_gridIntensity;
uniform float u_axisIntensity;
uniform float u_flipProgress;
uniform float u_fade;

varying vec3 nearPoint;
varying vec3 farPoint;
  
vec4 grid(vec3 fragPos3D, float scale, float fade) {
    vec2 coord = mix(fragPos3D.xz, fragPos3D.xy, u_flipProgress) * scale;
    vec2 derivative = fwidth(coord);
    vec2 grid = abs(fract(coord - 0.5) - 0.5) / derivative;
    float line = min(grid.x, grid.y);
    float minimumz = min(derivative.y, 1.0);
    float minimumx = min(derivative.x, 1.0);
    vec4 color = vec4(u_gridIntensity, u_gridIntensity, u_gridIntensity, fade * (1.0 - min(line, 1.0)));
    // z-axis
    if (fragPos3D.x > -u_axisIntensity * minimumx && fragPos3D.x < u_axisIntensity * minimumx)
        color.z = 1.0;
    // x-axis or y-axis
    float xy = mix(fragPos3D.z, fragPos3D.y, u_flipProgress);
    if (xy > -u_axisIntensity * minimumz && xy < u_axisIntensity * minimumz)
        color.x = 1.0;
    return color;
}

float computeDepth(vec3 pos) {
    vec4 clip_space_pos = camera_ProjMat * camera_ViewMat * vec4(pos.xyz, 1.0);
    // map to 0-1
    return (clip_space_pos.z / clip_space_pos.w) * 0.5 + 0.5;
}

float computeLinearDepth(vec3 pos) {
    vec4 clip_space_pos = camera_ProjMat * camera_ViewMat * vec4(pos.xyz, 1.0);
    float clip_space_depth = clip_space_pos.z / clip_space_pos.w;
    float linearDepth = (2.0 * u_near * u_far) / (u_far + u_near - clip_space_depth * (u_far - u_near));
    return linearDepth / u_far;// normalize
}

void main() {
    float ty = -nearPoint.y / (farPoint.y - nearPoint.y);
    float tz = -nearPoint.z / (farPoint.z - nearPoint.z);
    float t = mix(ty, tz, u_flipProgress);
    vec3 fragPos3D = nearPoint + t * (farPoint - nearPoint);

    gl_FragDepth = computeDepth(fragPos3D);

    float linearDepth = computeLinearDepth(fragPos3D);
    float fading = max(0.0, (0.5 - linearDepth));

    // adding multiple resolution for the grid
    gl_FragColor = (grid(fragPos3D, u_primaryScale, u_fade) + grid(fragPos3D, u_secondaryScale, 1.0 - u_fade));
    gl_FragColor.a *= fading;
}
`);var Fn=`
  attribute vec3 POSITION;
  attribute vec2 TEXCOORD_0;
  attribute vec4 COLOR_0;
  uniform mat4 renderer_MVPMat;
  
  uniform float u_time;
  uniform vec2 u_foam_speed; 
  uniform vec2 u_distorsion_speed; 
  varying vec2 waterTexCoords;
  varying vec2 normalTexCoords;
  varying vec4 v_color;
      
  void main() {
    gl_Position = renderer_MVPMat * vec4(POSITION, 1.0);
    waterTexCoords = TEXCOORD_0 + vec2(u_foam_speed.x * u_time, u_foam_speed.y * u_time);
    normalTexCoords = TEXCOORD_0 + vec2(u_distorsion_speed.x * cos(u_time), u_distorsion_speed.y * sin(u_time));
    v_color = COLOR_0; 
  }
  `,Ln=`
  #include <common>
  varying vec4 v_color;
  varying vec2 waterTexCoords;
  varying vec2 normalTexCoords;
  uniform sampler2D material_NormalTexture;
  uniform sampler2D u_foamTex;
  uniform vec3 u_foamColor;
  uniform vec2 u_foam_param;
  uniform float u_distorsion_amount;
  void main() {  
    vec4 normalTex = texture2D(material_NormalTexture, normalTexCoords) * 2.0 - 1.0;
    vec4 waterTex = texture2D(u_foamTex, waterTexCoords + (normalTex.rg * u_distorsion_amount));
    float alphaComp = v_color.r * waterTex.r * u_foam_param.x;
    float alpha = pow(alphaComp,2.0);
    alpha = smoothstep(0.5 - u_foam_param.y, 0.5+ u_foam_param.y, alpha);
    alpha = saturate(alpha);
    
    gl_FragColor = vec4(u_foamColor.rgb, alpha);
  }
  `;b.create("water-ripple",Fn,Ln);(function(){g.getByName("u_foamColor")})();(function(){g.getByName("u_foam_speed")})();(function(){g.getByName("u_foam_param")})();(function(){g.getByName("u_distorsion_speed")})();(function(){g.getByName("u_distorsion_amount")})();(function(){g.getByName("u_foamTex")})();var Un=`
    attribute vec3 POSITION;
    attribute vec2 TEXCOORD_0;
    attribute vec4 COLOR_0;

    uniform mat4 renderer_MVPMat;
    
    uniform float u_time;
    uniform vec2 u_water_speed; 
    uniform vec2 u_distorsion_speed; 
    
    varying vec4 v_color;
    varying vec2 waterTexCoords;
    varying vec2 normalTexCoords;
  
    void main() {
      gl_Position = renderer_MVPMat * vec4(POSITION, 1.0);
  
      waterTexCoords = TEXCOORD_0 + vec2(u_water_speed.x * sin(u_time), u_water_speed.y * cos(u_time));
      normalTexCoords = TEXCOORD_0 + vec2(u_distorsion_speed.x * cos(u_time), u_distorsion_speed.y * sin(u_time));     
      
      v_color = COLOR_0;
    }
    `,kn=`
    #include <common>
    varying vec4 v_color;
    varying vec2 waterTexCoords;
    varying vec2 normalTexCoords;
  
    uniform sampler2D material_NormalTexture;
    uniform sampler2D u_waterTex;
    uniform sampler2D u_edgeTex;
  
    uniform vec4 u_edgeColor;
    uniform vec2 u_edgeParam;
    uniform float u_distorsion_amount;
  
    void main() {
      vec4 normalTex = texture2D(material_NormalTexture, normalTexCoords) * 2.0 - 1.0;
      vec4 waterTex = texture2D(u_waterTex, waterTexCoords + (normalTex.rg * u_distorsion_amount));
      vec4 edgeTex = texture2D(u_edgeTex, waterTexCoords + (normalTex.rg * u_distorsion_amount));
  
      float edge = pow((v_color.r + edgeTex.r) * v_color.r, 2.0);
      edge = saturate(1.0 - smoothstep(u_edgeParam.x - u_edgeParam.y, u_edgeParam.x + u_edgeParam.y, edge));
      vec4 finalCol = mix(waterTex, u_edgeColor, edge);
  
      gl_FragColor = finalCol;
    }
    `;b.create("water",Un,kn);(function(){g.getByName("u_water_speed")})();(function(){g.getByName("u_edgeColor")})();(function(){g.getByName("u_edgeParam")})();(function(){g.getByName("u_distorsion_amount")})();(function(){g.getByName("u_distorsion_speed")})();(function(){g.getByName("u_waterTex")})();(function(){g.getByName("u_edgeTex")})();var Vn=`
    attribute vec3 POSITION;
    attribute vec2 TEXCOORD_0;
    attribute vec4 COLOR_0;
  
    uniform mat4 renderer_MVPMat;
    
    uniform float u_time;
    uniform vec2 u_water_speed; 
    uniform vec2 u_waterfall_speed; 
    uniform vec2 u_distorsion_speed; 
  
    varying vec2 waterTexCoords;
    varying vec2 waterfallTexCoords;
    varying vec2 normalTexCoords;
    varying vec4 v_color;

    void main() {
      gl_Position = renderer_MVPMat * vec4(POSITION, 1.0);
  
      waterTexCoords = TEXCOORD_0 + vec2(u_water_speed.x * u_time, u_water_speed.y * u_time);
      waterfallTexCoords = TEXCOORD_0 + vec2(u_waterfall_speed.x * u_time, u_waterfall_speed.y * u_time);
      normalTexCoords = TEXCOORD_0 + vec2(u_distorsion_speed.x * cos(u_time), u_distorsion_speed.y * sin(u_time));    
      
      v_color = COLOR_0; 
    }
    `,Bn=`
    #include <common>
    varying vec4 v_color;
    varying vec2 waterTexCoords;
    varying vec2 waterfallTexCoords;
    varying vec2 normalTexCoords;
  
    uniform sampler2D material_NormalTexture;
    uniform sampler2D u_waterTex;
    uniform sampler2D u_waterfallTex;
    uniform sampler2D u_edgeNoiseTex;
  
    uniform vec4 u_edgeColor;
    uniform vec2 u_edgeParam;
    uniform float u_distorsion_amount;
  
    void main() {      
      vec4 normalTex = texture2D(material_NormalTexture, normalTexCoords) * 2.0 - 1.0;
      
      vec4 waterTex = texture2D(u_waterTex, waterTexCoords + (normalTex.rg * u_distorsion_amount));
      vec4 waterfallTex = texture2D(u_waterfallTex, waterfallTexCoords + (normalTex.rg * u_distorsion_amount));
  
      vec4 streamEdge = texture2D(u_edgeNoiseTex, waterTexCoords);
      vec4 fallEdge = texture2D(u_edgeNoiseTex, waterfallTexCoords);
  
      float edgeShape = mix(fallEdge.r, streamEdge.r, v_color.r);
      edgeShape = saturate(edgeShape * v_color.g);
      edgeShape = saturate(smoothstep(u_edgeParam.x - u_edgeParam.y, u_edgeParam.x + u_edgeParam.y, edgeShape));
  
      vec4 waterAll = mix(waterfallTex, waterTex, v_color.r);
      vec4 finalCol = mix(waterAll, u_edgeColor, edgeShape);
  
      gl_FragColor = finalCol;
    }
    `;b.create("water-fall",Vn,Bn);(function(){g.getByName("u_water_speed")})();(function(){g.getByName("u_waterfall_speed")})();(function(){g.getByName("u_distorsion_speed")})();(function(){g.getByName("u_edgeColor")})();(function(){g.getByName("u_edgeParam")})();(function(){g.getByName("u_distorsion_amount")})();(function(){g.getByName("u_waterTex")})();(function(){g.getByName("u_waterfallTex")})();(function(){g.getByName("u_edgeNoiseTex")})();var Hn=`
#define IS_METALLIC_WORKFLOW
#include <common>
#include <camera_declare>

#include <FogFragmentDeclaration>

#include <uv_share>
#include <normal_share>
#include <color_share>
#include <worldpos_share>

#include <light_frag_define>
#include <pbr_frag_define>
#include <pbr_helper>

#ifdef LIGHTMAP_TEXTURE
    uniform sampler2D u_lightMapTexture;
    uniform float u_lightMapIntensity;
#endif


void main() {
    Geometry geometry;
    Material material;
    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
    
    initGeometry(geometry, gl_FrontFacing);
    initMaterial(material, geometry);
    
    addTotalDirectRadiance(geometry, material, reflectedLight);
    
    
    // IBL diffuse
    #ifdef LIGHTMAP_TEXTURE
        vec2 lightMapUV = v_uv;
        #ifdef RENDERER_HAS_UV1
            lightMapUV = v_uv1;
        #endif
        reflectedLight.indirectDiffuse += texture2D(u_lightMapTexture, lightMapUV).rgb * u_lightMapIntensity * BRDF_Diffuse_Lambert( material.diffuseColor );
    #endif
    
    // IBL specular
    vec3 radiance = getLightProbeRadiance(geometry, geometry.normal, material.roughness, int(scene_EnvMapLight.mipMapLevel), scene_EnvMapLight.specularIntensity);
    float radianceAttenuation = 1.0;
    
    #ifdef MATERIAL_CLEARCOAT
        vec3 clearCoatRadiance = getLightProbeRadiance( geometry, geometry.clearCoatNormal, material.clearCoatRoughness, int(scene_EnvMapLight.mipMapLevel), scene_EnvMapLight.specularIntensity );
    
        reflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * envBRDFApprox(vec3( 0.04 ), material.clearCoatRoughness, geometry.clearCoatDotNV);
        radianceAttenuation -= material.clearCoat * F_Schlick(geometry.clearCoatDotNV);
    #endif
    
    reflectedLight.indirectSpecular += radianceAttenuation * radiance * envBRDFApprox(material.specularColor, material.roughness, geometry.dotNV );
    
    
    // Occlusion
    #ifdef MATERIAL_OCCLUSIONTEXTURE
        vec2 aoUV = v_uv;
        #ifdef RENDERER_HAS_UV1
            if(material_OcclusionTextureCoord == 1.0){
                aoUV = v_uv1;
            }
        #endif
        float ambientOcclusion = (texture2D(material_OcclusionTexture, aoUV).r - 1.0) * material_OcclusionIntensity + 1.0;
        reflectedLight.indirectDiffuse *= ambientOcclusion;
        #ifdef SCENE_USE_SPECULAR_ENV
            reflectedLight.indirectSpecular *= computeSpecularOcclusion(ambientOcclusion, material.roughness, geometry.dotNV);
        #endif
    #endif
        
        
    // Emissive
    vec3 emissiveRadiance = material_EmissiveColor;
    #ifdef MATERIAL_HAS_EMISSIVETEXTURE
        vec4 emissiveColor = texture2D(material_EmissiveTexture, v_uv);
        #ifndef ENGINE_IS_COLORSPACE_GAMMA
            emissiveColor = gammaToLinear(emissiveColor);
        #endif
        emissiveRadiance *= emissiveColor.rgb;
    #endif
        
    // Total
    vec3 totalRadiance =    reflectedLight.directDiffuse + 
                            reflectedLight.indirectDiffuse + 
                            reflectedLight.directSpecular + 
                            reflectedLight.indirectSpecular + 
                            emissiveRadiance;
                            
        
    gl_FragColor = vec4(totalRadiance, material.opacity);
        
    #include <FogFragment>
        
    #ifndef ENGINE_IS_COLORSPACE_GAMMA
        gl_FragColor = linearToGamma(gl_FragColor);
    #endif

}
`,On=`
#include <common>
#include <common_vert>
#include <blendShape_input>
#include <uv_share>
#include <color_share>
#include <normal_share>
#include <worldpos_share>

#include <ShadowVertexDeclaration>
#include <FogVertexDeclaration>

void main() {

    #include <begin_position_vert>
    #include <begin_normal_vert>
    #include <blendShape_vert>
    #include <skinning_vert>
    #include <uv_vert>
    #include <color_vert>
    #include <normal_vert>
    #include <worldpos_vert>
    #include <position_vert>

    #include <ShadowVertex>
    #include <FogVertex>
}
`;b.create("bake-pbr",On,Hn);(function(){g.getByName("u_lightMapTexture")})();(function(){g.getByName("u_lightMapIntensity")})();var Qe=function(i){zn(u,i);function u(t){var e;e=i.call(this,t,b.find("plain-color"))||this;var r=e.shaderData;return r.enableMacro("MATERIAL_OMIT_NORMAL"),r.setColor(u._baseColorProp,new Z(1,1,1,1)),e.renderState.rasterState.cullMode=cn.Off,e}var l=u.prototype;return l.clone=function(){var e=new u(this._engine);return this.cloneTo(e),e},Wn(u,[{key:"baseColor",get:function(){return this.shaderData.getColor(u._baseColorProp)},set:function(e){var r=this.shaderData.getColor(u._baseColorProp);e!==r&&r.copyFrom(e)}}]),u}(je);b.create("plain-color",`
#include <common>
#include <common_vert>
#include <blendShape_input>

void main() {
    #include <begin_position_vert>
    #include <blendShape_vert>
    #include <skinning_vert>
    #include <position_vert>
}
`,`
#include <common>

uniform vec4 material_BaseColor;

void main() {
     vec4 baseColor = material_BaseColor;

    #ifdef MATERIAL_IS_ALPHA_CUTOFF
        if( baseColor.a < material_AlphaCutoff ) {
            discard;
        }
    #endif

    gl_FragColor = baseColor;

     #ifndef ENGINE_IS_COLORSPACE_GAMMA
        gl_FragColor = linearToGamma(gl_FragColor);
    #endif
}
`);function se(i,u){return u!=null&&typeof Symbol<"u"&&u[Symbol.hasInstance]?!!u[Symbol.hasInstance](i):i instanceof u}var R,M=(R=function(i){Ze(u,i);function u(){var t;return t=i.apply(this,arguments)||this,t._cameraPositions=[new h,new h,new h,new h,new h,new h,new h,new h],t._localPositions=[],t._globalPositions=[],t._indices=null,t._indicesCount=0,t._boundsIndicesCount=0,t._wireframeRenderers=[],t._wireframeElements=[],t}var l=u.prototype;return l.clear=function(){this._wireframeRenderers.length=0,this._wireframeElements.length=0,this._localPositions.length=0,this._globalPositions.length=0,this._indicesCount=0,this._mesh.subMesh.count=0},l.addEntityWireframe=function(e,r){if(r===void 0&&(r=!0),r){var n=new Array;e.getComponentsIncludeChildren(V,n);for(var a=0,o=n.length;a<o;a++)this.addCameraWireframe(n[a]);var s=n.length;e.getComponentsIncludeChildren(Ce,n);for(var c=s,d=n.length;c<d;c++)this.addSpotLightWireframe(n[c]);s=n.length,e.getComponentsIncludeChildren(we,n);for(var m=s,f=n.length;m<f;m++)this.addDirectLightWireframe(n[m]);s=n.length,e.getComponentsIncludeChildren(ce,n);for(var v=s,C=n.length;v<C;v++)this.addPointLightWireframe(n[v]);s=n.length,e.getComponentsIncludeChildren(Pe,n);for(var x=s,P=n.length;x<P;x++)this.addCollideWireframe(n[x]);s=n.length,e.getComponentsIncludeChildren(Te,n);for(var T=s,I=n.length;T<I;T++)this.addParticleRendererEmissionShapeWireframe(n[T])}else{var E=e.getComponent(V);E&&this.addCameraWireframe(E);var N=e.getComponent(Ce);N&&this.addSpotLightWireframe(N);var $=e.getComponent(we);$&&this.addDirectLightWireframe($);var re=e.getComponent(ce);re&&this.addPointLightWireframe(re);var Y=e.getComponent(Pe);Y&&this.addCollideWireframe(Y);var F=e.getComponent(Te);F&&this.addParticleRendererEmissionShapeWireframe(F)}},l.addCameraWireframe=function(e){var r=e.entity.transform,n=e.projectionMatrix.clone();n.invert();var a=this._localPositions,o=a.length;this._wireframeElements.push(new S(r,o));for(var s=M._ndcPosition,c=0;c<4;c++){var d=this._cameraPositions[c];d.copyFrom(s[c]),d.transformCoordinate(n),a.push(d)}for(var m=0;m<4;m++){var f=this._cameraPositions[m+4];f.copyFrom(s[m]),f.z=1,f.transformCoordinate(n),a.push(f)}this._growthIndexMemory(24);var v=this._indices;v[this._indicesCount++]=o,v[this._indicesCount++]=o+1,v[this._indicesCount++]=o+1,v[this._indicesCount++]=o+2,v[this._indicesCount++]=o+2,v[this._indicesCount++]=o+3,v[this._indicesCount++]=o+3,v[this._indicesCount++]=o,v[this._indicesCount++]=o,v[this._indicesCount++]=o+4,v[this._indicesCount++]=o+1,v[this._indicesCount++]=o+5,v[this._indicesCount++]=o+2,v[this._indicesCount++]=o+6,v[this._indicesCount++]=o+3,v[this._indicesCount++]=o+7,v[this._indicesCount++]=o+4,v[this._indicesCount++]=o+5,v[this._indicesCount++]=o+5,v[this._indicesCount++]=o+6,v[this._indicesCount++]=o+6,v[this._indicesCount++]=o+7,v[this._indicesCount++]=o+7,v[this._indicesCount++]=o+4},l.addSpotLightWireframe=function(e){var r=e.distance,n=Math.tan(e.angle/2)*r,a=this._localPositions.length,o=p.coneIndexCount;this._growthIndexMemory(o),this._growthPosition(p.conePositionCount);var s=this,c=s._indices,d=s._localPositions;p.createConeWireframe(n,r,d,a,c,this._indicesCount),this._indicesCount+=o,this._rotateAroundX(a),this._wireframeElements.push(new S(e.entity.transform,a))},l.addPointLightWireframe=function(e){var r=this._localPositions.length,n=p.sphereIndexCount;this._growthIndexMemory(n),this._growthPosition(p.spherePositionCount);var a=this,o=a._indices,s=a._localPositions;p.createSphereWireframe(e.distance,s,r,o,this._indicesCount),this._indicesCount+=n,this._wireframeElements.push(new S(e.entity.transform,r))},l.addDirectLightWireframe=function(e){var r=this._localPositions.length,n=p.unboundCylinderIndexCount;this._growthIndexMemory(n),this._growthPosition(p.unboundCylinderPositionCount);var a=this,o=a._indices,s=a._localPositions;p.createUnboundCylinderWireframe(1,s,r,o,this._indicesCount),this._indicesCount+=n,this._rotateAroundX(r),this._wireframeElements.push(new S(e.entity.transform,r))},l.addRendererWireframe=function(e){this._boundsIndicesCount+=p.cuboidIndexCount,this._wireframeRenderers.push(e)},l.addCollideWireframe=function(e){for(var r=e.shapes,n=0,a=r.length;n<a;n++){var o=r[n];se(o,_n)?this.addBoxColliderShapeWireframe(o):se(o,dn)?this.addSphereColliderShapeWireframe(o):se(o,mn)&&this.addCapsuleColliderShapeWireframe(o)}},l.addBoxColliderShapeWireframe=function(e){var r=e.collider.entity.transform,n=r.lossyWorldScale,a=e.position,o=e.rotation,s=e.size,c=M._tempVector,d=M._tempRotation,m=this._localPositions.length,f=p.cuboidIndexCount;this._growthIndexMemory(f),this._growthPosition(p.cuboidPositionCount);var v=this,C=v._indices,x=v._localPositions;p.createCuboidWireframe(n.x*s.x,n.y*s.y,n.z*s.z,x,m,C,this._indicesCount),D.rotationYawPitchRoll(o.x,o.y,o.z,d),this._localRotation(m,d),h.multiply(a,n,c),this._localTranslate(m,c),this._indicesCount+=f,this._wireframeElements.push(new S(r,m))},l.addSphereColliderShapeWireframe=function(e){var r=e.collider.entity.transform,n=r.lossyWorldScale,a=e.position,o=e.rotation,s=e.radius,c=M._tempVector,d=M._tempRotation,m=this._localPositions.length,f=p.sphereIndexCount;this._growthIndexMemory(f),this._growthPosition(p.spherePositionCount);var v=this,C=v._indices,x=v._localPositions;p.createSphereWireframe(Math.max(n.x,n.y,n.z)*s,x,m,C,this._indicesCount),D.rotationYawPitchRoll(o.x,o.y,o.z,d),this._localRotation(m,d),h.multiply(a,n,c),this._localTranslate(m,c),this._indicesCount+=f,this._wireframeElements.push(new S(r,m))},l.addCapsuleColliderShapeWireframe=function(e){var r=e.collider.entity.transform,n=r.lossyWorldScale,a=Math.max(n.x,n.y,n.z),o=e.radius,s=e.height,c=e.upAxis,d=e.position,m=e.rotation,f=M._tempVector,v=M._tempRotation,C=M._tempAxis,x=M._halfSqrt,P=this._localPositions.length,T=p.capsuleIndexCount;this._growthIndexMemory(T),this._growthPosition(p.capsulePositionCount);var I=this,E=I._indices,N=I._localPositions;switch(p.createCapsuleWireframe(a*o,a*s,N,P,E,this._indicesCount),c){case ue.X:C.set(0,0,x,x);break;case ue.Y:C.set(0,0,0,1);break;case ue.Z:C.set(x,0,0,x)}D.rotationYawPitchRoll(m.x,m.y,m.z,v),D.multiply(v,C,v),this._localRotation(P,v),h.multiply(d,n,f),this._localTranslate(P,f),this._indicesCount+=T,this._wireframeElements.push(new S(r,P))},l.addParticleRendererEmissionShapeWireframe=function(e){if(e.generator.emission.enabled){var r,n=e.generator.emission.shape,a=e.entity.transform;switch((r=n)==null?void 0:r.shapeType){case 0:this.addBoxParticleShapeWireframe(n,a);break;case 1:this.addCircleParticleShapeWireframe(n,a);break;case 2:this.addConeParticleShapeWireframe(n,a);break;case 3:this.addHemisphereParticleShapeWireframe(n,a);break;case 4:this.addSphereParticleShapeWireframe(n,a);break}}},l.addBoxParticleShapeWireframe=function(e,r){var n=e.size,a=this._localPositions.length,o=p.cuboidIndexCount;this._growthIndexMemory(o),this._growthPosition(p.cuboidPositionCount);var s=this,c=s._indices,d=s._localPositions;p.createCuboidWireframe(n.x,n.y,n.z,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(r,a,!1))},l.addCircleParticleShapeWireframe=function(e,r){var n=e.radius,a=this._localPositions.length,o=p.circleIndexCount;this._growthIndexMemory(o),this._growthPosition(p.circlePositionCount);var s=this,c=s._indices,d=s._localPositions;p.createCircleWireframe(n,0,new h,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(r,a,!1))},l.addConeParticleShapeWireframe=function(e,r){var n=e.radius,a=e.length,o=e.angle,s=this._localPositions.length,c=p.frustumIndexCount;this._growthIndexMemory(c),this._growthPosition(p.frustumPositionCount);var d=this,m=d._indices,f=d._localPositions;p.createFrustumWireframe(n,a,o,f,s,m,this._indicesCount),this._indicesCount+=c,this._wireframeElements.push(new S(r,s,!1))},l.addHemisphereParticleShapeWireframe=function(e,r){var n=e.radius,a=this._localPositions.length,o=p.hemisphereIndexCount;this._growthIndexMemory(o),this._growthPosition(p.hemispherePositionCount);var s=this,c=s._indices,d=s._localPositions;p.createHemisphereWireframe(n,2,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(r,a,!1))},l.addSphereParticleShapeWireframe=function(e,r){var n=e.radius,a=this._localPositions.length,o=p.sphereIndexCount;this._growthIndexMemory(o),this._growthPosition(p.spherePositionCount);var s=this,c=s._indices,d=s._localPositions;p.createSphereWireframe(n,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(r,a,!1))},l.onAwake=function(){var e=this.engine,r=new Ke(e),n=new Qe(e),a=this.entity.getComponent(B);a.castShadows=!1,a.receiveShadows=!1;var o=e._hardwareRenderer.canIUse(Je.elementIndexUint);r.addSubMesh(0,this._indicesCount,Xe.Lines),a.mesh=r,a.setMaterial(n);var s=r.bounds;s.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),s.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=r,this._material=n,this._renderer=a,this._indices=o?new Uint32Array(128):new Uint16Array(128),this._supportUint32Array=o},l.onEnable=function(){this._renderer.enabled=!0},l.onDisable=function(){this._renderer.enabled=!1},l.onLateUpdate=function(e){var r=this,n=r._mesh,a=r._localPositions,o=r._globalPositions,s=r._wireframeElements,c=r._wireframeRenderers,d=r._indices,m=a.length;o.length=m;for(var f=0,v=!1,C=0,x=s.length;C<x;C++){var P=s[C],T=P.transformRanges,I=C<x-1?s[C+1].transformRanges:m;if(P.updateFlag.flag){var E=P.transform,N=M._tempMatrix;P.isScaleIgnored?z.rotationTranslation(E.worldRotationQuaternion,E.worldPosition,N):N.copyFrom(E.worldMatrix);for(var $=T;$<I;$++){var re=a[f],Y=M._getPositionFromPool(f);h.transformCoordinate(re,N,Y),o[f]=Y,f++}P.updateFlag.flag=!1,v=!0}else f+=I-T}this._growthIndexMemory(this._boundsIndicesCount);for(var F=this._indicesCount,ae=0;ae<c.length;ae++){var rn=c[ae],xe=rn.bounds,H=M._tempVector;xe.getExtent(H);var ye=o.length;p.createCuboidWireframe(H.x*2,H.y*2,H.z*2,o,ye,d,F),xe.getCenter(H);for(var le=ye;le<o.length;le++){var on=o[le];on.add(H)}F+=p.cuboidIndexCount}(c.length>0||v)&&(n.setPositions(o),n.setIndices(this._indices),n.uploadData(!1),n.subMesh.count=F),F===0?this._renderer.setMaterial(null):this._renderer.setMaterial(this._material)},l._growthIndexMemory=function(e){var r=this._indices,n=this._indicesCount+e;if(n>r.length){var a=this._supportUint32Array?4294967295:65535;if(n>a)throw Error("The vertex count is over limit.");var o=this._supportUint32Array?new Uint32Array(n):new Uint16Array(n);o.set(r),this._indices=o}},l._growthPosition=function(e){for(var r=this._localPositions,n=0;n<e;n++)r.push(new h)},l._localTranslate=function(e,r){for(var n=this._localPositions,a=e;a<n.length;a++){var o=n[a];o.add(r)}},l._localRotation=function(e,r){for(var n=this._localPositions,a=e;a<n.length;a++){var o=n[a];h.transformByQuat(o,r,o)}},l._rotateAroundX=function(e){for(var r=this._localPositions,n=e;n<r.length;n++){var a=r[n],o=a.y,s=a.z;a.z=o,a.y=-s}},u._getPositionFromPool=function(e){var r,n=M._positionPool;return e<n.length?r=n[e]:(r=new h,M._positionPool.push(r)),r},pe(u,[{key:"baseColor",get:function(){return this._material.baseColor},set:function(e){this._material.baseColor=e}}]),u}(ee),function(){R._positionPool=[]}(),function(){R._ndcPosition=[new h(-1,1,-1),new h(1,1,-1),new h(1,-1,-1),new h(-1,-1,-1)]}(),function(){R._tempMatrix=new z}(),function(){R._tempVector=new h}(),function(){R._tempRotation=new D}(),function(){R._tempAxis=new D}(),function(){R._halfSqrt=.70710678118655}(),R);M=qe([ie(B,oe.CheckOnly)],M);var S=function(u,l,t){t===void 0&&(t=!0),this.transform=u,this.transformRanges=l,this.isScaleIgnored=t,this.updateFlag=u.registerWorldChangeFlag()},j,_=(j=function(i){Ze(u,i);function u(){return i.apply(this,arguments)}var l=u.prototype;return l.onAwake=function(){var e=this.engine,r=new Ke(e),n=new Qe(e),a=this.entity.getComponent(B);a.castShadows=!1,a.receiveShadows=!1;var o=e._hardwareRenderer.canIUse(Je.elementIndexUint);r._enableVAO=!1,r.addSubMesh(0,_._indicesCount,Xe.Lines),a.mesh=r,a.setMaterial(n);var s=r.bounds;s.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),s.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=r,this._material=n,this._renderer=a,_._indices=o?new Uint32Array(128):new Uint16Array(128),_._supportUint32Array=o},l.onLateUpdate=function(e){var r=this,n=r._mesh;_._positionCount>0?(n.setPositions(_._positions),n.setIndices(_._indices),n.uploadData(!1),n.subMesh.count=_._indicesCount,this._renderer.setMaterial(this._material)):this._renderer.setMaterial(null),_.flush()},u.drawLine=function(e,r){_._growthPosition(2),_._growthIndexMemory(2),_._indices[_._indicesCount++]=_._positionCount,_._indices[_._indicesCount++]=_._positionCount+1,_.matrix==null?(_._positions[_._positionCount++].copyFrom(e),_._positions[_._positionCount++].copyFrom(r)):(h.transformCoordinate(e,_.matrix,_._positions[_._positionCount++]),h.transformCoordinate(r,_.matrix,_._positions[_._positionCount++]))},u.drawRect=function(e,r,n,a){_._growthPosition(4),_._growthIndexMemory(8),_._indices[_._indicesCount++]=_._positionCount,_._indices[_._indicesCount++]=_._positionCount+1,_._indices[_._indicesCount++]=_._positionCount+2,_._indices[_._indicesCount++]=_._positionCount+1,_._indices[_._indicesCount++]=_._positionCount+2,_._indices[_._indicesCount++]=_._positionCount+3,_._indices[_._indicesCount++]=_._positionCount,_._indices[_._indicesCount++]=_._positionCount+3,_.matrix==null?(_._positions[_._positionCount++].copyFrom(e),_._positions[_._positionCount++].copyFrom(r),_._positions[_._positionCount++].copyFrom(n),_._positions[_._positionCount++].copyFrom(a)):(h.transformCoordinate(e,_.matrix,_._positions[_._positionCount++]),h.transformCoordinate(r,_.matrix,_._positions[_._positionCount++]),h.transformCoordinate(n,_.matrix,_._positions[_._positionCount++]),h.transformCoordinate(a,_.matrix,_._positions[_._positionCount++]))},u.drawSphere=function(e,r){var n=p.spherePositionCount,a=p.sphereIndexCount,o=_._positions;_._growthPosition(n),_._growthIndexMemory(a),p.createSphereWireframe(e,o,_._positionCount,_._indices,_._indicesCount);for(var s=0;s<n;s++){var c=o[_._positionCount+s];c.add(r),_.matrix!=null&&h.transformCoordinate(c,_.matrix,c)}_._positionCount+=n,_._indicesCount+=a},u.drawCuboid=function(e,r,n,a){var o=p.cuboidPositionCount,s=p.cuboidIndexCount,c=_._positions;_._growthPosition(o),_._growthIndexMemory(s),p.createCuboidWireframe(e,r,n,c,_._positionCount,_._indices,_._indicesCount);for(var d=0;d<o;d++){var m=c[_._positionCount+d];m.add(a),_.matrix!=null&&h.transformCoordinate(m,_.matrix,m)}_._positionCount+=o,_._indicesCount+=s},u.drawCapsule=function(e,r,n){var a=p.capsulePositionCount,o=p.capsuleIndexCount,s=_._positions;_._growthPosition(a),_._growthIndexMemory(o),p.createCapsuleWireframe(e,r,s,_._positionCount,_._indices,_._indicesCount);for(var c=0;c<a;c++){var d=s[_._positionCount+c];d.add(n),_.matrix!=null&&h.transformCoordinate(d,_.matrix,d)}_._positionCount+=a,_._indicesCount+=o},u.drawCircle=function(e,r,n){p._shift.set(0,0,0);var a=p.circlePositionCount,o=p.circleIndexCount,s=_._positions;_._growthPosition(a),_._growthIndexMemory(o),p.createCircleWireframe(e,r,p._shift,s,_._positionCount,_._indices,_._indicesCount);for(var c=0;c<a;c++){var d=s[_._positionCount+c];d.add(n),_.matrix!=null&&h.transformCoordinate(d,_.matrix,d)}_._positionCount+=a,_._indicesCount+=o},u.flush=function(){_._positionCount=0,_._indicesCount=0},u._growthIndexMemory=function(e){var r=_._indices,n=_._indicesCount+e;if(n>r.length){var a=_._supportUint32Array?4294967295:65535;if(n>a)throw Error("The vertex count is over limit.");var o=_._supportUint32Array?new Uint32Array(n):new Uint16Array(n);o.set(r),_._indices=o}},u._growthPosition=function(e){var r=_._positions,n=_._positionCount+e;if(n>r.length)for(var a=0,o=n-r.length;a<o;a++)r.push(new h)},pe(u,[{key:"color",set:function(e){this._material.baseColor.copyFrom(e)}}]),u}(ee),function(){j._positions=[]}(),function(){j._positionCount=0}(),function(){j._indicesCount=0}(),function(){j.matrix=null}(),j);_=qe([ie(B,oe.CheckOnly)],_);var Ae;(function(i){i[i.X=0]="X",i[i.Y=1]="Y",i[i.Z=2]="Z"})(Ae||(Ae={}));b.create("skeleton-viewer",`
  attribute vec3 POSITION;
  attribute vec3 NORMAL;

  uniform mat4 renderer_MVPMat;
  uniform mat4 renderer_NormalMat;

  varying vec3 v_normal;

  void main(){
      gl_Position = renderer_MVPMat * vec4( POSITION , 1.0 );;
      v_normal = normalize( mat3(renderer_NormalMat) * NORMAL );
  }`,`
      uniform vec3 u_colorMin;
      uniform vec3 u_colorMax;
      varying vec3 v_normal;

      void main(){
        float ndl = dot(v_normal, vec3(0, 1, 0)) * 0.5 + 0.5;
        vec3 diffuse = mix(u_colorMin, u_colorMax, ndl);
        gl_FragColor = vec4(diffuse, 1.0);
      }
      `);var De;(function(i){i[i.Round=0]="Round",i[i.Butt=1]="Butt",i[i.Square=2]="Square"})(De||(De={}));var We;(function(i){i[i.Miter=0]="Miter",i[i.Round=1]="Round",i[i.Bevel=2]="Bevel"})(We||(We={}));function en(i){this.message=i}en.prototype=new Error;en.prototype.name="InvalidCharacterError";var Gn=`
attribute vec2 a_pos;
attribute vec2 a_normal;
attribute vec2 a_data;

uniform mat4 renderer_MVPMat;
uniform float u_width;

varying vec2 v_origin;
varying vec2 v_position;
varying float v_direction;
varying float v_part;

void main() {
    v_direction = a_data.x;
    v_part = a_data.y;
    float layer_index = 1.0;

    v_origin = a_pos;
    vec2 position = a_pos + a_normal * u_width;
    v_position = position;
    gl_Position = renderer_MVPMat * vec4(position, 0.0, 1);
}
  `,jn=`
precision highp float;

uniform vec4 u_color;
uniform int u_join;
uniform int u_cap;
uniform float u_width;

varying vec2 v_origin;
varying vec2 v_position;
varying float v_direction;
varying float v_part;

float IS_CAP = 0.0;

void main() {
    vec4 finalColor;
    if (u_cap == 0 && v_part == IS_CAP) {
      if (distance(v_position, v_origin) > u_width) {
        discard;
      }
    }
    if (u_join == 1 && v_part > 1.0) {
      if (distance(v_position, v_origin) > u_width) {
        discard;
      }
    }

    gl_FragColor = u_color;
}

  `;b.create("line",Gn,jn);var Kn=`
attribute vec2 a_pos;
attribute vec2 a_normal;
attribute vec2 a_data;
attribute float a_lengthsofar;

uniform mat4 renderer_MVPMat;
uniform float u_width;
uniform vec2 u_dash;

varying vec2 v_origin;
varying vec2 v_position;
varying float v_direction;
varying float v_part;
varying vec2 v_tex;

void main() {
    v_direction = a_data.x;
    v_part = a_data.y;
    float layer_index = 1.0;


    v_origin = a_pos;

    float texcoord_y = 0.0;

    texcoord_y = a_lengthsofar / (u_dash.x + u_dash.y);
    if (v_direction == 1.0) {
        v_tex = vec2(1.0, texcoord_y);
    } else {
        v_tex = vec2(0.0, texcoord_y);
    }
    vec2 position = a_pos + a_normal * u_width;
    v_position = position;
    gl_Position = renderer_MVPMat * vec4(position, 0.0, 1);
}
  `,Jn=`
precision highp float;

uniform vec4 u_color;
uniform int u_join;
uniform int u_cap;
uniform float u_width;
uniform sampler2D u_texture;

varying vec2 v_origin;
varying vec2 v_position;
varying float v_direction;
varying float v_part;
varying vec2 v_tex;

float IS_CAP = 0.0;

void main() {
    vec4 finalColor;
    if (u_cap == 0 && v_part == IS_CAP) {
      if (distance(v_position, v_origin) > u_width) {
        discard;
      }
    }
    if (u_join == 1 && v_part > 1.5) {
      if (distance(v_position, v_origin) > u_width) {
        discard;
      }
    }
    vec4 textureColor = texture2D(u_texture, v_tex);
    if (textureColor.a <= 0.5) {
      gl_FragColor = vec4(u_color.rgb, 0.0);
    } else {
      gl_FragColor = u_color;
    }
}
`;b.create("dash",Kn,Jn);var ze;(function(i){i[i.Pivot=0]="Pivot",i[i.Center=1]="Center"})(ze||(ze={}));var Fe;(function(i){i[i.Local=0]="Local",i[i.Global=1]="Global"})(Fe||(Fe={}));var Le;(function(i){i[i.None=0]="None",i[i.AnchorDirty=1]="AnchorDirty",i[i.CoordinateDirty=2]="CoordinateDirty",i[i.All=3]="All"})(Le||(Le={}));(function(){new h})();(function(){new z})();(function(){new z})();(function(){new hn})();var Ue;(function(i){i[i.translate=1]="translate",i[i.rotate=2]="rotate",i[i.scale=4]="scale",i[i.all=15]="all"})(Ue||(Ue={}));var ke;(function(i){i[i.Circle=0]="Circle",i[i.Line=1]="Line",i[i.CircleTube=2]="CircleTube"})(ke||(ke={}));(function(){new D})();(function(){new h})();var Ve;(function(i){i[i.x=0]="x",i[i.y=1]="y",i[i.z=2]="z",i[i.xyz=3]="xyz",i[i.xy=4]="xy",i[i.yz=5]="yz",i[i.xz=6]="xz"})(Ve||(Ve={}));new h(1,0,0),new h(0,1,0),new h(0,0,1),new h(1,1,1),new h(1,1,0),new h(0,1,1),new h(1,0,1);new L(new h(1,0,0),0),new L(new h(0,1,0),0),new L(new h(0,0,1),0),new L(new h(0,0,0),0),new L(new h(0,0,1),0),new L(new h(1,0,0),0),new L(new h(0,1,0),0);function Xn(i,u){for(var l=0;l<u.length;l++){var t=u[l];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,t.key,t)}}function $n(i,u,l){return u&&Xn(i.prototype,u),i}function ge(i,u){return ge=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ge(i,u)}function Yn(i,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(u&&u.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),u&&ge(i,u)}function Zn(i,u,l,t){var e=arguments.length,r=e<3?u:t===null?t=Object.getOwnPropertyDescriptor(u,l):t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,u,l,t);else for(var a=i.length-1;a>=0;a--)(n=i[a])&&(r=(e<3?n(r):e>3?n(u,l,r):n(u,l))||r);return e>3&&r&&Object.defineProperty(u,l,r),r}var qn=`#define GLSLIFY 1
uniform vec3 material_OutlineColor;uniform sampler2D material_OutlineTexture;uniform vec2 material_TexSize;varying vec2 v_uv;float luminance(vec4 color){return 0.2125*color.r+0.7154*color.g+0.0721*color.b;}float sobel(){float Gx[9];Gx[0]=-1.0;Gx[1]=0.0;Gx[2]=1.0;Gx[3]=-2.0;Gx[4]=0.0;Gx[5]=2.0;Gx[6]=-1.0;Gx[7]=0.0;Gx[8]=1.0;float Gy[9];Gy[0]=-1.0;Gy[1]=-2.0;Gy[2]=-1.0;Gy[3]=0.0;Gy[4]=0.0;Gy[5]=0.0;Gy[6]=1.0;Gy[7]=2.0;Gy[8]=1.0;float texColor;float edgeX=0.0;float edgeY=0.0;vec2 uv[9];uv[0]=v_uv+material_TexSize.xy*vec2(-1,-1);uv[1]=v_uv+material_TexSize.xy*vec2(0,-1);uv[2]=v_uv+material_TexSize.xy*vec2(1,-1);uv[3]=v_uv+material_TexSize.xy*vec2(-1,0);uv[4]=v_uv+material_TexSize.xy*vec2(0,0);uv[5]=v_uv+material_TexSize.xy*vec2(1,0);uv[6]=v_uv+material_TexSize.xy*vec2(-1,1);uv[7]=v_uv+material_TexSize.xy*vec2(0,1);uv[8]=v_uv+material_TexSize.xy*vec2(1,1);for(int i=0;i<9;i++){texColor=luminance(texture2D(material_OutlineTexture,uv[i]));edgeX+=texColor*Gx[i];edgeY+=texColor*Gy[i];}return abs(edgeX)+abs(edgeY);}vec4 linearToGamma(vec4 linearIn){return vec4(pow(linearIn.rgb,vec3(1.0/2.2)),linearIn.a);}void main(){float sobelFactor=step(1.0,sobel());gl_FragColor=mix(vec4(0),vec4(material_OutlineColor,1.0),sobelFactor);
#ifndef ENGINE_IS_COLORSPACE_GAMMA
gl_FragColor=linearToGamma(gl_FragColor);
#endif
}`,Qn=`#define GLSLIFY 1
attribute vec3 POSITION;attribute vec2 TEXCOORD_0;varying vec2 v_uv;void main(){gl_Position=vec4(POSITION.xzy,1.0);gl_Position.y*=-1.0;v_uv=TEXCOORD_0;}`,et=`#define GLSLIFY 1
uniform vec4 camera_OutlineReplaceColor;void main(){gl_FragColor=camera_OutlineReplaceColor;}`,nt=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,K,k=(K=function(i){Yn(u,i);function u(t){var e;e=i.call(this,t)||this,e.isChildrenIncluded=!1,e._size=1,e._clearColor=new Z(1,1,1,1),e._replaceColor=new Z(1,0,0,1),e._outlineMainColor=new Z(.95,.35,.14,1),e._outlineSubColor=new Z(.16,.67,.89,1),e._layer=gn.Layer29,e._outlineEntities=[],e._subLineEntities=[],e._renderers=[],e._layerMap=[],e._cameraViewport=new be,e._outLineViewport=new be(0,0,1,1);var r=e.engine,n=new je(r,b.find("outline-postprocess-shader")),a=b.find("outline-replace-shader"),o=e.entity.createChild("screen"),s=o.addComponent(B);return s.receiveShadows=!1,s.castShadows=!1,o.layer=e._layer,o.isActive=!1,s.mesh=$e.createPlane(r,2,2),s.setMaterial(n),n.isTransparent=!0,e._outlineMaterial=n,e._replaceShader=a,e._screenEntity=o,e.size=e._size,e}var l=u.prototype;return l.clear=function(){this._outlineEntities.length=0},l.addEntity=function(e){this._outlineEntities.indexOf(e)===-1&&(this._outlineEntities.push(e),this.isChildrenIncluded&&this._calSublineEntites())},l.removeEntity=function(e){var r=this._outlineEntities.indexOf(e),n=this._outlineEntities.length;r>-1&&(r<n-1&&(this._outlineEntities[r]=this._outlineEntities[n-1]),this._outlineEntities.length--,this.isChildrenIncluded&&this._calSublineEntites())},l.onEndRender=function(e){var r=this._outlineEntities;r.length&&(this._renderEntity(e,this.subColor,this._subLineEntities),this._renderEntity(e,this.mainColor,r))},l.onDestroy=function(){this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy(),this._screenEntity.destroy(),this._outlineEntities=null,this._renderers=null,this._layerMap=null},l._renderEntity=function(e,r,n){var a=e.scene,o=e.clearFlags,s=e.cullingMask,c=e.enableFrustumCulling,d=a.background.solidColor,m=a.background.mode,f=this._renderers,v=this._layerMap;v.length=0;for(var C=n.length-1;C>=0;C--){var x=n[C];f.length=0,x.getComponents(B,f),f.length&&(v.push({entity:x,layer:x.layer}),x.layer=this._layer)}this._screenEntity.isActive=!1,e.renderTarget=this._renderTarget,a.background.solidColor=this._clearColor,a.background.mode=fn.SolidColor,e.cullingMask=this._layer,e.setReplacementShader(this._replaceShader),e.shaderData.setColor(k._replaceColorProp,this._replaceColor),e.render(),this._cameraViewport.copyFrom(e.viewport),this._screenEntity.isActive=!0,e.renderTarget=null,e.viewport=this._outLineViewport,e.clearFlags=vn.None,e.enableFrustumCulling=!1,e.resetReplacementShader();for(var P=v.length-1;P>=0;P--){var T=v[P],I=T.entity,E=T.layer;I.layer=E}this._outlineMaterial.shaderData.setColor(k._outlineColorProp,r),e.render(),this._screenEntity.isActive=!1,e.clearFlags=o,e.enableFrustumCulling=c,e.cullingMask=s,e.viewport=this._cameraViewport,a.background.solidColor=d,a.background.mode=m},l._calSublineEntites=function(){var e=this;this._subLineEntities.length=0;for(var r=0;r<this._outlineEntities.length;r++)k._traverseEntity(this._outlineEntities[r],function(n){e._subLineEntities.push(n)})},u._traverseEntity=function(e,r){r(e);for(var n=e.children.length-1;n>=0;n--)this._traverseEntity(e.children[n],r)},$n(u,[{key:"layer",get:function(){return this.layer},set:function(e){this._layer=e}},{key:"mainColor",get:function(){return this._outlineMainColor},set:function(e){var r=this._outlineMainColor;e!==r&&r.copyFrom(e)}},{key:"subColor",get:function(){return this._outlineSubColor},set:function(e){var r=this._outlineSubColor;e!==r&&r.copyFrom(e)}},{key:"size",get:function(){return this._size},set:function(e){e=Math.max(1,Math.min(e,6)),this._size=e,this._renderTarget&&(this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy());var r=this.engine.canvas,n=r.width,a=r.height,o=n/e,s=a/e,c=new Oe(this.engine,o,s),d=new He(this.engine,o,s,c);this._outlineMaterial.shaderData.setTexture(k._outlineTextureProp,c),this._outlineMaterial.shaderData.setVector2(k._texSizeProp,new Q(1/o,1/s)),c.wrapModeU=c.wrapModeV=pn.Clamp,this._renderTarget=d}}]),u}(ee),function(){K._outlineColorProp=g.getByName("material_OutlineColor")}(),function(){K._outlineTextureProp=g.getByName("material_OutlineTexture")}(),function(){K._texSizeProp=g.getByName("material_TexSize")}(),function(){K._replaceColorProp=g.getByName("camera_OutlineReplaceColor")}(),K);k=Zn([ie(V,oe.CheckOnly)],k);b.create("outline-postprocess-shader",Qn,qn);b.create("outline-replace-shader",nt,et);(function(){new h})();(function(){new D})();(function(){new Q})();(function(){new h})();(function(){new h})();(function(){new z})();(function(){new h})();var Be;(function(i){i[i.Wireframe=0]="Wireframe",i[i.Normal=1]="Normal",i[i.Tangent=2]="Tangent",i[i.BiTangent=3]="BiTangent"})(Be||(Be={}));var nn=`
   uniform sampler2D u_verticesSampler;
   uniform float u_verticesTextureWidth;
   uniform float u_verticesTextureHeight;
   
   uniform sampler2D u_indicesSampler;
   uniform float u_indicesTextureWidth;
   uniform float u_indicesTextureHeight;
   
   vec4 getVertexElement(float row, float col) {
        return texture2D(u_verticesSampler, vec2((col + 0.5) / u_verticesTextureWidth, (row + 0.5) / u_verticesTextureHeight));
   }
   
   vec3 getIndicesElement(float row, float col) {
        return texture2D(u_indicesSampler, vec2((col + 0.5) / u_indicesTextureWidth, (row + 0.5) / u_indicesTextureHeight )).xyz;
   }
   
   vec2 getVec2(inout vec4[ELEMENT_COUNT] rows, inout int row_index, inout int value_index) {
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float x = rows[row_index][value_index];
        
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float y = rows[row_index][value_index];
        
        return vec2(x, y);
   }
   
   vec3 getVec3(inout vec4[ELEMENT_COUNT] rows, inout int row_index, inout int value_index) {
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float x = rows[row_index][value_index];
        
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float y = rows[row_index][value_index];
        
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float z = rows[row_index][value_index];
        return vec3(x, y, z);
   }
   
   vec4 getVec4(inout vec4[ELEMENT_COUNT] rows, inout int row_index, inout int value_index) {
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float x = rows[row_index][value_index];
        
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float y = rows[row_index][value_index];
        
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float z = rows[row_index][value_index];
        
        row_index += (value_index+1)/4;
        value_index = (value_index+1)%4;
        float w = rows[row_index][value_index];
        return vec4(x, y, z, w);
   }
`,tn=`
        int row = pointIndex * ELEMENT_COUNT / int(u_verticesTextureWidth);
        int col = pointIndex * ELEMENT_COUNT % int(u_verticesTextureWidth);
        
        vec4 rows[ELEMENT_COUNT];
        for( int i = 0; i < ELEMENT_COUNT; i++ ) {
            rows[i] = getVertexElement(float(row), float(col + i));
        }
        
        vec3 POSITION = vec3(rows[0].x, rows[0].y, rows[0].z);        
        int row_index = 0;
        int value_index = 2;
#ifdef RENDERER_HAS_NORMAL 
        vec3 NORMAL = getVec3(rows, row_index, value_index);
#endif

#ifdef RENDERER_HAS_VERTEXCOLOR
        vec4 COLOR_0 = getVec4(rows, row_index, value_index);
#endif

#ifdef RENDERER_HAS_WEIGHT
        vec4 WEIGHTS_0 = getVec4(rows, row_index, value_index);
#endif

#ifdef RENDERER_HAS_JOINT
        vec4 JOINTS_0 = getVec4(rows, row_index, value_index);
#endif

#ifdef RENDERER_HAS_TANGENT
        vec4 TANGENT = getVec4(rows, row_index, value_index);
#endif

#ifdef RENDERER_HAS_UV
        vec2 TEXCOORD_0 = getVec2(rows, row_index, value_index);
#endif
`;b.create("tbnShader",`
#include <common>
   uniform float u_lineScale;
   uniform mat4 camera_VPMat;
   uniform mat4 u_worldMatrix;
   uniform mat4 u_worldNormal;

#ifdef RENDERER_HAS_SKIN
#ifdef RENDERER_USE_JOINT_TEXTURE
    uniform sampler2D renderer_JointSampler;
    uniform float renderer_JointCount;

    mat4 getJointMatrix(sampler2D smp, float index) {
        float base = index / renderer_JointCount;
        float hf = 0.5 / renderer_JointCount;
        float v = base + hf;

        vec4 m0 = texture2D(smp, vec2(0.125, v ));
        vec4 m1 = texture2D(smp, vec2(0.375, v ));
        vec4 m2 = texture2D(smp, vec2(0.625, v ));
        vec4 m3 = texture2D(smp, vec2(0.875, v ));

        return mat4(m0, m1, m2, m3);
    }
#else
    uniform mat4 renderer_JointMatrix[ RENDERER_JOINTS_NUM ];
#endif
#endif

`+nn+`

void main() {
    int pointIndex = gl_VertexID / 2;
    `+tn+`

    #include <begin_position_vert>
    #include <begin_normal_vert>
    #include <skinning_vert>

    gl_Position = u_worldMatrix * position; 
    
#if defined(SHOW_NORMAL) && defined(RENDERER_HAS_NORMAL)
    if (gl_VertexID % 2 == 1) {
        vec3 normalW = normalize( mat3(u_worldNormal) * normal.xyz );
        gl_Position.xyz += normalize(normalW) * u_lineScale;
    }
#endif

#if defined(SHOW_TANGENT) && defined(RENDERER_HAS_TANGENT)
    if (gl_VertexID % 2 == 1) {
        vec3 tangentW = normalize( mat3(u_worldNormal) * tangent.xyz );
        gl_Position.xyz += normalize(tangentW) * u_lineScale;
    }
#endif

#if defined(SHOW_BITANGENT) && defined(RENDERER_HAS_TANGENT) && defined(RENDERER_HAS_NORMAL)
    if (gl_VertexID % 2 == 1) {
        vec3 normalW = normalize( mat3(u_worldNormal) * normal.xyz );
        vec3 tangentW = normalize( mat3(u_worldNormal) * tangent.xyz );
        vec3 bitangentW = cross( normalW, tangentW ) * tangent.w;
        gl_Position.xyz += normalize(bitangentW) * u_lineScale;
    }
#endif
    
    gl_Position = camera_VPMat * gl_Position; 
}
`,`
uniform vec4 material_BaseColor;
void main() {
    gl_FragColor = material_BaseColor;
}
`);b.create("wireframeShader",`
#include <common>
   uniform float u_lineScale;
   uniform mat4 camera_VPMat;
   uniform mat4 u_worldMatrix;
   uniform mat4 u_worldNormal;

#ifdef RENDERER_HAS_SKIN
#ifdef RENDERER_USE_JOINT_TEXTURE
    uniform sampler2D renderer_JointSampler;
    uniform float renderer_JointCount;

    mat4 getJointMatrix(sampler2D smp, float index) {
        float base = index / renderer_JointCount;
        float hf = 0.5 / renderer_JointCount;
        float v = base + hf;

        vec4 m0 = texture2D(smp, vec2(0.125, v ));
        vec4 m1 = texture2D(smp, vec2(0.375, v ));
        vec4 m2 = texture2D(smp, vec2(0.625, v ));
        vec4 m3 = texture2D(smp, vec2(0.875, v ));

        return mat4(m0, m1, m2, m3);
    }
#else
    uniform mat4 renderer_JointMatrix[ RENDERER_JOINTS_NUM ];
#endif
#endif

`+nn+`

varying vec3 v_baryCenter;

void main() {
    int indicesIndex = gl_VertexID / 3;
    int indicesRow = indicesIndex / int(u_indicesTextureWidth);
    int indicesCol = indicesIndex % int(u_indicesTextureWidth);
    vec3 triangleIndices = getIndicesElement(float(indicesRow), float(indicesCol));
    int subIndex = gl_VertexID % 3;
    v_baryCenter = vec3(0.0);
    v_baryCenter[subIndex] = 1.0;
    
    int pointIndex = int(triangleIndices[subIndex]);
    `+tn+`

    #include <begin_position_vert>
    #include <begin_normal_vert>
    #include <skinning_vert>
    
    gl_Position = u_worldMatrix * position; 
    gl_Position = camera_VPMat * gl_Position; 
}
`,`
varying vec3 v_baryCenter;

float edgeFactor(){
    vec3 d = fwidth(v_baryCenter);
    vec3 a3 = smoothstep(vec3(0.0), d * 1.5, v_baryCenter);
    return min(min(a3.x, a3.y), a3.z);
}

uniform vec4 material_BaseColor;
void main() {
    if (gl_FrontFacing) {
        gl_FragColor = vec4(material_BaseColor.xyz, 1.0 - edgeFactor());
    } else {
        // fade back face
        gl_FragColor = vec4(material_BaseColor.xyz, (1.0 - edgeFactor()) * 0.3);
    }
}
`);(function(){Ye.getByName("RENDERER_HAS_WEIGHT")})();(function(){Ye.getByName("RENDERER_HAS_JOINT")})();(function(){g.getByName("u_verticesSampler")})();(function(){g.getByName("u_verticesTextureHeight")})();(function(){g.getByName("u_verticesTextureWidth")})();(function(){g.getByName("u_indicesSampler")})();(function(){g.getByName("u_indicesTextureHeight")})();(function(){g.getByName("u_indicesTextureWidth")})();(function(){g.getByName("u_lineScale")})();(function(){g.getByName("u_worldMatrix")})();(function(){g.getByName("u_worldNormal")})();var tt="1.2.0-beta.4";console.log("galacean engine toolkit version: "+tt);Ge.enable();xn.create({canvas:"canvas",graphicDeviceOptions:{powerPreference:"high-performance"}}).then(i=>{i.canvas.resizeByClientSize(),i.sceneManager.activeScene.ambientLight.diffuseIntensity=0;const u=i.sceneManager.activeScene.createRootEntity(),l=2.5,t=u.createChild("camera"),e=t.addComponent(V);e.fieldOfView=45,t.transform.setPosition(6.5*l,6.58*l,8.5*l),t.addComponent(Tn);const r=10;for(let n=0;n<r;n++){const a=u.createChild("light"+n);a.transform.setPosition(-8+n*2,5,0);const o=a.addComponent(ce);o.distance=20,o.color.set(.5,.2,.7,1);const s=a.addComponent(B);s.mesh=$e.createSphere(i,.3,32),s.setMaterial(new yn(i))}i.resourceManager.load("https://mdn.alipayobjects.com/oasis_be/afts/file/A*nceKQadLab8AAAAAAAAAAAAADkp5AQ/DamagedHelmet.glb").then(n=>{const a=u.createChild("");for(let o=0;o<10;o++)for(let s=0;s<10;s++){const c=n.instantiateSceneRoot();c.transform.setPosition(-8+o*2,2,-10+s*2),a.addChild(c)}}),i.run()});
