if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,o)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=o(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"app.js",revision:"8dd21a56187f7753d283a9206e014ad9"},{url:"css/style.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"index.html",revision:"6b90b5f091681e7c6574e934550b91d0"},{url:"javascript/AddTask.js",revision:"a4860a66e05f7d324144e70278405138"},{url:"javascript/serviceWorkerRegister.js",revision:"63b679082764f5b83a35f5cc6e3c82cf"},{url:"javascript/Task.js",revision:"92243de54e85e686ca790a5a7db8ef45"},{url:"package-lock.json",revision:"206486fed7d983216e1aeee12f38b111"},{url:"package.json",revision:"7824f2e275dbd89d4cfe994e6cb64159"},{url:"README.md",revision:"8c847535bad9e921d1957841dce64fa6"}],{})}));
//# sourceMappingURL=sw.js.map