(()=>{var Ye=Object.defineProperty;var Se=(r,e)=>{for(var n in e)Ye(r,n,{get:e[n],enumerable:!0})};function x(r){return!Array.isArray(r)&&typeof r=="object"&&r}function z(r){return typeof r}function E(r,...e){globalThis.WebQitInternalsRegistry||(globalThis.WebQitInternalsRegistry=new Map);var n=globalThis.WebQitInternalsRegistry.get(r);if(!n){if(n=new Map,e[0]===!1)return n;globalThis.WebQitInternalsRegistry.set(r,n)}for(var t,i;t=e.shift();)if((i=n)&&!(n=n.get(t))){if(n=new Map,e[0]===!1)return n;i.set(t,n)}return n}function _(r){return Array.isArray(r)}function F(r){return typeof r=="function"}function ce(r){return F(r)&&/^class\s?/.test(Function.prototype.toString.call(r))}function Q(r){return r===null||r===""}function R(r){return arguments.length&&(r===void 0||typeof r>"u")}function b(r){return Array.isArray(r)||typeof r=="object"&&r||F(r)}function le(r){return Q(r)||R(r)||r===!1||r===0||b(r)&&!Object.keys(r).length}function O(r){return F(r)||r&&{}.toString.call(r)==="[object function]"}function U(r){return r instanceof Number||typeof r=="number"}function P(r){return U(r)||r!==!0&&r!==!1&&r!==null&&r!==""&&!isNaN(r*1)}function ee(r){return r instanceof String||typeof r=="string"&&r!==null}function me(r){return!ee(r)&&!R(r.length)}function te(r,...e){return e.forEach(n=>{r.indexOf(n)<0&&r.push(n)}),r}function ae(t,e){e=e||Object.prototype,e=e&&!_(e)?[e]:e;for(var n=[],t=t;t&&(!e||e.indexOf(t)<0)&&t.name!=="default";)n.push(t),t=t?Object.getPrototypeOf(t):null;return n}function de(r,e){var n=[];return ae(r,e).forEach(t=>{te(n,...Object.getOwnPropertyNames(t))}),n}function I(r,e,n=!1,t=!1,i=!1){var o=0,s=r.shift();if((P(s)||s===!0||s===!1)&&(o=s,s=r.shift()),!r.length)throw new Error("_merge() requires two or more array/objects.");return r.forEach((l,u)=>{!b(l)&&!O(l)||(n?de(l):Object.keys(l)).forEach(c=>{if(!!e(c,s,l,u)){var f=s[c],m=l[c];if((_(f)&&_(m)||x(f)&&x(m))&&(o===!0||o>0))s[c]=_(f)&&_(m)?[]:{},I([P(o)?o-1:o,s[c],f,m],e,n,t,i);else if(_(s)&&_(l))t?s[c]=m:s.push(m);else try{i?Object.defineProperty(s,c,Object.getOwnPropertyDescriptor(l,c)):s[c]=l[c]}catch{}}})}),s}function J(...r){return I(r,(e,n,t)=>!0,!1,!1,!1)}function A(r,e=!0){return _(r)?r:!e&&x(r)?[r]:r!==!1&&r!==0&&le(r)?[]:me(r)?Array.prototype.slice.call(r):x(r)?Object.values(r):[r]}function D(r,e,n={},t={}){e=A(e).slice();for(var i=r;!R(i)&&!Q(i)&&e.length;){var o=e.shift();if(!(n.get?n.get(i,o):b(i)?o in i:i[o])){t.exists=!1;return}i=n.get?n.get(i,o):i[o]}return t.exists=!0,i}function he(r,e,n,t={},i={}){let o=(f,m,h)=>i.set?i.set(f,m,h):(P(e[l])&&_(f)?f.push(h):f[m]=h,!0);e=A(e);for(var s=r,l=0;l<e.length;l++)if(l<e.length-1){if(!s||!b(s)&&!O(s))return!1;var u=D(s,e[l],i);if(!b(u)){if(i.buildTree===!1)return!1;u=O(i.buildTree)?i.buildTree(l):P(e[l+1])?[]:{};var c=o(s,e[l],u);if(!c)return!1}s=u}else return o(s,e[l],n)}var Fe=r=>class{constructor(n=!0){Object.defineProperty(this,"window",{value:r}),Object.defineProperty(this,"readCallbacks",{value:new Set}),Object.defineProperty(this,"writeCallbacks",{value:new Set}),this.async=n,this.window.requestAnimationFrame?this._run():this.async=!1}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach(n=>{n()||this.readCallbacks.delete(n)}),this.writeCallbacks.forEach(n=>{n()||this.writeCallbacks.delete(n)}),this._run()})}onread(n,t=!1){if(t)return new Promise((i,o)=>{this.async===!1?n(i,o):this.readCallbacks.add(()=>{n(i,o)})});this.async===!1?n():this.readCallbacks.add(n)}onwrite(n,t=!1){if(t)return new Promise((i,o)=>{this.async===!1?n(i,o):this.writeCallbacks.add(()=>{n(i,o)})});this.async===!1?n():this.writeCallbacks.add(n)}cycle(n,t,i){this.onread(()=>{let o=n(i),s=l=>{l!==void 0&&this.onwrite(()=>{let u=t(l,i),c=f=>{f!==void 0&&this.cycle(n,t,f)};u instanceof Promise?u.then(c):c(u)})};o instanceof Promise?o.then(s):s(o)})}};var N=class{constructor(e,n,t){this.context=e,this.namespace=n,this.window=e.defaultView||e.ownerDocument?.defaultView||t,this.document=this.window.document,this.wq=this.window.wq,Object.defineProperty(this,"#",{value:{}})}resolveArgs(e){return O(e[0])?e=[[],...e]:x(e[0])&&e.length===1?e=[[],void 0,e[0]]:x(e[1])&&e.length===2?e=[A(e[0],!1),void 0,e[1]]:e[0]=A(e[0],!1),e}registry(...e){return E(this.window,"dom.realtime",this.namespace,...e)}createSignalGenerator(){return{generate(){return this.lastController?.abort(),this.lastController=new AbortController,{signal:this.lastController.signal}},disconnect(){this.lastController?.abort()}}}forEachMatchingContext(e,n,t){let{window:i}=this,o=Array.isArray(n)?n:[n],s=new Set;for(let[l,u]of this.registry(e))for(let[c,f]of u){let m=o.filter(h=>c.contains(h.target)?l==="subtree"||h.target===c:!1);if(!!m.length){Array.isArray(n)||(m=m[0]);for(let h of f)s.add([h,m,c])}}for(let[l,u,c]of s)t.call(this,l,u,c)}disconnectables(e,...n){let t={disconnect(){n.forEach(i=>i&&O(i.disconnect)&&i.disconnect()||O(i)&&i()||x(i)&&(i.disconnected=!0))}};return e&&e.addEventListener("abort",()=>t.disconnect()),t}};var M=class extends N{constructor(e,...n){super(e,"attr",...n)}get(e,n=void 0,t={}){let i=typeof e=="string";[e=[],n=void 0,t={}]=this.resolveArgs(arguments);let{context:o}=this,s=$e(o,e),l=i?s[0]:s;if(!n)return l;let u=n&&t.lifecycleSignals&&this.createSignalGenerator(),c=u?.generate()||{};if(n(l,c,o),t.live){u&&(t={...t,signalGenerator:u});let f=this.observe(i?e[0]:e,n,{newValue:!0,...t});return this.disconnectables(t.signal,f)}}observe(e,n,t={}){let i=typeof e=="string";if([e=[],n,t={}]=this.resolveArgs(arguments),["sync","intercept"].includes(t.timing))return this.observeSync(i?e[0]:e,n,t);if(t.timing&&t.timing!=="async")throw new Error(`Timing option "${t.timing}" invalid.`);let{context:o,window:s,wq:l}=this;t.eventDetails&&!l.dom.attrInterceptionHooks?.intercepting&&ke.call(s,"intercept",()=>{});let u=new s.MutationObserver(h=>{h=je(h).map(g=>Ve.call(s,g)),Le.call(s,m,h,o)}),c={attributes:!0,attributeOldValue:t.oldValue,subtree:t.subtree};e.length&&(c.attributeFilter=e),u.observe(o,c);let f=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),m={context:o,filter:e,callback:n,params:t,atomics:new Map,originalFilterIsString:i,signalGenerator:f,disconnectable:u};return this.disconnectables(t.signal,u,f)}observeSync(e,n,t={}){let i=typeof e=="string";[e,n,t={}]=this.resolveArgs(arguments);let{context:o,window:s}=this;if(t.timing&&!["sync","intercept"].includes(t.timing))throw new Error(`Timing option "${t.timing}" invalid.`);let l=t.timing==="intercept"?"intercept":"sync",u=t.subtree?"subtree":"children";this.registry(l).size||ke.call(s,l,a=>{this.forEachMatchingContext(l,a,Le)});let c={disconnect(){g.delete(m),g.size||h.delete(o)}},f=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),m={context:o,filter:e,callback:n,params:t,atomics:new Map,originalFilterIsString:i,signalGenerator:f,disconnectable:c},h=this.registry(l,u);h.has(o)||h.set(o,new Set);let g=h.get(o);return g.add(m),this.disconnectables(t.signal,c,f)}};function je(r){return r.reduce((e,n,t)=>e[t-1]?.attributeName===n.attributeName?e:e.concat(n),[])}function Le(r,e){let{context:n,filter:t,callback:i,params:o,atomics:s,originalFilterIsString:l,signalGenerator:u}=r;o.atomic&&!s.size&&(e=$e(n,t,e)),o.newValue===null&&o.oldValue===null||(e=e.map(m=>{let h;return!o.oldValue&&"oldValue"in m&&({oldValue:h,...m}=m),!o.newValue&&"value"in m?{value:h,...m}=m:o.newValue&&typeof m.value>"u"&&(m={...m,value:m.target.getAttribute(m.name)}),m})),o.atomic&&(e.forEach(m=>s.set(m.name,m)),e=Array.from(s.entries()).map(([,m])=>m));let c=l?e[0]:e,f=u?.generate()||{};i(c,f,n)}function $e(r,e,n=[]){let t={event:null,type:"attribute"};return e.length?e.map(o=>n.find(s=>s.name===o)||{target:r,name:o,value:r.getAttribute(o),...t}):Array.from(r.attributes).map(o=>n.find(s=>s.name===o.nodeName)||{target:r,name:o.nodeName,value:o.nodeValue,...t})}function Ve({target:r,attributeName:e,value:n,oldValue:t}){let s=(this.wq.dom.attrInterceptionRecords?.get(r)||{})[e]||"mutation";return{target:r,name:e,value:n,oldValue:t,type:"observation",event:s}}function ke(r,e){let n=this,{wq:t,document:i,Element:o}=n;t.dom.attrInterceptionHooks||(t.dom.attrInterceptionHooks=new Map),t.dom.attrInterceptionHooks.has(r)||t.dom.attrInterceptionHooks.set(r,new Set),t.dom.attrInterceptionHooks.get(r).add(e);let s=()=>t.dom.attrInterceptionHooks.get(r).delete(e);if(t.dom.attrInterceptionHooks?.intercepting)return s;console.warn("Attr mutation APIs are now being intercepted."),t.dom.attrInterceptionHooks.intercepting=!0,t.dom.attrInterceptionRecords=new Map;let l=(f,m)=>{t.dom.attrInterceptionRecords.has(f.target)||t.dom.attrInterceptionRecords.set(f.target,{});let h=t.dom.attrInterceptionRecords.get(f.target);clearTimeout(h[f.name]?.timeout),h[f.name]=f.event;let g=setTimeout(()=>{delete h[f.name]},0);Object.defineProperty(f.event,"timeout",{value:g,configurable:!0}),t.dom.attrInterceptionHooks.get("intercept")?.forEach(p=>p([f]));let a=m();return t.dom.attrInterceptionHooks.get("sync")?.forEach(p=>p([f])),a};new n.MutationObserver(f=>{f=je(f).map(m=>Ve.call(n,m)).filter((m,h)=>!Array.isArray(m.event)),f.length&&(t.dom.attrInterceptionHooks.get("intercept")?.forEach(m=>m(f)),t.dom.attrInterceptionHooks.get("sync")?.forEach(m=>m(f)))}).observe(i,{attributes:!0,subtree:!0,attributeOldValue:!0});let c=Object.create(null);return["setAttribute","removeAttribute","toggleAttribute"].forEach(f=>{c[f]=o.prototype[f],o.prototype[f]=function(...m){let h,g=this.getAttribute(m[0]);["setAttribute","toggleAttribute"].includes(f)&&(h=m[1]),f==="toggleAttribute"&&h===void 0&&(h=g===null);let a={target:this,name:m[0],value:h,oldValue:g,type:"interception",event:[this,f]};return l(a,()=>c[f].call(this,...m))}}),s}var G=class extends N{constructor(e,...n){super(e,"tree",...n)}attr(e,n=void 0,t={}){let{context:i,window:o}=this;return new M(i,o).get(...arguments)}query(e,n=void 0,t={}){[e,n=void 0,t={}]=this.resolveArgs(arguments);let{context:i}=this,o=new Map,s=c=>(o.has(c)||o.set(c,{target:c,entrants:[],exits:[],type:"query",event:null}),o.get(c));if((!t.generation||t.generation==="entrants")&&(e.length?e.every(c=>typeof c=="string")&&(e=e.join(","))&&(t.subtree?i.querySelectorAll(e):[...i.children].filter(f=>f.matches(e))).forEach(f=>s(f.parentNode||i).entrants.push(f)):[...i.children].forEach(c=>s(i).entrants.push(c))),!n)return o;let l={disconnected:!1},u=n&&t.lifecycleSignals&&this.createSignalGenerator();for(let[,c]of o){if(l.disconnected)break;let f=u?.generate()||{};n(c,f,i)}if(t.live){u&&(t={...t,signalGenerator:u});let c=this.observe(e,n,t);return this.disconnectables(t.signal,l,c)}return this.disconnectables(t.signal,l,u)}children(e,n=void 0,t={}){return[e,n=void 0,t={}]=this.resolveArgs(arguments),this.query(e,n,{...t,subtree:!1})}subtree(e,n=void 0,t={}){return[e,n=void 0,t={}]=this.resolveArgs(arguments),this.query(e,n,{...t,subtree:!0})}observe(e,n,t={}){if([e,n,t={}]=this.resolveArgs(arguments),["sync","intercept"].includes(t.timing))return this.observeSync(e,n,t);if(t.timing&&t.timing!=="async")throw new Error(`Timing option "${t.timing}" invalid.`);let{context:i,window:o,wq:s,document:l}=this;t.eventDetails&&(s.dom.domInterceptionRecordsAlwaysOn=!0),(l.readyState==="loading"||s.dom.domInterceptionRecordsAlwaysOn)&&!s.dom.domInterceptionHooks?.intercepting&&Ge.call(o,"sync",()=>{});let u=new o.MutationObserver(m=>m.forEach(h=>{ze.call(o,f,Be.call(o,h),i)}));u.observe(i,{childList:!0,subtree:t.subtree});let c=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),f={context:i,selectors:e,callback:n,params:t,signalGenerator:c,disconnectable:u};if(t.staticSensitivity){let m=We.call(o,f);return this.disconnectables(t.signal,u,c,m)}return this.disconnectables(t.signal,u,c)}observeSync(e,n,t={}){[e,n,t={}]=this.resolveArgs(arguments);let{context:i,window:o}=this;if(t.timing&&!["sync","intercept"].includes(t.timing))throw new Error(`Timing option "${t.timing}" invalid.`);let s=t.timing==="intercept"?"intercept":"sync",l=t.subtree?"subtree":"children";this.registry(s).size||Ge.call(o,s,g=>{this.forEachMatchingContext(s,g,ze)});let u={disconnect(){h.delete(f),h.size||m.delete(i)}},c=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),f={context:i,selectors:e,callback:n,params:t,signalGenerator:c,disconnectable:u},m=this.registry(s,l);m.has(i)||m.set(i,new Set);let h=m.get(i);if(h.add(f),t.staticSensitivity){let g=We.call(o,f);return this.disconnectables(t.signal,u,c,g)}return this.disconnectables(t.signal,u,c)}};function We(r){let e=this,{context:n,selectors:t,callback:i,params:o,signalGenerator:s}=r,l=f=>[...f.matchAll(/\[([^\=\]]+)(\=[^\]]+)?\]/g)].map(m=>m[1]);if(!(r.$attrs=t.filter(f=>typeof f=="string"&&f.includes("[")).reduce((f,m)=>f.concat(l(m)),[])).length)return;let u=new Set,c=new Set;return u.push=f=>(c.delete(f),u.add(f)),c.push=f=>(u.delete(f),c.add(f)),r.$deliveryCache={entrants:u,exits:c},new M(n,e).observe(r.$attrs,f=>{let m=new Map,h=p=>(m.has(p)||m.set(p,{target:p,entrants:[],exits:[],type:"static",event:null}),m.get(p)),g=new WeakMap,a=p=>(g.has(p)||g.set(p,t.some(d=>p.matches(d))),g.get(p));for(let p of f)["entrants","exits"].forEach(d=>{o.generation&&d!==o.generation||r.$deliveryCache[d].has(p.target)||(d==="entrants"?!a(p.target):a(p.target))||(r.$deliveryCache[d].push(p.target),h(p.target)[d].push(p.target),h(p.target).event=p.event)});for(let[,p]of m){let d=s?.generate()||{};i(p,d,n)}},{subtree:o.subtree,timing:o.timing,eventDetails:o.eventDetails})}function ze(r,e){let{context:n,selectors:t,callback:i,params:o,signalGenerator:s,$deliveryCache:l}=r,u={...e,entrants:[],exits:[]};if(["entrants","exits"].forEach(f=>{if(!(o.generation&&f!==o.generation)&&(t.length?u[f]=at(t,e[f],e.event!=="parse"):u[f]=[...e[f]],!!l))for(let m of u[f])l[f].push(m)}),!u.entrants.length&&!u.exits.length)return;let c=s?.generate()||{};i(u,c,n)}function at(r,e,n){e=Array.isArray(e)?e:[...e];let t=(i,o)=>{if(i=i.filter(s=>s.matches),typeof o=="string"){let s=i.filter(l=>l.matches(o));if(n&&(s=i.reduce((l,u)=>[...l,...u.querySelectorAll(o)],s)),s.length)return s}else if(i.includes(o)||n&&i.some(s=>s.contains(o)))return[o]};return e.$$searchCache||(e.$$searchCache=new Map),r.reduce((i,o)=>{let s;return e.$$searchCache.has(o)?s=e.$$searchCache.get(o):(s=t(e,o)||[],x(o)&&e.$$searchCache.set(o,s)),i.concat(s)},[])}function Be({target:r,addedNodes:e,removedNodes:n}){let t=this,i;return i=A(e).reduce((o,s)=>o||t.wq.dom.domInterceptionRecords?.get(s),null),i=A(n).reduce((o,s)=>o||t.wq.dom.domInterceptionRecords?.get(s),i),i=i||t.document.readyState==="loading"&&"parse"||"mutation",{target:r,entrants:e,exits:n,type:"observation",event:i}}function Ge(r,e){let n=this,{wq:t,document:i,Node:o,Element:s,HTMLElement:l,HTMLTemplateElement:u,DocumentFragment:c}=n;t.dom.domInterceptionHooks||(t.dom.domInterceptionHooks=new Map),t.dom.domInterceptionHooks.has(r)||t.dom.domInterceptionHooks.set(r,new Set),t.dom.domInterceptionHooks.get(r).add(e);let f=()=>t.dom.domInterceptionHooks.get(r).delete(e);if(t.dom.domInterceptionHooks?.intercepting)return f;console.warn("DOM mutation APIs are now being intercepted."),t.dom.domInterceptionHooks.intercepting=!0,t.dom.domInterceptionRecords=new Map;let m=()=>!0,h=(a,p)=>{m()?a.entrants.concat(a.exits).forEach(y=>{clearTimeout(t.dom.domInterceptionRecords.get(y)?.timeout),t.dom.domInterceptionRecords.set(y,a.event);let w=setTimeout(()=>{t.dom.domInterceptionRecords.delete(y)},0);Object.defineProperty(a.event,"timeout",{value:w,configurable:!0})}):t.dom.domInterceptionRecords.clear(),t.dom.domInterceptionHooks.get("intercept")?.forEach(y=>y(a));let d=p();return t.dom.domInterceptionHooks.get("sync")?.forEach(y=>y(a)),d};if(m()){let a=new n.MutationObserver(p=>p.forEach(d=>{Array.isArray((d=Be.call(n,d)).event)||(t.dom.domInterceptionHooks.get("intercept")?.forEach(y=>y(d)),t.dom.domInterceptionHooks.get("sync")?.forEach(y=>y(d)))}));a.observe(i,{childList:!0,subtree:!0}),i.addEventListener("readystatechange",()=>!m()&&a.disconnect())}let g=Object.create(null);return["insertBefore","insertAdjacentElement","insertAdjacentHTML","setHTML","replaceChildren","replaceWith","remove","replaceChild","removeChild","before","after","append","prepend","appendChild"].forEach(a=>{let p=["insertBefore","replaceChild","removeChild","appendChild"].includes(a)?o:s;g[a]=p.prototype[a],g[a]&&(p.prototype[a]=function(...d){let y=()=>g[a].call(this,...d);if(!(this instanceof s||this instanceof c))return y();let w=[],v=[],T=this;["insertBefore"].includes(a)?v=[d[0]]:["insertAdjacentElement","insertAdjacentHTML"].includes(a)?(v=[d[1]],["beforebegin","afterend"].includes(d[0])&&(T=this.parentNode)):["setHTML","replaceChildren"].includes(a)?(w=[...this.childNodes],v=a==="replaceChildren"?[...d]:[d[0]]):["replaceWith","remove"].includes(a)?(w=[this],v=a==="replaceWith"?[...d]:[],T=this.parentNode):["replaceChild"].includes(a)?(w=[d[1]],v=[d[0]]):["removeChild"].includes(a)?w=[...d]:(v=[...d],["before","after"].includes(a)&&(T=this.parentNode));let W=a;if(["insertAdjacentHTML","setHTML"].includes(a)){let H=this.nodeName;if(a==="insertAdjacentHTML"&&["beforebegin","afterend"].includes(d[0])){if(!this.parentNode)return g[a].call(this,...d);H=this.parentNode.nodeName}let K=i.createElement(H);g.setHTML.call(K,v[0],a==="setHTML"?d[1]:{}),v=[...K.childNodes],a==="insertAdjacentHTML"?(W="insertAdjacentElement",d[1]=new c,d[1].______isTemp=!0,d[1].append(...K.childNodes)):(W="replaceChildren",d=[...K.childNodes])}return h({target:T,entrants:v,exits:w,type:"interception",event:[this,a]},()=>g[W].call(this,...d))})}),["outerHTML","outerText","innerHTML","innerText","textContent","nodeValue"].forEach(a=>{let p=["textContent","nodeValue"].includes(a)?o:["outerText","innerText"].includes(a)?l:s;g[a]=Object.getOwnPropertyDescriptor(p.prototype,a),Object.defineProperty(p.prototype,a,{...g[a],set:function(d){let y=()=>g[a].set.call(this,d);if(!(this instanceof s))return y();let w=[],v=[],T=this;if(["outerHTML","outerText"].includes(a)?(w=[this],T=this.parentNode):w=[...this.childNodes],["outerHTML","innerHTML"].includes(a)){let Z=this.nodeName;if(a==="outerHTML"){if(!this.parentNode)return y();Z=this.parentNode.nodeName}let H=i.createElement(Z==="TEMPLATE"?"div":Z);g[a].set.call(H,d),v=this instanceof u?[]:[...H.childNodes],a==="outerHTML"?(d=new c,d.______isTemp=!0,d.append(...H.childNodes),y=()=>g.replaceWith.call(this,d)):this instanceof u?y=()=>this.content.replaceChildren(...H.childNodes):y=()=>g.replaceChildren.call(this,...H.childNodes)}return h({target:T,entrants:v,exits:w,type:"interception",event:[this,a]},y)}})}),["append","prepend","replaceChildren"].forEach(a=>{[i,c.prototype].forEach(p=>{let d=p[a];p[a]=function(...y){if(this.______isTemp)return d.call(this,...y);let w=a==="replaceChildren"?[...this.childNodes]:[];return h({target:this,entrants:y,exits:w,type:"interception",event:[this,a]},()=>d.call(this,...y))}})}),f}function Qe(){dt.call(this),pt.call(this),ht.call(this)}function dt(){let r=this;r.CSS||(r.CSS={}),r.CSS.escape||(r.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}function pt(){let r=this;"isConnected"in r.Node.prototype||Object.defineProperty(r.Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}function ht(){let r=this;r.Element.prototype.matches||(r.Element.prototype.matches=r.Element.prototype.matchesSelector||r.Element.prototype.mozMatchesSelector||r.Element.prototype.msMatchesSelector||r.Element.prototype.oMatchesSelector||r.Element.prototype.webkitMatchesSelector||function(e){for(var n=(this.document||this.ownerDocument).querySelectorAll(e),t=n.length;--t>=0&&n.item(t)!==this;);return t>-1})}function Ue(){let r=this;if(r.wq||(r.wq={}),r.wq.dom)return r.wq.dom;r.wq.dom={},Qe.call(r);let e=Fe(r);return r.wq.dom.Reflow=new e,r.wq.dom.DOMRealtime=G,r.wq.dom.AttrRealtime=M,r.wq.dom.realtime=(n,t="tree")=>{if(t==="tree")return new G(n,r);if(t==="attr")return new M(n,r)},r.wq.dom.ready=gt.bind(r),r.wq.dom.meta=yt.bind(r),r.wq.dom}function gt(r){let e=this;e.document.readyState==="complete"?r(e):(e.document.domReadyCallbacks||(e.document.domReadyCallbacks=[],e.document.addEventListener("DOMContentLoaded",()=>{e.document.domReadyCallbacks.splice(0).forEach(n=>n(e))},!1)),e.document.domReadyCallbacks.push(r))}function yt(r,e=!1){let n=this,t={content:{}};return!(t.el=n.document.querySelector(`meta[name="${r}"]`))&&e&&(t.el=n.document.createElement("meta"),t.el.setAttribute("name",r),n.document.head.append(t.el)),t.el&&(t.content=(t.el.getAttribute("content")||"").split(";").filter(i=>i).reduce((i,o)=>{let s=o.split("=").map(l=>l.trim());return he(i,s[0].split("."),s[1]==="true"?!0:s[1]==="false"?!1:P(s[1])?parseInt(s[1]):s[1]),i},{})),t.get=function(i){return JSON.parse(JSON.stringify(D(this.content,i.split("."))))},t.copy=function(){return JSON.parse(JSON.stringify(this.content))},t.copyWithDefaults=function(...i){return i.length?J(!0,{},...i.reverse().concat(this.content)):this.copy()},t}var Ce={};Se(Ce,{apply:()=>Ee,construct:()=>Ae,deep:()=>Ot,defineProperties:()=>Et,defineProperty:()=>ve,deleteProperty:()=>be,get:()=>$,getOwnPropertyDescriptor:()=>xe,getOwnPropertyDescriptors:()=>At,getPrototypeOf:()=>we,has:()=>oe,intercept:()=>bt,isExtensible:()=>Oe,observe:()=>vt,ownKeys:()=>ie,preventExtensions:()=>Pe,set:()=>B,setPrototypeOf:()=>Te});var L=class{constructor(e,n){this.registry=e,Object.assign(this,{...n,target:e.target}),this.params.signal&&this.params.signal.addEventListener("abort",()=>this.remove())}remove(){return this.removed=!0,this.registry.removeRegistration(this)}};var X=class extends L{constructor(){super(...arguments),Object.defineProperty(this,"abortController",{value:new AbortController}),Object.defineProperty(this,"signal",{value:this.abortController.signal})}remove(){this.abortController.abort(),super.remove()}fire(e){let n=e,t=this.filter;if(t!==1/0&&(t=A(t))&&(n=e.filter(i=>t.includes(i.key))),n.length)return this.filter===1/0||Array.isArray(this.filter)?this.handler(n,this):this.handler(n[0],this)}};var k=class{constructor(e){this.target=e,this.entries=[]}addRegistration(e){return this.entries.push(e),e}removeRegistration(e){this.entries=this.entries.filter(n=>n!==e)}static _getInstance(e,n,t=!0,i=this.__namespace){if(!b(n))throw new Error(`Subject must be of type object; "${z(n)}" given!`);let o=this;return i&&globalThis.WebQitObserverNamespaceRegistry.has(e+"-"+i)&&(o=globalThis.WebQitObserverNamespaceRegistry.get(e+"-"+i),e+="-"+i),!E(n,"observerApi").has(e)&&t&&E(n,"observerApi").set(e,new o(n)),E(n,"observerApi").get(e)}static _namespace(e,n,t=null){if(e+="-"+n,arguments.length===2)return globalThis.WebQitObserverNamespaceRegistry.get(e);if(!(t.prototype instanceof this))throw new Error(`The implementation of the namespace ${this.name}.${n} must be a subclass of ${this.name}.`);globalThis.WebQitObserverNamespaceRegistry.set(e,t),t.__namespace=n}};globalThis.WebQitObserverNamespaceRegistry||(globalThis.WebQitObserverNamespaceRegistry=new Map);var j=class extends k{static getInstance(e,n=!0,t=null){return super._getInstance("listeners",...arguments)}static namespace(e,n=null){return super._namespace("listeners",...arguments)}addRegistration(e,n,t){return super.addRegistration(new X(this,{filter:e,handler:n,params:t}))}emit(e){this.entries.forEach(n=>n.fire(e))}};var Y=class extends L{exec(e,n,t){return this.running||!this.traps[e.type]?n(...Array.prototype.slice.call(arguments,2)):(this.running=!0,this.traps[e.type](e,t,(...i)=>(this.running=!1,n(...i))))}};var q=class extends k{static getInstance(e,n=!0,t=null){return super._getInstance("traps",...arguments)}static namespace(e,n=null){return super._namespace("traps",...arguments)}addRegistration(e){return super.addRegistration(new Y(this,e))}emit(e,n=null){let t=this;return function i(o,...s){let l=t.entries[o];return l?l.exec(e,(...u)=>i(o+1,...u),...s):n?n(e,...s):s[0]}(0)}};var C=class{constructor(e,n){if(this.target=e,!n.type)throw new Error("Descriptor type must be given in definition!");Object.assign(this,n)}};var _e={};Se(_e,{accessorize:()=>_t,proxy:()=>wt,unaccessorize:()=>xt,unproxy:()=>ne});function _t(r,e,n={}){r=ye(r);let t=E(r,"accessorizedProps");function i(u){let c,f=r;for(;!c&&(f=Object.getPrototypeOf(f));)c=Object.getOwnPropertyDescriptor(f,u);return c?{proto:f,descriptor:c}:{descriptor:{value:void 0}}}function o(u){if(t.has(u))return!0;let c=i(u);c.getValue=function(){return"get"in this.descriptor?this.descriptor.get():this.descriptor.value},c.setValue=function(g){return"set"in this.descriptor?this.descriptor.set(g):this.descriptor.value=g},c.intact=function(){let g=Object.getOwnPropertyDescriptor(r,u);return g.get===h.get&&g.set===h.set&&t.get(u)===this},c.restore=function(){return this.intact()?(this.proto!==r?delete r[u]:Object.defineProperty(r,u,this.descriptor),t.delete(u),!0):!1},t.set(u,c);let{enumerable:f=!0,configurable:m=!0}=c.descriptor,h={enumerable:f,configurable:m};["value","set"].some(g=>g in c.descriptor)&&(h.set=function(g){return B(this,u,g,n)}),["value","get"].some(g=>g in c.descriptor)&&(h.get=function(){return $(this,u,n)});try{return Object.defineProperty(r,u,h),!0}catch{return t.delete(u),!1}}let l=(Array.isArray(e)?e:e===void 0?Object.keys(r):[e]).map(o);return e===void 0||Array.isArray(e)?l:l[0]}function xt(r,e,n={}){r=ye(r);let t=E(r,"accessorizedProps");function i(l){return t.has(l)?t.get(l).restore():!0}let s=(Array.isArray(e)?e:e===void 0?Object.keys(r):[e]).map(i);return e===void 0||Array.isArray(e)?s:s[0]}function wt(r,e={}){r=ye(r);let n=new Proxy(r,{apply:(t,i,o)=>Ee(t,i,o,e),construct:(t,i,o=null)=>Ae(t,i,o,e),defineProperty:(t,i,o)=>ve(t,i,o,e),deleteProperty:(t,i)=>be(t,i,e),get:(t,i,o=null)=>{let s=$(t,i,{...e,receiver:o});return e.proxyAutoBinding!==!1&&O(s)&&!ce(s)?s.bind(n):s},getOwnPropertyDescriptor:(t,i)=>xe(t,i,e),getPrototypeOf:t=>we(t,e),has:(t,i)=>oe(t,i,e),isExtensible:t=>Oe(t,e),ownKeys:t=>ie(t,e),preventExtensions:t=>Pe(t,e),set:(t,i,o,s=null)=>B(t,i,o,{...e,receiver:s}),setPrototypeOf:(t,i)=>Te(t,i,e)});return E(n).set(n,r),n}function ne(r){return E(r,!1).get(r)||r}function ye(r){if(!r||!b(r))throw new Error("Target must be of type object!");return ne(r)}function Ot(r,e,n,t=o=>o,i={}){return function o(s,l,u){let c=l[u.level];return u.level<l.length-1?u={...u,preflight:!0}:u={...u,preflight:i.preflight},n(s,c,(f,...m)=>{let h=(p={})=>({...u,...p,level:u.level+1}),g=p=>{p instanceof C&&(p.path=[p.key],s instanceof C&&(p.path=s.path.concat(p.key),p.context=s))};if(se(c)&&Array.isArray(f))return f.forEach(g),u.level===l.length-1||!f.length&&u.midwayResults?t(f,...m):f.map(p=>o(p,l,h(...m)));g(f);let a=b(V(f,!1));return u.level===l.length-1||!a&&u.midwayResults?t(f,...m):a&&o(f,l,h(...m))},u)}(r,e.slice(0),{...i,level:0})}function vt(r,e,n,t={}){if(r=V(r),O(arguments[1])&&([,n,t={}]=arguments,e=1/0),!O(n))throw new Error(`Handler must be a function; "${z(n)}" given!`);let i=Je(r,e,n,t);return t.preflight?(t={...t,descripted:!0},delete t.live,$(r,e,i,t)):i()}function bt(r,e,n={}){return r=V(r),x(e)||([,,,n={}]=arguments,e={[arguments[1]]:arguments[2]}),q.getInstance(r,!0,n.namespace).addRegistration({traps:e,params:n})}function xe(r,e,n=i=>i,t={}){return S(r,"getOwnPropertyDescriptor",{key:e},n,t)}function At(r,e,n=i=>i,t={}){return S(r,"getOwnPropertyDescriptors",{key:e},n,t)}function we(r,e=t=>t,n={}){return S(r,"getPrototypeOf",{},e,n)}function Oe(r,e=t=>t,n={}){return S(r,"isExtensible",{},e,n)}function ie(r,e=t=>t,n={}){return S(r,"ownKeys",{},e,n)}function oe(r,e,n=i=>i,t={}){return S(r,"has",{key:e},n,t)}function $(r,e,n=i=>i,t={}){let i;return r=V(r),x(n)?[t,n]=[n,o=>o]:t.live&&(i=!0),Tt(r,e,o=>{let s=[...o];return function l(u,c,f){if(!c.length)return f(u);let m=c.shift();function h(p,d=void 0){let y=T=>(p.value=T,l(u.concat(t.live||t.descripted?p:T),c,f));if(arguments.length>1)return y(d);let w=E(r,"accessorizedProps",!1),v=w&&w.get(p.key);return v&&v.intact()?y(v.getValue()):y(Reflect.get(r,p.key,...t.receiver?[t.receiver]:[]))}let g=new C(r,{type:"get",key:m,value:void 0,related:s}),a=q.getInstance(r,!1,t.namespace);return a?a.emit(g,h):h(g)}([],o.slice(0),l=>{let u=se(e)?l:l[0];return i?Je(r,e,n,t)(u):n(u)})})}function B(r,e,n,t=s=>s,i={},o=!1){r=V(r);let s=[[e,n]];x(e)&&([,,t=u=>u,i={},o=!1]=arguments,s=Object.entries(e)),x(t)&&([o,i,t]=[typeof i=="boolean"?i:!1,t,u=>u]);let l=s.map(([u])=>u);return function u(c,f,m){if(!f.length)return m(c);let[h,g]=f.shift();function a(d,y=void 0){let w=W=>(d.status=W,u(c.concat(d),f,m));if(arguments.length>1)return w(d,y);let v=E(r,"accessorizedProps",!1),T=v&&v.get(d.key);return d.type==="defineProperty"?(T&&!T.restore()&&w(!1),Object.defineProperty(r,d.key,d.value),w(!0)):T&&T.intact()?w(T.setValue(d.value)):w(Reflect.set(r,d.key,d.value))}function p(d,y){let w=new C(r,{type:o?"defineProperty":"set",key:h,value:g,isUpdate:d,oldValue:y,related:[...l],detail:i.detail}),v=q.getInstance(r,!1,i.namespace);return v?v.emit(w,a):a(w)}return oe(r,h,d=>!d||i.oldValue!==!0?p(d):$(r,h,y=>p(d,y),i),i)}([],s.slice(0),u=>{let c=j.getInstance(r,!1,i.namespace);return c&&c.emit(u),t(se(e)?u.map(f=>f.status):u[0].status)})}function ve(r,e,n,t=o=>o,i={}){return B(r,e,n,t,i,!0)}function Et(r,e,n=i=>i,t={}){return B(r,e,n,t,!0)}function be(r,e,n=i=>i,t={}){r=V(r),x(n)&&([t,n]=[n,s=>s]);let i=A(e),o=[...i];return function s(l,u,c){if(!u.length)return c(l);let f=u.shift();function m(g,a=void 0){let p=w=>(g.status=w,s(l.concat(g),u,c));if(arguments.length>1)return p(g,a);let d=E(r,"accessorizedProps",!1),y=d&&d.get(g.key);return y&&!y.restore()&&p(!1),p(Reflect.deleteProperty(r,g.key))}function h(g){let a=new C(r,{type:"deleteProperty",key:f,oldValue:g,related:[...o],detail:t.detail}),p=q.getInstance(r,!1,t.namespace);return p?p.emit(a,m):m(a)}return t.oldValue===!1?h():$(r,f,h,t)}([],i.slice(0),s=>{let l=j.getInstance(r,!1,t.namespace);return l&&l.emit(s),n(se(e)?s.map(u=>u.status):s[0].status)})}function Ae(r,e,n=null,t=o=>o,i={}){return S(r,"construct",arguments.length>2?{argumentsList:e,newTarget:n}:{argumentsList:e},t,i)}function Ee(r,e,n,t=o=>o,i={}){return S(r,"apply",{thisArgument:e,argumentsList:n},t,i)}function Te(r,e,n=i=>i,t={}){return S(r,"setPrototypeOf",{proto:e},n,t)}function Pe(r,e=t=>t,n={}){return S(r,"preventExtensions",{},e,n)}function Je(r,e,n,t={}){let i;t.signal||(i=new AbortController,t={...t,signal:i.signal});let o=j.getInstance(r,!0,t.namespace);return function s(l,u=null){u?.remove();let f={signal:o.addRegistration(e,s,t).signal};return arguments.length&&n(l,f),i}}function S(r,e,n={},t=o=>o,i={}){r=V(r),x(t)&&([i,t]=[t,u=>u]);function o(u,c){return arguments.length>1?t(c):t(Reflect[e](r,...Object.values(n)))}let s=new C(r,{type:e,...n}),l=q.getInstance(r,!1,i.namespace);return l?l.emit(s,o):o(s)}function se(r){return r===1/0||Array.isArray(r)}function V(r,e=!0){if((!r||!b(r))&&e)throw new Error(`Object must be of type object or array! "${z(r)}" given.`);return r instanceof C&&(r=r.value),r&&ne(r)}function Tt(r,e,n){return e===1/0?ie(r,n):n(A(e))}var Pt={...Ce,..._e},fe=Pt;var ue=(r,...e)=>E(r,"oohtml",...e);function Ie(r={}){let e=this,n=Ue.call(e);e.wq||(e.wq={}),e.wq.Observer=fe;let t=n.meta("oohtml").copyWithDefaults(r,{api:{state:"state"}});Ct.call(this,t)}function Xe(r){if(!ue(r).has("state")){let e=Object.create(null);ue(r).set("state",e)}return ue(r).get("state")}function Ct(r){let e=this;if(r.api.state in e.document)throw new Error(`document already has a "${r.api.state}" property!`);if(r.api.state in e.Element.prototype)throw new Error(`The "Element" class already has a "${r.api.state}" property!`);Object.defineProperty(e.document,r.api.state,{get:function(){return fe.proxy(Xe(e.document))}}),Object.defineProperty(e.Element.prototype,r.api.state,{get:function(){return fe.proxy(Xe(this))}})}Ie.call(window);})();
//# sourceMappingURL=state-api.js.map
