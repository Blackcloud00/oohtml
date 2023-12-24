(()=>{var Bt=Object.defineProperty;var Gt=(n,t,r)=>t in n?Bt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var tt=(n,t,r)=>(Gt(n,typeof t!="symbol"?t+"":t,r),r);function w(n){return!Array.isArray(n)&&typeof n=="object"&&n}function y(n){return Array.isArray(n)}function st(n,t,r=null){return y(t)?n.filter(e=>r?t.filter(i=>r(e,i)).length:t.indexOf(e)!==-1):[]}function F(n,...t){if(globalThis.webqit||(globalThis.webqit={}),globalThis.webqit.refs||Object.defineProperty(globalThis.webqit,"refs",{value:new V}),!arguments.length)return globalThis.webqit.refs;let r=globalThis.webqit.refs.get(n);r||(r=new V,globalThis.webqit.refs.set(n,r));let e,i;for(;e=t.shift();)(i=r)&&!(r=r.get(e))&&(r=new V,i.set(e,r));return r}var V=class extends Map{constructor(...t){super(...t),this.observers=new Set}set(t,r){let e=super.set(t,r);return this.fire("set",t,r,t),e}delete(t){let r=super.delete(t);return this.fire("delete",t),r}has(t){return this.fire("has",t),super.has(t)}get(t){return this.fire("get",t),super.get(t)}keyNames(){return Array.from(super.keys())}observe(t,r,e){let i={type:t,key:r,callback:e};return this.observers.add(i),()=>this.observers.delete(i)}unobserve(t,r,e){if(Array.isArray(t)||Array.isArray(r))throw new Error('The "type" and "key" arguments can only be strings.');for(let i of this.observers)!(et([t,"*"],i.type)&&et([r,"*"],i.key)&&i.callback===e)||this.observers.delete(i)}fire(t,r,...e){for(let i of this.observers)!(et([t,"*"],i.type)&&et([r,"*"],i.key))||i.callback(...e)}},et=(n,t)=>Array.isArray(t)?st(n,t).length:n.includes(t);function W(n){return typeof n=="function"}function B(n){return n===null||n===""}function I(n){return arguments.length&&(n===void 0||typeof n>"u")}function v(n){return Array.isArray(n)||typeof n=="object"&&n||W(n)}function ft(n){return B(n)||I(n)||n===!1||n===0||v(n)&&!Object.keys(n).length}function b(n){return W(n)||n&&{}.toString.call(n)==="[object function]"}function G(n){return n instanceof Number||typeof n=="number"}function C(n){return G(n)||n!==!0&&n!==!1&&n!==null&&n!==""&&!isNaN(n*1)}function N(n){return n instanceof String||typeof n=="string"&&n!==null}function lt(n){return!N(n)&&!I(n.length)}function rt(n,...t){return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n}function ct(e,t){t=t||Object.prototype,t=t&&!y(t)?[t]:t;for(var r=[],e=e;e&&(!t||t.indexOf(e)<0)&&e.name!=="default";)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}function ut(n,t){var r=[];return ct(n,t).forEach(e=>{rt(r,...Object.getOwnPropertyNames(e))}),r}function T(n,t,r=!1,e=!1,i=!1){var o=0,s=n.shift();if((C(s)||s===!0||s===!1)&&(o=s,s=n.shift()),!n.length)throw new Error("_merge() requires two or more array/objects.");return n.forEach((f,a)=>{!v(f)&&!b(f)||(r?ut(f):Object.keys(f)).forEach(u=>{if(!!t(u,s,f,a)){var l=s[u],m=f[u];if((y(l)&&y(m)||w(l)&&w(m))&&(o===!0||o>0))s[u]=y(l)&&y(m)?[]:{},T([C(o)?o-1:o,s[u],l,m],t,r,e,i);else if(y(s)&&y(f))e?s[u]=m:s.push(m);else try{i?Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(f,u)):s[u]=f[u]}catch{}}})}),s}function X(...n){return T(n,(t,r,e)=>!0,!1,!1,!1)}function A(n,t=!0){return y(n)?n:!t&&w(n)?[n]:n!==!1&&n!==0&&ft(n)?[]:lt(n)?Array.prototype.slice.call(n):w(n)?Object.values(n):[n]}function U(n,t,r={},e={}){t=A(t).slice();for(var i=n;!I(i)&&!B(i)&&t.length;){var o=t.shift();if(!(r.get?r.get(i,o):v(i)?o in i:i[o])){e.exists=!1;return}i=r.get?r.get(i,o):i[o]}return e.exists=!0,i}function mt(n,t,r,e={},i={}){let o=(l,m,c)=>i.set?i.set(l,m,c):(C(t[f])&&y(l)?l.push(c):l[m]=c,!0);t=A(t);for(var s=n,f=0;f<t.length;f++)if(f<t.length-1){if(!s||!v(s)&&!b(s))return!1;var a=U(s,t[f],i);if(!v(a)){if(i.buildTree===!1)return!1;a=b(i.buildTree)?i.buildTree(f):C(t[f+1])?[]:{};var u=o(s,t[f],a);if(!u)return!1}s=a}else return o(s,t[f],r)}var z=class{constructor(t,r=!1){Object.defineProperty(this,"window",{value:t}),Object.defineProperty(this,"readCallbacks",{value:new Set}),Object.defineProperty(this,"writeCallbacks",{value:new Set}),Object.defineProperty(this,"_synthesis",{value:0,writable:!0}),!r&&this.window.requestAnimationFrame?this._loop():this._synthesis++}get synthesis(){return this._synthesis}async synthesizeWhile(t){this._synthesis++,this._fulfill();let r=await t();return this._synthesis--,r}_fulfill(){for(let t of this.readCallbacks)t(),this.readCallbacks.delete(t);for(let t of this.writeCallbacks)t(),this.writeCallbacks.delete(t)}_loop(){this.window.requestAnimationFrame(()=>{this._fulfill(),this._loop()})}onread(t,r=!1){if(r)return new Promise(e=>{this.synthesis?e(t()):this.readCallbacks.add(()=>{e(t())})});this.synthesis?Promise.resolve().then(t):this.readCallbacks.add(t)}onwrite(t,r=!1){if(r)return new Promise(e=>{this.synthesis?e(t()):this.writeCallbacks.add(()=>{e(t())})});this.synthesis?Promise.resolve().then(t):this.writeCallbacks.add(t)}cycle(t,r,e){this.onread(()=>{let i=t(e),o=s=>{s!==void 0&&this.onwrite(()=>{let f=r(s,e),a=u=>{u!==void 0&&this.cycle(t,r,u)};f instanceof Promise?f.then(a):a(f)})};i instanceof Promise?i.then(o):o(i)})}};function Ct(n){return(n=n.trim())&&n.startsWith("(")&&n.endsWith(")")}function it(n,t,r,e=!0){r=(Array.isArray(r)?r:[r]).map(s=>(s+"").replace("(",e?"(.//":"(./")).join("|");let i=[],o;try{let s=n.document.evaluate(r,t,null,XPathResult.ANY_TYPE);for(;o=s.iterateNext();)i.push(o)}catch{}return i}function St(n,t,r){r=(Array.isArray(r)?r:[r]).map(e=>(e+"").replace("(","(self::")).join("|");try{return n.document.evaluate(`${r}`,t,null,XPathResult.BOOLEAN_TYPE).booleanValue}catch{}}function Tt(n,t="|"){return[...n].reduce(([r,e,i,o],s)=>!r&&e===0&&(Array.isArray(t)?t:[t]).includes(s)?[r,e,[""].concat(i)]:(!r&&["(","[","{"].includes(s)&&!i[0].endsWith("\\")&&e++,!r&&[")","]","}"].includes(s)&&!i[0].endsWith("\\")&&e--,['"',"'","`"].includes(s)&&!i[0].endsWith("\\")&&(r=r===s?null:r||s),i[0]+=s,[r,e,i]),[null,0,[""]])[2].reverse()}var S=class{constructor(t){this.content=t,this.type=typeof t=="string"?"selector":"instance",this.kind=this.type==="instance"?null:Ct(t)?"xpath":"css",this.kind==="xpath"&&(this.isXpathAttr=Tt(t.trim().slice(1,-1),"@").length>1)}toString(){return this.content}};var $=class{constructor(t,r,e){this.context=t,this.namespace=r,this.window=t.defaultView||t.ownerDocument?.defaultView||e,this.document=this.window.document,this.webqit=this.window.webqit,Object.defineProperty(this,"#",{value:{}})}resolveArgs(t){if(b(t[0])?t=[[],...t]:w(t[0])&&!(t[0]instanceof S)&&t.length===1?t=[[],void 0,t[0]]:w(t[1])&&t.length===2?t=[A(t[0],!1),void 0,t[1]]:t[0]=A(t[0],!1),t[0].filter(r=>typeof r!="string"&&!(r instanceof S)&&!(r instanceof this.window.Node)).length)throw new Error("Argument #2 must be either a string or a Node object, or a list of those.");return t[0]=t[0].map(r=>r instanceof S?r:new S(r)),t}registry(...t){return F("realdom.realtime",this.window,this.namespace,...t)}createSignalGenerator(){return{generate(){return this.lastController?.abort(),this.lastController=new AbortController,{signal:this.lastController.signal}},disconnect(){this.lastController?.abort()}}}forEachMatchingContext(t,r,e){let{window:i}=this,o=Array.isArray(r)?r:[r],s=new Set;for(let[f,a]of this.registry(t))for(let[u,l]of a){let m=o.filter(c=>u.contains(c.target)?f==="subtree"||c.target===u:!1);if(!!m.length){Array.isArray(r)||(m=m[0]);for(let c of l)s.add([c,m,u])}}for(let[f,a,u]of s)e.call(i,f,a,u)}disconnectables(t,...r){let e={disconnect(){r.forEach(i=>i&&b(i.disconnect)&&i.disconnect()||b(i)&&i()||w(i)&&(i.disconnected=!0))}};return t&&t.addEventListener("abort",()=>e.disconnect()),e}};var j=class extends ${constructor(t,...r){super(t,"attr",...r)}get(t,r=void 0,e={}){let i=typeof t=="string"||t instanceof S;[t=[],r=void 0,e={}]=this.resolveArgs(arguments);let{context:o}=this,s=jt(o,t);if(!r)return s;let f=e.lifecycleSignals&&this.createSignalGenerator();if(i)for(let a of s){let u=f?.generate()||{};r(a,u,o)}else{let a=f?.generate()||{};r(s,a,o)}if(e.live){f&&(e={...e,signalGenerator:f});let a=this.observe(i?t[0]:t,r,{newValue:!0,...e});return this.disconnectables(e.signal,a)}}observe(t,r,e={}){let i=typeof t=="string"||t instanceof S;if([t=[],r,e={}]=this.resolveArgs(arguments),["sync","intercept"].includes(e.timing))return this.observeSync(i?t[0]:t,r,e);if(e.timing&&e.timing!=="async")throw new Error(`Timing option "${e.timing}" invalid.`);let{context:o,window:s,webqit:f}=this;e.eventDetails&&!f.realdom.attrInterceptionHooks?.intercepting&&It.call(s,"intercept",()=>{});let a=new s.MutationObserver(c=>{c=Mt(c).map(p=>kt.call(s,p)),Pt.call(s,m,c,o)}),u={attributes:!0,attributeOldValue:e.oldValue,subtree:e.subtree};t.length&&(u.attributeFilter=t.map(c=>c+"")),a.observe(o,u);let l=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),m={context:o,spec:t,callback:r,params:e,atomics:new Map,originalFilterIsString:i,signalGenerator:l,disconnectable:a};return this.disconnectables(e.signal,a,l)}observeSync(t,r,e={}){let i=typeof t=="string"||t instanceof S;[t,r,e={}]=this.resolveArgs(arguments);let{context:o,window:s}=this;if(e.timing&&!["sync","intercept"].includes(e.timing))throw new Error(`Timing option "${e.timing}" invalid.`);let f=e.timing==="intercept"?"intercept":"sync",a=e.subtree?"subtree":"children";this.registry(f).size||It.call(s,f,_=>{this.forEachMatchingContext(f,_,Pt)});let u={disconnect(){p.delete(m),p.size||c.delete(o)}},l=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),m={context:o,spec:t,callback:r,params:e,atomics:new Map,originalFilterIsString:i,signalGenerator:l,disconnectable:u},c=this.registry(f,a);c.has(o)||c.set(o,new Set);let p=c.get(o);return p.add(m),this.disconnectables(e.signal,u,l)}};function Mt(n){return n.reduce((t,r,e)=>t[e-1]?.attributeName===r.attributeName?t:t.concat(r),[])}function Pt(n,t){let{context:r,spec:e,callback:i,params:o,atomics:s,originalFilterIsString:f,signalGenerator:a}=n,u=e.map(c=>c+"");if(o.atomic&&!s.size?t=jt(r,e,t):o.timing!=="async"&&e.length&&(t=t.filter(c=>u.includes(c.name))),!t.length)return;o.newValue===null&&o.oldValue===null&&o.eventDetails||(t=t.map(c=>{let p;return o.eventDetails||({event:p,...c}=c),!o.oldValue&&"oldValue"in c&&({oldValue:p,...c}=c),!o.newValue&&"value"in c?{value:p,...c}=c:o.newValue&&typeof c.value>"u"&&(c={...c,value:c.target.getAttribute(c.name)}),c})),o.atomic&&(t.forEach(c=>s.set(c.name,c)),t=Array.from(s.entries()).map(([,c])=>c));let l=f?t[0]:t,m=a?.generate()||{};i(l,m,r)}function jt(n,t,r=[]){let e={event:null,type:"attribute"};return t.length?t.map(o=>(o=o+"",r.find(s=>s.name===o)||{target:n,name:o,value:n.getAttribute(o),...e})):Array.from(n.attributes).map(o=>r.find(s=>s.name===o.nodeName)||{target:n,name:o.nodeName,value:o.nodeValue,...e})}function kt({target:n,attributeName:t,value:r,oldValue:e}){let s=(this.webqit.realdom.attrInterceptionRecords?.get(n)||{})[t]?.[0]||"mutation";return{target:n,name:t,value:r,oldValue:e,type:"observation",event:s}}function It(n,t){let r=this,{webqit:e,document:i,Element:o}=r;e.realdom.attrInterceptionHooks||Object.defineProperty(e.realdom,"attrInterceptionHooks",{value:new Map}),e.realdom.attrInterceptionHooks.has(n)||e.realdom.attrInterceptionHooks.set(n,new Set),e.realdom.attrInterceptionHooks.get(n).add(t);let s=()=>e.realdom.attrInterceptionHooks.get(n).delete(t);if(e.realdom.attrInterceptionHooks?.intercepting)return s;console.warn("Attr mutation APIs are now being intercepted."),e.realdom.attrInterceptionHooks.intercepting=!0,Object.defineProperty(e.realdom,"attrInterceptionRecords",{value:new Map});let f=(l,m)=>{e.realdom.attrInterceptionRecords.has(l.target)||e.realdom.attrInterceptionRecords.set(l.target,{});let c=e.realdom.attrInterceptionRecords.get(l.target);c[l.name]=c[l.name]||[],c[l.name].unshift(l.event),e.realdom.attrInterceptionHooks.get("intercept")?.forEach(_=>_([l]));let p=m();return e.realdom.attrInterceptionHooks.get("sync")?.forEach(_=>_([l])),p};new r.MutationObserver(l=>{l=l.filter(m=>!(r.webqit.realdom.attrInterceptionRecords?.get(m.target)||{})[m.attributeName]?.shift()),l=Mt(l).map(m=>kt.call(r,m)),l.length&&(e.realdom.attrInterceptionHooks.get("intercept")?.forEach(m=>m(l)),e.realdom.attrInterceptionHooks.get("sync")?.forEach(m=>m(l)))}).observe(i,{attributes:!0,subtree:!0,attributeOldValue:!0});let u=Object.create(null);return["setAttribute","removeAttribute","toggleAttribute"].forEach(l=>{u[l]=o.prototype[l],o.prototype[l]=function(...m){let c,p=this.getAttribute(m[0]);["setAttribute","toggleAttribute"].includes(l)&&(c=m[1]),l==="toggleAttribute"&&c===void 0&&(c=p===null);let _={target:this,name:m[0],value:c,oldValue:p,type:"interception",event:[this,l]};return f(_,()=>u[l].call(this,...m))}}),s}var J=class extends ${constructor(t,...r){super(t,"tree",...r)}attr(t,r=void 0,e={}){let{context:i,window:o}=this;return new j(i,o).get(...arguments)}query(t,r=void 0,e={}){[t,r=void 0,e={}]=this.resolveArgs(arguments);let{context:i}=this,o=new Map,s=u=>(o.has(u)||o.set(u,{target:u,entrants:[],exits:[],type:"query",event:null}),o.get(u));if(!e.generation||e.generation==="entrants"){if(!t.length)[...i.children].forEach(u=>s(i).entrants.push(u));else if(t.every(u=>u.type==="selector")){let[u,l]=t.reduce(([c,p],_)=>_.kind==="xpath"?[c,p.concat(_)]:[c.concat(_),p],[[],[]]),m=[];e.subtree?(u.length&&m.push(...i.querySelectorAll(u.join(","))),l.length&&m.push(...it(this.window,i,l))):(u.length&&m.push(...[...i.children].filter(c=>c.matches(u))),l.length&&m.push(...it(this.window,i,l,!1))),m.forEach(c=>s(c.parentNode||i).entrants.push(c))}}if(!r)return o;let f={disconnected:!1},a=r&&e.lifecycleSignals&&this.createSignalGenerator();for(let[,u]of o){if(f.disconnected)break;let l=a?.generate()||{};r(u,l,i)}if(e.live){a&&(e={...e,signalGenerator:a});let u=this.observe(t,r,e);return this.disconnectables(e.signal,f,u)}return this.disconnectables(e.signal,f,a)}children(t,r=void 0,e={}){return[t,r=void 0,e={}]=this.resolveArgs(arguments),this.query(t,r,{...e,subtree:!1})}subtree(t,r=void 0,e={}){return[t,r=void 0,e={}]=this.resolveArgs(arguments),this.query(t,r,{...e,subtree:!0})}observe(t,r,e={}){if([t,r,e={}]=this.resolveArgs(arguments),["sync","intercept"].includes(e.timing))return this.observeSync(t,r,e);if(e.timing&&e.timing!=="async")throw new Error(`Timing option "${e.timing}" invalid.`);let{context:i,window:o,webqit:s,document:f}=this;e.eventDetails&&(s.realdom.domInterceptionRecordsAlwaysOn=!0),(f.readyState==="loading"||s.realdom.domInterceptionRecordsAlwaysOn)&&!s.realdom.domInterceptionHooks?.intercepting&&$t.call(o,"sync",()=>{});let a=new o.MutationObserver(m=>m.forEach(c=>{pt.call(o,l,Lt.call(o,c),i)}));a.observe(i,{childList:!0,subtree:e.subtree});let u=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),l={context:i,spec:t,callback:r,params:e,signalGenerator:u,disconnectable:a};if(e.staticSensitivity){let m=Ht.call(o,l);return this.disconnectables(e.signal,a,u,m)}return this.disconnectables(e.signal,a,u)}observeSync(t,r,e={}){[t,r,e={}]=this.resolveArgs(arguments);let{context:i,window:o}=this;if(e.timing&&!["sync","intercept"].includes(e.timing))throw new Error(`Timing option "${e.timing}" invalid.`);let s=e.timing==="intercept"?"intercept":"sync",f=e.subtree?"subtree":"children";this.registry(s).size||$t.call(o,s,_=>{this.forEachMatchingContext(s,_,pt)});let a=new o.MutationObserver(_=>_.forEach(d=>{Array.isArray((d=Lt.call(o,d)).event)||pt.call(o,m,d,i)}));a.observe(i,{childList:!0,subtree:e.subtree});let u={disconnect(){a.disconnect(),p.delete(m),p.size||c.delete(i)}},l=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),m={context:i,spec:t,callback:r,params:e,signalGenerator:l,disconnectable:u},c=this.registry(s,f);c.has(i)||c.set(i,new Set);let p=c.get(i);if(p.add(m),e.staticSensitivity){let _=Ht.call(o,m);return this.disconnectables(e.signal,u,l,_)}return this.disconnectables(e.signal,u,l)}};function Ht(n){let t=this,{context:r,spec:e,callback:i,params:o,signalGenerator:s}=n,f=e.filter(p=>p.kind==="css"),a=p=>p.match(/\.([\w-]+)/g)?.length?["class"]:[],u=p=>p.match(/#([\w-]+)/g)?.length?["id"]:[],l=p=>[...p.matchAll(/\[([^\=\]]+)(\=[^\]]+)?\]/g)].map(_=>_[1]).concat(a(p)).concat(u(p));if(!(n.$attrs=Array.from(new Set(f.filter(p=>(p+"").includes("[")).reduce((p,_)=>p.concat(l(_+"")),[])))).length)return;let m=new Set,c=new Set;return m.push=p=>(c.delete(p),m.add(p)),c.push=p=>(m.delete(p),c.add(p)),n.$deliveryCache={entrants:m,exits:c},new j(r,t).observe(n.$attrs,p=>{let _=new Map,d=h=>(_.has(h)||_.set(h,{target:h,entrants:[],exits:[],type:"static",event:null}),_.get(h)),O=new WeakMap,g=h=>(O.has(h)||O.set(h,f.some(x=>h.matches(x+""))),O.get(h));for(let h of p)["entrants","exits"].forEach(x=>{o.generation&&x!==o.generation||n.$deliveryCache[x].has(h.target)||(x==="entrants"?!g(h.target):g(h.target))||(n.$deliveryCache[x].push(h.target),d(h.target)[x].push(h.target),d(h.target).event=h.event)});for(let[,h]of _){let x=s?.generate()||{};i(h,x,r)}},{subtree:o.subtree,timing:o.timing,eventDetails:o.eventDetails})}function pt(n,t){let{context:r,spec:e,callback:i,params:o,signalGenerator:s,$deliveryCache:f}=n,a={...t,entrants:[],exits:[]};if(o.eventDetails||delete a.event,["entrants","exits"].forEach(l=>{if(!(o.generation&&l!==o.generation)&&(e.length?a[l]=se.call(this,e,t[l],t.event!=="parse"):a[l]=[...t[l]],!!f))for(let m of a[l])f[l].push(m)}),!a.entrants.length&&!a.exits.length)return;let u=s?.generate()||{};i(a,u,r)}function se(n,t,r){t=Array.isArray(t)?t:[...t];let e=(i,o)=>{if(o.type==="selector"){let s=o.isXpathAttr?[]:i.filter(f=>o.kind==="xpath"?St(this,f,o+""):f.matches&&f.matches(o+""));if((r||o.isXpathAttr)&&(s=i.reduce((f,a)=>o.kind==="xpath"?[...f,...it(this,a,o,r)]:a.querySelectorAll?[...f,...a.querySelectorAll(o+"")]:f,s)),s.length)return s}else if(i.includes(o.content)||r&&i.some(s=>s.contains(o.content)))return[o.content]};return t.$$searchCache||(t.$$searchCache=new Map),n.reduce((i,o)=>{let s;return t.$$searchCache.has(o.content)?s=t.$$searchCache.get(o.content):(s=e(t,o)||[],o.type==="instance"&&t.$$searchCache.set(o.content,s)),i.concat(s)},[])}function Lt({target:n,addedNodes:t,removedNodes:r}){let e=this,i;return i=A(t).reduce((o,s)=>o||e.webqit.realdom.domInterceptionRecords?.get(s),null),i=A(r).reduce((o,s)=>o||e.webqit.realdom.domInterceptionRecords?.get(s),i),i=i||e.document.readyState==="loading"&&"parse"||"mutation",{target:n,entrants:t,exits:r,type:"observation",event:i}}function $t(n,t){let r=this,{webqit:e,document:i,Node:o,CharacterData:s,Element:f,HTMLElement:a,HTMLTemplateElement:u,DocumentFragment:l}=r;e.realdom.domInterceptionHooks||Object.defineProperty(e.realdom,"domInterceptionHooks",{value:new Map}),e.realdom.domInterceptionHooks.has(n)||e.realdom.domInterceptionHooks.set(n,new Set),e.realdom.domInterceptionHooks.get(n).add(t);let m=()=>e.realdom.domInterceptionHooks.get(n).delete(t);if(e.realdom.domInterceptionHooks?.intercepting)return m;console.warn("DOM mutation APIs are now being intercepted."),e.realdom.domInterceptionHooks.intercepting=!0,Object.defineProperty(e.realdom,"domInterceptionRecords",{value:new Map});let c=(d,O)=>{d.entrants.concat(d.exits).forEach(h=>{clearTimeout(e.realdom.domInterceptionRecords.get(h)?.timeout),e.realdom.domInterceptionRecords.set(h,d.event);let x=setTimeout(()=>{e.realdom.domInterceptionRecords.delete(h)},0);Object.defineProperty(d.event,"timeout",{value:x,configurable:!0})}),e.realdom.domInterceptionHooks.get("intercept")?.forEach(h=>h(d));let g=O();return e.realdom.domInterceptionHooks.get("sync")?.forEach(h=>h(d)),g},p={characterData:Object.create(null),other:Object.create(null)};["insertBefore","insertAdjacentElement","insertAdjacentHTML","setHTML","replaceChildren","replaceWith","remove","replaceChild","removeChild","before","after","append","prepend","appendChild"].forEach(d=>{function O(...g){let h=this instanceof s?p.characterData:p.other,x=()=>h[d].call(this,...g);if(!(this instanceof s||this instanceof f||this instanceof l))return x();let P=[],E=[],R=this;["insertBefore"].includes(d)?E=[g[0]]:["insertAdjacentElement","insertAdjacentHTML"].includes(d)?(E=[g[1]],["beforebegin","afterend"].includes(g[0])&&(R=this.parentNode)):["setHTML","replaceChildren"].includes(d)?(P=[...this.childNodes],E=d==="replaceChildren"?[...g]:[g[0]]):["replaceWith","remove"].includes(d)?(P=[this],E=d==="replaceWith"?[...g]:[],R=this.parentNode):["replaceChild"].includes(d)?(P=[g[1]],E=[g[0]]):["removeChild"].includes(d)?P=[...g]:(E=[...g],["before","after"].includes(d)&&(R=this.parentNode));let L=d;if(["insertAdjacentHTML","setHTML"].includes(d)){let bt=this.nodeName;if(d==="insertAdjacentHTML"&&["beforebegin","afterend"].includes(g[0])){if(!this.parentNode)return h[d].call(this,...g);bt=this.parentNode.nodeName}let K=i.createElement(bt);h.setHTML.call(K,E[0],d==="setHTML"?g[1]:{}),E=[...K.childNodes],d==="insertAdjacentHTML"?(L="insertAdjacentElement",g[1]=new l,g[1].______isTemp=!0,g[1].append(...K.childNodes)):(L="replaceChildren",g=[...K.childNodes])}return c({target:R,entrants:E,exits:P,type:"interception",event:[this,d]},()=>h[L].call(this,...g))}["insertBefore","replaceChild","removeChild","appendChild"].includes(d)?(p.other[d]=o.prototype[d],o.prototype[d]=O):(["after","before","remove","replaceWith"].includes(d)&&(p.characterData[d]=s.prototype[d],s.prototype[d]=O),f.prototype[d]&&(p.other[d]=f.prototype[d],f.prototype[d]=O))});let _=Object.create(null);return["outerHTML","outerText","innerHTML","innerText","textContent","nodeValue"].forEach(d=>{let O=["textContent","nodeValue"].includes(d)?o:["outerText","innerText"].includes(d)?a:f;_[d]=Object.getOwnPropertyDescriptor(O.prototype,d),Object.defineProperty(O.prototype,d,{..._[d],set:function(g){let h=()=>_[d].set.call(this,g);if(!(this instanceof f))return h();let x=[],P=[],E=this;if(["outerHTML","outerText"].includes(d)?(x=[this],E=this.parentNode):x=[...this.childNodes],["outerHTML","innerHTML"].includes(d)){let L=this.nodeName;if(d==="outerHTML"){if(!this.parentNode)return h();L=this.parentNode.nodeName}let D=i.createElement(L==="TEMPLATE"?"div":L);_[d].set.call(D,g),P=this instanceof u?[]:[...D.childNodes],d==="outerHTML"?(g=new l,g.______isTemp=!0,g.append(...D.childNodes),h=()=>f.prototype.replaceWith.call(this,g)):this instanceof u?h=()=>this.content.replaceChildren(...D.childNodes):h=()=>f.prototype.replaceChildren.call(this,...D.childNodes)}return c({target:E,entrants:P,exits:x,type:"interception",event:[this,d]},h)}})}),["append","prepend","replaceChildren"].forEach(d=>{[i,l.prototype].forEach(O=>{let g=O[d];O[d]=function(...h){if(this.______isTemp)return g.call(this,...h);let x=d==="replaceChildren"?[...this.childNodes]:[];return c({target:this,entrants:h,exits:x,type:"interception",event:[this,d]},()=>g.call(this,...h))}})}),m}function Dt(){fe.call(this),le.call(this),ce.call(this)}function fe(){let n=this;n.CSS||(n.CSS={}),n.CSS.escape||(n.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}function le(){let n=this;"isConnected"in n.Node.prototype||Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}function ce(){let n=this;n.Element.prototype.matches||(n.Element.prototype.matches=n.Element.prototype.matchesSelector||n.Element.prototype.mozMatchesSelector||n.Element.prototype.msMatchesSelector||n.Element.prototype.oMatchesSelector||n.Element.prototype.webkitMatchesSelector||function(t){for(var r=(this.document||this.ownerDocument).querySelectorAll(t),e=r.length;--e>=0&&r.item(e)!==this;);return e>-1})}function Ft(){let n=this;if(n.webqit||(n.webqit={}),n.webqit.realdom)return n.webqit.realdom;n.webqit.realdom={},Dt.call(n),n.webqit.realdom.meta=(...r)=>ue.call(n,...r),n.webqit.realdom.ready=(...r)=>ht.call(n,...r),n.webqit.realdom.realtime=(r,e="dom")=>{if(e==="dom")return new J(r,n);if(e==="attr")return new j(r,n)};let t=new z(n);return n.webqit.realdom.schedule=(r,...e)=>t[`on${r}`](...e),n.webqit.realdom.synthesizeWhile=(...r)=>t.synthesizeWhile(...r),n.webqit.realdom}function ht(...n){let t="interactive",r;N(n[0])?(t=n[0],b(n[1])&&(r=n[1])):b(n[0])&&(r=n[0]);let e={interactive:["interactive","complete"],complete:["complete"]};if(!e[t])throw new Error(`Invalid ready-state timing: ${t}.`);let i=this;if(!r)return i.webqit.realdom.readyStatePromises||(i.webqit.realdom.readyStatePromises={interactive:new Promise(o=>ht.call(this,"interactive",o)),complete:new Promise(o=>ht.call(this,"complete",o))}),i.webqit.realdom.readyStatePromises[t];if(e[t].includes(i.document.readyState))return r(i);i.webqit.realdom.readyStateCallbacks||(i.webqit.realdom.readyStateCallbacks={interactive:[],complete:[]},i.document.addEventListener("readystatechange",()=>{let o=i.document.readyState;for(let s of i.webqit.realdom.readyStateCallbacks[o].splice(0))s(i)},!1)),i.webqit.realdom.readyStateCallbacks[t].push(r)}function ue(n){let t=this,r={},e;return(e=t.document.querySelector(`meta[name="${n}"]`))&&(r=(e.content||"").split(";").filter(i=>i).reduce((i,o)=>{let s=o.split("=").map(f=>f.trim());return mt(i,s[0].split("."),s[1]==="true"?!0:s[1]==="false"?!1:C(s[1])?parseInt(s[1]):s[1]),i},{})),{get name(){return n},get content(){return e.content},json(){return JSON.parse(JSON.stringify(r))}}}function ot(n,t){return typeof n!="string"?n:n.replace(/\w\S*/g,function(r){return r.charAt(0).toUpperCase()+(typeof t!==void 0&&t?r.substr(1).toLowerCase():r.substr(1))})}var k=(...n)=>F("oohtml",...n),q={};function Nt(n,t,r){let e=this,i=Ft.call(e);q.window=e,e.webqitConfig||(e.webqitConfig=i.meta("webqit").json()),e.webqit||(e.webqit={}),e.webqit.oohtml||(e.webqit.oohtml={}),e.webqit.oohtml.configs||(e.webqit.oohtml.configs={});let o=n.toUpperCase().replace("-","_");if(!e.webqit.oohtml.configs[o]){e.webqit.oohtml.configs[o]={};let s=e.webqit.oohtml.configs[o];X(2,s,r,t,i.meta(n).json()),e.webqitConfig.prefix&&Object.keys(s).forEach(f=>{Object.keys(s[f]).forEach(a=>{f==="api"&&typeof s[f][a]=="string"?s[f][a]=`${e.webqitConfig.prefix}${ot(s[f][a])}`:["attr","elements"].includes(f)&&s[f][a]?.startsWith("data-")===!1&&(s[f][a]=`${e.webqitConfig.prefix}-${s[f][a]}`)})})}return{config:e.webqit.oohtml.configs[o],realdom:i,window:e}}function Rt(){let{window:n}=q,{webqit:t}=n;if(t.DOMContextRequestEvent)return t.DOMContextRequestEvent;class r extends n.Event{constructor(...i){let o=i.pop();if(typeof o!="function")throw new Error("Callback must be provided.");let s=i.pop();if(!s?.kind)throw new Error('"options.kind" must be specified.');let f=["contextrequest","contextclaim"],a=i.pop()||f[0];if(!f.includes(a))throw new Error(`Invalid event type. Must be one of: ${f.join(",")}`);let{kind:u,detail:l,targetContext:m,live:c,signal:p,diff:_,...d}=s;super(a,{...d,bubbles:d.bubbles!==!1}),Object.defineProperty(this,"callback",{get:()=>o}),Object.defineProperty(this,"kind",{get:()=>u}),Object.defineProperty(this,"targetContext",{get:()=>m}),Object.defineProperty(this,"detail",{get:()=>l}),Object.defineProperty(this,"live",{get:()=>c}),Object.defineProperty(this,"signal",{get:()=>p}),Object.defineProperty(this,"diff",{get:()=>_}),Object.defineProperty(this,"options",{get:()=>d})}respondWith(i){if(this.diff){if("_prevValue"in this&&this._prevValue===i)return;Object.defineProperty(this,"_prevValue",{value:i,configurable:!0})}return this.callback(i)}}return t.DOMContextRequestEvent=r,r}var Y=class extends AbortController{constructor(t){super(),t(r=>{let{window:{webqit:{Observer:e}}}=q;e.defineProperty(this,"value",{value:r,configurable:!0,enumerable:!0})},this)}};var Q=class extends Error{};var Z=class{static instance(t){return k(t).get("contexts::instance")||new this(t)}constructor(t){k(t).get("contexts::instance")?.dispose(),k(t).set("contexts::instance",this);let r={host:t,contexts:new Set};Object.defineProperty(this,"#",{get:()=>r})}get[Symbol.iterator](){return this["#"].contexts[Symbol.iterator]}get length(){return this["#"].contexts.size}find(...t){return[...this["#"].contexts].find(r=>typeof t[0]=="function"?t[0](r):r.constructor.kind===t[0]&&(t.length===1||r.detail===t[1]))}attach(t){if(!(t instanceof H))throw new TypeError("Context is not a valid DOMContext instance.");if(this.find(t.constructor.kind,t.detail))throw new Q(`Context of same kind "${t.constructor.kind}"${t.detail?` and detail "${t.detail}"`:""} already exists.`);this["#"].contexts.add(t),t.initialize(this["#"].host)}detach(t){t.dispose(this["#"].host),this["#"].contexts.delete(t)}request(...t){return new Y((r,e)=>{typeof t[t.length-1]!="function"&&(t[t.length-1]?t.push(r):t[t.length-1]=r);let i;(i=t.find(s=>typeof s=="object"&&s))&&i.live&&(i.signal&&i.signal.addEventListener("abort",()=>e.abort()),t[t.indexOf(i)]={...i,signal:e.signal});let o=new(Rt())(...t);this["#"].host.dispatchEvent(o)})}};var gt=class{static createRequest(){return{kind:this.kind}}constructor(t=null){Object.defineProperty(this,"detail",{get:()=>t}),Object.defineProperty(this,"subscriptions",{value:new Set})}get configs(){let{window:{webqit:{oohtml:{configs:t}}}}=q;return t}get name(){return this.host===q.window.document?1/0:this.host.getAttribute(this.configs.CONTEXT_API.attr.contextname)}subscribed(t){}handle(t){}unsubscribed(t){}matchEvent(t){return t.kind===this.constructor.kind&&(!t.targetContext||t.targetContext===this.name)}handleEvent(t){if(!(this.disposed||typeof t.respondWith!="function")){if(t.type==="contextclaim"){if(t.target===this.host||!(t.detail instanceof gt))return;let r=new Set;return this.subscriptions.forEach(e=>{!t.target.contains(e.target)||!t.detail.matchEvent(e)||(t.stopPropagation(),this.subscriptions.delete(e),r.add(e))}),t.respondWith(r)}if(t.type==="contextrequest")return this.matchEvent(t)?(t.live&&(this.subscriptions.add(t),this.subscribed(t),t.signal?.addEventListener("abort",()=>{this.subscriptions.delete(t),this.unsubscribed(t)})),t.stopPropagation(),this.handle(t)):void 0}}initialize(t){this.host=t,this.disposed=!1,t.addEventListener("contextrequest",this),t.addEventListener("contextclaim",this);let{value:r}=Z.instance(t).request("contextclaim",{kind:this.constructor.kind,detail:this});return r?.forEach(e=>{this.subscriptions.add(e),this.subscribed(e),this.handle(e)}),this}dispose(t){return this.disposed=!0,t.removeEventListener("contextrequest",this),t.removeEventListener("contextclaim",this),this.subscriptions.forEach(r=>{this.subscriptions.delete(r),this.unsubscribed(r);let{target:e}=r;e.dispatchEvent(r)}),this}},H=gt;tt(H,"kind");var M=class extends H{static createRequest(t=null){let r=super.createRequest();if(t?.startsWith("@")){let[e,...i]=i.slice(1).split(".").map(o=>o.trim());r.targetContext=e,r.detail=i.join(".")}else r.detail=t;return r}get bindingsObj(){return this.host[this.configs.BINDINGS_API.api.bindings]}matchEvent(t){return super.matchEvent(t)&&(!t.detail||!this.detail||(Array.isArray(t.detail)?t.detail[0]===this.detail:t.detail===this.detail))}handle(t){if(t._controller?.abort(),!(t.detail+"").trim())return t.respondWith(this.bindingsObj);let{window:{webqit:{Observer:r}}}=q;t._controller=r.reduce(this.bindingsObj,Array.isArray(t.detail)?t.detail:[t.detail],r.get,e=>{this.disposed||t.respondWith(e.value)},{live:t.live,signal:t.signal,descripted:!0})}unsubscribed(t){t._controller?.abort()}};tt(M,"kind","bindings");function _t(n={}){let{config:t,window:r}=Nt.call(this,"bindings-api",n,{attr:{bindingsreflection:"bindings"},api:{bind:"bind",bindings:"bindings"}});r.webqit.DOMBindingsContext=M,de.call(r,t)}function yt(n,t){let r=this,{webqit:{Observer:e,oohtml:{configs:{CONTEXT_API:i}}}}=r;if(!k(t).has("bindings")){let o=Object.create(null);k(t).set("bindings",o),e.observe(o,s=>{let f=Object.keys(o),a=t===r.document?r.document.documentElement:t,u=n.attr.bindingsreflection;f.length&&u?a.setAttribute(n.attr.bindingsreflection,f.join(" ")):u&&a.toggleAttribute(n.attr.bindingsreflection,!1);let l=t[i.api.contexts];for(let m of s)if(m.type==="delete"){let c=l.find(M.kind,m.key);c&&l.detach(c)}else l.find(M.kind,m.key)||l.attach(new M(m.key))})}return k(t).get("bindings")}function de(n){let t=this,{webqit:{Observer:r}}=t;if(n.api.bind in t.document)throw new Error(`document already has a "${n.api.bind}" property!`);if(n.api.bindings in t.document)throw new Error(`document already has a "${n.api.bindings}" property!`);if(n.api.bind in t.Element.prototype)throw new Error(`The "Element" class already has a "${n.api.bind}" property!`);if(n.api.bindings in t.Element.prototype)throw new Error(`The "Element" class already has a "${n.api.bindings}" property!`);Object.defineProperty(t.document,n.api.bind,{value:function(e,i={}){return Vt.call(t,n,t.document,e,i)}}),Object.defineProperty(t.document,n.api.bindings,{get:function(){return r.proxy(yt.call(t,n,t.document))}}),Object.defineProperty(t.Element.prototype,n.api.bind,{value:function(e,i={}){return Vt.call(t,n,this,e,i)}}),Object.defineProperty(t.Element.prototype,n.api.bindings,{get:function(){return r.proxy(yt.call(t,n,this))}})}function Vt(n,t,r,{merge:e,diff:i,namespace:o}={}){let s=this,{webqit:{Observer:f}}=s,a=yt.call(this,n,t),u={diff:i,namespace:o},l=e?[]:f.ownKeys(a,u).filter(m=>!(m in r));return f.batch(a,()=>(l.length&&f.deleteProperties(a,l,u),f.set(a,r,u)),u)}_t.call(window);})();
//# sourceMappingURL=bindings-api.js.map
