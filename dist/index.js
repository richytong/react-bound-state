var n,t=require("react"),r=(n=t)&&"object"==typeof n&&"default"in n?n.default:n;function e(){return(e=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}function o(n){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function i(n,t){return(i=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}function c(n,t,r){return(c=u()?Reflect.construct:function(n,t,r){var e=[null];e.push.apply(e,t);var o=new(Function.bind.apply(n,e));return r&&i(o,r.prototype),o}).apply(null,arguments)}function a(n){var t="function"==typeof Map?new Map:void 0;return(a=function(n){if(null===n||-1===Function.toString.call(n).indexOf("[native code]"))return n;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return c(n,arguments,o(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,t:!1,o:!0,i:!0}}),i(r,n)})(n)}function f(n,t){if(null==n)return{};var r,e,o={},i=Object.keys(n);for(e=0;e<i.length;e++)t.indexOf(r=i[e])>=0||(o[r]=n[r]);return o}function s(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function l(n,t){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return s(n,void 0);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(n,void 0):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}function p(n,t){return n(t={u:{}},t.u),t.u
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */}var y="function"==typeof Symbol&&Symbol.for,v=y?Symbol.for("react.element"):60103,d=y?Symbol.for("react.portal"):60106,h=y?Symbol.for("react.fragment"):60107,m=y?Symbol.for("react.strict_mode"):60108,b=y?Symbol.for("react.profiler"):60114,w=y?Symbol.for("react.provider"):60109,S=y?Symbol.for("react.context"):60110,g=y?Symbol.for("react.async_mode"):60111,x=y?Symbol.for("react.concurrent_mode"):60111,O=y?Symbol.for("react.forward_ref"):60112,j=y?Symbol.for("react.suspense"):60113,I=y?Symbol.for("react.suspense_list"):60120,P=y?Symbol.for("react.memo"):60115,E=y?Symbol.for("react.lazy"):60116,T=y?Symbol.for("react.block"):60121,k=y?Symbol.for("react.fundamental"):60117,A=y?Symbol.for("react.responder"):60118,R=y?Symbol.for("react.scope"):60119;function C(n){if("object"==typeof n&&null!==n){var t=n.s;switch(t){case v:switch(n=n.type){case g:case x:case h:case b:case m:case j:return n;default:switch(n=n&&n.s){case S:case O:case E:case P:case w:return n;default:return t}}case d:return t}}}function _(n){return C(n)===x}var M={l:g,p:x,v:S,h:w,Element:v,m:O,S:h,g:E,O:P,j:d,I:b,P:m,T:j,k:function(n){return _(n)||C(n)===g},A:_,R:function(n){return C(n)===S},C:function(n){return C(n)===w},_:function(n){return"object"==typeof n&&null!==n&&n.s===v},M:function(n){return C(n)===O},F:function(n){return C(n)===h},B:function(n){return C(n)===E},V:function(n){return C(n)===P},q:function(n){return C(n)===d},D:function(n){return C(n)===b},N:function(n){return C(n)===m},U:function(n){return C(n)===j},W:function(n){return"string"==typeof n||"function"==typeof n||n===h||n===x||n===b||n===m||n===j||n===I||"object"==typeof n&&null!==n&&(n.s===E||n.s===P||n.s===w||n.s===S||n.s===O||n.s===k||n.s===A||n.s===R||n.s===T)},L:C},F=p(function(n,t){"production"!==process.env.NODE_ENV&&function(){var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,e=n?Symbol.for("react.portal"):60106,o=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,s=n?Symbol.for("react.concurrent_mode"):60111,l=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,v=n?Symbol.for("react.memo"):60115,d=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,m=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function S(n){if("object"==typeof n&&null!==n){var t=n.s;switch(t){case r:var y=n.type;switch(y){case f:case s:case o:case u:case i:case p:return y;default:var h=y&&y.s;switch(h){case a:case l:case d:case v:case c:return h;default:return t}}case e:return t}}}var g=s,x=a,O=c,j=r,I=l,P=o,E=d,T=v,k=e,A=u,R=i,C=p,_=!1;function M(n){return S(n)===s}t.l=f,t.p=g,t.v=x,t.h=O,t.Element=j,t.m=I,t.S=P,t.g=E,t.O=T,t.j=k,t.I=A,t.P=R,t.T=C,t.k=function(n){return _||(_=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(n)||S(n)===f},t.A=M,t.R=function(n){return S(n)===a},t.C=function(n){return S(n)===c},t._=function(n){return"object"==typeof n&&null!==n&&n.s===r},t.M=function(n){return S(n)===l},t.F=function(n){return S(n)===o},t.B=function(n){return S(n)===d},t.V=function(n){return S(n)===v},t.q=function(n){return S(n)===e},t.D=function(n){return S(n)===u},t.N=function(n){return S(n)===i},t.U=function(n){return S(n)===p},t.W=function(n){return"string"==typeof n||"function"==typeof n||n===o||n===s||n===u||n===i||n===p||n===y||"object"==typeof n&&null!==n&&(n.s===d||n.s===v||n.s===c||n.s===a||n.s===l||n.s===m||n.s===b||n.s===w||n.s===h)},t.L=S}()}),B=p(function(n){n.u="production"===process.env.NODE_ENV?M:F}),V=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function D(n){if(null==n)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}var N=function(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de","5"===Object.getOwnPropertyNames(n)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(n){return t[n]}).join(""))return!1;var e={};return"abcdefghijklmnopqrst".split("").forEach(function(n){e[n]=n}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},e)).join("")}catch(n){return!1}}()?Object.assign:function(n,t){for(var r,e,o=D(n),i=1;i<arguments.length;i++){for(var u in r=Object(arguments[i]))q.call(r,u)&&(o[u]=r[u]);if(V){e=V(r);for(var c=0;c<e.length;c++)z.call(r,e[c])&&(o[e[c]]=r[e[c]])}}return o},U="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",W=function(){};if("production"!==process.env.NODE_ENV){var L=U,J={},Y=Function.call.bind(Object.prototype.hasOwnProperty);W=function(n){var t="Warning: "+n;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}}}function H(n,t,r,e,o){if("production"!==process.env.NODE_ENV)for(var i in n)if(Y(n,i)){var u;try{if("function"!=typeof n[i]){var c=Error((e||"React class")+": "+r+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[i]+"`.");throw c.name="Invariant Violation",c}u=n[i](t,i,e,r,null,L)}catch(n){u=n}if(!u||u instanceof Error||W((e||"React class")+": type specification of "+r+" `"+i+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof u+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),u instanceof Error&&!(u.message in J)){J[u.message]=!0;var a=o?o():"";W("Failed "+r+" type: "+u.message+(null!=a?a:""))}}}H.J=function(){"production"!==process.env.NODE_ENV&&(J={})};var $=H,G=Function.call.bind(Object.prototype.hasOwnProperty),K=function(){};function Q(){return null}function X(){}function Z(){}"production"!==process.env.NODE_ENV&&(K=function(n){var t="Warning: "+n;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(n){}}),Z.J=X;var nn=p(function(n){n.u="production"!==process.env.NODE_ENV?function(n,t){var r="function"==typeof Symbol&&Symbol.iterator,e={Y:c("array"),H:c("boolean"),$:c("function"),number:c("number"),object:c("object"),G:c("string"),K:c("symbol"),any:u(Q),X:function(n){return u(function(t,r,e,o,u){if("function"!=typeof n)return new i("Property `"+u+"` of component `"+e+"` has invalid PropType notation inside arrayOf.");var c=t[r];if(!Array.isArray(c))return new i("Invalid "+o+" `"+u+"` of type `"+f(c)+"` supplied to `"+e+"`, expected an array.");for(var a=0;a<c.length;a++){var s=n(c,a,e,o,u+"["+a+"]",U);if(s instanceof Error)return s}return null})},Z:u(function(t,r,e,o,u){var c=t[r];return n(c)?null:new i("Invalid "+o+" `"+u+"` of type `"+f(c)+"` supplied to `"+e+"`, expected a single ReactElement.")}),nn:u(function(n,t,r,e,o){var u=n[t];return B.W(u)?null:new i("Invalid "+e+" `"+o+"` of type `"+f(u)+"` supplied to `"+r+"`, expected a single ReactElement type.")}),tn:function(n){return u(function(t,r,e,o,u){var c;return t[r]instanceof n?null:new i("Invalid "+o+" `"+u+"` of type `"+((c=t[r]).constructor&&c.constructor.name?c.constructor.name:"<<anonymous>>")+"` supplied to `"+e+"`, expected instance of `"+(n.name||"<<anonymous>>")+"`.")})},rn:u(function(n,t,r,e,o){return a(n[t])?null:new i("Invalid "+e+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")}),en:function(n){return u(function(t,r,e,o,u){if("function"!=typeof n)return new i("Property `"+u+"` of component `"+e+"` has invalid PropType notation inside objectOf.");var c=t[r],a=f(c);if("object"!==a)return new i("Invalid "+o+" `"+u+"` of type `"+a+"` supplied to `"+e+"`, expected an object.");for(var s in c)if(G(c,s)){var l=n(c,s,e,o,u+"."+s,U);if(l instanceof Error)return l}return null})},on:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&K(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),Q;function t(t,r,e,u,c){for(var a=t[r],f=0;f<n.length;f++)if(o(a,n[f]))return null;var l=JSON.stringify(n,function(n,t){return"symbol"===s(t)?String(t):t});return new i("Invalid "+u+" `"+c+"` of value `"+String(a)+"` supplied to `"+e+"`, expected one of "+l+".")}return u(t)},in:function(n){if(!Array.isArray(n))return"production"!==process.env.NODE_ENV&&K("Invalid argument supplied to oneOfType, expected an instance of array."),Q;for(var t=0;t<n.length;t++){var r=n[t];if("function"!=typeof r)return K("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+l(r)+" at index "+t+"."),Q}return u(function(t,r,e,o,u){for(var c=0;c<n.length;c++)if(null==(0,n[c])(t,r,e,o,u,U))return null;return new i("Invalid "+o+" `"+u+"` supplied to `"+e+"`.")})},shape:function(n){return u(function(t,r,e,o,u){var c=t[r],a=f(c);if("object"!==a)return new i("Invalid "+o+" `"+u+"` of type `"+a+"` supplied to `"+e+"`, expected `object`.");for(var s in n){var l=n[s];if(l){var p=l(c,s,e,o,u+"."+s,U);if(p)return p}}return null})},un:function(n){return u(function(t,r,e,o,u){var c=t[r],a=f(c);if("object"!==a)return new i("Invalid "+o+" `"+u+"` of type `"+a+"` supplied to `"+e+"`, expected `object`.");var s=N({},t[r],n);for(var l in s){var p=n[l];if(!p)return new i("Invalid "+o+" `"+u+"` key `"+l+"` supplied to `"+e+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(n),null,"  "));var y=p(c,l,e,o,u+"."+l,U);if(y)return y}return null})}};function o(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function i(n){this.message=n,this.stack=""}function u(n){function t(t,r,e,o,u,c,a){if(o=o||"<<anonymous>>",c=c||e,a!==U){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}return null==r[e]?t?new i(null===r[e]?"The "+u+" `"+c+"` is marked as required in `"+o+"`, but its value is `null`.":"The "+u+" `"+c+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:n(r,e,o,u,c)}process;var r=t.bind(null,!1);return r.cn=t.bind(null,!0),r}function c(n){return u(function(t,r,e,o,u,c){var a=t[r];return f(a)!==n?new i("Invalid "+o+" `"+u+"` of type `"+s(a)+"` supplied to `"+e+"`, expected `"+n+"`."):null})}function a(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(a);if(null===t||n(t))return!0;var e=function(n){var t=n&&(r&&n[r]||n["@@iterator"]);if("function"==typeof t)return t}(t);if(!e)return!1;var o,i=e.call(t);if(e!==t.entries){for(;!(o=i.next()).done;)if(!a(o.value))return!1}else for(;!(o=i.next()).done;){var u=o.value;if(u&&!a(u[1]))return!1}return!0;default:return!1}}function f(n){var t=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":function(n,t){return"symbol"===n||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,n)?"symbol":t}function s(n){if(null==n)return""+n;var t=f(n);if("object"===t){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return t}function l(n){var t=s(n);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return i.prototype=Error.prototype,e.an=$,e.J=$.J,e.fn=e,e}(B._):function(){function n(n,t,r,e,o,i){if(i!==U){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return n}n.cn=n;var r={Y:n,H:n,$:n,number:n,object:n,G:n,K:n,any:n,X:t,Z:n,nn:n,tn:t,rn:n,en:t,on:t,in:t,shape:t,un:t,an:Z,J:X};return r.fn=r,r}()});function tn(n,t,r){var e=(t=rn(t)).split(".").filter(Boolean);if(0===e.length)return n;for(var o=0,i=e.length-1;o<i;o++){var u=e[o],c=n[u];if(c&&"object"==typeof c)n=c;else{if(null!=c)throw new Error("Invalid Path");n=n[u]={}}}var a=e[e.length-1],f=n[a];return n[a]=f=void 0!==f?f:r,f}function rn(n){return n.replace(/^\./,"").replace(/\[/g,".").replace(/]/g,"")}function en(n,t,r){var e=(t=rn(t)).split(".").filter(Boolean);if(0!==e.length){for(var o=0,i=e.length-1;o<i;o++){var u=e[o],c=n[u];if(c&&"object"==typeof c)n=c;else{if(null!=c)throw new Error("Invalid Path");n=n[u]={}}}return n[e[e.length-1]]=r,r}}const on=function(){function n(){}return n.prototype.then=function(t,r){const e=new n,o=this.sn;if(o){const n=1&o?t:r;if(n){try{un(e,1,n(this.ln))}catch(n){un(e,2,n)}return e}return this}return this.pn=function(n){try{const o=n.ln;1&n.sn?un(e,1,t?t(o):o):r?un(e,1,r(o)):un(e,2,o)}catch(n){un(e,2,n)}},e},n}();function un(n,t,r){if(!n.sn){if(r instanceof on){if(!r.sn)return void(r.pn=un.bind(null,n,t));1&t&&(t=r.sn),r=r.ln}if(r&&r.then)return void r.then(un.bind(null,n,t),un.bind(null,n,2));n.sn=t,n.ln=r;const e=n.pn;e&&e(n)}}function cn(n){return n instanceof on&&1&n.sn}const an="undefined"!=typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function fn(n,t){try{var r=n()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var sn=function(){function n(){this.children=new Map,this.yn=[],this.vn=[]}var t;return n.prototype.dn=function(t){var r;return this.children.has(t)?this.children.get(t):(this.children.set(t,r=new n),r)},(t=[{key:"all",get:function(){return this.hn=this.hn||new n}}])&&function(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.t=e.t||!1,e.i=!0,"value"in e&&(e.o=!0),Object.defineProperty(n,e.key,e)}}(n.prototype,t),n}(),ln=function(){function n(n){var t=void 0===n?{}:n,r=t.mn,e=t.bn,o=void 0===e?"*":e,i=t.wn,u=void 0===i?function(n){return n}:i,c=t.Sn,a=void 0===c?function(n){return n}:c;this.mn=void 0===r?".":r,this.bn=o,this.gn=""+o+o,this.xn=new sn,this.wn=u,this.Sn=a}var t=n.prototype;return t.On=function(n,t){for(var r=n.split(this.mn),e=this.xn,o=0,i=r.length;o<i;o++){var u=r[o];switch(u){case this.bn:e=e.all;break;case this.gn:return e.vn.push(t),void(e.vn=this.Sn(e.vn));default:e=e.dn(u)}}e.yn.push(t),e.yn=this.Sn(e.yn)},t.once=function(n,t){var r=this;r.On(n,function e(){r.jn(n,e),t.apply(void 0,arguments)})},t.jn=function(n,t){for(var r=n.split(this.mn),e=this.xn,o=0,i=r.length;o<i;o++){var u=r[o];switch(u){case this.bn:e=e.all;break;case this.gn:if(void 0===t)return void(e.vn=[]);var c=e.vn.indexOf(t);if(-1===c)return;return void e.vn.splice(c,1);default:e=e.dn(u)}}if(void 0!==t){var a=e.yn.indexOf(t);if(-1===a)return;e.yn.splice(a,1)}else e.yn=[]},t.In=function(n,t,r,e){var o,i;void 0===e&&(e=e),r>=t.length?(i=e).push.apply(i,n.yn):((o=e).push.apply(o,n.vn),this.In(n.all,t,r+1),this.In(n.dn(t[r]),t,r+1))},t.Pn=function(n,t){for(var r,e=l(n);!(r=e()).done;)r.value.apply(this,t)},t.En=function(n,t){try{var r=this,e=function(n,t,r){if("function"==typeof n[an]){var e,o,i,u=n[an]();if(function n(r){try{for(;!(e=u.next()).done;)if((r=t(e.value))&&r.then){if(!cn(r))return void r.then(n,i||(i=un.bind(null,o=new on,2)));r=r.ln}o?un(o,1,r):o=r}catch(n){un(o||(o=new on),2,n)}}(),u.Tn){var c=function(n){try{e.done||u.Tn()}catch(n){}return n};if(o&&o.then)return o.then(c,function(n){throw c(n)});c()}return o}if(!("length"in n))throw new TypeError("Object is not iterable");for(var a=[],f=0;f<n.length;f++)a.push(n[f]);return function(n,t,r){var e,o,i=-1;return function r(u){try{for(;++i<n.length;)if((u=t(i))&&u.then){if(!cn(u))return void u.then(r,o||(o=un.bind(null,e=new on,2)));u=u.ln}e?un(e,1,u):e=u}catch(n){un(e||(e=new on),2,n)}}(),e}(a,function(n){return t(a[n])})}(n,function(n){return Promise.resolve(n.apply(r,t)).then(function(){})});return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},t.kn=function(n,t){try{for(var r,e=[],o=l(n);!(r=o()).done;)e.push(Promise.resolve(r.value.apply(this,t)));return Promise.resolve(Promise.all(e)).then(function(){})}catch(n){return Promise.reject(n)}},t.An=function(n){var t=[];this.event=n;var r=n.split(this.mn);this.In(this.xn,r,0,t);for(var e=this.wn(t),o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];return this.Pn(e,i),i},t.Rn=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];try{var o=this,i=[];o.event=n;var u=n.split(o.mn);o.In(o.xn,u,0,i);var c=o.wn(i);return Promise.resolve(o.En(c,r)).then(function(){return r})}catch(n){return Promise.reject(n)}},t.Cn=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];try{var o=this,i=[];o.event=n;var u=n.split(o.mn);o.In(o.xn,u,0,i);var c=o.wn(i);return Promise.resolve(o.kn(c,r)).then(function(){return r})}catch(n){return Promise.reject(n)}},n}();ln.prototype.addEventListener=ln.prototype.On,ln.prototype.removeEventListener=ln.prototype.jn,ln.prototype.addListener=ln.prototype.On,ln.prototype.removeListener=ln.prototype.jn;var pn=new ln,yn=new WeakMap;function vn(n){return(Array.isArray(n)?n:[n]).filter(Boolean)}function dn(n,r,e){e&&(r=r.bind(e)),t._n(function(){return vn(n).forEach(function(n){return pn.On(n,r)}),function(){vn(n).forEach(function(n){return pn.jn(n,r)})}})}function hn(n){return rn(n).split(".").filter(Boolean)}var mn=new Map;function bn(n,t){var r=yn.get(n)+"."+t.join(".");if(mn.has(r))return mn.get(r);var e=[],o=t[0];e.push(""+o);for(var i=1,u=t.length;i<u;i++)e.push(o=o+"."+t[i]);return mn.set(r,e),e}function wn(n){if(n)return n.target?n.target.value:n}function Sn(n){return n}var gn=0,xn=0,On=0;function jn(n){return r.createElement(Fragment,null,n.children)}function In(n,t,r,e){pn.An(""+[].concat(t,hn(r)).filter(Boolean).join("."),e)}var Pn=Symbol("useTargetContext"),En=function(){var n=o.prototype;function o(n){this.Mn=kn,this.Fn=Tn,this.name=n,this.id=gn++,this.context=r.Bn({target:null,path:[]}),this.Mn=this.Mn.bind(this),this.Fn=this.Fn.bind(this),this.bind=this.bind.bind(this),this.Vn=this.Vn.bind(this),this.qn=this.qn.bind(this),this.zn=this.zn.bind(this)}return n[Pn]=function(){return t.Dn(this.context)},n.Nn=function(n,r){var e,o=void 0===r?{}:r,i=o.defaultValue,u=o.Un,c=void 0===u?Sn:u,a=o.Wn,f=void 0===a?Sn:a,s=o.Ln,l=void 0===s?wn:s,p=o.Jn,y=void 0===p?"value":p,v=o.event,d=void 0===v?"onChange":v,h=o.target,m=this[Pn](),b=m.path,w=t.Yn(c(tn(h=h||m.target,n,i)));dn(bn(h,[].concat(b,hn(n))),function(){w.Hn=c(tn(h,n,i)),S(On++)});var S=t.Vn(-1)[1];return(e={})[y]=w.Hn,e[d]=function(t){var r=f(l(t));en(h,n,r),In(0,b,n,r)},e},n.Vn=function(n,r,e){var o=this[Pn](),i=o.path,u=tn(e=e||o.target,n,r),c=t.Vn(-1),a=c[0],f=c[1];return dn(bn(e,[].concat(i,hn(n))),function(){f(On++)}),[u,function(t){en(e,n,t),In(0,i,n,t)},function(t){!function n(t,r,e){void 0===e&&(e=[]);for(var o=0,i=Object.entries(t);o<i.length;o++){var u=i[o],c=u[0],a=u[1];"object"==typeof a?n(a,tn(r,c,{}),[].concat(e,[c])):(en(r,c,a),In(0,e,""+c,a))}}(t,u,[].concat(i,hn(n)))},a]},n.$n=function(){for(var n=this[Pn](),r=n.target,e=n.path,o=t.Vn(-1),i=o[0],u=o[1],c=[],a=arguments.length,f=new Array(a),s=0;s<a;s++)f[s]=arguments[s];for(var p,y=l(f.flat(Infinity));!(p=y()).done;){var v=p.value;c.push.apply(c,bn(r,[].concat(e,hn(v))))}return dn(Array.from(new Set(c)),d),i;function d(){u(On++)}},n.bind=function(n){var t=this;return function(o){var i=o.state,u=void 0===i?t:i,c=f(o,["state"]);return r.createElement(u.Fn,e({},n,c))}},n.zn=function(){return this[Pn]().target},n.qn=function(){return this[Pn]().path},o}();function Tn(n){var t=n.Gn,o=void 0===t?r.createElement("input",null):t,i=n.Kn,u=n.defaultValue,c=n.Un,a=n.Wn,s=n.Ln,l=n.Jn,p=n.event,y=n.target,v=f(n,["component","property","defaultValue","transformIn","transformOut","extract","attribute","event","target"]),d=o&&o.type||jn,h=o&&o.Qn||{},m=this.Nn(i,{defaultValue:u,Un:c,Wn:a,Ln:s,Jn:l,event:p,target:y});return r.createElement(d,e({},m,h,v))}function kn(n){var t=n.target,e=n.Kn,o=void 0===e?"":e,i=n.Xn,u=void 0===i?function(){}:i,c=n.children,a=this,f=this[Pn](),s=f.target,l=f.path;t&&!yn.has(t)?(yn.set(t,xn++),l=[""+yn.get(t)]):t?l=[""+yn.get(t)]:t=s,dn(bn(t,[].concat(l,hn(o))).map(function(n){return n+".**"}),function(){return u(t)});var p=this.Vn(o,{},t),y=p[0],v=p[3];if(Array.isArray(y))return r.createElement(d,{key:v});if("object"!=typeof y)throw new Error("You must bind to an object or an array");return r.createElement(this.context.Zn,{key:v,value:{target:y,path:[].concat(l,hn(o))}},c);function d(){for(var n=[],t=0;t<y.length;t++)n.push(r.createElement(h,{key:t,index:t}));return n}function h(n){return r.createElement(a.Mn,{Kn:o+"."+n.index},c)}}Tn.nt={Jn:nn.G,Gn:nn.object,defaultValue:nn.any,event:nn.G,Ln:nn.$,Kn:nn.G,target:nn.object,Un:nn.$,Wn:nn.$},Tn.tt={Gn:r.createElement("input",null)},kn.nt={children:nn.any,Xn:nn.$,Kn:nn.G.cn,target:nn.object},kn.tt={Xn:function(){},Kn:""};var An,Rn=(An=function(n){return n.rt||0},function(n,t){var r=An(n),e=An(t);return e>r?-1:r===e?0:1}),Cn=regeneratorRuntime.mark(Bn),_n=function(n){var t,r;function e(){return n.apply(this,arguments)||this}return r=n,(t=e).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,e}(a(Error));function Mn(n,t,r){return t.rt=r,exports.xn.On(n,t),function(){exports.xn.jn(n,t)}}function Fn(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];try{var o;(o=exports.xn).An.apply(o,[n].concat(r))}catch(n){if(n instanceof _n)return r;throw n}return r}function Bn(n){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.et=e.next){case 0:return r=function(n,r){t.push({event:n,ot:r}),exports.xn.On(n,r)},t=[],e.et=2,e.it(n(r),"t0",4);case 4:return e.et=4,t.forEach(function(n){exports.xn.jn(n.event,n.ot)}),e.finish(4);case 7:case"end":return e.stop()}},Cn,null,[[2,,4,7]])}function Vn(n){var t=n.filter,o=void 0===t?qn:t,i=n.type,u=n.children,c=f(n,["filter","type","children"]),a=Fn("ui-plug."+i,[u&&{ut:function(){return u},rt:100}],c)[0];return(a=a.filter(Boolean)).sort(Rn),Fn("ui-render-plugs."+i,a),r.createElement(Fragment,null,o(a).map(function(n,t){return r.createElement(n.ut,e({key:t},c))}))}function qn(n){return n}window.Framework=window.Framework||{},exports.xn=new ln({Sn:function(n){return n.sort(Rn)}}),Vn.nt={filter:nn.$,type:nn.G.cn},exports.Events=ln,exports.Socket=Vn,exports.bestOnly=function(n){return n[0]},exports.createState=function(n){return new En(n)},exports.ensureArray=function(n){return Array.isArray(n)?n:[n].filter(function(n){return void 0!==n})},exports.handle=Mn,exports.lessThan=function(n){return function(t){return t.length<2?t:t.filter(function(t){return t.rt<n})}},exports.once=function(n,t,r,e){return void 0===e&&(e=0),t.rt=r,exports.xn.once(n,t),e&&setTimeout(o,e),o;function o(){exports.xn.jn(n,t)}},exports.plug=function(n,t,r,e){void 0===e&&(e=0),"number"==typeof r?(e=r,r=t,t=function(){return e}):void 0===r&&(r=t,t=function(){return e}),Mn("ui-plug."+n,function(n,e){var o=t(e,n);o&&n.push({ut:r,rt:o})})},exports.raise=Fn,exports.raiseAsync=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];try{var o=!1,i=fn(function(){var t;return Promise.resolve((t=exports.xn).Rn.apply(t,[n].concat(r))).then(function(){})},function(n){if(n instanceof _n)return o=!0,r;throw n});return Promise.resolve(i&&i.then?i.then(function(n){return o?n:r}):o?i:r)}catch(n){return Promise.reject(n)}},exports.raiseLater=function(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];setTimeout(function(){return Fn.apply(void 0,[n].concat(r))})},exports.setEventSource=function(n){exports.xn=n},exports.stopPropagationAndExit=function(){throw new _n},exports.useEvent=function(n,t,e){r._n(function(){return Mn(n,t,e)})},exports.using=Bn;
//# sourceMappingURL=index.js.map
