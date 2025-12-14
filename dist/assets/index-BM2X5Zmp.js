(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function rs(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const de={},Yn=[],ln=()=>{},Rr=()=>!1,ci=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),os=e=>e.startsWith("onUpdate:"),xe=Object.assign,as=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},va=Object.prototype.hasOwnProperty,re=(e,n)=>va.call(e,n),D=Array.isArray,Zn=e=>Lt(e)==="[object Map]",st=e=>Lt(e)==="[object Set]",Hs=e=>Lt(e)==="[object Date]",U=e=>typeof e=="function",we=e=>typeof e=="string",cn=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Ir=e=>(ue(e)||U(e))&&U(e.then)&&U(e.catch),Fr=Object.prototype.toString,Lt=e=>Fr.call(e),ya=e=>Lt(e).slice(8,-1),Hr=e=>Lt(e)==="[object Object]",ls=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,mt=rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},wa=/-\w/g,zn=ui(e=>e.replace(wa,n=>n.slice(1).toUpperCase())),ka=/\B([A-Z])/g,Vn=ui(e=>e.replace(ka,"-$1").toLowerCase()),Nr=ui(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ei=ui(e=>e?`on${Nr(e)}`:""),Ln=(e,n)=>!Object.is(e,n),$t=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Or=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},Wr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},_a=e=>{const n=we(e)?Number(e):NaN;return isNaN(n)?e:n};let Ns;const di=()=>Ns||(Ns=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cs(e){if(D(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=we(i)?Ea(i):cs(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(we(e)||ue(e))return e}const Sa=/;(?![^(]*\))/g,Ta=/:([^]+)/,Ca=/\/\*[^]*?\*\//g;function Ea(e){const n={};return e.replace(Ca,"").split(Sa).forEach(t=>{if(t){const i=t.split(Ta);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function Qn(e){let n="";if(we(e))n=e;else if(D(e))for(let t=0;t<e.length;t++){const i=Qn(e[t]);i&&(n+=i+" ")}else if(ue(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const xa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ma=rs(xa);function Br(e){return!!e||e===""}function La(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=zt(e[i],n[i]);return t}function zt(e,n){if(e===n)return!0;let t=Hs(e),i=Hs(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=cn(e),i=cn(n),t||i)return e===n;if(t=D(e),i=D(n),t||i)return t&&i?La(e,n):!1;if(t=ue(e),i=ue(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=n.hasOwnProperty(o);if(a&&!l||!a&&l||!zt(e[o],n[o]))return!1}}return String(e)===String(n)}function us(e,n){return e.findIndex(t=>zt(t,n))}const Dr=e=>!!(e&&e.__v_isRef===!0),le=e=>we(e)?e:e==null?"":D(e)||ue(e)&&(e.toString===Fr||!U(e.toString))?Dr(e)?le(e.value):JSON.stringify(e,Kr,2):String(e),Kr=(e,n)=>Dr(n)?Kr(e,n.value):Zn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[xi(i,r)+" =>"]=s,t),{})}:st(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>xi(t))}:cn(n)?xi(n):ue(n)&&!D(n)&&!Hr(n)?String(n):n,xi=(e,n="")=>{var t;return cn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let We;class za{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!n&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=We;try{return We=this,n()}finally{We=t}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){this._on>0&&--this._on===0&&(We=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Aa(){return We}let fe;const Mi=new WeakSet;class jr{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mi.has(this)&&(Mi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Os(this),$r(this);const n=fe,t=Ye;fe=this,Ye=!0;try{return this.fn()}finally{Ur(this),fe=n,Ye=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)fs(n);this.deps=this.depsTail=void 0,Os(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ji(this)&&this.run()}get dirty(){return ji(this)}}let Vr=0,pt,gt;function Gr(e,n=!1){if(e.flags|=8,n){e.next=gt,gt=e;return}e.next=pt,pt=e}function ds(){Vr++}function hs(){if(--Vr>0)return;if(gt){let n=gt;for(gt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;pt;){let n=pt;for(pt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function $r(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ur(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),fs(i),Pa(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function ji(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Jr(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Jr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kt)||(e.globalVersion=kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ji(e))))return;e.flags|=2;const n=e.dep,t=fe,i=Ye;fe=e,Ye=!0;try{$r(e);const s=e.fn(e._value);(n.version===0||Ln(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{fe=t,Ye=i,Ur(e),e.flags&=-3}}function fs(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)fs(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pa(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Ye=!0;const qr=[];function bn(){qr.push(Ye),Ye=!1}function vn(){const e=qr.pop();Ye=e===void 0?!0:e}function Os(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=fe;fe=void 0;try{n()}finally{fe=t}}}let kt=0;class Ra{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ms{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!fe||!Ye||fe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==fe)t=this.activeLink=new Ra(fe,this),fe.deps?(t.prevDep=fe.depsTail,fe.depsTail.nextDep=t,fe.depsTail=t):fe.deps=fe.depsTail=t,Xr(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=fe.depsTail,t.nextDep=void 0,fe.depsTail.nextDep=t,fe.depsTail=t,fe.deps===t&&(fe.deps=i)}return t}trigger(n){this.version++,kt++,this.notify(n)}notify(n){ds();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hs()}}}function Xr(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)Xr(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Vi=new WeakMap,Kn=Symbol(""),Gi=Symbol(""),_t=Symbol("");function Me(e,n,t){if(Ye&&fe){let i=Vi.get(e);i||Vi.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new ms),s.map=i,s.key=t),s.track()}}function pn(e,n,t,i,s,r){const o=Vi.get(e);if(!o){kt++;return}const a=l=>{l&&l.trigger()};if(ds(),n==="clear")o.forEach(a);else{const l=D(e),f=l&&ls(t);if(l&&t==="length"){const u=Number(i);o.forEach((p,T)=>{(T==="length"||T===_t||!cn(T)&&T>=u)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),f&&a(o.get(_t)),n){case"add":l?f&&a(o.get("length")):(a(o.get(Kn)),Zn(e)&&a(o.get(Gi)));break;case"delete":l||(a(o.get(Kn)),Zn(e)&&a(o.get(Gi)));break;case"set":Zn(e)&&a(o.get(Kn));break}}hs()}function Jn(e){const n=se(e);return n===e?n:(Me(n,"iterate",_t),Ue(e)?n:n.map(Ze))}function hi(e){return Me(e=se(e),"iterate",_t),e}function Sn(e,n){return yn(e)?jn(e)?it(Ze(n)):it(n):Ze(n)}const Ia={__proto__:null,[Symbol.iterator](){return Li(this,Symbol.iterator,e=>Sn(this,e))},concat(...e){return Jn(this).concat(...e.map(n=>D(n)?Jn(n):n))},entries(){return Li(this,"entries",e=>(e[1]=Sn(this,e[1]),e))},every(e,n){return dn(this,"every",e,n,void 0,arguments)},filter(e,n){return dn(this,"filter",e,n,t=>t.map(i=>Sn(this,i)),arguments)},find(e,n){return dn(this,"find",e,n,t=>Sn(this,t),arguments)},findIndex(e,n){return dn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return dn(this,"findLast",e,n,t=>Sn(this,t),arguments)},findLastIndex(e,n){return dn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return dn(this,"forEach",e,n,void 0,arguments)},includes(...e){return zi(this,"includes",e)},indexOf(...e){return zi(this,"indexOf",e)},join(e){return Jn(this).join(e)},lastIndexOf(...e){return zi(this,"lastIndexOf",e)},map(e,n){return dn(this,"map",e,n,void 0,arguments)},pop(){return ct(this,"pop")},push(...e){return ct(this,"push",e)},reduce(e,...n){return Ws(this,"reduce",e,n)},reduceRight(e,...n){return Ws(this,"reduceRight",e,n)},shift(){return ct(this,"shift")},some(e,n){return dn(this,"some",e,n,void 0,arguments)},splice(...e){return ct(this,"splice",e)},toReversed(){return Jn(this).toReversed()},toSorted(e){return Jn(this).toSorted(e)},toSpliced(...e){return Jn(this).toSpliced(...e)},unshift(...e){return ct(this,"unshift",e)},values(){return Li(this,"values",e=>Sn(this,e))}};function Li(e,n,t){const i=hi(e),s=i[n]();return i!==e&&!Ue(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Fa=Array.prototype;function dn(e,n,t,i,s,r){const o=hi(e),a=o!==e&&!Ue(e),l=o[n];if(l!==Fa[n]){const p=l.apply(e,r);return a?Ze(p):p}let f=t;o!==e&&(a?f=function(p,T){return t.call(this,Sn(e,p),T,e)}:t.length>2&&(f=function(p,T){return t.call(this,p,T,e)}));const u=l.call(o,f,i);return a&&s?s(u):u}function Ws(e,n,t,i){const s=hi(e);let r=t;return s!==e&&(Ue(e)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,e)}):r=function(o,a,l){return t.call(this,o,Sn(e,a),l,e)}),s[n](r,...i)}function zi(e,n,t){const i=se(e);Me(i,"iterate",_t);const s=i[n](...t);return(s===-1||s===!1)&&bs(t[0])?(t[0]=se(t[0]),i[n](...t)):s}function ct(e,n,t=[]){bn(),ds();const i=se(e)[n].apply(e,t);return hs(),vn(),i}const Ha=rs("__proto__,__v_isRef,__isVue"),Yr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cn));function Na(e){cn(e)||(e=String(e));const n=se(this);return Me(n,"has",e),n.hasOwnProperty(e)}class Zr{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Ua:to:r?no:eo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const o=D(n);if(!s){let l;if(o&&(l=Ia[t]))return l;if(t==="hasOwnProperty")return Na}const a=Reflect.get(n,t,ze(n)?n:i);if((cn(t)?Yr.has(t):Ha(t))||(s||Me(n,"get",t),r))return a;if(ze(a)){const l=o&&ls(t)?a:a.value;return s&&ue(l)?Ui(l):l}return ue(a)?s?Ui(a):fi(a):a}}class Qr extends Zr{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const o=D(n)&&ls(t);if(!this._isShallow){const f=yn(r);if(!Ue(i)&&!yn(i)&&(r=se(r),i=se(i)),!o&&ze(r)&&!ze(i))return f||(r.value=i),!0}const a=o?Number(t)<n.length:re(n,t),l=Reflect.set(n,t,i,ze(n)?n:s);return n===se(s)&&(a?Ln(i,r)&&pn(n,"set",t,i):pn(n,"add",t,i)),l}deleteProperty(n,t){const i=re(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&pn(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!cn(t)||!Yr.has(t))&&Me(n,"has",t),i}ownKeys(n){return Me(n,"iterate",D(n)?"length":Kn),Reflect.ownKeys(n)}}class Oa extends Zr{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Wa=new Qr,Ba=new Oa,Da=new Qr(!0);const $i=e=>e,Nt=e=>Reflect.getPrototypeOf(e);function Ka(e,n,t){return function(...i){const s=this.__v_raw,r=se(s),o=Zn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=s[e](...i),u=t?$i:n?it:Ze;return!n&&Me(r,"iterate",l?Gi:Kn),{next(){const{value:p,done:T}=f.next();return T?{value:p,done:T}:{value:a?[u(p[0]),u(p[1])]:u(p),done:T}},[Symbol.iterator](){return this}}}}function Ot(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function ja(e,n){const t={get(s){const r=this.__v_raw,o=se(r),a=se(s);e||(Ln(s,a)&&Me(o,"get",s),Me(o,"get",a));const{has:l}=Nt(o),f=n?$i:e?it:Ze;if(l.call(o,s))return f(r.get(s));if(l.call(o,a))return f(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Me(se(s),"iterate",Kn),s.size},has(s){const r=this.__v_raw,o=se(r),a=se(s);return e||(Ln(s,a)&&Me(o,"has",s),Me(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=se(a),f=n?$i:e?it:Ze;return!e&&Me(l,"iterate",Kn),a.forEach((u,p)=>s.call(r,f(u),f(p),o))}};return xe(t,e?{add:Ot("add"),set:Ot("set"),delete:Ot("delete"),clear:Ot("clear")}:{add(s){!n&&!Ue(s)&&!yn(s)&&(s=se(s));const r=se(this);return Nt(r).has.call(r,s)||(r.add(s),pn(r,"add",s,s)),this},set(s,r){!n&&!Ue(r)&&!yn(r)&&(r=se(r));const o=se(this),{has:a,get:l}=Nt(o);let f=a.call(o,s);f||(s=se(s),f=a.call(o,s));const u=l.call(o,s);return o.set(s,r),f?Ln(r,u)&&pn(o,"set",s,r):pn(o,"add",s,r),this},delete(s){const r=se(this),{has:o,get:a}=Nt(r);let l=o.call(r,s);l||(s=se(s),l=o.call(r,s)),a&&a.call(r,s);const f=r.delete(s);return l&&pn(r,"delete",s,void 0),f},clear(){const s=se(this),r=s.size!==0,o=s.clear();return r&&pn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ka(s,e,n)}),t}function ps(e,n){const t=ja(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(re(t,s)&&s in i?t:i,s,r)}const Va={get:ps(!1,!1)},Ga={get:ps(!1,!0)},$a={get:ps(!0,!1)};const eo=new WeakMap,no=new WeakMap,to=new WeakMap,Ua=new WeakMap;function Ja(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ja(ya(e))}function fi(e){return yn(e)?e:gs(e,!1,Wa,Va,eo)}function Xa(e){return gs(e,!1,Da,Ga,no)}function Ui(e){return gs(e,!0,Ba,$a,to)}function gs(e,n,t,i,s){if(!ue(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=qa(e);if(r===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,r===2?i:t);return s.set(e,a),a}function jn(e){return yn(e)?jn(e.__v_raw):!!(e&&e.__v_isReactive)}function yn(e){return!!(e&&e.__v_isReadonly)}function Ue(e){return!!(e&&e.__v_isShallow)}function bs(e){return e?!!e.__v_raw:!1}function se(e){const n=e&&e.__v_raw;return n?se(n):e}function Ya(e){return!re(e,"__v_skip")&&Object.isExtensible(e)&&Or(e,"__v_skip",!0),e}const Ze=e=>ue(e)?fi(e):e,it=e=>ue(e)?Ui(e):e;function ze(e){return e?e.__v_isRef===!0:!1}function sn(e){return Za(e,!1)}function Za(e,n){return ze(e)?e:new Qa(e,n)}class Qa{constructor(n,t){this.dep=new ms,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:se(n),this._value=t?n:Ze(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||Ue(n)||yn(n);n=i?n:se(n),Ln(n,t)&&(this._rawValue=n,this._value=i?n:Ze(n),this.dep.trigger())}}function el(e){return ze(e)?e.value:e}const nl={get:(e,n,t)=>n==="__v_raw"?e:el(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return ze(s)&&!ze(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function io(e){return jn(e)?e:new Proxy(e,nl)}class tl{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new ms(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Gr(this,!0),!0}get value(){const n=this.dep.track();return Jr(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function il(e,n,t=!1){let i,s;return U(e)?i=e:(i=e.get,s=e.set),new tl(i,s,t)}const Wt={},Zt=new WeakMap;let Wn;function sl(e,n=!1,t=Wn){if(t){let i=Zt.get(t);i||Zt.set(t,i=[]),i.push(e)}}function rl(e,n,t=de){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,f=R=>s?R:Ue(R)||s===!1||s===0?gn(R,1):gn(R);let u,p,T,C,z=!1,O=!1;if(ze(e)?(p=()=>e.value,z=Ue(e)):jn(e)?(p=()=>f(e),z=!0):D(e)?(O=!0,z=e.some(R=>jn(R)||Ue(R)),p=()=>e.map(R=>{if(ze(R))return R.value;if(jn(R))return f(R);if(U(R))return l?l(R,2):R()})):U(e)?n?p=l?()=>l(e,2):e:p=()=>{if(T){bn();try{T()}finally{vn()}}const R=Wn;Wn=u;try{return l?l(e,3,[C]):e(C)}finally{Wn=R}}:p=ln,n&&s){const R=p,$=s===!0?1/0:s;p=()=>gn(R(),$)}const oe=Aa(),F=()=>{u.stop(),oe&&oe.active&&as(oe.effects,u)};if(r&&n){const R=n;n=(...$)=>{R(...$),F()}}let I=O?new Array(e.length).fill(Wt):Wt;const G=R=>{if(!(!(u.flags&1)||!u.dirty&&!R))if(n){const $=u.run();if(s||z||(O?$.some((ae,ie)=>Ln(ae,I[ie])):Ln($,I))){T&&T();const ae=Wn;Wn=u;try{const ie=[$,I===Wt?void 0:O&&I[0]===Wt?[]:I,C];I=$,l?l(n,3,ie):n(...ie)}finally{Wn=ae}}}else u.run()};return a&&a(G),u=new jr(p),u.scheduler=o?()=>o(G,!1):G,C=R=>sl(R,!1,u),T=u.onStop=()=>{const R=Zt.get(u);if(R){if(l)l(R,4);else for(const $ of R)$();Zt.delete(u)}},n?i?G(!0):I=u.run():o?o(G.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function gn(e,n=1/0,t){if(n<=0||!ue(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,ze(e))gn(e.value,n,t);else if(D(e))for(let i=0;i<e.length;i++)gn(e[i],n,t);else if(st(e)||Zn(e))e.forEach(i=>{gn(i,n,t)});else if(Hr(e)){for(const i in e)gn(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&gn(e[i],n,t)}return e}function At(e,n,t,i){try{return i?e(...i):e()}catch(s){mi(s,n,t)}}function Qe(e,n,t,i){if(U(e)){const s=At(e,n,t,i);return s&&Ir(s)&&s.catch(r=>{mi(r,n,t)}),s}if(D(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Qe(e[r],n,t,i));return s}}function mi(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||de;if(n){let a=n.parent;const l=n.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,f)===!1)return}a=a.parent}if(r){bn(),At(r,null,10,[e,l,f]),vn();return}}ol(e,t,s,i,o)}function ol(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const Ie=[];let on=-1;const et=[];let Tn=null,Xn=0;const so=Promise.resolve();let Qt=null;function ei(e){const n=Qt||so;return e?n.then(this?e.bind(this):e):n}function al(e){let n=on+1,t=Ie.length;for(;n<t;){const i=n+t>>>1,s=Ie[i],r=St(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function vs(e){if(!(e.flags&1)){const n=St(e),t=Ie[Ie.length-1];!t||!(e.flags&2)&&n>=St(t)?Ie.push(e):Ie.splice(al(n),0,e),e.flags|=1,ro()}}function ro(){Qt||(Qt=so.then(ao))}function ll(e){D(e)?et.push(...e):Tn&&e.id===-1?Tn.splice(Xn+1,0,e):e.flags&1||(et.push(e),e.flags|=1),ro()}function Bs(e,n,t=on+1){for(;t<Ie.length;t++){const i=Ie[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Ie.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function oo(e){if(et.length){const n=[...new Set(et)].sort((t,i)=>St(t)-St(i));if(et.length=0,Tn){Tn.push(...n);return}for(Tn=n,Xn=0;Xn<Tn.length;Xn++){const t=Tn[Xn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Tn=null,Xn=0}}const St=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ao(e){try{for(on=0;on<Ie.length;on++){const n=Ie[on];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),At(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;on<Ie.length;on++){const n=Ie[on];n&&(n.flags&=-2)}on=-1,Ie.length=0,oo(),Qt=null,(Ie.length||et.length)&&ao()}}let $e=null,lo=null;function ni(e){const n=$e;return $e=e,lo=e&&e.type.__scopeId||null,n}function Ji(e,n=$e,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&si(-1);const r=ni(n);let o;try{o=e(...s)}finally{ni(r),i._d&&si(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ds(e,n){if($e===null)return e;const t=ki($e),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,o,a,l=de]=n[s];r&&(U(r)&&(r={mounted:r,updated:r}),r.deep&&gn(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Fn(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(bn(),Qe(l,t,8,[e.el,a,e,n]),vn())}}const cl=Symbol("_vte"),co=e=>e.__isTeleport,mn=Symbol("_leaveCb"),Bt=Symbol("_enterCb");function ul(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bi(()=>{e.isMounted=!0}),vi(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],uo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},ho=e=>{const n=e.subTree;return n.component?ho(n.component):n},dl={name:"BaseTransition",props:uo,setup(e,{slots:n}){const t=Oo(),i=ul();return()=>{const s=n.default&&po(n.default(),!0);if(!s||!s.length)return;const r=fo(s),o=se(e),{mode:a}=o;if(i.isLeaving)return Ai(r);const l=Ks(r);if(!l)return Ai(r);let f=qi(l,o,i,t,p=>f=p);l.type!==Fe&&Tt(l,f);let u=t.subTree&&Ks(t.subTree);if(u&&u.type!==Fe&&!Bn(u,l)&&ho(t).type!==Fe){let p=qi(u,o,i,t);if(Tt(u,p),a==="out-in"&&l.type!==Fe)return i.isLeaving=!0,p.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,u=void 0},Ai(r);a==="in-out"&&l.type!==Fe?p.delayLeave=(T,C,z)=>{const O=mo(i,u);O[String(u.key)]=u,T[mn]=()=>{C(),T[mn]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{z(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function fo(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Fe){n=t;break}}return n}const hl=dl;function mo(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function qi(e,n,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:T,onLeave:C,onAfterLeave:z,onLeaveCancelled:O,onBeforeAppear:oe,onAppear:F,onAfterAppear:I,onAppearCancelled:G}=n,R=String(e.key),$=mo(t,e),ae=(W,K)=>{W&&Qe(W,i,9,K)},ie=(W,K)=>{const A=K[1];ae(W,K),D(W)?W.every(y=>y.length<=1)&&A():W.length<=1&&A()},ne={mode:o,persisted:a,beforeEnter(W){let K=l;if(!t.isMounted)if(r)K=oe||l;else return;W[mn]&&W[mn](!0);const A=$[R];A&&Bn(e,A)&&A.el[mn]&&A.el[mn](),ae(K,[W])},enter(W){let K=f,A=u,y=p;if(!t.isMounted)if(r)K=F||f,A=I||u,y=G||p;else return;let j=!1;const Q=W[Bt]=me=>{j||(j=!0,me?ae(y,[W]):ae(A,[W]),ne.delayedLeave&&ne.delayedLeave(),W[Bt]=void 0)};K?ie(K,[W,Q]):Q()},leave(W,K){const A=String(e.key);if(W[Bt]&&W[Bt](!0),t.isUnmounting)return K();ae(T,[W]);let y=!1;const j=W[mn]=Q=>{y||(y=!0,K(),Q?ae(O,[W]):ae(z,[W]),W[mn]=void 0,$[A]===e&&delete $[A])};$[A]=e,C?ie(C,[W,j]):j()},clone(W){const K=qi(W,n,t,i,s);return s&&s(K),K}};return ne}function Ai(e){if(pi(e))return e=An(e),e.children=null,e}function Ks(e){if(!pi(e))return co(e.type)&&e.children?fo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&U(t.default))return t.default()}}function Tt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Tt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function po(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Be?(o.patchFlag&128&&s++,i=i.concat(po(o.children,n,a))):(n||o.type!==Fe)&&i.push(a!=null?An(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function go(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ti=new WeakMap;function bt(e,n,t,i,s=!1){if(D(e)){e.forEach((z,O)=>bt(z,n&&(D(n)?n[O]:n),t,i,s));return}if(vt(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&bt(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?ki(i.component):i.el,o=s?null:r,{i:a,r:l}=e,f=n&&n.r,u=a.refs===de?a.refs={}:a.refs,p=a.setupState,T=se(p),C=p===de?Rr:z=>re(T,z);if(f!=null&&f!==l){if(js(n),we(f))u[f]=null,C(f)&&(p[f]=null);else if(ze(f)){f.value=null;const z=n;z.k&&(u[z.k]=null)}}if(U(l))At(l,a,12,[o,u]);else{const z=we(l),O=ze(l);if(z||O){const oe=()=>{if(e.f){const F=z?C(l)?p[l]:u[l]:l.value;if(s)D(F)&&as(F,r);else if(D(F))F.includes(r)||F.push(r);else if(z)u[l]=[r],C(l)&&(p[l]=u[l]);else{const I=[r];l.value=I,e.k&&(u[e.k]=I)}}else z?(u[l]=o,C(l)&&(p[l]=o)):O&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const F=()=>{oe(),ti.delete(e)};F.id=-1,ti.set(e,F),De(F,t)}else js(e),oe()}}}function js(e){const n=ti.get(e);n&&(n.flags|=8,ti.delete(e))}di().requestIdleCallback;di().cancelIdleCallback;const vt=e=>!!e.type.__asyncLoader,pi=e=>e.type.__isKeepAlive;function fl(e,n){bo(e,"a",n)}function ml(e,n){bo(e,"da",n)}function bo(e,n,t=He){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(gi(n,i,t),t){let s=t.parent;for(;s&&s.parent;)pi(s.parent.vnode)&&pl(i,n,t,s),s=s.parent}}function pl(e,n,t,i){const s=gi(n,e,i,!0);vo(()=>{as(i[n],s)},t)}function gi(e,n,t=He,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{bn();const a=Pt(t),l=Qe(n,t,e,o);return a(),vn(),l});return i?s.unshift(r):s.push(r),r}}const wn=e=>(n,t=He)=>{(!Et||e==="sp")&&gi(e,(...i)=>n(...i),t)},gl=wn("bm"),bi=wn("m"),bl=wn("bu"),vl=wn("u"),vi=wn("bum"),vo=wn("um"),yl=wn("sp"),wl=wn("rtg"),kl=wn("rtc");function _l(e,n=He){gi("ec",e,n)}const Sl=Symbol.for("v-ndc");function Dt(e,n,t,i){let s;const r=t,o=D(e);if(o||we(e)){const a=o&&jn(e);let l=!1,f=!1;a&&(l=!Ue(e),f=yn(e),e=hi(e)),s=new Array(e.length);for(let u=0,p=e.length;u<p;u++)s[u]=n(l?f?it(Ze(e[u])):Ze(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=n(a+1,a,void 0,r)}else if(ue(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>n(a,l,void 0,r));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const u=a[l];s[l]=n(e[u],u,l,r)}}else s=[];return s}const Xi=e=>e?Wo(e)?ki(e):Xi(e.parent):null,yt=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xi(e.parent),$root:e=>Xi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wo(e),$forceUpdate:e=>e.f||(e.f=()=>{vs(e.update)}),$nextTick:e=>e.n||(e.n=ei.bind(e.proxy)),$watch:e=>Fl.bind(e)}),Pi=(e,n)=>e!==de&&!e.__isScriptSetup&&re(e,n),Tl={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;if(n[0]!=="$"){const T=o[n];if(T!==void 0)switch(T){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(Pi(i,n))return o[n]=1,i[n];if(s!==de&&re(s,n))return o[n]=2,s[n];if(re(r,n))return o[n]=3,r[n];if(t!==de&&re(t,n))return o[n]=4,t[n];Yi&&(o[n]=0)}}const f=yt[n];let u,p;if(f)return n==="$attrs"&&Me(e.attrs,"get",""),f(e);if((u=a.__cssModules)&&(u=u[n]))return u;if(t!==de&&re(t,n))return o[n]=4,t[n];if(p=l.config.globalProperties,re(p,n))return p[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return Pi(s,n)?(s[n]=t,!0):i!==de&&re(i,n)?(i[n]=t,!0):re(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||e!==de&&a[0]!=="$"&&re(e,a)||Pi(n,a)||re(r,a)||re(i,a)||re(yt,a)||re(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:re(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Vs(e){return D(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Yi=!0;function Cl(e){const n=wo(e),t=e.proxy,i=e.ctx;Yi=!1,n.beforeCreate&&Gs(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:f,created:u,beforeMount:p,mounted:T,beforeUpdate:C,updated:z,activated:O,deactivated:oe,beforeDestroy:F,beforeUnmount:I,destroyed:G,unmounted:R,render:$,renderTracked:ae,renderTriggered:ie,errorCaptured:ne,serverPrefetch:W,expose:K,inheritAttrs:A,components:y,directives:j,filters:Q}=n;if(f&&El(f,i,null),o)for(const q in o){const X=o[q];U(X)&&(i[q]=X.bind(t))}if(s){const q=s.call(t,t);ue(q)&&(e.data=fi(q))}if(Yi=!0,r)for(const q in r){const X=r[q],_e=U(X)?X.bind(t,t):U(X.get)?X.get.bind(t,t):ln,Je=!U(X)&&U(X.set)?X.set.bind(t):ln,ge=ee({get:_e,set:Je});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>ge.value,set:ve=>ge.value=ve})}if(a)for(const q in a)yo(a[q],i,t,q);if(l){const q=U(l)?l.call(t):l;Reflect.ownKeys(q).forEach(X=>{Pl(X,q[X])})}u&&Gs(u,e,"c");function J(q,X){D(X)?X.forEach(_e=>q(_e.bind(t))):X&&q(X.bind(t))}if(J(gl,p),J(bi,T),J(bl,C),J(vl,z),J(fl,O),J(ml,oe),J(_l,ne),J(kl,ae),J(wl,ie),J(vi,I),J(vo,R),J(yl,W),D(K))if(K.length){const q=e.exposed||(e.exposed={});K.forEach(X=>{Object.defineProperty(q,X,{get:()=>t[X],set:_e=>t[X]=_e,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===ln&&(e.render=$),A!=null&&(e.inheritAttrs=A),y&&(e.components=y),j&&(e.directives=j),W&&go(e)}function El(e,n,t=ln){D(e)&&(e=Zi(e));for(const i in e){const s=e[i];let r;ue(s)?"default"in s?r=Ut(s.from||i,s.default,!0):r=Ut(s.from||i):r=Ut(s),ze(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[i]=r}}function Gs(e,n,t){Qe(D(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function yo(e,n,t,i){let s=i.includes(".")?So(t,i):()=>t[i];if(we(e)){const r=n[e];U(r)&&Ge(s,r)}else if(U(e))Ge(s,e.bind(t));else if(ue(e))if(D(e))e.forEach(r=>yo(r,n,t,i));else{const r=U(e.handler)?e.handler.bind(t):n[e.handler];U(r)&&Ge(s,r,e)}}function wo(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(n);let l;return a?l=a:!s.length&&!t&&!i?l=n:(l={},s.length&&s.forEach(f=>ii(l,f,o,!0)),ii(l,n,o)),ue(n)&&r.set(n,l),l}function ii(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&ii(e,r,t,!0),s&&s.forEach(o=>ii(e,o,t,!0));for(const o in n)if(!(i&&o==="expose")){const a=xl[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const xl={data:$s,props:Us,emits:Us,methods:ht,computed:ht,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:ht,directives:ht,watch:Ll,provide:$s,inject:Ml};function $s(e,n){return n?e?function(){return xe(U(e)?e.call(this,this):e,U(n)?n.call(this,this):n)}:n:e}function Ml(e,n){return ht(Zi(e),Zi(n))}function Zi(e){if(D(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Re(e,n){return e?[...new Set([].concat(e,n))]:n}function ht(e,n){return e?xe(Object.create(null),e,n):n}function Us(e,n){return e?D(e)&&D(n)?[...new Set([...e,...n])]:xe(Object.create(null),Vs(e),Vs(n??{})):n}function Ll(e,n){if(!e)return n;if(!n)return e;const t=xe(Object.create(null),e);for(const i in n)t[i]=Re(e[i],n[i]);return t}function ko(){return{app:null,config:{isNativeTag:Rr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Al(e,n){return function(i,s=null){U(i)||(i=xe({},i)),s!=null&&!ue(s)&&(s=null);const r=ko(),o=new WeakSet,a=[];let l=!1;const f=r.app={_uid:zl++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:pc,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&U(u.install)?(o.add(u),u.install(f,...p)):U(u)&&(o.add(u),u(f,...p))),f},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),f},component(u,p){return p?(r.components[u]=p,f):r.components[u]},directive(u,p){return p?(r.directives[u]=p,f):r.directives[u]},mount(u,p,T){if(!l){const C=f._ceVNode||Le(i,s);return C.appContext=r,T===!0?T="svg":T===!1&&(T=void 0),e(C,u,T),l=!0,f._container=u,u.__vue_app__=f,ki(C.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qe(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,p){return r.provides[u]=p,f},runWithContext(u){const p=nt;nt=f;try{return u()}finally{nt=p}}};return f}}let nt=null;function Pl(e,n){if(He){let t=He.provides;const i=He.parent&&He.parent.provides;i===t&&(t=He.provides=Object.create(i)),t[e]=n}}function Ut(e,n,t=!1){const i=Oo();if(i||nt){let s=nt?nt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&U(n)?n.call(i&&i.proxy):n}}const Rl=Symbol.for("v-scx"),Il=()=>Ut(Rl);function Ge(e,n,t){return _o(e,n,t)}function _o(e,n,t=de){const{immediate:i,deep:s,flush:r,once:o}=t,a=xe({},t),l=n&&i||!n&&r!=="post";let f;if(Et){if(r==="sync"){const C=Il();f=C.__watcherHandles||(C.__watcherHandles=[])}else if(!l){const C=()=>{};return C.stop=ln,C.resume=ln,C.pause=ln,C}}const u=He;a.call=(C,z,O)=>Qe(C,u,z,O);let p=!1;r==="post"?a.scheduler=C=>{De(C,u&&u.suspense)}:r!=="sync"&&(p=!0,a.scheduler=(C,z)=>{z?C():vs(C)}),a.augmentJob=C=>{n&&(C.flags|=4),p&&(C.flags|=2,u&&(C.id=u.uid,C.i=u))};const T=rl(e,n,a);return Et&&(f?f.push(T):l&&T()),T}function Fl(e,n,t){const i=this.proxy,s=we(e)?e.includes(".")?So(i,e):()=>i[e]:e.bind(i,i);let r;U(n)?r=n:(r=n.handler,t=n);const o=Pt(this),a=_o(s,r.bind(i),t);return o(),a}function So(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Hl=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${zn(n)}Modifiers`]||e[`${Vn(n)}Modifiers`];function Nl(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||de;let s=t;const r=n.startsWith("update:"),o=r&&Hl(i,n.slice(7));o&&(o.trim&&(s=t.map(u=>we(u)?u.trim():u)),o.number&&(s=t.map(Wr)));let a,l=i[a=Ei(n)]||i[a=Ei(zn(n))];!l&&r&&(l=i[a=Ei(Vn(n))]),l&&Qe(l,e,6,s);const f=i[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(f,e,6,s)}}const Ol=new WeakMap;function To(e,n,t=!1){const i=t?Ol:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!U(e)){const l=f=>{const u=To(f,n,!0);u&&(a=!0,xe(o,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ue(e)&&i.set(e,null),null):(D(r)?r.forEach(l=>o[l]=null):xe(o,r),ue(e)&&i.set(e,o),o)}function yi(e,n){return!e||!ci(n)?!1:(n=n.slice(2).replace(/Once$/,""),re(e,n[0].toLowerCase()+n.slice(1))||re(e,Vn(n))||re(e,n))}function Js(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:f,renderCache:u,props:p,data:T,setupState:C,ctx:z,inheritAttrs:O}=e,oe=ni(e);let F,I;try{if(t.shapeFlag&4){const R=s||i,$=R;F=an(f.call($,R,u,p,C,T,z)),I=a}else{const R=n;F=an(R.length>1?R(p,{attrs:a,slots:o,emit:l}):R(p,null)),I=n.props?a:Wl(a)}}catch(R){wt.length=0,mi(R,e,1),F=Le(Fe)}let G=F;if(I&&O!==!1){const R=Object.keys(I),{shapeFlag:$}=G;R.length&&$&7&&(r&&R.some(os)&&(I=Bl(I,r)),G=An(G,I,!1,!0))}return t.dirs&&(G=An(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&Tt(G,t.transition),F=G,ni(oe),F}const Wl=e=>{let n;for(const t in e)(t==="class"||t==="style"||ci(t))&&((n||(n={}))[t]=e[t]);return n},Bl=(e,n)=>{const t={};for(const i in e)(!os(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function Dl(e,n,t){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=n,f=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?qs(i,o,f):!!o;if(l&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const T=u[p];if(o[T]!==i[T]&&!yi(f,T))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?qs(i,o,f):!0:!!o;return!1}function qs(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!yi(t,r))return!0}return!1}function Kl({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const Co={},Eo=()=>Object.create(Co),xo=e=>Object.getPrototypeOf(e)===Co;function jl(e,n,t,i=!1){const s={},r=Eo();e.propsDefaults=Object.create(null),Mo(e,n,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);t?e.props=i?s:Xa(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Vl(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=se(s),[l]=e.propsOptions;let f=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let T=u[p];if(yi(e.emitsOptions,T))continue;const C=n[T];if(l)if(re(r,T))C!==r[T]&&(r[T]=C,f=!0);else{const z=zn(T);s[z]=Qi(l,a,z,C,e,!1)}else C!==r[T]&&(r[T]=C,f=!0)}}}else{Mo(e,n,s,r)&&(f=!0);let u;for(const p in a)(!n||!re(n,p)&&((u=Vn(p))===p||!re(n,u)))&&(l?t&&(t[p]!==void 0||t[u]!==void 0)&&(s[p]=Qi(l,a,p,void 0,e,!0)):delete s[p]);if(r!==a)for(const p in r)(!n||!re(n,p))&&(delete r[p],f=!0)}f&&pn(e.attrs,"set","")}function Mo(e,n,t,i){const[s,r]=e.propsOptions;let o=!1,a;if(n)for(let l in n){if(mt(l))continue;const f=n[l];let u;s&&re(s,u=zn(l))?!r||!r.includes(u)?t[u]=f:(a||(a={}))[u]=f:yi(e.emitsOptions,l)||(!(l in i)||f!==i[l])&&(i[l]=f,o=!0)}if(r){const l=se(t),f=a||de;for(let u=0;u<r.length;u++){const p=r[u];t[p]=Qi(s,l,p,f[p],e,!re(f,p))}}return o}function Qi(e,n,t,i,s,r){const o=e[t];if(o!=null){const a=re(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&U(l)){const{propsDefaults:f}=s;if(t in f)i=f[t];else{const u=Pt(s);i=f[t]=l.call(null,n),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Vn(t))&&(i=!0))}return i}const Gl=new WeakMap;function Lo(e,n,t=!1){const i=t?Gl:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!U(e)){const u=p=>{l=!0;const[T,C]=Lo(p,n,!0);xe(o,T),C&&a.push(...C)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return ue(e)&&i.set(e,Yn),Yn;if(D(r))for(let u=0;u<r.length;u++){const p=zn(r[u]);Xs(p)&&(o[p]=de)}else if(r)for(const u in r){const p=zn(u);if(Xs(p)){const T=r[u],C=o[p]=D(T)||U(T)?{type:T}:xe({},T),z=C.type;let O=!1,oe=!0;if(D(z))for(let F=0;F<z.length;++F){const I=z[F],G=U(I)&&I.name;if(G==="Boolean"){O=!0;break}else G==="String"&&(oe=!1)}else O=U(z)&&z.name==="Boolean";C[0]=O,C[1]=oe,(O||re(C,"default"))&&a.push(p)}}const f=[o,a];return ue(e)&&i.set(e,f),f}function Xs(e){return e[0]!=="$"&&!mt(e)}const ys=e=>e==="_"||e==="_ctx"||e==="$stable",ws=e=>D(e)?e.map(an):[an(e)],$l=(e,n,t)=>{if(n._n)return n;const i=Ji((...s)=>ws(n(...s)),t);return i._c=!1,i},zo=(e,n,t)=>{const i=e._ctx;for(const s in e){if(ys(s))continue;const r=e[s];if(U(r))n[s]=$l(s,r,i);else if(r!=null){const o=ws(r);n[s]=()=>o}}},Ao=(e,n)=>{const t=ws(n);e.slots.default=()=>t},Po=(e,n,t)=>{for(const i in n)(t||!ys(i))&&(e[i]=n[i])},Ul=(e,n,t)=>{const i=e.slots=Eo();if(e.vnode.shapeFlag&32){const s=n._;s?(Po(i,n,t),t&&Or(i,"_",s,!0)):zo(n,i)}else n&&Ao(e,n)},Jl=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,o=de;if(i.shapeFlag&32){const a=n._;a?t&&a===1?r=!1:Po(s,n,t):(r=!n.$stable,zo(n,s)),o=n}else n&&(Ao(e,n),o={default:1});if(r)for(const a in s)!ys(a)&&o[a]==null&&delete s[a]},De=Ql;function ql(e){return Xl(e)}function Xl(e,n){const t=di();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:f,setElementText:u,parentNode:p,nextSibling:T,setScopeId:C=ln,insertStaticContent:z}=e,O=(c,h,g,k=null,w=null,_=null,M=void 0,S=null,x=!!h.dynamicChildren)=>{if(c===h)return;c&&!Bn(c,h)&&(k=Pn(c),ve(c,w,_,!0),c=null),h.patchFlag===-2&&(x=!1,h.dynamicChildren=null);const{type:b,ref:N,shapeFlag:P}=h;switch(b){case wi:oe(c,h,g,k);break;case Fe:F(c,h,g,k);break;case Ii:c==null&&I(h,g,k,M);break;case Be:y(c,h,g,k,w,_,M,S,x);break;default:P&1?$(c,h,g,k,w,_,M,S,x):P&6?j(c,h,g,k,w,_,M,S,x):(P&64||P&128)&&b.process(c,h,g,k,w,_,M,S,x,qe)}N!=null&&w?bt(N,c&&c.ref,_,h||c,!h):N==null&&c&&c.ref!=null&&bt(c.ref,null,_,c,!0)},oe=(c,h,g,k)=>{if(c==null)i(h.el=a(h.children),g,k);else{const w=h.el=c.el;h.children!==c.children&&f(w,h.children)}},F=(c,h,g,k)=>{c==null?i(h.el=l(h.children||""),g,k):h.el=c.el},I=(c,h,g,k)=>{[c.el,c.anchor]=z(c.children,h,g,k,c.el,c.anchor)},G=({el:c,anchor:h},g,k)=>{let w;for(;c&&c!==h;)w=T(c),i(c,g,k),c=w;i(h,g,k)},R=({el:c,anchor:h})=>{let g;for(;c&&c!==h;)g=T(c),s(c),c=g;s(h)},$=(c,h,g,k,w,_,M,S,x)=>{if(h.type==="svg"?M="svg":h.type==="math"&&(M="mathml"),c==null)ae(h,g,k,w,_,M,S,x);else{const b=c.el&&c.el._isVueCE?c.el:null;try{b&&b._beginPatch(),W(c,h,w,_,M,S,x)}finally{b&&b._endPatch()}}},ae=(c,h,g,k,w,_,M,S)=>{let x,b;const{props:N,shapeFlag:P,transition:H,dirs:V}=c;if(x=c.el=o(c.type,_,N&&N.is,N),P&8?u(x,c.children):P&16&&ne(c.children,x,null,k,w,Ri(c,_),M,S),V&&Fn(c,null,k,"created"),ie(x,c,c.scopeId,M,k),N){for(const ce in N)ce!=="value"&&!mt(ce)&&r(x,ce,null,N[ce],_,k);"value"in N&&r(x,"value",null,N.value,_),(b=N.onVnodeBeforeMount)&&rn(b,k,c)}V&&Fn(c,null,k,"beforeMount");const Z=Yl(w,H);Z&&H.beforeEnter(x),i(x,h,g),((b=N&&N.onVnodeMounted)||Z||V)&&De(()=>{b&&rn(b,k,c),Z&&H.enter(x),V&&Fn(c,null,k,"mounted")},w)},ie=(c,h,g,k,w)=>{if(g&&C(c,g),k)for(let _=0;_<k.length;_++)C(c,k[_]);if(w){let _=w.subTree;if(h===_||Fo(_.type)&&(_.ssContent===h||_.ssFallback===h)){const M=w.vnode;ie(c,M,M.scopeId,M.slotScopeIds,w.parent)}}},ne=(c,h,g,k,w,_,M,S,x=0)=>{for(let b=x;b<c.length;b++){const N=c[b]=S?Cn(c[b]):an(c[b]);O(null,N,h,g,k,w,_,M,S)}},W=(c,h,g,k,w,_,M)=>{const S=h.el=c.el;let{patchFlag:x,dynamicChildren:b,dirs:N}=h;x|=c.patchFlag&16;const P=c.props||de,H=h.props||de;let V;if(g&&Hn(g,!1),(V=H.onVnodeBeforeUpdate)&&rn(V,g,h,c),N&&Fn(h,c,g,"beforeUpdate"),g&&Hn(g,!0),(P.innerHTML&&H.innerHTML==null||P.textContent&&H.textContent==null)&&u(S,""),b?K(c.dynamicChildren,b,S,g,k,Ri(h,w),_):M||X(c,h,S,null,g,k,Ri(h,w),_,!1),x>0){if(x&16)A(S,P,H,g,w);else if(x&2&&P.class!==H.class&&r(S,"class",null,H.class,w),x&4&&r(S,"style",P.style,H.style,w),x&8){const Z=h.dynamicProps;for(let ce=0;ce<Z.length;ce++){const Y=Z[ce],Se=P[Y],Te=H[Y];(Te!==Se||Y==="value")&&r(S,Y,Se,Te,w,g)}}x&1&&c.children!==h.children&&u(S,h.children)}else!M&&b==null&&A(S,P,H,g,w);((V=H.onVnodeUpdated)||N)&&De(()=>{V&&rn(V,g,h,c),N&&Fn(h,c,g,"updated")},k)},K=(c,h,g,k,w,_,M)=>{for(let S=0;S<h.length;S++){const x=c[S],b=h[S],N=x.el&&(x.type===Be||!Bn(x,b)||x.shapeFlag&198)?p(x.el):g;O(x,b,N,null,k,w,_,M,!0)}},A=(c,h,g,k,w)=>{if(h!==g){if(h!==de)for(const _ in h)!mt(_)&&!(_ in g)&&r(c,_,h[_],null,w,k);for(const _ in g){if(mt(_))continue;const M=g[_],S=h[_];M!==S&&_!=="value"&&r(c,_,S,M,w,k)}"value"in g&&r(c,"value",h.value,g.value,w)}},y=(c,h,g,k,w,_,M,S,x)=>{const b=h.el=c?c.el:a(""),N=h.anchor=c?c.anchor:a("");let{patchFlag:P,dynamicChildren:H,slotScopeIds:V}=h;V&&(S=S?S.concat(V):V),c==null?(i(b,g,k),i(N,g,k),ne(h.children||[],g,N,w,_,M,S,x)):P>0&&P&64&&H&&c.dynamicChildren?(K(c.dynamicChildren,H,g,w,_,M,S),(h.key!=null||w&&h===w.subTree)&&Ro(c,h,!0)):X(c,h,g,N,w,_,M,S,x)},j=(c,h,g,k,w,_,M,S,x)=>{h.slotScopeIds=S,c==null?h.shapeFlag&512?w.ctx.activate(h,g,k,M,x):Q(h,g,k,w,_,M,x):me(c,h,x)},Q=(c,h,g,k,w,_,M)=>{const S=c.component=lc(c,k,w);if(pi(c)&&(S.ctx.renderer=qe),cc(S,!1,M),S.asyncDep){if(w&&w.registerDep(S,J,M),!c.el){const x=S.subTree=Le(Fe);F(null,x,h,g),c.placeholder=x.el}}else J(S,c,h,g,w,_,M)},me=(c,h,g)=>{const k=h.component=c.component;if(Dl(c,h,g))if(k.asyncDep&&!k.asyncResolved){q(k,h,g);return}else k.next=h,k.update();else h.el=c.el,k.vnode=h},J=(c,h,g,k,w,_,M)=>{const S=()=>{if(c.isMounted){let{next:P,bu:H,u:V,parent:Z,vnode:ce}=c;{const Ne=Io(c);if(Ne){P&&(P.el=ce.el,q(c,P,M)),Ne.asyncDep.then(()=>{c.isUnmounted||S()});return}}let Y=P,Se;Hn(c,!1),P?(P.el=ce.el,q(c,P,M)):P=ce,H&&$t(H),(Se=P.props&&P.props.onVnodeBeforeUpdate)&&rn(Se,Z,P,ce),Hn(c,!0);const Te=Js(c),be=c.subTree;c.subTree=Te,O(be,Te,p(be.el),Pn(be),c,w,_),P.el=Te.el,Y===null&&Kl(c,Te.el),V&&De(V,w),(Se=P.props&&P.props.onVnodeUpdated)&&De(()=>rn(Se,Z,P,ce),w)}else{let P;const{el:H,props:V}=h,{bm:Z,m:ce,parent:Y,root:Se,type:Te}=c,be=vt(h);Hn(c,!1),Z&&$t(Z),!be&&(P=V&&V.onVnodeBeforeMount)&&rn(P,Y,h),Hn(c,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(Te);const Ne=c.subTree=Js(c);O(null,Ne,g,k,c,w,_),h.el=Ne.el}if(ce&&De(ce,w),!be&&(P=V&&V.onVnodeMounted)){const Ne=h;De(()=>rn(P,Y,Ne),w)}(h.shapeFlag&256||Y&&vt(Y.vnode)&&Y.vnode.shapeFlag&256)&&c.a&&De(c.a,w),c.isMounted=!0,h=g=k=null}};c.scope.on();const x=c.effect=new jr(S);c.scope.off();const b=c.update=x.run.bind(x),N=c.job=x.runIfDirty.bind(x);N.i=c,N.id=c.uid,x.scheduler=()=>vs(N),Hn(c,!0),b()},q=(c,h,g)=>{h.component=c;const k=c.vnode.props;c.vnode=h,c.next=null,Vl(c,h.props,k,g),Jl(c,h.children,g),bn(),Bs(c),vn()},X=(c,h,g,k,w,_,M,S,x=!1)=>{const b=c&&c.children,N=c?c.shapeFlag:0,P=h.children,{patchFlag:H,shapeFlag:V}=h;if(H>0){if(H&128){Je(b,P,g,k,w,_,M,S,x);return}else if(H&256){_e(b,P,g,k,w,_,M,S,x);return}}V&8?(N&16&&nn(b,w,_),P!==b&&u(g,P)):N&16?V&16?Je(b,P,g,k,w,_,M,S,x):nn(b,w,_,!0):(N&8&&u(g,""),V&16&&ne(P,g,k,w,_,M,S,x))},_e=(c,h,g,k,w,_,M,S,x)=>{c=c||Yn,h=h||Yn;const b=c.length,N=h.length,P=Math.min(b,N);let H;for(H=0;H<P;H++){const V=h[H]=x?Cn(h[H]):an(h[H]);O(c[H],V,g,null,w,_,M,S,x)}b>N?nn(c,w,_,!0,!1,P):ne(h,g,k,w,_,M,S,x,P)},Je=(c,h,g,k,w,_,M,S,x)=>{let b=0;const N=h.length;let P=c.length-1,H=N-1;for(;b<=P&&b<=H;){const V=c[b],Z=h[b]=x?Cn(h[b]):an(h[b]);if(Bn(V,Z))O(V,Z,g,null,w,_,M,S,x);else break;b++}for(;b<=P&&b<=H;){const V=c[P],Z=h[H]=x?Cn(h[H]):an(h[H]);if(Bn(V,Z))O(V,Z,g,null,w,_,M,S,x);else break;P--,H--}if(b>P){if(b<=H){const V=H+1,Z=V<N?h[V].el:k;for(;b<=H;)O(null,h[b]=x?Cn(h[b]):an(h[b]),g,Z,w,_,M,S,x),b++}}else if(b>H)for(;b<=P;)ve(c[b],w,_,!0),b++;else{const V=b,Z=b,ce=new Map;for(b=Z;b<=H;b++){const Ae=h[b]=x?Cn(h[b]):an(h[b]);Ae.key!=null&&ce.set(Ae.key,b)}let Y,Se=0;const Te=H-Z+1;let be=!1,Ne=0;const kn=new Array(Te);for(b=0;b<Te;b++)kn[b]=0;for(b=V;b<=P;b++){const Ae=c[b];if(Se>=Te){ve(Ae,w,_,!0);continue}let je;if(Ae.key!=null)je=ce.get(Ae.key);else for(Y=Z;Y<=H;Y++)if(kn[Y-Z]===0&&Bn(Ae,h[Y])){je=Y;break}je===void 0?ve(Ae,w,_,!0):(kn[je-Z]=b+1,je>=Ne?Ne=je:be=!0,O(Ae,h[je],g,null,w,_,M,S,x),Se++)}const It=be?Zl(kn):Yn;for(Y=It.length-1,b=Te-1;b>=0;b--){const Ae=Z+b,je=h[Ae],Ft=h[Ae+1],Ht=Ae+1<N?Ft.el||Ft.placeholder:k;kn[b]===0?O(null,je,g,Ht,w,_,M,S,x):be&&(Y<0||b!==It[Y]?ge(je,g,Ht,2):Y--)}}},ge=(c,h,g,k,w=null)=>{const{el:_,type:M,transition:S,children:x,shapeFlag:b}=c;if(b&6){ge(c.component.subTree,h,g,k);return}if(b&128){c.suspense.move(h,g,k);return}if(b&64){M.move(c,h,g,qe);return}if(M===Be){i(_,h,g);for(let P=0;P<x.length;P++)ge(x[P],h,g,k);i(c.anchor,h,g);return}if(M===Ii){G(c,h,g);return}if(k!==2&&b&1&&S)if(k===0)S.beforeEnter(_),i(_,h,g),De(()=>S.enter(_),w);else{const{leave:P,delayLeave:H,afterLeave:V}=S,Z=()=>{c.ctx.isUnmounted?s(_):i(_,h,g)},ce=()=>{_._isLeaving&&_[mn](!0),P(_,()=>{Z(),V&&V()})};H?H(_,Z,ce):ce()}else i(_,h,g)},ve=(c,h,g,k=!1,w=!1)=>{const{type:_,props:M,ref:S,children:x,dynamicChildren:b,shapeFlag:N,patchFlag:P,dirs:H,cacheIndex:V}=c;if(P===-2&&(w=!1),S!=null&&(bn(),bt(S,null,g,c,!0),vn()),V!=null&&(h.renderCache[V]=void 0),N&256){h.ctx.deactivate(c);return}const Z=N&1&&H,ce=!vt(c);let Y;if(ce&&(Y=M&&M.onVnodeBeforeUnmount)&&rn(Y,h,c),N&6)ot(c.component,g,k);else{if(N&128){c.suspense.unmount(g,k);return}Z&&Fn(c,null,h,"beforeUnmount"),N&64?c.type.remove(c,h,g,qe,k):b&&!b.hasOnce&&(_!==Be||P>0&&P&64)?nn(b,h,g,!1,!0):(_===Be&&P&384||!w&&N&16)&&nn(x,h,g),k&&en(c)}(ce&&(Y=M&&M.onVnodeUnmounted)||Z)&&De(()=>{Y&&rn(Y,h,c),Z&&Fn(c,null,h,"unmounted")},g)},en=c=>{const{type:h,el:g,anchor:k,transition:w}=c;if(h===Be){Gn(g,k);return}if(h===Ii){R(c);return}const _=()=>{s(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(c.shapeFlag&1&&w&&!w.persisted){const{leave:M,delayLeave:S}=w,x=()=>M(g,_);S?S(c.el,_,x):x()}else _()},Gn=(c,h)=>{let g;for(;c!==h;)g=T(c),s(c),c=g;s(h)},ot=(c,h,g)=>{const{bum:k,scope:w,job:_,subTree:M,um:S,m:x,a:b}=c;Ys(x),Ys(b),k&&$t(k),w.stop(),_&&(_.flags|=8,ve(M,c,h,g)),S&&De(S,h),De(()=>{c.isUnmounted=!0},h)},nn=(c,h,g,k=!1,w=!1,_=0)=>{for(let M=_;M<c.length;M++)ve(c[M],h,g,k,w)},Pn=c=>{if(c.shapeFlag&6)return Pn(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const h=T(c.anchor||c.el),g=h&&h[cl];return g?T(g):h};let at=!1;const lt=(c,h,g)=>{c==null?h._vnode&&ve(h._vnode,null,null,!0):O(h._vnode||null,c,h,null,null,null,g),h._vnode=c,at||(at=!0,Bs(),oo(),at=!1)},qe={p:O,um:ve,m:ge,r:en,mt:Q,mc:ne,pc:X,pbc:K,n:Pn,o:e};return{render:lt,hydrate:void 0,createApp:Al(lt)}}function Ri({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Hn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Yl(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Ro(e,n,t=!1){const i=e.children,s=n.children;if(D(i)&&D(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Cn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Ro(o,a)),a.type===wi&&a.patchFlag!==-1&&(a.el=o.el),a.type===Fe&&!a.el&&(a.el=o.el)}}function Zl(e){const n=e.slice(),t=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const f=e[i];if(f!==0){if(s=t[t.length-1],e[s]<f){n[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,e[t[a]]<f?r=a+1:o=a;f<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function Io(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Io(n)}function Ys(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Fo=e=>e.__isSuspense;function Ql(e,n){n&&n.pendingBranch?D(e)?n.effects.push(...e):n.effects.push(e):ll(e)}const Be=Symbol.for("v-fgt"),wi=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),Ii=Symbol.for("v-stc"),wt=[];let Ke=null;function he(e=!1){wt.push(Ke=e?null:[])}function ec(){wt.pop(),Ke=wt[wt.length-1]||null}let Ct=1;function si(e,n=!1){Ct+=e,e<0&&Ke&&n&&(Ke.hasOnce=!0)}function Ho(e){return e.dynamicChildren=Ct>0?Ke||Yn:null,ec(),Ct>0&&Ke&&Ke.push(e),e}function pe(e,n,t,i,s,r){return Ho(L(e,n,t,i,s,r,!0))}function nc(e,n,t,i,s){return Ho(Le(e,n,t,i,s,!0))}function ri(e){return e?e.__v_isVNode===!0:!1}function Bn(e,n){return e.type===n.type&&e.key===n.key}const No=({key:e})=>e??null,Jt=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||ze(e)||U(e)?{i:$e,r:e,k:n,f:!!t}:e:null);function L(e,n=null,t=null,i=0,s=null,r=e===Be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&No(n),ref:n&&Jt(n),scopeId:lo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(ks(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=we(t)?8:16),Ct>0&&!o&&Ke&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ke.push(l),l}const Le=tc;function tc(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===Sl)&&(e=Fe),ri(e)){const a=An(e,n,!0);return t&&ks(a,t),Ct>0&&!r&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(e)]=a:Ke.push(a)),a.patchFlag=-2,a}if(fc(e)&&(e=e.__vccOpts),n){n=ic(n);let{class:a,style:l}=n;a&&!we(a)&&(n.class=Qn(a)),ue(l)&&(bs(l)&&!D(l)&&(l=xe({},l)),n.style=cs(l))}const o=we(e)?1:Fo(e)?128:co(e)?64:ue(e)?4:U(e)?2:0;return L(e,n,t,i,s,o,r,!0)}function ic(e){return e?bs(e)||xo(e)?xe({},e):e:null}function An(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=e,f=n?rc(s||{},n):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&No(f),ref:n&&n.ref?t&&r?D(r)?r.concat(Jt(n)):[r,Jt(n)]:Jt(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Tt(u,l.clone(u)),u}function sc(e=" ",n=0){return Le(wi,null,e,n)}function Xe(e="",n=!1){return n?(he(),nc(Fe,null,e)):Le(Fe,null,e)}function an(e){return e==null||typeof e=="boolean"?Le(Fe):D(e)?Le(Be,null,e.slice()):ri(e)?Cn(e):Le(wi,null,String(e))}function Cn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:An(e)}function ks(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(D(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),ks(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!xo(n)?n._ctx=$e:s===3&&$e&&($e.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else U(n)?(n={default:n,_ctx:$e},t=32):(n=String(n),i&64?(t=16,n=[sc(n)]):t=8);e.children=n,e.shapeFlag|=t}function rc(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=Qn([n.class,i.class]));else if(s==="style")n.style=cs([n.style,i.style]);else if(ci(s)){const r=n[s],o=i[s];o&&r!==o&&!(D(r)&&r.includes(o))&&(n[s]=r?[].concat(r,o):o)}else s!==""&&(n[s]=i[s])}return n}function rn(e,n,t,i=null){Qe(e,n,7,[t,i])}const oc=ko();let ac=0;function lc(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||oc,r={uid:ac++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new za(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lo(i,s),emitsOptions:To(i,s),emit:null,emitted:null,propsDefaults:de,inheritAttrs:i.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Nl.bind(null,r),e.ce&&e.ce(r),r}let He=null;const Oo=()=>He||$e;let oi,es;{const e=di(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};oi=n("__VUE_INSTANCE_SETTERS__",t=>He=t),es=n("__VUE_SSR_SETTERS__",t=>Et=t)}const Pt=e=>{const n=He;return oi(e),e.scope.on(),()=>{e.scope.off(),oi(n)}},Zs=()=>{He&&He.scope.off(),oi(null)};function Wo(e){return e.vnode.shapeFlag&4}let Et=!1;function cc(e,n=!1,t=!1){n&&es(n);const{props:i,children:s}=e.vnode,r=Wo(e);jl(e,i,r,n),Ul(e,s,t||n);const o=r?uc(e,n):void 0;return n&&es(!1),o}function uc(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Tl);const{setup:i}=t;if(i){bn();const s=e.setupContext=i.length>1?hc(e):null,r=Pt(e),o=At(i,e,0,[e.props,s]),a=Ir(o);if(vn(),r(),(a||e.sp)&&!vt(e)&&go(e),a){if(o.then(Zs,Zs),n)return o.then(l=>{Qs(e,l)}).catch(l=>{mi(l,e,0)});e.asyncDep=o}else Qs(e,o)}else Bo(e)}function Qs(e,n,t){U(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ue(n)&&(e.setupState=io(n)),Bo(e)}function Bo(e,n,t){const i=e.type;e.render||(e.render=i.render||ln);{const s=Pt(e);bn();try{Cl(e)}finally{vn(),s()}}}const dc={get(e,n){return Me(e,"get",""),e[n]}};function hc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,dc),slots:e.slots,emit:e.emit,expose:n}}function ki(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(io(Ya(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in yt)return yt[t](e)},has(n,t){return t in n||t in yt}})):e.proxy}function fc(e){return U(e)&&"__vccOpts"in e}const ee=(e,n)=>il(e,n,Et);function mc(e,n,t){try{si(-1);const i=arguments.length;return i===2?ue(n)&&!D(n)?ri(n)?Le(e,null,[n]):Le(e,n):Le(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ri(t)&&(t=[t]),Le(e,n,t))}finally{si(1)}}const pc="3.5.25";let ns;const er=typeof window<"u"&&window.trustedTypes;if(er)try{ns=er.createPolicy("vue",{createHTML:e=>e})}catch{}const Do=ns?e=>ns.createHTML(e):e=>e,gc="http://www.w3.org/2000/svg",bc="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,nr=fn&&fn.createElement("template"),vc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?fn.createElementNS(gc,e):n==="mathml"?fn.createElementNS(bc,e):t?fn.createElement(e,{is:t}):fn.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>fn.createTextNode(e),createComment:e=>fn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const o=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{nr.innerHTML=Do(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=nr.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},_n="transition",ut="animation",xt=Symbol("_vtc"),Ko={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yc=xe({},uo,Ko),wc=e=>(e.displayName="Transition",e.props=yc,e),tr=wc((e,{slots:n})=>mc(hl,kc(e),n)),Nn=(e,n=[])=>{D(e)?e.forEach(t=>t(...n)):e&&e(...n)},ir=e=>e?D(e)?e.some(n=>n.length>1):e.length>1:!1;function kc(e){const n={};for(const y in e)y in Ko||(n[y]=e[y]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:f=o,appearToClass:u=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:T=`${t}-leave-active`,leaveToClass:C=`${t}-leave-to`}=e,z=_c(s),O=z&&z[0],oe=z&&z[1],{onBeforeEnter:F,onEnter:I,onEnterCancelled:G,onLeave:R,onLeaveCancelled:$,onBeforeAppear:ae=F,onAppear:ie=I,onAppearCancelled:ne=G}=n,W=(y,j,Q,me)=>{y._enterCancelled=me,On(y,j?u:a),On(y,j?f:o),Q&&Q()},K=(y,j)=>{y._isLeaving=!1,On(y,p),On(y,C),On(y,T),j&&j()},A=y=>(j,Q)=>{const me=y?ie:I,J=()=>W(j,y,Q);Nn(me,[j,J]),sr(()=>{On(j,y?l:r),hn(j,y?u:a),ir(me)||rr(j,i,O,J)})};return xe(n,{onBeforeEnter(y){Nn(F,[y]),hn(y,r),hn(y,o)},onBeforeAppear(y){Nn(ae,[y]),hn(y,l),hn(y,f)},onEnter:A(!1),onAppear:A(!0),onLeave(y,j){y._isLeaving=!0;const Q=()=>K(y,j);hn(y,p),y._enterCancelled?(hn(y,T),lr(y)):(lr(y),hn(y,T)),sr(()=>{y._isLeaving&&(On(y,p),hn(y,C),ir(R)||rr(y,i,oe,Q))}),Nn(R,[y,Q])},onEnterCancelled(y){W(y,!1,void 0,!0),Nn(G,[y])},onAppearCancelled(y){W(y,!0,void 0,!0),Nn(ne,[y])},onLeaveCancelled(y){K(y),Nn($,[y])}})}function _c(e){if(e==null)return null;if(ue(e))return[Fi(e.enter),Fi(e.leave)];{const n=Fi(e);return[n,n]}}function Fi(e){return _a(e)}function hn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[xt]||(e[xt]=new Set)).add(n)}function On(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[xt];t&&(t.delete(n),t.size||(e[xt]=void 0))}function sr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sc=0;function rr(e,n,t,i){const s=e._endId=++Sc,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Tc(e,n);if(!o)return i();const f=o+"end";let u=0;const p=()=>{e.removeEventListener(f,T),r()},T=C=>{C.target===e&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},a+1),e.addEventListener(f,T)}function Tc(e,n){const t=window.getComputedStyle(e),i=z=>(t[z]||"").split(", "),s=i(`${_n}Delay`),r=i(`${_n}Duration`),o=or(s,r),a=i(`${ut}Delay`),l=i(`${ut}Duration`),f=or(a,l);let u=null,p=0,T=0;n===_n?o>0&&(u=_n,p=o,T=r.length):n===ut?f>0&&(u=ut,p=f,T=l.length):(p=Math.max(o,f),u=p>0?o>f?_n:ut:null,T=u?u===_n?r.length:l.length:0);const C=u===_n&&/\b(?:transform|all)(?:,|$)/.test(i(`${_n}Property`).toString());return{type:u,timeout:p,propCount:T,hasTransform:C}}function or(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>ar(t)+ar(e[i])))}function ar(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function lr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Cc(e,n,t){const i=e[xt];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const cr=Symbol("_vod"),Ec=Symbol("_vsh"),xc=Symbol(""),Mc=/(?:^|;)\s*display\s*:/;function Lc(e,n,t){const i=e.style,s=we(t);let r=!1;if(t&&!s){if(n)if(we(n))for(const o of n.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&qt(i,a,"")}else for(const o in n)t[o]==null&&qt(i,o,"");for(const o in t)o==="display"&&(r=!0),qt(i,o,t[o])}else if(s){if(n!==t){const o=i[xc];o&&(t+=";"+o),i.cssText=t,r=Mc.test(t)}}else n&&e.removeAttribute("style");cr in e&&(e[cr]=r?i.display:"",e[Ec]&&(i.display="none"))}const ur=/\s*!important$/;function qt(e,n,t){if(D(t))t.forEach(i=>qt(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=zc(e,n);ur.test(t)?e.setProperty(Vn(i),t.replace(ur,""),"important"):e[i]=t}}const dr=["Webkit","Moz","ms"],Hi={};function zc(e,n){const t=Hi[n];if(t)return t;let i=zn(n);if(i!=="filter"&&i in e)return Hi[n]=i;i=Nr(i);for(let s=0;s<dr.length;s++){const r=dr[s]+i;if(r in e)return Hi[n]=r}return n}const hr="http://www.w3.org/1999/xlink";function fr(e,n,t,i,s,r=Ma(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(hr,n.slice(6,n.length)):e.setAttributeNS(hr,n,t):t==null||r&&!Br(t)?e.removeAttribute(n):e.setAttribute(n,r?"":cn(t)?String(t):t)}function mr(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Do(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Br(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(s||n)}function _s(e,n,t,i){e.addEventListener(n,t,i)}function Ac(e,n,t,i){e.removeEventListener(n,t,i)}const pr=Symbol("_vei");function Pc(e,n,t,i,s=null){const r=e[pr]||(e[pr]={}),o=r[n];if(i&&o)o.value=i;else{const[a,l]=Rc(n);if(i){const f=r[n]=Hc(i,s);_s(e,a,f,l)}else o&&(Ac(e,a,o,l),r[n]=void 0)}}const gr=/(?:Once|Passive|Capture)$/;function Rc(e){let n;if(gr.test(e)){n={};let i;for(;i=e.match(gr);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vn(e.slice(2)),n]}let Ni=0;const Ic=Promise.resolve(),Fc=()=>Ni||(Ic.then(()=>Ni=0),Ni=Date.now());function Hc(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qe(Nc(i,t.value),n,5,[i])};return t.value=e,t.attached=Fc(),t}function Nc(e,n){if(D(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const br=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Oc=(e,n,t,i,s,r)=>{const o=s==="svg";n==="class"?Cc(e,i,o):n==="style"?Lc(e,t,i):ci(n)?os(n)||Pc(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Wc(e,n,i,o))?(mr(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&fr(e,n,i,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!we(i))?mr(e,zn(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),fr(e,n,i,o))};function Wc(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&br(n)&&U(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return br(n)&&we(t)?!1:n in e}const ai=e=>{const n=e.props["onUpdate:modelValue"]||!1;return D(n)?t=>$t(n,t):n},tt=Symbol("_assign"),Bc={deep:!0,created(e,n,t){e[tt]=ai(t),_s(e,"change",()=>{const i=e._modelValue,s=Mt(e),r=e.checked,o=e[tt];if(D(i)){const a=us(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const f=[...i];f.splice(a,1),o(f)}}else if(st(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(jo(e,r))})},mounted:vr,beforeUpdate(e,n,t){e[tt]=ai(t),vr(e,n,t)}};function vr(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(D(n))s=us(n,i.props.value)>-1;else if(st(n))s=n.has(i.props.value);else{if(n===t)return;s=zt(n,jo(e,!0))}e.checked!==s&&(e.checked=s)}const Dc={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=st(n);_s(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?Wr(Mt(o)):Mt(o));e[tt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,ei(()=>{e._assigning=!1})}),e[tt]=ai(i)},mounted(e,{value:n}){yr(e,n)},beforeUpdate(e,n,t){e[tt]=ai(t)},updated(e,{value:n}){e._assigning||yr(e,n)}};function yr(e,n){const t=e.multiple,i=D(n);if(!(t&&!i&&!st(n))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],a=Mt(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=n.some(f=>String(f)===String(a)):o.selected=us(n,a)>-1}else o.selected=n.has(a);else if(zt(Mt(o),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Mt(e){return"_value"in e?e._value:e.value}function jo(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Kc=["ctrl","shift","alt","meta"],jc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Kc.some(t=>e[`${t}Key`]&&!n.includes(t))},Vc=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<n.length;o++){const a=jc[n[o]];if(a&&a(s,n))return}return e(s,...r)}))},Gc=xe({patchProp:Oc},vc);let wr;function $c(){return wr||(wr=ql(Gc))}const Uc=((...e)=>{const n=$c().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=qc(i);if(!s)return;const r=n._component;!U(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Jc(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},n});function Jc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qc(e){return we(e)?document.querySelector(e):e}const Xc="/favicon.png",Yc="/images/about_music_logo.png",Zc="/images/dk3-min.jpg",Qc="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",rt=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Dmitri Shostakovich",birth:1906,death:1975}],eu={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/stravinsky.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function Vo(e){return eu[e]||null}function nu(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function tu(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],s=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-s),a=n.slice(0,n.length-s).map(f=>f.trim()).filter(Boolean).map(f=>f[0]?f[0].toUpperCase()+".":"").filter(Boolean).join(" "),l=r.join(" ");return a?`${a} ${l}`:l}const Rt=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let ts=Rt.reduce((e,n)=>(e[n.id]=n.label,e),{});const kr=Math.min(...rt.map(e=>e.birth)),iu=Math.max(...rt.map(e=>e.birth));let is=[...rt],En=null,xn=null;const su={r:255,g:255,b:255},ru={r:37,g:99,b:235};ft("#f3f4f6"),Tr(1750),ft("#e6eef8"),Tr(1820),ft("#e8f4ff"),ft("#eef2f7");const li=1677.5,Xt=1980,Go=Xt-li,ou=6,au=2,lu=0,Yt={barHeight:50,widthScale:1,fontScale:1},qn={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let Mn={...Yt};function Oi(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function _r(e={}){Mn={barHeight:Oi(e.barHeight??Mn.barHeight??Yt.barHeight,qn.barHeight.min,qn.barHeight.max),widthScale:Oi(e.widthScale??Mn.widthScale??Yt.widthScale,qn.widthScale.min,qn.widthScale.max),fontScale:Oi(e.fontScale??Mn.fontScale??Yt.fontScale,qn.fontScale.min,qn.fontScale.max)}}function cu(){return ou*Mn.widthScale}function Kt(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=Go*cu()+lu,i=(n.clientWidth||window.innerWidth)*au*Mn.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function Dn(e){return(e-li)/Go*100}function $o(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function ft(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function Wi({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function Sr(e,n,t){const i=$o(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function Tr(e){const n=iu-kr;return n<=0?0:$o((e-kr)/n)}const uu={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function Ss(e){return uu[e]||"#f3f4f6"}function du(e){return e?ts[e]||Rt.find(n=>n.id===e)?.label||e:""}function Cr(e={}){!e||typeof e!="object"||(ts={...ts,...e})}function hu(e){const n=Rt.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function fu(e,n){const t=Number(e),i=Number(n),s=hu(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let o=null,a=0;return Rt.forEach(l=>{const f=Math.max(0,Math.min(i,l.to)-Math.max(t,l.from));f>a&&(a=f,o=l.id)}),o&&a>r/2?o:s}function mu(e){const n=Ss(e),t=ft(n),i=Sr(t,su,.12),s=Sr(t,ru,.04);return`linear-gradient(145deg, ${Wi(i)} 0%, ${Wi(t)} 58%, ${Wi(s)} 100%)`}function Er(e){Array.isArray(e)?is=[...e]:is=[...rt]}function Ts(){const e=document.getElementById("gantt");if(!e)return;const n=i=>Number.isInteger(En)&&i===En,t=i=>Number.isInteger(xn)&&i===xn;e.querySelectorAll(".bar").forEach(i=>{const s=Number(i.getAttribute("data-lane-index"));i.classList.toggle("bar--selected",n(s)),i.classList.toggle("bar--hovered",t(s))}),e.querySelectorAll(".bar-connector").forEach(i=>{const s=Number(i.getAttribute("data-lane-index")),r=n(s),o=t(s);i.classList.toggle("bar-connector--selected",r),i.classList.toggle("bar-connector--hover",o)})}function Uo(e){Number.isInteger(e)?En=e:En=null,Ts()}function ss(e){Number.isInteger(e)?xn=e:xn=null,Ts()}function xr(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(li/10)*10,t=Math.ceil(Xt/10)*10;Rt.forEach(i=>{const s=Math.max(i.from,li),r=Math.min(i.to,Xt);if(r<=s)return;const o=document.createElement("div");o.className="era-band",o.style.left=Dn(s)+"%",o.style.width=Dn(r)-Dn(s)+"%",o.style.backgroundImage="none",o.style.backgroundColor=Ss(i.id),o.textContent=du(i.id)||i.label,i.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===Xt&&(o.style.borderRight="none"),e.appendChild(o)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=Dn(i)+"%",e.appendChild(s);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=Dn(i)+"%",o.textContent=i,e.appendChild(o)}}function Bi(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="";const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=is||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const o=[...r].sort((C,z)=>C.birth-z.birth),a=o.length,l=o.map((C,z)=>({composer:C,laneIndex:z}));Number.isInteger(En)&&(En<0||En>=a)&&(En=null),Number.isInteger(xn)&&(xn<0||xn>=a)&&(xn=null);const f=2,u=Mn.barHeight,p=u+f,T=a*u+Math.max(0,a-1)*f;e.style.height=T+"px",a&&(l.forEach(({composer:C,laneIndex:z})=>{const O=C.displayName||C.name,oe=Dn(C.birth),F=Dn(C.death),I=document.createElement("div");I.className="bar",I.setAttribute("data-lane-index",z),I.setAttribute("data-name",C.name);const G=fu(C.birth,C.death);I.style.backgroundImage=mu(G),I.style.backgroundColor=Ss(G);const R=oe,$=F-oe,ie=z*p+u*.5+i,ne=(A,y)=>{const j=document.createElement("div");j.className="bar-connector",j.setAttribute("data-lane-index",z),j.setAttribute("data-side",y),j.style.left=A+"%",j.style.top=-i+"px",j.style.height=ie+"px",s.appendChild(j)};ne(R,"start"),ne(R+$,"end"),I.style.left=R+"%",I.style.width=$+"%",I.style.top=z*p+"px",I.style.height=u+"px",I.style.lineHeight=u+"px",I.style.fontSize=u*.25*Mn.fontScale+"px";const W=Vo(C.name);if(W){const A=document.createElement("img");A.className="bar-avatar";const y=Math.max(10,Math.round(u*.9));A.style.width=y+"px",A.style.height=y+"px",A.src=W,A.alt=O||C.name,I.appendChild(A)}const K=document.createElement("span");K.className="bar-label",K.textContent=O,I.appendChild(K),e.appendChild(I),I.addEventListener("click",A=>{A.stopPropagation(),Uo(z),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:C,laneIndex:z}}))}),I.addEventListener("mouseenter",()=>ss(z)),I.addEventListener("mouseleave",()=>ss(null)),K.scrollWidth>K.clientWidth&&(K.textContent=tu(O),K.scrollWidth>K.clientWidth&&(K.textContent=nu(O)))}),e.appendChild(s),Ts())}function pu(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4,s=1,r=(A,y)=>{const j=Math.abs(A)>=Math.abs(y)?"horizontal":"vertical";console.log(`[timeline] touch pan (${j}) dx=${A.toFixed(1)} dy=${y.toFixed(1)} scrollLeft=${e.scrollLeft.toFixed(1)} scrollTop=${e.scrollTop.toFixed(1)}`)};let o=0,a=0,l=0,f=0,u=0,p=0,T=null;const C=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},z=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true")},O=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",C())};function oe(){if(T=null,!n||!t)return;const A=u-o,y=p-a;e.scrollLeft=l-A,e.scrollTop=f-y}const F=A=>{A.button===0&&(n=!0,t=!1,e.classList.remove("panning"),o=A.clientX,a=A.clientY,u=A.clientX,p=A.clientY,l=e.scrollLeft,f=e.scrollTop,A.preventDefault())},I=A=>{if(n){if(u=A.clientX,p=A.clientY,!t){const y=Math.abs(u-o),j=Math.abs(p-a),me=j>y?s:i;if(y>me||j>me)z();else return}T===null&&(T=window.requestAnimationFrame(oe)),A.preventDefault()}},G=()=>{n&&(n=!1,O(),T!==null&&(cancelAnimationFrame(T),T=null))};e.addEventListener("mousedown",F),window.addEventListener("mousemove",I),window.addEventListener("mouseup",G);let R=null,$=!1,ae=null,ie=0;const ne=A=>{if(R!==null||A.touches.length!==1)return;const y=A.touches[0];R=y.identifier,$=!1,ae=null,o=y.clientX,a=y.clientY,u=y.clientX,p=y.clientY,ie=y.clientX,y.clientY,O()},W=A=>{if(R===null)return;const y=Array.from(A.touches).find(J=>J.identifier===R);if(!y)return;const j=y.clientX-o,Q=y.clientY-a;if(!$){const J=Math.abs(j),q=Math.abs(Q),X=J>=q,_e=X?i:s;if(J>_e||q>_e)$=!0,ae=X?"horizontal":"vertical",ae==="horizontal"&&z(),ie=y.clientX,y.clientY;else{ie=y.clientX,y.clientY;return}}const me=ie-y.clientX;ae==="horizontal"&&(e.scrollLeft+=me,A.preventDefault()),ie=y.clientX,y.clientY,r(j,Q)},K=A=>{R===null||!Array.from(A.changedTouches).some(j=>j.identifier===R)||(R=null,$=!1,O())};e.addEventListener("touchstart",ne,{passive:!0}),e.addEventListener("touchmove",W,{passive:!1}),e.addEventListener("touchend",K,{passive:!0}),e.addEventListener("touchcancel",K,{passive:!0})}function gu(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};let i=e.scrollLeft,s=!1,r=null,o=null;const a=.5,l=5,f=()=>{o!==null&&(clearTimeout(o),o=null)},u=()=>{r!==null&&(clearTimeout(r),r=null)},p=(F,I)=>{u();const G=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;s=!0,e.scrollTo&&!G?(e.scrollTo({left:F,top:I,behavior:"smooth"}),r=setTimeout(()=>{s=!1,r=null},320)):(e.scrollLeft=F,e.scrollTop=I,s=!1)},T=F=>{f(),o=setTimeout(()=>{o=null,O(F)},90)},C=(F,I,G)=>{const R=F.getBoundingClientRect();return R.bottom>I&&R.top<G},z=F=>Number(F.getAttribute("data-lane-index"))||0,O=F=>{const I=Array.from(n.querySelectorAll(".bar"));if(!I.length)return;const G=e.getBoundingClientRect(),$=(t?.getBoundingClientRect()?.bottom??G.top)+1,ae=G.bottom,ie=I.find(A=>C(A,$,ae));if(!ie)return;const ne=e.scrollLeft;ne+e.clientWidth;const W=z(ie),K=I.reduce((A,y)=>{const j=z(y);if(!A)return y;const Q=z(A);return j<Q?y:A},null)||ie;if(F==="right"){if(!(ie.offsetLeft<ne-l))return;let y=I.find(J=>z(J)>W&&J.offsetLeft>=ne-a&&C(J,$,ae))||null;if(y||(y=I.reduce((J,q)=>z(q)<=W?J:J?q.offsetLeft>J.offsetLeft?q:J:q,null)),!y)return;const j=y.getBoundingClientRect(),Q=$+1,me=j.top-Q;Math.abs(me)>a&&p(e.scrollLeft,e.scrollTop+me);return}if(F==="left"){const y=ie.getBoundingClientRect().right>G.right+a,j=ne<=a;let Q=null;const me=I.filter(ge=>z(ge)>=W?!1:ge.offsetLeft>=ne-a);if(!j&&!y&&!me.length||(j?Q=K:me.length&&(Q=me.reduce((ge,ve)=>{if(!ge)return ve;const en=z(ve),Gn=z(ge);if(en>Gn)return ve;if(en===Gn){const ot=Math.abs(ve.offsetLeft-ne),nn=Math.abs(ge.offsetLeft-ne);return ot<nn?ve:ge}return ge},null)),Q||(Q=K),!Q))return;const J=Q.getBoundingClientRect(),q=$+1,X=J.top-q,_e=Math.max(0,Q.offsetLeft),Je=_e-e.scrollLeft;(Math.abs(X)>a||Math.abs(Je)>a)&&p(Math.abs(Je)>a?_e:e.scrollLeft,Math.abs(X)>a?e.scrollTop+X:e.scrollTop)}},oe=()=>{if(s)return;const F=e.scrollLeft,I=e.dataset.panning==="true",G=e.scrollTop+e.clientHeight>=e.scrollHeight-a;if(I||G){i=F;return}const R=F>i+a,$=F<i-a;R?T("right"):$&&T("left"),F<=a&&T("left"),i=F};return e.addEventListener("scroll",oe,{passive:!0}),()=>{e.removeEventListener("scroll",oe),f(),u()}}function Mr(e,{left:n=0,top:t=0}){const i=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(e.scrollTo&&!i){e.scrollTo({left:n,top:t,behavior:"smooth"});return}e.scrollLeft=n,e.scrollTop=t}function bu(e={}){_r(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:rt;Er(n),Cr(e.eraLabels||{}),Kt(),xr(),Bi(),pu();const t=gu(),i=()=>Kt();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const a=document.getElementById("timeline");a&&Mr(a,{left:0,top:0})}function o(){const a=document.getElementById("timeline");a&&Mr(a,{left:Math.max(0,a.scrollWidth-a.clientWidth),top:Math.max(0,a.scrollHeight-a.clientHeight)})}return{goToStart:r,goToEnd:o,setComposers(a){Er(a),Bi()},updateSettings(a){_r(a||{}),Kt(),Bi()},updateEraLabels(a){Cr(a||{}),Kt(),xr()},setSelectedLane:Uo,setHoveredLane:ss,destroy(){window.removeEventListener("resize",i),t()}}}const Jo=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},vu={class:"timeline-wrapper"},yu={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),a=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(a)?null:a}}))};return bi(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=bu({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),vi(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),Ge(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),Ge(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),Ge(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(he(),pe("div",vu,[...r[0]||(r[0]=[L("div",{id:"timeline"},[L("div",{class:"timeline-inner"},[L("div",{id:"axis",class:"axis"}),L("div",{id:"gantt"})])],-1)])]))}},wu=Jo(yu,[["__scopeId","data-v-095e97d5"]]),ku=`# Composer fact sheets

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
`,_u={class:"app"},Su={class:"topbar"},Tu={class:"language-switcher"},Cu={class:"visually-hidden",for:"language-select"},Eu=["aria-label"],xu=["value"],Mu={class:"menu-nav"},Lu={class:"content"},zu={key:0},Au={class:"filter-dock"},Pu={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},Ru={key:0,class:"nav-controls",role:"group","aria-label":"Timeline navigation"},Iu=["disabled"],Fu=["disabled"],Hu={key:1,class:"scale-controls",role:"group","aria-label":"Adjust timeline size"},Nu=["disabled"],Ou=["disabled"],Wu=["aria-expanded"],Bu={key:0,id:"filter-panel",class:"filter-panel",role:"dialog","aria-label":"Composer filters"},Du={class:"filter-panel__options"},Ku=["onUpdate:modelValue","aria-label"],ju={class:"filter-panel__label"},Vu={class:"filter-panel__actions"},Gu={key:1,class:"about"},$u={class:"about__card"},Uu={class:"about__title"},Ju={class:"about__text"},qu={class:"about__text"},Xu={class:"about__author"},Yu={class:"about__author-body"},Zu={class:"about__author-label"},Qu={class:"about__author-name"},ed={class:"about__contributors"},nd={class:"about__contributors-title"},td={class:"about__contributors-list"},id={class:"about__contributors-name"},sd=["href"],rd={class:"composer-modal__content"},od={class:"composer-modal__header"},ad={class:"composer-modal__titles"},ld={class:"composer-modal__name"},cd={key:0,class:"composer-modal__dates"},ud={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},dd=["disabled"],hd={class:"composer-modal__position"},fd=["disabled"],md={class:"composer-modal__body"},pd={key:0,class:"composer-modal__hero"},gd=["src","alt"],bd={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},vd=["disabled"],yd={class:"composer-modal__position"},wd=["disabled"],kd={class:"composer-modal__hero-meta"},_d={class:"composer-modal__name-small"},Sd={key:0,class:"composer-modal__dates-small"},Td={class:"composer-modal__playlist"},Cd={class:"composer-modal__playlist-header"},Ed={class:"composer-modal__playlist-title"},xd={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},Md=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],Ld={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},zd={class:"composer-modal__description"},Ad={key:0,class:"composer-modal__facts-title"},Pd={key:1,class:"composer-modal__facts"},Rd={class:"composer-modal__fact-text"},Id={key:2,class:"composer-modal__muted"},dt="en",Lr="timeline-language",jt=25,zr=150,Di=.2,Ar=1.5,Fd=.35,Ki=1.7,Pr=.95,Hd=.6,Vt=2,Gt=6,Nd={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended Classics"},apply:"Apply"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Шибанова",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить"}}},t=Object.keys(n),i=sn(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=sn(dt),o=ee(()=>n[r.value]||n.en),a=ee(()=>t.map(d=>({value:d,label:n[d]?.label||d.toUpperCase()}))),l=ee(()=>o.value.appTitle),f=ee(()=>o.value.languageLabel||"Language"),u=ee(()=>o.value.navigation||n.en.navigation),p=ee(()=>o.value.about||n.en.about),T=ee(()=>p.value.contributors||n.en.about.contributors||[]),C=ee(()=>o.value.eras||n.en.eras),z=ee(()=>o.value.composers||{}),O=ee(()=>{const d=z.value.names||{},m={};return Object.entries(d).forEach(([v,E])=>{m[be(v)]=E}),m}),oe=ee(()=>{const d={};return Object.entries(M||{}).forEach(([m,v])=>{const E=be(m),B=v?.[r.value];if(B){d[E]=B;return}r.value==="en"&&v?.en&&(d[E]=v.en)}),d}),F=ee(()=>({...oe.value,...O.value})),I=ee(()=>o.value.filter||n.en.filter),G=ee(()=>({essentials:I.value.groups?.essentials||"Essential Icons",core:I.value.groups?.core||"Core Classics",expanded:I.value.groups?.expanded||"Extended Classics"})),R=ee(()=>I.value.apply||"Apply"),$=ee(()=>{const d=z.value.descriptions||{},m={};return Object.entries(d).forEach(([v,E])=>{m[be(v)]=E}),m}),ae=ee(()=>{const d=z.value.factsTitles||{},m={};return Object.entries(d).forEach(([v,E])=>{m[be(v)]=E}),m}),ie=ee(()=>o.value.modal||n.en.modal),ne=sn(!1),W=sn("composers"),K=[30,40,50,70,100],A="".replace(/\/$/,""),j="https://soundcloud.com/dmitry-kotikov/sets/",Q="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",me=new Set;function J(d,m,v){return Number.isNaN(d)?m:Math.min(v,Math.max(m,d))}function q(d){const m=J((d-jt)/(zr-jt),0,1),v=Math.pow(m,Fd),E=Di+(Ar-Di)*v;return J(E,Di,Ar)}function X(d){const m=J((d-jt)/(zr-jt),0,1),v=Math.pow(m,Hd),E=Ki-(Ki-Pr)*v;return J(E,Pr,Ki)}const _e=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich"]}],Je=sn(_e.reduce((d,m)=>(d[m.id]=!0,d),{})),ge=sn(!1),ve=fi({barHeight:K[Vt],widthScale:q(K[Vt]),fontScale:X(K[Vt])}),en=sn(Vt),Gn=ee(()=>en.value<=0),ot=ee(()=>en.value>=K.length-1),nn=sn(!0),Pn=sn(!1);function at(d){const m=J(d,0,K.length-1);en.value=m;const v=K[m];ve.barHeight=v,ve.widthScale=q(v),ve.fontScale=X(v)}function lt(d){const m=d>0?1:-1;at(en.value+m)}function qe(){const d=document.getElementById("timeline");if(!d)return;const m=Math.max(0,d.scrollWidth-d.clientWidth),v=Math.max(0,d.scrollHeight-d.clientHeight);nn.value=d.scrollLeft<=Gt&&d.scrollTop<=Gt,Pn.value=d.scrollLeft>=m-Gt&&d.scrollTop>=v-Gt}function Cs(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),qe()}function c(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),qe()}const h=ee(()=>{const d=_e.map(v=>v.id).filter(v=>Je.value[v]),m=new Set;return d.forEach(v=>{_e.find(B=>B.id===v)?.composers?.forEach(B=>m.add(B))}),m}),g=ee(()=>{const d=h.value;return d.size?rt.filter(m=>d.has(m.name)):[]}),k=ee(()=>[...g.value].sort((d,m)=>d.birth-m.birth).map(d=>({...d,displayName:Ne(d.name)}))),{descriptionsByLocale:w,playlistIdsByKey:_,namesByLocale:M}=It(ku),S=sn(null),x=ee(()=>S.value!==null),b=ee(()=>S.value===null?null:k.value[S.value]),N=ee(()=>b.value?Ne(b.value.name):""),P=ee(()=>b.value?Vo(b.value.name):null),H=ee(()=>b.value?Ae(b.value.name):""),V=ee(()=>b.value?je(b.value.name):""),Z=ee(()=>b.value?Yo(b.value.name):[]),ce=ee(()=>Z.value.map(d=>ca(d)).filter(Boolean)),Y=ee(()=>{const d=ce.value.filter(Boolean);return d.length?d:[Q]}),Se=ee(()=>(S.value??0)>0),Te=ee(()=>S.value!==null&&S.value<k.value.length-1);function be(d){return d.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Ne(d){const m=be(d);return F.value[m]||d}function kn(d){return G.value[d]||d}function It(d){const m=d.split(`
`),v={},E={},B={};let te=null,ye=null,tn=null,Oe="en",ke=[];const Rn=()=>{(te||ye)&&[te,ye].filter(Boolean).forEach(Pe=>{v[Pe]=v[Pe]||{},v[Pe][Oe]=ke.join(`
`).trim(),tn&&(B[Pe]=tn)}),ke=[],tn=null,ye=null};for(const Ce of m){const Pe=Ce.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Pe){Rn();const[,Ee,In,un]=Pe;te=be(un||Ee),ye=be(Ee),Oe=(In||"en").toLowerCase(),tn=un||null;continue}const Un=te?Ce.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(Un){const[,Ee,In]=Un,un=(Ee||Oe||"en").toLowerCase(),ba=In.trim();[te,ye].filter(Boolean).forEach(Ci=>{E[Ci]=E[Ci]||{},E[Ci][un]=ba});continue}te&&Ce.startsWith("- ")&&ke.push(Ce.replace(/^- /,"").trim())}return Rn(),{descriptionsByLocale:v,playlistIdsByKey:B,namesByLocale:E}}function Ae(d){const m=Ht(d),v=be(d),E=$.value[v];if(E)return E;const B=m[r.value];return B||(m.en?m.en:Object.values(m)[0]||"")}function je(d){const m=ae.value[be(d)];return m||Xo(d)}function Ft(d,m){const v=be(m);if(d[v])return d[v];const E=v.split(" ").filter(Boolean),B=E[E.length-1];return B&&d[B]?d[B]:""}function Ht(d){const m=be(d),v=m.split(" ").filter(Boolean),E=[m],B=v[v.length-1];B&&B!==m&&E.push(B);for(const te of E)if(w[te])return w[te];return{}}function qo(d){return be(d).replace(/\s+/g,"-").replace(/-+/g,"-")}function Xo(d){const m=s[r.value]||s.en,v=r.value==="ru"?Ne(d):"";if(r.value==="ru"&&v)return`${v} - ${m}`;const E=String(d||"").trim().split(/\s+/).filter(Boolean);if(!E.length)return"";const B=E[E.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(B)&&E.length>=2?E[E.length-2]:B} ${m}`}function Yo(d){const m=[],v=qo(d);v&&!m.includes(v)&&m.push(v);const E=Ft(_,d);return E&&!m.includes(E)&&m.push(E),m}function _i(d=window.location.pathname){W.value=d==="/about"?"about":"composers"}const Es=()=>_i();function xs(d){window.location.pathname!==d&&(history.pushState({},"",d),_i(d)),ne.value=!1}function Ms(d){xs(d==="about"?"/about":"/")}function Zo(){ne.value=!ne.value}function Qo(){ne.value=!1}function ea(){ge.value=!ge.value}function na(){ge.value=!1}function $n(d,{persist:m=!1}={}){const v=t.includes(d)?d:dt;if(r.value=v,m)try{localStorage.setItem(Lr,v)}catch{}}function ta(d){i.value=!0,$n(d,{persist:!0})}function ia(d){const m=d?.target?.value;m&&ta(m)}function sa(){try{return localStorage.getItem(Lr)}catch{return null}}function ra(){const d=sa();if(d&&t.includes(d)){i.value=!0,$n(d);return}oa()}async function oa(){if(i.value){r.value;return}const d=[aa,la];for(const v of d){const E=await v();if(E){const B=String(E).toUpperCase(),te=B==="RU"?"ru":["DE","AT","CH"].includes(B)?"de":dt;$n(te);return}}const m=(navigator.language||"").toLowerCase();if(m.startsWith("de")){$n("de");return}if(m.startsWith("ru")){$n("ru");return}$n(dt)}async function aa(){try{const d=await fetch("https://ipapi.co/json/");return d.ok&&(await d.json())?.country_code||null}catch(d){console.warn("ipapi lookup failed:",d)}return null}async function la(){try{const d=await fetch("https://ipwho.is/");return d.ok&&(await d.json())?.country_code||null}catch(d){console.warn("ipwho.is lookup failed:",d)}return null}function Wd(d,m){}function Ls(){xs("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function Si(d){const m=d.detail,v=m?.laneIndex;if(Number.isInteger(v)&&k.value[v]){S.value=v;return}const E=m?.composer?.name;if(!E)return;const B=k.value.findIndex(te=>te.name===E);B>=0&&(S.value=B)}function zs(){S.value=null}function As(){!Se.value||S.value===null||(S.value-=1)}function Ps(){!Te.value||S.value===null||(S.value+=1)}bi(()=>{ra(),_i(),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(Si),window.addEventListener("popstate",Es),window.addEventListener("composer-select",Si);const d=document.getElementById("timeline");d&&(d.addEventListener("scroll",qe,{passive:!0}),qe())}),vi(()=>{window.removeEventListener("popstate",Es),window.removeEventListener("composer-select",Si);const d=document.getElementById("timeline");d&&d.removeEventListener("scroll",qe)}),Ge(l,d=>{d&&(document.title=d)},{immediate:!0}),Ge(r,d=>{const m=t.includes(d)?d:dt;if(m!==d){r.value=m;return}try{document.documentElement.setAttribute("data-lang",m)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(C.value)}),Ge(x,async d=>{d?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await ei(),Y.value.length&&Is()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",Rs())}),Ge(S,d=>{const m=window.timeline;!m||typeof m.setSelectedLane!="function"||(Number.isInteger(d)?m.setSelectedLane(d):m.setSelectedLane(null))}),Ge(Y,async d=>{x.value&&(Rs(),await ei(),d.length&&Is())}),Ge(()=>k.value.map(d=>d.name),d=>{if(S.value===null)return;const m=b.value;if(!m){S.value=null;return}const v=d.findIndex(E=>E===m.name);v===-1?S.value=null:S.value=v});function Ti(d){return d?A?A.endsWith("/")&&d.startsWith("/")?A+d.slice(1):!A.endsWith("/")&&!d.startsWith("/")?`${A}/${d}`:A+d:d:A}function ca(d){if(!d)return"";const m=j;if(!m)return"";const v=m.endsWith("/");return`${m}${v?"":"/"}${d}`}function Rs(){me.forEach(d=>{try{d.pause(),d.currentTime=0}catch(m){console.error("Failed to stop SoundCloud audio",m)}}),me.clear()}function Is(d,m=document){const E=(m||document).querySelectorAll("[data-soundcloud-playlist]");E.length&&(E.length,E.forEach(B=>{ua(B,()=>{})}))}async function ua(d,m){const v=()=>{typeof m=="function"&&setTimeout(()=>m(),0)};if(!d||d.dataset.soundcloudReady==="true"||d.dataset.soundcloudReady==="loading"||d.dataset.soundcloudReady==="error"){v();return}const E=d.getAttribute("data-soundcloud-playlist"),B=d.getAttribute("data-soundcloud-playlist-alt")||"",te=[E,...B.split("|")].map(Oe=>(Oe||"").trim()).filter(Boolean);if(!te.length){v();return}d.dataset.soundcloudReady="loading",d.innerHTML='<div class="sc-player__status">Loading tracks from SoundCloud...</div>';let ye=null;for(const Oe of te)try{const ke=await ha(Oe),Rn=Array.isArray(ke.tracks)&&ke.tracks.length?ke.tracks:ke&&ke.kind==="track"?[ke]:[],Ce=fa(Rn);ga(d,Ce,Oe),v();return}catch(ke){if(ye=ke,ke&&ke.status===429){Fs(d,Oe),v();return}}console.error("Failed to build SoundCloud player",ye);const tn=te[0]||Q;Fs(d,tn),v()}async function da(d){if(!d)throw new Error("No track provided");const m=d.media&&Array.isArray(d.media.transcodings)?d.media.transcodings:[];if(m.length){let v=m.find(E=>E&&E.format&&E.format.protocol==="progressive");if(v||(v=m[0]),v&&v.url)try{const E=await ma(v.url,d.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:d.id,transcodingUrl:v.url,finalUrl:E}),E}catch(E){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",E)}}if(!d.id)throw new Error("No track id provided");return pa(d.id,d.track_authorization)}async function ha(d){const m=Ti("/api/soundcloud/playlist")+`?url=${encodeURIComponent(d)}`,v=await fetch(m);if(!v.ok){const E=new Error(`SoundCloud playlist error: ${v.status}`);throw E.status=v.status,E.retryAfter=Number(v.headers?.get("Retry-After"))||void 0,E}return v.json()}function fa(d=[]){return Array.isArray(d)?d.map((m,v)=>{if(!m)return null;const E=`Track ${v+1}`,te=[m.title,m.publisher_metadata?.release_title,m.permalink,m.permalink_url,m.id?String(m.id):null].map(ye=>typeof ye=="string"?ye.trim():"").filter(Boolean)[0]||E;return{...m,title:te}}).filter(Boolean):[]}async function ma(d,m){const v=Ti("/api/soundcloud/transcoding")+`?url=${encodeURIComponent(d)}${m?`&track_authorization=${encodeURIComponent(m)}`:""}`,E=await fetch(v);if(!E.ok){const te=new Error(`SoundCloud transcoding error: ${E.status}`);throw te.status=E.status,te.retryAfter=Number(E.headers?.get("Retry-After"))||void 0,te}const B=await E.json();if(!B?.url)throw new Error("Transcoding response missing url");return B.url}async function pa(d,m){const v=Ti(`/api/soundcloud/streams/${d}`)+(m?`?track_authorization=${encodeURIComponent(m)}`:""),E=await fetch(v);if(!E.ok){const te=new Error(`SoundCloud stream error: ${E.status}`);throw te.status=E.status,te.retryAfter=Number(E.headers?.get("Retry-After"))||void 0,te}const B=await E.json();if(!B?.url)throw new Error("Stream response missing url");return B.url}function Fs(d,m){const v=`https://w.soundcloud.com/player/?url=${encodeURIComponent(m)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;d.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${v}"
    ></iframe>
  `,d.dataset.soundcloudReady="true"}function ga(d,m,v){if(!Array.isArray(m)||!m.length){d.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',d.dataset.soundcloudReady="error";return}d.classList.add("sc-player");const E=document.createElement("div");E.className="sc-track-list";const B=document.createElement("audio");B.preload="none",me.add(B);let te=null,ye=null,tn=!1;const Oe=(Ce,Pe)=>{Ce.dataset.state=Pe,Ce.textContent=Pe==="playing"?"⏸":Pe==="loading"?"...":"▶"},ke=Ce=>Oe(Ce,"idle"),Rn=()=>{ye&&ke(ye),te=null,ye=null};B.addEventListener("ended",Rn),B.addEventListener("pause",()=>{ye&&B.currentTime<(B.duration||1/0)&&ke(ye)}),m.forEach((Ce,Pe)=>{const Un=document.createElement("div");Un.className="sc-track";const Ee=document.createElement("button");Ee.type="button",Ee.className="sc-track__button",Ee.setAttribute("aria-label","Play track"),Oe(Ee,"idle");const In=document.createElement("div");In.className="sc-track__title",In.textContent=Ce?.title||`Track ${Pe+1}`,Un.append(Ee,In),E.append(Un),Ee.addEventListener("click",async()=>{if(!tn){if(te===(Ce?.id??Pe)&&!B.paused){B.pause(),ke(Ee);return}tn=!0,Oe(Ee,"loading");try{const un=await da(Ce);if(!un)throw new Error("No stream URL returned");B.src=un,await B.play(),ye&&ye!==Ee&&ke(ye),ye=Ee,te=Ce?.id??Pe,Oe(Ee,"playing")}catch(un){console.error("Failed to play SoundCloud track",un),ke(Ee),d.dataset.soundcloudReady="error"}finally{tn=!1}}})}),d.innerHTML="",d.append(E,B),d.dataset.soundcloudReady="true"}return(d,m)=>(he(),pe("div",_u,[L("header",Su,[L("button",{class:"menu-button",onClick:Zo,"aria-label":"Toggle navigation menu"},[...m[5]||(m[5]=[L("span",{class:"menu-icon"},null,-1)])]),L("img",{class:"logo",src:Xc,alt:"Logo",onClick:Ls}),L("div",{class:"app-title",role:"button",onClick:Ls},le(l.value),1),L("div",Tu,[L("label",Cu,le(f.value),1),Ds(L("select",{id:"language-select",class:"language-select","onUpdate:modelValue":m[0]||(m[0]=v=>r.value=v),"aria-label":f.value,onChange:ia},[(he(!0),pe(Be,null,Dt(a.value,v=>(he(),pe("option",{key:v.value,value:v.value},le(v.label),9,xu))),128))],40,Eu),[[Dc,r.value]])])]),L("aside",{class:Qn(["side-menu",{"side-menu--open":ne.value}])},[L("nav",Mu,[L("button",{class:Qn(["menu-item",{"menu-item--active":W.value==="composers"}]),onClick:m[1]||(m[1]=v=>Ms("composers"))},le(u.value.composers),3),L("button",{class:Qn(["menu-item",{"menu-item--active":W.value==="about"}]),onClick:m[2]||(m[2]=v=>Ms("about"))},le(u.value.about),3)])],2),ne.value?(he(),pe("div",{key:0,class:"backdrop",onClick:Qo})):Xe("",!0),L("main",Lu,[W.value==="composers"?(he(),pe("section",zu,[L("div",Au,[L("div",Pu,[ge.value?Xe("",!0):(he(),pe("div",Ru,[L("button",{type:"button",class:"control-btn",disabled:nn.value,onClick:Cs,"aria-label":"Jump to start of timeline"}," ⇤ ",8,Iu),L("button",{type:"button",class:"control-btn",disabled:Pn.value,onClick:c,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Fu)])),ge.value?Xe("",!0):(he(),pe("div",Hu,[L("button",{type:"button",class:"control-btn",disabled:Gn.value,onClick:m[3]||(m[3]=v=>lt(-1)),"aria-label":"Make timeline blocks smaller"}," − ",8,Nu),L("button",{type:"button",class:"control-btn",disabled:ot.value,onClick:m[4]||(m[4]=v=>lt(1)),"aria-label":"Make timeline blocks larger"}," + ",8,Ou)])),L("button",{class:"filter-dock__toggle control-btn control-primary","aria-expanded":ge.value,"aria-controls":"filter-panel",onClick:ea,"aria-label":"Filter composers"},[...m[6]||(m[6]=[L("svg",{class:"filter-icon",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[L("path",{d:"M3 5h18l-7 8v5l-4 2v-7L3 5z"})],-1)])],8,Wu),Le(tr,{name:"filter-fade"},{default:Ji(()=>[ge.value?(he(),pe("div",Bu,[L("div",Du,[(he(),pe(Be,null,Dt(_e,v=>L("label",{key:v.id,class:"filter-panel__item"},[Ds(L("input",{"onUpdate:modelValue":E=>Je.value[v.id]=E,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${kn(v.id)}`},null,8,Ku),[[Bc,Je.value[v.id]]]),L("span",ju,le(kn(v.id)),1)])),64))]),L("div",Vu,[L("button",{type:"button",class:"filter-panel__ok control-btn",onClick:na,"aria-label":"Close filters"},le(R.value),1)])])):Xe("",!0)]),_:1})])]),Le(wu,{composers:k.value,settings:ve,"era-labels":C.value},null,8,["composers","settings","era-labels"])])):W.value==="about"?(he(),pe("section",Gu,[L("div",$u,[m[10]||(m[10]=L("img",{class:"about__logo",src:Yc,alt:"Music logo",loading:"lazy"},null,-1)),L("h1",Uu,le(p.value.title),1),L("p",Ju,le(p.value.intro),1),L("p",qu,le(p.value.goal),1),L("div",Xu,[m[9]||(m[9]=L("img",{class:"about__photo",src:Zc,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),L("div",Yu,[L("div",Zu,le(p.value.authorLabel),1),L("div",Qu,le(p.value.authorName),1),m[7]||(m[7]=L("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),m[8]||(m[8]=L("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),L("div",ed,[L("div",nd,le(p.value.contributorsTitle),1),L("ul",td,[(he(!0),pe(Be,null,Dt(T.value,v=>(he(),pe("li",{key:v.url,class:"about__contributors-item"},[L("span",id,le(v.name),1),L("a",{class:"about__contributors-link",href:v.url,target:"_blank",rel:"noreferrer"},le(v.linkText),9,sd)]))),128))])])])])):Xe("",!0)]),Le(tr,{name:"fade"},{default:Ji(()=>[x.value?(he(),pe("div",{key:0,class:"composer-modal",onClick:Vc(zs,["self"])},[L("div",rd,[L("header",od,[L("div",ad,[L("h2",ld,le(N.value),1),b.value?(he(),pe("p",cd,le(b.value.birth)+" — "+le(b.value.death),1)):Xe("",!0)]),L("div",ud,[L("button",{class:"composer-modal__arrow",onClick:As,disabled:!Se.value,"aria-label":"Previous"}," ← ",8,dd),L("span",hd,le((S.value??0)+1)+" / "+le(k.value.length),1),L("button",{class:"composer-modal__arrow",onClick:Ps,disabled:!Te.value,"aria-label":"Next"}," → ",8,fd)]),L("button",{class:"composer-modal__close",onClick:zs,"aria-label":"Close composer details"},"×")]),L("div",md,[P.value?(he(),pe("div",pd,[L("img",{class:"composer-modal__photo",src:P.value,alt:N.value},null,8,gd),L("div",bd,[L("button",{class:"composer-modal__arrow",onClick:As,disabled:!Se.value,"aria-label":"Previous"}," ← ",8,vd),L("span",yd,le((S.value??0)+1)+" / "+le(k.value.length),1),L("button",{class:"composer-modal__arrow",onClick:Ps,disabled:!Te.value,"aria-label":"Next"}," → ",8,wd)]),L("div",kd,[L("div",_d,le(N.value),1),b.value?(he(),pe("div",Sd,le(b.value.birth)+" — "+le(b.value.death),1)):Xe("",!0)])])):Xe("",!0),L("div",Td,[L("div",Cd,[L("div",Ed,le(ie.value.keyWorks),1),Y.value.length?(he(),pe("a",xd,[...m[11]||(m[11]=[L("img",{class:"sc-powered__img",src:Qc,alt:"Powered by SoundCloud"},null,-1)])])):Xe("",!0)]),Y.value.length?(he(),pe("div",{key:Y.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":Y.value[0],"data-soundcloud-playlist-alt":Y.value.slice(1).join("|")},[...m[12]||(m[12]=[L("div",{class:"sc-player__status"},"Loading tracks...",-1)])],8,Md)):(he(),pe("div",Ld," Playlist will appear here soon. "))]),L("div",zd,[V.value?(he(),pe("div",Ad,le(V.value),1)):Xe("",!0),H.value?(he(),pe("ul",Pd,[(he(!0),pe(Be,null,Dt(H.value.split(`
`),(v,E)=>(he(),pe("li",{key:E},[L("span",Rd,le(v),1)]))),128))])):(he(),pe("p",Id,"No description yet."))])])])])):Xe("",!0)]),_:1})]))}},Od=Jo(Nd,[["__scopeId","data-v-0d0cabf6"]]);Uc(Od).mount("#app");
