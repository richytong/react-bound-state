/*! For license information please see main.42b934c8.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-bound-state-example"]=this["webpackJsonpreact-bound-state-example"]||[]).push([[0],{84:function(e,t,r){e.exports=r(98)},85:function(e,t,r){},98:function(e,t,r){"use strict";r.r(t);r(85);var n=r(1),a=r.n(n),o=r(13),i=r.n(o);r(50);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function d(e,t){return e(t={exports:{}},t.exports),t.exports}var p="function"===typeof Symbol&&Symbol.for,h=p?Symbol.for("react.element"):60103,m=p?Symbol.for("react.portal"):60106,y=p?Symbol.for("react.fragment"):60107,v=p?Symbol.for("react.strict_mode"):60108,b=p?Symbol.for("react.profiler"):60114,g=p?Symbol.for("react.provider"):60109,E=p?Symbol.for("react.context"):60110,w=p?Symbol.for("react.async_mode"):60111,O=p?Symbol.for("react.concurrent_mode"):60111,S=p?Symbol.for("react.forward_ref"):60112,j=p?Symbol.for("react.suspense"):60113,k=p?Symbol.for("react.suspense_list"):60120,x=p?Symbol.for("react.memo"):60115,C=p?Symbol.for("react.lazy"):60116,P=p?Symbol.for("react.block"):60121,B=p?Symbol.for("react.fundamental"):60117,A=p?Symbol.for("react.responder"):60118,I=p?Symbol.for("react.scope"):60119;function T(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case h:switch(e=e.type){case w:case O:case y:case b:case v:case j:return e;default:switch(e=e&&e.$$typeof){case E:case S:case C:case x:case g:return e;default:return t}}case m:return t}}}function _(e){return T(e)===O}var $={AsyncMode:w,ConcurrentMode:O,ContextConsumer:E,ContextProvider:g,Element:h,ForwardRef:S,Fragment:y,Lazy:C,Memo:x,Portal:m,Profiler:b,StrictMode:v,Suspense:j,isAsyncMode:function(e){return _(e)||T(e)===w},isConcurrentMode:_,isContextConsumer:function(e){return T(e)===E},isContextProvider:function(e){return T(e)===g},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===h},isForwardRef:function(e){return T(e)===S},isFragment:function(e){return T(e)===y},isLazy:function(e){return T(e)===C},isMemo:function(e){return T(e)===x},isPortal:function(e){return T(e)===m},isProfiler:function(e){return T(e)===b},isStrictMode:function(e){return T(e)===v},isSuspense:function(e){return T(e)===j},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===y||e===O||e===b||e===v||e===j||e===k||"object"===typeof e&&null!==e&&(e.$$typeof===C||e.$$typeof===x||e.$$typeof===g||e.$$typeof===E||e.$$typeof===S||e.$$typeof===B||e.$$typeof===A||e.$$typeof===I||e.$$typeof===P)},typeOf:T},R=(d((function(e,t){0})),d((function(e){e.exports=$})),Object.getOwnPropertySymbols),N=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;function W(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}})()&&Object.assign;var M="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function L(e,t,r,n,a){}L.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function J(){}function F(){}F.resetWarningCache=J;var V=d((function(e){e.exports=function(){function e(e,t,r,n,a,o){if(o!==M){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:F,resetWarningCache:J};return r.PropTypes=r,r}()}));function z(e,t,r){var n=(t=q(t)).split(".").filter(Boolean);if(0===n.length)return e;for(var a=0,o=n.length-1;a<o;a++){var i=n[a],c=e[i];if(c&&"object"===typeof c)e=c;else{if(void 0!==c&&null!==c)throw new Error("Invalid Path");e=e[i]={}}}var l=n[n.length-1],u=e[l];return u=void 0!==u?u:r,e[l]=u,u}function q(e){return e.replace(/^\./,"").replace(/\[/g,".").replace(/]/g,"")}function D(e,t,r){var n=(t=q(t)).split(".").filter(Boolean);if(0!==n.length){for(var a=0,o=n.length-1;a<o;a++){var i=n[a],c=e[i];if(c&&"object"===typeof c)e=c;else{if(void 0!==c&&null!==c)throw new Error("Invalid Path");e=e[i]={}}}return e[n[n.length-1]]=r,r}}var U=function(){function e(){}return e.prototype.then=function(t,r){var n=new e,a=this.s;if(a){var o=1&a?t:r;if(o){try{G(n,1,o(this.v))}catch(y){G(n,2,y)}return n}return this}return this.o=function(e){try{var a=e.v;1&e.s?G(n,1,t?t(a):a):r?G(n,1,r(a)):G(n,2,a)}catch(y){G(n,2,y)}},n},e}();function G(e,t,r){if(!e.s){if(r instanceof U){if(!r.s)return void(r.o=G.bind(null,e,t));1&t&&(t=r.s),r=r.v}if(r&&r.then)return void r.then(G.bind(null,e,t),G.bind(null,e,2));e.s=t,e.v=r;var n=e.o;n&&n(e)}}function Y(e){return e instanceof U&&1&e.s}var K="undefined"!==typeof Symbol?Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")):"@@iterator";function Q(e,t,r){if("function"===typeof e[K]){var n,a,o,i=e[K]();if(function e(c){try{for(;!(n=i.next()).done&&(!r||!r());)if((c=t(n.value))&&c.then){if(!Y(c))return void c.then(e,o||(o=G.bind(null,a=new U,2)));c=c.v}a?G(a,1,c):a=c}catch(y){G(a||(a=new U),2,y)}}(),i.return){var c=function(e){try{n.done||i.return()}catch(y){}return e};if(a&&a.then)return a.then(c,(function(e){throw c(e)}));c()}return a}if(!("length"in e))throw new TypeError("Object is not iterable");for(var l=[],u=0;u<e.length;u++)l.push(e[u]);return function(e,t,r){var n,a,o=-1;return function i(c){try{for(;++o<e.length&&(!r||!r());)if((c=t(o))&&c.then){if(!Y(c))return void c.then(i,a||(a=G.bind(null,n=new U,2)));c=c.v}n?G(n,1,c):n=c}catch(y){G(n||(n=new U),2,y)}}(),n}(l,(function(e){return t(l[e])}),r)}"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var X=function(){function e(){this.children=new Map,this.handlers=[],this.allBelow=[]}var t,r,n;return e.prototype.getChild=function(t){var r;return this.children.has(t)?this.children.get(t):(this.children.set(t,r=new e),r)},t=e,(r=[{key:"all",get:function(){return this._all=this._all||new e}}])&&c(t.prototype,r),n&&c(t,n),e}();function Z(e){if("string"===typeof name)return e.split(",");if(Array.isArray(e))return e.map((function(e){return e.split(",")})).flat(1/0);throw new Error("Invalid pattern"+e)}var ee=function(){function e(e){var t=void 0===e?{}:e,r=t.delimiter,n=void 0===r?".":r,a=t.wildcard,o=void 0===a?"*":a,i=t.prepareHandlers,c=void 0===i?function(e){return e}:i,l=t.storeHandlers,u=void 0===l?function(e){return e}:l;this.delimiter=n,this.wildcard=o,this.doubleWild=""+o+o,this.events=new X,this.prepareHandlers=c,this.storeHandlers=u}var t=e.prototype;return t.on=function(e,t){for(var r,n=f(Z(e));!(r=n()).done;){for(var a=r.value.split(this.delimiter),o=this.events,i=0,c=a.length;i<c;i++){var l=a[i];switch(l){case this.wildcard:o=o.all;break;case this.doubleWild:return o.allBelow.push(t),void(o.allBelow=this.storeHandlers(o.allBelow));default:o=o.getChild(l)}}o.handlers.push(t),o.handlers=this.storeHandlers(o.handlers)}},t.once=function(e,t){var r=this;r.on(e,(function n(){r.off(e,n),t.apply(void 0,arguments)}))},t.off=function(e,t){for(var r,n=f(Z(e));!(r=n()).done;){for(var a=r.value.split(this.delimiter),o=this.events,i=0,c=a.length;i<c;i++){var l=a[i];switch(l){case this.wildcard:o=o.all;break;case this.doubleWild:if(void 0===t)return void(o.allBelow=[]);var u=o.allBelow.indexOf(t);if(-1===u)return;return void o.allBelow.splice(u,1);default:o=o.getChild(l)}}if(void 0!==t){var s=o.handlers.indexOf(t);if(-1===s)return;o.handlers.splice(s,1)}else o.handlers=[]}},t._emit=function(e,t,r,n){r>=t.length?n.push.apply(n,e.handlers):(n.push.apply(n,e.allBelow),this._emit(e.all,t,r+1,n),this._emit(e.getChild(t[r]),t,r+1,n))},t._callHandlers=function(e,t){for(var r,n=f(e);!(r=n()).done;){r.value.apply(this,t)}},t._callHandlersAsync=function(e,t){try{var r=this,n=Q(e,(function(e){return Promise.resolve(e.apply(r,t)).then((function(){}))}));return Promise.resolve(n&&n.then?n.then((function(){})):void 0)}catch(y){return Promise.reject(y)}},t._callHandlersAsyncAtOnce=function(e,t){try{for(var r,n=[],a=f(e);!(r=a()).done;){var o=r.value;n.push(Promise.resolve(o.apply(this,t)))}return Promise.resolve(Promise.all(n)).then((function(){}))}catch(y){return Promise.reject(y)}},t.emit=function(e){var t=[];this.event=e;var r=e.split(this.delimiter);this._emit(this.events,r,0,t);for(var n=this.prepareHandlers(t),a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return this._callHandlers(n,o),o},t.emitAsync=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];try{var a=this,o=[];a.event=e;var i=e.split(a.delimiter);a._emit(a.events,i,0,o);var c=a.prepareHandlers(o);return Promise.resolve(a._callHandlersAsync(c,r)).then((function(){return r}))}catch(y){return Promise.reject(y)}},t.emitAtOnce=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];try{var a=this,o=[];a.event=e;var i=e.split(a.delimiter);a._emit(a.events,i,0,o);var c=a.prepareHandlers(o);return Promise.resolve(a._callHandlersAsyncAtOnce(c,r)).then((function(){return r}))}catch(y){return Promise.reject(y)}},e}();ee.prototype.addEventListener=ee.prototype.on,ee.prototype.removeEventListener=ee.prototype.off,ee.prototype.addListener=ee.prototype.on,ee.prototype.removeListener=ee.prototype.off;var te=new ee,re=new WeakMap;function ne(e){return(Array.isArray(e)?e:[e]).filter(Boolean)}function ae(e,t,r){r&&(t=t.bind(r)),Object(n.useEffect)((function(){return ne(e).forEach((function(e){return te.on(e,t)})),function(){ne(e).forEach((function(e){return te.off(e,t)}))}}),[e])}function oe(e){return q(e).split(".").filter(Boolean)}var ie=new Map;function ce(e,t){var r=""+re.get(e)+"."+t.join(".");if(ie.has(r))return ie.get(r);var n=[],a=t[0];n.push(""+a);for(var o=1,i=t.length;o<i;o++)a=a+"."+t[o],n.push(a);return ie.set(r,n),n}function le(e){if(e)return e.target?e.target.value:e}function ue(e){return e}var se=0,fe=0,de=0,pe=a.a.createContext(0);function he(e){var t=e.children;return a.a.createElement(Fragment,null,t)}function me(){}function ye(e){return new Ee(e)}function ve(e,t,r,n){te.emit(""+[].concat(t,oe(r)).filter(Boolean).join("."),n)}function be(e,t,r,n){for(var a=0;a<e.length&&a<n.length-1&&"^"===e[a];a++){var o=n[n.length-2-a];t=o.target,r=o.path}return[e.replace(/^\^*/g,""),t,r]}me.refresh=me;var ge=Symbol("useTargetContext"),Ee=function(){var e=t.prototype;function t(e){this.Bind=Se,this.Bound=we,this.name=e,this.id=se++,this.context=a.a.createContext({target:null,path:[],stack:[]}),this.Bind=this.Bind.bind(this),this.Bound=this.Bound.bind(this),this.bind=this.bind.bind(this),this.useState=this.useState.bind(this),this.useCurrentPath=this.useCurrentPath.bind(this),this.useCurrentTarget=this.useCurrentTarget.bind(this)}return e[ge]=function(){return Object(n.useContext)(this.context)},e.useBinding=function(e,t){var r,o=void 0===t?{}:t,i=o.defaultValue,c=o.transformIn,l=void 0===c?ue:c,u=o.transformOut,s=void 0===u?ue:u,f=o.updateOnBlur,d=o.extract,p=void 0===d?le:d,h=o.onChange,m=void 0===h?me:h,y=o.attribute,v=void 0===y?"value":y,b=o.event,g=void 0===b?"onChange":b,E=o.blurEvent,w=void 0===E?"onBlur":E,O=o.target,S=Object(n.useRef)(!1),j=this[ge](),k=j.target,x=j.path,C=j.stack,P=be(e,O=O||k,x,C);e=P[0],O=P[1],x=P[2];var B=Object(n.useRef)(l(z(O,e,i))),A=a.a.useState(B.current),I=A[0],T=A[1];ae(ce(O,[].concat(x,oe(e),["**"])),(function(){var t=l(z(O,e,i));t!==B.current&&(B.current=t,$.current(B.current));$.current.refresh(fe++)}));var _=Object(n.useState)(-1)[1],$=Object(n.useRef)();return a.a.useEffect((function(){return function(){$.current=me}}),[]),T.refresh=_,$.current=T,(r={})[v]=I,r[g]=function(){var t=p.apply(void 0,arguments),r=s(t);f?(B.current=r,S.current=!0,$.current(t)):(D(O,e,r),m(r),ve(0,x,e,r))},r[w]=function(){S.current&&(S.current=!1,D(O,e,B.current),m(B.current),ve(0,x,e,B.current))},r},e.useState=function(e,t,r){void 0===e&&(e="");var o=this[ge](),i=o.target,c=o.path,l=o.stack,u=be(e,r=r||i,c,l);e=u[0],r=u[1],c=u[2];var s=z(r,e,t),f=Object(n.useState)(-1),d=f[0],p=f[1],h=Object(n.useRef)();return a.a.useEffect((function(){return function(){h.current=me}}),[]),h.current=p,ae(ce(r,[].concat(c,oe(e))),(function(){h.current(de++)})),m.set=function(t){Oe(t,s,[].concat(c,oe(e)))},[s,m,d];function m(n){"function"===typeof n&&(n=n(z(r,e,t))),D(r,e,n),ve(0,c,e,n)}},e.useSetter=function(e,t){void 0===e&&(e="");var r=this[ge](),n=r.target,a=r.path,o=r.stack,i=be(e,t=t||n,a,o);return e=i[0],t=i[1],a=i[2],c.set=function(r){Oe(r,z(t,e,{}),[].concat(a,oe(e)))},c;function c(r){"function"===typeof r&&(r=r(z(t,e))),D(t,e,r),ve(0,a,e,r)}},e.useRefresh=function(){var e=this[ge](),t=e.target,r=e.path,o=Object(n.useState)(-1),i=o[0],c=o[1],l=Object(n.useRef)();l.current=c,a.a.useEffect((function(){return function(){l.current=me}}),[]);for(var u=[],s=arguments.length,d=new Array(s),p=0;p<s;p++)d[p]=arguments[p];for(var h,m=f(d.flat(1/0));!(h=m()).done;){var y=h.value;u.push.apply(u,ce(t,[].concat(r,oe(y))))}return ae(Array.from(new Set(u)),v),i;function v(){l.current(de++)}},e.bind=function(e){var t=this;return function(r){var n=r.state,o=void 0===n?t:n,i=u(r,["state"]);return a.a.createElement(o.Bound,l({},e,i))}},e.useCurrentTarget=function(){return this[ge]().target},e.useCurrentPath=function(){return this[ge]().path},t}();function we(e){var t=e.component,r=void 0===t?a.a.createElement("input",null):t,n=e.property,o=e.defaultValue,i=e.transformIn,c=e.transformOut,s=e.extract,f=e.attribute,d=e.updateOnBlur,p=e.blurEvent,h=e.event,m=e.target,y=u(e,["component","property","defaultValue","transformIn","transformOut","extract","attribute","updateOnBlur","blurEvent","event","target"]),v=r&&r.type||he,b=r&&r.props||{},g=this.useBinding(n,{defaultValue:o,transformIn:i,transformOut:c,extract:s,attribute:f,event:h,target:m,blurEvent:p,updateOnBlur:d});return a.a.createElement(v,l({},g,b,y))}function Oe(e,t,r){void 0===r&&(r=[]);for(var n=0,a=Object.entries(e);n<a.length;n++){var o=a[n],i=o[0],c=o[1];"object"!==typeof c||Array.isArray(c)?(D(t,i,c),ve(0,r,""+i,c)):Oe(c,z(t,i,{}),[].concat(r,[i]))}}function Se(e){var t=e.target,r=e.property,o=void 0===r?"":r,i=e.onChange,c=void 0===i?function(){}:i,l=e.children,u=this,s=a.a.useRef(de++),f=this[ge](),d=f.target,p=f.path,h=f.stack;t&&!re.has(t)?(re.set(t,fe++),p=[""+re.get(t)]):t?p=[""+re.get(t)]:t=d;var m=a.a.useState(t),y=m[0],v=m[1],b=Object(n.useRef)();b.current=v,a.a.useEffect((function(){return function(){b.current=me}}),[]),ae(""+re.get(y),(function(e){re.set(e,re.get(t)),s.current=de++,b.current(e)}));var g=[].concat(p,oe(o));ae(ce(y,g).map((function(e){return e+".**"})),(function(){return c(y)}));var E=this.useState(o,{},y),w=E[0],O=E[3];if(Array.isArray(w))return a.a.createElement(S,{key:O});if("object"!==typeof w)throw new Error("You must bind to an object or an array");return a.a.createElement(this.context.Provider,{key:O+":"+s.current,value:{target:w,path:g,stack:[].concat(h,[{target:w,path:g}])}},l);function S(){for(var e=[],t=0;t<w.length;t++)e.push(a.a.createElement(j,{key:t,index:t}));return e}function j(e){var t=e.index;return a.a.createElement(pe.Provider,{value:t},a.a.createElement(u.Bind,{property:o+"."+t},l))}}we.propTypes={attribute:V.string,blurEvent:V.any,component:V.object,defaultValue:V.any,event:V.string,extract:V.func,property:V.string,target:V.object,transformIn:V.func,transformOut:V.func,updateOnBlur:V.any},we.defaultProps={component:a.a.createElement("input",null)},Se.propTypes={children:V.any,onChange:V.func,property:V.string.isRequired,target:V.object},Se.defaultProps={onChange:function(){},property:""};var je,ke=(je=function(e){return e.priority||0},function(e,t){var r=je(e),n=je(t);return n>r?-1:r===n?0:1});window.Framework=window.Framework||{},new ee({storeHandlers:function(e){return e.sort(ke)}});V.func,V.string.isRequired;var xe=ye("global"),Ce=ye("style"),Pe=r(66),Be=r(154),Ae=r(147),Ie=r(152),Te=r(153),_e=r(155),$e=r(148),Re=r(149),Ne=r(150),He=r(151),We=r(145),Me=r(47),Le=r(141),Je=r(67),Fe=r(64),Ve=r.n(Fe),ze=r(146),qe=r(156),De=r(137),Ue=r(18),Ge=r(68),Ye=r(51),Ke=r(136),Qe=r(142),Xe=r(138),Ze=r(139),et=r(157),tt=r(143),rt=r(133),nt=r(140),at=Object(Ye.a)(rt.a),ot=Object(Ye.b)(Ke.a);function it(){console.log("draw Todos");var e=xe.useSetter("todos");return a.a.createElement(_e.a,null,a.a.createElement(_e.a,{ml:2},a.a.createElement(Me.a,{variant:"h6",component:"h1",gutterBottom:!0},"Todo List")),a.a.createElement(_e.a,{width:1,clone:!0},a.a.createElement(at,{distance:4,onSortEnd:function(t){var r=t.oldIndex,n=t.newIndex;e((function(e){return function(e,t,r){if(r>=e.length)for(var n=r-e.length;1+n--;)e.push(void 0);return e.splice(r,0,e.splice(t,1)[0]),e}(e,r,n)}))},component:"div",helperClass:"dragger"},a.a.createElement(vt,{property:"todos"},a.a.createElement(ct,null)))),a.a.createElement(_e.a,{mt:2},a.a.createElement(De.a,{color:"primary",onClick:function(){var t=prompt("What must you do?","");t&&e((function(e){return[].concat(Object(Ge.a)(e),[{title:t,description:"",done:!1}])}))}},"+ Add Todo")))}function ct(){var e=bt("title"),t=Object(Ue.a)(e,2),r=t[0],o=t[1],i=bt("done",!1),c=Object(Ue.a)(i,1)[0],l=bt("^todos"),u=Object(Ue.a)(l,2),s=u[0],f=u[1],d=bt(),p=Object(Ue.a)(d,1)[0],h=Object(n.useContext)(pe),m=Ce.useState("style.fontWeight"),y=Object(Ue.a)(m,1)[0];return a.a.createElement(ot,{index:h,component:"div"},a.a.createElement(Xe.a,{className:"full-width",variant:"outlined"},a.a.createElement(Ze.a,{avatar:a.a.createElement(nt.a,null),title:a.a.createElement("span",{style:{fontWeight:y,textDecoration:c?"line-through":""}},r),action:a.a.createElement(xe.Bound,{property:"done",component:a.a.createElement(et.a,{color:"primary"}),attribute:"checked",extract:function(e){return e.target.checked}})}),a.a.createElement(Qe.a,null,a.a.createElement(gt,{label:"Notes",multiline:!0,property:"description"})),a.a.createElement(tt.a,null,a.a.createElement(De.a,{color:"primary",onClick:function(){var e=prompt("Enter description",r);e&&o(e)}},"Rename"),a.a.createElement(De.a,{color:"secondary",onClick:function(){f(s.filter((function(e){return e!==p})))}},"Delete"))))}var lt={profile:{name:"Mike Talbot",location:"Bristol"},description:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.",todos:[{title:"I must do this",description:"Or I'll get in trouble with the missus",done:!1},{title:"I actually did do this",description:"Phew",done:!0}]};var ut=r(37);function st(){var e=bt("description"),t=Object(Ue.a)(e,1)[0],r=Ce.useState("color"),n=Object(Ue.a)(r,1)[0];return console.log("draw Description"),a.a.createElement(_e.a,null,a.a.createElement(_e.a,{p:2,color:n},t),a.a.createElement(Et,{property:"color",defaultValue:"red",options:["red","darkred","blue","green","darkgreen"]}))}function ft(){var e=wt(),t=bt("name"),r=Object(Ue.a)(t,1)[0],n=bt("location"),o=Object(Ue.a)(n,1)[0];return console.log("draw Profile"),a.a.createElement(Xe.a,null,a.a.createElement(Ze.a,{title:"Profile",action:a.a.createElement(dt,null)}),a.a.createElement(Qe.a,null,a.a.createElement(_e.a,{mt:1,className:e.name},r),a.a.createElement(_e.a,{mt:1,className:e.location},o)))}function dt(){var e=Ce.useState("color"),t=Object(Ue.a)(e,1)[0],r=Ce.useBinding("style",{attribute:"style"});return console.log("draw Bubble"),a.a.createElement(_e.a,{style:Object(ut.a)({},r.style),m:1,borderRadius:"100%",bgcolor:t,width:32,height:32},"Pr")}var pt=Object(Pe.a)({palette:{primary:Ve.a}}),ht=JSON.parse(localStorage.getItem("store")||JSON.stringify(lt)),mt={color:"blue",style:{fontSize:22,color:"white",fontWeight:200,textAlign:"center",textShadow:"",boxShadow:""}},yt=JSON.parse(JSON.stringify(mt)),vt=xe.Bind,bt=xe.useState,gt=xe.bind({component:a.a.createElement(Be.a,{variant:"outlined",fullWidth:!0})}),Et=Ce.bind({extract:function(e,t){return t},component:a.a.createElement(qe.a,{options:[],fullWidth:!0,renderInput:function(e){return a.a.createElement(Be.a,Object.assign({},e,{label:"Combo box",variant:"outlined"}))}})}),wt=Object(We.a)((function(e){return{icon:{fontSize:"250%",marginRight:e.spacing(2)},topBar:{cursor:"pointer"},githubIcon:{color:"white"},name:{fontSize:"120%"},location:{fontWeight:"bold"}}})),Ot=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=0;return function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];clearTimeout(r),r=setTimeout((function(){return e.apply(void 0,a)}),t)}}((function(e){localStorage.setItem("store",JSON.stringify(e))}));function St(){var e=Ce.useSetter(),t=xe.useSetter(),r=Ce.useSetter("style").set,n=Ce.useSetter("style.color"),o=Ce.useSetter("style.fontWeight");return console.log("draw Example"),a.a.createElement(Te.a,{container:!0,spacing:2},a.a.createElement(Te.a,{item:!0,md:5},a.a.createElement(_e.a,{mt:2},a.a.createElement(gt,{property:"profile.name",label:"Name"})),a.a.createElement(_e.a,{mt:2},a.a.createElement(gt,{property:"profile.location",label:"Location"})),a.a.createElement(_e.a,{mt:2},a.a.createElement(gt,{updateOnBlur:!0,multiline:!0,property:"description",label:"Description"})),a.a.createElement(_e.a,{mt:2},a.a.createElement(Et,{getOptionLabel:function(e){return function(e){return e?e.split(" ").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()})).join(" "):""}(e)},property:"color",defaultValue:"red",options:["red","darkred","blue","green","darkgreen"]})),a.a.createElement(_e.a,{mt:2,display:"flex"},a.a.createElement(_e.a,{mr:2},a.a.createElement(De.a,{variant:"contained",color:"primary",onClick:function(){n("rgb(".concat(~~(255*Math.random()),", ").concat(~~(255*Math.random()),", ").concat(~~(255*Math.random()),")"))}},"Profile color")),a.a.createElement(_e.a,{mr:2},a.a.createElement(De.a,{variant:"contained",color:"secondary",onClick:function(){o((function(e){return(e+200)%800}))}},"Font Weight")),a.a.createElement(_e.a,{mr:2},a.a.createElement(De.a,{variant:"contained",onClick:function(){r({color:"white",textShadow:"0 0 4px white",boxShadow:"0 0 12px #00000060"})}},"Change Multiple")),a.a.createElement(_e.a,{mr:2},a.a.createElement(De.a,{color:"secondary",onClick:function(){e(JSON.parse(JSON.stringify(yt))),t.set(JSON.parse(JSON.stringify(lt)))}},"Reset")))),a.a.createElement(Te.a,{item:!0,md:4},a.a.createElement(it,null)),a.a.createElement(Te.a,{item:!0,md:3},a.a.createElement(vt,{property:"profile"},a.a.createElement(ft,null)),a.a.createElement(st,null)))}var jt=function(){var e=wt();return a.a.createElement(ze.a,{theme:pt},a.a.createElement(Ce.Bind,{target:mt},a.a.createElement(vt,{onChange:Ot,target:ht},a.a.createElement(Ae.a,null),a.a.createElement($e.a,{position:"sticky",className:e.topBar},a.a.createElement(Re.a,null,a.a.createElement(Ne.a,{className:e.icon}),a.a.createElement(Me.a,{variant:"h6",color:"inherit",noWrap:!0},"REACT-BOUND-STATE"),a.a.createElement(_e.a,{flexGrow:1}),a.a.createElement(Je.a,{href:"https://github.com/miketalbot/react-bound-state","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star miketalbot/js-coroutines on GitHub"},"Star"),a.a.createElement(Le.a,{href:"https://github.com/miketalbot/react-bound-state"},a.a.createElement(He.a,{className:e.githubIcon})))),a.a.createElement(_e.a,{mt:6},a.a.createElement(Ie.a,null,a.a.createElement(St,null))))))};i.a.render(a.a.createElement(jt,null),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.42b934c8.chunk.js.map