(()=>{function g(e){return!Array.isArray(e)&&typeof e=="object"&&e}function I(e,...o){globalThis.WebQitInternalsRegistry||(globalThis.WebQitInternalsRegistry=new Map);var n=globalThis.WebQitInternalsRegistry.get(e);if(!n){if(n=new Map,o[0]===!1)return n;globalThis.WebQitInternalsRegistry.set(e,n)}for(var r,t;r=o.shift();)if((t=n)&&!(n=n.get(r))){if(n=new Map,o[0]===!1)return n;t.set(r,n)}return n}function s(e){return Array.isArray(e)}function A(e){return typeof e=="function"}function P(e){return e===null||e===""}function C(e){return arguments.length&&(e===void 0||typeof e>"u")}function x(e){return Array.isArray(e)||typeof e=="object"&&e||A(e)}function R(e){return P(e)||C(e)||e===!1||e===0||x(e)&&!Object.keys(e).length}function h(e){return A(e)||e&&{}.toString.call(e)==="[object function]"}function M(e){return e instanceof Number||typeof e=="number"}function w(e){return M(e)||e!==!0&&e!==!1&&e!==null&&e!==""&&!isNaN(e*1)}function E(e){return e instanceof String||typeof e=="string"&&e!==null}function W(e){return!E(e)&&!C(e.length)}function L(e,...o){return o.forEach(n=>{e.indexOf(n)<0&&e.push(n)}),e}function U(r,o){o=o||Object.prototype,o=o&&!s(o)?[o]:o;for(var n=[],r=r;r&&(!o||o.indexOf(r)<0)&&r.name!=="default";)n.push(r),r=r?Object.getPrototypeOf(r):null;return n}function H(e,o){var n=[];return U(e,o).forEach(r=>{L(n,...Object.getOwnPropertyNames(r))}),n}function v(e,o,n=!1,r=!1,t=!1){var i=0,f=e.shift();if((w(f)||f===!0||f===!1)&&(i=f,f=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((u,p)=>{!x(u)&&!h(u)||(n?H(u):Object.getOwnPropertyNames(u)).forEach(m=>{if(!!o(m,f,u,p)){var c=f[m],d=u[m];if((s(c)&&s(d)||g(c)&&g(d))&&(i===!0||i>0))f[m]=s(c)&&s(d)?[]:{},v([w(i)?i-1:i,f[m],c,d],o,n,r,t);else if(s(f)&&s(u))r?f[m]=d:f.push(d);else try{t?Object.defineProperty(f,m,Object.getOwnPropertyDescriptor(u,m)):f[m]=u[m]}catch{}}})}),f}function q(...e){return v(e,(o,n,r)=>!0,!1,!1,!1)}function O(e,o=!0){return s(e)?e:!o&&g(e)?[e]:e!==!1&&e!==0&&R(e)?[]:W(e)?Array.prototype.slice.call(e):g(e)?Object.values(e):[e]}function V(e,o,n=null){return s(o)?e.filter(r=>n?o.filter(t=>n(r,t)).length:o.indexOf(r)!==-1):[]}function N(e,o,n={},r={}){o=O(o).slice();for(var t=e;!C(t)&&!P(t)&&o.length;){var i=o.shift();if(!(n.get?n.get(t,i):x(t)?i in t:t[i])){r.exists=!1;return}t=n.get?n.get(t,i):t[i]}return r.exists=!0,t}function J(e,o,n,r={},t={}){let i=(c,d,l)=>t.set?t.set(c,d,l):(w(o[u])&&s(c)?c.push(l):c[d]=l,!0);o=O(o);for(var f=e,u=0;u<o.length;u++)if(u<o.length-1){if(!f||!x(f)&&!h(f))return!1;var p=N(f,o[u],t);if(!x(p)){if(t.buildTree===!1)return!1;p=h(t.buildTree)?t.buildTree(u):w(o[u+1])?[]:{};var m=i(f,o[u],p);if(!m)return!1}f=p}else return i(f,o[u],n)}var $=(e,o=Array)=>class extends o{constructor(...r){super(...r),Object.defineProperty(this,"window",{value:e})}get(r,t={}){let i=this[r];return Ee.call(e,i,t.context,!1)}each(r,t={}){this.forEach((i,f)=>{(i=this.get(f,t))&&r(i)})}attributes(r=[]){let t=this.get(0);return t?r.length?r.reduce((i,f)=>i.concat(t.getAttribute(f)),[]):Array.from(t.attributes).reduce((i,f)=>i.concat({name:f.name,value:f.value}),[]):[]}children(r={}){let t=this.get(0,r);return t?this.constructor.from(t instanceof this.window.HTMLTemplateElement?t.content.children:t.children):this.constructor.from([])}querySelectorAll(r,t={}){let i=this.get(0,t)||t.context||e.document.documentElement;return this.constructor.from(te.call(e,r,i,!0))}};function Ee(e,o=null,n=!0){let r=this;if(E(e)){let i;if(e.trim().startsWith("<")){var t=r.document.createElement("div");t.innerHTML=e,i=n?t.children:t.firstChild}else i=te.call(r,e,o,n);return i}return e instanceof r.Element?n?[e]:e:n?O(e,!1):e}function te(e,o=null,n=!0){o=o||this.document;var t,i=n?"querySelectorAll":"querySelector";try{t=o[i](e)}catch{try{t=o[i](e.replace(/\:is\(/g,":matches("))}catch{try{t=o[i](e.replace(/\:is\(/g,":-webkit-any("))}catch{try{t=o[i](e.replace(/\:is\(/g,":-moz-any("))}catch(m){throw m}}}}return t}function re(e){let o=this;o.document.readyState==="complete"?e(o):(o.document.domReadyCallbacks||(o.document.domReadyCallbacks=[],o.document.addEventListener("DOMContentLoaded",()=>{o.document.domReadyCallbacks.splice(0).forEach(n=>n(o))},!1)),o.document.domReadyCallbacks.push(e))}function oe(e,o=!1){let n=this,r={content:{}};return!(r.el=n.document.querySelector('meta[name="oohtml"]'))&&o&&(r.el=n.document.createElement("meta"),r.el.setAttribute("name",e),n.document.head.append(r.el)),r.el&&(r.content=(r.el.getAttribute("content")||"").split(";").filter(t=>t).reduce((t,i)=>{let f=i.split("=").map(u=>u.trim());return J(t,f[0].split("."),f[1]==="true"?!0:f[1]==="false"?!1:w(f[1])?parseInt(f[1]):f[1]),t},{})),r.get=function(t){return JSON.stringify(N(this.content,t.split(".")))},r.copy=function(){return JSON.stringify(this.content)},r.copyWithDefaults=function(...t){return t.length?q(!0,{},...t.reverse().concat(this.content)):this.copy()},r}var ne=e=>class{constructor(n=!0){Object.defineProperty(this,"window",{value:e}),Object.defineProperty(this,"readCallbacks",{value:new Set}),Object.defineProperty(this,"writeCallbacks",{value:new Set}),this.async=n,this.window.requestAnimationFrame?this._run():this.async=!1}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach(n=>{n()||this.readCallbacks.delete(n)}),this.writeCallbacks.forEach(n=>{n()||this.writeCallbacks.delete(n)}),this._run()})}onread(n,r=!1){if(r)return new Promise((t,i)=>{this.async===!1?n(t,i):this.readCallbacks.add(()=>{n(t,i)})});this.async===!1?n():this.readCallbacks.add(n)}onwrite(n,r=!1){if(r)return new Promise((t,i)=>{this.async===!1?n(t,i):this.writeCallbacks.add(()=>{n(t,i)})});this.async===!1?n():this.writeCallbacks.add(n)}cycle(n,r,t){this.onread(()=>{var i=n(t);if(i){var f=u=>{this.onwrite(()=>{var p=r(u,t);if(p){var m=c=>{this.cycle(n,r,c)};p instanceof Promise?p.then(m):m()}})};i instanceof Promise?i.then(f):f()}})}};var ie=(e,o=Array)=>class extends $(e,o){attributes(r,t,i={}){h(arguments[0],i)&&(i=t||{},t=r,r=[]);let f=super.attributes(r);return f.length&&t(...f),this.attributeChangeCallback(r,t,i)}attributeChangeCallback(r,t,i={}){h(arguments[0])&&(i=t||{},t=r,r=[]);let f=new e.MutationObserver(m=>{if(!r.length){t(...Array.from(m).reduce((c,d)=>c.concat({name:d.attributeName,value:u.getAttribute(d.attributeName),oldValue:d.oldValue}),[]));return}t(...r.reduce((c,d)=>c.concat(u.getAttribute(d)),[]))});i={attributes:!0,attributeOldValue:!r.length,subtree:i.subtree},r.length&&(i.attributeFilter=r);let u=this.get(0,i);f.observe(u,i);let p=this;return{disconnect(){return f.disconnect(),{reconnect(){return p.attributeChangeCallback(r,t,i)}}}}}children(r,t={}){b(super.children(t),r,t,1);let i=new e.MutationObserver(m=>{let[c,d,l,a]=ue(m);b(c,r,t,0,1),b(d,r,t,1,0),b(l,r,t,0),b(a,r,t,1)}),f=this.get(0,t),u=f instanceof e.HTMLTemplateElement?f.content:f;i.observe(u,{childList:!0});let p=this;return{disconnect(){return i.disconnect(),{reconnect(){return p.children(r)}}}}}querySelectorAll(r,t,i={}){let f=super.querySelectorAll(r,i);b(f,t,i,1);let u=this.get(0,i);return this.constructor.from([r]).presenceChangeCallback(t,{...i,context:u||i.context})}querySelectorNone(r,t,i={}){super.querySelectorAll(r,i).length===0&&(i.each?t(null,0):t([],0));let f=this.get(0,i);return this.constructor.from([r]).presenceChangeCallback(t,{...i,context:f||i.context})}connectedCallback(r,t={}){let i=[];return this.each(f=>{!f.isConnected||(t.each?r(f,1):i.push(f))},t),i.length&&r(i,1),this.presenceChangeCallback(r,{...t,on:"added"})}disconnectedCallback(r,t={}){let i=[];return this.each(f=>{f.isConnected||(t.each?r(f,0):i.push(f))},t),i.length&&r(i,0),this.presenceChangeCallback(r,{...t,on:"removed"})}presenceChangeCallback(r,t={}){let i=(l,[...a])=>{if(a=a.filter(_=>_.matches),E(l)){let _=a.filter(y=>y.matches(l));if(t.observeIndirectMutation!==!1&&(_=a.reduce((y,S)=>y.concat(O(S.querySelectorAll(l))),_),_.length))return _}else{if(a.includes(l))return[l];if(t.observeIndirectMutation!==!1&&a.length){let _=l;for(;_=_.parentNode;)if(a.includes(_))return[l]}}},f=(l,a)=>(a.$$searchCache||(a.$$searchCache=new Map),l.reduce((_,y)=>{let S;return a.$$searchCache.has(y)?S=a.$$searchCache.get(y):(S=i(y,a,E(y))||[],a.$$searchCache.set(y,S)),_.concat(S)},[])),u=this,p=new Set,m=new Set,c=(l,a,_)=>{a&&t.on==="removed"||!a&&t.on==="added"||(l=f(u,l)).length&&(l.forEach(y=>{a?(p.add(y),m.delete(y)):(p.delete(y),m.add(y))}),t.maintainCallState?b(l,r,t,a,_,p,m):b(l,r,t,a,_))},d=t.context||e.document.documentElement;return fe.call(e,d,(l,a,_,y)=>{c(l,0,1),c(a,1,0),c(_,0,0),c(y,1,1)})}};function b(e,o,n,...r){n.each?e.forEach(t=>o(t,...r)):e instanceof Set&&e.size?o([...e],...r):Array.isArray(e)&&e.length&&o(e,...r)}var T=new Map;function fe(e,o){let n=this;if(!T.has(e)){let t=new Set,i=new n.MutationObserver(u=>{if(!t.size)return;let[p,m,c,d]=ue(u);t.forEach(l=>l(p,m,c,d))}),f=e instanceof n.HTMLTemplateElement?e.content:e;i.observe(f,{childList:!0,subtree:!0}),T.set(e,{callbacks:t,observer:i})}T.get(e).callbacks.add(o);let r={disconnect(){let t=T.get(e);return t.callbacks.delete(o),t.callbacks.size||(t.observer.disconnect(),T.delete(e)),{reconnect(){let i=T.get(e);return i?(i.callbacks.add(o),r):fe.call(n,e,o)}}}};return r}function ue(e){let o=new Set,n=new Set,r=new Set,t=new Set;return e.forEach(i=>{i.addedNodes.forEach(f=>{f.isConnected?o.add(f):t.add(f)}),i.removedNodes.forEach(f=>{f.isConnected&&o.has(f)?(o.delete(f),n.add(f)):r.add(f)}),t.forEach(f=>{r.has(f)||(t.delete(f),o.add(f))})}),[n,t,r,o]}function se(){be.call(this),Ne.call(this),Se.call(this)}function be(){let e=this;e.CSS||(e.CSS={}),e.CSS.escape||(e.CSS.escape=o=>o.replace(/([\:@\~\$\&])/g,"\\$1"))}function Ne(){let e=this;"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}function Se(){let e=this;e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(o){for(var n=(this.document||this.ownerDocument).querySelectorAll(o),r=n.length;--r>=0&&n.item(r)!==this;);return r>-1})}function me(){let e=this;if(e.wq||(e.wq={}),e.wq.dom)return e.wq.dom;let o=$(e),n=ne(e),r=ie(e);return o.prototype.realtime=function(...t){return t.length?new r(...t):new r(...this)},e.wq.dom=new o,e.wq.dom.reflow=new n,e.wq.dom.ready=re.bind(e),e.wq.dom.meta=oe.bind(e),e.wq.dom.extend=(t,i,{supportsRealtime:f=!1}={})=>{f!=="only"&&(o.prototype[t]=i),f&&(r.prototype[t]=i)},se.call(e),e.wq.dom}var F=class extends Map{constructor(...o){super(...o),this.observers=new Set,this.state=new Map}set(o,n){let r=super.set(o,n);return this.fire("set",o,n,o),r}delete(o){let n=super.delete(o);return this.fire("delete",o),n}get(o){return this.fire("get",o),super.get(o)}keyNames(){return Array.from(super.keys())}setState(o,n){let r=this.state.set(o,n);return this.fire("set:state",o,n),r}getState(o){return this.fire("get:state",o),this.state.get(o)}observe(o,n,r){let t={type:o,key:n,callback:r};return this.observers.add(t),()=>this.observers.delete(t)}unobserve(o,n,r){if(Array.isArray(o)||Array.isArray(n))throw new Error('The "type" and "key" arguments can only be strings.');this.observers.forEach(t=>{!(B([o,"*"],t.type)&&B([n,"*"],t.key)&&t.callback===r)||this.observers.delete(t)})}fire(o,n,...r){Array.from(this.observers).forEach(t=>{!(B([o,"*"],t.type)&&B([n,"*"],t.key))||t.callback(...r)})}},B=(e,o)=>Array.isArray(o)?V(e,o).length:e.includes(o);var G=(e,...o)=>I(e,"oohtml",...o);function Ae(e){let o=this;class n extends F{expose(){return this}static node(t){if(!G(t).has("state")){let i=new this;Object.defineProperty(i,"context",{value:t}),G(t).set("state",i)}return G(t).get("state")}}return o.wq.HTMLState=n,{HTMLState:n}}function Te(e){let o=this,{HTMLState:n}=o.wq;if(e.api.state in o.document)throw new Error(`document already has a "${e.api.state}" property!`);if(e.api.state in o.Element.prototype)throw new Error(`The "Element" class already has a "${e.api.state}" property!`);Object.defineProperty(o.document,e.api.state,{get:function(){return n.node(o.document).expose()}}),Object.defineProperty(o.Element.prototype,e.api.state,{get:function(){return n.node(this).expose()}})}function X(e={}){let o=this,r=me.call(o).meta("oohtml").copyWithDefaults(e,{api:{state:"state"}}),{HTMLState:t}=Ae.call(this,r);return r.expose!==!1&&Te.call(this,r),{HTMLState:t}}X.call(window);})();
//# sourceMappingURL=state-api.js.map
