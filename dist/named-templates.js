!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=56)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return O}));var n=r(7),a=r(6),o=r(19),i=r(1),c=(r(18),r(3)),s=r(9),u=r(2),l=r(31),d=function(e,t,r,a={},o={}){const d=(e,r,a)=>o.set?o.set(e,r,a):(Object(n.a)(t[b])&&Object(i.a)(e)?e.push(a):e[r]=a,!0);t=Object(u.a)(t);for(var p=e,b=0;b<t.length;b++){if(!(b<t.length-1))return d(p,t[b],r);if(!p||!Object(c.a)(p)&&!Object(s.a)(p))return!1;var f=Object(l.a)(p,t[b],o);if(!Object(c.a)(f)){if(!1===o.buildTree)return!1;if(f=Object(s.a)(o.buildTree)?o.buildTree(b):Object(n.a)(t[b+1])?[]:{},!d(p,t[b],f))return!1}p=f}};async function p(e,t=null){await O.call(this);return this.window.WQ.OOHTML.META=Object(o.a)(3,e,t||{},this.window.WQ.OOHTML.META),this.window.WQ.OOHTML.META}function b(e){var t,r=Symbol.for(".oohtml");return(t=e[r])||(t={},Object.defineProperty(e,r,{value:t,enumerable:!1})),t}function f(){const e=this;return{getVal:(t,r)=>e.Observer?e.Observer.get(t,r):t[r],delVal:(t,r)=>e.Observer?e.Observer.deleteProperty(t,r):(delete t[r],!0),setVal:(t,r,n)=>(e.Observer?e.Observer.set(t,r,n):t[r]=n,t),mergeVal:(t,r)=>(e.Observer?e.Observer.set(t,r):Object.keys(r).forEach(e=>{t[e]=r[e]}),t)}}async function O(e,t=null,r=!0){const i=this;if(i.window.WQ.OOHTML.META||(await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))&&(i.window.WQ.OOHTML.META=(i.window.WQ.OOHTML.METATag.getAttribute("content")||"").split(";").filter(e=>e).reduce((e,t)=>{var r=t.split("=").map(e=>e.trim());return d(e,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Object(n.a)(r[1])?parseInt(r[1]):r[1])),e},{}))),Object(a.a)(e)||arguments.length>1){if(Object(a.a)(e)?r=t:e={[e]:!0===t?"true":t},i.window.WQ.OOHTML.META||(i.window.WQ.OOHTML.META={}),Object.keys(e).forEach(t=>{!1===e[t]?delete i.window.WQ.OOHTML.META[t]:Object(a.a)(e[t])?Object(o.a)(3,i.window.WQ.OOHTML.META,e[t]):i.window.WQ.OOHTML.META[t]=e[t]}),r){const e=(t,r)=>Object.keys(r).reduce((n,o)=>{var i=(t?t+".":"")+o;return Object(a.a)(r[o])?n.push(...e(i,r[o])):n.push(i+"="+r[o]),n},[]);await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))||(i.window.WQ.OOHTML.METATag=i.window.document.createElement("meta"),i.window.WQ.OOHTML.METATag.setAttribute("name","oohtml"),i.window.document.head.append(i.window.WQ.OOHTML.METATag)),i.window.WQ.OOHTML.METATag.setAttribute("content",e("",i.window.WQ.OOHTML.META).join(";"))}return!0}return arguments.length?i.window.WQ.OOHTML.META?i.window.WQ.OOHTML.META[e]:void 0:i.window.WQ.OOHTML.META}},function(e,t,r){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,r){"use strict";var n=r(1),a=r(8),o=r(11),i=r(13),c=r(6);t.a=function(e,t=!0){return Object(n.a)(e)?e:!t&&Object(c.a)(e)?[e]:!1!==e&&0!==e&&Object(i.a)(e)?[]:function(e){return!Object(a.a)(e)&&!Object(o.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(c.a)(e)?Object.values(e):[e]}},function(e,t,r){"use strict";var n=r(17);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(n.a)(e)}},,,function(e,t,r){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,r){"use strict";var n=r(33);t.a=function(e){return Object(n.a)(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,r){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},function(e,t,r){"use strict";var n=r(17);t.a=function(e){return Object(n.a)(e)||e&&"[object function]"==={}.toString.call(e)}},,function(e,t,r){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},,function(e,t,r){"use strict";var n=r(20),a=r(11),o=r(3);t.a=function(e){return Object(n.a)(e)||Object(a.a)(e)||!1===e||0===e||Object(o.a)(e)&&!Object.keys(e).length}},,,,function(e,t,r){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(1),a=r(9),o=r(6),i=r(3),c=r(7),s=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(n.a)(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(r,...Object.getOwnPropertyNames(e))}),r};function u(e,t,r=!1,l=!1,d=!1){var p=0,b=e.shift();if((Object(c.a)(b)||!0===b||!1===b)&&(p=b,b=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,f)=>{(Object(i.a)(e)||Object(a.a)(e))&&(r?s(e):Object.getOwnPropertyNames(e)).forEach(a=>{if(t(a,b,e,f)){var i=b[a],s=e[a];if((Object(n.a)(i)&&Object(n.a)(s)||Object(o.a)(i)&&Object(o.a)(s))&&(!0===p||p>0))b[a]=Object(n.a)(i)&&Object(n.a)(s)?[]:{},u([Object(c.a)(p)?p-1:p,b[a],i,s],t,r,l,d);else if(Object(n.a)(b)&&Object(n.a)(e))l?b[a]=s:b.push(s);else try{d?Object.defineProperty(b,a,Object.getOwnPropertyDescriptor(e,a)):b[a]=e[a]}catch(e){}}})}),b}},function(e,t,r){"use strict";var n=r(18);t.a=function(...e){return Object(n.a)(e,(e,t,r)=>!0,!1,!1,!1)}},function(e,t,r){"use strict";t.a=function(e){return null===e||""===e}},,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(13),a=r(27);r(28);var o=r(8),i=r(1),c=function(e,t,r=null){return Object(i.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]},s=r(2);var u=function(e){!function(e){e.CSS||(e.CSS={});e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e.window),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})}(e.window),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e.window)};function l(e,t,r=null,n=!1){r=r||e.document;var a,o=n?"querySelectorAll":"querySelector";try{a=r[o](t)}catch(e){try{a=r[o](t.replace(/\:is\(/g,":matches("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-webkit-any("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return a}function d(e,t={}){if(e.WQ&&e.WQ.DOM)return e.WQ.DOM;const r=class{static create(e,t=null,r={}){if(e.WQ||(e.WQ={}),e.WQ.window){if(!t&&!Object(n.a)(r)&&e.WQ.params!==r)throw new Error("Window has already been initialized with a different parans object.")}else{let n,o,i=t?{}:r;Object.defineProperty(e.WQ,"window",{get:()=>e}),Object.defineProperty(e.WQ,"params",{get:()=>i}),Object.defineProperty(e.WQ,"vendor",{get:()=>(n||(n=Object(a.b)(e)),n)}),Object.defineProperty(e.WQ,"prefix",{get:()=>(o||(o=Object(a.a)(e)),o)})}if(t){if(e.WQ[t]){if(!Object(n.a)(r)&&e.WQ[t].params!==r)throw new Error('"'+t+'" has already been initialized with a different parans object.')}else e.WQ[t]={get params(){return r}},Object.setPrototypeOf(e.WQ[t],e.WQ);return e.WQ[t]}return e.WQ}}.create(e,"DOM",t);return r.ready=new Promise(t=>{e.document.addEventListener("DOMContentLoaded",()=>t(e),!1),"complete"===e.document.readyState&&t(e)}),r.el=t=>function(e,t){if(Object(o.a)(t)){var r;if(t.trim().startsWith("<")){var n=e.document.createElement("div");n.innerHtml=t,r=n.firstChild}else r=l(e,t);return r}return t}(e,t),u(r),class{static init(e){e.Reflow||(e.Reflow=new this(e),e.Reflow._run())}constructor(e){this.Ctxt=e,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)}),this.writeCallbacks.forEach((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)}),this._run()})}onread(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.readCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.writeCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,r){this.onread(()=>{var n=e(r);if(n){var a=n=>{this.onwrite(()=>{var a=t(n,r);if(a){var o=r=>{this.cycle(e,t,r)};a instanceof Promise?a.then(o):o()}})};n instanceof Promise?n.then(a):a()}})}}.init(r),class{static init(e){e.Mutation||(e.Mutation=new this(e))}constructor(e){this.Ctxt=e}onAdded(e,t,r={}){return r.on="added",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onRemoved(e,t,r={}){return r.on="removed",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onPresent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&this.onAdded(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(o.a)(e)?Object(s.a)(n.document.querySelectorAll(e)).forEach(e=>t(e,1)):e.parentNode&&t(e,1)})}onAbsent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&onRemoved(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(o.a)(e)?0===Object(s.a)(n.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)})}onPresenceChange(e,t,r={}){e=Object(s.a)(e,!1);var n=(e,t)=>{if(t=t.filter(e=>e.matches),Object(o.a)(e)){var n=t.filter(t=>t.matches(e));if(!1!==r.observeIndirectMutation&&(n=t.reduce((t,r)=>t.concat(Object(s.a)(r.querySelectorAll(e))),n)).length)return n}else{if(t.includes(e))return[e];if(!1!==r.observeIndirectMutation&&t.length)for(var a=e;a=a.parentNode;)if(t.includes(a))return[e]}},a=[],i=[],u=r.context||this.Ctxt.window.document.documentElement,l=new this.Ctxt.window.MutationObserver(u=>{if(!r.on||"added"===r.on){var d=[];if(e.forEach(e=>{if(Object(o.a)(e))d=u.reduce((t,r)=>t.concat(n(e,Object(s.a)(r.addedNodes))||[]),d);else{var t=u.reduce((t,r)=>t||(n(e,Object(s.a)(r.addedNodes))||[])[0],null);t&&d.push(t)}}),d.length)if(r.onceEach){var p=c(d,a);p.length&&(a.push(...p),t(p,1))}else r.once&&l.disconnect(),t(d,1)}if(!r.on||"removed"===r.on){var b=[];if(e.forEach(e=>{if(Object(o.a)(e))b=u.reduce((t,r)=>t.concat(n(e,Object(s.a)(r.removedNodes))||[]),b);else{var t=u.reduce((t,r)=>t||(n(e,Object(s.a)(r.removedNodes))||[])[0],null);t&&b.push(t)}}),b.length)if(r.onceEach){var f=c(b,i);f.length&&(i.push(...f),t(f,0))}else r.once&&l.disconnect(),t(b,0)}});return l.observe(u,{childList:!0,subtree:!0}),l}onAttrChange(e,t,r=[]){var n=new this.Ctxt.window.MutationObserver(t),a={attributes:!0,attributeOldValue:!0};return r&&(a.attributeFilter=r),n.observe(e,a),n}onTreeChange(e,t,r=!1){var n=new this.Ctxt.window.MutationObserver(t),a={childList:!0,subtree:r};return n.observe(e,a),n}onMutation(e,t,r){var n=new this.Ctxt.window.MutationObserver(t);return n.observe(e,r),n}}.init(r),r}},,function(e,t,r){"use strict";function n(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),r=t&&-1!=e.navigator.userAgent.indexOf("Edg"),n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,a=!!e.document.documentMode,o=!a&&!!e.StyleMedia;(t||n)&&e.CSS;return o?"edge":a?"ie":n?"opera":r?"ie-chromium":t?"chrome":"unknown"}function a(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},function(e,t,r){"use strict";var n=r(3),a=r(7);t.a=function(e,t){var r=void 0;return Object(n.a)(e)&&Object.keys(e).forEach((n,o)=>{!1!==r&&(r=t(Object(a.a)(n)?parseFloat(n):n,e[n],o))}),r}},,,function(e,t,r){"use strict";var n=r(3),a=r(11),o=r(20),i=r(2);t.a=function(e,t,r={},c={}){t=Object(i.a)(t).slice();for(var s=e;!Object(a.a)(s)&&!Object(o.a)(s)&&t.length;){var u=t.shift();if(!(r.get?r.get(s,u):Object(n.a)(s)?u in s:s[u]))return void(c.exists=!1);s=r.get?r.get(s,u):s[u]}return c.exists=!0,s}},,function(e,t,r){"use strict";t.a=function(e){return e instanceof Number||"number"==typeof e}},,function(e,t,r){"use strict";t.a=function(e,t,r=!1){for(var n=e.indexOf(t);n>-1&&(r||!1===r);)e.splice(n,1),r>0&&r--,n=e.indexOf(t);return e}},,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r(25),a=r(13),o=r(2),i=r(35),c=r(0);async function s(e,t=null){const r=Object(n.a)(e),s=r.window.document,u=await c.a.call(r,{attr:{templatename:"name",export:"export",templatedep:"template"},api:{templates:"templates",exports:"exports",templatedep:"template"}},t),l=(t,r,n)=>{s.dispatchEvent(new e.CustomEvent(t,{detail:{template:r,path:n}}))},d=(t,r,n)=>{t.dispatchEvent(new e.CustomEvent(r,{detail:{path:n}}))},p=(t,r)=>{var n=t.getAttribute("src");return new Promise((a,o)=>{e.fetch?e.fetch(n).then(e=>e.ok?e.text():Promise.reject(e.statusText)).then(e=>{t.innerHTML=e,d(t,"load",r),l("templatecontentloaded",t,r),a(t)}).catch(e=>{console.error("Error fetching the bundle at "+n+". ("+e+")"),t.innerHTML="",d(t,"loaderror",r),l("templatecontentloaderror",t,r),a(t)}):(a(),console.error("Error fetching the bundle at "+n+". (window.fetch() not supported by browser.)"))})},b=(t,n,s,d=!1)=>{if(Object(a.a)(Object(c.b)(n).exports)){Object(c.b)(n).templates={},Object(c.b)(n).exports={};const a=(t,r,a)=>{var o;if(t.matches)if(t instanceof e.HTMLTemplateElement&&(o=t.getAttribute(u.attr.templatename))){var d=(s?s+"/":"")+o;a?(delete Object(c.b)(n).templates[o],Object(c.b)(n).parentTemplate===n&&delete Object(c.b)(n).parentTemplate,r&&l("templateremoved",t,d)):(Object(c.b)(n).templates[o]=t,Object(c.b)(t).parentTemplate=n,b(t.content,t,d,r),r&&l("templateadded",t,d))}else{var p=t.getAttribute(u.attr.export)||"default";a?Object(c.b)(n).exports[p]&&(Object(i.a)(Object(c.b)(n).exports[p],t),Object(c.b)(n).exports[p].length||delete Object(c.b)(n).exports[p],r&&l("exportremoved",t,s+":"+p)):(Object(c.b)(n).exports[p]||(Object(c.b)(n).exports[p]=[]),Object(c.b)(n).exports[p].push(t),r&&l("exportadded",t,s+":"+p))}};n.getAttribute("src")&&!n.content.children.length&&f.push(p(n,s)),r.Mutation.onAttrChange(n,e=>{p(n,s)},["src"]),Object(o.a)(t.children).forEach(e=>a(e,d)),new e.MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>a(e,!0)),e.removedNodes.forEach(e=>a(e,!0,!0))})}).observe(t,{childList:!0})}};if(u.api.templates in s)throw new Error('document already has a "'+u.api.templates+'" property!');const f=[];if(Object(c.b)(s).templates={},Object.defineProperty(s,u.api.templates,{value:Object(c.b)(s).templates}),Object.defineProperty(s,"templatesReadyState",{value:"loading",writable:!0}),u.api.templates in e.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+u.api.templates+'" property!');if(Object.defineProperty(e.HTMLTemplateElement.prototype,u.api.templates,{get:function(){return Object(c.b)(this).templates||{}}}),u.api.exports in e.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+u.api.exports+'" property!');if(Object.defineProperty(e.HTMLTemplateElement.prototype,u.api.exports,{get:function(){return Object(c.b)(this).exports||{}}}),r.Mutation.onPresent("template["+e.CSS.escape(u.attr.templatename)+"]",async e=>{var t=e.getAttribute(u.attr.templatename);Object(c.b)(s).templates[t]=e,b(e.content,e,t,!0),l("templateadded",e,t),r.Mutation.onRemoved(e,r=>{Object(c.b)(s).templates[t]===e&&delete Object(c.b)(s).templates[t],l("templateremoved",e,t)},{once:!0})}),u.api.templatedep in e.Element.prototype)throw new Error('The "Element" class already has a "'+u.api.templatedep+'" property!');Object.defineProperty(e.Element.prototype,u.api.templatedep,{get:function(){var e=this.getAttribute(u.attr.templatedep);if(e){if(Object(c.b)(this).templates||(Object(c.b)(this).templates={}),!Object(c.b)(this).templates[e]||!this.hasAttribute("cache-template")){var t=e.split("/").map(e=>e.trim()).filter(e=>e).reduce((e,t)=>e?Object(c.b)(e).templates[t]||Object(c.b)(e).templates["*"]:null,s);Object(c.b)(this).templates[e]=t}return Object(c.b)(this).templates[e]}}}),Object.defineProperty(r,"templatesReady",{value:r.ready.then(()=>(f.forEach(e=>{e.catch(e=>{console.warn(e)})}),Promise.all(f).then(()=>{s.templatesReadyState="complete",s.dispatchEvent(new e.Event("templatesreadystatechange"))})))})}},,,,function(e,t,r){"use strict";r.r(t);var n=r(52);Object(n.a)(window)}]);
//# sourceMappingURL=named-templates.js.map