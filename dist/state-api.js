!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=57)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return h})),r.d(t,"d",(function(){return p})),r.d(t,"c",(function(){return w}));var n=r(7),a=r(6),o=r(20),i=r(1),c=(r(19),r(3)),s=r(9),u=r(2),l=r(11),d=r(21),f=function(e,t,r={},n={}){t=Object(u.a)(t).slice();for(var a=e;!Object(l.a)(a)&&!Object(d.a)(a)&&t.length;){var o=t.shift();if(!(r.get?r.get(a,o):Object(c.a)(a)?o in a:a[o]))return void(n.exists=!1);a=r.get?r.get(a,o):a[o]}return n.exists=!0,a},b=function(e,t,r,a={},o={}){const l=(e,r,a)=>o.set?o.set(e,r,a):(Object(n.a)(t[b])&&Object(i.a)(e)?e.push(a):e[r]=a,!0);t=Object(u.a)(t);for(var d=e,b=0;b<t.length;b++){if(!(b<t.length-1))return l(d,t[b],r);if(!d||!Object(c.a)(d)&&!Object(s.a)(d))return!1;var O=f(d,t[b],o);if(!Object(c.a)(O)){if(!1===o.buildTree)return!1;if(O=Object(s.a)(o.buildTree)?o.buildTree(b):Object(n.a)(t[b+1])?[]:{},!l(d,t[b],O))return!1}d=O}};async function O(e,t=null){await w.call(this);return this.window.WQ.OOHTML.META=Object(o.a)(3,e,t||{},this.window.WQ.OOHTML.META),this.window.WQ.OOHTML.META}function h(e){var t,r=Symbol.for(".oohtml");return(t=e[r])||(t={},Object.defineProperty(e,r,{value:t,enumerable:!1})),t}function p(){const e=this;return{getVal:(t,r)=>e.Observer?e.Observer.get(t,r):t[r],delVal:(t,r)=>e.Observer?e.Observer.deleteProperty(t,r):(delete t[r],!0),setVal:(t,r,n)=>(e.Observer?e.Observer.set(t,r,n):t[r]=n,t),mergeVal:(t,r)=>(e.Observer?e.Observer.set(t,r):Object.keys(r).forEach(e=>{t[e]=r[e]}),t)}}async function w(e,t=null,r=!0){const i=this;if(i.window.WQ.OOHTML.META||(await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))&&(i.window.WQ.OOHTML.META=(i.window.WQ.OOHTML.METATag.getAttribute("content")||"").split(";").filter(e=>e).reduce((e,t)=>{var r=t.split("=").map(e=>e.trim());return b(e,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Object(n.a)(r[1])?parseInt(r[1]):r[1])),e},{}))),Object(a.a)(e)||arguments.length>1){if(Object(a.a)(e)?r=t:e={[e]:!0===t?"true":t},i.window.WQ.OOHTML.META||(i.window.WQ.OOHTML.META={}),Object.keys(e).forEach(t=>{!1===e[t]?delete i.window.WQ.OOHTML.META[t]:Object(a.a)(e[t])?Object(o.a)(3,i.window.WQ.OOHTML.META,e[t]):i.window.WQ.OOHTML.META[t]=e[t]}),r){const e=(t,r)=>Object.keys(r).reduce((n,o)=>{var i=(t?t+".":"")+o;return Object(a.a)(r[o])?n.push(...e(i,r[o])):n.push(i+"="+r[o]),n},[]);await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))||(i.window.WQ.OOHTML.METATag=i.window.document.createElement("meta"),i.window.WQ.OOHTML.METATag.setAttribute("name","oohtml"),i.window.document.head.append(i.window.WQ.OOHTML.METATag)),i.window.WQ.OOHTML.METATag.setAttribute("content",e("",i.window.WQ.OOHTML.META).join(";"))}return!0}return arguments.length?i.window.WQ.OOHTML.META?i.window.WQ.OOHTML.META[e]:void 0:i.window.WQ.OOHTML.META}},function(e,t,r){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,r){"use strict";var n=r(1),a=r(8),o=r(11),i=r(14),c=r(6);t.a=function(e,t=!0){return Object(n.a)(e)?e:!t&&Object(c.a)(e)?[e]:!1!==e&&0!==e&&Object(i.a)(e)?[]:function(e){return!Object(a.a)(e)&&!Object(o.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(c.a)(e)?Object.values(e):[e]}},function(e,t,r){"use strict";var n=r(18);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(n.a)(e)}},,,function(e,t,r){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,r){"use strict";var n=r(32);t.a=function(e){return Object(n.a)(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,r){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},function(e,t,r){"use strict";var n=r(18);t.a=function(e){return Object(n.a)(e)||e&&"[object function]"==={}.toString.call(e)}},,function(e,t,r){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},,,function(e,t,r){"use strict";var n=r(21),a=r(11),o=r(3);t.a=function(e){return Object(n.a)(e)||Object(a.a)(e)||!1===e||0===e||Object(o.a)(e)&&!Object.keys(e).length}},,,,function(e,t,r){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(1),a=r(9),o=r(6),i=r(3),c=r(7),s=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(n.a)(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(r,...Object.getOwnPropertyNames(e))}),r};function u(e,t,r=!1,l=!1,d=!1){var f=0,b=e.shift();if((Object(c.a)(b)||!0===b||!1===b)&&(f=b,b=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,O)=>{(Object(i.a)(e)||Object(a.a)(e))&&(r?s(e):Object.getOwnPropertyNames(e)).forEach(a=>{if(t(a,b,e,O)){var i=b[a],s=e[a];if((Object(n.a)(i)&&Object(n.a)(s)||Object(o.a)(i)&&Object(o.a)(s))&&(!0===f||f>0))b[a]=Object(n.a)(i)&&Object(n.a)(s)?[]:{},u([Object(c.a)(f)?f-1:f,b[a],i,s],t,r,l,d);else if(Object(n.a)(b)&&Object(n.a)(e))l?b[a]=s:b.push(s);else try{d?Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(e,a)):b[a]=e[a]}catch(e){}}})}),b}},function(e,t,r){"use strict";var n=r(19);t.a=function(...e){return Object(n.a)(e,(e,t,r)=>!0,!1,!1,!1)}},function(e,t,r){"use strict";t.a=function(e){return null===e||""===e}},,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(33);r(28);var a=r(8),o=r(26),i=r(2);const c=new Map;var s=function(e){!function(e){e.CSS||(e.CSS={});e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e.window),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})}(e.window),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e.window)};function u(e,t,r=null,n=!1){r=r||e.document;var a,o=n?"querySelectorAll":"querySelector";try{a=r[o](t)}catch(e){try{a=r[o](t.replace(/\:is\(/g,":matches("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-webkit-any("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return a}function l(e,t={}){if(e.WQ&&e.WQ.DOM)return e.WQ.DOM;const r=n.a.create(e,"DOM",t);return r.ready=new Promise(t=>{e.document.addEventListener("DOMContentLoaded",()=>t(e),!1),"complete"===e.document.readyState&&t(e)}),r.el=t=>function(e,t){if(Object(a.a)(t)){var r;if(t.trim().startsWith("<")){var n=e.document.createElement("div");n.innerHtml=t,r=n.firstChild}else r=u(e,t);return r}return t}(e,t),s(r),class{static init(e){e.Reflow||(e.Reflow=new this(e),e.Reflow._run())}constructor(e){this.Ctxt=e,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)}),this.writeCallbacks.forEach((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)}),this._run()})}onread(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.readCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.writeCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,r){this.onread(()=>{var n=e(r);if(n){var a=n=>{this.onwrite(()=>{var a=t(n,r);if(a){var o=r=>{this.cycle(e,t,r)};a instanceof Promise?a.then(o):o()}})};n instanceof Promise?n.then(a):a()}})}}.init(r),class{static init(e){e.Mutation||(e.Mutation=new this(e))}constructor(e){this.Ctxt=e}onAdded(e,t,r={}){return r.on="added",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onRemoved(e,t,r={}){return r.on="removed",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onPresent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&this.onAdded(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?Object(i.a)(n.document.querySelectorAll(e)).forEach(e=>t(e,1)):e.parentNode&&t(e,1)})}onAbsent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&onRemoved(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?0===Object(i.a)(n.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)})}onPresenceChange(e,t,r={}){e=Object(i.a)(e,!1);var n=(e,t)=>{if(t=t.filter(e=>e.matches),Object(a.a)(e)){var n=t.filter(t=>t.matches(e));if(!1!==r.observeIndirectMutation&&(n=t.reduce((t,r)=>t.concat(Object(i.a)(r.querySelectorAll(e))),n)).length)return n}else{if(t.includes(e))return[e];if(!1!==r.observeIndirectMutation&&t.length)for(var o=e;o=o.parentNode;)if(t.includes(o))return[e]}},c=[],s=[],u=r.context||this.Ctxt.window.document.documentElement,l=this._observe(u,u=>{if(!r.on||"added"===r.on){var d=[];if(e.forEach(e=>{if(Object(a.a)(e))d=u.reduce((t,r)=>t.concat(n(e,Object(i.a)(r.addedNodes))||[]),d);else{var t=u.reduce((t,r)=>t||(n(e,Object(i.a)(r.addedNodes))||[])[0],null);t&&d.push(t)}}),d.length)if(r.onceEach){var f=Object(o.a)(d,c);f.length&&(c.push(...f),t(f,1))}else r.once&&l.disconnect(),t(d,1)}if(!r.on||"removed"===r.on){var b=[];if(e.forEach(e=>{if(Object(a.a)(e))b=u.reduce((t,r)=>t.concat(n(e,Object(i.a)(r.removedNodes))||[]),b);else{var t=u.reduce((t,r)=>t||(n(e,Object(i.a)(r.removedNodes))||[])[0],null);t&&b.push(t)}}),b.length)if(r.onceEach){var O=Object(o.a)(b,s);O.length&&(s.push(...O),t(O,0))}else r.once&&l.disconnect(),t(b,0)}});return l}onAttrChange(e,t,r=[]){var n=new this.Ctxt.window.MutationObserver(t),a={attributes:!0,attributeOldValue:!0};return r&&(a.attributeFilter=r),n.observe(e,a),n}onTreeChange(e,t,r=!1){var n=new this.Ctxt.window.MutationObserver(t),a={childList:!0,subtree:r};return n.observe(e,a),n}onMutation(e,t,r){var n=new this.Ctxt.window.MutationObserver(t);return n.observe(e,r),n}_observe(e,t){if(!c.has(e)){const t=[],r=new this.Ctxt.window.MutationObserver(e=>{t.forEach(t=>t(e))});r.observe(e,{childList:!0,subtree:!0}),c.set(e,{callbacks:t,observer:r})}const r=c.get(e);return r.callbacks.push(t),{disconnect(){r.callbacks=r.callbacks.filter(e=>e!==t)}}}}.init(r),r}},function(e,t,r){"use strict";var n=r(1);t.a=function(e,t,r=null){return Object(n.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]}},,function(e,t,r){"use strict";var n=r(3),a=r(7);t.a=function(e,t){var r=void 0;return Object(n.a)(e)&&Object.keys(e).forEach((n,o)=>{!1!==r&&(r=t(Object(a.a)(n)?parseFloat(n):n,e[n],o))}),r}},,,,function(e,t,r){"use strict";t.a=function(e){return e instanceof Number||"number"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(14);class a{static create(e,t=null,r={}){if(e.WQ||(e.WQ={}),e.WQ.window){if(!t&&!Object(n.a)(r)&&e.WQ.params!==r)throw new Error("Window has already been initialized with a different parans object.")}else{let n,a,o=t?{}:r;Object.defineProperty(e.WQ,"window",{get:()=>e}),Object.defineProperty(e.WQ,"params",{get:()=>o}),Object.defineProperty(e.WQ,"vendor",{get:()=>(n||(n=function(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),r=t&&-1!=e.navigator.userAgent.indexOf("Edg"),n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,a=!!e.document.documentMode,o=!a&&!!e.StyleMedia;return(t||n)&&e.CSS,o?"edge":a?"ie":n?"opera":r?"ie-chromium":t?"chrome":"unknown"}(e)),n)}),Object.defineProperty(e.WQ,"prefix",{get:()=>(a||(a=function(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(e)),a)})}if(t){if(e.WQ[t]){if(!Object(n.a)(r)&&e.WQ[t].params!==r)throw new Error('"'+t+'" has already been initialized with a different parans object.')}else e.WQ[t]={get params(){return r}},Object.setPrototypeOf(e.WQ[t],e.WQ);return e.WQ[t]}return e.WQ}}},,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(25),a=r(0);async function o(e,t=null){const r=Object(n.a)(e),o=a.d.call(r),i=await a.a.call(r,{api:{state:"state",setState:"setState",clearState:"clearState"}},t),c=function(e,t=null){if(!Object(a.b)(e).state||t){const n=t||{},o=Object(a.b)(e).state;if(Object(a.b)(e).state=n,o&&r.Observer.unlink&&r.Observer.unlink(e,i.api.state,o),r.Observer.link){let a=t?{isUpdate:!!o,oldValue:o}:null;r.Observer.link(e,i.api.state,n,a)}}return Object(a.b)(e).state};if(i.api.state in r.window.Element.prototype)throw new Error('The "Element" class already has a "'+i.api.state+'" property!');if(Object.defineProperty(r.window.Element.prototype,i.api.state,{get:function(){return r.Observer.proxy(c(this))}}),i.api.setState in r.window.Element.prototype)throw new Error('The "Element" class already has a "'+i.api.setState+'" property!');if(Object.defineProperty(r.window.Element.prototype,i.api.setState,{value:function(e,t={}){t.update?o.mergeVal(c(this),e):c(this,e)}}),i.api.clearState in r.window.Element.prototype)throw new Error('The "Element" class already has a "'+i.api.clearState+'" property!');if(Object.defineProperty(r.window.Element.prototype,i.api.clearState,{value:function(){c(this,{})}}),i.api.state in r.window.document)throw new Error('The "document" object already has a "'+i.api.state+'" property!');if(Object.defineProperty(r.window.document,i.api.state,{get:function(){return r.Observer.proxy(c(r.window.document))}}),i.api.setState in r.window.document)throw new Error('The "document" object already has a "'+i.api.setState+'" property!');if(Object.defineProperty(r.window.document,i.api.setState,{value:function(e,t={}){t.update?o.mergeVal(c(r.window.document),e):c(r.window.document,e)}}),i.api.clearState in r.window.document)throw new Error('The "document" object already has a "'+i.api.clearState+'" property!');Object.defineProperty(r.window.document,i.api.clearState,{value:function(){c(r.window.document,{})}})}},,,,function(e,t,r){"use strict";r.r(t);var n=r(53);Object(n.a)(window)}]);
//# sourceMappingURL=state-api.js.map