(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ri(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const ue={},Yn=[],ln=()=>{},Rr=()=>!1,cs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),oi=e=>e.startsWith("onUpdate:"),Ee=Object.assign,ai=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},va=Object.prototype.hasOwnProperty,ie=(e,n)=>va.call(e,n),D=Array.isArray,Zn=e=>Lt(e)==="[object Map]",it=e=>Lt(e)==="[object Set]",Hi=e=>Lt(e)==="[object Date]",$=e=>typeof e=="function",ye=e=>typeof e=="string",cn=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Ir=e=>(le(e)||$(e))&&$(e.then)&&$(e.catch),Fr=Object.prototype.toString,Lt=e=>Fr.call(e),ya=e=>Lt(e).slice(8,-1),Hr=e=>Lt(e)==="[object Object]",li=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mt=ri(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),us=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},wa=/-\w/g,zn=us(e=>e.replace(wa,n=>n.slice(1).toUpperCase())),ka=/\B([A-Z])/g,Vn=us(e=>e.replace(ka,"-$1").toLowerCase()),Nr=us(e=>e.charAt(0).toUpperCase()+e.slice(1)),Es=us(e=>e?`on${Nr(e)}`:""),Ln=(e,n)=>!Object.is(e,n),$t=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Or=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},Wr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Sa=e=>{const n=ye(e)?Number(e):NaN;return isNaN(n)?e:n};let Ni;const ds=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ci(e){if(D(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],i=ye(s)?Ea(s):ci(s);if(i)for(const r in i)n[r]=i[r]}return n}else if(ye(e)||le(e))return e}const _a=/;(?![^(]*\))/g,Ca=/:([^]+)/,Ta=/\/\*[^]*?\*\//g;function Ea(e){const n={};return e.replace(Ta,"").split(_a).forEach(t=>{if(t){const s=t.split(Ca);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Qn(e){let n="";if(ye(e))n=e;else if(D(e))for(let t=0;t<e.length;t++){const s=Qn(e[t]);s&&(n+=s+" ")}else if(le(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const xa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ma=ri(xa);function Br(e){return!!e||e===""}function La(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=zt(e[s],n[s]);return t}function zt(e,n){if(e===n)return!0;let t=Hi(e),s=Hi(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=cn(e),s=cn(n),t||s)return e===n;if(t=D(e),s=D(n),t||s)return t&&s?La(e,n):!1;if(t=le(e),s=le(n),t||s){if(!t||!s)return!1;const i=Object.keys(e).length,r=Object.keys(n).length;if(i!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=n.hasOwnProperty(o);if(a&&!l||!a&&l||!zt(e[o],n[o]))return!1}}return String(e)===String(n)}function ui(e,n){return e.findIndex(t=>zt(t,n))}const Dr=e=>!!(e&&e.__v_isRef===!0),oe=e=>ye(e)?e:e==null?"":D(e)||le(e)&&(e.toString===Fr||!$(e.toString))?Dr(e)?oe(e.value):JSON.stringify(e,Kr,2):String(e),Kr=(e,n)=>Dr(n)?Kr(e,n.value):Zn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,i],r)=>(t[xs(s,r)+" =>"]=i,t),{})}:it(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>xs(t))}:cn(n)?xs(n):le(n)&&!D(n)&&!Hr(n)?String(n):n,xs=(e,n="")=>{var t;return cn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let We;class za{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!n&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=We;try{return We=this,n()}finally{We=t}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){this._on>0&&--this._on===0&&(We=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Aa(){return We}let he;const Ms=new WeakSet;class jr{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ms.has(this)&&(Ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oi(this),$r(this);const n=he,t=Ye;he=this,Ye=!0;try{return this.fn()}finally{Ur(this),he=n,Ye=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)hi(n);this.deps=this.depsTail=void 0,Oi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){js(this)&&this.run()}get dirty(){return js(this)}}let Vr=0,pt,gt;function Gr(e,n=!1){if(e.flags|=8,n){e.next=gt,gt=e;return}e.next=pt,pt=e}function di(){Vr++}function fi(){if(--Vr>0)return;if(gt){let n=gt;for(gt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;pt;){let n=pt;for(pt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function $r(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ur(e){let n,t=e.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),hi(s),Pa(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=n,e.depsTail=t}function js(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Jr(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Jr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kt)||(e.globalVersion=kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!js(e))))return;e.flags|=2;const n=e.dep,t=he,s=Ye;he=e,Ye=!0;try{$r(e);const i=e.fn(e._value);(n.version===0||Ln(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{he=t,Ye=s,Ur(e),e.flags&=-3}}function hi(e,n=!1){const{dep:t,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)hi(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pa(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Ye=!0;const qr=[];function bn(){qr.push(Ye),Ye=!1}function vn(){const e=qr.pop();Ye=e===void 0?!0:e}function Oi(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=he;he=void 0;try{n()}finally{he=t}}}let kt=0;class Ra{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class mi{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!he||!Ye||he===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==he)t=this.activeLink=new Ra(he,this),he.deps?(t.prevDep=he.depsTail,he.depsTail.nextDep=t,he.depsTail=t):he.deps=he.depsTail=t,Xr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=he.depsTail,t.nextDep=void 0,he.depsTail.nextDep=t,he.depsTail=t,he.deps===t&&(he.deps=s)}return t}trigger(n){this.version++,kt++,this.notify(n)}notify(n){di();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{fi()}}}function Xr(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)Xr(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Vs=new WeakMap,Kn=Symbol(""),Gs=Symbol(""),St=Symbol("");function xe(e,n,t){if(Ye&&he){let s=Vs.get(e);s||Vs.set(e,s=new Map);let i=s.get(t);i||(s.set(t,i=new mi),i.map=s,i.key=t),i.track()}}function pn(e,n,t,s,i,r){const o=Vs.get(e);if(!o){kt++;return}const a=l=>{l&&l.trigger()};if(di(),n==="clear")o.forEach(a);else{const l=D(e),h=l&&li(t);if(l&&t==="length"){const u=Number(s);o.forEach((p,_)=>{(_==="length"||_===St||!cn(_)&&_>=u)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),h&&a(o.get(St)),n){case"add":l?h&&a(o.get("length")):(a(o.get(Kn)),Zn(e)&&a(o.get(Gs)));break;case"delete":l||(a(o.get(Kn)),Zn(e)&&a(o.get(Gs)));break;case"set":Zn(e)&&a(o.get(Kn));break}}fi()}function Jn(e){const n=se(e);return n===e?n:(xe(n,"iterate",St),Ue(e)?n:n.map(Ze))}function fs(e){return xe(e=se(e),"iterate",St),e}function _n(e,n){return yn(e)?jn(e)?st(Ze(n)):st(n):Ze(n)}const Ia={__proto__:null,[Symbol.iterator](){return Ls(this,Symbol.iterator,e=>_n(this,e))},concat(...e){return Jn(this).concat(...e.map(n=>D(n)?Jn(n):n))},entries(){return Ls(this,"entries",e=>(e[1]=_n(this,e[1]),e))},every(e,n){return dn(this,"every",e,n,void 0,arguments)},filter(e,n){return dn(this,"filter",e,n,t=>t.map(s=>_n(this,s)),arguments)},find(e,n){return dn(this,"find",e,n,t=>_n(this,t),arguments)},findIndex(e,n){return dn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return dn(this,"findLast",e,n,t=>_n(this,t),arguments)},findLastIndex(e,n){return dn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return dn(this,"forEach",e,n,void 0,arguments)},includes(...e){return zs(this,"includes",e)},indexOf(...e){return zs(this,"indexOf",e)},join(e){return Jn(this).join(e)},lastIndexOf(...e){return zs(this,"lastIndexOf",e)},map(e,n){return dn(this,"map",e,n,void 0,arguments)},pop(){return ct(this,"pop")},push(...e){return ct(this,"push",e)},reduce(e,...n){return Wi(this,"reduce",e,n)},reduceRight(e,...n){return Wi(this,"reduceRight",e,n)},shift(){return ct(this,"shift")},some(e,n){return dn(this,"some",e,n,void 0,arguments)},splice(...e){return ct(this,"splice",e)},toReversed(){return Jn(this).toReversed()},toSorted(e){return Jn(this).toSorted(e)},toSpliced(...e){return Jn(this).toSpliced(...e)},unshift(...e){return ct(this,"unshift",e)},values(){return Ls(this,"values",e=>_n(this,e))}};function Ls(e,n,t){const s=fs(e),i=s[n]();return s!==e&&!Ue(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=t(r.value)),r}),i}const Fa=Array.prototype;function dn(e,n,t,s,i,r){const o=fs(e),a=o!==e&&!Ue(e),l=o[n];if(l!==Fa[n]){const p=l.apply(e,r);return a?Ze(p):p}let h=t;o!==e&&(a?h=function(p,_){return t.call(this,_n(e,p),_,e)}:t.length>2&&(h=function(p,_){return t.call(this,p,_,e)}));const u=l.call(o,h,s);return a&&i?i(u):u}function Wi(e,n,t,s){const i=fs(e);let r=t;return i!==e&&(Ue(e)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,e)}):r=function(o,a,l){return t.call(this,o,_n(e,a),l,e)}),i[n](r,...s)}function zs(e,n,t){const s=se(e);xe(s,"iterate",St);const i=s[n](...t);return(i===-1||i===!1)&&bi(t[0])?(t[0]=se(t[0]),s[n](...t)):i}function ct(e,n,t=[]){bn(),di();const s=se(e)[n].apply(e,t);return fi(),vn(),s}const Ha=ri("__proto__,__v_isRef,__isVue"),Yr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cn));function Na(e){cn(e)||(e=String(e));const n=se(this);return xe(n,"has",e),n.hasOwnProperty(e)}class Zr{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?Ua:to:r?no:eo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const o=D(n);if(!i){let l;if(o&&(l=Ia[t]))return l;if(t==="hasOwnProperty")return Na}const a=Reflect.get(n,t,Le(n)?n:s);if((cn(t)?Yr.has(t):Ha(t))||(i||xe(n,"get",t),r))return a;if(Le(a)){const l=o&&li(t)?a:a.value;return i&&le(l)?Us(l):l}return le(a)?i?Us(a):hs(a):a}}class Qr extends Zr{constructor(n=!1){super(!1,n)}set(n,t,s,i){let r=n[t];const o=D(n)&&li(t);if(!this._isShallow){const h=yn(r);if(!Ue(s)&&!yn(s)&&(r=se(r),s=se(s)),!o&&Le(r)&&!Le(s))return h||(r.value=s),!0}const a=o?Number(t)<n.length:ie(n,t),l=Reflect.set(n,t,s,Le(n)?n:i);return n===se(i)&&(a?Ln(s,r)&&pn(n,"set",t,s):pn(n,"add",t,s)),l}deleteProperty(n,t){const s=ie(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&s&&pn(n,"delete",t,void 0),i}has(n,t){const s=Reflect.has(n,t);return(!cn(t)||!Yr.has(t))&&xe(n,"has",t),s}ownKeys(n){return xe(n,"iterate",D(n)?"length":Kn),Reflect.ownKeys(n)}}class Oa extends Zr{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Wa=new Qr,Ba=new Oa,Da=new Qr(!0);const $s=e=>e,Nt=e=>Reflect.getPrototypeOf(e);function Ka(e,n,t){return function(...s){const i=this.__v_raw,r=se(i),o=Zn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,h=i[e](...s),u=t?$s:n?st:Ze;return!n&&xe(r,"iterate",l?Gs:Kn),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:a?[u(p[0]),u(p[1])]:u(p),done:_}},[Symbol.iterator](){return this}}}}function Ot(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function ja(e,n){const t={get(i){const r=this.__v_raw,o=se(r),a=se(i);e||(Ln(i,a)&&xe(o,"get",i),xe(o,"get",a));const{has:l}=Nt(o),h=n?$s:e?st:Ze;if(l.call(o,i))return h(r.get(i));if(l.call(o,a))return h(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&xe(se(i),"iterate",Kn),i.size},has(i){const r=this.__v_raw,o=se(r),a=se(i);return e||(Ln(i,a)&&xe(o,"has",i),xe(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=se(a),h=n?$s:e?st:Ze;return!e&&xe(l,"iterate",Kn),a.forEach((u,p)=>i.call(r,h(u),h(p),o))}};return Ee(t,e?{add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear")}:{add(i){!n&&!Ue(i)&&!yn(i)&&(i=se(i));const r=se(this);return Nt(r).has.call(r,i)||(r.add(i),pn(r,"add",i,i)),this},set(i,r){!n&&!Ue(r)&&!yn(r)&&(r=se(r));const o=se(this),{has:a,get:l}=Nt(o);let h=a.call(o,i);h||(i=se(i),h=a.call(o,i));const u=l.call(o,i);return o.set(i,r),h?Ln(r,u)&&pn(o,"set",i,r):pn(o,"add",i,r),this},delete(i){const r=se(this),{has:o,get:a}=Nt(r);let l=o.call(r,i);l||(i=se(i),l=o.call(r,i)),a&&a.call(r,i);const h=r.delete(i);return l&&pn(r,"delete",i,void 0),h},clear(){const i=se(this),r=i.size!==0,o=i.clear();return r&&pn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ka(i,e,n)}),t}function pi(e,n){const t=ja(e,n);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(ie(t,i)&&i in s?t:s,i,r)}const Va={get:pi(!1,!1)},Ga={get:pi(!1,!0)},$a={get:pi(!0,!1)};const eo=new WeakMap,no=new WeakMap,to=new WeakMap,Ua=new WeakMap;function Ja(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ja(ya(e))}function hs(e){return yn(e)?e:gi(e,!1,Wa,Va,eo)}function Xa(e){return gi(e,!1,Da,Ga,no)}function Us(e){return gi(e,!0,Ba,$a,to)}function gi(e,n,t,s,i){if(!le(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=qa(e);if(r===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,r===2?s:t);return i.set(e,a),a}function jn(e){return yn(e)?jn(e.__v_raw):!!(e&&e.__v_isReactive)}function yn(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function bi(e){return e?!!e.__v_raw:!1}function se(e){const n=e&&e.__v_raw;return n?se(n):e}function Ya(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&Or(e,"__v_skip",!0),e}const Ze=e=>le(e)?hs(e):e,st=e=>le(e)?Us(e):e;function Le(e){return e?e.__v_isRef===!0:!1}function sn(e){return Za(e,!1)}function Za(e,n){return Le(e)?e:new Qa(e,n)}class Qa{constructor(n,t){this.dep=new mi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:se(n),this._value=t?n:Ze(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||Ue(n)||yn(n);n=s?n:se(n),Ln(n,t)&&(this._rawValue=n,this._value=s?n:Ze(n),this.dep.trigger())}}function el(e){return Le(e)?e.value:e}const nl={get:(e,n,t)=>n==="__v_raw"?e:el(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const i=e[n];return Le(i)&&!Le(t)?(i.value=t,!0):Reflect.set(e,n,t,s)}};function so(e){return jn(e)?e:new Proxy(e,nl)}class tl{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new mi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Gr(this,!0),!0}get value(){const n=this.dep.track();return Jr(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function sl(e,n,t=!1){let s,i;return $(e)?s=e:(s=e.get,i=e.set),new tl(s,i,t)}const Wt={},Zt=new WeakMap;let Wn;function il(e,n=!1,t=Wn){if(t){let s=Zt.get(t);s||Zt.set(t,s=[]),s.push(e)}}function rl(e,n,t=ue){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=t,h=I=>i?I:Ue(I)||i===!1||i===0?gn(I,1):gn(I);let u,p,_,C,A=!1,K=!1;if(Le(e)?(p=()=>e.value,A=Ue(e)):jn(e)?(p=()=>h(e),A=!0):D(e)?(K=!0,A=e.some(I=>jn(I)||Ue(I)),p=()=>e.map(I=>{if(Le(I))return I.value;if(jn(I))return h(I);if($(I))return l?l(I,2):I()})):$(e)?n?p=l?()=>l(e,2):e:p=()=>{if(_){bn();try{_()}finally{vn()}}const I=Wn;Wn=u;try{return l?l(e,3,[C]):e(C)}finally{Wn=I}}:p=ln,n&&i){const I=p,U=i===!0?1/0:i;p=()=>gn(I(),U)}const re=Aa(),H=()=>{u.stop(),re&&re.active&&ai(re.effects,u)};if(r&&n){const I=n;n=(...U)=>{I(...U),H()}}let M=K?new Array(e.length).fill(Wt):Wt;const V=I=>{if(!(!(u.flags&1)||!u.dirty&&!I))if(n){const U=u.run();if(i||A||(K?U.some((de,ce)=>Ln(de,M[ce])):Ln(U,M))){_&&_();const de=Wn;Wn=u;try{const ce=[U,M===Wt?void 0:K&&M[0]===Wt?[]:M,C];M=U,l?l(n,3,ce):n(...ce)}finally{Wn=de}}}else u.run()};return a&&a(V),u=new jr(p),u.scheduler=o?()=>o(V,!1):V,C=I=>il(I,!1,u),_=u.onStop=()=>{const I=Zt.get(u);if(I){if(l)l(I,4);else for(const U of I)U();Zt.delete(u)}},n?s?V(!0):M=u.run():o?o(V.bind(null,!0),!0):u.run(),H.pause=u.pause.bind(u),H.resume=u.resume.bind(u),H.stop=H,H}function gn(e,n=1/0,t){if(n<=0||!le(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Le(e))gn(e.value,n,t);else if(D(e))for(let s=0;s<e.length;s++)gn(e[s],n,t);else if(it(e)||Zn(e))e.forEach(s=>{gn(s,n,t)});else if(Hr(e)){for(const s in e)gn(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&gn(e[s],n,t)}return e}function At(e,n,t,s){try{return s?e(...s):e()}catch(i){ms(i,n,t)}}function Qe(e,n,t,s){if($(e)){const i=At(e,n,t,s);return i&&Ir(i)&&i.catch(r=>{ms(r,n,t)}),i}if(D(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Qe(e[r],n,t,s));return i}}function ms(e,n,t,s=!0){const i=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||ue;if(n){let a=n.parent;const l=n.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,h)===!1)return}a=a.parent}if(r){bn(),At(r,null,10,[e,l,h]),vn();return}}ol(e,t,i,s,o)}function ol(e,n,t,s=!0,i=!1){if(i)throw e;console.error(e)}const Ie=[];let on=-1;const et=[];let Cn=null,Xn=0;const io=Promise.resolve();let Qt=null;function es(e){const n=Qt||io;return e?n.then(this?e.bind(this):e):n}function al(e){let n=on+1,t=Ie.length;for(;n<t;){const s=n+t>>>1,i=Ie[s],r=_t(i);r<e||r===e&&i.flags&2?n=s+1:t=s}return n}function vi(e){if(!(e.flags&1)){const n=_t(e),t=Ie[Ie.length-1];!t||!(e.flags&2)&&n>=_t(t)?Ie.push(e):Ie.splice(al(n),0,e),e.flags|=1,ro()}}function ro(){Qt||(Qt=io.then(ao))}function ll(e){D(e)?et.push(...e):Cn&&e.id===-1?Cn.splice(Xn+1,0,e):e.flags&1||(et.push(e),e.flags|=1),ro()}function Bi(e,n,t=on+1){for(;t<Ie.length;t++){const s=Ie[t];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ie.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function oo(e){if(et.length){const n=[...new Set(et)].sort((t,s)=>_t(t)-_t(s));if(et.length=0,Cn){Cn.push(...n);return}for(Cn=n,Xn=0;Xn<Cn.length;Xn++){const t=Cn[Xn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Cn=null,Xn=0}}const _t=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ao(e){try{for(on=0;on<Ie.length;on++){const n=Ie[on];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),At(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;on<Ie.length;on++){const n=Ie[on];n&&(n.flags&=-2)}on=-1,Ie.length=0,oo(),Qt=null,(Ie.length||et.length)&&ao()}}let $e=null,lo=null;function ns(e){const n=$e;return $e=e,lo=e&&e.type.__scopeId||null,n}function Js(e,n=$e,t){if(!n||e._n)return e;const s=(...i)=>{s._d&&is(-1);const r=ns(n);let o;try{o=e(...i)}finally{ns(r),s._d&&is(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Di(e,n){if($e===null)return e;const t=ks($e),s=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[r,o,a,l=ue]=n[i];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&gn(o),s.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Fn(e,n,t,s){const i=e.dirs,r=n&&n.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(bn(),Qe(l,t,8,[e.el,a,e,n]),vn())}}const cl=Symbol("_vte"),co=e=>e.__isTeleport,mn=Symbol("_leaveCb"),Bt=Symbol("_enterCb");function ul(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bs(()=>{e.isMounted=!0}),vs(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],uo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},fo=e=>{const n=e.subTree;return n.component?fo(n.component):n},dl={name:"BaseTransition",props:uo,setup(e,{slots:n}){const t=Oo(),s=ul();return()=>{const i=n.default&&po(n.default(),!0);if(!i||!i.length)return;const r=ho(i),o=se(e),{mode:a}=o;if(s.isLeaving)return As(r);const l=Ki(r);if(!l)return As(r);let h=qs(l,o,s,t,p=>h=p);l.type!==Fe&&Ct(l,h);let u=t.subTree&&Ki(t.subTree);if(u&&u.type!==Fe&&!Bn(u,l)&&fo(t).type!==Fe){let p=qs(u,o,s,t);if(Ct(u,p),a==="out-in"&&l.type!==Fe)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,u=void 0},As(r);a==="in-out"&&l.type!==Fe?p.delayLeave=(_,C,A)=>{const K=mo(s,u);K[String(u.key)]=u,_[mn]=()=>{C(),_[mn]=void 0,delete h.delayedLeave,u=void 0},h.delayedLeave=()=>{A(),delete h.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ho(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Fe){n=t;break}}return n}const fl=dl;function mo(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function qs(e,n,t,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:_,onLeave:C,onAfterLeave:A,onLeaveCancelled:K,onBeforeAppear:re,onAppear:H,onAfterAppear:M,onAppearCancelled:V}=n,I=String(e.key),U=mo(t,e),de=(R,F)=>{R&&Qe(R,s,9,F)},ce=(R,F)=>{const N=F[1];de(R,F),D(R)?R.every(x=>x.length<=1)&&N():R.length<=1&&N()},X={mode:o,persisted:a,beforeEnter(R){let F=l;if(!t.isMounted)if(r)F=re||l;else return;R[mn]&&R[mn](!0);const N=U[I];N&&Bn(e,N)&&N.el[mn]&&N.el[mn](),de(F,[R])},enter(R){let F=h,N=u,x=p;if(!t.isMounted)if(r)F=H||h,N=M||u,x=V||p;else return;let G=!1;const te=R[Bt]=we=>{G||(G=!0,we?de(x,[R]):de(N,[R]),X.delayedLeave&&X.delayedLeave(),R[Bt]=void 0)};F?ce(F,[R,te]):te()},leave(R,F){const N=String(e.key);if(R[Bt]&&R[Bt](!0),t.isUnmounting)return F();de(_,[R]);let x=!1;const G=R[mn]=te=>{x||(x=!0,F(),te?de(K,[R]):de(A,[R]),R[mn]=void 0,U[N]===e&&delete U[N])};U[N]=e,C?ce(C,[R,G]):G()},clone(R){const F=qs(R,n,t,s,i);return i&&i(F),F}};return X}function As(e){if(ps(e))return e=An(e),e.children=null,e}function Ki(e){if(!ps(e))return co(e.type)&&e.children?ho(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&$(t.default))return t.default()}}function Ct(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Ct(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function po(e,n=!1,t){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Be?(o.patchFlag&128&&i++,s=s.concat(po(o.children,n,a))):(n||o.type!==Fe)&&s.push(a!=null?An(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function go(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ts=new WeakMap;function bt(e,n,t,s,i=!1){if(D(e)){e.forEach((A,K)=>bt(A,n&&(D(n)?n[K]:n),t,s,i));return}if(vt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&bt(e,n,t,s.component.subTree);return}const r=s.shapeFlag&4?ks(s.component):s.el,o=i?null:r,{i:a,r:l}=e,h=n&&n.r,u=a.refs===ue?a.refs={}:a.refs,p=a.setupState,_=se(p),C=p===ue?Rr:A=>ie(_,A);if(h!=null&&h!==l){if(ji(n),ye(h))u[h]=null,C(h)&&(p[h]=null);else if(Le(h)){h.value=null;const A=n;A.k&&(u[A.k]=null)}}if($(l))At(l,a,12,[o,u]);else{const A=ye(l),K=Le(l);if(A||K){const re=()=>{if(e.f){const H=A?C(l)?p[l]:u[l]:l.value;if(i)D(H)&&ai(H,r);else if(D(H))H.includes(r)||H.push(r);else if(A)u[l]=[r],C(l)&&(p[l]=u[l]);else{const M=[r];l.value=M,e.k&&(u[e.k]=M)}}else A?(u[l]=o,C(l)&&(p[l]=o)):K&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const H=()=>{re(),ts.delete(e)};H.id=-1,ts.set(e,H),De(H,t)}else ji(e),re()}}}function ji(e){const n=ts.get(e);n&&(n.flags|=8,ts.delete(e))}ds().requestIdleCallback;ds().cancelIdleCallback;const vt=e=>!!e.type.__asyncLoader,ps=e=>e.type.__isKeepAlive;function hl(e,n){bo(e,"a",n)}function ml(e,n){bo(e,"da",n)}function bo(e,n,t=He){const s=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(gs(n,s,t),t){let i=t.parent;for(;i&&i.parent;)ps(i.parent.vnode)&&pl(s,n,t,i),i=i.parent}}function pl(e,n,t,s){const i=gs(n,e,s,!0);vo(()=>{ai(s[n],i)},t)}function gs(e,n,t=He,s=!1){if(t){const i=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{bn();const a=Pt(t),l=Qe(n,t,e,o);return a(),vn(),l});return s?i.unshift(r):i.push(r),r}}const wn=e=>(n,t=He)=>{(!Et||e==="sp")&&gs(e,(...s)=>n(...s),t)},gl=wn("bm"),bs=wn("m"),bl=wn("bu"),vl=wn("u"),vs=wn("bum"),vo=wn("um"),yl=wn("sp"),wl=wn("rtg"),kl=wn("rtc");function Sl(e,n=He){gs("ec",e,n)}const _l=Symbol.for("v-ndc");function Dt(e,n,t,s){let i;const r=t,o=D(e);if(o||ye(e)){const a=o&&jn(e);let l=!1,h=!1;a&&(l=!Ue(e),h=yn(e),e=fs(e)),i=new Array(e.length);for(let u=0,p=e.length;u<p;u++)i[u]=n(l?h?st(Ze(e[u])):Ze(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=n(a+1,a,void 0,r)}else if(le(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>n(a,l,void 0,r));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,h=a.length;l<h;l++){const u=a[l];i[l]=n(e[u],u,l,r)}}else i=[];return i}const Xs=e=>e?Wo(e)?ks(e):Xs(e.parent):null,yt=Ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xs(e.parent),$root:e=>Xs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wo(e),$forceUpdate:e=>e.f||(e.f=()=>{vi(e.update)}),$nextTick:e=>e.n||(e.n=es.bind(e.proxy)),$watch:e=>Fl.bind(e)}),Ps=(e,n)=>e!==ue&&!e.__isScriptSetup&&ie(e,n),Cl={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;if(n[0]!=="$"){const _=o[n];if(_!==void 0)switch(_){case 1:return s[n];case 2:return i[n];case 4:return t[n];case 3:return r[n]}else{if(Ps(s,n))return o[n]=1,s[n];if(i!==ue&&ie(i,n))return o[n]=2,i[n];if(ie(r,n))return o[n]=3,r[n];if(t!==ue&&ie(t,n))return o[n]=4,t[n];Ys&&(o[n]=0)}}const h=yt[n];let u,p;if(h)return n==="$attrs"&&xe(e.attrs,"get",""),h(e);if((u=a.__cssModules)&&(u=u[n]))return u;if(t!==ue&&ie(t,n))return o[n]=4,t[n];if(p=l.config.globalProperties,ie(p,n))return p[n]},set({_:e},n,t){const{data:s,setupState:i,ctx:r}=e;return Ps(i,n)?(i[n]=t,!0):s!==ue&&ie(s,n)?(s[n]=t,!0):ie(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(t[a]||e!==ue&&a[0]!=="$"&&ie(e,a)||Ps(n,a)||ie(r,a)||ie(s,a)||ie(yt,a)||ie(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ie(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Vi(e){return D(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Ys=!0;function Tl(e){const n=wo(e),t=e.proxy,s=e.ctx;Ys=!1,n.beforeCreate&&Gi(n.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:h,created:u,beforeMount:p,mounted:_,beforeUpdate:C,updated:A,activated:K,deactivated:re,beforeDestroy:H,beforeUnmount:M,destroyed:V,unmounted:I,render:U,renderTracked:de,renderTriggered:ce,errorCaptured:X,serverPrefetch:R,expose:F,inheritAttrs:N,components:x,directives:G,filters:te}=n;if(h&&El(h,s,null),o)for(const Q in o){const ee=o[Q];$(ee)&&(s[Q]=ee.bind(t))}if(i){const Q=i.call(t,t);le(Q)&&(e.data=hs(Q))}if(Ys=!0,r)for(const Q in r){const ee=r[Q],ze=$(ee)?ee.bind(t,t):$(ee.get)?ee.get.bind(t,t):ln,Je=!$(ee)&&$(ee.set)?ee.set.bind(t):ln,pe=Z({get:ze,set:Je});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>pe.value,set:be=>pe.value=be})}if(a)for(const Q in a)yo(a[Q],s,t,Q);if(l){const Q=$(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(ee=>{Pl(ee,Q[ee])})}u&&Gi(u,e,"c");function Y(Q,ee){D(ee)?ee.forEach(ze=>Q(ze.bind(t))):ee&&Q(ee.bind(t))}if(Y(gl,p),Y(bs,_),Y(bl,C),Y(vl,A),Y(hl,K),Y(ml,re),Y(Sl,X),Y(kl,de),Y(wl,ce),Y(vs,M),Y(vo,I),Y(yl,R),D(F))if(F.length){const Q=e.exposed||(e.exposed={});F.forEach(ee=>{Object.defineProperty(Q,ee,{get:()=>t[ee],set:ze=>t[ee]=ze,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===ln&&(e.render=U),N!=null&&(e.inheritAttrs=N),x&&(e.components=x),G&&(e.directives=G),R&&go(e)}function El(e,n,t=ln){D(e)&&(e=Zs(e));for(const s in e){const i=e[s];let r;le(i)?"default"in i?r=Ut(i.from||s,i.default,!0):r=Ut(i.from||s):r=Ut(i),Le(r)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[s]=r}}function Gi(e,n,t){Qe(D(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function yo(e,n,t,s){let i=s.includes(".")?_o(t,s):()=>t[s];if(ye(e)){const r=n[e];$(r)&&Ge(i,r)}else if($(e))Ge(i,e.bind(t));else if(le(e))if(D(e))e.forEach(r=>yo(r,n,t,s));else{const r=$(e.handler)?e.handler.bind(t):n[e.handler];$(r)&&Ge(i,r,e)}}function wo(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(n);let l;return a?l=a:!i.length&&!t&&!s?l=n:(l={},i.length&&i.forEach(h=>ss(l,h,o,!0)),ss(l,n,o)),le(n)&&r.set(n,l),l}function ss(e,n,t,s=!1){const{mixins:i,extends:r}=n;r&&ss(e,r,t,!0),i&&i.forEach(o=>ss(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const a=xl[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const xl={data:$i,props:Ui,emits:Ui,methods:ft,computed:ft,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:ft,directives:ft,watch:Ll,provide:$i,inject:Ml};function $i(e,n){return n?e?function(){return Ee($(e)?e.call(this,this):e,$(n)?n.call(this,this):n)}:n:e}function Ml(e,n){return ft(Zs(e),Zs(n))}function Zs(e){if(D(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Re(e,n){return e?[...new Set([].concat(e,n))]:n}function ft(e,n){return e?Ee(Object.create(null),e,n):n}function Ui(e,n){return e?D(e)&&D(n)?[...new Set([...e,...n])]:Ee(Object.create(null),Vi(e),Vi(n??{})):n}function Ll(e,n){if(!e)return n;if(!n)return e;const t=Ee(Object.create(null),e);for(const s in n)t[s]=Re(e[s],n[s]);return t}function ko(){return{app:null,config:{isNativeTag:Rr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Al(e,n){return function(s,i=null){$(s)||(s=Ee({},s)),i!=null&&!le(i)&&(i=null);const r=ko(),o=new WeakSet,a=[];let l=!1;const h=r.app={_uid:zl++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:pc,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(h,...p)):$(u)&&(o.add(u),u(h,...p))),h},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),h},component(u,p){return p?(r.components[u]=p,h):r.components[u]},directive(u,p){return p?(r.directives[u]=p,h):r.directives[u]},mount(u,p,_){if(!l){const C=h._ceVNode||Me(s,i);return C.appContext=r,_===!0?_="svg":_===!1&&(_=void 0),e(C,u,_),l=!0,h._container=u,u.__vue_app__=h,ks(C.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qe(a,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(u,p){return r.provides[u]=p,h},runWithContext(u){const p=nt;nt=h;try{return u()}finally{nt=p}}};return h}}let nt=null;function Pl(e,n){if(He){let t=He.provides;const s=He.parent&&He.parent.provides;s===t&&(t=He.provides=Object.create(s)),t[e]=n}}function Ut(e,n,t=!1){const s=Oo();if(s||nt){let i=nt?nt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&$(n)?n.call(s&&s.proxy):n}}const Rl=Symbol.for("v-scx"),Il=()=>Ut(Rl);function Ge(e,n,t){return So(e,n,t)}function So(e,n,t=ue){const{immediate:s,deep:i,flush:r,once:o}=t,a=Ee({},t),l=n&&s||!n&&r!=="post";let h;if(Et){if(r==="sync"){const C=Il();h=C.__watcherHandles||(C.__watcherHandles=[])}else if(!l){const C=()=>{};return C.stop=ln,C.resume=ln,C.pause=ln,C}}const u=He;a.call=(C,A,K)=>Qe(C,u,A,K);let p=!1;r==="post"?a.scheduler=C=>{De(C,u&&u.suspense)}:r!=="sync"&&(p=!0,a.scheduler=(C,A)=>{A?C():vi(C)}),a.augmentJob=C=>{n&&(C.flags|=4),p&&(C.flags|=2,u&&(C.id=u.uid,C.i=u))};const _=rl(e,n,a);return Et&&(h?h.push(_):l&&_()),_}function Fl(e,n,t){const s=this.proxy,i=ye(e)?e.includes(".")?_o(s,e):()=>s[e]:e.bind(s,s);let r;$(n)?r=n:(r=n.handler,t=n);const o=Pt(this),a=So(i,r.bind(s),t);return o(),a}function _o(e,n){const t=n.split(".");return()=>{let s=e;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const Hl=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${zn(n)}Modifiers`]||e[`${Vn(n)}Modifiers`];function Nl(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||ue;let i=t;const r=n.startsWith("update:"),o=r&&Hl(s,n.slice(7));o&&(o.trim&&(i=t.map(u=>ye(u)?u.trim():u)),o.number&&(i=t.map(Wr)));let a,l=s[a=Es(n)]||s[a=Es(zn(n))];!l&&r&&(l=s[a=Es(Vn(n))]),l&&Qe(l,e,6,i);const h=s[a+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(h,e,6,i)}}const Ol=new WeakMap;function Co(e,n,t=!1){const s=t?Ol:n.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!$(e)){const l=h=>{const u=Co(h,n,!0);u&&(a=!0,Ee(o,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(le(e)&&s.set(e,null),null):(D(r)?r.forEach(l=>o[l]=null):Ee(o,r),le(e)&&s.set(e,o),o)}function ys(e,n){return!e||!cs(n)?!1:(n=n.slice(2).replace(/Once$/,""),ie(e,n[0].toLowerCase()+n.slice(1))||ie(e,Vn(n))||ie(e,n))}function Ji(e){const{type:n,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:h,renderCache:u,props:p,data:_,setupState:C,ctx:A,inheritAttrs:K}=e,re=ns(e);let H,M;try{if(t.shapeFlag&4){const I=i||s,U=I;H=an(h.call(U,I,u,p,C,_,A)),M=a}else{const I=n;H=an(I.length>1?I(p,{attrs:a,slots:o,emit:l}):I(p,null)),M=n.props?a:Wl(a)}}catch(I){wt.length=0,ms(I,e,1),H=Me(Fe)}let V=H;if(M&&K!==!1){const I=Object.keys(M),{shapeFlag:U}=V;I.length&&U&7&&(r&&I.some(oi)&&(M=Bl(M,r)),V=An(V,M,!1,!0))}return t.dirs&&(V=An(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(t.dirs):t.dirs),t.transition&&Ct(V,t.transition),H=V,ns(re),H}const Wl=e=>{let n;for(const t in e)(t==="class"||t==="style"||cs(t))&&((n||(n={}))[t]=e[t]);return n},Bl=(e,n)=>{const t={};for(const s in e)(!oi(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function Dl(e,n,t){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=n,h=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?qi(s,o,h):!!o;if(l&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const _=u[p];if(o[_]!==s[_]&&!ys(h,_))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?qi(s,o,h):!0:!!o;return!1}function qi(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(n[r]!==e[r]&&!ys(t,r))return!0}return!1}function Kl({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const To={},Eo=()=>Object.create(To),xo=e=>Object.getPrototypeOf(e)===To;function jl(e,n,t,s=!1){const i={},r=Eo();e.propsDefaults=Object.create(null),Mo(e,n,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);t?e.props=s?i:Xa(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Vl(e,n,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=se(i),[l]=e.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let _=u[p];if(ys(e.emitsOptions,_))continue;const C=n[_];if(l)if(ie(r,_))C!==r[_]&&(r[_]=C,h=!0);else{const A=zn(_);i[A]=Qs(l,a,A,C,e,!1)}else C!==r[_]&&(r[_]=C,h=!0)}}}else{Mo(e,n,i,r)&&(h=!0);let u;for(const p in a)(!n||!ie(n,p)&&((u=Vn(p))===p||!ie(n,u)))&&(l?t&&(t[p]!==void 0||t[u]!==void 0)&&(i[p]=Qs(l,a,p,void 0,e,!0)):delete i[p]);if(r!==a)for(const p in r)(!n||!ie(n,p))&&(delete r[p],h=!0)}h&&pn(e.attrs,"set","")}function Mo(e,n,t,s){const[i,r]=e.propsOptions;let o=!1,a;if(n)for(let l in n){if(mt(l))continue;const h=n[l];let u;i&&ie(i,u=zn(l))?!r||!r.includes(u)?t[u]=h:(a||(a={}))[u]=h:ys(e.emitsOptions,l)||(!(l in s)||h!==s[l])&&(s[l]=h,o=!0)}if(r){const l=se(t),h=a||ue;for(let u=0;u<r.length;u++){const p=r[u];t[p]=Qs(i,l,p,h[p],e,!ie(h,p))}}return o}function Qs(e,n,t,s,i,r){const o=e[t];if(o!=null){const a=ie(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:h}=i;if(t in h)s=h[t];else{const u=Pt(i);s=h[t]=l.call(null,n),u()}}else s=l;i.ce&&i.ce._setProp(t,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Vn(t))&&(s=!0))}return s}const Gl=new WeakMap;function Lo(e,n,t=!1){const s=t?Gl:n.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!$(e)){const u=p=>{l=!0;const[_,C]=Lo(p,n,!0);Ee(o,_),C&&a.push(...C)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return le(e)&&s.set(e,Yn),Yn;if(D(r))for(let u=0;u<r.length;u++){const p=zn(r[u]);Xi(p)&&(o[p]=ue)}else if(r)for(const u in r){const p=zn(u);if(Xi(p)){const _=r[u],C=o[p]=D(_)||$(_)?{type:_}:Ee({},_),A=C.type;let K=!1,re=!0;if(D(A))for(let H=0;H<A.length;++H){const M=A[H],V=$(M)&&M.name;if(V==="Boolean"){K=!0;break}else V==="String"&&(re=!1)}else K=$(A)&&A.name==="Boolean";C[0]=K,C[1]=re,(K||ie(C,"default"))&&a.push(p)}}const h=[o,a];return le(e)&&s.set(e,h),h}function Xi(e){return e[0]!=="$"&&!mt(e)}const yi=e=>e==="_"||e==="_ctx"||e==="$stable",wi=e=>D(e)?e.map(an):[an(e)],$l=(e,n,t)=>{if(n._n)return n;const s=Js((...i)=>wi(n(...i)),t);return s._c=!1,s},zo=(e,n,t)=>{const s=e._ctx;for(const i in e){if(yi(i))continue;const r=e[i];if($(r))n[i]=$l(i,r,s);else if(r!=null){const o=wi(r);n[i]=()=>o}}},Ao=(e,n)=>{const t=wi(n);e.slots.default=()=>t},Po=(e,n,t)=>{for(const s in n)(t||!yi(s))&&(e[s]=n[s])},Ul=(e,n,t)=>{const s=e.slots=Eo();if(e.vnode.shapeFlag&32){const i=n._;i?(Po(s,n,t),t&&Or(s,"_",i,!0)):zo(n,s)}else n&&Ao(e,n)},Jl=(e,n,t)=>{const{vnode:s,slots:i}=e;let r=!0,o=ue;if(s.shapeFlag&32){const a=n._;a?t&&a===1?r=!1:Po(i,n,t):(r=!n.$stable,zo(n,i)),o=n}else n&&(Ao(e,n),o={default:1});if(r)for(const a in i)!yi(a)&&o[a]==null&&delete i[a]},De=Ql;function ql(e){return Xl(e)}function Xl(e,n){const t=ds();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:h,setElementText:u,parentNode:p,nextSibling:_,setScopeId:C=ln,insertStaticContent:A}=e,K=(c,f,g,w=null,y=null,k=null,L=void 0,S=null,E=!!f.dynamicChildren)=>{if(c===f)return;c&&!Bn(c,f)&&(w=Pn(c),be(c,y,k,!0),c=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:b,ref:W,shapeFlag:P}=f;switch(b){case ws:re(c,f,g,w);break;case Fe:H(c,f,g,w);break;case Is:c==null&&M(f,g,w,L);break;case Be:x(c,f,g,w,y,k,L,S,E);break;default:P&1?U(c,f,g,w,y,k,L,S,E):P&6?G(c,f,g,w,y,k,L,S,E):(P&64||P&128)&&b.process(c,f,g,w,y,k,L,S,E,qe)}W!=null&&y?bt(W,c&&c.ref,k,f||c,!f):W==null&&c&&c.ref!=null&&bt(c.ref,null,k,c,!0)},re=(c,f,g,w)=>{if(c==null)s(f.el=a(f.children),g,w);else{const y=f.el=c.el;f.children!==c.children&&h(y,f.children)}},H=(c,f,g,w)=>{c==null?s(f.el=l(f.children||""),g,w):f.el=c.el},M=(c,f,g,w)=>{[c.el,c.anchor]=A(c.children,f,g,w,c.el,c.anchor)},V=({el:c,anchor:f},g,w)=>{let y;for(;c&&c!==f;)y=_(c),s(c,g,w),c=y;s(f,g,w)},I=({el:c,anchor:f})=>{let g;for(;c&&c!==f;)g=_(c),i(c),c=g;i(f)},U=(c,f,g,w,y,k,L,S,E)=>{if(f.type==="svg"?L="svg":f.type==="math"&&(L="mathml"),c==null)de(f,g,w,y,k,L,S,E);else{const b=c.el&&c.el._isVueCE?c.el:null;try{b&&b._beginPatch(),R(c,f,y,k,L,S,E)}finally{b&&b._endPatch()}}},de=(c,f,g,w,y,k,L,S)=>{let E,b;const{props:W,shapeFlag:P,transition:O,dirs:j}=c;if(E=c.el=o(c.type,k,W&&W.is,W),P&8?u(E,c.children):P&16&&X(c.children,E,null,w,y,Rs(c,k),L,S),j&&Fn(c,null,w,"created"),ce(E,c,c.scopeId,L,w),W){for(const ae in W)ae!=="value"&&!mt(ae)&&r(E,ae,null,W[ae],k,w);"value"in W&&r(E,"value",null,W.value,k),(b=W.onVnodeBeforeMount)&&rn(b,w,c)}j&&Fn(c,null,w,"beforeMount");const q=Yl(y,O);q&&O.beforeEnter(E),s(E,f,g),((b=W&&W.onVnodeMounted)||q||j)&&De(()=>{b&&rn(b,w,c),q&&O.enter(E),j&&Fn(c,null,w,"mounted")},y)},ce=(c,f,g,w,y)=>{if(g&&C(c,g),w)for(let k=0;k<w.length;k++)C(c,w[k]);if(y){let k=y.subTree;if(f===k||Fo(k.type)&&(k.ssContent===f||k.ssFallback===f)){const L=y.vnode;ce(c,L,L.scopeId,L.slotScopeIds,y.parent)}}},X=(c,f,g,w,y,k,L,S,E=0)=>{for(let b=E;b<c.length;b++){const W=c[b]=S?Tn(c[b]):an(c[b]);K(null,W,f,g,w,y,k,L,S)}},R=(c,f,g,w,y,k,L)=>{const S=f.el=c.el;let{patchFlag:E,dynamicChildren:b,dirs:W}=f;E|=c.patchFlag&16;const P=c.props||ue,O=f.props||ue;let j;if(g&&Hn(g,!1),(j=O.onVnodeBeforeUpdate)&&rn(j,g,f,c),W&&Fn(f,c,g,"beforeUpdate"),g&&Hn(g,!0),(P.innerHTML&&O.innerHTML==null||P.textContent&&O.textContent==null)&&u(S,""),b?F(c.dynamicChildren,b,S,g,w,Rs(f,y),k):L||ee(c,f,S,null,g,w,Rs(f,y),k,!1),E>0){if(E&16)N(S,P,O,g,y);else if(E&2&&P.class!==O.class&&r(S,"class",null,O.class,y),E&4&&r(S,"style",P.style,O.style,y),E&8){const q=f.dynamicProps;for(let ae=0;ae<q.length;ae++){const J=q[ae],Se=P[J],_e=O[J];(_e!==Se||J==="value")&&r(S,J,Se,_e,y,g)}}E&1&&c.children!==f.children&&u(S,f.children)}else!L&&b==null&&N(S,P,O,g,y);((j=O.onVnodeUpdated)||W)&&De(()=>{j&&rn(j,g,f,c),W&&Fn(f,c,g,"updated")},w)},F=(c,f,g,w,y,k,L)=>{for(let S=0;S<f.length;S++){const E=c[S],b=f[S],W=E.el&&(E.type===Be||!Bn(E,b)||E.shapeFlag&198)?p(E.el):g;K(E,b,W,null,w,y,k,L,!0)}},N=(c,f,g,w,y)=>{if(f!==g){if(f!==ue)for(const k in f)!mt(k)&&!(k in g)&&r(c,k,f[k],null,y,w);for(const k in g){if(mt(k))continue;const L=g[k],S=f[k];L!==S&&k!=="value"&&r(c,k,S,L,y,w)}"value"in g&&r(c,"value",f.value,g.value,y)}},x=(c,f,g,w,y,k,L,S,E)=>{const b=f.el=c?c.el:a(""),W=f.anchor=c?c.anchor:a("");let{patchFlag:P,dynamicChildren:O,slotScopeIds:j}=f;j&&(S=S?S.concat(j):j),c==null?(s(b,g,w),s(W,g,w),X(f.children||[],g,W,y,k,L,S,E)):P>0&&P&64&&O&&c.dynamicChildren?(F(c.dynamicChildren,O,g,y,k,L,S),(f.key!=null||y&&f===y.subTree)&&Ro(c,f,!0)):ee(c,f,g,W,y,k,L,S,E)},G=(c,f,g,w,y,k,L,S,E)=>{f.slotScopeIds=S,c==null?f.shapeFlag&512?y.ctx.activate(f,g,w,L,E):te(f,g,w,y,k,L,E):we(c,f,E)},te=(c,f,g,w,y,k,L)=>{const S=c.component=lc(c,w,y);if(ps(c)&&(S.ctx.renderer=qe),cc(S,!1,L),S.asyncDep){if(y&&y.registerDep(S,Y,L),!c.el){const E=S.subTree=Me(Fe);H(null,E,f,g),c.placeholder=E.el}}else Y(S,c,f,g,y,k,L)},we=(c,f,g)=>{const w=f.component=c.component;if(Dl(c,f,g))if(w.asyncDep&&!w.asyncResolved){Q(w,f,g);return}else w.next=f,w.update();else f.el=c.el,w.vnode=f},Y=(c,f,g,w,y,k,L)=>{const S=()=>{if(c.isMounted){let{next:P,bu:O,u:j,parent:q,vnode:ae}=c;{const Ne=Io(c);if(Ne){P&&(P.el=ae.el,Q(c,P,L)),Ne.asyncDep.then(()=>{c.isUnmounted||S()});return}}let J=P,Se;Hn(c,!1),P?(P.el=ae.el,Q(c,P,L)):P=ae,O&&$t(O),(Se=P.props&&P.props.onVnodeBeforeUpdate)&&rn(Se,q,P,ae),Hn(c,!0);const _e=Ji(c),ge=c.subTree;c.subTree=_e,K(ge,_e,p(ge.el),Pn(ge),c,y,k),P.el=_e.el,J===null&&Kl(c,_e.el),j&&De(j,y),(Se=P.props&&P.props.onVnodeUpdated)&&De(()=>rn(Se,q,P,ae),y)}else{let P;const{el:O,props:j}=f,{bm:q,m:ae,parent:J,root:Se,type:_e}=c,ge=vt(f);Hn(c,!1),q&&$t(q),!ge&&(P=j&&j.onVnodeBeforeMount)&&rn(P,J,f),Hn(c,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(_e);const Ne=c.subTree=Ji(c);K(null,Ne,g,w,c,y,k),f.el=Ne.el}if(ae&&De(ae,y),!ge&&(P=j&&j.onVnodeMounted)){const Ne=f;De(()=>rn(P,J,Ne),y)}(f.shapeFlag&256||J&&vt(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&De(c.a,y),c.isMounted=!0,f=g=w=null}};c.scope.on();const E=c.effect=new jr(S);c.scope.off();const b=c.update=E.run.bind(E),W=c.job=E.runIfDirty.bind(E);W.i=c,W.id=c.uid,E.scheduler=()=>vi(W),Hn(c,!0),b()},Q=(c,f,g)=>{f.component=c;const w=c.vnode.props;c.vnode=f,c.next=null,Vl(c,f.props,w,g),Jl(c,f.children,g),bn(),Bi(c),vn()},ee=(c,f,g,w,y,k,L,S,E=!1)=>{const b=c&&c.children,W=c?c.shapeFlag:0,P=f.children,{patchFlag:O,shapeFlag:j}=f;if(O>0){if(O&128){Je(b,P,g,w,y,k,L,S,E);return}else if(O&256){ze(b,P,g,w,y,k,L,S,E);return}}j&8?(W&16&&nn(b,y,k),P!==b&&u(g,P)):W&16?j&16?Je(b,P,g,w,y,k,L,S,E):nn(b,y,k,!0):(W&8&&u(g,""),j&16&&X(P,g,w,y,k,L,S,E))},ze=(c,f,g,w,y,k,L,S,E)=>{c=c||Yn,f=f||Yn;const b=c.length,W=f.length,P=Math.min(b,W);let O;for(O=0;O<P;O++){const j=f[O]=E?Tn(f[O]):an(f[O]);K(c[O],j,g,null,y,k,L,S,E)}b>W?nn(c,y,k,!0,!1,P):X(f,g,w,y,k,L,S,E,P)},Je=(c,f,g,w,y,k,L,S,E)=>{let b=0;const W=f.length;let P=c.length-1,O=W-1;for(;b<=P&&b<=O;){const j=c[b],q=f[b]=E?Tn(f[b]):an(f[b]);if(Bn(j,q))K(j,q,g,null,y,k,L,S,E);else break;b++}for(;b<=P&&b<=O;){const j=c[P],q=f[O]=E?Tn(f[O]):an(f[O]);if(Bn(j,q))K(j,q,g,null,y,k,L,S,E);else break;P--,O--}if(b>P){if(b<=O){const j=O+1,q=j<W?f[j].el:w;for(;b<=O;)K(null,f[b]=E?Tn(f[b]):an(f[b]),g,q,y,k,L,S,E),b++}}else if(b>O)for(;b<=P;)be(c[b],y,k,!0),b++;else{const j=b,q=b,ae=new Map;for(b=q;b<=O;b++){const Ae=f[b]=E?Tn(f[b]):an(f[b]);Ae.key!=null&&ae.set(Ae.key,b)}let J,Se=0;const _e=O-q+1;let ge=!1,Ne=0;const kn=new Array(_e);for(b=0;b<_e;b++)kn[b]=0;for(b=j;b<=P;b++){const Ae=c[b];if(Se>=_e){be(Ae,y,k,!0);continue}let je;if(Ae.key!=null)je=ae.get(Ae.key);else for(J=q;J<=O;J++)if(kn[J-q]===0&&Bn(Ae,f[J])){je=J;break}je===void 0?be(Ae,y,k,!0):(kn[je-q]=b+1,je>=Ne?Ne=je:ge=!0,K(Ae,f[je],g,null,y,k,L,S,E),Se++)}const It=ge?Zl(kn):Yn;for(J=It.length-1,b=_e-1;b>=0;b--){const Ae=q+b,je=f[Ae],Ft=f[Ae+1],Ht=Ae+1<W?Ft.el||Ft.placeholder:w;kn[b]===0?K(null,je,g,Ht,y,k,L,S,E):ge&&(J<0||b!==It[J]?pe(je,g,Ht,2):J--)}}},pe=(c,f,g,w,y=null)=>{const{el:k,type:L,transition:S,children:E,shapeFlag:b}=c;if(b&6){pe(c.component.subTree,f,g,w);return}if(b&128){c.suspense.move(f,g,w);return}if(b&64){L.move(c,f,g,qe);return}if(L===Be){s(k,f,g);for(let P=0;P<E.length;P++)pe(E[P],f,g,w);s(c.anchor,f,g);return}if(L===Is){V(c,f,g);return}if(w!==2&&b&1&&S)if(w===0)S.beforeEnter(k),s(k,f,g),De(()=>S.enter(k),y);else{const{leave:P,delayLeave:O,afterLeave:j}=S,q=()=>{c.ctx.isUnmounted?i(k):s(k,f,g)},ae=()=>{k._isLeaving&&k[mn](!0),P(k,()=>{q(),j&&j()})};O?O(k,q,ae):ae()}else s(k,f,g)},be=(c,f,g,w=!1,y=!1)=>{const{type:k,props:L,ref:S,children:E,dynamicChildren:b,shapeFlag:W,patchFlag:P,dirs:O,cacheIndex:j}=c;if(P===-2&&(y=!1),S!=null&&(bn(),bt(S,null,g,c,!0),vn()),j!=null&&(f.renderCache[j]=void 0),W&256){f.ctx.deactivate(c);return}const q=W&1&&O,ae=!vt(c);let J;if(ae&&(J=L&&L.onVnodeBeforeUnmount)&&rn(J,f,c),W&6)ot(c.component,g,w);else{if(W&128){c.suspense.unmount(g,w);return}q&&Fn(c,null,f,"beforeUnmount"),W&64?c.type.remove(c,f,g,qe,w):b&&!b.hasOnce&&(k!==Be||P>0&&P&64)?nn(b,f,g,!1,!0):(k===Be&&P&384||!y&&W&16)&&nn(E,f,g),w&&en(c)}(ae&&(J=L&&L.onVnodeUnmounted)||q)&&De(()=>{J&&rn(J,f,c),q&&Fn(c,null,f,"unmounted")},g)},en=c=>{const{type:f,el:g,anchor:w,transition:y}=c;if(f===Be){Gn(g,w);return}if(f===Is){I(c);return}const k=()=>{i(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(c.shapeFlag&1&&y&&!y.persisted){const{leave:L,delayLeave:S}=y,E=()=>L(g,k);S?S(c.el,k,E):E()}else k()},Gn=(c,f)=>{let g;for(;c!==f;)g=_(c),i(c),c=g;i(f)},ot=(c,f,g)=>{const{bum:w,scope:y,job:k,subTree:L,um:S,m:E,a:b}=c;Yi(E),Yi(b),w&&$t(w),y.stop(),k&&(k.flags|=8,be(L,c,f,g)),S&&De(S,f),De(()=>{c.isUnmounted=!0},f)},nn=(c,f,g,w=!1,y=!1,k=0)=>{for(let L=k;L<c.length;L++)be(c[L],f,g,w,y)},Pn=c=>{if(c.shapeFlag&6)return Pn(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=_(c.anchor||c.el),g=f&&f[cl];return g?_(g):f};let at=!1;const lt=(c,f,g)=>{c==null?f._vnode&&be(f._vnode,null,null,!0):K(f._vnode||null,c,f,null,null,null,g),f._vnode=c,at||(at=!0,Bi(),oo(),at=!1)},qe={p:K,um:be,m:pe,r:en,mt:te,mc:X,pc:ee,pbc:F,n:Pn,o:e};return{render:lt,hydrate:void 0,createApp:Al(lt)}}function Rs({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Hn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Yl(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Ro(e,n,t=!1){const s=e.children,i=n.children;if(D(s)&&D(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Tn(i[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Ro(o,a)),a.type===ws&&a.patchFlag!==-1&&(a.el=o.el),a.type===Fe&&!a.el&&(a.el=o.el)}}function Zl(e){const n=e.slice(),t=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const h=e[s];if(h!==0){if(i=t[t.length-1],e[i]<h){n[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,e[t[a]]<h?r=a+1:o=a;h<e[t[r]]&&(r>0&&(n[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function Io(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Io(n)}function Yi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Fo=e=>e.__isSuspense;function Ql(e,n){n&&n.pendingBranch?D(e)?n.effects.push(...e):n.effects.push(e):ll(e)}const Be=Symbol.for("v-fgt"),ws=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),Is=Symbol.for("v-stc"),wt=[];let Ke=null;function fe(e=!1){wt.push(Ke=e?null:[])}function ec(){wt.pop(),Ke=wt[wt.length-1]||null}let Tt=1;function is(e,n=!1){Tt+=e,e<0&&Ke&&n&&(Ke.hasOnce=!0)}function Ho(e){return e.dynamicChildren=Tt>0?Ke||Yn:null,ec(),Tt>0&&Ke&&Ke.push(e),e}function me(e,n,t,s,i,r){return Ho(z(e,n,t,s,i,r,!0))}function nc(e,n,t,s,i){return Ho(Me(e,n,t,s,i,!0))}function rs(e){return e?e.__v_isVNode===!0:!1}function Bn(e,n){return e.type===n.type&&e.key===n.key}const No=({key:e})=>e??null,Jt=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||Le(e)||$(e)?{i:$e,r:e,k:n,f:!!t}:e:null);function z(e,n=null,t=null,s=0,i=null,r=e===Be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&No(n),ref:n&&Jt(n),scopeId:lo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(ki(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=ye(t)?8:16),Tt>0&&!o&&Ke&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ke.push(l),l}const Me=tc;function tc(e,n=null,t=null,s=0,i=null,r=!1){if((!e||e===_l)&&(e=Fe),rs(e)){const a=An(e,n,!0);return t&&ki(a,t),Tt>0&&!r&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(e)]=a:Ke.push(a)),a.patchFlag=-2,a}if(hc(e)&&(e=e.__vccOpts),n){n=sc(n);let{class:a,style:l}=n;a&&!ye(a)&&(n.class=Qn(a)),le(l)&&(bi(l)&&!D(l)&&(l=Ee({},l)),n.style=ci(l))}const o=ye(e)?1:Fo(e)?128:co(e)?64:le(e)?4:$(e)?2:0;return z(e,n,t,s,i,o,r,!0)}function sc(e){return e?bi(e)||xo(e)?Ee({},e):e:null}function An(e,n,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=e,h=n?rc(i||{},n):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&No(h),ref:n&&n.ref?t&&r?D(r)?r.concat(Jt(n)):[r,Jt(n)]:Jt(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Ct(u,l.clone(u)),u}function ic(e=" ",n=0){return Me(ws,null,e,n)}function Xe(e="",n=!1){return n?(fe(),nc(Fe,null,e)):Me(Fe,null,e)}function an(e){return e==null||typeof e=="boolean"?Me(Fe):D(e)?Me(Be,null,e.slice()):rs(e)?Tn(e):Me(ws,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:An(e)}function ki(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(D(n))t=16;else if(typeof n=="object")if(s&65){const i=n.default;i&&(i._c&&(i._d=!1),ki(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!xo(n)?n._ctx=$e:i===3&&$e&&($e.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else $(n)?(n={default:n,_ctx:$e},t=32):(n=String(n),s&64?(t=16,n=[ic(n)]):t=8);e.children=n,e.shapeFlag|=t}function rc(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const i in s)if(i==="class")n.class!==s.class&&(n.class=Qn([n.class,s.class]));else if(i==="style")n.style=ci([n.style,s.style]);else if(cs(i)){const r=n[i],o=s[i];o&&r!==o&&!(D(r)&&r.includes(o))&&(n[i]=r?[].concat(r,o):o)}else i!==""&&(n[i]=s[i])}return n}function rn(e,n,t,s=null){Qe(e,n,7,[t,s])}const oc=ko();let ac=0;function lc(e,n,t){const s=e.type,i=(n?n.appContext:e.appContext)||oc,r={uid:ac++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new za(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lo(s,i),emitsOptions:Co(s,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Nl.bind(null,r),e.ce&&e.ce(r),r}let He=null;const Oo=()=>He||$e;let os,ei;{const e=ds(),n=(t,s)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};os=n("__VUE_INSTANCE_SETTERS__",t=>He=t),ei=n("__VUE_SSR_SETTERS__",t=>Et=t)}const Pt=e=>{const n=He;return os(e),e.scope.on(),()=>{e.scope.off(),os(n)}},Zi=()=>{He&&He.scope.off(),os(null)};function Wo(e){return e.vnode.shapeFlag&4}let Et=!1;function cc(e,n=!1,t=!1){n&&ei(n);const{props:s,children:i}=e.vnode,r=Wo(e);jl(e,s,r,n),Ul(e,i,t||n);const o=r?uc(e,n):void 0;return n&&ei(!1),o}function uc(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Cl);const{setup:s}=t;if(s){bn();const i=e.setupContext=s.length>1?fc(e):null,r=Pt(e),o=At(s,e,0,[e.props,i]),a=Ir(o);if(vn(),r(),(a||e.sp)&&!vt(e)&&go(e),a){if(o.then(Zi,Zi),n)return o.then(l=>{Qi(e,l)}).catch(l=>{ms(l,e,0)});e.asyncDep=o}else Qi(e,o)}else Bo(e)}function Qi(e,n,t){$(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:le(n)&&(e.setupState=so(n)),Bo(e)}function Bo(e,n,t){const s=e.type;e.render||(e.render=s.render||ln);{const i=Pt(e);bn();try{Tl(e)}finally{vn(),i()}}}const dc={get(e,n){return xe(e,"get",""),e[n]}};function fc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,dc),slots:e.slots,emit:e.emit,expose:n}}function ks(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(so(Ya(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in yt)return yt[t](e)},has(n,t){return t in n||t in yt}})):e.proxy}function hc(e){return $(e)&&"__vccOpts"in e}const Z=(e,n)=>sl(e,n,Et);function mc(e,n,t){try{is(-1);const s=arguments.length;return s===2?le(n)&&!D(n)?rs(n)?Me(e,null,[n]):Me(e,n):Me(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&rs(t)&&(t=[t]),Me(e,n,t))}finally{is(1)}}const pc="3.5.25";let ni;const er=typeof window<"u"&&window.trustedTypes;if(er)try{ni=er.createPolicy("vue",{createHTML:e=>e})}catch{}const Do=ni?e=>ni.createHTML(e):e=>e,gc="http://www.w3.org/2000/svg",bc="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,nr=hn&&hn.createElement("template"),vc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const i=n==="svg"?hn.createElementNS(gc,e):n==="mathml"?hn.createElementNS(bc,e):t?hn.createElement(e,{is:t}):hn.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>hn.createTextNode(e),createComment:e=>hn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>hn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,i,r){const o=t?t.previousSibling:n.lastChild;if(i&&(i===r||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{nr.innerHTML=Do(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=nr.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Sn="transition",ut="animation",xt=Symbol("_vtc"),Ko={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yc=Ee({},uo,Ko),wc=e=>(e.displayName="Transition",e.props=yc,e),tr=wc((e,{slots:n})=>mc(fl,kc(e),n)),Nn=(e,n=[])=>{D(e)?e.forEach(t=>t(...n)):e&&e(...n)},sr=e=>e?D(e)?e.some(n=>n.length>1):e.length>1:!1;function kc(e){const n={};for(const x in e)x in Ko||(n[x]=e[x]);if(e.css===!1)return n;const{name:t="v",type:s,duration:i,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:h=o,appearToClass:u=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:_=`${t}-leave-active`,leaveToClass:C=`${t}-leave-to`}=e,A=Sc(i),K=A&&A[0],re=A&&A[1],{onBeforeEnter:H,onEnter:M,onEnterCancelled:V,onLeave:I,onLeaveCancelled:U,onBeforeAppear:de=H,onAppear:ce=M,onAppearCancelled:X=V}=n,R=(x,G,te,we)=>{x._enterCancelled=we,On(x,G?u:a),On(x,G?h:o),te&&te()},F=(x,G)=>{x._isLeaving=!1,On(x,p),On(x,C),On(x,_),G&&G()},N=x=>(G,te)=>{const we=x?ce:M,Y=()=>R(G,x,te);Nn(we,[G,Y]),ir(()=>{On(G,x?l:r),fn(G,x?u:a),sr(we)||rr(G,s,K,Y)})};return Ee(n,{onBeforeEnter(x){Nn(H,[x]),fn(x,r),fn(x,o)},onBeforeAppear(x){Nn(de,[x]),fn(x,l),fn(x,h)},onEnter:N(!1),onAppear:N(!0),onLeave(x,G){x._isLeaving=!0;const te=()=>F(x,G);fn(x,p),x._enterCancelled?(fn(x,_),lr(x)):(lr(x),fn(x,_)),ir(()=>{x._isLeaving&&(On(x,p),fn(x,C),sr(I)||rr(x,s,re,te))}),Nn(I,[x,te])},onEnterCancelled(x){R(x,!1,void 0,!0),Nn(V,[x])},onAppearCancelled(x){R(x,!0,void 0,!0),Nn(X,[x])},onLeaveCancelled(x){F(x),Nn(U,[x])}})}function Sc(e){if(e==null)return null;if(le(e))return[Fs(e.enter),Fs(e.leave)];{const n=Fs(e);return[n,n]}}function Fs(e){return Sa(e)}function fn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[xt]||(e[xt]=new Set)).add(n)}function On(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[xt];t&&(t.delete(n),t.size||(e[xt]=void 0))}function ir(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _c=0;function rr(e,n,t,s){const i=e._endId=++_c,r=()=>{i===e._endId&&s()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Cc(e,n);if(!o)return s();const h=o+"end";let u=0;const p=()=>{e.removeEventListener(h,_),r()},_=C=>{C.target===e&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},a+1),e.addEventListener(h,_)}function Cc(e,n){const t=window.getComputedStyle(e),s=A=>(t[A]||"").split(", "),i=s(`${Sn}Delay`),r=s(`${Sn}Duration`),o=or(i,r),a=s(`${ut}Delay`),l=s(`${ut}Duration`),h=or(a,l);let u=null,p=0,_=0;n===Sn?o>0&&(u=Sn,p=o,_=r.length):n===ut?h>0&&(u=ut,p=h,_=l.length):(p=Math.max(o,h),u=p>0?o>h?Sn:ut:null,_=u?u===Sn?r.length:l.length:0);const C=u===Sn&&/\b(?:transform|all)(?:,|$)/.test(s(`${Sn}Property`).toString());return{type:u,timeout:p,propCount:_,hasTransform:C}}function or(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>ar(t)+ar(e[s])))}function ar(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function lr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Tc(e,n,t){const s=e[xt];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const cr=Symbol("_vod"),Ec=Symbol("_vsh"),xc=Symbol(""),Mc=/(?:^|;)\s*display\s*:/;function Lc(e,n,t){const s=e.style,i=ye(t);let r=!1;if(t&&!i){if(n)if(ye(n))for(const o of n.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&qt(s,a,"")}else for(const o in n)t[o]==null&&qt(s,o,"");for(const o in t)o==="display"&&(r=!0),qt(s,o,t[o])}else if(i){if(n!==t){const o=s[xc];o&&(t+=";"+o),s.cssText=t,r=Mc.test(t)}}else n&&e.removeAttribute("style");cr in e&&(e[cr]=r?s.display:"",e[Ec]&&(s.display="none"))}const ur=/\s*!important$/;function qt(e,n,t){if(D(t))t.forEach(s=>qt(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=zc(e,n);ur.test(t)?e.setProperty(Vn(s),t.replace(ur,""),"important"):e[s]=t}}const dr=["Webkit","Moz","ms"],Hs={};function zc(e,n){const t=Hs[n];if(t)return t;let s=zn(n);if(s!=="filter"&&s in e)return Hs[n]=s;s=Nr(s);for(let i=0;i<dr.length;i++){const r=dr[i]+s;if(r in e)return Hs[n]=r}return n}const fr="http://www.w3.org/1999/xlink";function hr(e,n,t,s,i,r=Ma(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(fr,n.slice(6,n.length)):e.setAttributeNS(fr,n,t):t==null||r&&!Br(t)?e.removeAttribute(n):e.setAttribute(n,r?"":cn(t)?String(t):t)}function mr(e,n,t,s,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Do(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Br(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(i||n)}function Si(e,n,t,s){e.addEventListener(n,t,s)}function Ac(e,n,t,s){e.removeEventListener(n,t,s)}const pr=Symbol("_vei");function Pc(e,n,t,s,i=null){const r=e[pr]||(e[pr]={}),o=r[n];if(s&&o)o.value=s;else{const[a,l]=Rc(n);if(s){const h=r[n]=Hc(s,i);Si(e,a,h,l)}else o&&(Ac(e,a,o,l),r[n]=void 0)}}const gr=/(?:Once|Passive|Capture)$/;function Rc(e){let n;if(gr.test(e)){n={};let s;for(;s=e.match(gr);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vn(e.slice(2)),n]}let Ns=0;const Ic=Promise.resolve(),Fc=()=>Ns||(Ic.then(()=>Ns=0),Ns=Date.now());function Hc(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Qe(Nc(s,t.value),n,5,[s])};return t.value=e,t.attached=Fc(),t}function Nc(e,n){if(D(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>i=>!i._stopped&&s&&s(i))}else return n}const br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Oc=(e,n,t,s,i,r)=>{const o=i==="svg";n==="class"?Tc(e,s,o):n==="style"?Lc(e,t,s):cs(n)?oi(n)||Pc(e,n,t,s,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Wc(e,n,s,o))?(mr(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&hr(e,n,s,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!ye(s))?mr(e,zn(n),s,r,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),hr(e,n,s,o))};function Wc(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&br(n)&&$(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return br(n)&&ye(t)?!1:n in e}const as=e=>{const n=e.props["onUpdate:modelValue"]||!1;return D(n)?t=>$t(n,t):n},tt=Symbol("_assign"),Bc={deep:!0,created(e,n,t){e[tt]=as(t),Si(e,"change",()=>{const s=e._modelValue,i=Mt(e),r=e.checked,o=e[tt];if(D(s)){const a=ui(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const h=[...s];h.splice(a,1),o(h)}}else if(it(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(jo(e,r))})},mounted:vr,beforeUpdate(e,n,t){e[tt]=as(t),vr(e,n,t)}};function vr(e,{value:n,oldValue:t},s){e._modelValue=n;let i;if(D(n))i=ui(n,s.props.value)>-1;else if(it(n))i=n.has(s.props.value);else{if(n===t)return;i=zt(n,jo(e,!0))}e.checked!==i&&(e.checked=i)}const Dc={deep:!0,created(e,{value:n,modifiers:{number:t}},s){const i=it(n);Si(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?Wr(Mt(o)):Mt(o));e[tt](e.multiple?i?new Set(r):r:r[0]),e._assigning=!0,es(()=>{e._assigning=!1})}),e[tt]=as(s)},mounted(e,{value:n}){yr(e,n)},beforeUpdate(e,n,t){e[tt]=as(t)},updated(e,{value:n}){e._assigning||yr(e,n)}};function yr(e,n){const t=e.multiple,s=D(n);if(!(t&&!s&&!it(n))){for(let i=0,r=e.options.length;i<r;i++){const o=e.options[i],a=Mt(o);if(t)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=n.some(h=>String(h)===String(a)):o.selected=ui(n,a)>-1}else o.selected=n.has(a);else if(zt(Mt(o),n)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Mt(e){return"_value"in e?e._value:e.value}function jo(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Kc=["ctrl","shift","alt","meta"],jc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Kc.some(t=>e[`${t}Key`]&&!n.includes(t))},Vc=(e,n)=>{const t=e._withMods||(e._withMods={}),s=n.join(".");return t[s]||(t[s]=((i,...r)=>{for(let o=0;o<n.length;o++){const a=jc[n[o]];if(a&&a(i,n))return}return e(i,...r)}))},Gc=Ee({patchProp:Oc},vc);let wr;function $c(){return wr||(wr=ql(Gc))}const Uc=((...e)=>{const n=$c().createApp(...e),{mount:t}=n;return n.mount=s=>{const i=qc(s);if(!i)return;const r=n._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,Jc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},n});function Jc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qc(e){return ye(e)?document.querySelector(e):e}const Xc="/favicon.png",Yc="/images/about_music_logo.png",Zc="/images/dk3-min.jpg",Qc="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",rt=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Dmitri Shostakovich",birth:1906,death:1975}],eu={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/stravinsky.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function Vo(e){return eu[e]||null}function nu(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function tu(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],i=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-i),a=n.slice(0,n.length-i).map(h=>h.trim()).filter(Boolean).map(h=>h[0]?h[0].toUpperCase()+".":"").filter(Boolean).join(" "),l=r.join(" ");return a?`${a} ${l}`:l}const Rt=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let ti=Rt.reduce((e,n)=>(e[n.id]=n.label,e),{});const kr=Math.min(...rt.map(e=>e.birth)),su=Math.max(...rt.map(e=>e.birth));let si=[...rt],En=null,xn=null;const iu={r:255,g:255,b:255},ru={r:37,g:99,b:235};ht("#f3f4f6"),Cr(1750),ht("#e6eef8"),Cr(1820),ht("#e8f4ff"),ht("#eef2f7");const ls=1677.5,Xt=1980,Go=Xt-ls,ou=6,au=2,lu=0,Yt={barHeight:50,widthScale:1,fontScale:1},qn={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let Mn={...Yt};function Os(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function Sr(e={}){Mn={barHeight:Os(e.barHeight??Mn.barHeight??Yt.barHeight,qn.barHeight.min,qn.barHeight.max),widthScale:Os(e.widthScale??Mn.widthScale??Yt.widthScale,qn.widthScale.min,qn.widthScale.max),fontScale:Os(e.fontScale??Mn.fontScale??Yt.fontScale,qn.fontScale.min,qn.fontScale.max)}}function cu(){return ou*Mn.widthScale}function Kt(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=Go*cu()+lu,s=(n.clientWidth||window.innerWidth)*au*Mn.widthScale,i=Math.max(t,s);e.style.width=i+"px",e.style.minWidth=i+"px"}function Dn(e){return(e-ls)/Go*100}function $o(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function ht(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(i=>i+i).join(""):n,s=parseInt(t,16);return{r:s>>16&255,g:s>>8&255,b:s&255}}function Ws({r:e,g:n,b:t}){const s=i=>Math.round(i).toString(16).padStart(2,"0");return`#${s(e)}${s(n)}${s(t)}`}function _r(e,n,t){const s=$o(t);return{r:e.r+(n.r-e.r)*s,g:e.g+(n.g-e.g)*s,b:e.b+(n.b-e.b)*s}}function Cr(e){const n=su-kr;return n<=0?0:$o((e-kr)/n)}const uu={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function _i(e){return uu[e]||"#f3f4f6"}function du(e){return e?ti[e]||Rt.find(n=>n.id===e)?.label||e:""}function Tr(e={}){!e||typeof e!="object"||(ti={...ti,...e})}function fu(e){const n=Rt.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function hu(e,n){const t=Number(e),s=Number(n),i=fu(t);if(!Number.isFinite(t)||!Number.isFinite(s)||s<=t)return i;const r=s-t;let o=null,a=0;return Rt.forEach(l=>{const h=Math.max(0,Math.min(s,l.to)-Math.max(t,l.from));h>a&&(a=h,o=l.id)}),o&&a>r/2?o:i}function mu(e){const n=_i(e),t=ht(n),s=_r(t,iu,.12),i=_r(t,ru,.04);return`linear-gradient(145deg, ${Ws(s)} 0%, ${Ws(t)} 58%, ${Ws(i)} 100%)`}function Er(e){Array.isArray(e)?si=[...e]:si=[...rt]}function Ci(){const e=document.getElementById("gantt");if(!e)return;const n=s=>Number.isInteger(En)&&s===En,t=s=>Number.isInteger(xn)&&s===xn;e.querySelectorAll(".bar").forEach(s=>{const i=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",n(i)),s.classList.toggle("bar--hovered",t(i))}),e.querySelectorAll(".bar-connector").forEach(s=>{const i=Number(s.getAttribute("data-lane-index")),r=n(i),o=t(i);s.classList.toggle("bar-connector--selected",r),s.classList.toggle("bar-connector--hover",o)})}function Uo(e){Number.isInteger(e)?En=e:En=null,Ci()}function ii(e){Number.isInteger(e)?xn=e:xn=null,Ci()}function xr(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(ls/10)*10,t=Math.ceil(Xt/10)*10;Rt.forEach(s=>{const i=Math.max(s.from,ls),r=Math.min(s.to,Xt);if(r<=i)return;const o=document.createElement("div");o.className="era-band",o.style.left=Dn(i)+"%",o.style.width=Dn(r)-Dn(i)+"%",o.style.backgroundImage="none",o.style.backgroundColor=_i(s.id),o.textContent=du(s.id)||s.label,s.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===Xt&&(o.style.borderRight="none"),e.appendChild(o)});for(let s=n;s<=t;s+=10){const i=document.createElement("div"),r=s%50===0;i.className="axis-tick "+(r?"major":"minor"),i.style.left=Dn(s)+"%",e.appendChild(i);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=Dn(s)+"%",o.textContent=s,e.appendChild(o)}}function Bs(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="";const s=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,i=document.createDocumentFragment(),r=si||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const o=[...r].sort((C,A)=>C.birth-A.birth),a=o.length,l=o.map((C,A)=>({composer:C,laneIndex:A}));Number.isInteger(En)&&(En<0||En>=a)&&(En=null),Number.isInteger(xn)&&(xn<0||xn>=a)&&(xn=null);const h=2,u=Mn.barHeight,p=u+h,_=a*u+Math.max(0,a-1)*h;e.style.height=_+"px",a&&(l.forEach(({composer:C,laneIndex:A})=>{const K=C.displayName||C.name,re=Dn(C.birth),H=Dn(C.death),M=document.createElement("div");M.className="bar",M.setAttribute("data-lane-index",A),M.setAttribute("data-name",C.name);const V=hu(C.birth,C.death);M.style.backgroundImage=mu(V),M.style.backgroundColor=_i(V);const I=re,U=H-re,ce=A*p+u*.5+s,X=(N,x)=>{const G=document.createElement("div");G.className="bar-connector",G.setAttribute("data-lane-index",A),G.setAttribute("data-side",x),G.style.left=N+"%",G.style.top=-s+"px",G.style.height=ce+"px",i.appendChild(G)};X(I,"start"),X(I+U,"end"),M.style.left=I+"%",M.style.width=U+"%",M.style.top=A*p+"px",M.style.height=u+"px",M.style.lineHeight=u+"px",M.style.fontSize=u*.25*Mn.fontScale+"px";const R=Vo(C.name);if(R){const N=document.createElement("img");N.className="bar-avatar";const x=Math.max(10,Math.round(u*.9));N.style.width=x+"px",N.style.height=x+"px",N.src=R,N.alt=K||C.name,M.appendChild(N)}const F=document.createElement("span");F.className="bar-label",F.textContent=K,M.appendChild(F),e.appendChild(M),M.addEventListener("click",N=>{N.stopPropagation(),Uo(A),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:C,laneIndex:A}}))}),M.addEventListener("mouseenter",()=>ii(A)),M.addEventListener("mouseleave",()=>ii(null)),F.scrollWidth>F.clientWidth&&(F.textContent=tu(K),F.scrollWidth>F.clientWidth&&(F.textContent=nu(K)))}),e.appendChild(i),Ci())}function pu(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const s=4;let i=0,r=0,o=0,a=0,l=0,h=0,u=null;const p=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},_=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true")},C=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",p())};function A(){if(u=null,!n||!t)return;const R=l-i,F=h-r;e.scrollLeft=o-R,e.scrollTop=a-F}const K=R=>{R.button===0&&(n=!0,t=!1,e.classList.remove("panning"),i=R.clientX,r=R.clientY,l=R.clientX,h=R.clientY,o=e.scrollLeft,a=e.scrollTop,R.preventDefault())},re=R=>{if(n){if(l=R.clientX,h=R.clientY,!t){const F=Math.abs(l-i),N=Math.abs(h-r);if(F>s||N>s)_();else return}u===null&&(u=window.requestAnimationFrame(A)),R.preventDefault()}},H=()=>{n&&(n=!1,C(),u!==null&&(cancelAnimationFrame(u),u=null))};e.addEventListener("mousedown",K),window.addEventListener("mousemove",re),window.addEventListener("mouseup",H);let M=null,V=!1,I=0,U=0;const de=R=>{if(M!==null||R.touches.length!==1)return;const F=R.touches[0];M=F.identifier,V=!1,i=F.clientX,r=F.clientY,l=F.clientX,h=F.clientY,I=e.scrollLeft,U=e.scrollTop,C()},ce=R=>{if(M===null)return;const F=Array.from(R.touches).find(G=>G.identifier===M);if(!F)return;l=F.clientX,h=F.clientY;const N=l-i,x=h-r;if(!V)if(Math.abs(N)>s||Math.abs(x)>s)V=!0,_();else return;e.scrollLeft=I-N,e.scrollTop=U-x,R.preventDefault()},X=R=>{M===null||!Array.from(R.changedTouches).some(N=>N.identifier===M)||(M=null,V=!1,C())};e.addEventListener("touchstart",de,{passive:!0}),e.addEventListener("touchmove",ce,{passive:!1}),e.addEventListener("touchend",X,{passive:!0}),e.addEventListener("touchcancel",X,{passive:!0})}function gu(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};let s=e.scrollLeft,i=!1,r=null,o=null;const a=.5,l=5,h=()=>{o!==null&&(clearTimeout(o),o=null)},u=()=>{r!==null&&(clearTimeout(r),r=null)},p=(H,M)=>{u();const V=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;i=!0,e.scrollTo&&!V?(e.scrollTo({left:H,top:M,behavior:"smooth"}),r=setTimeout(()=>{i=!1,r=null},320)):(e.scrollLeft=H,e.scrollTop=M,i=!1)},_=H=>{h(),o=setTimeout(()=>{o=null,K(H)},90)},C=(H,M,V)=>{const I=H.getBoundingClientRect();return I.bottom>M&&I.top<V},A=H=>Number(H.getAttribute("data-lane-index"))||0,K=H=>{const M=Array.from(n.querySelectorAll(".bar"));if(!M.length)return;const V=e.getBoundingClientRect(),U=(t?.getBoundingClientRect()?.bottom??V.top)+1,de=V.bottom,ce=M.find(N=>C(N,U,de));if(!ce)return;const X=e.scrollLeft;X+e.clientWidth;const R=A(ce),F=M.reduce((N,x)=>{const G=A(x);if(!N)return x;const te=A(N);return G<te?x:N},null)||ce;if(H==="right"){if(!(ce.offsetLeft<X-l))return;let x=M.find(Y=>A(Y)>R&&Y.offsetLeft>=X-a&&C(Y,U,de))||null;if(x||(x=M.reduce((Y,Q)=>A(Q)<=R?Y:Y?Q.offsetLeft>Y.offsetLeft?Q:Y:Q,null)),!x)return;const G=x.getBoundingClientRect(),te=U+1,we=G.top-te;Math.abs(we)>a&&p(e.scrollLeft,e.scrollTop+we);return}if(H==="left"){const x=ce.getBoundingClientRect().right>V.right+a,G=X<=a;let te=null;const we=M.filter(pe=>A(pe)>=R?!1:pe.offsetLeft>=X-a);if(!G&&!x&&!we.length||(G?te=F:we.length&&(te=we.reduce((pe,be)=>{if(!pe)return be;const en=A(be),Gn=A(pe);if(en>Gn)return be;if(en===Gn){const ot=Math.abs(be.offsetLeft-X),nn=Math.abs(pe.offsetLeft-X);return ot<nn?be:pe}return pe},null)),te||(te=F),!te))return;const Y=te.getBoundingClientRect(),Q=U+1,ee=Y.top-Q,ze=Math.max(0,te.offsetLeft),Je=ze-e.scrollLeft;(Math.abs(ee)>a||Math.abs(Je)>a)&&p(Math.abs(Je)>a?ze:e.scrollLeft,Math.abs(ee)>a?e.scrollTop+ee:e.scrollTop)}},re=()=>{if(i)return;const H=e.scrollLeft,M=H>s+a,V=H<s-a;M?_("right"):V&&_("left"),H<=a&&_("left"),s=H};return e.addEventListener("scroll",re,{passive:!0}),()=>{e.removeEventListener("scroll",re),h(),u()}}function Mr(e,{left:n=0,top:t=0}){const s=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(e.scrollTo&&!s){e.scrollTo({left:n,top:t,behavior:"smooth"});return}e.scrollLeft=n,e.scrollTop=t}function bu(e={}){Sr(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:rt;Er(n),Tr(e.eraLabels||{}),Kt(),xr(),Bs(),pu();const t=gu(),s=()=>Kt();window.addEventListener("resize",s);const i=document.getElementById("timeline");i&&(i.style.visibility="visible");function r(){const a=document.getElementById("timeline");a&&Mr(a,{left:0,top:0})}function o(){const a=document.getElementById("timeline");a&&Mr(a,{left:Math.max(0,a.scrollWidth-a.clientWidth),top:Math.max(0,a.scrollHeight-a.clientHeight)})}return{goToStart:r,goToEnd:o,setComposers(a){Er(a),Bs()},updateSettings(a){Sr(a||{}),Kt(),Bs()},updateEraLabels(a){Tr(a||{}),Kt(),xr()},setSelectedLane:Uo,setHoveredLane:ii,destroy(){window.removeEventListener("resize",s),t()}}}const Jo=(e,n)=>{const t=e.__vccOpts||e;for(const[s,i]of n)t[s]=i;return t},vu={class:"timeline-wrapper"},yu={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const s=i=>{const r=i.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),a=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(a)?null:a}}))};return bs(()=>{const i=document.getElementById("timeline");i&&i.addEventListener("click",s),t=bu({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),vs(()=>{const i=document.getElementById("timeline");i&&i.removeEventListener("click",s),t?.destroy?.(),t=null}),Ge(()=>n.composers,i=>{t&&t.setComposers(i)},{deep:!0}),Ge(()=>n.settings,i=>{!t||!t.updateSettings||t.updateSettings(i)},{deep:!0}),Ge(()=>n.eraLabels,i=>{!t||!t.updateEraLabels||t.updateEraLabels(i)},{deep:!0}),(i,r)=>(fe(),me("div",vu,[...r[0]||(r[0]=[z("div",{id:"timeline"},[z("div",{class:"timeline-inner"},[z("div",{id:"axis",class:"axis"}),z("div",{id:"gantt"})])],-1)])]))}},wu=Jo(yu,[["__scopeId","data-v-095e97d5"]]),ku=`# Composer fact sheets

