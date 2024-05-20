import{n as g,o as P,p as an,q as L,V as f,r as q,K as w,s as A,t as j,u as ne,v as re,C as Y,R as Ge,T as je,w as ln,x as un,L as _n,f as te,y as cn,g as $,z as sn,F as Je,Q as D,M as J,G as he,D as ge,H as xe,I as pe,j as Ce,J as ae,N as Xe,O as Ke,U as $e,B as dn,X as mn,Y as vn,Z as fn,_ as z,$ as hn,a0 as gn,a1 as xn,a2 as ye,b as pn,a3 as Cn,a4 as Ye}from"./module.a644fe30.js";(function(){g.getByName("u_width")})();(function(){g.getByName("u_min")})();(function(){g.getByName("u_max")})();(function(){g.getByName("u_boxColor")})();(function(){g.getByName("u_borderColor")})();P.create("box",`
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
`);new an;new f;new q;new f;new f;new f;new f;new f;new f;new f;new f;new f;new f;new f;new f;new L;var y;(function(r){r[r.None=0]="None",r[r.ROTATE=1]="ROTATE",r[r.ZOOM=2]="ZOOM",r[r.PAN=4]="PAN",r[r.All=7]="All"})(y||(y={}));function Z(){return function(r){}}function Q(r,u,l,i){var e=arguments.length,t=e<3?u:i===null?i=Object.getOwnPropertyDescriptor(u,l):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,u,l,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(t=(e<3?n(t):e>3?n(u,l,t):n(u,l))||t);return e>3&&t&&Object.defineProperty(u,l,t),t}var we=function(){function r(){}return r.onUpdateHandler=function(l){return l.isKeyHeldDown(w.ArrowLeft)||l.isKeyHeldDown(w.KeyA)||l.isKeyHeldDown(w.ArrowUp)||l.isKeyHeldDown(w.KeyW)||l.isKeyHeldDown(w.ArrowDown)||l.isKeyHeldDown(w.KeyS)||l.isKeyHeldDown(w.ArrowRight)||l.isKeyHeldDown(w.KeyD)?y.PAN:y.None},r.onUpdateDelta=function(l,i){var e=l.movementSpeed,t=l.input;i.x=i.y=i.z=0,(t.isKeyHeldDown(w.ArrowLeft)||t.isKeyHeldDown(w.KeyA))&&(i.x-=e),(t.isKeyHeldDown(w.ArrowRight)||t.isKeyHeldDown(w.KeyD))&&(i.x+=e),(t.isKeyHeldDown(w.ArrowUp)||t.isKeyHeldDown(w.KeyW))&&(i.z-=e),(t.isKeyHeldDown(w.ArrowDown)||t.isKeyHeldDown(w.KeyS))&&(i.z+=e)},r}();we=Q([Z()],we);var k,Pe;(function(r){r[r.Moving=0]="Moving",r[r.Distance=1]="Distance",r[r.None=2]="None"})(Pe||(Pe={}));var Te=(k=function(){function r(){}return r.onUpdateHandler=function(l){if(++this._frameIndex,l.pointers.length===1)if(l.isPointerHeldDown(A.Primary))this._updateType(y.ROTATE,0);else{var i=l.pointers[0].deltaPosition;(i.x!==0||i.y!==0)&&l.isPointerUp(A.Primary)?this._updateType(y.ROTATE,0):this._updateType(y.None,2)}else this._updateType(y.None,2);return this._handlerType},r.onUpdateDelta=function(l,i){var e=this,t=e._frameIndex;switch(this._deltaType){case 0:if(this._lastUsefulFrameIndex===t-1){var n=l.input.pointers[0].deltaPosition;i.x=n.x,i.y=n.y}else i.x=0,i.y=0;break}this._lastUsefulFrameIndex=t},r._updateType=function(l,i){(this._handlerType!==l||this._deltaType!==i)&&(this._handlerType=l,this._deltaType=i,this._lastUsefulFrameIndex=-1)},r}(),function(){k._deltaType=0}(),function(){k._handlerType=y.None}(),function(){k._frameIndex=0}(),function(){k._lastUsefulFrameIndex=-1}(),k);Te=Q([Z()],Te);var Ie=j.zeroTolerance,de=function(){function r(l,i,e){this.radius=l,this.phi=i,this.theta=e,this._matrix=new L,this._matrixInv=new L,this.radius=l!==void 0?l:1,this.phi=i!==void 0?i:0,this.theta=e!==void 0?e:0}var u=r.prototype;return u.makeSafe=function(){var i=Math.floor(this.phi/Math.PI);return this.phi=j.clamp(this.phi,i*Math.PI+Ie,(i+1)*Math.PI-Ie),this},u.set=function(i,e,t){return this.radius=i,this.phi=e,this.theta=t,this},u.setYAxis=function(i){var e=r._xAxis,t=r._yAxis,n=r._zAxis;f.equals(e.set(1,0,0),t.copyFrom(i).normalize())&&e.set(0,1,0),f.cross(e,t,n),n.normalize(),f.cross(t,n,e);var a=this._matrix,o=a.elements;o[0]=e.x,o[1]=e.y,o[2]=e.z,o[4]=t.x,o[5]=t.y,o[6]=t.z,o[8]=n.x,o[9]=n.y,o[10]=n.z;var _=this._matrixInv,c=_.elements;c[0]=e.x,c[4]=e.y,c[8]=e.z,c[1]=t.x,c[5]=t.y,c[9]=t.z,c[2]=n.x,c[6]=n.y,c[10]=n.z},u.setFromVec3=function(i,e){return e===void 0&&(e=!1),i.transformNormal(this._matrixInv),this.radius=i.length(),this.radius===0?(this.theta=0,this.phi=0):e?(this.phi=2*Math.PI-Math.acos(j.clamp(i.y/this.radius,-1,1)),this.theta=Math.atan2(-i.x,-i.z)):(this.phi=Math.acos(j.clamp(i.y/this.radius,-1,1)),this.theta=Math.atan2(i.x,i.z)),this},u.setToVec3=function(i){var e=this,t=e.radius,n=e.phi,a=e.theta,o=Math.sin(n)*t;return this.phi-=Math.floor(this.phi/Math.PI/2)*Math.PI*2,i.set(o*Math.sin(a),t*Math.cos(n),o*Math.cos(a)),i.transformNormal(this._matrix),this.phi>Math.PI},r}();(function(){de._xAxis=new f})();(function(){de._yAxis=new f})();(function(){de._zAxis=new f})();var Ee=function(){function r(){}return r.onUpdateHandler=function(l){return l.isKeyHeldDown(w.ArrowLeft)||l.isKeyHeldDown(w.ArrowRight)||l.isKeyHeldDown(w.ArrowUp)||l.isKeyHeldDown(w.ArrowDown)?y.PAN:y.None},r.onUpdateDelta=function(l,i){var e=l.keyPanSpeed,t=l.input;i.x=i.y=0,t.isKeyHeldDown(w.ArrowLeft)&&(i.x+=e),t.isKeyHeldDown(w.ArrowRight)&&(i.x-=e),t.isKeyHeldDown(w.ArrowUp)&&(i.y+=e),t.isKeyHeldDown(w.ArrowDown)&&(i.y-=e)},r}();Ee=Q([Z()],Ee);var F,Me;(function(r){r[r.Moving=0]="Moving",r[r.Distance=1]="Distance",r[r.None=2]="None"})(Me||(Me={}));var Se=(F=function(){function r(){}return r.onUpdateHandler=function(l){++this._frameIndex;var i=l.pointers;switch(i.length){case 1:if(l.isPointerHeldDown(A.Secondary))this._updateType(y.PAN,0);else if(l.isPointerHeldDown(A.Auxiliary))this._updateType(y.ZOOM,0);else if(l.isPointerHeldDown(A.Primary))this._updateType(y.ROTATE,0);else{var e=l.pointers[0].deltaPosition;e.x!==0&&e.y!==0?l.isPointerUp(A.Secondary)?this._updateType(y.PAN,0):l.isPointerUp(A.Auxiliary)?this._updateType(y.ZOOM,0):l.isPointerUp(A.Primary)?this._updateType(y.ROTATE,0):this._updateType(y.None,2):this._updateType(y.None,2)}break;case 2:this._updateType(y.ZOOM,1);break;case 3:this._updateType(y.PAN,0);break;default:this._updateType(y.None,2);break}return this._handlerType},r.onUpdateDelta=function(l,i){var e=this,t=e._frameIndex;switch(this._deltaType){case 0:if(i.x=0,i.y=0,this._lastUsefulFrameIndex===t-1){for(var n=l.input.pointers,a=n.length,o=a-1;o>=0;o--){var _=n[o].deltaPosition;i.x+=_.x,i.y+=_.y}i.x/=a,i.y/=a}break;case 1:var c=l.input.pointers,d=c[0],m=c[1],v=q.distance(d.position,m.position);this._lastUsefulFrameIndex===t-1?i.set(0,this._distanceOfPointers-v,0):i.set(0,0,0),this._distanceOfPointers=v;break}this._lastUsefulFrameIndex=t},r._updateType=function(l,i){(this._handlerType!==l||this._deltaType!==i)&&(this._handlerType=l,this._deltaType=i,this._lastUsefulFrameIndex=-1)},r}(),function(){F._deltaType=2}(),function(){F._handlerType=y.None}(),function(){F._frameIndex=0}(),function(){F._lastUsefulFrameIndex=-1}(),function(){F._distanceOfPointers=0}(),F);Se=Q([Z()],Se);var be=function(){function r(){}return r.onUpdateHandler=function(l){var i=l.wheelDelta;return i.x===0&&i.y===0&&i.z===0?y.None:y.ZOOM},r.onUpdateDelta=function(l,i){i.copyFrom(l.input.wheelDelta)},r}();be=Q([Z()],be);function Re(r,u){for(var l=0;l<u.length;l++){var i=u[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function yn(r,u,l){return u&&Re(r.prototype,u),l&&Re(r,l),r}function ue(r,u){return ue=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},ue(r,u)}function wn(r,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(u&&u.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),u&&ue(r,u)}function Pn(r,u,l,i){var e=arguments.length,t=e<3?u:i===null?i=Object.getOwnPropertyDescriptor(u,l):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,u,l,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(t=(e<3?n(t):e>3?n(u,l,t):n(u,l))||t);return e>3&&t&&Object.defineProperty(u,l,t),t}var Tn=`#define GLSLIFY 1
#include <common>
uniform vec3 u_pickColor;void main(){gl_FragColor=vec4(u_pickColor,1.0);}`,In=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,H,En=P.create("framebuffer-picker-color",In,Tn),W=(H=function(r){wn(u,r);function u(){var i;return i=r.apply(this,arguments)||this,i._renderersMap=[],i._frameBufferSize=new q(1024,1024),i}var l=u.prototype;return l.onAwake=function(){this._camera=this.entity.getComponent(Y)},l.pick=function(e,t){var n=this;return new Promise(function(a,o){n._setupRenderTarget();var _=n._readPixelFromRenderTarget(e,t),c=n._getRendererByPixel(_);a(c)})},l.regionPick=function(e,t,n,a){var o=this;return new Promise(function(_,c){o._setupRenderTarget();var d=o._readPixelFromRenderTarget(e,t,n,a),m=o._getRenderersByPixel(d);_(m)})},l._checkFrameBufferSize=function(){var e=this._pickRenderTarget,t=this.engine,n=this._frameBufferSize;(!e||n.x!=e.width||n.y!=e.height)&&(e&&e.destroy(),this._pickRenderTarget=new Ge(t,n.x,n.y,new je(t,n.x,n.y,ln.R8G8B8A8,!1)))},l._updateRenderersPickColor=function(e){for(var t=0,n=this._renderersMap,a=W._rootEntityRenderers,o=e.rootEntities,_=W._pickColorProperty,c=0,d=o.length;c<d;c++){o[c].getComponentsIncludeChildren(un,a);for(var m=0,v=a.length;m<v;m++){var h=a[m],C=h.shaderData,p=C.getVector3(_);p||(p=new f,C.setVector3(_,p)),this._uniqueId2Color(++t,p),n[t]=h}}},l._setupRenderTarget=function(){this._checkFrameBufferSize();var e=this._camera;this._updateRenderersPickColor(e.scene);var t=e.renderTarget,n=e.aspectRatio;e.renderTarget=this._pickRenderTarget,e.setReplacementShader(En),e.aspectRatio=n,e.render(),e.resetReplacementShader(),e.renderTarget=t,e.resetAspectRatio()},l._readPixelFromRenderTarget=function(e,t,n,a){var o,_,c,d=this._getCoordOnRenderTarget(e,t),m=arguments.length;if(m===2)o=W._pickPixel,_=c=1;else if(m===4){var v=this._getCoordOnRenderTarget(n,a);_=Math.abs(d.x-v.x),c=Math.abs(d.y-v.y),d.x=d.x<v.x?d.x:v.x,d.y=d.y<v.y?d.y:v.y,o=new Uint8Array(_*c*4)}return this._pickRenderTarget.getColorTexture().getPixelBuffer(d.x,d.y,_,c,0,o),o},l._getCoordOnRenderTarget=function(e,t){var n=this._pickRenderTarget,a=this.engine.canvas,o=this._camera.viewport,_=(o.z-o.x)*a.width,c=(o.w-o.y)*a.height;return{x:Math.floor((e-o.x)/_*(n.width-1)),y:Math.floor((t-o.y)/c*(n.height-1))}},l._getRendererByPixel=function(e){return this._renderersMap[this._color2UniqueId(e)]},l._getRenderersByPixel=function(e){var t=this,n=[],a=this._color2UniqueIds(e);return a.forEach(function(o){t._renderersMap[o]&&n.push(t._renderersMap[o])}),n},l._uniqueId2Color=function(e,t){e>=16777215&&(_n.warn("Framebuffer Picker encounter primitive's id greater than "+16777215),t.set(0,0,0)),t.set((e&255)/255,((e&65280)>>8)/255,((e&16711680)>>16)/255)},l._color2UniqueId=function(e){return e[0]|e[1]<<8|e[2]<<16},l._color2UniqueIds=function(e){W._pickIds.clear();for(var t=0;t<e.length;t+=4){var n=e[t]|e[t+1]<<8|e[t+2]<<16;W._pickIds.add(n)}return W._pickIds},yn(u,[{key:"frameBufferSize",get:function(){return this._frameBufferSize},set:function(e){this._frameBufferSize=e}}]),u}(te),function(){H._rootEntityRenderers=[]}(),function(){H._pickPixel=new Uint8Array(4)}(),function(){H._pickIds=new Set}(),function(){H._pickColorProperty=g.getByName("u_pickColor")}(),H);W=Pn([ne(Y,re.CheckOnly)],W);function Ne(r,u){for(var l=0;l<u.length;l++){var i=u[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function me(r,u,l){return u&&Ne(r.prototype,u),l&&Ne(r,l),r}var x=function(){function r(){}return r.createCuboidWireframe=function(l,i,e,t,n,a,o){var _=l/2,c=i/2,d=e/2,m=n;t[m++].set(-_,c,-d),t[m++].set(_,c,-d),t[m++].set(_,c,d),t[m++].set(-_,c,d),t[m++].set(-_,-c,-d),t[m++].set(_,-c,-d),t[m++].set(_,-c,d),t[m++].set(-_,-c,d),t[m++].set(-_,c,-d),t[m++].set(-_,c,d),t[m++].set(-_,-c,d),t[m++].set(-_,-c,-d),t[m++].set(_,c,-d),t[m++].set(_,c,d),t[m++].set(_,-c,d),t[m++].set(_,-c,-d),t[m++].set(-_,c,d),t[m++].set(_,c,d),t[m++].set(_,-c,d),t[m++].set(-_,-c,d),t[m++].set(-_,c,-d),t[m++].set(_,c,-d),t[m++].set(_,-c,-d),t[m++].set(-_,-c,-d),a[o++]=n,a[o++]=n+1,a[o++]=n+1,a[o++]=n+2,a[o++]=n+2,a[o++]=n+3,a[o++]=n+3,a[o++]=n,a[o++]=n+4,a[o++]=n+5,a[o++]=n+5,a[o++]=n+6,a[o++]=n+6,a[o++]=n+7,a[o++]=n+7,a[o++]=n+4,a[o++]=n+8,a[o++]=n+9,a[o++]=n+9,a[o++]=n+10,a[o++]=n+10,a[o++]=n+11,a[o++]=n+11,a[o++]=n+8,a[o++]=n+12,a[o++]=n+13,a[o++]=n+13,a[o++]=n+14,a[o++]=n+14,a[o++]=n+15,a[o++]=n+15,a[o++]=n+12,a[o++]=n+16,a[o++]=n+17,a[o++]=n+17,a[o++]=n+18,a[o++]=n+18,a[o++]=n+19,a[o++]=n+19,a[o++]=n+16,a[o++]=n+20,a[o++]=n+21,a[o++]=n+21,a[o++]=n+22,a[o++]=n+22,a[o++]=n+23,a[o++]=n+23,a[o++]=n+20},r.createSphereWireframe=function(l,i,e,t,n){r._shift.set(0,0,0),r.createCircleWireframe(l,0,r._shift,i,e,t,n),r.createCircleWireframe(l,1,r._shift,i,e+r.circleVertexCount,t,n+r.circleIndexCount),r.createCircleWireframe(l,2,r._shift,i,e+r.circleVertexCount*2,t,n+r.circleIndexCount*2)},r.createConeWireframe=function(l,i,e,t,n,a){r._shift.set(0,-i,0),r.createCircleWireframe(l,1,r._shift,e,t,n,a);var o=t+r.circleVertexCount,_=o;e[_++].set(0,0,0),e[_++].set(-l,-i,0),e[_++].set(l,-i,0),e[_++].set(0,-i,l),e[_++].set(0,-i,-l),a+=r.circleIndexCount,n[a++]=o,n[a++]=o+1,n[a++]=o,n[a++]=o+2,n[a++]=o,n[a++]=o+3,n[a++]=o,n[a++]=o+4},r.createUnboundCylinderWireframe=function(l,i,e,t,n){var a=5;r._shift.set(0,0,0),r.createCircleWireframe(l,1,r._shift,i,e,t,n);var o=e+r.circleVertexCount,_=o;n+=r.circleIndexCount;for(var c=0;c<8;c++){var d=j.degreeToRadian(45*c);i[_++].set(l*Math.cos(d),0,l*Math.sin(d)),i[_++].set(l*Math.cos(d),-a,l*Math.sin(d)),t[n+c*2]=o+2*c,t[n+c*2+1]=o+2*c+1}},r.createCapsuleWireframe=function(l,i,e,t,n,a){var o=r.circleIndexCount,_=r.circleVertexCount,c=i/2;r._shift.set(0,c,0),r.createCircleWireframe(l,1,r._shift,e,t,n,a),r._shift.set(0,-c,0),r.createCircleWireframe(l,1,r._shift,e,t+_,n,a+o),r.createEllipticWireframe(l,c,2,e,t+_*2,n,a+o*2),r.createEllipticWireframe(l,c,0,e,t+_*3,n,a+o*2+r.ellipticIndexCount)},r.createCircleWireframe=function(l,i,e,t,n,a,o){for(var _=r.circleVertexCount,c=Math.PI*2,d=1/_,m=n,v=0;v<_;++v){var h=v*d,C=h*c;switch(i){case 0:t[m++].set(e.x,l*Math.cos(C)+e.y,l*Math.sin(C)+e.z);break;case 1:t[m++].set(l*Math.cos(C)+e.x,e.y,l*Math.sin(C)+e.z);break;case 2:t[m++].set(l*Math.cos(C)+e.x,l*Math.sin(C)+e.y,e.z);break}var p=v+n;v<_-1?(a[o+2*v]=p,a[o+2*v+1]=p+1):(a[o+2*v]=p,a[o+2*v+1]=n)}},r.createEllipticWireframe=function(l,i,e,t,n,a,o){for(var _=r.circleVertexCount,c=Math.PI*2,d=1/_,m=n,v=0;v<_;++v){var h=v*d,C=h*c;switch(e){case 0:t[m++].set(0,l*Math.sin(C)+i,l*Math.cos(C));break;case 1:t[m++].set(l*Math.cos(C),i,l*Math.sin(C));break;case 2:t[m++].set(l*Math.cos(C),l*Math.sin(C)+i,0);break}v==_/2&&(i=-i);var p=v+n;v<_-1?(a[o+2*v]=p,a[o+2*v+1]=p+1):(a[o+2*v]=p,a[o+2*v+1]=n)}},r.createFrustumWireframe=function(l,i,e,t,n,a,o){r._shift.set(0,0,0),r.createCircleWireframe(l,2,r._shift,t,n,a,o),r._shift.set(0,0,-i);var _=j.degreeToRadian(e),c=Math.tan(_),d=l+c*i;r.createCircleWireframe(d,2,r._shift,t,n+r.circleVertexCount,a,o+r.circleIndexCount);var m=n+2*r.circleVertexCount,v=m;t[v++].set(0,0,0),t[v++].set(0,0,-i),t[v++].set(l,0,0),t[v++].set(d,0,-i),t[v++].set(-l,0,0),t[v++].set(-d,0,-i),t[v++].set(0,l,0),t[v++].set(0,d,-i),t[v++].set(0,-l,0),t[v++].set(0,-d,-i),o+=2*r.circleIndexCount,a[o++]=m,a[o++]=m+1,a[o++]=m+2,a[o++]=m+3,a[o++]=m+4,a[o++]=m+5,a[o++]=m+6,a[o++]=m+7,a[o++]=m+8,a[o++]=m+9},r.createHemisphereWireframe=function(l,i,e,t,n,a){for(var o=r.circleVertexCount/2,_=Math.PI,c=1/o,d=t,m=0;m<o+1;m++){var v=m*c,h=v*_;switch(i){case 0:e[d++].set(l*Math.sin(h),0,l*Math.cos(h));break;case 1:e[d++].set(0,l*Math.sin(h),l*Math.cos(h));break;case 2:e[d++].set(-l*Math.cos(h),0,-l*Math.sin(h));break}var C=m+t;m<o&&(n[a+2*m]=C,n[a+2*m+1]=C+1)}a+=r.circleVertexCount;for(var p=0;p<o+1;p++){var I=p*c,T=I*_;switch(i){case 0:e[d++].set(l*Math.sin(T),l*Math.cos(T),0);break;case 1:e[d++].set(l*Math.cos(T),l*Math.sin(T),0);break;case 2:e[d++].set(0,-l*Math.cos(T),-l*Math.sin(T));break}var M=p+t+o+1;p<o&&(n[a+2*p]=M,n[a+2*p+1]=M+1)}r._shift.set(0,0,0),r.createCircleWireframe(l,i,r._shift,e,t+r.circleVertexCount+2,n,a+r.circleVertexCount)},me(r,null,[{key:"cuboidIndexCount",get:function(){return 48}},{key:"cuboidPositionCount",get:function(){return 24}},{key:"sphereIndexCount",get:function(){return r.circleIndexCount*3}},{key:"spherePositionCount",get:function(){return r.circlePositionCount*3}},{key:"coneIndexCount",get:function(){return r.circleIndexCount+8}},{key:"conePositionCount",get:function(){return r.circlePositionCount+5}},{key:"unboundCylinderIndexCount",get:function(){return r.circleIndexCount+16}},{key:"unboundCylinderPositionCount",get:function(){return r.circlePositionCount+16}},{key:"capsuleIndexCount",get:function(){return(r.circleIndexCount+r.ellipticIndexCount)*2}},{key:"capsulePositionCount",get:function(){return(r.circlePositionCount+r.ellipticPositionCount)*2}},{key:"circleIndexCount",get:function(){return r.circleVertexCount*2}},{key:"circlePositionCount",get:function(){return r.circleVertexCount}},{key:"ellipticIndexCount",get:function(){return r.circleVertexCount*2}},{key:"ellipticPositionCount",get:function(){return r.circleVertexCount}},{key:"frustumIndexCount",get:function(){return r.circleIndexCount*2+10}},{key:"frustumPositionCount",get:function(){return r.circleVertexCount*2+10}},{key:"hemisphereIndexCount",get:function(){return r.circleVertexCount*2+r.circleIndexCount}},{key:"hemispherePositionCount",get:function(){return r.circleVertexCount+2+r.circlePositionCount}}]),r}();(function(){x._shift=new f})();(function(){x.circleVertexCount=40})();function _e(r,u){return _e=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},_e(r,u)}function qe(r,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(u&&u.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),u&&_e(r,u)}function Ze(r,u,l,i){var e=arguments.length,t=e<3?u:i===null?i=Object.getOwnPropertyDescriptor(u,l):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,u,l,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(t=(e<3?n(t):e>3?n(u,l,t):n(u,l))||t);return e>3&&t&&Object.defineProperty(u,l,t),t}(function(){g.getByName("u_lightDir")})();(function(){g.getByName("u_planarHeight")})();(function(){g.getByName("u_planarShadowColor")})();(function(){g.getByName("u_planarShadowFalloff")})();var Mn=new cn(`
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
    `);P.create("planarShadowShader",[P.find("pbr").subShaders[0].passes[0],Mn]);function Ae(r,u){for(var l=0;l<u.length;l++){var i=u[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Sn(r,u,l){return u&&Ae(r.prototype,u),l&&Ae(r,l),r}function ce(r,u){return ce=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},ce(r,u)}function bn(r,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(u&&u.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),u&&ce(r,u)}(function(){g.getByName("u_far")})();(function(){g.getByName("u_near")})();(function(){g.getByName("u_primaryScale")})();(function(){g.getByName("u_secondaryScale")})();(function(){g.getByName("u_gridIntensity")})();(function(){g.getByName("u_axisIntensity")})();(function(){g.getByName("u_flipProgress")})();(function(){g.getByName("u_fade")})();P.create("grid",`
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
`);var Rn=`
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
  `,Nn=`
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
  `;P.create("water-ripple",Rn,Nn);(function(){g.getByName("u_foamColor")})();(function(){g.getByName("u_foam_speed")})();(function(){g.getByName("u_foam_param")})();(function(){g.getByName("u_distorsion_speed")})();(function(){g.getByName("u_distorsion_amount")})();(function(){g.getByName("u_foamTex")})();var An=`
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
    `,Dn=`
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
    `;P.create("water",An,Dn);(function(){g.getByName("u_water_speed")})();(function(){g.getByName("u_edgeColor")})();(function(){g.getByName("u_edgeParam")})();(function(){g.getByName("u_distorsion_amount")})();(function(){g.getByName("u_distorsion_speed")})();(function(){g.getByName("u_waterTex")})();(function(){g.getByName("u_edgeTex")})();var Wn=`
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
    `,Ln=`
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
    `;P.create("water-fall",Wn,Ln);(function(){g.getByName("u_water_speed")})();(function(){g.getByName("u_waterfall_speed")})();(function(){g.getByName("u_distorsion_speed")})();(function(){g.getByName("u_edgeColor")})();(function(){g.getByName("u_edgeParam")})();(function(){g.getByName("u_distorsion_amount")})();(function(){g.getByName("u_waterTex")})();(function(){g.getByName("u_waterfallTex")})();(function(){g.getByName("u_edgeNoiseTex")})();var Un=`
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
`,zn=`
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
`;P.create("bake-pbr",zn,Un);(function(){g.getByName("u_lightMapTexture")})();(function(){g.getByName("u_lightMapIntensity")})();var Qe=function(r){bn(u,r);function u(i){var e;e=r.call(this,i,P.find("plain-color"))||this;var t=e.shaderData;return t.enableMacro("MATERIAL_OMIT_NORMAL"),t.setColor(u._baseColorProp,new $(1,1,1,1)),e.renderState.rasterState.cullMode=sn.Off,e}var l=u.prototype;return l.clone=function(){var e=new u(this._engine);return this.cloneTo(e),e},Sn(u,[{key:"baseColor",get:function(){return this.shaderData.getColor(u._baseColorProp)},set:function(e){var t=this.shaderData.getColor(u._baseColorProp);e!==t&&t.copyFrom(e)}}]),u}(Je);P.create("plain-color",`
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
`);function le(r,u){return u!=null&&typeof Symbol<"u"&&u[Symbol.hasInstance]?!!u[Symbol.hasInstance](r):r instanceof u}var R,E=(R=function(r){qe(u,r);function u(){var i;return i=r.apply(this,arguments)||this,i._cameraPositions=[new f,new f,new f,new f,new f,new f,new f,new f],i._localPositions=[],i._globalPositions=[],i._indices=null,i._indicesCount=0,i._boundsIndicesCount=0,i._wireframeRenderers=[],i._wireframeElements=[],i}var l=u.prototype;return l.clear=function(){this._wireframeRenderers.length=0,this._wireframeElements.length=0,this._localPositions.length=0,this._globalPositions.length=0,this._indicesCount=0,this._mesh.subMesh.count=0},l.addEntityWireframe=function(e,t){if(t===void 0&&(t=!0),t){var n=new Array;e.getComponentsIncludeChildren(Y,n);for(var a=0,o=n.length;a<o;a++)this.addCameraWireframe(n[a]);var _=n.length;e.getComponentsIncludeChildren(he,n);for(var c=_,d=n.length;c<d;c++)this.addSpotLightWireframe(n[c]);_=n.length,e.getComponentsIncludeChildren(ge,n);for(var m=_,v=n.length;m<v;m++)this.addDirectLightWireframe(n[m]);_=n.length,e.getComponentsIncludeChildren(xe,n);for(var h=_,C=n.length;h<C;h++)this.addPointLightWireframe(n[h]);_=n.length,e.getComponentsIncludeChildren(pe,n);for(var p=_,I=n.length;p<I;p++)this.addCollideWireframe(n[p]);_=n.length,e.getComponentsIncludeChildren(Ce,n);for(var T=_,M=n.length;T<M;T++)this.addParticleRendererEmissionShapeWireframe(n[T])}else{var b=e.getComponent(Y);b&&this.addCameraWireframe(b);var N=e.getComponent(he);N&&this.addSpotLightWireframe(N);var X=e.getComponent(ge);X&&this.addDirectLightWireframe(X);var ee=e.getComponent(xe);ee&&this.addPointLightWireframe(ee);var K=e.getComponent(pe);K&&this.addCollideWireframe(K);var U=e.getComponent(Ce);U&&this.addParticleRendererEmissionShapeWireframe(U)}},l.addCameraWireframe=function(e){var t=e.entity.transform,n=e.projectionMatrix.clone();n.invert();var a=this._localPositions,o=a.length;this._wireframeElements.push(new S(t,o));for(var _=E._ndcPosition,c=0;c<4;c++){var d=this._cameraPositions[c];d.copyFrom(_[c]),d.transformCoordinate(n),a.push(d)}for(var m=0;m<4;m++){var v=this._cameraPositions[m+4];v.copyFrom(_[m]),v.z=1,v.transformCoordinate(n),a.push(v)}this._growthIndexMemory(24);var h=this._indices;h[this._indicesCount++]=o,h[this._indicesCount++]=o+1,h[this._indicesCount++]=o+1,h[this._indicesCount++]=o+2,h[this._indicesCount++]=o+2,h[this._indicesCount++]=o+3,h[this._indicesCount++]=o+3,h[this._indicesCount++]=o,h[this._indicesCount++]=o,h[this._indicesCount++]=o+4,h[this._indicesCount++]=o+1,h[this._indicesCount++]=o+5,h[this._indicesCount++]=o+2,h[this._indicesCount++]=o+6,h[this._indicesCount++]=o+3,h[this._indicesCount++]=o+7,h[this._indicesCount++]=o+4,h[this._indicesCount++]=o+5,h[this._indicesCount++]=o+5,h[this._indicesCount++]=o+6,h[this._indicesCount++]=o+6,h[this._indicesCount++]=o+7,h[this._indicesCount++]=o+7,h[this._indicesCount++]=o+4},l.addSpotLightWireframe=function(e){var t=e.distance,n=Math.tan(e.angle/2)*t,a=this._localPositions.length,o=x.coneIndexCount;this._growthIndexMemory(o),this._growthPosition(x.conePositionCount);var _=this,c=_._indices,d=_._localPositions;x.createConeWireframe(n,t,d,a,c,this._indicesCount),this._indicesCount+=o,this._rotateAroundX(a),this._wireframeElements.push(new S(e.entity.transform,a))},l.addPointLightWireframe=function(e){var t=this._localPositions.length,n=x.sphereIndexCount;this._growthIndexMemory(n),this._growthPosition(x.spherePositionCount);var a=this,o=a._indices,_=a._localPositions;x.createSphereWireframe(e.distance,_,t,o,this._indicesCount),this._indicesCount+=n,this._wireframeElements.push(new S(e.entity.transform,t))},l.addDirectLightWireframe=function(e){var t=this._localPositions.length,n=x.unboundCylinderIndexCount;this._growthIndexMemory(n),this._growthPosition(x.unboundCylinderPositionCount);var a=this,o=a._indices,_=a._localPositions;x.createUnboundCylinderWireframe(1,_,t,o,this._indicesCount),this._indicesCount+=n,this._rotateAroundX(t),this._wireframeElements.push(new S(e.entity.transform,t))},l.addRendererWireframe=function(e){this._boundsIndicesCount+=x.cuboidIndexCount,this._wireframeRenderers.push(e)},l.addCollideWireframe=function(e){for(var t=e.shapes,n=0,a=t.length;n<a;n++){var o=t[n];le(o,dn)?this.addBoxColliderShapeWireframe(o):le(o,mn)?this.addSphereColliderShapeWireframe(o):le(o,vn)&&this.addCapsuleColliderShapeWireframe(o)}},l.addBoxColliderShapeWireframe=function(e){var t=e.collider.entity.transform,n=t.lossyWorldScale,a=e.position,o=e.rotation,_=e.size,c=E._tempVector,d=E._tempRotation,m=this._localPositions.length,v=x.cuboidIndexCount;this._growthIndexMemory(v),this._growthPosition(x.cuboidPositionCount);var h=this,C=h._indices,p=h._localPositions;x.createCuboidWireframe(n.x*_.x,n.y*_.y,n.z*_.z,p,m,C,this._indicesCount),D.rotationYawPitchRoll(o.x,o.y,o.z,d),this._localRotation(m,d),f.multiply(a,n,c),this._localTranslate(m,c),this._indicesCount+=v,this._wireframeElements.push(new S(t,m))},l.addSphereColliderShapeWireframe=function(e){var t=e.collider.entity.transform,n=t.lossyWorldScale,a=e.position,o=e.rotation,_=e.radius,c=E._tempVector,d=E._tempRotation,m=this._localPositions.length,v=x.sphereIndexCount;this._growthIndexMemory(v),this._growthPosition(x.spherePositionCount);var h=this,C=h._indices,p=h._localPositions;x.createSphereWireframe(Math.max(n.x,n.y,n.z)*_,p,m,C,this._indicesCount),D.rotationYawPitchRoll(o.x,o.y,o.z,d),this._localRotation(m,d),f.multiply(a,n,c),this._localTranslate(m,c),this._indicesCount+=v,this._wireframeElements.push(new S(t,m))},l.addCapsuleColliderShapeWireframe=function(e){var t=e.collider.entity.transform,n=t.lossyWorldScale,a=Math.max(n.x,n.y,n.z),o=e.radius,_=e.height,c=e.upAxis,d=e.position,m=e.rotation,v=E._tempVector,h=E._tempRotation,C=E._tempAxis,p=E._halfSqrt,I=this._localPositions.length,T=x.capsuleIndexCount;this._growthIndexMemory(T),this._growthPosition(x.capsulePositionCount);var M=this,b=M._indices,N=M._localPositions;switch(x.createCapsuleWireframe(a*o,a*_,N,I,b,this._indicesCount),c){case ae.X:C.set(0,0,p,p);break;case ae.Y:C.set(0,0,0,1);break;case ae.Z:C.set(p,0,0,p)}D.rotationYawPitchRoll(m.x,m.y,m.z,h),D.multiply(h,C,h),this._localRotation(I,h),f.multiply(d,n,v),this._localTranslate(I,v),this._indicesCount+=T,this._wireframeElements.push(new S(t,I))},l.addParticleRendererEmissionShapeWireframe=function(e){if(e.generator.emission.enabled){var t,n=e.generator.emission.shape,a=e.entity.transform;switch((t=n)==null?void 0:t.shapeType){case 0:this.addBoxParticleShapeWireframe(n,a);break;case 1:this.addCircleParticleShapeWireframe(n,a);break;case 2:this.addConeParticleShapeWireframe(n,a);break;case 3:this.addHemisphereParticleShapeWireframe(n,a);break;case 4:this.addSphereParticleShapeWireframe(n,a);break}}},l.addBoxParticleShapeWireframe=function(e,t){var n=e.size,a=this._localPositions.length,o=x.cuboidIndexCount;this._growthIndexMemory(o),this._growthPosition(x.cuboidPositionCount);var _=this,c=_._indices,d=_._localPositions;x.createCuboidWireframe(n.x,n.y,n.z,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(t,a,!1))},l.addCircleParticleShapeWireframe=function(e,t){var n=e.radius,a=this._localPositions.length,o=x.circleIndexCount;this._growthIndexMemory(o),this._growthPosition(x.circlePositionCount);var _=this,c=_._indices,d=_._localPositions;x.createCircleWireframe(n,0,new f,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(t,a,!1))},l.addConeParticleShapeWireframe=function(e,t){var n=e.radius,a=e.length,o=e.angle,_=this._localPositions.length,c=x.frustumIndexCount;this._growthIndexMemory(c),this._growthPosition(x.frustumPositionCount);var d=this,m=d._indices,v=d._localPositions;x.createFrustumWireframe(n,a,o,v,_,m,this._indicesCount),this._indicesCount+=c,this._wireframeElements.push(new S(t,_,!1))},l.addHemisphereParticleShapeWireframe=function(e,t){var n=e.radius,a=this._localPositions.length,o=x.hemisphereIndexCount;this._growthIndexMemory(o),this._growthPosition(x.hemispherePositionCount);var _=this,c=_._indices,d=_._localPositions;x.createHemisphereWireframe(n,2,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(t,a,!1))},l.addSphereParticleShapeWireframe=function(e,t){var n=e.radius,a=this._localPositions.length,o=x.sphereIndexCount;this._growthIndexMemory(o),this._growthPosition(x.spherePositionCount);var _=this,c=_._indices,d=_._localPositions;x.createSphereWireframe(n,d,a,c,this._indicesCount),this._indicesCount+=o,this._wireframeElements.push(new S(t,a,!1))},l.onAwake=function(){var e=this.engine,t=new Xe(e),n=new Qe(e),a=this.entity.getComponent(J);a.castShadows=!1,a.receiveShadows=!1;var o=e._hardwareRenderer.canIUse(Ke.elementIndexUint);t.addSubMesh(0,this._indicesCount,$e.Lines),a.mesh=t,a.setMaterial(n);var _=t.bounds;_.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),_.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=t,this._material=n,this._renderer=a,this._indices=o?new Uint32Array(128):new Uint16Array(128),this._supportUint32Array=o},l.onEnable=function(){this._renderer.enabled=!0},l.onDisable=function(){this._renderer.enabled=!1},l.onLateUpdate=function(e){var t=this,n=t._mesh,a=t._localPositions,o=t._globalPositions,_=t._wireframeElements,c=t._wireframeRenderers,d=t._indices,m=a.length;o.length=m;for(var v=0,h=!1,C=0,p=_.length;C<p;C++){var I=_[C],T=I.transformRanges,M=C<p-1?_[C+1].transformRanges:m;if(I.updateFlag.flag){var b=I.transform,N=E._tempMatrix;I.isScaleIgnored?L.rotationTranslation(b.worldRotationQuaternion,b.worldPosition,N):N.copyFrom(b.worldMatrix);for(var X=T;X<M;X++){var ee=a[v],K=E._getPositionFromPool(v);f.transformCoordinate(ee,N,K),o[v]=K,v++}I.updateFlag.flag=!1,h=!0}else v+=M-T}this._growthIndexMemory(this._boundsIndicesCount);for(var U=this._indicesCount,ie=0;ie<c.length;ie++){var tn=c[ie],ve=tn.bounds,B=E._tempVector;ve.getExtent(B);var fe=o.length;x.createCuboidWireframe(B.x*2,B.y*2,B.z*2,o,fe,d,U),ve.getCenter(B);for(var oe=fe;oe<o.length;oe++){var on=o[oe];on.add(B)}U+=x.cuboidIndexCount}(c.length>0||h)&&(n.setPositions(o),n.setIndices(this._indices),n.uploadData(!1),n.subMesh.count=U),U===0?this._renderer.setMaterial(null):this._renderer.setMaterial(this._material)},l._growthIndexMemory=function(e){var t=this._indices,n=this._indicesCount+e;if(n>t.length){var a=this._supportUint32Array?4294967295:65535;if(n>a)throw Error("The vertex count is over limit.");var o=this._supportUint32Array?new Uint32Array(n):new Uint16Array(n);o.set(t),this._indices=o}},l._growthPosition=function(e){for(var t=this._localPositions,n=0;n<e;n++)t.push(new f)},l._localTranslate=function(e,t){for(var n=this._localPositions,a=e;a<n.length;a++){var o=n[a];o.add(t)}},l._localRotation=function(e,t){for(var n=this._localPositions,a=e;a<n.length;a++){var o=n[a];f.transformByQuat(o,t,o)}},l._rotateAroundX=function(e){for(var t=this._localPositions,n=e;n<t.length;n++){var a=t[n],o=a.y,_=a.z;a.z=o,a.y=-_}},u._getPositionFromPool=function(e){var t,n=E._positionPool;return e<n.length?t=n[e]:(t=new f,E._positionPool.push(t)),t},me(u,[{key:"baseColor",get:function(){return this._material.baseColor},set:function(e){this._material.baseColor=e}}]),u}(te),function(){R._positionPool=[]}(),function(){R._ndcPosition=[new f(-1,1,-1),new f(1,1,-1),new f(1,-1,-1),new f(-1,-1,-1)]}(),function(){R._tempMatrix=new L}(),function(){R._tempVector=new f}(),function(){R._tempRotation=new D}(),function(){R._tempAxis=new D}(),function(){R._halfSqrt=.70710678118655}(),R);E=Ze([ne(J,re.CheckOnly)],E);var S=function(u,l,i){i===void 0&&(i=!0),this.transform=u,this.transformRanges=l,this.isScaleIgnored=i,this.updateFlag=u.registerWorldChangeFlag()},O,s=(O=function(r){qe(u,r);function u(){return r.apply(this,arguments)}var l=u.prototype;return l.onAwake=function(){var e=this.engine,t=new Xe(e),n=new Qe(e),a=this.entity.getComponent(J);a.castShadows=!1,a.receiveShadows=!1;var o=e._hardwareRenderer.canIUse(Ke.elementIndexUint);t._enableVAO=!1,t.addSubMesh(0,s._indicesCount,$e.Lines),a.mesh=t,a.setMaterial(n);var _=t.bounds;_.min.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),_.max.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this._mesh=t,this._material=n,this._renderer=a,s._indices=o?new Uint32Array(128):new Uint16Array(128),s._supportUint32Array=o},l.onLateUpdate=function(e){var t=this,n=t._mesh;s._positionCount>0?(n.setPositions(s._positions),n.setIndices(s._indices),n.uploadData(!1),n.subMesh.count=s._indicesCount,this._renderer.setMaterial(this._material)):this._renderer.setMaterial(null),s.flush()},u.drawLine=function(e,t){s._growthPosition(2),s._growthIndexMemory(2),s._indices[s._indicesCount++]=s._positionCount,s._indices[s._indicesCount++]=s._positionCount+1,s.matrix==null?(s._positions[s._positionCount++].copyFrom(e),s._positions[s._positionCount++].copyFrom(t)):(f.transformCoordinate(e,s.matrix,s._positions[s._positionCount++]),f.transformCoordinate(t,s.matrix,s._positions[s._positionCount++]))},u.drawRect=function(e,t,n,a){s._growthPosition(4),s._growthIndexMemory(8),s._indices[s._indicesCount++]=s._positionCount,s._indices[s._indicesCount++]=s._positionCount+1,s._indices[s._indicesCount++]=s._positionCount+2,s._indices[s._indicesCount++]=s._positionCount+1,s._indices[s._indicesCount++]=s._positionCount+2,s._indices[s._indicesCount++]=s._positionCount+3,s._indices[s._indicesCount++]=s._positionCount,s._indices[s._indicesCount++]=s._positionCount+3,s.matrix==null?(s._positions[s._positionCount++].copyFrom(e),s._positions[s._positionCount++].copyFrom(t),s._positions[s._positionCount++].copyFrom(n),s._positions[s._positionCount++].copyFrom(a)):(f.transformCoordinate(e,s.matrix,s._positions[s._positionCount++]),f.transformCoordinate(t,s.matrix,s._positions[s._positionCount++]),f.transformCoordinate(n,s.matrix,s._positions[s._positionCount++]),f.transformCoordinate(a,s.matrix,s._positions[s._positionCount++]))},u.drawSphere=function(e,t){var n=x.spherePositionCount,a=x.sphereIndexCount,o=s._positions;s._growthPosition(n),s._growthIndexMemory(a),x.createSphereWireframe(e,o,s._positionCount,s._indices,s._indicesCount);for(var _=0;_<n;_++){var c=o[s._positionCount+_];c.add(t),s.matrix!=null&&f.transformCoordinate(c,s.matrix,c)}s._positionCount+=n,s._indicesCount+=a},u.drawCuboid=function(e,t,n,a){var o=x.cuboidPositionCount,_=x.cuboidIndexCount,c=s._positions;s._growthPosition(o),s._growthIndexMemory(_),x.createCuboidWireframe(e,t,n,c,s._positionCount,s._indices,s._indicesCount);for(var d=0;d<o;d++){var m=c[s._positionCount+d];m.add(a),s.matrix!=null&&f.transformCoordinate(m,s.matrix,m)}s._positionCount+=o,s._indicesCount+=_},u.drawCapsule=function(e,t,n){var a=x.capsulePositionCount,o=x.capsuleIndexCount,_=s._positions;s._growthPosition(a),s._growthIndexMemory(o),x.createCapsuleWireframe(e,t,_,s._positionCount,s._indices,s._indicesCount);for(var c=0;c<a;c++){var d=_[s._positionCount+c];d.add(n),s.matrix!=null&&f.transformCoordinate(d,s.matrix,d)}s._positionCount+=a,s._indicesCount+=o},u.drawCircle=function(e,t,n){x._shift.set(0,0,0);var a=x.circlePositionCount,o=x.circleIndexCount,_=s._positions;s._growthPosition(a),s._growthIndexMemory(o),x.createCircleWireframe(e,t,x._shift,_,s._positionCount,s._indices,s._indicesCount);for(var c=0;c<a;c++){var d=_[s._positionCount+c];d.add(n),s.matrix!=null&&f.transformCoordinate(d,s.matrix,d)}s._positionCount+=a,s._indicesCount+=o},u.flush=function(){s._positionCount=0,s._indicesCount=0},u._growthIndexMemory=function(e){var t=s._indices,n=s._indicesCount+e;if(n>t.length){var a=s._supportUint32Array?4294967295:65535;if(n>a)throw Error("The vertex count is over limit.");var o=s._supportUint32Array?new Uint32Array(n):new Uint16Array(n);o.set(t),s._indices=o}},u._growthPosition=function(e){var t=s._positions,n=s._positionCount+e;if(n>t.length)for(var a=0,o=n-t.length;a<o;a++)t.push(new f)},me(u,[{key:"color",set:function(e){this._material.baseColor.copyFrom(e)}}]),u}(te),function(){O._positions=[]}(),function(){O._positionCount=0}(),function(){O._indicesCount=0}(),function(){O.matrix=null}(),O);s=Ze([ne(J,re.CheckOnly)],s);var De;(function(r){r[r.X=0]="X",r[r.Y=1]="Y",r[r.Z=2]="Z"})(De||(De={}));P.create("skeleton-viewer",`
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
      `);var We;(function(r){r[r.Round=0]="Round",r[r.Butt=1]="Butt",r[r.Square=2]="Square"})(We||(We={}));var Le;(function(r){r[r.Miter=0]="Miter",r[r.Round=1]="Round",r[r.Bevel=2]="Bevel"})(Le||(Le={}));function en(r){this.message=r}en.prototype=new Error;en.prototype.name="InvalidCharacterError";var Fn=`
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
  `,Vn=`
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

  `;P.create("line",Fn,Vn);var Bn=`
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
  `,kn=`
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
`;P.create("dash",Bn,kn);var Ue;(function(r){r[r.Pivot=0]="Pivot",r[r.Center=1]="Center"})(Ue||(Ue={}));var ze;(function(r){r[r.Local=0]="Local",r[r.Global=1]="Global"})(ze||(ze={}));var Fe;(function(r){r[r.None=0]="None",r[r.AnchorDirty=1]="AnchorDirty",r[r.CoordinateDirty=2]="CoordinateDirty",r[r.All=3]="All"})(Fe||(Fe={}));(function(){new f})();(function(){new L})();(function(){new L})();(function(){new fn})();var Ve;(function(r){r[r.translate=1]="translate",r[r.rotate=2]="rotate",r[r.scale=4]="scale",r[r.all=15]="all"})(Ve||(Ve={}));var Be;(function(r){r[r.Circle=0]="Circle",r[r.Line=1]="Line",r[r.CircleTube=2]="CircleTube"})(Be||(Be={}));(function(){new D})();(function(){new f})();var ke;(function(r){r[r.x=0]="x",r[r.y=1]="y",r[r.z=2]="z",r[r.xyz=3]="xyz",r[r.xy=4]="xy",r[r.yz=5]="yz",r[r.xz=6]="xz"})(ke||(ke={}));new f(1,0,0),new f(0,1,0),new f(0,0,1),new f(1,1,1),new f(1,1,0),new f(0,1,1),new f(1,0,1);new z(new f(1,0,0),0),new z(new f(0,1,0),0),new z(new f(0,0,1),0),new z(new f(0,0,0),0),new z(new f(0,0,1),0),new z(new f(1,0,0),0),new z(new f(0,1,0),0);function He(r,u){for(var l=0;l<u.length;l++){var i=u[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Hn(r,u,l){return u&&He(r.prototype,u),l&&He(r,l),r}function se(r,u){return se=Object.setPrototypeOf||function(i,e){return i.__proto__=e,i},se(r,u)}function On(r,u){if(typeof u!="function"&&u!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(u&&u.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),u&&se(r,u)}function Gn(r,u,l,i){var e=arguments.length,t=e<3?u:i===null?i=Object.getOwnPropertyDescriptor(u,l):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,u,l,i);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(t=(e<3?n(t):e>3?n(u,l,t):n(u,l))||t);return e>3&&t&&Object.defineProperty(u,l,t),t}var jn=`#define GLSLIFY 1
uniform vec3 material_OutlineColor;uniform sampler2D material_OutlineTexture;uniform vec2 material_TexSize;varying vec2 v_uv;float luminance(vec4 color){return 0.2125*color.r+0.7154*color.g+0.0721*color.b;}float sobel(){float Gx[9];Gx[0]=-1.0;Gx[1]=0.0;Gx[2]=1.0;Gx[3]=-2.0;Gx[4]=0.0;Gx[5]=2.0;Gx[6]=-1.0;Gx[7]=0.0;Gx[8]=1.0;float Gy[9];Gy[0]=-1.0;Gy[1]=-2.0;Gy[2]=-1.0;Gy[3]=0.0;Gy[4]=0.0;Gy[5]=0.0;Gy[6]=1.0;Gy[7]=2.0;Gy[8]=1.0;float texColor;float edgeX=0.0;float edgeY=0.0;vec2 uv[9];uv[0]=v_uv+material_TexSize.xy*vec2(-1,-1);uv[1]=v_uv+material_TexSize.xy*vec2(0,-1);uv[2]=v_uv+material_TexSize.xy*vec2(1,-1);uv[3]=v_uv+material_TexSize.xy*vec2(-1,0);uv[4]=v_uv+material_TexSize.xy*vec2(0,0);uv[5]=v_uv+material_TexSize.xy*vec2(1,0);uv[6]=v_uv+material_TexSize.xy*vec2(-1,1);uv[7]=v_uv+material_TexSize.xy*vec2(0,1);uv[8]=v_uv+material_TexSize.xy*vec2(1,1);for(int i=0;i<9;i++){texColor=luminance(texture2D(material_OutlineTexture,uv[i]));edgeX+=texColor*Gx[i];edgeY+=texColor*Gy[i];}return abs(edgeX)+abs(edgeY);}vec4 linearToGamma(vec4 linearIn){return vec4(pow(linearIn.rgb,vec3(1.0/2.2)),linearIn.a);}void main(){float sobelFactor=step(1.0,sobel());gl_FragColor=mix(vec4(0),vec4(material_OutlineColor,1.0),sobelFactor);
#ifndef ENGINE_IS_COLORSPACE_GAMMA
gl_FragColor=linearToGamma(gl_FragColor);
#endif
}`,Jn=`#define GLSLIFY 1
attribute vec3 POSITION;attribute vec2 TEXCOORD_0;varying vec2 v_uv;void main(){gl_Position=vec4(POSITION.xzy,1.0);gl_Position.y*=-1.0;v_uv=TEXCOORD_0;}`,Xn=`#define GLSLIFY 1
uniform vec4 camera_OutlineReplaceColor;void main(){gl_FragColor=camera_OutlineReplaceColor;}`,Kn=`#define GLSLIFY 1
#include <common>
#include <common_vert>
#include <blendShape_input>
void main(){
#include <begin_position_vert>
#include <begin_normal_vert>
#include <blendShape_vert>
#include <skinning_vert>
#include <position_vert>
}`,G,V=(G=function(r){On(u,r);function u(i){var e;e=r.call(this,i)||this,e.isChildrenIncluded=!1,e._size=1,e._clearColor=new $(1,1,1,1),e._replaceColor=new $(1,0,0,1),e._outlineMainColor=new $(.95,.35,.14,1),e._outlineSubColor=new $(.16,.67,.89,1),e._layer=xn.Layer29,e._outlineEntities=[],e._subLineEntities=[],e._renderers=[],e._layerMap=[],e._cameraViewport=new ye,e._outLineViewport=new ye(0,0,1,1);var t=e.engine,n=new Je(t,P.find("outline-postprocess-shader")),a=P.find("outline-replace-shader"),o=e.entity.createChild("screen"),_=o.addComponent(J);return _.receiveShadows=!1,_.castShadows=!1,o.layer=e._layer,o.isActive=!1,_.mesh=pn.createPlane(t,2,2),_.setMaterial(n),n.isTransparent=!0,e._outlineMaterial=n,e._replaceShader=a,e._screenEntity=o,e.size=e._size,e}var l=u.prototype;return l.clear=function(){this._outlineEntities.length=0},l.addEntity=function(e){this._outlineEntities.indexOf(e)===-1&&(this._outlineEntities.push(e),this.isChildrenIncluded&&this._calSublineEntites())},l.removeEntity=function(e){var t=this._outlineEntities.indexOf(e),n=this._outlineEntities.length;t>-1&&(t<n-1&&(this._outlineEntities[t]=this._outlineEntities[n-1]),this._outlineEntities.length--,this.isChildrenIncluded&&this._calSublineEntites())},l.onEndRender=function(e){var t=this._outlineEntities;!t.length||(this._renderEntity(e,this.subColor,this._subLineEntities),this._renderEntity(e,this.mainColor,t))},l.onDestroy=function(){this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy(),this._screenEntity.destroy(),this._outlineEntities=null,this._renderers=null,this._layerMap=null},l._renderEntity=function(e,t,n){var a=e.scene,o=e.clearFlags,_=e.cullingMask,c=e.enableFrustumCulling,d=a.background.solidColor,m=a.background.mode,v=this._renderers,h=this._layerMap;h.length=0;for(var C=n.length-1;C>=0;C--){var p=n[C];v.length=0,p.getComponents(J,v),v.length&&(h.push({entity:p,layer:p.layer}),p.layer=this._layer)}this._screenEntity.isActive=!1,e.renderTarget=this._renderTarget,a.background.solidColor=this._clearColor,a.background.mode=hn.SolidColor,e.cullingMask=this._layer,e.setReplacementShader(this._replaceShader),e.shaderData.setColor(V._replaceColorProp,this._replaceColor),e.render(),this._cameraViewport.copyFrom(e.viewport),this._screenEntity.isActive=!0,e.renderTarget=null,e.viewport=this._outLineViewport,e.clearFlags=gn.None,e.enableFrustumCulling=!1,e.resetReplacementShader();for(var I=h.length-1;I>=0;I--){var T=h[I],M=T.entity,b=T.layer;M.layer=b}this._outlineMaterial.shaderData.setColor(V._outlineColorProp,t),e.render(),this._screenEntity.isActive=!1,e.clearFlags=o,e.enableFrustumCulling=c,e.cullingMask=_,e.viewport=this._cameraViewport,a.background.solidColor=d,a.background.mode=m},l._calSublineEntites=function(){var e=this;this._subLineEntities.length=0;for(var t=0;t<this._outlineEntities.length;t++)V._traverseEntity(this._outlineEntities[t],function(n){e._subLineEntities.push(n)})},u._traverseEntity=function(e,t){t(e);for(var n=e.children.length-1;n>=0;n--)this._traverseEntity(e.children[n],t)},Hn(u,[{key:"layer",get:function(){return this.layer},set:function(e){this._layer=e}},{key:"mainColor",get:function(){return this._outlineMainColor},set:function(e){var t=this._outlineMainColor;e!==t&&t.copyFrom(e)}},{key:"subColor",get:function(){return this._outlineSubColor},set:function(e){var t=this._outlineSubColor;e!==t&&t.copyFrom(e)}},{key:"size",get:function(){return this._size},set:function(e){e=Math.max(1,Math.min(e,6)),this._size=e,this._renderTarget&&(this._renderTarget.getColorTexture().destroy(!0),this._renderTarget.destroy());var t=this.engine.canvas,n=t.width,a=t.height,o=n/e,_=a/e,c=new je(this.engine,o,_),d=new Ge(this.engine,o,_,c);this._outlineMaterial.shaderData.setTexture(V._outlineTextureProp,c),this._outlineMaterial.shaderData.setVector2(V._texSizeProp,new q(1/o,1/_)),c.wrapModeU=c.wrapModeV=Cn.Clamp,this._renderTarget=d}}]),u}(te),function(){G._outlineColorProp=g.getByName("material_OutlineColor")}(),function(){G._outlineTextureProp=g.getByName("material_OutlineTexture")}(),function(){G._texSizeProp=g.getByName("material_TexSize")}(),function(){G._replaceColorProp=g.getByName("camera_OutlineReplaceColor")}(),G);V=Gn([ne(Y,re.CheckOnly)],V);P.create("outline-postprocess-shader",Jn,jn);P.create("outline-replace-shader",Kn,Xn);(function(){new f})();(function(){new D})();(function(){new q})();(function(){new f})();(function(){new f})();(function(){new L})();(function(){new f})();var Oe;(function(r){r[r.Wireframe=0]="Wireframe",r[r.Normal=1]="Normal",r[r.Tangent=2]="Tangent",r[r.BiTangent=3]="BiTangent"})(Oe||(Oe={}));var nn=`
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
`,rn=`
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
`;P.create("tbnShader",`
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
    `+rn+`

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
`);P.create("wireframeShader",`
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
    `+rn+`

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
`);(function(){Ye.getByName("RENDERER_HAS_WEIGHT")})();(function(){Ye.getByName("RENDERER_HAS_JOINT")})();(function(){g.getByName("u_verticesSampler")})();(function(){g.getByName("u_verticesTextureHeight")})();(function(){g.getByName("u_verticesTextureWidth")})();(function(){g.getByName("u_indicesSampler")})();(function(){g.getByName("u_indicesTextureHeight")})();(function(){g.getByName("u_indicesTextureWidth")})();(function(){g.getByName("u_lineScale")})();(function(){g.getByName("u_worldMatrix")})();(function(){g.getByName("u_worldNormal")})();var $n="1.2.0-beta.4";console.log("galacean engine toolkit version: "+$n);export{y as C,de as S,Ee as a,Se as b,be as c};
