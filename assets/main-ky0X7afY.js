import"./modulepreload-polyfill-B5Qt9EMX.js";const L="modulepreload",y=function(l){return"/benchmark/"+l},v={},E=function(m,c,a){let i=Promise.resolve();if(c&&c.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),o=e?.nonce||e?.getAttribute("nonce");i=Promise.all(c.map(n=>{if(n=y(n),n in v)return;v[n]=!0;const t=n.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${f}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":L,t||(r.as="script",r.crossOrigin=""),r.href=n,o&&r.setAttribute("nonce",o),document.head.appendChild(r),t)return new Promise((w,s)=>{r.addEventListener("load",w),r.addEventListener("error",()=>s(new Error(`Unable to preload CSS for ${n}`)))})}))}return i.then(()=>m()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},_=(l,m,c)=>{const a=l[m];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((i,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+m+(m.split("/").length!==c?". Note that variables only represent file names one level deep.":""))))})},k=document.getElementById("itemList"),P=document.getElementById("searchBar"),O=document.getElementById("iframe"),u=[],d=["galacean","three","babylon"];let h=new URL(window.location.href);const p=h.searchParams.get("platform")??"galacean";d.splice(d.indexOf(p),1);const b=document.getElementById("button1"),g=document.getElementById("button2");b.innerText=d[0];g.innerText=d[1];b.addEventListener("click",()=>{h.searchParams.set("platform",d[0]),window.location.href=h.toString()});g.addEventListener("click",()=>{h.searchParams.set("platform",d[1]),window.location.href=h.toString()});_(Object.assign({"./mpa/babylon/.demoList.json":()=>E(()=>import("./.demoList-CJS7fHWQ.js"),[]),"./mpa/galacean/.demoList.json":()=>E(()=>import("./.demoList-CWKmqJnF.js"),[]),"./mpa/three/.demoList.json":()=>E(()=>import("./.demoList-cE_O5fav.js"),[])}),`./mpa/${p}/.demoList.json`,4).then(({default:l})=>{Object.keys(l).forEach(i=>{const e=l[i],o=document.createElement("div"),n=document.createElement("div"),t=document.createElement("ul");n.innerHTML=i,n.classList.add("title"),k.appendChild(o),o.appendChild(n),o.appendChild(t),e.forEach(f=>{const{label:r,src:w}=f,s=document.createElement("a");s.innerHTML=r,s.title=`${w}`,s.onclick=function(){c(s)},t.appendChild(s),u.push({itemDOM:s,label:r,src:w})})}),P.oninput=()=>{m(searchBar.value)};function m(i){const e=new RegExp(i,"i");u.forEach(({itemDOM:o,label:n,src:t})=>{e.lastIndex=0,e.test(n)||e.test(t)?o.classList.remove("hide"):o.classList.add("hide")})}function c(i){console.log("on hash change"),window.location.hash=`#mpa/${i.title}`,h=new URL(window.location.href)}function a(){const i=window.location.hash.split("#")[1],e=window.location.hash.split("#mpa/")[1];if(!i||!u.find(t=>t.src===e)){c(u[0].itemDOM);return}const o=window.location.href.indexOf("/benchmark/")>-1?"/benchmark":"";O.src=o+"/mpa/"+p+"/"+e+".html",u.forEach(({itemDOM:t})=>{`mpa/${p}/${t.title}`===i?t.classList.add("active"):t.classList.remove("active")});function n(){const t=window.location.href.indexOf("/benchmark/")>-1?"/benchmark":"";window.open(t+"/mpa/"+p+"/"+e+".html")}document.getElementById("open").addEventListener("click",n)}window.onhashchange=a,a()});