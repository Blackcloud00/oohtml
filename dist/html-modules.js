(()=>{function y(e){return!Array.isArray(e)&&typeof e=="object"&&e}function c(e,...t){globalThis.WebQitInternalsRegistry||(globalThis.WebQitInternalsRegistry=new Map);var r=globalThis.WebQitInternalsRegistry.get(e);if(!r){if(r=new Map,t[0]===!1)return r;globalThis.WebQitInternalsRegistry.set(e,r)}for(var o,i;o=t.shift();)if((i=r)&&!(r=r.get(o))){if(r=new Map,t[0]===!1)return r;i.set(o,r)}return r}function d(e){return Array.isArray(e)}function te(e){return e===!0||e===!1}function X(e){return typeof e=="function"}function me(e){return e===null||e===""}function R(e){return arguments.length&&(e===void 0||typeof e>"u")}function A(e){return Array.isArray(e)||typeof e=="object"&&e||X(e)}function Oe(e){return me(e)||R(e)||e===!1||e===0||A(e)&&!Object.keys(e).length}function C(e){return X(e)||e&&{}.toString.call(e)==="[object function]"}function z(e){return e instanceof Number||typeof e=="number"}function k(e){return z(e)||e!==!0&&e!==!1&&e!==null&&e!==""&&!isNaN(e*1)}function ue(e){return y(e)&&Object.getPrototypeOf(e)===Object.prototype}function V(e){return e instanceof String||typeof e=="string"&&e!==null}function we(e){return!V(e)&&!R(e.length)}function U(e,t=1){var r=0;e.forEach(i=>{r++});var o=e.slice(e.length-r,t);return arguments.length>1?o:o[0]}function F(e,t=1){return arguments.length>1?U(e.slice().reverse(),t).reverse():U(e.slice().reverse())}function ae(e,...t){return t.forEach(r=>{e.indexOf(r)<0&&e.push(r)}),e}function be(o,t){t=t||Object.prototype,t=t&&!d(t)?[t]:t;for(var r=[],o=o;o&&(!t||t.indexOf(o)<0)&&o.name!=="default";)r.push(o),o=o?Object.getPrototypeOf(o):null;return r}function Ee(e,t){var r=[];return be(e,t).forEach(o=>{ae(r,...Object.getOwnPropertyNames(o))}),r}function W(e,t,r=!1,o=!1,i=!1){var n=0,f=e.shift();if((k(f)||f===!0||f===!1)&&(n=f,f=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((s,m)=>{!A(s)&&!C(s)||(r?Ee(s):Object.getOwnPropertyNames(s)).forEach(a=>{if(!!t(a,f,s,m)){var p=f[a],u=s[a];if((d(p)&&d(u)||y(p)&&y(u))&&(n===!0||n>0))f[a]=d(p)&&d(u)?[]:{},W([k(n)?n-1:n,f[a],p,u],t,r,o,i);else if(d(f)&&d(s))o?f[a]=u:f.push(u);else try{i?Object.defineProperty(f,a,Object.getOwnPropertyDescriptor(s,a)):f[a]=s[a]}catch{}}})}),f}function re(e,t){var r=void 0;return A(e)&&Object.keys(e).forEach((o,i)=>{r!==!1&&(r=t(k(o)?parseFloat(o):o,e[o],i))}),r}function H(...e){return W(e,(t,r,o)=>!0,!1,!1,!1)}function le(e,t,r=!1){if(t=="")return e;var o=r?e.lastIndexOf(t):e.indexOf(t);return o===-1?"":e.substr(o+t.length)}function Te(e,t,r=!1){if(t=="")return e;var o=r?e.lastIndexOf(t):e.indexOf(t);return o===-1?e:e.substr(0,o)}function N(e,t=!0){return d(e)?e:!t&&y(e)?[e]:e!==!1&&e!==0&&Oe(e)?[]:we(e)?Array.prototype.slice.call(e):y(e)?Object.values(e):[e]}function pe(e,t,r=!1){for(var o=e.indexOf(t);o>-1&&(r||r===!1);)e.splice(o,1),r>0&&r--,o=e.indexOf(t);return e}var Ue=function(e,t=1,r=!0){return!k(t)||t<=0||(!d(e)&&y(e)&&r&&(e=Object.values(e)),!d(e))?e:e.reduce((o,i)=>d(i)||y(i)&&r?o.concat(Ue(d(i)?i:Object.values(i),t-1,r)):o.concat(i),[])},Ae=Ue;function Y(e,t,r=!0,o=!0,i=!1,n=!1){if(d(e)&&d(t)){var f=[],s=!0;return e.forEach(m=>{if(!!s){var a=!1;re(t,(p,u)=>{(!a||o&&A(m))&&(a=r(m,u),(d(a)&&!a.length||y(a)&&!Object.keys(a).length)&&(a=!1),A(a)&&o&&(m=a))}),A(a)?f.push(o?a:m):te(a)?i&&!a||!i&&a?f.push(m):n&&(s=!1):f.push(a)}}),f}if(y(e)&&y(t)){var f={},s=!0;return Object.keys(e).forEach(p=>{if(!!s){var u=r(e[p],t[p]);(d(u)&&!u.length||y(u)&&!Object.keys(u).length)&&(u=!1),A(u)?f[p]=o?u:e[p]:te(u)?i&&!u||!i&&u?f[p]=e[p]:n&&(s=!1):f[p]=u}}),f}}function ce(e,t=[]){return W([{},e],(r,o,i)=>{if(!C(i[r]))return C(t)?t(r):d(t)&&t.length?t.indexOf(r)>-1:!0},!1,!1,!1)}var Se=function(e,t,r=!0,o=1){if(d(e)&&d(t)&&e.length!==t.length)return!r;if(y(e)&&y(t)){var i=Object.keys(e),n=Object.keys(t);if(!i.length&&!n.length)return ue(e)&&ue(t)?r:e===t===r;if(!Se(i,n))return!r}if(o>0&&(d(e)&&d(t)||y(e)&&y(t))){var f=Y(e,t,(s,m)=>Se(s,m,r,o-1),!1,!1,!0);return d(f)?f.length===e.length&&f.length===t.length:y(f)&&y(e)?Object.keys(f).length===Object.keys(e).length&&Object.keys(f).length===Object.keys(t).length:f}return C(r)?r(e,t):z(e)&&z(t)&&isNaN(e)&&isNaN(t)?r:e===t===r},Me=Se;function D(e){return!Array.isArray(e)&&typeof e=="object"&&e}function He(e){var t=typeof e.InstallTrigger<"u";if(t)return"firefox";var r=/constructor/i.test(e.HTMLElement)||function(a){return a.toString()==="[object SafariRemoteNotification]"}(!e.safari||typeof e.safari<"u"&&e.safari.pushNotification);if(r)return"safari";var o=!!e.chrome&&(!!e.chrome.webstore||!!e.chrome.runtime),i=o&&e.navigator.userAgent.indexOf("Edg")!=-1,n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,f=!!e.document.documentMode,s=!f&&!!e.StyleMedia,m=(o||n)&&!!e.CSS;return s?"edge":f?"ie":n?"opera":i?"ie-chromium":o?"chrome":"unknown"}function Be(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||t.Olink===""&&["","o"])[1],o=("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1];return{api:o,prefix:r,css:"-"+r+"-"}}function j(){if(!(D(this)&&this.window)&&typeof window>"u")throw new Error("A window context is required.");let e=D(this)&&this.window?this.window:window;if(e.WebQit||(e.WebQit={}),!e.WebQit.window){let t,r;Object.defineProperty(e.WebQit,"window",{get:()=>e}),Object.defineProperty(e.WebQit,"vendor",{value:{getName:()=>(t||(t=He(e)),t),getPrefix:()=>(r||(r=Be(e)),r)}})}return e.WebQit}function de(e){return typeof e=="function"}function $(e){return Array.isArray(e)||typeof e=="object"&&e||de(e)}function ze(e){return e instanceof Number||typeof e=="number"}function Z(e){return ze(e)||e!==!0&&e!==!1&&e!==null&&e!==""&&!isNaN(e*1)}var oe=class{constructor(t,r=!0){this.window=t,this.async=r,this.readCallbacks=[],this.writeCallbacks=[],this._run()}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((t,r)=>{t&&!t()&&(this.readCallbacks[r]=null)}),this.writeCallbacks.forEach((t,r)=>{t&&!t()&&(this.writeCallbacks[r]=null)}),this._run()})}onread(t,r=!1){if(r)return new Promise((o,i)=>{this.async===!1?t(o,i):this.readCallbacks.push(()=>{t(o,i)})});this.async===!1?t():this.readCallbacks.push(t)}onwrite(t,r=!1){if(r)return new Promise((o,i)=>{this.async===!1?t(o,i):this.writeCallbacks.push(()=>{t(o,i)})});this.async===!1?t():this.writeCallbacks.push(t)}cycle(t,r,o){this.onread(()=>{var i=t(o);if(i){var n=f=>{this.onwrite(()=>{var s=r(f,o);if(s){var m=a=>{this.cycle(t,r,a)};s instanceof Promise?s.then(m):m()}})};i instanceof Promise?i.then(n):n()}})}};function L(e){return e instanceof String||typeof e=="string"&&e!==null}function J(e){return Array.isArray(e)}function K(e){return arguments.length&&(e===void 0||typeof e>"u")}function Ve(e){return!L(e)&&!K(e.length)}function he(e){return e===null||e===""}function Ze(e){return he(e)||K(e)||e===!1||e===0||$(e)&&!Object.keys(e).length}function S(e,t=!0){return J(e)?e:!t&&D(e)?[e]:e!==!1&&e!==0&&Ze(e)?[]:Ve(e)?Array.prototype.slice.call(e):D(e)?Object.values(e):[e]}function ie(e){let t=j.call(this);t.DOM.isDOMReady||t.window.document.readyState==="complete"?e(t.window):(t.window.domReadyCallbacks||(t.window.domReadyCallbacks=[],t.window.document.addEventListener("DOMContentLoaded",()=>{t.DOM.isDOMReady=!0,t.window.domReadyCallbacks.splice(0).forEach(r=>r(t.window))},!1)),t.window.domReadyCallbacks.push(e))}var ne=class{constructor(t){this.window=t}onAdded(t,r,o={}){return o.on="added",this.onPresenceChange(t,(i,n,f,s,m)=>{r(i,n,f,s,m)},o)}onRemoved(t,r,o={}){return o.on="removed",this.onPresenceChange(t,(i,n,f,s,m)=>{r(i,n,f,s,m)},o)}onPresent(t,r,o={}){ie.call(this.window,()=>{this.window.MutationObserver&&this.onAdded(t,(i,n)=>{i.forEach(f=>r(f,n))},o),L(t)?S(this.window.document.querySelectorAll(t)).forEach(i=>r(i,1)):t.parentNode&&r(t,1)})}onAbsent(t,r,o={}){ie.call(this.window,()=>{this.window.MutationObserver&&onRemoved(t,(i,n)=>{i.forEach(f=>r(f,n))},o),L(t)?S(this.window.document.querySelectorAll(t)).length===0&&r(null,0):t.parentNode||r(t,0)})}onPresenceChange(t,r,o={}){t=S(t,!1);var i=(u,h)=>{if(h=h.filter(M=>M.matches),L(u)){var v=h.filter(M=>M.matches(u));if(o.observeIndirectMutation!==!1&&(v=h.reduce((M,l)=>M.concat(S(l.querySelectorAll(u))),v),v.length))return v}else{if(h.includes(u))return[u];if(o.observeIndirectMutation!==!1&&h.length){for(var O=u;O=O.parentNode;)if(h.includes(O))return[u]}}},n=(u,h)=>(h.$$searchCache||(h.$$searchCache=new Map),u.reduce((v,O)=>{var M;return h.$$searchCache.has(O)?M=h.$$searchCache.get(O):(M=i(O,h,L(O))||[],h.$$searchCache.set(O,M)),v.concat(M)},[])),f=new Set,s=new Set,m=(u,h,v)=>{h&&o.on==="removed"||!h&&o.on==="added"||(u=n(t,u)).length&&(o.maintainCallState?(u.forEach(O=>{h?(f.add(O),s.delete(O)):(f.delete(O),s.add(O))}),r(u,h,v,f,s)):r(u,h,v))},a=o.context||this.window.document.documentElement,p=this._observe(a,(u,h,v,O)=>{o.ignoreTransients||(m(u,0,!0),m(u.concat(h),1,!0),m(h,0,!0)),m(O,0),m(v,1)});return p}onAttrChange(t,r,o=[]){var i=new this.window.MutationObserver(r),n={attributes:!0,attributeOldValue:!0};return o&&(n.attributeFilter=o),i.observe(t,n),i}onTreeChange(t,r,o=!1){var i=new this.window.MutationObserver(r),n={childList:!0,subtree:o};return i.observe(t,n),i}onMutation(t,r,o){var i=new this.window.MutationObserver(r);return i.observe(t,o),i}_observe(t,r){if(!Ne.has(t)){let i=new Set,n=new this.window.MutationObserver(f=>{if(!!i.size){var s=f.reduce((u,h)=>u.concat(S(h.addedNodes)),[]),m=f.reduce((u,h)=>u.concat(S(h.removedNodes)),[]),a=[],p=[];s=new Set(s),m=new Set(m),s.forEach(u=>{m.has(u)&&(m.delete(u),s.delete(u),u.isConnected?a.push(u):p.push(u))}),s=[...s],m=[...m],i.forEach(u=>u(a,p,s,m))}});n.observe(t,{childList:!0,subtree:!0}),Ne.set(t,{callbacks:i,observer:n})}let o=Ne.get(t);return o.callbacks.add(r),{disconnect(){o.callbacks.delete(r)},reconnect(){o.callbacks.add(r)}}}},Ne=new Map;function Je(e){_t(e),xt(e),yt(e)}function _t(e){e.CSS||(e.CSS={}),e.CSS.escape||(e.CSS.escape=t=>t.replace(/([\:@\~\$\&])/g,"\\$1"))}function xt(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}function yt(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(t){for(var r=(this.document||this.ownerDocument).querySelectorAll(t),o=r.length;--o>=0&&r.item(o)!==this;);return o>-1})}function ge(e,t=null,r=!1){let o=j.call(this);if(L(e)){var i;if(e.trim().startsWith("<")){var n=o.window.document.createElement("div");n.innerHTML=e,i=r?S(n.children):n.firstChild}else i=r?S(Xe.call(this,e,t)):$e.call(this,e,t);return i}return e instanceof o.window.Element?r?[e]:e:r?S(e):e}function Ge(e,t=null){return ge.call(this,e,t,!0)}function $e(e,t=null,r=!1){let o=j.call(this);t=t||o.window.document;var i,n=r?"querySelectorAll":"querySelector";try{i=t[n](e)}catch{try{i=t[n](e.replace(/\:is\(/g,":matches("))}catch{try{i=t[n](e.replace(/\:is\(/g,":-webkit-any("))}catch{try{i=t[n](e.replace(/\:is\(/g,":-moz-any("))}catch(a){throw a}}}}return i}function Xe(e,t=null){return $e.call(this,e,t,!0)}function G(e){return de(e)||e&&{}.toString.call(e)==="[object function]"}function B(e,t,r={},o={}){t=S(t).slice();for(var i=e;!K(i)&&!he(i)&&t.length;){var n=t.shift();if(!(r.get?r.get(i,n):$(i)?n in i:i[n])){o.exists=!1;return}i=r.get?r.get(i,n):i[n]}return o.exists=!0,i}function _e(e,t,r,o={},i={}){let n=(p,u,h)=>i.set?i.set(p,u,h):(Z(t[s])&&J(p)?p.push(h):p[u]=h,!0);t=S(t);for(var f=e,s=0;s<t.length;s++)if(s<t.length-1){if(!f||!$(f)&&!G(f))return!1;var m=B(f,t[s],i);if(!$(m)){if(i.buildTree===!1)return!1;m=G(i.buildTree)?i.buildTree(s):Z(t[s+1])?[]:{};var a=n(f,t[s],m);if(!a)return!1}f=m}else return n(f,t[s],r)}function Ye(e,t,r=!1,o={}){t=S(t);var i=!1;do{var n=t.pop(),n=n===""?0:n,f=e;t.length&&(f=B(e,t,{},o)),($(f)||G(f))&&(o.has?o.has(f,n):n in f)&&(o.deleteProperty?i=o.deleteProperty(f,n):o.del?i=o.del(f,n):(delete f[n],i=!0))}while(i&&r&&t.length&&($(f)||G(f))&&!(o.keys?o.keys(f):Object.keys(f)).length);return i}function qe(e,t,r={}){var o={};return B(e,t,r,o),o.exists}function Fe(e,t=!1){let r=j.call(this);var o={};return!(o.el=r.window.document.head.querySelector('meta[name="oohtml"]'))&&t&&(o.el=r.window.document.createElement("meta"),o.el.setAttribute("name",e),r.window.document.head.append(o.el)),o.el&&(o.vars=(o.el.getAttribute("content")||"").split(";").filter(i=>i).reduce((i,n)=>{var f=n.split("=").map(s=>s.trim());return _e(i,f[0].split("."),f[1]==="true"?!0:f[1]==="false"?!1:Z(f[1])?parseInt(f[1]):f[1]),i},{})),o.get=function(i){return B(this.vars,i.split("."))},o.set=function(i,n=null,f=!1){var s=D(i)?i:{[i]:n===!0?"true":n};if(f=arguments.length<3?n:f,Object.keys(s).forEach(m=>{if(s[m]===!1)Ye(this.vars,m.split("."));else if(D(s[m]))Object.keys(s[m]).forEach(p=>{var u=(m+"."+p).split(".");(!f||!qe(this.vars,u))&&_e(this.vars,u,s[m][p])});else{var a=m.split(".");(!f||!qe(this.vars,a))&&_e(this.vars,a,s[m])}}),t){let m=(a,p)=>Object.keys(p).reduce((u,h)=>{var v=(a?a+".":"")+h;return D(p[h])?u.push(...m(v,p[h])):u.push(v+"="+p[h]),u},[]);this.el.setAttribute("content",m("",this.vars).join(";"))}return!0},o.defaults=function(i,n=null){return this.set(i,n,!0)},o}function xe(){let e=j.call(this);return e.DOM||(e.DOM={},Je(e.window),e.DOM.reflow=new oe(e.window),e.DOM.mutations=new ne(e.window),e.DOM.meta=Fe.bind(e.window),e.DOM.query=ge.bind(e.window),e.DOM.queryAll=Ge.bind(e.window),e.DOM.ready=ie.bind(e.window)),e}function We(e,t){return Te(e,t,!0)}function ye(e,t,r){return We(le(e,t),r)}function De(e,t,r){return e.startsWith(t)&&e.endsWith(r)}var b=class{static lex(t,r,o={}){if(!V(t=t+""))throw new Error("Argument1 must be a string!");var i=a=>({delims:a.delims.slice(),options:ce(a.options),nesting:a.nesting.slice(),maxDepth:a.maxDepth,comments:a.comments.slice(),tokens:a.tokens.slice(),matches:a.matches.slice(),matchesi:ce(a.matchesi)});if(b.$cache[t]&&o.cache!==!1)for(var n=0;n<b.$cache[t].length;n++){var f=b.$cache[t][n];if(Me(f.delims,r))return i(f)}var s=new b(t,o),m=s.lex(r);return o.cache!==!1&&(b.$cache[t]=b.$cache[t]||[],b.$cache[t].push(m)),i(m)}static split(t,r,o){return b.lex(t,r,o).tokens}static match(t,r,o){return b.lex(t,r,o).matches}constructor(t,r){if(!V(t))throw new Error("Lexer requires the first argument to be a string.");this.$str=t,this.$options=r||{},this.$options.blocks||(this.$options.blocks=b.$blocks),this.$options.quotes||(this.$options.quotes=b.$quotes),this.$options.comments||(this.$options.comments=b.$comments)}lex(t,r){for(var o={delims:N(t),options:H(!0,{},this.$options,r||{}),nesting:[],maxDepth:0,comments:[],tokens:[],matches:[],matchesi:{}},i=0;typeof i=="number";)i=this._evalCharsAt(o,i);if(o.nesting.length)throw new Error("Error parsing the string: "+this.$str+". Unterminated blocks: "+Ae(o.nesting).join(", "));return o}_evalCharsAt(t,r){if(!(r>=this.$str.length)){var o=1,i={},n={},f={};if(t.openComment||(n=this._testQuotes(t,r)),t.openQuote||(i=this._testComments(t,r)),t.openComment||i.ending)if(!t.nesting.length&&!f.ending){var s=i.starting||i.ending||this.$str[r];o=s.length,this._push(t,s,"comments",i.starting)}else this._push(t,this.$str[r]);else if(t.openQuote||n.ending)this._push(t,this.$str[r]);else{if(t.options.limit&&t.matches.length===t.options.limit)return this._push(t,this.$str[r]),r+1;f=this._testNesting(t,r);var f=this._testNesting(t,r),m=this._testChars(t.options.stopChars||[],t,r);if(!t.nesting.length&&m!==!1){t.options.stopChar=m,t.options.stopCharForward=this.$str.substr(r);return}if(!t.delims.length)t.nesting.length===2&&f.starting?(t.matches.push(null),this._push(t,f.starting),o=f.starting.length):!t.nesting.length&&f.ending?(this._push(t,f.ending),o=f.ending.length,t.matches.push(null)):this._push(t,this.$str[r]);else if(!t.nesting.length&&!f.ending){this._push(t,"");var a=this._testChars(t.delims,t,r);if(a!==!1&&(t.matches.push(a),t.matchesi[r]=a,o=a.length||1,!t.options.preserveDelims)){var p=r+(a.length||1);return p===this.$str.length&&this._push(t,""),p}this._push(t,a||this.$str[r])}else{var s=f.starting||f.ending||this.$str[r];o=s.length,this._push(t,s)}}return r+o}}_testQuotes(t,r){var o={};return(t.options.quotes||[]).forEach(i=>{this.$str.substr(r,1)===i&&(t.openQuote?i===t.openQuote&&(t.openQuote=!1,o.ending=i):(t.openQuote=i,o.starting=i))}),o}_testComments(t,r){var o={};return(t.options.comments||[]).forEach(i=>{if(t.openComment){if(F(i)===F(t.openComment)){var f=F(i);this.$str.substr(r).startsWith(f)&&(t.openComment=!1,o.ending=f)}}else{var n=U(i);this.$str.substr(r).startsWith(n)&&(t.openComment=i,o.starting=n)}}),o}_testNesting(t,r){var o={};return(t.options.blocks||[]).forEach(i=>{var n=U(i);if(this.$str.substr(r).startsWith(n))t.nesting=t.nesting.concat([i]),o.starting=n;else if(t.nesting.length&&F(i)===F(F(t.nesting))){var f=F(i);this.$str.substr(r).startsWith(f)&&(t.nesting=t.nesting.slice(0,-1),o.ending=f)}}),t.maxDepth=Math.max(t.maxDepth,t.nesting.length),o}_testChars(t,r,o){for(var i=0;i<t.length;i++){var n=t[i];if(C(n)){var f=n(this.$str.substr(0,o),this.$str.substr(o),r.tokens.slice());if(f!==!1)return f}if(r.options.useRegex){var s=this.$str.substr(o).match(new RegExp("^"+n,r.options.useRegex!==!0?r.options.useRegex:""));if(s)return s[0]}if(!r.options.ci&&this.$str.substr(o,n.length)===n||r.options.ci&&this.$str.substr(o,n.length).toLowerCase()===n.toLowerCase())return n}return!1}_push(t,r,o="tokens",i=!1){var n=t.matches.length;if(R(t.tokens[n])&&(t.tokens[n]=""),o==="comments"){t.tokens[n].comments||(t.tokens[n]=new String(t.tokens[n]),t.tokens[n].comments=[]);var f=t.tokens[n].comments.length-(!t.tokens[n].comments.length||i?0:1);t.tokens[n].comments[f]=(t.tokens[n].comments[f]||"")+r}else{var s=t.tokens[n].comments;t.tokens[n]=t.tokens[n]+r}}split(t,r,o){return this.lex(r,o).tokens}match(t,r,o){return this.lex(r,o).matches}regParse(t,r){return this.lex(t,H({useRegex:!0},r||{}))}regSplit(t,r){return this.regParse(t,r).tokens}regMatch(t,r){return this.regParse(t,r).matches}};b.$blocks=[["(",")"],["[","]"],["{","}"]];b.$quotes=['"',"'","`"];b.$comments=[["/*","*/"],["//",`
`]];b.$cache=Object.create(null);function et(e,t={}){let r=xe.call(this);return r.OOHTML||(r.OOHTML={}),r.OOHTML.meta||(r.OOHTML.meta=r.DOM.meta("oohtml",!0)),r.OOHTML.meta.defaults(H(3,e,t)),r.OOHTML.meta}function tt(e,t,r,o=null){var i=t.split("#")[0].split("/").map(n=>n.trim()).filter(n=>n);return rt(e,i,r,o)}function Ot(e){var t=b.split(e.trim(),[":"]);e=t.shift();var r=t.reduce((o,i)=>{var[n,f]=b.split(i.trim(),[]);return o[n]=ye(f,"(",")"),o},{});return[e,r]}var Ke=(e,t)=>b.split(e.trim(),["|","+"],{preserveDelims:!0}).reduce((r,o)=>{var i;return(o.startsWith("|")||o.startsWith("+"))&&(i=o.substr(0,1),o=o.substr(1).trim()),r.theEnd||i==="|"&&r.length?(r.theEnd=!0,r):r.concat(t(o.trim()))},[]).filter(r=>r),Qe=(e,t,r)=>{let o=i=>i.reduce((n,f)=>n.concat(...r(f).values()),[]);return Ke(t,n=>{var[n,f]=Ot(n);return e.reduce((s,m)=>{c(m,"oohtml").has("queryCallback")&&c(m,"oohtml").get("queryCallback")();var a=r(m);n==="*"&&(n="("+a.keys().join("+")+")");var p=De(n,"(",")")?Qe([m],ye(n,"(",")"),r):N(a.get(n),!1),u=[],h=v=>`${v}${u.map(O=>`:${O}(${f[O]})`).join("")}`;return Object.keys(f).forEach(v=>{if(v==="deep"||v==="deepest")for(var O=[m];(v==="deepest"||!p.length)&&(O=o(O)).length;){var M=Qe(O,h(n),r);M.length&&(p=M)}else(v==="having"||v==="not-having")&&(p=p.filter(l=>{var g=Ke(f[v],w=>r(l,w));return v==="not-having"?!g.length:g.length})),u.push(v)}),s.concat(p)},[])})},rt=function(e,t,r,o=null,i=0){if(!t.length)return[];var n=t.shift(),f;n.endsWith(".")&&(f=!0,n=n.substr(0,n.length-1).trim());var s=Qe(e,n,r);if(s.length&&f)return s;if(t.length){var m=rt(s,t.slice(),r,o,i+1);return m===-1?o(s,i,!0):m}return o?o(s,i):s};function ve(e={}){let t=xe.call(this);if(e.onDomReady){t.DOM.ready(()=>{ve.call(this,{...e,onDomReady:!1})});return}let r=t.window,o=t.window.document,i=t.DOM.mutations,n=et.call(this,{element:{template:"",export:"export",import:"import"},attr:{moduleid:"name",moduleref:"template",exportid:"name",exportgroup:"exportgroup"},api:{templateClass:"",templates:"templates",exports:"exports",moduleref:"template"}},e.params),f="template"+(n.get("element.template")?'[is="'+n.get("element.template")+'"]':"")+"["+r.CSS.escape(n.get("attr.moduleid"))+"]";var s=r.HTMLTemplateElement;if(n.get("api.templateClass")){if(!r[n.get("api.templateClass")])throw new Error('The custom element class "'+n.get("api.templateClass")+'" is not defined!');s=r[n.get("api.templateClass")]}let m=(l,g,w)=>{l==="templatemutation"&&(["addedExports","removedExports"].forEach(_=>{Object.defineProperty(g,_,{value:Object.keys(g[_]).map(x=>({name:x,items:g[_][x]}))})}),["addedTemplates","removedTemplates"].forEach(_=>{Object.defineProperty(g,_,{value:Object.keys(g[_]).map(x=>({name:x,item:g[_][x]}))})})),Object.defineProperty(g,"path",{value:w}),o.dispatchEvent(new r.CustomEvent(l,{detail:g}))},a=(l,g)=>{let w=x=>{l.dispatchEvent(new r.CustomEvent(x,{detail:{path:g}}))};var _=l.getAttribute("src");return new Promise((x,fe)=>{r.fetch?r.fetch(_).then(Q=>Q.ok?Q.text():Promise.reject(Q.statusText)).then(Q=>{l.innerHTML=Q,w("load"),m("templatecontentloaded",{template:l},g),x(l)}).catch(Q=>{console.error("Error fetching the bundle at "+_+". ("+Q+")"),l.innerHTML="",w("loaderror"),m("templatecontentloaderror",{template:l},g),x(l)}):(x(),console.error("Error fetching the bundle at "+_+". (window.fetch() not supported by browser.)"))})},p=(l,g,w,_=null,x=!0)=>{let fe=(E,T,I,se)=>{if(!!E.matches){var q,Re;if(E.matches(f)&&(q=E.getAttribute(n.get("attr.moduleid")))&&v(q)){var it=(w?w+"/":"")+q;I==="removed"?(c(l,"oohtml","templates").delete(q),c(E,"oohtml").get("parentTemplate")===l&&c(E,"oohtml").delete("parentTemplate"),T&&(T.removedTemplates[q]=E)):I==="added"&&(c(l,"oohtml","templates").set(q,E),c(E,"oohtml").set("parentTemplate",l),T&&(T.addedTemplates[q]=E)),p(E,E.content,it,I,se)}else{let ke=ee=>{var P=ee.getAttribute(n.get("attr.exportgroup"))||"default";I==="removed"?c(l,"oohtml","exports").has(P)&&(pe(c(l,"oohtml","exports").get(P),ee),c(l,"oohtml","exports").has(P).length||c(l,"oohtml","exports").delete(P),T&&(T.removedExports[P]||(T.removedExports[P]=[]),T.removedExports[P].push(ee))):I==="added"&&(c(l,"oohtml","exports").has(P)||c(l,"oohtml","exports").set(P,[]),c(l,"oohtml","exports").get(P).push(ee),T&&(T.addedExports[P]||(T.addedExports[P]=[]),T.addedExports[P].push(ee)))};if(E.matches(n.get("element.export"))){var Re=E.getAttribute(n.get("attr.exportid"))||"default";N(E.children).forEach(P=>{P.setAttribute(n.get("attr.exportgroup"),Re),ke(P)})}else ke(E)}}};l.modulemutationsType=_;let Q={addedTemplates:Object.create(null),removedTemplates:Object.create(null),addedExports:Object.create(null),removedExports:Object.create(null)};if(N(g.children).forEach(E=>fe(E,Q,_,x)),x&&m("templatemutation",Q,w),_==="added"&&!c(l,"oohtml").get("onLiveMode")){c(l,"oohtml").set("onLiveMode",!0);let E=()=>{if(!l.content.children.length)return c(l,"oohtml").delete("queryCallback"),a(l,w)};l.getAttribute("src")&&(l.getAttribute("loading")==="lazy"?c(l,"oohtml").set("queryCallback",E):u.push(E())),i.onAttrChange(l,T=>{T[0].target.getAttribute(T[0].attributeName)!==T[0].oldValue&&(l.getAttribute("loading")==="lazy"?c(l,"oohtml").set("queryCallback",E):T[0].attributeName==="loading"?c(l,"oohtml").delete("queryCallback"):E())},["src","loading"]);var ot=new r.MutationObserver(T=>{let I={addedTemplates:Object.create(null),removedTemplates:Object.create(null),addedExports:Object.create(null),removedExports:Object.create(null)};T.forEach(se=>{se.addedNodes.forEach(q=>fe(q,I,"added",!0)),se.removedNodes.forEach(q=>fe(q,I,"removed",!0))}),m("templatemutation",I,w)});ot.observe(g,{childList:!0})}};if(n.get("api.templates")in o)throw new Error('document already has a "'+n.get("api.templates")+'" property!');let u=[];if(Object.defineProperty(o,n.get("api.templates"),{get:function(){return h(c(o,"oohtml","templates"))}}),n.get("api.templates")in s.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+n.get("api.templates")+'" property!');if(Object.defineProperty(s.prototype,n.get("api.templates"),{get:function(){return c(this,"oohtml").has("queryCallback")&&c(this,"oohtml").get("queryCallback")(),h(c(this,"oohtml","templates"))}}),n.get("api.exports")in s.prototype)throw new Error('The "HTMLTemplateElement" class already has a "'+n.get("api.exports")+'" property!');Object.defineProperty(s.prototype,n.get("api.exports"),{get:function(){return c(this,"oohtml").has("queryCallback")&&c(this,"oohtml").get("queryCallback")(),h(c(this,"oohtml","exports"))}});let h=l=>Object.defineProperties({},Array.from(l.keys()).reduce((g,w)=>(g[w]={get:()=>l.get(w)},g),{})),v=l=>{var g;return(g=l.match(/([^a-zA-Z0-9\_\-\@])/))?(console.error(`Invalid character "${g}" in the module name: ${l}.`),!1):!0},O=l=>{var g=o.createElement("template");return tt([o],l,function(w,_){var x=c(w,"oohtml","templates");return arguments.length===1?x:_.startsWith(":")?c(w,"oohtml","exports").get(_.substr(1)):x.get(_)}).forEach(w=>{c(w,"oohtml","templates").forEach((_,x)=>{c(g,"oohtml","templates").set(x,_)}),c(w,"oohtml","exports").forEach((_,x)=>{c(g,"oohtml","exports").has(x)||c(g,"oohtml","exports").set(x,[]),c(g,"oohtml","exports").get(x).push(..._)})}),g};if(N(o.querySelectorAll(f)).forEach(async l=>{var g=l.getAttribute(n.get("attr.moduleid"));!l.closest(n.get("element.import"))&&v(g)&&(c(o,"oohtml","templates").set(g,l),p(l,l.content,g,"added",!1))}),i.onPresenceChange(f,async(l,g)=>{let w={addedTemplates:Object.create(null),removedTemplates:Object.create(null),addedExports:Object.create(null),removedExports:Object.create(null)};l.forEach(_=>{var x=_.getAttribute(n.get("attr.moduleid"));_.closest(n.get("element.import"))||!v(x)||(g?(c(o,"oohtml","templates").set(x,_),p(_,_.content,x,"added"),w.addedTemplates[x]=_):(c(o,"oohtml","templates").get(x)===_&&c(o,"oohtml","templates").delete(x),p(_,_.content,x,"removed"),w.removedTemplates[x]=_))}),m("templatemutation",w,"")}),i.onPresent(n.get("element.import"),l=>{p(l,l,"","added",!1)}),n.get("api.moduleref")in r.Element.prototype)throw new Error('The "Element" class already has a "'+n.get("api.moduleref")+'" property!');Object.defineProperty(r.Element.prototype,n.get("api.moduleref"),{get:function(){var l;if(!c(this,"oohtml").has("module")&&(l=this.getAttribute(n.get("attr.moduleref")))){var g=O(l);c(this,"oohtml").set("module",g)}return c(this,"oohtml").get("module")}});var M=u.length?"loading":"indeterminate";Object.defineProperty(o,"templatesReadyState",{get:()=>M}),t.DOM.ready.call(t,()=>(u.forEach(l=>{l.catch(g=>{console.warn(g)})}),Promise.all(u).then(()=>{M="complete",o.dispatchEvent(new r.Event("templatesreadystatechange"))})))}ve.call(window);})();
//# sourceMappingURL=html-modules.js.map
