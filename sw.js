if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let o={};const c=e=>i(e,t),f={module:{uri:t},exports:o,require:c};n[t]=Promise.all(s.map((e=>f[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-DPC9QCBF.js",revision:null},{url:"assets/index-n_ryQ3BS.css",revision:null},{url:"index.html",revision:"2a37ce91615f8975c16a4fef0061ce0b"},{url:"registerSW.js",revision:"83097d93714d34d1191f57c11ca92724"},{url:"icons/expense-tracker-icon-192x192.png",revision:"a711d40d679a2502e3c72036609a65f6"},{url:"icons/expense-tracker-icon-512x512.png",revision:"670db4b7c3e747f8aaf192d8b18f7e17"},{url:"manifest.webmanifest",revision:"9db015f488cf4a62ad48c84f23c6f8b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
