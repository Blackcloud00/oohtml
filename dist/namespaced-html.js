!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=55)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return h}));var r=n(7),a=n(6),o=n(19),i=n(1),c=(n(18),n(3)),s=n(9),u=n(2),l=n(30),d=function(e,t,n,a={},o={}){const d=(e,n,a)=>o.set?o.set(e,n,a):(Object(r.a)(t[O])&&Object(i.a)(e)?e.push(a):e[n]=a,!0);t=Object(u.a)(t);for(var f=e,O=0;O<t.length;O++){if(!(O<t.length-1))return d(f,t[O],n);if(!f||!Object(c.a)(f)&&!Object(s.a)(f))return!1;var b=Object(l.a)(f,t[O],o);if(!Object(c.a)(b)){if(!1===o.buildTree)return!1;if(b=Object(s.a)(o.buildTree)?o.buildTree(O):Object(r.a)(t[O+1])?[]:{},!d(f,t[O],b))return!1}f=b}};async function f(e,t=null){await h.call(this);return this.window.WQ.OOHTML.META=Object(o.a)(3,e,t||{},this.window.WQ.OOHTML.META),this.window.WQ.OOHTML.META}function O(e){var t,n=Symbol.for(".oohtml");return(t=e[n])||(t={},Object.defineProperty(e,n,{value:t,enumerable:!1})),t}function b(){const e=this;return{getVal:(t,n)=>e.Observer?e.Observer.get(t,n):t[n],delVal:(t,n)=>e.Observer?e.Observer.deleteProperty(t,n):(delete t[n],!0),setVal:(t,n,r)=>(e.Observer?e.Observer.set(t,n,r):t[n]=r,t),mergeVal:(t,n)=>(e.Observer?e.Observer.set(t,n):Object.keys(n).forEach(e=>{t[e]=n[e]}),t)}}async function h(e,t=null,n=!0){const i=this;if(i.window.WQ.OOHTML.META||(await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))&&(i.window.WQ.OOHTML.META=(i.window.WQ.OOHTML.METATag.getAttribute("content")||"").split(";").filter(e=>e).reduce((e,t)=>{var n=t.split("=").map(e=>e.trim());return d(e,n[0].split("."),"true"===n[1]||"false"!==n[1]&&(Object(r.a)(n[1])?parseInt(n[1]):n[1])),e},{}))),Object(a.a)(e)||arguments.length>1){if(Object(a.a)(e)?n=t:e={[e]:!0===t?"true":t},i.window.WQ.OOHTML.META||(i.window.WQ.OOHTML.META={}),Object.keys(e).forEach(t=>{!1===e[t]?delete i.window.WQ.OOHTML.META[t]:Object(a.a)(e[t])?Object(o.a)(3,i.window.WQ.OOHTML.META,e[t]):i.window.WQ.OOHTML.META[t]=e[t]}),n){const e=(t,n)=>Object.keys(n).reduce((r,o)=>{var i=(t?t+".":"")+o;return Object(a.a)(n[o])?r.push(...e(i,n[o])):r.push(i+"="+n[o]),r},[]);await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))||(i.window.WQ.OOHTML.METATag=i.window.document.createElement("meta"),i.window.WQ.OOHTML.METATag.setAttribute("name","oohtml"),i.window.document.head.append(i.window.WQ.OOHTML.METATag)),i.window.WQ.OOHTML.METATag.setAttribute("content",e("",i.window.WQ.OOHTML.META).join(";"))}return!0}return arguments.length?i.window.WQ.OOHTML.META?i.window.WQ.OOHTML.META[e]:void 0:i.window.WQ.OOHTML.META}},function(e,t,n){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,n){"use strict";var r=n(1),a=n(8),o=n(11),i=n(14),c=n(6);t.a=function(e,t=!0){return Object(r.a)(e)?e:!t&&Object(c.a)(e)?[e]:!1!==e&&0!==e&&Object(i.a)(e)?[]:function(e){return!Object(a.a)(e)&&!Object(o.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(c.a)(e)?Object.values(e):[e]}},function(e,t,n){"use strict";var r=n(17);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(r.a)(e)}},,,function(e,t,n){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,n){"use strict";var r=n(32);t.a=function(e){return Object(r.a)(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,n){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},function(e,t,n){"use strict";var r=n(17);t.a=function(e){return Object(r.a)(e)||e&&"[object function]"==={}.toString.call(e)}},,function(e,t,n){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},,,function(e,t,n){"use strict";var r=n(20),a=n(11),o=n(3);t.a=function(e){return Object(r.a)(e)||Object(a.a)(e)||!1===e||0===e||Object(o.a)(e)&&!Object.keys(e).length}},,,function(e,t,n){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(1),a=n(9),o=n(6),i=n(3),c=n(7),s=function(e,t){var n=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(r.a)(t)?[t]:t;var n=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)n.push(e),e=e?Object.getPrototypeOf(e):null;return n}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(n,...Object.getOwnPropertyNames(e))}),n};function u(e,t,n=!1,l=!1,d=!1){var f=0,O=e.shift();if((Object(c.a)(O)||!0===O||!1===O)&&(f=O,O=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,b)=>{(Object(i.a)(e)||Object(a.a)(e))&&(n?s(e):Object.getOwnPropertyNames(e)).forEach(a=>{if(t(a,O,e,b)){var i=O[a],s=e[a];if((Object(r.a)(i)&&Object(r.a)(s)||Object(o.a)(i)&&Object(o.a)(s))&&(!0===f||f>0))O[a]=Object(r.a)(i)&&Object(r.a)(s)?[]:{},u([Object(c.a)(f)?f-1:f,O[a],i,s],t,n,l,d);else if(Object(r.a)(O)&&Object(r.a)(e))l?O[a]=s:O.push(s);else try{d?Object.defineProperty(O,a,Object.getOwnPropertyDescriptor(e,a)):O[a]=e[a]}catch(e){}}})}),O}},function(e,t,n){"use strict";var r=n(18);t.a=function(...e){return Object(r.a)(e,(e,t,n)=>!0,!1,!1,!1)}},function(e,t,n){"use strict";t.a=function(e){return null===e||""===e}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(33);n(27);var a=n(8),o=n(1),i=function(e,t,n=null){return Object(o.a)(t)?e.filter(e=>n?t.filter(t=>n(e,t)).length:-1===t.indexOf(e)):[]},c=n(2);var s=function(e){!function(e){e.CSS||(e.CSS={});e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e.window),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})}(e.window),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e.window)};function u(e,t,n=null,r=!1){n=n||e.document;var a,o=r?"querySelectorAll":"querySelector";try{a=n[o](t)}catch(e){try{a=n[o](t.replace(/\:is\(/g,":matches("))}catch(e){try{a=n[o](t.replace(/\:is\(/g,":-webkit-any("))}catch(e){try{a=n[o](t.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return a}function l(e,t={}){if(e.WQ&&e.WQ.DOM)return e.WQ.DOM;const n=r.a.create(e,"DOM",t);return n.ready=new Promise(t=>{e.document.addEventListener("DOMContentLoaded",()=>t(e),!1),"complete"===e.document.readyState&&t(e)}),n.el=t=>function(e,t){if(Object(a.a)(t)){var n;if(t.trim().startsWith("<")){var r=e.document.createElement("div");r.innerHtml=t,n=r.firstChild}else n=u(e,t);return n}return t}(e,t),s(n),class{static init(e){e.Reflow||(e.Reflow=new this(e),e.Reflow._run())}constructor(e){this.Ctxt=e,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)}),this.writeCallbacks.forEach((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)}),this._run()})}onread(e,t=!1){if(t)return new Promise((t,n)=>{!1===this.async?e(t,n):this.readCallbacks.push(()=>{e(t,n)})});!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise((t,n)=>{!1===this.async?e(t,n):this.writeCallbacks.push(()=>{e(t,n)})});!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,n){this.onread(()=>{var r=e(n);if(r){var a=r=>{this.onwrite(()=>{var a=t(r,n);if(a){var o=n=>{this.cycle(e,t,n)};a instanceof Promise?a.then(o):o()}})};r instanceof Promise?r.then(a):a()}})}}.init(n),class{static init(e){e.Mutation||(e.Mutation=new this(e))}constructor(e){this.Ctxt=e}onAdded(e,t,n={}){return n.on="added",this.onPresenceChange(e,(e,n)=>{t(e,n)},n)}onRemoved(e,t,n={}){return n.on="removed",this.onPresenceChange(e,(e,n)=>{t(e,n)},n)}onPresent(e,t,n={}){this.Ctxt.ready.then(r=>{r.MutationObserver&&this.onAdded(e,(e,n)=>{e.forEach(e=>t(e,n))},n),Object(a.a)(e)?Object(c.a)(r.document.querySelectorAll(e)).forEach(e=>t(e,1)):e.parentNode&&t(e,1)})}onAbsent(e,t,n={}){this.Ctxt.ready.then(r=>{r.MutationObserver&&onRemoved(e,(e,n)=>{e.forEach(e=>t(e,n))},n),Object(a.a)(e)?0===Object(c.a)(r.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)})}onPresenceChange(e,t,n={}){e=Object(c.a)(e,!1);var r=(e,t)=>{if(t=t.filter(e=>e.matches),Object(a.a)(e)){var r=t.filter(t=>t.matches(e));if(!1!==n.observeIndirectMutation&&(r=t.reduce((t,n)=>t.concat(Object(c.a)(n.querySelectorAll(e))),r)).length)return r}else{if(t.includes(e))return[e];if(!1!==n.observeIndirectMutation&&t.length)for(var o=e;o=o.parentNode;)if(t.includes(o))return[e]}},o=[],s=[],u=n.context||this.Ctxt.window.document.documentElement,l=new this.Ctxt.window.MutationObserver(u=>{if(!n.on||"added"===n.on){var d=[];if(e.forEach(e=>{if(Object(a.a)(e))d=u.reduce((t,n)=>t.concat(r(e,Object(c.a)(n.addedNodes))||[]),d);else{var t=u.reduce((t,n)=>t||(r(e,Object(c.a)(n.addedNodes))||[])[0],null);t&&d.push(t)}}),d.length)if(n.onceEach){var f=i(d,o);f.length&&(o.push(...f),t(f,1))}else n.once&&l.disconnect(),t(d,1)}if(!n.on||"removed"===n.on){var O=[];if(e.forEach(e=>{if(Object(a.a)(e))O=u.reduce((t,n)=>t.concat(r(e,Object(c.a)(n.removedNodes))||[]),O);else{var t=u.reduce((t,n)=>t||(r(e,Object(c.a)(n.removedNodes))||[])[0],null);t&&O.push(t)}}),O.length)if(n.onceEach){var b=i(O,s);b.length&&(s.push(...b),t(b,0))}else n.once&&l.disconnect(),t(O,0)}});return l.observe(u,{childList:!0,subtree:!0}),l}onAttrChange(e,t,n=[]){var r=new this.Ctxt.window.MutationObserver(t),a={attributes:!0,attributeOldValue:!0};return n&&(a.attributeFilter=n),r.observe(e,a),r}onTreeChange(e,t,n=!1){var r=new this.Ctxt.window.MutationObserver(t),a={childList:!0,subtree:n};return r.observe(e,a),r}onMutation(e,t,n){var r=new this.Ctxt.window.MutationObserver(t);return r.observe(e,n),r}}.init(n),n}},,function(e,t,n){"use strict";var r=n(3),a=n(7);t.a=function(e,t){var n=void 0;return Object(r.a)(e)&&Object.keys(e).forEach((r,o)=>{!1!==n&&(n=t(Object(a.a)(r)?parseFloat(r):r,e[r],o))}),n}},,,function(e,t,n){"use strict";var r=n(3),a=n(11),o=n(20),i=n(2);t.a=function(e,t,n={},c={}){t=Object(i.a)(t).slice();for(var s=e;!Object(a.a)(s)&&!Object(o.a)(s)&&t.length;){var u=t.shift();if(!(n.get?n.get(s,u):Object(r.a)(s)?u in s:s[u]))return void(c.exists=!1);s=n.get?n.get(s,u):s[u]}return c.exists=!0,s}},,function(e,t,n){"use strict";t.a=function(e){return e instanceof Number||"number"==typeof e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(14);class a{static create(e,t=null,n={}){if(e.WQ||(e.WQ={}),e.WQ.window){if(!t&&!Object(r.a)(n)&&e.WQ.params!==n)throw new Error("Window has already been initialized with a different parans object.")}else{let r,a,o=t?{}:n;Object.defineProperty(e.WQ,"window",{get:()=>e}),Object.defineProperty(e.WQ,"params",{get:()=>o}),Object.defineProperty(e.WQ,"vendor",{get:()=>(r||(r=function(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),n=t&&-1!=e.navigator.userAgent.indexOf("Edg"),r=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,a=!!e.document.documentMode,o=!a&&!!e.StyleMedia;return(t||r)&&e.CSS,o?"edge":a?"ie":r?"opera":n?"ie-chromium":t?"chrome":"unknown"}(e)),r)}),Object.defineProperty(e.WQ,"prefix",{get:()=>(a||(a=function(e){var t=e.getComputedStyle(e.document.documentElement,""),n=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+n+")","i"))||[])[1],prefix:n,css:"-"+n+"-"}}(e)),a)})}if(t){if(e.WQ[t]){if(!Object(r.a)(n)&&e.WQ[t].params!==n)throw new Error('"'+t+'" has already been initialized with a different parans object.')}else e.WQ[t]={get params(){return n}},Object.setPrototypeOf(e.WQ[t],e.WQ);return e.WQ[t]}return e.WQ}}},,,function(e,t,n){"use strict";t.a=function(e,t){return e.reduce((e,n,r)=>e||t(n,r),!1)}},,,,,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(25),a=n(36),o=n(0);async function i(e,t=null){const n=Object(r.a)(e),i=[],c=o.d.call(n),s=await o.a.call(n,{attr:{namespace:"namespace",id:"data-id"},api:{namespace:"namespace"}},t),u=function(e){if(!Object(o.b)(e).namespace){const t={};Object(o.b)(e).namespace=t,n.Observer.link&&n.Observer.link(e,s.api.namespace,t)}return Object(o.b)(e).namespace};if(s.api.namespace in n.window.Element.prototype)throw new Error('The "Element" class already has a "'+s.api.namespace+'" property!');if(Object.defineProperty(n.window.Element.prototype,s.api.namespace,{get:function(){return u(this)}}),s.api.namespace in n.window.document)throw new Error('The "document" object already has a "'+s.api.namespace+'" property!');Object.defineProperty(n.window.document,s.api.namespace,{get:function(){return u(n.window.document)}}),n.Mutation.onPresent("["+n.window.CSS.escape(s.attr.id)+"]",e=>{if(!Object(a.a)(i,t=>e.closest(t))){var t=e.getAttribute(s.attr.id),r=e.parentNode.closest("["+n.window.CSS.escape(s.attr.namespace)+"]");r||(r=n.window.document);var o=u(r);o[t]!==e&&c.setVal(o,t,e),n.Mutation.onRemoved(e,()=>{o[t]===e&&c.delVal(o,t)},{once:!0})}})}},,,,function(e,t,n){"use strict";n.r(t);var r=n(51);Object(r.a)(window)}]);
//# sourceMappingURL=namespaced-html.js.map