## Vivaldi essentials {#antonio-vivaldi}

Name (ru): Антонио Вивальди

- Who he was: Venetian Baroque composer and virtuoso violinist, one of the most influential composers of his time.
- Nickname: Called "Il Prete Rosso" - The Red Priest - because he was an ordained Catholic priest with bright red hair.
- The Four Seasons: His hit piece is The Four Seasons, four violin concertos that paint thunderstorms, birds, icy winds, drunken dancing, etc. - one of the first and most famous examples of "program music" (music that tells a story).
- Music for an orphanage: He spent decades working at the Ospedale della Pieta in Venice, writing concertos and sacred music for an all-female orchestra of orphaned or abandoned girls, which became a tourist attraction in Venice.
- Concerto pioneer: He wrote around 500 concertos and basically set the "standard model" for the Baroque solo concerto (fast-slow-fast), influencing Bach and many others.
- Rise, fall, comeback: Famous in his lifetime, he died poor in Vienna and was largely forgotten until a big Vivaldi revival in the 20th century, when lost manuscripts were rediscovered and his music became concert-hall mainstream again.


## Vivaldi essentials (ru) {#antonio-vivaldi}

- Кто он был: Венецианский композитор эпохи барокко и виртуоз-скрипач, один из самых влиятельных композиторов своего времени.
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

