(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function _s(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const de={},ct=[],pn=()=>{},to=()=>!1,_i=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ss=e=>e.startsWith("onUpdate:"),Ee=Object.assign,Ts=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},el=Object.prototype.hasOwnProperty,oe=(e,n)=>el.call(e,n),N=Array.isArray,ut=e=>Kt(e)==="[object Map]",bt=e=>Kt(e)==="[object Set]",rr=e=>Kt(e)==="[object Date]",V=e=>typeof e=="function",we=e=>typeof e=="string",gn=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",io=e=>(le(e)||V(e))&&V(e.then)&&V(e.catch),so=Object.prototype.toString,Kt=e=>so.call(e),nl=e=>Kt(e).slice(8,-1),ro=e=>Kt(e)==="[object Object]",Cs=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xt=_s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Si=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},tl=/-\w/g,On=Si(e=>e.replace(tl,n=>n.slice(1).toUpperCase())),il=/\B([A-Z])/g,nt=Si(e=>e.replace(il,"-$1").toLowerCase()),oo=Si(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ki=Si(e=>e?`on${oo(e)}`:""),Nn=(e,n)=>!Object.is(e,n),oi=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},ao=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},lo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},sl=e=>{const n=we(e)?Number(e):NaN;return isNaN(n)?e:n};let or;const Ti=()=>or||(or=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ci(e){if(N(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=we(i)?ll(i):Ci(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(we(e)||le(e))return e}const rl=/;(?![^(]*\))/g,ol=/:([^]+)/,al=/\/\*[^]*?\*\//g;function ll(e){const n={};return e.replace(al,"").split(rl).forEach(t=>{if(t){const i=t.split(ol);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function dt(e){let n="";if(we(e))n=e;else if(N(e))for(let t=0;t<e.length;t++){const i=dt(e[t]);i&&(n+=i+" ")}else if(le(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ul=_s(cl);function co(e){return!!e||e===""}function dl(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=jt(e[i],n[i]);return t}function jt(e,n){if(e===n)return!0;let t=rr(e),i=rr(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=gn(e),i=gn(n),t||i)return e===n;if(t=N(e),i=N(n),t||i)return t&&i?dl(e,n):!1;if(t=le(e),i=le(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=n.hasOwnProperty(o);if(a&&!c||!a&&c||!jt(e[o],n[o]))return!1}}return String(e)===String(n)}function Es(e,n){return e.findIndex(t=>jt(t,n))}const uo=e=>!!(e&&e.__v_isRef===!0),re=e=>we(e)?e:e==null?"":N(e)||le(e)&&(e.toString===so||!V(e.toString))?uo(e)?re(e.value):JSON.stringify(e,fo,2):String(e),fo=(e,n)=>uo(n)?fo(e,n.value):ut(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[ji(i,r)+" =>"]=s,t),{})}:bt(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ji(t))}:gn(n)?ji(n):le(n)&&!N(n)&&!ro(n)?String(n):n,ji=(e,n="")=>{var t;return gn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let Ke;class fl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ke,!n&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Ke;try{return Ke=this,n()}finally{Ke=t}}}on(){++this._on===1&&(this.prevScope=Ke,Ke=this)}off(){this._on>0&&--this._on===0&&(Ke=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hl(){return Ke}let he;const Vi=new WeakSet;class ho{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ke&&Ke.active&&Ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vi.has(this)&&(Vi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||po(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ar(this),go(this);const n=he,t=rn;he=this,rn=!0;try{return this.fn()}finally{bo(this),he=n,rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Ls(n);this.deps=this.depsTail=void 0,ar(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rs(this)&&this.run()}get dirty(){return rs(this)}}let mo=0,Mt,Lt;function po(e,n=!1){if(e.flags|=8,n){e.next=Lt,Lt=e;return}e.next=Mt,Mt=e}function xs(){mo++}function Ms(){if(--mo>0)return;if(Lt){let n=Lt;for(Lt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Mt;){let n=Mt;for(Mt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function go(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function bo(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ls(i),ml(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function rs(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(vo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function vo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rt)||(e.globalVersion=Rt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!rs(e))))return;e.flags|=2;const n=e.dep,t=he,i=rn;he=e,rn=!0;try{go(e);const s=e.fn(e._value);(n.version===0||Nn(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{he=t,rn=i,bo(e),e.flags&=-3}}function Ls(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ls(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function ml(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let rn=!0;const yo=[];function Cn(){yo.push(rn),rn=!1}function En(){const e=yo.pop();rn=e===void 0?!0:e}function ar(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=he;he=void 0;try{n()}finally{he=t}}}let Rt=0;class pl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zs{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!he||!rn||he===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==he)t=this.activeLink=new pl(he,this),he.deps?(t.prevDep=he.depsTail,he.depsTail.nextDep=t,he.depsTail=t):he.deps=he.depsTail=t,wo(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=he.depsTail,t.nextDep=void 0,he.depsTail.nextDep=t,he.depsTail=t,he.deps===t&&(he.deps=i)}return t}trigger(n){this.version++,Rt++,this.notify(n)}notify(n){xs();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ms()}}}function wo(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)wo(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const os=new WeakMap,Qn=Symbol(""),as=Symbol(""),Ft=Symbol("");function Ae(e,n,t){if(rn&&he){let i=os.get(e);i||os.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new zs),s.map=i,s.key=t),s.track()}}function Sn(e,n,t,i,s,r){const o=os.get(e);if(!o){Rt++;return}const a=c=>{c&&c.trigger()};if(xs(),n==="clear")o.forEach(a);else{const c=N(e),m=c&&Cs(t);if(c&&t==="length"){const d=Number(i);o.forEach((p,S)=>{(S==="length"||S===Ft||!gn(S)&&S>=d)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),m&&a(o.get(Ft)),n){case"add":c?m&&a(o.get("length")):(a(o.get(Qn)),ut(e)&&a(o.get(as)));break;case"delete":c||(a(o.get(Qn)),ut(e)&&a(o.get(as)));break;case"set":ut(e)&&a(o.get(Qn));break}}Ms()}function rt(e){const n=ie(e);return n===e?n:(Ae(n,"iterate",Ft),nn(e)?n:n.map(on))}function Ei(e){return Ae(e=ie(e),"iterate",Ft),e}function Pn(e,n){return xn(e)?et(e)?gt(on(n)):gt(n):on(n)}const gl={__proto__:null,[Symbol.iterator](){return Gi(this,Symbol.iterator,e=>Pn(this,e))},concat(...e){return rt(this).concat(...e.map(n=>N(n)?rt(n):n))},entries(){return Gi(this,"entries",e=>(e[1]=Pn(this,e[1]),e))},every(e,n){return yn(this,"every",e,n,void 0,arguments)},filter(e,n){return yn(this,"filter",e,n,t=>t.map(i=>Pn(this,i)),arguments)},find(e,n){return yn(this,"find",e,n,t=>Pn(this,t),arguments)},findIndex(e,n){return yn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return yn(this,"findLast",e,n,t=>Pn(this,t),arguments)},findLastIndex(e,n){return yn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return yn(this,"forEach",e,n,void 0,arguments)},includes(...e){return $i(this,"includes",e)},indexOf(...e){return $i(this,"indexOf",e)},join(e){return rt(this).join(e)},lastIndexOf(...e){return $i(this,"lastIndexOf",e)},map(e,n){return yn(this,"map",e,n,void 0,arguments)},pop(){return St(this,"pop")},push(...e){return St(this,"push",e)},reduce(e,...n){return lr(this,"reduce",e,n)},reduceRight(e,...n){return lr(this,"reduceRight",e,n)},shift(){return St(this,"shift")},some(e,n){return yn(this,"some",e,n,void 0,arguments)},splice(...e){return St(this,"splice",e)},toReversed(){return rt(this).toReversed()},toSorted(e){return rt(this).toSorted(e)},toSpliced(...e){return rt(this).toSpliced(...e)},unshift(...e){return St(this,"unshift",e)},values(){return Gi(this,"values",e=>Pn(this,e))}};function Gi(e,n,t){const i=Ei(e),s=i[n]();return i!==e&&!nn(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const bl=Array.prototype;function yn(e,n,t,i,s,r){const o=Ei(e),a=o!==e&&!nn(e),c=o[n];if(c!==bl[n]){const p=c.apply(e,r);return a?on(p):p}let m=t;o!==e&&(a?m=function(p,S){return t.call(this,Pn(e,p),S,e)}:t.length>2&&(m=function(p,S){return t.call(this,p,S,e)}));const d=c.call(o,m,i);return a&&s?s(d):d}function lr(e,n,t,i){const s=Ei(e);let r=t;return s!==e&&(nn(e)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,e)}):r=function(o,a,c){return t.call(this,o,Pn(e,a),c,e)}),s[n](r,...i)}function $i(e,n,t){const i=ie(e);Ae(i,"iterate",Ft);const s=i[n](...t);return(s===-1||s===!1)&&Is(t[0])?(t[0]=ie(t[0]),i[n](...t)):s}function St(e,n,t=[]){Cn(),xs();const i=ie(e)[n].apply(e,t);return Ms(),En(),i}const vl=_s("__proto__,__v_isRef,__isVue"),ko=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(gn));function yl(e){gn(e)||(e=String(e));const n=ie(this);return Ae(n,"has",e),n.hasOwnProperty(e)}class _o{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Ll:Eo:r?Co:To).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const o=N(n);if(!s){let c;if(o&&(c=gl[t]))return c;if(t==="hasOwnProperty")return yl}const a=Reflect.get(n,t,Ie(n)?n:i);if((gn(t)?ko.has(t):vl(t))||(s||Ae(n,"get",t),r))return a;if(Ie(a)){const c=o&&Cs(t)?a:a.value;return s&&le(c)?cs(c):c}return le(a)?s?cs(a):ft(a):a}}class So extends _o{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const o=N(n)&&Cs(t);if(!this._isShallow){const m=xn(r);if(!nn(i)&&!xn(i)&&(r=ie(r),i=ie(i)),!o&&Ie(r)&&!Ie(i))return m||(r.value=i),!0}const a=o?Number(t)<n.length:oe(n,t),c=Reflect.set(n,t,i,Ie(n)?n:s);return n===ie(s)&&(a?Nn(i,r)&&Sn(n,"set",t,i):Sn(n,"add",t,i)),c}deleteProperty(n,t){const i=oe(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&Sn(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!gn(t)||!ko.has(t))&&Ae(n,"has",t),i}ownKeys(n){return Ae(n,"iterate",N(n)?"length":Qn),Reflect.ownKeys(n)}}class wl extends _o{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const kl=new So,_l=new wl,Sl=new So(!0);const ls=e=>e,Yt=e=>Reflect.getPrototypeOf(e);function Tl(e,n,t){return function(...i){const s=this.__v_raw,r=ie(s),o=ut(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,m=s[e](...i),d=t?ls:n?gt:on;return!n&&Ae(r,"iterate",c?as:Qn),{next(){const{value:p,done:S}=m.next();return S?{value:p,done:S}:{value:a?[d(p[0]),d(p[1])]:d(p),done:S}},[Symbol.iterator](){return this}}}}function Zt(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Cl(e,n){const t={get(s){const r=this.__v_raw,o=ie(r),a=ie(s);e||(Nn(s,a)&&Ae(o,"get",s),Ae(o,"get",a));const{has:c}=Yt(o),m=n?ls:e?gt:on;if(c.call(o,s))return m(r.get(s));if(c.call(o,a))return m(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Ae(ie(s),"iterate",Qn),s.size},has(s){const r=this.__v_raw,o=ie(r),a=ie(s);return e||(Nn(s,a)&&Ae(o,"has",s),Ae(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=ie(a),m=n?ls:e?gt:on;return!e&&Ae(c,"iterate",Qn),a.forEach((d,p)=>s.call(r,m(d),m(p),o))}};return Ee(t,e?{add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear")}:{add(s){!n&&!nn(s)&&!xn(s)&&(s=ie(s));const r=ie(this);return Yt(r).has.call(r,s)||(r.add(s),Sn(r,"add",s,s)),this},set(s,r){!n&&!nn(r)&&!xn(r)&&(r=ie(r));const o=ie(this),{has:a,get:c}=Yt(o);let m=a.call(o,s);m||(s=ie(s),m=a.call(o,s));const d=c.call(o,s);return o.set(s,r),m?Nn(r,d)&&Sn(o,"set",s,r):Sn(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:a}=Yt(r);let c=o.call(r,s);c||(s=ie(s),c=o.call(r,s)),a&&a.call(r,s);const m=r.delete(s);return c&&Sn(r,"delete",s,void 0),m},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&Sn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Tl(s,e,n)}),t}function As(e,n){const t=Cl(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(oe(t,s)&&s in i?t:i,s,r)}const El={get:As(!1,!1)},xl={get:As(!1,!0)},Ml={get:As(!0,!1)};const To=new WeakMap,Co=new WeakMap,Eo=new WeakMap,Ll=new WeakMap;function zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Al(e){return e.__v_skip||!Object.isExtensible(e)?0:zl(nl(e))}function ft(e){return xn(e)?e:Ps(e,!1,kl,El,To)}function Pl(e){return Ps(e,!1,Sl,xl,Co)}function cs(e){return Ps(e,!0,_l,Ml,Eo)}function Ps(e,n,t,i,s){if(!le(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=Al(e);if(r===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,r===2?i:t);return s.set(e,a),a}function et(e){return xn(e)?et(e.__v_raw):!!(e&&e.__v_isReactive)}function xn(e){return!!(e&&e.__v_isReadonly)}function nn(e){return!!(e&&e.__v_isShallow)}function Is(e){return e?!!e.__v_raw:!1}function ie(e){const n=e&&e.__v_raw;return n?ie(n):e}function Il(e){return!oe(e,"__v_skip")&&Object.isExtensible(e)&&ao(e,"__v_skip",!0),e}const on=e=>le(e)?ft(e):e,gt=e=>le(e)?cs(e):e;function Ie(e){return e?e.__v_isRef===!0:!1}function ze(e){return Rl(e,!1)}function Rl(e,n){return Ie(e)?e:new Fl(e,n)}class Fl{constructor(n,t){this.dep=new zs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ie(n),this._value=t?n:on(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||nn(n)||xn(n);n=i?n:ie(n),Nn(n,t)&&(this._rawValue=n,this._value=i?n:on(n),this.dep.trigger())}}function Hl(e){return Ie(e)?e.value:e}const Dl={get:(e,n,t)=>n==="__v_raw"?e:Hl(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return Ie(s)&&!Ie(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function xo(e){return et(e)?e:new Proxy(e,Dl)}class Nl{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new zs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return po(this,!0),!0}get value(){const n=this.dep.track();return vo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Ol(e,n,t=!1){let i,s;return V(e)?i=e:(i=e.get,s=e.set),new Nl(i,s,t)}const Qt={},fi=new WeakMap;let Xn;function Wl(e,n=!1,t=Xn){if(t){let i=fi.get(t);i||fi.set(t,i=[]),i.push(e)}}function Bl(e,n,t=de){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=t,m=I=>s?I:nn(I)||s===!1||s===0?Tn(I,1):Tn(I);let d,p,S,T,A=!1,O=!1;if(Ie(e)?(p=()=>e.value,A=nn(e)):et(e)?(p=()=>m(e),A=!0):N(e)?(O=!0,A=e.some(I=>et(I)||nn(I)),p=()=>e.map(I=>{if(Ie(I))return I.value;if(et(I))return m(I);if(V(I))return c?c(I,2):I()})):V(e)?n?p=c?()=>c(e,2):e:p=()=>{if(S){Cn();try{S()}finally{En()}}const I=Xn;Xn=d;try{return c?c(e,3,[T]):e(T)}finally{Xn=I}}:p=pn,n&&s){const I=p,Q=s===!0?1/0:s;p=()=>Tn(I(),Q)}const ae=hl(),B=()=>{d.stop(),ae&&ae.active&&Ts(ae.effects,d)};if(r&&n){const I=n;n=(...Q)=>{I(...Q),B()}}let P=O?new Array(e.length).fill(Qt):Qt;const U=I=>{if(!(!(d.flags&1)||!d.dirty&&!I))if(n){const Q=d.run();if(s||A||(O?Q.some((pe,G)=>Nn(pe,P[G])):Nn(Q,P))){S&&S();const pe=Xn;Xn=d;try{const G=[Q,P===Qt?void 0:O&&P[0]===Qt?[]:P,T];P=Q,c?c(n,3,G):n(...G)}finally{Xn=pe}}}else d.run()};return a&&a(U),d=new ho(p),d.scheduler=o?()=>o(U,!1):U,T=I=>Wl(I,!1,d),S=d.onStop=()=>{const I=fi.get(d);if(I){if(c)c(I,4);else for(const Q of I)Q();fi.delete(d)}},n?i?U(!0):P=d.run():o?o(U.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function Tn(e,n=1/0,t){if(n<=0||!le(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ie(e))Tn(e.value,n,t);else if(N(e))for(let i=0;i<e.length;i++)Tn(e[i],n,t);else if(bt(e)||ut(e))e.forEach(i=>{Tn(i,n,t)});else if(ro(e)){for(const i in e)Tn(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Tn(e[i],n,t)}return e}function Vt(e,n,t,i){try{return i?e(...i):e()}catch(s){xi(s,n,t)}}function an(e,n,t,i){if(V(e)){const s=Vt(e,n,t,i);return s&&io(s)&&s.catch(r=>{xi(r,n,t)}),s}if(N(e)){const s=[];for(let r=0;r<e.length;r++)s.push(an(e[r],n,t,i));return s}}function xi(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||de;if(n){let a=n.parent;const c=n.proxy,m=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](e,c,m)===!1)return}a=a.parent}if(r){Cn(),Vt(r,null,10,[e,c,m]),En();return}}Kl(e,t,s,i,o)}function Kl(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const He=[];let hn=-1;const ht=[];let In=null,lt=0;const Mo=Promise.resolve();let hi=null;function Ze(e){const n=hi||Mo;return e?n.then(this?e.bind(this):e):n}function jl(e){let n=hn+1,t=He.length;for(;n<t;){const i=n+t>>>1,s=He[i],r=Ht(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function Rs(e){if(!(e.flags&1)){const n=Ht(e),t=He[He.length-1];!t||!(e.flags&2)&&n>=Ht(t)?He.push(e):He.splice(jl(n),0,e),e.flags|=1,Lo()}}function Lo(){hi||(hi=Mo.then(Ao))}function Vl(e){N(e)?ht.push(...e):In&&e.id===-1?In.splice(lt+1,0,e):e.flags&1||(ht.push(e),e.flags|=1),Lo()}function cr(e,n,t=hn+1){for(;t<He.length;t++){const i=He[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;He.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function zo(e){if(ht.length){const n=[...new Set(ht)].sort((t,i)=>Ht(t)-Ht(i));if(ht.length=0,In){In.push(...n);return}for(In=n,lt=0;lt<In.length;lt++){const t=In[lt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}In=null,lt=0}}const Ht=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ao(e){try{for(hn=0;hn<He.length;hn++){const n=He[hn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Vt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;hn<He.length;hn++){const n=He[hn];n&&(n.flags&=-2)}hn=-1,He.length=0,zo(),hi=null,(He.length||ht.length)&&Ao()}}let en=null,Po=null;function mi(e){const n=en;return en=e,Po=e&&e.type.__scopeId||null,n}function us(e,n=en,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&bi(-1);const r=mi(n);let o;try{o=e(...s)}finally{mi(r),i._d&&bi(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ur(e,n){if(en===null)return e;const t=Ri(en),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,o,a,c=de]=n[s];r&&(V(r)&&(r={mounted:r,updated:r}),r.deep&&Tn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function $n(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Cn(),an(c,t,8,[e.el,a,e,n]),En())}}const Gl=Symbol("_vte"),Io=e=>e.__isTeleport,_n=Symbol("_leaveCb"),ei=Symbol("_enterCb");function $l(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zi(()=>{e.isMounted=!0}),Ai(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],Ro={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},Fo=e=>{const n=e.subTree;return n.component?Fo(n.component):n},Ul={name:"BaseTransition",props:Ro,setup(e,{slots:n}){const t=aa(),i=$l();return()=>{const s=n.default&&No(n.default(),!0);if(!s||!s.length)return;const r=Ho(s),o=ie(e),{mode:a}=o;if(i.isLeaving)return Ui(r);const c=dr(r);if(!c)return Ui(r);let m=ds(c,o,i,t,p=>m=p);c.type!==De&&Dt(c,m);let d=t.subTree&&dr(t.subTree);if(d&&d.type!==De&&!Yn(d,c)&&Fo(t).type!==De){let p=ds(d,o,i,t);if(Dt(d,p),a==="out-in"&&c.type!==De)return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,d=void 0},Ui(r);a==="in-out"&&c.type!==De?p.delayLeave=(S,T,A)=>{const O=Do(i,d);O[String(d.key)]=d,S[_n]=()=>{T(),S[_n]=void 0,delete m.delayedLeave,d=void 0},m.delayedLeave=()=>{A(),delete m.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function Ho(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==De){n=t;break}}return n}const Jl=Ul;function Do(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function ds(e,n,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:m,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:S,onLeave:T,onAfterLeave:A,onLeaveCancelled:O,onBeforeAppear:ae,onAppear:B,onAfterAppear:P,onAppearCancelled:U}=n,I=String(e.key),Q=Do(t,e),pe=(D,K)=>{D&&an(D,i,9,K)},G=(D,K)=>{const j=K[1];pe(D,K),N(D)?D.every(L=>L.length<=1)&&j():D.length<=1&&j()},$={mode:o,persisted:a,beforeEnter(D){let K=c;if(!t.isMounted)if(r)K=ae||c;else return;D[_n]&&D[_n](!0);const j=Q[I];j&&Yn(e,j)&&j.el[_n]&&j.el[_n](),pe(K,[D])},enter(D){let K=m,j=d,L=p;if(!t.isMounted)if(r)K=B||m,j=P||d,L=U||p;else return;let ne=!1;const ke=D[ei]=me=>{ne||(ne=!0,me?pe(L,[D]):pe(j,[D]),$.delayedLeave&&$.delayedLeave(),D[ei]=void 0)};K?G(K,[D,ke]):ke()},leave(D,K){const j=String(e.key);if(D[ei]&&D[ei](!0),t.isUnmounting)return K();pe(S,[D]);let L=!1;const ne=D[_n]=ke=>{L||(L=!0,K(),ke?pe(O,[D]):pe(A,[D]),D[_n]=void 0,Q[j]===e&&delete Q[j])};Q[j]=e,T?G(T,[D,ne]):ne()},clone(D){const K=ds(D,n,t,i,s);return s&&s(K),K}};return $}function Ui(e){if(Mi(e))return e=Wn(e),e.children=null,e}function dr(e){if(!Mi(e))return Io(e.type)&&e.children?Ho(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&V(t.default))return t.default()}}function Dt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Dt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function No(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===je?(o.patchFlag&128&&s++,i=i.concat(No(o.children,n,a))):(n||o.type!==De)&&i.push(a!=null?Wn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Oo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const pi=new WeakMap;function zt(e,n,t,i,s=!1){if(N(e)){e.forEach((A,O)=>zt(A,n&&(N(n)?n[O]:n),t,i,s));return}if(At(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zt(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?Ri(i.component):i.el,o=s?null:r,{i:a,r:c}=e,m=n&&n.r,d=a.refs===de?a.refs={}:a.refs,p=a.setupState,S=ie(p),T=p===de?to:A=>oe(S,A);if(m!=null&&m!==c){if(fr(n),we(m))d[m]=null,T(m)&&(p[m]=null);else if(Ie(m)){m.value=null;const A=n;A.k&&(d[A.k]=null)}}if(V(c))Vt(c,a,12,[o,d]);else{const A=we(c),O=Ie(c);if(A||O){const ae=()=>{if(e.f){const B=A?T(c)?p[c]:d[c]:c.value;if(s)N(B)&&Ts(B,r);else if(N(B))B.includes(r)||B.push(r);else if(A)d[c]=[r],T(c)&&(p[c]=d[c]);else{const P=[r];c.value=P,e.k&&(d[e.k]=P)}}else A?(d[c]=o,T(c)&&(p[c]=o)):O&&(c.value=o,e.k&&(d[e.k]=o))};if(o){const B=()=>{ae(),pi.delete(e)};B.id=-1,pi.set(e,B),Ge(B,t)}else fr(e),ae()}}}function fr(e){const n=pi.get(e);n&&(n.flags|=8,pi.delete(e))}Ti().requestIdleCallback;Ti().cancelIdleCallback;const At=e=>!!e.type.__asyncLoader,Mi=e=>e.type.__isKeepAlive;function ql(e,n){Wo(e,"a",n)}function Xl(e,n){Wo(e,"da",n)}function Wo(e,n,t=Ne){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Li(n,i,t),t){let s=t.parent;for(;s&&s.parent;)Mi(s.parent.vnode)&&Yl(i,n,t,s),s=s.parent}}function Yl(e,n,t,i){const s=Li(n,e,i,!0);Bo(()=>{Ts(i[n],s)},t)}function Li(e,n,t=Ne,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{Cn();const a=Gt(t),c=an(n,t,e,o);return a(),En(),c});return i?s.unshift(r):s.push(r),r}}const Mn=e=>(n,t=Ne)=>{(!Ot||e==="sp")&&Li(e,(...i)=>n(...i),t)},Zl=Mn("bm"),zi=Mn("m"),Ql=Mn("bu"),ec=Mn("u"),Ai=Mn("bum"),Bo=Mn("um"),nc=Mn("sp"),tc=Mn("rtg"),ic=Mn("rtc");function sc(e,n=Ne){Li("ec",e,n)}const rc=Symbol.for("v-ndc");function ni(e,n,t,i){let s;const r=t,o=N(e);if(o||we(e)){const a=o&&et(e);let c=!1,m=!1;a&&(c=!nn(e),m=xn(e),e=Ei(e)),s=new Array(e.length);for(let d=0,p=e.length;d<p;d++)s[d]=n(c?m?gt(on(e[d])):on(e[d]):e[d],d,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=n(a+1,a,void 0,r)}else if(le(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>n(a,c,void 0,r));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,m=a.length;c<m;c++){const d=a[c];s[c]=n(e[d],d,c,r)}}else s=[];return s}const fs=e=>e?la(e)?Ri(e):fs(e.parent):null,Pt=Ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>fs(e.parent),$root:e=>fs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>e.f||(e.f=()=>{Rs(e.update)}),$nextTick:e=>e.n||(e.n=Ze.bind(e.proxy)),$watch:e=>bc.bind(e)}),Ji=(e,n)=>e!==de&&!e.__isScriptSetup&&oe(e,n),oc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=e;if(n[0]!=="$"){const S=o[n];if(S!==void 0)switch(S){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(Ji(i,n))return o[n]=1,i[n];if(s!==de&&oe(s,n))return o[n]=2,s[n];if(oe(r,n))return o[n]=3,r[n];if(t!==de&&oe(t,n))return o[n]=4,t[n];hs&&(o[n]=0)}}const m=Pt[n];let d,p;if(m)return n==="$attrs"&&Ae(e.attrs,"get",""),m(e);if((d=a.__cssModules)&&(d=d[n]))return d;if(t!==de&&oe(t,n))return o[n]=4,t[n];if(p=c.config.globalProperties,oe(p,n))return p[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return Ji(s,n)?(s[n]=t,!0):i!==de&&oe(i,n)?(i[n]=t,!0):oe(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let c;return!!(t[a]||e!==de&&a[0]!=="$"&&oe(e,a)||Ji(n,a)||oe(r,a)||oe(i,a)||oe(Pt,a)||oe(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:oe(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function hr(e){return N(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let hs=!0;function ac(e){const n=jo(e),t=e.proxy,i=e.ctx;hs=!1,n.beforeCreate&&mr(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:m,created:d,beforeMount:p,mounted:S,beforeUpdate:T,updated:A,activated:O,deactivated:ae,beforeDestroy:B,beforeUnmount:P,destroyed:U,unmounted:I,render:Q,renderTracked:pe,renderTriggered:G,errorCaptured:$,serverPrefetch:D,expose:K,inheritAttrs:j,components:L,directives:ne,filters:ke}=n;if(m&&lc(m,i,null),o)for(const J in o){const se=o[J];V(se)&&(i[J]=se.bind(t))}if(s){const J=s.call(t,t);le(J)&&(e.data=ft(J))}if(hs=!0,r)for(const J in r){const se=r[J],Ue=V(se)?se.bind(t,t):V(se.get)?se.get.bind(t,t):pn,Ln=!V(se)&&V(se.set)?se.set.bind(t):pn,ln=q({get:Ue,set:Ln});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>ln.value,set:ye=>ln.value=ye})}if(a)for(const J in a)Ko(a[J],i,t,J);if(c){const J=V(c)?c.call(t):c;Reflect.ownKeys(J).forEach(se=>{mc(se,J[se])})}d&&mr(d,e,"c");function ce(J,se){N(se)?se.forEach(Ue=>J(Ue.bind(t))):se&&J(se.bind(t))}if(ce(Zl,p),ce(zi,S),ce(Ql,T),ce(ec,A),ce(ql,O),ce(Xl,ae),ce(sc,$),ce(ic,pe),ce(tc,G),ce(Ai,P),ce(Bo,I),ce(nc,D),N(K))if(K.length){const J=e.exposed||(e.exposed={});K.forEach(se=>{Object.defineProperty(J,se,{get:()=>t[se],set:Ue=>t[se]=Ue,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===pn&&(e.render=Q),j!=null&&(e.inheritAttrs=j),L&&(e.components=L),ne&&(e.directives=ne),D&&Oo(e)}function lc(e,n,t=pn){N(e)&&(e=ms(e));for(const i in e){const s=e[i];let r;le(s)?"default"in s?r=ai(s.from||i,s.default,!0):r=ai(s.from||i):r=ai(s),Ie(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[i]=r}}function mr(e,n,t){an(N(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ko(e,n,t,i){let s=i.includes(".")?$o(t,i):()=>t[i];if(we(e)){const r=n[e];V(r)&&Qe(s,r)}else if(V(e))Qe(s,e.bind(t));else if(le(e))if(N(e))e.forEach(r=>Ko(r,n,t,i));else{const r=V(e.handler)?e.handler.bind(t):n[e.handler];V(r)&&Qe(s,r,e)}}function jo(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(n);let c;return a?c=a:!s.length&&!t&&!i?c=n:(c={},s.length&&s.forEach(m=>gi(c,m,o,!0)),gi(c,n,o)),le(n)&&r.set(n,c),c}function gi(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&gi(e,r,t,!0),s&&s.forEach(o=>gi(e,o,t,!0));for(const o in n)if(!(i&&o==="expose")){const a=cc[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const cc={data:pr,props:gr,emits:gr,methods:Ct,computed:Ct,beforeCreate:Fe,created:Fe,beforeMount:Fe,mounted:Fe,beforeUpdate:Fe,updated:Fe,beforeDestroy:Fe,beforeUnmount:Fe,destroyed:Fe,unmounted:Fe,activated:Fe,deactivated:Fe,errorCaptured:Fe,serverPrefetch:Fe,components:Ct,directives:Ct,watch:dc,provide:pr,inject:uc};function pr(e,n){return n?e?function(){return Ee(V(e)?e.call(this,this):e,V(n)?n.call(this,this):n)}:n:e}function uc(e,n){return Ct(ms(e),ms(n))}function ms(e){if(N(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Fe(e,n){return e?[...new Set([].concat(e,n))]:n}function Ct(e,n){return e?Ee(Object.create(null),e,n):n}function gr(e,n){return e?N(e)&&N(n)?[...new Set([...e,...n])]:Ee(Object.create(null),hr(e),hr(n??{})):n}function dc(e,n){if(!e)return n;if(!n)return e;const t=Ee(Object.create(null),e);for(const i in n)t[i]=Fe(e[i],n[i]);return t}function Vo(){return{app:null,config:{isNativeTag:to,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fc=0;function hc(e,n){return function(i,s=null){V(i)||(i=Ee({},i)),s!=null&&!le(s)&&(s=null);const r=Vo(),o=new WeakSet,a=[];let c=!1;const m=r.app={_uid:fc++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Yc,get config(){return r.config},set config(d){},use(d,...p){return o.has(d)||(d&&V(d.install)?(o.add(d),d.install(m,...p)):V(d)&&(o.add(d),d(m,...p))),m},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),m},component(d,p){return p?(r.components[d]=p,m):r.components[d]},directive(d,p){return p?(r.directives[d]=p,m):r.directives[d]},mount(d,p,S){if(!c){const T=m._ceVNode||Pe(i,s);return T.appContext=r,S===!0?S="svg":S===!1&&(S=void 0),e(T,d,S),c=!0,m._container=d,d.__vue_app__=m,Ri(T.component)}},onUnmount(d){a.push(d)},unmount(){c&&(an(a,m._instance,16),e(null,m._container),delete m._container.__vue_app__)},provide(d,p){return r.provides[d]=p,m},runWithContext(d){const p=mt;mt=m;try{return d()}finally{mt=p}}};return m}}let mt=null;function mc(e,n){if(Ne){let t=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===t&&(t=Ne.provides=Object.create(i)),t[e]=n}}function ai(e,n,t=!1){const i=aa();if(i||mt){let s=mt?mt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&V(n)?n.call(i&&i.proxy):n}}const pc=Symbol.for("v-scx"),gc=()=>ai(pc);function Qe(e,n,t){return Go(e,n,t)}function Go(e,n,t=de){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ee({},t),c=n&&i||!n&&r!=="post";let m;if(Ot){if(r==="sync"){const T=gc();m=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=pn,T.resume=pn,T.pause=pn,T}}const d=Ne;a.call=(T,A,O)=>an(T,d,A,O);let p=!1;r==="post"?a.scheduler=T=>{Ge(T,d&&d.suspense)}:r!=="sync"&&(p=!0,a.scheduler=(T,A)=>{A?T():Rs(T)}),a.augmentJob=T=>{n&&(T.flags|=4),p&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const S=Bl(e,n,a);return Ot&&(m?m.push(S):c&&S()),S}function bc(e,n,t){const i=this.proxy,s=we(e)?e.includes(".")?$o(i,e):()=>i[e]:e.bind(i,i);let r;V(n)?r=n:(r=n.handler,t=n);const o=Gt(this),a=Go(s,r.bind(i),t);return o(),a}function $o(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const vc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${On(n)}Modifiers`]||e[`${nt(n)}Modifiers`];function yc(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||de;let s=t;const r=n.startsWith("update:"),o=r&&vc(i,n.slice(7));o&&(o.trim&&(s=t.map(d=>we(d)?d.trim():d)),o.number&&(s=t.map(lo)));let a,c=i[a=Ki(n)]||i[a=Ki(On(n))];!c&&r&&(c=i[a=Ki(nt(n))]),c&&an(c,e,6,s);const m=i[a+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,an(m,e,6,s)}}const wc=new WeakMap;function Uo(e,n,t=!1){const i=t?wc:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!V(e)){const c=m=>{const d=Uo(m,n,!0);d&&(a=!0,Ee(o,d))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(le(e)&&i.set(e,null),null):(N(r)?r.forEach(c=>o[c]=null):Ee(o,r),le(e)&&i.set(e,o),o)}function Pi(e,n){return!e||!_i(n)?!1:(n=n.slice(2).replace(/Once$/,""),oe(e,n[0].toLowerCase()+n.slice(1))||oe(e,nt(n))||oe(e,n))}function br(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:m,renderCache:d,props:p,data:S,setupState:T,ctx:A,inheritAttrs:O}=e,ae=mi(e);let B,P;try{if(t.shapeFlag&4){const I=s||i,Q=I;B=mn(m.call(Q,I,d,p,T,S,A)),P=a}else{const I=n;B=mn(I.length>1?I(p,{attrs:a,slots:o,emit:c}):I(p,null)),P=n.props?a:kc(a)}}catch(I){It.length=0,xi(I,e,1),B=Pe(De)}let U=B;if(P&&O!==!1){const I=Object.keys(P),{shapeFlag:Q}=U;I.length&&Q&7&&(r&&I.some(Ss)&&(P=_c(P,r)),U=Wn(U,P,!1,!0))}return t.dirs&&(U=Wn(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(t.dirs):t.dirs),t.transition&&Dt(U,t.transition),B=U,mi(ae),B}const kc=e=>{let n;for(const t in e)(t==="class"||t==="style"||_i(t))&&((n||(n={}))[t]=e[t]);return n},_c=(e,n)=>{const t={};for(const i in e)(!Ss(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function Sc(e,n,t){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:c}=n,m=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?vr(i,o,m):!!o;if(c&8){const d=n.dynamicProps;for(let p=0;p<d.length;p++){const S=d[p];if(o[S]!==i[S]&&!Pi(m,S))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?vr(i,o,m):!0:!!o;return!1}function vr(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!Pi(t,r))return!0}return!1}function Tc({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const Jo={},qo=()=>Object.create(Jo),Xo=e=>Object.getPrototypeOf(e)===Jo;function Cc(e,n,t,i=!1){const s={},r=qo();e.propsDefaults=Object.create(null),Yo(e,n,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);t?e.props=i?s:Pl(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ec(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=ie(s),[c]=e.propsOptions;let m=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let S=d[p];if(Pi(e.emitsOptions,S))continue;const T=n[S];if(c)if(oe(r,S))T!==r[S]&&(r[S]=T,m=!0);else{const A=On(S);s[A]=ps(c,a,A,T,e,!1)}else T!==r[S]&&(r[S]=T,m=!0)}}}else{Yo(e,n,s,r)&&(m=!0);let d;for(const p in a)(!n||!oe(n,p)&&((d=nt(p))===p||!oe(n,d)))&&(c?t&&(t[p]!==void 0||t[d]!==void 0)&&(s[p]=ps(c,a,p,void 0,e,!0)):delete s[p]);if(r!==a)for(const p in r)(!n||!oe(n,p))&&(delete r[p],m=!0)}m&&Sn(e.attrs,"set","")}function Yo(e,n,t,i){const[s,r]=e.propsOptions;let o=!1,a;if(n)for(let c in n){if(xt(c))continue;const m=n[c];let d;s&&oe(s,d=On(c))?!r||!r.includes(d)?t[d]=m:(a||(a={}))[d]=m:Pi(e.emitsOptions,c)||(!(c in i)||m!==i[c])&&(i[c]=m,o=!0)}if(r){const c=ie(t),m=a||de;for(let d=0;d<r.length;d++){const p=r[d];t[p]=ps(s,c,p,m[p],e,!oe(m,p))}}return o}function ps(e,n,t,i,s,r){const o=e[t];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&V(c)){const{propsDefaults:m}=s;if(t in m)i=m[t];else{const d=Gt(s);i=m[t]=c.call(null,n),d()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===nt(t))&&(i=!0))}return i}const xc=new WeakMap;function Zo(e,n,t=!1){const i=t?xc:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let c=!1;if(!V(e)){const d=p=>{c=!0;const[S,T]=Zo(p,n,!0);Ee(o,S),T&&a.push(...T)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return le(e)&&i.set(e,ct),ct;if(N(r))for(let d=0;d<r.length;d++){const p=On(r[d]);yr(p)&&(o[p]=de)}else if(r)for(const d in r){const p=On(d);if(yr(p)){const S=r[d],T=o[p]=N(S)||V(S)?{type:S}:Ee({},S),A=T.type;let O=!1,ae=!0;if(N(A))for(let B=0;B<A.length;++B){const P=A[B],U=V(P)&&P.name;if(U==="Boolean"){O=!0;break}else U==="String"&&(ae=!1)}else O=V(A)&&A.name==="Boolean";T[0]=O,T[1]=ae,(O||oe(T,"default"))&&a.push(p)}}const m=[o,a];return le(e)&&i.set(e,m),m}function yr(e){return e[0]!=="$"&&!xt(e)}const Fs=e=>e==="_"||e==="_ctx"||e==="$stable",Hs=e=>N(e)?e.map(mn):[mn(e)],Mc=(e,n,t)=>{if(n._n)return n;const i=us((...s)=>Hs(n(...s)),t);return i._c=!1,i},Qo=(e,n,t)=>{const i=e._ctx;for(const s in e){if(Fs(s))continue;const r=e[s];if(V(r))n[s]=Mc(s,r,i);else if(r!=null){const o=Hs(r);n[s]=()=>o}}},ea=(e,n)=>{const t=Hs(n);e.slots.default=()=>t},na=(e,n,t)=>{for(const i in n)(t||!Fs(i))&&(e[i]=n[i])},Lc=(e,n,t)=>{const i=e.slots=qo();if(e.vnode.shapeFlag&32){const s=n._;s?(na(i,n,t),t&&ao(i,"_",s,!0)):Qo(n,i)}else n&&ea(e,n)},zc=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,o=de;if(i.shapeFlag&32){const a=n._;a?t&&a===1?r=!1:na(s,n,t):(r=!n.$stable,Qo(n,s)),o=n}else n&&(ea(e,n),o={default:1});if(r)for(const a in s)!Fs(a)&&o[a]==null&&delete s[a]},Ge=Fc;function Ac(e){return Pc(e)}function Pc(e,n){const t=Ti();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:m,setElementText:d,parentNode:p,nextSibling:S,setScopeId:T=pn,insertStaticContent:A}=e,O=(u,f,b,_=null,w=null,k=null,M=void 0,E=null,C=!!f.dynamicChildren)=>{if(u===f)return;u&&!Yn(u,f)&&(_=Oe(u),ye(u,w,k,!0),u=null),f.patchFlag===-2&&(C=!1,f.dynamicChildren=null);const{type:y,ref:F,shapeFlag:z}=f;switch(y){case Ii:ae(u,f,b,_);break;case De:B(u,f,b,_);break;case Xi:u==null&&P(f,b,_,M);break;case je:L(u,f,b,_,w,k,M,E,C);break;default:z&1?Q(u,f,b,_,w,k,M,E,C):z&6?ne(u,f,b,_,w,k,M,E,C):(z&64||z&128)&&y.process(u,f,b,_,w,k,M,E,C,Bn)}F!=null&&w?zt(F,u&&u.ref,k,f||u,!f):F==null&&u&&u.ref!=null&&zt(u.ref,null,k,u,!0)},ae=(u,f,b,_)=>{if(u==null)i(f.el=a(f.children),b,_);else{const w=f.el=u.el;f.children!==u.children&&m(w,f.children)}},B=(u,f,b,_)=>{u==null?i(f.el=c(f.children||""),b,_):f.el=u.el},P=(u,f,b,_)=>{[u.el,u.anchor]=A(u.children,f,b,_,u.el,u.anchor)},U=({el:u,anchor:f},b,_)=>{let w;for(;u&&u!==f;)w=S(u),i(u,b,_),u=w;i(f,b,_)},I=({el:u,anchor:f})=>{let b;for(;u&&u!==f;)b=S(u),s(u),u=b;s(f)},Q=(u,f,b,_,w,k,M,E,C)=>{if(f.type==="svg"?M="svg":f.type==="math"&&(M="mathml"),u==null)pe(f,b,_,w,k,M,E,C);else{const y=u.el&&u.el._isVueCE?u.el:null;try{y&&y._beginPatch(),D(u,f,w,k,M,E,C)}finally{y&&y._endPatch()}}},pe=(u,f,b,_,w,k,M,E)=>{let C,y;const{props:F,shapeFlag:z,transition:H,dirs:W}=u;if(C=u.el=o(u.type,k,F&&F.is,F),z&8?d(C,u.children):z&16&&$(u.children,C,null,_,w,qi(u,k),M,E),W&&$n(u,null,_,"created"),G(C,u,u.scopeId,M,_),F){for(const Y in F)Y!=="value"&&!xt(Y)&&r(C,Y,null,F[Y],k,_);"value"in F&&r(C,"value",null,F.value,k),(y=F.onVnodeBeforeMount)&&dn(y,_,u)}W&&$n(u,null,_,"beforeMount");const X=Ic(w,H);X&&H.beforeEnter(C),i(C,f,b),((y=F&&F.onVnodeMounted)||X||W)&&Ge(()=>{y&&dn(y,_,u),X&&H.enter(C),W&&$n(u,null,_,"mounted")},w)},G=(u,f,b,_,w)=>{if(b&&T(u,b),_)for(let k=0;k<_.length;k++)T(u,_[k]);if(w){let k=w.subTree;if(f===k||sa(k.type)&&(k.ssContent===f||k.ssFallback===f)){const M=w.vnode;G(u,M,M.scopeId,M.slotScopeIds,w.parent)}}},$=(u,f,b,_,w,k,M,E,C=0)=>{for(let y=C;y<u.length;y++){const F=u[y]=E?Rn(u[y]):mn(u[y]);O(null,F,f,b,_,w,k,M,E)}},D=(u,f,b,_,w,k,M)=>{const E=f.el=u.el;let{patchFlag:C,dynamicChildren:y,dirs:F}=f;C|=u.patchFlag&16;const z=u.props||de,H=f.props||de;let W;if(b&&Un(b,!1),(W=H.onVnodeBeforeUpdate)&&dn(W,b,f,u),F&&$n(f,u,b,"beforeUpdate"),b&&Un(b,!0),(z.innerHTML&&H.innerHTML==null||z.textContent&&H.textContent==null)&&d(E,""),y?K(u.dynamicChildren,y,E,b,_,qi(f,w),k):M||se(u,f,E,null,b,_,qi(f,w),k,!1),C>0){if(C&16)j(E,z,H,b,w);else if(C&2&&z.class!==H.class&&r(E,"class",null,H.class,w),C&4&&r(E,"style",z.style,H.style,w),C&8){const X=f.dynamicProps;for(let Y=0;Y<X.length;Y++){const ee=X[Y],xe=z[ee],Me=H[ee];(Me!==xe||ee==="value")&&r(E,ee,xe,Me,w,b)}}C&1&&u.children!==f.children&&d(E,f.children)}else!M&&y==null&&j(E,z,H,b,w);((W=H.onVnodeUpdated)||F)&&Ge(()=>{W&&dn(W,b,f,u),F&&$n(f,u,b,"updated")},_)},K=(u,f,b,_,w,k,M)=>{for(let E=0;E<f.length;E++){const C=u[E],y=f[E],F=C.el&&(C.type===je||!Yn(C,y)||C.shapeFlag&198)?p(C.el):b;O(C,y,F,null,_,w,k,M,!0)}},j=(u,f,b,_,w)=>{if(f!==b){if(f!==de)for(const k in f)!xt(k)&&!(k in b)&&r(u,k,f[k],null,w,_);for(const k in b){if(xt(k))continue;const M=b[k],E=f[k];M!==E&&k!=="value"&&r(u,k,E,M,w,_)}"value"in b&&r(u,"value",f.value,b.value,w)}},L=(u,f,b,_,w,k,M,E,C)=>{const y=f.el=u?u.el:a(""),F=f.anchor=u?u.anchor:a("");let{patchFlag:z,dynamicChildren:H,slotScopeIds:W}=f;W&&(E=E?E.concat(W):W),u==null?(i(y,b,_),i(F,b,_),$(f.children||[],b,F,w,k,M,E,C)):z>0&&z&64&&H&&u.dynamicChildren?(K(u.dynamicChildren,H,b,w,k,M,E),(f.key!=null||w&&f===w.subTree)&&ta(u,f,!0)):se(u,f,b,F,w,k,M,E,C)},ne=(u,f,b,_,w,k,M,E,C)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?w.ctx.activate(f,b,_,M,C):ke(f,b,_,w,k,M,C):me(u,f,C)},ke=(u,f,b,_,w,k,M)=>{const E=u.component=Vc(u,_,w);if(Mi(u)&&(E.ctx.renderer=Bn),Gc(E,!1,M),E.asyncDep){if(w&&w.registerDep(E,ce,M),!u.el){const C=E.subTree=Pe(De);B(null,C,f,b),u.placeholder=C.el}}else ce(E,u,f,b,w,k,M)},me=(u,f,b)=>{const _=f.component=u.component;if(Sc(u,f,b))if(_.asyncDep&&!_.asyncResolved){J(_,f,b);return}else _.next=f,_.update();else f.el=u.el,_.vnode=f},ce=(u,f,b,_,w,k,M)=>{const E=()=>{if(u.isMounted){let{next:z,bu:H,u:W,parent:X,vnode:Y}=u;{const We=ia(u);if(We){z&&(z.el=Y.el,J(u,z,M)),We.asyncDep.then(()=>{u.isUnmounted||E()});return}}let ee=z,xe;Un(u,!1),z?(z.el=Y.el,J(u,z,M)):z=Y,H&&oi(H),(xe=z.props&&z.props.onVnodeBeforeUpdate)&&dn(xe,X,z,Y),Un(u,!0);const Me=br(u),te=u.subTree;u.subTree=Me,O(te,Me,p(te.el),Oe(te),u,w,k),z.el=Me.el,ee===null&&Tc(u,Me.el),W&&Ge(W,w),(xe=z.props&&z.props.onVnodeUpdated)&&Ge(()=>dn(xe,X,z,Y),w)}else{let z;const{el:H,props:W}=f,{bm:X,m:Y,parent:ee,root:xe,type:Me}=u,te=At(f);Un(u,!1),X&&oi(X),!te&&(z=W&&W.onVnodeBeforeMount)&&dn(z,ee,f),Un(u,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(Me);const We=u.subTree=br(u);O(null,We,b,_,u,w,k),f.el=We.el}if(Y&&Ge(Y,w),!te&&(z=W&&W.onVnodeMounted)){const We=f;Ge(()=>dn(z,ee,We),w)}(f.shapeFlag&256||ee&&At(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ge(u.a,w),u.isMounted=!0,f=b=_=null}};u.scope.on();const C=u.effect=new ho(E);u.scope.off();const y=u.update=C.run.bind(C),F=u.job=C.runIfDirty.bind(C);F.i=u,F.id=u.uid,C.scheduler=()=>Rs(F),Un(u,!0),y()},J=(u,f,b)=>{f.component=u;const _=u.vnode.props;u.vnode=f,u.next=null,Ec(u,f.props,_,b),zc(u,f.children,b),Cn(),cr(u),En()},se=(u,f,b,_,w,k,M,E,C=!1)=>{const y=u&&u.children,F=u?u.shapeFlag:0,z=f.children,{patchFlag:H,shapeFlag:W}=f;if(H>0){if(H&128){Ln(y,z,b,_,w,k,M,E,C);return}else if(H&256){Ue(y,z,b,_,w,k,M,E,C);return}}W&8?(F&16&&zn(y,w,k),z!==y&&d(b,z)):F&16?W&16?Ln(y,z,b,_,w,k,M,E,C):zn(y,w,k,!0):(F&8&&d(b,""),W&16&&$(z,b,_,w,k,M,E,C))},Ue=(u,f,b,_,w,k,M,E,C)=>{u=u||ct,f=f||ct;const y=u.length,F=f.length,z=Math.min(y,F);let H;for(H=0;H<z;H++){const W=f[H]=C?Rn(f[H]):mn(f[H]);O(u[H],W,b,null,w,k,M,E,C)}y>F?zn(u,w,k,!0,!1,z):$(f,b,_,w,k,M,E,C,z)},Ln=(u,f,b,_,w,k,M,E,C)=>{let y=0;const F=f.length;let z=u.length-1,H=F-1;for(;y<=z&&y<=H;){const W=u[y],X=f[y]=C?Rn(f[y]):mn(f[y]);if(Yn(W,X))O(W,X,b,null,w,k,M,E,C);else break;y++}for(;y<=z&&y<=H;){const W=u[z],X=f[H]=C?Rn(f[H]):mn(f[H]);if(Yn(W,X))O(W,X,b,null,w,k,M,E,C);else break;z--,H--}if(y>z){if(y<=H){const W=H+1,X=W<F?f[W].el:_;for(;y<=H;)O(null,f[y]=C?Rn(f[y]):mn(f[y]),b,X,w,k,M,E,C),y++}}else if(y>H)for(;y<=z;)ye(u[y],w,k,!0),y++;else{const W=y,X=y,Y=new Map;for(y=X;y<=H;y++){const Le=f[y]=C?Rn(f[y]):mn(f[y]);Le.key!=null&&Y.set(Le.key,y)}let ee,xe=0;const Me=H-X+1;let te=!1,We=0;const be=new Array(Me);for(y=0;y<Me;y++)be[y]=0;for(y=W;y<=z;y++){const Le=u[y];if(xe>=Me){ye(Le,w,k,!0);continue}let Ve;if(Le.key!=null)Ve=Y.get(Le.key);else for(ee=X;ee<=H;ee++)if(be[ee-X]===0&&Yn(Le,f[ee])){Ve=ee;break}Ve===void 0?ye(Le,w,k,!0):(be[Ve-X]=y+1,Ve>=We?We=Ve:te=!0,O(Le,f[Ve],b,null,w,k,M,E,C),xe++)}const tt=te?Rc(be):ct;for(ee=tt.length-1,y=Me-1;y>=0;y--){const Le=X+y,Ve=f[Le],yt=f[Le+1],Ut=Le+1<F?yt.el||yt.placeholder:_;be[y]===0?O(null,Ve,b,Ut,w,k,M,E,C):te&&(ee<0||y!==tt[ee]?ln(Ve,b,Ut,2):ee--)}}},ln=(u,f,b,_,w=null)=>{const{el:k,type:M,transition:E,children:C,shapeFlag:y}=u;if(y&6){ln(u.component.subTree,f,b,_);return}if(y&128){u.suspense.move(f,b,_);return}if(y&64){M.move(u,f,b,Bn);return}if(M===je){i(k,f,b);for(let z=0;z<C.length;z++)ln(C[z],f,b,_);i(u.anchor,f,b);return}if(M===Xi){U(u,f,b);return}if(_!==2&&y&1&&E)if(_===0)E.beforeEnter(k),i(k,f,b),Ge(()=>E.enter(k),w);else{const{leave:z,delayLeave:H,afterLeave:W}=E,X=()=>{u.ctx.isUnmounted?s(k):i(k,f,b)},Y=()=>{k._isLeaving&&k[_n](!0),z(k,()=>{X(),W&&W()})};H?H(k,X,Y):Y()}else i(k,f,b)},ye=(u,f,b,_=!1,w=!1)=>{const{type:k,props:M,ref:E,children:C,dynamicChildren:y,shapeFlag:F,patchFlag:z,dirs:H,cacheIndex:W}=u;if(z===-2&&(w=!1),E!=null&&(Cn(),zt(E,null,b,u,!0),En()),W!=null&&(f.renderCache[W]=void 0),F&256){f.ctx.deactivate(u);return}const X=F&1&&H,Y=!At(u);let ee;if(Y&&(ee=M&&M.onVnodeBeforeUnmount)&&dn(ee,f,u),F&6)Se(u.component,b,_);else{if(F&128){u.suspense.unmount(b,_);return}X&&$n(u,null,f,"beforeUnmount"),F&64?u.type.remove(u,f,b,Bn,_):y&&!y.hasOnce&&(k!==je||z>0&&z&64)?zn(y,f,b,!1,!0):(k===je&&z&384||!w&&F&16)&&zn(C,f,b),_&&tn(u)}(Y&&(ee=M&&M.onVnodeUnmounted)||X)&&Ge(()=>{ee&&dn(ee,f,u),X&&$n(u,null,f,"unmounted")},b)},tn=u=>{const{type:f,el:b,anchor:_,transition:w}=u;if(f===je){Je(b,_);return}if(f===Xi){I(u);return}const k=()=>{s(b),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(u.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:E}=w,C=()=>M(b,k);E?E(u.el,k,C):C()}else k()},Je=(u,f)=>{let b;for(;u!==f;)b=S(u),s(u),u=b;s(f)},Se=(u,f,b)=>{const{bum:_,scope:w,job:k,subTree:M,um:E,m:C,a:y}=u;wr(C),wr(y),_&&oi(_),w.stop(),k&&(k.flags|=8,ye(M,u,f,b)),E&&Ge(E,f),Ge(()=>{u.isUnmounted=!0},f)},zn=(u,f,b,_=!1,w=!1,k=0)=>{for(let M=k;M<u.length;M++)ye(u[M],f,b,_,w)},Oe=u=>{if(u.shapeFlag&6)return Oe(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=S(u.anchor||u.el),b=f&&f[Gl];return b?S(b):f};let sn=!1;const bn=(u,f,b)=>{u==null?f._vnode&&ye(f._vnode,null,null,!0):O(f._vnode||null,u,f,null,null,null,b),f._vnode=u,sn||(sn=!0,cr(),zo(),sn=!1)},Bn={p:O,um:ye,m:ln,r:tn,mt:ke,mc:$,pc:se,pbc:K,n:Oe,o:e};return{render:bn,hydrate:void 0,createApp:hc(bn)}}function qi({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Un({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Ic(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ta(e,n,t=!1){const i=e.children,s=n.children;if(N(i)&&N(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Rn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ta(o,a)),a.type===Ii&&a.patchFlag!==-1&&(a.el=o.el),a.type===De&&!a.el&&(a.el=o.el)}}function Rc(e){const n=e.slice(),t=[0];let i,s,r,o,a;const c=e.length;for(i=0;i<c;i++){const m=e[i];if(m!==0){if(s=t[t.length-1],e[s]<m){n[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,e[t[a]]<m?r=a+1:o=a;m<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function ia(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:ia(n)}function wr(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const sa=e=>e.__isSuspense;function Fc(e,n){n&&n.pendingBranch?N(e)?n.effects.push(...e):n.effects.push(e):Vl(e)}const je=Symbol.for("v-fgt"),Ii=Symbol.for("v-txt"),De=Symbol.for("v-cmt"),Xi=Symbol.for("v-stc"),It=[];let $e=null;function ue(e=!1){It.push($e=e?null:[])}function Hc(){It.pop(),$e=It[It.length-1]||null}let Nt=1;function bi(e,n=!1){Nt+=e,e<0&&$e&&n&&($e.hasOnce=!0)}function ra(e){return e.dynamicChildren=Nt>0?$e||ct:null,Hc(),Nt>0&&$e&&$e.push(e),e}function fe(e,n,t,i,s,r){return ra(x(e,n,t,i,s,r,!0))}function Dc(e,n,t,i,s){return ra(Pe(e,n,t,i,s,!0))}function vi(e){return e?e.__v_isVNode===!0:!1}function Yn(e,n){return e.type===n.type&&e.key===n.key}const oa=({key:e})=>e??null,li=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||Ie(e)||V(e)?{i:en,r:e,k:n,f:!!t}:e:null);function x(e,n=null,t=null,i=0,s=null,r=e===je?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&oa(n),ref:n&&li(n),scopeId:Po,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:en};return a?(Ds(c,t),r&128&&e.normalize(c)):t&&(c.shapeFlag|=we(t)?8:16),Nt>0&&!o&&$e&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&$e.push(c),c}const Pe=Nc;function Nc(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===rc)&&(e=De),vi(e)){const a=Wn(e,n,!0);return t&&Ds(a,t),Nt>0&&!r&&$e&&(a.shapeFlag&6?$e[$e.indexOf(e)]=a:$e.push(a)),a.patchFlag=-2,a}if(qc(e)&&(e=e.__vccOpts),n){n=Oc(n);let{class:a,style:c}=n;a&&!we(a)&&(n.class=dt(a)),le(c)&&(Is(c)&&!N(c)&&(c=Ee({},c)),n.style=Ci(c))}const o=we(e)?1:sa(e)?128:Io(e)?64:le(e)?4:V(e)?2:0;return x(e,n,t,i,s,o,r,!0)}function Oc(e){return e?Is(e)||Xo(e)?Ee({},e):e:null}function Wn(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=e,m=n?Bc(s||{},n):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:m,key:m&&oa(m),ref:n&&n.ref?t&&r?N(r)?r.concat(li(n)):[r,li(n)]:li(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==je?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wn(e.ssContent),ssFallback:e.ssFallback&&Wn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&Dt(d,c.clone(d)),d}function Wc(e=" ",n=0){return Pe(Ii,null,e,n)}function Ye(e="",n=!1){return n?(ue(),Dc(De,null,e)):Pe(De,null,e)}function mn(e){return e==null||typeof e=="boolean"?Pe(De):N(e)?Pe(je,null,e.slice()):vi(e)?Rn(e):Pe(Ii,null,String(e))}function Rn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wn(e)}function Ds(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(N(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),Ds(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Xo(n)?n._ctx=en:s===3&&en&&(en.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else V(n)?(n={default:n,_ctx:en},t=32):(n=String(n),i&64?(t=16,n=[Wc(n)]):t=8);e.children=n,e.shapeFlag|=t}function Bc(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=dt([n.class,i.class]));else if(s==="style")n.style=Ci([n.style,i.style]);else if(_i(s)){const r=n[s],o=i[s];o&&r!==o&&!(N(r)&&r.includes(o))&&(n[s]=r?[].concat(r,o):o)}else s!==""&&(n[s]=i[s])}return n}function dn(e,n,t,i=null){an(e,n,7,[t,i])}const Kc=Vo();let jc=0;function Vc(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||Kc,r={uid:jc++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zo(i,s),emitsOptions:Uo(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=yc.bind(null,r),e.ce&&e.ce(r),r}let Ne=null;const aa=()=>Ne||en;let yi,gs;{const e=Ti(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};yi=n("__VUE_INSTANCE_SETTERS__",t=>Ne=t),gs=n("__VUE_SSR_SETTERS__",t=>Ot=t)}const Gt=e=>{const n=Ne;return yi(e),e.scope.on(),()=>{e.scope.off(),yi(n)}},kr=()=>{Ne&&Ne.scope.off(),yi(null)};function la(e){return e.vnode.shapeFlag&4}let Ot=!1;function Gc(e,n=!1,t=!1){n&&gs(n);const{props:i,children:s}=e.vnode,r=la(e);Cc(e,i,r,n),Lc(e,s,t||n);const o=r?$c(e,n):void 0;return n&&gs(!1),o}function $c(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,oc);const{setup:i}=t;if(i){Cn();const s=e.setupContext=i.length>1?Jc(e):null,r=Gt(e),o=Vt(i,e,0,[e.props,s]),a=io(o);if(En(),r(),(a||e.sp)&&!At(e)&&Oo(e),a){if(o.then(kr,kr),n)return o.then(c=>{_r(e,c)}).catch(c=>{xi(c,e,0)});e.asyncDep=o}else _r(e,o)}else ca(e)}function _r(e,n,t){V(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:le(n)&&(e.setupState=xo(n)),ca(e)}function ca(e,n,t){const i=e.type;e.render||(e.render=i.render||pn);{const s=Gt(e);Cn();try{ac(e)}finally{En(),s()}}}const Uc={get(e,n){return Ae(e,"get",""),e[n]}};function Jc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Uc),slots:e.slots,emit:e.emit,expose:n}}function Ri(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xo(Il(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Pt)return Pt[t](e)},has(n,t){return t in n||t in Pt}})):e.proxy}function qc(e){return V(e)&&"__vccOpts"in e}const q=(e,n)=>Ol(e,n,Ot);function Xc(e,n,t){try{bi(-1);const i=arguments.length;return i===2?le(n)&&!N(n)?vi(n)?Pe(e,null,[n]):Pe(e,n):Pe(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&vi(t)&&(t=[t]),Pe(e,n,t))}finally{bi(1)}}const Yc="3.5.25";let bs;const Sr=typeof window<"u"&&window.trustedTypes;if(Sr)try{bs=Sr.createPolicy("vue",{createHTML:e=>e})}catch{}const ua=bs?e=>bs.createHTML(e):e=>e,Zc="http://www.w3.org/2000/svg",Qc="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Tr=kn&&kn.createElement("template"),eu={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?kn.createElementNS(Zc,e):n==="mathml"?kn.createElementNS(Qc,e):t?kn.createElement(e,{is:t}):kn.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>kn.createTextNode(e),createComment:e=>kn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const o=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Tr.innerHTML=ua(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=Tr.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},An="transition",Tt="animation",Wt=Symbol("_vtc"),da={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},nu=Ee({},Ro,da),tu=e=>(e.displayName="Transition",e.props=nu,e),Cr=tu((e,{slots:n})=>Xc(Jl,iu(e),n)),Jn=(e,n=[])=>{N(e)?e.forEach(t=>t(...n)):e&&e(...n)},Er=e=>e?N(e)?e.some(n=>n.length>1):e.length>1:!1;function iu(e){const n={};for(const L in e)L in da||(n[L]=e[L]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:m=o,appearToClass:d=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:S=`${t}-leave-active`,leaveToClass:T=`${t}-leave-to`}=e,A=su(s),O=A&&A[0],ae=A&&A[1],{onBeforeEnter:B,onEnter:P,onEnterCancelled:U,onLeave:I,onLeaveCancelled:Q,onBeforeAppear:pe=B,onAppear:G=P,onAppearCancelled:$=U}=n,D=(L,ne,ke,me)=>{L._enterCancelled=me,qn(L,ne?d:a),qn(L,ne?m:o),ke&&ke()},K=(L,ne)=>{L._isLeaving=!1,qn(L,p),qn(L,T),qn(L,S),ne&&ne()},j=L=>(ne,ke)=>{const me=L?G:P,ce=()=>D(ne,L,ke);Jn(me,[ne,ce]),xr(()=>{qn(ne,L?c:r),wn(ne,L?d:a),Er(me)||Mr(ne,i,O,ce)})};return Ee(n,{onBeforeEnter(L){Jn(B,[L]),wn(L,r),wn(L,o)},onBeforeAppear(L){Jn(pe,[L]),wn(L,c),wn(L,m)},onEnter:j(!1),onAppear:j(!0),onLeave(L,ne){L._isLeaving=!0;const ke=()=>K(L,ne);wn(L,p),L._enterCancelled?(wn(L,S),Ar(L)):(Ar(L),wn(L,S)),xr(()=>{L._isLeaving&&(qn(L,p),wn(L,T),Er(I)||Mr(L,i,ae,ke))}),Jn(I,[L,ke])},onEnterCancelled(L){D(L,!1,void 0,!0),Jn(U,[L])},onAppearCancelled(L){D(L,!0,void 0,!0),Jn($,[L])},onLeaveCancelled(L){K(L),Jn(Q,[L])}})}function su(e){if(e==null)return null;if(le(e))return[Yi(e.enter),Yi(e.leave)];{const n=Yi(e);return[n,n]}}function Yi(e){return sl(e)}function wn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Wt]||(e[Wt]=new Set)).add(n)}function qn(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[Wt];t&&(t.delete(n),t.size||(e[Wt]=void 0))}function xr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ru=0;function Mr(e,n,t,i){const s=e._endId=++ru,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:c}=ou(e,n);if(!o)return i();const m=o+"end";let d=0;const p=()=>{e.removeEventListener(m,S),r()},S=T=>{T.target===e&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},a+1),e.addEventListener(m,S)}function ou(e,n){const t=window.getComputedStyle(e),i=A=>(t[A]||"").split(", "),s=i(`${An}Delay`),r=i(`${An}Duration`),o=Lr(s,r),a=i(`${Tt}Delay`),c=i(`${Tt}Duration`),m=Lr(a,c);let d=null,p=0,S=0;n===An?o>0&&(d=An,p=o,S=r.length):n===Tt?m>0&&(d=Tt,p=m,S=c.length):(p=Math.max(o,m),d=p>0?o>m?An:Tt:null,S=d?d===An?r.length:c.length:0);const T=d===An&&/\b(?:transform|all)(?:,|$)/.test(i(`${An}Property`).toString());return{type:d,timeout:p,propCount:S,hasTransform:T}}function Lr(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>zr(t)+zr(e[i])))}function zr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ar(e){return(e?e.ownerDocument:document).body.offsetHeight}function au(e,n,t){const i=e[Wt];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Pr=Symbol("_vod"),lu=Symbol("_vsh"),cu=Symbol(""),uu=/(?:^|;)\s*display\s*:/;function du(e,n,t){const i=e.style,s=we(t);let r=!1;if(t&&!s){if(n)if(we(n))for(const o of n.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ci(i,a,"")}else for(const o in n)t[o]==null&&ci(i,o,"");for(const o in t)o==="display"&&(r=!0),ci(i,o,t[o])}else if(s){if(n!==t){const o=i[cu];o&&(t+=";"+o),i.cssText=t,r=uu.test(t)}}else n&&e.removeAttribute("style");Pr in e&&(e[Pr]=r?i.display:"",e[lu]&&(i.display="none"))}const Ir=/\s*!important$/;function ci(e,n,t){if(N(t))t.forEach(i=>ci(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=fu(e,n);Ir.test(t)?e.setProperty(nt(i),t.replace(Ir,""),"important"):e[i]=t}}const Rr=["Webkit","Moz","ms"],Zi={};function fu(e,n){const t=Zi[n];if(t)return t;let i=On(n);if(i!=="filter"&&i in e)return Zi[n]=i;i=oo(i);for(let s=0;s<Rr.length;s++){const r=Rr[s]+i;if(r in e)return Zi[n]=r}return n}const Fr="http://www.w3.org/1999/xlink";function Hr(e,n,t,i,s,r=ul(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Fr,n.slice(6,n.length)):e.setAttributeNS(Fr,n,t):t==null||r&&!co(t)?e.removeAttribute(n):e.setAttribute(n,r?"":gn(t)?String(t):t)}function Dr(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?ua(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=co(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(s||n)}function Ns(e,n,t,i){e.addEventListener(n,t,i)}function hu(e,n,t,i){e.removeEventListener(n,t,i)}const Nr=Symbol("_vei");function mu(e,n,t,i,s=null){const r=e[Nr]||(e[Nr]={}),o=r[n];if(i&&o)o.value=i;else{const[a,c]=pu(n);if(i){const m=r[n]=vu(i,s);Ns(e,a,m,c)}else o&&(hu(e,a,o,c),r[n]=void 0)}}const Or=/(?:Once|Passive|Capture)$/;function pu(e){let n;if(Or.test(e)){n={};let i;for(;i=e.match(Or);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):nt(e.slice(2)),n]}let Qi=0;const gu=Promise.resolve(),bu=()=>Qi||(gu.then(()=>Qi=0),Qi=Date.now());function vu(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(yu(i,t.value),n,5,[i])};return t.value=e,t.attached=bu(),t}function yu(e,n){if(N(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const Wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,wu=(e,n,t,i,s,r)=>{const o=s==="svg";n==="class"?au(e,i,o):n==="style"?du(e,t,i):_i(n)?Ss(n)||mu(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ku(e,n,i,o))?(Dr(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Hr(e,n,i,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!we(i))?Dr(e,On(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),Hr(e,n,i,o))};function ku(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&Wr(n)&&V(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wr(n)&&we(t)?!1:n in e}const wi=e=>{const n=e.props["onUpdate:modelValue"]||!1;return N(n)?t=>oi(n,t):n},pt=Symbol("_assign"),_u={deep:!0,created(e,n,t){e[pt]=wi(t),Ns(e,"change",()=>{const i=e._modelValue,s=Bt(e),r=e.checked,o=e[pt];if(N(i)){const a=Es(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const m=[...i];m.splice(a,1),o(m)}}else if(bt(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(fa(e,r))})},mounted:Br,beforeUpdate(e,n,t){e[pt]=wi(t),Br(e,n,t)}};function Br(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(N(n))s=Es(n,i.props.value)>-1;else if(bt(n))s=n.has(i.props.value);else{if(n===t)return;s=jt(n,fa(e,!0))}e.checked!==s&&(e.checked=s)}const Su={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=bt(n);Ns(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?lo(Bt(o)):Bt(o));e[pt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,Ze(()=>{e._assigning=!1})}),e[pt]=wi(i)},mounted(e,{value:n}){Kr(e,n)},beforeUpdate(e,n,t){e[pt]=wi(t)},updated(e,{value:n}){e._assigning||Kr(e,n)}};function Kr(e,n){const t=e.multiple,i=N(n);if(!(t&&!i&&!bt(n))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],a=Bt(o);if(t)if(i){const c=typeof a;c==="string"||c==="number"?o.selected=n.some(m=>String(m)===String(a)):o.selected=Es(n,a)>-1}else o.selected=n.has(a);else if(jt(Bt(o),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Bt(e){return"_value"in e?e._value:e.value}function fa(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Tu=["ctrl","shift","alt","meta"],Cu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Tu.some(t=>e[`${t}Key`]&&!n.includes(t))},Eu=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<n.length;o++){const a=Cu[n[o]];if(a&&a(s,n))return}return e(s,...r)}))},xu=Ee({patchProp:wu},eu);let jr;function Mu(){return jr||(jr=Ac(xu))}const Lu=((...e)=>{const n=Mu().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=Au(i);if(!s)return;const r=n._component;!V(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,zu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},n});function zu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Au(e){return we(e)?document.querySelector(e):e}const Pu="/favicon.png",Iu="/images/about_music_logo.png",Ru="/images/dk3-min.jpg",Fu="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",vt=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Dmitri Shostakovich",birth:1906,death:1975}],Hu={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/stravinsky.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function ha(e){return Hu[e]||null}function Du(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function Nu(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],s=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-s),a=n.slice(0,n.length-s).map(m=>m.trim()).filter(Boolean).map(m=>m[0]?m[0].toUpperCase()+".":"").filter(Boolean).join(" "),c=r.join(" ");return a?`${a} ${c}`:c}const $t=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let vs=$t.reduce((e,n)=>(e[n.id]=n.label,e),{});const Vr=Math.min(...vt.map(e=>e.birth)),Ou=Math.max(...vt.map(e=>e.birth));let ys=[...vt],Fn=null,Hn=null;const Wu={r:255,g:255,b:255},Bu={r:37,g:99,b:235};Et("#f3f4f6"),Ur(1750),Et("#e6eef8"),Ur(1820),Et("#e8f4ff"),Et("#eef2f7");const ki=1677.5,ui=1980,ma=ui-ki,Ku=6,ju=2,Vu=0,di={barHeight:50,widthScale:1,fontScale:1},ot={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let Dn={...di};function es(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function Gr(e={}){Dn={barHeight:es(e.barHeight??Dn.barHeight??di.barHeight,ot.barHeight.min,ot.barHeight.max),widthScale:es(e.widthScale??Dn.widthScale??di.widthScale,ot.widthScale.min,ot.widthScale.max),fontScale:es(e.fontScale??Dn.fontScale??di.fontScale,ot.fontScale.min,ot.fontScale.max)}}function Gu(){return Ku*Dn.widthScale}function ti(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=ma*Gu()+Vu,i=(n.clientWidth||window.innerWidth)*ju*Dn.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function Zn(e){return(e-ki)/ma*100}function pa(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function Et(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function ns({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function $r(e,n,t){const i=pa(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function Ur(e){const n=Ou-Vr;return n<=0?0:pa((e-Vr)/n)}const $u={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function Os(e){return $u[e]||"#f3f4f6"}function Uu(e){return e?vs[e]||$t.find(n=>n.id===e)?.label||e:""}function Jr(e={}){!e||typeof e!="object"||(vs={...vs,...e})}function Ju(e){const n=$t.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function qu(e,n){const t=Number(e),i=Number(n),s=Ju(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let o=null,a=0;return $t.forEach(c=>{const m=Math.max(0,Math.min(i,c.to)-Math.max(t,c.from));m>a&&(a=m,o=c.id)}),o&&a>r/2?o:s}function Xu(e){const n=Os(e),t=Et(n),i=$r(t,Wu,.12),s=$r(t,Bu,.04);return`linear-gradient(145deg, ${ns(i)} 0%, ${ns(t)} 58%, ${ns(s)} 100%)`}function qr(e){Array.isArray(e)?ys=[...e]:ys=[...vt]}function Ws(){const e=document.getElementById("gantt");if(!e)return;const n=i=>Number.isInteger(Fn)&&i===Fn,t=i=>Number.isInteger(Hn)&&i===Hn;e.querySelectorAll(".bar").forEach(i=>{const s=Number(i.getAttribute("data-lane-index"));i.classList.toggle("bar--selected",n(s)),i.classList.toggle("bar--hovered",t(s))}),e.querySelectorAll(".bar-connector").forEach(i=>{const s=Number(i.getAttribute("data-lane-index")),r=n(s),o=t(s);i.classList.toggle("bar-connector--selected",r),i.classList.toggle("bar-connector--hover",o)})}function ga(e){Number.isInteger(e)?Fn=e:Fn=null,Ws()}function ws(e){Number.isInteger(e)?Hn=e:Hn=null,Ws()}function Xr(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(ki/10)*10,t=Math.ceil(ui/10)*10;$t.forEach(i=>{const s=Math.max(i.from,ki),r=Math.min(i.to,ui);if(r<=s)return;const o=document.createElement("div");o.className="era-band",o.style.left=Zn(s)+"%",o.style.width=Zn(r)-Zn(s)+"%",o.style.backgroundImage="none",o.style.backgroundColor=Os(i.id),o.textContent=Uu(i.id)||i.label,i.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===ui&&(o.style.borderRight="none"),e.appendChild(o)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=Zn(i)+"%",e.appendChild(s);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=Zn(i)+"%",o.textContent=i,e.appendChild(o)}}function ts(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="";const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=ys||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const o=[...r].sort((T,A)=>T.birth-A.birth),a=o.length,c=o.map((T,A)=>({composer:T,laneIndex:A}));Number.isInteger(Fn)&&(Fn<0||Fn>=a)&&(Fn=null),Number.isInteger(Hn)&&(Hn<0||Hn>=a)&&(Hn=null);const m=2,d=Dn.barHeight,p=d+m,S=a*d+Math.max(0,a-1)*m;e.style.height=S+"px",a&&(c.forEach(({composer:T,laneIndex:A})=>{const O=T.displayName||T.name,ae=Zn(T.birth),B=Zn(T.death),P=document.createElement("div");P.className="bar",P.setAttribute("data-lane-index",A),P.setAttribute("data-name",T.name);const U=qu(T.birth,T.death);P.style.backgroundImage=Xu(U),P.style.backgroundColor=Os(U);const I=ae,Q=B-ae,G=A*p+d*.5+i,$=(me,ce)=>{const J=document.createElement("div");J.className="bar-connector",J.setAttribute("data-lane-index",A),J.setAttribute("data-side",ce),J.style.left=me+"%",J.style.top=-i+"px",J.style.height=G+"px",s.appendChild(J)};$(I,"start"),$(I+Q,"end"),P.style.left=I+"%",P.style.width=Q+"%",P.style.top=A*p+"px",P.style.height=d+"px",P.style.lineHeight=d+"px",P.style.fontSize=d*.25*Dn.fontScale+"px";const D=ha(T.name);let K=0;if(D){const me=document.createElement("img");me.className="bar-avatar",K=Math.max(10,Math.round(d*1.1)),me.style.width=K+"px",me.style.height=K+"px",me.src=D,me.alt=O||T.name,P.appendChild(me)}const j=document.createElement("span");j.className="bar-label",j.textContent=O,P.appendChild(j);const L=document.createElement("span");L.className="bar-dates",L.textContent=`${T.birth} – ${T.death}`,P.appendChild(L),e.appendChild(P),j.scrollWidth>j.clientWidth&&(j.textContent=Nu(O),j.scrollWidth>j.clientWidth&&(j.textContent=Du(O)));const ne=()=>{const J=P.clientWidth-12-(K?K+6:0)-6;if(J<=0){L.style.display="none";return}j.scrollWidth+L.scrollWidth+6>J&&(L.style.display="none")};(()=>{P.clientWidth>0?ne():typeof window<"u"&&window.requestAnimationFrame(ne)})(),P.addEventListener("click",me=>{me.stopPropagation(),ga(A),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:T,laneIndex:A}}))}),P.addEventListener("mouseenter",()=>ws(A)),P.addEventListener("mouseleave",()=>ws(null))}),e.appendChild(s),Ws())}function Yu(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4;let s=0,r=0,o=0,a=0,c=0,m=0,d=null;const p=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},S=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true")},T=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",p())};function A(){if(d=null,!n||!t)return;const G=c-s,$=m-r;e.scrollLeft=o-G,e.scrollTop=a-$}const O=G=>{G.button===0&&(n=!0,t=!1,e.classList.remove("panning"),s=G.clientX,r=G.clientY,c=G.clientX,m=G.clientY,o=e.scrollLeft,a=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),G.preventDefault())},ae=G=>{if(n){if(c=G.clientX,m=G.clientY,!t){const $=Math.abs(c-s),D=Math.abs(m-r);if($>i||D>i)S();else return}d===null&&(d=window.requestAnimationFrame(A)),G.preventDefault()}},B=()=>{n&&(n=!1,T(),d!==null&&(cancelAnimationFrame(d),d=null))};e.addEventListener("mousedown",O),window.addEventListener("mousemove",ae),window.addEventListener("mouseup",B);let P=null,U=!1;const I=G=>{if(P!==null||G.touches.length!==1)return;const $=G.touches[0];P=$.identifier,U=!1,s=$.clientX,r=$.clientY,c=$.clientX,m=$.clientY,o=e.scrollLeft,a=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),T()},Q=G=>{if(P===null)return;const $=Array.from(G.touches).find(ne=>ne.identifier===P);if(!$)return;const D=$.clientX-s,K=$.clientY-r,j=Math.abs(D),L=Math.abs(K);if(!U)if(j>i||L>i)U=!0,S();else return;e.scrollLeft=o-D,e.scrollTop=a-K,G.preventDefault()},pe=G=>{P===null||!Array.from(G.changedTouches).some(D=>D.identifier===P)||(P=null,U=!1,T())};e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchmove",Q,{passive:!1}),e.addEventListener("touchend",pe,{passive:!0}),e.addEventListener("touchcancel",pe,{passive:!0})}function Zu(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};const i=.5,s=12,r=(m,d,p)=>{const S=m.getBoundingClientRect();return S.bottom>d&&S.top<p},o=()=>e.scrollTop+e.clientHeight>=e.scrollHeight-s,a=()=>{if(o())return;const m=Array.from(n.querySelectorAll(".bar"));if(!m.length)return;const d=e.getBoundingClientRect(),S=(t?.getBoundingClientRect()?.bottom??d.top)+1,T=d.bottom,A=m.find(P=>r(P,S,T));if(!A)return;const O=A.getBoundingClientRect(),ae=S,B=O.top-ae;Math.abs(B)<=i||ks(e,{left:e.scrollLeft,top:Math.max(0,e.scrollTop+B),behavior:"auto"})},c=()=>{a()};return e.addEventListener("timeline-pan-end",c),()=>{e.removeEventListener("timeline-pan-end",c)}}function ks(e,{left:n=0,top:t=0,behavior:i="smooth"}){const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":i;if(e.scrollTo){e.scrollTo({left:n,top:t,behavior:r});return}e.scrollLeft=n,e.scrollTop=t}function Qu(e={}){Gr(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:vt;qr(n),Jr(e.eraLabels||{}),ti(),Xr(),ts(),Yu();const t=Zu(),i=()=>ti();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const a=document.getElementById("timeline");a&&ks(a,{left:0,top:0,behavior:"auto"})}function o(){const a=document.getElementById("timeline");a&&ks(a,{left:Math.max(0,a.scrollWidth-a.clientWidth),top:Math.max(0,a.scrollHeight-a.clientHeight),behavior:"auto"})}return{goToStart:r,goToEnd:o,setComposers(a){qr(a),ts()},updateSettings(a){Gr(a||{}),ti(),ts()},updateEraLabels(a){Jr(a||{}),ti(),Xr()},setSelectedLane:ga,setHoveredLane:ws,destroy(){window.removeEventListener("resize",i),t()}}}const ba=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},ed={class:"timeline-wrapper"},nd={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),a=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(a)?null:a}}))};return zi(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=Qu({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),Ai(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),Qe(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),Qe(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),Qe(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(ue(),fe("div",ed,[...r[0]||(r[0]=[x("div",{id:"timeline"},[x("div",{class:"timeline-inner"},[x("div",{id:"axis",class:"axis"}),x("div",{id:"gantt"})])],-1)])]))}},td=ba(nd,[["__scopeId","data-v-095e97d5"]]),id=`# Composer fact sheets

## Vivaldi essentials {#antonio-vivaldi}

Name (ru): Антонио Вивальди

- Who he was: Venetian Baroque composer and virtuoso violinist, one of the most influential composers of his time.
- Nickname: Called "Il Prete Rosso" - The Red Priest - because he was an ordained Catholic priest with bright red hair.
- The Four Seasons: His hit piece is The Four Seasons, four violin concertos that paint thunderstorms, birds, icy winds, drunken dancing, etc. - one of the first and most famous examples of "program music" (music that tells a story).
- Music for an orphanage: He spent decades working at the Ospedale della Pieta in Venice, writing concertos and sacred music for an all-female orchestra of orphaned or abandoned girls, which became a tourist attraction in Venice.
- Concerto pioneer: He wrote around 500 concertos and basically set the "standard model" for the Baroque solo concerto (fast-slow-fast), influencing Bach and many others.
- Rise, fall, comeback: Famous in his lifetime, he died poor in Vienna and was largely forgotten until a big Vivaldi revival in the 20th century, when lost manuscripts were rediscovered and his music became concert-hall mainstream again.


## Vivaldi essentials (ru) {#antonio-vivaldi}

- Кем он был: Венецианский композитор эпохи барокко и виртуоз-скрипач, один из самых влиятельных композиторов своего времени.
- Прозвище: Его называли «Il Prete Rosso» - «Красный священник» - потому что он был рукоположенным католическим священником с ярко-рыжими волосами.
- «Времена года»: Его главный хит - «Времена года», четыре скрипичных концерта, которые «рисуют» грозы, птиц, ледяной ветер, пьяные танцы и так далее - один из первых и самых известных примеров программной музыки.
- Музыка для приюта: Десятилетиями он работал в Ospedale della Pieta в Венеции, писал концерты и духовную музыку для женского оркестра из сирот и подкидышей - это стало местной туристической достопримечательностью.
- Пионер концерта: Он написал около 500 концертов и фактически закрепил «стандартную модель» барочного сольного концерта (быстро-медленно-быстро), повлияв на Баха и многих других.
- Взлет, падение, возвращение: При жизни был знаменит, умер бедным в Вене и почти был забыт, пока в XX веке не началось «возрождение Вивальди» - нашли утраченные рукописи, и его музыка снова стала концертной классикой.

## Bach essentials {#johann-sebastian-bach}

Name (ru): Иоганн Себастьян Бах

- Who he was: German Baroque composer and church musician, now seen as one of the greatest composers of all time.
- What makes him special: Master of counterpoint (many melodies at once), harmony and structure; he took German, Italian and French styles and fused them into something new.
- Job in Leipzig: For 27 years he was Thomaskantor in Leipzig: writing a new cantata almost every week for church, teaching, and running the choir and school.
- Tuning nerd fact: The Well-Tempered Clavier was written to show that, with the right tuning ("well temperament"), you can play in every key on the same keyboard - something revolutionary at the time.
- Legacy: After his death he was almost forgotten; Mendelssohn's 1829 performance of the St Matthew Passion kick-started the "Bach revival", and since then his music is standard for study, performance and even modern harmony teaching.
- Fun modern fact: New Bach works are still being discovered: in 2025, two early organ chaconnes were authenticated and performed for the first time in 300 years in Leipzig, where he is buried.


## Bach essentials (ru) {#johann-sebastian-bach}

- Кем он был: Немецкий композитор барокко и церковный музыкант, сегодня считается одним из величайших композиторов всех времен.
- Чем он особенный: Мастер контрапункта (несколько мелодий одновременно), гармонии и формы - он соединил немецкие, итальянские и французские влияния в новое целое.
- Работа в Лейпциге: 27 лет был томаскантором в Лейпциге - почти каждую неделю писал новую кантату для богослужения, преподавал и руководил хором и школой.
- Факт про строй: «Хорошо темперированный клавир» задумывался как демонстрация того, что при правильной настройке («хорошая темперация») можно играть во всех тональностях на одном клавишном инструменте - для того времени это было революционно.
- Наследие: После смерти его почти забыли; исполнение «Страстей по Матфею» Мендельсоном в 1829 году запустило «баховское возрождение», и с тех пор его музыка - стандарт для обучения и концертов.
- Современный факт: Произведения Баха продолжают находить - в 2025 году две ранние органные чаконы признали подлинными и впервые за примерно 300 лет исполнили в Лейпциге, где он похоронен.

## Domenico Scarlatti essentials {#domenico-scarlatti}

Name (ru): Доменико Скарлатти

- Who he was: Italian Baroque composer and keyboard virtuoso who spent much of his career at the courts of Portugal and Spain.
- 555 sonatas: He wrote around 555 one-movement keyboard sonatas that pushed the boundaries of harmony, hand-crossing and technique for the harpsichord and early piano.
- Royal teacher: At the Spanish court he served as music master to Maria Barbara, first a Portuguese princess and later Queen of Spain, tailoring many sonatas for her playing.
- Iberian flavor: His music often echoes Spanish guitar strumming, castanet-like rhythms and folk dances, giving his sonatas a distinctive Iberian color.
- Lasting influence: Today his sonatas are core repertoire for pianists and harpsichordists, used both as brilliant concert pieces and as technical studies.


## Domenico Scarlatti essentials (ru) {#domenico-scarlatti}

- Кем он был: Итальянский композитор барокко и виртуоз клавишных, значительную часть карьеры провел при дворах Португалии и Испании.
- 555 сонат: Он написал около 555 одночастных клавирных сонат, которые расширили границы гармонии, перекрещивания рук и техники для клавесина и раннего фортепиано.
- Учитель при дворе: В испанском дворе он был музыкальным наставником Марии Барбары - сначала португальской принцессы, затем королевы Испании - и подстраивал многие сонаты под ее игру.
- Иберский колорит: В его музыке часто слышны отголоски испанской гитары, «кастаньетные» ритмы и народные танцы - это придает сонатам узнаваемый иберийский характер.
- Долгое влияние: Сегодня его сонаты - базовый репертуар пианистов и клавесинистов, и как блестящие концертные номера, и как технические этюды.

## George Frideric Handel essentials {#george-frideric-handel}

Name (ru): Георг Фридрих Гендель

- Who he was: German-born Baroque composer who became a British citizen and made his career in London writing operas, oratorios and instrumental music.
- Messiah and Hallelujah: His oratorio Messiah, especially the "Hallelujah" chorus, became one of the most famous pieces in Western music and a staple of choral life.
- Stage to oratorio: After financial troubles with Italian opera companies, he pivoted to English-language oratorios that could be performed without full staging and became hugely popular.
- Royal occasions: He wrote festive works like Water Music and Music for the Royal Fireworks for open-air royal celebrations on the Thames and in London.
- End of life: Even after he went blind, he continued to direct performances from the keyboard, remaining a public musical figure until shortly before his death.


## George Frideric Handel essentials (ru) {#george-frideric-handel}

- Кем он был: Родился в Германии, но стал британским подданным и сделал карьеру в Лондоне, сочиняя оперы, оратории и инструментальную музыку.
- «Мессия» и «Аллилуйя»: Его оратория Messiah, особенно хор «Hallelujah», стала одним из самых известных произведений западной музыки и опорой хоровой традиции.
- От сцены к оратории: После финансовых проблем с итальянскими оперными компаниями он переключился на англоязычные оратории, которые можно было исполнять без полноценной постановки - и они стали очень популярны.
- Королевские события: Он писал праздничные сочинения вроде Water Music и Music for the Royal Fireworks для королевских праздников под открытым небом на Темзе и в Лондоне.
- Конец жизни: Даже ослепнув, он продолжал руководить исполнениями от клавишного инструмента и оставался публичной музыкальной фигурой почти до самой смерти.

## Joseph Haydn essentials {#joseph-haydn}

Name (ru): Йозеф Гайдн

- Who he was: Austrian Classical composer often called the "father of the symphony" and "father of the string quartet".
- Esterházy years: For decades he worked for the Esterházy princes on a remote estate, writing symphonies, quartets and operas for their private orchestra.
- Inventive symphonies: He wrote over 100 symphonies, including the "Surprise" and the late "London" symphonies, full of musical jokes, experiments and sudden turns.
- Teacher and mentor: He taught the young Beethoven and was a major influence on Mozart; all three knew and admired each other.
- Character: His music is known for wit, clarity and warmth, often starting from simple ideas and spinning them into sophisticated structures.


## Joseph Haydn essentials (ru) {#joseph-haydn}

- Кем он был: Австрийский композитор классицизма, которого часто называют «отцом симфонии» и «отцом струнного квартета».
- Годы у Эстерхази: Десятилетиями он служил князьям Эстерхази в удаленной резиденции и писал симфонии, квартеты и оперы для их придворного оркестра.
- Изобретательные симфонии: Он создал более 100 симфоний, включая «Сюрприз» и поздние «Лондонские» - с музыкальными шутками, экспериментами и неожиданными поворотами.
- Учитель и наставник: Он преподавал юному Бетховену и сильно повлиял на Моцарта - все трое знали друг друга и высоко ценили.
- Характер музыки: Его стиль знаменит остроумием, ясностью и теплотой - он часто берет простую идею и развивает ее в сложную, мастерски выстроенную форму.

## Wolfgang Amadeus Mozart essentials {#wolfgang-amadeus-mozart}

Name (ru): Вольфганг Амадей Моцарт

- Who he was: Salzburg-born Classical composer and child prodigy who toured Europe, composing symphonies and operas from an early age.
- Prodigy years: As a boy he dazzled courts across Europe on keyboard and violin, improvising, composing and performing from memory.
- Operatic drama: His operas like The Magic Flute, Don Giovanni and The Marriage of Figaro combine unforgettable tunes with sharp human psychology and social satire.
- Versatile genius: He wrote in almost every genre of his time's music – piano concertos, symphonies, chamber works, sacred music and the unfinished Requiem.
- Short life, huge legacy: He died at 35 in Vienna, modestly buried, but his music became a universal symbol of melodic beauty and perfect Classical style.


## Wolfgang Amadeus Mozart essentials (ru) {#wolfgang-amadeus-mozart}

- Кем он был: Родился в Зальцбурге; композитор классицизма и ребенок-вундеркинд, который ездил по Европе и с ранних лет писал симфонии и оперы.
- Годы вундеркинда: В детстве он поражал европейские дворы игрой на клавишных и скрипке - импровизировал, сочинял и исполнял по памяти.
- Оперная драматургия: Его оперы - The Magic Flute, Don Giovanni, The Marriage of Figaro - соединяют незабываемые мелодии с тонкой психологией и социальной сатирой.
- Универсальный гений: Он писал почти во всех жанрах своей эпохи - концерты, симфонии, камерную и духовную музыку, включая незавершенный Requiem.
- Короткая жизнь, огромная слава: Он умер в Вене в 35 лет и был похоронен скромно, но его музыка стала символом мелодической красоты и идеального классического стиля.

## Ludwig van Beethoven essentials {#ludwig-van-beethoven}

Name (ru): Людвиг ван Бетховен

- Who he was: German composer and pianist who bridged the Classical and Romantic eras and radically expanded what symphonies and sonatas could be.
- Deaf composer: He began to lose his hearing in his late twenties, yet wrote many of his greatest works when almost or completely deaf.
- Landmark works: His Third ("Eroica"), Fifth and Ninth symphonies, the late string quartets and 32 piano sonatas reshaped Western music.
- Heroic image: His music often sounds like a struggle from darkness to light, helping create the modern image of the tormented, independent artist.

## Ludwig van Beethoven essentials (ru) {#ludwig-van-beethoven}

- Кем он был: Немецкий композитор и пианист, который соединил классицизм и романтизм и радикально расширил возможности симфоний и сонат.
- Глухой композитор: Он начал терять слух в конце двадцатых, но написал многие из величайших произведений, будучи почти или полностью глухим.
- Вехи: Третья («Eroica»), Пятая и Девятая симфонии, поздние струнные квартеты и 32 фортепианные сонаты изменили историю западной музыки.
- Героический образ: Его музыка часто звучит как борьба от тьмы к свету - так сформировался современный образ независимого, «страдающего» художника.

## Niccolò Paganini essentials {#niccolo-paganini}

Name (ru): Никколо Паганини

- Who he was: Genoese violin virtuoso and composer of the early 19th century, famed for his almost superhuman technique.
- 24 Caprices: His 24 Caprices for Solo Violin became legendary as some of the most demanding pieces ever written for the instrument, a rite of passage for virtuosos.
- Violin tricks: He popularized advanced techniques like left-hand pizzicato, harmonics and extreme leaps, stretching what the violin seemed capable of.
- Devil legend: His gaunt appearance, showmanship and private life fed rumors that he had sold his soul to the devil in exchange for his talent.
- Inspiration for others: Composers from Liszt to Rachmaninoff later wrote dazzling variations on the theme of his last Caprice.


## Niccolò Paganini essentials (ru) {#niccolo-paganini}

- Кем он был: Генуэзский скрипичный виртуоз и композитор начала XIX века, знаменитый почти «сверхчеловеческой» техникой.
- 24 каприса: Его 24 Caprices для сольной скрипки стали легендой как одни из самых трудных пьес для инструмента - настоящий обряд посвящения для виртуозов.
- Скрипичные приемы: Он популяризировал сложные техники вроде левого пиццикато, флажолетов и экстремальных скачков, расширяя границы возможного для скрипки.
- «Дьявольская» легенда: Худоба, сценический эффект и личная жизнь породили слухи, будто он «продал душу дьяволу» ради таланта.
- Вдохновение для других: От Листа до Рахманинова композиторы писали блестящие вариации на тему его последнего каприса.

## Franz Schubert essentials {#franz-schubert}

Name (ru): Франц Шуберт

- Who he was: Viennese early Romantic composer who lived only 31 years but left a huge body of songs, chamber works and symphonies.
- Master of song: He wrote over 600 Lieder, including "Erlkönig", "Ave Maria" and the song cycles Winterreise and Die schöne Müllerin.
- Beyond songs: His "Unfinished" Symphony, the "Great" C major symphony and works like the "Trout" Quintet are pillars of orchestral and chamber music.
- Schubertiades: During his life he was known mainly within a circle of friends who gathered for informal evenings of his music.
- Posthumous fame: Much of his music was only published and truly appreciated after his death.


## Franz Schubert essentials (ru) {#franz-schubert}

- Кем он был: Венский композитор раннего романтизма; прожил всего 31 год, но оставил огромное наследие песен, камерной музыки и симфоний.
- Мастер песни: Он написал более 600 Lied, включая «Erlkoenig», «Ave Maria» и циклы Winterreise и Die schoene Muellerin.
- Не только песни: Его «Unfinished» Symphony, «Great» C major symphony и произведения вроде «Trout» Quintet - опоры оркестрового и камерного репертуара.
- Schubertiades: При жизни он был известен в основном в кругу друзей, которые собирались на неформальные вечера его музыки.
- Посмертная слава: Значительная часть его произведений была опубликована и по-настоящему оценена уже после смерти.

## Hector Berlioz essentials {#hector-berlioz}

Name (ru): Гектор Берлиоз

- Who he was: French Romantic composer and conductor, a pioneer of large-scale programmatic symphonic music.
- Symphonie fantastique: His most famous work, a revolutionary program symphony that follows an obsessive, dreamlike narrative and uses a recurring idée fixe.
- Orchestral imagination: He stretched the size, color and possibilities of the orchestra, later documented in his Treatise on Instrumentation.
- Other key works: Harold in Italy, the dramatic legend The Damnation of Faust and his massive opera Les Troyens.


## Hector Berlioz essentials (ru) {#hector-berlioz}

- Кем он был: Французский композитор и дирижер романтизма, один из пионеров масштабной программной симфонической музыки.
- Symphonie fantastique: Его самое известное произведение - революционная программная симфония с навязчивым, почти сновидческим сюжетом и повторяющейся idee fixe.
- Оркестровое воображение: Он расширил размеры, краски и возможности оркестра, позже изложив это в своей Treatise on Instrumentation.
- Другие ключевые вещи: Harold in Italy, драматическая легенда The Damnation of Faust и монументальная опера Les Troyens.

## Mikhail Glinka essentials {#mikhail-glinka}

Name (ru): Михаил Глинка

- Who he was: Russian composer often called the father of Russian classical music and the founder of the Russian national school.
- Operatic pioneer: His operas A Life for the Tsar and Ruslan and Lyudmila were among the first to use Russian history and folklore in a distinctively Russian musical language.
- Folk roots: He drew on Russian folk songs and dances, blending them with Western techniques to create something new for his country's audiences.
- Influence: Later Russian composers, especially the group known as "The Five", took his music as a starting point for their own national style.


## Mikhail Glinka essentials (ru) {#mikhail-glinka}

- Кем он был: Русский композитор, которого часто называют отцом русской классической музыки и основателем национальной школы.
- Оперный первопроходец: Его оперы A Life for the Tsar и Ruslan and Lyudmila - одни из первых, где русская история и фольклор звучат на собственном музыкальном языке.
- Народные корни: Он опирался на русские народные песни и танцы, соединяя их с западными приемами и создавая новое для отечественной аудитории.
- Влияние: Позднейшие русские композиторы, особенно «The Five», воспринимали его музыку как отправную точку для развития национального стиля.

## Felix Mendelssohn essentials {#felix-mendelssohn}

Name (ru): Феликс Мендельсон

- Who he was: German early Romantic composer, pianist, organist and one of the leading conductors of his generation.
- Prodigy and classicist: As a teenager he wrote works like the Octet and the overture to A Midsummer Night's Dream, admired for their clarity and elegance.
- Bach revival: In 1829 he conducted a landmark performance of Bach's St Matthew Passion, helping to bring Bach back into the concert hall.
- Builder of institutions: He founded the Leipzig Conservatory and raised the standard of orchestral playing through his work with the Leipzig Gewandhaus Orchestra.
- Famous pieces: Today listeners know him for the Violin Concerto, the Italian and Scottish symphonies and the Wedding March from A Midsummer Night’s Dream.


## Felix Mendelssohn essentials (ru) {#felix-mendelssohn}

- Кем он был: Немецкий композитор раннего романтизма, пианист, органист и один из ведущих дирижеров своего поколения.
- Вундеркинд и «классик»: Еще подростком он написал произведения вроде Octet и увертюры к A Midsummer Night's Dream - их ценят за ясность и элегантность.
- Возрождение Баха: В 1829 году он дирижировал историческим исполнением баховских St Matthew Passion, помогая вернуть Баха в концертную жизнь.
- Создатель институций: Он основал Лейпцигскую консерваторию и поднял уровень оркестрового исполнения в работе с Leipzig Gewandhaus Orchestra.
- Самые известные вещи: Сегодня его чаще всего знают по Violin Concerto, «Italian» и «Scottish» симфониям и Wedding March из A Midsummer Night’s Dream.

## Frédéric Chopin essentials {#frederic-chopin}

Name (ru): Фредерик Шопен

- Who he was: Polish composer and piano virtuoso who spent much of his adult life in Paris and wrote almost exclusively for the piano.
- Poet of the piano: His nocturnes, ballades, waltzes, mazurkas and polonaises turned keyboard miniatures into highly expressive, poetic pieces.
- Polish spirit: He transformed Polish dances and rhythms into refined concert music, making his works symbols of Polish identity.
- Personal style: Singing right-hand melodies, rich harmonies and subtle rubato became hallmarks of his intimate, inward-looking style.
- Life and legend: Frail health, exile from Poland and his long relationship with the writer George Sand all color how people hear his music.


## Frédéric Chopin essentials (ru) {#frederic-chopin}

- Кем он был: Польский композитор и пианист-виртуоз, который большую часть взрослой жизни провел в Париже и писал почти исключительно для фортепиано.
- Поэт фортепиано: Его nocturnes, ballades, waltzes, mazurkas и polonaises превратили «миниатюры» в глубоко выразительную, поэтическую музыку.
- Польский дух: Он преобразил польские танцевальные ритмы в утонченную концертную форму - его произведения стали символами польской идентичности.
- Личный почерк: Певучие мелодии в правой руке, богатая гармония и тонкое rubato - главные приметы его интимного, внутреннего стиля.
- Жизнь и легенда: Хрупкое здоровье, вынужденная разлука с Польшей и долгие отношения с писательницей Жорж Санд влияют на то, как слушатели воспринимают его музыку.

## Robert Schumann essentials {#robert-schumann}

Name (ru): Роберт Шуман

- Who he was: German Romantic composer, pianist and influential music critic.
- Piano and song cycles: He wrote characterful piano works like Carnaval and Kinderszenen, as well as major song cycles such as Dichterliebe.
- Symphonies and chamber music: His four symphonies and many chamber pieces explore more inward, poetic sides of Romanticism.
- Critic and advocate: As editor of the journal Neue Zeitschrift für Musik he championed young talents like Chopin and Brahms.
- Struggles: He battled mental illness and spent his final years in an asylum, where his wife Clara and Brahms remained devoted supporters.


## Robert Schumann essentials (ru) {#robert-schumann}

- Кем он был: Немецкий композитор романтизма, пианист и влиятельный музыкальный критик.
- Фортепиано и песни: Он писал яркие фортепианные циклы вроде Carnaval и Kinderszenen, а также крупные вокальные циклы, например Dichterliebe.
- Симфонии и камерная музыка: Его четыре симфонии и многие камерные произведения исследуют более интимную, поэтичную сторону романтизма.
- Критик и защитник: Будучи редактором журнала Neue Zeitschrift fuer Musik, он поддерживал молодых талантов - в том числе Шопена и Брамса.
- Трудности: Он боролся с психической болезнью и провел последние годы в лечебнице; жена Клара и Брамс оставались рядом и поддерживали его.

## Franz Liszt essentials {#franz-liszt}

Name (ru): Франц Лист

- Who he was: Hungarian pianist-composer and 19th-century superstar, famed for his explosive virtuosity and showmanship.
- Piano wizard: He effectively invented the modern solo piano recital and pushed piano technique to new extremes.
- New forms: He developed the symphonic poem and used thematic transformation, influencing Wagner and many later composers.
- Late style: His late works are harmonically daring and often bleak, foreshadowing 20th-century modernism.
- Generous mentor: He taught and promoted many younger musicians, often giving money and support to colleagues in need.


## Franz Liszt essentials (ru) {#franz-liszt}

- Кем он был: Венгерский пианист-композитор и суперзвезда XIX века, знаменитый взрывной виртуозностью и сценическим эффектом.
- Волшебник фортепиано: Он фактически изобрел современный сольный фортепианный концерт-«рецитал» и довел технику игры до новых пределов.
- Новые формы: Он развил жанр симфонической поэмы и применял тематическую трансформацию, повлияв на Вагнера и многих поздних композиторов.
- Поздний стиль: Его поздние пьесы гармонически смелые и часто мрачные - они предвосхищают модернизм XX века.
- Щедрый наставник: Он обучал и продвигал молодых музыкантов и нередко помогал коллегам деньгами и поддержкой.

## Richard Wagner essentials {#richard-wagner}

Name (ru): Рихард Вагнер

- Who he was: German composer and dramatist best known for his large-scale operas, which he called "music dramas".
- Leitmotifs: He used recurring musical ideas to represent characters, objects and ideas, especially in his four-opera Ring cycle.
- Harmonic revolution: Works like Tristan und Isolde stretched traditional harmony and influenced the move toward modern music.
- Bayreuth: He designed and built his own festival theater in Bayreuth, dedicated to staging his works on his own terms.
- Controversy: His writings and some of his views, especially his antisemitism, remain deeply troubling and widely discussed.


## Richard Wagner essentials (ru) {#richard-wagner}

- Кем он был: Немецкий композитор и драматург, известный масштабными операми, которые он называл «музыкальными драмами».
- Лейтмотивы: Он использовал повторяющиеся музыкальные идеи, чтобы обозначать персонажей, предметы и идеи - особенно в четырехчастном цикле Ring.
- Гармоническая революция: Произведения вроде Tristan und Isolde растянули традиционную гармонию и повлияли на движение к музыке модерна.
- Байройт: Он спроектировал и построил собственный фестивальный театр в Байройте, чтобы ставить свои произведения на своих условиях.
- Контроверсии: Его тексты и некоторые взгляды, особенно антисемитизм, остаются глубоко тревожными и широко обсуждаются.

## Giuseppe Verdi essentials {#giuseppe-verdi}

Name (ru): Джузеппе Верди

- Who he was: Leading Italian opera composer of the 19th century, central to the tradition of Italian grand opera.

- Who he was: Leading Italian opera composer of the 19th century, central to the tradition of Italian grand opera.
- Hit operas: Rigoletto, Il trovatore, La traviata, Aida, Otello and Falstaff are among his many enduring stage works.
- Voice and drama: He focused on clear vocal lines and tightly drawn characters, making his operas powerful vehicles for emotion and theater.
- National symbol: Choruses like "Va, pensiero" from Nabucco became associated with the Italian unification movement.
- Late flowering: His final two Shakespeare-based operas, Otello and Falstaff, are often seen as astonishing late masterpieces.


## Giuseppe Verdi essentials (ru) {#giuseppe-verdi}

- Кем он был: Ведущий итальянский оперный композитор XIX века, центральная фигура традиции итальянской grand opera.
- Хит-оперы: Rigoletto, Il trovatore, La traviata, Aida, Otello и Falstaff - лишь часть его нестареющего сценического репертуара.
- Голос и драма: Он делал ставку на ясные вокальные линии и четко прописанные характеры, превращая оперы в мощный инструмент эмоций и театра.
- Национальный символ: Хор «Va, pensiero» из Nabucco стал ассоциироваться с движением за объединение Италии.
- Поздний расцвет: Его последние две оперы по Шекспиру - Otello и Falstaff - часто считают поразительными поздними шедеврами.

## Jacques Offenbach essentials {#jaques-offenbach}

Name (ru): Жак Оффенбах

- Who he was: German-born (Cologne) composer and cellist who became a French musical celebrity, best known as the master of operetta.
- Paris hit-maker: He founded and ran his own theater in Paris (Bouffes-Parisiens), where he produced witty, fast-moving stage works packed with memorable tunes.
- Queen of satire: His operettas often poke fun at politics, social manners and mythic heroes - light on the surface, but sharply observant.
- Famous works: Orphée aux enfers (with the famous “can-can”/Infernal Galop), La belle Hélène and La vie parisienne defined the sound of Second Empire Paris.
- One serious masterpiece: Late in life he wrote the darker, larger-scale opera The Tales of Hoffmann, left unfinished at his death and later completed by others.

## Jacques Offenbach essentials (ru) {#jaques-offenbach}

- Кем он был: Родился в Германии (Кёльн), композитор и виолончелист, ставший французской музыкальной знаменитостью, мастер оперетты.
- Парижский хит-мейкер: Он основал и вел собственный театр в Париже (Bouffes-Parisiens), где ставил остроумные, динамичные спектакли с запоминающимися мелодиями.
- Король сатиры: Его оперетты часто высмеивают политику, нравы и мифологических героев - внешне легкие, но очень наблюдательные.
- Самые известные: Orphee aux enfers (с знаменитым «can-can» - Infernal Galop), La belle Helene и La vie parisienne определили звучание Парижа эпохи Второй империи.
- Один серьезный шедевр: В конце жизни он написал более темную и масштабную оперу The Tales of Hoffmann - она осталась незавершенной и позже была дополнена другими.

## Johann Strauss II essentials {#johann-strauss-ii}

Name (ru): Иоганн Штраус II

- Who he was: Austrian composer and conductor known as the "Waltz King", son of Johann Strauss I.
- Dance favorites: He wrote The Blue Danube, Tales from the Vienna Woods, the Emperor Waltz and many other waltzes and polkas.
- Operetta success: His operetta Die Fledermaus captures the glittering, slightly ironic world of late 19th-century Vienna.
- Viennese image: His music largely defines how people imagine the sound of old Vienna – swirling waltzes, champagne and ballrooms.


## Johann Strauss II essentials (ru) {#johann-strauss-ii}

- Кем он был: Австрийский композитор и дирижер, «король вальса», сын Иоганна Штрауса-старшего.
- Танцевальные хиты: Он написал «An der schoenen blauen Donau», «Geschichten aus dem Wienerwald», «Kaiserwalzer» и множество других вальсов и полек.
- Успех в оперетте: Его Die Fledermaus передает блеск и легкую иронию поздневенской эпохи XIX века.
- Образ Вены: Его музыка во многом определяет то, как мы «слышим» старую Вену - вальсы, шампанское и бальные залы.

## Johannes Brahms essentials {#johannes-brahms}

Name (ru): Иоганнес Брамс

- Who he was: German Romantic composer, pianist and conductor, based mainly in Hamburg and Vienna.
- Symphonic craft: His four symphonies, concertos and chamber works are admired for their dense, organic development and structural control.
- Heir to Beethoven: Many contemporaries saw him as Beethoven’s symphonic successor, which made him famously self-critical.
- Absolute music: Unlike Wagner and Liszt, he focused on "pure" instrumental music rather than programmatic stories, fueling a famous aesthetic debate.
- Friendships: His close relationships with Robert and Clara Schumann were central to his personal and artistic life.


## Johannes Brahms essentials (ru) {#johannes-brahms}

- Кем он был: Немецкий композитор романтизма, пианист и дирижер, жил главным образом в Гамбурге и Вене.
- Симфоническое мастерство: Его четыре симфонии, концерты и камерная музыка ценятся за плотное развитие и строгую конструкцию.
- «Наследник Бетховена»: Многие современники видели в нем преемника бетховенской симфонической линии - из-за этого он был особенно самокритичен.
- «Абсолютная музыка»: В отличие от Вагнера и Листа, он делал ставку на «чистую» инструментальную музыку, а не на программные сюжеты - это подпитывало известный эстетический спор эпохи.
- Дружбы: Его близкие отношения с Робертом и Кларой Шуман были важны для личной и творческой жизни.

## Alexander Borodin essentials {#alexander-borodin}

Name (ru): Александр Бородин

- Who he was: Russian composer and professional chemist, member of the nationalist group known as "The Mighty Handful" or "The Five".
- Double career: He made significant contributions to organic chemistry while composing in his limited spare time.
- Signature works: His opera Prince Igor (with its famous Polovtsian Dances), two symphonies and In the Steppes of Central Asia are his best-known pieces.
- Posthumous help: Friends like Rimsky-Korsakov and Glazunov edited and completed several of his works after his early death.


## Alexander Borodin essentials (ru) {#alexander-borodin}

- Кем он был: Русский композитор и профессиональный химик, участник национальной группы «The Mighty Handful» - «The Five».
- Двойная карьера: Он внес заметный вклад в органическую химию, а сочинял музыку в ограниченное свободное время.
- Главные произведения: Опера Prince Igor (с «Polovtsian Dances»), две симфонии и In the Steppes of Central Asia - его самые известные сочинения.
- Посмертная помощь: Друзья - например, Римский-Корсаков и Глазунов - редактировали и завершали некоторые его работы после ранней смерти.

## Camille Saint-Saëns essentials {#camille-saint-saens}

Name (ru): Камиль Сен-Санс

- Who he was: French composer, pianist, organist and child prodigy, active from the mid-19th into the early 20th century.
- Versatile output: He wrote symphonies, concertos, chamber music, operas and choral works, including the "Organ" Symphony and Samson and Delilah.
- Carnival of the Animals: His humorous suite The Carnival of the Animals, originally written for a private event, is now one of his most popular pieces.
- Musical organizer: He helped champion both older music (like Bach) and younger French composers, and co-founded the Société nationale de musique.


## Camille Saint-Saëns essentials (ru) {#camille-saint-saens}

- Кем он был: Французский композитор, пианист, органист и вундеркинд, активный с середины XIX до начала XX века.
- Универсальный автор: Он писал симфонии, концерты, камерную музыку, оперы и хоровые произведения - включая «Organ» Symphony и Samson and Delilah.
- «Карнавал животных»: Его юмористическая сюита The Carnival of the Animals, написанная сначала для частного случая, стала одним из самых популярных сочинений.
- Организатор музыкальной жизни: Он поддерживал и старую музыку (например, Баха), и молодых французских композиторов, а также был сооснователем Société nationale de musique.

## Georges Bizet essentials {#georges-bizet}

Name (ru): Жорж Бизе

- Who he was: French Romantic composer who died young but left one of the most famous operas ever written.
- Carmen: His opera Carmen shocked some early audiences with its realism and "dangerous" heroine, yet it later became a cornerstone of the repertoire.
- Other works: Music for L’Arlésienne and the opera The Pearl Fishers also remain popular in concert halls.
- Tragic timing: He died at 36, shortly after Carmen’s troubled premiere, never seeing the scale of its later success.


## Georges Bizet essentials (ru) {#georges-bizet}

- Кем он был: Французский композитор романтизма, умерший молодым, но оставивший одну из самых знаменитых опер в истории.
- Carmen: Его Carmen шокировала часть публики реализмом и «опасной» героиней, но позже стала краеугольным камнем оперного репертуара.
- Другие произведения: Музыка к L’Arlesienne и опера The Pearl Fishers также популярны в концертах.
- Трагическая развязка: Он умер в 36 лет вскоре после проблемной премьеры Carmen и не увидел масштаба ее будущего успеха.

## Modest Mussorgsky essentials {#modest-mussorgsky}

Name (ru): Модест Мусоргский

- Who he was: Russian composer and member of "The Five", committed to creating a distinctly Russian style of music.
- Bold style: His music often uses speech-like melodies, rough harmonies and vivid scenes drawn from Russian history and folklore.
- Key works: The opera Boris Godunov, the piano suite Pictures at an Exhibition and the tone poem Night on Bald Mountain are his best-known pieces.
- Revisions: Many of his works were left unfinished or rough and were later revised or orchestrated by others, especially Rimsky-Korsakov.


## Modest Mussorgsky essentials (ru) {#modest-mussorgsky}

- Кем он был: Русский композитор и участник «The Five», стремившийся создать по-настоящему русский стиль.
- Смелая манера: Его музыка часто использует «речевые» мелодии, грубоватую гармонию и яркие сцены из русской истории и фольклора.
- Ключевые вещи: Опера Boris Godunov, фортепианная сюита Pictures at an Exhibition и симфоническая поэма Night on Bald Mountain - самые известные произведения.
- Редакции: Многие сочинения остались незавершенными или «черновыми» и позже перерабатывались или оркестровались другими, особенно Римским-Корсаковым.

## Pyotr Ilyich Tchaikovsky essentials {#pyotr-ilyich-tchaikovsky}

Name (ru): Петр Ильич Чайковский

- Who he was: Russian Romantic composer whose music combines Western forms with a strong sense of melody and emotional directness.
- Ballets and symphonies: Swan Lake, The Sleeping Beauty and The Nutcracker, along with his later symphonies, are central to 19th-century repertoire.
- Concert favorites: His Piano Concerto No. 1 and Violin Concerto are beloved showpieces for soloists.
- Emotional intensity: His music often feels highly personal, full of longing, drama and sudden mood shifts.
- Global reach: He was one of the first Russian composers to achieve truly international fame in his own lifetime.


## Pyotr Ilyich Tchaikovsky essentials (ru) {#pyotr-ilyich-tchaikovsky}

- Кем он был: Русский композитор-романтик, чья музыка соединяет западные формы с мощным мелодизмом и прямой эмоциональностью.
- Балеты и симфонии: Swan Lake, The Sleeping Beauty и The Nutcracker, а также поздние симфонии - центральные произведения репертуара XIX века.
- Концертные хиты: Его Piano Concerto No. 1 и Violin Concerto - любимые «витринные» пьесы солистов.
- Эмоциональная сила: Его музыка часто ощущается очень личной - с тоской, драмой и резкими сменами настроения.
- Международная известность: Он был одним из первых русских композиторов, добившихся по-настоящему мировой славы еще при жизни.


## Antonín Dvořák essentials {#antonin-dvorak}

Name (ru): Антонин Дворжак

- Who he was: Czech Romantic composer who blended classical forms with folk-inspired melodies and rhythms from Bohemia and Moravia.
- New World: His Symphony "From the New World" was written during his stay in the United States and is one of the most popular symphonies ever.
- Folk spirit: Works like the Slavonic Dances and the Cello Concerto in B minor show his gift for memorable tunes and dance-like energy.
- American chapter: As director of the National Conservatory in New York, he encouraged American composers to draw on spirituals and Native American music.


## Antonín Dvořák essentials (ru) {#antonin-dvorak}

- Кем он был: Чешский композитор-романтик, соединявший классические формы с мелодикой и ритмами, вдохновленными фольклором Богемии и Моравии.
- «Новый свет»: Его симфония «From the New World», написанная в США, стала одной из самых популярных симфоний в истории.
- Народный дух: Произведения вроде Slavonic Dances и Cello Concerto in B minor показывают его дар к запоминающимся темам и танцевальной энергии.
- Американская глава: Возглавляя National Conservatory в Нью-Йорке, он призывал американских композиторов опираться на спиричуэлс и музыку коренных народов.

## Edvard Grieg essentials {#edvard-grieg}

Name (ru): Эдвард Григ

- Who he was: Norwegian Romantic composer and pianist closely associated with his country’s national identity.
- Peer Gynt: His incidental music for Peer Gynt, including "Morning Mood" and "In the Hall of the Mountain King", became concert-hall hits.
- Piano Concerto: His Piano Concerto in A minor is a favorite with audiences and soloists alike.
- National color: He drew heavily on Norwegian folk tunes and dance rhythms, giving his music a distinctive Nordic flavor.


## Edvard Grieg essentials (ru) {#edvard-grieg}

- Кем он был: Норвежский композитор-романтик и пианист, тесно связанный с национальной идентичностью своей страны.
- Peer Gynt: Его музыка к Peer Gynt, включая «Morning Mood» и «In the Hall of the Mountain King», стала хитом концертных залов.
- Фортепианный концерт: Piano Concerto in A minor - любимец публики и солистов.
- Национальный колорит: Он активно использовал норвежские народные мелодии и танцевальные ритмы, придавая музыке узнаваемый северный характер.


## Nikolai Rimsky-Korsakov essentials {#nikolai-rimsky-korsakov}

Name (ru): Николай Римский-Корсаков

- Who he was: Russian composer, teacher and master orchestrator, also a member of "The Five".
- Orchestral color: Pieces like Scheherazade, Capriccio Espagnol and the Russian Easter Festival Overture showcase his brilliant use of orchestral color.
- Teacher: He taught at the Saint Petersburg Conservatory; students included Stravinsky and many other important composers.
- Editor and arranger: He edited and orchestrated works by colleagues such as Mussorgsky and Borodin, shaping how their music is often heard.

## Nikolai Rimsky-Korsakov essentials (de) {#nikolai-rimsky-korsakov}

- Wer er war: Russischer Komponist, Lehrer und Meister der Orchestrierung, ebenfalls Mitglied der "Fuenf".
- Orchesterfarben: Stuecke wie Scheherazade, Capriccio Espagnol und die Russian Easter Festival Overture zeigen seine brillante Klangfarbenkunst.
- Lehrer: Er unterrichtete am Petersburger Konservatorium; zu seinen Schuelern gehoerten unter anderem Stravinsky und viele weitere wichtige Komponisten.
- Editor und Arrangeur: Er edierte und orchestrierte Werke von Kollegen wie Mussorgsky und Borodin und praegte damit, wie deren Musik oft gehoert wird.

## Nikolai Rimsky-Korsakov essentials (ru) {#nikolai-rimsky-korsakov}

- Кем он был: Русский композитор, педагог и мастер оркестровки, также участник группы «The Five».
- Оркестровые краски: Сочинения вроде Scheherazade, Capriccio Espagnol и Russian Easter Festival Overture демонстрируют его блестящую работу с тембром и цветом оркестра.
- Педагог: Он преподавал в Санкт-Петербургской консерватории; среди учеников - Стравинский и многие другие важные композиторы.
- Редактор и аранжировщик: Он редактировал и оркестровал произведения коллег - например, Мусоргского и Бородина - и тем самым повлиял на то, как их музыка часто звучит сегодня.

## Giacomo Puccini essentials {#giacomo-puccini}

Name (ru): Джакомо Пуччини

- Who he was: Italian opera composer and the leading figure of late Romantic Italian opera after Verdi, famous for sweeping melodies and intense theater.
- Verismo emotion: His operas often focus on vivid, realistic characters and high emotional stakes - love, jealousy, sacrifice - told with cinematic pacing.
- Signature operas: La bohème, Tosca and Madama Butterfly are among the most performed operas in the world; later works include Turandot (left unfinished at his death).
- Melodic genius: He had an exceptional gift for long, singing vocal lines and for writing orchestral textures that amplify the drama without drowning the voice.
- Craft and detail: Puccini was meticulous about staging, timing and atmosphere, using recurring motifs and carefully chosen sounds to paint scenes.

## Giacomo Puccini essentials (de) {#giacomo-puccini}

- Wer er war: Italienischer Opernkomponist und die Leitfigur der spaeten romantischen italienischen Oper nach Verdi - beruehmt fuer grosse Melodien und intensives Theater.
- Verismo-Gefuehl: Seine Opern zeigen oft lebendige, realistische Figuren und hohe emotionale Einsaetze - Liebe, Eifersucht, Opfer - mit fast filmischem Tempo.
- Signaturopern: La boheme, Tosca und Madama Butterfly gehoeren zu den meistgespielten Opern weltweit; spaetere Werke sind zum Beispiel Turandot (bei seinem Tod unvollendet).
- Melodisches Genie: Er hatte ein aussergewoehnliches Gespuer fuer lange, gesangliche Linien und fuer Orchestertexturen, die das Drama verstaerken, ohne die Stimme zu uebertoenen.
- Handwerk und Detail: Puccini war akribisch bei Inszenierung, Timing und Atmosphaere - mit wiederkehrenden Motiven und sorgfaeltig gewaelten Klangfarben.

## Giacomo Puccini essentials (ru) {#giacomo-puccini}

- Кем он был: Итальянский оперный композитор и главная фигура позднеромантической итальянской оперы после Верди, знаменитый широкими мелодиями и сильной театральностью.
- Эмоция веризма: Его оперы часто сосредоточены на ярких, реалистичных характерах и высоких эмоциональных ставках - любовь, ревность, жертва - с почти кинематографическим темпом.
- Главные оперы: La boheme, Tosca и Madama Butterfly - одни из самых исполняемых опер в мире; к поздним относится Turandot (осталась незавершенной на момент его смерти).
- Мелодический дар: Он обладал редким чувством длинной «певучей» вокальной линии и умел писать оркестровую ткань так, чтобы усиливать драму и не перекрывать голос.
- Точность и детали: Пуччини был педантичен в постановке, тайминге и атмосфере - использовал повторяющиеся мотивы и тщательно выбранные тембры, чтобы «рисовать» сцены.

## Gustav Mahler essentials {#gustav-mahler}

Name (ru): Густав Малер

- Who he was: Austro-Bohemian late Romantic composer and one of the leading conductors of his era.
- Big symphonies: His symphonies are vast in scale, mixing marches, folk tunes, chorales and existential questions about life and death.
- Song and symphony: Works like Das Lied von der Erde blend symphonic writing with song cycles, using poetry from many cultures.
- Conductor: He directed the Vienna Court Opera and later worked in New York, transforming orchestral and operatic standards.
- Posthumous fame: He predicted "my time will come" – and indeed, his music saw a huge revival in the mid-20th century.


## Gustav Mahler essentials (ru) {#gustav-mahler}

- Кем он был: Австро-богемский композитор позднего романтизма и один из ведущих дирижеров своей эпохи.
- Большие симфонии: Его симфонии огромны по масштабу - они смешивают марши, фольклорные интонации, хоралы и экзистенциальные вопросы о жизни и смерти.
- Песня и симфония: Произведения вроде Das Lied von der Erde соединяют симфоническое письмо с принципом песенного цикла и используют поэзию разных культур.
- Дирижер: Он руководил Венской придворной оперой и позже работал в Нью-Йорке, меняя стандарты оркестрового и оперного исполнения.
- Слава после смерти: Он говорил «мое время придет» - и действительно, в середине XX века его музыка пережила мощное возрождение.

## Claude Debussy essentials {#claude-debussy}

Name (ru): Клод Дебюсси

- Who he was: French composer often linked with musical impressionism, though he disliked the term.
- New sound world: Works like Prélude à l’après-midi d’un faune, La Mer and Pelléas et Mélisande create fluid, atmospheric soundscapes.
- Piano miniatures: Pieces such as Clair de lune and the Préludes use new harmonies and textures that influenced jazz and film music.
- Harmony and color: He broke away from traditional chord progressions, focusing on timbre and suggestion rather than clear-cut forms.


## Claude Debussy essentials (ru) {#claude-debussy}

- Кем он был: Французский композитор, часто связанный с музыкальным импрессионизмом, хотя сам он не любил этот термин.
- Новый звуковой мир: Произведения вроде Prelude a l'apres-midi d'un faune, La Mer и Pelleas et Melisande создают текучие, атмосферные звуковые пейзажи.
- Фортепианные миниатюры: Пьесы вроде Clair de lune и Preludes используют новые гармонии и фактуры, повлиявшие на джаз и киномузыку.
- Гармония и цвет: Он ушел от традиционных последовательностей аккордов и сделал акцент на тембре и намеке, а не на четких формах.

## Erik Satie essentials {#erik-satie}

Name (ru): Эрик Сати

- Who he was: Eccentric French composer and pianist, active in Paris around the turn of the 20th century.
- Quiet revolutions: His Gymnopédies and Gnossiennes use simple, repetitive patterns and unusual harmonies that foreshadow minimalism.
- Deadpan humor: He often gave his pieces odd titles and filled scores with surreal performance instructions.
- Influence: Though he wrote relatively little, his ideas influenced Debussy, Ravel and later avant-garde composers like John Cage.



## Erik Satie essentials (ru) {#erik-satie}

- Кем он был: Экцентричный французский композитор и пианист, работавший в Париже на рубеже XIX-XX веков.
- Тихие революции: Его Gymnopedies и Gnossiennes используют простые, повторяющиеся рисунки и необычную гармонию - они предвосхищают минимализм.
- Сухой юмор: Он давал пьесам странные названия и заполнял ноты сюрреалистическими указаниями исполнителю.
- Влияние: Хотя он написал сравнительно немного, его идеи повлияли на Дебюсси, Равеля и позднее на авангард - например, на Джона Кейджа.

## Alexander Scriabin essentials {#alexander-scriabin}

Name (ru): Александр Скрябин

- Who he was: Russian composer and pianist whose style evolved from Chopin-like Romanticism to highly individual, mystical harmonies.
- Piano focus: He wrote many characterful piano pieces and ten piano sonatas that trace his journey into more dissonant territory.
- Orchestral visions: Works like The Poem of Ecstasy and Prometheus: The Poem of Fire aim for ecstatic, almost otherworldly experiences.
- Mystical ideas: Influenced by theosophy, he imagined music as part of a grand spiritual transformation of humanity.


## Alexander Scriabin essentials (ru) {#alexander-scriabin}

- Кем он был: Русский композитор и пианист, чья манера прошла путь от романтизма «в духе Шопена» к очень индивидуальной, мистической гармонии.
- Фокус на фортепиано: Он написал множество характерных фортепианных пьес и десять сонат, в которых видно его движение в более диссонантные области.
- Оркестровые видения: Произведения вроде The Poem of Ecstasy и Prometheus: The Poem of Fire стремятся к экстатическому, почти потустороннему впечатлению.
- Мистические идеи: Под влиянием теософии он представлял музыку частью большого духовного преобразования человечества.

## Sergei Rachmaninoff essentials {#sergei-rachmaninoff}

Name (ru): Сергей Рахманинов

- Who he was: Russian composer, virtuoso pianist and conductor, a late Romantic whose career spanned pre- and post-revolutionary Russia.
- Piano showpieces: His Piano Concertos No. 2 and 3 and the Rhapsody on a Theme of Paganini are milestones of the piano repertoire.
- Lush style: He favored long, singing melodies, rich harmonies and dark orchestral colors.
- Exile: After the 1917 Revolution he left Russia and lived mainly in the United States, earning his living primarily as a touring pianist.


## Sergei Rachmaninoff essentials (ru) {#sergei-rachmaninoff}

- Кем он был: Русский композитор, пианист-виртуоз и дирижер, поздний романтик; его карьера охватила время до и после революции.
- Фортепианные вершины: Piano Concertos No. 2 и 3 и Rhapsody on a Theme of Paganini - ключевые произведения фортепианного репертуара.
- Богатый стиль: Он любил длинные «певучие» мелодии, насыщенную гармонию и темные оркестровые краски.
- Эмиграция: После революции 1917 года он покинул Россию и жил главным образом в США, зарабатывая прежде всего концертными турне как пианист.

## Maurice Ravel essentials {#maurice-ravel}

Name (ru): Морис Равель

- Who he was: French composer and master orchestrator, often associated with impressionism but with a very precise, classical sense of form.
- Boléro: His slowly intensifying piece Boléro, built almost entirely on one melody and rhythm, became unexpectedly famous worldwide.
- Color and craft: Works like Daphnis et Chloé, La Valse and his piano concertos show his fascination with texture, rhythm and clarity.
- Orchestrator: His orchestration of Mussorgsky’s Pictures at an Exhibition is now the most frequently performed version.


## Maurice Ravel essentials (ru) {#maurice-ravel}

- Кем он был: Французский композитор и мастер оркестровки, часто связан с импрессионизмом, но с очень точным, «классическим» чувством формы.
- Bolero: Его постепенно нарастающий Bolero, построенный почти целиком на одной мелодии и ритме, неожиданно стал всемирно знаменит.
- Цвет и ремесло: Произведения вроде Daphnis et Chloe, La Valse и фортепианные концерты показывают его интерес к фактуре, ритму и ясности.
- Оркестровщик: Его оркестровка Mussorgsky’s Pictures at an Exhibition стала самой часто исполняемой версией.

## Sergei Prokofiev essentials {#sergei-prokofiev}

Name (ru): Сергей Прокофьев

- Who he was: Russian and Soviet composer and pianist known for his sharp rhythms, bold harmonies and memorable tunes.
- Popular works: His ballet Romeo and Juliet, the children’s piece Peter and the Wolf and the "Classical" Symphony are among his most beloved works.
- Stage and screen: He wrote important film scores, including music for Sergei Eisenstein’s films Alexander Nevsky and Ivan the Terrible.
- Life between worlds: After years in the West he returned to the Soviet Union, where he balanced his own modernist instincts with official cultural demands.
- Strange coincidence: He died on the same day as Joseph Stalin in 1953, which overshadowed news of his death.


## Sergei Prokofiev essentials (ru) {#sergei-prokofiev}

- Кем он был: Русский и советский композитор и пианист, известный резкими ритмами, смелой гармонией и запоминающимися мелодиями.
- Популярные произведения: Его балет Romeo and Juliet, детская пьеса Peter and the Wolf и «Classical» Symphony - одни из самых любимых сочинений.
- Сцена и экран: Он написал важные кинопартитуры, включая музыку к фильмам Эйзенштейна Alexander Nevsky и Ivan the Terrible.
- Жизнь между мирами: После лет на Западе он вернулся в СССР и пытался сочетать собственные модернистские импульсы с официальными культурными требованиями.
- Странное совпадение: Он умер в один день со Сталиным (1953), и это затмило новости о его смерти.

## Dmitri Shostakovich essentials {#dmitri-shostakovich}

Name (ru): Дмитрий Шостакович

- Who he was: Soviet composer and pianist whose career played out under Stalin and the later Soviet regime.
- Symphonies under pressure: His fifteen symphonies and many quartets often balance official demands with hidden irony and personal tragedy.
- Signature works: The Fifth, Seventh ("Leningrad") and Tenth Symphonies, as well as his string quartets, are central to 20th-century repertoire.
- Double meaning: His music is famous for its mix of public heroism and private, coded messages, inviting listeners to read between the lines.


## Dmitri Shostakovich essentials (ru) {#dmitri-shostakovich}

- Кем он был: Советский композитор и пианист, чья карьера развивалась при Сталине и в более поздний советский период.
- Симфонии под давлением: Его пятнадцать симфоний и многие квартеты часто балансируют между официальными требованиями, скрытой иронией и личной трагедией.
- Главные произведения: Пятая, Седьмая («Leningrad») и Десятая симфонии, а также струнные квартеты - ключевые страницы репертуара XX века.
- Двойной смысл: Его музыка известна смесью публичного героизма и частных, «закодированных» посланий - она приглашает слушателя читать между строк.

# Composer fact sheets

## Vivaldi essentials (de) {#antonio-vivaldi}

- Wer er war: Venezianischer Barockkomponist und virtuoser Geiger, einer der einflussreichsten seiner Zeit.
- Spitzname: Genannt „Il Prete Rosso“ – der rote Priester –, weil er geweihter katholischer Priester mit auffallend rotem Haar war.
- Die Vier Jahreszeiten: Sein Hit sind die Vier Jahreszeiten, vier Violinkonzerte, die Gewitter, Vögel, eisige Winde oder betrunkenes Tanzen malen – eines der ersten und berühmtesten Beispiele für Programmmusik.
- Musik fürs Waisenhaus: Er arbeitete jahrzehntelang am Ospedale della Pietà in Venedig und schrieb Konzerte sowie geistliche Musik für ein rein weibliches Orchester aus Waisen- oder Findelkindern, das zur Touristenattraktion wurde.
- Konzert-Pionier: Er verfasste rund 500 Konzerte und prägte das Standardmodell des barocken Solokonzerts (schnell–langsam–schnell), das unter anderem Bach beeinflusste.
- Aufstieg, Absturz, Comeback: Zu Lebzeiten berühmt, starb er verarmt in Wien und geriet in Vergessenheit, bis im 20. Jahrhundert verschollene Manuskripte wiederentdeckt wurden und seine Musik zurück auf die Konzertbühnen kam.

## Bach essentials (de) {#johann-sebastian-bach}

- Wer er war: Deutscher Barockkomponist und Kirchenmusiker, heute oft als einer der groessten Komponisten aller Zeiten betrachtet.
- Was ihn besonders macht: Meister des Kontrapunkts (mehrere Melodien gleichzeitig), der Harmonik und der Form; er verschmolz deutsche, italienische und franzoesische Stile zu etwas Neuem.
- Job in Leipzig: 27 Jahre lang war er Thomaskantor in Leipzig - er schrieb fast jede Woche eine neue Kantate fuer den Gottesdienst, unterrichtete und leitete Chor und Schule.
- Stimmung-Nerd-Fakt: Das Wohltemperierte Klavier sollte zeigen, dass man mit einer passenden Stimmung ("wohltemperiert") auf demselben Tasteninstrument in allen Tonarten spielen kann - fuer die Zeit etwas Revolutionaeres.
- Nachwirkung: Nach seinem Tod fast vergessen; Mendelssohns Auffuehrung der Matthaeus-Passion 1829 loeste die "Bach-Renaissance" aus - seitdem gehoert seine Musik zum Standard in Studium, Auffuehrung und sogar im modernen Harmonieunterricht.
- Moderner Fakt: Neue Bach-Werke werden noch immer entdeckt - 2025 wurden zwei fruehe Orgel-Chaconnen als authentisch bestaetigt und in Leipzig erstmals seit etwa 300 Jahren wieder aufgefuehrt.

## Domenico Scarlatti essentials (de) {#domenico-scarlatti}

- Wer er war: Italienischer Barockkomponist und Cembalo- bzw. Tastenvirtuose, der einen grossen Teil seiner Karriere an den Hoefen Portugals und Spaniens verbrachte.
- 555 Sonaten: Er schrieb rund 555 einsaetzige Sonaten fuer Tasteninstrument, die Harmonik, Haendekreuzen und Technik am Cembalo und fruehen Klavier stark erweiterten.
- Lehrer am Hof: Am spanischen Hof war er Musiklehrer von Maria Barbara - zuerst portugiesische Prinzessin, spaeter Koenigin von Spanien - und passte viele Sonaten an ihr Spiel an.
- Iberisches Kolorit: In seiner Musik klingen oft spanische Gitarrenfiguren, kastagnettenartige Rhythmen und Volkstaenze an - das gibt den Sonaten einen typischen iberischen Charakter.
- Dauerhafter Einfluss: Heute sind seine Sonaten Kernrepertoire fuer Pianisten und Cembalisten - sowohl brillante Konzertstuecke als auch technische Studien.

## George Frideric Handel essentials (de) {#george-frideric-handel}

- Wer er war: In Deutschland geboren, spaeter britischer Staatsbuerger; machte Karriere in London mit Opern, Oratorien und Instrumentalmusik.
- Messiah und Hallelujah: Sein Oratorium Messiah - besonders der "Hallelujah"-Chor - wurde zu einem der bekanntesten Werke der westlichen Musik und ist bis heute ein Chorklassiker.
- Von Oper zur Oratorienform: Nach finanziellen Problemen mit italienischen Opernunternehmen wechselte er zu englischsprachigen Oratorien, die ohne grosse Buehnenshow auskamen und enorm populaer wurden.
- Fuer koenigliche Anlaesse: Er schrieb Festmusik wie Water Music und Music for the Royal Fireworks fuer open-air Feierlichkeiten auf der Themse und in London.
- Spaetes Leben: Selbst als er erblindete, leitete er weiter Auffuehrungen vom Tasteninstrument aus und blieb bis kurz vor seinem Tod eine oeffentliche musikalische Figur.

## Joseph Haydn essentials (de) {#joseph-haydn}

- Wer er war: Oesterreichischer Komponist der Klassik, oft "Vater der Sinfonie" und "Vater des Streichquartetts" genannt.
- Esterhazy-Jahre: Jahrzehntelang arbeitete er fuer die Fuersten Esterhazy auf einem abgelegenen Landsitz und schrieb Sinfonien, Quartette und Opern fuer deren Hausorchester.
- Erfinderische Sinfonien: Er komponierte ueber 100 Sinfonien, darunter die "Surprise"-Sinfonie und die spaeten "London"-Sinfonien - voller musikalischer Witze, Experimente und Ueberraschungen.
- Lehrer und Mentor: Er unterrichtete den jungen Beethoven und praegte Mozart stark; alle drei kannten und bewunderten einander.
- Charakter: Seine Musik ist bekannt fuer Witz, Klarheit und Waerme - oft entwickelt er aus einfachen Ideen sehr raffinierte Strukturen.

## Wolfgang Amadeus Mozart essentials (de) {#wolfgang-amadeus-mozart}

- Wer er war: In Salzburg geboren; Komponist der Klassik und Wunderkind, das frueh durch Europa tourte und schon als Kind Sinfonien und Opern schrieb.
- Wunderkind-Jahre: Als Junge begeisterte er Hoefe in ganz Europa am Klavier und auf der Violine - improvisierte, komponierte und spielte aus dem Gedaechtnis.
- Operndramatik: Opern wie Die Zauberfloete, Don Giovanni und Le nozze di Figaro verbinden eingengaengige Melodien mit scharfem Blick fuer menschliche Psychologie und Gesellschaftssatire.
- Vielseitiges Genie: Er schrieb in fast allen Gattungen seiner Zeit - Klavierkonzerte, Sinfonien, Kammermusik, geistliche Werke und das unvollendete Requiem.
- Kurzes Leben, riesige Wirkung: Er starb mit 35 in Wien und wurde bescheiden beerdigt - seine Musik wurde zum Symbol fuer melodische Schoenheit und den "perfekten" klassischen Stil.

## Ludwig van Beethoven essentials (de) {#ludwig-van-beethoven}

- Wer er war: Deutscher Komponist und Pianist, der zwischen Klassik und Romantik vermittelt und die Moeglichkeiten von Sinfonie und Sonate radikal erweiterte.
- Tauber Komponist: Er verlor ab Ende zwanzig zunehmend sein Gehoer - und schrieb viele seiner groessten Werke, als er fast oder ganz taub war.
- Meilensteine: Die 3. ("Eroica"), 5. und 9. Sinfonie, die spaeten Streichquartette und die 32 Klaviersonaten praegten die Musikgeschichte nachhaltig.
- Heroisches Bild: Seine Musik klingt oft wie ein Kampf vom Dunkel ins Licht - das half, das moderne Bild des gequaelten, unabhängigen Kuenstlers zu formen.

## Niccolo Paganini essentials (de) {#niccolo-paganini}

- Wer er war: Genuesischer Geigenvirtuose und Komponist des fruehen 19. Jahrhunderts, beruehmt fuer nahezu "uebermenschliche" Technik.
- 24 Capricen: Seine 24 Capricen fuer Solo-Violine gelten als legendaer - extrem anspruchsvoll und ein echter Initiationsritus fuer Virtuosen.
- Geigentricks: Er popularisierte Techniken wie linke-Hand-Pizzicato, Flageoletts und extreme Spruenge - er dehnte aus, was auf der Geige moeglich schien.
- Teufelslegende: Sein hageres Aussehen, Showmanship und sein Privatleben naehrten Geruechte, er habe seine Seele dem Teufel verkauft.
- Inspiration fuer andere: Von Liszt bis Rachmaninoff schrieben spaeter viele Komponisten glaenzende Variationen ueber das Thema seiner letzten Caprice.

## Franz Schubert essentials (de) {#franz-schubert}

- Wer er war: Wiener Komponist der fruehen Romantik; lebte nur 31 Jahre, hinterliess aber ein riesiges Werk an Liedern, Kammermusik und Sinfonien.
- Meister des Liedes: Er schrieb ueber 600 Lieder, darunter "Erlkoenig", "Ave Maria" sowie die Zyklen Winterreise und Die schoene Muellerin.
- Mehr als Lieder: Die "Unvollendete" Sinfonie, die "Grosse" C-Dur-Sinfonie und Werke wie das "Forellen"-Quintett sind Saeulen des Orchester- und Kammerrepertoires.
- Schubertiaden: Zu Lebzeiten war er vor allem in einem Freundeskreis bekannt, der sich zu informellen Musikabenden traf.
- Posthumer Ruhm: Ein grosser Teil seiner Musik wurde erst nach seinem Tod veroeffentlicht und wirklich gewuerdigt.


## Hector Berlioz essentials (de) {#hector-berlioz}

- Wer er war: Franzoesischer Komponist und Dirigent der Romantik, ein Pionier grossformatiger programmmusikalischer Sinfonik.
- Symphonie fantastique: Sein bekanntestes Werk - eine revolutionaere Programmsinfonie mit obsessiver, traumhafter Handlung und einer wiederkehrenden idee fixe.
- Orchesterfantasie: Er erweiterte Groesse, Klangfarben und Moeglichkeiten des Orchesters; spaeter dokumentierte er das in seiner Instrumentationslehre.
- Weitere Schluesselwerke: Harold in Italy, die dramatische Legende The Damnation of Faust und die monumentale Oper Les Troyens.

## Mikhail Glinka essentials (de) {#mikhail-glinka}

- Wer er war: Russischer Komponist, oft als Vater der russischen klassischen Musik und Begruender der russischen Nationalschule bezeichnet.
- Opernpionier: Seine Opern A Life for the Tsar und Ruslan and Lyudmila gehoeren zu den ersten, die russische Geschichte und Folklore in einer deutlich russischen Musiksprache nutzten.
- Volksmusik-Wurzeln: Er griff russische Volkslieder und Taenze auf und verband sie mit westlichen Techniken zu etwas Neuem fuer sein Publikum.
- Einfluss: Spaetere russische Komponisten - besonders die Gruppe "Das maechtige Haeuflein" ("Die Fuenf") - nahmen seine Musik als Ausgangspunkt fuer ihren nationalen Stil.

## Felix Mendelssohn essentials (de) {#felix-mendelssohn}

- Wer er war: Deutscher Komponist der fruehen Romantik, Pianist, Organist und einer der fuehrenden Dirigenten seiner Generation.
- Wunderkind und Klassizist: Schon als Teenager schrieb er Werke wie das Oktett und die Ouvertuere zu Ein Sommernachtstraum - bewundert fuer Klarheit und Eleganz.
- Bach-Renaissance: 1829 dirigierte er eine legendaere Auffuehrung von Bachs Matthaeus-Passion und brachte Bach damit zurueck in den Konzertsaal.
- Institutionenbauer: Er gruendete das Leipziger Konservatorium und hob durch seine Arbeit mit dem Gewandhausorchester das Niveau des Orchesterspiels.
- Beruehmte Stuecke: Heute kennt man ihn vor allem fuer das Violinkonzert, die "Italienische" und "Schottische" Sinfonie sowie den Hochzeitsmarsch aus Ein Sommernachtstraum.

## Frederic Chopin essentials (de) {#frederic-chopin}

- Wer er war: Polnischer Komponist und Klaviervirtuose, der den Grossteil seines Erwachsenenlebens in Paris verbrachte und fast ausschliesslich fuer Klavier schrieb.
- Poet des Klaviers: Nocturnes, Balladen, Walzer, Mazurken und Polonaisen machten aus Klavierminiaturen hoch expressive, poetische Stuecke.
- Polnischer Geist: Er verwandelte polnische Taenze und Rhythmen in veredelte Konzertmusik - seine Werke wurden zu Symbolen polnischer Identitaet.
- Persoenlicher Stil: Gesangliche rechte-Hand-Melodien, reiche Harmonik und feines Rubato wurden zu Markenzeichen seines intimen, nach innen gerichteten Tons.
- Leben und Legende: Fragile Gesundheit, Exil aus Polen und die lange Beziehung zur Schriftstellerin George Sand praegen bis heute, wie man seine Musik hoert.

## Robert Schumann essentials (de) {#robert-schumann}

- Wer er war: Deutscher Komponist der Romantik, Pianist und einflussreicher Musikkritiker.
- Klavier- und Liedzyklen: Er schrieb charaktervolle Klavierwerke wie Carnaval und Kinderszenen sowie grosse Liedzyklen wie Dichterliebe.
- Sinfonien und Kammermusik: Seine vier Sinfonien und viele Kammerwerke zeigen oft eine introvertierte, poetische Seite der Romantik.
- Kritiker und Foerderer: Als Herausgeber der Neuen Zeitschrift fuer Musik foerderte er junge Talente wie Chopin und Brahms.
- Kaempfe: Er litt an psychischer Krankheit und verbrachte seine letzten Jahre in einer Heilanstalt, waehrend seine Frau Clara und Brahms ihm treu verbunden blieben.

## Franz Liszt essentials (de) {#franz-liszt}

- Wer er war: Ungarischer Pianist-Komponist und Superstar des 19. Jahrhunderts, beruehmt fuer explosive Virtuositaet und Showmanship.
- Klaviermagier: Er erfand praktisch das moderne Solo-Klavierrezital und trieb die Klaviertechnik auf neue Extreme.
- Neue Formen: Er entwickelte die sinfonische Dichtung und arbeitete mit thematischer Transformation - das beeinflusste Wagner und viele spaetere Komponisten.
- Spaetstil: Seine spaeten Werke sind harmonisch wagemutig und oft duester - sie deuten bereits auf die Moderne des 20. Jahrhunderts voraus.
- Grosszuegiger Mentor: Er unterrichtete und foerderte viele juengere Musiker und half Kollegen haeufig mit Geld und Unterstuetzung.

## Richard Wagner essentials (de) {#richard-wagner}

- Wer er war: Deutscher Komponist und Dramatiker, beruehmt fuer seine grossformatigen Opern, die er "Musikdramen" nannte.
- Leitmotive: Er nutzte wiederkehrende musikalische Ideen, um Figuren, Gegenstaende und Konzepte zu markieren - besonders im vierteiligen Ring-Zyklus.
- Harmonische Revolution: Werke wie Tristan und Isolde dehnten die traditionelle Harmonik und beeinflussten den Weg zur modernen Musik.
- Bayreuth: Er entwarf und baute sein eigenes Festspielhaus in Bayreuth, um seine Werke nach eigenen Vorstellungen zu inszenieren.
- Kontroverse: Seine Schriften und manche seiner Ansichten, besonders sein Antisemitismus, sind tief problematisch und werden bis heute breit diskutiert.

## Giuseppe Verdi essentials (de) {#giuseppe-verdi}

- Wer er war: Fuehrender italienischer Opernkomponist des 19. Jahrhunderts, eine Schluesselfigur der Tradition der italienischen Grand Opera.
- Erfolgsopern: Rigoletto, Il trovatore, La traviata, Aida, Otello und Falstaff gehoeren zu seinen vielen dauerhaften Buehnenerfolgen.
- Stimme und Drama: Er setzte auf klare Vokallinien und praezise gezeichnete Figuren - seine Opern sind starke Motoren fuer Emotion und Theater.
- Nationalsymbol: Choere wie "Va, pensiero" aus Nabucco wurden mit der italienischen Einigungsbewegung verbunden.
- Spaete Bluete: Seine letzten beiden Shakespeare-Opern Otello und Falstaff gelten oft als erstaunliche Spaetwerke.

## Jacques Offenbach essentials (de) {#jaques-offenbach}

- Wer er war: In Deutschland geboren (Koeln), Komponist und Cellist, der in Frankreich zum Star wurde - bekannt als Meister der Operette.
- Pariser Hit-Macher: Er gruendete und leitete in Paris sein eigenes Theater (Bouffes-Parisiens) und produzierte witzige, schnelle Buehnenwerke voller einpraegsamer Melodien.
- Koenig der Satire: Seine Operetten machen sich oft ueber Politik, gesellschaftliche Sitten und mythische Helden lustig - leicht an der Oberflaeche, aber scharf beobachtet.
- Beruehmte Werke: Orphee aux enfers (mit dem beruehmten "Can-can" bzw. Infernal Galop), La belle Helene und La vie parisienne praegten den Sound des Paris der Second Empire.
- Ein ernstes Meisterwerk: Spaet im Leben schrieb er die duestere, groessere Oper The Tales of Hoffmann - bei seinem Tod unvollendet und spaeter von anderen vervollstaendigt.

## Johann Strauss II essentials (de) {#johann-strauss-ii}

- Wer er war: Oesterreichischer Komponist und Dirigent, bekannt als "Walzerkoenig", Sohn von Johann Strauss I.
- Tanzklassiker: Er schrieb An der schoenen blauen Donau, Geschichten aus dem Wienerwald, den Kaiserwalzer und viele weitere Walzer und Polkas.
- Operettenerfolg: Seine Operette Die Fledermaus trifft den glaenzenden, leicht ironischen Ton des spaeten 19. Jahrhunderts in Wien.
- Wiener Bild: Seine Musik bestimmt stark, wie man sich den Klang des alten Wien vorstellt - wirbelnde Walzer, Champagner und Ballsaele.

## Johannes Brahms essentials (de) {#johannes-brahms}

- Wer er war: Deutscher Komponist der Romantik, Pianist und Dirigent, lebte vor allem in Hamburg und Wien.
- Sinfonische Handwerkskunst: Seine vier Sinfonien, Konzerte und Kammerwerke sind beruehmt fuer dichte, organische Entwicklung und strukturelle Kontrolle.
- Erbe Beethovens: Viele Zeitgenossen sahen in ihm Beethovens sinfonischen Nachfolger - was ihn beruehmt selbstkritisch machte.
- Absolute Musik: Anders als Wagner und Liszt konzentrierte er sich auf "reine" Instrumentalmusik statt auf Programme - das befeuerte eine bekannte aestehtische Debatte.
- Freundschaften: Die engen Beziehungen zu Robert und Clara Schumann waren zentral fuer sein persoenliches und kuenstlerisches Leben.

## Alexander Borodin essentials (de) {#alexander-borodin}

- Wer er war: Russischer Komponist und professioneller Chemiker, Mitglied der nationalistischen Gruppe "Das maechtige Haeuflein" ("Die Fuenf").
- Doppelkarriere: Er leistete wichtige Beitraege zur organischen Chemie und komponierte in seiner knappen Freizeit.
- Signaturwerke: Seine Oper Prince Igor (mit den beruehmten Polowetzer Taenzen), zwei Sinfonien und In the Steppes of Central Asia gehoeren zu seinen bekanntesten Stuecken.
- Hilfe nach dem Tod: Freunde wie Rimsky-Korsakov und Glazunov editierten und vollendeten mehrere Werke nach seinem fruehen Tod.

## Camille Saint-Saens essentials (de) {#camille-saint-saens}

- Wer er war: Franzoesischer Komponist, Pianist, Organist und Wunderkind; aktiv von der Mitte des 19. bis ins fruehe 20. Jahrhundert.
- Vielseitiges Werk: Er schrieb Sinfonien, Konzerte, Kammermusik, Opern und Chormusik - darunter die "Orgelsinfonie" und Samson and Delilah.
- Karneval der Tiere: Seine humorvolle Suite The Carnival of the Animals, urspruenglich fuer einen privaten Anlass geschrieben, ist heute eines seiner populaersten Werke.
- Organisator des Musiklebens: Er foerderte sowohl aeltere Musik (wie Bach) als auch juengere franzoesische Komponisten und gruendete die Societe nationale de musique mit.

## Georges Bizet essentials (de) {#georges-bizet}

- Wer er war: Franzoesischer Komponist der Romantik, der jung starb, aber eine der beruehmtesten Opern ueberhaupt hinterliess.
- Carmen: Seine Oper Carmen schockierte manche fruehe Zuhoerer mit Realismus und einer "gefaehrlichen" Heldin - spaeter wurde sie zum Kernstueck des Repertoires.
- Weitere Werke: Musik zu L'Arlesienne und die Oper The Pearl Fishers sind ebenfalls in Konzertsälen beliebt.
- Tragisches Timing: Er starb mit 36, kurz nach der problematischen Urauffuehrung von Carmen, und erlebte den spaeteren Erfolg nicht mehr.

## Modest Mussorgsky essentials (de) {#modest-mussorgsky}

- Wer er war: Russischer Komponist und Mitglied der "Fuenf", entschlossen, einen eigenstaendig russischen Stil zu schaffen.
- Kuehner Stil: Seine Musik nutzt oft sprechnahe Melodien, raue Harmonik und eindrucksvolle Szenen aus russischer Geschichte und Folklore.
- Schluesselwerke: Die Oper Boris Godunov, die Klaviersuite Pictures at an Exhibition und die sinfonische Dichtung Night on Bald Mountain sind seine bekanntesten Werke.
- Ueberarbeitungen: Viele Stuecke blieben unvollendet oder roh und wurden spaeter - besonders von Rimsky-Korsakov - revidiert oder orchestriert.

## Pyotr Ilyich Tchaikovsky essentials (de) {#pyotr-ilyich-tchaikovsky}

- Wer er war: Russischer Komponist der Romantik; verband westliche Formen mit starkem Melodiesinn und unmittelbarer Emotionalitaet.
- Ballette und Sinfonien: Swan Lake, The Sleeping Beauty und The Nutcracker sowie seine spaeten Sinfonien gehoeren zum Kernrepertoire des 19. Jahrhunderts.
- Konzertlieblinge: Sein Klavierkonzert Nr. 1 und das Violinkonzert sind beliebte Bravourstuecke fuer Solisten.
- Emotionale Intensitaet: Seine Musik wirkt oft sehr persoenlich - voller Sehnsucht, Drama und ploetzlicher Stimmungswechsel.
- Globale Reichweite: Er war einer der ersten russischen Komponisten, der schon zu Lebzeiten wirklich internationale Beruehmtheit erreichte.

## Antonin Dvorak essentials (de) {#antonin-dvorak}

- Wer er war: Tschechischer Komponist der Romantik, der klassische Formen mit volksinspirierten Melodien und Rhythmen aus Boehmen und Maehren verband.
- Neue Welt: Seine Sinfonie "From the New World" entstand waehrend seines Aufenthalts in den USA und gehoert zu den populaersten Sinfonien ueberhaupt.
- Volksgeist: Werke wie die Slavonic Dances und das Cellokonzert h-Moll zeigen sein Talent fuer einpraegsame Themen und tanzartige Energie.
- Amerika-Kapitel: Als Direktor des National Conservatory in New York ermutigte er amerikanische Komponisten, aus Spirituals und indianischer Musik zu schoepfen.

## Edvard Grieg essentials (de) {#edvard-grieg}

- Wer er war: Norwegischer Komponist der Romantik und Pianist, eng mit der nationalen Identitaet seines Landes verbunden.
- Peer Gynt: Seine Schauspielmusik zu Peer Gynt, darunter "Morning Mood" und "In the Hall of the Mountain King", wurde zu Konzertsälen-Hits.
- Klavierkonzert: Sein Klavierkonzert a-Moll ist ein Publikumsliebling und bei Solisten sehr beliebt.
- Nationales Kolorit: Er nutzte stark norwegische Volksweisen und Tanzrhythmen und gab seiner Musik damit einen typischen nordischen Klang.

## Nikolai Rimsky-Korsakov essentials (de) {#nikolai-rimsky-korsakov}

- Wer er war: Russischer Komponist, Lehrer und Meister der Orchestrierung, ebenfalls Mitglied der "Fuenf".
- Orchesterfarben: Stuecke wie Scheherazade, Capriccio Espagnol und die Russian Easter Festival Overture zeigen seine brillante Klangfarbenkunst.
- Lehrer: Er unterrichtete am Petersburger Konservatorium; zu seinen Schuelern gehoerten unter anderem Stravinsky und viele weitere wichtige Komponisten.
- Editor und Arrangeur: Er edierte und orchestrierte Werke von Kollegen wie Mussorgsky und Borodin und praegte damit, wie deren Musik oft gehoert wird.


## Giacomo Puccini essentials (de) {#giacomo-puccini}

- Wer er war: Italienischer Opernkomponist und die Leitfigur der spaeten romantischen italienischen Oper nach Verdi - beruehmt fuer grosse Melodien und intensives Theater.
- Verismo-Gefuehl: Seine Opern zeigen oft lebendige, realistische Figuren und hohe emotionale Einsaetze - Liebe, Eifersucht, Opfer - mit fast filmischem Tempo.
- Signaturopern: La boheme, Tosca und Madama Butterfly gehoeren zu den meistgespielten Opern weltweit; spaete Werke include Turandot (bei seinem Tod unvollendet).
- Melodisches Genie: Er hatte ein aussergewoehnliches Gespuer fuer lange, gesangliche Linien und fuer Orchestertexturen, die das Drama verstaerken, ohne die Stimme zu uebertoenen.
- Handwerk und Detail: Puccini war akribisch bei Inszenierung, Timing und Atmosphaere - mit wiederkehrenden Motiven und sorgfaeltig gewaelten Klangfarben.

## Gustav Mahler essentials (de) {#gustav-mahler}

- Wer er war: Austro-boehmischer Komponist der spaeten Romantik und einer der fuehrenden Dirigenten seiner Zeit.
- Grosse Sinfonien: Seine Sinfonien sind riesig dimensioniert - sie mischen Maersche, Volksmusik, Choraele und existenzielle Fragen nach Leben und Tod.
- Lied und Sinfonie: Werke wie Das Lied von der Erde verbinden sinfonisches Schreiben mit Liedzyklen und nutzen Poesie aus vielen Kulturen.
- Dirigent: Er leitete die Wiener Hofoper und arbeitete spaeter in New York - dabei veraenderte er Standards im Orchester- und Opernbetrieb.
- Ruhm nach dem Tod: Er sagte voraus "meine Zeit wird kommen" - und tatsaechlich erlebte seine Musik in der Mitte des 20. Jahrhunderts eine grosse Renaissance.

## Claude Debussy essentials (de) {#claude-debussy}

- Wer er war: Franzoesischer Komponist, oft mit musikalischem Impressionismus verbunden - obwohl er den Begriff nicht mochte.
- Neue Klangwelt: Werke wie Prelude a l'apres-midi d'un faune, La Mer und Pelleas et Melisande schaffen fliessende, atmosphaerische Klanglandschaften.
- Klavierminiaturen: Stuecke wie Clair de lune und die Preludes nutzen neue Harmonien und Texturen, die Jazz und Filmmusik beeinflussten.
- Harmonik und Farbe: Er loeste sich von traditionellen Akkordfolgen und setzte auf Timbre und Andeutung statt auf klare Formen.

## Erik Satie essentials (de) {#erik-satie}

- Wer er war: Exzentrischer franzoesischer Komponist und Pianist, aktiv in Paris um die Wende zum 20. Jahrhundert.
- Leise Revolutionen: Seine Gymnopedies und Gnossiennes nutzen einfache, repetitive Muster und ungewoehnliche Harmonien - sie deuten Minimalismus voraus.
- Trockener Humor: Er gab seinen Stuecken oft seltsame Titel und schrieb surrealistische Spielanweisungen in die Noten.
- Einfluss: Obwohl er relativ wenig schrieb, beeinflussten seine Ideen Debussy, Ravel und spaeter Avantgarde-Komponisten wie John Cage.

## Alexander Scriabin essentials (de) {#alexander-scriabin}

- Wer er war: Russischer Komponist und Pianist, dessen Stil sich von Chopin-aehnlicher Romantik zu einer sehr eigenen, mystischen Harmonik entwickelte.
- Fokus Klavier: Er schrieb viele charaktervolle Klavierstuecke und zehn Klaviersonaten, die seinen Weg in dissonantere Klangwelten nachzeichnen.
- Orchestrale Visionen: Werke wie The Poem of Ecstasy und Prometheus: The Poem of Fire zielen auf ekstatische, fast ueberirdische Erfahrungen.
- Mystische Ideen: Beeinflusst von Theosophie stellte er sich Musik als Teil einer grossen spirituellen Transformation der Menschheit vor.

## Sergei Rachmaninoff essentials (de) {#sergei-rachmaninoff}

- Wer er war: Russischer Komponist, Klaviervirtuose und Dirigent der spaeten Romantik; seine Karriere umfasste die Zeit vor und nach der Revolution.
- Klavier-Showpieces: Die Klavierkonzerte Nr. 2 und 3 sowie die Rhapsody on a Theme of Paganini sind Meilensteine des Klavierrepertoires.
- Ueppiger Stil: Er liebte lange, gesangliche Melodien, reiche Harmonik und dunkle Orchesterfarben.
- Exil: Nach der Revolution von 1917 verliess er Russland und lebte vor allem in den USA - er verdiente sein Geld hauptsaechlich als tourender Pianist.

## Maurice Ravel essentials (de) {#maurice-ravel}

- Wer er war: Franzoesischer Komponist und Meister der Orchestrierung, oft mit Impressionismus verbunden, aber mit sehr praezisem, klassischem Formbewusstsein.
- Bolero: Sein langsam anschwellendes Stueck Bolero, fast komplett aus einer einzigen Melodie und Rhythmus gebaut, wurde unerwartet weltweit beruehmt.
- Farbe und Handwerk: Werke wie Daphnis et Chloe, La Valse und die Klavierkonzerte zeigen seine Faszination fuer Textur, Rhythmus und Klarheit.
- Orchestrator: Seine Orchestrierung von Mussorgskys Pictures at an Exhibition ist heute die am haeufigsten gespielte Version.

## Sergei Prokofiev essentials (de) {#sergei-prokofiev}

- Wer er war: Russischer und sowjetischer Komponist und Pianist, bekannt fuer scharfe Rhythmen, kuehne Harmonik und einpraegsame Melodien.
- Beliebte Werke: Sein Ballett Romeo and Juliet, das Kinderstueck Peter and the Wolf und die "Classical" Symphony gehoeren zu seinen bekanntesten Werken.
- Buehne und Film: Er schrieb wichtige Filmmusik, darunter fuer Sergei Eisensteins Filme Alexander Nevsky und Ivan the Terrible.
- Leben zwischen Welten: Nach Jahren im Westen kehrte er in die Sowjetunion zurueck und balancierte eigene modernistische Impulse mit offiziellen Kulturvorgaben.
- Seltsamer Zufall: Er starb am selben Tag wie Joseph Stalin (1953) - dadurch ging die Nachricht von seinem Tod weitgehend unter.

## Dmitri Shostakovich essentials (de) {#dmitri-shostakovich}

- Wer er war: Sowjetischer Komponist und Pianist; seine Karriere spielte sich unter Stalin und im spaeteren Sowjetregime ab.
- Sinfonien unter Druck: Seine 15 Sinfonien und viele Quartette balancieren oft offizielle Erwartungen mit versteckter Ironie und persoenlicher Tragik.
- Signaturwerke: Die 5., 7. ("Leningrader") und 10. Sinfonie sowie seine Streichquartette gehoeren zum Kernrepertoire des 20. Jahrhunderts.
- Doppeldeutigkeit: Seine Musik ist beruehmt fuer die Mischung aus oeffentlichem Heroismus und privaten, codierten Botschaften - sie laedt dazu ein, zwischen den Zeilen zu lesen.
`,sd={class:"app"},rd={class:"topbar"},od={class:"language-switcher"},ad={class:"visually-hidden",for:"language-select"},ld=["aria-label"],cd=["value"],ud={class:"menu-nav"},dd={class:"content"},fd={key:0},hd={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},md={class:"filter-dock__header"},pd=["aria-pressed","aria-label"],gd={"aria-hidden":"true"},bd={key:0,class:"nav-controls",role:"group","aria-label":"Timeline navigation"},vd=["disabled"],yd=["disabled"],wd={key:1,class:"scale-controls",role:"group","aria-label":"Adjust timeline size"},kd=["disabled"],_d=["disabled"],Sd=["aria-expanded"],Td={key:0,id:"filter-panel",class:"filter-panel",role:"dialog","aria-label":"Composer filters"},Cd={class:"filter-panel__options"},Ed=["onUpdate:modelValue","aria-label"],xd={class:"filter-panel__label"},Md={class:"filter-panel__actions"},Ld={key:1,class:"about"},zd={class:"about__card"},Ad={class:"about__title"},Pd={class:"about__text"},Id={class:"about__text"},Rd={class:"about__author"},Fd={class:"about__author-body"},Hd={class:"about__author-label"},Dd={class:"about__author-name"},Nd={class:"about__contributors"},Od={class:"about__contributors-title"},Wd={class:"about__contributors-list"},Bd={class:"about__contributors-name"},Kd=["href"],jd={class:"composer-modal__content"},Vd={class:"composer-modal__header"},Gd={class:"composer-modal__titles"},$d={class:"composer-modal__name"},Ud={key:0,class:"composer-modal__dates"},Jd={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},qd=["disabled"],Xd={class:"composer-modal__position"},Yd=["disabled"],Zd={class:"composer-modal__body"},Qd={key:0,class:"composer-modal__hero"},ef=["src","alt"],nf={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},tf=["disabled"],sf={class:"composer-modal__position"},rf=["disabled"],of={class:"composer-modal__hero-meta"},af={class:"composer-modal__name-small"},lf={key:0,class:"composer-modal__dates-small"},cf={class:"composer-modal__playlist"},uf={class:"composer-modal__playlist-header"},df={class:"composer-modal__playlist-title"},ff={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},hf=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],mf={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},pf={class:"composer-modal__description"},gf={key:0,class:"composer-modal__facts-title"},bf={key:1,class:"composer-modal__facts"},vf={class:"composer-modal__fact-text"},yf={key:2,class:"composer-modal__muted"},at="en",Yr="timeline-language",Zr="timeline-language-user-set",ii=25,Qr=150,is=.2,eo=1.5,wf=.35,ss=1.7,no=.95,kf=.6,si=1,fn=12,_f=320,Sf=.88,Tf=1.12,ri=6,Cf={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended Classics"},apply:"Apply",minimizeControls:"Hide timeline controls",restoreControls:"Show timeline controls"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden",minimizeControls:"Steuerungselemente ausblenden",restoreControls:"Steuerungselemente anzeigen"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Шибанова",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить",minimizeControls:"Скрыть панель управления",restoreControls:"Показать панель управления"}}},t=Object.keys(n),i=ze(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=ze(at),o=q(()=>n[r.value]||n.en),a=q(()=>t.map(l=>({value:l,label:n[l]?.label||l.toUpperCase()}))),c=q(()=>o.value.appTitle),m=q(()=>o.value.languageLabel||"Language"),d=q(()=>o.value.navigation||n.en.navigation),p=q(()=>o.value.about||n.en.about),S=q(()=>p.value.contributors||n.en.about.contributors||[]),T=q(()=>o.value.eras||n.en.eras),A=q(()=>o.value.composers||{}),O=q(()=>{const l=A.value.names||{},h={};return Object.entries(l).forEach(([g,v])=>{h[qe(g)]=v}),h}),ae=q(()=>{const l={};return Object.entries(Me||{}).forEach(([h,g])=>{const v=qe(h),R=g?.[r.value];if(R){l[v]=R;return}r.value==="en"&&g?.en&&(l[v]=g.en)}),l}),B=q(()=>({...ae.value,...O.value})),P=q(()=>o.value.filter||n.en.filter),U=q(()=>({essentials:P.value.groups?.essentials||"Essential Icons",core:P.value.groups?.core||"Core Classics",expanded:P.value.groups?.expanded||"Extended Classics"})),I=q(()=>P.value.apply||"Apply"),Q=q(()=>{const l=A.value.descriptions||{},h={};return Object.entries(l).forEach(([g,v])=>{h[qe(g)]=v}),h}),pe=q(()=>{const l=A.value.factsTitles||{},h={};return Object.entries(l).forEach(([g,v])=>{h[qe(g)]=v}),h}),G=q(()=>o.value.modal||n.en.modal),$=ze(!1),D=ze("composers"),K=[30,40,50,70,100],j="".replace(/\/$/,""),ne="https://soundcloud.com/dmitry-kotikov/sets/",ke="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",me=new Set;function ce(l,h,g){return Number.isNaN(l)?h:Math.min(g,Math.max(h,l))}function J(l){const h=ce((l-ii)/(Qr-ii),0,1),g=Math.pow(h,wf),v=is+(eo-is)*g;return ce(v,is,eo)}function se(l){const h=ce((l-ii)/(Qr-ii),0,1),g=Math.pow(h,kf),v=ss-(ss-no)*g;return ce(v,no,ss)}const Ue=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich"]}],Ln=ze(Ue.reduce((l,h)=>(l[h.id]=!0,l),{})),ln=q(()=>{const l=o.value.filter||{};return{minimize:l.minimizeControls||"Hide timeline controls",restore:l.restoreControls||"Show timeline controls"}}),ye=ze(!1),tn=ze(null),Je=ze(fn),Se=ze(null);let zn=0;const Oe=ze(!1),sn=ze("bottom-left"),bn=ze(null),Bn=q(()=>{const l={left:`${Je.value}px`};return Se.value!=null&&(l.top=`${Se.value}px`),l}),ge=ft({active:!1,pointerId:null,startX:0,startY:0,startLeft:0,startTop:0,element:null}),u=ft({active:!1,startDistance:0});function f(l,h){const g=l.clientX-h.clientX,v=l.clientY-h.clientY;return Math.hypot(g,v)}const b=ft({barHeight:K[si],widthScale:J(K[si]),fontScale:se(K[si])}),_=ze(si),w=q(()=>_.value<=0),k=q(()=>_.value>=K.length-1),M=ze(!0),E=ze(!1);function C(l){const h=ce(l,0,K.length-1);_.value=h;const g=K[h];b.barHeight=g,b.widthScale=J(g),b.fontScale=se(g)}function y(l){const h=l>0?1:-1;C(_.value+h)}function F(){const l=document.getElementById("timeline");if(!l)return;const h=Math.max(0,l.scrollWidth-l.clientWidth),g=Math.max(0,l.scrollHeight-l.clientHeight);M.value=l.scrollLeft<=ri&&l.scrollTop<=ri,E.value=l.scrollLeft>=h-ri&&l.scrollTop>=g-ri}async function z(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),F(),await Ze(),Jt()}async function H(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),F(),await Ze(),Ia()}const W=q(()=>{const l=Ue.map(g=>g.id).filter(g=>Ln.value[g]),h=new Set;return l.forEach(g=>{Ue.find(R=>R.id===g)?.composers?.forEach(R=>h.add(R))}),h}),X=q(()=>{const l=W.value;return l.size?vt.filter(h=>l.has(h.name)):[]}),Y=q(()=>[...X.value].sort((l,h)=>l.birth-h.birth).map(l=>({...l,displayName:Di(l.name)}))),{descriptionsByLocale:ee,playlistIdsByKey:xe,namesByLocale:Me}=ya(id),te=ze(null),We=q(()=>te.value!==null),be=q(()=>te.value===null?null:Y.value[te.value]),tt=q(()=>be.value?Di(be.value.name):""),Le=q(()=>be.value?ha(be.value.name):null),Ve=q(()=>be.value?wa(be.value.name):""),yt=q(()=>be.value?ka(be.value.name):""),Ut=q(()=>be.value?Ea(be.value.name):[]),va=q(()=>Ut.value.map(l=>Ga(l)).filter(Boolean)),Kn=q(()=>{const l=va.value.filter(Boolean);return l.length?l:[ke]}),Fi=q(()=>(te.value??0)>0),Hi=q(()=>te.value!==null&&te.value<Y.value.length-1);function qe(l){return l.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Di(l){const h=qe(l);return B.value[h]||l}function Bs(l){return U.value[l]||l}function ya(l){const h=l.split(`
`),g={},v={},R={};let Z=null,ve=null,un=null,Be="en",_e=[];const Vn=()=>{(Z||ve)&&[Z,ve].filter(Boolean).forEach(Re=>{g[Re]=g[Re]||{},g[Re][Be]=_e.join(`
`).trim(),un&&(R[Re]=un)}),_e=[],un=null,ve=null};for(const Te of h){const Re=Te.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Re){Vn();const[,Ce,Gn,vn]=Re;Z=qe(vn||Ce),ve=qe(Ce),Be=(Gn||"en").toLowerCase(),un=vn||null;continue}const st=Z?Te.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(st){const[,Ce,Gn]=st,vn=(Ce||Be||"en").toLowerCase(),Qa=Gn.trim();[Z,ve].filter(Boolean).forEach(Bi=>{v[Bi]=v[Bi]||{},v[Bi][vn]=Qa});continue}Z&&Te.startsWith("- ")&&_e.push(Te.replace(/^- /,"").trim())}return Vn(),{descriptionsByLocale:g,playlistIdsByKey:R,namesByLocale:v}}function wa(l){const h=Sa(l),g=qe(l),v=Q.value[g];if(v)return v;const R=h[r.value];return R||(h.en?h.en:Object.values(h)[0]||"")}function ka(l){const h=pe.value[qe(l)];return h||Ca(l)}function _a(l,h){const g=qe(h);if(l[g])return l[g];const v=g.split(" ").filter(Boolean),R=v[v.length-1];return R&&l[R]?l[R]:""}function Sa(l){const h=qe(l),g=h.split(" ").filter(Boolean),v=[h],R=g[g.length-1];R&&R!==h&&v.push(R);for(const Z of v)if(ee[Z])return ee[Z];return{}}function Ta(l){return qe(l).replace(/\s+/g,"-").replace(/-+/g,"-")}function Ca(l){const h=s[r.value]||s.en,g=r.value==="ru"?Di(l):"";if(r.value==="ru"&&g)return`${g} - ${h}`;const v=String(l||"").trim().split(/\s+/).filter(Boolean);if(!v.length)return"";const R=v[v.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(R)&&v.length>=2?v[v.length-2]:R} ${h}`}function Ea(l){const h=[],g=Ta(l);g&&!h.includes(g)&&h.push(g);const v=_a(xe,l);return v&&!h.includes(v)&&h.push(v),h}function Ni(l=window.location.pathname){D.value=l==="/about"?"about":"composers"}const Ks=()=>Ni();function js(l){window.location.pathname!==l&&(history.pushState({},"",l),Ni(l)),$.value=!1}function Vs(l){js(l==="about"?"/about":"/")}function xa(){$.value=!$.value}function Ma(){$.value=!1}async function La(){cn();const l=!ye.value;l&&(bn.value={left:Je.value,top:Se.value,anchor:sn.value}),ye.value=l,await Ze(),cn()}async function za(){ye.value&&!bn.value&&(cn(),bn.value={left:Je.value,top:Se.value,anchor:sn.value}),ye.value=!1,await Ze(),cn()}function Aa(){return new Promise(l=>{requestAnimationFrame(()=>requestAnimationFrame(l))})}async function Gs(){if(await Ze(),await Aa(),cn(),!ye.value&&bn.value){const l=bn.value;sn.value=l.anchor||sn.value,Je.value=kt(l.left),l.top!=null&&(Se.value=it(l.top)),bn.value=null;return}cn()}async function Pa(){if(Oe.value=!Oe.value,Oe.value){ye.value=!1,await Ze(),Jt();return}await Ze(),Jt()}function $s(){if(typeof document>"u")return 0;const l=document.querySelector(".topbar");return l&&l.offsetHeight?l.offsetHeight:0}function wt(){if(typeof window>"u")return{width:0,height:0,offsetLeft:0,offsetTop:0};const l=window.visualViewport;return l?{width:l.width,height:l.height,offsetLeft:l.offsetLeft||0,offsetTop:l.offsetTop||0}:{width:window.innerWidth,height:window.innerHeight,offsetLeft:0,offsetTop:0}}function kt(l){const h=tn.value;if(!h||typeof window>"u")return l;const{width:g,offsetLeft:v}=wt(),R=v+fn,Z=Math.max(R,v+g-h.offsetWidth-fn);return Math.min(Math.max(l,R),Z)}function it(l){const h=tn.value;if(!h||typeof window>"u")return l;const{height:g,offsetTop:v}=wt(),R=Math.max($s()+fn,v+fn),Z=Math.max(R,v+g-h.offsetHeight-fn);return Math.min(Math.max(l,R),Z)}function cn(){const l=tn.value;if(Se.value==null&&l&&typeof window<"u"){const{height:h,offsetTop:g}=wt();Se.value=it(g+h-l.offsetHeight-24)}Je.value=kt(Je.value),Se.value!=null&&(Se.value=it(Se.value))}function Ia(){cn(),sn.value="top-right";const h=tn.value?.offsetWidth||0,{width:g,offsetLeft:v}=wt();Je.value=kt(v+g-h-fn),Se.value=it($s()+fn)}function Jt(){cn(),sn.value="bottom-left";const h=tn.value?.offsetHeight||0,{height:g,offsetTop:v}=wt();Je.value=kt(fn),Se.value=it(v+g-h-fn)}function Us(l){if(!ge.active||l.pointerId!==ge.pointerId)return;l.preventDefault();const h=l.clientX-ge.startX,g=l.clientY-ge.startY;Je.value=kt(ge.startLeft+h),Se.value!=null&&(Se.value=it(ge.startTop+g))}function Js(){window.removeEventListener("pointermove",Us),window.removeEventListener("pointerup",qt),window.removeEventListener("pointercancel",qt)}function qs(l){const h=ge.element;if(ge.active=!1,ge.element=null,ge.pointerId=null,h?.releasePointerCapture&&l!=null)try{h.releasePointerCapture(l)}catch{}}function qt(l){!ge.active||l.pointerId!==ge.pointerId||(Js(),qs(l.pointerId))}function Ra(){ge.active&&(Js(),qs(ge.pointerId))}function Fa(l){const h=l.timeStamp||Date.now();h-zn<=_f&&l.preventDefault(),zn=h}function Ha(l){if(ge.active||l.pointerType==="mouse"&&l.button!==0)return;const h=l.target;if(h&&typeof h.closest=="function"&&h.closest("button, a, input, select, textarea, label, [role='button'], .filter-panel"))return;cn(),sn.value="free",l.preventDefault(),ge.active=!0,ge.pointerId=l.pointerId,ge.startX=l.clientX,ge.startY=l.clientY,ge.startLeft=Je.value,ge.startTop=Se.value??0,ge.element=tn.value;const v=tn.value;if(v?.setPointerCapture)try{v.setPointerCapture(l.pointerId)}catch{}window.addEventListener("pointermove",Us),window.addEventListener("pointerup",qt),window.addEventListener("pointercancel",qt)}function Xs(l){!l||!l.touches||l.touches.length===2&&(u.active=!0,u.startDistance=f(l.touches[0],l.touches[1]))}function Ys(l){if(!u.active||!l||!l.touches||l.touches.length!==2)return;l.preventDefault();const h=f(l.touches[0],l.touches[1]),g=u.startDistance||h,v=g?h/g:1;if(v>=Tf){y(1),u.startDistance=h;return}v<=Sf&&(y(-1),u.startDistance=h)}function Xt(l){(l?.touches?.length??0)<2&&(u.active=!1,u.startDistance=0)}function jn(){cn()}function _t(l,{persist:h=!1}={}){const g=t.includes(l)?l:at;if(r.value=g,h)try{localStorage.setItem(Yr,g),localStorage.setItem(Zr,"1")}catch{}}function Da(l){i.value=!0,_t(l,{persist:!0})}function Na(l){const h=l?.target?.value;h&&Da(h)}function Oa(){try{return localStorage.getItem(Yr)}catch{return null}}function Wa(){try{return localStorage.getItem(Zr)==="1"}catch{return!1}}function Ba(){const l=Oa(),h=Wa();if(_t(at),l&&h&&t.includes(l)){i.value=!0,_t(l);return}Ka()}async function Ka(){if(i.value){r.value;return}const l=[ja,Va];for(const h of l){const g=await h();if(g){const v=String(g).toUpperCase(),R=v==="RU"?"ru":["DE","AT","CH"].includes(v)?"de":at;_t(R);return}}_t(at)}async function ja(){try{const l=await fetch("https://ipapi.co/json/");return l.ok&&(await l.json())?.country_code||null}catch(l){console.warn("ipapi lookup failed:",l)}return null}async function Va(){try{const l=await fetch("https://ipwho.is/");return l.ok&&(await l.json())?.country_code||null}catch(l){console.warn("ipwho.is lookup failed:",l)}return null}function xf(l,h){}function Zs(){js("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function Oi(l){const h=l.detail,g=h?.laneIndex;if(Number.isInteger(g)&&Y.value[g]){te.value=g;return}const v=h?.composer?.name;if(!v)return;const R=Y.value.findIndex(Z=>Z.name===v);R>=0&&(te.value=R)}function Qs(){te.value=null}function er(){!Fi.value||te.value===null||(te.value-=1)}function nr(){!Hi.value||te.value===null||(te.value+=1)}zi(async()=>{Ba(),Ni(),await Ze(),Jt(),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(Oi),window.addEventListener("popstate",Ks),window.addEventListener("composer-select",Oi),window.addEventListener("resize",jn),window.visualViewport&&(window.visualViewport.addEventListener("resize",jn),window.visualViewport.addEventListener("scroll",jn)),jn();const l=document.getElementById("timeline");l&&(l.addEventListener("scroll",F,{passive:!0}),l.addEventListener("touchstart",Xs,{passive:!0}),l.addEventListener("touchmove",Ys,{passive:!1}),l.addEventListener("touchend",Xt,{passive:!0}),l.addEventListener("touchcancel",Xt,{passive:!0}),F())}),Ai(()=>{window.removeEventListener("popstate",Ks),window.removeEventListener("composer-select",Oi),window.removeEventListener("resize",jn),window.visualViewport&&(window.visualViewport.removeEventListener("resize",jn),window.visualViewport.removeEventListener("scroll",jn)),Ra();const l=document.getElementById("timeline");l&&(l.removeEventListener("scroll",F),l.removeEventListener("touchstart",Xs),l.removeEventListener("touchmove",Ys),l.removeEventListener("touchend",Xt),l.removeEventListener("touchcancel",Xt))}),Qe(c,l=>{l&&(document.title=l)},{immediate:!0}),Qe(r,l=>{const h=t.includes(l)?l:at;if(h!==l){r.value=h;return}try{document.documentElement.setAttribute("data-lang",h)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(T.value)}),Qe(We,async l=>{l?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await Ze(),Kn.value.length&&ir()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",tr())}),Qe(te,l=>{const h=window.timeline;!h||typeof h.setSelectedLane!="function"||(Number.isInteger(l)?h.setSelectedLane(l):h.setSelectedLane(null))}),Qe(Kn,async l=>{We.value&&(tr(),await Ze(),l.length&&ir())}),Qe(()=>Y.value.map(l=>l.name),l=>{if(te.value===null)return;const h=be.value;if(!h){te.value=null;return}const g=l.findIndex(v=>v===h.name);g===-1?te.value=null:te.value=g});function Wi(l){return l?j?j.endsWith("/")&&l.startsWith("/")?j+l.slice(1):!j.endsWith("/")&&!l.startsWith("/")?`${j}/${l}`:j+l:l:j}function Ga(l){if(!l)return"";const h=ne;if(!h)return"";const g=h.endsWith("/");return`${h}${g?"":"/"}${l}`}function tr(){me.forEach(l=>{try{l.pause(),l.currentTime=0}catch(h){console.error("Failed to stop SoundCloud audio",h)}}),me.clear()}function ir(l,h=document){const v=(h||document).querySelectorAll("[data-soundcloud-playlist]");v.length&&(v.length,v.forEach(R=>{$a(R,()=>{})}))}async function $a(l,h){const g=()=>{typeof h=="function"&&setTimeout(()=>h(),0)};if(!l||l.dataset.soundcloudReady==="true"||l.dataset.soundcloudReady==="loading"||l.dataset.soundcloudReady==="error"){g();return}const v=l.getAttribute("data-soundcloud-playlist"),R=l.getAttribute("data-soundcloud-playlist-alt")||"",Z=[v,...R.split("|")].map(Be=>(Be||"").trim()).filter(Boolean);if(!Z.length){g();return}l.dataset.soundcloudReady="loading",l.innerHTML='<div class="sc-player__status">Loading tracks from SoundCloud...</div>';let ve=null;for(const Be of Z)try{const _e=await Ja(Be),Vn=Array.isArray(_e.tracks)&&_e.tracks.length?_e.tracks:_e&&_e.kind==="track"?[_e]:[],Te=qa(Vn);Za(l,Te,Be),g();return}catch(_e){if(ve=_e,_e&&_e.status===429){sr(l,Be),g();return}}console.error("Failed to build SoundCloud player",ve);const un=Z[0]||ke;sr(l,un),g()}async function Ua(l){if(!l)throw new Error("No track provided");const h=l.media&&Array.isArray(l.media.transcodings)?l.media.transcodings:[];if(h.length){let g=h.find(v=>v&&v.format&&v.format.protocol==="progressive");if(g||(g=h[0]),g&&g.url)try{const v=await Xa(g.url,l.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:l.id,transcodingUrl:g.url,finalUrl:v}),v}catch(v){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",v)}}if(!l.id)throw new Error("No track id provided");return Ya(l.id,l.track_authorization)}async function Ja(l){const h=Wi("/api/soundcloud/playlist")+`?url=${encodeURIComponent(l)}`,g=await fetch(h);if(!g.ok){const v=new Error(`SoundCloud playlist error: ${g.status}`);throw v.status=g.status,v.retryAfter=Number(g.headers?.get("Retry-After"))||void 0,v}return g.json()}function qa(l=[]){return Array.isArray(l)?l.map((h,g)=>{if(!h)return null;const v=`Track ${g+1}`,Z=[h.title,h.publisher_metadata?.release_title,h.permalink,h.permalink_url,h.id?String(h.id):null].map(ve=>typeof ve=="string"?ve.trim():"").filter(Boolean)[0]||v;return{...h,title:Z}}).filter(Boolean):[]}async function Xa(l,h){const g=Wi("/api/soundcloud/transcoding")+`?url=${encodeURIComponent(l)}${h?`&track_authorization=${encodeURIComponent(h)}`:""}`,v=await fetch(g);if(!v.ok){const Z=new Error(`SoundCloud transcoding error: ${v.status}`);throw Z.status=v.status,Z.retryAfter=Number(v.headers?.get("Retry-After"))||void 0,Z}const R=await v.json();if(!R?.url)throw new Error("Transcoding response missing url");return R.url}async function Ya(l,h){const g=Wi(`/api/soundcloud/streams/${l}`)+(h?`?track_authorization=${encodeURIComponent(h)}`:""),v=await fetch(g);if(!v.ok){const Z=new Error(`SoundCloud stream error: ${v.status}`);throw Z.status=v.status,Z.retryAfter=Number(v.headers?.get("Retry-After"))||void 0,Z}const R=await v.json();if(!R?.url)throw new Error("Stream response missing url");return R.url}function sr(l,h){const g=`https://w.soundcloud.com/player/?url=${encodeURIComponent(h)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;l.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${g}"
    ></iframe>
  `,l.dataset.soundcloudReady="true"}function Za(l,h,g){if(!Array.isArray(h)||!h.length){l.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',l.dataset.soundcloudReady="error";return}l.classList.add("sc-player");const v=document.createElement("div");v.className="sc-track-list";const R=document.createElement("audio");R.preload="none",me.add(R);let Z=null,ve=null,un=!1;const Be=(Te,Re)=>{Te.dataset.state=Re,Te.textContent=Re==="playing"?"⏸":Re==="loading"?"...":"▶"},_e=Te=>Be(Te,"idle"),Vn=()=>{ve&&_e(ve),Z=null,ve=null};R.addEventListener("ended",Vn),R.addEventListener("pause",()=>{ve&&R.currentTime<(R.duration||1/0)&&_e(ve)}),h.forEach((Te,Re)=>{const st=document.createElement("div");st.className="sc-track";const Ce=document.createElement("button");Ce.type="button",Ce.className="sc-track__button",Ce.setAttribute("aria-label","Play track"),Be(Ce,"idle");const Gn=document.createElement("div");Gn.className="sc-track__title",Gn.textContent=Te?.title||`Track ${Re+1}`,st.append(Ce,Gn),v.append(st),Ce.addEventListener("click",async()=>{if(!un){if(Z===(Te?.id??Re)&&!R.paused){R.pause(),_e(Ce);return}un=!0,Be(Ce,"loading");try{const vn=await Ua(Te);if(!vn)throw new Error("No stream URL returned");R.src=vn,await R.play(),ve&&ve!==Ce&&_e(ve),ve=Ce,Z=Te?.id??Re,Be(Ce,"playing")}catch(vn){console.error("Failed to play SoundCloud track",vn),_e(Ce),l.dataset.soundcloudReady="error"}finally{un=!1}}})}),l.innerHTML="",l.append(v,R),l.dataset.soundcloudReady="true"}return(l,h)=>(ue(),fe("div",sd,[x("header",rd,[x("button",{class:"menu-button",onClick:xa,"aria-label":"Toggle navigation menu"},[...h[5]||(h[5]=[x("span",{class:"menu-icon"},null,-1)])]),x("img",{class:"logo",src:Pu,alt:"Logo",onClick:Zs}),x("div",{class:"app-title",role:"button",onClick:Zs},re(c.value),1),x("div",od,[x("label",ad,re(m.value),1),ur(x("select",{id:"language-select",class:"language-select","onUpdate:modelValue":h[0]||(h[0]=g=>r.value=g),"aria-label":m.value,onChange:Na},[(ue(!0),fe(je,null,ni(a.value,g=>(ue(),fe("option",{key:g.value,value:g.value},re(g.label),9,cd))),128))],40,ld),[[Su,r.value]])])]),x("aside",{class:dt(["side-menu",{"side-menu--open":$.value}])},[x("nav",ud,[x("button",{class:dt(["menu-item",{"menu-item--active":D.value==="composers"}]),onClick:h[1]||(h[1]=g=>Vs("composers"))},re(d.value.composers),3),x("button",{class:dt(["menu-item",{"menu-item--active":D.value==="about"}]),onClick:h[2]||(h[2]=g=>Vs("about"))},re(d.value.about),3)])],2),$.value?(ue(),fe("div",{key:0,class:"backdrop",onClick:Ma})):Ye("",!0),x("main",dd,[D.value==="composers"?(ue(),fe("section",fd,[x("div",{class:"filter-dock",style:Ci(Bn.value),ref_key:"filterDockRef",ref:tn,onPointerdown:Ha,onTouchend:Fa},[x("div",hd,[x("div",md,[x("button",{type:"button",class:"filter-dock__collapse control-btn","aria-pressed":Oe.value,"aria-label":Oe.value?ln.value.restore:ln.value.minimize,onClick:Pa},[x("span",gd,re(Oe.value?"↑":"↓"),1)],8,pd)]),!ye.value&&!Oe.value?(ue(),fe("div",bd,[x("button",{type:"button",class:"control-btn",disabled:M.value,onClick:z,"aria-label":"Jump to start of timeline"}," ⇤ ",8,vd),x("button",{type:"button",class:"control-btn",disabled:E.value,onClick:H,"aria-label":"Jump to end of timeline"}," ⇥ ",8,yd)])):Ye("",!0),!ye.value&&!Oe.value?(ue(),fe("div",wd,[x("button",{type:"button",class:"control-btn",disabled:w.value,onClick:h[3]||(h[3]=g=>y(-1)),"aria-label":"Make timeline blocks smaller"}," − ",8,kd),x("button",{type:"button",class:"control-btn",disabled:k.value,onClick:h[4]||(h[4]=g=>y(1)),"aria-label":"Make timeline blocks larger"}," + ",8,_d)])):Ye("",!0),Oe.value?Ye("",!0):(ue(),fe("button",{key:2,class:"filter-dock__toggle control-btn control-primary","aria-expanded":ye.value,"aria-controls":"filter-panel",onClick:La,"aria-label":"Filter composers"},[...h[6]||(h[6]=[x("svg",{class:"filter-icon",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[x("path",{d:"M3 5h18l-7 8v5l-4 2v-7L3 5z"})],-1)])],8,Sd)),Pe(Cr,{name:"filter-fade",onAfterEnter:Gs,onAfterLeave:Gs},{default:us(()=>[ye.value?(ue(),fe("div",Td,[x("div",Cd,[(ue(),fe(je,null,ni(Ue,g=>x("label",{key:g.id,class:"filter-panel__item"},[ur(x("input",{"onUpdate:modelValue":v=>Ln.value[g.id]=v,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${Bs(g.id)}`},null,8,Ed),[[_u,Ln.value[g.id]]]),x("span",xd,re(Bs(g.id)),1)])),64))]),x("div",Md,[x("button",{type:"button",class:"filter-panel__ok control-btn",onClick:za,"aria-label":"Close filters"},re(I.value),1)])])):Ye("",!0)]),_:1})])],36),Pe(td,{composers:Y.value,settings:b,"era-labels":T.value},null,8,["composers","settings","era-labels"])])):D.value==="about"?(ue(),fe("section",Ld,[x("div",zd,[h[10]||(h[10]=x("img",{class:"about__logo",src:Iu,alt:"Music logo",loading:"lazy"},null,-1)),x("h1",Ad,re(p.value.title),1),x("p",Pd,re(p.value.intro),1),x("p",Id,re(p.value.goal),1),x("div",Rd,[h[9]||(h[9]=x("img",{class:"about__photo",src:Ru,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),x("div",Fd,[x("div",Hd,re(p.value.authorLabel),1),x("div",Dd,re(p.value.authorName),1),h[7]||(h[7]=x("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),h[8]||(h[8]=x("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),x("div",Nd,[x("div",Od,re(p.value.contributorsTitle),1),x("ul",Wd,[(ue(!0),fe(je,null,ni(S.value,g=>(ue(),fe("li",{key:g.url,class:"about__contributors-item"},[x("span",Bd,re(g.name),1),x("a",{class:"about__contributors-link",href:g.url,target:"_blank",rel:"noreferrer"},re(g.linkText),9,Kd)]))),128))])])])])):Ye("",!0)]),Pe(Cr,{name:"fade"},{default:us(()=>[We.value?(ue(),fe("div",{key:0,class:"composer-modal",onClick:Eu(Qs,["self"])},[x("div",jd,[x("header",Vd,[x("div",Gd,[x("h2",$d,re(tt.value),1),be.value?(ue(),fe("p",Ud,re(be.value.birth)+" — "+re(be.value.death),1)):Ye("",!0)]),x("div",Jd,[x("button",{class:"composer-modal__arrow",onClick:er,disabled:!Fi.value,"aria-label":"Previous"}," ← ",8,qd),x("span",Xd,re((te.value??0)+1)+" / "+re(Y.value.length),1),x("button",{class:"composer-modal__arrow",onClick:nr,disabled:!Hi.value,"aria-label":"Next"}," → ",8,Yd)]),x("button",{class:"composer-modal__close",onClick:Qs,"aria-label":"Close composer details"},"×")]),x("div",Zd,[Le.value?(ue(),fe("div",Qd,[x("img",{class:"composer-modal__photo",src:Le.value,alt:tt.value},null,8,ef),x("div",nf,[x("button",{class:"composer-modal__arrow",onClick:er,disabled:!Fi.value,"aria-label":"Previous"}," ← ",8,tf),x("span",sf,re((te.value??0)+1)+" / "+re(Y.value.length),1),x("button",{class:"composer-modal__arrow",onClick:nr,disabled:!Hi.value,"aria-label":"Next"}," → ",8,rf)]),x("div",of,[x("div",af,re(tt.value),1),be.value?(ue(),fe("div",lf,re(be.value.birth)+" — "+re(be.value.death),1)):Ye("",!0)])])):Ye("",!0),x("div",cf,[x("div",uf,[x("div",df,re(G.value.keyWorks),1),Kn.value.length?(ue(),fe("a",ff,[...h[11]||(h[11]=[x("img",{class:"sc-powered__img",src:Fu,alt:"Powered by SoundCloud"},null,-1)])])):Ye("",!0)]),Kn.value.length?(ue(),fe("div",{key:Kn.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":Kn.value[0],"data-soundcloud-playlist-alt":Kn.value.slice(1).join("|")},[...h[12]||(h[12]=[x("div",{class:"sc-player__status"},"Loading tracks...",-1)])],8,hf)):(ue(),fe("div",mf," Playlist will appear here soon. "))]),x("div",pf,[yt.value?(ue(),fe("div",gf,re(yt.value),1)):Ye("",!0),Ve.value?(ue(),fe("ul",bf,[(ue(!0),fe(je,null,ni(Ve.value.split(`
`),(g,v)=>(ue(),fe("li",{key:v},[x("span",vf,re(g),1)]))),128))])):(ue(),fe("p",yf,"No description yet."))])])])])):Ye("",!0)]),_:1})]))}},Ef=ba(Cf,[["__scopeId","data-v-a97b6c75"]]);Lu(Ef).mount("#app");
