import"./modulepreload-polyfill.c7c6310f.js";import{f,g as T,h as an,i as A,V as m,j as Y,K as C,k as R,l as V,C as L,m as Z,n as ne,o as re,R as He,T as Oe,p as on,q as ln,L as Ge,r as sn,s as X,t as un,u as je,M as D,Q as N,v as pe,D as xe,w as le,x as ye,y as Ce,z as ae,E as Ke,G as Je,F as Xe,B as _n,H as cn,I as dn,J as mn,N as F,O as hn,U as vn,X as fn,Y as we,b as se,Z as gn,_ as $e,W as pn,P as xn,$ as yn}from"./module.17bfdd8a.js";function Pe(a,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function Cn(a,n,s){return n&&Pe(a.prototype,n),s&&Pe(a,s),a}function ue(a,n){return ue=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ue(a,n)}function wn(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&ue(a,n)}f.getByName("u_width");f.getByName("u_min");f.getByName("u_max");f.getByName("u_boxColor");f.getByName("u_borderColor");T.create("box",`
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
`);new an;new m;new Y;new m;new m;new m;new m;new m;new m;new m;new m;new m;new m;new m;new m;new A;var x;(function(a){a[a.None=0]="None",a[a.ROTATE=1]="ROTATE",a[a.ZOOM=2]="ZOOM",a[a.PAN=4]="PAN",a[a.All=7]="All"})(x||(x={}));function q(){return function(a){}}function Q(a,n,s,t){var e=arguments.length,i=e<3?n:t===null?t=Object.getOwnPropertyDescriptor(n,s):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,n,s,t);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(e<3?r(i):e>3?r(n,s,i):r(n,s))||i);return e>3&&i&&Object.defineProperty(n,s,i),i}var Te=function(){function a(){}return a.onUpdateHandler=function(s){return s.isKeyHeldDown(C.ArrowLeft)||s.isKeyHeldDown(C.KeyA)||s.isKeyHeldDown(C.ArrowUp)||s.isKeyHeldDown(C.KeyW)||s.isKeyHeldDown(C.ArrowDown)||s.isKeyHeldDown(C.KeyS)||s.isKeyHeldDown(C.ArrowRight)||s.isKeyHeldDown(C.KeyD)?x.PAN:x.None},a.onUpdateDelta=function(s,t){var e=s.movementSpeed,i=s.input;t.x=t.y=t.z=0,(i.isKeyHeldDown(C.ArrowLeft)||i.isKeyHeldDown(C.KeyA))&&(t.x-=e),(i.isKeyHeldDown(C.ArrowRight)||i.isKeyHeldDown(C.KeyD))&&(t.x+=e),(i.isKeyHeldDown(C.ArrowUp)||i.isKeyHeldDown(C.KeyW))&&(t.z-=e),(i.isKeyHeldDown(C.ArrowDown)||i.isKeyHeldDown(C.KeyS))&&(t.z+=e)},a}();Te=Q([q()],Te);var Ee;(function(a){a[a.Moving=0]="Moving",a[a.Distance=1]="Distance",a[a.None=2]="None"})(Ee||(Ee={}));var H=function(){function a(){}return a.onUpdateHandler=function(s){if(++this._frameIndex,s.pointers.length===1)if(s.isPointerHeldDown(R.Primary))this._updateType(x.ROTATE,0);else{var t=s.pointers[0].deltaPosition;(t.x!==0||t.y!==0)&&s.isPointerUp(R.Primary)?this._updateType(x.ROTATE,0):this._updateType(x.None,2)}else this._updateType(x.None,2);return this._handlerType},a.onUpdateDelta=function(s,t){var e=this,i=e._frameIndex;switch(this._deltaType){case 0:if(this._lastUsefulFrameIndex===i-1){var r=s.input.pointers[0].deltaPosition;t.x=r.x,t.y=r.y}else t.x=0,t.y=0;break}this._lastUsefulFrameIndex=i},a._updateType=function(s,t){(this._handlerType!==s||this._deltaType!==t)&&(this._handlerType=s,this._deltaType=t,this._lastUsefulFrameIndex=-1)},a}();H._deltaType=0;H._handlerType=x.None;H._frameIndex=0;H._lastUsefulFrameIndex=-1;H=Q([q()],H);var be=V.zeroTolerance,B=function(){function a(s,t,e){this.radius=s,this.phi=t,this.theta=e,this._matrix=new A,this._matrixInv=new A,this.radius=s!==void 0?s:1,this.phi=t!==void 0?t:0,this.theta=e!==void 0?e:0}var n=a.prototype;return n.makeSafe=function(){var t=Math.floor(this.phi/Math.PI);return this.phi=V.clamp(this.phi,t*Math.PI+be,(t+1)*Math.PI-be),this},n.set=function(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this},n.setYAxis=function(t){var e=a._xAxis,i=a._yAxis,r=a._zAxis;m.equals(e.set(1,0,0),i.copyFrom(t).normalize())&&e.set(0,1,0),m.cross(e,i,r),r.normalize(),m.cross(i,r,e);var l=this._matrix,o=l.elements;o[0]=e.x,o[1]=e.y,o[2]=e.z,o[4]=i.x,o[5]=i.y,o[6]=i.z,o[8]=r.x,o[9]=r.y,o[10]=r.z;var u=this._matrixInv,_=u.elements;_[0]=e.x,_[4]=e.y,_[8]=e.z,_[1]=i.x,_[5]=i.y,_[9]=i.z,_[2]=r.x,_[6]=r.y,_[10]=r.z},n.setFromVec3=function(t,e){return e===void 0&&(e=!1),t.transformNormal(this._matrixInv),this.radius=t.length(),this.radius===0?(this.theta=0,this.phi=0):e?(this.phi=2*Math.PI-Math.acos(V.clamp(t.y/this.radius,-1,1)),this.theta=Math.atan2(-t.x,-t.z)):(this.phi=Math.acos(V.clamp(t.y/this.radius,-1,1)),this.theta=Math.atan2(t.x,t.z)),this},n.setToVec3=function(t){var e=this,i=e.radius,r=e.phi,l=e.theta,o=Math.sin(r)*i;return this.phi-=Math.floor(this.phi/Math.PI/2)*Math.PI*2,t.set(o*Math.sin(l),i*Math.cos(r),o*Math.cos(l)),t.transformNormal(this._matrix),this.phi>Math.PI},a}();B._xAxis=new m;B._yAxis=new m;B._zAxis=new m;var $=function(){function a(){}return a.onUpdateHandler=function(s){return s.isKeyHeldDown(C.ArrowLeft)||s.isKeyHeldDown(C.ArrowRight)||s.isKeyHeldDown(C.ArrowUp)||s.isKeyHeldDown(C.ArrowDown)?x.PAN:x.None},a.onUpdateDelta=function(s,t){var e=s.keyPanSpeed,i=s.input;t.x=t.y=0,i.isKeyHeldDown(C.ArrowLeft)&&(t.x+=e),i.isKeyHeldDown(C.ArrowRight)&&(t.x-=e),i.isKeyHeldDown(C.ArrowUp)&&(t.y+=e),i.isKeyHeldDown(C.ArrowDown)&&(t.y-=e)},a}();$=Q([q()],$);var Se;(function(a){a[a.Moving=0]="Moving",a[a.Distance=1]="Distance",a[a.None=2]="None"})(Se||(Se={}));var W=function(){function a(){}return a.onUpdateHandler=function(s){++this._frameIndex;var t=s.pointers;switch(t.length){case 1:if(s.isPointerHeldDown(R.Secondary))this._updateType(x.PAN,0);else if(s.isPointerHeldDown(R.Auxiliary))this._updateType(x.ZOOM,0);else if(s.isPointerHeldDown(R.Primary))this._updateType(x.ROTATE,0);else{var e=s.pointers[0].deltaPosition;e.x!==0&&e.y!==0?s.isPointerUp(R.Secondary)?this._updateType(x.PAN,0):s.isPointerUp(R.Auxiliary)?this._updateType(x.ZOOM,0):s.isPointerUp(R.Primary)?this._updateType(x.ROTATE,0):this._updateType(x.None,2):this._updateType(x.None,2)}break;case 2:this._updateType(x.ZOOM,1);break;case 3:this._updateType(x.PAN,0);break;default:this._updateType(x.None,2);break}return this._handlerType},a.onUpdateDelta=function(s,t){var e=this,i=e._frameIndex;switch(this._deltaType){case 0:if(t.x=0,t.y=0,this._lastUsefulFrameIndex===i-1){for(var r=s.input.pointers,l=r.length,o=l-1;o>=0;o--){var u=r[o].deltaPosition;t.x+=u.x,t.y+=u.y}t.x/=l,t.y/=l}break;case 1:var _=s.input.pointers,c=_[0],d=_[1],h=Y.distance(c.position,d.position);this._lastUsefulFrameIndex===i-1?t.set(0,this._distanceOfPointers-h,0):t.set(0,0,0),this._distanceOfPointers=h;break}this._lastUsefulFrameIndex=i},a._updateType=function(s,t){(this._handlerType!==s||this._deltaType!==t)&&(this._handlerType=s,this._deltaType=t,this._lastUsefulFrameIndex=-1)},a}();W._deltaType=2;W._handlerType=x.None;W._frameIndex=0;W._lastUsefulFrameIndex=-1;W._distanceOfPointers=0;W=Q([q()],W);var _e=function(){function a(){}return a.onUpdateHandler=function(s){var t=s.wheelDelta;return t.x===0&&t.y===0&&t.z===0?x.None:x.ZOOM},a.onUpdateDelta=function(s,t){t.copyFrom(s.input.wheelDelta)},a}();_e=Q([q()],_e);var Pn=function(a){wn(n,a);function n(){var t;return t=a.apply(this,arguments)||this,t.inputDevices=[$,W,_e],t.autoRotate=!1,t.autoRotateSpeed=Math.PI,t.enableDamping=!0,t.rotateSpeed=1,t.zoomSpeed=1,t.keyPanSpeed=7,t.dampingFactor=.1,t.zoomFactor=.2,t.minDistance=.1,t.maxDistance=1/0,t.minZoom=0,t.maxZoom=1/0,t.minPolarAngle=1/180*Math.PI,t.maxPolarAngle=179/180*Math.PI,t.minAzimuthAngle=-1/0,t.maxAzimuthAngle=1/0,t._enableKeys=!0,t._up=new m(0,1,0),t._target=new m,t._atTheBack=!1,t._spherical=new B,t._sphericalDelta=new B,t._sphericalDump=new B,t._zoomFrag=0,t._scale=1,t._panOffset=new m,t._tempVec3=new m,t._enableHandler=x.All,t}var s=n.prototype;return s.onAwake=function(){var e=this,i=e.engine,r=e.entity;this.canvas=i.canvas,this.input=i.inputManager,this.camera=r.getComponent(L),this.cameraTransform=r.transform,this._spherical.setYAxis(this._up),this._atTheBack=!1},s.onLateUpdate=function(e){this._updateInputDelta(e),this._updateTransform()},s._updateInputDelta=function(e){for(var i=x.None,r=this,l=r._tempVec3,o=r._enableHandler,u=this,_=u.inputDevices,c=u.input,d=_.length-1;d>=0;d--){var h=_[d],v=h.onUpdateHandler(c);if(v&o)switch(i|=v,h.onUpdateDelta(this,l),v){case x.ROTATE:this._rotate(l);break;case x.ZOOM:this._zoom(l);break;case x.PAN:this._pan(l);break}}var y=this,p=y._sphericalDump,w=y._sphericalDelta;if(this.enableDamping&&(o&x.ZOOM&&i^x.ZOOM&&(this._zoomFrag*=1-this.zoomFactor),o&x.ROTATE&&i^x.ROTATE&&(w.theta=p.theta*=1-this.dampingFactor,w.phi=p.phi*=1-this.dampingFactor)),i===x.None&&this.autoRotate){var P=this.autoRotateSpeed*e;w.theta-=P}},s._rotate=function(e){var i=2*Math.PI*e.x/this.canvas.width*this.rotateSpeed;this._sphericalDelta.theta-=i;var r=2*Math.PI*e.y/this.canvas.height*this.rotateSpeed;this._sphericalDelta.phi-=r,this.enableDamping&&(this._sphericalDump.theta=-i,this._sphericalDump.phi=-r)},s._zoom=function(e){e.y>0?this._scale/=Math.pow(.95,this.zoomSpeed):e.y<0&&(this._scale*=Math.pow(.95,this.zoomSpeed))},s._pan=function(e){var i=this.cameraTransform,r=i.worldMatrix.elements,l=this.canvas.height,o=m.distance(i.position,this.target)*(this.camera.fieldOfView/2)*(Math.PI/180),u=-2*e.x*(o/l),_=2*e.y*(o/l);this._panOffset.x+=r[0]*u+r[4]*_,this._panOffset.y+=r[1]*u+r[5]*_,this._panOffset.z+=r[2]*u+r[6]*_},s._updateTransform=function(){var e=this,i=e.cameraTransform,r=e.target,l=e._tempVec3,o=e._spherical,u=e._sphericalDelta,_=e._panOffset;l.copyFrom(i.worldUp),this._atTheBack=l.y<=0,m.subtract(i.position,r,l),o.setFromVec3(l,this._atTheBack),o.theta+=u.theta,o.phi+=u.phi,o.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,o.theta)),o.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,o.phi)),o.makeSafe(),this._scale!==1&&(this._zoomFrag=o.radius*(this._scale-1)),o.radius+=this._zoomFrag,o.radius=Math.max(this.minDistance,Math.min(this.maxDistance,o.radius)),this._atTheBack=o.setToVec3(l),m.add(r.add(_),l,i.worldPosition),i.lookAt(r,l.copyFrom(this.up).scale(this._atTheBack?-1:1)),this._zoomFrag=0,this._scale=1,u.set(0,0,0),_.set(0,0,0)},Cn(n,[{key:"enableKeys",get:function(){return this._enableKeys},set:function(e){if(this._enableKeys!==e){this._enableKeys=e;var i=this.inputDevices;if(e)i.push($);else for(var r=i.length-1;r>=0;r--)if(i[r]===$){i.splice(r,1);break}}}},{key:"up",get:function(){return this._up},set:function(e){this._up.copyFrom(e),this._spherical.setYAxis(e),this._atTheBack=!1}},{key:"target",get:function(){return this._target},set:function(e){this._target.copyFrom(e),this._atTheBack=!1}},{key:"enableRotate",get:function(){return(this._enableHandler&x.ROTATE)!==0},set:function(e){e?this._enableHandler|=x.ROTATE:this._enableHandler&=~x.ROTATE}},{key:"enableZoom",get:function(){return(this._enableHandler&x.ZOOM)!==0},set:function(e){e?this._enableHandler|=x.ZOOM:this._enableHandler&=~x.ZOOM}},{key:"enablePan",get:function(){return(this._enableHandler&x.PAN)!==0},set:function(e){e?this._enableHandler|=x.PAN:this._enableHandler&=~x.PAN}}]),n}(Z);function Me(a,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function Tn(a,n,s){return n&&Me(a.prototype,n),s&&Me(a,s),a}function ce(a,n){return ce=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},ce(a,n)}function En(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&ce(a,n)}function bn(a,n,s,t){var e=arguments.length,i=e<3?n:t===null?t=Object.getOwnPropertyDescriptor(n,s):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,n,s,t);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(e<3?r(i):e>3?r(n,s,i):r(n,s))||i);return e>3&&i&&Object.defineProperty(n,s,i),i}var Sn=`#define GLSLIFY 1
#include <common>
uniform vec3 u_pickColor;void main(){gl_FragColor=vec4(u_pickColor,1.0);}`,Mn=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,In=T.create("framebuffer-picker-color",Mn,Sn),O=function(a){En(n,a);function n(){var t;return t=a.apply(this,arguments)||this,t._renderersMap=[],t._frameBufferSize=new Y(1024,1024),t}var s=n.prototype;return s.onAwake=function(){this._camera=this.entity.getComponent(L)},s.pick=function(e,i){var r=this;return new Promise(function(l,o){r._setupRenderTarget();var u=r._readPixelFromRenderTarget(e,i),_=r._getRendererByPixel(u);l(_)})},s.regionPick=function(e,i,r,l){var o=this;return new Promise(function(u,_){o._setupRenderTarget();var c=o._readPixelFromRenderTarget(e,i,r,l),d=o._getRenderersByPixel(c);u(d)})},s._checkFrameBufferSize=function(){var e=this._pickRenderTarget,i=this.engine,r=this._frameBufferSize;(!e||r.x!=e.width||r.y!=e.height)&&(e&&e.destroy(),this._pickRenderTarget=new He(i,r.x,r.y,new Oe(i,r.x,r.y,on.R8G8B8A8,!1)))},s._updateRenderersPickColor=function(e){for(var i=0,r=this._renderersMap,l=n._rootEntityRenderers,o=e.rootEntities,u=n._pickColorProperty,_=0,c=o.length;_<c;_++){o[_].getComponentsIncludeChildren(ln,l);for(var d=0,h=l.length;d<h;d++){var v=l[d],y=v.shaderData,p=y.getVector3(u);p||(p=new m,y.setVector3(u,p)),this._uniqueId2Color(++i,p),r[i]=v}}},s._setupRenderTarget=function(){this._checkFrameBufferSize();var e=this._camera;this._updateRenderersPickColor(e.scene);var i=e.renderTarget,r=e.aspectRatio;e.renderTarget=this._pickRenderTarget,e.setReplacementShader(In),e.aspectRatio=r,e.render(),e.resetReplacementShader(),e.renderTarget=i,e.resetAspectRatio()},s._readPixelFromRenderTarget=function(e,i,r,l){var o,u,_,c=this._getCoordOnRenderTarget(e,i),d=arguments.length;if(d===2)o=n._pickPixel,u=_=1;else if(d===4){var h=this._getCoordOnRenderTarget(r,l);u=Math.abs(c.x-h.x),_=Math.abs(c.y-h.y),c.x=c.x<h.x?c.x:h.x,c.y=c.y<h.y?c.y:h.y,o=new Uint8Array(u*_*4)}return this._pickRenderTarget.getColorTexture().getPixelBuffer(c.x,c.y,u,_,0,o),o},s._getCoordOnRenderTarget=function(e,i){var r=this._pickRenderTarget,l=this.engine.canvas,o=this._camera.viewport,u=(o.z-o.x)*l.width,_=(o.w-o.y)*l.height;return{x:Math.floor((e-o.x)/u*(r.width-1)),y:Math.floor((i-o.y)/_*(r.height-1))}},s._getRendererByPixel=function(e){return this._renderersMap[this._color2UniqueId(e)]},s._getRenderersByPixel=function(e){var i=this,r=[],l=this._color2UniqueIds(e);return l.forEach(function(o){i._renderersMap[o]&&r.push(i._renderersMap[o])}),r},s._uniqueId2Color=function(e,i){e>=16777215&&(Ge.warn("Framebuffer Picker encounter primitive's id greater than "+16777215),i.set(0,0,0)),i.set((e&255)/255,((e&65280)>>8)/255,((e&16711680)>>16)/255)},s._color2UniqueId=function(e){return e[0]|e[1]<<8|e[2]<<16},s._color2UniqueIds=function(e){n._pickIds.clear();for(var i=0;i<e.length;i+=4){var r=e[i]|e[i+1]<<8|e[i+2]<<16;n._pickIds.add(r)}return n._pickIds},Tn(n,[{key:"frameBufferSize",get:function(){return this._frameBufferSize},set:function(e){this._frameBufferSize=e}}]),n}(Z);O._rootEntityRenderers=[];O._pickPixel=new Uint8Array(4);O._pickIds=new Set;O._pickColorProperty=f.getByName("u_pickColor");O=bn([ne(L,re.CheckOnly)],O);function Ie(a,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function ve(a,n,s){return n&&Ie(a.prototype,n),s&&Ie(a,s),a}var g=function(){function a(){}return a.createCuboidWireframe=function(s,t,e,i,r,l,o){var u=s/2,_=t/2,c=e/2,d=r;i[d++].set(-u,_,-c),i[d++].set(u,_,-c),i[d++].set(u,_,c),i[d++].set(-u,_,c),i[d++].set(-u,-_,-c),i[d++].set(u,-_,-c),i[d++].set(u,-_,c),i[d++].set(-u,-_,c),i[d++].set(-u,_,-c),i[d++].set(-u,_,c),i[d++].set(-u,-_,c),i[d++].set(-u,-_,-c),i[d++].set(u,_,-c),i[d++].set(u,_,c),i[d++].set(u,-_,c),i[d++].set(u,-_,-c),i[d++].set(-u,_,c),i[d++].set(u,_,c),i[d++].set(u,-_,c),i[d++].set(-u,-_,c),i[d++].set(-u,_,-c),i[d++].set(u,_,-c),i[d++].set(u,-_,-c),i[d++].set(-u,-_,-c),l[o++]=r,l[o++]=r+1,l[o++]=r+1,l[o++]=r+2,l[o++]=r+2,l[o++]=r+3,l[o++]=r+3,l[o++]=r,l[o++]=r+4,l[o++]=r+5,l[o++]=r+5,l[o++]=r+6,l[o++]=r+6,l[o++]=r+7,l[o++]=r+7,l[o++]=r+4,l[o++]=r+8,l[o++]=r+9,l[o++]=r+9,l[o++]=r+10,l[o++]=r+10,l[o++]=r+11,l[o++]=r+11,l[o++]=r+8,l[o++]=r+12,l[o++]=r+13,l[o++]=r+13,l[o++]=r+14,l[o++]=r+14,l[o++]=r+15,l[o++]=r+15,l[o++]=r+12,l[o++]=r+16,l[o++]=r+17,l[o++]=r+17,l[o++]=r+18,l[o++]=r+18,l[o++]=r+19,l[o++]=r+19,l[o++]=r+16,l[o++]=r+20,l[o++]=r+21,l[o++]=r+21,l[o++]=r+22,l[o++]=r+22,l[o++]=r+23,l[o++]=r+23,l[o++]=r+20},a.createSphereWireframe=function(s,t,e,i,r){a._shift.set(0,0,0),a.createCircleWireframe(s,0,a._shift,t,e,i,r),a.createCircleWireframe(s,1,a._shift,t,e+a.circleVertexCount,i,r+a.circleIndexCount),a.createCircleWireframe(s,2,a._shift,t,e+a.circleVertexCount*2,i,r+a.circleIndexCount*2)},a.createConeWireframe=function(s,t,e,i,r,l){a._shift.set(0,-t,0),a.createCircleWireframe(s,1,a._shift,e,i,r,l);var o=i+a.circleVertexCount,u=o;e[u++].set(0,0,0),e[u++].set(-s,-t,0),e[u++].set(s,-t,0),e[u++].set(0,-t,s),e[u++].set(0,-t,-s),l+=a.circleIndexCount,r[l++]=o,r[l++]=o+1,r[l++]=o,r[l++]=o+2,r[l++]=o,r[l++]=o+3,r[l++]=o,r[l++]=o+4},a.createUnboundCylinderWireframe=function(s,t,e,i,r){var l=5;a._shift.set(0,0,0),a.createCircleWireframe(s,1,a._shift,t,e,i,r);var o=e+a.circleVertexCount,u=o;r+=a.circleIndexCount;for(var _=0;_<8;_++){var c=V.degreeToRadian(45*_);t[u++].set(s*Math.cos(c),0,s*Math.sin(c)),t[u++].set(s*Math.cos(c),-l,s*Math.sin(c)),i[r+_*2]=o+2*_,i[r+_*2+1]=o+2*_+1}},a.createCapsuleWireframe=function(s,t,e,i,r,l){var o=a.circleIndexCount,u=a.circleVertexCount,_=t/2;a._shift.set(0,_,0),a.createCircleWireframe(s,1,a._shift,e,i,r,l),a._shift.set(0,-_,0),a.createCircleWireframe(s,1,a._shift,e,i+u,r,l+o),a.createEllipticWireframe(s,_,2,e,i+u*2,r,l+o*2),a.createEllipticWireframe(s,_,0,e,i+u*3,r,l+o*2+a.ellipticIndexCount)},a.createCircleWireframe=function(s,t,e,i,r,l,o){for(var u=a.circleVertexCount,_=Math.PI*2,c=1/u,d=r,h=0;h<u;++h){var v=h*c,y=v*_;switch(t){case 0:i[d++].set(e.x,s*Math.cos(y)+e.y,s*Math.sin(y)+e.z);break;case 1:i[d++].set(s*Math.cos(y)+e.x,e.y,s*Math.sin(y)+e.z);break;case 2:i[d++].set(s*Math.cos(y)+e.x,s*Math.sin(y)+e.y,e.z);break}var p=h+r;h<u-1?(l[o+2*h]=p,l[o+2*h+1]=p+1):(l[o+2*h]=p,l[o+2*h+1]=r)}},a.createEllipticWireframe=function(s,t,e,i,r,l,o){for(var u=a.circleVertexCount,_=Math.PI*2,c=1/u,d=r,h=0;h<u;++h){var v=h*c,y=v*_;switch(e){case 0:i[d++].set(0,s*Math.sin(y)+t,s*Math.cos(y));break;case 1:i[d++].set(s*Math.cos(y),t,s*Math.sin(y));break;case 2:i[d++].set(s*Math.cos(y),s*Math.sin(y)+t,0);break}h==u/2&&(t=-t);var p=h+r;h<u-1?(l[o+2*h]=p,l[o+2*h+1]=p+1):(l[o+2*h]=p,l[o+2*h+1]=r)}},a.createFrustumWireframe=function(s,t,e,i,r,l,o){a._shift.set(0,0,0),a.createCircleWireframe(s,2,a._shift,i,r,l,o),a._shift.set(0,0,-t);var u=V.degreeToRadian(e),_=Math.tan(u),c=s+_*t;a.createCircleWireframe(c,2,a._shift,i,r+a.circleVertexCount,l,o+a.circleIndexCount);var d=r+2*a.circleVertexCount,h=d;i[h++].set(0,0,0),i[h++].set(0,0,-t),i[h++].set(s,0,0),i[h++].set(c,0,-t),i[h++].set(-s,0,0),i[h++].set(-c,0,-t),i[h++].set(0,s,0),i[h++].set(0,c,-t),i[h++].set(0,-s,0),i[h++].set(0,-c,-t),o+=2*a.circleIndexCount,l[o++]=d,l[o++]=d+1,l[o++]=d+2,l[o++]=d+3,l[o++]=d+4,l[o++]=d+5,l[o++]=d+6,l[o++]=d+7,l[o++]=d+8,l[o++]=d+9},a.createHemisphereWireframe=function(s,t,e,i,r,l){for(var o=a.circleVertexCount/2,u=Math.PI,_=1/o,c=i,d=0;d<o+1;d++){var h=d*_,v=h*u;switch(t){case 0:e[c++].set(s*Math.sin(v),0,s*Math.cos(v));break;case 1:e[c++].set(0,s*Math.sin(v),s*Math.cos(v));break;case 2:e[c++].set(-s*Math.cos(v),0,-s*Math.sin(v));break}var y=d+i;d<o&&(r[l+2*d]=y,r[l+2*d+1]=y+1)}l+=a.circleVertexCount;for(var p=0;p<o+1;p++){var w=p*_,P=w*u;switch(t){case 0:e[c++].set(s*Math.sin(P),s*Math.cos(P),0);break;case 1:e[c++].set(s*Math.cos(P),s*Math.sin(P),0);break;case 2:e[c++].set(0,-s*Math.cos(P),-s*Math.sin(P));break}var E=p+i+o+1;p<o&&(r[l+2*p]=E,r[l+2*p+1]=E+1)}a._shift.set(0,0,0),a.createCircleWireframe(s,t,a._shift,e,i+a.circleVertexCount+2,r,l+a.circleVertexCount)},ve(a,null,[{key:"cuboidIndexCount",get:function(){return 48}},{key:"cuboidPositionCount",get:function(){return 24}},{key:"sphereIndexCount",get:function(){return a.circleIndexCount*3}},{key:"spherePositionCount",get:function(){return a.circlePositionCount*3}},{key:"coneIndexCount",get:function(){return a.circleIndexCount+8}},{key:"conePositionCount",get:function(){return a.circlePositionCount+5}},{key:"unboundCylinderIndexCount",get:function(){return a.circleIndexCount+16}},{key:"unboundCylinderPositionCount",get:function(){return a.circlePositionCount+16}},{key:"capsuleIndexCount",get:function(){return(a.circleIndexCount+a.ellipticIndexCount)*2}},{key:"capsulePositionCount",get:function(){return(a.circlePositionCount+a.ellipticPositionCount)*2}},{key:"circleIndexCount",get:function(){return a.circleVertexCount*2}},{key:"circlePositionCount",get:function(){return a.circleVertexCount}},{key:"ellipticIndexCount",get:function(){return a.circleVertexCount*2}},{key:"ellipticPositionCount",get:function(){return a.circleVertexCount}},{key:"frustumIndexCount",get:function(){return a.circleIndexCount*2+10}},{key:"frustumPositionCount",get:function(){return a.circleVertexCount*2+10}},{key:"hemisphereIndexCount",get:function(){return a.circleVertexCount*2+a.circleIndexCount}},{key:"hemispherePositionCount",get:function(){return a.circleVertexCount+2+a.circlePositionCount}}]),a}();g._shift=new m;g.circleVertexCount=40;function de(a,n){return de=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},de(a,n)}function Ye(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&de(a,n)}function Ze(a,n,s,t){var e=arguments.length,i=e<3?n:t===null?t=Object.getOwnPropertyDescriptor(n,s):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,n,s,t);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(e<3?r(i):e>3?r(n,s,i):r(n,s))||i);return e>3&&i&&Object.defineProperty(n,s,i),i}f.getByName("u_lightDir");f.getByName("u_planarHeight");f.getByName("u_planarShadowColor");f.getByName("u_planarShadowFalloff");var Rn=new sn(`
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
    `);T.create("planarShadowShader",[T.find("pbr").subShaders[0].passes[0],Rn]);function Re(a,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function Nn(a,n,s){return n&&Re(a.prototype,n),s&&Re(a,s),a}function me(a,n){return me=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},me(a,n)}function An(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&me(a,n)}f.getByName("u_far");f.getByName("u_near");f.getByName("u_primaryScale");f.getByName("u_secondaryScale");f.getByName("u_gridIntensity");f.getByName("u_axisIntensity");f.getByName("u_flipProgress");f.getByName("u_fade");T.create("grid",`
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
`);var Dn=`
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
  `,Wn=`
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
  `;T.create("water-ripple",Dn,Wn);f.getByName("u_foamColor");f.getByName("u_foam_speed");f.getByName("u_foam_param");f.getByName("u_distorsion_speed");f.getByName("u_distorsion_amount");f.getByName("u_foamTex");var zn=`
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
    `,Fn=`
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
    `;T.create("water",zn,Fn);f.getByName("u_water_speed");f.getByName("u_edgeColor");f.getByName("u_edgeParam");f.getByName("u_distorsion_amount");f.getByName("u_distorsion_speed");f.getByName("u_waterTex");f.getByName("u_edgeTex");var Ln=`
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
    `,Un=`
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
    `;T.create("water-fall",Ln,Un);f.getByName("u_water_speed");f.getByName("u_waterfall_speed");f.getByName("u_distorsion_speed");f.getByName("u_edgeColor");f.getByName("u_edgeParam");f.getByName("u_distorsion_amount");f.getByName("u_waterTex");f.getByName("u_waterfallTex");f.getByName("u_edgeNoiseTex");var kn=`
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
`,Vn=`
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
`;T.create("bake-pbr",Vn,kn);f.getByName("u_lightMapTexture");f.getByName("u_lightMapIntensity");var qe=function(a){An(n,a);function n(t){var e;e=a.call(this,t,T.find("plain-color"))||this;var i=e.shaderData;return i.enableMacro("MATERIAL_OMIT_NORMAL"),i.setColor(n._baseColorProp,new X(1,1,1,1)),e.renderState.rasterState.cullMode=un.Off,e}var s=n.prototype;return s.clone=function(){var e=new n(this._engine);return this.cloneTo(e),e},Nn(n,[{key:"baseColor",get:function(){return this.shaderData.getColor(n._baseColorProp)},set:function(e){var i=this.shaderData.getColor(n._baseColorProp);e!==i&&i.copyFrom(e)}}]),n}(je);T.create("plain-color",`
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
`);function oe(a,n){return n!=null&&typeof Symbol<"u"&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](a):a instanceof n}var M=function(a){Ye(n,a);function n(){var t;return t=a.apply(this,arguments)||this,t._cameraPositions=[new m,new m,new m,new m,new m,new m,new m,new m],t._localPositions=[],t._globalPositions=[],t._indices=null,t._indicesCount=0,t._boundsIndicesCount=0,t._wireframeRenderers=[],t._wireframeElements=[],t}var s=n.prototype;return s.clear=function(){this._wireframeRenderers.length=0,this._wireframeElements.length=0,this._localPositions.length=0,this._globalPositions.length=0,this._indicesCount=0,this._mesh.subMesh.count=0},s.addEntityWireframe=function(e,i){if(i===void 0&&(i=!0),i){var r=new Array;e.getComponentsIncludeChildren(L,r);for(var l=0,o=r.length;l<o;l++)this.addCameraWireframe(r[l]);var u=r.length;e.getComponentsIncludeChildren(pe,r);for(var _=u,c=r.length;_<c;_++)this.addSpotLightWireframe(r[_]);u=r.length,e.getComponentsIncludeChildren(xe,r);for(var d=u,h=r.length;d<h;d++)this.addDirectLightWireframe(r[d]);u=r.length,e.getComponentsIncludeChildren(le,r);for(var v=u,y=r.length;v<y;v++)this.addPointLightWireframe(r[v]);u=r.length,e.getComponentsIncludeChildren(ye,r);for(var p=u,w=r.length;p<w;p++)this.addCollideWireframe(r[p]);u=r.length,e.getComponentsIncludeChildren(Ce,r);for(var P=u,E=r.length;P<E;P++)this.addParticleRendererEmissionShapeWireframe(r[P])}else{var S=e.getComponent(L);S&&this.addCameraWireframe(S);var I=e.getComponent(pe);I&&this.addSpotLightWireframe(I);var K=e.getComponent(xe);K&&this.addDirectLightWireframe(K);var ee=e.getComponent(le);ee&&this.addPointLightWireframe(ee);var J=e.getComponent(ye);J&&this.addCollideWireframe(J);var z=e.getComponent(Ce);z&&this.addParticleRendererEmissionShapeWireframe(z)}},s.addCameraWireframe=function(e){var i=e.entity.transform,r=e.projectionMatrix.clone();r.invert();var l=this._localPositions,o=l.length;this._wireframeElements.push(new b(i,o));for(var u=n._ndcPosition,_=0;_<4;_++){var c=this._cameraPositions[_];c.copyFrom(u[_]),c.transformCoordinate(r),l.push(c)}for(var d=0;d<4;d++){var h=this._cameraPositions[d+4];h.copyFrom(u[d]),h.z=1,h.transformCoordinate(r),l.push(h)}this._growthIndexMemory(24);var v=this._indices;v[this._indicesCount++]=o,v[this._indicesCount++]=o+1,v[this._indicesCount++]=o+1,v[this._indicesCount++]=o+2,v[this._indicesCount++]=o+2,v[this._indicesCount++]=o+3,v[this._indicesCount++]=o+3,v[this._indicesCount++]=o,v[this._indicesCount++]=o,v[this._indicesCount++]=o+4,v[this._indicesCount++]=o+1,v[this._indicesCount++]=o+5,v[this._indicesCount++]=o+2,v[this._indicesCount++]=o+6,v[this._indicesCount++]=o+3,v[this._indicesCount++]=o+7,v[this._indicesCount++]=o+4,v[this._indicesCount++]=o+5,v[this._indicesCount++]=o+5,v[this._indicesCount++]=o+6,v[this._indicesCount++]=o+6,v[this._indicesCount++]=o+7,v[this._indicesCount++]=o+7,v[this._indicesCount++]=o+4},s.addSpotLightWireframe=function(e){var i=e.distance,r=Math.tan(e.angle/2)*i,l=this._localPositions.length,o=g.coneIndexCount;this._growthIndexMemory(o),this._growthPosition(g.conePositionCount);var u=this,_=u._indices,c=u._localPositions;g.createConeWireframe(r,i,c,l,_,this._indicesCount),this._indicesCount+=o,this._rotateAroundX(l),this._wireframeElements.push(new b(e.entity.transform,l))},s.addPointLightWireframe=function(e){var i=this._localPositions.length,r=g.sphereIndexCount;this._growthIndexMemory(r),this._growthPosition(g.spherePositionCount);var l=this,o=l._indices,u=l._localPositions;g.createSphereWireframe(e.distance,u,i,o,this._indicesCount),this._indicesCount+=r,this._wireframeElements.push(new b(e.entity.transform,i))},s.addDirectLightWireframe=function(e){var i=this._localPositions.length,r=g.unboundCylinderIndexCount;this._growthIndexMemory(r),this._growthPosition(g.unboundCylinderPositionCount);var l=this,o=l._indices,u=l._localPositions;g.createUnboundCylinderWireframe(1,u,i,o,this._indicesCount),this._indicesCount+=r,this._rotateAroundX(i),this._wireframeElements.push(new b(e.entity.transform,i))},s.addRendererWireframe=function(e){this._boundsIndicesCount+=g.cuboidIndexCount,this._wireframeRenderers.push(e)},s.addCollideWireframe=function(e){for(var i=e.shapes,r=0,l=i.length;r<l;r++){var o=i[r];oe(o,_n)?this.addBoxColliderShapeWireframe(o):oe(o,cn)?this.addSphereColliderShapeWireframe(o):oe(o,dn)&&this.addCapsuleColliderShapeWireframe(o)}},s.addBoxColliderShapeWireframe=function(e){var i=e.collider.entity.transform,r=i.lossyWorldScale,l=e.position,o=e.rotation,u=e.size,_=n._tempVector,c=n._tempRotation,d=this._localPositions.length,h=g.cuboidIndexCount;this._growthIndexMemory(h),this._growthPosition(g.cuboidPositionCount);var v=this,y=v._indices,p=v._localPositions;g.createCuboidWireframe(r.x*u.x,r.y*u.y,r.z*u.z,p,d,y,this._indicesCount),N.rotationYawPitchRoll(o.x,o.y,o.z,c),this._localRotation(d,c),m.multiply(l,r,_),this._localTranslate(d,_),this._indicesCount+=h,this._wireframeElements.push(new b(i,d))},s.addSphereColliderShapeWireframe=function(e){var i=e.collider.entity.transform,r=i.lossyWorldScale,l=e.position,o=e.rotation,u=e.radius,_=n._tempVector,c=n._tempRotation,d=this._localPositions.length,h=g.sphereIndexCount;this._growthIndexMemory(h),this._growthPosition(g.spherePositionCount);var v=this,y=v._indices,p=v._localPositions;g.createSphereWireframe(Math.max(r.x,r.y,r.z)*u,p,d,y,this._indicesCount),N.rotationYawPitchRoll(o.x,o.y,o.z,c),this._localRotation(d,c),m.multiply(l,r,_),this._localTranslate(d,_),this._indicesCount+=h,this._wireframeElements.push(new b(i,d))},s.addCapsuleColliderShapeWireframe=function(e){var i=e.collider.entity.transform,r=i.lossyWorldScale,l=Math.max(r.x,r.y,r.z),o=e.radius,u=e.height,_=e.upAxis,c=e.position,d=e.rotation,h=n._tempVector,v=n._tempRotation,y=n._tempAxis,p=n._halfSqrt,w=this._localPositions.length,P=g.capsuleIndexCount;this._growthIndexMemory(P),this._growthPosition(g.capsulePositionCount);var E=this,S=E._indices,I=E._localPositions;switch(g.createCapsuleWireframe(l*o,l*u,I,w,S,this._indicesCount),_){case ae.X:y.set(0,0,p,p);break;case ae.Y:y.set(0,0,0,1);break;case ae.Z:y.set(p,0,0,p)}N.rotationYawPitchRoll(d.x,d.y,d.z,v),N.multiply(v,y,v),this._localRotation(w,v),m.multiply(c,r,h),this._localTranslate(w,h),this._indicesCount+=P,this._wireframeElements.push(new b(i,w))},s.addParticleRendererEmissionShapeWireframe=function(e){if(e.generator.emission.enabled){var i=e.generator.emission.shape,r=e.entity.transform;switch(i?.shapeType){case 0:this.addBoxParticleShapeWireframe(i,r);break;case 1:this.addCircleParticleShapeWireframe(i,r);break;case 2:this.addConeParticleShapeWireframe(i,r);break;case 3:this.addHemisphereParticleShapeWireframe(i,r);break;case 4:this.addSphereParticleShapeWireframe(i,r);break}}},s.addBoxParticleShapeWireframe=function(e,i){var r=e.size,l=this._localPositions.length,o=g.cuboidIndexCount;this._growthIndexMemory(o),this._growthPosition(g.cuboidPositionCount);var u=this,_=u._indices,c=u._localPositions;g.createCuboidWireframe(r.x,r.y,r.z,c,l,_,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new b(i,l,!1))},s.addCircleParticleShapeWireframe=function(e,i){var r=e.radius,l=this._localPositions.length,o=g.circleIndexCount;this._growthIndexMemory(o),this._growthPosition(g.circlePositionCount);var u=this,_=u._indices,c=u._localPositions;g.createCircleWireframe(r,0,new m,c,l,_,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new b(i,l,!1))},s.addConeParticleShapeWireframe=function(e,i){var r=e.radius,l=e.length,o=e.angle,u=this._localPositions.length,_=g.frustumIndexCount;this._growthIndexMemory(_),this._growthPosition(g.frustumPositionCount);var c=this,d=c._indices,h=c._localPositions;g.createFrustumWireframe(r,l,o,h,u,d,this._indicesCount),this._indicesCount+=_,this._wireframeElements.push(new b(i,u,!1))},s.addHemisphereParticleShapeWireframe=function(e,i){var r=e.radius,l=this._localPositions.length,o=g.hemisphereIndexCount;this._growthIndexMemory(o),this._growthPosition(g.hemispherePositionCount);var u=this,_=u._indices,c=u._localPositions;g.createHemisphereWireframe(r,2,c,l,_,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new b(i,l,!1))},s.addSphereParticleShapeWireframe=function(e,i){var r=e.radius,l=this._localPositions.length,o=g.sphereIndexCount;this._growthIndexMemory(o),this._growthPosition(g.spherePositionCount);var u=this,_=u._indices,c=u._localPositions;g.createSphereWireframe(r,c,l,_,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new b(i,l,!1))},s.onAwake=function(){var e=this.engine,i=new Ke(e),r=new qe(e),l=this.entity.getComponent(D);l.castShadows=!1,l.receiveShadows=!1;var o=e._hardwareRenderer.canIUse(Je.elementIndexUint);i.addSubMesh(0,this._indicesCount,Xe.Lines),l.mesh=i,l.setMaterial(r);var u=i.bounds;u.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),u.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=i,this._material=r,this._renderer=l,this._indices=o?new Uint32Array(128):new Uint16Array(128),this._supportUint32Array=o},s.onEnable=function(){this._renderer.enabled=!0},s.onDisable=function(){this._renderer.enabled=!1},s.onLateUpdate=function(e){var i=this,r=i._mesh,l=i._localPositions,o=i._globalPositions,u=i._wireframeElements,_=i._wireframeRenderers,c=i._indices,d=l.length;o.length=d;for(var h=0,v=!1,y=0,p=u.length;y<p;y++){var w=u[y],P=w.transformRanges,E=y<p-1?u[y+1].transformRanges:d;if(w.updateFlag.flag){var S=w.transform,I=n._tempMatrix;w.isScaleIgnored?A.rotationTranslation(S.worldRotationQuaternion,S.worldPosition,I):I.copyFrom(S.worldMatrix);for(var K=P;K<E;K++){var ee=l[h],J=n._getPositionFromPool(h);m.transformCoordinate(ee,I,J),o[h]=J,h++}w.updateFlag.flag=!1,v=!0}else h+=E-P}this._growthIndexMemory(this._boundsIndicesCount);for(var z=this._indicesCount,te=0;te<_.length;te++){var rn=_[te],fe=rn.bounds,U=n._tempVector;fe.getExtent(U);var ge=o.length;g.createCuboidWireframe(U.x*2,U.y*2,U.z*2,o,ge,c,z),fe.getCenter(U);for(var ie=ge;ie<o.length;ie++){var tn=o[ie];tn.add(U)}z+=g.cuboidIndexCount}(_.length>0||v)&&(r.setPositions(o),r.setIndices(this._indices),r.uploadData(!1),r.subMesh.count=z),z===0?this._renderer.setMaterial(null):this._renderer.setMaterial(this._material)},s._growthIndexMemory=function(e){var i=this._indices,r=this._indicesCount+e;if(r>i.length){var l=this._supportUint32Array?4294967295:65535;if(r>l)throw Error("The vertex count is over limit.");var o=this._supportUint32Array?new Uint32Array(r):new Uint16Array(r);o.set(i),this._indices=o}},s._growthPosition=function(e){for(var i=this._localPositions,r=0;r<e;r++)i.push(new m)},s._localTranslate=function(e,i){for(var r=this._localPositions,l=e;l<r.length;l++){var o=r[l];o.add(i)}},s._localRotation=function(e,i){for(var r=this._localPositions,l=e;l<r.length;l++){var o=r[l];m.transformByQuat(o,i,o)}},s._rotateAroundX=function(e){for(var i=this._localPositions,r=e;r<i.length;r++){var l=i[r],o=l.y,u=l.z;l.z=o,l.y=-u}},n._getPositionFromPool=function(e){var i,r=n._positionPool;return e<r.length?i=r[e]:(i=new m,n._positionPool.push(i)),i},ve(n,[{key:"baseColor",get:function(){return this._material.baseColor},set:function(e){this._material.baseColor=e}}]),n}(Z);M._positionPool=[];M._ndcPosition=[new m(-1,1,-1),new m(1,1,-1),new m(1,-1,-1),new m(-1,-1,-1)];M._tempMatrix=new A;M._tempVector=new m;M._tempRotation=new N;M._tempAxis=new N;M._halfSqrt=.70710678118655;M=Ze([ne(D,re.CheckOnly)],M);var b=function(n,s,t){t===void 0&&(t=!0),this.transform=n,this.transformRanges=s,this.isScaleIgnored=t,this.updateFlag=n.registerWorldChangeFlag()},G=function(a){Ye(n,a);function n(){return a.apply(this,arguments)}var s=n.prototype;return s.onAwake=function(){var e=this.engine,i=new Ke(e),r=new qe(e),l=this.entity.getComponent(D);l.castShadows=!1,l.receiveShadows=!1;var o=e._hardwareRenderer.canIUse(Je.elementIndexUint);i._enableVAO=!1,i.addSubMesh(0,n._indicesCount,Xe.Lines),l.mesh=i,l.setMaterial(r);var u=i.bounds;u.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),u.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=i,this._material=r,this._renderer=l,n._indices=o?new Uint32Array(128):new Uint16Array(128),n._supportUint32Array=o},s.onLateUpdate=function(e){var i=this,r=i._mesh;n._positionCount>0?(r.setPositions(n._positions),r.setIndices(n._indices),r.uploadData(!1),r.subMesh.count=n._indicesCount,this._renderer.setMaterial(this._material)):this._renderer.setMaterial(null),n.flush()},n.drawLine=function(e,i){n._growthPosition(2),n._growthIndexMemory(2),n._indices[n._indicesCount++]=n._positionCount,n._indices[n._indicesCount++]=n._positionCount+1,n.matrix==null?(n._positions[n._positionCount++].copyFrom(e),n._positions[n._positionCount++].copyFrom(i)):(m.transformCoordinate(e,n.matrix,n._positions[n._positionCount++]),m.transformCoordinate(i,n.matrix,n._positions[n._positionCount++]))},n.drawRect=function(e,i,r,l){n._growthPosition(4),n._growthIndexMemory(8),n._indices[n._indicesCount++]=n._positionCount,n._indices[n._indicesCount++]=n._positionCount+1,n._indices[n._indicesCount++]=n._positionCount+2,n._indices[n._indicesCount++]=n._positionCount+1,n._indices[n._indicesCount++]=n._positionCount+2,n._indices[n._indicesCount++]=n._positionCount+3,n._indices[n._indicesCount++]=n._positionCount,n._indices[n._indicesCount++]=n._positionCount+3,n.matrix==null?(n._positions[n._positionCount++].copyFrom(e),n._positions[n._positionCount++].copyFrom(i),n._positions[n._positionCount++].copyFrom(r),n._positions[n._positionCount++].copyFrom(l)):(m.transformCoordinate(e,n.matrix,n._positions[n._positionCount++]),m.transformCoordinate(i,n.matrix,n._positions[n._positionCount++]),m.transformCoordinate(r,n.matrix,n._positions[n._positionCount++]),m.transformCoordinate(l,n.matrix,n._positions[n._positionCount++]))},n.drawSphere=function(e,i){var r=g.spherePositionCount,l=g.sphereIndexCount,o=n._positions;n._growthPosition(r),n._growthIndexMemory(l),g.createSphereWireframe(e,o,n._positionCount,n._indices,n._indicesCount);for(var u=0;u<r;u++){var _=o[n._positionCount+u];_.add(i),n.matrix!=null&&m.transformCoordinate(_,n.matrix,_)}n._positionCount+=r,n._indicesCount+=l},n.drawCuboid=function(e,i,r,l){var o=g.cuboidPositionCount,u=g.cuboidIndexCount,_=n._positions;n._growthPosition(o),n._growthIndexMemory(u),g.createCuboidWireframe(e,i,r,_,n._positionCount,n._indices,n._indicesCount);for(var c=0;c<o;c++){var d=_[n._positionCount+c];d.add(l),n.matrix!=null&&m.transformCoordinate(d,n.matrix,d)}n._positionCount+=o,n._indicesCount+=u},n.drawCapsule=function(e,i,r){var l=g.capsulePositionCount,o=g.capsuleIndexCount,u=n._positions;n._growthPosition(l),n._growthIndexMemory(o),g.createCapsuleWireframe(e,i,u,n._positionCount,n._indices,n._indicesCount);for(var _=0;_<l;_++){var c=u[n._positionCount+_];c.add(r),n.matrix!=null&&m.transformCoordinate(c,n.matrix,c)}n._positionCount+=l,n._indicesCount+=o},n.drawCircle=function(e,i,r){g._shift.set(0,0,0);var l=g.circlePositionCount,o=g.circleIndexCount,u=n._positions;n._growthPosition(l),n._growthIndexMemory(o),g.createCircleWireframe(e,i,g._shift,u,n._positionCount,n._indices,n._indicesCount);for(var _=0;_<l;_++){var c=u[n._positionCount+_];c.add(r),n.matrix!=null&&m.transformCoordinate(c,n.matrix,c)}n._positionCount+=l,n._indicesCount+=o},n.flush=function(){n._positionCount=0,n._indicesCount=0},n._growthIndexMemory=function(e){var i=n._indices,r=n._indicesCount+e;if(r>i.length){var l=n._supportUint32Array?4294967295:65535;if(r>l)throw Error("The vertex count is over limit.");var o=n._supportUint32Array?new Uint32Array(r):new Uint16Array(r);o.set(i),n._indices=o}},n._growthPosition=function(e){var i=n._positions,r=n._positionCount+e;if(r>i.length)for(var l=0,o=r-i.length;l<o;l++)i.push(new m)},ve(n,[{key:"color",set:function(e){this._material.baseColor.copyFrom(e)}}]),n}(Z);G._positions=[];G._positionCount=0;G._indicesCount=0;G.matrix=null;G=Ze([ne(D,re.CheckOnly)],G);var Ne;(function(a){a[a.X=0]="X",a[a.Y=1]="Y",a[a.Z=2]="Z"})(Ne||(Ne={}));T.create("skeleton-viewer",`
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
      `);var Ae;(function(a){a[a.Round=0]="Round",a[a.Butt=1]="Butt",a[a.Square=2]="Square"})(Ae||(Ae={}));var De;(function(a){a[a.Miter=0]="Miter",a[a.Round=1]="Round",a[a.Bevel=2]="Bevel"})(De||(De={}));function Qe(a){this.message=a}Qe.prototype=new Error;Qe.prototype.name="InvalidCharacterError";var Bn=`
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
  `,Hn=`
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

  `;T.create("line",Bn,Hn);var On=`
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
  `,Gn=`
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
`;T.create("dash",On,Gn);var We;(function(a){a[a.Pivot=0]="Pivot",a[a.Center=1]="Center"})(We||(We={}));var ze;(function(a){a[a.Local=0]="Local",a[a.Global=1]="Global"})(ze||(ze={}));var Fe;(function(a){a[a.None=0]="None",a[a.AnchorDirty=1]="AnchorDirty",a[a.CoordinateDirty=2]="CoordinateDirty",a[a.All=3]="All"})(Fe||(Fe={}));new m;new A;new A;new mn;var Le;(function(a){a[a.translate=1]="translate",a[a.rotate=2]="rotate",a[a.scale=4]="scale",a[a.all=15]="all"})(Le||(Le={}));var Ue;(function(a){a[a.Circle=0]="Circle",a[a.Line=1]="Line",a[a.CircleTube=2]="CircleTube"})(Ue||(Ue={}));new N;new m;var ke;(function(a){a[a.x=0]="x",a[a.y=1]="y",a[a.z=2]="z",a[a.xyz=3]="xyz",a[a.xy=4]="xy",a[a.yz=5]="yz",a[a.xz=6]="xz"})(ke||(ke={}));new m(1,0,0),new m(0,1,0),new m(0,0,1),new m(1,1,1),new m(1,1,0),new m(0,1,1),new m(1,0,1);new F(new m(1,0,0),0),new F(new m(0,1,0),0),new F(new m(0,0,1),0),new F(new m(0,0,0),0),new F(new m(0,0,1),0),new F(new m(1,0,0),0),new F(new m(0,1,0),0);function Ve(a,n){for(var s=0;s<n.length;s++){var t=n[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function jn(a,n,s){return n&&Ve(a.prototype,n),s&&Ve(a,s),a}function he(a,n){return he=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},he(a,n)}function Kn(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&he(a,n)}function Jn(a,n,s,t){var e=arguments.length,i=e<3?n:t===null?t=Object.getOwnPropertyDescriptor(n,s):t,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,n,s,t);else for(var l=a.length-1;l>=0;l--)(r=a[l])&&(i=(e<3?r(i):e>3?r(n,s,i):r(n,s))||i);return e>3&&i&&Object.defineProperty(n,s,i),i}var Xn=`#define GLSLIFY 1
uniform vec3 material_OutlineColor;uniform sampler2D material_OutlineTexture;uniform vec2 material_TexSize;varying vec2 v_uv;float luminance(vec4 color){return 0.2125*color.r+0.7154*color.g+0.0721*color.b;}float sobel(){float Gx[9];Gx[0]=-1.0;Gx[1]=0.0;Gx[2]=1.0;Gx[3]=-2.0;Gx[4]=0.0;Gx[5]=2.0;Gx[6]=-1.0;Gx[7]=0.0;Gx[8]=1.0;float Gy[9];Gy[0]=-1.0;Gy[1]=-2.0;Gy[2]=-1.0;Gy[3]=0.0;Gy[4]=0.0;Gy[5]=0.0;Gy[6]=1.0;Gy[7]=2.0;Gy[8]=1.0;float texColor;float edgeX=0.0;float edgeY=0.0;vec2 uv[9];uv[0]=v_uv+material_TexSize.xy*vec2(-1,-1);uv[1]=v_uv+material_TexSize.xy*vec2(0,-1);uv[2]=v_uv+material_TexSize.xy*vec2(1,-1);uv[3]=v_uv+material_TexSize.xy*vec2(-1,0);uv[4]=v_uv+material_TexSize.xy*vec2(0,0);uv[5]=v_uv+material_TexSize.xy*vec2(1,0);uv[6]=v_uv+material_TexSize.xy*vec2(-1,1);uv[7]=v_uv+material_TexSize.xy*vec2(0,1);uv[8]=v_uv+material_TexSize.xy*vec2(1,1);for(int i=0;i<9;i++){texColor=luminance(texture2D(material_OutlineTexture,uv[i]));edgeX+=texColor*Gx[i];edgeY+=texColor*Gy[i];}return abs(edgeX)+abs(edgeY);}vec4 linearToGamma(vec4 linearIn){return vec4(pow(linearIn.rgb,vec3(1.0/2.2)),linearIn.a);}void main(){float sobelFactor=step(1.0,sobel());gl_FragColor=mix(vec4(0),vec4(material_OutlineColor,1.0),sobelFactor);
#ifndef ENGINE_IS_COLORSPACE_GAMMA
gl_FragColor=linearToGamma(gl_FragColor);
#endif
}`,$n=`#define GLSLIFY 1
attribute vec3 POSITION;attribute vec2 TEXCOORD_0;varying vec2 v_uv;void main(){gl_Position=vec4(POSITION.xzy,1.0);gl_Position.y*=-1.0;v_uv=TEXCOORD_0;}`,Yn=`#define GLSLIFY 1
uniform vec4 camera_OutlineReplaceColor;void main(){gl_FragColor=camera_OutlineReplaceColor;}`,Zn=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,j=function(a){Kn(n,a);function n(t){var e;e=a.call(this,t)||this,e.isChildrenIncluded=!1,e._size=1,e._clearColor=new X(1,1,1,1),e._replaceColor=new X(1,0,0,1),e._outlineMainColor=new X(.95,.35,.14,1),e._outlineSubColor=new X(.16,.67,.89,1),e._layer=fn.Layer29,e._outlineEntities=[],e._subLineEntities=[],e._renderers=[],e._layerMap=[],e._cameraViewport=new we,e._outLineViewport=new we(0,0,1,1);var i=e.engine,r=new je(i,T.find("outline-postprocess-shader")),l=T.find("outline-replace-shader"),o=e.entity.createChild("screen"),u=o.addComponent(D);return u.receiveShadows=!1,u.castShadows=!1,o.layer=e._layer,o.isActive=!1,u.mesh=se.createPlane(i,2,2),u.setMaterial(r),r.isTransparent=!0,e._outlineMaterial=r,e._replaceShader=l,e._screenEntity=o,e.size=e._size,e}var s=n.prototype;return s.clear=function(){this._outlineEntities.length=0},s.addEntity=function(e){this._outlineEntities.indexOf(e)===-1&&(this._outlineEntities.push(e),this.isChildrenIncluded&&this._calSublineEntites())},s.removeEntity=function(e){var i=this._outlineEntities.indexOf(e),r=this._outlineEntities.length;i>-1&&(i<r-1&&(this._outlineEntities[i]=this._outlineEntities[r-1]),this._outlineEntities.length--,this.isChildrenIncluded&&this._calSublineEntites())},s.onEndRender=function(e){var i=this._outlineEntities;!i.length||(this._renderEntity(e,this.subColor,this._subLineEntities),this._renderEntity(e,this.mainColor,i))},s.onDestroy=function(){this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy(),this._screenEntity.destroy(),this._outlineEntities=null,this._renderers=null,this._layerMap=null},s._renderEntity=function(e,i,r){var l=e.scene,o=e.clearFlags,u=e.cullingMask,_=e.enableFrustumCulling,c=l.background.solidColor,d=l.background.mode,h=this._renderers,v=this._layerMap;v.length=0;for(var y=r.length-1;y>=0;y--){var p=r[y];h.length=0,p.getComponents(D,h),h.length&&(v.push({entity:p,layer:p.layer}),p.layer=this._layer)}this._screenEntity.isActive=!1,e.renderTarget=this._renderTarget,l.background.solidColor=this._clearColor,l.background.mode=hn.SolidColor,e.cullingMask=this._layer,e.setReplacementShader(this._replaceShader),e.shaderData.setColor(n._replaceColorProp,this._replaceColor),e.render(),this._cameraViewport.copyFrom(e.viewport),this._screenEntity.isActive=!0,e.renderTarget=null,e.viewport=this._outLineViewport,e.clearFlags=vn.None,e.enableFrustumCulling=!1,e.resetReplacementShader();for(var w=v.length-1;w>=0;w--){var P=v[w],E=P.entity,S=P.layer;E.layer=S}this._outlineMaterial.shaderData.setColor(n._outlineColorProp,i),e.render(),this._screenEntity.isActive=!1,e.clearFlags=o,e.enableFrustumCulling=_,e.cullingMask=u,e.viewport=this._cameraViewport,l.background.solidColor=c,l.background.mode=d},s._calSublineEntites=function(){var e=this;this._subLineEntities.length=0;for(var i=0;i<this._outlineEntities.length;i++)n._traverseEntity(this._outlineEntities[i],function(r){e._subLineEntities.push(r)})},n._traverseEntity=function(e,i){i(e);for(var r=e.children.length-1;r>=0;r--)this._traverseEntity(e.children[r],i)},jn(n,[{key:"layer",get:function(){return this.layer},set:function(e){this._layer=e}},{key:"mainColor",get:function(){return this._outlineMainColor},set:function(e){var i=this._outlineMainColor;e!==i&&i.copyFrom(e)}},{key:"subColor",get:function(){return this._outlineSubColor},set:function(e){var i=this._outlineSubColor;e!==i&&i.copyFrom(e)}},{key:"size",get:function(){return this._size},set:function(e){e=Math.max(1,Math.min(e,6)),this._size=e,this._renderTarget&&(this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy());var i=this.engine.canvas,r=i.width,l=i.height,o=r/e,u=l/e,_=new Oe(this.engine,o,u),c=new He(this.engine,o,u,_);this._outlineMaterial.shaderData.setTexture(n._outlineTextureProp,_),this._outlineMaterial.shaderData.setVector2(n._texSizeProp,new Y(1/o,1/u)),_.wrapModeU=_.wrapModeV=gn.Clamp,this._renderTarget=c}}]),n}(Z);j._outlineColorProp=f.getByName("material_OutlineColor");j._outlineTextureProp=f.getByName("material_OutlineTexture");j._texSizeProp=f.getByName("material_TexSize");j._replaceColorProp=f.getByName("camera_OutlineReplaceColor");j=Jn([ne(L,re.CheckOnly)],j);T.create("outline-postprocess-shader",$n,Xn);T.create("outline-replace-shader",Zn,Yn);new m;new N;new Y;new m;new m;new A;new m;var Be;(function(a){a[a.Wireframe=0]="Wireframe",a[a.Normal=1]="Normal",a[a.Tangent=2]="Tangent",a[a.BiTangent=3]="BiTangent"})(Be||(Be={}));var en=`
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
`,nn=`
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
`;T.create("tbnShader",`
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

`+en+`

void main() {
    int pointIndex = gl_VertexID / 2;
    `+nn+`

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
`);T.create("wireframeShader",`
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

`+en+`

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
    `+nn+`

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
`);$e.getByName("RENDERER_HAS_WEIGHT");$e.getByName("RENDERER_HAS_JOINT");f.getByName("u_verticesSampler");f.getByName("u_verticesTextureHeight");f.getByName("u_verticesTextureWidth");f.getByName("u_indicesSampler");f.getByName("u_indicesTextureHeight");f.getByName("u_indicesTextureWidth");f.getByName("u_lineScale");f.getByName("u_worldMatrix");f.getByName("u_worldNormal");var qn="1.2.0-beta.3";console.log("galacean engine toolkit version: "+qn);Ge.enable();function k(a,n){return Math.random()*(n-a)+a}pn.create({canvas:"canvas",graphicDeviceOptions:{powerPreference:"high-performance"}}).then(a=>{a.canvas.resizeByClientSize();const n=a.sceneManager.activeScene.createRootEntity(),s=n.createChild("camera");s.addComponent(L),s.transform.setPosition(0,6,40),s.addComponent(Pn);const e=n.createChild().addComponent(D),i=new xn(a);e.mesh=se.createPlane(a,1e3,1e3),e.setMaterial(i);const r=10;for(let l=0;l<r;l++){const o=n.createChild("light"+l);o.transform.setPosition(k(-5,5),k(1,4),k(-5,5));const u=o.addComponent(le);u.distance=5,u.color.set(k(0,1),k(0,1),k(0,1),1);const _=o.addComponent(D);_.mesh=se.createSphere(a,.3,32),_.setMaterial(new yn(a))}a.resourceManager.load("https://mdn.alipayobjects.com/oasis_be/afts/file/A*nceKQadLab8AAAAAAAAAAAAADkp5AQ/DamagedHelmet.glb").then(l=>{const o=n.createChild(""),u=l.instantiateSceneRoot();u.transform.setPosition(0,1,0),o.addChild(u)}),a.run()});