- Кто он был: Немецкий композитор барокко и церковный музыкант, сегодня считается одним из величайших композиторов всех времен.
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

- Кто он был: Итальянский композитор барокко и виртуоз клавишных, значительную часть карьеры провел при дворах Португалии и Испании.
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

- Кто он был: Родился в Германии, но стал британским подданным и сделал карьеру в Лондоне, сочиняя оперы, оратории и инструментальную музыку.
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

- Кто он был: Австрийский композитор классицизма, которого часто называют «отцом симфонии» и «отцом струнного квартета».
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

- Кто он был: Родился в Зальцбурге; композитор классицизма и ребенок-вундеркинд, который ездил по Европе и с ранних лет писал симфонии и оперы.
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

- Кто он был: Немецкий композитор и пианист, который соединил классицизм и романтизм и радикально расширил возможности симфоний и сонат.
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

- Кто он был: Генуэзский скрипичный виртуоз и композитор начала XIX века, знаменитый почти «сверхчеловеческой» техникой.
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

- Кто он был: Венский композитор раннего романтизма; прожил всего 31 год, но оставил огромное наследие песен, камерной музыки и симфоний.
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

- Кто он был: Французский композитор и дирижер романтизма, один из пионеров масштабной программной симфонической музыки.
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

- Кто он был: Русский композитор, которого часто называют отцом русской классической музыки и основателем национальной школы.
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

