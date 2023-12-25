(()=>{var ze=Object.defineProperty;var Je=(n,e,r)=>e in n?ze(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r;var te=(n,e,r)=>(Je(n,typeof e!="symbol"?e+"":e,r),r);function S(n){return!Array.isArray(n)&&typeof n=="object"&&n}function x(n){return Array.isArray(n)}function fe(n,e,r=null){return x(e)?n.filter(t=>r?e.filter(i=>r(t,i)).length:e.indexOf(t)!==-1):[]}function W(n,...e){if(globalThis.webqit||(globalThis.webqit={}),globalThis.webqit.refs||Object.defineProperty(globalThis.webqit,"refs",{value:new V}),!arguments.length)return globalThis.webqit.refs;let r=globalThis.webqit.refs.get(n);r||(r=new V,globalThis.webqit.refs.set(n,r));let t,i;for(;t=e.shift();)(i=r)&&!(r=r.get(t))&&(r=new V,i.set(t,r));return r}var V=class extends Map{constructor(...e){super(...e),this.observers=new Set}set(e,r){let t=super.set(e,r);return this.fire("set",e,r,e),t}delete(e){let r=super.delete(e);return this.fire("delete",e),r}has(e){return this.fire("has",e),super.has(e)}get(e){return this.fire("get",e),super.get(e)}keyNames(){return Array.from(super.keys())}observe(e,r,t){let i={type:e,key:r,callback:t};return this.observers.add(i),()=>this.observers.delete(i)}unobserve(e,r,t){if(Array.isArray(e)||Array.isArray(r))throw new Error('The "type" and "key" arguments can only be strings.');for(let i of this.observers)!(re([e,"*"],i.type)&&re([r,"*"],i.key)&&i.callback===t)||this.observers.delete(i)}fire(e,r,...t){for(let i of this.observers)!(re([e,"*"],i.type)&&re([r,"*"],i.key))||i.callback(...t)}},re=(n,e)=>Array.isArray(e)?fe(n,e).length:n.includes(e);function U(n){return typeof n=="function"}function G(n){return n===null||n===""}function k(n){return arguments.length&&(n===void 0||typeof n>"u")}function q(n){return Array.isArray(n)||typeof n=="object"&&n||U(n)}function le(n){return G(n)||k(n)||n===!1||n===0||q(n)&&!Object.keys(n).length}function E(n){return U(n)||n&&{}.toString.call(n)==="[object function]"}function X(n){return n instanceof Number||typeof n=="number"}function $(n){return X(n)||n!==!0&&n!==!1&&n!==null&&n!==""&&!isNaN(n*1)}function B(n){return n instanceof String||typeof n=="string"&&n!==null}function ce(n){return!B(n)&&!k(n.length)}function ne(n,...e){return e.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n}function ae(t,e){e=e||Object.prototype,e=e&&!x(e)?[e]:e;for(var r=[],t=t;t&&(!e||e.indexOf(t)<0)&&t.name!=="default";)r.push(t),t=t?Object.getPrototypeOf(t):null;return r}function ue(n,e){var r=[];return ae(n,e).forEach(t=>{ne(r,...Object.getOwnPropertyNames(t))}),r}function D(n,e,r=!1,t=!1,i=!1){var o=0,s=n.shift();if(($(s)||s===!0||s===!1)&&(o=s,s=n.shift()),!n.length)throw new Error("_merge() requires two or more array/objects.");return n.forEach((l,u)=>{!q(l)&&!E(l)||(r?ue(l):Object.keys(l)).forEach(m=>{if(!!e(m,s,l,u)){var f=s[m],p=l[m];if((x(f)&&x(p)||S(f)&&S(p))&&(o===!0||o>0))s[m]=x(f)&&x(p)?[]:{},D([$(o)?o-1:o,s[m],f,p],e,r,t,i);else if(x(s)&&x(l))t?s[m]=p:s.push(p);else try{i?Object.defineProperty(s,m,Object.getOwnPropertyDescriptor(l,m)):s[m]=l[m]}catch{}}})}),s}function z(...n){return D(n,(e,r,t)=>!0,!1,!1,!1)}function I(n,e=!0){return x(n)?n:!e&&S(n)?[n]:n!==!1&&n!==0&&le(n)?[]:ce(n)?Array.prototype.slice.call(n):S(n)?Object.values(n):[n]}function J(n,e,r={},t={}){e=I(e).slice();for(var i=n;!k(i)&&!G(i)&&e.length;){var o=e.shift();if(!(r.get?r.get(i,o):q(i)?o in i:i[o])){t.exists=!1;return}i=r.get?r.get(i,o):i[o]}return t.exists=!0,i}function de(n,e,r,t={},i={}){let o=(f,p,c)=>i.set?i.set(f,p,c):($(e[l])&&x(f)?f.push(c):f[p]=c,!0);e=I(e);for(var s=n,l=0;l<e.length;l++)if(l<e.length-1){if(!s||!q(s)&&!E(s))return!1;var u=J(s,e[l],i);if(!q(u)){if(i.buildTree===!1)return!1;u=E(i.buildTree)?i.buildTree(l):$(e[l+1])?[]:{};var m=o(s,e[l],u);if(!m)return!1}s=u}else return o(s,e[l],r)}var Y=class{constructor(e,r=!1){Object.defineProperty(this,"window",{value:e}),Object.defineProperty(this,"readCallbacks",{value:new Set}),Object.defineProperty(this,"writeCallbacks",{value:new Set}),Object.defineProperty(this,"_synthesis",{value:0,writable:!0}),!r&&this.window.requestAnimationFrame?this._loop():this._synthesis++}get synthesis(){return this._synthesis}async synthesizeWhile(e){this._synthesis++,this._fulfill();let r=await e();return this._synthesis--,r}_fulfill(){for(let e of this.readCallbacks)e(),this.readCallbacks.delete(e);for(let e of this.writeCallbacks)e(),this.writeCallbacks.delete(e)}_loop(){this.window.requestAnimationFrame(()=>{this._fulfill(),this._loop()})}onread(e,r=!1){if(r)return new Promise(t=>{this.synthesis?t(e()):this.readCallbacks.add(()=>{t(e())})});this.synthesis?Promise.resolve().then(e):this.readCallbacks.add(e)}onwrite(e,r=!1){if(r)return new Promise(t=>{this.synthesis?t(e()):this.writeCallbacks.add(()=>{t(e())})});this.synthesis?Promise.resolve().then(e):this.writeCallbacks.add(e)}cycle(e,r,t){this.onread(()=>{let i=e(t),o=s=>{s!==void 0&&this.onwrite(()=>{let l=r(s,t),u=m=>{m!==void 0&&this.cycle(e,r,m)};l instanceof Promise?l.then(u):u(l)})};i instanceof Promise?i.then(o):o(i)})}};function Pe(n){return(n=n.trim())&&n.startsWith("(")&&n.endsWith(")")}function oe(n,e,r,t=!0){r=(Array.isArray(r)?r:[r]).map(s=>(s+"").replace("(",t?"(.//":"(./")).join("|");let i=[],o;try{let s=n.document.evaluate(r,e,null,XPathResult.ANY_TYPE);for(;o=s.iterateNext();)i.push(o)}catch{}return i}function qe(n,e,r){r=(Array.isArray(r)?r:[r]).map(t=>(t+"").replace("(","(self::")).join("|");try{return n.document.evaluate(`${r}`,e,null,XPathResult.BOOLEAN_TYPE).booleanValue}catch{}}function Ie(n,e="|"){return[...n].reduce(([r,t,i,o],s)=>!r&&t===0&&(Array.isArray(e)?e:[e]).includes(s)?[r,t,[""].concat(i)]:(!r&&["(","[","{"].includes(s)&&!i[0].endsWith("\\")&&t++,!r&&[")","]","}"].includes(s)&&!i[0].endsWith("\\")&&t--,['"',"'","`"].includes(s)&&!i[0].endsWith("\\")&&(r=r===s?null:r||s),i[0]+=s,[r,t,i]),[null,0,[""]])[2].reverse()}var j=class{constructor(e){this.content=e,this.type=typeof e=="string"?"selector":"instance",this.kind=this.type==="instance"?null:Pe(e)?"xpath":"css",this.kind==="xpath"&&(this.isXpathAttr=Ie(e.trim().slice(1,-1),"@").length>1)}toString(){return this.content}};var F=class{constructor(e,r,t){this.context=e,this.namespace=r,this.window=e.defaultView||e.ownerDocument?.defaultView||t,this.document=this.window.document,this.webqit=this.window.webqit,Object.defineProperty(this,"#",{value:{}})}resolveArgs(e){if(E(e[0])?e=[[],...e]:S(e[0])&&!(e[0]instanceof j)&&e.length===1?e=[[],void 0,e[0]]:S(e[1])&&e.length===2?e=[I(e[0],!1),void 0,e[1]]:e[0]=I(e[0],!1),e[0].filter(r=>typeof r!="string"&&!(r instanceof j)&&!(r instanceof this.window.Node)).length)throw new Error("Argument #2 must be either a string or a Node object, or a list of those.");return e[0]=e[0].map(r=>r instanceof j?r:new j(r)),e}registry(...e){return W("realdom.realtime",this.window,this.namespace,...e)}createSignalGenerator(){return{generate(){return this.lastController?.abort(),this.lastController=new AbortController,{signal:this.lastController.signal}},disconnect(){this.lastController?.abort()}}}forEachMatchingContext(e,r,t){let{window:i}=this,o=Array.isArray(r)?r:[r],s=new Set;for(let[l,u]of this.registry(e))for(let[m,f]of u){let p=o.filter(c=>m.contains(c.target)?l==="subtree"||c.target===m:!1);if(!!p.length){Array.isArray(r)||(p=p[0]);for(let c of f)s.add([c,p,m])}}for(let[l,u,m]of s)t.call(i,l,u,m)}disconnectables(e,...r){let t={disconnect(){r.forEach(i=>i&&E(i.disconnect)&&i.disconnect()||E(i)&&i()||S(i)&&(i.disconnected=!0))}};return e&&e.addEventListener("abort",()=>t.disconnect()),t}};var H=class extends F{constructor(e,...r){super(e,"attr",...r)}get(e,r=void 0,t={}){let i=typeof e=="string"||e instanceof j;[e=[],r=void 0,t={}]=this.resolveArgs(arguments);let{context:o}=this,s=Me(o,e);if(!r)return s;let l=t.lifecycleSignals&&this.createSignalGenerator();if(i)for(let u of s){let m=l?.generate()||{};r(u,m,o)}else{let u=l?.generate()||{};r(s,u,o)}if(t.live){l&&(t={...t,signalGenerator:l});let u=this.observe(i?e[0]:e,r,{newValue:!0,...t});return this.disconnectables(t.signal,u)}}observe(e,r,t={}){let i=typeof e=="string"||e instanceof j;if([e=[],r,t={}]=this.resolveArgs(arguments),["sync","intercept"].includes(t.timing))return this.observeSync(i?e[0]:e,r,t);if(t.timing&&t.timing!=="async")throw new Error(`Timing option "${t.timing}" invalid.`);let{context:o,window:s,webqit:l}=this;t.eventDetails&&!l.realdom.attrInterceptionHooks?.intercepting&&Le.call(s,"intercept",()=>{});let u=new s.MutationObserver(c=>{c=De(c).map(g=>ke.call(s,g)),je.call(s,p,c,o)}),m={attributes:!0,attributeOldValue:t.oldValue,subtree:t.subtree};e.length&&(m.attributeFilter=e.map(c=>c+"")),u.observe(o,m);let f=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),p={context:o,spec:e,callback:r,params:t,atomics:new Map,originalFilterIsString:i,signalGenerator:f,disconnectable:u};return this.disconnectables(t.signal,u,f)}observeSync(e,r,t={}){let i=typeof e=="string"||e instanceof j;[e,r,t={}]=this.resolveArgs(arguments);let{context:o,window:s}=this;if(t.timing&&!["sync","intercept"].includes(t.timing))throw new Error(`Timing option "${t.timing}" invalid.`);let l=t.timing==="intercept"?"intercept":"sync",u=t.subtree?"subtree":"children";this.registry(l).size||Le.call(s,l,w=>{this.forEachMatchingContext(l,w,je)});let m={disconnect(){g.delete(p),g.size||c.delete(o)}},f=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),p={context:o,spec:e,callback:r,params:t,atomics:new Map,originalFilterIsString:i,signalGenerator:f,disconnectable:m},c=this.registry(l,u);c.has(o)||c.set(o,new Set);let g=c.get(o);return g.add(p),this.disconnectables(t.signal,m,f)}};function De(n){return n.reduce((e,r,t)=>e[t-1]?.attributeName===r.attributeName?e:e.concat(r),[])}function je(n,e){let{context:r,spec:t,callback:i,params:o,atomics:s,originalFilterIsString:l,signalGenerator:u}=n,m=t.map(c=>c+"");if(o.atomic&&!s.size?e=Me(r,t,e):o.timing!=="async"&&t.length&&(e=e.filter(c=>m.includes(c.name))),!e.length)return;o.newValue===null&&o.oldValue===null&&o.eventDetails||(e=e.map(c=>{let g;return o.eventDetails||({event:g,...c}=c),!o.oldValue&&"oldValue"in c&&({oldValue:g,...c}=c),!o.newValue&&"value"in c?{value:g,...c}=c:o.newValue&&typeof c.value>"u"&&(c={...c,value:c.target.getAttribute(c.name)}),c})),o.atomic&&(e.forEach(c=>s.set(c.name,c)),e=Array.from(s.entries()).map(([,c])=>c));let f=l?e[0]:e,p=u?.generate()||{};i(f,p,r)}function Me(n,e,r=[]){let t={event:null,type:"attribute"};return e.length?e.map(o=>(o=o+"",r.find(s=>s.name===o)||{target:n,name:o,value:n.getAttribute(o),...t})):Array.from(n.attributes).map(o=>r.find(s=>s.name===o.nodeName)||{target:n,name:o.nodeName,value:o.nodeValue,...t})}function ke({target:n,attributeName:e,value:r,oldValue:t}){let s=(this.webqit.realdom.attrInterceptionRecords?.get(n)||{})[e]?.[0]||"mutation";return{target:n,name:e,value:r,oldValue:t,type:"observation",event:s}}function Le(n,e){let r=this,{webqit:t,document:i,Element:o}=r;t.realdom.attrInterceptionHooks||Object.defineProperty(t.realdom,"attrInterceptionHooks",{value:new Map}),t.realdom.attrInterceptionHooks.has(n)||t.realdom.attrInterceptionHooks.set(n,new Set),t.realdom.attrInterceptionHooks.get(n).add(e);let s=()=>t.realdom.attrInterceptionHooks.get(n).delete(e);if(t.realdom.attrInterceptionHooks?.intercepting)return s;console.warn("Attr mutation APIs are now being intercepted."),t.realdom.attrInterceptionHooks.intercepting=!0,Object.defineProperty(t.realdom,"attrInterceptionRecords",{value:new Map});let l=(f,p)=>{t.realdom.attrInterceptionRecords.has(f.target)||t.realdom.attrInterceptionRecords.set(f.target,{});let c=t.realdom.attrInterceptionRecords.get(f.target);c[f.name]=c[f.name]||[],c[f.name].unshift(f.event),t.realdom.attrInterceptionHooks.get("intercept")?.forEach(w=>w([f]));let g=p();return t.realdom.attrInterceptionHooks.get("sync")?.forEach(w=>w([f])),g};new r.MutationObserver(f=>{f=f.filter(p=>!(r.webqit.realdom.attrInterceptionRecords?.get(p.target)||{})[p.attributeName]?.shift()),f=De(f).map(p=>ke.call(r,p)),f.length&&(t.realdom.attrInterceptionHooks.get("intercept")?.forEach(p=>p(f)),t.realdom.attrInterceptionHooks.get("sync")?.forEach(p=>p(f)))}).observe(i,{attributes:!0,subtree:!0,attributeOldValue:!0});let m=Object.create(null);return["setAttribute","removeAttribute","toggleAttribute"].forEach(f=>{m[f]=o.prototype[f],o.prototype[f]=function(...p){let c,g=this.getAttribute(p[0]);["setAttribute","toggleAttribute"].includes(f)&&(c=p[1]),f==="toggleAttribute"&&c===void 0&&(c=g===null);let w={target:this,name:p[0],value:c,oldValue:g,type:"interception",event:[this,f]};return l(w,()=>m[f].call(this,...p))}}),s}var Q=class extends F{constructor(e,...r){super(e,"tree",...r)}attr(e,r=void 0,t={}){let{context:i,window:o}=this;return new H(i,o).get(...arguments)}query(e,r=void 0,t={}){[e,r=void 0,t={}]=this.resolveArgs(arguments);let{context:i}=this,o=new Map,s=m=>(o.has(m)||o.set(m,{target:m,entrants:[],exits:[],type:"query",event:null}),o.get(m));if(!t.generation||t.generation==="entrants"){if(!e.length)[...i.children].forEach(m=>s(i).entrants.push(m));else if(e.every(m=>m.type==="selector")){let[m,f]=e.reduce(([c,g],w)=>w.kind==="xpath"?[c,g.concat(w)]:[c.concat(w),g],[[],[]]),p=[];t.subtree?(m.length&&p.push(...i.querySelectorAll(m.join(","))),f.length&&p.push(...oe(this.window,i,f))):(m.length&&p.push(...[...i.children].filter(c=>c.matches(m))),f.length&&p.push(...oe(this.window,i,f,!1))),p.forEach(c=>s(c.parentNode||i).entrants.push(c))}}if(!r)return o;let l={disconnected:!1},u=r&&t.lifecycleSignals&&this.createSignalGenerator();for(let[,m]of o){if(l.disconnected)break;let f=u?.generate()||{};r(m,f,i)}if(t.live){u&&(t={...t,signalGenerator:u});let m=this.observe(e,r,t);return this.disconnectables(t.signal,l,m)}return this.disconnectables(t.signal,l,u)}children(e,r=void 0,t={}){return[e,r=void 0,t={}]=this.resolveArgs(arguments),this.query(e,r,{...t,subtree:!1})}subtree(e,r=void 0,t={}){return[e,r=void 0,t={}]=this.resolveArgs(arguments),this.query(e,r,{...t,subtree:!0})}observe(e,r,t={}){if([e,r,t={}]=this.resolveArgs(arguments),["sync","intercept"].includes(t.timing))return this.observeSync(e,r,t);if(t.timing&&t.timing!=="async")throw new Error(`Timing option "${t.timing}" invalid.`);let{context:i,window:o,webqit:s,document:l}=this;t.eventDetails&&(s.realdom.domInterceptionRecordsAlwaysOn=!0),(l.readyState==="loading"||s.realdom.domInterceptionRecordsAlwaysOn)&&!s.realdom.domInterceptionHooks?.intercepting&&Fe.call(o,"sync",()=>{});let u=new o.MutationObserver(p=>p.forEach(c=>{he.call(o,f,Ne.call(o,c),i)}));u.observe(i,{childList:!0,subtree:t.subtree});let m=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),f={context:i,spec:e,callback:r,params:t,signalGenerator:m,disconnectable:u};if(t.staticSensitivity){let p=He.call(o,f);return this.disconnectables(t.signal,u,m,p)}return this.disconnectables(t.signal,u,m)}observeSync(e,r,t={}){[e,r,t={}]=this.resolveArgs(arguments);let{context:i,window:o}=this;if(t.timing&&!["sync","intercept"].includes(t.timing))throw new Error(`Timing option "${t.timing}" invalid.`);let s=t.timing==="intercept"?"intercept":"sync",l=t.subtree?"subtree":"children";this.registry(s).size||Fe.call(o,s,w=>{this.forEachMatchingContext(s,w,he)});let u=new o.MutationObserver(w=>w.forEach(d=>{Array.isArray((d=Ne.call(o,d)).event)||he.call(o,p,d,i)}));u.observe(i,{childList:!0,subtree:t.subtree});let m={disconnect(){u.disconnect(),g.delete(p),g.size||c.delete(i)}},f=t.signalGenerator||t.lifecycleSignals&&this.createSignalGenerator(),p={context:i,spec:e,callback:r,params:t,signalGenerator:f,disconnectable:m},c=this.registry(s,l);c.has(i)||c.set(i,new Set);let g=c.get(i);if(g.add(p),t.staticSensitivity){let w=He.call(o,p);return this.disconnectables(t.signal,m,f,w)}return this.disconnectables(t.signal,m,f)}};function He(n){let e=this,{context:r,spec:t,callback:i,params:o,signalGenerator:s}=n,l=t.filter(g=>g.kind==="css"),u=g=>g.match(/\.([\w-]+)/g)?.length?["class"]:[],m=g=>g.match(/#([\w-]+)/g)?.length?["id"]:[],f=g=>[...g.matchAll(/\[([^\=\]]+)(\=[^\]]+)?\]/g)].map(w=>w[1]).concat(u(g)).concat(m(g));if(!(n.$attrs=Array.from(new Set(l.filter(g=>(g+"").includes("[")).reduce((g,w)=>g.concat(f(w+"")),[])))).length)return;let p=new Set,c=new Set;return p.push=g=>(c.delete(g),p.add(g)),c.push=g=>(p.delete(g),c.add(g)),n.$deliveryCache={entrants:p,exits:c},new H(r,e).observe(n.$attrs,g=>{let w=new Map,d=y=>(w.has(y)||w.set(y,{target:y,entrants:[],exits:[],type:"static",event:null}),w.get(y)),C=new WeakMap,b=y=>(C.has(y)||C.set(y,l.some(v=>y.matches(v+""))),C.get(y));for(let y of g)["entrants","exits"].forEach(v=>{o.generation&&v!==o.generation||n.$deliveryCache[v].has(y.target)||(v==="entrants"?!b(y.target):b(y.target))||(n.$deliveryCache[v].push(y.target),d(y.target)[v].push(y.target),d(y.target).event=y.event)});for(let[,y]of w){let v=s?.generate()||{};i(y,v,r)}},{subtree:o.subtree,timing:o.timing,eventDetails:o.eventDetails})}function he(n,e){let{context:r,spec:t,callback:i,params:o,signalGenerator:s,$deliveryCache:l}=n,u={...e,entrants:[],exits:[]};if(o.eventDetails||delete u.event,["entrants","exits"].forEach(f=>{if(!(o.generation&&f!==o.generation)&&(t.length?u[f]=at.call(this,t,e[f],e.event!=="parse"):u[f]=[...e[f]],!!l))for(let p of u[f])l[f].push(p)}),!u.entrants.length&&!u.exits.length)return;let m=s?.generate()||{};i(u,m,r)}function at(n,e,r){e=Array.isArray(e)?e:[...e];let t=(i,o)=>{if(o.type==="selector"){let s=o.isXpathAttr?[]:i.filter(l=>o.kind==="xpath"?qe(this,l,o+""):l.matches&&l.matches(o+""));if((r||o.isXpathAttr)&&(s=i.reduce((l,u)=>o.kind==="xpath"?[...l,...oe(this,u,o,r)]:u.querySelectorAll?[...l,...u.querySelectorAll(o+"")]:l,s)),s.length)return s}else if(i.includes(o.content)||r&&i.some(s=>s.contains(o.content)))return[o.content]};return e.$$searchCache||(e.$$searchCache=new Map),n.reduce((i,o)=>{let s;return e.$$searchCache.has(o.content)?s=e.$$searchCache.get(o.content):(s=t(e,o)||[],o.type==="instance"&&e.$$searchCache.set(o.content,s)),i.concat(s)},[])}function Ne({target:n,addedNodes:e,removedNodes:r}){let t=this,i;return i=I(e).reduce((o,s)=>o||t.webqit.realdom.domInterceptionRecords?.get(s),null),i=I(r).reduce((o,s)=>o||t.webqit.realdom.domInterceptionRecords?.get(s),i),i=i||t.document.readyState==="loading"&&"parse"||"mutation",{target:n,entrants:e,exits:r,type:"observation",event:i}}function Fe(n,e){let r=this,{webqit:t,document:i,Node:o,CharacterData:s,Element:l,HTMLElement:u,HTMLTemplateElement:m,DocumentFragment:f}=r;t.realdom.domInterceptionHooks||Object.defineProperty(t.realdom,"domInterceptionHooks",{value:new Map}),t.realdom.domInterceptionHooks.has(n)||t.realdom.domInterceptionHooks.set(n,new Set),t.realdom.domInterceptionHooks.get(n).add(e);let p=()=>t.realdom.domInterceptionHooks.get(n).delete(e);if(t.realdom.domInterceptionHooks?.intercepting)return p;console.warn("DOM mutation APIs are now being intercepted."),t.realdom.domInterceptionHooks.intercepting=!0,Object.defineProperty(t.realdom,"domInterceptionRecords",{value:new Map});let c=(d,C)=>{d.entrants.concat(d.exits).forEach(y=>{clearTimeout(t.realdom.domInterceptionRecords.get(y)?.timeout),t.realdom.domInterceptionRecords.set(y,d.event);let v=setTimeout(()=>{t.realdom.domInterceptionRecords.delete(y)},0);Object.defineProperty(d.event,"timeout",{value:v,configurable:!0})}),t.realdom.domInterceptionHooks.get("intercept")?.forEach(y=>y(d));let b=C();return t.realdom.domInterceptionHooks.get("sync")?.forEach(y=>y(d)),b},g={characterData:Object.create(null),other:Object.create(null)};["insertBefore","insertAdjacentElement","insertAdjacentHTML","setHTML","replaceChildren","replaceWith","remove","replaceChild","removeChild","before","after","append","prepend","appendChild"].forEach(d=>{function C(...b){let y=this instanceof s?g.characterData:g.other,v=()=>y[d].call(this,...b);if(!(this instanceof s||this instanceof l||this instanceof f))return v();let a=[],h=[],_=this;["insertBefore"].includes(d)?h=[b[0]]:["insertAdjacentElement","insertAdjacentHTML"].includes(d)?(h=[b[1]],["beforebegin","afterend"].includes(b[0])&&(_=this.parentNode)):["setHTML","replaceChildren"].includes(d)?(a=[...this.childNodes],h=d==="replaceChildren"?[...b]:[b[0]]):["replaceWith","remove"].includes(d)?(a=[this],h=d==="replaceWith"?[...b]:[],_=this.parentNode):["replaceChild"].includes(d)?(a=[b[1]],h=[b[0]]):["removeChild"].includes(d)?a=[...b]:(h=[...b],["before","after"].includes(d)&&(_=this.parentNode));let O=d;if(["insertAdjacentHTML","setHTML"].includes(d)){let P=this.nodeName;if(d==="insertAdjacentHTML"&&["beforebegin","afterend"].includes(b[0])){if(!this.parentNode)return y[d].call(this,...b);P=this.parentNode.nodeName}let L=i.createElement(P);y.setHTML.call(L,h[0],d==="setHTML"?b[1]:{}),h=[...L.childNodes],d==="insertAdjacentHTML"?(O="insertAdjacentElement",b[1]=new f,b[1].______isTemp=!0,b[1].append(...L.childNodes)):(O="replaceChildren",b=[...L.childNodes])}return c({target:_,entrants:h,exits:a,type:"interception",event:[this,d]},()=>y[O].call(this,...b))}["insertBefore","replaceChild","removeChild","appendChild"].includes(d)?(g.other[d]=o.prototype[d],o.prototype[d]=C):(["after","before","remove","replaceWith"].includes(d)&&(g.characterData[d]=s.prototype[d],s.prototype[d]=C),l.prototype[d]&&(g.other[d]=l.prototype[d],l.prototype[d]=C))});let w=Object.create(null);return["outerHTML","outerText","innerHTML","innerText","textContent","nodeValue"].forEach(d=>{let C=["textContent","nodeValue"].includes(d)?o:["outerText","innerText"].includes(d)?u:l;w[d]=Object.getOwnPropertyDescriptor(C.prototype,d),Object.defineProperty(C.prototype,d,{...w[d],set:function(b){let y=()=>w[d].set.call(this,b);if(!(this instanceof l))return y();let v=[],a=[],h=this;if(["outerHTML","outerText"].includes(d)?(v=[this],h=this.parentNode):v=[...this.childNodes],["outerHTML","innerHTML"].includes(d)){let O=this.nodeName;if(d==="outerHTML"){if(!this.parentNode)return y();O=this.parentNode.nodeName}let T=i.createElement(O==="TEMPLATE"?"div":O);w[d].set.call(T,b),a=this instanceof m?[]:[...T.childNodes],d==="outerHTML"?(b=new f,b.______isTemp=!0,b.append(...T.childNodes),y=()=>l.prototype.replaceWith.call(this,b)):this instanceof m?y=()=>this.content.replaceChildren(...T.childNodes):y=()=>l.prototype.replaceChildren.call(this,...T.childNodes)}return c({target:h,entrants:a,exits:v,type:"interception",event:[this,d]},y)}})}),["append","prepend","replaceChildren"].forEach(d=>{[i,f.prototype].forEach(C=>{let b=C[d];C[d]=function(...y){if(this.______isTemp)return b.call(this,...y);let v=d==="replaceChildren"?[...this.childNodes]:[];return c({target:this,entrants:y,exits:v,type:"interception",event:[this,d]},()=>b.call(this,...y))}})}),p}function We(){ut.call(this),mt.call(this),dt.call(this)}function ut(){let n=this;n.CSS||(n.CSS={}),n.CSS.escape||(n.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}function mt(){let n=this;"isConnected"in n.Node.prototype||Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}function dt(){let n=this;n.Element.prototype.matches||(n.Element.prototype.matches=n.Element.prototype.matchesSelector||n.Element.prototype.mozMatchesSelector||n.Element.prototype.msMatchesSelector||n.Element.prototype.oMatchesSelector||n.Element.prototype.webkitMatchesSelector||function(e){for(var r=(this.document||this.ownerDocument).querySelectorAll(e),t=r.length;--t>=0&&r.item(t)!==this;);return t>-1})}function Ue(){let n=this;if(n.webqit||(n.webqit={}),n.webqit.realdom)return n.webqit.realdom;n.webqit.realdom={},We.call(n),n.webqit.realdom.meta=(...r)=>pt.call(n,...r),n.webqit.realdom.ready=(...r)=>ge.call(n,...r),n.webqit.realdom.realtime=(r,t="dom")=>{if(t==="dom")return new Q(r,n);if(t==="attr")return new H(r,n)};let e=new Y(n);return n.webqit.realdom.schedule=(r,...t)=>e[`on${r}`](...t),n.webqit.realdom.synthesizeWhile=(...r)=>e.synthesizeWhile(...r),n.webqit.realdom}function ge(...n){let e="interactive",r;B(n[0])?(e=n[0],E(n[1])&&(r=n[1])):E(n[0])&&(r=n[0]);let t={interactive:["interactive","complete"],complete:["complete"]};if(!t[e])throw new Error(`Invalid ready-state timing: ${e}.`);let i=this;if(!r)return i.webqit.realdom.readyStatePromises||(i.webqit.realdom.readyStatePromises={interactive:new Promise(o=>ge.call(this,"interactive",o)),complete:new Promise(o=>ge.call(this,"complete",o))}),i.webqit.realdom.readyStatePromises[e];if(t[e].includes(i.document.readyState))return r(i);i.webqit.realdom.readyStateCallbacks||(i.webqit.realdom.readyStateCallbacks={interactive:[],complete:[]},i.document.addEventListener("readystatechange",()=>{let o=i.document.readyState;for(let s of i.webqit.realdom.readyStateCallbacks[o].splice(0))s(i)},!1)),i.webqit.realdom.readyStateCallbacks[e].push(r)}function pt(n){let e=this,r={},t;return(t=e.document.querySelector(`meta[name="${n}"]`))&&(r=(t.content||"").split(";").filter(i=>i).reduce((i,o)=>{let s=o.split("=").map(l=>l.trim());return de(i,s[0].split("."),s[1]==="true"?!0:s[1]==="false"?!1:$(s[1])?parseInt(s[1]):s[1]),i},{})),{get name(){return n},get content(){return t.content},json(){return JSON.parse(JSON.stringify(r))}}}function se(n,e){return typeof n!="string"?n:n.replace(/\w\S*/g,function(r){return r.charAt(0).toUpperCase()+(typeof e!==void 0&&e?r.substr(1).toLowerCase():r.substr(1))})}var A=(...n)=>W("oohtml",...n),M={};function Re(n,e,r){let t=this,i=Ue.call(t);M.window=t,t.webqitConfig||(t.webqitConfig=i.meta("webqit").json()),t.webqit||(t.webqit={}),t.webqit.oohtml||(t.webqit.oohtml={}),t.webqit.oohtml.configs||(t.webqit.oohtml.configs={});let o=n.toUpperCase().replace("-","_");if(!t.webqit.oohtml.configs[o]){t.webqit.oohtml.configs[o]={};let s=t.webqit.oohtml.configs[o];z(2,s,r,e,i.meta(n).json()),t.webqitConfig.prefix&&Object.keys(s).forEach(l=>{Object.keys(s[l]).forEach(u=>{l==="api"&&typeof s[l][u]=="string"?s[l][u]=`${t.webqitConfig.prefix}${se(s[l][u])}`:["attr","elements"].includes(l)&&s[l][u]?.startsWith("data-")===!1&&(s[l][u]=`${t.webqitConfig.prefix}-${s[l][u]}`)})})}return{config:t.webqit.oohtml.configs[o],realdom:i,window:t}}function Ve(n,e){return[...n].reduce(([r,t,i],o)=>!r&&t===0&&(Array.isArray(e)?e:[e]).includes(o)?[r,t,[""].concat(i)]:(!r&&["(","[","{"].includes(o)&&!i[0].endsWith("\\")&&t++,!r&&[")","]","}"].includes(o)&&!i[0].endsWith("\\")&&t--,['"',"'","`"].includes(o)&&!i[0].endsWith("\\")&&(r=r===o?null:r||o),i[0]+=o,[r,t,i]),[null,0,[""]])[2].reverse()}var yt=()=>(0|Math.random()*9e6).toString(36),ye=new Map;function _e(n){let e;return(e=ye.get(n))||(e=yt(),ye.set(n,e)),e}function we(n){let e;return ye.forEach((r,t)=>{r===n&&(e=t)}),e}function Ge(){let{window:n}=M,{webqit:e}=n;if(e.DOMContextRequestEvent)return e.DOMContextRequestEvent;class r extends n.Event{constructor(...i){let o=i.pop();if(typeof o!="function")throw new Error("Callback must be provided.");let s=i.pop();if(!s?.kind)throw new Error('"options.kind" must be specified.');let l=["contextrequest","contextclaim"],u=i.pop()||l[0];if(!l.includes(u))throw new Error(`Invalid event type. Must be one of: ${l.join(",")}`);let{kind:m,detail:f,targetContext:p,live:c,signal:g,diff:w,...d}=s;super(u,{...d,bubbles:d.bubbles!==!1}),Object.defineProperty(this,"callback",{get:()=>o}),Object.defineProperty(this,"kind",{get:()=>m}),Object.defineProperty(this,"targetContext",{get:()=>p}),Object.defineProperty(this,"detail",{get:()=>f}),Object.defineProperty(this,"live",{get:()=>c}),Object.defineProperty(this,"signal",{get:()=>g}),Object.defineProperty(this,"diff",{get:()=>w}),Object.defineProperty(this,"options",{get:()=>d})}respondWith(i){if(this.diff){if("_prevValue"in this&&this._prevValue===i)return;Object.defineProperty(this,"_prevValue",{value:i,configurable:!0})}return this.callback(i)}}return e.DOMContextRequestEvent=r,r}var Z=class extends AbortController{constructor(e){super(),e(r=>{let{window:{webqit:{Observer:t}}}=M;t.defineProperty(this,"value",{value:r,configurable:!0,enumerable:!0})},this)}};var K=class extends Error{};var ee=class{static instance(e){return A(e).get("contexts::instance")||new this(e)}constructor(e){A(e).get("contexts::instance")?.dispose(),A(e).set("contexts::instance",this);let r={host:e,contexts:new Set};Object.defineProperty(this,"#",{get:()=>r})}get[Symbol.iterator](){return this["#"].contexts[Symbol.iterator]}get length(){return this["#"].contexts.size}find(...e){return[...this["#"].contexts].find(r=>typeof e[0]=="function"?e[0](r):r.constructor.kind===e[0]&&(e.length===1||r.detail===e[1]))}attach(e){if(!(e instanceof N))throw new TypeError("Context is not a valid DOMContext instance.");if(this.find(e.constructor.kind,e.detail))throw new K(`Context of same kind "${e.constructor.kind}"${e.detail?` and detail "${e.detail}"`:""} already exists.`);this["#"].contexts.add(e),e.initialize(this["#"].host)}detach(e){e.dispose(this["#"].host),this["#"].contexts.delete(e)}request(...e){return new Z((r,t)=>{typeof e[e.length-1]!="function"&&(e[e.length-1]?e.push(r):e[e.length-1]=r);let i;(i=e.find(s=>typeof s=="object"&&s))&&i.live&&(i.signal&&i.signal.addEventListener("abort",()=>t.abort()),e[e.indexOf(i)]={...i,signal:t.signal});let o=new(Ge())(...e);this["#"].host.dispatchEvent(o)})}};var be=class{static createRequest(){return{kind:this.kind}}constructor(e=null){Object.defineProperty(this,"detail",{get:()=>e}),Object.defineProperty(this,"subscriptions",{value:new Set})}get configs(){let{window:{webqit:{oohtml:{configs:e}}}}=M;return e}get name(){return this.host===M.window.document?1/0:this.host.getAttribute(this.configs.CONTEXT_API.attr.contextname)}subscribed(e){}handle(e){}unsubscribed(e){}matchEvent(e){return e.kind===this.constructor.kind&&(!e.targetContext||e.targetContext===this.name)}handleEvent(e){if(!(this.disposed||typeof e.respondWith!="function")){if(e.type==="contextclaim"){if(e.target===this.host||!(e.detail instanceof be))return;let r=new Set;return this.subscriptions.forEach(t=>{!e.target.contains(t.target)||!e.detail.matchEvent(t)||(e.stopPropagation(),this.subscriptions.delete(t),r.add(t))}),e.respondWith(r)}if(e.type==="contextrequest")return this.matchEvent(e)?(e.live&&(this.subscriptions.add(e),this.subscribed(e),e.signal?.addEventListener("abort",()=>{this.subscriptions.delete(e),this.unsubscribed(e)})),e.stopPropagation(),this.handle(e)):void 0}}initialize(e){this.host=e,this.disposed=!1,e.addEventListener("contextrequest",this),e.addEventListener("contextclaim",this);let{value:r}=ee.instance(e).request("contextclaim",{kind:this.constructor.kind,detail:this});return r?.forEach(t=>{this.subscriptions.add(t),this.subscribed(t),this.handle(t)}),this}dispose(e){return this.disposed=!0,e.removeEventListener("contextrequest",this),e.removeEventListener("contextclaim",this),this.subscriptions.forEach(r=>{this.subscriptions.delete(r),this.unsubscribed(r);let{target:t}=r;t.dispatchEvent(r)}),this}},N=be;te(N,"kind");var R=class extends N{static createRequest(e=null){let r=super.createRequest();if(e?.startsWith("@")){let[t,...i]=i.slice(1).split("/").map(o=>o.trim());r.targetContext=t,r.detail=i.join("/")}else r.detail=e;return r}get namespaceObj(){return this.host[this.configs.NAMESPACED_HTML.api.namespace]}handle(e){let{window:{webqit:{Observer:r}}}=M;if(e._controller?.abort(),!(e.detail||"").trim())return e.respondWith(r.unproxy(this.namespaceObj));let t=(e.detail||"").split("/").map(i=>i.trim()).filter(i=>i);if(!t.length)return e.respondWith();t=t.join(`/${this.configs.NAMESPACED_HTML.api.namespace}/`)?.split("/")||[],e._controller=r.reduce(this.namespaceObj,t,r.get,i=>{this.disposed||e.respondWith(i.value)},{live:e.live,signal:e.signal,descripted:!0})}unsubscribed(e){e._controller?.abort()}};te(R,"kind","namespace");function Oe(n={}){let{config:e,window:r}=Re.call(this,"namespaced-html",n,{attr:{namespace:"namespace",lid:"id"},api:{namespace:"namespace"},tokens:{lidrefPrefix:"~",lidrefSeparator:":"},target:{className:":target",eventName:":target",scrolling:!0}});e.lidSelector=`[${r.CSS.escape(e.attr.lid)}]`,e.namespaceSelector=`[${r.CSS.escape(e.attr.namespace)}]`,r.webqit.DOMNamingContext=R,bt.call(r,e),xt.call(r,e)}function Xe(n){let{lidrefPrefix:e,lidrefSeparator:r}=n.tokens;return{escape(t,i=1){return[...t].map(o=>/\w/.test(o)?o:i===2?`\\\\${o}`:`\\${o}`).join("")},lidrefPrefix(t=0){return t?this.escape(e,t):e},lidrefSeparator(t=0){return t?this.escape(r,t):r},isUuid(t,i=0){return t.startsWith(this.lidrefPrefix(i))&&t.includes(this.lidrefSeparator(i))},isLidref(t,i=0){return t.startsWith(this.lidrefPrefix(i))&&!t.includes(this.lidrefSeparator(i))},toUuid(t,i,o=0){return`${this.lidrefPrefix(o)}${t}${this.lidrefSeparator(o)}${i}`},uuidToLid(t,i=0){return this.isUuid(t)?t.split(this.lidrefSeparator(i))[1]:t},uuidToLidref(t,i=0){return this.isUuid(t)?`${this.lidrefPrefix(i)}${t.split(this.lidrefSeparator(i))[1]}`:t}}}function _t(n,e,r=null,t=0){let i=this,{webqit:{oohtml:{configs:{NAMESPACED_HTML:o}}}}=i,s=Xe(o),l=new RegExp(`${r?":scope|":""}#(${s.lidrefPrefix(t+1)})?([\\w]+${s.lidrefSeparator(t+1)})?((?:[\\w-]|\\\\.)+)`,"g"),[u,m]=Ve(n,",").reduce(([p,c],g)=>{let w,d;return g=g.replace(l,(C,b,y,v,a)=>{if(w||(w=[...g.matchAll(/(["'])(?:(?=(\\?))\2.)*?\1/g)]),w[0]&&w.some(P=>a>P.index&&a+C.length<P.index+P[0].length))return C;if(C===":scope")return d=!0,r;let h=b&&!y;if(b&&y)return`#${s.escape(C.replace("#",""),1)}`;let O=!1;if(h){if(o.attr.lid==="id"&&e)return`#${s.toUuid(e,v,1)}`;O=!0}let T;return o.attr.lid==="id"?T=`[id^="${s.lidrefPrefix(t)}"][id$="${s.lidrefSeparator(t)}${v}"]`:T=`:is(#${v},[${i.CSS.escape(o.attr.lid)}="${v}"])`,r&&O?`:is(${T}):not(${r} [${o.attr.namespace}] *)`:T}),d?[p,c.concat(g)]:[p.concat(g),c]},[[],[]]),f;return r&&u.length?f=[u.length>1?`${r} :is(${u.join(", ")})`:`${r} ${u[0]}`,m.join(", ")].filter(p=>p).join(", "):f=[...u,...m].join(", "),f}function xe(n){if(!A(n).has("namespace")){let e=Object.create(null);A(n).set("namespace",e)}return A(n).get("namespace")}function wt(n){let e=this,{webqit:{oohtml:{configs:{NAMESPACED_HTML:r}}}}=e,t=xe(n instanceof e.Document?n:n.closest(`[${r.attr.namespace}]`)||n.ownerDocument);return we(t)||_e(t)}function bt(n){let e=this,{webqit:{Observer:r}}=e;if(n.api.namespace in e.document)throw new Error(`document already has a "${n.api.namespace}" property!`);if(n.api.namespace in e.Element.prototype)throw new Error(`The "Element" class already has a "${n.api.namespace}" property!`);Object.defineProperty(e.document,n.api.namespace,{get:function(){return r.proxy(xe.call(e,e.document))}}),Object.defineProperty(e.Element.prototype,n.api.namespace,{get:function(){return r.proxy(xe.call(e,this))}})}function xt(n){let e=this,{webqit:{Observer:r,realdom:t,oohtml:{configs:i},DOMNamingContext:o}}=e;e.document[i.CONTEXT_API.api.contexts].attach(new o),t.realtime(e.document).subtree(n.namespaceSelector,a=>{a.exits.forEach(h=>{let _=h[i.CONTEXT_API.api.contexts],O=_.find(o.kind);O&&_.detach(O)}),a.entrants.forEach(h=>{let _=h[i.CONTEXT_API.api.contexts];_.find(o.kind)||_.attach(new o)})},{live:!0,timing:"sync",staticSensitivity:!0});let s=["aria-owns","aria-controls","aria-labelledby","aria-describedby","aria-flowto"],l=["for","list","form","aria-activedescendant","aria-details","aria-errormessage"],u=[n.attr.lid,...s,...l],m={id:"id",for:"htmlFor","aria-owns":"ariaOwns","aria-controls":"ariaControls","aria-labelledby":"ariaLabelledBy","aria-describedby":"ariaDescribedBy","aria-flowto":"ariaFlowto","aria-activedescendant":"ariaActiveDescendant","aria-details":"ariaDetails","aria-errormessage":"ariaErrorMessage"},f=Xe(n),p=Object.getOwnPropertyDescriptor(e.Element.prototype,"getAttribute");Object.defineProperty(e.Element.prototype,"getAttribute",{...p,value(a){let h=p.value.call(this,a);return!A(this,"lock").get(a)&&u.includes(a)?(a==="id"?f.uuidToLid:f.uuidToLidref).call(f,h):h}});let c=Object.getOwnPropertyDescriptor(e.Document.prototype,"getElementById");Object.defineProperty(e.Document.prototype,"getElementById",{...c,value(a){return this.querySelector(`#${a}`)}});for(let a of["querySelector","querySelectorAll"])for(nodeApi of[e.Document,e.Element]){let h=Object.getOwnPropertyDescriptor(nodeApi.prototype,a);Object.defineProperty(nodeApi.prototype,a,{...h,value(_){return h.value.call(this,_t.call(e,_,wt.call(e,this)))}})}for(let a of u){if(!(a in m))continue;let h=a==="for"?[e.HTMLLabelElement,e.HTMLOutputElement]:[e.Element];for(let _ of h){let O=Object.getOwnPropertyDescriptor(_.prototype,m[a]);!O||Object.defineProperty(_.prototype,m[a],{...O,get(){return(a==="id"?f.uuidToLid:f.uuidToLidref).call(f,O.get.call(this,a)||"")}})}}let g=Object.getOwnPropertyDescriptor(e.Attr.prototype,"value");Object.defineProperty(e.Attr.prototype,"value",{...g,get(){let a=g.get.call(this);return u.includes(this.name)?(this.name==="id"?f.uuidToLid:f.uuidToLidref).call(f,a):a}}),n.attr.lid!=="id"&&Object.defineProperty(e.Element.prototype,n.attr.lid,{configurable:!0,enumerable:!0,get(){return this.getAttribute(n.attr.lid)},set(a){return this.setAttribute(n.attr.lid,a)}});let w=(a,h,_)=>{if(A(a,"lock").get(h))return;A(a,"lock").set(h,!0),typeof _=="function"&&(_=_());let O=A(a).get("ownerNamespace");if(h===n.attr.lid){let T=f.uuidToLid(_);r.get(O,T)===a&&r.deleteProperty(O,T)}else{let T=_.split(" ").map(P=>(P=P.trim())&&f.uuidToLidref(P)).join(" ");a.setAttribute(h,T)}A(a,"lock").delete(h)},d=(a,h,_)=>{if(A(a,"lock").get(h))return;A(a,"lock").set(h,!0),typeof _=="function"&&(_=_());let O=A(a).get("ownerNamespace"),T=A(a).get("namespaceUUID");if(h===n.attr.lid){let P=f.uuidToLid(_);r.get(O,P)!==a&&(a.setAttribute("id",f.toUuid(T,P)),r.set(O,P,a))}else{let P=_.split(" ").map(L=>(L=L.trim())&&!f.isLidref(L)?L:f.toUuid(T,L.replace(f.lidrefPrefix(),""))).join(" ");a.setAttribute(h,P)}A(a,"lock").delete(h)},C=(a,h=!0)=>{for(let _ of u)!a.hasAttribute(_)||w(a,_,()=>a.getAttribute(_));A(a).delete("ownerNamespace"),A(a).delete("namespaceUUID"),h&&(A(a).get("namespaceBinding").abort(),A(a).delete("namespaceBinding"))},b=a=>{if(!A(a).get("ownerNamespace")){let h={...o.createRequest(),live:!0},_=a.parentNode[i.CONTEXT_API.api.contexts].request(h,O=>{A(a).get("namespaceUUID")&&C(a,!1),A(a).set("ownerNamespace",O),A(a).set("namespaceUUID",we(O)||_e(O)),b(a)});A(a).set("namespaceBinding",_);return}for(let h of u)!a.hasAttribute(h)||d(a,h,()=>a.getAttribute(h))};t.realtime(e.document).subtree(`[${u.map(a=>e.CSS.escape(a)).join("],[")}]`,a=>{a.exits.forEach(C),a.entrants.forEach(b)},{live:!0,timing:"sync"}),t.realtime(e.document,"attr").observe(u,a=>{for(let h of a)h.oldValue?(w(h.target,h.name,h.oldValue),h.value&&d(h.target,h.name,h.value)):b(entry)},{subtree:!0,timing:"sync",newValue:!0,oldValue:!0});let y,v=()=>{if(!e.location.hash?.startsWith(`#${f.lidrefPrefix()}`))return;let a=e.location.hash?.substring(`#${f.lidrefPrefix()}`.length).split("/").map(_=>_.trim()).filter(_=>_)||[],h=a.reduce((_,O)=>_&&_[n.api.namespace][O],e.document);y&&n.target.className&&y.classList.toggle(n.target.className,!1),h&&h!==e.document&&(n.target.className&&h.classList.toggle(n.target.className,!0),n.target.eventName&&h.dispatchEvent(new e.CustomEvent(n.target.eventName)),n.target.scrolling&&a.length>1&&h.scrollIntoView(),y=h)};e.addEventListener("hashchange",v),t.ready(v)}Oe.call(window);})();
//# sourceMappingURL=namespaced-html.js.map
