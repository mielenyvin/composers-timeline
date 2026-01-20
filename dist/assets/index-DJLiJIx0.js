(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function cr(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Ie={},Bt=[],Bn=()=>{},qo=()=>!1,cs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),dr=e=>e.startsWith("onUpdate:"),ln=Object.assign,hr=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Bl=Object.prototype.hasOwnProperty,ze=(e,n)=>Bl.call(e,n),se=Array.isArray,Kt=e=>wi(e)==="[object Map]",qt=e=>wi(e)==="[object Set]",Jr=e=>wi(e)==="[object Date]",fe=e=>typeof e=="function",qe=e=>typeof e=="string",Kn=e=>typeof e=="symbol",Re=e=>e!==null&&typeof e=="object",Uo=e=>(Re(e)||fe(e))&&fe(e.then)&&fe(e.catch),Jo=Object.prototype.toString,wi=e=>Jo.call(e),Kl=e=>wi(e).slice(8,-1),Xo=e=>wi(e)==="[object Object]",fr=e=>qe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ri=cr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ds=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},$l=/-\w/g,pt=ds(e=>e.replace($l,n=>n.slice(1).toUpperCase())),jl=/\B([A-Z])/g,Pt=ds(e=>e.replace(jl,"-$1").toLowerCase()),Yo=ds(e=>e.charAt(0).toUpperCase()+e.slice(1)),xs=ds(e=>e?`on${Yo(e)}`:""),ft=(e,n)=>!Object.is(e,n),Vi=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Qo=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},Zo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Gl=e=>{const n=qe(e)?Number(e):NaN;return isNaN(n)?e:n};let Xr;const hs=()=>Xr||(Xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lt(e){if(se(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=qe(i)?Jl(i):Lt(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(qe(e)||Re(e))return e}const Vl=/;(?![^(]*\))/g,ql=/:([^]+)/,Ul=/\/\*[^]*?\*\//g;function Jl(e){const n={};return e.replace(Ul,"").split(Vl).forEach(t=>{if(t){const i=t.split(ql);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function Ve(e){let n="";if(qe(e))n=e;else if(se(e))for(let t=0;t<e.length;t++){const i=Ve(e[t]);i&&(n+=i+" ")}else if(Re(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yl=cr(Xl);function ea(e){return!!e||e===""}function Ql(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=_i(e[i],n[i]);return t}function _i(e,n){if(e===n)return!0;let t=Jr(e),i=Jr(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=Kn(e),i=Kn(n),t||i)return e===n;if(t=se(e),i=se(n),t||i)return t&&i?Ql(e,n):!1;if(t=Re(e),i=Re(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const a in e){const l=e.hasOwnProperty(a),u=n.hasOwnProperty(a);if(l&&!u||!l&&u||!_i(e[a],n[a]))return!1}}return String(e)===String(n)}function mr(e,n){return e.findIndex(t=>_i(t,n))}const na=e=>!!(e&&e.__v_isRef===!0),P=e=>qe(e)?e:e==null?"":se(e)||Re(e)&&(e.toString===Jo||!fe(e.toString))?na(e)?P(e.value):JSON.stringify(e,ta,2):String(e),ta=(e,n)=>na(n)?ta(e,n.value):Kt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[Ps(i,r)+" =>"]=s,t),{})}:qt(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Ps(t))}:Kn(n)?Ps(n):Re(n)&&!se(n)&&!Xo(n)?String(n):n,Ps=(e,n="")=>{var t;return Kn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let _n;class Zl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_n,!n&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=_n;try{return _n=this,n()}finally{_n=t}}}on(){++this._on===1&&(this.prevScope=_n,_n=this)}off(){this._on>0&&--this._on===0&&(_n=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function eu(){return _n}let Fe;const As=new WeakSet;class ia{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_n&&_n.active&&_n.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,As.has(this)&&(As.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ra(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yr(this),oa(this);const n=Fe,t=On;Fe=this,On=!0;try{return this.fn()}finally{aa(this),Fe=n,On=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)vr(n);this.deps=this.depsTail=void 0,Yr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?As.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Us(this)&&this.run()}get dirty(){return Us(this)}}let sa=0,oi,ai;function ra(e,n=!1){if(e.flags|=8,n){e.next=ai,ai=e;return}e.next=oi,oi=e}function pr(){sa++}function gr(){if(--sa>0)return;if(ai){let n=ai;for(ai=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;oi;){let n=oi;for(oi=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function oa(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function aa(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),vr(i),nu(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function Us(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(la(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function la(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===hi)||(e.globalVersion=hi,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Us(e))))return;e.flags|=2;const n=e.dep,t=Fe,i=On;Fe=e,On=!0;try{oa(e);const s=e.fn(e._value);(n.version===0||ft(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{Fe=t,On=i,aa(e),e.flags&=-3}}function vr(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)vr(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function nu(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let On=!0;const ua=[];function Qn(){ua.push(On),On=!1}function Zn(){const e=ua.pop();On=e===void 0?!0:e}function Yr(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=Fe;Fe=void 0;try{n()}finally{Fe=t}}}let hi=0;class tu{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class br{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Fe||!On||Fe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Fe)t=this.activeLink=new tu(Fe,this),Fe.deps?(t.prevDep=Fe.depsTail,Fe.depsTail.nextDep=t,Fe.depsTail=t):Fe.deps=Fe.depsTail=t,ca(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Fe.depsTail,t.nextDep=void 0,Fe.depsTail.nextDep=t,Fe.depsTail=t,Fe.deps===t&&(Fe.deps=i)}return t}trigger(n){this.version++,hi++,this.notify(n)}notify(n){pr();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{gr()}}}function ca(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)ca(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Js=new WeakMap,zt=Symbol(""),Xs=Symbol(""),fi=Symbol("");function dn(e,n,t){if(On&&Fe){let i=Js.get(e);i||Js.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new br),s.map=i,s.key=t),s.track()}}function Xn(e,n,t,i,s,r){const a=Js.get(e);if(!a){hi++;return}const l=u=>{u&&u.trigger()};if(pr(),n==="clear")a.forEach(l);else{const u=se(e),g=u&&fr(t);if(u&&t==="length"){const h=Number(i);a.forEach((v,T)=>{(T==="length"||T===fi||!Kn(T)&&T>=h)&&l(v)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),g&&l(a.get(fi)),n){case"add":u?g&&l(a.get("length")):(l(a.get(zt)),Kt(e)&&l(a.get(Xs)));break;case"delete":u||(l(a.get(zt)),Kt(e)&&l(a.get(Xs)));break;case"set":Kt(e)&&l(a.get(zt));break}}gr()}function Nt(e){const n=Le(e);return n===e?n:(dn(n,"iterate",fi),xn(e)?n:n.map(Fn))}function fs(e){return dn(e=Le(e),"iterate",fi),e}function at(e,n){return et(e)?xt(e)?Vt(Fn(n)):Vt(n):Fn(n)}const iu={__proto__:null,[Symbol.iterator](){return Rs(this,Symbol.iterator,e=>at(this,e))},concat(...e){return Nt(this).concat(...e.map(n=>se(n)?Nt(n):n))},entries(){return Rs(this,"entries",e=>(e[1]=at(this,e[1]),e))},every(e,n){return Vn(this,"every",e,n,void 0,arguments)},filter(e,n){return Vn(this,"filter",e,n,t=>t.map(i=>at(this,i)),arguments)},find(e,n){return Vn(this,"find",e,n,t=>at(this,t),arguments)},findIndex(e,n){return Vn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Vn(this,"findLast",e,n,t=>at(this,t),arguments)},findLastIndex(e,n){return Vn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Vn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Is(this,"includes",e)},indexOf(...e){return Is(this,"indexOf",e)},join(e){return Nt(this).join(e)},lastIndexOf(...e){return Is(this,"lastIndexOf",e)},map(e,n){return Vn(this,"map",e,n,void 0,arguments)},pop(){return ni(this,"pop")},push(...e){return ni(this,"push",e)},reduce(e,...n){return Qr(this,"reduce",e,n)},reduceRight(e,...n){return Qr(this,"reduceRight",e,n)},shift(){return ni(this,"shift")},some(e,n){return Vn(this,"some",e,n,void 0,arguments)},splice(...e){return ni(this,"splice",e)},toReversed(){return Nt(this).toReversed()},toSorted(e){return Nt(this).toSorted(e)},toSpliced(...e){return Nt(this).toSpliced(...e)},unshift(...e){return ni(this,"unshift",e)},values(){return Rs(this,"values",e=>at(this,e))}};function Rs(e,n,t){const i=fs(e),s=i[n]();return i!==e&&!xn(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const su=Array.prototype;function Vn(e,n,t,i,s,r){const a=fs(e),l=a!==e&&!xn(e),u=a[n];if(u!==su[n]){const v=u.apply(e,r);return l?Fn(v):v}let g=t;a!==e&&(l?g=function(v,T){return t.call(this,at(e,v),T,e)}:t.length>2&&(g=function(v,T){return t.call(this,v,T,e)}));const h=u.call(a,g,i);return l&&s?s(h):h}function Qr(e,n,t,i){const s=fs(e);let r=t;return s!==e&&(xn(e)?t.length>3&&(r=function(a,l,u){return t.call(this,a,l,u,e)}):r=function(a,l,u){return t.call(this,a,at(e,l),u,e)}),s[n](r,...i)}function Is(e,n,t){const i=Le(e);dn(i,"iterate",fi);const s=i[n](...t);return(s===-1||s===!1)&&_r(t[0])?(t[0]=Le(t[0]),i[n](...t)):s}function ni(e,n,t=[]){Qn(),pr();const i=Le(e)[n].apply(e,t);return gr(),Zn(),i}const ru=cr("__proto__,__v_isRef,__isVue"),da=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kn));function ou(e){Kn(e)||(e=String(e));const n=Le(this);return dn(n,"has",e),n.hasOwnProperty(e)}class ha{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?gu:ga:r?pa:ma).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const a=se(n);if(!s){let u;if(a&&(u=iu[t]))return u;if(t==="hasOwnProperty")return ou}const l=Reflect.get(n,t,an(n)?n:i);if((Kn(t)?da.has(t):ru(t))||(s||dn(n,"get",t),r))return l;if(an(l)){const u=a&&fr(t)?l:l.value;return s&&Re(u)?Qs(u):u}return Re(l)?s?Qs(l):Mt(l):l}}class fa extends ha{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const a=se(n)&&fr(t);if(!this._isShallow){const g=et(r);if(!xn(i)&&!et(i)&&(r=Le(r),i=Le(i)),!a&&an(r)&&!an(i))return g||(r.value=i),!0}const l=a?Number(t)<n.length:ze(n,t),u=Reflect.set(n,t,i,an(n)?n:s);return n===Le(s)&&(l?ft(i,r)&&Xn(n,"set",t,i):Xn(n,"add",t,i)),u}deleteProperty(n,t){const i=ze(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&Xn(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!Kn(t)||!da.has(t))&&dn(n,"has",t),i}ownKeys(n){return dn(n,"iterate",se(n)?"length":zt),Reflect.ownKeys(n)}}class au extends ha{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const lu=new fa,uu=new au,cu=new fa(!0);const Ys=e=>e,Fi=e=>Reflect.getPrototypeOf(e);function du(e,n,t){return function(...i){const s=this.__v_raw,r=Le(s),a=Kt(r),l=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,g=s[e](...i),h=t?Ys:n?Vt:Fn;return!n&&dn(r,"iterate",u?Xs:zt),{next(){const{value:v,done:T}=g.next();return T?{value:v,done:T}:{value:l?[h(v[0]),h(v[1])]:h(v),done:T}},[Symbol.iterator](){return this}}}}function Ni(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function hu(e,n){const t={get(s){const r=this.__v_raw,a=Le(r),l=Le(s);e||(ft(s,l)&&dn(a,"get",s),dn(a,"get",l));const{has:u}=Fi(a),g=n?Ys:e?Vt:Fn;if(u.call(a,s))return g(r.get(s));if(u.call(a,l))return g(r.get(l));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!e&&dn(Le(s),"iterate",zt),s.size},has(s){const r=this.__v_raw,a=Le(r),l=Le(s);return e||(ft(s,l)&&dn(a,"has",s),dn(a,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const a=this,l=a.__v_raw,u=Le(l),g=n?Ys:e?Vt:Fn;return!e&&dn(u,"iterate",zt),l.forEach((h,v)=>s.call(r,g(h),g(v),a))}};return ln(t,e?{add:Ni("add"),set:Ni("set"),delete:Ni("delete"),clear:Ni("clear")}:{add(s){!n&&!xn(s)&&!et(s)&&(s=Le(s));const r=Le(this);return Fi(r).has.call(r,s)||(r.add(s),Xn(r,"add",s,s)),this},set(s,r){!n&&!xn(r)&&!et(r)&&(r=Le(r));const a=Le(this),{has:l,get:u}=Fi(a);let g=l.call(a,s);g||(s=Le(s),g=l.call(a,s));const h=u.call(a,s);return a.set(s,r),g?ft(r,h)&&Xn(a,"set",s,r):Xn(a,"add",s,r),this},delete(s){const r=Le(this),{has:a,get:l}=Fi(r);let u=a.call(r,s);u||(s=Le(s),u=a.call(r,s)),l&&l.call(r,s);const g=r.delete(s);return u&&Xn(r,"delete",s,void 0),g},clear(){const s=Le(this),r=s.size!==0,a=s.clear();return r&&Xn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=du(s,e,n)}),t}function yr(e,n){const t=hu(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(ze(t,s)&&s in i?t:i,s,r)}const fu={get:yr(!1,!1)},mu={get:yr(!1,!0)},pu={get:yr(!0,!1)};const ma=new WeakMap,pa=new WeakMap,ga=new WeakMap,gu=new WeakMap;function vu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bu(e){return e.__v_skip||!Object.isExtensible(e)?0:vu(Kl(e))}function Mt(e){return et(e)?e:wr(e,!1,lu,fu,ma)}function yu(e){return wr(e,!1,cu,mu,pa)}function Qs(e){return wr(e,!0,uu,pu,ga)}function wr(e,n,t,i,s){if(!Re(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=bu(e);if(r===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,r===2?i:t);return s.set(e,l),l}function xt(e){return et(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function et(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function _r(e){return e?!!e.__v_raw:!1}function Le(e){const n=e&&e.__v_raw;return n?Le(n):e}function wu(e){return!ze(e,"__v_skip")&&Object.isExtensible(e)&&Qo(e,"__v_skip",!0),e}const Fn=e=>Re(e)?Mt(e):e,Vt=e=>Re(e)?Qs(e):e;function an(e){return e?e.__v_isRef===!0:!1}function ue(e){return _u(e,!1)}function _u(e,n){return an(e)?e:new ku(e,n)}class ku{constructor(n,t){this.dep=new br,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Le(n),this._value=t?n:Fn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||xn(n)||et(n);n=i?n:Le(n),ft(n,t)&&(this._rawValue=n,this._value=i?n:Fn(n),this.dep.trigger())}}function Su(e){return an(e)?e.value:e}const Tu={get:(e,n,t)=>n==="__v_raw"?e:Su(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return an(s)&&!an(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function va(e){return xt(e)?e:new Proxy(e,Tu)}class Cu{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new br(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return ra(this,!0),!0}get value(){const n=this.dep.track();return la(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Eu(e,n,t=!1){let i,s;return fe(e)?i=e:(i=e.get,s=e.set),new Cu(i,s,t)}const Di={},Zi=new WeakMap;let St;function Lu(e,n=!1,t=St){if(t){let i=Zi.get(t);i||Zi.set(t,i=[]),i.push(e)}}function zu(e,n,t=Ie){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:l,call:u}=t,g=G=>s?G:xn(G)||s===!1||s===0?Yn(G,1):Yn(G);let h,v,T,A,M=!1,q=!1;if(an(e)?(v=()=>e.value,M=xn(e)):xt(e)?(v=()=>g(e),M=!0):se(e)?(q=!0,M=e.some(G=>xt(G)||xn(G)),v=()=>e.map(G=>{if(an(G))return G.value;if(xt(G))return g(G);if(fe(G))return u?u(G,2):G()})):fe(e)?n?v=u?()=>u(e,2):e:v=()=>{if(T){Qn();try{T()}finally{Zn()}}const G=St;St=h;try{return u?u(e,3,[A]):e(A)}finally{St=G}}:v=Bn,n&&s){const G=v,be=s===!0?1/0:s;v=()=>Yn(G(),be)}const he=eu(),F=()=>{h.stop(),he&&he.active&&hr(he.effects,h)};if(r&&n){const G=n;n=(...be)=>{G(...be),F()}}let K=q?new Array(e.length).fill(Di):Di;const te=G=>{if(!(!(h.flags&1)||!h.dirty&&!G))if(n){const be=h.run();if(s||M||(q?be.some((ee,Z)=>ft(ee,K[Z])):ft(be,K))){T&&T();const ee=St;St=h;try{const Z=[be,K===Di?void 0:q&&K[0]===Di?[]:K,A];K=be,u?u(n,3,Z):n(...Z)}finally{St=ee}}}else h.run()};return l&&l(te),h=new ia(v),h.scheduler=a?()=>a(te,!1):te,A=G=>Lu(G,!1,h),T=h.onStop=()=>{const G=Zi.get(h);if(G){if(u)u(G,4);else for(const be of G)be();Zi.delete(h)}},n?i?te(!0):K=h.run():a?a(te.bind(null,!0),!0):h.run(),F.pause=h.pause.bind(h),F.resume=h.resume.bind(h),F.stop=F,F}function Yn(e,n=1/0,t){if(n<=0||!Re(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,an(e))Yn(e.value,n,t);else if(se(e))for(let i=0;i<e.length;i++)Yn(e[i],n,t);else if(qt(e)||Kt(e))e.forEach(i=>{Yn(i,n,t)});else if(Xo(e)){for(const i in e)Yn(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Yn(e[i],n,t)}return e}function ki(e,n,t,i){try{return i?e(...i):e()}catch(s){ms(s,n,t)}}function Nn(e,n,t,i){if(fe(e)){const s=ki(e,n,t,i);return s&&Uo(s)&&s.catch(r=>{ms(r,n,t)}),s}if(se(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Nn(e[r],n,t,i));return s}}function ms(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||Ie;if(n){let l=n.parent;const u=n.proxy,g=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h){for(let v=0;v<h.length;v++)if(h[v](e,u,g)===!1)return}l=l.parent}if(r){Qn(),ki(r,null,10,[e,u,g]),Zn();return}}Mu(e,t,s,i,a)}function Mu(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const vn=[];let Hn=-1;const $t=[];let lt=null,Wt=0;const ba=Promise.resolve();let es=null;function cn(e){const n=es||ba;return e?n.then(this?e.bind(this):e):n}function xu(e){let n=Hn+1,t=vn.length;for(;n<t;){const i=n+t>>>1,s=vn[i],r=mi(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function kr(e){if(!(e.flags&1)){const n=mi(e),t=vn[vn.length-1];!t||!(e.flags&2)&&n>=mi(t)?vn.push(e):vn.splice(xu(n),0,e),e.flags|=1,ya()}}function ya(){es||(es=ba.then(_a))}function Pu(e){se(e)?$t.push(...e):lt&&e.id===-1?lt.splice(Wt+1,0,e):e.flags&1||($t.push(e),e.flags|=1),ya()}function Zr(e,n,t=Hn+1){for(;t<vn.length;t++){const i=vn[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;vn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function wa(e){if($t.length){const n=[...new Set($t)].sort((t,i)=>mi(t)-mi(i));if($t.length=0,lt){lt.push(...n);return}for(lt=n,Wt=0;Wt<lt.length;Wt++){const t=lt[Wt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}lt=null,Wt=0}}const mi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function _a(e){try{for(Hn=0;Hn<vn.length;Hn++){const n=vn[Hn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),ki(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Hn<vn.length;Hn++){const n=vn[Hn];n&&(n.flags&=-2)}Hn=-1,vn.length=0,wa(),es=null,(vn.length||$t.length)&&_a()}}let Mn=null,ka=null;function ns(e){const n=Mn;return Mn=e,ka=e&&e.type.__scopeId||null,n}function Zs(e,n=Mn,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&rs(-1);const r=ns(n);let a;try{a=e(...s)}finally{ns(r),i._d&&rs(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ts(e,n){if(Mn===null)return e;const t=ys(Mn),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,a,l,u=Ie]=n[s];r&&(fe(r)&&(r={mounted:r,updated:r}),r.deep&&Yn(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:l,modifiers:u}))}return e}function yt(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let a=0;a<s.length;a++){const l=s[a];r&&(l.oldValue=r[a].value);let u=l.dir[i];u&&(Qn(),Nn(u,t,8,[e.el,l,e,n]),Zn())}}const Au=Symbol("_vte"),Sa=e=>e.__isTeleport,Jn=Symbol("_leaveCb"),Hi=Symbol("_enterCb");function Ru(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Si(()=>{e.isMounted=!0}),Ut(()=>{e.isUnmounting=!0}),e}const zn=[Function,Array],Ta={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zn,onEnter:zn,onAfterEnter:zn,onEnterCancelled:zn,onBeforeLeave:zn,onLeave:zn,onAfterLeave:zn,onLeaveCancelled:zn,onBeforeAppear:zn,onAppear:zn,onAfterAppear:zn,onAppearCancelled:zn},Ca=e=>{const n=e.subTree;return n.component?Ca(n.component):n},Iu={name:"BaseTransition",props:Ta,setup(e,{slots:n}){const t=Ya(),i=Ru();return()=>{const s=n.default&&za(n.default(),!0);if(!s||!s.length)return;const r=Ea(s),a=Le(e),{mode:l}=a;if(i.isLeaving)return Os(r);const u=eo(r);if(!u)return Os(r);let g=er(u,a,i,t,v=>g=v);u.type!==bn&&pi(u,g);let h=t.subTree&&eo(t.subTree);if(h&&h.type!==bn&&!Ct(h,u)&&Ca(t).type!==bn){let v=er(h,a,i,t);if(pi(h,v),l==="out-in"&&u.type!==bn)return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete v.afterLeave,h=void 0},Os(r);l==="in-out"&&u.type!==bn?v.delayLeave=(T,A,M)=>{const q=La(i,h);q[String(h.key)]=h,T[Jn]=()=>{A(),T[Jn]=void 0,delete g.delayedLeave,h=void 0},g.delayedLeave=()=>{M(),delete g.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function Ea(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==bn){n=t;break}}return n}const Ou=Iu;function La(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function er(e,n,t,i,s){const{appear:r,mode:a,persisted:l=!1,onBeforeEnter:u,onEnter:g,onAfterEnter:h,onEnterCancelled:v,onBeforeLeave:T,onLeave:A,onAfterLeave:M,onLeaveCancelled:q,onBeforeAppear:he,onAppear:F,onAfterAppear:K,onAppearCancelled:te}=n,G=String(e.key),be=La(t,e),ee=($,re)=>{$&&Nn($,i,9,re)},Z=($,re)=>{const U=re[1];ee($,re),se($)?$.every(N=>N.length<=1)&&U():$.length<=1&&U()},ne={mode:a,persisted:l,beforeEnter($){let re=u;if(!t.isMounted)if(r)re=he||u;else return;$[Jn]&&$[Jn](!0);const U=be[G];U&&Ct(e,U)&&U.el[Jn]&&U.el[Jn](),ee(re,[$])},enter($){let re=g,U=h,N=v;if(!t.isMounted)if(r)re=F||g,U=K||h,N=te||v;else return;let ce=!1;const _e=$[Hi]=$e=>{ce||(ce=!0,$e?ee(N,[$]):ee(U,[$]),ne.delayedLeave&&ne.delayedLeave(),$[Hi]=void 0)};re?Z(re,[$,_e]):_e()},leave($,re){const U=String(e.key);if($[Hi]&&$[Hi](!0),t.isUnmounting)return re();ee(T,[$]);let N=!1;const ce=$[Jn]=_e=>{N||(N=!0,re(),_e?ee(q,[$]):ee(M,[$]),$[Jn]=void 0,be[U]===e&&delete be[U])};be[U]=e,A?Z(A,[$,ce]):ce()},clone($){const re=er($,n,t,i,s);return s&&s(re),re}};return ne}function Os(e){if(ps(e))return e=gt(e),e.children=null,e}function eo(e){if(!ps(e))return Sa(e.type)&&e.children?Ea(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&fe(t.default))return t.default()}}function pi(e,n){e.shapeFlag&6&&e.component?(e.transition=n,pi(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function za(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let a=e[r];const l=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===en?(a.patchFlag&128&&s++,i=i.concat(za(a.children,n,l))):(n||a.type!==bn)&&i.push(l!=null?gt(a,{key:l}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ma(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const is=new WeakMap;function li(e,n,t,i,s=!1){if(se(e)){e.forEach((M,q)=>li(M,n&&(se(n)?n[q]:n),t,i,s));return}if(ui(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&li(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?ys(i.component):i.el,a=s?null:r,{i:l,r:u}=e,g=n&&n.r,h=l.refs===Ie?l.refs={}:l.refs,v=l.setupState,T=Le(v),A=v===Ie?qo:M=>ze(T,M);if(g!=null&&g!==u){if(no(n),qe(g))h[g]=null,A(g)&&(v[g]=null);else if(an(g)){g.value=null;const M=n;M.k&&(h[M.k]=null)}}if(fe(u))ki(u,l,12,[a,h]);else{const M=qe(u),q=an(u);if(M||q){const he=()=>{if(e.f){const F=M?A(u)?v[u]:h[u]:u.value;if(s)se(F)&&hr(F,r);else if(se(F))F.includes(r)||F.push(r);else if(M)h[u]=[r],A(u)&&(v[u]=h[u]);else{const K=[r];u.value=K,e.k&&(h[e.k]=K)}}else M?(h[u]=a,A(u)&&(v[u]=a)):q&&(u.value=a,e.k&&(h[e.k]=a))};if(a){const F=()=>{he(),is.delete(e)};F.id=-1,is.set(e,F),Cn(F,t)}else no(e),he()}}}function no(e){const n=is.get(e);n&&(n.flags|=8,is.delete(e))}hs().requestIdleCallback;hs().cancelIdleCallback;const ui=e=>!!e.type.__asyncLoader,ps=e=>e.type.__isKeepAlive;function Fu(e,n){xa(e,"a",n)}function Nu(e,n){xa(e,"da",n)}function xa(e,n,t=yn){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(gs(n,i,t),t){let s=t.parent;for(;s&&s.parent;)ps(s.parent.vnode)&&Du(i,n,t,s),s=s.parent}}function Du(e,n,t,i){const s=gs(n,e,i,!0);Pa(()=>{hr(i[n],s)},t)}function gs(e,n,t=yn,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...a)=>{Qn();const l=Ti(t),u=Nn(n,t,e,a);return l(),Zn(),u});return i?s.unshift(r):s.push(r),r}}const nt=e=>(n,t=yn)=>{(!vi||e==="sp")&&gs(e,(...i)=>n(...i),t)},Hu=nt("bm"),Si=nt("m"),Wu=nt("bu"),Bu=nt("u"),Ut=nt("bum"),Pa=nt("um"),Ku=nt("sp"),$u=nt("rtg"),ju=nt("rtc");function Gu(e,n=yn){gs("ec",e,n)}const Vu=Symbol.for("v-ndc");function mt(e,n,t,i){let s;const r=t,a=se(e);if(a||qe(e)){const l=a&&xt(e);let u=!1,g=!1;l&&(u=!xn(e),g=et(e),e=fs(e)),s=new Array(e.length);for(let h=0,v=e.length;h<v;h++)s[h]=n(u?g?Vt(Fn(e[h])):Fn(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=n(l+1,l,void 0,r)}else if(Re(e))if(e[Symbol.iterator])s=Array.from(e,(l,u)=>n(l,u,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let u=0,g=l.length;u<g;u++){const h=l[u];s[u]=n(e[h],h,u,r)}}else s=[];return s}const nr=e=>e?Qa(e)?ys(e):nr(e.parent):null,ci=ln(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nr(e.parent),$root:e=>nr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ra(e),$forceUpdate:e=>e.f||(e.f=()=>{kr(e.update)}),$nextTick:e=>e.n||(e.n=cn.bind(e.proxy)),$watch:e=>sc.bind(e)}),Fs=(e,n)=>e!==Ie&&!e.__isScriptSetup&&ze(e,n),qu={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:l,appContext:u}=e;if(n[0]!=="$"){const T=a[n];if(T!==void 0)switch(T){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(Fs(i,n))return a[n]=1,i[n];if(s!==Ie&&ze(s,n))return a[n]=2,s[n];if(ze(r,n))return a[n]=3,r[n];if(t!==Ie&&ze(t,n))return a[n]=4,t[n];tr&&(a[n]=0)}}const g=ci[n];let h,v;if(g)return n==="$attrs"&&dn(e.attrs,"get",""),g(e);if((h=l.__cssModules)&&(h=h[n]))return h;if(t!==Ie&&ze(t,n))return a[n]=4,t[n];if(v=u.config.globalProperties,ze(v,n))return v[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return Fs(s,n)?(s[n]=t,!0):i!==Ie&&ze(i,n)?(i[n]=t,!0):ze(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:a}},l){let u;return!!(t[l]||e!==Ie&&l[0]!=="$"&&ze(e,l)||Fs(n,l)||ze(r,l)||ze(i,l)||ze(ci,l)||ze(s.config.globalProperties,l)||(u=a.__cssModules)&&u[l])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ze(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function to(e){return se(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let tr=!0;function Uu(e){const n=Ra(e),t=e.proxy,i=e.ctx;tr=!1,n.beforeCreate&&io(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:l,provide:u,inject:g,created:h,beforeMount:v,mounted:T,beforeUpdate:A,updated:M,activated:q,deactivated:he,beforeDestroy:F,beforeUnmount:K,destroyed:te,unmounted:G,render:be,renderTracked:ee,renderTriggered:Z,errorCaptured:ne,serverPrefetch:$,expose:re,inheritAttrs:U,components:N,directives:ce,filters:_e}=n;if(g&&Ju(g,i,null),a)for(const ge in a){const ve=a[ge];fe(ve)&&(i[ge]=ve.bind(t))}if(s){const ge=s.call(t,t);Re(ge)&&(e.data=Mt(ge))}if(tr=!0,r)for(const ge in r){const ve=r[ge],je=fe(ve)?ve.bind(t,t):fe(ve.get)?ve.get.bind(t,t):Bn,me=!fe(ve)&&fe(ve.set)?ve.set.bind(t):Bn,Me=W({get:je,set:me});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ee=>Me.value=Ee})}if(l)for(const ge in l)Aa(l[ge],i,t,ge);if(u){const ge=fe(u)?u.call(t):u;Reflect.ownKeys(ge).forEach(ve=>{nc(ve,ge[ve])})}h&&io(h,e,"c");function D(ge,ve){se(ve)?ve.forEach(je=>ge(je.bind(t))):ve&&ge(ve.bind(t))}if(D(Hu,v),D(Si,T),D(Wu,A),D(Bu,M),D(Fu,q),D(Nu,he),D(Gu,ne),D(ju,ee),D($u,Z),D(Ut,K),D(Pa,G),D(Ku,$),se(re))if(re.length){const ge=e.exposed||(e.exposed={});re.forEach(ve=>{Object.defineProperty(ge,ve,{get:()=>t[ve],set:je=>t[ve]=je,enumerable:!0})})}else e.exposed||(e.exposed={});be&&e.render===Bn&&(e.render=be),U!=null&&(e.inheritAttrs=U),N&&(e.components=N),ce&&(e.directives=ce),$&&Ma(e)}function Ju(e,n,t=Bn){se(e)&&(e=ir(e));for(const i in e){const s=e[i];let r;Re(s)?"default"in s?r=qi(s.from||i,s.default,!0):r=qi(s.from||i):r=qi(s),an(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):n[i]=r}}function io(e,n,t){Nn(se(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function Aa(e,n,t,i){let s=i.includes(".")?Fa(t,i):()=>t[i];if(qe(e)){const r=n[e];fe(r)&&Ke(s,r)}else if(fe(e))Ke(s,e.bind(t));else if(Re(e))if(se(e))e.forEach(r=>Aa(r,n,t,i));else{const r=fe(e.handler)?e.handler.bind(t):n[e.handler];fe(r)&&Ke(s,r,e)}}function Ra(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(n);let u;return l?u=l:!s.length&&!t&&!i?u=n:(u={},s.length&&s.forEach(g=>ss(u,g,a,!0)),ss(u,n,a)),Re(n)&&r.set(n,u),u}function ss(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&ss(e,r,t,!0),s&&s.forEach(a=>ss(e,a,t,!0));for(const a in n)if(!(i&&a==="expose")){const l=Xu[a]||t&&t[a];e[a]=l?l(e[a],n[a]):n[a]}return e}const Xu={data:so,props:ro,emits:ro,methods:ii,computed:ii,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:ii,directives:ii,watch:Qu,provide:so,inject:Yu};function so(e,n){return n?e?function(){return ln(fe(e)?e.call(this,this):e,fe(n)?n.call(this,this):n)}:n:e}function Yu(e,n){return ii(ir(e),ir(n))}function ir(e){if(se(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function gn(e,n){return e?[...new Set([].concat(e,n))]:n}function ii(e,n){return e?ln(Object.create(null),e,n):n}function ro(e,n){return e?se(e)&&se(n)?[...new Set([...e,...n])]:ln(Object.create(null),to(e),to(n??{})):n}function Qu(e,n){if(!e)return n;if(!n)return e;const t=ln(Object.create(null),e);for(const i in n)t[i]=gn(e[i],n[i]);return t}function Ia(){return{app:null,config:{isNativeTag:qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zu=0;function ec(e,n){return function(i,s=null){fe(i)||(i=ln({},i)),s!=null&&!Re(s)&&(s=null);const r=Ia(),a=new WeakSet,l=[];let u=!1;const g=r.app={_uid:Zu++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Nc,get config(){return r.config},set config(h){},use(h,...v){return a.has(h)||(h&&fe(h.install)?(a.add(h),h.install(g,...v)):fe(h)&&(a.add(h),h(g,...v))),g},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),g},component(h,v){return v?(r.components[h]=v,g):r.components[h]},directive(h,v){return v?(r.directives[h]=v,g):r.directives[h]},mount(h,v,T){if(!u){const A=g._ceVNode||hn(i,s);return A.appContext=r,T===!0?T="svg":T===!1&&(T=void 0),e(A,h,T),u=!0,g._container=h,h.__vue_app__=g,ys(A.component)}},onUnmount(h){l.push(h)},unmount(){u&&(Nn(l,g._instance,16),e(null,g._container),delete g._container.__vue_app__)},provide(h,v){return r.provides[h]=v,g},runWithContext(h){const v=jt;jt=g;try{return h()}finally{jt=v}}};return g}}let jt=null;function nc(e,n){if(yn){let t=yn.provides;const i=yn.parent&&yn.parent.provides;i===t&&(t=yn.provides=Object.create(i)),t[e]=n}}function qi(e,n,t=!1){const i=Ya();if(i||jt){let s=jt?jt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&fe(n)?n.call(i&&i.proxy):n}}const tc=Symbol.for("v-scx"),ic=()=>qi(tc);function Ke(e,n,t){return Oa(e,n,t)}function Oa(e,n,t=Ie){const{immediate:i,deep:s,flush:r,once:a}=t,l=ln({},t),u=n&&i||!n&&r!=="post";let g;if(vi){if(r==="sync"){const A=ic();g=A.__watcherHandles||(A.__watcherHandles=[])}else if(!u){const A=()=>{};return A.stop=Bn,A.resume=Bn,A.pause=Bn,A}}const h=yn;l.call=(A,M,q)=>Nn(A,h,M,q);let v=!1;r==="post"?l.scheduler=A=>{Cn(A,h&&h.suspense)}:r!=="sync"&&(v=!0,l.scheduler=(A,M)=>{M?A():kr(A)}),l.augmentJob=A=>{n&&(A.flags|=4),v&&(A.flags|=2,h&&(A.id=h.uid,A.i=h))};const T=zu(e,n,l);return vi&&(g?g.push(T):u&&T()),T}function sc(e,n,t){const i=this.proxy,s=qe(e)?e.includes(".")?Fa(i,e):()=>i[e]:e.bind(i,i);let r;fe(n)?r=n:(r=n.handler,t=n);const a=Ti(this),l=Oa(s,r.bind(i),t);return a(),l}function Fa(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const rc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${pt(n)}Modifiers`]||e[`${Pt(n)}Modifiers`];function oc(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||Ie;let s=t;const r=n.startsWith("update:"),a=r&&rc(i,n.slice(7));a&&(a.trim&&(s=t.map(h=>qe(h)?h.trim():h)),a.number&&(s=t.map(Zo)));let l,u=i[l=xs(n)]||i[l=xs(pt(n))];!u&&r&&(u=i[l=xs(Pt(n))]),u&&Nn(u,e,6,s);const g=i[l+"Once"];if(g){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Nn(g,e,6,s)}}const ac=new WeakMap;function Na(e,n,t=!1){const i=t?ac:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let a={},l=!1;if(!fe(e)){const u=g=>{const h=Na(g,n,!0);h&&(l=!0,ln(a,h))};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!l?(Re(e)&&i.set(e,null),null):(se(r)?r.forEach(u=>a[u]=null):ln(a,r),Re(e)&&i.set(e,a),a)}function vs(e,n){return!e||!cs(n)?!1:(n=n.slice(2).replace(/Once$/,""),ze(e,n[0].toLowerCase()+n.slice(1))||ze(e,Pt(n))||ze(e,n))}function oo(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:l,emit:u,render:g,renderCache:h,props:v,data:T,setupState:A,ctx:M,inheritAttrs:q}=e,he=ns(e);let F,K;try{if(t.shapeFlag&4){const G=s||i,be=G;F=Wn(g.call(be,G,h,v,A,T,M)),K=l}else{const G=n;F=Wn(G.length>1?G(v,{attrs:l,slots:a,emit:u}):G(v,null)),K=n.props?l:lc(l)}}catch(G){di.length=0,ms(G,e,1),F=hn(bn)}let te=F;if(K&&q!==!1){const G=Object.keys(K),{shapeFlag:be}=te;G.length&&be&7&&(r&&G.some(dr)&&(K=uc(K,r)),te=gt(te,K,!1,!0))}return t.dirs&&(te=gt(te,null,!1,!0),te.dirs=te.dirs?te.dirs.concat(t.dirs):t.dirs),t.transition&&pi(te,t.transition),F=te,ns(he),F}const lc=e=>{let n;for(const t in e)(t==="class"||t==="style"||cs(t))&&((n||(n={}))[t]=e[t]);return n},uc=(e,n)=>{const t={};for(const i in e)(!dr(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function cc(e,n,t){const{props:i,children:s,component:r}=e,{props:a,children:l,patchFlag:u}=n,g=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return i?ao(i,a,g):!!a;if(u&8){const h=n.dynamicProps;for(let v=0;v<h.length;v++){const T=h[v];if(a[T]!==i[T]&&!vs(g,T))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?ao(i,a,g):!0:!!a;return!1}function ao(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!vs(t,r))return!0}return!1}function dc({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const Da={},Ha=()=>Object.create(Da),Wa=e=>Object.getPrototypeOf(e)===Da;function hc(e,n,t,i=!1){const s={},r=Ha();e.propsDefaults=Object.create(null),Ba(e,n,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);t?e.props=i?s:yu(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function fc(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,l=Le(s),[u]=e.propsOptions;let g=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=e.vnode.dynamicProps;for(let v=0;v<h.length;v++){let T=h[v];if(vs(e.emitsOptions,T))continue;const A=n[T];if(u)if(ze(r,T))A!==r[T]&&(r[T]=A,g=!0);else{const M=pt(T);s[M]=sr(u,l,M,A,e,!1)}else A!==r[T]&&(r[T]=A,g=!0)}}}else{Ba(e,n,s,r)&&(g=!0);let h;for(const v in l)(!n||!ze(n,v)&&((h=Pt(v))===v||!ze(n,h)))&&(u?t&&(t[v]!==void 0||t[h]!==void 0)&&(s[v]=sr(u,l,v,void 0,e,!0)):delete s[v]);if(r!==l)for(const v in r)(!n||!ze(n,v))&&(delete r[v],g=!0)}g&&Xn(e.attrs,"set","")}function Ba(e,n,t,i){const[s,r]=e.propsOptions;let a=!1,l;if(n)for(let u in n){if(ri(u))continue;const g=n[u];let h;s&&ze(s,h=pt(u))?!r||!r.includes(h)?t[h]=g:(l||(l={}))[h]=g:vs(e.emitsOptions,u)||(!(u in i)||g!==i[u])&&(i[u]=g,a=!0)}if(r){const u=Le(t),g=l||Ie;for(let h=0;h<r.length;h++){const v=r[h];t[v]=sr(s,u,v,g[v],e,!ze(g,v))}}return a}function sr(e,n,t,i,s,r){const a=e[t];if(a!=null){const l=ze(a,"default");if(l&&i===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&fe(u)){const{propsDefaults:g}=s;if(t in g)i=g[t];else{const h=Ti(s);i=g[t]=u.call(null,n),h()}}else i=u;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!l?i=!1:a[1]&&(i===""||i===Pt(t))&&(i=!0))}return i}const mc=new WeakMap;function Ka(e,n,t=!1){const i=t?mc:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,a={},l=[];let u=!1;if(!fe(e)){const h=v=>{u=!0;const[T,A]=Ka(v,n,!0);ln(a,T),A&&l.push(...A)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!u)return Re(e)&&i.set(e,Bt),Bt;if(se(r))for(let h=0;h<r.length;h++){const v=pt(r[h]);lo(v)&&(a[v]=Ie)}else if(r)for(const h in r){const v=pt(h);if(lo(v)){const T=r[h],A=a[v]=se(T)||fe(T)?{type:T}:ln({},T),M=A.type;let q=!1,he=!0;if(se(M))for(let F=0;F<M.length;++F){const K=M[F],te=fe(K)&&K.name;if(te==="Boolean"){q=!0;break}else te==="String"&&(he=!1)}else q=fe(M)&&M.name==="Boolean";A[0]=q,A[1]=he,(q||ze(A,"default"))&&l.push(v)}}const g=[a,l];return Re(e)&&i.set(e,g),g}function lo(e){return e[0]!=="$"&&!ri(e)}const Sr=e=>e==="_"||e==="_ctx"||e==="$stable",Tr=e=>se(e)?e.map(Wn):[Wn(e)],pc=(e,n,t)=>{if(n._n)return n;const i=Zs((...s)=>Tr(n(...s)),t);return i._c=!1,i},$a=(e,n,t)=>{const i=e._ctx;for(const s in e){if(Sr(s))continue;const r=e[s];if(fe(r))n[s]=pc(s,r,i);else if(r!=null){const a=Tr(r);n[s]=()=>a}}},ja=(e,n)=>{const t=Tr(n);e.slots.default=()=>t},Ga=(e,n,t)=>{for(const i in n)(t||!Sr(i))&&(e[i]=n[i])},gc=(e,n,t)=>{const i=e.slots=Ha();if(e.vnode.shapeFlag&32){const s=n._;s?(Ga(i,n,t),t&&Qo(i,"_",s,!0)):$a(n,i)}else n&&ja(e,n)},vc=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,a=Ie;if(i.shapeFlag&32){const l=n._;l?t&&l===1?r=!1:Ga(s,n,t):(r=!n.$stable,$a(n,s)),a=n}else n&&(ja(e,n),a={default:1});if(r)for(const l in s)!Sr(l)&&a[l]==null&&delete s[l]},Cn=kc;function bc(e){return yc(e)}function yc(e,n){const t=hs();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:l,createComment:u,setText:g,setElementText:h,parentNode:v,nextSibling:T,setScopeId:A=Bn,insertStaticContent:M}=e,q=(c,f,y,k=null,C=null,S=null,I=void 0,R=null,x=!!f.dynamicChildren)=>{if(c===f)return;c&&!Ct(c,f)&&(k=He(c),Ee(c,C,S,!0),c=null),f.patchFlag===-2&&(x=!1,f.dynamicChildren=null);const{type:z,ref:J,shapeFlag:B}=f;switch(z){case bs:he(c,f,y,k);break;case bn:F(c,f,y,k);break;case Ds:c==null&&K(f,y,k,I);break;case en:N(c,f,y,k,C,S,I,R,x);break;default:B&1?be(c,f,y,k,C,S,I,R,x):B&6?ce(c,f,y,k,C,S,I,R,x):(B&64||B&128)&&z.process(c,f,y,k,C,S,I,R,x,kn)}J!=null&&C?li(J,c&&c.ref,S,f||c,!f):J==null&&c&&c.ref!=null&&li(c.ref,null,S,c,!0)},he=(c,f,y,k)=>{if(c==null)i(f.el=l(f.children),y,k);else{const C=f.el=c.el;f.children!==c.children&&g(C,f.children)}},F=(c,f,y,k)=>{c==null?i(f.el=u(f.children||""),y,k):f.el=c.el},K=(c,f,y,k)=>{[c.el,c.anchor]=M(c.children,f,y,k,c.el,c.anchor)},te=({el:c,anchor:f},y,k)=>{let C;for(;c&&c!==f;)C=T(c),i(c,y,k),c=C;i(f,y,k)},G=({el:c,anchor:f})=>{let y;for(;c&&c!==f;)y=T(c),s(c),c=y;s(f)},be=(c,f,y,k,C,S,I,R,x)=>{if(f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),c==null)ee(f,y,k,C,S,I,R,x);else{const z=c.el&&c.el._isVueCE?c.el:null;try{z&&z._beginPatch(),$(c,f,C,S,I,R,x)}finally{z&&z._endPatch()}}},ee=(c,f,y,k,C,S,I,R)=>{let x,z;const{props:J,shapeFlag:B,transition:V,dirs:oe}=c;if(x=c.el=a(c.type,S,J&&J.is,J),B&8?h(x,c.children):B&16&&ne(c.children,x,null,k,C,Ns(c,S),I,R),oe&&yt(c,null,k,"created"),Z(x,c,c.scopeId,I,k),J){for(const ye in J)ye!=="value"&&!ri(ye)&&r(x,ye,null,J[ye],S,k);"value"in J&&r(x,"value",null,J.value,S),(z=J.onVnodeBeforeMount)&&Dn(z,k,c)}oe&&yt(c,null,k,"beforeMount");const ae=wc(C,V);ae&&V.beforeEnter(x),i(x,f,y),((z=J&&J.onVnodeMounted)||ae||oe)&&Cn(()=>{z&&Dn(z,k,c),ae&&V.enter(x),oe&&yt(c,null,k,"mounted")},C)},Z=(c,f,y,k,C)=>{if(y&&A(c,y),k)for(let S=0;S<k.length;S++)A(c,k[S]);if(C){let S=C.subTree;if(f===S||Ua(S.type)&&(S.ssContent===f||S.ssFallback===f)){const I=C.vnode;Z(c,I,I.scopeId,I.slotScopeIds,C.parent)}}},ne=(c,f,y,k,C,S,I,R,x=0)=>{for(let z=x;z<c.length;z++){const J=c[z]=R?ut(c[z]):Wn(c[z]);q(null,J,f,y,k,C,S,I,R)}},$=(c,f,y,k,C,S,I)=>{const R=f.el=c.el;let{patchFlag:x,dynamicChildren:z,dirs:J}=f;x|=c.patchFlag&16;const B=c.props||Ie,V=f.props||Ie;let oe;if(y&&wt(y,!1),(oe=V.onVnodeBeforeUpdate)&&Dn(oe,y,f,c),J&&yt(f,c,y,"beforeUpdate"),y&&wt(y,!0),(B.innerHTML&&V.innerHTML==null||B.textContent&&V.textContent==null)&&h(R,""),z?re(c.dynamicChildren,z,R,y,k,Ns(f,C),S):I||ve(c,f,R,null,y,k,Ns(f,C),S,!1),x>0){if(x&16)U(R,B,V,y,C);else if(x&2&&B.class!==V.class&&r(R,"class",null,V.class,C),x&4&&r(R,"style",B.style,V.style,C),x&8){const ae=f.dynamicProps;for(let ye=0;ye<ae.length;ye++){const Se=ae[ye],b=B[Se],_=V[Se];(_!==b||Se==="value")&&r(R,Se,b,_,C,y)}}x&1&&c.children!==f.children&&h(R,f.children)}else!I&&z==null&&U(R,B,V,y,C);((oe=V.onVnodeUpdated)||J)&&Cn(()=>{oe&&Dn(oe,y,f,c),J&&yt(f,c,y,"updated")},k)},re=(c,f,y,k,C,S,I)=>{for(let R=0;R<f.length;R++){const x=c[R],z=f[R],J=x.el&&(x.type===en||!Ct(x,z)||x.shapeFlag&198)?v(x.el):y;q(x,z,J,null,k,C,S,I,!0)}},U=(c,f,y,k,C)=>{if(f!==y){if(f!==Ie)for(const S in f)!ri(S)&&!(S in y)&&r(c,S,f[S],null,C,k);for(const S in y){if(ri(S))continue;const I=y[S],R=f[S];I!==R&&S!=="value"&&r(c,S,R,I,C,k)}"value"in y&&r(c,"value",f.value,y.value,C)}},N=(c,f,y,k,C,S,I,R,x)=>{const z=f.el=c?c.el:l(""),J=f.anchor=c?c.anchor:l("");let{patchFlag:B,dynamicChildren:V,slotScopeIds:oe}=f;oe&&(R=R?R.concat(oe):oe),c==null?(i(z,y,k),i(J,y,k),ne(f.children||[],y,J,C,S,I,R,x)):B>0&&B&64&&V&&c.dynamicChildren?(re(c.dynamicChildren,V,y,C,S,I,R),(f.key!=null||C&&f===C.subTree)&&Va(c,f,!0)):ve(c,f,y,J,C,S,I,R,x)},ce=(c,f,y,k,C,S,I,R,x)=>{f.slotScopeIds=R,c==null?f.shapeFlag&512?C.ctx.activate(f,y,k,I,x):_e(f,y,k,C,S,I,x):$e(c,f,x)},_e=(c,f,y,k,C,S,I)=>{const R=c.component=xc(c,k,C);if(ps(c)&&(R.ctx.renderer=kn),Pc(R,!1,I),R.asyncDep){if(C&&C.registerDep(R,D,I),!c.el){const x=R.subTree=hn(bn);F(null,x,f,y),c.placeholder=x.el}}else D(R,c,f,y,C,S,I)},$e=(c,f,y)=>{const k=f.component=c.component;if(cc(c,f,y))if(k.asyncDep&&!k.asyncResolved){ge(k,f,y);return}else k.next=f,k.update();else f.el=c.el,k.vnode=f},D=(c,f,y,k,C,S,I)=>{const R=()=>{if(c.isMounted){let{next:B,bu:V,u:oe,parent:ae,vnode:ye}=c;{const j=qa(c);if(j){B&&(B.el=ye.el,ge(c,B,I)),j.asyncDep.then(()=>{c.isUnmounted||R()});return}}let Se=B,b;wt(c,!1),B?(B.el=ye.el,ge(c,B,I)):B=ye,V&&Vi(V),(b=B.props&&B.props.onVnodeBeforeUpdate)&&Dn(b,ae,B,ye),wt(c,!0);const _=oo(c),E=c.subTree;c.subTree=_,q(E,_,v(E.el),He(E),c,C,S),B.el=_.el,Se===null&&dc(c,_.el),oe&&Cn(oe,C),(b=B.props&&B.props.onVnodeUpdated)&&Cn(()=>Dn(b,ae,B,ye),C)}else{let B;const{el:V,props:oe}=f,{bm:ae,m:ye,parent:Se,root:b,type:_}=c,E=ui(f);wt(c,!1),ae&&Vi(ae),!E&&(B=oe&&oe.onVnodeBeforeMount)&&Dn(B,Se,f),wt(c,!0);{b.ce&&b.ce._def.shadowRoot!==!1&&b.ce._injectChildStyle(_);const j=c.subTree=oo(c);q(null,j,y,k,c,C,S),f.el=j.el}if(ye&&Cn(ye,C),!E&&(B=oe&&oe.onVnodeMounted)){const j=f;Cn(()=>Dn(B,Se,j),C)}(f.shapeFlag&256||Se&&ui(Se.vnode)&&Se.vnode.shapeFlag&256)&&c.a&&Cn(c.a,C),c.isMounted=!0,f=y=k=null}};c.scope.on();const x=c.effect=new ia(R);c.scope.off();const z=c.update=x.run.bind(x),J=c.job=x.runIfDirty.bind(x);J.i=c,J.id=c.uid,x.scheduler=()=>kr(J),wt(c,!0),z()},ge=(c,f,y)=>{f.component=c;const k=c.vnode.props;c.vnode=f,c.next=null,fc(c,f.props,k,y),vc(c,f.children,y),Qn(),Zr(c),Zn()},ve=(c,f,y,k,C,S,I,R,x=!1)=>{const z=c&&c.children,J=c?c.shapeFlag:0,B=f.children,{patchFlag:V,shapeFlag:oe}=f;if(V>0){if(V&128){me(z,B,y,k,C,S,I,R,x);return}else if(V&256){je(z,B,y,k,C,S,I,R,x);return}}oe&8?(J&16&&Ye(z,C,S),B!==z&&h(y,B)):J&16?oe&16?me(z,B,y,k,C,S,I,R,x):Ye(z,C,S,!0):(J&8&&h(y,""),oe&16&&ne(B,y,k,C,S,I,R,x))},je=(c,f,y,k,C,S,I,R,x)=>{c=c||Bt,f=f||Bt;const z=c.length,J=f.length,B=Math.min(z,J);let V;for(V=0;V<B;V++){const oe=f[V]=x?ut(f[V]):Wn(f[V]);q(c[V],oe,y,null,C,S,I,R,x)}z>J?Ye(c,C,S,!0,!1,B):ne(f,y,k,C,S,I,R,x,B)},me=(c,f,y,k,C,S,I,R,x)=>{let z=0;const J=f.length;let B=c.length-1,V=J-1;for(;z<=B&&z<=V;){const oe=c[z],ae=f[z]=x?ut(f[z]):Wn(f[z]);if(Ct(oe,ae))q(oe,ae,y,null,C,S,I,R,x);else break;z++}for(;z<=B&&z<=V;){const oe=c[B],ae=f[V]=x?ut(f[V]):Wn(f[V]);if(Ct(oe,ae))q(oe,ae,y,null,C,S,I,R,x);else break;B--,V--}if(z>B){if(z<=V){const oe=V+1,ae=oe<J?f[oe].el:k;for(;z<=V;)q(null,f[z]=x?ut(f[z]):Wn(f[z]),y,ae,C,S,I,R,x),z++}}else if(z>V)for(;z<=B;)Ee(c[z],C,S,!0),z++;else{const oe=z,ae=z,ye=new Map;for(z=ae;z<=V;z++){const le=f[z]=x?ut(f[z]):Wn(f[z]);le.key!=null&&ye.set(le.key,z)}let Se,b=0;const _=V-ae+1;let E=!1,j=0;const de=new Array(_);for(z=0;z<_;z++)de[z]=0;for(z=oe;z<=B;z++){const le=c[z];if(b>=_){Ee(le,C,S,!0);continue}let Oe;if(le.key!=null)Oe=ye.get(le.key);else for(Se=ae;Se<=V;Se++)if(de[Se-ae]===0&&Ct(le,f[Se])){Oe=Se;break}Oe===void 0?Ee(le,C,S,!0):(de[Oe-ae]=z+1,Oe>=j?j=Oe:E=!0,q(le,f[Oe],y,null,C,S,I,R,x),b++)}const Te=E?_c(de):Bt;for(Se=Te.length-1,z=_-1;z>=0;z--){const le=ae+z,Oe=f[le],tt=f[le+1],vt=le+1<J?tt.el||tt.placeholder:k;de[z]===0?q(null,Oe,y,vt,C,S,I,R,x):E&&(Se<0||z!==Te[Se]?Me(Oe,y,vt,2):Se--)}}},Me=(c,f,y,k,C=null)=>{const{el:S,type:I,transition:R,children:x,shapeFlag:z}=c;if(z&6){Me(c.component.subTree,f,y,k);return}if(z&128){c.suspense.move(f,y,k);return}if(z&64){I.move(c,f,y,kn);return}if(I===en){i(S,f,y);for(let B=0;B<x.length;B++)Me(x[B],f,y,k);i(c.anchor,f,y);return}if(I===Ds){te(c,f,y);return}if(k!==2&&z&1&&R)if(k===0)R.beforeEnter(S),i(S,f,y),Cn(()=>R.enter(S),C);else{const{leave:B,delayLeave:V,afterLeave:oe}=R,ae=()=>{c.ctx.isUnmounted?s(S):i(S,f,y)},ye=()=>{S._isLeaving&&S[Jn](!0),B(S,()=>{ae(),oe&&oe()})};V?V(S,ae,ye):ye()}else i(S,f,y)},Ee=(c,f,y,k=!1,C=!1)=>{const{type:S,props:I,ref:R,children:x,dynamicChildren:z,shapeFlag:J,patchFlag:B,dirs:V,cacheIndex:oe}=c;if(B===-2&&(C=!1),R!=null&&(Qn(),li(R,null,y,c,!0),Zn()),oe!=null&&(f.renderCache[oe]=void 0),J&256){f.ctx.deactivate(c);return}const ae=J&1&&V,ye=!ui(c);let Se;if(ye&&(Se=I&&I.onVnodeBeforeUnmount)&&Dn(Se,f,c),J&6)Ge(c.component,y,k);else{if(J&128){c.suspense.unmount(y,k);return}ae&&yt(c,null,f,"beforeUnmount"),J&64?c.type.remove(c,f,y,kn,k):z&&!z.hasOnce&&(S!==en||B>0&&B&64)?Ye(z,f,y,!1,!0):(S===en&&B&384||!C&&J&16)&&Ye(x,f,y),k&&nn(c)}(ye&&(Se=I&&I.onVnodeUnmounted)||ae)&&Cn(()=>{Se&&Dn(Se,f,c),ae&&yt(c,null,f,"unmounted")},y)},nn=c=>{const{type:f,el:y,anchor:k,transition:C}=c;if(f===en){ke(y,k);return}if(f===Ds){G(c);return}const S=()=>{s(y),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(c.shapeFlag&1&&C&&!C.persisted){const{leave:I,delayLeave:R}=C,x=()=>I(y,S);R?R(c.el,S,x):x()}else S()},ke=(c,f)=>{let y;for(;c!==f;)y=T(c),s(c),c=y;s(f)},Ge=(c,f,y)=>{const{bum:k,scope:C,job:S,subTree:I,um:R,m:x,a:z}=c;uo(x),uo(z),k&&Vi(k),C.stop(),S&&(S.flags|=8,Ee(I,c,f,y)),R&&Cn(R,f),Cn(()=>{c.isUnmounted=!0},f)},Ye=(c,f,y,k=!1,C=!1,S=0)=>{for(let I=S;I<c.length;I++)Ee(c[I],f,y,k,C)},He=c=>{if(c.shapeFlag&6)return He(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=T(c.anchor||c.el),y=f&&f[Au];return y?T(y):f};let Qe=!1;const We=(c,f,y)=>{c==null?f._vnode&&Ee(f._vnode,null,null,!0):q(f._vnode||null,c,f,null,null,null,y),f._vnode=c,Qe||(Qe=!0,Zr(),wa(),Qe=!1)},kn={p:q,um:Ee,m:Me,r:nn,mt:_e,mc:ne,pc:ve,pbc:re,n:He,o:e};return{render:We,hydrate:void 0,createApp:ec(We)}}function Ns({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function wt({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function wc(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Va(e,n,t=!1){const i=e.children,s=n.children;if(se(i)&&se(s))for(let r=0;r<i.length;r++){const a=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=ut(s[r]),l.el=a.el),!t&&l.patchFlag!==-2&&Va(a,l)),l.type===bs&&l.patchFlag!==-1&&(l.el=a.el),l.type===bn&&!l.el&&(l.el=a.el)}}function _c(e){const n=e.slice(),t=[0];let i,s,r,a,l;const u=e.length;for(i=0;i<u;i++){const g=e[i];if(g!==0){if(s=t[t.length-1],e[s]<g){n[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)l=r+a>>1,e[t[l]]<g?r=l+1:a=l;g<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=n[a];return t}function qa(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:qa(n)}function uo(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Ua=e=>e.__isSuspense;function kc(e,n){n&&n.pendingBranch?se(e)?n.effects.push(...e):n.effects.push(e):Pu(e)}const en=Symbol.for("v-fgt"),bs=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Ds=Symbol.for("v-stc"),di=[];let Ln=null;function Q(e=!1){di.push(Ln=e?null:[])}function Sc(){di.pop(),Ln=di[di.length-1]||null}let gi=1;function rs(e,n=!1){gi+=e,e<0&&Ln&&n&&(Ln.hasOnce=!0)}function Ja(e){return e.dynamicChildren=gi>0?Ln||Bt:null,Sc(),gi>0&&Ln&&Ln.push(e),e}function ie(e,n,t,i,s,r){return Ja(m(e,n,t,i,s,r,!0))}function Ui(e,n,t,i,s){return Ja(hn(e,n,t,i,s,!0))}function os(e){return e?e.__v_isVNode===!0:!1}function Ct(e,n){return e.type===n.type&&e.key===n.key}const Xa=({key:e})=>e??null,Ji=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?qe(e)||an(e)||fe(e)?{i:Mn,r:e,k:n,f:!!t}:e:null);function m(e,n=null,t=null,i=0,s=null,r=e===en?0:1,a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Xa(n),ref:n&&Ji(n),scopeId:ka,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mn};return l?(Cr(u,t),r&128&&e.normalize(u)):t&&(u.shapeFlag|=qe(t)?8:16),gi>0&&!a&&Ln&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&Ln.push(u),u}const hn=Tc;function Tc(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===Vu)&&(e=bn),os(e)){const l=gt(e,n,!0);return t&&Cr(l,t),gi>0&&!r&&Ln&&(l.shapeFlag&6?Ln[Ln.indexOf(e)]=l:Ln.push(l)),l.patchFlag=-2,l}if(Oc(e)&&(e=e.__vccOpts),n){n=Cc(n);let{class:l,style:u}=n;l&&!qe(l)&&(n.class=Ve(l)),Re(u)&&(_r(u)&&!se(u)&&(u=ln({},u)),n.style=Lt(u))}const a=qe(e)?1:Ua(e)?128:Sa(e)?64:Re(e)?4:fe(e)?2:0;return m(e,n,t,i,s,a,r,!0)}function Cc(e){return e?_r(e)||Wa(e)?ln({},e):e:null}function gt(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:l,transition:u}=e,g=n?Lc(s||{},n):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:g,key:g&&Xa(g),ref:n&&n.ref?t&&r?se(r)?r.concat(Ji(n)):[r,Ji(n)]:Ji(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==en?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&gt(e.ssContent),ssFallback:e.ssFallback&&gt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&i&&pi(h,u.clone(h)),h}function Ec(e=" ",n=0){return hn(bs,null,e,n)}function Xe(e="",n=!1){return n?(Q(),Ui(bn,null,e)):hn(bn,null,e)}function Wn(e){return e==null||typeof e=="boolean"?hn(bn):se(e)?hn(en,null,e.slice()):os(e)?ut(e):hn(bs,null,String(e))}function ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:gt(e)}function Cr(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(se(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),Cr(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Wa(n)?n._ctx=Mn:s===3&&Mn&&(Mn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else fe(n)?(n={default:n,_ctx:Mn},t=32):(n=String(n),i&64?(t=16,n=[Ec(n)]):t=8);e.children=n,e.shapeFlag|=t}function Lc(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=Ve([n.class,i.class]));else if(s==="style")n.style=Lt([n.style,i.style]);else if(cs(s)){const r=n[s],a=i[s];a&&r!==a&&!(se(r)&&r.includes(a))&&(n[s]=r?[].concat(r,a):a)}else s!==""&&(n[s]=i[s])}return n}function Dn(e,n,t,i=null){Nn(e,n,7,[t,i])}const zc=Ia();let Mc=0;function xc(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||zc,r={uid:Mc++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ka(i,s),emitsOptions:Na(i,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:i.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=oc.bind(null,r),e.ce&&e.ce(r),r}let yn=null;const Ya=()=>yn||Mn;let as,rr;{const e=hs(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};as=n("__VUE_INSTANCE_SETTERS__",t=>yn=t),rr=n("__VUE_SSR_SETTERS__",t=>vi=t)}const Ti=e=>{const n=yn;return as(e),e.scope.on(),()=>{e.scope.off(),as(n)}},co=()=>{yn&&yn.scope.off(),as(null)};function Qa(e){return e.vnode.shapeFlag&4}let vi=!1;function Pc(e,n=!1,t=!1){n&&rr(n);const{props:i,children:s}=e.vnode,r=Qa(e);hc(e,i,r,n),gc(e,s,t||n);const a=r?Ac(e,n):void 0;return n&&rr(!1),a}function Ac(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qu);const{setup:i}=t;if(i){Qn();const s=e.setupContext=i.length>1?Ic(e):null,r=Ti(e),a=ki(i,e,0,[e.props,s]),l=Uo(a);if(Zn(),r(),(l||e.sp)&&!ui(e)&&Ma(e),l){if(a.then(co,co),n)return a.then(u=>{ho(e,u)}).catch(u=>{ms(u,e,0)});e.asyncDep=a}else ho(e,a)}else Za(e)}function ho(e,n,t){fe(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Re(n)&&(e.setupState=va(n)),Za(e)}function Za(e,n,t){const i=e.type;e.render||(e.render=i.render||Bn);{const s=Ti(e);Qn();try{Uu(e)}finally{Zn(),s()}}}const Rc={get(e,n){return dn(e,"get",""),e[n]}};function Ic(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Rc),slots:e.slots,emit:e.emit,expose:n}}function ys(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(va(wu(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ci)return ci[t](e)},has(n,t){return t in n||t in ci}})):e.proxy}function Oc(e){return fe(e)&&"__vccOpts"in e}const W=(e,n)=>Eu(e,n,vi);function Fc(e,n,t){try{rs(-1);const i=arguments.length;return i===2?Re(n)&&!se(n)?os(n)?hn(e,null,[n]):hn(e,n):hn(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&os(t)&&(t=[t]),hn(e,n,t))}finally{rs(1)}}const Nc="3.5.25";let or;const fo=typeof window<"u"&&window.trustedTypes;if(fo)try{or=fo.createPolicy("vue",{createHTML:e=>e})}catch{}const el=or?e=>or.createHTML(e):e=>e,Dc="http://www.w3.org/2000/svg",Hc="http://www.w3.org/1998/Math/MathML",Un=typeof document<"u"?document:null,mo=Un&&Un.createElement("template"),Wc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?Un.createElementNS(Dc,e):n==="mathml"?Un.createElementNS(Hc,e):t?Un.createElement(e,{is:t}):Un.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Un.createTextNode(e),createComment:e=>Un.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Un.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const a=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{mo.innerHTML=el(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=mo.content;if(i==="svg"||i==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}n.insertBefore(l,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},ot="transition",ti="animation",bi=Symbol("_vtc"),nl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Bc=ln({},Ta,nl),Kc=e=>(e.displayName="Transition",e.props=Bc,e),po=Kc((e,{slots:n})=>Fc(Ou,$c(e),n)),_t=(e,n=[])=>{se(e)?e.forEach(t=>t(...n)):e&&e(...n)},go=e=>e?se(e)?e.some(n=>n.length>1):e.length>1:!1;function $c(e){const n={};for(const N in e)N in nl||(n[N]=e[N]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:u=r,appearActiveClass:g=a,appearToClass:h=l,leaveFromClass:v=`${t}-leave-from`,leaveActiveClass:T=`${t}-leave-active`,leaveToClass:A=`${t}-leave-to`}=e,M=jc(s),q=M&&M[0],he=M&&M[1],{onBeforeEnter:F,onEnter:K,onEnterCancelled:te,onLeave:G,onLeaveCancelled:be,onBeforeAppear:ee=F,onAppear:Z=K,onAppearCancelled:ne=te}=n,$=(N,ce,_e,$e)=>{N._enterCancelled=$e,kt(N,ce?h:l),kt(N,ce?g:a),_e&&_e()},re=(N,ce)=>{N._isLeaving=!1,kt(N,v),kt(N,A),kt(N,T),ce&&ce()},U=N=>(ce,_e)=>{const $e=N?Z:K,D=()=>$(ce,N,_e);_t($e,[ce,D]),vo(()=>{kt(ce,N?u:r),qn(ce,N?h:l),go($e)||bo(ce,i,q,D)})};return ln(n,{onBeforeEnter(N){_t(F,[N]),qn(N,r),qn(N,a)},onBeforeAppear(N){_t(ee,[N]),qn(N,u),qn(N,g)},onEnter:U(!1),onAppear:U(!0),onLeave(N,ce){N._isLeaving=!0;const _e=()=>re(N,ce);qn(N,v),N._enterCancelled?(qn(N,T),_o(N)):(_o(N),qn(N,T)),vo(()=>{N._isLeaving&&(kt(N,v),qn(N,A),go(G)||bo(N,i,he,_e))}),_t(G,[N,_e])},onEnterCancelled(N){$(N,!1,void 0,!0),_t(te,[N])},onAppearCancelled(N){$(N,!0,void 0,!0),_t(ne,[N])},onLeaveCancelled(N){re(N),_t(be,[N])}})}function jc(e){if(e==null)return null;if(Re(e))return[Hs(e.enter),Hs(e.leave)];{const n=Hs(e);return[n,n]}}function Hs(e){return Gl(e)}function qn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[bi]||(e[bi]=new Set)).add(n)}function kt(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[bi];t&&(t.delete(n),t.size||(e[bi]=void 0))}function vo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Gc=0;function bo(e,n,t,i){const s=e._endId=++Gc,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:l,propCount:u}=Vc(e,n);if(!a)return i();const g=a+"end";let h=0;const v=()=>{e.removeEventListener(g,T),r()},T=A=>{A.target===e&&++h>=u&&v()};setTimeout(()=>{h<u&&v()},l+1),e.addEventListener(g,T)}function Vc(e,n){const t=window.getComputedStyle(e),i=M=>(t[M]||"").split(", "),s=i(`${ot}Delay`),r=i(`${ot}Duration`),a=yo(s,r),l=i(`${ti}Delay`),u=i(`${ti}Duration`),g=yo(l,u);let h=null,v=0,T=0;n===ot?a>0&&(h=ot,v=a,T=r.length):n===ti?g>0&&(h=ti,v=g,T=u.length):(v=Math.max(a,g),h=v>0?a>g?ot:ti:null,T=h?h===ot?r.length:u.length:0);const A=h===ot&&/\b(?:transform|all)(?:,|$)/.test(i(`${ot}Property`).toString());return{type:h,timeout:v,propCount:T,hasTransform:A}}function yo(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>wo(t)+wo(e[i])))}function wo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function _o(e){return(e?e.ownerDocument:document).body.offsetHeight}function qc(e,n,t){const i=e[bi];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const ko=Symbol("_vod"),Uc=Symbol("_vsh"),Jc=Symbol(""),Xc=/(?:^|;)\s*display\s*:/;function Yc(e,n,t){const i=e.style,s=qe(t);let r=!1;if(t&&!s){if(n)if(qe(n))for(const a of n.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Xi(i,l,"")}else for(const a in n)t[a]==null&&Xi(i,a,"");for(const a in t)a==="display"&&(r=!0),Xi(i,a,t[a])}else if(s){if(n!==t){const a=i[Jc];a&&(t+=";"+a),i.cssText=t,r=Xc.test(t)}}else n&&e.removeAttribute("style");ko in e&&(e[ko]=r?i.display:"",e[Uc]&&(i.display="none"))}const So=/\s*!important$/;function Xi(e,n,t){if(se(t))t.forEach(i=>Xi(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=Qc(e,n);So.test(t)?e.setProperty(Pt(i),t.replace(So,""),"important"):e[i]=t}}const To=["Webkit","Moz","ms"],Ws={};function Qc(e,n){const t=Ws[n];if(t)return t;let i=pt(n);if(i!=="filter"&&i in e)return Ws[n]=i;i=Yo(i);for(let s=0;s<To.length;s++){const r=To[s]+i;if(r in e)return Ws[n]=r}return n}const Co="http://www.w3.org/1999/xlink";function Eo(e,n,t,i,s,r=Yl(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Co,n.slice(6,n.length)):e.setAttributeNS(Co,n,t):t==null||r&&!ea(t)?e.removeAttribute(n):e.setAttribute(n,r?"":Kn(t)?String(t):t)}function Lo(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?el(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,u=t==null?e.type==="checkbox"?"on":"":String(t);(l!==u||!("_value"in e))&&(e.value=u),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=ea(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(s||n)}function Er(e,n,t,i){e.addEventListener(n,t,i)}function Zc(e,n,t,i){e.removeEventListener(n,t,i)}const zo=Symbol("_vei");function ed(e,n,t,i,s=null){const r=e[zo]||(e[zo]={}),a=r[n];if(i&&a)a.value=i;else{const[l,u]=nd(n);if(i){const g=r[n]=sd(i,s);Er(e,l,g,u)}else a&&(Zc(e,l,a,u),r[n]=void 0)}}const Mo=/(?:Once|Passive|Capture)$/;function nd(e){let n;if(Mo.test(e)){n={};let i;for(;i=e.match(Mo);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),n]}let Bs=0;const td=Promise.resolve(),id=()=>Bs||(td.then(()=>Bs=0),Bs=Date.now());function sd(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Nn(rd(i,t.value),n,5,[i])};return t.value=e,t.attached=id(),t}function rd(e,n){if(se(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,od=(e,n,t,i,s,r)=>{const a=s==="svg";n==="class"?qc(e,i,a):n==="style"?Yc(e,t,i):cs(n)?dr(n)||ed(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ad(e,n,i,a))?(Lo(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Eo(e,n,i,a,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!qe(i))?Lo(e,pt(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),Eo(e,n,i,a))};function ad(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&xo(n)&&fe(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xo(n)&&qe(t)?!1:n in e}const ls=e=>{const n=e.props["onUpdate:modelValue"]||!1;return se(n)?t=>Vi(n,t):n},Gt=Symbol("_assign"),Lr={deep:!0,created(e,n,t){e[Gt]=ls(t),Er(e,"change",()=>{const i=e._modelValue,s=yi(e),r=e.checked,a=e[Gt];if(se(i)){const l=mr(i,s),u=l!==-1;if(r&&!u)a(i.concat(s));else if(!r&&u){const g=[...i];g.splice(l,1),a(g)}}else if(qt(i)){const l=new Set(i);r?l.add(s):l.delete(s),a(l)}else a(tl(e,r))})},mounted:Po,beforeUpdate(e,n,t){e[Gt]=ls(t),Po(e,n,t)}};function Po(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(se(n))s=mr(n,i.props.value)>-1;else if(qt(n))s=n.has(i.props.value);else{if(n===t)return;s=_i(n,tl(e,!0))}e.checked!==s&&(e.checked=s)}const ld={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=qt(n);Er(e,"change",()=>{const r=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>t?Zo(yi(a)):yi(a));e[Gt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,cn(()=>{e._assigning=!1})}),e[Gt]=ls(i)},mounted(e,{value:n}){Ao(e,n)},beforeUpdate(e,n,t){e[Gt]=ls(t)},updated(e,{value:n}){e._assigning||Ao(e,n)}};function Ao(e,n){const t=e.multiple,i=se(n);if(!(t&&!i&&!qt(n))){for(let s=0,r=e.options.length;s<r;s++){const a=e.options[s],l=yi(a);if(t)if(i){const u=typeof l;u==="string"||u==="number"?a.selected=n.some(g=>String(g)===String(l)):a.selected=mr(n,l)>-1}else a.selected=n.has(l);else if(_i(yi(a),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function yi(e){return"_value"in e?e._value:e.value}function tl(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const ud=["ctrl","shift","alt","meta"],cd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>ud.some(t=>e[`${t}Key`]&&!n.includes(t))},dd=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<n.length;a++){const l=cd[n[a]];if(l&&l(s,n))return}return e(s,...r)}))},hd=ln({patchProp:od},Wc);let Ro;function fd(){return Ro||(Ro=bc(hd))}const md=((...e)=>{const n=fd().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=gd(i);if(!s)return;const r=n._component;!fe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,pd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},n});function pd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function gd(e){return qe(e)?document.querySelector(e):e}const vd="/favicon.png",bd="/images/zoom-out.png",yd="/images/zoom-in.png",wd="/images/share-icon.png",_d="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",Pn=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Jean-Philippe Rameau",birth:1683,death:1764},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Gioachino Rossini",birth:1792,death:1868},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Richard Strauss",birth:1864,death:1949},{name:"Jean Sibelius",birth:1865,death:1957},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Igor Stravinsky",birth:1882,death:1971},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Carl Orff",birth:1895,death:1982},{name:"George Gershwin",birth:1898,death:1937},{name:"Dmitri Shostakovich",birth:1906,death:1975}],kd={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/strawinski.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Richard Strauss":"comp/rstrauss.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","George Gershwin":"comp/gershwin.jpg","Carl Orff":"comp/orff.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function il(e){const n=kd[e];return n?n.startsWith("/")?n:`/${n}`:null}function Sd(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}const En=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let ar=En.reduce((e,n)=>(e[n.id]=n.label,e),{});const Io=Math.min(...Pn.map(e=>e.birth)),Td=Math.max(...Pn.map(e=>e.birth));let lr=[...Pn],ct=null,dt=null;const Cd={r:255,g:255,b:255},Ed={r:37,g:99,b:235};si("#f3f4f6"),No(1750),si("#e6eef8"),No(1820),si("#e8f4ff"),si("#eef2f7");const us=1677.5,Yi=1980,sl=Yi-us,Ld=6,zd=2,Md=0,Qi={barHeight:50,widthScale:1,fontScale:1},Dt={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let ht={...Qi};function Ks(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function Oo(e={}){ht={barHeight:Ks(e.barHeight??ht.barHeight??Qi.barHeight,Dt.barHeight.min,Dt.barHeight.max),widthScale:Ks(e.widthScale??ht.widthScale??Qi.widthScale,Dt.widthScale.min,Dt.widthScale.max),fontScale:Ks(e.fontScale??ht.fontScale??Qi.fontScale,Dt.fontScale.min,Dt.fontScale.max)}}function xd(){return Ld*ht.widthScale}function Wi(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=sl*xd()+Md,i=(n.clientWidth||window.innerWidth)*zd*ht.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function Et(e){return(e-us)/sl*100}function rl(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function si(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function $s({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function Fo(e,n,t){const i=rl(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function No(e){const n=Td-Io;return n<=0?0:rl((e-Io)/n)}const Pd={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function zr(e){return Pd[e]||"#f3f4f6"}function Ad(e){return e?ar[e]||En.find(n=>n.id===e)?.label||e:""}function Do(e={}){!e||typeof e!="object"||(ar={...ar,...e})}function Rd(e){const n=En.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function Id(e,n){const t=Number(e),i=Number(n),s=Rd(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let a=null,l=0;return En.forEach(u=>{const g=Math.max(0,Math.min(i,u.to)-Math.max(t,u.from));g>l&&(l=g,a=u.id)}),a&&l>r/2?a:s}function Od(e){const n=zr(e),t=si(n),i=Fo(t,Cd,.12),s=Fo(t,Ed,.04);return`linear-gradient(145deg, ${$s(i)} 0%, ${$s(t)} 58%, ${$s(s)} 100%)`}function Ho(e){Array.isArray(e)?lr=[...e]:lr=[...Pn]}function Mr(){const e=document.getElementById("gantt"),n=document.getElementById("axis");if(!e)return;const t=s=>Number.isInteger(ct)&&s===ct,i=s=>Number.isInteger(dt)&&s===dt;e.querySelectorAll(".bar").forEach(s=>{const r=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",t(r)),s.classList.toggle("bar--hovered",i(r))}),e.querySelectorAll(".bar-connector").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),a=t(r),l=i(r);s.classList.toggle("bar-connector--selected",a),s.classList.toggle("bar-connector--hover",l)}),n&&n.querySelectorAll(".life-label").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),a=t(r),l=i(r);s.classList.toggle("life-label--active",a||l),s.classList.toggle("life-label--hover",l)})}function ol(e){Number.isInteger(e)?ct=e:ct=null,Mr()}function Tt(e){Number.isInteger(e)?dt=e:dt=null,Mr()}function Wo(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(us/10)*10,t=Math.ceil(Yi/10)*10;En.forEach(i=>{const s=Math.max(i.from,us),r=Math.min(i.to,Yi);if(r<=s)return;const a=document.createElement("div");a.className="era-band",a.style.left=Et(s)+"%",a.style.width=Et(r)-Et(s)+"%",a.style.backgroundImage="none",a.style.backgroundColor=zr(i.id),a.textContent=Ad(i.id)||i.label,i.id==="baroque"&&(a.style.justifyContent="flex-end",a.style.paddingLeft="6px",a.style.paddingRight="26px",a.style.textAlign="right"),r===Yi&&(a.style.borderRight="none"),e.appendChild(a)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=Et(i)+"%",e.appendChild(s);const a=document.createElement("div");a.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),a.style.left=Et(i)+"%",a.textContent=i,e.appendChild(a)}}function Bi(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="",n&&n.querySelectorAll(".life-label").forEach(F=>F.remove());const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=document.createDocumentFragment(),a=lr||[],l=e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth,u=6,g=u/l*100,h=[...a].sort((F,K)=>F.birth-K.birth),v=h.length,T=h.map((F,K)=>({composer:F,laneIndex:K}));Number.isInteger(ct)&&(ct<0||ct>=v)&&(ct=null),Number.isInteger(dt)&&(dt<0||dt>=v)&&(dt=null);const A=2,M=ht.barHeight,q=M+A,he=v*M+Math.max(0,v-1)*A;e.style.height=he+"px",v&&(T.forEach(({composer:F,laneIndex:K})=>{const te=F.displayName||F.name,G=Et(F.birth),be=Et(F.death),ee=document.createElement("div");ee.className="bar",ee.setAttribute("data-lane-index",K),ee.setAttribute("data-name",F.name);const Z=Id(F.birth,F.death);ee.style.backgroundImage=Od(Z),ee.style.backgroundColor=zr(Z);const ne=G,$=be-G,re=be-g,N=K*q+M*.5+i,ce=(me,Me)=>{const Ee=document.createElement("div");Ee.className="bar-connector",Ee.setAttribute("data-lane-index",K),Ee.setAttribute("data-side",Me),Ee.style.left=me+"%",Ee.style.top=-i+"px",Ee.style.height=N+"px",s.appendChild(Ee)};if(ce(ne,"start"),ce(re,"end"),n){const me=document.createElement("div");me.className="life-label",me.setAttribute("data-lane-index",K),me.setAttribute("data-side","start"),me.style.left=ne+"%",me.textContent=F.birth,r.appendChild(me);const Me=document.createElement("div");Me.className="life-label",Me.setAttribute("data-lane-index",K),Me.setAttribute("data-side","end"),Me.style.left=re+"%",Me.textContent=F.death,r.appendChild(Me)}ee.style.left=ne+"%",ee.style.width="calc("+$+"% - "+u+"px)",ee.style.top=K*q+"px",ee.style.height=M+"px",ee.style.lineHeight="1.15",ee.style.fontSize=M*.28*ht.fontScale+"px";const _e=il(F.name);let $e=0;if(_e){const me=document.createElement("img");me.className="bar-avatar",$e=Math.max(10,Math.round(M*1.1)),me.style.width=$e+"px",me.style.height=$e+"px",me.src=_e,me.alt=te||F.name,ee.appendChild(me)}const D=document.createElement("div");D.className="bar-text";const ge=document.createElement("span");ge.className="bar-label",ge.textContent=te,D.appendChild(ge);const ve=document.createElement("span");ve.className="bar-dates",ve.textContent=`${F.birth} – ${F.death}`,D.appendChild(ve),ee.appendChild(D),e.appendChild(ee);const je=()=>{ge.scrollWidth>ge.clientWidth&&(ge.textContent=Sd(te))};ge.clientWidth>0?je():typeof window<"u"&&window.requestAnimationFrame(je),ee.addEventListener("click",me=>{me.stopPropagation(),ol(K),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:F,laneIndex:K}}))}),ee.addEventListener("mouseenter",()=>Tt(K)),ee.addEventListener("mouseleave",()=>Tt(null)),ee.addEventListener("touchstart",me=>{if(!me.touches||me.touches.length!==1)return;const Me=me.touches[0];ee.dataset.touchStartX=String(Me.clientX),ee.dataset.touchStartY=String(Me.clientY),Tt(K)},{passive:!0}),ee.addEventListener("touchmove",me=>{if(!me.touches||me.touches.length!==1)return;const Me=Number(ee.dataset.touchStartX||"0"),Ee=Number(ee.dataset.touchStartY||"0"),nn=me.touches[0],ke=Math.abs(nn.clientX-Me),Ge=Math.abs(nn.clientY-Ee);(ke>6||Ge>6)&&Tt(null)},{passive:!0}),ee.addEventListener("touchend",()=>{Tt(null)},{passive:!0}),ee.addEventListener("touchcancel",()=>{Tt(null)},{passive:!0})}),e.appendChild(s),n&&n.appendChild(r),Mr())}function Fd(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4;let s=0,r=0,a=0,l=0,u=0,g=0,h=null;const v=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},T=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true",e.dispatchEvent(new CustomEvent("timeline-pan-start")))},A=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",v())};function M(){if(h=null,!n||!t)return;const Z=u-s,ne=g-r;e.scrollLeft=a-Z,e.scrollTop=l-ne}const q=Z=>{Z.button===0&&(n=!0,t=!1,e.classList.remove("panning"),s=Z.clientX,r=Z.clientY,u=Z.clientX,g=Z.clientY,a=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),Z.preventDefault())},he=Z=>{if(n){if(u=Z.clientX,g=Z.clientY,!t){const ne=Math.abs(u-s),$=Math.abs(g-r);if(ne>i||$>i)T();else return}h===null&&(h=window.requestAnimationFrame(M)),Z.preventDefault()}},F=()=>{n&&(n=!1,A(),h!==null&&(cancelAnimationFrame(h),h=null))};e.addEventListener("mousedown",q),window.addEventListener("mousemove",he),window.addEventListener("mouseup",F);let K=null,te=!1;const G=Z=>{if(K!==null||Z.touches.length!==1)return;const ne=Z.touches[0];K=ne.identifier,te=!1,s=ne.clientX,r=ne.clientY,u=ne.clientX,g=ne.clientY,a=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),A()},be=Z=>{if(K===null)return;const ne=Array.from(Z.touches).find(ce=>ce.identifier===K);if(!ne)return;const $=ne.clientX-s,re=ne.clientY-r,U=Math.abs($),N=Math.abs(re);if(!te)if(U>i||N>i)te=!0,T();else return;e.scrollLeft=a-$,e.scrollTop=l-re,Z.preventDefault()},ee=Z=>{K===null||!Array.from(Z.changedTouches).some($=>$.identifier===K)||(K=null,te=!1,A())};e.addEventListener("touchstart",G,{passive:!0}),e.addEventListener("touchmove",be,{passive:!1}),e.addEventListener("touchend",ee,{passive:!0}),e.addEventListener("touchcancel",ee,{passive:!0})}function Nd(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};const i=.5,s=12,r=(g,h,v)=>{const T=g.getBoundingClientRect();return T.bottom>h&&T.top<v},a=()=>e.scrollTop+e.clientHeight>=e.scrollHeight-s,l=()=>{if(a())return;const g=Array.from(n.querySelectorAll(".bar"));if(!g.length)return;const h=e.getBoundingClientRect(),T=(t?.getBoundingClientRect()?.bottom??h.top)+1,A=h.bottom,M=g.find(K=>r(K,T,A));if(!M)return;const q=M.getBoundingClientRect(),he=T,F=q.top-he;Math.abs(F)<=i||ur(e,{left:e.scrollLeft,top:Math.max(0,e.scrollTop+F),behavior:"auto"})},u=()=>{l()};return e.addEventListener("timeline-pan-end",u),()=>{e.removeEventListener("timeline-pan-end",u)}}function ur(e,{left:n=0,top:t=0,behavior:i="smooth"}){const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":i;if(e.scrollTo){e.scrollTo({left:n,top:t,behavior:r});return}e.scrollLeft=n,e.scrollTop=t}function Dd(e={}){Oo(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:Pn;Ho(n),Do(e.eraLabels||{}),Wi(),Wo(),Bi(),Fd();const t=Nd(),i=()=>Wi();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const l=document.getElementById("timeline");l&&ur(l,{left:0,top:0,behavior:"smooth"})}function a(){const l=document.getElementById("timeline");l&&ur(l,{left:Math.max(0,l.scrollWidth-l.clientWidth),top:Math.max(0,l.scrollHeight-l.clientHeight),behavior:"smooth"})}return{goToStart:r,goToEnd:a,setComposers(l){Ho(l),Bi()},updateSettings(l){Oo(l||{}),Wi(),Bi()},updateEraLabels(l){Do(l||{}),Wi(),Wo(),Bi()},setSelectedLane:ol,setHoveredLane:Tt,destroy(){window.removeEventListener("resize",i),t()}}}const Ci=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},Hd={class:"timeline-wrapper"},Wd={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const a=r.getAttribute("data-name"),l=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:a?{name:a}:null,laneIndex:Number.isNaN(l)?null:l}}))};return Si(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=Dd({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),Ut(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),Ke(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),Ke(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),Ke(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(Q(),ie("div",Hd,[...r[0]||(r[0]=[m("div",{id:"timeline"},[m("div",{class:"timeline-inner"},[m("div",{id:"axis",class:"axis"}),m("div",{id:"gantt"})])],-1)])]))}},Bd=Ci(Wd,[["__scopeId","data-v-095e97d5"]]),Kd="/images/about_music_logo.png",$d="/images/dk3-min.jpg",jd={class:"about"},Gd={class:"about__card"},Vd={class:"about__title"},qd={class:"about__text"},Ud={class:"about__text"},Jd={class:"about__author"},Xd={class:"about__author-body"},Yd={class:"about__author-label"},Qd={class:"about__author-name"},Zd={class:"about__contributors"},eh={class:"about__contributors-title"},nh={class:"about__contributors-list"},th={class:"about__contributors-name"},ih=["href"],sh={key:0,class:"about__contributors-toggle"},rh={class:"about__contributors-toggle-label"},oh={class:"about__text"},ah={__name:"AboutPage",props:{language:{type:String,default:"en"},testFeaturesEnabled:{type:Boolean,default:!1}},emits:["update:testFeaturesEnabled"],setup(e,{emit:n}){const t={en:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",testFeaturesLabel:"Turn on test functions",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"Official website of the pianist"},{name:"Olga Matveeva",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]},de:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",testFeaturesLabel:"Testfunktionen einschalten",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"Offizielle Website des Pianisten"},{name:"Olga Matveeva",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]},ru:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",testFeaturesLabel:"Включить тестовые функции",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Матвеева",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]}},i=e,s=n,r=W(()=>t[i.language]||t.en),a=W(()=>r.value.contributors||t.en.contributors||[]),l=W(()=>r.value.testFeaturesLabel||t.en.testFeaturesLabel||"Test functions"),u=W(()=>`© 2015 - ${new Date().getFullYear()}`),g=W({get:()=>i.testFeaturesEnabled,set:h=>s("update:testFeaturesEnabled",h)});return(h,v)=>(Q(),ie("section",jd,[m("div",Gd,[v[4]||(v[4]=m("img",{class:"about__logo",src:Kd,alt:"Music logo",loading:"lazy"},null,-1)),m("h1",Vd,P(r.value.title),1),m("p",qd,P(r.value.intro),1),m("p",Ud,P(r.value.goal),1),m("div",Jd,[v[3]||(v[3]=m("img",{class:"about__photo",src:$d,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),m("div",Xd,[m("div",Yd,P(r.value.authorLabel),1),m("div",Qd,P(r.value.authorName),1),v[1]||(v[1]=m("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),v[2]||(v[2]=m("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),m("div",Zd,[m("div",eh,P(r.value.contributorsTitle),1),m("ul",nh,[(Q(!0),ie(en,null,mt(a.value,T=>(Q(),ie("li",{key:T.url,class:"about__contributors-item"},[m("span",th,P(T.name),1),m("a",{class:"about__contributors-link",href:T.url,target:"_blank",rel:"noreferrer"},P(T.linkText),9,ih),T.url==="https://www.linkedin.com/in/olga-shibanova"?(Q(),ie("div",sh,[m("label",rh,[ts(m("input",{"onUpdate:modelValue":v[0]||(v[0]=A=>g.value=A),class:"about__contributors-toggle-input",type:"checkbox","aria-label":"Toggle test features"},null,512),[[Lr,g.value]]),m("span",null,P(l.value),1)])])):Xe("",!0)]))),128))])]),v[5]||(v[5]=m("br",null,null,-1)),m("p",oh,P(u.value),1)])]))}},lh=Ci(ah,[["__scopeId","data-v-2db3b27b"]]),uh="/images/telegram.svg",ch="/images/whatsapp.svg",dh={class:"quiz__card"},hh={class:"quiz__header"},fh={class:"quiz__title"},mh={class:"quiz__subtitle"},ph={key:0,class:"quiz__intro"},gh={class:"quiz__intro-card"},vh={class:"quiz__intro-title"},bh={class:"quiz__intro-list"},yh={class:"quiz__difficulty"},wh={class:"quiz__difficulty-label"},_h={class:"quiz__difficulty-options"},kh=["aria-pressed","disabled"],Sh=["aria-pressed","disabled"],Th={key:0,class:"quiz__error",role:"status"},Ch=["disabled"],Eh={key:1,class:"quiz__result"},Lh={class:"quiz__result-score"},zh={class:"quiz__result-mode"},Mh={class:"quiz__result-text"},xh={class:"quiz__result-text"},Ph={class:"quiz__share"},Ah={class:"quiz__share-title"},Rh={class:"quiz__share-preview"},Ih={class:"quiz__share-preview-title"},Oh={class:"quiz__share-preview-body"},Fh={class:"quiz__share-actions"},Nh=["href","aria-label","title"],Dh={class:"sr-only"},Hh=["href","aria-label","title"],Wh={class:"sr-only"},Bh={key:2,class:"quiz__round"},Kh={class:"quiz__round-top"},$h={class:"quiz__round-label"},jh={class:"quiz__round-top-right"},Gh={class:"quiz__score-pill"},Vh=["aria-label","title"],qh={class:"quiz__progress-track","aria-hidden":"true"},Uh={class:"quiz__listen"},Jh=["disabled"],Xh={style:{"font-size":"14px"}},Yh={class:"quiz__listen-body"},Qh={class:"quiz__listen-title"},Zh=["src"],ef={class:"quiz__question"},nf={class:"quiz__options"},tf=["disabled","aria-pressed","onClick"],sf={class:"quiz__options quiz__options--era"},rf=["disabled","aria-pressed","onClick"],of={key:0,class:"quiz__feedback",role:"status"},af={key:0,class:"quiz__feedback-block"},lf={class:"quiz__feedback-title"},uf={class:"quiz__feedback-body"},cf={key:1,class:"quiz__feedback-block"},df={class:"quiz__feedback-title"},hf={class:"quiz__feedback-body"},ff={class:"quiz__actions"},mf=["disabled"],pf="/playlist_easy.json",gf="/playlist_hard.json",vf="https://soundcloud.com/dmitry-kotikov/sets/quizeasy",bf="https://soundcloud.com/dmitry-kotikov/sets/quizhard",yf={__name:"QuizPage",props:{language:{type:String,default:"en"},composerNames:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e,t=[['Danse Du Grand Calumet De La Paix  from "Les Sauvages" (Les Indes Galantes) Jean-Philippe Rameau',"Jean-Philippe Rameau"],["Carl Orff - Carmina Burana - O Fortuna","Carl Orff"],["Finlandia, Op.26","Jean Sibelius"],["George Gershwin - Rhapsody In Blue","George Gershwin"],["Rossini - The Barber of Seville - Overture - Marriner","Gioachino Rossini"],["Richard Strauss - Also Sprach Zarathustra, Op. 30","Richard Strauss"],["Nessum dorma - Turandot / Giacomo Puccini","Giacomo Puccini"],["Offenbach: Orpheus in the Underworld, Overture. (Can-can)","Jacques Offenbach"],["Shostakovich: Symphony No. 7 in C Major, Op. 60 (Leningrad) - I. Allegretto (June 1988)","Dmitri Shostakovich"],["Sergei Prokofiev - Dance Of The Knights from Romeo and Juliet, Op. 64","Sergei Prokofiev"],["Igor Stravinsky Rite Of Spring – NEC Philharmonia + Hugh Wolff","Igor Stravinsky"],["MAURICE RAVEL ~ Bolero","Maurice Ravel"],["Rachmaninoff Piano Concerto No. 1, Op. 1 - I. Vivace","Sergei Rachmaninoff"],["Scriabin - Etude in D# minor op8no12","Alexander Scriabin"],["Gymnopédie no.1 - Erik Satie","Erik Satie"],["Clair de Lune - Debussy","Claude Debussy"],["Gustav Mahler: Adagietto from Symphony #5","Gustav Mahler"],["Rimsky-Korsakov: Scheherazade, Op. 35 - The Tale of Prince Kalendar ( Lento-Allegro molto)","Nikolai Rimsky-Korsakov"],["Edvard Grieg: Peer Gynt Suite No.1, Op. 46 / Morning Mood (performed using Vienna Symphonic Library)","Edvard Grieg"],["Antonín Dvořák — Symphony No. 9 In E Minor  From The New World , Op. 95 IV. Allegro Con Fuoco","Antonin Dvorak"],["Pyotr Ilyich Tchaikovsky - The Nutcracker Suite, Op. 71a. III. Waltz of the Flowers","Pyotr Ilyich Tchaikovsky"],["Khovanshchina: Introduction - Dawn on the Moscow River","Modest Mussorgsky"],["Carmen - Habanera (Piano Version) Georges Bizet","Georges Bizet"],["The Swan - Saint-Saens","Camille Saint-Saens"],["Alexander Borodin: Polovetsian Dances","Alexander Borodin"],["Brahms - Symphony No. 3 In F Major, Op. 90 - III. Poco Allegretto","Johannes Brahms"],["Johann Strauss II - The Blue Danube Waltz","Johann Strauss II"],["La Donna E Mobile - Giuseppe Verdi","Giuseppe Verdi"],["Liszt - La Campanella In G - Sharp Minor (From Grandes Études De Paganini, S.141,No.3)","Franz Liszt"],["Robert Schumann - Kinderszenen Op.15 No.7, Träumerei","Robert Schumann"],["Chopin - Nocturne in E Flat Major op. 9 No. 2","Frederic Chopin"],["Wedding March - Felix Mendelssohn","Felix Mendelssohn"],["Former Anthem of Russia (1990-2000) - The Patriotic Song, Glinka | патриотическая песня глинки","Mikhail Glinka"],["Hector Berlioz / Symphonie Fantastique, Op.14 V Dream of a Witches' Sabbath","Hector Berlioz"],["Franz Schubert - Ave Maria","Franz Schubert"],["Paganini - Violin Concerto No. 2 In B Minor, III. Rondo “La Campanella“","Niccolo Paganini"],["Ludwig Van Beethoven - Sonata No. 17 In D Minor For Piano, Op. 31 - 2 (The Tempest)- III. Allegretto","Ludwig van Beethoven"],["Serenade No.13, G Major, K525, Eine Kleine Nachtmusic II. Romanze Andante","Wolfgang Amadeus Mozart"],["Joseph Haydn: Symphony No. 49 In F Minor - Allegro Di Molto","Joseph Haydn"],['Handel/Goossens: "Hallelujah" from "Messiah" HWV 56',"George Frideric Handel"],["Scarlatti: Sonata In D Minor K141","Domenico Scarlatti"],["Orchestral Suite No. 3 in D Major, BWV 1068 ”Air on G String”","Johann Sebastian Bach"],["Violin Concerto in E major, RV 269 - Spring","Antonio Vivaldi"]],i=[["Rameau - La Poule","Jean-Philippe Rameau"],["Carmina Burana, XIV. In Taberna - Carl Orff","Carl Orff"],["Symphony No.2 In D Major, Op. 43: I. Allegretto","Jean Sibelius"],["Gershwin - 3 Preludes:  I. Allegro ben ritmato e deciso","George Gershwin"],["I'taliana In Algeri - Overture","Gioachino Rossini"],["Strauss: Die Frau ohne Schatten Symphonic Fantasy (Erato 1992)","Richard Strauss"],["Giacomo Puccini - Madama Butterfly -  Humming Chorus","Giacomo Puccini"],["La Belle Helene - Overture","Jacques Offenbach"],["SHOSTAKOVICH: String Quartet No. 8 in C Minor, Op. 110: II. Allegro molto - Quatuor Danel","Dmitri Shostakovich"],["Prokofiev: Symphony No. 1 in D Major, Op. 25","Sergei Prokofiev"],["Stravinsky: Firebird Suite - Infernal Dance of King Kaschei","Igor Stravinsky"],["Ravel, La Valse","Maurice Ravel"],["Rachmaninoff Elegie Op. 3 No. 1","Sergei Rachmaninoff"],["Alexander Scriabin - Piano Sonata No 5 in F sharp Op 53","Alexander Scriabin"],["Sarabande N.1","Erik Satie"],["La Cathedrale Engloutie / The Sunken Cathedral - Claude Debussy","Claude Debussy"],["Mahler Symphony No 3 in D Minor (October 2018)","Gustav Mahler"],["RIMSKY-KORSAKOV Scheherazade:  1 The Sea and Sinbad’s Ship","Nikolai Rimsky-Korsakov"],["1. Allegro moderato (D minor)","Sergei Rachmaninoff"],['A. Dvorak, Stabat Mater "Inflammatus", Cornelia Lanz (Altsolo), Herkulessaal Munchen',"Antonin Dvorak"],["P.I. Tchaikovsky:  Kak bi znala ya","Pyotr Ilyich Tchaikovsky"],["Modest Mussorgsky (Orch. Shostakovich) - Songs and Dances of Death - Alvarez - Toro- Campinas - 2019","Modest Mussorgsky"],["Bizet: The Pearl Fishers, Au fond du temple saint","Georges Bizet"],["Camille Saint-Saens, violin concerto N.3 in B minor op 61, 1st m","Camille Saint-Saens"],["Занятие 16-17 Бородин_Опера Князь Игорь 5 Плач Ярославны","Alexander Borodin"],["Brahms, Violin Concerto in D, op. 77","Johannes Brahms"],["Strauss, Johann Tritsch Tratsch Polka","Johann Strauss II"],['Verdi Requiem: "Dies Irae"',"Giuseppe Verdi"],["Liszt - Consolation No. 3 In D - Flat Major","Franz Liszt"],["Carnaval, Op. 9 No. 5 Eusebius - Robert Schumann","Robert Schumann"],["Chopin Heroic Polonaise Op.53 A Flat Major - Played by Valentina Lisitsa","Frederic Chopin"],["Mendelssohn Venetian Gondola Song Op 30 No 6","Felix Mendelssohn"],["Попутная песня - Нестор Кукольник-М.Глинка","Mikhail Glinka"],["Le carnaval romain: Overture (feat. Armenian Philharmonic Orchestra)","Hector Berlioz"],["Schubert - Der Leiermann - Thomas Quasthoff  Daniel Barenboim","Franz Schubert"],["Paganini: Violin Concerto No. 1 in D Major (Augustin Hadelich, violin; Carlos Kalmar, conductor)","Niccolo Paganini"],["Beethoven Symphony No. 3 in E-Flat Major, Op  55 (Eroica) (September 2019)","Ludwig van Beethoven"],["Violin Concerto No. 3 in G major, K. 216 - I. Allegro - Wolfgang Amadeus Mozart (8D Binaural Remastered - Music Therapy)","Wolfgang Amadeus Mozart"],["01 Haydn - The Creation, Part One, The Representation Of Chaos","Joseph Haydn"],["George Frideric Handel - Sarabande Suite No 4 In D Minor HMV 437 (Chamber)","George Frideric Handel"],["D. Scarlatti, Sonata in B Minor, K. 27","Domenico Scarlatti"],["French Suite No. 5 in G major, BWV 816: VII. Gigue (Original Version)","Johann Sebastian Bach"],["Vivaldi: Mandolin Concerto in C major, RV 425 - 1. Allegro (2013.06.12)","Antonio Vivaldi"]];function s(L){return String(L||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’‘`]/g,"'").replace(/[–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase()}const r=new Map(t.map(([L,H])=>[s(L),H])),a=new Map(i.map(([L,H])=>[s(L),H])),l=Pn.map(L=>L.name);function u(L){return String(L||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function g(L){const H=u(L);return n.composerNames?.[H]||L}function h(L){return n.eraLabels?.[L]||En.find(H=>H.id===L)?.label||""}const v=W(()=>En.map(L=>h(L.id))),T=new Map(Pn.map(L=>[s(L.name),L.name])),A={en:{retry:"Play again",abort:"Quit quiz",confirmAbort:"Do you really want to quit the quiz?",title:"Guess the composer",subtitle:"Press Play, listen to the excerpt, and guess who wrote it.",start:"Start the quiz",rulesTitle:"How it works",rule1:"Listen to the excerpt and choose the composer.",rule2:"Pick the era for a bonus half-point.",rule3:"Simple uses famous pieces. Hard uses rarer ones. Your total shows up at the end.",difficultyLabel:"Mode",difficultySimple:"Simple",difficultyHard:"Hard",loadingQuiz:"Loading quiz...",playlistError:"Quiz data is unavailable right now.",round:"Round",of:"of",play:"Play",pause:"Pause",listenPrompt:"Listen to the excerpt",listenHelp:"Replay as many times as you need.",loading:"Loading audio...",audioError:"Audio is unavailable. Try again in a moment.",chooseComposerPrompt:"Who is the composer?",chooseEraPrompt:"Which era fits best?",composerCorrect:"Correct composer!",composerWrong:"Not quite.",eraCorrect:"Era bonus!",eraWrong:"Not quite.",composerAnswerLabel:"Composer:",eraAnswerLabel:"Era:",next:"Next",finish:"Finish",scoreLabel:"Score",resultLine:"Final score:",resultModeLabel:"Mode:",resultWin:"Sharp ear - well done.",resultLose:"Worth another listen to sharpen your ear.",retry:"Play again",shareTitle:"Share your result",sharePreviewTitle:"Message preview",shareTemplate:"My score in the classical music quiz ({mode} mode): {score}/{total}. Test your knowledge here",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Copy link",shareCopied:"Copied"},de:{retry:"Nochmal spielen",abort:"Quiz abbrechen",confirmAbort:"Willst du das Quiz wirklich abbrechen?",title:"Rate den Komponisten",subtitle:"Abspielen druecken, anhoeren und den Komponisten erraten.",start:"Quiz starten",rulesTitle:"So geht's",rule1:"Hoere den Ausschnitt und waehle den Komponisten.",rule2:"Waehle auch die Epoche - das gibt einen halben Bonuspunkt.",rule3:"Einfach = bekannte Stuecke. Schwer = seltenere Stuecke. Die Gesamtpunktzahl kommt am Ende.",difficultyLabel:"Modus",difficultySimple:"Einfach",difficultyHard:"Schwer",loadingQuiz:"Quiz wird geladen...",playlistError:"Quizdaten sind gerade nicht verfuegbar.",round:"Runde",of:"von",play:"Abspielen",pause:"Pause",listenPrompt:"Ausschnitt anhoeren",listenHelp:"Du kannst beliebig oft neu starten.",loading:"Audio wird geladen...",audioError:"Audio ist gerade nicht verfuegbar. Versuch's gleich nochmal.",chooseComposerPrompt:"Wer ist der Komponist?",chooseEraPrompt:"Welche Epoche passt am besten?",composerCorrect:"Komponist stimmt!",composerWrong:"Nicht ganz.",eraCorrect:"Epoche-Bonus!",eraWrong:"Nicht ganz.",composerAnswerLabel:"Komponist:",eraAnswerLabel:"Epoche:",next:"Weiter",finish:"Fertig",scoreLabel:"Punkte",resultLine:"Endstand:",resultModeLabel:"Modus:",resultWin:"Starkes Gehoer - gut gemacht.",resultLose:"Ein zweiter Durchlauf hilft dem Gehoer.",retry:"Nochmal spielen",shareTitle:"Ergebnis teilen",sharePreviewTitle:"Vorschau",shareTemplate:"Mein Ergebnis im Klassik-Quiz ({mode}): {score}/{total}. Teste dein Wissen hier",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Link kopieren",shareCopied:"Kopiert"},ru:{retry:"Пройти еще раз",abort:"Прервать викторину",confirmAbort:"Действительно ли вы хотите прервать викторину?",title:"Угадайте композитора",subtitle:'Нажмите "Слушать", прослушайте фрагмент и угадайте автора.',start:"Начать виктотрину",rulesTitle:"Как играть",rule1:"Прослушайте фрагмент и выберите композитора.",rule2:"Угадайте эпоху - это дает полбалла бонусом.",rule3:'"Просто" - более известные произведения. "Сложно" - более редкие. Итоговый счет будет в конце.',loadingQuiz:"Загружаем викторину...",playlistError:"Викторина сейчас недоступна.",round:"Раунд",of:"из",play:"Слушать",pause:"Пауза",listenPrompt:"Слушайте фрагмент",listenHelp:"Можно переслушивать сколько угодно раз.",loading:"Загружаем аудио...",audioError:"Аудио сейчас недоступно. Попробуйте еще раз чуть позже.",chooseComposerPrompt:"Кто это?",chooseEraPrompt:"К какой эпохе это ближе?",composerCorrect:"Композитор угадан верно!",composerWrong:"Композитор угадан неверно.",eraCorrect:"Бонус за эпоху!",eraWrong:"Не совсем.",composerAnswerLabel:"Композитор:",eraAnswerLabel:"Эпоха:",next:"Дальше",finish:"Узнать результат",scoreLabel:"Счет",resultLine:"Результат:",resultModeLabel:"Режим:",resultWin:"Вы - настоящий знаток академической музыки.",resultLose:"Стоит прослушать еще раз всех композиторов на таймлайне и результат будет лучше.",retry:"Сыграть еще раз",shareTitle:"Поделиться результатом",sharePreviewTitle:"Текст:",difficultyLabel:"Режим",difficultySimple:"Простой",difficultyHard:"Сложный",shareTemplate:"Мой результат в викторине по классической музыке на {mode} уровне: {score}/{total}. Проверьте себя здесь",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Скопировать ссылку",shareCopied:"Скопировано"}},M="".replace(/\/$/,""),q=ue([]),he=ue(!1),F=ue(!1),K=ue(0),te=ue(null),G=ue(null),be=ue(null),ee=ue(null);let Z=null;const ne=ue(!1),$=ue(!1),re=ue(!1),U=ue("simple"),N=ue(!1),ce=ue(""),_e=new Map,$e=ue("simple"),D=W(()=>A[n.language]||A.en),ge=W(()=>($e.value||U.value)==="hard"?D.value.difficultyHard:D.value.difficultySimple),ve=W(()=>{const L=$e.value||U.value;return(n.language||"en")==="ru"?L==="hard"?"сложном":"легком":ge.value}),je=W(()=>typeof window>"u"?"":window.location.href.split("#")[0]),me=W(()=>(D.value.shareTemplate||"").replace("{score}",c.value).replace("{total}",f.value).replace("{mode}",ve.value).replace(/\s+/g," ").trim()),Me=W(()=>{const L=je.value||"",H=me.value||"";return L?H?`${H}: ${L}`:L:H}),Ee=W(()=>{const L=encodeURIComponent(je.value||""),H=encodeURIComponent(me.value||""),X=encodeURIComponent(Me.value||"");return{telegram:`https://t.me/share/url?url=${L}&text=${H}`,whatsApp:`https://wa.me/?text=${X}`}}),nn=W(()=>q.value.length),ke=W(()=>q.value[K.value]||null),Ge=W(()=>!!ke.value?.selectedComposer),Ye=W(()=>!!ke.value?.selectedEra),He=W(()=>Ge.value&&Ye.value),Qe=W(()=>ke.value?.selectedComposer===ke.value?.composer),We=W(()=>ke.value?.selectedEra===ke.value?.eraLabel),kn=W(()=>q.value.reduce((L,H)=>L+(H.composerCorrect?1:0)+(H.eraCorrect?.5:0),0)),wn=W(()=>nn.value*1.5),c=W(()=>B(kn.value)),f=W(()=>B(wn.value)),y=W(()=>!he.value||F.value?"":`${D.value.round} ${K.value+1} ${D.value.of} ${nn.value}`),k=W(()=>K.value>=nn.value-1?D.value.finish:D.value.next),C=W(()=>{if(!F.value)return"";const L=wn.value*.7;return kn.value>=L?D.value.resultWin:D.value.resultLose}),S=W(()=>!he.value||!nn.value?0:F.value?100:(K.value+1)/nn.value*100),I=W(()=>ke.value?.id?x(`/api/soundcloud/audio/${ke.value.id}`):""),R=W(()=>re.value?D.value.audioError:$.value?D.value.loading:D.value.listenHelp);function x(L){return L?M?M.endsWith("/")&&L.startsWith("/")?M+L.slice(1):!M.endsWith("/")&&!L.startsWith("/")?`${M}/${L}`:M+L:L:M}function z(L){const H=encodeURIComponent(L);return x(`/api/soundcloud/playlist?url=${H}`)}function J(L){const H=[...L];for(let X=H.length-1;X>0;X-=1){const Pe=Math.floor(Math.random()*(X+1));[H[X],H[Pe]]=[H[Pe],H[X]]}return H}function B(L){return Number.isInteger(L)?String(L):L.toFixed(1)}function V(L){return T.get(s(L))||L}function oe(L){const H=V(L),X=Pn.find(Ue=>Ue.name===H);if(!X)return null;const Pe=Math.round((X.birth+X.death)/2),we=En.find(Ue=>Pe>=Ue.from&&Pe<Ue.to),Rn=En[En.length-1]?.id;return h(we?.id||Rn)}function ae(L){const H=l.filter(Pe=>Pe!==L),X=J(H).slice(0,3);return J([L,...X].map(g))}function ye(L){return L.map(H=>{const X=V(H.composer),Pe=oe(X)||"",we=g(X);return{...H,composer:we,eraLabel:Pe,composerOptions:ae(X),eraOptions:v.value,selectedComposer:null,selectedEra:null,composerCorrect:!1,eraCorrect:!1}})}function Se(L){return L==="hard"?{source:gf,url:bf,map:a}:{source:pf,url:vf,map:r}}function b(L,H){if(!Array.isArray(L)||!L.length)return[];const X=J(L);return X.slice(0,Math.min(H,X.length))}async function _(L){if(_e.has(L))return _e.get(L);N.value=!0,ce.value="";const{source:H,url:X,map:Pe}=Se(L);try{let we=await fetch(H),Rn=null;if(we.ok)Rn=await we.json();else{if(we=await fetch(z(X)),!we.ok)throw new Error(`Playlist error ${we.status}`);Rn=await we.json()}const Ue=(Rn?.tracks||[]).map(it=>{const un=s(it?.title),fn=Pe.get(un);return!fn||!it?.id?null:{id:it.id,composer:fn,title:it.title}}).filter(Boolean);if(!Ue.length)throw new Error("Playlist mapping empty");return _e.set(L,Ue),Ue}catch(we){return console.error("Quiz playlist load failed",we),ce.value=D.value.playlistError,[]}finally{N.value=!1}}function E(){const L=te.value;ne.value=!1,$.value=!1,re.value=!1,L&&(L.pause(),L.currentTime=0,L.load())}function j(){const L=te.value;ne.value=!1,$.value=!1,L&&(L.pause(),L.currentTime=0)}function de(L,H=-12){const X=L?.value||L;if(!X)return;const Pe=G.value;if(Pe&&typeof Pe.scrollTo=="function"){const we=Pe.getBoundingClientRect(),Ue=X.getBoundingClientRect().top-we.top;Pe.scrollTo({top:Pe.scrollTop+Ue+H,behavior:"smooth"});return}if(typeof X.scrollIntoView=="function"){X.scrollIntoView({behavior:"smooth",block:"center"});return}typeof window<"u"&&typeof window.scrollTo=="function"&&window.scrollTo({top:0,behavior:"smooth"})}function Te({behavior:L="smooth",duration:H=700}={}){const X=G.value,Pe=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,we=un=>1-Math.pow(1-un,3),Rn=(un,fn,bt,_s)=>{const It=un();if(!Number.isFinite(It)||It===bt){fn(bt);return}const Xt=performance.now(),Yt=ks=>{const Mi=Math.min(1,(ks-Xt)/_s),Ss=It+(bt-It)*we(Mi);fn(Ss),Mi<1&&requestAnimationFrame(Yt)};requestAnimationFrame(Yt)},Ue=un=>{if(un)try{if(Pe||L!=="smooth"||H<=0){un.scrollTop=0,typeof un.scrollTo=="function"&&un.scrollTo({top:0,behavior:"auto"});return}Rn(()=>un.scrollTop,fn=>{un.scrollTop=fn},0,H)}catch{}},it=()=>{if(typeof window>"u")return;const un=fn=>{try{window.scrollTo(0,fn)}catch{}};if(Pe||L!=="smooth"||H<=0){try{window.scrollTo({top:0,behavior:"auto"})}catch{window.scrollTo(0,0)}return}Rn(()=>window.scrollY||0,fn=>un(fn),0,H)};Ue(X),it(),typeof document<"u"&&(Ue(document.documentElement),Ue(document.body)),requestAnimationFrame(()=>{Ue(X),typeof document<"u"&&(Ue(document.documentElement),Ue(document.body)),requestAnimationFrame(()=>{X&&(X.scrollTop=0),typeof document<"u"&&(document.documentElement.scrollTop=0,document.body.scrollTop=0),typeof window<"u"&&window.scrollTo(0,0)})})}async function le(){if(N.value)return;ce.value="";const L=await _(U.value);if(!L.length)return;const H=b(L,10);$e.value=U.value,q.value=ye(H),K.value=0,he.value=!0,F.value=!1,E()}function Oe(){le()}function tt(){if(typeof window<"u"){const L=D.value.confirmAbort||"Do you really want to quit the quiz?";if(!window.confirm(L))return}j(),q.value=[],K.value=0,F.value=!1,he.value=!1,ce.value="",re.value=!1,$.value=!1,ne.value=!1,$e.value=U.value}function vt(L){const H=ke.value;!H||H.selectedComposer||(H.selectedComposer=L,H.composerCorrect=L===H.composer,j(),cn(()=>{de(Z,-3)}))}function xe(L){const H=ke.value;!H||H.selectedEra||(H.selectedEra=L,H.eraCorrect=L===H.eraLabel,cn(()=>{de(ee,-24)}))}function An(){if(!He.value)return;K.value>=nn.value-1?(F.value=!0,j()):K.value+=1,cn(()=>{Te({behavior:"smooth",duration:200})})}async function At(){const L=te.value;if(L){re.value=!1;try{L.paused?($.value=!0,await L.play()):L.pause()}catch(H){console.error("Audio playback failed",H),re.value=!0,$.value=!1}}}function $n(){ne.value=!0,$.value=!1}function Jt(){ne.value=!0,$.value=!1}function Be(){ne.value=!1,$.value=!1}function Rt(){ne.value=!1}function Ei(){$.value=!0}function Li(){$.value=!1}function zi(){$.value=!1}function ws(){re.value=!0,$.value=!1,ne.value=!1}return Ke(I,async()=>{!he.value||F.value||(await cn(),E())}),Ke(U,()=>{ce.value=""}),Ke(F,L=>{L&&j()}),Ut(()=>{j()}),(L,H)=>(Q(),ie("section",{class:"quiz",ref_key:"quizEl",ref:G},[m("div",dh,[m("header",hh,[m("h1",fh,P(D.value.title),1),m("p",mh,P(D.value.subtitle),1)]),he.value?F.value?(Q(),ie("div",Eh,[m("div",Lh,P(c.value)+"/"+P(f.value),1),m("div",zh,P(D.value.resultModeLabel)+" "+P(ge.value),1),m("div",Mh,P(D.value.resultLine),1),m("div",xh,P(C.value),1),m("div",Ph,[m("div",Ah,P(D.value.shareTitle),1),m("div",Rh,[m("div",Ih,P(D.value.sharePreviewTitle),1),m("div",Oh,P(Me.value),1)]),m("div",Fh,[m("a",{class:"quiz__share-button",href:Ee.value.telegram,target:"_blank",rel:"noopener noreferrer","aria-label":D.value.shareTelegram,title:D.value.shareTelegram},[H[2]||(H[2]=m("img",{class:"quiz__share-icon",src:uh,alt:"","aria-hidden":"true"},null,-1)),m("span",Dh,P(D.value.shareTelegram),1)],8,Nh),m("a",{class:"quiz__share-button",href:Ee.value.whatsApp,target:"_blank",rel:"noopener noreferrer","aria-label":D.value.shareWhatsApp,title:D.value.shareWhatsApp},[H[3]||(H[3]=m("img",{class:"quiz__share-icon",src:ch,alt:"","aria-hidden":"true"},null,-1)),m("span",Wh,P(D.value.shareWhatsApp),1)],8,Hh)])]),m("button",{class:"quiz__primary",type:"button",onClick:Oe},P(D.value.retry),1)])):(Q(),ie("div",Bh,[m("div",Kh,[m("div",$h,P(y.value),1),m("div",jh,[m("div",Gh,P(D.value.scoreLabel)+" "+P(c.value)+"/"+P(f.value),1),m("button",{class:"quiz__secondary quiz__secondary--ghost",type:"button","aria-label":D.value.abort,title:D.value.abort,onClick:tt},[...H[4]||(H[4]=[m("span",{class:"quiz__icon","aria-hidden":"true"},"×",-1)])],8,Vh)])]),m("div",qh,[m("div",{class:"quiz__progress-bar",style:Lt({width:`${S.value}%`})},null,4)]),m("div",Uh,[m("button",{class:"quiz__play",type:"button",disabled:!I.value,onClick:At},[m("span",{class:Ve(["quiz__play-icon",{"quiz__play-icon--pause":ne.value}])},null,2),m("span",Xh,P(ne.value?D.value.pause:D.value.play),1)],8,Jh),m("div",Yh,[m("div",Qh,P(D.value.listenPrompt),1),m("div",{class:Ve(["quiz__listen-status",{"quiz__listen-status--error":re.value}])},P(R.value),3)])]),(Q(),ie("audio",{ref_key:"audioEl",ref:te,class:"quiz__audio",key:ke.value?.id,src:I.value,preload:"none","aria-hidden":"true",onPlay:$n,onPlaying:Jt,onPause:Be,onEnded:Rt,onWaiting:Ei,onCanplay:Li,onLoadeddata:zi,onError:ws},null,40,Zh)),m("div",ef,P(D.value.chooseComposerPrompt),1),m("div",nf,[(Q(!0),ie(en,null,mt(ke.value.composerOptions,(X,Pe)=>(Q(),ie("button",{key:X,class:Ve(["quiz__option",{"is-selected":X===ke.value.selectedComposer,"is-correct":Ge.value&&X===ke.value.composer,"is-wrong":Ge.value&&X===ke.value.selectedComposer&&X!==ke.value.composer}]),ref_for:!0,ref:we=>{Pe===0&&(an(Z)?Z.value=we:Z=we)},type:"button",disabled:Ge.value,"aria-pressed":X===ke.value.selectedComposer,style:Lt({"--index":Pe}),onClick:we=>vt(X)},P(X),15,tf))),128))]),m("div",{ref_key:"eraQuestionEl",ref:be,class:"quiz__question"},P(D.value.chooseEraPrompt),513),m("div",sf,[(Q(!0),ie(en,null,mt(ke.value.eraOptions,(X,Pe)=>(Q(),ie("button",{key:X,class:Ve(["quiz__option",{"is-selected":X===ke.value.selectedEra,"is-correct":Ye.value&&X===ke.value.eraLabel,"is-wrong":Ye.value&&X===ke.value.selectedEra&&X!==ke.value.eraLabel}]),type:"button",disabled:Ye.value,"aria-pressed":X===ke.value.selectedEra,style:Lt({"--index":Pe}),onClick:we=>xe(X)},P(X),15,rf))),128))]),Ge.value||Ye.value?(Q(),ie("div",of,[Ge.value?(Q(),ie("div",af,[m("div",lf,P(Qe.value?D.value.composerCorrect:D.value.composerWrong),1),m("div",uf,P(D.value.composerAnswerLabel)+" "+P(ke.value.composer),1)])):Xe("",!0),Ye.value?(Q(),ie("div",cf,[m("div",df,P(We.value?D.value.eraCorrect:D.value.eraWrong),1),m("div",hf,P(D.value.eraAnswerLabel)+" "+P(ke.value.eraLabel),1)])):Xe("",!0)])):Xe("",!0),m("div",ff,[m("button",{ref_key:"nextButtonEl",ref:ee,class:"quiz__secondary",type:"button",disabled:!He.value,onClick:An},P(k.value),9,mf)])])):(Q(),ie("div",ph,[m("div",gh,[m("div",vh,P(D.value.rulesTitle),1),m("ul",bh,[m("li",null,P(D.value.rule1),1),m("li",null,P(D.value.rule2),1),m("li",null,P(D.value.rule3),1)])]),m("div",yh,[m("div",wh,P(D.value.difficultyLabel),1),m("div",_h,[m("button",{type:"button",class:Ve(["quiz__difficulty-option",{"is-active":U.value==="simple"}]),"aria-pressed":U.value==="simple",disabled:N.value,onClick:H[0]||(H[0]=X=>U.value="simple")},P(D.value.difficultySimple),11,kh),m("button",{type:"button",class:Ve(["quiz__difficulty-option",{"is-active":U.value==="hard"}]),"aria-pressed":U.value==="hard",disabled:N.value,onClick:H[1]||(H[1]=X=>U.value="hard")},P(D.value.difficultyHard),11,Sh)])]),ce.value?(Q(),ie("div",Th,P(ce.value),1)):Xe("",!0),m("button",{class:"quiz__primary",type:"button",disabled:N.value,onClick:le},P(N.value?D.value.loadingQuiz:D.value.start),9,Ch)]))])],512))}},wf=Ci(yf,[["__scopeId","data-v-4285243b"]]),_f={class:"radio"},kf={class:"radio__card"},Sf={class:"radio__header"},Tf={class:"radio__title"},Cf={class:"radio__filters"},Ef={class:"radio__filter"},Lf={class:"radio__filter-label"},zf={class:"radio__filter-options"},Mf=["aria-pressed"],xf=["aria-pressed"],Pf={class:"radio__filter"},Af={class:"radio__filter-label"},Rf={class:"radio__filter-options"},If=["aria-pressed"],Of=["aria-pressed"],Ff={class:"radio__filter"},Nf={class:"radio__filter-label"},Df={class:"radio__filter-options radio__filter-options--wrap"},Hf=["onUpdate:modelValue"],Wf={class:"radio__controls"},Bf=["disabled","aria-label","title"],Kf={key:0,class:"radio__icon",viewBox:"0 0 24 24","aria-hidden":"true"},$f={key:1,class:"radio__icon",viewBox:"0 0 24 24","aria-hidden":"true"},jf=["disabled","aria-label","title"],Gf=["disabled","aria-label","title"],Vf=["disabled","aria-label","title"],qf={key:0,class:"radio__meta"},Uf={key:0},Jf={key:1},Xf={key:2},Yf={class:"sc-track-list"},Qf=["aria-pressed","onClick"],Zf={class:"sc-track__title-text"},em={key:0,class:"sc-track__composer"},nm={key:1,class:"sc-track__separator"},tm={class:"sc-track__work"},im={key:0,class:"sc-track__duration"},sm={__name:"RadioPage",props:{language:{type:String,default:"en"},composerNames:{type:Object,default:()=>({})}},setup(e){const n=e,t={en:{title:"Radio",play:"Play",pause:"Pause",stop:"Stop",prev:"Previous",next:"Next",loading:"Loading playlists...",error:"Radio playlist is unavailable right now.",audioError:"Audio is unavailable. Try another track.",nowPlaying:"Now playing:",trackCountLabel:"Tracks",playlistModeLabel:"Playlist mode",playlistModeHits:"Only popular",playlistModeAll:"All works",playOrderLabel:"Playback order",playOrderShuffle:"Shuffle",playOrderSequence:"In order",eraLabel:"Eras",eraLabels:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"}},de:{title:"Radio",play:"Abspielen",pause:"Pause",stop:"Stopp",prev:"Zurück",next:"Weiter",loading:"Playlists werden geladen...",error:"Die Radio-Playlist ist gerade nicht verfügbar.",audioError:"Audio ist nicht verfügbar. Probieren Sie einen anderen Track.",nowPlaying:"Jetzt läuft:",trackCountLabel:"Titel",playlistModeLabel:"Playlistmodus",playlistModeHits:"Nur Hits",playlistModeAll:"Alle Werke",playOrderLabel:"Wiedergabereihenfolge",playOrderShuffle:"Zufall",playOrderSequence:"Der Reihe nach",eraLabel:"Epochen",eraLabels:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"}},ru:{title:"Радио",play:"Плей",pause:"Пауза",stop:"Стоп",prev:"Предыдущий",next:"Следующий",loading:"Загружаем плейлисты...",error:"Радио сейчас недоступно.",audioError:"Аудио недоступно. Выберите другой трек.",nowPlaying:"Сейчас играет:",trackCountLabel:"Треков",playlistModeLabel:"Режим",playlistModeHits:"Только популярные",playlistModeAll:"Все",playOrderLabel:"Порядок воспроизведения",playOrderShuffle:"Вперемешку",playOrderSequence:"По порядку",eraLabel:"Эпохи",eraLabels:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"}}},i=Pn.map(b=>Ee(b.name)),s="".replace(/\/$/,""),r=W(()=>t[n.language]||t.en),a=ue([]),l=ue("all"),u=ue("shuffle"),g=ue(Date.now()),h=Mt(En.reduce((b,_)=>(b[_.id]=!0,b),{})),v=ue(!1),T=ue(!1),A=ue(!1),M=ue(null),q=ue(null),he=ue(null),F=ue(null),K=ue(!1),te=ue(null),G=ue([]),be=W(()=>{const b=r.value.eraLabels||{};return En.map(_=>({id:_.id,label:b[_.id]||_.label||_.id}))}),ee=W(()=>{const b=new Set(Object.entries(h).filter(([,E])=>E).map(([E])=>E));if(b.size===0)return[];const _=[];return a.value.forEach(E=>{if(b.size&&!b.has(E.eraId))return;(l.value==="hits"?E.tracks.slice(0,3):E.tracks).forEach(de=>_.push(de))}),_}),Z=ue([]),ne=W(()=>Z.value.length),$=W(()=>!v.value&&ne.value>0),re=W(()=>F.value!==null),U=W(()=>$.value&&M.value!==null&&M.value>0),N=W(()=>$.value&&M.value!==null&&M.value<ne.value-1),ce=W(()=>M.value===null?null:Z.value[M.value]||null);W(()=>ce.value?ce.value.playlistTitle?`${ce.value.playlistTitle} - ${ce.value.title}`:ce.value.title:"");const _e=b=>{typeof b=="number"&&(b<0||b>=ne.value||(M.value=b))};async function $e(){v.value=!0,T.value=!1;try{const b=await Promise.allSettled(i.map(E=>D(E))),_=[];b.forEach((E,j)=>{if(E.status!=="fulfilled"){const An=E.reason;if(An?.status&&An.status===404)return;console.error("Failed to load playlist",i[j],An);return}const de=E.value,Te=i[j],le=de?.title||je(Te),Oe=Qe(Te),tt=We(Oe?.birth,Oe?.death),xe=ge(de?.tracks||[]).map(An=>ve(An,le,Oe?.name||""));xe.length&&_.push({slug:Te,title:le,eraId:tt,composerName:Oe?.name||"",tracks:xe})}),a.value=_,_.length||(T.value=!0)}catch(b){console.error("Radio playlists load failed",b),T.value=!0}finally{v.value=!1}}async function D(b){const _=await fetch(`/playlists/${b}.json`),E=_.headers.get("content-type")||"";if(!_.ok||!E.includes("application/json")){const j=new Error(`Playlist fetch error: ${_.status}`);throw _.ok?j.status=404:j.status=_.status,j}return _.json()}function ge(b=[]){return Array.isArray(b)?b.map((_,E)=>{if(!_)return null;const j=`Track ${E+1}`,Te=[_.title,_.publisher_metadata?.release_title,_.permalink,_.permalink_url,_.id?String(_.id):null].map(le=>typeof le=="string"?le.trim():"").filter(Boolean)[0]||j;return{..._,title:Te}}).filter(Boolean):[]}function ve(b,_,E){return{id:b.id,title:b.title,duration:b.duration,track_authorization:b.track_authorization,media:b.media,publisher_metadata:b.publisher_metadata,user:b.user,playlistTitle:_,composerName:E}}function je(b){return b?b.split("-").map(_=>_.charAt(0).toUpperCase()+_.slice(1)).join(" "):""}function me(b){return String(b||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Me(b){return String(b||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Ee(b){return me(b).replace(/\s+/g,"-").replace(/-+/g,"-")}function nn(b){const _=Me(b);return n.composerNames?.[_]||b}function ke(b){if(!b)return"";const _=b.composerName||b.playlistTitle||"";return _?nn(_):""}function Ge(b,_){if(b){G.value[_]=b;return}G.value[_]=null}function Ye(b="smooth"){const _=te.value,E=M.value;if(!_||E===null)return;const j=G.value[E];if(!j)return;const de=_.getBoundingClientRect(),Te=j.getBoundingClientRect(),le=_.scrollTop+(Te.top-de.top);typeof _.scrollTo=="function"?_.scrollTo({top:le,behavior:b}):_.scrollTop=le}function He(b){const _=Math.max(0,Math.floor((b||0)/1e3)),E=Math.floor(_/3600),j=Math.floor(_%3600/60),de=_%60,Te=le=>String(le).padStart(2,"0");return E>0?`${E}:${Te(j)}:${Te(de)}`:`${j}:${Te(de)}`}function Qe(b){const _=me(String(b||"").replace(/-/g," "));return Pn.find(j=>me(j.name)===_)||null}function We(b,_){if(!b||!_)return null;let E=null,j=-1/0;return En.forEach(de=>{const Te=Math.max(de.from,b),le=Math.min(de.to,_),Oe=Math.max(0,le-Te);Oe>j&&(j=Oe,E=de.id)}),E}function kn(b){let _=b>>>0;return()=>{_+=1831565813;let E=Math.imul(_^_>>>15,1|_);return E^=E+Math.imul(E^E>>>7,61|E),((E^E>>>14)>>>0)/4294967296}}function wn(b,_){const E=b.slice(),j=kn(_);for(let de=E.length-1;de>0;de-=1){const Te=Math.floor(j()*(de+1));[E[de],E[Te]]=[E[Te],E[de]]}return E}function c(b){return b?s?s.endsWith("/")&&b.startsWith("/")?s+b.slice(1):!s.endsWith("/")&&!b.startsWith("/")?`${s}/${b}`:s+b:b:s}async function f(b){if(!b)throw new Error("No track provided");const _=b.media&&Array.isArray(b.media.transcodings)?b.media.transcodings:[];if(_.length){let E=_.find(j=>j&&j.format&&j.format.protocol==="progressive");if(E||(E=_[0]),E&&E.url)try{return await y(E.url,b.track_authorization)}catch(j){console.error("SoundCloud transcoding failed, falling back",j)}}if(!b.id)throw new Error("No track id provided");return k(b.id,b.track_authorization)}async function y(b,_){const E=new URLSearchParams;E.set("url",b),_&&E.set("track_authorization",_),E.set("proxy","1");const j=c("/api/soundcloud/transcoding")+`?${E.toString()}`,de=await fetch(j);if(!de.ok){const le=new Error(`SoundCloud transcoding error: ${de.status}`);throw le.status=de.status,le}const Te=await de.json();if(!Te?.url)throw new Error("Transcoding response missing url");return Te.url}async function k(b,_){const E=new URLSearchParams;_&&E.set("track_authorization",_),E.set("proxy","1");const j=E.toString(),de=c(`/api/soundcloud/streams/${b}`)+(j?`?${j}`:""),Te=await fetch(de);if(!Te.ok){const Oe=new Error(`SoundCloud stream error: ${Te.status}`);throw Oe.status=Te.status,Oe}const le=await Te.json();if(!le?.url)throw new Error("Stream response missing url");return le.url}async function C(b,{auto:_=!1}={}){if(!$.value||q.value!==null)return;const E=he.value;if(!E)return;const j=Z.value[b];if(j){if(!_&&M.value===b&&!E.paused){E.pause();return}_e(b),A.value=!1,q.value=b;try{const de=j.id??b;if(F.value===de&&E.src)await E.play();else{const Te=await f(j);if(!Te)throw new Error("No stream URL returned");E.src=Te,await E.play()}F.value=de,oe(j)}catch(de){console.error("Failed to play track",de),A.value=!0}finally{q.value=null}}}async function S(){if(!$.value)return;const b=he.value;if(b){if(!b.paused){b.pause();return}M.value===null&&_e(0),await C(M.value,{auto:!0})}}function I(){const b=he.value;b&&(b.pause(),b.currentTime=0,K.value=!1,F.value=null)}function R(){if(!$.value)return;if(M.value===null){_e(0),C(0,{auto:!0});return}const b=Math.min(M.value+1,ne.value-1);b!==M.value&&C(b,{auto:!0})}function x(){if(!$.value)return;if(M.value===null){_e(0);return}const b=Math.max(M.value-1,0);b!==M.value&&C(b,{auto:!0})}function z(){K.value=!0}function J(){K.value=!1}function B(){if(K.value=!1,M.value===null)return;const b=M.value+1;b<ne.value&&C(b,{auto:!0})}function V(){A.value=!0,K.value=!1}function oe(b){if(!("mediaSession"in navigator)||typeof MediaMetadata>"u")return;const _=b?.title||"Classical Music",E=b?.publisher_metadata?.artist||b?.user?.username||b?.user?.full_name||"",j=b?.publisher_metadata?.album_title||b?.playlistTitle||"";navigator.mediaSession.metadata=new MediaMetadata({title:_,artist:E,album:j,artwork:[{src:"/images/about_music_logo_padding.png",type:"image/png"}]})}function ae(b,_){if("mediaSession"in navigator)try{navigator.mediaSession.setActionHandler(b,_)}catch{}}function ye(){"mediaSession"in navigator&&(ae("play",()=>{he.value&&he.value.paused&&S()}),ae("pause",()=>{he.value&&!he.value.paused&&S()}),ae("stop",()=>{I()}),ae("previoustrack",()=>{x()}),ae("nexttrack",()=>{R()}),ae("seekbackward",()=>{x()}),ae("seekforward",()=>{R()}))}function Se(){["play","pause","stop","previoustrack","nexttrack","seekbackward","seekforward"].forEach(b=>{ae(b,null)})}return Si(()=>{$e(),ye()}),Ut(()=>{I(),Se()}),Ke(()=>[ee.value,u.value,g.value],([b,_])=>{const E=Array.isArray(b)?b.slice():[];_==="shuffle"?Z.value=wn(E,g.value):Z.value=E},{immediate:!0}),Ke(u,b=>{b==="shuffle"&&(g.value=Date.now())}),Ke(()=>Z.value,b=>{if(!b.length){I(),M.value=null,te.value&&(te.value.scrollTop=0);return}if(F.value!==null){const _=b.findIndex(E=>(E.id??null)===F.value);if(_!==-1){M.value=_;return}}I(),M.value=0,te.value&&(te.value.scrollTop=0)}),Ke(()=>M.value,async b=>{b!==null&&(await cn(),Ye())}),Ke(()=>Z.value,async b=>{!b.length||M.value===null||(await cn(),Ye("auto"))}),(b,_)=>(Q(),ie("section",_f,[m("div",kf,[m("header",Sf,[m("h1",Tf,P(r.value.title),1)]),m("div",Cf,[m("div",Ef,[m("div",Lf,P(r.value.playlistModeLabel),1),m("div",zf,[m("button",{type:"button",class:Ve(["radio__filter-pill",{"is-active":l.value==="hits"}]),"aria-pressed":l.value==="hits",onClick:_[0]||(_[0]=E=>l.value="hits")},P(r.value.playlistModeHits),11,Mf),m("button",{type:"button",class:Ve(["radio__filter-pill",{"is-active":l.value==="all"}]),"aria-pressed":l.value==="all",onClick:_[1]||(_[1]=E=>l.value="all")},P(r.value.playlistModeAll),11,xf)])]),m("div",Pf,[m("div",Af,P(r.value.playOrderLabel),1),m("div",Rf,[m("button",{type:"button",class:Ve(["radio__filter-pill",{"is-active":u.value==="shuffle"}]),"aria-pressed":u.value==="shuffle",onClick:_[2]||(_[2]=E=>u.value="shuffle")},P(r.value.playOrderShuffle),11,If),m("button",{type:"button",class:Ve(["radio__filter-pill",{"is-active":u.value==="sequence"}]),"aria-pressed":u.value==="sequence",onClick:_[3]||(_[3]=E=>u.value="sequence")},P(r.value.playOrderSequence),11,Of)])]),m("div",Ff,[m("div",Nf,P(r.value.eraLabel),1),m("div",Df,[(Q(!0),ie(en,null,mt(be.value,E=>(Q(),ie("label",{key:E.id,class:"radio__filter-check"},[ts(m("input",{"onUpdate:modelValue":j=>h[E.id]=j,type:"checkbox"},null,8,Hf),[[Lr,h[E.id]]]),m("span",null,P(E.label),1)]))),128))])])]),m("div",Wf,[m("button",{type:"button",class:"radio__button radio__button--primary",disabled:!$.value,"aria-label":K.value?r.value.pause:r.value.play,title:K.value?r.value.pause:r.value.play,onClick:S},[K.value?(Q(),ie("svg",$f,[..._[5]||(_[5]=[m("rect",{x:"6",y:"5",width:"4",height:"14"},null,-1),m("rect",{x:"14",y:"5",width:"4",height:"14"},null,-1)])])):(Q(),ie("svg",Kf,[..._[4]||(_[4]=[m("polygon",{points:"8,5 20,12 8,19"},null,-1)])]))],8,Bf),m("button",{type:"button",class:"radio__button",disabled:!re.value,"aria-label":r.value.stop,title:r.value.stop,onClick:I},[..._[6]||(_[6]=[m("svg",{class:"radio__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[m("rect",{x:"6",y:"6",width:"12",height:"12"})],-1)])],8,jf),m("button",{type:"button",class:"radio__button",disabled:!U.value,"aria-label":r.value.prev,title:r.value.prev,onClick:x},[..._[7]||(_[7]=[m("svg",{class:"radio__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[m("rect",{x:"5",y:"5",width:"3",height:"14"}),m("polygon",{points:"19,5 19,19 8,12"})],-1)])],8,Gf),m("button",{type:"button",class:"radio__button",disabled:!N.value,"aria-label":r.value.next,title:r.value.next,onClick:R},[..._[8]||(_[8]=[m("svg",{class:"radio__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[m("polygon",{points:"5,5 16,12 5,19"}),m("rect",{x:"17",y:"5",width:"3",height:"14"})],-1)])],8,Vf),ne.value?(Q(),ie("div",qf,P(r.value.trackCountLabel)+": "+P(ne.value),1)):Xe("",!0)]),m("div",{style:{display:"none"},class:Ve(["radio__status",{"radio__status--error":T.value||A.value}])},[v.value?(Q(),ie("span",Uf,P(r.value.loading),1)):T.value?(Q(),ie("span",Jf,P(r.value.error),1)):A.value?(Q(),ie("span",Xf,P(r.value.audioError),1)):Xe("",!0)],2),m("div",{class:"radio__list sc-player",ref_key:"trackListEl",ref:te},[m("div",Yf,[(Q(!0),ie(en,null,mt(Z.value,(E,j)=>(Q(),ie("button",{key:E.id||`${E.title}-${j}`,type:"button",class:Ve(["sc-track radio__track",{"is-active":j===M.value}]),"aria-pressed":j===M.value,onClick:de=>C(j),ref_for:!0,ref:de=>Ge(de,j)},[m("span",{class:Ve(["sc-track__title",{"is-playing":j===M.value&&K.value}])},[m("span",Zf,[ke(E)?(Q(),ie("span",em,P(ke(E)),1)):Xe("",!0),ke(E)?(Q(),ie("span",nm,"—")):Xe("",!0),m("span",tm,P(E.title),1)]),E.duration?(Q(),ie("span",im,P(He(E.duration)),1)):Xe("",!0)],2)],10,Qf))),128))])],512),m("audio",{ref_key:"audioEl",ref:he,class:"radio__audio",preload:"none","aria-hidden":"true",onPlay:z,onPause:J,onEnded:B,onError:V},null,544)])]))}},rm=Ci(sm,[["__scopeId","data-v-954c419a"]]),om=`# Composer fact sheets

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

## Jean-Philippe Rameau essentials {#jean-philippe-rameau}

Name (ru): Жан-Филипп Рамо

- Who he was: French Baroque composer and one of the great musical thinkers of the 18th century - famous both for his operas and his music theory.
- Harmony game-changer: His 1722 Treatise on Harmony (Traite de l'harmonie) helped codify functional harmony and bass thinking - it became a landmark for how Western musicians talk about chords.
- Late opera breakout: He became an overnight sensation in Paris as an opera composer in his 50s, starting with Hippolyte et Aricie (1733) - and immediately sparked heated debates.
- The Paris music wars: His bold harmony and orchestration divided audiences into "Lullistes" vs "Ramistes" - basically a full-on cultural fight about tradition vs innovation.
- Dance and color: Works like Les Indes galantes are packed with irresistible dance numbers and vivid orchestral color - Rameau treated the orchestra like a painter treats light.
- Castor et Pollux: Often seen as his operatic masterpiece - it combines high drama with refined French vocal writing and some of the most moving choral scenes in Baroque opera.
- Keyboard gems: His harpsichord pieces are full of character portraits and effects (think "La Poule" - The Hen) and influenced later keyboard writing.
- Lost-and-found finale: His last opera, Les Boreades, was never staged in his lifetime and only entered the repertoire much later - one of those weird historical twists.

## Jean-Philippe Rameau essentials (ru) {#jean-philippe-rameau}

- Кем он был: Французский композитор барокко и один из главных музыкальных мыслителей XVIII века - знаменит и операми, и теорией музыки.
- Перевернул представление о гармонии: Его трактат 1722 года Traite de l'harmonie помог систематизировать функциональную гармонию и мышление баса - это веха в том, как в западной традиции говорят об аккордах.
- Поздний прорыв в опере: В Париже он стал сенсацией как оперный композитор уже за 50, начиная с Hippolyte et Aricie (1733) - и сразу вызвал бурные споры.
- Парижские музыкальные войны: Его смелая гармония и оркестровка раскололи публику на "Lullistes" и "Ramistes" - фактически культурный спор о традиции и новаторстве.
- Танец и краски: Вещи вроде Les Indes galantes полны танцевальных номеров и яркой оркестровой палитры - Рамо обращался с оркестром как художник со светом.
- Castor et Pollux: Часто считается его оперным шедевром - высокая драма, изящная французская вокальная линия и одни из самых трогательных хоровых сцен в барочной опере.
- Клавесинные жемчужины: Его пьесы для клавесина полны "портретов" и звуковых эффектов (например, "La Poule" - "Курица") и повлияли на дальнейшее развитие клавишной музыки.
- Финал с сюрпризом: Его последняя опера Les Boreades не была поставлена при его жизни и вошла в репертуар намного позже - один из странных исторических поворотов.

## Jean-Philippe Rameau essentials (de) {#jean-philippe-rameau}

- Wer er war: Franzoesischer Barockkomponist und einer der grossen musikalischen Denker des 18. Jahrhunderts - beruehmt sowohl fuer seine Opern als auch fuer seine Musiktheorie.
- Harmonielehre als Wendepunkt: Sein Traite de l'harmonie (1722) half, funktionale Harmonik und Generalbass-Denken zu systematisieren - ein Meilenstein dafuer, wie in der westlichen Tradition ueber Akkorde gesprochen wird.
- Spaeter Opern-Durchbruch: In Paris wurde er als Opernkomponist erst in seinen 50ern zur Sensation, beginnend mit Hippolyte et Aricie (1733) - und loeste sofort heftige Debatten aus.
- Pariser Musikstreit: Seine kuehne Harmonik und Orchestrierung spalteten das Publikum in "Lullistes" und "Ramistes" - ein Kulturkampf zwischen Tradition und Innovation.
- Tanz und Klangfarben: Werke wie Les Indes galantes sind voll von mitreissenden Taenzen und leuchtender Orchesterfarbe - Rameau behandelte das Orchester wie ein Maler das Licht.
- Castor et Pollux: Hauefig als sein Opernmeisterwerk angesehen - grosse Dramatik, feine franzoesische Vokallinien und einige der bewegendsten Chorszenen der Barockoper.
- Cembalo-Schaetze: Seine Cembalostuecke sind voller Charakterportraets und Klangideen (z.B. "La Poule" - "Das Huhn") und beeinflussten spaetere Tastenmusik.
- Spaetes Wiederentdecken: Seine letzte Oper Les Boreades wurde zu seinen Lebzeiten nicht aufgefuehrt und kam erst viel spaeter ins Repertoire - einer dieser kuriosen historischen Drehungen.

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


## Hector Berlioz essentials (ru) {#hector-berlioz}

- Кем он был: Французский композитор и дирижер романтизма, один из пионеров масштабной программной симфонической музыки.
- Symphonie fantastique: Его самое известное произведение - революционная программная симфония с навязчивым, почти сновидческим сюжетом и повторяющейся idee fixe.
- Оркестровое воображение: Он расширил размеры, краски и возможности оркестра, позже изложив это в своей Treatise on Instrumentation.

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
- Влияние: Позднейшие русские композиторы, особенно из содружества "Могучая кучка", воспринимали его музыку как отправную точку для развития национального стиля.

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

## Richard Strauss essentials {#richard-strauss}

Name (ru): Рихард Штраус

- Who he was: German late-Romantic / early-modern composer and one of the great conductors of his era, famous for dazzling orchestration and high drama.
- Tone poems blockbuster: He became a star with orchestral tone poems (Tondichtungen) like Also sprach Zarathustra, Don Juan and Ein Heldenleben - showpieces for huge orchestra and vivid storytelling.
- Opera shockwaves: His operas Salome and Elektra pushed harmony, psychology and intensity to the edge; later he turned to warmer, more lyrical works like Der Rosenkavalier.
- Dream team with Hofmannsthal: Many of his greatest stage works were created with the writer Hugo von Hofmannsthal - a partnership often compared to Mozart and Da Ponte.
- Late masterpieces: In his final years he wrote deeply reflective music such as Metamorphosen and the Four Last Songs, often heard as a farewell to a vanished world.
- Complicated politics: His position in German musical life during the Nazi period remains controversial - he was briefly head of the Reichsmusikkammer and later fell out with the regime; historians still debate motives and responsibility.

## Richard Strauss essentials (ru) {#richard-strauss}

- Кем он был: Немецкий композитор позднего романтизма и раннего модерна и один из крупнейших дирижеров своей эпохи; знаменит блестящей оркестровкой и театральной силой.
- Хиты-симфонические поэмы: Он прославился оркестровыми симфоническими поэмами (Tondichtungen) - Also sprach Zarathustra, Don Juan, Ein Heldenleben - это виртуозные «витрины» для огромного оркестра и яркого сюжета.
- Оперные шок-волны: Его оперы Salome и Elektra довели гармонию, психологизм и напряжение до предела; позже он повернул к более теплому и лирическому театру - например Der Rosenkavalier.
- Союз с Гофмансталем: Многие важнейшие оперы он создал вместе с писателем Хуго фон Гофмансталем - это сотрудничество часто сравнивают с дуэтом Моцарта и да Понте.
- Поздние шедевры: В конце жизни он написал очень созерцательные вещи - Metamorphosen и Four Last Songs - которые часто воспринимают как прощание с ушедшей эпохой.
- Сложная политика: Его роль в музыкальной жизни Германии при нацистском режиме остается спорной - он недолго возглавлял Reichsmusikkammer и позже вошел в конфликт с властями; мотивы и ответственность до сих пор обсуждаются.


## Richard Strauss essentials (de) {#richard-strauss}

- Wer er war: Deutscher Komponist der Spaetromantik und fruehen Moderne und einer der bedeutendsten Dirigenten seiner Zeit - beruehmt fuer brillante Orchestrierung und starkes Musiktheater.
- Tondichtungen als Hits: Beruehmt wurde er mit sinfonischen Dichtungen wie Also sprach Zarathustra, Don Juan und Ein Heldenleben - echte Orchester-Showpieces mit riesiger Besetzung und plastischem Erzaehlen.
- Opern, die schockierten: Salome und Elektra trieben Harmonik, Psychologie und Intensitaet an die Grenze; spaeter schrieb er waermere, lyrischere Opern wie Der Rosenkavalier.
- Duo mit Hofmannsthal: Viele seiner wichtigsten Buehnenwerke entstanden mit Hugo von Hofmannsthal - eine Partnerschaft, die oft mit Mozart und Da Ponte verglichen wird.
- Spaete Meisterwerke: In den letzten Jahren entstanden nachdenkliche Werke wie Metamorphosen und die Vier letzten Lieder - oft gehoert als Abschied von einer verschwundenen Welt.
- Schwierige Politik: Seine Rolle im Musikleben waehrend der NS-Zeit ist bis heute umstritten - er war kurz Praesident der Reichsmusikkammer und geriet spaeter mit dem Regime in Konflikt; Motive und Verantwortung werden weiter diskutiert.

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

- Who he was: Russian composer and professor of organic chemistry, a member of "The Five".
- Double life: He taught and did research in St Petersburg, and composed mostly in his limited spare time.
- Prince Igor: Left unfinished at his death; later completed/orchestrated by Rimsky-Korsakov and Glazunov - the "Polovtsian Dances" became a standalone hit.
- Chamber music favorite: His String Quartet No. 2 contains the famous "Nocturne", often played separately.
- Symphonic postcard: In the Steppes of Central Asia is a compact orchestral tone poem that became a classic of musical storytelling.
- Beyond music: He actively supported women’s higher education in Russia and helped organise early medical courses for women in St Petersburg.


## Alexander Borodin essentials (ru) {#alexander-borodin}

- Кем он был: Русский композитор и профессор органической химии, участник содружества композиторов «Могучая кучка».
- Двойная жизнь: В будни - лекции и лаборатория в Петербурге, а музыку он писал в основном по вечерам и урывками, между научной работой.
- «Князь Игорь»: Опера осталась незавершенной; после смерти Бородина ее дописывали и оркестровали Римский-Корсаков и Глазунов, а «Половецкие пляски» стали отдельным концертным хитом.
- Камерный хит: Во 2-м струнном квартете есть знаменитый «Ноктюрн» - его часто исполняют отдельно.
- Симфоническая «открытка»: «В степях Средней Азии» - короткая оркестровая пьеса с очень наглядным, почти кинематографичным рассказом.
- Не только музыка: Он поддерживал женское высшее образование и помогал организовывать медицинские курсы для женщин в Петербурге.

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

- Who he was: Russian composer and member of "The Five", a key figure of Russian musical realism.
- Speech-like melody: He shaped vocal lines to sound like natural Russian speech, which makes scenes in his operas feel startlingly alive.
- Boris Godunov: His most famous opera exists in multiple author versions; today theaters often perform editions closer to Mussorgsky’s rough, original intent.
- Pictures at an Exhibition: Written as a piano suite; later orchestrations (especially Ravel’s) helped turn it into a worldwide orchestral hit.
- Dark song cycle: Songs and Dances of Death is one of his most powerful works - stark, dramatic and psychologically intense.
- Afterlife of the scores: Friends and later composers (notably Rimsky-Korsakov, and later Shostakovich) edited/orchestrated unfinished or “raw” manuscripts - and that sparked long debates about what the “true” Mussorgsky sound is.



## Modest Mussorgsky essentials (ru) {#modest-mussorgsky}

- Кем он был: Русский композитор и участник содружества «Могучая кучка» - ключевая фигура русского музыкального реализма.
- «Речевая» мелодика: Он строил вокальные линии так, чтобы они звучали как живая русская речь - поэтому сцены в его операх ощущаются особенно правдиво.
- «Борис Годунов»: Его главная опера существует в нескольких авторских редакциях; сегодня часто стремятся играть версии, ближе к «сырому» замыслу Мусоргского.
- «Картинки с выставки»: Изначально это фортепианная сюита; поздние оркестровки (особенно Равеля) превратили её в мировой оркестровый хит.
- Мрачный вокальный цикл: «Песни и пляски смерти» - одна из самых сильных его вещей, жёсткая, драматичная и психологически точная.
- Судьба рукописей: Друзья и позднейшие композиторы (в частности Римский-Корсаков, а позже и Шостакович) редактировали и оркестровали незавершённые или «черновые» партитуры - и это породило споры о том, как на самом деле должен звучать Мусоргский.

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

- Кем он был: Русский композитор, педагог и мастер оркестровки, также участник содружества композиторов "Могучая кучка".
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

- Wer er war: Russischer Komponist und Professor fuer organische Chemie, Mitglied des "maechtigen Haeufleins" ("Die Fuenf").
- Doppelleben: Tagsueber Forschung und Lehre in St Petersburg, komponiert hat er meist nur in knapper Freizeit.
- Fuerst Igor: Bei seinem Tod unvollendet; spaeter von Rimsky-Korsakov und Glazunov vervollstaendigt/orchestriert - die "Polowetzer Taenze" wurden zum eigenstaendigen Konzert-Hit.
- Kammermusik-Liebling: Sein Streichquartett Nr. 2 enthaelt das beruehmte "Nocturne", das oft separat gespielt wird.
- Sinfonische Postkarte: In the Steppes of Central Asia ist eine kurze sinfonische Dichtung, ein Klassiker des musikalischen Erzaehlens.
- Mehr als Musik: Er unterstuetzte aktiv die hoehere Bildung fuer Frauen und half bei der Organisation frueher medizinischer Kurse fuer Frauen in St Petersburg.

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

- Wer er war: Russischer Komponist und Mitglied der "Fuenf" - eine Schluesselfigur des russischen musikalischen Realismus.
- Sprachnahe Melodik: Er formte Gesangslinien nach dem Rhythmus gesprochener russischer Sprache - dadurch wirken seine Opernszenen ungewoehnlich direkt und lebendig.
- Boris Godunov: Seine beruehmteste Oper existiert in mehreren Autor-Fassungen; heute werden oft Editionen gespielt, die Mussorgskys rauer Originalidee naeherstehen.
- Bilder einer Ausstellung: Urspruenglich eine Klaviersuite; spaetere Orchestrierungen (besonders die von Ravel) machten das Werk weltweit zum Orchester-Hit.
- Dunkler Liederzyklus: Songs and Dances of Death zaehlt zu seinen eindringlichsten Werken - karg, dramatisch und psychologisch scharf.
- Nachleben der Partituren: Freunde und spaetere Komponisten (vor allem Rimsky-Korsakov, spaeter auch Shostakovich) editierten und orchestrierten unvollendete oder "rohe" Manuskripte - bis heute ein Streitpunkt, wie der "echte" Mussorgsky klingen soll.

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

## Gioachino Rossini essentials {#gioachino-rossini}

Name (ru): Джоаккино Россини

- Who he was: Italian composer, the superstar of early 19th-century opera, famous for wit, energy and vocal brilliance.
- The Barber and beyond: The Barber of Seville is his most universal hit, but works like La Cenerentola and William Tell also remain staples.
- The Rossini crescendo: He loved building excitement by repeating a phrase while gradually adding instruments and volume - a signature sound.
- Opera factory years: In his 20s he produced operas at a stunning pace, becoming Europe’s most in-demand opera composer.
- Early retirement: After William Tell (1829) he largely stopped writing operas and lived for decades in Paris, composing occasional late works.
- Sacred comeback: Late masterpieces like the Stabat Mater and the Petite messe solennelle show a different, more reflective Rossini.


## Gioachino Rossini essentials (ru) {#gioachino-rossini}

- Кем он был: Итальянский композитор - суперзвезда оперы начала XIX века, известный остроумием, энергией и вокальной виртуозностью.
- «Севильский цирюльник» и не только: Его самый универсальный хит - The Barber of Seville, но La Cenerentola и William Tell тоже остаются в репертуаре.
- «Крещендо Россини»: Он любил наращивать азарт повторами одной фразы с постепенным добавлением инструментов и громкости - фирменный прием.
- Годы «оперной фабрики»: В 20-е годы жизни он писал оперы с невероятной скоростью и стал самым востребованным оперным автором Европы.
- Ранний уход: После William Tell (1829) он почти перестал писать оперы и десятилетиями жил в Париже, сочиняя лишь изредка.
- Духовное возвращение: Поздние шедевры - Stabat Mater и Petite messe solennelle - показывают другого, более созерцательного Россини.


## Gioachino Rossini essentials (de) {#gioachino-rossini}

- Wer er war: Italienischer Komponist - Superstar der fruehen Oper des 19. Jahrhunderts, beruehmt fuer Witz, Energie und vokale Brillanz.
- Der Barbier und mehr: Il barbiere di Siviglia ist sein universellster Hit, aber La Cenerentola und Guillaume Tell gehoeren ebenfalls zu seinen Klassikern.
- Das Rossini-Crescendo: Er steigerte Spannung gern durch Wiederholung einer Phrase, waehrend Instrumente und Lautstaerke schrittweise zunehmen - ein Markenzeichen.
- Opern im Akkord: In seinen Zwanzigern schrieb er Opern in rasantem Tempo und wurde zum gefragtesten Opernkomponisten Europas.
- Frueher Rueckzug: Nach Guillaume Tell (1829) hoerte er weitgehend auf, Opern zu schreiben, und lebte jahrzehntelang in Paris.
- Spaete geistliche Werke: Spaetwerke wie das Stabat Mater und die Petite messe solennelle zeigen einen anderen, nachdenklicheren Rossini.


## George Gershwin essentials {#george-gershwin}

Name (ru): Джордж Гершвин

- Who he was: American composer and songwriter who fused concert-hall writing with jazz, blues and Broadway.
- Rhapsody in Blue: His breakout hit - instantly recognizable, and a symbol of the sound of 1920s America.
- Symphonic jazz: Works like Concerto in F and An American in Paris brought jazz-inflected rhythms and harmonies into orchestral form.
- Porgy and Bess: His opera (often called a "folk opera") produced standards like "Summertime" and became a landmark of American stage music.
- Died young: He died at 38, which froze his output at a shockingly early peak.
- Why he matters: He helped make American popular idioms legitimate material for big classical forms.


## George Gershwin essentials (ru) {#george-gershwin}

- Кем он был: Американский композитор и автор песен, соединивший академическую музыку с джазом, блюзом и Бродвеем.
- Rhapsody in Blue: Его прорывной хит - мгновенно узнаваемый символ звучания Америки 1920-х.
- «Симфоджаз»: Произведения вроде Concerto in F и An American in Paris привнесли джазовые ритмы и гармонии в оркестровую форму.
- Porgy and Bess: Его опера (ее часто называют "folk opera") дала миру стандарты вроде "Summertime" и стала вехой американского музыкального театра.
- Ранняя смерть: Он умер в 38 лет - очень рано, на пике.
- Почему он важен: Он показал, что американские популярные интонации могут стать материалом для больших классических форм.


## George Gershwin essentials (de) {#george-gershwin}

- Wer er war: US-amerikanischer Komponist und Songwriter, der Konzertsaal-Musik mit Jazz, Blues und Broadway verband.
- Rhapsody in Blue: Sein Durchbruch - sofort wiedererkennbar und ein Symbol fuer den Sound der 1920er in Amerika.
- Symphonic Jazz: Werke wie das Concerto in F und An American in Paris brachten jazznahe Rhythmen und Harmonik in orchestrale Formen.
- Porgy and Bess: Seine Oper (oft "folk opera" genannt) brachte Standards wie "Summertime" hervor und ist ein Meilenstein des amerikanischen Musiktheaters.
- Frueher Tod: Er starb mit 38 - erschreckend jung, auf dem Hoehepunkt.
- Warum er wichtig ist: Er machte amerikanische Pop-Idiome zu legitimen Bausteinen grosser "klassischer" Formen.


## Igor Stravinsky essentials {#igor-stravinsky}

Name (ru): Игорь Стравинский

- Who he was: Russian-born composer whose career reshaped 20th-century music; later lived in France and the United States.
- Ballet revolution: The Firebird, Petrushka and The Rite of Spring (for Diaghilev’s Ballets Russes) changed rhythm, orchestral color and musical modernism.
- Rite of Spring scandal: The 1913 premiere became notorious for the shock of its sound and choreography - a landmark cultural moment.
- Many styles, one brain: He moved from Russian folk-modernism to neoclassicism, and later explored serial techniques - always with razor-sharp clarity.
- Master of rhythm: His music is famous for pulse, accents and "machine-like" precision - even when it sounds playful.
- Influence: Few composers impacted film music, concert music and modern composition culture as strongly as Stravinsky.


## Igor Stravinsky essentials (ru) {#igor-stravinsky}

- Кем он был: Русский композитор, который радикально изменил музыку XX века; позже жил во Франции и США.
- Революция балета: The Firebird, Petrushka и The Rite of Spring (для Ballets Russes Дягилева) перевернули ритм, оркестровый цвет и язык модернизма.
- Скандал «Весны»: Премьера 1913 года стала легендарной - публику шокировали и музыка, и хореография; это культурная веха.
- Много стилей - один мозг: Он прошел путь от фольклорно-модернистской манеры к неоклассицизму, а затем к серийным техникам - сохраняя жесткую ясность.
- Мастер ритма: Его музыка знаменита пульсом, акцентами и почти «машинной» точностью - даже когда звучит игриво.
- Влияние: Немногие композиторы так сильно повлияли и на академическую музыку, и на кино, и на современную композиторскую культуру.


## Igor Stravinsky essentials (de) {#igor-stravinsky}

- Wer er war: In Russland geboren; praegte die Musik des 20. Jahrhunderts wie kaum ein anderer und lebte spaeter in Frankreich und den USA.
- Ballett-Revolution: The Firebird, Petrushka und The Rite of Spring (fuer Diaghilevs Ballets Russes) veraenderten Rhythmus, Orchesterfarbe und musikalische Moderne.
- Skandal um Le sacre: Die Urauffuehrung 1913 wurde beruehmt-beruechtigt - Klang und Choreografie schockierten; ein kultureller Wendepunkt.
- Viele Stile, ein Kopf: Vom russischen Folk-Modernismus ueber Neoklassizismus bis zu seriellen Techniken - immer mit messerscharfer Klarheit.
- Rhythmus-Meister: Seine Musik lebt von Puls, Akzenten und fast "maschineller" Praezision - auch wenn sie verspielt wirkt.
- Einfluss: Stravinsky praegte Konzertmusik, Filmmusik und die moderne Kompositionskultur aussergewoehnlich stark.


## Bedřich Smetana essentials {#bedrich-smetana}

Name (ru): Бедржих Сметана

- Who he was: Czech composer, often seen as a founder of Czech national music in the 19th century.
- Ma vlast: His cycle Ma vlast (My Homeland) includes the famous tone poem Vltava ("The Moldau"), one of the most recognizable orchestral pieces ever.
- Czech opera hit: The Bartered Bride became the classic Czech comic opera, full of dance rhythms and national color.
- Deafness: Like Beethoven, he became deaf later in life, yet continued composing major works.
- National voice: He helped turn Czech language, folklore and landscape into concert-hall symbols.


## Bedřich Smetana essentials (ru) {#bedrich-smetana}

- Кем он был: Чешский композитор, которого часто считают одним из основателей чешской национальной музыки XIX века.
- Ma vlast: Его цикл Ma vlast ("My Homeland") включает знаменитую симфоническую поэму Vltava ("The Moldau") - одну из самых узнаваемых оркестровых пьес.
- Хит чешской оперы: The Bartered Bride - классическая чешская комическая опера, насыщенная танцевальными ритмами и национальным колоритом.
- Глухота: Как и Бетховен, он позднее потерял слух, но продолжал писать крупные произведения.
- Национальный голос: Он превратил чешский язык, фольклор и пейзаж в символы концертной музыки.


## Bedřich Smetana essentials (de) {#bedrich-smetana}

- Wer er war: Tschechischer Komponist, oft als einer der Begruender der tschechischen Nationalmusik des 19. Jahrhunderts gesehen.
- Ma vlast: Sein Zyklus Ma vlast ("Mein Vaterland") enthaelt die beruehmte sinfonische Dichtung Vltava ("Die Moldau") - eines der wiedererkennbarsten Orchesterstuecke.
- Opernklassiker: Die verkaufte Braut ist die klassische tschechische komische Oper - voll mit Tanzrhythmen und nationalem Kolorit.
- Taubheit: Wie Beethoven wurde er spaeter taub, komponierte aber weiterhin bedeutende Werke.
- Nationale Stimme: Er machte tschechische Sprache, Folklore und Landschaft zu Symbolen der Konzertmusik.


## Jean Sibelius essentials {#jean-sibelius}

Name (ru): Ян Сибелиус

- Who he was: Finnish composer whose music became closely tied to Finland’s national identity.
- Finlandia: His tone poem Finlandia is a global emblem of Nordic orchestral sound and political-cultural symbolism.
- Symphony builder: His seven symphonies created a highly personal symphonic language - often described as "organic" growth from small motives.
- Violin Concerto: His Violin Concerto is one of the most performed and loved violin concertos of the 20th-century repertoire.
- Silence later on: After his Seventh Symphony and Tapiola he wrote little publicly for decades, becoming famous for a long "silence" at Ainola.


## Jean Sibelius essentials (ru) {#jean-sibelius}

- Кем он был: Финский композитор, чья музыка стала тесно связана с национальной идентичностью Финляндии.
- Finlandia: Его симфоническая поэма Finlandia - мировой символ северного оркестрового звучания и культурно-политического знака.
- Симфонист-строитель: Семь его симфоний создали очень личный симфонический язык - его часто описывают как «органический» рост из малых мотивов.
- Скрипичный концерт: Его Violin Concerto - один из самых исполняемых и любимых скрипичных концертов репертуара XX века.
- Долгое молчание: После Seventh Symphony и Tapiola он почти ничего не публиковал десятилетиями - легендарное «молчание» в Айноле.


## Jean Sibelius essentials (de) {#jean-sibelius}

- Wer er war: Finnischer Komponist, dessen Musik eng mit der nationalen Identitaet Finnlands verbunden ist.
- Finlandia: Seine sinfonische Dichtung Finlandia wurde weltweit zum Symbol nordischen Orchesterklangs und kultureller Bedeutung.
- Sinfoniker: Seine sieben Sinfonien schufen eine sehr persoenliche Sinfonik - oft als "organisches" Wachsen aus kleinen Motiven beschrieben.
- Violinkonzert: Sein Violinkonzert ist eines der meistgespielten und beliebtesten Konzerte des 20.-Jahrhundert-Repertoires.
- Lange Stille: Nach der 7. Sinfonie und Tapiola veröffentlichte er jahrzehntelang kaum Neues - beruehmt wurde die "Stille" in Ainola.


## Carl Orff essentials {#carl-orff}

Name (ru): Карл Орф

- Who he was: German composer best known for powerful choral-orchestral music and for his influential music education approach.
- Carmina Burana: His 1936 cantata Carmina Burana (especially "O Fortuna") is one of the most recognizable pieces in modern classical culture.
- Primal energy: His style often emphasizes rhythm, percussion, chant-like melodies and a ritual, theatrical atmosphere.
- Stage works: He also wrote other scenic cantatas like Catulli Carmina and Trionfo di Afrodite, often grouped with Carmina Burana.
- Orff-Schulwerk: His music education method Orff-Schulwerk shaped classroom music-making worldwide, focusing on movement, speech and percussion.


## Carl Orff essentials (ru) {#carl-orff}

- Кем он был: Немецкий композитор, известный прежде всего мощной хорово-оркестровой музыкой и влиятельной педагогикой.
- Carmina Burana: Его кантата Carmina Burana (особенно "O Fortuna") - одна из самых узнаваемых пьес в современной классической культуре.
- Первобытная энергия: Его стиль часто строится на ритме, ударных, почти речитативной мелодике и ритуально-театральной атмосфере.
- Сценические кантаты: Он написал и другие сценические кантаты - Catulli Carmina и Trionfo di Afrodite - их часто объединяют с Carmina Burana.
- Orff-Schulwerk: Его метод музыкального образования Orff-Schulwerk повлиял на обучение музыке во всем мире - движение, речь и ударные как основа.


## Carl Orff essentials (de) {#carl-orff}

- Wer er war: Deutscher Komponist, beruehmt fuer wuchtige Chor-Orchester-Musik und fuer einen weltweit einflussreichen musikpaedagogischen Ansatz.
- Carmina Burana: Seine Kantate Carmina Burana (besonders "O Fortuna") gehoert zu den wiedererkennbarsten Stuecken der modernen Klassik.
- Archaische Energie: Sein Stil betont oft Rhythmus, Schlagwerk, gesangnahe Linien und eine rituell-theatralische Atmosphaere.
- Szenische Kantaten: Er schrieb weitere szenische Kantaten wie Catulli Carmina und Trionfo di Afrodite, haeufig zusammen mit Carmina Burana genannt.
- Orff-Schulwerk: Sein paedagogisches Konzept Orff-Schulwerk praegte Musikunterricht weltweit - Bewegung, Sprache und Perkussion als Basis.`,am={class:"app"},lm={class:"topbar"},um={class:"language-switcher"},cm={class:"visually-hidden",for:"language-select"},dm=["aria-label"],hm=["value"],fm={class:"menu-nav"},mm={class:"content"},pm={key:0},gm={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},vm={class:"filter-dock__header"},bm=["aria-pressed","aria-label"],ym=["src"],wm={key:0,class:"filter-dock__body"},_m={class:"filter-dock__body-inner"},km={class:"nav-controls",role:"group","aria-label":"Timeline navigation and zoom"},Sm=["disabled"],Tm=["disabled"],Cm=["disabled"],Em=["disabled"],Lm={class:"filter-panel",role:"group","aria-label":"Composer filters"},zm={class:"filter-panel__options"},Mm=["onUpdate:modelValue","aria-label"],xm={class:"filter-panel__label"},Pm={class:"composer-modal__content"},Am={class:"composer-modal__header"},Rm={class:"composer-modal__titles"},Im={class:"composer-modal__name"},Om={key:0,class:"composer-modal__dates"},Fm={class:"composer-modal__header-actions"},Nm=["aria-label"],Dm={key:0,class:"composer-modal__share-feedback"},Hm={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},Wm=["disabled"],Bm={class:"composer-modal__position"},Km=["disabled"],$m={class:"composer-modal__body"},jm={key:0,class:"composer-modal__hero"},Gm=["src","alt"],Vm={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},qm=["disabled"],Um={class:"composer-modal__position"},Jm=["disabled"],Xm={class:"composer-modal__hero-meta"},Ym={class:"composer-modal__name-small"},Qm={key:0,class:"composer-modal__dates-small"},Zm={class:"composer-modal__playlist"},ep={class:"composer-modal__playlist-header"},np={class:"composer-modal__playlist-title"},tp={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},ip=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],sp={class:"sc-player__status"},rp={class:"sc-player__status-text"},op={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},ap={class:"composer-modal__description"},lp={key:0,class:"composer-modal__facts-title"},up={key:1,class:"composer-modal__facts"},cp={class:"composer-modal__fact-text"},dp={key:2,class:"composer-modal__muted"},Ht="en",Bo="timeline-language",Ko="timeline-language-user-set",$o="timeline-filter-groups",Ki="/composer/",$i=25,jo=150,js=.2,Go=1.5,hp=.35,Gs=1.45,Vo=.5,fp=.6,ji=1,pn=12,Vs=35,qs=8,mp=320,pp="(max-width: 720px), (pointer: coarse)",gp=.88,vp=1.12,Gi=6,bp=520,yp=2,wp={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",radio:"Radio",about:"About",quiz:"Check your knowledge"},modal:{keyWorks:"Key works to know"},share:{button:"Share",copied:"Link copied"},soundcloud:{loading:"Loading tracks from SoundCloud..."},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended"},apply:"Apply",minimizeControls:"Hide timeline controls",restoreControls:"Show timeline controls"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",radio:"Radio",about:"Über das Projekt",quiz:"Wissen testen"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},share:{button:"Teilen",copied:"Link kopiert"},soundcloud:{loading:"Tracks von SoundCloud werden geladen..."},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden",minimizeControls:"Steuerungselemente ausblenden",restoreControls:"Steuerungselemente anzeigen"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",radio:"Радио",about:"О проекте",quiz:"Проверьте знания"},modal:{keyWorks:"Ключевые произведения"},share:{button:"Поделиться",copied:"Ссылка скопирована"},soundcloud:{loading:"Загружаем треки из SoundCloud..."},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить",minimizeControls:"Скрыть панель управления",restoreControls:"Показать панель управления"}}},t=Object.keys(n),i=ue(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=ue(Ht),a=ue(!1),l=W(()=>!a.value),u=W(()=>n[r.value]||n.en),g=W(()=>t.map(o=>({value:o,label:n[o]?.label||o.toUpperCase()}))),h=W(()=>u.value.appTitle),v=W(()=>u.value.languageLabel||"Language"),T=W(()=>u.value.navigation||n.en.navigation),A=W(()=>u.value.eras||n.en.eras),M=W(()=>u.value.soundcloud||n.en.soundcloud||{}),q=W(()=>M.value.loading||"Loading tracks from SoundCloud..."),he=W(()=>u.value.composers||{}),F=W(()=>{const o=he.value.names||{},d={};return Object.entries(o).forEach(([p,w])=>{d[we(p)]=w}),d}),K=W(()=>{const o={};return Object.entries(vt||{}).forEach(([d,p])=>{const w=we(d),O=p?.[r.value];if(O){o[w]=O;return}r.value==="en"&&p?.en&&(o[w]=p.en)}),o}),te=W(()=>({...K.value,...F.value})),G=W(()=>u.value.filter||n.en.filter),be=W(()=>({essentials:G.value.groups?.essentials||"Essential Icons",core:G.value.groups?.core||"Core Classics",expanded:G.value.groups?.expanded||"Extended Classics"})),ee=W(()=>{const o=he.value.descriptions||{},d={};return Object.entries(o).forEach(([p,w])=>{d[we(p)]=w}),d}),Z=W(()=>{const o=he.value.factsTitles||{},d={};return Object.entries(o).forEach(([p,w])=>{d[we(p)]=w}),d}),ne=W(()=>u.value.modal||n.en.modal),$=W(()=>u.value.share||n.en.share),re=ue(!1),U=ue("composers"),N=[43,50,65],ce=[30,35,45],_e="".replace(/\/$/,""),D="https://soundcloud.com/dmitry-kotikov/sets/",ge="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",ve=new Set;function je(o,d,p){return Number.isNaN(o)?d:Math.min(p,Math.max(d,o))}function me(o){const d=je((o-$i)/(jo-$i),0,1),p=Math.pow(d,hp),w=js+(Go-js)*p;return je(w,js,Go)}function Me(o){const d=je((o-$i)/(jo-$i),0,1),p=Math.pow(d,fp),w=Gs-(Gs-Vo)*p;return je(w,Vo,Gs)}const Ee=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Claude Debussy","Sergei Rachmaninoff"]},{id:"core",label:"Core Classics",composers:["Johannes Brahms","Giuseppe Verdi","Richard Strauss","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet","Gioachino Rossini","Dmitri Shostakovich","Sergei Prokofiev","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Erik Satie","Joseph Haydn"]},{id:"expanded",label:"Extended Classics",composers:["Jean-Philippe Rameau","Niccolò Paganini","Hector Berlioz","Jacques Offenbach","Alexander Scriabin","George Gershwin","Igor Stravinsky","Jean Sibelius","Carl Orff"]}];function nn(){return Ee.reduce((o,d)=>(o[d.id]=d.id!=="expanded",o),{})}function ke(o){const d=nn();return!o||typeof o!="object"||Ee.forEach(p=>{const w=o[p.id];typeof w=="boolean"&&(d[p.id]=w)}),d}const Ge=ue(nn()),Ye=W(()=>{const o=u.value.filter||{};return{minimize:o.minimizeControls||"Hide timeline controls",restore:o.restoreControls||"Show timeline controls"}}),He=ue(null),Qe=ue(pn),We=ue(null);let kn=0;const wn=ue(!1);let c=null;function f(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia(pp).matches}const y=ue("bottom-left"),k=Mt({active:!1,pointerId:null,startX:0,startY:0,startLeft:0,startTop:0,element:null}),C=W(()=>{const o={left:`${Qe.value}px`,transition:k.active?"none":"left 360ms cubic-bezier(0.22, 0.61, 0.36, 1)"};return We.value!=null&&(o.top=`${We.value}px`),o}),S=Mt({active:!1,startDistance:0});function I(o,d){const p=o.clientX-d.clientX,w=o.clientY-d.clientY;return Math.hypot(p,w)}const R=Mt({barHeight:N[ji],widthScale:me(ce[ji]),fontScale:Me(N[ji])}),x=ue(ji),z=W(()=>x.value<=0),J=W(()=>x.value>=N.length-1),B=ue(!0),V=ue(!1);function oe(o){const d=je(o,0,N.length-1);x.value=d;const p=N[d];R.barHeight=p,R.widthScale=me(ce[d]),R.fontScale=Me(p)}function ae(o){const d=o>0?1:-1;oe(x.value+d)}function ye(){const o=document.getElementById("timeline");if(!o)return;const d=Math.max(0,o.scrollWidth-o.clientWidth),p=Math.max(0,o.scrollHeight-o.clientHeight);B.value=o.scrollLeft<=Gi&&o.scrollTop<=Gi,V.value=o.scrollLeft>=d-Gi&&o.scrollTop>=p-Gi}async function Se(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),ye(),await cn(),Zt()}async function b(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),ye(),await cn(),Ts()}function _(o,{left:d,top:p,duration:w=bp}={}){const O=o.scrollLeft,Y=o.scrollTop,pe=Number.isFinite(d)?d:O,De=Number.isFinite(p)?p:Y,Ae=pe-O,Ne=De-Y;if(!Ae&&!Ne)return;const mn=performance.now(),Je=tn=>{const Sn=tn-mn,Ze=Math.min(1,Sn/w),sn=Ze<.5?4*Ze*Ze*Ze:1-Math.pow(-2*Ze+2,3)/2;o.scrollLeft=O+Ae*sn,o.scrollTop=Y+Ne*sn,Ze<1&&requestAnimationFrame(Je)};requestAnimationFrame(Je)}async function E(){if(U.value!=="composers"||!Te.value.length)return;await cn();const o=document.getElementById("timeline");if(!o)return;const d=o.querySelector('.bar[data-lane-index="0"]');if(!d)return;const p=o.getBoundingClientRect(),w=d.getBoundingClientRect();let O=o.scrollLeft,Y=o.scrollTop;const pe=p.left+yp,De=w.left-pe;if(O=Math.max(0,o.scrollLeft+De),w.top<p.top||w.bottom>p.bottom){const Ae=w.top-p.top;Y=Math.max(0,o.scrollTop+Ae)}_(o,{left:O,top:Y}),ye()}async function j(){await E()}const de=W(()=>{const o=Ee.map(p=>p.id).filter(p=>Ge.value[p]),d=new Set;return o.forEach(p=>{Ee.find(O=>O.id===p)?.composers?.forEach(O=>d.add(O))}),d}),Te=W(()=>{const o=de.value;return o.size?Pn.filter(d=>o.has(d.name)):[]}),le=W(()=>[...Te.value].sort((o,d)=>o.birth-d.birth).map(o=>({...o,displayName:Xt(o.name)}))),{descriptionsByLocale:Oe,playlistIdsByKey:tt,namesByLocale:vt}=ks(om),xe=ue(null),An=ue(!1),At=ue("");let $n=null;const Jt=W(()=>xe.value!==null),Be=W(()=>xe.value===null?null:le.value[xe.value]),Rt=W(()=>Be.value?Xt(Be.value.name):""),Ei=W(()=>Be.value?il(Be.value.name):null),Li=W(()=>Be.value?Mi(Be.value.name):""),zi=W(()=>Be.value?Ss(Be.value.name):""),ws=W(()=>Be.value?dl(Be.value.name):[]),L=W(()=>ws.value.map(o=>xl(o)).filter(Boolean)),H=W(()=>{const o=L.value.filter(Boolean);return o.length?o:[ge]}),X=W(()=>(xe.value??0)>0),Pe=W(()=>xe.value!==null&&xe.value<le.value.length-1);function we(o){return o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Rn(o){return we(o).replace(/\s+/g,"-")}function Ue(o){const d=Rn(o);return`${Ki}${encodeURIComponent(d)}`}function it(o){return o.startsWith(Ki)?o.slice(Ki.length):""}function un(o){const d=we(String(o||"").replace(/-/g," ")),p=Pn.find(w=>we(w.name)===d);return p?p.name:""}function fn(o){if(!o)return;const d=Ee.find(p=>p.composers.includes(o));!d||Ge.value[d.id]||(Ge.value={...Ge.value,[d.id]:!0})}async function bt(o=window.location.pathname){An.value=!0;try{xi(o);const d=it(o);if(!d){xe.value=null;return}const p=decodeURIComponent(d),w=un(p);if(!w){xe.value=null;return}fn(w),await cn();const O=le.value.findIndex(Y=>Y.name===w);xe.value=O>=0?O:null}finally{An.value=!1}}function _s(o){if(!o||typeof window>"u")return"";const d=Ue(o);return new URL(d,window.location.origin).toString()}async function It(){if(!Be.value)return;const o=_s(Be.value.name);if(!o)return;const d=Rt.value||Be.value.name;try{if(navigator.share){await navigator.share({title:d,url:o});return}}catch(p){if(p?.name!=="AbortError")console.warn("Share failed, falling back to clipboard",p);else return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(o);else{const p=document.createElement("textarea");p.value=o,p.setAttribute("readonly","true"),p.style.position="absolute",p.style.left="-9999px",document.body.appendChild(p),p.select(),document.execCommand("copy"),document.body.removeChild(p)}At.value=$.value.copied||"Link copied",$n&&clearTimeout($n),$n=setTimeout(()=>{At.value="",$n=null},2200)}catch(p){console.warn("Failed to copy share link",p)}}function Xt(o){const d=we(o);return te.value[d]||o}function Yt(o){return be.value[o]||o}function ks(o){const d=o.split(`
`),p={},w={},O={};let Y=null,pe=null,De=null,Ae="en",Ne=[];const mn=()=>{(Y||pe)&&[Y,pe].filter(Boolean).forEach(tn=>{p[tn]=p[tn]||{},p[tn][Ae]=Ne.join(`
`).trim(),De&&(O[tn]=De)}),Ne=[],De=null,pe=null};for(const Je of d){const tn=Je.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(tn){mn();const[,Ze,sn,Ft]=tn;Y=we(Ft||Ze),pe=we(Ze),Ae=(sn||"en").toLowerCase(),De=Ft||null;continue}const Sn=Y?Je.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(Sn){const[,Ze,sn]=Sn,Ft=(Ze||Ae||"en").toLowerCase(),Oi=sn.trim();[Y,pe].filter(Boolean).forEach(rn=>{w[rn]=w[rn]||{},w[rn][Ft]=Oi});continue}Y&&Je.startsWith("- ")&&Ne.push(Je.replace(/^- /,"").trim())}return mn(),{descriptionsByLocale:p,playlistIdsByKey:O,namesByLocale:w}}function Mi(o){const d=ll(o),p=we(o),w=ee.value[p];if(w)return w;const O=d[r.value];return O||(d.en?d.en:Object.values(d)[0]||"")}function Ss(o){const d=Z.value[we(o)];return d||cl(o)}function al(o,d){const p=we(d);if(o[p])return o[p];const w=p.split(" ").filter(Boolean),O=w[w.length-1];return O&&o[O]?o[O]:""}function ll(o){const d=we(o),p=d.split(" ").filter(Boolean),w=[d],O=p[p.length-1];O&&O!==d&&w.push(O);for(const Y of w)if(Oe[Y])return Oe[Y];return{}}function ul(o){return we(o).replace(/\s+/g,"-").replace(/-+/g,"-")}function cl(o){const d=s[r.value]||s.en,p=r.value==="ru"?Xt(o):"";if(r.value==="ru"&&p)return`${p} - ${d}`;const w=String(o||"").trim().split(/\s+/).filter(Boolean);if(!w.length)return"";const O=w[w.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(O)&&w.length>=2?w[w.length-2]:O} ${d}`}function dl(o){const d=[],p=ul(o);p&&!d.includes(p)&&d.push(p);const w=al(tt,o);return w&&!d.includes(w)&&d.push(w),d}function xi(o=window.location.pathname){if(o.startsWith(Ki)){U.value="composers";return}if(o==="/about"){U.value="about";return}if(o==="/radio"){U.value="radio";return}if(o==="/quiz"){U.value="quiz";return}U.value="composers"}const xr=()=>bt();function Qt(o){window.location.pathname!==o&&(history.pushState({},"",o),xi(o)),re.value=!1}function Pi(o){if(o==="about"){Qt("/about");return}if(o==="radio"){Qt("/radio");return}if(o==="quiz"){Qt("/quiz");return}Qt("/")}function hl(){re.value=!re.value}function fl(){re.value=!1}function Pr(o){wn.value!==o&&(wn.value=o)}function ml(){Pr(!wn.value)}function Ai(){if(typeof document>"u")return 0;const o=document.querySelector(".topbar");return o&&o.offsetHeight?o.offsetHeight:0}function st(){if(typeof window>"u")return{width:0,height:0,offsetLeft:0,offsetTop:0};const o=window.visualViewport;return o?{width:o.width,height:o.height,offsetLeft:o.offsetLeft||0,offsetTop:o.offsetTop||0}:{width:window.innerWidth,height:window.innerHeight,offsetLeft:0,offsetTop:0}}function rt(o){const d=He.value;if(!d||typeof window>"u")return o;const{width:p,offsetLeft:w}=st(),O=w+pn,Y=Math.max(O,w+p-d.offsetWidth-pn);return Math.min(Math.max(o,O),Y)}function jn(o){const d=He.value;if(!d||typeof window>"u")return o;const{height:p,offsetTop:w}=st(),O=Math.max(Ai()+pn,w+pn),Y=Math.max(O,w+p-d.offsetHeight-pn);return Math.min(Math.max(o,O),Y)}function Ot(){const o=He.value;if(We.value==null&&o&&typeof window<"u"){const{height:d,offsetTop:p}=st();We.value=jn(p+d-o.offsetHeight-24)}Qe.value=rt(Qe.value),We.value!=null&&(We.value=jn(We.value))}function Ts(){Ot(),y.value="top-right";const d=He.value?.offsetWidth||0,{width:p,offsetLeft:w,offsetTop:O}=st();Qe.value=rt(w+p-d-pn);const Y=Ai()+Vs+qs;We.value=jn(O+Y)}function Zt(){Ot(),y.value="bottom-left";const d=He.value?.offsetHeight||0,{height:p,offsetTop:w}=st();Qe.value=rt(pn),We.value=jn(w+p-d-pn)}function Ar(){Ot(),y.value="top-left";const{offsetTop:o}=st(),d=Ai()+Vs+qs;Qe.value=rt(pn),We.value=jn(o+d)}function Rr(){Ot(),y.value="bottom-right";const o=He.value,d=o?.offsetWidth||0,p=o?.offsetHeight||0,{width:w,height:O,offsetLeft:Y,offsetTop:pe}=st();Qe.value=rt(Y+w-d-pn),We.value=jn(pe+O-p-pn)}function pl(){const o=He.value;if(!o)return;const{width:d,height:p,offsetLeft:w,offsetTop:O}=st(),Y=Ai()+Vs+qs,pe=rt(pn),De=rt(w+d-o.offsetWidth-pn),Ae=jn(O+Y),Ne=jn(O+p-o.offsetHeight-pn),mn=Qe.value,Je=We.value??0,tn=[{anchor:"top-left",dx:mn-pe,dy:Je-Ae},{anchor:"top-right",dx:mn-De,dy:Je-Ae},{anchor:"bottom-left",dx:mn-pe,dy:Je-Ne},{anchor:"bottom-right",dx:mn-De,dy:Je-Ne}];tn.sort((Ze,sn)=>Ze.dx*Ze.dx+Ze.dy*Ze.dy-(sn.dx*sn.dx+sn.dy*sn.dy));const Sn=tn[0]?.anchor;if(Sn==="top-left"){Ar();return}if(Sn==="top-right"){Ts();return}if(Sn==="bottom-left"){Zt();return}Rr()}function Ir(o){if(!k.active||o.pointerId!==k.pointerId)return;o.preventDefault();const d=o.clientX-k.startX,p=o.clientY-k.startY;Qe.value=rt(k.startLeft+d),We.value!=null&&(We.value=jn(k.startTop+p))}function Or(){window.removeEventListener("pointermove",Ir),window.removeEventListener("pointerup",Ri),window.removeEventListener("pointercancel",Ri)}function Fr(o){const d=k.element;if(k.active=!1,k.element=null,k.pointerId=null,d?.releasePointerCapture&&o!=null)try{d.releasePointerCapture(o)}catch{}}function Ri(o){!k.active||o.pointerId!==k.pointerId||(Or(),Fr(o.pointerId),pl())}function gl(){k.active&&(Or(),Fr(k.pointerId))}function vl(o){const d=o.timeStamp||Date.now();d-kn<=mp&&o.preventDefault(),kn=d}function bl(o){if(k.active||o.pointerType==="mouse"&&o.button!==0)return;const d=o.target;if(d&&typeof d.closest=="function"&&d.closest("button, a, input, select, textarea, label, [role='button'], .filter-panel"))return;Ot(),y.value="free",o.preventDefault(),k.active=!0,k.pointerId=o.pointerId,k.startX=o.clientX,k.startY=o.clientY,k.startLeft=Qe.value,k.startTop=We.value??0,k.element=He.value;const w=He.value;if(w?.setPointerCapture)try{w.setPointerCapture(o.pointerId)}catch{}window.addEventListener("pointermove",Ir),window.addEventListener("pointerup",Ri),window.addEventListener("pointercancel",Ri)}function Nr(o){!o||!o.touches||o.touches.length===2&&(S.active=!0,S.startDistance=I(o.touches[0],o.touches[1]))}function Dr(o){if(!S.active||!o||!o.touches||o.touches.length!==2)return;o.preventDefault();const d=I(o.touches[0],o.touches[1]),p=S.startDistance||d,w=p?d/p:1;if(w>=vp){ae(1),S.startDistance=d;return}w<=gp&&(ae(-1),S.startDistance=d)}function Ii(o){(o?.touches?.length??0)<2&&(S.active=!1,S.startDistance=0)}function Hr(){f()&&!wn.value&&Pr(!0)}function Wr(){Zt()}function yl(){Gn()}function Gn(){if(y.value==="top-left"){Ar();return}if(y.value==="top-right"){Ts();return}if(y.value==="bottom-right"){Rr();return}if(y.value==="bottom-left"){Zt();return}Ot()}function ei(o,{persist:d=!1}={}){const p=t.includes(o)?o:Ht;if(r.value=p,d)try{localStorage.setItem(Bo,p),localStorage.setItem(Ko,"1")}catch{}}function wl(o){i.value=!0,ei(o,{persist:!0})}function _l(o){const d=o?.target?.value;d&&wl(d)}function kl(){try{return localStorage.getItem(Bo)}catch{return null}}function Sl(){try{const o=localStorage.getItem($o);return o?ke(JSON.parse(o)):null}catch{return null}}function Tl(){const o=Sl();o&&(Ge.value=o)}function Cl(){try{return localStorage.getItem(Ko)==="1"}catch{return!1}}function El(){const o=kl(),d=Cl();if(ei(Ht),o&&d&&t.includes(o)){i.value=!0,ei(o);return}Ll()}async function Ll(){const o=!i.value;o||(r.value,void 0);const d=[zl,Ml];for(const p of d){const w=await p();if(w){const O=String(w).toUpperCase();if(!o)return;const Y=O==="RU"?"ru":["DE","AT","CH"].includes(O)?"de":Ht;ei(Y);return}}o&&ei(Ht)}async function zl(){try{const o=await fetch("https://ipapi.co/json/");return o.ok&&(await o.json())?.country_code||null}catch(o){console.warn("ipapi lookup failed:",o)}return null}async function Ml(){try{const o=await fetch("https://ipwho.is/");return o.ok&&(await o.json())?.country_code||null}catch(o){console.warn("ipwho.is lookup failed:",o)}return null}function kp(o,d){}function Br(){Qt("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function Cs(o){const d=o.detail,p=d?.laneIndex;if(Number.isInteger(p)&&le.value[p]){xe.value=p;return}const w=d?.composer?.name;if(!w)return;const O=le.value.findIndex(Y=>Y.name===w);O>=0&&(xe.value=O)}function Kr(){xe.value=null}function $r(){!X.value||xe.value===null||(xe.value-=1)}function jr(){!Pe.value||xe.value===null||(xe.value+=1)}Si(async()=>{El(),Tl(),await bt(),await cn(),Zt(),typeof ResizeObserver<"u"&&(c=new ResizeObserver(yl),He.value&&c.observe(He.value)),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(Cs),window.addEventListener("popstate",xr),window.addEventListener("composer-select",Cs),window.addEventListener("resize",Gn),window.visualViewport&&(window.visualViewport.addEventListener("resize",Gn),window.visualViewport.addEventListener("scroll",Gn)),Gn();const o=document.getElementById("timeline");o&&(o.addEventListener("scroll",ye,{passive:!0}),o.addEventListener("timeline-pan-start",Hr),o.addEventListener("touchstart",Nr,{passive:!0}),o.addEventListener("touchmove",Dr,{passive:!1}),o.addEventListener("touchend",Ii,{passive:!0}),o.addEventListener("touchcancel",Ii,{passive:!0}),ye())}),Ut(()=>{window.removeEventListener("popstate",xr),window.removeEventListener("composer-select",Cs),window.removeEventListener("resize",Gn),window.visualViewport&&(window.visualViewport.removeEventListener("resize",Gn),window.visualViewport.removeEventListener("scroll",Gn)),c&&(c.disconnect(),c=null),gl(),$n&&(clearTimeout($n),$n=null);const o=document.getElementById("timeline");o&&(o.removeEventListener("scroll",ye),o.removeEventListener("timeline-pan-start",Hr),o.removeEventListener("touchstart",Nr),o.removeEventListener("touchmove",Dr),o.removeEventListener("touchend",Ii),o.removeEventListener("touchcancel",Ii))}),Ke(h,o=>{o&&(document.title=o)},{immediate:!0}),Ke(Ge,o=>{try{localStorage.setItem($o,JSON.stringify(o))}catch{}},{deep:!0}),Ke(r,async o=>{const d=t.includes(o)?o:Ht;if(d!==o){r.value=d;return}try{document.documentElement.setAttribute("data-lang",d)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(A.value),await cn(),Gn()}),Ke(Jt,async o=>{o?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await cn(),H.value.length&&Vr()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",Gr())}),Ke(xe,o=>{const d=window.timeline;!d||typeof d.setSelectedLane!="function"||(Number.isInteger(o)?d.setSelectedLane(o):d.setSelectedLane(null))}),Ke(xe,o=>{if(An.value)return;if(Number.isInteger(o)&&le.value[o]){const p=le.value[o].name,w=Ue(p);window.location.pathname!==w&&(history.pushState({},"",w),xi(w));return}const d=U.value==="about"?"/about":U.value==="radio"?"/radio":U.value==="quiz"?"/quiz":"/";window.location.pathname!==d&&(history.replaceState({},"",d),xi(d))}),Ke(H,async o=>{Jt.value&&(Gr(),await cn(),o.length&&Vr())}),Ke(()=>le.value.map(o=>o.name),o=>{if(xe.value===null)return;const d=Be.value;if(!d){xe.value=null;return}const p=o.findIndex(w=>w===d.name);p===-1?xe.value=null:xe.value=p});function Es(o){return o?_e?_e.endsWith("/")&&o.startsWith("/")?_e+o.slice(1):!_e.endsWith("/")&&!o.startsWith("/")?`${_e}/${o}`:_e+o:o:_e}function xl(o){if(!o)return"";const d=D;if(!d)return"";const p=d.endsWith("/");return`${d}${p?"":"/"}${o}`}function Gr(){ve.forEach(o=>{try{o.pause(),o.currentTime=0}catch(d){console.error("Failed to stop SoundCloud audio",d)}}),ve.clear()}function Vr(o,d=document){const w=(d||document).querySelectorAll("[data-soundcloud-playlist]");w.length&&(w.length,w.forEach(O=>{Pl(O,()=>{})}))}async function Pl(o,d){const p=()=>{typeof d=="function"&&setTimeout(()=>d(),0)};if(!o||o.dataset.soundcloudReady==="true"||o.dataset.soundcloudReady==="loading"||o.dataset.soundcloudReady==="error"){p();return}const w=o.getAttribute("data-soundcloud-playlist"),O=o.getAttribute("data-soundcloud-playlist-alt")||"",Y=[w,...O.split("|")].map(Ae=>(Ae||"").trim()).filter(Boolean);if(!Y.length){p();return}o.dataset.soundcloudReady="loading",o.innerHTML=Al();let pe=null;for(const Ae of Y)try{const Ne=await Il(Ae),mn=Array.isArray(Ne.tracks)&&Ne.tracks.length?Ne.tracks:Ne&&Ne.kind==="track"?[Ne]:[],Je=Ol(mn);Dl(o,Je,Ae),p();return}catch(Ne){if(pe=Ne,Ne&&Ne.status===429){qr(o,Ae),p();return}}console.error("Failed to build SoundCloud player",pe);const De=Y[0]||ge;qr(o,De),p()}function Al(){return`
    <div class="sc-player__status">
      <span class="sc-player__spinner" aria-hidden="true"></span>
      <span class="sc-player__status-text">${q.value}</span>
    </div>
  `.trim()}async function Rl(o){if(!o)throw new Error("No track provided");const d=o.media&&Array.isArray(o.media.transcodings)?o.media.transcodings:[];if(d.length){let p=d.find(w=>w&&w.format&&w.format.protocol==="progressive");if(p||(p=d[0]),p&&p.url)try{const w=await Fl(p.url,o.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:o.id,transcodingUrl:p.url,finalUrl:w}),w}catch(w){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",w)}}if(!o.id)throw new Error("No track id provided");return Nl(o.id,o.track_authorization)}async function Il(o){const d=new URLSearchParams({url:o});a.value&&d.set("test_features","1");const p=Es("/api/soundcloud/playlist")+`?${d.toString()}`,w=await fetch(p);if(!w.ok){const O=new Error(`SoundCloud playlist error: ${w.status}`);throw O.status=w.status,O.retryAfter=Number(w.headers?.get("Retry-After"))||void 0,O}return w.json()}function Ol(o=[]){return Array.isArray(o)?o.map((d,p)=>{if(!d)return null;const w=`Track ${p+1}`,Y=[d.title,d.publisher_metadata?.release_title,d.permalink,d.permalink_url,d.id?String(d.id):null].map(pe=>typeof pe=="string"?pe.trim():"").filter(Boolean)[0]||w;return{...d,title:Y}}).filter(Boolean):[]}async function Fl(o,d){const p=new URLSearchParams;p.set("url",o),d&&p.set("track_authorization",d),l.value&&p.set("proxy","1");const w=Es("/api/soundcloud/transcoding")+`?${p.toString()}`,O=await fetch(w);if(!O.ok){const pe=new Error(`SoundCloud transcoding error: ${O.status}`);throw pe.status=O.status,pe.retryAfter=Number(O.headers?.get("Retry-After"))||void 0,pe}const Y=await O.json();if(!Y?.url)throw new Error("Transcoding response missing url");return Y.url}async function Nl(o,d){const p=new URLSearchParams;d&&p.set("track_authorization",d),l.value&&p.set("proxy","1");const w=p.toString(),O=Es(`/api/soundcloud/streams/${o}`)+(w?`?${w}`:""),Y=await fetch(O);if(!Y.ok){const De=new Error(`SoundCloud stream error: ${Y.status}`);throw De.status=Y.status,De.retryAfter=Number(Y.headers?.get("Retry-After"))||void 0,De}const pe=await Y.json();if(!pe?.url)throw new Error("Stream response missing url");return pe.url}function qr(o,d){const p=`https://w.soundcloud.com/player/?url=${encodeURIComponent(d)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;o.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${p}"
    ></iframe>
  `,o.dataset.soundcloudReady="true"}function Dl(o,d,p){if(!Array.isArray(d)||!d.length){o.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',o.dataset.soundcloudReady="error";return}o.classList.add("sc-player");const w=document.createElement("div");w.className="sc-track-list";const O=document.createElement("audio");O.preload="none",ve.add(O);let Y=null,pe=null,De=null,Ae=null,Ne=!1;const mn=[],Je=[],tn=(Ce,rn)=>{Ce.dataset.state=rn,Ce.textContent=rn==="playing"?"⏸":rn==="loading"?"...":"▶️"},Sn=(Ce,rn)=>{Ce&&Ce.classList.toggle("is-playing",rn)},Ze=Ce=>{if(!Ce)return;const rn=Ce.querySelector(".sc-track__title-text"),In=Ce.querySelector(".sc-track__title-text-wrap");if(!rn)return;const on=In?In.clientWidth:Ce.clientWidth,Tn=rn.scrollWidth-on;Tn>4?(Ce.dataset.scroll="true",Ce.style.setProperty("--scroll-distance",`${Tn}px`)):(Ce.dataset.scroll="false",Ce.style.removeProperty("--scroll-distance"))},sn=Ce=>tn(Ce,"idle"),Ft=()=>{pe&&sn(pe),Ae&&Sn(Ae,!1),Y=null,pe=null,De=null,Ae=null};O.addEventListener("ended",()=>{const Ce=De===null?-1:De+1;if(Ce>=0&&Ce<d.length){Oi(Ce,{auto:!0});return}Ft()}),O.addEventListener("pause",()=>{pe&&O.currentTime<(O.duration||1/0)&&sn(pe),Ae&&Sn(Ae,!1)});const Oi=async(Ce,{auto:rn=!1}={})=>{if(Ne)return;const In=d[Ce],on=mn[Ce];if(!(!In||!on)){if(!rn&&De===Ce&&!O.paused){O.pause(),sn(on);return}Ne=!0,tn(on,"loading");try{const Tn=await Rl(In);if(!Tn)throw new Error("No stream URL returned");O.src=Tn,await O.play(),Hl(In),pe&&pe!==on&&sn(pe),pe=on,Y=In?.id??Ce,De=Ce,Ae&&Ae!==Je[Ce]&&Sn(Ae,!1),Ae=Je[Ce]||null,Sn(Ae,!0),tn(on,"playing")}catch(Tn){console.error("Failed to play SoundCloud track",Tn),sn(on),o.dataset.soundcloudReady="error"}finally{Ne=!1}}};d.forEach((Ce,rn)=>{const In=document.createElement("div");In.className="sc-track";const on=document.createElement("button");on.type="button",on.className="sc-track__button",on.setAttribute("aria-label","Play track"),tn(on,"idle"),mn.push(on);const Tn=document.createElement("div");Tn.className="sc-track__title";const Ls=document.createElement("span");Ls.className="sc-track__title-text-wrap";const zs=document.createElement("span");zs.className="sc-track__title-text",zs.textContent=Ce?.title||`Track ${rn+1}`,Ls.append(zs),Tn.append(Ls);const Ur=Ce?.full_duration??Ce?.duration;if(Ur){const Ms=document.createElement("span");Ms.className="sc-track__duration",Ms.textContent=Wl(Ur),Tn.append(Ms)}Je.push(Tn),In.append(on,Tn),w.append(In),on.addEventListener("click",()=>{Oi(rn)})}),o.innerHTML="",o.append(w,O),requestAnimationFrame(()=>{Je.forEach(Ce=>Ze(Ce))}),o.dataset.soundcloudReady="true"}function Hl(o){if(!("mediaSession"in navigator)||typeof MediaMetadata>"u")return;const d=o?.title||"Classical Music",p=o?.publisher_metadata?.artist||o?.user?.username||o?.user?.full_name||"",w=o?.publisher_metadata?.album_title||"";navigator.mediaSession.metadata=new MediaMetadata({title:d,artist:p,album:w,artwork:[{src:"/images/about_music_logo_padding.png",type:"image/png"}]})}function Wl(o){const d=Math.max(0,Math.floor((o||0)/1e3)),p=Math.floor(d/3600),w=Math.floor(d%3600/60),O=d%60,Y=pe=>String(pe).padStart(2,"0");return p>0?`${p}:${Y(w)}:${Y(O)}`:`${w}:${Y(O)}`}return(o,d)=>(Q(),ie("div",am,[m("header",lm,[m("button",{class:"menu-button",onClick:hl,"aria-label":"Toggle navigation menu"},[...d[8]||(d[8]=[m("span",{class:"menu-icon"},null,-1)])]),m("img",{class:"logo",src:vd,alt:"Logo",onClick:Br}),m("div",{class:"app-title",role:"button",onClick:Br},P(h.value),1),m("div",um,[m("label",cm,P(v.value),1),ts(m("select",{id:"language-select",class:"language-select","onUpdate:modelValue":d[0]||(d[0]=p=>r.value=p),"aria-label":v.value,onChange:_l},[(Q(!0),ie(en,null,mt(g.value,p=>(Q(),ie("option",{key:p.value,value:p.value},P(p.label),9,hm))),128))],40,dm),[[ld,r.value]])])]),m("aside",{class:Ve(["side-menu",{"side-menu--open":re.value}])},[m("nav",fm,[m("button",{class:Ve(["menu-item",{"menu-item--active":U.value==="composers"}]),onClick:d[1]||(d[1]=p=>Pi("composers"))},P(T.value.composers),3),m("button",{class:Ve(["menu-item",{"menu-item--active":U.value==="radio"}]),onClick:d[2]||(d[2]=p=>Pi("radio"))},P(T.value.radio),3),m("button",{class:Ve(["menu-item",{"menu-item--active":U.value==="quiz"}]),onClick:d[3]||(d[3]=p=>Pi("quiz"))},P(T.value.quiz),3),m("button",{class:Ve(["menu-item",{"menu-item--active":U.value==="about"}]),onClick:d[4]||(d[4]=p=>Pi("about"))},P(T.value.about),3)])],2),re.value?(Q(),ie("div",{key:0,class:"backdrop",onClick:fl})):Xe("",!0),m("main",mm,[U.value==="composers"?(Q(),ie("section",pm,[m("div",{class:"filter-dock",style:Lt(C.value),ref_key:"filterDockRef",ref:He,onPointerdown:bl,onTouchend:vl},[m("div",gm,[m("div",vm,[m("button",{type:"button",class:"filter-dock__collapse control-btn","aria-pressed":wn.value,"aria-label":wn.value?Ye.value.restore:Ye.value.minimize,onClick:ml},[m("img",{src:wn.value?"/images/window-maximize.svg":"/images/window-minimize.svg",alt:"","aria-hidden":"true"},null,8,ym)],8,bm)]),hn(po,{name:"filter-dock-collapse",onAfterEnter:Wr,onAfterLeave:Wr},{default:Zs(()=>[wn.value?Xe("",!0):(Q(),ie("div",wm,[m("div",_m,[m("div",km,[m("button",{type:"button",class:"control-btn",disabled:B.value,onClick:Se,"aria-label":"Jump to start of timeline"}," ⇤ ",8,Sm),m("button",{type:"button",class:"control-btn",disabled:z.value,onClick:d[5]||(d[5]=p=>ae(-1)),"aria-label":"Make timeline blocks smaller"},[...d[9]||(d[9]=[m("img",{class:"control-icon",src:bd,alt:"","aria-hidden":"true"},null,-1)])],8,Tm),m("button",{type:"button",class:"control-btn",disabled:J.value,onClick:d[6]||(d[6]=p=>ae(1)),"aria-label":"Make timeline blocks larger"},[...d[10]||(d[10]=[m("img",{class:"control-icon",src:yd,alt:"","aria-hidden":"true"},null,-1)])],8,Cm),m("button",{type:"button",class:"control-btn",disabled:V.value,onClick:b,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Em)]),m("div",Lm,[m("div",zm,[(Q(),ie(en,null,mt(Ee,p=>m("label",{key:p.id,class:"filter-panel__item"},[ts(m("input",{"onUpdate:modelValue":w=>Ge.value[p.id]=w,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${Yt(p.id)}`,onChange:j},null,40,Mm),[[Lr,Ge.value[p.id]]]),m("span",xm,P(Yt(p.id)),1)])),64))])])])]))]),_:1})])],36),hn(Bd,{composers:le.value,settings:R,"era-labels":A.value},null,8,["composers","settings","era-labels"])])):U.value==="radio"?(Q(),Ui(rm,{key:1,language:r.value,"composer-names":te.value},null,8,["language","composer-names"])):U.value==="about"?(Q(),Ui(lh,{key:2,language:r.value,"test-features-enabled":a.value,"onUpdate:testFeaturesEnabled":d[7]||(d[7]=p=>a.value=p)},null,8,["language","test-features-enabled"])):U.value==="quiz"?(Q(),Ui(wf,{key:3,language:r.value,"composer-names":te.value,"era-labels":A.value},null,8,["language","composer-names","era-labels"])):Xe("",!0)]),hn(po,{name:"fade"},{default:Zs(()=>[Jt.value?(Q(),ie("div",{key:0,class:"composer-modal",onClick:dd(Kr,["self"])},[m("div",Pm,[m("header",Am,[m("div",Rm,[m("h2",Im,P(Rt.value),1),Be.value?(Q(),ie("p",Om,P(Be.value.birth)+" — "+P(Be.value.death),1)):Xe("",!0)]),m("div",Fm,[m("button",{class:"composer-modal__share",type:"button",onClick:It,"aria-label":$.value.button},[...d[11]||(d[11]=[m("img",{class:"composer-modal__share-icon",src:wd,alt:""},null,-1)])],8,Nm),At.value?(Q(),ie("span",Dm,P(At.value),1)):Xe("",!0),m("div",Hm,[m("button",{class:"composer-modal__arrow",onClick:$r,disabled:!X.value,"aria-label":"Previous"}," ← ",8,Wm),m("span",Bm,P((xe.value??0)+1)+" / "+P(le.value.length),1),m("button",{class:"composer-modal__arrow",onClick:jr,disabled:!Pe.value,"aria-label":"Next"}," → ",8,Km)]),m("button",{class:"composer-modal__close",onClick:Kr,"aria-label":"Close composer details"},"×")])]),m("div",$m,[Ei.value?(Q(),ie("div",jm,[m("img",{class:"composer-modal__photo",src:Ei.value,alt:Rt.value},null,8,Gm),m("div",Vm,[m("button",{class:"composer-modal__arrow",onClick:$r,disabled:!X.value,"aria-label":"Previous"}," ← ",8,qm),m("span",Um,P((xe.value??0)+1)+" / "+P(le.value.length),1),m("button",{class:"composer-modal__arrow",onClick:jr,disabled:!Pe.value,"aria-label":"Next"}," → ",8,Jm)]),m("div",Xm,[m("div",Ym,P(Rt.value),1),Be.value?(Q(),ie("div",Qm,P(Be.value.birth)+" — "+P(Be.value.death),1)):Xe("",!0)])])):Xe("",!0),m("div",Zm,[m("div",ep,[m("div",np,P(ne.value.keyWorks),1),H.value.length?(Q(),ie("a",tp,[...d[12]||(d[12]=[m("img",{class:"sc-powered__img",src:_d,alt:"Powered by SoundCloud"},null,-1)])])):Xe("",!0)]),H.value.length?(Q(),ie("div",{key:H.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":H.value[0],"data-soundcloud-playlist-alt":H.value.slice(1).join("|")},[m("div",sp,[d[13]||(d[13]=m("span",{class:"sc-player__spinner","aria-hidden":"true"},null,-1)),m("span",rp,P(q.value),1)])],8,ip)):(Q(),ie("div",op," Playlist will appear here soon. "))]),m("div",ap,[zi.value?(Q(),ie("div",lp,P(zi.value),1)):Xe("",!0),Li.value?(Q(),ie("ul",up,[(Q(!0),ie(en,null,mt(Li.value.split(`
`),(p,w)=>(Q(),ie("li",{key:w},[m("span",cp,P(p),1)]))),128))])):(Q(),ie("p",dp,"No description yet."))])])])])):Xe("",!0)]),_:1})]))}},_p=Ci(wp,[["__scopeId","data-v-80df4f2a"]]);md(_p).mount("#app");