- Кто он был: Немецкий композитор раннего романтизма, пианист, органист и один из ведущих дирижеров своего поколения.
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

- Кто он был: Польский композитор и пианист-виртуоз, который большую часть взрослой жизни провел в Париже и писал почти исключительно для фортепиано.
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

- Кто он был: Немецкий композитор романтизма, пианист и влиятельный музыкальный критик.
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

- Кто он был: Венгерский пианист-композитор и суперзвезда XIX века, знаменитый взрывной виртуозностью и сценическим эффектом.
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

- Кто он был: Немецкий композитор и драматург, известный масштабными операми, которые он называл «музыкальными драмами».
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

- Кто он был: Ведущий итальянский оперный композитор XIX века, центральная фигура традиции итальянской grand opera.
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

- Кто он был: Родился в Германии (Кёльн), композитор и виолончелист, ставший французской музыкальной знаменитостью, мастер оперетты.
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

- Кто он был: Австрийский композитор и дирижер, «король вальса», сын Иоганна Штрауса-старшего.
- Танцевальные хиты: Он написал «An der schoenen blauen Donau», «Geschichten aus dem Wienerwald», «Kaiserwalzer» и множество других вальсов и полек.
- Успех в оперетте: Его Die Fledermaus передает блеск и легкую иронию поздневенской эпохи XIX века.
- Образ Вены: Его музыка во многом определяет то, как мы «слышим» старую Вену - вальсы, шампанское и бальные залы.

