import"./modulepreload-polyfill.c7c6310f.js";import{S as v,b as T,B as Nt,M as L,V as d,c as ne,K as P,P as k,d as G,C as V,e as $,f as se,g as le,R as _t,T as ht,h as kt,i as Ft,L as Pe,j as Lt,k as Q,l as zt,m as dt,n as z,Q as S,o as De,D as de,p as Ne,q as ke,r as Fe,s as _e,t as ft,G as mt,u as pt,v as vt,w as Wt,x as Ht,y as Bt,z as B,E as Ut,F as Vt,H as gt,I as Le,J as Se,N as Ot,O as xt,W as Gt,U as Xt,A as Jt,X as yt,Y as jt,Z as Kt,_ as qt}from"./module.8d47bcde.js";function ze(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function $t(i,n,a){return n&&ze(i.prototype,n),a&&ze(i,a),i}function fe(i,n){return fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},fe(i,n)}function Yt(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&fe(i,n)}v.getByName("u_width");v.getByName("u_min");v.getByName("u_max");v.getByName("u_boxColor");v.getByName("u_borderColor");T.create("box",`
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
`);new Nt;new d;new ne;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new d;new L;var y;(function(i){i[i.None=0]="None",i[i.ROTATE=1]="ROTATE",i[i.ZOOM=2]="ZOOM",i[i.PAN=4]="PAN",i[i.All=7]="All"})(y||(y={}));function re(){return function(i){}}function ie(i,n,a,e){var t=arguments.length,r=t<3?n:e===null?e=Object.getOwnPropertyDescriptor(n,a):e,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,n,a,e);else for(var s=i.length-1;s>=0;s--)(o=i[s])&&(r=(t<3?o(r):t>3?o(n,a,r):o(n,a))||r);return t>3&&r&&Object.defineProperty(n,a,r),r}var We=function(){function i(){}return i.onUpdateHandler=function(a){return a.isKeyHeldDown(P.ArrowLeft)||a.isKeyHeldDown(P.KeyA)||a.isKeyHeldDown(P.ArrowUp)||a.isKeyHeldDown(P.KeyW)||a.isKeyHeldDown(P.ArrowDown)||a.isKeyHeldDown(P.KeyS)||a.isKeyHeldDown(P.ArrowRight)||a.isKeyHeldDown(P.KeyD)?y.PAN:y.None},i.onUpdateDelta=function(a,e){var t=a.movementSpeed,r=a.input;e.x=e.y=e.z=0,(r.isKeyHeldDown(P.ArrowLeft)||r.isKeyHeldDown(P.KeyA))&&(e.x-=t),(r.isKeyHeldDown(P.ArrowRight)||r.isKeyHeldDown(P.KeyD))&&(e.x+=t),(r.isKeyHeldDown(P.ArrowUp)||r.isKeyHeldDown(P.KeyW))&&(e.z-=t),(r.isKeyHeldDown(P.ArrowDown)||r.isKeyHeldDown(P.KeyS))&&(e.z+=t)},i}();We=ie([re()],We);var He;(function(i){i[i.Moving=0]="Moving",i[i.Distance=1]="Distance",i[i.None=2]="None"})(He||(He={}));var J=function(){function i(){}return i.onUpdateHandler=function(a){if(++this._frameIndex,a.pointers.length===1)if(a.isPointerHeldDown(k.Primary))this._updateType(y.ROTATE,0);else{var e=a.pointers[0].deltaPosition;(e.x!==0||e.y!==0)&&a.isPointerUp(k.Primary)?this._updateType(y.ROTATE,0):this._updateType(y.None,2)}else this._updateType(y.None,2);return this._handlerType},i.onUpdateDelta=function(a,e){var t=this,r=t._frameIndex;switch(this._deltaType){case 0:if(this._lastUsefulFrameIndex===r-1){var o=a.input.pointers[0].deltaPosition;e.x=o.x,e.y=o.y}else e.x=0,e.y=0;break}this._lastUsefulFrameIndex=r},i._updateType=function(a,e){(this._handlerType!==a||this._deltaType!==e)&&(this._handlerType=a,this._deltaType=e,this._lastUsefulFrameIndex=-1)},i}();J._deltaType=0;J._handlerType=y.None;J._frameIndex=0;J._lastUsefulFrameIndex=-1;J=ie([re()],J);var Be=G.zeroTolerance,X=function(){function i(a,e,t){this.radius=a,this.phi=e,this.theta=t,this._matrix=new L,this._matrixInv=new L,this.radius=a!==void 0?a:1,this.phi=e!==void 0?e:0,this.theta=t!==void 0?t:0}var n=i.prototype;return n.makeSafe=function(){var e=Math.floor(this.phi/Math.PI);return this.phi=G.clamp(this.phi,e*Math.PI+Be,(e+1)*Math.PI-Be),this},n.set=function(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this},n.setYAxis=function(e){var t=i._xAxis,r=i._yAxis,o=i._zAxis;d.equals(t.set(1,0,0),r.copyFrom(e).normalize())&&t.set(0,1,0),d.cross(t,r,o),o.normalize(),d.cross(r,o,t);var s=this._matrix,l=s.elements;l[0]=t.x,l[1]=t.y,l[2]=t.z,l[4]=r.x,l[5]=r.y,l[6]=r.z,l[8]=o.x,l[9]=o.y,l[10]=o.z;var c=this._matrixInv,u=c.elements;u[0]=t.x,u[4]=t.y,u[8]=t.z,u[1]=r.x,u[5]=r.y,u[9]=r.z,u[2]=o.x,u[6]=o.y,u[10]=o.z},n.setFromVec3=function(e,t){return t===void 0&&(t=!1),e.transformNormal(this._matrixInv),this.radius=e.length(),this.radius===0?(this.theta=0,this.phi=0):t?(this.phi=2*Math.PI-Math.acos(G.clamp(e.y/this.radius,-1,1)),this.theta=Math.atan2(-e.x,-e.z)):(this.phi=Math.acos(G.clamp(e.y/this.radius,-1,1)),this.theta=Math.atan2(e.x,e.z)),this},n.setToVec3=function(e){var t=this,r=t.radius,o=t.phi,s=t.theta,l=Math.sin(o)*r;return this.phi-=Math.floor(this.phi/Math.PI/2)*Math.PI*2,e.set(l*Math.sin(s),r*Math.cos(o),l*Math.cos(s)),e.transformNormal(this._matrix),this.phi>Math.PI},i}();X._xAxis=new d;X._yAxis=new d;X._zAxis=new d;var ee=function(){function i(){}return i.onUpdateHandler=function(a){return a.isKeyHeldDown(P.ArrowLeft)||a.isKeyHeldDown(P.ArrowRight)||a.isKeyHeldDown(P.ArrowUp)||a.isKeyHeldDown(P.ArrowDown)?y.PAN:y.None},i.onUpdateDelta=function(a,e){var t=a.keyPanSpeed,r=a.input;e.x=e.y=0,r.isKeyHeldDown(P.ArrowLeft)&&(e.x+=t),r.isKeyHeldDown(P.ArrowRight)&&(e.x-=t),r.isKeyHeldDown(P.ArrowUp)&&(e.y+=t),r.isKeyHeldDown(P.ArrowDown)&&(e.y-=t)},i}();ee=ie([re()],ee);var Ue;(function(i){i[i.Moving=0]="Moving",i[i.Distance=1]="Distance",i[i.None=2]="None"})(Ue||(Ue={}));var W=function(){function i(){}return i.onUpdateHandler=function(a){++this._frameIndex;var e=a.pointers;switch(e.length){case 1:if(a.isPointerHeldDown(k.Secondary))this._updateType(y.PAN,0);else if(a.isPointerHeldDown(k.Auxiliary))this._updateType(y.ZOOM,0);else if(a.isPointerHeldDown(k.Primary))this._updateType(y.ROTATE,0);else{var t=a.pointers[0].deltaPosition;t.x!==0&&t.y!==0?a.isPointerUp(k.Secondary)?this._updateType(y.PAN,0):a.isPointerUp(k.Auxiliary)?this._updateType(y.ZOOM,0):a.isPointerUp(k.Primary)?this._updateType(y.ROTATE,0):this._updateType(y.None,2):this._updateType(y.None,2)}break;case 2:this._updateType(y.ZOOM,1);break;case 3:this._updateType(y.PAN,0);break;default:this._updateType(y.None,2);break}return this._handlerType},i.onUpdateDelta=function(a,e){var t=this,r=t._frameIndex;switch(this._deltaType){case 0:if(e.x=0,e.y=0,this._lastUsefulFrameIndex===r-1){for(var o=a.input.pointers,s=o.length,l=s-1;l>=0;l--){var c=o[l].deltaPosition;e.x+=c.x,e.y+=c.y}e.x/=s,e.y/=s}break;case 1:var u=a.input.pointers,_=u[0],h=u[1],f=ne.distance(_.position,h.position);this._lastUsefulFrameIndex===r-1?e.set(0,this._distanceOfPointers-f,0):e.set(0,0,0),this._distanceOfPointers=f;break}this._lastUsefulFrameIndex=r},i._updateType=function(a,e){(this._handlerType!==a||this._deltaType!==e)&&(this._handlerType=a,this._deltaType=e,this._lastUsefulFrameIndex=-1)},i}();W._deltaType=2;W._handlerType=y.None;W._frameIndex=0;W._lastUsefulFrameIndex=-1;W._distanceOfPointers=0;W=ie([re()],W);var me=function(){function i(){}return i.onUpdateHandler=function(a){var e=a.wheelDelta;return e.x===0&&e.y===0&&e.z===0?y.None:y.ZOOM},i.onUpdateDelta=function(a,e){e.copyFrom(a.input.wheelDelta)},i}();me=ie([re()],me);var Zt=function(i){Yt(n,i);function n(){var e;return e=i.apply(this,arguments)||this,e.inputDevices=[ee,W,me],e.autoRotate=!1,e.autoRotateSpeed=Math.PI,e.enableDamping=!0,e.rotateSpeed=1,e.zoomSpeed=1,e.keyPanSpeed=7,e.dampingFactor=.1,e.zoomFactor=.2,e.minDistance=.1,e.maxDistance=1/0,e.minZoom=0,e.maxZoom=1/0,e.minPolarAngle=1/180*Math.PI,e.maxPolarAngle=179/180*Math.PI,e.minAzimuthAngle=-1/0,e.maxAzimuthAngle=1/0,e._enableKeys=!0,e._up=new d(0,1,0),e._target=new d,e._atTheBack=!1,e._spherical=new X,e._sphericalDelta=new X,e._sphericalDump=new X,e._zoomFrag=0,e._scale=1,e._panOffset=new d,e._tempVec3=new d,e._enableHandler=y.All,e}var a=n.prototype;return a.onAwake=function(){var t=this,r=t.engine,o=t.entity;this.canvas=r.canvas,this.input=r.inputManager,this.camera=o.getComponent(V),this.cameraTransform=o.transform,this._spherical.setYAxis(this._up),this._atTheBack=!1},a.onLateUpdate=function(t){this._updateInputDelta(t),this._updateTransform()},a._updateInputDelta=function(t){for(var r=y.None,o=this,s=o._tempVec3,l=o._enableHandler,c=this,u=c.inputDevices,_=c.input,h=u.length-1;h>=0;h--){var f=u[h],m=f.onUpdateHandler(_);if(m&l)switch(r|=m,f.onUpdateDelta(this,s),m){case y.ROTATE:this._rotate(s);break;case y.ZOOM:this._zoom(s);break;case y.PAN:this._pan(s);break}}var x=this,p=x._sphericalDump,C=x._sphericalDelta;if(this.enableDamping&&(l&y.ZOOM&&r^y.ZOOM&&(this._zoomFrag*=1-this.zoomFactor),l&y.ROTATE&&r^y.ROTATE&&(C.theta=p.theta*=1-this.dampingFactor,C.phi=p.phi*=1-this.dampingFactor)),r===y.None&&this.autoRotate){var w=this.autoRotateSpeed*t;C.theta-=w}},a._rotate=function(t){var r=2*Math.PI*t.x/this.canvas.width*this.rotateSpeed;this._sphericalDelta.theta-=r;var o=2*Math.PI*t.y/this.canvas.height*this.rotateSpeed;this._sphericalDelta.phi-=o,this.enableDamping&&(this._sphericalDump.theta=-r,this._sphericalDump.phi=-o)},a._zoom=function(t){t.y>0?this._scale/=Math.pow(.95,this.zoomSpeed):t.y<0&&(this._scale*=Math.pow(.95,this.zoomSpeed))},a._pan=function(t){var r=this.cameraTransform,o=r.worldMatrix.elements,s=this.canvas.height,l=d.distance(r.position,this.target)*(this.camera.fieldOfView/2)*(Math.PI/180),c=-2*t.x*(l/s),u=2*t.y*(l/s);this._panOffset.x+=o[0]*c+o[4]*u,this._panOffset.y+=o[1]*c+o[5]*u,this._panOffset.z+=o[2]*c+o[6]*u},a._updateTransform=function(){var t=this,r=t.cameraTransform,o=t.target,s=t._tempVec3,l=t._spherical,c=t._sphericalDelta,u=t._panOffset;s.copyFrom(r.worldUp),this._atTheBack=s.y<=0,d.subtract(r.position,o,s),l.setFromVec3(s,this._atTheBack),l.theta+=c.theta,l.phi+=c.phi,l.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,l.theta)),l.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,l.phi)),l.makeSafe(),this._scale!==1&&(this._zoomFrag=l.radius*(this._scale-1)),l.radius+=this._zoomFrag,l.radius=Math.max(this.minDistance,Math.min(this.maxDistance,l.radius)),this._atTheBack=l.setToVec3(s),d.add(o.add(u),s,r.worldPosition),r.lookAt(o,s.copyFrom(this.up).scale(this._atTheBack?-1:1)),this._zoomFrag=0,this._scale=1,c.set(0,0,0),u.set(0,0,0)},$t(n,[{key:"enableKeys",get:function(){return this._enableKeys},set:function(t){if(this._enableKeys!==t){this._enableKeys=t;var r=this.inputDevices;if(t)r.push(ee);else for(var o=r.length-1;o>=0;o--)if(r[o]===ee){r.splice(o,1);break}}}},{key:"up",get:function(){return this._up},set:function(t){this._up.copyFrom(t),this._spherical.setYAxis(t),this._atTheBack=!1}},{key:"target",get:function(){return this._target},set:function(t){this._target.copyFrom(t),this._atTheBack=!1}},{key:"enableRotate",get:function(){return(this._enableHandler&y.ROTATE)!==0},set:function(t){t?this._enableHandler|=y.ROTATE:this._enableHandler&=~y.ROTATE}},{key:"enableZoom",get:function(){return(this._enableHandler&y.ZOOM)!==0},set:function(t){t?this._enableHandler|=y.ZOOM:this._enableHandler&=~y.ZOOM}},{key:"enablePan",get:function(){return(this._enableHandler&y.PAN)!==0},set:function(t){t?this._enableHandler|=y.PAN:this._enableHandler&=~y.PAN}}]),n}($);function Ve(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function Qt(i,n,a){return n&&Ve(i.prototype,n),a&&Ve(i,a),i}function pe(i,n){return pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},pe(i,n)}function en(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&pe(i,n)}function tn(i,n,a,e){var t=arguments.length,r=t<3?n:e===null?e=Object.getOwnPropertyDescriptor(n,a):e,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,n,a,e);else for(var s=i.length-1;s>=0;s--)(o=i[s])&&(r=(t<3?o(r):t>3?o(n,a,r):o(n,a))||r);return t>3&&r&&Object.defineProperty(n,a,r),r}var nn=`#define GLSLIFY 1
#include <common>
uniform vec3 u_pickColor;void main(){gl_FragColor=vec4(u_pickColor,1.0);}`,rn=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,an=T.create("framebuffer-picker-color",rn,nn),j=function(i){en(n,i);function n(){var e;return e=i.apply(this,arguments)||this,e._renderersMap=[],e._frameBufferSize=new ne(1024,1024),e}var a=n.prototype;return a.onAwake=function(){this._camera=this.entity.getComponent(V)},a.pick=function(t,r){var o=this;return new Promise(function(s,l){o._setupRenderTarget();var c=o._readPixelFromRenderTarget(t,r),u=o._getRendererByPixel(c);s(u)})},a.regionPick=function(t,r,o,s){var l=this;return new Promise(function(c,u){l._setupRenderTarget();var _=l._readPixelFromRenderTarget(t,r,o,s),h=l._getRenderersByPixel(_);c(h)})},a._checkFrameBufferSize=function(){var t=this._pickRenderTarget,r=this.engine,o=this._frameBufferSize;(!t||o.x!=t.width||o.y!=t.height)&&(t&&t.destroy(),this._pickRenderTarget=new _t(r,o.x,o.y,new ht(r,o.x,o.y,kt.R8G8B8A8,!1)))},a._updateRenderersPickColor=function(t){for(var r=0,o=this._renderersMap,s=n._rootEntityRenderers,l=t.rootEntities,c=n._pickColorProperty,u=0,_=l.length;u<_;u++){l[u].getComponentsIncludeChildren(Ft,s);for(var h=0,f=s.length;h<f;h++){var m=s[h],x=m.shaderData,p=x.getVector3(c);p||(p=new d,x.setVector3(c,p)),this._uniqueId2Color(++r,p),o[r]=m}}},a._setupRenderTarget=function(){this._checkFrameBufferSize();var t=this._camera;this._updateRenderersPickColor(t.scene);var r=t.renderTarget,o=t.aspectRatio;t.renderTarget=this._pickRenderTarget,t.setReplacementShader(an),t.aspectRatio=o,t.render(),t.resetReplacementShader(),t.renderTarget=r,t.resetAspectRatio()},a._readPixelFromRenderTarget=function(t,r,o,s){var l,c,u,_=this._getCoordOnRenderTarget(t,r),h=arguments.length;if(h===2)l=n._pickPixel,c=u=1;else if(h===4){var f=this._getCoordOnRenderTarget(o,s);c=Math.abs(_.x-f.x),u=Math.abs(_.y-f.y),_.x=_.x<f.x?_.x:f.x,_.y=_.y<f.y?_.y:f.y,l=new Uint8Array(c*u*4)}return this._pickRenderTarget.getColorTexture().getPixelBuffer(_.x,_.y,c,u,0,l),l},a._getCoordOnRenderTarget=function(t,r){var o=this._pickRenderTarget,s=this.engine.canvas,l=this._camera.viewport,c=(l.z-l.x)*s.width,u=(l.w-l.y)*s.height;return{x:Math.floor((t-l.x)/c*(o.width-1)),y:Math.floor((r-l.y)/u*(o.height-1))}},a._getRendererByPixel=function(t){return this._renderersMap[this._color2UniqueId(t)]},a._getRenderersByPixel=function(t){var r=this,o=[],s=this._color2UniqueIds(t);return s.forEach(function(l){r._renderersMap[l]&&o.push(r._renderersMap[l])}),o},a._uniqueId2Color=function(t,r){t>=16777215&&(Pe.warn("Framebuffer Picker encounter primitive's id greater than "+16777215),r.set(0,0,0)),r.set((t&255)/255,((t&65280)>>8)/255,((t&16711680)>>16)/255)},a._color2UniqueId=function(t){return t[0]|t[1]<<8|t[2]<<16},a._color2UniqueIds=function(t){n._pickIds.clear();for(var r=0;r<t.length;r+=4){var o=t[r]|t[r+1]<<8|t[r+2]<<16;n._pickIds.add(o)}return n._pickIds},Qt(n,[{key:"frameBufferSize",get:function(){return this._frameBufferSize},set:function(t){this._frameBufferSize=t}}]),n}($);j._rootEntityRenderers=[];j._pickPixel=new Uint8Array(4);j._pickIds=new Set;j._pickColorProperty=v.getByName("u_pickColor");j=tn([se(V,le.CheckOnly)],j);function Oe(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function be(i,n,a){return n&&Oe(i.prototype,n),a&&Oe(i,a),i}var g=function(){function i(){}return i.createCuboidWireframe=function(a,e,t,r,o,s,l){var c=a/2,u=e/2,_=t/2,h=o;r[h++].set(-c,u,-_),r[h++].set(c,u,-_),r[h++].set(c,u,_),r[h++].set(-c,u,_),r[h++].set(-c,-u,-_),r[h++].set(c,-u,-_),r[h++].set(c,-u,_),r[h++].set(-c,-u,_),r[h++].set(-c,u,-_),r[h++].set(-c,u,_),r[h++].set(-c,-u,_),r[h++].set(-c,-u,-_),r[h++].set(c,u,-_),r[h++].set(c,u,_),r[h++].set(c,-u,_),r[h++].set(c,-u,-_),r[h++].set(-c,u,_),r[h++].set(c,u,_),r[h++].set(c,-u,_),r[h++].set(-c,-u,_),r[h++].set(-c,u,-_),r[h++].set(c,u,-_),r[h++].set(c,-u,-_),r[h++].set(-c,-u,-_),s[l++]=o,s[l++]=o+1,s[l++]=o+1,s[l++]=o+2,s[l++]=o+2,s[l++]=o+3,s[l++]=o+3,s[l++]=o,s[l++]=o+4,s[l++]=o+5,s[l++]=o+5,s[l++]=o+6,s[l++]=o+6,s[l++]=o+7,s[l++]=o+7,s[l++]=o+4,s[l++]=o+8,s[l++]=o+9,s[l++]=o+9,s[l++]=o+10,s[l++]=o+10,s[l++]=o+11,s[l++]=o+11,s[l++]=o+8,s[l++]=o+12,s[l++]=o+13,s[l++]=o+13,s[l++]=o+14,s[l++]=o+14,s[l++]=o+15,s[l++]=o+15,s[l++]=o+12,s[l++]=o+16,s[l++]=o+17,s[l++]=o+17,s[l++]=o+18,s[l++]=o+18,s[l++]=o+19,s[l++]=o+19,s[l++]=o+16,s[l++]=o+20,s[l++]=o+21,s[l++]=o+21,s[l++]=o+22,s[l++]=o+22,s[l++]=o+23,s[l++]=o+23,s[l++]=o+20},i.createSphereWireframe=function(a,e,t,r,o){i._shift.set(0,0,0),i.createCircleWireframe(a,0,i._shift,e,t,r,o),i.createCircleWireframe(a,1,i._shift,e,t+i.circleVertexCount,r,o+i.circleIndexCount),i.createCircleWireframe(a,2,i._shift,e,t+i.circleVertexCount*2,r,o+i.circleIndexCount*2)},i.createConeWireframe=function(a,e,t,r,o,s){i._shift.set(0,-e,0),i.createCircleWireframe(a,1,i._shift,t,r,o,s);var l=r+i.circleVertexCount,c=l;t[c++].set(0,0,0),t[c++].set(-a,-e,0),t[c++].set(a,-e,0),t[c++].set(0,-e,a),t[c++].set(0,-e,-a),s+=i.circleIndexCount,o[s++]=l,o[s++]=l+1,o[s++]=l,o[s++]=l+2,o[s++]=l,o[s++]=l+3,o[s++]=l,o[s++]=l+4},i.createUnboundCylinderWireframe=function(a,e,t,r,o){var s=5;i._shift.set(0,0,0),i.createCircleWireframe(a,1,i._shift,e,t,r,o);var l=t+i.circleVertexCount,c=l;o+=i.circleIndexCount;for(var u=0;u<8;u++){var _=G.degreeToRadian(45*u);e[c++].set(a*Math.cos(_),0,a*Math.sin(_)),e[c++].set(a*Math.cos(_),-s,a*Math.sin(_)),r[o+u*2]=l+2*u,r[o+u*2+1]=l+2*u+1}},i.createCapsuleWireframe=function(a,e,t,r,o,s){var l=i.circleIndexCount,c=i.circleVertexCount,u=e/2;i._shift.set(0,u,0),i.createCircleWireframe(a,1,i._shift,t,r,o,s),i._shift.set(0,-u,0),i.createCircleWireframe(a,1,i._shift,t,r+c,o,s+l),i.createEllipticWireframe(a,u,2,t,r+c*2,o,s+l*2),i.createEllipticWireframe(a,u,0,t,r+c*3,o,s+l*2+i.ellipticIndexCount)},i.createCircleWireframe=function(a,e,t,r,o,s,l){for(var c=i.circleVertexCount,u=Math.PI*2,_=1/c,h=o,f=0;f<c;++f){var m=f*_,x=m*u;switch(e){case 0:r[h++].set(t.x,a*Math.cos(x)+t.y,a*Math.sin(x)+t.z);break;case 1:r[h++].set(a*Math.cos(x)+t.x,t.y,a*Math.sin(x)+t.z);break;case 2:r[h++].set(a*Math.cos(x)+t.x,a*Math.sin(x)+t.y,t.z);break}var p=f+o;f<c-1?(s[l+2*f]=p,s[l+2*f+1]=p+1):(s[l+2*f]=p,s[l+2*f+1]=o)}},i.createEllipticWireframe=function(a,e,t,r,o,s,l){for(var c=i.circleVertexCount,u=Math.PI*2,_=1/c,h=o,f=0;f<c;++f){var m=f*_,x=m*u;switch(t){case 0:r[h++].set(0,a*Math.sin(x)+e,a*Math.cos(x));break;case 1:r[h++].set(a*Math.cos(x),e,a*Math.sin(x));break;case 2:r[h++].set(a*Math.cos(x),a*Math.sin(x)+e,0);break}f==c/2&&(e=-e);var p=f+o;f<c-1?(s[l+2*f]=p,s[l+2*f+1]=p+1):(s[l+2*f]=p,s[l+2*f+1]=o)}},i.createFrustumWireframe=function(a,e,t,r,o,s,l){i._shift.set(0,0,0),i.createCircleWireframe(a,2,i._shift,r,o,s,l),i._shift.set(0,0,-e);var c=G.degreeToRadian(t),u=Math.tan(c),_=a+u*e;i.createCircleWireframe(_,2,i._shift,r,o+i.circleVertexCount,s,l+i.circleIndexCount);var h=o+2*i.circleVertexCount,f=h;r[f++].set(0,0,0),r[f++].set(0,0,-e),r[f++].set(a,0,0),r[f++].set(_,0,-e),r[f++].set(-a,0,0),r[f++].set(-_,0,-e),r[f++].set(0,a,0),r[f++].set(0,_,-e),r[f++].set(0,-a,0),r[f++].set(0,-_,-e),l+=2*i.circleIndexCount,s[l++]=h,s[l++]=h+1,s[l++]=h+2,s[l++]=h+3,s[l++]=h+4,s[l++]=h+5,s[l++]=h+6,s[l++]=h+7,s[l++]=h+8,s[l++]=h+9},i.createHemisphereWireframe=function(a,e,t,r,o,s){for(var l=i.circleVertexCount/2,c=Math.PI,u=1/l,_=r,h=0;h<l+1;h++){var f=h*u,m=f*c;switch(e){case 0:t[_++].set(a*Math.sin(m),0,a*Math.cos(m));break;case 1:t[_++].set(0,a*Math.sin(m),a*Math.cos(m));break;case 2:t[_++].set(-a*Math.cos(m),0,-a*Math.sin(m));break}var x=h+r;h<l&&(o[s+2*h]=x,o[s+2*h+1]=x+1)}s+=i.circleVertexCount;for(var p=0;p<l+1;p++){var C=p*u,w=C*c;switch(e){case 0:t[_++].set(a*Math.sin(w),a*Math.cos(w),0);break;case 1:t[_++].set(a*Math.cos(w),a*Math.sin(w),0);break;case 2:t[_++].set(0,-a*Math.cos(w),-a*Math.sin(w));break}var E=p+r+l+1;p<l&&(o[s+2*p]=E,o[s+2*p+1]=E+1)}i._shift.set(0,0,0),i.createCircleWireframe(a,e,i._shift,t,r+i.circleVertexCount+2,o,s+i.circleVertexCount)},be(i,null,[{key:"cuboidIndexCount",get:function(){return 48}},{key:"cuboidPositionCount",get:function(){return 24}},{key:"sphereIndexCount",get:function(){return i.circleIndexCount*3}},{key:"spherePositionCount",get:function(){return i.circlePositionCount*3}},{key:"coneIndexCount",get:function(){return i.circleIndexCount+8}},{key:"conePositionCount",get:function(){return i.circlePositionCount+5}},{key:"unboundCylinderIndexCount",get:function(){return i.circleIndexCount+16}},{key:"unboundCylinderPositionCount",get:function(){return i.circlePositionCount+16}},{key:"capsuleIndexCount",get:function(){return(i.circleIndexCount+i.ellipticIndexCount)*2}},{key:"capsulePositionCount",get:function(){return(i.circlePositionCount+i.ellipticPositionCount)*2}},{key:"circleIndexCount",get:function(){return i.circleVertexCount*2}},{key:"circlePositionCount",get:function(){return i.circleVertexCount}},{key:"ellipticIndexCount",get:function(){return i.circleVertexCount*2}},{key:"ellipticPositionCount",get:function(){return i.circleVertexCount}},{key:"frustumIndexCount",get:function(){return i.circleIndexCount*2+10}},{key:"frustumPositionCount",get:function(){return i.circleVertexCount*2+10}},{key:"hemisphereIndexCount",get:function(){return i.circleVertexCount*2+i.circleIndexCount}},{key:"hemispherePositionCount",get:function(){return i.circleVertexCount+2+i.circlePositionCount}}]),i}();g._shift=new d;g.circleVertexCount=40;function ve(i,n){return ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ve(i,n)}function Ct(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&ve(i,n)}function wt(i,n,a,e){var t=arguments.length,r=t<3?n:e===null?e=Object.getOwnPropertyDescriptor(n,a):e,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,n,a,e);else for(var s=i.length-1;s>=0;s--)(o=i[s])&&(r=(t<3?o(r):t>3?o(n,a,r):o(n,a))||r);return t>3&&r&&Object.defineProperty(n,a,r),r}v.getByName("u_lightDir");v.getByName("u_planarHeight");v.getByName("u_planarShadowColor");v.getByName("u_planarShadowFalloff");var on=new Lt(`
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
    `);T.create("planarShadowShader",[T.find("pbr").subShaders[0].passes[0],on]);function Ge(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function sn(i,n,a){return n&&Ge(i.prototype,n),a&&Ge(i,a),i}function ge(i,n){return ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ge(i,n)}function ln(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&ge(i,n)}v.getByName("u_far");v.getByName("u_near");v.getByName("u_primaryScale");v.getByName("u_secondaryScale");v.getByName("u_gridIntensity");v.getByName("u_axisIntensity");v.getByName("u_flipProgress");v.getByName("u_fade");T.create("grid",`
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
`);var cn=`
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
  `,un=`
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
  `;T.create("water-ripple",cn,un);v.getByName("u_foamColor");v.getByName("u_foam_speed");v.getByName("u_foam_param");v.getByName("u_distorsion_speed");v.getByName("u_distorsion_amount");v.getByName("u_foamTex");var _n=`
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
    `,hn=`
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
    `;T.create("water",_n,hn);v.getByName("u_water_speed");v.getByName("u_edgeColor");v.getByName("u_edgeParam");v.getByName("u_distorsion_amount");v.getByName("u_distorsion_speed");v.getByName("u_waterTex");v.getByName("u_edgeTex");var dn=`
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
    `,fn=`
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
    `;T.create("water-fall",dn,fn);v.getByName("u_water_speed");v.getByName("u_waterfall_speed");v.getByName("u_distorsion_speed");v.getByName("u_edgeColor");v.getByName("u_edgeParam");v.getByName("u_distorsion_amount");v.getByName("u_waterTex");v.getByName("u_waterfallTex");v.getByName("u_edgeNoiseTex");var mn=`
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
`,pn=`
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
`;T.create("bake-pbr",pn,mn);v.getByName("u_lightMapTexture");v.getByName("u_lightMapIntensity");var Pt=function(i){ln(n,i);function n(e){var t;t=i.call(this,e,T.find("plain-color"))||this;var r=t.shaderData;return r.enableMacro("MATERIAL_OMIT_NORMAL"),r.setColor(n._baseColorProp,new Q(1,1,1,1)),t.renderState.rasterState.cullMode=zt.Off,t}var a=n.prototype;return a.clone=function(){var t=new n(this._engine);return this.cloneTo(t),t},sn(n,[{key:"baseColor",get:function(){return this.shaderData.getColor(n._baseColorProp)},set:function(t){var r=this.shaderData.getColor(n._baseColorProp);t!==r&&r.copyFrom(t)}}]),n}(dt);T.create("plain-color",`
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
`);function he(i,n){return n!=null&&typeof Symbol<"u"&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](i):i instanceof n}var R=function(i){Ct(n,i);function n(){var e;return e=i.apply(this,arguments)||this,e._cameraPositions=[new d,new d,new d,new d,new d,new d,new d,new d],e._localPositions=[],e._globalPositions=[],e._indices=null,e._indicesCount=0,e._boundsIndicesCount=0,e._wireframeRenderers=[],e._wireframeElements=[],e}var a=n.prototype;return a.clear=function(){this._wireframeRenderers.length=0,this._wireframeElements.length=0,this._localPositions.length=0,this._globalPositions.length=0,this._indicesCount=0,this._mesh.subMesh.count=0},a.addEntityWireframe=function(t,r){if(r===void 0&&(r=!0),r){var o=new Array;t.getComponentsIncludeChildren(V,o);for(var s=0,l=o.length;s<l;s++)this.addCameraWireframe(o[s]);var c=o.length;t.getComponentsIncludeChildren(De,o);for(var u=c,_=o.length;u<_;u++)this.addSpotLightWireframe(o[u]);c=o.length,t.getComponentsIncludeChildren(de,o);for(var h=c,f=o.length;h<f;h++)this.addDirectLightWireframe(o[h]);c=o.length,t.getComponentsIncludeChildren(Ne,o);for(var m=c,x=o.length;m<x;m++)this.addPointLightWireframe(o[m]);c=o.length,t.getComponentsIncludeChildren(ke,o);for(var p=c,C=o.length;p<C;p++)this.addCollideWireframe(o[p]);c=o.length,t.getComponentsIncludeChildren(Fe,o);for(var w=c,E=o.length;w<E;w++)this.addParticleRendererEmissionShapeWireframe(o[w])}else{var I=t.getComponent(V);I&&this.addCameraWireframe(I);var N=t.getComponent(De);N&&this.addSpotLightWireframe(N);var Y=t.getComponent(de);Y&&this.addDirectLightWireframe(Y);var ae=t.getComponent(Ne);ae&&this.addPointLightWireframe(ae);var Z=t.getComponent(ke);Z&&this.addCollideWireframe(Z);var H=t.getComponent(Fe);H&&this.addParticleRendererEmissionShapeWireframe(H)}},a.addCameraWireframe=function(t){var r=t.entity.transform,o=t.projectionMatrix.clone();o.invert();var s=this._localPositions,l=s.length;this._wireframeElements.push(new A(r,l));for(var c=n._ndcPosition,u=0;u<4;u++){var _=this._cameraPositions[u];_.copyFrom(c[u]),_.transformCoordinate(o),s.push(_)}for(var h=0;h<4;h++){var f=this._cameraPositions[h+4];f.copyFrom(c[h]),f.z=1,f.transformCoordinate(o),s.push(f)}this._growthIndexMemory(24);var m=this._indices;m[this._indicesCount++]=l,m[this._indicesCount++]=l+1,m[this._indicesCount++]=l+1,m[this._indicesCount++]=l+2,m[this._indicesCount++]=l+2,m[this._indicesCount++]=l+3,m[this._indicesCount++]=l+3,m[this._indicesCount++]=l,m[this._indicesCount++]=l,m[this._indicesCount++]=l+4,m[this._indicesCount++]=l+1,m[this._indicesCount++]=l+5,m[this._indicesCount++]=l+2,m[this._indicesCount++]=l+6,m[this._indicesCount++]=l+3,m[this._indicesCount++]=l+7,m[this._indicesCount++]=l+4,m[this._indicesCount++]=l+5,m[this._indicesCount++]=l+5,m[this._indicesCount++]=l+6,m[this._indicesCount++]=l+6,m[this._indicesCount++]=l+7,m[this._indicesCount++]=l+7,m[this._indicesCount++]=l+4},a.addSpotLightWireframe=function(t){var r=t.distance,o=Math.tan(t.angle/2)*r,s=this._localPositions.length,l=g.coneIndexCount;this._growthIndexMemory(l),this._growthPosition(g.conePositionCount);var c=this,u=c._indices,_=c._localPositions;g.createConeWireframe(o,r,_,s,u,this._indicesCount),this._indicesCount+=l,this._rotateAroundX(s),this._wireframeElements.push(new A(t.entity.transform,s))},a.addPointLightWireframe=function(t){var r=this._localPositions.length,o=g.sphereIndexCount;this._growthIndexMemory(o),this._growthPosition(g.spherePositionCount);var s=this,l=s._indices,c=s._localPositions;g.createSphereWireframe(t.distance,c,r,l,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new A(t.entity.transform,r))},a.addDirectLightWireframe=function(t){var r=this._localPositions.length,o=g.unboundCylinderIndexCount;this._growthIndexMemory(o),this._growthPosition(g.unboundCylinderPositionCount);var s=this,l=s._indices,c=s._localPositions;g.createUnboundCylinderWireframe(1,c,r,l,this._indicesCount),this._indicesCount+=o,this._rotateAroundX(r),this._wireframeElements.push(new A(t.entity.transform,r))},a.addRendererWireframe=function(t){this._boundsIndicesCount+=g.cuboidIndexCount,this._wireframeRenderers.push(t)},a.addCollideWireframe=function(t){for(var r=t.shapes,o=0,s=r.length;o<s;o++){var l=r[o];he(l,vt)?this.addBoxColliderShapeWireframe(l):he(l,Wt)?this.addSphereColliderShapeWireframe(l):he(l,Ht)&&this.addCapsuleColliderShapeWireframe(l)}},a.addBoxColliderShapeWireframe=function(t){var r=t.collider.entity.transform,o=r.lossyWorldScale,s=t.position,l=t.rotation,c=t.size,u=n._tempVector,_=n._tempRotation,h=this._localPositions.length,f=g.cuboidIndexCount;this._growthIndexMemory(f),this._growthPosition(g.cuboidPositionCount);var m=this,x=m._indices,p=m._localPositions;g.createCuboidWireframe(o.x*c.x,o.y*c.y,o.z*c.z,p,h,x,this._indicesCount),S.rotationYawPitchRoll(l.x,l.y,l.z,_),this._localRotation(h,_),d.multiply(s,o,u),this._localTranslate(h,u),this._indicesCount+=f,this._wireframeElements.push(new A(r,h))},a.addSphereColliderShapeWireframe=function(t){var r=t.collider.entity.transform,o=r.lossyWorldScale,s=t.position,l=t.rotation,c=t.radius,u=n._tempVector,_=n._tempRotation,h=this._localPositions.length,f=g.sphereIndexCount;this._growthIndexMemory(f),this._growthPosition(g.spherePositionCount);var m=this,x=m._indices,p=m._localPositions;g.createSphereWireframe(Math.max(o.x,o.y,o.z)*c,p,h,x,this._indicesCount),S.rotationYawPitchRoll(l.x,l.y,l.z,_),this._localRotation(h,_),d.multiply(s,o,u),this._localTranslate(h,u),this._indicesCount+=f,this._wireframeElements.push(new A(r,h))},a.addCapsuleColliderShapeWireframe=function(t){var r=t.collider.entity.transform,o=r.lossyWorldScale,s=Math.max(o.x,o.y,o.z),l=t.radius,c=t.height,u=t.upAxis,_=t.position,h=t.rotation,f=n._tempVector,m=n._tempRotation,x=n._tempAxis,p=n._halfSqrt,C=this._localPositions.length,w=g.capsuleIndexCount;this._growthIndexMemory(w),this._growthPosition(g.capsulePositionCount);var E=this,I=E._indices,N=E._localPositions;switch(g.createCapsuleWireframe(s*l,s*c,N,C,I,this._indicesCount),u){case _e.X:x.set(0,0,p,p);break;case _e.Y:x.set(0,0,0,1);break;case _e.Z:x.set(p,0,0,p)}S.rotationYawPitchRoll(h.x,h.y,h.z,m),S.multiply(m,x,m),this._localRotation(C,m),d.multiply(_,o,f),this._localTranslate(C,f),this._indicesCount+=w,this._wireframeElements.push(new A(r,C))},a.addParticleRendererEmissionShapeWireframe=function(t){if(t.generator.emission.enabled){var r=t.generator.emission.shape,o=t.entity.transform;switch(r?.shapeType){case 0:this.addBoxParticleShapeWireframe(r,o);break;case 1:this.addCircleParticleShapeWireframe(r,o);break;case 2:this.addConeParticleShapeWireframe(r,o);break;case 3:this.addHemisphereParticleShapeWireframe(r,o);break;case 4:this.addSphereParticleShapeWireframe(r,o);break}}},a.addBoxParticleShapeWireframe=function(t,r){var o=t.size,s=this._localPositions.length,l=g.cuboidIndexCount;this._growthIndexMemory(l),this._growthPosition(g.cuboidPositionCount);var c=this,u=c._indices,_=c._localPositions;g.createCuboidWireframe(o.x,o.y,o.z,_,s,u,this._indicesCount),this._indicesCount+=l,this._wireframeElements.push(new A(r,s,!1))},a.addCircleParticleShapeWireframe=function(t,r){var o=t.radius,s=this._localPositions.length,l=g.circleIndexCount;this._growthIndexMemory(l),this._growthPosition(g.circlePositionCount);var c=this,u=c._indices,_=c._localPositions;g.createCircleWireframe(o,0,new d,_,s,u,this._indicesCount),this._indicesCount+=l,this._wireframeElements.push(new A(r,s,!1))},a.addConeParticleShapeWireframe=function(t,r){var o=t.radius,s=t.length,l=t.angle,c=this._localPositions.length,u=g.frustumIndexCount;this._growthIndexMemory(u),this._growthPosition(g.frustumPositionCount);var _=this,h=_._indices,f=_._localPositions;g.createFrustumWireframe(o,s,l,f,c,h,this._indicesCount),this._indicesCount+=u,this._wireframeElements.push(new A(r,c,!1))},a.addHemisphereParticleShapeWireframe=function(t,r){var o=t.radius,s=this._localPositions.length,l=g.hemisphereIndexCount;this._growthIndexMemory(l),this._growthPosition(g.hemispherePositionCount);var c=this,u=c._indices,_=c._localPositions;g.createHemisphereWireframe(o,2,_,s,u,this._indicesCount),this._indicesCount+=l,this._wireframeElements.push(new A(r,s,!1))},a.addSphereParticleShapeWireframe=function(t,r){var o=t.radius,s=this._localPositions.length,l=g.sphereIndexCount;this._growthIndexMemory(l),this._growthPosition(g.spherePositionCount);var c=this,u=c._indices,_=c._localPositions;g.createSphereWireframe(o,_,s,u,this._indicesCount),this._indicesCount+=l,this._wireframeElements.push(new A(r,s,!1))},a.onAwake=function(){var t=this.engine,r=new ft(t),o=new Pt(t),s=this.entity.getComponent(z);s.castShadows=!1,s.receiveShadows=!1;var l=t._hardwareRenderer.canIUse(mt.elementIndexUint);r.addSubMesh(0,this._indicesCount,pt.Lines),s.mesh=r,s.setMaterial(o);var c=r.bounds;c.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),c.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=r,this._material=o,this._renderer=s,this._indices=l?new Uint32Array(128):new Uint16Array(128),this._supportUint32Array=l},a.onEnable=function(){this._renderer.enabled=!0},a.onDisable=function(){this._renderer.enabled=!1},a.onLateUpdate=function(t){var r=this,o=r._mesh,s=r._localPositions,l=r._globalPositions,c=r._wireframeElements,u=r._wireframeRenderers,_=r._indices,h=s.length;l.length=h;for(var f=0,m=!1,x=0,p=c.length;x<p;x++){var C=c[x],w=C.transformRanges,E=x<p-1?c[x+1].transformRanges:h;if(C.updateFlag.flag){var I=C.transform,N=n._tempMatrix;C.isScaleIgnored?L.rotationTranslation(I.worldRotationQuaternion,I.worldPosition,N):N.copyFrom(I.worldMatrix);for(var Y=w;Y<E;Y++){var ae=s[f],Z=n._getPositionFromPool(f);d.transformCoordinate(ae,N,Z),l[f]=Z,f++}C.updateFlag.flag=!1,m=!0}else f+=E-w}this._growthIndexMemory(this._boundsIndicesCount);for(var H=this._indicesCount,ce=0;ce<u.length;ce++){var Rt=u[ce],Ae=Rt.bounds,O=n._tempVector;Ae.getExtent(O);var Re=l.length;g.createCuboidWireframe(O.x*2,O.y*2,O.z*2,l,Re,_,H),Ae.getCenter(O);for(var ue=Re;ue<l.length;ue++){var Dt=l[ue];Dt.add(O)}H+=g.cuboidIndexCount}(u.length>0||m)&&(o.setPositions(l),o.setIndices(this._indices),o.uploadData(!1),o.subMesh.count=H),H===0?this._renderer.setMaterial(null):this._renderer.setMaterial(this._material)},a._growthIndexMemory=function(t){var r=this._indices,o=this._indicesCount+t;if(o>r.length){var s=this._supportUint32Array?4294967295:65535;if(o>s)throw Error("The vertex count is over limit.");var l=this._supportUint32Array?new Uint32Array(o):new Uint16Array(o);l.set(r),this._indices=l}},a._growthPosition=function(t){for(var r=this._localPositions,o=0;o<t;o++)r.push(new d)},a._localTranslate=function(t,r){for(var o=this._localPositions,s=t;s<o.length;s++){var l=o[s];l.add(r)}},a._localRotation=function(t,r){for(var o=this._localPositions,s=t;s<o.length;s++){var l=o[s];d.transformByQuat(l,r,l)}},a._rotateAroundX=function(t){for(var r=this._localPositions,o=t;o<r.length;o++){var s=r[o],l=s.y,c=s.z;s.z=l,s.y=-c}},n._getPositionFromPool=function(t){var r,o=n._positionPool;return t<o.length?r=o[t]:(r=new d,n._positionPool.push(r)),r},be(n,[{key:"baseColor",get:function(){return this._material.baseColor},set:function(t){this._material.baseColor=t}}]),n}($);R._positionPool=[];R._ndcPosition=[new d(-1,1,-1),new d(1,1,-1),new d(1,-1,-1),new d(-1,-1,-1)];R._tempMatrix=new L;R._tempVector=new d;R._tempRotation=new S;R._tempAxis=new S;R._halfSqrt=.70710678118655;R=wt([se(z,le.CheckOnly)],R);var A=function(n,a,e){e===void 0&&(e=!0),this.transform=n,this.transformRanges=a,this.isScaleIgnored=e,this.updateFlag=n.registerWorldChangeFlag()},K=function(i){Ct(n,i);function n(){return i.apply(this,arguments)}var a=n.prototype;return a.onAwake=function(){var t=this.engine,r=new ft(t),o=new Pt(t),s=this.entity.getComponent(z);s.castShadows=!1,s.receiveShadows=!1;var l=t._hardwareRenderer.canIUse(mt.elementIndexUint);r._enableVAO=!1,r.addSubMesh(0,n._indicesCount,pt.Lines),s.mesh=r,s.setMaterial(o);var c=r.bounds;c.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),c.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=r,this._material=o,this._renderer=s,n._indices=l?new Uint32Array(128):new Uint16Array(128),n._supportUint32Array=l},a.onLateUpdate=function(t){var r=this,o=r._mesh;n._positionCount>0?(o.setPositions(n._positions),o.setIndices(n._indices),o.uploadData(!1),o.subMesh.count=n._indicesCount,this._renderer.setMaterial(this._material)):this._renderer.setMaterial(null),n.flush()},n.drawLine=function(t,r){n._growthPosition(2),n._growthIndexMemory(2),n._indices[n._indicesCount++]=n._positionCount,n._indices[n._indicesCount++]=n._positionCount+1,n.matrix==null?(n._positions[n._positionCount++].copyFrom(t),n._positions[n._positionCount++].copyFrom(r)):(d.transformCoordinate(t,n.matrix,n._positions[n._positionCount++]),d.transformCoordinate(r,n.matrix,n._positions[n._positionCount++]))},n.drawRect=function(t,r,o,s){n._growthPosition(4),n._growthIndexMemory(8),n._indices[n._indicesCount++]=n._positionCount,n._indices[n._indicesCount++]=n._positionCount+1,n._indices[n._indicesCount++]=n._positionCount+2,n._indices[n._indicesCount++]=n._positionCount+1,n._indices[n._indicesCount++]=n._positionCount+2,n._indices[n._indicesCount++]=n._positionCount+3,n._indices[n._indicesCount++]=n._positionCount,n._indices[n._indicesCount++]=n._positionCount+3,n.matrix==null?(n._positions[n._positionCount++].copyFrom(t),n._positions[n._positionCount++].copyFrom(r),n._positions[n._positionCount++].copyFrom(o),n._positions[n._positionCount++].copyFrom(s)):(d.transformCoordinate(t,n.matrix,n._positions[n._positionCount++]),d.transformCoordinate(r,n.matrix,n._positions[n._positionCount++]),d.transformCoordinate(o,n.matrix,n._positions[n._positionCount++]),d.transformCoordinate(s,n.matrix,n._positions[n._positionCount++]))},n.drawSphere=function(t,r){var o=g.spherePositionCount,s=g.sphereIndexCount,l=n._positions;n._growthPosition(o),n._growthIndexMemory(s),g.createSphereWireframe(t,l,n._positionCount,n._indices,n._indicesCount);for(var c=0;c<o;c++){var u=l[n._positionCount+c];u.add(r),n.matrix!=null&&d.transformCoordinate(u,n.matrix,u)}n._positionCount+=o,n._indicesCount+=s},n.drawCuboid=function(t,r,o,s){var l=g.cuboidPositionCount,c=g.cuboidIndexCount,u=n._positions;n._growthPosition(l),n._growthIndexMemory(c),g.createCuboidWireframe(t,r,o,u,n._positionCount,n._indices,n._indicesCount);for(var _=0;_<l;_++){var h=u[n._positionCount+_];h.add(s),n.matrix!=null&&d.transformCoordinate(h,n.matrix,h)}n._positionCount+=l,n._indicesCount+=c},n.drawCapsule=function(t,r,o){var s=g.capsulePositionCount,l=g.capsuleIndexCount,c=n._positions;n._growthPosition(s),n._growthIndexMemory(l),g.createCapsuleWireframe(t,r,c,n._positionCount,n._indices,n._indicesCount);for(var u=0;u<s;u++){var _=c[n._positionCount+u];_.add(o),n.matrix!=null&&d.transformCoordinate(_,n.matrix,_)}n._positionCount+=s,n._indicesCount+=l},n.drawCircle=function(t,r,o){g._shift.set(0,0,0);var s=g.circlePositionCount,l=g.circleIndexCount,c=n._positions;n._growthPosition(s),n._growthIndexMemory(l),g.createCircleWireframe(t,r,g._shift,c,n._positionCount,n._indices,n._indicesCount);for(var u=0;u<s;u++){var _=c[n._positionCount+u];_.add(o),n.matrix!=null&&d.transformCoordinate(_,n.matrix,_)}n._positionCount+=s,n._indicesCount+=l},n.flush=function(){n._positionCount=0,n._indicesCount=0},n._growthIndexMemory=function(t){var r=n._indices,o=n._indicesCount+t;if(o>r.length){var s=n._supportUint32Array?4294967295:65535;if(o>s)throw Error("The vertex count is over limit.");var l=n._supportUint32Array?new Uint32Array(o):new Uint16Array(o);l.set(r),n._indices=l}},n._growthPosition=function(t){var r=n._positions,o=n._positionCount+t;if(o>r.length)for(var s=0,l=o-r.length;s<l;s++)r.push(new d)},be(n,[{key:"color",set:function(t){this._material.baseColor.copyFrom(t)}}]),n}($);K._positions=[];K._positionCount=0;K._indicesCount=0;K.matrix=null;K=wt([se(z,le.CheckOnly)],K);var Xe;(function(i){i[i.X=0]="X",i[i.Y=1]="Y",i[i.Z=2]="Z"})(Xe||(Xe={}));T.create("skeleton-viewer",`
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
      `);var Je;(function(i){i[i.Round=0]="Round",i[i.Butt=1]="Butt",i[i.Square=2]="Square"})(Je||(Je={}));var je;(function(i){i[i.Miter=0]="Miter",i[i.Round=1]="Round",i[i.Bevel=2]="Bevel"})(je||(je={}));function St(i){this.message=i}St.prototype=new Error;St.prototype.name="InvalidCharacterError";var vn=`
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
  `,gn=`
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

  `;T.create("line",vn,gn);var xn=`
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
  `,yn=`
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
`;T.create("dash",xn,yn);var Ke;(function(i){i[i.Pivot=0]="Pivot",i[i.Center=1]="Center"})(Ke||(Ke={}));var qe;(function(i){i[i.Local=0]="Local",i[i.Global=1]="Global"})(qe||(qe={}));var $e;(function(i){i[i.None=0]="None",i[i.AnchorDirty=1]="AnchorDirty",i[i.CoordinateDirty=2]="CoordinateDirty",i[i.All=3]="All"})($e||($e={}));new d;new L;new L;new Bt;var Ye;(function(i){i[i.translate=1]="translate",i[i.rotate=2]="rotate",i[i.scale=4]="scale",i[i.all=15]="all"})(Ye||(Ye={}));var Ze;(function(i){i[i.Circle=0]="Circle",i[i.Line=1]="Line",i[i.CircleTube=2]="CircleTube"})(Ze||(Ze={}));new S;new d;var Qe;(function(i){i[i.x=0]="x",i[i.y=1]="y",i[i.z=2]="z",i[i.xyz=3]="xyz",i[i.xy=4]="xy",i[i.yz=5]="yz",i[i.xz=6]="xz"})(Qe||(Qe={}));new d(1,0,0),new d(0,1,0),new d(0,0,1),new d(1,1,1),new d(1,1,0),new d(0,1,1),new d(1,0,1);new B(new d(1,0,0),0),new B(new d(0,1,0),0),new B(new d(0,0,1),0),new B(new d(0,0,0),0),new B(new d(0,0,1),0),new B(new d(1,0,0),0),new B(new d(0,1,0),0);function et(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function Cn(i,n,a){return n&&et(i.prototype,n),a&&et(i,a),i}function xe(i,n){return xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},xe(i,n)}function wn(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&xe(i,n)}function Pn(i,n,a,e){var t=arguments.length,r=t<3?n:e===null?e=Object.getOwnPropertyDescriptor(n,a):e,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,n,a,e);else for(var s=i.length-1;s>=0;s--)(o=i[s])&&(r=(t<3?o(r):t>3?o(n,a,r):o(n,a))||r);return t>3&&r&&Object.defineProperty(n,a,r),r}var Sn=`#define GLSLIFY 1
uniform vec3 material_OutlineColor;uniform sampler2D material_OutlineTexture;uniform vec2 material_TexSize;varying vec2 v_uv;float luminance(vec4 color){return 0.2125*color.r+0.7154*color.g+0.0721*color.b;}float sobel(){float Gx[9];Gx[0]=-1.0;Gx[1]=0.0;Gx[2]=1.0;Gx[3]=-2.0;Gx[4]=0.0;Gx[5]=2.0;Gx[6]=-1.0;Gx[7]=0.0;Gx[8]=1.0;float Gy[9];Gy[0]=-1.0;Gy[1]=-2.0;Gy[2]=-1.0;Gy[3]=0.0;Gy[4]=0.0;Gy[5]=0.0;Gy[6]=1.0;Gy[7]=2.0;Gy[8]=1.0;float texColor;float edgeX=0.0;float edgeY=0.0;vec2 uv[9];uv[0]=v_uv+material_TexSize.xy*vec2(-1,-1);uv[1]=v_uv+material_TexSize.xy*vec2(0,-1);uv[2]=v_uv+material_TexSize.xy*vec2(1,-1);uv[3]=v_uv+material_TexSize.xy*vec2(-1,0);uv[4]=v_uv+material_TexSize.xy*vec2(0,0);uv[5]=v_uv+material_TexSize.xy*vec2(1,0);uv[6]=v_uv+material_TexSize.xy*vec2(-1,1);uv[7]=v_uv+material_TexSize.xy*vec2(0,1);uv[8]=v_uv+material_TexSize.xy*vec2(1,1);for(int i=0;i<9;i++){texColor=luminance(texture2D(material_OutlineTexture,uv[i]));edgeX+=texColor*Gx[i];edgeY+=texColor*Gy[i];}return abs(edgeX)+abs(edgeY);}vec4 linearToGamma(vec4 linearIn){return vec4(pow(linearIn.rgb,vec3(1.0/2.2)),linearIn.a);}void main(){float sobelFactor=step(1.0,sobel());gl_FragColor=mix(vec4(0),vec4(material_OutlineColor,1.0),sobelFactor);
#ifndef ENGINE_IS_COLORSPACE_GAMMA
gl_FragColor=linearToGamma(gl_FragColor);
#endif
}`,bn=`#define GLSLIFY 1
attribute vec3 POSITION;attribute vec2 TEXCOORD_0;varying vec2 v_uv;void main(){gl_Position=vec4(POSITION.xzy,1.0);gl_Position.y*=-1.0;v_uv=TEXCOORD_0;}`,Tn=`#define GLSLIFY 1
uniform vec4 camera_OutlineReplaceColor;void main(){gl_FragColor=camera_OutlineReplaceColor;}`,En=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,q=function(i){wn(n,i);function n(e){var t;t=i.call(this,e)||this,t.isChildrenIncluded=!1,t._size=1,t._clearColor=new Q(1,1,1,1),t._replaceColor=new Q(1,0,0,1),t._outlineMainColor=new Q(.95,.35,.14,1),t._outlineSubColor=new Q(.16,.67,.89,1),t._layer=gt.Layer29,t._outlineEntities=[],t._subLineEntities=[],t._renderers=[],t._layerMap=[],t._cameraViewport=new Le,t._outLineViewport=new Le(0,0,1,1);var r=t.engine,o=new dt(r,T.find("outline-postprocess-shader")),s=T.find("outline-replace-shader"),l=t.entity.createChild("screen"),c=l.addComponent(z);return c.receiveShadows=!1,c.castShadows=!1,l.layer=t._layer,l.isActive=!1,c.mesh=Se.createPlane(r,2,2),c.setMaterial(o),o.isTransparent=!0,t._outlineMaterial=o,t._replaceShader=s,t._screenEntity=l,t.size=t._size,t}var a=n.prototype;return a.clear=function(){this._outlineEntities.length=0},a.addEntity=function(t){this._outlineEntities.indexOf(t)===-1&&(this._outlineEntities.push(t),this.isChildrenIncluded&&this._calSublineEntites())},a.removeEntity=function(t){var r=this._outlineEntities.indexOf(t),o=this._outlineEntities.length;r>-1&&(r<o-1&&(this._outlineEntities[r]=this._outlineEntities[o-1]),this._outlineEntities.length--,this.isChildrenIncluded&&this._calSublineEntites())},a.onEndRender=function(t){var r=this._outlineEntities;!r.length||(this._renderEntity(t,this.subColor,this._subLineEntities),this._renderEntity(t,this.mainColor,r))},a.onDestroy=function(){this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy(),this._screenEntity.destroy(),this._outlineEntities=null,this._renderers=null,this._layerMap=null},a._renderEntity=function(t,r,o){var s=t.scene,l=t.clearFlags,c=t.cullingMask,u=t.enableFrustumCulling,_=s.background.solidColor,h=s.background.mode,f=this._renderers,m=this._layerMap;m.length=0;for(var x=o.length-1;x>=0;x--){var p=o[x];f.length=0,p.getComponents(z,f),f.length&&(m.push({entity:p,layer:p.layer}),p.layer=this._layer)}this._screenEntity.isActive=!1,t.renderTarget=this._renderTarget,s.background.solidColor=this._clearColor,s.background.mode=Ut.SolidColor,t.cullingMask=this._layer,t.setReplacementShader(this._replaceShader),t.shaderData.setColor(n._replaceColorProp,this._replaceColor),t.render(),this._cameraViewport.copyFrom(t.viewport),this._screenEntity.isActive=!0,t.renderTarget=null,t.viewport=this._outLineViewport,t.clearFlags=Vt.None,t.enableFrustumCulling=!1,t.resetReplacementShader();for(var C=m.length-1;C>=0;C--){var w=m[C],E=w.entity,I=w.layer;E.layer=I}this._outlineMaterial.shaderData.setColor(n._outlineColorProp,r),t.render(),this._screenEntity.isActive=!1,t.clearFlags=l,t.enableFrustumCulling=u,t.cullingMask=c,t.viewport=this._cameraViewport,s.background.solidColor=_,s.background.mode=h},a._calSublineEntites=function(){var t=this;this._subLineEntities.length=0;for(var r=0;r<this._outlineEntities.length;r++)n._traverseEntity(this._outlineEntities[r],function(o){t._subLineEntities.push(o)})},n._traverseEntity=function(t,r){r(t);for(var o=t.children.length-1;o>=0;o--)this._traverseEntity(t.children[o],r)},Cn(n,[{key:"layer",get:function(){return this.layer},set:function(t){this._layer=t}},{key:"mainColor",get:function(){return this._outlineMainColor},set:function(t){var r=this._outlineMainColor;t!==r&&r.copyFrom(t)}},{key:"subColor",get:function(){return this._outlineSubColor},set:function(t){var r=this._outlineSubColor;t!==r&&r.copyFrom(t)}},{key:"size",get:function(){return this._size},set:function(t){t=Math.max(1,Math.min(t,6)),this._size=t,this._renderTarget&&(this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy());var r=this.engine.canvas,o=r.width,s=r.height,l=o/t,c=s/t,u=new ht(this.engine,l,c),_=new _t(this.engine,l,c,u);this._outlineMaterial.shaderData.setTexture(n._outlineTextureProp,u),this._outlineMaterial.shaderData.setVector2(n._texSizeProp,new ne(1/l,1/c)),u.wrapModeU=u.wrapModeV=Ot.Clamp,this._renderTarget=_}}]),n}($);q._outlineColorProp=v.getByName("material_OutlineColor");q._outlineTextureProp=v.getByName("material_OutlineTexture");q._texSizeProp=v.getByName("material_TexSize");q._replaceColorProp=v.getByName("camera_OutlineReplaceColor");q=Pn([se(V,le.CheckOnly)],q);T.create("outline-postprocess-shader",bn,Sn);T.create("outline-replace-shader",En,Tn);new d;new S;new ne;new d;new d;new L;new d;var tt;(function(i){i[i.Wireframe=0]="Wireframe",i[i.Normal=1]="Normal",i[i.Tangent=2]="Tangent",i[i.BiTangent=3]="BiTangent"})(tt||(tt={}));var bt=`
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
`,Tt=`
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

`+bt+`

void main() {
    int pointIndex = gl_VertexID / 2;
    `+Tt+`

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

`+bt+`

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
    `+Tt+`

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
`);xt.getByName("RENDERER_HAS_WEIGHT");xt.getByName("RENDERER_HAS_JOINT");v.getByName("u_verticesSampler");v.getByName("u_verticesTextureHeight");v.getByName("u_verticesTextureWidth");v.getByName("u_indicesSampler");v.getByName("u_indicesTextureHeight");v.getByName("u_indicesTextureWidth");v.getByName("u_lineScale");v.getByName("u_worldMatrix");v.getByName("u_worldNormal");function oe(i,n){return n!=null&&typeof Symbol<"u"&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](i):i instanceof n}function nt(i,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(i,e.key,e)}}function Et(i,n,a){return n&&nt(i.prototype,n),a&&nt(i,a),i}var ye=0;function Mn(){var i=XMLHttpRequest.prototype.send,n=new Map;function a(e,t){n.get(e)==null&&(n.set(e,t),ye+=t)}XMLHttpRequest.prototype.send=function(e){this.addEventListener("load",function(){var r=0;this.responseType===""||this.responseType==="text"?r=new Blob([JSON.stringify(this.responseText)]).size:oe(this.response,Blob)?r=this.response.size:oe(this.response,ArrayBuffer)?r=this.response.byteLength:this.responseType==="json"&&(r=new Blob([JSON.stringify(this.response)]).size),a(this.responseURL,r)},!1),i.call(this,e);var t=Object.getOwnPropertyDescriptor(Image.prototype,"src").set;this.originalImageSrc=t,Object.defineProperty(Image.prototype,"src",{set:function(o){var s=this;fetch(o).then(function(l){l.ok&&l.blob().then(function(c){a(s.responseURL,c.size)})}),t.call(this,o)}})}}var In=function(){function i(){this._hooked=!1,this._hooked=!0}var n=i.prototype;return n.reset=function(){ye=0},n.release=function(){this._hooked&&(XMLHttpRequest.prototype.send=this._originalSend,Object.defineProperty(Image.prototype,"src",{set:function(t){this.src.call(this,t)}})),this._hooked=!1},Et(i,[{key:"size",get:function(){return An(ye/1024/1024)}}]),i}();function An(i){return Number(i).toFixed(Math.max(6-i.toString().split(".")[0].length,0))}function U(){for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];var e;(e=Pe).info.apply(e,[].concat(["\u{1F680} [galacean engine--stats]"],n))}function rt(){for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];var e;(e=Pe).error.apply(e,[].concat(["\u{1F680} [galacean engine-stats]"],n))}var Rn=function(){function i(a){this.drawCall=0,this.triangles=0,this.lines=0,this.points=0,this.realDrawElements=a.drawElements,this.realDrawArrays=a.drawArrays,a.drawElements=this.hookedDrawElements.bind(this),a.drawArrays=this.hookedDrawArrays.bind(this);var e=this.hasInstancedFunction(a);if(e)this.realDrawElementsInstanced=a.drawElementsInstanced,this.realDrawArraysInstanced=a.drawArraysInstanced,a.drawElementsInstanced=this.hookedDrawElementsInstanced.bind(this),a.drawArraysInstanced=this.hookedDrawArraysInstanced.bind(this);else{var t=a.getExtension("ANGLE_instanced_arrays");t?(this.realDrawElementsInstanced=t.drawElementsInstancedANGLE,this.realDrawArraysInstanced=t.drawArraysInstancedANGLE,t.drawElementsInstancedANGLE=this.hookedDrawElementsInstanced.bind(this),t.drawArraysInstancedANGLE=this.hookedDrawArraysInstanced.bind(this)):rt("GPU Instancing is not supported.")}this.hooked=!0,this.gl=a,U("DrawCall is hooked.")}var n=i.prototype;return n.hasInstancedFunction=function(e){return oe(e,WebGL2RenderingContext)||e.hasOwnProperty("drawElementsInstanced")&&e.hasOwnProperty("drawArraysInstanced")},n.hookedDrawElements=function(e,t,r,o){this.realDrawElements.call(this.gl,e,t,r,o),this.update(t,e)},n.hookedDrawArrays=function(e,t,r){this.realDrawArrays.call(this.gl,e,t,r),this.update(r,e)},n.hookedDrawElementsInstanced=function(e,t,r,o,s){this.realDrawElementsInstanced.call(this.gl,e,t,r,o,s),this.update(t,e)},n.hookedDrawArraysInstanced=function(e,t,r,o){this.realDrawArraysInstanced.call(this.gl,e,t,r,o),this.update(r,e)},n.update=function(e,t){var r=this.gl;switch(this.drawCall++,t){case r.TRIANGLES:this.triangles+=e/3;break;case r.TRIANGLE_STRIP:case r.TRIANGLE_FAN:this.triangles+=e-2;break;case r.LINES:this.lines+=e/2;break;case r.LINE_STRIP:this.lines+=e-1;break;case r.LINE_LOOP:this.lines+=e;break;case r.POINTS:this.points+=e;break;default:rt("Unknown draw mode: "+t);break}},n.reset=function(){this.drawCall=0,this.triangles=0,this.lines=0,this.points=0},n.release=function(){if(this.hooked){var e=this.gl;e.drawElements=this.realDrawElements,e.drawArrays=this.realDrawArrays;var t=this.hasInstancedFunction(e);if(t)e.drawElementsInstanced=this.realDrawElementsInstanced,e.drawArraysInstanced=this.realDrawArraysInstanced;else{var r=e.getExtension("ANGLE_instanced_arrays");r&&(r.drawElementsInstancedANGLE=this.realDrawElementsInstanced,r.drawArraysInstancedANGLE=this.realDrawArraysInstanced)}}this.hooked=!1},i}(),Dn=function(){function i(a){this.shaders=0,this.realAttachShader=a.attachShader,this.realDetachShader=a.detachShader,a.attachShader=this.hookedAttachShader.bind(this),a.detachShader=this.hookedDetachShader.bind(this),this.hooked=!0,this.gl=a,U("Shader is hooked.")}var n=i.prototype;return n.hookedAttachShader=function(e,t){this.realAttachShader.call(this.gl,e,t),this.shaders++,U("AttachShader:",t,"shaders: "+this.shaders)},n.hookedDetachShader=function(e,t){this.realDetachShader.call(this.gl,e,t),this.shaders--,U("DetachShader. shaders: "+this.shaders)},n.reset=function(){this.shaders=0},n.release=function(){this.hooked&&(this.gl.attachShader=this.realAttachShader,this.gl.detachShader=this.realDetachShader),this.hooked=!1},i}(),Nn=function(){function i(a){this.textures=0,this.realCreateTexture=a.createTexture,this.realDeleteTexture=a.deleteTexture,a.createTexture=this.hookedCreateTexture.bind(this),a.deleteTexture=this.hookedDeleteTexture.bind(this),this.hooked=!0,this.gl=a,U("Texture is hooked.")}var n=i.prototype;return n.hookedCreateTexture=function(){var e=this.realCreateTexture.call(this.gl);return this.textures++,U("CreateTexture:",e,"textures: "+this.textures),e},n.hookedDeleteTexture=function(e){this.realDeleteTexture.call(this.gl,e),this.textures--,U("DeleteTexture. textures: "+this.textures)},n.reset=function(){this.textures=0},n.release=function(){this.hooked&&(this.gl.createTexture=this.realCreateTexture,this.gl.deleteTexture=this.realDeleteTexture),this.hooked=!1},i}(),kn=function(){function i(a){this.samplingFrames=60,this.samplingIndex=0,this.updateCounter=0,this.updateTime=0,this.gl=a,this.hook(a)}var n=i.prototype;return n.hook=function(e){this.drawCallHook=new Rn(e),this.textureHook=new Nn(e),this.shaderHook=new Dn(e),this.requestHook=new In},n.reset=function(){this.drawCallHook&&this.drawCallHook.reset()},n.release=function(){this.drawCallHook&&this.drawCallHook.release(),this.textureHook&&this.textureHook.release(),this.shaderHook&&this.shaderHook.release()},n.update=function(){this.updateCounter++;var e=performance.now();if(!(e-this.updateTime<1e3)){if(this.samplingIndex!==this.samplingFrames){this.reset(),this.samplingIndex++;return}this.samplingIndex=0;var t={fps:Math.round(this.updateCounter*1e3/(e-this.updateTime)),memory:performance.memory&&performance.memory.usedJSHeapSize/1048576>>0,drawCall:this.drawCallHook.drawCall,triangles:this.drawCallHook.triangles,lines:this.drawCallHook.lines,points:this.drawCallHook.points,textures:this.textureHook.textures,size:this.requestHook.size,shaders:this.shaderHook.shaders,webglContext:window.hasOwnProperty("WebGL2RenderingContext")&&oe(this.gl,WebGL2RenderingContext)?"2.0":"1.0"};return this.reset(),this.updateCounter=0,this.updateTime=e,t}},i}(),Fn=`
  <dl>
    <dt>FPS</dt>
    <dd>0</dd>
    <dt>Memory <span class="unit">(MB)</span></dt>
    <dd>0</dd>
    <dt>DrawCall</dt>
    <dd>0</dd>
    <dt>Triangles</dt>
    <dd>0</dd>
    <dt>Textures</dt>
    <dd>0</dd>
    <dt>Shaders</dt>
    <dd>0</dd>
    <dt>Network Size <span class="unit">(MB)</span></dt>
    <dd>0</dd>
    <dt>WebGL</dt>
    <dd></dd>
  </dl>
`,Ln=`
  .gl-perf {
    pointer-events: none;
    user-select: none;
    position: fixed;
    top: 0;
    left: 0;
    padding: `+10/7.5+"vh "+10/7.5+"vh 0 "+10/7.5+`vh;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font: `+10/7.5+`vh arial;
  }

  .gl-perf dl,
  .gl-perf dt,
  .gl-perf dd {
    padding: 0;
    margin: 0;
  }

  .gl-perf dt {
    color: #fff;
    text-shadow: #000 0 0 1px;
  }

  .gl-perf dt .unit{
    font-size: `+10/7.5+`vh;
  }

  .gl-perf dd {
    font-size: `+20/7.5+`vh;
    padding: `+10/7.5+"vh 0 "+10/7.5+`vh;
  }
`,zn=function(){function i(a){this.core=new kn(a),this.items=[],this.items=["fps","memory","drawCall","triangles","textures","shaders","size","webglContext"],this.createContainer(),this.update=this.update.bind(this)}var n=i.prototype;return n.createContainer=function(){var e=document.createElement("div");e.classList.add("gl-perf"),e.innerHTML=Fn,e.appendChild(this.createStyle()),document.body.appendChild(e),this.doms=Array.prototype.slice.apply(e.querySelectorAll("dd")),this.container=e},n.createStyle=function(){var e=document.createElement("style");return e.type="text/css",e.appendChild(document.createTextNode(Ln)),e},n.update=function(){var e=this.core.update();if(e)for(var t,r=function(l,c){var u=t.doms[l],_=t.items[l],h=e[_]||0;requestAnimationFrame(function(){u.innerText=h})},o=0,s=this.items.length;o<s;o++)t=this,r(o,s)},n.reset=function(){this.core.reset()},n.release=function(){this.core.release()},n.destroy=function(){this.release(),document.body.removeChild(this.container)},i}();function Ce(i,n){return Ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ce(i,n)}function Wn(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&Ce(i,n)}var Hn=function(i){Wn(n,i);function n(){return i.apply(this,arguments)}var a=n.prototype;return a.onBeginRender=function(t){this.camera=t,this.monitor||this._setupMonitor()},a.onEndRender=function(t){this.monitor&&this.monitor.update()},a._setupMonitor=function(){var t=this.camera.engine._hardwareRenderer.gl;t&&(this.monitor=new zn(t))},n.hookRequest=function(){Mn()},Et(n,[{key:"enabled",set:function(t){t?this._setupMonitor():this.monitor.destroy()}}]),n}($),Bn="1.2.0-beta.3";console.log("galacean engine toolkit version: "+Bn);function te(i,n){return n!=null&&typeof Symbol<"u"&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](i):i instanceof n}function we(i,n){return we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},we(i,n)}function D(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&we(i,n)}var Mt=function(){function i(a){a===void 0&&(a=0),this.length=0,this._elements=new Array(a)}var n=i.prototype;return n.add=function(e){this.length===this._elements.length?this._elements.push(e):this._elements[this.length]=e,this.length++},n.delete=function(e){var t=this._elements.indexOf(e);this.deleteByIndex(t)},n.get=function(e){if(e>=this.length)throw"Index is out of range.";return this._elements[e]},n.deleteByIndex=function(e){var t=this._elements,r=null,o=this.length-1;return e!==o&&(r=t[o],t[e]=r),this.length--,r},n.garbageCollection=function(){this._elements.length=this.length},i}(),it;(function(i){i[i.SIMULATION_SHAPE=1]="SIMULATION_SHAPE",i[i.SCENE_QUERY_SHAPE=2]="SCENE_QUERY_SHAPE",i[i.TRIGGER_SHAPE=4]="TRIGGER_SHAPE"})(it||(it={}));var M=function(){function i(a){this._controllers=new Mt,this._worldScale=new d(1,1,1),this._position=new d,this._rotation=null,this._axis=null,this._physXRotation=new S,this._shapeFlags=3,this._physXPhysics=a}var n=i.prototype;return n.setRotation=function(e){this._rotation=e,S.rotationYawPitchRoll(e.x,e.y,e.z,this._physXRotation),this._axis&&S.multiply(this._physXRotation,this._axis,this._physXRotation),this._physXRotation.normalize(),this._setLocalPose()},n.setPosition=function(e){e!==this._position&&this._position.copyFrom(e);for(var t=this._controllers,r=0,o=t.length;r<o;r++)t.get(r)._updateShapePosition(this._position,this._worldScale);this._setLocalPose()},n.setWorldScale=function(e){this._worldScale.copyFrom(e),this._setLocalPose();for(var t=this._controllers,r=0,o=t.length;r<o;r++)t.get(r)._updateShapePosition(this._position,this._worldScale)},n.setContactOffset=function(e){this._pxShape.setContactOffset(e);for(var t=this._controllers,r=0,o=t.length;r<o;r++)t.get(r)._pxController.setContactOffset(e)},n.setMaterial=function(e){this._pxMaterial=e._pxMaterial,this._pxShape.setMaterial(this._pxMaterial)},n.setIsTrigger=function(e){this._modifyFlag(1,!e),this._modifyFlag(4,e),this._setShapeFlags(this._shapeFlags)},n.destroy=function(){this._pxShape.release()},n._setShapeFlags=function(e){this._shapeFlags=e,this._pxShape.setFlags(new this._physXPhysics._physX.PxShapeFlags(this._shapeFlags))},n._setLocalPose=function(){var e=i.transform;d.multiply(this._position,this._worldScale,e.translation),e.rotation=this._physXRotation,this._pxShape.setLocalPose(e)},n._initialize=function(e,t){this._id=t,this._pxMaterial=e._pxMaterial,this._pxShape=this._physXPhysics._pxPhysics.createShape(this._pxGeometry,e._pxMaterial,!0,new this._physXPhysics._physX.PxShapeFlags(this._shapeFlags)),this._pxShape.setUUID(t)},n._modifyFlag=function(e,t){this._shapeFlags=t?this._shapeFlags|e:this._shapeFlags&~e},i}();(function(){M.halfSqrt=.70710678118655})();(function(){M.transform={translation:new d,rotation:null}})();var Te=function(i){D(n,i);function n(e,t,r,o){var s;s=i.call(this,e)||this,s._halfSize=new d,s._sizeScale=new d(1,1,1);var l=s._halfSize;return l.set(r.x*.5,r.y*.5,r.z*.5),s._pxGeometry=new e._physX.PxBoxGeometry(l.x,l.y,l.z),s._initialize(o,t),s._setLocalPose(),s}var a=n.prototype;return a.setSize=function(t){var r=this._halfSize,o=n._tempHalfExtents;r.set(t.x*.5,t.y*.5,t.z*.5),d.multiply(r,this._sizeScale,o),this._pxGeometry.halfExtents=o,this._pxShape.setGeometry(this._pxGeometry),this._updateController(o)},a.setWorldScale=function(t){i.prototype.setWorldScale.call(this,t),this._sizeScale.set(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z));var r=n._tempHalfExtents;d.multiply(this._halfSize,this._sizeScale,r),this._pxGeometry.halfExtents=r,this._pxShape.setGeometry(this._pxGeometry),this._updateController(r)},a._updateController=function(t){for(var r=this._controllers,o=0,s=r.length;o<s;o++){var l=r.get(o)._pxController;l.setHalfHeight(t.x),l.setHalfSideExtent(t.y),l.setHalfForwardExtent(t.z)}},n}(M);(function(){Te._tempHalfExtents=new d})();var It=function(i){D(n,i);function n(e,t,r,o,s){var l;return l=i.call(this,e)||this,l._upAxis=1,l._sizeScale=new d(1,1,1),l._radius=r,l._halfHeight=o*.5,l._axis=new S(0,0,M.halfSqrt,M.halfSqrt),l._physXRotation.copyFrom(l._axis),l._pxGeometry=new e._physX.PxCapsuleGeometry(l._radius,l._halfHeight),l._initialize(s,t),l._setLocalPose(),l}var a=n.prototype;return a.setRadius=function(t){this._radius=t;var r=this._sizeScale;switch(this._upAxis){case 0:this._pxGeometry.radius=this._radius*Math.max(r.y,r.z);break;case 1:this._pxGeometry.radius=this._radius*Math.max(r.x,r.z);break;case 2:this._pxGeometry.radius=this._radius*Math.max(r.x,r.y);break}this._pxShape.setGeometry(this._pxGeometry);for(var o=this._pxGeometry.radius,s=this._controllers,l=0,c=s.length;l<c;l++)s.get(l)._pxController.setRadius(o)},a.setHeight=function(t){this._halfHeight=t*.5;var r=this._sizeScale;switch(this._upAxis){case 0:this._pxGeometry.halfHeight=this._halfHeight*r.x;break;case 1:this._pxGeometry.halfHeight=this._halfHeight*r.y;break;case 2:this._pxGeometry.halfHeight=this._halfHeight*r.z;break}this._pxShape.setGeometry(this._pxGeometry);for(var o=this._pxGeometry.halfHeight*2,s=this._controllers,l=0,c=s.length;l<c;l++)s.get(l)._pxController.setHeight(o)},a.setUpAxis=function(t){var r=this,o=r._rotation,s=r._axis,l=r._physXRotation;switch(this._upAxis=t,this._upAxis){case 0:s.set(0,0,0,1);break;case 1:s.set(0,0,M.halfSqrt,M.halfSqrt);break;case 2:s.set(0,M.halfSqrt,0,M.halfSqrt);break}o?(S.rotationYawPitchRoll(o.x,o.y,o.z,l),S.multiply(l,s,l)):l.copyFrom(s),this._setLocalPose()},a.setWorldScale=function(t){i.prototype.setWorldScale.call(this,t);var r=this._sizeScale.set(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z)),o=this._pxGeometry;switch(this._upAxis){case 0:o.radius=this._radius*Math.max(r.y,r.z),o.halfHeight=this._halfHeight*r.x;break;case 1:o.radius=this._radius*Math.max(r.x,r.z),o.halfHeight=this._halfHeight*r.y;break;case 2:o.radius=this._radius*Math.max(r.x,r.y),o.halfHeight=this._halfHeight*r.z;break}this._pxShape.setGeometry(o);for(var s=o.radius,l=o.halfHeight*2,c=this._controllers,u=0,_=c.length;u<_;u++){var h=c.get(u)._pxController;h.setRadius(s),h.setHeight(l)}},n}(M),at;(function(i){i[i.X=0]="X",i[i.Y=1]="Y",i[i.Z=2]="Z"})(at||(at={}));var At=function(){function i(a){this._shapeScaledPosition=new d,this._worldPosition=null,this._physXPhysics=a}var n=i.prototype;return n.move=function(e,t,r){var o,s;return(s=(o=this._pxController)==null?void 0:o.move(e,t,r))!=null?s:0},n.setWorldPosition=function(e){this._worldPosition=e,this._updateNativePosition()},n.getWorldPosition=function(e){this._pxController&&(e.copyFrom(this._pxController.getPosition()),e.subtract(this._shapeScaledPosition))},n.setStepOffset=function(e){var t;(t=this._pxController)==null||t.setStepOffset(e)},n.setNonWalkableMode=function(e){var t;(t=this._pxController)==null||t.setNonWalkableMode(e)},n.setUpDirection=function(e){var t;(t=this._pxController)==null||t.setUpDirection(e)},n.setSlopeLimit=function(e){var t;(t=this._pxController)==null||t.setSlopeLimit(e)},n.addShape=function(e){this._pxManager&&this._createPXController(this._pxManager,e),this._shape=e,e._controllers.add(this)},n.removeShape=function(e){this._destroyPXController(),this._shape=null,e._controllers.delete(this)},n.destroy=function(){this._destroyPXController()},n._createPXController=function(e,t){var r;if(te(t,Te))r=new this._physXPhysics._physX.PxBoxControllerDesc,r.halfHeight=t._halfSize.x,r.halfSideExtent=t._halfSize.y,r.halfForwardExtent=t._halfSize.z;else if(te(t,It))r=new this._physXPhysics._physX.PxCapsuleControllerDesc,r.radius=t._radius,r.height=t._halfHeight*2,r.climbingMode=1;else throw"unsupported shape type";r.setMaterial(t._pxMaterial),this._pxController=e._getControllerManager().createController(r),this._pxController.setUUID(t._id)},n._destroyPXController=function(){this._pxController&&(this._pxController.release(),this._pxController=null)},n._updateShapePosition=function(e,t){d.multiply(e,t,this._shapeScaledPosition),this._updateNativePosition()},n._updateNativePosition=function(){var e=this._worldPosition;this._pxController&&e&&(d.add(e,this._shapeScaledPosition,i._tempVec),this._pxController.setPosition(i._tempVec))},i}();(function(){At._tempVec=new d})();var Ee=function(){function i(a){this._physXPhysics=a}var n=i.prototype;return n.addShape=function(e){this._pxActor.attachShape(e._pxShape)},n.removeShape=function(e){this._pxActor.detachShape(e._pxShape,!0)},n.setWorldTransform=function(e,t){this._pxActor.setGlobalPose(this._transform(e,t),!0)},n.getWorldTransform=function(e,t){var r=this._pxActor.getGlobalPose();e.set(r.translation.x,r.translation.y,r.translation.z),t.set(r.rotation.x,r.rotation.y,r.rotation.z,r.rotation.w)},n.destroy=function(){this._pxActor.release()},n._transform=function(e,t){var r=i._tempTransform;return r.translation=e,r.rotation=t.normalize(),r},i}();(function(){Ee._tempTransform={translation:null,rotation:null}})();var ot;(function(i){i[i.Discrete=0]="Discrete",i[i.Continuous=1]="Continuous",i[i.ContinuousDynamic=2]="ContinuousDynamic",i[i.ContinuousSpeculative=3]="ContinuousSpeculative"})(ot||(ot={}));var Me=function(i){D(n,i);function n(e,t,r){var o;o=i.call(this,e)||this;var s=o._transform(t,r);return o._pxActor=e._pxPhysics.createRigidDynamic(s),o}var a=n.prototype;return a.setLinearDamping=function(t){this._pxActor.setLinearDamping(t)},a.setAngularDamping=function(t){this._pxActor.setAngularDamping(t)},a.setLinearVelocity=function(t){this._pxActor.setLinearVelocity(t,!0)},a.setAngularVelocity=function(t){this._pxActor.setAngularVelocity(t,!0)},a.setMass=function(t){this._pxActor.setMass(t)},a.setCenterOfMass=function(t){this._pxActor.setCMassLocalPose(t)},a.setInertiaTensor=function(t){this._pxActor.setMassSpaceInertiaTensor(t)},a.setMaxAngularVelocity=function(t){this._pxActor.setMaxAngularVelocity(t)},a.setMaxDepenetrationVelocity=function(t){this._pxActor.setMaxDepenetrationVelocity(t)},a.setSleepThreshold=function(t){this._pxActor.setSleepThreshold(t)},a.setSolverIterations=function(t){this._pxActor.setSolverIterationCounts(t,1)},a.setCollisionDetectionMode=function(t){switch(t){case 1:this._pxActor.setRigidBodyFlag(this._physXPhysics._physX.PxRigidBodyFlag.eENABLE_CCD,!0);break;case 2:this._pxActor.setRigidBodyFlag(this._physXPhysics._physX.PxRigidBodyFlag.eENABLE_CCD_FRICTION,!0);break;case 3:this._pxActor.setRigidBodyFlag(this._physXPhysics._physX.PxRigidBodyFlag.eENABLE_SPECULATIVE_CCD,!0);break;case 0:var r=this._physXPhysics._physX;this._pxActor.setRigidBodyFlag(r.PxRigidBodyFlag.eENABLE_CCD,!1),this._pxActor.setRigidBodyFlag(r.PxRigidBodyFlag.eENABLE_CCD_FRICTION,!1),this._pxActor.setRigidBodyFlag(r.PxRigidBodyFlag.eENABLE_SPECULATIVE_CCD,!1);break}},a.setIsKinematic=function(t){t?this._pxActor.setRigidBodyFlag(this._physXPhysics._physX.PxRigidBodyFlag.eKINEMATIC,!0):this._pxActor.setRigidBodyFlag(this._physXPhysics._physX.PxRigidBodyFlag.eKINEMATIC,!1)},a.setConstraints=function(t){this._pxActor.setRigidDynamicLockFlags(t)},a.addForce=function(t){this._pxActor.addForce({x:t.x,y:t.y,z:t.z})},a.addTorque=function(t){this._pxActor.addTorque({x:t.x,y:t.y,z:t.z})},a.move=function(t,r){if(r){this._pxActor.setKinematicTarget(t,r);return}var o=n._tempTranslation,s=n._tempRotation;this.getWorldTransform(o,s),te(t,d)?this._pxActor.setKinematicTarget(t,s):this._pxActor.setKinematicTarget(o,t)},a.sleep=function(){return this._pxActor.putToSleep()},a.wakeUp=function(){return this._pxActor.wakeUp()},n}(Ee);(function(){Me._tempTranslation=new d})();(function(){Me._tempRotation=new S})();var Un=function(){this._eventMap={}},Vn=function(){function i(a,e,t,r,o,s){this._physXPhysics=a;var l=a._pxPhysics.createMaterial(e,t,r);l.setFrictionCombineMode(o),l.setRestitutionCombineMode(s),this._pxMaterial=l}var n=i.prototype;return n.setBounciness=function(e){this._pxMaterial.setRestitution(e)},n.setDynamicFriction=function(e){this._pxMaterial.setDynamicFriction(e)},n.setStaticFriction=function(e){this._pxMaterial.setStaticFriction(e)},n.setBounceCombine=function(e){this._pxMaterial.setRestitutionCombineMode(e)},n.setFrictionCombine=function(e){this._pxMaterial.setFrictionCombineMode(e)},n.destroy=function(){this._pxMaterial.release()},i}(),st;(function(i){i[i.Average=0]="Average",i[i.Minimum=1]="Minimum",i[i.Multiply=2]="Multiply",i[i.Maximum=3]="Maximum"})(st||(st={}));var Ie=function(){function i(a,e,t,r,o,s,l,c){var u=this;this._pxControllerManager=null,this._currentEvents=new Mt,this._eventPool=[],this._physXPhysics=a,this._physXManager=e;var _=a._physX;this._pxRaycastHit=new _.PxRaycastHit,this._pxFilterData=new _.PxQueryFilterData,this._pxFilterData.flags=new _.PxQueryFlags(7),this._onContactEnter=t,this._onContactExit=r,this._onContactStay=o,this._onTriggerEnter=s,this._onTriggerExit=l,this._onTriggerStay=c;var h={onContactBegin:function(p,C){u._onContactEnter(p,C)},onContactEnd:function(p,C){u._onContactExit(p,C)},onContactPersist:function(p,C){u._onContactStay(p,C)},onTriggerBegin:function(p,C){var w=p<C?u._getTrigger(p,C):u._getTrigger(C,p);w.state=0,u._currentEvents.add(w)},onTriggerEnd:function(p,C){var w;if(p<C){var E=u._physXManager._eventMap[p];w=E[C],E[C]=void 0}else{var I=u._physXManager._eventMap[C];w=I[p],I[p]=void 0}w.state=2}},f=a._pxPhysics,m=_.PxSimulationEventCallback.implement(h),x=_.getDefaultSceneDesc(f.getTolerancesScale(),0,m);this._pxScene=f.createScene(x)}var n=i.prototype;return n.setGravity=function(e){this._pxScene.setGravity(e)},n.addColliderShape=function(e){this._physXManager._eventMap[e._id]={}},n.removeColliderShape=function(e){for(var t=this,r=t._eventPool,o=t._currentEvents,s=e._id,l=this._physXManager,c=l._eventMap,u=o.length-1;u>=0;u--){var _=o.get(u);_.index1==s?(o.deleteByIndex(u),r.push(_)):_.index2==s&&(o.deleteByIndex(u),r.push(_),c[_.index1][s]=void 0)}delete c[s]},n.addCollider=function(e){this._pxScene.addActor(e._pxActor,null)},n.removeCollider=function(e){this._pxScene.removeActor(e._pxActor,!0)},n.addCharacterController=function(e){if(!e._pxController){var t=e._shape;if(t){var r=e._pxManager;r!==this&&(r&&e._destroyPXController(),e._createPXController(this,t))}}e._pxManager=this},n.removeCharacterController=function(e){e._pxManager=null},n.update=function(e){this._simulate(e),this._fetchResults(),this._fireEvent()},n.raycast=function(e,t,r,o){var s=this,l=s._pxRaycastHit;t=Math.min(t,34e37);var c={preFilter:function(x,p,C){return r(p)?2:0},postFilter:function(x,p){}},u=this._pxScene.raycastSingle(e.origin,e.direction,t,l,this._pxFilterData,this._physXPhysics._physX.PxQueryFilterCallback.implement(c));if(u&&o!=null){var _=i._tempPosition,h=i._tempNormal,f=l.position,m=l.normal;_.set(f.x,f.y,f.z),h.set(m.x,m.y,m.z),o(l.getShape().getUUID(),l.distance,_,h)}return u},n._getControllerManager=function(){var e=this._pxControllerManager;return e===null&&(this._pxControllerManager=e=this._pxScene.createControllerManager()),e},n._simulate=function(e){this._pxScene.simulate(e,!0)},n._fetchResults=function(e){e===void 0&&(e=!0),this._pxScene.fetchResults(e)},n._getTrigger=function(e,t){var r;return this._eventPool.length?(r=this._eventPool.pop(),r.index1=e,r.index2=t):r=new On(e,t),this._physXManager._eventMap[e][t]=r,r},n._fireEvent=function(){for(var e=this,t=e._eventPool,r=e._currentEvents,o=r.length-1;o>=0;o--){var s=r.get(o);s.state==0?(this._onTriggerEnter(s.index1,s.index2),s.state=1):s.state==1?this._onTriggerStay(s.index1,s.index2):s.state==2&&(this._onTriggerExit(s.index1,s.index2),r.deleteByIndex(o),t.push(s))}},i}();(function(){Ie._tempPosition=new d})();(function(){Ie._tempNormal=new d})();var lt;(function(i){i[i.STATIC=1]="STATIC",i[i.DYNAMIC=2]="DYNAMIC",i[i.PRE_FILTER=4]="PRE_FILTER",i[i.POST_FILTER=8]="POST_FILTER",i[i.ANY_HIT=16]="ANY_HIT",i[i.NO_BLOCK=32]="NO_BLOCK"})(lt||(lt={}));var ct;(function(i){i[i.Enter=0]="Enter",i[i.Stay=1]="Stay",i[i.Exit=2]="Exit"})(ct||(ct={}));var On=function(n,a){this.index1=n,this.index2=a},Gn=function(i){D(n,i);function n(a,e,t){var r;return r=i.call(this,a)||this,r._pxActor=a._pxPhysics.createRigidStatic(r._transform(e,t)),r}return n}(Ee),F;(function(i){i[i.Auto=0]="Auto",i[i.WebAssembly=1]="WebAssembly",i[i.JavaScript=2]="JavaScript"})(F||(F={}));var b=function(){function i(a){this._connectedAnchor=new d,this._breakForce=Number.MAX_VALUE,this._breakTorque=Number.MAX_VALUE,this._physXPhysics=a}var n=i.prototype;return n.setConnectedCollider=function(e){var t,r;this._pxJoint.setActors(((t=e)==null?void 0:t._pxActor)||null,((r=this._collider)==null?void 0:r._pxActor)||null)},n.setConnectedAnchor=function(e){this._connectedAnchor.copyFrom(e),this._setLocalPose(0,e,i._defaultQuat)},n.setConnectedMassScale=function(e){this._pxJoint.setInvMassScale0(1/e)},n.setConnectedInertiaScale=function(e){this._pxJoint.setInvInertiaScale0(1/e)},n.setMassScale=function(e){this._pxJoint.setInvMassScale1(1/e)},n.setInertiaScale=function(e){this._pxJoint.setInvInertiaScale1(1/e)},n.setBreakForce=function(e){this._breakForce=e,this._pxJoint.setBreakForce(this._breakForce,this._breakTorque)},n.setBreakTorque=function(e){this._breakTorque=e,this._pxJoint.setBreakForce(this._breakForce,this._breakTorque)},n._setLocalPose=function(e,t,r){this._pxJoint.setLocalPose(e,t,r)},i}();(function(){b._xAxis=new d(1,0,0)})();(function(){b._defaultVec=new d})();(function(){b._defaultQuat=new S})();var Xn=function(i){D(n,i);function n(a,e){var t;return t=i.call(this,a)||this,t._collider=e,t._pxJoint=a._pxPhysics.createFixedJoint(null,b._defaultVec,b._defaultQuat,e._pxActor,b._defaultVec,b._defaultQuat),t}return n}(b),Jn=function(i){D(n,i);function n(e,t){var r;return r=i.call(this,e)||this,r._axisRotationQuaternion=new S,r._swingOffset=new d,r._collider=t,r._pxJoint=e._pxPhysics.createRevoluteJoint(null,b._defaultVec,b._defaultQuat,t._pxActor,b._defaultVec,b._defaultQuat),r}var a=n.prototype;return a.setAxis=function(t){var r=b._xAxis,o=this._axisRotationQuaternion;r.set(1,0,0),t.normalize();var s=Math.acos(d.dot(r,t));d.cross(r,t,r),S.rotationAxisAngle(r,s,o),this._setLocalPose(0,this._swingOffset,o)},a.setSwingOffset=function(t){this._swingOffset.copyFrom(t),this._setLocalPose(1,this._swingOffset,this._axisRotationQuaternion)},a.getAngle=function(){return this._pxJoint.getAngle()},a.getVelocity=function(){return this._pxJoint.getVelocity()},a.setHardLimit=function(t,r,o){this._pxJoint.setHardLimit(t,r,o)},a.setSoftLimit=function(t,r,o,s){this._pxJoint.setSoftLimit(t,r,o,s)},a.setDriveVelocity=function(t,r){r===void 0&&(r=!0),this._pxJoint.setDriveVelocity(t,r)},a.setDriveForceLimit=function(t){this._pxJoint.setDriveForceLimit(t)},a.setDriveGearRatio=function(t){this._pxJoint.setDriveGearRatio(t)},a.setHingeJointFlag=function(t,r){this._pxJoint.setRevoluteJointFlag(t,r)},n}(b),jn=function(i){D(n,i);function n(e,t){var r;return r=i.call(this,e)||this,r._swingOffset=new d,r._collider=t,r._pxJoint=e._pxPhysics.createDistanceJoint(null,b._defaultVec,b._defaultQuat,t._pxActor,b._defaultVec,b._defaultQuat),r._pxJoint.setDistanceJointFlag(2,!0),r._pxJoint.setDistanceJointFlag(4,!0),r._pxJoint.setDistanceJointFlag(8,!0),r}var a=n.prototype;return a.setSwingOffset=function(t){this._swingOffset.copyFrom(t),this._setLocalPose(1,t,b._defaultQuat)},a.setMinDistance=function(t){this._pxJoint.setMinDistance(t)},a.setMaxDistance=function(t){this._pxJoint.setMaxDistance(t)},a.setTolerance=function(t){this._pxJoint.setTolerance(t)},a.setStiffness=function(t){this._pxJoint.setStiffness(t)},a.setDamping=function(t){this._pxJoint.setDamping(t)},n}(b),Kn=function(i){D(n,i);function n(a,e,t){var r;return r=i.call(this,a)||this,r._axis=new S(0,0,M.halfSqrt,M.halfSqrt),r._physXRotation.copyFrom(r._axis),r._pxGeometry=new a._physX.PxPlaneGeometry,r._initialize(t,e),r._setLocalPose(),r}return n}(M),qn=function(i){D(n,i);function n(e,t,r,o){var s;return s=i.call(this,e)||this,s._maxScale=1,s._radius=r,s._pxGeometry=new e._physX.PxSphereGeometry(s._radius*s._maxScale),s._initialize(o,t),s._setLocalPose(),s}var a=n.prototype;return a.setRadius=function(t){this._radius=t,this._pxGeometry.radius=t*this._maxScale,this._pxShape.setGeometry(this._pxGeometry)},a.setWorldScale=function(t){i.prototype.setWorldScale.call(this,t),this._maxScale=Math.max(Math.abs(t.x),Math.abs(t.y),Math.abs(t.z)),this._pxGeometry.radius=this._radius*this._maxScale,this._pxShape.setGeometry(this._pxGeometry)},n}(M),$n=function(){function i(a){a===void 0&&(a=F.Auto),this._initializeState=0,this._runTimeMode=a}var n=i.prototype;return n.initialize=function(){var e=this;if(this._initializeState===2)return Promise.resolve();if(this._initializeState===1)return this._initializePromise;var t=this._runTimeMode,r=new Promise(function(s,l){var c=document.createElement("script");if(document.body.appendChild(c),c.async=!0,c.onload=s,c.onerror=l,t==F.Auto){var u=function(){try{if(typeof WebAssembly=="object"&&typeof WebAssembly.instantiate=="function"){var _=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));if(te(_,WebAssembly.Module))return te(new WebAssembly.Instance(_),WebAssembly.Instance)}}catch{}return!1}();u?t=F.WebAssembly:t=F.JavaScript}t==F.JavaScript?c.src="https://mdn.alipayobjects.com/rms/afts/file/A*rnDeR58NNGoAAAAAAAAAAAAAARQnAQ/physx.release.js.js":t==F.WebAssembly&&(c.src="https://mdn.alipayobjects.com/rms/afts/file/A*nA97QLQehRMAAAAAAAAAAAAAARQnAQ/physx.release.js")}),o=new Promise(function(s,l){r.then(function(){return window.PHYSX().then(function(c){e._init(c),e._initializeState=2,e._initializePromise=null,console.log("PhysX loaded."),s()},l)},l).catch(l)});return this._initializePromise=o,o},n.destroy=function(){this._physX.PxCloseExtensions(),this._pxPhysics.release(),this._pxFoundation.release(),this._physX=null,this._pxFoundation=null,this._pxPhysics=null},n.createPhysicsManager=function(){return new Un},n.createPhysicsScene=function(e,t,r,o,s,l,c){var u=new Ie(this,e,t,r,o,s,l,c);return u},n.createStaticCollider=function(e,t){return new Gn(this,e,t)},n.createDynamicCollider=function(e,t){return new Me(this,e,t)},n.createCharacterController=function(){return new At(this)},n.createPhysicsMaterial=function(e,t,r,o,s){return new Vn(this,e,t,r,o,s)},n.createBoxColliderShape=function(e,t,r){return new Te(this,e,t,r)},n.createSphereColliderShape=function(e,t,r){return new qn(this,e,t,r)},n.createPlaneColliderShape=function(e,t){return new Kn(this,e,t)},n.createCapsuleColliderShape=function(e,t,r,o){return new It(this,e,t,r,o)},n.createFixedJoint=function(e){return new Xn(this,e)},n.createHingeJoint=function(e){return new Jn(this,e)},n.createSpringJoint=function(e){return new jn(this,e)},n._init=function(e){var t=e.PX_PHYSICS_VERSION,r=new e.PxDefaultErrorCallback,o=new e.PxDefaultAllocator,s=e.PxCreateFoundation(t,o,r),l=e.PxCreatePhysics(t,s,new e.PxTolerancesScale,!1,null);e.PxInitExtensions(l,null),this._physX=e,this._pxFoundation=s,this._pxPhysics=l},i}(),ut;(function(i){i[i.Uninitialized=0]="Uninitialized",i[i.Initializing=1]="Initializing",i[i.Initialized=2]="Initialized"})(ut||(ut={}));var Yn="1.2.0-beta.3";console.log("Galacean PhysX version: "+Yn);function Zn(i){const n=new S;Qn(i,new d(30,0,30),new d,new S);var a=0;setInterval(()=>{a>700||(er(i,new d(.075,.075,.075),new d(Math.random()-.5,Math.random()*2+2.5,Math.random()-.5),n),a++)},16)}function Qn(i,n,a,e){const t=new yt(i.engine);t.baseColor.set(.2179807202597362,.2939682161541871,.31177952549087606,1),t.roughness=0,t.metallic=0;const r=i.createChild();r.layer=gt.Layer1;const o=r.addComponent(z);o.mesh=Se.createCuboid(i.engine,n.x,n.y,n.z),o.setMaterial(t),r.transform.position=a,r.transform.rotationQuaternion=e,o.receiveShadows=!1;const s=new jt;return s.position.set(0,n.y,0),r.addComponent(Kt).addShape(s),r}function er(i,n,a,e){const t=new yt(i.engine);t.baseColor.set(Math.random(),Math.random(),Math.random(),1),t.metallic=0,t.roughness=.5;const r=i.createChild(),o=r.addComponent(z);o.mesh=Se.createCuboid(i.engine,n.x,n.y,n.z),o.setMaterial(t),r.transform.position=a,r.transform.rotationQuaternion=e,o.castShadows=!1;const s=new vt;return s.size=n,s.isTrigger=!1,r.addComponent(qt).addShape(s),r}Gt.create({canvas:"canvas",physics:new $n}).then(i=>{i.canvas.resizeByClientSize();const n=i.sceneManager.activeScene;n.shadowDistance=50;const a=n.createRootEntity(),e=a.createChild("camera");e.addComponent(V),e.transform.position.set(-1,1.5,2),e.transform.lookAt(new d),e.addComponent(Zt),e.addComponent(Hn);const r=a.createChild("light");r.transform.setPosition(-.3,1,.4),r.transform.lookAt(new d(0,0,0));const o=r.addComponent(de);o.intensity=1,o.shadowType=Xt.SoftLow,o.shadowStrength=1,Zn(a),i.resourceManager.load({type:Jt.Env,url:"https://gw.alipayobjects.com/os/bmw-prod/89c54544-1184-45a1-b0f5-c0b17e5c3e68.bin"}).then(s=>{n.ambientLight=s,i.run()})});
