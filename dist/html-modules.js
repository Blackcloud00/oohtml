!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=55)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m})),r.d(t,"d",(function(){return h})),r.d(t,"c",(function(){return O}));var n=r(7),a=r(6),o=r(20),i=r(1),c=(r(19),r(2)),s=r(9),u=r(3),l=r(11),d=r(21),p=function(e,t,r={},n={}){t=Object(u.a)(t).slice();for(var a=e;!Object(l.a)(a)&&!Object(d.a)(a)&&t.length;){var o=t.shift();if(!(r.get?r.get(a,o):Object(c.a)(a)?o in a:a[o]))return void(n.exists=!1);a=r.get?r.get(a,o):a[o]}return n.exists=!0,a},f=function(e,t,r,a={},o={}){const l=(e,r,a)=>o.set?o.set(e,r,a):(Object(n.a)(t[f])&&Object(i.a)(e)?e.push(a):e[r]=a,!0);t=Object(u.a)(t);for(var d=e,f=0;f<t.length;f++){if(!(f<t.length-1))return l(d,t[f],r);if(!d||!Object(c.a)(d)&&!Object(s.a)(d))return!1;var b=p(d,t[f],o);if(!Object(c.a)(b)){if(!1===o.buildTree)return!1;if(b=Object(s.a)(o.buildTree)?o.buildTree(f):Object(n.a)(t[f+1])?[]:{},!l(d,t[f],b))return!1}d=b}};async function b(e,t=null){await O.call(this);return this.window.WQ.OOHTML.META=Object(o.a)(3,e,t||{},this.window.WQ.OOHTML.META),this.window.WQ.OOHTML.META}function m(e){var t,r=Symbol.for(".oohtml");return(t=e[r])||(t={},Object.defineProperty(e,r,{value:t,enumerable:!1})),t}function h(){const e=this;return{getVal:(t,r)=>e.Observer?e.Observer.get(t,r):t[r],delVal:(t,r)=>e.Observer?e.Observer.deleteProperty(t,r):(delete t[r],!0),setVal:(t,r,n)=>(e.Observer?e.Observer.set(t,r,n):t[r]=n,t),mergeVal:(t,r)=>(e.Observer?e.Observer.set(t,r):Object.keys(r).forEach(e=>{t[e]=r[e]}),t)}}async function O(e,t=null,r=!0){const i=this;if(i.window.WQ.OOHTML.META||(await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))&&(i.window.WQ.OOHTML.META=(i.window.WQ.OOHTML.METATag.getAttribute("content")||"").split(";").filter(e=>e).reduce((e,t)=>{var r=t.split("=").map(e=>e.trim());return f(e,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Object(n.a)(r[1])?parseInt(r[1]):r[1])),e},{}))),Object(a.a)(e)||arguments.length>1){if(Object(a.a)(e)?r=t:e={[e]:!0===t?"true":t},i.window.WQ.OOHTML.META||(i.window.WQ.OOHTML.META={}),Object.keys(e).forEach(t=>{!1===e[t]?delete i.window.WQ.OOHTML.META[t]:Object(a.a)(e[t])?Object(o.a)(3,i.window.WQ.OOHTML.META,e[t]):i.window.WQ.OOHTML.META[t]=e[t]}),r){const e=(t,r)=>Object.keys(r).reduce((n,o)=>{var i=(t?t+".":"")+o;return Object(a.a)(r[o])?n.push(...e(i,r[o])):n.push(i+"="+r[o]),n},[]);await i.ready,(i.window.WQ.OOHTML.METATag=i.window.document.querySelector('meta[name="oohtml"]'))||(i.window.WQ.OOHTML.METATag=i.window.document.createElement("meta"),i.window.WQ.OOHTML.METATag.setAttribute("name","oohtml"),i.window.document.head.append(i.window.WQ.OOHTML.METATag)),i.window.WQ.OOHTML.METATag.setAttribute("content",e("",i.window.WQ.OOHTML.META).join(";"))}return!0}return arguments.length?i.window.WQ.OOHTML.META?i.window.WQ.OOHTML.META[e]:void 0:i.window.WQ.OOHTML.META}},function(e,t,r){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,r){"use strict";var n=r(18);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(n.a)(e)}},function(e,t,r){"use strict";var n=r(1),a=r(8),o=r(11),i=r(14),c=r(6);t.a=function(e,t=!0){return Object(n.a)(e)?e:!t&&Object(c.a)(e)?[e]:!1!==e&&0!==e&&Object(i.a)(e)?[]:function(e){return!Object(a.a)(e)&&!Object(o.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(c.a)(e)?Object.values(e):[e]}},,,function(e,t,r){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,r){"use strict";var n=r(31);t.a=function(e){return Object(n.a)(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,r){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},function(e,t,r){"use strict";var n=r(18);t.a=function(e){return Object(n.a)(e)||e&&"[object function]"==={}.toString.call(e)}},,function(e,t,r){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},,,function(e,t,r){"use strict";var n=r(21),a=r(11),o=r(2);t.a=function(e){return Object(n.a)(e)||Object(a.a)(e)||!1===e||0===e||Object(o.a)(e)&&!Object.keys(e).length}},,,,function(e,t,r){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(1),a=r(9),o=r(6),i=r(2),c=r(7),s=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(n.a)(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(r,...Object.getOwnPropertyNames(e))}),r};function u(e,t,r=!1,l=!1,d=!1){var p=0,f=e.shift();if((Object(c.a)(f)||!0===f||!1===f)&&(p=f,f=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,b)=>{(Object(i.a)(e)||Object(a.a)(e))&&(r?s(e):Object.getOwnPropertyNames(e)).forEach(a=>{if(t(a,f,e,b)){var i=f[a],s=e[a];if((Object(n.a)(i)&&Object(n.a)(s)||Object(o.a)(i)&&Object(o.a)(s))&&(!0===p||p>0))f[a]=Object(n.a)(i)&&Object(n.a)(s)?[]:{},u([Object(c.a)(p)?p-1:p,f[a],i,s],t,r,l,d);else if(Object(n.a)(f)&&Object(n.a)(e))l?f[a]=s:f.push(s);else try{d?Object.defineProperty(f,a,Object.getOwnPropertyDescriptor(e,a)):f[a]=e[a]}catch(e){}}})}),f}},function(e,t,r){"use strict";var n=r(19);t.a=function(...e){return Object(n.a)(e,(e,t,r)=>!0,!1,!1,!1)}},function(e,t,r){"use strict";t.a=function(e){return null===e||""===e}},,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(32);r(27);var a=r(8),o=(r(36),r(3));const i=new Map;var c=function(e){!function(e){e.CSS||(e.CSS={});e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e.window),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})}(e.window),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e.window)};function s(e,t,r=null,n=!1){r=r||e.document;var a,o=n?"querySelectorAll":"querySelector";try{a=r[o](t)}catch(e){try{a=r[o](t.replace(/\:is\(/g,":matches("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-webkit-any("))}catch(e){try{a=r[o](t.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return a}function u(e,t={}){if(e.WQ&&e.WQ.DOM)return e.WQ.DOM;const r=n.a.create(e,"DOM",t);return r.ready=new Promise(t=>{e.document.addEventListener("DOMContentLoaded",()=>t(e),!1),"complete"===e.document.readyState&&t(e)}),r.el=t=>function(e,t){if(Object(a.a)(t)){var r;if(t.trim().startsWith("<")){var n=e.document.createElement("div");n.innerHtml=t,r=n.firstChild}else r=s(e,t);return r}return t}(e,t),c(r),class{static init(e){e.Reflow||(e.Reflow=new this(e),e.Reflow._run())}constructor(e){this.Ctxt=e,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)}),this.writeCallbacks.forEach((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)}),this._run()})}onread(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.readCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.writeCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,r){this.onread(()=>{var n=e(r);if(n){var a=n=>{this.onwrite(()=>{var a=t(n,r);if(a){var o=r=>{this.cycle(e,t,r)};a instanceof Promise?a.then(o):o()}})};n instanceof Promise?n.then(a):a()}})}}.init(r),class{static init(e){e.Mutation||(e.Mutation=new this(e))}constructor(e){this.Ctxt=e}onAdded(e,t,r={}){return r.on="added",this.onPresenceChange(e,(e,r,n,a,o)=>{t(e,r,n,a,o)},r)}onRemoved(e,t,r={}){return r.on="removed",this.onPresenceChange(e,(e,r,n,a,o)=>{t(e,r,n,a,o)},r)}onPresent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&this.onAdded(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?Object(o.a)(n.document.querySelectorAll(e)).forEach(e=>t(e,1)):e.parentNode&&t(e,1)})}onAbsent(e,t,r={}){this.Ctxt.ready.then(n=>{n.MutationObserver&&onRemoved(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?0===Object(o.a)(n.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)})}onPresenceChange(e,t,r={}){e=Object(o.a)(e,!1);var n=(e,t)=>(t.$$searchCache||(t.$$searchCache=new Map),e.reduce((e,n)=>{var i;return t.$$searchCache.has(n)?i=t.$$searchCache.get(n):(i=((e,t)=>{if(t=t.filter(e=>e.matches),Object(a.a)(e)){var n=t.filter(t=>t.matches(e));if(!1!==r.observeIndirectMutation&&(n=t.reduce((t,r)=>t.concat(Object(o.a)(r.querySelectorAll(e))),n)).length)return n}else{if(t.includes(e))return[e];if(!1!==r.observeIndirectMutation&&t.length)for(var i=e;i=i.parentNode;)if(t.includes(i))return[e]}})(n,t,Object(a.a)(n))||[],t.$$searchCache.set(n,i)),e.concat(i)},[])),i=new Set,c=new Set,s=(a,o,s)=>{o&&"removed"===r.on||!o&&"added"===r.on||(a=n(e,a)).length&&(r.maintainCallState?(a.forEach(e=>{o?(i.add(e),c.delete(e)):(i.delete(e),c.add(e))}),t(a,o,s,i,c)):t(a,o,s))},u=r.context||this.Ctxt.window.document.documentElement;return this._observe(u,(e,t,n,a)=>{r.ignoreTransients||(s(e,0,!0),s(e.concat(t),1,!0),s(t,0,!0)),s(a,0),s(n,1)})}onAttrChange(e,t,r=[]){var n=new this.Ctxt.window.MutationObserver(t),a={attributes:!0,attributeOldValue:!0};return r&&(a.attributeFilter=r),n.observe(e,a),n}onTreeChange(e,t,r=!1){var n=new this.Ctxt.window.MutationObserver(t),a={childList:!0,subtree:r};return n.observe(e,a),n}onMutation(e,t,r){var n=new this.Ctxt.window.MutationObserver(t);return n.observe(e,r),n}_observe(e,t){if(!i.has(e)){const t=new Set,r=new this.Ctxt.window.MutationObserver(e=>{if(t.size){var r=e.reduce((e,t)=>e.concat(Object(o.a)(t.addedNodes)),[]),n=e.reduce((e,t)=>e.concat(Object(o.a)(t.removedNodes)),[]),a=[],i=[];r=new Set(r),n=new Set(n),r.forEach(e=>{n.has(e)&&(n.delete(e),r.delete(e),e.isConnected?a.push(e):i.push(e))}),r=[...r],n=[...n],t.forEach(e=>e(a,i,r,n))}});r.observe(e,{childList:!0,subtree:!0}),i.set(e,{callbacks:t,observer:r})}const r=i.get(e);return r.callbacks.add(t),{disconnect(){r.callbacks.delete(t)},reconnect(){r.callbacks.add(t)}}}}.init(r),r}},,function(e,t,r){"use strict";var n=r(2),a=r(7);t.a=function(e,t){var r=void 0;return Object(n.a)(e)&&Object.keys(e).forEach((n,o)=>{!1!==r&&(r=t(Object(a.a)(n)?parseFloat(n):n,e[n],o))}),r}},,,,function(e,t,r){"use strict";t.a=function(e){return e instanceof Number||"number"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(14);class a{static create(e,t=null,r={}){if(e.WQ||(e.WQ={}),e.WQ.window){if(!t&&!Object(n.a)(r)&&e.WQ.params!==r)throw new Error("Window has already been initialized with a different parans object.")}else{let n,a,o=t?{}:r;Object.defineProperty(e.WQ,"window",{get:()=>e}),Object.defineProperty(e.WQ,"params",{get:()=>o}),Object.defineProperty(e.WQ,"vendor",{get:()=>(n||(n=function(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),r=t&&-1!=e.navigator.userAgent.indexOf("Edg"),n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,a=!!e.document.documentMode,o=!a&&!!e.StyleMedia;return(t||n)&&e.CSS,o?"edge":a?"ie":n?"opera":r?"ie-chromium":t?"chrome":"unknown"}(e)),n)}),Object.defineProperty(e.WQ,"prefix",{get:()=>(a||(a=function(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(e)),a)})}if(t){if(e.WQ[t]){if(!Object(n.a)(r)&&e.WQ[t].params!==r)throw new Error('"'+t+'" has already been initialized with a different parans object.')}else e.WQ[t]={get params(){return r}},Object.setPrototypeOf(e.WQ[t],e.WQ);return e.WQ[t]}return e.WQ}}},function(e,t,r){"use strict";t.a=function(e,t,r=!1){for(var n=e.indexOf(t);n>-1&&(r||!1===r);)e.splice(n,1),r>0&&r--,n=e.indexOf(t);return e}},,,function(e,t,r){"use strict";var n=r(1);t.a=function(e,t,r=null){return Object(n.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]}},,,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(25),a=(r(14),r(3)),o=r(33),i=(r(27),r(0));async function c(e,t=null){const r=Object(n.a)(e),c=r.window.document,s=await i.a.call(r,{element:{template:"",export:"html-export"},attr:{moduleid:"name",moduleref:"template",exportid:"name",exportgroup:"exportgroup"},api:{template:"",templates:"templates",exports:"exports",moduleref:"template"}},t),u="template"+(s.element.template?'[is="'+s.element.template+'"]':"")+"["+e.CSS.escape(s.attr.moduleid)+"]";var l=e.HTMLTemplateElement;if(s.api.template){if(!e[s.api.template])throw new Error('The custom element class "'+s.api.template+'" is not defined!');l=e[s.api.template]}const d=(t,r,n)=>{"templatemutation"===t&&(["addedExports","removedExports"].forEach(e=>{Object.defineProperty(r,e,{value:Object.keys(r[e]).map(t=>({name:t,items:r[e][t]}))})}),["addedTemplates","removedTemplates"].forEach(e=>{Object.defineProperty(r,e,{value:Object.keys(r[e]).map(t=>({name:t,item:r[e][t]}))})})),Object.defineProperty(r,"path",{value:n}),c.dispatchEvent(new e.CustomEvent(t,{detail:r}))},p=(t,r,n)=>{t.dispatchEvent(new e.CustomEvent(r,{detail:{path:n}}))},f=(t,r)=>{var n=t.getAttribute("src");return new Promise((a,o)=>{e.fetch?e.fetch(n).then(e=>e.ok?e.text():Promise.reject(e.statusText)).then(e=>{t.innerHTML=e,p(t,"load",r),d("templatecontentloaded",{template:t},r),a(t)}).catch(e=>{console.error("Error fetching the bundle at "+n+". ("+e+")"),t.innerHTML="",p(t,"loaderror",r),d("templatecontentloaderror",{template:t},r),a(t)}):(a(),console.error("Error fetching the bundle at "+n+". (window.fetch() not supported by browser.)"))})},b=(t,n,c,l=null,p=!0)=>{const h=(e,t,r,l)=>{var d;if(e.matches)if(e.matches(u)&&(d=e.getAttribute(s.attr.moduleid))){var p=(c?c+"/":"")+d;"removed"===r?(delete Object(i.b)(n).templates[d],Object(i.b)(n).parentTemplate===n&&delete Object(i.b)(n).parentTemplate,t&&(t.removedTemplates[d]=e)):"added"===r&&(Object(i.b)(n).templates[d]=e,Object(i.b)(e).parentTemplate=n,t&&(t.addedTemplates[d]=e)),b(e.content,e,p,r,l)}else{const c=e=>{var a=e.getAttribute(s.attr.exportgroup)||"default";"removed"===r?Object(i.b)(n).exports[a]&&(Object(o.a)(Object(i.b)(n).exports[a],e),Object(i.b)(n).exports[a].length||delete Object(i.b)(n).exports[a],t&&(t.removedExports[a]||(t.removedExports[a]=[]),t.removedExports[a].push(e))):"added"===r&&(Object(i.b)(n).exports[a]||(Object(i.b)(n).exports[a]=[]),Object(i.b)(n).exports[a].push(e),t&&(t.addedExports[a]||(t.addedExports[a]=[]),t.addedExports[a].push(e)))};if(e.matches(s.element.export)){var f=e.getAttribute(s.attr.exportid)||"default";Object(a.a)(e.children).forEach(e=>{e.setAttribute(s.attr.exportgroup,f),c(e)})}else c(e)}};Object(i.b)(n).templates={},Object(i.b)(n).exports={},n.moduleMutationType=l;const O={addedTemplates:{},removedTemplates:{},addedExports:{},removedExports:{}};(Object(a.a)(t.children).forEach(e=>h(e,O,l,p)),p&&d("templatemutation",O,c),"added"!==l||Object(i.b)(n).onLiveMode)||(Object(i.b)(n).onLiveMode=!0,n.getAttribute("src")&&!n.content.children.length&&m.push(f(n,c)),r.Mutation.onAttrChange(n,e=>{e[0].target.getAttribute(e[0].attributeName)!==e[0].oldValue&&f(n,c)},["src"]),new e.MutationObserver(e=>{const t={addedTemplates:{},removedTemplates:{},addedExports:{},removedExports:{}};e.forEach(e=>{e.addedNodes.forEach(e=>h(e,t,"added",!0)),e.removedNodes.forEach(e=>h(e,t,"removed",!0))}),d("templatemutation",t,c)}).observe(t,{childList:!0}))};if(s.api.templates in c)throw new Error('document already has a "'+s.api.templates+'" property!');const m=[];if(Object(i.b)(c).templates={},Object.defineProperty(c,s.api.templates,{value:Object(i.b)(c).templates}),s.api.templates in l.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+s.api.templates+'" property!');if(Object.defineProperty(l.prototype,s.api.templates,{get:function(){return Object(i.b)(this).templates||{}}}),s.api.exports in l.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+s.api.exports+'" property!');if(Object.defineProperty(l.prototype,s.api.exports,{get:function(){return Object(i.b)(this).exports||{}}}),Object(a.a)(c.querySelectorAll(u)).forEach(async e=>{var t=e.getAttribute(s.attr.moduleid);Object(i.b)(c).templates[t]=e,b(e.content,e,t,"added",!1)}),r.Mutation.onPresenceChange(u,async(e,t)=>{const r={addedTemplates:{},removedTemplates:{},addedExports:{},removedExports:{}};e.forEach(e=>{var n=e.getAttribute(s.attr.moduleid);t?(Object(i.b)(c).templates[n]=e,b(e.content,e,n,"added"),r.addedTemplates[n]=e):(Object(i.b)(c).templates[n]===e&&delete Object(i.b)(c).templates[n],b(e.content,e,n,"removed"),r.removedTemplates[n]=e)}),d("templatemutation",r,"")}),s.api.moduleref in e.Element.prototype)throw new Error('The "Element" class already has a "'+s.api.moduleref+'" property!');Object.defineProperty(e.Element.prototype,s.api.moduleref,{get:function(){var e=this.getAttribute(s.attr.moduleref);if(e)return e.split("/").map(e=>e.trim()).filter(e=>e).reduce((e,t)=>e?Object(i.b)(e).templates[t]||Object(i.b)(e).templates["*"]:null,c)}});var h=m.length?"loading":"indeterminate";Object.defineProperty(c,"templatesReadyState",{get:()=>h}),r.ready.then(()=>(m.forEach(e=>{e.catch(e=>{console.warn(e)})}),Promise.all(m).then(()=>{h="complete",c.dispatchEvent(new e.Event("templatesreadystatechange"))})))}},,,,,function(e,t,r){"use strict";r.r(t);var n=r(50);Object(n.a)(window)}]);
//# sourceMappingURL=html-modules.js.map