## Johannes Brahms essentials {#johannes-brahms}

- Who he was: German Romantic composer, pianist and conductor, based mainly in Hamburg and Vienna.
- Symphonic craft: His four symphonies, concertos and chamber works are admired for their dense, organic development and structural control.
- Heir to Beethoven: Many contemporaries saw him as Beethoven’s symphonic successor, which made him famously self-critical.
- Absolute music: Unlike Wagner and Liszt, he focused on "pure" instrumental music rather than programmatic stories, fueling a famous aesthetic debate.
- Friendships: His close relationships with Robert and Clara Schumann were central to his personal and artistic life.


## Johannes Brahms essentials (ru) {#johannes-brahms}

- Кто он был: Немецкий композитор романтизма, пианист и дирижер, жил главным образом в Гамбурге и Вене.
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

- Кто он был: Русский композитор и профессиональный химик, участник национальной группы «The Mighty Handful» - «The Five».
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

- Кто он был: Французский композитор, пианист, органист и вундеркинд, активный с середины XIX до начала XX века.
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

- Кто он был: Французский композитор романтизма, умерший молодым, но оставивший одну из самых знаменитых опер в истории.
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

- Кто он был: Русский композитор и участник «The Five», стремившийся создать по-настоящему русский стиль.
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

- Кто он был: Русский композитор-романтик, чья музыка соединяет западные формы с мощным мелодизмом и прямой эмоциональностью.
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

