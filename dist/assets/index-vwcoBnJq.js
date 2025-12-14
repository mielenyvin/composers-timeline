(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function si(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const de={},Qn=[],rn=()=>{},zr=()=>!1,as=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ii=e=>e.startsWith("onUpdate:"),Te=Object.assign,ri=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},aa=Object.prototype.hasOwnProperty,oe=(e,n)=>aa.call(e,n),W=Array.isArray,et=e=>xt(e)==="[object Map]",ot=e=>xt(e)==="[object Set]",Ii=e=>xt(e)==="[object Date]",$=e=>typeof e=="function",we=e=>typeof e=="string",on=e=>typeof e=="symbol",ce=e=>e!==null&&typeof e=="object",Ar=e=>(ce(e)||$(e))&&$(e.then)&&$(e.catch),Pr=Object.prototype.toString,xt=e=>Pr.call(e),la=e=>xt(e).slice(8,-1),Rr=e=>xt(e)==="[object Object]",oi=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ht=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ls=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},ca=/-\w/g,Mn=ls(e=>e.replace(ca,n=>n.slice(1).toUpperCase())),ua=/\B([A-Z])/g,Vn=ls(e=>e.replace(ua,"-$1").toLowerCase()),Ir=ls(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cs=ls(e=>e?`on${Ir(e)}`:""),xn=(e,n)=>!Object.is(e,n),Vt=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Fr=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},Hr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},da=e=>{const n=we(e)?Number(e):NaN;return isNaN(n)?e:n};let Fi;const cs=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ai(e){if(W(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],i=we(s)?pa(s):ai(s);if(i)for(const r in i)n[r]=i[r]}return n}else if(we(e)||ce(e))return e}const ha=/;(?![^(]*\))/g,fa=/:([^]+)/,ma=/\/\*[^]*?\*\//g;function pa(e){const n={};return e.replace(ma,"").split(ha).forEach(t=>{if(t){const s=t.split(fa);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function nt(e){let n="";if(we(e))n=e;else if(W(e))for(let t=0;t<e.length;t++){const s=nt(e[t]);s&&(n+=s+" ")}else if(ce(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const ga="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ba=si(ga);function Nr(e){return!!e||e===""}function va(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=Mt(e[s],n[s]);return t}function Mt(e,n){if(e===n)return!0;let t=Ii(e),s=Ii(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=on(e),s=on(n),t||s)return e===n;if(t=W(e),s=W(n),t||s)return t&&s?va(e,n):!1;if(t=ce(e),s=ce(n),t||s){if(!t||!s)return!1;const i=Object.keys(e).length,r=Object.keys(n).length;if(i!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=n.hasOwnProperty(o);if(a&&!l||!a&&l||!Mt(e[o],n[o]))return!1}}return String(e)===String(n)}function li(e,n){return e.findIndex(t=>Mt(t,n))}const Or=e=>!!(e&&e.__v_isRef===!0),le=e=>we(e)?e:e==null?"":W(e)||ce(e)&&(e.toString===Pr||!$(e.toString))?Or(e)?le(e.value):JSON.stringify(e,Wr,2):String(e),Wr=(e,n)=>Or(n)?Wr(e,n.value):et(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,i],r)=>(t[Ts(s,r)+" =>"]=i,t),{})}:ot(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Ts(t))}:on(n)?Ts(n):ce(n)&&!W(n)&&!Rr(n)?String(n):n,Ts=(e,n="")=>{var t;return on(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let We;class ya{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=We,!n&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=We;try{return We=this,n()}finally{We=t}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){this._on>0&&--this._on===0&&(We=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function wa(){return We}let me;const Es=new WeakSet;class Br{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Es.has(this)&&(Es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hi(this),jr(this);const n=me,t=Xe;me=this,Xe=!0;try{return this.fn()}finally{Vr(this),me=n,Xe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)di(n);this.deps=this.depsTail=void 0,Hi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ds(this)&&this.run()}get dirty(){return Ds(this)}}let Dr=0,ft,mt;function Kr(e,n=!1){if(e.flags|=8,n){e.next=mt,mt=e;return}e.next=ft,ft=e}function ci(){Dr++}function ui(){if(--Dr>0)return;if(mt){let n=mt;for(mt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;ft;){let n=ft;for(ft=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function jr(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Vr(e){let n,t=e.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),di(s),ka(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=n,e.depsTail=t}function Ds(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Gr(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Gr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yt)||(e.globalVersion=yt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ds(e))))return;e.flags|=2;const n=e.dep,t=me,s=Xe;me=e,Xe=!0;try{jr(e);const i=e.fn(e._value);(n.version===0||xn(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{me=t,Xe=s,Vr(e),e.flags&=-3}}function di(e,n=!1){const{dep:t,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)di(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function ka(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Xe=!0;const $r=[];function pn(){$r.push(Xe),Xe=!1}function gn(){const e=$r.pop();Xe=e===void 0?!0:e}function Hi(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=me;me=void 0;try{n()}finally{me=t}}}let yt=0;class Sa{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hi{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!me||!Xe||me===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==me)t=this.activeLink=new Sa(me,this),me.deps?(t.prevDep=me.depsTail,me.depsTail.nextDep=t,me.depsTail=t):me.deps=me.depsTail=t,Ur(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=me.depsTail,t.nextDep=void 0,me.depsTail.nextDep=t,me.depsTail=t,me.deps===t&&(me.deps=s)}return t}trigger(n){this.version++,yt++,this.notify(n)}notify(n){ci();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ui()}}}function Ur(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)Ur(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Ks=new WeakMap,Kn=Symbol(""),js=Symbol(""),wt=Symbol("");function Ee(e,n,t){if(Xe&&me){let s=Ks.get(e);s||Ks.set(e,s=new Map);let i=s.get(t);i||(s.set(t,i=new hi),i.map=s,i.key=t),i.track()}}function fn(e,n,t,s,i,r){const o=Ks.get(e);if(!o){yt++;return}const a=l=>{l&&l.trigger()};if(ci(),n==="clear")o.forEach(a);else{const l=W(e),f=l&&oi(t);if(l&&t==="length"){const u=Number(s);o.forEach((p,C)=>{(C==="length"||C===wt||!on(C)&&C>=u)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),f&&a(o.get(wt)),n){case"add":l?f&&a(o.get("length")):(a(o.get(Kn)),et(e)&&a(o.get(js)));break;case"delete":l||(a(o.get(Kn)),et(e)&&a(o.get(js)));break;case"set":et(e)&&a(o.get(Kn));break}}ui()}function Xn(e){const n=re(e);return n===e?n:(Ee(n,"iterate",wt),Je(e)?n:n.map(Ye))}function us(e){return Ee(e=re(e),"iterate",wt),e}function kn(e,n){return bn(e)?jn(e)?rt(Ye(n)):rt(n):Ye(n)}const _a={__proto__:null,[Symbol.iterator](){return xs(this,Symbol.iterator,e=>kn(this,e))},concat(...e){return Xn(this).concat(...e.map(n=>W(n)?Xn(n):n))},entries(){return xs(this,"entries",e=>(e[1]=kn(this,e[1]),e))},every(e,n){return ln(this,"every",e,n,void 0,arguments)},filter(e,n){return ln(this,"filter",e,n,t=>t.map(s=>kn(this,s)),arguments)},find(e,n){return ln(this,"find",e,n,t=>kn(this,t),arguments)},findIndex(e,n){return ln(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return ln(this,"findLast",e,n,t=>kn(this,t),arguments)},findLastIndex(e,n){return ln(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return ln(this,"forEach",e,n,void 0,arguments)},includes(...e){return Ms(this,"includes",e)},indexOf(...e){return Ms(this,"indexOf",e)},join(e){return Xn(this).join(e)},lastIndexOf(...e){return Ms(this,"lastIndexOf",e)},map(e,n){return ln(this,"map",e,n,void 0,arguments)},pop(){return lt(this,"pop")},push(...e){return lt(this,"push",e)},reduce(e,...n){return Ni(this,"reduce",e,n)},reduceRight(e,...n){return Ni(this,"reduceRight",e,n)},shift(){return lt(this,"shift")},some(e,n){return ln(this,"some",e,n,void 0,arguments)},splice(...e){return lt(this,"splice",e)},toReversed(){return Xn(this).toReversed()},toSorted(e){return Xn(this).toSorted(e)},toSpliced(...e){return Xn(this).toSpliced(...e)},unshift(...e){return lt(this,"unshift",e)},values(){return xs(this,"values",e=>kn(this,e))}};function xs(e,n,t){const s=us(e),i=s[n]();return s!==e&&!Je(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=t(r.value)),r}),i}const Ca=Array.prototype;function ln(e,n,t,s,i,r){const o=us(e),a=o!==e&&!Je(e),l=o[n];if(l!==Ca[n]){const p=l.apply(e,r);return a?Ye(p):p}let f=t;o!==e&&(a?f=function(p,C){return t.call(this,kn(e,p),C,e)}:t.length>2&&(f=function(p,C){return t.call(this,p,C,e)}));const u=l.call(o,f,s);return a&&i?i(u):u}function Ni(e,n,t,s){const i=us(e);let r=t;return i!==e&&(Je(e)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,e)}):r=function(o,a,l){return t.call(this,o,kn(e,a),l,e)}),i[n](r,...s)}function Ms(e,n,t){const s=re(e);Ee(s,"iterate",wt);const i=s[n](...t);return(i===-1||i===!1)&&pi(t[0])?(t[0]=re(t[0]),s[n](...t)):i}function lt(e,n,t=[]){pn(),ci();const s=re(e)[n].apply(e,t);return ui(),gn(),s}const Ta=si("__proto__,__v_isRef,__isVue"),Jr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(on));function Ea(e){on(e)||(e=String(e));const n=re(this);return Ee(n,"has",e),n.hasOwnProperty(e)}class qr{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?Ha:Qr:r?Zr:Yr).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const o=W(n);if(!i){let l;if(o&&(l=_a[t]))return l;if(t==="hasOwnProperty")return Ea}const a=Reflect.get(n,t,Me(n)?n:s);if((on(t)?Jr.has(t):Ta(t))||(i||Ee(n,"get",t),r))return a;if(Me(a)){const l=o&&oi(t)?a:a.value;return i&&ce(l)?Gs(l):l}return ce(a)?i?Gs(a):ds(a):a}}class Xr extends qr{constructor(n=!1){super(!1,n)}set(n,t,s,i){let r=n[t];const o=W(n)&&oi(t);if(!this._isShallow){const f=bn(r);if(!Je(s)&&!bn(s)&&(r=re(r),s=re(s)),!o&&Me(r)&&!Me(s))return f||(r.value=s),!0}const a=o?Number(t)<n.length:oe(n,t),l=Reflect.set(n,t,s,Me(n)?n:i);return n===re(i)&&(a?xn(s,r)&&fn(n,"set",t,s):fn(n,"add",t,s)),l}deleteProperty(n,t){const s=oe(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&s&&fn(n,"delete",t,void 0),i}has(n,t){const s=Reflect.has(n,t);return(!on(t)||!Jr.has(t))&&Ee(n,"has",t),s}ownKeys(n){return Ee(n,"iterate",W(n)?"length":Kn),Reflect.ownKeys(n)}}class xa extends qr{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Ma=new Xr,La=new xa,za=new Xr(!0);const Vs=e=>e,Ft=e=>Reflect.getPrototypeOf(e);function Aa(e,n,t){return function(...s){const i=this.__v_raw,r=re(i),o=et(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=i[e](...s),u=t?Vs:n?rt:Ye;return!n&&Ee(r,"iterate",l?js:Kn),{next(){const{value:p,done:C}=f.next();return C?{value:p,done:C}:{value:a?[u(p[0]),u(p[1])]:u(p),done:C}},[Symbol.iterator](){return this}}}}function Ht(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Pa(e,n){const t={get(i){const r=this.__v_raw,o=re(r),a=re(i);e||(xn(i,a)&&Ee(o,"get",i),Ee(o,"get",a));const{has:l}=Ft(o),f=n?Vs:e?rt:Ye;if(l.call(o,i))return f(r.get(i));if(l.call(o,a))return f(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(re(i),"iterate",Kn),i.size},has(i){const r=this.__v_raw,o=re(r),a=re(i);return e||(xn(i,a)&&Ee(o,"has",i),Ee(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=re(a),f=n?Vs:e?rt:Ye;return!e&&Ee(l,"iterate",Kn),a.forEach((u,p)=>i.call(r,f(u),f(p),o))}};return Te(t,e?{add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear")}:{add(i){!n&&!Je(i)&&!bn(i)&&(i=re(i));const r=re(this);return Ft(r).has.call(r,i)||(r.add(i),fn(r,"add",i,i)),this},set(i,r){!n&&!Je(r)&&!bn(r)&&(r=re(r));const o=re(this),{has:a,get:l}=Ft(o);let f=a.call(o,i);f||(i=re(i),f=a.call(o,i));const u=l.call(o,i);return o.set(i,r),f?xn(r,u)&&fn(o,"set",i,r):fn(o,"add",i,r),this},delete(i){const r=re(this),{has:o,get:a}=Ft(r);let l=o.call(r,i);l||(i=re(i),l=o.call(r,i)),a&&a.call(r,i);const f=r.delete(i);return l&&fn(r,"delete",i,void 0),f},clear(){const i=re(this),r=i.size!==0,o=i.clear();return r&&fn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Aa(i,e,n)}),t}function fi(e,n){const t=Pa(e,n);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(oe(t,i)&&i in s?t:s,i,r)}const Ra={get:fi(!1,!1)},Ia={get:fi(!1,!0)},Fa={get:fi(!0,!1)};const Yr=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,Ha=new WeakMap;function Na(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oa(e){return e.__v_skip||!Object.isExtensible(e)?0:Na(la(e))}function ds(e){return bn(e)?e:mi(e,!1,Ma,Ra,Yr)}function Wa(e){return mi(e,!1,za,Ia,Zr)}function Gs(e){return mi(e,!0,La,Fa,Qr)}function mi(e,n,t,s,i){if(!ce(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=Oa(e);if(r===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,r===2?s:t);return i.set(e,a),a}function jn(e){return bn(e)?jn(e.__v_raw):!!(e&&e.__v_isReactive)}function bn(e){return!!(e&&e.__v_isReadonly)}function Je(e){return!!(e&&e.__v_isShallow)}function pi(e){return e?!!e.__v_raw:!1}function re(e){const n=e&&e.__v_raw;return n?re(n):e}function Ba(e){return!oe(e,"__v_skip")&&Object.isExtensible(e)&&Fr(e,"__v_skip",!0),e}const Ye=e=>ce(e)?ds(e):e,rt=e=>ce(e)?Gs(e):e;function Me(e){return e?e.__v_isRef===!0:!1}function cn(e){return Da(e,!1)}function Da(e,n){return Me(e)?e:new Ka(e,n)}class Ka{constructor(n,t){this.dep=new hi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:re(n),this._value=t?n:Ye(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||Je(n)||bn(n);n=s?n:re(n),xn(n,t)&&(this._rawValue=n,this._value=s?n:Ye(n),this.dep.trigger())}}function ja(e){return Me(e)?e.value:e}const Va={get:(e,n,t)=>n==="__v_raw"?e:ja(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const i=e[n];return Me(i)&&!Me(t)?(i.value=t,!0):Reflect.set(e,n,t,s)}};function eo(e){return jn(e)?e:new Proxy(e,Va)}class Ga{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new hi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return Kr(this,!0),!0}get value(){const n=this.dep.track();return Gr(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function $a(e,n,t=!1){let s,i;return $(e)?s=e:(s=e.get,i=e.set),new Ga(s,i,t)}const Nt={},Xt=new WeakMap;let Wn;function Ua(e,n=!1,t=Wn){if(t){let s=Xt.get(t);s||Xt.set(t,s=[]),s.push(e)}}function Ja(e,n,t=de){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=t,f=F=>i?F:Je(F)||i===!1||i===0?mn(F,1):mn(F);let u,p,C,T,R=!1,B=!1;if(Me(e)?(p=()=>e.value,R=Je(e)):jn(e)?(p=()=>f(e),R=!0):W(e)?(B=!0,R=e.some(F=>jn(F)||Je(F)),p=()=>e.map(F=>{if(Me(F))return F.value;if(jn(F))return f(F);if($(F))return l?l(F,2):F()})):$(e)?n?p=l?()=>l(e,2):e:p=()=>{if(C){pn();try{C()}finally{gn()}}const F=Wn;Wn=u;try{return l?l(e,3,[T]):e(T)}finally{Wn=F}}:p=rn,n&&i){const F=p,U=i===!0?1/0:i;p=()=>mn(F(),U)}const ae=wa(),H=()=>{u.stop(),ae&&ae.active&&ri(ae.effects,u)};if(r&&n){const F=n;n=(...U)=>{F(...U),H()}}let z=B?new Array(e.length).fill(Nt):Nt;const j=F=>{if(!(!(u.flags&1)||!u.dirty&&!F))if(n){const U=u.run();if(i||R||(B?U.some((he,ne)=>xn(he,z[ne])):xn(U,z))){C&&C();const he=Wn;Wn=u;try{const ne=[U,z===Nt?void 0:B&&z[0]===Nt?[]:z,T];z=U,l?l(n,3,ne):n(...ne)}finally{Wn=he}}}else u.run()};return a&&a(j),u=new Br(p),u.scheduler=o?()=>o(j,!1):j,T=F=>Ua(F,!1,u),C=u.onStop=()=>{const F=Xt.get(u);if(F){if(l)l(F,4);else for(const U of F)U();Xt.delete(u)}},n?s?j(!0):z=u.run():o?o(j.bind(null,!0),!0):u.run(),H.pause=u.pause.bind(u),H.resume=u.resume.bind(u),H.stop=H,H}function mn(e,n=1/0,t){if(n<=0||!ce(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Me(e))mn(e.value,n,t);else if(W(e))for(let s=0;s<e.length;s++)mn(e[s],n,t);else if(ot(e)||et(e))e.forEach(s=>{mn(s,n,t)});else if(Rr(e)){for(const s in e)mn(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&mn(e[s],n,t)}return e}function Lt(e,n,t,s){try{return s?e(...s):e()}catch(i){hs(i,n,t)}}function Ze(e,n,t,s){if($(e)){const i=Lt(e,n,t,s);return i&&Ar(i)&&i.catch(r=>{hs(r,n,t)}),i}if(W(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Ze(e[r],n,t,s));return i}}function hs(e,n,t,s=!0){const i=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||de;if(n){let a=n.parent;const l=n.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,f)===!1)return}a=a.parent}if(r){pn(),Lt(r,null,10,[e,l,f]),gn();return}}qa(e,t,i,s,o)}function qa(e,n,t,s=!0,i=!1){if(i)throw e;console.error(e)}const Re=[];let tn=-1;const tt=[];let Sn=null,Zn=0;const no=Promise.resolve();let Yt=null;function Zt(e){const n=Yt||no;return e?n.then(this?e.bind(this):e):n}function Xa(e){let n=tn+1,t=Re.length;for(;n<t;){const s=n+t>>>1,i=Re[s],r=kt(i);r<e||r===e&&i.flags&2?n=s+1:t=s}return n}function gi(e){if(!(e.flags&1)){const n=kt(e),t=Re[Re.length-1];!t||!(e.flags&2)&&n>=kt(t)?Re.push(e):Re.splice(Xa(n),0,e),e.flags|=1,to()}}function to(){Yt||(Yt=no.then(io))}function Ya(e){W(e)?tt.push(...e):Sn&&e.id===-1?Sn.splice(Zn+1,0,e):e.flags&1||(tt.push(e),e.flags|=1),to()}function Oi(e,n,t=tn+1){for(;t<Re.length;t++){const s=Re[t];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Re.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function so(e){if(tt.length){const n=[...new Set(tt)].sort((t,s)=>kt(t)-kt(s));if(tt.length=0,Sn){Sn.push(...n);return}for(Sn=n,Zn=0;Zn<Sn.length;Zn++){const t=Sn[Zn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Sn=null,Zn=0}}const kt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function io(e){try{for(tn=0;tn<Re.length;tn++){const n=Re[tn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Lt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;tn<Re.length;tn++){const n=Re[tn];n&&(n.flags&=-2)}tn=-1,Re.length=0,so(),Yt=null,(Re.length||tt.length)&&io()}}let Ue=null,ro=null;function Qt(e){const n=Ue;return Ue=e,ro=e&&e.type.__scopeId||null,n}function $s(e,n=Ue,t){if(!n||e._n)return e;const s=(...i)=>{s._d&&ts(-1);const r=Qt(n);let o;try{o=e(...i)}finally{Qt(r),s._d&&ts(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Wi(e,n){if(Ue===null)return e;const t=ys(Ue),s=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[r,o,a,l=de]=n[i];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&mn(o),s.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Fn(e,n,t,s){const i=e.dirs,r=n&&n.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(pn(),Ze(l,t,8,[e.el,a,e,n]),gn())}}const Za=Symbol("_vte"),oo=e=>e.__isTeleport,hn=Symbol("_leaveCb"),Ot=Symbol("_enterCb");function Qa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ps(()=>{e.isMounted=!0}),gs(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],ao={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},lo=e=>{const n=e.subTree;return n.component?lo(n.component):n},el={name:"BaseTransition",props:ao,setup(e,{slots:n}){const t=Fo(),s=Qa();return()=>{const i=n.default&&ho(n.default(),!0);if(!i||!i.length)return;const r=co(i),o=re(e),{mode:a}=o;if(s.isLeaving)return Ls(r);const l=Bi(r);if(!l)return Ls(r);let f=Us(l,o,s,t,p=>f=p);l.type!==Ie&&St(l,f);let u=t.subTree&&Bi(t.subTree);if(u&&u.type!==Ie&&!Bn(u,l)&&lo(t).type!==Ie){let p=Us(u,o,s,t);if(St(u,p),a==="out-in"&&l.type!==Ie)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,u=void 0},Ls(r);a==="in-out"&&l.type!==Ie?p.delayLeave=(C,T,R)=>{const B=uo(s,u);B[String(u.key)]=u,C[hn]=()=>{T(),C[hn]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{R(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function co(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Ie){n=t;break}}return n}const nl=el;function uo(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function Us(e,n,t,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:C,onLeave:T,onAfterLeave:R,onLeaveCancelled:B,onBeforeAppear:ae,onAppear:H,onAfterAppear:z,onAppearCancelled:j}=n,F=String(e.key),U=uo(t,e),he=(A,I)=>{A&&Ze(A,s,9,I)},ne=(A,I)=>{const D=I[1];he(A,I),W(A)?A.every(x=>x.length<=1)&&D():A.length<=1&&D()},Y={mode:o,persisted:a,beforeEnter(A){let I=l;if(!t.isMounted)if(r)I=ae||l;else return;A[hn]&&A[hn](!0);const D=U[F];D&&Bn(e,D)&&D.el[hn]&&D.el[hn](),he(I,[A])},enter(A){let I=f,D=u,x=p;if(!t.isMounted)if(r)I=H||f,D=z||u,x=j||p;else return;let G=!1;const te=A[Ot]=ge=>{G||(G=!0,ge?he(x,[A]):he(D,[A]),Y.delayedLeave&&Y.delayedLeave(),A[Ot]=void 0)};I?ne(I,[A,te]):te()},leave(A,I){const D=String(e.key);if(A[Ot]&&A[Ot](!0),t.isUnmounting)return I();he(C,[A]);let x=!1;const G=A[hn]=te=>{x||(x=!0,I(),te?he(B,[A]):he(R,[A]),A[hn]=void 0,U[D]===e&&delete U[D])};U[D]=e,T?ne(T,[A,G]):G()},clone(A){const I=Us(A,n,t,s,i);return i&&i(I),I}};return Y}function Ls(e){if(fs(e))return e=Ln(e),e.children=null,e}function Bi(e){if(!fs(e))return oo(e.type)&&e.children?co(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&$(t.default))return t.default()}}function St(e,n){e.shapeFlag&6&&e.component?(e.transition=n,St(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ho(e,n=!1,t){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Be?(o.patchFlag&128&&i++,s=s.concat(ho(o.children,n,a))):(n||o.type!==Ie)&&s.push(a!=null?Ln(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function fo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const es=new WeakMap;function pt(e,n,t,s,i=!1){if(W(e)){e.forEach((R,B)=>pt(R,n&&(W(n)?n[B]:n),t,s,i));return}if(gt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&pt(e,n,t,s.component.subTree);return}const r=s.shapeFlag&4?ys(s.component):s.el,o=i?null:r,{i:a,r:l}=e,f=n&&n.r,u=a.refs===de?a.refs={}:a.refs,p=a.setupState,C=re(p),T=p===de?zr:R=>oe(C,R);if(f!=null&&f!==l){if(Di(n),we(f))u[f]=null,T(f)&&(p[f]=null);else if(Me(f)){f.value=null;const R=n;R.k&&(u[R.k]=null)}}if($(l))Lt(l,a,12,[o,u]);else{const R=we(l),B=Me(l);if(R||B){const ae=()=>{if(e.f){const H=R?T(l)?p[l]:u[l]:l.value;if(i)W(H)&&ri(H,r);else if(W(H))H.includes(r)||H.push(r);else if(R)u[l]=[r],T(l)&&(p[l]=u[l]);else{const z=[r];l.value=z,e.k&&(u[e.k]=z)}}else R?(u[l]=o,T(l)&&(p[l]=o)):B&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const H=()=>{ae(),es.delete(e)};H.id=-1,es.set(e,H),Ke(H,t)}else Di(e),ae()}}}function Di(e){const n=es.get(e);n&&(n.flags|=8,es.delete(e))}cs().requestIdleCallback;cs().cancelIdleCallback;const gt=e=>!!e.type.__asyncLoader,fs=e=>e.type.__isKeepAlive;function tl(e,n){mo(e,"a",n)}function sl(e,n){mo(e,"da",n)}function mo(e,n,t=Fe){const s=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ms(n,s,t),t){let i=t.parent;for(;i&&i.parent;)fs(i.parent.vnode)&&il(s,n,t,i),i=i.parent}}function il(e,n,t,s){const i=ms(n,e,s,!0);po(()=>{ri(s[n],i)},t)}function ms(e,n,t=Fe,s=!1){if(t){const i=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{pn();const a=zt(t),l=Ze(n,t,e,o);return a(),gn(),l});return s?i.unshift(r):i.push(r),r}}const vn=e=>(n,t=Fe)=>{(!Ct||e==="sp")&&ms(e,(...s)=>n(...s),t)},rl=vn("bm"),ps=vn("m"),ol=vn("bu"),al=vn("u"),gs=vn("bum"),po=vn("um"),ll=vn("sp"),cl=vn("rtg"),ul=vn("rtc");function dl(e,n=Fe){ms("ec",e,n)}const hl=Symbol.for("v-ndc");function Wt(e,n,t,s){let i;const r=t,o=W(e);if(o||we(e)){const a=o&&jn(e);let l=!1,f=!1;a&&(l=!Je(e),f=bn(e),e=us(e)),i=new Array(e.length);for(let u=0,p=e.length;u<p;u++)i[u]=n(l?f?rt(Ye(e[u])):Ye(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=n(a+1,a,void 0,r)}else if(ce(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>n(a,l,void 0,r));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const u=a[l];i[l]=n(e[u],u,l,r)}}else i=[];return i}const Js=e=>e?Ho(e)?ys(e):Js(e.parent):null,bt=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Js(e.parent),$root:e=>Js(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>bo(e),$forceUpdate:e=>e.f||(e.f=()=>{gi(e.update)}),$nextTick:e=>e.n||(e.n=Zt.bind(e.proxy)),$watch:e=>Cl.bind(e)}),zs=(e,n)=>e!==de&&!e.__isScriptSetup&&oe(e,n),fl={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;if(n[0]!=="$"){const C=o[n];if(C!==void 0)switch(C){case 1:return s[n];case 2:return i[n];case 4:return t[n];case 3:return r[n]}else{if(zs(s,n))return o[n]=1,s[n];if(i!==de&&oe(i,n))return o[n]=2,i[n];if(oe(r,n))return o[n]=3,r[n];if(t!==de&&oe(t,n))return o[n]=4,t[n];qs&&(o[n]=0)}}const f=bt[n];let u,p;if(f)return n==="$attrs"&&Ee(e.attrs,"get",""),f(e);if((u=a.__cssModules)&&(u=u[n]))return u;if(t!==de&&oe(t,n))return o[n]=4,t[n];if(p=l.config.globalProperties,oe(p,n))return p[n]},set({_:e},n,t){const{data:s,setupState:i,ctx:r}=e;return zs(i,n)?(i[n]=t,!0):s!==de&&oe(s,n)?(s[n]=t,!0):oe(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(t[a]||e!==de&&a[0]!=="$"&&oe(e,a)||zs(n,a)||oe(r,a)||oe(s,a)||oe(bt,a)||oe(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:oe(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Ki(e){return W(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let qs=!0;function ml(e){const n=bo(e),t=e.proxy,s=e.ctx;qs=!1,n.beforeCreate&&ji(n.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:f,created:u,beforeMount:p,mounted:C,beforeUpdate:T,updated:R,activated:B,deactivated:ae,beforeDestroy:H,beforeUnmount:z,destroyed:j,unmounted:F,render:U,renderTracked:he,renderTriggered:ne,errorCaptured:Y,serverPrefetch:A,expose:I,inheritAttrs:D,components:x,directives:G,filters:te}=n;if(f&&pl(f,s,null),o)for(const Z in o){const J=o[Z];$(J)&&(s[Z]=J.bind(t))}if(i){const Z=i.call(t,t);ce(Z)&&(e.data=ds(Z))}if(qs=!0,r)for(const Z in r){const J=r[Z],He=$(J)?J.bind(t,t):$(J.get)?J.get.bind(t,t):rn,Le=!$(J)&&$(J.set)?J.set.bind(t):rn,ye=X({get:He,set:Le});Object.defineProperty(s,Z,{enumerable:!0,configurable:!0,get:()=>ye.value,set:be=>ye.value=be})}if(a)for(const Z in a)go(a[Z],s,t,Z);if(l){const Z=$(l)?l.call(t):l;Reflect.ownKeys(Z).forEach(J=>{kl(J,Z[J])})}u&&ji(u,e,"c");function se(Z,J){W(J)?J.forEach(He=>Z(He.bind(t))):J&&Z(J.bind(t))}if(se(rl,p),se(ps,C),se(ol,T),se(al,R),se(tl,B),se(sl,ae),se(dl,Y),se(ul,he),se(cl,ne),se(gs,z),se(po,F),se(ll,A),W(I))if(I.length){const Z=e.exposed||(e.exposed={});I.forEach(J=>{Object.defineProperty(Z,J,{get:()=>t[J],set:He=>t[J]=He,enumerable:!0})})}else e.exposed||(e.exposed={});U&&e.render===rn&&(e.render=U),D!=null&&(e.inheritAttrs=D),x&&(e.components=x),G&&(e.directives=G),A&&fo(e)}function pl(e,n,t=rn){W(e)&&(e=Xs(e));for(const s in e){const i=e[s];let r;ce(i)?"default"in i?r=Gt(i.from||s,i.default,!0):r=Gt(i.from||s):r=Gt(i),Me(r)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[s]=r}}function ji(e,n,t){Ze(W(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function go(e,n,t,s){let i=s.includes(".")?wo(t,s):()=>t[s];if(we(e)){const r=n[e];$(r)&&$e(i,r)}else if($(e))$e(i,e.bind(t));else if(ce(e))if(W(e))e.forEach(r=>go(r,n,t,s));else{const r=$(e.handler)?e.handler.bind(t):n[e.handler];$(r)&&$e(i,r,e)}}function bo(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(n);let l;return a?l=a:!i.length&&!t&&!s?l=n:(l={},i.length&&i.forEach(f=>ns(l,f,o,!0)),ns(l,n,o)),ce(n)&&r.set(n,l),l}function ns(e,n,t,s=!1){const{mixins:i,extends:r}=n;r&&ns(e,r,t,!0),i&&i.forEach(o=>ns(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const a=gl[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const gl={data:Vi,props:Gi,emits:Gi,methods:ut,computed:ut,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:ut,directives:ut,watch:vl,provide:Vi,inject:bl};function Vi(e,n){return n?e?function(){return Te($(e)?e.call(this,this):e,$(n)?n.call(this,this):n)}:n:e}function bl(e,n){return ut(Xs(e),Xs(n))}function Xs(e){if(W(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Pe(e,n){return e?[...new Set([].concat(e,n))]:n}function ut(e,n){return e?Te(Object.create(null),e,n):n}function Gi(e,n){return e?W(e)&&W(n)?[...new Set([...e,...n])]:Te(Object.create(null),Ki(e),Ki(n??{})):n}function vl(e,n){if(!e)return n;if(!n)return e;const t=Te(Object.create(null),e);for(const s in n)t[s]=Pe(e[s],n[s]);return t}function vo(){return{app:null,config:{isNativeTag:zr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yl=0;function wl(e,n){return function(s,i=null){$(s)||(s=Te({},s)),i!=null&&!ce(i)&&(i=null);const r=vo(),o=new WeakSet,a=[];let l=!1;const f=r.app={_uid:yl++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ic,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&$(u.install)?(o.add(u),u.install(f,...p)):$(u)&&(o.add(u),u(f,...p))),f},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),f},component(u,p){return p?(r.components[u]=p,f):r.components[u]},directive(u,p){return p?(r.directives[u]=p,f):r.directives[u]},mount(u,p,C){if(!l){const T=f._ceVNode||xe(s,i);return T.appContext=r,C===!0?C="svg":C===!1&&(C=void 0),e(T,u,C),l=!0,f._container=u,u.__vue_app__=f,ys(T.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ze(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,p){return r.provides[u]=p,f},runWithContext(u){const p=st;st=f;try{return u()}finally{st=p}}};return f}}let st=null;function kl(e,n){if(Fe){let t=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===t&&(t=Fe.provides=Object.create(s)),t[e]=n}}function Gt(e,n,t=!1){const s=Fo();if(s||st){let i=st?st._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&$(n)?n.call(s&&s.proxy):n}}const Sl=Symbol.for("v-scx"),_l=()=>Gt(Sl);function $e(e,n,t){return yo(e,n,t)}function yo(e,n,t=de){const{immediate:s,deep:i,flush:r,once:o}=t,a=Te({},t),l=n&&s||!n&&r!=="post";let f;if(Ct){if(r==="sync"){const T=_l();f=T.__watcherHandles||(T.__watcherHandles=[])}else if(!l){const T=()=>{};return T.stop=rn,T.resume=rn,T.pause=rn,T}}const u=Fe;a.call=(T,R,B)=>Ze(T,u,R,B);let p=!1;r==="post"?a.scheduler=T=>{Ke(T,u&&u.suspense)}:r!=="sync"&&(p=!0,a.scheduler=(T,R)=>{R?T():gi(T)}),a.augmentJob=T=>{n&&(T.flags|=4),p&&(T.flags|=2,u&&(T.id=u.uid,T.i=u))};const C=Ja(e,n,a);return Ct&&(f?f.push(C):l&&C()),C}function Cl(e,n,t){const s=this.proxy,i=we(e)?e.includes(".")?wo(s,e):()=>s[e]:e.bind(s,s);let r;$(n)?r=n:(r=n.handler,t=n);const o=zt(this),a=yo(i,r.bind(s),t);return o(),a}function wo(e,n){const t=n.split(".");return()=>{let s=e;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const Tl=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Mn(n)}Modifiers`]||e[`${Vn(n)}Modifiers`];function El(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||de;let i=t;const r=n.startsWith("update:"),o=r&&Tl(s,n.slice(7));o&&(o.trim&&(i=t.map(u=>we(u)?u.trim():u)),o.number&&(i=t.map(Hr)));let a,l=s[a=Cs(n)]||s[a=Cs(Mn(n))];!l&&r&&(l=s[a=Cs(Vn(n))]),l&&Ze(l,e,6,i);const f=s[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ze(f,e,6,i)}}const xl=new WeakMap;function ko(e,n,t=!1){const s=t?xl:n.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!$(e)){const l=f=>{const u=ko(f,n,!0);u&&(a=!0,Te(o,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ce(e)&&s.set(e,null),null):(W(r)?r.forEach(l=>o[l]=null):Te(o,r),ce(e)&&s.set(e,o),o)}function bs(e,n){return!e||!as(n)?!1:(n=n.slice(2).replace(/Once$/,""),oe(e,n[0].toLowerCase()+n.slice(1))||oe(e,Vn(n))||oe(e,n))}function $i(e){const{type:n,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:f,renderCache:u,props:p,data:C,setupState:T,ctx:R,inheritAttrs:B}=e,ae=Qt(e);let H,z;try{if(t.shapeFlag&4){const F=i||s,U=F;H=sn(f.call(U,F,u,p,T,C,R)),z=a}else{const F=n;H=sn(F.length>1?F(p,{attrs:a,slots:o,emit:l}):F(p,null)),z=n.props?a:Ml(a)}}catch(F){vt.length=0,hs(F,e,1),H=xe(Ie)}let j=H;if(z&&B!==!1){const F=Object.keys(z),{shapeFlag:U}=j;F.length&&U&7&&(r&&F.some(ii)&&(z=Ll(z,r)),j=Ln(j,z,!1,!0))}return t.dirs&&(j=Ln(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(t.dirs):t.dirs),t.transition&&St(j,t.transition),H=j,Qt(ae),H}const Ml=e=>{let n;for(const t in e)(t==="class"||t==="style"||as(t))&&((n||(n={}))[t]=e[t]);return n},Ll=(e,n)=>{const t={};for(const s in e)(!ii(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function zl(e,n,t){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=n,f=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Ui(s,o,f):!!o;if(l&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const C=u[p];if(o[C]!==s[C]&&!bs(f,C))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ui(s,o,f):!0:!!o;return!1}function Ui(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(n[r]!==e[r]&&!bs(t,r))return!0}return!1}function Al({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const So={},_o=()=>Object.create(So),Co=e=>Object.getPrototypeOf(e)===So;function Pl(e,n,t,s=!1){const i={},r=_o();e.propsDefaults=Object.create(null),To(e,n,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);t?e.props=s?i:Wa(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Rl(e,n,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=re(i),[l]=e.propsOptions;let f=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let C=u[p];if(bs(e.emitsOptions,C))continue;const T=n[C];if(l)if(oe(r,C))T!==r[C]&&(r[C]=T,f=!0);else{const R=Mn(C);i[R]=Ys(l,a,R,T,e,!1)}else T!==r[C]&&(r[C]=T,f=!0)}}}else{To(e,n,i,r)&&(f=!0);let u;for(const p in a)(!n||!oe(n,p)&&((u=Vn(p))===p||!oe(n,u)))&&(l?t&&(t[p]!==void 0||t[u]!==void 0)&&(i[p]=Ys(l,a,p,void 0,e,!0)):delete i[p]);if(r!==a)for(const p in r)(!n||!oe(n,p))&&(delete r[p],f=!0)}f&&fn(e.attrs,"set","")}function To(e,n,t,s){const[i,r]=e.propsOptions;let o=!1,a;if(n)for(let l in n){if(ht(l))continue;const f=n[l];let u;i&&oe(i,u=Mn(l))?!r||!r.includes(u)?t[u]=f:(a||(a={}))[u]=f:bs(e.emitsOptions,l)||(!(l in s)||f!==s[l])&&(s[l]=f,o=!0)}if(r){const l=re(t),f=a||de;for(let u=0;u<r.length;u++){const p=r[u];t[p]=Ys(i,l,p,f[p],e,!oe(f,p))}}return o}function Ys(e,n,t,s,i,r){const o=e[t];if(o!=null){const a=oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$(l)){const{propsDefaults:f}=i;if(t in f)s=f[t];else{const u=zt(i);s=f[t]=l.call(null,n),u()}}else s=l;i.ce&&i.ce._setProp(t,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Vn(t))&&(s=!0))}return s}const Il=new WeakMap;function Eo(e,n,t=!1){const s=t?Il:n.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!$(e)){const u=p=>{l=!0;const[C,T]=Eo(p,n,!0);Te(o,C),T&&a.push(...T)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return ce(e)&&s.set(e,Qn),Qn;if(W(r))for(let u=0;u<r.length;u++){const p=Mn(r[u]);Ji(p)&&(o[p]=de)}else if(r)for(const u in r){const p=Mn(u);if(Ji(p)){const C=r[u],T=o[p]=W(C)||$(C)?{type:C}:Te({},C),R=T.type;let B=!1,ae=!0;if(W(R))for(let H=0;H<R.length;++H){const z=R[H],j=$(z)&&z.name;if(j==="Boolean"){B=!0;break}else j==="String"&&(ae=!1)}else B=$(R)&&R.name==="Boolean";T[0]=B,T[1]=ae,(B||oe(T,"default"))&&a.push(p)}}const f=[o,a];return ce(e)&&s.set(e,f),f}function Ji(e){return e[0]!=="$"&&!ht(e)}const bi=e=>e==="_"||e==="_ctx"||e==="$stable",vi=e=>W(e)?e.map(sn):[sn(e)],Fl=(e,n,t)=>{if(n._n)return n;const s=$s((...i)=>vi(n(...i)),t);return s._c=!1,s},xo=(e,n,t)=>{const s=e._ctx;for(const i in e){if(bi(i))continue;const r=e[i];if($(r))n[i]=Fl(i,r,s);else if(r!=null){const o=vi(r);n[i]=()=>o}}},Mo=(e,n)=>{const t=vi(n);e.slots.default=()=>t},Lo=(e,n,t)=>{for(const s in n)(t||!bi(s))&&(e[s]=n[s])},Hl=(e,n,t)=>{const s=e.slots=_o();if(e.vnode.shapeFlag&32){const i=n._;i?(Lo(s,n,t),t&&Fr(s,"_",i,!0)):xo(n,s)}else n&&Mo(e,n)},Nl=(e,n,t)=>{const{vnode:s,slots:i}=e;let r=!0,o=de;if(s.shapeFlag&32){const a=n._;a?t&&a===1?r=!1:Lo(i,n,t):(r=!n.$stable,xo(n,i)),o=n}else n&&(Mo(e,n),o={default:1});if(r)for(const a in i)!bi(a)&&o[a]==null&&delete i[a]},Ke=Kl;function Ol(e){return Wl(e)}function Wl(e,n){const t=cs();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:f,setElementText:u,parentNode:p,nextSibling:C,setScopeId:T=rn,insertStaticContent:R}=e,B=(c,d,g,S=null,v=null,w=null,_=void 0,M=null,k=!!d.dynamicChildren)=>{if(c===d)return;c&&!Bn(c,d)&&(S=Un(c),be(c,v,w,!0),c=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:O,shapeFlag:P}=d;switch(y){case vs:ae(c,d,g,S);break;case Ie:H(c,d,g,S);break;case Ps:c==null&&z(d,g,S,_);break;case Be:x(c,d,g,S,v,w,_,M,k);break;default:P&1?U(c,d,g,S,v,w,_,M,k):P&6?G(c,d,g,S,v,w,_,M,k):(P&64||P&128)&&y.process(c,d,g,S,v,w,_,M,k,An)}O!=null&&v?pt(O,c&&c.ref,w,d||c,!d):O==null&&c&&c.ref!=null&&pt(c.ref,null,w,c,!0)},ae=(c,d,g,S)=>{if(c==null)s(d.el=a(d.children),g,S);else{const v=d.el=c.el;d.children!==c.children&&f(v,d.children)}},H=(c,d,g,S)=>{c==null?s(d.el=l(d.children||""),g,S):d.el=c.el},z=(c,d,g,S)=>{[c.el,c.anchor]=R(c.children,d,g,S,c.el,c.anchor)},j=({el:c,anchor:d},g,S)=>{let v;for(;c&&c!==d;)v=C(c),s(c,g,S),c=v;s(d,g,S)},F=({el:c,anchor:d})=>{let g;for(;c&&c!==d;)g=C(c),i(c),c=g;i(d)},U=(c,d,g,S,v,w,_,M,k)=>{if(d.type==="svg"?_="svg":d.type==="math"&&(_="mathml"),c==null)he(d,g,S,v,w,_,M,k);else{const y=c.el&&c.el._isVueCE?c.el:null;try{y&&y._beginPatch(),A(c,d,v,w,_,M,k)}finally{y&&y._endPatch()}}},he=(c,d,g,S,v,w,_,M)=>{let k,y;const{props:O,shapeFlag:P,transition:N,dirs:V}=c;if(k=c.el=o(c.type,w,O&&O.is,O),P&8?u(k,c.children):P&16&&Y(c.children,k,null,S,v,As(c,w),_,M),V&&Fn(c,null,S,"created"),ne(k,c,c.scopeId,_,S),O){for(const Q in O)Q!=="value"&&!ht(Q)&&r(k,Q,null,O[Q],w,S);"value"in O&&r(k,"value",null,O.value,w),(y=O.onVnodeBeforeMount)&&nn(y,S,c)}V&&Fn(c,null,S,"beforeMount");const q=Bl(v,N);q&&N.beforeEnter(k),s(k,d,g),((y=O&&O.onVnodeMounted)||q||V)&&Ke(()=>{y&&nn(y,S,c),q&&N.enter(k),V&&Fn(c,null,S,"mounted")},v)},ne=(c,d,g,S,v)=>{if(g&&T(c,g),S)for(let w=0;w<S.length;w++)T(c,S[w]);if(v){let w=v.subTree;if(d===w||Po(w.type)&&(w.ssContent===d||w.ssFallback===d)){const _=v.vnode;ne(c,_,_.scopeId,_.slotScopeIds,v.parent)}}},Y=(c,d,g,S,v,w,_,M,k=0)=>{for(let y=k;y<c.length;y++){const O=c[y]=M?_n(c[y]):sn(c[y]);B(null,O,d,g,S,v,w,_,M)}},A=(c,d,g,S,v,w,_)=>{const M=d.el=c.el;let{patchFlag:k,dynamicChildren:y,dirs:O}=d;k|=c.patchFlag&16;const P=c.props||de,N=d.props||de;let V;if(g&&Hn(g,!1),(V=N.onVnodeBeforeUpdate)&&nn(V,g,d,c),O&&Fn(d,c,g,"beforeUpdate"),g&&Hn(g,!0),(P.innerHTML&&N.innerHTML==null||P.textContent&&N.textContent==null)&&u(M,""),y?I(c.dynamicChildren,y,M,g,S,As(d,v),w):_||J(c,d,M,null,g,S,As(d,v),w,!1),k>0){if(k&16)D(M,P,N,g,v);else if(k&2&&P.class!==N.class&&r(M,"class",null,N.class,v),k&4&&r(M,"style",P.style,N.style,v),k&8){const q=d.dynamicProps;for(let Q=0;Q<q.length;Q++){const ee=q[Q],Se=P[ee],ue=N[ee];(ue!==Se||ee==="value")&&r(M,ee,Se,ue,v,g)}}k&1&&c.children!==d.children&&u(M,d.children)}else!_&&y==null&&D(M,P,N,g,v);((V=N.onVnodeUpdated)||O)&&Ke(()=>{V&&nn(V,g,d,c),O&&Fn(d,c,g,"updated")},S)},I=(c,d,g,S,v,w,_)=>{for(let M=0;M<d.length;M++){const k=c[M],y=d[M],O=k.el&&(k.type===Be||!Bn(k,y)||k.shapeFlag&198)?p(k.el):g;B(k,y,O,null,S,v,w,_,!0)}},D=(c,d,g,S,v)=>{if(d!==g){if(d!==de)for(const w in d)!ht(w)&&!(w in g)&&r(c,w,d[w],null,v,S);for(const w in g){if(ht(w))continue;const _=g[w],M=d[w];_!==M&&w!=="value"&&r(c,w,M,_,v,S)}"value"in g&&r(c,"value",d.value,g.value,v)}},x=(c,d,g,S,v,w,_,M,k)=>{const y=d.el=c?c.el:a(""),O=d.anchor=c?c.anchor:a("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:V}=d;V&&(M=M?M.concat(V):V),c==null?(s(y,g,S),s(O,g,S),Y(d.children||[],g,O,v,w,_,M,k)):P>0&&P&64&&N&&c.dynamicChildren?(I(c.dynamicChildren,N,g,v,w,_,M),(d.key!=null||v&&d===v.subTree)&&zo(c,d,!0)):J(c,d,g,O,v,w,_,M,k)},G=(c,d,g,S,v,w,_,M,k)=>{d.slotScopeIds=M,c==null?d.shapeFlag&512?v.ctx.activate(d,g,S,_,k):te(d,g,S,v,w,_,k):ge(c,d,k)},te=(c,d,g,S,v,w,_)=>{const M=c.component=Yl(c,S,v);if(fs(c)&&(M.ctx.renderer=An),Zl(M,!1,_),M.asyncDep){if(v&&v.registerDep(M,se,_),!c.el){const k=M.subTree=xe(Ie);H(null,k,d,g),c.placeholder=k.el}}else se(M,c,d,g,v,w,_)},ge=(c,d,g)=>{const S=d.component=c.component;if(zl(c,d,g))if(S.asyncDep&&!S.asyncResolved){Z(S,d,g);return}else S.next=d,S.update();else d.el=c.el,S.vnode=d},se=(c,d,g,S,v,w,_)=>{const M=()=>{if(c.isMounted){let{next:P,bu:N,u:V,parent:q,vnode:Q}=c;{const De=Ao(c);if(De){P&&(P.el=Q.el,Z(c,P,_)),De.asyncDep.then(()=>{c.isUnmounted||M()});return}}let ee=P,Se;Hn(c,!1),P?(P.el=Q.el,Z(c,P,_)):P=Q,N&&Vt(N),(Se=P.props&&P.props.onVnodeBeforeUpdate)&&nn(Se,q,P,Q),Hn(c,!0);const ue=$i(c),Ne=c.subTree;c.subTree=ue,B(Ne,ue,p(Ne.el),Un(Ne),c,v,w),P.el=ue.el,ee===null&&Al(c,ue.el),V&&Ke(V,v),(Se=P.props&&P.props.onVnodeUpdated)&&Ke(()=>nn(Se,q,P,Q),v)}else{let P;const{el:N,props:V}=d,{bm:q,m:Q,parent:ee,root:Se,type:ue}=c,Ne=gt(d);Hn(c,!1),q&&Vt(q),!Ne&&(P=V&&V.onVnodeBeforeMount)&&nn(P,ee,d),Hn(c,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(ue);const De=c.subTree=$i(c);B(null,De,g,S,c,v,w),d.el=De.el}if(Q&&Ke(Q,v),!Ne&&(P=V&&V.onVnodeMounted)){const De=d;Ke(()=>nn(P,ee,De),v)}(d.shapeFlag&256||ee&&gt(ee.vnode)&&ee.vnode.shapeFlag&256)&&c.a&&Ke(c.a,v),c.isMounted=!0,d=g=S=null}};c.scope.on();const k=c.effect=new Br(M);c.scope.off();const y=c.update=k.run.bind(k),O=c.job=k.runIfDirty.bind(k);O.i=c,O.id=c.uid,k.scheduler=()=>gi(O),Hn(c,!0),y()},Z=(c,d,g)=>{d.component=c;const S=c.vnode.props;c.vnode=d,c.next=null,Rl(c,d.props,S,g),Nl(c,d.children,g),pn(),Oi(c),gn()},J=(c,d,g,S,v,w,_,M,k=!1)=>{const y=c&&c.children,O=c?c.shapeFlag:0,P=d.children,{patchFlag:N,shapeFlag:V}=d;if(N>0){if(N&128){Le(y,P,g,S,v,w,_,M,k);return}else if(N&256){He(y,P,g,S,v,w,_,M,k);return}}V&8?(O&16&&Qe(y,v,w),P!==y&&u(g,P)):O&16?V&16?Le(y,P,g,S,v,w,_,M,k):Qe(y,v,w,!0):(O&8&&u(g,""),V&16&&Y(P,g,S,v,w,_,M,k))},He=(c,d,g,S,v,w,_,M,k)=>{c=c||Qn,d=d||Qn;const y=c.length,O=d.length,P=Math.min(y,O);let N;for(N=0;N<P;N++){const V=d[N]=k?_n(d[N]):sn(d[N]);B(c[N],V,g,null,v,w,_,M,k)}y>O?Qe(c,v,w,!0,!1,P):Y(d,g,S,v,w,_,M,k,P)},Le=(c,d,g,S,v,w,_,M,k)=>{let y=0;const O=d.length;let P=c.length-1,N=O-1;for(;y<=P&&y<=N;){const V=c[y],q=d[y]=k?_n(d[y]):sn(d[y]);if(Bn(V,q))B(V,q,g,null,v,w,_,M,k);else break;y++}for(;y<=P&&y<=N;){const V=c[P],q=d[N]=k?_n(d[N]):sn(d[N]);if(Bn(V,q))B(V,q,g,null,v,w,_,M,k);else break;P--,N--}if(y>P){if(y<=N){const V=N+1,q=V<O?d[V].el:S;for(;y<=N;)B(null,d[y]=k?_n(d[y]):sn(d[y]),g,q,v,w,_,M,k),y++}}else if(y>N)for(;y<=P;)be(c[y],v,w,!0),y++;else{const V=y,q=y,Q=new Map;for(y=q;y<=N;y++){const ze=d[y]=k?_n(d[y]):sn(d[y]);ze.key!=null&&Q.set(ze.key,y)}let ee,Se=0;const ue=N-q+1;let Ne=!1,De=0;const Pn=new Array(ue);for(y=0;y<ue;y++)Pn[y]=0;for(y=V;y<=P;y++){const ze=c[y];if(Se>=ue){be(ze,v,w,!0);continue}let Ve;if(ze.key!=null)Ve=Q.get(ze.key);else for(ee=q;ee<=N;ee++)if(Pn[ee-q]===0&&Bn(ze,d[ee])){Ve=ee;break}Ve===void 0?be(ze,v,w,!0):(Pn[Ve-q]=y+1,Ve>=De?De=Ve:Ne=!0,B(ze,d[Ve],g,null,v,w,_,M,k),Se++)}const Pt=Ne?Dl(Pn):Qn;for(ee=Pt.length-1,y=ue-1;y>=0;y--){const ze=q+y,Ve=d[ze],Rt=d[ze+1],It=ze+1<O?Rt.el||Rt.placeholder:S;Pn[y]===0?B(null,Ve,g,It,v,w,_,M,k):Ne&&(ee<0||y!==Pt[ee]?ye(Ve,g,It,2):ee--)}}},ye=(c,d,g,S,v=null)=>{const{el:w,type:_,transition:M,children:k,shapeFlag:y}=c;if(y&6){ye(c.component.subTree,d,g,S);return}if(y&128){c.suspense.move(d,g,S);return}if(y&64){_.move(c,d,g,An);return}if(_===Be){s(w,d,g);for(let P=0;P<k.length;P++)ye(k[P],d,g,S);s(c.anchor,d,g);return}if(_===Ps){j(c,d,g);return}if(S!==2&&y&1&&M)if(S===0)M.beforeEnter(w),s(w,d,g),Ke(()=>M.enter(w),v);else{const{leave:P,delayLeave:N,afterLeave:V}=M,q=()=>{c.ctx.isUnmounted?i(w):s(w,d,g)},Q=()=>{w._isLeaving&&w[hn](!0),P(w,()=>{q(),V&&V()})};N?N(w,q,Q):Q()}else s(w,d,g)},be=(c,d,g,S=!1,v=!1)=>{const{type:w,props:_,ref:M,children:k,dynamicChildren:y,shapeFlag:O,patchFlag:P,dirs:N,cacheIndex:V}=c;if(P===-2&&(v=!1),M!=null&&(pn(),pt(M,null,g,c,!0),gn()),V!=null&&(d.renderCache[V]=void 0),O&256){d.ctx.deactivate(c);return}const q=O&1&&N,Q=!gt(c);let ee;if(Q&&(ee=_&&_.onVnodeBeforeUnmount)&&nn(ee,d,c),O&6)$n(c.component,g,S);else{if(O&128){c.suspense.unmount(g,S);return}q&&Fn(c,null,d,"beforeUnmount"),O&64?c.type.remove(c,d,g,An,S):y&&!y.hasOnce&&(w!==Be||P>0&&P&64)?Qe(y,d,g,!1,!0):(w===Be&&P&384||!v&&O&16)&&Qe(k,d,g),S&&zn(c)}(Q&&(ee=_&&_.onVnodeUnmounted)||q)&&Ke(()=>{ee&&nn(ee,d,c),q&&Fn(c,null,d,"unmounted")},g)},zn=c=>{const{type:d,el:g,anchor:S,transition:v}=c;if(d===Be){Gn(g,S);return}if(d===Ps){F(c);return}const w=()=>{i(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:_,delayLeave:M}=v,k=()=>_(g,w);M?M(c.el,w,k):k()}else w()},Gn=(c,d)=>{let g;for(;c!==d;)g=C(c),i(c),c=g;i(d)},$n=(c,d,g)=>{const{bum:S,scope:v,job:w,subTree:_,um:M,m:k,a:y}=c;qi(k),qi(y),S&&Vt(S),v.stop(),w&&(w.flags|=8,be(_,c,d,g)),M&&Ke(M,d),Ke(()=>{c.isUnmounted=!0},d)},Qe=(c,d,g,S=!1,v=!1,w=0)=>{for(let _=w;_<c.length;_++)be(c[_],d,g,S,v)},Un=c=>{if(c.shapeFlag&6)return Un(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const d=C(c.anchor||c.el),g=d&&d[Za];return g?C(g):d};let Jn=!1;const yn=(c,d,g)=>{c==null?d._vnode&&be(d._vnode,null,null,!0):B(d._vnode||null,c,d,null,null,null,g),d._vnode=c,Jn||(Jn=!0,Oi(),so(),Jn=!1)},An={p:B,um:be,m:ye,r:zn,mt:te,mc:Y,pc:J,pbc:I,n:Un,o:e};return{render:yn,hydrate:void 0,createApp:wl(yn)}}function As({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Hn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Bl(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function zo(e,n,t=!1){const s=e.children,i=n.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=_n(i[r]),a.el=o.el),!t&&a.patchFlag!==-2&&zo(o,a)),a.type===vs&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ie&&!a.el&&(a.el=o.el)}}function Dl(e){const n=e.slice(),t=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const f=e[s];if(f!==0){if(i=t[t.length-1],e[i]<f){n[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,e[t[a]]<f?r=a+1:o=a;f<e[t[r]]&&(r>0&&(n[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function Ao(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ao(n)}function qi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Po=e=>e.__isSuspense;function Kl(e,n){n&&n.pendingBranch?W(e)?n.effects.push(...e):n.effects.push(e):Ya(e)}const Be=Symbol.for("v-fgt"),vs=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),vt=[];let je=null;function fe(e=!1){vt.push(je=e?null:[])}function jl(){vt.pop(),je=vt[vt.length-1]||null}let _t=1;function ts(e,n=!1){_t+=e,e<0&&je&&n&&(je.hasOnce=!0)}function Ro(e){return e.dynamicChildren=_t>0?je||Qn:null,jl(),_t>0&&je&&je.push(e),e}function pe(e,n,t,s,i,r){return Ro(L(e,n,t,s,i,r,!0))}function Vl(e,n,t,s,i){return Ro(xe(e,n,t,s,i,!0))}function ss(e){return e?e.__v_isVNode===!0:!1}function Bn(e,n){return e.type===n.type&&e.key===n.key}const Io=({key:e})=>e??null,$t=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||Me(e)||$(e)?{i:Ue,r:e,k:n,f:!!t}:e:null);function L(e,n=null,t=null,s=0,i=null,r=e===Be?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Io(n),ref:n&&$t(n),scopeId:ro,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return a?(yi(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=we(t)?8:16),_t>0&&!o&&je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&je.push(l),l}const xe=Gl;function Gl(e,n=null,t=null,s=0,i=null,r=!1){if((!e||e===hl)&&(e=Ie),ss(e)){const a=Ln(e,n,!0);return t&&yi(a,t),_t>0&&!r&&je&&(a.shapeFlag&6?je[je.indexOf(e)]=a:je.push(a)),a.patchFlag=-2,a}if(tc(e)&&(e=e.__vccOpts),n){n=$l(n);let{class:a,style:l}=n;a&&!we(a)&&(n.class=nt(a)),ce(l)&&(pi(l)&&!W(l)&&(l=Te({},l)),n.style=ai(l))}const o=we(e)?1:Po(e)?128:oo(e)?64:ce(e)?4:$(e)?2:0;return L(e,n,t,s,i,o,r,!0)}function $l(e){return e?pi(e)||Co(e)?Te({},e):e:null}function Ln(e,n,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=e,f=n?Jl(i||{},n):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Io(f),ref:n&&n.ref?t&&r?W(r)?r.concat($t(n)):[r,$t(n)]:$t(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Be?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ln(e.ssContent),ssFallback:e.ssFallback&&Ln(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&St(u,l.clone(u)),u}function Ul(e=" ",n=0){return xe(vs,null,e,n)}function qe(e="",n=!1){return n?(fe(),Vl(Ie,null,e)):xe(Ie,null,e)}function sn(e){return e==null||typeof e=="boolean"?xe(Ie):W(e)?xe(Be,null,e.slice()):ss(e)?_n(e):xe(vs,null,String(e))}function _n(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ln(e)}function yi(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(W(n))t=16;else if(typeof n=="object")if(s&65){const i=n.default;i&&(i._c&&(i._d=!1),yi(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Co(n)?n._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else $(n)?(n={default:n,_ctx:Ue},t=32):(n=String(n),s&64?(t=16,n=[Ul(n)]):t=8);e.children=n,e.shapeFlag|=t}function Jl(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const i in s)if(i==="class")n.class!==s.class&&(n.class=nt([n.class,s.class]));else if(i==="style")n.style=ai([n.style,s.style]);else if(as(i)){const r=n[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(n[i]=r?[].concat(r,o):o)}else i!==""&&(n[i]=s[i])}return n}function nn(e,n,t,s=null){Ze(e,n,7,[t,s])}const ql=vo();let Xl=0;function Yl(e,n,t){const s=e.type,i=(n?n.appContext:e.appContext)||ql,r={uid:Xl++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ya(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eo(s,i),emitsOptions:ko(s,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=El.bind(null,r),e.ce&&e.ce(r),r}let Fe=null;const Fo=()=>Fe||Ue;let is,Zs;{const e=cs(),n=(t,s)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};is=n("__VUE_INSTANCE_SETTERS__",t=>Fe=t),Zs=n("__VUE_SSR_SETTERS__",t=>Ct=t)}const zt=e=>{const n=Fe;return is(e),e.scope.on(),()=>{e.scope.off(),is(n)}},Xi=()=>{Fe&&Fe.scope.off(),is(null)};function Ho(e){return e.vnode.shapeFlag&4}let Ct=!1;function Zl(e,n=!1,t=!1){n&&Zs(n);const{props:s,children:i}=e.vnode,r=Ho(e);Pl(e,s,r,n),Hl(e,i,t||n);const o=r?Ql(e,n):void 0;return n&&Zs(!1),o}function Ql(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,fl);const{setup:s}=t;if(s){pn();const i=e.setupContext=s.length>1?nc(e):null,r=zt(e),o=Lt(s,e,0,[e.props,i]),a=Ar(o);if(gn(),r(),(a||e.sp)&&!gt(e)&&fo(e),a){if(o.then(Xi,Xi),n)return o.then(l=>{Yi(e,l)}).catch(l=>{hs(l,e,0)});e.asyncDep=o}else Yi(e,o)}else No(e)}function Yi(e,n,t){$(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ce(n)&&(e.setupState=eo(n)),No(e)}function No(e,n,t){const s=e.type;e.render||(e.render=s.render||rn);{const i=zt(e);pn();try{ml(e)}finally{gn(),i()}}}const ec={get(e,n){return Ee(e,"get",""),e[n]}};function nc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,ec),slots:e.slots,emit:e.emit,expose:n}}function ys(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(eo(Ba(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in bt)return bt[t](e)},has(n,t){return t in n||t in bt}})):e.proxy}function tc(e){return $(e)&&"__vccOpts"in e}const X=(e,n)=>$a(e,n,Ct);function sc(e,n,t){try{ts(-1);const s=arguments.length;return s===2?ce(n)&&!W(n)?ss(n)?xe(e,null,[n]):xe(e,n):xe(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ss(t)&&(t=[t]),xe(e,n,t))}finally{ts(1)}}const ic="3.5.25";let Qs;const Zi=typeof window<"u"&&window.trustedTypes;if(Zi)try{Qs=Zi.createPolicy("vue",{createHTML:e=>e})}catch{}const Oo=Qs?e=>Qs.createHTML(e):e=>e,rc="http://www.w3.org/2000/svg",oc="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,Qi=dn&&dn.createElement("template"),ac={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const i=n==="svg"?dn.createElementNS(rc,e):n==="mathml"?dn.createElementNS(oc,e):t?dn.createElement(e,{is:t}):dn.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>dn.createTextNode(e),createComment:e=>dn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>dn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,i,r){const o=t?t.previousSibling:n.lastChild;if(i&&(i===r||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Qi.innerHTML=Oo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Qi.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},wn="transition",ct="animation",Tt=Symbol("_vtc"),Wo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lc=Te({},ao,Wo),cc=e=>(e.displayName="Transition",e.props=lc,e),er=cc((e,{slots:n})=>sc(nl,uc(e),n)),Nn=(e,n=[])=>{W(e)?e.forEach(t=>t(...n)):e&&e(...n)},nr=e=>e?W(e)?e.some(n=>n.length>1):e.length>1:!1;function uc(e){const n={};for(const x in e)x in Wo||(n[x]=e[x]);if(e.css===!1)return n;const{name:t="v",type:s,duration:i,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:f=o,appearToClass:u=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:C=`${t}-leave-active`,leaveToClass:T=`${t}-leave-to`}=e,R=dc(i),B=R&&R[0],ae=R&&R[1],{onBeforeEnter:H,onEnter:z,onEnterCancelled:j,onLeave:F,onLeaveCancelled:U,onBeforeAppear:he=H,onAppear:ne=z,onAppearCancelled:Y=j}=n,A=(x,G,te,ge)=>{x._enterCancelled=ge,On(x,G?u:a),On(x,G?f:o),te&&te()},I=(x,G)=>{x._isLeaving=!1,On(x,p),On(x,T),On(x,C),G&&G()},D=x=>(G,te)=>{const ge=x?ne:z,se=()=>A(G,x,te);Nn(ge,[G,se]),tr(()=>{On(G,x?l:r),un(G,x?u:a),nr(ge)||sr(G,s,B,se)})};return Te(n,{onBeforeEnter(x){Nn(H,[x]),un(x,r),un(x,o)},onBeforeAppear(x){Nn(he,[x]),un(x,l),un(x,f)},onEnter:D(!1),onAppear:D(!0),onLeave(x,G){x._isLeaving=!0;const te=()=>I(x,G);un(x,p),x._enterCancelled?(un(x,C),or(x)):(or(x),un(x,C)),tr(()=>{x._isLeaving&&(On(x,p),un(x,T),nr(F)||sr(x,s,ae,te))}),Nn(F,[x,te])},onEnterCancelled(x){A(x,!1,void 0,!0),Nn(j,[x])},onAppearCancelled(x){A(x,!0,void 0,!0),Nn(Y,[x])},onLeaveCancelled(x){I(x),Nn(U,[x])}})}function dc(e){if(e==null)return null;if(ce(e))return[Rs(e.enter),Rs(e.leave)];{const n=Rs(e);return[n,n]}}function Rs(e){return da(e)}function un(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Tt]||(e[Tt]=new Set)).add(n)}function On(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[Tt];t&&(t.delete(n),t.size||(e[Tt]=void 0))}function tr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let hc=0;function sr(e,n,t,s){const i=e._endId=++hc,r=()=>{i===e._endId&&s()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=fc(e,n);if(!o)return s();const f=o+"end";let u=0;const p=()=>{e.removeEventListener(f,C),r()},C=T=>{T.target===e&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},a+1),e.addEventListener(f,C)}function fc(e,n){const t=window.getComputedStyle(e),s=R=>(t[R]||"").split(", "),i=s(`${wn}Delay`),r=s(`${wn}Duration`),o=ir(i,r),a=s(`${ct}Delay`),l=s(`${ct}Duration`),f=ir(a,l);let u=null,p=0,C=0;n===wn?o>0&&(u=wn,p=o,C=r.length):n===ct?f>0&&(u=ct,p=f,C=l.length):(p=Math.max(o,f),u=p>0?o>f?wn:ct:null,C=u?u===wn?r.length:l.length:0);const T=u===wn&&/\b(?:transform|all)(?:,|$)/.test(s(`${wn}Property`).toString());return{type:u,timeout:p,propCount:C,hasTransform:T}}function ir(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>rr(t)+rr(e[s])))}function rr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function or(e){return(e?e.ownerDocument:document).body.offsetHeight}function mc(e,n,t){const s=e[Tt];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const ar=Symbol("_vod"),pc=Symbol("_vsh"),gc=Symbol(""),bc=/(?:^|;)\s*display\s*:/;function vc(e,n,t){const s=e.style,i=we(t);let r=!1;if(t&&!i){if(n)if(we(n))for(const o of n.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ut(s,a,"")}else for(const o in n)t[o]==null&&Ut(s,o,"");for(const o in t)o==="display"&&(r=!0),Ut(s,o,t[o])}else if(i){if(n!==t){const o=s[gc];o&&(t+=";"+o),s.cssText=t,r=bc.test(t)}}else n&&e.removeAttribute("style");ar in e&&(e[ar]=r?s.display:"",e[pc]&&(s.display="none"))}const lr=/\s*!important$/;function Ut(e,n,t){if(W(t))t.forEach(s=>Ut(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=yc(e,n);lr.test(t)?e.setProperty(Vn(s),t.replace(lr,""),"important"):e[s]=t}}const cr=["Webkit","Moz","ms"],Is={};function yc(e,n){const t=Is[n];if(t)return t;let s=Mn(n);if(s!=="filter"&&s in e)return Is[n]=s;s=Ir(s);for(let i=0;i<cr.length;i++){const r=cr[i]+s;if(r in e)return Is[n]=r}return n}const ur="http://www.w3.org/1999/xlink";function dr(e,n,t,s,i,r=ba(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(ur,n.slice(6,n.length)):e.setAttributeNS(ur,n,t):t==null||r&&!Nr(t)?e.removeAttribute(n):e.setAttribute(n,r?"":on(t)?String(t):t)}function hr(e,n,t,s,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Oo(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Nr(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(i||n)}function wi(e,n,t,s){e.addEventListener(n,t,s)}function wc(e,n,t,s){e.removeEventListener(n,t,s)}const fr=Symbol("_vei");function kc(e,n,t,s,i=null){const r=e[fr]||(e[fr]={}),o=r[n];if(s&&o)o.value=s;else{const[a,l]=Sc(n);if(s){const f=r[n]=Tc(s,i);wi(e,a,f,l)}else o&&(wc(e,a,o,l),r[n]=void 0)}}const mr=/(?:Once|Passive|Capture)$/;function Sc(e){let n;if(mr.test(e)){n={};let s;for(;s=e.match(mr);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vn(e.slice(2)),n]}let Fs=0;const _c=Promise.resolve(),Cc=()=>Fs||(_c.then(()=>Fs=0),Fs=Date.now());function Tc(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Ze(Ec(s,t.value),n,5,[s])};return t.value=e,t.attached=Cc(),t}function Ec(e,n){if(W(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>i=>!i._stopped&&s&&s(i))}else return n}const pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xc=(e,n,t,s,i,r)=>{const o=i==="svg";n==="class"?mc(e,s,o):n==="style"?vc(e,t,s):as(n)?ii(n)||kc(e,n,t,s,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Mc(e,n,s,o))?(hr(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&dr(e,n,s,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!we(s))?hr(e,Mn(n),s,r,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),dr(e,n,s,o))};function Mc(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&pr(n)&&$(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return pr(n)&&we(t)?!1:n in e}const rs=e=>{const n=e.props["onUpdate:modelValue"]||!1;return W(n)?t=>Vt(n,t):n},it=Symbol("_assign"),Lc={deep:!0,created(e,n,t){e[it]=rs(t),wi(e,"change",()=>{const s=e._modelValue,i=Et(e),r=e.checked,o=e[it];if(W(s)){const a=li(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const f=[...s];f.splice(a,1),o(f)}}else if(ot(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Bo(e,r))})},mounted:gr,beforeUpdate(e,n,t){e[it]=rs(t),gr(e,n,t)}};function gr(e,{value:n,oldValue:t},s){e._modelValue=n;let i;if(W(n))i=li(n,s.props.value)>-1;else if(ot(n))i=n.has(s.props.value);else{if(n===t)return;i=Mt(n,Bo(e,!0))}e.checked!==i&&(e.checked=i)}const zc={deep:!0,created(e,{value:n,modifiers:{number:t}},s){const i=ot(n);wi(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?Hr(Et(o)):Et(o));e[it](e.multiple?i?new Set(r):r:r[0]),e._assigning=!0,Zt(()=>{e._assigning=!1})}),e[it]=rs(s)},mounted(e,{value:n}){br(e,n)},beforeUpdate(e,n,t){e[it]=rs(t)},updated(e,{value:n}){e._assigning||br(e,n)}};function br(e,n){const t=e.multiple,s=W(n);if(!(t&&!s&&!ot(n))){for(let i=0,r=e.options.length;i<r;i++){const o=e.options[i],a=Et(o);if(t)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=n.some(f=>String(f)===String(a)):o.selected=li(n,a)>-1}else o.selected=n.has(a);else if(Mt(Et(o),n)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Et(e){return"_value"in e?e._value:e.value}function Bo(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Ac=["ctrl","shift","alt","meta"],Pc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Ac.some(t=>e[`${t}Key`]&&!n.includes(t))},Rc=(e,n)=>{const t=e._withMods||(e._withMods={}),s=n.join(".");return t[s]||(t[s]=((i,...r)=>{for(let o=0;o<n.length;o++){const a=Pc[n[o]];if(a&&a(i,n))return}return e(i,...r)}))},Ic=Te({patchProp:xc},ac);let vr;function Fc(){return vr||(vr=Ol(Ic))}const Hc=((...e)=>{const n=Fc().createApp(...e),{mount:t}=n;return n.mount=s=>{const i=Oc(s);if(!i)return;const r=n._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,Nc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},n});function Nc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Oc(e){return we(e)?document.querySelector(e):e}const Wc="/favicon.png",Bc="/images/about_music_logo.png",Dc="/images/dk3-min.jpg",Kc="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",at=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Dmitri Shostakovich",birth:1906,death:1975}],jc={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/stravinsky.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function Do(e){return jc[e]||null}function Vc(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function Gc(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],i=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-i),a=n.slice(0,n.length-i).map(f=>f.trim()).filter(Boolean).map(f=>f[0]?f[0].toUpperCase()+".":"").filter(Boolean).join(" "),l=r.join(" ");return a?`${a} ${l}`:l}const At=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let ei=At.reduce((e,n)=>(e[n.id]=n.label,e),{});const yr=Math.min(...at.map(e=>e.birth)),$c=Math.max(...at.map(e=>e.birth));let ni=[...at],Cn=null,Tn=null;const Uc={r:255,g:255,b:255},Jc={r:37,g:99,b:235};dt("#f3f4f6"),Sr(1750),dt("#e6eef8"),Sr(1820),dt("#e8f4ff"),dt("#eef2f7");const os=1677.5,Jt=1980,Ko=Jt-os,qc=6,Xc=2,Yc=0,qt={barHeight:50,widthScale:1,fontScale:1},Yn={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let En={...qt};function Hs(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function wr(e={}){En={barHeight:Hs(e.barHeight??En.barHeight??qt.barHeight,Yn.barHeight.min,Yn.barHeight.max),widthScale:Hs(e.widthScale??En.widthScale??qt.widthScale,Yn.widthScale.min,Yn.widthScale.max),fontScale:Hs(e.fontScale??En.fontScale??qt.fontScale,Yn.fontScale.min,Yn.fontScale.max)}}function Zc(){return qc*En.widthScale}function Bt(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=Ko*Zc()+Yc,s=(n.clientWidth||window.innerWidth)*Xc*En.widthScale,i=Math.max(t,s);e.style.width=i+"px",e.style.minWidth=i+"px"}function Dn(e){return(e-os)/Ko*100}function jo(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function dt(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(i=>i+i).join(""):n,s=parseInt(t,16);return{r:s>>16&255,g:s>>8&255,b:s&255}}function Ns({r:e,g:n,b:t}){const s=i=>Math.round(i).toString(16).padStart(2,"0");return`#${s(e)}${s(n)}${s(t)}`}function kr(e,n,t){const s=jo(t);return{r:e.r+(n.r-e.r)*s,g:e.g+(n.g-e.g)*s,b:e.b+(n.b-e.b)*s}}function Sr(e){const n=$c-yr;return n<=0?0:jo((e-yr)/n)}const Qc={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function ki(e){return Qc[e]||"#f3f4f6"}function eu(e){return e?ei[e]||At.find(n=>n.id===e)?.label||e:""}function _r(e={}){!e||typeof e!="object"||(ei={...ei,...e})}function nu(e){const n=At.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function tu(e,n){const t=Number(e),s=Number(n),i=nu(t);if(!Number.isFinite(t)||!Number.isFinite(s)||s<=t)return i;const r=s-t;let o=null,a=0;return At.forEach(l=>{const f=Math.max(0,Math.min(s,l.to)-Math.max(t,l.from));f>a&&(a=f,o=l.id)}),o&&a>r/2?o:i}function su(e){const n=ki(e),t=dt(n),s=kr(t,Uc,.12),i=kr(t,Jc,.04);return`linear-gradient(145deg, ${Ns(s)} 0%, ${Ns(t)} 58%, ${Ns(i)} 100%)`}function Cr(e){Array.isArray(e)?ni=[...e]:ni=[...at]}function Si(){const e=document.getElementById("gantt");if(!e)return;const n=s=>Number.isInteger(Cn)&&s===Cn,t=s=>Number.isInteger(Tn)&&s===Tn;e.querySelectorAll(".bar").forEach(s=>{const i=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",n(i)),s.classList.toggle("bar--hovered",t(i))}),e.querySelectorAll(".bar-connector").forEach(s=>{const i=Number(s.getAttribute("data-lane-index")),r=n(i),o=t(i);s.classList.toggle("bar-connector--selected",r),s.classList.toggle("bar-connector--hover",o)})}function Vo(e){Number.isInteger(e)?Cn=e:Cn=null,Si()}function ti(e){Number.isInteger(e)?Tn=e:Tn=null,Si()}function Tr(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(os/10)*10,t=Math.ceil(Jt/10)*10;At.forEach(s=>{const i=Math.max(s.from,os),r=Math.min(s.to,Jt);if(r<=i)return;const o=document.createElement("div");o.className="era-band",o.style.left=Dn(i)+"%",o.style.width=Dn(r)-Dn(i)+"%",o.style.backgroundImage="none",o.style.backgroundColor=ki(s.id),o.textContent=eu(s.id)||s.label,s.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===Jt&&(o.style.borderRight="none"),e.appendChild(o)});for(let s=n;s<=t;s+=10){const i=document.createElement("div"),r=s%50===0;i.className="axis-tick "+(r?"major":"minor"),i.style.left=Dn(s)+"%",e.appendChild(i);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=Dn(s)+"%",o.textContent=s,e.appendChild(o)}}function Os(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="";const s=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,i=document.createDocumentFragment(),r=ni||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const o=[...r].sort((T,R)=>T.birth-R.birth),a=o.length,l=o.map((T,R)=>({composer:T,laneIndex:R}));Number.isInteger(Cn)&&(Cn<0||Cn>=a)&&(Cn=null),Number.isInteger(Tn)&&(Tn<0||Tn>=a)&&(Tn=null);const f=2,u=En.barHeight,p=u+f,C=a*u+Math.max(0,a-1)*f;e.style.height=C+"px",a&&(l.forEach(({composer:T,laneIndex:R})=>{const B=T.displayName||T.name,ae=Dn(T.birth),H=Dn(T.death),z=document.createElement("div");z.className="bar",z.setAttribute("data-lane-index",R),z.setAttribute("data-name",T.name);const j=tu(T.birth,T.death);z.style.backgroundImage=su(j),z.style.backgroundColor=ki(j);const F=ae,U=H-ae,ne=R*p+u*.5+s,Y=(D,x)=>{const G=document.createElement("div");G.className="bar-connector",G.setAttribute("data-lane-index",R),G.setAttribute("data-side",x),G.style.left=D+"%",G.style.top=-s+"px",G.style.height=ne+"px",i.appendChild(G)};Y(F,"start"),Y(F+U,"end"),z.style.left=F+"%",z.style.width=U+"%",z.style.top=R*p+"px",z.style.height=u+"px",z.style.lineHeight=u+"px",z.style.fontSize=u*.25*En.fontScale+"px";const A=Do(T.name);if(A){const D=document.createElement("img");D.className="bar-avatar";const x=Math.max(10,Math.round(u*.9));D.style.width=x+"px",D.style.height=x+"px",D.src=A,D.alt=B||T.name,z.appendChild(D)}const I=document.createElement("span");I.className="bar-label",I.textContent=B,z.appendChild(I),e.appendChild(z),z.addEventListener("click",D=>{D.stopPropagation(),Vo(R),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:T,laneIndex:R}}))}),z.addEventListener("mouseenter",()=>ti(R)),z.addEventListener("mouseleave",()=>ti(null)),I.scrollWidth>I.clientWidth&&(I.textContent=Gc(B),I.scrollWidth>I.clientWidth&&(I.textContent=Vc(B)))}),e.appendChild(i),Si())}function iu(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const s=4;let i=0,r=0,o=0,a=0,l=0,f=0,u=null;const p=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},C=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true")},T=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",p())};function R(){if(u=null,!n||!t)return;const A=l-i,I=f-r;e.scrollLeft=o-A,e.scrollTop=a-I}const B=A=>{A.button===0&&(n=!0,t=!1,e.classList.remove("panning"),i=A.clientX,r=A.clientY,l=A.clientX,f=A.clientY,o=e.scrollLeft,a=e.scrollTop,A.preventDefault())},ae=A=>{if(n){if(l=A.clientX,f=A.clientY,!t){const I=Math.abs(l-i),D=Math.abs(f-r);if(I>s||D>s)C();else return}u===null&&(u=window.requestAnimationFrame(R)),A.preventDefault()}},H=()=>{n&&(n=!1,T(),u!==null&&(cancelAnimationFrame(u),u=null))};e.addEventListener("mousedown",B),window.addEventListener("mousemove",ae),window.addEventListener("mouseup",H);let z=null,j=!1,F=0,U=0;const he=A=>{if(z!==null||A.touches.length!==1)return;const I=A.touches[0];z=I.identifier,j=!1,i=I.clientX,r=I.clientY,l=I.clientX,f=I.clientY,F=e.scrollLeft,U=e.scrollTop,T()},ne=A=>{if(z===null)return;const I=Array.from(A.touches).find(G=>G.identifier===z);if(!I)return;l=I.clientX,f=I.clientY;const D=l-i,x=f-r;if(!j)if(Math.abs(D)>s||Math.abs(x)>s)j=!0,C();else return;e.scrollLeft=F-D,e.scrollTop=U-x,A.preventDefault()},Y=A=>{z===null||!Array.from(A.changedTouches).some(D=>D.identifier===z)||(z=null,j=!1,T())};e.addEventListener("touchstart",he,{passive:!0}),e.addEventListener("touchmove",ne,{passive:!1}),e.addEventListener("touchend",Y,{passive:!0}),e.addEventListener("touchcancel",Y,{passive:!0})}function ru(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};let s=e.scrollLeft,i=!1,r=null,o=null;const a=.5,l=5,f=()=>{o!==null&&(clearTimeout(o),o=null)},u=()=>{r!==null&&(clearTimeout(r),r=null)},p=(H,z)=>{u();const j=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;i=!0,e.scrollTo&&!j?(e.scrollTo({left:H,top:z,behavior:"smooth"}),r=setTimeout(()=>{i=!1,r=null},320)):(e.scrollLeft=H,e.scrollTop=z,i=!1)},C=H=>{f(),o=setTimeout(()=>{o=null,B(H)},90)},T=(H,z,j)=>{const F=H.getBoundingClientRect();return F.bottom>z&&F.top<j},R=H=>Number(H.getAttribute("data-lane-index"))||0,B=H=>{const z=Array.from(n.querySelectorAll(".bar"));if(!z.length)return;const j=e.getBoundingClientRect(),U=(t?.getBoundingClientRect()?.bottom??j.top)+1,he=j.bottom,ne=z.find(D=>T(D,U,he));if(!ne)return;const Y=e.scrollLeft;Y+e.clientWidth;const A=R(ne),I=z.reduce((D,x)=>{const G=R(x);if(!D)return x;const te=R(D);return G<te?x:D},null)||ne;if(H==="right"){if(!(ne.offsetLeft<Y-l))return;let x=z.find(se=>R(se)>A&&se.offsetLeft>=Y-a&&T(se,U,he))||null;if(x||(x=z.reduce((se,Z)=>R(Z)<=A?se:se?Z.offsetLeft>se.offsetLeft?Z:se:Z,null)),!x)return;const G=x.getBoundingClientRect(),te=U+1,ge=G.top-te;Math.abs(ge)>a&&p(e.scrollLeft,e.scrollTop+ge);return}if(H==="left"){const x=ne.getBoundingClientRect().right>j.right+a,G=Y<=a;let te=null;const ge=z.filter(ye=>R(ye)>=A?!1:ye.offsetLeft>=Y-a);if(!G&&!x&&!ge.length||(G?te=I:ge.length&&(te=ge.reduce((ye,be)=>{if(!ye)return be;const zn=R(be),Gn=R(ye);if(zn>Gn)return be;if(zn===Gn){const $n=Math.abs(be.offsetLeft-Y),Qe=Math.abs(ye.offsetLeft-Y);return $n<Qe?be:ye}return ye},null)),te||(te=I),!te))return;const se=te.getBoundingClientRect(),Z=U+1,J=se.top-Z,He=Math.max(0,te.offsetLeft),Le=He-e.scrollLeft;(Math.abs(J)>a||Math.abs(Le)>a)&&p(Math.abs(Le)>a?He:e.scrollLeft,Math.abs(J)>a?e.scrollTop+J:e.scrollTop)}},ae=()=>{if(i)return;const H=e.scrollLeft,z=H>s+a,j=H<s-a;z?C("right"):j&&C("left"),H<=a&&C("left"),s=H};return e.addEventListener("scroll",ae,{passive:!0}),()=>{e.removeEventListener("scroll",ae),f(),u()}}function Er(e,{left:n=0,top:t=0}){const s=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(e.scrollTo&&!s){e.scrollTo({left:n,top:t,behavior:"smooth"});return}e.scrollLeft=n,e.scrollTop=t}function ou(e={}){wr(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:at;Cr(n),_r(e.eraLabels||{}),Bt(),Tr(),Os(),iu();const t=ru(),s=()=>Bt();window.addEventListener("resize",s);const i=document.getElementById("timeline");i&&(i.style.visibility="visible");function r(){const a=document.getElementById("timeline");a&&Er(a,{left:0,top:0})}function o(){const a=document.getElementById("timeline");a&&Er(a,{left:Math.max(0,a.scrollWidth-a.clientWidth),top:Math.max(0,a.scrollHeight-a.clientHeight)})}return{goToStart:r,goToEnd:o,setComposers(a){Cr(a),Os()},updateSettings(a){wr(a||{}),Bt(),Os()},updateEraLabels(a){_r(a||{}),Bt(),Tr()},setSelectedLane:Vo,setHoveredLane:ti,destroy(){window.removeEventListener("resize",s),t()}}}const Go=(e,n)=>{const t=e.__vccOpts||e;for(const[s,i]of n)t[s]=i;return t},au={class:"timeline-wrapper"},lu={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const s=i=>{const r=i.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),a=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(a)?null:a}}))};return ps(()=>{const i=document.getElementById("timeline");i&&i.addEventListener("click",s),t=ou({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),gs(()=>{const i=document.getElementById("timeline");i&&i.removeEventListener("click",s),t?.destroy?.(),t=null}),$e(()=>n.composers,i=>{t&&t.setComposers(i)},{deep:!0}),$e(()=>n.settings,i=>{!t||!t.updateSettings||t.updateSettings(i)},{deep:!0}),$e(()=>n.eraLabels,i=>{!t||!t.updateEraLabels||t.updateEraLabels(i)},{deep:!0}),(i,r)=>(fe(),pe("div",au,[...r[0]||(r[0]=[L("div",{id:"timeline"},[L("div",{class:"timeline-inner"},[L("div",{id:"axis",class:"axis"}),L("div",{id:"gantt"})])],-1)])]))}},cu=Go(lu,[["__scopeId","data-v-095e97d5"]]),uu=`# Composer fact sheets

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
- Influence: Later composers felt they had to respond to Beethoven in some way – either continue his path or react against it.


