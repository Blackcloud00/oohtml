!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=74)}([function(t,e,r){"use strict";var n=r(21);e.a=function(t){return Array.isArray(t)||"object"==typeof t&&t||Object(n.a)(t)}},function(t,e,r){"use strict";e.a=function(t){return Array.isArray(t)}},function(t,e,r){"use strict";e.a=function(t){return!Array.isArray(t)&&"object"==typeof t&&t}},function(t,e,r){"use strict";var n=r(1),i=r(7),s=r(11),o=r(39),c=r(2);e.a=function(t,e=!0){return Object(n.a)(t)?t:!e&&Object(c.a)(t)?[t]:!1!==t&&0!==t&&Object(o.a)(t)?[]:function(t){return!Object(i.a)(t)&&!Object(s.a)(t.length)}(t)?Array.prototype.slice.call(t):Object(c.a)(t)?Object.values(t):[t]}},function(t,e,r){"use strict";r.d(e,"a",(function(){return M})),r.d(e,"b",(function(){return A})),r.d(e,"e",(function(){return N})),r.d(e,"c",(function(){return _})),r.d(e,"d",(function(){return D}));var n=r(20),i=r(13),s=r(7),o=r(11),c=r(5),a=r(3),l=r(1),u=r(2),h=r(6);const b=function(t,e=1,r=!0){return!Object(h.a)(e)||e<=0?t:(!Object(l.a)(t)&&Object(u.a)(t)&&r&&(t=Object.values(t)),Object(l.a)(t)?t.reduce((t,n)=>Object(l.a)(n)||Object(u.a)(n)&&r?t.concat(b(Object(l.a)(n)?n:Object.values(n),e-1,r)):t.concat(n),[]):t)};var d=b,f=r(18),m=r(14),p=r(17),O=r(0),g=function(t){return Object(u.a)(t)&&Object.getPrototypeOf(t)===Object.prototype},j=function(t){return!0===t||!1===t},v=r(12);const w=function(t,e,r=!0,n=1){if(Object(l.a)(t)&&Object(l.a)(e)&&t.length!==e.length)return!r;if(Object(u.a)(t)&&Object(u.a)(e)){var i=Object.keys(t),s=Object.keys(e);if(!i.length&&!s.length)return g(t)&&g(e)?r:t===e===r;if(!w(i,s))return!r}if(n>0&&(Object(l.a)(t)&&Object(l.a)(e)||Object(u.a)(t)&&Object(u.a)(e))){var o=function(t,e,r=!0,n=!0,i=!1,s=!1){if(Object(l.a)(t)&&Object(l.a)(e)){var o=[],c=!0;return t.forEach(t=>{if(c){var a=!1;Object(v.a)(e,(e,i)=>{(!a||n&&Object(O.a)(t))&&(a=r(t,i),(Object(l.a)(a)&&!a.length||Object(u.a)(a)&&!Object.keys(a).length)&&(a=!1),Object(O.a)(a)&&n&&(t=a))}),Object(O.a)(a)?o.push(n?a:t):j(a)?i&&!a||!i&&a?o.push(t):s&&(c=!1):o.push(a)}}),o}if(Object(u.a)(t)&&Object(u.a)(e)){o={},c=!0;return Object.keys(t).forEach(a=>{if(c){var h=r(t[a],e[a]);(Object(l.a)(h)&&!h.length||Object(u.a)(h)&&!Object.keys(h).length)&&(h=!1),Object(O.a)(h)?o[a]=n?h:t[a]:j(h)?i&&!h||!i&&h?o[a]=t[a]:s&&(c=!1):o[a]=h}}),o}}(t,e,(t,e)=>w(t,e,r,n-1),!1,!1,!0);return Object(l.a)(o)?o.length===t.length&&o.length===e.length:Object(u.a)(o)&&Object(u.a)(t)?Object.keys(o).length===Object.keys(t).length&&Object.keys(o).length===Object.keys(e).length:o}return Object(c.a)(r)?r(t,e):Object(p.a)(t)&&Object(p.a)(e)&&isNaN(t)&&isNaN(e)?r:t===e===r};var y=w,k=r(22),E=function(t,e=[]){return Object(k.a)([{},t],(t,r,n)=>{if(!Object(c.a)(n[t]))return Object(c.a)(e)?e(t):!Object(l.a)(e)||!e.length||e.indexOf(t)>-1},!1,!1,!1)};class C{static lex(t,e,r={}){if(!Object(s.a)(t+=""))throw new Error("Argument1 must be a string!");var n=t=>({delims:t.delims.slice(),options:E(t.options),nesting:t.nesting.slice(),maxDepth:t.maxDepth,comments:t.comments.slice(),tokens:t.tokens.slice(),matches:t.matches.slice(),matchesi:E(t.matchesi)});if(C.$cache[t]&&!1!==r.cache)for(var i=0;i<C.$cache[t].length;i++){var o=C.$cache[t][i];if(y(o.delims,e))return n(o)}var c=new C(t,r).lex(e);return!1!==r.cache&&(C.$cache[t]=C.$cache[t]||[],C.$cache[t].push(c)),n(c)}static split(t,e,r){return C.lex(t,e,r).tokens}static match(t,e,r){return C.lex(t,e,r).matches}constructor(t,e){if(!Object(s.a)(t))throw new Error("Lexer requires the first argument to be a string.");this.$str=t,this.$options=e||{},this.$options.blocks||(this.$options.blocks=C.$blocks),this.$options.quotes||(this.$options.quotes=C.$quotes),this.$options.comments||(this.$options.comments=C.$comments)}lex(t,e){for(var r={delims:Object(a.a)(t),options:Object(i.a)(!0,{},this.$options,e||{}),nesting:[],maxDepth:0,comments:[],tokens:[],matches:[],matchesi:{}},n=0;"number"==typeof n;)n=this._evalCharsAt(r,n);if(r.nesting.length)throw new Error("Error parsing the string: "+this.$str+". Unterminated blocks: "+d(r.nesting).join(", "));return r}_evalCharsAt(t,e){if(!(e>=this.$str.length)){var r=1,n={},i={},s={};if(t.openComment||(i=this._testQuotes(t,e)),t.openQuote||(n=this._testComments(t,e)),t.openComment||n.ending)if(t.nesting.length||s.ending)this._push(t,this.$str[e]);else r=(c=n.starting||n.ending||this.$str[e]).length,this._push(t,c,"comments",n.starting);else if(t.openQuote||i.ending)this._push(t,this.$str[e]);else{if(t.options.limit&&t.matches.length===t.options.limit)return this._push(t,this.$str[e]),e+1;s=this._testNesting(t,e);s=this._testNesting(t,e);var o=this._testChars(t.options.stopChars||[],t,e);if(!t.nesting.length&&!1!==o)return t.options.stopChar=o,void(t.options.stopCharForward=this.$str.substr(e));if(t.delims.length)if(t.nesting.length||s.ending){var c;r=(c=s.starting||s.ending||this.$str[e]).length,this._push(t,c)}else{this._push(t,"");var a=this._testChars(t.delims,t,e);if(!1!==a&&(t.matches.push(a),t.matchesi[e]=a,r=a.length||1,!t.options.preserveDelims)){var l=e+(a.length||1);return l===this.$str.length&&this._push(t,""),l}this._push(t,a||this.$str[e])}else 2===t.nesting.length&&s.starting?(t.matches.push(null),this._push(t,s.starting),r=s.starting.length):!t.nesting.length&&s.ending?(this._push(t,s.ending),r=s.ending.length,t.matches.push(null)):this._push(t,this.$str[e])}return e+r}}_testQuotes(t,e){var r={};return(t.options.quotes||[]).forEach(n=>{this.$str.substr(e,1)===n&&(t.openQuote?n===t.openQuote&&(t.openQuote=!1,r.ending=n):(t.openQuote=n,r.starting=n))}),r}_testComments(t,e){var r={};return(t.options.comments||[]).forEach(n=>{if(t.openComment){if(Object(m.a)(n)===Object(m.a)(t.openComment)){var i=Object(m.a)(n);this.$str.substr(e).startsWith(i)&&(t.openComment=!1,r.ending=i)}}else{var s=Object(f.a)(n);this.$str.substr(e).startsWith(s)&&(t.openComment=n,r.starting=s)}}),r}_testNesting(t,e){var r={};return(t.options.blocks||[]).forEach(n=>{var i=Object(f.a)(n);if(this.$str.substr(e).startsWith(i))t.nesting=t.nesting.concat([n]),r.starting=i;else if(t.nesting.length&&Object(m.a)(n)===Object(m.a)(Object(m.a)(t.nesting))){var s=Object(m.a)(n);this.$str.substr(e).startsWith(s)&&(t.nesting=t.nesting.slice(0,-1),r.ending=s)}}),t.maxDepth=Math.max(t.maxDepth,t.nesting.length),r}_testChars(t,e,r){for(var n=0;n<t.length;n++){var i=t[n];if(Object(c.a)(i)){var s=i(this.$str.substr(0,r),this.$str.substr(r));if(!1!==s)return s}if(e.options.useRegex){var o=this.$str.substr(r).match(new RegExp("^"+i,!0!==e.options.useRegex?e.options.useRegex:""));if(o)return o[0]}if(!e.options.ci&&this.$str.substr(r,i.length)===i||e.options.ci&&this.$str.substr(r,i.length).toLowerCase()===i.toLowerCase())return i}return!1}_push(t,e,r="tokens",n=!1){var i=t.matches.length;if(Object(o.a)(t.tokens[i])&&(t.tokens[i]=""),"comments"===r){t.tokens[i].comments||(t.tokens[i]=new String(t.tokens[i]),t.tokens[i].comments=[]);var s=t.tokens[i].comments.length-(!t.tokens[i].comments.length||n?0:1);t.tokens[i].comments[s]=(t.tokens[i].comments[s]||"")+e}else{t.tokens[i].comments;t.tokens[i]=t.tokens[i]+e}}split(t,e,r){return this.lex(e,r).tokens}match(t,e,r){return this.lex(e,r).matches}regParse(t,e){return this.lex(t,Object(i.a)({useRegex:!0},e||{}))}regSplit(t,e){return this.regParse(t,e).tokens}regMatch(t,e){return this.regParse(t,e).matches}}C.$blocks=[["(",")"],["[","]"],["{","}"]],C.$quotes=['"',"'","`"],C.$comments=[["/*","*/"],["//","\n"]],C.$cache={};var S=r(27),$=r(28),x=function(t,e,r){return function(t,e){return Object($.a)(t,e,!0)}(Object(S.a)(t,e),r)};function M(t,e={}){const r=n.a.call(this);return r.OOHTML.meta||(r.OOHTML.meta=r.DOM.meta("oohtml",!0)),r.OOHTML.meta.defaults(Object(i.a)(3,t,e)),r.OOHTML.meta}function A(t){var e,r,n=Symbol.for(".webqit");return(r=t[n])||(r={},Object.defineProperty(t,n,{value:r,enumerable:!1})),(e=r.oohtml)||(e={},r.oohtml=e),e}function N(t,e,r,n=null){var i=e.split("#")[0].split("/").map(t=>t.trim()).filter(t=>t);return W(t,i,r,n)}function _(t){var e=C.split(t.trim(),[":"]);return[t=e.shift(),e.reduce((t,e)=>{var[r,n]=C.split(e.trim(),[]);return t[r]=x(n,"(",")"),t},{})]}function D(t,e){return e=e.split("#")[0].split("/").map(t=>t.trim()).filter(t=>t),!!(t=t.split("#")[0].split("/").map(t=>t.trim()).filter(t=>t)).length&&t.reduce((t,r,n)=>!!t&&C.split(r.trim(),["|","+"]).reduce((t,r)=>{var[r,i]=_(r),s=(r=r.trim())===e[n];if(!s&&("deep"in i||"deepest"in i)){var o=e.slice(n+1).reduce((t,e,n)=>t>-1&&"deep"in i?t:e===r?n:t,-1);if(o>-1){e.splice(n,o+1);s=!0}}return t||s},!1),!0)}const P=(t,e)=>C.split(t.trim(),["|","+"],{preserveDelims:!0}).reduce((t,r)=>{var n;return(r.startsWith("|")||r.startsWith("+"))&&(n=r.substr(0,1),r=r.substr(1).trim()),t.theEnd||"|"===n&&t.length?(t.theEnd=!0,t):t.concat(e(r.trim()))},[]).filter(t=>t),T=(t,e,r)=>{const n=t=>t.reduce((t,e)=>t.concat(Object.values(r(e))),[]);return P(e,e=>{var[e,i]=_(e);return t.reduce((t,s)=>{var o=r(s);"*"===e&&(e="("+Object.keys(o).join("+")+")");var c,l,u,h=(l="(",u=")",(c=e).startsWith(l)&&c.endsWith(u)?T([s],x(e,"(",")"),r):Object(a.a)(o[e],!1)),b=[];return Object.keys(i).forEach(t=>{if("deep"===t||"deepest"===t)for(var o=[s];("deepest"===t||!h.length)&&(o=n(o)).length;){var c=T(o,`${e}${b.map(t=>`:${t}(${i[t]})`).join("")}`,r);c.length&&(h=c)}else"having"!==t&&"not-having"!==t||(h=h.filter(e=>{var n=P(i[t],t=>r(e,t));return"not-having"===t?!n.length:n.length})),b.push(t)}),t.concat(h)},[])})},W=function(t,e,r,n=null,i=0){if(!e.length)return[];var s,o=e.shift();o.endsWith(".")&&(s=!0,o=o.substr(0,o.length-1).trim());var c=T(t,o,r);if(c.length&&s)return c;if(e.length){var a=W(c,e.slice(),r,n,i+1);return-1===a?n(c,i,!0):a}return n?n(c,i):c}},function(t,e,r){"use strict";var n=r(21);e.a=function(t){return Object(n.a)(t)||t&&"[object function]"==={}.toString.call(t)}},function(t,e,r){"use strict";var n=r(17);e.a=function(t){return Object(n.a)(t)||!0!==t&&!1!==t&&null!==t&&""!==t&&!isNaN(1*t)}},function(t,e,r){"use strict";e.a=function(t){return t instanceof String||"string"==typeof t&&null!==t}},,,,function(t,e,r){"use strict";e.a=function(t){return arguments.length&&(void 0===t||void 0===t)}},function(t,e,r){"use strict";var n=r(0),i=r(6);e.a=function(t,e){var r=void 0;return Object(n.a)(t)&&Object.keys(t).forEach((n,s)=>{!1!==r&&(r=e(Object(i.a)(n)?parseFloat(n):n,t[n],s))}),r}},function(t,e,r){"use strict";var n=r(22);e.a=function(...t){return Object(n.a)(t,(t,e,r)=>!0,!1,!1,!1)}},function(t,e,r){"use strict";var n=r(18);e.a=function(t,e=1){return arguments.length>1?Object(n.a)(t.slice().reverse(),e).reverse():Object(n.a)(t.slice().reverse())}},,,function(t,e,r){"use strict";e.a=function(t){return t instanceof Number||"number"==typeof t}},function(t,e,r){"use strict";e.a=function(t,e=1){var r=0;t.forEach(t=>{r++});var n=t.slice(t.length-r,e);return arguments.length>1?n:n[0]}},,function(t,e,r){"use strict";var n=r(2);var i=function(){if(!(Object(n.a)(this)&&this.window||"undefined"!=typeof window))throw new Error("A window context is required.");const t=Object(n.a)(this)&&this.window?this.window:window;if(t.WebQit||(t.WebQit={}),!t.WebQit.window){let e,r;Object.defineProperty(t.WebQit,"window",{get:()=>t}),Object.defineProperty(t.WebQit,"vendor",{value:{getName:()=>(e||(e=function(t){if(void 0!==t.InstallTrigger)return"firefox";if(/constructor/i.test(t.HTMLElement)||"[object SafariRemoteNotification]"===(!t.safari||void 0!==t.safari&&t.safari.pushNotification).toString())return"safari";var e=!(!t.chrome||!t.chrome.webstore&&!t.chrome.runtime),r=e&&-1!=t.navigator.userAgent.indexOf("Edg"),n=!!t.opr&&!!t.opr.addons||!!t.opera||t.navigator.userAgent.indexOf(" OPR/")>=0,i=!!t.document.documentMode,s=!i&&!!t.StyleMedia;return(e||n)&&t.CSS,s?"edge":i?"ie":n?"opera":r?"ie-chromium":e?"chrome":"unknown"}(t)),e),getPrefix:()=>(r||(r=function(t){var e=t.getComputedStyle(t.document.documentElement,""),r=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(t)),r)}})}return t.WebQit};r(12);class s{constructor(t,e=!0){this.window=t,this.async=e,this.readCallbacks=[],this.writeCallbacks=[],this._run()}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((t,e)=>{t&&!t()&&(this.readCallbacks[e]=null)}),this.writeCallbacks.forEach((t,e)=>{t&&!t()&&(this.writeCallbacks[e]=null)}),this._run()})}onread(t,e=!1){if(e)return new Promise((e,r)=>{!1===this.async?t(e,r):this.readCallbacks.push(()=>{t(e,r)})});!1===this.async?t():this.readCallbacks.push(t)}onwrite(t,e=!1){if(e)return new Promise((e,r)=>{!1===this.async?t(e,r):this.writeCallbacks.push(()=>{t(e,r)})});!1===this.async?t():this.writeCallbacks.push(t)}cycle(t,e,r){this.onread(()=>{var n=t(r);if(n){var i=n=>{this.onwrite(()=>{var i=e(n,r);if(i){var s=r=>{this.cycle(t,e,r)};i instanceof Promise?i.then(s):s()}})};n instanceof Promise?n.then(i):i()}})}}var o=r(7),c=(r(35),r(3)),a=function(t){const e=i.call(this);e.DOM.isDOMReady||"complete"===e.window.document.readyState?t(e.window):(e.window.domReadyCallbacks||(e.window.domReadyCallbacks=[],e.window.document.addEventListener("DOMContentLoaded",()=>{e.DOM.isDOMReady=!0,e.window.domReadyCallbacks.splice(0).forEach(t=>t(e.window))},!1)),e.window.domReadyCallbacks.push(t))};class l{constructor(t){this.window=t}onAdded(t,e,r={}){return r.on="added",this.onPresenceChange(t,(t,r,n,i,s)=>{e(t,r,n,i,s)},r)}onRemoved(t,e,r={}){return r.on="removed",this.onPresenceChange(t,(t,r,n,i,s)=>{e(t,r,n,i,s)},r)}onPresent(t,e,r={}){a.call(this.window,()=>{this.window.MutationObserver&&this.onAdded(t,(t,r)=>{t.forEach(t=>e(t,r))},r),Object(o.a)(t)?Object(c.a)(this.window.document.querySelectorAll(t)).forEach(t=>e(t,1)):t.parentNode&&e(t,1)})}onAbsent(t,e,r={}){a.call(this.window,()=>{this.window.MutationObserver&&onRemoved(t,(t,r)=>{t.forEach(t=>e(t,r))},r),Object(o.a)(t)?0===Object(c.a)(this.window.document.querySelectorAll(t)).length&&e(null,0):t.parentNode||e(t,0)})}onPresenceChange(t,e,r={}){t=Object(c.a)(t,!1);var n=(t,e)=>(e.$$searchCache||(e.$$searchCache=new Map),t.reduce((t,n)=>{var i;return e.$$searchCache.has(n)?i=e.$$searchCache.get(n):(i=((t,e)=>{if(e=e.filter(t=>t.matches),Object(o.a)(t)){var n=e.filter(e=>e.matches(t));if(!1!==r.observeIndirectMutation&&(n=e.reduce((e,r)=>e.concat(Object(c.a)(r.querySelectorAll(t))),n)).length)return n}else{if(e.includes(t))return[t];if(!1!==r.observeIndirectMutation&&e.length)for(var i=t;i=i.parentNode;)if(e.includes(i))return[t]}})(n,e,Object(o.a)(n))||[],e.$$searchCache.set(n,i)),t.concat(i)},[])),i=new Set,s=new Set,a=(o,c,a)=>{c&&"removed"===r.on||!c&&"added"===r.on||(o=n(t,o)).length&&(r.maintainCallState?(o.forEach(t=>{c?(i.add(t),s.delete(t)):(i.delete(t),s.add(t))}),e(o,c,a,i,s)):e(o,c,a))},l=r.context||this.window.document.documentElement;return this._observe(l,(t,e,n,i)=>{r.ignoreTransients||(a(t,0,!0),a(t.concat(e),1,!0),a(e,0,!0)),a(i,0),a(n,1)})}onAttrChange(t,e,r=[]){var n=new this.window.MutationObserver(e),i={attributes:!0,attributeOldValue:!0};return r&&(i.attributeFilter=r),n.observe(t,i),n}onTreeChange(t,e,r=!1){var n=new this.window.MutationObserver(e),i={childList:!0,subtree:r};return n.observe(t,i),n}onMutation(t,e,r){var n=new this.window.MutationObserver(e);return n.observe(t,r),n}_observe(t,e){if(!u.has(t)){const e=new Set,r=new this.window.MutationObserver(t=>{if(e.size){var r=t.reduce((t,e)=>t.concat(Object(c.a)(e.addedNodes)),[]),n=t.reduce((t,e)=>t.concat(Object(c.a)(e.removedNodes)),[]),i=[],s=[];r=new Set(r),n=new Set(n),r.forEach(t=>{n.has(t)&&(n.delete(t),r.delete(t),t.isConnected?i.push(t):s.push(t))}),r=[...r],n=[...n],e.forEach(t=>t(i,s,r,n))}});r.observe(t,{childList:!0,subtree:!0}),u.set(t,{callbacks:e,observer:r})}const r=u.get(t);return r.callbacks.add(e),{disconnect(){r.callbacks.delete(e)},reconnect(){r.callbacks.add(e)}}}}const u=new Map;var h=function(t){!function(t){t.CSS||(t.CSS={});t.CSS.escape||(t.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}(t),function(t){"isConnected"in t.Node.prototype||Object.defineProperty(t.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(t),function(t){t.Element.prototype.matches||(t.Element.prototype.matches=t.Element.prototype.matchesSelector||t.Element.prototype.mozMatchesSelector||t.Element.prototype.msMatchesSelector||t.Element.prototype.oMatchesSelector||t.Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1})}(t)};function b(t,e=null,r=!1){const n=i.call(this);if(Object(o.a)(t)){var s;if(t.trim().startsWith("<")){var a=n.window.document.createElement("div");a.innerHTML=t,s=r?Object(c.a)(a.children):a.firstChild}else s=r?Object(c.a)(m.call(this,t,e)):f.call(this,t,e);return s}return t instanceof n.window.Element?r?[t]:t:r?Object(c.a)(t):t}function d(t,e=null){return b.call(this,t,e,!0)}function f(t,e=null,r=!1){const n=i.call(this);e=e||n.window.document;var s,o=r?"querySelectorAll":"querySelector";try{s=e[o](t)}catch(r){try{s=e[o](t.replace(/\:is\(/g,":matches("))}catch(r){try{s=e[o](t.replace(/\:is\(/g,":-webkit-any("))}catch(r){try{s=e[o](t.replace(/\:is\(/g,":-moz-any("))}catch(t){throw t}}}}return s}function m(t,e=null){return f.call(this,t,e,!0)}var p=r(6),O=(r(13),r(0)),g=r(5),j=r(1),v=r(11),w=r(24),y=function(t,e,r={},n={}){e=Object(c.a)(e).slice();for(var i=t;!Object(v.a)(i)&&!Object(w.a)(i)&&e.length;){var s=e.shift();if(!(r.get?r.get(i,s):Object(O.a)(i)?s in i:i[s]))return void(n.exists=!1);i=r.get?r.get(i,s):i[s]}return n.exists=!0,i},k=function(t,e,r,n={},i={}){const s=(t,r,n)=>i.set?i.set(t,r,n):(Object(p.a)(e[a])&&Object(j.a)(t)?t.push(n):t[r]=n,!0);e=Object(c.a)(e);for(var o=t,a=0;a<e.length;a++){if(!(a<e.length-1))return s(o,e[a],r);if(!o||!Object(O.a)(o)&&!Object(g.a)(o))return!1;var l=y(o,e[a],i);if(!Object(O.a)(l)){if(!1===i.buildTree)return!1;if(l=Object(g.a)(i.buildTree)?i.buildTree(a):Object(p.a)(e[a+1])?[]:{},!s(o,e[a],l))return!1}o=l}},E=function(t,e,r=!1,n={}){e=Object(c.a)(e);var i=!1;do{var s=""===(s=e.pop())?0:s,o=t;e.length&&(o=y(t,e,{},n)),(Object(O.a)(o)||Object(g.a)(o))&&(n.has?n.has(o,s):s in o)&&(n.deleteProperty?i=n.deleteProperty(o,s):n.del?i=n.del(o,s):(delete o[s],i=!0))}while(i&&r&&e.length&&(Object(O.a)(o)||Object(g.a)(o))&&!(n.keys?n.keys(o):Object.keys(o)).length);return i};function C(t,e=!1){const r=i.call(this);var s={};return!(s.el=r.window.document.head.querySelector('meta[name="oohtml"]'))&&e&&(s.el=r.window.document.createElement("meta"),s.el.setAttribute("name",t),r.window.document.head.append(s.el)),s.el&&(s.vars=(s.el.getAttribute("content")||"").split(";").filter(t=>t).reduce((t,e)=>{var r=e.split("=").map(t=>t.trim());return k(t,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Object(p.a)(r[1])?parseInt(r[1]):r[1])),t},{})),s.get=function(t){return y(this.vars,t.split("."))},s.set=function(t,r=null,i=!1){var s=Object(n.a)(t)?t:{[t]:!0===r?"true":r};if(i=arguments.length<3?r:i,Object.keys(s).forEach(t=>{if(!1===s[t])E(this.vars,t.split("."));else if(Object(n.a)(s[t]))Object.keys(s[t]).forEach(e=>{var r=(t+"."+e).split(".");i&&y(this.vars,r)||k(this.vars,r,s[t][e])});else{var e=t.split(".");i&&y(this.vars,e)||k(this.vars,e,s[t])}}),e){const t=(e,r)=>Object.keys(r).reduce((i,s)=>{var o=(e?e+".":"")+s;return Object(n.a)(r[s])?i.push(...t(o,r[s])):i.push(o+"="+r[s]),i},[]);this.el.setAttribute("content",t("",this.vars).join(";"))}return!0},s.defaults=function(t,e=null){return this.set(t,e,!0)},s}e.a=function(){const t=i.call(this);return t.DOM||(t.DOM={},h(t.window),t.DOM.reflow=new s(t.window),t.DOM.mutations=new l(t.window),t.DOM.meta=C.bind(t.window),t.DOM.query=b.bind(t.window),t.DOM.queryAll=d.bind(t.window),t.DOM.ready=a.bind(t.window)),t}},function(t,e,r){"use strict";e.a=function(t){return"function"==typeof t}},function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(1),i=r(5),s=r(2),o=r(0),c=r(6),a=function(t,e){var r=[];return function(t,e){e=(e=e||Object.prototype)&&!Object(n.a)(e)?[e]:e;var r=[];for(t=t;t&&(!e||e.indexOf(t)<0)&&"default"!==t.name;)r.push(t),t=t?Object.getPrototypeOf(t):null;return r}(t,e).forEach(t=>{!function(t,...e){e.forEach(e=>{t.indexOf(e)<0&&t.push(e)})}(r,...Object.getOwnPropertyNames(t))}),r};function l(t,e,r=!1,u=!1,h=!1){var b=0,d=t.shift();if((Object(c.a)(d)||!0===d||!1===d)&&(b=d,d=t.shift()),!t.length)throw new Error("_merge() requires two or more array/objects.");return t.forEach((t,f)=>{(Object(o.a)(t)||Object(i.a)(t))&&(r?a(t):Object.getOwnPropertyNames(t)).forEach(i=>{if(e(i,d,t,f)){var o=d[i],a=t[i];if((Object(n.a)(o)&&Object(n.a)(a)||Object(s.a)(o)&&Object(s.a)(a))&&(!0===b||b>0))d[i]=Object(n.a)(o)&&Object(n.a)(a)?[]:{},l([Object(c.a)(b)?b-1:b,d[i],o,a],e,r,u,h);else if(Object(n.a)(d)&&Object(n.a)(t))u?d[i]=a:d.push(a);else try{h?Object.defineProperty(d,i,Object.getOwnPropertyDescriptor(t,i)):d[i]=t[i]}catch(t){}}})}),d}},,function(t,e,r){"use strict";e.a=function(t){return null===t||""===t}},,,function(t,e,r){"use strict";e.a=function(t,e,r=!1){if(""==e)return t;var n=r?t.lastIndexOf(e):t.indexOf(e);return-1===n?"":t.substr(n+e.length)}},function(t,e,r){"use strict";e.a=function(t,e,r=!1){if(""==e)return t;var n=r?t.lastIndexOf(e):t.indexOf(e);return-1===n?t:t.substr(0,n)}},function(t,e,r){"use strict";e.a=function(t,e,r=!1){for(var n=t.indexOf(e);n>-1&&(r||!1===r);)t.splice(n,1),r>0&&r--,n=t.indexOf(e);return t}},,,,,function(t,e,r){"use strict";e.a=function(t,e){return t.reduce((t,r,n)=>t||e(r,n),!1)}},function(t,e,r){"use strict";var n=r(1);e.a=function(t,e,r=null){return Object(n.a)(e)?t.filter(t=>r?e.filter(e=>r(t,e)).length:-1===e.indexOf(t)):[]}},,,function(t,e,r){"use strict";e.a=function(t){return t.filter((t,e,r)=>r.indexOf(t)===e)}},function(t,e,r){"use strict";var n=r(24),i=r(11),s=r(0);e.a=function(t){return Object(n.a)(t)||Object(i.a)(t)||!1===t||0===t||Object(s.a)(t)&&!Object.keys(t).length}},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(34),i=r(3),s=r(29),o=r(38),c=r(35),a=r(12),l=r(20),u=r(4);function h(t=null,e=!1){const r=l.a.call(this);if(e)return void r.DOM.ready(()=>{h.call(this,t,!1)});const m=r.window,p=r.window.document,O=r.DOM.mutations,g=[],j=u.a.call(this,{element:{import:"import"},attr:{importid:"name",templatespec:"template-specificity"}},t);b.push(j.get("attr.importid"),j.get("attr.moduleref"));const v="["+m.CSS.escape(j.get("attr.moduleref"))+"]",w="["+m.CSS.escape(j.get("attr.exportgroup"))+"]",y=class{static create(t){return new y(t)}constructor(t){this.el=t;const[e,r]=Object(u.c)(t.getAttribute(j.get("attr.importid"))||"default");Object(u.b)(this.el).importID=e,Object(u.b)(this.el).importModifiers=r}hydrate(t,e,r){Object(u.b)(this.el).anchorNode=t,Object(u.b)(this.el).slottedElements=e,Object(u.b)(this.el).compositionBlock=r,this._bindSlotted(e),this._connectToCompositionBlock()}connectedCallback(){Object(u.b)(this.el).anchorNode||(Object(u.b)(this.el).anchorNode=j.get("isomorphic")?p.createComment(this.el.outerHTML):p.createTextNode(""),Object(u.b)(this.el).compositionBlock=this.el.hasAttribute(j.get("attr.moduleref"))?this.el.getAttribute(j.get("attr.moduleref")).trim().startsWith("~")?this.el.parentNode.closest(w):null:this.el.parentNode.closest(v),this._connectToCompositionBlock()),r.DOM.ready.call(r,()=>{this.resolve()})}_connectToCompositionBlock(){this.compositionBlock&&(Object(u.b)(this.compositionBlock).imports||(Object(u.b)(this.compositionBlock).imports={}),Object(u.b)(this.compositionBlock).imports[this.importID]=this.el)}_bindSlotted(t){t.forEach(t=>{t.importReference=this.el}),Object(u.b)(this.el).slottedObserver=O.onRemoved(t,(e,r,n,i,o)=>{o&&o.size===t.length&&Object(u.b)(this.el).slottedObserver.disconnect(),e.forEach(t=>{t.parentNode||Object(s.a)(this.slottedElements,t),t.importReference===this.el&&delete t.importReference}),this.slottedElements.length||this.anchorNode.isConnected&&this.anchorNode.replaceWith(this.el)},{maintainCallState:!0,ignoreTransients:!0})}resolve(){if(!Object(n.a)(g,t=>this.el.closest(t))){var t,e;if(this.el.hasAttribute(j.get("attr.moduleref")))this.compositionBlock&&Object(u.b)(this.compositionBlock).imports[this.importID]===this.el&&delete Object(u.b)(this.compositionBlock).imports[this.importID],t=this.el;else{if(!this.compositionBlock)return void console.warn("Scoped slots must be found within template contexts. ["+this.importID+"]",this.el);t=this.compositionBlock}var r=t.getAttribute(j.get("attr.moduleref")).trim();t&&(e=((t,e)=>{var r=this.importID,n=this.importModifiers,[i,s]="super"in n?n.super.split("-").filter(t=>t).map(t=>parseInt(t||0)).concat([0,1e3]):[0,0];return Object(u.e)(t,e,(function(t,e){var r=Object(u.b)(t).templates||{};return 1===arguments.length?r:e.startsWith(":")?(Object(u.b)(t).exports||{})[e.substr(1)]:r[e]}),(function(t,e,n){var o=t.reduce((t,e)=>t.concat(Object(u.b)(e).exports[r]||[]),[]);return!o.length&&e>i&&s?(s--,-1):o}))})([r.startsWith("~")?this.compositionBlock:p],r)).length?Object(c.a)(e,Object(u.b)(this.el).originalSlottedElements||[]).length&&(Object(u.b)(this.el).originalSlottedElements=e,this.fill(e)):(Object(u.b)(this.el).originalSlottedElements=null,this.empty())}}fill(t){t=Object(i.a)(t,!1).map(t=>t.cloneNode(!0)),this.empty(!0),this.el.isConnected&&this.el.replaceWith(this.anchorNode),t.forEach(t=>{Object(u.b)(t).templates||(Object(u.b)(t).templates={}),Object(u.b)(t).templates["~"]=this.el,function(t,e,r=[],n=!0){r=r.concat(b),t.hasAttribute("noinherit")&&(r=r.concat((t.getAttribute("noinherit")||"*").split(" ").map(t=>t.trim())));var i=f.concat(["role","class"]);if(Object(o.a)(i).forEach(i=>{var s,c;if(!r.includes(i)&&!r.includes("*")&&(s=e.getAttribute(i))){if(c=t.getAttribute(i))var a=n?[c,s]:[s,c];else a=[s];t.setAttribute(i,Object(o.a)(a.join(" ").split(" ").map(t=>t.trim())).join(" ")),r.push(i)}}),Object(o.a)(d.concat("style")).forEach(i=>{var s,o;if(!r.includes(i)&&!r.includes("*")&&(s=e.getAttribute(i))){if(o=t.getAttribute(i))(c=n?[o,s]:[s,o])[0].trim().endsWith(";")||(c[0]=c[0]+";");else var c=[s];t.setAttribute(i,c.join(" ")),r.push(i)}}),!r.includes("*"))for(var s=0;s<e.attributes.length;s++){var c=e.attributes[s];r.includes(c.name)||t.hasAttribute(c.name)&&!n||t.setAttribute(c.name,c.value)}}(t,this.el),t.getAttribute(j.get("attr.exportgroup"))||t.setAttribute(j.get("attr.exportgroup"),this.importID),this.anchorNode.before(t)}),this._bindSlotted(t),this.slottedElements.push(...t)}empty(t=!1){if(this.slottedElements){var e=this.slottedElements;t&&Object(u.b)(this.el).slottedObserver&&(Object(u.b)(this.el).slottedObserver.disconnect(),e=this.slottedElements.splice(0)),e.forEach(t=>t.remove())}}get importID(){return Object(u.b)(this.el).importID}get importModifiers(){return Object(u.b)(this.el).importModifiers}get anchorNode(){return Object(u.b)(this.el).anchorNode}get compositionBlock(){return Object(u.b)(this.el).compositionBlock}get slottedElements(){return Object(u.b)(this.el).slottedElements||(Object(u.b)(this.el).slottedElements=[]),Object(u.b)(this.el).slottedElements}get exports(){return Object(u.b)(this.el).exports}static get observedAttributes(){return[j.get("attr.importid")]}};O.onPresent(j.get("element.import"),t=>{y.create(t).connectedCallback()});const k=(t,e)=>{const r=(t,r)=>!e||r===e||!0===e&&t.getAttribute(j.get("attr.templatespec"));if(t.matches(j.get("element.import"))){var n=y.create(t);n.connectedCallback(),r(t,n.importID)&&n.resolve()}else Object(a.a)(Object(u.b)(t).imports,(t,e)=>{r(e,t)&&y.create(e).resolve()})};O.onPresent(v,t=>{Object(n.a)(g,e=>t.closest(e))||O.onAttrChange(t,e=>{e[0].target.getAttribute(e[0].attributeName)!==e[0].oldValue&&k(t)},[j.get("attr.moduleref"),j.get("attr.importid")])}),p.addEventListener("templatemutation",t=>{t.detail.path&&Object(i.a)(p.querySelectorAll("["+m.CSS.escape(j.get("attr.moduleref"))+"]")).forEach(e=>{Object(u.d)(e.getAttribute(j.get("attr.moduleref")),t.detail.path)&&(k(e,!0),t.detail.addedExports.concat(t.detail.removedExports).forEach(t=>{k(e,t.name)}))})});r.DOM.ready.call(r,()=>{j.get("isomorphic")&&Object(i.a)(p.querySelectorAll(w)).forEach(t=>{if(!Object(u.b)(t.parentNode).importsCan){var e=[];t.parentNode.childNodes.forEach(t=>{var r;if(1===t.nodeType&&t.matches(w))e.push(t);else if(8===t.nodeType&&(r=t.nodeValue.trim())&&r.startsWith("<"+j.get("element.import"))&&r.endsWith("</"+j.get("element.import")+">")){var n,i=p.createElement("div");if(i.innerHTML=r,(n=i.firstChild).matches(j.get("element.import"))){var s=n.hasAttribute(j.get("attr.moduleref"))?n.getAttribute(j.get("attr.moduleref")).trim().startsWith("~")?t.parentNode.closest(w):null:t.parentNode.closest(v);y.create(n).hydrate(t,e,s),e=[]}}}),Object(u.b)(t.parentNode).importsCan=!0}})})}const b=["nocompose"],d=[],f=[]},,,,,,,,function(t,e,r){"use strict";r.r(e),r(66).a.call(window)}]);
//# sourceMappingURL=html-imports.js.map