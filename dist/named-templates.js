!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=27)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return b}));var n=r(4),a=r(13),o=r(3),i=r(6),c=r(2),s=r(1),u=r(15),l=function(e,t,r,a={},l={}){const p=(e,r,a)=>l.set?l.set(e,r,a):(Object(n.a)(t[f])&&Object(c.a)(e)?e.push(a):e[r]=a,!0);t=Object(s.a)(t);for(var d=e,f=0;f<t.length;f++){if(!(f<t.length-1))return p(d,t[f],r);if(!d||!Object(o.a)(d)&&!Object(i.a)(d))return!1;var b=Object(u.a)(d,t[f],l);if(!Object(o.a)(b)){if(!1===l.buildTree)return!1;if(b=Object(i.a)(l.buildTree)?l.buildTree(f):Object(n.a)(t[f+1])?[]:{},!p(d,t[f],b))return!1}d=b}};function p(e){let t=b.call(this);return Object(a.a)(3,{},e,t)}function d(e){var t,r=Symbol.for(".oohtml");return(t=e[r])||(t={},Object.defineProperty(e,r,{value:t,enumerable:!1})),t}function f(){const e=this;return{getVal:(t,r)=>e.Observer?e.Observer.get(t,r):t[r],delVal:(t,r)=>e.Observer?e.Observer.deleteProperty(t,r):(delete t[r],!0),setVal:(t,r,n)=>(e.Observer?e.Observer.set(t,r,n):t[r]=n,t),mergeVal:(t,r)=>(e.Observer?e.Observer.set(t,r):Object.keys(r).forEach(e=>{t[e]=r[e]}),t)}}function b(e,t=null){if(this.window.OOHTML_META||(this.window.OOHTML_METATag=this.window.document.querySelector('meta[name="oohtml"]'))&&(this.window.OOHTML_META=(this.window.OOHTML_METATag.getAttribute("content")||"").split(";").filter(e=>e).reduce((e,t)=>{var r=t.split("=").map(e=>e.trim());return l(e,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Object(n.a)(r[1])?parseInt(r[1]):r[1])),e},{})),2===arguments.length){!1===t?delete this.window.OOHTML_META[e]:this.window.OOHTML_META[e]=!0===t?"true":t;var r=Object.keys(this.window.OOHTML_META).reduce((e,t)=>e+t+"="+this.window.OOHTML_META[t]+";","");return this.window.OOHTML_METATag.setAttribute("content",r),!0}return arguments.length?this.window.OOHTML_META?this.window.OOHTML_META[e]:void 0:this.window.OOHTML_META}},function(e,t,r){"use strict";var n=r(2),a=r(5),o=r(8),i=r(9),c=r(7);t.a=function(e,t=!0){return Object(n.a)(e)?e:!t&&Object(c.a)(e)?[e]:!1!==e&&0!==e&&Object(i.a)(e)?[]:function(e){return!Object(a.a)(e)&&!Object(o.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(c.a)(e)?Object.values(e):[e]}},function(e,t,r){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,r){"use strict";var n=r(10);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(n.a)(e)}},function(e,t,r){"use strict";var n=r(16);t.a=function(e){return Object(n.a)(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,r){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},function(e,t,r){"use strict";var n=r(10);t.a=function(e){return Object(n.a)(e)||e&&"[object function]"==={}.toString.call(e)}},function(e,t,r){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,r){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},function(e,t,r){"use strict";var n=r(11),a=r(8),o=r(3);t.a=function(e){return Object(n.a)(e)||Object(a.a)(e)||!1===e||0===e||Object(o.a)(e)&&!Object.keys(e).length}},function(e,t,r){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,r){"use strict";t.a=function(e){return null===e||""===e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(9);r(14);var a=r(5),o=r(2),i=function(e,t,r=null){return Object(o.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]},c=r(1);var s=function(e){!function(e){e.CSS||(e.CSS={});e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e.window),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})}(e.window),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e.window)};function u(e,t,r=null,n=!1){r=r||e.document;var a,o=n?"querySelectorAll":"querySelector";try{a=r[o](t)}catch(e){try{a=r[o](t.replace(/\:is\(/g,":matches("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-webkit-any("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return a}function l(e,t={}){if(e.WQ&&e.WQ.DOM)return e.WQ.DOM;const r=class{static create(e,t=null,r={}){if(e.WQ){if(!t&&!Object(n.a)(r)&&e.WQ.params!==r)throw new Error("Window has already been initialized with a different parans object.")}else{let n,a,o=t?{}:r;e.WQ={get window(){return e},get params(){return o},get vendor(){return n||(n=function(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),r=t&&-1!=e.navigator.userAgent.indexOf("Edg"),n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,a=!!e.document.documentMode,o=!a&&!!e.StyleMedia;return(t||n)&&e.CSS,o?"edge":a?"ie":n?"opera":r?"ie-chromium":t?"chrome":"unknown"}(e)),n},get prefix(){return a||(a=function(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(e)),a}}}if(t){if(e.WQ[t]){if(!Object(n.a)(r)&&e.WQ[t].params!==r)throw new Error('"'+t+'" has already been initialized with a different parans object.')}else e.WQ[t]={get params(){return r}},Object.setPrototypeOf(e.WQ[t],e.WQ);return e.WQ[t]}return e.WQ}}.create(e,"DOM",t);return r.ready=new Promise(t=>{e.document.addEventListener("DOMContentLoaded",()=>t(e),!1),"complete"===e.document.readyState&&t(e)}),r.el=t=>function(e,t){if(Object(a.a)(t)){var r;if(t.trim().startsWith("<")){var n=e.document.createElement("div");n.innerHtml=t,r=n.firstChild}else r=u(e,t);return r}return t}(e,t),s(r),class{static init(e){e.Reflow||(e.Reflow=new this(e),e.Reflow._run())}constructor(e){this.Ctxt=e,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)}),this.writeCallbacks.forEach((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)}),this._run()})}onread(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.readCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.writeCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,r){this.onread(()=>{var n=e(r);if(n){var a=n=>{this.onwrite(()=>{var a=t(n,r);if(a){var o=r=>{this.cycle(e,t,r)};a instanceof Promise?a.then(o):o()}})};n instanceof Promise?n.then(a):a()}})}}.init(r),class{static init(e){e.Mutation||(e.Mutation=new this(e))}constructor(e){this.Ctxt=e}onAdded(e,t,r={}){return r.on="added",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onRemoved(e,t,r={}){return r.on="removed",this.onPresenceChange(e,(e,r)=>{t(e,r)},r)}onPresent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&this.onAdded(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?Object(c.a)(n.document.querySelectorAll(e)).forEach(e=>t(e,1)):e.parentNode&&t(e,1)})}onAbsent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&onRemoved(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?0===Object(c.a)(n.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)})}onPresenceChange(e,t,r={}){e=Object(c.a)(e,!1);var n=(e,t)=>{if(t=t.filter(e=>e.matches),Object(a.a)(e)){var n=t.filter(t=>t.matches(e));if(!1!==r.observeIndirectMutation&&(n=t.reduce((t,r)=>t.concat(Object(c.a)(r.querySelectorAll(e))),n)).length)return n}else{if(t.includes(e))return[e];if(!1!==r.observeIndirectMutation&&t.length)for(var o=e;o=o.parentNode;)if(t.includes(o))return[e]}},o=[],s=[],u=r.context||this.Ctxt.window.document.documentElement,l=new this.Ctxt.window.MutationObserver(u=>{if(!r.on||"added"===r.on){var p=[];if(e.forEach(e=>{if(Object(a.a)(e))p=u.reduce((t,r)=>t.concat(n(e,Object(c.a)(r.addedNodes))||[]),p);else{var t=u.reduce((t,r)=>t||(n(e,Object(c.a)(r.addedNodes))||[])[0],null);t&&p.push(t)}}),p.length)if(r.onceEach){var d=i(p,o);d.length&&(o.push(...d),t(d,1))}else r.once&&l.disconnect(),t(p,1)}if(!r.on||"removed"===r.on){var f=[];if(e.forEach(e=>{if(Object(a.a)(e))f=u.reduce((t,r)=>t.concat(n(e,Object(c.a)(r.removedNodes))||[]),f);else{var t=u.reduce((t,r)=>t||(n(e,Object(c.a)(r.removedNodes))||[])[0],null);t&&f.push(t)}}),f.length)if(r.onceEach){var b=i(f,s);b.length&&(s.push(...b),t(b,0))}else r.once&&l.disconnect(),t(f,0)}});return l.observe(u,{childList:!0,subtree:!0}),l}onAttrChange(e,t,r=[]){var n=new this.Ctxt.window.MutationObserver(t),a={attributes:!0,attributeOldValue:!0};return r&&(a.attributeFilter=r),n.observe(e,a),n}onTreeChange(e,t,r=!1){var n=new this.Ctxt.window.MutationObserver(t),a={childList:!0,subtree:r};return n.observe(e,a),n}onMutation(e,t,r){var n=new this.Ctxt.window.MutationObserver(t);return n.observe(e,r),n}}.init(r),r}},function(e,t,r){"use strict";var n=r(17);t.a=function(...e){return Object(n.a)(e,(e,t,r)=>!0,!1,!1,!1)}},function(e,t,r){"use strict";var n=r(3),a=r(4);t.a=function(e,t){var r=void 0;return Object(n.a)(e)&&Object.keys(e).forEach((n,o)=>{!1!==r&&(r=t(Object(a.a)(n)?parseFloat(n):n,e[n],o))}),r}},function(e,t,r){"use strict";var n=r(3),a=r(8),o=r(11),i=r(1);t.a=function(e,t,r={},c={}){t=Object(i.a)(t).slice();for(var s=e;!Object(a.a)(s)&&!Object(o.a)(s)&&t.length;){var u=t.shift();if(!(r.get?r.get(s,u):Object(n.a)(s)?u in s:s[u]))return void(c.exists=!1);s=r.get?r.get(s,u):s[u]}return c.exists=!0,s}},function(e,t,r){"use strict";t.a=function(e){return e instanceof Number||"number"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(2),a=r(6),o=r(7),i=r(3),c=r(4),s=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(n.a)(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(r,...Object.getOwnPropertyNames(e))}),r};function u(e,t,r=!1,l=!1,p=!1){var d=0,f=e.shift();if((Object(c.a)(f)||!0===f||!1===f)&&(d=f,f=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,b)=>{(Object(i.a)(e)||Object(a.a)(e))&&(r?s(e):Object.getOwnPropertyNames(e)).forEach(a=>{if(t(a,f,e,b)){var i=f[a],s=e[a];if((Object(n.a)(i)&&Object(n.a)(s)||Object(o.a)(i)&&Object(o.a)(s))&&(!0===d||d>0))f[a]=Object(n.a)(i)&&Object(n.a)(s)?[]:{},u([Object(c.a)(d)?d-1:d,f[a],i,s],t,r,l,p);else if(Object(n.a)(f)&&Object(n.a)(e))l?f[a]=s:f.push(s);else try{p?Object.defineProperty(f,a,Object.getOwnPropertyDescriptor(e,a)):f[a]=e[a]}catch(e){}}})}),f}},function(e,t,r){"use strict";t.a=function(e,t,r=!1){for(var n=e.indexOf(t);n>-1&&(r||!1===r);)e.splice(n,1),r>0&&r--,n=e.indexOf(t);return e}},,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(12),a=r(1),o=r(18),i=r(0);async function c(e){const t=Object(n.a)(e),r=t.window.document;await t.ready;const c=i.a.call(t,{attr:{templatename:"name",export:"export",templatedep:"template"},api:{templates:"templates",exports:"exports",templatedep:"template"}}),s=(t,n,a)=>{r.dispatchEvent(new e.CustomEvent(n,{detail:{template:t,path:a}}))},u=(t,r,n)=>{t.dispatchEvent(new e.CustomEvent(r,{detail:{path:n}}))},l=(t,r)=>{var n=t.getAttribute("src");return new Promise((a,o)=>{e.fetch?e.fetch(n).then(e=>e.ok?e.text():Promise.reject(e.statusText)).then(e=>{t.innerHTML=e,u(t,"load",r),s(t,"templatecontentloaded",r),a(t)}).catch(e=>{console.error("Error fetching the bundle at "+n+". ("+e+")"),t.innerHTML="",u(t,"loaderror",r),s(t,"templatecontentloaderror",r),a(t)}):(a(),console.error("Error fetching the bundle at "+n+". (window.fetch() not supported by browser.)"))})},p=(r,n,u,f=!1)=>{if(!Object(i.b)(n).exports){Object(i.b)(n).templates={},Object(i.b)(n).exports={};const b=(t,r,a)=>{var l;if(t.matches)if(t instanceof e.HTMLTemplateElement&&(l=t.getAttribute(c.attr.templatename))){var d=(u?u+"/":"")+l;a?(delete Object(i.b)(n).templates[l],Object(i.b)(n).parentTemplate===n&&delete Object(i.b)(n).parentTemplate,r&&s(t,"templateremoved",d)):(Object(i.b)(n).templates[l]=t,Object(i.b)(t).parentTemplate=n,p(t.content,t,d,r),r&&s(t,"templateadded",d))}else{var f=t.getAttribute(c.attr.export)||"default";a?Object(i.b)(n).exports[f]&&(Object(o.a)(Object(i.b)(n).exports[f],t),Object(i.b)(n).exports[f].length||delete Object(i.b)(n).exports[f]):(Object(i.b)(n).exports[f]||(Object(i.b)(n).exports[f]=[]),Object(i.b)(n).exports[f].push(t))}};n.getAttribute("src")&&!n.content.children.length&&d.push(l(n,u)),t.Mutation.onAttrChange(n,e=>{l(n,u)},["src"]),Object(a.a)(r.children).forEach(e=>b(e,f)),new e.MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(e=>b(e,!0)),e.removedNodes.forEach(e=>b(e,!0,!0))})}).observe(r,{childList:!0})}};if(c.api.templates in r)throw new Error('document already has a "'+c.api.templates+'" property!');const d=[];if(Object(i.b)(r).templates={},Object.defineProperty(r,c.api.templates,{value:Object(i.b)(r).templates}),Object.defineProperty(r,"templatesReadyState",{value:"loading",writable:!0}),c.api.templates in e.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+c.api.templates+'" property!');if(Object.defineProperty(e.HTMLTemplateElement.prototype,c.api.templates,{get:function(){return Object(i.b)(this).templates||{}}}),c.api.exports in e.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+c.api.exports+'" property!');if(Object.defineProperty(e.HTMLTemplateElement.prototype,c.api.exports,{get:function(){return Object(i.b)(this).exports||{}}}),t.Mutation.onPresent("template["+e.CSS.escape(c.attr.templatename)+"]",async e=>{var n=e.getAttribute(c.attr.templatename);Object(i.b)(r).templates[n]=e,p(e.content,e,n,!0),s(e,"templateadded",n),t.Mutation.onRemoved(e,t=>{Object(i.b)(r).templates[n]===e&&delete Object(i.b)(r).templates[n],s(e,"templateremoved",n)},{once:!0})}),c.api.templatedep in e.Element.prototype)throw new Error('The "Element" class already has a "'+c.api.templatedep+'" property!');Object.defineProperty(e.Element.prototype,c.api.templatedep,{get:function(){var e=this.getAttribute(c.attr.templatedep);if(e){if(Object(i.b)(this).templates||(Object(i.b)(this).templates={}),!Object(i.b)(this).templates[e]||!this.hasAttribute("cache-template")){var t=e.split("/").map(e=>e.trim()).filter(e=>e).reduce((e,t)=>e?Object(i.b)(e).templates[t]||Object(i.b)(e).templates["*"]:null,r);Object(i.b)(this).templates[e]=t}return Object(i.b)(this).templates[e]}}}),Object.defineProperty(t,"templatesReady",{value:t.ready.then(()=>(d.forEach(e=>{e.catch(e=>{console.warn(e)})}),Promise.all(d).then(()=>{r.templatesReadyState="complete",r.dispatchEvent(new e.Event("templatesreadystatechange"))})))})}},,,,function(e,t,r){"use strict";r.r(t);var n=r(23);Object(n.a)(window)}]);
//# sourceMappingURL=named-templates.js.map