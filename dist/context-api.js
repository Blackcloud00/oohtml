(()=>{var $t=Object.defineProperty;var Wt=(n,t,r)=>t in n?$t(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r;var yt=(n,t,r)=>(Wt(n,typeof t!="symbol"?t+"":t,r),r);function x(n){return!Array.isArray(n)&&typeof n=="object"&&n}function y(n){return Array.isArray(n)}function it(n,t,r=null){return y(t)?n.filter(e=>r?t.filter(i=>r(e,i)).length:t.indexOf(e)!==-1):[]}function W(n,...t){if(globalThis.webqit||(globalThis.webqit={}),globalThis.webqit.refs||Object.defineProperty(globalThis.webqit,"refs",{value:new G}),!arguments.length)return globalThis.webqit.refs;let r=globalThis.webqit.refs.get(n);r||(r=new G,globalThis.webqit.refs.set(n,r));let e,i;for(;e=t.shift();)(i=r)&&!(r=r.get(e))&&(r=new G,i.set(e,r));return r}var G=class extends Map{constructor(...t){super(...t),this.observers=new Set}set(t,r){let e=super.set(t,r);return this.fire("set",t,r,t),e}delete(t){let r=super.delete(t);return this.fire("delete",t),r}has(t){return this.fire("has",t),super.has(t)}get(t){return this.fire("get",t),super.get(t)}keyNames(){return Array.from(super.keys())}observe(t,r,e){let i={type:t,key:r,callback:e};return this.observers.add(i),()=>this.observers.delete(i)}unobserve(t,r,e){if(Array.isArray(t)||Array.isArray(r))throw new Error('The "type" and "key" arguments can only be strings.');for(let i of this.observers)!(Z([t,"*"],i.type)&&Z([r,"*"],i.key)&&i.callback===e)||this.observers.delete(i)}fire(t,r,...e){for(let i of this.observers)!(Z([t,"*"],i.type)&&Z([r,"*"],i.key))||i.callback(...e)}},Z=(n,t)=>Array.isArray(t)?it(n,t).length:n.includes(t);function N(n){return typeof n=="function"}function B(n){return n===null||n===""}function P(n){return arguments.length&&(n===void 0||typeof n>"u")}function O(n){return Array.isArray(n)||typeof n=="object"&&n||N(n)}function ot(n){return B(n)||P(n)||n===!1||n===0||O(n)&&!Object.keys(n).length}function w(n){return N(n)||n&&{}.toString.call(n)==="[object function]"}function X(n){return n instanceof Number||typeof n=="number"}function C(n){return X(n)||n!==!0&&n!==!1&&n!==null&&n!==""&&!isNaN(n*1)}function R(n){return n instanceof String||typeof n=="string"&&n!==null}function st(n){return!R(n)&&!P(n.length)}function K(n,...t){return t.forEach(r=>{n.indexOf(r)<0&&n.push(r)}),n}function ft(e,t){t=t||Object.prototype,t=t&&!y(t)?[t]:t;for(var r=[],e=e;e&&(!t||t.indexOf(e)<0)&&e.name!=="default";)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}function lt(n,t){var r=[];return ft(n,t).forEach(e=>{K(r,...Object.getOwnPropertyNames(e))}),r}function T(n,t,r=!1,e=!1,i=!1){var o=0,s=n.shift();if((C(s)||s===!0||s===!1)&&(o=s,s=n.shift()),!n.length)throw new Error("_merge() requires two or more array/objects.");return n.forEach((f,d)=>{!O(f)&&!w(f)||(r?lt(f):Object.keys(f)).forEach(u=>{if(!!t(u,s,f,d)){var c=s[u],m=f[u];if((y(c)&&y(m)||x(c)&&x(m))&&(o===!0||o>0))s[u]=y(c)&&y(m)?[]:{},T([C(o)?o-1:o,s[u],c,m],t,r,e,i);else if(y(s)&&y(f))e?s[u]=m:s.push(m);else try{i?Object.defineProperty(s,u,Object.getOwnPropertyDescriptor(f,u)):s[u]=f[u]}catch{}}})}),s}function U(...n){return T(n,(t,r,e)=>!0,!1,!1,!1)}function A(n,t=!0){return y(n)?n:!t&&x(n)?[n]:n!==!1&&n!==0&&ot(n)?[]:st(n)?Array.prototype.slice.call(n):x(n)?Object.values(n):[n]}function z(n,t,r={},e={}){t=A(t).slice();for(var i=n;!P(i)&&!B(i)&&t.length;){var o=t.shift();if(!(r.get?r.get(i,o):O(i)?o in i:i[o])){e.exists=!1;return}i=r.get?r.get(i,o):i[o]}return e.exists=!0,i}function ut(n,t,r,e={},i={}){let o=(c,m,l)=>i.set?i.set(c,m,l):(C(t[f])&&y(c)?c.push(l):c[m]=l,!0);t=A(t);for(var s=n,f=0;f<t.length;f++)if(f<t.length-1){if(!s||!O(s)&&!w(s))return!1;var d=z(s,t[f],i);if(!O(d)){if(i.buildTree===!1)return!1;d=w(i.buildTree)?i.buildTree(f):C(t[f+1])?[]:{};var u=o(s,t[f],d);if(!u)return!1}s=d}else return o(s,t[f],r)}var J=class{constructor(t,r=!1){Object.defineProperty(this,"window",{value:t}),Object.defineProperty(this,"readCallbacks",{value:new Set}),Object.defineProperty(this,"writeCallbacks",{value:new Set}),Object.defineProperty(this,"_synthesis",{value:0,writable:!0}),!r&&this.window.requestAnimationFrame?this._loop():this._synthesis++}get synthesis(){return this._synthesis}async synthesizeWhile(t){this._synthesis++,this._fulfill();let r=await t();return this._synthesis--,r}_fulfill(){for(let t of this.readCallbacks)t(),this.readCallbacks.delete(t);for(let t of this.writeCallbacks)t(),this.writeCallbacks.delete(t)}_loop(){this.window.requestAnimationFrame(()=>{this._fulfill(),this._loop()})}onread(t,r=!1){if(r)return new Promise(e=>{this.synthesis?e(t()):this.readCallbacks.add(()=>{e(t())})});this.synthesis?Promise.resolve().then(t):this.readCallbacks.add(t)}onwrite(t,r=!1){if(r)return new Promise(e=>{this.synthesis?e(t()):this.writeCallbacks.add(()=>{e(t())})});this.synthesis?Promise.resolve().then(t):this.writeCallbacks.add(t)}cycle(t,r,e){this.onread(()=>{let i=t(e),o=s=>{s!==void 0&&this.onwrite(()=>{let f=r(s,e),d=u=>{u!==void 0&&this.cycle(t,r,u)};f instanceof Promise?f.then(d):d(f)})};i instanceof Promise?i.then(o):o(i)})}};function At(n){return(n=n.trim())&&n.startsWith("(")&&n.endsWith(")")}function et(n,t,r,e=!0){r=(Array.isArray(r)?r:[r]).map(f=>(f+"").replace("(",e?"(.//":"(./")).join("|");let i=n.document.evaluate(r,t,null,XPathResult.ANY_TYPE),o=[],s;for(;s=i.iterateNext();)o.push(s);return o}function Et(n,t,r){return r=(Array.isArray(r)?r:[r]).map(e=>(e+"").replace("(","(self::")).join("|"),n.document.evaluate(`${r}`,t,null,XPathResult.BOOLEAN_TYPE).booleanValue}function Ct(n,t="|"){return[...n].reduce(([r,e,i,o],s)=>!r&&e===0&&(Array.isArray(t)?t:[t]).includes(s)?[r,e,[""].concat(i)]:(!r&&["(","[","{"].includes(s)&&!i[0].endsWith("\\")&&e++,!r&&[")","]","}"].includes(s)&&!i[0].endsWith("\\")&&e--,['"',"'","`"].includes(s)&&!i[0].endsWith("\\")&&(r=r===s?null:r||s),i[0]+=s,[r,e,i]),[null,0,[""]])[2].reverse()}var S=class{constructor(t){this.content=t,this.type=typeof t=="string"?"selector":"instance",this.kind=this.type==="instance"?null:At(t)?"xpath":"css",this.kind==="xpath"&&(this.isXpathAttr=Ct(t.trim().slice(1,-1),"@").length>1)}toString(){return this.content}};var L=class{constructor(t,r,e){this.context=t,this.namespace=r,this.window=t.defaultView||t.ownerDocument?.defaultView||e,this.document=this.window.document,this.webqit=this.window.webqit,Object.defineProperty(this,"#",{value:{}})}resolveArgs(t){if(w(t[0])?t=[[],...t]:x(t[0])&&!(t[0]instanceof S)&&t.length===1?t=[[],void 0,t[0]]:x(t[1])&&t.length===2?t=[A(t[0],!1),void 0,t[1]]:t[0]=A(t[0],!1),t[0].filter(r=>typeof r!="string"&&!(r instanceof S)&&!(r instanceof this.window.Node)).length)throw new Error("Argument #2 must be either a string or a Node object, or a list of those.");return t[0]=t[0].map(r=>r instanceof S?r:new S(r)),t}registry(...t){return W("realdom.realtime",this.window,this.namespace,...t)}createSignalGenerator(){return{generate(){return this.lastController?.abort(),this.lastController=new AbortController,{signal:this.lastController.signal}},disconnect(){this.lastController?.abort()}}}forEachMatchingContext(t,r,e){let{window:i}=this,o=Array.isArray(r)?r:[r],s=new Set;for(let[f,d]of this.registry(t))for(let[u,c]of d){let m=o.filter(l=>u.contains(l.target)?f==="subtree"||l.target===u:!1);if(!!m.length){Array.isArray(r)||(m=m[0]);for(let l of c)s.add([l,m,u])}}for(let[f,d,u]of s)e.call(i,f,d,u)}disconnectables(t,...r){let e={disconnect(){r.forEach(i=>i&&w(i.disconnect)&&i.disconnect()||w(i)&&i()||x(i)&&(i.disconnected=!0))}};return t&&t.addEventListener("abort",()=>e.disconnect()),e}};var I=class extends L{constructor(t,...r){super(t,"attr",...r)}get(t,r=void 0,e={}){let i=typeof t=="string"||t instanceof S;[t=[],r=void 0,e={}]=this.resolveArgs(arguments);let{context:o}=this,s=Mt(o,t);if(!r)return s;let f=e.lifecycleSignals&&this.createSignalGenerator();if(i)for(let d of s){let u=f?.generate()||{};r(d,u,o)}else{let d=f?.generate()||{};r(s,d,o)}if(e.live){f&&(e={...e,signalGenerator:f});let d=this.observe(i?t[0]:t,r,{newValue:!0,...e});return this.disconnectables(e.signal,d)}}observe(t,r,e={}){let i=typeof t=="string"||t instanceof S;if([t=[],r,e={}]=this.resolveArgs(arguments),["sync","intercept"].includes(e.timing))return this.observeSync(i?t[0]:t,r,e);if(e.timing&&e.timing!=="async")throw new Error(`Timing option "${e.timing}" invalid.`);let{context:o,window:s,webqit:f}=this;e.eventDetails&&!f.realdom.attrInterceptionHooks?.intercepting&&qt.call(s,"intercept",()=>{});let d=new s.MutationObserver(l=>{l=Pt(l).map(p=>It.call(s,p)),Tt.call(s,m,l,o)}),u={attributes:!0,attributeOldValue:e.oldValue,subtree:e.subtree};t.length&&(u.attributeFilter=t.map(l=>l+"")),d.observe(o,u);let c=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),m={context:o,spec:t,callback:r,params:e,atomics:new Map,originalFilterIsString:i,signalGenerator:c,disconnectable:d};return this.disconnectables(e.signal,d,c)}observeSync(t,r,e={}){let i=typeof t=="string"||t instanceof S;[t,r,e={}]=this.resolveArgs(arguments);let{context:o,window:s}=this;if(e.timing&&!["sync","intercept"].includes(e.timing))throw new Error(`Timing option "${e.timing}" invalid.`);let f=e.timing==="intercept"?"intercept":"sync",d=e.subtree?"subtree":"children";this.registry(f).size||qt.call(s,f,_=>{this.forEachMatchingContext(f,_,Tt)});let u={disconnect(){p.delete(m),p.size||l.delete(o)}},c=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),m={context:o,spec:t,callback:r,params:e,atomics:new Map,originalFilterIsString:i,signalGenerator:c,disconnectable:u},l=this.registry(f,d);l.has(o)||l.set(o,new Set);let p=l.get(o);return p.add(m),this.disconnectables(e.signal,u,c)}};function Pt(n){return n.reduce((t,r,e)=>t[e-1]?.attributeName===r.attributeName?t:t.concat(r),[])}function Tt(n,t){let{context:r,spec:e,callback:i,params:o,atomics:s,originalFilterIsString:f,signalGenerator:d}=n,u=e.map(l=>l+"");if(o.atomic&&!s.size?t=Mt(r,e,t):o.timing!=="async"&&e.length&&(t=t.filter(l=>u.includes(l.name))),!t.length)return;o.newValue===null&&o.oldValue===null&&o.eventDetails||(t=t.map(l=>{let p;return o.eventDetails||({event:p,...l}=l),!o.oldValue&&"oldValue"in l&&({oldValue:p,...l}=l),!o.newValue&&"value"in l?{value:p,...l}=l:o.newValue&&typeof l.value>"u"&&(l={...l,value:l.target.getAttribute(l.name)}),l})),o.atomic&&(t.forEach(l=>s.set(l.name,l)),t=Array.from(s.entries()).map(([,l])=>l));let c=f?t[0]:t,m=d?.generate()||{};i(c,m,r)}function Mt(n,t,r=[]){let e={event:null,type:"attribute"};return t.length?t.map(o=>(o=o+"",r.find(s=>s.name===o)||{target:n,name:o,value:n.getAttribute(o),...e})):Array.from(n.attributes).map(o=>r.find(s=>s.name===o.nodeName)||{target:n,name:o.nodeName,value:o.nodeValue,...e})}function It({target:n,attributeName:t,value:r,oldValue:e}){let s=(this.webqit.realdom.attrInterceptionRecords?.get(n)||{})[t]?.[0]||"mutation";return{target:n,name:t,value:r,oldValue:e,type:"observation",event:s}}function qt(n,t){let r=this,{webqit:e,document:i,Element:o}=r;e.realdom.attrInterceptionHooks||Object.defineProperty(e.realdom,"attrInterceptionHooks",{value:new Map}),e.realdom.attrInterceptionHooks.has(n)||e.realdom.attrInterceptionHooks.set(n,new Set),e.realdom.attrInterceptionHooks.get(n).add(t);let s=()=>e.realdom.attrInterceptionHooks.get(n).delete(t);if(e.realdom.attrInterceptionHooks?.intercepting)return s;console.warn("Attr mutation APIs are now being intercepted."),e.realdom.attrInterceptionHooks.intercepting=!0,Object.defineProperty(e.realdom,"attrInterceptionRecords",{value:new Map});let f=(c,m)=>{e.realdom.attrInterceptionRecords.has(c.target)||e.realdom.attrInterceptionRecords.set(c.target,{});let l=e.realdom.attrInterceptionRecords.get(c.target);l[c.name]=l[c.name]||[],l[c.name].unshift(c.event),e.realdom.attrInterceptionHooks.get("intercept")?.forEach(_=>_([c]));let p=m();return e.realdom.attrInterceptionHooks.get("sync")?.forEach(_=>_([c])),p};new r.MutationObserver(c=>{c=c.filter(m=>!(r.webqit.realdom.attrInterceptionRecords?.get(m.target)||{})[m.attributeName]?.shift()),c=Pt(c).map(m=>It.call(r,m)),c.length&&(e.realdom.attrInterceptionHooks.get("intercept")?.forEach(m=>m(c)),e.realdom.attrInterceptionHooks.get("sync")?.forEach(m=>m(c)))}).observe(i,{attributes:!0,subtree:!0,attributeOldValue:!0});let u=Object.create(null);return["setAttribute","removeAttribute","toggleAttribute"].forEach(c=>{u[c]=o.prototype[c],o.prototype[c]=function(...m){let l,p=this.getAttribute(m[0]);["setAttribute","toggleAttribute"].includes(c)&&(l=m[1]),c==="toggleAttribute"&&l===void 0&&(l=p===null);let _={target:this,name:m[0],value:l,oldValue:p,type:"interception",event:[this,c]};return f(_,()=>u[c].call(this,...m))}}),s}var Y=class extends L{constructor(t,...r){super(t,"tree",...r)}attr(t,r=void 0,e={}){let{context:i,window:o}=this;return new I(i,o).get(...arguments)}query(t,r=void 0,e={}){[t,r=void 0,e={}]=this.resolveArgs(arguments);let{context:i}=this,o=new Map,s=u=>(o.has(u)||o.set(u,{target:u,entrants:[],exits:[],type:"query",event:null}),o.get(u));if(!e.generation||e.generation==="entrants"){if(!t.length)[...i.children].forEach(u=>s(i).entrants.push(u));else if(t.every(u=>u.type==="selector")){let[u,c]=t.reduce(([l,p],_)=>_.kind==="xpath"?[l,p.concat(_)]:[l.concat(_),p],[[],[]]),m=[];e.subtree?(u.length&&m.push(...i.querySelectorAll(u.join(","))),c.length&&m.push(...et(this.window,i,c))):(u.length&&m.push(...[...i.children].filter(l=>l.matches(u))),c.length&&m.push(...et(this.window,i,c,!1))),m.forEach(l=>s(l.parentNode||i).entrants.push(l))}}if(!r)return o;let f={disconnected:!1},d=r&&e.lifecycleSignals&&this.createSignalGenerator();for(let[,u]of o){if(f.disconnected)break;let c=d?.generate()||{};r(u,c,i)}if(e.live){d&&(e={...e,signalGenerator:d});let u=this.observe(t,r,e);return this.disconnectables(e.signal,f,u)}return this.disconnectables(e.signal,f,d)}children(t,r=void 0,e={}){return[t,r=void 0,e={}]=this.resolveArgs(arguments),this.query(t,r,{...e,subtree:!1})}subtree(t,r=void 0,e={}){return[t,r=void 0,e={}]=this.resolveArgs(arguments),this.query(t,r,{...e,subtree:!0})}observe(t,r,e={}){if([t,r,e={}]=this.resolveArgs(arguments),["sync","intercept"].includes(e.timing))return this.observeSync(t,r,e);if(e.timing&&e.timing!=="async")throw new Error(`Timing option "${e.timing}" invalid.`);let{context:i,window:o,webqit:s,document:f}=this;e.eventDetails&&(s.realdom.domInterceptionRecordsAlwaysOn=!0),(f.readyState==="loading"||s.realdom.domInterceptionRecordsAlwaysOn)&&!s.realdom.domInterceptionHooks?.intercepting&&Dt.call(o,"sync",()=>{});let d=new o.MutationObserver(m=>m.forEach(l=>{mt.call(o,c,Ht.call(o,l),i)}));d.observe(i,{childList:!0,subtree:e.subtree});let u=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),c={context:i,spec:t,callback:r,params:e,signalGenerator:u,disconnectable:d};if(e.staticSensitivity){let m=kt.call(o,c);return this.disconnectables(e.signal,d,u,m)}return this.disconnectables(e.signal,d,u)}observeSync(t,r,e={}){[t,r,e={}]=this.resolveArgs(arguments);let{context:i,window:o}=this;if(e.timing&&!["sync","intercept"].includes(e.timing))throw new Error(`Timing option "${e.timing}" invalid.`);let s=e.timing==="intercept"?"intercept":"sync",f=e.subtree?"subtree":"children";this.registry(s).size||Dt.call(o,s,_=>{this.forEachMatchingContext(s,_,mt)});let d=new o.MutationObserver(_=>_.forEach(a=>{Array.isArray((a=Ht.call(o,a)).event)||mt.call(o,m,a,i)}));d.observe(i,{childList:!0,subtree:e.subtree});let u={disconnect(){d.disconnect(),p.delete(m),p.size||l.delete(i)}},c=e.signalGenerator||e.lifecycleSignals&&this.createSignalGenerator(),m={context:i,spec:t,callback:r,params:e,signalGenerator:c,disconnectable:u},l=this.registry(s,f);l.has(i)||l.set(i,new Set);let p=l.get(i);if(p.add(m),e.staticSensitivity){let _=kt.call(o,m);return this.disconnectables(e.signal,u,c,_)}return this.disconnectables(e.signal,u,c)}};function kt(n){let t=this,{context:r,spec:e,callback:i,params:o,signalGenerator:s}=n,f=e.filter(p=>p.kind==="css"),d=p=>p.match(/\.([\w-]+)/g)?.length?["class"]:[],u=p=>p.match(/#([\w-]+)/g)?.length?["id"]:[],c=p=>[...p.matchAll(/\[([^\=\]]+)(\=[^\]]+)?\]/g)].map(_=>_[1]).concat(d(p)).concat(u(p));if(!(n.$attrs=Array.from(new Set(f.filter(p=>(p+"").includes("[")).reduce((p,_)=>p.concat(c(_+"")),[])))).length)return;let m=new Set,l=new Set;return m.push=p=>(l.delete(p),m.add(p)),l.push=p=>(m.delete(p),l.add(p)),n.$deliveryCache={entrants:m,exits:l},new I(r,t).observe(n.$attrs,p=>{let _=new Map,a=h=>(_.has(h)||_.set(h,{target:h,entrants:[],exits:[],type:"static",event:null}),_.get(h)),v=new WeakMap,g=h=>(v.has(h)||v.set(h,f.some(b=>h.matches(b+""))),v.get(h));for(let h of p)["entrants","exits"].forEach(b=>{o.generation&&b!==o.generation||n.$deliveryCache[b].has(h.target)||(b==="entrants"?!g(h.target):g(h.target))||(n.$deliveryCache[b].push(h.target),a(h.target)[b].push(h.target),a(h.target).event=h.event)});for(let[,h]of _){let b=s?.generate()||{};i(h,b,r)}},{subtree:o.subtree,timing:o.timing,eventDetails:o.eventDetails})}function mt(n,t){let{context:r,spec:e,callback:i,params:o,signalGenerator:s,$deliveryCache:f}=n,d={...t,entrants:[],exits:[]};if(o.eventDetails||delete d.event,["entrants","exits"].forEach(c=>{if(!(o.generation&&c!==o.generation)&&(e.length?d[c]=ee.call(this,e,t[c],t.event!=="parse"):d[c]=[...t[c]],!!f))for(let m of d[c])f[c].push(m)}),!d.entrants.length&&!d.exits.length)return;let u=s?.generate()||{};i(d,u,r)}function ee(n,t,r){t=Array.isArray(t)?t:[...t];let e=(i,o)=>{if(o.type==="selector"){let s=o.isXpathAttr?[]:i.filter(f=>o.kind==="xpath"?Et(this,f,o+""):f.matches&&f.matches(o+""));if((r||o.isXpathAttr)&&(s=i.reduce((f,d)=>o.kind==="xpath"?[...f,...et(this,d,o,r)]:d.querySelectorAll?[...f,...d.querySelectorAll(o+"")]:f,s)),s.length)return s}else if(i.includes(o.content)||r&&i.some(s=>s.contains(o.content)))return[o.content]};return t.$$searchCache||(t.$$searchCache=new Map),n.reduce((i,o)=>{let s;return t.$$searchCache.has(o.content)?s=t.$$searchCache.get(o.content):(s=e(t,o)||[],o.type==="instance"&&t.$$searchCache.set(o.content,s)),i.concat(s)},[])}function Ht({target:n,addedNodes:t,removedNodes:r}){let e=this,i;return i=A(t).reduce((o,s)=>o||e.webqit.realdom.domInterceptionRecords?.get(s),null),i=A(r).reduce((o,s)=>o||e.webqit.realdom.domInterceptionRecords?.get(s),i),i=i||e.document.readyState==="loading"&&"parse"||"mutation",{target:n,entrants:t,exits:r,type:"observation",event:i}}function Dt(n,t){let r=this,{webqit:e,document:i,Node:o,CharacterData:s,Element:f,HTMLElement:d,HTMLTemplateElement:u,DocumentFragment:c}=r;e.realdom.domInterceptionHooks||Object.defineProperty(e.realdom,"domInterceptionHooks",{value:new Map}),e.realdom.domInterceptionHooks.has(n)||e.realdom.domInterceptionHooks.set(n,new Set),e.realdom.domInterceptionHooks.get(n).add(t);let m=()=>e.realdom.domInterceptionHooks.get(n).delete(t);if(e.realdom.domInterceptionHooks?.intercepting)return m;console.warn("DOM mutation APIs are now being intercepted."),e.realdom.domInterceptionHooks.intercepting=!0,Object.defineProperty(e.realdom,"domInterceptionRecords",{value:new Map});let l=(a,v)=>{a.entrants.concat(a.exits).forEach(h=>{clearTimeout(e.realdom.domInterceptionRecords.get(h)?.timeout),e.realdom.domInterceptionRecords.set(h,a.event);let b=setTimeout(()=>{e.realdom.domInterceptionRecords.delete(h)},0);Object.defineProperty(a.event,"timeout",{value:b,configurable:!0})}),e.realdom.domInterceptionHooks.get("intercept")?.forEach(h=>h(a));let g=v();return e.realdom.domInterceptionHooks.get("sync")?.forEach(h=>h(a)),g},p={characterData:Object.create(null),other:Object.create(null)};["insertBefore","insertAdjacentElement","insertAdjacentHTML","setHTML","replaceChildren","replaceWith","remove","replaceChild","removeChild","before","after","append","prepend","appendChild"].forEach(a=>{function v(...g){let h=this instanceof s?p.characterData:p.other,b=()=>h[a].call(this,...g);if(!(this instanceof s||this instanceof f||this instanceof c))return b();let q=[],E=[],V=this;["insertBefore"].includes(a)?E=[g[0]]:["insertAdjacentElement","insertAdjacentHTML"].includes(a)?(E=[g[1]],["beforebegin","afterend"].includes(g[0])&&(V=this.parentNode)):["setHTML","replaceChildren"].includes(a)?(q=[...this.childNodes],E=a==="replaceChildren"?[...g]:[g[0]]):["replaceWith","remove"].includes(a)?(q=[this],E=a==="replaceWith"?[...g]:[],V=this.parentNode):["replaceChild"].includes(a)?(q=[g[1]],E=[g[0]]):["removeChild"].includes(a)?q=[...g]:(E=[...g],["before","after"].includes(a)&&(V=this.parentNode));let D=a;if(["insertAdjacentHTML","setHTML"].includes(a)){let gt=this.nodeName;if(a==="insertAdjacentHTML"&&["beforebegin","afterend"].includes(g[0])){if(!this.parentNode)return h[a].call(this,...g);gt=this.parentNode.nodeName}let Q=i.createElement(gt);h.setHTML.call(Q,E[0],a==="setHTML"?g[1]:{}),E=[...Q.childNodes],a==="insertAdjacentHTML"?(D="insertAdjacentElement",g[1]=new c,g[1].______isTemp=!0,g[1].append(...Q.childNodes)):(D="replaceChildren",g=[...Q.childNodes])}return l({target:V,entrants:E,exits:q,type:"interception",event:[this,a]},()=>h[D].call(this,...g))}["insertBefore","replaceChild","removeChild","appendChild"].includes(a)?(p.other[a]=o.prototype[a],o.prototype[a]=v):(["after","before","remove","replaceWith"].includes(a)&&(p.characterData[a]=s.prototype[a],s.prototype[a]=v),f.prototype[a]&&(p.other[a]=f.prototype[a],f.prototype[a]=v))});let _=Object.create(null);return["outerHTML","outerText","innerHTML","innerText","textContent","nodeValue"].forEach(a=>{let v=["textContent","nodeValue"].includes(a)?o:["outerText","innerText"].includes(a)?d:f;_[a]=Object.getOwnPropertyDescriptor(v.prototype,a),Object.defineProperty(v.prototype,a,{..._[a],set:function(g){let h=()=>_[a].set.call(this,g);if(!(this instanceof f))return h();let b=[],q=[],E=this;if(["outerHTML","outerText"].includes(a)?(b=[this],E=this.parentNode):b=[...this.childNodes],["outerHTML","innerHTML"].includes(a)){let D=this.nodeName;if(a==="outerHTML"){if(!this.parentNode)return h();D=this.parentNode.nodeName}let $=i.createElement(D==="TEMPLATE"?"div":D);_[a].set.call($,g),q=this instanceof u?[]:[...$.childNodes],a==="outerHTML"?(g=new c,g.______isTemp=!0,g.append(...$.childNodes),h=()=>f.prototype.replaceWith.call(this,g)):this instanceof u?h=()=>this.content.replaceChildren(...$.childNodes):h=()=>f.prototype.replaceChildren.call(this,...$.childNodes)}return l({target:E,entrants:q,exits:b,type:"interception",event:[this,a]},h)}})}),["append","prepend","replaceChildren"].forEach(a=>{[i,c.prototype].forEach(v=>{let g=v[a];v[a]=function(...h){if(this.______isTemp)return g.call(this,...h);let b=a==="replaceChildren"?[...this.childNodes]:[];return l({target:this,entrants:h,exits:b,type:"interception",event:[this,a]},()=>g.call(this,...h))}})}),m}function Lt(){re.call(this),ne.call(this),ie.call(this)}function re(){let n=this;n.CSS||(n.CSS={}),n.CSS.escape||(n.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}function ne(){let n=this;"isConnected"in n.Node.prototype||Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}function ie(){let n=this;n.Element.prototype.matches||(n.Element.prototype.matches=n.Element.prototype.matchesSelector||n.Element.prototype.mozMatchesSelector||n.Element.prototype.msMatchesSelector||n.Element.prototype.oMatchesSelector||n.Element.prototype.webkitMatchesSelector||function(t){for(var r=(this.document||this.ownerDocument).querySelectorAll(t),e=r.length;--e>=0&&r.item(e)!==this;);return e>-1})}function jt(){let n=this;if(n.webqit||(n.webqit={}),n.webqit.realdom)return n.webqit.realdom;n.webqit.realdom={},Lt.call(n),n.webqit.realdom.meta=(...r)=>oe.call(n,...r),n.webqit.realdom.ready=(...r)=>dt.call(n,...r),n.webqit.realdom.realtime=(r,e="dom")=>{if(e==="dom")return new Y(r,n);if(e==="attr")return new I(r,n)};let t=new J(n);return n.webqit.realdom.schedule=(r,...e)=>t[`on${r}`](...e),n.webqit.realdom.synthesizeWhile=(...r)=>t.synthesizeWhile(...r),n.webqit.realdom}function dt(...n){let t="interactive",r;R(n[0])?(t=n[0],w(n[1])&&(r=n[1])):w(n[0])&&(r=n[0]);let e={interactive:["interactive","complete"],complete:["complete"]};if(!e[t])throw new Error(`Invalid ready-state timing: ${t}.`);let i=this;if(!r)return i.webqit.realdom.readyStatePromises||(i.webqit.realdom.readyStatePromises={interactive:new Promise(o=>dt.call(this,"interactive",o)),complete:new Promise(o=>dt.call(this,"complete",o))}),i.webqit.realdom.readyStatePromises[t];if(e[t].includes(i.document.readyState))return r(i);i.webqit.realdom.readyStateCallbacks||(i.webqit.realdom.readyStateCallbacks={interactive:[],complete:[]},i.document.addEventListener("readystatechange",()=>{let o=i.document.readyState;for(let s of i.webqit.realdom.readyStateCallbacks[o].splice(0))s(i)},!1)),i.webqit.realdom.readyStateCallbacks[t].push(r)}function oe(n){let t=this,r={},e;return(e=t.document.querySelector(`meta[name="${n}"]`))&&(r=(e.content||"").split(";").filter(i=>i).reduce((i,o)=>{let s=o.split("=").map(f=>f.trim());return ut(i,s[0].split("."),s[1]==="true"?!0:s[1]==="false"?!1:C(s[1])?parseInt(s[1]):s[1]),i},{})),{get name(){return n},get content(){return e.content},json(){return JSON.parse(JSON.stringify(r))}}}var rt=(...n)=>W("oohtml",...n),k={};function Ft(n,t,r){let e=this,i=jt.call(e);e.webqit||(e.webqit={}),e.webqit.oohtml||(e.webqit.oohtml={}),e.webqit.oohtml.configs||(e.webqit.oohtml.configs={});let o=n.toUpperCase().replace("-","_");return e.webqit.oohtml.configs[o]||(e.webqit.oohtml.configs[o]={}),k.window=e,U(2,e.webqit.oohtml.configs[o],r,t,i.meta(n).json()),{config:e.webqit.oohtml.configs[o],realdom:i,window:e}}function nt(){let{window:n}=k,{webqit:t}=n;if(t.DOMContextRequestEvent)return t.DOMContextRequestEvent;class r extends n.Event{constructor(...i){let o=i.pop();if(typeof o!="function")throw new Error("Callback must be provided.");let s=i.pop();if(!s?.kind)throw new Error('"options.kind" must be specified.');let f=["contextrequest","contextclaim"],d=i.pop()||f[0];if(!f.includes(d))throw new Error(`Invalid event type. Must be one of: ${f.join(",")}`);let{kind:u,detail:c,targetContext:m,live:l,signal:p,diff:_,...a}=s;super(d,{...a,bubbles:a.bubbles!==!1}),Object.defineProperty(this,"callback",{get:()=>o}),Object.defineProperty(this,"kind",{get:()=>u}),Object.defineProperty(this,"targetContext",{get:()=>m}),Object.defineProperty(this,"detail",{get:()=>c}),Object.defineProperty(this,"live",{get:()=>l}),Object.defineProperty(this,"signal",{get:()=>p}),Object.defineProperty(this,"diff",{get:()=>_}),Object.defineProperty(this,"options",{get:()=>a})}respondWith(i){if(this.diff){if("_prevValue"in this&&this._prevValue===i)return;Object.defineProperty(this,"_prevValue",{value:i,configurable:!0})}return this.callback(i)}}return t.DOMContextRequestEvent=r,r}var j=class extends AbortController{constructor(t){super(),t(r=>{let{window:{webqit:{Observer:e}}}=k;e.defineProperty(this,"value",{value:r,configurable:!0,enumerable:!0})},this)}};var pt=class{static createRequest(){return{kind:this.kind}}constructor(t=null){Object.defineProperty(this,"detail",{get:()=>t}),Object.defineProperty(this,"subscriptions",{value:new Set})}get configs(){let{window:{webqit:{oohtml:{configs:t}}}}=k;return t}get name(){return this.host===k.window.document?1/0:this.host.getAttribute(this.configs.CONTEXT_API.attr.contextname)}subscribed(t){}handle(t){}unsubscribed(t){}matchEvent(t){return t.kind===this.constructor.kind&&(!t.targetContext||t.targetContext===this.name)}handleEvent(t){if(!(this.disposed||typeof t.respondWith!="function")){if(t.type==="contextclaim"){if(t.target===this.host||!(t.detail instanceof pt))return;let r=new Set;return this.subscriptions.forEach(e=>{!t.target.contains(e.target)||!t.detail.matchEvent(e)||(t.stopPropagation(),this.subscriptions.delete(e),r.add(e))}),t.respondWith(r)}if(t.type==="contextrequest")return this.matchEvent(t)?(t.live&&(this.subscriptions.add(t),this.subscribed(t),t.signal?.addEventListener("abort",()=>{this.subscriptions.delete(t),this.unsubscribed(t)})),t.stopPropagation(),this.handle(t)):void 0}}initialize(t){this.host=t,this.disposed=!1,t.addEventListener("contextrequest",this),t.addEventListener("contextclaim",this);let{value:r}=M.instance(t).request("contextclaim",{kind:this.constructor.kind,detail:this});return r?.forEach(e=>{this.subscriptions.add(e),this.subscribed(e),this.handle(e)}),this}dispose(t){return this.disposed=!0,t.removeEventListener("contextrequest",this),t.removeEventListener("contextclaim",this),this.subscriptions.forEach(r=>{this.subscriptions.delete(r),this.unsubscribed(r);let{target:e}=r;e.dispatchEvent(r)}),this}},H=pt;yt(H,"kind");var F=class extends Error{};var M=class{static instance(t){return rt(t).get("contexts::instance")||new this(t)}constructor(t){rt(t).get("contexts::instance")?.dispose(),rt(t).set("contexts::instance",this);let r={host:t,contexts:new Set};Object.defineProperty(this,"#",{get:()=>r})}get[Symbol.iterator](){return this["#"].contexts[Symbol.iterator]}get length(){return this["#"].contexts.size}find(...t){return[...this["#"].contexts].find(r=>typeof t[0]=="function"?t[0](r):r.constructor.kind===t[0]&&(t.length===1||r.detail===t[1]))}attach(t){if(!(t instanceof H))throw new TypeError("Context is not a valid DOMContext instance.");if(this.find(t.constructor.kind,t.detail))throw new F(`Context of same kind "${t.constructor.kind}"${t.detail?` and detail "${t.detail}"`:""} already exists.`);this["#"].contexts.add(t),t.initialize(this["#"].host)}detach(t){t.dispose(this["#"].host),this["#"].contexts.delete(t)}request(...t){return new j((r,e)=>{typeof t[t.length-1]!="function"&&(t[t.length-1]?t.push(r):t[t.length-1]=r);let i;(i=t.find(s=>typeof s=="object"&&s))&&i.live&&(i.signal&&i.signal.addEventListener("abort",()=>e.abort()),t[t.indexOf(i)]={...i,signal:e.signal});let o=new(nt())(...t);this["#"].host.dispatchEvent(o)})}};function ht(n={}){let{config:t,window:r}=Ft.call(this,"context-api",n,{attr:{contextname:"contextname"},api:{contexts:"contexts"}});r.webqit.DOMContexts=M,r.webqit.DOMContext=H,r.webqit.DOMContextRequestEvent=nt(),r.webqit.DOMContextResponse=j,r.webqit.DuplicateContextError=F,se.call(r,t)}function se(n){let t=this;if(n.api.contexts in t.document)throw new Error(`document already has a "${n.api.contexts}" property!`);if(n.api.contexts in t.HTMLElement.prototype)throw new Error(`The "HTMLElement" class already has a "${n.api.contexts}" property!`);Object.defineProperty(t.document,n.api.contexts,{get:function(){return M.instance(t.document)}}),Object.defineProperty(t.HTMLElement.prototype,n.api.contexts,{get:function(){return M.instance(this)}});let r=new Set;t.addEventListener("contextrequest",e=>{typeof e.respondWith=="function"&&(r.add(e),e.respondWith())}),t.addEventListener("contextclaim",e=>{if(typeof e.detail!="object"||typeof e.detail.matchEvent!="function"||typeof e.respondWith!="function")return;let i=new Set;r.forEach(o=>{!e.target.contains(o.target)||!e.detail.matchEvent(o)||(r.delete(o),i.add(o))}),e.respondWith(i)})}ht.call(window);})();
//# sourceMappingURL=context-api.js.map
