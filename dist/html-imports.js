!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=56)}([function(t,e,r){"use strict";r.d(e,"a",(function(){return f})),r.d(e,"b",(function(){return m})),r.d(e,"d",(function(){return O})),r.d(e,"c",(function(){return p}));var n=r(7),o=r(6),i=r(20),a=r(1),c=(r(19),r(2)),s=r(9),l=r(3),u=r(11),d=r(21),h=function(t,e,r={},n={}){e=Object(l.a)(e).slice();for(var o=t;!Object(u.a)(o)&&!Object(d.a)(o)&&e.length;){var i=e.shift();if(!(r.get?r.get(o,i):Object(c.a)(o)?i in o:o[i]))return void(n.exists=!1);o=r.get?r.get(o,i):o[i]}return n.exists=!0,o},b=function(t,e,r,o={},i={}){const u=(t,r,o)=>i.set?i.set(t,r,o):(Object(n.a)(e[b])&&Object(a.a)(t)?t.push(o):t[r]=o,!0);e=Object(l.a)(e);for(var d=t,b=0;b<e.length;b++){if(!(b<e.length-1))return u(d,e[b],r);if(!d||!Object(c.a)(d)&&!Object(s.a)(d))return!1;var f=h(d,e[b],i);if(!Object(c.a)(f)){if(!1===i.buildTree)return!1;if(f=Object(s.a)(i.buildTree)?i.buildTree(b):Object(n.a)(e[b+1])?[]:{},!u(d,e[b],f))return!1}d=f}};async function f(t,e=null){await p.call(this);return this.window.WQ.OOHTML.META=Object(i.a)(3,t,e||{},this.window.WQ.OOHTML.META),this.window.WQ.OOHTML.META}function m(t){var e,r=Symbol.for(".oohtml");return(e=t[r])||(e={},Object.defineProperty(t,r,{value:e,enumerable:!1})),e}function O(){const t=this;return{getVal:(e,r)=>t.Observer?t.Observer.get(e,r):e[r],delVal:(e,r)=>t.Observer?t.Observer.deleteProperty(e,r):(delete e[r],!0),setVal:(e,r,n)=>(t.Observer?t.Observer.set(e,r,n):e[r]=n,e),mergeVal:(e,r)=>(t.Observer?t.Observer.set(e,r):Object.keys(r).forEach(t=>{e[t]=r[t]}),e)}}async function p(t,e=null,r=!0){const a=this;if(a.window.WQ.OOHTML.META||(await a.ready,(a.window.WQ.OOHTML.METATag=a.window.document.querySelector('meta[name="oohtml"]'))&&(a.window.WQ.OOHTML.META=(a.window.WQ.OOHTML.METATag.getAttribute("content")||"").split(";").filter(t=>t).reduce((t,e)=>{var r=e.split("=").map(t=>t.trim());return b(t,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Object(n.a)(r[1])?parseInt(r[1]):r[1])),t},{}))),Object(o.a)(t)||arguments.length>1){if(Object(o.a)(t)?r=e:t={[t]:!0===e?"true":e},a.window.WQ.OOHTML.META||(a.window.WQ.OOHTML.META={}),Object.keys(t).forEach(e=>{!1===t[e]?delete a.window.WQ.OOHTML.META[e]:Object(o.a)(t[e])?Object(i.a)(3,a.window.WQ.OOHTML.META,t[e]):a.window.WQ.OOHTML.META[e]=t[e]}),r){const t=(e,r)=>Object.keys(r).reduce((n,i)=>{var a=(e?e+".":"")+i;return Object(o.a)(r[i])?n.push(...t(a,r[i])):n.push(a+"="+r[i]),n},[]);await a.ready,(a.window.WQ.OOHTML.METATag=a.window.document.querySelector('meta[name="oohtml"]'))||(a.window.WQ.OOHTML.METATag=a.window.document.createElement("meta"),a.window.WQ.OOHTML.METATag.setAttribute("name","oohtml"),a.window.document.head.append(a.window.WQ.OOHTML.METATag)),a.window.WQ.OOHTML.METATag.setAttribute("content",t("",a.window.WQ.OOHTML.META).join(";"))}return!0}return arguments.length?a.window.WQ.OOHTML.META?a.window.WQ.OOHTML.META[t]:void 0:a.window.WQ.OOHTML.META}},function(t,e,r){"use strict";e.a=function(t){return Array.isArray(t)}},function(t,e,r){"use strict";var n=r(18);e.a=function(t){return Array.isArray(t)||"object"==typeof t&&t||Object(n.a)(t)}},function(t,e,r){"use strict";var n=r(1),o=r(8),i=r(11),a=r(14),c=r(6);e.a=function(t,e=!0){return Object(n.a)(t)?t:!e&&Object(c.a)(t)?[t]:!1!==t&&0!==t&&Object(a.a)(t)?[]:function(t){return!Object(o.a)(t)&&!Object(i.a)(t.length)}(t)?Array.prototype.slice.call(t):Object(c.a)(t)?Object.values(t):[t]}},,,function(t,e,r){"use strict";e.a=function(t){return!Array.isArray(t)&&"object"==typeof t&&t}},function(t,e,r){"use strict";var n=r(31);e.a=function(t){return Object(n.a)(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)}},function(t,e,r){"use strict";e.a=function(t){return t instanceof String||"string"==typeof t&&null!==t}},function(t,e,r){"use strict";var n=r(18);e.a=function(t){return Object(n.a)(t)||t&&"[object function]"==={}.toString.call(t)}},,function(t,e,r){"use strict";e.a=function(t){return arguments.length&&(void 0===t||void 0===t)}},,,function(t,e,r){"use strict";var n=r(21),o=r(11),i=r(2);e.a=function(t){return Object(n.a)(t)||Object(o.a)(t)||!1===t||0===t||Object(i.a)(t)&&!Object.keys(t).length}},,,,function(t,e,r){"use strict";e.a=function(t){return"function"==typeof t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(1),o=r(9),i=r(6),a=r(2),c=r(7),s=function(t,e){var r=[];return function(t,e){e=(e=e||Object.prototype)&&!Object(n.a)(e)?[e]:e;var r=[];for(t=t;t&&(!e||e.indexOf(t)<0)&&"default"!==t.name;)r.push(t),t=t?Object.getPrototypeOf(t):null;return r}(t,e).forEach(t=>{!function(t,...e){e.forEach(e=>{t.indexOf(e)<0&&t.push(e)})}(r,...Object.getOwnPropertyNames(t))}),r};function l(t,e,r=!1,u=!1,d=!1){var h=0,b=t.shift();if((Object(c.a)(b)||!0===b||!1===b)&&(h=b,b=t.shift()),!t.length)throw new Error("_merge() requires two or more array/objects.");return t.forEach((t,f)=>{(Object(a.a)(t)||Object(o.a)(t))&&(r?s(t):Object.getOwnPropertyNames(t)).forEach(o=>{if(e(o,b,t,f)){var a=b[o],s=t[o];if((Object(n.a)(a)&&Object(n.a)(s)||Object(i.a)(a)&&Object(i.a)(s))&&(!0===h||h>0))b[o]=Object(n.a)(a)&&Object(n.a)(s)?[]:{},l([Object(c.a)(h)?h-1:h,b[o],a,s],e,r,u,d);else if(Object(n.a)(b)&&Object(n.a)(t))u?b[o]=s:b.push(s);else try{d?Object.defineProperty(b,o,Object.getOwnPropertyDescriptor(t,o)):b[o]=t[o]}catch(t){}}})}),b}},function(t,e,r){"use strict";var n=r(19);e.a=function(...t){return Object(n.a)(t,(t,e,r)=>!0,!1,!1,!1)}},function(t,e,r){"use strict";e.a=function(t){return null===t||""===t}},,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(32);r(27);var o=r(8),i=(r(36),r(3));const a=new Map;var c=function(t){!function(t){t.CSS||(t.CSS={});t.CSS.escape||(t.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}(t.window),function(t){t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1})}(t.window),function(t){"isConnected"in t.Node.prototype||Object.defineProperty(t.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(t.window)};function s(t,e,r=null,n=!1){r=r||t.document;var o,i=n?"querySelectorAll":"querySelector";try{o=r[i](e)}catch(t){try{o=r[i](e.replace(/\:is\(/g,":matches("))}catch(t){try{o=r[i](e.replace(/\:is\(/g,":-webkit-any("))}catch(t){try{o=r[i](e.replace(/\:is\(/g,":-moz-any("))}catch(t){throw t}}}}return o}function l(t,e={}){if(t.WQ&&t.WQ.DOM)return t.WQ.DOM;const r=n.a.create(t,"DOM",e);return r.ready=new Promise(e=>{t.document.addEventListener("DOMContentLoaded",()=>e(t),!1),"complete"===t.document.readyState&&e(t)}),r.el=e=>function(t,e){if(Object(o.a)(e)){var r;if(e.trim().startsWith("<")){var n=t.document.createElement("div");n.innerHtml=e,r=n.firstChild}else r=s(t,e);return r}return e}(t,e),c(r),class{static init(t){t.Reflow||(t.Reflow=new this(t),t.Reflow._run())}constructor(t){this.Ctxt=t,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((t,e)=>{t&&!t()&&(this.readCallbacks[e]=null)}),this.writeCallbacks.forEach((t,e)=>{t&&!t()&&(this.writeCallbacks[e]=null)}),this._run()})}onread(t,e=!1){if(e)return new Promise((e,r)=>{!1===this.async?t(e,r):this.readCallbacks.push(()=>{t(e,r)})});!1===this.async?t():this.readCallbacks.push(t)}onwrite(t,e=!1){if(e)return new Promise((e,r)=>{!1===this.async?t(e,r):this.writeCallbacks.push(()=>{t(e,r)})});!1===this.async?t():this.writeCallbacks.push(t)}cycle(t,e,r){this.onread(()=>{var n=t(r);if(n){var o=n=>{this.onwrite(()=>{var o=e(n,r);if(o){var i=r=>{this.cycle(t,e,r)};o instanceof Promise?o.then(i):i()}})};n instanceof Promise?n.then(o):o()}})}}.init(r),class{static init(t){t.Mutation||(t.Mutation=new this(t))}constructor(t){this.Ctxt=t}onAdded(t,e,r={}){return r.on="added",this.onPresenceChange(t,(t,r,n,o,i)=>{e(t,r,n,o,i)},r)}onRemoved(t,e,r={}){return r.on="removed",this.onPresenceChange(t,(t,r,n,o,i)=>{e(t,r,n,o,i)},r)}onPresent(t,e,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&this.onAdded(t,(t,r)=>{t.forEach(t=>e(t,r))},r),Object(o.a)(t)?Object(i.a)(n.document.querySelectorAll(t)).forEach(t=>e(t,1)):t.parentNode&&e(t,1)})}onAbsent(t,e,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&onRemoved(t,(t,r)=>{t.forEach(t=>e(t,r))},r),Object(o.a)(t)?0===Object(i.a)(n.document.querySelectorAll(t)).length&&e(null,0):t.parentNode||e(t,0)})}onPresenceChange(t,e,r={}){t=Object(i.a)(t,!1);var n=(t,e)=>(e.$$searchCache||(e.$$searchCache=new Map),t.reduce((t,n)=>{var a;return e.$$searchCache.has(n)?a=e.$$searchCache.get(n):(a=((t,e)=>{if(e=e.filter(t=>t.matches),Object(o.a)(t)){var n=e.filter(e=>e.matches(t));if(!1!==r.observeIndirectMutation&&(n=e.reduce((e,r)=>e.concat(Object(i.a)(r.querySelectorAll(t))),n)).length)return n}else{if(e.includes(t))return[t];if(!1!==r.observeIndirectMutation&&e.length)for(var a=t;a=a.parentNode;)if(e.includes(a))return[t]}})(n,e,Object(o.a)(n))||[],e.$$searchCache.set(n,a)),t.concat(a)},[])),a=new Set,c=new Set,s=(o,i,s)=>{i&&"removed"===r.on||!i&&"added"===r.on||(o=n(t,o)).length&&(r.maintainCallState?(o.forEach(t=>{i?(a.add(t),c.delete(t)):(a.delete(t),c.add(t))}),e(o,i,s,a,c)):e(o,i,s))},l=r.context||this.Ctxt.window.document.documentElement;return this._observe(l,(t,e,n,o)=>{r.ignoreTransients||(s(t,0,!0),s(t.concat(e),1,!0),s(e,0,!0)),s(o,0),s(n,1)})}onAttrChange(t,e,r=[]){var n=new this.Ctxt.window.MutationObserver(e),o={attributes:!0,attributeOldValue:!0};return r&&(o.attributeFilter=r),n.observe(t,o),n}onTreeChange(t,e,r=!1){var n=new this.Ctxt.window.MutationObserver(e),o={childList:!0,subtree:r};return n.observe(t,o),n}onMutation(t,e,r){var n=new this.Ctxt.window.MutationObserver(e);return n.observe(t,r),n}_observe(t,e){if(!a.has(t)){const e=new Set,r=new this.Ctxt.window.MutationObserver(t=>{if(e.size){var r=t.reduce((t,e)=>t.concat(Object(i.a)(e.addedNodes)),[]),n=t.reduce((t,e)=>t.concat(Object(i.a)(e.removedNodes)),[]),o=[],a=[];r=new Set(r),n=new Set(n),r.forEach(t=>{n.has(t)&&(n.delete(t),r.delete(t),t.isConnected?o.push(t):a.push(t))}),r=[...r],n=[...n],e.forEach(t=>t(o,a,r,n))}});r.observe(t,{childList:!0,subtree:!0}),a.set(t,{callbacks:e,observer:r})}const r=a.get(t);return r.callbacks.add(e),{disconnect(){r.callbacks.delete(e)},reconnect(){r.callbacks.add(e)}}}}.init(r),r}},,function(t,e,r){"use strict";var n=r(2),o=r(7);e.a=function(t,e){var r=void 0;return Object(n.a)(t)&&Object.keys(t).forEach((n,i)=>{!1!==r&&(r=e(Object(o.a)(n)?parseFloat(n):n,t[n],i))}),r}},,,,function(t,e,r){"use strict";e.a=function(t){return t instanceof Number||"number"==typeof t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(14);class o{static create(t,e=null,r={}){if(t.WQ||(t.WQ={}),t.WQ.window){if(!e&&!Object(n.a)(r)&&t.WQ.params!==r)throw new Error("Window has already been initialized with a different parans object.")}else{let n,o,i=e?{}:r;Object.defineProperty(t.WQ,"window",{get:()=>t}),Object.defineProperty(t.WQ,"params",{get:()=>i}),Object.defineProperty(t.WQ,"vendor",{get:()=>(n||(n=function(t){if(void 0!==t.InstallTrigger)return"firefox";if(/constructor/i.test(t.HTMLElement)||"[object SafariRemoteNotification]"===(!t.safari||void 0!==t.safari&&t.safari.pushNotification).toString())return"safari";var e=!(!t.chrome||!t.chrome.webstore&&!t.chrome.runtime),r=e&&-1!=t.navigator.userAgent.indexOf("Edg"),n=!!t.opr&&!!t.opr.addons||!!t.opera||t.navigator.userAgent.indexOf(" OPR/")>=0,o=!!t.document.documentMode,i=!o&&!!t.StyleMedia;return(e||n)&&t.CSS,i?"edge":o?"ie":n?"opera":r?"ie-chromium":e?"chrome":"unknown"}(t)),n)}),Object.defineProperty(t.WQ,"prefix",{get:()=>(o||(o=function(t){var e=t.getComputedStyle(t.document.documentElement,""),r=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(t)),o)})}if(e){if(t.WQ[e]){if(!Object(n.a)(r)&&t.WQ[e].params!==r)throw new Error('"'+e+'" has already been initialized with a different parans object.')}else t.WQ[e]={get params(){return r}},Object.setPrototypeOf(t.WQ[e],t.WQ);return t.WQ[e]}return t.WQ}}},function(t,e,r){"use strict";e.a=function(t,e,r=!1){for(var n=t.indexOf(e);n>-1&&(r||!1===r);)t.splice(n,1),r>0&&r--,n=t.indexOf(e);return t}},,,function(t,e,r){"use strict";var n=r(1);e.a=function(t,e,r=null){return Object(n.a)(e)?t.filter(t=>r?e.filter(e=>r(t,e)).length:-1===e.indexOf(t)):[]}},function(t,e,r){"use strict";e.a=function(t,e){return t.reduce((t,r,n)=>t||e(r,n),!1)}},,,,,,,,,,function(t,e,r){"use strict";e.a=function(t){return t.filter((t,e,r)=>r.indexOf(t)===e)}},,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(25),o=r(37),i=r(3),a=r(33),c=r(47),s=r(36),l=r(27),u=r(0);async function d(t,e=null){const r=Object(n.a)(t),d=r.window.document,m=[],O=await u.a.call(r,{element:{import:"import"},attr:{importid:"name",templatespec:"template-specificity"}},e);h.push(O.attr.importid,O.attr.moduleref);const p="["+t.CSS.escape(O.attr.moduleref)+"]",j="["+t.CSS.escape(O.attr.exportgroup)+"]",w=class{static create(t){return new w(t)}constructor(t){this.el=t}hydrate(t,e,r){Object(u.b)(this.el).anchorNode=t,Object(u.b)(this.el).slottedElements=e,Object(u.b)(this.el).compositionBlock=r,this._bindSlotted(e),this._connectToCompositionBlock()}connectedCallback(){Object(u.b)(this.el).anchorNode||(Object(u.b)(this.el).anchorNode=O.isomorphic?d.createComment(this.el.outerHTML):d.createTextNode(""),Object(u.b)(this.el).compositionBlock=this.el.hasAttribute(O.attr.moduleref)?null:this.el.parentNode.closest(p),this._connectToCompositionBlock()),r.ready.then(t=>{this.resolve()})}_connectToCompositionBlock(){this.compositionBlock&&(Object(u.b)(this.compositionBlock).imports||(Object(u.b)(this.compositionBlock).imports={}),Object(u.b)(this.compositionBlock).imports[this.name]=this.el)}_bindSlotted(t){t.forEach(t=>{t.importReference=this.el}),Object(u.b)(this.el).slottedObserver=r.Mutation.onRemoved(t,(e,r,n,o,i)=>{i&&i.size===t.length&&Object(u.b)(this.el).slottedObserver.disconnect(),e.forEach(t=>{t.parentNode||Object(a.a)(this.slottedElements,t),t.importReference===this.el&&delete t.importReference}),this.slottedElements.length||this.anchorNode.isConnected&&this.anchorNode.replaceWith(this.el)},{maintainCallState:!0,ignoreTransients:!0})}resolve(){if(!Object(o.a)(m,t=>this.el.closest(t))){var t,e;if(this.el.hasAttribute(O.attr.moduleref))this.compositionBlock&&Object(u.b)(this.compositionBlock).imports[this.name]===this.el&&delete Object(u.b)(this.compositionBlock).imports[this.name],t=this.el;else{if(!this.compositionBlock)return void console.warn("Scoped slots must be found within template contexts. ["+this.name+"]",this.el);t=this.compositionBlock}t&&(e=(t=>{for(var e,r,[n,o]=(this.el.getAttribute(O.attr.templatespec)||"").split("-").map(t=>parseInt(t)).concat([0,0]),i=t.getAttribute(O.attr.moduleref).split("/").map(t=>t.trim()).filter(t=>t),a=t=>t.reduce((t,e,r)=>t?Object(u.b)(t).templates[e]||Object(u.b)(t).templates["*"]:null,d);(!(e=a(i))||e===d||!(r=Object(u.b)(e).exports[this.name]))&&i.length>n&&o;)i.pop(),o--;return r})(t))?Object(s.a)(e,Object(u.b)(this.el).originalSlottedElements||[]).length&&(Object(u.b)(this.el).originalSlottedElements=e,this.fill(e)):(Object(u.b)(this.el).originalSlottedElements=null,this.empty())}}fill(t){t=Object(i.a)(t,!1).map(t=>t.cloneNode(!0)),this.empty(!0),this.el.isConnected&&this.el.replaceWith(this.anchorNode),t.forEach(t=>{"@slot"===t.getAttribute(O.attr.moduleref)&&(Object(u.b)(t).templates||(Object(u.b)(t).templates={}),Object(u.b)(t).templates["@slot"]=this.el),function(t,e,r=[],n=!0){r=r.concat(h),t.hasAttribute("noinherit")&&(r=r.concat((t.getAttribute("noinherit")||"*").split(" ").map(t=>t.trim())));var o=f.concat(["role","class"]);if(Object(c.a)(o).forEach(o=>{var i,a;if(!r.includes(o)&&!r.includes("*")&&(i=e.getAttribute(o))){if(a=t.getAttribute(o))var s=n?[a,i]:[i,a];else s=[i];t.setAttribute(o,Object(c.a)(s.join(" ").split(" ").map(t=>t.trim())).join(" ")),r.push(o)}}),Object(c.a)(b.concat("style")).forEach(o=>{var i,a;if(!r.includes(o)&&!r.includes("*")&&(i=e.getAttribute(o))){if(a=t.getAttribute(o))(c=n?[a,i]:[i,a])[0].trim().endsWith(";")||(c[0]=c[0]+";");else var c=[i];t.setAttribute(o,c.join(" ")),r.push(o)}}),!r.includes("*"))for(var i=0;i<e.attributes.length;i++){var a=e.attributes[i];r.includes(a.name)||t.hasAttribute(a.name)&&!n||t.setAttribute(a.name,a.value)}}(t,this.el),t.getAttribute(O.attr.exportgroup)||t.setAttribute(O.attr.exportgroup,this.name),this.anchorNode.before(t)}),this._bindSlotted(t),this.slottedElements.push(...t)}empty(t=!1){if(this.slottedElements){var e=this.slottedElements;t&&Object(u.b)(this.el).slottedObserver&&(Object(u.b)(this.el).slottedObserver.disconnect(),e=this.slottedElements.splice(0)),e.forEach(t=>t.remove())}}get name(){return this.el.getAttribute(O.attr.importid)||"default"}get anchorNode(){return Object(u.b)(this.el).anchorNode}get compositionBlock(){return Object(u.b)(this.el).compositionBlock}get slottedElements(){return Object(u.b)(this.el).slottedElements||(Object(u.b)(this.el).slottedElements=[]),Object(u.b)(this.el).slottedElements}get exports(){return discoverContents(this.el,this.el),Object(u.b)(this.el).exports}static get observedAttributes(){return[O.attr.importid]}};r.Mutation.onPresent(O.element.import,t=>{w.create(t).connectedCallback()});const v=(t,e)=>{const r=(t,r)=>!e||r===e||!0===e&&t.getAttribute(O.attr.templatespec);if(t.matches(O.element.import)){var n=w.create(t);r(t,n.name)&&n.resolve()}else Object(l.a)(Object(u.b)(t).imports,(t,e)=>{r(e,t)&&w.create(e).resolve()})};r.Mutation.onPresent(p,t=>{Object(o.a)(m,e=>t.closest(e))||r.Mutation.onAttrChange(t,e=>{e[0].target.getAttribute(e[0].attributeName)!==e[0].oldValue&&v(t)},[O.attr.moduleref])}),d.addEventListener("templatemutation",e=>{if(!e.detail.path)return;const r=[e.detail.path,e.detail.path+"/"].map(e=>"["+t.CSS.escape(O.attr.moduleref)+'="'+e+'"]').join(",");Object(i.a)(d.querySelectorAll(r)).forEach(t=>{v(t,!0),e.detail.addedExports.concat(e.detail.removedExports).forEach(e=>{v(t,e.name)})})});r.ready.then(()=>{O.isomorphic&&Object(i.a)(d.querySelectorAll(j)).forEach(t=>{if(!Object(u.b)(t.parentNode).importsCan){var e=[];t.parentNode.childNodes.forEach(t=>{var r;if(1===t.nodeType&&t.matches(j))e.push(t);else if(8===t.nodeType&&(r=t.nodeValue.trim())&&r.startsWith("<"+O.element.import)&&r.endsWith("</"+O.element.import+">")){var n,o,i=d.createElement("div");i.innerHTML=r,(n=i.firstChild).matches(O.element.import)&&(n.hasAttribute(O.attr.moduleref)||(o=t.parentNode.closest(p)),w.create(n).hydrate(t,e,o),e=[])}}),Object(u.b)(t.parentNode).importsCan=!0}})})}const h=["nocompose"],b=[],f=[]},,,,,function(t,e,r){"use strict";r.r(e);var n=r(51);Object(n.a)(window)}]);
//# sourceMappingURL=html-imports.js.map