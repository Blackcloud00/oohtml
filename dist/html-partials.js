!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}([function(t,e,n){"use strict";e.a=function(t){return Array.isArray(t)}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(8),a=n(6),s=n(3);e.a=function(t,e=!0){return Object(r.a)(t)?t:!e&&Object(s.a)(t)?[t]:!1!==t&&0!==t&&Object(a.a)(t)?[]:function(t){return!Object(o.a)(t)&&!Object(i.a)(t.length)}(t)?Array.prototype.slice.call(t):Object(s.a)(t)?Object.values(t):[t]}},function(t,e,n){"use strict";e.a=function(t){return t instanceof String||"string"==typeof t&&null!==t}},function(t,e,n){"use strict";e.a=function(t){return!Array.isArray(t)&&"object"==typeof t&&t}},function(t,e,n){"use strict";e.a=function(t){return function(t){return t instanceof Number||"number"==typeof t}(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)}},function(t,e,n){"use strict";var r=n(9);e.a=function(t){return Array.isArray(t)||"object"==typeof t&&t||Object(r.a)(t)}},function(t,e,n){"use strict";var r=n(8),o=n(5);e.a=function(t){return function(t){return null===t||""===t}(t)||Object(r.a)(t)||!1===t||0===t||Object(o.a)(t)&&!Object.keys(t).length}},function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(4),o=n(3),i=n(0),a=(n(2),n(10)),s=function(t,e,n=null){return Object(a.a)(t,Object(o.a)(e)?e:function(t,e=null){var n={};return 2===arguments.length&&(Object(i.a)(t)&&Object(i.a)(e)?t.forEach((t,r)=>n[t]=e[r]):n[t]=e),n}(e,n))};function c(t,e=null){if(this.window.OOHTML_META||(this.window.OOHTML_METATag=this.window.document.querySelector('meta[name="oohtml"]'))&&(this.window.OOHTML_META=(this.window.OOHTML_METATag.getAttribute("content")||"").split(";").filter(t=>t).reduce((t,e)=>{var n=e.split("=").map(t=>t.trim());return s(t,n[0],"true"===n[1]||"false"!==n[1]&&(Object(r.a)(n[1])?parseInt(n[1]):n[1]))},{})),3===arguments.length){!1===e?delete this.window.OOHTML_META[t]:this.window.OOHTML_META[t]=!0===e?"true":e;var n=Object.keys(this.window.OOHTML_META).reduce((t,e)=>t+e+"="+this.window.OOHTML_META[e]+";","");return this.window.OOHTML_METATag.setAttribute("content",n),!0}return this.window.OOHTML_META?this.window.OOHTML_META[t]:void 0}},function(t,e,n){"use strict";e.a=function(t){return arguments.length&&(void 0===t||void 0===t)}},function(t,e,n){"use strict";e.a=function(t){return"function"==typeof t}},function(t,e,n){"use strict";var r=n(0),o=n(12),i=n(3),a=n(5),s=n(4),c=function(t,e){var n=[];return function(t,e){e=(e=e||Object.prototype)&&!Object(r.a)(e)?[e]:e;var n=[];for(t=t;t&&(!e||e.indexOf(t)<0)&&"default"!==t.name;)n.push(t),t=t?Object.getPrototypeOf(t):null;return n}(t,e).forEach(t=>{!function(t,...e){e.forEach(e=>{t.indexOf(e)<0&&t.push(e)})}(n,...Object.getOwnPropertyNames(t))}),n};e.a=function(...t){return function t(e,n,l=!1,u=!1,d=!1){var h=0,p=e.shift();if((Object(s.a)(p)||!0===p||!1===p)&&(h=p,p=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,m)=>{(Object(a.a)(e)||Object(o.a)(e))&&(l?c(e):Object.getOwnPropertyNames(e)).forEach(o=>{if(n(o,p,e,m)){var a=p[o],c=e[o];if((Object(r.a)(a)&&Object(r.a)(c)||Object(i.a)(a)&&Object(i.a)(c))&&(!0===h||h>0))p[o]=Object(r.a)(a)&&Object(r.a)(c)?[]:{},t([Object(s.a)(h)?h-1:h,p[o],a,c],n,l,u,d);else if(Object(r.a)(p)&&Object(r.a)(e))u?p[o]=c:p.push(c);else try{d?Object.defineProperty(p,o,Object.getOwnPropertyDescriptor(e,o)):p[o]=e[o]}catch(t){}}})}),p}(t,(t,e,n)=>!0,!1,!1,!1)}},function(t,e,n){"use strict";e.a=function(t,e){return t.reduce((t,n,r)=>t||e(n,r),!1)}},function(t,e,n){"use strict";var r=n(9);e.a=function(t){return Object(r.a)(t)||t&&"[object function]"==={}.toString.call(t)}},function(t,e,n){"use strict";e.a=function(t,e,n=!1){for(var r=t.indexOf(e);r>-1&&(n||!1===n);)t.splice(r,1),n>0&&n--,r=t.indexOf(e);return t}},function(t,e,n){"use strict";var r=n(5),o=n(4);e.a=function(t,e){var n=void 0;return Object(r.a)(t)&&Object.keys(t).forEach((r,i)=>{!1!==n&&(n=e(Object(o.a)(r)?parseFloat(r):r,t[r],i))}),n}},function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(6);n(14);var o=n(2),i=n(0),a=function(t,e,n=null){return Object(i.a)(e)?t.filter(t=>n?e.filter(e=>n(t,e)).length:-1===e.indexOf(t)):[]},s=n(1);var c=function(t){!function(t){t.CSS||(t.CSS={});t.CSS.escape||(t.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}(t.window),function(t){t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1})}(t.window),function(t){"isConnected"in t.Node.prototype||Object.defineProperty(t.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(t.window)};function l(t,e,n=null,r=!1){n=n||t.document;var o,i=r?"querySelectorAll":"querySelector";try{o=n[i](e)}catch(t){try{o=n[i](e.replace(/\:is\(/g,":matches("))}catch(t){try{o=n[i](e.replace(/\:is\(/g,":-webkit-any("))}catch(t){try{o=n[i](e.replace(/\:is\(/g,":-moz-any("))}catch(t){throw t}}}}return o}function u(t,e={}){const n=class{static create(t,e=null,n={}){if(t.WQ){if(!e&&!Object(r.a)(n)&&t.WQ.params!==n)throw new Error("Window has already been initialized with a different parans object.")}else{let r,o,i=e?{}:n;t.WQ={get window(){return t},get params(){return i},get vendor(){return r||(r=function(t){if(void 0!==t.InstallTrigger)return"firefox";if(/constructor/i.test(t.HTMLElement)||"[object SafariRemoteNotification]"===(!t.safari||void 0!==t.safari&&t.safari.pushNotification).toString())return"safari";var e=!(!t.chrome||!t.chrome.webstore&&!t.chrome.runtime),n=e&&-1!=t.navigator.userAgent.indexOf("Edg"),r=!!t.opr&&!!t.opr.addons||!!t.opera||t.navigator.userAgent.indexOf(" OPR/")>=0,o=!!t.document.documentMode,i=!o&&!!t.StyleMedia;return(e||r)&&t.CSS,i?"edge":o?"ie":r?"opera":n?"ie-chromium":e?"chrome":"unknown"}(t)),r},get prefix(){return o||(o=function(t){var e=t.getComputedStyle(t.document.documentElement,""),n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+n+")","i"))||[])[1],prefix:n,css:"-"+n+"-"}}(t)),o}}}if(e){if(t.WQ[e]){if(!Object(r.a)(n)&&t.WQ[e].params!==n)throw new Error('"'+e+'" has already been initialized with a different parans object.')}else t.WQ[e]={get params(){return n}},Object.setPrototypeOf(t.WQ[e],t.WQ);return t.WQ[e]}return t.WQ}}.create(t,"DOM",e);return n.ready=new Promise(e=>{t.document.addEventListener("DOMContentLoaded",()=>e(t),!1),"complete"===t.document.readyState&&e(t)}),n.el=e=>function(t,e){if(Object(o.a)(e)){var n;if(e.trim().startsWith("<")){var r=t.document.createElement("div");r.innerHtml=e,n=r.firstChild}else n=l(t,e);return n}return e}(t,e),c(n),class{static init(t){t.Reflow||(t.Reflow=new this(t),t.Reflow._run())}constructor(t){this.Ctxt=t,this.readCallbacks=[],this.writeCallbacks=[],this.async=this.Ctxt.params.asyncDOM}_run(){this.Ctxt.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((t,e)=>{t&&!t()&&(this.readCallbacks[e]=null)}),this.writeCallbacks.forEach((t,e)=>{t&&!t()&&(this.writeCallbacks[e]=null)}),this._run()})}onread(t,e=!1){if(e)return new Promise((e,n)=>{!1===this.async?t(e,n):this.readCallbacks.push(()=>{t(e,n)})});!1===this.async?t():this.readCallbacks.push(t)}onwrite(t,e=!1){if(e)return new Promise((e,n)=>{!1===this.async?t(e,n):this.writeCallbacks.push(()=>{t(e,n)})});!1===this.async?t():this.writeCallbacks.push(t)}cycle(t,e,n){this.onread(()=>{var r=t(n);if(r){var o=r=>{this.onwrite(()=>{var o=e(r,n);if(o){var i=n=>{this.cycle(t,e,n)};o instanceof Promise?o.then(i):i()}})};r instanceof Promise?r.then(o):o()}})}}.init(n),class{static init(t){t.Mutation||(t.Mutation=new this(t))}constructor(t){this.Ctxt=t}onAdded(t,e,n={}){return n.on="added",this.onPresenceChange(t,(t,n)=>{e(t,n)},n)}onRemoved(t,e,n={}){return n.on="removed",this.onPresenceChange(t,(t,n)=>{e(t,n)},n)}onPresent(t,e,n={}){this.Ctxt.ready.then(r=>{r.MutationObserver&&this.onAdded(t,(t,n)=>{t.forEach(t=>e(t,n))},n),Object(o.a)(t)?Object(s.a)(r.document.querySelectorAll(t)).forEach(t=>e(t,1)):t.parentNode&&e(t,1)})}onAbsent(t,e,n={}){this.Ctxt.ready.then(r=>{r.MutationObserver&&onRemoved(t,(t,n)=>{t.forEach(t=>e(t,n))},n),Object(o.a)(t)?0===Object(s.a)(r.document.querySelectorAll(t)).length&&e(null,0):t.parentNode||e(t,0)})}onPresenceChange(t,e,n={}){t=Object(s.a)(t,!1);var r=(t,e)=>{if(e=e.filter(t=>t.matches),Object(o.a)(t)){var r=e.filter(e=>e.matches(t));if(!1!==n.observeIndirectMutation&&(r=e.reduce((e,n)=>e.concat(Object(s.a)(n.querySelectorAll(t))),r)).length)return r}else{if(e.includes(t))return[t];if(!1!==n.observeIndirectMutation&&e.length)for(var i=t;i=i.parentNode;)if(e.includes(i))return[t]}},i=[],c=[],l=n.context||this.Ctxt.window.document.documentElement,u=new this.Ctxt.window.MutationObserver(l=>{if(!n.on||"added"===n.on){var d=[];if(t.forEach(t=>{if(Object(o.a)(t))d=l.reduce((e,n)=>e.concat(r(t,Object(s.a)(n.addedNodes))||[]),d);else{var e=l.reduce((e,n)=>e||(r(t,Object(s.a)(n.addedNodes))||[])[0],null);e&&d.push(e)}}),d.length)if(n.onceEach){var h=a(d,i);h.length&&(i.push(...h),e(h,1))}else n.once&&u.disconnect(),e(d,1)}if(!n.on||"removed"===n.on){var p=[];if(t.forEach(t=>{if(Object(o.a)(t))p=l.reduce((e,n)=>e.concat(r(t,Object(s.a)(n.removedNodes))||[]),p);else{var e=l.reduce((e,n)=>e||(r(t,Object(s.a)(n.removedNodes))||[])[0],null);e&&p.push(e)}}),p.length)if(n.onceEach){var m=a(p,c);m.length&&(c.push(...m),e(m,0))}else n.once&&u.disconnect(),e(p,0)}});return u.observe(l,{childList:!0,subtree:!0}),u}onAttrChange(t,e,n=[]){var r=new this.Ctxt.window.MutationObserver(e),o={attributes:!0,attributeOldValue:!0};return n&&(o.attributeFilter=n),r.observe(t,o),r}onTreeChange(t,e,n=!1){var r=new this.Ctxt.window.MutationObserver(e),o={childList:!0,subtree:n};return r.observe(t,o),r}onMutation(t,e,n){var r=new this.Ctxt.window.MutationObserver(e);return r.observe(t,n),r}}.init(n),n}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(11),o=n(1),i=n(13),a=function(t){return t.filter((t,e,n)=>n.indexOf(t)===e)},s=n(14),c=(n(10),{BUNDLE_ELEMENT:"partials-bundle",TEMPLATE_ELEMENT:"template",TEMPLATE_NAMESPACE_ATTR:"name",SLOT_REFERENCE_ATTR:"partials-slot",TEMPLATE_REFERENCE_ATTR:"template",SLOT_ELEMENT:"partials-slot",SLOT_NAME_ATTR:"name",KEY_VAL_ATTR:[],LIST_ATTR:[],SLOTS_INERT_CONTEXTS:["template"],NO_INHERIT_ATTR:["nocompose","name","template"]}),l=n(7);function u(t){const e=t=>(t[".oohtml"]||(t[".oohtml"]={}),t[".oohtml"]);if("templates"in t.window.document)throw new Error('document already has a "templates" property!');const n=[];Object.defineProperty(t.window.document,"templates",{value:{}}),Object.defineProperty(t.window.document,"templatesReadyState",{value:"loading",writable:!0});const u=(e,n,r)=>{t.window.document.dispatchEvent(new t.window.CustomEvent(n,{detail:{template:e,namespace:r}}))},d=(e,n,r)=>{e.dispatchEvent(new t.window.CustomEvent(n,{detail:{namespace:r}}))},h=(e,n)=>{var r=e.getAttribute("src");return new Promise((o,i)=>{t.window.fetch?t.window.fetch(r).then(t=>t.ok?t.text():Promise.reject(t.statusText)).then(t=>{e.innerHTML=t,d(e,"load",n),u(e,"templatecontentloaded",n),o(e)}).catch(t=>{console.error("Error fetching the bundle at "+r+". ("+t+")"),e.innerHTML="",d(e,"loaderror",n),u(e,"templatecontentloaderror",n),o(e)}):(o(),console.error("Error fetching the bundle at "+r+". (window.fetch() not supported by browser.)"))})},p=(r,a,s,l=!1)=>{if(!e(a).partials){e(a).templates={},e(a).partials={};const d=(n,r,o)=>{var l;if(n.matches)if(n instanceof t.window.HTMLTemplateElement&&(l=n.getAttribute(c.TEMPLATE_NAMESPACE_ATTR))){var d=(s?s+"/":"")+l;o?(delete e(a).templates[l],e(a).parentTemplate===a&&delete e(a).parentTemplate,r&&u(n,"templateremoved",d)):(e(a).templates[l]=n,e(n).parentTemplate=a,p(n.content,n,d,r),r&&u(n,"templateadded",d))}else{var h=n.getAttribute(c.SLOT_REFERENCE_ATTR)||"default";o?e(a).partials[h]&&(Object(i.a)(e(a).partials[h],n),e(a).partials[h].length||delete e(a).partials[h]):(e(a).partials[h]||(e(a).partials[h]=[]),e(a).partials[h].push(n))}};a.getAttribute("src")&&!a.content.children.length&&n.push(h(a,s)),t.Mutation.onAttrChange(a,t=>{h(a,s)},["src"]),Object(o.a)(r.children).forEach(t=>d(t,l)),new t.window.MutationObserver(t=>{t.forEach(t=>{t.addedNodes.forEach(t=>d(t,!0)),t.removedNodes.forEach(t=>d(t,!0,!0))})}).observe(r,{childList:!0})}};if("templates"in t.window.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "templates" property!');if(Object.defineProperty(t.window.HTMLTemplateElement.prototype,"templates",{get:function(){return e(this).templates}}),"partials"in t.window.HTMLTemplateElement.prototype)throw new Error('The "HTMLTemplateElement" class already has a "partials" property!');if(Object.defineProperty(t.window.HTMLTemplateElement.prototype,"partials",{get:function(){return e(this).partials}}),t.Mutation.onPresent("template["+t.window.CSS.escape(c.TEMPLATE_NAMESPACE_ATTR)+"]",async e=>{var n=e.getAttribute(c.TEMPLATE_NAMESPACE_ATTR);t.Observer.set(t.window.document.templates,n,e),p(e.content,e,n,!0),u(e,"templateadded",n),t.Mutation.onRemoved(e,r=>{t.window.document.templates[n]===e&&t.Observer.deleteProperty(t.window.document.templates,n),u(e,"templateremoved",n)},{once:!0})}),"template"in t.window.Element.prototype)throw new Error('The "Element" class already has a "template" property!');Object.defineProperty(t.window.Element.prototype,"template",{get:function(){var n=this.getAttribute(c.TEMPLATE_REFERENCE_ATTR);if(n){if(e(this).templates||(e(this).templates={}),!e(this).templates[n]||!this.hasAttribute("cache-template")){var r=n.split("/").filter(t=>t).reduce((t,e)=>t?t.templates[e]||t.templates["*"]:null,t.window.document);e(this).templates[n]=r}return e(this).templates[n]}}}),t.Mutation.onPresent("["+t.window.CSS.escape(c.TEMPLATE_REFERENCE_ATTR)+"]",n=>{if(!Object(r.a)(c.SLOTS_INERT_CONTEXTS,t=>n.closest(t))){var o=()=>{Object(s.a)(e(n).slots,(t,e)=>{e.resolve()})};t.Mutation.onAttrChange(n,o,[c.TEMPLATE_REFERENCE_ATTR]);var i=t=>{var e=n.getAttribute(c.TEMPLATE_REFERENCE_ATTR).split("/").filter(t=>t).join("/");(e===t.detail.namespace||e.startsWith(t.detail.namespace+"/"))&&o()};t.window.document.addEventListener("templateadded",i),t.window.document.addEventListener("templateremoved",i),t.window.document.addEventListener("templatecontentloaded",i)}}),t.window.customElements.define(c.SLOT_ELEMENT,class extends t.window.HTMLElement{hydrate(t,n,r){this.anchorNode=t,e(this).slottedElements=n,e(this).compositionBlock=r,this._bindSlotted(n),this._connectToCompositionBlock()}connectedCallback(){this.anchorNode||(this.anchorNode=l.a.call(t,"isomorphic")?t.window.document.createComment(this.outerHTML):t.window.document.createTextNode(""),this.after(this.anchorNode),e(this).compositionBlock=this.hasAttribute(c.TEMPLATE_REFERENCE_ATTR)?null:this.parentNode.closest("["+t.window.CSS.escape(c.TEMPLATE_REFERENCE_ATTR)+"]"),this._connectToCompositionBlock(),t.ready.then(t=>{Promise.all(n).then(()=>{this.resolve()})}))}_connectToCompositionBlock(){this.compositionBlock&&(e(this.compositionBlock).slots||(e(this.compositionBlock).slots={}),e(this.compositionBlock).slots[this.name]=this)}_bindSlotted(n){n.forEach(t=>{t.slotReference=this}),e(this).slottedObserver=t.Mutation.onRemoved(n,t=>{t.forEach(t=>{t.parentNode||Object(i.a)(this.slottedElements,t),t.slotReference===this&&delete t.slotReference}),this.slottedElements.length||this.anchorNode.before(this)},{onceEach:!0})}resolve(){if(!Object(r.a)(c.SLOTS_INERT_CONTEXTS,t=>this.closest(t))){var t,n,o=t=>{var n,r=parseInt(this.getAttribute("template-fallback"));do{n=t.partials[this.name]}while(!n&&r-- >0&&(t=e(t).parentTemplate));return n};if(this.hasAttribute(c.TEMPLATE_REFERENCE_ATTR))this.compositionBlock&&e(this.compositionBlock).slots[this.name]===this&&delete e(this.compositionBlock).slots[this.name],(t=this.template)&&(n=o(t));else{if(!this.compositionBlock)return void console.warn("Scoped slots must be found within template contexts. ["+this.name+"]",this);(t=this.compositionBlock.template)&&(n=o(t))}t?this.fill(n):this.empty()}}fill(t){t=Object(o.a)(t,!1).map(t=>t.cloneNode(!0)),this.empty(!0),this.remove(),t.forEach(t=>{"@slot"===t.getAttribute(c.TEMPLATE_REFERENCE_ATTR)&&(e(t).templates||(e(t).templates={}),e(t).templates["@slot"]=this),function(t,e,n=[],r=!0){n=n.concat(c.NO_INHERIT_ATTR),t.hasAttribute("noinherit")&&(n=n.concat((t.getAttribute("noinherit")||"*").split(" ").map(t=>t.trim())));var o=c.LIST_ATTR.concat(["role","class"]);if(a(o).forEach(o=>{var i,s;if(!n.includes(o)&&!n.includes("*")&&(i=e.getAttribute(o))){if(s=t.getAttribute(o))var c=r?[s,i]:[i,s];else c=[i];t.setAttribute(o,a(c.join(" ").split(" ").map(t=>t.trim())).join(" ")),n.push(o)}}),a(c.KEY_VAL_ATTR.concat("style")).forEach(o=>{var i,a;if(!n.includes(o)&&!n.includes("*")&&(i=e.getAttribute(o))){if(a=t.getAttribute(o))(s=r?[a,i]:[i,a])[0].trim().endsWith(";")||(s[0]=s[0]+";");else var s=[i];t.setAttribute(o,s.join(" ")),n.push(o)}}),!n.includes("*"))for(var i=0;i<e.attributes.length;i++){var s=e.attributes[i];n.includes(s.name)||t.hasAttribute(s.name)&&!r||t.setAttribute(s.name,s.value)}}(t,this),t.getAttribute(c.SLOT_REFERENCE_ATTR)||t.setAttribute(c.SLOT_REFERENCE_ATTR,this.name),this.anchorNode.before(t)}),this._bindSlotted(t),this.slottedElements.push(...t)}empty(t=!1){if(this.slottedElements){var e=this.slottedElements;t&&this.slottedObserver&&(this.slottedObserver.disconnect(),e=this.slottedElements.splice(0)),e.forEach(t=>t.remove())}}get name(){return this.getAttribute(c.SLOT_NAME_ATTR)||"default"}get compositionBlock(){return e(this).compositionBlock}get slottedElements(){return e(this).slottedElements||(e(this).slottedElements=[]),e(this).slottedElements}get partials(){return p(this,this),e(this).partials}static get observedAttributes(){return[c.SLOT_NAME_ATTR]}});Object.defineProperty(t,"templatesReady",{value:t.ready.then(()=>(l.a.call(t,"isomorphic")&&Object(o.a)(t.window.document.querySelectorAll("["+t.window.CSS.escape(c.SLOT_REFERENCE_ATTR)+"]")).forEach(n=>{if(!e(n.parentNode).slotsCan){var r=[];n.parentNode.childNodes.forEach(e=>{var n;if(1===e.nodeType&&e.matches("["+t.window.CSS.escape(c.SLOT_REFERENCE_ATTR)+"]"))r.push(e);else if(8===e.nodeType&&(n=e.nodeValue.trim())&&n.startsWith("<"+c.SLOT_ELEMENT)&&n.endsWith("</"+c.SLOT_ELEMENT+">")){var o,i,a=t.window.document.createElement("div");a.innerHTML=n,(o=a.firstChild).matches(c.SLOT_ELEMENT)&&(o.hasAttribute(c.TEMPLATE_REFERENCE_ATTR)||(i=e.parentNode.closest("["+t.window.CSS.escape(c.TEMPLATE_REFERENCE_ATTR)+"]")),o.hydrate(e,r,i),r=[])}}),e(n.parentNode).slotsCan=!0}}),n.forEach(t=>{t.catch(t=>{console.warn(t)})}),Promise.all(n).then(()=>{t.window.document.templatesReadyState="complete",t.window.document.dispatchEvent(new t.window.Event("templatesreadystatechange"))})))})}},,,,function(t,e,n){"use strict";n.r(e);var r=n(15),o=n(17);Object(o.a)(Object(r.a)(window))}]);
//# sourceMappingURL=html-partials.js.map