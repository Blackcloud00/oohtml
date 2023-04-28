(()=>{var Et=Object.defineProperty;var et=(t,e)=>{for(var n in e)Et(t,n,{get:e[n],enumerable:!0})};var Ve={};et(Ve,{apply:()=>$e,batch:()=>Wt,construct:()=>Re,deep:()=>Vt,defineProperties:()=>Jt,defineProperty:()=>Le,deleteProperty:()=>De,get:()=>W,getOwnPropertyDescriptor:()=>Fe,getOwnPropertyDescriptors:()=>Ut,getPrototypeOf:()=>Ne,has:()=>we,intercept:()=>Gt,isExtensible:()=>He,observe:()=>zt,ownKeys:()=>xe,preventExtensions:()=>Be,set:()=>Z,setPrototypeOf:()=>ke});function E(t){return!Array.isArray(t)&&typeof t=="object"&&t}function Y(t){return typeof t}function C(t){return Array.isArray(t)}function Ee(t,e,n=null){return C(e)?t.filter(r=>n?e.filter(o=>n(r,o)).length:e.indexOf(r)!==-1):[]}function ge(t,...e){if(globalThis.webqit||(globalThis.webqit={}),globalThis.webqit.refs||Object.defineProperty(globalThis.webqit,"refs",{value:new re}),!arguments.length)return globalThis.webqit.refs;let n=globalThis.webqit.refs.get(t);n||(n=new re,globalThis.webqit.refs.set(t,n));let r,o;for(;r=e.shift();)(o=n)&&!(n=n.get(r))&&(n=new re,o.set(r,n));return n}var re=class extends Map{constructor(...e){super(...e),this.observers=new Set}set(e,n){let r=super.set(e,n);return this.fire("set",e,n,e),r}delete(e){let n=super.delete(e);return this.fire("delete",e),n}has(e){return this.fire("has",e),super.has(e)}get(e){return this.fire("get",e),super.get(e)}keyNames(){return Array.from(super.keys())}observe(e,n,r){let o={type:e,key:n,callback:r};return this.observers.add(o),()=>this.observers.delete(o)}unobserve(e,n,r){if(Array.isArray(e)||Array.isArray(n))throw new Error('The "type" and "key" arguments can only be strings.');for(let o of this.observers)!(he([e,"*"],o.type)&&he([n,"*"],o.key)&&o.callback===r)||this.observers.delete(o)}fire(e,n,...r){for(let o of this.observers)!(he([e,"*"],o.type)&&he([n,"*"],o.key))||o.callback(...r)}},he=(t,e)=>Array.isArray(e)?Ee(t,e).length:t.includes(e);function V(t){return typeof t=="function"}function Te(t){return V(t)&&/^class\s?/.test(Function.prototype.toString.call(t))}function Pe(t){return t===null||t===""}function z(t){return arguments.length&&(t===void 0||typeof t>"u")}function I(t){return Array.isArray(t)||typeof t=="object"&&t||V(t)}function Se(t){return Pe(t)||z(t)||t===!1||t===0||I(t)&&!Object.keys(t).length}function j(t){return V(t)||t&&{}.toString.call(t)==="[object function]"}function ye(t){return t instanceof String||typeof t=="string"&&t!==null}function Ce(t){return!ye(t)&&!z(t.length)}function R(t,e=!0){return C(t)?t:!e&&E(t)?[t]:t!==!1&&t!==0&&Se(t)?[]:Ce(t)?Array.prototype.slice.call(t):E(t)?Object.values(t):[t]}var G=class{constructor(e,n){this.registry=e,Object.assign(this,{...n,target:e.target}),this.params.signal&&this.params.signal.addEventListener("abort",()=>this.remove())}remove(){return this.removed=!0,this.registry.removeRegistration(this)}};var ne=class extends G{constructor(){super(...arguments),Object.defineProperty(this,"abortController",{value:new AbortController}),Object.defineProperty(this,"signal",{value:this.abortController.signal})}remove(){this.abortController.abort(),super.remove()}fire(e){let n=e,r=this.filter;if(r!==1/0&&(r=R(r))&&(n=e.filter(o=>r.includes(o.key))),this.params.diff&&(n=n.filter(o=>o.type!=="set"||o.value!==o.oldValue)),n.length)return this.filter===1/0||Array.isArray(this.filter)?this.handler(n,this):this.handler(n[0],this)}};var O=(...t)=>ge("observer-api",...t);var U=class{constructor(e){this.target=e,this.entries=[]}addRegistration(e){return this.entries.push(e),e}removeRegistration(e){this.entries=this.entries.filter(n=>n!==e)}static _getInstance(e,n,r=!0,o=this.__namespace){if(!I(n))throw new Error(`Subject must be of type object; "${Y(n)}" given!`);let i=this;return o&&O("namespaces").has(e+"-"+o)&&(i=O("namespaces").get(e+"-"+o),e+="-"+o),!O(n,"registry").has(e)&&r&&O(n,"registry").set(e,new i(n)),O(n,"registry").get(e)}static _namespace(e,n,r=null){if(e+="-"+n,arguments.length===2)return O("namespaces").get(e);if(!(r.prototype instanceof this))throw new Error(`The implementation of the namespace ${this.name}.${n} must be a subclass of ${this.name}.`);O("namespaces").set(e,r),r.__namespace=n}};var $=class extends U{static getInstance(e,n=!0,r=null){return super._getInstance("listeners",...arguments)}static namespace(e,n=null){return super._namespace("listeners",...arguments)}constructor(e){super(e),this.batches=[]}addRegistration(e,n,r){return super.addRegistration(new ne(this,{filter:e,handler:n,params:r}))}emit(e){if(this.batches.length){this.batches[0].events.push(...e);return}this.entries.forEach(n=>n.fire(e))}batch(e){this.batches.unshift({entries:[...this.entries],events:[]});let n=e(),r=this.batches.shift();return r.events.length&&r.entries.forEach(o=>o.fire(r.events)),n}};var oe=class extends G{exec(e,n,r){return this.running||!this.traps[e.type]?n(...Array.prototype.slice.call(arguments,2)):(this.running=!0,this.traps[e.type](e,r,(...o)=>(this.running=!1,n(...o))))}};var H=class extends U{static getInstance(e,n=!0,r=null){return super._getInstance("traps",...arguments)}static namespace(e,n=null){return super._namespace("traps",...arguments)}addRegistration(e){return super.addRegistration(new oe(this,e))}emit(e,n=null){let r=this;return function o(i,...s){let c=r.entries[i];return c?c.exec(e,(...f)=>o(i+1,...f),...s):n?n(e,...s):s[0]}(0)}};var M=class{constructor(e,n){if(this.target=e,!n.type)throw new Error("Descriptor type must be given in definition!");Object.assign(this,n)}};var Me={};et(Me,{accessorize:()=>$t,proxy:()=>Bt,unaccessorize:()=>kt,unproxy:()=>_e});function $t(t,e,n={}){t=je(t);let r=O(t,"accessorizedProps");function o(f){let l,u=t;for(;!l&&(u=Object.getPrototypeOf(u));)l=Object.getOwnPropertyDescriptor(u,f);return l?{proto:u,descriptor:l}:{descriptor:{value:void 0}}}function i(f){if(r.has(f))return!0;let l=o(f);l.getValue=function(){return"get"in this.descriptor?this.descriptor.get():this.descriptor.value},l.setValue=function(g){return"set"in this.descriptor?this.descriptor.set(g):this.descriptor.value=g},l.intact=function(){let g=Object.getOwnPropertyDescriptor(t,f);return g.get===h.get&&g.set===h.set&&r.get(f)===this},l.restore=function(){return this.intact()?(this.proto!==t?delete t[f]:Object.defineProperty(t,f,this.descriptor),r.delete(f),!0):!1},r.set(f,l);let{enumerable:u=!0,configurable:a=!0}=l.descriptor,h={enumerable:u,configurable:a};["value","set"].some(g=>g in l.descriptor)&&(h.set=function(g){return Z(this,f,g,n)}),["value","get"].some(g=>g in l.descriptor)&&(h.get=function(){return W(this,f,n)});try{return Object.defineProperty(t,f,h),!0}catch{return r.delete(f),!1}}let c=(Array.isArray(e)?e:e===void 0?Object.keys(t):[e]).map(i);return e===void 0||Array.isArray(e)?c:c[0]}function kt(t,e,n={}){t=je(t);let r=O(t,"accessorizedProps");function o(c){return r.has(c)?r.get(c).restore():!0}let s=(Array.isArray(e)?e:e===void 0?Object.keys(t):[e]).map(o);return e===void 0||Array.isArray(e)?s:s[0]}function Bt(t,e={}){t=je(t);let n=new Proxy(t,{apply:(r,o,i)=>$e(r,o,i,e),construct:(r,o,i=null)=>Re(r,o,i,e),defineProperty:(r,o,i)=>Le(r,o,i,e),deleteProperty:(r,o)=>De(r,o,e),get:(r,o,i=null)=>{let s=W(r,o,{...e,receiver:i});return e.proxyAutoBinding!==!1&&j(s)&&!Te(s)?s.bind(n):s},getOwnPropertyDescriptor:(r,o)=>Fe(r,o,e),getPrototypeOf:r=>Ne(r,e),has:(r,o)=>we(r,o,e),isExtensible:r=>He(r,e),ownKeys:r=>xe(r,e),preventExtensions:r=>Be(r,e),set:(r,o,i,s=null)=>Z(r,o,i,{...e,receiver:s}),setPrototypeOf:(r,o)=>ke(r,o,e)});return O(n).set(n,t),n}function _e(t){return O(t).get(t)||t}function je(t){if(!t||!I(t))throw new Error("Target must be of type object!");return _e(t)}function Vt(t,e,n,r=i=>i,o={}){return function i(s,c,f){let l=c[f.level];return f.level<c.length-1?f={...f,preflight:!0}:f={...f,preflight:o.preflight},n(s,l,(u,...a)=>{let h=(d={})=>({...f,...d,level:f.level+1}),g=d=>{d instanceof M&&(d.path=[d.key],s instanceof M&&(d.path=s.path.concat(d.key),d.context=s))};if(be(l)&&Array.isArray(u))return u.forEach(g),f.level===c.length-1||!u.length&&f.midwayResults?r(u,...a):u.map(d=>i(d,c,h(...a)));g(u);let m=I(J(u,!1));return f.level===c.length-1||!m&&f.midwayResults?r(u,...a):m&&i(u,c,h(...a))},f)}(t,e.slice(0),{...o,level:0})}function zt(t,e,n,r={}){if(t=J(t),j(arguments[1])&&([,n,r={}]=arguments,e=1/0),!j(n))throw new Error(`Handler must be a function; "${Y(n)}" given!`);let o=st(t,e,n,r);return r.preflight?(r={...r,descripted:!0},delete r.live,W(t,e,o,r)):o()}function Gt(t,e,n={}){return t=J(t),E(e)||([,,,n={}]=arguments,e={[arguments[1]]:arguments[2]}),H.getInstance(t,!0,n.namespace).addRegistration({traps:e,params:n})}function Fe(t,e,n=o=>o,r={}){return F(t,"getOwnPropertyDescriptor",{key:e},n,r)}function Ut(t,e,n=o=>o,r={}){return F(t,"getOwnPropertyDescriptors",{key:e},n,r)}function Ne(t,e=r=>r,n={}){return F(t,"getPrototypeOf",{},e,n)}function He(t,e=r=>r,n={}){return F(t,"isExtensible",{},e,n)}function xe(t,e=r=>r,n={}){return F(t,"ownKeys",{},e,n)}function we(t,e,n=o=>o,r={}){return F(t,"has",{key:e},n,r)}function W(t,e,n=o=>o,r={}){let o;return t=J(t),E(n)?[r,n]=[n,i=>i]:r.live&&(o=!0),Qt(t,e,i=>{let s=[...i];return function c(f,l,u){if(!l.length)return u(f);let a=l.shift();function h(d,p=void 0){let y=A=>(d.value=A,c(f.concat(r.live||r.descripted?d:A),l,u));if(arguments.length>1)return y(p);let x=O(t,"accessorizedProps",!1),b=x&&x.get(d.key);return b&&b.intact()?y(b.getValue()):y(Reflect.get(t,d.key,...r.receiver?[r.receiver]:[]))}let g=new M(t,{type:"get",key:a,value:void 0,related:s}),m=H.getInstance(t,!1,r.namespace);return m?m.emit(g,h):h(g)}([],i.slice(0),c=>{let f=be(e)?c:c[0];return o?st(t,e,n,r)(f):n(f)})})}function Wt(t,e,n={}){return $.getInstance(t,!0,n.namespace).batch(e)}function Z(t,e,n,r=s=>s,o={},i=!1){t=J(t);let s=[[e,n]];E(e)&&([,,r=f=>f,o={},i=!1]=arguments,s=Object.entries(e)),E(r)&&([i,o,r]=[typeof o=="boolean"?o:!1,r,f=>f]);let c=s.map(([f])=>f);return function f(l,u,a){if(!u.length)return a(l);let[h,g]=u.shift();function m(p,y=void 0){let x=X=>(p.status=X,f(l.concat(p),u,a));if(arguments.length>1)return x(p,y);let b=O(t,"accessorizedProps",!1),A=b&&b.get(p.key);return p.type==="defineProperty"?(A&&!A.restore()&&x(!1),Object.defineProperty(t,p.key,p.value),x(!0)):A&&A.intact()?x(A.setValue(p.value)):x(Reflect.set(t,p.key,p.value))}function d(p,y){if(o.diff&&g===y)return f(l,u,a);let x=new M(t,{type:i?"defineProperty":"set",key:h,value:g,isUpdate:p,oldValue:y,related:[...c],detail:o.detail}),b=H.getInstance(t,!1,o.namespace);return b?b.emit(x,m):m(x)}return we(t,h,p=>p?W(t,h,y=>d(p,y),o):d(p),o)}([],s.slice(0),f=>{let l=$.getInstance(t,!1,o.namespace);return l&&l.emit(f),r(be(e)?f.map(u=>u.status):f[0]?.status)})}function Le(t,e,n,r=i=>i,o={}){return Z(t,e,n,r,o,!0)}function Jt(t,e,n=o=>o,r={}){return Z(t,e,n,r,!0)}function De(t,e,n=o=>o,r={}){t=J(t),E(n)&&([r,n]=[n,s=>s]);let o=R(e),i=[...o];return function s(c,f,l){if(!f.length)return l(c);let u=f.shift();function a(g,m=void 0){let d=x=>(g.status=x,s(c.concat(g),f,l));if(arguments.length>1)return d(g,m);let p=O(t,"accessorizedProps",!1),y=p&&p.get(g.key);return y&&!y.restore()&&d(!1),d(Reflect.deleteProperty(t,g.key))}function h(g){let m=new M(t,{type:"deleteProperty",key:u,oldValue:g,related:[...i],detail:r.detail}),d=H.getInstance(t,!1,r.namespace);return d?d.emit(m,a):a(m)}return W(t,u,h,r)}([],o.slice(0),s=>{let c=$.getInstance(t,!1,r.namespace);return c&&c.emit(s),n(be(e)?s.map(f=>f.status):s[0].status)})}function Re(t,e,n=null,r=i=>i,o={}){return F(t,"construct",arguments.length>2?{argumentsList:e,newTarget:n}:{argumentsList:e},r,o)}function $e(t,e,n,r=i=>i,o={}){return F(t,"apply",{thisArgument:e,argumentsList:n},r,o)}function ke(t,e,n=o=>o,r={}){return F(t,"setPrototypeOf",{proto:e},n,r)}function Be(t,e=r=>r,n={}){return F(t,"preventExtensions",{},e,n)}function st(t,e,n,r={}){let o;r.signal||(o=new AbortController,r={...r,signal:o.signal});let i=$.getInstance(t,!0,r.namespace);return function s(c,f=null){f?.remove();let u={signal:i.addRegistration(e,s,r).signal};return arguments.length&&n(c,u),o}}function F(t,e,n={},r=i=>i,o={}){t=J(t),E(r)&&([o,r]=[r,f=>f]);function i(f,l){return arguments.length>1?r(l):r(Reflect[e](t,...Object.values(n)))}let s=new M(t,{type:e,...n}),c=H.getInstance(t,!1,o.namespace);return c?c.emit(s,i):i(s)}function be(t){return t===1/0||Array.isArray(t)}function J(t,e=!0){if((!t||!I(t))&&e)throw new Error(`Object must be of type object or array! "${Y(t)}" given.`);return t instanceof M&&(t=t.value),t&&_e(t)}function Qt(t,e,n){return e===1/0?xe(t,n):n(R(e))}var Xt={...Ve,...Me},T=Xt;function v(t){return!Array.isArray(t)&&typeof t=="object"&&t}function _(t){return Array.isArray(t)}function ze(t,e,n=null){return _(e)?t.filter(r=>n?e.filter(o=>n(r,o)).length:e.indexOf(r)!==-1):[]}function K(t,...e){if(globalThis.webqit||(globalThis.webqit={}),globalThis.webqit.refs||Object.defineProperty(globalThis.webqit,"refs",{value:new ie}),!arguments.length)return globalThis.webqit.refs;let n=globalThis.webqit.refs.get(t);n||(n=new ie,globalThis.webqit.refs.set(t,n));let r,o;for(;r=e.shift();)(o=n)&&!(n=n.get(r))&&(n=new ie,o.set(r,n));return n}var ie=class extends Map{constructor(...e){super(...e),this.observers=new Set}set(e,n){let r=super.set(e,n);return this.fire("set",e,n,e),r}delete(e){let n=super.delete(e);return this.fire("delete",e),n}has(e){return this.fire("has",e),super.has(e)}get(e){return this.fire("get",e),super.get(e)}keyNames(){return Array.from(super.keys())}observe(e,n,r){let o={type:e,key:n,callback:r};return this.observers.add(o),()=>this.observers.delete(o)}unobserve(e,n,r){if(Array.isArray(e)||Array.isArray(n))throw new Error('The "type" and "key" arguments can only be strings.');for(let o of this.observers)!(ve([e,"*"],o.type)&&ve([n,"*"],o.key)&&o.callback===r)||this.observers.delete(o)}fire(e,n,...r){for(let o of this.observers)!(ve([e,"*"],o.type)&&ve([n,"*"],o.key))||o.callback(...r)}},ve=(t,e)=>Array.isArray(e)?ze(t,e).length:t.includes(e);function ee(t){return typeof t=="function"}function se(t){return t===null||t===""}function L(t){return arguments.length&&(t===void 0||typeof t>"u")}function P(t){return Array.isArray(t)||typeof t=="object"&&t||ee(t)}function Ge(t){return se(t)||L(t)||t===!1||t===0||P(t)&&!Object.keys(t).length}function w(t){return ee(t)||t&&{}.toString.call(t)==="[object function]"}function fe(t){return t instanceof Number||typeof t=="number"}function q(t){return fe(t)||t!==!0&&t!==!1&&t!==null&&t!==""&&!isNaN(t*1)}function te(t){return t instanceof String||typeof t=="string"&&t!==null}function Ue(t){return!te(t)&&!L(t.length)}function Oe(t,...e){return e.forEach(n=>{t.indexOf(n)<0&&t.push(n)}),t}function We(r,e){e=e||Object.prototype,e=e&&!_(e)?[e]:e;for(var n=[],r=r;r&&(!e||e.indexOf(r)<0)&&r.name!=="default";)n.push(r),r=r?Object.getPrototypeOf(r):null;return n}function Je(t,e){var n=[];return We(t,e).forEach(r=>{Oe(n,...Object.getOwnPropertyNames(r))}),n}function N(t,e,n=!1,r=!1,o=!1){var i=0,s=t.shift();if((q(s)||s===!0||s===!1)&&(i=s,s=t.shift()),!t.length)throw new Error("_merge() requires two or more array/objects.");return t.forEach((c,f)=>{!P(c)&&!w(c)||(n?Je(c):Object.keys(c)).forEach(l=>{if(!!e(l,s,c,f)){var u=s[l],a=c[l];if((_(u)&&_(a)||v(u)&&v(a))&&(i===!0||i>0))s[l]=_(u)&&_(a)?[]:{},N([q(i)?i-1:i,s[l],u,a],e,n,r,o);else if(_(s)&&_(c))r?s[l]=a:s.push(a);else try{o?Object.defineProperty(s,l,Object.getOwnPropertyDescriptor(c,l)):s[l]=c[l]}catch{}}})}),s}function ue(...t){return N(t,(e,n,r)=>!0,!1,!1,!1)}function S(t,e=!0){return _(t)?t:!e&&v(t)?[t]:t!==!1&&t!==0&&Ge(t)?[]:Ue(t)?Array.prototype.slice.call(t):v(t)?Object.values(t):[t]}function le(t,e,n={},r={}){e=S(e).slice();for(var o=t;!L(o)&&!se(o)&&e.length;){var i=e.shift();if(!(n.get?n.get(o,i):P(o)?i in o:o[i])){r.exists=!1;return}o=n.get?n.get(o,i):o[i]}return r.exists=!0,o}function Xe(t,e,n,r={},o={}){let i=(u,a,h)=>o.set?o.set(u,a,h):(q(e[c])&&_(u)?u.push(h):u[a]=h,!0);e=S(e);for(var s=t,c=0;c<e.length;c++)if(c<e.length-1){if(!s||!P(s)&&!w(s))return!1;var f=le(s,e[c],o);if(!P(f)){if(o.buildTree===!1)return!1;f=w(o.buildTree)?o.buildTree(c):q(e[c+1])?[]:{};var l=i(s,e[c],f);if(!l)return!1}s=f}else return i(s,e[c],n)}var ce=class{constructor(e,n=!0){Object.defineProperty(this,"window",{value:e}),Object.defineProperty(this,"readCallbacks",{value:new Set}),Object.defineProperty(this,"writeCallbacks",{value:new Set}),this.async=n,this.window.requestAnimationFrame?this._run():this.async=!1}_run(){this.window.requestAnimationFrame(()=>{for(let e of this.readCallbacks)e(),this.readCallbacks.delete(e);for(let e of this.writeCallbacks)e(),this.writeCallbacks.delete(e);this._run()})}onread(e,n=!1){if(n)return new Promise(r=>{this.async===!1?r(e()):this.readCallbacks.add(()=>{r(e())})});this.async===!1?e():this.readCallbacks.add(e)}onwrite(e,n=!1){if(n)return new Promise(r=>{this.async===!1?r(e()):this.writeCallbacks.add(()=>{r(e())})});this.async===!1?e():this.writeCallbacks.add(e)}cycle(e,n,r){this.onread(()=>{let o=e(r),i=s=>{s!==void 0&&this.onwrite(()=>{let c=n(s,r),f=l=>{l!==void 0&&this.cycle(e,n,l)};c instanceof Promise?c.then(f):f(c)})};o instanceof Promise?o.then(i):i(o)})}};var Q=class{constructor(e,n,r){this.context=e,this.namespace=n,this.window=e.defaultView||e.ownerDocument?.defaultView||r,this.document=this.window.document,this.webqit=this.window.webqit,Object.defineProperty(this,"#",{value:{}})}resolveArgs(e){return w(e[0])?e=[[],...e]:v(e[0])&&e.length===1?e=[[],void 0,e[0]]:v(e[1])&&e.length===2?e=[S(e[0],!1),void 0,e[1]]:e[0]=S(e[0],!1),e}registry(...e){return K("realdom.realtime",this.window,this.namespace,...e)}createSignalGenerator(){return{generate(){return this.lastController?.abort(),this.lastController=new AbortController,{signal:this.lastController.signal}},disconnect(){this.lastController?.abort()}}}forEachMatchingContext(e,n,r){let{window:o}=this,i=Array.isArray(n)?n:[n],s=new Set;for(let[c,f]of this.registry(e))for(let[l,u]of f){let a=i.filter(h=>l.contains(h.target)?c==="subtree"||h.target===l:!1);if(!!a.length){Array.isArray(n)||(a=a[0]);for(let h of u)s.add([h,a,l])}}for(let[c,f,l]of s)r.call(this,c,f,l)}disconnectables(e,...n){let r={disconnect(){n.forEach(o=>o&&w(o.disconnect)&&o.disconnect()||w(o)&&o()||v(o)&&(o.disconnected=!0))}};return e&&e.addEventListener("abort",()=>r.disconnect()),r}};var k=class extends Q{constructor(e,...n){super(e,"attr",...n)}get(e,n=void 0,r={}){let o=typeof e=="string";[e=[],n=void 0,r={}]=this.resolveArgs(arguments);let{context:i}=this,s=gt(i,e),c=o?s[0]:s;if(!n)return c;let f=n&&r.lifecycleSignals&&this.createSignalGenerator(),l=f?.generate()||{};if(n(c,l,i),r.live){f&&(r={...r,signalGenerator:f});let u=this.observe(o?e[0]:e,n,{newValue:!0,...r});return this.disconnectables(r.signal,u)}}observe(e,n,r={}){let o=typeof e=="string";if([e=[],n,r={}]=this.resolveArgs(arguments),["sync","intercept"].includes(r.timing))return this.observeSync(o?e[0]:e,n,r);if(r.timing&&r.timing!=="async")throw new Error(`Timing option "${r.timing}" invalid.`);let{context:i,window:s,webqit:c}=this;r.eventDetails&&!c.realdom.attrInterceptionHooks?.intercepting&&dt.call(s,"intercept",()=>{});let f=new s.MutationObserver(h=>{h=ht(h).map(g=>yt.call(s,g)),pt.call(s,a,h,i)}),l={attributes:!0,attributeOldValue:r.oldValue,subtree:r.subtree};e.length&&(l.attributeFilter=e),f.observe(i,l);let u=r.signalGenerator||r.lifecycleSignals&&this.createSignalGenerator(),a={context:i,filter:e,callback:n,params:r,atomics:new Map,originalFilterIsString:o,signalGenerator:u,disconnectable:f};return this.disconnectables(r.signal,f,u)}observeSync(e,n,r={}){let o=typeof e=="string";[e,n,r={}]=this.resolveArgs(arguments);let{context:i,window:s}=this;if(r.timing&&!["sync","intercept"].includes(r.timing))throw new Error(`Timing option "${r.timing}" invalid.`);let c=r.timing==="intercept"?"intercept":"sync",f=r.subtree?"subtree":"children";this.registry(c).size||dt.call(s,c,m=>{this.forEachMatchingContext(c,m,pt)});let l={disconnect(){g.delete(a),g.size||h.delete(i)}},u=r.signalGenerator||r.lifecycleSignals&&this.createSignalGenerator(),a={context:i,filter:e,callback:n,params:r,atomics:new Map,originalFilterIsString:o,signalGenerator:u,disconnectable:l},h=this.registry(c,f);h.has(i)||h.set(i,new Set);let g=h.get(i);return g.add(a),this.disconnectables(r.signal,l,u)}};function ht(t){return t.reduce((e,n,r)=>e[r-1]?.attributeName===n.attributeName?e:e.concat(n),[])}function pt(t,e){let{context:n,filter:r,callback:o,params:i,atomics:s,originalFilterIsString:c,signalGenerator:f}=t;i.atomic&&!s.size&&(e=gt(n,r,e)),i.newValue===null&&i.oldValue===null&&i.eventDetails||(e=e.map(a=>{let h;return i.eventDetails||({event:h,...a}=a),!i.oldValue&&"oldValue"in a&&({oldValue:h,...a}=a),!i.newValue&&"value"in a?{value:h,...a}=a:i.newValue&&typeof a.value>"u"&&(a={...a,value:a.target.getAttribute(a.name)}),a})),i.atomic&&(e.forEach(a=>s.set(a.name,a)),e=Array.from(s.entries()).map(([,a])=>a));let l=c?e[0]:e,u=f?.generate()||{};o(l,u,n)}function gt(t,e,n=[]){let r={event:null,type:"attribute"};return e.length?e.map(i=>n.find(s=>s.name===i)||{target:t,name:i,value:t.getAttribute(i),...r}):Array.from(t.attributes).map(i=>n.find(s=>s.name===i.nodeName)||{target:t,name:i.nodeName,value:i.nodeValue,...r})}function yt({target:t,attributeName:e,value:n,oldValue:r}){let s=(this.webqit.realdom.attrInterceptionRecords?.get(t)||{})[e]||"mutation";return{target:t,name:e,value:n,oldValue:r,type:"observation",event:s}}function dt(t,e){let n=this,{webqit:r,document:o,Element:i}=n;r.realdom.attrInterceptionHooks||Object.defineProperty(r.realdom,"attrInterceptionHooks",{value:new Map}),r.realdom.attrInterceptionHooks.has(t)||r.realdom.attrInterceptionHooks.set(t,new Set),r.realdom.attrInterceptionHooks.get(t).add(e);let s=()=>r.realdom.attrInterceptionHooks.get(t).delete(e);if(r.realdom.attrInterceptionHooks?.intercepting)return s;console.warn("Attr mutation APIs are now being intercepted."),r.realdom.attrInterceptionHooks.intercepting=!0,Object.defineProperty(r.realdom,"attrInterceptionRecords",{value:new Map});let c=(u,a)=>{r.realdom.attrInterceptionRecords.has(u.target)||r.realdom.attrInterceptionRecords.set(u.target,{});let h=r.realdom.attrInterceptionRecords.get(u.target);clearTimeout(h[u.name]?.timeout),h[u.name]=u.event;let g=setTimeout(()=>{delete h[u.name]},0);Object.defineProperty(u.event,"timeout",{value:g,configurable:!0}),r.realdom.attrInterceptionHooks.get("intercept")?.forEach(d=>d([u]));let m=a();return r.realdom.attrInterceptionHooks.get("sync")?.forEach(d=>d([u])),m};new n.MutationObserver(u=>{u=ht(u).map(a=>yt.call(n,a)).filter((a,h)=>!Array.isArray(a.event)),u.length&&(r.realdom.attrInterceptionHooks.get("intercept")?.forEach(a=>a(u)),r.realdom.attrInterceptionHooks.get("sync")?.forEach(a=>a(u)))}).observe(o,{attributes:!0,subtree:!0,attributeOldValue:!0});let l=Object.create(null);return["setAttribute","removeAttribute","toggleAttribute"].forEach(u=>{l[u]=i.prototype[u],i.prototype[u]=function(...a){let h,g=this.getAttribute(a[0]);["setAttribute","toggleAttribute"].includes(u)&&(h=a[1]),u==="toggleAttribute"&&h===void 0&&(h=g===null);let m={target:this,name:a[0],value:h,oldValue:g,type:"interception",event:[this,u]};return c(m,()=>l[u].call(this,...a))}}),s}var ae=class extends Q{constructor(e,...n){super(e,"tree",...n)}attr(e,n=void 0,r={}){let{context:o,window:i}=this;return new k(o,i).get(...arguments)}query(e,n=void 0,r={}){[e,n=void 0,r={}]=this.resolveArgs(arguments);let{context:o}=this,i=new Map,s=l=>(i.has(l)||i.set(l,{target:l,entrants:[],exits:[],type:"query",event:null}),i.get(l));if((!r.generation||r.generation==="entrants")&&(e.length?e.every(l=>typeof l=="string")&&(e=e.join(","))&&(r.subtree?o.querySelectorAll(e):[...o.children].filter(u=>u.matches(e))).forEach(u=>s(u.parentNode||o).entrants.push(u)):[...o.children].forEach(l=>s(o).entrants.push(l))),!n)return i;let c={disconnected:!1},f=n&&r.lifecycleSignals&&this.createSignalGenerator();for(let[,l]of i){if(c.disconnected)break;let u=f?.generate()||{};n(l,u,o)}if(r.live){f&&(r={...r,signalGenerator:f});let l=this.observe(e,n,r);return this.disconnectables(r.signal,c,l)}return this.disconnectables(r.signal,c,f)}children(e,n=void 0,r={}){return[e,n=void 0,r={}]=this.resolveArgs(arguments),this.query(e,n,{...r,subtree:!1})}subtree(e,n=void 0,r={}){return[e,n=void 0,r={}]=this.resolveArgs(arguments),this.query(e,n,{...r,subtree:!0})}observe(e,n,r={}){if([e,n,r={}]=this.resolveArgs(arguments),["sync","intercept"].includes(r.timing))return this.observeSync(e,n,r);if(r.timing&&r.timing!=="async")throw new Error(`Timing option "${r.timing}" invalid.`);let{context:o,window:i,webqit:s,document:c}=this;r.eventDetails&&(s.realdom.domInterceptionRecordsAlwaysOn=!0),(c.readyState==="loading"||s.realdom.domInterceptionRecordsAlwaysOn)&&!s.realdom.domInterceptionHooks?.intercepting&&wt.call(i,"sync",()=>{});let f=new i.MutationObserver(a=>a.forEach(h=>{xt.call(i,u,bt.call(i,h),o)}));f.observe(o,{childList:!0,subtree:r.subtree});let l=r.signalGenerator||r.lifecycleSignals&&this.createSignalGenerator(),u={context:o,selectors:e,callback:n,params:r,signalGenerator:l,disconnectable:f};if(r.staticSensitivity){let a=_t.call(i,u);return this.disconnectables(r.signal,f,l,a)}return this.disconnectables(r.signal,f,l)}observeSync(e,n,r={}){[e,n,r={}]=this.resolveArgs(arguments);let{context:o,window:i}=this;if(r.timing&&!["sync","intercept"].includes(r.timing))throw new Error(`Timing option "${r.timing}" invalid.`);let s=r.timing==="intercept"?"intercept":"sync",c=r.subtree?"subtree":"children";this.registry(s).size||wt.call(i,s,g=>{this.forEachMatchingContext(s,g,xt)});let f={disconnect(){h.delete(u),h.size||a.delete(o)}},l=r.signalGenerator||r.lifecycleSignals&&this.createSignalGenerator(),u={context:o,selectors:e,callback:n,params:r,signalGenerator:l,disconnectable:f},a=this.registry(s,c);a.has(o)||a.set(o,new Set);let h=a.get(o);if(h.add(u),r.staticSensitivity){let g=_t.call(i,u);return this.disconnectables(r.signal,f,l,g)}return this.disconnectables(r.signal,f,l)}};function _t(t){let e=this,{context:n,selectors:r,callback:o,params:i,signalGenerator:s}=t,c=u=>[...u.matchAll(/\[([^\=\]]+)(\=[^\]]+)?\]/g)].map(a=>a[1]);if(!(t.$attrs=r.filter(u=>typeof u=="string"&&u.includes("[")).reduce((u,a)=>u.concat(c(a)),[])).length)return;let f=new Set,l=new Set;return f.push=u=>(l.delete(u),f.add(u)),l.push=u=>(f.delete(u),l.add(u)),t.$deliveryCache={entrants:f,exits:l},new k(n,e).observe(t.$attrs,u=>{let a=new Map,h=d=>(a.has(d)||a.set(d,{target:d,entrants:[],exits:[],type:"static",event:null}),a.get(d)),g=new WeakMap,m=d=>(g.has(d)||g.set(d,r.some(p=>d.matches(p))),g.get(d));for(let d of u)["entrants","exits"].forEach(p=>{i.generation&&p!==i.generation||t.$deliveryCache[p].has(d.target)||(p==="entrants"?!m(d.target):m(d.target))||(t.$deliveryCache[p].push(d.target),h(d.target)[p].push(d.target),h(d.target).event=d.event)});for(let[,d]of a){let p=s?.generate()||{};o(d,p,n)}},{subtree:i.subtree,timing:i.timing,eventDetails:i.eventDetails})}function xt(t,e){let{context:n,selectors:r,callback:o,params:i,signalGenerator:s,$deliveryCache:c}=t,f={...e,entrants:[],exits:[]};if(i.eventDetails||delete f.event,["entrants","exits"].forEach(u=>{if(!(i.generation&&u!==i.generation)&&(r.length?f[u]=ar(r,e[u],e.event!=="parse"):f[u]=[...e[u]],!!c))for(let a of f[u])c[u].push(a)}),!f.entrants.length&&!f.exits.length)return;let l=s?.generate()||{};o(f,l,n)}function ar(t,e,n){e=Array.isArray(e)?e:[...e];let r=(o,i)=>{if(o=o.filter(s=>s.matches),typeof i=="string"){let s=o.filter(c=>c.matches(i));if(n&&(s=o.reduce((c,f)=>[...c,...f.querySelectorAll(i)],s)),s.length)return s}else if(o.includes(i)||n&&o.some(s=>s.contains(i)))return[i]};return e.$$searchCache||(e.$$searchCache=new Map),t.reduce((o,i)=>{let s;return e.$$searchCache.has(i)?s=e.$$searchCache.get(i):(s=r(e,i)||[],v(i)&&e.$$searchCache.set(i,s)),o.concat(s)},[])}function bt({target:t,addedNodes:e,removedNodes:n}){let r=this,o;return o=S(e).reduce((i,s)=>i||r.webqit.realdom.domInterceptionRecords?.get(s),null),o=S(n).reduce((i,s)=>i||r.webqit.realdom.domInterceptionRecords?.get(s),o),o=o||r.document.readyState==="loading"&&"parse"||"mutation",{target:t,entrants:e,exits:n,type:"observation",event:o}}function wt(t,e){let n=this,{webqit:r,document:o,Node:i,Element:s,HTMLElement:c,HTMLTemplateElement:f,DocumentFragment:l}=n;r.realdom.domInterceptionHooks||Object.defineProperty(r.realdom,"domInterceptionHooks",{value:new Map}),r.realdom.domInterceptionHooks.has(t)||r.realdom.domInterceptionHooks.set(t,new Set),r.realdom.domInterceptionHooks.get(t).add(e);let u=()=>r.realdom.domInterceptionHooks.get(t).delete(e);if(r.realdom.domInterceptionHooks?.intercepting)return u;console.warn("DOM mutation APIs are now being intercepted."),r.realdom.domInterceptionHooks.intercepting=!0,Object.defineProperty(r.realdom,"domInterceptionRecords",{value:new Map});let a=()=>!0,h=(m,d)=>{a()?m.entrants.concat(m.exits).forEach(y=>{clearTimeout(r.realdom.domInterceptionRecords.get(y)?.timeout),r.realdom.domInterceptionRecords.set(y,m.event);let x=setTimeout(()=>{r.realdom.domInterceptionRecords.delete(y)},0);Object.defineProperty(m.event,"timeout",{value:x,configurable:!0})}):r.realdom.domInterceptionRecords.clear(),r.realdom.domInterceptionHooks.get("intercept")?.forEach(y=>y(m));let p=d();return r.realdom.domInterceptionHooks.get("sync")?.forEach(y=>y(m)),p};if(a()){let m=new n.MutationObserver(d=>d.forEach(p=>{Array.isArray((p=bt.call(n,p)).event)||(r.realdom.domInterceptionHooks.get("intercept")?.forEach(y=>y(p)),r.realdom.domInterceptionHooks.get("sync")?.forEach(y=>y(p)))}));m.observe(o,{childList:!0,subtree:!0}),o.addEventListener("readystatechange",()=>!a()&&m.disconnect())}let g=Object.create(null);return["insertBefore","insertAdjacentElement","insertAdjacentHTML","setHTML","replaceChildren","replaceWith","remove","replaceChild","removeChild","before","after","append","prepend","appendChild"].forEach(m=>{let d=["insertBefore","replaceChild","removeChild","appendChild"].includes(m)?i:s;g[m]=d.prototype[m],g[m]&&(d.prototype[m]=function(...p){let y=()=>g[m].call(this,...p);if(!(this instanceof s||this instanceof l))return y();let x=[],b=[],A=this;["insertBefore"].includes(m)?b=[p[0]]:["insertAdjacentElement","insertAdjacentHTML"].includes(m)?(b=[p[1]],["beforebegin","afterend"].includes(p[0])&&(A=this.parentNode)):["setHTML","replaceChildren"].includes(m)?(x=[...this.childNodes],b=m==="replaceChildren"?[...p]:[p[0]]):["replaceWith","remove"].includes(m)?(x=[this],b=m==="replaceWith"?[...p]:[],A=this.parentNode):["replaceChild"].includes(m)?(x=[p[1]],b=[p[0]]):["removeChild"].includes(m)?x=[...p]:(b=[...p],["before","after"].includes(m)&&(A=this.parentNode));let X=m;if(["insertAdjacentHTML","setHTML"].includes(m)){let D=this.nodeName;if(m==="insertAdjacentHTML"&&["beforebegin","afterend"].includes(p[0])){if(!this.parentNode)return g[m].call(this,...p);D=this.parentNode.nodeName}let de=o.createElement(D);g.setHTML.call(de,b[0],m==="setHTML"?p[1]:{}),b=[...de.childNodes],m==="insertAdjacentHTML"?(X="insertAdjacentElement",p[1]=new l,p[1].______isTemp=!0,p[1].append(...de.childNodes)):(X="replaceChildren",p=[...de.childNodes])}return h({target:A,entrants:b,exits:x,type:"interception",event:[this,m]},()=>g[X].call(this,...p))})}),["outerHTML","outerText","innerHTML","innerText","textContent","nodeValue"].forEach(m=>{let d=["textContent","nodeValue"].includes(m)?i:["outerText","innerText"].includes(m)?c:s;g[m]=Object.getOwnPropertyDescriptor(d.prototype,m),Object.defineProperty(d.prototype,m,{...g[m],set:function(p){let y=()=>g[m].set.call(this,p);if(!(this instanceof s))return y();let x=[],b=[],A=this;if(["outerHTML","outerText"].includes(m)?(x=[this],A=this.parentNode):x=[...this.childNodes],["outerHTML","innerHTML"].includes(m)){let pe=this.nodeName;if(m==="outerHTML"){if(!this.parentNode)return y();pe=this.parentNode.nodeName}let D=o.createElement(pe==="TEMPLATE"?"div":pe);g[m].set.call(D,p),b=this instanceof f?[]:[...D.childNodes],m==="outerHTML"?(p=new l,p.______isTemp=!0,p.append(...D.childNodes),y=()=>g.replaceWith.call(this,p)):this instanceof f?y=()=>this.content.replaceChildren(...D.childNodes):y=()=>g.replaceChildren.call(this,...D.childNodes)}return h({target:A,entrants:b,exits:x,type:"interception",event:[this,m]},y)}})}),["append","prepend","replaceChildren"].forEach(m=>{[o,l.prototype].forEach(d=>{let p=d[m];d[m]=function(...y){if(this.______isTemp)return p.call(this,...y);let x=m==="replaceChildren"?[...this.childNodes]:[];return h({target:this,entrants:y,exits:x,type:"interception",event:[this,m]},()=>p.call(this,...y))}})}),u}function vt(){mr.call(this),pr.call(this),dr.call(this)}function mr(){let t=this;t.CSS||(t.CSS={}),t.CSS.escape||(t.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}function pr(){let t=this;"isConnected"in t.Node.prototype||Object.defineProperty(t.Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}function dr(){let t=this;t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(e){for(var n=(this.document||this.ownerDocument).querySelectorAll(e),r=n.length;--r>=0&&n.item(r)!==this;);return r>-1})}function Ot(){let t=this;if(t.webqit||(t.webqit={}),t.webqit.realdom)return t.webqit.realdom;t.webqit.realdom={},vt.call(t),t.webqit.realdom.meta=(...n)=>hr.call(t,...n),t.webqit.realdom.ready=(...n)=>Ze.call(t,...n),t.webqit.realdom.realtime=(n,r="dom")=>{if(r==="dom")return new ae(n,t);if(r==="attr")return new k(n,t)};let e=new ce(t);return t.webqit.realdom.schedule=(n,...r)=>e[`on${n}`](...r),t.webqit.realdom}function Ze(...t){let e="interactive",n;te(t[0])?(e=t[0],w(t[1])&&(n=t[1])):w(t[0])&&(n=t[0]);let r={interactive:["interactive","complete"],complete:["complete"]};if(!r[e])throw new Error(`Invalid ready-state timing: ${e}.`);let o=this;if(!n)return o.webqit.realdom.readyStatePromises||(o.webqit.realdom.readyStatePromises={interactive:new Promise(i=>Ze.call(this,"interactive",i)),complete:new Promise(i=>Ze.call(this,"complete",i))}),o.webqit.realdom.readyStatePromises[e];if(r[e].includes(o.document.readyState))return n(o);o.webqit.realdom.readyStateCallbacks||(o.webqit.realdom.readyStateCallbacks={interactive:[],complete:[]},o.document.addEventListener("readystatechange",()=>{let i=o.document.readyState;for(let s of o.webqit.realdom.readyStateCallbacks[i].splice(0))s(o)},!1)),o.webqit.realdom.readyStateCallbacks[e].push(n)}function hr(t){let e=this,n={},r;return(r=e.document.querySelector(`meta[name="${t}"]`))&&(n=(r.content||"").split(";").filter(o=>o).reduce((o,i)=>{let s=i.split("=").map(c=>c.trim());return Xe(o,s[0].split("."),s[1]==="true"?!0:s[1]==="false"?!1:q(s[1])?parseInt(s[1]):s[1]),o},{})),{get name(){return t},get content(){return r.content},json(){return JSON.parse(JSON.stringify(n))}}}var B=(...t)=>K("oohtml",...t);function At(t,e,n){let r=t.toUpperCase().replace("-","_"),o=this,i=Ot.call(o);return o.webqit||(o.webqit={}),o.webqit.oohtml||(o.webqit.oohtml={}),o.webqit.oohtml.configs||(o.webqit.oohtml.configs={}),o.webqit.oohtml.configs[r]||(o.webqit.oohtml.configs[r]={}),ue(2,o.webqit.oohtml.configs[r],n,e,i.meta(t).json()),{config:o.webqit.oohtml.configs[r],realdom:i,window:o}}function Ke(t={}){let{config:e,window:n}=At.call(this,"namespace-api",t,{attr:{namespace:"namespace",id:"id"},api:{namespace:"namespace"},staticsensitivity:!0,eagermode:!0});e.idSelector=`[${n.CSS.escape(e.attr.id)}]`,e.namespaceSelector=`[${n.CSS.escape(e.attr.namespace)}]`,n.webqit.Observer=T,gr.call(n,e),yr.call(n,e)}function gr(t){let e=this;if(t.api.namespace in e.document)throw new Error(`document already has a "${t.api.namespace}" property!`);if(t.api.namespace in e.Element.prototype)throw new Error(`The "Element" class already has a "${t.api.namespace}" property!`);Object.defineProperty(e.document,t.api.namespace,{get:function(){return T.proxy(me.call(e,e.document,t))}}),Object.defineProperty(e.Element.prototype,t.api.namespace,{get:function(){return T.proxy(me.call(e,this,t))}})}function me(t,e){let n=this;if(!B(t).has("namespace")){let r=Object.create(null);T.intercept(r,"get",(o,i,s)=>{if(T.has(r,o.key)||!e.eagermode)return s();let c=`[${n.CSS.escape(e.attr.id)}="${o.key}"]`,f=Array.from(t.querySelectorAll(c)).filter(l=>{let u=l.parentNode.closest(e.namespaceSelector);return t===n.document?!u:u===t})[0];return f&&T.set(r,o.key,f),s()}),B(t).set("namespace",r)}return B(t).get("namespace")}function yr(t){let e=this,{realdom:n}=e.webqit,r=(o,i,s)=>{let c=i.getAttribute(t.attr.id),f=o.closest(t.namespaceSelector)||B(i).get("ownerNamespace")||e.document,l=me.call(e,f,t);s?T.get(l,c)!==i&&(B(i).set("ownerNamespace",f),T.set(l,c,i)):T.get(l,c)===i&&(B(i).delete("ownerNamespace"),T.deleteProperty(l,c))};n.realtime(e.document).subtree(t.idSelector,o=>{o.entrants.forEach(i=>r(o.target,i,!0)),o.exits.forEach(i=>r(o.target,i,!1))},{live:!0,timing:"sync",staticSensitivity:t.staticsensitivity}),t.staticsensitivity&&n.realtime(e.document,"attr").observe(t.namespaceSelector,o=>{let i=o.target.parentNode?.closest(t.namespaceSelector)||B(o.target).get("ownerNamespace")||e.document,s=me.call(e,i,t),c=me.call(e,o.target,t);if(o.target.matches(t.namespaceSelector))for(let[f,l]of Object.entries(s))!o.target.contains(l.parentNode)||(T.deleteProperty(s,f),T.set(c,f,l));else for(let[f,l]of Object.entries(c))T.deleteProperty(c,f),T.set(s,f,l)},{subtree:!0,timing:"sync"})}Ke.call(window);})();
//# sourceMappingURL=namespace-api.js.map
