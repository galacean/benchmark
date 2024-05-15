import{L as m,h as x}from"./index.0d9be172.js";function l(s,r){return r!=null&&typeof Symbol<"u"&&r[Symbol.hasInstance]?!!r[Symbol.hasInstance](s):s instanceof r}function p(s,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function k(s,r,t){return r&&p(s.prototype,r),t&&p(s,t),s}var u=0;function D(){var s=XMLHttpRequest.prototype.send,r=new Map;function t(e,n){r.get(e)==null&&(r.set(e,n),u+=n)}XMLHttpRequest.prototype.send=function(e){this.addEventListener("load",function(){var a=0;this.responseType===""||this.responseType==="text"?a=new Blob([JSON.stringify(this.responseText)]).size:l(this.response,Blob)?a=this.response.size:l(this.response,ArrayBuffer)?a=this.response.byteLength:this.responseType==="json"&&(a=new Blob([JSON.stringify(this.response)]).size),t(this.responseURL,a)},!1),s.call(this,e);var n=Object.getOwnPropertyDescriptor(Image.prototype,"src").set;this.originalImageSrc=n,Object.defineProperty(Image.prototype,"src",{set:function(i){var h=this;fetch(i).then(function(d){d.ok&&d.blob().then(function(f){t(h.responseURL,f.size)})}),n.call(this,i)}})}}var S=function(){function s(){this._hooked=!1,this._hooked=!0}var r=s.prototype;return r.reset=function(){u=0},r.release=function(){this._hooked&&(XMLHttpRequest.prototype.send=this._originalSend,Object.defineProperty(Image.prototype,"src",{set:function(n){this.src.call(this,n)}})),this._hooked=!1},k(s,[{key:"size",get:function(){return I(u/1024/1024)}}]),s}();function I(s){return Number(s).toFixed(Math.max(6-s.toString().split(".")[0].length,0))}function o(){for(var s=arguments.length,r=new Array(s),t=0;t<s;t++)r[t]=arguments[t];var e;(e=m).info.apply(e,[].concat(["\u{1F680} [galacean engine--stats]"],r))}function w(){for(var s=arguments.length,r=new Array(s),t=0;t<s;t++)r[t]=arguments[t];var e;(e=m).error.apply(e,[].concat(["\u{1F680} [galacean engine-stats]"],r))}var b=function(){function s(t){this.drawCall=0,this.triangles=0,this.lines=0,this.points=0,this.realDrawElements=t.drawElements,this.realDrawArrays=t.drawArrays,t.drawElements=this.hookedDrawElements.bind(this),t.drawArrays=this.hookedDrawArrays.bind(this);var e=this.hasInstancedFunction(t);if(e)this.realDrawElementsInstanced=t.drawElementsInstanced,this.realDrawArraysInstanced=t.drawArraysInstanced,t.drawElementsInstanced=this.hookedDrawElementsInstanced.bind(this),t.drawArraysInstanced=this.hookedDrawArraysInstanced.bind(this);else{var n=t.getExtension("ANGLE_instanced_arrays");n?(this.realDrawElementsInstanced=n.drawElementsInstancedANGLE,this.realDrawArraysInstanced=n.drawArraysInstancedANGLE,n.drawElementsInstancedANGLE=this.hookedDrawElementsInstanced.bind(this),n.drawArraysInstancedANGLE=this.hookedDrawArraysInstanced.bind(this)):w("GPU Instancing is not supported.")}this.hooked=!0,this.gl=t,o("DrawCall is hooked.")}var r=s.prototype;return r.hasInstancedFunction=function(e){return l(e,WebGL2RenderingContext)||e.hasOwnProperty("drawElementsInstanced")&&e.hasOwnProperty("drawArraysInstanced")},r.hookedDrawElements=function(e,n,a,i){this.realDrawElements.call(this.gl,e,n,a,i),this.update(n,e)},r.hookedDrawArrays=function(e,n,a){this.realDrawArrays.call(this.gl,e,n,a),this.update(a,e)},r.hookedDrawElementsInstanced=function(e,n,a,i,h){this.realDrawElementsInstanced.call(this.gl,e,n,a,i,h),this.update(n,e)},r.hookedDrawArraysInstanced=function(e,n,a,i){this.realDrawArraysInstanced.call(this.gl,e,n,a,i),this.update(a,e)},r.update=function(e,n){var a=this.gl;switch(this.drawCall++,n){case a.TRIANGLES:this.triangles+=e/3;break;case a.TRIANGLE_STRIP:case a.TRIANGLE_FAN:this.triangles+=e-2;break;case a.LINES:this.lines+=e/2;break;case a.LINE_STRIP:this.lines+=e-1;break;case a.LINE_LOOP:this.lines+=e;break;case a.POINTS:this.points+=e;break;default:w("Unknown draw mode: "+n);break}},r.reset=function(){this.drawCall=0,this.triangles=0,this.lines=0,this.points=0},r.release=function(){if(this.hooked){var e=this.gl;e.drawElements=this.realDrawElements,e.drawArrays=this.realDrawArrays;var n=this.hasInstancedFunction(e);if(n)e.drawElementsInstanced=this.realDrawElementsInstanced,e.drawArraysInstanced=this.realDrawArraysInstanced;else{var a=e.getExtension("ANGLE_instanced_arrays");a&&(a.drawElementsInstancedANGLE=this.realDrawElementsInstanced,a.drawArraysInstancedANGLE=this.realDrawArraysInstanced)}}this.hooked=!1},s}(),E=function(){function s(t){this.shaders=0,this.realAttachShader=t.attachShader,this.realDetachShader=t.detachShader,t.attachShader=this.hookedAttachShader.bind(this),t.detachShader=this.hookedDetachShader.bind(this),this.hooked=!0,this.gl=t,o("Shader is hooked.")}var r=s.prototype;return r.hookedAttachShader=function(e,n){this.realAttachShader.call(this.gl,e,n),this.shaders++,o("AttachShader:",n,"shaders: "+this.shaders)},r.hookedDetachShader=function(e,n){this.realDetachShader.call(this.gl,e,n),this.shaders--,o("DetachShader. shaders: "+this.shaders)},r.reset=function(){this.shaders=0},r.release=function(){this.hooked&&(this.gl.attachShader=this.realAttachShader,this.gl.detachShader=this.realDetachShader),this.hooked=!1},s}(),T=function(){function s(t){this.textures=0,this.realCreateTexture=t.createTexture,this.realDeleteTexture=t.deleteTexture,t.createTexture=this.hookedCreateTexture.bind(this),t.deleteTexture=this.hookedDeleteTexture.bind(this),this.hooked=!0,this.gl=t,o("Texture is hooked.")}var r=s.prototype;return r.hookedCreateTexture=function(){var e=this.realCreateTexture.call(this.gl);return this.textures++,o("CreateTexture:",e,"textures: "+this.textures),e},r.hookedDeleteTexture=function(e){this.realDeleteTexture.call(this.gl,e),this.textures--,o("DeleteTexture. textures: "+this.textures)},r.reset=function(){this.textures=0},r.release=function(){this.hooked&&(this.gl.createTexture=this.realCreateTexture,this.gl.deleteTexture=this.realDeleteTexture),this.hooked=!1},s}(),A=function(){function s(t){this.samplingFrames=60,this.samplingIndex=0,this.updateCounter=0,this.updateTime=0,this.gl=t,this.hook(t)}var r=s.prototype;return r.hook=function(e){this.drawCallHook=new b(e),this.textureHook=new T(e),this.shaderHook=new E(e),this.requestHook=new S},r.reset=function(){this.drawCallHook&&this.drawCallHook.reset()},r.release=function(){this.drawCallHook&&this.drawCallHook.release(),this.textureHook&&this.textureHook.release(),this.shaderHook&&this.shaderHook.release()},r.update=function(){this.updateCounter++;var e=performance.now();if(!(e-this.updateTime<1e3)){if(this.samplingIndex!==this.samplingFrames){this.reset(),this.samplingIndex++;return}this.samplingIndex=0;var n={fps:Math.round(this.updateCounter*1e3/(e-this.updateTime)),memory:performance.memory&&performance.memory.usedJSHeapSize/1048576>>0,drawCall:this.drawCallHook.drawCall,triangles:this.drawCallHook.triangles,lines:this.drawCallHook.lines,points:this.drawCallHook.points,textures:this.textureHook.textures,size:this.requestHook.size,shaders:this.shaderHook.shaders,webglContext:window.hasOwnProperty("WebGL2RenderingContext")&&l(this.gl,WebGL2RenderingContext)?"2.0":"1.0"};return this.reset(),this.updateCounter=0,this.updateTime=e,n}},s}(),C=`
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
`,L=`
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
`,H=function(){function s(t){this.core=new A(t),this.items=[],this.items=["fps","memory","drawCall","triangles","textures","shaders","size","webglContext"],this.createContainer(),this.update=this.update.bind(this)}var r=s.prototype;return r.createContainer=function(){var e=document.createElement("div");e.classList.add("gl-perf"),e.innerHTML=C,e.appendChild(this.createStyle()),document.body.appendChild(e),this.doms=Array.prototype.slice.apply(e.querySelectorAll("dd")),this.container=e},r.createStyle=function(){var e=document.createElement("style");return e.type="text/css",e.appendChild(document.createTextNode(L)),e},r.update=function(){var e=this.core.update();if(e)for(var n,a=function(d,f){var y=n.doms[d],g=n.items[d],v=e[g]||0;requestAnimationFrame(function(){y.innerText=v})},i=0,h=this.items.length;i<h;i++)n=this,a(i,h)},r.reset=function(){this.core.reset()},r.release=function(){this.core.release()},r.destroy=function(){this.release(),document.body.removeChild(this.container)},s}();function c(s,r){return c=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},c(s,r)}function _(s,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(r&&r.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),r&&c(s,r)}var N=function(s){_(r,s);function r(){return s.apply(this,arguments)}var t=r.prototype;return t.onBeginRender=function(n){this.camera=n,this.monitor||this._setupMonitor()},t.onEndRender=function(n){this.monitor&&this.monitor.update()},t._setupMonitor=function(){var n=this.camera.engine._hardwareRenderer.gl;n&&(this.monitor=new H(n))},r.hookRequest=function(){D()},k(r,[{key:"enabled",set:function(n){n?this._setupMonitor():this.monitor.destroy()}}]),r}(x);export{N as S};