- Кто он был: Чешский композитор-романтик, соединявший классические формы с мелодикой и ритмами, вдохновленными фольклором Богемии и Моравии.
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

- Кто он был: Норвежский композитор-романтик и пианист, тесно связанный с национальной идентичностью своей страны.
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

- Кто он был: Русский композитор, педагог и мастер оркестровки, также участник группы «The Five».
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

- Кто он был: Итальянский оперный композитор и главная фигура позднеромантической итальянской оперы после Верди, знаменитый широкими мелодиями и сильной театральностью.
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

- Кто он был: Австро-богемский композитор позднего романтизма и один из ведущих дирижеров своей эпохи.
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

- Кто он был: Французский композитор, часто связанный с музыкальным импрессионизмом, хотя сам он не любил этот термин.
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

- Кто он был: Экцентричный французский композитор и пианист, работавший в Париже на рубеже XIX-XX веков.
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

- Кто он был: Русский композитор и пианист, чья манера прошла путь от романтизма «в духе Шопена» к очень индивидуальной, мистической гармонии.
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

- Кто он был: Русский композитор, пианист-виртуоз и дирижер, поздний романтик; его карьера охватила время до и после революции.
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

- Кто он был: Французский композитор и мастер оркестровки, часто связан с импрессионизмом, но с очень точным, «классическим» чувством формы.
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

