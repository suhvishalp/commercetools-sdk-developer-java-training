var mu=Object.defineProperty;var yu=(a,r,f)=>r in a?mu(a,r,{enumerable:!0,configurable:!0,writable:!0,value:f}):a[r]=f;var Bt=(a,r,f)=>yu(a,typeof r!="symbol"?r+"":r,f);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))c(x);new MutationObserver(x=>{for(const m of x)if(m.type==="childList")for(const z of m.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&c(z)}).observe(document,{childList:!0,subtree:!0});function f(x){const m={};return x.integrity&&(m.integrity=x.integrity),x.referrerPolicy&&(m.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?m.credentials="include":x.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(x){if(x.ep)return;x.ep=!0;const m=f(x);fetch(x.href,m)}})();var Hs={exports:{}},Yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function pu(){if(xh)return Yi;xh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function f(c,x,m){var z=null;if(m!==void 0&&(z=""+m),x.key!==void 0&&(z=""+x.key),"key"in x){m={};for(var F in x)F!=="key"&&(m[F]=x[F])}else m=x;return x=m.ref,{$$typeof:a,type:c,key:z,ref:x!==void 0?x:null,props:m}}return Yi.Fragment=r,Yi.jsx=f,Yi.jsxs=f,Yi}var uh;function gu(){return uh||(uh=1,Hs.exports=pu()),Hs.exports}var h=gu(),Is={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function Fu(){if(mh)return W;mh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),z=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),D=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,et={};function kt(g,T,N){this.props=g,this.context=T,this.refs=et,this.updater=N||L}kt.prototype.isReactComponent={},kt.prototype.setState=function(g,T){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,T,"setState")},kt.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function H(){}H.prototype=kt.prototype;function _(g,T,N){this.props=g,this.context=T,this.refs=et,this.updater=N||L}var K=_.prototype=new H;K.constructor=_,G(K,kt.prototype),K.isPureReactComponent=!0;var st=Array.isArray;function $(){}var U={H:null,A:null,T:null,S:null},ct=Object.prototype.hasOwnProperty;function ht(g,T,N){var I=N.ref;return{$$typeof:a,type:g,key:T,ref:I!==void 0?I:null,props:N}}function Oe(g,T){return ht(g.type,T,g.props)}function le(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function Q(g){var T={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(N){return T[N]})}var Et=/\/+/g;function Dt(g,T){return typeof g=="object"&&g!==null&&g.key!=null?Q(""+g.key):T.toString(36)}function Kt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then($,$):(g.status="pending",g.then(function(T){g.status==="pending"&&(g.status="fulfilled",g.value=T)},function(T){g.status==="pending"&&(g.status="rejected",g.reason=T)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function E(g,T,N,I,J){var ot=typeof g;(ot==="undefined"||ot==="boolean")&&(g=null);var xt=!1;if(g===null)xt=!0;else switch(ot){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(g.$$typeof){case a:case r:xt=!0;break;case k:return xt=g._init,E(xt(g._payload),T,N,I,J)}}if(xt)return J=J(g),xt=I===""?"."+Dt(g,0):I,st(J)?(N="",xt!=null&&(N=xt.replace(Et,"$&/")+"/"),E(J,T,N,"",function(un){return un})):J!=null&&(le(J)&&(J=Oe(J,N+(J.key==null||g&&g.key===J.key?"":(""+J.key).replace(Et,"$&/")+"/")+xt)),T.push(J)),1;xt=0;var Gt=I===""?".":I+":";if(st(g))for(var Ot=0;Ot<g.length;Ot++)I=g[Ot],ot=Gt+Dt(I,Ot),xt+=E(I,T,N,ot,J);else if(Ot=Y(g),typeof Ot=="function")for(g=Ot.call(g),Ot=0;!(I=g.next()).done;)I=I.value,ot=Gt+Dt(I,Ot++),xt+=E(I,T,N,ot,J);else if(ot==="object"){if(typeof g.then=="function")return E(Kt(g),T,N,I,J);throw T=String(g),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return xt}function j(g,T,N){if(g==null)return g;var I=[],J=0;return E(g,I,"","",function(ot){return T.call(N,ot,J++)}),I}function Z(g){if(g._status===-1){var T=g._result;T=T(),T.then(function(N){(g._status===0||g._status===-1)&&(g._status=1,g._result=N)},function(N){(g._status===0||g._status===-1)&&(g._status=2,g._result=N)}),g._status===-1&&(g._status=0,g._result=T)}if(g._status===1)return g._result.default;throw g._result}var yt=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},wt={map:j,forEach:function(g,T,N){j(g,function(){T.apply(this,arguments)},N)},count:function(g){var T=0;return j(g,function(){T++}),T},toArray:function(g){return j(g,function(T){return T})||[]},only:function(g){if(!le(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return W.Activity=O,W.Children=wt,W.Component=kt,W.Fragment=f,W.Profiler=x,W.PureComponent=_,W.StrictMode=c,W.Suspense=w,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,W.__COMPILER_RUNTIME={__proto__:null,c:function(g){return U.H.useMemoCache(g)}},W.cache=function(g){return function(){return g.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(g,T,N){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var I=G({},g.props),J=g.key;if(T!=null)for(ot in T.key!==void 0&&(J=""+T.key),T)!ct.call(T,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&T.ref===void 0||(I[ot]=T[ot]);var ot=arguments.length-2;if(ot===1)I.children=N;else if(1<ot){for(var xt=Array(ot),Gt=0;Gt<ot;Gt++)xt[Gt]=arguments[Gt+2];I.children=xt}return ht(g.type,J,I)},W.createContext=function(g){return g={$$typeof:z,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:m,_context:g},g},W.createElement=function(g,T,N){var I,J={},ot=null;if(T!=null)for(I in T.key!==void 0&&(ot=""+T.key),T)ct.call(T,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(J[I]=T[I]);var xt=arguments.length-2;if(xt===1)J.children=N;else if(1<xt){for(var Gt=Array(xt),Ot=0;Ot<xt;Ot++)Gt[Ot]=arguments[Ot+2];J.children=Gt}if(g&&g.defaultProps)for(I in xt=g.defaultProps,xt)J[I]===void 0&&(J[I]=xt[I]);return ht(g,ot,J)},W.createRef=function(){return{current:null}},W.forwardRef=function(g){return{$$typeof:F,render:g}},W.isValidElement=le,W.lazy=function(g){return{$$typeof:k,_payload:{_status:-1,_result:g},_init:Z}},W.memo=function(g,T){return{$$typeof:u,type:g,compare:T===void 0?null:T}},W.startTransition=function(g){var T=U.T,N={};U.T=N;try{var I=g(),J=U.S;J!==null&&J(N,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then($,yt)}catch(ot){yt(ot)}finally{T!==null&&N.types!==null&&(T.types=N.types),U.T=T}},W.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},W.use=function(g){return U.H.use(g)},W.useActionState=function(g,T,N){return U.H.useActionState(g,T,N)},W.useCallback=function(g,T){return U.H.useCallback(g,T)},W.useContext=function(g){return U.H.useContext(g)},W.useDebugValue=function(){},W.useDeferredValue=function(g,T){return U.H.useDeferredValue(g,T)},W.useEffect=function(g,T){return U.H.useEffect(g,T)},W.useEffectEvent=function(g){return U.H.useEffectEvent(g)},W.useId=function(){return U.H.useId()},W.useImperativeHandle=function(g,T,N){return U.H.useImperativeHandle(g,T,N)},W.useInsertionEffect=function(g,T){return U.H.useInsertionEffect(g,T)},W.useLayoutEffect=function(g,T){return U.H.useLayoutEffect(g,T)},W.useMemo=function(g,T){return U.H.useMemo(g,T)},W.useOptimistic=function(g,T){return U.H.useOptimistic(g,T)},W.useReducer=function(g,T,N){return U.H.useReducer(g,T,N)},W.useRef=function(g){return U.H.useRef(g)},W.useState=function(g){return U.H.useState(g)},W.useSyncExternalStore=function(g,T,N){return U.H.useSyncExternalStore(g,T,N)},W.useTransition=function(){return U.H.useTransition()},W.version="19.2.7",W}var yh;function tc(){return yh||(yh=1,Is.exports=Fu()),Is.exports}var dt=tc(),Ps={exports:{}},Xi={},qs={exports:{}},Ks={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function wu(){return ph||(ph=1,(function(a){function r(E,j){var Z=E.length;E.push(j);t:for(;0<Z;){var yt=Z-1>>>1,wt=E[yt];if(0<x(wt,j))E[yt]=j,E[Z]=wt,Z=yt;else break t}}function f(E){return E.length===0?null:E[0]}function c(E){if(E.length===0)return null;var j=E[0],Z=E.pop();if(Z!==j){E[0]=Z;t:for(var yt=0,wt=E.length,g=wt>>>1;yt<g;){var T=2*(yt+1)-1,N=E[T],I=T+1,J=E[I];if(0>x(N,Z))I<wt&&0>x(J,N)?(E[yt]=J,E[I]=Z,yt=I):(E[yt]=N,E[T]=Z,yt=T);else if(I<wt&&0>x(J,Z))E[yt]=J,E[I]=Z,yt=I;else break t}}return j}function x(E,j){var Z=E.sortIndex-j.sortIndex;return Z!==0?Z:E.id-j.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var z=Date,F=z.now();a.unstable_now=function(){return z.now()-F}}var w=[],u=[],k=1,O=null,D=3,Y=!1,L=!1,G=!1,et=!1,kt=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function K(E){for(var j=f(u);j!==null;){if(j.callback===null)c(u);else if(j.startTime<=E)c(u),j.sortIndex=j.expirationTime,r(w,j);else break;j=f(u)}}function st(E){if(G=!1,K(E),!L)if(f(w)!==null)L=!0,$||($=!0,Q());else{var j=f(u);j!==null&&Kt(st,j.startTime-E)}}var $=!1,U=-1,ct=5,ht=-1;function Oe(){return et?!0:!(a.unstable_now()-ht<ct)}function le(){if(et=!1,$){var E=a.unstable_now();ht=E;var j=!0;try{t:{L=!1,G&&(G=!1,H(U),U=-1),Y=!0;var Z=D;try{e:{for(K(E),O=f(w);O!==null&&!(O.expirationTime>E&&Oe());){var yt=O.callback;if(typeof yt=="function"){O.callback=null,D=O.priorityLevel;var wt=yt(O.expirationTime<=E);if(E=a.unstable_now(),typeof wt=="function"){O.callback=wt,K(E),j=!0;break e}O===f(w)&&c(w),K(E)}else c(w);O=f(w)}if(O!==null)j=!0;else{var g=f(u);g!==null&&Kt(st,g.startTime-E),j=!1}}break t}finally{O=null,D=Z,Y=!1}j=void 0}}finally{j?Q():$=!1}}}var Q;if(typeof _=="function")Q=function(){_(le)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,Dt=Et.port2;Et.port1.onmessage=le,Q=function(){Dt.postMessage(null)}}else Q=function(){kt(le,0)};function Kt(E,j){U=kt(function(){E(a.unstable_now())},j)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(E){E.callback=null},a.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ct=0<E?Math.floor(1e3/E):5},a.unstable_getCurrentPriorityLevel=function(){return D},a.unstable_next=function(E){switch(D){case 1:case 2:case 3:var j=3;break;default:j=D}var Z=D;D=j;try{return E()}finally{D=Z}},a.unstable_requestPaint=function(){et=!0},a.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Z=D;D=E;try{return j()}finally{D=Z}},a.unstable_scheduleCallback=function(E,j,Z){var yt=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?yt+Z:yt):Z=yt,E){case 1:var wt=-1;break;case 2:wt=250;break;case 5:wt=1073741823;break;case 4:wt=1e4;break;default:wt=5e3}return wt=Z+wt,E={id:k++,callback:j,priorityLevel:E,startTime:Z,expirationTime:wt,sortIndex:-1},Z>yt?(E.sortIndex=Z,r(u,E),f(w)===null&&E===f(u)&&(G?(H(U),U=-1):G=!0,Kt(st,Z-yt))):(E.sortIndex=wt,r(w,E),L||Y||(L=!0,$||($=!0,Q()))),E},a.unstable_shouldYield=Oe,a.unstable_wrapCallback=function(E){var j=D;return function(){var Z=D;D=j;try{return E.apply(this,arguments)}finally{D=Z}}}})(Ks)),Ks}var gh;function vu(){return gh||(gh=1,qs.exports=wu()),qs.exports}var Vs={exports:{}},ee={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function bu(){if(Fh)return ee;Fh=1;var a=tc();function r(w){var u="https://react.dev/errors/"+w;if(1<arguments.length){u+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)u+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+w+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(r(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},x=Symbol.for("react.portal");function m(w,u,k){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:O==null?null:""+O,children:w,containerInfo:u,implementation:k}}var z=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function F(w,u){if(w==="font")return"";if(typeof u=="string")return u==="use-credentials"?u:""}return ee.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,ee.createPortal=function(w,u){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!u||u.nodeType!==1&&u.nodeType!==9&&u.nodeType!==11)throw Error(r(299));return m(w,u,null,k)},ee.flushSync=function(w){var u=z.T,k=c.p;try{if(z.T=null,c.p=2,w)return w()}finally{z.T=u,c.p=k,c.d.f()}},ee.preconnect=function(w,u){typeof w=="string"&&(u?(u=u.crossOrigin,u=typeof u=="string"?u==="use-credentials"?u:"":void 0):u=null,c.d.C(w,u))},ee.prefetchDNS=function(w){typeof w=="string"&&c.d.D(w)},ee.preinit=function(w,u){if(typeof w=="string"&&u&&typeof u.as=="string"){var k=u.as,O=F(k,u.crossOrigin),D=typeof u.integrity=="string"?u.integrity:void 0,Y=typeof u.fetchPriority=="string"?u.fetchPriority:void 0;k==="style"?c.d.S(w,typeof u.precedence=="string"?u.precedence:void 0,{crossOrigin:O,integrity:D,fetchPriority:Y}):k==="script"&&c.d.X(w,{crossOrigin:O,integrity:D,fetchPriority:Y,nonce:typeof u.nonce=="string"?u.nonce:void 0})}},ee.preinitModule=function(w,u){if(typeof w=="string")if(typeof u=="object"&&u!==null){if(u.as==null||u.as==="script"){var k=F(u.as,u.crossOrigin);c.d.M(w,{crossOrigin:k,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0})}}else u==null&&c.d.M(w)},ee.preload=function(w,u){if(typeof w=="string"&&typeof u=="object"&&u!==null&&typeof u.as=="string"){var k=u.as,O=F(k,u.crossOrigin);c.d.L(w,k,{crossOrigin:O,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0,type:typeof u.type=="string"?u.type:void 0,fetchPriority:typeof u.fetchPriority=="string"?u.fetchPriority:void 0,referrerPolicy:typeof u.referrerPolicy=="string"?u.referrerPolicy:void 0,imageSrcSet:typeof u.imageSrcSet=="string"?u.imageSrcSet:void 0,imageSizes:typeof u.imageSizes=="string"?u.imageSizes:void 0,media:typeof u.media=="string"?u.media:void 0})}},ee.preloadModule=function(w,u){if(typeof w=="string")if(u){var k=F(u.as,u.crossOrigin);c.d.m(w,{as:typeof u.as=="string"&&u.as!=="script"?u.as:void 0,crossOrigin:k,integrity:typeof u.integrity=="string"?u.integrity:void 0})}else c.d.m(w)},ee.requestFormReset=function(w){c.d.r(w)},ee.unstable_batchedUpdates=function(w,u){return w(u)},ee.useFormState=function(w,u,k){return z.H.useFormState(w,u,k)},ee.useFormStatus=function(){return z.H.useHostTransitionStatus()},ee.version="19.2.7",ee}var wh;function Cu(){if(wh)return Vs.exports;wh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Vs.exports=bu(),Vs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function ku(){if(vh)return Xi;vh=1;var a=vu(),r=tc(),f=Cu();function c(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function m(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function F(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w(t){if(m(t)!==t)throw Error(c(188))}function u(t){var e=t.alternate;if(!e){if(e=m(t),e===null)throw Error(c(188));return e!==t?null:t}for(var n=t,o=e;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return w(i),t;if(l===o)return w(i),e;l=l.sibling}throw Error(c(188))}if(n.return!==o.return)n=i,o=l;else{for(var s=!1,d=i.child;d;){if(d===n){s=!0,n=i,o=l;break}if(d===o){s=!0,o=i,n=l;break}d=d.sibling}if(!s){for(d=l.child;d;){if(d===n){s=!0,n=l,o=i;break}if(d===o){s=!0,o=l,n=i;break}d=d.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==o)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?t:e}function k(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=k(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,D=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),L=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),kt=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),_=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),st=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),ht=Symbol.for("react.activity"),Oe=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=le&&t[le]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function Dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case G:return"Fragment";case kt:return"Profiler";case et:return"StrictMode";case st:return"Suspense";case $:return"SuspenseList";case ht:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case L:return"Portal";case _:return t.displayName||"Context";case H:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case U:return e=t.displayName||null,e!==null?e:Dt(t.type)||"Memo";case ct:e=t._payload,t=t._init;try{return Dt(t(e))}catch{}}return null}var Kt=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},yt=[],wt=-1;function g(t){return{current:t}}function T(t){0>wt||(t.current=yt[wt],yt[wt]=null,wt--)}function N(t,e){wt++,yt[wt]=t.current,t.current=e}var I=g(null),J=g(null),ot=g(null),xt=g(null);function Gt(t,e){switch(N(ot,e),N(J,t),N(I,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Nd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Nd(e),t=Ld(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(I),N(I,t)}function Ot(){T(I),T(J),T(ot)}function un(t){t.memoizedState!==null&&N(xt,t);var e=I.current,n=Ld(e,t.type);e!==n&&(N(J,t),N(I,n))}function qn(t){J.current===t&&(T(I),T(J)),xt.current===t&&(T(xt),qi._currentValue=Z)}var fo,ti;function Ue(t){if(fo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fo=e&&e[1]||"",ti=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fo+t+ti}var gt=!1;function ae(t,e){if(!t||gt)return"";gt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(e){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(A){var S=A}Reflect.construct(t,[],M)}else{try{M.call()}catch(A){S=A}t.call(M.prototype)}}else{try{throw Error()}catch(A){S=A}(M=t())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(A){if(A&&S&&typeof A.stack=="string")return[A.stack,S.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=o.DetermineComponentFrameRoot(),s=l[0],d=l[1];if(s&&d){var y=s.split(`
`),C=d.split(`
`);for(i=o=0;o<y.length&&!y[o].includes("DetermineComponentFrameRoot");)o++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(o===y.length||i===C.length)for(o=y.length-1,i=C.length-1;1<=o&&0<=i&&y[o]!==C[i];)i--;for(;1<=o&&0<=i;o--,i--)if(y[o]!==C[i]){if(o!==1||i!==1)do if(o--,i--,0>i||y[o]!==C[i]){var R=`
`+y[o].replace(" at new "," at ");return t.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",t.displayName)),R}while(1<=o&&0<=i);break}}}finally{gt=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Ue(n):""}function ne(t,e){switch(t.tag){case 26:case 27:case 5:return Ue(t.type);case 16:return Ue("Lazy");case 13:return t.child!==e&&e!==null?Ue("Suspense Fallback"):Ue("Suspense");case 19:return Ue("SuspenseList");case 0:case 15:return ae(t.type,!1);case 11:return ae(t.type.render,!1);case 1:return ae(t.type,!0);case 31:return Ue("Activity");default:return""}}function He(t){try{var e="",n=null;do e+=ne(t,n),n=t,t=t.return;while(t);return e}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,ho=a.unstable_scheduleCallback,xo=a.unstable_cancelCallback,$i=a.unstable_shouldYield,mn=a.unstable_requestPaint,Zt=a.unstable_now,tl=a.unstable_getCurrentPriorityLevel,xc=a.unstable_ImmediatePriority,uc=a.unstable_UserBlockingPriority,el=a.unstable_NormalPriority,Qh=a.unstable_LowPriority,mc=a.unstable_IdlePriority,Jh=a.log,Wh=a.unstable_setDisableYieldValue,ei=null,ue=null;function yn(t){if(typeof Jh=="function"&&Wh(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(ei,t)}catch{}}var me=Math.clz32?Math.clz32:ex,$h=Math.log,tx=Math.LN2;function ex(t){return t>>>=0,t===0?32:31-($h(t)/tx|0)|0}var nl=256,ol=262144,il=4194304;function Kn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ll(t,e,n){var o=t.pendingLanes;if(o===0)return 0;var i=0,l=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var d=o&134217727;return d!==0?(o=d&~l,o!==0?i=Kn(o):(s&=d,s!==0?i=Kn(s):n||(n=d&~t,n!==0&&(i=Kn(n))))):(d=o&~l,d!==0?i=Kn(d):s!==0?i=Kn(s):n||(n=o&~t,n!==0&&(i=Kn(n)))),i===0?0:e!==0&&e!==i&&(e&l)===0&&(l=i&-i,n=e&-e,l>=n||l===32&&(n&4194048)!==0)?e:i}function ni(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function nx(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yc(){var t=il;return il<<=1,(il&62914560)===0&&(il=4194304),t}function Ea(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ox(t,e,n,o,i,l){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var d=t.entanglements,y=t.expirationTimes,C=t.hiddenUpdates;for(n=s&~n;0<n;){var R=31-me(n),M=1<<R;d[R]=0,y[R]=-1;var S=C[R];if(S!==null)for(C[R]=null,R=0;R<S.length;R++){var A=S[R];A!==null&&(A.lane&=-536870913)}n&=~M}o!==0&&pc(t,o,0),l!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=l&~(s&~e))}function pc(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var o=31-me(e);t.entangledLanes|=e,t.entanglements[o]=t.entanglements[o]|1073741824|n&261930}function gc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var o=31-me(n),i=1<<o;i&e|t[o]&e&&(t[o]|=e),n&=~i}}function Fc(t,e){var n=e&-e;return n=(n&42)!==0?1:Ra(n),(n&(t.suspendedLanes|e))!==0?0:n}function Ra(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ba(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wc(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:ah(t.type))}function vc(t,e){var n=j.p;try{return j.p=t,e()}finally{j.p=n}}var pn=Math.random().toString(36).slice(2),Qt="__reactFiber$"+pn,re="__reactProps$"+pn,uo="__reactContainer$"+pn,Ma="__reactEvents$"+pn,ix="__reactListeners$"+pn,lx="__reactHandles$"+pn,bc="__reactResources$"+pn,ii="__reactMarker$"+pn;function Ta(t){delete t[Qt],delete t[re],delete t[Ma],delete t[ix],delete t[lx]}function mo(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[uo]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kd(t);t!==null;){if(n=t[Qt])return n;t=Kd(t)}return e}t=n,n=t.parentNode}return null}function yo(t){if(t=t[Qt]||t[uo]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function li(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(c(33))}function po(t){var e=t[bc];return e||(e=t[bc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Yt(t){t[ii]=!0}var Cc=new Set,kc={};function Vn(t,e){go(t,e),go(t+"Capture",e)}function go(t,e){for(kc[t]=e,t=0;t<e.length;t++)Cc.add(e[t])}var ax=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zc={},Sc={};function rx(t){return je.call(Sc,t)?!0:je.call(zc,t)?!1:ax.test(t)?Sc[t]=!0:(zc[t]=!0,!1)}function al(t,e,n){if(rx(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var o=e.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function rl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ye(t,e,n,o){if(o===null)t.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+o)}}function ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ac(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sx(t,e,n){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var i=o.get,l=o.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(t,e,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Da(t){if(!t._valueTracker){var e=Ac(t)?"checked":"value";t._valueTracker=sx(t,e,""+t[e])}}function Ec(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),o="";return t&&(o=Ac(t)?t.checked?"true":"false":t.value),t=o,t!==n?(e.setValue(t),!0):!1}function sl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var cx=/[\n"\\]/g;function ze(t){return t.replace(cx,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Oa(t,e,n,o,i,l,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ke(e)):t.value!==""+ke(e)&&(t.value=""+ke(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?ja(t,s,ke(e)):n!=null?ja(t,s,ke(n)):o!=null&&t.removeAttribute("value"),i==null&&l!=null&&(t.defaultChecked=!!l),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+ke(d):t.removeAttribute("name")}function Rc(t,e,n,o,i,l,s,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(t.type=l),e!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||e!=null)){Da(t);return}n=n!=null?""+ke(n):"",e=e!=null?""+ke(e):n,d||e===t.value||(t.value=e),t.defaultValue=e}o=o??i,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=d?t.checked:!!o,t.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),Da(t)}function ja(t,e,n){e==="number"&&sl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Fo(t,e,n,o){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&o&&(t[n].defaultSelected=!0)}else{for(n=""+ke(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,o&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Bc(t,e,n){if(e!=null&&(e=""+ke(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ke(n):""}function Mc(t,e,n,o){if(e==null){if(o!=null){if(n!=null)throw Error(c(92));if(Kt(o)){if(1<o.length)throw Error(c(93));o=o[0]}n=o}n==null&&(n=""),e=n}n=ke(e),t.defaultValue=n,o=t.textContent,o===n&&o!==""&&o!==null&&(t.value=o),Da(t)}function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(t,e,n){var o=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":o?t.setProperty(e,n):typeof n!="number"||n===0||fx.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Dc(t,e,n){if(e!=null&&typeof e!="object")throw Error(c(62));if(t=t.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||e!=null&&e.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var i in e)o=e[i],e.hasOwnProperty(i)&&n[i]!==o&&Tc(t,i,o)}else for(var l in e)e.hasOwnProperty(l)&&Tc(t,l,e[l])}function Na(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(t){return hx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xe(){}var La=null;function _a(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vo=null,bo=null;function Oc(t){var e=yo(t);if(e&&(t=e.stateNode)){var n=t[re]||null;t:switch(t=e.stateNode,e.type){case"input":if(Oa(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ze(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var o=n[e];if(o!==t&&o.form===t.form){var i=o[re]||null;if(!i)throw Error(c(90));Oa(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)o=n[e],o.form===t.form&&Ec(o)}break t;case"textarea":Bc(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Fo(t,!!n.multiple,e,!1)}}}var Ua=!1;function jc(t,e,n){if(Ua)return t(e,n);Ua=!0;try{var o=t(e);return o}finally{if(Ua=!1,(vo!==null||bo!==null)&&(Ql(),vo&&(e=vo,t=bo,bo=vo=null,Oc(e),t)))for(e=0;e<t.length;e++)Oc(t[e])}}function ai(t,e){var n=t.stateNode;if(n===null)return null;var o=n[re]||null;if(o===null)return null;n=o[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(c(231,e,typeof n));return n}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=!1;if(Ze)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Ha=!1}var gn=null,Ia=null,fl=null;function Nc(){if(fl)return fl;var t,e=Ia,n=e.length,o,i="value"in gn?gn.value:gn.textContent,l=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(o=1;o<=s&&e[n-o]===i[l-o];o++);return fl=i.slice(t,1<o?1-o:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function Lc(){return!1}function se(t){function e(n,o,i,l,s){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(n=t[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?hl:Lc,this.isPropagationStopped=Lc,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=se(Gn),si=O({},Gn,{view:0,detail:0}),xx=se(si),Pa,qa,ci,ul=O({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Va,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ci&&(ci&&t.type==="mousemove"?(Pa=t.screenX-ci.screenX,qa=t.screenY-ci.screenY):qa=Pa=0,ci=t),Pa)},movementY:function(t){return"movementY"in t?t.movementY:qa}}),_c=se(ul),ux=O({},ul,{dataTransfer:0}),mx=se(ux),yx=O({},si,{relatedTarget:0}),Ka=se(yx),px=O({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=se(px),Fx=O({},Gn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wx=se(Fx),vx=O({},Gn,{data:0}),Uc=se(vx),bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kx[t])?!!e[t]:!1}function Va(){return zx}var Sx=O({},si,{key:function(t){if(t.key){var e=bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Cx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Va,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ax=se(Sx),Ex=O({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hc=se(Ex),Rx=O({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Va}),Bx=se(Rx),Mx=O({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=se(Mx),Dx=O({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ox=se(Dx),jx=O({},Gn,{newState:0,oldState:0}),Nx=se(jx),Lx=[9,13,27,32],Ga=Ze&&"CompositionEvent"in window,fi=null;Ze&&"documentMode"in document&&(fi=document.documentMode);var _x=Ze&&"TextEvent"in window&&!fi,Ic=Ze&&(!Ga||fi&&8<fi&&11>=fi),Pc=" ",qc=!1;function Kc(t,e){switch(t){case"keyup":return Lx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Co=!1;function Ux(t,e){switch(t){case"compositionend":return Vc(e);case"keypress":return e.which!==32?null:(qc=!0,Pc);case"textInput":return t=e.data,t===Pc&&qc?null:t;default:return null}}function Hx(t,e){if(Co)return t==="compositionend"||!Ga&&Kc(t,e)?(t=Nc(),fl=Ia=gn=null,Co=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ic&&e.locale!=="ko"?null:e.data;default:return null}}var Ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ix[t.type]:e==="textarea"}function Yc(t,e,n,o){vo?bo?bo.push(o):bo=[o]:vo=o,e=oa(e,"onChange"),0<e.length&&(n=new xl("onChange","change",null,n,o),t.push({event:n,listeners:e}))}var di=null,hi=null;function Px(t){Bd(t,0)}function ml(t){var e=li(t);if(Ec(e))return t}function Xc(t,e){if(t==="change")return e}var Zc=!1;if(Ze){var Ya;if(Ze){var Xa="oninput"in document;if(!Xa){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Xa=typeof Qc.oninput=="function"}Ya=Xa}else Ya=!1;Zc=Ya&&(!document.documentMode||9<document.documentMode)}function Jc(){di&&(di.detachEvent("onpropertychange",Wc),hi=di=null)}function Wc(t){if(t.propertyName==="value"&&ml(hi)){var e=[];Yc(e,hi,t,_a(t)),jc(Px,e)}}function qx(t,e,n){t==="focusin"?(Jc(),di=e,hi=n,di.attachEvent("onpropertychange",Wc)):t==="focusout"&&Jc()}function Kx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(hi)}function Vx(t,e){if(t==="click")return ml(e)}function Gx(t,e){if(t==="input"||t==="change")return ml(e)}function Yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ye=typeof Object.is=="function"?Object.is:Yx;function xi(t,e){if(ye(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!je.call(e,i)||!ye(t[i],e[i]))return!1}return!0}function $c(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tf(t,e){var n=$c(t);t=0;for(var o;n;){if(n.nodeType===3){if(o=t+n.textContent.length,t<=e&&o>=e)return{node:n,offset:e-t};t=o}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=$c(n)}}function ef(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ef(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function nf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=sl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=sl(t.document)}return e}function Za(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Xx=Ze&&"documentMode"in document&&11>=document.documentMode,ko=null,Qa=null,ui=null,Ja=!1;function of(t,e,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||ko==null||ko!==sl(o)||(o=ko,"selectionStart"in o&&Za(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ui&&xi(ui,o)||(ui=o,o=oa(Qa,"onSelect"),0<o.length&&(e=new xl("onSelect","select",null,e,n),t.push({event:e,listeners:o}),e.target=ko)))}function Yn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zo={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionrun:Yn("Transition","TransitionRun"),transitionstart:Yn("Transition","TransitionStart"),transitioncancel:Yn("Transition","TransitionCancel"),transitionend:Yn("Transition","TransitionEnd")},Wa={},lf={};Ze&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function Xn(t){if(Wa[t])return Wa[t];if(!zo[t])return t;var e=zo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lf)return Wa[t]=e[n];return t}var af=Xn("animationend"),rf=Xn("animationiteration"),sf=Xn("animationstart"),Zx=Xn("transitionrun"),Qx=Xn("transitionstart"),Jx=Xn("transitioncancel"),cf=Xn("transitionend"),ff=new Map,$a="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$a.push("scrollEnd");function Ne(t,e){ff.set(t,e),Vn(e,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Se=[],So=0,tr=0;function pl(){for(var t=So,e=tr=So=0;e<t;){var n=Se[e];Se[e++]=null;var o=Se[e];Se[e++]=null;var i=Se[e];Se[e++]=null;var l=Se[e];if(Se[e++]=null,o!==null&&i!==null){var s=o.pending;s===null?i.next=i:(i.next=s.next,s.next=i),o.pending=i}l!==0&&df(n,i,l)}}function gl(t,e,n,o){Se[So++]=t,Se[So++]=e,Se[So++]=n,Se[So++]=o,tr|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function er(t,e,n,o){return gl(t,e,n,o),Fl(t)}function Zn(t,e){return gl(t,null,null,e),Fl(t)}function df(t,e,n){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n);for(var i=!1,l=t.return;l!==null;)l.childLanes|=n,o=l.alternate,o!==null&&(o.childLanes|=n),l.tag===22&&(t=l.stateNode,t===null||t._visibility&1||(i=!0)),t=l,l=l.return;return t.tag===3?(l=t.stateNode,i&&e!==null&&(i=31-me(n),t=l.hiddenUpdates,o=t[i],o===null?t[i]=[e]:o.push(e),e.lane=n|536870912),l):null}function Fl(t){if(50<Ni)throw Ni=0,fs=null,Error(c(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ao={};function Wx(t,e,n,o){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pe(t,e,n,o){return new Wx(t,e,n,o)}function nr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qe(t,e){var n=t.alternate;return n===null?(n=pe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function hf(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function wl(t,e,n,o,i,l){var s=0;if(o=t,typeof t=="function")nr(t)&&(s=1);else if(typeof t=="string")s=ou(t,n,I.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ht:return t=pe(31,n,e,i),t.elementType=ht,t.lanes=l,t;case G:return Qn(n.children,i,l,e);case et:s=8,i|=24;break;case kt:return t=pe(12,n,e,i|2),t.elementType=kt,t.lanes=l,t;case st:return t=pe(13,n,e,i),t.elementType=st,t.lanes=l,t;case $:return t=pe(19,n,e,i),t.elementType=$,t.lanes=l,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:s=10;break t;case H:s=9;break t;case K:s=11;break t;case U:s=14;break t;case ct:s=16,o=null;break t}s=29,n=Error(c(130,t===null?"null":typeof t,"")),o=null}return e=pe(s,n,e,i),e.elementType=t,e.type=o,e.lanes=l,e}function Qn(t,e,n,o){return t=pe(7,t,o,e),t.lanes=n,t}function or(t,e,n){return t=pe(6,t,null,e),t.lanes=n,t}function xf(t){var e=pe(18,null,null,0);return e.stateNode=t,e}function ir(t,e,n){return e=pe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var uf=new WeakMap;function Ae(t,e){if(typeof t=="object"&&t!==null){var n=uf.get(t);return n!==void 0?n:(e={value:t,source:e,stack:He(e)},uf.set(t,e),e)}return{value:t,source:e,stack:He(e)}}var Eo=[],Ro=0,vl=null,mi=0,Ee=[],Re=0,Fn=null,Ie=1,Pe="";function Je(t,e){Eo[Ro++]=mi,Eo[Ro++]=vl,vl=t,mi=e}function mf(t,e,n){Ee[Re++]=Ie,Ee[Re++]=Pe,Ee[Re++]=Fn,Fn=t;var o=Ie;t=Pe;var i=32-me(o)-1;o&=~(1<<i),n+=1;var l=32-me(e)+i;if(30<l){var s=i-i%5;l=(o&(1<<s)-1).toString(32),o>>=s,i-=s,Ie=1<<32-me(e)+i|n<<i|o,Pe=l+t}else Ie=1<<l|n<<i|o,Pe=t}function lr(t){t.return!==null&&(Je(t,1),mf(t,1,0))}function ar(t){for(;t===vl;)vl=Eo[--Ro],Eo[Ro]=null,mi=Eo[--Ro],Eo[Ro]=null;for(;t===Fn;)Fn=Ee[--Re],Ee[Re]=null,Pe=Ee[--Re],Ee[Re]=null,Ie=Ee[--Re],Ee[Re]=null}function yf(t,e){Ee[Re++]=Ie,Ee[Re++]=Pe,Ee[Re++]=Fn,Ie=e.id,Pe=e.overflow,Fn=t}var Jt=null,Mt=null,ft=!1,wn=null,Be=!1,rr=Error(c(519));function vn(t){var e=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yi(Ae(e,t)),rr}function pf(t){var e=t.stateNode,n=t.type,o=t.memoizedProps;switch(e[Qt]=t,e[re]=o,n){case"dialog":lt("cancel",e),lt("close",e);break;case"iframe":case"object":case"embed":lt("load",e);break;case"video":case"audio":for(n=0;n<_i.length;n++)lt(_i[n],e);break;case"source":lt("error",e);break;case"img":case"image":case"link":lt("error",e),lt("load",e);break;case"details":lt("toggle",e);break;case"input":lt("invalid",e),Rc(e,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":lt("invalid",e);break;case"textarea":lt("invalid",e),Mc(e,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||o.suppressHydrationWarning===!0||Od(e.textContent,n)?(o.popover!=null&&(lt("beforetoggle",e),lt("toggle",e)),o.onScroll!=null&&lt("scroll",e),o.onScrollEnd!=null&&lt("scrollend",e),o.onClick!=null&&(e.onclick=Xe),e=!0):e=!1,e||vn(t,!0)}function gf(t){for(Jt=t.return;Jt;)switch(Jt.tag){case 5:case 31:case 13:Be=!1;return;case 27:case 3:Be=!0;return;default:Jt=Jt.return}}function Bo(t){if(t!==Jt)return!1;if(!ft)return gf(t),ft=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||zs(t.type,t.memoizedProps)),n=!n),n&&Mt&&vn(t),gf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Mt=qd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));Mt=qd(t)}else e===27?(e=Mt,jn(t.type)?(t=Bs,Bs=null,Mt=t):Mt=e):Mt=Jt?Te(t.stateNode.nextSibling):null;return!0}function Jn(){Mt=Jt=null,ft=!1}function sr(){var t=wn;return t!==null&&(he===null?he=t:he.push.apply(he,t),wn=null),t}function yi(t){wn===null?wn=[t]:wn.push(t)}var cr=g(null),Wn=null,We=null;function bn(t,e,n){N(cr,e._currentValue),e._currentValue=n}function $e(t){t._currentValue=cr.current,T(cr)}function fr(t,e,n){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===n)break;t=t.return}}function dr(t,e,n,o){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;t:for(;l!==null;){var d=l;l=i;for(var y=0;y<e.length;y++)if(d.context===e[y]){l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),fr(l.return,n,t),o||(s=null);break t}l=d.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fr(s,n,t),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Mo(t,e,n,o){t=null;for(var i=e,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var d=i.type;ye(i.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(i===xt.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(qi):t=[qi])}i=i.return}t!==null&&dr(e,t,n,o),e.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!ye(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $n(t){Wn=t,We=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return Ff(Wn,t)}function Cl(t,e){return Wn===null&&$n(t),Ff(t,e)}function Ff(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},We===null){if(t===null)throw Error(c(308));We=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else We=We.next=e;return n}var $x=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,o){t.push(o)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},t0=a.unstable_scheduleCallback,e0=a.unstable_NormalPriority,Ht={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hr(){return{controller:new $x,data:new Map,refCount:0}}function pi(t){t.refCount--,t.refCount===0&&t0(e0,function(){t.controller.abort()})}var gi=null,xr=0,To=0,Do=null;function n0(t,e){if(gi===null){var n=gi=[];xr=0,To=ys(),Do={status:"pending",value:void 0,then:function(o){n.push(o)}}}return xr++,e.then(wf,wf),e}function wf(){if(--xr===0&&gi!==null){Do!==null&&(Do.status="fulfilled");var t=gi;gi=null,To=0,Do=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function o0(t,e){var n=[],o={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){o.status="fulfilled",o.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(o.status="rejected",o.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),o}var vf=E.S;E.S=function(t,e){id=Zt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&n0(t,e),vf!==null&&vf(t,e)};var to=g(null);function ur(){var t=to.current;return t!==null?t:Rt.pooledCache}function kl(t,e){e===null?N(to,to.current):N(to,e.pool)}function bf(){var t=ur();return t===null?null:{parent:Ht._currentValue,pool:t}}var Oo=Error(c(460)),mr=Error(c(474)),zl=Error(c(542)),Sl={then:function(){}};function Cf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function kf(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Xe,Xe),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sf(t),t;default:if(typeof e.status=="string")e.then(Xe,Xe);else{if(t=Rt,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=e,t.status="pending",t.then(function(o){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=o}},function(o){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=o}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Sf(t),t}throw no=e,Oo}}function eo(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(no=n,Oo):n}}var no=null;function zf(){if(no===null)throw Error(c(459));var t=no;return no=null,t}function Sf(t){if(t===Oo||t===zl)throw Error(c(483))}var jo=null,Fi=0;function Al(t){var e=Fi;return Fi+=1,jo===null&&(jo=[]),kf(jo,t,e)}function wi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function El(t,e){throw e.$$typeof===D?Error(c(525)):(t=Object.prototype.toString.call(e),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Af(t){function e(v,p){if(t){var b=v.deletions;b===null?(v.deletions=[p],v.flags|=16):b.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function o(v){for(var p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function i(v,p){return v=Qe(v,p),v.index=0,v.sibling=null,v}function l(v,p,b){return v.index=b,t?(b=v.alternate,b!==null?(b=b.index,b<p?(v.flags|=67108866,p):b):(v.flags|=67108866,p)):(v.flags|=1048576,p)}function s(v){return t&&v.alternate===null&&(v.flags|=67108866),v}function d(v,p,b,B){return p===null||p.tag!==6?(p=or(b,v.mode,B),p.return=v,p):(p=i(p,b),p.return=v,p)}function y(v,p,b,B){var V=b.type;return V===G?R(v,p,b.props.children,B,b.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ct&&eo(V)===p.type)?(p=i(p,b.props),wi(p,b),p.return=v,p):(p=wl(b.type,b.key,b.props,null,v.mode,B),wi(p,b),p.return=v,p)}function C(v,p,b,B){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=ir(b,v.mode,B),p.return=v,p):(p=i(p,b.children||[]),p.return=v,p)}function R(v,p,b,B,V){return p===null||p.tag!==7?(p=Qn(b,v.mode,B,V),p.return=v,p):(p=i(p,b),p.return=v,p)}function M(v,p,b){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=or(""+p,v.mode,b),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Y:return b=wl(p.type,p.key,p.props,null,v.mode,b),wi(b,p),b.return=v,b;case L:return p=ir(p,v.mode,b),p.return=v,p;case ct:return p=eo(p),M(v,p,b)}if(Kt(p)||Q(p))return p=Qn(p,v.mode,b,null),p.return=v,p;if(typeof p.then=="function")return M(v,Al(p),b);if(p.$$typeof===_)return M(v,Cl(v,p),b);El(v,p)}return null}function S(v,p,b,B){var V=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return V!==null?null:d(v,p,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Y:return b.key===V?y(v,p,b,B):null;case L:return b.key===V?C(v,p,b,B):null;case ct:return b=eo(b),S(v,p,b,B)}if(Kt(b)||Q(b))return V!==null?null:R(v,p,b,B,null);if(typeof b.then=="function")return S(v,p,Al(b),B);if(b.$$typeof===_)return S(v,p,Cl(v,b),B);El(v,b)}return null}function A(v,p,b,B,V){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return v=v.get(b)||null,d(p,v,""+B,V);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Y:return v=v.get(B.key===null?b:B.key)||null,y(p,v,B,V);case L:return v=v.get(B.key===null?b:B.key)||null,C(p,v,B,V);case ct:return B=eo(B),A(v,p,b,B,V)}if(Kt(B)||Q(B))return v=v.get(b)||null,R(p,v,B,V,null);if(typeof B.then=="function")return A(v,p,b,Al(B),V);if(B.$$typeof===_)return A(v,p,b,Cl(p,B),V);El(p,B)}return null}function P(v,p,b,B){for(var V=null,ut=null,q=p,nt=p=0,rt=null;q!==null&&nt<b.length;nt++){q.index>nt?(rt=q,q=null):rt=q.sibling;var mt=S(v,q,b[nt],B);if(mt===null){q===null&&(q=rt);break}t&&q&&mt.alternate===null&&e(v,q),p=l(mt,p,nt),ut===null?V=mt:ut.sibling=mt,ut=mt,q=rt}if(nt===b.length)return n(v,q),ft&&Je(v,nt),V;if(q===null){for(;nt<b.length;nt++)q=M(v,b[nt],B),q!==null&&(p=l(q,p,nt),ut===null?V=q:ut.sibling=q,ut=q);return ft&&Je(v,nt),V}for(q=o(q);nt<b.length;nt++)rt=A(q,v,nt,b[nt],B),rt!==null&&(t&&rt.alternate!==null&&q.delete(rt.key===null?nt:rt.key),p=l(rt,p,nt),ut===null?V=rt:ut.sibling=rt,ut=rt);return t&&q.forEach(function(Hn){return e(v,Hn)}),ft&&Je(v,nt),V}function X(v,p,b,B){if(b==null)throw Error(c(151));for(var V=null,ut=null,q=p,nt=p=0,rt=null,mt=b.next();q!==null&&!mt.done;nt++,mt=b.next()){q.index>nt?(rt=q,q=null):rt=q.sibling;var Hn=S(v,q,mt.value,B);if(Hn===null){q===null&&(q=rt);break}t&&q&&Hn.alternate===null&&e(v,q),p=l(Hn,p,nt),ut===null?V=Hn:ut.sibling=Hn,ut=Hn,q=rt}if(mt.done)return n(v,q),ft&&Je(v,nt),V;if(q===null){for(;!mt.done;nt++,mt=b.next())mt=M(v,mt.value,B),mt!==null&&(p=l(mt,p,nt),ut===null?V=mt:ut.sibling=mt,ut=mt);return ft&&Je(v,nt),V}for(q=o(q);!mt.done;nt++,mt=b.next())mt=A(q,v,nt,mt.value,B),mt!==null&&(t&&mt.alternate!==null&&q.delete(mt.key===null?nt:mt.key),p=l(mt,p,nt),ut===null?V=mt:ut.sibling=mt,ut=mt);return t&&q.forEach(function(uu){return e(v,uu)}),ft&&Je(v,nt),V}function At(v,p,b,B){if(typeof b=="object"&&b!==null&&b.type===G&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Y:t:{for(var V=b.key;p!==null;){if(p.key===V){if(V=b.type,V===G){if(p.tag===7){n(v,p.sibling),B=i(p,b.props.children),B.return=v,v=B;break t}}else if(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===ct&&eo(V)===p.type){n(v,p.sibling),B=i(p,b.props),wi(B,b),B.return=v,v=B;break t}n(v,p);break}else e(v,p);p=p.sibling}b.type===G?(B=Qn(b.props.children,v.mode,B,b.key),B.return=v,v=B):(B=wl(b.type,b.key,b.props,null,v.mode,B),wi(B,b),B.return=v,v=B)}return s(v);case L:t:{for(V=b.key;p!==null;){if(p.key===V)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(v,p.sibling),B=i(p,b.children||[]),B.return=v,v=B;break t}else{n(v,p);break}else e(v,p);p=p.sibling}B=ir(b,v.mode,B),B.return=v,v=B}return s(v);case ct:return b=eo(b),At(v,p,b,B)}if(Kt(b))return P(v,p,b,B);if(Q(b)){if(V=Q(b),typeof V!="function")throw Error(c(150));return b=V.call(b),X(v,p,b,B)}if(typeof b.then=="function")return At(v,p,Al(b),B);if(b.$$typeof===_)return At(v,p,Cl(v,b),B);El(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,p!==null&&p.tag===6?(n(v,p.sibling),B=i(p,b),B.return=v,v=B):(n(v,p),B=or(b,v.mode,B),B.return=v,v=B),s(v)):n(v,p)}return function(v,p,b,B){try{Fi=0;var V=At(v,p,b,B);return jo=null,V}catch(q){if(q===Oo||q===zl)throw q;var ut=pe(29,q,null,v.mode);return ut.lanes=B,ut.return=v,ut}finally{}}}var oo=Af(!0),Ef=Af(!1),Cn=!1;function yr(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function kn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(pt&2)!==0){var i=o.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),o.pending=e,e=Fl(t),df(t,null,n),e}return gl(t,o,e,n),Fl(t)}function vi(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,gc(t,n)}}function gr(t,e){var n=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=e:l=l.next=e}else i=l=e;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:o.shared,callbacks:o.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Fr=!1;function bi(){if(Fr){var t=Do;if(t!==null)throw t}}function Ci(t,e,n,o){Fr=!1;var i=t.updateQueue;Cn=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var y=d,C=y.next;y.next=null,s===null?l=C:s.next=C,s=y;var R=t.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==s&&(d===null?R.firstBaseUpdate=C:d.next=C,R.lastBaseUpdate=y))}if(l!==null){var M=i.baseState;s=0,R=C=y=null,d=l;do{var S=d.lane&-536870913,A=S!==d.lane;if(A?(at&S)===S:(o&S)===S){S!==0&&S===To&&(Fr=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var P=t,X=d;S=e;var At=n;switch(X.tag){case 1:if(P=X.payload,typeof P=="function"){M=P.call(At,M,S);break t}M=P;break t;case 3:P.flags=P.flags&-65537|128;case 0:if(P=X.payload,S=typeof P=="function"?P.call(At,M,S):P,S==null)break t;M=O({},M,S);break t;case 2:Cn=!0}}S=d.callback,S!==null&&(t.flags|=64,A&&(t.flags|=8192),A=i.callbacks,A===null?i.callbacks=[S]:A.push(S))}else A={lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(C=R=A,y=M):R=R.next=A,s|=S;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;A=d,d=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);R===null&&(y=M),i.baseState=y,i.firstBaseUpdate=C,i.lastBaseUpdate=R,l===null&&(i.shared.lanes=0),Bn|=s,t.lanes=s,t.memoizedState=M}}function Rf(t,e){if(typeof t!="function")throw Error(c(191,t));t.call(e)}function Bf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Rf(n[t],e)}var No=g(null),Rl=g(0);function Mf(t,e){t=cn,N(Rl,t),N(No,e),cn=t|e.baseLanes}function wr(){N(Rl,cn),N(No,No.current)}function vr(){cn=Rl.current,T(No),T(Rl)}var ge=g(null),Me=null;function Sn(t){var e=t.alternate;N(_t,_t.current&1),N(ge,t),Me===null&&(e===null||No.current!==null||e.memoizedState!==null)&&(Me=t)}function br(t){N(_t,_t.current),N(ge,t),Me===null&&(Me=t)}function Tf(t){t.tag===22?(N(_t,_t.current),N(ge,t),Me===null&&(Me=t)):An()}function An(){N(_t,_t.current),N(ge,ge.current)}function Fe(t){T(ge),Me===t&&(Me=null),T(_t)}var _t=g(0);function Bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Es(n)||Rs(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tn=0,tt=null,zt=null,It=null,Ml=!1,Lo=!1,io=!1,Tl=0,ki=0,_o=null,i0=0;function Nt(){throw Error(c(321))}function Cr(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ye(t[n],e[n]))return!1;return!0}function kr(t,e,n,o,i,l){return tn=l,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,E.H=t===null||t.memoizedState===null?m1:Ur,io=!1,l=n(o,i),io=!1,Lo&&(l=Of(e,n,o,i)),Df(t),l}function Df(t){E.H=Ai;var e=zt!==null&&zt.next!==null;if(tn=0,It=zt=tt=null,Ml=!1,ki=0,_o=null,e)throw Error(c(300));t===null||Pt||(t=t.dependencies,t!==null&&bl(t)&&(Pt=!0))}function Of(t,e,n,o){tt=t;var i=0;do{if(Lo&&(_o=null),ki=0,Lo=!1,25<=i)throw Error(c(301));if(i+=1,It=zt=null,t.updateQueue!=null){var l=t.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}E.H=y1,l=e(n,o)}while(Lo);return l}function l0(){var t=E.H,e=t.useState()[0];return e=typeof e.then=="function"?zi(e):e,t=t.useState()[0],(zt!==null?zt.memoizedState:null)!==t&&(tt.flags|=1024),e}function zr(){var t=Tl!==0;return Tl=0,t}function Sr(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ar(t){if(Ml){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ml=!1}tn=0,It=zt=tt=null,Lo=!1,ki=Tl=0,_o=null}function oe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?tt.memoizedState=It=t:It=It.next=t,It}function Ut(){if(zt===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=It===null?tt.memoizedState:It.next;if(e!==null)It=e,zt=t;else{if(t===null)throw tt.alternate===null?Error(c(467)):Error(c(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},It===null?tt.memoizedState=It=t:It=It.next=t}return It}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zi(t){var e=ki;return ki+=1,_o===null&&(_o=[]),t=kf(_o,t,e),e=tt,(It===null?e.memoizedState:It.next)===null&&(e=e.alternate,E.H=e===null||e.memoizedState===null?m1:Ur),t}function Ol(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zi(t);if(t.$$typeof===_)return Wt(t)}throw Error(c(438,String(t)))}function Er(t){var e=null,n=tt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var o=tt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(e={data:o.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Dl(),tt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),o=0;o<t;o++)n[o]=Oe;return e.index++,n}function en(t,e){return typeof e=="function"?e(t):e}function jl(t){var e=Ut();return Rr(e,zt,t)}function Rr(t,e,n){var o=t.queue;if(o===null)throw Error(c(311));o.lastRenderedReducer=n;var i=t.baseQueue,l=o.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}e.baseQueue=i=l,o.pending=null}if(l=t.baseState,i===null)t.memoizedState=l;else{e=i.next;var d=s=null,y=null,C=e,R=!1;do{var M=C.lane&-536870913;if(M!==C.lane?(at&M)===M:(tn&M)===M){var S=C.revertLane;if(S===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),M===To&&(R=!0);else if((tn&S)===S){C=C.next,S===To&&(R=!0);continue}else M={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},y===null?(d=y=M,s=l):y=y.next=M,tt.lanes|=S,Bn|=S;M=C.action,io&&n(l,M),l=C.hasEagerState?C.eagerState:n(l,M)}else S={lane:M,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},y===null?(d=y=S,s=l):y=y.next=S,tt.lanes|=M,Bn|=M;C=C.next}while(C!==null&&C!==e);if(y===null?s=l:y.next=d,!ye(l,t.memoizedState)&&(Pt=!0,R&&(n=Do,n!==null)))throw n;t.memoizedState=l,t.baseState=s,t.baseQueue=y,o.lastRenderedState=l}return i===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Br(t){var e=Ut(),n=e.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=t;var o=n.dispatch,i=n.pending,l=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=t(l,s.action),s=s.next;while(s!==i);ye(l,e.memoizedState)||(Pt=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),n.lastRenderedState=l}return[l,o]}function jf(t,e,n){var o=tt,i=Ut(),l=ft;if(l){if(n===void 0)throw Error(c(407));n=n()}else n=e();var s=!ye((zt||i).memoizedState,n);if(s&&(i.memoizedState=n,Pt=!0),i=i.queue,Dr(_f.bind(null,o,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(o.flags|=2048,Uo(9,{destroy:void 0},Lf.bind(null,o,i,n,e),null),Rt===null)throw Error(c(349));l||(tn&127)!==0||Nf(o,e,n)}return n}function Nf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e=Dl(),tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lf(t,e,n,o){e.value=n,e.getSnapshot=o,Uf(e)&&Hf(t)}function _f(t,e,n){return n(function(){Uf(e)&&Hf(t)})}function Uf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ye(t,n)}catch{return!0}}function Hf(t){var e=Zn(t,2);e!==null&&xe(e,t,2)}function Mr(t){var e=oe();if(typeof t=="function"){var n=t;if(t=n(),io){yn(!0);try{n()}finally{yn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:t},e}function If(t,e,n,o){return t.baseState=n,Rr(t,zt,typeof o=="function"?o:en)}function a0(t,e,n,o,i){if(_l(t))throw Error(c(485));if(t=e.action,t!==null){var l={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};E.T!==null?n(!0):l.isTransition=!1,o(l),n=e.pending,n===null?(l.next=e.pending=l,Pf(e,l)):(l.next=n.next,e.pending=n.next=l)}}function Pf(t,e){var n=e.action,o=e.payload,i=t.state;if(e.isTransition){var l=E.T,s={};E.T=s;try{var d=n(i,o),y=E.S;y!==null&&y(s,d),qf(t,e,d)}catch(C){Tr(t,e,C)}finally{l!==null&&s.types!==null&&(l.types=s.types),E.T=l}}else try{l=n(i,o),qf(t,e,l)}catch(C){Tr(t,e,C)}}function qf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Kf(t,e,o)},function(o){return Tr(t,e,o)}):Kf(t,e,n)}function Kf(t,e,n){e.status="fulfilled",e.value=n,Vf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Pf(t,n)))}function Tr(t,e,n){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do e.status="rejected",e.reason=n,Vf(e),e=e.next;while(e!==o)}t.action=null}function Vf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Gf(t,e){return e}function Yf(t,e){if(ft){var n=Rt.formState;if(n!==null){t:{var o=tt;if(ft){if(Mt){e:{for(var i=Mt,l=Be;i.nodeType!==8;){if(!l){i=null;break e}if(i=Te(i.nextSibling),i===null){i=null;break e}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Mt=Te(i.nextSibling),o=i.data==="F!";break t}}vn(o)}o=!1}o&&(e=n[0])}}return n=oe(),n.memoizedState=n.baseState=e,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gf,lastRenderedState:e},n.queue=o,n=h1.bind(null,tt,o),o.dispatch=n,o=Mr(!1),l=_r.bind(null,tt,!1,o.queue),o=oe(),i={state:e,dispatch:null,action:t,pending:null},o.queue=i,n=a0.bind(null,tt,i,l,n),i.dispatch=n,o.memoizedState=t,[e,n,!1]}function Xf(t){var e=Ut();return Zf(e,zt,t)}function Zf(t,e,n){if(e=Rr(t,e,Gf)[0],t=jl(en)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var o=zi(e)}catch(s){throw s===Oo?zl:s}else o=e;e=Ut();var i=e.queue,l=i.dispatch;return n!==e.memoizedState&&(tt.flags|=2048,Uo(9,{destroy:void 0},r0.bind(null,i,n),null)),[o,l,t]}function r0(t,e){t.action=e}function Qf(t){var e=Ut(),n=zt;if(n!==null)return Zf(e,n,t);Ut(),e=e.memoizedState,n=Ut();var o=n.queue.dispatch;return n.memoizedState=t,[e,o,!1]}function Uo(t,e,n,o){return t={tag:t,create:n,deps:o,inst:e,next:null},e=tt.updateQueue,e===null&&(e=Dl(),tt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(o=n.next,n.next=t,t.next=o,e.lastEffect=t),t}function Jf(){return Ut().memoizedState}function Nl(t,e,n,o){var i=oe();tt.flags|=t,i.memoizedState=Uo(1|e,{destroy:void 0},n,o===void 0?null:o)}function Ll(t,e,n,o){var i=Ut();o=o===void 0?null:o;var l=i.memoizedState.inst;zt!==null&&o!==null&&Cr(o,zt.memoizedState.deps)?i.memoizedState=Uo(e,l,n,o):(tt.flags|=t,i.memoizedState=Uo(1|e,l,n,o))}function Wf(t,e){Nl(8390656,8,t,e)}function Dr(t,e){Ll(2048,8,t,e)}function s0(t){tt.flags|=4;var e=tt.updateQueue;if(e===null)e=Dl(),tt.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function $f(t){var e=Ut().memoizedState;return s0({ref:e,nextImpl:t}),function(){if((pt&2)!==0)throw Error(c(440));return e.impl.apply(void 0,arguments)}}function t1(t,e){return Ll(4,2,t,e)}function e1(t,e){return Ll(4,4,t,e)}function n1(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function o1(t,e,n){n=n!=null?n.concat([t]):null,Ll(4,4,n1.bind(null,e,t),n)}function Or(){}function i1(t,e){var n=Ut();e=e===void 0?null:e;var o=n.memoizedState;return e!==null&&Cr(e,o[1])?o[0]:(n.memoizedState=[t,e],t)}function l1(t,e){var n=Ut();e=e===void 0?null:e;var o=n.memoizedState;if(e!==null&&Cr(e,o[1]))return o[0];if(o=t(),io){yn(!0);try{t()}finally{yn(!1)}}return n.memoizedState=[o,e],o}function jr(t,e,n){return n===void 0||(tn&1073741824)!==0&&(at&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=ad(),tt.lanes|=t,Bn|=t,n)}function a1(t,e,n,o){return ye(n,e)?n:No.current!==null?(t=jr(t,n,o),ye(t,e)||(Pt=!0),t):(tn&42)===0||(tn&1073741824)!==0&&(at&261930)===0?(Pt=!0,t.memoizedState=n):(t=ad(),tt.lanes|=t,Bn|=t,e)}function r1(t,e,n,o,i){var l=j.p;j.p=l!==0&&8>l?l:8;var s=E.T,d={};E.T=d,_r(t,!1,e,n);try{var y=i(),C=E.S;if(C!==null&&C(d,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var R=o0(y,o);Si(t,e,R,be(t))}else Si(t,e,o,be(t))}catch(M){Si(t,e,{then:function(){},status:"rejected",reason:M},be())}finally{j.p=l,s!==null&&d.types!==null&&(s.types=d.types),E.T=s}}function c0(){}function Nr(t,e,n,o){if(t.tag!==5)throw Error(c(476));var i=s1(t).queue;r1(t,i,e,Z,n===null?c0:function(){return c1(t),n(o)})}function s1(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:Z},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function c1(t){var e=s1(t);e.next===null&&(e=t.alternate.memoizedState),Si(t,e.next.queue,{},be())}function Lr(){return Wt(qi)}function f1(){return Ut().memoizedState}function d1(){return Ut().memoizedState}function f0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=be();t=kn(n);var o=zn(e,t,n);o!==null&&(xe(o,e,n),vi(o,e,n)),e={cache:hr()},t.payload=e;return}e=e.return}}function d0(t,e,n){var o=be();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_l(t)?x1(e,n):(n=er(t,e,n,o),n!==null&&(xe(n,t,o),u1(n,e,o)))}function h1(t,e,n){var o=be();Si(t,e,n,o)}function Si(t,e,n,o){var i={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_l(t))x1(e,i);else{var l=t.alternate;if(t.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var s=e.lastRenderedState,d=l(s,n);if(i.hasEagerState=!0,i.eagerState=d,ye(d,s))return gl(t,e,i,0),Rt===null&&pl(),!1}catch{}finally{}if(n=er(t,e,i,o),n!==null)return xe(n,t,o),u1(n,e,o),!0}return!1}function _r(t,e,n,o){if(o={lane:2,revertLane:ys(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(e)throw Error(c(479))}else e=er(t,n,o,2),e!==null&&xe(e,t,2)}function _l(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function x1(t,e){Lo=Ml=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u1(t,e,n){if((n&4194048)!==0){var o=e.lanes;o&=t.pendingLanes,n|=o,e.lanes=n,gc(t,n)}}var Ai={readContext:Wt,use:Ol,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useLayoutEffect:Nt,useInsertionEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useSyncExternalStore:Nt,useId:Nt,useHostTransitionStatus:Nt,useFormState:Nt,useActionState:Nt,useOptimistic:Nt,useMemoCache:Nt,useCacheRefresh:Nt};Ai.useEffectEvent=Nt;var m1={readContext:Wt,use:Ol,useCallback:function(t,e){return oe().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:Wf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Nl(4194308,4,n1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){Nl(4,2,t,e)},useMemo:function(t,e){var n=oe();e=e===void 0?null:e;var o=t();if(io){yn(!0);try{t()}finally{yn(!1)}}return n.memoizedState=[o,e],o},useReducer:function(t,e,n){var o=oe();if(n!==void 0){var i=n(e);if(io){yn(!0);try{n(e)}finally{yn(!1)}}}else i=e;return o.memoizedState=o.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},o.queue=t,t=t.dispatch=d0.bind(null,tt,t),[o.memoizedState,t]},useRef:function(t){var e=oe();return t={current:t},e.memoizedState=t},useState:function(t){t=Mr(t);var e=t.queue,n=h1.bind(null,tt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Or,useDeferredValue:function(t,e){var n=oe();return jr(n,t,e)},useTransition:function(){var t=Mr(!1);return t=r1.bind(null,tt,t.queue,!0,!1),oe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var o=tt,i=oe();if(ft){if(n===void 0)throw Error(c(407));n=n()}else{if(n=e(),Rt===null)throw Error(c(349));(at&127)!==0||Nf(o,e,n)}i.memoizedState=n;var l={value:n,getSnapshot:e};return i.queue=l,Wf(_f.bind(null,o,l,t),[t]),o.flags|=2048,Uo(9,{destroy:void 0},Lf.bind(null,o,l,n,e),null),n},useId:function(){var t=oe(),e=Rt.identifierPrefix;if(ft){var n=Pe,o=Ie;n=(o&~(1<<32-me(o)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Tl++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=i0++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Lr,useFormState:Yf,useActionState:Yf,useOptimistic:function(t){var e=oe();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=_r.bind(null,tt,!0,n),n.dispatch=e,[t,e]},useMemoCache:Er,useCacheRefresh:function(){return oe().memoizedState=f0.bind(null,tt)},useEffectEvent:function(t){var e=oe(),n={impl:t};return e.memoizedState=n,function(){if((pt&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ur={readContext:Wt,use:Ol,useCallback:i1,useContext:Wt,useEffect:Dr,useImperativeHandle:o1,useInsertionEffect:t1,useLayoutEffect:e1,useMemo:l1,useReducer:jl,useRef:Jf,useState:function(){return jl(en)},useDebugValue:Or,useDeferredValue:function(t,e){var n=Ut();return a1(n,zt.memoizedState,t,e)},useTransition:function(){var t=jl(en)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:zi(t),e]},useSyncExternalStore:jf,useId:f1,useHostTransitionStatus:Lr,useFormState:Xf,useActionState:Xf,useOptimistic:function(t,e){var n=Ut();return If(n,zt,t,e)},useMemoCache:Er,useCacheRefresh:d1};Ur.useEffectEvent=$f;var y1={readContext:Wt,use:Ol,useCallback:i1,useContext:Wt,useEffect:Dr,useImperativeHandle:o1,useInsertionEffect:t1,useLayoutEffect:e1,useMemo:l1,useReducer:Br,useRef:Jf,useState:function(){return Br(en)},useDebugValue:Or,useDeferredValue:function(t,e){var n=Ut();return zt===null?jr(n,t,e):a1(n,zt.memoizedState,t,e)},useTransition:function(){var t=Br(en)[0],e=Ut().memoizedState;return[typeof t=="boolean"?t:zi(t),e]},useSyncExternalStore:jf,useId:f1,useHostTransitionStatus:Lr,useFormState:Qf,useActionState:Qf,useOptimistic:function(t,e){var n=Ut();return zt!==null?If(n,zt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Er,useCacheRefresh:d1};y1.useEffectEvent=$f;function Hr(t,e,n,o){e=t.memoizedState,n=n(o,e),n=n==null?e:O({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ir={enqueueSetState:function(t,e,n){t=t._reactInternals;var o=be(),i=kn(o);i.payload=e,n!=null&&(i.callback=n),e=zn(t,i,o),e!==null&&(xe(e,t,o),vi(e,t,o))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var o=be(),i=kn(o);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=zn(t,i,o),e!==null&&(xe(e,t,o),vi(e,t,o))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),o=kn(n);o.tag=2,e!=null&&(o.callback=e),e=zn(t,o,n),e!==null&&(xe(e,t,n),vi(e,t,n))}};function p1(t,e,n,o,i,l,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,l,s):e.prototype&&e.prototype.isPureReactComponent?!xi(n,o)||!xi(i,l):!0}function g1(t,e,n,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,o),e.state!==t&&Ir.enqueueReplaceState(e,e.state,null)}function lo(t,e){var n=e;if("ref"in e){n={};for(var o in e)o!=="ref"&&(n[o]=e[o])}if(t=t.defaultProps){n===e&&(n=O({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}function F1(t){yl(t)}function w1(t){console.error(t)}function v1(t){yl(t)}function Ul(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(o){setTimeout(function(){throw o})}}function b1(t,e,n){try{var o=t.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Pr(t,e,n){return n=kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ul(t,e)},n}function C1(t){return t=kn(t),t.tag=3,t}function k1(t,e,n,o){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=o.value;t.payload=function(){return i(l)},t.callback=function(){b1(e,n,o)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){b1(e,n,o),typeof i!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var d=o.stack;this.componentDidCatch(o.value,{componentStack:d!==null?d:""})})}function h0(t,e,n,o,i){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(e=n.alternate,e!==null&&Mo(e,n,i,!0),n=ge.current,n!==null){switch(n.tag){case 31:case 13:return Me===null?Jl():n.alternate===null&&Lt===0&&(Lt=3),n.flags&=-257,n.flags|=65536,n.lanes=i,o===Sl?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([o]):e.add(o),xs(t,o,i)),!1;case 22:return n.flags|=65536,o===Sl?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([o]):n.add(o)),xs(t,o,i)),!1}throw Error(c(435,n.tag))}return xs(t,o,i),Jl(),!1}if(ft)return e=ge.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,o!==rr&&(t=Error(c(422),{cause:o}),yi(Ae(t,n)))):(o!==rr&&(e=Error(c(423),{cause:o}),yi(Ae(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,o=Ae(o,n),i=Pr(t.stateNode,o,i),gr(t,i),Lt!==4&&(Lt=2)),!1;var l=Error(c(520),{cause:o});if(l=Ae(l,n),ji===null?ji=[l]:ji.push(l),Lt!==4&&(Lt=2),e===null)return!0;o=Ae(o,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=Pr(n.stateNode,o,t),gr(n,t),!1;case 1:if(e=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Mn===null||!Mn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=C1(i),k1(i,t,n,o),gr(n,i),!1}n=n.return}while(n!==null);return!1}var qr=Error(c(461)),Pt=!1;function $t(t,e,n,o){e.child=t===null?Ef(e,null,n,o):oo(e,t.child,n,o)}function z1(t,e,n,o,i){n=n.render;var l=e.ref;if("ref"in o){var s={};for(var d in o)d!=="ref"&&(s[d]=o[d])}else s=o;return $n(e),o=kr(t,e,n,s,l,i),d=zr(),t!==null&&!Pt?(Sr(t,e,i),nn(t,e,i)):(ft&&d&&lr(e),e.flags|=1,$t(t,e,o,i),e.child)}function S1(t,e,n,o,i){if(t===null){var l=n.type;return typeof l=="function"&&!nr(l)&&l.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=l,A1(t,e,l,o,i)):(t=wl(n.type,null,o,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(l=t.child,!Jr(t,i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(s,o)&&t.ref===e.ref)return nn(t,e,i)}return e.flags|=1,t=Qe(l,o),t.ref=e.ref,t.return=e,e.child=t}function A1(t,e,n,o,i){if(t!==null){var l=t.memoizedProps;if(xi(l,o)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=o=l,Jr(t,i))(t.flags&131072)!==0&&(Pt=!0);else return e.lanes=t.lanes,nn(t,e,i)}return Kr(t,e,n,o,i)}function E1(t,e,n,o){var i=o.children,l=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((e.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,t!==null){for(o=e.child=t.child,i=0;o!==null;)i=i|o.lanes|o.childLanes,o=o.sibling;o=i&~l}else o=0,e.child=null;return R1(t,e,l,n,o)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&kl(e,l!==null?l.cachePool:null),l!==null?Mf(e,l):wr(),Tf(e);else return o=e.lanes=536870912,R1(t,e,l!==null?l.baseLanes|n:n,n,o)}else l!==null?(kl(e,l.cachePool),Mf(e,l),An(),e.memoizedState=null):(t!==null&&kl(e,null),wr(),An());return $t(t,e,i,n),e.child}function Ei(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function R1(t,e,n,o,i){var l=ur();return l=l===null?null:{parent:Ht._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&kl(e,null),wr(),Tf(e),t!==null&&Mo(t,e,o,!0),e.childLanes=i,null}function Hl(t,e){return e=Pl({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function B1(t,e,n){return oo(e,t.child,null,n),t=Hl(e,e.pendingProps),t.flags|=2,Fe(e),e.memoizedState=null,t}function x0(t,e,n){var o=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ft){if(o.mode==="hidden")return t=Hl(e,o),e.lanes=536870912,Ei(null,t);if(br(e),(t=Mt)?(t=Pd(t,Be),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fn!==null?{id:Ie,overflow:Pe}:null,retryLane:536870912,hydrationErrors:null},n=xf(t),n.return=e,e.child=n,Jt=e,Mt=null)):t=null,t===null)throw vn(e);return e.lanes=536870912,null}return Hl(e,o)}var l=t.memoizedState;if(l!==null){var s=l.dehydrated;if(br(e),i)if(e.flags&256)e.flags&=-257,e=B1(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(c(558));else if(Pt||Mo(t,e,n,!1),i=(n&t.childLanes)!==0,Pt||i){if(o=Rt,o!==null&&(s=Fc(o,n),s!==0&&s!==l.retryLane))throw l.retryLane=s,Zn(t,s),xe(o,t,s),qr;Jl(),e=B1(t,e,n)}else t=l.treeContext,Mt=Te(s.nextSibling),Jt=e,ft=!0,wn=null,Be=!1,t!==null&&yf(e,t),e=Hl(e,o),e.flags|=4096;return e}return t=Qe(t.child,{mode:o.mode,children:o.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Il(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Kr(t,e,n,o,i){return $n(e),n=kr(t,e,n,o,void 0,i),o=zr(),t!==null&&!Pt?(Sr(t,e,i),nn(t,e,i)):(ft&&o&&lr(e),e.flags|=1,$t(t,e,n,i),e.child)}function M1(t,e,n,o,i,l){return $n(e),e.updateQueue=null,n=Of(e,o,n,i),Df(t),o=zr(),t!==null&&!Pt?(Sr(t,e,l),nn(t,e,l)):(ft&&o&&lr(e),e.flags|=1,$t(t,e,n,l),e.child)}function T1(t,e,n,o,i){if($n(e),e.stateNode===null){var l=Ao,s=n.contextType;typeof s=="object"&&s!==null&&(l=Wt(s)),l=new n(o,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ir,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=o,l.state=e.memoizedState,l.refs={},yr(e),s=n.contextType,l.context=typeof s=="object"&&s!==null?Wt(s):Ao,l.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Hr(e,n,s,o),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&Ir.enqueueReplaceState(l,l.state,null),Ci(e,o,l,i),bi(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!0}else if(t===null){l=e.stateNode;var d=e.memoizedProps,y=lo(n,d);l.props=y;var C=l.context,R=n.contextType;s=Ao,typeof R=="object"&&R!==null&&(s=Wt(R));var M=n.getDerivedStateFromProps;R=typeof M=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,R||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||C!==s)&&g1(e,l,o,s),Cn=!1;var S=e.memoizedState;l.state=S,Ci(e,o,l,i),bi(),C=e.memoizedState,d||S!==C||Cn?(typeof M=="function"&&(Hr(e,n,M,o),C=e.memoizedState),(y=Cn||p1(e,n,y,o,S,C,s))?(R||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=C),l.props=o,l.state=C,l.context=s,o=y):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{l=e.stateNode,pr(t,e),s=e.memoizedProps,R=lo(n,s),l.props=R,M=e.pendingProps,S=l.context,C=n.contextType,y=Ao,typeof C=="object"&&C!==null&&(y=Wt(C)),d=n.getDerivedStateFromProps,(C=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==M||S!==y)&&g1(e,l,o,y),Cn=!1,S=e.memoizedState,l.state=S,Ci(e,o,l,i),bi();var A=e.memoizedState;s!==M||S!==A||Cn||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof d=="function"&&(Hr(e,n,d,o),A=e.memoizedState),(R=Cn||p1(e,n,R,o,S,A,y)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,A,y),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,A,y)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=A),l.props=o,l.state=A,l.context=y,o=R):(typeof l.componentDidUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),o=!1)}return l=o,Il(t,e),o=(e.flags&128)!==0,l||o?(l=e.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,i),e.child=oo(e,null,n,i)):$t(t,e,n,i),e.memoizedState=l.state,t=e.child):t=nn(t,e,i),t}function D1(t,e,n,o){return Jn(),e.flags|=256,$t(t,e,n,o),e.child}var Vr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gr(t){return{baseLanes:t,cachePool:bf()}}function Yr(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=ve),t}function O1(t,e,n){var o=e.pendingProps,i=!1,l=(e.flags&128)!==0,s;if((s=l)||(s=t!==null&&t.memoizedState===null?!1:(_t.current&2)!==0),s&&(i=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(ft){if(i?Sn(e):An(),(t=Mt)?(t=Pd(t,Be),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Fn!==null?{id:Ie,overflow:Pe}:null,retryLane:536870912,hydrationErrors:null},n=xf(t),n.return=e,e.child=n,Jt=e,Mt=null)):t=null,t===null)throw vn(e);return Rs(t)?e.lanes=32:e.lanes=536870912,null}var d=o.children;return o=o.fallback,i?(An(),i=e.mode,d=Pl({mode:"hidden",children:d},i),o=Qn(o,i,n,null),d.return=e,o.return=e,d.sibling=o,e.child=d,o=e.child,o.memoizedState=Gr(n),o.childLanes=Yr(t,s,n),e.memoizedState=Vr,Ei(null,o)):(Sn(e),Xr(e,d))}var y=t.memoizedState;if(y!==null&&(d=y.dehydrated,d!==null)){if(l)e.flags&256?(Sn(e),e.flags&=-257,e=Zr(t,e,n)):e.memoizedState!==null?(An(),e.child=t.child,e.flags|=128,e=null):(An(),d=o.fallback,i=e.mode,o=Pl({mode:"visible",children:o.children},i),d=Qn(d,i,n,null),d.flags|=2,o.return=e,d.return=e,o.sibling=d,e.child=o,oo(e,t.child,null,n),o=e.child,o.memoizedState=Gr(n),o.childLanes=Yr(t,s,n),e.memoizedState=Vr,e=Ei(null,o));else if(Sn(e),Rs(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var C=s.dgst;s=C,o=Error(c(419)),o.stack="",o.digest=s,yi({value:o,source:null,stack:null}),e=Zr(t,e,n)}else if(Pt||Mo(t,e,n,!1),s=(n&t.childLanes)!==0,Pt||s){if(s=Rt,s!==null&&(o=Fc(s,n),o!==0&&o!==y.retryLane))throw y.retryLane=o,Zn(t,o),xe(s,t,o),qr;Es(d)||Jl(),e=Zr(t,e,n)}else Es(d)?(e.flags|=192,e.child=t.child,e=null):(t=y.treeContext,Mt=Te(d.nextSibling),Jt=e,ft=!0,wn=null,Be=!1,t!==null&&yf(e,t),e=Xr(e,o.children),e.flags|=4096);return e}return i?(An(),d=o.fallback,i=e.mode,y=t.child,C=y.sibling,o=Qe(y,{mode:"hidden",children:o.children}),o.subtreeFlags=y.subtreeFlags&65011712,C!==null?d=Qe(C,d):(d=Qn(d,i,n,null),d.flags|=2),d.return=e,o.return=e,o.sibling=d,e.child=o,Ei(null,o),o=e.child,d=t.child.memoizedState,d===null?d=Gr(n):(i=d.cachePool,i!==null?(y=Ht._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=bf(),d={baseLanes:d.baseLanes|n,cachePool:i}),o.memoizedState=d,o.childLanes=Yr(t,s,n),e.memoizedState=Vr,Ei(t.child,o)):(Sn(e),n=t.child,t=n.sibling,n=Qe(n,{mode:"visible",children:o.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Xr(t,e){return e=Pl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Pl(t,e){return t=pe(22,t,null,e),t.lanes=0,t}function Zr(t,e,n){return oo(e,t.child,null,n),t=Xr(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function j1(t,e,n){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),fr(t.return,e,n)}function Qr(t,e,n,o,i,l){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i,treeForkCount:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i,s.treeForkCount=l)}function N1(t,e,n){var o=e.pendingProps,i=o.revealOrder,l=o.tail;o=o.children;var s=_t.current,d=(s&2)!==0;if(d?(s=s&1|2,e.flags|=128):s&=1,N(_t,s),$t(t,e,o,n),o=ft?mi:0,!d&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&j1(t,n,e);else if(t.tag===19)j1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qr(e,!1,i,n,l,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qr(e,!0,n,null,l,o);break;case"together":Qr(e,!1,null,null,void 0,o);break;default:e.memoizedState=null}return e.child}function nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Bn|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Mo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(c(153));if(e.child!==null){for(t=e.child,n=Qe(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qe(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jr(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function u0(t,e,n){switch(e.tag){case 3:Gt(e,e.stateNode.containerInfo),bn(e,Ht,t.memoizedState.cache),Jn();break;case 27:case 5:un(e);break;case 4:Gt(e,e.stateNode.containerInfo);break;case 10:bn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,br(e),null;break;case 13:var o=e.memoizedState;if(o!==null)return o.dehydrated!==null?(Sn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?O1(t,e,n):(Sn(e),t=nn(t,e,n),t!==null?t.sibling:null);Sn(e);break;case 19:var i=(t.flags&128)!==0;if(o=(n&e.childLanes)!==0,o||(Mo(t,e,n,!1),o=(n&e.childLanes)!==0),i){if(o)return N1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(_t,_t.current),o)break;return null;case 22:return e.lanes=0,E1(t,e,n,e.pendingProps);case 24:bn(e,Ht,t.memoizedState.cache)}return nn(t,e,n)}function L1(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Pt=!0;else{if(!Jr(t,n)&&(e.flags&128)===0)return Pt=!1,u0(t,e,n);Pt=(t.flags&131072)!==0}else Pt=!1,ft&&(e.flags&1048576)!==0&&mf(e,mi,e.index);switch(e.lanes=0,e.tag){case 16:t:{var o=e.pendingProps;if(t=eo(e.elementType),e.type=t,typeof t=="function")nr(t)?(o=lo(t,o),e.tag=1,e=T1(null,e,t,o,n)):(e.tag=0,e=Kr(null,e,t,o,n));else{if(t!=null){var i=t.$$typeof;if(i===K){e.tag=11,e=z1(null,e,t,o,n);break t}else if(i===U){e.tag=14,e=S1(null,e,t,o,n);break t}}throw e=Dt(t)||t,Error(c(306,e,""))}}return e;case 0:return Kr(t,e,e.type,e.pendingProps,n);case 1:return o=e.type,i=lo(o,e.pendingProps),T1(t,e,o,i,n);case 3:t:{if(Gt(e,e.stateNode.containerInfo),t===null)throw Error(c(387));o=e.pendingProps;var l=e.memoizedState;i=l.element,pr(t,e),Ci(e,o,null,n);var s=e.memoizedState;if(o=s.cache,bn(e,Ht,o),o!==l.cache&&dr(e,[Ht],n,!0),bi(),o=s.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=D1(t,e,o,n);break t}else if(o!==i){i=Ae(Error(c(424)),e),yi(i),e=D1(t,e,o,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Mt=Te(t.firstChild),Jt=e,ft=!0,wn=null,Be=!0,n=Ef(e,null,o,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Jn(),o===i){e=nn(t,e,n);break t}$t(t,e,o,n)}e=e.child}return e;case 26:return Il(t,e),t===null?(n=Xd(e.type,null,e.pendingProps,null))?e.memoizedState=n:ft||(n=e.type,t=e.pendingProps,o=ia(ot.current).createElement(n),o[Qt]=e,o[re]=t,te(o,n,t),Yt(o),e.stateNode=o):e.memoizedState=Xd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return un(e),t===null&&ft&&(o=e.stateNode=Vd(e.type,e.pendingProps,ot.current),Jt=e,Be=!0,i=Mt,jn(e.type)?(Bs=i,Mt=Te(o.firstChild)):Mt=i),$t(t,e,e.pendingProps.children,n),Il(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ft&&((i=o=Mt)&&(o=K0(o,e.type,e.pendingProps,Be),o!==null?(e.stateNode=o,Jt=e,Mt=Te(o.firstChild),Be=!1,i=!0):i=!1),i||vn(e)),un(e),i=e.type,l=e.pendingProps,s=t!==null?t.memoizedProps:null,o=l.children,zs(i,l)?o=null:s!==null&&zs(i,s)&&(e.flags|=32),e.memoizedState!==null&&(i=kr(t,e,l0,null,null,n),qi._currentValue=i),Il(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&ft&&((t=n=Mt)&&(n=V0(n,e.pendingProps,Be),n!==null?(e.stateNode=n,Jt=e,Mt=null,t=!0):t=!1),t||vn(e)),null;case 13:return O1(t,e,n);case 4:return Gt(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=oo(e,null,o,n):$t(t,e,o,n),e.child;case 11:return z1(t,e,e.type,e.pendingProps,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:return o=e.pendingProps,bn(e,e.type,o.value),$t(t,e,o.children,n),e.child;case 9:return i=e.type._context,o=e.pendingProps.children,$n(e),i=Wt(i),o=o(i),e.flags|=1,$t(t,e,o,n),e.child;case 14:return S1(t,e,e.type,e.pendingProps,n);case 15:return A1(t,e,e.type,e.pendingProps,n);case 19:return N1(t,e,n);case 31:return x0(t,e,n);case 22:return E1(t,e,n,e.pendingProps);case 24:return $n(e),o=Wt(Ht),t===null?(i=ur(),i===null&&(i=Rt,l=hr(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),e.memoizedState={parent:o,cache:i},yr(e),bn(e,Ht,i)):((t.lanes&n)!==0&&(pr(t,e),Ci(e,null,null,n),bi()),i=t.memoizedState,l=e.memoizedState,i.parent!==o?(i={parent:o,cache:o},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),bn(e,Ht,o)):(o=l.cache,bn(e,Ht,o),o!==i.cache&&dr(e,[Ht],n,!0))),$t(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(c(156,e.tag))}function on(t){t.flags|=4}function Wr(t,e,n,o,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(fd())t.flags|=8192;else throw no=Sl,mr}else t.flags&=-16777217}function _1(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$d(e))if(fd())t.flags|=8192;else throw no=Sl,mr}function ql(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yc():536870912,t.lanes|=e,qo|=e)}function Ri(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,o=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&65011712,o|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=o,t.childLanes=n,e}function m0(t,e,n){var o=e.pendingProps;switch(ar(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Tt(e),null;case 3:return n=e.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),e.memoizedState.cache!==o&&(e.flags|=2048),$e(Ht),Ot(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?on(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sr())),Tt(e),null;case 26:var i=e.type,l=e.memoizedState;return t===null?(on(e),l!==null?(Tt(e),_1(e,l)):(Tt(e),Wr(e,i,null,o,n))):l?l!==t.memoizedState?(on(e),Tt(e),_1(e,l)):(Tt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==o&&on(e),Tt(e),Wr(e,i,t,o,n)),null;case 27:if(qn(e),n=ot.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&on(e);else{if(!o){if(e.stateNode===null)throw Error(c(166));return Tt(e),null}t=I.current,Bo(e)?pf(e):(t=Vd(i,o,n),e.stateNode=t,on(e))}return Tt(e),null;case 5:if(qn(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==o&&on(e);else{if(!o){if(e.stateNode===null)throw Error(c(166));return Tt(e),null}if(l=I.current,Bo(e))pf(e);else{var s=ia(ot.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?l.multiple=!0:o.size&&(l.size=o.size);break;default:l=typeof o.is=="string"?s.createElement(i,{is:o.is}):s.createElement(i)}}l[Qt]=e,l[re]=o;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=l;t:switch(te(l,i,o),i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&on(e)}}return Tt(e),Wr(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==o&&on(e);else{if(typeof o!="string"&&e.stateNode===null)throw Error(c(166));if(t=ot.current,Bo(e)){if(t=e.stateNode,n=e.memoizedProps,o=null,i=Jt,i!==null)switch(i.tag){case 27:case 5:o=i.memoizedProps}t[Qt]=e,t=!!(t.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Od(t.nodeValue,n)),t||vn(e,!0)}else t=ia(t).createTextNode(o),t[Qt]=e,e.stateNode=t}return Tt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(o=Bo(e),n!==null){if(t===null){if(!o)throw Error(c(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(557));t[Qt]=e}else Jn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),t=!1}else n=sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Fe(e),e):(Fe(e),null);if((e.flags&128)!==0)throw Error(c(558))}return Tt(e),null;case 13:if(o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Bo(e),o!==null&&o.dehydrated!==null){if(t===null){if(!i)throw Error(c(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Qt]=e}else Jn(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Tt(e),i=!1}else i=sr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Fe(e),e):(Fe(e),null)}return Fe(e),(e.flags&128)!==0?(e.lanes=n,e):(n=o!==null,t=t!==null&&t.memoizedState!==null,n&&(o=e.child,i=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(i=o.alternate.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==i&&(o.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),ql(e,e.updateQueue),Tt(e),null);case 4:return Ot(),t===null&&ws(e.stateNode.containerInfo),Tt(e),null;case 10:return $e(e.type),Tt(e),null;case 19:if(T(_t),o=e.memoizedState,o===null)return Tt(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)Ri(o,!1);else{if(Lt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(l=Bl(t),l!==null){for(e.flags|=128,Ri(o,!1),t=l.updateQueue,e.updateQueue=t,ql(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)hf(n,t),n=n.sibling;return N(_t,_t.current&1|2),ft&&Je(e,o.treeForkCount),e.child}t=t.sibling}o.tail!==null&&Zt()>Xl&&(e.flags|=128,i=!0,Ri(o,!1),e.lanes=4194304)}else{if(!i)if(t=Bl(l),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,ql(e,t),Ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ft)return Tt(e),null}else 2*Zt()-o.renderingStartTime>Xl&&n!==536870912&&(e.flags|=128,i=!0,Ri(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(t=o.last,t!==null?t.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Zt(),t.sibling=null,n=_t.current,N(_t,i?n&1|2:n&1),ft&&Je(e,o.treeForkCount),t):(Tt(e),null);case 22:case 23:return Fe(e),vr(),o=e.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(e.flags|=8192):o&&(e.flags|=8192),o?(n&536870912)!==0&&(e.flags&128)===0&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),n=e.updateQueue,n!==null&&ql(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),o=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(o=e.memoizedState.cachePool.pool),o!==n&&(e.flags|=2048),t!==null&&T(to),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),$e(Ht),Tt(e),null;case 25:return null;case 30:return null}throw Error(c(156,e.tag))}function y0(t,e){switch(ar(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $e(Ht),Ot(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return qn(e),null;case 31:if(e.memoizedState!==null){if(Fe(e),e.alternate===null)throw Error(c(340));Jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Fe(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(c(340));Jn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return T(_t),null;case 4:return Ot(),null;case 10:return $e(e.type),null;case 22:case 23:return Fe(e),vr(),t!==null&&T(to),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return $e(Ht),null;case 25:return null;default:return null}}function U1(t,e){switch(ar(e),e.tag){case 3:$e(Ht),Ot();break;case 26:case 27:case 5:qn(e);break;case 4:Ot();break;case 31:e.memoizedState!==null&&Fe(e);break;case 13:Fe(e);break;case 19:T(_t);break;case 10:$e(e.type);break;case 22:case 23:Fe(e),vr(),t!==null&&T(to);break;case 24:$e(Ht)}}function Bi(t,e){try{var n=e.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var i=o.next;n=i;do{if((n.tag&t)===t){o=void 0;var l=n.create,s=n.inst;o=l(),s.destroy=o}n=n.next}while(n!==i)}}catch(d){bt(e,e.return,d)}}function En(t,e,n){try{var o=e.updateQueue,i=o!==null?o.lastEffect:null;if(i!==null){var l=i.next;o=l;do{if((o.tag&t)===t){var s=o.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,i=e;var y=n,C=d;try{C()}catch(R){bt(i,y,R)}}}o=o.next}while(o!==l)}}catch(R){bt(e,e.return,R)}}function H1(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Bf(e,n)}catch(o){bt(t,t.return,o)}}}function I1(t,e,n){n.props=lo(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(o){bt(t,e,o)}}function Mi(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof n=="function"?t.refCleanup=n(o):n.current=o}}catch(i){bt(t,e,i)}}function qe(t,e){var n=t.ref,o=t.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(i){bt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function P1(t){var e=t.type,n=t.memoizedProps,o=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break t;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(i){bt(t,t.return,i)}}function $r(t,e,n){try{var o=t.stateNode;_0(o,t.type,n,e),o[re]=e}catch(i){bt(t,t.return,i)}}function q1(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&jn(t.type)||t.tag===4}function ts(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||q1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&jn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function es(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xe));else if(o!==4&&(o===27&&jn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(es(t,e,n),t=t.sibling;t!==null;)es(t,e,n),t=t.sibling}function Kl(t,e,n){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(o!==4&&(o===27&&jn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Kl(t,e,n),t=t.sibling;t!==null;)Kl(t,e,n),t=t.sibling}function K1(t){var e=t.stateNode,n=t.memoizedProps;try{for(var o=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);te(e,o,n),e[Qt]=t,e[re]=n}catch(l){bt(t,t.return,l)}}var ln=!1,qt=!1,ns=!1,V1=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function p0(t,e){if(t=t.containerInfo,Cs=da,t=nf(t),Za(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break t}var s=0,d=-1,y=-1,C=0,R=0,M=t,S=null;e:for(;;){for(var A;M!==n||i!==0&&M.nodeType!==3||(d=s+i),M!==l||o!==0&&M.nodeType!==3||(y=s+o),M.nodeType===3&&(s+=M.nodeValue.length),(A=M.firstChild)!==null;)S=M,M=A;for(;;){if(M===t)break e;if(S===n&&++C===i&&(d=s),S===l&&++R===o&&(y=s),(A=M.nextSibling)!==null)break;M=S,S=M.parentNode}M=A}n=d===-1||y===-1?null:{start:d,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:t,selectionRange:n},da=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,l=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)i=t[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&l!==null){t=void 0,n=e,i=l.memoizedProps,l=l.memoizedState,o=n.stateNode;try{var P=lo(n.type,i);t=o.getSnapshotBeforeUpdate(P,l),o.__reactInternalSnapshotBeforeUpdate=t}catch(X){bt(n,n.return,X)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)As(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":As(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function G1(t,e,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:rn(t,n),o&4&&Bi(5,n);break;case 1:if(rn(t,n),o&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){bt(n,n.return,s)}else{var i=lo(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){bt(n,n.return,s)}}o&64&&H1(n),o&512&&Mi(n,n.return);break;case 3:if(rn(t,n),o&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Bf(t,e)}catch(s){bt(n,n.return,s)}}break;case 27:e===null&&o&4&&K1(n);case 26:case 5:rn(t,n),e===null&&o&4&&P1(n),o&512&&Mi(n,n.return);break;case 12:rn(t,n);break;case 31:rn(t,n),o&4&&Z1(t,n);break;case 13:rn(t,n),o&4&&Q1(t,n),o&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=S0.bind(null,n),G0(t,n))));break;case 22:if(o=n.memoizedState!==null||ln,!o){e=e!==null&&e.memoizedState!==null||qt,i=ln;var l=qt;ln=o,(qt=e)&&!l?sn(t,n,(n.subtreeFlags&8772)!==0):rn(t,n),ln=i,qt=l}break;case 30:break;default:rn(t,n)}}function Y1(t){var e=t.alternate;e!==null&&(t.alternate=null,Y1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ta(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var jt=null,ce=!1;function an(t,e,n){for(n=n.child;n!==null;)X1(t,e,n),n=n.sibling}function X1(t,e,n){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(ei,n)}catch{}switch(n.tag){case 26:qt||qe(n,e),an(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qt||qe(n,e);var o=jt,i=ce;jn(n.type)&&(jt=n.stateNode,ce=!1),an(t,e,n),Hi(n.stateNode),jt=o,ce=i;break;case 5:qt||qe(n,e);case 6:if(o=jt,i=ce,jt=null,an(t,e,n),jt=o,ce=i,jt!==null)if(ce)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(n.stateNode)}catch(l){bt(n,e,l)}else try{jt.removeChild(n.stateNode)}catch(l){bt(n,e,l)}break;case 18:jt!==null&&(ce?(t=jt,Hd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Jo(t)):Hd(jt,n.stateNode));break;case 4:o=jt,i=ce,jt=n.stateNode.containerInfo,ce=!0,an(t,e,n),jt=o,ce=i;break;case 0:case 11:case 14:case 15:En(2,n,e),qt||En(4,n,e),an(t,e,n);break;case 1:qt||(qe(n,e),o=n.stateNode,typeof o.componentWillUnmount=="function"&&I1(n,e,o)),an(t,e,n);break;case 21:an(t,e,n);break;case 22:qt=(o=qt)||n.memoizedState!==null,an(t,e,n),qt=o;break;default:an(t,e,n)}}function Z1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Jo(t)}catch(n){bt(e,e.return,n)}}}function Q1(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Jo(t)}catch(n){bt(e,e.return,n)}}function g0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new V1),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new V1),e;default:throw Error(c(435,t.tag))}}function Vl(t,e){var n=g0(t);e.forEach(function(o){if(!n.has(o)){n.add(o);var i=A0.bind(null,t,o);o.then(i,i)}})}function fe(t,e){var n=e.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o],l=t,s=e,d=s;t:for(;d!==null;){switch(d.tag){case 27:if(jn(d.type)){jt=d.stateNode,ce=!1;break t}break;case 5:jt=d.stateNode,ce=!1;break t;case 3:case 4:jt=d.stateNode.containerInfo,ce=!0;break t}d=d.return}if(jt===null)throw Error(c(160));X1(l,s,i),jt=null,ce=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)J1(e,t),e=e.sibling}var Le=null;function J1(t,e){var n=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fe(e,t),de(t),o&4&&(En(3,t,t.return),Bi(3,t),En(5,t,t.return));break;case 1:fe(e,t),de(t),o&512&&(qt||n===null||qe(n,n.return)),o&64&&ln&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var i=Le;if(fe(e,t),de(t),o&512&&(qt||n===null||qe(n,n.return)),o&4){var l=n!==null?n.memoizedState:null;if(o=t.memoizedState,n===null)if(o===null)if(t.stateNode===null){t:{o=t.type,n=t.memoizedProps,i=i.ownerDocument||i;e:switch(o){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ii]||l[Qt]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(o),i.head.insertBefore(l,i.querySelector("head > title"))),te(l,o,n),l[Qt]=t,Yt(l),o=l;break t;case"link":var s=Jd("link","href",i).get(o+(n.href||""));if(s){for(var d=0;d<s.length;d++)if(l=s[d],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(d,1);break e}}l=i.createElement(o),te(l,o,n),i.head.appendChild(l);break;case"meta":if(s=Jd("meta","content",i).get(o+(n.content||""))){for(d=0;d<s.length;d++)if(l=s[d],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(d,1);break e}}l=i.createElement(o),te(l,o,n),i.head.appendChild(l);break;default:throw Error(c(468,o))}l[Qt]=t,Yt(l),o=l}t.stateNode=o}else Wd(i,t.type,t.stateNode);else t.stateNode=Qd(i,o,t.memoizedProps);else l!==o?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,o===null?Wd(i,t.type,t.stateNode):Qd(i,o,t.memoizedProps)):o===null&&t.stateNode!==null&&$r(t,t.memoizedProps,n.memoizedProps)}break;case 27:fe(e,t),de(t),o&512&&(qt||n===null||qe(n,n.return)),n!==null&&o&4&&$r(t,t.memoizedProps,n.memoizedProps);break;case 5:if(fe(e,t),de(t),o&512&&(qt||n===null||qe(n,n.return)),t.flags&32){i=t.stateNode;try{wo(i,"")}catch(P){bt(t,t.return,P)}}o&4&&t.stateNode!=null&&(i=t.memoizedProps,$r(t,i,n!==null?n.memoizedProps:i)),o&1024&&(ns=!0);break;case 6:if(fe(e,t),de(t),o&4){if(t.stateNode===null)throw Error(c(162));o=t.memoizedProps,n=t.stateNode;try{n.nodeValue=o}catch(P){bt(t,t.return,P)}}break;case 3:if(ra=null,i=Le,Le=la(e.containerInfo),fe(e,t),Le=i,de(t),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(P){bt(t,t.return,P)}ns&&(ns=!1,W1(t));break;case 4:o=Le,Le=la(t.stateNode.containerInfo),fe(e,t),de(t),Le=o;break;case 12:fe(e,t),de(t);break;case 31:fe(e,t),de(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 13:fe(e,t),de(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yl=Zt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 22:i=t.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,C=ln,R=qt;if(ln=C||i,qt=R||y,fe(e,t),qt=R,ln=C,de(t),o&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||y||ln||qt||ao(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){y=n=e;try{if(l=y.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=y.stateNode;var M=y.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null;d.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(P){bt(y,y.return,P)}}}else if(e.tag===6){if(n===null){y=e;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(P){bt(y,y.return,P)}}}else if(e.tag===18){if(n===null){y=e;try{var A=y.stateNode;i?Id(A,!0):Id(y.stateNode,!1)}catch(P){bt(y,y.return,P)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}o&4&&(o=t.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Vl(t,n))));break;case 19:fe(e,t),de(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Vl(t,o)));break;case 30:break;case 21:break;default:fe(e,t),de(t)}}function de(t){var e=t.flags;if(e&2){try{for(var n,o=t.return;o!==null;){if(q1(o)){n=o;break}o=o.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var i=n.stateNode,l=ts(t);Kl(t,l,i);break;case 5:var s=n.stateNode;n.flags&32&&(wo(s,""),n.flags&=-33);var d=ts(t);Kl(t,d,s);break;case 3:case 4:var y=n.stateNode.containerInfo,C=ts(t);es(t,C,y);break;default:throw Error(c(161))}}catch(R){bt(t,t.return,R)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function W1(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;W1(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function rn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)G1(t,e.alternate,e),e=e.sibling}function ao(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:En(4,e,e.return),ao(e);break;case 1:qe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&I1(e,e.return,n),ao(e);break;case 27:Hi(e.stateNode);case 26:case 5:qe(e,e.return),ao(e);break;case 22:e.memoizedState===null&&ao(e);break;case 30:ao(e);break;default:ao(e)}t=t.sibling}}function sn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var o=e.alternate,i=t,l=e,s=l.flags;switch(l.tag){case 0:case 11:case 15:sn(i,l,n),Bi(4,l);break;case 1:if(sn(i,l,n),o=l,i=o.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){bt(o,o.return,C)}if(o=l,i=o.updateQueue,i!==null){var d=o.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Rf(y[i],d)}catch(C){bt(o,o.return,C)}}n&&s&64&&H1(l),Mi(l,l.return);break;case 27:K1(l);case 26:case 5:sn(i,l,n),n&&o===null&&s&4&&P1(l),Mi(l,l.return);break;case 12:sn(i,l,n);break;case 31:sn(i,l,n),n&&s&4&&Z1(i,l);break;case 13:sn(i,l,n),n&&s&4&&Q1(i,l);break;case 22:l.memoizedState===null&&sn(i,l,n),Mi(l,l.return);break;case 30:break;default:sn(i,l,n)}e=e.sibling}}function os(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&pi(n))}function is(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pi(t))}function _e(t,e,n,o){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$1(t,e,n,o),e=e.sibling}function $1(t,e,n,o){var i=e.flags;switch(e.tag){case 0:case 11:case 15:_e(t,e,n,o),i&2048&&Bi(9,e);break;case 1:_e(t,e,n,o);break;case 3:_e(t,e,n,o),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&pi(t)));break;case 12:if(i&2048){_e(t,e,n,o),t=e.stateNode;try{var l=e.memoizedProps,s=l.id,d=l.onPostCommit;typeof d=="function"&&d(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){bt(e,e.return,y)}}else _e(t,e,n,o);break;case 31:_e(t,e,n,o);break;case 13:_e(t,e,n,o);break;case 23:break;case 22:l=e.stateNode,s=e.alternate,e.memoizedState!==null?l._visibility&2?_e(t,e,n,o):Ti(t,e):l._visibility&2?_e(t,e,n,o):(l._visibility|=2,Ho(t,e,n,o,(e.subtreeFlags&10256)!==0||!1)),i&2048&&os(s,e);break;case 24:_e(t,e,n,o),i&2048&&is(e.alternate,e);break;default:_e(t,e,n,o)}}function Ho(t,e,n,o,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var l=t,s=e,d=n,y=o,C=s.flags;switch(s.tag){case 0:case 11:case 15:Ho(l,s,d,y,i),Bi(8,s);break;case 23:break;case 22:var R=s.stateNode;s.memoizedState!==null?R._visibility&2?Ho(l,s,d,y,i):Ti(l,s):(R._visibility|=2,Ho(l,s,d,y,i)),i&&C&2048&&os(s.alternate,s);break;case 24:Ho(l,s,d,y,i),i&&C&2048&&is(s.alternate,s);break;default:Ho(l,s,d,y,i)}e=e.sibling}}function Ti(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,o=e,i=o.flags;switch(o.tag){case 22:Ti(n,o),i&2048&&os(o.alternate,o);break;case 24:Ti(n,o),i&2048&&is(o.alternate,o);break;default:Ti(n,o)}e=e.sibling}}var Di=8192;function Io(t,e,n){if(t.subtreeFlags&Di)for(t=t.child;t!==null;)td(t,e,n),t=t.sibling}function td(t,e,n){switch(t.tag){case 26:Io(t,e,n),t.flags&Di&&t.memoizedState!==null&&iu(n,Le,t.memoizedState,t.memoizedProps);break;case 5:Io(t,e,n);break;case 3:case 4:var o=Le;Le=la(t.stateNode.containerInfo),Io(t,e,n),Le=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Di,Di=16777216,Io(t,e,n),Di=o):Io(t,e,n));break;default:Io(t,e,n)}}function ed(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Oi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Xt=o,od(o,t)}ed(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nd(t),t=t.sibling}function nd(t){switch(t.tag){case 0:case 11:case 15:Oi(t),t.flags&2048&&En(9,t,t.return);break;case 3:Oi(t);break;case 12:Oi(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Gl(t)):Oi(t);break;default:Oi(t)}}function Gl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var o=e[n];Xt=o,od(o,t)}ed(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:En(8,e,e.return),Gl(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Gl(e));break;default:Gl(e)}t=t.sibling}}function od(t,e){for(;Xt!==null;){var n=Xt;switch(n.tag){case 0:case 11:case 15:En(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:pi(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Xt=o;else t:for(n=t;Xt!==null;){o=Xt;var i=o.sibling,l=o.return;if(Y1(o),o===n){Xt=null;break t}if(i!==null){i.return=l,Xt=i;break t}Xt=l}}}var F0={getCacheForType:function(t){var e=Wt(Ht),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Wt(Ht).controller.signal}},w0=typeof WeakMap=="function"?WeakMap:Map,pt=0,Rt=null,it=null,at=0,vt=0,we=null,Rn=!1,Po=!1,ls=!1,cn=0,Lt=0,Bn=0,ro=0,as=0,ve=0,qo=0,ji=null,he=null,rs=!1,Yl=0,id=0,Xl=1/0,Zl=null,Mn=null,Vt=0,Tn=null,Ko=null,fn=0,ss=0,cs=null,ld=null,Ni=0,fs=null;function be(){return(pt&2)!==0&&at!==0?at&-at:E.T!==null?ys():wc()}function ad(){if(ve===0)if((at&536870912)===0||ft){var t=ol;ol<<=1,(ol&3932160)===0&&(ol=262144),ve=t}else ve=536870912;return t=ge.current,t!==null&&(t.flags|=32),ve}function xe(t,e,n){(t===Rt&&(vt===2||vt===9)||t.cancelPendingCommit!==null)&&(Vo(t,0),Dn(t,at,ve,!1)),oi(t,n),((pt&2)===0||t!==Rt)&&(t===Rt&&((pt&2)===0&&(ro|=n),Lt===4&&Dn(t,at,ve,!1)),Ke(t))}function rd(t,e,n){if((pt&6)!==0)throw Error(c(327));var o=!n&&(e&127)===0&&(e&t.expiredLanes)===0||ni(t,e),i=o?C0(t,e):hs(t,e,!0),l=o;do{if(i===0){Po&&!o&&Dn(t,e,0,!1);break}else{if(n=t.current.alternate,l&&!v0(n)){i=hs(t,e,!1),l=!1;continue}if(i===2){if(l=e,t.errorRecoveryDisabledLanes&l)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var d=t;i=ji;var y=d.current.memoizedState.isDehydrated;if(y&&(Vo(d,s).flags|=256),s=hs(d,s,!1),s!==2){if(ls&&!y){d.errorRecoveryDisabledLanes|=l,ro|=l,i=4;break t}l=he,he=i,l!==null&&(he===null?he=l:he.push.apply(he,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Vo(t,0),Dn(t,e,0,!0);break}t:{switch(o=t,l=i,l){case 0:case 1:throw Error(c(345));case 4:if((e&4194048)!==e)break;case 6:Dn(o,e,ve,!Rn);break t;case 2:he=null;break;case 3:case 5:break;default:throw Error(c(329))}if((e&62914560)===e&&(i=Yl+300-Zt(),10<i)){if(Dn(o,e,ve,!Rn),ll(o,0,!0)!==0)break t;fn=e,o.timeoutHandle=_d(sd.bind(null,o,n,he,Zl,rs,e,ve,ro,qo,Rn,l,"Throttled",-0,0),i);break t}sd(o,n,he,Zl,rs,e,ve,ro,qo,Rn,l,null,-0,0)}}break}while(!0);Ke(t)}function sd(t,e,n,o,i,l,s,d,y,C,R,M,S,A){if(t.timeoutHandle=-1,M=e.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xe},td(e,l,M);var P=(l&62914560)===l?Yl-Zt():(l&4194048)===l?id-Zt():0;if(P=lu(M,P),P!==null){fn=l,t.cancelPendingCommit=P(yd.bind(null,t,e,l,n,o,i,s,d,y,R,M,null,S,A)),Dn(t,l,s,!C);return}}yd(t,e,l,n,o,i,s,d,y)}function v0(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var i=n[o],l=i.getSnapshot;i=i.value;try{if(!ye(l(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dn(t,e,n,o){e&=~as,e&=~ro,t.suspendedLanes|=e,t.pingedLanes&=~e,o&&(t.warmLanes|=e),o=t.expirationTimes;for(var i=e;0<i;){var l=31-me(i),s=1<<l;o[l]=-1,i&=~s}n!==0&&pc(t,n,e)}function Ql(){return(pt&6)===0?(Li(0),!1):!0}function ds(){if(it!==null){if(vt===0)var t=it.return;else t=it,We=Wn=null,Ar(t),jo=null,Fi=0,t=it;for(;t!==null;)U1(t.alternate,t),t=t.return;it=null}}function Vo(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,I0(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),fn=0,ds(),Rt=t,it=n=Qe(t.current,null),at=e,vt=0,we=null,Rn=!1,Po=ni(t,e),ls=!1,qo=ve=as=ro=Bn=Lt=0,he=ji=null,rs=!1,(e&8)!==0&&(e|=e&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=e;0<o;){var i=31-me(o),l=1<<i;e|=t[i],o&=~l}return cn=e,pl(),n}function cd(t,e){tt=null,E.H=Ai,e===Oo||e===zl?(e=zf(),vt=3):e===mr?(e=zf(),vt=4):vt=e===qr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,we=e,it===null&&(Lt=1,Ul(t,Ae(e,t.current)))}function fd(){var t=ge.current;return t===null?!0:(at&4194048)===at?Me===null:(at&62914560)===at||(at&536870912)!==0?t===Me:!1}function dd(){var t=E.H;return E.H=Ai,t===null?Ai:t}function hd(){var t=E.A;return E.A=F0,t}function Jl(){Lt=4,Rn||(at&4194048)!==at&&ge.current!==null||(Po=!0),(Bn&134217727)===0&&(ro&134217727)===0||Rt===null||Dn(Rt,at,ve,!1)}function hs(t,e,n){var o=pt;pt|=2;var i=dd(),l=hd();(Rt!==t||at!==e)&&(Zl=null,Vo(t,e)),e=!1;var s=Lt;t:do try{if(vt!==0&&it!==null){var d=it,y=we;switch(vt){case 8:ds(),s=6;break t;case 3:case 2:case 9:case 6:ge.current===null&&(e=!0);var C=vt;if(vt=0,we=null,Go(t,d,y,C),n&&Po){s=0;break t}break;default:C=vt,vt=0,we=null,Go(t,d,y,C)}}b0(),s=Lt;break}catch(R){cd(t,R)}while(!0);return e&&t.shellSuspendCounter++,We=Wn=null,pt=o,E.H=i,E.A=l,it===null&&(Rt=null,at=0,pl()),s}function b0(){for(;it!==null;)xd(it)}function C0(t,e){var n=pt;pt|=2;var o=dd(),i=hd();Rt!==t||at!==e?(Zl=null,Xl=Zt()+500,Vo(t,e)):Po=ni(t,e);t:do try{if(vt!==0&&it!==null){e=it;var l=we;e:switch(vt){case 1:vt=0,we=null,Go(t,e,l,1);break;case 2:case 9:if(Cf(l)){vt=0,we=null,ud(e);break}e=function(){vt!==2&&vt!==9||Rt!==t||(vt=7),Ke(t)},l.then(e,e);break t;case 3:vt=7;break t;case 4:vt=5;break t;case 7:Cf(l)?(vt=0,we=null,ud(e)):(vt=0,we=null,Go(t,e,l,7));break;case 5:var s=null;switch(it.tag){case 26:s=it.memoizedState;case 5:case 27:var d=it;if(s?$d(s):d.stateNode.complete){vt=0,we=null;var y=d.sibling;if(y!==null)it=y;else{var C=d.return;C!==null?(it=C,Wl(C)):it=null}break e}}vt=0,we=null,Go(t,e,l,5);break;case 6:vt=0,we=null,Go(t,e,l,6);break;case 8:ds(),Lt=6;break t;default:throw Error(c(462))}}k0();break}catch(R){cd(t,R)}while(!0);return We=Wn=null,E.H=o,E.A=i,pt=n,it!==null?0:(Rt=null,at=0,pl(),Lt)}function k0(){for(;it!==null&&!$i();)xd(it)}function xd(t){var e=L1(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Wl(t):it=e}function ud(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=M1(n,e,e.pendingProps,e.type,void 0,at);break;case 11:e=M1(n,e,e.pendingProps,e.type.render,e.ref,at);break;case 5:Ar(e);default:U1(n,e),e=it=hf(e,cn),e=L1(n,e,cn)}t.memoizedProps=t.pendingProps,e===null?Wl(t):it=e}function Go(t,e,n,o){We=Wn=null,Ar(e),jo=null,Fi=0;var i=e.return;try{if(h0(t,i,e,n,at)){Lt=1,Ul(t,Ae(n,t.current)),it=null;return}}catch(l){if(i!==null)throw it=i,l;Lt=1,Ul(t,Ae(n,t.current)),it=null;return}e.flags&32768?(ft||o===1?t=!0:Po||(at&536870912)!==0?t=!1:(Rn=t=!0,(o===2||o===9||o===3||o===6)&&(o=ge.current,o!==null&&o.tag===13&&(o.flags|=16384))),md(e,t)):Wl(e)}function Wl(t){var e=t;do{if((e.flags&32768)!==0){md(e,Rn);return}t=e.return;var n=m0(e.alternate,e,cn);if(n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);Lt===0&&(Lt=5)}function md(t,e){do{var n=y0(t.alternate,t);if(n!==null){n.flags&=32767,it=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){it=t;return}it=t=n}while(t!==null);Lt=6,it=null}function yd(t,e,n,o,i,l,s,d,y){t.cancelPendingCommit=null;do $l();while(Vt!==0);if((pt&6)!==0)throw Error(c(327));if(e!==null){if(e===t.current)throw Error(c(177));if(l=e.lanes|e.childLanes,l|=tr,ox(t,n,l,s,d,y),t===Rt&&(it=Rt=null,at=0),Ko=e,Tn=t,fn=n,ss=l,cs=i,ld=o,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,E0(el,function(){return vd(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||o){o=E.T,E.T=null,i=j.p,j.p=2,s=pt,pt|=4;try{p0(t,e,n)}finally{pt=s,j.p=i,E.T=o}}Vt=1,pd(),gd(),Fd()}}function pd(){if(Vt===1){Vt=0;var t=Tn,e=Ko,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=E.T,E.T=null;var o=j.p;j.p=2;var i=pt;pt|=4;try{J1(e,t);var l=ks,s=nf(t.containerInfo),d=l.focusedElem,y=l.selectionRange;if(s!==d&&d&&d.ownerDocument&&ef(d.ownerDocument.documentElement,d)){if(y!==null&&Za(d)){var C=y.start,R=y.end;if(R===void 0&&(R=C),"selectionStart"in d)d.selectionStart=C,d.selectionEnd=Math.min(R,d.value.length);else{var M=d.ownerDocument||document,S=M&&M.defaultView||window;if(S.getSelection){var A=S.getSelection(),P=d.textContent.length,X=Math.min(y.start,P),At=y.end===void 0?X:Math.min(y.end,P);!A.extend&&X>At&&(s=At,At=X,X=s);var v=tf(d,X),p=tf(d,At);if(v&&p&&(A.rangeCount!==1||A.anchorNode!==v.node||A.anchorOffset!==v.offset||A.focusNode!==p.node||A.focusOffset!==p.offset)){var b=M.createRange();b.setStart(v.node,v.offset),A.removeAllRanges(),X>At?(A.addRange(b),A.extend(p.node,p.offset)):(b.setEnd(p.node,p.offset),A.addRange(b))}}}}for(M=[],A=d;A=A.parentNode;)A.nodeType===1&&M.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<M.length;d++){var B=M[d];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}da=!!Cs,ks=Cs=null}finally{pt=i,j.p=o,E.T=n}}t.current=e,Vt=2}}function gd(){if(Vt===2){Vt=0;var t=Tn,e=Ko,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=E.T,E.T=null;var o=j.p;j.p=2;var i=pt;pt|=4;try{G1(t,e.alternate,e)}finally{pt=i,j.p=o,E.T=n}}Vt=3}}function Fd(){if(Vt===4||Vt===3){Vt=0,mn();var t=Tn,e=Ko,n=fn,o=ld;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Vt=5:(Vt=0,Ko=Tn=null,wd(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Mn=null),Ba(n),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}if(o!==null){e=E.T,i=j.p,j.p=2,E.T=null;try{for(var l=t.onRecoverableError,s=0;s<o.length;s++){var d=o[s];l(d.value,{componentStack:d.stack})}}finally{E.T=e,j.p=i}}(fn&3)!==0&&$l(),Ke(t),i=t.pendingLanes,(n&261930)!==0&&(i&42)!==0?t===fs?Ni++:(Ni=0,fs=t):Ni=0,Li(0)}}function wd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,pi(e)))}function $l(){return pd(),gd(),Fd(),vd()}function vd(){if(Vt!==5)return!1;var t=Tn,e=ss;ss=0;var n=Ba(fn),o=E.T,i=j.p;try{j.p=32>n?32:n,E.T=null,n=cs,cs=null;var l=Tn,s=fn;if(Vt=0,Ko=Tn=null,fn=0,(pt&6)!==0)throw Error(c(331));var d=pt;if(pt|=4,nd(l.current),$1(l,l.current,s,n),pt=d,Li(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(ei,l)}catch{}return!0}finally{j.p=i,E.T=o,wd(t,e)}}function bd(t,e,n){e=Ae(n,e),e=Pr(t.stateNode,e,2),t=zn(t,e,2),t!==null&&(oi(t,2),Ke(t))}function bt(t,e,n){if(t.tag===3)bd(t,t,n);else for(;e!==null;){if(e.tag===3){bd(e,t,n);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Mn===null||!Mn.has(o))){t=Ae(n,t),n=C1(2),o=zn(e,n,2),o!==null&&(k1(n,o,e,t),oi(o,2),Ke(o));break}}e=e.return}}function xs(t,e,n){var o=t.pingCache;if(o===null){o=t.pingCache=new w0;var i=new Set;o.set(e,i)}else i=o.get(e),i===void 0&&(i=new Set,o.set(e,i));i.has(n)||(ls=!0,i.add(n),t=z0.bind(null,t,e,n),e.then(t,t))}function z0(t,e,n){var o=t.pingCache;o!==null&&o.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Rt===t&&(at&n)===n&&(Lt===4||Lt===3&&(at&62914560)===at&&300>Zt()-Yl?(pt&2)===0&&Vo(t,0):as|=n,qo===at&&(qo=0)),Ke(t)}function Cd(t,e){e===0&&(e=yc()),t=Zn(t,e),t!==null&&(oi(t,e),Ke(t))}function S0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cd(t,n)}function A0(t,e){var n=0;switch(t.tag){case 31:case 13:var o=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(c(314))}o!==null&&o.delete(e),Cd(t,n)}function E0(t,e){return ho(t,e)}var ta=null,Yo=null,us=!1,ea=!1,ms=!1,On=0;function Ke(t){t!==Yo&&t.next===null&&(Yo===null?ta=Yo=t:Yo=Yo.next=t),ea=!0,us||(us=!0,B0())}function Li(t,e){if(!ms&&ea){ms=!0;do for(var n=!1,o=ta;o!==null;){if(t!==0){var i=o.pendingLanes;if(i===0)var l=0;else{var s=o.suspendedLanes,d=o.pingedLanes;l=(1<<31-me(42|t)+1)-1,l&=i&~(s&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Ad(o,l))}else l=at,l=ll(o,o===Rt?l:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(l&3)===0||ni(o,l)||(n=!0,Ad(o,l));o=o.next}while(n);ms=!1}}function R0(){kd()}function kd(){ea=us=!1;var t=0;On!==0&&H0()&&(t=On);for(var e=Zt(),n=null,o=ta;o!==null;){var i=o.next,l=zd(o,e);l===0?(o.next=null,n===null?ta=i:n.next=i,i===null&&(Yo=n)):(n=o,(t!==0||(l&3)!==0)&&(ea=!0)),o=i}Vt!==0&&Vt!==5||Li(t),On!==0&&(On=0)}function zd(t,e){for(var n=t.suspendedLanes,o=t.pingedLanes,i=t.expirationTimes,l=t.pendingLanes&-62914561;0<l;){var s=31-me(l),d=1<<s,y=i[s];y===-1?((d&n)===0||(d&o)!==0)&&(i[s]=nx(d,e)):y<=e&&(t.expiredLanes|=d),l&=~d}if(e=Rt,n=at,n=ll(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,n===0||t===e&&(vt===2||vt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&xo(o),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||ni(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(o!==null&&xo(o),Ba(n)){case 2:case 8:n=uc;break;case 32:n=el;break;case 268435456:n=mc;break;default:n=el}return o=Sd.bind(null,t),n=ho(n,o),t.callbackPriority=e,t.callbackNode=n,e}return o!==null&&o!==null&&xo(o),t.callbackPriority=2,t.callbackNode=null,2}function Sd(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if($l()&&t.callbackNode!==n)return null;var o=at;return o=ll(t,t===Rt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(rd(t,o,e),zd(t,Zt()),t.callbackNode!=null&&t.callbackNode===n?Sd.bind(null,t):null)}function Ad(t,e){if($l())return null;rd(t,e,!0)}function B0(){P0(function(){(pt&6)!==0?ho(xc,R0):kd()})}function ys(){if(On===0){var t=To;t===0&&(t=nl,nl<<=1,(nl&261888)===0&&(nl=256)),On=t}return On}function Ed(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cl(""+t)}function Rd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function M0(t,e,n,o,i){if(e==="submit"&&n&&n.stateNode===i){var l=Ed((i[re]||null).action),s=o.submitter;s&&(e=(e=s[re]||null)?Ed(e.formAction):s.getAttribute("formAction"),e!==null&&(l=e,s=null));var d=new xl("action","action",null,o,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(On!==0){var y=s?Rd(i,s):new FormData(i);Nr(n,{pending:!0,data:y,method:i.method,action:l},null,y)}}else typeof l=="function"&&(d.preventDefault(),y=s?Rd(i,s):new FormData(i),Nr(n,{pending:!0,data:y,method:i.method,action:l},l,y))},currentTarget:i}]})}}for(var ps=0;ps<$a.length;ps++){var gs=$a[ps],T0=gs.toLowerCase(),D0=gs[0].toUpperCase()+gs.slice(1);Ne(T0,"on"+D0)}Ne(af,"onAnimationEnd"),Ne(rf,"onAnimationIteration"),Ne(sf,"onAnimationStart"),Ne("dblclick","onDoubleClick"),Ne("focusin","onFocus"),Ne("focusout","onBlur"),Ne(Zx,"onTransitionRun"),Ne(Qx,"onTransitionStart"),Ne(Jx,"onTransitionCancel"),Ne(cf,"onTransitionEnd"),go("onMouseEnter",["mouseout","mouseover"]),go("onMouseLeave",["mouseout","mouseover"]),go("onPointerEnter",["pointerout","pointerover"]),go("onPointerLeave",["pointerout","pointerover"]),Vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Vn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_i));function Bd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var o=t[n],i=o.event;o=o.listeners;t:{var l=void 0;if(e)for(var s=o.length-1;0<=s;s--){var d=o[s],y=d.instance,C=d.currentTarget;if(d=d.listener,y!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=C;try{l(i)}catch(R){yl(R)}i.currentTarget=null,l=y}else for(s=0;s<o.length;s++){if(d=o[s],y=d.instance,C=d.currentTarget,d=d.listener,y!==l&&i.isPropagationStopped())break t;l=d,i.currentTarget=C;try{l(i)}catch(R){yl(R)}i.currentTarget=null,l=y}}}}function lt(t,e){var n=e[Ma];n===void 0&&(n=e[Ma]=new Set);var o=t+"__bubble";n.has(o)||(Md(e,t,2,!1),n.add(o))}function Fs(t,e,n){var o=0;e&&(o|=4),Md(n,t,o,e)}var na="_reactListening"+Math.random().toString(36).slice(2);function ws(t){if(!t[na]){t[na]=!0,Cc.forEach(function(n){n!=="selectionchange"&&(O0.has(n)||Fs(n,!1,t),Fs(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[na]||(e[na]=!0,Fs("selectionchange",!1,e))}}function Md(t,e,n,o){switch(ah(e)){case 2:var i=su;break;case 8:i=cu;break;default:i=js}n=i.bind(null,e,n,t),i=void 0,!Ha||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),o?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vs(t,e,n,o,i){var l=o;if((e&1)===0&&(e&2)===0&&o!==null)t:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var d=o.stateNode.containerInfo;if(d===i)break;if(s===4)for(s=o.return;s!==null;){var y=s.tag;if((y===3||y===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;d!==null;){if(s=mo(d),s===null)return;if(y=s.tag,y===5||y===6||y===26||y===27){o=l=s;continue t}d=d.parentNode}}o=o.return}jc(function(){var C=l,R=_a(n),M=[];t:{var S=ff.get(t);if(S!==void 0){var A=xl,P=t;switch(t){case"keypress":if(dl(n)===0)break t;case"keydown":case"keyup":A=Ax;break;case"focusin":P="focus",A=Ka;break;case"focusout":P="blur",A=Ka;break;case"beforeblur":case"afterblur":A=Ka;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Bx;break;case af:case rf:case sf:A=gx;break;case cf:A=Tx;break;case"scroll":case"scrollend":A=xx;break;case"wheel":A=Ox;break;case"copy":case"cut":case"paste":A=wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Hc;break;case"toggle":case"beforetoggle":A=Nx}var X=(e&4)!==0,At=!X&&(t==="scroll"||t==="scrollend"),v=X?S!==null?S+"Capture":null:S;X=[];for(var p=C,b;p!==null;){var B=p;if(b=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||b===null||v===null||(B=ai(p,v),B!=null&&X.push(Ui(p,B,b))),At)break;p=p.return}0<X.length&&(S=new A(S,P,null,n,R),M.push({event:S,listeners:X}))}}if((e&7)===0){t:{if(S=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",S&&n!==La&&(P=n.relatedTarget||n.fromElement)&&(mo(P)||P[uo]))break t;if((A||S)&&(S=R.window===R?R:(S=R.ownerDocument)?S.defaultView||S.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=C,P=P?mo(P):null,P!==null&&(At=m(P),X=P.tag,P!==At||X!==5&&X!==27&&X!==6)&&(P=null)):(A=null,P=C),A!==P)){if(X=_c,B="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(X=Hc,B="onPointerLeave",v="onPointerEnter",p="pointer"),At=A==null?S:li(A),b=P==null?S:li(P),S=new X(B,p+"leave",A,n,R),S.target=At,S.relatedTarget=b,B=null,mo(R)===C&&(X=new X(v,p+"enter",P,n,R),X.target=b,X.relatedTarget=At,B=X),At=B,A&&P)e:{for(X=j0,v=A,p=P,b=0,B=v;B;B=X(B))b++;B=0;for(var V=p;V;V=X(V))B++;for(;0<b-B;)v=X(v),b--;for(;0<B-b;)p=X(p),B--;for(;b--;){if(v===p||p!==null&&v===p.alternate){X=v;break e}v=X(v),p=X(p)}X=null}else X=null;A!==null&&Td(M,S,A,X,!1),P!==null&&At!==null&&Td(M,At,P,X,!0)}}t:{if(S=C?li(C):window,A=S.nodeName&&S.nodeName.toLowerCase(),A==="select"||A==="input"&&S.type==="file")var ut=Xc;else if(Gc(S))if(Zc)ut=Gx;else{ut=Kx;var q=qx}else A=S.nodeName,!A||A.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?C&&Na(C.elementType)&&(ut=Xc):ut=Vx;if(ut&&(ut=ut(t,C))){Yc(M,ut,n,R);break t}q&&q(t,S,C),t==="focusout"&&C&&S.type==="number"&&C.memoizedProps.value!=null&&ja(S,"number",S.value)}switch(q=C?li(C):window,t){case"focusin":(Gc(q)||q.contentEditable==="true")&&(ko=q,Qa=C,ui=null);break;case"focusout":ui=Qa=ko=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,of(M,n,R);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":of(M,n,R)}var nt;if(Ga)t:{switch(t){case"compositionstart":var rt="onCompositionStart";break t;case"compositionend":rt="onCompositionEnd";break t;case"compositionupdate":rt="onCompositionUpdate";break t}rt=void 0}else Co?Kc(t,n)&&(rt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(rt="onCompositionStart");rt&&(Ic&&n.locale!=="ko"&&(Co||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Co&&(nt=Nc()):(gn=R,Ia="value"in gn?gn.value:gn.textContent,Co=!0)),q=oa(C,rt),0<q.length&&(rt=new Uc(rt,t,null,n,R),M.push({event:rt,listeners:q}),nt?rt.data=nt:(nt=Vc(n),nt!==null&&(rt.data=nt)))),(nt=_x?Ux(t,n):Hx(t,n))&&(rt=oa(C,"onBeforeInput"),0<rt.length&&(q=new Uc("onBeforeInput","beforeinput",null,n,R),M.push({event:q,listeners:rt}),q.data=nt)),M0(M,t,C,n,R)}Bd(M,e)})}function Ui(t,e,n){return{instance:t,listener:e,currentTarget:n}}function oa(t,e){for(var n=e+"Capture",o=[];t!==null;){var i=t,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=ai(t,n),i!=null&&o.unshift(Ui(t,i,l)),i=ai(t,e),i!=null&&o.push(Ui(t,i,l))),t.tag===3)return o;t=t.return}return[]}function j0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Td(t,e,n,o,i){for(var l=e._reactName,s=[];n!==null&&n!==o;){var d=n,y=d.alternate,C=d.stateNode;if(d=d.tag,y!==null&&y===o)break;d!==5&&d!==26&&d!==27||C===null||(y=C,i?(C=ai(n,l),C!=null&&s.unshift(Ui(n,C,y))):i||(C=ai(n,l),C!=null&&s.push(Ui(n,C,y)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var N0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function Dd(t){return(typeof t=="string"?t:""+t).replace(N0,`
`).replace(L0,"")}function Od(t,e){return e=Dd(e),Dd(t)===e}function St(t,e,n,o,i,l){switch(n){case"children":typeof o=="string"?e==="body"||e==="textarea"&&o===""||wo(t,o):(typeof o=="number"||typeof o=="bigint")&&e!=="body"&&wo(t,""+o);break;case"className":rl(t,"class",o);break;case"tabIndex":rl(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":rl(t,n,o);break;case"style":Dc(t,o,l);break;case"data":if(e!=="object"){rl(t,"data",o);break}case"src":case"href":if(o===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=cl(""+o),t.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",i.name,i,null),St(t,e,"formEncType",i.formEncType,i,null),St(t,e,"formMethod",i.formMethod,i,null),St(t,e,"formTarget",i.formTarget,i,null)):(St(t,e,"encType",i.encType,i,null),St(t,e,"method",i.method,i,null),St(t,e,"target",i.target,i,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(n);break}o=cl(""+o),t.setAttribute(n,o);break;case"onClick":o!=null&&(t.onclick=Xe);break;case"onScroll":o!=null&&lt("scroll",t);break;case"onScrollEnd":o!=null&&lt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}n=cl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""+o):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":o===!0?t.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(n,o):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(n,o):t.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(n):t.setAttribute(n,o);break;case"popover":lt("beforetoggle",t),lt("toggle",t),al(t,"popover",o);break;case"xlinkActuate":Ye(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ye(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ye(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ye(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ye(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ye(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ye(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":al(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=dx.get(n)||n,al(t,n,o))}}function bs(t,e,n,o,i,l){switch(n){case"style":Dc(t,o,l);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(i.children!=null)throw Error(c(60));t.innerHTML=n}}break;case"children":typeof o=="string"?wo(t,o):(typeof o=="number"||typeof o=="bigint")&&wo(t,""+o);break;case"onScroll":o!=null&&lt("scroll",t);break;case"onScrollEnd":o!=null&&lt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Xe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kc.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),l=t[re]||null,l=l!=null?l[n]:null,typeof l=="function"&&t.removeEventListener(e,l,i),typeof o=="function")){typeof l!="function"&&l!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,o,i);break t}n in t?t[n]=o:o===!0?t.setAttribute(n,""):al(t,n,o)}}}function te(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":lt("error",t),lt("load",t);var o=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var s=n[l];if(s!=null)switch(l){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:St(t,e,l,s,n,null)}}i&&St(t,e,"srcSet",n.srcSet,n,null),o&&St(t,e,"src",n.src,n,null);return;case"input":lt("invalid",t);var d=l=s=i=null,y=null,C=null;for(o in n)if(n.hasOwnProperty(o)){var R=n[o];if(R!=null)switch(o){case"name":i=R;break;case"type":s=R;break;case"checked":y=R;break;case"defaultChecked":C=R;break;case"value":l=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,e));break;default:St(t,e,o,R,n,null)}}Rc(t,l,d,y,C,s,i,!1);return;case"select":lt("invalid",t),o=s=l=null;for(i in n)if(n.hasOwnProperty(i)&&(d=n[i],d!=null))switch(i){case"value":l=d;break;case"defaultValue":s=d;break;case"multiple":o=d;default:St(t,e,i,d,n,null)}e=l,n=s,t.multiple=!!o,e!=null?Fo(t,!!o,e,!1):n!=null&&Fo(t,!!o,n,!0);return;case"textarea":lt("invalid",t),l=i=o=null;for(s in n)if(n.hasOwnProperty(s)&&(d=n[s],d!=null))switch(s){case"value":o=d;break;case"defaultValue":i=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:St(t,e,s,d,n,null)}Mc(t,o,i,l);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(o=n[y],o!=null))switch(y){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:St(t,e,y,o,n,null)}return;case"dialog":lt("beforetoggle",t),lt("toggle",t),lt("cancel",t),lt("close",t);break;case"iframe":case"object":lt("load",t);break;case"video":case"audio":for(o=0;o<_i.length;o++)lt(_i[o],t);break;case"image":lt("error",t),lt("load",t);break;case"details":lt("toggle",t);break;case"embed":case"source":case"link":lt("error",t),lt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(o=n[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,e));default:St(t,e,C,o,n,null)}return;default:if(Na(e)){for(R in n)n.hasOwnProperty(R)&&(o=n[R],o!==void 0&&bs(t,e,R,o,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(o=n[d],o!=null&&St(t,e,d,o,n,null))}function _0(t,e,n,o){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,d=null,y=null,C=null,R=null;for(A in n){var M=n[A];if(n.hasOwnProperty(A)&&M!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":y=M;default:o.hasOwnProperty(A)||St(t,e,A,null,o,M)}}for(var S in o){var A=o[S];if(M=n[S],o.hasOwnProperty(S)&&(A!=null||M!=null))switch(S){case"type":l=A;break;case"name":i=A;break;case"checked":C=A;break;case"defaultChecked":R=A;break;case"value":s=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,e));break;default:A!==M&&St(t,e,S,A,o,M)}}Oa(t,s,d,y,C,R,l,i);return;case"select":A=s=d=S=null;for(l in n)if(y=n[l],n.hasOwnProperty(l)&&y!=null)switch(l){case"value":break;case"multiple":A=y;default:o.hasOwnProperty(l)||St(t,e,l,null,o,y)}for(i in o)if(l=o[i],y=n[i],o.hasOwnProperty(i)&&(l!=null||y!=null))switch(i){case"value":S=l;break;case"defaultValue":d=l;break;case"multiple":s=l;default:l!==y&&St(t,e,i,l,o,y)}e=d,n=s,o=A,S!=null?Fo(t,!!n,S,!1):!!o!=!!n&&(e!=null?Fo(t,!!n,e,!0):Fo(t,!!n,n?[]:"",!1));return;case"textarea":A=S=null;for(d in n)if(i=n[d],n.hasOwnProperty(d)&&i!=null&&!o.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:St(t,e,d,null,o,i)}for(s in o)if(i=o[s],l=n[s],o.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":S=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==l&&St(t,e,s,i,o,l)}Bc(t,S,A);return;case"option":for(var P in n)if(S=n[P],n.hasOwnProperty(P)&&S!=null&&!o.hasOwnProperty(P))switch(P){case"selected":t.selected=!1;break;default:St(t,e,P,null,o,S)}for(y in o)if(S=o[y],A=n[y],o.hasOwnProperty(y)&&S!==A&&(S!=null||A!=null))switch(y){case"selected":t.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:St(t,e,y,S,o,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in n)S=n[X],n.hasOwnProperty(X)&&S!=null&&!o.hasOwnProperty(X)&&St(t,e,X,null,o,S);for(C in o)if(S=o[C],A=n[C],o.hasOwnProperty(C)&&S!==A&&(S!=null||A!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,e));break;default:St(t,e,C,S,o,A)}return;default:if(Na(e)){for(var At in n)S=n[At],n.hasOwnProperty(At)&&S!==void 0&&!o.hasOwnProperty(At)&&bs(t,e,At,void 0,o,S);for(R in o)S=o[R],A=n[R],!o.hasOwnProperty(R)||S===A||S===void 0&&A===void 0||bs(t,e,R,S,o,A);return}}for(var v in n)S=n[v],n.hasOwnProperty(v)&&S!=null&&!o.hasOwnProperty(v)&&St(t,e,v,null,o,S);for(M in o)S=o[M],A=n[M],!o.hasOwnProperty(M)||S===A||S==null&&A==null||St(t,e,M,S,o,A)}function jd(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var i=n[o],l=i.transferSize,s=i.initiatorType,d=i.duration;if(l&&d&&jd(s)){for(s=0,d=i.responseEnd,o+=1;o<n.length;o++){var y=n[o],C=y.startTime;if(C>d)break;var R=y.transferSize,M=y.initiatorType;R&&jd(M)&&(y=y.responseEnd,s+=R*(y<d?1:(d-C)/(y-C)))}if(--o,e+=8*(l+s)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Cs=null,ks=null;function ia(t){return t.nodeType===9?t:t.ownerDocument}function Nd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ld(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function zs(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ss=null;function H0(){var t=window.event;return t&&t.type==="popstate"?t===Ss?!1:(Ss=t,!0):(Ss=null,!1)}var _d=typeof setTimeout=="function"?setTimeout:void 0,I0=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(q0)}:_d;function q0(t){setTimeout(function(){throw t})}function jn(t){return t==="head"}function Hd(t,e){var n=e,o=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(o===0){t.removeChild(i),Jo(e);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")Hi(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Hi(n);for(var l=n.firstChild;l;){var s=l.nextSibling,d=l.nodeName;l[ii]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=s}}else n==="body"&&Hi(t.ownerDocument.body);n=i}while(n);Jo(e)}function Id(t,e){var n=t;t=0;do{var o=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=o}while(n)}function As(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":As(n),Ta(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function K0(t,e,n,o){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ii])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(l=t.getAttribute("rel"),l==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(l!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(l=t.getAttribute("src"),(l!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===l)return t}else return t;if(t=Te(t.nextSibling),t===null)break}return null}function V0(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Te(t.nextSibling),t===null))return null;return t}function Pd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Te(t.nextSibling),t===null))return null;return t}function Es(t){return t.data==="$?"||t.data==="$~"}function Rs(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function G0(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var o=function(){e(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Te(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Bs=null;function qd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Te(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Kd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Vd(t,e,n){switch(e=ia(n),t){case"html":if(t=e.documentElement,!t)throw Error(c(452));return t;case"head":if(t=e.head,!t)throw Error(c(453));return t;case"body":if(t=e.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}function Hi(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ta(t)}var De=new Map,Gd=new Set;function la(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var dn=j.d;j.d={f:Y0,r:X0,D:Z0,C:Q0,L:J0,m:W0,X:tu,S:$0,M:eu};function Y0(){var t=dn.f(),e=Ql();return t||e}function X0(t){var e=yo(t);e!==null&&e.tag===5&&e.type==="form"?c1(e):dn.r(t)}var Xo=typeof document>"u"?null:document;function Yd(t,e,n){var o=Xo;if(o&&typeof e=="string"&&e){var i=ze(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Gd.has(i)||(Gd.add(i),t={rel:t,crossOrigin:n,href:e},o.querySelector(i)===null&&(e=o.createElement("link"),te(e,"link",t),Yt(e),o.head.appendChild(e)))}}function Z0(t){dn.D(t),Yd("dns-prefetch",t,null)}function Q0(t,e){dn.C(t,e),Yd("preconnect",t,e)}function J0(t,e,n){dn.L(t,e,n);var o=Xo;if(o&&t&&e){var i='link[rel="preload"][as="'+ze(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+ze(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+ze(n.imageSizes)+'"]')):i+='[href="'+ze(t)+'"]';var l=i;switch(e){case"style":l=Zo(t);break;case"script":l=Qo(t)}De.has(l)||(t=O({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),De.set(l,t),o.querySelector(i)!==null||e==="style"&&o.querySelector(Ii(l))||e==="script"&&o.querySelector(Pi(l))||(e=o.createElement("link"),te(e,"link",t),Yt(e),o.head.appendChild(e)))}}function W0(t,e){dn.m(t,e);var n=Xo;if(n&&t){var o=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+ze(o)+'"][href="'+ze(t)+'"]',l=i;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Qo(t)}if(!De.has(l)&&(t=O({rel:"modulepreload",href:t},e),De.set(l,t),n.querySelector(i)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pi(l)))return}o=n.createElement("link"),te(o,"link",t),Yt(o),n.head.appendChild(o)}}}function $0(t,e,n){dn.S(t,e,n);var o=Xo;if(o&&t){var i=po(o).hoistableStyles,l=Zo(t);e=e||"default";var s=i.get(l);if(!s){var d={loading:0,preload:null};if(s=o.querySelector(Ii(l)))d.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},n),(n=De.get(l))&&Ms(t,n);var y=s=o.createElement("link");Yt(y),te(y,"link",t),y._p=new Promise(function(C,R){y.onload=C,y.onerror=R}),y.addEventListener("load",function(){d.loading|=1}),y.addEventListener("error",function(){d.loading|=2}),d.loading|=4,aa(s,e,o)}s={type:"stylesheet",instance:s,count:1,state:d},i.set(l,s)}}}function tu(t,e){dn.X(t,e);var n=Xo;if(n&&t){var o=po(n).hoistableScripts,i=Qo(t),l=o.get(i);l||(l=n.querySelector(Pi(i)),l||(t=O({src:t,async:!0},e),(e=De.get(i))&&Ts(t,e),l=n.createElement("script"),Yt(l),te(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},o.set(i,l))}}function eu(t,e){dn.M(t,e);var n=Xo;if(n&&t){var o=po(n).hoistableScripts,i=Qo(t),l=o.get(i);l||(l=n.querySelector(Pi(i)),l||(t=O({src:t,async:!0,type:"module"},e),(e=De.get(i))&&Ts(t,e),l=n.createElement("script"),Yt(l),te(l,"link",t),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},o.set(i,l))}}function Xd(t,e,n,o){var i=(i=ot.current)?la(i):null;if(!i)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Zo(n.href),n=po(i).hoistableStyles,o=n.get(e),o||(o={type:"style",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Zo(n.href);var l=po(i).hoistableStyles,s=l.get(t);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(t,s),(l=i.querySelector(Ii(t)))&&!l._p&&(s.instance=l,s.state.loading=5),De.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},De.set(t,n),l||nu(i,t,n,s.state))),e&&o===null)throw Error(c(528,""));return s}if(e&&o!==null)throw Error(c(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Qo(n),n=po(i).hoistableScripts,o=n.get(e),o||(o={type:"script",instance:null,count:0,state:null},n.set(e,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Zo(t){return'href="'+ze(t)+'"'}function Ii(t){return'link[rel="stylesheet"]['+t+"]"}function Zd(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function nu(t,e,n,o){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?o.loading=1:(e=t.createElement("link"),o.preload=e,e.addEventListener("load",function(){return o.loading|=1}),e.addEventListener("error",function(){return o.loading|=2}),te(e,"link",n),Yt(e),t.head.appendChild(e))}function Qo(t){return'[src="'+ze(t)+'"]'}function Pi(t){return"script[async]"+t}function Qd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var o=t.querySelector('style[data-href~="'+ze(n.href)+'"]');if(o)return e.instance=o,Yt(o),o;var i=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Yt(o),te(o,"style",i),aa(o,n.precedence,t),e.instance=o;case"stylesheet":i=Zo(n.href);var l=t.querySelector(Ii(i));if(l)return e.state.loading|=4,e.instance=l,Yt(l),l;o=Zd(n),(i=De.get(i))&&Ms(o,i),l=(t.ownerDocument||t).createElement("link"),Yt(l);var s=l;return s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),te(l,"link",o),e.state.loading|=4,aa(l,n.precedence,t),e.instance=l;case"script":return l=Qo(n.src),(i=t.querySelector(Pi(l)))?(e.instance=i,Yt(i),i):(o=n,(i=De.get(l))&&(o=O({},n),Ts(o,i)),t=t.ownerDocument||t,i=t.createElement("script"),Yt(i),te(i,"link",o),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(c(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(o=e.instance,e.state.loading|=4,aa(o,n.precedence,t));return e.instance}function aa(t,e,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,l=i,s=0;s<o.length;s++){var d=o[s];if(d.dataset.precedence===e)l=d;else if(l!==i)break}l?l.parentNode.insertBefore(t,l.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Ms(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ts(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ra=null;function Jd(t,e,n){if(ra===null){var o=new Map,i=ra=new Map;i.set(n,o)}else i=ra,o=i.get(n),o||(o=new Map,i.set(n,o));if(o.has(t))return o;for(o.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var l=n[i];if(!(l[ii]||l[Qt]||t==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(e)||"";s=t+s;var d=o.get(s);d?d.push(l):o.set(s,[l])}}return o}function Wd(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function ou(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function $d(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function iu(t,e,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Zo(o.href),l=e.querySelector(Ii(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=sa.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=l,Yt(l);return}l=e.ownerDocument||e,o=Zd(o),(i=De.get(i))&&Ms(o,i),l=l.createElement("link"),Yt(l);var s=l;s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),te(l,"link",o),n.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=sa.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Ds=0;function lu(t,e){return t.stylesheets&&t.count===0&&fa(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var o=setTimeout(function(){if(t.stylesheets&&fa(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4+e);0<t.imgBytes&&Ds===0&&(Ds=62500*U0());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fa(t,t.stylesheets),t.unsuspend)){var l=t.unsuspend;t.unsuspend=null,l()}},(t.imgBytes>Ds?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(i)}}:null}function sa(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fa(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ca=null;function fa(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ca=new Map,e.forEach(au,t),ca=null,sa.call(t))}function au(t,e){if(!(e.state.loading&4)){var n=ca.get(t);if(n)var o=n.get(null);else{n=new Map,ca.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),o=s)}o&&n.set(null,o)}i=e.instance,s=i.getAttribute("data-precedence"),l=n.get(s)||o,l===o&&n.set(null,i),n.set(s,i),this.count++,o=sa.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),l?l.parentNode.insertBefore(i,l.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var qi={$$typeof:_,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function ru(t,e,n,o,i,l,s,d,y){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ea(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.hiddenUpdates=Ea(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function th(t,e,n,o,i,l,s,d,y,C,R,M){return t=new ru(t,e,n,s,y,C,R,M,d),e=1,l===!0&&(e|=24),l=pe(3,null,null,e),t.current=l,l.stateNode=t,e=hr(),e.refCount++,t.pooledCache=e,e.refCount++,l.memoizedState={element:o,isDehydrated:n,cache:e},yr(l),t}function eh(t){return t?(t=Ao,t):Ao}function nh(t,e,n,o,i,l){i=eh(i),o.context===null?o.context=i:o.pendingContext=i,o=kn(e),o.payload={element:n},l=l===void 0?null:l,l!==null&&(o.callback=l),n=zn(t,o,e),n!==null&&(xe(n,t,e),vi(n,t,e))}function oh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Os(t,e){oh(t,e),(t=t.alternate)&&oh(t,e)}function ih(t){if(t.tag===13||t.tag===31){var e=Zn(t,67108864);e!==null&&xe(e,t,67108864),Os(t,67108864)}}function lh(t){if(t.tag===13||t.tag===31){var e=be();e=Ra(e);var n=Zn(t,e);n!==null&&xe(n,t,e),Os(t,e)}}var da=!0;function su(t,e,n,o){var i=E.T;E.T=null;var l=j.p;try{j.p=2,js(t,e,n,o)}finally{j.p=l,E.T=i}}function cu(t,e,n,o){var i=E.T;E.T=null;var l=j.p;try{j.p=8,js(t,e,n,o)}finally{j.p=l,E.T=i}}function js(t,e,n,o){if(da){var i=Ns(o);if(i===null)vs(t,e,o,ha,n),rh(t,o);else if(du(i,t,e,n,o))o.stopPropagation();else if(rh(t,o),e&4&&-1<fu.indexOf(t)){for(;i!==null;){var l=yo(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Kn(l.pendingLanes);if(s!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var y=1<<31-me(s);d.entanglements[1]|=y,s&=~y}Ke(l),(pt&6)===0&&(Xl=Zt()+500,Li(0))}}break;case 31:case 13:d=Zn(l,2),d!==null&&xe(d,l,2),Ql(),Os(l,2)}if(l=Ns(o),l===null&&vs(t,e,o,ha,n),l===i)break;i=l}i!==null&&o.stopPropagation()}else vs(t,e,o,null,n)}}function Ns(t){return t=_a(t),Ls(t)}var ha=null;function Ls(t){if(ha=null,t=mo(t),t!==null){var e=m(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=z(e),t!==null)return t;t=null}else if(n===31){if(t=F(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return ha=t,null}function ah(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tl()){case xc:return 2;case uc:return 8;case el:case Qh:return 32;case mc:return 268435456;default:return 32}default:return 32}}var _s=!1,Nn=null,Ln=null,_n=null,Ki=new Map,Vi=new Map,Un=[],fu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rh(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Ki.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(e.pointerId)}}function Gi(t,e,n,o,i,l){return t===null||t.nativeEvent!==l?(t={blockedOn:e,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[i]},e!==null&&(e=yo(e),e!==null&&ih(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function du(t,e,n,o,i){switch(e){case"focusin":return Nn=Gi(Nn,t,e,n,o,i),!0;case"dragenter":return Ln=Gi(Ln,t,e,n,o,i),!0;case"mouseover":return _n=Gi(_n,t,e,n,o,i),!0;case"pointerover":var l=i.pointerId;return Ki.set(l,Gi(Ki.get(l)||null,t,e,n,o,i)),!0;case"gotpointercapture":return l=i.pointerId,Vi.set(l,Gi(Vi.get(l)||null,t,e,n,o,i)),!0}return!1}function sh(t){var e=mo(t.target);if(e!==null){var n=m(e);if(n!==null){if(e=n.tag,e===13){if(e=z(n),e!==null){t.blockedOn=e,vc(t.priority,function(){lh(n)});return}}else if(e===31){if(e=F(n),e!==null){t.blockedOn=e,vc(t.priority,function(){lh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ns(t.nativeEvent);if(n===null){n=t.nativeEvent;var o=new n.constructor(n.type,n);La=o,n.target.dispatchEvent(o),La=null}else return e=yo(n),e!==null&&ih(e),t.blockedOn=n,!1;e.shift()}return!0}function ch(t,e,n){xa(t)&&n.delete(e)}function hu(){_s=!1,Nn!==null&&xa(Nn)&&(Nn=null),Ln!==null&&xa(Ln)&&(Ln=null),_n!==null&&xa(_n)&&(_n=null),Ki.forEach(ch),Vi.forEach(ch)}function ua(t,e){t.blockedOn===e&&(t.blockedOn=null,_s||(_s=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,hu)))}var ma=null;function fh(t){ma!==t&&(ma=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ma===t&&(ma=null);for(var e=0;e<t.length;e+=3){var n=t[e],o=t[e+1],i=t[e+2];if(typeof o!="function"){if(Ls(o||n)===null)continue;break}var l=yo(n);l!==null&&(t.splice(e,3),e-=3,Nr(l,{pending:!0,data:i,method:n.method,action:o},o,i))}}))}function Jo(t){function e(y){return ua(y,t)}Nn!==null&&ua(Nn,t),Ln!==null&&ua(Ln,t),_n!==null&&ua(_n,t),Ki.forEach(e),Vi.forEach(e);for(var n=0;n<Un.length;n++){var o=Un[n];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&Un.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var i=n[o],l=n[o+1],s=i[re]||null;if(typeof l=="function")s||fh(n);else if(s){var d=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[re]||null)d=s.formAction;else if(Ls(i)!==null)continue}else d=s.action;typeof d=="function"?n[o+1]=d:(n.splice(o,3),o-=3),fh(n)}}}function dh(){function t(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Us(t){this._internalRoot=t}ya.prototype.render=Us.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(c(409));var n=e.current,o=be();nh(n,o,t,e,null,null)},ya.prototype.unmount=Us.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nh(t.current,2,null,t,null,null),Ql(),e[uo]=null}};function ya(t){this._internalRoot=t}ya.prototype.unstable_scheduleHydration=function(t){if(t){var e=wc();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&sh(t)}};var hh=r.version;if(hh!=="19.2.7")throw Error(c(527,hh,"19.2.7"));j.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=u(e),t=t!==null?k(t):null,t=t===null?null:t.stateNode,t};var xu={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{ei=pa.inject(xu),ue=pa}catch{}}return Xi.createRoot=function(t,e){if(!x(t))throw Error(c(299));var n=!1,o="",i=F1,l=w1,s=v1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=th(t,1,!1,null,null,n,o,null,i,l,s,dh),t[uo]=e.current,ws(t),new Us(e)},Xi.hydrateRoot=function(t,e,n){if(!x(t))throw Error(c(299));var o=!1,i="",l=F1,s=w1,d=v1,y=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),e=th(t,1,!0,e,n??null,o,i,y,l,s,d,dh),e.context=eh(null),n=e.current,o=be(),o=Ra(o),i=kn(o),i.callback=null,zn(n,i,o),n=o,e.current.lanes=n,oi(e,n),Ke(e),t[uo]=e.current,ws(t),new ya(e)},Xi.version="19.2.7",Xi}var bh;function zu(){if(bh)return Ps.exports;bh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ps.exports=ku(),Ps.exports}var Su=zu();const Dh="/api";async function $o(a){try{const r=await fetch(`${Dh}/${a.replace(/^\/+/,"")}`,{headers:{accept:"application/json","x-caller":"canvas"}});let f=null;try{f=await r.json()}catch{f=null}return{status:r.status,ok:r.ok,data:f}}catch{return{status:0,ok:!1,data:null}}}const Au=()=>$o("training/tasks"),Eu=()=>$o("training/meta"),Ru=()=>$o("project"),Bu=()=>$o("training/progress"),Mu=()=>$o("training/progress/all");async function Tu(a,r){try{const f=await fetch(`${Dh}/training/progress/step`,{method:"POST",headers:{accept:"application/json","content-type":"application/json","x-caller":"canvas"},body:JSON.stringify({taskId:a,step:r})});let c=null;try{c=await f.json()}catch{c=null}return{status:f.status,ok:f.ok,data:c}}catch{return{status:0,ok:!1,data:null}}}const Du=()=>$o("training/telemetry/all");async function Ou(a,r,f){if(!r.startsWith("/api/")||r.includes("//")||/^[a-z]+:/i.test(r))return{status:0,ok:!1,body:"Refused: endpoint must be a relative /api path"};const c=/^(POST|PUT|PATCH)$/i.test(a)&&f!=null&&f.trim()!=="";try{const x={accept:"application/json","x-caller":"canvas"};c&&(x["content-type"]="application/json");const m=await fetch(r,{method:a,headers:x,...c?{body:f}:{}}),z=await m.text();let F=z;try{F=JSON.parse(z)}catch{}return{status:m.status,ok:m.ok,body:F}}catch(x){return{status:0,ok:!1,body:String(x)}}}function ju(a,r){return a.replace(/\{([^}]+)\}/g,(f,c)=>encodeURIComponent(r[c]??""))}function Nu(a){return[...a.matchAll(/\{([^}]+)\}/g)].map(r=>r[1])}function Lu(a){const r=a.filter(f=>f.key.trim()!=="").map(f=>`${encodeURIComponent(f.key.trim())}=${encodeURIComponent(f.value)}`);return r.length?`?${r.join("&")}`:""}const Zs={track:"bff",backendName:"BFF",backendLocation:":8081",tryItTarget:"your BFF",implementHint:"Implement the one infrastructure adapter method for this task",t1Framing:"Implement exactly one commercetools SDK call in the repository, then validate it and explain it back. AI accelerates the plumbing; you verify it.",startCommands:["cd bff-java && mvn spring-boot:run -pl app","cd bff-ts && npm run start"]};let Qs=Zs;function Ce(){return Qs}function _u(a){return Qs=a&&a.track?{...Zs,...a}:Zs,Qs}function Wo(a,r){const[f,c]=dt.useState(),x=dt.useRef(a);x.current=a;const m=dt.useCallback(async()=>{const z=await x.current();c(z)},[]);return dt.useEffect(()=>{let z=!0;const F=async()=>{const u=await x.current();z&&c(u)};F();const w=window.setInterval(F,r);return()=>{z=!1,window.clearInterval(w)}},[r]),{data:f,refresh:m}}const Uu={"Session 1":{codename:"Ignition",subtitle:"Platform, SDK, Project & Stores"},"Session 2":{codename:"The Catalogue",subtitle:"Product & Category Reads"},"Session 3":{codename:"Find It",subtitle:"Store-Scoped Discovery"},"Session 4":{codename:"Fill the Basket",subtitle:"Cart, Line Items & Discounts"},"Session 5":{codename:"Know Your Customer",subtitle:"Identity, Accounts & Cart Merge"},"Session 6":{codename:"Close the Deal",subtitle:"Checkout, Orders & Payments"},"Session 7":{codename:"Beyond the BFF",subtitle:"Extension & Integration Mechanisms"},"Session 8":{codename:"Package It",subtitle:"Connect: Author the Connector"},"Session 9":{codename:"Ship It",subtitle:"Connect: Deploy, Operate & Capstone"}};function Oh(a){var r;return((r=Ce().sessionTitles)==null?void 0:r[a])??Uu[a]??{codename:"",subtitle:""}}function ec(a){return a==="T1"?"bg-[var(--color-violet)] text-white":a==="T2"?"bg-[var(--color-yellow)] text-[#191741]":"bg-[var(--color-bg-card)] text-[var(--color-text-muted)]"}function jh(a){switch(a){case"GET":return"var(--color-teal)";case"POST":return"var(--color-violet-light)";case"PUT":case"PATCH":return"var(--color-yellow)";case"DELETE":return"var(--color-red)";default:return"var(--color-violet)"}}function In(a,r){return r===0?0:Math.round(a/r*100)}function Ch(a){return`rgba(11, 191, 191, ${(a/100*.7).toFixed(3)})`}function Hu(a){return`rgba(255, 200, 6, ${(a/100*.8).toFixed(3)})`}function Iu(a){return a===0?{label:"no response",cls:"bg-[var(--color-bg-card)] text-[var(--color-text-muted)]"}:a>=200&&a<300?{label:`${a} OK`,cls:"bg-[var(--color-teal)]/20 text-[var(--color-teal-light)]"}:a===501?{label:"501 pending",cls:"bg-[var(--color-yellow)]/20 text-[var(--color-yellow)]"}:{label:`${a}`,cls:"bg-[var(--color-red)]/20 text-[var(--color-red)]"}}function za(a){return a.flatMap(r=>r.sessions.flatMap(f=>f.tasks))}function wa(a){const r=/(\d+)/.exec(a??"");return r?Number(r[1]):Number.MAX_SAFE_INTEGER}function va(a){const r=/(\d+)/.exec(a.session??"");return r?`${r[1]}.${a.taskNumber}`:String(a.taskNumber)}function Pu(a){const r=[];for(const f of a)for(const c of f.sessions)r.includes(c.session)||r.push(c.session);return r.sort((f,c)=>wa(f)-wa(c))}function qu(a){const r=new Map;for(const f of za(a))r.has(f.session)||r.set(f.session,[]),r.get(f.session).push(f);return[...r.entries()].sort(([f],[c])=>wa(f)-wa(c)).map(([f,c])=>({session:f,tasks:[...c].sort((x,m)=>x.taskNumber-m.taskNumber)}))}function Ge({size:a=16,children:r,...f}){return h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...f,children:r})}const Ku=a=>h.jsxs(Ge,{...a,children:[h.jsx("circle",{cx:"11",cy:"11",r:"8"}),h.jsx("path",{d:"m21 21-4.3-4.3"})]}),Vu=a=>h.jsxs(Ge,{...a,children:[h.jsx("path",{d:"M15 3h6v6"}),h.jsx("path",{d:"M10 14 21 3"}),h.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]}),Gu=a=>h.jsxs(Ge,{...a,children:[h.jsx("rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}),h.jsx("rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}),h.jsx("rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}),h.jsx("rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"})]}),Nh=a=>h.jsxs(Ge,{...a,children:[h.jsx("path",{d:"M18 6 6 18"}),h.jsx("path",{d:"m6 6 12 12"})]}),nc=a=>h.jsx(Ge,{...a,children:h.jsx("path",{d:"M20 6 9 17l-5-5"})}),Yu=a=>h.jsxs(Ge,{...a,children:[h.jsx("path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}),h.jsx("path",{d:"M9 18h6"}),h.jsx("path",{d:"M10 22h4"})]}),Xu=a=>h.jsxs(Ge,{...a,children:[h.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),h.jsx("path",{d:"M12 9v4"}),h.jsx("path",{d:"M12 17h.01"})]}),kh=a=>h.jsxs(Ge,{...a,children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("path",{d:"M12 16v-4"}),h.jsx("path",{d:"M12 8h.01"})]}),Zu=a=>h.jsxs(Ge,{...a,children:[h.jsx("path",{d:"m3 17 2 2 4-4"}),h.jsx("path",{d:"m3 7 2 2 4-4"}),h.jsx("path",{d:"M13 6h8"}),h.jsx("path",{d:"M13 12h8"}),h.jsx("path",{d:"M13 18h8"})]}),Qu=a=>h.jsxs(Ge,{...a,children:[h.jsx("path",{d:"m19 5 3-3"}),h.jsx("path",{d:"m2 22 3-3"}),h.jsx("path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}),h.jsx("path",{d:"M7.5 13.5 10 11"}),h.jsx("path",{d:"M10.5 16.5 13 14"}),h.jsx("path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"})]});function Ju({view:a,onView:r,connected:f,modules:c,completed:x,participantName:m,projectName:z,storefrontUrl:F,focusCapability:w,inspectorOpen:u,onToggleInspector:k}){const O=za(c),D=O.filter(G=>x.has(G.id)).length,Y=In(D,O.length),L=w?`${F}/?focus=${encodeURIComponent(w)}`:F;return h.jsxs("header",{className:"flex h-14 flex-shrink-0 items-center gap-6 border-b border-[var(--color-brd)] bg-[var(--color-bg-sidebar)] px-5",children:[h.jsxs("div",{className:"flex min-w-[200px] items-center gap-3",children:[h.jsxs("span",{className:"font-display text-base font-bold",style:{fontFamily:"var(--font-display)"},children:[h.jsx("span",{className:"text-[var(--color-violet-light)]",children:"commercetools"}),h.jsx("span",{className:"text-[var(--color-text-muted)]",children:" Training"})]}),h.jsx("span",{className:"border-l border-[var(--color-brd)] pl-3 text-xs text-[var(--color-text-muted)]",title:z?`Connected commercetools project: ${z}`:void 0,children:z??"Lifestyle & Home Corp"})]}),h.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[h.jsx("div",{className:"h-1.5 w-full max-w-[360px] overflow-hidden rounded-full bg-[var(--color-bg-card)]",children:h.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${Y}%`,background:"linear-gradient(90deg, var(--color-violet), var(--color-teal))"}})}),h.jsxs("span",{className:"whitespace-nowrap text-xs text-[var(--color-text-secondary)]",children:[D,"/",O.length," tasks · ",Y,"%"]})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[a==="participant"&&k?h.jsxs("button",{onClick:k,className:`rounded-md border px-3 py-1.5 text-sm ${u?"border-[var(--color-violet)] bg-[var(--color-bg-active)]":"border-[var(--color-brd-light)] bg-[var(--color-bg-card)] hover:border-[var(--color-violet)]"}`,title:"Toggle the HTTP Inspector",children:[h.jsx(Ku,{size:14,className:"mr-1.5 inline align-[-2px]"}),"Inspector"]}):null,h.jsxs("a",{href:L,target:"_blank",rel:"noreferrer",className:"rounded-md border border-[var(--color-brd-light)] bg-[var(--color-bg-card)] px-3 py-1.5 text-sm hover:border-[var(--color-violet)]",children:[h.jsx(Vu,{size:14,className:"mr-1.5 inline align-[-2px]"}),"View in Storefront"]}),h.jsxs("div",{className:"flex rounded-lg border border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-0.5 text-sm",children:[h.jsx(zh,{active:a==="participant",onClick:()=>r("participant"),children:"Participant"}),h.jsxs(zh,{active:a==="trainer",onClick:()=>r("trainer"),children:[h.jsx(Gu,{size:14,className:"mr-1.5 inline align-[-2px]"}),"Trainer"]})]}),h.jsxs("span",{className:"flex items-center gap-2 text-xs text-[var(--color-text-muted)]",children:[h.jsx("span",{className:`h-2 w-2 rounded-full ${f?"bg-[var(--color-teal)]":"bg-[var(--color-red)]"}`}),Ce().backendName," ",f?"online":"offline"," · ",Ce().backendLocation]}),a==="participant"&&m?h.jsx("span",{className:"hidden text-xs text-[var(--color-text-secondary)] lg:inline",children:m}):null]})]})}function zh({active:a,onClick:r,children:f}){return h.jsx("button",{onClick:r,className:`rounded-md px-3 py-1 font-medium ${a?"bg-[var(--color-violet)] text-white":"text-[var(--color-text-secondary)]"}`,children:f})}function Wu({modules:a,completed:r,steps:f={},selectedId:c,onSelect:x,onSelectIntro:m,expandedSession:z,onToggleSession:F}){const w=qu(a);return h.jsxs("aside",{className:"flex w-72 flex-shrink-0 flex-col overflow-y-auto border-r border-[var(--color-brd)] bg-[var(--color-bg-sidebar)]",children:[h.jsx("div",{className:"px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Tasks"}),m?h.jsxs("button",{onClick:m,className:`flex w-full items-center justify-between gap-2 border-b border-[var(--color-brd)]/60 px-4 py-2.5 text-left hover:bg-[var(--color-bg-hover)] ${c==="intro"?"bg-[var(--color-bg-active)]":""}`,children:[h.jsxs("span",{className:"min-w-0 flex-1",children:[h.jsxs("span",{className:"block truncate text-sm font-medium",children:["00 ",h.jsx("span",{className:"text-[var(--color-text-muted)]",children:"· "}),"Introduction"]}),h.jsx("span",{className:"block truncate text-[11px] leading-tight text-[var(--color-text-muted)]",children:"The course, the stack, the setup"})]}),h.jsx("span",{className:"shrink-0 rounded-full bg-[var(--color-teal)]/20 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-teal-light)]",children:"slides"})]}):null,w.length===0?h.jsxs("div",{className:"px-4 py-2 text-sm text-[var(--color-text-muted)]",children:["Connecting to ",Ce().backendName,"…"]}):null,w.map(({session:u,tasks:k})=>{const O=k.filter(et=>r.has(et.id)).length,D=z===u,Y=O===k.length,{codename:L,subtitle:G}=Oh(u);return h.jsxs("div",{className:"border-b border-[var(--color-brd)]/60",children:[h.jsxs("button",{onClick:()=>F(D?"":u),title:G?`${u} — ${L} · ${G}`:u,className:`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left hover:bg-[var(--color-bg-hover)] ${D?"bg-[var(--color-bg-panel)]":""}`,children:[h.jsxs("span",{className:"min-w-0 flex-1",children:[h.jsxs("span",{className:`block truncate text-sm font-medium ${Y?"text-[var(--color-teal-light)]":""}`,children:[u,L?h.jsx("span",{className:"text-[var(--color-text-muted)]",children:" · "}):null,L]}),G?h.jsx("span",{className:"block truncate text-[11px] leading-tight text-[var(--color-text-muted)]",children:G}):null]}),h.jsxs("span",{className:"flex shrink-0 items-center gap-2",children:[h.jsxs("span",{className:"rounded-full bg-[var(--color-bg-card)] px-2 py-0.5 text-[11px] text-[var(--color-text-secondary)]",children:[O,"/",k.length]}),h.jsx("span",{className:`text-[var(--color-text-muted)] transition-transform ${D?"rotate-90":""}`,children:"›"})]})]}),D?k.map(et=>{var _,K,st,$;const kt=c===et.id,H=r.has(et.id);return h.jsxs("button",{onClick:()=>x(et),className:`flex w-full items-center gap-2.5 px-4 py-2 text-left text-sm ${kt?"bg-[var(--color-bg-active)]":et.tier==="T1"?"bg-[var(--color-violet)]/12 hover:bg-[var(--color-violet)]/20":et.tier==="T2"?"bg-[var(--color-yellow)]/12 hover:bg-[var(--color-yellow)]/20":"hover:bg-[var(--color-bg-hover)]"}`,children:[h.jsx("span",{title:H?"Completed":(_=f[et.id])!=null&&_.taskAt?"Task card opened":(K=f[et.id])!=null&&K.conceptAt?"Concept slides finished":void 0,className:`h-2 w-2 shrink-0 rounded-full ${H?"bg-[var(--color-teal)]":(st=f[et.id])!=null&&st.taskAt?"border-2 border-[var(--color-yellow)]":($=f[et.id])!=null&&$.conceptAt?"border-2 border-[var(--color-violet)]":"border border-[var(--color-brd-light)]"}`}),h.jsxs("span",{className:"min-w-0 flex-1 truncate",children:[h.jsxs("span",{className:"font-semibold text-[var(--color-text-muted)]",children:[va(et)," "]}),et.title]}),h.jsx("span",{className:`shrink-0 rounded px-1 py-0.5 text-[9px] font-semibold ${ec(et.tier)}`,children:et.tier}),h.jsx("span",{className:"shrink-0 text-[10px] font-semibold",style:{color:jh(et.httpMethod)},children:et.httpMethod})]},et.id)}):null]},u)})]})}const $u=`---
task: intro
summary: The course, the stack, the setup — the Session 1 opener before the first task.
prompt: |
  (No task — the Introduction is slides only.)
---

## Concept · Welcome

::: visual
<img src="/canvas/slides/0.0-1.svg" alt="Welcome">
:::

<!-- draft
## Concept · Welcome

- Three days, seven sessions, one backend you build method by method.
- A real storefront lights up as each capability goes live.
- Your AI assistant codes with you — grounded on the docs, never guessing.

> **Show:** the storefront at \`localhost:3000\` with everything still locked; by Day 3 every lock is gone.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="40" y="40" width="480" height="60" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="77" text-anchor="middle" fill="#191741" font-size="18" font-weight="700">Storefront · lights up as you build</text>
  <rect x="40" y="120" width="480" height="70" rx="14" fill="#6359FF" />
  <text x="280" y="152" text-anchor="middle" fill="#fff" font-size="20" font-weight="700">Your BFF · Java + the commercetools SDK</text>
  <text x="280" y="176" text-anchor="middle" fill="#e6e6ff" font-size="12" font-family="Roboto Mono, monospace">one method per task · 49 tasks</text>
  <rect x="40" y="210" width="480" height="60" rx="14" fill="#0BBFBF" />
  <text x="280" y="247" text-anchor="middle" fill="#191741" font-size="18" font-weight="700">commercetools</text>
  <line x1="280" y1="100" x2="280" y2="120" stroke="#8C8AAE" stroke-width="2" />
  <line x1="280" y1="190" x2="280" y2="210" stroke="#8C8AAE" stroke-width="2" />
</svg>
:::
-->

## Concept · Has your AI ever sounded completely right… and been completely wrong?

::: visual
<img src="/canvas/slides/0.0-2.svg" alt="Has your AI ever sounded completely right… and been completely wrong?">
:::

<!-- draft
## Concept · Has your AI ever sounded completely right… and been completely wrong?

> **Ask:** hands up — then one confession each. Nothing else on this slide.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="280" y="120" text-anchor="middle" fill="#6359FF" font-size="30" font-weight="700">completely right…</text>
  <text x="280" y="175" text-anchor="middle" fill="#191741" font-size="30" font-weight="700">and completely wrong?</text>
  <text x="280" y="240" text-anchor="middle" fill="#5B5A7A" font-size="13">the reason every call in this course is grounded on the docs</text>
</svg>
:::
-->

## Concept · Agenda — we build the BFF, not the storefront

::: visual
<img src="/canvas/slides/0.0-3.svg" alt="Agenda — we build the BFF, not the storefront">
:::

<!-- draft
## Concept · Agenda — we build the BFF, not the storefront

- Day 1 reads: platform, catalogue, discovery.
- Day 2 writes: the basket, the customer, the order.
- Day 3 extends and ships: beyond the BFF, then Connect.

> **Discuss:** which of these does your own storefront already do, and where does it do it?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="100" y="60" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">DAY 1 · READ</text>
  <text x="280" y="60" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">DAY 2 · WRITE</text>
  <text x="460" y="60" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">DAY 3 · EXTEND · SHIP</text>
  <line x1="40" y1="150" x2="520" y2="150" stroke="#C9C6E0" stroke-width="3" />
  <g font-size="12" fill="#fff" text-anchor="middle">
    <circle cx="60" cy="150" r="14" fill="#0BBFBF" /><text x="60" y="155" fill="#191741" font-weight="700">1</text><text x="60" y="190" fill="#191741">Ignition</text>
    <circle cx="120" cy="150" r="14" fill="#0BBFBF" /><text x="120" y="155" fill="#191741" font-weight="700">2</text><text x="120" y="190" fill="#191741">Catalogue</text>
    <circle cx="180" cy="150" r="14" fill="#0BBFBF" /><text x="180" y="155" fill="#191741" font-weight="700">3</text><text x="180" y="190" fill="#191741">Find It</text>
    <circle cx="250" cy="150" r="14" fill="#6359FF" /><text x="250" y="155" font-weight="700">4</text><text x="250" y="190" fill="#191741">Basket</text>
    <circle cx="310" cy="150" r="14" fill="#6359FF" /><text x="310" y="155" font-weight="700">5</text><text x="310" y="190" fill="#191741">Customer</text>
    <circle cx="370" cy="150" r="14" fill="#6359FF" /><text x="370" y="155" font-weight="700">6</text><text x="370" y="190" fill="#191741">Checkout</text>
    <circle cx="440" cy="150" r="14" fill="#FFC806" /><text x="440" y="155" fill="#191741" font-weight="700">7</text><text x="440" y="190" fill="#191741">Beyond</text>
    <circle cx="500" cy="150" r="14" fill="#FFC806" /><text x="500" y="155" fill="#191741" font-weight="700">8·9</text><text x="500" y="190" fill="#191741">Connect</text>
  </g>
  <text x="280" y="250" text-anchor="middle" fill="#6359FF" font-size="13">We build the BFF. The storefront is given — it only waits for you.</text>
</svg>
:::
-->

## Concept · Where your BFF fits

::: visual
<img src="/canvas/slides/0.0-4.svg" alt="Where your BFF fits">
:::

<!-- draft
## Concept · Where your BFF fits

- Shopper → **Storefront** → \`GET /api/*\` → **your BFF** → SDK + OAuth → **commercetools**.
- Commerce Canvas and Merchant Center sit beside it, never in the shopper's path.
- The BFF is the one channel: no credentials in the browser.

> **Docs:** [commercetools SDKs](https://docs.commercetools.com/sdk)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="i4a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#5B5A7A" /></marker></defs>
  <rect x="20" y="100" width="90" height="60" rx="12" fill="#FFFFFF" stroke="#E6E1D8" /><text x="65" y="135" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Shopper</text>
  <line x1="110" y1="130" x2="138" y2="130" stroke="#5B5A7A" stroke-width="2" marker-end="url(#i4a)" />
  <rect x="140" y="100" width="110" height="60" rx="12" fill="#FFFFFF" stroke="#E6E1D8" /><text x="195" y="128" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Storefront</text><text x="195" y="146" text-anchor="middle" fill="#5B5A7A" font-size="10">Next.js</text>
  <line x1="250" y1="130" x2="278" y2="130" stroke="#5B5A7A" stroke-width="2" marker-end="url(#i4a)" /><text x="264" y="118" text-anchor="middle" fill="#5B5A7A" font-size="9" font-family="Roboto Mono, monospace">/api/*</text>
  <polygon points="335,85 390,115 390,145 335,175 280,145 280,115" fill="#6359FF" /><text x="335" y="135" text-anchor="middle" fill="#fff" font-size="14" font-weight="700">Your BFF</text>
  <line x1="390" y1="130" x2="418" y2="130" stroke="#5B5A7A" stroke-width="2" marker-end="url(#i4a)" /><text x="404" y="118" text-anchor="middle" fill="#5B5A7A" font-size="9">SDK · OAuth</text>
  <rect x="420" y="80" width="120" height="100" rx="12" fill="#0BBFBF" /><text x="480" y="104" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">commercetools</text>
  <g font-size="9" fill="#191741" text-anchor="middle"><text x="452" y="128">Product</text><text x="508" y="128">Price</text><text x="452" y="146">Cart</text><text x="508" y="146">Order</text><text x="452" y="164">Store</text><text x="508" y="164">Customer</text></g>
  <rect x="250" y="210" width="80" height="34" rx="8" fill="#FFFFFF" stroke="#E6E1D8" /><text x="290" y="231" text-anchor="middle" fill="#5B5A7A" font-size="10">Canvas</text>
  <rect x="345" y="210" width="110" height="34" rx="8" fill="#FFFFFF" stroke="#E6E1D8" /><text x="400" y="231" text-anchor="middle" fill="#5B5A7A" font-size="10">Merchant Center</text>
  <text x="280" y="280" text-anchor="middle" fill="#0A948F" font-size="12" font-weight="700">The BFF is the one channel — no credentials in the browser.</text>
</svg>
:::
-->

## Concept · Did you do the homework?

::: visual
<img src="/canvas/slides/0.0-5.svg" alt="Did you do the homework?">
:::

<!-- draft
## Concept · Did you do the homework?

- Five topics from the prerequisite; answers stay verbal.
- Miss one? You will be caught up by the end of this slide.

> **Ask:** Versionless · the offering · dev/prod environments · project settings · the Draft pattern.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <g font-size="13" fill="#191741" text-anchor="middle">
    <circle cx="80" cy="120" r="24" fill="#6359FF" /><text x="80" y="126" fill="#fff" font-size="16" font-weight="700">1</text><text x="80" y="170">Versionless</text>
    <circle cx="180" cy="120" r="24" fill="#6359FF" /><text x="180" y="126" fill="#fff" font-size="16" font-weight="700">2</text><text x="180" y="170">The offering</text>
    <circle cx="280" cy="120" r="24" fill="#6359FF" /><text x="280" y="126" fill="#fff" font-size="16" font-weight="700">3</text><text x="280" y="170">Dev / prod</text>
    <circle cx="380" cy="120" r="24" fill="#6359FF" /><text x="380" y="126" fill="#fff" font-size="16" font-weight="700">4</text><text x="380" y="170">Project settings</text>
    <circle cx="480" cy="120" r="24" fill="#6359FF" /><text x="480" y="126" fill="#fff" font-size="16" font-weight="700">5</text><text x="480" y="170">The Draft pattern</text>
  </g>
  <text x="280" y="240" text-anchor="middle" fill="#4A42BE" font-size="12">Miss the prereq? You'll be caught up by the end of this slide.</text>
</svg>
:::
-->

## Concept · commercetools in a nutshell

::: visual
<img src="/canvas/slides/0.0-6.svg" alt="commercetools in a nutshell">
:::

<!-- draft
## Concept · commercetools in a nutshell

- **Sphere**: the enterprise commerce platform, the headless foundation.
- **Intelligence-ready commerce modules** on top; **AgentSphere** and **MosAIc** for agents and autonomous operations.
- **Merchant Center** for manual operations; governance across the whole stack.

> **Docs:** [commercetools in a nutshell](https://docs.commercetools.com/)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <g text-anchor="middle" font-size="13" font-weight="700">
    <rect x="80" y="40" width="400" height="40" rx="10" fill="#FFFFFF" stroke="#E6E1D8" /><text x="280" y="65" fill="#191741">Merchant Center · manual operations</text>
    <rect x="80" y="90" width="195" height="40" rx="10" fill="#C2C2FF" stroke="#C9C6E0" /><text x="177" y="115" fill="#191741">MosAIc · autonomous ops</text>
    <rect x="285" y="90" width="195" height="40" rx="10" fill="#C2C2FF" stroke="#C9C6E0" /><text x="382" y="115" fill="#191741">AgentSphere · agents</text>
    <rect x="80" y="140" width="400" height="40" rx="10" fill="#9FF7EE" /><text x="280" y="165" fill="#191741">Intelligence-ready commerce modules</text>
    <rect x="80" y="190" width="400" height="48" rx="10" fill="#6359FF" /><text x="280" y="214" fill="#fff" font-size="15">SPHERE</text><text x="280" y="230" fill="#e6e6ff" font-size="10" font-weight="400">the enterprise commerce platform · headless foundation</text>
  </g>
  <text x="280" y="270" text-anchor="middle" fill="#5B5A7A" font-size="11">Governance across the entire stack</text>
</svg>
:::
-->

## Concept · The hexagonal BFF

::: visual
<img src="/canvas/slides/0.0-7.svg" alt="The hexagonal BFF">
:::

<!-- draft
## Concept · The hexagonal BFF

- \`domain\` core: your models, SDK-free. \`application\` ring: services, mapping, logic.
- Two edge adapters: \`api\` (controllers + DTOs) and \`infrastructure\` (the SDK repository).
- Setup, done live: 1 clone the repo · 2 API client + \`.env\` · 3 \`ProjectApiRoot\`, built once.

> **Show:** the cloned folder tree next to the hexagon — the zones map one to one.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <polygon points="280,30 400,100 400,200 280,270 160,200 160,100" fill="#0BBFBF" />
  <polygon points="280,70 365,120 365,180 280,230 195,180 195,120" fill="#6359FF" />
  <polygon points="280,110 325,135 325,165 280,190 235,165 235,135" fill="#FFFFFF" />
  <text x="280" y="155" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">domain</text>
  <text x="280" y="98" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">application</text>
  <text x="205" y="60" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">api</text>
  <text x="370" y="250" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">infrastructure</text>
  <rect x="20" y="120" width="90" height="50" rx="10" fill="#FFFFFF" stroke="#E6E1D8" /><text x="65" y="150" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Storefront</text>
  <line x1="110" y1="145" x2="158" y2="145" stroke="#5B5A7A" stroke-width="2" />
  <rect x="440" y="120" width="110" height="50" rx="10" fill="#FFFFFF" stroke="#E6E1D8" /><text x="495" y="150" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">commercetools</text>
  <line x1="402" y1="145" x2="438" y2="145" stroke="#5B5A7A" stroke-width="2" />
  <text x="280" y="292" text-anchor="middle" fill="#4A42BE" font-size="11" font-weight="700">SDK types live only in the infrastructure adapter</text>
</svg>
:::
-->

## Concept · Switch on ct for Builders

::: visual
<img src="/canvas/slides/0.0-8.svg" alt="Switch on ct for Builders">
:::

<!-- draft
## Concept · Switch on ct for Builders

- Install the commercetools plugin in your editor: skills + the Knowledge and Commerce MCP.
- Ground every call on the Knowledge MCP. Never guess the API.

> **Show:** run the two commands live; the Knowledge MCP answers a first question.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="40" y="50" width="480" height="120" rx="14" fill="#FBF9F5" stroke="#E6E1D8" />
  <text x="60" y="78" fill="#5B5A7A" font-size="11" font-family="Roboto Mono, monospace">your editor</text>
  <text x="60" y="112" fill="#191741" font-size="14" font-family="Roboto Mono, monospace">$ /plugin marketplace add commercetools/commercetools-ai-plugins</text>
  <text x="60" y="146" fill="#191741" font-size="14" font-family="Roboto Mono, monospace">$ /plugin install commercetools@commercetools</text>
  <rect x="150" y="200" width="260" height="34" rx="17" fill="#9FF7EE" /><text x="280" y="222" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Skills + Knowledge &amp; Commerce MCP</text>
  <text x="280" y="275" text-anchor="middle" fill="#4A42BE" font-size="15" font-weight="700">Ground every call on the Knowledge MCP. Never guess the API.</text>
</svg>
:::
-->
`,tm=`---
task: project.Session 1.1
summary: Pre-built — study it: GET /api/project carries one SDK call up through all four layers; the raw SDK Project stops at the service.
file: project/…/infrastructure/CtProjectRepository.java
method: fetch()
prompt: |
  In bff-java, read CtProjectRepository.fetch() in the project module's infrastructure layer, then follow
  the request upwards: ProjectService.getProjectSummary(), the domain record ProjectSummary, and
  ProjectController's GET /api/project. Explain to me, in that order: what the single call
  apiRoot.get().executeBlocking().getBody() returns, where the SDK Project type stops and why it must
  never reach the controller, and which five fields the storefront's Region menu reads. Do not change
  any code; this endpoint is the pattern every task copies.
  Then run Try It for task 1.1 in Commerce Canvas and tell me what the response shows.
---

## Concept · The loop

::: visual
<svg width="100%" style="height:auto;display:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" xmlns:c2pa="http://c2pa.org/manifest"><defs><marker id="m191741" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#191741"></path></marker><marker id="m4A42BE" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4A42BE"></path></marker><marker id="m0BBFBF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0BBFBF"></path></marker><marker id="m5B5A7A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#5B5A7A"></path></marker></defs><rect width="1920" height="1080" fill="#F7F2EA"></rect><foreignObject x="96" y="78" width="1740" height="110"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Archivo,'Helvetica Neue',Arial,sans-serif;font-size:68px;font-weight:700;line-height:1.15;letter-spacing:-0.7px;color:#191741;white-space:nowrap">Read, build, <span style="background:#9FF7EE;border-radius:10px;padding:0 8px;margin:0 0 0 2px">see it work</span>.</div></foreignObject><rect x="500" y="214" width="440" height="92" rx="14" fill="none" stroke="#6359FF" stroke-width="2" stroke-dasharray="10 8"></rect><text x="720" y="254" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="500" fill="#191741" text-anchor="middle">your assistant works here</text><text x="720" y="290" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="400" fill="#5B5A7A" text-anchor="middle">grounded on the Knowledge MCP</text><path d="M720 310V396" fill="none" stroke="#4A42BE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 8" marker-end="url(#m4A42BE)"></path><rect x="96" y="400" width="320" height="120" rx="14" fill="#9FF7EE" stroke="#0BBFBF" stroke-width="3"></rect><text x="256" y="475" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="46" font-weight="700" fill="#191741" text-anchor="middle">Concept</text><rect x="560" y="400" width="320" height="120" rx="14" fill="#C2C2FF" stroke="#6359FF" stroke-width="3"></rect><text x="720" y="475" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="46" font-weight="700" fill="#191741" text-anchor="middle">Task</text><rect x="1024" y="400" width="320" height="120" rx="14" fill="#9FF7EE" stroke="#0BBFBF" stroke-width="3"></rect><text x="1184" y="475" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="46" font-weight="700" fill="#191741" text-anchor="middle">Try It</text><path d="M420 460H552" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><path d="M884 460H1016" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><path d="M1348 460H1480" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><rect x="1488" y="430" width="336" height="60" rx="30" fill="#0BBFBF" stroke="none" stroke-width="2"></rect><text x="1656" y="470" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="700" fill="#191741" text-anchor="middle">store lights up</text><path d="M1656 494V650H256V526" fill="none" stroke="#5B5A7A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 8" marker-end="url(#m5B5A7A)"></path><text x="956" y="696" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="middle">next task</text><rect x="96" y="790" width="48" height="5" rx="2.5" fill="#0BBFBF"></rect><text x="96" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start"><tspan font-weight="500" fill="#191741">Concept:</tspan> read, discuss, open the docs.</text><rect x="730" y="790" width="48" height="5" rx="2.5" fill="#6359FF"></rect><text x="730" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start"><tspan font-weight="500" fill="#191741">Task:</tspan> implement one method with your</text><text x="730" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">assistant, prompt provided.</text><rect x="1364" y="790" width="48" height="5" rx="2.5" fill="#0BBFBF"></rect><text x="1364" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start"><tspan font-weight="500" fill="#191741">Try It:</tspan> a 200 unlocks a capability and</text><text x="1364" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">the store lights up.</text><svg x="96" y="966" width="150" height="51.4" viewBox="0 0 423 145" fill="none" xmlns:c2pa="http://c2pa.org/manifest">
<path d="M18 97.5608V52.6084C18 51.3628 19.3458 50.5879 20.4246 51.207L59.3562 73.6814C60.3572 74.2597 60.9726 75.3275 60.9726 76.4805V121.433C60.9726 122.679 59.6268 123.453 58.548 122.834L19.6164 100.36C18.6154 99.7816 18 98.7138 18 97.5608Z" fill="#6359FF"></path>
<path d="M23.0495 44.5596L61.373 22.4338C62.374 21.8554 63.6049 21.8554 64.6059 22.4338L102.929 44.5596C104.275 45.3382 104.275 47.2808 102.929 48.0594L64.6059 70.1852C63.6049 70.7636 62.374 70.7636 61.373 70.1852L23.0495 48.0594C21.7037 47.2808 21.7037 45.3382 23.0495 44.5596Z" fill="#FFC806"></path>
<path d="M65.01 121.437V79.7504C65.01 78.5047 66.3558 77.7299 67.4346 78.349L102.929 98.8436C104.275 99.6222 104.275 101.565 102.929 102.343L67.4346 122.838C66.3558 123.461 65.01 122.682 65.01 121.437Z" fill="#0BBFBF"></path>
<path d="M231.97 78.3453C231.536 82.0231 230.001 83.506 227.391 83.506C224.154 83.506 222.442 81.263 222.442 76.6102V76.1468H237.108C237.227 74.9641 237.271 73.9483 237.271 72.8657C237.271 65.8587 233.727 61.9252 227.369 61.9252C220.54 61.9252 216.84 66.0589 216.84 73.5627V75.7093C216.84 83.2094 220.517 87.3321 227.206 87.3321C233.037 87.3321 236.556 84.5738 237.382 79.046L231.97 78.349V78.3453ZM227.317 65.7364C230.212 65.7364 231.669 67.6123 231.669 71.6608V72.2874H222.442C222.553 67.9126 224.177 65.7364 227.317 65.7364Z" fill="#191741"></path>
<path d="M124.588 77.5853L130.353 78.3045C129.678 84.2067 126.208 87.3543 120.199 87.3543C113.369 87.3543 109.833 82.9573 109.833 74.5341V74.4377C109.833 66.2035 113.458 61.8955 120.221 61.8955C126.323 61.8955 129.593 65.1395 130.079 71.2678L124.455 71.9389C124.199 67.705 122.898 65.7623 120.199 65.7623C117.095 65.7623 115.635 68.2611 115.635 73.5183V75.4572C115.635 80.87 117.14 83.4467 120.265 83.4467C122.927 83.4467 124.332 81.504 124.588 77.589V77.5853Z" fill="#191741"></path>
<path d="M143.273 61.8918C136.563 61.8918 132.841 66.5669 132.841 74.3673V74.8752C132.841 82.6237 136.567 87.3507 143.273 87.3507C149.98 87.3507 153.706 82.6237 153.706 74.8752V74.3673C153.706 66.5669 149.98 61.8918 143.273 61.8918ZM147.904 75.7057C147.904 80.9628 146.369 83.4616 143.273 83.4616C140.178 83.4616 138.643 80.9628 138.643 75.7057V73.5368C138.643 68.2797 140.144 65.7587 143.273 65.7587C146.403 65.7587 147.904 68.2797 147.904 73.5368V75.7057Z" fill="#191741"></path>
<path d="M347.971 61.8918C341.26 61.8918 337.538 66.5669 337.538 74.3673V74.8752C337.538 82.6237 341.26 87.3507 347.971 87.3507C354.681 87.3507 358.411 82.6237 358.411 74.8752V74.3673C358.411 66.5669 354.678 61.8918 347.971 61.8918ZM352.601 75.7057C352.601 80.9628 351.078 83.4616 347.971 83.4616C344.864 83.4616 343.348 80.9628 343.348 75.7057V73.5368C343.348 68.2797 344.849 65.7587 347.971 65.7587C351.092 65.7587 352.601 68.2797 352.601 73.5368V75.7057Z" fill="#191741"></path>
<path d="M367.123 55.2815H361.477V86.7685H367.123V55.2815Z" fill="#191741"></path>
<path d="M269.103 77.5853L274.868 78.3045C274.193 84.2067 270.727 87.3543 264.713 87.3543C257.884 87.3543 254.348 82.9573 254.348 74.5341V74.4377C254.348 66.2035 257.973 61.8955 264.736 61.8955C270.838 61.8955 274.108 65.1395 274.594 71.2678L268.97 71.9389C268.714 67.705 267.412 65.7623 264.713 65.7623C261.61 65.7623 260.15 68.2611 260.15 73.5183V75.4572C260.15 80.87 261.655 83.4467 264.78 83.4467C267.442 83.4467 268.847 81.504 269.103 77.589V77.5853Z" fill="#191741"></path>
<path d="M389.127 80.2472C389.127 84.6665 385.701 87.3284 379.799 87.3284C373.508 87.3284 369.896 84.5701 369.741 79.6615L375.102 78.5752C375.057 81.745 376.726 83.5283 379.777 83.5283C382.164 83.5283 383.48 82.6014 383.48 80.7774C383.48 78.9534 382.305 78.1377 379.202 76.9847L376.099 75.8021C373.003 74.6194 370.341 72.3542 370.341 68.973C370.341 64.4833 373.467 61.8918 379.135 61.8918C384.804 61.8918 388.363 64.4648 388.385 68.973L383.136 69.8999C383.247 67.0266 381.82 65.755 379.202 65.755C376.915 65.755 375.643 66.6151 375.643 68.1648C375.643 69.7145 376.751 70.7303 379.855 71.8425L382.95 72.9733C386.053 74.1115 389.127 75.8688 389.127 80.2435V80.2472Z" fill="#191741"></path>
<path d="M324.681 61.8918C317.97 61.8918 314.248 66.5669 314.248 74.3673V74.8752C314.248 82.6237 317.97 87.3507 324.681 87.3507C331.391 87.3507 335.121 82.6237 335.121 74.8752V74.3673C335.121 66.5669 331.388 61.8918 324.681 61.8918ZM329.311 75.7057C329.311 80.9628 327.784 83.4616 324.681 83.4616C321.578 83.4616 320.058 80.9628 320.058 75.7057V73.5368C320.058 68.2797 321.559 65.7587 324.681 65.7587C327.803 65.7587 329.311 68.2797 329.311 73.5368V75.7057Z" fill="#191741"></path>
<path d="M309.399 82.8572C310.444 82.8572 311.738 82.5791 312.965 82.049L312.643 86.1716C311.364 86.8427 309.395 87.3024 307.549 87.3024C303.152 87.3024 300.887 85.0816 300.887 80.3176V56.9757L306.533 55.2852V62.4812H312.899V66.5742H306.533V79.6466C306.533 81.9637 307.482 82.8609 309.399 82.8609V82.8572Z" fill="#191741"></path>
<path d="M292.489 78.3453C292.056 82.0231 290.524 83.506 287.911 83.506C284.67 83.506 282.961 81.263 282.961 76.6102V76.1468H297.628C297.747 74.9641 297.791 73.9483 297.791 72.8657C297.791 65.8587 294.247 61.9252 287.888 61.9252C281.059 61.9252 277.359 66.0589 277.359 73.5627V75.7093C277.359 83.2094 281.037 87.3321 287.725 87.3321C293.561 87.3321 297.075 84.5738 297.906 79.046L292.489 78.349V78.3453ZM287.837 65.7364C290.732 65.7364 292.189 67.6123 292.189 71.6608V72.2874H282.961C283.073 67.9126 284.696 65.7364 287.837 65.7364Z" fill="#191741"></path>
<path d="M174.264 68.9285C176.002 64.0866 178.679 61.8918 182.127 61.8918C185.853 61.8918 187.57 64.5538 186.672 68.7876L187.136 68.9285C188.875 64.0866 191.551 61.8918 194.999 61.8918C198.725 61.8918 200.442 64.5538 199.545 68.7876L200.008 68.9285C201.713 64.0681 204.372 61.8918 208.009 61.8918C211.964 61.8918 213.844 64.2535 213.844 68.7654V86.7686H208.198V69.7182C208.198 67.3121 207.271 66.1146 205.417 66.1146C202.596 66.1146 200.976 69.5847 200.976 74.2301V86.7723H195.359V69.7664C195.359 67.4085 194.302 66.1146 192.545 66.1146C189.727 66.1146 188.103 69.5847 188.103 74.2301V86.7723H182.487V69.7664C182.487 67.4085 181.515 66.0849 179.758 66.0849H179.751V66.1183C179.751 66.1183 179.743 66.1183 179.74 66.1183C176.922 66.1183 175.298 69.5884 175.298 74.2338V86.776H169.681V69.7701C169.681 67.4122 168.71 66.0886 166.953 66.0886C164.224 66.0886 162.411 69.4253 162.411 74.3747V86.776H156.765V62.485H162.433C162.485 63.9643 162.203 65.2804 161.139 68.5652L161.603 68.7728C163.779 63.7975 166.022 61.8993 169.329 61.8993C173.055 61.8993 174.768 64.5612 173.871 68.795L174.271 68.9359L174.264 68.9285Z" fill="#191741"></path>
<path d="M253.877 66.8449C247.574 67.2713 246.099 69.3771 246.099 76.1505V86.7686H240.452V62.4776H246.121C246.173 64.1904 245.943 65.4176 244.805 68.6764L245.268 68.884C246.847 65.21 248.683 61.8288 254.277 61.7139L253.877 66.8412V66.8449Z" fill="#191741"></path>
</svg></svg>
:::

<!-- draft
## Concept · The loop

- Concept: read, discuss, open the docs.
- Task: implement one method with your assistant, prompt provided.
- Try It: a 200 unlocks a capability and the store lights up.

> **Show:** Commerce Canvas at \`localhost:8081/canvas\` — served by your own BFF.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="loop-a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="40" y="110" width="110" height="70" rx="14" fill="#0BBFBF" /><text x="95" y="152" text-anchor="middle" fill="#191741" font-size="16" font-weight="700">Concept</text>
  <rect x="190" y="110" width="110" height="70" rx="14" fill="#6359FF" /><text x="245" y="152" text-anchor="middle" fill="#fff" font-size="16" font-weight="700">Task</text>
  <rect x="340" y="110" width="110" height="70" rx="14" fill="#FFC806" /><text x="395" y="152" text-anchor="middle" fill="#191741" font-size="16" font-weight="700">Try It</text>
  <line x1="150" y1="145" x2="188" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#loop-a)" />
  <line x1="300" y1="145" x2="338" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#loop-a)" />
  <rect x="470" y="110" width="70" height="70" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="505" y="143" text-anchor="middle" fill="#191741" font-size="11">store</text><text x="505" y="158" text-anchor="middle" fill="#191741" font-size="11">lights up</text>
  <line x1="450" y1="145" x2="468" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#loop-a)" />
  <path d="M505,180 L505,230 L95,230 L95,182" fill="none" stroke="#8C8AAE" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#loop-a)" />
  <text x="300" y="250" text-anchor="middle" fill="#6359FF" font-size="12">next task</text>
  <text x="245" y="70" text-anchor="middle" fill="#6359FF" font-size="12">your assistant works here — grounded on the Knowledge MCP</text>
</svg>
:::
-->

## Concept · Two kinds of task

::: visual
<svg width="100%" style="height:auto;display:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" xmlns:c2pa="http://c2pa.org/manifest"><defs><marker id="m191741" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#191741"></path></marker><marker id="m4A42BE" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4A42BE"></path></marker><marker id="m0BBFBF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0BBFBF"></path></marker><marker id="m5B5A7A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#5B5A7A"></path></marker></defs><rect width="1920" height="1080" fill="#F7F2EA"></rect><foreignObject x="96" y="78" width="1740" height="110"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Archivo,'Helvetica Neue',Arial,sans-serif;font-size:68px;font-weight:700;line-height:1.15;letter-spacing:-0.7px;color:#191741;white-space:nowrap">Two <span style="background:#C2C2FF;border-radius:10px;padding:0 8px;margin:0 0 0 2px">kinds</span> of task.</div></foreignObject><rect x="96" y="220" width="840" height="360" rx="14" fill="#C2C2FF" stroke="#6359FF" stroke-width="3"></rect><rect x="136" y="260" width="380" height="48" rx="24" fill="#6359FF" stroke="none" stroke-width="2"></rect><text x="326" y="292" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">TIER 1 · AI-accelerated</text><text x="136" y="396" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="700" fill="#191741" text-anchor="start">One SDK call</text><text x="136" y="460" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="32" font-weight="400" fill="#5B5A7A" text-anchor="start">The prompt is given</text><text x="136" y="512" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="32" font-weight="400" fill="#5B5A7A" text-anchor="start">200 = done</text><rect x="984" y="220" width="840" height="360" rx="14" fill="#FFE9A1" stroke="#FFC806" stroke-width="3"></rect><rect x="1024" y="260" width="420" height="48" rx="24" fill="#FFC806" stroke="none" stroke-width="2"></rect><text x="1234" y="292" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="700" fill="#191741" text-anchor="middle" letter-spacing="0.5">TIER 2 · Human in the loop</text><text x="1024" y="396" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="700" fill="#191741" text-anchor="start">A decision you own</text><text x="1024" y="460" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="32" font-weight="400" fill="#5B5A7A" text-anchor="start">Defend it out loud</text><text x="1024" y="512" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="32" font-weight="400" fill="#5B5A7A" text-anchor="start">200 is not enough</text><rect x="96" y="630" width="1728" height="100" rx="14" fill="none" stroke="#5B5A7A" stroke-width="2" stroke-dasharray="10 8"></rect><text x="136" y="692" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="700" fill="#191741" text-anchor="start">Pre-built</text><text x="310" y="692" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="400" fill="#5B5A7A" text-anchor="start">study it, never rebuild it</text><rect x="96" y="790" width="48" height="5" rx="2.5" fill="#6359FF"></rect><text x="96" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start"><tspan font-weight="500" fill="#191741">Tier 1:</tspan> one SDK call; the prompt is</text><text x="96" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">given, your assistant does most of the</text><text x="96" y="906" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">typing.</text><rect x="730" y="790" width="48" height="5" rx="2.5" fill="#FFC806"></rect><text x="730" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start"><tspan font-weight="500" fill="#191741">Tier 2:</tspan> a decision you own and defend;</text><text x="730" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">the assistant proposes, you decide.</text><rect x="1364" y="790" width="48" height="5" rx="2.5" fill="#5B5A7A"></rect><text x="1364" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start"><tspan font-weight="500" fill="#191741">Pre-built:</tspan> trainer plumbing — study it,</text><text x="1364" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">never rebuild it.</text><svg x="96" y="966" width="150" height="51.4" viewBox="0 0 423 145" fill="none" xmlns:c2pa="http://c2pa.org/manifest">
<path d="M18 97.5608V52.6084C18 51.3628 19.3458 50.5879 20.4246 51.207L59.3562 73.6814C60.3572 74.2597 60.9726 75.3275 60.9726 76.4805V121.433C60.9726 122.679 59.6268 123.453 58.548 122.834L19.6164 100.36C18.6154 99.7816 18 98.7138 18 97.5608Z" fill="#6359FF"></path>
<path d="M23.0495 44.5596L61.373 22.4338C62.374 21.8554 63.6049 21.8554 64.6059 22.4338L102.929 44.5596C104.275 45.3382 104.275 47.2808 102.929 48.0594L64.6059 70.1852C63.6049 70.7636 62.374 70.7636 61.373 70.1852L23.0495 48.0594C21.7037 47.2808 21.7037 45.3382 23.0495 44.5596Z" fill="#FFC806"></path>
<path d="M65.01 121.437V79.7504C65.01 78.5047 66.3558 77.7299 67.4346 78.349L102.929 98.8436C104.275 99.6222 104.275 101.565 102.929 102.343L67.4346 122.838C66.3558 123.461 65.01 122.682 65.01 121.437Z" fill="#0BBFBF"></path>
<path d="M231.97 78.3453C231.536 82.0231 230.001 83.506 227.391 83.506C224.154 83.506 222.442 81.263 222.442 76.6102V76.1468H237.108C237.227 74.9641 237.271 73.9483 237.271 72.8657C237.271 65.8587 233.727 61.9252 227.369 61.9252C220.54 61.9252 216.84 66.0589 216.84 73.5627V75.7093C216.84 83.2094 220.517 87.3321 227.206 87.3321C233.037 87.3321 236.556 84.5738 237.382 79.046L231.97 78.349V78.3453ZM227.317 65.7364C230.212 65.7364 231.669 67.6123 231.669 71.6608V72.2874H222.442C222.553 67.9126 224.177 65.7364 227.317 65.7364Z" fill="#191741"></path>
<path d="M124.588 77.5853L130.353 78.3045C129.678 84.2067 126.208 87.3543 120.199 87.3543C113.369 87.3543 109.833 82.9573 109.833 74.5341V74.4377C109.833 66.2035 113.458 61.8955 120.221 61.8955C126.323 61.8955 129.593 65.1395 130.079 71.2678L124.455 71.9389C124.199 67.705 122.898 65.7623 120.199 65.7623C117.095 65.7623 115.635 68.2611 115.635 73.5183V75.4572C115.635 80.87 117.14 83.4467 120.265 83.4467C122.927 83.4467 124.332 81.504 124.588 77.589V77.5853Z" fill="#191741"></path>
<path d="M143.273 61.8918C136.563 61.8918 132.841 66.5669 132.841 74.3673V74.8752C132.841 82.6237 136.567 87.3507 143.273 87.3507C149.98 87.3507 153.706 82.6237 153.706 74.8752V74.3673C153.706 66.5669 149.98 61.8918 143.273 61.8918ZM147.904 75.7057C147.904 80.9628 146.369 83.4616 143.273 83.4616C140.178 83.4616 138.643 80.9628 138.643 75.7057V73.5368C138.643 68.2797 140.144 65.7587 143.273 65.7587C146.403 65.7587 147.904 68.2797 147.904 73.5368V75.7057Z" fill="#191741"></path>
<path d="M347.971 61.8918C341.26 61.8918 337.538 66.5669 337.538 74.3673V74.8752C337.538 82.6237 341.26 87.3507 347.971 87.3507C354.681 87.3507 358.411 82.6237 358.411 74.8752V74.3673C358.411 66.5669 354.678 61.8918 347.971 61.8918ZM352.601 75.7057C352.601 80.9628 351.078 83.4616 347.971 83.4616C344.864 83.4616 343.348 80.9628 343.348 75.7057V73.5368C343.348 68.2797 344.849 65.7587 347.971 65.7587C351.092 65.7587 352.601 68.2797 352.601 73.5368V75.7057Z" fill="#191741"></path>
<path d="M367.123 55.2815H361.477V86.7685H367.123V55.2815Z" fill="#191741"></path>
<path d="M269.103 77.5853L274.868 78.3045C274.193 84.2067 270.727 87.3543 264.713 87.3543C257.884 87.3543 254.348 82.9573 254.348 74.5341V74.4377C254.348 66.2035 257.973 61.8955 264.736 61.8955C270.838 61.8955 274.108 65.1395 274.594 71.2678L268.97 71.9389C268.714 67.705 267.412 65.7623 264.713 65.7623C261.61 65.7623 260.15 68.2611 260.15 73.5183V75.4572C260.15 80.87 261.655 83.4467 264.78 83.4467C267.442 83.4467 268.847 81.504 269.103 77.589V77.5853Z" fill="#191741"></path>
<path d="M389.127 80.2472C389.127 84.6665 385.701 87.3284 379.799 87.3284C373.508 87.3284 369.896 84.5701 369.741 79.6615L375.102 78.5752C375.057 81.745 376.726 83.5283 379.777 83.5283C382.164 83.5283 383.48 82.6014 383.48 80.7774C383.48 78.9534 382.305 78.1377 379.202 76.9847L376.099 75.8021C373.003 74.6194 370.341 72.3542 370.341 68.973C370.341 64.4833 373.467 61.8918 379.135 61.8918C384.804 61.8918 388.363 64.4648 388.385 68.973L383.136 69.8999C383.247 67.0266 381.82 65.755 379.202 65.755C376.915 65.755 375.643 66.6151 375.643 68.1648C375.643 69.7145 376.751 70.7303 379.855 71.8425L382.95 72.9733C386.053 74.1115 389.127 75.8688 389.127 80.2435V80.2472Z" fill="#191741"></path>
<path d="M324.681 61.8918C317.97 61.8918 314.248 66.5669 314.248 74.3673V74.8752C314.248 82.6237 317.97 87.3507 324.681 87.3507C331.391 87.3507 335.121 82.6237 335.121 74.8752V74.3673C335.121 66.5669 331.388 61.8918 324.681 61.8918ZM329.311 75.7057C329.311 80.9628 327.784 83.4616 324.681 83.4616C321.578 83.4616 320.058 80.9628 320.058 75.7057V73.5368C320.058 68.2797 321.559 65.7587 324.681 65.7587C327.803 65.7587 329.311 68.2797 329.311 73.5368V75.7057Z" fill="#191741"></path>
<path d="M309.399 82.8572C310.444 82.8572 311.738 82.5791 312.965 82.049L312.643 86.1716C311.364 86.8427 309.395 87.3024 307.549 87.3024C303.152 87.3024 300.887 85.0816 300.887 80.3176V56.9757L306.533 55.2852V62.4812H312.899V66.5742H306.533V79.6466C306.533 81.9637 307.482 82.8609 309.399 82.8609V82.8572Z" fill="#191741"></path>
<path d="M292.489 78.3453C292.056 82.0231 290.524 83.506 287.911 83.506C284.67 83.506 282.961 81.263 282.961 76.6102V76.1468H297.628C297.747 74.9641 297.791 73.9483 297.791 72.8657C297.791 65.8587 294.247 61.9252 287.888 61.9252C281.059 61.9252 277.359 66.0589 277.359 73.5627V75.7093C277.359 83.2094 281.037 87.3321 287.725 87.3321C293.561 87.3321 297.075 84.5738 297.906 79.046L292.489 78.349V78.3453ZM287.837 65.7364C290.732 65.7364 292.189 67.6123 292.189 71.6608V72.2874H282.961C283.073 67.9126 284.696 65.7364 287.837 65.7364Z" fill="#191741"></path>
<path d="M174.264 68.9285C176.002 64.0866 178.679 61.8918 182.127 61.8918C185.853 61.8918 187.57 64.5538 186.672 68.7876L187.136 68.9285C188.875 64.0866 191.551 61.8918 194.999 61.8918C198.725 61.8918 200.442 64.5538 199.545 68.7876L200.008 68.9285C201.713 64.0681 204.372 61.8918 208.009 61.8918C211.964 61.8918 213.844 64.2535 213.844 68.7654V86.7686H208.198V69.7182C208.198 67.3121 207.271 66.1146 205.417 66.1146C202.596 66.1146 200.976 69.5847 200.976 74.2301V86.7723H195.359V69.7664C195.359 67.4085 194.302 66.1146 192.545 66.1146C189.727 66.1146 188.103 69.5847 188.103 74.2301V86.7723H182.487V69.7664C182.487 67.4085 181.515 66.0849 179.758 66.0849H179.751V66.1183C179.751 66.1183 179.743 66.1183 179.74 66.1183C176.922 66.1183 175.298 69.5884 175.298 74.2338V86.776H169.681V69.7701C169.681 67.4122 168.71 66.0886 166.953 66.0886C164.224 66.0886 162.411 69.4253 162.411 74.3747V86.776H156.765V62.485H162.433C162.485 63.9643 162.203 65.2804 161.139 68.5652L161.603 68.7728C163.779 63.7975 166.022 61.8993 169.329 61.8993C173.055 61.8993 174.768 64.5612 173.871 68.795L174.271 68.9359L174.264 68.9285Z" fill="#191741"></path>
<path d="M253.877 66.8449C247.574 67.2713 246.099 69.3771 246.099 76.1505V86.7686H240.452V62.4776H246.121C246.173 64.1904 245.943 65.4176 244.805 68.6764L245.268 68.884C246.847 65.21 248.683 61.8288 254.277 61.7139L253.877 66.8412V66.8449Z" fill="#191741"></path>
</svg></svg>
:::

<!-- draft
## Concept · Two kinds of task

- Tier 1: one SDK call; the prompt is given, your assistant does most of the typing.
- Tier 2: a decision you own and defend; the assistant proposes, you decide.
- Pre-built: trainer plumbing — study it, never rebuild it.

> **Ask:** which tier is "write the query" and which is "decide what to do when the store is missing"?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="30" y="40" width="240" height="200" rx="18" fill="#6359FF" />
  <text x="150" y="80" text-anchor="middle" fill="#fff" font-size="13" letter-spacing="2">TIER 1</text>
  <text x="150" y="112" text-anchor="middle" fill="#fff" font-size="18" font-weight="700">AI-accelerated</text>
  <text x="150" y="150" text-anchor="middle" fill="#e6e6ff" font-size="13">one SDK call</text>
  <text x="150" y="172" text-anchor="middle" fill="#e6e6ff" font-size="13">the prompt is given</text>
  <text x="150" y="194" text-anchor="middle" fill="#e6e6ff" font-size="13">200 = done</text>
  <rect x="290" y="40" width="240" height="200" rx="18" fill="#FFC806" />
  <text x="410" y="80" text-anchor="middle" fill="#191741" font-size="13" letter-spacing="2">TIER 2</text>
  <text x="410" y="112" text-anchor="middle" fill="#191741" font-size="18" font-weight="700">Human in the loop</text>
  <text x="410" y="150" text-anchor="middle" fill="#191741" font-size="13">a decision you own</text>
  <text x="410" y="172" text-anchor="middle" fill="#191741" font-size="13">defend it out loud</text>
  <text x="410" y="194" text-anchor="middle" fill="#191741" font-size="13">200 is not enough</text>
  <text x="280" y="275" text-anchor="middle" fill="#6F6D8F" font-size="12">Pre-built · study it, never rebuild it</text>
</svg>
:::
-->

## Concept · One request, four layers

::: visual
<svg width="100%" style="height:auto;display:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" xmlns:c2pa="http://c2pa.org/manifest"><defs><marker id="m191741" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#191741"></path></marker><marker id="m4A42BE" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4A42BE"></path></marker><marker id="m0BBFBF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0BBFBF"></path></marker><marker id="m5B5A7A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#5B5A7A"></path></marker></defs><rect width="1920" height="1080" fill="#F7F2EA"></rect><foreignObject x="96" y="78" width="1740" height="110"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Archivo,'Helvetica Neue',Arial,sans-serif;font-size:68px;font-weight:700;line-height:1.15;letter-spacing:-0.7px;color:#191741;white-space:nowrap">One request, <span style="background:#9FF7EE;border-radius:10px;padding:0 8px;margin:0 0 0 2px">four layers</span>.</div></foreignObject><rect x="96" y="280" width="288" height="140" rx="14" fill="#FFFFFF" stroke="#E6E1D8" stroke-width="2"></rect><text x="240" y="360" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="700" fill="#191741" text-anchor="middle">Storefront</text><rect x="456" y="280" width="288" height="140" rx="14" fill="#FFFFFF" stroke="#6359FF" stroke-width="3"></rect><text x="600" y="330" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="700" fill="#4A42BE" text-anchor="middle" letter-spacing="2.5">API</text><text x="600" y="380" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="22" font-weight="400" fill="#191741" text-anchor="middle">ProjectController</text><rect x="816" y="280" width="288" height="140" rx="14" fill="#FFFFFF" stroke="#6359FF" stroke-width="3"></rect><text x="960" y="330" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="700" fill="#4A42BE" text-anchor="middle" letter-spacing="2.5">APPLICATION</text><text x="960" y="380" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="22" font-weight="400" fill="#191741" text-anchor="middle">ProjectService</text><rect x="1176" y="280" width="288" height="140" rx="14" fill="#FFFFFF" stroke="#0BBFBF" stroke-width="3"></rect><text x="1320" y="330" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="700" fill="#191741" text-anchor="middle" letter-spacing="2.5">INFRASTRUCTURE</text><text x="1320" y="380" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="22" font-weight="400" fill="#191741" text-anchor="middle">CtProjectRepository</text><rect x="1536" y="280" width="288" height="140" rx="14" fill="#FFFFFF" stroke="#E6E1D8" stroke-width="2"></rect><text x="1680" y="360" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="30" font-weight="700" fill="#191741" text-anchor="middle">commercetools</text><path d="M388 350H452" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><path d="M748 350H812" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><path d="M1108 350H1172" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><path d="M1468 350H1532" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><text x="240" y="254" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="22" font-weight="400" fill="#4A42BE" text-anchor="start">GET /api/project</text><path d="M1320 470H966" fill="none" stroke="#5B5A7A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 8" marker-end="url(#m5B5A7A)"></path><text x="1143" y="508" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="400" fill="#5B5A7A" text-anchor="middle">raw SDK Project</text><path d="M960 470H606" fill="none" stroke="#0BBFBF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m0BBFBF)"></path><text x="783" y="508" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="400" fill="#191741" text-anchor="middle">ProjectSummary</text><path d="M600 470H246" fill="none" stroke="#4A42BE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m4A42BE)"></path><text x="423" y="508" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="400" fill="#191741" text-anchor="middle">ProjectView (JSON)</text><rect x="456" y="590" width="1008" height="90" rx="14" fill="#9FF7EE" fill-opacity="0.5" stroke="#0BBFBF" stroke-width="2" stroke-dasharray="10 8"></rect><text x="480" y="622" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="700" fill="#191741" text-anchor="start" letter-spacing="2.5">DOMAIN</text><text x="480" y="660" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">ProjectSummary</text><rect x="96" y="790" width="48" height="5" rx="2.5" fill="#6359FF"></rect><text x="96" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">api receives the request and answers</text><text x="96" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">with a view.</text><rect x="730" y="790" width="48" height="5" rx="2.5" fill="#6359FF"></rect><text x="730" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">application calls the port and maps the</text><text x="730" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">result into domain.</text><rect x="1364" y="790" width="48" height="5" rx="2.5" fill="#0BBFBF"></rect><text x="1364" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">infrastructure is only the SDK call.</text><svg x="96" y="966" width="150" height="51.4" viewBox="0 0 423 145" fill="none" xmlns:c2pa="http://c2pa.org/manifest">
<path d="M18 97.5608V52.6084C18 51.3628 19.3458 50.5879 20.4246 51.207L59.3562 73.6814C60.3572 74.2597 60.9726 75.3275 60.9726 76.4805V121.433C60.9726 122.679 59.6268 123.453 58.548 122.834L19.6164 100.36C18.6154 99.7816 18 98.7138 18 97.5608Z" fill="#6359FF"></path>
<path d="M23.0495 44.5596L61.373 22.4338C62.374 21.8554 63.6049 21.8554 64.6059 22.4338L102.929 44.5596C104.275 45.3382 104.275 47.2808 102.929 48.0594L64.6059 70.1852C63.6049 70.7636 62.374 70.7636 61.373 70.1852L23.0495 48.0594C21.7037 47.2808 21.7037 45.3382 23.0495 44.5596Z" fill="#FFC806"></path>
<path d="M65.01 121.437V79.7504C65.01 78.5047 66.3558 77.7299 67.4346 78.349L102.929 98.8436C104.275 99.6222 104.275 101.565 102.929 102.343L67.4346 122.838C66.3558 123.461 65.01 122.682 65.01 121.437Z" fill="#0BBFBF"></path>
<path d="M231.97 78.3453C231.536 82.0231 230.001 83.506 227.391 83.506C224.154 83.506 222.442 81.263 222.442 76.6102V76.1468H237.108C237.227 74.9641 237.271 73.9483 237.271 72.8657C237.271 65.8587 233.727 61.9252 227.369 61.9252C220.54 61.9252 216.84 66.0589 216.84 73.5627V75.7093C216.84 83.2094 220.517 87.3321 227.206 87.3321C233.037 87.3321 236.556 84.5738 237.382 79.046L231.97 78.349V78.3453ZM227.317 65.7364C230.212 65.7364 231.669 67.6123 231.669 71.6608V72.2874H222.442C222.553 67.9126 224.177 65.7364 227.317 65.7364Z" fill="#191741"></path>
<path d="M124.588 77.5853L130.353 78.3045C129.678 84.2067 126.208 87.3543 120.199 87.3543C113.369 87.3543 109.833 82.9573 109.833 74.5341V74.4377C109.833 66.2035 113.458 61.8955 120.221 61.8955C126.323 61.8955 129.593 65.1395 130.079 71.2678L124.455 71.9389C124.199 67.705 122.898 65.7623 120.199 65.7623C117.095 65.7623 115.635 68.2611 115.635 73.5183V75.4572C115.635 80.87 117.14 83.4467 120.265 83.4467C122.927 83.4467 124.332 81.504 124.588 77.589V77.5853Z" fill="#191741"></path>
<path d="M143.273 61.8918C136.563 61.8918 132.841 66.5669 132.841 74.3673V74.8752C132.841 82.6237 136.567 87.3507 143.273 87.3507C149.98 87.3507 153.706 82.6237 153.706 74.8752V74.3673C153.706 66.5669 149.98 61.8918 143.273 61.8918ZM147.904 75.7057C147.904 80.9628 146.369 83.4616 143.273 83.4616C140.178 83.4616 138.643 80.9628 138.643 75.7057V73.5368C138.643 68.2797 140.144 65.7587 143.273 65.7587C146.403 65.7587 147.904 68.2797 147.904 73.5368V75.7057Z" fill="#191741"></path>
<path d="M347.971 61.8918C341.26 61.8918 337.538 66.5669 337.538 74.3673V74.8752C337.538 82.6237 341.26 87.3507 347.971 87.3507C354.681 87.3507 358.411 82.6237 358.411 74.8752V74.3673C358.411 66.5669 354.678 61.8918 347.971 61.8918ZM352.601 75.7057C352.601 80.9628 351.078 83.4616 347.971 83.4616C344.864 83.4616 343.348 80.9628 343.348 75.7057V73.5368C343.348 68.2797 344.849 65.7587 347.971 65.7587C351.092 65.7587 352.601 68.2797 352.601 73.5368V75.7057Z" fill="#191741"></path>
<path d="M367.123 55.2815H361.477V86.7685H367.123V55.2815Z" fill="#191741"></path>
<path d="M269.103 77.5853L274.868 78.3045C274.193 84.2067 270.727 87.3543 264.713 87.3543C257.884 87.3543 254.348 82.9573 254.348 74.5341V74.4377C254.348 66.2035 257.973 61.8955 264.736 61.8955C270.838 61.8955 274.108 65.1395 274.594 71.2678L268.97 71.9389C268.714 67.705 267.412 65.7623 264.713 65.7623C261.61 65.7623 260.15 68.2611 260.15 73.5183V75.4572C260.15 80.87 261.655 83.4467 264.78 83.4467C267.442 83.4467 268.847 81.504 269.103 77.589V77.5853Z" fill="#191741"></path>
<path d="M389.127 80.2472C389.127 84.6665 385.701 87.3284 379.799 87.3284C373.508 87.3284 369.896 84.5701 369.741 79.6615L375.102 78.5752C375.057 81.745 376.726 83.5283 379.777 83.5283C382.164 83.5283 383.48 82.6014 383.48 80.7774C383.48 78.9534 382.305 78.1377 379.202 76.9847L376.099 75.8021C373.003 74.6194 370.341 72.3542 370.341 68.973C370.341 64.4833 373.467 61.8918 379.135 61.8918C384.804 61.8918 388.363 64.4648 388.385 68.973L383.136 69.8999C383.247 67.0266 381.82 65.755 379.202 65.755C376.915 65.755 375.643 66.6151 375.643 68.1648C375.643 69.7145 376.751 70.7303 379.855 71.8425L382.95 72.9733C386.053 74.1115 389.127 75.8688 389.127 80.2435V80.2472Z" fill="#191741"></path>
<path d="M324.681 61.8918C317.97 61.8918 314.248 66.5669 314.248 74.3673V74.8752C314.248 82.6237 317.97 87.3507 324.681 87.3507C331.391 87.3507 335.121 82.6237 335.121 74.8752V74.3673C335.121 66.5669 331.388 61.8918 324.681 61.8918ZM329.311 75.7057C329.311 80.9628 327.784 83.4616 324.681 83.4616C321.578 83.4616 320.058 80.9628 320.058 75.7057V73.5368C320.058 68.2797 321.559 65.7587 324.681 65.7587C327.803 65.7587 329.311 68.2797 329.311 73.5368V75.7057Z" fill="#191741"></path>
<path d="M309.399 82.8572C310.444 82.8572 311.738 82.5791 312.965 82.049L312.643 86.1716C311.364 86.8427 309.395 87.3024 307.549 87.3024C303.152 87.3024 300.887 85.0816 300.887 80.3176V56.9757L306.533 55.2852V62.4812H312.899V66.5742H306.533V79.6466C306.533 81.9637 307.482 82.8609 309.399 82.8609V82.8572Z" fill="#191741"></path>
<path d="M292.489 78.3453C292.056 82.0231 290.524 83.506 287.911 83.506C284.67 83.506 282.961 81.263 282.961 76.6102V76.1468H297.628C297.747 74.9641 297.791 73.9483 297.791 72.8657C297.791 65.8587 294.247 61.9252 287.888 61.9252C281.059 61.9252 277.359 66.0589 277.359 73.5627V75.7093C277.359 83.2094 281.037 87.3321 287.725 87.3321C293.561 87.3321 297.075 84.5738 297.906 79.046L292.489 78.349V78.3453ZM287.837 65.7364C290.732 65.7364 292.189 67.6123 292.189 71.6608V72.2874H282.961C283.073 67.9126 284.696 65.7364 287.837 65.7364Z" fill="#191741"></path>
<path d="M174.264 68.9285C176.002 64.0866 178.679 61.8918 182.127 61.8918C185.853 61.8918 187.57 64.5538 186.672 68.7876L187.136 68.9285C188.875 64.0866 191.551 61.8918 194.999 61.8918C198.725 61.8918 200.442 64.5538 199.545 68.7876L200.008 68.9285C201.713 64.0681 204.372 61.8918 208.009 61.8918C211.964 61.8918 213.844 64.2535 213.844 68.7654V86.7686H208.198V69.7182C208.198 67.3121 207.271 66.1146 205.417 66.1146C202.596 66.1146 200.976 69.5847 200.976 74.2301V86.7723H195.359V69.7664C195.359 67.4085 194.302 66.1146 192.545 66.1146C189.727 66.1146 188.103 69.5847 188.103 74.2301V86.7723H182.487V69.7664C182.487 67.4085 181.515 66.0849 179.758 66.0849H179.751V66.1183C179.751 66.1183 179.743 66.1183 179.74 66.1183C176.922 66.1183 175.298 69.5884 175.298 74.2338V86.776H169.681V69.7701C169.681 67.4122 168.71 66.0886 166.953 66.0886C164.224 66.0886 162.411 69.4253 162.411 74.3747V86.776H156.765V62.485H162.433C162.485 63.9643 162.203 65.2804 161.139 68.5652L161.603 68.7728C163.779 63.7975 166.022 61.8993 169.329 61.8993C173.055 61.8993 174.768 64.5612 173.871 68.795L174.271 68.9359L174.264 68.9285Z" fill="#191741"></path>
<path d="M253.877 66.8449C247.574 67.2713 246.099 69.3771 246.099 76.1505V86.7686H240.452V62.4776H246.121C246.173 64.1904 245.943 65.4176 244.805 68.6764L245.268 68.884C246.847 65.21 248.683 61.8288 254.277 61.7139L253.877 66.8412V66.8449Z" fill="#191741"></path>
</svg></svg>
:::

<!-- draft
## Concept · One request, four layers

- \`api\` receives the request and answers with a view.
- \`application\` calls the port and **maps** the result into \`domain\`.
- \`infrastructure\` is **only** the SDK call.

> **Show:** Try It 1.1, then the storefront header: the Region menu names the store's country, language and currency.

> **Docs:** [Project](https://docs.commercetools.com/api/projects/project)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m11a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="8" y="70" width="88" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="52" y="96" text-anchor="middle" fill="#191741" font-size="12">Storefront</text>
  <text x="52" y="114" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">GET /api/project</text>
  <line x1="96" y1="100" x2="108" y2="100" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m11a)" />
  <rect x="110" y="70" width="104" height="60" rx="12" fill="#0BBFBF" />
  <text x="162" y="90" text-anchor="middle" fill="#191741" font-size="10" letter-spacing="1">API</text>
  <text x="162" y="110" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">ProjectController</text>
  <line x1="214" y1="100" x2="226" y2="100" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m11a)" />
  <rect x="228" y="70" width="104" height="60" rx="12" fill="#6359FF" />
  <text x="280" y="90" text-anchor="middle" fill="#e6e6ff" font-size="10" letter-spacing="1">APPLICATION</text>
  <text x="280" y="110" text-anchor="middle" fill="#fff" font-size="11" font-weight="700">ProjectService</text>
  <line x1="332" y1="100" x2="344" y2="100" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m11a)" />
  <rect x="346" y="70" width="130" height="60" rx="12" fill="#0BBFBF" />
  <text x="411" y="90" text-anchor="middle" fill="#191741" font-size="10" letter-spacing="1">INFRASTRUCTURE</text>
  <text x="411" y="110" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">CtProjectRepository</text>
  <line x1="476" y1="100" x2="488" y2="100" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m11a)" />
  <rect x="490" y="70" width="62" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="521" y="96" text-anchor="middle" fill="#191741" font-size="11">commerce</text>
  <text x="521" y="112" text-anchor="middle" fill="#191741" font-size="11">tools</text>
  <text x="162" y="152" text-anchor="middle" fill="#6359FF" font-size="11">ProjectView (JSON)</text>
  <text x="411" y="152" text-anchor="middle" fill="#FFC806" font-size="11">raw SDK Project</text>
  <path d="M280,130 L280,172" stroke="#8C8AAE" stroke-width="2" stroke-dasharray="4 3" />
  <rect x="210" y="174" width="140" height="52" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="194" text-anchor="middle" fill="#6359FF" font-size="10" letter-spacing="1">DOMAIN</text>
  <text x="280" y="213" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">ProjectSummary</text>
  <text x="280" y="258" text-anchor="middle" fill="#6F6D8F" font-size="12">SDK types travel left only as far as the service</text>
  <text x="280" y="282" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">the pattern every task copies</text>
</svg>
:::
-->

## Concept · SDK types stop at the service

::: visual
<svg width="100%" style="height:auto;display:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" xmlns:c2pa="http://c2pa.org/manifest"><defs><marker id="m191741" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#191741"></path></marker><marker id="m4A42BE" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4A42BE"></path></marker><marker id="m0BBFBF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0BBFBF"></path></marker><marker id="m5B5A7A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#5B5A7A"></path></marker></defs><rect width="1920" height="1080" fill="#F7F2EA"></rect><foreignObject x="96" y="78" width="1740" height="110"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Archivo,'Helvetica Neue',Arial,sans-serif;font-size:68px;font-weight:700;line-height:1.15;letter-spacing:-0.7px;color:#191741;white-space:nowrap">SDK types <span style="background:#9FF7EE;border-radius:10px;padding:0 8px;margin:0 0 0 2px">stop</span> at the service.</div></foreignObject><rect x="96" y="210" width="704" height="530" rx="14" fill="#FFFFFF" stroke="#E6E1D8" stroke-width="2"></rect><text x="136" y="270" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="700" fill="#191741" text-anchor="start">SDK Project</text><rect x="126" y="304" width="190" height="44" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="136" y="336" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">key</text><rect x="126" y="356" width="190" height="44" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="136" y="388" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">name</text><text x="136" y="440" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">version</text><rect x="126" y="460" width="190" height="44" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="136" y="492" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">currencies</text><rect x="126" y="512" width="190" height="44" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="136" y="544" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">languages</text><rect x="126" y="564" width="190" height="44" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="136" y="596" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">countries</text><text x="136" y="648" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">createdAt</text><text x="456" y="336" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">trialUntil</text><text x="456" y="388" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">messages</text><text x="456" y="440" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">carts</text><text x="456" y="492" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">shoppingLists</text><text x="456" y="544" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">searchIndexing</text><text x="456" y="596" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">businessUnits</text><text x="456" y="648" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">…</text><text x="136" y="712" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="22" font-weight="400" fill="#5B5A7A" text-anchor="start">imports com.commercetools.api</text><text x="1000" y="436" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="400" fill="#5B5A7A" text-anchor="middle">maps</text><path d="M804 476H1190" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><rect x="880" y="446" width="240" height="60" rx="30" fill="#C2C2FF" stroke="#6359FF" stroke-width="3"></rect><text x="1000" y="484" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="24" font-weight="400" fill="#191741" text-anchor="middle">ProjectService</text><rect x="1200" y="290" width="624" height="380" rx="14" fill="#FFFFFF" stroke="#0BBFBF" stroke-width="3"></rect><text x="1240" y="350" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="34" font-weight="700" fill="#191741" text-anchor="start">ProjectSummary</text><rect x="1230" y="376" width="190" height="40" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="1240" y="406" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">key</text><rect x="1230" y="424" width="190" height="40" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="1240" y="454" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">name</text><rect x="1230" y="472" width="190" height="40" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="1240" y="502" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">currencies</text><rect x="1230" y="520" width="190" height="40" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="1240" y="550" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">languages</text><rect x="1230" y="568" width="190" height="40" rx="8" fill="#9FF7EE" stroke="none" stroke-width="2"></rect><text x="1240" y="598" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">countries</text><text x="1240" y="646" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="22" font-weight="400" fill="#5B5A7A" text-anchor="start">no SDK import</text><rect x="96" y="790" width="48" height="5" rx="2.5" fill="#5B5A7A"></rect><text x="96" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">The SDK Project carries dozens of fields</text><text x="96" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">and a client dependency.</text><rect x="730" y="790" width="48" height="5" rx="2.5" fill="#0BBFBF"></rect><text x="730" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">ProjectSummary carries five, and no SDK</text><text x="730" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">import.</text><rect x="1364" y="790" width="48" height="5" rx="2.5" fill="#6359FF"></rect><text x="1364" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">Change the SDK, and only application</text><text x="1364" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">notices.</text><svg x="96" y="966" width="150" height="51.4" viewBox="0 0 423 145" fill="none" xmlns:c2pa="http://c2pa.org/manifest">
<path d="M18 97.5608V52.6084C18 51.3628 19.3458 50.5879 20.4246 51.207L59.3562 73.6814C60.3572 74.2597 60.9726 75.3275 60.9726 76.4805V121.433C60.9726 122.679 59.6268 123.453 58.548 122.834L19.6164 100.36C18.6154 99.7816 18 98.7138 18 97.5608Z" fill="#6359FF"></path>
<path d="M23.0495 44.5596L61.373 22.4338C62.374 21.8554 63.6049 21.8554 64.6059 22.4338L102.929 44.5596C104.275 45.3382 104.275 47.2808 102.929 48.0594L64.6059 70.1852C63.6049 70.7636 62.374 70.7636 61.373 70.1852L23.0495 48.0594C21.7037 47.2808 21.7037 45.3382 23.0495 44.5596Z" fill="#FFC806"></path>
<path d="M65.01 121.437V79.7504C65.01 78.5047 66.3558 77.7299 67.4346 78.349L102.929 98.8436C104.275 99.6222 104.275 101.565 102.929 102.343L67.4346 122.838C66.3558 123.461 65.01 122.682 65.01 121.437Z" fill="#0BBFBF"></path>
<path d="M231.97 78.3453C231.536 82.0231 230.001 83.506 227.391 83.506C224.154 83.506 222.442 81.263 222.442 76.6102V76.1468H237.108C237.227 74.9641 237.271 73.9483 237.271 72.8657C237.271 65.8587 233.727 61.9252 227.369 61.9252C220.54 61.9252 216.84 66.0589 216.84 73.5627V75.7093C216.84 83.2094 220.517 87.3321 227.206 87.3321C233.037 87.3321 236.556 84.5738 237.382 79.046L231.97 78.349V78.3453ZM227.317 65.7364C230.212 65.7364 231.669 67.6123 231.669 71.6608V72.2874H222.442C222.553 67.9126 224.177 65.7364 227.317 65.7364Z" fill="#191741"></path>
<path d="M124.588 77.5853L130.353 78.3045C129.678 84.2067 126.208 87.3543 120.199 87.3543C113.369 87.3543 109.833 82.9573 109.833 74.5341V74.4377C109.833 66.2035 113.458 61.8955 120.221 61.8955C126.323 61.8955 129.593 65.1395 130.079 71.2678L124.455 71.9389C124.199 67.705 122.898 65.7623 120.199 65.7623C117.095 65.7623 115.635 68.2611 115.635 73.5183V75.4572C115.635 80.87 117.14 83.4467 120.265 83.4467C122.927 83.4467 124.332 81.504 124.588 77.589V77.5853Z" fill="#191741"></path>
<path d="M143.273 61.8918C136.563 61.8918 132.841 66.5669 132.841 74.3673V74.8752C132.841 82.6237 136.567 87.3507 143.273 87.3507C149.98 87.3507 153.706 82.6237 153.706 74.8752V74.3673C153.706 66.5669 149.98 61.8918 143.273 61.8918ZM147.904 75.7057C147.904 80.9628 146.369 83.4616 143.273 83.4616C140.178 83.4616 138.643 80.9628 138.643 75.7057V73.5368C138.643 68.2797 140.144 65.7587 143.273 65.7587C146.403 65.7587 147.904 68.2797 147.904 73.5368V75.7057Z" fill="#191741"></path>
<path d="M347.971 61.8918C341.26 61.8918 337.538 66.5669 337.538 74.3673V74.8752C337.538 82.6237 341.26 87.3507 347.971 87.3507C354.681 87.3507 358.411 82.6237 358.411 74.8752V74.3673C358.411 66.5669 354.678 61.8918 347.971 61.8918ZM352.601 75.7057C352.601 80.9628 351.078 83.4616 347.971 83.4616C344.864 83.4616 343.348 80.9628 343.348 75.7057V73.5368C343.348 68.2797 344.849 65.7587 347.971 65.7587C351.092 65.7587 352.601 68.2797 352.601 73.5368V75.7057Z" fill="#191741"></path>
<path d="M367.123 55.2815H361.477V86.7685H367.123V55.2815Z" fill="#191741"></path>
<path d="M269.103 77.5853L274.868 78.3045C274.193 84.2067 270.727 87.3543 264.713 87.3543C257.884 87.3543 254.348 82.9573 254.348 74.5341V74.4377C254.348 66.2035 257.973 61.8955 264.736 61.8955C270.838 61.8955 274.108 65.1395 274.594 71.2678L268.97 71.9389C268.714 67.705 267.412 65.7623 264.713 65.7623C261.61 65.7623 260.15 68.2611 260.15 73.5183V75.4572C260.15 80.87 261.655 83.4467 264.78 83.4467C267.442 83.4467 268.847 81.504 269.103 77.589V77.5853Z" fill="#191741"></path>
<path d="M389.127 80.2472C389.127 84.6665 385.701 87.3284 379.799 87.3284C373.508 87.3284 369.896 84.5701 369.741 79.6615L375.102 78.5752C375.057 81.745 376.726 83.5283 379.777 83.5283C382.164 83.5283 383.48 82.6014 383.48 80.7774C383.48 78.9534 382.305 78.1377 379.202 76.9847L376.099 75.8021C373.003 74.6194 370.341 72.3542 370.341 68.973C370.341 64.4833 373.467 61.8918 379.135 61.8918C384.804 61.8918 388.363 64.4648 388.385 68.973L383.136 69.8999C383.247 67.0266 381.82 65.755 379.202 65.755C376.915 65.755 375.643 66.6151 375.643 68.1648C375.643 69.7145 376.751 70.7303 379.855 71.8425L382.95 72.9733C386.053 74.1115 389.127 75.8688 389.127 80.2435V80.2472Z" fill="#191741"></path>
<path d="M324.681 61.8918C317.97 61.8918 314.248 66.5669 314.248 74.3673V74.8752C314.248 82.6237 317.97 87.3507 324.681 87.3507C331.391 87.3507 335.121 82.6237 335.121 74.8752V74.3673C335.121 66.5669 331.388 61.8918 324.681 61.8918ZM329.311 75.7057C329.311 80.9628 327.784 83.4616 324.681 83.4616C321.578 83.4616 320.058 80.9628 320.058 75.7057V73.5368C320.058 68.2797 321.559 65.7587 324.681 65.7587C327.803 65.7587 329.311 68.2797 329.311 73.5368V75.7057Z" fill="#191741"></path>
<path d="M309.399 82.8572C310.444 82.8572 311.738 82.5791 312.965 82.049L312.643 86.1716C311.364 86.8427 309.395 87.3024 307.549 87.3024C303.152 87.3024 300.887 85.0816 300.887 80.3176V56.9757L306.533 55.2852V62.4812H312.899V66.5742H306.533V79.6466C306.533 81.9637 307.482 82.8609 309.399 82.8609V82.8572Z" fill="#191741"></path>
<path d="M292.489 78.3453C292.056 82.0231 290.524 83.506 287.911 83.506C284.67 83.506 282.961 81.263 282.961 76.6102V76.1468H297.628C297.747 74.9641 297.791 73.9483 297.791 72.8657C297.791 65.8587 294.247 61.9252 287.888 61.9252C281.059 61.9252 277.359 66.0589 277.359 73.5627V75.7093C277.359 83.2094 281.037 87.3321 287.725 87.3321C293.561 87.3321 297.075 84.5738 297.906 79.046L292.489 78.349V78.3453ZM287.837 65.7364C290.732 65.7364 292.189 67.6123 292.189 71.6608V72.2874H282.961C283.073 67.9126 284.696 65.7364 287.837 65.7364Z" fill="#191741"></path>
<path d="M174.264 68.9285C176.002 64.0866 178.679 61.8918 182.127 61.8918C185.853 61.8918 187.57 64.5538 186.672 68.7876L187.136 68.9285C188.875 64.0866 191.551 61.8918 194.999 61.8918C198.725 61.8918 200.442 64.5538 199.545 68.7876L200.008 68.9285C201.713 64.0681 204.372 61.8918 208.009 61.8918C211.964 61.8918 213.844 64.2535 213.844 68.7654V86.7686H208.198V69.7182C208.198 67.3121 207.271 66.1146 205.417 66.1146C202.596 66.1146 200.976 69.5847 200.976 74.2301V86.7723H195.359V69.7664C195.359 67.4085 194.302 66.1146 192.545 66.1146C189.727 66.1146 188.103 69.5847 188.103 74.2301V86.7723H182.487V69.7664C182.487 67.4085 181.515 66.0849 179.758 66.0849H179.751V66.1183C179.751 66.1183 179.743 66.1183 179.74 66.1183C176.922 66.1183 175.298 69.5884 175.298 74.2338V86.776H169.681V69.7701C169.681 67.4122 168.71 66.0886 166.953 66.0886C164.224 66.0886 162.411 69.4253 162.411 74.3747V86.776H156.765V62.485H162.433C162.485 63.9643 162.203 65.2804 161.139 68.5652L161.603 68.7728C163.779 63.7975 166.022 61.8993 169.329 61.8993C173.055 61.8993 174.768 64.5612 173.871 68.795L174.271 68.9359L174.264 68.9285Z" fill="#191741"></path>
<path d="M253.877 66.8449C247.574 67.2713 246.099 69.3771 246.099 76.1505V86.7686H240.452V62.4776H246.121C246.173 64.1904 245.943 65.4176 244.805 68.6764L245.268 68.884C246.847 65.21 248.683 61.8288 254.277 61.7139L253.877 66.8412V66.8449Z" fill="#191741"></path>
</svg></svg>
:::

<!-- draft
## Concept · SDK types stop at the service

- The SDK \`Project\` carries dozens of fields and a client dependency.
- \`ProjectSummary\` carries five, and no SDK import.
- Change the SDK, and only \`application\` notices.

> **Ask:** what would break if the controller returned the SDK \`Project\` directly?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m11b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="24" width="220" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="126" y="54" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">SDK PROJECT</text>
  <text x="126" y="82" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">key · name · version</text>
  <text x="126" y="102" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">currencies · languages</text>
  <text x="126" y="122" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">countries · createdAt</text>
  <text x="126" y="142" text-anchor="middle" fill="#6F6D8F" font-size="12" font-family="Roboto Mono, monospace">trialUntil · messages</text>
  <text x="126" y="162" text-anchor="middle" fill="#6F6D8F" font-size="12" font-family="Roboto Mono, monospace">carts · shoppingLists</text>
  <text x="126" y="182" text-anchor="middle" fill="#6F6D8F" font-size="12" font-family="Roboto Mono, monospace">searchIndexing</text>
  <text x="126" y="202" text-anchor="middle" fill="#6F6D8F" font-size="12" font-family="Roboto Mono, monospace">businessUnits · …</text>
  <text x="126" y="250" text-anchor="middle" fill="#6359FF" font-size="12">imports com.commercetools.api</text>
  <line x1="236" y1="150" x2="318" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m11b)" />
  <text x="277" y="138" text-anchor="middle" fill="#FFC806" font-size="11">ProjectService</text>
  <text x="277" y="168" text-anchor="middle" fill="#FFC806" font-size="11">maps</text>
  <rect x="324" y="24" width="220" height="252" rx="18" fill="#0BBFBF" />
  <text x="434" y="54" text-anchor="middle" fill="#0b3b3b" font-size="12" letter-spacing="2">PROJECTSUMMARY</text>
  <text x="434" y="92" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">key</text>
  <text x="434" y="116" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">name</text>
  <text x="434" y="140" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">currencies</text>
  <text x="434" y="164" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">languages</text>
  <text x="434" y="188" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">countries</text>
  <text x="434" y="250" text-anchor="middle" fill="#191741" font-size="12">a plain Java record · no SDK import</text>
</svg>
:::
-->

## Concept · One client, built once

::: visual
<svg width="100%" style="height:auto;display:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" xmlns:c2pa="http://c2pa.org/manifest"><defs><marker id="m191741" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#191741"></path></marker><marker id="m4A42BE" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#4A42BE"></path></marker><marker id="m0BBFBF" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#0BBFBF"></path></marker><marker id="m5B5A7A" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#5B5A7A"></path></marker></defs><rect width="1920" height="1080" fill="#F7F2EA"></rect><foreignObject x="96" y="78" width="1740" height="110"><div xmlns="http://www.w3.org/1999/xhtml" style="font-family:Archivo,'Helvetica Neue',Arial,sans-serif;font-size:68px;font-weight:700;line-height:1.15;letter-spacing:-0.7px;color:#191741;white-space:nowrap">One client, <span style="background:#9FF7EE;border-radius:10px;padding:0 8px;margin:0 0 0 2px">built once</span>.</div></foreignObject><rect x="96" y="220" width="380" height="340" rx="14" fill="#FFFFFF" stroke="#E6E1D8" stroke-width="2"></rect><text x="136" y="276" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="700" fill="#4A42BE" text-anchor="start" letter-spacing="3">.ENV</text><text x="136" y="350" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">project key</text><text x="136" y="420" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">client id + secret</text><text x="136" y="490" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">region URLs</text><path d="M480 390H592" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><rect x="600" y="230" width="480" height="320" rx="14" fill="#6359FF" stroke="none" stroke-width="2"></rect><text x="640" y="290" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="700" fill="#FFFFFF" text-anchor="start" letter-spacing="3">ONE BEAN</text><text x="640" y="380" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="38" font-weight="400" fill="#FFFFFF" text-anchor="start">ProjectApiRoot</text><text x="640" y="450" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#FFFFFF" text-anchor="start">OAuth + retries handled</text><text x="640" y="488" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#FFFFFF" text-anchor="start">once, for every call</text><path d="M1084 390H1252" fill="none" stroke="#191741" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#m191741)"></path><text x="1168" y="364" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="24" font-weight="400" fill="#5B5A7A" text-anchor="middle">injected</text><rect x="1260" y="230" width="564" height="84" rx="12" fill="#FFFFFF" stroke="#0BBFBF" stroke-width="3"></rect><text x="1296" y="282" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">CtProjectRepository</text><rect x="1260" y="338" width="564" height="84" rx="12" fill="#FFFFFF" stroke="#0BBFBF" stroke-width="3"></rect><text x="1296" y="390" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#191741" text-anchor="start">CtStoreRepository</text><rect x="1260" y="446" width="564" height="84" rx="12" fill="#FFFFFF" stroke="#5B5A7A" stroke-width="2" stroke-dasharray="8 6"></rect><text x="1296" y="498" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">… every adapter</text><text x="96" y="624" font-family="Archivo, 'Helvetica Neue', Arial, sans-serif" font-size="22" font-weight="700" fill="#4A42BE" text-anchor="start" letter-spacing="3">THE FLUENT CHAIN</text><rect x="96" y="646" width="1300" height="100" rx="14" fill="#FBF9F5" stroke="#E6E1D8" stroke-width="2"></rect><text x="130" y="712" font-family="'Roboto Mono', ui-monospace, Menlo, monospace" font-size="38" font-weight="400" fill="#F7F2EA" text-anchor="start">apiRoot<tspan fill="#6359FF">.get()</tspan><tspan fill="#0A948F">.executeBlocking()</tspan><tspan fill="#6359FF">.getBody()</tspan></text><rect x="96" y="790" width="48" height="5" rx="2.5" fill="#6359FF"></rect><text x="96" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">ProjectApiRoot is built once from .env</text><text x="96" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">and injected into every repository.</text><rect x="730" y="790" width="48" height="5" rx="2.5" fill="#6359FF"></rect><text x="730" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">Every call is a fluent chain ending in</text><text x="730" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">executeBlocking().getBody().</text><rect x="1364" y="790" width="48" height="5" rx="2.5" fill="#0BBFBF"></rect><text x="1364" y="836" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start"><tspan font-weight="500" fill="#191741">A single-resource GET:</tspan> getBody() is the</text><text x="1364" y="871" font-family="Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="400" fill="#5B5A7A" text-anchor="start">resource, no envelope.</text><svg x="96" y="966" width="150" height="51.4" viewBox="0 0 423 145" fill="none" xmlns:c2pa="http://c2pa.org/manifest">
<path d="M18 97.5608V52.6084C18 51.3628 19.3458 50.5879 20.4246 51.207L59.3562 73.6814C60.3572 74.2597 60.9726 75.3275 60.9726 76.4805V121.433C60.9726 122.679 59.6268 123.453 58.548 122.834L19.6164 100.36C18.6154 99.7816 18 98.7138 18 97.5608Z" fill="#6359FF"></path>
<path d="M23.0495 44.5596L61.373 22.4338C62.374 21.8554 63.6049 21.8554 64.6059 22.4338L102.929 44.5596C104.275 45.3382 104.275 47.2808 102.929 48.0594L64.6059 70.1852C63.6049 70.7636 62.374 70.7636 61.373 70.1852L23.0495 48.0594C21.7037 47.2808 21.7037 45.3382 23.0495 44.5596Z" fill="#FFC806"></path>
<path d="M65.01 121.437V79.7504C65.01 78.5047 66.3558 77.7299 67.4346 78.349L102.929 98.8436C104.275 99.6222 104.275 101.565 102.929 102.343L67.4346 122.838C66.3558 123.461 65.01 122.682 65.01 121.437Z" fill="#0BBFBF"></path>
<path d="M231.97 78.3453C231.536 82.0231 230.001 83.506 227.391 83.506C224.154 83.506 222.442 81.263 222.442 76.6102V76.1468H237.108C237.227 74.9641 237.271 73.9483 237.271 72.8657C237.271 65.8587 233.727 61.9252 227.369 61.9252C220.54 61.9252 216.84 66.0589 216.84 73.5627V75.7093C216.84 83.2094 220.517 87.3321 227.206 87.3321C233.037 87.3321 236.556 84.5738 237.382 79.046L231.97 78.349V78.3453ZM227.317 65.7364C230.212 65.7364 231.669 67.6123 231.669 71.6608V72.2874H222.442C222.553 67.9126 224.177 65.7364 227.317 65.7364Z" fill="#191741"></path>
<path d="M124.588 77.5853L130.353 78.3045C129.678 84.2067 126.208 87.3543 120.199 87.3543C113.369 87.3543 109.833 82.9573 109.833 74.5341V74.4377C109.833 66.2035 113.458 61.8955 120.221 61.8955C126.323 61.8955 129.593 65.1395 130.079 71.2678L124.455 71.9389C124.199 67.705 122.898 65.7623 120.199 65.7623C117.095 65.7623 115.635 68.2611 115.635 73.5183V75.4572C115.635 80.87 117.14 83.4467 120.265 83.4467C122.927 83.4467 124.332 81.504 124.588 77.589V77.5853Z" fill="#191741"></path>
<path d="M143.273 61.8918C136.563 61.8918 132.841 66.5669 132.841 74.3673V74.8752C132.841 82.6237 136.567 87.3507 143.273 87.3507C149.98 87.3507 153.706 82.6237 153.706 74.8752V74.3673C153.706 66.5669 149.98 61.8918 143.273 61.8918ZM147.904 75.7057C147.904 80.9628 146.369 83.4616 143.273 83.4616C140.178 83.4616 138.643 80.9628 138.643 75.7057V73.5368C138.643 68.2797 140.144 65.7587 143.273 65.7587C146.403 65.7587 147.904 68.2797 147.904 73.5368V75.7057Z" fill="#191741"></path>
<path d="M347.971 61.8918C341.26 61.8918 337.538 66.5669 337.538 74.3673V74.8752C337.538 82.6237 341.26 87.3507 347.971 87.3507C354.681 87.3507 358.411 82.6237 358.411 74.8752V74.3673C358.411 66.5669 354.678 61.8918 347.971 61.8918ZM352.601 75.7057C352.601 80.9628 351.078 83.4616 347.971 83.4616C344.864 83.4616 343.348 80.9628 343.348 75.7057V73.5368C343.348 68.2797 344.849 65.7587 347.971 65.7587C351.092 65.7587 352.601 68.2797 352.601 73.5368V75.7057Z" fill="#191741"></path>
<path d="M367.123 55.2815H361.477V86.7685H367.123V55.2815Z" fill="#191741"></path>
<path d="M269.103 77.5853L274.868 78.3045C274.193 84.2067 270.727 87.3543 264.713 87.3543C257.884 87.3543 254.348 82.9573 254.348 74.5341V74.4377C254.348 66.2035 257.973 61.8955 264.736 61.8955C270.838 61.8955 274.108 65.1395 274.594 71.2678L268.97 71.9389C268.714 67.705 267.412 65.7623 264.713 65.7623C261.61 65.7623 260.15 68.2611 260.15 73.5183V75.4572C260.15 80.87 261.655 83.4467 264.78 83.4467C267.442 83.4467 268.847 81.504 269.103 77.589V77.5853Z" fill="#191741"></path>
<path d="M389.127 80.2472C389.127 84.6665 385.701 87.3284 379.799 87.3284C373.508 87.3284 369.896 84.5701 369.741 79.6615L375.102 78.5752C375.057 81.745 376.726 83.5283 379.777 83.5283C382.164 83.5283 383.48 82.6014 383.48 80.7774C383.48 78.9534 382.305 78.1377 379.202 76.9847L376.099 75.8021C373.003 74.6194 370.341 72.3542 370.341 68.973C370.341 64.4833 373.467 61.8918 379.135 61.8918C384.804 61.8918 388.363 64.4648 388.385 68.973L383.136 69.8999C383.247 67.0266 381.82 65.755 379.202 65.755C376.915 65.755 375.643 66.6151 375.643 68.1648C375.643 69.7145 376.751 70.7303 379.855 71.8425L382.95 72.9733C386.053 74.1115 389.127 75.8688 389.127 80.2435V80.2472Z" fill="#191741"></path>
<path d="M324.681 61.8918C317.97 61.8918 314.248 66.5669 314.248 74.3673V74.8752C314.248 82.6237 317.97 87.3507 324.681 87.3507C331.391 87.3507 335.121 82.6237 335.121 74.8752V74.3673C335.121 66.5669 331.388 61.8918 324.681 61.8918ZM329.311 75.7057C329.311 80.9628 327.784 83.4616 324.681 83.4616C321.578 83.4616 320.058 80.9628 320.058 75.7057V73.5368C320.058 68.2797 321.559 65.7587 324.681 65.7587C327.803 65.7587 329.311 68.2797 329.311 73.5368V75.7057Z" fill="#191741"></path>
<path d="M309.399 82.8572C310.444 82.8572 311.738 82.5791 312.965 82.049L312.643 86.1716C311.364 86.8427 309.395 87.3024 307.549 87.3024C303.152 87.3024 300.887 85.0816 300.887 80.3176V56.9757L306.533 55.2852V62.4812H312.899V66.5742H306.533V79.6466C306.533 81.9637 307.482 82.8609 309.399 82.8609V82.8572Z" fill="#191741"></path>
<path d="M292.489 78.3453C292.056 82.0231 290.524 83.506 287.911 83.506C284.67 83.506 282.961 81.263 282.961 76.6102V76.1468H297.628C297.747 74.9641 297.791 73.9483 297.791 72.8657C297.791 65.8587 294.247 61.9252 287.888 61.9252C281.059 61.9252 277.359 66.0589 277.359 73.5627V75.7093C277.359 83.2094 281.037 87.3321 287.725 87.3321C293.561 87.3321 297.075 84.5738 297.906 79.046L292.489 78.349V78.3453ZM287.837 65.7364C290.732 65.7364 292.189 67.6123 292.189 71.6608V72.2874H282.961C283.073 67.9126 284.696 65.7364 287.837 65.7364Z" fill="#191741"></path>
<path d="M174.264 68.9285C176.002 64.0866 178.679 61.8918 182.127 61.8918C185.853 61.8918 187.57 64.5538 186.672 68.7876L187.136 68.9285C188.875 64.0866 191.551 61.8918 194.999 61.8918C198.725 61.8918 200.442 64.5538 199.545 68.7876L200.008 68.9285C201.713 64.0681 204.372 61.8918 208.009 61.8918C211.964 61.8918 213.844 64.2535 213.844 68.7654V86.7686H208.198V69.7182C208.198 67.3121 207.271 66.1146 205.417 66.1146C202.596 66.1146 200.976 69.5847 200.976 74.2301V86.7723H195.359V69.7664C195.359 67.4085 194.302 66.1146 192.545 66.1146C189.727 66.1146 188.103 69.5847 188.103 74.2301V86.7723H182.487V69.7664C182.487 67.4085 181.515 66.0849 179.758 66.0849H179.751V66.1183C179.751 66.1183 179.743 66.1183 179.74 66.1183C176.922 66.1183 175.298 69.5884 175.298 74.2338V86.776H169.681V69.7701C169.681 67.4122 168.71 66.0886 166.953 66.0886C164.224 66.0886 162.411 69.4253 162.411 74.3747V86.776H156.765V62.485H162.433C162.485 63.9643 162.203 65.2804 161.139 68.5652L161.603 68.7728C163.779 63.7975 166.022 61.8993 169.329 61.8993C173.055 61.8993 174.768 64.5612 173.871 68.795L174.271 68.9359L174.264 68.9285Z" fill="#191741"></path>
<path d="M253.877 66.8449C247.574 67.2713 246.099 69.3771 246.099 76.1505V86.7686H240.452V62.4776H246.121C246.173 64.1904 245.943 65.4176 244.805 68.6764L245.268 68.884C246.847 65.21 248.683 61.8288 254.277 61.7139L253.877 66.8412V66.8449Z" fill="#191741"></path>
</svg></svg>
:::

<!-- draft
## Concept · One client, built once

- \`ProjectApiRoot\` is built once from \`.env\` and injected into every repository.
- Every call is a fluent chain ending in \`executeBlocking().getBody()\`.
- A single-resource GET: \`getBody()\` **is** the resource, no envelope.

> **Docs:** [Get Project](https://docs.commercetools.com/api/projects/project#get-project)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m11c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="40" width="150" height="110" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="91" y="66" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">.ENV</text>
  <text x="91" y="92" text-anchor="middle" fill="#191741" font-size="12">project key</text>
  <text x="91" y="112" text-anchor="middle" fill="#191741" font-size="12">client id + secret</text>
  <text x="91" y="132" text-anchor="middle" fill="#191741" font-size="12">region URLs</text>
  <line x1="166" y1="95" x2="198" y2="95" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m11c)" />
  <rect x="202" y="40" width="156" height="110" rx="14" fill="#6359FF" />
  <text x="280" y="66" text-anchor="middle" fill="#e6e6ff" font-size="12" letter-spacing="2">ONE BEAN</text>
  <text x="280" y="96" text-anchor="middle" fill="#fff" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">ProjectApiRoot</text>
  <text x="280" y="120" text-anchor="middle" fill="#e6e6ff" font-size="11">OAuth + retries handled</text>
  <text x="280" y="136" text-anchor="middle" fill="#e6e6ff" font-size="11">once, for every call</text>
  <line x1="358" y1="95" x2="390" y2="95" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m11c)" />
  <rect x="394" y="40" width="150" height="110" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="469" y="66" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">INJECTED</text>
  <text x="469" y="96" text-anchor="middle" fill="#191741" font-size="12">CtProjectRepository</text>
  <text x="469" y="116" text-anchor="middle" fill="#191741" font-size="12">CtStoreRepository</text>
  <text x="469" y="136" text-anchor="middle" fill="#6F6D8F" font-size="12">… every adapter</text>
  <rect x="16" y="186" width="528" height="88" rx="14" fill="#0BBFBF" />
  <text x="280" y="212" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">THE FLUENT CHAIN</text>
  <text x="280" y="240" text-anchor="middle" fill="#191741" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">apiRoot.get().executeBlocking().getBody()</text>
  <text x="280" y="262" text-anchor="middle" fill="#191741" font-size="12">builder → request → response → the SDK Project</text>
</svg>
:::
-->
`,em=`---
task: project.Session 1.2
summary: Return the project's Stores as a raw SDK List<Store>, with enough on each store for the mapper to surface its distribution-channel keys.
file: project/…/infrastructure/CtStoreRepository.java
method: findAll()
prompt: |
  In bff-java, implement CtStoreRepository.findAll() in the project module's infrastructure layer.
  Query the project's Stores through the injected ProjectApiRoot and return the raw SDK List<Store>
  taken from the paged response's results. Expand distributionChannels[*] so the trainer-provided
  StoreMapper can read each channel's KEY rather than only its id; write no mapping here, StoreService
  already maps the list. Ground every commercetools call on the commercetools Knowledge MCP; do not
  guess API names. Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 1.2 in Commerce Canvas and tell me what the response shows.
---

## Concept · A Store is a boundary

- A Store scopes the **assortment, prices and fulfilment** a shopper sees.
- It also carries its own **languages and countries**.
- US, UK and DE are stores, not a language toggle.

> **Discuss:** what would LHC lose if "region" were only a language switch?

> **Docs:** [Stores](https://docs.commercetools.com/api/projects/stores)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="528" height="60" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="48" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">PROJECT</text>
  <text x="280" y="70" text-anchor="middle" fill="#191741" font-size="12">currencies · languages · countries: everything that is possible</text>
  <rect x="16" y="108" width="164" height="168" rx="16" fill="#0BBFBF" />
  <text x="98" y="134" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">STORE · US</text>
  <text x="98" y="160" text-anchor="middle" fill="#191741" font-size="12">en-US · US · USD</text>
  <text x="98" y="184" text-anchor="middle" fill="#191741" font-size="12">assortment</text>
  <text x="98" y="204" text-anchor="middle" fill="#191741" font-size="12">prices (channel)</text>
  <text x="98" y="224" text-anchor="middle" fill="#191741" font-size="12">fulfilment</text>
  <text x="98" y="256" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">key: …-us</text>
  <rect x="198" y="108" width="164" height="168" rx="16" fill="#6359FF" />
  <text x="280" y="134" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">STORE · UK</text>
  <text x="280" y="160" text-anchor="middle" fill="#fff" font-size="12">en-GB · GB · GBP</text>
  <text x="280" y="184" text-anchor="middle" fill="#fff" font-size="12">assortment</text>
  <text x="280" y="204" text-anchor="middle" fill="#fff" font-size="12">prices (channel)</text>
  <text x="280" y="224" text-anchor="middle" fill="#fff" font-size="12">fulfilment</text>
  <text x="280" y="256" text-anchor="middle" fill="#fff" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">key: …-uk</text>
  <rect x="380" y="108" width="164" height="168" rx="16" fill="#FFC806" />
  <text x="462" y="134" text-anchor="middle" fill="#5a4600" font-size="11" letter-spacing="2">STORE · DE</text>
  <text x="462" y="160" text-anchor="middle" fill="#191741" font-size="12">de-DE · DE · EUR</text>
  <text x="462" y="184" text-anchor="middle" fill="#191741" font-size="12">assortment</text>
  <text x="462" y="204" text-anchor="middle" fill="#191741" font-size="12">prices (channel)</text>
  <text x="462" y="224" text-anchor="middle" fill="#191741" font-size="12">fulfilment</text>
  <text x="462" y="256" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">key: …-de</text>
</svg>
:::

## Concept · A query returns a paged response

- \`GET /stores\` answers an **envelope**, not one object.
- \`results[]\` is this page; \`limit\`, \`offset\`, \`total\` describe the rest.
- \`.getBody().getResults()\` unwraps it.

> **Docs:** [PagedQueryResult](https://docs.commercetools.com/api/general-concepts#pagedqueryresult) · [Pagination](https://docs.commercetools.com/api/general-concepts#pagination)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="220" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="126" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">1.1 · ONE RESOURCE</text>
  <text x="126" y="80" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">GET /{projectKey}</text>
  <text x="40" y="120" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">{</text>
  <text x="56" y="142" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">"key": "…",</text>
  <text x="56" y="162" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">"name": "…",</text>
  <text x="56" y="182" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">"currencies": […]</text>
  <text x="40" y="204" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">}</text>
  <text x="126" y="252" text-anchor="middle" fill="#6359FF" font-size="12">getBody() is the Project</text>
  <rect x="324" y="24" width="220" height="252" rx="18" fill="#0BBFBF" />
  <text x="434" y="52" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">1.2 · A QUERY</text>
  <text x="434" y="80" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">GET /{projectKey}/stores</text>
  <text x="346" y="110" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">{</text>
  <text x="362" y="130" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">"limit": 20,</text>
  <text x="362" y="150" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">"offset": 0,</text>
  <text x="362" y="170" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">"count": 3,</text>
  <text x="362" y="190" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">"total": 3,</text>
  <text x="362" y="210" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">"results": [ … ]</text>
  <text x="346" y="230" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">}</text>
  <text x="434" y="258" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">getBody().getResults()</text>
  <text x="280" y="150" text-anchor="middle" fill="#6F6D8F" font-size="22">vs</text>
</svg>
:::

## Concept · Expand to see the key

- A reference carries \`typeId\` and \`id\` only.
- \`expand=distributionChannels[*]\` fills \`obj\` with the Channel itself.
- The mapper reads \`obj.key\`, falling back to \`id\`.

> **Show:** Try It 1.2: each store's \`channelKeys\` reads as names, not UUIDs.

> **Docs:** [Reference expansion](https://docs.commercetools.com/api/general-concepts#reference-expansion)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m12c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#FFC806" /></marker></defs>
  <rect x="16" y="40" width="228" height="200" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="130" y="68" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">WITHOUT EXPAND</text>
  <text x="36" y="104" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"distributionChannels": [{</text>
  <text x="52" y="126" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"typeId": "channel",</text>
  <text x="52" y="148" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"id": "3f9c-…-81ab"</text>
  <text x="36" y="170" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">}]</text>
  <text x="130" y="216" text-anchor="middle" fill="#6359FF" font-size="12">a pointer, not the thing</text>
  <line x1="244" y1="140" x2="312" y2="140" stroke="#FFC806" stroke-width="2" marker-end="url(#m12c)" />
  <text x="278" y="126" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">[*]</text>
  <rect x="316" y="40" width="228" height="200" rx="18" fill="#0BBFBF" />
  <text x="430" y="68" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">WITH EXPAND</text>
  <text x="336" y="104" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"distributionChannels": [{</text>
  <text x="352" y="126" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"id": "3f9c-…-81ab",</text>
  <text x="352" y="148" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">"obj": { "key": "…-dist",</text>
  <text x="352" y="170" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"roles": […] } }]</text>
  <text x="430" y="216" text-anchor="middle" fill="#191741" font-size="12">the Channel, inline</text>
  <text x="280" y="276" text-anchor="middle" fill="#6F6D8F" font-size="12" font-family="Roboto Mono, monospace">.withExpand("distributionChannels[*]")</text>
</svg>
:::
`,nm=`---
task: project.Session 1.3
summary: Fetch one Store by key and return the raw SDK Store; an unknown key answers a clean 404.
file: project/…/infrastructure/CtStoreRepository.java
method: findByKey(String key)
prompt: |
  In bff-java, implement CtStoreRepository.findByKey(key) in the project module's infrastructure layer.
  Use the commercetools Java SDK through the injected ProjectApiRoot, fetch the Store BY KEY (never by id),
  and return the raw SDK Store. Do not catch exceptions: a commercetools 404 must surface as a
  NotFoundException so the shared error advice turns it into HTTP 404. Ground the SDK call on the
  commercetools Knowledge MCP; do not guess method names. Keep SDK types inside infrastructure.
  Then run Try It for task 1.3 in Commerce Canvas with the key b2c-retail-store, and once more with a
  key that does not exist, and tell me what each response shows.
---

## Concept · Keys, not ids

- An **id** is a UUID the platform assigns.
- A **key** is a name *you* choose: stable, readable, survives a re-import.
- Look things up **by key** wherever a key exists.

> **Discuss:** which of the shop's URLs should carry a key, and which must never leak one?

> **Docs:** [Get Store by Key](https://docs.commercetools.com/api/projects/stores#get-store-by-key)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="230" height="240" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="135" y="68" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">ID</text>
  <text x="135" y="118" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">8f1c2a7e-…-4d9b</text>
  <text x="135" y="160" text-anchor="middle" fill="#6359FF" font-size="14">assigned by the platform</text>
  <text x="135" y="186" text-anchor="middle" fill="#6359FF" font-size="14">new after every import</text>
  <text x="135" y="212" text-anchor="middle" fill="#6359FF" font-size="14">meaningless in a log</text>
  <rect x="270" y="30" width="230" height="240" rx="18" fill="#0BBFBF" stroke="#0BBFBF" />
  <text x="385" y="68" text-anchor="middle" fill="#0b3b3b" font-size="13" letter-spacing="2">KEY</text>
  <text x="385" y="118" text-anchor="middle" fill="#191741" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">b2c-retail-store</text>
  <text x="385" y="160" text-anchor="middle" fill="#191741" font-size="14">chosen by you</text>
  <text x="385" y="186" text-anchor="middle" fill="#191741" font-size="14">same in every project</text>
  <text x="385" y="212" text-anchor="middle" fill="#191741" font-size="14">readable in a URL</text>
  <text x="385" y="252" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">stores().withKey(key)</text>
</svg>
:::

## Concept · The 404 path is not your code

- Your repository is **one call**, no \`try\` / \`catch\`.
- The platform says 404, the SDK throws, the shared advice answers HTTP 404.
- The message is the platform's own sentence, never a stack trace.

> **Show:** Try It with a wrong key before and after: 501 becomes 404.

> **Ask:** what breaks if the repository caught the exception and returned \`null\`?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="150" height="64" rx="12" fill="#6359FF" />
  <text x="95" y="66" text-anchor="middle" fill="#fff" font-size="13">Controller</text>
  <text x="95" y="86" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">GET /api/stores/{key}</text>
  <line x1="170" y1="72" x2="205" y2="72" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="205" y="40" width="150" height="64" rx="12" fill="#6359FF" />
  <text x="280" y="66" text-anchor="middle" fill="#fff" font-size="13">Repository</text>
  <text x="280" y="86" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">withKey(key).get()</text>
  <line x1="355" y1="72" x2="390" y2="72" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="390" y="40" width="150" height="64" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="465" y="66" text-anchor="middle" fill="#191741" font-size="13">commercetools</text>
  <text x="465" y="86" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">404 Not Found</text>
  <path d="M465,104 L465,150 L95,150 L95,196" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a)" />
  <text x="280" y="142" text-anchor="middle" fill="#FFC806" font-size="12">NotFoundException travels up untouched</text>
  <rect x="20" y="200" width="335" height="64" rx="12" fill="#0BBFBF" />
  <text x="187" y="226" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">CtErrorAdvice (platform module)</text>
  <text x="187" y="248" text-anchor="middle" fill="#191741" font-size="12">HTTP 404 · "The Resource with key 'x' was not found."</text>
  <text x="455" y="236" text-anchor="middle" fill="#6F6D8F" font-size="12">no catch in your code</text>
</svg>
:::
`,om=`---
task: project.Session 1.4
summary: Resolve the active store/region: pick the active store from storeKey or a default, decide the fallback when it is missing or unknown (never throw), and build a StoreContext from the repository's existing reads.
file: project/…/application/StoreService.java
method: storeContext(String storeKey)
prompt: |
  In bff-java, implement StoreService.storeContext(storeKey) in the project module's application layer.
  No new SDK call: reuse storeRepository.findAll() from task 1.2 (channels already expanded), pick the
  active store from the ?store= key, and build the domain StoreContext: active key and name, the list
  of switchable store keys, and the active store's languages, countries and distribution-channel keys.
  The one rule: GET /api/store-context never throws. A missing, empty or unknown store key resolves to
  a documented default, and a project with no stores yields an empty-but-valid context.
  Before coding, propose how you will decide what a "region" maps to (Store, Channel or project scope)
  and what the fallback is for a missing or unknown ?store=, and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 1.4 in Commerce Canvas with store=b2c-retail-store, once more with
  store=total-nonsense, and tell me what each response shows.
---

## Concept · What is a region?

- **Project** settings list the *possible* currencies, languages and countries.
- A **Store** selects one active set and its distribution Channel.
- A **Channel** scopes price or stock, nothing more.

> **Ask:** which of the three is "region" for LHC, and what does each other choice lose?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="30" width="164" height="220" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="98" y="58" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">PROJECT SCOPE</text>
  <text x="98" y="92" text-anchor="middle" fill="#191741" font-size="12">USD · GBP · EUR</text>
  <text x="98" y="112" text-anchor="middle" fill="#191741" font-size="12">en-US · en-GB · de-DE</text>
  <text x="98" y="132" text-anchor="middle" fill="#191741" font-size="12">US · GB · DE</text>
  <text x="98" y="176" text-anchor="middle" fill="#6359FF" font-size="12">everything possible</text>
  <text x="98" y="196" text-anchor="middle" fill="#6359FF" font-size="12">nothing chosen</text>
  <rect x="198" y="30" width="164" height="220" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="58" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">STORE</text>
  <text x="280" y="92" text-anchor="middle" fill="#191741" font-size="12">languages</text>
  <text x="280" y="112" text-anchor="middle" fill="#191741" font-size="12">countries</text>
  <text x="280" y="132" text-anchor="middle" fill="#191741" font-size="12">distribution channel</text>
  <text x="280" y="152" text-anchor="middle" fill="#191741" font-size="12">assortment</text>
  <text x="280" y="196" text-anchor="middle" fill="#6359FF" font-size="12">one active set</text>
  <rect x="380" y="30" width="164" height="220" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="462" y="58" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">CHANNEL</text>
  <text x="462" y="92" text-anchor="middle" fill="#191741" font-size="12">a role: distribution</text>
  <text x="462" y="112" text-anchor="middle" fill="#191741" font-size="12">or supply</text>
  <text x="462" y="152" text-anchor="middle" fill="#191741" font-size="12">scopes a price</text>
  <text x="462" y="172" text-anchor="middle" fill="#191741" font-size="12">or a stock entry</text>
  <text x="462" y="216" text-anchor="middle" fill="#6359FF" font-size="12">no languages, no countries</text>
  <text x="280" y="282" text-anchor="middle" fill="#FFC806" font-size="13" font-weight="700">?  your call: which one is "region"</text>
</svg>
:::

## Concept · Resolve, then fall back — never throw

- \`?store=<key>\` is the wish; the stores list is the truth.
- Missing, empty or unknown: answer a **documented default**.
- No stores at all: an **empty-but-valid** context.

> **Show:** Try It with \`store=total-nonsense\`: a 200 with the default, not a 500.

> **Ask:** why not answer 400 for an unknown key, and who would pay for that?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m14b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="110" width="120" height="64" rx="12" fill="#6359FF" />
  <text x="76" y="136" text-anchor="middle" fill="#fff" font-size="12">request</text>
  <text x="76" y="156" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">?store=…</text>
  <line x1="136" y1="142" x2="176" y2="142" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m14b)" />
  <rect x="180" y="100" width="150" height="84" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="255" y="128" text-anchor="middle" fill="#191741" font-size="12">findAll() from 1.2</text>
  <text x="255" y="148" text-anchor="middle" fill="#6359FF" font-size="12">is the key in the list?</text>
  <text x="255" y="168" text-anchor="middle" fill="#6F6D8F" font-size="11">any stores at all?</text>
  <path d="M330,120 L380,60" fill="none" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m14b)" />
  <text x="352" y="76" text-anchor="middle" fill="#0BBFBF" font-size="11">match</text>
  <rect x="384" y="30" width="160" height="56" rx="12" fill="#0BBFBF" />
  <text x="464" y="54" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">active = that store</text>
  <text x="464" y="72" text-anchor="middle" fill="#191741" font-size="11">200</text>
  <path d="M330,142 L380,142" fill="none" stroke="#FFC806" stroke-width="2" marker-end="url(#m14b)" />
  <text x="352" y="134" text-anchor="middle" fill="#FFC806" font-size="11">no match</text>
  <rect x="384" y="114" width="160" height="56" rx="12" fill="#FFC806" />
  <text x="464" y="138" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">active = default</text>
  <text x="464" y="156" text-anchor="middle" fill="#191741" font-size="11">200 · which default is yours</text>
  <path d="M330,166 L380,226" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m14b)" />
  <text x="352" y="214" text-anchor="middle" fill="#6F6D8F" font-size="11">empty list</text>
  <rect x="384" y="200" width="160" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="464" y="224" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">empty StoreContext</text>
  <text x="464" y="242" text-anchor="middle" fill="#6359FF" font-size="11">200 · still valid JSON</text>
  <text x="180" y="262" text-anchor="middle" fill="#FFC806" font-size="13" font-weight="700">no path leads to a throw</text>
</svg>
:::

## Concept · The shape the storefront needs

- Active store: key and name.
- The switch list: every store key.
- Region facets: languages, countries, channel keys.

> **Show:** Region menu → change country: PLP and PDP re-scope to the store's channel, country and currency.

> **Docs:** [Stores](https://docs.commercetools.com/api/projects/stores)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m14c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="24" width="250" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="141" y="52" text-anchor="middle" fill="#6359FF" font-size="11" letter-spacing="2">DOMAIN · STORECONTEXT</text>
  <text x="36" y="86" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">activeStoreKey</text>
  <text x="36" y="108" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">activeStoreName</text>
  <text x="36" y="140" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">availableStoreKeys[]</text>
  <text x="36" y="172" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">languages[]</text>
  <text x="36" y="194" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">countries[]</text>
  <text x="36" y="216" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">distributionChannelKeys[]</text>
  <text x="141" y="256" text-anchor="middle" fill="#6F6D8F" font-size="11">a record, no SDK types</text>
  <line x1="266" y1="96" x2="318" y2="60" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m14c)" />
  <rect x="322" y="36" width="222" height="48" rx="12" fill="#6359FF" />
  <text x="433" y="56" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">Region menu</text>
  <text x="433" y="74" text-anchor="middle" fill="#e6e6ff" font-size="11">names the store</text>
  <line x1="266" y1="136" x2="318" y2="136" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m14c)" />
  <rect x="322" y="112" width="222" height="48" rx="12" fill="#FFC806" />
  <text x="433" y="132" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Store selector</text>
  <text x="433" y="150" text-anchor="middle" fill="#191741" font-size="11">one entry per key</text>
  <line x1="266" y1="194" x2="318" y2="222" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m14c)" />
  <rect x="322" y="198" width="222" height="48" rx="12" fill="#0BBFBF" />
  <text x="433" y="218" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Price selection (Session 2)</text>
  <text x="433" y="236" text-anchor="middle" fill="#191741" font-size="11">channel key + country + currency</text>
</svg>
:::
`,im=`---
task: catalog.Session 2.1
summary: Return the published products for the PLP as the raw SDK paged response (ProductProjectionPagedQueryResponse), results for this page plus total for "Total N products", each carrying the price for the shopper's context.
file: catalog/…/infrastructure/CtProductRepository.java
method: findAll(PriceSelection price)
prompt: |
  In bff-java, implement CtProductRepository.findAll(price) in the catalog module's infrastructure layer.
  Query Product Projections through the injected ProjectApiRoot with staged=false and a server-side
  limit of 20, and apply price selection with the trainer-provided withPrice(request, price) helper:
  priceCurrency always, priceCountry / priceChannel / priceCustomerGroup only when present (channel and
  customer group arrive here already resolved to ids). Return the raw SDK
  ProductProjectionPagedQueryResponse, not getResults(): the service maps results and reads total for
  "Total N products". Ground every commercetools call on the commercetools Knowledge MCP; do not guess
  API names. Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 2.1 in Commerce Canvas and tell me what the response shows, including one
  card's price and whether it changes when you switch the country or the channel.
---

## Concept · The Product model

- **ProductType** is the schema: which attributes a product may carry.
- **Product** → master variant + variants, each with SKU, prices, attributes, images.
- \`staged\` is your draft; \`current\` is what shoppers see.

> **Docs:** [Current and staged](https://docs.commercetools.com/api/product-catalog-overview#current--staged)

::: visual
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m21a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE"/></marker></defs>
  <!-- ProductType: the schema -->
  <rect x="10" y="14" width="200" height="150" rx="12" fill="#FFFFFF" stroke="#C9C6E0"/>
  <text x="110" y="34" text-anchor="middle" fill="#6F6D8F" font-size="10" letter-spacing="2">PRODUCTTYPE</text>
  <text x="110" y="52" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">sofa</text>
  <text x="110" y="66" text-anchor="middle" fill="#6F6D8F" font-size="10">the schema: which attributes</text>
  <rect x="22" y="76" width="176" height="18" rx="6" fill="#F1EFFA"/>
  <text x="30" y="89" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">material <tspan fill="#6359FF">enum</tspan> fabric | leather</text>
  <rect x="22" y="98" width="176" height="18" rx="6" fill="#F1EFFA"/>
  <text x="30" y="111" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">colour <tspan fill="#6359FF">ltext</tspan> en · de</text>
  <rect x="22" y="120" width="176" height="18" rx="6" fill="#F1EFFA"/>
  <text x="30" y="133" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">seats <tspan fill="#6359FF">number</tspan> 2 · 3</text>
  <rect x="22" y="142" width="176" height="18" rx="6" fill="#F1EFFA"/>
  <text x="30" y="155" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">assembly <tspan fill="#6359FF">boolean</tspan></text>
  <!-- defines -->
  <line x1="210" y1="60" x2="222" y2="60" stroke="#8C8AAE" stroke-width="1.5" marker-end="url(#m21a)"/>
  <!-- Product: the container -->
  <rect x="224" y="14" width="326" height="214" rx="12" fill="#FFFFFF" stroke="#6359FF" stroke-width="1.5"/>
  <text x="238" y="34" fill="#6359FF" font-size="10" letter-spacing="2">PRODUCT</text>
  <text x="238" y="54" fill="#191741" font-size="10" font-family="Roboto Mono, monospace"><tspan fill="#6F6D8F">key</tspan> nordic-two-seat-sofa   <tspan fill="#6F6D8F">productType</tspan> sofa</text>
  <text x="238" y="70" fill="#191741" font-size="10" font-family="Roboto Mono, monospace"><tspan fill="#6F6D8F">name</tspan> { en: Nordic Sofa, de: Nordisches Sofa }</text>
  <text x="238" y="86" fill="#191741" font-size="10" font-family="Roboto Mono, monospace"><tspan fill="#6F6D8F">slug</tspan> nordic-two-seat-sofa   <tspan fill="#6F6D8F">categories</tspan> [ sofas ]</text>
  <!-- variants inside the product -->
  <rect x="236" y="98" width="302" height="118" rx="10" fill="#E6FAF9" stroke="#0BBFBF"/>
  <text x="248" y="116" fill="#0A948F" font-size="10" letter-spacing="2">MASTER VARIANT + VARIANTS</text>
  <rect x="246" y="126" width="90" height="78" rx="8" fill="#6359FF"/>
  <text x="291" y="142" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="700" font-family="Roboto Mono, monospace">NTSS-01</text>
  <text x="291" y="155" text-anchor="middle" fill="#E6E6FF" font-size="9">master variant</text>
  <text x="291" y="172" text-anchor="middle" fill="#FFFFFF" font-size="9">material = fabric</text>
  <text x="291" y="184" text-anchor="middle" fill="#FFFFFF" font-size="9">prices · images</text>
  <text x="291" y="196" text-anchor="middle" fill="#E6E6FF" font-size="9">EUR 499 · DE</text>
  <rect x="344" y="126" width="90" height="78" rx="8" fill="#FFFFFF" stroke="#C9C6E0"/>
  <text x="389" y="142" text-anchor="middle" fill="#191741" font-size="10" font-weight="700" font-family="Roboto Mono, monospace">NTSS-02</text>
  <text x="389" y="155" text-anchor="middle" fill="#6F6D8F" font-size="9">variant</text>
  <text x="389" y="172" text-anchor="middle" fill="#191741" font-size="9">material = leather</text>
  <text x="389" y="184" text-anchor="middle" fill="#191741" font-size="9">prices · images</text>
  <text x="389" y="196" text-anchor="middle" fill="#6F6D8F" font-size="9">EUR 699 · DE</text>
  <rect x="442" y="126" width="86" height="78" rx="8" fill="#FFFFFF" stroke="#C9C6E0" stroke-dasharray="4 3"/>
  <text x="485" y="142" text-anchor="middle" fill="#191741" font-size="10" font-weight="700" font-family="Roboto Mono, monospace">NTSS-03 …</text>
  <text x="485" y="155" text-anchor="middle" fill="#6F6D8F" font-size="9">variant</text>
  <text x="485" y="172" text-anchor="middle" fill="#191741" font-size="9">colour = blue</text>
  <text x="485" y="184" text-anchor="middle" fill="#191741" font-size="9">prices · images</text>
  <text x="485" y="196" text-anchor="middle" fill="#6F6D8F" font-size="9">one SKU each</text>
  <!-- staged vs current -->
  <rect x="10" y="244" width="262" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0"/>
  <text x="141" y="262" text-anchor="middle" fill="#191741" font-size="12"><tspan font-family="Roboto Mono, monospace" font-weight="700">staged</tspan> · your draft</text>
  <text x="141" y="276" text-anchor="middle" fill="#6F6D8F" font-size="9">edited in Merchant Center, not yet published</text>
  <rect x="288" y="244" width="262" height="40" rx="10" fill="#FFC806"/>
  <text x="419" y="262" text-anchor="middle" fill="#191741" font-size="12" font-weight="700"><tspan font-family="Roboto Mono, monospace">current</tspan> · what shoppers see</text>
  <text x="419" y="276" text-anchor="middle" fill="#5a4600" font-size="9">the projection your PLP reads: staged=false</text>
</svg>
:::

## Concept · Retrieval, not discovery

- **Product Projections**: current data, ready to render. PLP and PDP.
- **Product Search**: full-text, facets, sorting. Session 3.
- A projection query answers the paged envelope: \`results\` plus \`total\`.

> **Show:** Try It 2.1: \`total\` drives "Total N products" even when the page holds 20.

> **Docs:** [Product Projections](https://docs.commercetools.com/api/projects/productProjections#query-productprojections)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="256" height="252" rx="18" fill="#0BBFBF" />
  <text x="144" y="52" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">RETRIEVAL · TODAY</text>
  <text x="144" y="80" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">Product Projections</text>
  <text x="144" y="112" text-anchor="middle" fill="#191741" font-size="12">typed, current, ready to render</text>
  <text x="144" y="132" text-anchor="middle" fill="#191741" font-size="12">price selection rides along</text>
  <text x="144" y="152" text-anchor="middle" fill="#191741" font-size="12">list by id / key / category</text>
  <rect x="40" y="176" width="208" height="76" rx="10" fill="#FFFFFF" />
  <text x="144" y="198" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">productProjections().get()</text>
  <text x="144" y="216" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">.withStaged(false).withLimit(20)</text>
  <text x="144" y="240" text-anchor="middle" fill="#FFC806" font-size="11">getBody(): results + total</text>
  <rect x="288" y="24" width="256" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="416" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">DISCOVERY · SESSION 3</text>
  <text x="416" y="80" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">Product Search</text>
  <text x="416" y="112" text-anchor="middle" fill="#6359FF" font-size="12">full-text, fuzzy</text>
  <text x="416" y="132" text-anchor="middle" fill="#6359FF" font-size="12">facets, sort, store scope</text>
  <text x="416" y="152" text-anchor="middle" fill="#6359FF" font-size="12">returns ids, then hydrate</text>
  <rect x="312" y="176" width="208" height="76" rx="10" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="416" y="214" text-anchor="middle" fill="#6F6D8F" font-size="12">parked until Find It</text>
</svg>
:::

## Concept · Price selection: the most specific match wins

- Pass every parameter you have; the platform picks one \`price\`.
- Precedence: Customer Group › Channel › Country › base currency.
- \`price.discounted\` rides along: the sale price costs no extra call.

> **Show:** switch country or channel in the storefront header: the card's price changes, or shows "—".

> **Docs:** [Price selection](https://docs.commercetools.com/api/pricing-and-discounts-overview#price-selection)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m21c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#FFC806" /></marker></defs>
  <rect x="16" y="24" width="230" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="131" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">VARIANT · PRICES[]</text>
  <rect x="32" y="68" width="198" height="34" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="131" y="90" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">EUR 49.00 · base</text>
  <rect x="32" y="110" width="198" height="34" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="131" y="132" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">EUR 45.00 · country DE</text>
  <rect x="32" y="152" width="198" height="34" rx="8" fill="#FFC806" />
  <text x="131" y="174" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">EUR 39.00 · channel</text>
  <rect x="32" y="194" width="198" height="34" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="131" y="216" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">USD 55.00 · base</text>
  <text x="131" y="258" text-anchor="middle" fill="#6F6D8F" font-size="11">all embedded prices</text>
  <line x1="246" y1="169" x2="300" y2="169" stroke="#FFC806" stroke-width="2" marker-end="url(#m21c)" />
  <rect x="304" y="24" width="240" height="140" rx="18" fill="#0BBFBF" />
  <text x="424" y="52" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">PRECEDENCE</text>
  <text x="424" y="80" text-anchor="middle" fill="#191741" font-size="12">Customer Group</text>
  <text x="424" y="100" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">› Channel</text>
  <text x="424" y="120" text-anchor="middle" fill="#191741" font-size="12">› Country</text>
  <text x="424" y="140" text-anchor="middle" fill="#191741" font-size="12">› base currency price</text>
  <rect x="304" y="176" width="240" height="100" rx="18" fill="#FFC806" />
  <text x="424" y="200" text-anchor="middle" fill="#5a4600" font-size="11" letter-spacing="2">SELECTED · PRICE</text>
  <text x="424" y="226" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">value: EUR 3900</text>
  <text x="424" y="248" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">discounted: EUR 3500 ?</text>
  <text x="424" y="266" text-anchor="middle" fill="#191741" font-size="11">centAmount, minor units</text>
</svg>
:::
`,lm=`---
task: catalog.Session 2.2
summary: Fetch ONE product BY KEY (not id) as a raw SDK ProductProjection for the PDP, carrying the price for the shopper's context; a commercetools 404 surfaces as a NotFoundException → clean HTTP 404.
file: catalog/…/infrastructure/CtProductRepository.java
method: findByKey(String key, PriceSelection price)
prompt: |
  In bff-java, implement CtProductRepository.findByKey(key, price) in the catalog module's infrastructure
  layer. Fetch one Product Projection BY KEY (never by id) through the injected ProjectApiRoot with
  staged=false, applying the same price selection as 2.1 through the trainer-provided
  withPrice(request, price) helper, and return the raw SDK ProductProjection from getBody().
  Do not catch exceptions: a commercetools 404 must surface as a NotFoundException so the shared error
  advice turns it into HTTP 404. Ground every commercetools call on the commercetools Knowledge MCP;
  do not guess API names. Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 2.2 in Commerce Canvas with a key from the 2.1 response, once more with a
  key that does not exist, and tell me what each response shows.
---

## Concept · Same read, one product

- \`productProjections().withKey(key)\` replaces the list query.
- Same \`withStaged(false)\`, same price selection.
- A single-resource GET: \`getBody()\` is the projection, no envelope.

> **Docs:** [Get ProductProjection by key](https://docs.commercetools.com/api/projects/productProjections#get-productprojection-by-key)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="256" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="144" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">2.1 · THE LIST</text>
  <text x="144" y="84" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">productProjections()</text>
  <text x="144" y="102" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">.get()</text>
  <text x="144" y="120" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">.withStaged(false)</text>
  <text x="144" y="138" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">.withLimit(20)</text>
  <text x="144" y="156" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">+ price selection</text>
  <rect x="40" y="184" width="208" height="68" rx="10" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="144" y="208" text-anchor="middle" fill="#191741" font-size="12">getBody() = envelope</text>
  <text x="144" y="230" text-anchor="middle" fill="#6F6D8F" font-size="11" font-family="Roboto Mono, monospace">results[] · total</text>
  <rect x="288" y="24" width="256" height="252" rx="18" fill="#0BBFBF" />
  <text x="416" y="52" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">2.2 · ONE PRODUCT</text>
  <text x="416" y="84" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">productProjections()</text>
  <text x="416" y="102" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">.withKey(key)</text>
  <text x="416" y="120" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">.get()</text>
  <text x="416" y="138" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">.withStaged(false)</text>
  <text x="416" y="156" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">+ price selection</text>
  <rect x="312" y="184" width="208" height="68" rx="10" fill="#FFFFFF" />
  <text x="416" y="208" text-anchor="middle" fill="#191741" font-size="12">getBody() = the projection</text>
  <text x="416" y="230" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">masterVariant.price</text>
</svg>
:::

## Concept · The PDP routes by key; the 404 is still not yours

- The URL carries the **key**: stable, non-localized. The slug arrives in 2.5.
- Unknown key: the SDK throws \`NotFoundException\`, the shared advice answers 404.
- Still no \`try\` / \`catch\` in the repository.

> **Show:** Try It with an unknown key, then click a card in the storefront: the PDP renders.

> **Ask:** what would an id in the URL cost you after a re-import?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m22b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="40" width="160" height="90" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="96" y="66" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">SDK</text>
  <text x="96" y="92" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">withKey("nope")</text>
  <text x="96" y="114" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">NotFoundException</text>
  <line x1="176" y1="85" x2="196" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m22b)" />
  <rect x="200" y="40" width="160" height="90" rx="14" fill="#6359FF" />
  <text x="280" y="66" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">PLATFORM MODULE</text>
  <text x="280" y="92" text-anchor="middle" fill="#fff" font-size="12">CtErrorAdvice</text>
  <text x="280" y="114" text-anchor="middle" fill="#e6e6ff" font-size="11">handles it once, centrally</text>
  <line x1="360" y1="85" x2="380" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m22b)" />
  <rect x="384" y="40" width="160" height="90" rx="14" fill="#0BBFBF" />
  <text x="464" y="66" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">STOREFRONT</text>
  <text x="464" y="92" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">HTTP 404</text>
  <text x="464" y="114" text-anchor="middle" fill="#191741" font-size="11">the not-found page</text>
  <rect x="16" y="166" width="256" height="104" rx="14" fill="#0BBFBF" />
  <text x="144" y="192" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">KEY</text>
  <text x="144" y="218" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">/api/products/{key}</text>
  <text x="144" y="240" text-anchor="middle" fill="#191741" font-size="12">chosen by you · survives re-import</text>
  <text x="144" y="258" text-anchor="middle" fill="#191741" font-size="12">same in every project</text>
  <rect x="288" y="166" width="256" height="104" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="416" y="192" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">ID</text>
  <text x="416" y="218" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">/api/products/8f1c…4d9b</text>
  <text x="416" y="240" text-anchor="middle" fill="#6359FF" font-size="12">assigned by the platform</text>
  <text x="416" y="258" text-anchor="middle" fill="#6359FF" font-size="12">new after every import</text>
</svg>
:::
`,am=`---
task: catalog.Session 2.3
summary: Return the project's categories as a raw SDK List<Category> for the storefront's category navigation.
file: catalog/…/infrastructure/CtCategoryRepository.java
method: findAll()
prompt: |
  In bff-java, implement CtCategoryRepository.findAll() in the catalog module's infrastructure layer.
  Query Categories through the injected ProjectApiRoot with a server-side limit large enough to hold
  the whole tree (100), and return the raw SDK List<Category> taken from the paged response's results.
  Write no mapping here: CatalogService already resolves each name and slug LocalizedString and
  assembles the parent/child tree from the flat list. Ground every commercetools call on the
  commercetools Knowledge MCP; do not guess API names. Keep SDK types inside infrastructure; the
  service maps to domain types.
  Then run Try It for task 2.3 in Commerce Canvas and tell me what the response shows.
---

## Concept · A category is a node with a parent

- The API returns a **flat list**; each category points at its \`parent\`.
- The service assembles the tree in Java: no extra call.
- \`limit\` must cover the whole tree, or branches go missing.

> **Show:** Try It 2.3: nested \`children\`; then the storefront mega menu and home category cards.

> **Docs:** [Query Categories](https://docs.commercetools.com/api/projects/categories#query-categories)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m23a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#FFC806" /></marker></defs>
  <rect x="16" y="24" width="236" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="134" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">RESULTS[] · FLAT</text>
  <rect x="32" y="68" width="204" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="44" y="88" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">furniture   parent: –</text>
  <rect x="32" y="104" width="204" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="44" y="124" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">sofas       parent: furniture</text>
  <rect x="32" y="140" width="204" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="44" y="160" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">chairs      parent: furniture</text>
  <rect x="32" y="176" width="204" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="44" y="196" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">lighting    parent: –</text>
  <rect x="32" y="212" width="204" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="44" y="232" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">lamps       parent: lighting</text>
  <text x="134" y="264" text-anchor="middle" fill="#6359FF" font-size="11">parent is a reference (id)</text>
  <line x1="252" y1="150" x2="304" y2="150" stroke="#FFC806" stroke-width="2" marker-end="url(#m23a)" />
  <text x="278" y="138" text-anchor="middle" fill="#FFC806" font-size="10">categoryTree</text>
  <rect x="308" y="24" width="236" height="252" rx="18" fill="#0BBFBF" />
  <text x="426" y="52" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">DOMAIN · TREE</text>
  <text x="330" y="90" fill="#191741" font-size="13" font-weight="700">Furniture</text>
  <line x1="340" y1="98" x2="340" y2="150" stroke="#191741" stroke-width="2" />
  <line x1="340" y1="118" x2="356" y2="118" stroke="#191741" stroke-width="2" />
  <text x="362" y="122" fill="#191741" font-size="12">Sofas</text>
  <line x1="340" y1="150" x2="356" y2="150" stroke="#191741" stroke-width="2" />
  <text x="362" y="154" fill="#191741" font-size="12">Chairs</text>
  <text x="330" y="196" fill="#191741" font-size="13" font-weight="700">Lighting</text>
  <line x1="340" y1="204" x2="340" y2="224" stroke="#191741" stroke-width="2" />
  <line x1="340" y1="224" x2="356" y2="224" stroke="#191741" stroke-width="2" />
  <text x="362" y="228" fill="#191741" font-size="12">Lamps</text>
  <text x="426" y="264" text-anchor="middle" fill="#191741" font-size="11">{ key, name, slug, children[] }</text>
</svg>
:::

## Concept · LocalizedString: one value per locale

- \`name\` and \`slug\` are objects keyed by locale.
- The mapper resolves one: exact → same language → first available.
- The repository returns the SDK \`Category\`; resolution stays in the service.

> **Discuss:** a German shopper opens a category with no \`de-DE\` name. What should they see?

> **Docs:** [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m23b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="40" width="230" height="140" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="131" y="68" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">NAME · LOCALIZEDSTRING</text>
  <text x="36" y="100" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">{</text>
  <text x="52" y="120" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"en-US": "Lighting",</text>
  <text x="52" y="140" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">"de-DE": "Beleuchtung"</text>
  <text x="36" y="160" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">}</text>
  <line x1="246" y1="80" x2="312" y2="80" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m23b)" />
  <line x1="246" y1="128" x2="312" y2="128" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m23b)" />
  <line x1="246" y1="176" x2="312" y2="176" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m23b)" />
  <rect x="316" y="60" width="228" height="40" rx="10" fill="#0BBFBF" />
  <text x="330" y="85" fill="#191741" font-size="12"><tspan font-family="Roboto Mono, monospace">de-DE</tspan>  → Beleuchtung  · exact</text>
  <rect x="316" y="108" width="228" height="40" rx="10" fill="#6359FF" />
  <text x="330" y="133" fill="#fff" font-size="12"><tspan font-family="Roboto Mono, monospace">de-AT</tspan>  → Beleuchtung  · language</text>
  <rect x="316" y="156" width="228" height="40" rx="10" fill="#FFC806" />
  <text x="330" y="181" fill="#191741" font-size="12"><tspan font-family="Roboto Mono, monospace">fr-FR</tspan>  → Lighting  · first</text>
  <text x="280" y="236" text-anchor="middle" fill="#6359FF" font-size="12">the same chain resolves the slug: the URL is localized too</text>
  <text x="280" y="262" text-anchor="middle" fill="#6F6D8F" font-size="11">task 2.5 makes this chain a decision you own</text>
</svg>
:::
`,rm=`---
task: catalog.Session 2.4
summary: Pre-built — study it: resolve a category by key, collect its subtree ids, and filter products in one categories(id in :ids) query; an unknown key returns an empty page, never an error.
file: catalog/…/application/CatalogService.java
method: categoryProducts(String key, String locale, PriceSelection price)
prompt: |
  In bff-java, read CatalogService.categoryProducts(key, locale, price) and its helper subtreeIds(...)
  in the catalog module's application layer, together with the trainer-provided read
  CtProductRepository.findByCategory(categoryIds, price). Explain to me: why the service walks the
  category tree before it queries products, what the predicate categories(id in :ids) does and why it
  is one query rather than one per category, and why an unknown key returns an empty page instead of
  a 404 (contrast with task 1.3). Then tell me which of the three ways to get a subtree this is
  (Projections plus collected ids, Product Search categoriesSubTree, fetch-all-then-filter) and why
  the other two were not chosen for this session. Do not change any code.
  Then run Try It for task 2.4 in Commerce Canvas with the key furniture, once more with a key that
  does not exist, and tell me what each response shows.
---

## Concept · Products live on the leaves

- A parent category has **0 direct** products.
- "Its products" means the category **plus its whole subtree**.
- Identify the category by **key**: stable, non-localized.

> **Docs:** [Category queries best practices](https://docs.commercetools.com/learning-implement-product-discovery-and-presentation/category-queries-best-practices/overview)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="200" y="24" width="160" height="50" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="46" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Furniture</text>
  <text x="280" y="64" text-anchor="middle" fill="#FFC806" font-size="11">0 direct products</text>
  <line x1="280" y1="74" x2="140" y2="116" stroke="#8C8AAE" stroke-width="2" />
  <line x1="280" y1="74" x2="280" y2="116" stroke="#8C8AAE" stroke-width="2" />
  <line x1="280" y1="74" x2="420" y2="116" stroke="#8C8AAE" stroke-width="2" />
  <rect x="70" y="118" width="140" height="46" rx="12" fill="#6359FF" />
  <text x="140" y="138" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">Sofas</text>
  <text x="140" y="156" text-anchor="middle" fill="#e6e6ff" font-size="11">leaf · products</text>
  <rect x="210" y="118" width="140" height="46" rx="12" fill="#6359FF" />
  <text x="280" y="138" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">Chairs</text>
  <text x="280" y="156" text-anchor="middle" fill="#e6e6ff" font-size="11">leaf · products</text>
  <rect x="350" y="118" width="140" height="46" rx="12" fill="#6359FF" />
  <text x="420" y="138" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">Tables</text>
  <text x="420" y="156" text-anchor="middle" fill="#e6e6ff" font-size="11">leaf · products</text>
  <rect x="70" y="180" width="60" height="40" rx="6" fill="#0BBFBF" /><rect x="138" y="180" width="60" height="40" rx="6" fill="#0BBFBF" />
  <rect x="210" y="180" width="60" height="40" rx="6" fill="#0BBFBF" /><rect x="278" y="180" width="60" height="40" rx="6" fill="#0BBFBF" />
  <rect x="350" y="180" width="60" height="40" rx="6" fill="#0BBFBF" /><rect x="418" y="180" width="60" height="40" rx="6" fill="#0BBFBF" />
  <rect x="40" y="110" width="480" height="122" rx="16" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" />
  <text x="280" y="262" text-anchor="middle" fill="#FFC806" font-size="13" font-weight="700">click Furniture → include the whole subtree</text>
  <text x="280" y="284" text-anchor="middle" fill="#6F6D8F" font-size="11">direct-only would show an empty page</text>
</svg>
:::

## Concept · One filtered query, not N+1

- Walk the tree once: the id plus every descendant id.
- Filter once: \`categories(id in :ids)\` with a predicate variable.
- The paged response carries \`total\` for "Total N products".

> **Ask:** spot the wrong way: A Projections + ids · B Product Search \`categoriesSubTree\` · C fetch all, filter in Java.

> **Docs:** [Query predicates](https://docs.commercetools.com/api/predicates/query) · [categoriesSubTree (Session 3)](https://docs.commercetools.com/api/projects/product-search#filter-by-category-subtree)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m24b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="30" width="150" height="110" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="91" y="56" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">1 · RESOLVE</text>
  <text x="91" y="84" text-anchor="middle" fill="#191741" font-size="12">find by key</text>
  <text x="91" y="104" text-anchor="middle" fill="#6359FF" font-size="11">in the 2.3 list</text>
  <text x="91" y="124" text-anchor="middle" fill="#FFC806" font-size="11">unknown → empty page</text>
  <line x1="166" y1="85" x2="198" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m24b)" />
  <rect x="202" y="30" width="150" height="110" rx="14" fill="#6359FF" />
  <text x="277" y="56" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">2 · COLLECT</text>
  <text x="277" y="84" text-anchor="middle" fill="#fff" font-size="12">subtreeIds(root, all)</text>
  <text x="277" y="104" text-anchor="middle" fill="#e6e6ff" font-size="11">breadth-first over parent</text>
  <text x="277" y="124" text-anchor="middle" fill="#e6e6ff" font-size="11">pure Java, no API call</text>
  <line x1="352" y1="85" x2="384" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m24b)" />
  <rect x="388" y="30" width="156" height="110" rx="14" fill="#0BBFBF" />
  <text x="466" y="56" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">3 · FILTER ONCE</text>
  <text x="466" y="84" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">findByCategory(ids)</text>
  <text x="466" y="104" text-anchor="middle" fill="#191741" font-size="11">+ price selection</text>
  <text x="466" y="124" text-anchor="middle" fill="#191741" font-size="11">results + total</text>
  <rect x="16" y="170" width="528" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="194" text-anchor="middle" fill="#6359FF" font-size="11" letter-spacing="1">THE PREDICATE</text>
  <text x="280" y="216" text-anchor="middle" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">where categories(id in :ids)   ·   withPredicateVar("ids", ids)</text>
  <text x="280" y="262" text-anchor="middle" fill="#6F6D8F" font-size="12">one round trip for the whole subtree, however deep</text>
  <text x="280" y="284" text-anchor="middle" fill="#6F6D8F" font-size="11">a reference-array field matches when any element's id is in the set</text>
</svg>
:::

## Concept · A filter miss is not a lookup miss

- 1.3 looked **one thing** up: unknown key → 404.
- 2.4 **filters**: unknown key → \`{ products: [], total: 0 }\`.
- Neither path throws from your code.

> **Show:** Try It with \`furniture\`, then with a made-up key: 200 both times, one of them empty.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="256" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="144" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">LOOKUP · 1.3 / 2.2</text>
  <text x="144" y="84" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">GET /api/stores/nope</text>
  <text x="144" y="116" text-anchor="middle" fill="#6359FF" font-size="12">"give me this one"</text>
  <text x="144" y="136" text-anchor="middle" fill="#6359FF" font-size="12">it does not exist</text>
  <rect x="60" y="164" width="168" height="56" rx="12" fill="#FFC806" />
  <text x="144" y="188" text-anchor="middle" fill="#191741" font-size="16" font-weight="700">404</text>
  <text x="144" y="208" text-anchor="middle" fill="#191741" font-size="11">from the shared advice</text>
  <text x="144" y="256" text-anchor="middle" fill="#6F6D8F" font-size="11">the platform said so</text>
  <rect x="288" y="24" width="256" height="252" rx="18" fill="#0BBFBF" />
  <text x="416" y="52" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">FILTER · 2.4</text>
  <text x="416" y="84" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">GET /api/categories/nope/products</text>
  <text x="416" y="116" text-anchor="middle" fill="#191741" font-size="12">"everything matching this"</text>
  <text x="416" y="136" text-anchor="middle" fill="#191741" font-size="12">nothing matches</text>
  <rect x="332" y="164" width="168" height="56" rx="12" fill="#FFFFFF" />
  <text x="416" y="188" text-anchor="middle" fill="#191741" font-size="16" font-weight="700">200</text>
  <text x="416" y="208" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">{ products: [], total: 0 }</text>
  <text x="416" y="256" text-anchor="middle" fill="#191741" font-size="11">the service decided so</text>
</svg>
:::
`,sm=`---
task: catalog.Session 2.5
summary: Resolve a product from its LOCALIZED slug using the trainer-provided read productRepository.findBySlug(...); decide the locale fallback and the 404-vs-fallback policy — a missing-locale slug falls back, a truly-unknown slug 404s, never silently resolving to another product.
file: catalog/…/application/CatalogService.java
method: productBySlug(String slug, String locale, PriceSelection price)
prompt: |
  In bff-java, implement CatalogService.productBySlug(slug, locale, price) in the catalog module's
  application layer. Resolve a product from its LOCALIZED slug with the trainer-provided read
  productRepository.findBySlug(locale, slug, price), which tests one locale per call through the
  predicate slug(<locale> = :slug): try the requested locale first, then your fallback chain, and map
  the first hit to a ProductSummary displayed in the requested locale.
  The one rule: a slug missing in the requested locale falls back; a slug present in no locale answers
  404 and never resolves to a different product.
  Before coding, propose how you will decide the locale fallback chain (for example de-DE → de → the
  project default) and the 404-vs-fallback policy, and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 2.5 in Commerce Canvas with slug nala-zweisitzer-sofa and locale de-DE,
  once with slug nala-two-seater-sofa and locale de-DE, once with a slug that does not exist, and tell
  me what each response shows.
---

## Concept · key vs slug

- **key**: stable, non-localized. Code, routing between layers, cart lines.
- **slug**: localized, SEO-facing. The URL the shopper sees and shares.
- Storefront URLs resolve **by slug**, never through a key lookup.

> **Docs:** [LocalizedString](https://docs.commercetools.com/api/types#localizedstring) · [Query predicates](https://docs.commercetools.com/api/predicates/query)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="230" height="252" rx="18" fill="#0BBFBF" />
  <text x="131" y="52" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">KEY</text>
  <text x="131" y="96" text-anchor="middle" fill="#191741" font-size="16" font-weight="700" font-family="Roboto Mono, monospace">nala</text>
  <text x="131" y="140" text-anchor="middle" fill="#191741" font-size="12">one value, every locale</text>
  <text x="131" y="162" text-anchor="middle" fill="#191741" font-size="12">chosen by you, stable</text>
  <text x="131" y="184" text-anchor="middle" fill="#191741" font-size="12">cart line · config · code</text>
  <text x="131" y="240" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">withKey(key)</text>
  <rect x="314" y="24" width="230" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="429" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">SLUG · LOCALIZEDSTRING</text>
  <text x="334" y="90" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">en-US:</text>
  <text x="334" y="108" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">nala-two-seater-sofa</text>
  <text x="334" y="138" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">de-DE:</text>
  <text x="334" y="156" fill="#FFC806" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">nala-zweisitzer-sofa</text>
  <text x="429" y="196" text-anchor="middle" fill="#6359FF" font-size="12">a different string per locale</text>
  <text x="429" y="216" text-anchor="middle" fill="#6359FF" font-size="12">SEO · the URL · shareable</text>
  <text x="429" y="252" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">slug(de-DE = :slug)</text>
  <text x="280" y="150" text-anchor="middle" fill="#6F6D8F" font-size="22">≠</text>
</svg>
:::

## Concept · The fallback chain

- One locale per query: \`slug(de-DE = :slug)\`.
- Order the locales; the first non-empty match wins.
- Display in the **requested** locale even when another locale matched.

> **Ask:** what is your chain, and which URL is canonical when two locales both resolve?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m25b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="40" width="120" height="60" rx="12" fill="#6359FF" />
  <text x="76" y="64" text-anchor="middle" fill="#fff" font-size="12">request</text>
  <text x="76" y="84" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">?locale=de-DE</text>
  <line x1="136" y1="70" x2="168" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m25b)" />
  <rect x="172" y="40" width="110" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="227" y="64" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">de-DE</text>
  <text x="227" y="84" text-anchor="middle" fill="#6359FF" font-size="11">query 1</text>
  <line x1="282" y1="70" x2="314" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m25b)" />
  <rect x="318" y="40" width="110" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="373" y="64" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">?</text>
  <text x="373" y="84" text-anchor="middle" fill="#6359FF" font-size="11">query 2 · your pick</text>
  <line x1="428" y1="70" x2="460" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m25b)" />
  <rect x="464" y="40" width="80" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="504" y="64" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">…</text>
  <text x="504" y="84" text-anchor="middle" fill="#6359FF" font-size="11">until a hit</text>
  <text x="280" y="136" text-anchor="middle" fill="#6F6D8F" font-size="12">each hop is one query · stop at the first non-empty result</text>
  <rect x="16" y="160" width="528" height="56" rx="12" fill="#0BBFBF" />
  <text x="280" y="184" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="1">THE READ YOU ARE GIVEN</text>
  <text x="280" y="206" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">findBySlug(locale, slug, price) → List&lt;ProductProjection&gt; (0 or 1)</text>
  <text x="280" y="250" text-anchor="middle" fill="#FFC806" font-size="13" font-weight="700">?  which locales, in which order, and what is canonical</text>
  <text x="280" y="276" text-anchor="middle" fill="#6F6D8F" font-size="11">the locale is part of the predicate text: the read validates it before use</text>
</svg>
:::

## Concept · Fall back or 404?

- Missing in this locale, present in another: **fall back**.
- Present in no locale: **404**.
- Never silently resolve to a *different* product.

> **Show:** Region → Germany → open a product: \`/de-DE/products/nala-zweisitzer-sofa\` resolves; a wrong slug lands on the not-found page.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m25c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="30" width="200" height="72" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="116" y="54" text-anchor="middle" fill="#6F6D8F" font-size="11">slug exists · not in de-DE</text>
  <text x="116" y="78" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">?locale=de-DE</text>
  <line x1="216" y1="66" x2="330" y2="66" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m25c)" />
  <rect x="334" y="30" width="210" height="72" rx="12" fill="#0BBFBF" />
  <text x="439" y="54" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">200 · falls back</text>
  <text x="439" y="78" text-anchor="middle" fill="#191741" font-size="11">same product, shown in de-DE</text>
  <rect x="16" y="118" width="200" height="72" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="116" y="142" text-anchor="middle" fill="#6F6D8F" font-size="11">slug exists nowhere</text>
  <text x="116" y="166" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">nala-zweisitzer-sofaa</text>
  <line x1="216" y1="154" x2="330" y2="154" stroke="#FFC806" stroke-width="2" marker-end="url(#m25c)" />
  <rect x="334" y="118" width="210" height="72" rx="12" fill="#FFC806" />
  <text x="439" y="142" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">404</text>
  <text x="439" y="166" text-anchor="middle" fill="#191741" font-size="11">the not-found page</text>
  <rect x="16" y="206" width="200" height="72" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="116" y="230" text-anchor="middle" fill="#6F6D8F" font-size="11">tempting shortcut</text>
  <text x="116" y="254" text-anchor="middle" fill="#191741" font-size="12">"closest" other product</text>
  <line x1="216" y1="242" x2="330" y2="242" stroke="#8C8AAE" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#m25c)" />
  <rect x="334" y="206" width="210" height="72" rx="12" fill="#FFFFFF" stroke="#C9C6E0" stroke-dasharray="6 4" />
  <text x="439" y="230" text-anchor="middle" fill="#FFC806" font-size="13" font-weight="700">never</text>
  <text x="439" y="254" text-anchor="middle" fill="#6359FF" font-size="11">a wrong product is worse than none</text>
</svg>
:::
`,cm=`---
task: catalog.Session 2.6
summary: Build the PDP variant selection matrix from productRepository.findByKey(...); decide which attributes are selectable axes, how the rows represent each variant's values, price/availability and the default, and how impossible combinations are excluded.
file: catalog/…/application/CatalogService.java
method: variantMatrix(String key, String locale, PriceSelection price)
prompt: |
  In bff-java, implement CatalogService.variantMatrix(key, locale, price) in the catalog module's
  application layer. Read the product with productRepository.findByKey(key, price) (404 if unknown),
  collect the master variant plus getVariants(), and build the domain VariantMatrix: the selectable
  axes, one VariantOption row per variant with its per-axis selections, price, image and availability,
  and the defaultSku. Read attribute values only through CatalogMapper.variantAttributeLabel(variant,
  name, locale): the SDK returns them typed (LocalizedString, Reference, enum), never as raw maps.
  The one rule: a selection must resolve to exactly one SKU, and a combination that does not exist
  must never resolve to anything.
  Before coding, propose how you will decide which attributes become selectable axes and how the
  response signals which combinations exist (and which variant is the default), and wait for my
  answer. Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 2.6 in Commerce Canvas with the key of the Nala two-seater sofa (copy it
  from the 2.1 response) and tell me what the response shows: which axes appear, which do not, and why.
---

## Concept · An attribute is an axis only if it varies

- The Nala sofa: 7 colours, one finish, one size.
- Colour is a **choice**; Finish = Black is a **fact**.
- Candidates come from the product type; the data decides.

> **Ask:** why is there no Finish selector on the PDP?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="528" height="120" rx="16" fill="#0BBFBF" />
  <text x="36" y="52" fill="#0b3b3b" font-size="11" letter-spacing="2">COLOUR · 7 VALUES · AN AXIS</text>
  <circle cx="60" cy="96" r="20" fill="#778899" />
  <circle cx="120" cy="96" r="20" fill="#4169E1" />
  <circle cx="180" cy="96" r="20" fill="#2F4F4F" />
  <circle cx="240" cy="96" r="20" fill="#8B4513" />
  <circle cx="300" cy="96" r="20" fill="#556B2F" />
  <circle cx="360" cy="96" r="20" fill="#B22222" />
  <circle cx="420" cy="96" r="20" fill="#DAA520" />
  <text x="500" y="92" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">pick one</text>
  <text x="500" y="110" text-anchor="middle" fill="#191741" font-size="11">→ a SKU</text>
  <rect x="16" y="160" width="256" height="116" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="188" fill="#6F6D8F" font-size="11" letter-spacing="2">FINISH · 1 VALUE</text>
  <rect x="36" y="204" width="120" height="36" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="96" y="227" text-anchor="middle" fill="#6F6D8F" font-size="12">Black</text>
  <text x="200" y="227" text-anchor="middle" fill="#6F6D8F" font-size="12">not a choice</text>
  <text x="144" y="262" text-anchor="middle" fill="#6359FF" font-size="11">show it as a fact, if at all</text>
  <rect x="288" y="160" width="256" height="116" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="308" y="188" fill="#6F6D8F" font-size="11" letter-spacing="2">SIZE · 1 VALUE</text>
  <rect x="308" y="204" width="120" height="36" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="368" y="227" text-anchor="middle" fill="#6F6D8F" font-size="12">two-seater</text>
  <text x="474" y="227" text-anchor="middle" fill="#6F6D8F" font-size="12">not a choice</text>
  <text x="416" y="262" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">≥ 2 distinct values → axis</text>
</svg>
:::

## Concept · The rows are the availability map

- One row per variant: its \`{axis → value}\` selections, price, image, stock.
- A selection resolves only if a row carries that exact combination.
- Impossible combinations are **absent by construction**; default = master.

> **Discuss:** how else could you signal an impossible combination, and what would it cost the storefront?

> **Show:** PDP colour picker: pick Royal Blue → the SKU, price and image switch.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="36" y="40" fill="#6F6D8F" font-size="11" letter-spacing="2">3 FABRICS × 4 COLOURS · 12 CELLS · 9 VARIANTS</text>
  <text x="120" y="76" text-anchor="middle" fill="#6359FF" font-size="11">Grey</text>
  <text x="200" y="76" text-anchor="middle" fill="#6359FF" font-size="11">Blue</text>
  <text x="280" y="76" text-anchor="middle" fill="#6359FF" font-size="11">Green</text>
  <text x="360" y="76" text-anchor="middle" fill="#6359FF" font-size="11">Rust</text>
  <text x="66" y="110" text-anchor="end" fill="#6359FF" font-size="11">Linen</text>
  <text x="66" y="160" text-anchor="end" fill="#6359FF" font-size="11">Velvet</text>
  <text x="66" y="210" text-anchor="end" fill="#6359FF" font-size="11">Bouclé</text>
  <rect x="86" y="88" width="68" height="36" rx="8" fill="#6359FF" /><text x="120" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-01</text>
  <rect x="166" y="88" width="68" height="36" rx="8" fill="#6359FF" /><text x="200" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-02</text>
  <rect x="246" y="88" width="68" height="36" rx="8" fill="#6359FF" /><text x="280" y="111" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-03</text>
  <rect x="326" y="88" width="68" height="36" rx="8" fill="none" stroke="#C9C6E0" stroke-dasharray="4 3" />
  <rect x="86" y="138" width="68" height="36" rx="8" fill="#6359FF" /><text x="120" y="161" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-04</text>
  <rect x="166" y="138" width="68" height="36" rx="8" fill="#6359FF" /><text x="200" y="161" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-05</text>
  <rect x="246" y="138" width="68" height="36" rx="8" fill="none" stroke="#C9C6E0" stroke-dasharray="4 3" />
  <rect x="326" y="138" width="68" height="36" rx="8" fill="#6359FF" /><text x="360" y="161" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-06</text>
  <rect x="86" y="188" width="68" height="36" rx="8" fill="#6359FF" /><text x="120" y="211" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-07</text>
  <rect x="166" y="188" width="68" height="36" rx="8" fill="none" stroke="#C9C6E0" stroke-dasharray="4 3" />
  <rect x="246" y="188" width="68" height="36" rx="8" fill="#6359FF" /><text x="280" y="211" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-08</text>
  <rect x="326" y="188" width="68" height="36" rx="8" fill="#6359FF" /><text x="360" y="211" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">SKU-09</text>
  <rect x="414" y="88" width="130" height="136" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="479" y="112" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="1">VARIANTS[]</text>
  <text x="479" y="136" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">sku</text>
  <text x="479" y="154" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">selections{}</text>
  <text x="479" y="172" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">price · image</text>
  <text x="479" y="190" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">available</text>
  <text x="479" y="212" text-anchor="middle" fill="#FFC806" font-size="11">9 rows, not 12</text>
  <text x="280" y="256" text-anchor="middle" fill="#6F6D8F" font-size="12">a dashed cell has no row, so it cannot be selected</text>
  <text x="280" y="280" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">defaultSku = the master variant</text>
</svg>
:::

## Concept · Attribute values are typed

- \`variant.getAttributes()\` values are not raw maps.
- ltext → \`LocalizedString\`, reference → \`Reference\`, enum → key + label.
- \`CatalogMapper.variantAttributeLabel(v, name, locale)\` resolves each to a label.

> **Docs:** [Product Projection variants and attributes](https://docs.commercetools.com/api/projects/productProjections)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m26c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="24" width="180" height="252" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="106" y="52" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">ATTRIBUTES[]</text>
  <rect x="32" y="70" width="148" height="48" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="106" y="90" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">color-label</text>
  <text x="106" y="108" text-anchor="middle" fill="#6359FF" font-size="10">ltext</text>
  <rect x="32" y="130" width="148" height="48" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="106" y="150" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">search-color</text>
  <text x="106" y="168" text-anchor="middle" fill="#6359FF" font-size="10">enum · facets, Session 3</text>
  <rect x="32" y="190" width="148" height="48" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="106" y="210" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">product-ref</text>
  <text x="106" y="228" text-anchor="middle" fill="#6359FF" font-size="10">set of reference · 2.7</text>
  <line x1="196" y1="94" x2="236" y2="94" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m26c)" />
  <line x1="196" y1="154" x2="236" y2="154" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m26c)" />
  <line x1="196" y1="214" x2="236" y2="214" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m26c)" />
  <rect x="240" y="70" width="150" height="48" rx="8" fill="#6359FF" />
  <text x="315" y="90" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">LocalizedString</text>
  <text x="315" y="108" text-anchor="middle" fill="#e6e6ff" font-size="10">typed by the SDK</text>
  <rect x="240" y="130" width="150" height="48" rx="8" fill="#6359FF" />
  <text x="315" y="150" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">{ key, label }</text>
  <text x="315" y="168" text-anchor="middle" fill="#e6e6ff" font-size="10">enum value</text>
  <rect x="240" y="190" width="150" height="48" rx="8" fill="#6359FF" />
  <text x="315" y="210" text-anchor="middle" fill="#fff" font-size="11" font-family="Roboto Mono, monospace">Reference</text>
  <text x="315" y="228" text-anchor="middle" fill="#e6e6ff" font-size="10">getId()</text>
  <line x1="390" y1="94" x2="430" y2="94" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m26c)" />
  <line x1="390" y1="154" x2="430" y2="154" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m26c)" />
  <rect x="434" y="70" width="110" height="108" rx="8" fill="#0BBFBF" />
  <text x="489" y="104" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">a label</text>
  <text x="489" y="124" text-anchor="middle" fill="#191741" font-size="11">in the locale</text>
  <text x="489" y="144" text-anchor="middle" fill="#191741" font-size="11">"Royal Blue"</text>
  <text x="280" y="268" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">match the type, then resolve: or you print LocalizedStringImpl[…]</text>
</svg>
:::
`,fm=`---
task: catalog.Session 2.7
summary: Resolve a bundle into its component products with a combined total price, using CatalogMapper.componentIds(...) and the read productRepository.findByIds(...); decide the component ordering and the price roll-up; a non-bundle product returns isBundle=false with no components.
file: catalog/…/application/CatalogService.java
method: bundle(String key, String locale, PriceSelection price)
prompt: |
  In bff-java, implement CatalogService.bundle(key, locale, price) in the catalog module's application
  layer. Read the bundle product with productRepository.findByKey(key, price) (404 if unknown), take
  its component ids from CatalogMapper.componentIds(product) (the product-ref set on the master
  variant), fetch the components in ONE query with productRepository.findByIds(ids, price), map them
  to ProductSummary and return the domain Bundle with isBundle, the components and a totalPrice.
  The one rule: the bundle stores no price of its own, so the total is computed from the components'
  selected prices in the shopper's currency; a product without component references returns
  isBundle=false with empty components, never an error.
  Before coding, propose how you will decide the component ordering (the id-in query returns an
  arbitrary order) and the price roll-up rule (including a component with no price in this currency),
  and wait for my answer. Ground every commercetools call on the commercetools Knowledge MCP; do not
  guess API names. Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 2.7 in Commerce Canvas with the key bedding-bundle, once more with an
  ordinary product key from the 2.1 response, and tell me what each response shows.
---

## Concept · A bundle references products

- A bundle is a **Product** whose attribute holds a set of product references.
- Each component is a real product with its own price.
- The bundle's master variant carries **no price**.

> **Discuss:** references vs a bundle attribute vs one combined SKU: what does each make easy, and hard?

> **Docs:** [Product attributes and references](https://docs.commercetools.com/api/projects/products)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m27a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="60" width="200" height="180" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="116" y="88" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">PRODUCT · BUNDLE</text>
  <text x="116" y="116" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">bedding-bundle</text>
  <text x="116" y="146" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">product-ref: [</text>
  <text x="116" y="164" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  ref → id, ref → id ]</text>
  <text x="116" y="200" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">prices: none</text>
  <text x="116" y="222" text-anchor="middle" fill="#6F6D8F" font-size="11">the card shows "—" until 2.7</text>
  <path d="M216,120 L300,88" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27a)" />
  <path d="M216,180 L300,212" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27a)" />
  <rect x="304" y="48" width="240" height="84" rx="14" fill="#0BBFBF" />
  <text x="424" y="74" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">COMPONENT</text>
  <text x="424" y="98" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Luxe Pillow Cover</text>
  <text x="424" y="120" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">EUR 2599 · selected price</text>
  <rect x="304" y="168" width="240" height="84" rx="14" fill="#0BBFBF" />
  <text x="424" y="194" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">COMPONENT</text>
  <text x="424" y="218" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Lana Pillow Cover</text>
  <text x="424" y="240" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">EUR 1099 · selected price</text>
  <text x="280" y="282" text-anchor="middle" fill="#6F6D8F" font-size="12">a set of reference → product, read as typed Reference objects</text>
</svg>
:::

## Concept · The total is computed, not stored

- One \`id in :ids\` query fetches every component; its order is arbitrary.
- Restore the **declared** order, then sum the selected prices.
- Switch currency: the total re-rolls. No references: \`isBundle: false\`.

> **Ask:** a component has no price in this currency: skip it, show "—", or refuse? And availability: min across components lands with Inventory in Session 9.

> **Docs:** [Query predicates](https://docs.commercetools.com/api/predicates/query)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m27b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="30" width="120" height="96" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="76" y="56" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">1 · IDS</text>
  <text x="76" y="82" text-anchor="middle" fill="#191741" font-size="12">componentIds()</text>
  <text x="76" y="104" text-anchor="middle" fill="#FFC806" font-size="11">[ luxe, lana ]</text>
  <line x1="136" y1="78" x2="164" y2="78" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27b)" />
  <rect x="168" y="30" width="120" height="96" rx="14" fill="#6359FF" />
  <text x="228" y="56" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">2 · ONE QUERY</text>
  <text x="228" y="82" text-anchor="middle" fill="#fff" font-size="12">findByIds(ids)</text>
  <text x="228" y="104" text-anchor="middle" fill="#e6e6ff" font-size="11">[ lana, luxe ] ?</text>
  <line x1="288" y1="78" x2="316" y2="78" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27b)" />
  <rect x="320" y="30" width="120" height="96" rx="14" fill="#6359FF" />
  <text x="380" y="56" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">3 · REORDER</text>
  <text x="380" y="82" text-anchor="middle" fill="#fff" font-size="12">declared order</text>
  <text x="380" y="104" text-anchor="middle" fill="#e6e6ff" font-size="11">[ luxe, lana ]</text>
  <line x1="440" y1="78" x2="468" y2="78" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27b)" />
  <rect x="472" y="30" width="72" height="96" rx="14" fill="#0BBFBF" />
  <text x="508" y="56" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="1">4 · SUM</text>
  <text x="508" y="82" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Σ price</text>
  <text x="508" y="104" text-anchor="middle" fill="#191741" font-size="11">same ccy</text>
  <rect x="16" y="150" width="528" height="56" rx="12" fill="#FFC806" />
  <text x="280" y="174" text-anchor="middle" fill="#5a4600" font-size="11" letter-spacing="1">BUNDLE TOTAL</text>
  <text x="280" y="196" text-anchor="middle" fill="#191741" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">EUR 25.99 + EUR 10.99 = EUR 36.98 · computed, not stored</text>
  <rect x="16" y="222" width="256" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="144" y="246" text-anchor="middle" fill="#191741" font-size="12">ordinary product</text>
  <text x="144" y="266" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">isBundle: false · components: []</text>
  <rect x="288" y="222" width="256" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="416" y="246" text-anchor="middle" fill="#191741" font-size="12">availability roll-up</text>
  <text x="416" y="266" text-anchor="middle" fill="#6F6D8F" font-size="11">min across components · Session 9</text>
</svg>
:::

## Concept · One roll-up lights three places

- The PLP card and PDP headline reuse \`bundle(...)\` when a product has no own price.
- An own price always wins: later a connector can **materialize** the total.
- Until 2.7 is built, all three degrade to "—".

> **Show:** the bedding-bundle PDP: "What's in the box" lists the components and the rolled-up total; the card on the grid shows the same price.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m27c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="100" width="180" height="100" rx="16" fill="#FFC806" />
  <text x="106" y="128" text-anchor="middle" fill="#5a4600" font-size="11" letter-spacing="2">TASK 2.7</text>
  <text x="106" y="156" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">bundle(key, …)</text>
  <text x="106" y="180" text-anchor="middle" fill="#191741" font-size="11">components + total</text>
  <path d="M196,130 L260,60" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27c)" />
  <path d="M196,150 L260,150" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27c)" />
  <path d="M196,170 L260,240" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m27c)" />
  <rect x="264" y="30" width="280" height="60" rx="12" fill="#0BBFBF" />
  <text x="404" y="54" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">PDP · "What's in the box"</text>
  <text x="404" y="74" text-anchor="middle" fill="#191741" font-size="11">GET /api/products/{key}/bundle</text>
  <rect x="264" y="120" width="280" height="60" rx="12" fill="#6359FF" />
  <text x="404" y="144" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">PDP headline price</text>
  <text x="404" y="164" text-anchor="middle" fill="#e6e6ff" font-size="11">summaryWithBundleRollup · no own price</text>
  <rect x="264" y="210" width="280" height="60" rx="12" fill="#6359FF" />
  <text x="404" y="234" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">PLP card price</text>
  <text x="404" y="254" text-anchor="middle" fill="#e6e6ff" font-size="11">the same roll-up, per card</text>
  <text x="106" y="236" text-anchor="middle" fill="#6F6D8F" font-size="11">own price present?</text>
  <text x="106" y="254" text-anchor="middle" fill="#6F6D8F" font-size="11">it wins, no roll-up</text>
  <text x="106" y="272" text-anchor="middle" fill="#6F6D8F" font-size="11">(a Connect job can write it)</text>
</svg>
:::
`,dm=`---
task: product-discovery.Session 3.1
summary: Build the store-scoped productsSearch GraphQL document via the trainer-provided ProductSearchDocument.build(request), POST it, and return the RAW GraphQLResponse.
file: product-discovery/…/infrastructure/CtSearchRepository.java
method: search(SearchRequest request)
prompt: |
  In bff-java, implement CtSearchRepository.search(request) in the product-discovery module's infrastructure layer.
  Build the Product Search document with the trainer-provided ProductSearchDocument.build(request) and POST it
  through the injected ProjectApiRoot's graphql() endpoint; return the raw SDK GraphQLResponse (SearchMapper
  parses getData() into cards upstream — do not map here). The document is ONE productsSearch call: the
  store scope rides in the query as an exact match on "stores", and each hit is hydrated through the
  product { … } sub-selection with the shopper's price(currency, country, channelId) selector — no second
  retrieval call per hit. Product Search is GraphQL in this course; never the REST search endpoint.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 3.1 in Commerce Canvas with store b2c-retail-store and tell me what the response shows.
---

## Concept · Retrieval vs discovery

- **Retrieval** (Session 2): Product Projections — *give me this product, this page*.
- **Discovery**: Product Search — *search, facets, sort, relevance*.
- Never query raw Products for a PLP; \`/api/products/search\` lands **beside** \`/api/products\`, not instead of it.

> **Discuss:** cards **and** filter counts — one call or two?

> **Docs:** [Product Search](https://docs.commercetools.com/api/projects/product-search)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="250" height="240" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="66" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">RETRIEVAL</text>
  <text x="145" y="100" text-anchor="middle" fill="#191741" font-size="15" font-weight="700">Product Projections</text>
  <text x="145" y="138" text-anchor="middle" fill="#6359FF" font-size="13">"give me this product"</text>
  <text x="145" y="160" text-anchor="middle" fill="#6359FF" font-size="13">"give me page 1"</text>
  <text x="145" y="198" text-anchor="middle" fill="#6F6D8F" font-size="12">insertion order · no counts</text>
  <text x="145" y="246" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">GET /api/products</text>
  <rect x="290" y="30" width="250" height="240" rx="18" fill="#0BBFBF" />
  <text x="415" y="66" text-anchor="middle" fill="#0b3b3b" font-size="13" letter-spacing="2">DISCOVERY</text>
  <text x="415" y="100" text-anchor="middle" fill="#191741" font-size="15" font-weight="700">Product Search</text>
  <text x="415" y="138" text-anchor="middle" fill="#191741" font-size="13">search · facets · sort</text>
  <text x="415" y="160" text-anchor="middle" fill="#191741" font-size="13">relevance · store scope</text>
  <text x="415" y="198" text-anchor="middle" fill="#0b3b3b" font-size="12">ranked · counts alongside</text>
  <text x="415" y="246" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">GET /api/products/search</text>
</svg>
:::

## Concept · One step, your shape

- Over REST, Product Search returns **ids**; hydrating is a second call.
- In GraphQL, \`productsSearch\` hydrates each hit through \`product { … }\` — **one** step.
- Field selection: *you* own the response shape — the card, nothing more.

> **Docs:** [Product Search over GraphQL](https://docs.commercetools.com/api/graphql)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a31b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <text x="20" y="48" fill="#6F6D8F" font-size="12" letter-spacing="2">REST · two steps · know it, not built</text>
  <rect x="20" y="62" width="150" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="95" y="85" text-anchor="middle" fill="#6F6D8F" font-size="12">POST /products/search</text>
  <text x="95" y="104" text-anchor="middle" fill="#6F6D8F" font-size="11" font-family="Roboto Mono, monospace">→ ids only</text>
  <line x1="170" y1="89" x2="210" y2="89" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a31b)" />
  <rect x="210" y="62" width="150" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="285" y="85" text-anchor="middle" fill="#6F6D8F" font-size="12">GET projections</text>
  <text x="285" y="104" text-anchor="middle" fill="#6F6D8F" font-size="11" font-family="Roboto Mono, monospace">id in :ids</text>
  <line x1="360" y1="89" x2="400" y2="89" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a31b)" />
  <rect x="400" y="62" width="140" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="470" y="94" text-anchor="middle" fill="#6F6D8F" font-size="12">cards</text>
  <text x="20" y="168" fill="#0BBFBF" font-size="12" letter-spacing="2" font-weight="700">GRAPHQL · one step · what we build</text>
  <rect x="20" y="182" width="340" height="88" rx="12" fill="#6359FF" />
  <text x="36" y="208" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">productsSearch(query: …) {</text>
  <text x="36" y="228" fill="#e6e6ff" font-size="12" font-family="Roboto Mono, monospace">  results { product { key name slug</text>
  <text x="36" y="248" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">    masterVariant { sku images price(…) } } } }</text>
  <line x1="360" y1="226" x2="400" y2="226" stroke="#0BBFBF" stroke-width="3" marker-end="url(#a31b)" />
  <rect x="400" y="182" width="140" height="88" rx="12" fill="#0BBFBF" />
  <text x="470" y="220" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">cards</text>
  <text x="470" y="242" text-anchor="middle" fill="#191741" font-size="11">your field set</text>
</svg>
:::

## Concept · Scope and price live in the body

- Store scope: \`query: { exact: { field: "stores", value: storeId } }\`.
- Shopper price: the \`price(currency, country, channelId)\` selector on the hydrated variant.
- Omit either: still a 200, the whole catalogue at an arbitrary price.

> **Show:** Try It with and without \`store\`: the Approach Advisor reads the GraphQL body and flags the missing scope.

> **Ask:** which part of this query decides *what* comes back, and which part decides *at what price*?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Roboto Mono, monospace">
  <rect x="20" y="20" width="520" height="260" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="52" fill="#6359FF" font-size="12">query {</text>
  <text x="40" y="74" fill="#6359FF" font-size="12">  productsSearch(</text>
  <rect x="56" y="82" width="372" height="22" rx="6" fill="#0BBFBF" opacity="0.18" />
  <text x="60" y="98" fill="#0BBFBF" font-size="12">    query: { exact: { field: "stores", value: "‹storeId›" } }</text>
  <text x="440" y="98" fill="#0BBFBF" font-size="11" font-family="Archivo, Roboto, sans-serif">← scope</text>
  <text x="40" y="122" fill="#6359FF" font-size="12">    limit: 24  offset: 0</text>
  <text x="40" y="144" fill="#6359FF" font-size="12">  ) { total results { product { key</text>
  <text x="40" y="166" fill="#6359FF" font-size="12">      masterData { current { name(locale) slug(locale)</text>
  <text x="40" y="188" fill="#6359FF" font-size="12">        masterVariant { sku images { url }</text>
  <rect x="56" y="196" width="400" height="22" rx="6" fill="#FFC806" opacity="0.18" />
  <text x="60" y="212" fill="#FFC806" font-size="12">          price(currency, country, channelId) {</text>
  <text x="468" y="212" fill="#FFC806" font-size="11" font-family="Archivo, Roboto, sans-serif">← price</text>
  <text x="40" y="234" fill="#6359FF" font-size="12">            value { centAmount } discounted { value { centAmount } }</text>
  <text x="40" y="256" fill="#6359FF" font-size="12">  } } } } } } }</text>
</svg>
:::
`,hm=`---
task: catalog.Session 3.2
summary: Pre-built — study it: the in-store Product Projection by key — a product the store's selection does not carry is a clean 404.
file: catalog/…/infrastructure/CtProductRepository.java
method: findByKeyInStore(String storeKey, String key, PriceSelection price)
prompt: |
  Read CtProductRepository.findByKeyInStore(storeKey, key, price) in bff-java's catalog module (infrastructure
  layer) and the handler in CatalogController that serves GET /api/products/{key}?store= — it ships implemented.
  Explain to me, in a few sentences each: (1) how the in-store Product Projection call differs from 2.2's
  findByKey — the one hop that changed; (2) why a product the store's Product Selection does not carry
  surfaces as a clean HTTP 404 without any code in the repository; (3) why there is no in-store LIST endpoint
  and the store-scoped listing is Product Search's job (3.1). Ground the answers on the commercetools Knowledge
  MCP (In-Store Product Projections, Product Selections). Then run Try It for task 3.2 in Commerce Canvas with
  a product the store carries, and once more with the product you left out of the selection, and tell me what
  each response shows.
---

## Concept · A store carries a Product Selection

- A Store **activates** a Product Selection: a named list of what it carries.
- \`Individual\` (these products) or \`IndividualExclusion\` (all except these); variant-level too.
- Attach is not activate; no active selection = the whole catalogue, nothing scopes.

> **Docs:** [Product Selections](https://docs.commercetools.com/api/projects/product-selections) · [Store](https://docs.commercetools.com/api/projects/stores#store)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a32a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="110" width="130" height="70" rx="12" fill="#6359FF" />
  <text x="85" y="140" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">Store</text>
  <text x="85" y="162" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">b2c-retail-store</text>
  <line x1="150" y1="145" x2="200" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a32a)" />
  <text x="175" y="134" text-anchor="middle" fill="#6F6D8F" font-size="10">activates</text>
  <circle cx="330" cy="150" r="110" fill="none" stroke="#0BBFBF" stroke-width="3" />
  <text x="330" y="60" text-anchor="middle" fill="#0BBFBF" font-size="12" letter-spacing="2">PRODUCT SELECTION</text>
  <rect x="262" y="90" width="60" height="44" rx="8" fill="#0BBFBF" />
  <text x="292" y="117" text-anchor="middle" fill="#191741" font-size="11">sofa</text>
  <rect x="338" y="90" width="60" height="44" rx="8" fill="#0BBFBF" />
  <text x="368" y="117" text-anchor="middle" fill="#191741" font-size="11">lamp</text>
  <rect x="262" y="150" width="60" height="44" rx="8" fill="#0BBFBF" />
  <text x="292" y="177" text-anchor="middle" fill="#191741" font-size="11">rug</text>
  <rect x="338" y="150" width="60" height="44" rx="8" fill="#0BBFBF" />
  <text x="368" y="177" text-anchor="middle" fill="#191741" font-size="11">chair</text>
  <text x="330" y="236" text-anchor="middle" fill="#6359FF" font-size="11">carried → 200</text>
  <rect x="470" y="120" width="70" height="44" rx="8" fill="#FFFFFF" stroke="#C9C6E0" stroke-dasharray="4 3" />
  <text x="505" y="147" text-anchor="middle" fill="#6F6D8F" font-size="11">desk</text>
  <text x="505" y="186" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">omitted → 404</text>
</svg>
:::

## Concept · Two ways to scope by store

- A **list** scopes through the search \`stores\` filter (3.1).
- A **single read** scopes through the in-store endpoint: \`inStore(store).productProjections().withKey(key)\`.
- Not carried by the store: the platform answers 404; your repository adds nothing.

> **Show:** the PDP with a store active, then the product you left out of the selection: the not-found page.

> **Ask:** why does no in-store *list* endpoint exist?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="250" height="240" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="64" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">LIST · 3.1</text>
  <text x="145" y="100" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">Product Search</text>
  <text x="145" y="140" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">query: { exact: {</text>
  <text x="145" y="160" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">field: "stores", value } }</text>
  <text x="145" y="206" text-anchor="middle" fill="#6F6D8F" font-size="12">the assortment, ranked</text>
  <text x="145" y="246" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">GET /api/products/search?store=</text>
  <rect x="290" y="30" width="250" height="240" rx="18" fill="#0BBFBF" />
  <text x="415" y="64" text-anchor="middle" fill="#0b3b3b" font-size="13" letter-spacing="2">SINGLE READ · 3.2</text>
  <text x="415" y="100" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">In-Store Projection</text>
  <text x="415" y="140" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">inStore(storeKey)</text>
  <text x="415" y="160" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">.productProjections().withKey(key)</text>
  <text x="415" y="206" text-anchor="middle" fill="#0b3b3b" font-size="12">carried → 200 · omitted → 404</text>
  <text x="415" y="246" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">GET /api/products/{key}?store=</text>
</svg>
:::
`,xm=`---
task: product-discovery.Session 3.3
summary: Add a full-text (with typo tolerance) clause to the store-scoped search so a keyword query returns relevance-ranked cards.
file: product-discovery/…/application/SearchService.java
method: fullText(String store, String q, String locale, PriceSelection price)
prompt: |
  In bff-java, implement SearchService.fullText(store, q, locale, price) in the product-discovery module's application layer.
  Start from the trainer-provided base(store, locale, price) builder (store scope + resolved price context), add
  the keyword as the full-text clause the builder emits — a fullText expression on the localized name together
  with a fuzzy variant for typo tolerance, both carrying the language — then call searchRepository.search(…)
  and map with SearchMapper.toCards(…). It is the SAME productsSearch call as 3.1 with one more clause: still
  store-scoped, still one call, now relevance-ordered. Product Search is GraphQL in this course; never the REST
  search endpoint.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 3.3 in Commerce Canvas with q=armchair, then with a typo such as q=armchiar, and tell me what each response shows.
---

## Concept · One grammar, four primitives

- \`fullText\` (free text) · \`exact\` (precise — how \`stores\` scopes) · \`range\` (numeric) · \`fuzzy\` (typo-tolerant).
- Joined with \`and\` / \`or\` into one tree.
- Fuzziness scales with term length: short words tolerate fewer edits.

> **Docs:** [Search query language](https://docs.commercetools.com/api/search-query-language) · [Full-text](https://docs.commercetools.com/api/search-query-language#full-text)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="40" width="120" height="90" rx="14" fill="#0BBFBF" />
  <text x="80" y="78" text-anchor="middle" fill="#191741" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">fullText</text>
  <text x="80" y="104" text-anchor="middle" fill="#0b3b3b" font-size="11">free text</text>
  <rect x="160" y="40" width="120" height="90" rx="14" fill="#6359FF" />
  <text x="220" y="78" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">exact</text>
  <text x="220" y="104" text-anchor="middle" fill="#e6e6ff" font-size="11">precise · stores</text>
  <rect x="300" y="40" width="120" height="90" rx="14" fill="#6359FF" />
  <text x="360" y="78" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">range</text>
  <text x="360" y="104" text-anchor="middle" fill="#e6e6ff" font-size="11">numeric · price</text>
  <rect x="440" y="40" width="100" height="90" rx="14" fill="#0BBFBF" />
  <text x="490" y="78" text-anchor="middle" fill="#191741" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">fuzzy</text>
  <text x="490" y="104" text-anchor="middle" fill="#0b3b3b" font-size="11">typo-tolerant</text>
  <text x="150" y="90" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">or</text>
  <text x="290" y="90" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">and</text>
  <text x="430" y="90" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">or</text>
  <rect x="20" y="170" width="520" height="100" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="198" fill="#6F6D8F" font-size="11" letter-spacing="2">TYPO TOLERANCE SCALES WITH LENGTH</text>
  <text x="40" y="228" fill="#6359FF" font-size="13" font-family="Roboto Mono, monospace">rug      → 0 edits</text>
  <text x="300" y="228" fill="#6359FF" font-size="13" font-family="Roboto Mono, monospace">armchiar → 1 edit ✓</text>
  <text x="40" y="254" fill="#6F6D8F" font-size="12">results come back relevance-ordered — not insertion order</text>
</svg>
:::

## Concept · One clause at a time

- The 3.1 query stays untouched; the search box adds **one** clause.
- Still store-scoped, still one call, now ranked by relevance.
- \`name\` is localized: the full-text clause must carry a language, or the API refuses it.

> **Show:** the header search box: type "arm" → ranked results; a typo still finds the armchair.

> **Discuss:** should the search box search descriptions too? What does that do to ranking?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Roboto Mono, monospace">
  <rect x="20" y="20" width="520" height="260" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="54" fill="#6359FF" font-size="12">productsSearch(query: { and: [</text>
  <text x="40" y="80" fill="#6F6D8F" font-size="12">  { exact: { field: "stores", value: "‹storeId›" } },</text>
  <rect x="34" y="92" width="480" height="70" rx="8" fill="#0BBFBF" opacity="0.18" />
  <text x="40" y="112" fill="#0BBFBF" font-size="12">  { or: [</text>
  <text x="40" y="132" fill="#0BBFBF" font-size="12">    { fullText: { field: "name", language: "en-US", value: "armchair" } },</text>
  <text x="40" y="152" fill="#0BBFBF" font-size="12">    { fuzzy:    { field: "name", language: "en-US", value: "armchair" } } ] }</text>
  <text x="40" y="186" fill="#6359FF" font-size="12">] }) { results { product { … price(…) } } }</text>
  <text x="40" y="230" fill="#FFC806" font-size="11" font-family="Archivo, Roboto, sans-serif">+ one clause · the 3.1 body unchanged</text>
  <text x="40" y="256" fill="#6F6D8F" font-size="11" font-family="Archivo, Roboto, sans-serif">3.4 adds categoriesSubTree · 3.5 adds facets — same query</text>
</svg>
:::
`,um=`---
task: product-discovery.Session 3.4
summary: Filter the store-scoped search to a category and its whole subtree, so a parent category includes its descendants.
file: product-discovery/…/application/SearchService.java
method: byCategory(String store, String category, String locale, PriceSelection price)
prompt: |
  In bff-java, implement SearchService.byCategory(store, category, locale, price) in the product-discovery module's application layer.
  The nav sends a category KEY: resolve it to an id with the trainer-provided resolveCategory(category) helper,
  then add it to base(store, locale, price) as the category filter — the builder emits a Product Search
  categoriesSubTree filter, so a parent category returns its whole subtree server-side — and call
  searchRepository.search(…) + SearchMapper.toCards(…). Store scope and category filter stack in the same
  productsSearch query; an unknown key simply omits the clause rather than failing. Product Search is GraphQL
  in this course; never the REST search endpoint.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 3.4 in Commerce Canvas with a parent category key and tell me whether products of its child categories are in the response.
---

## Concept · The 2.4 flag graduates

- In Session 2 the Approach Advisor stamped \`categoriesSubTree\` **premature**: projections were in scope.
- In Session 3 the same clause is **required**: this is Product Search's job.
- Rules are context-scoped; the API was never wrong, it was early.

> **Docs:** [Filter by category subtree](https://docs.commercetools.com/api/projects/product-search#filter-by-category-subtree)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a34a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="50" width="230" height="200" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="135" y="84" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">SESSION 2 · 2.4</text>
  <rect x="50" y="110" width="170" height="40" rx="20" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="135" y="135" text-anchor="middle" fill="#6F6D8F" font-size="12" font-family="Roboto Mono, monospace">categoriesSubTree</text>
  <rect x="70" y="170" width="130" height="30" rx="6" fill="#FFFFFF" stroke="#8C8AAE" transform="rotate(-6 135 185)" />
  <text x="135" y="190" text-anchor="middle" fill="#6F6D8F" font-size="12" font-weight="700" letter-spacing="2" transform="rotate(-6 135 185)">PREMATURE</text>
  <text x="135" y="232" text-anchor="middle" fill="#6F6D8F" font-size="11">use the projection predicate</text>
  <line x1="255" y1="150" x2="300" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a34a)" />
  <rect x="310" y="50" width="230" height="200" rx="18" fill="#0BBFBF" />
  <text x="425" y="84" text-anchor="middle" fill="#0b3b3b" font-size="13" letter-spacing="2">SESSION 3 · 3.4</text>
  <rect x="340" y="110" width="170" height="40" rx="20" fill="#FFFFFF" />
  <text x="425" y="135" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">categoriesSubTree</text>
  <rect x="360" y="170" width="130" height="30" rx="6" fill="#FFC806" transform="rotate(-6 425 185)" />
  <text x="425" y="190" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" letter-spacing="2" transform="rotate(-6 425 185)">REQUIRED</text>
  <text x="425" y="232" text-anchor="middle" fill="#191741" font-size="11">the search engine's answer</text>
</svg>
:::

## Concept · The subtree, server-side

- 2.4 collected the descendant ids in code, then \`categories(id in :ids)\`.
- 3.4 sends **one** id; \`categoriesSubTree\` covers the parent and everything beneath it.
- A filter narrows results **and** the facet base set: it matters from 3.5 on.

> **Show:** the mega menu → a parent category: the listing now comes from search.

> **Ask:** the nav sends a key and the filter wants an id. Where should that resolution live, and why cache it?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="140" y="40" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">2.4 · IN CODE</text>
  <rect x="100" y="56" width="80" height="30" rx="8" fill="#6359FF" />
  <text x="140" y="76" text-anchor="middle" fill="#ffffff" font-size="11">living</text>
  <line x1="120" y1="86" x2="80" y2="116" stroke="#8C8AAE" stroke-width="2" />
  <line x1="160" y1="86" x2="200" y2="116" stroke="#8C8AAE" stroke-width="2" />
  <rect x="40" y="116" width="80" height="30" rx="8" fill="#6359FF" />
  <text x="80" y="136" text-anchor="middle" fill="#ffffff" font-size="11">sofas</text>
  <rect x="160" y="116" width="80" height="30" rx="8" fill="#6359FF" />
  <text x="200" y="136" text-anchor="middle" fill="#ffffff" font-size="11">chairs</text>
  <line x1="200" y1="146" x2="200" y2="176" stroke="#8C8AAE" stroke-width="2" />
  <rect x="160" y="176" width="80" height="30" rx="8" fill="#6359FF" />
  <text x="200" y="196" text-anchor="middle" fill="#ffffff" font-size="11">armchairs</text>
  <text x="140" y="240" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">collect 4 ids →</text>
  <text x="140" y="260" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">categories(id in :ids)</text>
  <line x1="280" y1="40" x2="280" y2="270" stroke="#C9C6E0" stroke-width="1" stroke-dasharray="4 4" />
  <text x="420" y="40" text-anchor="middle" fill="#0BBFBF" font-size="12" letter-spacing="2" font-weight="700">3.4 · SERVER-SIDE</text>
  <rect x="380" y="56" width="80" height="30" rx="8" fill="#0BBFBF" />
  <text x="420" y="76" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">living</text>
  <path d="M310,100 L530,100 L530,215 L310,215 Z" fill="#0BBFBF" opacity="0.12" stroke="#0BBFBF" stroke-dasharray="5 4" />
  <line x1="400" y1="86" x2="360" y2="116" stroke="#8C8AAE" stroke-width="2" />
  <line x1="440" y1="86" x2="480" y2="116" stroke="#8C8AAE" stroke-width="2" />
  <rect x="320" y="116" width="80" height="30" rx="8" fill="#FFFFFF" />
  <text x="360" y="136" text-anchor="middle" fill="#6359FF" font-size="11">sofas</text>
  <rect x="440" y="116" width="80" height="30" rx="8" fill="#FFFFFF" />
  <text x="480" y="136" text-anchor="middle" fill="#6359FF" font-size="11">chairs</text>
  <line x1="480" y1="146" x2="480" y2="176" stroke="#8C8AAE" stroke-width="2" />
  <rect x="440" y="176" width="80" height="30" rx="8" fill="#FFFFFF" />
  <text x="480" y="196" text-anchor="middle" fill="#6359FF" font-size="11">armchairs</text>
  <text x="420" y="240" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">one id →</text>
  <text x="420" y="260" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">filter: categoriesSubTree</text>
</svg>
:::
`,mm=`---
task: product-discovery.Session 3.5
summary: Add colour + price facets to the store-scoped search and return the cards AND the facet buckets together.
file: product-discovery/…/application/SearchService.java
method: facets(String store, String locale, PriceSelection price)
prompt: |
  In bff-java, implement SearchService.facets(store, locale, price) in the product-discovery module's application layer.
  Start from the trainer-provided base(store, locale, price) builder, switch facets on so the builder emits the
  curated facet expressions on the same productsSearch query — a distinct facet on the colour attribute
  (variants.attributes.search-color.key, a localized enum), a ranges facet and a stats facet on
  variants.prices.centAmount — then call searchRepository.search(…) and map with SearchMapper.toResponse(…) so
  the response carries BOTH the cards and the facet buckets/stats. A facet computes counts over the result
  set; it never narrows it. Product Search is GraphQL in this course; never the REST search endpoint.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 3.5 in Commerce Canvas and tell me what the colour buckets and the price min / max / mean show.
---

## Concept · Facet vs filter vs query

- **Query**: which products match (store, keyword, category).
- **Filter**: narrows the results.
- **Facet**: *counts* over the result set — "Blue 12 · Green 8" — it never narrows.

> **Docs:** [Facets](https://docs.commercetools.com/api/projects/product-search#facets)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="40" width="160" height="220" rx="16" fill="#6359FF" />
  <text x="100" y="74" text-anchor="middle" fill="#ffffff" font-size="13" letter-spacing="2">QUERY</text>
  <text x="100" y="110" text-anchor="middle" fill="#e6e6ff" font-size="12">which products match</text>
  <text x="100" y="150" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Roboto Mono, monospace">stores · fullText</text>
  <text x="100" y="170" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Roboto Mono, monospace">categoriesSubTree</text>
  <text x="100" y="236" text-anchor="middle" fill="#c2c2ff" font-size="11">defines the set</text>
  <rect x="200" y="40" width="160" height="220" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="74" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">FILTER</text>
  <text x="280" y="110" text-anchor="middle" fill="#6359FF" font-size="12">narrows the set</text>
  <text x="280" y="150" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">colour = blue</text>
  <text x="280" y="170" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">price 0 – 100</text>
  <text x="280" y="236" text-anchor="middle" fill="#6F6D8F" font-size="11">fewer cards (3.7)</text>
  <rect x="380" y="40" width="160" height="220" rx="16" fill="#0BBFBF" />
  <text x="460" y="74" text-anchor="middle" fill="#0b3b3b" font-size="13" letter-spacing="2">FACET</text>
  <text x="460" y="110" text-anchor="middle" fill="#191741" font-size="12">counts over the set</text>
  <text x="460" y="150" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Blue 12 · Green 8</text>
  <text x="460" y="170" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">min 29 · max 1 299</text>
  <text x="460" y="236" text-anchor="middle" fill="#0b3b3b" font-size="11">never narrows · same call</text>
</svg>
:::

## Concept · Three facet types

- **distinct**: one bucket per value with a count — the colour swatches.
- **ranges**: buckets you define — price bands.
- **stats**: min / max / mean — the two ends of a price slider.

> **Show:** the PLP filter rail: colour chips with counts and a price slider whose ends come from \`stats\`.

> **Discuss:** the colour facet reads the coarse \`search-color\` enum, not the fine \`color-label\` axis. Why two colour attributes?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="165" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="102" y="60" text-anchor="middle" fill="#0BBFBF" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">distinct</text>
  <text x="102" y="82" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">search-color.key</text>
  <rect x="40" y="104" width="125" height="24" rx="12" fill="#ffffff" stroke="#C9C6E0" /><text x="102" y="121" text-anchor="middle" fill="#191741" font-size="11">white · 22</text>
  <rect x="40" y="136" width="125" height="24" rx="12" fill="#FFC806" /><text x="102" y="153" text-anchor="middle" fill="#191741" font-size="11">yellow · 22</text>
  <rect x="40" y="168" width="125" height="24" rx="12" fill="#F1EFFA" stroke="#C9C6E0" /><text x="102" y="185" text-anchor="middle" fill="#191741" font-size="11">gray · 15</text>
  <rect x="40" y="200" width="125" height="24" rx="12" fill="#6359FF" /><text x="102" y="217" text-anchor="middle" fill="#ffffff" font-size="11">blue · 7</text>
  <text x="102" y="252" text-anchor="middle" fill="#6359FF" font-size="11">swatches</text>
  <rect x="197" y="30" width="165" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="60" text-anchor="middle" fill="#0BBFBF" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">ranges</text>
  <text x="280" y="82" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">prices.centAmount</text>
  <rect x="217" y="104" width="125" height="24" rx="6" fill="#F1EFFA" stroke="#C9C6E0" /><text x="280" y="121" text-anchor="middle" fill="#191741" font-size="11">0 – 50 · 18</text>
  <rect x="217" y="136" width="125" height="24" rx="6" fill="#F1EFFA" stroke="#C9C6E0" /><text x="280" y="153" text-anchor="middle" fill="#191741" font-size="11">50 – 200 · 31</text>
  <rect x="217" y="168" width="125" height="24" rx="6" fill="#F1EFFA" stroke="#C9C6E0" /><text x="280" y="185" text-anchor="middle" fill="#191741" font-size="11">200 – 1 000 · 12</text>
  <text x="280" y="252" text-anchor="middle" fill="#6359FF" font-size="11">bands you define</text>
  <rect x="374" y="30" width="166" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="457" y="60" text-anchor="middle" fill="#0BBFBF" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">stats</text>
  <text x="457" y="82" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">prices.centAmount</text>
  <line x1="400" y1="150" x2="514" y2="150" stroke="#C9C6E0" stroke-width="6" stroke-linecap="round" />
  <line x1="420" y1="150" x2="490" y2="150" stroke="#0BBFBF" stroke-width="6" stroke-linecap="round" />
  <circle cx="420" cy="150" r="9" fill="#FFC806" /><circle cx="490" cy="150" r="9" fill="#FFC806" />
  <text x="400" y="186" fill="#6359FF" font-size="11">min 29</text>
  <text x="514" y="186" text-anchor="end" fill="#6359FF" font-size="11">max 1 299</text>
  <text x="457" y="212" text-anchor="middle" fill="#6F6D8F" font-size="11">mean 184</text>
  <text x="457" y="252" text-anchor="middle" fill="#6359FF" font-size="11">the slider's ends</text>
</svg>
:::
`,ym=`---
task: product-discovery.Session 3.6
summary: Compose ONE search for the whole PLP — store scope + optional full-text + optional category subtree + facets + sort + pagination.
file: product-discovery/…/application/SearchService.java
method: plp(String store, String q, String category, String sort, int page, int size, List<String> filters, String locale, PriceSelection price)
prompt: |
  In bff-java, implement SearchService.plp(…) in the product-discovery module's application layer.
  Compose ONE productsSearch for the whole storefront PLP: base(store, locale, price) for the store scope and
  price context, the optional keyword (text), the optional category subtree (resolveCategory(category) → id),
  facets on, a sort mapped from the storefront's token, and pagination as limit = page size and
  offset = page × size — then searchRepository.search(…) once and SearchMapper.toResponse(…) into
  PlpResponse { cards, facets, total, offset, limit }. The trainer-provided applySort and applyPostFilters
  helpers exist; call them. The rule: the grid, the filter rail, the sort and the pager come from ONE call —
  a search followed by a per-hit retrieval is the N+1 trap. Product Search is GraphQL in this course; never
  the REST search endpoint.
  Before coding, propose how you will decide the sort vocabulary (which tokens the storefront may send and
  the search fields they map to) and the page shape (default page size and what the response exposes for
  paging), and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 3.6 in Commerce Canvas with sort=price-desc and page=1 and tell me what the response shows; then open /products in the storefront and switch the store.
---

## Concept · Compose it into one call

- Store + keyword + category + facets + sort + paging → **one** \`productsSearch\`.
- Cards and facet counts arrive together.
- The N+1 trap: search, then one retrieval per hit.

> **Docs:** [Sorting](https://docs.commercetools.com/api/projects/product-search#sorting) · [Pagination](https://docs.commercetools.com/api/projects/product-search#pagination)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a36a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <g font-size="12" font-family="Roboto Mono, monospace">
    <rect x="20" y="24" width="130" height="30" rx="15" fill="#6359FF" /><text x="85" y="44" text-anchor="middle" fill="#ffffff">stores · 3.1</text>
    <rect x="20" y="64" width="130" height="30" rx="15" fill="#6359FF" /><text x="85" y="84" text-anchor="middle" fill="#ffffff">fullText · 3.3</text>
    <rect x="20" y="104" width="130" height="30" rx="15" fill="#6359FF" /><text x="85" y="124" text-anchor="middle" fill="#ffffff">subtree · 3.4</text>
    <rect x="20" y="144" width="130" height="30" rx="15" fill="#6359FF" /><text x="85" y="164" text-anchor="middle" fill="#ffffff">facets · 3.5</text>
    <rect x="20" y="184" width="130" height="30" rx="15" fill="#FFC806" /><text x="85" y="204" text-anchor="middle" fill="#191741">sort</text>
    <rect x="20" y="224" width="130" height="30" rx="15" fill="#FFC806" /><text x="85" y="244" text-anchor="middle" fill="#191741">limit · offset</text>
  </g>
  <path d="M150,39 C200,39 200,139 240,139" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <path d="M150,79 C200,79 200,139 240,139" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <path d="M150,119 C200,119 200,139 240,139" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <path d="M150,159 C200,159 200,139 240,139" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <path d="M150,199 C200,199 200,139 240,139" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <path d="M150,239 C200,239 200,139 240,139" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <rect x="240" y="99" width="150" height="80" rx="14" fill="#0BBFBF" />
  <text x="315" y="132" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">ONE</text>
  <text x="315" y="154" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">productsSearch</text>
  <line x1="390" y1="139" x2="430" y2="139" stroke="#0BBFBF" stroke-width="3" marker-end="url(#a36a)" />
  <rect x="430" y="84" width="110" height="110" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="485" y="112" text-anchor="middle" fill="#191741" font-size="12">cards</text>
  <text x="485" y="134" text-anchor="middle" fill="#191741" font-size="12">facets</text>
  <text x="485" y="156" text-anchor="middle" fill="#191741" font-size="12">total · offset · limit</text>
  <text x="485" y="180" text-anchor="middle" fill="#0BBFBF" font-size="11">= the page</text>
  <g>
    <rect x="240" y="222" width="300" height="52" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="390" y="244" text-anchor="middle" fill="#6F6D8F" font-size="11" font-family="Roboto Mono, monospace">search → ids → GET ×24</text>
    <line x1="256" y1="248" x2="524" y2="248" stroke="#FFC806" stroke-width="2" />
    <text x="390" y="266" text-anchor="middle" fill="#FFC806" font-size="11">N+1 — flagged by the Advisor</text>
  </g>
</svg>
:::

## Concept · Decisions you own

- **Sort vocabulary**: which tokens the storefront may send and the fields they map to; relevance by default.
- **Page shape**: default size; expose \`total\` / \`offset\` / \`limit\` for the pager.
- **Field set**: exactly what the card needs, nothing more.

> **Show:** the storefront cutover: \`/products\` switches from the Session 2 endpoint to \`/api/plp\`; flip the store — the assortment changes.

> **Ask:** what happens to a "sort by name" request in a project with three languages?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="165" height="240" rx="16" fill="#FFC806" />
  <text x="102" y="62" text-anchor="middle" fill="#191741" font-size="12" letter-spacing="2">SORT</text>
  <text x="102" y="100" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">relevance (none)</text>
  <text x="102" y="124" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">price → asc</text>
  <text x="102" y="148" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">price-desc → desc</text>
  <text x="102" y="196" text-anchor="middle" fill="#191741" font-size="11">field:</text>
  <text x="102" y="214" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">variants.prices.centAmount</text>
  <text x="102" y="252" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">your vocabulary</text>
  <rect x="197" y="30" width="165" height="240" rx="16" fill="#FFC806" />
  <text x="280" y="62" text-anchor="middle" fill="#191741" font-size="12" letter-spacing="2">PAGE</text>
  <text x="280" y="100" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">size = 24</text>
  <text x="280" y="124" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">limit = size</text>
  <text x="280" y="148" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">offset = page × size</text>
  <text x="280" y="196" text-anchor="middle" fill="#191741" font-size="11">expose:</text>
  <text x="280" y="214" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">total · offset · limit</text>
  <text x="280" y="252" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">your page shape</text>
  <rect x="374" y="30" width="166" height="240" rx="16" fill="#FFC806" />
  <text x="457" y="62" text-anchor="middle" fill="#191741" font-size="12" letter-spacing="2">FIELDS</text>
  <text x="457" y="100" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">key · name · slug</text>
  <text x="457" y="124" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">sku · image</text>
  <text x="457" y="148" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">price(…) discounted</text>
  <text x="457" y="196" text-anchor="middle" fill="#191741" font-size="11">not: description,</text>
  <text x="457" y="214" text-anchor="middle" fill="#191741" font-size="11">all variants, attributes</text>
  <text x="457" y="252" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">the card, no more</text>
</svg>
:::
`,pm=`---
task: product-discovery.Session 3.7
summary: Route the shopper's selected filters so they narrow the hits WITHOUT changing the other facets' counts (stable multi-facet nav).
file: product-discovery/…/application/SearchService.java
method: plp(…) — the filters branch (applyPostFilters)
prompt: |
  In bff-java, extend SearchService.plp(…) in the product-discovery module's application layer so the shopper's
  selected facet filters are honoured.
  Parse the filter params the storefront sends (colour:<key>, price:<from>-<to>, in minor units) and route them
  into the productsSearch postFilter argument — the builder emits an exact match on
  variants.attributes.search-color.key (localized enum) and a long range on variants.prices.centAmount — while
  the base context (store scope, keyword, category) stays in query. The rule: facets are computed BEFORE the
  postFilter, so a selected colour narrows the cards but the other colours keep their counts; put the
  selection in query and the panel lies. Several values of the SAME facet are OR; different facets are AND.
  Product Search is GraphQL in this course; never the REST search endpoint.
  Before coding, propose how you will decide which selections belong in query versus postFilter, and the
  filter vocabulary the storefront encodes (how a selected facet becomes a postFilter expression), and wait
  for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 3.7 in Commerce Canvas with filter=colour:blue and tell me whether the other colour buckets kept their counts.
---

## Concept · The panel that doesn't lie

- Tick "Blue": the cards narrow to blue.
- Selection in \`query\` → Red 0, Green 0 — the counts collapse.
- Selection in \`postFilter\` → Red 12, Green 8 stay; facets are computed **before** the post-filter.

> **Docs:** [postFilter vs query](https://docs.commercetools.com/api/projects/product-search#filter-examples)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a37a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="230" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="135" y="60" text-anchor="middle" fill="#FFC806" font-size="12" letter-spacing="2" font-weight="700">SELECTION IN query</text>
  <g font-size="12">
    <rect x="44" y="84" width="182" height="26" rx="13" fill="#6359FF" /><text x="135" y="102" text-anchor="middle" fill="#ffffff">☑ Blue · 7</text>
    <rect x="44" y="120" width="182" height="26" rx="13" fill="#F1EFFA" stroke="#C9C6E0" /><text x="135" y="138" text-anchor="middle" fill="#6F6D8F">☐ Red · 0</text>
    <rect x="44" y="156" width="182" height="26" rx="13" fill="#F1EFFA" stroke="#C9C6E0" /><text x="135" y="174" text-anchor="middle" fill="#6F6D8F">☐ Green · 0</text>
    <rect x="44" y="192" width="182" height="26" rx="13" fill="#F1EFFA" stroke="#C9C6E0" /><text x="135" y="210" text-anchor="middle" fill="#6F6D8F">☐ White · 0</text>
  </g>
  <text x="135" y="250" text-anchor="middle" fill="#FFC806" font-size="12">counts collapse — the panel lies</text>
  <line x1="258" y1="150" x2="302" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a37a)" />
  <rect x="310" y="30" width="230" height="240" rx="16" fill="#0BBFBF" />
  <text x="425" y="60" text-anchor="middle" fill="#0b3b3b" font-size="12" letter-spacing="2" font-weight="700">SELECTION IN postFilter</text>
  <g font-size="12">
    <rect x="334" y="84" width="182" height="26" rx="13" fill="#FFFFFF" /><text x="425" y="102" text-anchor="middle" fill="#191741">☑ Blue · 7</text>
    <rect x="334" y="120" width="182" height="26" rx="13" fill="#ffffff" /><text x="425" y="138" text-anchor="middle" fill="#191741">☐ Red · 12</text>
    <rect x="334" y="156" width="182" height="26" rx="13" fill="#ffffff" /><text x="425" y="174" text-anchor="middle" fill="#191741">☐ Green · 8</text>
    <rect x="334" y="192" width="182" height="26" rx="13" fill="#ffffff" /><text x="425" y="210" text-anchor="middle" fill="#191741">☐ White · 22</text>
  </g>
  <text x="425" y="250" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">cards narrow · counts stay</text>
</svg>
:::

## Concept · Decisions you own

- **query vs postFilter**: the base context (store, keyword, category) drives the counts; the shopper's selections narrow after them.
- **Multi-select**: same facet = \`or\`, different facets = \`and\`.
- **Vocabulary**: \`colour:blue\`, \`price:0-10000\` → the expressions below.

> **Show:** the filter rail: select a colour; the other counts hold. Stretch: a "Sale" PLP on \`variants.prices.discounted\`.

> **Discuss:** is a category a filter the shopper selected, or part of the base context?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Roboto Mono, monospace">
  <rect x="20" y="20" width="520" height="260" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="50" fill="#6F6D8F" font-size="11" font-family="Archivo, Roboto, sans-serif" letter-spacing="2">STOREFRONT SENDS</text>
  <text x="40" y="74" fill="#FFC806" font-size="12">?filter=colour:blue&amp;filter=colour:gray&amp;filter=price:0-10000</text>
  <text x="40" y="112" fill="#6F6D8F" font-size="11" font-family="Archivo, Roboto, sans-serif" letter-spacing="2">BFF EMITS</text>
  <text x="40" y="136" fill="#6359FF" font-size="12">query: { and: [ stores · fullText · categoriesSubTree ] }</text>
  <rect x="34" y="150" width="492" height="112" rx="8" fill="#0BBFBF" opacity="0.14" />
  <text x="40" y="170" fill="#0BBFBF" font-size="12">postFilter: { and: [</text>
  <text x="40" y="192" fill="#0BBFBF" font-size="12">  { or: [ { exact: { field: "variants.attributes.search-color.key", value: "blue" } },</text>
  <text x="40" y="212" fill="#0BBFBF" font-size="12">          { exact: { field: "variants.attributes.search-color.key", value: "gray" } } ] },</text>
  <text x="40" y="234" fill="#0BBFBF" font-size="12">  { range: { long: { field: "variants.prices.centAmount", gte: 0, lt: 10000 } } }</text>
  <text x="40" y="254" fill="#0BBFBF" font-size="12">] }</text>
</svg>
:::
`,gm=`---
task: product-discovery.Session 3.8
summary: Stop hardcoding the facet set — DERIVE it from the product types' searchable attributes under YOUR curation policy, always including price.
file: product-discovery/…/application/SearchService.java
method: facetConfig(String store, String locale, PriceSelection price)
prompt: |
  In bff-java, implement SearchService.facetConfig(store, locale, price) in the product-discovery module's application layer.
  Read the product types through the trainer-provided productTypeRepository.findAll(), collect the attribute
  definitions flagged isSearchable, and map each to a FacetSpec by attribute type — enum / lenum → a distinct
  facet on variants.attributes.<name>.key, number / money → a stats facet, skip text / ltext / boolean /
  reference / set — then apply your curation policy (a deny-list or allow-list, a cap on the rail, and price
  always included with its human-chosen ranges) and build base(store, locale, price).withFacets(true)
  .facetSpecs(specs) → searchRepository.search(…) → SearchMapper.toResponse(…). The rule: searchable is
  the gate, not the policy — not every searchable attribute makes a good facet. Product Search is GraphQL
  in this course; never the REST search endpoint.
  Before coding, propose how you will decide curate-versus-auto-derive (which searchable attributes become
  facets, with what default) and how the set stays configurable (product-type-driven, a config file, or
  both, plus the cap), and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 3.8 in Commerce Canvas and tell me which facets the rail now carries, and which searchable attributes you left out and why.
---

## Concept · The rail comes from the catalogue

- A ProductType lists \`AttributeDefinition\`s; each says \`isSearchable\`.
- Map by type: enum / lenum → \`distinct\`; number / money → \`stats\`; text, reference, set → skip.
- Add \`material\` in the Merchant Center and a filter appears — no deploy.

> **Docs:** [AttributeDefinition](https://docs.commercetools.com/api/projects/productTypes#attributedefinition) · [Facets](https://docs.commercetools.com/api/projects/product-search#facets)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a38a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="170" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="105" y="58" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">PRODUCT TYPE</text>
  <g font-size="11" font-family="Roboto Mono, monospace">
    <text x="36" y="90" fill="#6359FF">search-color  lenum ✓</text>
    <text x="36" y="112" fill="#6359FF">material      enum  ✓</text>
    <text x="36" y="134" fill="#6359FF">rating        number ✓</text>
    <text x="36" y="156" fill="#6F6D8F">description   ltext ✓</text>
    <text x="36" y="178" fill="#6F6D8F">product-ref   ref   ✓</text>
    <text x="36" y="200" fill="#6F6D8F">color-label   text  ✗</text>
  </g>
  <text x="105" y="250" text-anchor="middle" fill="#6F6D8F" font-size="10">✓ = isSearchable</text>
  <line x1="190" y1="150" x2="230" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a38a)" />
  <rect x="232" y="90" width="120" height="120" rx="14" fill="#6359FF" />
  <text x="292" y="120" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">map by type</text>
  <text x="292" y="146" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">enum/lenum → distinct</text>
  <text x="292" y="166" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">number/money → stats</text>
  <text x="292" y="186" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">text/ref/set → skip</text>
  <line x1="352" y1="150" x2="392" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a38a)" />
  <rect x="394" y="30" width="146" height="240" rx="16" fill="#0BBFBF" />
  <text x="467" y="58" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">FACET RAIL</text>
  <g font-size="11" font-family="Roboto Mono, monospace">
    <text x="467" y="96" text-anchor="middle" fill="#191741">colour · distinct</text>
    <text x="467" y="122" text-anchor="middle" fill="#191741">material · distinct</text>
    <text x="467" y="148" text-anchor="middle" fill="#191741">rating · stats</text>
    <text x="467" y="190" text-anchor="middle" fill="#191741" font-weight="700">price · ranges</text>
    <text x="467" y="212" text-anchor="middle" fill="#191741" font-weight="700">price · stats</text>
  </g>
  <text x="467" y="250" text-anchor="middle" fill="#0b3b3b" font-size="10">price always on top</text>
</svg>
:::

## Concept · Decisions you own: curate

- An AI will facet **every** searchable attribute: rail clutter, compute cost, lousy filters.
- Curate vs auto-derive: allow-list or deny-list, a cap, price always in.
- Configurable how: product-type-driven, a config file, or both? Defend it.

> **Ask:** \`description\` is searchable. Why must it never become a facet?

> **Discuss:** auto-derived numerics get \`stats\` (a slider). Why do \`ranges\` need human-chosen boundaries?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="40" width="280" height="220" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="160" y="68" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">SEARCHABLE · 12</text>
  <g font-size="10" font-family="Roboto Mono, monospace" fill="#c2c2ff">
    <text x="40" y="100" fill="#6359FF">search-color</text><text x="170" y="100" fill="#6359FF">material</text>
    <text x="40" y="122" fill="#6359FF">rating</text><text x="170" y="122" fill="#6359FF">width-cm</text>
    <text x="40" y="144" fill="#6359FF">description</text><text x="170" y="144" fill="#6359FF">product-ref</text>
    <text x="40" y="166" fill="#6359FF">care-notes</text><text x="170" y="166" fill="#6359FF">sku-alias</text>
    <text x="40" y="188" fill="#6359FF">season</text><text x="170" y="188" fill="#6359FF">collection</text>
    <text x="40" y="210" fill="#6359FF">supplier-id</text><text x="170" y="210" fill="#6359FF">is-new</text>
  </g>
  <text x="160" y="246" text-anchor="middle" fill="#FFC806" font-size="11">the AI's answer: all twelve</text>
  <path d="M300,110 L380,130 L380,170 L300,190 Z" fill="#FFC806" />
  <text x="340" y="154" text-anchor="middle" fill="#191741" font-size="10" font-weight="700">policy</text>
  <rect x="380" y="60" width="160" height="180" rx="16" fill="#0BBFBF" />
  <text x="460" y="88" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">THE RAIL · 5</text>
  <g font-size="11" font-family="Roboto Mono, monospace" fill="#191741">
    <text x="460" y="120" text-anchor="middle">colour</text>
    <text x="460" y="142" text-anchor="middle">material</text>
    <text x="460" y="164" text-anchor="middle">rating</text>
    <text x="460" y="186" text-anchor="middle">width-cm</text>
    <text x="460" y="208" text-anchor="middle" font-weight="700">price</text>
  </g>
  <text x="460" y="262" text-anchor="middle" fill="#6F6D8F" font-size="10">deny-list · cap 8 · price always</text>
</svg>
:::
`,Fm=`---
task: cart.Session 4.1
summary: Create the guest cart from a CartDraft — currency, country, store and the session's anonymousId — and return the raw SDK Cart.
file: cart/…/infrastructure/CtCartRepository.java
method: create(CartContext ctx)
prompt: |
  In bff-java, implement CtCartRepository.create(ctx) in the cart module's infrastructure layer.
  POST a CartDraft built from ctx: currency, country, anonymousId, inventoryMode, and the store (by key)
  when ctx.storeKey() is set. Return the raw SDK Cart; the service already stores the id on the session
  and maps it. Ground the CartDraft builder on the commercetools Knowledge MCP; do not guess field names.
  Then run Try It for 4.1 in Commerce Canvas and open the bag page in the storefront: it should show an
  empty bag.
---

## Concept · The cart is state

A cart is a long-lived, **versioned** resource. Every change is an update action sent against the
cart's current version; the platform refuses a stale version with 409. The BFF owns that version so the
storefront only ever states intent: "add this SKU", "two of those".

> **Docs:** [Carts](https://docs.commercetools.com/api/projects/carts) · [Optimistic concurrency](https://docs.commercetools.com/api/general-concepts#optimistic-concurrency-control)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="c41a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="30" y="100" width="130" height="90" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="95" y="135" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">Cart</text>
  <text x="95" y="160" text-anchor="middle" fill="#FFC806" font-size="13" font-family="Roboto Mono, monospace">version 7</text>
  <line x1="160" y1="145" x2="220" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#c41a)" />
  <rect x="222" y="100" width="150" height="90" rx="14" fill="#6359FF" />
  <text x="297" y="128" text-anchor="middle" fill="#fff" font-size="12">POST /carts/{id}</text>
  <text x="297" y="150" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">{ version: 7,</text>
  <text x="297" y="168" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">actions: [addLineItem] }</text>
  <line x1="372" y1="145" x2="432" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#c41a)" />
  <rect x="434" y="100" width="100" height="90" rx="14" fill="#0BBFBF" />
  <text x="484" y="135" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">Cart</text>
  <text x="484" y="160" text-anchor="middle" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">version 8</text>
  <text x="297" y="60" text-anchor="middle" fill="#6359FF" font-size="13">every change = an update action against the current version</text>
  <text x="297" y="240" text-anchor="middle" fill="#FFC806" font-size="13">stale version → 409 — the BFF retries, the storefront never sees it</text>
</svg>
:::

## Concept · The cart's context is fixed at birth

Currency, country and store are chosen when the cart is created and never change. A shopper who
switches store or currency with items in the basket is making a **decision**, not flipping a filter: keep
the basket where it was started, or start a new one here. That is why the storefront asks.

> **Discuss:** what should the shop do when a shopper with three items switches from the US store to the German one?

> **Show:** create the cart in Canvas with \`store=b2c-retail-store\`, then switch the store in the storefront header.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="40" y="40" width="480" height="110" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="68" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">FIXED AT CREATION</text>
  <g font-size="14" fill="#fff" text-anchor="middle" font-family="Roboto Mono, monospace">
    <rect x="60" y="85" width="130" height="44" rx="10" fill="#6359FF" /><text x="125" y="112">currency EUR</text>
    <rect x="215" y="85" width="130" height="44" rx="10" fill="#6359FF" /><text x="280" y="112">country DE</text>
    <rect x="370" y="85" width="130" height="44" rx="10" fill="#6359FF" /><text x="435" y="112">store b2c-…</text>
  </g>
  <text x="280" y="185" text-anchor="middle" fill="#6359FF" font-size="13">switching one of these with items in the bag is a decision, not a filter:</text>
  <rect x="90" y="205" width="170" height="50" rx="12" fill="#0BBFBF" /><text x="175" y="235" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">keep my basket</text>
  <rect x="300" y="205" width="170" height="50" rx="12" fill="#FFC806" /><text x="385" y="235" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">start a new basket</text>
</svg>
:::
`,wm=`---
task: cart.Session 4.10
summary: Pre-built — study it: CartService.summary() + CartMapper.toDomain compose the cart's money fields into the storefront's order summary — subtotal, savings, shipping, tax, total — and never throw on an empty cart.
file: cart/…/application/CartMapper.java
method: toDomain(Cart cart)
prompt: |
  Read CartService.summary() and CartMapper.toDomain(cart) in bff-java's cart module (application layer) —
  they ship implemented; GET /api/cart is the read every write re-reads. Explain to me, in a few sentences
  each: (1) which cart fields become subtotal, savings, shipping, tax and total — lineItems with price and
  discountedPricePerQuantity, totalPrice, taxedPrice, discountOnTotalPrice, shippingInfo — and how "savings"
  is computed as original minus discounted, per line plus the cart level; (2) why taxedPrice is absent until
  4.7 set an address, and what the summary shows in the meantime; (3) why the empty or not-yet-created cart
  returns an empty summary instead of throwing, and what else the summary carries — the cart's storeKey
  (4.1) and each line's distribution / supply channel keys (4.5). Ground the answers on the commercetools
  Knowledge MCP (Carts: totalPrice, taxedPrice, discountOnTotalPrice, shippingInfo). Then run Try It for
  task 4.10 in Commerce Canvas on an empty bag and again after 4.2 and 4.9, and tell me what changed.
---

## Concept · The cart's money

- \`lineItems[].price\` and \`discountedPricePerQuantity\` → subtotal and per-line savings.
- \`discountOnTotalPrice\` → cart-level saving; \`shippingInfo.price\` → shipping; \`taxedPrice\` → tax; \`totalPrice\` → total.
- Savings = original − discounted; the platform computes, the mapper presents.

> **Docs:** [Cart](https://docs.commercetools.com/api/projects/carts#cart) · [TaxedPrice](https://docs.commercetools.com/api/projects/carts#taxedprice)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a410a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="20" width="250" height="260" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="48" fill="#6F6D8F" font-size="10" letter-spacing="2">SDK CART</text>
  <g font-size="11" font-family="Roboto Mono, monospace" fill="#c2c2ff">
    <text x="40" y="78" fill="#6359FF">lineItems[].price</text>
    <text x="40" y="100" fill="#6359FF">lineItems[].discountedPricePerQuantity</text>
    <text x="40" y="122" fill="#6359FF">discountOnTotalPrice</text>
    <text x="40" y="144" fill="#6359FF">shippingInfo.price</text>
    <text x="40" y="166" fill="#6359FF">taxedPrice.totalTax</text>
    <text x="40" y="188" fill="#6359FF">totalPrice</text>
    <text x="40" y="222" fill="#6F6D8F">store.key</text>
    <text x="40" y="244" fill="#6F6D8F">lineItems[].supplyChannel (expanded)</text>
  </g>
  <line x1="272" y1="150" x2="312" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a410a)" />
  <text x="292" y="138" text-anchor="middle" fill="#6F6D8F" font-size="9">toDomain</text>
  <rect x="316" y="20" width="224" height="260" rx="16" fill="#0BBFBF" />
  <text x="336" y="48" fill="#0b3b3b" font-size="10" letter-spacing="2">ORDER SUMMARY</text>
  <g font-size="12" fill="#191741">
    <text x="336" y="82">Subtotal</text><text x="520" y="82" text-anchor="end">€536.00</text>
    <text x="336" y="108" font-weight="700">Savings</text><text x="520" y="108" text-anchor="end" font-weight="700">−€58.60</text>
    <text x="336" y="134">Shipping</text><text x="520" y="134" text-anchor="end">€0.00</text>
    <text x="336" y="160">Tax (incl.)</text><text x="520" y="160" text-anchor="end">€76.22</text>
    <line x1="336" y1="176" x2="520" y2="176" stroke="#191741" />
    <text x="336" y="200" font-weight="700" font-size="14">Total</text><text x="520" y="200" text-anchor="end" font-weight="700" font-size="14">€477.40</text>
  </g>
  <text x="336" y="236" fill="#0b3b3b" font-size="10" font-family="Roboto Mono, monospace">storeKey: b2c-retail-store</text>
  <text x="336" y="256" fill="#0b3b3b" font-size="10" font-family="Roboto Mono, monospace">line.supplyChannelKey: pickup-store</text>
</svg>
:::

## Concept · Decisions already taken — read them

- Savings at both levels: per line (product, bundle) and cart-level (codes).
- \`taxedPrice\` exists only once an address is set (4.7); before that, say so — not zero.
- Empty or missing cart → an empty summary, never a throw.

> **Show:** the bag's order summary box right after 4.1 (empty state), then filling in as 4.2, 4.7 and 4.9 land.

> **Discuss:** show prices tax-included or tax-excluded? What does \`taxMode\` leave to you, and what does the shop's country decide?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="165" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="102" y="60" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">AFTER 4.1</text>
  <text x="102" y="110" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Your bag is empty</text>
  <rect x="52" y="130" width="100" height="30" rx="15" fill="#6359FF" />
  <text x="102" y="150" text-anchor="middle" fill="#ffffff" font-size="11">Browse</text>
  <text x="102" y="214" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">CartSummary.empty()</text>
  <text x="102" y="236" text-anchor="middle" fill="#6F6D8F" font-size="10">no throw · badge 0</text>
  <rect x="197" y="30" width="165" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="60" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">AFTER 4.2</text>
  <g font-size="11" fill="#c2c2ff">
    <text x="214" y="100" fill="#6359FF">Subtotal</text><text x="346" y="100" text-anchor="end" fill="#6359FF">€536.00</text>
    <text x="214" y="124" fill="#6359FF">Savings</text><text x="346" y="124" text-anchor="end" fill="#0BBFBF">−€5.00</text>
    <text x="214" y="148" fill="#6359FF">Shipping</text><text x="346" y="148" text-anchor="end" fill="#6F6D8F">add address</text>
    <text x="214" y="172" fill="#6359FF">Tax</text><text x="346" y="172" text-anchor="end" fill="#6F6D8F">add address</text>
    <text x="214" y="206" fill="#191741" font-weight="700">Total</text><text x="346" y="206" text-anchor="end" fill="#191741" font-weight="700">€531.00</text>
  </g>
  <text x="280" y="246" text-anchor="middle" fill="#6F6D8F" font-size="10">no taxedPrice yet</text>
  <rect x="374" y="30" width="166" height="240" rx="16" fill="#0BBFBF" />
  <text x="457" y="60" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">AFTER 4.7 + 4.9</text>
  <g font-size="11" fill="#191741">
    <text x="392" y="100">Subtotal</text><text x="524" y="100" text-anchor="end">€536.00</text>
    <text x="392" y="124" font-weight="700">Savings</text><text x="524" y="124" text-anchor="end" font-weight="700">−€58.60</text>
    <text x="392" y="148">Shipping</text><text x="524" y="148" text-anchor="end">€0.00</text>
    <text x="392" y="172">Tax (incl.)</text><text x="524" y="172" text-anchor="end">€76.22</text>
    <text x="392" y="206" font-weight="700">Total</text><text x="524" y="206" text-anchor="end" font-weight="700">€477.40</text>
  </g>
  <text x="457" y="246" text-anchor="middle" fill="#0b3b3b" font-size="10">taxedPrice · discountOnTotalPrice</text>
</svg>
:::
`,vm=`---
task: cart.Session 4.11
summary: Pre-built — study it: a guest wishlist backed by a commercetools ShoppingList scoped by anonymousId — line items, addLineItem and version, the cart's model on a second resource; the move endpoints reuse the cart's own operations.
file: cart/…/application/ShoppingListService.java
method: view() · addItem(String sku, long quantity) · moveAllToCart() · saveForLater(String cartLineItemId)
prompt: |
  Read ShoppingListService (view, addItem, removeItem, moveAllToCart, moveToCart, saveForLater) and
  CtShoppingListRepository in bff-java's cart module — they ship implemented behind GET / POST
  /api/shopping-list and the /to-cart and /save-for-later endpoints. Explain to me, in a few sentences each:
  (1) how a ShoppingList mirrors the cart's write model — its own line items, addLineItem / removeLineItem
  update actions and a version — and what it does NOT carry (prices, totals, taxes); (2) why the list is
  scoped by the SAME anonymousId as the cart, and what that buys at sign-in in Session 5; (3) how the two
  "move" directions are built from operations you already know — add to the cart, then remove from the list,
  and the reverse — with no new SDK surface. Ground the answers on the commercetools Knowledge MCP (Shopping
  Lists). Then run Try It for task 4.11 in Commerce Canvas: save a SKU, move it to the bag, and tell me what
  the list and the cart show afterwards.
---

## Concept · Same model, second resource

- A \`ShoppingList\` has line items, \`addLineItem\` / \`removeLineItem\` actions, and a \`version\`.
- Scoped by the session's \`anonymousId\` — the same guest identity as the cart.
- No prices, totals or tax: it remembers products, it does not sell them.

> **Docs:** [Shopping Lists](https://docs.commercetools.com/api/projects/shoppingLists)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="40" width="240" height="220" rx="16" fill="#6359FF" />
  <text x="140" y="68" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">CART</text>
  <g font-size="11" font-family="Roboto Mono, monospace" fill="#ffffff">
    <text x="40" y="100">anonymousId: a1b2…</text>
    <text x="40" y="124">version: 12</text>
    <text x="40" y="148">lineItems: [ sku × qty ]</text>
    <text x="40" y="172">addLineItem · removeLineItem</text>
    <text x="40" y="206" fill="#FFC806">totalPrice · taxedPrice</text>
    <text x="40" y="230" fill="#FFC806">discountCodes · shippingInfo</text>
  </g>
  <rect x="300" y="40" width="240" height="220" rx="16" fill="#0BBFBF" />
  <text x="420" y="68" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">SHOPPING LIST</text>
  <g font-size="11" font-family="Roboto Mono, monospace" fill="#191741">
    <text x="320" y="100">anonymousId: a1b2…</text>
    <text x="320" y="124">version: 3</text>
    <text x="320" y="148">lineItems: [ sku × qty ]</text>
    <text x="320" y="172">addLineItem · removeLineItem</text>
    <text x="320" y="206" fill="#0b3b3b">— no money fields —</text>
    <text x="320" y="230" fill="#0b3b3b">it remembers, it does not sell</text>
  </g>
  <text x="280" y="285" text-anchor="middle" fill="#6F6D8F" font-size="11">one guest identity → Session 5 hands both over at sign-in</text>
</svg>
:::

## Concept · The moves reuse the cart's own operations

- \`/to-cart\`: add each saved SKU to the cart, then remove it from the list.
- \`/save-for-later\`: add the cart line's SKU to the list, then remove the line from the cart.
- Two resources, two versions, operations you already built.

> **Show:** the heart on a card or PDP → the header's saved items; the bag's "Saved for later" panel: move to bag, remove.

> **Ask:** two resources means two updates. What happens if the second one fails?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a411b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="90" width="150" height="120" rx="14" fill="#0BBFBF" />
  <text x="95" y="120" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">SAVED</text>
  <text x="95" y="150" text-anchor="middle" fill="#191741" font-size="12">♥ charlie-armchair</text>
  <text x="95" y="172" text-anchor="middle" fill="#191741" font-size="12">♥ nala-sofa</text>
  <rect x="390" y="90" width="150" height="120" rx="14" fill="#6359FF" />
  <text x="465" y="120" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">BAG</text>
  <text x="465" y="150" text-anchor="middle" fill="#ffffff" font-size="12">charlie-armchair × 1</text>
  <text x="465" y="172" text-anchor="middle" fill="#ffffff" font-size="12">luxe-pillow × 2</text>
  <line x1="175" y1="120" x2="385" y2="120" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a411b)" />
  <text x="280" y="108" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">POST /api/shopping-list/to-cart</text>
  <text x="280" y="140" text-anchor="middle" fill="#6F6D8F" font-size="10">cart.addLineItem → list.removeLineItem</text>
  <line x1="385" y1="185" x2="175" y2="185" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a411b)" />
  <text x="280" y="173" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">POST …/save-for-later</text>
  <text x="280" y="204" text-anchor="middle" fill="#6F6D8F" font-size="10">list.addLineItem → cart.removeLineItem</text>
  <text x="280" y="256" text-anchor="middle" fill="#FFC806" font-size="11">no new SDK surface — two resources, two versions, the 4.2 pattern twice</text>
</svg>
:::
`,bm=`---
task: cart.Session 4.12
summary: Pre-built — study it: GET /api/cart/active resolves the shopper's active cart the way the PLATFORM does — by customerId or anonymousId with cartState Active, newest first — and says whether the BFF's session pointer agrees.
file: cart/…/application/CartService.java
method: inspectActiveCart()
prompt: |
  Read CartService.inspectActiveCart() in bff-java's cart module (application layer) and
  CtCartRepository.findActiveCartsOfCustomer / findActiveCartsOfGuest in its infrastructure layer — they ship
  implemented behind GET /api/cart/active. Explain to me, in a few sentences each: (1) the query predicate
  that defines "the active cart" for an identity — customerId or anonymousId, cartState = "Active", sorted
  lastModifiedAt desc — and what the four CartState values mean; (2) the ways the BFF's session pointer goes
  stale (a sign-in, a sign-out, a restart, an order placed, a store switch that re-created the basket in
  another store) and how the response reports it — sessionMatches, sessionRepointed, otherActiveCarts, note;
  (3) why an empty session pointer is healed from the platform's answer rather than by creating a new cart.
  Ground the answers on the commercetools Knowledge MCP (Carts: query predicates, CartState). Then run Try It
  for task 4.12 in Commerce Canvas and tell me who owns the cart, which store and currency it is in, and
  whether the session pointer agrees.
---

## Concept · One identity, many carts — one active

- The rule: \`anonymousId = :id and cartState = "Active"\`, newest first; \`customerId\` when signed in.
- \`CartState\`: \`Active\` (shoppable) · \`Merged\` (a guest cart after a merge) · \`Ordered\` · \`Frozen\`.
- The first result is *the* cart: sign-in merges into it.

> **Docs:** [Query Carts](https://docs.commercetools.com/api/projects/carts#query-carts) · [CartState](https://docs.commercetools.com/api/projects/carts#cartstate)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="520" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="42" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">where: anonymousId = :id and cartState = "Active"</text>
  <text x="280" y="62" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">sort: lastModifiedAt desc · limit 10</text>
  <g font-size="11">
    <rect x="20" y="96" width="520" height="40" rx="10" fill="#0BBFBF" />
    <text x="36" y="121" fill="#191741" font-weight="700" font-family="Roboto Mono, monospace">Active</text>
    <text x="150" y="121" fill="#191741">b2c-retail-store · EUR · 2 items · modified 2 min ago</text>
    <text x="524" y="121" text-anchor="end" fill="#191741" font-weight="700">← the active cart</text>
    <rect x="20" y="146" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="36" y="171" fill="#191741" font-family="Roboto Mono, monospace">Active</text>
    <text x="150" y="171" fill="#6F6D8F">outlet-store · EUR · empty · yesterday — an older Active cart (a store switch)</text>
    <rect x="20" y="196" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="36" y="221" fill="#6F6D8F" font-family="Roboto Mono, monospace">Merged</text>
    <text x="150" y="221" fill="#6F6D8F">a guest cart after sign-in · read-only audit trail</text>
    <rect x="20" y="246" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="36" y="271" fill="#6F6D8F" font-family="Roboto Mono, monospace">Ordered</text>
    <text x="150" y="271" fill="#6F6D8F">an order was placed from it · never Active again</text>
  </g>
</svg>
:::

## Concept · The session pointer can go stale

- Sign-in, sign-out, a restart, an order placed, a store switch that re-created the basket (4.1).
- The platform's answer is always the identity query; an empty pointer is healed from it.
- The response: owner, store, currency, and whether the pointer agrees.

> **Show:** Canvas only: run it as a guest, after a store switch with an empty bag, and again after Session 5's sign-in.

> **Ask:** after a store switch with an empty bag, which cart is Active, and what happened to the old one?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="230" height="130" rx="14" fill="#6359FF" />
  <text x="135" y="56" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">BFF SESSION</text>
  <text x="135" y="86" text-anchor="middle" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">anonymousId: a1b2…</text>
  <text x="135" y="110" text-anchor="middle" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">cartId: 7e3f… (old)</text>
  <text x="135" y="140" text-anchor="middle" fill="#e6e6ff" font-size="10">a pointer, not the truth</text>
  <rect x="310" y="30" width="230" height="130" rx="14" fill="#0BBFBF" />
  <text x="425" y="56" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">PLATFORM</text>
  <text x="425" y="86" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">Active · c9d0… · outlet-store</text>
  <text x="425" y="110" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">Active · 7e3f… · retail (older)</text>
  <text x="425" y="140" text-anchor="middle" fill="#191741" font-size="10">the identity query decides</text>
  <rect x="20" y="180" width="520" height="100" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="206" fill="#6F6D8F" font-size="10" letter-spacing="2">RESPONSE</text>
  <text x="40" y="230" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">{ identity: "guest", cartState: "Active", sessionMatches: false,</text>
  <text x="40" y="250" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  sessionRepointed: false, otherActiveCarts: 1, cart: { storeKey, currency, … },</text>
  <text x="40" y="270" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">  note: "… the session points elsewhere (7e3f…) — stale pointer." }</text>
</svg>
:::
`,Cm=`---
task: cart.Session 4.2
summary: POST a CartUpdate carrying the cart's current version + the list of update actions, returning the raw SDK Cart; the service composes the actions and owns version + 409-retry.
file: cart/…/infrastructure/CtCartRepository.java
method: update(String cartId, Long version, List<CartUpdateAction> actions)
prompt: |
  In bff-java, implement CtCartRepository.update(cartId, version, actions) in the cart module's infrastructure layer.
  POST a CartUpdate to the cart by id carrying the given version and the list of update actions, and return the
  raw SDK Cart; keep the same expansions the other repository methods use so the summary can name discount
  codes, recurrence policies and channels. Do not read the cart, do not catch the 409 and do not loop: the
  service's withRetry already reads the latest version, calls you, and replays on a stale version — this
  method is ONE call. The service composes addLineItem / changeLineItemQuantity / removeLineItem on top of it.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 4.2 in Commerce Canvas (add a SKU, change its quantity, remove it) and tell me how the cart's version and totalPrice moved between the three responses.
---

## Concept · Every write is an action plus a version

- Read the cart at version N → POST update actions → the cart comes back at N+1.
- A writer still holding N is **stale**: 409, no locks involved.
- Actions batch: one request, many \`CartUpdateAction\`s, one version step.

> **Docs:** [Update actions](https://docs.commercetools.com/api/projects/carts#update-actions) · [Optimistic concurrency](https://docs.commercetools.com/api/general-concepts#optimistic-concurrency-control)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a42a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="60" width="140" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="90" y="88" text-anchor="middle" fill="#191741" font-size="13">read cart</text>
  <text x="90" y="110" text-anchor="middle" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">version 7</text>
  <line x1="160" y1="95" x2="205" y2="95" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a42a)" />
  <rect x="205" y="60" width="150" height="70" rx="12" fill="#6359FF" />
  <text x="280" y="84" text-anchor="middle" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">POST { version: 7,</text>
  <text x="280" y="104" text-anchor="middle" fill="#e6e6ff" font-size="12" font-family="Roboto Mono, monospace">actions: [ … ] }</text>
  <line x1="355" y1="95" x2="400" y2="95" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a42a)" />
  <rect x="400" y="60" width="140" height="70" rx="12" fill="#0BBFBF" />
  <text x="470" y="88" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">200 · cart</text>
  <text x="470" y="110" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">version 8</text>
  <path d="M470,130 L470,160 L90,160 L90,130" fill="none" stroke="#8C8AAE" stroke-width="1.5" stroke-dasharray="5 4" marker-end="url(#a42a)" />
  <text x="280" y="152" text-anchor="middle" fill="#6F6D8F" font-size="11">next write starts from 8</text>
  <rect x="205" y="200" width="150" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="224" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">POST { version: 7,</text>
  <text x="280" y="244" text-anchor="middle" fill="#6F6D8F" font-size="11">another tab, still on 7</text>
  <line x1="355" y1="235" x2="400" y2="235" stroke="#FFC806" stroke-width="2" marker-end="url(#a42a)" />
  <rect x="400" y="200" width="140" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="470" y="228" text-anchor="middle" fill="#FFC806" font-size="14" font-weight="700">409</text>
  <text x="470" y="250" text-anchor="middle" fill="#FFC806" font-size="11">ConcurrentModification</text>
</svg>
:::

## Concept · Two tabs, one cart → 409

- Naive: cache the version, post it later → 409.
- \`CartService.withRetry\`: read the latest version → apply → replay on 409, up to three times.
- The BFF owns the version; the storefront only states intent.

> **Show:** Try It twice quickly with a stale version in mind; the Advisor's fetch-before-update rule turns RED into GREEN.

> **Ask:** what breaks if the repository caught the 409 itself and retried?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="250" height="240" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="60" text-anchor="middle" fill="#FFC806" font-size="12" letter-spacing="2" font-weight="700">RED · cached version</text>
  <g font-size="12" font-family="Roboto Mono, monospace">
    <text x="40" y="100" fill="#6359FF">v = cart.version  // t = 0</text>
    <text x="40" y="126" fill="#6F6D8F">… the other tab writes …</text>
    <text x="40" y="152" fill="#6359FF">post(update(v, add))</text>
    <text x="40" y="190" fill="#FFC806" font-weight="700">409 · write rejected</text>
  </g>
  <text x="145" y="246" text-anchor="middle" fill="#6F6D8F" font-size="11">the storefront sees an error</text>
  <rect x="290" y="30" width="250" height="240" rx="16" fill="#0BBFBF" />
  <text x="415" y="60" text-anchor="middle" fill="#0b3b3b" font-size="12" letter-spacing="2" font-weight="700">GREEN · withRetry</text>
  <g font-size="12" font-family="Roboto Mono, monospace" fill="#191741">
    <text x="310" y="100">for attempt in 0..3:</text>
    <text x="310" y="126">  v = repo.get(id).version</text>
    <text x="310" y="152">  try repo.update(id, v, …)</text>
    <text x="310" y="178">  catch 409 → loop</text>
    <text x="310" y="214" font-weight="700">200 · applied</text>
  </g>
  <text x="415" y="246" text-anchor="middle" fill="#191741" font-size="11">the storefront never sees version</text>
</svg>
:::

## Concept · One action, three intents

- \`addLineItem\` by SKU × quantity; \`changeLineItemQuantity\` (0 removes); \`removeLineItem\`.
- Granular endpoints, one repository method, one pattern.
- Every advanced line item in this session is this action with one more field.

> **Show:** Add to bag on a PDP, then qty +/− and remove in the bag.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a42c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <g font-size="11" font-family="Roboto Mono, monospace">
    <rect x="20" y="40" width="200" height="54" rx="12" fill="#6359FF" />
    <text x="120" y="62" text-anchor="middle" fill="#ffffff">POST /api/cart/line-items</text>
    <text x="120" y="82" text-anchor="middle" fill="#e6e6ff">addLineItem(sku, qty)</text>
    <rect x="20" y="124" width="200" height="54" rx="12" fill="#6359FF" />
    <text x="120" y="146" text-anchor="middle" fill="#ffffff">PATCH …/line-items/{id}</text>
    <text x="120" y="166" text-anchor="middle" fill="#e6e6ff">changeLineItemQuantity · 0 removes</text>
    <rect x="20" y="208" width="200" height="54" rx="12" fill="#6359FF" />
    <text x="120" y="230" text-anchor="middle" fill="#ffffff">DELETE …/line-items/{id}</text>
    <text x="120" y="250" text-anchor="middle" fill="#e6e6ff">removeLineItem</text>
  </g>
  <path d="M220,67 C270,67 270,151 310,151" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <path d="M220,151 L310,151" fill="none" stroke="#8C8AAE" stroke-width="1.5" />
  <path d="M220,235 C270,235 270,151 310,151" fill="none" stroke="#8C8AAE" stroke-width="1.5" marker-end="url(#a42c)" />
  <rect x="312" y="106" width="228" height="90" rx="14" fill="#0BBFBF" />
  <text x="426" y="136" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">CartService.mutate(actions)</text>
  <text x="426" y="158" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">withRetry → repo.update(id, v, actions)</text>
  <text x="426" y="180" text-anchor="middle" fill="#0b3b3b" font-size="11">one method · one call · one version</text>
  <text x="426" y="236" text-anchor="middle" fill="#6F6D8F" font-size="11">4.3 custom fields · 4.4 recurrence · 4.5 channels · 4.6 inventory mode</text>
  <text x="426" y="256" text-anchor="middle" fill="#6F6D8F" font-size="11">= the same action, one more field</text>
</svg>
:::
`,km=`---
task: cart.Session 4.3
summary: Resolve the bundle's components, then in ONE update add a parent line (the bundle product, externalPrice 0) carrying custom.bundleId, plus one child per component carrying custom.parentId; a non-bundle key is a 4xx, not a partial cart.
file: cart/…/application/CartService.java
method: addBundle(String bundleKey)
prompt: |
  In bff-java, implement CartService.addBundle(bundleKey) in the cart module's application layer.
  Resolve the components with the trainer-provided bundleRepo.resolve(bundleKey) (the cart's own read — no
  dependency on the catalog module); a key that is not a bundle is a 400, never a partial cart. Then build ONE
  list of update actions and send it through mutate(actions): an addLineItem for the parent (the bundle
  product by productId + variantId, quantity 1, an externalPrice of 0 in the cart's currency because it has
  no own price) carrying the bundle-line custom type with bundleId, plus one addLineItem per component by SKU ×
  quantity carrying the same type with parentId pointing at that bundleId. The rule: one update, one version —
  a per-line loop re-reads the version each time and invites the 409. The seeded bundle-saving Cart Discount
  (predicate custom.parentId is defined) books the saving on the children; removing the parent cascades.
  Before coding, propose how you will decide the cart shape (parent + children linked by a custom field vs
  one opaque line vs custom line items) and where the saving lives (a Cart Discount on the children vs a
  hard-coded bundle price), and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 4.3 in Commerce Canvas with bedding-bundle and tell me how many line items the cart has, which carry bundleId / parentId, and what the bundle saving shows.
---

## Concept · Custom Fields: typed data on any resource

- A **Type** declares fields for a resource kind; here \`bundle-line\` on line items.
- \`bundleId\` marks the parent; \`parentId\` on each child points back at it.
- Typed, queryable, visible in a Cart Discount predicate: \`custom.parentId is defined\`.

> **Docs:** [Types & Custom Fields](https://docs.commercetools.com/api/projects/types) · [addLineItem](https://docs.commercetools.com/api/projects/carts#add-lineitem)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a43a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="200" height="220" rx="16" fill="#6359FF" />
  <text x="120" y="70" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">TYPE</text>
  <text x="120" y="96" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">bundle-line</text>
  <text x="120" y="122" text-anchor="middle" fill="#e6e6ff" font-size="11">resourceTypeIds: line-item</text>
  <rect x="40" y="146" width="160" height="34" rx="8" fill="#FFFFFF" />
  <text x="120" y="168" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">bundleId : String</text>
  <rect x="40" y="190" width="160" height="34" rx="8" fill="#FFFFFF" />
  <text x="120" y="212" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">parentId : String</text>
  <text x="120" y="248" text-anchor="middle" fill="#e6e6ff" font-size="10">seeded once · reused on every line</text>
  <line x1="220" y1="150" x2="300" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a43a)" />
  <text x="260" y="140" text-anchor="middle" fill="#6F6D8F" font-size="10">custom: { type, fields }</text>
  <rect x="300" y="40" width="240" height="90" rx="14" fill="#0BBFBF" />
  <text x="420" y="66" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">parent line · bedding-bundle</text>
  <text x="420" y="90" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">externalPrice 0 · qty 1</text>
  <text x="420" y="112" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">custom.bundleId = 9f2c…</text>
  <rect x="320" y="150" width="220" height="50" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="430" y="170" text-anchor="middle" fill="#191741" font-size="11">child · Luxe pillow cover · €25.99</text>
  <text x="430" y="190" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">custom.parentId = 9f2c…</text>
  <rect x="320" y="210" width="220" height="50" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="430" y="230" text-anchor="middle" fill="#191741" font-size="11">child · Lana pillow cover · €10.99</text>
  <text x="430" y="250" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">custom.parentId = 9f2c…</text>
</svg>
:::

## Concept · A bundle in the cart is a group of lines

- Parent: identity, priced 0. Children: real line items — inventory, tax, fulfilment stay right.
- The saving is a **Cart Discount**, not a hard-coded price; the catalogue stays truthful.
- One update, one version: parent and children together.

> **Show:** the bundle PDP → Add to bag: one grouped line, children indented, "Bundle saving" line; count badge says one.

> **Ask:** the shopper removes a child alone. Cascade, block, or allow?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="330" height="260" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="50" fill="#6F6D8F" font-size="11" letter-spacing="2">YOUR BAG · 1 item</text>
  <rect x="40" y="66" width="290" height="40" rx="8" fill="#6359FF" />
  <text x="54" y="91" fill="#ffffff" font-size="12" font-weight="700">Bedding bundle</text>
  <text x="316" y="91" text-anchor="end" fill="#e6e6ff" font-size="12">€36.98</text>
  <text x="70" y="134" fill="#6359FF" font-size="12">↳ Luxe pillow cover</text>
  <text x="316" y="134" text-anchor="end" fill="#6359FF" font-size="12">€25.99</text>
  <text x="70" y="160" fill="#6359FF" font-size="12">↳ Lana pillow cover</text>
  <text x="316" y="160" text-anchor="end" fill="#6359FF" font-size="12">€10.99</text>
  <line x1="40" y1="184" x2="330" y2="184" stroke="#C9C6E0" />
  <text x="40" y="210" fill="#0BBFBF" font-size="12" font-weight="700">Bundle saving</text>
  <text x="316" y="210" text-anchor="end" fill="#0BBFBF" font-size="12" font-weight="700">−€5.00</text>
  <text x="40" y="250" fill="#191741" font-size="13" font-weight="700">Total</text>
  <text x="316" y="250" text-anchor="end" fill="#191741" font-size="13" font-weight="700">€31.98</text>
  <rect x="370" y="20" width="170" height="260" rx="16" fill="#0BBFBF" />
  <text x="455" y="50" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">CART DISCOUNT</text>
  <text x="455" y="84" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">bundle-saving</text>
  <text x="455" y="118" text-anchor="middle" fill="#191741" font-size="11">target: lineItems</text>
  <text x="455" y="142" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">custom.parentId</text>
  <text x="455" y="160" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">is defined</text>
  <text x="455" y="200" text-anchor="middle" fill="#191741" font-size="11">fires on children only,</text>
  <text x="455" y="218" text-anchor="middle" fill="#191741" font-size="11">never on a loose pillow</text>
  <text x="455" y="256" text-anchor="middle" fill="#0b3b3b" font-size="10">finance can report it</text>
</svg>
:::

## Concept · Decisions you own

- **Shape**: parent + children, one opaque line, or custom line items?
- **Saving**: a Cart Discount on the children vs a hard-coded bundle price.
- **Predicate**: how the discount recognises the bundle without firing on loose components.

> **Discuss:** the parent is priced 0 with \`externalPrice\`. What else could carry the bundle's identity, and what would each choice cost at the order?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="30" width="165" height="240" rx="16" fill="#FFC806" />
  <text x="102" y="62" text-anchor="middle" fill="#191741" font-size="12" letter-spacing="2">SHAPE</text>
  <text x="102" y="100" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">parent + children</text>
  <text x="102" y="122" text-anchor="middle" fill="#191741" font-size="11">linked by parentId</text>
  <text x="102" y="160" text-anchor="middle" fill="#191741" font-size="11">vs one opaque line</text>
  <text x="102" y="182" text-anchor="middle" fill="#191741" font-size="11">vs custom line items</text>
  <text x="102" y="236" text-anchor="middle" fill="#191741" font-size="10">children keep stock · tax · fulfilment</text>
  <rect x="197" y="30" width="165" height="240" rx="16" fill="#FFC806" />
  <text x="280" y="62" text-anchor="middle" fill="#191741" font-size="12" letter-spacing="2">SAVING</text>
  <text x="280" y="100" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Cart Discount</text>
  <text x="280" y="122" text-anchor="middle" fill="#191741" font-size="11">on the children</text>
  <text x="280" y="160" text-anchor="middle" fill="#191741" font-size="11">vs a hard-coded</text>
  <text x="280" y="182" text-anchor="middle" fill="#191741" font-size="11">bundle price</text>
  <text x="280" y="236" text-anchor="middle" fill="#191741" font-size="10">catalogue truthful · reportable</text>
  <rect x="374" y="30" width="166" height="240" rx="16" fill="#FFC806" />
  <text x="457" y="62" text-anchor="middle" fill="#191741" font-size="12" letter-spacing="2">PREDICATE</text>
  <text x="457" y="100" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">custom.parentId</text>
  <text x="457" y="120" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">is defined</text>
  <text x="457" y="160" text-anchor="middle" fill="#191741" font-size="11">vs sku in (…)</text>
  <text x="457" y="182" text-anchor="middle" fill="#191741" font-size="11">vs a bundle-key match</text>
  <text x="457" y="236" text-anchor="middle" fill="#191741" font-size="10">must not fire on loose components</text>
</svg>
:::
`,zm=`---
task: cart.Session 4.4
summary: The same addLineItem as 4.2, PLUS recurrenceInfo binding a RecurrencePolicy (by key, e.g. "monthly") AND a required priceSelectionMode (Fixed / Dynamic); default the policy to "monthly" and the mode to Fixed.
file: cart/…/application/CartService.java
method: addRecurringLineItem(String sku, String policyKey, String priceMode)
prompt: |
  In bff-java, implement CartService.addRecurringLineItem(sku, policyKey, priceMode) in the cart module's application layer.
  Build the same addLineItem action as 4.2 (SKU, quantity 1) and add recurrenceInfo: the RecurrencePolicy
  referenced BY KEY (default "monthly" when none is given) and the required priceSelectionMode — Fixed by
  default, Dynamic when asked — then send it through mutate(actions). The rule: the line bills on the
  policy's schedule at its recurrence-scoped (subscription) price; priceSelectionMode governs how FUTURE
  orders are priced (Session 6), not this cart line.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 4.4 in Commerce Canvas with the charlie-armchair SKU and tell me what the line's recurrenceInfo and price show compared with a one-time line of the same SKU.
---

## Concept · One addLineItem, four dimensions

- Custom fields → the bundle (4.3). \`recurrenceInfo\` → the subscription (4.4).
- Distribution / supply channel → pickup vs delivery (4.5). \`inventoryMode\` → stock (4.6).
- Not new endpoints: the same action with one more field.

> **Docs:** [Recurring Orders](https://docs.commercetools.com/api/projects/recurring-orders) · [RecurrencePolicy](https://docs.commercetools.com/api/projects/recurrence-policies)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <line x1="280" y1="150" x2="110" y2="70" stroke="#8C8AAE" stroke-width="2" />
  <line x1="280" y1="150" x2="450" y2="70" stroke="#8C8AAE" stroke-width="2" />
  <line x1="280" y1="150" x2="110" y2="230" stroke="#8C8AAE" stroke-width="2" />
  <line x1="280" y1="150" x2="450" y2="230" stroke="#8C8AAE" stroke-width="2" />
  <circle cx="280" cy="150" r="58" fill="#6359FF" />
  <text x="280" y="146" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">addLineItem</text>
  <text x="280" y="166" text-anchor="middle" fill="#e6e6ff" font-size="11">sku × qty</text>
  <rect x="20" y="40" width="180" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="110" y="64" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">+ custom</text>
  <text x="110" y="84" text-anchor="middle" fill="#6F6D8F" font-size="11">bundle · 4.3</text>
  <rect x="360" y="40" width="180" height="60" rx="12" fill="#0BBFBF" />
  <text x="450" y="64" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">+ recurrenceInfo</text>
  <text x="450" y="84" text-anchor="middle" fill="#191741" font-size="11">subscription · 4.4</text>
  <rect x="20" y="200" width="180" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="110" y="224" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">+ distribution / supply</text>
  <text x="110" y="244" text-anchor="middle" fill="#6F6D8F" font-size="11">pickup vs delivery · 4.5</text>
  <rect x="360" y="200" width="180" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="450" y="224" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">+ inventoryMode</text>
  <text x="450" y="244" text-anchor="middle" fill="#6F6D8F" font-size="11">stock · 4.6</text>
</svg>
:::

## Concept · Subscribe and save

- A \`RecurrencePolicy\` is the schedule; \`recurrenceInfo\` on the line binds to it by key.
- The line resolves its **recurrence-scoped price**: €499 one-time becomes €449 a month.
- \`priceSelectionMode\`: Fixed locks it for future orders, Dynamic re-prices each cycle (Session 6).

> **Show:** PDP → Subscribe and Save toggle: the bag line reads "every month" at the subscription price.

> **Discuss:** the subscription price is lower than the one-time price. Who decides Fixed vs Dynamic — the shop or the shopper?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a44b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="200" height="110" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="120" y="58" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">ONE-TIME</text>
  <text x="120" y="94" text-anchor="middle" fill="#191741" font-size="24" font-weight="700">€499</text>
  <text x="120" y="122" text-anchor="middle" fill="#6F6D8F" font-size="11">charlie-armchair</text>
  <line x1="225" y1="85" x2="265" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a44b)" />
  <rect x="270" y="30" width="270" height="110" rx="14" fill="#0BBFBF" />
  <text x="405" y="58" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">SUBSCRIBE · EVERY MONTH</text>
  <text x="405" y="94" text-anchor="middle" fill="#191741" font-size="24" font-weight="700">€449 / month</text>
  <text x="405" y="122" text-anchor="middle" fill="#191741" font-size="11">the recurrence-scoped price</text>
  <rect x="20" y="166" width="520" height="110" rx="14" fill="#6359FF" />
  <text x="36" y="192" fill="#e6e6ff" font-size="11" letter-spacing="2">THE LINE</text>
  <text x="36" y="216" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">addLineItem { sku, quantity: 1,</text>
  <text x="36" y="238" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">  recurrenceInfo: { recurrencePolicy: { key: "monthly" }, priceSelectionMode: Fixed } }</text>
  <text x="36" y="262" fill="#e6e6ff" font-size="11">Fixed = lock the subscribe-time price · Dynamic = re-select each cycle (S6)</text>
</svg>
:::
`,Sm=`---
task: cart.Session 4.5
summary: Pre-built — study it: per-line fulfilment — setLineItemDistributionChannel prices the line, setLineItemSupplyChannel sources it (BOPIS); a key sets the channel, an empty string removes it.
file: cart/…/application/CartService.java
method: setLineItemChannel(String lineItemId, String distributionKey, String supplyKey)
prompt: |
  Read CartService.setLineItemChannel(lineItemId, distributionKey, supplyKey) and pickupLocations() in bff-java's
  cart module (application layer), plus the addLineItem overload that takes the two channel keys — they ship
  implemented. Explain to me, in a few sentences each: (1) the two channel roles on a line item — which one
  decides the PRICE and which one decides the inventory SOURCE / pickup location — and why a line can carry
  both; (2) why the storefront offers the choice twice (on the PDP before adding, and per line in the bag) and
  how an empty string "removes" a channel; (3) why only supply channels with an address are pickup locations.
  Ground the answers on the commercetools Knowledge MCP (Carts: setLineItemDistributionChannel,
  setLineItemSupplyChannel; Channels). Then run Try It for task 4.5 in Commerce Canvas, set a line to the
  pickup store, and tell me what the line's channel keys and price show.
---

## Concept · Two channel roles on a line

- **Distribution channel**: drives the *price* — the Session 2/3 channel price, now shopper-chosen.
- **Supply channel**: the *inventory source* — the warehouse, or the pickup store.
- Same line, both channels: one prices it, one sources it. Together: BOPIS.

> **Docs:** [setLineItemDistributionChannel](https://docs.commercetools.com/api/projects/carts#set-lineitem-distributionchannel) · [setLineItemSupplyChannel](https://docs.commercetools.com/api/projects/carts#set-lineitem-supplychannel) · [Channels](https://docs.commercetools.com/api/projects/channels)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a45a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="180" y="100" width="200" height="100" rx="14" fill="#6359FF" />
  <text x="280" y="130" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">line item</text>
  <text x="280" y="152" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">charlie-armchair × 1</text>
  <text x="280" y="180" text-anchor="middle" fill="#e6e6ff" font-size="11">€449 · from pickup-store</text>
  <line x1="180" y1="135" x2="120" y2="90" stroke="#0BBFBF" stroke-width="2.5" marker-end="url(#a45a)" />
  <rect x="20" y="40" width="130" height="70" rx="12" fill="#0BBFBF" />
  <text x="85" y="64" text-anchor="middle" fill="#191741" font-size="11" letter-spacing="1">DISTRIBUTION</text>
  <text x="85" y="84" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">prices the line</text>
  <text x="85" y="100" text-anchor="middle" fill="#0b3b3b" font-size="10" font-family="Roboto Mono, monospace">channel price</text>
  <line x1="380" y1="135" x2="440" y2="90" stroke="#FFC806" stroke-width="2.5" marker-end="url(#a45a)" />
  <rect x="410" y="40" width="130" height="70" rx="12" fill="#FFC806" />
  <text x="475" y="64" text-anchor="middle" fill="#191741" font-size="11" letter-spacing="1">SUPPLY</text>
  <text x="475" y="84" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">sources the line</text>
  <text x="475" y="100" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">stock · pickup</text>
  <rect x="60" y="226" width="200" height="44" rx="22" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="160" y="253" text-anchor="middle" fill="#6359FF" font-size="12">Deliver to my address</text>
  <rect x="300" y="226" width="200" height="44" rx="22" fill="#0BBFBF" />
  <text x="400" y="253" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Pick up at pickup-store</text>
</svg>
:::

## Concept · Offered twice, like a real shop

- On the PDP, before adding: the keys travel on \`POST /api/cart/line-items\`.
- Per line in the bag, after adding: \`PUT …/line-items/{id}/channel\`; an empty key removes it.
- Pickup locations: supply channels with an address. A warehouse has stock, no shop floor.

> **Show:** PDP fulfilment tiles, then the bag: each line says "Priced for ‹channel›"; switch one line to pickup.

> **Ask:** a bundle child or a subscription line keeps the default fulfilment. Why?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a45b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="240" height="110" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="140" y="56" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">PDP · BEFORE ADDING</text>
  <text x="140" y="84" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">POST /api/cart/line-items</text>
  <text x="140" y="104" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">{ sku, distributionChannelKey,</text>
  <text x="140" y="122" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  supplyChannelKey }</text>
  <rect x="300" y="30" width="240" height="110" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="420" y="56" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">BAG · PER LINE, LATER</text>
  <text x="420" y="84" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">PUT …/line-items/{id}/channel</text>
  <text x="420" y="104" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">{ supplyChannelKey: "pickup-store" }</text>
  <text x="420" y="122" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">{ supplyChannelKey: "" }  → delivery</text>
  <line x1="140" y1="140" x2="140" y2="178" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a45b)" />
  <line x1="420" y1="140" x2="420" y2="178" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a45b)" />
  <rect x="20" y="182" width="520" height="40" rx="12" fill="#6359FF" />
  <text x="280" y="207" text-anchor="middle" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">setLineItemDistributionChannel · setLineItemSupplyChannel → the 4.2 update</text>
  <rect x="20" y="236" width="250" height="40" rx="10" fill="#0BBFBF" />
  <text x="145" y="261" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">pickup-store · has address → pickup</text>
  <rect x="290" y="236" width="250" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="415" y="261" text-anchor="middle" fill="#6F6D8F" font-size="11">warehouse · stock, no address → hidden</text>
</svg>
:::
`,Am=`---
task: cart.Session 4.6
summary: Apply setLineItemInventoryMode with the requested mode (map the string to the InventoryMode enum via the inventoryMode(...) helper); homework extends this with the read-side stock gate.
file: cart/…/application/CartService.java
method: setLineItemInventoryMode(String lineItemId, String mode)
prompt: |
  In bff-java, implement CartService.setLineItemInventoryMode(lineItemId, mode) in the cart module's application layer.
  Build a setLineItemInventoryMode action for the line with the requested mode — map the string (None /
  ReserveOnCart / ReserveOnOrder / TrackOnly) to the SDK InventoryMode enum with the trainer-provided
  inventoryMode(mode) helper — and send it through mutate(actions). The rule: the per-line mode overrides
  the cart's default and governs WHEN and WHETHER stock is reserved; it is not a stock check. The read-side
  stock gate (an availability pre-check at add-time with a block / cap / backorder policy you own) is the
  homework, layered on 4.2's add, not on this method.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 4.6 in Commerce Canvas with ReserveOnCart on a seeded SKU and tell me what the line's inventoryMode shows and what happened to the InventoryEntry's availableQuantity.
---

## Concept · When — and whether — to reserve

- \`None\`: no checks, no reservation (the default). \`TrackOnly\`: ordering decrements, never blocks.
- \`ReserveOnCart\`: held the moment it is added; released on remove.
- \`ReserveOnOrder\`: held during the order; \`OutOfStock\` fails the order.

> **Docs:** [InventoryMode](https://docs.commercetools.com/api/projects/carts#inventorymode) · [setLineItemInventoryMode](https://docs.commercetools.com/api/projects/carts#set-lineitem-inventorymode)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <line x1="60" y1="60" x2="520" y2="60" stroke="#C9C6E0" stroke-width="4" stroke-linecap="round" />
  <circle cx="160" cy="60" r="10" fill="#6359FF" /><text x="160" y="40" text-anchor="middle" fill="#6359FF" font-size="12">add to cart</text>
  <circle cx="420" cy="60" r="10" fill="#6359FF" /><text x="420" y="40" text-anchor="middle" fill="#6359FF" font-size="12">place order</text>
  <g font-size="11">
    <rect x="20" y="90" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="36" y="115" fill="#191741" font-family="Roboto Mono, monospace">None</text>
    <text x="300" y="115" text-anchor="middle" fill="#6F6D8F">independent of inventory · the default</text>
    <rect x="20" y="138" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="36" y="163" fill="#191741" font-family="Roboto Mono, monospace">ReserveOnCart</text>
    <rect x="160" y="148" width="360" height="20" rx="10" fill="#0BBFBF" />
    <text x="340" y="162" text-anchor="middle" fill="#191741" font-weight="700">reserved from add → released on remove</text>
    <rect x="20" y="186" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="36" y="211" fill="#191741" font-family="Roboto Mono, monospace">ReserveOnOrder</text>
    <rect x="400" y="196" width="120" height="20" rx="10" fill="#0BBFBF" />
    <text x="460" y="210" text-anchor="middle" fill="#191741" font-weight="700">at the order</text>
    <text x="300" y="211" text-anchor="middle" fill="#6F6D8F">OutOfStock fails the order</text>
    <rect x="20" y="234" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
    <text x="36" y="259" fill="#191741" font-family="Roboto Mono, monospace">TrackOnly</text>
    <rect x="400" y="244" width="120" height="20" rx="10" fill="#FFC806" />
    <text x="460" y="258" text-anchor="middle" fill="#191741" font-weight="700">decrement</text>
    <text x="300" y="259" text-anchor="middle" fill="#6F6D8F">counted, never blocked</text>
  </g>
</svg>
:::

## Concept · The stock gate is separate (homework)

- Modes govern timing; a **read-side gate** checks \`availableQuantity\` at add-time.
- You own the policy: block, cap to stock, or allow backorder — and the message.
- You own the source: channel availability or an InventoryEntry read.

> **Ask:** what should happen the instant a shopper adds the last item in stock?

> **Show:** the PDP stock badge; Add to bag over stock is blocked, capped or back-ordered per your policy.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a46b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="110" width="130" height="70" rx="12" fill="#6359FF" />
  <text x="85" y="140" text-anchor="middle" fill="#ffffff" font-size="12">Add to bag</text>
  <text x="85" y="160" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">sku × 3</text>
  <line x1="150" y1="145" x2="200" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a46b)" />
  <rect x="200" y="90" width="160" height="110" rx="12" fill="#FFC806" />
  <text x="280" y="116" text-anchor="middle" fill="#191741" font-size="12" letter-spacing="2">STOCK GATE</text>
  <text x="280" y="140" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">availableQuantity = 2</text>
  <text x="280" y="164" text-anchor="middle" fill="#191741" font-size="11">read-side · add-time</text>
  <text x="280" y="186" text-anchor="middle" fill="#191741" font-size="10">homework · T2</text>
  <line x1="360" y1="115" x2="410" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a46b)" />
  <line x1="360" y1="145" x2="410" y2="145" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a46b)" />
  <line x1="360" y1="175" x2="410" y2="220" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a46b)" />
  <rect x="412" y="40" width="128" height="50" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="476" y="60" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">block</text>
  <text x="476" y="78" text-anchor="middle" fill="#6F6D8F" font-size="10">"only 2 left"</text>
  <rect x="412" y="120" width="128" height="50" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="476" y="140" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">cap</text>
  <text x="476" y="158" text-anchor="middle" fill="#6F6D8F" font-size="10">added 2 of 3</text>
  <rect x="412" y="200" width="128" height="50" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="476" y="220" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">backorder</text>
  <text x="476" y="238" text-anchor="middle" fill="#6F6D8F" font-size="10">ships later</text>
  <text x="85" y="250" text-anchor="middle" fill="#6F6D8F" font-size="10">source: channel stock</text>
  <text x="85" y="266" text-anchor="middle" fill="#6F6D8F" font-size="10">or InventoryEntry</text>
</svg>
:::
`,Em=`---
task: cart.Session 4.7
summary: Pre-built — study it: setShippingAddress makes the cart shippable and taxable (taxedPrice appears), then the service settles the delivery method — clearing a method the new address has no rate for in the same update.
file: cart/…/application/CartService.java
method: setShippingAddress(AddressInput in)
prompt: |
  Read CartService.setShippingAddress(in) and ensureShippingMethod(cart, preferredId) in bff-java's cart module
  (application layer) — they ship implemented. Explain to me, in a few sentences each: (1) why the shipping
  address is the input to BOTH shipping-method matching (Zones) and tax, and what field appears on the cart
  once it is set; (2) why a currently selected shipping method is cleared in the SAME update as the new
  address, and what the platform would answer if it were not; (3) how the service then settles the delivery
  choice — keep a still-matching method, else the project's default, else the first match — and why it
  tolerates 4.8's matching read still being a stub. Ground the answers on the commercetools Knowledge MCP
  (Carts: setShippingAddress, taxedPrice; Shipping Methods matching). Then run Try It for task 4.7 in Commerce
  Canvas with a German address and tell me what taxedPrice, shippingAddress and shippingInfo show.
---

## Concept · Address → matching → tax

- The address names a country; Zones map countries to shipping methods.
- Once set, the cart gains \`taxedPrice\` (per \`taxMode\`) and shipping methods can match.
- Nothing ships, nothing taxes, until the cart knows where it is going.

> **Docs:** [setShippingAddress](https://docs.commercetools.com/api/projects/carts#set-shipping-address) · [Tax modes](https://docs.commercetools.com/api/projects/carts#taxmode) · [Zones](https://docs.commercetools.com/api/projects/zones)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a47a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="100" width="150" height="100" rx="14" fill="#6359FF" />
  <text x="95" y="128" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">ADDRESS</text>
  <text x="95" y="154" text-anchor="middle" fill="#ffffff" font-size="12">Berlin · DE</text>
  <text x="95" y="178" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">setShippingAddress</text>
  <line x1="170" y1="130" x2="220" y2="80" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a47a)" />
  <line x1="170" y1="170" x2="220" y2="220" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a47a)" />
  <rect x="222" y="40" width="160" height="80" rx="12" fill="#0BBFBF" />
  <text x="302" y="66" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Shipping matching</text>
  <text x="302" y="88" text-anchor="middle" fill="#191741" font-size="11">Zone "EU" → Standard · Express</text>
  <text x="302" y="106" text-anchor="middle" fill="#0b3b3b" font-size="10">4.8 reads this</text>
  <rect x="222" y="180" width="160" height="80" rx="12" fill="#0BBFBF" />
  <text x="302" y="206" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Tax</text>
  <text x="302" y="228" text-anchor="middle" fill="#191741" font-size="11">DE rate · taxMode Platform</text>
  <text x="302" y="246" text-anchor="middle" fill="#0b3b3b" font-size="10">tax category per line</text>
  <line x1="382" y1="80" x2="430" y2="130" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a47a)" />
  <line x1="382" y1="220" x2="430" y2="170" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a47a)" />
  <rect x="432" y="100" width="108" height="100" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="486" y="128" text-anchor="middle" fill="#6F6D8F" font-size="10" letter-spacing="1">THE CART GAINS</text>
  <text x="486" y="154" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">shippingInfo</text>
  <text x="486" y="178" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">taxedPrice</text>
</svg>
:::

## Concept · Clear the method in the same update

- The platform refuses an address the current method has no rate for.
- So: \`setShippingMethod\` (none) + \`setShippingAddress\` in **one** update — one version step.
- Then re-select: the earlier method if it still matches, else the default, else the first.

> **Show:** the bag's Delivery panel after saving an address: a method is already chosen; checkout's address step.

> **Ask:** the shopper moves from Berlin to New York. Which method survives, and which rate?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a47b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="520" height="80" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="56" fill="#FFC806" font-size="11" letter-spacing="2">TWO UPDATES · the platform refuses the first</text>
  <text x="40" y="80" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">v7: setShippingAddress(New York) with Express-EU still selected → 400 · no rate for US</text>
  <text x="40" y="100" fill="#6F6D8F" font-size="11">the address never lands; the shopper sees an error</text>
  <rect x="20" y="130" width="520" height="140" rx="14" fill="#0BBFBF" />
  <text x="40" y="156" fill="#0b3b3b" font-size="11" letter-spacing="2" font-weight="700">ONE UPDATE · then settle</text>
  <text x="40" y="182" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">v7: [ setShippingMethod(∅), setShippingAddress(New York) ] → v8</text>
  <line x1="60" y1="196" x2="60" y2="214" stroke="#191741" stroke-width="2" marker-end="url(#a47b)" />
  <text x="40" y="236" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">ensureShippingMethod: keep still-matching → else isDefault → else first → v9</text>
  <text x="40" y="258" fill="#0b3b3b" font-size="11">4.8 not built yet? the address is saved and the method waits</text>
</svg>
:::
`,Rm=`---
task: cart.Session 4.8
summary: Pre-built — study it: shippingMethods().matchingCart() lists the methods valid for the cart's address with the rate that matched; setShippingMethod puts the shopper's choice on the cart.
file: cart/…/application/CartService.java
method: shippingOptions() · setShippingMethod(String shippingMethodId)
prompt: |
  Read CartService.shippingOptions() and setShippingMethod(id) in bff-java's cart module (application layer),
  CtShippingRepository.matchingMethods(cartId) in its infrastructure layer, and CartMapper.toShippingOption —
  they ship implemented. Explain to me, in a few sentences each: (1) how the platform decides which shipping
  methods match a cart (Zones, the method's predicate, value and score tiers) and why the list is EMPTY until
  4.7 set an address; (2) what each option carries — the rate that matched (price, freeAbove), isDefault,
  selected — and where that rate comes from inside a ShippingMethod; (3) why this task's PUT is the shopper
  CHANGING a method 4.7 already selected, and how setShippingMethod shows up in totalPrice via shippingInfo.
  Ground the answers on the commercetools Knowledge MCP (Shipping Methods: matching cart; Carts:
  setShippingMethod). Then run Try It for task 4.8 in Commerce Canvas, pick the non-default method, and tell
  me what shippingInfo and totalPrice show.
---

## Concept · Matching: Zones, predicate, tiers

- A ShippingMethod carries ZoneRates: a Zone of countries, a price, maybe \`freeAbove\`.
- A \`predicate\` can restrict the method further; value or score tiers pick the rate.
- \`matchingCart\` evaluates it against the cart's address, currency and value.

> **Docs:** [Get ShippingMethods for a Cart](https://docs.commercetools.com/api/projects/shippingMethods#get-shippingmethods-for-a-cart) · [ShippingRate](https://docs.commercetools.com/api/projects/shippingMethods#shippingrate)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a48a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="150" height="220" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="95" y="66" text-anchor="middle" fill="#6F6D8F" font-size="10" letter-spacing="2">THE CART</text>
  <text x="95" y="96" text-anchor="middle" fill="#191741" font-size="12">Berlin · DE</text>
  <text x="95" y="120" text-anchor="middle" fill="#191741" font-size="12">EUR · €536</text>
  <text x="95" y="156" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">GET …/matching-cart</text>
  <text x="95" y="176" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">?cartId=</text>
  <text x="95" y="236" text-anchor="middle" fill="#FFC806" font-size="10">no address → 400 → []</text>
  <line x1="170" y1="150" x2="215" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a48a)" />
  <rect x="218" y="40" width="322" height="100" rx="14" fill="#0BBFBF" />
  <text x="379" y="64" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Standard · isDefault</text>
  <text x="379" y="86" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">Zone EU { DE, FR, … } → rate €4.90 · freeAbove €500</text>
  <text x="379" y="106" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">predicate: none</text>
  <text x="379" y="128" text-anchor="middle" fill="#0b3b3b" font-size="11" font-weight="700">matches → €0.00 (free above 500)</text>
  <rect x="218" y="160" width="322" height="100" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="379" y="184" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Express</text>
  <text x="379" y="206" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">Zone EU → rate €14.90</text>
  <text x="379" y="226" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">predicate: none</text>
  <text x="379" y="248" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700">matches → €14.90</text>
</svg>
:::

## Concept · Empty until an address; default already chosen

- Each option: the matched rate (\`price\`, \`freeAbove\`), \`isDefault\`, \`selected\`.
- 4.7 already selected the default; this PUT is the shopper **changing** it.
- \`setShippingMethod\` adds \`shippingInfo\` into \`totalPrice\`; free shipping can also come from a Cart Discount (4.9).

> **Show:** the bag's Delivery method radios and the checkout's delivery step: the default pre-selected, prices from the matched rate.

> **Discuss:** \`freeAbove\` on the rate, or a free-shipping Cart Discount? When would you pick each?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="320" height="260" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="50" fill="#6F6D8F" font-size="11" letter-spacing="2">DELIVERY METHOD</text>
  <circle cx="56" cy="92" r="9" fill="none" stroke="#0BBFBF" stroke-width="2" /><circle cx="56" cy="92" r="4" fill="#0BBFBF" />
  <text x="76" y="88" fill="#191741" font-size="12" font-weight="700">Standard · 3–5 days</text>
  <text x="76" y="106" fill="#6F6D8F" font-size="11">Free above €500 · recommended</text>
  <text x="320" y="92" text-anchor="end" fill="#0BBFBF" font-size="12" font-weight="700">€0.00</text>
  <circle cx="56" cy="152" r="9" fill="none" stroke="#8C8AAE" stroke-width="2" />
  <text x="76" y="148" fill="#191741" font-size="12" font-weight="700">Express · next day</text>
  <text x="76" y="166" fill="#6F6D8F" font-size="11">Zone EU</text>
  <text x="320" y="152" text-anchor="end" fill="#6359FF" font-size="12">€14.90</text>
  <line x1="40" y1="196" x2="320" y2="196" stroke="#C9C6E0" />
  <text x="40" y="224" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">{ id, name, price, freeAbove,</text>
  <text x="40" y="244" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  isDefault: true, selected: true }</text>
  <rect x="360" y="20" width="180" height="260" rx="16" fill="#0BBFBF" />
  <text x="450" y="50" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">ON CHANGE</text>
  <text x="450" y="86" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">PUT /api/cart/</text>
  <text x="450" y="104" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">shipping-method</text>
  <text x="450" y="140" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">setShippingMethod(id)</text>
  <text x="450" y="178" text-anchor="middle" fill="#191741" font-size="11">→ shippingInfo.price</text>
  <text x="450" y="198" text-anchor="middle" fill="#191741" font-size="11">→ totalPrice + €14.90</text>
  <text x="450" y="236" text-anchor="middle" fill="#0b3b3b" font-size="10">the 4.2 update, nothing new</text>
</svg>
:::
`,Bm=`---
task: cart.Session 4.9
summary: POST a CartUpdate with a CartAddDiscountCode action for the code (and a CartRemoveDiscountCode action by id to remove); the platform validates it against active Cart Discounts.
file: cart/…/infrastructure/CtCartRepository.java
method: addDiscountCode(String cartId, Long version, String code) · removeDiscountCode(String cartId, Long version, String discountCodeId)
prompt: |
  In bff-java, implement CtCartRepository.addDiscountCode(cartId, version, code) and removeDiscountCode(cartId, version, discountCodeId) in the cart module's infrastructure layer.
  Each is ONE call: POST a CartUpdate to the cart by id carrying the version and a single action — an
  addDiscountCode action with the code string, or a removeDiscountCode action referencing the DiscountCode
  by id — returning the raw SDK Cart with the same expansions the other methods use (so the summary can show
  the human code). Do not validate the code yourself: the platform evaluates it against active Cart
  Discounts and reports the outcome in discountCodes[].state. The service owns version + 409-retry as ever.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 4.9 in Commerce Canvas with SAVE10 on a cart over €100 and tell me what discountCodes[].state, discountOnTotalPrice and totalPrice show; then remove it.
---

## Concept · Cart Discount vs Discount Code

- A **Cart Discount** is automatic: predicate, target, value, \`sortOrder\`.
- A **Discount Code** is the trigger: it *references* Cart Discounts that require a code.
- The code does nothing until a referenced Cart Discount matches the cart.

> **Docs:** [Cart Discounts](https://docs.commercetools.com/api/projects/cartDiscounts) · [Discount Codes](https://docs.commercetools.com/api/projects/discountCodes) · [addDiscountCode](https://docs.commercetools.com/api/projects/carts#add-discountcode)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a49a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="200" height="220" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="120" y="68" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">DISCOUNT CODE</text>
  <rect x="50" y="90" width="140" height="44" rx="8" fill="#FFC806" />
  <text x="120" y="118" text-anchor="middle" fill="#191741" font-size="16" font-weight="700" font-family="Roboto Mono, monospace">SAVE10</text>
  <text x="120" y="166" text-anchor="middle" fill="#6359FF" font-size="11">code-triggered</text>
  <text x="120" y="186" text-anchor="middle" fill="#6359FF" font-size="11">the shopper types it</text>
  <text x="120" y="226" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">cartDiscounts: [ ref ]</text>
  <line x1="220" y1="112" x2="330" y2="112" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a49a)" />
  <text x="275" y="100" text-anchor="middle" fill="#6F6D8F" font-size="10">references</text>
  <rect x="340" y="40" width="200" height="220" rx="16" fill="#0BBFBF" />
  <text x="440" y="68" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">CART DISCOUNT</text>
  <text x="440" y="100" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">10% off over €100</text>
  <text x="440" y="130" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">predicate: totalPrice &gt; "100.00 EUR"</text>
  <text x="440" y="150" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">target: lineItems · value: 10%</text>
  <text x="440" y="170" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">requiresDiscountCode: true</text>
  <text x="440" y="206" text-anchor="middle" fill="#191741" font-size="11">automatic ones need no code</text>
  <text x="440" y="226" text-anchor="middle" fill="#191741" font-size="11">(the bundle saving, 4.3)</text>
  <text x="440" y="250" text-anchor="middle" fill="#0b3b3b" font-size="10" font-family="Roboto Mono, monospace">sortOrder stacks them</text>
</svg>
:::

## Concept · The saving shows on the cart

- \`discountCodes[].state\`: \`MatchesCart\` or \`DoesNotMatchCart\` — the platform's verdict, not yours.
- The effect lands as \`discountOnTotalPrice\` or per-line \`discountedPricePerQuantity\`; the total drops.
- \`sortOrder\` orders stacked discounts; the summary (4.10) adds them up as savings.

> **Show:** the bag's promo box: \`SAVE10\` → a discount line and a lower total; the same code on a €60 bag matches nothing.

> **Ask:** where does the saving live — on the code, or on the cart? Why does that matter for 4.10?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="250" height="260" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="40" y="50" fill="#6F6D8F" font-size="11" letter-spacing="2">BAG · €536</text>
  <rect x="40" y="66" width="210" height="34" rx="8" fill="#ffffff" stroke="#C9C6E0" />
  <text x="56" y="88" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">SAVE10</text>
  <rect x="180" y="72" width="62" height="22" rx="6" fill="#6359FF" />
  <text x="211" y="87" text-anchor="middle" fill="#ffffff" font-size="10">Apply</text>
  <text x="40" y="136" fill="#6359FF" font-size="12">Subtotal</text><text x="250" y="136" text-anchor="end" fill="#6359FF" font-size="12">€536.00</text>
  <text x="40" y="162" fill="#0BBFBF" font-size="12" font-weight="700">SAVE10 · MatchesCart</text><text x="250" y="162" text-anchor="end" fill="#0BBFBF" font-size="12" font-weight="700">−€53.60</text>
  <text x="40" y="188" fill="#6359FF" font-size="12">Shipping</text><text x="250" y="188" text-anchor="end" fill="#6359FF" font-size="12">€0.00</text>
  <line x1="40" y1="206" x2="250" y2="206" stroke="#C9C6E0" />
  <text x="40" y="234" fill="#191741" font-size="13" font-weight="700">Total</text><text x="250" y="234" text-anchor="end" fill="#191741" font-size="13" font-weight="700">€482.40</text>
  <rect x="290" y="20" width="250" height="260" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="310" y="50" fill="#6F6D8F" font-size="11" letter-spacing="2">BAG · €60</text>
  <rect x="310" y="66" width="210" height="34" rx="8" fill="#ffffff" stroke="#C9C6E0" />
  <text x="326" y="88" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">SAVE10</text>
  <text x="310" y="136" fill="#6359FF" font-size="12">Subtotal</text><text x="520" y="136" text-anchor="end" fill="#6359FF" font-size="12">€60.00</text>
  <text x="310" y="162" fill="#FFC806" font-size="12" font-weight="700">SAVE10 · DoesNotMatchCart</text><text x="520" y="162" text-anchor="end" fill="#FFC806" font-size="12">€0.00</text>
  <text x="310" y="188" fill="#6F6D8F" font-size="11">under €100 — the code is on the cart,</text>
  <text x="310" y="206" fill="#6F6D8F" font-size="11">the discount is not</text>
  <line x1="310" y1="214" x2="520" y2="214" stroke="#C9C6E0" />
  <text x="310" y="242" fill="#191741" font-size="13" font-weight="700">Total</text><text x="520" y="242" text-anchor="end" fill="#191741" font-size="13" font-weight="700">€60.00</text>
</svg>
:::
`,Mm=`---
task: customer.Session 5.1
summary: POST a CustomerDraft — email + password + firstName + lastName, the store when set and the guest's anonymousId (so their carts / lists / orders become the new customer's) — and return the raw CustomerSignInResult (customer + cart).
file: customer/…/infrastructure/CtCustomerRepository.java
method: signUp(SignUpInput in)
prompt: |
  In bff-java, implement CtCustomerRepository.signUp(in) in the customer module's infrastructure layer.
  POST a CustomerDraft built from in: email, password, firstName, lastName, the store BY KEY when
  in.storeKey() is set, and in.anonymousId() so every cart, shopping list and order the guest owns becomes
  the new customer's. Return the raw SDK CustomerSignInResult (customer + cart); the service records the
  customer on the session and maps a PII-safe profile. Do not catch the duplicate-email error: the service
  already turns DuplicateField into a friendly 409.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 5.1 in Commerce Canvas and tell me what the response shows.
---

## Concept · A Customer — and what sign-up gives back

- A **Customer**: a unique email, a name, a group, an address book, \`isEmailVerified\`.
- Sign-up returns a **\`CustomerSignInResult\`**: the customer **and** their active cart.
- The guest's **\`anonymousId\`** hands over carts, lists, orders, payments — **once**.

> **Discuss:** the draft may set \`customerGroup\` and \`stores\`. Why must the BFF, never the browser, compose it?

> **Docs:** [Create (sign up) a Customer](https://docs.commercetools.com/api/projects/customers#create-sign-up-customer)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m51a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#6359FF" /></marker></defs>
  <rect x="20" y="30" width="190" height="240" rx="18" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="115" y="62" text-anchor="middle" fill="#6F6D8F" font-size="13" letter-spacing="2">CUSTOMER</text>
  <text x="40" y="98" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">email</text>
  <text x="190" y="98" text-anchor="end" fill="#FFC806" font-size="11">unique</text>
  <text x="40" y="126" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">firstName</text>
  <text x="40" y="154" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">customerGroup</text>
  <text x="40" y="182" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">addresses[]</text>
  <text x="40" y="210" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">isEmailVerified</text>
  <text x="115" y="250" text-anchor="middle" fill="#6F6D8F" font-size="11">global · store-specific</text>
  <line x1="212" y1="150" x2="344" y2="150" stroke="#6359FF" stroke-width="3" marker-end="url(#m51a)" />
  <text x="278" y="120" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">anonymousId</text>
  <rect x="222" y="162" width="112" height="20" rx="10" fill="#6359FF" />
  <text x="278" y="176" text-anchor="middle" fill="#ffffff" font-size="10">carts · lists</text>
  <rect x="222" y="188" width="112" height="20" rx="10" fill="#6359FF" />
  <text x="278" y="202" text-anchor="middle" fill="#ffffff" font-size="10">orders · payments</text>
  <text x="278" y="232" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">used once</text>
  <rect x="350" y="30" width="190" height="240" rx="18" fill="#0BBFBF" />
  <text x="445" y="62" text-anchor="middle" fill="#0b3b3b" font-size="13" letter-spacing="2">RESULT</text>
  <text x="445" y="96" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">CustomerSignInResult</text>
  <rect x="370" y="112" width="150" height="44" rx="10" fill="#FFFFFF" />
  <text x="445" y="139" text-anchor="middle" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">customer</text>
  <rect x="370" y="166" width="150" height="64" rx="10" fill="#FFFFFF" />
  <text x="445" y="192" text-anchor="middle" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">cart</text>
  <text x="445" y="212" text-anchor="middle" fill="#6359FF" font-size="11">active · recalculated</text>
  <text x="445" y="256" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">customers().post(draft)</text>
</svg>
:::

## Concept · Email is unique; the password never comes back

- Duplicate email → \`DuplicateField\`; the service answers **409 "sign in instead"**.
- The password never comes back — the SDK \`Customer\` has no such field.
- A new customer has no other cart: the guest cart simply **becomes theirs**.

> **Show:** \`/register\` in the storefront: the header greets the shopper, the bag page says "Your basket".

> **Ask:** what does \`anonymousId\` on the draft do that a plain \`POST /customers\` does not?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m51b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="100" width="160" height="100" rx="12" fill="#6359FF" />
  <text x="100" y="132" text-anchor="middle" fill="#ffffff" font-size="13">CustomerDraft</text>
  <text x="100" y="154" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">email · password</text>
  <text x="100" y="172" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">name · anonymousId</text>
  <line x1="180" y1="150" x2="225" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m51b)" />
  <rect x="225" y="110" width="120" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="285" y="145" text-anchor="middle" fill="#191741" font-size="13">commercetools</text>
  <text x="285" y="166" text-anchor="middle" fill="#6F6D8F" font-size="11">POST /customers</text>
  <path d="M345,130 L395,60" fill="none" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m51b)" />
  <path d="M345,170 L395,240" fill="none" stroke="#FFC806" stroke-width="2" marker-end="url(#m51b)" />
  <rect x="395" y="22" width="150" height="90" rx="12" fill="#0BBFBF" />
  <text x="470" y="46" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">201 · customer + cart</text>
  <text x="470" y="68" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">cart.customerId = me</text>
  <text x="470" y="86" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">cart.anonymousId = null</text>
  <text x="470" y="104" text-anchor="middle" fill="#0b3b3b" font-size="10">no password field anywhere</text>
  <rect x="395" y="200" width="150" height="80" rx="12" fill="#FFC806" />
  <text x="470" y="226" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">400 DuplicateField</text>
  <text x="470" y="248" text-anchor="middle" fill="#191741" font-size="11">service → 409</text>
  <text x="470" y="266" text-anchor="middle" fill="#191741" font-size="11">"sign in instead"</text>
</svg>
:::
`,Tm=`---
task: customer.Session 5.2
summary: POST /login with a CustomerSignin — email + password + anonymousId + anonymousCartSignInMode — and return the raw CustomerSignInResult; its cart is the customer's RECALCULATED active cart.
file: customer/…/infrastructure/CtCustomerRepository.java
method: signIn(String email, String password, String anonymousId, AnonymousCartSignInMode mode, String storeKey)
prompt: |
  In bff-java, implement CtCustomerRepository.signIn(email, password, anonymousId, mode, storeKey) in the
  customer module's infrastructure layer.
  POST a CustomerSignin carrying email, password, the anonymousId and the anonymousCartSignInMode to the
  login endpoint — the in-store login (inStore(storeKey)) when storeKey is set, the general one otherwise —
  and return the raw SDK CustomerSignInResult. Its cart is the customer's most recently modified active
  cart, recalculated; the service re-points the session at it and builds the merge report.
  Do not catch InvalidCredentials: a wrong email and a wrong password must answer the same 400.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 5.2 in Commerce Canvas and tell me what the response shows.
---

## Concept · Sign-in is not a token

- \`POST /login\` **authenticates** and returns **state**: customer + active cart.
- The cart is **recalculated** — prices, taxes, discounts for this customer.
- "Signed in" lives in the BFF session, never in a browser token.

> **Discuss:** what should the BFF do with the session's cart id after this call? It may now point at a \`Merged\` cart.

> **Docs:** [Authenticate (sign in) a Customer](https://docs.commercetools.com/api/projects/customers#authenticate-sign-in-customer)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m52a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="110" width="110" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="71" y="142" text-anchor="middle" fill="#191741" font-size="13">Browser</text>
  <text x="71" y="162" text-anchor="middle" fill="#6F6D8F" font-size="11">email · password</text>
  <line x1="126" y1="150" x2="160" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m52a)" />
  <rect x="160" y="96" width="120" height="108" rx="12" fill="#6359FF" />
  <text x="220" y="124" text-anchor="middle" fill="#ffffff" font-size="13">BFF</text>
  <text x="220" y="146" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">CustomerSignin</text>
  <text x="220" y="164" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">+ anonymousId</text>
  <text x="220" y="180" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">+ signInMode</text>
  <line x1="280" y1="150" x2="314" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m52a)" />
  <rect x="314" y="110" width="110" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="369" y="142" text-anchor="middle" fill="#191741" font-size="13">commercetools</text>
  <text x="369" y="162" text-anchor="middle" fill="#6F6D8F" font-size="11">POST /login</text>
  <path d="M369,190 L369,222 L220,222 L220,250" fill="none" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m52a)" />
  <rect x="130" y="250" width="180" height="40" rx="10" fill="#0BBFBF" />
  <text x="220" y="268" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">customer + cart ↻ recalculated</text>
  <text x="220" y="283" text-anchor="middle" fill="#0b3b3b" font-size="10">state, not a token</text>
  <rect x="440" y="60" width="104" height="180" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="492" y="86" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700">ShopperSession</text>
  <text x="492" y="118" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">customerId</text>
  <text x="492" y="140" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">groupId</text>
  <text x="492" y="162" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">cartId ←new</text>
  <text x="492" y="200" text-anchor="middle" fill="#6F6D8F" font-size="10">server-side only</text>
  <text x="492" y="216" text-anchor="middle" fill="#6F6D8F" font-size="10">behind lhc_session</text>
  <path d="M310,270 L492,270 L492,240" fill="none" stroke="#0BBFBF" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#m52a)" />
</svg>
:::

## Concept · Wrong email, wrong password — the same 400

- Both answer \`InvalidCredentials\`; stay as vague (no user enumeration).
- A store-specific customer authenticates only at the **in-store** login — the general one says the same.
- Sign out first when demoing: a signed-in session has no guest basket.

> **Show:** \`/login\` → "Hi, Ada" in the header; the bag re-renders from the returned cart; \`POST /api/cart/prefill\` lands her default address.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m52b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="200" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="120" y="52" text-anchor="middle" fill="#191741" font-size="12">unknown email</text>
  <text x="120" y="72" text-anchor="middle" fill="#6F6D8F" font-size="11" font-family="Roboto Mono, monospace">nobody@lhc.test</text>
  <rect x="20" y="110" width="200" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="120" y="132" text-anchor="middle" fill="#191741" font-size="12">wrong password</text>
  <text x="120" y="152" text-anchor="middle" fill="#6F6D8F" font-size="11" font-family="Roboto Mono, monospace">ada@lhc.test · ******</text>
  <rect x="20" y="190" width="200" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="120" y="212" text-anchor="middle" fill="#191741" font-size="12">store customer, general /login</text>
  <text x="120" y="232" text-anchor="middle" fill="#6F6D8F" font-size="11" font-family="Roboto Mono, monospace">stores: [b2c-retail-store]</text>
  <path d="M220,57 L300,137" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m52b)" />
  <line x1="220" y1="137" x2="300" y2="137" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m52b)" />
  <path d="M220,217 L300,137" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m52b)" />
  <rect x="305" y="100" width="150" height="74" rx="12" fill="#FFC806" />
  <text x="380" y="130" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">400</text>
  <text x="380" y="152" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">InvalidCredentials</text>
  <text x="380" y="196" text-anchor="middle" fill="#6359FF" font-size="11">one answer — nothing to enumerate</text>
  <rect x="470" y="190" width="80" height="54" rx="12" fill="#0BBFBF" />
  <text x="510" y="212" text-anchor="middle" fill="#191741" font-size="10" font-weight="700">in-store</text>
  <text x="510" y="230" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">inStore(key)</text>
  <path d="M220,230 L300,260 L470,260 L470,230" fill="none" stroke="#0BBFBF" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#m52b)" />
  <text x="350" y="278" text-anchor="middle" fill="#0BBFBF" font-size="10">the store chosen at sign-up decides the login endpoint</text>
</svg>
:::
`,Dm=`---
task: customer.Session 5.3
summary: Sign in AND resolve the cart deliberately — decide the AnonymousCartSignInMode, preflight the customer's active cart (same currency / store, or a 409 with a reason — never a half-merged cart), call signIn with the guest's anonymousId and the mode, then adopt the RETURNED cart so the session and the merge report are exact.
file: customer/…/application/CustomerService.java
method: signInAndResolveCart(String email, String password, String mergeMode) · mergeReport(String anonymousCartId)
prompt: |
  In bff-java, implement CustomerService.signInAndResolveCart(email, password, mergeMode) and
  mergeReport(anonymousCartId) in the customer module's application layer.
  Resolve the AnonymousCartSignInMode with modeOf(mergeMode); preflight with snapshotBefore(email, guestCartId)
  — the customer's active cart must share the guest cart's currency and store, else a 409 naming the reason
  and the alternative mode; call repo.signIn(...) with guestAnonymousIdOrNull() and the mode; then
  adopt(result, mode, guestCartIdOrNull(), before) so the session points at the RETURNED cart. mergeReport
  re-reads the (now Merged) anonymous cart and the session's active cart and diffs them with buildReport(...).
  Never leave a half-merged cart: block an ineligible merge before the sign-in call, not after it.
  Before coding, propose how you will decide the merge strategy (MergeWithExistingCustomerCart vs
  UseAsNewActiveCustomerCart) and what happens to an ineligible cart (block with a reason vs fall back),
  and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 5.3 in Commerce Canvas as ada@lhc.test with a guest basket in the session and
  tell me what the merge report shows.
---

## Concept · Two baskets, one shopper — who wins?

- **\`MergeWithExistingCustomerCart\`** — guest lines flow *into* the customer's cart; matches keep the **higher quantity**.
- **\`UseAsNewActiveCustomerCart\`** — the guest cart *becomes* active; the old one is disassociated.
- Eligible only with the same **currency** and **store**.

> **Docs:** [Merge a Cart](https://docs.commercetools.com/api/carts-orders-overview#merge-a-cart)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m53a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="20" width="256" height="264" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="144" y="46" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">MergeWithExistingCustomerCart</text>
  <rect x="32" y="64" width="100" height="70" rx="10" fill="#6359FF" />
  <text x="82" y="84" text-anchor="middle" fill="#ffffff" font-size="11">guest cart</text>
  <text x="82" y="104" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">CARM-023 ×2</text>
  <rect x="156" y="64" width="100" height="70" rx="10" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="206" y="84" text-anchor="middle" fill="#191741" font-size="11">Ada's cart</text>
  <text x="206" y="104" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">CARM-023 ×1</text>
  <text x="206" y="120" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">LPC-011 ×1</text>
  <path d="M82,134 L82,160 L206,160 L206,180" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m53a)" />
  <rect x="156" y="182" width="100" height="70" rx="10" fill="#0BBFBF" />
  <text x="206" y="202" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">active</text>
  <text x="206" y="222" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">CARM-023 ×2</text>
  <text x="206" y="238" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">LPC-011 ×1</text>
  <text x="82" y="210" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">Merged</text>
  <text x="82" y="226" text-anchor="middle" fill="#6F6D8F" font-size="9">read-only</text>
  <text x="144" y="272" text-anchor="middle" fill="#6359FF" font-size="10">higher quantity wins: 2 + 1 → 2</text>
  <rect x="288" y="20" width="256" height="264" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="416" y="46" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">UseAsNewActiveCustomerCart</text>
  <rect x="304" y="64" width="100" height="70" rx="10" fill="#6359FF" />
  <text x="354" y="84" text-anchor="middle" fill="#ffffff" font-size="11">guest cart</text>
  <text x="354" y="104" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">CARM-023 ×2</text>
  <rect x="428" y="64" width="100" height="70" rx="10" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="478" y="84" text-anchor="middle" fill="#191741" font-size="11">Ada's cart</text>
  <text x="478" y="104" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">CARM-023 ×1</text>
  <text x="478" y="120" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">LPC-011 ×1</text>
  <line x1="354" y1="134" x2="354" y2="180" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m53a)" />
  <rect x="304" y="182" width="100" height="70" rx="10" fill="#0BBFBF" />
  <text x="354" y="202" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">active</text>
  <text x="354" y="222" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">CARM-023 ×2</text>
  <text x="478" y="210" text-anchor="middle" fill="#6F6D8F" font-size="10">disassociated</text>
  <text x="478" y="226" text-anchor="middle" fill="#6F6D8F" font-size="9">not deleted</text>
  <text x="416" y="272" text-anchor="middle" fill="#6359FF" font-size="10">the guest basket is the intent</text>
</svg>
:::

## Concept · The merge rules are property-based

- A \`key\` conflict → **skipped**, stays on the anonymous cart.
- Match on product · variant · channels · custom · priceMode → **higher quantity** (2 + 1 = 2).
- No match → added. The anonymous cart ends \`Merged\` — your **audit trail**.

> **Show:** sign in with the seeded account: Ada's 1× CARM-023 + 1× LPC-011 ⊕ guest 2× CARM-023 → CARM-023 × 2, LPC-011 × 1; the bag shows "we combined your basket".

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="24" width="520" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="48" fill="#FFC806" font-size="13" font-weight="700">1</text>
  <text x="56" y="48" fill="#191741" font-size="12">same <tspan font-family="Roboto Mono, monospace">key</tspan>, different product</text>
  <text x="56" y="70" fill="#6F6D8F" font-size="11">→ skipped · stays on the anonymous cart (leftBehind)</text>
  <rect x="20" y="96" width="520" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="120" fill="#FFC806" font-size="13" font-weight="700">2</text>
  <text x="56" y="120" fill="#191741" font-size="12">match on product · variant · channels · custom · priceMode</text>
  <text x="56" y="142" fill="#6F6D8F" font-size="11">→ merged · the higher quantity is kept (merged)</text>
  <rect x="20" y="168" width="520" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="192" fill="#FFC806" font-size="13" font-weight="700">3</text>
  <text x="56" y="192" fill="#191741" font-size="12">no match</text>
  <text x="56" y="214" fill="#6F6D8F" font-size="11">→ added as a new line (added)</text>
  <rect x="20" y="244" width="520" height="40" rx="12" fill="#0BBFBF" />
  <text x="280" y="262" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">S4's bundle children and the recurring line merge only with identical twins</text>
  <text x="280" y="277" text-anchor="middle" fill="#0b3b3b" font-size="10">custom fields and priceMode are part of the match</text>
</svg>
:::

## Concept · Decisions you own

- **Strategy** — fixed, per-store, shopper-chosen? **Ineligible carts** — block with a reason, or silently fall back?
- **What the shopper is told** — a count, the diff, where left-behind lines go.
- **Built-in vs custom** — sign in *without* \`anonymousId\`, replay \`addLineItem\` under your rules.

> **Ask:** flip the mode live — which cart leaves \`Active\`, and where did its lines go?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="46" fill="#FFC806" font-size="12" font-weight="700">MERGE STRATEGY</text>
  <text x="36" y="70" fill="#191741" font-size="11">fixed · per-store · shopper-chosen</text>
  <text x="36" y="92" fill="#6F6D8F" font-size="10">reference: Merge for B2C,</text>
  <text x="36" y="108" fill="#6F6D8F" font-size="10">with a visible notice</text>
  <rect x="290" y="20" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="306" y="46" fill="#FFC806" font-size="12" font-weight="700">INELIGIBLE CARTS</text>
  <text x="306" y="70" fill="#191741" font-size="11">block + explain · silent fallback</text>
  <text x="306" y="92" fill="#6F6D8F" font-size="10">reference: 409 naming the reason</text>
  <text x="306" y="108" fill="#6F6D8F" font-size="10">and mergeMode=UseAsNew… as the way out</text>
  <rect x="20" y="160" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="186" fill="#FFC806" font-size="12" font-weight="700">WHAT THE SHOPPER IS TOLD</text>
  <text x="36" y="210" fill="#191741" font-size="11">nothing · a count · the full diff</text>
  <text x="36" y="232" fill="#6F6D8F" font-size="10">reference: { mode, mergedLines,</text>
  <text x="36" y="248" fill="#6F6D8F" font-size="10">addedLines, leftBehind[] }</text>
  <rect x="290" y="160" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="306" y="186" fill="#FFC806" font-size="12" font-weight="700">BUILT-IN vs CUSTOM</text>
  <text x="306" y="210" fill="#191741" font-size="11">platform modes · replay addLineItem</text>
  <text x="306" y="232" fill="#6F6D8F" font-size="10">reference: built-in, until a rule</text>
  <text x="306" y="248" fill="#6F6D8F" font-size="10">(sum quantities?) forces otherwise</text>
</svg>
:::
`,Om=`---
task: customer.Session 5.4
summary: Pre-built — study it: GET /api/account reads the signed-in customer by the session's id (customerGroup expanded) and PATCH /api/account composes setFirstName / setLastName / changeEmail with the customer's version — the S4 cart pattern on a second resource.
file: customer/…/application/CustomerService.java
method: profile() · updateProfile(String firstName, String lastName, String email)
prompt: |
  In bff-java, open CustomerService.profile() and updateProfile(...) in the customer module's application
  layer, and CustomerController.profile() / updateProfile() behind GET and PATCH /api/account.
  Explain to me, without changing code: where the customer id comes from (never the request), how withRetry
  owns the version and replays on a 409, which update actions the PATCH composes, and why changeEmail resets
  isEmailVerified. Ground anything you say about update actions on the commercetools Knowledge MCP.
  Then run Try It for task 5.4 in Commerce Canvas and tell me what the response shows — and which fields of
  the SDK Customer did NOT make it into the view.
---

## Concept · The customer is versioned, like the cart

- Read by the session's id, then \`CustomerUpdate { version, actions }\` — stale version → **409**.
- The service owns the version: fetch, apply, re-fetch and replay on 409.
- \`changeEmail\` resets \`isEmailVerified\` to \`false\` (5.8).

> **Docs:** [Customer update actions](https://docs.commercetools.com/api/projects/customers#update-actions)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m54a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="140" height="70" rx="12" fill="#6359FF" />
  <text x="90" y="68" text-anchor="middle" fill="#ffffff" font-size="13">1 · read</text>
  <text x="90" y="90" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">get(session.id) → v7</text>
  <line x1="160" y1="75" x2="208" y2="75" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m54a)" />
  <rect x="210" y="40" width="140" height="70" rx="12" fill="#6359FF" />
  <text x="280" y="68" text-anchor="middle" fill="#ffffff" font-size="13">2 · update</text>
  <text x="280" y="90" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">{ version: 7, actions }</text>
  <line x1="350" y1="75" x2="398" y2="75" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m54a)" />
  <rect x="400" y="40" width="140" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="470" y="68" text-anchor="middle" fill="#191741" font-size="13">commercetools</text>
  <text x="470" y="90" text-anchor="middle" fill="#0BBFBF" font-size="11">200 · v8</text>
  <path d="M470,110 L470,150 L90,150 L90,110" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#m54a)" />
  <text x="280" y="142" text-anchor="middle" fill="#FFC806" font-size="11">409 ConcurrentModification → re-read, replay (withRetry)</text>
  <rect x="20" y="180" width="250" height="100" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="204" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="1">ACTIONS THE PATCH COMPOSES</text>
  <text x="145" y="228" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">setFirstName · setLastName</text>
  <text x="145" y="250" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">changeEmail</text>
  <text x="145" y="270" text-anchor="middle" fill="#FFC806" font-size="10">changeEmail → isEmailVerified = false</text>
  <rect x="290" y="180" width="250" height="100" rx="12" fill="#0BBFBF" />
  <text x="415" y="204" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="1">SAME SHAPE AS S4</text>
  <text x="415" y="230" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">carts().withId(id).post(CartUpdate)</text>
  <text x="415" y="252" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">customers().withId(id).post(CustomerUpdate)</text>
  <text x="415" y="272" text-anchor="middle" fill="#0b3b3b" font-size="10">one update method serves 5.4 · 5.5 · 5.6</text>
</svg>
:::

## Concept · The general endpoint — and the narrowed view

- The BFF reads and writes what the browser never touches: \`customerGroup\`, \`customerNumber\`, \`externalId\`.
- The view it returns is **narrowed**: name, email, verified flag, addresses, group key.
- One \`update\` method serves name, email, addresses and group (5.5 / 5.6).

> **Show:** \`/account\` → Profile: edit the name, then the email — the verified badge drops.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m54b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="24" width="200" height="256" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="120" y="50" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">SDK CUSTOMER</text>
  <text x="40" y="80" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">id · version</text>
  <text x="40" y="100" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">email · firstName</text>
  <text x="40" y="120" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">isEmailVerified</text>
  <text x="40" y="140" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">addresses[] · defaults</text>
  <text x="40" y="160" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">customerGroup</text>
  <text x="40" y="186" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">customerNumber</text>
  <text x="40" y="206" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">externalId · custom</text>
  <text x="40" y="226" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">createdBy · stores</text>
  <text x="40" y="246" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">(no password field)</text>
  <line x1="220" y1="150" x2="300" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m54b)" />
  <text x="260" y="138" text-anchor="middle" fill="#6359FF" font-size="10">CustomerMapper</text>
  <rect x="305" y="70" width="235" height="160" rx="16" fill="#0BBFBF" />
  <text x="422" y="96" text-anchor="middle" fill="#0b3b3b" font-size="12" letter-spacing="2">CUSTOMER VIEW</text>
  <text x="325" y="126" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">firstName · lastName · email</text>
  <text x="325" y="148" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">emailVerified</text>
  <text x="325" y="170" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">addresses[] · defaults</text>
  <text x="325" y="192" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">customerGroupKey  "vip"</text>
  <text x="422" y="218" text-anchor="middle" fill="#0b3b3b" font-size="10">what the account page needs — nothing more</text>
  <text x="422" y="262" text-anchor="middle" fill="#FFC806" font-size="11">yellow = stays inside the BFF</text>
</svg>
:::
`,jm=`---
task: customer.Session 5.5
summary: POST a CustomerUpdate carrying the customer's current version + the list of update actions (address book, defaults — and, via the service, name / email / group), returning the raw SDK Customer.
file: customer/…/infrastructure/CtCustomerRepository.java
method: update(String customerId, Long version, List<CustomerUpdateAction> actions)
prompt: |
  In bff-java, implement CtCustomerRepository.update(customerId, version, actions) in the customer module's
  infrastructure layer.
  POST a CustomerUpdate built from the given version and actions to the customer by id, expanding
  customerGroup, and return the raw SDK Customer. The service composes the actions (addAddress +
  setDefaultShippingAddress by address KEY in one update, removeAddress, and the name / email / group
  actions) and owns the version + 409 retry — do not retry here.
  One call, no catch: a stale version must surface as the platform's 409.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 5.5 in Commerce Canvas with an address marked defaultShipping and tell me what
  the response shows.
---

## Concept · The address book is a list, not a resource

- Each \`Address\` gets a server **\`id\`** on add; give it a client **\`key\`** for a handle you own.
- \`addAddress\` + \`setDefaultShippingAddress\` **by key** — one update, one version.
- It is the same \`Address\` type the cart takes.

> **Docs:** [Add Address](https://docs.commercetools.com/api/projects/customers#add-address)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m55a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="24" width="240" height="256" rx="16" fill="#6359FF" />
  <text x="140" y="50" text-anchor="middle" fill="#ffffff" font-size="12" letter-spacing="2">ONE UPDATE · version 7</text>
  <rect x="36" y="66" width="208" height="96" rx="10" fill="#FFFFFF" />
  <text x="48" y="88" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">addAddress</text>
  <text x="48" y="108" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">key: "home"</text>
  <text x="48" y="126" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">country: "DE" · city: …</text>
  <text x="48" y="146" fill="#6F6D8F" font-size="9">id assigned by the platform on add</text>
  <rect x="36" y="172" width="208" height="54" rx="10" fill="#FFFFFF" />
  <text x="48" y="194" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">setDefaultShippingAddress</text>
  <text x="48" y="214" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">addressKey: "home"</text>
  <text x="140" y="256" text-anchor="middle" fill="#e6e6ff" font-size="10">the key exists before the id does</text>
  <line x1="260" y1="150" x2="300" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m55a)" />
  <rect x="305" y="24" width="235" height="256" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="422" y="50" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">CUSTOMER.addresses[]</text>
  <rect x="322" y="68" width="200" height="56" rx="10" fill="#0BBFBF" />
  <text x="334" y="88" fill="#191741" font-size="11" font-weight="700">★ home</text>
  <text x="334" y="108" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">id: 7Kx… · key: home · DE</text>
  <rect x="322" y="134" width="200" height="56" rx="10" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="334" y="154" fill="#191741" font-size="11">office</text>
  <text x="334" y="174" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">id: 2Pq… · key: office · DE</text>
  <text x="334" y="222" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">defaultShippingAddressId: 7Kx…</text>
  <text x="334" y="242" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">shippingAddressIds: [7Kx…, 2Pq…]</text>
  <text x="422" y="268" text-anchor="middle" fill="#6F6D8F" font-size="10">a list on the Customer — not a resource of its own</text>
</svg>
:::

## Concept · The default pre-fills the cart

- "Default shipping address" changes nothing in the cart — until the BFF copies it.
- After sign-in the storefront calls \`POST /api/cart/prefill\`: default address → \`setShippingAddress\` → shipping method and tax resolve.
- S6's checkout starts filled in.

> **Show:** \`/account\` → Addresses: add one, set it default; the checkout Delivery step is pre-filled.

> **Ask:** why does the address need a \`key\` to be made default in the same call?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m55b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="90" width="140" height="120" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="90" y="116" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="1">CUSTOMER</text>
  <text x="90" y="144" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">addresses[]</text>
  <text x="90" y="166" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700">★ default shipping</text>
  <text x="90" y="192" text-anchor="middle" fill="#6F6D8F" font-size="9">(S5 · 5.5)</text>
  <line x1="160" y1="150" x2="208" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m55b)" />
  <rect x="210" y="90" width="140" height="120" rx="14" fill="#6359FF" />
  <text x="280" y="116" text-anchor="middle" fill="#ffffff" font-size="11" letter-spacing="1">BFF</text>
  <text x="280" y="144" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">POST /api/cart/prefill</text>
  <text x="280" y="166" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">setShippingAddress</text>
  <text x="280" y="184" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">setShippingMethod</text>
  <text x="280" y="200" text-anchor="middle" fill="#c2c2ff" font-size="9">(the copy is explicit — yours)</text>
  <line x1="350" y1="150" x2="398" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m55b)" />
  <rect x="400" y="90" width="140" height="120" rx="14" fill="#0BBFBF" />
  <text x="470" y="116" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="1">CART (S4)</text>
  <text x="470" y="144" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">shippingAddress</text>
  <text x="470" y="166" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">shippingInfo</text>
  <text x="470" y="188" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">taxedPrice</text>
  <text x="280" y="250" text-anchor="middle" fill="#6359FF" font-size="11">same Address type on both sides · S6 checkout opens with the Delivery step done</text>
</svg>
:::
`,Nm=`---
task: customer.Session 5.6
summary: Return the price-selection tuple the catalogue applies for THIS shopper — the currency / country / channel from the request plus the customer group from the session (resolve its KEY via customers.get for display); a guest resolves to NO group — never a default one.
file: customer/…/application/SessionService.java
method: priceContext(String currency, String country, String channel)
prompt: |
  In bff-java, implement SessionService.priceContext(currency, country, channel) in the customer module's
  application layer.
  Build the PriceContext from the request's currency, country and channel plus the session's customer group:
  session.customerGroupIdOrNull() is the id the catalogue's PriceSelection applies; resolve its key for
  display with CustomerMapper.customerGroupKey(customers.get(session.requireCustomerId())) only when the
  shopper is signed in. A guest resolves to NO group — never a default one.
  The group is an id at the repository boundary (price selection takes priceCustomerGroup as an id); the key
  is for humans.
  Before coding, propose how you will decide what a guest resolves to and how the storefront learns that
  prices changed after login, and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 5.6 in Commerce Canvas before and after PUT /api/account/group
  {"customerGroupKey":"vip"} and tell me what each response shows.
---

## Concept · Your group is a price scope

- A \`Price\` may carry \`customerGroup\`; selection prefers it over the ungrouped price.
- S2 left this rung open ("after login"); the session now supplies it.
- The cart re-priced on sign-in for the same reason.

> **Docs:** [Price selection](https://docs.commercetools.com/api/projects/products#price-selection) · [Customer Groups](https://docs.commercetools.com/api/projects/customerGroups)

> **Show:** \`/account\` → Your tier; the charlie-armchair PDP flips €424.15 → €339.15 with a \`vip\` badge.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m56a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <text x="150" y="40" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">PRICE SELECTION (S2 → S5)</text>
  <rect x="40" y="60" width="220" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="150" y="85" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">priceCurrency = EUR</text>
  <rect x="40" y="110" width="220" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="150" y="135" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">priceCountry = DE</text>
  <rect x="40" y="160" width="220" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="150" y="185" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">priceChannel = retail-de</text>
  <rect x="40" y="210" width="220" height="40" rx="10" fill="#0BBFBF" />
  <text x="150" y="235" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">priceCustomerGroup = ‹id›</text>
  <text x="150" y="270" text-anchor="middle" fill="#0BBFBF" font-size="11">lit for the first time — from the session</text>
  <line x1="270" y1="150" x2="318" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m56a)" />
  <rect x="320" y="56" width="220" height="100" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="430" y="80" text-anchor="middle" fill="#6F6D8F" font-size="11">charlie-armchair · guest</text>
  <text x="430" y="112" text-anchor="middle" fill="#191741" font-size="20" font-weight="700">€424.15</text>
  <text x="430" y="138" text-anchor="middle" fill="#6F6D8F" font-size="10">€499 list − 15 % product discount</text>
  <rect x="320" y="170" width="220" height="100" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="430" y="194" text-anchor="middle" fill="#0BBFBF" font-size="11">charlie-armchair · vip</text>
  <text x="430" y="226" text-anchor="middle" fill="#191741" font-size="20" font-weight="700">€339.15</text>
  <text x="430" y="252" text-anchor="middle" fill="#6F6D8F" font-size="10">€399 group price − the same 15 %</text>
  <rect x="488" y="178" width="40" height="18" rx="9" fill="#FFC806" />
  <text x="508" y="191" text-anchor="middle" fill="#191741" font-size="10" font-weight="700">vip</text>
</svg>
:::

## Concept · Decisions you own

- **Guest = no group** — the ungrouped price *is* the guest price.
- **Who sets it** — never the storefront; a pricing lever (BFF, admin, rule).
- **Prices are per-shopper now** — a store + currency cache serves VIP prices to guests.

> **Ask:** sign in and nothing changes — why? Then: what else did you just make per-shopper?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m56b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <text x="140" y="34" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700" letter-spacing="1">THE CACHE BUG</text>
  <rect x="20" y="50" width="240" height="44" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="140" y="70" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">key = store + currency</text>
  <text x="140" y="86" text-anchor="middle" fill="#6F6D8F" font-size="10">one cached PLP for everyone</text>
  <rect x="20" y="120" width="100" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="70" y="145" text-anchor="middle" fill="#191741" font-size="11">vip · €339</text>
  <rect x="160" y="120" width="100" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="210" y="145" text-anchor="middle" fill="#191741" font-size="11">guest · €339 ✗</text>
  <line x1="120" y1="94" x2="70" y2="118" stroke="#FFC806" stroke-width="2" marker-end="url(#m56b)" />
  <line x1="160" y1="94" x2="210" y2="118" stroke="#FFC806" stroke-width="2" marker-end="url(#m56b)" />
  <text x="140" y="190" text-anchor="middle" fill="#6359FF" font-size="10">a VIP's response is served to a guest</text>
  <text x="420" y="34" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700" letter-spacing="1">THE FIX</text>
  <rect x="300" y="50" width="240" height="44" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="420" y="70" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">key = store + currency + group</text>
  <text x="420" y="86" text-anchor="middle" fill="#6F6D8F" font-size="10">guest = no group → its own entry</text>
  <rect x="300" y="120" width="100" height="40" rx="10" fill="#0BBFBF" />
  <text x="350" y="145" text-anchor="middle" fill="#191741" font-size="11">vip · €339</text>
  <rect x="440" y="120" width="100" height="40" rx="10" fill="#0BBFBF" />
  <text x="490" y="145" text-anchor="middle" fill="#191741" font-size="11">guest · €424</text>
  <line x1="400" y1="94" x2="350" y2="118" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m56b)" />
  <line x1="440" y1="94" x2="490" y2="118" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m56b)" />
  <rect x="20" y="214" width="520" height="66" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="238" text-anchor="middle" fill="#191741" font-size="11">who sets the group: PUT /api/account/group is a trainer / admin lever here —</text>
  <text x="280" y="256" text-anchor="middle" fill="#191741" font-size="11">in production the BFF, an admin, or a rule; never the storefront.</text>
  <text x="280" y="272" text-anchor="middle" fill="#6F6D8F" font-size="10">how the storefront learns: re-fetch after sign-in, or a "prices changed" flag on the sign-in response</text>
</svg>
:::
`,Lm=`---
task: customer.Session 5.7
summary: POST /customers/password (CustomerChangePassword — id + version + currentPassword + newPassword), POST /customers/password-token (CustomerCreatePasswordResetToken — email + ttlMinutes, invalidateOlderTokens = true) and POST /customers/password/reset (CustomerResetPassword — tokenValue + newPassword), each returning the raw SDK type.
file: customer/…/infrastructure/CtCustomerRepository.java
method: changePassword(…) · createPasswordResetToken(…) · resetPassword(…)
prompt: |
  In bff-java, implement the three password calls of CtCustomerRepository in the customer module's
  infrastructure layer: changePassword(customerId, version, currentPassword, newPassword),
  createPasswordResetToken(email, ttlMinutes) and resetPassword(tokenValue, newPassword).
  changePassword POSTs a CustomerChangePassword (id + version + both passwords) and returns the raw Customer;
  createPasswordResetToken POSTs a CustomerCreatePasswordResetToken (email + ttlMinutes, invalidateOlderTokens
  true) and returns the raw CustomerToken; resetPassword POSTs a CustomerResetPassword (tokenValue +
  newPassword) and returns the raw Customer — no version, no session: the token is the proof.
  Do not catch the 404 for an unknown email: the service already answers identically either way.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 5.7 in Commerce Canvas — request a reset token for ada@lhc.test, then reset with
  it — and tell me what each response shows.
---

## Concept · Create the token. Email it. Never return it.

- A \`CustomerToken\` is short-lived (\`ttlMinutes\`), single-purpose, and a **secret in transit**.
- In production the value goes into an email — never into the HTTP response.
- \`invalidateOlderTokens\`: a second request kills the previous link.

> **Discuss:** this course has no mail service, so the BFF returns the token with a note. Say that out loud every time.

> **Docs:** [Customer password reset](https://docs.commercetools.com/api/customers-overview#customer-password-reset)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m57a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="130" height="64" rx="12" fill="#6359FF" />
  <text x="85" y="66" text-anchor="middle" fill="#ffffff" font-size="12">1 · BFF</text>
  <text x="85" y="86" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">POST …/password-token</text>
  <line x1="150" y1="72" x2="198" y2="72" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m57a)" />
  <rect x="200" y="40" width="130" height="64" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="265" y="66" text-anchor="middle" fill="#191741" font-size="12">CustomerToken</text>
  <text x="265" y="86" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">value · expiresAt</text>
  <line x1="330" y1="72" x2="378" y2="72" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m57a)" />
  <rect x="380" y="40" width="160" height="64" rx="12" fill="#0BBFBF" />
  <text x="460" y="66" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">2 · ✉ email the link</text>
  <text x="460" y="86" text-anchor="middle" fill="#0b3b3b" font-size="10">the only place the value goes</text>
  <path d="M460,104 L460,150 L85,150 L85,196" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m57a)" />
  <text x="272" y="142" text-anchor="middle" fill="#6359FF" font-size="10">the shopper clicks the link</text>
  <rect x="20" y="200" width="130" height="64" rx="12" fill="#6359FF" />
  <text x="85" y="226" text-anchor="middle" fill="#ffffff" font-size="12">3 · BFF</text>
  <text x="85" y="246" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">POST …/password/reset</text>
  <line x1="150" y1="232" x2="198" y2="232" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m57a)" />
  <rect x="200" y="200" width="130" height="64" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="265" y="226" text-anchor="middle" fill="#191741" font-size="12">tokenValue</text>
  <text x="265" y="246" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">+ newPassword</text>
  <rect x="380" y="180" width="160" height="100" rx="12" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" />
  <text x="460" y="214" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700">Browser</text>
  <text x="460" y="236" text-anchor="middle" fill="#FFC806" font-size="10">never receives the token</text>
  <text x="460" y="254" text-anchor="middle" fill="#6F6D8F" font-size="9">(demo only: shown with a note)</text>
</svg>
:::

## Concept · Change needs presence; reset needs the token

- **Change**: current password **and** version — the shopper is here, signed in.
- **Reset**: token + new password — no session, no version.
- Both invalidate every other token for the customer (eventually consistent).

> **Show:** \`/account\` → Password; \`/forgot-password\` with its "demo: token shown here, would be emailed" label.

> **Ask:** why must the reset-token endpoint answer identically whether or not the email exists?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="24" width="250" height="256" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="52" text-anchor="middle" fill="#6359FF" font-size="12" font-weight="700" letter-spacing="1">CHANGE</text>
  <text x="145" y="74" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">POST /customers/password</text>
  <rect x="40" y="92" width="210" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" /><text x="145" y="112" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">id (from the session)</text>
  <rect x="40" y="130" width="210" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" /><text x="145" y="150" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">version</text>
  <rect x="40" y="168" width="210" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" /><text x="145" y="188" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">currentPassword</text>
  <rect x="40" y="206" width="210" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" /><text x="145" y="226" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">newPassword</text>
  <text x="145" y="262" text-anchor="middle" fill="#6359FF" font-size="10">proof = presence + the old secret</text>
  <rect x="290" y="24" width="250" height="256" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="415" y="52" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700" letter-spacing="1">RESET</text>
  <text x="415" y="74" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">POST /customers/password/reset</text>
  <rect x="310" y="92" width="210" height="30" rx="8" fill="#0BBFBF" /><text x="415" y="112" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">tokenValue</text>
  <rect x="310" y="130" width="210" height="30" rx="8" fill="#F1EFFA" stroke="#C9C6E0" /><text x="415" y="150" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">newPassword</text>
  <text x="415" y="192" text-anchor="middle" fill="#6F6D8F" font-size="11">no id · no version · no session</text>
  <text x="415" y="262" text-anchor="middle" fill="#6359FF" font-size="10">proof = the token itself</text>
  <rect x="340" y="206" width="150" height="34" rx="8" fill="#FFC806" />
  <text x="415" y="227" text-anchor="middle" fill="#191741" font-size="10" font-weight="700">unknown email → same answer</text>
</svg>
:::
`,_m=`---
task: customer.Session 5.8
summary: Pre-built — study it: POST /customers/email-token (id + version + ttlMinutes) issues a CustomerToken and POST /customers/email/confirm with its value sets isEmailVerified = true — the 5.7 two-step token shape again.
file: customer/…/infrastructure/CtCustomerRepository.java
method: createEmailToken(String customerId, Long version, long ttlMinutes) · confirmEmail(String tokenValue)
prompt: |
  In bff-java, open CtCustomerRepository.createEmailToken(...) and confirmEmail(...) in the customer module's
  infrastructure layer, and CustomerService.requestEmailVerification() / confirmEmail(...) behind
  POST /api/customers/email/token and POST /api/customers/email/confirm.
  Explain to me, without changing code: how this mirrors 5.7's token shape, why this token needs the
  customer's id + version while the reset token needed only an email, and what isEmailVerified does and
  does not gate. Ground anything you say about the token endpoints on the commercetools Knowledge MCP.
  Then run Try It for task 5.8 in Commerce Canvas — issue a token, confirm with it — and tell me what the
  response shows.
---

## Concept · A business flag, not an auth gate

- Token (id + version + \`ttlMinutes\`) → confirm → \`isEmailVerified: true\`.
- commercetools signs in unverified customers happily; **you** decide what verification gates.
- \`changeEmail\` (5.4) flips it back to \`false\`.

> **Discuss:** what should verification gate at LHC — reviews, promo codes, marketing consent, the order confirmation?

> **Docs:** [Customer email verification](https://docs.commercetools.com/api/customers-overview#customer-email-verification)

> **Show:** \`/account\` → Verify email: a token is issued ("would be e-mailed") → confirm → the verified badge.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m58a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="50" width="140" height="70" rx="12" fill="#6359FF" />
  <text x="90" y="78" text-anchor="middle" fill="#ffffff" font-size="12">email-token</text>
  <text x="90" y="98" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">id · version · ttlMinutes</text>
  <line x1="160" y1="85" x2="208" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m58a)" />
  <rect x="210" y="50" width="140" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="78" text-anchor="middle" fill="#191741" font-size="12">✉ CustomerToken</text>
  <text x="280" y="98" text-anchor="middle" fill="#FFC806" font-size="10">emailed in production</text>
  <line x1="350" y1="85" x2="398" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m58a)" />
  <rect x="400" y="50" width="140" height="70" rx="12" fill="#0BBFBF" />
  <text x="470" y="78" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">email/confirm</text>
  <text x="470" y="98" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">isEmailVerified = true</text>
  <rect x="20" y="150" width="250" height="130" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="176" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="1">THE PLATFORM</text>
  <text x="145" y="204" text-anchor="middle" fill="#191741" font-size="11">signs in unverified customers</text>
  <text x="145" y="226" text-anchor="middle" fill="#191741" font-size="11">lets them order</text>
  <text x="145" y="254" text-anchor="middle" fill="#FFC806" font-size="10">changeEmail → false again</text>
  <rect x="290" y="150" width="250" height="130" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="415" y="176" text-anchor="middle" fill="#0BBFBF" font-size="11" letter-spacing="1">YOUR POLICY — what it gates</text>
  <text x="415" y="204" text-anchor="middle" fill="#191741" font-size="11">reviews · promo codes</text>
  <text x="415" y="226" text-anchor="middle" fill="#191741" font-size="11">marketing consent · order confirmation</text>
  <text x="415" y="254" text-anchor="middle" fill="#6F6D8F" font-size="10">today: nothing — the flag just shows</text>
</svg>
:::
`,Um=`---
task: customer.Session 5.9
summary: Project the BFF-held ShopperSession into what the browser may know — signedIn, a first name, the customer-group KEY — and NOTHING more; identity comes from the session, never from a request parameter.
file: customer/…/application/SessionService.java
method: current()
prompt: |
  In bff-java, implement SessionService.current() in the customer module's application layer.
  Return ShopperContext.guest() when the session is not signed in; otherwise read
  customers.get(session.requireCustomerId()) and project exactly signedIn, firstName and the customer-group
  key (CustomerMapper.customerGroupKey) — no ids, no email, nothing more. Then walk every /api/account and
  /api/cart handler: identity must come from session.requireCustomerId(); a customerId request parameter is
  the smell to delete.
  The browser holds one opaque HttpOnly lhc_session cookie and never a commercetools token; the BFF checks
  "only yours" on every call with its least-privilege client-credentials token.
  Before coding, propose how you will decide where the session lives (HttpOnly cookie vs a token in
  JavaScript) and which minimum scopes the BFF's runtime client needs, and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 5.9 in Commerce Canvas as a guest and again after signing in, and tell me what
  each response shows — and what it deliberately does not.
---

## Concept · Where is identity stored — and who checks it?

- Browser → opaque **\`lhc_session\`** cookie → BFF **\`ShopperSession\`** → least-privilege **client-credentials** token → general endpoints.
- The platform doesn't know who is calling; **the BFF does** — \`session.requireCustomerId()\` everywhere.
- \`?customerId=\` in a request is the bug to find.

> **Docs:** [Authorization](https://docs.commercetools.com/api/authorization) · [Scopes](https://docs.commercetools.com/api/scopes)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m59a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="70" width="96" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="64" y="100" text-anchor="middle" fill="#191741" font-size="12">Browser</text>
  <text x="64" y="120" text-anchor="middle" fill="#6F6D8F" font-size="9">holds no token</text>
  <line x1="112" y1="110" x2="148" y2="110" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m59a)" />
  <rect x="150" y="70" width="96" height="80" rx="12" fill="#6359FF" />
  <text x="198" y="96" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Roboto Mono, monospace">lhc_session</text>
  <text x="198" y="114" text-anchor="middle" fill="#e6e6ff" font-size="9">HttpOnly · SameSite</text>
  <text x="198" y="130" text-anchor="middle" fill="#e6e6ff" font-size="9">an opaque id, nothing else</text>
  <line x1="246" y1="110" x2="282" y2="110" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m59a)" />
  <rect x="284" y="56" width="120" height="108" rx="12" fill="#0BBFBF" />
  <text x="344" y="80" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">ShopperSession</text>
  <text x="344" y="100" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">anonymousId · cartId</text>
  <text x="344" y="116" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">customerId · groupId</text>
  <text x="344" y="140" text-anchor="middle" fill="#0b3b3b" font-size="9">server-side · the BFF checks</text>
  <text x="344" y="154" text-anchor="middle" fill="#0b3b3b" font-size="9">"only yours" on every call</text>
  <line x1="404" y1="110" x2="440" y2="110" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m59a)" />
  <rect x="442" y="70" width="102" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="493" y="94" text-anchor="middle" fill="#191741" font-size="11">commercetools</text>
  <text x="493" y="112" text-anchor="middle" fill="#6F6D8F" font-size="9">/customers · /login · /carts</text>
  <text x="493" y="128" text-anchor="middle" fill="#6F6D8F" font-size="9">client-credentials token</text>
  <text x="493" y="142" text-anchor="middle" fill="#FFC806" font-size="9">minimum scopes</text>
  <rect x="150" y="196" width="254" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="277" y="221" text-anchor="middle" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">session.requireCustomerId()</text>
  <text x="277" y="252" text-anchor="middle" fill="#6F6D8F" font-size="10">in every account handler</text>
  <rect x="420" y="196" width="124" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="482" y="221" text-anchor="middle" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">?customerId=…</text>
  <line x1="428" y1="236" x2="536" y2="196" stroke="#FFC806" stroke-width="3" />
  <text x="482" y="252" text-anchor="middle" fill="#FFC806" font-size="10">the smell — delete it</text>
  <text x="280" y="284" text-anchor="middle" fill="#6359FF" font-size="10">the platform does not know who is calling — the BFF does; that is what lets it enforce rules</text>
</svg>
:::

## Concept · PII: what crosses the boundary

- Header: \`signedIn\` + first name. Account page: name, email, verified flag, addresses, group key.
- \`customerNumber\`, \`externalId\`, \`custom\`, internal ids, emails in logs — **never leave the BFF**.
- Deletion is a right: orders keep their snapshot, nothing cascades — delete or anonymise?

> **Discuss:** Ada asks to be forgotten and has three orders — what do you delete, and what must you keep?

> **Docs:** [Delete Customer](https://docs.commercetools.com/api/projects/customers#delete-customer)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <line x1="280" y1="20" x2="280" y2="280" stroke="#FFC806" stroke-width="2" stroke-dasharray="8 5" />
  <text x="280" y="14" text-anchor="middle" fill="#FFC806" font-size="10" letter-spacing="2">THE BOUNDARY</text>
  <text x="140" y="44" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700" letter-spacing="1">CROSSES — per surface</text>
  <rect x="20" y="58" width="240" height="60" rx="10" fill="#0BBFBF" />
  <text x="32" y="78" fill="#191741" font-size="11" font-weight="700">header</text>
  <text x="32" y="98" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">signedIn · firstName · groupKey</text>
  <rect x="20" y="128" width="240" height="78" rx="10" fill="#0BBFBF" />
  <text x="32" y="148" fill="#191741" font-size="11" font-weight="700">account page</text>
  <text x="32" y="168" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">name · email · emailVerified</text>
  <text x="32" y="186" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">addresses[] · defaults · groupKey</text>
  <rect x="20" y="216" width="240" height="64" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="32" y="236" fill="#0BBFBF" font-size="11" font-weight="700">order history (S6)</text>
  <text x="32" y="256" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">orderNumber · total · states</text>
  <text x="32" y="272" fill="#6F6D8F" font-size="9">the customer snapshot stays on the order</text>
  <text x="420" y="44" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700" letter-spacing="1">NEVER LEAVES THE BFF</text>
  <rect x="300" y="58" width="240" height="100" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="312" y="80" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">customerNumber · externalId</text>
  <text x="312" y="100" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">custom · createdBy · internal ids</text>
  <text x="312" y="120" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">the merge preflight by email</text>
  <text x="312" y="146" fill="#FFC806" font-size="10">emails in logs — log the id or a correlation id</text>
  <rect x="300" y="170" width="240" height="110" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="420" y="192" text-anchor="middle" fill="#6F6D8F" font-size="10" letter-spacing="1">DELETION AS A RIGHT</text>
  <text x="312" y="214" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">DELETE /customers/{id}?version=…</text>
  <text x="312" y="234" fill="#6359FF" font-size="10">orders keep customerId + customerEmail</text>
  <text x="312" y="252" fill="#6359FF" font-size="10">nothing cascades → delete, or anonymise</text>
  <text x="312" y="270" fill="#6F6D8F" font-size="9">(tombstone email · blank name · drop addresses)</text>
</svg>
:::

## Concept · Decisions you own

- **Where the session lives** — HttpOnly cookie (mind CSRF) vs a JavaScript token (mind XSS).
- **Anon → auth** — cart and wishlist follow at sign-in; sign-out mints a fresh \`anonymousId\`.
- **Minimum scopes** — one client per BFF; a leak exposes exactly its scope list.

> **Show:** the header account menu — who am I, from the BFF session; sign out → guest again.

> **Ask:** why can the BFF set a customer group, and what goes wrong if the storefront sent \`customerId\` with each request?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="24" width="166" height="256" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="103" y="50" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">WHERE IT LIVES</text>
  <rect x="34" y="66" width="138" height="60" rx="8" fill="#0BBFBF" />
  <text x="103" y="88" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">HttpOnly cookie</text>
  <text x="103" y="106" text-anchor="middle" fill="#191741" font-size="9">JS can't read it · mind CSRF</text>
  <rect x="34" y="136" width="138" height="60" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="103" y="158" text-anchor="middle" fill="#191741" font-size="11">token in JS</text>
  <text x="103" y="176" text-anchor="middle" fill="#6359FF" font-size="9">any XSS reads it</text>
  <text x="103" y="236" text-anchor="middle" fill="#6F6D8F" font-size="9">reference: cookie,</text>
  <text x="103" y="250" text-anchor="middle" fill="#6F6D8F" font-size="9">SameSite=Lax</text>
  <rect x="197" y="24" width="166" height="256" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="50" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">ANON → AUTH</text>
  <text x="280" y="80" text-anchor="middle" fill="#191741" font-size="10">sign-in: anonymousId hands over</text>
  <text x="280" y="96" text-anchor="middle" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">cart · wishlist · orders</text>
  <text x="280" y="130" text-anchor="middle" fill="#191741" font-size="10">sign-in rotates the session id</text>
  <text x="280" y="146" text-anchor="middle" fill="#6F6D8F" font-size="9">(session-fixation defence)</text>
  <text x="280" y="180" text-anchor="middle" fill="#191741" font-size="10">sign-out invalidates it</text>
  <text x="280" y="196" text-anchor="middle" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">fresh anonymousId</text>
  <text x="280" y="236" text-anchor="middle" fill="#6F6D8F" font-size="9">token expiry (172 800 s) is the</text>
  <text x="280" y="250" text-anchor="middle" fill="#6F6D8F" font-size="9">BFF's concern — invisible to the browser</text>
  <rect x="374" y="24" width="166" height="256" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="457" y="50" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">MINIMUM SCOPES</text>
  <text x="457" y="80" text-anchor="middle" fill="#191741" font-size="10">one API client per BFF</text>
  <rect x="388" y="96" width="138" height="88" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="457" y="116" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">view_published_products</text>
  <text x="457" y="134" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">manage_customers</text>
  <text x="457" y="152" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">manage_orders</text>
  <text x="457" y="170" text-anchor="middle" fill="#6F6D8F" font-size="9">… only what this BFF calls</text>
  <text x="457" y="222" text-anchor="middle" fill="#191741" font-size="10">a leaked token exposes</text>
  <text x="457" y="238" text-anchor="middle" fill="#191741" font-size="10">exactly this list</text>
  <text x="457" y="262" text-anchor="middle" fill="#6F6D8F" font-size="9">nothing less, nothing more</text>
</svg>
:::
`,Hm=`---
task: order.Session 6.1
summary: POST a Checkout Session on the SESSION host (not the API host) under a bearer token carrying manage_sessions — { cart: { cartRef: { id } }, metadata: { applicationKey, futureOrderNumber } } — and return the raw session (id, expiryAt, state).
file: order/…/infrastructure/CtCheckoutSessionRepository.java
method: create(String cartId, String applicationKey, String futureOrderNumber)
prompt: |
  In bff-java, implement CtCheckoutSessionRepository.create(cartId, applicationKey, futureOrderNumber) in
  the order module's infrastructure layer.
  POST to the Checkout Sessions endpoint (sessionsEndpoint — the session.{region} host, not the API host) a
  JSON body { cart: { cartRef: { id: cartId } }, metadata: { applicationKey, futureOrderNumber } } with
  Authorization: Bearer tokens.bearer() (a token carrying manage_sessions), and map the response into the
  CheckoutSession record (id, expiryAt, state). A 401 / 403 means the API client lacks manage_sessions —
  say so in the error.
  The session is created server-side and late: the service has already checked that the cart is the
  shopper's and that it is ready.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess the endpoint or the body.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 6.1 in Commerce Canvas (an address and a signed-in shopper on the cart) and tell
  me what the response shows.
---

## Concept · Where does checkout live?

- **Build-your-own** — you own the PSP, ledger writes, \`POST /orders\`, PCI.
- **\`paymentFlow\` — Payment Only, today** — the BFF owns everything before and after the widget; Checkout owns the payment and the order's creation.
- **\`checkoutFlow\`** — Checkout also owns addresses, shipping, the success page.

> **Discuss:** who creates the order owns idempotency; who touches the card owns PCI. Choose those two first.

> **Docs:** [Checkout overview — Complete Checkout and Payment Only](https://docs.commercetools.com/checkout/overview)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="20" width="166" height="264" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="99" y="46" text-anchor="middle" fill="#6F6D8F" font-size="11" font-weight="700">BUILD-YOUR-OWN</text>
  <rect x="28" y="60" width="142" height="200" rx="8" fill="#6359FF" />
  <text x="99" y="84" text-anchor="middle" fill="#ffffff" font-size="10">addresses · shipping</text>
  <text x="99" y="104" text-anchor="middle" fill="#ffffff" font-size="10">order number</text>
  <text x="99" y="124" text-anchor="middle" fill="#ffffff" font-size="10">payment UI · PSP</text>
  <text x="99" y="144" text-anchor="middle" fill="#ffffff" font-size="10">ledger writes</text>
  <text x="99" y="164" text-anchor="middle" fill="#ffffff" font-size="10">POST /orders</text>
  <text x="99" y="184" text-anchor="middle" fill="#ffffff" font-size="10">redirects · webhooks</text>
  <text x="99" y="204" text-anchor="middle" fill="#ffffff" font-size="10">capture · states · history</text>
  <text x="99" y="240" text-anchor="middle" fill="#FFC806" font-size="10" font-weight="700">PCI + PSP burden: yours</text>
  <text x="99" y="276" text-anchor="middle" fill="#6F6D8F" font-size="9">BFF owns all of it</text>
  <rect x="197" y="20" width="166" height="264" rx="14" fill="#FFFFFF" stroke="#C9C6E0" stroke-width="2" />
  <text x="280" y="46" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700">paymentFlow · TODAY</text>
  <rect x="209" y="60" width="142" height="60" rx="8" fill="#6359FF" />
  <text x="280" y="80" text-anchor="middle" fill="#ffffff" font-size="10">addresses · shipping</text>
  <text x="280" y="98" text-anchor="middle" fill="#ffffff" font-size="10">readiness · order number</text>
  <text x="280" y="114" text-anchor="middle" fill="#e6e6ff" font-size="8">BEFORE the widget</text>
  <rect x="209" y="126" width="142" height="68" rx="8" fill="#0BBFBF" />
  <text x="280" y="146" text-anchor="middle" fill="#191741" font-size="10" font-weight="700">payment UI · PSP</text>
  <text x="280" y="162" text-anchor="middle" fill="#191741" font-size="10" font-weight="700">ledger · creates the Order</text>
  <text x="280" y="182" text-anchor="middle" fill="#0b3b3b" font-size="8">CHECKOUT — the widget</text>
  <rect x="209" y="200" width="142" height="60" rx="8" fill="#6359FF" />
  <text x="280" y="220" text-anchor="middle" fill="#ffffff" font-size="10">capture · states</text>
  <text x="280" y="238" text-anchor="middle" fill="#ffffff" font-size="10">history · subscription</text>
  <text x="280" y="254" text-anchor="middle" fill="#e6e6ff" font-size="8">AFTER the order</text>
  <text x="280" y="276" text-anchor="middle" fill="#0BBFBF" font-size="9">violet = BFF · teal = Checkout</text>
  <rect x="378" y="20" width="166" height="264" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="461" y="46" text-anchor="middle" fill="#6F6D8F" font-size="11" font-weight="700">checkoutFlow</text>
  <rect x="390" y="60" width="142" height="134" rx="8" fill="#0BBFBF" />
  <text x="461" y="82" text-anchor="middle" fill="#191741" font-size="10">addresses · shipping</text>
  <text x="461" y="102" text-anchor="middle" fill="#191741" font-size="10">discount codes</text>
  <text x="461" y="122" text-anchor="middle" fill="#191741" font-size="10">payment UI · PSP · ledger</text>
  <text x="461" y="142" text-anchor="middle" fill="#191741" font-size="10">creates the Order</text>
  <text x="461" y="162" text-anchor="middle" fill="#191741" font-size="10">the success page</text>
  <text x="461" y="182" text-anchor="middle" fill="#0b3b3b" font-size="8">CHECKOUT — complete</text>
  <rect x="390" y="200" width="142" height="60" rx="8" fill="#6359FF" />
  <text x="461" y="220" text-anchor="middle" fill="#ffffff" font-size="10">capture · states</text>
  <text x="461" y="238" text-anchor="middle" fill="#ffffff" font-size="10">history · subscription</text>
  <text x="461" y="276" text-anchor="middle" fill="#6F6D8F" font-size="9">ships in a day · your UX is config</text>
</svg>
:::

## Concept · Checkout pays. You decide everything else.

- **Application** (\`demo-commercetools-checkout-taxes\`) · **Connector** (Sample payment — the PSP glue) · **Browser SDK** (\`paymentFlow\`) · **Sessions API** (your one call).
- Checkout writes: Payment, \`Authorization\` Transaction, **the Order**, \`paymentState\`.
- You own: order number, readiness, \`orderState\`, capture / cancel / refund, history, subscription.

> **Ask:** never \`POST /orders\` for a Checkout cart — why not?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m61b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="20" width="124" height="74" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="78" y="44" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700">Application</text>
  <text x="78" y="62" text-anchor="middle" fill="#6F6D8F" font-size="8" font-family="Roboto Mono, monospace">demo-commercetools-</text>
  <text x="78" y="74" text-anchor="middle" fill="#6F6D8F" font-size="8" font-family="Roboto Mono, monospace">checkout-taxes</text>
  <text x="78" y="88" text-anchor="middle" fill="#191741" font-size="9">Payment Only · countries · origins</text>
  <rect x="156" y="20" width="124" height="74" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="218" y="44" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700">Connector</text>
  <text x="218" y="64" text-anchor="middle" fill="#191741" font-size="9">Sample payment connector</text>
  <text x="218" y="82" text-anchor="middle" fill="#6F6D8F" font-size="9">the PSP glue (Connect)</text>
  <rect x="296" y="20" width="124" height="74" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="358" y="44" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700">Browser SDK</text>
  <text x="358" y="64" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">paymentFlow(…)</text>
  <text x="358" y="82" text-anchor="middle" fill="#6F6D8F" font-size="9">the widget in the storefront</text>
  <rect x="436" y="20" width="108" height="74" rx="12" fill="#6359FF" />
  <text x="490" y="44" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">Sessions API</text>
  <text x="490" y="64" text-anchor="middle" fill="#e6e6ff" font-size="9">POST …/sessions</text>
  <text x="490" y="82" text-anchor="middle" fill="#e6e6ff" font-size="9">the BFF's one call (6.1)</text>
  <rect x="16" y="120" width="256" height="164" rx="14" fill="#0BBFBF" />
  <text x="144" y="144" text-anchor="middle" fill="#0b3b3b" font-size="11" letter-spacing="2">CHECKOUT WRITES</text>
  <text x="144" y="172" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">Payment · amountPlanned</text>
  <text x="144" y="194" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">Transaction: Authorization</text>
  <text x="144" y="216" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">the Order</text>
  <text x="144" y="238" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">paymentState: Paid</text>
  <text x="144" y="266" text-anchor="middle" fill="#0b3b3b" font-size="9">automated reversal when order creation fails</text>
  <rect x="288" y="120" width="256" height="164" rx="14" fill="#6359FF" />
  <text x="416" y="144" text-anchor="middle" fill="#e6e6ff" font-size="11" letter-spacing="2">YOU OWN</text>
  <text x="416" y="170" text-anchor="middle" fill="#ffffff" font-size="11">the order number · readiness (6.2 / 6.5)</text>
  <text x="416" y="192" text-anchor="middle" fill="#ffffff" font-size="11">orderState + the state machine (6.7)</text>
  <text x="416" y="214" text-anchor="middle" fill="#ffffff" font-size="11">capture · cancel · refund (6.6)</text>
  <text x="416" y="236" text-anchor="middle" fill="#ffffff" font-size="11">history · the subscription (6.8 / 6.9)</text>
  <text x="416" y="266" text-anchor="middle" fill="#e6e6ff" font-size="9">reading the raw ledger — know what was written for you</text>
</svg>
:::

## Concept · The Session is the contract

- *Which cart · which Application · which order number* — created **server-side**, never by the browser.
- Created **late**: \`expiryAt\` is real. Ownership (IDOR) and readiness run first.
- \`sessionId\` + \`projectKey\` + \`region\` reach the browser together — no public env vars.

> **Docs:** [Create Checkout Sessions](https://docs.commercetools.com/checkout/installing-checkout#create-checkout-sessions)

> **Show:** the checkout **Review & pay** step: the payment widget mounts.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m61c" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="30" width="150" height="110" rx="12" fill="#6359FF" />
  <text x="91" y="54" text-anchor="middle" fill="#ffffff" font-size="12">BFF · startPayment()</text>
  <text x="91" y="78" text-anchor="middle" fill="#e6e6ff" font-size="10">1 ownedCart() — IDOR</text>
  <text x="91" y="96" text-anchor="middle" fill="#e6e6ff" font-size="10">2 readiness (6.5)</text>
  <text x="91" y="114" text-anchor="middle" fill="#e6e6ff" font-size="10">3 attempt → number (6.2)</text>
  <text x="91" y="132" text-anchor="middle" fill="#FFC806" font-size="10">4 create the Session</text>
  <line x1="166" y1="85" x2="212" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m61c)" />
  <rect x="214" y="30" width="196" height="110" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="312" y="50" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">POST session.{region}…/{projectKey}/sessions</text>
  <text x="226" y="72" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">{ cart: { cartRef: { id } },</text>
  <text x="226" y="90" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">  metadata: { applicationKey,</text>
  <text x="226" y="108" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">              futureOrderNumber } }</text>
  <text x="312" y="130" text-anchor="middle" fill="#0BBFBF" font-size="9">Bearer · scope manage_sessions</text>
  <line x1="410" y1="85" x2="456" y2="85" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m61c)" />
  <rect x="458" y="30" width="86" height="110" rx="12" fill="#0BBFBF" />
  <text x="501" y="56" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">Session</text>
  <text x="501" y="80" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">id</text>
  <text x="501" y="98" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">expiryAt</text>
  <text x="501" y="116" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">state</text>
  <path d="M501,140 L501,190 L312,190 L312,214" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m61c)" />
  <rect x="166" y="216" width="292" height="64" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="312" y="240" text-anchor="middle" fill="#191741" font-size="11">to the browser, together:</text>
  <text x="312" y="262" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">{ sessionId, projectKey, region, expiresAt, orderNumber }</text>
  <text x="80" y="250" text-anchor="middle" fill="#6359FF" font-size="10">late — at the</text>
  <text x="80" y="266" text-anchor="middle" fill="#6359FF" font-size="10">payment step</text>
</svg>
:::
`,Im=`---
task: order.Session 6.2
summary: Derive a DETERMINISTIC order number for the shopper's current attempt (cart id + cart version + date), remember it on the session, and reuse it while the cart version is unchanged — a refresh or a double-click is the SAME attempt, so orderNumber uniqueness gives you 'one attempt, one order' for free.
file: order/…/application/CheckoutService.java
method: currentAttempt()
prompt: |
  In bff-java, implement CheckoutService.currentAttempt() in the order module's application layer.
  Read the shopper's cart with ownedCart(), then return the session's CheckoutAttempt when it matches the
  cart id AND version; otherwise build a fresh CheckoutAttempt(cartId, cartVersion, orderNumberFor(cart))
  and remember it with session.setCheckoutAttempt. startPayment() passes the number as futureOrderNumber,
  so Checkout stores it on the Order it creates.
  A refresh or a second click is the same attempt and the same number; a new cart version is a new attempt
  — and the platform's orderNumber uniqueness turns that into "one attempt, one order".
  Before coding, propose how you will decide what defines an attempt (cart id + version vs id only vs per
  click) and what the confirmation does when checkout_completed never arrives, and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 6.2 in Commerce Canvas twice and tell me whether the number is the same; then
  add an item to the cart and run it again.
---

## Concept · Own the number before the order exists

- \`orderNumber\` is immutable and **unique** — a duplicate is \`DuplicateField\`.
- \`futureOrderNumber\` on the Session is stored on the Order Checkout creates.
- S4's \`version\` guarded the write; the order number guards the commit.

> **Docs:** [Set a custom Order number](https://docs.commercetools.com/checkout/installing-checkout#set-a-custom-order-number)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m62a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="30" width="166" height="150" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="99" y="58" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">orderNumber</text>
  <text x="99" y="88" text-anchor="middle" fill="#191741" font-size="11">immutable</text>
  <text x="99" y="110" text-anchor="middle" fill="#191741" font-size="11">unique per project</text>
  <text x="99" y="140" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">duplicate → DuplicateField</text>
  <text x="99" y="164" text-anchor="middle" fill="#6F6D8F" font-size="9">the platform refuses a second order</text>
  <rect x="197" y="30" width="166" height="150" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="58" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">futureOrderNumber</text>
  <text x="280" y="88" text-anchor="middle" fill="#191741" font-size="11">on the Session's metadata</text>
  <line x1="280" y1="98" x2="280" y2="122" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m62a)" />
  <text x="280" y="142" text-anchor="middle" fill="#191741" font-size="11">on the Order Checkout creates</text>
  <text x="280" y="164" text-anchor="middle" fill="#6F6D8F" font-size="9">you chose it; Checkout wrote it</text>
  <rect x="378" y="30" width="166" height="150" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="461" y="58" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">expiryAt</text>
  <text x="461" y="88" text-anchor="middle" fill="#191741" font-size="11">a Session dies</text>
  <text x="461" y="110" text-anchor="middle" fill="#191741" font-size="11">create it late</text>
  <text x="461" y="140" text-anchor="middle" fill="#FFC806" font-size="10">total changed after load?</text>
  <text x="461" y="158" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">reloadPaymentMethods()</text>
  <rect x="16" y="200" width="528" height="80" rx="14" fill="#0BBFBF" />
  <text x="280" y="228" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">S4: version guards the write · S6: the order number guards the commit</text>
  <text x="280" y="254" text-anchor="middle" fill="#191741" font-size="11">one number per attempt = one order per attempt — for free</text>
  <text x="280" y="272" text-anchor="middle" fill="#0b3b3b" font-size="9">a session is cheap; a number is a commitment</text>
</svg>
:::

## Concept · One attempt, one number, one order

- RED: a session at cart creation expires; a number per click allows two orders.
- GREEN: \`LHC-yyyyMMdd-<hash(cartId:version)>\`, remembered, reused on refresh.
- A lost \`checkout_completed\` cannot lose the order — the confirmation looks it up **by number**.

> **Show:** the confirmation header shows \`LHC-…\`; a refresh keeps it.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="20" width="528" height="118" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="44" fill="#FFC806" font-size="12" font-weight="700" letter-spacing="2">RED</text>
  <text x="36" y="70" fill="#191741" font-size="11">session at cart creation → add items for ten minutes → pay → <tspan fill="#FFC806" font-family="Roboto Mono, monospace">expired</tspan></text>
  <text x="36" y="94" fill="#191741" font-size="11">a random number per click → pay on the first, refresh, pay on the second → <tspan fill="#FFC806">two orders possible</tspan></text>
  <text x="36" y="118" fill="#191741" font-size="11">a discount code applied while the widget is up → <tspan fill="#FFC806">stale payment sessions</tspan></text>
  <rect x="16" y="156" width="528" height="124" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="180" fill="#0BBFBF" font-size="12" font-weight="700" letter-spacing="2">GREEN</text>
  <text x="36" y="206" fill="#191741" font-size="11">session created <tspan fill="#0BBFBF">at the payment step</tspan></text>
  <text x="36" y="230" fill="#191741" font-size="11">number derived: <tspan fill="#0BBFBF" font-family="Roboto Mono, monospace">LHC-20260914-7F3A2C</tspan> = date + hash(cartId : version)</text>
  <text x="36" y="254" fill="#191741" font-size="11">remembered as <tspan font-family="Roboto Mono, monospace">CheckoutAttempt(cartId, cartVersion, orderNumber)</tspan> → reused on refresh, double-click, retry</text>
  <text x="36" y="274" fill="#6F6D8F" font-size="10">new cart version = new attempt = new number · the confirmation resolves by number, never by ?orderId= alone</text>
</svg>
:::

## Concept · Decisions you own

- **Scheme** — readable, unique, not guessable: date + hash vs a sequence.
- **Attempt** — cart id + version (a change = new attempt); **lifetime** — create late, re-create at \`expiryAt\` with the same number.
- **Recovery** — \`order_creation_error\`, authorized without an order, a lost \`checkout_completed\`.

> **Ask:** the total changes after the widget loaded (a discount code). Same attempt, or a new one?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="280" y="30" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">RECOVERY — what the shopper sees · what the ledger says</text>
  <rect x="16" y="46" width="528" height="56" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="28" y="68" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">order_creation_error</text>
  <text x="28" y="90" fill="#191741" font-size="10">show it · keep the cart editable · the Automated Reversal voids the payment (CancelAuthorization)</text>
  <rect x="16" y="110" width="528" height="56" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="28" y="132" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">Authorization: Success — but no order</text>
  <text x="28" y="154" fill="#191741" font-size="10">you decide: cancelPayment (6.6), or create the order yourself with the SAME number</text>
  <rect x="16" y="174" width="528" height="56" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="28" y="196" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">checkout_completed never arrives</text>
  <text x="28" y="218" fill="#191741" font-size="10">the confirmation looks the order up by number — GET /api/orders/{orderNumber} (6.3)</text>
  <rect x="16" y="238" width="528" height="46" rx="10" fill="#0BBFBF" />
  <text x="280" y="258" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">multi-instance BFF? persist the attempt as a custom field on the cart, not in memory</text>
  <text x="280" y="276" text-anchor="middle" fill="#0b3b3b" font-size="9">a new instance must recover the same number for the same cart version</text>
</svg>
:::
`,Pm=`---
task: order.Session 6.3
summary: Fetch the order BY ORDER NUMBER (not id), expanding paymentInfo.payments[*], state and lineItems[*].recurrenceInfo.recurrencePolicy — the raw SDK Order; you did NOT create it, Checkout did.
file: order/…/infrastructure/CtOrderRepository.java
method: findByOrderNumber(String orderNumber)
prompt: |
  In bff-java, implement CtOrderRepository.findByOrderNumber(orderNumber) in the order module's
  infrastructure layer.
  GET the order by its orderNumber (never by id) through the injected ProjectApiRoot, expanding
  paymentInfo.payments[*], state and lineItems[*].recurrenceInfo.recurrencePolicy, and return the raw SDK
  Order. The service checks ownership (a foreign number is a 404, never a 403), forgets the Ordered cart
  and projects a PII-safe detail.
  Do not catch exceptions: an unknown number must surface as the platform's 404.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then pay in the storefront with 4111 1111 1111 1111, run Try It for task 6.3 in Commerce Canvas with the
  order number from the confirmation, and tell me what the response shows.
---

## Concept · What Checkout did on Pay

- Created a **Payment** (\`amountPlanned\`, \`interfaceId\`) with an \`Authorization\` Transaction, \`Pending\`.
- Created **the Order** from the cart — your \`futureOrderNumber\`, \`orderState: Open\`, \`paymentState: Pending\`.
- On the PSP's answer: Transaction \`Success\`, \`paymentState: Paid\`. You never called \`POST /orders\`.

> **Docs:** [Checkout payment lifecycle](https://docs.commercetools.com/checkout/payments-lifecycle)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m63a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="110" width="96" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="64" y="138" text-anchor="middle" fill="#191741" font-size="11">widget</text>
  <text x="64" y="156" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">4111 1111 …</text>
  <text x="64" y="174" text-anchor="middle" fill="#0BBFBF" font-size="10">Pay</text>
  <line x1="112" y1="150" x2="146" y2="150" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m63a)" />
  <rect x="148" y="40" width="110" height="60" rx="10" fill="#0BBFBF" />
  <text x="203" y="60" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">1 · Payment</text>
  <text x="203" y="76" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">amountPlanned</text>
  <text x="203" y="90" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">Authorization: Pending</text>
  <rect x="148" y="120" width="110" height="60" rx="10" fill="#0BBFBF" />
  <text x="203" y="140" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">2 · the Order</text>
  <text x="203" y="156" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">LHC-… · Open</text>
  <text x="203" y="170" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">paymentState: Pending</text>
  <rect x="148" y="200" width="110" height="60" rx="10" fill="#0BBFBF" />
  <text x="203" y="220" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">4 · settle</text>
  <text x="203" y="236" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">Authorization: Success</text>
  <text x="203" y="250" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">paymentState: Paid</text>
  <text x="203" y="282" text-anchor="middle" fill="#0BBFBF" font-size="10">Checkout, on your behalf</text>
  <line x1="258" y1="70" x2="310" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m63a)" />
  <rect x="312" y="40" width="110" height="60" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="367" y="64" text-anchor="middle" fill="#191741" font-size="11">3 · connector</text>
  <text x="367" y="82" text-anchor="middle" fill="#6F6D8F" font-size="9">→ the PSP (async)</text>
  <path d="M367,100 L367,230 L258,230" fill="none" stroke="#8C8AAE" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#m63a)" />
  <rect x="438" y="100" width="106" height="100" rx="12" fill="#6359FF" />
  <text x="491" y="124" text-anchor="middle" fill="#ffffff" font-size="11">BFF (6.3)</text>
  <text x="491" y="146" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">orders()</text>
  <text x="491" y="160" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">.withOrderNumber(n)</text>
  <text x="491" y="182" text-anchor="middle" fill="#FFC806" font-size="10">reads it — never writes it</text>
  <path d="M438,150 L258,150" fill="none" stroke="#6359FF" stroke-width="2" marker-end="url(#m63a)" />
</svg>
:::

## Concept · The Order is the snapshot

- Prices never change again; financial changes go through Order Edits.
- "Start fulfilling only on \`Authorization: Success\`" — PSPs are asynchronous (S7 tells you).
- Someone else's order number → **404**, never 403; the cart is \`Ordered\`, forget it.

> **Show:** \`/checkout/confirmation\`: lines, totals, addresses, the payment pills.

> **Ask:** who called \`POST /orders\`, and where did the \`orderNumber\` come from?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m63b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="200" height="150" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="120" y="66" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">CART (S4)</text>
  <text x="120" y="96" text-anchor="middle" fill="#191741" font-size="12">state · versioned</text>
  <text x="120" y="118" text-anchor="middle" fill="#191741" font-size="12">re-priced on every read</text>
  <text x="120" y="140" text-anchor="middle" fill="#191741" font-size="12">update actions</text>
  <text x="120" y="172" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">cartState: Ordered</text>
  <line x1="220" y1="115" x2="336" y2="115" stroke="#8C8AAE" stroke-width="3" marker-end="url(#m63b)" />
  <text x="278" y="104" text-anchor="middle" fill="#6359FF" font-size="11">the commit</text>
  <text x="278" y="132" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">OrderFromCartDraft</text>
  <rect x="340" y="40" width="200" height="150" rx="16" fill="#0BBFBF" />
  <text x="440" y="66" text-anchor="middle" fill="#0b3b3b" font-size="12" letter-spacing="2">ORDER</text>
  <text x="440" y="96" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">a snapshot — frozen</text>
  <text x="440" y="118" text-anchor="middle" fill="#191741" font-size="12">prices never change again</text>
  <text x="440" y="140" text-anchor="middle" fill="#191741" font-size="12">Order Edits for money changes</text>
  <text x="440" y="172" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">orderNumber: LHC-…</text>
  <rect x="20" y="214" width="250" height="66" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="238" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700">ownership check</text>
  <text x="145" y="258" text-anchor="middle" fill="#191741" font-size="10">order.customerId == session.customerId</text>
  <text x="145" y="272" text-anchor="middle" fill="#6F6D8F" font-size="9">(or anonymousId for a guest)</text>
  <rect x="290" y="214" width="250" height="66" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="415" y="238" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">someone else's number → 404</text>
  <text x="415" y="258" text-anchor="middle" fill="#191741" font-size="10">never 403 — don't confirm it exists</text>
  <text x="415" y="272" text-anchor="middle" fill="#6F6D8F" font-size="9">fulfil only on Authorization: Success</text>
</svg>
:::
`,qm=`---
task: order.Session 6.4
summary: Pre-built — study it: GET /api/orders/{orderNumber}/payments projects every Payment the way Merchant Center shows it — paymentInterface + method, interfaceId, amountPlanned, the PSP status code and every Transaction (type, state, amount, interactionId).
file: order/…/application/OrderService.java
method: ledger(String orderNumber) · OrderMapper.ledgers(Order)
prompt: |
  In bff-java, open OrderService.ledger(orderNumber) and OrderMapper.ledgers(...) in the order module's
  application layer, behind GET /api/orders/{orderNumber}/payments.
  Explain to me, without changing code: which Payment fields the projection names (paymentInterface,
  method, interfaceId, amountPlanned, the status code) and which Transaction fields (type, state, amount,
  interactionId), what authorized() and captured() derive from, and why the Payment is a ledger rather than
  a charge. Ground anything you say about Payment and Transaction on the commercetools Knowledge MCP.
  Then run Try It for task 6.4 in Commerce Canvas with a paid order number and tell me what the ledger
  shows next to the Merchant Center Orders → Payments tab.
---

## Concept · A Payment records money. It doesn't move it.

- \`amountPlanned\` is intent; **Transactions** moved money: \`Authorization\` reserve · \`Charge\` take · \`Refund\` return · \`CancelAuthorization\` release.
- States: \`Initial · Pending · Success · Failure\`.
- **commercetools is not the PSP** — the connector mirrors the PSP into this ledger.

> **Docs:** [Payments](https://docs.commercetools.com/api/projects/payments)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="30" y="36" fill="#6F6D8F" font-size="11" letter-spacing="2">TRANSACTION TYPE</text>
  <text x="330" y="36" fill="#6F6D8F" font-size="11" letter-spacing="2">STATE</text>
  <rect x="20" y="48" width="280" height="44" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="32" y="75" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">Authorization</text>
  <text x="290" y="75" text-anchor="end" fill="#191741" font-size="11">reserve — on Pay</text>
  <rect x="20" y="100" width="280" height="44" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="32" y="127" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">Charge</text>
  <text x="290" y="127" text-anchor="end" fill="#191741" font-size="11">take — at fulfilment (6.6)</text>
  <rect x="20" y="152" width="280" height="44" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="32" y="179" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">Refund</text>
  <text x="290" y="179" text-anchor="end" fill="#191741" font-size="11">return — after a charge</text>
  <rect x="20" y="204" width="280" height="44" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="32" y="231" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">CancelAuthorization</text>
  <text x="290" y="231" text-anchor="end" fill="#191741" font-size="11">release — before a charge</text>
  <rect x="320" y="48" width="220" height="200" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="430" y="80" text-anchor="middle" fill="#6F6D8F" font-size="12" font-family="Roboto Mono, monospace">Initial</text>
  <text x="430" y="118" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">Pending</text>
  <text x="430" y="162" text-anchor="middle" fill="#0BBFBF" font-size="14" font-weight="700" font-family="Roboto Mono, monospace">Success</text>
  <text x="430" y="206" text-anchor="middle" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">Failure</text>
  <text x="430" y="236" text-anchor="middle" fill="#6F6D8F" font-size="9">the PSP decides; the connector writes</text>
  <rect x="20" y="258" width="520" height="28" rx="8" fill="#0BBFBF" />
  <text x="280" y="277" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">amountPlanned is intent — only Transactions moved money · fulfil on Authorization: Success</text>
</svg>
:::

## Concept · The evidence

- \`interfaceId\` = the PSP's payment reference; \`transactions[].interactionId\` = its reference per operation.
- \`interfaceInteractions\` = the connector's raw payloads — reconciliation and disputes.
- \`paymentMethodInfo\` names the connector and the method the shopper used.

> **Show:** the confirmation payment pills — Authorised, then Captured after 6.6.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="100" y="24" width="360" height="256" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="50" text-anchor="middle" fill="#6F6D8F" font-size="12" letter-spacing="2">PAYMENT</text>
  <text x="120" y="80" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">amountPlanned</text>
  <text x="440" y="80" text-anchor="end" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">EUR 339.15</text>
  <text x="120" y="104" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">paymentMethodInfo</text>
  <text x="440" y="104" text-anchor="end" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">sample · card</text>
  <text x="120" y="128" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">interfaceId</text>
  <text x="440" y="128" text-anchor="end" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">psp_8c1…</text>
  <text x="120" y="152" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">paymentStatus.interfaceCode</text>
  <text x="440" y="152" text-anchor="end" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">AUTHORIZED</text>
  <rect x="120" y="166" width="320" height="56" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="132" y="186" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">transactions[0]</text>
  <text x="132" y="204" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">Authorization · Success · 339.15</text>
  <text x="428" y="204" text-anchor="end" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">interactionId</text>
  <rect x="120" y="230" width="320" height="38" rx="8" fill="#F1EFFA" stroke="#C9C6E0" />
  <text x="132" y="254" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">interfaceInteractions[]  ← the PSP's raw answers</text>
  <text x="50" y="128" text-anchor="middle" fill="#FFC806" font-size="9">Payment</text>
  <text x="50" y="140" text-anchor="middle" fill="#FFC806" font-size="9">provider ID</text>
  <text x="510" y="246" text-anchor="middle" fill="#FFC806" font-size="9">evidence</text>
  <text x="510" y="258" text-anchor="middle" fill="#FFC806" font-size="9">for disputes</text>
</svg>
:::
`,Km=`---
task: order.Session 6.5
summary: Pre-built — study it: GET /api/checkout/readiness returns { ready, missing[] } — the preconditions Payment Only enforces anyway (shipping AND billing address, a shipping method, a line, a signed-in customer or guest email, a country) — and the OutOfStock demo shows stock is only HELD at the commit.
file: order/…/application/CheckoutService.java
method: readiness() · missingFor(Cart cart)
prompt: |
  In bff-java, open CheckoutService.readiness(), missingFor(cart) and the billing-address copy at the top of
  startPayment() in the order module's application layer, behind GET /api/checkout/readiness.
  Explain to me, without changing code: each precondition and why Payment Only needs it, why a missing
  billing address is not reported when a shipping address exists, and what happens on the ledger when
  Checkout's order creation fails OutOfStock (the Automated Reversal). Ground anything you say about
  Payment Only prerequisites on the commercetools Knowledge MCP.
  Then run Try It for task 6.5 in Commerce Canvas before and after setting the address and tell me what
  missing[] shows each time.
---

## Concept · Ready for Payment Only?

- Shipping **and billing** address (\`startPayment\` copies shipping → billing), a shipping method, a line.
- A signed-in customer or a guest email; a country the Application supports.
- Checkout would answer \`NonOrderableCartError\` anyway — check early so the button is honest.

> **Docs:** [Payment Only mode](https://docs.commercetools.com/checkout/overview#payment-only-mode)

> **Show:** the checkout **Proceed to payment** button is enabled only when the cart is ready.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="300" height="264" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="170" y="46" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">missingFor(cart)</text>
  <text x="40" y="78" fill="#0BBFBF" font-size="13">☑</text><text x="62" y="78" fill="#191741" font-size="12">at least one line item</text>
  <text x="40" y="106" fill="#0BBFBF" font-size="13">☑</text><text x="62" y="106" fill="#191741" font-size="12">shipping address (4.7)</text>
  <text x="40" y="134" fill="#0BBFBF" font-size="13">☑</text><text x="62" y="134" fill="#191741" font-size="12">billing address</text>
  <text x="62" y="150" fill="#FFC806" font-size="9">Payment Only requires it — copied from shipping when absent</text>
  <text x="40" y="178" fill="#0BBFBF" font-size="13">☑</text><text x="62" y="178" fill="#191741" font-size="12">shipping method (4.8)</text>
  <text x="40" y="206" fill="#0BBFBF" font-size="13">☑</text><text x="62" y="206" fill="#191741" font-size="12">a signed-in customer or a guest email (S5)</text>
  <text x="40" y="234" fill="#0BBFBF" font-size="13">☑</text><text x="62" y="234" fill="#191741" font-size="12">a country the Application supports</text>
  <text x="170" y="268" text-anchor="middle" fill="#6F6D8F" font-size="9">DE · US · GB on demo-commercetools-checkout-taxes</text>
  <rect x="340" y="60" width="200" height="80" rx="12" fill="#0BBFBF" />
  <text x="440" y="86" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">{ ready: true,</text>
  <text x="440" y="108" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">  missing: [] }</text>
  <text x="440" y="130" text-anchor="middle" fill="#0b3b3b" font-size="9">Proceed to payment — enabled</text>
  <rect x="340" y="160" width="200" height="96" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="440" y="186" text-anchor="middle" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">{ ready: false,</text>
  <text x="440" y="206" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">missing: ["shipping address",</text>
  <text x="440" y="224" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">"shipping method"] }</text>
  <text x="440" y="246" text-anchor="middle" fill="#6F6D8F" font-size="9">startPayment → 409 naming the same list</text>
</svg>
:::

## Concept · Stock is only held at the commit

- \`pickup-store\`: **3** in stock, \`ReserveOnOrder\`, quantity **5** → pay.
- Checkout's order creation fails \`OutOfStock\` → \`order_creation_error\` in the widget.
- The **Automated Reversal** voids the authorization: \`CancelAuthorization\` on the ledger; the cart stays editable.

> **Discuss:** S4's stock gate was UX; this is the guarantee. Which one does the shopper see — and when?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m65b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="40" width="120" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="76" y="64" text-anchor="middle" fill="#191741" font-size="11">cart line</text>
  <text x="76" y="82" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">CARM-023 × 5</text>
  <text x="76" y="98" text-anchor="middle" fill="#6F6D8F" font-size="9">pickup-store · 3 in stock</text>
  <line x1="136" y1="75" x2="176" y2="75" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m65b)" />
  <rect x="178" y="40" width="120" height="70" rx="12" fill="#0BBFBF" />
  <text x="238" y="64" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">Pay</text>
  <text x="238" y="82" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">Authorization</text>
  <text x="238" y="98" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">Pending → Success</text>
  <line x1="298" y1="75" x2="338" y2="75" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m65b)" />
  <rect x="340" y="40" width="120" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="400" y="64" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">POST /orders</text>
  <text x="400" y="82" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">OutOfStock</text>
  <text x="400" y="98" text-anchor="middle" fill="#6F6D8F" font-size="9">ReserveOnOrder holds here</text>
  <path d="M400,110 L400,160 L238,160 L238,184" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#m65b)" />
  <text x="320" y="152" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">order_creation_error</text>
  <rect x="178" y="186" width="120" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="238" y="210" text-anchor="middle" fill="#191741" font-size="11">Automated Reversal</text>
  <text x="238" y="228" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">CancelAuthorization</text>
  <text x="238" y="244" text-anchor="middle" fill="#6F6D8F" font-size="9">configured, not coded</text>
  <line x1="178" y1="221" x2="138" y2="221" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m65b)" />
  <rect x="16" y="186" width="120" height="70" rx="12" fill="#6359FF" />
  <text x="76" y="214" text-anchor="middle" fill="#ffffff" font-size="11">cart stays editable</text>
  <text x="76" y="234" text-anchor="middle" fill="#e6e6ff" font-size="10">shopper fixes the quantity</text>
  <text x="440" y="214" text-anchor="middle" fill="#6359FF" font-size="10">S4's gate (read side) was UX;</text>
  <text x="440" y="232" text-anchor="middle" fill="#6359FF" font-size="10">the commit is the guarantee —</text>
  <text x="440" y="250" text-anchor="middle" fill="#6F6D8F" font-size="9">inventory is eventually consistent (~10 s)</text>
</svg>
:::
`,Vm=`---
task: order.Session 6.6
summary: Capture through the CHECKOUT api root's Payment Intents API, so the connector tells the PSP — paymentIntents().withPaymentId(id).post(capturePayment { amount, merchantReference }) — never addTransaction by hand.
file: order/…/infrastructure/CtPaymentIntentRepository.java
method: capture(String paymentId, long centAmount, String currencyCode, String merchantReference)
prompt: |
  In bff-java, implement CtPaymentIntentRepository.capture(paymentId, centAmount, currencyCode,
  merchantReference) in the order module's infrastructure layer.
  Through the Checkout SDK's checkoutApiRoot (not the Composable Commerce ProjectApiRoot), POST a
  PaymentIntent with one capturePayment action — amount { centAmount, currencyCode } and merchantReference —
  to paymentIntents().withPaymentId(paymentId), and return the outcome the way the send(...) helper does
  for cancel and refund. Checkout asks the connector, which asks the PSP, then writes the Charge Transaction.
  Never addTransaction by hand on a Payment Checkout created — the PSP would never learn.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 6.6 in Commerce Canvas with a paid order number, re-run 6.4, and tell me what
  changed on the ledger.
---

## Concept · Authorize now, capture at fulfilment

- Checkout authorized on Pay; **when** to take the money is yours — usually at shipment.
- The **Payment Intents API** → connector → PSP → a \`Charge\` appears on the ledger.
- A hand-written \`addTransaction\` is a ledger line the PSP never sees.

> **Docs:** [Payment Intents API — Capture Payment](https://docs.commercetools.com/checkout/payment-intents-api#capture-payment)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m66a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <text x="30" y="34" fill="#0BBFBF" font-size="11" font-weight="700" letter-spacing="1">THE RIGHT PATH</text>
  <rect x="20" y="46" width="100" height="56" rx="10" fill="#6359FF" />
  <text x="70" y="70" text-anchor="middle" fill="#ffffff" font-size="11">BFF (ops)</text>
  <text x="70" y="88" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">capturePayment</text>
  <line x1="120" y1="74" x2="152" y2="74" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m66a)" />
  <rect x="154" y="46" width="110" height="56" rx="10" fill="#0BBFBF" />
  <text x="209" y="70" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">Checkout</text>
  <text x="209" y="88" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">Payment Intents API</text>
  <line x1="264" y1="74" x2="296" y2="74" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m66a)" />
  <rect x="298" y="46" width="100" height="56" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="348" y="70" text-anchor="middle" fill="#191741" font-size="11">connector</text>
  <text x="348" y="88" text-anchor="middle" fill="#6F6D8F" font-size="9">Sample payment</text>
  <line x1="398" y1="74" x2="430" y2="74" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m66a)" />
  <rect x="432" y="46" width="108" height="56" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="486" y="70" text-anchor="middle" fill="#191741" font-size="11">PSP</text>
  <text x="486" y="88" text-anchor="middle" fill="#0BBFBF" font-size="9">money moves</text>
  <path d="M486,102 L486,136 L209,136 L209,150" fill="none" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m66a)" />
  <rect x="134" y="152" width="150" height="34" rx="8" fill="#0BBFBF" />
  <text x="209" y="174" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">Charge · Success</text>
  <text x="400" y="174" text-anchor="middle" fill="#6F6D8F" font-size="10">written on the ledger, mirrored from the PSP</text>
  <text x="30" y="222" fill="#FFC806" font-size="11" font-weight="700" letter-spacing="1">THE WRONG PATH</text>
  <rect x="20" y="234" width="100" height="50" rx="10" fill="#6359FF" />
  <text x="70" y="256" text-anchor="middle" fill="#ffffff" font-size="11">BFF</text>
  <text x="70" y="272" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">addTransaction</text>
  <line x1="120" y1="259" x2="152" y2="259" stroke="#FFC806" stroke-width="2" marker-end="url(#m66a)" />
  <rect x="154" y="234" width="130" height="50" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="219" y="256" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">Charge · Success</text>
  <text x="219" y="272" text-anchor="middle" fill="#6F6D8F" font-size="9">a line — but no money</text>
  <text x="412" y="252" text-anchor="middle" fill="#FFC806" font-size="11">the PSP never learns;</text>
  <text x="412" y="270" text-anchor="middle" fill="#FFC806" font-size="11">the ledger lies</text>
</svg>
:::

## Concept · Three intents, one shape

- \`capturePayment\` (now) · \`cancelPayment\` (before capture → \`CancelAuthorization\`) · \`refundPayment\` (after → \`Refund\`, partial allowed).
- \`merchantReference\` = your order number, on the PSP's side too.
- Scope \`manage_checkout_payment_intents\`; idempotent — already captured is reported, not charged twice.

> **Show:** run it from Canvas (ops), then refresh the confirmation: the pill reads Captured.

> **Ask:** why does \`capture\` need \`Authorization: Success\` first — what would the PSP say otherwise?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="16" y="24" width="166" height="190" rx="14" fill="#0BBFBF" />
  <text x="99" y="52" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">capturePayment</text>
  <text x="99" y="80" text-anchor="middle" fill="#191741" font-size="10">after Authorization: Success</text>
  <text x="99" y="104" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">amount · merchantReference</text>
  <text x="99" y="136" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">→ Charge</text>
  <text x="99" y="172" text-anchor="middle" fill="#0b3b3b" font-size="9">6.6 · also 6.7 order-shipped</text>
  <text x="99" y="200" text-anchor="middle" fill="#0b3b3b" font-size="9">idempotent in the service</text>
  <rect x="197" y="24" width="166" height="190" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="52" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">cancelPayment</text>
  <text x="280" y="80" text-anchor="middle" fill="#6359FF" font-size="10">before any capture</text>
  <text x="280" y="104" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">merchantReference</text>
  <text x="280" y="136" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">→ CancelAuthorization</text>
  <text x="280" y="172" text-anchor="middle" fill="#6F6D8F" font-size="9">6.7 order-cancelled</text>
  <rect x="378" y="24" width="166" height="190" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="461" y="52" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">refundPayment</text>
  <text x="461" y="80" text-anchor="middle" fill="#6359FF" font-size="10">after a capture</text>
  <text x="461" y="104" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">amount (partial ok)</text>
  <text x="461" y="136" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">→ Refund</text>
  <text x="461" y="172" text-anchor="middle" fill="#6F6D8F" font-size="9">homework: a return flow</text>
  <rect x="16" y="230" width="528" height="54" rx="12" fill="#6359FF" />
  <text x="280" y="252" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Roboto Mono, monospace">checkoutApiRoot.paymentIntents().withPaymentId(id).post(PaymentIntent { actions: [ … ] })</text>
  <text x="280" y="272" text-anchor="middle" fill="#e6e6ff" font-size="10">the Checkout SDK's ProjectApiRoot — a different class, hence the qualifier · scope manage_checkout_payment_intents</text>
</svg>
:::
`,Gm=`---
task: order.Session 6.7
summary: Move the order along the SEEDED State machine with guards — refuse a transition the State does not allow with a 409 listing the allowed next states, treat 'already there' as 200 — and apply the implications (picked ⇒ Confirmed, shipped ⇒ capture + Shipped, delivered ⇒ Complete, cancelled ⇒ cancelPayment + Cancelled).
file: order/…/application/OrderService.java
method: transition(String orderNumber, String targetKey, String locale) · CtOrderRepository.update(…)
prompt: |
  In bff-java, implement OrderService.transition(orderNumber, targetKey, locale) in the order module's
  application layer, and the T1 half CtOrderRepository.update(orderId, version, actions) in infrastructure
  (POST an OrderUpdate with version + actions, expanding payments, state and the recurrence policy; return
  the raw Order).
  In the service: read the order's current State key (expanded, else states.findById), return 200 unchanged
  when already there, refuse a target not in allowedTransitions(order) with a 409 listing the allowed next
  states, apply the ledger implications first (order-shipped ⇒ paymentIntents.capture when authorized and
  not yet captured; order-cancelled ⇒ paymentIntents.cancel), then ONE update through withRetry with
  transitionState (force = false) plus the IMPLICATIONS actions for the target.
  Never send force: the platform enforces the machine too; your guard exists for a clean 409.
  Before coding, propose how you will decide the cancellation window and what an idempotent re-transition
  returns, and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 6.7 in Commerce Canvas with order-picked, then order-delivered (expect a 409),
  then order-shipped, and tell me what each response shows.
---

## Concept · A state machine is data

- Three built-in enums: \`orderState\` (Checkout never sets it), \`shipmentState\`, \`paymentState\` (Checkout sets \`Paid\`).
- The seeded custom **\`State\`** machine is *your* process: \`initial\` + \`transitions\`.
- \`transitionState\` moves it; the platform refuses what it forbids — never \`force\`.

> **Docs:** [States](https://docs.commercetools.com/api/projects/states)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m67a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#0BBFBF" /></marker></defs>
  <text x="280" y="30" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">SEEDED State MACHINE · type OrderState</text>
  <rect x="16" y="60" width="110" height="50" rx="25" fill="#0BBFBF" />
  <text x="71" y="82" text-anchor="middle" fill="#191741" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">order-placed</text>
  <text x="71" y="98" text-anchor="middle" fill="#0b3b3b" font-size="9">initial</text>
  <line x1="126" y1="85" x2="158" y2="85" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m67a)" />
  <rect x="160" y="60" width="110" height="50" rx="25" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="215" y="82" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">order-picked</text>
  <text x="215" y="98" text-anchor="middle" fill="#6F6D8F" font-size="9">⇒ Confirmed</text>
  <line x1="270" y1="85" x2="302" y2="85" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m67a)" />
  <rect x="304" y="60" width="110" height="50" rx="25" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="359" y="82" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">order-shipped</text>
  <text x="359" y="98" text-anchor="middle" fill="#FFC806" font-size="9">⇒ capture + Shipped</text>
  <line x1="414" y1="85" x2="446" y2="85" stroke="#0BBFBF" stroke-width="2" marker-end="url(#m67a)" />
  <rect x="448" y="60" width="96" height="50" rx="25" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="496" y="82" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">order-delivered</text>
  <text x="496" y="98" text-anchor="middle" fill="#6F6D8F" font-size="9">⇒ Complete</text>
  <path d="M71,110 L71,150 L215,150 L215,164" fill="none" stroke="#FFC806" stroke-width="2" marker-end="url(#m67a)" />
  <rect x="160" y="166" width="110" height="50" rx="25" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="215" y="188" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">order-cancelled</text>
  <text x="215" y="204" text-anchor="middle" fill="#6F6D8F" font-size="9">⇒ cancelPayment + Cancelled</text>
  <text x="330" y="192" text-anchor="middle" fill="#6359FF" font-size="10">only from order-placed — the cancellation window</text>
  <rect x="16" y="236" width="528" height="48" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="256" text-anchor="middle" fill="#191741" font-size="11">built-in: orderState Open · Confirmed · Complete · Cancelled   |   shipmentState   |   paymentState Pending · Paid</text>
  <text x="280" y="274" text-anchor="middle" fill="#6F6D8F" font-size="10">Checkout sets paymentState only — everything else is yours to mirror</text>
</svg>
:::

## Concept · Guards and implications

- Not allowed → **409** with the allowed next states; already there → **200**.
- picked ⇒ \`Confirmed\` · shipped ⇒ **capture** + \`Shipped\` · delivered ⇒ \`Complete\` · cancelled ⇒ **cancelPayment** + \`Cancelled\`.
- Ledger first (it talks to the PSP), then one order update.

> **Show:** from Canvas (ops) move Placed → Picked → Shipped; \`/account\` → My orders follows.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="30" y="30" fill="#6F6D8F" font-size="10" letter-spacing="2">TARGET</text>
  <text x="190" y="30" fill="#6F6D8F" font-size="10" letter-spacing="2">LEDGER FIRST</text>
  <text x="370" y="30" fill="#6F6D8F" font-size="10" letter-spacing="2">THEN ONE UPDATE</text>
  <rect x="20" y="40" width="520" height="42" rx="8" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="30" y="66" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">order-picked</text>
  <text x="190" y="66" fill="#6F6D8F" font-size="11">—</text>
  <text x="370" y="66" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">transitionState + Confirmed</text>
  <rect x="20" y="90" width="520" height="42" rx="8" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="30" y="116" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">order-shipped</text>
  <text x="190" y="116" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">capturePayment (6.6)</text>
  <text x="370" y="116" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">transitionState + Shipped</text>
  <rect x="20" y="140" width="520" height="42" rx="8" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="30" y="166" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">order-delivered</text>
  <text x="190" y="166" fill="#6F6D8F" font-size="11">—</text>
  <text x="370" y="166" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">+ Delivered + Complete</text>
  <rect x="20" y="190" width="520" height="42" rx="8" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="30" y="216" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">order-cancelled</text>
  <text x="190" y="216" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">cancelPayment</text>
  <text x="370" y="216" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">transitionState + Cancelled</text>
  <rect x="20" y="244" width="250" height="40" rx="10" fill="#FFC806" />
  <text x="145" y="262" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">illegal → 409</text>
  <text x="145" y="277" text-anchor="middle" fill="#191741" font-size="9">"allowed next states: [order-picked, order-cancelled]"</text>
  <rect x="290" y="244" width="250" height="40" rx="10" fill="#0BBFBF" />
  <text x="415" y="262" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">already there → 200</text>
  <text x="415" y="277" text-anchor="middle" fill="#0b3b3b" font-size="9">idempotent — a retry is not an error</text>
</svg>
:::

## Concept · Decisions you own

- **The table + implications** — where does "capture on ship" live: here, or in the OMS?
- **Cancellation window** — before \`order-shipped\` it is \`cancelPayment\`; after, a return + refund.
- **Idempotent re-transitions**; **who may transition** — ops / an OMS (S9), never the storefront.

> **Ask:** try an illegal move from Canvas before the guard exists — what does the platform say on its own?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="46" fill="#FFC806" font-size="12" font-weight="700">THE TABLE + IMPLICATIONS</text>
  <text x="36" y="70" fill="#191741" font-size="11">which step moves money, which mirrors a state</text>
  <text x="36" y="92" fill="#6F6D8F" font-size="10">reference: capture on order-shipped,</text>
  <text x="36" y="108" fill="#6F6D8F" font-size="10">here — until an OMS owns fulfilment (S9)</text>
  <rect x="290" y="20" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="306" y="46" fill="#FFC806" font-size="12" font-weight="700">CANCELLATION WINDOW</text>
  <text x="306" y="70" fill="#191741" font-size="11">cancelPayment before · refund after</text>
  <text x="306" y="92" fill="#6F6D8F" font-size="10">reference: order-cancelled only from</text>
  <text x="306" y="108" fill="#6F6D8F" font-size="10">order-placed — the machine says so</text>
  <rect x="20" y="160" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="186" fill="#FFC806" font-size="12" font-weight="700">IDEMPOTENT RE-TRANSITIONS</text>
  <text x="36" y="210" fill="#191741" font-size="11">already there → 200, not 409</text>
  <text x="36" y="232" fill="#6F6D8F" font-size="10">reference: a retried "shipped" must not</text>
  <text x="36" y="248" fill="#6F6D8F" font-size="10">capture twice — the service checks captured()</text>
  <rect x="290" y="160" width="250" height="125" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="306" y="186" fill="#FFC806" font-size="12" font-weight="700">WHO MAY TRANSITION</text>
  <text x="306" y="210" fill="#191741" font-size="11">ops · an OMS via Connect (S9)</text>
  <text x="306" y="232" fill="#6F6D8F" font-size="10">reference: never the storefront — the</text>
  <text x="306" y="248" fill="#6F6D8F" font-size="10">endpoint sits behind an operator role</text>
</svg>
:::
`,Ym=`---
task: order.Session 6.8
summary: Query the customer's orders — a \`customerId = :id\` predicate, newest first, limited; the id comes from the session, never from a request parameter.
file: order/…/infrastructure/CtOrderRepository.java
method: findByCustomer(String customerId, int limit)
prompt: |
  In bff-java, implement CtOrderRepository.findByCustomer(customerId, limit) in the order module's
  infrastructure layer.
  Query orders with the predicate customerId = :id (bind the id as a predicate variable — never concatenate
  it), sorted createdAt desc, limited to limit, expanding state, and return the raw SDK Orders. The service
  passes session.requireCustomerId() and projects PII-safe summaries.
  The customer id comes from the ShopperSession — a customerId request parameter is the S5 smell.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 6.8 in Commerce Canvas signed in as ada@lhc.test and tell me what the response
  shows.
---

## Concept · The S5 argument, on a fourth resource

- The **general** orders endpoint, filtered by \`customerId\` — bound as a predicate variable.
- The id comes from the **ShopperSession**; a \`?customerId=\` parameter would let anyone read anyone's orders.
- Predicate + sort + limit: the S2 query shape, again.

> **Docs:** [Query Orders](https://docs.commercetools.com/api/projects/orders#query-orders)

> **Show:** \`/account\` → My orders: the list, newest first.

> **Ask:** what would a \`customerId\` query parameter on this endpoint let an attacker do?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m68a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="60" width="120" height="100" rx="12" fill="#0BBFBF" />
  <text x="76" y="86" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">ShopperSession</text>
  <text x="76" y="110" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">customerId</text>
  <text x="76" y="134" text-anchor="middle" fill="#0b3b3b" font-size="9">requireCustomerId()</text>
  <line x1="136" y1="110" x2="178" y2="110" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m68a)" />
  <rect x="180" y="46" width="220" height="128" rx="12" fill="#6359FF" />
  <text x="290" y="70" text-anchor="middle" fill="#ffffff" font-size="11">orders().get()</text>
  <text x="290" y="94" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">.withWhere("customerId = :id")</text>
  <text x="290" y="112" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">.withPredicateVar("id", customerId)</text>
  <text x="290" y="134" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">.withSort("createdAt desc")</text>
  <text x="290" y="152" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">.withLimit(limit)</text>
  <line x1="400" y1="110" x2="442" y2="110" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m68a)" />
  <rect x="444" y="60" width="100" height="100" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="494" y="86" text-anchor="middle" fill="#191741" font-size="11">results[]</text>
  <text x="494" y="110" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">LHC-20260914-…</text>
  <text x="494" y="128" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">LHC-20260912-…</text>
  <text x="494" y="148" text-anchor="middle" fill="#6F6D8F" font-size="9">only hers</text>
  <rect x="180" y="200" width="220" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="290" y="225" text-anchor="middle" fill="#FFC806" font-size="12" font-family="Roboto Mono, monospace">GET /api/orders?customerId=…</text>
  <line x1="190" y1="240" x2="390" y2="200" stroke="#FFC806" stroke-width="3" />
  <text x="290" y="262" text-anchor="middle" fill="#FFC806" font-size="10">anyone could read anyone's orders — delete the parameter</text>
  <text x="290" y="284" text-anchor="middle" fill="#6F6D8F" font-size="10">bind, never concatenate: the predicate variable keeps the id out of the query string</text>
</svg>
:::

## Concept · A guest's orders follow at sign-in

- Before sign-in, orders carry the guest's \`anonymousId\`; the service queries by that.
- Sign-in with \`anonymousId\` moved them to the customer (S5): one field, four resources.
- The summary is PII-safe: number, date, total, the states, a line count.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m68b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <line x1="40" y1="150" x2="520" y2="150" stroke="#C9C6E0" stroke-width="3" marker-end="url(#m68b)" />
  <rect x="40" y="70" width="150" height="60" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="115" y="94" text-anchor="middle" fill="#191741" font-size="11">guest order</text>
  <text x="115" y="114" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">anonymousId = a1…</text>
  <line x1="115" y1="130" x2="115" y2="148" stroke="#8C8AAE" stroke-width="2" />
  <rect x="230" y="110" width="110" height="80" rx="12" fill="#0BBFBF" />
  <text x="285" y="138" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">sign-in (S5)</text>
  <text x="285" y="158" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">anonymousId: a1…</text>
  <text x="285" y="176" text-anchor="middle" fill="#0b3b3b" font-size="9">carts · lists · orders · payments</text>
  <rect x="380" y="70" width="150" height="60" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="455" y="94" text-anchor="middle" fill="#191741" font-size="11">the same order</text>
  <text x="455" y="114" text-anchor="middle" fill="#0BBFBF" font-size="9" font-family="Roboto Mono, monospace">customerId = ada…</text>
  <line x1="455" y1="130" x2="455" y2="148" stroke="#8C8AAE" stroke-width="2" />
  <text x="115" y="214" text-anchor="middle" fill="#6359FF" font-size="10">history(): findByAnonymousId</text>
  <text x="455" y="214" text-anchor="middle" fill="#6359FF" font-size="10">history(): findByCustomer</text>
  <rect x="120" y="236" width="320" height="48" rx="10" fill="#6359FF" />
  <text x="280" y="256" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Roboto Mono, monospace">OrderSummary { orderNumber, createdAt, total, states, lines }</text>
  <text x="280" y="274" text-anchor="middle" fill="#e6e6ff" font-size="9">no addresses, no email — the account page needs none of it here</text>
</svg>
:::
`,Xm=`---
task: order.Session 6.9
summary: Query the RecurringOrder the PLATFORM created from the recurring line — an \`originOrder(id = :oid)\` predicate, expanding the cart; nobody called a create endpoint.
file: order/…/infrastructure/CtRecurringOrderRepository.java
method: findByOriginOrder(String orderId)
prompt: |
  In bff-java, implement CtRecurringOrderRepository.findByOriginOrder(orderId) in the order module's
  infrastructure layer.
  Query recurringOrders with the predicate originOrder(id = :oid) (bound as a predicate variable),
  expanding cart, limited to 1, and return the first result as an Optional<RecurringOrder>. Nobody created
  this resource: the order Checkout placed came from a cart with S4's recurring line, so the platform
  created the RecurringOrder and its recurring cart.
  It is the schedule born from the origin order — not a second order; an empty result means the cart had no
  recurring line.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 6.9 in Commerce Canvas with an order placed from a cart with a Subscribe & Save
  line and tell me what the response shows.
---

## Concept · Nobody created it

- Order from a cart with a recurring line → the platform creates a **RecurringOrder** + a **recurring cart** of those items.
- No extra call by anyone — Method A: Checkout used the Orders API.
- It is the **schedule**, not a second order.

> **Docs:** [Recurring Orders — initial creation](https://docs.commercetools.com/api/recurring-orders-overview#initial-creation)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m69a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="16" y="40" width="150" height="110" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="91" y="64" text-anchor="middle" fill="#6F6D8F" font-size="10" letter-spacing="1">CART (S4)</text>
  <text x="91" y="88" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">LPC-011 × 2</text>
  <text x="91" y="108" text-anchor="middle" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">CARM-023 × 1 ↻ monthly</text>
  <text x="91" y="128" text-anchor="middle" fill="#6F6D8F" font-size="9">recurrenceInfo · Fixed price</text>
  <line x1="166" y1="95" x2="206" y2="95" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m69a)" />
  <rect x="208" y="40" width="130" height="110" rx="12" fill="#0BBFBF" />
  <text x="273" y="64" text-anchor="middle" fill="#0b3b3b" font-size="10" letter-spacing="1">CHECKOUT</text>
  <text x="273" y="90" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">places the Order</text>
  <text x="273" y="110" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">LHC-… (origin)</text>
  <text x="273" y="134" text-anchor="middle" fill="#0b3b3b" font-size="9">through the Orders API</text>
  <line x1="338" y1="95" x2="378" y2="95" stroke="#8C8AAE" stroke-width="2" marker-end="url(#m69a)" />
  <rect x="380" y="24" width="164" height="68" rx="12" fill="#6359FF" />
  <text x="462" y="48" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">RecurringOrder</text>
  <text x="462" y="66" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">originOrder → LHC-…</text>
  <text x="462" y="82" text-anchor="middle" fill="#e6e6ff" font-size="9">the schedule · one per policy</text>
  <rect x="380" y="100" width="164" height="60" rx="12" fill="#6359FF" />
  <text x="462" y="122" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">recurring cart</text>
  <text x="462" y="140" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">origin: RecurringOrder</text>
  <text x="462" y="154" text-anchor="middle" fill="#e6e6ff" font-size="9">CARM-023 × 1 only</text>
  <text x="462" y="180" text-anchor="middle" fill="#FFC806" font-size="10" font-weight="700">created by the platform</text>
  <rect x="16" y="200" width="528" height="84" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="226" text-anchor="middle" fill="#191741" font-size="11">your query only FINDS it:</text>
  <text x="280" y="248" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">recurringOrders().get().withWhere("originOrder(id = :oid)").withExpand("cart")</text>
  <text x="280" y="272" text-anchor="middle" fill="#6F6D8F" font-size="10">Method B — POST /recurring-orders with startsAt / expiresAt — is for when no origin order exists</text>
</svg>
:::

## Concept · What the schedule holds

- \`recurringOrderState\`, the schedule (\`monthly\`), \`startsAt\` / \`expiresAt\`, next order date.
- \`priceSelectionMode: Fixed\` — S4's promise kept: future orders keep today's price.
- The next cycle's payment is **not** a Checkout session — it needs a stored payment method. Skip / pause is homework.

> **Show:** the confirmation **Subscription** card: "Charlie Armchair — every month", next order date, state.

> **Ask:** from which cart will the next order be placed?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m69b" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <line x1="30" y1="120" x2="530" y2="120" stroke="#C9C6E0" stroke-width="3" marker-end="url(#m69b)" />
  <circle cx="80" cy="120" r="12" fill="#0BBFBF" />
  <text x="80" y="92" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">origin order</text>
  <text x="80" y="150" text-anchor="middle" fill="#6F6D8F" font-size="10">today · Checkout paid</text>
  <text x="80" y="166" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">startsAt</text>
  <circle cx="230" cy="120" r="10" fill="#6359FF" />
  <text x="230" y="92" text-anchor="middle" fill="#191741" font-size="11">cycle 2</text>
  <text x="230" y="150" text-anchor="middle" fill="#6F6D8F" font-size="10">+1 month · from the recurring cart</text>
  <text x="230" y="166" text-anchor="middle" fill="#FFC806" font-size="9">stored payment method — not a Checkout session</text>
  <circle cx="380" cy="120" r="10" fill="#6359FF" />
  <text x="380" y="92" text-anchor="middle" fill="#191741" font-size="11">cycle 3</text>
  <text x="380" y="150" text-anchor="middle" fill="#6F6D8F" font-size="10">+2 months</text>
  <text x="380" y="166" text-anchor="middle" fill="#6F6D8F" font-size="9">skip / pause: homework</text>
  <circle cx="500" cy="120" r="8" fill="#191741" stroke="#C9C6E0" />
  <text x="500" y="92" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">expiresAt</text>
  <rect x="30" y="196" width="500" height="88" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="50" y="220" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">recurringOrderState: Active</text>
  <text x="310" y="220" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">schedule: monthly</text>
  <text x="50" y="244" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">priceSelectionMode: Fixed</text>
  <text x="310" y="244" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">nextOrderAt: …</text>
  <text x="280" y="270" text-anchor="middle" fill="#6F6D8F" font-size="10">Fixed = today's price on every cycle — the mode S4 chose on the line</text>
</svg>
:::
`,Zm=`---
task: extensibility.Session 7.1
summary: One cart update — setCustomType with the seeded \`order-extras\` Type by key and the full fields map; the service merges the existing fields and always stamps \`owner\`, the field 7.6's trigger condition keys on.
file: extensibility/…/infrastructure/CtCustomFieldsRepository.java
method: setCartCustomFields(String cartId, Long version, String typeKey, Map<String, Object> fields)
prompt: |
  In bff-java, implement CtCustomFieldsRepository.setCartCustomFields(cartId, version, typeKey, fields) in the
  extensibility module's infrastructure layer.
  POST one cart update against the given version with a single setCustomType action: the Type referenced BY KEY
  (typeKey) and the full fields map as the FieldContainer; expand custom.type and return the raw SDK Cart.
  setCustomType replaces the whole field set, so never filter the map — the service already merged the existing
  fields and stamped owner.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 7.1 in Commerce Canvas with a gift message and tell me what the response shows.
---

## Concept · Types define, fields carry

- A **Type** declares \`fieldDefinitions\` for its \`resourceTypeIds\`; one Type per resource at a time.
- \`order\` covers carts **and** orders — the cart's \`custom\` snapshots onto the Order at the commit.
- \`setCustomType\` replaces the whole set: pass the merged map, \`owner\` included.

> **Docs:** [Types](https://docs.commercetools.com/api/projects/types) · [Cart: Set Custom Type](https://docs.commercetools.com/api/projects/carts#set-custom-type)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="20" width="300" height="204" rx="16" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="46" fill="#6F6D8F" font-size="11" letter-spacing="2">TYPE</text>
  <text x="36" y="70" fill="#191741" font-size="15" font-weight="700" font-family="Roboto Mono, monospace">order-extras</text>
  <text x="36" y="92" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">resourceTypeIds: ["order"]</text>
  <rect x="36" y="108" width="268" height="28" rx="8" fill="#6359FF" />
  <text x="48" y="127" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">giftMessage</text>
  <text x="292" y="127" text-anchor="end" fill="#e6e6ff" font-size="11">String · the shopper</text>
  <rect x="36" y="142" width="268" height="28" rx="8" fill="#6359FF" />
  <text x="48" y="161" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">requiresWhiteGlove</text>
  <text x="292" y="161" text-anchor="end" fill="#e6e6ff" font-size="11">Boolean · the platform (7.7)</text>
  <rect x="36" y="176" width="268" height="28" rx="8" fill="#6359FF" />
  <text x="48" y="195" fill="#ffffff" font-size="12" font-family="Roboto Mono, monospace">owner</text>
  <text x="292" y="195" text-anchor="end" fill="#e6e6ff" font-size="11">String · the plumbing (7.6)</text>
  <rect x="350" y="40" width="190" height="60" rx="12" fill="#0BBFBF" />
  <text x="445" y="64" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Cart</text>
  <text x="445" y="84" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">custom { type, fields }</text>
  <line x1="445" y1="100" x2="445" y2="152" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a)" />
  <text x="435" y="130" text-anchor="end" fill="#FFC806" font-size="11">snapshot at the commit</text>
  <rect x="350" y="158" width="190" height="60" rx="12" fill="#0BBFBF" />
  <text x="445" y="182" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Order</text>
  <text x="445" y="202" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">custom { same fields }</text>
  <rect x="20" y="242" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="267" text-anchor="middle" fill="#6359FF" font-size="12" font-family="Roboto Mono, monospace">setCustomType { type: { key: "order-extras" }, fields: { …merged, owner } }</text>
</svg>
:::

## Concept · Three fields, three writers

- \`giftMessage\` — the shopper, from the checkout (this task).
- \`requiresWhiteGlove\` — the platform, through 7.7's Extension; never the storefront.
- \`owner\` — the plumbing's stamp on every new bag; 7.6's trigger condition keys on it.

> **Show:** type *Gift message (optional)* at checkout, pay, and the confirmation shows it; in Merchant Center the order's Custom Fields panel lists all three.

> **Ask:** why \`order\` and not \`cart\` in \`resourceTypeIds\`?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="20" width="160" height="70" rx="12" fill="#6359FF" />
  <text x="100" y="45" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">the shopper</text>
  <text x="100" y="63" text-anchor="middle" fill="#e6e6ff" font-size="11">checkout · task 7.1</text>
  <text x="100" y="81" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Roboto Mono, monospace">giftMessage</text>
  <rect x="200" y="20" width="160" height="70" rx="12" fill="#FFC806" />
  <text x="280" y="45" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">the platform</text>
  <text x="280" y="63" text-anchor="middle" fill="#191741" font-size="11">via 7.7's Extension</text>
  <text x="280" y="81" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">requiresWhiteGlove</text>
  <rect x="380" y="20" width="160" height="70" rx="12" fill="#0BBFBF" />
  <text x="460" y="45" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">the plumbing</text>
  <text x="460" y="63" text-anchor="middle" fill="#191741" font-size="11">stamped on every new bag</text>
  <text x="460" y="81" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">owner</text>
  <line x1="100" y1="90" x2="100" y2="130" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <line x1="280" y1="90" x2="280" y2="130" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <line x1="460" y1="90" x2="460" y2="130" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="20" y="134" width="520" height="44" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="161" text-anchor="middle" fill="#191741" font-size="13" font-family="Roboto Mono, monospace">cart.custom.fields { giftMessage, requiresWhiteGlove, owner }</text>
  <line x1="147" y1="178" x2="147" y2="214" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <line x1="412" y1="178" x2="412" y2="214" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="20" y="218" width="255" height="62" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="147" y="241" text-anchor="middle" fill="#6359FF" font-size="12">queryable</text>
  <text x="147" y="263" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">custom(fields(owner = "…"))</text>
  <rect x="285" y="218" width="255" height="62" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="412" y="241" text-anchor="middle" fill="#6359FF" font-size="12">predicate-able</text>
  <text x="412" y="263" text-anchor="middle" fill="#191741" font-size="11">7.6 trigger condition · S4 bundle-saving discount</text>
</svg>
:::
`,Qm=`---
task: extensibility.Session 7.10
summary: Pre-built — study it: the tunnel URL, the shared-secret filter on /api/extensions/** (a wrong secret is a 401, and any non-200/400 status fails the client's write, loudly), the X-Correlation-ID captured into the log context and echoed back, the \`owner\` stamp on every new cart, and the 60-second config cache 7.7 reads from.
file: extensibility/…/web/ExtensionSecretFilter.java · web/CorrelationIdFilter.java · platform/…/identity/OwnerStamp.java · application/FeatureFlagService.java
method: GET /api/extensibility/intake → ExtensionRegistrationService.intake()
prompt: |
  In bff-java, study the extensibility module's pre-built intake plumbing — do not change it. Read
  web/ExtensionSecretFilter and web/CorrelationIdFilter (both apply to /api/extensions/** only), OwnerStamp in the
  platform module, FeatureFlagService.cached() and ExtensionRegistrationService.intake().
  Explain to me, in that order: why a wrong shared secret must answer 401 and what the platform does with any status
  other than 200/201/400; what X-Correlation-ID is captured into and why it is echoed back; when the cart module
  stamps owner on a new cart and what happens when the order-extras Type does not exist; and why the cart-rules
  handler reads the flags through a 60-second cache instead of the API.
  Then run Try It for task 7.10 in Commerce Canvas and tell me what the note in the response says, and what Session 8
  replaces in this picture.
---

## Concept · Authenticate the caller

- The platform calls \`/api/extensions/**\` over the public internet, carrying the \`AuthorizationHeader\` secret 7.6 registered.
- The filter compares it in constant time; wrong or missing → **401**.
- 401 is "any other status": the write fails loudly instead of silently skipping your rules.

> **Docs:** [API Extensions — Request headers](https://docs.commercetools.com/api/projects/api-extensions#request-headers-for-api-extensions) · [Tracing requests with correlation IDs](https://docs.commercetools.com/guides/extensions#tracing-requests-with-correlation-ids)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="130" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="85" y="54" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">commercetools</text>
  <text x="85" y="74" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">Authorization: &lt;secret&gt;</text>
  <text x="85" y="90" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">X-Correlation-ID: …</text>
  <line x1="150" y1="70" x2="180" y2="70" stroke="#FFC806" stroke-width="2" marker-end="url(#a)" />
  <rect x="184" y="42" width="80" height="56" rx="10" fill="#6359FF" />
  <text x="224" y="66" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">tunnel</text>
  <text x="224" y="84" text-anchor="middle" fill="#e6e6ff" font-size="9">EXTENSION_PUBLIC_URL</text>
  <line x1="264" y1="70" x2="294" y2="70" stroke="#FFC806" stroke-width="2" marker-end="url(#a)" />
  <rect x="298" y="30" width="110" height="80" rx="12" fill="#0BBFBF" />
  <text x="353" y="52" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">CorrelationIdFilter</text>
  <text x="353" y="70" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">@Order(5)</text>
  <text x="353" y="88" text-anchor="middle" fill="#191741" font-size="9">MDC correlationId · echo</text>
  <line x1="408" y1="70" x2="438" y2="70" stroke="#FFC806" stroke-width="2" marker-end="url(#a)" />
  <rect x="442" y="30" width="98" height="80" rx="12" fill="#0BBFBF" />
  <text x="491" y="52" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">SecretFilter</text>
  <text x="491" y="70" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">@Order(10)</text>
  <text x="491" y="88" text-anchor="middle" fill="#191741" font-size="9">constant-time compare</text>
  <path d="M491,110 L491,146" fill="none" stroke="#0BBFBF" stroke-width="2" marker-end="url(#a)" />
  <rect x="380" y="150" width="160" height="50" rx="12" fill="#6359FF" />
  <text x="460" y="171" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">CartRulesHandler (7.7)</text>
  <text x="460" y="189" text-anchor="middle" fill="#e6e6ff" font-size="10">200 { actions } · 400 { errors }</text>
  <path d="M442,96 L330,96 L330,146" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a)" />
  <rect x="200" y="150" width="160" height="50" rx="12" fill="#FFC806" />
  <text x="280" y="171" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">wrong or missing secret</text>
  <text x="280" y="189" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">401 · never reaches the handler</text>
  <path d="M280,200 L280,230" fill="none" stroke="#FFC806" stroke-width="2" marker-end="url(#a)" />
  <rect x="20" y="234" width="520" height="50" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="254" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">to the platform 401 is "any other status" → the client's write fails: 502 ExtensionBadResponse</text>
  <text x="280" y="272" text-anchor="middle" fill="#6359FF" font-size="10">loud, by design — a silent skip would mean carts saved without your rules</text>
  <text x="110" y="200" text-anchor="middle" fill="#6F6D8F" font-size="10">no secret configured →</text>
  <text x="110" y="214" text-anchor="middle" fill="#6F6D8F" font-size="10">open, warns once (dev only)</text>
</svg>
:::

## Concept · Correlate, stamp, cache

- \`X-Correlation-ID\` → log context, echoed back: trace a Merchant Center write to one handler call.
- \`OwnerStamp\`: new carts get \`order-extras\` + \`owner\` when the Type exists; graceful when absent.
- \`cached()\`: a 60-second copy of the flags — nothing on the hot path.

> **Show:** \`GET /api/extensibility/intake\` → \`note: "Ready: …"\` with \`publicUrl\`, \`secretConfigured\`, \`owner\`, \`typeExists\`. Try It on 7.7 answers 401 — Canvas does not send the secret.

> **Ask:** Session 8 swaps the tunnel for a Connect Service app. What else in this picture changes?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="20" width="166" height="130" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="103" y="44" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700">correlate</text>
  <text x="103" y="68" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">X-Correlation-ID</text>
  <text x="103" y="86" text-anchor="middle" fill="#6359FF" font-size="10">→ MDC correlationId</text>
  <text x="103" y="102" text-anchor="middle" fill="#6359FF" font-size="10">→ echoed in the response</text>
  <text x="103" y="128" text-anchor="middle" fill="#6F6D8F" font-size="10">a failed MC cart write →</text>
  <text x="103" y="142" text-anchor="middle" fill="#6F6D8F" font-size="10">the exact log line</text>
  <rect x="197" y="20" width="166" height="130" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="44" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700">stamp</text>
  <text x="280" y="68" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">CtCartRepository.create</text>
  <text x="280" y="86" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">custom { order-extras,</text>
  <text x="280" y="102" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">  fields: { owner } }</text>
  <text x="280" y="128" text-anchor="middle" fill="#6F6D8F" font-size="10">only if typeExists() —</text>
  <text x="280" y="142" text-anchor="middle" fill="#6F6D8F" font-size="10">S1–S6 starters keep working</text>
  <rect x="374" y="20" width="166" height="130" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="457" y="44" text-anchor="middle" fill="#0BBFBF" font-size="12" font-weight="700">cache</text>
  <text x="457" y="68" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">FeatureFlagService.cached()</text>
  <text x="457" y="86" text-anchor="middle" fill="#6359FF" font-size="10">60-s TTL · PUT evicts it</text>
  <text x="457" y="102" text-anchor="middle" fill="#6359FF" font-size="10">read fails → defaults (fail open)</text>
  <text x="457" y="128" text-anchor="middle" fill="#6F6D8F" font-size="10">the 2-s budget forbids</text>
  <text x="457" y="142" text-anchor="middle" fill="#6F6D8F" font-size="10">a read per call</text>
  <rect x="20" y="176" width="220" height="60" rx="12" fill="#6359FF" />
  <text x="130" y="200" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">today · a tunnel</text>
  <text x="130" y="220" text-anchor="middle" fill="#e6e6ff" font-size="10">EXTENSION_PUBLIC_URL · your laptop</text>
  <line x1="240" y1="206" x2="316" y2="206" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <text x="278" y="198" text-anchor="middle" fill="#6F6D8F" font-size="10">Session 8</text>
  <rect x="320" y="176" width="220" height="60" rx="12" fill="#0BBFBF" />
  <text x="430" y="200" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">a Connect Service app</text>
  <text x="430" y="220" text-anchor="middle" fill="#191741" font-size="10">the same handler, with an uptime</text>
  <rect x="20" y="250" width="520" height="34" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="272" text-anchor="middle" fill="#6359FF" font-size="11">secret check · correlation · owner stamp · cache — carried over unchanged; only where the code is reachable moves</text>
</svg>
:::
`,Jm=`---
task: extensibility.Session 7.2
summary: Read one Custom Object by container + key — a 404 is not an error here, it means 'not configured yet' — and POST a CustomObjectDraft, create-or-update by container + key, where passing the current version makes a stale write a 409 instead of a silent overwrite.
file: extensibility/…/infrastructure/CtCustomObjectRepository.java
method: get(String container, String key) · upsert(String container, String key, Long version, Object value)
prompt: |
  In bff-java, implement CtCustomObjectRepository.get(container, key) and upsert(container, key, version, value) in
  the extensibility module's infrastructure layer.
  get: fetch the Custom Object by container and key and return Optional.of(the raw SDK CustomObject); catch only
  NotFoundException and return Optional.empty() — "not configured yet" is not an error here.
  upsert: POST a CustomObjectDraft with container, key and value, setting version only when it is non-null, and
  return the raw SDK CustomObject.
  POST /custom-objects is create-or-update by container + key; the version is what turns a stale write into a 409
  instead of a silent overwrite, so never drop it.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 7.2 in Commerce Canvas: GET the flags, PUT { "subscriptionsEnabled": false }, and tell
  me what each response shows.
---

## Concept · Config beside the resources

- \`container\` · \`key\` · any JSON \`value\` · \`version\` — namespaced data that fits no standard field.
- **API-only**: no Merchant Center editor; you build the screen (today, Canvas).
- Same mechanism as your \`training-progress\` since Session 1 — and 7.4's checkpoint.

> **Docs:** [Custom Objects](https://docs.commercetools.com/api/projects/custom-objects)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="130" y="36" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">THE RESOURCES</text>
  <rect x="40" y="50" width="180" height="36" rx="10" fill="#6359FF" />
  <text x="130" y="73" text-anchor="middle" fill="#ffffff" font-size="13">Carts</text>
  <rect x="40" y="94" width="180" height="36" rx="10" fill="#6359FF" />
  <text x="130" y="117" text-anchor="middle" fill="#ffffff" font-size="13">Orders</text>
  <rect x="40" y="138" width="180" height="36" rx="10" fill="#6359FF" />
  <text x="130" y="161" text-anchor="middle" fill="#ffffff" font-size="13">Products</text>
  <rect x="40" y="182" width="180" height="36" rx="10" fill="#6359FF" />
  <text x="130" y="205" text-anchor="middle" fill="#ffffff" font-size="13">Customers</text>
  <text x="130" y="240" text-anchor="middle" fill="#6F6D8F" font-size="11">typed · modelled · Merchant Center</text>
  <text x="400" y="36" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">BESIDE THEM</text>
  <rect x="260" y="50" width="280" height="168" rx="16" fill="#0BBFBF" />
  <text x="276" y="76" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">lhc-config / feature-flags</text>
  <text x="524" y="76" text-anchor="end" fill="#0b3b3b" font-size="11" font-family="Roboto Mono, monospace">version: 3</text>
  <text x="276" y="104" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">{ subscriptionsEnabled: true,</text>
  <text x="276" y="124" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">  maxQuantityPerLine: 10,</text>
  <text x="276" y="144" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">  whiteGloveThresholdCents: 40000,</text>
  <text x="276" y="164" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">  whiteGloveFeeCents: 4900 }</text>
  <text x="276" y="200" fill="#0b3b3b" font-size="11">any JSON · API-only · you build the screen</text>
  <rect x="260" y="232" width="280" height="48" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="400" y="252" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">lhc-processed / order-consumer  (7.4)</text>
  <text x="400" y="270" text-anchor="middle" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">training-progress / &lt;you&gt;  (Session 1)</text>
</svg>
:::

## Concept · Create-or-update, with a version

- Same container + key → update; a new key → create. One \`POST\`.
- Pass the current \`version\`: a stale write is a **409**. Omit it: last write wins.
- A \`GET\` 404 means "not configured yet" — return empty, fall back to defaults.

> **Show:** \`PUT { "subscriptionsEnabled": false }\`, refresh the PDP: *Subscribe & Save is currently unavailable.* No deploy, no restart. Flip it back.

> **Ask:** what would you lose by storing this in a properties file? In a database of your own?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="140" height="64" rx="12" fill="#6359FF" />
  <text x="90" y="54" text-anchor="middle" fill="#ffffff" font-size="13">Canvas</text>
  <text x="90" y="74" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">PUT { subscriptionsEnabled: false }</text>
  <line x1="160" y1="62" x2="196" y2="62" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="200" y="30" width="150" height="64" rx="12" fill="#6359FF" />
  <text x="275" y="54" text-anchor="middle" fill="#ffffff" font-size="13">BFF · merge-patch</text>
  <text x="275" y="74" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">value + current version</text>
  <line x1="350" y1="62" x2="386" y2="62" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="390" y="30" width="150" height="64" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="465" y="54" text-anchor="middle" fill="#191741" font-size="13">commercetools</text>
  <text x="465" y="74" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">POST /custom-objects</text>
  <path d="M430,94 L430,130 L150,130 L150,160" fill="none" stroke="#0BBFBF" stroke-width="2" marker-end="url(#a)" />
  <path d="M500,94 L500,160" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a)" />
  <rect x="20" y="164" width="260" height="54" rx="12" fill="#0BBFBF" />
  <text x="150" y="186" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">200 · saved · version 4</text>
  <text x="150" y="205" text-anchor="middle" fill="#191741" font-size="11">the version matched</text>
  <rect x="300" y="164" width="240" height="54" rx="12" fill="#FFC806" />
  <text x="420" y="186" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">409 ConcurrentModification</text>
  <text x="420" y="205" text-anchor="middle" fill="#191741" font-size="11">stale version: re-read, patch again</text>
  <line x1="150" y1="218" x2="150" y2="246" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="20" y="250" width="260" height="36" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="150" y="273" text-anchor="middle" fill="#191741" font-size="11">PDP: "Subscribe &amp; Save is currently unavailable."</text>
  <text x="420" y="273" text-anchor="middle" fill="#6F6D8F" font-size="11">no deploy · no restart · 10-s poll</text>
</svg>
:::
`,Wm=`---
task: extensibility.Session 7.3
summary: Query the Project's append-only event log for one resource — a \`resource(typeId = :rt and id = :id) and type in (...)\` predicate, sorted \`sequenceNumber asc\` — and return the raw Messages.
file: extensibility/…/infrastructure/CtMessageRepository.java
method: byResource(String resourceTypeId, String resourceId, List<String> types, int limit)
prompt: |
  In bff-java, implement CtMessageRepository.byResource(resourceTypeId, resourceId, types, limit) in the
  extensibility module's infrastructure layer.
  GET the Project's Messages with the predicate \`resource(typeId = :rt and id = :id) and type in (...)\` — bind rt
  and id as predicate variables and inline the quoted type names with the existing quoted(types) helper — sorted
  \`sequenceNumber asc\`, limited to limit, and return the raw Message list from the paged response.
  Sort by sequenceNumber, never by createdAt: it is the per-resource order the platform guarantees.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 7.3 in Commerce Canvas with an order number from Session 6 and tell me what the
  response shows.
---

## Concept · The platform keeps a log. Read it.

- Messages are **opt-in** (\`changeMessagesConfiguration\`), **not retroactive**, append-only; kept 15 days here.
- Each carries \`type\`, \`resource\`, \`resourceVersion\` and \`sequenceNumber\` — 1, 2, 3… **per resource**.
- Pull it here; a Subscription pushes **the same Message**.

> **Docs:** [Messages](https://docs.commercetools.com/api/projects/messages) · [Query Messages](https://docs.commercetools.com/api/projects/messages#query-messages)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <text x="280" y="34" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">ONE ORDER · APPEND-ONLY</text>
  <rect x="20" y="56" width="118" height="84" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="79" y="78" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">OrderCreated</text>
  <text x="79" y="104" text-anchor="middle" fill="#0BBFBF" font-size="18" font-weight="700">#1</text>
  <text x="79" y="128" text-anchor="middle" fill="#6359FF" font-size="10">resourceVersion 1</text>
  <line x1="138" y1="98" x2="156" y2="98" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="160" y="56" width="118" height="84" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="219" y="72" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">OrderPayment</text>
  <text x="219" y="84" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">StateChanged · Paid</text>
  <text x="219" y="108" text-anchor="middle" fill="#0BBFBF" font-size="18" font-weight="700">#2</text>
  <text x="219" y="128" text-anchor="middle" fill="#6359FF" font-size="10">resourceVersion 3</text>
  <line x1="278" y1="98" x2="296" y2="98" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="300" y="56" width="118" height="84" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="359" y="72" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">OrderState</text>
  <text x="359" y="84" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">Transition · Picked</text>
  <text x="359" y="108" text-anchor="middle" fill="#0BBFBF" font-size="18" font-weight="700">#3</text>
  <text x="359" y="128" text-anchor="middle" fill="#6359FF" font-size="10">resourceVersion 5</text>
  <line x1="418" y1="98" x2="436" y2="98" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="440" y="56" width="100" height="84" rx="12" fill="#FFFFFF" stroke="#C9C6E0" stroke-dasharray="5 4" />
  <text x="490" y="72" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">OrderShipment</text>
  <text x="490" y="84" text-anchor="middle" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">StateChanged</text>
  <text x="490" y="108" text-anchor="middle" fill="#6F6D8F" font-size="18" font-weight="700">#4</text>
  <text x="490" y="128" text-anchor="middle" fill="#6F6D8F" font-size="10">later</text>
  <path d="M200,140 L200,176 L120,176 L120,206" fill="none" stroke="#6359FF" stroke-width="2" marker-end="url(#a)" />
  <path d="M360,140 L360,176 L440,176 L440,206" fill="none" stroke="#FFC806" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a)" />
  <rect x="20" y="210" width="200" height="56" rx="12" fill="#6359FF" />
  <text x="120" y="232" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">PULL · today (7.3)</text>
  <text x="120" y="252" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">GET /messages?where=…</text>
  <rect x="340" y="210" width="200" height="56" rx="12" fill="#FFC806" />
  <text x="440" y="232" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">PUSH · a Subscription</text>
  <text x="440" y="252" text-anchor="middle" fill="#191741" font-size="11">the identical payload (7.4 · S9)</text>
  <text x="280" y="290" text-anchor="middle" fill="#6F6D8F" font-size="11">opt-in · not retroactive · deleteDaysAfterCreation 15</text>
</svg>
:::

## Concept · One resource, in sequence

- Predicate on \`resource(typeId, id)\` and \`type in (…)\`; sort \`sequenceNumber asc\`.
- The service resolves \`orderNumber\` itself and checks ownership: someone else's order is a **404**, never 403.
- \`sequenceNumber\` orders within one resource — never across the log.

> **Show:** Canvas \`PUT /api/orders/{n}/state { "state": "order-picked" }\`, refresh the confirmation: *What happens next* gains *Moved to Picked* with a timestamp.

> **Ask:** an order placed before Messages were enabled — what does its timeline show, and what is the deployment lesson?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="250" height="150" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="54" fill="#6F6D8F" font-size="11" letter-spacing="2">THE QUERY</text>
  <text x="36" y="80" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">where =</text>
  <text x="36" y="98" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  resource(typeId = :rt and id = :id)</text>
  <text x="36" y="116" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  and type in ("OrderCreated", …)</text>
  <text x="36" y="142" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">sort = <tspan fill="#0BBFBF" font-weight="700">sequenceNumber asc</tspan></text>
  <text x="36" y="164" fill="#6F6D8F" font-size="11">rt = "order" · id from the order the service read</text>
  <line x1="270" y1="105" x2="306" y2="105" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="310" y="30" width="230" height="200" rx="14" fill="#ffffff" stroke="#C9C6E0" />
  <text x="326" y="54" fill="#191741" font-size="12" font-weight="700">What happens next</text>
  <circle cx="334" cy="84" r="6" fill="#0BBFBF" />
  <text x="350" y="80" fill="#191741" font-size="12">Order placed</text>
  <text x="350" y="94" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">OrderCreated · #1</text>
  <line x1="334" y1="90" x2="334" y2="116" stroke="#c2c2ff" stroke-width="2" />
  <circle cx="334" cy="122" r="6" fill="#0BBFBF" />
  <text x="350" y="118" fill="#191741" font-size="12">Payment paid</text>
  <text x="350" y="132" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">OrderPaymentStateChanged · #2</text>
  <line x1="334" y1="128" x2="334" y2="154" stroke="#c2c2ff" stroke-width="2" />
  <circle cx="334" cy="160" r="6" fill="#FFC806" />
  <text x="350" y="156" fill="#191741" font-size="12" font-weight="700">Moved to Picked</text>
  <text x="350" y="170" fill="#6F6D8F" font-size="10" font-family="Roboto Mono, monospace">OrderStateTransition · #3</text>
  <rect x="326" y="186" width="198" height="26" rx="8" fill="#FFC806" />
  <text x="425" y="203" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">just appeared · the page learned</text>
  <rect x="20" y="200" width="250" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="145" y="224" text-anchor="middle" fill="#6359FF" font-size="11">ownership check first: not yours → 404</text>
  <text x="280" y="276" text-anchor="middle" fill="#6F6D8F" font-size="11">sequenceNumber: per resource, never across the log</text>
</svg>
:::
`,$m=`---
task: extensibility.Session 7.4
summary: The idempotent consumer — read the checkpoint, pull the Messages newer than it, skip what you have already seen (by message id AND by sequenceNumber per resource), act once on each new one, and advance the checkpoint only after success, stopping at the first failure so nothing is skipped.
file: extensibility/…/application/EventConsumerService.java
method: processNext(int limit)
prompt: |
  In bff-java, implement EventConsumerService.processNext(limit) in the extensibility module's application layer.
  Load the checkpoint (Custom Object lhc-processed / order-consumer; absent → since = now − 1 day), pull the
  OrderPaymentStateChanged and OrderCreated Messages newer than since (messages.newerThan, createdAt asc), skip any
  Message whose id is in seenIds or whose sequenceNumber is behind that resource's last one, and for each order
  that became Paid read the order, treat "already order-picked" as done, move an order with no State to
  order-placed first, then to order-picked — through OrderStateClient, the BFF's own
  PUT /api/orders/{orderNumber}/state, never by importing the order module.
  Record each Message in the checkpoint as you go, stop the batch at the first failure, and upsert the checkpoint
  with its version only after the batch; running processNext twice must transition once.
  Before coding, propose how you will decide where the checkpoint lives and what "handled" means, and wait for my
  answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 7.4 in Commerce Canvas twice on a freshly paid order and tell me what each response
  shows.
---

## Concept · Subscriptions: the delivery we can't provision here

- Pushes Messages to one of **seven cloud queues** — no HTTP destination, unlike an Extension.
- Queue + credentials the platform publishes with = a cloud account nobody here has.
- **At-least-once, unordered.** Today we poll the same Messages; Session 9 pushes them.

> **Docs:** [Subscriptions — delivery guarantees](https://docs.commercetools.com/api/projects/subscriptions#delivery-guarantees)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="20" width="290" height="176" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="44" fill="#6F6D8F" font-size="11" letter-spacing="2">SUBSCRIPTIONDRAFT</text>
  <text x="36" y="68" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">key: "lhc-order-events"</text>
  <text x="36" y="86" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">destination: { type: "GoogleCloudPubSub",</text>
  <text x="36" y="104" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  projectId, topic: "lhc-orders" }</text>
  <text x="36" y="128" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">messages: [{ resourceTypeId: "order",</text>
  <text x="36" y="146" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  types: [OrderCreated, OrderPaymentStateChanged,</text>
  <text x="36" y="164" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">          OrderStateTransition] }]</text>
  <text x="165" y="120" text-anchor="middle" fill="#FFC806" font-size="30" font-weight="700" opacity="0.55" transform="rotate(-18 165 120)" letter-spacing="4">NEVER SENT</text>
  <text x="440" y="44" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">DESTINATIONS</text>
  <rect x="330" y="56" width="100" height="24" rx="8" fill="#6359FF" /><text x="380" y="72" text-anchor="middle" fill="#ffffff" font-size="11">AWS SQS</text>
  <rect x="440" y="56" width="100" height="24" rx="8" fill="#6359FF" /><text x="490" y="72" text-anchor="middle" fill="#ffffff" font-size="11">AWS SNS</text>
  <rect x="330" y="86" width="100" height="24" rx="8" fill="#6359FF" /><text x="380" y="102" text-anchor="middle" fill="#ffffff" font-size="11">EventBridge</text>
  <rect x="440" y="86" width="100" height="24" rx="8" fill="#6359FF" /><text x="490" y="102" text-anchor="middle" fill="#ffffff" font-size="11">Service Bus</text>
  <rect x="330" y="116" width="100" height="24" rx="8" fill="#6359FF" /><text x="380" y="132" text-anchor="middle" fill="#ffffff" font-size="11">Event Grid</text>
  <rect x="440" y="116" width="100" height="24" rx="8" fill="#6359FF" /><text x="490" y="132" text-anchor="middle" fill="#ffffff" font-size="11">Pub/Sub</text>
  <rect x="330" y="146" width="100" height="24" rx="8" fill="#6359FF" /><text x="380" y="162" text-anchor="middle" fill="#ffffff" font-size="11">Confluent</text>
  <rect x="440" y="146" width="100" height="24" rx="8" fill="none" stroke="#FFC806" stroke-dasharray="4 3" /><text x="490" y="162" text-anchor="middle" fill="#FFC806" font-size="11">HTTP</text>
  <line x1="446" y1="152" x2="534" y2="164" stroke="#FFC806" stroke-width="2" />
  <text x="440" y="190" text-anchor="middle" fill="#6F6D8F" font-size="10">a queue + credentials = a cloud account</text>
  <rect x="20" y="214" width="245" height="66" rx="12" fill="#0BBFBF" />
  <text x="142" y="238" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">today · poll (7.4)</text>
  <text x="142" y="258" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">GET /messages · createdAt &gt; :since</text>
  <line x1="265" y1="247" x2="291" y2="247" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="295" y="214" width="245" height="66" rx="12" fill="none" stroke="#0BBFBF" stroke-width="2" stroke-dasharray="6 4" />
  <text x="417" y="238" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">Session 9 · push</text>
  <text x="417" y="258" text-anchor="middle" fill="#6359FF" font-size="11">Connect provisions the queue · same handler</text>
</svg>
:::

## Concept · The checkpoint is the consumer's memory

- \`lhc-processed / order-consumer\`: \`{ since, seenIds, lastSequenceByResource }\` — a Custom Object (7.2).
- Dedupe **twice**: by Message \`id\`, and by effect — read the order, never infer "done" from a 409.
- Advance **after** success; stop at the first failure so nothing is skipped.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="96" height="66" rx="12" fill="#6359FF" />
  <text x="68" y="62" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">1 · read</text>
  <text x="68" y="78" text-anchor="middle" fill="#e6e6ff" font-size="10">checkpoint</text>
  <text x="68" y="94" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">since · seenIds</text>
  <line x1="116" y1="73" x2="130" y2="73" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="132" y="40" width="96" height="66" rx="12" fill="#6359FF" />
  <text x="180" y="62" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">2 · pull</text>
  <text x="180" y="78" text-anchor="middle" fill="#e6e6ff" font-size="10">Messages</text>
  <text x="180" y="94" text-anchor="middle" fill="#e6e6ff" font-size="9" font-family="Roboto Mono, monospace">createdAt &gt; :since</text>
  <line x1="228" y1="73" x2="242" y2="73" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="244" y="40" width="96" height="66" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="292" y="62" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">3 · seen?</text>
  <text x="292" y="78" text-anchor="middle" fill="#6359FF" font-size="10">by id · by sequence</text>
  <text x="292" y="94" text-anchor="middle" fill="#FFC806" font-size="10">yes → skip</text>
  <line x1="340" y1="73" x2="354" y2="73" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="356" y="40" width="96" height="66" rx="12" fill="#0BBFBF" />
  <text x="404" y="62" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">4 · handle once</text>
  <text x="404" y="78" text-anchor="middle" fill="#191741" font-size="10">read the order first</text>
  <text x="404" y="94" text-anchor="middle" fill="#191741" font-size="10">already picked → skip</text>
  <line x1="452" y1="73" x2="466" y2="73" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="468" y="40" width="72" height="66" rx="12" fill="#6359FF" />
  <text x="504" y="62" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">5 · record</text>
  <text x="504" y="78" text-anchor="middle" fill="#e6e6ff" font-size="10">id · sequence</text>
  <text x="504" y="94" text-anchor="middle" fill="#e6e6ff" font-size="10">· since</text>
  <path d="M504,106 L504,130 L292,130 L292,110" fill="none" stroke="#8C8AAE" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a)" />
  <text x="398" y="146" text-anchor="middle" fill="#6F6D8F" font-size="10">next Message</text>
  <path d="M404,106 L404,186" fill="none" stroke="#FFC806" stroke-width="2" marker-end="url(#a)" />
  <rect x="20" y="176" width="300" height="48" rx="12" fill="#0BBFBF" />
  <text x="170" y="196" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">after the batch · 6 · save the checkpoint</text>
  <text x="170" y="214" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">upsert(lhc-processed, order-consumer, version, …)</text>
  <rect x="340" y="190" width="200" height="48" rx="12" fill="#FFC806" />
  <text x="440" y="210" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">failure → stop the batch</text>
  <text x="440" y="228" text-anchor="middle" fill="#191741" font-size="10">the checkpoint stays where it was</text>
  <text x="280" y="268" text-anchor="middle" fill="#6359FF" font-size="11">a crash between 4 and 6 replays one Message — step 4 absorbs it</text>
  <text x="280" y="288" text-anchor="middle" fill="#6F6D8F" font-size="11">at-least-once done right; exactly-once is a lie you tell yourself</text>
</svg>
:::

## Concept · Walk the machine, through the BFF's own door

- A Checkout-created order carries **no custom State**: \`(none) → order-placed → order-picked\`.
- Transition over \`PUT /api/orders/{orderNumber}/state\` — module independence; Session 9's Event app uses the same seam.
- A poll today, a push in Session 9 — **none** of this logic changes.

> **Show:** \`/process\` → \`handled: 1\`; again → \`handled: 0\`; \`DELETE /api/events/checkpoint\`, then \`/process\` → \`skipped: n\`. The confirmation shows *Moved to Placed*, then *Moved to Picked*, with nobody clicking.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <text x="280" y="30" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">THE ORDER'S STATE</text>
  <rect x="20" y="48" width="150" height="60" rx="12" fill="none" stroke="#8C8AAE" stroke-width="2" stroke-dasharray="6 4" />
  <text x="95" y="73" text-anchor="middle" fill="#6359FF" font-size="13" font-family="Roboto Mono, monospace">(none)</text>
  <text x="95" y="93" text-anchor="middle" fill="#6F6D8F" font-size="10">Checkout left it here</text>
  <line x1="170" y1="78" x2="201" y2="78" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="205" y="48" width="150" height="60" rx="12" fill="#6359FF" />
  <text x="280" y="73" text-anchor="middle" fill="#ffffff" font-size="13" font-family="Roboto Mono, monospace">order-placed</text>
  <text x="280" y="93" text-anchor="middle" fill="#e6e6ff" font-size="10">the first hop</text>
  <line x1="355" y1="78" x2="386" y2="78" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="390" y="48" width="150" height="60" rx="12" fill="#0BBFBF" />
  <text x="465" y="73" text-anchor="middle" fill="#191741" font-size="13" font-weight="700" font-family="Roboto Mono, monospace">order-picked</text>
  <text x="465" y="93" text-anchor="middle" fill="#191741" font-size="10">the one we came for</text>
  <text x="280" y="134" text-anchor="middle" fill="#FFC806" font-size="11">skip a step and the machine answers 409 — a refusal, not "already done"</text>
  <rect x="20" y="160" width="190" height="64" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="115" y="184" text-anchor="middle" fill="#191741" font-size="12">EventConsumerService</text>
  <text x="115" y="204" text-anchor="middle" fill="#6359FF" font-size="10">today · a poll</text>
  <rect x="20" y="232" width="190" height="52" rx="12" fill="none" stroke="#c2c2ff" stroke-width="2" stroke-dasharray="6 4" />
  <text x="115" y="254" text-anchor="middle" fill="#191741" font-size="12">Session 9 · Event app</text>
  <text x="115" y="272" text-anchor="middle" fill="#6359FF" font-size="10">a push, from outside the BFF</text>
  <path d="M210,192 L300,192 L300,222 L346,222" fill="none" stroke="#FFC806" stroke-width="2" marker-end="url(#a)" />
  <path d="M210,258 L300,258 L300,222" fill="none" stroke="#FFC806" stroke-width="2" />
  <rect x="350" y="196" width="190" height="52" rx="12" fill="#6359FF" />
  <text x="445" y="217" text-anchor="middle" fill="#ffffff" font-size="11" font-family="Roboto Mono, monospace">PUT /api/orders/{n}/state</text>
  <text x="445" y="236" text-anchor="middle" fill="#e6e6ff" font-size="10">the order module (S6) · the same door</text>
  <text x="445" y="276" text-anchor="middle" fill="#6F6D8F" font-size="11">no import of \`order\` — module independence</text>
</svg>
:::

## Concept · Decisions you own

- **Where the checkpoint lives** — Custom Object · memory · a field on the resource.
- **What "handled" means** — transitioned · transitioned-or-already-there · attempted.
- **Ordering** per resource by \`sequenceNumber\`, and **failure policy**: stop the batch, or dead-letter and continue.

> **Ask:** without a checkpoint, \`/process\` twice re-picks and S6's idempotent transition quietly absorbs it. What if the handler were "send an e-mail"?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="255" height="124" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="44" fill="#FFC806" font-size="12" font-weight="700">1 · where the checkpoint lives</text>
  <rect x="36" y="56" width="223" height="22" rx="6" fill="#0BBFBF" /><text x="46" y="71" fill="#191741" font-size="11">Custom Object — survives restarts</text>
  <text x="46" y="100" fill="#6359FF" font-size="11">memory — replays; the effect-dedupe saves you</text>
  <text x="46" y="122" fill="#6359FF" font-size="11">a field on the resource — a write per message</text>
  <rect x="285" y="20" width="255" height="124" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="301" y="44" fill="#FFC806" font-size="12" font-weight="700">2 · what "handled" means</text>
  <rect x="301" y="56" width="223" height="22" rx="6" fill="#0BBFBF" /><text x="311" y="71" fill="#191741" font-size="11">transitioned — an effect happened</text>
  <text x="311" y="100" fill="#6359FF" font-size="11">transitioned-or-already-there</text>
  <text x="311" y="122" fill="#6359FF" font-size="11">attempted</text>
  <rect x="20" y="156" width="255" height="124" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="180" fill="#FFC806" font-size="12" font-weight="700">3 · ordering</text>
  <rect x="36" y="192" width="223" height="22" rx="6" fill="#0BBFBF" /><text x="46" y="207" fill="#191741" font-size="11">per resource by sequenceNumber</text>
  <text x="46" y="236" fill="#6359FF" font-size="11">global by createdAt — two orders interleave</text>
  <text x="46" y="258" fill="#6359FF" font-size="11">harmlessly; one order's must not reorder</text>
  <rect x="285" y="156" width="255" height="124" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="301" y="180" fill="#FFC806" font-size="12" font-weight="700">4 · failure policy</text>
  <rect x="301" y="192" width="223" height="22" rx="6" fill="#0BBFBF" /><text x="311" y="207" fill="#191741" font-size="11">stop at the first failure — preserves order</text>
  <text x="311" y="236" fill="#6359FF" font-size="11">skip and continue — dead-letter the failure</text>
  <text x="311" y="258" fill="#6F6D8F" font-size="10">teal = the reference's choice</text>
</svg>
:::
`,t2=`---
task: extensibility.Session 7.6
summary: Register the Extension — extensions().post(draft); the service built the draft, read it first, especially the trigger condition.
file: extensibility/…/infrastructure/CtExtensionRepository.java
method: create(ExtensionDraft draft)
prompt: |
  In bff-java, implement CtExtensionRepository.create(draft) in the extensibility module's infrastructure layer.
  POST the given ExtensionDraft to the Project's extensions endpoint and return the raw SDK Extension. The service
  already built the draft — key lhc-cart-rules-<you>, an HTTP destination at EXTENSION_PUBLIC_URL + /api/extensions/cart
  with AuthorizationHeader authentication, a cart Create/Update trigger with a condition, timeoutInMs 2000 — so read
  ExtensionRegistrationService.draft() and condition() before you write the one line.
  Never change the condition: it guards custom is defined before fields(owner), and scopes the Extension to my own
  carts on a Project the whole room shares.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 7.6 in Commerce Canvas (the tunnel must be up and EXTENSION_PUBLIC_URL set) and tell me
  what the response shows, including the trigger condition.
---

## Concept · The platform calls you — before it saves

- Every client — storefront, **Merchant Center**, imports — reaches your endpoint before the write persists.
- \`400 { errors }\` rejects with *your* words; \`200 { actions }\` enriches (≤ 100 actions).
- Anything else fails the client's write. 2-s budget, aim 50 ms; 25 per Project.

> **Docs:** [API Extensions](https://docs.commercetools.com/api/projects/api-extensions) · [Response](https://docs.commercetools.com/api/projects/api-extensions#response) · [Time limits](https://docs.commercetools.com/api/projects/api-extensions#time-limits)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker><marker id="y" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#FFC806" /></marker></defs>
  <rect x="20" y="20" width="140" height="56" rx="12" fill="#6359FF" />
  <text x="90" y="42" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="700">any client</text>
  <text x="90" y="62" text-anchor="middle" fill="#e6e6ff" font-size="10">storefront · Merchant Center · import</text>
  <rect x="210" y="20" width="140" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="42" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">commercetools</text>
  <text x="280" y="62" text-anchor="middle" fill="#6359FF" font-size="10">processes the update</text>
  <rect x="400" y="20" width="140" height="56" rx="12" fill="#0BBFBF" />
  <text x="470" y="42" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">your BFF</text>
  <text x="470" y="62" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">/api/extensions/cart</text>
  <line x1="90" y1="76" x2="90" y2="280" stroke="#C9C6E0" stroke-width="1" stroke-dasharray="3 4" />
  <line x1="280" y1="76" x2="280" y2="280" stroke="#C9C6E0" stroke-width="1" stroke-dasharray="3 4" />
  <line x1="470" y1="76" x2="470" y2="280" stroke="#C9C6E0" stroke-width="1" stroke-dasharray="3 4" />
  <line x1="90" y1="104" x2="276" y2="104" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <text x="183" y="98" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">POST /carts/{id} { actions }</text>
  <line x1="280" y1="146" x2="466" y2="146" stroke="#FFC806" stroke-width="2" marker-end="url(#y)" />
  <text x="373" y="140" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">Input { action, resource.obj }</text>
  <text x="373" y="162" text-anchor="middle" fill="#FFC806" font-size="10">platform → you · the cart as it would be saved</text>
  <line x1="470" y1="196" x2="284" y2="196" stroke="#0BBFBF" stroke-width="2" marker-end="url(#a)" />
  <text x="373" y="190" text-anchor="middle" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">200 { actions } · 400 { errors }</text>
  <text x="373" y="212" text-anchor="middle" fill="#6F6D8F" font-size="10">within timeoutInMs 2000 · aim 50 ms</text>
  <line x1="280" y1="240" x2="94" y2="240" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <text x="183" y="234" text-anchor="middle" fill="#6359FF" font-size="10">persisted · or your 400, verbatim</text>
  <rect x="300" y="250" width="240" height="34" rx="8" fill="#FFC806" />
  <text x="420" y="272" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">5xx · timeout · 401 → the client's write fails</text>
</svg>
:::

## Concept · Scoped to your carts: the predicate

- Three outcomes: true, false, *cannot evaluate* — the whole API call fails.
- Guard every optional hop, outermost first: \`custom is defined and custom(fields(owner is defined)) and custom(fields(owner = "<you>"))\`.
- Without it, everyone's cart writes call everyone's laptop.

> **Docs:** [Conditional triggers](https://docs.commercetools.com/api/projects/api-extensions#conditional-triggers)

> **Ask:** what happens to everyone's carts if you register \`custom(fields(owner = "<you>"))\` alone?

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <rect x="20" y="20" width="520" height="92" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="42" fill="#6F6D8F" font-size="11" letter-spacing="2">TRIGGER CONDITION · cart · [Create, Update]</text>
  <text x="36" y="64" fill="#0BBFBF" font-size="12" font-family="Roboto Mono, monospace">custom is defined</text>
  <text x="36" y="82" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">  and custom(fields(owner is defined))</text>
  <text x="36" y="100" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">  and custom(fields(owner = "&lt;you&gt;"))</text>
  <text x="524" y="64" text-anchor="end" fill="#6F6D8F" font-size="10">guard the outermost hop first</text>
  <rect x="20" y="130" width="160" height="96" rx="12" fill="#0BBFBF" />
  <text x="100" y="156" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">TRUE</text>
  <text x="100" y="178" text-anchor="middle" fill="#191741" font-size="11">your cart → your BFF is called</text>
  <text x="100" y="196" text-anchor="middle" fill="#191741" font-size="11">the rules run</text>
  <rect x="200" y="130" width="160" height="96" rx="12" fill="#6359FF" />
  <text x="280" y="156" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="700">FALSE</text>
  <text x="280" y="178" text-anchor="middle" fill="#e6e6ff" font-size="11">someone else's cart</text>
  <text x="280" y="196" text-anchor="middle" fill="#e6e6ff" font-size="11">skipped — no call</text>
  <rect x="380" y="130" width="160" height="96" rx="12" fill="#FFC806" />
  <text x="460" y="156" text-anchor="middle" fill="#191741" font-size="14" font-weight="700">CANNOT EVALUATE</text>
  <text x="460" y="178" text-anchor="middle" fill="#191741" font-size="11">a cart with no \`custom\` at all</text>
  <text x="460" y="196" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">400 ExtensionPredicate…Failed</text>
  <text x="460" y="214" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">the whole API call fails</text>
  <rect x="20" y="244" width="520" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="262" text-anchor="middle" fill="#6359FF" font-size="11">one unguarded predicate in a shared Project stops the whole room — and the seeder — from creating carts</text>
  <text x="280" y="277" text-anchor="middle" fill="#6F6D8F" font-size="10">key lhc-cart-rules-&lt;you&gt; · 25 Extensions per Project · changes apply within a minute</text>
</svg>
:::

## Concept · Reachable — the tunnel

- \`cloudflared tunnel --url http://localhost:8081\` → \`EXTENSION_PUBLIC_URL\`; a new hostname every restart.
- After a restart, re-run 7.6: it re-points the Extension, never duplicates.
- A dead tunnel = every cart write **504** "Extension did not respond in time"; \`DELETE\` at day's end.

> **Show:** \`POST\` → \`{ key, url: "https://….trycloudflare.com/api/extensions/cart", authenticated: true, triggers: [{ cart, [Create, Update], condition }], timeoutInMs: 2000 }\`; \`GET /api/extensibility/intake\` → \`note: "Ready: …"\`.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="150" height="70" rx="12" fill="#0BBFBF" />
  <text x="95" y="56" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">your BFF</text>
  <text x="95" y="76" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">localhost:8081</text>
  <text x="95" y="92" text-anchor="middle" fill="#191741" font-size="10">a laptop, behind NAT</text>
  <line x1="170" y1="65" x2="200" y2="65" stroke="#8C8AAE" stroke-width="2" />
  <rect x="204" y="30" width="160" height="70" rx="12" fill="#6359FF" />
  <text x="284" y="52" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">cloudflared quick tunnel</text>
  <text x="284" y="72" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">https://&lt;random&gt;.trycloudflare.com</text>
  <text x="284" y="90" text-anchor="middle" fill="#e6e6ff" font-size="10">new hostname on every restart</text>
  <line x1="394" y1="65" x2="368" y2="65" stroke="#FFC806" stroke-width="2" marker-end="url(#a)" />
  <rect x="398" y="30" width="142" height="70" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="469" y="56" text-anchor="middle" fill="#191741" font-size="13" font-weight="700">commercetools</text>
  <text x="469" y="76" text-anchor="middle" fill="#FFC806" font-size="10" font-family="Roboto Mono, monospace">POST …/api/extensions/cart</text>
  <text x="469" y="92" text-anchor="middle" fill="#6359FF" font-size="10">before every cart save</text>
  <rect x="20" y="124" width="250" height="72" rx="12" fill="#FFC806" />
  <text x="145" y="146" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">RED · the tunnel died</text>
  <text x="145" y="166" text-anchor="middle" fill="#191741" font-size="11">every cart write in the Project:</text>
  <text x="145" y="184" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">504 Extension did not respond in time</text>
  <line x1="270" y1="160" x2="304" y2="160" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="308" y="124" width="232" height="72" rx="12" fill="#0BBFBF" />
  <text x="424" y="146" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">GREEN · re-run 7.6</text>
  <text x="424" y="166" text-anchor="middle" fill="#191741" font-size="11">get-then-update, never delete-then-create:</text>
  <text x="424" y="184" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">changeDestination · changeTriggers · setTimeoutInMs</text>
  <rect x="20" y="216" width="520" height="30" rx="8" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="236" text-anchor="middle" fill="#6359FF" font-size="11">corporate Wi-Fi blocks QUIC? → cloudflared tunnel --protocol http2 (a 530 from outside is the symptom)</text>
  <rect x="20" y="256" width="520" height="30" rx="8" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="280" y="276" text-anchor="middle" fill="#FFC806" font-size="11" font-weight="700">END OF DAY · DELETE /api/extensibility/extension — a sleeping tunnel is a 504 on everyone's bag tomorrow</text>
</svg>
:::
`,e2=`---
task: extensibility.Session 7.7
summary: The handler the platform calls before it saves a cart — read the cart from the input, never from the API; validate (over the max → 400 InvalidInput with your message) and enrich (at or above the threshold → setCustomField requiresWhiteGlove); return actions only for the delta, or repeated Updates are not idempotent.
file: extensibility/…/application/CartRulesHandler.java
method: apply(Cart cart, ConfigDocument cfg)
prompt: |
  In bff-java, implement CartRulesHandler.apply(cart, cfg) in the extensibility module's application layer;
  handle(json) — parse the ExtensionInput, time and log the call — is pre-built.
  Read maxQuantityPerLine (default 10) and whiteGloveThresholdCents (default 40000) from cfg, the cached feature
  flags. Validate: any line item over the max → RuleResult.rejected with { errors: [{ code: "InvalidInput",
  message, localizedMessage, extensionExtraInfo }] }, one error per offending line. Enrich: a line whose price is at
  or above the threshold → setCustomField requiresWhiteGlove = true; no qualifying line while the flag is set →
  clear it (value null); a cart somehow without a Type → setCustomType order-extras with owner and the flag.
  Return actions only for the delta — an unchanged cart answers RuleResult.approved with no actions, so every
  repeated Update is idempotent — and never call the API from the handler: an old version, and a network call
  inside the 2-s budget.
  Before coding, propose how you will decide validate-vs-enrich for each rule and where each rule lives (BFF,
  Extension or both — who else writes carts?), and wait for my answer.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then remove @Disabled from CartRulesHandlerTest and run it; then set a line to quantity 11 on the storefront bag
  page and tell me what the response shows (Try It for 7.7 in Commerce Canvas answers 401 by design: the platform
  sends the shared secret, Canvas does not).
---

## Concept · The Input is the future

- \`{ action, resource: { typeId: "cart", obj } }\` — \`obj\` is the cart **as it would be saved**.
- Never read it back: stale, and a network call inside your budget.
- Thresholds from the flags through a 60-second cache — no network on the hot path.

> **Docs:** [API Extensions — Input](https://docs.commercetools.com/api/projects/api-extensions#input) · [Implement an API Extension](https://docs.commercetools.com/guides/extensions)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="24" width="220" height="150" rx="14" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="46" fill="#FFC806" font-size="11" letter-spacing="2">INPUT · platform → you</text>
  <text x="36" y="70" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">{ "action": "Update",</text>
  <text x="36" y="88" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  "resource": {</text>
  <text x="36" y="106" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">    "typeId": "cart", "id": "…",</text>
  <text x="36" y="124" fill="#0BBFBF" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">    "obj": { lineItems, custom… }</text>
  <text x="36" y="142" fill="#6359FF" font-size="11" font-family="Roboto Mono, monospace">  } }</text>
  <text x="130" y="164" text-anchor="middle" fill="#0BBFBF" font-size="10">the cart as it would be saved</text>
  <line x1="240" y1="99" x2="276" y2="99" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="280" y="54" width="130" height="90" rx="14" fill="#6359FF" />
  <text x="345" y="80" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">CartRulesHandler</text>
  <text x="345" y="98" text-anchor="middle" fill="#e6e6ff" font-size="11" font-family="Roboto Mono, monospace">apply(cart, cfg)</text>
  <text x="345" y="118" text-anchor="middle" fill="#e6e6ff" font-size="10">cfg = flags.cached() · 60 s</text>
  <text x="345" y="134" text-anchor="middle" fill="#e6e6ff" font-size="10">aim 50 ms</text>
  <path d="M410,78 L440,78" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <path d="M410,99 L440,120" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <path d="M410,120 L440,162" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="444" y="62" width="96" height="32" rx="8" fill="#FFC806" />
  <text x="492" y="83" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">400 { errors }</text>
  <rect x="444" y="104" width="96" height="32" rx="8" fill="#0BBFBF" />
  <text x="492" y="125" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">200 { actions }</text>
  <rect x="444" y="146" width="96" height="32" rx="8" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="492" y="167" text-anchor="middle" fill="#6359FF" font-size="11">200 · empty</text>
  <rect x="280" y="200" width="260" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="410" y="217" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace" text-decoration="line-through">GET /carts/{id}  from inside the handler</text>
  <text x="410" y="232" text-anchor="middle" fill="#FFC806" font-size="10">never — stale version, and a round trip inside the budget</text>
  <text x="130" y="222" text-anchor="middle" fill="#6359FF" font-size="11">secret checked · correlation id logged</text>
  <text x="130" y="238" text-anchor="middle" fill="#6F6D8F" font-size="10">before the handler runs (pre-built intake)</text>
  <text x="280" y="282" text-anchor="middle" fill="#6F6D8F" font-size="11">Create and Update alike — the handler sees every save of your carts</text>
</svg>
:::

## Concept · Validate or enrich — delta only

- Over **10** per line → \`400 InvalidInput\` with your message; Merchant Center shows \`localizedMessage\`.
- A line **≥ €400** → \`setCustomField requiresWhiteGlove = true\`; none qualifies → clear it.
- Already right → **no actions**: idempotent on every Update, no write amplification.

> **Show:** quantity 11 on the bag page, in Canvas and in Merchant Center → the same 400; add CARM-023 (€499) → *White Glove Delivery included* on the bag page; remove it → the pill goes.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <text x="110" y="32" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">THE CART SAYS</text>
  <text x="255" y="32" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">RULE</text>
  <text x="430" y="32" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">YOU ANSWER</text>
  <rect x="20" y="44" width="520" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="110" y="66" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">quantity &gt; 10</text>
  <text x="110" y="84" text-anchor="middle" fill="#6359FF" font-size="10">CARM-023 × 11</text>
  <rect x="215" y="57" width="80" height="26" rx="8" fill="#FFC806" /><text x="255" y="75" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">validate</text>
  <text x="430" y="66" text-anchor="middle" fill="#FFC806" font-size="11" font-family="Roboto Mono, monospace">400 InvalidInput</text>
  <text x="430" y="84" text-anchor="middle" fill="#6359FF" font-size="10">"Max 10 units per line (CARM-023 has 11)."</text>
  <rect x="20" y="106" width="520" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="110" y="128" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">price ≥ 40000</text>
  <text x="110" y="146" text-anchor="middle" fill="#6359FF" font-size="10">the €499 armchair · flag not set</text>
  <rect x="215" y="119" width="80" height="26" rx="8" fill="#0BBFBF" /><text x="255" y="137" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">enrich</text>
  <text x="430" y="128" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">200 { actions: [ setCustomField</text>
  <text x="430" y="146" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">  requiresWhiteGlove = true ] }</text>
  <rect x="20" y="168" width="520" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="110" y="190" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">no line ≥ 40000</text>
  <text x="110" y="208" text-anchor="middle" fill="#6359FF" font-size="10">armchair removed · flag still set</text>
  <rect x="215" y="181" width="80" height="26" rx="8" fill="#0BBFBF" /><text x="255" y="199" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">enrich</text>
  <text x="430" y="190" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">200 { actions: [ setCustomField</text>
  <text x="430" y="208" text-anchor="middle" fill="#0BBFBF" font-size="11" font-family="Roboto Mono, monospace">  requiresWhiteGlove = null ] }</text>
  <rect x="20" y="230" width="520" height="54" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="110" y="252" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">already right</text>
  <text x="110" y="270" text-anchor="middle" fill="#6359FF" font-size="10">a second Update · nothing changed</text>
  <rect x="215" y="243" width="80" height="26" rx="8" fill="#6359FF" /><text x="255" y="261" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="700">delta only</text>
  <text x="430" y="252" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">200 · no actions</text>
  <text x="430" y="270" text-anchor="middle" fill="#6F6D8F" font-size="10">idempotent · no write amplification</text>
</svg>
:::

## Concept · An Extension outage is a cart outage

- Stop the tunnel, click *Add to bag*: *Adding…*, nothing; Canvas: **504** "Extension did not respond in time".
- Re-run 7.6 to re-point; writes recover within a minute.
- Decisions: validate vs enrich · where each rule lives · fail open/closed · failure posture.

> **Ask:** which of the two rules is worth that outage? A legal rule — yes. A nice-to-have badge — move it to the BFF.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="20" width="250" height="96" rx="14" fill="#FFC806" />
  <text x="36" y="44" fill="#191741" font-size="12" font-weight="700">RED · Ctrl-C the tunnel</text>
  <text x="36" y="64" fill="#191741" font-size="11">bag page: "Add to bag" → Adding… → nothing</text>
  <text x="36" y="82" fill="#191741" font-size="11">Canvas: the same write answers</text>
  <text x="36" y="100" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">504 Extension did not respond in time</text>
  <line x1="270" y1="68" x2="304" y2="68" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="308" y="20" width="232" height="96" rx="14" fill="#0BBFBF" />
  <text x="324" y="44" fill="#191741" font-size="12" font-weight="700">GREEN · restart, re-run 7.6</text>
  <text x="324" y="64" fill="#191741" font-size="11">the Extension is re-pointed at the new</text>
  <text x="324" y="82" fill="#191741" font-size="11">hostname; writes recover within a minute</text>
  <text x="324" y="100" fill="#191741" font-size="10">the cost, felt — then explained</text>
  <text x="280" y="146" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">DECISIONS YOU OWN</text>
  <rect x="20" y="160" width="255" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="182" fill="#FFC806" font-size="12" font-weight="700">validate vs enrich, per rule</text>
  <text x="36" y="202" fill="#6359FF" font-size="11">reject the 11th unit — or clamp it silently (dangerous)</text>
  <rect x="285" y="160" width="255" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="301" y="182" fill="#FFC806" font-size="12" font-weight="700">where each rule lives</text>
  <text x="301" y="202" fill="#6359FF" font-size="11">BFF · Extension · both — who else writes carts?</text>
  <rect x="20" y="226" width="255" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="36" y="248" fill="#FFC806" font-size="12" font-weight="700">the budget and the cache</text>
  <text x="36" y="268" fill="#6359FF" font-size="11">TTL · config unreadable: fail open (reference) or closed</text>
  <rect x="285" y="226" width="255" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="301" y="248" fill="#FFC806" font-size="12" font-weight="700">failure posture</text>
  <text x="301" y="268" fill="#6359FF" font-size="11">an outage per rule: compliance yes, a badge no</text>
</svg>
:::
`,n2=`---
task: extensibility.Session 7.8
summary: Submit on the second SDK root — the Import API has its own host and identifies by key, same key updates, new key adds, and the 201 is an acknowledgement, not a result — then poll the ImportOperations for the container, one per submitted row, each moving processing → imported | validationFailed | unresolved | rejected.
file: extensibility/…/infrastructure/CtImportRepository.java
method: submitPrices(String containerKey, List<PriceImport> prices) · operations(String containerKey)
prompt: |
  In bff-java, implement CtImportRepository.submitPrices(containerKey, prices) and operations(containerKey) in the
  extensibility module's infrastructure layer, on the injected importApiRoot
  (com.commercetools.importapi.client.ProjectApiRoot — the Import API has its own host; do not touch the
  Composable Commerce root).
  submitPrices: POST a PriceImportRequest carrying the given resources to the price import endpoint of the
  ImportContainer named by key and return the raw ImportResponse. operations: GET that ImportContainer's
  ImportOperations (limit 100) and return the raw results list.
  The Import API identifies by key and the 201 is an acknowledgement, not a result — the service builds the per-row
  report from the operations, so return both untouched.
  Ground every commercetools call on the commercetools Knowledge MCP; do not guess API names.
  Keep SDK types inside infrastructure; the service maps to domain types.
  Then run Try It for task 7.8 in Commerce Canvas with
  [{ "sku": "CARM-023", "currencyCode": "EUR", "centAmount": 44900, "country": "DE" }], poll
  GET /api/import/lhc-price-feed/status until the row is imported, and tell me what the responses show.
---

## Concept · Async, bulk, by key

- Own host, own SDK root \`importApiRoot\` (\`com.commercetools.importapi.*\`); ≤ 20 rows per request.
- Identity by **key**: product, variant (= SKU) and the price key \`CARM-023-EUR-DE\` — the country matters.
- Same key updates, a new key adds; \`staged: false\` writes what the PLP reads.

> **Docs:** [Import API overview](https://docs.commercetools.com/api/import-export/overview) · [PriceImport](https://docs.commercetools.com/api/import-export/import-resources#priceimport)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="30" width="160" height="80" rx="12" fill="#6359FF" />
  <text x="100" y="52" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">the feed row (ERP speaks SKU)</text>
  <text x="100" y="74" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">{ sku: CARM-023, EUR,</text>
  <text x="100" y="90" text-anchor="middle" fill="#e6e6ff" font-size="10" font-family="Roboto Mono, monospace">  centAmount: 44900, DE }</text>
  <line x1="180" y1="70" x2="214" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="218" y="30" width="170" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="303" y="50" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">ImportService · SKU → keys</text>
  <text x="303" y="68" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">product.key · variant.key = SKU</text>
  <text x="303" y="86" text-anchor="middle" fill="#0BBFBF" font-size="11" font-weight="700" font-family="Roboto Mono, monospace">key: CARM-023-EUR-DE</text>
  <text x="303" y="102" text-anchor="middle" fill="#6359FF" font-size="10" font-family="Roboto Mono, monospace">staged: false · ≤ 20 rows</text>
  <line x1="388" y1="70" x2="422" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="426" y="30" width="114" height="80" rx="12" fill="#0BBFBF" />
  <text x="483" y="52" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">importApiRoot</text>
  <text x="483" y="70" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">import.{region}…</text>
  <text x="483" y="88" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">ImportContainer</text>
  <text x="483" y="102" text-anchor="middle" fill="#191741" font-size="10" font-family="Roboto Mono, monospace">lhc-price-feed</text>
  <path d="M483,110 L483,140 L300,140 L300,166" fill="none" stroke="#8C8AAE" stroke-width="2" stroke-dasharray="6 4" marker-end="url(#a)" />
  <text x="392" y="134" text-anchor="middle" fill="#6F6D8F" font-size="10">asynchronously, seconds later</text>
  <rect x="150" y="170" width="300" height="48" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="300" y="190" text-anchor="middle" fill="#191741" font-size="11" font-family="Roboto Mono, monospace">Price CARM-023-EUR-DE · same key → updated</text>
  <text x="300" y="208" text-anchor="middle" fill="#6359FF" font-size="10">a new key (e.g. without the country) would add a second price</text>
  <line x1="300" y1="218" x2="300" y2="236" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="150" y="240" width="300" height="46" rx="12" fill="#ffffff" stroke="#C9C6E0" />
  <text x="170" y="259" fill="#191741" font-size="12" font-weight="700">Charlie Armchair</text>
  <text x="170" y="277" fill="#6F6D8F" font-size="11">the PLP, after the feed</text>
  <text x="380" y="266" text-anchor="middle" fill="#6F6D8F" font-size="13" text-decoration="line-through">€499</text>
  <text x="425" y="266" text-anchor="middle" fill="#191741" font-size="15" font-weight="700">€449</text>
</svg>
:::

## Concept · The 201 is an acknowledgement

- One \`ImportOperation\` per row: \`processing → imported | validationFailed | unresolved | rejected\`.
- \`unresolved\` is not an error — a missing key reference retries for 48 h; failure is per row.
- Re-run the batch: \`imported\`, no duplicate. Session 9 makes this feed the \`lhc-price-feed-connector\` Job.

> **Show:** \`POST\` → \`pending: 1\`; \`GET /api/import/lhc-price-feed/status\` → \`imported: 1\`; refresh the PLP: €499 → €449.

> **Ask:** five rows, a 201 — has anything changed in the Project yet?

> **Docs:** [ProcessingState](https://docs.commercetools.com/api/import-export/import-operation#processingstate)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <rect x="20" y="40" width="120" height="60" rx="12" fill="#6359FF" />
  <text x="80" y="62" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">201 Created</text>
  <text x="80" y="82" text-anchor="middle" fill="#e6e6ff" font-size="10">an acknowledgement</text>
  <line x1="140" y1="70" x2="176" y2="70" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="180" y="40" width="120" height="60" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="240" y="62" text-anchor="middle" fill="#191741" font-size="12" font-family="Roboto Mono, monospace">processing</text>
  <text x="240" y="82" text-anchor="middle" fill="#6359FF" font-size="10">one ImportOperation per row</text>
  <path d="M300,60 L336,32" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <path d="M300,70 L336,100" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <path d="M300,80 L336,168" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <path d="M300,88 L336,236" fill="none" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <rect x="340" y="12" width="200" height="44" rx="10" fill="#0BBFBF" />
  <text x="440" y="30" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">imported</text>
  <text x="440" y="47" text-anchor="middle" fill="#191741" font-size="10">the price is live · resourceVersion set</text>
  <rect x="340" y="80" width="200" height="44" rx="10" fill="#FFC806" />
  <text x="440" y="98" text-anchor="middle" fill="#191741" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">validationFailed</text>
  <text x="440" y="115" text-anchor="middle" fill="#191741" font-size="10">this row only · errors[] says why</text>
  <rect x="340" y="148" width="200" height="44" rx="10" fill="#6359FF" />
  <text x="440" y="166" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">unresolved</text>
  <text x="440" y="183" text-anchor="middle" fill="#e6e6ff" font-size="10">a key reference not there yet · retried 48 h</text>
  <rect x="340" y="216" width="200" height="44" rx="10" fill="none" stroke="#FFC806" stroke-width="2" />
  <text x="440" y="234" text-anchor="middle" fill="#FFC806" font-size="12" font-weight="700" font-family="Roboto Mono, monospace">rejected</text>
  <text x="440" y="251" text-anchor="middle" fill="#6359FF" font-size="10">the platform gave up on this row</text>
  <path d="M240,100 L240,150 L80,150 L80,104" fill="none" stroke="#0BBFBF" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a)" />
  <text x="160" y="144" text-anchor="middle" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">GET …/status · poll</text>
  <rect x="20" y="176" width="280" height="40" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="160" y="194" text-anchor="middle" fill="#6359FF" font-size="11">re-run the same batch → imported again</text>
  <text x="160" y="209" text-anchor="middle" fill="#6F6D8F" font-size="10">upsert by key: no duplicate price</text>
  <rect x="20" y="228" width="280" height="56" rx="10" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="160" y="248" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">Session 9 · the same feed, scheduled</text>
  <text x="160" y="266" text-anchor="middle" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">lhc-price-feed-connector · Job app</text>
  <text x="160" y="279" text-anchor="middle" fill="#6F6D8F" font-size="9">a CSV feed, the same ImportContainer</text>
</svg>
:::

## Concept · Which mechanism? The extensibility decision

- Sync vs async × single vs bulk; the real-time API in the BFF is default.
- Fields/Objects extend data · Extension before persist · Subscription after · Import in bulk.
- Ask in order: sync or async? BFF first? who else writes? cost of being wrong?

> **Discuss:** five LHC requirements — gift message · ops switch · max 10 on every channel · nightly feed · confirmation e-mail. Place each on the map and defend two.

> **Docs:** [Integration patterns](https://docs.commercetools.com/learning-integrate-with-commercetools/integration-patterns/overview)

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="a" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE" /></marker></defs>
  <line x1="70" y1="250" x2="540" y2="250" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <line x1="70" y1="250" x2="70" y2="20" stroke="#8C8AAE" stroke-width="2" marker-end="url(#a)" />
  <text x="305" y="272" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2">SYNC  →  ASYNC</text>
  <text x="22" y="140" text-anchor="middle" fill="#6F6D8F" font-size="11" letter-spacing="2" transform="rotate(-90 22 140)">SINGLE  →  BULK</text>
  <line x1="305" y1="30" x2="305" y2="250" stroke="#C9C6E0" stroke-width="1" stroke-dasharray="4 4" />
  <line x1="70" y1="140" x2="540" y2="140" stroke="#C9C6E0" stroke-width="1" stroke-dasharray="4 4" />
  <rect x="86" y="150" width="130" height="56" rx="12" fill="#0BBFBF" />
  <text x="151" y="172" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">real-time API in the BFF</text>
  <text x="151" y="190" text-anchor="middle" fill="#191741" font-size="10">the default · Days 1–2</text>
  <rect x="86" y="64" width="130" height="56" rx="12" fill="#FFFFFF" stroke="#C9C6E0" />
  <text x="151" y="86" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Custom Fields · Objects</text>
  <text x="151" y="104" text-anchor="middle" fill="#6359FF" font-size="10">data on · beside (7.1 · 7.2)</text>
  <rect x="166" y="196" width="130" height="50" rx="12" fill="#FFC806" />
  <text x="231" y="216" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">API Extension</text>
  <text x="231" y="233" text-anchor="middle" fill="#191741" font-size="10">before persist · every client (7.6/7.7)</text>
  <rect x="330" y="150" width="130" height="56" rx="12" fill="none" stroke="#6359FF" stroke-width="2" stroke-dasharray="6 4" />
  <text x="395" y="172" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">Subscription</text>
  <text x="395" y="190" text-anchor="middle" fill="#6359FF" font-size="10">after the write · pushed (7.4 → S9)</text>
  <rect x="400" y="40" width="130" height="56" rx="12" fill="#6359FF" />
  <text x="465" y="62" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="700">Import API</text>
  <text x="465" y="80" text-anchor="middle" fill="#e6e6ff" font-size="10">bulk · by key · per-row status (7.8)</text>
  <text x="305" y="292" text-anchor="middle" fill="#6359FF" font-size="10">1 sync or async? · 2 can the BFF do it before the call? · 3 who else writes? · 4 cost of being wrong?</text>
</svg>
:::
`;function oc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var co=oc();function Lh(a){co=a}var Ji={exec:()=>null};function Ft(a,r=""){let f=typeof a=="string"?a:a.source;const c={replace:(x,m)=>{let z=typeof m=="string"?m:m.source;return z=z.replace(ie.caret,"$1"),f=f.replace(x,z),c},getRegex:()=>new RegExp(f,r)};return c}var ie={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}#`),htmlBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}<(?:[a-z].*>|!--)`,"i")},o2=/^(?:[ \t]*(?:\n|$))+/,i2=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,l2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Wi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,a2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ic=/(?:[*+-]|\d{1,9}[.)])/,_h=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Uh=Ft(_h).replace(/bull/g,ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),r2=Ft(_h).replace(/bull/g,ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),lc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,s2=/^[^\n]+/,ac=/(?!\s*\])(?:\\.|[^\[\]\\])+/,c2=Ft(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ac).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),f2=Ft(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ic).getRegex(),Sa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",rc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,d2=Ft("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",rc).replace("tag",Sa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Hh=Ft(lc).replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sa).getRegex(),h2=Ft(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Hh).getRegex(),sc={blockquote:h2,code:i2,def:c2,fences:l2,heading:a2,hr:Wi,html:d2,lheading:Uh,list:f2,newline:o2,paragraph:Hh,table:Ji,text:s2},Sh=Ft("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sa).getRegex(),x2={...sc,lheading:r2,table:Sh,paragraph:Ft(lc).replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Sh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sa).getRegex()},u2={...sc,html:Ft(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",rc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ji,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ft(lc).replace("hr",Wi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Uh).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},m2=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,y2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ih=/^( {2,}|\\)\n(?!\s*$)/,p2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Aa=/[\p{P}\p{S}]/u,cc=/[\s\p{P}\p{S}]/u,Ph=/[^\s\p{P}\p{S}]/u,g2=Ft(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,cc).getRegex(),qh=/(?!~)[\p{P}\p{S}]/u,F2=/(?!~)[\s\p{P}\p{S}]/u,w2=/(?:[^\s\p{P}\p{S}]|~)/u,v2=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Kh=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,b2=Ft(Kh,"u").replace(/punct/g,Aa).getRegex(),C2=Ft(Kh,"u").replace(/punct/g,qh).getRegex(),Vh="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",k2=Ft(Vh,"gu").replace(/notPunctSpace/g,Ph).replace(/punctSpace/g,cc).replace(/punct/g,Aa).getRegex(),z2=Ft(Vh,"gu").replace(/notPunctSpace/g,w2).replace(/punctSpace/g,F2).replace(/punct/g,qh).getRegex(),S2=Ft("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ph).replace(/punctSpace/g,cc).replace(/punct/g,Aa).getRegex(),A2=Ft(/\\(punct)/,"gu").replace(/punct/g,Aa).getRegex(),E2=Ft(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),R2=Ft(rc).replace("(?:-->|$)","-->").getRegex(),B2=Ft("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",R2).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ba=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,M2=Ft(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ba).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Gh=Ft(/^!?\[(label)\]\[(ref)\]/).replace("label",ba).replace("ref",ac).getRegex(),Yh=Ft(/^!?\[(ref)\](?:\[\])?/).replace("ref",ac).getRegex(),T2=Ft("reflink|nolink(?!\\()","g").replace("reflink",Gh).replace("nolink",Yh).getRegex(),fc={_backpedal:Ji,anyPunctuation:A2,autolink:E2,blockSkip:v2,br:Ih,code:y2,del:Ji,emStrongLDelim:b2,emStrongRDelimAst:k2,emStrongRDelimUnd:S2,escape:m2,link:M2,nolink:Yh,punctuation:g2,reflink:Gh,reflinkSearch:T2,tag:B2,text:p2,url:Ji},D2={...fc,link:Ft(/^!?\[(label)\]\((.*?)\)/).replace("label",ba).getRegex(),reflink:Ft(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ba).getRegex()},Js={...fc,emStrongRDelimAst:z2,emStrongLDelim:C2,url:Ft(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},O2={...Js,br:Ft(Ih).replace("{2,}","*").getRegex(),text:Ft(Js.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ga={normal:sc,gfm:x2,pedantic:u2},Zi={normal:fc,gfm:Js,breaks:O2,pedantic:D2},j2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ah=a=>j2[a];function Ve(a,r){if(r){if(ie.escapeTest.test(a))return a.replace(ie.escapeReplace,Ah)}else if(ie.escapeTestNoEncode.test(a))return a.replace(ie.escapeReplaceNoEncode,Ah);return a}function Eh(a){try{a=encodeURI(a).replace(ie.percentDecode,"%")}catch{return null}return a}function Rh(a,r){var m;const f=a.replace(ie.findPipe,(z,F,w)=>{let u=!1,k=F;for(;--k>=0&&w[k]==="\\";)u=!u;return u?"|":" |"}),c=f.split(ie.splitPipe);let x=0;if(c[0].trim()||c.shift(),c.length>0&&!((m=c.at(-1))!=null&&m.trim())&&c.pop(),r)if(c.length>r)c.splice(r);else for(;c.length<r;)c.push("");for(;x<c.length;x++)c[x]=c[x].trim().replace(ie.slashPipe,"|");return c}function Qi(a,r,f){const c=a.length;if(c===0)return"";let x=0;for(;x<c&&a.charAt(c-x-1)===r;)x++;return a.slice(0,c-x)}function N2(a,r){if(a.indexOf(r[1])===-1)return-1;let f=0;for(let c=0;c<a.length;c++)if(a[c]==="\\")c++;else if(a[c]===r[0])f++;else if(a[c]===r[1]&&(f--,f<0))return c;return f>0?-2:-1}function Bh(a,r,f,c,x){const m=r.href,z=r.title||null,F=a[1].replace(x.other.outputLinkReplace,"$1");c.state.inLink=!0;const w={type:a[0].charAt(0)==="!"?"image":"link",raw:f,href:m,title:z,text:F,tokens:c.inlineTokens(F)};return c.state.inLink=!1,w}function L2(a,r,f){const c=a.match(f.other.indentCodeCompensation);if(c===null)return r;const x=c[1];return r.split(`
`).map(m=>{const z=m.match(f.other.beginningSpace);if(z===null)return m;const[F]=z;return F.length>=x.length?m.slice(x.length):m}).join(`
`)}var Ca=class{constructor(a){Bt(this,"options");Bt(this,"rules");Bt(this,"lexer");this.options=a||co}space(a){const r=this.rules.block.newline.exec(a);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(a){const r=this.rules.block.code.exec(a);if(r){const f=r[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?f:Qi(f,`
`)}}}fences(a){const r=this.rules.block.fences.exec(a);if(r){const f=r[0],c=L2(f,r[3]||"",this.rules);return{type:"code",raw:f,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:c}}}heading(a){const r=this.rules.block.heading.exec(a);if(r){let f=r[2].trim();if(this.rules.other.endingHash.test(f)){const c=Qi(f,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(f=c.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:f,tokens:this.lexer.inline(f)}}}hr(a){const r=this.rules.block.hr.exec(a);if(r)return{type:"hr",raw:Qi(r[0],`
`)}}blockquote(a){const r=this.rules.block.blockquote.exec(a);if(r){let f=Qi(r[0],`
`).split(`
`),c="",x="";const m=[];for(;f.length>0;){let z=!1;const F=[];let w;for(w=0;w<f.length;w++)if(this.rules.other.blockquoteStart.test(f[w]))F.push(f[w]),z=!0;else if(!z)F.push(f[w]);else break;f=f.slice(w);const u=F.join(`
`),k=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${u}`:u,x=x?`${x}
${k}`:k;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(k,m,!0),this.lexer.state.top=O,f.length===0)break;const D=m.at(-1);if((D==null?void 0:D.type)==="code")break;if((D==null?void 0:D.type)==="blockquote"){const Y=D,L=Y.raw+`
`+f.join(`
`),G=this.blockquote(L);m[m.length-1]=G,c=c.substring(0,c.length-Y.raw.length)+G.raw,x=x.substring(0,x.length-Y.text.length)+G.text;break}else if((D==null?void 0:D.type)==="list"){const Y=D,L=Y.raw+`
`+f.join(`
`),G=this.list(L);m[m.length-1]=G,c=c.substring(0,c.length-D.raw.length)+G.raw,x=x.substring(0,x.length-Y.raw.length)+G.raw,f=L.substring(m.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:m,text:x}}}list(a){let r=this.rules.block.list.exec(a);if(r){let f=r[1].trim();const c=f.length>1,x={type:"list",raw:"",ordered:c,start:c?+f.slice(0,-1):"",loose:!1,items:[]};f=c?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=c?f:"[*+-]");const m=this.rules.other.listItemRegex(f);let z=!1;for(;a;){let w=!1,u="",k="";if(!(r=m.exec(a))||this.rules.block.hr.test(a))break;u=r[0],a=a.substring(u.length);let O=r[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,kt=>" ".repeat(3*kt.length)),D=a.split(`
`,1)[0],Y=!O.trim(),L=0;if(this.options.pedantic?(L=2,k=O.trimStart()):Y?L=r[1].length+1:(L=r[2].search(this.rules.other.nonSpaceChar),L=L>4?1:L,k=O.slice(L),L+=r[1].length),Y&&this.rules.other.blankLine.test(D)&&(u+=D+`
`,a=a.substring(D.length+1),w=!0),!w){const kt=this.rules.other.nextBulletRegex(L),H=this.rules.other.hrRegex(L),_=this.rules.other.fencesBeginRegex(L),K=this.rules.other.headingBeginRegex(L),st=this.rules.other.htmlBeginRegex(L);for(;a;){const $=a.split(`
`,1)[0];let U;if(D=$,this.options.pedantic?(D=D.replace(this.rules.other.listReplaceNesting,"  "),U=D):U=D.replace(this.rules.other.tabCharGlobal,"    "),_.test(D)||K.test(D)||st.test(D)||kt.test(D)||H.test(D))break;if(U.search(this.rules.other.nonSpaceChar)>=L||!D.trim())k+=`
`+U.slice(L);else{if(Y||O.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_.test(O)||K.test(O)||H.test(O))break;k+=`
`+D}!Y&&!D.trim()&&(Y=!0),u+=$+`
`,a=a.substring($.length+1),O=U.slice(L)}}x.loose||(z?x.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(z=!0));let G=null,et;this.options.gfm&&(G=this.rules.other.listIsTask.exec(k),G&&(et=G[0]!=="[ ] ",k=k.replace(this.rules.other.listReplaceTask,""))),x.items.push({type:"list_item",raw:u,task:!!G,checked:et,loose:!1,text:k,tokens:[]}),x.raw+=u}const F=x.items.at(-1);if(F)F.raw=F.raw.trimEnd(),F.text=F.text.trimEnd();else return;x.raw=x.raw.trimEnd();for(let w=0;w<x.items.length;w++)if(this.lexer.state.top=!1,x.items[w].tokens=this.lexer.blockTokens(x.items[w].text,[]),!x.loose){const u=x.items[w].tokens.filter(O=>O.type==="space"),k=u.length>0&&u.some(O=>this.rules.other.anyLine.test(O.raw));x.loose=k}if(x.loose)for(let w=0;w<x.items.length;w++)x.items[w].loose=!0;return x}}html(a){const r=this.rules.block.html.exec(a);if(r)return{type:"html",block:!0,raw:r[0],pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:r[0]}}def(a){const r=this.rules.block.def.exec(a);if(r){const f=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",x=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:f,raw:r[0],href:c,title:x}}}table(a){var z;const r=this.rules.block.table.exec(a);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;const f=Rh(r[1]),c=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),x=(z=r[3])!=null&&z.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],m={type:"table",raw:r[0],header:[],align:[],rows:[]};if(f.length===c.length){for(const F of c)this.rules.other.tableAlignRight.test(F)?m.align.push("right"):this.rules.other.tableAlignCenter.test(F)?m.align.push("center"):this.rules.other.tableAlignLeft.test(F)?m.align.push("left"):m.align.push(null);for(let F=0;F<f.length;F++)m.header.push({text:f[F],tokens:this.lexer.inline(f[F]),header:!0,align:m.align[F]});for(const F of x)m.rows.push(Rh(F,m.header.length).map((w,u)=>({text:w,tokens:this.lexer.inline(w),header:!1,align:m.align[u]})));return m}}lheading(a){const r=this.rules.block.lheading.exec(a);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(a){const r=this.rules.block.paragraph.exec(a);if(r){const f=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:f,tokens:this.lexer.inline(f)}}}text(a){const r=this.rules.block.text.exec(a);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(a){const r=this.rules.inline.escape.exec(a);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(a){const r=this.rules.inline.tag.exec(a);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(a){const r=this.rules.inline.link.exec(a);if(r){const f=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(f)){if(!this.rules.other.endAngleBracket.test(f))return;const m=Qi(f.slice(0,-1),"\\");if((f.length-m.length)%2===0)return}else{const m=N2(r[2],"()");if(m===-2)return;if(m>-1){const F=(r[0].indexOf("!")===0?5:4)+r[1].length+m;r[2]=r[2].substring(0,m),r[0]=r[0].substring(0,F).trim(),r[3]=""}}let c=r[2],x="";if(this.options.pedantic){const m=this.rules.other.pedanticHrefTitle.exec(c);m&&(c=m[1],x=m[3])}else x=r[3]?r[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(f)?c=c.slice(1):c=c.slice(1,-1)),Bh(r,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:x&&x.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(a,r){let f;if((f=this.rules.inline.reflink.exec(a))||(f=this.rules.inline.nolink.exec(a))){const c=(f[2]||f[1]).replace(this.rules.other.multipleSpaceGlobal," "),x=r[c.toLowerCase()];if(!x){const m=f[0].charAt(0);return{type:"text",raw:m,text:m}}return Bh(f,x,f[0],this.lexer,this.rules)}}emStrong(a,r,f=""){let c=this.rules.inline.emStrongLDelim.exec(a);if(!c||c[3]&&f.match(this.rules.other.unicodeAlphaNumeric))return;if(!(c[1]||c[2]||"")||!f||this.rules.inline.punctuation.exec(f)){const m=[...c[0]].length-1;let z,F,w=m,u=0;const k=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(k.lastIndex=0,r=r.slice(-1*a.length+m);(c=k.exec(r))!=null;){if(z=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!z)continue;if(F=[...z].length,c[3]||c[4]){w+=F;continue}else if((c[5]||c[6])&&m%3&&!((m+F)%3)){u+=F;continue}if(w-=F,w>0)continue;F=Math.min(F,F+w+u);const O=[...c[0]][0].length,D=a.slice(0,m+c.index+O+F);if(Math.min(m,F)%2){const L=D.slice(1,-1);return{type:"em",raw:D,text:L,tokens:this.lexer.inlineTokens(L)}}const Y=D.slice(2,-2);return{type:"strong",raw:D,text:Y,tokens:this.lexer.inlineTokens(Y)}}}}codespan(a){const r=this.rules.inline.code.exec(a);if(r){let f=r[2].replace(this.rules.other.newLineCharGlobal," ");const c=this.rules.other.nonSpaceChar.test(f),x=this.rules.other.startingSpaceChar.test(f)&&this.rules.other.endingSpaceChar.test(f);return c&&x&&(f=f.substring(1,f.length-1)),{type:"codespan",raw:r[0],text:f}}}br(a){const r=this.rules.inline.br.exec(a);if(r)return{type:"br",raw:r[0]}}del(a){const r=this.rules.inline.del.exec(a);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(a){const r=this.rules.inline.autolink.exec(a);if(r){let f,c;return r[2]==="@"?(f=r[1],c="mailto:"+f):(f=r[1],c=f),{type:"link",raw:r[0],text:f,href:c,tokens:[{type:"text",raw:f,text:f}]}}}url(a){var f;let r;if(r=this.rules.inline.url.exec(a)){let c,x;if(r[2]==="@")c=r[0],x="mailto:"+c;else{let m;do m=r[0],r[0]=((f=this.rules.inline._backpedal.exec(r[0]))==null?void 0:f[0])??"";while(m!==r[0]);c=r[0],r[1]==="www."?x="http://"+r[0]:x=r[0]}return{type:"link",raw:r[0],text:c,href:x,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(a){const r=this.rules.inline.text.exec(a);if(r){const f=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:f}}}},hn=class Ws{constructor(r){Bt(this,"tokens");Bt(this,"options");Bt(this,"state");Bt(this,"tokenizer");Bt(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=r||co,this.options.tokenizer=this.options.tokenizer||new Ca,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const f={other:ie,block:ga.normal,inline:Zi.normal};this.options.pedantic?(f.block=ga.pedantic,f.inline=Zi.pedantic):this.options.gfm&&(f.block=ga.gfm,this.options.breaks?f.inline=Zi.breaks:f.inline=Zi.gfm),this.tokenizer.rules=f}static get rules(){return{block:ga,inline:Zi}}static lex(r,f){return new Ws(f).lex(r)}static lexInline(r,f){return new Ws(f).inlineTokens(r)}lex(r){r=r.replace(ie.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let f=0;f<this.inlineQueue.length;f++){const c=this.inlineQueue[f];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,f=[],c=!1){var x,m,z;for(this.options.pedantic&&(r=r.replace(ie.tabCharGlobal,"    ").replace(ie.spaceLine,""));r;){let F;if((m=(x=this.options.extensions)==null?void 0:x.block)!=null&&m.some(u=>(F=u.call({lexer:this},r,f))?(r=r.substring(F.raw.length),f.push(F),!0):!1))continue;if(F=this.tokenizer.space(r)){r=r.substring(F.raw.length);const u=f.at(-1);F.raw.length===1&&u!==void 0?u.raw+=`
`:f.push(F);continue}if(F=this.tokenizer.code(r)){r=r.substring(F.raw.length);const u=f.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+F.raw,u.text+=`
`+F.text,this.inlineQueue.at(-1).src=u.text):f.push(F);continue}if(F=this.tokenizer.fences(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.heading(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.hr(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.blockquote(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.list(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.html(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.def(r)){r=r.substring(F.raw.length);const u=f.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+F.raw,u.text+=`
`+F.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[F.tag]||(this.tokens.links[F.tag]={href:F.href,title:F.title});continue}if(F=this.tokenizer.table(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.lheading(r)){r=r.substring(F.raw.length),f.push(F);continue}let w=r;if((z=this.options.extensions)!=null&&z.startBlock){let u=1/0;const k=r.slice(1);let O;this.options.extensions.startBlock.forEach(D=>{O=D.call({lexer:this},k),typeof O=="number"&&O>=0&&(u=Math.min(u,O))}),u<1/0&&u>=0&&(w=r.substring(0,u+1))}if(this.state.top&&(F=this.tokenizer.paragraph(w))){const u=f.at(-1);c&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+F.raw,u.text+=`
`+F.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):f.push(F),c=w.length!==r.length,r=r.substring(F.raw.length);continue}if(F=this.tokenizer.text(r)){r=r.substring(F.raw.length);const u=f.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+F.raw,u.text+=`
`+F.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):f.push(F);continue}if(r){const u="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,f}inline(r,f=[]){return this.inlineQueue.push({src:r,tokens:f}),f}inlineTokens(r,f=[]){var F,w,u;let c=r,x=null;if(this.tokens.links){const k=Object.keys(this.tokens.links);if(k.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)k.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,x.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(x=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let m=!1,z="";for(;r;){m||(z=""),m=!1;let k;if((w=(F=this.options.extensions)==null?void 0:F.inline)!=null&&w.some(D=>(k=D.call({lexer:this},r,f))?(r=r.substring(k.raw.length),f.push(k),!0):!1))continue;if(k=this.tokenizer.escape(r)){r=r.substring(k.raw.length),f.push(k);continue}if(k=this.tokenizer.tag(r)){r=r.substring(k.raw.length),f.push(k);continue}if(k=this.tokenizer.link(r)){r=r.substring(k.raw.length),f.push(k);continue}if(k=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(k.raw.length);const D=f.at(-1);k.type==="text"&&(D==null?void 0:D.type)==="text"?(D.raw+=k.raw,D.text+=k.text):f.push(k);continue}if(k=this.tokenizer.emStrong(r,c,z)){r=r.substring(k.raw.length),f.push(k);continue}if(k=this.tokenizer.codespan(r)){r=r.substring(k.raw.length),f.push(k);continue}if(k=this.tokenizer.br(r)){r=r.substring(k.raw.length),f.push(k);continue}if(k=this.tokenizer.del(r)){r=r.substring(k.raw.length),f.push(k);continue}if(k=this.tokenizer.autolink(r)){r=r.substring(k.raw.length),f.push(k);continue}if(!this.state.inLink&&(k=this.tokenizer.url(r))){r=r.substring(k.raw.length),f.push(k);continue}let O=r;if((u=this.options.extensions)!=null&&u.startInline){let D=1/0;const Y=r.slice(1);let L;this.options.extensions.startInline.forEach(G=>{L=G.call({lexer:this},Y),typeof L=="number"&&L>=0&&(D=Math.min(D,L))}),D<1/0&&D>=0&&(O=r.substring(0,D+1))}if(k=this.tokenizer.inlineText(O)){r=r.substring(k.raw.length),k.raw.slice(-1)!=="_"&&(z=k.raw.slice(-1)),m=!0;const D=f.at(-1);(D==null?void 0:D.type)==="text"?(D.raw+=k.raw,D.text+=k.text):f.push(k);continue}if(r){const D="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(D);break}else throw new Error(D)}}return f}},ka=class{constructor(a){Bt(this,"options");Bt(this,"parser");this.options=a||co}space(a){return""}code({text:a,lang:r,escaped:f}){var m;const c=(m=(r||"").match(ie.notSpaceStart))==null?void 0:m[0],x=a.replace(ie.endingNewline,"")+`
`;return c?'<pre><code class="language-'+Ve(c)+'">'+(f?x:Ve(x,!0))+`</code></pre>
`:"<pre><code>"+(f?x:Ve(x,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}heading({tokens:a,depth:r}){return`<h${r}>${this.parser.parseInline(a)}</h${r}>
`}hr(a){return`<hr>
`}list(a){const r=a.ordered,f=a.start;let c="";for(let z=0;z<a.items.length;z++){const F=a.items[z];c+=this.listitem(F)}const x=r?"ol":"ul",m=r&&f!==1?' start="'+f+'"':"";return"<"+x+m+`>
`+c+"</"+x+`>
`}listitem(a){var f;let r="";if(a.task){const c=this.checkbox({checked:!!a.checked});a.loose?((f=a.tokens[0])==null?void 0:f.type)==="paragraph"?(a.tokens[0].text=c+" "+a.tokens[0].text,a.tokens[0].tokens&&a.tokens[0].tokens.length>0&&a.tokens[0].tokens[0].type==="text"&&(a.tokens[0].tokens[0].text=c+" "+Ve(a.tokens[0].tokens[0].text),a.tokens[0].tokens[0].escaped=!0)):a.tokens.unshift({type:"text",raw:c+" ",text:c+" ",escaped:!0}):r+=c+" "}return r+=this.parser.parse(a.tokens,!!a.loose),`<li>${r}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let r="",f="";for(let x=0;x<a.header.length;x++)f+=this.tablecell(a.header[x]);r+=this.tablerow({text:f});let c="";for(let x=0;x<a.rows.length;x++){const m=a.rows[x];f="";for(let z=0;z<m.length;z++)f+=this.tablecell(m[z]);c+=this.tablerow({text:f})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+c+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){const r=this.parser.parseInline(a.tokens),f=a.header?"th":"td";return(a.align?`<${f} align="${a.align}">`:`<${f}>`)+r+`</${f}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${Ve(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:r,tokens:f}){const c=this.parser.parseInline(f),x=Eh(a);if(x===null)return c;a=x;let m='<a href="'+a+'"';return r&&(m+=' title="'+Ve(r)+'"'),m+=">"+c+"</a>",m}image({href:a,title:r,text:f,tokens:c}){c&&(f=this.parser.parseInline(c,this.parser.textRenderer));const x=Eh(a);if(x===null)return Ve(f);a=x;let m=`<img src="${a}" alt="${f}"`;return r&&(m+=` title="${Ve(r)}"`),m+=">",m}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:Ve(a.text)}},dc=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}},xn=class $s{constructor(r){Bt(this,"options");Bt(this,"renderer");Bt(this,"textRenderer");this.options=r||co,this.options.renderer=this.options.renderer||new ka,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new dc}static parse(r,f){return new $s(f).parse(r)}static parseInline(r,f){return new $s(f).parseInline(r)}parse(r,f=!0){var x,m;let c="";for(let z=0;z<r.length;z++){const F=r[z];if((m=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&m[F.type]){const u=F,k=this.options.extensions.renderers[u.type].call({parser:this},u);if(k!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){c+=k||"";continue}}const w=F;switch(w.type){case"space":{c+=this.renderer.space(w);continue}case"hr":{c+=this.renderer.hr(w);continue}case"heading":{c+=this.renderer.heading(w);continue}case"code":{c+=this.renderer.code(w);continue}case"table":{c+=this.renderer.table(w);continue}case"blockquote":{c+=this.renderer.blockquote(w);continue}case"list":{c+=this.renderer.list(w);continue}case"html":{c+=this.renderer.html(w);continue}case"paragraph":{c+=this.renderer.paragraph(w);continue}case"text":{let u=w,k=this.renderer.text(u);for(;z+1<r.length&&r[z+1].type==="text";)u=r[++z],k+=`
`+this.renderer.text(u);f?c+=this.renderer.paragraph({type:"paragraph",raw:k,text:k,tokens:[{type:"text",raw:k,text:k,escaped:!0}]}):c+=k;continue}default:{const u='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return c}parseInline(r,f=this.renderer){var x,m;let c="";for(let z=0;z<r.length;z++){const F=r[z];if((m=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&m[F.type]){const u=this.options.extensions.renderers[F.type].call({parser:this},F);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(F.type)){c+=u||"";continue}}const w=F;switch(w.type){case"escape":{c+=f.text(w);break}case"html":{c+=f.html(w);break}case"link":{c+=f.link(w);break}case"image":{c+=f.image(w);break}case"strong":{c+=f.strong(w);break}case"em":{c+=f.em(w);break}case"codespan":{c+=f.codespan(w);break}case"br":{c+=f.br(w);break}case"del":{c+=f.del(w);break}case"text":{c+=f.text(w);break}default:{const u='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return c}},Xs,Fa=(Xs=class{constructor(a){Bt(this,"options");Bt(this,"block");this.options=a||co}preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}provideLexer(){return this.block?hn.lex:hn.lexInline}provideParser(){return this.block?xn.parse:xn.parseInline}},Bt(Xs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xs),_2=class{constructor(...a){Bt(this,"defaults",oc());Bt(this,"options",this.setOptions);Bt(this,"parse",this.parseMarkdown(!0));Bt(this,"parseInline",this.parseMarkdown(!1));Bt(this,"Parser",xn);Bt(this,"Renderer",ka);Bt(this,"TextRenderer",dc);Bt(this,"Lexer",hn);Bt(this,"Tokenizer",Ca);Bt(this,"Hooks",Fa);this.use(...a)}walkTokens(a,r){var c,x;let f=[];for(const m of a)switch(f=f.concat(r.call(this,m)),m.type){case"table":{const z=m;for(const F of z.header)f=f.concat(this.walkTokens(F.tokens,r));for(const F of z.rows)for(const w of F)f=f.concat(this.walkTokens(w.tokens,r));break}case"list":{const z=m;f=f.concat(this.walkTokens(z.items,r));break}default:{const z=m;(x=(c=this.defaults.extensions)==null?void 0:c.childTokens)!=null&&x[z.type]?this.defaults.extensions.childTokens[z.type].forEach(F=>{const w=z[F].flat(1/0);f=f.concat(this.walkTokens(w,r))}):z.tokens&&(f=f.concat(this.walkTokens(z.tokens,r)))}}return f}use(...a){const r=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(f=>{const c={...f};if(c.async=this.defaults.async||c.async||!1,f.extensions&&(f.extensions.forEach(x=>{if(!x.name)throw new Error("extension name required");if("renderer"in x){const m=r.renderers[x.name];m?r.renderers[x.name]=function(...z){let F=x.renderer.apply(this,z);return F===!1&&(F=m.apply(this,z)),F}:r.renderers[x.name]=x.renderer}if("tokenizer"in x){if(!x.level||x.level!=="block"&&x.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const m=r[x.level];m?m.unshift(x.tokenizer):r[x.level]=[x.tokenizer],x.start&&(x.level==="block"?r.startBlock?r.startBlock.push(x.start):r.startBlock=[x.start]:x.level==="inline"&&(r.startInline?r.startInline.push(x.start):r.startInline=[x.start]))}"childTokens"in x&&x.childTokens&&(r.childTokens[x.name]=x.childTokens)}),c.extensions=r),f.renderer){const x=this.defaults.renderer||new ka(this.defaults);for(const m in f.renderer){if(!(m in x))throw new Error(`renderer '${m}' does not exist`);if(["options","parser"].includes(m))continue;const z=m,F=f.renderer[z],w=x[z];x[z]=(...u)=>{let k=F.apply(x,u);return k===!1&&(k=w.apply(x,u)),k||""}}c.renderer=x}if(f.tokenizer){const x=this.defaults.tokenizer||new Ca(this.defaults);for(const m in f.tokenizer){if(!(m in x))throw new Error(`tokenizer '${m}' does not exist`);if(["options","rules","lexer"].includes(m))continue;const z=m,F=f.tokenizer[z],w=x[z];x[z]=(...u)=>{let k=F.apply(x,u);return k===!1&&(k=w.apply(x,u)),k}}c.tokenizer=x}if(f.hooks){const x=this.defaults.hooks||new Fa;for(const m in f.hooks){if(!(m in x))throw new Error(`hook '${m}' does not exist`);if(["options","block"].includes(m))continue;const z=m,F=f.hooks[z],w=x[z];Fa.passThroughHooks.has(m)?x[z]=u=>{if(this.defaults.async)return Promise.resolve(F.call(x,u)).then(O=>w.call(x,O));const k=F.call(x,u);return w.call(x,k)}:x[z]=(...u)=>{let k=F.apply(x,u);return k===!1&&(k=w.apply(x,u)),k}}c.hooks=x}if(f.walkTokens){const x=this.defaults.walkTokens,m=f.walkTokens;c.walkTokens=function(z){let F=[];return F.push(m.call(this,z)),x&&(F=F.concat(x.call(this,z))),F}}this.defaults={...this.defaults,...c}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,r){return hn.lex(a,r??this.defaults)}parser(a,r){return xn.parse(a,r??this.defaults)}parseMarkdown(a){return(f,c)=>{const x={...c},m={...this.defaults,...x},z=this.onError(!!m.silent,!!m.async);if(this.defaults.async===!0&&x.async===!1)return z(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof f>"u"||f===null)return z(new Error("marked(): input parameter is undefined or null"));if(typeof f!="string")return z(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(f)+", string expected"));m.hooks&&(m.hooks.options=m,m.hooks.block=a);const F=m.hooks?m.hooks.provideLexer():a?hn.lex:hn.lexInline,w=m.hooks?m.hooks.provideParser():a?xn.parse:xn.parseInline;if(m.async)return Promise.resolve(m.hooks?m.hooks.preprocess(f):f).then(u=>F(u,m)).then(u=>m.hooks?m.hooks.processAllTokens(u):u).then(u=>m.walkTokens?Promise.all(this.walkTokens(u,m.walkTokens)).then(()=>u):u).then(u=>w(u,m)).then(u=>m.hooks?m.hooks.postprocess(u):u).catch(z);try{m.hooks&&(f=m.hooks.preprocess(f));let u=F(f,m);m.hooks&&(u=m.hooks.processAllTokens(u)),m.walkTokens&&this.walkTokens(u,m.walkTokens);let k=w(u,m);return m.hooks&&(k=m.hooks.postprocess(k)),k}catch(u){return z(u)}}}onError(a,r){return f=>{if(f.message+=`
Please report this to https://github.com/markedjs/marked.`,a){const c="<p>An error occurred:</p><pre>"+Ve(f.message+"",!0)+"</pre>";return r?Promise.resolve(c):c}if(r)return Promise.reject(f);throw f}}},so=new _2;function Ct(a,r){return so.parse(a,r)}Ct.options=Ct.setOptions=function(a){return so.setOptions(a),Ct.defaults=so.defaults,Lh(Ct.defaults),Ct};Ct.getDefaults=oc;Ct.defaults=co;Ct.use=function(...a){return so.use(...a),Ct.defaults=so.defaults,Lh(Ct.defaults),Ct};Ct.walkTokens=function(a,r){return so.walkTokens(a,r)};Ct.parseInline=so.parseInline;Ct.Parser=xn;Ct.parser=xn.parse;Ct.Renderer=ka;Ct.TextRenderer=dc;Ct.Lexer=hn;Ct.lexer=hn.lex;Ct.Tokenizer=Ca;Ct.Hooks=Fa;Ct.parse=Ct;Ct.options;Ct.setOptions;Ct.use;Ct.walkTokens;Ct.parseInline;xn.parse;hn.lex;const U2=Object.assign({"../../content/0.0.md":$u,"../../content/1.1.md":tm,"../../content/1.2.md":em,"../../content/1.3.md":nm,"../../content/1.4.md":om,"../../content/2.1.md":im,"../../content/2.2.md":lm,"../../content/2.3.md":am,"../../content/2.4.md":rm,"../../content/2.5.md":sm,"../../content/2.6.md":cm,"../../content/2.7.md":fm,"../../content/3.1.md":dm,"../../content/3.2.md":hm,"../../content/3.3.md":xm,"../../content/3.4.md":um,"../../content/3.5.md":mm,"../../content/3.6.md":ym,"../../content/3.7.md":pm,"../../content/3.8.md":gm,"../../content/4.1.md":Fm,"../../content/4.10.md":wm,"../../content/4.11.md":vm,"../../content/4.12.md":bm,"../../content/4.2.md":Cm,"../../content/4.3.md":km,"../../content/4.4.md":zm,"../../content/4.5.md":Sm,"../../content/4.6.md":Am,"../../content/4.7.md":Em,"../../content/4.8.md":Rm,"../../content/4.9.md":Bm,"../../content/5.1.md":Mm,"../../content/5.2.md":Tm,"../../content/5.3.md":Dm,"../../content/5.4.md":Om,"../../content/5.5.md":jm,"../../content/5.6.md":Nm,"../../content/5.7.md":Lm,"../../content/5.8.md":_m,"../../content/5.9.md":Um,"../../content/6.1.md":Hm,"../../content/6.2.md":Im,"../../content/6.3.md":Pm,"../../content/6.4.md":qm,"../../content/6.5.md":Km,"../../content/6.6.md":Vm,"../../content/6.7.md":Gm,"../../content/6.8.md":Ym,"../../content/6.9.md":Xm,"../../content/7.1.md":Zm,"../../content/7.10.md":Qm,"../../content/7.2.md":Jm,"../../content/7.3.md":Wm,"../../content/7.4.md":$m,"../../content/7.6.md":t2,"../../content/7.7.md":e2,"../../content/7.8.md":n2});function H2(a){if(!a.startsWith("---"))return{meta:{},body:a};const r=a.indexOf(`
---`,3);if(r<0)return{meta:{},body:a};const f=a.slice(3,r).split(`
`),c=a.slice(r+4).replace(/^\n+/,""),x={};let m=null;const z=[];for(const F of f){if(m!==null){if(/^\s+/.test(F)||F.trim()===""){z.push(F.replace(/^ {2}/,""));continue}x[m]=z.join(`
`).trim(),m=null,z.length=0}const w=/^([a-zA-Z_]+):\s*(.*)$/.exec(F);w&&(w[2].trim()==="|"?m=w[1]:x[w[1]]=w[2].trim())}return m!==null&&(x[m]=z.join(`
`).trim()),{meta:x,body:c}}function I2(a){return a.replace(/<blockquote>\s*<p><strong>(Discuss|Docs|Show|Ask):<\/strong>/g,(r,f)=>`<blockquote class="callout callout-${f.toLowerCase()}"><p><strong>${f}:</strong>`)}function P2(a){a=a.replace(/<!-- draft[\s\S]*?-->/g,"");const r=a.split(/^## Concept · /m),f=[];for(const c of r.slice(1)){const x=c.indexOf(`
`),m=(x<0?c:c.slice(0,x)).trim();let z=x<0?"":c.slice(x+1),F;const w=/^::: visual\s*\n([\s\S]*?)\n:::\s*$/m.exec(z);w&&(F=w[1],z=z.replace(w[0],"")),f.push({title:m,html:I2(Ct.parse(z,{async:!1})),visual:F})}return f}const Xh=new Map;for(const a of Object.values(U2)){const{meta:r,body:f}=H2(a);r.task&&Xh.set(r.task,{task:r.task,summary:r.summary??"",file:r.file,method:r.method,prompt:r.prompt??"",slides:P2(f)})}function hc(a){return Xh.get(a)}function Zh({task:a,content:r,onDone:f,onReachedEnd:c}){const[x,m]=dt.useState(0),[z,F]=dt.useState(!0),w=r.slides[x],u=!!w.visual&&w.html.trim()==="",k=x===r.slides.length-1;dt.useEffect(()=>{k&&(c==null||c())},[k,c]);const O=()=>m(L=>Math.max(0,L-1)),D=()=>m(L=>Math.min(r.slides.length-1,L+1)),Y=h.jsxs("div",{className:`slide-card flex flex-col rounded-2xl border border-[var(--color-teal)]/60 bg-[#F7F2EA] text-[#191741] shadow-xl ${z?"h-full w-full":"aspect-[16/9] w-full"}`,onKeyDown:L=>{L.key==="ArrowRight"&&D(),L.key==="ArrowLeft"&&O(),L.key==="Escape"&&F(!1)},tabIndex:0,children:[h.jsxs("div",{className:"flex items-center justify-between gap-4 px-6 pt-4",children:[h.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[h.jsxs("span",{className:"shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0a8f8f]",children:["Concept · ",x+1," / ",r.slides.length]}),h.jsxs("span",{className:"truncate text-sm text-[#191741]/80",children:[h.jsx("span",{className:"text-[#191741]/50",children:a.tier==="intro"?"Introduction · ":`Task ${va(a)} · `}),a.tier==="intro"?w.title:`${a.title}${u?` · ${w.title}`:""}`]}),a.tier==="intro"?null:h.jsx("span",{className:`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold ${ec(a.tier)}`,children:a.tier})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"flex gap-1",children:r.slides.map((L,G)=>h.jsx("button",{type:"button","aria-label":L.title,onClick:()=>m(G),className:`h-1.5 w-6 rounded-full ${G===x?"bg-[var(--color-teal)]":"bg-[#191741]/15"}`},L.title))}),h.jsx("button",{type:"button",onClick:()=>F(L=>!L),className:"rounded border border-[#191741]/25 px-2 py-0.5 text-[11px] text-[#191741]/70",children:z?"Exit":"Present"})]})]}),h.jsxs("div",{className:`grid flex-1 min-h-0 ${u?"px-4 py-3":"gap-8 px-8 py-6"} ${w.visual&&!u?"md:grid-cols-[1fr_1.1fr]":""}`,children:[u?null:h.jsxs("div",{className:"min-h-0 overflow-auto",children:[h.jsx("h2",{className:`mb-5 font-semibold leading-tight ${z?"text-4xl":"text-3xl"}`,style:{fontFamily:"var(--font-display)"},children:w.title}),h.jsx("div",{className:`md slide ${z?"text-lg":""}`,dangerouslySetInnerHTML:{__html:w.html}})]}),w.visual?h.jsx("div",{className:`visual flex min-h-0 items-center justify-center overflow-hidden ${u?"full-bleed":"rounded-xl border border-[#191741]/10 bg-white p-4"}`,dangerouslySetInnerHTML:{__html:w.visual}}):null]}),h.jsxs("div",{className:"flex items-center justify-between border-t border-[#191741]/10 px-6 py-3",children:[h.jsx("button",{type:"button",disabled:x===0,onClick:O,className:"rounded-md border border-[#191741]/25 px-3 py-1.5 text-sm text-[#191741] disabled:opacity-40",children:"← Previous"}),k?h.jsx("button",{type:"button",onClick:()=>{F(!1),f()},className:"rounded-md bg-[var(--color-violet)] px-4 py-1.5 text-sm font-semibold text-white",children:a.tier==="intro"?"Start Session 1 →":"Go to the task →"}):h.jsx("button",{type:"button",onClick:D,className:"rounded-md bg-[var(--color-teal)] px-4 py-1.5 text-sm font-semibold text-[#191741]",children:"Next →"})]})]});return z?h.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-[#191741]/95 p-8",children:[h.jsxs("div",{className:"w-full max-w-6xl text-left",children:[h.jsxs("div",{className:"text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-light)]",children:[a.session," · ",a.module]}),h.jsx("h1",{className:"truncate text-xl font-semibold text-white",style:{fontFamily:"var(--font-display)"},children:a.tier==="intro"?"00 · Introduction":`Task ${va(a)} · ${a.title}`})]}),h.jsx("div",{className:"aspect-[16/9] max-h-[82vh] w-full max-w-6xl",children:Y})]}):Y}function q2({task:a,content:r}){const[f,c]=dt.useState(!1),[x,m]=dt.useState(!1),z=a.tier==="T1",F=(r==null?void 0:r.summary)||a.description||"",w=(r==null?void 0:r.prompt)||a.description||"";async function u(){try{await navigator.clipboard.writeText(w),c(!0),setTimeout(()=>c(!1),1500)}catch{}}return h.jsxs("div",{className:`rounded-xl border ${z?"border-[var(--color-violet)]/40 bg-[var(--color-violet)]/10":"border-[var(--color-yellow)]/50 bg-[var(--color-yellow)]/15"}`,children:[h.jsxs("div",{className:"px-5 pt-4",children:[h.jsx("span",{className:"mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]",children:z?"Tier 1 · AI-accelerated":a.tier==="T2"?"Tier 2 · human-in-the-loop":"Pre-built · study it"}),h.jsx("p",{className:"text-[15px] leading-relaxed text-[var(--color-text)]",children:F}),r!=null&&r.file?h.jsxs("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",children:[h.jsx("code",{className:"rounded bg-[var(--color-bg)]/60 px-2 py-1",children:r.file}),r.method?h.jsx("code",{className:"rounded bg-[var(--color-bg)]/60 px-2 py-1",children:r.method}):null]}):null]}),a.tier==="T2"&&a.decisions&&a.decisions.length>0?h.jsx("ul",{className:"mx-5 mt-4 space-y-2 rounded-lg border border-[var(--color-yellow)]/40 bg-[var(--color-bg-card)] p-3",children:a.decisions.map((k,O)=>h.jsxs("li",{className:"flex items-start gap-2 text-sm text-[var(--color-text-secondary)]",children:[h.jsx(Zu,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-yellow)]"}),h.jsx("span",{children:k})]},O))}):null,h.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 border-t border-[var(--color-brd)]/60 px-5 py-3",children:[w?h.jsx("button",{type:"button",onClick:u,className:"rounded-md bg-[var(--color-violet)] px-3 py-1.5 text-sm font-semibold text-white",children:f?h.jsxs(h.Fragment,{children:[h.jsx(nc,{size:14,className:"mr-1 inline align-[-2px]"}),"Copied"]}):"Copy prompt"}):null,h.jsx("button",{type:"button",onClick:()=>m(k=>!k),className:"text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:underline",children:x?"Hide details":"Details"})]}),x?h.jsxs("div",{className:"space-y-3 border-t border-[var(--color-brd)]/60 px-5 py-4 text-sm text-[var(--color-text-secondary)]",children:[w?h.jsxs("div",{children:[h.jsx("span",{className:"mb-1 block text-[11px] font-semibold uppercase tracking-wide",children:"The prompt"}),h.jsx("pre",{className:"whitespace-pre-wrap rounded-lg bg-[var(--color-bg)]/60 p-3 font-mono text-xs leading-relaxed",children:w})]}):null,a.hint?h.jsxs("div",{className:"flex items-start gap-2 rounded-lg border border-[var(--color-brd)] bg-[var(--color-bg-card)] p-3",children:[h.jsx(Yu,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-teal-light)]"}),h.jsx("span",{className:"min-w-0 break-words",children:a.hint})]}):null]}):null]})}function K2({stage:a,hasConcept:r,onStage:f,done:c}){const x=[{key:"concept",label:"1 · Concept"},{key:"task",label:"2 · Task"},{key:"try",label:"3 · Try It"}];return h.jsx("div",{className:"flex gap-2 text-xs",children:x.map(m=>{const z=m.key===a||m.key==="try"&&a==="task",F=m.key==="concept"&&!r,w=!!(c!=null&&c[m.key]);return h.jsxs("button",{type:"button",disabled:F,onClick:()=>f(m.key==="try"?"task":m.key),title:w?m.key==="concept"?"Concept slides finished":m.key==="task"?"Task card opened":"Try It answered 2xx":void 0,className:`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold ${z?"bg-[var(--color-teal)] text-[#191741]":w?"border border-[var(--color-teal)]/60 text-[var(--color-teal-light)]":"border border-[var(--color-brd)] text-[var(--color-text-muted)]"} disabled:opacity-40`,children:[w?h.jsx("span",{className:`grid h-3.5 w-3.5 place-items-center rounded-full ${z?"bg-[#191741] text-[var(--color-teal)]":"bg-[var(--color-teal)] text-[#191741]"}`,children:h.jsx(nc,{size:9})}):null,m.label]},m.key)})})}const V2=["locale","priceCurrency","priceCountry","priceChannel","priceCustomerGroup"],G2={locale:"en-US",priceCurrency:"USD",priceCountry:"US",priceChannel:"<channel key>",priceCustomerGroup:"<group id>"};function Y2(a){const r={key:"locale",value:"en-US"},f=[r,{key:"priceCurrency",value:"USD"},{key:"priceCountry",value:"US"}],c=a.capability;if(c.startsWith("search.")||c==="catalog.pdpInStore"){const x=[{key:"store",value:"b2c-retail-store"},...f];switch(c){case"search.fullText":return[...x,{key:"q",value:"chair"}];case"search.byCategory":return[...x,{key:"category",value:"furniture"}];case"search.facetsConfig":return[...x,{key:"dynamic",value:"true"}];case"search.postFilter":return[...x,{key:"filter",value:"colour:white"}];default:return x}}return c==="cart.create"?[{key:"store",value:"b2c-retail-store"},{key:"currency",value:"EUR"},{key:"country",value:"DE"}]:c==="cart.recurring"?[{key:"recurring",value:"true"}]:c==="customer.cartMerge"?[{key:"mergeMode",value:"MergeWithExistingCustomerCart"}]:c==="customer.groups"?[{key:"priceCurrency",value:"USD"},{key:"priceCountry",value:"US"}]:c==="distribution.store"?[{key:"store",value:"b2c-retail-store"}]:c==="catalog.categories"?[r]:c.startsWith("catalog.")||/\bproducts\b/.test(a.endpoint)?f:/\bcategories\b/.test(a.endpoint)?[r]:[]}function X2(a){switch(a.capability){case"distribution.storeByKey":return{key:"b2c-retail-store"};case"catalog.pdp":case"catalog.pdpInStore":case"catalog.variantMatrix":return{key:"charlie-armchair"};case"catalog.categoryProducts":return{key:"furniture"};case"catalog.bundles":return{key:"bedding-bundle"};case"catalog.localeSlugs":return{slug:"charlie-armchair"};case"order.create":case"order.ledger":case"order.capture":case"order.states":case"order.recurring":case"ext.messages":return{orderNumber:"<paste your LHC-… order number>"};default:return{}}}function Mh(a){const r=f=>JSON.stringify(f,null,2);switch(a.capability){case"cart.lineItems":return r({sku:"CARM-023",quantity:1,distributionChannelKey:"distribution-channel"});case"cart.recurring":return r({sku:"CARM-023"});case"cart.bundles":return r({bundleKey:"bedding-bundle"});case"cart.channel":return r({distributionChannelKey:"distribution-channel",supplyChannelKey:"pickup-store"});case"cart.stockGate":return r({inventoryMode:"ReserveOnOrder"});case"cart.address":return r({country:"DE",firstName:"Alex",lastName:"Doe",streetName:"Hauptstraße",streetNumber:"1",postalCode:"10115",city:"Berlin"});case"cart.promo":return r({code:"SAVE10"});case"customer.register":return r({email:"new.shopper@lhc.test",password:"Lhc-demo-2026!",firstName:"New",lastName:"Shopper"});case"customer.login":case"customer.cartMerge":return r({email:"ada@lhc.test",password:"Lhc-demo-2026!"});case"customer.addresses":return r({key:"home",country:"DE",firstName:"Ada",lastName:"Lovelace",streetName:"Hauptstraße",streetNumber:"1",postalCode:"10115",city:"Berlin",defaultShipping:!0});case"customer.password":return r({currentPassword:"Lhc-demo-2026!",newPassword:"Lhc-demo-2026!"});case"customer.emailVerify":return r({tokenValue:"<paste the value from POST /api/customers/email/token>"});case"order.states":return r({state:"order-picked"});case"ext.customFields":return r({giftMessage:"Happy birthday, Ada!"});case"ext.import":return r([{sku:"CARM-023",currencyCode:"EUR",centAmount:44900,country:"DE"}]);case"ext.cartRules":return r({action:"Update",resource:{typeId:"cart",id:"try-it",obj:{id:"try-it",version:1,custom:{type:{typeId:"type",id:"order-extras"},fields:{owner:"you"}},lineItems:[{id:"li-1",productId:"charlie-armchair",quantity:11,variant:{id:1,sku:"CARM-023"},price:{id:"p-1",value:{type:"centPrecision",currencyCode:"EUR",centAmount:49900,fractionDigits:2}}}]}}});default:return""}}function Z2(a){return a==="customer.register"?"/register":a==="customer.login"||a==="customer.cartMerge"||a==="customer.password"?"/login":a==="customer.session"?"/":a.startsWith("customer.")||a==="order.history"?"/account":a==="order.create"||a==="order.ledger"||a==="order.recurring"||a==="ext.messages"?"/checkout/confirmation":a.startsWith("order.")||a==="ext.customFields"?"/checkout":a==="cart.shoppingList"||a==="ext.cartRules"||a.startsWith("cart.")?"/cart":a==="catalog.pdp"||a==="catalog.variantMatrix"||a==="catalog.bundles"||a==="catalog.pdpInStore"||a==="cart.recurring"||a==="ext.customObjects"||a==="inventory.read"?"/products/charlie-armchair":a.startsWith("search.")?"/products":"/"}function Q2({task:a,completed:r,loading:f,storefrontUrl:c,onTry:x,steps:m,onStep:z}){const F=Nu(a.endpoint),w=hc(a.id),u=!!(w&&w.slides.length>0),[k,O]=dt.useState(u?"concept":"task"),[D,Y]=dt.useState(a.id);D!==a.id&&(Y(a.id),O(u?"concept":"task")),dt.useEffect(()=>{k==="task"&&(z==null||z(a.id,"task"))},[k,a.id,z]);const[L,G]=dt.useState(()=>X2(a)),[et,kt]=dt.useState(()=>Y2(a)),[H,_]=dt.useState(()=>Mh(a)),st=/^(POST|PUT|PATCH)$/i.test(a.httpMethod)&&Mh(a).trim()!=="",$=ju(a.endpoint,L)+Lu(et),U=F.filter(Q=>!(L[Q]??"").trim()),ct=jh(a.httpMethod),ht=(Q="")=>kt(Et=>Q&&Et.some(Dt=>Dt.key===Q)?Et:[...Et,{key:Q,value:""}]),Oe=(Q,Et)=>kt(Dt=>Dt.map((Kt,E)=>E===Q?{...Kt,...Et}:Kt)),le=Q=>kt(Et=>Et.filter((Dt,Kt)=>Kt!==Q));return h.jsxs("div",{className:"mx-auto max-w-3xl space-y-6 p-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[h.jsx("span",{className:"rounded px-2 py-0.5 text-xs font-semibold",style:{background:`${ct}22`,color:ct},children:a.httpMethod}),h.jsxs("h1",{className:"text-xl font-semibold",style:{fontFamily:"var(--font-display)"},children:[h.jsxs("span",{className:"text-[var(--color-text-muted)]",children:[va(a)," "]}),a.title]}),h.jsx("span",{className:`rounded px-1.5 py-0.5 text-[10px] font-semibold ${ec(a.tier)}`,children:a.tier}),r?h.jsxs("span",{className:"rounded-full bg-[var(--color-teal)]/20 px-2 py-0.5 text-xs text-[var(--color-teal-light)]",children:[h.jsx(nc,{size:12,className:"mr-1 inline align-[-1px]"}),"Completed"]}):null]}),h.jsxs("code",{className:"mt-2 block text-sm text-[var(--color-text-secondary)]",children:[a.httpMethod," ",a.endpoint]}),h.jsx("div",{className:"mt-3",children:h.jsx(K2,{stage:k,hasConcept:u,onStage:O,done:{concept:!!(m!=null&&m.conceptAt)||!u,task:!!(m!=null&&m.taskAt),try:r}})})]}),k==="concept"&&w?h.jsx(Zh,{task:a,content:w,onDone:()=>O("task"),onReachedEnd:()=>z==null?void 0:z(a.id,"concept")},a.id):null,k==="task"?h.jsx(q2,{task:a,content:w}):null,k==="task"?h.jsxs(h.Fragment,{children:[F.length>0?h.jsx(Gs,{title:"Path parameters",children:h.jsx("div",{className:"space-y-2",children:F.map(Q=>h.jsxs("label",{className:"flex items-center gap-3 text-sm",children:[h.jsx("span",{className:"w-24 text-[var(--color-text-muted)]",children:Q}),h.jsx("input",{value:L[Q]??"",onChange:Et=>G(Dt=>({...Dt,[Q]:Et.target.value})),placeholder:`Enter ${Q}…`,className:"flex-1 rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-2 py-1.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"})]},Q))})}):null,h.jsxs(Gs,{title:"Query parameters",children:[h.jsxs("p",{className:"mb-2 text-xs leading-relaxed text-[var(--color-text-muted)]",children:["Sent as the ",h.jsx("code",{children:"?query"}),". Catalog reads use these for localization and price selection —"," ",h.jsx("code",{children:"locale"})," · ",h.jsx("code",{children:"priceChannel"})," · ",h.jsx("code",{children:"priceCountry"})," · ",h.jsx("code",{children:"priceCurrency"})," ·"," ",h.jsx("code",{children:"priceCustomerGroup"}),". Edit them and ",h.jsx("em",{children:"Try It"})," again to watch the effect: blank the currency to see the price fall back to ",h.jsx("code",{children:"—"}),", or change ",h.jsx("code",{children:"locale"})," to switch the name & slug. Defaults match what the storefront sends."]}),h.jsxs("div",{className:"space-y-2",children:[et.map((Q,Et)=>h.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[h.jsx("input",{value:Q.key,onChange:Dt=>Oe(Et,{key:Dt.target.value}),placeholder:"param",className:"w-40 rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-2 py-1.5 font-mono text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"}),h.jsx("span",{className:"text-[var(--color-text-muted)]",children:"="}),h.jsx("input",{value:Q.value,onChange:Dt=>Oe(Et,{value:Dt.target.value}),placeholder:G2[Q.key]??"value",className:"flex-1 rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-2 py-1.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"}),h.jsx("button",{onClick:()=>le(Et),"aria-label":`Remove ${Q.key||"parameter"}`,className:"rounded-md p-1.5 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text)]",children:h.jsx(Nh,{size:14})})]},Et)),et.length===0?h.jsx("p",{className:"text-xs text-[var(--color-text-muted)]",children:"No query parameters — add one below."}):null]}),h.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[h.jsx("button",{onClick:()=>ht(),className:"rounded-md border border-[var(--color-brd-light)] px-2.5 py-1 text-xs font-medium hover:border-[var(--color-violet)]",children:"+ Add parameter"}),V2.filter(Q=>!et.some(Et=>Et.key===Q)).map(Q=>h.jsxs("button",{onClick:()=>ht(Q),className:"rounded-full border border-[var(--color-brd)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-secondary)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal-light)]",children:["+ ",Q]},Q))]})]}),a.capability==="customer.register"||a.capability==="customer.login"||a.capability==="customer.cartMerge"?h.jsxs("div",{className:"flex items-start gap-2 rounded-lg border border-[var(--color-teal)]/40 bg-[var(--color-teal)]/10 p-3 text-sm text-[var(--color-text-secondary)]",children:[h.jsx(kh,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-teal-light)]"}),h.jsxs("span",{children:["Sign-up / sign-in hand over the ",h.jsx("em",{children:"session's"})," guest basket. To see it happen: create a cart (4.1) and add items first, and make sure the session is not already signed in (",h.jsx("code",{children:"GET /api/session"})," →"," ",h.jsx("code",{children:"POST /api/session/sign-out"})," if it is) — a signed-in session has no guest basket, so"," ",h.jsx("code",{children:"activeCartId"})," comes back ",h.jsx("code",{children:"null"}),". The response's ",h.jsx("code",{children:"note"})," says what happened."]})]}):null,st?h.jsxs(Gs,{title:"Request body",children:[h.jsxs("p",{className:"mb-2 text-xs leading-relaxed text-[var(--color-text-muted)]",children:["Sent as the JSON request body (",h.jsx("code",{children:"content-type: application/json"}),"). Session 4 is the first with write tasks — edit the fields (a real ",h.jsx("code",{children:"sku"}),", a ",h.jsx("code",{children:"bundleKey"}),", a promo ",h.jsx("code",{children:"code"}),") and ",h.jsx("em",{children:"Try It"}),". A cart must exist first — run ",h.jsx("code",{children:"4.1"})," once."]}),h.jsx("textarea",{value:H,onChange:Q=>_(Q.target.value),rows:Math.min(12,Math.max(3,H.split(`
`).length+1)),spellCheck:!1,placeholder:"{ }",className:"w-full rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-3 py-2 font-mono text-xs text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"})]}):null,h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[h.jsx("button",{onClick:()=>x(a,a.httpMethod,$,st?H:void 0),disabled:f||U.length>0,title:U.length>0?`Enter ${U.join(", ")} first`:void 0,className:"inline-flex items-center gap-2 rounded-md bg-[var(--color-violet)] px-4 py-2 font-medium text-white hover:bg-[var(--color-violet-light)] disabled:cursor-not-allowed disabled:opacity-60",children:f?`Calling ${Ce().backendName}…`:"Try It"}),U.length>0?h.jsxs("span",{className:"text-xs text-[var(--color-yellow)]",children:[h.jsx(Xu,{size:12,className:"mr-1 inline align-[-1px]"}),"Enter ",h.jsx("code",{children:U.join(", ")})," to call this endpoint."]}):h.jsxs("span",{className:"text-xs text-[var(--color-text-muted)]",children:["Sends ",h.jsx("code",{style:{color:ct},children:a.httpMethod})," ",h.jsx("code",{children:$})," to ",Ce().tryItTarget]}),h.jsx("a",{href:`${c}${Z2(a.capability)}?focus=${encodeURIComponent(a.capability)}`,target:"_blank",rel:"noreferrer",className:"ml-auto rounded-md border border-[var(--color-brd-light)] px-3 py-1.5 text-sm hover:border-[var(--color-violet)]",children:"View in Storefront ↗"})]}),r?null:h.jsxs("div",{className:"flex items-start gap-3 rounded-lg border border-[var(--color-yellow)]/30 bg-[var(--color-yellow)]/10 p-4 text-sm",children:[h.jsx(kh,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-yellow)]"}),h.jsxs("div",{className:"text-[var(--color-text-secondary)]",children:[h.jsx("strong",{className:"text-[var(--color-text)]",children:"Not implemented yet."})," ",Ce().implementHint,", then ",h.jsx("em",{children:"Try It"})," — a ",h.jsx("code",{children:"2xx"})," marks it complete and unlocks ",h.jsx("code",{children:a.capability})," in the storefront."]})]})]}):null]})}function Gs({title:a,children:r}){return h.jsxs("section",{children:[h.jsx("h2",{className:"mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:a}),r]})}const Pn="intro",J2={id:Pn,module:"course",session:"Introduction",taskNumber:0,title:"Welcome",tier:"intro",capability:"",endpoint:"",httpMethod:"",completed:!1};function Th(){var a;return!!((a=hc(Pn))!=null&&a.slides.length)}function W2({onDone:a,onReachedEnd:r}){const f=hc(Pn);return f?h.jsxs("div",{className:"mx-auto max-w-3xl space-y-6 p-6",children:[h.jsxs("div",{children:[h.jsxs("h1",{className:"text-xl font-semibold",style:{fontFamily:"var(--font-display)"},children:[h.jsx("span",{className:"text-[var(--color-text-muted)]",children:"00 "}),"Introduction"]}),h.jsx("p",{className:"mt-1 text-sm text-[var(--color-text-secondary)]",children:"The course, the stack, the setup — before the first task."})]}),h.jsx(Zh,{task:J2,content:f,onDone:a,onReachedEnd:r},Pn)]}):null}function $2({state:a,loading:r}){if(r)return h.jsxs("div",{className:"p-4 text-sm text-[var(--color-text-muted)]",children:["Calling ",Ce().backendName,"…"]});if(!a)return h.jsxs("div",{className:"p-4 text-sm text-[var(--color-text-muted)]",children:["Hit ",h.jsx("span",{className:"font-medium text-[var(--color-text-secondary)]",children:"Try It"})," on a task to see the live request & response here."]});const f=Iu(a.result.status);return h.jsxs("div",{className:"space-y-3 p-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("code",{className:"text-xs text-[var(--color-text-secondary)]",children:[a.method," ",a.endpoint]}),h.jsx("span",{className:`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${f.cls}`,children:f.label})]}),a.result.status===501?h.jsxs("p",{className:"rounded-md bg-[var(--color-yellow)]/10 px-3 py-2 text-xs text-[var(--color-yellow)]",children:["Pending — ",Ce().implementHint.charAt(0).toLowerCase()+Ce().implementHint.slice(1),", then Try It again."]}):null,a.result.status===0?h.jsxs("p",{className:"rounded-md bg-[var(--color-bg-card)] px-3 py-2 text-xs text-[var(--color-text-muted)]",children:["No response — is ",Ce().tryItTarget," running on ",Ce().backendLocation,"?"]}):null,a.requestBody&&a.requestBody.trim()!==""?h.jsxs("div",{children:[h.jsx("p",{className:"mb-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Request body"}),h.jsx("pre",{className:"overflow-auto rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-base)] p-3 text-xs leading-relaxed text-[var(--color-text-secondary)]",style:{fontFamily:"var(--font-mono)"},children:a.requestBody}),h.jsx("p",{className:"mb-1 mt-3 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Response"})]}):null,h.jsx("pre",{className:"max-h-[60vh] overflow-auto rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-base)] p-3 text-xs leading-relaxed text-[var(--color-text-secondary)]",style:{fontFamily:"var(--font-mono)"},children:typeof a.result.body=="string"?a.result.body:JSON.stringify(a.result.body,null,2)})]})}function t6({summaries:a,telemetry:r=[],modules:f}){const c=Pu(f),x=za(f),[m,z]=dt.useState("completion"),[F,w]=dt.useState(-1),u=dt.useMemo(()=>new Map(x.map(H=>[H.id,H])),[x]),{checkedTasks:k,flaggedByTask:O,flagRows:D,totalFlags:Y}=dt.useMemo(()=>{const H=new Set,_=new Map,K=[];let st=0;for(const $ of r)for(const U of $.signals)H.add(U.taskId),U.status==="FLAGGED"&&(_.set(U.taskId,(_.get(U.taskId)??0)+1),K.push({participant:$.participantName||$.participantId,signal:U}),st+=1);return{checkedTasks:H,flaggedByTask:_,flagRows:K,totalFlags:st}},[r]),L=dt.useMemo(()=>{const H=[...a];return H.sort((_,K)=>(m==="name"?_.participantName.localeCompare(K.participantName):In(_.completed,_.total)-In(K.completed,K.total))*F),H},[a,m,F]);if(a.length===0)return h.jsx("div",{className:"mx-auto max-w-5xl p-6",children:h.jsxs("div",{className:"rounded-xl border border-dashed border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-8 text-center text-sm text-[var(--color-text-muted)]",children:["No participant progress yet. As participants complete tasks, their rows appear here (from"," ",h.jsx("code",{children:"GET /api/training/progress/all"}),")."]})});const G=Math.round(a.reduce((H,_)=>H+In(_.completed,_.total),0)/a.length),et=a.filter(H=>H.total>0&&H.completed===H.total).length,kt=(H,_)=>h.jsxs("button",{onClick:()=>{m===_?w(K=>K*-1):(z(_),w(-1))},className:"font-medium hover:text-[var(--color-violet-light)]",children:[H,m===_?F===1?" ▲":" ▼":""]});return h.jsxs("div",{className:"mx-auto max-w-5xl space-y-5 p-6",children:[h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsx(Ys,{label:"Participants",value:String(a.length)}),h.jsx(Ys,{label:"Class average",value:`${G}%`}),h.jsx(Ys,{label:"Fully complete",value:`${et}/${a.length}`})]}),h.jsx("div",{className:"overflow-x-auto rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:h.jsxs("table",{className:"w-full border-collapse text-sm",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-[var(--color-brd)] text-left text-[var(--color-text-secondary)]",children:[h.jsx("th",{className:"px-3 py-2",children:kt("Participant","name")}),c.map(H=>{const{codename:_,subtitle:K}=Oh(H);return h.jsxs("th",{className:"px-3 py-2 text-center font-medium",title:K?`${_} · ${K}`:void 0,children:[h.jsx("span",{className:"block",children:H}),_?h.jsx("span",{className:"block text-[11px] font-normal text-[var(--color-text-muted)]",children:_}):null]},H)}),h.jsx("th",{className:"px-3 py-2 text-center",title:"Concept slides finished · task cards opened (attentiveness, not outcome)",children:"Concept · Task"}),h.jsx("th",{className:"px-3 py-2 text-right",children:kt("Total","completion")})]})}),h.jsx("tbody",{children:L.map(H=>h.jsxs("tr",{className:"border-b border-[var(--color-brd)]/60 last:border-0",children:[h.jsx("td",{className:"px-3 py-2 font-medium",children:H.participantName}),c.map(_=>{const K=H.perSession[_]??{completed:0,total:0};return h.jsx("td",{className:"px-3 py-2 text-center",style:{backgroundColor:Ch(In(K.completed,K.total))},children:K.total?`${K.completed}/${K.total}`:"—"},_)}),h.jsx("td",{className:"px-3 py-2 text-center text-xs text-[var(--color-text-secondary)]",children:(()=>{var U;const _=H.steps??{},K=x.filter(ct=>{var ht;return(ht=_[ct.id])==null?void 0:ht.conceptAt}).length,st=x.filter(ct=>{var ht;return(ht=_[ct.id])==null?void 0:ht.taskAt}).length,$=!!((U=_.intro)!=null&&U.conceptAt);return h.jsxs("span",{title:`${$?"Watched the Introduction · ":""}${K} concept decks finished · ${st} task cards opened`,children:[$?h.jsx("span",{className:"mr-1 text-[var(--color-teal-light)]",children:"00✓"}):null,K," · ",st]})})()}),h.jsxs("td",{className:"px-3 py-2 text-right font-medium",children:[In(H.completed,H.total),"%"]})]},H.participantId))})]})}),h.jsxs("div",{className:"overflow-x-auto rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsx("div",{className:"px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Per-task completion — participants done"}),h.jsx("table",{className:"w-full border-collapse text-xs",children:h.jsx("tbody",{children:h.jsx("tr",{children:x.map(H=>{const _=a.filter($=>$.perTask[H.id]).length,K=a.filter($=>{var U,ct;return(ct=(U=$.steps)==null?void 0:U[H.id])==null?void 0:ct.conceptAt}).length,st=a.filter($=>{var U,ct;return(ct=(U=$.steps)==null?void 0:U[H.id])==null?void 0:ct.taskAt}).length;return h.jsxs("td",{title:`${H.title} — ${_}/${a.length} done · ${K} finished the concept · ${st} opened the task`,className:"border border-[var(--color-brd)] px-2 py-2 text-center",style:{backgroundColor:Ch(In(_,a.length))},children:[h.jsxs("div",{className:"font-medium",children:[H.module.slice(0,3),"·",H.taskNumber]}),h.jsxs("div",{className:"text-[10px] text-[var(--color-text-muted)]",children:[_,"/",a.length]}),h.jsxs("div",{className:"text-[9px] text-[var(--color-text-muted)]/80",title:"concept · task",children:[K,"·",st]})]},H.id)})})})})]}),k.size>0?h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Approach signals"}),h.jsx("span",{className:"text-xs text-[var(--color-text-muted)]",children:"how each task was implemented — not just whether it works"}),h.jsx("span",{className:`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${Y>0?"bg-[var(--color-yellow)]/20 text-[var(--color-yellow)]":"bg-[var(--color-teal)]/20 text-[var(--color-teal-light)]"}`,children:Y>0?`${Y} flag${Y===1?"":"s"}`:"all on the expected path"})]}),h.jsxs("div",{className:"overflow-x-auto rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsx("div",{className:"px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Per-task — participants flagged"}),h.jsx("table",{className:"w-full border-collapse text-xs",children:h.jsx("tbody",{children:h.jsx("tr",{children:x.map(H=>{const _=k.has(H.id),K=O.get(H.id)??0;return h.jsxs("td",{title:_?`${H.title} — ${K}/${a.length} flagged`:`${H.title} — no approach rule`,className:"border border-[var(--color-brd)] px-2 py-2 text-center",style:_?{backgroundColor:Hu(In(K,a.length))}:void 0,children:[h.jsxs("div",{className:"font-medium",children:[H.module.slice(0,3),"·",H.taskNumber]}),h.jsx("div",{className:"text-[10px] text-[var(--color-text-muted)]",children:_?K:"—"})]},H.id)})})})})]}),D.length>0?h.jsxs("div",{className:"overflow-hidden rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsx("div",{className:"px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Flag detail"}),h.jsx("ul",{className:"divide-y divide-[var(--color-brd)]/60",children:D.map(({participant:H,signal:_},K)=>{const st=u.get(_.taskId);return h.jsxs("li",{className:"px-3 py-2 text-xs",children:[h.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-2",children:[h.jsx("span",{className:"font-medium",children:H}),h.jsx("span",{className:"text-[var(--color-text-muted)]",children:st?`${st.title} (${st.module}·${st.taskNumber})`:_.taskId}),h.jsxs("span",{className:"ml-auto text-[10px] text-[var(--color-text-muted)]",children:[_.source?`via ${_.source} · `:"",_.callCount," call",_.callCount===1?"":"s"]})]}),h.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:_.flags.map(($,U)=>h.jsx("span",{className:"rounded bg-[var(--color-yellow)]/15 px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-yellow)]",children:$},U))}),_.observed.length>0?h.jsx("div",{className:"mt-1 font-mono text-[10px] text-[var(--color-text-muted)]",children:_.observed.join("  ·  ")}):null]},`${_.taskId}-${H}-${K}`)})})]}):h.jsx("div",{className:"rounded-xl border border-dashed border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-4 text-center text-xs text-[var(--color-text-muted)]",children:"No approach flags — every attempted task used its expected commercetools calls."})]}):null]})}function Ys({label:a,value:r}){return h.jsxs("div",{className:"rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-4",children:[h.jsx("div",{className:"text-2xl font-semibold",children:r}),h.jsx("div",{className:"text-xs text-[var(--color-text-muted)]",children:a})]})}function e6(){const a=Ce();return h.jsx("div",{className:"grid flex-1 place-items-center",children:h.jsxs("div",{className:"max-w-md rounded-2xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-8 text-center",children:[h.jsx("div",{className:"mb-3 flex justify-center text-[var(--color-text-muted)]",children:h.jsx(Qu,{size:32})}),h.jsxs("h2",{className:"text-lg font-semibold",children:["Start your ",a.backendName]}),h.jsxs("p",{className:"mt-2 text-sm text-[var(--color-text-secondary)]",children:["Commerce Canvas can’t reach the training API on ",h.jsx("code",{children:a.backendLocation}),". Start it and this connects automatically — no reload needed."]}),h.jsx("div",{className:"mt-4 space-y-2 text-left text-xs",style:{fontFamily:"var(--font-mono)"},children:a.startCommands.map(r=>h.jsx("pre",{className:"overflow-x-auto rounded-md bg-[var(--color-bg-base)] p-3 text-[var(--color-text-secondary)]",children:r},r))})]})})}function n6(){var N,I,J,ot,xt,Gt,Ot,un,qn,fo,ti,Ue;const[a,r]=dt.useState("participant"),[f,c]=dt.useState(null),[x,m]=dt.useState(null),[z,F]=dt.useState(null),[w,u]=dt.useState(!1),[k,O]=dt.useState(!1),D=Wo(Eu,15e3);_u((N=D.data)!=null&&N.ok?D.data.data:null);const Y=Wo(Au,8e3),L=Wo(Ru,8e3),G=Wo(Bu,3e3),et=Wo(Mu,4e3),kt=Wo(Du,4e3),H="http://localhost:3000",_=dt.useRef(new Set),[K,st]=dt.useState(new Set),$=dt.useRef(!1);dt.useEffect(()=>{var ho,xo,$i;const gt=new Set,ae=(xo=(ho=G.data)==null?void 0:ho.data)==null?void 0:xo.perTask;if(ae)for(const[mn,Zt]of Object.entries(ae))Zt&&gt.add(mn);const ne=($i=Y.data)==null?void 0:$i.data;if(ne)for(const mn of ne)for(const Zt of mn.sessions)for(const tl of Zt.tasks)tl.completed&&gt.add(tl.id);let He=!1;const je=new Set(_.current);gt.forEach(mn=>{je.has(mn)||(je.add(mn),He=!0)}),He&&(_.current=je,st(je))},[Y.data,G.data]);const U=((I=Y.data)==null?void 0:I.data)??[],ct=dt.useMemo(()=>za(U),[U]);dt.useEffect(()=>{if($.current||ct.length===0)return;const gt=ct.find(ne=>!K.has(ne.id))??ct[0];m(gt.session);const ae=K.size===0&&Th();c(ne=>ne??(ae?Pn:gt.id)),$.current=!0},[ct,K]);const ht=ct.find(gt=>gt.id===f)??null,Oe=f===Pn,le=gt=>{c(gt.id),m(gt.session)};async function Q(gt,ae,ne,He){u(!0),O(!0);const je=await Ou(ae,ne,He);F({title:gt.title,method:ae,endpoint:ne,requestBody:He,result:je}),u(!1),je.ok&&G.refresh()}const Et=((ot=(J=G.data)==null?void 0:J.data)==null?void 0:ot.steps)??{},Dt=dt.useRef(new Set),Kt=dt.useCallback((gt,ae)=>{const ne=`${gt}|${ae}`;Dt.current.has(ne)||(Dt.current.add(ne),Tu(gt,ae).then(He=>{He.ok?G.refresh():Dt.current.delete(ne)}))},[G]),E=Y.data,j=!!E&&E.status===0,Z=!!E&&E.status!==0,yt=(Gt=(xt=G.data)==null?void 0:xt.data)==null?void 0:Gt.participantId,wt=((qn=(un=(Ot=et.data)==null?void 0:Ot.data)==null?void 0:un.find(gt=>gt.participantId===yt))==null?void 0:qn.participantName)??yt,g=(fo=L.data)!=null&&fo.ok?L.data.data:null,T=(g==null?void 0:g.name)||(g==null?void 0:g.key)||null;return h.jsxs("div",{className:"flex h-screen flex-col overflow-hidden",children:[h.jsx(Ju,{view:a,onView:r,connected:Z,modules:U,completed:K,participantName:wt,projectName:T,storefrontUrl:H,focusCapability:(ht==null?void 0:ht.capability)??null,inspectorOpen:k,onToggleInspector:()=>O(gt=>!gt)}),j?h.jsx(e6,{}):a==="trainer"?h.jsx("div",{className:"min-h-0 flex-1 overflow-auto",children:h.jsx(t6,{summaries:((ti=et.data)==null?void 0:ti.data)??[],telemetry:((Ue=kt.data)==null?void 0:Ue.data)??[],modules:U})}):h.jsxs("div",{className:"flex min-h-0 flex-1",children:[h.jsx(Wu,{modules:U,completed:K,steps:Et,selectedId:f,onSelect:le,onSelectIntro:Th()?()=>c(Pn):void 0,expandedSession:x,onToggleSession:gt=>m(gt||null)}),h.jsx("main",{className:"surface-light min-w-0 flex-1 overflow-auto",style:(ht==null?void 0:ht.tier)==="T1"?{backgroundImage:"radial-gradient(130% 55% at 50% 0%, rgba(99, 89, 255, 0.12), transparent 70%)"}:(ht==null?void 0:ht.tier)==="T2"?{backgroundImage:"radial-gradient(130% 55% at 50% 0%, rgba(255, 200, 6, 0.18), transparent 70%)"}:void 0,children:Oe?h.jsx(W2,{onDone:()=>{const gt=ct[0];gt&&(c(gt.id),m(gt.session))},onReachedEnd:()=>Kt(Pn,"concept")}):ht?h.jsx(Q2,{task:ht,completed:K.has(ht.id),loading:w,storefrontUrl:H,onTry:Q,steps:Et[ht.id],onStep:Kt},ht.id):h.jsx("div",{className:"grid h-full place-items-center p-8 text-center text-[var(--color-text-muted)]",children:E?"Select a task from the sidebar to get started.":"Connecting…"})}),k?h.jsxs("aside",{className:"flex w-[440px] flex-shrink-0 flex-col border-l border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-[var(--color-brd)] px-4 py-2.5",children:[h.jsx("span",{className:"text-sm font-medium",children:"HTTP Inspector"}),h.jsx("button",{onClick:()=>O(!1),className:"text-[var(--color-text-muted)] hover:text-[var(--color-text)]","aria-label":"Close inspector",children:h.jsx(Nh,{size:16})})]}),h.jsx("div",{className:"min-h-0 flex-1 overflow-auto",children:h.jsx($2,{state:z,loading:w})})]}):null]})]})}Su.createRoot(document.getElementById("root")).render(h.jsx(dt.StrictMode,{children:h.jsx(n6,{})}));
