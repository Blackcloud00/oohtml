!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=76)}([function(e,t,r){"use strict";var n=r(21);t.a=function(e){return Array.isArray(e)||"object"==typeof e&&e||Object(n.a)(e)}},function(e,t,r){"use strict";t.a=function(e){return Array.isArray(e)}},function(e,t,r){"use strict";t.a=function(e){return!Array.isArray(e)&&"object"==typeof e&&e}},function(e,t,r){"use strict";var n=r(1),i=r(7),s=r(11),a=r(38),c=r(2);t.a=function(e,t=!0){return Object(n.a)(e)?e:!t&&Object(c.a)(e)?[e]:!1!==e&&0!==e&&Object(a.a)(e)?[]:function(e){return!Object(i.a)(e)&&!Object(s.a)(e.length)}(e)?Array.prototype.slice.call(e):Object(c.a)(e)?Object.values(e):[e]}},function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return x})),r.d(t,"d",(function(){return D})),r.d(t,"c",(function(){return M}));var n=r(20),i=r(13),s=r(7),a=r(11),c=r(5),o=r(3),u=r(1),l=r(2),h=r(6);const f=function(e,t=1,r=!0){return!Object(h.a)(t)||t<=0?e:(!Object(u.a)(e)&&Object(l.a)(e)&&r&&(e=Object.values(e)),Object(u.a)(e)?e.reduce((e,n)=>Object(u.a)(n)||Object(l.a)(n)&&r?e.concat(f(Object(u.a)(n)?n:Object.values(n),t-1,r)):e.concat(n),[]):e)};var b=f,p=r(18),d=r(14),m=r(17),O=r(0),j=function(e){return Object(l.a)(e)&&Object.getPrototypeOf(e)===Object.prototype},g=function(e){return!0===e||!1===e},v=r(12);const w=function(e,t,r=!0,n=1){if(Object(u.a)(e)&&Object(u.a)(t)&&e.length!==t.length)return!r;if(Object(l.a)(e)&&Object(l.a)(t)){var i=Object.keys(e),s=Object.keys(t);if(!i.length&&!s.length)return j(e)&&j(t)?r:e===t===r;if(!w(i,s))return!r}if(n>0&&(Object(u.a)(e)&&Object(u.a)(t)||Object(l.a)(e)&&Object(l.a)(t))){var a=function(e,t,r=!0,n=!0,i=!1,s=!1){if(Object(u.a)(e)&&Object(u.a)(t)){var a=[],c=!0;return e.forEach(e=>{if(c){var o=!1;Object(v.a)(t,(t,i)=>{(!o||n&&Object(O.a)(e))&&(o=r(e,i),(Object(u.a)(o)&&!o.length||Object(l.a)(o)&&!Object.keys(o).length)&&(o=!1),Object(O.a)(o)&&n&&(e=o))}),Object(O.a)(o)?a.push(n?o:e):g(o)?i&&!o||!i&&o?a.push(e):s&&(c=!1):a.push(o)}}),a}if(Object(l.a)(e)&&Object(l.a)(t)){a={},c=!0;return Object.keys(e).forEach(o=>{if(c){var h=r(e[o],t[o]);(Object(u.a)(h)&&!h.length||Object(l.a)(h)&&!Object.keys(h).length)&&(h=!1),Object(O.a)(h)?a[o]=n?h:e[o]:g(h)?i&&!h||!i&&h?a[o]=e[o]:s&&(c=!1):a[o]=h}}),a}}(e,t,(e,t)=>w(e,t,r,n-1),!1,!1,!0);return Object(u.a)(a)?a.length===e.length&&a.length===t.length:Object(l.a)(a)&&Object(l.a)(e)?Object.keys(a).length===Object.keys(e).length&&Object.keys(a).length===Object.keys(t).length:a}return Object(c.a)(r)?r(e,t):Object(m.a)(e)&&Object(m.a)(t)&&isNaN(e)&&isNaN(t)?r:e===t===r};var y=w,E=r(22),k=function(e,t=[]){return Object(E.a)([{},e],(e,r,n)=>{if(!Object(c.a)(n[e]))return Object(c.a)(t)?t(e):!Object(u.a)(t)||!t.length||t.indexOf(e)>-1},!1,!1,!1)};class C{static lex(e,t,r={}){if(!Object(s.a)(e+=""))throw new Error("Argument1 must be a string!");var n=e=>({delims:e.delims.slice(),options:k(e.options),nesting:e.nesting.slice(),maxDepth:e.maxDepth,comments:e.comments.slice(),tokens:e.tokens.slice(),matches:e.matches.slice(),matchesi:k(e.matchesi)});if(C.$cache[e]&&!1!==r.cache)for(var i=0;i<C.$cache[e].length;i++){var a=C.$cache[e][i];if(y(a.delims,t))return n(a)}var c=new C(e,r).lex(t);return!1!==r.cache&&(C.$cache[e]=C.$cache[e]||[],C.$cache[e].push(c)),n(c)}static split(e,t,r){return C.lex(e,t,r).tokens}static match(e,t,r){return C.lex(e,t,r).matches}constructor(e,t){if(!Object(s.a)(e))throw new Error("Lexer requires the first argument to be a string.");this.$str=e,this.$options=t||{},this.$options.blocks||(this.$options.blocks=C.$blocks),this.$options.quotes||(this.$options.quotes=C.$quotes),this.$options.comments||(this.$options.comments=C.$comments)}lex(e,t){for(var r={delims:Object(o.a)(e),options:Object(i.a)(!0,{},this.$options,t||{}),nesting:[],maxDepth:0,comments:[],tokens:[],matches:[],matchesi:{}},n=0;"number"==typeof n;)n=this._evalCharsAt(r,n);if(r.nesting.length)throw new Error("Error parsing the string: "+this.$str+". Unterminated blocks: "+b(r.nesting).join(", "));return r}_evalCharsAt(e,t){if(!(t>=this.$str.length)){var r=1,n={},i={},s={};if(e.openComment||(i=this._testQuotes(e,t)),e.openQuote||(n=this._testComments(e,t)),e.openComment||n.ending)if(e.nesting.length||s.ending)this._push(e,this.$str[t]);else r=(c=n.starting||n.ending||this.$str[t]).length,this._push(e,c,"comments",n.starting);else if(e.openQuote||i.ending)this._push(e,this.$str[t]);else{if(e.options.limit&&e.matches.length===e.options.limit)return this._push(e,this.$str[t]),t+1;s=this._testNesting(e,t);s=this._testNesting(e,t);var a=this._testChars(e.options.stopChars||[],e,t);if(!e.nesting.length&&!1!==a)return e.options.stopChar=a,void(e.options.stopCharForward=this.$str.substr(t));if(e.delims.length)if(e.nesting.length||s.ending){var c;r=(c=s.starting||s.ending||this.$str[t]).length,this._push(e,c)}else{this._push(e,"");var o=this._testChars(e.delims,e,t);if(!1!==o&&(e.matches.push(o),e.matchesi[t]=o,r=o.length||1,!e.options.preserveDelims)){var u=t+(o.length||1);return u===this.$str.length&&this._push(e,""),u}this._push(e,o||this.$str[t])}else 2===e.nesting.length&&s.starting?(e.matches.push(null),this._push(e,s.starting),r=s.starting.length):!e.nesting.length&&s.ending?(this._push(e,s.ending),r=s.ending.length,e.matches.push(null)):this._push(e,this.$str[t])}return t+r}}_testQuotes(e,t){var r={};return(e.options.quotes||[]).forEach(n=>{this.$str.substr(t,1)===n&&(e.openQuote?n===e.openQuote&&(e.openQuote=!1,r.ending=n):(e.openQuote=n,r.starting=n))}),r}_testComments(e,t){var r={};return(e.options.comments||[]).forEach(n=>{if(e.openComment){if(Object(d.a)(n)===Object(d.a)(e.openComment)){var i=Object(d.a)(n);this.$str.substr(t).startsWith(i)&&(e.openComment=!1,r.ending=i)}}else{var s=Object(p.a)(n);this.$str.substr(t).startsWith(s)&&(e.openComment=n,r.starting=s)}}),r}_testNesting(e,t){var r={};return(e.options.blocks||[]).forEach(n=>{var i=Object(p.a)(n);if(this.$str.substr(t).startsWith(i))e.nesting=e.nesting.concat([n]),r.starting=i;else if(e.nesting.length&&Object(d.a)(n)===Object(d.a)(Object(d.a)(e.nesting))){var s=Object(d.a)(n);this.$str.substr(t).startsWith(s)&&(e.nesting=e.nesting.slice(0,-1),r.ending=s)}}),e.maxDepth=Math.max(e.maxDepth,e.nesting.length),r}_testChars(e,t,r){for(var n=0;n<e.length;n++){var i=e[n];if(Object(c.a)(i)){var s=i(this.$str.substr(0,r),this.$str.substr(r));if(!1!==s)return s}if(t.options.useRegex){var a=this.$str.substr(r).match(new RegExp("^"+i,!0!==t.options.useRegex?t.options.useRegex:""));if(a)return a[0]}if(!t.options.ci&&this.$str.substr(r,i.length)===i||t.options.ci&&this.$str.substr(r,i.length).toLowerCase()===i.toLowerCase())return i}return!1}_push(e,t,r="tokens",n=!1){var i=e.matches.length;if(Object(a.a)(e.tokens[i])&&(e.tokens[i]=""),"comments"===r){e.tokens[i].comments||(e.tokens[i]=new String(e.tokens[i]),e.tokens[i].comments=[]);var s=e.tokens[i].comments.length-(!e.tokens[i].comments.length||n?0:1);e.tokens[i].comments[s]=(e.tokens[i].comments[s]||"")+t}else{e.tokens[i].comments;e.tokens[i]=e.tokens[i]+t}}split(e,t,r){return this.lex(t,r).tokens}match(e,t,r){return this.lex(t,r).matches}regParse(e,t){return this.lex(e,Object(i.a)({useRegex:!0},t||{}))}regSplit(e,t){return this.regParse(e,t).tokens}regMatch(e,t){return this.regParse(e,t).matches}}C.$blocks=[["(",")"],["[","]"],["{","}"]],C.$quotes=['"',"'","`"],C.$comments=[["/*","*/"],["//","\n"]],C.$cache={};var S=r(27),P=r(28),$=function(e,t,r){return function(e,t){return Object(P.a)(e,t,!0)}(Object(S.a)(e,t),r)};function _(e,t={}){const r=n.a.call(this);return r.OOHTML.meta||(r.OOHTML.meta=r.DOM.meta("oohtml",!0)),r.OOHTML.meta.defaults(Object(i.a)(3,e,t)),r.OOHTML.meta}function x(e){var t,r,n=Symbol.for(".webqit");return(r=e[n])||(r={},Object.defineProperty(e,n,{value:r,enumerable:!1})),(t=r.oohtml)||(t={},r.oohtml=t),t}function D(e,t,r,n=null){var i=t.split("#")[0].split("/").map(e=>e.trim()).filter(e=>e);return T(e,i,r,n)}function M(e){var t=C.split(e.trim(),[":"]);return[e=t.shift(),t.reduce((e,t)=>{var[r,n]=C.split(t.trim(),[]);return e[r]=$(n,"(",")"),e},{})]}const A=(e,t)=>C.split(e.trim(),["|","+"],{preserveDelims:!0}).reduce((e,r)=>{var n;return(r.startsWith("|")||r.startsWith("+"))&&(n=r.substr(0,1),r=r.substr(1).trim()),e.theEnd||"|"===n&&e.length?(e.theEnd=!0,e):e.concat(t(r.trim()))},[]).filter(e=>e),N=(e,t,r)=>{const n=e=>e.reduce((e,t)=>e.concat(Object.values(r(t))),[]);return A(t,t=>{var[t,i]=M(t);return e.reduce((e,s)=>{var a=r(s);"*"===t&&(t="("+Object.keys(a).join("+")+")");var c,u,l,h=(u="(",l=")",(c=t).startsWith(u)&&c.endsWith(l)?N([s],$(t,"(",")"),r):Object(o.a)(a[t],!1)),f=[],b=e=>`${e}${f.map(e=>`:${e}(${i[e]})`).join("")}`;return Object.keys(i).forEach(e=>{if("deep"===e||"deepest"===e)for(var a=[s];("deepest"===e||!h.length)&&(a=n(a)).length;){var c=N(a,b(t),r);c.length&&(h=c)}else"having"!==e&&"not-having"!==e||(h=h.filter(t=>{var n=A(i[e],e=>r(t,e));return"not-having"===e?!n.length:n.length})),f.push(e)}),e.concat(h)},[])})},T=function(e,t,r,n=null,i=0){var s,a=t.shift();a.endsWith(".")&&(s=!0,a=a.substr(0,a.length-1).trim());var c=N(e,a,r);if(c.length&&s)return c;if(t.length){var o=T(c,t.slice(),r,n,i+1);return-1===o?n(c,i,!0):o}return n?n(c,i):c}},function(e,t,r){"use strict";var n=r(21);t.a=function(e){return Object(n.a)(e)||e&&"[object function]"==={}.toString.call(e)}},function(e,t,r){"use strict";var n=r(17);t.a=function(e){return Object(n.a)(e)||!0!==e&&!1!==e&&null!==e&&""!==e&&!isNaN(1*e)}},function(e,t,r){"use strict";t.a=function(e){return e instanceof String||"string"==typeof e&&null!==e}},,function(e,t,r){"use strict";var n=r(3),i=r(7),s=r(1),a=r(17),c=r(2),o=r(0),u=r(5),l=function(e){return typeof e},h=function(e,t,r=null){if(!Object(o.a)(e))throw new Error('Subject must be of type object; "'+l(e)+'" given!');var n,i=Symbol.for(".webqit");return(n=e[i])||(n={},Object.defineProperty(e,i,{value:n,enumerable:!1})),n.observer||(n.observer={}),!n.observer[t]&&r&&(n.observer[t]=new r(e)),n.observer[t]},f=r(29),b=r(14);function p(e){return(d(e)?e:Object(n.a)(e).length?[e]:[]).reduce((e,t)=>e.concat([Object(n.a)(t)]),[])}function d(e){return Object(n.a)(e).reduce((e,t)=>e||Object(s.a)(t),!1)}function m(e){return e.filter(e=>!e&&0!==e).length}function O(e,t){return e.length===t.length&&e.reduce((e,r,n)=>e&&r===t[n],!0)}function j(e,t){return t.reduce((t,r,n)=>t&&r===e[n],!0)}function g(e,t){return e.slice(t.length)}var v=function(e,t,r=null){return Object(s.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1!==t.indexOf(e)):[]},w=class{constructor(e){this.subject=e,this.fireables=[],this.currentlyFiring=[]}add(e){return this.fireables.push(e),e}remove(e){this.fireables=this.fireables.filter(t=>t!==e)}forget(e){this.match(e).forEach(e=>{this.fireables=this.fireables.filter(t=>t!==e)})}match(e){return this.fireables.filter(t=>{var r,i,s,a=p(t.filter),c=Object(n.a)((t.params||{}).tags),o=p(e.filter),u=Object(n.a)((e.params||{}).tags);return(!e.originalHandler||t.handler===e.originalHandler)&&(!o.length||(i=a,(r=o).length===i.length&&(s=(e,t)=>O(e,i[t]),r.reduce((e,t,r)=>e&&s(t,r),!0))))&&(!u.length||u.length===c.length&&v(c,u).length===u.length)})}},y=r(34),E=r(6),k=class{constructor(e,t){this.subject=e,this.handler=t.handler,this.filter=t.filter,this.params=t.params}disconnect(){this.disconnected=!0}},C=r(11),S=r(12),P=class{constructor(e,t=!1){this._={},this._.target=e,this._.cancellable=t,this._.propagationStopped=!1,this._.defaultPrevented=!1,this._.promisesInstance=null,this._.promises=[]}get target(){return this._.target}get cancellable(){return this._.cancellable}stopPropagation(){this._.propagationStopped=!0}get propagationStopped(){return this._.propagationStopped}preventDefault(){this._.defaultPrevented=!0}get defaultPrevented(){return this._.defaultPrevented}waitUntil(e){e instanceof Promise&&(this._.promises.push(e),this._.promisesInstance=null)}get promises(){return!this._.promisesInstance&&this._.promises.length&&(this._.promisesInstance=Promise.all(this._.promises)),this._.promisesInstance}respondWith(e){var t,r=Object(c.a)(e)&&!Object(C.a)(e.propagationStopped)&&!Object(C.a)(e.defaultPrevented);!1===e||r&&e.propagationStopped?this.stopPropagation():!1===e||r&&e.defaultPrevented?this.preventDefault():(e instanceof Promise&&(t=e)||r&&(t=e.promises))&&this.waitUntil(t)}},$=class extends k{constructor(e,t){if(super(e,t),this.filters2D=p(this.filter),this.filtersIsOriginally2D=d(this.filter),this.filtersIsDynamic=this.filters2D.filter(e=>m(Object(n.a)(e))).length,this.filtersIsDynamic&&this.filters2D.length>1)throw new Error('Only one "Dynamic Filter" must be observed at a time! "'+this.filters2D.map(e=>"["+e.join(", ")+"]").join(", ")+'" have been bound together.')}fire(e){if(this.disconnected||this.params.type&&!Object(y.a)(e,e=>this.params.type===e.type))return;const t=e=>["set","def"].includes(e.type)&&(!this.params.diff||(Object(u.a)(this.params.diff)?this.params.diff(e.value,e.oldValue):e.value!==e.oldValue));var r=new P(this.subject);if(this.filters2D.length){var n=e.filter(e=>this.filters2D.filter((r,n)=>{var i=this.filtersIsDynamic?r.map((t,r)=>t||0===t?t:e.path[r]||""):r;return(!this.filtersIsDynamic||!m(i))&&t(e)&&(!this.params.subtree&&O(i,e.path)||!this.params.subtree&&this.params.suptree&&j(i,e.path)&&(!Object(E.a)(this.params.suptree)||g(i,e.path).length<=this.params.suptree)||this.params.subtree&&e.path.length>i.length&&j(e.path,i)&&(!Object(E.a)(this.params.subtree)||g(e.path,i).length<=this.params.subtree))}).length);if(n.length)if(this.filtersIsOriginally2D||this.params.subtree){var i=n;Object(c.a)(this.filter)&&(i={...this.filter},e.forEach((e,t)=>{i[e.name]=e})),r.respondWith(this.handler(i,r))}else e.forEach((e,t)=>{r.respondWith(this.handler(e,r))})}else(this.params.subtree||e.filter(e=>O(e.path,[e.name])).length===e.length)&&e.filter(e=>t(e)).length&&r.respondWith(this.handler(e,r));return r}},_=class{constructor(e,t){if(this.subject=e,t.originalSubject||(this.originalSubject=e),!("type"in t))throw new Error("Delta type must be given in definition!");if(!("name"in t))throw new Error("Property name must be given in definition!");Object(S.a)(t,(e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})}),this.path||Object.defineProperty(this,"path",{value:[t.name],enumerable:!0}),Object.seal(this)}},x=class extends w{constructor(e){super(e),this.buffers=[]}add(e){return super.add(new $(this.subject,e))}fire(e,t){var r=new P(this.subject,t);return e=Object(n.a)(e,!1).map(e=>e instanceof _?e:new _(this.subject,e)),this.buffers.length?(Object(b.a)(this.buffers)(e),r):(this.currentlyFiring.filter(t=>e.filter(e=>t.type===e.type&&t.name===e.name).length).length,this.currentlyFiring.push(...e),this.fireables.forEach(n=>{if(r.propagationStopped&&t)return r;r.respondWith(n.fire(e))}),e.forEach(e=>Object(f.a)(this.currentlyFiring,e)),r)}},D=function(e,t=!0){return h(e,"observers",t?x:null)},M=(r(28),r(27),class extends k{fire(e,t,r){return this.disconnected||this.filter&&!v(Object(n.a)(this.filter),[e.type]).length?t(...Array.prototype.slice.call(arguments,2)):this.handler(e,r,t)}}),A=class{constructor(e,t){if(this.subject=e,!t.type)throw new Error("Action type must be given in definition!");Object(S.a)(t,(e,t)=>{Object.defineProperty(this,e,{value:t,enumerable:!0})}),Object.seal(this)}},N=class extends w{add(e){return super.add(new M(this.subject,e))}fire(e,t=null){if(e instanceof A||(e=new A(this.subject,e)),this.currentlyFiring.filter(t=>t.type===e.type&&t.name===e.name).length)return t?t():void 0;this.currentlyFiring.push(e);const r=(n,...i)=>{var s=this.fireables[n];return s?s.fire(e,(...e)=>r(n+1,...e),...i):t?t(...i):i[0]};var n=r(0);return this.currentlyFiring.pop(),n}},T=function(e,t=!0){return h(e,"interceptors",t?N:null)},q=function(e){var t;return Object(o.a)(e)&&(t=e[Symbol.for(".observer.proxy.target")])?t():e},W=function(e,t){if(!t||!Object(o.a)(t))throw new Error("Target must be of type object!");t=q(t);var r,n=function(r){return arguments.length?r:e?Object.getOwnPropertyNames(t):Object.keys(t)};return(r=T(t,!1))?r.fire({type:e?"ownKeys":"keys"},n)||[]:n()},I=function(e){return W(!1,...arguments)},R=function(e,t=null){var r={};return 2===arguments.length&&(Object(s.a)(e)&&Object(s.a)(t)?e.forEach((e,n)=>r[e]=t[n]):r[e]=t),r},F=r(21),V=function(e){return Object(F.a)(e)&&/^class\s?/.test(Function.prototype.toString.call(e))},Q=r(22),H=function(e,t=[],r=!0){var n=0;return Object(E.a)(arguments[0])&&Object(o.a)(arguments[1])&&(n=arguments[0],e=arguments[1],t=arguments[2]||[]),Object(Q.a)([n,{},e],(e,r,n)=>Object(u.a)(t)?t(e):!Object(s.a)(t)||!t.length||t.indexOf(e)>-1,!1,!1,r)},L=r(37),U=r(13),B=function(e,t,r=null,n={}){if(!e||!Object(o.a)(e))throw new Error('Observable subjects must be of type object; "'+l(e)+'" given!');if(Object(u.a)(t)&&(n=arguments.length>2?r:{},r=t,t=null),r&&!Object(u.a)(r))throw new Error('Handler must be a function; "'+l(r)+'" given!');var i;if(i=D(e,!1))return i.forget({filter:t,originalHandler:r,params:n})},z=function(e,t,r=null,n={}){if(!e||!Object(o.a)(e))throw new Error('Observable subjects must be of type object; "'+l(e)+'" given!');if(Object(u.a)(t)&&(n=arguments.length>2?r:{},r=t,t=null),!Object(u.a)(r))throw new Error('Handler must be a function; "'+l(r)+'" given!');var i,s=D(e),a={filter:t,handler:r,params:n};if((a.filter||!0===a.params.subtree||"auto"===a.params.subtree&&ee(e))&&Z(e,a.filter,a.params.subtree),a.params.unique&&(i=s.match({filter:t,params:n})).length){if("replace"!==a.params.unique)return i[0];s.remove(i[0])}return s.add(a)},K=function(e,t,r,n=null,i={}){var s;if(e!==r&&(z(r,(r,n)=>{if(s=D(e,!1)){var i=r.map(r=>{var n=r;do{if(n.subject===e)return}while(n=n.src);var i={};return Object(S.a)(r,(e,t)=>{"subject"!==e&&"name"!==e&&"path"!==e&&"src"!==e&&(i[e]=t)}),i.name=t,i.path=[t].concat(r.path),i.originalSubject=r.originalSubject,i.src=r,new _(e,i)}).filter(e=>e);if(i.length)return s.fire(i,n.cancellable)}},{subtree:"auto",unique:!0,tags:[G,t,e]}),Object(c.a)(n)&&(s=D(e,!1)))){var a=Object(U.a)({name:t,type:"set",value:r,related:[t]},n);let e=s.fire(a,i.cancellable);if(i.responseObject)return e}};const G={};var J=function(e,t,r,n=null,i={}){var s;if(B(r,null,null,{tags:[G,t,e]}),Object(c.a)(n)&&(s=D(e,!1))){var a=Object(U.a)({name:t,type:"del",oldValue:r,related:[t]},n);s.fire(a,i.cancellable)}},X=function(e,...t){var r=t.map(e=>{if(!Object(o.a)(e))throw new Error("Target must be of type object!");return{subject:e,subjectCopy:Object(s.a)(e)?e.slice(0):H(e)}}),n=e(...t);return r.map(e=>{var t,r=Object.keys(e.subjectCopy),n=Object.keys(e.subject),i=[],s=Object(L.a)(r.concat(n)).map(t=>{if(e.subjectCopy[t]!==e.subject[t]){i.push(t);var s={name:t,related:i,buffered:!0};return n.includes(t)?(s.type="set",s.value=e.subject[t],r.includes(t)&&(s.isUpdate=!0)):s.type="del",r.includes(t)&&(s.oldValue=e.subjectCopy[t]),Object(o.a)(e.subjectCopy[t])&&J(e.subject,t,e.subjectCopy[t]),Object(o.a)(e.subject[t])&&K(e.subject,t,e.subject[t]),s}}).filter(e=>e);if(s.length&&(t=D(e.subject,!1)))return t.fire(s)}),n},Y=function(e,t,r=!1){if(!e||!Object(o.a)(e))throw new Error("Target must be of type object!");e=q(e);var n,i,a=function(r){return arguments.length?r:Object(s.a)(t)?R(t,e):e[t]};return n=(i=T(e))?i.fire({type:"get",name:t},a):a(),r&&Object(s.a)(e)&&!Object(E.a)(t)&&Object(u.a)(n)&&!V(n)?function(...t){return X(()=>n.apply(e,t),e)}:n};function Z(e,t=null,r=!1){if(!e||!Object(o.a)(e))throw new Error("Target must be of type object!");var n=D(e);if(n&&!n.build){n.build=r;var i=p(t),s=!i.length||i.filter(e=>!e[0]&&0!==e[0]).length?I(e):i.map(e=>e[0]),a=i.length?i.map(e=>e.slice(1)).filter(e=>e.length):null;n.subBuild=a&&a.length?a:null,s.forEach(t=>{var i=Y(e,t);try{Object(o.a)(i)&&(K(e,t,i),(n.subBuild&&ee(i)||(_isFunction(r)?r(i):r&&ee(i)))&&Z(i,n.subBuild,r))}catch(e){}})}}const ee=e=>(e instanceof Object||e instanceof Array||e instanceof Function)&&("undefined"==typeof window||e!==window);var te=function(e,t){if(!e||!Object(o.a)(e))throw new Error("Target must be of type object!");e=q(e);var r,n=function(r){return arguments.length?r:t in e};return(r=T(e,!1))?r.fire({type:"has",name:t},n):n()},re=function(e,t,r,u=null,l={}){if(!t||!Object(o.a)(t))throw new Error("Target must be of type object!");Object(c.a)(r)&&(l=u||{},u=null),t=q(t);var h=T(t,!1),f=D(t,!1);const b=(r,n,i,s)=>{var a,c="set";e&&(c="def",n=(a=n||{}).value);var u,l=!1;te(t,r)&&(l=!0,u=Y(t,r));var b={name:r,type:c,value:n,related:i,detail:s,isUpdate:l,oldValue:u},p=function(e){return arguments.length?e:(a?Object.defineProperty(t,r,a):t[r]=n,!0)};if(h){var d=a?{type:"def",name:r,descriptor:a,related:i,detail:s,isUpdate:l,oldValue:u}:{type:"set",name:r,value:n,related:i,detail:s,isUpdate:l,oldValue:u};b.success=h.fire(d,p)}else b.success=p();return b.success&&b.value!==b.oldValue&&(Object(o.a)(b.oldValue)&&J(t,r,b.oldValue),Object(o.a)(b.value)&&(K(t,r,b.value),f&&(f.subBuild||f.build&&ee(b.value))&&Z(b.value,f.subBuild,f.build))),b};var p,d=[];Object(s.a)(r)||(Object(i.a)(r)||Object(a.a)(r))&&(p=Object(n.a)(r))?d=p.map(e=>b(e,u,p,l.detail)):Object(c.a)(r)&&(p=Object.keys(r))&&(d=p.map(e=>b(e,r[e],p,l.detail)));var m,O=d.filter(e=>e.success);return f?(m=f.fire(O,l.cancellable)).successCount=O.length:l.responseObject&&(m=new P(t)),l.responseObject?m:O.length>0},ne=function(e,t,r=null,n=null,i={}){return re(!1,...arguments)},ie=function(e,t,r={}){if(!e||!Object(o.a)(e))throw new Error("Target must be of type object!");e=q(e);var i,s,a=(t=Object(n.a)(t)).map(n=>{var i;te(e,n)&&(i=Y(e,n));var s,a={name:n,type:"del",related:t,detail:r.detail,oldValue:i},c=function(t){return arguments.length?t:(delete e[n],!0)};return(s=T(e,!1))?a.success=s.fire({type:"del",name:n,oldValue:i,related:t},c):a.success=c(),a.success&&Object(o.a)(a.oldValue)&&J(e,n,a.oldValue),a}).filter(e=>e.success);return(i=D(e,!1))?(s=i.fire(a,r.cancellable)).successCount=a.length:r.responseObject&&(s=new P(e)),r.responseObject?s:a.length>0},se=function(e,t,r=null,n=null){return re(!0,...arguments)},ae=function(e){return W(!0,...arguments)};const ce=ie,oe=se;t.a={set:ne,get:Y,has:te,deleteProperty:ie,del:ce,defineProperty:se,def:oe,keys:I,ownKeys:ae,intercept:function(e,t,r,n={}){if(!Object(o.a)(e))throw new Error('Object must be of type subject; "'+l(r)+'" given!');if(Object(u.a)(t)&&(n=arguments.length>2?r:{},r=t,t=null),!Object(u.a)(r))throw new Error('Callback must be a function; "'+l(r)+'" given!');var i,s=T(e),a={filter:t,handler:r,params:n};if(a.params.unique&&(i=s.match(a)).length){if("replace"!==a.params.unique)return i[0];s.remove(i[0])}return s.add(a)},unintercept:function(e,t,r=null,n={}){if(!e||!Object(o.a)(e))throw new Error('Object must be of type subject; "'+l(e)+'" given!');if(Object(u.a)(t)&&(n=arguments.length>2?r:{},r=t,t=null),r&&!Object(u.a)(r))throw new Error('Handler must be a function; "'+l(r)+'" given!');var i;if(i=T(e,!1))return i.forget({filter:t,originalHandler:r,params:n})},proxy:function(e){if(!Object(o.a)(e))throw new Error('Object must be of type subject; "'+l(e)+'" given!');var t=new Proxy(e,{get:(e,r)=>{if(r===Symbol.for(".observer.proxy.target"))return()=>e;var n=Y(e,r);return Object(u.a)(n)&&!V(n)?n.bind(t):n},set:(...e)=>(ne(...e),!0),has:te,deleteProperty:(...e)=>(ie(...e),!0),defineProperty:(...e)=>(se(...e),!0),ownKeys:ae});return t},unproxy:q,observe:z,unobserve:B,closure:X,init:function(e,t){var r,i=Symbol.for(".observer.init.props");(r=e[i])||(r=[],Object.defineProperty(e,i,{value:r,enumerable:!1})),Object(n.a)(t).forEach(t=>{if(!r.includes(t)){r.push(t);var n,i,s=e[t],a=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!(t in e)};"value"in a&&delete a.value,"writable"in a&&delete a.writable,a.get=()=>{if(n)return s;n=!0;var r=Y(e,t);return n=!1,r},a.set=r=>{if(i)return s=r,!0;i=!0;ne(e,t,r);return i=!1,!0},Object.defineProperty(e,t,a)}})},build:Z,link:K,unlink:J,getObservers:D}},,function(e,t,r){"use strict";t.a=function(e){return arguments.length&&(void 0===e||void 0===e)}},function(e,t,r){"use strict";var n=r(0),i=r(6);t.a=function(e,t){var r=void 0;return Object(n.a)(e)&&Object.keys(e).forEach((n,s)=>{!1!==r&&(r=t(Object(i.a)(n)?parseFloat(n):n,e[n],s))}),r}},function(e,t,r){"use strict";var n=r(22);t.a=function(...e){return Object(n.a)(e,(e,t,r)=>!0,!1,!1,!1)}},function(e,t,r){"use strict";var n=r(18);t.a=function(e,t=1){return arguments.length>1?Object(n.a)(e.slice().reverse(),t).reverse():Object(n.a)(e.slice().reverse())}},,,function(e,t,r){"use strict";t.a=function(e){return e instanceof Number||"number"==typeof e}},function(e,t,r){"use strict";t.a=function(e,t=1){var r=0;e.forEach(e=>{r++});var n=e.slice(e.length-r,t);return arguments.length>1?n:n[0]}},,function(e,t,r){"use strict";var n=r(2);var i=function(){if(!(Object(n.a)(this)&&this.window||"undefined"!=typeof window))throw new Error("A window context is required.");const e=Object(n.a)(this)&&this.window?this.window:window;if(e.WebQit||(e.WebQit={}),!e.WebQit.window){let t,r;Object.defineProperty(e.WebQit,"window",{get:()=>e}),Object.defineProperty(e.WebQit,"vendor",{value:{getName:()=>(t||(t=function(e){if(void 0!==e.InstallTrigger)return"firefox";if(/constructor/i.test(e.HTMLElement)||"[object SafariRemoteNotification]"===(!e.safari||void 0!==e.safari&&e.safari.pushNotification).toString())return"safari";var t=!(!e.chrome||!e.chrome.webstore&&!e.chrome.runtime),r=t&&-1!=e.navigator.userAgent.indexOf("Edg"),n=!!e.opr&&!!e.opr.addons||!!e.opera||e.navigator.userAgent.indexOf(" OPR/")>=0,i=!!e.document.documentMode,s=!i&&!!e.StyleMedia;return(t||n)&&e.CSS,s?"edge":i?"ie":n?"opera":r?"ie-chromium":t?"chrome":"unknown"}(e)),t),getPrefix:()=>(r||(r=function(e){var t=e.getComputedStyle(e.document.documentElement,""),r=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.Olink&&["","o"])[1];return{api:("WebKit|Moz|Ms|O".match(new RegExp("("+r+")","i"))||[])[1],prefix:r,css:"-"+r+"-"}}(e)),r)}})}return e.WebQit};r(12);class s{constructor(e,t=!0){this.window=e,this.async=t,this.readCallbacks=[],this.writeCallbacks=[],this._run()}_run(){this.window.requestAnimationFrame(()=>{this.readCallbacks.forEach((e,t)=>{e&&!e()&&(this.readCallbacks[t]=null)}),this.writeCallbacks.forEach((e,t)=>{e&&!e()&&(this.writeCallbacks[t]=null)}),this._run()})}onread(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.readCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.readCallbacks.push(e)}onwrite(e,t=!1){if(t)return new Promise((t,r)=>{!1===this.async?e(t,r):this.writeCallbacks.push(()=>{e(t,r)})});!1===this.async?e():this.writeCallbacks.push(e)}cycle(e,t,r){this.onread(()=>{var n=e(r);if(n){var i=n=>{this.onwrite(()=>{var i=t(n,r);if(i){var s=r=>{this.cycle(e,t,r)};i instanceof Promise?i.then(s):s()}})};n instanceof Promise?n.then(i):i()}})}}var a=r(7),c=(r(43),r(3)),o=function(e){const t=i.call(this);t.DOM.isDOMReady||"complete"===t.window.document.readyState?e(t.window):(t.window.domReadyCallbacks||(t.window.domReadyCallbacks=[],t.window.document.addEventListener("DOMContentLoaded",()=>{t.DOM.isDOMReady=!0,t.window.domReadyCallbacks.splice(0).forEach(e=>e(t.window))},!1)),t.window.domReadyCallbacks.push(e))};class u{constructor(e){this.window=e}onAdded(e,t,r={}){return r.on="added",this.onPresenceChange(e,(e,r,n,i,s)=>{t(e,r,n,i,s)},r)}onRemoved(e,t,r={}){return r.on="removed",this.onPresenceChange(e,(e,r,n,i,s)=>{t(e,r,n,i,s)},r)}onPresent(e,t,r={}){o.call(this.window,()=>{this.window.MutationObserver&&this.onAdded(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?Object(c.a)(this.window.document.querySelectorAll(e)).forEach(e=>t(e,1)):e.parentNode&&t(e,1)})}onAbsent(e,t,r={}){o.call(this.window,()=>{this.window.MutationObserver&&onRemoved(e,(e,r)=>{e.forEach(e=>t(e,r))},r),Object(a.a)(e)?0===Object(c.a)(this.window.document.querySelectorAll(e)).length&&t(null,0):e.parentNode||t(e,0)})}onPresenceChange(e,t,r={}){e=Object(c.a)(e,!1);var n=(e,t)=>(t.$$searchCache||(t.$$searchCache=new Map),e.reduce((e,n)=>{var i;return t.$$searchCache.has(n)?i=t.$$searchCache.get(n):(i=((e,t)=>{if(t=t.filter(e=>e.matches),Object(a.a)(e)){var n=t.filter(t=>t.matches(e));if(!1!==r.observeIndirectMutation&&(n=t.reduce((t,r)=>t.concat(Object(c.a)(r.querySelectorAll(e))),n)).length)return n}else{if(t.includes(e))return[e];if(!1!==r.observeIndirectMutation&&t.length)for(var i=e;i=i.parentNode;)if(t.includes(i))return[e]}})(n,t,Object(a.a)(n))||[],t.$$searchCache.set(n,i)),e.concat(i)},[])),i=new Set,s=new Set,o=(a,c,o)=>{c&&"removed"===r.on||!c&&"added"===r.on||(a=n(e,a)).length&&(r.maintainCallState?(a.forEach(e=>{c?(i.add(e),s.delete(e)):(i.delete(e),s.add(e))}),t(a,c,o,i,s)):t(a,c,o))},u=r.context||this.window.document.documentElement;return this._observe(u,(e,t,n,i)=>{r.ignoreTransients||(o(e,0,!0),o(e.concat(t),1,!0),o(t,0,!0)),o(i,0),o(n,1)})}onAttrChange(e,t,r=[]){var n=new this.window.MutationObserver(t),i={attributes:!0,attributeOldValue:!0};return r&&(i.attributeFilter=r),n.observe(e,i),n}onTreeChange(e,t,r=!1){var n=new this.window.MutationObserver(t),i={childList:!0,subtree:r};return n.observe(e,i),n}onMutation(e,t,r){var n=new this.window.MutationObserver(t);return n.observe(e,r),n}_observe(e,t){if(!l.has(e)){const t=new Set,r=new this.window.MutationObserver(e=>{if(t.size){var r=e.reduce((e,t)=>e.concat(Object(c.a)(t.addedNodes)),[]),n=e.reduce((e,t)=>e.concat(Object(c.a)(t.removedNodes)),[]),i=[],s=[];r=new Set(r),n=new Set(n),r.forEach(e=>{n.has(e)&&(n.delete(e),r.delete(e),e.isConnected?i.push(e):s.push(e))}),r=[...r],n=[...n],t.forEach(e=>e(i,s,r,n))}});r.observe(e,{childList:!0,subtree:!0}),l.set(e,{callbacks:t,observer:r})}const r=l.get(e);return r.callbacks.add(t),{disconnect(){r.callbacks.delete(t)},reconnect(){r.callbacks.add(t)}}}}const l=new Map;var h=function(e){!function(e){e.CSS||(e.CSS={});e.CSS.escape||(e.CSS.escape=e=>e.replace(/([\:@\~\$\&])/g,"\\$1"))}(e),function(e){"isConnected"in e.Node.prototype||Object.defineProperty(e.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}(e),function(e){e.Element.prototype.matches||(e.Element.prototype.matches=e.Element.prototype.matchesSelector||e.Element.prototype.mozMatchesSelector||e.Element.prototype.msMatchesSelector||e.Element.prototype.oMatchesSelector||e.Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;--r>=0&&t.item(r)!==this;);return r>-1})}(e)};function f(e,t=null,r=!1){const n=i.call(this);if(Object(a.a)(e)){var s;if(e.trim().startsWith("<")){var o=n.window.document.createElement("div");o.innerHTML=e,s=r?Object(c.a)(o.children):o.firstChild}else s=r?Object(c.a)(d.call(this,e,t)):p.call(this,e,t);return s}return e instanceof n.window.Element?r?[e]:e:r?Object(c.a)(e):e}function b(e,t=null){return f.call(this,e,t,!0)}function p(e,t=null,r=!1){const n=i.call(this);t=t||n.window.document;var s,a=r?"querySelectorAll":"querySelector";try{s=t[a](e)}catch(r){try{s=t[a](e.replace(/\:is\(/g,":matches("))}catch(r){try{s=t[a](e.replace(/\:is\(/g,":-webkit-any("))}catch(r){try{s=t[a](e.replace(/\:is\(/g,":-moz-any("))}catch(e){throw e}}}}return s}function d(e,t=null){return p.call(this,e,t,!0)}var m=r(6),O=(r(13),r(0)),j=r(5),g=r(1),v=r(11),w=r(24),y=function(e,t,r={},n={}){t=Object(c.a)(t).slice();for(var i=e;!Object(v.a)(i)&&!Object(w.a)(i)&&t.length;){var s=t.shift();if(!(r.get?r.get(i,s):Object(O.a)(i)?s in i:i[s]))return void(n.exists=!1);i=r.get?r.get(i,s):i[s]}return n.exists=!0,i},E=function(e,t,r,n={},i={}){const s=(e,r,n)=>i.set?i.set(e,r,n):(Object(m.a)(t[o])&&Object(g.a)(e)?e.push(n):e[r]=n,!0);t=Object(c.a)(t);for(var a=e,o=0;o<t.length;o++){if(!(o<t.length-1))return s(a,t[o],r);if(!a||!Object(O.a)(a)&&!Object(j.a)(a))return!1;var u=y(a,t[o],i);if(!Object(O.a)(u)){if(!1===i.buildTree)return!1;if(u=Object(j.a)(i.buildTree)?i.buildTree(o):Object(m.a)(t[o+1])?[]:{},!s(a,t[o],u))return!1}a=u}},k=function(e,t,r=!1,n={}){t=Object(c.a)(t);var i=!1;do{var s=""===(s=t.pop())?0:s,a=e;t.length&&(a=y(e,t,{},n)),(Object(O.a)(a)||Object(j.a)(a))&&(n.has?n.has(a,s):s in a)&&(n.deleteProperty?i=n.deleteProperty(a,s):n.del?i=n.del(a,s):(delete a[s],i=!0))}while(i&&r&&t.length&&(Object(O.a)(a)||Object(j.a)(a))&&!(n.keys?n.keys(a):Object.keys(a)).length);return i};function C(e,t=!1){const r=i.call(this);var s={};return!(s.el=r.window.document.head.querySelector('meta[name="oohtml"]'))&&t&&(s.el=r.window.document.createElement("meta"),s.el.setAttribute("name",e),r.window.document.head.append(s.el)),s.el&&(s.vars=(s.el.getAttribute("content")||"").split(";").filter(e=>e).reduce((e,t)=>{var r=t.split("=").map(e=>e.trim());return E(e,r[0].split("."),"true"===r[1]||"false"!==r[1]&&(Object(m.a)(r[1])?parseInt(r[1]):r[1])),e},{})),s.get=function(e){return y(this.vars,e.split("."))},s.set=function(e,r=null,i=!1){var s=Object(n.a)(e)?e:{[e]:!0===r?"true":r};if(i=arguments.length<3?r:i,Object.keys(s).forEach(e=>{if(!1===s[e])k(this.vars,e.split("."));else if(Object(n.a)(s[e]))Object.keys(s[e]).forEach(t=>{var r=(e+"."+t).split(".");i&&y(this.vars,r)||E(this.vars,r,s[e][t])});else{var t=e.split(".");i&&y(this.vars,t)||E(this.vars,t,s[e])}}),t){const e=(t,r)=>Object.keys(r).reduce((i,s)=>{var a=(t?t+".":"")+s;return Object(n.a)(r[s])?i.push(...e(a,r[s])):i.push(a+"="+r[s]),i},[]);this.el.setAttribute("content",e("",this.vars).join(";"))}return!0},s.defaults=function(e,t=null){return this.set(e,t,!0)},s}t.a=function(){const e=i.call(this);return e.DOM||(e.DOM={},h(e.window),e.DOM.reflow=new s(e.window),e.DOM.mutations=new u(e.window),e.DOM.meta=C.bind(e.window),e.DOM.query=f.bind(e.window),e.DOM.queryAll=b.bind(e.window),e.DOM.ready=o.bind(e.window)),e}},function(e,t,r){"use strict";t.a=function(e){return"function"==typeof e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(1),i=r(5),s=r(2),a=r(0),c=r(6),o=function(e,t){var r=[];return function(e,t){t=(t=t||Object.prototype)&&!Object(n.a)(t)?[t]:t;var r=[];for(e=e;e&&(!t||t.indexOf(e)<0)&&"default"!==e.name;)r.push(e),e=e?Object.getPrototypeOf(e):null;return r}(e,t).forEach(e=>{!function(e,...t){t.forEach(t=>{e.indexOf(t)<0&&e.push(t)})}(r,...Object.getOwnPropertyNames(e))}),r};function u(e,t,r=!1,l=!1,h=!1){var f=0,b=e.shift();if((Object(c.a)(b)||!0===b||!1===b)&&(f=b,b=e.shift()),!e.length)throw new Error("_merge() requires two or more array/objects.");return e.forEach((e,p)=>{(Object(a.a)(e)||Object(i.a)(e))&&(r?o(e):Object.getOwnPropertyNames(e)).forEach(i=>{if(t(i,b,e,p)){var a=b[i],o=e[i];if((Object(n.a)(a)&&Object(n.a)(o)||Object(s.a)(a)&&Object(s.a)(o))&&(!0===f||f>0))b[i]=Object(n.a)(a)&&Object(n.a)(o)?[]:{},u([Object(c.a)(f)?f-1:f,b[i],a,o],t,r,l,h);else if(Object(n.a)(b)&&Object(n.a)(e))l?b[i]=o:b.push(o);else try{h?Object.defineProperty(b,i,Object.getOwnPropertyDescriptor(e,i)):b[i]=e[i]}catch(e){}}})}),b}},,function(e,t,r){"use strict";t.a=function(e){return null===e||""===e}},,,function(e,t,r){"use strict";t.a=function(e,t,r=!1){if(""==t)return e;var n=r?e.lastIndexOf(t):e.indexOf(t);return-1===n?"":e.substr(n+t.length)}},function(e,t,r){"use strict";t.a=function(e,t,r=!1){if(""==t)return e;var n=r?e.lastIndexOf(t):e.indexOf(t);return-1===n?e:e.substr(0,n)}},function(e,t,r){"use strict";t.a=function(e,t,r=!1){for(var n=e.indexOf(t);n>-1&&(r||!1===r);)e.splice(n,1),r>0&&r--,n=e.indexOf(t);return e}},,,,,function(e,t,r){"use strict";t.a=function(e,t){return e.reduce((e,r,n)=>e||t(r,n),!1)}},,,function(e,t,r){"use strict";t.a=function(e){return e.filter((e,t,r)=>r.indexOf(e)===t)}},function(e,t,r){"use strict";var n=r(24),i=r(11),s=r(0);t.a=function(e){return Object(n.a)(e)||Object(i.a)(e)||!1===e||0===e||Object(s.a)(e)&&!Object.keys(e).length}},,,,,function(e,t,r){"use strict";var n=r(1);t.a=function(e,t,r=null){return Object(n.a)(t)?e.filter(e=>r?t.filter(t=>r(e,t)).length:-1===t.indexOf(e)):[]}},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(9),i=r(34),s=r(20),a=r(4);function c(e=null,t=!1){const r=s.a.call(this);if(t)return void r.DOM.ready(()=>{c.call(this,e,!1)});const o=r.window,u=r.window.document,l=r.DOM.mutations,h=[],f=a.a.call(this,{attr:{namespace:"namespace",id:"id"},api:{namespace:"namespace"}},e),b=function(e){if(!Object(a.b)(e).namespace){const t={};Object(a.b)(e).namespace=t,n.a.link&&n.a.link(e,f.get("api.namespace"),t)}return Object(a.b)(e).namespace};if(f.get("api.namespace")in o.Element.prototype)throw new Error('The "Element" class already has a "'+f.get("api.namespace")+'" property!');if(Object.defineProperty(o.Element.prototype,f.get("api.namespace"),{get:function(){return b(this)}}),f.get("api.namespace")in u)throw new Error('The "document" object already has a "'+f.get("api.namespace")+'" property!');Object.defineProperty(u,f.get("api.namespace"),{get:function(){return b(u)}}),l.onPresent("["+o.CSS.escape(f.get("attr.id"))+"]",e=>{var t=Object(a.b)(e);if(!t.idAlreadyBeingWatched&&!Object(i.a)(h,t=>e.closest(t))){var r=e.getAttribute(f.get("attr.id")),s=e.parentNode.closest("["+o.CSS.escape(f.get("attr.namespace"))+"]");s||(s=u);var c=b(s);c[r]!==e&&n.a.set(c,r,e),t.idAlreadyBeingWatched=!0,l.onPresenceChange(e,(t,i)=>{i?c[r]!==e&&n.a.set(c,r,e):c[r]===e&&n.a.deleteProperty(c,r)})}})}},,,,,,,,,function(e,t,r){"use strict";r.r(t),r(67).a.call(window)}]);
//# sourceMappingURL=namespaced-html.js.map