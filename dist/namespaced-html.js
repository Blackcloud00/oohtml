(()=>{"use strict";function e(e){return typeof e}function t(e,...t){globalThis.WebQitInternalsRegistry||(globalThis.WebQitInternalsRegistry=new Map);var r,n,s=globalThis.WebQitInternalsRegistry.get(e);if(!s){if(s=new Map,!1===t[0])return s;globalThis.WebQitInternalsRegistry.set(e,s)}for(;r=t.shift();)if((n=s)&&!(s=s.get(r))){if(s=new Map,!1===t[0])return s;n.set(r,s)}return s}function r(e){return Array.isArray(e)}function n(e){return"function"==typeof e}function s(e){return n(e)||e&&"[object function]"==={}.toString.call(e)}function i(e){return e instanceof Number||"number"==typeof e}function a(e){return i(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}function o(e){return!Array.isArray(e)&&"object"==typeof e&&e}function l(e){return e instanceof String||"string"==typeof e&&null!==e}function c(e){return Array.isArray(e)||"object"==typeof e&&e||n(e)}function u(e){return arguments.length&&(void 0===e||void 0===e)}function h(e,t=!0){return r(e)?e:!t&&o(e)?[e]:!1!==e&&0!==e&&function(e){return function(e){return null===e||""===e}(e)||u(e)||!1===e||0===e||c(e)&&!Object.keys(e).length}(e)?[]:function(e){return!l(e)&&!u(e.length)}(e)?Array.prototype.slice.call(e):o(e)?Object.values(e):[e]}function p(e,t,r=null){return r||!1!==r&&e.dotSafe&&t.dotSafe?e.join(".")===t.join("."):e.length===t.length&&e.reduce(((e,r,n)=>e&&r===t[n]),!0)}function f(e,t,n=null){return r(t)?e.filter((e=>n?t.filter((t=>n(e,t))).length:-1!==t.indexOf(e))):[]}function g(e){return(m(e)?e:h(e).length?[e]:[]).reduce(((e,t)=>e.concat([h(t)])),[]).map((e=>d.resolve(e)))}new Map;class d extends Array{static resolve(e){return e.every((e=>!(e+"").includes(".")))?(new d).concat(e):e}get dotSafe(){return!0}}function m(e){return h(e).reduce(((e,t)=>e||r(t)),!1)}function b(e){return e.filter((e=>e||0===e)).length!==e.length}class v{constructor(e){this.target=e,this.fireables=[],this.currentlyFiring=[]}add(e){return this.fireables.push(e),e}remove(e){this.fireables=this.fireables.filter((t=>t!==e))}removeMatches(e){this.match(e).forEach((e=>{this.fireables=this.fireables.filter((t=>t!==e))}))}match(e){return this.fireables.filter((t=>{var r=g(t.filter),n=h((t.params||{}).tags),s=g(e.filter),i=h((e.params||{}).tags);return(!e.originalHandler||t.handler===e.originalHandler)&&(!s.length||p(s,r))&&(!i.length||i.length===n.length&&f(n,i).length===i.length)}))}static _getFirebase(r,n,s=!0,i=this.__namespace){if(!c(n))throw new Error('Subject must be of type object; "'+e(n)+'" given!');var a=this;return i&&globalThis.WebQitObserverNamespaceRegistry.has(r+"-"+i)&&(a=globalThis.WebQitObserverNamespaceRegistry.get(r+"-"+i),r+="-"+i),!t(n,"firebases").has(r)&&s&&t(n,"firebases").set(r,new a(n)),t(n,"firebases").get(r)}static _namespace(e,t,r=null){if(e+="-"+t,2===arguments.length)return globalThis.WebQitObserverNamespaceRegistry.get(e);if(!(r.prototype instanceof this))throw new Error(`The implementation of the namespace ${this.name}.${t} must be a subclass of ${this.name}.`);globalThis.WebQitObserverNamespaceRegistry.set(e,r),r.__namespace=t}}globalThis.WebQitObserverNamespaceRegistry||(globalThis.WebQitObserverNamespaceRegistry=new Map);class y{constructor(e,t){this.target=e,this.handler=t.handler,this.filter=t.filter,this.params=t.params}disconnect(){this.disconnected=!0}}class w extends y{fire(e,t,r){return this.disconnected||this.filter&&!f(h(this.filter),[e.type]).length?t(...Array.prototype.slice.call(arguments,2)):this.handler(e,r,t)}}function O(e,t){var r=void 0;return c(e)&&Object.keys(e).forEach(((n,s)=>{!1!==r&&(r=t(a(n)?parseFloat(n):n,e[n],s))})),r}class j{constructor(e,t){if(this.target=e,!t.type)throw new Error("Action type must be given in definition!");O(t,((e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})})),Object.seal(this)}}class P extends v{add(e){return super.add(new w(this.target,e))}fire(e,t=null){if(e instanceof j||(e=new j(this.target,e)),this.currentlyFiring.filter((t=>t.type===e.type&&t.name===e.name)).length)return t?t():void 0;this.currentlyFiring.push(e);const r=(n,...s)=>{var i=this.fireables[n];return i?i.fire(e,((...e)=>r(n+1,...e)),...s):t?t(...s):s[0]};var n=r(0);return this.currentlyFiring.pop(),n}static getFirebase(e,t=!0,r=null){return super._getFirebase("interceptor",...arguments)}static namespace(e,t=null){return super._namespace("interceptor",...arguments)}}function E(e){return t(e,!1).get(e)||e}function k(e,t,r={},n={}){if(!t||!c(t))throw new Error("Target must be of type object!");t=E(t);var s,i=function(n){return arguments.length?n:Reflect[e](t,...Object.values(r))};return(s=P.getFirebase(t,!1,n.namespace))?s.fire({type:e,...r},i):i()}function C(e,t,r,n={}){return k("apply",e,{thisArgument:t,argumentsList:r},n)}function S(e,t,r=null,n={}){return k("construct",e,arguments.length>2?{argumentsList:t,newTarget:r}:{argumentsList:t},n)}function _(e,t=1){var r=0;e.forEach((e=>{r++}));var n=e.slice(e.length-r,t);return arguments.length>1?n:n[0]}function $(e,t=1){return arguments.length>1?_(e.slice().reverse(),t).reverse():_(e.slice().reverse())}function M(e,t){return e.reduce(((e,r,n)=>e||t(r,n)),!1)}function x(e,t,r=null){return r||!1!==r&&e.dotSafe&&t.dotSafe?(e.join(".")+".").startsWith(t.join(".")+"."):t.reduce(((t,r,n)=>t&&r===e[n]),!0)}function D(e,t,r=null,n=!1){var s=function(e,t,r=null,n=!1){return t.length>e.length?-1:("number"==typeof r?n?e.slice(0,r+1+(r<0?e.length:0)):e.slice(r):e).reduce(((e,r,s)=>{var[i,a,o]=e;if(!n&&i>-1)return[i,a,o];var l=o+1,c=r===t[l]?0===l?[s,0]:[a,l]:[-1,-1];return c[1]===t.length-1&&(c[1]=-1,c[0]>-1)?[c[0]].concat(c):[i].concat(c)}),[-1,-1,-1])[0]+(n||"number"!=typeof r?0:r>-1?r:e.length-r)}(e,t,r,n);return-1===s?[]:e.slice(s+t.length)}class A{constructor(e,t=!1){this._={},this._.target=e,this._.cancellable=t,this._.propagationStopped=!1,this._.defaultPrevented=!1,this._.promisesInstance=null,this._.promises=[]}get target(){return this._.target}get cancellable(){return this._.cancellable}stopPropagation(){this._.propagationStopped=!0}get propagationStopped(){return this._.propagationStopped}preventDefault(){this._.defaultPrevented=!0}get defaultPrevented(){return this._.defaultPrevented}waitUntil(e){e instanceof Promise&&(this._.promises.push(e),this._.promisesInstance=null)}get promises(){return!this._.promisesInstance&&this._.promises.length&&(this._.promisesInstance=Promise.all(this._.promises)),this._.promisesInstance}respondWith(e){var t,r=o(e)&&!u(e.propagationStopped)&&!u(e.defaultPrevented);!1===e||r&&e.propagationStopped?this.stopPropagation():!1===e||r&&e.defaultPrevented?this.preventDefault():(e instanceof Promise&&(t=e)||r&&(t=e.promises))&&this.waitUntil(t)}}class T extends y{constructor(e,t){if(super(e,t),this.filters2D=g(this.filter),this.filtersIsOriginally2D=m(this.filter),this.filtersIsDynamic=this.filters2D.filter((e=>b(h(e)))).length>0,this.filtersIsDynamic&&this.filters2D.length>1)throw new Error('Only one "Dynamic Filter" must be observed at a time! "'+this.filters2D.map((e=>"["+e.join(", ")+"]")).join(", ")+'" have been bound together.')}fire(e){if(this.disconnected||this.params.type&&!M(e,(e=>this.params.type===e.type)))return;const t=e=>!["set","def"].includes(e.type)||!this.params.diff||(s(this.params.diff)?this.params.diff(e.value,e.oldValue):e.value!==e.oldValue);var r=new A(this.target);if(this.filters2D.length){var n=e.filter((e=>this.filters2D.filter(((r,n)=>{var s=r.slice();return this.filtersIsDynamic&&e.path.forEach(((e,t)=>{s[t]=s[t]||0===s[t]?s[t]:e})),(!this.filtersIsDynamic||!b(s))&&t(e)&&(!this.params.subtree&&p(s,e.path)||this.params.suptree&&x(s,e.path)&&(!a(this.params.suptree)||D(s,e.path).length<=this.params.suptree)||this.params.subtree&&e.path.length>=s.length&&x(e.path,s)&&(!a(this.params.subtree)||D(e.path,s).length<=this.params.subtree))})).length));if(n.length)if(this.filtersIsOriginally2D||this.params.subtree){var i=n;o(this.filter)&&(i={...this.filter},n.forEach(((e,t)=>{i[e.name]=e}))),r.respondWith(this.handler(i,r))}else n.forEach(((e,t)=>{r.respondWith(this.handler(e,r))}))}else(this.params.subtree||e.filter((e=>p(e.path,[e.name]))).length===e.length)&&e.filter((e=>t(e))).length&&r.respondWith(this.handler(e,r));return r}}class N{constructor(e,t){if(this.target=e,t.originalSubject||(this.originalSubject=e),!("type"in t))throw new Error("Mutation type must be given in definition!");if(!("name"in t))throw new Error("Property name must be given in definition!");O(t,((e,t)=>{"path"===e&&(t=d.resolve(t)),Object.defineProperty(this,e,{value:t,enumerable:!0})})),this.path||Object.defineProperty(this,"path",{value:d.resolve([t.name]),enumerable:!0}),Object.seal(this)}}class F extends v{constructor(e){super(e),this.buffers=[]}add(e){return super.add(new T(this.target,e))}fire(e,t){var r=new A(this.target,t);return e=h(e,!1).map((e=>e instanceof N?e:new N(this.target,e))),this.buffers.length?($(this.buffers)(e),r):(this.currentlyFiring.filter((t=>e.filter((e=>t.type===e.type&&t.name===e.name)).length)).length,this.fireables.forEach((n=>{if(r.propagationStopped&&t)return r;r.respondWith(n.fire(e))})),r)}static getFirebase(e,t=!0,r=null){return super._getFirebase("observer",...arguments)}static namespace(e,t=null){return super._namespace("observer",...arguments)}}function R(e,n,s=null,i={}){if(!(e=s||e)||!c(e))throw new Error("Target must be of type object!");e=E(e);var a=h(n),o=a.map((r=>{var n,o=function(n){return arguments.length?n:t(e,"accessorizedProps").has(r)&&t(e,"accessorizedProps").get(r).touch(!0)?t(e,"accessorizedProps").get(r).get():s?Reflect.get(e,r,s):Reflect.get(e,r)};return(n=P.getFirebase(e,!0,i.namespace))?n.fire({type:"get",name:r,related:a,receiver:s},o):o()}));return r(n)?o:o[0]}function W(e,t,n=!1,i=!1,l=!1){var u=0,h=e.shift();if((a(h)||!0===h||!1===h)&&(u=h,h=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach(((e,p)=>{var f,g,d;(c(e)||s(e))&&(n?(f=e,d=[],function(e,t){t=(t=t||Object.prototype)&&!r(t)?[t]:t;var n=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)n.push(e),e=e?Object.getPrototypeOf(e):null;return n}(f,g).forEach((e=>{!function(e,...t){t.forEach((t=>{e.indexOf(t)<0&&e.push(t)}))}(d,...Object.getOwnPropertyNames(e))})),d):Object.getOwnPropertyNames(e)).forEach((s=>{if(t(s,h,e,p)){var c=h[s],f=e[s];if((r(c)&&r(f)||o(c)&&o(f))&&(!0===u||u>0))h[s]=r(c)&&r(f)?[]:{},W([a(u)?u-1:u,h[s],c,f],t,n,i,l);else if(r(h)&&r(e))i?h[s]=f:h.push(f);else try{l?Object.defineProperty(h,s,Object.getOwnPropertyDescriptor(e,s)):h[s]=e[s]}catch(e){}}}))})),h}function q(...e){return W(e,((e,t,r)=>!0),!1,!1,!1)}function Q(t,r,n=null,i={}){if(!(t=E(t))||!c(t))throw new Error('Observable subjects must be of type object; "'+e(t)+'" given!');if(s(r)&&(i=arguments.length>2?n:{},n=r,r=null),!s(n))throw new Error('Handler must be a function; "'+e(n)+'" given!');var a,o=F.getFirebase(t,!0,i.namespace),l={filter:r,handler:n,params:i};if((l.filter||"*"===l.params.subtree||l.params.subtree&&V(t))&&L(t,l.filter,l.params.subtree,i.namespace),l.params.unique&&(a=o.match({filter:r,params:i})).length){if("replace"!==l.params.unique)return a[0];o.remove(a[0])}return o.add(l)}function I(e,t,r,n=null,s={}){var i;if(e!==r&&(Q(r,((r,n)=>{if(i=F.getFirebase(e,!1,s.namespace)){var a=r.map((r=>{var n=r;do{if(n.target===e)return}while(n=n.src);var s={};return O(r,((e,t)=>{"target"!==e&&"name"!==e&&"path"!==e&&"src"!==e&&(s[e]=t)})),s.name=t,s.path=[t].concat(r.path),s.originalSubject=r.originalSubject,s.src=r,new N(e,s)})).filter((e=>e));if(a.length)return i.fire(a,n.cancellable)}}),{subtree:!0,...s,unique:!0,tags:[z,t,e]}),o(n)&&(i=F.getFirebase(e,!1,s.namespace)))){var a=q({name:t,type:"set",value:r,related:[t]},n);let e=i.fire(a,s.cancellable);if(s.eventTypeReturn)return e}}const z={};function L(e,t=null,r=!1,n=null){if(!e||!c(e))throw new Error("Target must be of type object!");var s=F.getFirebase(e,!0,n);if(s&&!s.build){s.build=r;var i=g(t),a=!i.length||i.filter((e=>!e[0]&&0!==e[0])).length?Object.keys(e):i.map((e=>e[0])),o=i.length?i.map((e=>e.slice(1))).filter((e=>e.length)):null;s.subBuild=o&&o.length?o:null,a.forEach((t=>{var i=R(e,t,null,{namespace:n});try{c(i)&&(I(e,t,i,null,params),(s.subBuild&&V(i)||(_isFunction(r)?r(i):r&&V(i)))&&L(i,s.subBuild,r,n))}catch(e){}}))}}const V=e=>(e instanceof Object||e instanceof Array||e instanceof Function)&&("undefined"==typeof window||e!==window);function H(t,r,n=null,i={}){if(!(t=E(t))||!c(t))throw new Error('Observable subjects must be of type object; "'+e(t)+'" given!');if(s(r)&&(i=arguments.length>2?n:{},n=r,r=null),n&&!s(n))throw new Error('Handler must be a function; "'+e(n)+'" given!');var a;if(a=F.getFirebase(t,!1,i.namespace))return a.removeMatches({filter:r,originalHandler:n,params:i})}function B(e,t,r,n=null,s={}){var i;if(H(r,null,null,{...s,tags:[z,t,e]}),o(n)&&(i=F.getFirebase(e,!1,s.namespace))){var a=q({name:t,type:"del",oldValue:r,related:[t]},n);i.fire(a,s.cancellable)}}function U(e,t,r={}){return k("has",e,{name:t},r)}function G(e,n,s,a={}){n=s.receiver||n;var u=s.keysOrPayload,p=s.value;if(!n||!c(n))throw new Error("Target must be of type object!");o(u)&&(a=p||{},p=null),n=E(n);var f=P.getFirebase(n,!1,a.namespace),g=F.getFirebase(n,!1,a.namespace);const d=(r,i,o,l)=>{var u,h="set";e&&(h="defineProperty",i=(u=i||{}).value);var p,d=!1;U(n,r,a)&&(d=!0,p=R(n,r,s.receiver,a));var m={name:r,type:h,value:i,receiver:s.receiver,related:o,detail:l,isUpdate:d,oldValue:p},b=function(e){return arguments.length&&(u?u=e:i=e),u?!(t(n,"accessorizedProps",!1).has(r)&&!t(n,"accessorizedProps").get(r).restore()||(Object.defineProperty(n,r,u),0)):t(n,"accessorizedProps",!1).has(r)?t(n,"accessorizedProps").get(r).set(i):(n[r]=i,!0)};if(f){var v=u?{type:"defineProperty",name:r,descriptor:u,receiver:s.receiver,related:o,detail:l,isUpdate:d,oldValue:p}:{type:"set",name:r,value:i,receiver:s.receiver,related:o,detail:l,isUpdate:d,oldValue:p};m.success=f.fire(v,b)}else m.success=b();return m.success&&m.value!==m.oldValue&&(c(m.oldValue)&&B(n,r,m.oldValue,null,a),c(m.value)&&(I(n,r,m.value,null,a),g&&(g.subBuild||g.build&&V(m.value))&&L(m.value,g.subBuild,g.build,a.namespace))),m};var m,b=[];r(u)||(l(u)||i(u))&&(m=h(u))?b=m.map((e=>d(e,p,m,a.detail))):o(u)&&(m=Object.keys(u))&&(b=m.map((e=>d(e,u[e],m,a.detail))));var v,y=b.filter((e=>!1!==e.success));return g?(v=g.fire(y,a.cancellable)).successCount=y.length:a.eventTypeReturn&&(v=new A(n)),a.eventTypeReturn?v:y.length>0}function K(e,t,r=null,n={}){return G(!0,e,{keysOrPayload:t,value:r},n)}function J(e,r,n={}){if(!e||!c(e))throw new Error("Target must be of type object!");e=E(e);var s,i,a=h(r),o=a.map((r=>{var s;U(e,r,n)&&(s=R(e,r,null,n));var i,o={name:r,type:"deleteProperty",related:a,detail:n.detail,oldValue:s},l=function(n){return arguments.length?n:!(t(e,"accessorizedProps",!1).has(r)&&!t(e,"accessorizedProps").get(r).restore()||(delete e[r],0))};return(i=P.getFirebase(e,!1,n.namespace))?o.success=i.fire({type:"deleteProperty",name:r,oldValue:s,related:a},l):o.success=l(),o.success&&c(o.oldValue)&&B(e,r,o.oldValue,null,n),o})),l=o.filter((e=>!1!==e.success));return(s=F.getFirebase(e,!1,n.namespace))?(i=s.fire(l,n.cancellable)).successCount=l.length:n.eventTypeReturn&&(i=new A(e)),n.eventTypeReturn?i:l.length>0}function X(e,t,r={}){return k("getOwnPropertyDescriptor",e,{name:t},r)}function Y(e,t={}){return k("getPrototypeOf",e,{},t)}function Z(e,t={}){return k("isExtensible",e,{},t)}function ee(e,t={}){return k("ownKeys",e,{},t)}function te(e,t={}){return k("preventExtensions",e,{},t)}function re(e,t,r=null,n=null,s={}){return G(!1,e,arguments.length>3?{keysOrPayload:t,value:r,receiver:n}:{keysOrPayload:t,value:r},s)}function ne(e,t,r={}){return k("setPrototypeOf",e,{prototype:t},r)}function se(e,t=[],n=!0){var i=0;return a(arguments[0])&&c(arguments[1])&&(i=arguments[0],e=arguments[1],t=arguments[2]||[]),W([i,{},e],((e,n,i)=>s(t)?t(e):!r(t)||!t.length||t.indexOf(e)>-1),!1,!1,n)}const ie={apply:C,construct:S,defineProperty:K,deleteProperty:J,get:R,getOwnPropertyDescriptor:X,getPrototypeOf:Y,has:U,isExtensible:Z,ownKeys:ee,preventExtensions:te,set:re,setPrototypeOf:ne,accessorize:function(e,n=[],s={}){s=o(n)?n:s;var i=(1===arguments.length?Object.keys(e):h(n)).map((r=>{if(t(e,"accessorizedProps").has(r)&&t(e,"accessorizedProps").get(r).touch(!0))return!1;const n=()=>{for(var t,n=e;!t&&(n=Object.getPrototypeOf(n));)t=Object.getOwnPropertyDescriptor(n,r);return t};var i,a,o=Object.getOwnPropertyDescriptor(e,r);o||(i={writable:!0,enumerable:!(r in e),configurable:!1!==s.configurable});var l={...o||i};"value"in l&&delete l.value,"writable"in l&&delete l.writable,l.get=()=>{if(c.ongoingGets.length)return c.get();c.ongoingGets.push(1);var t=R(e,r,null,s);return c.ongoingGets.pop(),t},l.set=t=>{if(c.ongoingSets.length)return c.set(t);c.ongoingSets.push(1);var n=re(e,r,t,null,s);return c.ongoingSets.pop(),n};var c={ongoingGets:[],ongoingSets:[],get:function(){var t=o;return t||(t=a?i:n()||i),t.get?t.get.call(e):t.value},set:function(t){var r=o;return r||(a?r=i:(r=n())?"value"in r&&(r=i,a=!0):(r=i,a=!0)),r.set||r.get?!!r.set&&r.set.call(e,t):(r.value=t,!0)},restore:function(){try{return this.intact()&&(o||a?Object.defineProperty(e,r,o||i):delete e[r],t(e,"accessorizedProps").delete(r)),!0}catch(e){}return!1},intact:function(){return(Object.getOwnPropertyDescriptor(e,r)||{}).get===l.get},touch:function(e=!1){return this.intact()||!!e&&!this.restore()}};try{return Object.defineProperty(e,r,l),t(e,"accessorizedProps").set(r,c),!0}catch(e){}return!1}));return r(n)?i:i[0]},unaccessorize:function(e,n=[],s={}){s=o(n)?n:s;var i=(1===arguments.length?Object.keys(e):h(n)).map((r=>!t(e,"accessorizedProps",!1).has(r)||t(e,"accessorizedProps").get(r).restore()));return r(n)?i:i[0]},proxy:function(r,i={}){if(!c(r))throw new Error('Object must be of type target; "'+e(r)+'" given!');var a=new Proxy(r,{apply:(e,t,r)=>C(e,t,r,i),construct:(e,t,r=null)=>S(e,t,r,i),defineProperty:(e,t,r)=>K(e,t,r,i),deleteProperty:(e,t)=>J(e,t,i),get:(e,t,r=null)=>{var o=R(e,t,r,i);return!1!==i.proxyAutoBinding&&s(o)&&!function(e){return n(e)&&/^class\s?/.test(Function.prototype.toString.call(e))}(o)?o.bind(a):o},getOwnPropertyDescriptor:(e,t)=>X(e,t,i),getPrototypeOf:e=>Y(e,i),has:(e,t)=>U(e,t,i),isExtensible:e=>Z(e,i),ownKeys:e=>ee(e,i),preventExtensions:e=>te(e,i),set:(e,t,r,n=null)=>re(e,t,r,n,i),setPrototypeOf:(e,t)=>ne(e,t,i)});return t(a).set(a,r),a},unproxy:E,observe:Q,unobserve:H,intercept:function(t,r,n={}){if(!c(t=E(t)))throw new Error('Object must be of type target; "'+e(handler)+'" given!');var i={},a=!0;o(r)||(s(r)?r={"":r}:s(n)&&(r={[r]:n},n=arguments.length>3?arguments[3]:{}),a=!1);var l=P.getFirebase(t,!0,n.namespace);return Object.keys(r).forEach((t=>{if(!s(r[t]))throw new Error("Callback"+(null===t?"":" for "+t)+' must be a function; "'+e(r[t])+'" given!');var o,c={filter:t,handler:r[t],params:n};if(c.params.unique&&(o=l.match(c)).length){if("replace"!==c.params.unique)return o[0];l.remove(o[0])}a?i[t]=l.add(c):i=l.add(c)})),i},unintercept:function(t,r=null,n={}){if(!(t=E(t))||!c(t))throw new Error('Object must be of type target; "'+e(t)+'" given!');var i=P.getFirebase(t,!1,n.namespace);_isObject(r)||(s(r)?r={[null]:r}:s(n)&&(r={[r]:n},n=arguments.length>3?arguments[3]:{}),isOriginallyObj=!1),(i=P.getFirebase(t,!1,n.namespace))&&Object.keys(r).forEach((t=>{if(!s(r[t]))throw new Error("Callback"+(null===t?"":" for "+t)+' must be a function; "'+e(r[t])+'" given!');var a={filter:t,originalHandler:r[t],params:n};return i.removeMatches(a)}))},closure:function(e,...t){var n=t.map((e=>{if(!c(e=E(e)))throw new Error("Target must be of type object!");return{target:e,subjectCopy:r(e)?e.slice(0):se(e)}})),s=e(...t);const i=()=>{n.map((e=>{var t,r,n=Object.keys(e.subjectCopy),s=Object.keys(e.target),i=[],a=(t=n.concat(s),t.filter(((e,t,r)=>r.indexOf(e)===t))).map((t=>{if(e.subjectCopy[t]!==e.target[t]){i.push(t);var r={name:t,related:i,buffered:!0};return s.includes(t)?(r.type="set",r.value=e.target[t],n.includes(t)&&(r.isUpdate=!0)):r.type="del",n.includes(t)&&(r.oldValue=e.subjectCopy[t]),c(e.subjectCopy[t])&&B(e.target,t,e.subjectCopy[t]),c(e.target[t])&&I(e.target,t,e.target[t]),r}})).filter((e=>e));if(a.length&&(r=F.getFirebase(e.target,!1)))return r.fire(a)}))};return s instanceof Promise?s.then(i):i(),s},build:L,link:I,unlink:B,Observers:F,Interceptors:P};function ae(e){return!Array.isArray(e)&&"object"==typeof e&&e}function oe(){if(!(ae(this)&&this.window||"undefined"!=typeof window))throw new Error("A window context is required.");const e=ae(this)&&this.window?this.window:window;if(e.WebQit||(e.WebQit={}),!e.WebQit.window){let t,r;Object.defineProperty(e.WebQit,"window",{get:()=>e}),Object.defineProperty(e.WebQit,"vendor",{value:{getName:()=>(t||(t=function(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),r=t&&-1!=e.navigator.userAgent.indexOf("Edg"),n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,s=!!e.document.documentMode,i=!s&&!!e.StyleMedia;return(t||n)&&e.CSS,i?"edge":s?"ie":n?"opera":r?"ie-chromium":t?"chrome":"unknown"}(e)),t),getPrefix:()=>(r||(r=function(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(e)),r)}})}return e.WebQit}class le{constructor(e,t=!0){this.window=e,this.async=t,this.readCallbacks=[],this.writeCallbacks=[],this._run()}_run(){this.window.requestAnimationFrame((()=>{this.readCallbacks.forEach(((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)})),this.writeCallbacks.forEach(((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)})),this._run()}))}onread(e,t=!1){if(t)return new Promise(((t,r)=>{!1===this.async?e(t,r):this.readCallbacks.push((()=>{e(t,r)}))}));!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise(((t,r)=>{!1===this.async?e(t,r):this.writeCallbacks.push((()=>{e(t,r)}))}));!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,r){this.onread((()=>{var n=e(r);if(n){var s=n=>{this.onwrite((()=>{var s=t(n,r);if(s){var i=r=>{this.cycle(e,t,r)};s instanceof Promise?s.then(i):i()}}))};n instanceof Promise?n.then(s):s()}}))}}function ce(e){return e instanceof String||"string"==typeof e&&null!==e}function ue(e){return Array.isArray(e)}function he(e){return arguments.length&&(void 0===e||void 0===e)}function pe(e){return null===e||""===e}function fe(e){return"function"==typeof e}function ge(e){return Array.isArray(e)||"object"==typeof e&&e||fe(e)}function de(e,t=!0){return ue(e)?e:!t&&ae(e)?[e]:!1!==e&&0!==e&&function(e){return pe(e)||he(e)||!1===e||0===e||ge(e)&&!Object.keys(e).length}(e)?[]:function(e){return!ce(e)&&!he(e.length)}(e)?Array.prototype.slice.call(e):ae(e)?Object.values(e):[e]}function me(e){const t=oe.call(this);t.DOM.isDOMReady||"complete"===t.window.document.readyState?e(t.window):(t.window.domReadyCallbacks||(t.window.domReadyCallbacks=[],t.window.document.addEventListener("DOMContentLoaded",(()=>{t.DOM.isDOMReady=!0,t.window.domReadyCallbacks.splice(0).forEach((e=>e(t.window)))}),!1)),t.window.domReadyCallbacks.push(e))}class be{constructor(e){this.window=e}onAdded(e,t,r={}){return r.on="added",this.onPresenceChange(e,((e,r,n,s,i)=>{t(e,r,n,s,i)}),r)}onRemoved(e,t,r={}){return r.on="removed",this.onPresenceChange(e,((e,r,n,s,i)=>{t(e,r,n,s,i)}),r)}onPresent(e,t,r={}){me.call(this.window,(()=>{this.window.MutationObserver&&this.onAdded(e,((e,r)=>{e.forEach((e=>t(e,r)))}),r),ce(e)?de(this.window.document.querySelectorAll(e)).forEach((e=>t(e,1))):e.parentNode&&t(e,1)}))}onAbsent(e,t,r={}){me.call(this.window,(()=>{this.window.MutationObserver&&onRemoved(e,((e,r)=>{e.forEach((e=>t(e,r)))}),r),ce(e)?0===de(this.window.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)}))}onPresenceChange(e,t,r={}){e=de(e,!1);var n=new Set,s=new Set,i=(i,a,o)=>{a&&"removed"===r.on||!a&&"added"===r.on||(i=((e,t)=>(t.$$searchCache||(t.$$searchCache=new Map),e.reduce(((e,n)=>{var s;return t.$$searchCache.has(n)?s=t.$$searchCache.get(n):(s=((e,t)=>{if(t=t.filter((e=>e.matches)),ce(e)){var n=t.filter((t=>t.matches(e)));if(!1!==r.observeIndirectMutation&&(n=t.reduce(((t,r)=>t.concat(de(r.querySelectorAll(e)))),n)).length)return n}else{if(t.includes(e))return[e];if(!1!==r.observeIndirectMutation&&t.length)for(var s=e;s=s.parentNode;)if(t.includes(s))return[e]}})(n,t,ce(n))||[],t.$$searchCache.set(n,s)),e.concat(s)}),[])))(e,i)).length&&(r.maintainCallState?(i.forEach((e=>{a?(n.add(e),s.delete(e)):(n.delete(e),s.add(e))})),t(i,a,o,n,s)):t(i,a,o))},a=r.context||this.window.document.documentElement;return this._observe(a,((e,t,n,s)=>{r.ignoreTransients||(i(e,0,!0),i(e.concat(t),1,!0),i(t,0,!0)),i(s,0),i(n,1)}))}onAttrChange(e,t,r=[]){var n=new this.window.MutationObserver(t),s={attributes:!0,attributeOldValue:!0};return r&&(s.attributeFilter=r),n.observe(e,s),n}onTreeChange(e,t,r=!1){var n=new this.window.MutationObserver(t),s={childList:!0,subtree:r};return n.observe(e,s),n}onMutation(e,t,r){var n=new this.window.MutationObserver(t);return n.observe(e,r),n}_observe(e,t){if(!ve.has(e)){const t=new Set,r=new this.window.MutationObserver((e=>{if(t.size){var r=e.reduce(((e,t)=>e.concat(de(t.addedNodes))),[]),n=e.reduce(((e,t)=>e.concat(de(t.removedNodes))),[]),s=[],i=[];r=new Set(r),n=new Set(n),r.forEach((e=>{n.has(e)&&(n.delete(e),r.delete(e),e.isConnected?s.push(e):i.push(e))})),r=[...r],n=[...n],t.forEach((e=>e(s,i,r,n)))}}));r.observe(e,{childList:!0,subtree:!0}),ve.set(e,{callbacks:t,observer:r})}const r=ve.get(e);return r.callbacks.add(t),{disconnect(){r.callbacks.delete(t)},reconnect(){r.callbacks.add(t)}}}}const ve=new Map;function ye(e,t=null,r=!1){const n=oe.call(this);if(ce(e)){var s;if(e.trim().startsWith("<")){var i=n.window.document.createElement("div");i.innerHTML=e,s=r?de(i.children):i.firstChild}else s=r?de(je.call(this,e,t)):Oe.call(this,e,t);return s}return e instanceof n.window.Element?r?[e]:e:r?de(e):e}function we(e,t=null){return ye.call(this,e,t,!0)}function Oe(e,t=null,r=!1){const n=oe.call(this);t=t||n.window.document;var s,i=r?"querySelectorAll":"querySelector";try{s=t[i](e)}catch(r){try{s=t[i](e.replace(/\:is\(/g,":matches("))}catch(r){try{s=t[i](e.replace(/\:is\(/g,":-webkit-any("))}catch(r){try{s=t[i](e.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return s}function je(e,t=null){return Oe.call(this,e,t,!0)}function Pe(e){return function(e){return e instanceof Number||"number"==typeof e}(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}function Ee(e){return fe(e)||e&&"[object function]"==={}.toString.call(e)}function ke(e,t,r={},n={}){t=de(t).slice();for(var s=e;!he(s)&&!pe(s)&&t.length;){var i=t.shift();if(!(r.get?r.get(s,i):ge(s)?i in s:s[i]))return void(n.exists=!1);s=r.get?r.get(s,i):s[i]}return n.exists=!0,s}function Ce(e,t,r,n={},s={}){const i=(e,r,n)=>s.set?s.set(e,r,n):(Pe(t[o])&&ue(e)?e.push(n):e[r]=n,!0);t=de(t);for(var a=e,o=0;o<t.length;o++){if(!(o<t.length-1))return i(a,t[o],r);if(!a||!ge(a)&&!Ee(a))return!1;var l=ke(a,t[o],s);if(!ge(l)){if(!1===s.buildTree)return!1;if(l=Ee(s.buildTree)?s.buildTree(o):Pe(t[o+1])?[]:{},!i(a,t[o],l))return!1}a=l}}function Se(e,t,r=!1,n={}){t=de(t);var s=!1;do{var i=""===(i=t.pop())?0:i,a=e;t.length&&(a=ke(e,t,{},n)),(ge(a)||Ee(a))&&(n.has?n.has(a,i):i in a)&&(n.deleteProperty?s=n.deleteProperty(a,i):n.del?s=n.del(a,i):(delete a[i],s=!0))}while(s&&r&&t.length&&(ge(a)||Ee(a))&&!(n.keys?n.keys(a):Object.keys(a)).length);return s}function _e(e,t,r={}){var n={};return ke(e,t,r,n),n.exists}function $e(e,t=!1){const r=oe.call(this);var n={};return!(n.el=r.window.document.head.querySelector('meta[name="oohtml"]'))&&t&&(n.el=r.window.document.createElement("meta"),n.el.setAttribute("name",e),r.window.document.head.append(n.el)),n.el&&(n.vars=(n.el.getAttribute("content")||"").split(";").filter((e=>e)).reduce(((e,t)=>{var r=t.split("=").map((e=>e.trim()));return Ce(e,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Pe(r[1])?parseInt(r[1]):r[1])),e}),{})),n.get=function(e){return ke(this.vars,e.split("."))},n.set=function(e,r=null,n=!1){var s=ae(e)?e:{[e]:!0===r?"true":r};if(n=arguments.length<3?r:n,Object.keys(s).forEach((e=>{if(!1===s[e])Se(this.vars,e.split("."));else if(ae(s[e]))Object.keys(s[e]).forEach((t=>{var r=(e+"."+t).split(".");n&&_e(this.vars,r)||Ce(this.vars,r,s[e][t])}));else{var t=e.split(".");n&&_e(this.vars,t)||Ce(this.vars,t,s[e])}})),t){const e=(t,r)=>Object.keys(r).reduce(((n,s)=>{var i=(t?t+".":"")+s;return ae(r[s])?n.push(...e(i,r[s])):n.push(i+"="+r[s]),n}),[]);this.el.setAttribute("content",e("",this.vars).join(";"))}return!0},n.defaults=function(e,t=null){return this.set(e,t,!0)},n}function Me(){const e=oe.call(this);return e.DOM||(e.DOM={},function(e){!function(e){e.CSS||(e.CSS={}),e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})}(e)}(e.window),e.DOM.reflow=new le(e.window),e.DOM.mutations=new be(e.window),e.DOM.meta=$e.bind(e.window),e.DOM.query=ye.bind(e.window),e.DOM.queryAll=we.bind(e.window),e.DOM.ready=me.bind(e.window)),e}const xe=function(e,t=1,n=!0){return!a(t)||t<=0?e:(!r(e)&&o(e)&&n&&(e=Object.values(e)),r(e)?e.reduce(((e,s)=>r(s)||o(s)&&n?e.concat(xe(r(s)?s:Object.values(s),t-1,n)):e.concat(s)),[]):e)},De=xe;function Ae(e){return o(e)&&Object.getPrototypeOf(e)===Object.prototype}function Te(e){return!0===e||!1===e}const Ne=function(e,t,n=!0,a=1){if(r(e)&&r(t)&&e.length!==t.length)return!n;if(o(e)&&o(t)){var l=Object.keys(e),u=Object.keys(t);if(!l.length&&!u.length)return Ae(e)&&Ae(t)?n:e===t===n;if(!Ne(l,u))return!n}if(a>0&&(r(e)&&r(t)||o(e)&&o(t))){var h=function(e,t,n=!0,s=!0,i=!1,a=!1){if(r(e)&&r(t)){var l=[],u=!0;return e.forEach((e=>{if(u){var h=!1;O(t,((t,i)=>{(!h||s&&c(e))&&((r(h=n(e,i))&&!h.length||o(h)&&!Object.keys(h).length)&&(h=!1),c(h)&&s&&(e=h))})),c(h)?l.push(s?h:e):Te(h)?i&&!h||!i&&h?l.push(e):a&&(u=!1):l.push(h)}})),l}if(o(e)&&o(t))return l={},u=!0,Object.keys(e).forEach((h=>{if(u){var p=n(e[h],t[h]);(r(p)&&!p.length||o(p)&&!Object.keys(p).length)&&(p=!1),c(p)?l[h]=s?p:e[h]:Te(p)?i&&!p||!i&&p?l[h]=e[h]:a&&(u=!1):l[h]=p}})),l}(e,t,((e,t)=>Ne(e,t,n,a-1)),!1,!1,!0);return r(h)?h.length===e.length&&h.length===t.length:o(h)&&o(e)?Object.keys(h).length===Object.keys(e).length&&Object.keys(h).length===Object.keys(t).length:h}return s(n)?n(e,t):i(e)&&i(t)&&isNaN(e)&&isNaN(t)?n:e===t===n},Fe=Ne;function Re(e,t=[]){return W([{},e],((e,n,i)=>{if(!s(i[e]))return s(t)?t(e):!r(t)||!t.length||t.indexOf(e)>-1}),!1,!1,!1)}class We{static lex(e,t,r={}){if(!l(e+=""))throw new Error("Argument1 must be a string!");var n=e=>({delims:e.delims.slice(),options:Re(e.options),nesting:e.nesting.slice(),maxDepth:e.maxDepth,comments:e.comments.slice(),tokens:e.tokens.slice(),matches:e.matches.slice(),matchesi:Re(e.matchesi)});if(We.$cache[e]&&!1!==r.cache)for(var s=0;s<We.$cache[e].length;s++){var i=We.$cache[e][s];if(Fe(i.delims,t))return n(i)}var a=new We(e,r).lex(t);return!1!==r.cache&&(We.$cache[e]=We.$cache[e]||[],We.$cache[e].push(a)),n(a)}static split(e,t,r){return We.lex(e,t,r).tokens}static match(e,t,r){return We.lex(e,t,r).matches}constructor(e,t){if(!l(e))throw new Error("Lexer requires the first argument to be a string.");this.$str=e,this.$options=t||{},this.$options.blocks||(this.$options.blocks=We.$blocks),this.$options.quotes||(this.$options.quotes=We.$quotes),this.$options.comments||(this.$options.comments=We.$comments)}lex(e,t){for(var r={delims:h(e),options:q(!0,{},this.$options,t||{}),nesting:[],maxDepth:0,comments:[],tokens:[],matches:[],matchesi:{}},n=0;"number"==typeof n;)n=this._evalCharsAt(r,n);if(r.nesting.length)throw new Error("Error parsing the string: "+this.$str+". Unterminated blocks: "+De(r.nesting).join(", "));return r}_evalCharsAt(e,t){if(!(t>=this.$str.length)){var r=1,n={},s={},i={};if(e.openComment||(s=this._testQuotes(e,t)),e.openQuote||(n=this._testComments(e,t)),e.openComment||n.ending)e.nesting.length||i.ending?this._push(e,this.$str[t]):(r=(o=n.starting||n.ending||this.$str[t]).length,this._push(e,o,"comments",n.starting));else if(e.openQuote||s.ending)this._push(e,this.$str[t]);else{if(e.options.limit&&e.matches.length===e.options.limit)return this._push(e,this.$str[t]),t+1;i=this._testNesting(e,t),i=this._testNesting(e,t);var a=this._testChars(e.options.stopChars||[],e,t);if(!e.nesting.length&&!1!==a)return e.options.stopChar=a,void(e.options.stopCharForward=this.$str.substr(t));if(e.delims.length)if(e.nesting.length||i.ending){var o;r=(o=i.starting||i.ending||this.$str[t]).length,this._push(e,o)}else{this._push(e,"");var l=this._testChars(e.delims,e,t);if(!1!==l&&(e.matches.push(l),e.matchesi[t]=l,r=l.length||1,!e.options.preserveDelims)){var c=t+(l.length||1);return c===this.$str.length&&this._push(e,""),c}this._push(e,l||this.$str[t])}else 2===e.nesting.length&&i.starting?(e.matches.push(null),this._push(e,i.starting),r=i.starting.length):!e.nesting.length&&i.ending?(this._push(e,i.ending),r=i.ending.length,e.matches.push(null)):this._push(e,this.$str[t])}return t+r}}_testQuotes(e,t){var r={};return(e.options.quotes||[]).forEach((n=>{this.$str.substr(t,1)===n&&(e.openQuote?n===e.openQuote&&(e.openQuote=!1,r.ending=n):(e.openQuote=n,r.starting=n))})),r}_testComments(e,t){var r={};return(e.options.comments||[]).forEach((n=>{if(e.openComment){if($(n)===$(e.openComment)){var s=$(n);this.$str.substr(t).startsWith(s)&&(e.openComment=!1,r.ending=s)}}else{var i=_(n);this.$str.substr(t).startsWith(i)&&(e.openComment=n,r.starting=i)}})),r}_testNesting(e,t){var r={};return(e.options.blocks||[]).forEach((n=>{var s=_(n);if(this.$str.substr(t).startsWith(s))e.nesting=e.nesting.concat([n]),r.starting=s;else if(e.nesting.length&&$(n)===$($(e.nesting))){var i=$(n);this.$str.substr(t).startsWith(i)&&(e.nesting=e.nesting.slice(0,-1),r.ending=i)}})),e.maxDepth=Math.max(e.maxDepth,e.nesting.length),r}_testChars(e,t,r){for(var n=0;n<e.length;n++){var i=e[n];if(s(i)){var a=i(this.$str.substr(0,r),this.$str.substr(r),t.tokens.slice());if(!1!==a)return a}if(t.options.useRegex){var o=this.$str.substr(r).match(new RegExp("^"+i,!0!==t.options.useRegex?t.options.useRegex:""));if(o)return o[0]}if(!t.options.ci&&this.$str.substr(r,i.length)===i||t.options.ci&&this.$str.substr(r,i.length).toLowerCase()===i.toLowerCase())return i}return!1}_push(e,t,r="tokens",n=!1){var s=e.matches.length;if(u(e.tokens[s])&&(e.tokens[s]=""),"comments"===r){e.tokens[s].comments||(e.tokens[s]=new String(e.tokens[s]),e.tokens[s].comments=[]);var i=e.tokens[s].comments.length-(!e.tokens[s].comments.length||n?0:1);e.tokens[s].comments[i]=(e.tokens[s].comments[i]||"")+t}else e.tokens[s].comments,e.tokens[s]=e.tokens[s]+t}split(e,t,r){return this.lex(t,r).tokens}match(e,t,r){return this.lex(t,r).matches}regParse(e,t){return this.lex(e,q({useRegex:!0},t||{}))}regSplit(e,t){return this.regParse(e,t).tokens}regMatch(e,t){return this.regParse(e,t).matches}}function qe(e,t={}){const r=Me.call(this);return r.OOHTML||(r.OOHTML={}),r.OOHTML.meta||(r.OOHTML.meta=r.DOM.meta("oohtml",!0)),r.OOHTML.meta.defaults(q(3,e,t)),r.OOHTML.meta}We.$blocks=[["(",")"],["[","]"],["{","}"]],We.$quotes=['"',"'","`"],We.$comments=[["/*","*/"],["//","\n"]],We.$cache=Object.create(null),function e(r=null,n=!1){const s=Me.call(this);if(n)return void s.DOM.ready((()=>{e.call(this,r,!1)}));const i=s.window,a=s.window.document,o=s.DOM.mutations,c=[],u=qe.call(this,{attr:{namespace:"namespace",id:"id"},api:{namespace:"namespace"},eagermode:!0},r),p=function(e){if(!t(e,"oohtml").has("namespace")){const r=Object.create(null);t(e,"oohtml").set("namespace",r),ie.link&&ie.link(e,u.get("api.namespace"),r)}return t(e,"oohtml").get("namespace")},f=function(e){if(!t(e,"oohtml").has("publicNamespace")){const r=p(e);t(e,"oohtml").set("publicNamespace",u.get("eagermode")?new Proxy(r,{get(t,n){if(l(n)&&!r[n]){var s=h(e.querySelectorAll("["+i.CSS.escape(u.get("attr.id"))+'="'+n+'"]')).filter((t=>{var r=t.parentNode.closest("["+i.CSS.escape(u.get("attr.namespace"))+"]");return e===a?!r:r===e}))[0];s&&ie.set(r,n,s)}return r[n]}}):r)}return t(e,"oohtml").get("publicNamespace")};if(u.get("api.namespace")in i.Element.prototype)throw new Error('The "Element" class already has a "'+u.get("api.namespace")+'" property!');if(Object.defineProperty(i.Element.prototype,u.get("api.namespace"),{get:function(){return f(this)}}),u.get("api.namespace")in a)throw new Error('The "document" object already has a "'+u.get("api.namespace")+'" property!');Object.defineProperty(a,u.get("api.namespace"),{get:function(){return f(a)}}),o.onPresent("["+i.CSS.escape(u.get("attr.id"))+"]",(e=>{var r=t(e,"oohtml");if(!r.get("idAlreadyBeingWatched")&&!M(c,(t=>e.closest(t)))){var n=e.getAttribute(u.get("attr.id")),s=e.parentNode.closest("["+i.CSS.escape(u.get("attr.namespace"))+"]");s||(s=a);var l=p(s);l[n]!==e&&ie.set(l,n,e),r.set("idAlreadyBeingWatched",!0),o.onPresenceChange(e,((t,r)=>{r?l[n]!==e&&ie.set(l,n,e):l[n]===e&&ie.deleteProperty(l,n)}))}}))}.call(window)})();
//# sourceMappingURL=namespaced-html.js.map