## Ludwig van Beethoven essentials (ru) {#ludwig-van-beethoven}

- Кто он был: Немецкий композитор и пианист, который соединил классицизм и романтизм и радикально расширил возможности симфоний и сонат.
- Глухой композитор: Он начал терять слух в конце двадцатых, но написал многие из величайших произведений, будучи почти или полностью глухим.
- Вехи: Третья («Eroica»), Пятая и Девятая симфонии, поздние струнные квартеты и 32 фортепианные сонаты изменили историю западной музыки.
- Героический образ: Его музыка часто звучит как борьба от тьмы к свету - так сформировался современный образ независимого, «страдающего» художника.
- Влияние: Поздним композиторам приходилось так или иначе отвечать на Бетховена - продолжать его путь или сознательно отталкиваться от него.

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
- Einfluss: Spaetere Komponisten sahen sich gezwungen, irgendwie auf Beethoven zu reagieren - entweder seinen Weg fortzusetzen oder sich bewusst davon abzusetzen.

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
`,du={class:"app"},hu={class:"topbar"},fu={class:"language-switcher"},mu={class:"visually-hidden",for:"language-select"},pu=["aria-label"],gu=["value"],bu={class:"menu-nav"},vu={class:"content"},yu={key:0},wu={class:"filter-dock"},ku={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},Su={key:0,class:"nav-controls",role:"group","aria-label":"Timeline navigation"},_u=["disabled"],Cu=["disabled"],Tu={key:1,class:"scale-controls",role:"group","aria-label":"Adjust timeline size"},Eu=["disabled"],xu=["disabled"],Mu=["aria-expanded"],Lu={key:0,id:"filter-panel",class:"filter-panel",role:"dialog","aria-label":"Composer filters"},zu={class:"filter-panel__options"},Au=["onUpdate:modelValue","aria-label"],Pu={class:"filter-panel__label"},Ru={class:"filter-panel__actions"},Iu={key:1,class:"about"},Fu={class:"about__card"},Hu={class:"about__title"},Nu={class:"about__text"},Ou={class:"about__text"},Wu={class:"about__author"},Bu={class:"about__author-body"},Du={class:"about__author-label"},Ku={class:"about__author-name"},ju={class:"about__contributors"},Vu={class:"about__contributors-title"},Gu={class:"about__contributors-list"},$u={class:"about__contributors-name"},Uu=["href"],Ju={class:"composer-modal__content"},qu={class:"composer-modal__header"},Xu={class:"composer-modal__titles"},Yu={class:"composer-modal__name"},Zu={key:0,class:"composer-modal__dates"},Qu={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},ed=["disabled"],nd={class:"composer-modal__position"},td=["disabled"],sd={class:"composer-modal__body"},id={key:0,class:"composer-modal__hero"},rd=["src","alt"],od={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},ad=["disabled"],ld={class:"composer-modal__position"},cd=["disabled"],ud={class:"composer-modal__hero-meta"},dd={class:"composer-modal__name-small"},hd={key:0,class:"composer-modal__dates-small"},fd={class:"composer-modal__playlist"},md={class:"composer-modal__playlist-header"},pd={class:"composer-modal__playlist-title"},gd={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},bd=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],vd={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},yd={class:"composer-modal__description"},wd={key:0,class:"composer-modal__facts-title"},kd={key:1,class:"composer-modal__facts"},Sd={class:"composer-modal__fact-text"},_d={key:2,class:"composer-modal__muted"},Dt=25,xr=150,Ws=.2,Mr=1.5,Cd=.35,Bs=1.7,Lr=.95,Td=.6,Kt=2,jt=6,Ed={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended Classics"},apply:"Apply"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Шибанова",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить"}}},t=Object.keys(n),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},i=cn("en"),r=X(()=>n[i.value]||n.en),o=X(()=>t.map(h=>({value:h,label:n[h]?.label||h.toUpperCase()}))),a=X(()=>r.value.appTitle),l=X(()=>r.value.languageLabel||"Language"),f=X(()=>r.value.navigation||n.en.navigation),u=X(()=>r.value.about||n.en.about),p=X(()=>u.value.contributors||n.en.about.contributors||[]),C=X(()=>r.value.eras||n.en.eras),T=X(()=>r.value.composers||{}),R=X(()=>{const h=T.value.names||{},m={};return Object.entries(h).forEach(([b,E])=>{m[ue(b)]=E}),m}),B=X(()=>{const h={};return Object.entries(w||{}).forEach(([m,b])=>{const E=ue(m),K=b?.[i.value];if(K){h[E]=K;return}i.value==="en"&&b?.en&&(h[E]=b.en)}),h}),ae=X(()=>({...B.value,...R.value})),H=X(()=>r.value.filter||n.en.filter),z=X(()=>({essentials:H.value.groups?.essentials||"Essential Icons",core:H.value.groups?.core||"Core Classics",expanded:H.value.groups?.expanded||"Extended Classics"})),j=X(()=>H.value.apply||"Apply"),F=X(()=>{const h=T.value.descriptions||{},m={};return Object.entries(h).forEach(([b,E])=>{m[ue(b)]=E}),m}),U=X(()=>{const h=T.value.factsTitles||{},m={};return Object.entries(h).forEach(([b,E])=>{m[ue(b)]=E}),m}),he=X(()=>r.value.modal||n.en.modal),ne=cn(!1),Y=cn("composers"),A=[30,40,50,70,100],I="".replace(/\/$/,""),x="https://soundcloud.com/dmitry-kotikov/sets/",G="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",te=new Set;function ge(h,m,b){return Number.isNaN(h)?m:Math.min(b,Math.max(m,h))}function se(h){const m=ge((h-Dt)/(xr-Dt),0,1),b=Math.pow(m,Cd),E=Ws+(Mr-Ws)*b;return ge(E,Ws,Mr)}function Z(h){const m=ge((h-Dt)/(xr-Dt),0,1),b=Math.pow(m,Td),E=Bs-(Bs-Lr)*b;return ge(E,Lr,Bs)}const J=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich"]}],He=cn(J.reduce((h,m)=>(h[m.id]=!0,h),{})),Le=cn(!1),ye=ds({barHeight:A[Kt],widthScale:se(A[Kt]),fontScale:Z(A[Kt])}),be=cn(Kt),zn=X(()=>be.value<=0),Gn=X(()=>be.value>=A.length-1),$n=cn(!0),Qe=cn(!1);function Un(h){const m=ge(h,0,A.length-1);be.value=m;const b=A[m];ye.barHeight=b,ye.widthScale=se(b),ye.fontScale=Z(b)}function Jn(h){const m=h>0?1:-1;Un(be.value+m)}function yn(){const h=document.getElementById("timeline");if(!h)return;const m=Math.max(0,h.scrollWidth-h.clientWidth),b=Math.max(0,h.scrollHeight-h.clientHeight);$n.value=h.scrollLeft<=jt&&h.scrollTop<=jt,Qe.value=h.scrollLeft>=m-jt&&h.scrollTop>=b-jt}function An(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),yn()}function _i(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),yn()}const c=X(()=>{const h=J.map(b=>b.id).filter(b=>He.value[b]),m=new Set;return h.forEach(b=>{J.find(K=>K.id===b)?.composers?.forEach(K=>m.add(K))}),m}),d=X(()=>{const h=c.value;return h.size?at.filter(m=>h.has(m.name)):[]}),g=X(()=>[...d.value].sort((h,m)=>h.birth-m.birth).map(h=>({...h,displayName:Ne(h.name)}))),{descriptionsByLocale:S,playlistIdsByKey:v,namesByLocale:w}=Pn(uu),_=cn(null),M=X(()=>_.value!==null),k=X(()=>_.value===null?null:g.value[_.value]),y=X(()=>k.value?Ne(k.value.name):""),O=X(()=>k.value?Do(k.value.name):null),P=X(()=>k.value?Pt(k.value.name):""),N=X(()=>k.value?ze(k.value.name):""),V=X(()=>k.value?Uo(k.value.name):[]),q=X(()=>V.value.map(h=>Zo(h)).filter(Boolean)),Q=X(()=>{const h=q.value.filter(Boolean);return h.length?h:[G]}),ee=X(()=>(_.value??0)>0),Se=X(()=>_.value!==null&&_.value<g.value.length-1);function ue(h){return h.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Ne(h){const m=ue(h);return ae.value[m]||h}function De(h){return z.value[h]||h}function Pn(h){const m=h.split(`
`),b={},E={},K={};let ie=null,ve=null,en=null,Oe="en",ke=[];const Rn=()=>{(ie||ve)&&[ie,ve].filter(Boolean).forEach(Ae=>{b[Ae]=b[Ae]||{},b[Ae][Oe]=ke.join(`
`).trim(),en&&(K[Ae]=en)}),ke=[],en=null,ve=null};for(const _e of m){const Ae=_e.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Ae){Rn();const[,Ce,In,an]=Ae;ie=ue(an||Ce),ve=ue(Ce),Oe=(In||"en").toLowerCase(),en=an||null;continue}const qn=ie?_e.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(qn){const[,Ce,In]=qn,an=(Ce||Oe||"en").toLowerCase(),oa=In.trim();[ie,ve].filter(Boolean).forEach(_s=>{E[_s]=E[_s]||{},E[_s][an]=oa});continue}ie&&_e.startsWith("- ")&&ke.push(_e.replace(/^- /,"").trim())}return Rn(),{descriptionsByLocale:b,playlistIdsByKey:K,namesByLocale:E}}function Pt(h){const m=Rt(h),b=ue(h),E=F.value[b];if(E)return E;const K=m[i.value];return K||(m.en?m.en:Object.values(m)[0]||"")}function ze(h){const m=U.value[ue(h)];return m||$o(h)}function Ve(h,m){const b=ue(m);if(h[b])return h[b];const E=b.split(" ").filter(Boolean),K=E[E.length-1];return K&&h[K]?h[K]:""}function Rt(h){const m=ue(h),b=m.split(" ").filter(Boolean),E=[m],K=b[b.length-1];K&&K!==m&&E.push(K);for(const ie of E)if(S[ie])return S[ie];return{}}function It(h){return ue(h).replace(/\s+/g,"-").replace(/-+/g,"-")}function $o(h){const m=s[i.value]||s.en,b=i.value==="ru"?Ne(h):"";if(i.value==="ru"&&b)return`${b} - ${m}`;const E=String(h||"").trim().split(/\s+/).filter(Boolean);if(!E.length)return"";const K=E[E.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(K)&&E.length>=2?E[E.length-2]:K} ${m}`}function Uo(h){const m=[],b=It(h);b&&!m.includes(b)&&m.push(b);const E=Ve(v,h);return E&&!m.includes(E)&&m.push(E),m}function ws(h=window.location.pathname){Y.value=h==="/about"?"about":"composers"}const Ci=()=>ws();function Ti(h){window.location.pathname!==h&&(history.pushState({},"",h),ws(h)),ne.value=!1}function Ei(h){Ti(h==="about"?"/about":"/")}function Jo(){ne.value=!ne.value}function qo(){ne.value=!1}function Xo(){Le.value=!Le.value}function Yo(){Le.value=!1}function xi(){Ti("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function ks(h){const m=h.detail,b=m?.laneIndex;if(Number.isInteger(b)&&g.value[b]){_.value=b;return}const E=m?.composer?.name;if(!E)return;const K=g.value.findIndex(ie=>ie.name===E);K>=0&&(_.value=K)}function Mi(){_.value=null}function Li(){!ee.value||_.value===null||(_.value-=1)}function zi(){!Se.value||_.value===null||(_.value+=1)}ps(()=>{const h=(()=>{try{return localStorage.getItem("timeline-language")}catch{return null}})();h&&t.includes(h)?i.value=h:navigator.language&&navigator.language.toLowerCase().startsWith("de")?i.value="de":navigator.language&&navigator.language.toLowerCase().startsWith("ru")&&(i.value="ru"),ws(),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(ks),window.addEventListener("popstate",Ci),window.addEventListener("composer-select",ks);const m=document.getElementById("timeline");m&&(m.addEventListener("scroll",yn,{passive:!0}),yn())}),gs(()=>{window.removeEventListener("popstate",Ci),window.removeEventListener("composer-select",ks);const h=document.getElementById("timeline");h&&h.removeEventListener("scroll",yn)}),$e(a,h=>{h&&(document.title=h)},{immediate:!0}),$e(i,h=>{const m=t.includes(h)?h:"en";if(m!==h){i.value=m;return}try{localStorage.setItem("timeline-language",m)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(C.value)}),$e(M,async h=>{h?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await Zt(),Q.value.length&&Pi()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",Ai())}),$e(_,h=>{const m=window.timeline;!m||typeof m.setSelectedLane!="function"||(Number.isInteger(h)?m.setSelectedLane(h):m.setSelectedLane(null))}),$e(Q,async h=>{M.value&&(Ai(),await Zt(),h.length&&Pi())}),$e(()=>g.value.map(h=>h.name),h=>{if(_.value===null)return;const m=k.value;if(!m){_.value=null;return}const b=h.findIndex(E=>E===m.name);b===-1?_.value=null:_.value=b});function Ss(h){return h?I?I.endsWith("/")&&h.startsWith("/")?I+h.slice(1):!I.endsWith("/")&&!h.startsWith("/")?`${I}/${h}`:I+h:h:I}function Zo(h){if(!h)return"";const m=x;if(!m)return"";const b=m.endsWith("/");return`${m}${b?"":"/"}${h}`}function Ai(){te.forEach(h=>{try{h.pause(),h.currentTime=0}catch(m){console.error("Failed to stop SoundCloud audio",m)}}),te.clear()}function Pi(h,m=document){const E=(m||document).querySelectorAll("[data-soundcloud-playlist]");E.length&&(E.length,E.forEach(K=>{Qo(K,()=>{})}))}async function Qo(h,m){const b=()=>{typeof m=="function"&&setTimeout(()=>m(),0)};if(!h||h.dataset.soundcloudReady==="true"||h.dataset.soundcloudReady==="loading"||h.dataset.soundcloudReady==="error"){b();return}const E=h.getAttribute("data-soundcloud-playlist"),K=h.getAttribute("data-soundcloud-playlist-alt")||"",ie=[E,...K.split("|")].map(Oe=>(Oe||"").trim()).filter(Boolean);if(!ie.length){b();return}h.dataset.soundcloudReady="loading",h.innerHTML='<div class="sc-player__status">Loading tracks from SoundCloud...</div>';let ve=null;for(const Oe of ie)try{const ke=await na(Oe),Rn=Array.isArray(ke.tracks)&&ke.tracks.length?ke.tracks:ke&&ke.kind==="track"?[ke]:[],_e=ta(Rn);ra(h,_e,Oe),b();return}catch(ke){if(ve=ke,ke&&ke.status===429){Ri(h,Oe),b();return}}console.error("Failed to build SoundCloud player",ve);const en=ie[0]||G;Ri(h,en),b()}async function ea(h){if(!h)throw new Error("No track provided");const m=h.media&&Array.isArray(h.media.transcodings)?h.media.transcodings:[];if(m.length){let b=m.find(E=>E&&E.format&&E.format.protocol==="progressive");if(b||(b=m[0]),b&&b.url)try{const E=await sa(b.url,h.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:h.id,transcodingUrl:b.url,finalUrl:E}),E}catch(E){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",E)}}if(!h.id)throw new Error("No track id provided");return ia(h.id,h.track_authorization)}async function na(h){const m=Ss("/api/soundcloud/playlist")+`?url=${encodeURIComponent(h)}`,b=await fetch(m);if(!b.ok){const E=new Error(`SoundCloud playlist error: ${b.status}`);throw E.status=b.status,E.retryAfter=Number(b.headers?.get("Retry-After"))||void 0,E}return b.json()}function ta(h=[]){return Array.isArray(h)?h.map((m,b)=>{if(!m)return null;const E=`Track ${b+1}`,ie=[m.title,m.publisher_metadata?.release_title,m.permalink,m.permalink_url,m.id?String(m.id):null].map(ve=>typeof ve=="string"?ve.trim():"").filter(Boolean)[0]||E;return{...m,title:ie}}).filter(Boolean):[]}async function sa(h,m){const b=Ss("/api/soundcloud/transcoding")+`?url=${encodeURIComponent(h)}${m?`&track_authorization=${encodeURIComponent(m)}`:""}`,E=await fetch(b);if(!E.ok){const ie=new Error(`SoundCloud transcoding error: ${E.status}`);throw ie.status=E.status,ie.retryAfter=Number(E.headers?.get("Retry-After"))||void 0,ie}const K=await E.json();if(!K?.url)throw new Error("Transcoding response missing url");return K.url}async function ia(h,m){const b=Ss(`/api/soundcloud/streams/${h}`)+(m?`?track_authorization=${encodeURIComponent(m)}`:""),E=await fetch(b);if(!E.ok){const ie=new Error(`SoundCloud stream error: ${E.status}`);throw ie.status=E.status,ie.retryAfter=Number(E.headers?.get("Retry-After"))||void 0,ie}const K=await E.json();if(!K?.url)throw new Error("Stream response missing url");return K.url}function Ri(h,m){const b=`https://w.soundcloud.com/player/?url=${encodeURIComponent(m)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;h.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${b}"
    ></iframe>
  `,h.dataset.soundcloudReady="true"}function ra(h,m,b){if(!Array.isArray(m)||!m.length){h.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',h.dataset.soundcloudReady="error";return}h.classList.add("sc-player");const E=document.createElement("div");E.className="sc-track-list";const K=document.createElement("audio");K.preload="none",te.add(K);let ie=null,ve=null,en=!1;const Oe=(_e,Ae)=>{_e.dataset.state=Ae,_e.textContent=Ae==="playing"?"⏸":Ae==="loading"?"...":"▶"},ke=_e=>Oe(_e,"idle"),Rn=()=>{ve&&ke(ve),ie=null,ve=null};K.addEventListener("ended",Rn),K.addEventListener("pause",()=>{ve&&K.currentTime<(K.duration||1/0)&&ke(ve)}),m.forEach((_e,Ae)=>{const qn=document.createElement("div");qn.className="sc-track";const Ce=document.createElement("button");Ce.type="button",Ce.className="sc-track__button",Ce.setAttribute("aria-label","Play track"),Oe(Ce,"idle");const In=document.createElement("div");In.className="sc-track__title",In.textContent=_e?.title||`Track ${Ae+1}`,qn.append(Ce,In),E.append(qn),Ce.addEventListener("click",async()=>{if(!en){if(ie===(_e?.id??Ae)&&!K.paused){K.pause(),ke(Ce);return}en=!0,Oe(Ce,"loading");try{const an=await ea(_e);if(!an)throw new Error("No stream URL returned");K.src=an,await K.play(),ve&&ve!==Ce&&ke(ve),ve=Ce,ie=_e?.id??Ae,Oe(Ce,"playing")}catch(an){console.error("Failed to play SoundCloud track",an),ke(Ce),h.dataset.soundcloudReady="error"}finally{en=!1}}})}),h.innerHTML="",h.append(E,K),h.dataset.soundcloudReady="true"}return(h,m)=>(fe(),pe("div",du,[L("header",hu,[L("button",{class:"menu-button",onClick:Jo,"aria-label":"Toggle navigation menu"},[...m[5]||(m[5]=[L("span",{class:"menu-icon"},null,-1)])]),L("img",{class:"logo",src:Wc,alt:"Logo",onClick:xi}),L("div",{class:"app-title",role:"button",onClick:xi},le(a.value),1),L("div",fu,[L("label",mu,le(l.value),1),Wi(L("select",{id:"language-select",class:"language-select","onUpdate:modelValue":m[0]||(m[0]=b=>i.value=b),"aria-label":l.value},[(fe(!0),pe(Be,null,Wt(o.value,b=>(fe(),pe("option",{key:b.value,value:b.value},le(b.label),9,gu))),128))],8,pu),[[zc,i.value]])])]),L("aside",{class:nt(["side-menu",{"side-menu--open":ne.value}])},[L("nav",bu,[L("button",{class:nt(["menu-item",{"menu-item--active":Y.value==="composers"}]),onClick:m[1]||(m[1]=b=>Ei("composers"))},le(f.value.composers),3),L("button",{class:nt(["menu-item",{"menu-item--active":Y.value==="about"}]),onClick:m[2]||(m[2]=b=>Ei("about"))},le(f.value.about),3)])],2),ne.value?(fe(),pe("div",{key:0,class:"backdrop",onClick:qo})):qe("",!0),L("main",vu,[Y.value==="composers"?(fe(),pe("section",yu,[L("div",wu,[L("div",ku,[Le.value?qe("",!0):(fe(),pe("div",Su,[L("button",{type:"button",class:"control-btn",disabled:$n.value,onClick:An,"aria-label":"Jump to start of timeline"}," ⇤ ",8,_u),L("button",{type:"button",class:"control-btn",disabled:Qe.value,onClick:_i,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Cu)])),Le.value?qe("",!0):(fe(),pe("div",Tu,[L("button",{type:"button",class:"control-btn",disabled:zn.value,onClick:m[3]||(m[3]=b=>Jn(-1)),"aria-label":"Make timeline blocks smaller"}," − ",8,Eu),L("button",{type:"button",class:"control-btn",disabled:Gn.value,onClick:m[4]||(m[4]=b=>Jn(1)),"aria-label":"Make timeline blocks larger"}," + ",8,xu)])),L("button",{class:"filter-dock__toggle control-btn control-primary","aria-expanded":Le.value,"aria-controls":"filter-panel",onClick:Xo,"aria-label":"Filter composers"},[...m[6]||(m[6]=[L("svg",{class:"filter-icon",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[L("path",{d:"M3 5h18l-7 8v5l-4 2v-7L3 5z"})],-1)])],8,Mu),xe(er,{name:"fade"},{default:$s(()=>[Le.value?(fe(),pe("div",Lu,[L("div",zu,[(fe(),pe(Be,null,Wt(J,b=>L("label",{key:b.id,class:"filter-panel__item"},[Wi(L("input",{"onUpdate:modelValue":E=>He.value[b.id]=E,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${De(b.id)}`},null,8,Au),[[Lc,He.value[b.id]]]),L("span",Pu,le(De(b.id)),1)])),64))]),L("div",Ru,[L("button",{type:"button",class:"filter-panel__ok control-btn",onClick:Yo,"aria-label":"Close filters"},le(j.value),1)])])):qe("",!0)]),_:1})])]),xe(cu,{composers:g.value,settings:ye,"era-labels":C.value},null,8,["composers","settings","era-labels"])])):Y.value==="about"?(fe(),pe("section",Iu,[L("div",Fu,[m[10]||(m[10]=L("img",{class:"about__logo",src:Bc,alt:"Music logo",loading:"lazy"},null,-1)),L("h1",Hu,le(u.value.title),1),L("p",Nu,le(u.value.intro),1),L("p",Ou,le(u.value.goal),1),L("div",Wu,[m[9]||(m[9]=L("img",{class:"about__photo",src:Dc,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),L("div",Bu,[L("div",Du,le(u.value.authorLabel),1),L("div",Ku,le(u.value.authorName),1),m[7]||(m[7]=L("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),m[8]||(m[8]=L("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),L("div",ju,[L("div",Vu,le(u.value.contributorsTitle),1),L("ul",Gu,[(fe(!0),pe(Be,null,Wt(p.value,b=>(fe(),pe("li",{key:b.url,class:"about__contributors-item"},[L("span",$u,le(b.name),1),L("a",{class:"about__contributors-link",href:b.url,target:"_blank",rel:"noreferrer"},le(b.linkText),9,Uu)]))),128))])])])])):qe("",!0)]),xe(er,{name:"fade"},{default:$s(()=>[M.value?(fe(),pe("div",{key:0,class:"composer-modal",onClick:Rc(Mi,["self"])},[L("div",Ju,[L("header",qu,[L("div",Xu,[L("h2",Yu,le(y.value),1),k.value?(fe(),pe("p",Zu,le(k.value.birth)+" — "+le(k.value.death),1)):qe("",!0)]),L("div",Qu,[L("button",{class:"composer-modal__arrow",onClick:Li,disabled:!ee.value,"aria-label":"Previous"}," ← ",8,ed),L("span",nd,le((_.value??0)+1)+" / "+le(g.value.length),1),L("button",{class:"composer-modal__arrow",onClick:zi,disabled:!Se.value,"aria-label":"Next"}," → ",8,td)]),L("button",{class:"composer-modal__close",onClick:Mi,"aria-label":"Close composer details"},"×")]),L("div",sd,[O.value?(fe(),pe("div",id,[L("img",{class:"composer-modal__photo",src:O.value,alt:y.value},null,8,rd),L("div",od,[L("button",{class:"composer-modal__arrow",onClick:Li,disabled:!ee.value,"aria-label":"Previous"}," ← ",8,ad),L("span",ld,le((_.value??0)+1)+" / "+le(g.value.length),1),L("button",{class:"composer-modal__arrow",onClick:zi,disabled:!Se.value,"aria-label":"Next"}," → ",8,cd)]),L("div",ud,[L("div",dd,le(y.value),1),k.value?(fe(),pe("div",hd,le(k.value.birth)+" — "+le(k.value.death),1)):qe("",!0)])])):qe("",!0),L("div",fd,[L("div",md,[L("div",pd,le(he.value.keyWorks),1),Q.value.length?(fe(),pe("a",gd,[...m[11]||(m[11]=[L("img",{class:"sc-powered__img",src:Kc,alt:"Powered by SoundCloud"},null,-1)])])):qe("",!0)]),Q.value.length?(fe(),pe("div",{key:Q.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":Q.value[0],"data-soundcloud-playlist-alt":Q.value.slice(1).join("|")},[...m[12]||(m[12]=[L("div",{class:"sc-player__status"},"Loading tracks...",-1)])],8,bd)):(fe(),pe("div",vd," Playlist will appear here soon. "))]),L("div",yd,[N.value?(fe(),pe("div",wd,le(N.value),1)):qe("",!0),P.value?(fe(),pe("ul",kd,[(fe(!0),pe(Be,null,Wt(P.value.split(`
`),(b,E)=>(fe(),pe("li",{key:E},[L("span",Sd,le(b),1)]))),128))])):(fe(),pe("p",_d,"No description yet."))])])])])):qe("",!0)]),_:1})]))}},xd=Go(Ed,[["__scopeId","data-v-0b036fdd"]]);Hc(xd).mount("#app");
