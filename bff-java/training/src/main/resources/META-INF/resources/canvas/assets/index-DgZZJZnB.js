var yu=Object.defineProperty;var pu=(a,r,f)=>r in a?yu(a,r,{enumerable:!0,configurable:!0,writable:!0,value:f}):a[r]=f;var Be=(a,r,f)=>pu(a,typeof r!="symbol"?r+"":r,f);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))c(x);new MutationObserver(x=>{for(const m of x)if(m.type==="childList")for(const k of m.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&c(k)}).observe(document,{childList:!0,subtree:!0});function f(x){const m={};return x.integrity&&(m.integrity=x.integrity),x.referrerPolicy&&(m.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?m.credentials="include":x.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(x){if(x.ep)return;x.ep=!0;const m=f(x);fetch(x.href,m)}})();var Hs={exports:{}},Yi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function gu(){if(xh)return Yi;xh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function f(c,x,m){var k=null;if(m!==void 0&&(k=""+m),x.key!==void 0&&(k=""+x.key),"key"in x){m={};for(var F in x)F!=="key"&&(m[F]=x[F])}else m=x;return x=m.ref,{$$typeof:a,type:c,key:k,ref:x!==void 0?x:null,props:m}}return Yi.Fragment=r,Yi.jsx=f,Yi.jsxs=f,Yi}var uh;function Fu(){return uh||(uh=1,Hs.exports=gu()),Hs.exports}var h=Fu(),Is={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mh;function wu(){if(mh)return J;mh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),k=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),D=Symbol.iterator;function Y(g){return g===null||typeof g!="object"?null:(g=D&&g[D]||g["@@iterator"],typeof g=="function"?g:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,oe={};function ve(g,T,N){this.props=g,this.context=T,this.refs=oe,this.updater=N||_}ve.prototype.isReactComponent={},ve.prototype.setState=function(g,T){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,T,"setState")},ve.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function U(){}U.prototype=ve.prototype;function L(g,T,N){this.props=g,this.context=T,this.refs=oe,this.updater=N||_}var V=L.prototype=new U;V.constructor=L,G(V,ve.prototype),V.isPureReactComponent=!0;var he=Array.isArray;function W(){}var H={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function ce(g,T,N){var I=N.ref;return{$$typeof:a,type:g,key:T,ref:I!==void 0?I:null,props:N}}function Ot(g,T){return ce(g.type,T,g.props)}function nt(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function Ke(g){var T={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(N){return T[N]})}var ne=/\/+/g;function ge(g,T){return typeof g=="object"&&g!==null&&g.key!=null?Ke(""+g.key):T.toString(36)}function Me(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(W,W):(g.status="pending",g.then(function(T){g.status==="pending"&&(g.status="fulfilled",g.value=T)},function(T){g.status==="pending"&&(g.status="rejected",g.reason=T)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function E(g,T,N,I,Q){var te=typeof g;(te==="undefined"||te==="boolean")&&(g=null);var xe=!1;if(g===null)xe=!0;else switch(te){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(g.$$typeof){case a:case r:xe=!0;break;case z:return xe=g._init,E(xe(g._payload),T,N,I,Q)}}if(xe)return Q=Q(g),xe=I===""?"."+ge(g,0):I,he(Q)?(N="",xe!=null&&(N=xe.replace(ne,"$&/")+"/"),E(Q,T,N,"",function(un){return un})):Q!=null&&(nt(Q)&&(Q=Ot(Q,N+(Q.key==null||g&&g.key===Q.key?"":(""+Q.key).replace(ne,"$&/")+"/")+xe)),T.push(Q)),1;xe=0;var Ge=I===""?".":I+":";if(he(g))for(var Oe=0;Oe<g.length;Oe++)I=g[Oe],te=Ge+ge(I,Oe),xe+=E(I,T,N,te,Q);else if(Oe=Y(g),typeof Oe=="function")for(g=Oe.call(g),Oe=0;!(I=g.next()).done;)I=I.value,te=Ge+ge(I,Oe++),xe+=E(I,T,N,te,Q);else if(te==="object"){if(typeof g.then=="function")return E(Me(g),T,N,I,Q);throw T=String(g),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return xe}function j(g,T,N){if(g==null)return g;var I=[],Q=0;return E(g,I,"","",function(te){return T.call(N,te,Q++)}),I}function Z(g){if(g._status===-1){var T=g._result;T=T(),T.then(function(N){(g._status===0||g._status===-1)&&(g._status=1,g._result=N)},function(N){(g._status===0||g._status===-1)&&(g._status=2,g._result=N)}),g._status===-1&&(g._status=0,g._result=T)}if(g._status===1)return g._result.default;throw g._result}var ye=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},be={map:j,forEach:function(g,T,N){j(g,function(){T.apply(this,arguments)},N)},count:function(g){var T=0;return j(g,function(){T++}),T},toArray:function(g){return j(g,function(T){return T})||[]},only:function(g){if(!nt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return J.Activity=O,J.Children=be,J.Component=ve,J.Fragment=f,J.Profiler=x,J.PureComponent=L,J.StrictMode=c,J.Suspense=w,J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,J.__COMPILER_RUNTIME={__proto__:null,c:function(g){return H.H.useMemoCache(g)}},J.cache=function(g){return function(){return g.apply(null,arguments)}},J.cacheSignal=function(){return null},J.cloneElement=function(g,T,N){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var I=G({},g.props),Q=g.key;if(T!=null)for(te in T.key!==void 0&&(Q=""+T.key),T)!ie.call(T,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&T.ref===void 0||(I[te]=T[te]);var te=arguments.length-2;if(te===1)I.children=N;else if(1<te){for(var xe=Array(te),Ge=0;Ge<te;Ge++)xe[Ge]=arguments[Ge+2];I.children=xe}return ce(g.type,Q,I)},J.createContext=function(g){return g={$$typeof:k,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:m,_context:g},g},J.createElement=function(g,T,N){var I,Q={},te=null;if(T!=null)for(I in T.key!==void 0&&(te=""+T.key),T)ie.call(T,I)&&I!=="key"&&I!=="__self"&&I!=="__source"&&(Q[I]=T[I]);var xe=arguments.length-2;if(xe===1)Q.children=N;else if(1<xe){for(var Ge=Array(xe),Oe=0;Oe<xe;Oe++)Ge[Oe]=arguments[Oe+2];Q.children=Ge}if(g&&g.defaultProps)for(I in xe=g.defaultProps,xe)Q[I]===void 0&&(Q[I]=xe[I]);return ce(g,te,Q)},J.createRef=function(){return{current:null}},J.forwardRef=function(g){return{$$typeof:F,render:g}},J.isValidElement=nt,J.lazy=function(g){return{$$typeof:z,_payload:{_status:-1,_result:g},_init:Z}},J.memo=function(g,T){return{$$typeof:u,type:g,compare:T===void 0?null:T}},J.startTransition=function(g){var T=H.T,N={};H.T=N;try{var I=g(),Q=H.S;Q!==null&&Q(N,I),typeof I=="object"&&I!==null&&typeof I.then=="function"&&I.then(W,ye)}catch(te){ye(te)}finally{T!==null&&N.types!==null&&(T.types=N.types),H.T=T}},J.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},J.use=function(g){return H.H.use(g)},J.useActionState=function(g,T,N){return H.H.useActionState(g,T,N)},J.useCallback=function(g,T){return H.H.useCallback(g,T)},J.useContext=function(g){return H.H.useContext(g)},J.useDebugValue=function(){},J.useDeferredValue=function(g,T){return H.H.useDeferredValue(g,T)},J.useEffect=function(g,T){return H.H.useEffect(g,T)},J.useEffectEvent=function(g){return H.H.useEffectEvent(g)},J.useId=function(){return H.H.useId()},J.useImperativeHandle=function(g,T,N){return H.H.useImperativeHandle(g,T,N)},J.useInsertionEffect=function(g,T){return H.H.useInsertionEffect(g,T)},J.useLayoutEffect=function(g,T){return H.H.useLayoutEffect(g,T)},J.useMemo=function(g,T){return H.H.useMemo(g,T)},J.useOptimistic=function(g,T){return H.H.useOptimistic(g,T)},J.useReducer=function(g,T,N){return H.H.useReducer(g,T,N)},J.useRef=function(g){return H.H.useRef(g)},J.useState=function(g){return H.H.useState(g)},J.useSyncExternalStore=function(g,T,N){return H.H.useSyncExternalStore(g,T,N)},J.useTransition=function(){return H.H.useTransition()},J.version="19.2.7",J}var yh;function ec(){return yh||(yh=1,Is.exports=wu()),Is.exports}var de=ec(),Ps={exports:{}},Xi={},qs={exports:{}},Vs={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph;function vu(){return ph||(ph=1,(function(a){function r(E,j){var Z=E.length;E.push(j);e:for(;0<Z;){var ye=Z-1>>>1,be=E[ye];if(0<x(be,j))E[ye]=j,E[Z]=be,Z=ye;else break e}}function f(E){return E.length===0?null:E[0]}function c(E){if(E.length===0)return null;var j=E[0],Z=E.pop();if(Z!==j){E[0]=Z;e:for(var ye=0,be=E.length,g=be>>>1;ye<g;){var T=2*(ye+1)-1,N=E[T],I=T+1,Q=E[I];if(0>x(N,Z))I<be&&0>x(Q,N)?(E[ye]=Q,E[I]=Z,ye=I):(E[ye]=N,E[T]=Z,ye=T);else if(I<be&&0>x(Q,Z))E[ye]=Q,E[I]=Z,ye=I;else break e}}return j}function x(E,j){var Z=E.sortIndex-j.sortIndex;return Z!==0?Z:E.id-j.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;a.unstable_now=function(){return m.now()}}else{var k=Date,F=k.now();a.unstable_now=function(){return k.now()-F}}var w=[],u=[],z=1,O=null,D=3,Y=!1,_=!1,G=!1,oe=!1,ve=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function V(E){for(var j=f(u);j!==null;){if(j.callback===null)c(u);else if(j.startTime<=E)c(u),j.sortIndex=j.expirationTime,r(w,j);else break;j=f(u)}}function he(E){if(G=!1,V(E),!_)if(f(w)!==null)_=!0,W||(W=!0,Ke());else{var j=f(u);j!==null&&Me(he,j.startTime-E)}}var W=!1,H=-1,ie=5,ce=-1;function Ot(){return oe?!0:!(a.unstable_now()-ce<ie)}function nt(){if(oe=!1,W){var E=a.unstable_now();ce=E;var j=!0;try{e:{_=!1,G&&(G=!1,U(H),H=-1),Y=!0;var Z=D;try{t:{for(V(E),O=f(w);O!==null&&!(O.expirationTime>E&&Ot());){var ye=O.callback;if(typeof ye=="function"){O.callback=null,D=O.priorityLevel;var be=ye(O.expirationTime<=E);if(E=a.unstable_now(),typeof be=="function"){O.callback=be,V(E),j=!0;break t}O===f(w)&&c(w),V(E)}else c(w);O=f(w)}if(O!==null)j=!0;else{var g=f(u);g!==null&&Me(he,g.startTime-E),j=!1}}break e}finally{O=null,D=Z,Y=!1}j=void 0}}finally{j?Ke():W=!1}}}var Ke;if(typeof L=="function")Ke=function(){L(nt)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ge=ne.port2;ne.port1.onmessage=nt,Ke=function(){ge.postMessage(null)}}else Ke=function(){ve(nt,0)};function Me(E,j){H=ve(function(){E(a.unstable_now())},j)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(E){E.callback=null},a.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<E?Math.floor(1e3/E):5},a.unstable_getCurrentPriorityLevel=function(){return D},a.unstable_next=function(E){switch(D){case 1:case 2:case 3:var j=3;break;default:j=D}var Z=D;D=j;try{return E()}finally{D=Z}},a.unstable_requestPaint=function(){oe=!0},a.unstable_runWithPriority=function(E,j){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var Z=D;D=E;try{return j()}finally{D=Z}},a.unstable_scheduleCallback=function(E,j,Z){var ye=a.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ye+Z:ye):Z=ye,E){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Z+be,E={id:z++,callback:j,priorityLevel:E,startTime:Z,expirationTime:be,sortIndex:-1},Z>ye?(E.sortIndex=Z,r(u,E),f(w)===null&&E===f(u)&&(G?(U(H),H=-1):G=!0,Me(he,Z-ye))):(E.sortIndex=be,r(w,E),_||Y||(_=!0,W||(W=!0,Ke()))),E},a.unstable_shouldYield=Ot,a.unstable_wrapCallback=function(E){var j=D;return function(){var Z=D;D=j;try{return E.apply(this,arguments)}finally{D=Z}}}})(Vs)),Vs}var gh;function bu(){return gh||(gh=1,qs.exports=vu()),qs.exports}var Ks={exports:{}},tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function Cu(){if(Fh)return tt;Fh=1;var a=ec();function r(w){var u="https://react.dev/errors/"+w;if(1<arguments.length){u+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)u+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+w+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var c={d:{f,r:function(){throw Error(r(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},x=Symbol.for("react.portal");function m(w,u,z){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:O==null?null:""+O,children:w,containerInfo:u,implementation:z}}var k=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function F(w,u){if(w==="font")return"";if(typeof u=="string")return u==="use-credentials"?u:""}return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tt.createPortal=function(w,u){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!u||u.nodeType!==1&&u.nodeType!==9&&u.nodeType!==11)throw Error(r(299));return m(w,u,null,z)},tt.flushSync=function(w){var u=k.T,z=c.p;try{if(k.T=null,c.p=2,w)return w()}finally{k.T=u,c.p=z,c.d.f()}},tt.preconnect=function(w,u){typeof w=="string"&&(u?(u=u.crossOrigin,u=typeof u=="string"?u==="use-credentials"?u:"":void 0):u=null,c.d.C(w,u))},tt.prefetchDNS=function(w){typeof w=="string"&&c.d.D(w)},tt.preinit=function(w,u){if(typeof w=="string"&&u&&typeof u.as=="string"){var z=u.as,O=F(z,u.crossOrigin),D=typeof u.integrity=="string"?u.integrity:void 0,Y=typeof u.fetchPriority=="string"?u.fetchPriority:void 0;z==="style"?c.d.S(w,typeof u.precedence=="string"?u.precedence:void 0,{crossOrigin:O,integrity:D,fetchPriority:Y}):z==="script"&&c.d.X(w,{crossOrigin:O,integrity:D,fetchPriority:Y,nonce:typeof u.nonce=="string"?u.nonce:void 0})}},tt.preinitModule=function(w,u){if(typeof w=="string")if(typeof u=="object"&&u!==null){if(u.as==null||u.as==="script"){var z=F(u.as,u.crossOrigin);c.d.M(w,{crossOrigin:z,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0})}}else u==null&&c.d.M(w)},tt.preload=function(w,u){if(typeof w=="string"&&typeof u=="object"&&u!==null&&typeof u.as=="string"){var z=u.as,O=F(z,u.crossOrigin);c.d.L(w,z,{crossOrigin:O,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0,type:typeof u.type=="string"?u.type:void 0,fetchPriority:typeof u.fetchPriority=="string"?u.fetchPriority:void 0,referrerPolicy:typeof u.referrerPolicy=="string"?u.referrerPolicy:void 0,imageSrcSet:typeof u.imageSrcSet=="string"?u.imageSrcSet:void 0,imageSizes:typeof u.imageSizes=="string"?u.imageSizes:void 0,media:typeof u.media=="string"?u.media:void 0})}},tt.preloadModule=function(w,u){if(typeof w=="string")if(u){var z=F(u.as,u.crossOrigin);c.d.m(w,{as:typeof u.as=="string"&&u.as!=="script"?u.as:void 0,crossOrigin:z,integrity:typeof u.integrity=="string"?u.integrity:void 0})}else c.d.m(w)},tt.requestFormReset=function(w){c.d.r(w)},tt.unstable_batchedUpdates=function(w,u){return w(u)},tt.useFormState=function(w,u,z){return k.H.useFormState(w,u,z)},tt.useFormStatus=function(){return k.H.useHostTransitionStatus()},tt.version="19.2.7",tt}var wh;function ku(){if(wh)return Ks.exports;wh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ks.exports=Cu(),Ks.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vh;function zu(){if(vh)return Xi;vh=1;var a=bu(),r=ec(),f=ku();function c(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function k(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function F(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function w(e){if(m(e)!==e)throw Error(c(188))}function u(e){var t=e.alternate;if(!t){if(t=m(e),t===null)throw Error(c(188));return t!==e?null:e}for(var n=e,o=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return w(i),e;if(l===o)return w(i),t;l=l.sibling}throw Error(c(188))}if(n.return!==o.return)n=i,o=l;else{for(var s=!1,d=i.child;d;){if(d===n){s=!0,n=i,o=l;break}if(d===o){s=!0,o=i,n=l;break}d=d.sibling}if(!s){for(d=l.child;d;){if(d===n){s=!0,n=l,o=i;break}if(d===o){s=!0,o=l,n=i;break}d=d.sibling}if(!s)throw Error(c(189))}}if(n.alternate!==o)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:t}function z(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=z(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,D=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),ce=Symbol.for("react.activity"),Ot=Symbol.for("react.memo_cache_sentinel"),nt=Symbol.iterator;function Ke(e){return e===null||typeof e!="object"?null:(e=nt&&e[nt]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case ve:return"Profiler";case oe:return"StrictMode";case he:return"Suspense";case W:return"SuspenseList";case ce:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case L:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case V:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}var Me=Array.isArray,E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},ye=[],be=-1;function g(e){return{current:e}}function T(e){0>be||(e.current=ye[be],ye[be]=null,be--)}function N(e,t){be++,ye[be]=e.current,e.current=t}var I=g(null),Q=g(null),te=g(null),xe=g(null);function Ge(e,t){switch(N(te,t),N(Q,e),N(I,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nd(t),e=Ld(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}T(I),N(I,e)}function Oe(){T(I),T(Q),T(te)}function un(e){e.memoizedState!==null&&N(xe,e);var t=I.current,n=Ld(t,e.type);t!==n&&(N(Q,e),N(I,n))}function qn(e){Q.current===e&&(T(I),T(Q)),xe.current===e&&(T(xe),qi._currentValue=Z)}var fo,ei;function Ut(e){if(fo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fo=t&&t[1]||"",ei=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fo+e+ei}var Fe=!1;function at(e,t){if(!e||Fe)return"";Fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var M=function(){throw Error()};if(Object.defineProperty(M.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(M,[])}catch(A){var S=A}Reflect.construct(e,[],M)}else{try{M.call()}catch(A){S=A}e.call(M.prototype)}}else{try{throw Error()}catch(A){S=A}(M=e())&&typeof M.catch=="function"&&M.catch(function(){})}}catch(A){if(A&&S&&typeof A.stack=="string")return[A.stack,S.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=o.DetermineComponentFrameRoot(),s=l[0],d=l[1];if(s&&d){var y=s.split(`
`),C=d.split(`
`);for(i=o=0;o<y.length&&!y[o].includes("DetermineComponentFrameRoot");)o++;for(;i<C.length&&!C[i].includes("DetermineComponentFrameRoot");)i++;if(o===y.length||i===C.length)for(o=y.length-1,i=C.length-1;1<=o&&0<=i&&y[o]!==C[i];)i--;for(;1<=o&&0<=i;o--,i--)if(y[o]!==C[i]){if(o!==1||i!==1)do if(o--,i--,0>i||y[o]!==C[i]){var R=`
`+y[o].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),R}while(1<=o&&0<=i);break}}}finally{Fe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ut(n):""}function ot(e,t){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==t&&t!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return Ut("Activity");default:return""}}function Ht(e){try{var t="",n=null;do t+=ot(e,n),n=e,e=e.return;while(e);return t}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var jt=Object.prototype.hasOwnProperty,ho=a.unstable_scheduleCallback,xo=a.unstable_cancelCallback,$i=a.unstable_shouldYield,mn=a.unstable_requestPaint,Ze=a.unstable_now,el=a.unstable_getCurrentPriorityLevel,xc=a.unstable_ImmediatePriority,uc=a.unstable_UserBlockingPriority,tl=a.unstable_NormalPriority,Jh=a.unstable_LowPriority,mc=a.unstable_IdlePriority,Wh=a.log,$h=a.unstable_setDisableYieldValue,ti=null,ut=null;function yn(e){if(typeof Wh=="function"&&$h(e),ut&&typeof ut.setStrictMode=="function")try{ut.setStrictMode(ti,e)}catch{}}var mt=Math.clz32?Math.clz32:nx,ex=Math.log,tx=Math.LN2;function nx(e){return e>>>=0,e===0?32:31-(ex(e)/tx|0)|0}var nl=256,ol=262144,il=4194304;function Vn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ll(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var d=o&134217727;return d!==0?(o=d&~l,o!==0?i=Vn(o):(s&=d,s!==0?i=Vn(s):n||(n=d&~e,n!==0&&(i=Vn(n))))):(d=o&~l,d!==0?i=Vn(d):s!==0?i=Vn(s):n||(n=o&~e,n!==0&&(i=Vn(n)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,n=t&-t,l>=n||l===32&&(n&4194048)!==0)?t:i}function ni(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ox(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yc(){var e=il;return il<<=1,(il&62914560)===0&&(il=4194304),e}function Ea(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ix(e,t,n,o,i,l){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var d=e.entanglements,y=e.expirationTimes,C=e.hiddenUpdates;for(n=s&~n;0<n;){var R=31-mt(n),M=1<<R;d[R]=0,y[R]=-1;var S=C[R];if(S!==null)for(C[R]=null,R=0;R<S.length;R++){var A=S[R];A!==null&&(A.lane&=-536870913)}n&=~M}o!==0&&pc(e,o,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function pc(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-mt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function gc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-mt(n),i=1<<o;i&t|e[o]&t&&(e[o]|=t),n&=~i}}function Fc(e,t){var n=t&-t;return n=(n&42)!==0?1:Ra(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ra(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ba(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wc(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:ah(e.type))}function vc(e,t){var n=j.p;try{return j.p=e,t()}finally{j.p=n}}var pn=Math.random().toString(36).slice(2),Qe="__reactFiber$"+pn,rt="__reactProps$"+pn,uo="__reactContainer$"+pn,Ma="__reactEvents$"+pn,lx="__reactListeners$"+pn,ax="__reactHandles$"+pn,bc="__reactResources$"+pn,ii="__reactMarker$"+pn;function Ta(e){delete e[Qe],delete e[rt],delete e[Ma],delete e[lx],delete e[ax]}function mo(e){var t=e[Qe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[uo]||n[Qe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vd(e);e!==null;){if(n=e[Qe])return n;e=Vd(e)}return t}e=n,n=e.parentNode}return null}function yo(e){if(e=e[Qe]||e[uo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(c(33))}function po(e){var t=e[bc];return t||(t=e[bc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ye(e){e[ii]=!0}var Cc=new Set,kc={};function Kn(e,t){go(e,t),go(e+"Capture",t)}function go(e,t){for(kc[e]=t,e=0;e<t.length;e++)Cc.add(t[e])}var rx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zc={},Sc={};function sx(e){return jt.call(Sc,e)?!0:jt.call(zc,e)?!1:rx.test(e)?Sc[e]=!0:(zc[e]=!0,!1)}function al(e,t,n){if(sx(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function rl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Yt(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}function kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cx(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var i=o.get,l=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Da(e){if(!e._valueTracker){var t=Ac(e)?"checked":"value";e._valueTracker=cx(e,t,""+e[t])}}function Ec(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Ac(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var fx=/[\n"\\]/g;function zt(e){return e.replace(fx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Oa(e,t,n,o,i,l,s,d){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+kt(t)):e.value!==""+kt(t)&&(e.value=""+kt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?ja(e,s,kt(t)):n!=null?ja(e,s,kt(n)):o!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+kt(d):e.removeAttribute("name")}function Rc(e,t,n,o,i,l,s,d){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||n!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Da(e);return}n=n!=null?""+kt(n):"",t=t!=null?""+kt(t):n,d||t===e.value||(e.value=t),e.defaultValue=t}o=o??i,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=d?e.checked:!!o,e.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Da(e)}function ja(e,t,n){t==="number"&&sl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Fo(e,t,n,o){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bc(e,t,n){if(t!=null&&(t=""+kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+kt(n):""}function Mc(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(c(92));if(Me(o)){if(1<o.length)throw Error(c(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=kt(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),Da(e)}function wo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tc(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||dx.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Dc(e,t,n){if(t!=null&&typeof t!="object")throw Error(c(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var i in t)o=t[i],t.hasOwnProperty(i)&&n[i]!==o&&Tc(e,i,o)}else for(var l in t)t.hasOwnProperty(l)&&Tc(e,l,t[l])}function Na(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return xx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Xt(){}var La=null;function _a(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vo=null,bo=null;function Oc(e){var t=yo(e);if(t&&(e=t.stateNode)){var n=e[rt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Oa(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var i=o[rt]||null;if(!i)throw Error(c(90));Oa(o,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&Ec(o)}break e;case"textarea":Bc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fo(e,!!n.multiple,t,!1)}}}var Ua=!1;function jc(e,t,n){if(Ua)return e(t,n);Ua=!0;try{var o=e(t);return o}finally{if(Ua=!1,(vo!==null||bo!==null)&&(Ql(),vo&&(t=vo,e=bo,bo=vo=null,Oc(t),e)))for(t=0;t<e.length;t++)Oc(e[t])}}function ai(e,t){var n=e.stateNode;if(n===null)return null;var o=n[rt]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,t,typeof n));return n}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ha=!1;if(Zt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Ha=!1}var gn=null,Ia=null,fl=null;function Nc(){if(fl)return fl;var e,t=Ia,n=t.length,o,i="value"in gn?gn.value:gn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(o=1;o<=s&&t[n-o]===i[l-o];o++);return fl=i.slice(e,1<o?1-o:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function Lc(){return!1}function st(e){function t(n,o,i,l,s){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?hl:Lc,this.isPropagationStopped=Lc,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=st(Gn),si=O({},Gn,{view:0,detail:0}),ux=st(si),Pa,qa,ci,ul=O({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(Pa=e.screenX-ci.screenX,qa=e.screenY-ci.screenY):qa=Pa=0,ci=e),Pa)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),_c=st(ul),mx=O({},ul,{dataTransfer:0}),yx=st(mx),px=O({},si,{relatedTarget:0}),Va=st(px),gx=O({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=st(gx),wx=O({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vx=st(wx),bx=O({},Gn,{data:0}),Uc=st(bx),Cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zx[e])?!!t[e]:!1}function Ka(){return Sx}var Ax=O({},si,{key:function(e){if(e.key){var t=Cx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ex=st(Ax),Rx=O({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hc=st(Rx),Bx=O({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),Mx=st(Bx),Tx=O({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=st(Tx),Ox=O({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jx=st(Ox),Nx=O({},Gn,{newState:0,oldState:0}),Lx=st(Nx),_x=[9,13,27,32],Ga=Zt&&"CompositionEvent"in window,fi=null;Zt&&"documentMode"in document&&(fi=document.documentMode);var Ux=Zt&&"TextEvent"in window&&!fi,Ic=Zt&&(!Ga||fi&&8<fi&&11>=fi),Pc=" ",qc=!1;function Vc(e,t){switch(e){case"keyup":return _x.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Co=!1;function Hx(e,t){switch(e){case"compositionend":return Kc(t);case"keypress":return t.which!==32?null:(qc=!0,Pc);case"textInput":return e=t.data,e===Pc&&qc?null:e;default:return null}}function Ix(e,t){if(Co)return e==="compositionend"||!Ga&&Vc(e,t)?(e=Nc(),fl=Ia=gn=null,Co=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ic&&t.locale!=="ko"?null:t.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Px[e.type]:t==="textarea"}function Yc(e,t,n,o){vo?bo?bo.push(o):bo=[o]:vo=o,t=oa(t,"onChange"),0<t.length&&(n=new xl("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var di=null,hi=null;function qx(e){Bd(e,0)}function ml(e){var t=li(e);if(Ec(t))return e}function Xc(e,t){if(e==="change")return t}var Zc=!1;if(Zt){var Ya;if(Zt){var Xa="oninput"in document;if(!Xa){var Qc=document.createElement("div");Qc.setAttribute("oninput","return;"),Xa=typeof Qc.oninput=="function"}Ya=Xa}else Ya=!1;Zc=Ya&&(!document.documentMode||9<document.documentMode)}function Jc(){di&&(di.detachEvent("onpropertychange",Wc),hi=di=null)}function Wc(e){if(e.propertyName==="value"&&ml(hi)){var t=[];Yc(t,hi,e,_a(e)),jc(qx,t)}}function Vx(e,t,n){e==="focusin"?(Jc(),di=t,hi=n,di.attachEvent("onpropertychange",Wc)):e==="focusout"&&Jc()}function Kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(hi)}function Gx(e,t){if(e==="click")return ml(t)}function Yx(e,t){if(e==="input"||e==="change")return ml(t)}function Xx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Xx;function xi(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!jt.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function $c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ef(e,t){var n=$c(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$c(n)}}function tf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=sl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Za(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Zx=Zt&&"documentMode"in document&&11>=document.documentMode,ko=null,Qa=null,ui=null,Ja=!1;function of(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ja||ko==null||ko!==sl(o)||(o=ko,"selectionStart"in o&&Za(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ui&&xi(ui,o)||(ui=o,o=oa(Qa,"onSelect"),0<o.length&&(t=new xl("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=ko)))}function Yn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zo={animationend:Yn("Animation","AnimationEnd"),animationiteration:Yn("Animation","AnimationIteration"),animationstart:Yn("Animation","AnimationStart"),transitionrun:Yn("Transition","TransitionRun"),transitionstart:Yn("Transition","TransitionStart"),transitioncancel:Yn("Transition","TransitionCancel"),transitionend:Yn("Transition","TransitionEnd")},Wa={},lf={};Zt&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function Xn(e){if(Wa[e])return Wa[e];if(!zo[e])return e;var t=zo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lf)return Wa[e]=t[n];return e}var af=Xn("animationend"),rf=Xn("animationiteration"),sf=Xn("animationstart"),Qx=Xn("transitionrun"),Jx=Xn("transitionstart"),Wx=Xn("transitioncancel"),cf=Xn("transitionend"),ff=new Map,$a="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$a.push("scrollEnd");function Nt(e,t){ff.set(e,t),Kn(t,[e])}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},St=[],So=0,er=0;function pl(){for(var e=So,t=er=So=0;t<e;){var n=St[t];St[t++]=null;var o=St[t];St[t++]=null;var i=St[t];St[t++]=null;var l=St[t];if(St[t++]=null,o!==null&&i!==null){var s=o.pending;s===null?i.next=i:(i.next=s.next,s.next=i),o.pending=i}l!==0&&df(n,i,l)}}function gl(e,t,n,o){St[So++]=e,St[So++]=t,St[So++]=n,St[So++]=o,er|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function tr(e,t,n,o){return gl(e,t,n,o),Fl(e)}function Zn(e,t){return gl(e,null,null,t),Fl(e)}function df(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var i=!1,l=e.return;l!==null;)l.childLanes|=n,o=l.alternate,o!==null&&(o.childLanes|=n),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-mt(n),e=l.hiddenUpdates,o=e[i],o===null?e[i]=[t]:o.push(t),t.lane=n|536870912),l):null}function Fl(e){if(50<Ni)throw Ni=0,fs=null,Error(c(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ao={};function $x(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,n,o){return new $x(e,t,n,o)}function nr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qt(e,t){var n=e.alternate;return n===null?(n=pt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wl(e,t,n,o,i,l){var s=0;if(o=e,typeof e=="function")nr(e)&&(s=1);else if(typeof e=="string")s=iu(e,n,I.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ce:return e=pt(31,n,t,i),e.elementType=ce,e.lanes=l,e;case G:return Qn(n.children,i,l,t);case oe:s=8,i|=24;break;case ve:return e=pt(12,n,t,i|2),e.elementType=ve,e.lanes=l,e;case he:return e=pt(13,n,t,i),e.elementType=he,e.lanes=l,e;case W:return e=pt(19,n,t,i),e.elementType=W,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:s=10;break e;case U:s=9;break e;case V:s=11;break e;case H:s=14;break e;case ie:s=16,o=null;break e}s=29,n=Error(c(130,e===null?"null":typeof e,"")),o=null}return t=pt(s,n,t,i),t.elementType=e,t.type=o,t.lanes=l,t}function Qn(e,t,n,o){return e=pt(7,e,o,t),e.lanes=n,e}function or(e,t,n){return e=pt(6,e,null,t),e.lanes=n,e}function xf(e){var t=pt(18,null,null,0);return t.stateNode=e,t}function ir(e,t,n){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var uf=new WeakMap;function At(e,t){if(typeof e=="object"&&e!==null){var n=uf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ht(t)},uf.set(e,t),t)}return{value:e,source:t,stack:Ht(t)}}var Eo=[],Ro=0,vl=null,mi=0,Et=[],Rt=0,Fn=null,It=1,Pt="";function Jt(e,t){Eo[Ro++]=mi,Eo[Ro++]=vl,vl=e,mi=t}function mf(e,t,n){Et[Rt++]=It,Et[Rt++]=Pt,Et[Rt++]=Fn,Fn=e;var o=It;e=Pt;var i=32-mt(o)-1;o&=~(1<<i),n+=1;var l=32-mt(t)+i;if(30<l){var s=i-i%5;l=(o&(1<<s)-1).toString(32),o>>=s,i-=s,It=1<<32-mt(t)+i|n<<i|o,Pt=l+e}else It=1<<l|n<<i|o,Pt=e}function lr(e){e.return!==null&&(Jt(e,1),mf(e,1,0))}function ar(e){for(;e===vl;)vl=Eo[--Ro],Eo[Ro]=null,mi=Eo[--Ro],Eo[Ro]=null;for(;e===Fn;)Fn=Et[--Rt],Et[Rt]=null,Pt=Et[--Rt],Et[Rt]=null,It=Et[--Rt],Et[Rt]=null}function yf(e,t){Et[Rt++]=It,Et[Rt++]=Pt,Et[Rt++]=Fn,It=t.id,Pt=t.overflow,Fn=e}var Je=null,Te=null,fe=!1,wn=null,Bt=!1,rr=Error(c(519));function vn(e){var t=Error(c(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yi(At(t,e)),rr}function pf(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[Qe]=e,t[rt]=o,n){case"dialog":ae("cancel",t),ae("close",t);break;case"iframe":case"object":case"embed":ae("load",t);break;case"video":case"audio":for(n=0;n<_i.length;n++)ae(_i[n],t);break;case"source":ae("error",t);break;case"img":case"image":case"link":ae("error",t),ae("load",t);break;case"details":ae("toggle",t);break;case"input":ae("invalid",t),Rc(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ae("invalid",t);break;case"textarea":ae("invalid",t),Mc(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||Od(t.textContent,n)?(o.popover!=null&&(ae("beforetoggle",t),ae("toggle",t)),o.onScroll!=null&&ae("scroll",t),o.onScrollEnd!=null&&ae("scrollend",t),o.onClick!=null&&(t.onclick=Xt),t=!0):t=!1,t||vn(e,!0)}function gf(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 31:case 13:Bt=!1;return;case 27:case 3:Bt=!0;return;default:Je=Je.return}}function Bo(e){if(e!==Je)return!1;if(!fe)return gf(e),fe=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zs(e.type,e.memoizedProps)),n=!n),n&&Te&&vn(e),gf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Te=qd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));Te=qd(e)}else t===27?(t=Te,jn(e.type)?(e=Bs,Bs=null,Te=e):Te=t):Te=Je?Tt(e.stateNode.nextSibling):null;return!0}function Jn(){Te=Je=null,fe=!1}function sr(){var e=wn;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),wn=null),e}function yi(e){wn===null?wn=[e]:wn.push(e)}var cr=g(null),Wn=null,Wt=null;function bn(e,t,n){N(cr,t._currentValue),t._currentValue=n}function $t(e){e._currentValue=cr.current,T(cr)}function fr(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function dr(e,t,n,o){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var d=l;l=i;for(var y=0;y<t.length;y++)if(d.context===t[y]){l.lanes|=n,d=l.alternate,d!==null&&(d.lanes|=n),fr(l.return,n,e),o||(s=null);break e}l=d.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fr(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Mo(e,t,n,o){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var d=i.type;yt(i.pendingProps.value,s.value)||(e!==null?e.push(d):e=[d])}}else if(i===xe.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(qi):e=[qi])}i=i.return}e!==null&&dr(t,e,n,o),t.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!yt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $n(e){Wn=e,Wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return Ff(Wn,e)}function Cl(e,t){return Wn===null&&$n(e),Ff(e,t)}function Ff(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wt===null){if(e===null)throw Error(c(308));Wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wt=Wt.next=t;return n}var e0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},t0=a.unstable_scheduleCallback,n0=a.unstable_NormalPriority,He={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hr(){return{controller:new e0,data:new Map,refCount:0}}function pi(e){e.refCount--,e.refCount===0&&t0(n0,function(){e.controller.abort()})}var gi=null,xr=0,To=0,Do=null;function o0(e,t){if(gi===null){var n=gi=[];xr=0,To=ys(),Do={status:"pending",value:void 0,then:function(o){n.push(o)}}}return xr++,t.then(wf,wf),t}function wf(){if(--xr===0&&gi!==null){Do!==null&&(Do.status="fulfilled");var e=gi;gi=null,To=0,Do=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function i0(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(o.status="rejected",o.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),o}var vf=E.S;E.S=function(e,t){id=Ze(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&o0(e,t),vf!==null&&vf(e,t)};var eo=g(null);function ur(){var e=eo.current;return e!==null?e:Re.pooledCache}function kl(e,t){t===null?N(eo,eo.current):N(eo,t.pool)}function bf(){var e=ur();return e===null?null:{parent:He._currentValue,pool:e}}var Oo=Error(c(460)),mr=Error(c(474)),zl=Error(c(542)),Sl={then:function(){}};function Cf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xt,Xt),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e;default:if(typeof t.status=="string")t.then(Xt,Xt);else{if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=o}},function(o){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Sf(e),e}throw no=t,Oo}}function to(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(no=n,Oo):n}}var no=null;function zf(){if(no===null)throw Error(c(459));var e=no;return no=null,e}function Sf(e){if(e===Oo||e===zl)throw Error(c(483))}var jo=null,Fi=0;function Al(e){var t=Fi;return Fi+=1,jo===null&&(jo=[]),kf(jo,e,t)}function wi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function El(e,t){throw t.$$typeof===D?Error(c(525)):(e=Object.prototype.toString.call(t),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Af(e){function t(v,p){if(e){var b=v.deletions;b===null?(v.deletions=[p],v.flags|=16):b.push(p)}}function n(v,p){if(!e)return null;for(;p!==null;)t(v,p),p=p.sibling;return null}function o(v){for(var p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function i(v,p){return v=Qt(v,p),v.index=0,v.sibling=null,v}function l(v,p,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<p?(v.flags|=67108866,p):b):(v.flags|=67108866,p)):(v.flags|=1048576,p)}function s(v){return e&&v.alternate===null&&(v.flags|=67108866),v}function d(v,p,b,B){return p===null||p.tag!==6?(p=or(b,v.mode,B),p.return=v,p):(p=i(p,b),p.return=v,p)}function y(v,p,b,B){var K=b.type;return K===G?R(v,p,b.props.children,B,b.key):p!==null&&(p.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ie&&to(K)===p.type)?(p=i(p,b.props),wi(p,b),p.return=v,p):(p=wl(b.type,b.key,b.props,null,v.mode,B),wi(p,b),p.return=v,p)}function C(v,p,b,B){return p===null||p.tag!==4||p.stateNode.containerInfo!==b.containerInfo||p.stateNode.implementation!==b.implementation?(p=ir(b,v.mode,B),p.return=v,p):(p=i(p,b.children||[]),p.return=v,p)}function R(v,p,b,B,K){return p===null||p.tag!==7?(p=Qn(b,v.mode,B,K),p.return=v,p):(p=i(p,b),p.return=v,p)}function M(v,p,b){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=or(""+p,v.mode,b),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Y:return b=wl(p.type,p.key,p.props,null,v.mode,b),wi(b,p),b.return=v,b;case _:return p=ir(p,v.mode,b),p.return=v,p;case ie:return p=to(p),M(v,p,b)}if(Me(p)||Ke(p))return p=Qn(p,v.mode,b,null),p.return=v,p;if(typeof p.then=="function")return M(v,Al(p),b);if(p.$$typeof===L)return M(v,Cl(v,p),b);El(v,p)}return null}function S(v,p,b,B){var K=p!==null?p.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return K!==null?null:d(v,p,""+b,B);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Y:return b.key===K?y(v,p,b,B):null;case _:return b.key===K?C(v,p,b,B):null;case ie:return b=to(b),S(v,p,b,B)}if(Me(b)||Ke(b))return K!==null?null:R(v,p,b,B,null);if(typeof b.then=="function")return S(v,p,Al(b),B);if(b.$$typeof===L)return S(v,p,Cl(v,b),B);El(v,b)}return null}function A(v,p,b,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return v=v.get(b)||null,d(p,v,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Y:return v=v.get(B.key===null?b:B.key)||null,y(p,v,B,K);case _:return v=v.get(B.key===null?b:B.key)||null,C(p,v,B,K);case ie:return B=to(B),A(v,p,b,B,K)}if(Me(B)||Ke(B))return v=v.get(b)||null,R(p,v,B,K,null);if(typeof B.then=="function")return A(v,p,b,Al(B),K);if(B.$$typeof===L)return A(v,p,b,Cl(p,B),K);El(p,B)}return null}function P(v,p,b,B){for(var K=null,ue=null,q=p,ee=p=0,se=null;q!==null&&ee<b.length;ee++){q.index>ee?(se=q,q=null):se=q.sibling;var me=S(v,q,b[ee],B);if(me===null){q===null&&(q=se);break}e&&q&&me.alternate===null&&t(v,q),p=l(me,p,ee),ue===null?K=me:ue.sibling=me,ue=me,q=se}if(ee===b.length)return n(v,q),fe&&Jt(v,ee),K;if(q===null){for(;ee<b.length;ee++)q=M(v,b[ee],B),q!==null&&(p=l(q,p,ee),ue===null?K=q:ue.sibling=q,ue=q);return fe&&Jt(v,ee),K}for(q=o(q);ee<b.length;ee++)se=A(q,v,ee,b[ee],B),se!==null&&(e&&se.alternate!==null&&q.delete(se.key===null?ee:se.key),p=l(se,p,ee),ue===null?K=se:ue.sibling=se,ue=se);return e&&q.forEach(function(Hn){return t(v,Hn)}),fe&&Jt(v,ee),K}function X(v,p,b,B){if(b==null)throw Error(c(151));for(var K=null,ue=null,q=p,ee=p=0,se=null,me=b.next();q!==null&&!me.done;ee++,me=b.next()){q.index>ee?(se=q,q=null):se=q.sibling;var Hn=S(v,q,me.value,B);if(Hn===null){q===null&&(q=se);break}e&&q&&Hn.alternate===null&&t(v,q),p=l(Hn,p,ee),ue===null?K=Hn:ue.sibling=Hn,ue=Hn,q=se}if(me.done)return n(v,q),fe&&Jt(v,ee),K;if(q===null){for(;!me.done;ee++,me=b.next())me=M(v,me.value,B),me!==null&&(p=l(me,p,ee),ue===null?K=me:ue.sibling=me,ue=me);return fe&&Jt(v,ee),K}for(q=o(q);!me.done;ee++,me=b.next())me=A(q,v,ee,me.value,B),me!==null&&(e&&me.alternate!==null&&q.delete(me.key===null?ee:me.key),p=l(me,p,ee),ue===null?K=me:ue.sibling=me,ue=me);return e&&q.forEach(function(mu){return t(v,mu)}),fe&&Jt(v,ee),K}function Ee(v,p,b,B){if(typeof b=="object"&&b!==null&&b.type===G&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Y:e:{for(var K=b.key;p!==null;){if(p.key===K){if(K=b.type,K===G){if(p.tag===7){n(v,p.sibling),B=i(p,b.props.children),B.return=v,v=B;break e}}else if(p.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===ie&&to(K)===p.type){n(v,p.sibling),B=i(p,b.props),wi(B,b),B.return=v,v=B;break e}n(v,p);break}else t(v,p);p=p.sibling}b.type===G?(B=Qn(b.props.children,v.mode,B,b.key),B.return=v,v=B):(B=wl(b.type,b.key,b.props,null,v.mode,B),wi(B,b),B.return=v,v=B)}return s(v);case _:e:{for(K=b.key;p!==null;){if(p.key===K)if(p.tag===4&&p.stateNode.containerInfo===b.containerInfo&&p.stateNode.implementation===b.implementation){n(v,p.sibling),B=i(p,b.children||[]),B.return=v,v=B;break e}else{n(v,p);break}else t(v,p);p=p.sibling}B=ir(b,v.mode,B),B.return=v,v=B}return s(v);case ie:return b=to(b),Ee(v,p,b,B)}if(Me(b))return P(v,p,b,B);if(Ke(b)){if(K=Ke(b),typeof K!="function")throw Error(c(150));return b=K.call(b),X(v,p,b,B)}if(typeof b.then=="function")return Ee(v,p,Al(b),B);if(b.$$typeof===L)return Ee(v,p,Cl(v,b),B);El(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,p!==null&&p.tag===6?(n(v,p.sibling),B=i(p,b),B.return=v,v=B):(n(v,p),B=or(b,v.mode,B),B.return=v,v=B),s(v)):n(v,p)}return function(v,p,b,B){try{Fi=0;var K=Ee(v,p,b,B);return jo=null,K}catch(q){if(q===Oo||q===zl)throw q;var ue=pt(29,q,null,v.mode);return ue.lanes=B,ue.return=v,ue}finally{}}}var oo=Af(!0),Ef=Af(!1),Cn=!1;function yr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function kn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(pe&2)!==0){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,t=Fl(e),df(e,null,n),t}return gl(e,o,t,n),Fl(e)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,gc(e,n)}}function gr(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fr=!1;function bi(){if(Fr){var e=Do;if(e!==null)throw e}}function Ci(e,t,n,o){Fr=!1;var i=e.updateQueue;Cn=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var y=d,C=y.next;y.next=null,s===null?l=C:s.next=C,s=y;var R=e.alternate;R!==null&&(R=R.updateQueue,d=R.lastBaseUpdate,d!==s&&(d===null?R.firstBaseUpdate=C:d.next=C,R.lastBaseUpdate=y))}if(l!==null){var M=i.baseState;s=0,R=C=y=null,d=l;do{var S=d.lane&-536870913,A=S!==d.lane;if(A?(re&S)===S:(o&S)===S){S!==0&&S===To&&(Fr=!0),R!==null&&(R=R.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});e:{var P=e,X=d;S=t;var Ee=n;switch(X.tag){case 1:if(P=X.payload,typeof P=="function"){M=P.call(Ee,M,S);break e}M=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=X.payload,S=typeof P=="function"?P.call(Ee,M,S):P,S==null)break e;M=O({},M,S);break e;case 2:Cn=!0}}S=d.callback,S!==null&&(e.flags|=64,A&&(e.flags|=8192),A=i.callbacks,A===null?i.callbacks=[S]:A.push(S))}else A={lane:S,tag:d.tag,payload:d.payload,callback:d.callback,next:null},R===null?(C=R=A,y=M):R=R.next=A,s|=S;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;A=d,d=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);R===null&&(y=M),i.baseState=y,i.firstBaseUpdate=C,i.lastBaseUpdate=R,l===null&&(i.shared.lanes=0),Bn|=s,e.lanes=s,e.memoizedState=M}}function Rf(e,t){if(typeof e!="function")throw Error(c(191,e));e.call(t)}function Bf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rf(n[e],t)}var No=g(null),Rl=g(0);function Mf(e,t){e=cn,N(Rl,e),N(No,t),cn=e|t.baseLanes}function wr(){N(Rl,cn),N(No,No.current)}function vr(){cn=Rl.current,T(No),T(Rl)}var gt=g(null),Mt=null;function Sn(e){var t=e.alternate;N(_e,_e.current&1),N(gt,e),Mt===null&&(t===null||No.current!==null||t.memoizedState!==null)&&(Mt=e)}function br(e){N(_e,_e.current),N(gt,e),Mt===null&&(Mt=e)}function Tf(e){e.tag===22?(N(_e,_e.current),N(gt,e),Mt===null&&(Mt=e)):An()}function An(){N(_e,_e.current),N(gt,gt.current)}function Ft(e){T(gt),Mt===e&&(Mt=null),T(_e)}var _e=g(0);function Bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Es(n)||Rs(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var en=0,$=null,Se=null,Ie=null,Ml=!1,Lo=!1,io=!1,Tl=0,ki=0,_o=null,l0=0;function Ne(){throw Error(c(321))}function Cr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function kr(e,t,n,o,i,l){return en=l,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?m1:Ur,io=!1,l=n(o,i),io=!1,Lo&&(l=Of(t,n,o,i)),Df(e),l}function Df(e){E.H=Ai;var t=Se!==null&&Se.next!==null;if(en=0,Ie=Se=$=null,Ml=!1,ki=0,_o=null,t)throw Error(c(300));e===null||Pe||(e=e.dependencies,e!==null&&bl(e)&&(Pe=!0))}function Of(e,t,n,o){$=e;var i=0;do{if(Lo&&(_o=null),ki=0,Lo=!1,25<=i)throw Error(c(301));if(i+=1,Ie=Se=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}E.H=y1,l=t(n,o)}while(Lo);return l}function a0(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?zi(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&($.flags|=1024),t}function zr(){var e=Tl!==0;return Tl=0,e}function Sr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ar(e){if(Ml){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ml=!1}en=0,Ie=Se=$=null,Lo=!1,ki=Tl=0,_o=null}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ie===null?$.memoizedState=Ie=e:Ie=Ie.next=e,Ie}function Ue(){if(Se===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ie===null?$.memoizedState:Ie.next;if(t!==null)Ie=t,Se=e;else{if(e===null)throw $.alternate===null?Error(c(467)):Error(c(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ie===null?$.memoizedState=Ie=e:Ie=Ie.next=e}return Ie}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zi(e){var t=ki;return ki+=1,_o===null&&(_o=[]),e=kf(_o,e,t),t=$,(Ie===null?t.memoizedState:Ie.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?m1:Ur),e}function Ol(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return zi(e);if(e.$$typeof===L)return We(e)}throw Error(c(438,String(e)))}function Er(e){var t=null,n=$.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=$.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Dl(),$.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=Ot;return t.index++,n}function tn(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=Ue();return Rr(t,Se,e)}function Rr(e,t,n){var o=e.queue;if(o===null)throw Error(c(311));o.lastRenderedReducer=n;var i=e.baseQueue,l=o.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}t.baseQueue=i=l,o.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var d=s=null,y=null,C=t,R=!1;do{var M=C.lane&-536870913;if(M!==C.lane?(re&M)===M:(en&M)===M){var S=C.revertLane;if(S===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),M===To&&(R=!0);else if((en&S)===S){C=C.next,S===To&&(R=!0);continue}else M={lane:0,revertLane:C.revertLane,gesture:null,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},y===null?(d=y=M,s=l):y=y.next=M,$.lanes|=S,Bn|=S;M=C.action,io&&n(l,M),l=C.hasEagerState?C.eagerState:n(l,M)}else S={lane:M,revertLane:C.revertLane,gesture:C.gesture,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},y===null?(d=y=S,s=l):y=y.next=S,$.lanes|=M,Bn|=M;C=C.next}while(C!==null&&C!==t);if(y===null?s=l:y.next=d,!yt(l,e.memoizedState)&&(Pe=!0,R&&(n=Do,n!==null)))throw n;e.memoizedState=l,e.baseState=s,e.baseQueue=y,o.lastRenderedState=l}return i===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Br(e){var t=Ue(),n=t.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);yt(l,t.memoizedState)||(Pe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,o]}function jf(e,t,n){var o=$,i=Ue(),l=fe;if(l){if(n===void 0)throw Error(c(407));n=n()}else n=t();var s=!yt((Se||i).memoizedState,n);if(s&&(i.memoizedState=n,Pe=!0),i=i.queue,Dr(_f.bind(null,o,i,e),[e]),i.getSnapshot!==t||s||Ie!==null&&Ie.memoizedState.tag&1){if(o.flags|=2048,Uo(9,{destroy:void 0},Lf.bind(null,o,i,n,t),null),Re===null)throw Error(c(349));l||(en&127)!==0||Nf(o,t,n)}return n}function Nf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t=Dl(),$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lf(e,t,n,o){t.value=n,t.getSnapshot=o,Uf(t)&&Hf(e)}function _f(e,t,n){return n(function(){Uf(t)&&Hf(e)})}function Uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Hf(e){var t=Zn(e,2);t!==null&&xt(t,e,2)}function Mr(e){var t=it();if(typeof e=="function"){var n=e;if(e=n(),io){yn(!0);try{n()}finally{yn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:e},t}function If(e,t,n,o){return e.baseState=n,Rr(e,Se,typeof o=="function"?o:tn)}function r0(e,t,n,o,i){if(_l(e))throw Error(c(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};E.T!==null?n(!0):l.isTransition=!1,o(l),n=t.pending,n===null?(l.next=t.pending=l,Pf(t,l)):(l.next=n.next,t.pending=n.next=l)}}function Pf(e,t){var n=t.action,o=t.payload,i=e.state;if(t.isTransition){var l=E.T,s={};E.T=s;try{var d=n(i,o),y=E.S;y!==null&&y(s,d),qf(e,t,d)}catch(C){Tr(e,t,C)}finally{l!==null&&s.types!==null&&(l.types=s.types),E.T=l}}else try{l=n(i,o),qf(e,t,l)}catch(C){Tr(e,t,C)}}function qf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Vf(e,t,o)},function(o){return Tr(e,t,o)}):Vf(e,t,n)}function Vf(e,t,n){t.status="fulfilled",t.value=n,Kf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Pf(e,n)))}function Tr(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,Kf(t),t=t.next;while(t!==o)}e.action=null}function Kf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Gf(e,t){return t}function Yf(e,t){if(fe){var n=Re.formState;if(n!==null){e:{var o=$;if(fe){if(Te){t:{for(var i=Te,l=Bt;i.nodeType!==8;){if(!l){i=null;break t}if(i=Tt(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Te=Tt(i.nextSibling),o=i.data==="F!";break e}}vn(o)}o=!1}o&&(t=n[0])}}return n=it(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gf,lastRenderedState:t},n.queue=o,n=h1.bind(null,$,o),o.dispatch=n,o=Mr(!1),l=_r.bind(null,$,!1,o.queue),o=it(),i={state:t,dispatch:null,action:e,pending:null},o.queue=i,n=r0.bind(null,$,i,l,n),i.dispatch=n,o.memoizedState=e,[t,n,!1]}function Xf(e){var t=Ue();return Zf(t,Se,e)}function Zf(e,t,n){if(t=Rr(e,t,Gf)[0],e=jl(tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=zi(t)}catch(s){throw s===Oo?zl:s}else o=t;t=Ue();var i=t.queue,l=i.dispatch;return n!==t.memoizedState&&($.flags|=2048,Uo(9,{destroy:void 0},s0.bind(null,i,n),null)),[o,l,e]}function s0(e,t){e.action=t}function Qf(e){var t=Ue(),n=Se;if(n!==null)return Zf(t,n,e);Ue(),t=t.memoizedState,n=Ue();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Uo(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=$.updateQueue,t===null&&(t=Dl(),$.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function Jf(){return Ue().memoizedState}function Nl(e,t,n,o){var i=it();$.flags|=e,i.memoizedState=Uo(1|t,{destroy:void 0},n,o===void 0?null:o)}function Ll(e,t,n,o){var i=Ue();o=o===void 0?null:o;var l=i.memoizedState.inst;Se!==null&&o!==null&&Cr(o,Se.memoizedState.deps)?i.memoizedState=Uo(t,l,n,o):($.flags|=e,i.memoizedState=Uo(1|t,l,n,o))}function Wf(e,t){Nl(8390656,8,e,t)}function Dr(e,t){Ll(2048,8,e,t)}function c0(e){$.flags|=4;var t=$.updateQueue;if(t===null)t=Dl(),$.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function $f(e){var t=Ue().memoizedState;return c0({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(c(440));return t.impl.apply(void 0,arguments)}}function e1(e,t){return Ll(4,2,e,t)}function t1(e,t){return Ll(4,4,e,t)}function n1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function o1(e,t,n){n=n!=null?n.concat([e]):null,Ll(4,4,n1.bind(null,t,e),n)}function Or(){}function i1(e,t){var n=Ue();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Cr(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function l1(e,t){var n=Ue();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Cr(t,o[1]))return o[0];if(o=e(),io){yn(!0);try{e()}finally{yn(!1)}}return n.memoizedState=[o,t],o}function jr(e,t,n){return n===void 0||(en&1073741824)!==0&&(re&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=ad(),$.lanes|=e,Bn|=e,n)}function a1(e,t,n,o){return yt(n,t)?n:No.current!==null?(e=jr(e,n,o),yt(e,t)||(Pe=!0),e):(en&42)===0||(en&1073741824)!==0&&(re&261930)===0?(Pe=!0,e.memoizedState=n):(e=ad(),$.lanes|=e,Bn|=e,t)}function r1(e,t,n,o,i){var l=j.p;j.p=l!==0&&8>l?l:8;var s=E.T,d={};E.T=d,_r(e,!1,t,n);try{var y=i(),C=E.S;if(C!==null&&C(d,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var R=i0(y,o);Si(e,t,R,bt(e))}else Si(e,t,o,bt(e))}catch(M){Si(e,t,{then:function(){},status:"rejected",reason:M},bt())}finally{j.p=l,s!==null&&d.types!==null&&(s.types=d.types),E.T=s}}function f0(){}function Nr(e,t,n,o){if(e.tag!==5)throw Error(c(476));var i=s1(e).queue;r1(e,i,t,Z,n===null?f0:function(){return c1(e),n(o)})}function s1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:Z},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function c1(e){var t=s1(e);t.next===null&&(t=e.alternate.memoizedState),Si(e,t.next.queue,{},bt())}function Lr(){return We(qi)}function f1(){return Ue().memoizedState}function d1(){return Ue().memoizedState}function d0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=bt();e=kn(n);var o=zn(t,e,n);o!==null&&(xt(o,t,n),vi(o,t,n)),t={cache:hr()},e.payload=t;return}t=t.return}}function h0(e,t,n){var o=bt();n={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},_l(e)?x1(t,n):(n=tr(e,t,n,o),n!==null&&(xt(n,e,o),u1(n,t,o)))}function h1(e,t,n){var o=bt();Si(e,t,n,o)}function Si(e,t,n,o){var i={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(_l(e))x1(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,d=l(s,n);if(i.hasEagerState=!0,i.eagerState=d,yt(d,s))return gl(e,t,i,0),Re===null&&pl(),!1}catch{}finally{}if(n=tr(e,t,i,o),n!==null)return xt(n,e,o),u1(n,t,o),!0}return!1}function _r(e,t,n,o){if(o={lane:2,revertLane:ys(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},_l(e)){if(t)throw Error(c(479))}else t=tr(e,n,o,2),t!==null&&xt(t,e,2)}function _l(e){var t=e.alternate;return e===$||t!==null&&t===$}function x1(e,t){Lo=Ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function u1(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,gc(e,n)}}var Ai={readContext:We,use:Ol,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useLayoutEffect:Ne,useInsertionEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useSyncExternalStore:Ne,useId:Ne,useHostTransitionStatus:Ne,useFormState:Ne,useActionState:Ne,useOptimistic:Ne,useMemoCache:Ne,useCacheRefresh:Ne};Ai.useEffectEvent=Ne;var m1={readContext:We,use:Ol,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Wf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Nl(4194308,4,n1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Nl(4194308,4,e,t)},useInsertionEffect:function(e,t){Nl(4,2,e,t)},useMemo:function(e,t){var n=it();t=t===void 0?null:t;var o=e();if(io){yn(!0);try{e()}finally{yn(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=it();if(n!==void 0){var i=n(t);if(io){yn(!0);try{n(t)}finally{yn(!1)}}}else i=t;return o.memoizedState=o.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},o.queue=e,e=e.dispatch=h0.bind(null,$,e),[o.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:function(e){e=Mr(e);var t=e.queue,n=h1.bind(null,$,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Or,useDeferredValue:function(e,t){var n=it();return jr(n,e,t)},useTransition:function(){var e=Mr(!1);return e=r1.bind(null,$,e.queue,!0,!1),it().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=$,i=it();if(fe){if(n===void 0)throw Error(c(407));n=n()}else{if(n=t(),Re===null)throw Error(c(349));(re&127)!==0||Nf(o,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Wf(_f.bind(null,o,l,e),[e]),o.flags|=2048,Uo(9,{destroy:void 0},Lf.bind(null,o,l,n,t),null),n},useId:function(){var e=it(),t=Re.identifierPrefix;if(fe){var n=Pt,o=It;n=(o&~(1<<32-mt(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Tl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=l0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Lr,useFormState:Yf,useActionState:Yf,useOptimistic:function(e){var t=it();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_r.bind(null,$,!0,n),n.dispatch=t,[e,t]},useMemoCache:Er,useCacheRefresh:function(){return it().memoizedState=d0.bind(null,$)},useEffectEvent:function(e){var t=it(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(c(440));return n.impl.apply(void 0,arguments)}}},Ur={readContext:We,use:Ol,useCallback:i1,useContext:We,useEffect:Dr,useImperativeHandle:o1,useInsertionEffect:e1,useLayoutEffect:t1,useMemo:l1,useReducer:jl,useRef:Jf,useState:function(){return jl(tn)},useDebugValue:Or,useDeferredValue:function(e,t){var n=Ue();return a1(n,Se.memoizedState,e,t)},useTransition:function(){var e=jl(tn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:zi(e),t]},useSyncExternalStore:jf,useId:f1,useHostTransitionStatus:Lr,useFormState:Xf,useActionState:Xf,useOptimistic:function(e,t){var n=Ue();return If(n,Se,e,t)},useMemoCache:Er,useCacheRefresh:d1};Ur.useEffectEvent=$f;var y1={readContext:We,use:Ol,useCallback:i1,useContext:We,useEffect:Dr,useImperativeHandle:o1,useInsertionEffect:e1,useLayoutEffect:t1,useMemo:l1,useReducer:Br,useRef:Jf,useState:function(){return Br(tn)},useDebugValue:Or,useDeferredValue:function(e,t){var n=Ue();return Se===null?jr(n,e,t):a1(n,Se.memoizedState,e,t)},useTransition:function(){var e=Br(tn)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:zi(e),t]},useSyncExternalStore:jf,useId:f1,useHostTransitionStatus:Lr,useFormState:Qf,useActionState:Qf,useOptimistic:function(e,t){var n=Ue();return Se!==null?If(n,Se,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Er,useCacheRefresh:d1};y1.useEffectEvent=$f;function Hr(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ir={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=bt(),i=kn(o);i.payload=t,n!=null&&(i.callback=n),t=zn(e,i,o),t!==null&&(xt(t,e,o),vi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=bt(),i=kn(o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=zn(e,i,o),t!==null&&(xt(t,e,o),vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bt(),o=kn(n);o.tag=2,t!=null&&(o.callback=t),t=zn(e,o,n),t!==null&&(xt(t,e,n),vi(t,e,n))}};function p1(e,t,n,o,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,s):t.prototype&&t.prototype.isPureReactComponent?!xi(n,o)||!xi(i,l):!0}function g1(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&Ir.enqueueReplaceState(t,t.state,null)}function lo(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=O({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function F1(e){yl(e)}function w1(e){console.error(e)}function v1(e){yl(e)}function Ul(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function b1(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Pr(e,t,n){return n=kn(n),n.tag=3,n.payload={element:null},n.callback=function(){Ul(e,t)},n}function C1(e){return e=kn(e),e.tag=3,e}function k1(e,t,n,o){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=o.value;e.payload=function(){return i(l)},e.callback=function(){b1(t,n,o)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){b1(t,n,o),typeof i!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var d=o.stack;this.componentDidCatch(o.value,{componentStack:d!==null?d:""})})}function x0(e,t,n,o,i){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&Mo(t,n,i,!0),n=gt.current,n!==null){switch(n.tag){case 31:case 13:return Mt===null?Jl():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=i,o===Sl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),xs(e,o,i)),!1;case 22:return n.flags|=65536,o===Sl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),xs(e,o,i)),!1}throw Error(c(435,n.tag))}return xs(e,o,i),Jl(),!1}if(fe)return t=gt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,o!==rr&&(e=Error(c(422),{cause:o}),yi(At(e,n)))):(o!==rr&&(t=Error(c(423),{cause:o}),yi(At(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,o=At(o,n),i=Pr(e.stateNode,o,i),gr(e,i),Le!==4&&(Le=2)),!1;var l=Error(c(520),{cause:o});if(l=At(l,n),ji===null?ji=[l]:ji.push(l),Le!==4&&(Le=2),t===null)return!0;o=At(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Pr(n.stateNode,o,e),gr(n,e),!1;case 1:if(t=n.type,l=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Mn===null||!Mn.has(l))))return n.flags|=65536,i&=-i,n.lanes|=i,i=C1(i),k1(i,e,n,o),gr(n,i),!1}n=n.return}while(n!==null);return!1}var qr=Error(c(461)),Pe=!1;function $e(e,t,n,o){t.child=e===null?Ef(t,null,n,o):oo(t,e.child,n,o)}function z1(e,t,n,o,i){n=n.render;var l=t.ref;if("ref"in o){var s={};for(var d in o)d!=="ref"&&(s[d]=o[d])}else s=o;return $n(t),o=kr(e,t,n,s,l,i),d=zr(),e!==null&&!Pe?(Sr(e,t,i),nn(e,t,i)):(fe&&d&&lr(t),t.flags|=1,$e(e,t,o,i),t.child)}function S1(e,t,n,o,i){if(e===null){var l=n.type;return typeof l=="function"&&!nr(l)&&l.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=l,A1(e,t,l,o,i)):(e=wl(n.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Jr(e,i)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:xi,n(s,o)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=Qt(l,o),e.ref=t.ref,e.return=t,t.child=e}function A1(e,t,n,o,i){if(e!==null){var l=e.memoizedProps;if(xi(l,o)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=o=l,Jr(e,i))(e.flags&131072)!==0&&(Pe=!0);else return t.lanes=e.lanes,nn(e,t,i)}return Vr(e,t,n,o,i)}function E1(e,t,n,o){var i=o.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|n:n,e!==null){for(o=t.child=e.child,i=0;o!==null;)i=i|o.lanes|o.childLanes,o=o.sibling;o=i&~l}else o=0,t.child=null;return R1(e,t,l,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&kl(t,l!==null?l.cachePool:null),l!==null?Mf(t,l):wr(),Tf(t);else return o=t.lanes=536870912,R1(e,t,l!==null?l.baseLanes|n:n,n,o)}else l!==null?(kl(t,l.cachePool),Mf(t,l),An(),t.memoizedState=null):(e!==null&&kl(t,null),wr(),An());return $e(e,t,i,n),t.child}function Ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function R1(e,t,n,o,i){var l=ur();return l=l===null?null:{parent:He._currentValue,pool:l},t.memoizedState={baseLanes:n,cachePool:l},e!==null&&kl(t,null),wr(),Tf(t),e!==null&&Mo(e,t,o,!0),t.childLanes=i,null}function Hl(e,t){return t=Pl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function B1(e,t,n){return oo(t,e.child,null,n),e=Hl(t,t.pendingProps),e.flags|=2,Ft(t),t.memoizedState=null,e}function u0(e,t,n){var o=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(fe){if(o.mode==="hidden")return e=Hl(t,o),t.lanes=536870912,Ei(null,e);if(br(t),(e=Te)?(e=Pd(e,Bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=xf(e),n.return=t,t.child=n,Je=t,Te=null)):e=null,e===null)throw vn(t);return t.lanes=536870912,null}return Hl(t,o)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(br(t),i)if(t.flags&256)t.flags&=-257,t=B1(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(c(558));else if(Pe||Mo(e,t,n,!1),i=(n&e.childLanes)!==0,Pe||i){if(o=Re,o!==null&&(s=Fc(o,n),s!==0&&s!==l.retryLane))throw l.retryLane=s,Zn(e,s),xt(o,e,s),qr;Jl(),t=B1(e,t,n)}else e=l.treeContext,Te=Tt(s.nextSibling),Je=t,fe=!0,wn=null,Bt=!1,e!==null&&yf(t,e),t=Hl(t,o),t.flags|=4096;return t}return e=Qt(e.child,{mode:o.mode,children:o.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Il(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(c(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Vr(e,t,n,o,i){return $n(t),n=kr(e,t,n,o,void 0,i),o=zr(),e!==null&&!Pe?(Sr(e,t,i),nn(e,t,i)):(fe&&o&&lr(t),t.flags|=1,$e(e,t,n,i),t.child)}function M1(e,t,n,o,i,l){return $n(t),t.updateQueue=null,n=Of(t,o,n,i),Df(e),o=zr(),e!==null&&!Pe?(Sr(e,t,l),nn(e,t,l)):(fe&&o&&lr(t),t.flags|=1,$e(e,t,n,l),t.child)}function T1(e,t,n,o,i){if($n(t),t.stateNode===null){var l=Ao,s=n.contextType;typeof s=="object"&&s!==null&&(l=We(s)),l=new n(o,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Ir,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=o,l.state=t.memoizedState,l.refs={},yr(t),s=n.contextType,l.context=typeof s=="object"&&s!==null?We(s):Ao,l.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Hr(t,n,s,o),l.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&Ir.enqueueReplaceState(l,l.state,null),Ci(t,o,l,i),bi(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){l=t.stateNode;var d=t.memoizedProps,y=lo(n,d);l.props=y;var C=l.context,R=n.contextType;s=Ao,typeof R=="object"&&R!==null&&(s=We(R));var M=n.getDerivedStateFromProps;R=typeof M=="function"||typeof l.getSnapshotBeforeUpdate=="function",d=t.pendingProps!==d,R||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(d||C!==s)&&g1(t,l,o,s),Cn=!1;var S=t.memoizedState;l.state=S,Ci(t,o,l,i),bi(),C=t.memoizedState,d||S!==C||Cn?(typeof M=="function"&&(Hr(t,n,M,o),C=t.memoizedState),(y=Cn||p1(t,n,y,o,S,C,s))?(R||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=C),l.props=o,l.state=C,l.context=s,o=y):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{l=t.stateNode,pr(e,t),s=t.memoizedProps,R=lo(n,s),l.props=R,M=t.pendingProps,S=l.context,C=n.contextType,y=Ao,typeof C=="object"&&C!==null&&(y=We(C)),d=n.getDerivedStateFromProps,(C=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==M||S!==y)&&g1(t,l,o,y),Cn=!1,S=t.memoizedState,l.state=S,Ci(t,o,l,i),bi();var A=t.memoizedState;s!==M||S!==A||Cn||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof d=="function"&&(Hr(t,n,d,o),A=t.memoizedState),(R=Cn||p1(t,n,R,o,S,A,y)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(C||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(o,A,y),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(o,A,y)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=A),l.props=o,l.state=A,l.context=y,o=R):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),o=!1)}return l=o,Il(e,t),o=(t.flags&128)!==0,l||o?(l=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&o?(t.child=oo(t,e.child,null,i),t.child=oo(t,null,n,i)):$e(e,t,n,i),t.memoizedState=l.state,e=t.child):e=nn(e,t,i),e}function D1(e,t,n,o){return Jn(),t.flags|=256,$e(e,t,n,o),t.child}var Kr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gr(e){return{baseLanes:e,cachePool:bf()}}function Yr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=vt),e}function O1(e,t,n){var o=t.pendingProps,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(_e.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(fe){if(i?Sn(t):An(),(e=Te)?(e=Pd(e,Bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fn!==null?{id:It,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=xf(e),n.return=t,t.child=n,Je=t,Te=null)):e=null,e===null)throw vn(t);return Rs(e)?t.lanes=32:t.lanes=536870912,null}var d=o.children;return o=o.fallback,i?(An(),i=t.mode,d=Pl({mode:"hidden",children:d},i),o=Qn(o,i,n,null),d.return=t,o.return=t,d.sibling=o,t.child=d,o=t.child,o.memoizedState=Gr(n),o.childLanes=Yr(e,s,n),t.memoizedState=Kr,Ei(null,o)):(Sn(t),Xr(t,d))}var y=e.memoizedState;if(y!==null&&(d=y.dehydrated,d!==null)){if(l)t.flags&256?(Sn(t),t.flags&=-257,t=Zr(e,t,n)):t.memoizedState!==null?(An(),t.child=e.child,t.flags|=128,t=null):(An(),d=o.fallback,i=t.mode,o=Pl({mode:"visible",children:o.children},i),d=Qn(d,i,n,null),d.flags|=2,o.return=t,d.return=t,o.sibling=d,t.child=o,oo(t,e.child,null,n),o=t.child,o.memoizedState=Gr(n),o.childLanes=Yr(e,s,n),t.memoizedState=Kr,t=Ei(null,o));else if(Sn(t),Rs(d)){if(s=d.nextSibling&&d.nextSibling.dataset,s)var C=s.dgst;s=C,o=Error(c(419)),o.stack="",o.digest=s,yi({value:o,source:null,stack:null}),t=Zr(e,t,n)}else if(Pe||Mo(e,t,n,!1),s=(n&e.childLanes)!==0,Pe||s){if(s=Re,s!==null&&(o=Fc(s,n),o!==0&&o!==y.retryLane))throw y.retryLane=o,Zn(e,o),xt(s,e,o),qr;Es(d)||Jl(),t=Zr(e,t,n)}else Es(d)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,Te=Tt(d.nextSibling),Je=t,fe=!0,wn=null,Bt=!1,e!==null&&yf(t,e),t=Xr(t,o.children),t.flags|=4096);return t}return i?(An(),d=o.fallback,i=t.mode,y=e.child,C=y.sibling,o=Qt(y,{mode:"hidden",children:o.children}),o.subtreeFlags=y.subtreeFlags&65011712,C!==null?d=Qt(C,d):(d=Qn(d,i,n,null),d.flags|=2),d.return=t,o.return=t,o.sibling=d,t.child=o,Ei(null,o),o=t.child,d=e.child.memoizedState,d===null?d=Gr(n):(i=d.cachePool,i!==null?(y=He._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=bf(),d={baseLanes:d.baseLanes|n,cachePool:i}),o.memoizedState=d,o.childLanes=Yr(e,s,n),t.memoizedState=Kr,Ei(e.child,o)):(Sn(t),n=e.child,e=n.sibling,n=Qt(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Xr(e,t){return t=Pl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Pl(e,t){return e=pt(22,e,null,t),e.lanes=0,e}function Zr(e,t,n){return oo(t,e.child,null,n),e=Xr(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function j1(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),fr(e.return,t,n)}function Qr(e,t,n,o,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i,treeForkCount:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=i,s.treeForkCount=l)}function N1(e,t,n){var o=t.pendingProps,i=o.revealOrder,l=o.tail;o=o.children;var s=_e.current,d=(s&2)!==0;if(d?(s=s&1|2,t.flags|=128):s&=1,N(_e,s),$e(e,t,o,n),o=fe?mi:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&j1(e,n,t);else if(e.tag===19)j1(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Bl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qr(t,!1,i,n,l,o);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qr(t,!0,n,null,l,o);break;case"together":Qr(t,!1,null,null,void 0,o);break;default:t.memoizedState=null}return t.child}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Mo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(c(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function m0(e,t,n){switch(t.tag){case 3:Ge(t,t.stateNode.containerInfo),bn(t,He,e.memoizedState.cache),Jn();break;case 27:case 5:un(t);break;case 4:Ge(t,t.stateNode.containerInfo);break;case 10:bn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,br(t),null;break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(Sn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?O1(e,t,n):(Sn(t),e=nn(e,t,n),e!==null?e.sibling:null);Sn(t);break;case 19:var i=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(Mo(e,t,n,!1),o=(n&t.childLanes)!==0),i){if(o)return N1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),N(_e,_e.current),o)break;return null;case 22:return t.lanes=0,E1(e,t,n,t.pendingProps);case 24:bn(t,He,e.memoizedState.cache)}return nn(e,t,n)}function L1(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Pe=!0;else{if(!Jr(e,n)&&(t.flags&128)===0)return Pe=!1,m0(e,t,n);Pe=(e.flags&131072)!==0}else Pe=!1,fe&&(t.flags&1048576)!==0&&mf(t,mi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var o=t.pendingProps;if(e=to(t.elementType),t.type=e,typeof e=="function")nr(e)?(o=lo(e,o),t.tag=1,t=T1(null,t,e,o,n)):(t.tag=0,t=Vr(null,t,e,o,n));else{if(e!=null){var i=e.$$typeof;if(i===V){t.tag=11,t=z1(null,t,e,o,n);break e}else if(i===H){t.tag=14,t=S1(null,t,e,o,n);break e}}throw t=ge(e)||e,Error(c(306,t,""))}}return t;case 0:return Vr(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,i=lo(o,t.pendingProps),T1(e,t,o,i,n);case 3:e:{if(Ge(t,t.stateNode.containerInfo),e===null)throw Error(c(387));o=t.pendingProps;var l=t.memoizedState;i=l.element,pr(e,t),Ci(t,o,null,n);var s=t.memoizedState;if(o=s.cache,bn(t,He,o),o!==l.cache&&dr(t,[He],n,!0),bi(),o=s.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=D1(e,t,o,n);break e}else if(o!==i){i=At(Error(c(424)),t),yi(i),t=D1(e,t,o,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=Tt(e.firstChild),Je=t,fe=!0,wn=null,Bt=!0,n=Ef(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Jn(),o===i){t=nn(e,t,n);break e}$e(e,t,o,n)}t=t.child}return t;case 26:return Il(e,t),e===null?(n=Xd(t.type,null,t.pendingProps,null))?t.memoizedState=n:fe||(n=t.type,e=t.pendingProps,o=ia(te.current).createElement(n),o[Qe]=t,o[rt]=e,et(o,n,e),Ye(o),t.stateNode=o):t.memoizedState=Xd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return un(t),e===null&&fe&&(o=t.stateNode=Kd(t.type,t.pendingProps,te.current),Je=t,Bt=!0,i=Te,jn(t.type)?(Bs=i,Te=Tt(o.firstChild)):Te=i),$e(e,t,t.pendingProps.children,n),Il(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&fe&&((i=o=Te)&&(o=K0(o,t.type,t.pendingProps,Bt),o!==null?(t.stateNode=o,Je=t,Te=Tt(o.firstChild),Bt=!1,i=!0):i=!1),i||vn(t)),un(t),i=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,o=l.children,zs(i,l)?o=null:s!==null&&zs(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=kr(e,t,a0,null,null,n),qi._currentValue=i),Il(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&fe&&((e=n=Te)&&(n=G0(n,t.pendingProps,Bt),n!==null?(t.stateNode=n,Je=t,Te=null,e=!0):e=!1),e||vn(t)),null;case 13:return O1(e,t,n);case 4:return Ge(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=oo(t,null,o,n):$e(e,t,o,n),t.child;case 11:return z1(e,t,t.type,t.pendingProps,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,bn(t,t.type,o.value),$e(e,t,o.children,n),t.child;case 9:return i=t.type._context,o=t.pendingProps.children,$n(t),i=We(i),o=o(i),t.flags|=1,$e(e,t,o,n),t.child;case 14:return S1(e,t,t.type,t.pendingProps,n);case 15:return A1(e,t,t.type,t.pendingProps,n);case 19:return N1(e,t,n);case 31:return u0(e,t,n);case 22:return E1(e,t,n,t.pendingProps);case 24:return $n(t),o=We(He),e===null?(i=ur(),i===null&&(i=Re,l=hr(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=n),i=l),t.memoizedState={parent:o,cache:i},yr(t),bn(t,He,i)):((e.lanes&n)!==0&&(pr(e,t),Ci(t,null,null,n),bi()),i=e.memoizedState,l=t.memoizedState,i.parent!==o?(i={parent:o,cache:o},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),bn(t,He,o)):(o=l.cache,bn(t,He,o),o!==i.cache&&dr(t,[He],n,!0))),$e(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(c(156,t.tag))}function on(e){e.flags|=4}function Wr(e,t,n,o,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(fd())e.flags|=8192;else throw no=Sl,mr}else e.flags&=-16777217}function _1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!$d(t))if(fd())e.flags|=8192;else throw no=Sl,mr}function ql(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?yc():536870912,e.lanes|=t,qo|=t)}function Ri(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&65011712,o|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function y0(e,t,n){var o=t.pendingProps;switch(ar(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return De(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),$t(He),Oe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bo(t)?on(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,sr())),De(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(on(t),l!==null?(De(t),_1(t,l)):(De(t),Wr(t,i,null,o,n))):l?l!==e.memoizedState?(on(t),De(t),_1(t,l)):(De(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&on(t),De(t),Wr(t,i,e,o,n)),null;case 27:if(qn(t),n=te.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&on(t);else{if(!o){if(t.stateNode===null)throw Error(c(166));return De(t),null}e=I.current,Bo(t)?pf(t):(e=Kd(i,o,n),t.stateNode=e,on(t))}return De(t),null;case 5:if(qn(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&on(t);else{if(!o){if(t.stateNode===null)throw Error(c(166));return De(t),null}if(l=I.current,Bo(t))pf(t);else{var s=ia(te.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof o.is=="string"?s.createElement("select",{is:o.is}):s.createElement("select"),o.multiple?l.multiple=!0:o.size&&(l.size=o.size);break;default:l=typeof o.is=="string"?s.createElement(i,{is:o.is}):s.createElement(i)}}l[Qe]=t,l[rt]=o;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=l;e:switch(et(l,i,o),i){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&on(t)}}return De(t),Wr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&on(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(c(166));if(e=te.current,Bo(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,i=Je,i!==null)switch(i.tag){case 27:case 5:o=i.memoizedProps}e[Qe]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Od(e.nodeValue,n)),e||vn(t,!0)}else e=ia(e).createTextNode(o),e[Qe]=t,t.stateNode=e}return De(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=Bo(t),n!==null){if(e===null){if(!o)throw Error(c(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(557));e[Qe]=t}else Jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),e=!1}else n=sr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ft(t),t):(Ft(t),null);if((t.flags&128)!==0)throw Error(c(558))}return De(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Bo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[Qe]=t}else Jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;De(t),i=!1}else i=sr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Ft(t),t):(Ft(t),null)}return Ft(t),(t.flags&128)!==0?(t.lanes=n,t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,i=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(i=o.alternate.memoizedState.cachePool.pool),l=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool),l!==i&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ql(t,t.updateQueue),De(t),null);case 4:return Oe(),e===null&&ws(t.stateNode.containerInfo),De(t),null;case 10:return $t(t.type),De(t),null;case 19:if(T(_e),o=t.memoizedState,o===null)return De(t),null;if(i=(t.flags&128)!==0,l=o.rendering,l===null)if(i)Ri(o,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Bl(e),l!==null){for(t.flags|=128,Ri(o,!1),e=l.updateQueue,t.updateQueue=e,ql(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hf(n,e),n=n.sibling;return N(_e,_e.current&1|2),fe&&Jt(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&Ze()>Xl&&(t.flags|=128,i=!0,Ri(o,!1),t.lanes=4194304)}else{if(!i)if(e=Bl(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ql(t,e),Ri(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!fe)return De(t),null}else 2*Ze()-o.renderingStartTime>Xl&&n!==536870912&&(t.flags|=128,i=!0,Ri(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(e=o.last,e!==null?e.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ze(),e.sibling=null,n=_e.current,N(_e,i?n&1|2:n&1),fe&&Jt(t,o.treeForkCount),e):(De(t),null);case 22:case 23:return Ft(t),vr(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),n=t.updateQueue,n!==null&&ql(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&T(eo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$t(He),De(t),null;case 25:return null;case 30:return null}throw Error(c(156,t.tag))}function p0(e,t){switch(ar(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $t(He),Oe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qn(t),null;case 31:if(t.memoizedState!==null){if(Ft(t),t.alternate===null)throw Error(c(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ft(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(c(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return T(_e),null;case 4:return Oe(),null;case 10:return $t(t.type),null;case 22:case 23:return Ft(t),vr(),e!==null&&T(eo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $t(He),null;case 25:return null;default:return null}}function U1(e,t){switch(ar(t),t.tag){case 3:$t(He),Oe();break;case 26:case 27:case 5:qn(t);break;case 4:Oe();break;case 31:t.memoizedState!==null&&Ft(t);break;case 13:Ft(t);break;case 19:T(_e);break;case 10:$t(t.type);break;case 22:case 23:Ft(t),vr(),e!==null&&T(eo);break;case 24:$t(He)}}function Bi(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var i=o.next;n=i;do{if((n.tag&e)===e){o=void 0;var l=n.create,s=n.inst;o=l(),s.destroy=o}n=n.next}while(n!==i)}}catch(d){ke(t,t.return,d)}}function En(e,t,n){try{var o=t.updateQueue,i=o!==null?o.lastEffect:null;if(i!==null){var l=i.next;o=l;do{if((o.tag&e)===e){var s=o.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,i=t;var y=n,C=d;try{C()}catch(R){ke(i,y,R)}}}o=o.next}while(o!==l)}}catch(R){ke(t,t.return,R)}}function H1(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Bf(t,n)}catch(o){ke(e,e.return,o)}}}function I1(e,t,n){n.props=lo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){ke(e,t,o)}}function Mi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(i){ke(e,t,i)}}function qt(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(i){ke(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ke(e,t,i)}else n.current=null}function P1(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(i){ke(e,e.return,i)}}function $r(e,t,n){try{var o=e.stateNode;U0(o,e.type,n,t),o[rt]=t}catch(i){ke(e,e.return,i)}}function q1(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jn(e.type)||e.tag===4}function es(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||q1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ts(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xt));else if(o!==4&&(o===27&&jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(ts(e,t,n),e=e.sibling;e!==null;)ts(e,t,n),e=e.sibling}function Vl(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function V1(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);et(t,o,n),t[Qe]=e,t[rt]=n}catch(l){ke(e,e.return,l)}}var ln=!1,qe=!1,ns=!1,K1=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function g0(e,t){if(e=e.containerInfo,Cs=da,e=nf(e),Za(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,d=-1,y=-1,C=0,R=0,M=e,S=null;t:for(;;){for(var A;M!==n||i!==0&&M.nodeType!==3||(d=s+i),M!==l||o!==0&&M.nodeType!==3||(y=s+o),M.nodeType===3&&(s+=M.nodeValue.length),(A=M.firstChild)!==null;)S=M,M=A;for(;;){if(M===e)break t;if(S===n&&++C===i&&(d=s),S===l&&++R===o&&(y=s),(A=M.nextSibling)!==null)break;M=S,S=M.parentNode}M=A}n=d===-1||y===-1?null:{start:d,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},da=!1,Xe=t;Xe!==null;)if(t=Xe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xe=e;else for(;Xe!==null;){switch(t=Xe,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,n=t,i=l.memoizedProps,l=l.memoizedState,o=n.stateNode;try{var P=lo(n.type,i);e=o.getSnapshotBeforeUpdate(P,l),o.__reactInternalSnapshotBeforeUpdate=e}catch(X){ke(n,n.return,X)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)As(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":As(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=t.sibling,e!==null){e.return=t.return,Xe=e;break}Xe=t.return}}function G1(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:rn(e,n),o&4&&Bi(5,n);break;case 1:if(rn(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){ke(n,n.return,s)}else{var i=lo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ke(n,n.return,s)}}o&64&&H1(n),o&512&&Mi(n,n.return);break;case 3:if(rn(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Bf(e,t)}catch(s){ke(n,n.return,s)}}break;case 27:t===null&&o&4&&V1(n);case 26:case 5:rn(e,n),t===null&&o&4&&P1(n),o&512&&Mi(n,n.return);break;case 12:rn(e,n);break;case 31:rn(e,n),o&4&&Z1(e,n);break;case 13:rn(e,n),o&4&&Q1(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=A0.bind(null,n),Y0(e,n))));break;case 22:if(o=n.memoizedState!==null||ln,!o){t=t!==null&&t.memoizedState!==null||qe,i=ln;var l=qe;ln=o,(qe=t)&&!l?sn(e,n,(n.subtreeFlags&8772)!==0):rn(e,n),ln=i,qe=l}break;case 30:break;default:rn(e,n)}}function Y1(e){var t=e.alternate;t!==null&&(e.alternate=null,Y1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ta(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,ct=!1;function an(e,t,n){for(n=n.child;n!==null;)X1(e,t,n),n=n.sibling}function X1(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ti,n)}catch{}switch(n.tag){case 26:qe||qt(n,t),an(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qe||qt(n,t);var o=je,i=ct;jn(n.type)&&(je=n.stateNode,ct=!1),an(e,t,n),Hi(n.stateNode),je=o,ct=i;break;case 5:qe||qt(n,t);case 6:if(o=je,i=ct,je=null,an(e,t,n),je=o,ct=i,je!==null)if(ct)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(n.stateNode)}catch(l){ke(n,t,l)}else try{je.removeChild(n.stateNode)}catch(l){ke(n,t,l)}break;case 18:je!==null&&(ct?(e=je,Hd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jo(e)):Hd(je,n.stateNode));break;case 4:o=je,i=ct,je=n.stateNode.containerInfo,ct=!0,an(e,t,n),je=o,ct=i;break;case 0:case 11:case 14:case 15:En(2,n,t),qe||En(4,n,t),an(e,t,n);break;case 1:qe||(qt(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&I1(n,t,o)),an(e,t,n);break;case 21:an(e,t,n);break;case 22:qe=(o=qe)||n.memoizedState!==null,an(e,t,n),qe=o;break;default:an(e,t,n)}}function Z1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jo(e)}catch(n){ke(t,t.return,n)}}}function Q1(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jo(e)}catch(n){ke(t,t.return,n)}}function F0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new K1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new K1),t;default:throw Error(c(435,e.tag))}}function Kl(e,t){var n=F0(e);t.forEach(function(o){if(!n.has(o)){n.add(o);var i=E0.bind(null,e,o);o.then(i,i)}})}function ft(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o],l=e,s=t,d=s;e:for(;d!==null;){switch(d.tag){case 27:if(jn(d.type)){je=d.stateNode,ct=!1;break e}break;case 5:je=d.stateNode,ct=!1;break e;case 3:case 4:je=d.stateNode.containerInfo,ct=!0;break e}d=d.return}if(je===null)throw Error(c(160));X1(l,s,i),je=null,ct=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)J1(t,e),t=t.sibling}var Lt=null;function J1(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(t,e),dt(e),o&4&&(En(3,e,e.return),Bi(3,e),En(5,e,e.return));break;case 1:ft(t,e),dt(e),o&512&&(qe||n===null||qt(n,n.return)),o&64&&ln&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var i=Lt;if(ft(t,e),dt(e),o&512&&(qe||n===null||qt(n,n.return)),o&4){var l=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(o){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ii]||l[Qe]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(o),i.head.insertBefore(l,i.querySelector("head > title"))),et(l,o,n),l[Qe]=e,Ye(l),o=l;break e;case"link":var s=Jd("link","href",i).get(o+(n.href||""));if(s){for(var d=0;d<s.length;d++)if(l=s[d],l.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&l.getAttribute("rel")===(n.rel==null?null:n.rel)&&l.getAttribute("title")===(n.title==null?null:n.title)&&l.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(d,1);break t}}l=i.createElement(o),et(l,o,n),i.head.appendChild(l);break;case"meta":if(s=Jd("meta","content",i).get(o+(n.content||""))){for(d=0;d<s.length;d++)if(l=s[d],l.getAttribute("content")===(n.content==null?null:""+n.content)&&l.getAttribute("name")===(n.name==null?null:n.name)&&l.getAttribute("property")===(n.property==null?null:n.property)&&l.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&l.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(d,1);break t}}l=i.createElement(o),et(l,o,n),i.head.appendChild(l);break;default:throw Error(c(468,o))}l[Qe]=e,Ye(l),o=l}e.stateNode=o}else Wd(i,e.type,e.stateNode);else e.stateNode=Qd(i,o,e.memoizedProps);else l!==o?(l===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):l.count--,o===null?Wd(i,e.type,e.stateNode):Qd(i,o,e.memoizedProps)):o===null&&e.stateNode!==null&&$r(e,e.memoizedProps,n.memoizedProps)}break;case 27:ft(t,e),dt(e),o&512&&(qe||n===null||qt(n,n.return)),n!==null&&o&4&&$r(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ft(t,e),dt(e),o&512&&(qe||n===null||qt(n,n.return)),e.flags&32){i=e.stateNode;try{wo(i,"")}catch(P){ke(e,e.return,P)}}o&4&&e.stateNode!=null&&(i=e.memoizedProps,$r(e,i,n!==null?n.memoizedProps:i)),o&1024&&(ns=!0);break;case 6:if(ft(t,e),dt(e),o&4){if(e.stateNode===null)throw Error(c(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(P){ke(e,e.return,P)}}break;case 3:if(ra=null,i=Lt,Lt=la(t.containerInfo),ft(t,e),Lt=i,dt(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(t.containerInfo)}catch(P){ke(e,e.return,P)}ns&&(ns=!1,W1(e));break;case 4:o=Lt,Lt=la(e.stateNode.containerInfo),ft(t,e),dt(e),Lt=o;break;case 12:ft(t,e),dt(e);break;case 31:ft(t,e),dt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 13:ft(t,e),dt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Yl=Ze()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 22:i=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,C=ln,R=qe;if(ln=C||i,qe=R||y,ft(t,e),qe=R,ln=C,dt(e),o&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||y||ln||qe||ao(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(l=y.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{d=y.stateNode;var M=y.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null;d.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(P){ke(y,y.return,P)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(P){ke(y,y.return,P)}}}else if(t.tag===18){if(n===null){y=t;try{var A=y.stateNode;i?Id(A,!0):Id(y.stateNode,!1)}catch(P){ke(y,y.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Kl(e,n))));break;case 19:ft(t,e),dt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Kl(e,o)));break;case 30:break;case 21:break;default:ft(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(q1(o)){n=o;break}o=o.return}if(n==null)throw Error(c(160));switch(n.tag){case 27:var i=n.stateNode,l=es(e);Vl(e,l,i);break;case 5:var s=n.stateNode;n.flags&32&&(wo(s,""),n.flags&=-33);var d=es(e);Vl(e,d,s);break;case 3:case 4:var y=n.stateNode.containerInfo,C=es(e);ts(e,C,y);break;default:throw Error(c(161))}}catch(R){ke(e,e.return,R)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function W1(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;W1(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function rn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)G1(e,t.alternate,t),t=t.sibling}function ao(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),ao(t);break;case 1:qt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&I1(t,t.return,n),ao(t);break;case 27:Hi(t.stateNode);case 26:case 5:qt(t,t.return),ao(t);break;case 22:t.memoizedState===null&&ao(t);break;case 30:ao(t);break;default:ao(t)}e=e.sibling}}function sn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,i=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:sn(i,l,n),Bi(4,l);break;case 1:if(sn(i,l,n),o=l,i=o.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(C){ke(o,o.return,C)}if(o=l,i=o.updateQueue,i!==null){var d=o.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Rf(y[i],d)}catch(C){ke(o,o.return,C)}}n&&s&64&&H1(l),Mi(l,l.return);break;case 27:V1(l);case 26:case 5:sn(i,l,n),n&&o===null&&s&4&&P1(l),Mi(l,l.return);break;case 12:sn(i,l,n);break;case 31:sn(i,l,n),n&&s&4&&Z1(i,l);break;case 13:sn(i,l,n),n&&s&4&&Q1(i,l);break;case 22:l.memoizedState===null&&sn(i,l,n),Mi(l,l.return);break;case 30:break;default:sn(i,l,n)}t=t.sibling}}function os(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pi(n))}function is(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e))}function _t(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)$1(e,t,n,o),t=t.sibling}function $1(e,t,n,o){var i=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t,n,o),i&2048&&Bi(9,t);break;case 1:_t(e,t,n,o);break;case 3:_t(e,t,n,o),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pi(e)));break;case 12:if(i&2048){_t(e,t,n,o),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,d=l.onPostCommit;typeof d=="function"&&d(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){ke(t,t.return,y)}}else _t(e,t,n,o);break;case 31:_t(e,t,n,o);break;case 13:_t(e,t,n,o);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?_t(e,t,n,o):Ti(e,t):l._visibility&2?_t(e,t,n,o):(l._visibility|=2,Ho(e,t,n,o,(t.subtreeFlags&10256)!==0||!1)),i&2048&&os(s,t);break;case 24:_t(e,t,n,o),i&2048&&is(t.alternate,t);break;default:_t(e,t,n,o)}}function Ho(e,t,n,o,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,s=t,d=n,y=o,C=s.flags;switch(s.tag){case 0:case 11:case 15:Ho(l,s,d,y,i),Bi(8,s);break;case 23:break;case 22:var R=s.stateNode;s.memoizedState!==null?R._visibility&2?Ho(l,s,d,y,i):Ti(l,s):(R._visibility|=2,Ho(l,s,d,y,i)),i&&C&2048&&os(s.alternate,s);break;case 24:Ho(l,s,d,y,i),i&&C&2048&&is(s.alternate,s);break;default:Ho(l,s,d,y,i)}t=t.sibling}}function Ti(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,i=o.flags;switch(o.tag){case 22:Ti(n,o),i&2048&&os(o.alternate,o);break;case 24:Ti(n,o),i&2048&&is(o.alternate,o);break;default:Ti(n,o)}t=t.sibling}}var Di=8192;function Io(e,t,n){if(e.subtreeFlags&Di)for(e=e.child;e!==null;)ed(e,t,n),e=e.sibling}function ed(e,t,n){switch(e.tag){case 26:Io(e,t,n),e.flags&Di&&e.memoizedState!==null&&lu(n,Lt,e.memoizedState,e.memoizedProps);break;case 5:Io(e,t,n);break;case 3:case 4:var o=Lt;Lt=la(e.stateNode.containerInfo),Io(e,t,n),Lt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Di,Di=16777216,Io(e,t,n),Di=o):Io(e,t,n));break;default:Io(e,t,n)}}function td(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Xe=o,od(o,e)}td(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nd(e),e=e.sibling}function nd(e){switch(e.tag){case 0:case 11:case 15:Oi(e),e.flags&2048&&En(9,e,e.return);break;case 3:Oi(e);break;case 12:Oi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gl(e)):Oi(e);break;default:Oi(e)}}function Gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];Xe=o,od(o,e)}td(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),Gl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gl(t));break;default:Gl(t)}e=e.sibling}}function od(e,t){for(;Xe!==null;){var n=Xe;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:pi(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,Xe=o;else e:for(n=e;Xe!==null;){o=Xe;var i=o.sibling,l=o.return;if(Y1(o),o===n){Xe=null;break e}if(i!==null){i.return=l,Xe=i;break e}Xe=l}}}var w0={getCacheForType:function(e){var t=We(He),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return We(He).controller.signal}},v0=typeof WeakMap=="function"?WeakMap:Map,pe=0,Re=null,le=null,re=0,Ce=0,wt=null,Rn=!1,Po=!1,ls=!1,cn=0,Le=0,Bn=0,ro=0,as=0,vt=0,qo=0,ji=null,ht=null,rs=!1,Yl=0,id=0,Xl=1/0,Zl=null,Mn=null,Ve=0,Tn=null,Vo=null,fn=0,ss=0,cs=null,ld=null,Ni=0,fs=null;function bt(){return(pe&2)!==0&&re!==0?re&-re:E.T!==null?ys():wc()}function ad(){if(vt===0)if((re&536870912)===0||fe){var e=ol;ol<<=1,(ol&3932160)===0&&(ol=262144),vt=e}else vt=536870912;return e=gt.current,e!==null&&(e.flags|=32),vt}function xt(e,t,n){(e===Re&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(Ko(e,0),Dn(e,re,vt,!1)),oi(e,n),((pe&2)===0||e!==Re)&&(e===Re&&((pe&2)===0&&(ro|=n),Le===4&&Dn(e,re,vt,!1)),Vt(e))}function rd(e,t,n){if((pe&6)!==0)throw Error(c(327));var o=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ni(e,t),i=o?k0(e,t):hs(e,t,!0),l=o;do{if(i===0){Po&&!o&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,l&&!b0(n)){i=hs(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var d=e;i=ji;var y=d.current.memoizedState.isDehydrated;if(y&&(Ko(d,s).flags|=256),s=hs(d,s,!1),s!==2){if(ls&&!y){d.errorRecoveryDisabledLanes|=l,ro|=l,i=4;break e}l=ht,ht=i,l!==null&&(ht===null?ht=l:ht.push.apply(ht,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Ko(e,0),Dn(e,t,0,!0);break}e:{switch(o=e,l=i,l){case 0:case 1:throw Error(c(345));case 4:if((t&4194048)!==t)break;case 6:Dn(o,t,vt,!Rn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(c(329))}if((t&62914560)===t&&(i=Yl+300-Ze(),10<i)){if(Dn(o,t,vt,!Rn),ll(o,0,!0)!==0)break e;fn=t,o.timeoutHandle=_d(sd.bind(null,o,n,ht,Zl,rs,t,vt,ro,qo,Rn,l,"Throttled",-0,0),i);break e}sd(o,n,ht,Zl,rs,t,vt,ro,qo,Rn,l,null,-0,0)}}break}while(!0);Vt(e)}function sd(e,t,n,o,i,l,s,d,y,C,R,M,S,A){if(e.timeoutHandle=-1,M=t.subtreeFlags,M&8192||(M&16785408)===16785408){M={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xt},ed(t,l,M);var P=(l&62914560)===l?Yl-Ze():(l&4194048)===l?id-Ze():0;if(P=au(M,P),P!==null){fn=l,e.cancelPendingCommit=P(yd.bind(null,e,t,l,n,o,i,s,d,y,R,M,null,S,A)),Dn(e,l,s,!C);return}}yd(e,t,l,n,o,i,s,d,y)}function b0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var i=n[o],l=i.getSnapshot;i=i.value;try{if(!yt(l(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,o){t&=~as,t&=~ro,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var i=t;0<i;){var l=31-mt(i),s=1<<l;o[l]=-1,i&=~s}n!==0&&pc(e,n,t)}function Ql(){return(pe&6)===0?(Li(0),!1):!0}function ds(){if(le!==null){if(Ce===0)var e=le.return;else e=le,Wt=Wn=null,Ar(e),jo=null,Fi=0,e=le;for(;e!==null;)U1(e.alternate,e),e=e.return;le=null}}function Ko(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,P0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),fn=0,ds(),Re=e,le=n=Qt(e.current,null),re=t,Ce=0,wt=null,Rn=!1,Po=ni(e,t),ls=!1,qo=vt=as=ro=Bn=Le=0,ht=ji=null,rs=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var i=31-mt(o),l=1<<i;t|=e[i],o&=~l}return cn=t,pl(),n}function cd(e,t){$=null,E.H=Ai,t===Oo||t===zl?(t=zf(),Ce=3):t===mr?(t=zf(),Ce=4):Ce=t===qr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,wt=t,le===null&&(Le=1,Ul(e,At(t,e.current)))}function fd(){var e=gt.current;return e===null?!0:(re&4194048)===re?Mt===null:(re&62914560)===re||(re&536870912)!==0?e===Mt:!1}function dd(){var e=E.H;return E.H=Ai,e===null?Ai:e}function hd(){var e=E.A;return E.A=w0,e}function Jl(){Le=4,Rn||(re&4194048)!==re&&gt.current!==null||(Po=!0),(Bn&134217727)===0&&(ro&134217727)===0||Re===null||Dn(Re,re,vt,!1)}function hs(e,t,n){var o=pe;pe|=2;var i=dd(),l=hd();(Re!==e||re!==t)&&(Zl=null,Ko(e,t)),t=!1;var s=Le;e:do try{if(Ce!==0&&le!==null){var d=le,y=wt;switch(Ce){case 8:ds(),s=6;break e;case 3:case 2:case 9:case 6:gt.current===null&&(t=!0);var C=Ce;if(Ce=0,wt=null,Go(e,d,y,C),n&&Po){s=0;break e}break;default:C=Ce,Ce=0,wt=null,Go(e,d,y,C)}}C0(),s=Le;break}catch(R){cd(e,R)}while(!0);return t&&e.shellSuspendCounter++,Wt=Wn=null,pe=o,E.H=i,E.A=l,le===null&&(Re=null,re=0,pl()),s}function C0(){for(;le!==null;)xd(le)}function k0(e,t){var n=pe;pe|=2;var o=dd(),i=hd();Re!==e||re!==t?(Zl=null,Xl=Ze()+500,Ko(e,t)):Po=ni(e,t);e:do try{if(Ce!==0&&le!==null){t=le;var l=wt;t:switch(Ce){case 1:Ce=0,wt=null,Go(e,t,l,1);break;case 2:case 9:if(Cf(l)){Ce=0,wt=null,ud(t);break}t=function(){Ce!==2&&Ce!==9||Re!==e||(Ce=7),Vt(e)},l.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:Cf(l)?(Ce=0,wt=null,ud(t)):(Ce=0,wt=null,Go(e,t,l,7));break;case 5:var s=null;switch(le.tag){case 26:s=le.memoizedState;case 5:case 27:var d=le;if(s?$d(s):d.stateNode.complete){Ce=0,wt=null;var y=d.sibling;if(y!==null)le=y;else{var C=d.return;C!==null?(le=C,Wl(C)):le=null}break t}}Ce=0,wt=null,Go(e,t,l,5);break;case 6:Ce=0,wt=null,Go(e,t,l,6);break;case 8:ds(),Le=6;break e;default:throw Error(c(462))}}z0();break}catch(R){cd(e,R)}while(!0);return Wt=Wn=null,E.H=o,E.A=i,pe=n,le!==null?0:(Re=null,re=0,pl(),Le)}function z0(){for(;le!==null&&!$i();)xd(le)}function xd(e){var t=L1(e.alternate,e,cn);e.memoizedProps=e.pendingProps,t===null?Wl(e):le=t}function ud(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=M1(n,t,t.pendingProps,t.type,void 0,re);break;case 11:t=M1(n,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:Ar(t);default:U1(n,t),t=le=hf(t,cn),t=L1(n,t,cn)}e.memoizedProps=e.pendingProps,t===null?Wl(e):le=t}function Go(e,t,n,o){Wt=Wn=null,Ar(t),jo=null,Fi=0;var i=t.return;try{if(x0(e,i,t,n,re)){Le=1,Ul(e,At(n,e.current)),le=null;return}}catch(l){if(i!==null)throw le=i,l;Le=1,Ul(e,At(n,e.current)),le=null;return}t.flags&32768?(fe||o===1?e=!0:Po||(re&536870912)!==0?e=!1:(Rn=e=!0,(o===2||o===9||o===3||o===6)&&(o=gt.current,o!==null&&o.tag===13&&(o.flags|=16384))),md(t,e)):Wl(t)}function Wl(e){var t=e;do{if((t.flags&32768)!==0){md(t,Rn);return}e=t.return;var n=y0(t.alternate,t,cn);if(n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Le===0&&(Le=5)}function md(e,t){do{var n=p0(e.alternate,e);if(n!==null){n.flags&=32767,le=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=n}while(e!==null);Le=6,le=null}function yd(e,t,n,o,i,l,s,d,y){e.cancelPendingCommit=null;do $l();while(Ve!==0);if((pe&6)!==0)throw Error(c(327));if(t!==null){if(t===e.current)throw Error(c(177));if(l=t.lanes|t.childLanes,l|=er,ix(e,n,l,s,d,y),e===Re&&(le=Re=null,re=0),Vo=t,Tn=e,fn=n,ss=l,cs=i,ld=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,R0(tl,function(){return vd(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=E.T,E.T=null,i=j.p,j.p=2,s=pe,pe|=4;try{g0(e,t,n)}finally{pe=s,j.p=i,E.T=o}}Ve=1,pd(),gd(),Fd()}}function pd(){if(Ve===1){Ve=0;var e=Tn,t=Vo,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=E.T,E.T=null;var o=j.p;j.p=2;var i=pe;pe|=4;try{J1(t,e);var l=ks,s=nf(e.containerInfo),d=l.focusedElem,y=l.selectionRange;if(s!==d&&d&&d.ownerDocument&&tf(d.ownerDocument.documentElement,d)){if(y!==null&&Za(d)){var C=y.start,R=y.end;if(R===void 0&&(R=C),"selectionStart"in d)d.selectionStart=C,d.selectionEnd=Math.min(R,d.value.length);else{var M=d.ownerDocument||document,S=M&&M.defaultView||window;if(S.getSelection){var A=S.getSelection(),P=d.textContent.length,X=Math.min(y.start,P),Ee=y.end===void 0?X:Math.min(y.end,P);!A.extend&&X>Ee&&(s=Ee,Ee=X,X=s);var v=ef(d,X),p=ef(d,Ee);if(v&&p&&(A.rangeCount!==1||A.anchorNode!==v.node||A.anchorOffset!==v.offset||A.focusNode!==p.node||A.focusOffset!==p.offset)){var b=M.createRange();b.setStart(v.node,v.offset),A.removeAllRanges(),X>Ee?(A.addRange(b),A.extend(p.node,p.offset)):(b.setEnd(p.node,p.offset),A.addRange(b))}}}}for(M=[],A=d;A=A.parentNode;)A.nodeType===1&&M.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<M.length;d++){var B=M[d];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}da=!!Cs,ks=Cs=null}finally{pe=i,j.p=o,E.T=n}}e.current=t,Ve=2}}function gd(){if(Ve===2){Ve=0;var e=Tn,t=Vo,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=E.T,E.T=null;var o=j.p;j.p=2;var i=pe;pe|=4;try{G1(e,t.alternate,t)}finally{pe=i,j.p=o,E.T=n}}Ve=3}}function Fd(){if(Ve===4||Ve===3){Ve=0,mn();var e=Tn,t=Vo,n=fn,o=ld;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ve=5:(Ve=0,Vo=Tn=null,wd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Mn=null),Ba(n),t=t.stateNode,ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ti,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=E.T,i=j.p,j.p=2,E.T=null;try{for(var l=e.onRecoverableError,s=0;s<o.length;s++){var d=o[s];l(d.value,{componentStack:d.stack})}}finally{E.T=t,j.p=i}}(fn&3)!==0&&$l(),Vt(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===fs?Ni++:(Ni=0,fs=e):Ni=0,Li(0)}}function wd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pi(t)))}function $l(){return pd(),gd(),Fd(),vd()}function vd(){if(Ve!==5)return!1;var e=Tn,t=ss;ss=0;var n=Ba(fn),o=E.T,i=j.p;try{j.p=32>n?32:n,E.T=null,n=cs,cs=null;var l=Tn,s=fn;if(Ve=0,Vo=Tn=null,fn=0,(pe&6)!==0)throw Error(c(331));var d=pe;if(pe|=4,nd(l.current),$1(l,l.current,s,n),pe=d,Li(0,!1),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ti,l)}catch{}return!0}finally{j.p=i,E.T=o,wd(e,t)}}function bd(e,t,n){t=At(n,t),t=Pr(e.stateNode,t,2),e=zn(e,t,2),e!==null&&(oi(e,2),Vt(e))}function ke(e,t,n){if(e.tag===3)bd(e,e,n);else for(;t!==null;){if(t.tag===3){bd(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Mn===null||!Mn.has(o))){e=At(n,e),n=C1(2),o=zn(t,n,2),o!==null&&(k1(n,o,t,e),oi(o,2),Vt(o));break}}t=t.return}}function xs(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new v0;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(n)||(ls=!0,i.add(n),e=S0.bind(null,e,t,n),t.then(e,e))}function S0(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Re===e&&(re&n)===n&&(Le===4||Le===3&&(re&62914560)===re&&300>Ze()-Yl?(pe&2)===0&&Ko(e,0):as|=n,qo===re&&(qo=0)),Vt(e)}function Cd(e,t){t===0&&(t=yc()),e=Zn(e,t),e!==null&&(oi(e,t),Vt(e))}function A0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Cd(e,n)}function E0(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(c(314))}o!==null&&o.delete(t),Cd(e,n)}function R0(e,t){return ho(e,t)}var ea=null,Yo=null,us=!1,ta=!1,ms=!1,On=0;function Vt(e){e!==Yo&&e.next===null&&(Yo===null?ea=Yo=e:Yo=Yo.next=e),ta=!0,us||(us=!0,M0())}function Li(e,t){if(!ms&&ta){ms=!0;do for(var n=!1,o=ea;o!==null;){if(e!==0){var i=o.pendingLanes;if(i===0)var l=0;else{var s=o.suspendedLanes,d=o.pingedLanes;l=(1<<31-mt(42|e)+1)-1,l&=i&~(s&~d),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(n=!0,Ad(o,l))}else l=re,l=ll(o,o===Re?l:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(l&3)===0||ni(o,l)||(n=!0,Ad(o,l));o=o.next}while(n);ms=!1}}function B0(){kd()}function kd(){ta=us=!1;var e=0;On!==0&&I0()&&(e=On);for(var t=Ze(),n=null,o=ea;o!==null;){var i=o.next,l=zd(o,t);l===0?(o.next=null,n===null?ea=i:n.next=i,i===null&&(Yo=n)):(n=o,(e!==0||(l&3)!==0)&&(ta=!0)),o=i}Ve!==0&&Ve!==5||Li(e),On!==0&&(On=0)}function zd(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-mt(l),d=1<<s,y=i[s];y===-1?((d&n)===0||(d&o)!==0)&&(i[s]=ox(d,t)):y<=t&&(e.expiredLanes|=d),l&=~d}if(t=Re,n=re,n=ll(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&xo(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ni(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&xo(o),Ba(n)){case 2:case 8:n=uc;break;case 32:n=tl;break;case 268435456:n=mc;break;default:n=tl}return o=Sd.bind(null,e),n=ho(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&xo(o),e.callbackPriority=2,e.callbackNode=null,2}function Sd(e,t){if(Ve!==0&&Ve!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if($l()&&e.callbackNode!==n)return null;var o=re;return o=ll(e,e===Re?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(rd(e,o,t),zd(e,Ze()),e.callbackNode!=null&&e.callbackNode===n?Sd.bind(null,e):null)}function Ad(e,t){if($l())return null;rd(e,t,!0)}function M0(){q0(function(){(pe&6)!==0?ho(xc,B0):kd()})}function ys(){if(On===0){var e=To;e===0&&(e=nl,nl<<=1,(nl&261888)===0&&(nl=256)),On=e}return On}function Ed(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function Rd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function T0(e,t,n,o,i){if(t==="submit"&&n&&n.stateNode===i){var l=Ed((i[rt]||null).action),s=o.submitter;s&&(t=(t=s[rt]||null)?Ed(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var d=new xl("action","action",null,o,i);e.push({event:d,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(On!==0){var y=s?Rd(i,s):new FormData(i);Nr(n,{pending:!0,data:y,method:i.method,action:l},null,y)}}else typeof l=="function"&&(d.preventDefault(),y=s?Rd(i,s):new FormData(i),Nr(n,{pending:!0,data:y,method:i.method,action:l},l,y))},currentTarget:i}]})}}for(var ps=0;ps<$a.length;ps++){var gs=$a[ps],D0=gs.toLowerCase(),O0=gs[0].toUpperCase()+gs.slice(1);Nt(D0,"on"+O0)}Nt(af,"onAnimationEnd"),Nt(rf,"onAnimationIteration"),Nt(sf,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Qx,"onTransitionRun"),Nt(Jx,"onTransitionStart"),Nt(Wx,"onTransitionCancel"),Nt(cf,"onTransitionEnd"),go("onMouseEnter",["mouseout","mouseover"]),go("onMouseLeave",["mouseout","mouseover"]),go("onPointerEnter",["pointerout","pointerover"]),go("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_i));function Bd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var l=void 0;if(t)for(var s=o.length-1;0<=s;s--){var d=o[s],y=d.instance,C=d.currentTarget;if(d=d.listener,y!==l&&i.isPropagationStopped())break e;l=d,i.currentTarget=C;try{l(i)}catch(R){yl(R)}i.currentTarget=null,l=y}else for(s=0;s<o.length;s++){if(d=o[s],y=d.instance,C=d.currentTarget,d=d.listener,y!==l&&i.isPropagationStopped())break e;l=d,i.currentTarget=C;try{l(i)}catch(R){yl(R)}i.currentTarget=null,l=y}}}}function ae(e,t){var n=t[Ma];n===void 0&&(n=t[Ma]=new Set);var o=e+"__bubble";n.has(o)||(Md(t,e,2,!1),n.add(o))}function Fs(e,t,n){var o=0;t&&(o|=4),Md(n,e,o,t)}var na="_reactListening"+Math.random().toString(36).slice(2);function ws(e){if(!e[na]){e[na]=!0,Cc.forEach(function(n){n!=="selectionchange"&&(j0.has(n)||Fs(n,!1,e),Fs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[na]||(t[na]=!0,Fs("selectionchange",!1,t))}}function Md(e,t,n,o){switch(ah(t)){case 2:var i=cu;break;case 8:i=fu;break;default:i=js}n=i.bind(null,t,n,e),i=void 0,!Ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vs(e,t,n,o,i){var l=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var d=o.stateNode.containerInfo;if(d===i)break;if(s===4)for(s=o.return;s!==null;){var y=s.tag;if((y===3||y===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;d!==null;){if(s=mo(d),s===null)return;if(y=s.tag,y===5||y===6||y===26||y===27){o=l=s;continue e}d=d.parentNode}}o=o.return}jc(function(){var C=l,R=_a(n),M=[];e:{var S=ff.get(e);if(S!==void 0){var A=xl,P=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":A=Ex;break;case"focusin":P="focus",A=Va;break;case"focusout":P="blur",A=Va;break;case"beforeblur":case"afterblur":A=Va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=_c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Mx;break;case af:case rf:case sf:A=Fx;break;case cf:A=Dx;break;case"scroll":case"scrollend":A=ux;break;case"wheel":A=jx;break;case"copy":case"cut":case"paste":A=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Hc;break;case"toggle":case"beforetoggle":A=Lx}var X=(t&4)!==0,Ee=!X&&(e==="scroll"||e==="scrollend"),v=X?S!==null?S+"Capture":null:S;X=[];for(var p=C,b;p!==null;){var B=p;if(b=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||b===null||v===null||(B=ai(p,v),B!=null&&X.push(Ui(p,B,b))),Ee)break;p=p.return}0<X.length&&(S=new A(S,P,null,n,R),M.push({event:S,listeners:X}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",S&&n!==La&&(P=n.relatedTarget||n.fromElement)&&(mo(P)||P[uo]))break e;if((A||S)&&(S=R.window===R?R:(S=R.ownerDocument)?S.defaultView||S.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=C,P=P?mo(P):null,P!==null&&(Ee=m(P),X=P.tag,P!==Ee||X!==5&&X!==27&&X!==6)&&(P=null)):(A=null,P=C),A!==P)){if(X=_c,B="onMouseLeave",v="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(X=Hc,B="onPointerLeave",v="onPointerEnter",p="pointer"),Ee=A==null?S:li(A),b=P==null?S:li(P),S=new X(B,p+"leave",A,n,R),S.target=Ee,S.relatedTarget=b,B=null,mo(R)===C&&(X=new X(v,p+"enter",P,n,R),X.target=b,X.relatedTarget=Ee,B=X),Ee=B,A&&P)t:{for(X=N0,v=A,p=P,b=0,B=v;B;B=X(B))b++;B=0;for(var K=p;K;K=X(K))B++;for(;0<b-B;)v=X(v),b--;for(;0<B-b;)p=X(p),B--;for(;b--;){if(v===p||p!==null&&v===p.alternate){X=v;break t}v=X(v),p=X(p)}X=null}else X=null;A!==null&&Td(M,S,A,X,!1),P!==null&&Ee!==null&&Td(M,Ee,P,X,!0)}}e:{if(S=C?li(C):window,A=S.nodeName&&S.nodeName.toLowerCase(),A==="select"||A==="input"&&S.type==="file")var ue=Xc;else if(Gc(S))if(Zc)ue=Yx;else{ue=Kx;var q=Vx}else A=S.nodeName,!A||A.toLowerCase()!=="input"||S.type!=="checkbox"&&S.type!=="radio"?C&&Na(C.elementType)&&(ue=Xc):ue=Gx;if(ue&&(ue=ue(e,C))){Yc(M,ue,n,R);break e}q&&q(e,S,C),e==="focusout"&&C&&S.type==="number"&&C.memoizedProps.value!=null&&ja(S,"number",S.value)}switch(q=C?li(C):window,e){case"focusin":(Gc(q)||q.contentEditable==="true")&&(ko=q,Qa=C,ui=null);break;case"focusout":ui=Qa=ko=null;break;case"mousedown":Ja=!0;break;case"contextmenu":case"mouseup":case"dragend":Ja=!1,of(M,n,R);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":of(M,n,R)}var ee;if(Ga)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Co?Vc(e,n)&&(se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(se="onCompositionStart");se&&(Ic&&n.locale!=="ko"&&(Co||se!=="onCompositionStart"?se==="onCompositionEnd"&&Co&&(ee=Nc()):(gn=R,Ia="value"in gn?gn.value:gn.textContent,Co=!0)),q=oa(C,se),0<q.length&&(se=new Uc(se,e,null,n,R),M.push({event:se,listeners:q}),ee?se.data=ee:(ee=Kc(n),ee!==null&&(se.data=ee)))),(ee=Ux?Hx(e,n):Ix(e,n))&&(se=oa(C,"onBeforeInput"),0<se.length&&(q=new Uc("onBeforeInput","beforeinput",null,n,R),M.push({event:q,listeners:se}),q.data=ee)),T0(M,e,C,n,R)}Bd(M,t)})}function Ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oa(e,t){for(var n=t+"Capture",o=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=ai(e,n),i!=null&&o.unshift(Ui(e,i,l)),i=ai(e,t),i!=null&&o.push(Ui(e,i,l))),e.tag===3)return o;e=e.return}return[]}function N0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Td(e,t,n,o,i){for(var l=t._reactName,s=[];n!==null&&n!==o;){var d=n,y=d.alternate,C=d.stateNode;if(d=d.tag,y!==null&&y===o)break;d!==5&&d!==26&&d!==27||C===null||(y=C,i?(C=ai(n,l),C!=null&&s.unshift(Ui(n,C,y))):i||(C=ai(n,l),C!=null&&s.push(Ui(n,C,y)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var L0=/\r\n?/g,_0=/\u0000|\uFFFD/g;function Dd(e){return(typeof e=="string"?e:""+e).replace(L0,`
`).replace(_0,"")}function Od(e,t){return t=Dd(t),Dd(e)===t}function Ae(e,t,n,o,i,l){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||wo(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&wo(e,""+o);break;case"className":rl(e,"class",o);break;case"tabIndex":rl(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":rl(e,n,o);break;case"style":Dc(e,o,l);break;case"data":if(t!=="object"){rl(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=cl(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(n==="formAction"?(t!=="input"&&Ae(e,t,"name",i.name,i,null),Ae(e,t,"formEncType",i.formEncType,i,null),Ae(e,t,"formMethod",i.formMethod,i,null),Ae(e,t,"formTarget",i.formTarget,i,null)):(Ae(e,t,"encType",i.encType,i,null),Ae(e,t,"method",i.method,i,null),Ae(e,t,"target",i.target,i,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=cl(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=Xt);break;case"onScroll":o!=null&&ae("scroll",e);break;case"onScrollEnd":o!=null&&ae("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":ae("beforetoggle",e),ae("toggle",e),al(e,"popover",o);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":al(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=hx.get(n)||n,al(e,n,o))}}function bs(e,t,n,o,i,l){switch(n){case"style":Dc(e,o,l);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(c(61));if(n=o.__html,n!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=n}}break;case"children":typeof o=="string"?wo(e,o):(typeof o=="number"||typeof o=="bigint")&&wo(e,""+o);break;case"onScroll":o!=null&&ae("scroll",e);break;case"onScrollEnd":o!=null&&ae("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Xt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),l=e[rt]||null,l=l!=null?l[n]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof o=="function")){typeof l!="function"&&l!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,i);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):al(e,n,o)}}}function et(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ae("error",e),ae("load",e);var o=!1,i=!1,l;for(l in n)if(n.hasOwnProperty(l)){var s=n[l];if(s!=null)switch(l){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,l,s,n,null)}}i&&Ae(e,t,"srcSet",n.srcSet,n,null),o&&Ae(e,t,"src",n.src,n,null);return;case"input":ae("invalid",e);var d=l=s=i=null,y=null,C=null;for(o in n)if(n.hasOwnProperty(o)){var R=n[o];if(R!=null)switch(o){case"name":i=R;break;case"type":s=R;break;case"checked":y=R;break;case"defaultChecked":C=R;break;case"value":l=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(c(137,t));break;default:Ae(e,t,o,R,n,null)}}Rc(e,l,d,y,C,s,i,!1);return;case"select":ae("invalid",e),o=s=l=null;for(i in n)if(n.hasOwnProperty(i)&&(d=n[i],d!=null))switch(i){case"value":l=d;break;case"defaultValue":s=d;break;case"multiple":o=d;default:Ae(e,t,i,d,n,null)}t=l,n=s,e.multiple=!!o,t!=null?Fo(e,!!o,t,!1):n!=null&&Fo(e,!!o,n,!0);return;case"textarea":ae("invalid",e),l=i=o=null;for(s in n)if(n.hasOwnProperty(s)&&(d=n[s],d!=null))switch(s){case"value":o=d;break;case"defaultValue":i=d;break;case"children":l=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(c(91));break;default:Ae(e,t,s,d,n,null)}Mc(e,o,i,l);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(o=n[y],o!=null))switch(y){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ae(e,t,y,o,n,null)}return;case"dialog":ae("beforetoggle",e),ae("toggle",e),ae("cancel",e),ae("close",e);break;case"iframe":case"object":ae("load",e);break;case"video":case"audio":for(o=0;o<_i.length;o++)ae(_i[o],e);break;case"image":ae("error",e),ae("load",e);break;case"details":ae("toggle",e);break;case"embed":case"source":case"link":ae("error",e),ae("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in n)if(n.hasOwnProperty(C)&&(o=n[C],o!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,t));default:Ae(e,t,C,o,n,null)}return;default:if(Na(t)){for(R in n)n.hasOwnProperty(R)&&(o=n[R],o!==void 0&&bs(e,t,R,o,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(o=n[d],o!=null&&Ae(e,t,d,o,n,null))}function U0(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,d=null,y=null,C=null,R=null;for(A in n){var M=n[A];if(n.hasOwnProperty(A)&&M!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":y=M;default:o.hasOwnProperty(A)||Ae(e,t,A,null,o,M)}}for(var S in o){var A=o[S];if(M=n[S],o.hasOwnProperty(S)&&(A!=null||M!=null))switch(S){case"type":l=A;break;case"name":i=A;break;case"checked":C=A;break;case"defaultChecked":R=A;break;case"value":s=A;break;case"defaultValue":d=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,t));break;default:A!==M&&Ae(e,t,S,A,o,M)}}Oa(e,s,d,y,C,R,l,i);return;case"select":A=s=d=S=null;for(l in n)if(y=n[l],n.hasOwnProperty(l)&&y!=null)switch(l){case"value":break;case"multiple":A=y;default:o.hasOwnProperty(l)||Ae(e,t,l,null,o,y)}for(i in o)if(l=o[i],y=n[i],o.hasOwnProperty(i)&&(l!=null||y!=null))switch(i){case"value":S=l;break;case"defaultValue":d=l;break;case"multiple":s=l;default:l!==y&&Ae(e,t,i,l,o,y)}t=d,n=s,o=A,S!=null?Fo(e,!!n,S,!1):!!o!=!!n&&(t!=null?Fo(e,!!n,t,!0):Fo(e,!!n,n?[]:"",!1));return;case"textarea":A=S=null;for(d in n)if(i=n[d],n.hasOwnProperty(d)&&i!=null&&!o.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:Ae(e,t,d,null,o,i)}for(s in o)if(i=o[s],l=n[s],o.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":S=i;break;case"defaultValue":A=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==l&&Ae(e,t,s,i,o,l)}Bc(e,S,A);return;case"option":for(var P in n)if(S=n[P],n.hasOwnProperty(P)&&S!=null&&!o.hasOwnProperty(P))switch(P){case"selected":e.selected=!1;break;default:Ae(e,t,P,null,o,S)}for(y in o)if(S=o[y],A=n[y],o.hasOwnProperty(y)&&S!==A&&(S!=null||A!=null))switch(y){case"selected":e.selected=S&&typeof S!="function"&&typeof S!="symbol";break;default:Ae(e,t,y,S,o,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in n)S=n[X],n.hasOwnProperty(X)&&S!=null&&!o.hasOwnProperty(X)&&Ae(e,t,X,null,o,S);for(C in o)if(S=o[C],A=n[C],o.hasOwnProperty(C)&&S!==A&&(S!=null||A!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(c(137,t));break;default:Ae(e,t,C,S,o,A)}return;default:if(Na(t)){for(var Ee in n)S=n[Ee],n.hasOwnProperty(Ee)&&S!==void 0&&!o.hasOwnProperty(Ee)&&bs(e,t,Ee,void 0,o,S);for(R in o)S=o[R],A=n[R],!o.hasOwnProperty(R)||S===A||S===void 0&&A===void 0||bs(e,t,R,S,o,A);return}}for(var v in n)S=n[v],n.hasOwnProperty(v)&&S!=null&&!o.hasOwnProperty(v)&&Ae(e,t,v,null,o,S);for(M in o)S=o[M],A=n[M],!o.hasOwnProperty(M)||S===A||S==null&&A==null||Ae(e,t,M,S,o,A)}function jd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function H0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var i=n[o],l=i.transferSize,s=i.initiatorType,d=i.duration;if(l&&d&&jd(s)){for(s=0,d=i.responseEnd,o+=1;o<n.length;o++){var y=n[o],C=y.startTime;if(C>d)break;var R=y.transferSize,M=y.initiatorType;R&&jd(M)&&(y=y.responseEnd,s+=R*(y<d?1:(d-C)/(y-C)))}if(--o,t+=8*(l+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cs=null,ks=null;function ia(e){return e.nodeType===9?e:e.ownerDocument}function Nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ld(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ss=null;function I0(){var e=window.event;return e&&e.type==="popstate"?e===Ss?!1:(Ss=e,!0):(Ss=null,!1)}var _d=typeof setTimeout=="function"?setTimeout:void 0,P0=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(e){return Ud.resolve(null).then(e).catch(V0)}:_d;function V0(e){setTimeout(function(){throw e})}function jn(e){return e==="head"}function Hd(e,t){var n=t,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(o===0){e.removeChild(i),Jo(t);return}o--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")o++;else if(n==="html")Hi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Hi(n);for(var l=n.firstChild;l;){var s=l.nextSibling,d=l.nodeName;l[ii]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&l.rel.toLowerCase()==="stylesheet"||n.removeChild(l),l=s}}else n==="body"&&Hi(e.ownerDocument.body);n=i}while(n);Jo(t)}function Id(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=o}while(n)}function As(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":As(n),Ta(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function K0(e,t,n,o){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ii])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Tt(e.nextSibling),e===null)break}return null}function G0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Tt(e.nextSibling),e===null))return null;return e}function Pd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tt(e.nextSibling),e===null))return null;return e}function Es(e){return e.data==="$?"||e.data==="$~"}function Rs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Y0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Bs=null;function qd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Tt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Kd(e,t,n){switch(t=ia(n),e){case"html":if(e=t.documentElement,!e)throw Error(c(452));return e;case"head":if(e=t.head,!e)throw Error(c(453));return e;case"body":if(e=t.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Hi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ta(e)}var Dt=new Map,Gd=new Set;function la(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dn=j.d;j.d={f:X0,r:Z0,D:Q0,C:J0,L:W0,m:$0,X:tu,S:eu,M:nu};function X0(){var e=dn.f(),t=Ql();return e||t}function Z0(e){var t=yo(e);t!==null&&t.tag===5&&t.type==="form"?c1(t):dn.r(e)}var Xo=typeof document>"u"?null:document;function Yd(e,t,n){var o=Xo;if(o&&typeof t=="string"&&t){var i=zt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Gd.has(i)||(Gd.add(i),e={rel:e,crossOrigin:n,href:t},o.querySelector(i)===null&&(t=o.createElement("link"),et(t,"link",e),Ye(t),o.head.appendChild(t)))}}function Q0(e){dn.D(e),Yd("dns-prefetch",e,null)}function J0(e,t){dn.C(e,t),Yd("preconnect",e,t)}function W0(e,t,n){dn.L(e,t,n);var o=Xo;if(o&&e&&t){var i='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+zt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+zt(n.imageSizes)+'"]')):i+='[href="'+zt(e)+'"]';var l=i;switch(t){case"style":l=Zo(e);break;case"script":l=Qo(e)}Dt.has(l)||(e=O({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Dt.set(l,e),o.querySelector(i)!==null||t==="style"&&o.querySelector(Ii(l))||t==="script"&&o.querySelector(Pi(l))||(t=o.createElement("link"),et(t,"link",e),Ye(t),o.head.appendChild(t)))}}function $0(e,t){dn.m(e,t);var n=Xo;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+zt(o)+'"][href="'+zt(e)+'"]',l=i;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Qo(e)}if(!Dt.has(l)&&(e=O({rel:"modulepreload",href:e},t),Dt.set(l,e),n.querySelector(i)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pi(l)))return}o=n.createElement("link"),et(o,"link",e),Ye(o),n.head.appendChild(o)}}}function eu(e,t,n){dn.S(e,t,n);var o=Xo;if(o&&e){var i=po(o).hoistableStyles,l=Zo(e);t=t||"default";var s=i.get(l);if(!s){var d={loading:0,preload:null};if(s=o.querySelector(Ii(l)))d.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Dt.get(l))&&Ms(e,n);var y=s=o.createElement("link");Ye(y),et(y,"link",e),y._p=new Promise(function(C,R){y.onload=C,y.onerror=R}),y.addEventListener("load",function(){d.loading|=1}),y.addEventListener("error",function(){d.loading|=2}),d.loading|=4,aa(s,t,o)}s={type:"stylesheet",instance:s,count:1,state:d},i.set(l,s)}}}function tu(e,t){dn.X(e,t);var n=Xo;if(n&&e){var o=po(n).hoistableScripts,i=Qo(e),l=o.get(i);l||(l=n.querySelector(Pi(i)),l||(e=O({src:e,async:!0},t),(t=Dt.get(i))&&Ts(e,t),l=n.createElement("script"),Ye(l),et(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},o.set(i,l))}}function nu(e,t){dn.M(e,t);var n=Xo;if(n&&e){var o=po(n).hoistableScripts,i=Qo(e),l=o.get(i);l||(l=n.querySelector(Pi(i)),l||(e=O({src:e,async:!0,type:"module"},t),(t=Dt.get(i))&&Ts(e,t),l=n.createElement("script"),Ye(l),et(l,"link",e),n.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},o.set(i,l))}}function Xd(e,t,n,o){var i=(i=te.current)?la(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Zo(n.href),n=po(i).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Zo(n.href);var l=po(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(Ii(e)))&&!l._p&&(s.instance=l,s.state.loading=5),Dt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Dt.set(e,n),l||ou(i,e,n,s.state))),t&&o===null)throw Error(c(528,""));return s}if(t&&o!==null)throw Error(c(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Qo(n),n=po(i).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Zo(e){return'href="'+zt(e)+'"'}function Ii(e){return'link[rel="stylesheet"]['+e+"]"}function Zd(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function ou(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),et(t,"link",n),Ye(t),e.head.appendChild(t))}function Qo(e){return'[src="'+zt(e)+'"]'}function Pi(e){return"script[async]"+e}function Qd(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+zt(n.href)+'"]');if(o)return t.instance=o,Ye(o),o;var i=O({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Ye(o),et(o,"style",i),aa(o,n.precedence,e),t.instance=o;case"stylesheet":i=Zo(n.href);var l=e.querySelector(Ii(i));if(l)return t.state.loading|=4,t.instance=l,Ye(l),l;o=Zd(n),(i=Dt.get(i))&&Ms(o,i),l=(e.ownerDocument||e).createElement("link"),Ye(l);var s=l;return s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),et(l,"link",o),t.state.loading|=4,aa(l,n.precedence,e),t.instance=l;case"script":return l=Qo(n.src),(i=e.querySelector(Pi(l)))?(t.instance=i,Ye(i),i):(o=n,(i=Dt.get(l))&&(o=O({},n),Ts(o,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ye(i),et(i,"link",o),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(c(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,aa(o,n.precedence,e));return t.instance}function aa(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=o.length?o[o.length-1]:null,l=i,s=0;s<o.length;s++){var d=o[s];if(d.dataset.precedence===t)l=d;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ms(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ts(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ra=null;function Jd(e,t,n){if(ra===null){var o=new Map,i=ra=new Map;i.set(n,o)}else i=ra,o=i.get(n),o||(o=new Map,i.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var l=n[i];if(!(l[ii]||l[Qe]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var d=o.get(s);d?d.push(l):o.set(s,[l])}}return o}function Wd(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function iu(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function $d(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lu(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Zo(o.href),l=t.querySelector(Ii(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=sa.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=l,Ye(l);return}l=t.ownerDocument||t,o=Zd(o),(i=Dt.get(i))&&Ms(o,i),l=l.createElement("link"),Ye(l);var s=l;s._p=new Promise(function(d,y){s.onload=d,s.onerror=y}),et(l,"link",o),n.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=sa.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ds=0;function au(e,t){return e.stylesheets&&e.count===0&&fa(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&fa(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Ds===0&&(Ds=62500*H0());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fa(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Ds?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(i)}}:null}function sa(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fa(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ca=null;function fa(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ca=new Map,t.forEach(ru,e),ca=null,sa.call(e))}function ru(e,t){if(!(t.state.loading&4)){var n=ca.get(e);if(n)var o=n.get(null);else{n=new Map,ca.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),o=s)}o&&n.set(null,o)}i=t.instance,s=i.getAttribute("data-precedence"),l=n.get(s)||o,l===o&&n.set(null,i),n.set(s,i),this.count++,o=sa.bind(this),i.addEventListener("load",o),i.addEventListener("error",o),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var qi={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function su(e,t,n,o,i,l,s,d,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ea(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ea(0),this.hiddenUpdates=Ea(null),this.identifierPrefix=o,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function eh(e,t,n,o,i,l,s,d,y,C,R,M){return e=new su(e,t,n,s,y,C,R,M,d),t=1,l===!0&&(t|=24),l=pt(3,null,null,t),e.current=l,l.stateNode=e,t=hr(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:o,isDehydrated:n,cache:t},yr(l),e}function th(e){return e?(e=Ao,e):Ao}function nh(e,t,n,o,i,l){i=th(i),o.context===null?o.context=i:o.pendingContext=i,o=kn(t),o.payload={element:n},l=l===void 0?null:l,l!==null&&(o.callback=l),n=zn(e,o,t),n!==null&&(xt(n,e,t),vi(n,e,t))}function oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){oh(e,t),(e=e.alternate)&&oh(e,t)}function ih(e){if(e.tag===13||e.tag===31){var t=Zn(e,67108864);t!==null&&xt(t,e,67108864),Os(e,67108864)}}function lh(e){if(e.tag===13||e.tag===31){var t=bt();t=Ra(t);var n=Zn(e,t);n!==null&&xt(n,e,t),Os(e,t)}}var da=!0;function cu(e,t,n,o){var i=E.T;E.T=null;var l=j.p;try{j.p=2,js(e,t,n,o)}finally{j.p=l,E.T=i}}function fu(e,t,n,o){var i=E.T;E.T=null;var l=j.p;try{j.p=8,js(e,t,n,o)}finally{j.p=l,E.T=i}}function js(e,t,n,o){if(da){var i=Ns(o);if(i===null)vs(e,t,o,ha,n),rh(e,o);else if(hu(i,e,t,n,o))o.stopPropagation();else if(rh(e,o),t&4&&-1<du.indexOf(e)){for(;i!==null;){var l=yo(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Vn(l.pendingLanes);if(s!==0){var d=l;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var y=1<<31-mt(s);d.entanglements[1]|=y,s&=~y}Vt(l),(pe&6)===0&&(Xl=Ze()+500,Li(0))}}break;case 31:case 13:d=Zn(l,2),d!==null&&xt(d,l,2),Ql(),Os(l,2)}if(l=Ns(o),l===null&&vs(e,t,o,ha,n),l===i)break;i=l}i!==null&&o.stopPropagation()}else vs(e,t,o,null,n)}}function Ns(e){return e=_a(e),Ls(e)}var ha=null;function Ls(e){if(ha=null,e=mo(e),e!==null){var t=m(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=k(t),e!==null)return e;e=null}else if(n===31){if(e=F(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ha=e,null}function ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(el()){case xc:return 2;case uc:return 8;case tl:case Jh:return 32;case mc:return 268435456;default:return 32}default:return 32}}var _s=!1,Nn=null,Ln=null,_n=null,Vi=new Map,Ki=new Map,Un=[],du="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rh(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(t.pointerId)}}function Gi(e,t,n,o,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[i]},t!==null&&(t=yo(t),t!==null&&ih(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hu(e,t,n,o,i){switch(t){case"focusin":return Nn=Gi(Nn,e,t,n,o,i),!0;case"dragenter":return Ln=Gi(Ln,e,t,n,o,i),!0;case"mouseover":return _n=Gi(_n,e,t,n,o,i),!0;case"pointerover":var l=i.pointerId;return Vi.set(l,Gi(Vi.get(l)||null,e,t,n,o,i)),!0;case"gotpointercapture":return l=i.pointerId,Ki.set(l,Gi(Ki.get(l)||null,e,t,n,o,i)),!0}return!1}function sh(e){var t=mo(e.target);if(t!==null){var n=m(t);if(n!==null){if(t=n.tag,t===13){if(t=k(n),t!==null){e.blockedOn=t,vc(e.priority,function(){lh(n)});return}}else if(t===31){if(t=F(n),t!==null){e.blockedOn=t,vc(e.priority,function(){lh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ns(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);La=o,n.target.dispatchEvent(o),La=null}else return t=yo(n),t!==null&&ih(t),e.blockedOn=n,!1;t.shift()}return!0}function ch(e,t,n){xa(e)&&n.delete(t)}function xu(){_s=!1,Nn!==null&&xa(Nn)&&(Nn=null),Ln!==null&&xa(Ln)&&(Ln=null),_n!==null&&xa(_n)&&(_n=null),Vi.forEach(ch),Ki.forEach(ch)}function ua(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,xu)))}var ma=null;function fh(e){ma!==e&&(ma=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ma===e&&(ma=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],i=e[t+2];if(typeof o!="function"){if(Ls(o||n)===null)continue;break}var l=yo(n);l!==null&&(e.splice(t,3),t-=3,Nr(l,{pending:!0,data:i,method:n.method,action:o},o,i))}}))}function Jo(e){function t(y){return ua(y,e)}Nn!==null&&ua(Nn,e),Ln!==null&&ua(Ln,e),_n!==null&&ua(_n,e),Vi.forEach(t),Ki.forEach(t);for(var n=0;n<Un.length;n++){var o=Un[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)sh(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var i=n[o],l=n[o+1],s=i[rt]||null;if(typeof l=="function")s||fh(n);else if(s){var d=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[rt]||null)d=s.formAction;else if(Ls(i)!==null)continue}else d=s.action;typeof d=="function"?n[o+1]=d:(n.splice(o,3),o-=3),fh(n)}}}function dh(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Us(e){this._internalRoot=e}ya.prototype.render=Us.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(c(409));var n=t.current,o=bt();nh(n,o,e,t,null,null)},ya.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nh(e.current,2,null,e,null,null),Ql(),t[uo]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var t=wc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Un.length&&t!==0&&t<Un[n].priority;n++);Un.splice(n,0,e),n===0&&sh(e)}};var hh=r.version;if(hh!=="19.2.7")throw Error(c(527,hh,"19.2.7"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=u(t),e=e!==null?z(e):null,e=e===null?null:e.stateNode,e};var uu={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{ti=pa.inject(uu),ut=pa}catch{}}return Xi.createRoot=function(e,t){if(!x(e))throw Error(c(299));var n=!1,o="",i=F1,l=w1,s=v1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=eh(e,1,!1,null,null,n,o,null,i,l,s,dh),e[uo]=t.current,ws(e),new Us(t)},Xi.hydrateRoot=function(e,t,n){if(!x(e))throw Error(c(299));var o=!1,i="",l=F1,s=w1,d=v1,y=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=eh(e,1,!0,t,n??null,o,i,y,l,s,d,dh),t.context=th(null),n=t.current,o=bt(),o=Ra(o),i=kn(o),i.callback=null,zn(n,i,o),n=o,t.current.lanes=n,oi(t,n),Vt(t),e[uo]=t.current,ws(e),new ya(t)},Xi.version="19.2.7",Xi}var bh;function Su(){if(bh)return Ps.exports;bh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Ps.exports=zu(),Ps.exports}var Au=Su();const Dh="/api";async function $o(a){try{const r=await fetch(`${Dh}/${a.replace(/^\/+/,"")}`,{headers:{accept:"application/json","x-caller":"canvas"}});let f=null;try{f=await r.json()}catch{f=null}return{status:r.status,ok:r.ok,data:f}}catch{return{status:0,ok:!1,data:null}}}const Eu=()=>$o("training/tasks"),Ru=()=>$o("training/meta"),Bu=()=>$o("project"),Mu=()=>$o("training/progress"),Tu=()=>$o("training/progress/all");async function Du(a,r){try{const f=await fetch(`${Dh}/training/progress/step`,{method:"POST",headers:{accept:"application/json","content-type":"application/json","x-caller":"canvas"},body:JSON.stringify({taskId:a,step:r})});let c=null;try{c=await f.json()}catch{c=null}return{status:f.status,ok:f.ok,data:c}}catch{return{status:0,ok:!1,data:null}}}const Ou=()=>$o("training/telemetry/all");async function ju(a,r,f){if(!r.startsWith("/api/")||r.includes("//")||/^[a-z]+:/i.test(r))return{status:0,ok:!1,body:"Refused: endpoint must be a relative /api path"};const c=/^(POST|PUT|PATCH)$/i.test(a)&&f!=null&&f.trim()!=="";try{const x={accept:"application/json","x-caller":"canvas"};c&&(x["content-type"]="application/json");const m=await fetch(r,{method:a,headers:x,...c?{body:f}:{}}),k=await m.text();let F=k;try{F=JSON.parse(k)}catch{}return{status:m.status,ok:m.ok,body:F}}catch(x){return{status:0,ok:!1,body:String(x)}}}function Nu(a,r){return a.replace(/\{([^}]+)\}/g,(f,c)=>encodeURIComponent(r[c]??""))}function Lu(a){return[...a.matchAll(/\{([^}]+)\}/g)].map(r=>r[1])}function _u(a){const r=a.filter(f=>f.key.trim()!=="").map(f=>`${encodeURIComponent(f.key.trim())}=${encodeURIComponent(f.value)}`);return r.length?`?${r.join("&")}`:""}const Zs={track:"bff",backendName:"BFF",backendLocation:":8081",tryItTarget:"your BFF",implementHint:"Implement the one infrastructure adapter method for this task",t1Framing:"Implement exactly one commercetools SDK call in the repository, then validate it and explain it back. AI accelerates the plumbing; you verify it.",startCommands:["cd bff-java && mvn spring-boot:run -pl app","cd bff-ts && npm run start"]};let Qs=Zs;function Ct(){return Qs}function Uu(a){return Qs=a&&a.track?{...Zs,...a}:Zs,Qs}function Wo(a,r){const[f,c]=de.useState(),x=de.useRef(a);x.current=a;const m=de.useCallback(async()=>{const k=await x.current();c(k)},[]);return de.useEffect(()=>{let k=!0;const F=async()=>{const u=await x.current();k&&c(u)};F();const w=window.setInterval(F,r);return()=>{k=!1,window.clearInterval(w)}},[r]),{data:f,refresh:m}}const Hu={"Session 1":{codename:"Ignition",subtitle:"Platform, SDK, Project & Stores"},"Session 2":{codename:"The Catalogue",subtitle:"Product & Category Reads"},"Session 3":{codename:"Find It",subtitle:"Store-Scoped Discovery"},"Session 4":{codename:"Fill the Basket",subtitle:"Cart, Line Items & Discounts"},"Session 5":{codename:"Know Your Customer",subtitle:"Identity, Accounts & Cart Merge"},"Session 6":{codename:"Close the Deal",subtitle:"Checkout, Orders & Payments"},"Session 7":{codename:"Beyond the BFF",subtitle:"Extension & Integration Mechanisms"},"Session 8":{codename:"Package It",subtitle:"Connect: Author the Connector"},"Session 9":{codename:"Ship It",subtitle:"Connect: Deploy, Operate & Capstone"}};function Oh(a){var r;return((r=Ct().sessionTitles)==null?void 0:r[a])??Hu[a]??{codename:"",subtitle:""}}function tc(a){return a==="T1"?"bg-[var(--color-violet)] text-white":a==="T2"?"bg-[var(--color-yellow)] text-[#191741]":"bg-[var(--color-bg-card)] text-[var(--color-text-muted)]"}function jh(a){switch(a){case"GET":return"var(--color-teal)";case"POST":return"var(--color-violet-light)";case"PUT":case"PATCH":return"var(--color-yellow)";case"DELETE":return"var(--color-red)";default:return"var(--color-violet)"}}function In(a,r){return r===0?0:Math.round(a/r*100)}function Ch(a){return`rgba(11, 191, 191, ${(a/100*.7).toFixed(3)})`}function Iu(a){return`rgba(255, 200, 6, ${(a/100*.8).toFixed(3)})`}function Pu(a){return a===0?{label:"no response",cls:"bg-[var(--color-bg-card)] text-[var(--color-text-muted)]"}:a>=200&&a<300?{label:`${a} OK`,cls:"bg-[var(--color-teal)]/20 text-[var(--color-teal-light)]"}:a===501?{label:"501 pending",cls:"bg-[var(--color-yellow)]/20 text-[var(--color-yellow)]"}:{label:`${a}`,cls:"bg-[var(--color-red)]/20 text-[var(--color-red)]"}}function za(a){return a.flatMap(r=>r.sessions.flatMap(f=>f.tasks))}function wa(a){const r=/(\d+)/.exec(a??"");return r?Number(r[1]):Number.MAX_SAFE_INTEGER}function va(a){const r=/(\d+)/.exec(a.session??"");return r?`${r[1]}.${a.taskNumber}`:String(a.taskNumber)}function qu(a){const r=[];for(const f of a)for(const c of f.sessions)r.includes(c.session)||r.push(c.session);return r.sort((f,c)=>wa(f)-wa(c))}function Vu(a){const r=new Map;for(const f of za(a))r.has(f.session)||r.set(f.session,[]),r.get(f.session).push(f);return[...r.entries()].sort(([f],[c])=>wa(f)-wa(c)).map(([f,c])=>({session:f,tasks:[...c].sort((x,m)=>x.taskNumber-m.taskNumber)}))}function Gt({size:a=16,children:r,...f}){return h.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...f,children:r})}const Ku=a=>h.jsxs(Gt,{...a,children:[h.jsx("circle",{cx:"11",cy:"11",r:"8"}),h.jsx("path",{d:"m21 21-4.3-4.3"})]}),Gu=a=>h.jsxs(Gt,{...a,children:[h.jsx("path",{d:"M15 3h6v6"}),h.jsx("path",{d:"M10 14 21 3"}),h.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})]}),Yu=a=>h.jsxs(Gt,{...a,children:[h.jsx("rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}),h.jsx("rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}),h.jsx("rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}),h.jsx("rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"})]}),Nh=a=>h.jsxs(Gt,{...a,children:[h.jsx("path",{d:"M18 6 6 18"}),h.jsx("path",{d:"m6 6 12 12"})]}),nc=a=>h.jsx(Gt,{...a,children:h.jsx("path",{d:"M20 6 9 17l-5-5"})}),Xu=a=>h.jsxs(Gt,{...a,children:[h.jsx("path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}),h.jsx("path",{d:"M9 18h6"}),h.jsx("path",{d:"M10 22h4"})]}),Zu=a=>h.jsxs(Gt,{...a,children:[h.jsx("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),h.jsx("path",{d:"M12 9v4"}),h.jsx("path",{d:"M12 17h.01"})]}),kh=a=>h.jsxs(Gt,{...a,children:[h.jsx("circle",{cx:"12",cy:"12",r:"10"}),h.jsx("path",{d:"M12 16v-4"}),h.jsx("path",{d:"M12 8h.01"})]}),Qu=a=>h.jsxs(Gt,{...a,children:[h.jsx("path",{d:"m3 17 2 2 4-4"}),h.jsx("path",{d:"m3 7 2 2 4-4"}),h.jsx("path",{d:"M13 6h8"}),h.jsx("path",{d:"M13 12h8"}),h.jsx("path",{d:"M13 18h8"})]}),Ju=a=>h.jsxs(Gt,{...a,children:[h.jsx("path",{d:"m19 5 3-3"}),h.jsx("path",{d:"m2 22 3-3"}),h.jsx("path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}),h.jsx("path",{d:"M7.5 13.5 10 11"}),h.jsx("path",{d:"M10.5 16.5 13 14"}),h.jsx("path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"})]});function Wu({view:a,onView:r,connected:f,modules:c,completed:x,participantName:m,projectName:k,storefrontUrl:F,focusCapability:w,inspectorOpen:u,onToggleInspector:z}){const O=za(c),D=O.filter(G=>x.has(G.id)).length,Y=In(D,O.length),_=w?`${F}/?focus=${encodeURIComponent(w)}`:F;return h.jsxs("header",{className:"flex h-14 flex-shrink-0 items-center gap-6 border-b border-[var(--color-brd)] bg-[var(--color-bg-sidebar)] px-5",children:[h.jsxs("div",{className:"flex min-w-[200px] items-center gap-3",children:[h.jsxs("span",{className:"font-display text-base font-bold",style:{fontFamily:"var(--font-display)"},children:[h.jsx("span",{className:"text-[var(--color-violet-light)]",children:"commercetools"}),h.jsx("span",{className:"text-[var(--color-text-muted)]",children:" Training"})]}),h.jsx("span",{className:"border-l border-[var(--color-brd)] pl-3 text-xs text-[var(--color-text-muted)]",title:k?`Connected commercetools project: ${k}`:void 0,children:k??"Lifestyle & Home Corp"})]}),h.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[h.jsx("div",{className:"h-1.5 w-full max-w-[360px] overflow-hidden rounded-full bg-[var(--color-bg-card)]",children:h.jsx("div",{className:"h-full rounded-full transition-all duration-500",style:{width:`${Y}%`,background:"linear-gradient(90deg, var(--color-violet), var(--color-teal))"}})}),h.jsxs("span",{className:"whitespace-nowrap text-xs text-[var(--color-text-secondary)]",children:[D,"/",O.length," tasks · ",Y,"%"]})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[a==="participant"&&z?h.jsxs("button",{onClick:z,className:`rounded-md border px-3 py-1.5 text-sm ${u?"border-[var(--color-violet)] bg-[var(--color-bg-active)]":"border-[var(--color-brd-light)] bg-[var(--color-bg-card)] hover:border-[var(--color-violet)]"}`,title:"Toggle the HTTP Inspector",children:[h.jsx(Ku,{size:14,className:"mr-1.5 inline align-[-2px]"}),"Inspector"]}):null,h.jsxs("a",{href:_,target:"_blank",rel:"noreferrer",className:"rounded-md border border-[var(--color-brd-light)] bg-[var(--color-bg-card)] px-3 py-1.5 text-sm hover:border-[var(--color-violet)]",children:[h.jsx(Gu,{size:14,className:"mr-1.5 inline align-[-2px]"}),"View in Storefront"]}),h.jsxs("div",{className:"flex rounded-lg border border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-0.5 text-sm",children:[h.jsx(zh,{active:a==="participant",onClick:()=>r("participant"),children:"Participant"}),h.jsxs(zh,{active:a==="trainer",onClick:()=>r("trainer"),children:[h.jsx(Yu,{size:14,className:"mr-1.5 inline align-[-2px]"}),"Trainer"]})]}),h.jsxs("span",{className:"flex items-center gap-2 text-xs text-[var(--color-text-muted)]",children:[h.jsx("span",{className:`h-2 w-2 rounded-full ${f?"bg-[var(--color-teal)]":"bg-[var(--color-red)]"}`}),Ct().backendName," ",f?"online":"offline"," · ",Ct().backendLocation]}),a==="participant"&&m?h.jsx("span",{className:"hidden text-xs text-[var(--color-text-secondary)] lg:inline",children:m}):null]})]})}function zh({active:a,onClick:r,children:f}){return h.jsx("button",{onClick:r,className:`rounded-md px-3 py-1 font-medium ${a?"bg-[var(--color-violet)] text-white":"text-[var(--color-text-secondary)]"}`,children:f})}function $u({modules:a,completed:r,steps:f={},selectedId:c,onSelect:x,onSelectIntro:m,expandedSession:k,onToggleSession:F}){const w=Vu(a);return h.jsxs("aside",{className:"flex w-72 flex-shrink-0 flex-col overflow-y-auto border-r border-[var(--color-brd)] bg-[var(--color-bg-sidebar)]",children:[h.jsx("div",{className:"px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Tasks"}),m?h.jsxs("button",{onClick:m,className:`flex w-full items-center justify-between gap-2 border-b border-[var(--color-brd)]/60 px-4 py-2.5 text-left hover:bg-[var(--color-bg-hover)] ${c==="intro"?"bg-[var(--color-bg-active)]":""}`,children:[h.jsxs("span",{className:"min-w-0 flex-1",children:[h.jsxs("span",{className:"block truncate text-sm font-medium",children:["00 ",h.jsx("span",{className:"text-[var(--color-text-muted)]",children:"· "}),"Introduction"]}),h.jsx("span",{className:"block truncate text-[11px] leading-tight text-[var(--color-text-muted)]",children:"The course, the stack, the setup"})]}),h.jsx("span",{className:"shrink-0 rounded-full bg-[var(--color-teal)]/20 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-teal-light)]",children:"slides"})]}):null,w.length===0?h.jsxs("div",{className:"px-4 py-2 text-sm text-[var(--color-text-muted)]",children:["Connecting to ",Ct().backendName,"…"]}):null,w.map(({session:u,tasks:z})=>{const O=z.filter(oe=>r.has(oe.id)).length,D=k===u,Y=O===z.length,{codename:_,subtitle:G}=Oh(u);return h.jsxs("div",{className:"border-b border-[var(--color-brd)]/60",children:[h.jsxs("button",{onClick:()=>F(D?"":u),title:G?`${u} — ${_} · ${G}`:u,className:`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-left hover:bg-[var(--color-bg-hover)] ${D?"bg-[var(--color-bg-panel)]":""}`,children:[h.jsxs("span",{className:"min-w-0 flex-1",children:[h.jsxs("span",{className:`block truncate text-sm font-medium ${Y?"text-[var(--color-teal-light)]":""}`,children:[u,_?h.jsx("span",{className:"text-[var(--color-text-muted)]",children:" · "}):null,_]}),G?h.jsx("span",{className:"block truncate text-[11px] leading-tight text-[var(--color-text-muted)]",children:G}):null]}),h.jsxs("span",{className:"flex shrink-0 items-center gap-2",children:[h.jsxs("span",{className:"rounded-full bg-[var(--color-bg-card)] px-2 py-0.5 text-[11px] text-[var(--color-text-secondary)]",children:[O,"/",z.length]}),h.jsx("span",{className:`text-[var(--color-text-muted)] transition-transform ${D?"rotate-90":""}`,children:"›"})]})]}),D?z.map(oe=>{var L,V,he,W;const ve=c===oe.id,U=r.has(oe.id);return h.jsxs("button",{onClick:()=>x(oe),className:`flex w-full items-center gap-2.5 px-4 py-2 text-left text-sm ${ve?"bg-[var(--color-bg-active)]":oe.tier==="T1"?"bg-[var(--color-violet)]/12 hover:bg-[var(--color-violet)]/20":oe.tier==="T2"?"bg-[var(--color-yellow)]/12 hover:bg-[var(--color-yellow)]/20":"hover:bg-[var(--color-bg-hover)]"}`,children:[h.jsx("span",{title:U?"Completed":(L=f[oe.id])!=null&&L.taskAt?"Task card opened":(V=f[oe.id])!=null&&V.conceptAt?"Concept slides finished":void 0,className:`h-2 w-2 shrink-0 rounded-full ${U?"bg-[var(--color-teal)]":(he=f[oe.id])!=null&&he.taskAt?"border-2 border-[var(--color-yellow)]":(W=f[oe.id])!=null&&W.conceptAt?"border-2 border-[var(--color-violet)]":"border border-[var(--color-brd-light)]"}`}),h.jsxs("span",{className:"min-w-0 flex-1 truncate",children:[h.jsxs("span",{className:"font-semibold text-[var(--color-text-muted)]",children:[va(oe)," "]}),oe.title]}),h.jsx("span",{className:`shrink-0 rounded px-1 py-0.5 text-[9px] font-semibold ${tc(oe.tier)}`,children:oe.tier}),h.jsx("span",{className:"shrink-0 text-[10px] font-semibold",style:{color:jh(oe.httpMethod)},children:oe.httpMethod})]},oe.id)}):null]},u)})]})}const em=`---
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
`,nm=`---
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
`,om=`---
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
`,im=`---
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
`,lm=`---
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
`,am=`---
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
`,rm=`---
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
`,sm=`---
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
`,cm=`---
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
`,fm=`---
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
`,dm=`---
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
`,hm=`---
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
`,xm=`---
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
`,um=`---
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
`,mm=`---
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
`,ym=`---
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
`,pm=`---
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
`,gm=`---
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
`,Fm=`---
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
`,wm=`---
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
`,vm=`---
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
`,bm=`---
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
`,Cm=`---
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
`,km=`---
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
`,zm=`---
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
`,Sm=`---
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
`,Am=`---
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
`,Em=`---
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
`,Rm=`---
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
`,Bm=`---
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
`,Mm=`---
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
`,Tm=`---
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
`,Dm=`---
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
`,Om=`---
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
`,jm=`---
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
`,Nm=`---
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
`,Lm=`---
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
`,_m=`---
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
`,Um=`---
task: customer.Session 5.8
summary: Pre-built — study it. The verification mail is sent by the ecoliving-customer-connectors Event app (a Subscription on CustomerCreated / CustomerEmailChanged creates the token and sends the link); the BFF owns the click — POST /customers/email/confirm with the token sets isEmailVerified = true. POST /api/customers/email/token only shows the connector's mail from its demo outbox, issuing a token itself as a fallback.
file: customer/…/infrastructure/CtCustomerRepository.java
method: findVerificationMail(String customerId) · confirmEmail(String tokenValue)
prompt: |
  In bff-java, open CtCustomerRepository.findVerificationMail(...) and confirmEmail(...) in the customer module's
  infrastructure layer, and CustomerService.requestEmailVerification() / confirmEmail(...) behind
  POST /api/customers/email/token and POST /api/customers/email/confirm.
  Explain to me, without changing code: why the BFF does not create the verification token itself (who does,
  and on which message), why that sender is a Subscription consumer and not an API Extension, where the
  demo outbox Custom Object ecoliving-mail-outbox comes from and what a real mail provider would replace,
  why the click still lands in the BFF, and what isEmailVerified does and does not gate. Ground anything you
  say about the token endpoints and Subscriptions on the commercetools Knowledge MCP.
  Then run Try It for task 5.8 in Commerce Canvas — fetch the mail for the signed-in customer, confirm with
  its token — and tell me what the response shows and whether the mail came from the connector or the fallback.
---

## Concept · Who sends the mail? Not the BFF

- Sign-up saves the customer; the platform emits **CustomerCreated**.
- A **Subscription** feeds the connector's Event app: it creates the token and sends the link.
- The click lands on the storefront; the BFF **confirms**. An Extension could do neither: no id before the save, no side effects in a 2-second budget.

> **Discuss:** the connector is installed once for the whole project. What else belongs there rather than in every BFF?

> **Docs:** [Subscriptions](https://docs.commercetools.com/api/projects/subscriptions) · [CustomerCreated message](https://docs.commercetools.com/api/message-types#customercreated-message)

> **Show:** register a new shopper → \`/account\` → "Show my verification link": *sent by the customer connector* → open it → verified.

::: visual
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" font-family="Archivo, Roboto, sans-serif">
  <defs><marker id="m58s" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L9,4.5 L0,9 z" fill="#8C8AAE"/></marker></defs>
  <rect x="14" y="30" width="120" height="62" rx="12" fill="#FFFFFF" stroke="#C9C6E0"/>
  <text x="74" y="55" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">sign-up</text>
  <text x="74" y="74" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">POST /customers</text>
  <line x1="134" y1="61" x2="160" y2="61" stroke="#8C8AAE" stroke-width="1.5" marker-end="url(#m58s)"/>
  <rect x="162" y="30" width="130" height="62" rx="12" fill="#FFFFFF" stroke="#C9C6E0"/>
  <text x="227" y="55" text-anchor="middle" fill="#191741" font-size="12" font-weight="700">commercetools</text>
  <text x="227" y="74" text-anchor="middle" fill="#6359FF" font-size="9" font-family="Roboto Mono, monospace">CustomerCreated</text>
  <line x1="292" y1="61" x2="318" y2="61" stroke="#8C8AAE" stroke-width="1.5" marker-end="url(#m58s)"/>
  <rect x="320" y="18" width="226" height="86" rx="12" fill="#6359FF"/>
  <text x="433" y="38" text-anchor="middle" fill="#E6E6FF" font-size="9" letter-spacing="2">SUBSCRIPTION · EVENT APP</text>
  <text x="433" y="58" text-anchor="middle" fill="#FFFFFF" font-size="12" font-weight="700">email-verification-sender</text>
  <text x="433" y="76" text-anchor="middle" fill="#FFFFFF" font-size="9" font-family="Roboto Mono, monospace">POST /customers/email-token</text>
  <text x="433" y="92" text-anchor="middle" fill="#E6E6FF" font-size="9">send the link · demo: outbox Custom Object</text>
  <path d="M433,104 L433,128" stroke="#8C8AAE" stroke-width="1.5" marker-end="url(#m58s)"/>
  <rect x="320" y="130" width="226" height="48" rx="12" fill="#FFFFFF" stroke="#C9C6E0"/>
  <text x="433" y="150" text-anchor="middle" fill="#191741" font-size="11">✉ the mail · the shopper clicks</text>
  <text x="433" y="167" text-anchor="middle" fill="#6F6D8F" font-size="9" font-family="Roboto Mono, monospace">/verify-email?token=…</text>
  <path d="M320,154 L292,154" stroke="#8C8AAE" stroke-width="1.5" marker-end="url(#m58s)"/>
  <rect x="112" y="124" width="180" height="62" rx="12" fill="#0BBFBF"/>
  <text x="202" y="146" text-anchor="middle" fill="#191741" font-size="11" font-weight="700">storefront → BFF</text>
  <text x="202" y="162" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">POST /customers/email/confirm</text>
  <text x="202" y="177" text-anchor="middle" fill="#191741" font-size="9" font-family="Roboto Mono, monospace">isEmailVerified = true</text>
  <rect x="14" y="206" width="532" height="80" rx="12" fill="#FFFFFF" stroke="#C9C6E0"/>
  <text x="28" y="226" fill="#6F6D8F" font-size="9" letter-spacing="2">WHY NOT AN API EXTENSION?</text>
  <text x="28" y="246" fill="#191741" font-size="11">It runs <tspan font-weight="700">before</tspan> the save: there is no customer id to create a token for.</text>
  <text x="28" y="262" fill="#191741" font-size="11">It must answer in 2 seconds: sending mail is a side effect, not a validation.</text>
  <text x="28" y="278" fill="#6F6D8F" font-size="10">The same connector's <tspan font-family="Roboto Mono, monospace">customer-number-generator</tspan> IS one: the number must exist at save time.</text>
</svg>
:::

## Concept · A business flag, not an auth gate

- Token (id + version + \`ttlMinutes\`, created by the connector) → confirm → \`isEmailVerified: true\`.
- commercetools signs in unverified customers happily; **you** decide what verification gates.
- \`changeEmail\` (5.4) flips it back to \`false\`.

> **Discuss:** what should verification gate at LHC — reviews, promo codes, marketing consent, the order confirmation?

> **Docs:** [Customer email verification](https://docs.commercetools.com/api/customers-overview#customer-email-verification)

> **Show:** \`/account\` → Show my verification link → open it → the verified badge; \`changeEmail\` → the badge is gone and a new mail is in the outbox.

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
`,Hm=`---
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
`,Im=`---
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
`,Pm=`---
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
`,qm=`---
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
`,Vm=`---
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
`,Gm=`---
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
`,Ym=`---
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
`,Xm=`---
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
`,Zm=`---
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
`,Qm=`---
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
`,Jm=`---
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
`,Wm=`---
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
`,$m=`---
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
`,e2=`---
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
`,n2=`---
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
`,o2=`---
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
- Re-run the batch: \`imported\`, no duplicate. Session 9 makes this feed the \`ecoliving-price-feed-connector\` Job.

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
  <text x="160" y="266" text-anchor="middle" fill="#0BBFBF" font-size="10" font-family="Roboto Mono, monospace">ecoliving-price-feed-connector · Job app</text>
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
`;function oc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var co=oc();function Lh(a){co=a}var Ji={exec:()=>null};function we(a,r=""){let f=typeof a=="string"?a:a.source;const c={replace:(x,m)=>{let k=typeof m=="string"?m:m.source;return k=k.replace(lt.caret,"$1"),f=f.replace(x,k),c},getRegex:()=>new RegExp(f,r)};return c}var lt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:a=>new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}#`),htmlBeginRegex:a=>new RegExp(`^ {0,${Math.min(3,a-1)}}<(?:[a-z].*>|!--)`,"i")},i2=/^(?:[ \t]*(?:\n|$))+/,l2=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,a2=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Wi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,r2=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ic=/(?:[*+-]|\d{1,9}[.)])/,_h=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Uh=we(_h).replace(/bull/g,ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),s2=we(_h).replace(/bull/g,ic).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),lc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,c2=/^[^\n]+/,ac=/(?!\s*\])(?:\\.|[^\[\]\\])+/,f2=we(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ac).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),d2=we(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ic).getRegex(),Sa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",rc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,h2=we("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",rc).replace("tag",Sa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Hh=we(lc).replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sa).getRegex(),x2=we(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Hh).getRegex(),sc={blockquote:x2,code:l2,def:f2,fences:a2,heading:r2,hr:Wi,html:h2,lheading:Uh,list:d2,newline:i2,paragraph:Hh,table:Ji,text:c2},Sh=we("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sa).getRegex(),u2={...sc,lheading:s2,table:Sh,paragraph:we(lc).replace("hr",Wi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Sh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Sa).getRegex()},m2={...sc,html:we(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",rc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ji,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:we(lc).replace("hr",Wi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Uh).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},y2=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,p2=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ih=/^( {2,}|\\)\n(?!\s*$)/,g2=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Aa=/[\p{P}\p{S}]/u,cc=/[\s\p{P}\p{S}]/u,Ph=/[^\s\p{P}\p{S}]/u,F2=we(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,cc).getRegex(),qh=/(?!~)[\p{P}\p{S}]/u,w2=/(?!~)[\s\p{P}\p{S}]/u,v2=/(?:[^\s\p{P}\p{S}]|~)/u,b2=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,Vh=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,C2=we(Vh,"u").replace(/punct/g,Aa).getRegex(),k2=we(Vh,"u").replace(/punct/g,qh).getRegex(),Kh="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",z2=we(Kh,"gu").replace(/notPunctSpace/g,Ph).replace(/punctSpace/g,cc).replace(/punct/g,Aa).getRegex(),S2=we(Kh,"gu").replace(/notPunctSpace/g,v2).replace(/punctSpace/g,w2).replace(/punct/g,qh).getRegex(),A2=we("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ph).replace(/punctSpace/g,cc).replace(/punct/g,Aa).getRegex(),E2=we(/\\(punct)/,"gu").replace(/punct/g,Aa).getRegex(),R2=we(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),B2=we(rc).replace("(?:-->|$)","-->").getRegex(),M2=we("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",B2).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ba=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,T2=we(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ba).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Gh=we(/^!?\[(label)\]\[(ref)\]/).replace("label",ba).replace("ref",ac).getRegex(),Yh=we(/^!?\[(ref)\](?:\[\])?/).replace("ref",ac).getRegex(),D2=we("reflink|nolink(?!\\()","g").replace("reflink",Gh).replace("nolink",Yh).getRegex(),fc={_backpedal:Ji,anyPunctuation:E2,autolink:R2,blockSkip:b2,br:Ih,code:p2,del:Ji,emStrongLDelim:C2,emStrongRDelimAst:z2,emStrongRDelimUnd:A2,escape:y2,link:T2,nolink:Yh,punctuation:F2,reflink:Gh,reflinkSearch:D2,tag:M2,text:g2,url:Ji},O2={...fc,link:we(/^!?\[(label)\]\((.*?)\)/).replace("label",ba).getRegex(),reflink:we(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ba).getRegex()},Js={...fc,emStrongRDelimAst:S2,emStrongLDelim:k2,url:we(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},j2={...Js,br:we(Ih).replace("{2,}","*").getRegex(),text:we(Js.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ga={normal:sc,gfm:u2,pedantic:m2},Zi={normal:fc,gfm:Js,breaks:j2,pedantic:O2},N2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ah=a=>N2[a];function Kt(a,r){if(r){if(lt.escapeTest.test(a))return a.replace(lt.escapeReplace,Ah)}else if(lt.escapeTestNoEncode.test(a))return a.replace(lt.escapeReplaceNoEncode,Ah);return a}function Eh(a){try{a=encodeURI(a).replace(lt.percentDecode,"%")}catch{return null}return a}function Rh(a,r){var m;const f=a.replace(lt.findPipe,(k,F,w)=>{let u=!1,z=F;for(;--z>=0&&w[z]==="\\";)u=!u;return u?"|":" |"}),c=f.split(lt.splitPipe);let x=0;if(c[0].trim()||c.shift(),c.length>0&&!((m=c.at(-1))!=null&&m.trim())&&c.pop(),r)if(c.length>r)c.splice(r);else for(;c.length<r;)c.push("");for(;x<c.length;x++)c[x]=c[x].trim().replace(lt.slashPipe,"|");return c}function Qi(a,r,f){const c=a.length;if(c===0)return"";let x=0;for(;x<c&&a.charAt(c-x-1)===r;)x++;return a.slice(0,c-x)}function L2(a,r){if(a.indexOf(r[1])===-1)return-1;let f=0;for(let c=0;c<a.length;c++)if(a[c]==="\\")c++;else if(a[c]===r[0])f++;else if(a[c]===r[1]&&(f--,f<0))return c;return f>0?-2:-1}function Bh(a,r,f,c,x){const m=r.href,k=r.title||null,F=a[1].replace(x.other.outputLinkReplace,"$1");c.state.inLink=!0;const w={type:a[0].charAt(0)==="!"?"image":"link",raw:f,href:m,title:k,text:F,tokens:c.inlineTokens(F)};return c.state.inLink=!1,w}function _2(a,r,f){const c=a.match(f.other.indentCodeCompensation);if(c===null)return r;const x=c[1];return r.split(`
`).map(m=>{const k=m.match(f.other.beginningSpace);if(k===null)return m;const[F]=k;return F.length>=x.length?m.slice(x.length):m}).join(`
`)}var Ca=class{constructor(a){Be(this,"options");Be(this,"rules");Be(this,"lexer");this.options=a||co}space(a){const r=this.rules.block.newline.exec(a);if(r&&r[0].length>0)return{type:"space",raw:r[0]}}code(a){const r=this.rules.block.code.exec(a);if(r){const f=r[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:r[0],codeBlockStyle:"indented",text:this.options.pedantic?f:Qi(f,`
`)}}}fences(a){const r=this.rules.block.fences.exec(a);if(r){const f=r[0],c=_2(f,r[3]||"",this.rules);return{type:"code",raw:f,lang:r[2]?r[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):r[2],text:c}}}heading(a){const r=this.rules.block.heading.exec(a);if(r){let f=r[2].trim();if(this.rules.other.endingHash.test(f)){const c=Qi(f,"#");(this.options.pedantic||!c||this.rules.other.endingSpaceChar.test(c))&&(f=c.trim())}return{type:"heading",raw:r[0],depth:r[1].length,text:f,tokens:this.lexer.inline(f)}}}hr(a){const r=this.rules.block.hr.exec(a);if(r)return{type:"hr",raw:Qi(r[0],`
`)}}blockquote(a){const r=this.rules.block.blockquote.exec(a);if(r){let f=Qi(r[0],`
`).split(`
`),c="",x="";const m=[];for(;f.length>0;){let k=!1;const F=[];let w;for(w=0;w<f.length;w++)if(this.rules.other.blockquoteStart.test(f[w]))F.push(f[w]),k=!0;else if(!k)F.push(f[w]);else break;f=f.slice(w);const u=F.join(`
`),z=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");c=c?`${c}
${u}`:u,x=x?`${x}
${z}`:z;const O=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(z,m,!0),this.lexer.state.top=O,f.length===0)break;const D=m.at(-1);if((D==null?void 0:D.type)==="code")break;if((D==null?void 0:D.type)==="blockquote"){const Y=D,_=Y.raw+`
`+f.join(`
`),G=this.blockquote(_);m[m.length-1]=G,c=c.substring(0,c.length-Y.raw.length)+G.raw,x=x.substring(0,x.length-Y.text.length)+G.text;break}else if((D==null?void 0:D.type)==="list"){const Y=D,_=Y.raw+`
`+f.join(`
`),G=this.list(_);m[m.length-1]=G,c=c.substring(0,c.length-D.raw.length)+G.raw,x=x.substring(0,x.length-Y.raw.length)+G.raw,f=_.substring(m.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:c,tokens:m,text:x}}}list(a){let r=this.rules.block.list.exec(a);if(r){let f=r[1].trim();const c=f.length>1,x={type:"list",raw:"",ordered:c,start:c?+f.slice(0,-1):"",loose:!1,items:[]};f=c?`\\d{1,9}\\${f.slice(-1)}`:`\\${f}`,this.options.pedantic&&(f=c?f:"[*+-]");const m=this.rules.other.listItemRegex(f);let k=!1;for(;a;){let w=!1,u="",z="";if(!(r=m.exec(a))||this.rules.block.hr.test(a))break;u=r[0],a=a.substring(u.length);let O=r[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,ve=>" ".repeat(3*ve.length)),D=a.split(`
`,1)[0],Y=!O.trim(),_=0;if(this.options.pedantic?(_=2,z=O.trimStart()):Y?_=r[1].length+1:(_=r[2].search(this.rules.other.nonSpaceChar),_=_>4?1:_,z=O.slice(_),_+=r[1].length),Y&&this.rules.other.blankLine.test(D)&&(u+=D+`
`,a=a.substring(D.length+1),w=!0),!w){const ve=this.rules.other.nextBulletRegex(_),U=this.rules.other.hrRegex(_),L=this.rules.other.fencesBeginRegex(_),V=this.rules.other.headingBeginRegex(_),he=this.rules.other.htmlBeginRegex(_);for(;a;){const W=a.split(`
`,1)[0];let H;if(D=W,this.options.pedantic?(D=D.replace(this.rules.other.listReplaceNesting,"  "),H=D):H=D.replace(this.rules.other.tabCharGlobal,"    "),L.test(D)||V.test(D)||he.test(D)||ve.test(D)||U.test(D))break;if(H.search(this.rules.other.nonSpaceChar)>=_||!D.trim())z+=`
`+H.slice(_);else{if(Y||O.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||L.test(O)||V.test(O)||U.test(O))break;z+=`
`+D}!Y&&!D.trim()&&(Y=!0),u+=W+`
`,a=a.substring(W.length+1),O=H.slice(_)}}x.loose||(k?x.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(k=!0));let G=null,oe;this.options.gfm&&(G=this.rules.other.listIsTask.exec(z),G&&(oe=G[0]!=="[ ] ",z=z.replace(this.rules.other.listReplaceTask,""))),x.items.push({type:"list_item",raw:u,task:!!G,checked:oe,loose:!1,text:z,tokens:[]}),x.raw+=u}const F=x.items.at(-1);if(F)F.raw=F.raw.trimEnd(),F.text=F.text.trimEnd();else return;x.raw=x.raw.trimEnd();for(let w=0;w<x.items.length;w++)if(this.lexer.state.top=!1,x.items[w].tokens=this.lexer.blockTokens(x.items[w].text,[]),!x.loose){const u=x.items[w].tokens.filter(O=>O.type==="space"),z=u.length>0&&u.some(O=>this.rules.other.anyLine.test(O.raw));x.loose=z}if(x.loose)for(let w=0;w<x.items.length;w++)x.items[w].loose=!0;return x}}html(a){const r=this.rules.block.html.exec(a);if(r)return{type:"html",block:!0,raw:r[0],pre:r[1]==="pre"||r[1]==="script"||r[1]==="style",text:r[0]}}def(a){const r=this.rules.block.def.exec(a);if(r){const f=r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),c=r[2]?r[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",x=r[3]?r[3].substring(1,r[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):r[3];return{type:"def",tag:f,raw:r[0],href:c,title:x}}}table(a){var k;const r=this.rules.block.table.exec(a);if(!r||!this.rules.other.tableDelimiter.test(r[2]))return;const f=Rh(r[1]),c=r[2].replace(this.rules.other.tableAlignChars,"").split("|"),x=(k=r[3])!=null&&k.trim()?r[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],m={type:"table",raw:r[0],header:[],align:[],rows:[]};if(f.length===c.length){for(const F of c)this.rules.other.tableAlignRight.test(F)?m.align.push("right"):this.rules.other.tableAlignCenter.test(F)?m.align.push("center"):this.rules.other.tableAlignLeft.test(F)?m.align.push("left"):m.align.push(null);for(let F=0;F<f.length;F++)m.header.push({text:f[F],tokens:this.lexer.inline(f[F]),header:!0,align:m.align[F]});for(const F of x)m.rows.push(Rh(F,m.header.length).map((w,u)=>({text:w,tokens:this.lexer.inline(w),header:!1,align:m.align[u]})));return m}}lheading(a){const r=this.rules.block.lheading.exec(a);if(r)return{type:"heading",raw:r[0],depth:r[2].charAt(0)==="="?1:2,text:r[1],tokens:this.lexer.inline(r[1])}}paragraph(a){const r=this.rules.block.paragraph.exec(a);if(r){const f=r[1].charAt(r[1].length-1)===`
`?r[1].slice(0,-1):r[1];return{type:"paragraph",raw:r[0],text:f,tokens:this.lexer.inline(f)}}}text(a){const r=this.rules.block.text.exec(a);if(r)return{type:"text",raw:r[0],text:r[0],tokens:this.lexer.inline(r[0])}}escape(a){const r=this.rules.inline.escape.exec(a);if(r)return{type:"escape",raw:r[0],text:r[1]}}tag(a){const r=this.rules.inline.tag.exec(a);if(r)return!this.lexer.state.inLink&&this.rules.other.startATag.test(r[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(r[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(r[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(r[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:r[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:r[0]}}link(a){const r=this.rules.inline.link.exec(a);if(r){const f=r[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(f)){if(!this.rules.other.endAngleBracket.test(f))return;const m=Qi(f.slice(0,-1),"\\");if((f.length-m.length)%2===0)return}else{const m=L2(r[2],"()");if(m===-2)return;if(m>-1){const F=(r[0].indexOf("!")===0?5:4)+r[1].length+m;r[2]=r[2].substring(0,m),r[0]=r[0].substring(0,F).trim(),r[3]=""}}let c=r[2],x="";if(this.options.pedantic){const m=this.rules.other.pedanticHrefTitle.exec(c);m&&(c=m[1],x=m[3])}else x=r[3]?r[3].slice(1,-1):"";return c=c.trim(),this.rules.other.startAngleBracket.test(c)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(f)?c=c.slice(1):c=c.slice(1,-1)),Bh(r,{href:c&&c.replace(this.rules.inline.anyPunctuation,"$1"),title:x&&x.replace(this.rules.inline.anyPunctuation,"$1")},r[0],this.lexer,this.rules)}}reflink(a,r){let f;if((f=this.rules.inline.reflink.exec(a))||(f=this.rules.inline.nolink.exec(a))){const c=(f[2]||f[1]).replace(this.rules.other.multipleSpaceGlobal," "),x=r[c.toLowerCase()];if(!x){const m=f[0].charAt(0);return{type:"text",raw:m,text:m}}return Bh(f,x,f[0],this.lexer,this.rules)}}emStrong(a,r,f=""){let c=this.rules.inline.emStrongLDelim.exec(a);if(!c||c[3]&&f.match(this.rules.other.unicodeAlphaNumeric))return;if(!(c[1]||c[2]||"")||!f||this.rules.inline.punctuation.exec(f)){const m=[...c[0]].length-1;let k,F,w=m,u=0;const z=c[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(z.lastIndex=0,r=r.slice(-1*a.length+m);(c=z.exec(r))!=null;){if(k=c[1]||c[2]||c[3]||c[4]||c[5]||c[6],!k)continue;if(F=[...k].length,c[3]||c[4]){w+=F;continue}else if((c[5]||c[6])&&m%3&&!((m+F)%3)){u+=F;continue}if(w-=F,w>0)continue;F=Math.min(F,F+w+u);const O=[...c[0]][0].length,D=a.slice(0,m+c.index+O+F);if(Math.min(m,F)%2){const _=D.slice(1,-1);return{type:"em",raw:D,text:_,tokens:this.lexer.inlineTokens(_)}}const Y=D.slice(2,-2);return{type:"strong",raw:D,text:Y,tokens:this.lexer.inlineTokens(Y)}}}}codespan(a){const r=this.rules.inline.code.exec(a);if(r){let f=r[2].replace(this.rules.other.newLineCharGlobal," ");const c=this.rules.other.nonSpaceChar.test(f),x=this.rules.other.startingSpaceChar.test(f)&&this.rules.other.endingSpaceChar.test(f);return c&&x&&(f=f.substring(1,f.length-1)),{type:"codespan",raw:r[0],text:f}}}br(a){const r=this.rules.inline.br.exec(a);if(r)return{type:"br",raw:r[0]}}del(a){const r=this.rules.inline.del.exec(a);if(r)return{type:"del",raw:r[0],text:r[2],tokens:this.lexer.inlineTokens(r[2])}}autolink(a){const r=this.rules.inline.autolink.exec(a);if(r){let f,c;return r[2]==="@"?(f=r[1],c="mailto:"+f):(f=r[1],c=f),{type:"link",raw:r[0],text:f,href:c,tokens:[{type:"text",raw:f,text:f}]}}}url(a){var f;let r;if(r=this.rules.inline.url.exec(a)){let c,x;if(r[2]==="@")c=r[0],x="mailto:"+c;else{let m;do m=r[0],r[0]=((f=this.rules.inline._backpedal.exec(r[0]))==null?void 0:f[0])??"";while(m!==r[0]);c=r[0],r[1]==="www."?x="http://"+r[0]:x=r[0]}return{type:"link",raw:r[0],text:c,href:x,tokens:[{type:"text",raw:c,text:c}]}}}inlineText(a){const r=this.rules.inline.text.exec(a);if(r){const f=this.lexer.state.inRawBlock;return{type:"text",raw:r[0],text:r[0],escaped:f}}}},hn=class Ws{constructor(r){Be(this,"tokens");Be(this,"options");Be(this,"state");Be(this,"tokenizer");Be(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=r||co,this.options.tokenizer=this.options.tokenizer||new Ca,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const f={other:lt,block:ga.normal,inline:Zi.normal};this.options.pedantic?(f.block=ga.pedantic,f.inline=Zi.pedantic):this.options.gfm&&(f.block=ga.gfm,this.options.breaks?f.inline=Zi.breaks:f.inline=Zi.gfm),this.tokenizer.rules=f}static get rules(){return{block:ga,inline:Zi}}static lex(r,f){return new Ws(f).lex(r)}static lexInline(r,f){return new Ws(f).inlineTokens(r)}lex(r){r=r.replace(lt.carriageReturn,`
`),this.blockTokens(r,this.tokens);for(let f=0;f<this.inlineQueue.length;f++){const c=this.inlineQueue[f];this.inlineTokens(c.src,c.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(r,f=[],c=!1){var x,m,k;for(this.options.pedantic&&(r=r.replace(lt.tabCharGlobal,"    ").replace(lt.spaceLine,""));r;){let F;if((m=(x=this.options.extensions)==null?void 0:x.block)!=null&&m.some(u=>(F=u.call({lexer:this},r,f))?(r=r.substring(F.raw.length),f.push(F),!0):!1))continue;if(F=this.tokenizer.space(r)){r=r.substring(F.raw.length);const u=f.at(-1);F.raw.length===1&&u!==void 0?u.raw+=`
`:f.push(F);continue}if(F=this.tokenizer.code(r)){r=r.substring(F.raw.length);const u=f.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+F.raw,u.text+=`
`+F.text,this.inlineQueue.at(-1).src=u.text):f.push(F);continue}if(F=this.tokenizer.fences(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.heading(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.hr(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.blockquote(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.list(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.html(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.def(r)){r=r.substring(F.raw.length);const u=f.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+F.raw,u.text+=`
`+F.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[F.tag]||(this.tokens.links[F.tag]={href:F.href,title:F.title});continue}if(F=this.tokenizer.table(r)){r=r.substring(F.raw.length),f.push(F);continue}if(F=this.tokenizer.lheading(r)){r=r.substring(F.raw.length),f.push(F);continue}let w=r;if((k=this.options.extensions)!=null&&k.startBlock){let u=1/0;const z=r.slice(1);let O;this.options.extensions.startBlock.forEach(D=>{O=D.call({lexer:this},z),typeof O=="number"&&O>=0&&(u=Math.min(u,O))}),u<1/0&&u>=0&&(w=r.substring(0,u+1))}if(this.state.top&&(F=this.tokenizer.paragraph(w))){const u=f.at(-1);c&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+F.raw,u.text+=`
`+F.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):f.push(F),c=w.length!==r.length,r=r.substring(F.raw.length);continue}if(F=this.tokenizer.text(r)){r=r.substring(F.raw.length);const u=f.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+F.raw,u.text+=`
`+F.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):f.push(F);continue}if(r){const u="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,f}inline(r,f=[]){return this.inlineQueue.push({src:r,tokens:f}),f}inlineTokens(r,f=[]){var F,w,u;let c=r,x=null;if(this.tokens.links){const z=Object.keys(this.tokens.links);if(z.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)z.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.anyPunctuation.exec(c))!=null;)c=c.slice(0,x.index)+"++"+c.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(x=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,x.index)+"["+"a".repeat(x[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let m=!1,k="";for(;r;){m||(k=""),m=!1;let z;if((w=(F=this.options.extensions)==null?void 0:F.inline)!=null&&w.some(D=>(z=D.call({lexer:this},r,f))?(r=r.substring(z.raw.length),f.push(z),!0):!1))continue;if(z=this.tokenizer.escape(r)){r=r.substring(z.raw.length),f.push(z);continue}if(z=this.tokenizer.tag(r)){r=r.substring(z.raw.length),f.push(z);continue}if(z=this.tokenizer.link(r)){r=r.substring(z.raw.length),f.push(z);continue}if(z=this.tokenizer.reflink(r,this.tokens.links)){r=r.substring(z.raw.length);const D=f.at(-1);z.type==="text"&&(D==null?void 0:D.type)==="text"?(D.raw+=z.raw,D.text+=z.text):f.push(z);continue}if(z=this.tokenizer.emStrong(r,c,k)){r=r.substring(z.raw.length),f.push(z);continue}if(z=this.tokenizer.codespan(r)){r=r.substring(z.raw.length),f.push(z);continue}if(z=this.tokenizer.br(r)){r=r.substring(z.raw.length),f.push(z);continue}if(z=this.tokenizer.del(r)){r=r.substring(z.raw.length),f.push(z);continue}if(z=this.tokenizer.autolink(r)){r=r.substring(z.raw.length),f.push(z);continue}if(!this.state.inLink&&(z=this.tokenizer.url(r))){r=r.substring(z.raw.length),f.push(z);continue}let O=r;if((u=this.options.extensions)!=null&&u.startInline){let D=1/0;const Y=r.slice(1);let _;this.options.extensions.startInline.forEach(G=>{_=G.call({lexer:this},Y),typeof _=="number"&&_>=0&&(D=Math.min(D,_))}),D<1/0&&D>=0&&(O=r.substring(0,D+1))}if(z=this.tokenizer.inlineText(O)){r=r.substring(z.raw.length),z.raw.slice(-1)!=="_"&&(k=z.raw.slice(-1)),m=!0;const D=f.at(-1);(D==null?void 0:D.type)==="text"?(D.raw+=z.raw,D.text+=z.text):f.push(z);continue}if(r){const D="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(D);break}else throw new Error(D)}}return f}},ka=class{constructor(a){Be(this,"options");Be(this,"parser");this.options=a||co}space(a){return""}code({text:a,lang:r,escaped:f}){var m;const c=(m=(r||"").match(lt.notSpaceStart))==null?void 0:m[0],x=a.replace(lt.endingNewline,"")+`
`;return c?'<pre><code class="language-'+Kt(c)+'">'+(f?x:Kt(x,!0))+`</code></pre>
`:"<pre><code>"+(f?x:Kt(x,!0))+`</code></pre>
`}blockquote({tokens:a}){return`<blockquote>
${this.parser.parse(a)}</blockquote>
`}html({text:a}){return a}heading({tokens:a,depth:r}){return`<h${r}>${this.parser.parseInline(a)}</h${r}>
`}hr(a){return`<hr>
`}list(a){const r=a.ordered,f=a.start;let c="";for(let k=0;k<a.items.length;k++){const F=a.items[k];c+=this.listitem(F)}const x=r?"ol":"ul",m=r&&f!==1?' start="'+f+'"':"";return"<"+x+m+`>
`+c+"</"+x+`>
`}listitem(a){var f;let r="";if(a.task){const c=this.checkbox({checked:!!a.checked});a.loose?((f=a.tokens[0])==null?void 0:f.type)==="paragraph"?(a.tokens[0].text=c+" "+a.tokens[0].text,a.tokens[0].tokens&&a.tokens[0].tokens.length>0&&a.tokens[0].tokens[0].type==="text"&&(a.tokens[0].tokens[0].text=c+" "+Kt(a.tokens[0].tokens[0].text),a.tokens[0].tokens[0].escaped=!0)):a.tokens.unshift({type:"text",raw:c+" ",text:c+" ",escaped:!0}):r+=c+" "}return r+=this.parser.parse(a.tokens,!!a.loose),`<li>${r}</li>
`}checkbox({checked:a}){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:a}){return`<p>${this.parser.parseInline(a)}</p>
`}table(a){let r="",f="";for(let x=0;x<a.header.length;x++)f+=this.tablecell(a.header[x]);r+=this.tablerow({text:f});let c="";for(let x=0;x<a.rows.length;x++){const m=a.rows[x];f="";for(let k=0;k<m.length;k++)f+=this.tablecell(m[k]);c+=this.tablerow({text:f})}return c&&(c=`<tbody>${c}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+c+`</table>
`}tablerow({text:a}){return`<tr>
${a}</tr>
`}tablecell(a){const r=this.parser.parseInline(a.tokens),f=a.header?"th":"td";return(a.align?`<${f} align="${a.align}">`:`<${f}>`)+r+`</${f}>
`}strong({tokens:a}){return`<strong>${this.parser.parseInline(a)}</strong>`}em({tokens:a}){return`<em>${this.parser.parseInline(a)}</em>`}codespan({text:a}){return`<code>${Kt(a,!0)}</code>`}br(a){return"<br>"}del({tokens:a}){return`<del>${this.parser.parseInline(a)}</del>`}link({href:a,title:r,tokens:f}){const c=this.parser.parseInline(f),x=Eh(a);if(x===null)return c;a=x;let m='<a href="'+a+'"';return r&&(m+=' title="'+Kt(r)+'"'),m+=">"+c+"</a>",m}image({href:a,title:r,text:f,tokens:c}){c&&(f=this.parser.parseInline(c,this.parser.textRenderer));const x=Eh(a);if(x===null)return Kt(f);a=x;let m=`<img src="${a}" alt="${f}"`;return r&&(m+=` title="${Kt(r)}"`),m+=">",m}text(a){return"tokens"in a&&a.tokens?this.parser.parseInline(a.tokens):"escaped"in a&&a.escaped?a.text:Kt(a.text)}},dc=class{strong({text:a}){return a}em({text:a}){return a}codespan({text:a}){return a}del({text:a}){return a}html({text:a}){return a}text({text:a}){return a}link({text:a}){return""+a}image({text:a}){return""+a}br(){return""}},xn=class $s{constructor(r){Be(this,"options");Be(this,"renderer");Be(this,"textRenderer");this.options=r||co,this.options.renderer=this.options.renderer||new ka,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new dc}static parse(r,f){return new $s(f).parse(r)}static parseInline(r,f){return new $s(f).parseInline(r)}parse(r,f=!0){var x,m;let c="";for(let k=0;k<r.length;k++){const F=r[k];if((m=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&m[F.type]){const u=F,z=this.options.extensions.renderers[u.type].call({parser:this},u);if(z!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){c+=z||"";continue}}const w=F;switch(w.type){case"space":{c+=this.renderer.space(w);continue}case"hr":{c+=this.renderer.hr(w);continue}case"heading":{c+=this.renderer.heading(w);continue}case"code":{c+=this.renderer.code(w);continue}case"table":{c+=this.renderer.table(w);continue}case"blockquote":{c+=this.renderer.blockquote(w);continue}case"list":{c+=this.renderer.list(w);continue}case"html":{c+=this.renderer.html(w);continue}case"paragraph":{c+=this.renderer.paragraph(w);continue}case"text":{let u=w,z=this.renderer.text(u);for(;k+1<r.length&&r[k+1].type==="text";)u=r[++k],z+=`
`+this.renderer.text(u);f?c+=this.renderer.paragraph({type:"paragraph",raw:z,text:z,tokens:[{type:"text",raw:z,text:z,escaped:!0}]}):c+=z;continue}default:{const u='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return c}parseInline(r,f=this.renderer){var x,m;let c="";for(let k=0;k<r.length;k++){const F=r[k];if((m=(x=this.options.extensions)==null?void 0:x.renderers)!=null&&m[F.type]){const u=this.options.extensions.renderers[F.type].call({parser:this},F);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(F.type)){c+=u||"";continue}}const w=F;switch(w.type){case"escape":{c+=f.text(w);break}case"html":{c+=f.html(w);break}case"link":{c+=f.link(w);break}case"image":{c+=f.image(w);break}case"strong":{c+=f.strong(w);break}case"em":{c+=f.em(w);break}case"codespan":{c+=f.codespan(w);break}case"br":{c+=f.br(w);break}case"del":{c+=f.del(w);break}case"text":{c+=f.text(w);break}default:{const u='Token with "'+w.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return c}},Xs,Fa=(Xs=class{constructor(a){Be(this,"options");Be(this,"block");this.options=a||co}preprocess(a){return a}postprocess(a){return a}processAllTokens(a){return a}provideLexer(){return this.block?hn.lex:hn.lexInline}provideParser(){return this.block?xn.parse:xn.parseInline}},Be(Xs,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),Xs),U2=class{constructor(...a){Be(this,"defaults",oc());Be(this,"options",this.setOptions);Be(this,"parse",this.parseMarkdown(!0));Be(this,"parseInline",this.parseMarkdown(!1));Be(this,"Parser",xn);Be(this,"Renderer",ka);Be(this,"TextRenderer",dc);Be(this,"Lexer",hn);Be(this,"Tokenizer",Ca);Be(this,"Hooks",Fa);this.use(...a)}walkTokens(a,r){var c,x;let f=[];for(const m of a)switch(f=f.concat(r.call(this,m)),m.type){case"table":{const k=m;for(const F of k.header)f=f.concat(this.walkTokens(F.tokens,r));for(const F of k.rows)for(const w of F)f=f.concat(this.walkTokens(w.tokens,r));break}case"list":{const k=m;f=f.concat(this.walkTokens(k.items,r));break}default:{const k=m;(x=(c=this.defaults.extensions)==null?void 0:c.childTokens)!=null&&x[k.type]?this.defaults.extensions.childTokens[k.type].forEach(F=>{const w=k[F].flat(1/0);f=f.concat(this.walkTokens(w,r))}):k.tokens&&(f=f.concat(this.walkTokens(k.tokens,r)))}}return f}use(...a){const r=this.defaults.extensions||{renderers:{},childTokens:{}};return a.forEach(f=>{const c={...f};if(c.async=this.defaults.async||c.async||!1,f.extensions&&(f.extensions.forEach(x=>{if(!x.name)throw new Error("extension name required");if("renderer"in x){const m=r.renderers[x.name];m?r.renderers[x.name]=function(...k){let F=x.renderer.apply(this,k);return F===!1&&(F=m.apply(this,k)),F}:r.renderers[x.name]=x.renderer}if("tokenizer"in x){if(!x.level||x.level!=="block"&&x.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const m=r[x.level];m?m.unshift(x.tokenizer):r[x.level]=[x.tokenizer],x.start&&(x.level==="block"?r.startBlock?r.startBlock.push(x.start):r.startBlock=[x.start]:x.level==="inline"&&(r.startInline?r.startInline.push(x.start):r.startInline=[x.start]))}"childTokens"in x&&x.childTokens&&(r.childTokens[x.name]=x.childTokens)}),c.extensions=r),f.renderer){const x=this.defaults.renderer||new ka(this.defaults);for(const m in f.renderer){if(!(m in x))throw new Error(`renderer '${m}' does not exist`);if(["options","parser"].includes(m))continue;const k=m,F=f.renderer[k],w=x[k];x[k]=(...u)=>{let z=F.apply(x,u);return z===!1&&(z=w.apply(x,u)),z||""}}c.renderer=x}if(f.tokenizer){const x=this.defaults.tokenizer||new Ca(this.defaults);for(const m in f.tokenizer){if(!(m in x))throw new Error(`tokenizer '${m}' does not exist`);if(["options","rules","lexer"].includes(m))continue;const k=m,F=f.tokenizer[k],w=x[k];x[k]=(...u)=>{let z=F.apply(x,u);return z===!1&&(z=w.apply(x,u)),z}}c.tokenizer=x}if(f.hooks){const x=this.defaults.hooks||new Fa;for(const m in f.hooks){if(!(m in x))throw new Error(`hook '${m}' does not exist`);if(["options","block"].includes(m))continue;const k=m,F=f.hooks[k],w=x[k];Fa.passThroughHooks.has(m)?x[k]=u=>{if(this.defaults.async)return Promise.resolve(F.call(x,u)).then(O=>w.call(x,O));const z=F.call(x,u);return w.call(x,z)}:x[k]=(...u)=>{let z=F.apply(x,u);return z===!1&&(z=w.apply(x,u)),z}}c.hooks=x}if(f.walkTokens){const x=this.defaults.walkTokens,m=f.walkTokens;c.walkTokens=function(k){let F=[];return F.push(m.call(this,k)),x&&(F=F.concat(x.call(this,k))),F}}this.defaults={...this.defaults,...c}}),this}setOptions(a){return this.defaults={...this.defaults,...a},this}lexer(a,r){return hn.lex(a,r??this.defaults)}parser(a,r){return xn.parse(a,r??this.defaults)}parseMarkdown(a){return(f,c)=>{const x={...c},m={...this.defaults,...x},k=this.onError(!!m.silent,!!m.async);if(this.defaults.async===!0&&x.async===!1)return k(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof f>"u"||f===null)return k(new Error("marked(): input parameter is undefined or null"));if(typeof f!="string")return k(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(f)+", string expected"));m.hooks&&(m.hooks.options=m,m.hooks.block=a);const F=m.hooks?m.hooks.provideLexer():a?hn.lex:hn.lexInline,w=m.hooks?m.hooks.provideParser():a?xn.parse:xn.parseInline;if(m.async)return Promise.resolve(m.hooks?m.hooks.preprocess(f):f).then(u=>F(u,m)).then(u=>m.hooks?m.hooks.processAllTokens(u):u).then(u=>m.walkTokens?Promise.all(this.walkTokens(u,m.walkTokens)).then(()=>u):u).then(u=>w(u,m)).then(u=>m.hooks?m.hooks.postprocess(u):u).catch(k);try{m.hooks&&(f=m.hooks.preprocess(f));let u=F(f,m);m.hooks&&(u=m.hooks.processAllTokens(u)),m.walkTokens&&this.walkTokens(u,m.walkTokens);let z=w(u,m);return m.hooks&&(z=m.hooks.postprocess(z)),z}catch(u){return k(u)}}}onError(a,r){return f=>{if(f.message+=`
Please report this to https://github.com/markedjs/marked.`,a){const c="<p>An error occurred:</p><pre>"+Kt(f.message+"",!0)+"</pre>";return r?Promise.resolve(c):c}if(r)return Promise.reject(f);throw f}}},so=new U2;function ze(a,r){return so.parse(a,r)}ze.options=ze.setOptions=function(a){return so.setOptions(a),ze.defaults=so.defaults,Lh(ze.defaults),ze};ze.getDefaults=oc;ze.defaults=co;ze.use=function(...a){return so.use(...a),ze.defaults=so.defaults,Lh(ze.defaults),ze};ze.walkTokens=function(a,r){return so.walkTokens(a,r)};ze.parseInline=so.parseInline;ze.Parser=xn;ze.parser=xn.parse;ze.Renderer=ka;ze.TextRenderer=dc;ze.Lexer=hn;ze.lexer=hn.lex;ze.Tokenizer=Ca;ze.Hooks=Fa;ze.parse=ze;ze.options;ze.setOptions;ze.use;ze.walkTokens;ze.parseInline;xn.parse;hn.lex;const H2=Object.assign({"../../content/0.0.md":em,"../../content/1.1.md":tm,"../../content/1.2.md":nm,"../../content/1.3.md":om,"../../content/1.4.md":im,"../../content/2.1.md":lm,"../../content/2.2.md":am,"../../content/2.3.md":rm,"../../content/2.4.md":sm,"../../content/2.5.md":cm,"../../content/2.6.md":fm,"../../content/2.7.md":dm,"../../content/3.1.md":hm,"../../content/3.2.md":xm,"../../content/3.3.md":um,"../../content/3.4.md":mm,"../../content/3.5.md":ym,"../../content/3.6.md":pm,"../../content/3.7.md":gm,"../../content/3.8.md":Fm,"../../content/4.1.md":wm,"../../content/4.10.md":vm,"../../content/4.11.md":bm,"../../content/4.12.md":Cm,"../../content/4.2.md":km,"../../content/4.3.md":zm,"../../content/4.4.md":Sm,"../../content/4.5.md":Am,"../../content/4.6.md":Em,"../../content/4.7.md":Rm,"../../content/4.8.md":Bm,"../../content/4.9.md":Mm,"../../content/5.1.md":Tm,"../../content/5.2.md":Dm,"../../content/5.3.md":Om,"../../content/5.4.md":jm,"../../content/5.5.md":Nm,"../../content/5.6.md":Lm,"../../content/5.7.md":_m,"../../content/5.8.md":Um,"../../content/5.9.md":Hm,"../../content/6.1.md":Im,"../../content/6.2.md":Pm,"../../content/6.3.md":qm,"../../content/6.4.md":Vm,"../../content/6.5.md":Km,"../../content/6.6.md":Gm,"../../content/6.7.md":Ym,"../../content/6.8.md":Xm,"../../content/6.9.md":Zm,"../../content/7.1.md":Qm,"../../content/7.10.md":Jm,"../../content/7.2.md":Wm,"../../content/7.3.md":$m,"../../content/7.4.md":e2,"../../content/7.6.md":t2,"../../content/7.7.md":n2,"../../content/7.8.md":o2});function I2(a){if(!a.startsWith("---"))return{meta:{},body:a};const r=a.indexOf(`
---`,3);if(r<0)return{meta:{},body:a};const f=a.slice(3,r).split(`
`),c=a.slice(r+4).replace(/^\n+/,""),x={};let m=null;const k=[];for(const F of f){if(m!==null){if(/^\s+/.test(F)||F.trim()===""){k.push(F.replace(/^ {2}/,""));continue}x[m]=k.join(`
`).trim(),m=null,k.length=0}const w=/^([a-zA-Z_]+):\s*(.*)$/.exec(F);w&&(w[2].trim()==="|"?m=w[1]:x[w[1]]=w[2].trim())}return m!==null&&(x[m]=k.join(`
`).trim()),{meta:x,body:c}}function P2(a){return a.replace(/<blockquote>\s*<p><strong>(Discuss|Docs|Show|Ask):<\/strong>/g,(r,f)=>`<blockquote class="callout callout-${f.toLowerCase()}"><p><strong>${f}:</strong>`)}function q2(a){a=a.replace(/<!-- draft[\s\S]*?-->/g,"");const r=a.split(/^## Concept · /m),f=[];for(const c of r.slice(1)){const x=c.indexOf(`
`),m=(x<0?c:c.slice(0,x)).trim();let k=x<0?"":c.slice(x+1),F;const w=/^::: visual\s*\n([\s\S]*?)\n:::\s*$/m.exec(k);w&&(F=w[1],k=k.replace(w[0],"")),f.push({title:m,html:P2(ze.parse(k,{async:!1})),visual:F})}return f}const Xh=new Map;for(const a of Object.values(H2)){const{meta:r,body:f}=I2(a);r.task&&Xh.set(r.task,{task:r.task,summary:r.summary??"",file:r.file,method:r.method,prompt:r.prompt??"",slides:q2(f)})}function hc(a){return Xh.get(a)}function Zh({task:a,content:r,onDone:f,onReachedEnd:c}){const[x,m]=de.useState(0),[k,F]=de.useState(!0),w=r.slides[x],u=!!w.visual&&w.html.trim()==="",z=x===r.slides.length-1;de.useEffect(()=>{z&&(c==null||c())},[z,c]);const O=()=>m(_=>Math.max(0,_-1)),D=()=>m(_=>Math.min(r.slides.length-1,_+1)),Y=h.jsxs("div",{className:`slide-card flex flex-col rounded-2xl border border-[var(--color-teal)]/60 bg-[#F7F2EA] text-[#191741] shadow-xl ${k?"h-full w-full":"aspect-[16/9] w-full"}`,onKeyDown:_=>{_.key==="ArrowRight"&&D(),_.key==="ArrowLeft"&&O(),_.key==="Escape"&&F(!1)},tabIndex:0,children:[h.jsxs("div",{className:"flex items-center justify-between gap-4 px-6 pt-4",children:[h.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[h.jsxs("span",{className:"shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0a8f8f]",children:["Concept · ",x+1," / ",r.slides.length]}),h.jsxs("span",{className:"truncate text-sm text-[#191741]/80",children:[h.jsx("span",{className:"text-[#191741]/50",children:a.tier==="intro"?"Introduction · ":`Task ${va(a)} · `}),a.tier==="intro"?w.title:`${a.title}${u?` · ${w.title}`:""}`]}),a.tier==="intro"?null:h.jsx("span",{className:`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold ${tc(a.tier)}`,children:a.tier})]}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:"flex gap-1",children:r.slides.map((_,G)=>h.jsx("button",{type:"button","aria-label":_.title,onClick:()=>m(G),className:`h-1.5 w-6 rounded-full ${G===x?"bg-[var(--color-teal)]":"bg-[#191741]/15"}`},_.title))}),h.jsx("button",{type:"button",onClick:()=>F(_=>!_),className:"rounded border border-[#191741]/25 px-2 py-0.5 text-[11px] text-[#191741]/70",children:k?"Exit":"Present"})]})]}),h.jsxs("div",{className:`grid flex-1 min-h-0 ${u?"px-4 py-3":"gap-8 px-8 py-6"} ${w.visual&&!u?"md:grid-cols-[1fr_1.1fr]":""}`,children:[u?null:h.jsxs("div",{className:"min-h-0 overflow-auto",children:[h.jsx("h2",{className:`mb-5 font-semibold leading-tight ${k?"text-4xl":"text-3xl"}`,style:{fontFamily:"var(--font-display)"},children:w.title}),h.jsx("div",{className:`md slide ${k?"text-lg":""}`,dangerouslySetInnerHTML:{__html:w.html}})]}),w.visual?h.jsx("div",{className:`visual flex min-h-0 items-center justify-center overflow-hidden ${u?"full-bleed":"rounded-xl border border-[#191741]/10 bg-white p-4"}`,dangerouslySetInnerHTML:{__html:w.visual}}):null]}),h.jsxs("div",{className:"flex items-center justify-between border-t border-[#191741]/10 px-6 py-3",children:[h.jsx("button",{type:"button",disabled:x===0,onClick:O,className:"rounded-md border border-[#191741]/25 px-3 py-1.5 text-sm text-[#191741] disabled:opacity-40",children:"← Previous"}),z?h.jsx("button",{type:"button",onClick:()=>{F(!1),f()},className:"rounded-md bg-[var(--color-violet)] px-4 py-1.5 text-sm font-semibold text-white",children:a.tier==="intro"?"Start Session 1 →":"Go to the task →"}):h.jsx("button",{type:"button",onClick:D,className:"rounded-md bg-[var(--color-teal)] px-4 py-1.5 text-sm font-semibold text-[#191741]",children:"Next →"})]})]});return k?h.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-[#191741]/95 p-8",children:[h.jsxs("div",{className:"w-full max-w-6xl text-left",children:[h.jsxs("div",{className:"text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-teal-light)]",children:[a.session," · ",a.module]}),h.jsx("h1",{className:"truncate text-xl font-semibold text-white",style:{fontFamily:"var(--font-display)"},children:a.tier==="intro"?"00 · Introduction":`Task ${va(a)} · ${a.title}`})]}),h.jsx("div",{className:"aspect-[16/9] max-h-[82vh] w-full max-w-6xl",children:Y})]}):Y}function V2({task:a,content:r}){const[f,c]=de.useState(!1),[x,m]=de.useState(!1),k=a.tier==="T1",F=(r==null?void 0:r.summary)||a.description||"",w=(r==null?void 0:r.prompt)||a.description||"";async function u(){try{await navigator.clipboard.writeText(w),c(!0),setTimeout(()=>c(!1),1500)}catch{}}return h.jsxs("div",{className:`rounded-xl border ${k?"border-[var(--color-violet)]/40 bg-[var(--color-violet)]/10":"border-[var(--color-yellow)]/50 bg-[var(--color-yellow)]/15"}`,children:[h.jsxs("div",{className:"px-5 pt-4",children:[h.jsx("span",{className:"mb-2 block text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]",children:k?"Tier 1 · AI-accelerated":a.tier==="T2"?"Tier 2 · human-in-the-loop":"Pre-built · study it"}),h.jsx("p",{className:"text-[15px] leading-relaxed text-[var(--color-text)]",children:F}),r!=null&&r.file?h.jsxs("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",children:[h.jsx("code",{className:"rounded bg-[var(--color-bg)]/60 px-2 py-1",children:r.file}),r.method?h.jsx("code",{className:"rounded bg-[var(--color-bg)]/60 px-2 py-1",children:r.method}):null]}):null]}),a.tier==="T2"&&a.decisions&&a.decisions.length>0?h.jsx("ul",{className:"mx-5 mt-4 space-y-2 rounded-lg border border-[var(--color-yellow)]/40 bg-[var(--color-bg-card)] p-3",children:a.decisions.map((z,O)=>h.jsxs("li",{className:"flex items-start gap-2 text-sm text-[var(--color-text-secondary)]",children:[h.jsx(Qu,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-yellow)]"}),h.jsx("span",{children:z})]},O))}):null,h.jsxs("div",{className:"mt-4 flex flex-wrap items-center gap-3 border-t border-[var(--color-brd)]/60 px-5 py-3",children:[w?h.jsx("button",{type:"button",onClick:u,className:"rounded-md bg-[var(--color-violet)] px-3 py-1.5 text-sm font-semibold text-white",children:f?h.jsxs(h.Fragment,{children:[h.jsx(nc,{size:14,className:"mr-1 inline align-[-2px]"}),"Copied"]}):"Copy prompt"}):null,h.jsx("button",{type:"button",onClick:()=>m(z=>!z),className:"text-sm text-[var(--color-text-secondary)] underline-offset-2 hover:underline",children:x?"Hide details":"Details"})]}),x?h.jsxs("div",{className:"space-y-3 border-t border-[var(--color-brd)]/60 px-5 py-4 text-sm text-[var(--color-text-secondary)]",children:[w?h.jsxs("div",{children:[h.jsx("span",{className:"mb-1 block text-[11px] font-semibold uppercase tracking-wide",children:"The prompt"}),h.jsx("pre",{className:"whitespace-pre-wrap rounded-lg bg-[var(--color-bg)]/60 p-3 font-mono text-xs leading-relaxed",children:w})]}):null,a.hint?h.jsxs("div",{className:"flex items-start gap-2 rounded-lg border border-[var(--color-brd)] bg-[var(--color-bg-card)] p-3",children:[h.jsx(Xu,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-teal-light)]"}),h.jsx("span",{className:"min-w-0 break-words",children:a.hint})]}):null]}):null]})}function K2({stage:a,hasConcept:r,onStage:f,done:c}){const x=[{key:"concept",label:"1 · Concept"},{key:"task",label:"2 · Task"},{key:"try",label:"3 · Try It"}];return h.jsx("div",{className:"flex gap-2 text-xs",children:x.map(m=>{const k=m.key===a||m.key==="try"&&a==="task",F=m.key==="concept"&&!r,w=!!(c!=null&&c[m.key]);return h.jsxs("button",{type:"button",disabled:F,onClick:()=>f(m.key==="try"?"task":m.key),title:w?m.key==="concept"?"Concept slides finished":m.key==="task"?"Task card opened":"Try It answered 2xx":void 0,className:`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold ${k?"bg-[var(--color-teal)] text-[#191741]":w?"border border-[var(--color-teal)]/60 text-[var(--color-teal-light)]":"border border-[var(--color-brd)] text-[var(--color-text-muted)]"} disabled:opacity-40`,children:[w?h.jsx("span",{className:`grid h-3.5 w-3.5 place-items-center rounded-full ${k?"bg-[#191741] text-[var(--color-teal)]":"bg-[var(--color-teal)] text-[#191741]"}`,children:h.jsx(nc,{size:9})}):null,m.label]},m.key)})})}const G2=["locale","priceCurrency","priceCountry","priceChannel","priceCustomerGroup"],Y2={locale:"en-US",priceCurrency:"USD",priceCountry:"US",priceChannel:"<channel key>",priceCustomerGroup:"<group id>"};function Qh(a){const r=a.indexOf("?");if(r<0)return{path:a,params:[]};const f=[...new URLSearchParams(a.slice(r+1))].map(([c,x])=>({key:c,value:x}));return{path:a.slice(0,r),params:f}}function X2(a){const r=Qh(a.endpoint).params;if(r.length)return r;const f={key:"locale",value:"en-US"},c=[f,{key:"priceCurrency",value:"USD"},{key:"priceCountry",value:"US"}],x=a.capability;if(x.startsWith("search.")||x==="catalog.pdpInStore"){const m=[{key:"store",value:"b2c-retail-store"},...c];switch(x){case"search.fullText":return[...m,{key:"q",value:"chair"}];case"search.byCategory":return[...m,{key:"category",value:"furniture"}];case"search.facetsConfig":return[...m,{key:"dynamic",value:"true"}];case"search.postFilter":return[...m,{key:"filter",value:"colour:white"}];default:return m}}return x==="cart.create"?[{key:"store",value:"b2c-retail-store"},{key:"currency",value:"EUR"},{key:"country",value:"DE"}]:x==="cart.recurring"?[{key:"recurring",value:"true"}]:x==="customer.cartMerge"?[{key:"mergeMode",value:"MergeWithExistingCustomerCart"}]:x==="customer.groups"?[{key:"priceCurrency",value:"USD"},{key:"priceCountry",value:"US"}]:x==="distribution.store"?[{key:"store",value:"b2c-retail-store"}]:x==="catalog.categories"?[f]:x.startsWith("catalog.")||/\bproducts\b/.test(a.endpoint)?c:/\bcategories\b/.test(a.endpoint)?[f]:[]}function Z2(a){switch(a.capability){case"distribution.storeByKey":return{key:"b2c-retail-store"};case"catalog.pdp":case"catalog.pdpInStore":case"catalog.variantMatrix":return{key:"charlie-armchair"};case"catalog.categoryProducts":return{key:"furniture"};case"catalog.bundles":return{key:"bedding-bundle"};case"catalog.localeSlugs":return{slug:"charlie-armchair"};case"order.create":case"order.ledger":case"order.capture":case"order.states":case"order.recurring":case"ext.messages":return{orderNumber:"<paste your LHC-… order number>"};case"order.cancel":case"order.return":case"order.reorder":return{ref:"<paste an order id from GET /api/orders>"};default:return{}}}function Mh(a){const r=f=>JSON.stringify(f,null,2);switch(a.capability){case"cart.lineItems":return r({sku:"CARM-023",quantity:1,distributionChannelKey:"distribution-channel"});case"cart.recurring":return r({sku:"CARM-023"});case"cart.bundles":return r({bundleKey:"bedding-bundle"});case"cart.channel":return r({distributionChannelKey:"distribution-channel",supplyChannelKey:"pickup-store"});case"cart.stockGate":return r({inventoryMode:"ReserveOnOrder"});case"cart.address":return r({country:"DE",firstName:"Alex",lastName:"Doe",streetName:"Hauptstraße",streetNumber:"1",postalCode:"10115",city:"Berlin"});case"cart.promo":return r({code:"SAVE10"});case"customer.register":return r({email:"new.shopper@lhc.test",password:"Lhc-demo-2026!",firstName:"New",lastName:"Shopper"});case"customer.login":case"customer.cartMerge":return r({email:"ada@lhc.test",password:"Lhc-demo-2026!"});case"customer.addresses":return r({key:"home",country:"DE",firstName:"Ada",lastName:"Lovelace",streetName:"Hauptstraße",streetNumber:"1",postalCode:"10115",city:"Berlin",defaultShipping:!0});case"customer.password":return r({currentPassword:"Lhc-demo-2026!",newPassword:"Lhc-demo-2026!"});case"customer.emailVerify":return r({tokenValue:"<paste the value from POST /api/customers/email/token>"});case"order.states":return r({state:"order-picked"});case"ext.customFields":return r({giftMessage:"Happy birthday, Ada!"});case"order.return":return r({lines:[{lineItemId:"<a line id from the order>",quantity:1}],comment:"Wrong colour"});case"order.placeWithoutCheckout":return r({email:"guest@lhc.test"});case"ext.import":return r([{sku:"CARM-023",currencyCode:"EUR",centAmount:44900,country:"DE"}]);case"ext.cartRules":return r({action:"Update",resource:{typeId:"cart",id:"try-it",obj:{id:"try-it",version:1,custom:{type:{typeId:"type",id:"order-extras"},fields:{owner:"you"}},lineItems:[{id:"li-1",productId:"charlie-armchair",quantity:11,variant:{id:1,sku:"CARM-023"},price:{id:"p-1",value:{type:"centPrecision",currencyCode:"EUR",centAmount:49900,fractionDigits:2}}}]}}});default:return""}}function Q2(a){return a==="customer.register"?"/register":a==="customer.login"||a==="customer.cartMerge"||a==="customer.password"?"/login":a==="customer.session"?"/":a.startsWith("customer.")||a==="order.history"||a==="order.cancel"||a==="order.return"||a==="order.reorder"?"/account":a==="order.create"||a==="order.ledger"||a==="order.recurring"||a==="ext.messages"?"/checkout/confirmation":a.startsWith("order.")||a==="ext.customFields"?"/checkout":a==="cart.shoppingList"||a==="ext.cartRules"||a.startsWith("cart.")?"/cart":a==="catalog.pdp"||a==="catalog.variantMatrix"||a==="catalog.bundles"||a==="catalog.pdpInStore"||a==="cart.recurring"||a==="ext.customObjects"||a==="inventory.read"?"/products/charlie-armchair":a.startsWith("search.")?"/products":"/"}function J2({task:a,completed:r,loading:f,storefrontUrl:c,onTry:x,steps:m,onStep:k}){const F=Qh(a.endpoint).path,w=Lu(F),u=hc(a.id),z=!!(u&&u.slides.length>0),[O,D]=de.useState(z?"concept":"task"),[Y,_]=de.useState(a.id);Y!==a.id&&(_(a.id),D(z?"concept":"task")),de.useEffect(()=>{O==="task"&&(k==null||k(a.id,"task"))},[O,a.id,k]);const[G,oe]=de.useState(()=>Z2(a)),[ve,U]=de.useState(()=>X2(a)),[L,V]=de.useState(()=>Mh(a)),W=/^(POST|PUT|PATCH)$/i.test(a.httpMethod)&&Mh(a).trim()!=="",H=Nu(F,G)+_u(ve),ie=w.filter(ne=>!(G[ne]??"").trim()),ce=jh(a.httpMethod),Ot=(ne="")=>U(ge=>ne&&ge.some(Me=>Me.key===ne)?ge:[...ge,{key:ne,value:""}]),nt=(ne,ge)=>U(Me=>Me.map((E,j)=>j===ne?{...E,...ge}:E)),Ke=ne=>U(ge=>ge.filter((Me,E)=>E!==ne));return h.jsxs("div",{className:"mx-auto max-w-3xl space-y-6 p-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[h.jsx("span",{className:"rounded px-2 py-0.5 text-xs font-semibold",style:{background:`${ce}22`,color:ce},children:a.httpMethod}),h.jsxs("h1",{className:"text-xl font-semibold",style:{fontFamily:"var(--font-display)"},children:[h.jsxs("span",{className:"text-[var(--color-text-muted)]",children:[va(a)," "]}),a.title]}),h.jsx("span",{className:`rounded px-1.5 py-0.5 text-[10px] font-semibold ${tc(a.tier)}`,children:a.tier}),r?h.jsxs("span",{className:"rounded-full bg-[var(--color-teal)]/20 px-2 py-0.5 text-xs text-[var(--color-teal-light)]",children:[h.jsx(nc,{size:12,className:"mr-1 inline align-[-1px]"}),"Completed"]}):null]}),h.jsxs("code",{className:"mt-2 block text-sm text-[var(--color-text-secondary)]",children:[a.httpMethod," ",a.endpoint]}),h.jsx("div",{className:"mt-3",children:h.jsx(K2,{stage:O,hasConcept:z,onStage:D,done:{concept:!!(m!=null&&m.conceptAt)||!z,task:!!(m!=null&&m.taskAt),try:r}})})]}),O==="concept"&&u?h.jsx(Zh,{task:a,content:u,onDone:()=>D("task"),onReachedEnd:()=>k==null?void 0:k(a.id,"concept")},a.id):null,O==="task"?h.jsx(V2,{task:a,content:u}):null,O==="task"?h.jsxs(h.Fragment,{children:[w.length>0?h.jsx(Gs,{title:"Path parameters",children:h.jsx("div",{className:"space-y-2",children:w.map(ne=>h.jsxs("label",{className:"flex items-center gap-3 text-sm",children:[h.jsx("span",{className:"w-24 text-[var(--color-text-muted)]",children:ne}),h.jsx("input",{value:G[ne]??"",onChange:ge=>oe(Me=>({...Me,[ne]:ge.target.value})),placeholder:`Enter ${ne}…`,className:"flex-1 rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-2 py-1.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"})]},ne))})}):null,h.jsxs(Gs,{title:"Query parameters",children:[h.jsxs("p",{className:"mb-2 text-xs leading-relaxed text-[var(--color-text-muted)]",children:["Sent as the ",h.jsx("code",{children:"?query"}),". Catalog reads use these for localization and price selection —"," ",h.jsx("code",{children:"locale"})," · ",h.jsx("code",{children:"priceChannel"})," · ",h.jsx("code",{children:"priceCountry"})," · ",h.jsx("code",{children:"priceCurrency"})," ·"," ",h.jsx("code",{children:"priceCustomerGroup"}),". Edit them and ",h.jsx("em",{children:"Try It"})," again to watch the effect: blank the currency to see the price fall back to ",h.jsx("code",{children:"—"}),", or change ",h.jsx("code",{children:"locale"})," to switch the name & slug. Defaults match what the storefront sends."]}),h.jsxs("div",{className:"space-y-2",children:[ve.map((ne,ge)=>h.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[h.jsx("input",{value:ne.key,onChange:Me=>nt(ge,{key:Me.target.value}),placeholder:"param",className:"w-40 rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-2 py-1.5 font-mono text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"}),h.jsx("span",{className:"text-[var(--color-text-muted)]",children:"="}),h.jsx("input",{value:ne.value,onChange:Me=>nt(ge,{value:Me.target.value}),placeholder:Y2[ne.key]??"value",className:"flex-1 rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-2 py-1.5 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"}),h.jsx("button",{onClick:()=>Ke(ge),"aria-label":`Remove ${ne.key||"parameter"}`,className:"rounded-md p-1.5 text-[var(--color-text-muted)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text)]",children:h.jsx(Nh,{size:14})})]},ge)),ve.length===0?h.jsx("p",{className:"text-xs text-[var(--color-text-muted)]",children:"No query parameters — add one below."}):null]}),h.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2",children:[h.jsx("button",{onClick:()=>Ot(),className:"rounded-md border border-[var(--color-brd-light)] px-2.5 py-1 text-xs font-medium hover:border-[var(--color-violet)]",children:"+ Add parameter"}),G2.filter(ne=>!ve.some(ge=>ge.key===ne)).map(ne=>h.jsxs("button",{onClick:()=>Ot(ne),className:"rounded-full border border-[var(--color-brd)] px-2.5 py-1 font-mono text-xs text-[var(--color-text-secondary)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal-light)]",children:["+ ",ne]},ne))]})]}),a.capability==="customer.register"||a.capability==="customer.login"||a.capability==="customer.cartMerge"?h.jsxs("div",{className:"flex items-start gap-2 rounded-lg border border-[var(--color-teal)]/40 bg-[var(--color-teal)]/10 p-3 text-sm text-[var(--color-text-secondary)]",children:[h.jsx(kh,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-teal-light)]"}),h.jsxs("span",{children:["Sign-up / sign-in hand over the ",h.jsx("em",{children:"session's"})," guest basket. To see it happen: create a cart (4.1) and add items first, and make sure the session is not already signed in (",h.jsx("code",{children:"GET /api/session"})," →"," ",h.jsx("code",{children:"POST /api/session/sign-out"})," if it is) — a signed-in session has no guest basket, so"," ",h.jsx("code",{children:"activeCartId"})," comes back ",h.jsx("code",{children:"null"}),". The response's ",h.jsx("code",{children:"note"})," says what happened."]})]}):null,W?h.jsxs(Gs,{title:"Request body",children:[h.jsxs("p",{className:"mb-2 text-xs leading-relaxed text-[var(--color-text-muted)]",children:["Sent as the JSON request body (",h.jsx("code",{children:"content-type: application/json"}),"). Session 4 is the first with write tasks — edit the fields (a real ",h.jsx("code",{children:"sku"}),", a ",h.jsx("code",{children:"bundleKey"}),", a promo ",h.jsx("code",{children:"code"}),") and ",h.jsx("em",{children:"Try It"}),". A cart must exist first — run ",h.jsx("code",{children:"4.1"})," once."]}),h.jsx("textarea",{value:L,onChange:ne=>V(ne.target.value),rows:Math.min(12,Math.max(3,L.split(`
`).length+1)),spellCheck:!1,placeholder:"{ }",className:"w-full rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-panel)] px-3 py-2 font-mono text-xs text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"})]}):null,h.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[h.jsx("button",{onClick:()=>x(a,a.httpMethod,H,W?L:void 0),disabled:f||ie.length>0,title:ie.length>0?`Enter ${ie.join(", ")} first`:void 0,className:"inline-flex items-center gap-2 rounded-md bg-[var(--color-violet)] px-4 py-2 font-medium text-white hover:bg-[var(--color-violet-light)] disabled:cursor-not-allowed disabled:opacity-60",children:f?`Calling ${Ct().backendName}…`:"Try It"}),ie.length>0?h.jsxs("span",{className:"text-xs text-[var(--color-yellow)]",children:[h.jsx(Zu,{size:12,className:"mr-1 inline align-[-1px]"}),"Enter ",h.jsx("code",{children:ie.join(", ")})," to call this endpoint."]}):h.jsxs("span",{className:"text-xs text-[var(--color-text-muted)]",children:["Sends ",h.jsx("code",{style:{color:ce},children:a.httpMethod})," ",h.jsx("code",{children:H})," to ",Ct().tryItTarget]}),h.jsx("a",{href:`${c}${Q2(a.capability)}?focus=${encodeURIComponent(a.capability)}`,target:"_blank",rel:"noreferrer",className:"ml-auto rounded-md border border-[var(--color-brd-light)] px-3 py-1.5 text-sm hover:border-[var(--color-violet)]",children:"View in Storefront ↗"})]}),r?null:h.jsxs("div",{className:"flex items-start gap-3 rounded-lg border border-[var(--color-yellow)]/30 bg-[var(--color-yellow)]/10 p-4 text-sm",children:[h.jsx(kh,{size:16,className:"mt-0.5 shrink-0 text-[var(--color-yellow)]"}),h.jsxs("div",{className:"text-[var(--color-text-secondary)]",children:[h.jsx("strong",{className:"text-[var(--color-text)]",children:"Not implemented yet."})," ",Ct().implementHint,", then ",h.jsx("em",{children:"Try It"})," — a ",h.jsx("code",{children:"2xx"})," marks it complete and unlocks ",h.jsx("code",{children:a.capability})," in the storefront."]})]})]}):null]})}function Gs({title:a,children:r}){return h.jsxs("section",{children:[h.jsx("h2",{className:"mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:a}),r]})}const Pn="intro",W2={id:Pn,module:"course",session:"Introduction",taskNumber:0,title:"Welcome",tier:"intro",capability:"",endpoint:"",httpMethod:"",completed:!1};function Th(){var a;return!!((a=hc(Pn))!=null&&a.slides.length)}function $2({onDone:a,onReachedEnd:r}){const f=hc(Pn);return f?h.jsxs("div",{className:"mx-auto max-w-3xl space-y-6 p-6",children:[h.jsxs("div",{children:[h.jsxs("h1",{className:"text-xl font-semibold",style:{fontFamily:"var(--font-display)"},children:[h.jsx("span",{className:"text-[var(--color-text-muted)]",children:"00 "}),"Introduction"]}),h.jsx("p",{className:"mt-1 text-sm text-[var(--color-text-secondary)]",children:"The course, the stack, the setup — before the first task."})]}),h.jsx(Zh,{task:W2,content:f,onDone:a,onReachedEnd:r},Pn)]}):null}function e6({state:a,loading:r}){if(r)return h.jsxs("div",{className:"p-4 text-sm text-[var(--color-text-muted)]",children:["Calling ",Ct().backendName,"…"]});if(!a)return h.jsxs("div",{className:"p-4 text-sm text-[var(--color-text-muted)]",children:["Hit ",h.jsx("span",{className:"font-medium text-[var(--color-text-secondary)]",children:"Try It"})," on a task to see the live request & response here."]});const f=Pu(a.result.status);return h.jsxs("div",{className:"space-y-3 p-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("code",{className:"text-xs text-[var(--color-text-secondary)]",children:[a.method," ",a.endpoint]}),h.jsx("span",{className:`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${f.cls}`,children:f.label})]}),a.result.status===501?h.jsxs("p",{className:"rounded-md bg-[var(--color-yellow)]/10 px-3 py-2 text-xs text-[var(--color-yellow)]",children:["Pending — ",Ct().implementHint.charAt(0).toLowerCase()+Ct().implementHint.slice(1),", then Try It again."]}):null,a.result.status===0?h.jsxs("p",{className:"rounded-md bg-[var(--color-bg-card)] px-3 py-2 text-xs text-[var(--color-text-muted)]",children:["No response — is ",Ct().tryItTarget," running on ",Ct().backendLocation,"?"]}):null,a.requestBody&&a.requestBody.trim()!==""?h.jsxs("div",{children:[h.jsx("p",{className:"mb-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Request body"}),h.jsx("pre",{className:"overflow-auto rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-base)] p-3 text-xs leading-relaxed text-[var(--color-text-secondary)]",style:{fontFamily:"var(--font-mono)"},children:a.requestBody}),h.jsx("p",{className:"mb-1 mt-3 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Response"})]}):null,h.jsx("pre",{className:"max-h-[60vh] overflow-auto rounded-md border border-[var(--color-brd)] bg-[var(--color-bg-base)] p-3 text-xs leading-relaxed text-[var(--color-text-secondary)]",style:{fontFamily:"var(--font-mono)"},children:typeof a.result.body=="string"?a.result.body:JSON.stringify(a.result.body,null,2)})]})}function t6({summaries:a,telemetry:r=[],modules:f}){const c=qu(f),x=za(f),[m,k]=de.useState("completion"),[F,w]=de.useState(-1),u=de.useMemo(()=>new Map(x.map(U=>[U.id,U])),[x]),{checkedTasks:z,flaggedByTask:O,flagRows:D,totalFlags:Y}=de.useMemo(()=>{const U=new Set,L=new Map,V=[];let he=0;for(const W of r)for(const H of W.signals)U.add(H.taskId),H.status==="FLAGGED"&&(L.set(H.taskId,(L.get(H.taskId)??0)+1),V.push({participant:W.participantName||W.participantId,signal:H}),he+=1);return{checkedTasks:U,flaggedByTask:L,flagRows:V,totalFlags:he}},[r]),_=de.useMemo(()=>{const U=[...a];return U.sort((L,V)=>(m==="name"?L.participantName.localeCompare(V.participantName):In(L.completed,L.total)-In(V.completed,V.total))*F),U},[a,m,F]);if(a.length===0)return h.jsx("div",{className:"mx-auto max-w-5xl p-6",children:h.jsxs("div",{className:"rounded-xl border border-dashed border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-8 text-center text-sm text-[var(--color-text-muted)]",children:["No participant progress yet. As participants complete tasks, their rows appear here (from"," ",h.jsx("code",{children:"GET /api/training/progress/all"}),")."]})});const G=Math.round(a.reduce((U,L)=>U+In(L.completed,L.total),0)/a.length),oe=a.filter(U=>U.total>0&&U.completed===U.total).length,ve=(U,L)=>h.jsxs("button",{onClick:()=>{m===L?w(V=>V*-1):(k(L),w(-1))},className:"font-medium hover:text-[var(--color-violet-light)]",children:[U,m===L?F===1?" ▲":" ▼":""]});return h.jsxs("div",{className:"mx-auto max-w-5xl space-y-5 p-6",children:[h.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[h.jsx(Ys,{label:"Participants",value:String(a.length)}),h.jsx(Ys,{label:"Class average",value:`${G}%`}),h.jsx(Ys,{label:"Fully complete",value:`${oe}/${a.length}`})]}),h.jsx("div",{className:"overflow-x-auto rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:h.jsxs("table",{className:"w-full border-collapse text-sm",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-[var(--color-brd)] text-left text-[var(--color-text-secondary)]",children:[h.jsx("th",{className:"px-3 py-2",children:ve("Participant","name")}),c.map(U=>{const{codename:L,subtitle:V}=Oh(U);return h.jsxs("th",{className:"px-3 py-2 text-center font-medium",title:V?`${L} · ${V}`:void 0,children:[h.jsx("span",{className:"block",children:U}),L?h.jsx("span",{className:"block text-[11px] font-normal text-[var(--color-text-muted)]",children:L}):null]},U)}),h.jsx("th",{className:"px-3 py-2 text-center",title:"Concept slides finished · task cards opened (attentiveness, not outcome)",children:"Concept · Task"}),h.jsx("th",{className:"px-3 py-2 text-right",children:ve("Total","completion")})]})}),h.jsx("tbody",{children:_.map(U=>h.jsxs("tr",{className:"border-b border-[var(--color-brd)]/60 last:border-0",children:[h.jsx("td",{className:"px-3 py-2 font-medium",children:U.participantName}),c.map(L=>{const V=U.perSession[L]??{completed:0,total:0};return h.jsx("td",{className:"px-3 py-2 text-center",style:{backgroundColor:Ch(In(V.completed,V.total))},children:V.total?`${V.completed}/${V.total}`:"—"},L)}),h.jsx("td",{className:"px-3 py-2 text-center text-xs text-[var(--color-text-secondary)]",children:(()=>{var H;const L=U.steps??{},V=x.filter(ie=>{var ce;return(ce=L[ie.id])==null?void 0:ce.conceptAt}).length,he=x.filter(ie=>{var ce;return(ce=L[ie.id])==null?void 0:ce.taskAt}).length,W=!!((H=L.intro)!=null&&H.conceptAt);return h.jsxs("span",{title:`${W?"Watched the Introduction · ":""}${V} concept decks finished · ${he} task cards opened`,children:[W?h.jsx("span",{className:"mr-1 text-[var(--color-teal-light)]",children:"00✓"}):null,V," · ",he]})})()}),h.jsxs("td",{className:"px-3 py-2 text-right font-medium",children:[In(U.completed,U.total),"%"]})]},U.participantId))})]})}),h.jsxs("div",{className:"overflow-x-auto rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsx("div",{className:"px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Per-task completion — participants done"}),h.jsx("table",{className:"w-full border-collapse text-xs",children:h.jsx("tbody",{children:h.jsx("tr",{children:x.map(U=>{const L=a.filter(W=>W.perTask[U.id]).length,V=a.filter(W=>{var H,ie;return(ie=(H=W.steps)==null?void 0:H[U.id])==null?void 0:ie.conceptAt}).length,he=a.filter(W=>{var H,ie;return(ie=(H=W.steps)==null?void 0:H[U.id])==null?void 0:ie.taskAt}).length;return h.jsxs("td",{title:`${U.title} — ${L}/${a.length} done · ${V} finished the concept · ${he} opened the task`,className:"border border-[var(--color-brd)] px-2 py-2 text-center",style:{backgroundColor:Ch(In(L,a.length))},children:[h.jsxs("div",{className:"font-medium",children:[U.module.slice(0,3),"·",U.taskNumber]}),h.jsxs("div",{className:"text-[10px] text-[var(--color-text-muted)]",children:[L,"/",a.length]}),h.jsxs("div",{className:"text-[9px] text-[var(--color-text-muted)]/80",title:"concept · task",children:[V,"·",he]})]},U.id)})})})})]}),z.size>0?h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("h2",{className:"text-sm font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Approach signals"}),h.jsx("span",{className:"text-xs text-[var(--color-text-muted)]",children:"how each task was implemented — not just whether it works"}),h.jsx("span",{className:`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${Y>0?"bg-[var(--color-yellow)]/20 text-[var(--color-yellow)]":"bg-[var(--color-teal)]/20 text-[var(--color-teal-light)]"}`,children:Y>0?`${Y} flag${Y===1?"":"s"}`:"all on the expected path"})]}),h.jsxs("div",{className:"overflow-x-auto rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsx("div",{className:"px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Per-task — participants flagged"}),h.jsx("table",{className:"w-full border-collapse text-xs",children:h.jsx("tbody",{children:h.jsx("tr",{children:x.map(U=>{const L=z.has(U.id),V=O.get(U.id)??0;return h.jsxs("td",{title:L?`${U.title} — ${V}/${a.length} flagged`:`${U.title} — no approach rule`,className:"border border-[var(--color-brd)] px-2 py-2 text-center",style:L?{backgroundColor:Iu(In(V,a.length))}:void 0,children:[h.jsxs("div",{className:"font-medium",children:[U.module.slice(0,3),"·",U.taskNumber]}),h.jsx("div",{className:"text-[10px] text-[var(--color-text-muted)]",children:L?V:"—"})]},U.id)})})})})]}),D.length>0?h.jsxs("div",{className:"overflow-hidden rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsx("div",{className:"px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]",children:"Flag detail"}),h.jsx("ul",{className:"divide-y divide-[var(--color-brd)]/60",children:D.map(({participant:U,signal:L},V)=>{const he=u.get(L.taskId);return h.jsxs("li",{className:"px-3 py-2 text-xs",children:[h.jsxs("div",{className:"flex flex-wrap items-baseline gap-x-2",children:[h.jsx("span",{className:"font-medium",children:U}),h.jsx("span",{className:"text-[var(--color-text-muted)]",children:he?`${he.title} (${he.module}·${he.taskNumber})`:L.taskId}),h.jsxs("span",{className:"ml-auto text-[10px] text-[var(--color-text-muted)]",children:[L.source?`via ${L.source} · `:"",L.callCount," call",L.callCount===1?"":"s"]})]}),h.jsx("div",{className:"mt-1 flex flex-wrap gap-1",children:L.flags.map((W,H)=>h.jsx("span",{className:"rounded bg-[var(--color-yellow)]/15 px-1.5 py-0.5 font-mono text-[10px] text-[var(--color-yellow)]",children:W},H))}),L.observed.length>0?h.jsx("div",{className:"mt-1 font-mono text-[10px] text-[var(--color-text-muted)]",children:L.observed.join("  ·  ")}):null]},`${L.taskId}-${U}-${V}`)})})]}):h.jsx("div",{className:"rounded-xl border border-dashed border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-4 text-center text-xs text-[var(--color-text-muted)]",children:"No approach flags — every attempted task used its expected commercetools calls."})]}):null]})}function Ys({label:a,value:r}){return h.jsxs("div",{className:"rounded-xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-4",children:[h.jsx("div",{className:"text-2xl font-semibold",children:r}),h.jsx("div",{className:"text-xs text-[var(--color-text-muted)]",children:a})]})}function n6(){const a=Ct();return h.jsx("div",{className:"grid flex-1 place-items-center",children:h.jsxs("div",{className:"max-w-md rounded-2xl border border-[var(--color-brd)] bg-[var(--color-bg-panel)] p-8 text-center",children:[h.jsx("div",{className:"mb-3 flex justify-center text-[var(--color-text-muted)]",children:h.jsx(Ju,{size:32})}),h.jsxs("h2",{className:"text-lg font-semibold",children:["Start your ",a.backendName]}),h.jsxs("p",{className:"mt-2 text-sm text-[var(--color-text-secondary)]",children:["Commerce Canvas can’t reach the training API on ",h.jsx("code",{children:a.backendLocation}),". Start it and this connects automatically — no reload needed."]}),h.jsx("div",{className:"mt-4 space-y-2 text-left text-xs",style:{fontFamily:"var(--font-mono)"},children:a.startCommands.map(r=>h.jsx("pre",{className:"overflow-x-auto rounded-md bg-[var(--color-bg-base)] p-3 text-[var(--color-text-secondary)]",children:r},r))})]})})}function o6(){var N,I,Q,te,xe,Ge,Oe,un,qn,fo,ei,Ut;const[a,r]=de.useState("participant"),[f,c]=de.useState(null),[x,m]=de.useState(null),[k,F]=de.useState(null),[w,u]=de.useState(!1),[z,O]=de.useState(!1),D=Wo(Ru,15e3);Uu((N=D.data)!=null&&N.ok?D.data.data:null);const Y=Wo(Eu,8e3),_=Wo(Bu,8e3),G=Wo(Mu,3e3),oe=Wo(Tu,4e3),ve=Wo(Ou,4e3),U="http://localhost:3000",L=de.useRef(new Set),[V,he]=de.useState(new Set),W=de.useRef(!1);de.useEffect(()=>{var ho,xo,$i;const Fe=new Set,at=(xo=(ho=G.data)==null?void 0:ho.data)==null?void 0:xo.perTask;if(at)for(const[mn,Ze]of Object.entries(at))Ze&&Fe.add(mn);const ot=($i=Y.data)==null?void 0:$i.data;if(ot)for(const mn of ot)for(const Ze of mn.sessions)for(const el of Ze.tasks)el.completed&&Fe.add(el.id);let Ht=!1;const jt=new Set(L.current);Fe.forEach(mn=>{jt.has(mn)||(jt.add(mn),Ht=!0)}),Ht&&(L.current=jt,he(jt))},[Y.data,G.data]);const H=((I=Y.data)==null?void 0:I.data)??[],ie=de.useMemo(()=>za(H),[H]);de.useEffect(()=>{if(W.current||ie.length===0)return;const Fe=ie.find(ot=>!V.has(ot.id))??ie[0];m(Fe.session);const at=V.size===0&&Th();c(ot=>ot??(at?Pn:Fe.id)),W.current=!0},[ie,V]);const ce=ie.find(Fe=>Fe.id===f)??null,Ot=f===Pn,nt=Fe=>{c(Fe.id),m(Fe.session)};async function Ke(Fe,at,ot,Ht){u(!0),O(!0);const jt=await ju(at,ot,Ht);F({title:Fe.title,method:at,endpoint:ot,requestBody:Ht,result:jt}),u(!1),jt.ok&&G.refresh()}const ne=((te=(Q=G.data)==null?void 0:Q.data)==null?void 0:te.steps)??{},ge=de.useRef(new Set),Me=de.useCallback((Fe,at)=>{const ot=`${Fe}|${at}`;ge.current.has(ot)||(ge.current.add(ot),Du(Fe,at).then(Ht=>{Ht.ok?G.refresh():ge.current.delete(ot)}))},[G]),E=Y.data,j=!!E&&E.status===0,Z=!!E&&E.status!==0,ye=(Ge=(xe=G.data)==null?void 0:xe.data)==null?void 0:Ge.participantId,be=((qn=(un=(Oe=oe.data)==null?void 0:Oe.data)==null?void 0:un.find(Fe=>Fe.participantId===ye))==null?void 0:qn.participantName)??ye,g=(fo=_.data)!=null&&fo.ok?_.data.data:null,T=(g==null?void 0:g.name)||(g==null?void 0:g.key)||null;return h.jsxs("div",{className:"flex h-screen flex-col overflow-hidden",children:[h.jsx(Wu,{view:a,onView:r,connected:Z,modules:H,completed:V,participantName:be,projectName:T,storefrontUrl:U,focusCapability:(ce==null?void 0:ce.capability)??null,inspectorOpen:z,onToggleInspector:()=>O(Fe=>!Fe)}),j?h.jsx(n6,{}):a==="trainer"?h.jsx("div",{className:"min-h-0 flex-1 overflow-auto",children:h.jsx(t6,{summaries:((ei=oe.data)==null?void 0:ei.data)??[],telemetry:((Ut=ve.data)==null?void 0:Ut.data)??[],modules:H})}):h.jsxs("div",{className:"flex min-h-0 flex-1",children:[h.jsx($u,{modules:H,completed:V,steps:ne,selectedId:f,onSelect:nt,onSelectIntro:Th()?()=>c(Pn):void 0,expandedSession:x,onToggleSession:Fe=>m(Fe||null)}),h.jsx("main",{className:"surface-light min-w-0 flex-1 overflow-auto",style:(ce==null?void 0:ce.tier)==="T1"?{backgroundImage:"radial-gradient(130% 55% at 50% 0%, rgba(99, 89, 255, 0.12), transparent 70%)"}:(ce==null?void 0:ce.tier)==="T2"?{backgroundImage:"radial-gradient(130% 55% at 50% 0%, rgba(255, 200, 6, 0.18), transparent 70%)"}:void 0,children:Ot?h.jsx($2,{onDone:()=>{const Fe=ie[0];Fe&&(c(Fe.id),m(Fe.session))},onReachedEnd:()=>Me(Pn,"concept")}):ce?h.jsx(J2,{task:ce,completed:V.has(ce.id),loading:w,storefrontUrl:U,onTry:Ke,steps:ne[ce.id],onStep:Me},ce.id):h.jsx("div",{className:"grid h-full place-items-center p-8 text-center text-[var(--color-text-muted)]",children:E?"Select a task from the sidebar to get started.":"Connecting…"})}),z?h.jsxs("aside",{className:"flex w-[440px] flex-shrink-0 flex-col border-l border-[var(--color-brd)] bg-[var(--color-bg-panel)]",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-[var(--color-brd)] px-4 py-2.5",children:[h.jsx("span",{className:"text-sm font-medium",children:"HTTP Inspector"}),h.jsx("button",{onClick:()=>O(!1),className:"text-[var(--color-text-muted)] hover:text-[var(--color-text)]","aria-label":"Close inspector",children:h.jsx(Nh,{size:16})})]}),h.jsx("div",{className:"min-h-0 flex-1 overflow-auto",children:h.jsx(e6,{state:k,loading:w})})]}):null]})]})}Au.createRoot(document.getElementById("root")).render(h.jsx(de.StrictMode,{children:h.jsx(o6,{})}));