- Кто он был: Русский и советский композитор и пианист, известный резкими ритмами, смелой гармонией и запоминающимися мелодиями.
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

- Кто он был: Советский композитор и пианист, чья карьера развивалась при Сталине и в более поздний советский период.
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
`,Su={class:"app"},_u={class:"topbar"},Cu={class:"language-switcher"},Tu={class:"visually-hidden",for:"language-select"},Eu=["aria-label"],xu=["value"],Mu={class:"menu-nav"},Lu={class:"content"},zu={key:0},Au={class:"filter-dock"},Pu={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},Ru={key:0,class:"nav-controls",role:"group","aria-label":"Timeline navigation"},Iu=["disabled"],Fu=["disabled"],Hu={key:1,class:"scale-controls",role:"group","aria-label":"Adjust timeline size"},Nu=["disabled"],Ou=["disabled"],Wu=["aria-expanded"],Bu={key:0,id:"filter-panel",class:"filter-panel",role:"dialog","aria-label":"Composer filters"},Du={class:"filter-panel__options"},Ku=["onUpdate:modelValue","aria-label"],ju={class:"filter-panel__label"},Vu={class:"filter-panel__actions"},Gu={key:1,class:"about"},$u={class:"about__card"},Uu={class:"about__title"},Ju={class:"about__text"},qu={class:"about__text"},Xu={class:"about__author"},Yu={class:"about__author-body"},Zu={class:"about__author-label"},Qu={class:"about__author-name"},ed={class:"about__contributors"},nd={class:"about__contributors-title"},td={class:"about__contributors-list"},sd={class:"about__contributors-name"},id=["href"],rd={class:"composer-modal__content"},od={class:"composer-modal__header"},ad={class:"composer-modal__titles"},ld={class:"composer-modal__name"},cd={key:0,class:"composer-modal__dates"},ud={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},dd=["disabled"],fd={class:"composer-modal__position"},hd=["disabled"],md={class:"composer-modal__body"},pd={key:0,class:"composer-modal__hero"},gd=["src","alt"],bd={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},vd=["disabled"],yd={class:"composer-modal__position"},wd=["disabled"],kd={class:"composer-modal__hero-meta"},Sd={class:"composer-modal__name-small"},_d={key:0,class:"composer-modal__dates-small"},Cd={class:"composer-modal__playlist"},Td={class:"composer-modal__playlist-header"},Ed={class:"composer-modal__playlist-title"},xd={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},Md=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],Ld={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},zd={class:"composer-modal__description"},Ad={key:0,class:"composer-modal__facts-title"},Pd={key:1,class:"composer-modal__facts"},Rd={class:"composer-modal__fact-text"},Id={key:2,class:"composer-modal__muted"},dt="en",Lr="timeline-language",jt=25,zr=150,Ds=.2,Ar=1.5,Fd=.35,Ks=1.7,Pr=.95,Hd=.6,Vt=2,Gt=6,Nd={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended Classics"},apply:"Apply"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Шибанова",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить"}}},t=Object.keys(n),s=sn(!1),i={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=sn(dt),o=Z(()=>n[r.value]||n.en),a=Z(()=>t.map(d=>({value:d,label:n[d]?.label||d.toUpperCase()}))),l=Z(()=>o.value.appTitle),h=Z(()=>o.value.languageLabel||"Language"),u=Z(()=>o.value.navigation||n.en.navigation),p=Z(()=>o.value.about||n.en.about),_=Z(()=>p.value.contributors||n.en.about.contributors||[]),C=Z(()=>o.value.eras||n.en.eras),A=Z(()=>o.value.composers||{}),K=Z(()=>{const d=A.value.names||{},m={};return Object.entries(d).forEach(([v,T])=>{m[ge(v)]=T}),m}),re=Z(()=>{const d={};return Object.entries(L||{}).forEach(([m,v])=>{const T=ge(m),B=v?.[r.value];if(B){d[T]=B;return}r.value==="en"&&v?.en&&(d[T]=v.en)}),d}),H=Z(()=>({...re.value,...K.value})),M=Z(()=>o.value.filter||n.en.filter),V=Z(()=>({essentials:M.value.groups?.essentials||"Essential Icons",core:M.value.groups?.core||"Core Classics",expanded:M.value.groups?.expanded||"Extended Classics"})),I=Z(()=>M.value.apply||"Apply"),U=Z(()=>{const d=A.value.descriptions||{},m={};return Object.entries(d).forEach(([v,T])=>{m[ge(v)]=T}),m}),de=Z(()=>{const d=A.value.factsTitles||{},m={};return Object.entries(d).forEach(([v,T])=>{m[ge(v)]=T}),m}),ce=Z(()=>o.value.modal||n.en.modal),X=sn(!1),R=sn("composers"),F=[30,40,50,70,100],N="".replace(/\/$/,""),G="https://soundcloud.com/dmitry-kotikov/sets/",te="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",we=new Set;function Y(d,m,v){return Number.isNaN(d)?m:Math.min(v,Math.max(m,d))}function Q(d){const m=Y((d-jt)/(zr-jt),0,1),v=Math.pow(m,Fd),T=Ds+(Ar-Ds)*v;return Y(T,Ds,Ar)}function ee(d){const m=Y((d-jt)/(zr-jt),0,1),v=Math.pow(m,Hd),T=Ks-(Ks-Pr)*v;return Y(T,Pr,Ks)}const ze=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich"]}],Je=sn(ze.reduce((d,m)=>(d[m.id]=!0,d),{})),pe=sn(!1),be=hs({barHeight:F[Vt],widthScale:Q(F[Vt]),fontScale:ee(F[Vt])}),en=sn(Vt),Gn=Z(()=>en.value<=0),ot=Z(()=>en.value>=F.length-1),nn=sn(!0),Pn=sn(!1);function at(d){const m=Y(d,0,F.length-1);en.value=m;const v=F[m];be.barHeight=v,be.widthScale=Q(v),be.fontScale=ee(v)}function lt(d){const m=d>0?1:-1;at(en.value+m)}function qe(){const d=document.getElementById("timeline");if(!d)return;const m=Math.max(0,d.scrollWidth-d.clientWidth),v=Math.max(0,d.scrollHeight-d.clientHeight);nn.value=d.scrollLeft<=Gt&&d.scrollTop<=Gt,Pn.value=d.scrollLeft>=m-Gt&&d.scrollTop>=v-Gt}function Ti(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),qe()}function c(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),qe()}const f=Z(()=>{const d=ze.map(v=>v.id).filter(v=>Je.value[v]),m=new Set;return d.forEach(v=>{ze.find(B=>B.id===v)?.composers?.forEach(B=>m.add(B))}),m}),g=Z(()=>{const d=f.value;return d.size?rt.filter(m=>d.has(m.name)):[]}),w=Z(()=>[...g.value].sort((d,m)=>d.birth-m.birth).map(d=>({...d,displayName:Ne(d.name)}))),{descriptionsByLocale:y,playlistIdsByKey:k,namesByLocale:L}=It(ku),S=sn(null),E=Z(()=>S.value!==null),b=Z(()=>S.value===null?null:w.value[S.value]),W=Z(()=>b.value?Ne(b.value.name):""),P=Z(()=>b.value?Vo(b.value.name):null),O=Z(()=>b.value?Ae(b.value.name):""),j=Z(()=>b.value?je(b.value.name):""),q=Z(()=>b.value?Yo(b.value.name):[]),ae=Z(()=>q.value.map(d=>ca(d)).filter(Boolean)),J=Z(()=>{const d=ae.value.filter(Boolean);return d.length?d:[te]}),Se=Z(()=>(S.value??0)>0),_e=Z(()=>S.value!==null&&S.value<w.value.length-1);function ge(d){return d.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Ne(d){const m=ge(d);return H.value[m]||d}function kn(d){return V.value[d]||d}function It(d){const m=d.split(`
`),v={},T={},B={};let ne=null,ve=null,tn=null,Oe="en",ke=[];const Rn=()=>{(ne||ve)&&[ne,ve].filter(Boolean).forEach(Pe=>{v[Pe]=v[Pe]||{},v[Pe][Oe]=ke.join(`
`).trim(),tn&&(B[Pe]=tn)}),ke=[],tn=null,ve=null};for(const Ce of m){const Pe=Ce.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Pe){Rn();const[,Te,In,un]=Pe;ne=ge(un||Te),ve=ge(Te),Oe=(In||"en").toLowerCase(),tn=un||null;continue}const Un=ne?Ce.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(Un){const[,Te,In]=Un,un=(Te||Oe||"en").toLowerCase(),ba=In.trim();[ne,ve].filter(Boolean).forEach(Ts=>{T[Ts]=T[Ts]||{},T[Ts][un]=ba});continue}ne&&Ce.startsWith("- ")&&ke.push(Ce.replace(/^- /,"").trim())}return Rn(),{descriptionsByLocale:v,playlistIdsByKey:B,namesByLocale:T}}function Ae(d){const m=Ht(d),v=ge(d),T=U.value[v];if(T)return T;const B=m[r.value];return B||(m.en?m.en:Object.values(m)[0]||"")}function je(d){const m=de.value[ge(d)];return m||Xo(d)}function Ft(d,m){const v=ge(m);if(d[v])return d[v];const T=v.split(" ").filter(Boolean),B=T[T.length-1];return B&&d[B]?d[B]:""}function Ht(d){const m=ge(d),v=m.split(" ").filter(Boolean),T=[m],B=v[v.length-1];B&&B!==m&&T.push(B);for(const ne of T)if(y[ne])return y[ne];return{}}function qo(d){return ge(d).replace(/\s+/g,"-").replace(/-+/g,"-")}function Xo(d){const m=i[r.value]||i.en,v=r.value==="ru"?Ne(d):"";if(r.value==="ru"&&v)return`${v} - ${m}`;const T=String(d||"").trim().split(/\s+/).filter(Boolean);if(!T.length)return"";const B=T[T.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(B)&&T.length>=2?T[T.length-2]:B} ${m}`}function Yo(d){const m=[],v=qo(d);v&&!m.includes(v)&&m.push(v);const T=Ft(k,d);return T&&!m.includes(T)&&m.push(T),m}function Ss(d=window.location.pathname){R.value=d==="/about"?"about":"composers"}const Ei=()=>Ss();function xi(d){window.location.pathname!==d&&(history.pushState({},"",d),Ss(d)),X.value=!1}function Mi(d){xi(d==="about"?"/about":"/")}function Zo(){X.value=!X.value}function Qo(){X.value=!1}function ea(){pe.value=!pe.value}function na(){pe.value=!1}function $n(d,{persist:m=!1}={}){const v=t.includes(d)?d:dt;if(r.value=v,m)try{localStorage.setItem(Lr,v)}catch{}}function ta(d){s.value=!0,$n(d,{persist:!0})}function sa(d){const m=d?.target?.value;m&&ta(m)}function ia(){try{return localStorage.getItem(Lr)}catch{return null}}function ra(){const d=ia();if(d&&t.includes(d)){s.value=!0,$n(d);return}oa()}async function oa(){if(s.value){r.value;return}const d=[aa,la];for(const v of d){const T=await v();if(T){const B=String(T).toUpperCase(),ne=B==="RU"?"ru":["DE","AT","CH"].includes(B)?"de":dt;$n(ne);return}}const m=(navigator.language||"").toLowerCase();if(m.startsWith("de")){$n("de");return}if(m.startsWith("ru")){$n("ru");return}$n(dt)}async function aa(){try{const d=await fetch("https://ipapi.co/json/");return d.ok&&(await d.json())?.country_code||null}catch(d){console.warn("ipapi lookup failed:",d)}return null}async function la(){try{const d=await fetch("https://ipwho.is/");return d.ok&&(await d.json())?.country_code||null}catch(d){console.warn("ipwho.is lookup failed:",d)}return null}function Wd(d,m){}function Li(){xi("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function _s(d){const m=d.detail,v=m?.laneIndex;if(Number.isInteger(v)&&w.value[v]){S.value=v;return}const T=m?.composer?.name;if(!T)return;const B=w.value.findIndex(ne=>ne.name===T);B>=0&&(S.value=B)}function zi(){S.value=null}function Ai(){!Se.value||S.value===null||(S.value-=1)}function Pi(){!_e.value||S.value===null||(S.value+=1)}bs(()=>{ra(),Ss(),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(_s),window.addEventListener("popstate",Ei),window.addEventListener("composer-select",_s);const d=document.getElementById("timeline");d&&(d.addEventListener("scroll",qe,{passive:!0}),qe())}),vs(()=>{window.removeEventListener("popstate",Ei),window.removeEventListener("composer-select",_s);const d=document.getElementById("timeline");d&&d.removeEventListener("scroll",qe)}),Ge(l,d=>{d&&(document.title=d)},{immediate:!0}),Ge(r,d=>{const m=t.includes(d)?d:dt;if(m!==d){r.value=m;return}try{document.documentElement.setAttribute("data-lang",m)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(C.value)}),Ge(E,async d=>{d?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await es(),J.value.length&&Ii()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",Ri())}),Ge(S,d=>{const m=window.timeline;!m||typeof m.setSelectedLane!="function"||(Number.isInteger(d)?m.setSelectedLane(d):m.setSelectedLane(null))}),Ge(J,async d=>{E.value&&(Ri(),await es(),d.length&&Ii())}),Ge(()=>w.value.map(d=>d.name),d=>{if(S.value===null)return;const m=b.value;if(!m){S.value=null;return}const v=d.findIndex(T=>T===m.name);v===-1?S.value=null:S.value=v});function Cs(d){return d?N?N.endsWith("/")&&d.startsWith("/")?N+d.slice(1):!N.endsWith("/")&&!d.startsWith("/")?`${N}/${d}`:N+d:d:N}function ca(d){if(!d)return"";const m=G;if(!m)return"";const v=m.endsWith("/");return`${m}${v?"":"/"}${d}`}function Ri(){we.forEach(d=>{try{d.pause(),d.currentTime=0}catch(m){console.error("Failed to stop SoundCloud audio",m)}}),we.clear()}function Ii(d,m=document){const T=(m||document).querySelectorAll("[data-soundcloud-playlist]");T.length&&(T.length,T.forEach(B=>{ua(B,()=>{})}))}async function ua(d,m){const v=()=>{typeof m=="function"&&setTimeout(()=>m(),0)};if(!d||d.dataset.soundcloudReady==="true"||d.dataset.soundcloudReady==="loading"||d.dataset.soundcloudReady==="error"){v();return}const T=d.getAttribute("data-soundcloud-playlist"),B=d.getAttribute("data-soundcloud-playlist-alt")||"",ne=[T,...B.split("|")].map(Oe=>(Oe||"").trim()).filter(Boolean);if(!ne.length){v();return}d.dataset.soundcloudReady="loading",d.innerHTML='<div class="sc-player__status">Loading tracks from SoundCloud...</div>';let ve=null;for(const Oe of ne)try{const ke=await fa(Oe),Rn=Array.isArray(ke.tracks)&&ke.tracks.length?ke.tracks:ke&&ke.kind==="track"?[ke]:[],Ce=ha(Rn);ga(d,Ce,Oe),v();return}catch(ke){if(ve=ke,ke&&ke.status===429){Fi(d,Oe),v();return}}console.error("Failed to build SoundCloud player",ve);const tn=ne[0]||te;Fi(d,tn),v()}async function da(d){if(!d)throw new Error("No track provided");const m=d.media&&Array.isArray(d.media.transcodings)?d.media.transcodings:[];if(m.length){let v=m.find(T=>T&&T.format&&T.format.protocol==="progressive");if(v||(v=m[0]),v&&v.url)try{const T=await ma(v.url,d.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:d.id,transcodingUrl:v.url,finalUrl:T}),T}catch(T){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",T)}}if(!d.id)throw new Error("No track id provided");return pa(d.id,d.track_authorization)}async function fa(d){const m=Cs("/api/soundcloud/playlist")+`?url=${encodeURIComponent(d)}`,v=await fetch(m);if(!v.ok){const T=new Error(`SoundCloud playlist error: ${v.status}`);throw T.status=v.status,T.retryAfter=Number(v.headers?.get("Retry-After"))||void 0,T}return v.json()}function ha(d=[]){return Array.isArray(d)?d.map((m,v)=>{if(!m)return null;const T=`Track ${v+1}`,ne=[m.title,m.publisher_metadata?.release_title,m.permalink,m.permalink_url,m.id?String(m.id):null].map(ve=>typeof ve=="string"?ve.trim():"").filter(Boolean)[0]||T;return{...m,title:ne}}).filter(Boolean):[]}async function ma(d,m){const v=Cs("/api/soundcloud/transcoding")+`?url=${encodeURIComponent(d)}${m?`&track_authorization=${encodeURIComponent(m)}`:""}`,T=await fetch(v);if(!T.ok){const ne=new Error(`SoundCloud transcoding error: ${T.status}`);throw ne.status=T.status,ne.retryAfter=Number(T.headers?.get("Retry-After"))||void 0,ne}const B=await T.json();if(!B?.url)throw new Error("Transcoding response missing url");return B.url}async function pa(d,m){const v=Cs(`/api/soundcloud/streams/${d}`)+(m?`?track_authorization=${encodeURIComponent(m)}`:""),T=await fetch(v);if(!T.ok){const ne=new Error(`SoundCloud stream error: ${T.status}`);throw ne.status=T.status,ne.retryAfter=Number(T.headers?.get("Retry-After"))||void 0,ne}const B=await T.json();if(!B?.url)throw new Error("Stream response missing url");return B.url}function Fi(d,m){const v=`https://w.soundcloud.com/player/?url=${encodeURIComponent(m)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;d.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${v}"
    ></iframe>
  `,d.dataset.soundcloudReady="true"}function ga(d,m,v){if(!Array.isArray(m)||!m.length){d.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',d.dataset.soundcloudReady="error";return}d.classList.add("sc-player");const T=document.createElement("div");T.className="sc-track-list";const B=document.createElement("audio");B.preload="none",we.add(B);let ne=null,ve=null,tn=!1;const Oe=(Ce,Pe)=>{Ce.dataset.state=Pe,Ce.textContent=Pe==="playing"?"⏸":Pe==="loading"?"...":"▶"},ke=Ce=>Oe(Ce,"idle"),Rn=()=>{ve&&ke(ve),ne=null,ve=null};B.addEventListener("ended",Rn),B.addEventListener("pause",()=>{ve&&B.currentTime<(B.duration||1/0)&&ke(ve)}),m.forEach((Ce,Pe)=>{const Un=document.createElement("div");Un.className="sc-track";const Te=document.createElement("button");Te.type="button",Te.className="sc-track__button",Te.setAttribute("aria-label","Play track"),Oe(Te,"idle");const In=document.createElement("div");In.className="sc-track__title",In.textContent=Ce?.title||`Track ${Pe+1}`,Un.append(Te,In),T.append(Un),Te.addEventListener("click",async()=>{if(!tn){if(ne===(Ce?.id??Pe)&&!B.paused){B.pause(),ke(Te);return}tn=!0,Oe(Te,"loading");try{const un=await da(Ce);if(!un)throw new Error("No stream URL returned");B.src=un,await B.play(),ve&&ve!==Te&&ke(ve),ve=Te,ne=Ce?.id??Pe,Oe(Te,"playing")}catch(un){console.error("Failed to play SoundCloud track",un),ke(Te),d.dataset.soundcloudReady="error"}finally{tn=!1}}})}),d.innerHTML="",d.append(T,B),d.dataset.soundcloudReady="true"}return(d,m)=>(fe(),me("div",Su,[z("header",_u,[z("button",{class:"menu-button",onClick:Zo,"aria-label":"Toggle navigation menu"},[...m[5]||(m[5]=[z("span",{class:"menu-icon"},null,-1)])]),z("img",{class:"logo",src:Xc,alt:"Logo",onClick:Li}),z("div",{class:"app-title",role:"button",onClick:Li},oe(l.value),1),z("div",Cu,[z("label",Tu,oe(h.value),1),Di(z("select",{id:"language-select",class:"language-select","onUpdate:modelValue":m[0]||(m[0]=v=>r.value=v),"aria-label":h.value,onChange:sa},[(fe(!0),me(Be,null,Dt(a.value,v=>(fe(),me("option",{key:v.value,value:v.value},oe(v.label),9,xu))),128))],40,Eu),[[Dc,r.value]])])]),z("aside",{class:Qn(["side-menu",{"side-menu--open":X.value}])},[z("nav",Mu,[z("button",{class:Qn(["menu-item",{"menu-item--active":R.value==="composers"}]),onClick:m[1]||(m[1]=v=>Mi("composers"))},oe(u.value.composers),3),z("button",{class:Qn(["menu-item",{"menu-item--active":R.value==="about"}]),onClick:m[2]||(m[2]=v=>Mi("about"))},oe(u.value.about),3)])],2),X.value?(fe(),me("div",{key:0,class:"backdrop",onClick:Qo})):Xe("",!0),z("main",Lu,[R.value==="composers"?(fe(),me("section",zu,[z("div",Au,[z("div",Pu,[pe.value?Xe("",!0):(fe(),me("div",Ru,[z("button",{type:"button",class:"control-btn",disabled:nn.value,onClick:Ti,"aria-label":"Jump to start of timeline"}," ⇤ ",8,Iu),z("button",{type:"button",class:"control-btn",disabled:Pn.value,onClick:c,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Fu)])),pe.value?Xe("",!0):(fe(),me("div",Hu,[z("button",{type:"button",class:"control-btn",disabled:Gn.value,onClick:m[3]||(m[3]=v=>lt(-1)),"aria-label":"Make timeline blocks smaller"}," − ",8,Nu),z("button",{type:"button",class:"control-btn",disabled:ot.value,onClick:m[4]||(m[4]=v=>lt(1)),"aria-label":"Make timeline blocks larger"}," + ",8,Ou)])),z("button",{class:"filter-dock__toggle control-btn control-primary","aria-expanded":pe.value,"aria-controls":"filter-panel",onClick:ea,"aria-label":"Filter composers"},[...m[6]||(m[6]=[z("svg",{class:"filter-icon",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[z("path",{d:"M3 5h18l-7 8v5l-4 2v-7L3 5z"})],-1)])],8,Wu),Me(tr,{name:"filter-fade"},{default:Js(()=>[pe.value?(fe(),me("div",Bu,[z("div",Du,[(fe(),me(Be,null,Dt(ze,v=>z("label",{key:v.id,class:"filter-panel__item"},[Di(z("input",{"onUpdate:modelValue":T=>Je.value[v.id]=T,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${kn(v.id)}`},null,8,Ku),[[Bc,Je.value[v.id]]]),z("span",ju,oe(kn(v.id)),1)])),64))]),z("div",Vu,[z("button",{type:"button",class:"filter-panel__ok control-btn",onClick:na,"aria-label":"Close filters"},oe(I.value),1)])])):Xe("",!0)]),_:1})])]),Me(wu,{composers:w.value,settings:be,"era-labels":C.value},null,8,["composers","settings","era-labels"])])):R.value==="about"?(fe(),me("section",Gu,[z("div",$u,[m[10]||(m[10]=z("img",{class:"about__logo",src:Yc,alt:"Music logo",loading:"lazy"},null,-1)),z("h1",Uu,oe(p.value.title),1),z("p",Ju,oe(p.value.intro),1),z("p",qu,oe(p.value.goal),1),z("div",Xu,[m[9]||(m[9]=z("img",{class:"about__photo",src:Zc,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),z("div",Yu,[z("div",Zu,oe(p.value.authorLabel),1),z("div",Qu,oe(p.value.authorName),1),m[7]||(m[7]=z("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),m[8]||(m[8]=z("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),z("div",ed,[z("div",nd,oe(p.value.contributorsTitle),1),z("ul",td,[(fe(!0),me(Be,null,Dt(_.value,v=>(fe(),me("li",{key:v.url,class:"about__contributors-item"},[z("span",sd,oe(v.name),1),z("a",{class:"about__contributors-link",href:v.url,target:"_blank",rel:"noreferrer"},oe(v.linkText),9,id)]))),128))])])])])):Xe("",!0)]),Me(tr,{name:"fade"},{default:Js(()=>[E.value?(fe(),me("div",{key:0,class:"composer-modal",onClick:Vc(zi,["self"])},[z("div",rd,[z("header",od,[z("div",ad,[z("h2",ld,oe(W.value),1),b.value?(fe(),me("p",cd,oe(b.value.birth)+" — "+oe(b.value.death),1)):Xe("",!0)]),z("div",ud,[z("button",{class:"composer-modal__arrow",onClick:Ai,disabled:!Se.value,"aria-label":"Previous"}," ← ",8,dd),z("span",fd,oe((S.value??0)+1)+" / "+oe(w.value.length),1),z("button",{class:"composer-modal__arrow",onClick:Pi,disabled:!_e.value,"aria-label":"Next"}," → ",8,hd)]),z("button",{class:"composer-modal__close",onClick:zi,"aria-label":"Close composer details"},"×")]),z("div",md,[P.value?(fe(),me("div",pd,[z("img",{class:"composer-modal__photo",src:P.value,alt:W.value},null,8,gd),z("div",bd,[z("button",{class:"composer-modal__arrow",onClick:Ai,disabled:!Se.value,"aria-label":"Previous"}," ← ",8,vd),z("span",yd,oe((S.value??0)+1)+" / "+oe(w.value.length),1),z("button",{class:"composer-modal__arrow",onClick:Pi,disabled:!_e.value,"aria-label":"Next"}," → ",8,wd)]),z("div",kd,[z("div",Sd,oe(W.value),1),b.value?(fe(),me("div",_d,oe(b.value.birth)+" — "+oe(b.value.death),1)):Xe("",!0)])])):Xe("",!0),z("div",Cd,[z("div",Td,[z("div",Ed,oe(ce.value.keyWorks),1),J.value.length?(fe(),me("a",xd,[...m[11]||(m[11]=[z("img",{class:"sc-powered__img",src:Qc,alt:"Powered by SoundCloud"},null,-1)])])):Xe("",!0)]),J.value.length?(fe(),me("div",{key:J.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":J.value[0],"data-soundcloud-playlist-alt":J.value.slice(1).join("|")},[...m[12]||(m[12]=[z("div",{class:"sc-player__status"},"Loading tracks...",-1)])],8,Md)):(fe(),me("div",Ld," Playlist will appear here soon. "))]),z("div",zd,[j.value?(fe(),me("div",Ad,oe(j.value),1)):Xe("",!0),O.value?(fe(),me("ul",Pd,[(fe(!0),me(Be,null,Dt(O.value.split(`
`),(v,T)=>(fe(),me("li",{key:T},[z("span",Rd,oe(v),1)]))),128))])):(fe(),me("p",Id,"No description yet."))])])])])):Xe("",!0)]),_:1})]))}},Od=Jo(Nd,[["__scopeId","data-v-0d0cabf6"]]);Uc(Od).mount("#app");
