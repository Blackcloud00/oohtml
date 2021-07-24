!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=73)}([function(t,e,n){"use strict";e.a=function(t){return Array.isArray(t)}},function(t,e,n){"use strict";e.a=function(t){return!Array.isArray(t)&&"object"==typeof t&&t}},function(t,e,n){"use strict";var r=n(22);e.a=function(t){return Object(r.a)(t)||t&&"[object function]"==={}.toString.call(t)}},function(t,e,n){"use strict";function r(t,...e){globalThis.WebQitInternalsRegistry||(globalThis.WebQitInternalsRegistry=new Map);var n,r,i=globalThis.WebQitInternalsRegistry.get(t);if(!i){if(i=new Map,!1===e[0])return i;globalThis.WebQitInternalsRegistry.set(t,i)}for(;n=e.shift();)if((r=i)&&!(i=i.get(n))){if(i=new Map,!1===e[0])return i;r.set(n,i)}return i}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";var r=n(22);e.a=function(t){return Array.isArray(t)||"object"==typeof t&&t||Object(r.a)(t)}},function(t,e,n){"use strict";var r=n(0),i=n(38),s=n(34),o=n(1);e.a=function(t,e=!0){return Object(r.a)(t)?t:!e&&Object(o.a)(t)?[t]:!1!==t&&0!==t&&Object(s.a)(t)?[]:Object(i.a)(t)?Array.prototype.slice.call(t):Object(o.a)(t)?Object.values(t):[t]}},function(t,e,n){"use strict";var r=n(15);e.a=function(t,e=1){return arguments.length>1?Object(r.a)(t.slice().reverse(),e).reverse():Object(r.a)(t.slice().reverse())}},function(t,e,n){"use strict";e.a=function(t){return arguments.length&&(void 0===t||void 0===t)}},function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(13),i=n(7),s=n(2),o=n(5),a=n(28),c=n(15),l=n(6),u=n(14),h=n(35),f=n(33);class d{static lex(t,e,n={}){if(!Object(r.a)(t+=""))throw new Error("Argument1 must be a string!");var i=t=>({delims:t.delims.slice(),options:Object(f.a)(t.options),nesting:t.nesting.slice(),maxDepth:t.maxDepth,comments:t.comments.slice(),tokens:t.tokens.slice(),matches:t.matches.slice(),matchesi:Object(f.a)(t.matchesi)});if(d.$cache[t]&&!1!==n.cache)for(var s=0;s<d.$cache[t].length;s++){var o=d.$cache[t][s];if(Object(h.a)(o.delims,e))return i(o)}var a=new d(t,n).lex(e);return!1!==n.cache&&(d.$cache[t]=d.$cache[t]||[],d.$cache[t].push(a)),i(a)}static split(t,e,n){return d.lex(t,e,n).tokens}static match(t,e,n){return d.lex(t,e,n).matches}constructor(t,e){if(!Object(r.a)(t))throw new Error("Lexer requires the first argument to be a string.");this.$str=t,this.$options=e||{},this.$options.blocks||(this.$options.blocks=d.$blocks),this.$options.quotes||(this.$options.quotes=d.$quotes),this.$options.comments||(this.$options.comments=d.$comments)}lex(t,e){for(var n={delims:Object(o.a)(t),options:Object(u.a)(!0,{},this.$options,e||{}),nesting:[],maxDepth:0,comments:[],tokens:[],matches:[],matchesi:{}},r=0;"number"==typeof r;)r=this._evalCharsAt(n,r);if(n.nesting.length)throw new Error("Error parsing the string: "+this.$str+". Unterminated blocks: "+Object(a.a)(n.nesting).join(", "));return n}_evalCharsAt(t,e){if(!(e>=this.$str.length)){var n=1,r={},i={},s={};if(t.openComment||(i=this._testQuotes(t,e)),t.openQuote||(r=this._testComments(t,e)),t.openComment||r.ending)if(t.nesting.length||s.ending)this._push(t,this.$str[e]);else n=(a=r.starting||r.ending||this.$str[e]).length,this._push(t,a,"comments",r.starting);else if(t.openQuote||i.ending)this._push(t,this.$str[e]);else{if(t.options.limit&&t.matches.length===t.options.limit)return this._push(t,this.$str[e]),e+1;s=this._testNesting(t,e);s=this._testNesting(t,e);var o=this._testChars(t.options.stopChars||[],t,e);if(!t.nesting.length&&!1!==o)return t.options.stopChar=o,void(t.options.stopCharForward=this.$str.substr(e));if(t.delims.length)if(t.nesting.length||s.ending){var a;n=(a=s.starting||s.ending||this.$str[e]).length,this._push(t,a)}else{this._push(t,"");var c=this._testChars(t.delims,t,e);if(!1!==c&&(t.matches.push(c),t.matchesi[e]=c,n=c.length||1,!t.options.preserveDelims)){var l=e+(c.length||1);return l===this.$str.length&&this._push(t,""),l}this._push(t,c||this.$str[e])}else 2===t.nesting.length&&s.starting?(t.matches.push(null),this._push(t,s.starting),n=s.starting.length):!t.nesting.length&&s.ending?(this._push(t,s.ending),n=s.ending.length,t.matches.push(null)):this._push(t,this.$str[e])}return e+n}}_testQuotes(t,e){var n={};return(t.options.quotes||[]).forEach(r=>{this.$str.substr(e,1)===r&&(t.openQuote?r===t.openQuote&&(t.openQuote=!1,n.ending=r):(t.openQuote=r,n.starting=r))}),n}_testComments(t,e){var n={};return(t.options.comments||[]).forEach(r=>{if(t.openComment){if(Object(l.a)(r)===Object(l.a)(t.openComment)){var i=Object(l.a)(r);this.$str.substr(e).startsWith(i)&&(t.openComment=!1,n.ending=i)}}else{var s=Object(c.a)(r);this.$str.substr(e).startsWith(s)&&(t.openComment=r,n.starting=s)}}),n}_testNesting(t,e){var n={};return(t.options.blocks||[]).forEach(r=>{var i=Object(c.a)(r);if(this.$str.substr(e).startsWith(i))t.nesting=t.nesting.concat([r]),n.starting=i;else if(t.nesting.length&&Object(l.a)(r)===Object(l.a)(Object(l.a)(t.nesting))){var s=Object(l.a)(r);this.$str.substr(e).startsWith(s)&&(t.nesting=t.nesting.slice(0,-1),n.ending=s)}}),t.maxDepth=Math.max(t.maxDepth,t.nesting.length),n}_testChars(t,e,n){for(var r=0;r<t.length;r++){var i=t[r];if(Object(s.a)(i)){var o=i(this.$str.substr(0,n),this.$str.substr(n));if(!1!==o)return o}if(e.options.useRegex){var a=this.$str.substr(n).match(new RegExp("^"+i,!0!==e.options.useRegex?e.options.useRegex:""));if(a)return a[0]}if(!e.options.ci&&this.$str.substr(n,i.length)===i||e.options.ci&&this.$str.substr(n,i.length).toLowerCase()===i.toLowerCase())return i}return!1}_push(t,e,n="tokens",r=!1){var s=t.matches.length;if(Object(i.a)(t.tokens[s])&&(t.tokens[s]=""),"comments"===n){t.tokens[s].comments||(t.tokens[s]=new String(t.tokens[s]),t.tokens[s].comments=[]);var o=t.tokens[s].comments.length-(!t.tokens[s].comments.length||r?0:1);t.tokens[s].comments[o]=(t.tokens[s].comments[o]||"")+e}else{t.tokens[s].comments;t.tokens[s]=t.tokens[s]+e}}split(t,e,n){return this.lex(e,n).tokens}match(t,e,n){return this.lex(e,n).matches}regParse(t,e){return this.lex(t,Object(u.a)({useRegex:!0},e||{}))}regSplit(t,e){return this.regParse(t,e).tokens}regMatch(t,e){return this.regParse(t,e).matches}}d.$blocks=[["(",")"],["[","]"],["{","}"]],d.$quotes=['"',"'","`"],d.$comments=[["/*","*/"],["//","\n"]],d.$cache={}},function(t,e,n){"use strict";var r=n(16);e.a=function(t){return Object(r.a)(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)}},,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(0),i=n(2),s=n(1),o=n(4),a=n(9),c=n(39);function l(t,e,n=!1,u=!1,h=!1){var f=0,d=t.shift();if((Object(a.a)(d)||!0===d||!1===d)&&(f=d,d=t.shift()),!t.length)throw new Error("_merge() requires two or more array/objects.");return t.forEach((t,m)=>{(Object(o.a)(t)||Object(i.a)(t))&&(n?Object(c.a)(t):Object.getOwnPropertyNames(t)).forEach(i=>{if(e(i,d,t,m)){var o=d[i],c=t[i];if((Object(r.a)(o)&&Object(r.a)(c)||Object(s.a)(o)&&Object(s.a)(c))&&(!0===f||f>0))d[i]=Object(r.a)(o)&&Object(r.a)(c)?[]:{},l([Object(a.a)(f)?f-1:f,d[i],o,c],e,n,u,h);else if(Object(r.a)(d)&&Object(r.a)(t))u?d[i]=c:d.push(c);else try{h?Object.defineProperty(d,i,Object.getOwnPropertyDescriptor(t,i)):d[i]=t[i]}catch(t){}}})}),d}},,function(t,e,n){"use strict";e.a=function(t){return t instanceof String||"string"==typeof t&&null!==t}},function(t,e,n){"use strict";var r=n(11);e.a=function(...t){return Object(r.a)(t,(t,e,n)=>!0,!1,!1,!1)}},function(t,e,n){"use strict";e.a=function(t,e=1){var n=0;t.forEach(t=>{n++});var r=t.slice(t.length-n,e);return arguments.length>1?r:r[0]}},function(t,e,n){"use strict";e.a=function(t){return t instanceof Number||"number"==typeof t}},function(t,e,n){"use strict";var r=n(4),i=n(9);e.a=function(t,e){var n=void 0;return Object(r.a)(t)&&Object.keys(t).forEach((r,s)=>{!1!==n&&(n=e(Object(i.a)(r)?parseFloat(r):r,t[r],s))}),n}},function(t,e,n){"use strict";var r=n(20),i=n(41);e.a=function(t,e,n){return Object(i.a)(Object(r.a)(t,e),n)}},function(t,e,n){"use strict";var r=n(0),i=n(1),s=n(4),o=n(26),a=n(17);e.a=function(t,e,n=!0,c=!0,l=!1,u=!1){if(Object(r.a)(t)&&Object(r.a)(e)){var h=[],f=!0;return t.forEach(t=>{if(f){var d=!1;Object(a.a)(e,(e,o)=>{(!d||c&&Object(s.a)(t))&&(d=n(t,o),(Object(r.a)(d)&&!d.length||Object(i.a)(d)&&!Object.keys(d).length)&&(d=!1),Object(s.a)(d)&&c&&(t=d))}),Object(s.a)(d)?h.push(c?d:t):Object(o.a)(d)?l&&!d||!l&&d?h.push(t):u&&(f=!1):h.push(d)}}),h}if(Object(i.a)(t)&&Object(i.a)(e)){h={},f=!0;return Object.keys(t).forEach(a=>{if(f){var d=n(t[a],e[a]);(Object(r.a)(d)&&!d.length||Object(i.a)(d)&&!Object.keys(d).length)&&(d=!1),Object(s.a)(d)?h[a]=c?d:t[a]:Object(o.a)(d)?l&&!d||!l&&d?h[a]=t[a]:u&&(f=!1):h[a]=d}}),h}}},function(t,e,n){"use strict";e.a=function(t,e,n=!1){if(""==e)return t;var r=n?t.lastIndexOf(e):t.indexOf(e);return-1===r?"":t.substr(r+e.length)}},function(t,e,n){"use strict";e.a=function(t,e,n){return t.startsWith(e)&&t.endsWith(n)}},function(t,e,n){"use strict";e.a=function(t){return"function"==typeof t}},function(t,e,n){"use strict";e.a=function(t,e,n=!1){if(""==e)return t;var r=n?t.lastIndexOf(e):t.indexOf(e);return-1===r?t:t.substr(0,r)}},function(t,e,n){"use strict";e.a=function(t){return null===t||""===t}},function(t,e,n){"use strict";e.a=function(t,e,n=!1){for(var r=t.indexOf(e);r>-1&&(n||!1===n);)t.splice(r,1),n>0&&n--,r=t.indexOf(e);return t}},function(t,e,n){"use strict";e.a=function(t){return!0===t||!1===t}},function(t,e,n){"use strict";var r=function(t){return!Array.isArray(t)&&"object"==typeof t&&t};var i=function(){if(!(r(this)&&this.window||"undefined"!=typeof window))throw new Error("A window context is required.");const t=r(this)&&this.window?this.window:window;if(t.WebQit||(t.WebQit={}),!t.WebQit.window){let e,n;Object.defineProperty(t.WebQit,"window",{get:()=>t}),Object.defineProperty(t.WebQit,"vendor",{value:{getName:()=>(e||(e=function(t){if(void 0!==t.InstallTrigger)return"firefox";if(/constructor/i.test(t.HTMLElement)||"[object SafariRemoteNotification]"===(!t.safari||void 0!==t.safari&&t.safari.pushNotification).toString())return"safari";var e=!(!t.chrome||!t.chrome.webstore&&!t.chrome.runtime),n=e&&-1!=t.navigator.userAgent.indexOf("Edg"),r=!!t.opr&&!!t.opr.addons||!!t.opera||t.navigator.userAgent.indexOf(" OPR/")>=0,i=!!t.document.documentMode,s=!i&&!!t.StyleMedia;return(e||r)&&t.CSS,s?"edge":i?"ie":r?"opera":n?"ie-chromium":e?"chrome":"unknown"}(t)),e),getPrefix:()=>(n||(n=function(t){var e=t.getComputedStyle(t.document.documentElement,""),n=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+n+")","i"))||[])[1],prefix:n,css:"-"+n+"-"}}(t)),n)}})}return t.WebQit},s=function(t){return"function"==typeof t},o=function(t){return Array.isArray(t)||"object"==typeof t&&t||s(t)},a=function(t){return function(t){return t instanceof Number||"number"==typeof t}(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)};class c{constructor(t,e=!0){this.window=t,this.async=e,this.readCallbacks=[],this.writeCallbacks=[],this._run()}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((t,e)=>{t&&!t()&&(this.readCallbacks[e]=null)}),this.writeCallbacks.forEach((t,e)=>{t&&!t()&&(this.writeCallbacks[e]=null)}),this._run()})}onread(t,e=!1){if(e)return new Promise((e,n)=>{!1===this.async?t(e,n):this.readCallbacks.push(()=>{t(e,n)})});!1===this.async?t():this.readCallbacks.push(t)}onwrite(t,e=!1){if(e)return new Promise((e,n)=>{!1===this.async?t(e,n):this.writeCallbacks.push(()=>{t(e,n)})});!1===this.async?t():this.writeCallbacks.push(t)}cycle(t,e,n){this.onread(()=>{var r=t(n);if(r){var i=r=>{this.onwrite(()=>{var i=e(r,n);if(i){var s=n=>{this.cycle(t,e,n)};i instanceof Promise?i.then(s):s()}})};r instanceof Promise?r.then(i):i()}})}}var l=function(t){return t instanceof String||"string"==typeof t&&null!==t},u=function(t){return Array.isArray(t)},h=function(t){return arguments.length&&(void 0===t||void 0===t)},f=function(t){return null===t||""===t},d=function(t,e=!0){return u(t)?t:!e&&r(t)?[t]:!1!==t&&0!==t&&function(t){return f(t)||h(t)||!1===t||0===t||o(t)&&!Object.keys(t).length}(t)?[]:function(t){return!l(t)&&!h(t.length)}(t)?Array.prototype.slice.call(t):r(t)?Object.values(t):[t]},m=function(t){const e=i.call(this);e.DOM.isDOMReady||"complete"===e.window.document.readyState?t(e.window):(e.window.domReadyCallbacks||(e.window.domReadyCallbacks=[],e.window.document.addEventListener("DOMContentLoaded",()=>{e.DOM.isDOMReady=!0,e.window.domReadyCallbacks.splice(0).forEach(t=>t(e.window))},!1)),e.window.domReadyCallbacks.push(t))};class b{constructor(t){this.window=t}onAdded(t,e,n={}){return n.on="added",this.onPresenceChange(t,(t,n,r,i,s)=>{e(t,n,r,i,s)},n)}onRemoved(t,e,n={}){return n.on="removed",this.onPresenceChange(t,(t,n,r,i,s)=>{e(t,n,r,i,s)},n)}onPresent(t,e,n={}){m.call(this.window,()=>{this.window.MutationObserver&&this.onAdded(t,(t,n)=>{t.forEach(t=>e(t,n))},n),l(t)?d(this.window.document.querySelectorAll(t)).forEach(t=>e(t,1)):t.parentNode&&e(t,1)})}onAbsent(t,e,n={}){m.call(this.window,()=>{this.window.MutationObserver&&onRemoved(t,(t,n)=>{t.forEach(t=>e(t,n))},n),l(t)?0===d(this.window.document.querySelectorAll(t)).length&&e(null,0):t.parentNode||e(t,0)})}onPresenceChange(t,e,n={}){t=d(t,!1);var r=(t,e)=>(e.$$searchCache||(e.$$searchCache=new Map),t.reduce((t,r)=>{var i;return e.$$searchCache.has(r)?i=e.$$searchCache.get(r):(i=((t,e)=>{if(e=e.filter(t=>t.matches),l(t)){var r=e.filter(e=>e.matches(t));if(!1!==n.observeIndirectMutation&&(r=e.reduce((e,n)=>e.concat(d(n.querySelectorAll(t))),r)).length)return r}else{if(e.includes(t))return[t];if(!1!==n.observeIndirectMutation&&e.length)for(var i=t;i=i.parentNode;)if(e.includes(i))return[t]}})(r,e,l(r))||[],e.$$searchCache.set(r,i)),t.concat(i)},[])),i=new Set,s=new Set,o=(o,a,c)=>{a&&"removed"===n.on||!a&&"added"===n.on||(o=r(t,o)).length&&(n.maintainCallState?(o.forEach(t=>{a?(i.add(t),s.delete(t)):(i.delete(t),s.add(t))}),e(o,a,c,i,s)):e(o,a,c))},a=n.context||this.window.document.documentElement;return this._observe(a,(t,e,r,i)=>{n.ignoreTransients||(o(t,0,!0),o(t.concat(e),1,!0),o(e,0,!0)),o(i,0),o(r,1)})}onAttrChange(t,e,n=[]){var r=new this.window.MutationObserver(e),i={attributes:!0,attributeOldValue:!0};return n&&(i.attributeFilter=n),r.observe(t,i),r}onTreeChange(t,e,n=!1){var r=new this.window.MutationObserver(e),i={childList:!0,subtree:n};return r.observe(t,i),r}onMutation(t,e,n){var r=new this.window.MutationObserver(e);return r.observe(t,n),r}_observe(t,e){if(!p.has(t)){const e=new Set,n=new this.window.MutationObserver(t=>{if(e.size){var n=t.reduce((t,e)=>t.concat(d(e.addedNodes)),[]),r=t.reduce((t,e)=>t.concat(d(e.removedNodes)),[]),i=[],s=[];n=new Set(n),r=new Set(r),n.forEach(t=>{r.has(t)&&(r.delete(t),n.delete(t),t.isConnected?i.push(t):s.push(t))}),n=[...n],r=[...r],e.forEach(t=>t(i,s,n,r))}});n.observe(t,{childList:!0,subtree:!0}),p.set(t,{callbacks:e,observer:n})}const n=p.get(t);return n.callbacks.add(e),{disconnect(){n.callbacks.delete(e)},reconnect(){n.callbacks.add(e)}}}}const p=new Map;var g=function(t){!function(t){t.CSS||(t.CSS={});t.CSS.escape||(t.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}(t),function(t){"isConnected"in t.Node.prototype||Object.defineProperty(t.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(t),function(t){t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;--n>=0&&e.item(n)!==this;);return n>-1})}(t)};function O(t,e=null,n=!1){const r=i.call(this);if(l(t)){var s;if(t.trim().startsWith("<")){var o=r.window.document.createElement("div");o.innerHTML=t,s=n?d(o.children):o.firstChild}else s=n?d(w.call(this,t,e)):j.call(this,t,e);return s}return t instanceof r.window.Element?n?[t]:t:n?d(t):t}function v(t,e=null){return O.call(this,t,e,!0)}function j(t,e=null,n=!1){const r=i.call(this);e=e||r.window.document;var s,o=n?"querySelectorAll":"querySelector";try{s=e[o](t)}catch(n){try{s=e[o](t.replace(/\:is\(/g,":matches("))}catch(n){try{s=e[o](t.replace(/\:is\(/g,":-webkit-any("))}catch(n){try{s=e[o](t.replace(/\:is\(/g,":-moz-any("))}catch(t){throw t}}}}return s}function w(t,e=null){return j.call(this,t,e,!0)}var y=function(t){return s(t)||t&&"[object function]"==={}.toString.call(t)};var k=function(t,e,n={},r={}){e=d(e).slice();for(var i=t;!h(i)&&!f(i)&&e.length;){var s=e.shift();if(!(n.get?n.get(i,s):o(i)?s in i:i[s]))return void(r.exists=!1);i=n.get?n.get(i,s):i[s]}return r.exists=!0,i},E=function(t,e,n,r={},i={}){const s=(t,n,r)=>i.set?i.set(t,n,r):(a(e[l])&&u(t)?t.push(r):t[n]=r,!0);e=d(e);for(var c=t,l=0;l<e.length;l++){if(!(l<e.length-1))return s(c,e[l],n);if(!c||!o(c)&&!y(c))return!1;var h=k(c,e[l],i);if(!o(h)){if(!1===i.buildTree)return!1;if(h=y(i.buildTree)?i.buildTree(l):a(e[l+1])?[]:{},!s(c,e[l],h))return!1}c=h}},C=function(t,e,n=!1,r={}){e=d(e);var i=!1;do{var s=""===(s=e.pop())?0:s,a=t;e.length&&(a=k(t,e,{},r)),(o(a)||y(a))&&(r.has?r.has(a,s):s in a)&&(r.deleteProperty?i=r.deleteProperty(a,s):r.del?i=r.del(a,s):(delete a[s],i=!0))}while(i&&n&&e.length&&(o(a)||y(a))&&!(r.keys?r.keys(a):Object.keys(a)).length);return i};function M(t,e=!1){const n=i.call(this);var s={};return!(s.el=n.window.document.head.querySelector('meta[name="oohtml"]'))&&e&&(s.el=n.window.document.createElement("meta"),s.el.setAttribute("name",t),n.window.document.head.append(s.el)),s.el&&(s.vars=(s.el.getAttribute("content")||"").split(";").filter(t=>t).reduce((t,e)=>{var n=e.split("=").map(t=>t.trim());return E(t,n[0].split("."),"true"===n[1]||"false"!==n[1]&&(a(n[1])?parseInt(n[1]):n[1])),t},{})),s.get=function(t){return k(this.vars,t.split("."))},s.set=function(t,n=null,i=!1){var s=r(t)?t:{[t]:!0===n?"true":n};if(i=arguments.length<3?n:i,Object.keys(s).forEach(t=>{if(!1===s[t])C(this.vars,t.split("."));else if(r(s[t]))Object.keys(s[t]).forEach(e=>{var n=(t+"."+e).split(".");i&&k(this.vars,n)||E(this.vars,n,s[t][e])});else{var e=t.split(".");i&&k(this.vars,e)||E(this.vars,e,s[t])}}),e){const t=(e,n)=>Object.keys(n).reduce((i,s)=>{var o=(e?e+".":"")+s;return r(n[s])?i.push(...t(o,n[s])):i.push(o+"="+n[s]),i},[]);this.el.setAttribute("content",t("",this.vars).join(";"))}return!0},s.defaults=function(t,e=null){return this.set(t,e,!0)},s}e.a=function(){const t=i.call(this);return t.DOM||(t.DOM={},g(t.window),t.DOM.reflow=new c(t.window),t.DOM.mutations=new b(t.window),t.DOM.meta=M.bind(t.window),t.DOM.query=O.bind(t.window),t.DOM.queryAll=v.bind(t.window),t.DOM.ready=m.bind(t.window)),t}},function(t,e,n){"use strict";var r=n(0),i=n(1),s=n(9);const o=function(t,e=1,n=!0){return!Object(s.a)(e)||e<=0?t:(!Object(r.a)(t)&&Object(i.a)(t)&&n&&(t=Object.values(t)),Object(r.a)(t)?t.reduce((t,s)=>Object(r.a)(s)||Object(i.a)(s)&&n?t.concat(o(Object(r.a)(s)?s:Object.values(s),e-1,n)):t.concat(s),[]):t)};e.a=o},,function(t,e,n){"use strict";e.a=function(t,...e){return e.forEach(e=>{t.indexOf(e)<0&&t.push(e)}),t}},function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f}));var r=n(27),i=n(14),s=n(8),o=n(21),a=n(18),c=(n(23),n(20),n(5));n(3);function l(t,e={}){const n=r.a.call(this);return n.OOHTML||(n.OOHTML={}),n.OOHTML.meta||(n.OOHTML.meta=n.DOM.meta("oohtml",!0)),n.OOHTML.meta.defaults(Object(i.a)(3,t,e)),n.OOHTML.meta}function u(t,e,n,r=null){var i=e.split("#")[0].split("/").map(t=>t.trim()).filter(t=>t);return b(t,i,n,r)}function h(t){var e=s.a.split(t.trim(),[":"]);return[t=e.shift(),e.reduce((t,e)=>{var[n,r]=s.a.split(e.trim(),[]);return t[n]=Object(a.a)(r,"(",")"),t},{})]}function f(t,e){return e=e.split("#")[0].split("/").map(t=>t.trim()).filter(t=>t),!!(t=t.split("#")[0].split("/").map(t=>t.trim()).filter(t=>t)).length&&t.reduce((t,n,r)=>!!t&&s.a.split(n.trim(),["|","+"]).reduce((t,n)=>{var[n,i]=h(n),s=(n=n.trim())===e[r];if(!s&&("deep"in i||"deepest"in i)){var o=e.slice(r+1).reduce((t,e,r)=>t>-1&&"deep"in i?t:e===n?r:t,-1);if(o>-1){e.splice(r,o+1);s=!0}}return t||s},!1),!0)}const d=(t,e)=>s.a.split(t.trim(),["|","+"],{preserveDelims:!0}).reduce((t,n)=>{var r;return(n.startsWith("|")||n.startsWith("+"))&&(r=n.substr(0,1),n=n.substr(1).trim()),t.theEnd||"|"===r&&t.length?(t.theEnd=!0,t):t.concat(e(n.trim()))},[]).filter(t=>t),m=(t,e,n)=>{const r=t=>t.reduce((t,e)=>t.concat(...n(e).values()),[]);return d(e,e=>{var[e,i]=h(e);return t.reduce((t,s)=>{var l=n(s);"*"===e&&(e="("+l.keys().join("+")+")");var u=Object(o.a)(e,"(",")")?m([s],Object(a.a)(e,"(",")"),n):Object(c.a)(l.get(e),!1),h=[];return Object.keys(i).forEach(t=>{if("deep"===t||"deepest"===t)for(var o=[s];("deepest"===t||!u.length)&&(o=r(o)).length;){var a=m(o,`${e}${h.map(t=>`:${t}(${i[t]})`).join("")}`,n);a.length&&(u=a)}else"having"!==t&&"not-having"!==t||(u=u.filter(e=>{var r=d(i[t],t=>n(e,t));return"not-having"===t?!r.length:r.length})),h.push(t)}),t.concat(u)},[])})},b=function(t,e,n,r=null,i=0){if(!e.length)return[];var s,o=e.shift();o.endsWith(".")&&(s=!0,o=o.substr(0,o.length-1).trim());var a=m(t,o,n);if(a.length&&s)return a;if(e.length){var c=b(a,e.slice(),n,r,i+1);return-1===c?r(a,i,!0):c}return r?r(a,i):a}},function(t,e,n){"use strict";var r=n(1);e.a=function(t){return Object(r.a)(t)&&Object.getPrototypeOf(t)===Object.prototype}},function(t,e,n){"use strict";var r=n(0),i=n(2),s=n(11);e.a=function(t,e=[]){return Object(s.a)([{},t],(t,n,s)=>{if(!Object(i.a)(s[t]))return Object(i.a)(e)?e(t):!Object(r.a)(e)||!e.length||e.indexOf(t)>-1},!1,!1,!1)}},function(t,e,n){"use strict";var r=n(24),i=n(7),s=n(4);e.a=function(t){return Object(r.a)(t)||Object(i.a)(t)||!1===t||0===t||Object(s.a)(t)&&!Object.keys(t).length}},function(t,e,n){"use strict";var r=n(16),i=n(0),s=n(1),o=(n(4),n(2)),a=n(32),c=n(19);const l=function(t,e,n=!0,u=1){if(Object(i.a)(t)&&Object(i.a)(e)&&t.length!==e.length)return!n;if(Object(s.a)(t)&&Object(s.a)(e)){var h=Object.keys(t),f=Object.keys(e);if(!h.length&&!f.length)return Object(a.a)(t)&&Object(a.a)(e)?n:t===e===n;if(!l(h,f))return!n}if(u>0&&(Object(i.a)(t)&&Object(i.a)(e)||Object(s.a)(t)&&Object(s.a)(e))){var d=Object(c.a)(t,e,(t,e)=>l(t,e,n,u-1),!1,!1,!0);return Object(i.a)(d)?d.length===t.length&&d.length===e.length:Object(s.a)(d)&&Object(s.a)(t)?Object.keys(d).length===Object.keys(t).length&&Object.keys(d).length===Object.keys(e).length:d}return Object(o.a)(n)?n(t,e):Object(r.a)(t)&&Object(r.a)(e)&&isNaN(t)&&isNaN(e)?n:t===e===n};e.a=l},function(t,e,n){"use strict";e.a=function(t){return t.filter((t,e,n)=>n.indexOf(t)===e)}},,function(t,e,n){"use strict";var r=n(13),i=n(7);e.a=function(t){return!Object(r.a)(t)&&!Object(i.a)(t.length)}},function(t,e,n){"use strict";var r=n(30),i=n(40);e.a=function(t,e){var n=[];return Object(i.a)(t,e).forEach(t=>{Object(r.a)(n,...Object.getOwnPropertyNames(t))}),n}},function(t,e,n){"use strict";var r=n(0);e.a=function(t,e){e=(e=e||Object.prototype)&&!Object(r.a)(e)?[e]:e;var n=[];for(t=t;t&&(!e||e.indexOf(t)<0)&&"default"!==t.name;)n.push(t),t=t?Object.getPrototypeOf(t):null;return n}},function(t,e,n){"use strict";var r=n(23);e.a=function(t,e){return Object(r.a)(t,e,!0)}},,function(t,e,n){"use strict";var r=n(0);e.a=function(t,e,n=null){return Object(r.a)(e)?t.filter(t=>n?e.filter(e=>n(t,e)).length:-1===e.indexOf(t)):[]}},,,function(t,e,n){"use strict";e.a=function(t,e){return t.reduce((t,n,r)=>t||e(n,r),!1)}},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(46),i=n(5),s=n(25),o=n(36),a=n(43),c=(n(17),n(27)),l=n(3),u=n(31);function h(t=null,e=!1){const n=c.a.call(this);if(e)return void n.DOM.ready(()=>{h.call(this,t,!1)});const b=n.window,p=n.window.document,g=n.DOM.mutations,O=[],v=u.a.call(this,{element:{import:"import"},attr:{importid:"name",exportsearch:"exportsearch"}},t);f.push(v.get("attr.importid"),v.get("attr.moduleref"));const j="["+b.CSS.escape(v.get("attr.moduleref"))+"]",w="["+b.CSS.escape(v.get("attr.exportgroup"))+"]",y=class{static create(t){return new y(t)}constructor(t){this.el=t;const[e,n]=Object(u.b)(t.getAttribute(v.get("attr.importid"))||"default");Object(l.a)(this.el,"oohtml").set("importID",e),Object(l.a)(this.el,"oohtml").set("importModifiers",n)}hydrate(t,e,n){Object(l.a)(this.el,"oohtml").set("anchorNode",t),Object(l.a)(this.el,"oohtml").set("slottedElements",e),Object(l.a)(this.el,"oohtml").set("compositionBlock",n),this._bindSlotted(e),this._connectToCompositionBlock()}connectedCallback(){Object(l.a)(this.el,"oohtml").has("anchorNode")||(Object(l.a)(this.el,"oohtml").set("anchorNode",v.get("isomorphic")?p.createComment(this.el.outerHTML):p.createTextNode("")),Object(l.a)(this.el,"oohtml").set("compositionBlock",this.el.hasAttribute(v.get("attr.moduleref"))?this.el.getAttribute(v.get("attr.moduleref")).trim().startsWith("~")?this.el.parentNode.closest(w):null:this.el.parentNode.closest(j)),this._connectToCompositionBlock()),n.DOM.ready.call(n,()=>{this.resolve()})}_connectToCompositionBlock(){this.compositionBlock&&Object(l.a)(this.compositionBlock,"oohtml","imports").set(this.importID,this.el)}_bindSlotted(t){t.forEach(t=>{t.importReference=this.el}),Object(l.a)(this.el,"oohtml").set("slottedObserver",g.onRemoved(t,(e,n,r,i,o)=>{o&&o.size===t.length&&Object(l.a)(this.el,"oohtml").get("slottedObserver").disconnect(),e.forEach(t=>{t.parentNode||Object(s.a)(this.slottedElements,t),t.importReference===this.el&&delete t.importReference}),this.slottedElements.length||this.anchorNode.isConnected&&this.anchorNode.replaceWith(this.el)},{maintainCallState:!0,ignoreTransients:!0}))}resolve(){if(!Object(r.a)(O,t=>this.el.closest(t))){var t,e;if(this.el.hasAttribute(v.get("attr.moduleref")))this.compositionBlock&&Object(l.a)(this.compositionBlock,"oohtml","imports").get(this.importID)===this.el&&Object(l.a)(this.compositionBlock,"oohtml","imports").delete(this.importID),t=this.el;else{if(!this.compositionBlock)return void console.warn("Scoped slots must be found within template contexts. ["+this.importID+"]",this.el);t=this.compositionBlock}var n=t.getAttribute(v.get("attr.moduleref")).trim(),i=this.el.getAttribute(v.get("attr.exportsearch"));t&&(e=((t,e,n)=>{var r=this.importID,i=this.importModifiers,[s,o]="search"in i||null!==n?("search"in i?i.search:n).split("-").filter(t=>t).map(t=>parseInt(t||0)).concat([0,1e3]):[0,0];return Object(u.d)(t,e,(function(t,e){var n=Object(l.a)(t,"oohtml","templates");return 1===arguments.length?n:e.startsWith(":")?Object(l.a)(t,"oohtml","exports").get(e.substr(1)):n.get(e)}),(function(t,e,n){var i=t.reduce((t,e)=>t.concat(Object(l.a)(e,"oohtml","exports").get(r)||[]),[]);return!i.length&&e>s&&o?(o--,-1):i}))})([n.startsWith("~")?this.compositionBlock:p],n,i)).length?Object(a.a)(e,Object(l.a)(this.el,"oohtml").get("originalSlottedElements")||[]).length&&(Object(l.a)(this.el,"oohtml").set("originalSlottedElements",e),this.fill(e)):(Object(l.a)(this.el,"oohtml").set("originalSlottedElements",null),this.empty())}}fill(t){t=Object(i.a)(t,!1).map(t=>t.cloneNode(!0)),this.empty(!0),this.el.isConnected&&this.el.replaceWith(this.anchorNode),t.forEach(t=>{Object(l.a)(t,"oohtml","templates").set("~",this.el),function(t,e,n=[],r=!0){n=n.concat(f),t.hasAttribute("noinherit")&&(n=n.concat((t.getAttribute("noinherit")||"*").split(" ").map(t=>t.trim())));var i=m.concat(["role","class"]);if(Object(o.a)(i).forEach(i=>{var s,a;if(!n.includes(i)&&!n.includes("*")&&(s=e.getAttribute(i))){if(a=t.getAttribute(i))var c=r?[a,s]:[s,a];else c=[s];t.setAttribute(i,Object(o.a)(c.join(" ").split(" ").map(t=>t.trim())).join(" ")),n.push(i)}}),Object(o.a)(d.concat("style")).forEach(i=>{var s,o;if(!n.includes(i)&&!n.includes("*")&&(s=e.getAttribute(i))){if(o=t.getAttribute(i))(a=r?[o,s]:[s,o])[0].trim().endsWith(";")||(a[0]=a[0]+";");else var a=[s];t.setAttribute(i,a.join(" ")),n.push(i)}}),!n.includes("*"))for(var s=0;s<e.attributes.length;s++){var a=e.attributes[s];n.includes(a.name)||t.hasAttribute(a.name)&&!r||t.setAttribute(a.name,a.value)}}(t,this.el),t.getAttribute(v.get("attr.exportgroup"))||t.setAttribute(v.get("attr.exportgroup"),this.importID),this.anchorNode.before(t)}),this._bindSlotted(t),this.slottedElements.push(...t)}empty(t=!1){if(this.slottedElements){var e=this.slottedElements;t&&Object(l.a)(this.el,"oohtml").has("slottedObserver")&&(Object(l.a)(this.el,"oohtml").get("slottedObserver").disconnect(),e=this.slottedElements.splice(0)),e.forEach(t=>t.remove())}}get importID(){return Object(l.a)(this.el,"oohtml").get("importID")}get importModifiers(){return Object(l.a)(this.el,"oohtml").get("importModifiers")}get anchorNode(){return Object(l.a)(this.el,"oohtml").get("anchorNode")}get compositionBlock(){return Object(l.a)(this.el,"oohtml").get("compositionBlock")}get slottedElements(){return Object(l.a)(this.el,"oohtml").has("slottedElements")||Object(l.a)(this.el,"oohtml").set("slottedElements",[]),Object(l.a)(this.el,"oohtml").get("slottedElements")}get exports(){return Object(l.a)(this.el,"oohtml").get("exports")}static get observedAttributes(){return[v.get("attr.importid")]}};g.onPresent(v.get("element.import"),t=>{y.create(t).connectedCallback()});const k=(t,e)=>{const n=(t,n)=>!e||n===e||!0===e&&(this.importModifiers&&"search"in this.importModifiers||t.getAttribute(v.get("attr.exportsearch")));if(t.matches(v.get("element.import"))){var r=y.create(t);r.connectedCallback(),n(t,r.importID)&&r.resolve()}else Object(l.a)(t,"oohtml","imports").forEach((t,e)=>{n(t,e)&&y.create(t).resolve()})};g.onPresent(j,t=>{Object(r.a)(O,e=>t.closest(e))||g.onAttrChange(t,e=>{e[0].target.getAttribute(e[0].attributeName)!==e[0].oldValue&&k(t)},[v.get("attr.moduleref"),v.get("attr.importid")])}),p.addEventListener("templatemutation",t=>{t.detail.path&&Object(i.a)(p.querySelectorAll("["+b.CSS.escape(v.get("attr.moduleref"))+"]")).forEach(e=>{Object(u.c)(e.getAttribute(v.get("attr.moduleref")),t.detail.path)&&(k(e,!0),t.detail.addedExports.concat(t.detail.removedExports).forEach(t=>{k(e,t.name)}))})});n.DOM.ready.call(n,()=>{v.get("isomorphic")&&Object(i.a)(p.querySelectorAll(w)).forEach(t=>{if(!Object(l.a)(t.parentNode,"oohtml").get("importsCan")){var e=[];t.parentNode.childNodes.forEach(t=>{var n;if(1===t.nodeType&&t.matches(w))e.push(t);else if(8===t.nodeType&&(n=t.nodeValue.trim())&&n.startsWith("<"+v.get("element.import"))&&n.endsWith("</"+v.get("element.import")+">")){var r,i=p.createElement("div");if(i.innerHTML=n,(r=i.firstChild).matches(v.get("element.import"))){var s=r.hasAttribute(v.get("attr.moduleref"))?r.getAttribute(v.get("attr.moduleref")).trim().startsWith("~")?t.parentNode.closest(w):null:t.parentNode.closest(j);y.create(r).hydrate(t,e,s),e=[]}}}),Object(l.a)(t.parentNode,"oohtml").set("importsCan",!0)}})})}const f=["nocompose"],d=[],m=[]},,,,,,,function(t,e,n){"use strict";n.r(e),n(66).a.call(window)}]);
//# sourceMappingURL=html-imports.js.map