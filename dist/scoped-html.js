!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=30)}([function(e,t,r){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,r){"use strict";var n=r(14);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(n.a)(e)}},function(e,t,r){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,r){"use strict";var n=r(0),o=r(4),i=r(7),a=r(12),c=r(2);t.a=function(e,t=!0){return Object(n.a)(e)?e:!t&&Object(c.a)(e)?[e]:!1!==e&&0!==e&&Object(a.a)(e)?[]:function(e){return!Object(o.a)(e)&&!Object(i.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(c.a)(e)?Object.values(e):[e]}},function(e,t,r){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},function(e,t,r){"use strict";var n=r(14);t.a=function(e){return Object(n.a)(e)||e&&"[object function]"==={}.toString.call(e)}},function(e,t,r){"use strict";var n=r(9);t.a=function(e){return Object(n.a)(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,r){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},function(e,t,r){"use strict";var n=r(1),o=r(6);t.a=function(e,t){var r=void 0;return Object(n.a)(e)&&Object.keys(e).forEach((n,i)=>{!1!==r&&(r=t(Object(o.a)(n)?parseFloat(n):n,e[n],i))}),r}},function(e,t,r){"use strict";t.a=function(e){return e instanceof Number||"number"==typeof e}},function(e,t,r){"use strict";var n=r(16);t.a=function(...e){return Object(n.a)(e,(e,t,r)=>!0,!1,!1,!1)}},,function(e,t,r){"use strict";var n=r(17),o=r(7),i=r(1);t.a=function(e){return Object(n.a)(e)||Object(o.a)(e)||!1===e||0===e||Object(i.a)(e)&&!Object.keys(e).length}},,function(e,t,r){"use strict";t.a=function(e){return"function"==typeof e}},,function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),o=r(5),i=r(2),a=r(1),c=r(6),s=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(n.a)(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(r,...Object.getOwnPropertyNames(e))}),r};function u(e,t,r=!1,l=!1,f=!1){var d=0,h=e.shift();if((Object(c.a)(h)||!0===h||!1===h)&&(d=h,h=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,b)=>{(Object(a.a)(e)||Object(o.a)(e))&&(r?s(e):Object.getOwnPropertyNames(e)).forEach(o=>{if(t(o,h,e,b)){var a=h[o],s=e[o];if((Object(n.a)(a)&&Object(n.a)(s)||Object(i.a)(a)&&Object(i.a)(s))&&(!0===d||d>0))h[o]=Object(n.a)(a)&&Object(n.a)(s)?[]:{},u([Object(c.a)(d)?d-1:d,h[o],a,s],t,r,l,f);else if(Object(n.a)(h)&&Object(n.a)(e))l?h[o]=s:h.push(s);else try{f?Object.defineProperty(h,o,Object.getOwnPropertyDescriptor(e,o)):h[o]=e[o]}catch(e){}}})}),h}},function(e,t,r){"use strict";t.a=function(e){return null===e||""===e}},function(e,t,r){"use strict";t.a=function(e,t){return e.reduce((e,r,n)=>e||t(r,n),!1)}},function(e,t,r){"use strict";var n=r(0);t.a=function(e,t,r=null){return Object(n.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]}},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(12);r(8);var o=r(4),i=r(19),a=r(3);var c=function(e){!function(e){e.CSS||(e.CSS={});e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e.window),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})}(e.window),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e.window)};function s(e,t,r=null,n=!1){r=r||e.document;var o,i=n?"querySelectorAll":"querySelector";try{o=r[i](t)}catch(e){try{o=r[i](t.replace(/\:is\(/g,":matches("))}catch(e){try{o=r[i](t.replace(/\:is\(/g,":-webkit-any("))}catch(e){try{o=r[i](t.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return o}function u(e,t={}){if(e.WQ&&e.WQ.DOM)return e.WQ.DOM;const r=class{static create(e,t=null,r={}){if(e.WQ){if(!t&&!Object(n.a)(r)&&e.WQ.params!==r)throw new Error("Window has already been initialized with a different parans object.")}else{let n,o,i=t?{}:r;e.WQ={get window(){return e},get params(){return i},get vendor(){return n||(n=function(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),r=t&&-1!=e.navigator.userAgent.indexOf("Edg"),n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,o=!!e.document.documentMode,i=!o&&!!e.StyleMedia;return(t||n)&&e.CSS,i?"edge":o?"ie":n?"opera":r?"ie-chromium":t?"chrome":"unknown"}(e)),n},get prefix(){return o||(o=function(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(e)),o}}}if(t){if(e.WQ[t]){if(!Object(n.a)(r)&&e.WQ[t].params!==r)throw new Error('"'+t+'" has already been initialized with a different parans object.')}else e.WQ[t]={get params(){return r}},Object.setPrototypeOf(e.WQ[t],e.WQ);return e.WQ[t]}return e.WQ}}.create(e,"DOM",t);return r.ready=new Promise(t=>{e.document.addEventListener("DOMContentLoaded",()=>t(e),!1),"complete"===e.document.readyState&&t(e)}),r.el=t=>function(e,t){if(Object(o.a)(t)){var r;if(t.trim().startsWith("<")){var n=e.document.createElement("div");n.innerHtml=t,r=n.firstChild}else r=s(e,t);return r}return t}(e,t),c(r),class{static init(e){e.Reflow||(e.Reflow=new this(e),e.Reflow._run())}constructor(e){this.Ctxt=e,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)}),this.writeCallbacks.forEach((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)}),this._run()})}onread(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.readCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.writeCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,r){this.onread(()=>{var n=e(r);if(n){var o=n=>{this.onwrite(()=>{var o=t(n,r);if(o){var i=r=>{this.cycle(e,t,r)};o instanceof Promise?o.then(i):i()}})};n instanceof Promise?n.then(o):o()}})}}.init(r),class{static init(e){e.Mutation||(e.Mutation=new this(e))}constructor(e){this.Ctxt=e}onAdded(e,t,r={}){return r.on="added",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onRemoved(e,t,r={}){return r.on="removed",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onPresent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&this.onAdded(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(o.a)(e)?Object(a.a)(n.document.querySelectorAll(e)).forEach(e=>t(e,1)):e.parentNode&&t(e,1)})}onAbsent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&onRemoved(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(o.a)(e)?0===Object(a.a)(n.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)})}onPresenceChange(e,t,r={}){e=Object(a.a)(e,!1);var n=(e,t)=>{if(t=t.filter(e=>e.matches),Object(o.a)(e)){var n=t.filter(t=>t.matches(e));if(!1!==r.observeIndirectMutation&&(n=t.reduce((t,r)=>t.concat(Object(a.a)(r.querySelectorAll(e))),n)).length)return n}else{if(t.includes(e))return[e];if(!1!==r.observeIndirectMutation&&t.length)for(var i=e;i=i.parentNode;)if(t.includes(i))return[e]}},c=[],s=[],u=r.context||this.Ctxt.window.document.documentElement,l=new this.Ctxt.window.MutationObserver(u=>{if(!r.on||"added"===r.on){var f=[];if(e.forEach(e=>{if(Object(o.a)(e))f=u.reduce((t,r)=>t.concat(n(e,Object(a.a)(r.addedNodes))||[]),f);else{var t=u.reduce((t,r)=>t||(n(e,Object(a.a)(r.addedNodes))||[])[0],null);t&&f.push(t)}}),f.length)if(r.onceEach){var d=Object(i.a)(f,c);d.length&&(c.push(...d),t(d,1))}else r.once&&l.disconnect(),t(f,1)}if(!r.on||"removed"===r.on){var h=[];if(e.forEach(e=>{if(Object(o.a)(e))h=u.reduce((t,r)=>t.concat(n(e,Object(a.a)(r.removedNodes))||[]),h);else{var t=u.reduce((t,r)=>t||(n(e,Object(a.a)(r.removedNodes))||[])[0],null);t&&h.push(t)}}),h.length)if(r.onceEach){var b=Object(i.a)(h,s);b.length&&(s.push(...b),t(b,0))}else r.once&&l.disconnect(),t(h,0)}});return l.observe(u,{childList:!0,subtree:!0}),l}onAttrChange(e,t,r=[]){var n=new this.Ctxt.window.MutationObserver(t),o={attributes:!0,attributeOldValue:!0};return r&&(o.attributeFilter=r),n.observe(e,o),n}onTreeChange(e,t,r=!1){var n=new this.Ctxt.window.MutationObserver(t),o={childList:!0,subtree:r};return n.observe(e,o),n}onMutation(e,t,r){var n=new this.Ctxt.window.MutationObserver(t);return n.observe(e,r),n}}.init(r),r}},,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(10);var n=r(18),o="namespace",i="scoped:id",a="namespace",c=[];function s(e){if(!e.window||!("Element"in e.window))throw new Error('The "Element" class not found in global context!');if(a in e.window.Element.prototype)throw new Error('The "Element" class already has a "'+a+'" property!');Object.defineProperty(e.window.Element.prototype,a,{get:function(){if(!this[".sopedHTML-namespace"]){var t={};this[".sopedHTML-namespace"]=t,e.Observer.link&&e.Observer.link(this,a,t)}return this[".sopedHTML-namespace"]}}),e.Mutation.onPresent("["+e.window.CSS.escape(i)+"]",t=>{if(!Object(n.a)(c,e=>t.closest(e))){var r=t.getAttribute(i),s=t.parentNode.closest("["+e.window.CSS.escape(o)+"],html")[a];s[r]!==t&&e.Observer.set(s,r,t),e.Mutation.onRemoved(t,()=>{s[r]===t&&e.Observer.deleteProperty(s,r)},{once:!0})}})}},function(e,t,r){"use strict";r.r(t);var n=r(22),o=r(29);Object(o.a)(Object(n.a)(window))}]);
//# sourceMappingURL=scoped-html.js.map