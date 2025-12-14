(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function si(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const de={},Xn=[],on=()=>{},zr=()=>!1,as=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ii=e=>e.startsWith("onUpdate:"),Te=Object.assign,ri=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},oa=Object.prototype.hasOwnProperty,ae=(e,n)=>oa.call(e,n),j=Array.isArray,Yn=e=>Et(e)==="[object Map]",st=e=>Et(e)==="[object Set]",Ii=e=>Et(e)==="[object Date]",J=e=>typeof e=="function",ge=e=>typeof e=="string",an=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",Ar=e=>(ue(e)||J(e))&&J(e.then)&&J(e.catch),Pr=Object.prototype.toString,Et=e=>Pr.call(e),aa=e=>Et(e).slice(8,-1),Rr=e=>Et(e)==="[object Object]",oi=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dt=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ls=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},la=/-\w/g,Ln=ls(e=>e.replace(la,n=>n.slice(1).toUpperCase())),ca=/\B([A-Z])/g,Gn=ls(e=>e.replace(ca,"-$1").toLowerCase()),Ir=ls(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cs=ls(e=>e?`on${Ir(e)}`:""),Mn=(e,n)=>!Object.is(e,n),Vt=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Fr=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},Hr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},ua=e=>{const n=ge(e)?Number(e):NaN;return isNaN(n)?e:n};let Fi;const cs=()=>Fi||(Fi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ai(e){if(j(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],i=ge(s)?ma(s):ai(s);if(i)for(const r in i)n[r]=i[r]}return n}else if(ge(e)||ue(e))return e}const da=/;(?![^(]*\))/g,fa=/:([^]+)/,ha=/\/\*[^]*?\*\//g;function ma(e){const n={};return e.replace(ha,"").split(da).forEach(t=>{if(t){const s=t.split(fa);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function Zn(e){let n="";if(ge(e))n=e;else if(j(e))for(let t=0;t<e.length;t++){const s=Zn(e[t]);s&&(n+=s+" ")}else if(ue(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const pa="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ga=si(pa);function Nr(e){return!!e||e===""}function ba(e,n){if(e.length!==n.length)return!1;let t=!0;for(let s=0;t&&s<e.length;s++)t=xt(e[s],n[s]);return t}function xt(e,n){if(e===n)return!0;let t=Ii(e),s=Ii(n);if(t||s)return t&&s?e.getTime()===n.getTime():!1;if(t=an(e),s=an(n),t||s)return e===n;if(t=j(e),s=j(n),t||s)return t&&s?ba(e,n):!1;if(t=ue(e),s=ue(n),t||s){if(!t||!s)return!1;const i=Object.keys(e).length,r=Object.keys(n).length;if(i!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=n.hasOwnProperty(o);if(a&&!l||!a&&l||!xt(e[o],n[o]))return!1}}return String(e)===String(n)}function li(e,n){return e.findIndex(t=>xt(t,n))}const Or=e=>!!(e&&e.__v_isRef===!0),ce=e=>ge(e)?e:e==null?"":j(e)||ue(e)&&(e.toString===Pr||!J(e.toString))?Or(e)?ce(e.value):JSON.stringify(e,Wr,2):String(e),Wr=(e,n)=>Or(n)?Wr(e,n.value):Yn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,i],r)=>(t[Ts(s,r)+" =>"]=i,t),{})}:st(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Ts(t))}:an(n)?Ts(n):ue(n)&&!j(n)&&!Rr(n)?String(n):n,Ts=(e,n="")=>{var t;return an(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let Ne;class va{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!n&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Ne;try{return Ne=this,n()}finally{Ne=t}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function ya(){return Ne}let he;const Es=new WeakSet;class Br{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Es.has(this)&&(Es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kr(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hi(this),jr(this);const n=he,t=Xe;he=this,Xe=!0;try{return this.fn()}finally{Vr(this),he=n,Xe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)di(n);this.deps=this.depsTail=void 0,Hi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ds(this)&&this.run()}get dirty(){return Ds(this)}}let Dr=0,ft,ht;function Kr(e,n=!1){if(e.flags|=8,n){e.next=ht,ht=e;return}e.next=ft,ft=e}function ci(){Dr++}function ui(){if(--Dr>0)return;if(ht){let n=ht;for(ht=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;ft;){let n=ft;for(ft=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function jr(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Vr(e){let n,t=e.depsTail,s=t;for(;s;){const i=s.prevDep;s.version===-1?(s===t&&(t=i),di(s),wa(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=n,e.depsTail=t}function Ds(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Gr(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Gr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===vt)||(e.globalVersion=vt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ds(e))))return;e.flags|=2;const n=e.dep,t=he,s=Xe;he=e,Xe=!0;try{jr(e);const i=e.fn(e._value);(n.version===0||Mn(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{he=t,Xe=s,Vr(e),e.flags&=-3}}function di(e,n=!1){const{dep:t,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)di(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function wa(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Xe=!0;const $r=[];function gn(){$r.push(Xe),Xe=!1}function bn(){const e=$r.pop();Xe=e===void 0?!0:e}function Hi(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=he;he=void 0;try{n()}finally{he=t}}}let vt=0;class ka{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class fi{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!he||!Xe||he===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==he)t=this.activeLink=new ka(he,this),he.deps?(t.prevDep=he.depsTail,he.depsTail.nextDep=t,he.depsTail=t):he.deps=he.depsTail=t,Ur(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=he.depsTail,t.nextDep=void 0,he.depsTail.nextDep=t,he.depsTail=t,he.deps===t&&(he.deps=s)}return t}trigger(n){this.version++,vt++,this.notify(n)}notify(n){ci();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ui()}}}function Ur(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)Ur(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Ks=new WeakMap,jn=Symbol(""),js=Symbol(""),yt=Symbol("");function Ee(e,n,t){if(Xe&&he){let s=Ks.get(e);s||Ks.set(e,s=new Map);let i=s.get(t);i||(s.set(t,i=new fi),i.map=s,i.key=t),i.track()}}function mn(e,n,t,s,i,r){const o=Ks.get(e);if(!o){vt++;return}const a=l=>{l&&l.trigger()};if(ci(),n==="clear")o.forEach(a);else{const l=j(e),h=l&&oi(t);if(l&&t==="length"){const u=Number(s);o.forEach((p,S)=>{(S==="length"||S===yt||!an(S)&&S>=u)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),h&&a(o.get(yt)),n){case"add":l?h&&a(o.get("length")):(a(o.get(jn)),Yn(e)&&a(o.get(js)));break;case"delete":l||(a(o.get(jn)),Yn(e)&&a(o.get(js)));break;case"set":Yn(e)&&a(o.get(jn));break}}ui()}function Un(e){const n=ie(e);return n===e?n:(Ee(n,"iterate",yt),Je(e)?n:n.map(Ye))}function us(e){return Ee(e=ie(e),"iterate",yt),e}function Sn(e,n){return vn(e)?Vn(e)?tt(Ye(n)):tt(n):Ye(n)}const Sa={__proto__:null,[Symbol.iterator](){return xs(this,Symbol.iterator,e=>Sn(this,e))},concat(...e){return Un(this).concat(...e.map(n=>j(n)?Un(n):n))},entries(){return xs(this,"entries",e=>(e[1]=Sn(this,e[1]),e))},every(e,n){return cn(this,"every",e,n,void 0,arguments)},filter(e,n){return cn(this,"filter",e,n,t=>t.map(s=>Sn(this,s)),arguments)},find(e,n){return cn(this,"find",e,n,t=>Sn(this,t),arguments)},findIndex(e,n){return cn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return cn(this,"findLast",e,n,t=>Sn(this,t),arguments)},findLastIndex(e,n){return cn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return cn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Ms(this,"includes",e)},indexOf(...e){return Ms(this,"indexOf",e)},join(e){return Un(this).join(e)},lastIndexOf(...e){return Ms(this,"lastIndexOf",e)},map(e,n){return cn(this,"map",e,n,void 0,arguments)},pop(){return at(this,"pop")},push(...e){return at(this,"push",e)},reduce(e,...n){return Ni(this,"reduce",e,n)},reduceRight(e,...n){return Ni(this,"reduceRight",e,n)},shift(){return at(this,"shift")},some(e,n){return cn(this,"some",e,n,void 0,arguments)},splice(...e){return at(this,"splice",e)},toReversed(){return Un(this).toReversed()},toSorted(e){return Un(this).toSorted(e)},toSpliced(...e){return Un(this).toSpliced(...e)},unshift(...e){return at(this,"unshift",e)},values(){return xs(this,"values",e=>Sn(this,e))}};function xs(e,n,t){const s=us(e),i=s[n]();return s!==e&&!Je(e)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=t(r.value)),r}),i}const _a=Array.prototype;function cn(e,n,t,s,i,r){const o=us(e),a=o!==e&&!Je(e),l=o[n];if(l!==_a[n]){const p=l.apply(e,r);return a?Ye(p):p}let h=t;o!==e&&(a?h=function(p,S){return t.call(this,Sn(e,p),S,e)}:t.length>2&&(h=function(p,S){return t.call(this,p,S,e)}));const u=l.call(o,h,s);return a&&i?i(u):u}function Ni(e,n,t,s){const i=us(e);let r=t;return i!==e&&(Je(e)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,e)}):r=function(o,a,l){return t.call(this,o,Sn(e,a),l,e)}),i[n](r,...s)}function Ms(e,n,t){const s=ie(e);Ee(s,"iterate",yt);const i=s[n](...t);return(i===-1||i===!1)&&pi(t[0])?(t[0]=ie(t[0]),s[n](...t)):i}function at(e,n,t=[]){gn(),ci();const s=ie(e)[n].apply(e,t);return ui(),bn(),s}const Ca=si("__proto__,__v_isRef,__isVue"),Jr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(an));function Ta(e){an(e)||(e=String(e));const n=ie(this);return Ee(n,"has",e),n.hasOwnProperty(e)}class qr{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return r;if(t==="__v_raw")return s===(i?r?Fa:Qr:r?Zr:Yr).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const o=j(n);if(!i){let l;if(o&&(l=Sa[t]))return l;if(t==="hasOwnProperty")return Ta}const a=Reflect.get(n,t,Me(n)?n:s);if((an(t)?Jr.has(t):Ca(t))||(i||Ee(n,"get",t),r))return a;if(Me(a)){const l=o&&oi(t)?a:a.value;return i&&ue(l)?Gs(l):l}return ue(a)?i?Gs(a):ds(a):a}}class Xr extends qr{constructor(n=!1){super(!1,n)}set(n,t,s,i){let r=n[t];const o=j(n)&&oi(t);if(!this._isShallow){const h=vn(r);if(!Je(s)&&!vn(s)&&(r=ie(r),s=ie(s)),!o&&Me(r)&&!Me(s))return h||(r.value=s),!0}const a=o?Number(t)<n.length:ae(n,t),l=Reflect.set(n,t,s,Me(n)?n:i);return n===ie(i)&&(a?Mn(s,r)&&mn(n,"set",t,s):mn(n,"add",t,s)),l}deleteProperty(n,t){const s=ae(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&s&&mn(n,"delete",t,void 0),i}has(n,t){const s=Reflect.has(n,t);return(!an(t)||!Jr.has(t))&&Ee(n,"has",t),s}ownKeys(n){return Ee(n,"iterate",j(n)?"length":jn),Reflect.ownKeys(n)}}class Ea extends qr{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const xa=new Xr,Ma=new Ea,La=new Xr(!0);const Vs=e=>e,Ft=e=>Reflect.getPrototypeOf(e);function za(e,n,t){return function(...s){const i=this.__v_raw,r=ie(i),o=Yn(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,h=i[e](...s),u=t?Vs:n?tt:Ye;return!n&&Ee(r,"iterate",l?js:jn),{next(){const{value:p,done:S}=h.next();return S?{value:p,done:S}:{value:a?[u(p[0]),u(p[1])]:u(p),done:S}},[Symbol.iterator](){return this}}}}function Ht(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Aa(e,n){const t={get(i){const r=this.__v_raw,o=ie(r),a=ie(i);e||(Mn(i,a)&&Ee(o,"get",i),Ee(o,"get",a));const{has:l}=Ft(o),h=n?Vs:e?tt:Ye;if(l.call(o,i))return h(r.get(i));if(l.call(o,a))return h(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!e&&Ee(ie(i),"iterate",jn),i.size},has(i){const r=this.__v_raw,o=ie(r),a=ie(i);return e||(Mn(i,a)&&Ee(o,"has",i),Ee(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ie(a),h=n?Vs:e?tt:Ye;return!e&&Ee(l,"iterate",jn),a.forEach((u,p)=>i.call(r,h(u),h(p),o))}};return Te(t,e?{add:Ht("add"),set:Ht("set"),delete:Ht("delete"),clear:Ht("clear")}:{add(i){!n&&!Je(i)&&!vn(i)&&(i=ie(i));const r=ie(this);return Ft(r).has.call(r,i)||(r.add(i),mn(r,"add",i,i)),this},set(i,r){!n&&!Je(r)&&!vn(r)&&(r=ie(r));const o=ie(this),{has:a,get:l}=Ft(o);let h=a.call(o,i);h||(i=ie(i),h=a.call(o,i));const u=l.call(o,i);return o.set(i,r),h?Mn(r,u)&&mn(o,"set",i,r):mn(o,"add",i,r),this},delete(i){const r=ie(this),{has:o,get:a}=Ft(r);let l=o.call(r,i);l||(i=ie(i),l=o.call(r,i)),a&&a.call(r,i);const h=r.delete(i);return l&&mn(r,"delete",i,void 0),h},clear(){const i=ie(this),r=i.size!==0,o=i.clear();return r&&mn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=za(i,e,n)}),t}function hi(e,n){const t=Aa(e,n);return(s,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?s:Reflect.get(ae(t,i)&&i in s?t:s,i,r)}const Pa={get:hi(!1,!1)},Ra={get:hi(!1,!0)},Ia={get:hi(!0,!1)};const Yr=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,Fa=new WeakMap;function Ha(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Na(e){return e.__v_skip||!Object.isExtensible(e)?0:Ha(aa(e))}function ds(e){return vn(e)?e:mi(e,!1,xa,Pa,Yr)}function Oa(e){return mi(e,!1,La,Ra,Zr)}function Gs(e){return mi(e,!0,Ma,Ia,Qr)}function mi(e,n,t,s,i){if(!ue(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=Na(e);if(r===0)return e;const o=i.get(e);if(o)return o;const a=new Proxy(e,r===2?s:t);return i.set(e,a),a}function Vn(e){return vn(e)?Vn(e.__v_raw):!!(e&&e.__v_isReactive)}function vn(e){return!!(e&&e.__v_isReadonly)}function Je(e){return!!(e&&e.__v_isShallow)}function pi(e){return e?!!e.__v_raw:!1}function ie(e){const n=e&&e.__v_raw;return n?ie(n):e}function Wa(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&Fr(e,"__v_skip",!0),e}const Ye=e=>ue(e)?ds(e):e,tt=e=>ue(e)?Gs(e):e;function Me(e){return e?e.__v_isRef===!0:!1}function un(e){return Ba(e,!1)}function Ba(e,n){return Me(e)?e:new Da(e,n)}class Da{constructor(n,t){this.dep=new fi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ie(n),this._value=t?n:Ye(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||Je(n)||vn(n);n=s?n:ie(n),Mn(n,t)&&(this._rawValue=n,this._value=s?n:Ye(n),this.dep.trigger())}}function Ka(e){return Me(e)?e.value:e}const ja={get:(e,n,t)=>n==="__v_raw"?e:Ka(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const i=e[n];return Me(i)&&!Me(t)?(i.value=t,!0):Reflect.set(e,n,t,s)}};function eo(e){return Vn(e)?e:new Proxy(e,ja)}class Va{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new fi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=vt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return Kr(this,!0),!0}get value(){const n=this.dep.track();return Gr(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Ga(e,n,t=!1){let s,i;return J(e)?s=e:(s=e.get,i=e.set),new Va(s,i,t)}const Nt={},Xt=new WeakMap;let Bn;function $a(e,n=!1,t=Bn){if(t){let s=Xt.get(t);s||Xt.set(t,s=[]),s.push(e)}}function Ua(e,n,t=de){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=t,h=I=>i?I:Je(I)||i===!1||i===0?pn(I,1):pn(I);let u,p,S,C,z=!1,W=!1;if(Me(e)?(p=()=>e.value,z=Je(e)):Vn(e)?(p=()=>h(e),z=!0):j(e)?(W=!0,z=e.some(I=>Vn(I)||Je(I)),p=()=>e.map(I=>{if(Me(I))return I.value;if(Vn(I))return h(I);if(J(I))return l?l(I,2):I()})):J(e)?n?p=l?()=>l(e,2):e:p=()=>{if(S){gn();try{S()}finally{bn()}}const I=Bn;Bn=u;try{return l?l(e,3,[C]):e(C)}finally{Bn=I}}:p=on,n&&i){const I=p,$=i===!0?1/0:i;p=()=>pn(I(),$)}const le=ya(),F=()=>{u.stop(),le&&le.active&&ri(le.effects,u)};if(r&&n){const I=n;n=(...$)=>{I(...$),F()}}let A=W?new Array(e.length).fill(Nt):Nt;const V=I=>{if(!(!(u.flags&1)||!u.dirty&&!I))if(n){const $=u.run();if(i||z||(W?$.some((re,te)=>Mn(re,A[te])):Mn($,A))){S&&S();const re=Bn;Bn=u;try{const te=[$,A===Nt?void 0:W&&A[0]===Nt?[]:A,C];A=$,l?l(n,3,te):n(...te)}finally{Bn=re}}}else u.run()};return a&&a(V),u=new Br(p),u.scheduler=o?()=>o(V,!1):V,C=I=>$a(I,!1,u),S=u.onStop=()=>{const I=Xt.get(u);if(I){if(l)l(I,4);else for(const $ of I)$();Xt.delete(u)}},n?s?V(!0):A=u.run():o?o(V.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function pn(e,n=1/0,t){if(n<=0||!ue(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Me(e))pn(e.value,n,t);else if(j(e))for(let s=0;s<e.length;s++)pn(e[s],n,t);else if(st(e)||Yn(e))e.forEach(s=>{pn(s,n,t)});else if(Rr(e)){for(const s in e)pn(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&pn(e[s],n,t)}return e}function Mt(e,n,t,s){try{return s?e(...s):e()}catch(i){fs(i,n,t)}}function Ze(e,n,t,s){if(J(e)){const i=Mt(e,n,t,s);return i&&Ar(i)&&i.catch(r=>{fs(r,n,t)}),i}if(j(e)){const i=[];for(let r=0;r<e.length;r++)i.push(Ze(e[r],n,t,s));return i}}function fs(e,n,t,s=!0){const i=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||de;if(n){let a=n.parent;const l=n.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,h)===!1)return}a=a.parent}if(r){gn(),Mt(r,null,10,[e,l,h]),bn();return}}Ja(e,t,i,s,o)}function Ja(e,n,t,s=!0,i=!1){if(i)throw e;console.error(e)}const Re=[];let sn=-1;const Qn=[];let _n=null,qn=0;const no=Promise.resolve();let Yt=null;function Zt(e){const n=Yt||no;return e?n.then(this?e.bind(this):e):n}function qa(e){let n=sn+1,t=Re.length;for(;n<t;){const s=n+t>>>1,i=Re[s],r=wt(i);r<e||r===e&&i.flags&2?n=s+1:t=s}return n}function gi(e){if(!(e.flags&1)){const n=wt(e),t=Re[Re.length-1];!t||!(e.flags&2)&&n>=wt(t)?Re.push(e):Re.splice(qa(n),0,e),e.flags|=1,to()}}function to(){Yt||(Yt=no.then(io))}function Xa(e){j(e)?Qn.push(...e):_n&&e.id===-1?_n.splice(qn+1,0,e):e.flags&1||(Qn.push(e),e.flags|=1),to()}function Oi(e,n,t=sn+1){for(;t<Re.length;t++){const s=Re[t];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Re.splice(t,1),t--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function so(e){if(Qn.length){const n=[...new Set(Qn)].sort((t,s)=>wt(t)-wt(s));if(Qn.length=0,_n){_n.push(...n);return}for(_n=n,qn=0;qn<_n.length;qn++){const t=_n[qn];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_n=null,qn=0}}const wt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function io(e){try{for(sn=0;sn<Re.length;sn++){const n=Re[sn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Mt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;sn<Re.length;sn++){const n=Re[sn];n&&(n.flags&=-2)}sn=-1,Re.length=0,so(),Yt=null,(Re.length||Qn.length)&&io()}}let Ue=null,ro=null;function Qt(e){const n=Ue;return Ue=e,ro=e&&e.type.__scopeId||null,n}function $s(e,n=Ue,t){if(!n||e._n)return e;const s=(...i)=>{s._d&&ts(-1);const r=Qt(n);let o;try{o=e(...i)}finally{Qt(r),s._d&&ts(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Wi(e,n){if(Ue===null)return e;const t=ys(Ue),s=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[r,o,a,l=de]=n[i];r&&(J(r)&&(r={mounted:r,updated:r}),r.deep&&pn(o),s.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Hn(e,n,t,s){const i=e.dirs,r=n&&n.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(gn(),Ze(l,t,8,[e.el,a,e,n]),bn())}}const Ya=Symbol("_vte"),oo=e=>e.__isTeleport,hn=Symbol("_leaveCb"),Ot=Symbol("_enterCb");function Za(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ps(()=>{e.isMounted=!0}),gs(()=>{e.isUnmounting=!0}),e}const Ge=[Function,Array],ao={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ge,onEnter:Ge,onAfterEnter:Ge,onEnterCancelled:Ge,onBeforeLeave:Ge,onLeave:Ge,onAfterLeave:Ge,onLeaveCancelled:Ge,onBeforeAppear:Ge,onAppear:Ge,onAfterAppear:Ge,onAppearCancelled:Ge},lo=e=>{const n=e.subTree;return n.component?lo(n.component):n},Qa={name:"BaseTransition",props:ao,setup(e,{slots:n}){const t=Fo(),s=Za();return()=>{const i=n.default&&fo(n.default(),!0);if(!i||!i.length)return;const r=co(i),o=ie(e),{mode:a}=o;if(s.isLeaving)return Ls(r);const l=Bi(r);if(!l)return Ls(r);let h=Us(l,o,s,t,p=>h=p);l.type!==Ie&&kt(l,h);let u=t.subTree&&Bi(t.subTree);if(u&&u.type!==Ie&&!Dn(u,l)&&lo(t).type!==Ie){let p=Us(u,o,s,t);if(kt(u,p),a==="out-in"&&l.type!==Ie)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,u=void 0},Ls(r);a==="in-out"&&l.type!==Ie?p.delayLeave=(S,C,z)=>{const W=uo(s,u);W[String(u.key)]=u,S[hn]=()=>{C(),S[hn]=void 0,delete h.delayedLeave,u=void 0},h.delayedLeave=()=>{z(),delete h.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function co(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Ie){n=t;break}}return n}const el=Qa;function uo(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function Us(e,n,t,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:u,onEnterCancelled:p,onBeforeLeave:S,onLeave:C,onAfterLeave:z,onLeaveCancelled:W,onBeforeAppear:le,onAppear:F,onAfterAppear:A,onAppearCancelled:V}=n,I=String(e.key),$=uo(t,e),re=(R,H)=>{R&&Ze(R,s,9,H)},te=(R,H)=>{const K=H[1];re(R,H),j(R)?R.every(E=>E.length<=1)&&K():R.length<=1&&K()},Z={mode:o,persisted:a,beforeEnter(R){let H=l;if(!t.isMounted)if(r)H=le||l;else return;R[hn]&&R[hn](!0);const K=$[I];K&&Dn(e,K)&&K.el[hn]&&K.el[hn](),re(H,[R])},enter(R){let H=h,K=u,E=p;if(!t.isMounted)if(r)H=F||h,K=A||u,E=V||p;else return;let G=!1;const se=R[Ot]=ve=>{G||(G=!0,ve?re(E,[R]):re(K,[R]),Z.delayedLeave&&Z.delayedLeave(),R[Ot]=void 0)};H?te(H,[R,se]):se()},leave(R,H){const K=String(e.key);if(R[Ot]&&R[Ot](!0),t.isUnmounting)return H();re(S,[R]);let E=!1;const G=R[hn]=se=>{E||(E=!0,H(),se?re(W,[R]):re(z,[R]),R[hn]=void 0,$[K]===e&&delete $[K])};$[K]=e,C?te(C,[R,G]):G()},clone(R){const H=Us(R,n,t,s,i);return i&&i(H),H}};return Z}function Ls(e){if(hs(e))return e=zn(e),e.children=null,e}function Bi(e){if(!hs(e))return oo(e.type)&&e.children?co(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&J(t.default))return t.default()}}function kt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,kt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function fo(e,n=!1,t){let s=[],i=0;for(let r=0;r<e.length;r++){let o=e[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Oe?(o.patchFlag&128&&i++,s=s.concat(fo(o.children,n,a))):(n||o.type!==Ie)&&s.push(a!=null?zn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ho(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const es=new WeakMap;function mt(e,n,t,s,i=!1){if(j(e)){e.forEach((z,W)=>mt(z,n&&(j(n)?n[W]:n),t,s,i));return}if(pt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&mt(e,n,t,s.component.subTree);return}const r=s.shapeFlag&4?ys(s.component):s.el,o=i?null:r,{i:a,r:l}=e,h=n&&n.r,u=a.refs===de?a.refs={}:a.refs,p=a.setupState,S=ie(p),C=p===de?zr:z=>ae(S,z);if(h!=null&&h!==l){if(Di(n),ge(h))u[h]=null,C(h)&&(p[h]=null);else if(Me(h)){h.value=null;const z=n;z.k&&(u[z.k]=null)}}if(J(l))Mt(l,a,12,[o,u]);else{const z=ge(l),W=Me(l);if(z||W){const le=()=>{if(e.f){const F=z?C(l)?p[l]:u[l]:l.value;if(i)j(F)&&ri(F,r);else if(j(F))F.includes(r)||F.push(r);else if(z)u[l]=[r],C(l)&&(p[l]=u[l]);else{const A=[r];l.value=A,e.k&&(u[e.k]=A)}}else z?(u[l]=o,C(l)&&(p[l]=o)):W&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const F=()=>{le(),es.delete(e)};F.id=-1,es.set(e,F),We(F,t)}else Di(e),le()}}}function Di(e){const n=es.get(e);n&&(n.flags|=8,es.delete(e))}cs().requestIdleCallback;cs().cancelIdleCallback;const pt=e=>!!e.type.__asyncLoader,hs=e=>e.type.__isKeepAlive;function nl(e,n){mo(e,"a",n)}function tl(e,n){mo(e,"da",n)}function mo(e,n,t=Fe){const s=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ms(n,s,t),t){let i=t.parent;for(;i&&i.parent;)hs(i.parent.vnode)&&sl(s,n,t,i),i=i.parent}}function sl(e,n,t,s){const i=ms(n,e,s,!0);po(()=>{ri(s[n],i)},t)}function ms(e,n,t=Fe,s=!1){if(t){const i=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{gn();const a=Lt(t),l=Ze(n,t,e,o);return a(),bn(),l});return s?i.unshift(r):i.push(r),r}}const yn=e=>(n,t=Fe)=>{(!_t||e==="sp")&&ms(e,(...s)=>n(...s),t)},il=yn("bm"),ps=yn("m"),rl=yn("bu"),ol=yn("u"),gs=yn("bum"),po=yn("um"),al=yn("sp"),ll=yn("rtg"),cl=yn("rtc");function ul(e,n=Fe){ms("ec",e,n)}const dl=Symbol.for("v-ndc");function Wt(e,n,t,s){let i;const r=t,o=j(e);if(o||ge(e)){const a=o&&Vn(e);let l=!1,h=!1;a&&(l=!Je(e),h=vn(e),e=us(e)),i=new Array(e.length);for(let u=0,p=e.length;u<p;u++)i[u]=n(l?h?tt(Ye(e[u])):Ye(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=n(a+1,a,void 0,r)}else if(ue(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>n(a,l,void 0,r));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,h=a.length;l<h;l++){const u=a[l];i[l]=n(e[u],u,l,r)}}else i=[];return i}const Js=e=>e?Ho(e)?ys(e):Js(e.parent):null,gt=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Js(e.parent),$root:e=>Js(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>bo(e),$forceUpdate:e=>e.f||(e.f=()=>{gi(e.update)}),$nextTick:e=>e.n||(e.n=Zt.bind(e.proxy)),$watch:e=>_l.bind(e)}),zs=(e,n)=>e!==de&&!e.__isScriptSetup&&ae(e,n),fl={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=e;if(n[0]!=="$"){const S=o[n];if(S!==void 0)switch(S){case 1:return s[n];case 2:return i[n];case 4:return t[n];case 3:return r[n]}else{if(zs(s,n))return o[n]=1,s[n];if(i!==de&&ae(i,n))return o[n]=2,i[n];if(ae(r,n))return o[n]=3,r[n];if(t!==de&&ae(t,n))return o[n]=4,t[n];qs&&(o[n]=0)}}const h=gt[n];let u,p;if(h)return n==="$attrs"&&Ee(e.attrs,"get",""),h(e);if((u=a.__cssModules)&&(u=u[n]))return u;if(t!==de&&ae(t,n))return o[n]=4,t[n];if(p=l.config.globalProperties,ae(p,n))return p[n]},set({_:e},n,t){const{data:s,setupState:i,ctx:r}=e;return zs(i,n)?(i[n]=t,!0):s!==de&&ae(s,n)?(s[n]=t,!0):ae(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(t[a]||e!==de&&a[0]!=="$"&&ae(e,a)||zs(n,a)||ae(r,a)||ae(s,a)||ae(gt,a)||ae(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ae(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Ki(e){return j(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let qs=!0;function hl(e){const n=bo(e),t=e.proxy,s=e.ctx;qs=!1,n.beforeCreate&&ji(n.beforeCreate,e,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:h,created:u,beforeMount:p,mounted:S,beforeUpdate:C,updated:z,activated:W,deactivated:le,beforeDestroy:F,beforeUnmount:A,destroyed:V,unmounted:I,render:$,renderTracked:re,renderTriggered:te,errorCaptured:Z,serverPrefetch:R,expose:H,inheritAttrs:K,components:E,directives:G,filters:se}=n;if(h&&ml(h,s,null),o)for(const Q in o){const q=o[Q];J(q)&&(s[Q]=q.bind(t))}if(i){const Q=i.call(t,t);ue(Q)&&(e.data=ds(Q))}if(qs=!0,r)for(const Q in r){const q=r[Q],Le=J(q)?q.bind(t,t):J(q.get)?q.get.bind(t,t):on,De=!J(q)&&J(q.set)?q.set.bind(t):on,we=ne({get:Le,set:De});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>we.value,set:ye=>we.value=ye})}if(a)for(const Q in a)go(a[Q],s,t,Q);if(l){const Q=J(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(q=>{wl(q,Q[q])})}u&&ji(u,e,"c");function ee(Q,q){j(q)?q.forEach(Le=>Q(Le.bind(t))):q&&Q(q.bind(t))}if(ee(il,p),ee(ps,S),ee(rl,C),ee(ol,z),ee(nl,W),ee(tl,le),ee(ul,Z),ee(cl,re),ee(ll,te),ee(gs,A),ee(po,I),ee(al,R),j(H))if(H.length){const Q=e.exposed||(e.exposed={});H.forEach(q=>{Object.defineProperty(Q,q,{get:()=>t[q],set:Le=>t[q]=Le,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===on&&(e.render=$),K!=null&&(e.inheritAttrs=K),E&&(e.components=E),G&&(e.directives=G),R&&ho(e)}function ml(e,n,t=on){j(e)&&(e=Xs(e));for(const s in e){const i=e[s];let r;ue(i)?"default"in i?r=Gt(i.from||s,i.default,!0):r=Gt(i.from||s):r=Gt(i),Me(r)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[s]=r}}function ji(e,n,t){Ze(j(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function go(e,n,t,s){let i=s.includes(".")?wo(t,s):()=>t[s];if(ge(e)){const r=n[e];J(r)&&$e(i,r)}else if(J(e))$e(i,e.bind(t));else if(ue(e))if(j(e))e.forEach(r=>go(r,n,t,s));else{const r=J(e.handler)?e.handler.bind(t):n[e.handler];J(r)&&$e(i,r,e)}}function bo(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(n);let l;return a?l=a:!i.length&&!t&&!s?l=n:(l={},i.length&&i.forEach(h=>ns(l,h,o,!0)),ns(l,n,o)),ue(n)&&r.set(n,l),l}function ns(e,n,t,s=!1){const{mixins:i,extends:r}=n;r&&ns(e,r,t,!0),i&&i.forEach(o=>ns(e,o,t,!0));for(const o in n)if(!(s&&o==="expose")){const a=pl[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const pl={data:Vi,props:Gi,emits:Gi,methods:ct,computed:ct,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:ct,directives:ct,watch:bl,provide:Vi,inject:gl};function Vi(e,n){return n?e?function(){return Te(J(e)?e.call(this,this):e,J(n)?n.call(this,this):n)}:n:e}function gl(e,n){return ct(Xs(e),Xs(n))}function Xs(e){if(j(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Pe(e,n){return e?[...new Set([].concat(e,n))]:n}function ct(e,n){return e?Te(Object.create(null),e,n):n}function Gi(e,n){return e?j(e)&&j(n)?[...new Set([...e,...n])]:Te(Object.create(null),Ki(e),Ki(n??{})):n}function bl(e,n){if(!e)return n;if(!n)return e;const t=Te(Object.create(null),e);for(const s in n)t[s]=Pe(e[s],n[s]);return t}function vo(){return{app:null,config:{isNativeTag:zr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vl=0;function yl(e,n){return function(s,i=null){J(s)||(s=Te({},s)),i!=null&&!ue(i)&&(i=null);const r=vo(),o=new WeakSet,a=[];let l=!1;const h=r.app={_uid:vl++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:sc,get config(){return r.config},set config(u){},use(u,...p){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(h,...p)):J(u)&&(o.add(u),u(h,...p))),h},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),h},component(u,p){return p?(r.components[u]=p,h):r.components[u]},directive(u,p){return p?(r.directives[u]=p,h):r.directives[u]},mount(u,p,S){if(!l){const C=h._ceVNode||xe(s,i);return C.appContext=r,S===!0?S="svg":S===!1&&(S=void 0),e(C,u,S),l=!0,h._container=u,u.__vue_app__=h,ys(C.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ze(a,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(u,p){return r.provides[u]=p,h},runWithContext(u){const p=et;et=h;try{return u()}finally{et=p}}};return h}}let et=null;function wl(e,n){if(Fe){let t=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===t&&(t=Fe.provides=Object.create(s)),t[e]=n}}function Gt(e,n,t=!1){const s=Fo();if(s||et){let i=et?et._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&J(n)?n.call(s&&s.proxy):n}}const kl=Symbol.for("v-scx"),Sl=()=>Gt(kl);function $e(e,n,t){return yo(e,n,t)}function yo(e,n,t=de){const{immediate:s,deep:i,flush:r,once:o}=t,a=Te({},t),l=n&&s||!n&&r!=="post";let h;if(_t){if(r==="sync"){const C=Sl();h=C.__watcherHandles||(C.__watcherHandles=[])}else if(!l){const C=()=>{};return C.stop=on,C.resume=on,C.pause=on,C}}const u=Fe;a.call=(C,z,W)=>Ze(C,u,z,W);let p=!1;r==="post"?a.scheduler=C=>{We(C,u&&u.suspense)}:r!=="sync"&&(p=!0,a.scheduler=(C,z)=>{z?C():gi(C)}),a.augmentJob=C=>{n&&(C.flags|=4),p&&(C.flags|=2,u&&(C.id=u.uid,C.i=u))};const S=Ua(e,n,a);return _t&&(h?h.push(S):l&&S()),S}function _l(e,n,t){const s=this.proxy,i=ge(e)?e.includes(".")?wo(s,e):()=>s[e]:e.bind(s,s);let r;J(n)?r=n:(r=n.handler,t=n);const o=Lt(this),a=yo(i,r.bind(s),t);return o(),a}function wo(e,n){const t=n.split(".");return()=>{let s=e;for(let i=0;i<t.length&&s;i++)s=s[t[i]];return s}}const Cl=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Ln(n)}Modifiers`]||e[`${Gn(n)}Modifiers`];function Tl(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||de;let i=t;const r=n.startsWith("update:"),o=r&&Cl(s,n.slice(7));o&&(o.trim&&(i=t.map(u=>ge(u)?u.trim():u)),o.number&&(i=t.map(Hr)));let a,l=s[a=Cs(n)]||s[a=Cs(Ln(n))];!l&&r&&(l=s[a=Cs(Gn(n))]),l&&Ze(l,e,6,i);const h=s[a+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ze(h,e,6,i)}}const El=new WeakMap;function ko(e,n,t=!1){const s=t?El:n.emitsCache,i=s.get(e);if(i!==void 0)return i;const r=e.emits;let o={},a=!1;if(!J(e)){const l=h=>{const u=ko(h,n,!0);u&&(a=!0,Te(o,u))};!t&&n.mixins.length&&n.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(ue(e)&&s.set(e,null),null):(j(r)?r.forEach(l=>o[l]=null):Te(o,r),ue(e)&&s.set(e,o),o)}function bs(e,n){return!e||!as(n)?!1:(n=n.slice(2).replace(/Once$/,""),ae(e,n[0].toLowerCase()+n.slice(1))||ae(e,Gn(n))||ae(e,n))}function $i(e){const{type:n,vnode:t,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:h,renderCache:u,props:p,data:S,setupState:C,ctx:z,inheritAttrs:W}=e,le=Qt(e);let F,A;try{if(t.shapeFlag&4){const I=i||s,$=I;F=rn(h.call($,I,u,p,C,S,z)),A=a}else{const I=n;F=rn(I.length>1?I(p,{attrs:a,slots:o,emit:l}):I(p,null)),A=n.props?a:xl(a)}}catch(I){bt.length=0,fs(I,e,1),F=xe(Ie)}let V=F;if(A&&W!==!1){const I=Object.keys(A),{shapeFlag:$}=V;I.length&&$&7&&(r&&I.some(ii)&&(A=Ml(A,r)),V=zn(V,A,!1,!0))}return t.dirs&&(V=zn(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(t.dirs):t.dirs),t.transition&&kt(V,t.transition),F=V,Qt(le),F}const xl=e=>{let n;for(const t in e)(t==="class"||t==="style"||as(t))&&((n||(n={}))[t]=e[t]);return n},Ml=(e,n)=>{const t={};for(const s in e)(!ii(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function Ll(e,n,t){const{props:s,children:i,component:r}=e,{props:o,children:a,patchFlag:l}=n,h=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return s?Ui(s,o,h):!!o;if(l&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const S=u[p];if(o[S]!==s[S]&&!bs(h,S))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ui(s,o,h):!0:!!o;return!1}function Ui(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(n[r]!==e[r]&&!bs(t,r))return!0}return!1}function zl({vnode:e,parent:n},t){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=n.vnode).el=t,n=n.parent;else break}}const So={},_o=()=>Object.create(So),Co=e=>Object.getPrototypeOf(e)===So;function Al(e,n,t,s=!1){const i={},r=_o();e.propsDefaults=Object.create(null),To(e,n,i,r);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);t?e.props=s?i:Oa(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function Pl(e,n,t,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=e,a=ie(i),[l]=e.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let S=u[p];if(bs(e.emitsOptions,S))continue;const C=n[S];if(l)if(ae(r,S))C!==r[S]&&(r[S]=C,h=!0);else{const z=Ln(S);i[z]=Ys(l,a,z,C,e,!1)}else C!==r[S]&&(r[S]=C,h=!0)}}}else{To(e,n,i,r)&&(h=!0);let u;for(const p in a)(!n||!ae(n,p)&&((u=Gn(p))===p||!ae(n,u)))&&(l?t&&(t[p]!==void 0||t[u]!==void 0)&&(i[p]=Ys(l,a,p,void 0,e,!0)):delete i[p]);if(r!==a)for(const p in r)(!n||!ae(n,p))&&(delete r[p],h=!0)}h&&mn(e.attrs,"set","")}function To(e,n,t,s){const[i,r]=e.propsOptions;let o=!1,a;if(n)for(let l in n){if(dt(l))continue;const h=n[l];let u;i&&ae(i,u=Ln(l))?!r||!r.includes(u)?t[u]=h:(a||(a={}))[u]=h:bs(e.emitsOptions,l)||(!(l in s)||h!==s[l])&&(s[l]=h,o=!0)}if(r){const l=ie(t),h=a||de;for(let u=0;u<r.length;u++){const p=r[u];t[p]=Ys(i,l,p,h[p],e,!ae(h,p))}}return o}function Ys(e,n,t,s,i,r){const o=e[t];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:h}=i;if(t in h)s=h[t];else{const u=Lt(i);s=h[t]=l.call(null,n),u()}}else s=l;i.ce&&i.ce._setProp(t,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Gn(t))&&(s=!0))}return s}const Rl=new WeakMap;function Eo(e,n,t=!1){const s=t?Rl:n.propsCache,i=s.get(e);if(i)return i;const r=e.props,o={},a=[];let l=!1;if(!J(e)){const u=p=>{l=!0;const[S,C]=Eo(p,n,!0);Te(o,S),C&&a.push(...C)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return ue(e)&&s.set(e,Xn),Xn;if(j(r))for(let u=0;u<r.length;u++){const p=Ln(r[u]);Ji(p)&&(o[p]=de)}else if(r)for(const u in r){const p=Ln(u);if(Ji(p)){const S=r[u],C=o[p]=j(S)||J(S)?{type:S}:Te({},S),z=C.type;let W=!1,le=!0;if(j(z))for(let F=0;F<z.length;++F){const A=z[F],V=J(A)&&A.name;if(V==="Boolean"){W=!0;break}else V==="String"&&(le=!1)}else W=J(z)&&z.name==="Boolean";C[0]=W,C[1]=le,(W||ae(C,"default"))&&a.push(p)}}const h=[o,a];return ue(e)&&s.set(e,h),h}function Ji(e){return e[0]!=="$"&&!dt(e)}const bi=e=>e==="_"||e==="_ctx"||e==="$stable",vi=e=>j(e)?e.map(rn):[rn(e)],Il=(e,n,t)=>{if(n._n)return n;const s=$s((...i)=>vi(n(...i)),t);return s._c=!1,s},xo=(e,n,t)=>{const s=e._ctx;for(const i in e){if(bi(i))continue;const r=e[i];if(J(r))n[i]=Il(i,r,s);else if(r!=null){const o=vi(r);n[i]=()=>o}}},Mo=(e,n)=>{const t=vi(n);e.slots.default=()=>t},Lo=(e,n,t)=>{for(const s in n)(t||!bi(s))&&(e[s]=n[s])},Fl=(e,n,t)=>{const s=e.slots=_o();if(e.vnode.shapeFlag&32){const i=n._;i?(Lo(s,n,t),t&&Fr(s,"_",i,!0)):xo(n,s)}else n&&Mo(e,n)},Hl=(e,n,t)=>{const{vnode:s,slots:i}=e;let r=!0,o=de;if(s.shapeFlag&32){const a=n._;a?t&&a===1?r=!1:Lo(i,n,t):(r=!n.$stable,xo(n,i)),o=n}else n&&(Mo(e,n),o={default:1});if(r)for(const a in i)!bi(a)&&o[a]==null&&delete i[a]},We=Dl;function Nl(e){return Ol(e)}function Ol(e,n){const t=cs();t.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:h,setElementText:u,parentNode:p,nextSibling:S,setScopeId:C=on,insertStaticContent:z}=e,W=(c,d,g,k=null,b=null,y=null,_=void 0,M=null,x=!!d.dynamicChildren)=>{if(c===d)return;c&&!Dn(c,d)&&(k=en(c),ye(c,b,y,!0),c=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:w,ref:B,shapeFlag:P}=d;switch(w){case vs:le(c,d,g,k);break;case Ie:F(c,d,g,k);break;case Ps:c==null&&A(d,g,k,_);break;case Oe:E(c,d,g,k,b,y,_,M,x);break;default:P&1?$(c,d,g,k,b,y,_,M,x):P&6?G(c,d,g,k,b,y,_,M,x):(P&64||P&128)&&w.process(c,d,g,k,b,y,_,M,x,Pn)}B!=null&&b?mt(B,c&&c.ref,y,d||c,!d):B==null&&c&&c.ref!=null&&mt(c.ref,null,y,c,!0)},le=(c,d,g,k)=>{if(c==null)s(d.el=a(d.children),g,k);else{const b=d.el=c.el;d.children!==c.children&&h(b,d.children)}},F=(c,d,g,k)=>{c==null?s(d.el=l(d.children||""),g,k):d.el=c.el},A=(c,d,g,k)=>{[c.el,c.anchor]=z(c.children,d,g,k,c.el,c.anchor)},V=({el:c,anchor:d},g,k)=>{let b;for(;c&&c!==d;)b=S(c),s(c,g,k),c=b;s(d,g,k)},I=({el:c,anchor:d})=>{let g;for(;c&&c!==d;)g=S(c),i(c),c=g;i(d)},$=(c,d,g,k,b,y,_,M,x)=>{if(d.type==="svg"?_="svg":d.type==="math"&&(_="mathml"),c==null)re(d,g,k,b,y,_,M,x);else{const w=c.el&&c.el._isVueCE?c.el:null;try{w&&w._beginPatch(),R(c,d,b,y,_,M,x)}finally{w&&w._endPatch()}}},re=(c,d,g,k,b,y,_,M)=>{let x,w;const{props:B,shapeFlag:P,transition:N,dirs:D}=c;if(x=c.el=o(c.type,y,B&&B.is,B),P&8?u(x,c.children):P&16&&Z(c.children,x,null,k,b,As(c,y),_,M),D&&Hn(c,null,k,"created"),te(x,c,c.scopeId,_,k),B){for(const oe in B)oe!=="value"&&!dt(oe)&&r(x,oe,null,B[oe],y,k);"value"in B&&r(x,"value",null,B.value,y),(w=B.onVnodeBeforeMount)&&tn(w,k,c)}D&&Hn(c,null,k,"beforeMount");const X=Wl(b,N);X&&N.beforeEnter(x),s(x,d,g),((w=B&&B.onVnodeMounted)||X||D)&&We(()=>{w&&tn(w,k,c),X&&N.enter(x),D&&Hn(c,null,k,"mounted")},b)},te=(c,d,g,k,b)=>{if(g&&C(c,g),k)for(let y=0;y<k.length;y++)C(c,k[y]);if(b){let y=b.subTree;if(d===y||Po(y.type)&&(y.ssContent===d||y.ssFallback===d)){const _=b.vnode;te(c,_,_.scopeId,_.slotScopeIds,b.parent)}}},Z=(c,d,g,k,b,y,_,M,x=0)=>{for(let w=x;w<c.length;w++){const B=c[w]=M?Cn(c[w]):rn(c[w]);W(null,B,d,g,k,b,y,_,M)}},R=(c,d,g,k,b,y,_)=>{const M=d.el=c.el;let{patchFlag:x,dynamicChildren:w,dirs:B}=d;x|=c.patchFlag&16;const P=c.props||de,N=d.props||de;let D;if(g&&Nn(g,!1),(D=N.onVnodeBeforeUpdate)&&tn(D,g,d,c),B&&Hn(d,c,g,"beforeUpdate"),g&&Nn(g,!0),(P.innerHTML&&N.innerHTML==null||P.textContent&&N.textContent==null)&&u(M,""),w?H(c.dynamicChildren,w,M,g,k,As(d,b),y):_||q(c,d,M,null,g,k,As(d,b),y,!1),x>0){if(x&16)K(M,P,N,g,b);else if(x&2&&P.class!==N.class&&r(M,"class",null,N.class,b),x&4&&r(M,"style",P.style,N.style,b),x&8){const X=d.dynamicProps;for(let oe=0;oe<X.length;oe++){const U=X[oe],ke=P[U],Se=N[U];(Se!==ke||U==="value")&&r(M,U,ke,Se,b,g)}}x&1&&c.children!==d.children&&u(M,d.children)}else!_&&w==null&&K(M,P,N,g,b);((D=N.onVnodeUpdated)||B)&&We(()=>{D&&tn(D,g,d,c),B&&Hn(d,c,g,"updated")},k)},H=(c,d,g,k,b,y,_)=>{for(let M=0;M<d.length;M++){const x=c[M],w=d[M],B=x.el&&(x.type===Oe||!Dn(x,w)||x.shapeFlag&198)?p(x.el):g;W(x,w,B,null,k,b,y,_,!0)}},K=(c,d,g,k,b)=>{if(d!==g){if(d!==de)for(const y in d)!dt(y)&&!(y in g)&&r(c,y,d[y],null,b,k);for(const y in g){if(dt(y))continue;const _=g[y],M=d[y];_!==M&&y!=="value"&&r(c,y,M,_,b,k)}"value"in g&&r(c,"value",d.value,g.value,b)}},E=(c,d,g,k,b,y,_,M,x)=>{const w=d.el=c?c.el:a(""),B=d.anchor=c?c.anchor:a("");let{patchFlag:P,dynamicChildren:N,slotScopeIds:D}=d;D&&(M=M?M.concat(D):D),c==null?(s(w,g,k),s(B,g,k),Z(d.children||[],g,B,b,y,_,M,x)):P>0&&P&64&&N&&c.dynamicChildren?(H(c.dynamicChildren,N,g,b,y,_,M),(d.key!=null||b&&d===b.subTree)&&zo(c,d,!0)):q(c,d,g,B,b,y,_,M,x)},G=(c,d,g,k,b,y,_,M,x)=>{d.slotScopeIds=M,c==null?d.shapeFlag&512?b.ctx.activate(d,g,k,_,x):se(d,g,k,b,y,_,x):ve(c,d,x)},se=(c,d,g,k,b,y,_)=>{const M=c.component=Xl(c,k,b);if(hs(c)&&(M.ctx.renderer=Pn),Yl(M,!1,_),M.asyncDep){if(b&&b.registerDep(M,ee,_),!c.el){const x=M.subTree=xe(Ie);F(null,x,d,g),c.placeholder=x.el}}else ee(M,c,d,g,b,y,_)},ve=(c,d,g)=>{const k=d.component=c.component;if(Ll(c,d,g))if(k.asyncDep&&!k.asyncResolved){Q(k,d,g);return}else k.next=d,k.update();else d.el=c.el,k.vnode=d},ee=(c,d,g,k,b,y,_)=>{const M=()=>{if(c.isMounted){let{next:P,bu:N,u:D,parent:X,vnode:oe}=c;{const je=Ao(c);if(je){P&&(P.el=oe.el,Q(c,P,_)),je.asyncDep.then(()=>{c.isUnmounted||M()});return}}let U=P,ke;Nn(c,!1),P?(P.el=oe.el,Q(c,P,_)):P=oe,N&&Vt(N),(ke=P.props&&P.props.onVnodeBeforeUpdate)&&tn(ke,X,P,oe),Nn(c,!0);const Se=$i(c),Ke=c.subTree;c.subTree=Se,W(Ke,Se,p(Ke.el),en(Ke),c,b,y),P.el=Se.el,U===null&&zl(c,Se.el),D&&We(D,b),(ke=P.props&&P.props.onVnodeUpdated)&&We(()=>tn(ke,X,P,oe),b)}else{let P;const{el:N,props:D}=d,{bm:X,m:oe,parent:U,root:ke,type:Se}=c,Ke=pt(d);Nn(c,!1),X&&Vt(X),!Ke&&(P=D&&D.onVnodeBeforeMount)&&tn(P,U,d),Nn(c,!0);{ke.ce&&ke.ce._def.shadowRoot!==!1&&ke.ce._injectChildStyle(Se);const je=c.subTree=$i(c);W(null,je,g,k,c,b,y),d.el=je.el}if(oe&&We(oe,b),!Ke&&(P=D&&D.onVnodeMounted)){const je=d;We(()=>tn(P,U,je),b)}(d.shapeFlag&256||U&&pt(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&We(c.a,b),c.isMounted=!0,d=g=k=null}};c.scope.on();const x=c.effect=new Br(M);c.scope.off();const w=c.update=x.run.bind(x),B=c.job=x.runIfDirty.bind(x);B.i=c,B.id=c.uid,x.scheduler=()=>gi(B),Nn(c,!0),w()},Q=(c,d,g)=>{d.component=c;const k=c.vnode.props;c.vnode=d,c.next=null,Pl(c,d.props,k,g),Hl(c,d.children,g),gn(),Oi(c),bn()},q=(c,d,g,k,b,y,_,M,x=!1)=>{const w=c&&c.children,B=c?c.shapeFlag:0,P=d.children,{patchFlag:N,shapeFlag:D}=d;if(N>0){if(N&128){De(w,P,g,k,b,y,_,M,x);return}else if(N&256){Le(w,P,g,k,b,y,_,M,x);return}}D&8?(B&16&&Qe(w,b,y),P!==w&&u(g,P)):B&16?D&16?De(w,P,g,k,b,y,_,M,x):Qe(w,b,y,!0):(B&8&&u(g,""),D&16&&Z(P,g,k,b,y,_,M,x))},Le=(c,d,g,k,b,y,_,M,x)=>{c=c||Xn,d=d||Xn;const w=c.length,B=d.length,P=Math.min(w,B);let N;for(N=0;N<P;N++){const D=d[N]=x?Cn(d[N]):rn(d[N]);W(c[N],D,g,null,b,y,_,M,x)}w>B?Qe(c,b,y,!0,!1,P):Z(d,g,k,b,y,_,M,x,P)},De=(c,d,g,k,b,y,_,M,x)=>{let w=0;const B=d.length;let P=c.length-1,N=B-1;for(;w<=P&&w<=N;){const D=c[w],X=d[w]=x?Cn(d[w]):rn(d[w]);if(Dn(D,X))W(D,X,g,null,b,y,_,M,x);else break;w++}for(;w<=P&&w<=N;){const D=c[P],X=d[N]=x?Cn(d[N]):rn(d[N]);if(Dn(D,X))W(D,X,g,null,b,y,_,M,x);else break;P--,N--}if(w>P){if(w<=N){const D=N+1,X=D<B?d[D].el:k;for(;w<=N;)W(null,d[w]=x?Cn(d[w]):rn(d[w]),g,X,b,y,_,M,x),w++}}else if(w>N)for(;w<=P;)ye(c[w],b,y,!0),w++;else{const D=w,X=w,oe=new Map;for(w=X;w<=N;w++){const ze=d[w]=x?Cn(d[w]):rn(d[w]);ze.key!=null&&oe.set(ze.key,w)}let U,ke=0;const Se=N-X+1;let Ke=!1,je=0;const Rn=new Array(Se);for(w=0;w<Se;w++)Rn[w]=0;for(w=D;w<=P;w++){const ze=c[w];if(ke>=Se){ye(ze,b,y,!0);continue}let Ve;if(ze.key!=null)Ve=oe.get(ze.key);else for(U=X;U<=N;U++)if(Rn[U-X]===0&&Dn(ze,d[U])){Ve=U;break}Ve===void 0?ye(ze,b,y,!0):(Rn[Ve-X]=w+1,Ve>=je?je=Ve:Ke=!0,W(ze,d[Ve],g,null,b,y,_,M,x),ke++)}const Pt=Ke?Bl(Rn):Xn;for(U=Pt.length-1,w=Se-1;w>=0;w--){const ze=X+w,Ve=d[ze],Rt=d[ze+1],It=ze+1<B?Rt.el||Rt.placeholder:k;Rn[w]===0?W(null,Ve,g,It,b,y,_,M,x):Ke&&(U<0||w!==Pt[U]?we(Ve,g,It,2):U--)}}},we=(c,d,g,k,b=null)=>{const{el:y,type:_,transition:M,children:x,shapeFlag:w}=c;if(w&6){we(c.component.subTree,d,g,k);return}if(w&128){c.suspense.move(d,g,k);return}if(w&64){_.move(c,d,g,Pn);return}if(_===Oe){s(y,d,g);for(let P=0;P<x.length;P++)we(x[P],d,g,k);s(c.anchor,d,g);return}if(_===Ps){V(c,d,g);return}if(k!==2&&w&1&&M)if(k===0)M.beforeEnter(y),s(y,d,g),We(()=>M.enter(y),b);else{const{leave:P,delayLeave:N,afterLeave:D}=M,X=()=>{c.ctx.isUnmounted?i(y):s(y,d,g)},oe=()=>{y._isLeaving&&y[hn](!0),P(y,()=>{X(),D&&D()})};N?N(y,X,oe):oe()}else s(y,d,g)},ye=(c,d,g,k=!1,b=!1)=>{const{type:y,props:_,ref:M,children:x,dynamicChildren:w,shapeFlag:B,patchFlag:P,dirs:N,cacheIndex:D}=c;if(P===-2&&(b=!1),M!=null&&(gn(),mt(M,null,g,c,!0),bn()),D!=null&&(d.renderCache[D]=void 0),B&256){d.ctx.deactivate(c);return}const X=B&1&&N,oe=!pt(c);let U;if(oe&&(U=_&&_.onVnodeBeforeUnmount)&&tn(U,d,c),B&6)rt(c.component,g,k);else{if(B&128){c.suspense.unmount(g,k);return}X&&Hn(c,null,d,"beforeUnmount"),B&64?c.type.remove(c,d,g,Pn,k):w&&!w.hasOnce&&(y!==Oe||P>0&&P&64)?Qe(w,d,g,!1,!0):(y===Oe&&P&384||!b&&B&16)&&Qe(x,d,g),k&&wn(c)}(oe&&(U=_&&_.onVnodeUnmounted)||X)&&We(()=>{U&&tn(U,d,c),X&&Hn(c,null,d,"unmounted")},g)},wn=c=>{const{type:d,el:g,anchor:k,transition:b}=c;if(d===Oe){An(g,k);return}if(d===Ps){I(c);return}const y=()=>{i(g),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(c.shapeFlag&1&&b&&!b.persisted){const{leave:_,delayLeave:M}=b,x=()=>_(g,y);M?M(c.el,y,x):x()}else y()},An=(c,d)=>{let g;for(;c!==d;)g=S(c),i(c),c=g;i(d)},rt=(c,d,g)=>{const{bum:k,scope:b,job:y,subTree:_,um:M,m:x,a:w}=c;qi(x),qi(w),k&&Vt(k),b.stop(),y&&(y.flags|=8,ye(_,c,d,g)),M&&We(M,d),We(()=>{c.isUnmounted=!0},d)},Qe=(c,d,g,k=!1,b=!1,y=0)=>{for(let _=y;_<c.length;_++)ye(c[_],d,g,k,b)},en=c=>{if(c.shapeFlag&6)return en(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const d=S(c.anchor||c.el),g=d&&d[Ya];return g?S(g):d};let ot=!1;const At=(c,d,g)=>{c==null?d._vnode&&ye(d._vnode,null,null,!0):W(d._vnode||null,c,d,null,null,null,g),d._vnode=c,ot||(ot=!0,Oi(),so(),ot=!1)},Pn={p:W,um:ye,m:we,r:wn,mt:se,mc:Z,pc:q,pbc:H,n:en,o:e};return{render:At,hydrate:void 0,createApp:yl(At)}}function As({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Nn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Wl(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function zo(e,n,t=!1){const s=e.children,i=n.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Cn(i[r]),a.el=o.el),!t&&a.patchFlag!==-2&&zo(o,a)),a.type===vs&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ie&&!a.el&&(a.el=o.el)}}function Bl(e){const n=e.slice(),t=[0];let s,i,r,o,a;const l=e.length;for(s=0;s<l;s++){const h=e[s];if(h!==0){if(i=t[t.length-1],e[i]<h){n[s]=i,t.push(s);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,e[t[a]]<h?r=a+1:o=a;h<e[t[r]]&&(r>0&&(n[s]=t[r-1]),t[r]=s)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function Ao(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ao(n)}function qi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Po=e=>e.__isSuspense;function Dl(e,n){n&&n.pendingBranch?j(e)?n.effects.push(...e):n.effects.push(e):Xa(e)}const Oe=Symbol.for("v-fgt"),vs=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),Ps=Symbol.for("v-stc"),bt=[];let Be=null;function fe(e=!1){bt.push(Be=e?null:[])}function Kl(){bt.pop(),Be=bt[bt.length-1]||null}let St=1;function ts(e,n=!1){St+=e,e<0&&Be&&n&&(Be.hasOnce=!0)}function Ro(e){return e.dynamicChildren=St>0?Be||Xn:null,Kl(),St>0&&Be&&Be.push(e),e}function me(e,n,t,s,i,r){return Ro(L(e,n,t,s,i,r,!0))}function jl(e,n,t,s,i){return Ro(xe(e,n,t,s,i,!0))}function ss(e){return e?e.__v_isVNode===!0:!1}function Dn(e,n){return e.type===n.type&&e.key===n.key}const Io=({key:e})=>e??null,$t=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Me(e)||J(e)?{i:Ue,r:e,k:n,f:!!t}:e:null);function L(e,n=null,t=null,s=0,i=null,r=e===Oe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Io(n),ref:n&&$t(n),scopeId:ro,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return a?(yi(l,t),r&128&&e.normalize(l)):t&&(l.shapeFlag|=ge(t)?8:16),St>0&&!o&&Be&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Be.push(l),l}const xe=Vl;function Vl(e,n=null,t=null,s=0,i=null,r=!1){if((!e||e===dl)&&(e=Ie),ss(e)){const a=zn(e,n,!0);return t&&yi(a,t),St>0&&!r&&Be&&(a.shapeFlag&6?Be[Be.indexOf(e)]=a:Be.push(a)),a.patchFlag=-2,a}if(nc(e)&&(e=e.__vccOpts),n){n=Gl(n);let{class:a,style:l}=n;a&&!ge(a)&&(n.class=Zn(a)),ue(l)&&(pi(l)&&!j(l)&&(l=Te({},l)),n.style=ai(l))}const o=ge(e)?1:Po(e)?128:oo(e)?64:ue(e)?4:J(e)?2:0;return L(e,n,t,s,i,o,r,!0)}function Gl(e){return e?pi(e)||Co(e)?Te({},e):e:null}function zn(e,n,t=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=e,h=n?Ul(i||{},n):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Io(h),ref:n&&n.ref?t&&r?j(r)?r.concat($t(n)):[r,$t(n)]:$t(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Oe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zn(e.ssContent),ssFallback:e.ssFallback&&zn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&kt(u,l.clone(u)),u}function $l(e=" ",n=0){return xe(vs,null,e,n)}function qe(e="",n=!1){return n?(fe(),jl(Ie,null,e)):xe(Ie,null,e)}function rn(e){return e==null||typeof e=="boolean"?xe(Ie):j(e)?xe(Oe,null,e.slice()):ss(e)?Cn(e):xe(vs,null,String(e))}function Cn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zn(e)}function yi(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(j(n))t=16;else if(typeof n=="object")if(s&65){const i=n.default;i&&(i._c&&(i._d=!1),yi(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Co(n)?n._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else J(n)?(n={default:n,_ctx:Ue},t=32):(n=String(n),s&64?(t=16,n=[$l(n)]):t=8);e.children=n,e.shapeFlag|=t}function Ul(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const i in s)if(i==="class")n.class!==s.class&&(n.class=Zn([n.class,s.class]));else if(i==="style")n.style=ai([n.style,s.style]);else if(as(i)){const r=n[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))&&(n[i]=r?[].concat(r,o):o)}else i!==""&&(n[i]=s[i])}return n}function tn(e,n,t,s=null){Ze(e,n,7,[t,s])}const Jl=vo();let ql=0;function Xl(e,n,t){const s=e.type,i=(n?n.appContext:e.appContext)||Jl,r={uid:ql++,vnode:e,type:s,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new va(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eo(s,i),emitsOptions:ko(s,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Tl.bind(null,r),e.ce&&e.ce(r),r}let Fe=null;const Fo=()=>Fe||Ue;let is,Zs;{const e=cs(),n=(t,s)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};is=n("__VUE_INSTANCE_SETTERS__",t=>Fe=t),Zs=n("__VUE_SSR_SETTERS__",t=>_t=t)}const Lt=e=>{const n=Fe;return is(e),e.scope.on(),()=>{e.scope.off(),is(n)}},Xi=()=>{Fe&&Fe.scope.off(),is(null)};function Ho(e){return e.vnode.shapeFlag&4}let _t=!1;function Yl(e,n=!1,t=!1){n&&Zs(n);const{props:s,children:i}=e.vnode,r=Ho(e);Al(e,s,r,n),Fl(e,i,t||n);const o=r?Zl(e,n):void 0;return n&&Zs(!1),o}function Zl(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,fl);const{setup:s}=t;if(s){gn();const i=e.setupContext=s.length>1?ec(e):null,r=Lt(e),o=Mt(s,e,0,[e.props,i]),a=Ar(o);if(bn(),r(),(a||e.sp)&&!pt(e)&&ho(e),a){if(o.then(Xi,Xi),n)return o.then(l=>{Yi(e,l)}).catch(l=>{fs(l,e,0)});e.asyncDep=o}else Yi(e,o)}else No(e)}function Yi(e,n,t){J(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ue(n)&&(e.setupState=eo(n)),No(e)}function No(e,n,t){const s=e.type;e.render||(e.render=s.render||on);{const i=Lt(e);gn();try{hl(e)}finally{bn(),i()}}}const Ql={get(e,n){return Ee(e,"get",""),e[n]}};function ec(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Ql),slots:e.slots,emit:e.emit,expose:n}}function ys(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(eo(Wa(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in gt)return gt[t](e)},has(n,t){return t in n||t in gt}})):e.proxy}function nc(e){return J(e)&&"__vccOpts"in e}const ne=(e,n)=>Ga(e,n,_t);function tc(e,n,t){try{ts(-1);const s=arguments.length;return s===2?ue(n)&&!j(n)?ss(n)?xe(e,null,[n]):xe(e,n):xe(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&ss(t)&&(t=[t]),xe(e,n,t))}finally{ts(1)}}const sc="3.5.25";let Qs;const Zi=typeof window<"u"&&window.trustedTypes;if(Zi)try{Qs=Zi.createPolicy("vue",{createHTML:e=>e})}catch{}const Oo=Qs?e=>Qs.createHTML(e):e=>e,ic="http://www.w3.org/2000/svg",rc="http://www.w3.org/1998/Math/MathML",fn=typeof document<"u"?document:null,Qi=fn&&fn.createElement("template"),oc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const i=n==="svg"?fn.createElementNS(ic,e):n==="mathml"?fn.createElementNS(rc,e):t?fn.createElement(e,{is:t}):fn.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>fn.createTextNode(e),createComment:e=>fn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>fn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,i,r){const o=t?t.previousSibling:n.lastChild;if(i&&(i===r||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===r||!(i=i.nextSibling)););else{Qi.innerHTML=Oo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=Qi.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},kn="transition",lt="animation",Ct=Symbol("_vtc"),Wo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ac=Te({},ao,Wo),lc=e=>(e.displayName="Transition",e.props=ac,e),er=lc((e,{slots:n})=>tc(el,cc(e),n)),On=(e,n=[])=>{j(e)?e.forEach(t=>t(...n)):e&&e(...n)},nr=e=>e?j(e)?e.some(n=>n.length>1):e.length>1:!1;function cc(e){const n={};for(const E in e)E in Wo||(n[E]=e[E]);if(e.css===!1)return n;const{name:t="v",type:s,duration:i,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:h=o,appearToClass:u=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:S=`${t}-leave-active`,leaveToClass:C=`${t}-leave-to`}=e,z=uc(i),W=z&&z[0],le=z&&z[1],{onBeforeEnter:F,onEnter:A,onEnterCancelled:V,onLeave:I,onLeaveCancelled:$,onBeforeAppear:re=F,onAppear:te=A,onAppearCancelled:Z=V}=n,R=(E,G,se,ve)=>{E._enterCancelled=ve,Wn(E,G?u:a),Wn(E,G?h:o),se&&se()},H=(E,G)=>{E._isLeaving=!1,Wn(E,p),Wn(E,C),Wn(E,S),G&&G()},K=E=>(G,se)=>{const ve=E?te:A,ee=()=>R(G,E,se);On(ve,[G,ee]),tr(()=>{Wn(G,E?l:r),dn(G,E?u:a),nr(ve)||sr(G,s,W,ee)})};return Te(n,{onBeforeEnter(E){On(F,[E]),dn(E,r),dn(E,o)},onBeforeAppear(E){On(re,[E]),dn(E,l),dn(E,h)},onEnter:K(!1),onAppear:K(!0),onLeave(E,G){E._isLeaving=!0;const se=()=>H(E,G);dn(E,p),E._enterCancelled?(dn(E,S),or(E)):(or(E),dn(E,S)),tr(()=>{E._isLeaving&&(Wn(E,p),dn(E,C),nr(I)||sr(E,s,le,se))}),On(I,[E,se])},onEnterCancelled(E){R(E,!1,void 0,!0),On(V,[E])},onAppearCancelled(E){R(E,!0,void 0,!0),On(Z,[E])},onLeaveCancelled(E){H(E),On($,[E])}})}function uc(e){if(e==null)return null;if(ue(e))return[Rs(e.enter),Rs(e.leave)];{const n=Rs(e);return[n,n]}}function Rs(e){return ua(e)}function dn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Ct]||(e[Ct]=new Set)).add(n)}function Wn(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[Ct];t&&(t.delete(n),t.size||(e[Ct]=void 0))}function tr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let dc=0;function sr(e,n,t,s){const i=e._endId=++dc,r=()=>{i===e._endId&&s()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=fc(e,n);if(!o)return s();const h=o+"end";let u=0;const p=()=>{e.removeEventListener(h,S),r()},S=C=>{C.target===e&&++u>=l&&p()};setTimeout(()=>{u<l&&p()},a+1),e.addEventListener(h,S)}function fc(e,n){const t=window.getComputedStyle(e),s=z=>(t[z]||"").split(", "),i=s(`${kn}Delay`),r=s(`${kn}Duration`),o=ir(i,r),a=s(`${lt}Delay`),l=s(`${lt}Duration`),h=ir(a,l);let u=null,p=0,S=0;n===kn?o>0&&(u=kn,p=o,S=r.length):n===lt?h>0&&(u=lt,p=h,S=l.length):(p=Math.max(o,h),u=p>0?o>h?kn:lt:null,S=u?u===kn?r.length:l.length:0);const C=u===kn&&/\b(?:transform|all)(?:,|$)/.test(s(`${kn}Property`).toString());return{type:u,timeout:p,propCount:S,hasTransform:C}}function ir(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>rr(t)+rr(e[s])))}function rr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function or(e){return(e?e.ownerDocument:document).body.offsetHeight}function hc(e,n,t){const s=e[Ct];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const ar=Symbol("_vod"),mc=Symbol("_vsh"),pc=Symbol(""),gc=/(?:^|;)\s*display\s*:/;function bc(e,n,t){const s=e.style,i=ge(t);let r=!1;if(t&&!i){if(n)if(ge(n))for(const o of n.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ut(s,a,"")}else for(const o in n)t[o]==null&&Ut(s,o,"");for(const o in t)o==="display"&&(r=!0),Ut(s,o,t[o])}else if(i){if(n!==t){const o=s[pc];o&&(t+=";"+o),s.cssText=t,r=gc.test(t)}}else n&&e.removeAttribute("style");ar in e&&(e[ar]=r?s.display:"",e[mc]&&(s.display="none"))}const lr=/\s*!important$/;function Ut(e,n,t){if(j(t))t.forEach(s=>Ut(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const s=vc(e,n);lr.test(t)?e.setProperty(Gn(s),t.replace(lr,""),"important"):e[s]=t}}const cr=["Webkit","Moz","ms"],Is={};function vc(e,n){const t=Is[n];if(t)return t;let s=Ln(n);if(s!=="filter"&&s in e)return Is[n]=s;s=Ir(s);for(let i=0;i<cr.length;i++){const r=cr[i]+s;if(r in e)return Is[n]=r}return n}const ur="http://www.w3.org/1999/xlink";function dr(e,n,t,s,i,r=ga(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(ur,n.slice(6,n.length)):e.setAttributeNS(ur,n,t):t==null||r&&!Nr(t)?e.removeAttribute(n):e.setAttribute(n,r?"":an(t)?String(t):t)}function fr(e,n,t,s,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Oo(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=t==null?e.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in e))&&(e.value=l),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=Nr(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(i||n)}function wi(e,n,t,s){e.addEventListener(n,t,s)}function yc(e,n,t,s){e.removeEventListener(n,t,s)}const hr=Symbol("_vei");function wc(e,n,t,s,i=null){const r=e[hr]||(e[hr]={}),o=r[n];if(s&&o)o.value=s;else{const[a,l]=kc(n);if(s){const h=r[n]=Cc(s,i);wi(e,a,h,l)}else o&&(yc(e,a,o,l),r[n]=void 0)}}const mr=/(?:Once|Passive|Capture)$/;function kc(e){let n;if(mr.test(e)){n={};let s;for(;s=e.match(mr);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),n]}let Fs=0;const Sc=Promise.resolve(),_c=()=>Fs||(Sc.then(()=>Fs=0),Fs=Date.now());function Cc(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;Ze(Tc(s,t.value),n,5,[s])};return t.value=e,t.attached=_c(),t}function Tc(e,n){if(j(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(s=>i=>!i._stopped&&s&&s(i))}else return n}const pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ec=(e,n,t,s,i,r)=>{const o=i==="svg";n==="class"?hc(e,s,o):n==="style"?bc(e,t,s):as(n)?ii(n)||wc(e,n,t,s,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):xc(e,n,s,o))?(fr(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&dr(e,n,s,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!ge(s))?fr(e,Ln(n),s,r,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),dr(e,n,s,o))};function xc(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&pr(n)&&J(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return pr(n)&&ge(t)?!1:n in e}const rs=e=>{const n=e.props["onUpdate:modelValue"]||!1;return j(n)?t=>Vt(n,t):n},nt=Symbol("_assign"),Mc={deep:!0,created(e,n,t){e[nt]=rs(t),wi(e,"change",()=>{const s=e._modelValue,i=Tt(e),r=e.checked,o=e[nt];if(j(s)){const a=li(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const h=[...s];h.splice(a,1),o(h)}}else if(st(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(Bo(e,r))})},mounted:gr,beforeUpdate(e,n,t){e[nt]=rs(t),gr(e,n,t)}};function gr(e,{value:n,oldValue:t},s){e._modelValue=n;let i;if(j(n))i=li(n,s.props.value)>-1;else if(st(n))i=n.has(s.props.value);else{if(n===t)return;i=xt(n,Bo(e,!0))}e.checked!==i&&(e.checked=i)}const Lc={deep:!0,created(e,{value:n,modifiers:{number:t}},s){const i=st(n);wi(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?Hr(Tt(o)):Tt(o));e[nt](e.multiple?i?new Set(r):r:r[0]),e._assigning=!0,Zt(()=>{e._assigning=!1})}),e[nt]=rs(s)},mounted(e,{value:n}){br(e,n)},beforeUpdate(e,n,t){e[nt]=rs(t)},updated(e,{value:n}){e._assigning||br(e,n)}};function br(e,n){const t=e.multiple,s=j(n);if(!(t&&!s&&!st(n))){for(let i=0,r=e.options.length;i<r;i++){const o=e.options[i],a=Tt(o);if(t)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=n.some(h=>String(h)===String(a)):o.selected=li(n,a)>-1}else o.selected=n.has(a);else if(xt(Tt(o),n)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Tt(e){return"_value"in e?e._value:e.value}function Bo(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const zc=["ctrl","shift","alt","meta"],Ac={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>zc.some(t=>e[`${t}Key`]&&!n.includes(t))},Pc=(e,n)=>{const t=e._withMods||(e._withMods={}),s=n.join(".");return t[s]||(t[s]=((i,...r)=>{for(let o=0;o<n.length;o++){const a=Ac[n[o]];if(a&&a(i,n))return}return e(i,...r)}))},Rc=Te({patchProp:Ec},oc);let vr;function Ic(){return vr||(vr=Nl(Rc))}const Fc=((...e)=>{const n=Ic().createApp(...e),{mount:t}=n;return n.mount=s=>{const i=Nc(s);if(!i)return;const r=n._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,Hc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},n});function Hc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Nc(e){return ge(e)?document.querySelector(e):e}const Oc="/favicon.png",Wc="/images/about_music_logo.png",Bc="/images/dk3-min.jpg",Dc="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",it=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Dmitri Shostakovich",birth:1906,death:1975}],Kc={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/stravinsky.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function Do(e){return Kc[e]||null}function jc(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function Vc(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],i=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-i),a=n.slice(0,n.length-i).map(h=>h.trim()).filter(Boolean).map(h=>h[0]?h[0].toUpperCase()+".":"").filter(Boolean).join(" "),l=r.join(" ");return a?`${a} ${l}`:l}const zt=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let ei=zt.reduce((e,n)=>(e[n.id]=n.label,e),{});const yr=Math.min(...it.map(e=>e.birth)),Gc=Math.max(...it.map(e=>e.birth));let ni=[...it],Tn=null,En=null;const $c={r:255,g:255,b:255},Uc={r:37,g:99,b:235};ut("#f3f4f6"),Sr(1750),ut("#e6eef8"),Sr(1820),ut("#e8f4ff"),ut("#eef2f7");const os=1677.5,Jt=1980,Ko=Jt-os,Jc=6,qc=2,Xc=0,qt={barHeight:50,widthScale:1,fontScale:1},Jn={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let xn={...qt};function Hs(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function wr(e={}){xn={barHeight:Hs(e.barHeight??xn.barHeight??qt.barHeight,Jn.barHeight.min,Jn.barHeight.max),widthScale:Hs(e.widthScale??xn.widthScale??qt.widthScale,Jn.widthScale.min,Jn.widthScale.max),fontScale:Hs(e.fontScale??xn.fontScale??qt.fontScale,Jn.fontScale.min,Jn.fontScale.max)}}function Yc(){return Jc*xn.widthScale}function Bt(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=Ko*Yc()+Xc,s=(n.clientWidth||window.innerWidth)*qc*xn.widthScale,i=Math.max(t,s);e.style.width=i+"px",e.style.minWidth=i+"px"}function Kn(e){return(e-os)/Ko*100}function jo(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function ut(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(i=>i+i).join(""):n,s=parseInt(t,16);return{r:s>>16&255,g:s>>8&255,b:s&255}}function Ns({r:e,g:n,b:t}){const s=i=>Math.round(i).toString(16).padStart(2,"0");return`#${s(e)}${s(n)}${s(t)}`}function kr(e,n,t){const s=jo(t);return{r:e.r+(n.r-e.r)*s,g:e.g+(n.g-e.g)*s,b:e.b+(n.b-e.b)*s}}function Sr(e){const n=Gc-yr;return n<=0?0:jo((e-yr)/n)}const Zc={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function ki(e){return Zc[e]||"#f3f4f6"}function Qc(e){return e?ei[e]||zt.find(n=>n.id===e)?.label||e:""}function _r(e={}){!e||typeof e!="object"||(ei={...ei,...e})}function eu(e){const n=zt.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function nu(e,n){const t=Number(e),s=Number(n),i=eu(t);if(!Number.isFinite(t)||!Number.isFinite(s)||s<=t)return i;const r=s-t;let o=null,a=0;return zt.forEach(l=>{const h=Math.max(0,Math.min(s,l.to)-Math.max(t,l.from));h>a&&(a=h,o=l.id)}),o&&a>r/2?o:i}function tu(e){const n=ki(e),t=ut(n),s=kr(t,$c,.12),i=kr(t,Uc,.04);return`linear-gradient(145deg, ${Ns(s)} 0%, ${Ns(t)} 58%, ${Ns(i)} 100%)`}function Cr(e){Array.isArray(e)?ni=[...e]:ni=[...it]}function Si(){const e=document.getElementById("gantt");if(!e)return;const n=s=>Number.isInteger(Tn)&&s===Tn,t=s=>Number.isInteger(En)&&s===En;e.querySelectorAll(".bar").forEach(s=>{const i=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",n(i)),s.classList.toggle("bar--hovered",t(i))}),e.querySelectorAll(".bar-connector").forEach(s=>{const i=Number(s.getAttribute("data-lane-index")),r=n(i),o=t(i);s.classList.toggle("bar-connector--selected",r),s.classList.toggle("bar-connector--hover",o)})}function Vo(e){Number.isInteger(e)?Tn=e:Tn=null,Si()}function ti(e){Number.isInteger(e)?En=e:En=null,Si()}function Tr(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(os/10)*10,t=Math.ceil(Jt/10)*10;zt.forEach(s=>{const i=Math.max(s.from,os),r=Math.min(s.to,Jt);if(r<=i)return;const o=document.createElement("div");o.className="era-band",o.style.left=Kn(i)+"%",o.style.width=Kn(r)-Kn(i)+"%",o.style.backgroundImage="none",o.style.backgroundColor=ki(s.id),o.textContent=Qc(s.id)||s.label,s.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===Jt&&(o.style.borderRight="none"),e.appendChild(o)});for(let s=n;s<=t;s+=10){const i=document.createElement("div"),r=s%50===0;i.className="axis-tick "+(r?"major":"minor"),i.style.left=Kn(s)+"%",e.appendChild(i);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=Kn(s)+"%",o.textContent=s,e.appendChild(o)}}function Os(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="";const s=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,i=document.createDocumentFragment(),r=ni||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const o=[...r].sort((C,z)=>C.birth-z.birth),a=o.length,l=o.map((C,z)=>({composer:C,laneIndex:z}));Number.isInteger(Tn)&&(Tn<0||Tn>=a)&&(Tn=null),Number.isInteger(En)&&(En<0||En>=a)&&(En=null);const h=2,u=xn.barHeight,p=u+h,S=a*u+Math.max(0,a-1)*h;e.style.height=S+"px",a&&(l.forEach(({composer:C,laneIndex:z})=>{const W=C.displayName||C.name,le=Kn(C.birth),F=Kn(C.death),A=document.createElement("div");A.className="bar",A.setAttribute("data-lane-index",z),A.setAttribute("data-name",C.name);const V=nu(C.birth,C.death);A.style.backgroundImage=tu(V),A.style.backgroundColor=ki(V);const I=le,$=F-le,te=z*p+u*.5+s,Z=(K,E)=>{const G=document.createElement("div");G.className="bar-connector",G.setAttribute("data-lane-index",z),G.setAttribute("data-side",E),G.style.left=K+"%",G.style.top=-s+"px",G.style.height=te+"px",i.appendChild(G)};Z(I,"start"),Z(I+$,"end"),A.style.left=I+"%",A.style.width=$+"%",A.style.top=z*p+"px",A.style.height=u+"px",A.style.lineHeight=u+"px",A.style.fontSize=u*.25*xn.fontScale+"px";const R=Do(C.name);if(R){const K=document.createElement("img");K.className="bar-avatar";const E=Math.max(10,Math.round(u*.9));K.style.width=E+"px",K.style.height=E+"px",K.src=R,K.alt=W||C.name,A.appendChild(K)}const H=document.createElement("span");H.className="bar-label",H.textContent=W,A.appendChild(H),e.appendChild(A),A.addEventListener("click",K=>{K.stopPropagation(),Vo(z),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:C,laneIndex:z}}))}),A.addEventListener("mouseenter",()=>ti(z)),A.addEventListener("mouseleave",()=>ti(null)),H.scrollWidth>H.clientWidth&&(H.textContent=Vc(W),H.scrollWidth>H.clientWidth&&(H.textContent=jc(W)))}),e.appendChild(i),Si())}function su(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const s=4;let i=0,r=0,o=0,a=0,l=0,h=0,u=null;const p=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},S=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true")},C=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",p())};function z(){if(u=null,!n||!t)return;const R=l-i,H=h-r;e.scrollLeft=o-R,e.scrollTop=a-H}const W=R=>{R.button===0&&(n=!0,t=!1,e.classList.remove("panning"),i=R.clientX,r=R.clientY,l=R.clientX,h=R.clientY,o=e.scrollLeft,a=e.scrollTop,R.preventDefault())},le=R=>{if(n){if(l=R.clientX,h=R.clientY,!t){const H=Math.abs(l-i),K=Math.abs(h-r);if(H>s||K>s)S();else return}u===null&&(u=window.requestAnimationFrame(z)),R.preventDefault()}},F=()=>{n&&(n=!1,C(),u!==null&&(cancelAnimationFrame(u),u=null))};e.addEventListener("mousedown",W),window.addEventListener("mousemove",le),window.addEventListener("mouseup",F);let A=null,V=!1,I=0,$=0;const re=R=>{if(A!==null||R.touches.length!==1)return;const H=R.touches[0];A=H.identifier,V=!1,i=H.clientX,r=H.clientY,l=H.clientX,h=H.clientY,I=e.scrollLeft,$=e.scrollTop,C()},te=R=>{if(A===null)return;const H=Array.from(R.touches).find(G=>G.identifier===A);if(!H)return;l=H.clientX,h=H.clientY;const K=l-i,E=h-r;if(!V)if(Math.abs(K)>s||Math.abs(E)>s)V=!0,S();else return;e.scrollLeft=I-K,e.scrollTop=$-E,R.preventDefault()},Z=R=>{A===null||!Array.from(R.changedTouches).some(K=>K.identifier===A)||(A=null,V=!1,C())};e.addEventListener("touchstart",re,{passive:!0}),e.addEventListener("touchmove",te,{passive:!1}),e.addEventListener("touchend",Z,{passive:!0}),e.addEventListener("touchcancel",Z,{passive:!0})}function iu(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};let s=e.scrollLeft,i=!1,r=null,o=null;const a=.5,l=5,h=()=>{o!==null&&(clearTimeout(o),o=null)},u=()=>{r!==null&&(clearTimeout(r),r=null)},p=(F,A)=>{u();const V=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;i=!0,e.scrollTo&&!V?(e.scrollTo({left:F,top:A,behavior:"smooth"}),r=setTimeout(()=>{i=!1,r=null},320)):(e.scrollLeft=F,e.scrollTop=A,i=!1)},S=F=>{h(),o=setTimeout(()=>{o=null,W(F)},90)},C=(F,A,V)=>{const I=F.getBoundingClientRect();return I.bottom>A&&I.top<V},z=F=>Number(F.getAttribute("data-lane-index"))||0,W=F=>{const A=Array.from(n.querySelectorAll(".bar"));if(!A.length)return;const V=e.getBoundingClientRect(),$=(t?.getBoundingClientRect()?.bottom??V.top)+1,re=V.bottom,te=A.find(K=>C(K,$,re));if(!te)return;const Z=e.scrollLeft;Z+e.clientWidth;const R=z(te),H=A.reduce((K,E)=>{const G=z(E);if(!K)return E;const se=z(K);return G<se?E:K},null)||te;if(F==="right"){if(!(te.offsetLeft<Z-l))return;let E=A.find(ee=>z(ee)>R&&ee.offsetLeft>=Z-a&&C(ee,$,re))||null;if(E||(E=A.reduce((ee,Q)=>z(Q)<=R?ee:ee?Q.offsetLeft>ee.offsetLeft?Q:ee:Q,null)),!E)return;const G=E.getBoundingClientRect(),se=$+1,ve=G.top-se;Math.abs(ve)>a&&p(e.scrollLeft,e.scrollTop+ve);return}if(F==="left"){const E=te.getBoundingClientRect().right>V.right+a,G=Z<=a;let se=null;const ve=A.filter(we=>z(we)>=R?!1:we.offsetLeft>=Z-a);if(!G&&!E&&!ve.length||(G?se=H:ve.length&&(se=ve.reduce((we,ye)=>{if(!we)return ye;const wn=z(ye),An=z(we);if(wn>An)return ye;if(wn===An){const rt=Math.abs(ye.offsetLeft-Z),Qe=Math.abs(we.offsetLeft-Z);return rt<Qe?ye:we}return we},null)),se||(se=H),!se))return;const ee=se.getBoundingClientRect(),Q=$+1,q=ee.top-Q,Le=Math.max(0,se.offsetLeft),De=Le-e.scrollLeft;(Math.abs(q)>a||Math.abs(De)>a)&&p(Math.abs(De)>a?Le:e.scrollLeft,Math.abs(q)>a?e.scrollTop+q:e.scrollTop)}},le=()=>{if(i)return;const F=e.scrollLeft,A=F>s+a,V=F<s-a;A?S("right"):V&&S("left"),F<=a&&S("left"),s=F};return e.addEventListener("scroll",le,{passive:!0}),()=>{e.removeEventListener("scroll",le),h(),u()}}function Er(e,{left:n=0,top:t=0}){const s=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;if(e.scrollTo&&!s){e.scrollTo({left:n,top:t,behavior:"smooth"});return}e.scrollLeft=n,e.scrollTop=t}function ru(e={}){wr(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:it;Cr(n),_r(e.eraLabels||{}),Bt(),Tr(),Os(),su();const t=iu(),s=()=>Bt();window.addEventListener("resize",s);const i=document.getElementById("timeline");i&&(i.style.visibility="visible");function r(){const a=document.getElementById("timeline");a&&Er(a,{left:0,top:0})}function o(){const a=document.getElementById("timeline");a&&Er(a,{left:Math.max(0,a.scrollWidth-a.clientWidth),top:Math.max(0,a.scrollHeight-a.clientHeight)})}return{goToStart:r,goToEnd:o,setComposers(a){Cr(a),Os()},updateSettings(a){wr(a||{}),Bt(),Os()},updateEraLabels(a){_r(a||{}),Bt(),Tr()},setSelectedLane:Vo,setHoveredLane:ti,destroy(){window.removeEventListener("resize",s),t()}}}const Go=(e,n)=>{const t=e.__vccOpts||e;for(const[s,i]of n)t[s]=i;return t},ou={class:"timeline-wrapper"},au={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const s=i=>{const r=i.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),a=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(a)?null:a}}))};return ps(()=>{const i=document.getElementById("timeline");i&&i.addEventListener("click",s),t=ru({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),gs(()=>{const i=document.getElementById("timeline");i&&i.removeEventListener("click",s),t?.destroy?.(),t=null}),$e(()=>n.composers,i=>{t&&t.setComposers(i)},{deep:!0}),$e(()=>n.settings,i=>{!t||!t.updateSettings||t.updateSettings(i)},{deep:!0}),$e(()=>n.eraLabels,i=>{!t||!t.updateEraLabels||t.updateEraLabels(i)},{deep:!0}),(i,r)=>(fe(),me("div",ou,[...r[0]||(r[0]=[L("div",{id:"timeline"},[L("div",{class:"timeline-inner"},[L("div",{id:"axis",class:"axis"}),L("div",{id:"gantt"})])],-1)])]))}},lu=Go(au,[["__scopeId","data-v-095e97d5"]]),cu=`# Composer fact sheets

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

-## Bach essentials {#johann-sebastian-bach}

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

-## Domenico Scarlatti essentials {#domenico-scarlatti}

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

-## George Frideric Handel essentials {#george-frideric-handel}

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

-## Joseph Haydn essentials {#joseph-haydn}

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

-## Wolfgang Amadeus Mozart essentials {#wolfgang-amadeus-mozart}

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

-## Ludwig van Beethoven essentials {#ludwig-van-beethoven}

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

-## Niccolò Paganini essentials {#niccolo-paganini}

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

-## Franz Schubert essentials {#franz-schubert}

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

-## Hector Berlioz essentials {#hector-berlioz}

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

-## Mikhail Glinka essentials {#mikhail-glinka}

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

-## Felix Mendelssohn essentials {#felix-mendelssohn}

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

-## Frédéric Chopin essentials {#frederic-chopin}

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

-## Robert Schumann essentials {#robert-schumann}

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

-## Franz Liszt essentials {#franz-liszt}

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

-## Richard Wagner essentials {#richard-wagner}

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

-## Jacques Offenbach essentials {#jaques-offenbach}

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

-## Johann Strauss II essentials {#johann-strauss-ii}

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

-## Johannes Brahms essentials {#johannes-brahms}

Name (ru): Иоганнес Брамс

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

-## Alexander Borodin essentials {#alexander-borodin}

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

-## Camille Saint-Saëns essentials {#camille-saint-saens}

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

-## Georges Bizet essentials {#georges-bizet}

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

-## Modest Mussorgsky essentials {#modest-mussorgsky}

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

-## Pyotr Ilyich Tchaikovsky essentials {#pyotr-ilyich-tchaikovsky}

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


-## Antonín Dvořák essentials {#antonin-dvorak}

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

-## Edvard Grieg essentials {#edvard-grieg}

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

-## Giacomo Puccini essentials {#giacomo-puccini}

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

-## Gustav Mahler essentials {#gustav-mahler}

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

-## Claude Debussy essentials {#claude-debussy}

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

-## Erik Satie essentials {#erik-satie}

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

-## Alexander Scriabin essentials {#alexander-scriabin}

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

-## Sergei Rachmaninoff essentials {#sergei-rachmaninoff}

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

-## Maurice Ravel essentials {#maurice-ravel}

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

-## Sergei Prokofiev essentials {#sergei-prokofiev}

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

-## Dmitri Shostakovich essentials {#dmitri-shostakovich}

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
`,uu={class:"app"},du={class:"topbar"},fu={class:"language-switcher"},hu={class:"visually-hidden",for:"language-select"},mu=["aria-label"],pu=["value"],gu={class:"menu-nav"},bu={class:"content"},vu={key:0},yu={class:"filter-dock"},wu={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},ku={key:0,class:"nav-controls",role:"group","aria-label":"Timeline navigation"},Su=["disabled"],_u=["disabled"],Cu={key:1,class:"scale-controls",role:"group","aria-label":"Adjust timeline size"},Tu=["disabled"],Eu=["disabled"],xu=["aria-expanded"],Mu={key:0,id:"filter-panel",class:"filter-panel",role:"dialog","aria-label":"Composer filters"},Lu={class:"filter-panel__options"},zu=["onUpdate:modelValue","aria-label"],Au={class:"filter-panel__label"},Pu={class:"filter-panel__actions"},Ru={key:1,class:"about"},Iu={class:"about__card"},Fu={class:"about__title"},Hu={class:"about__text"},Nu={class:"about__text"},Ou={class:"about__author"},Wu={class:"about__author-body"},Bu={class:"about__author-label"},Du={class:"about__author-name"},Ku={class:"about__contributors"},ju={class:"about__contributors-title"},Vu={class:"about__contributors-list"},Gu={class:"about__contributors-name"},$u=["href"],Uu={class:"composer-modal__content"},Ju={class:"composer-modal__header"},qu={class:"composer-modal__titles"},Xu={class:"composer-modal__name"},Yu={key:0,class:"composer-modal__dates"},Zu={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},Qu=["disabled"],ed={class:"composer-modal__position"},nd=["disabled"],td={class:"composer-modal__body"},sd={key:0,class:"composer-modal__hero"},id=["src","alt"],rd={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},od=["disabled"],ad={class:"composer-modal__position"},ld=["disabled"],cd={class:"composer-modal__hero-meta"},ud={class:"composer-modal__name-small"},dd={key:0,class:"composer-modal__dates-small"},fd={class:"composer-modal__playlist"},hd={class:"composer-modal__playlist-header"},md={class:"composer-modal__playlist-title"},pd={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},gd=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],bd={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},vd={class:"composer-modal__description"},yd={key:0,class:"composer-modal__facts-title"},wd={key:1,class:"composer-modal__facts"},kd={class:"composer-modal__fact-text"},Sd={key:2,class:"composer-modal__muted"},Dt=25,xr=150,Ws=.2,Mr=1.5,_d=.35,Bs=1.7,Lr=.95,Cd=.6,Kt=2,jt=6,Td={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended Classics"},apply:"Apply"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Shibanova",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{factsTitles:{"antonio vivaldi":"Vivaldi kompakt"}},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden"}},ru:{label:"Ru",appTitle:"История классической музыки во времени",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Шибанова",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{factsTitles:{"antonio vivaldi":"Вивальди - кратко"}},filter:{groups:{essentials:"Главные фигуры",core:"Основная классика",expanded:"Расширенная классика"},apply:"Применить"}}},t=Object.keys(n),s=un("en"),i=ne(()=>n[s.value]||n.en),r=ne(()=>t.map(f=>({value:f,label:n[f]?.label||f.toUpperCase()}))),o=ne(()=>i.value.appTitle),a=ne(()=>i.value.languageLabel||"Language"),l=ne(()=>i.value.navigation||n.en.navigation),h=ne(()=>i.value.about||n.en.about),u=ne(()=>h.value.contributors||n.en.about.contributors||[]),p=ne(()=>i.value.eras||n.en.eras),S=ne(()=>i.value.composers||{}),C=ne(()=>{const f=S.value.names||{},m={};return Object.entries(f).forEach(([v,T])=>{m[U(v)]=T}),m}),z=ne(()=>{const f={};return Object.entries(k||{}).forEach(([m,v])=>{const T=U(m),O={};Object.entries(v||{}).forEach(([Y,pe])=>{pe&&(O[Y.toLowerCase()]=pe)}),f[T]=O}),f}),W=ne(()=>i.value.filter||n.en.filter),le=ne(()=>({essentials:W.value.groups?.essentials||"Essential Icons",core:W.value.groups?.core||"Core Classics",expanded:W.value.groups?.expanded||"Extended Classics"})),F=ne(()=>W.value.apply||"Apply"),A=ne(()=>{const f=S.value.descriptions||{},m={};return Object.entries(f).forEach(([v,T])=>{m[U(v)]=T}),m}),V=ne(()=>{const f=S.value.factsTitles||{},m={};return Object.entries(f).forEach(([v,T])=>{m[U(v)]=T}),m}),I=ne(()=>i.value.modal||n.en.modal),$=un(!1),re=un("composers"),te=[30,40,50,70,100],Z="".replace(/\/$/,""),H="https://soundcloud.com/dmitry-kotikov/sets/",K="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",E=new Set;function G(f,m,v){return Number.isNaN(f)?m:Math.min(v,Math.max(m,f))}function se(f){const m=G((f-Dt)/(xr-Dt),0,1),v=Math.pow(m,_d),T=Ws+(Mr-Ws)*v;return G(T,Ws,Mr)}function ve(f){const m=G((f-Dt)/(xr-Dt),0,1),v=Math.pow(m,Cd),T=Bs-(Bs-Lr)*v;return G(T,Lr,Bs)}const ee=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich"]}],Q=un(ee.reduce((f,m)=>(f[m.id]=!0,f),{})),q=un(!1),Le=ds({barHeight:te[Kt],widthScale:se(te[Kt]),fontScale:ve(te[Kt])}),De=un(Kt),we=ne(()=>De.value<=0),ye=ne(()=>De.value>=te.length-1),wn=un(!0),An=un(!1);function rt(f){const m=G(f,0,te.length-1);De.value=m;const v=te[m];Le.barHeight=v,Le.widthScale=se(v),Le.fontScale=ve(v)}function Qe(f){const m=f>0?1:-1;rt(De.value+m)}function en(){const f=document.getElementById("timeline");if(!f)return;const m=Math.max(0,f.scrollWidth-f.clientWidth),v=Math.max(0,f.scrollHeight-f.clientHeight);wn.value=f.scrollLeft<=jt&&f.scrollTop<=jt,An.value=f.scrollLeft>=m-jt&&f.scrollTop>=v-jt}function ot(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),en()}function At(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),en()}const Pn=ne(()=>{const f=ee.map(v=>v.id).filter(v=>Q.value[v]),m=new Set;return f.forEach(v=>{ee.find(O=>O.id===v)?.composers?.forEach(O=>m.add(O))}),m}),_i=ne(()=>{const f=Pn.value;return f.size?it.filter(m=>f.has(m.name)):[]}),c=ne(()=>[..._i.value].sort((f,m)=>f.birth-m.birth).map(f=>({...f,displayName:ke(f.name)}))),{descriptionsByLocale:d,playlistIdsByKey:g,namesByLocale:k}=Ke(cu),b=un(null),y=ne(()=>b.value!==null),_=ne(()=>b.value===null?null:c.value[b.value]),M=ne(()=>_.value?ke(_.value.name):""),x=ne(()=>_.value?Do(_.value.name):null),w=ne(()=>_.value?je(_.value.name):""),B=ne(()=>_.value?Rn(_.value.name):""),P=ne(()=>_.value?$o(_.value.name):[]),N=ne(()=>P.value.map(f=>Yo(f)).filter(Boolean)),D=ne(()=>{const f=N.value.filter(Boolean);return f.length?f:[K]}),X=ne(()=>(b.value??0)>0),oe=ne(()=>b.value!==null&&b.value<c.value.length-1);function U(f){return f.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function ke(f){const m=U(f),v=C.value[m];if(v)return v;const T=Ve(f),O=T[s.value];if(O)return O;if(T.en)return T.en;const Y=Object.values(T)[0];return Y||f}function Se(f){return le.value[f]||f}function Ke(f){const m=f.split(`
`),v={},T={},O={};let Y=null,pe=null,nn=null,He="en",be=[];const In=()=>{(Y||pe)&&[Y,pe].filter(Boolean).forEach(Ae=>{v[Ae]=v[Ae]||{},v[Ae][He]=be.join(`
`).trim(),nn&&(O[Ae]=nn)}),be=[],nn=null,pe=null};for(const _e of m){const Ae=_e.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Ae){In();const[,Ce,Fn,ln]=Ae;Y=U(ln||Ce),pe=U(Ce),He=(Fn||"en").toLowerCase(),nn=ln||null;continue}const $n=Y?_e.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if($n){const[,Ce,Fn]=$n,ln=(Ce||He||"en").toLowerCase(),ra=Fn.trim();[Y,pe].filter(Boolean).forEach(_s=>{T[_s]=T[_s]||{},T[_s][ln]=ra});continue}Y&&_e.startsWith("- ")&&be.push(_e.replace(/^- /,"").trim())}return In(),{descriptionsByLocale:v,playlistIdsByKey:O,namesByLocale:T}}function je(f){const m=ze(f),v=U(f),T=A.value[v];if(T)return T;const O=m[s.value];return O||(m.en?m.en:Object.values(m)[0]||"")}function Rn(f){const m=V.value[U(f)];return m||It(f)}function Pt(f,m){const v=U(m);if(f[v])return f[v];const T=v.split(" ").filter(Boolean),O=T[T.length-1];return O&&f[O]?f[O]:""}function ze(f){const m=U(f),v=m.split(" ").filter(Boolean),T=[m],O=v[v.length-1];O&&O!==m&&T.push(O);for(const Y of T)if(d[Y])return d[Y];return{}}function Ve(f){const m=U(f),v=m.split(" ").filter(Boolean),T=[m],O=v[v.length-1];O&&O!==m&&T.push(O);for(const Y of T)if(z.value[Y])return z.value[Y];return{}}function Rt(f){return U(f).replace(/\s+/g,"-").replace(/-+/g,"-")}function It(f){const m=String(f||"").trim().split(/\s+/).filter(Boolean);if(!m.length)return"";const v=m[m.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(v)&&m.length>=2?m[m.length-2]:v} essentials`}function $o(f){const m=[],v=Rt(f);v&&!m.includes(v)&&m.push(v);const T=Pt(g,f);return T&&!m.includes(T)&&m.push(T),m}function ws(f=window.location.pathname){re.value=f==="/about"?"about":"composers"}const Ci=()=>ws();function Ti(f){window.location.pathname!==f&&(history.pushState({},"",f),ws(f)),$.value=!1}function Ei(f){Ti(f==="about"?"/about":"/")}function Uo(){$.value=!$.value}function Jo(){$.value=!1}function qo(){q.value=!q.value}function Xo(){q.value=!1}function xi(){Ti("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function ks(f){const m=f.detail,v=m?.laneIndex;if(Number.isInteger(v)&&c.value[v]){b.value=v;return}const T=m?.composer?.name;if(!T)return;const O=c.value.findIndex(Y=>Y.name===T);O>=0&&(b.value=O)}function Mi(){b.value=null}function Li(){!X.value||b.value===null||(b.value-=1)}function zi(){!oe.value||b.value===null||(b.value+=1)}ps(()=>{const f=(()=>{try{return localStorage.getItem("timeline-language")}catch{return null}})();f&&t.includes(f)?s.value=f:navigator.language&&navigator.language.toLowerCase().startsWith("de")?s.value="de":navigator.language&&navigator.language.toLowerCase().startsWith("ru")&&(s.value="ru"),ws(),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(ks),window.addEventListener("popstate",Ci),window.addEventListener("composer-select",ks);const m=document.getElementById("timeline");m&&(m.addEventListener("scroll",en,{passive:!0}),en())}),gs(()=>{window.removeEventListener("popstate",Ci),window.removeEventListener("composer-select",ks);const f=document.getElementById("timeline");f&&f.removeEventListener("scroll",en)}),$e(o,f=>{f&&(document.title=f)},{immediate:!0}),$e(s,f=>{const m=t.includes(f)?f:"en";if(m!==f){s.value=m;return}try{localStorage.setItem("timeline-language",m)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(p.value)}),$e(y,async f=>{f?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await Zt(),D.value.length&&Pi()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",Ai())}),$e(b,f=>{const m=window.timeline;!m||typeof m.setSelectedLane!="function"||(Number.isInteger(f)?m.setSelectedLane(f):m.setSelectedLane(null))}),$e(D,async f=>{y.value&&(Ai(),await Zt(),f.length&&Pi())}),$e(()=>c.value.map(f=>f.name),f=>{if(b.value===null)return;const m=_.value;if(!m){b.value=null;return}const v=f.findIndex(T=>T===m.name);v===-1?b.value=null:b.value=v});function Ss(f){return f?Z?Z.endsWith("/")&&f.startsWith("/")?Z+f.slice(1):!Z.endsWith("/")&&!f.startsWith("/")?`${Z}/${f}`:Z+f:f:Z}function Yo(f){if(!f)return"";const m=H;if(!m)return"";const v=m.endsWith("/");return`${m}${v?"":"/"}${f}`}function Ai(){E.forEach(f=>{try{f.pause(),f.currentTime=0}catch(m){console.error("Failed to stop SoundCloud audio",m)}}),E.clear()}function Pi(f,m=document){const T=(m||document).querySelectorAll("[data-soundcloud-playlist]");T.length&&(T.length,T.forEach(O=>{Zo(O,()=>{})}))}async function Zo(f,m){const v=()=>{typeof m=="function"&&setTimeout(()=>m(),0)};if(!f||f.dataset.soundcloudReady==="true"||f.dataset.soundcloudReady==="loading"||f.dataset.soundcloudReady==="error"){v();return}const T=f.getAttribute("data-soundcloud-playlist"),O=f.getAttribute("data-soundcloud-playlist-alt")||"",Y=[T,...O.split("|")].map(He=>(He||"").trim()).filter(Boolean);if(!Y.length){v();return}f.dataset.soundcloudReady="loading",f.innerHTML='<div class="sc-player__status">Loading tracks from SoundCloud...</div>';let pe=null;for(const He of Y)try{const be=await ea(He),In=Array.isArray(be.tracks)&&be.tracks.length?be.tracks:be&&be.kind==="track"?[be]:[],_e=na(In);ia(f,_e,He),v();return}catch(be){if(pe=be,be&&be.status===429){Ri(f,He),v();return}}console.error("Failed to build SoundCloud player",pe);const nn=Y[0]||K;Ri(f,nn),v()}async function Qo(f){if(!f)throw new Error("No track provided");const m=f.media&&Array.isArray(f.media.transcodings)?f.media.transcodings:[];if(m.length){let v=m.find(T=>T&&T.format&&T.format.protocol==="progressive");if(v||(v=m[0]),v&&v.url)try{const T=await ta(v.url,f.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:f.id,transcodingUrl:v.url,finalUrl:T}),T}catch(T){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",T)}}if(!f.id)throw new Error("No track id provided");return sa(f.id,f.track_authorization)}async function ea(f){const m=Ss("/api/soundcloud/playlist")+`?url=${encodeURIComponent(f)}`,v=await fetch(m);if(!v.ok){const T=new Error(`SoundCloud playlist error: ${v.status}`);throw T.status=v.status,T.retryAfter=Number(v.headers?.get("Retry-After"))||void 0,T}return v.json()}function na(f=[]){return Array.isArray(f)?f.map((m,v)=>{if(!m)return null;const T=`Track ${v+1}`,Y=[m.title,m.publisher_metadata?.release_title,m.permalink,m.permalink_url,m.id?String(m.id):null].map(pe=>typeof pe=="string"?pe.trim():"").filter(Boolean)[0]||T;return{...m,title:Y}}).filter(Boolean):[]}async function ta(f,m){const v=Ss("/api/soundcloud/transcoding")+`?url=${encodeURIComponent(f)}${m?`&track_authorization=${encodeURIComponent(m)}`:""}`,T=await fetch(v);if(!T.ok){const Y=new Error(`SoundCloud transcoding error: ${T.status}`);throw Y.status=T.status,Y.retryAfter=Number(T.headers?.get("Retry-After"))||void 0,Y}const O=await T.json();if(!O?.url)throw new Error("Transcoding response missing url");return O.url}async function sa(f,m){const v=Ss(`/api/soundcloud/streams/${f}`)+(m?`?track_authorization=${encodeURIComponent(m)}`:""),T=await fetch(v);if(!T.ok){const Y=new Error(`SoundCloud stream error: ${T.status}`);throw Y.status=T.status,Y.retryAfter=Number(T.headers?.get("Retry-After"))||void 0,Y}const O=await T.json();if(!O?.url)throw new Error("Stream response missing url");return O.url}function Ri(f,m){const v=`https://w.soundcloud.com/player/?url=${encodeURIComponent(m)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;f.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${v}"
    ></iframe>
  `,f.dataset.soundcloudReady="true"}function ia(f,m,v){if(!Array.isArray(m)||!m.length){f.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',f.dataset.soundcloudReady="error";return}f.classList.add("sc-player");const T=document.createElement("div");T.className="sc-track-list";const O=document.createElement("audio");O.preload="none",E.add(O);let Y=null,pe=null,nn=!1;const He=(_e,Ae)=>{_e.dataset.state=Ae,_e.textContent=Ae==="playing"?"⏸":Ae==="loading"?"...":"▶"},be=_e=>He(_e,"idle"),In=()=>{pe&&be(pe),Y=null,pe=null};O.addEventListener("ended",In),O.addEventListener("pause",()=>{pe&&O.currentTime<(O.duration||1/0)&&be(pe)}),m.forEach((_e,Ae)=>{const $n=document.createElement("div");$n.className="sc-track";const Ce=document.createElement("button");Ce.type="button",Ce.className="sc-track__button",Ce.setAttribute("aria-label","Play track"),He(Ce,"idle");const Fn=document.createElement("div");Fn.className="sc-track__title",Fn.textContent=_e?.title||`Track ${Ae+1}`,$n.append(Ce,Fn),T.append($n),Ce.addEventListener("click",async()=>{if(!nn){if(Y===(_e?.id??Ae)&&!O.paused){O.pause(),be(Ce);return}nn=!0,He(Ce,"loading");try{const ln=await Qo(_e);if(!ln)throw new Error("No stream URL returned");O.src=ln,await O.play(),pe&&pe!==Ce&&be(pe),pe=Ce,Y=_e?.id??Ae,He(Ce,"playing")}catch(ln){console.error("Failed to play SoundCloud track",ln),be(Ce),f.dataset.soundcloudReady="error"}finally{nn=!1}}})}),f.innerHTML="",f.append(T,O),f.dataset.soundcloudReady="true"}return(f,m)=>(fe(),me("div",uu,[L("header",du,[L("button",{class:"menu-button",onClick:Uo,"aria-label":"Toggle navigation menu"},[...m[5]||(m[5]=[L("span",{class:"menu-icon"},null,-1)])]),L("img",{class:"logo",src:Oc,alt:"Logo",onClick:xi}),L("div",{class:"app-title",role:"button",onClick:xi},ce(o.value),1),L("div",fu,[L("label",hu,ce(a.value),1),Wi(L("select",{id:"language-select",class:"language-select","onUpdate:modelValue":m[0]||(m[0]=v=>s.value=v),"aria-label":a.value},[(fe(!0),me(Oe,null,Wt(r.value,v=>(fe(),me("option",{key:v.value,value:v.value},ce(v.label),9,pu))),128))],8,mu),[[Lc,s.value]])])]),L("aside",{class:Zn(["side-menu",{"side-menu--open":$.value}])},[L("nav",gu,[L("button",{class:Zn(["menu-item",{"menu-item--active":re.value==="composers"}]),onClick:m[1]||(m[1]=v=>Ei("composers"))},ce(l.value.composers),3),L("button",{class:Zn(["menu-item",{"menu-item--active":re.value==="about"}]),onClick:m[2]||(m[2]=v=>Ei("about"))},ce(l.value.about),3)])],2),$.value?(fe(),me("div",{key:0,class:"backdrop",onClick:Jo})):qe("",!0),L("main",bu,[re.value==="composers"?(fe(),me("section",vu,[L("div",yu,[L("div",wu,[q.value?qe("",!0):(fe(),me("div",ku,[L("button",{type:"button",class:"control-btn",disabled:wn.value,onClick:ot,"aria-label":"Jump to start of timeline"}," ⇤ ",8,Su),L("button",{type:"button",class:"control-btn",disabled:An.value,onClick:At,"aria-label":"Jump to end of timeline"}," ⇥ ",8,_u)])),q.value?qe("",!0):(fe(),me("div",Cu,[L("button",{type:"button",class:"control-btn",disabled:we.value,onClick:m[3]||(m[3]=v=>Qe(-1)),"aria-label":"Make timeline blocks smaller"}," − ",8,Tu),L("button",{type:"button",class:"control-btn",disabled:ye.value,onClick:m[4]||(m[4]=v=>Qe(1)),"aria-label":"Make timeline blocks larger"}," + ",8,Eu)])),L("button",{class:"filter-dock__toggle control-btn control-primary","aria-expanded":q.value,"aria-controls":"filter-panel",onClick:qo,"aria-label":"Filter composers"},[...m[6]||(m[6]=[L("svg",{class:"filter-icon",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[L("path",{d:"M3 5h18l-7 8v5l-4 2v-7L3 5z"})],-1)])],8,xu),xe(er,{name:"fade"},{default:$s(()=>[q.value?(fe(),me("div",Mu,[L("div",Lu,[(fe(),me(Oe,null,Wt(ee,v=>L("label",{key:v.id,class:"filter-panel__item"},[Wi(L("input",{"onUpdate:modelValue":T=>Q.value[v.id]=T,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${Se(v.id)}`},null,8,zu),[[Mc,Q.value[v.id]]]),L("span",Au,ce(Se(v.id)),1)])),64))]),L("div",Pu,[L("button",{type:"button",class:"filter-panel__ok control-btn",onClick:Xo,"aria-label":"Close filters"},ce(F.value),1)])])):qe("",!0)]),_:1})])]),xe(lu,{composers:c.value,settings:Le,"era-labels":p.value},null,8,["composers","settings","era-labels"])])):re.value==="about"?(fe(),me("section",Ru,[L("div",Iu,[m[10]||(m[10]=L("img",{class:"about__logo",src:Wc,alt:"Music logo",loading:"lazy"},null,-1)),L("h1",Fu,ce(h.value.title),1),L("p",Hu,ce(h.value.intro),1),L("p",Nu,ce(h.value.goal),1),L("div",Ou,[m[9]||(m[9]=L("img",{class:"about__photo",src:Bc,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),L("div",Wu,[L("div",Bu,ce(h.value.authorLabel),1),L("div",Du,ce(h.value.authorName),1),m[7]||(m[7]=L("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),m[8]||(m[8]=L("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),L("div",Ku,[L("div",ju,ce(h.value.contributorsTitle),1),L("ul",Vu,[(fe(!0),me(Oe,null,Wt(u.value,v=>(fe(),me("li",{key:v.url,class:"about__contributors-item"},[L("span",Gu,ce(v.name),1),L("a",{class:"about__contributors-link",href:v.url,target:"_blank",rel:"noreferrer"},ce(v.linkText),9,$u)]))),128))])])])])):qe("",!0)]),xe(er,{name:"fade"},{default:$s(()=>[y.value?(fe(),me("div",{key:0,class:"composer-modal",onClick:Pc(Mi,["self"])},[L("div",Uu,[L("header",Ju,[L("div",qu,[L("h2",Xu,ce(M.value),1),_.value?(fe(),me("p",Yu,ce(_.value.birth)+" — "+ce(_.value.death),1)):qe("",!0)]),L("div",Zu,[L("button",{class:"composer-modal__arrow",onClick:Li,disabled:!X.value,"aria-label":"Previous"}," ← ",8,Qu),L("span",ed,ce((b.value??0)+1)+" / "+ce(c.value.length),1),L("button",{class:"composer-modal__arrow",onClick:zi,disabled:!oe.value,"aria-label":"Next"}," → ",8,nd)]),L("button",{class:"composer-modal__close",onClick:Mi,"aria-label":"Close composer details"},"×")]),L("div",td,[x.value?(fe(),me("div",sd,[L("img",{class:"composer-modal__photo",src:x.value,alt:M.value},null,8,id),L("div",rd,[L("button",{class:"composer-modal__arrow",onClick:Li,disabled:!X.value,"aria-label":"Previous"}," ← ",8,od),L("span",ad,ce((b.value??0)+1)+" / "+ce(c.value.length),1),L("button",{class:"composer-modal__arrow",onClick:zi,disabled:!oe.value,"aria-label":"Next"}," → ",8,ld)]),L("div",cd,[L("div",ud,ce(M.value),1),_.value?(fe(),me("div",dd,ce(_.value.birth)+" — "+ce(_.value.death),1)):qe("",!0)])])):qe("",!0),L("div",fd,[L("div",hd,[L("div",md,ce(I.value.keyWorks),1),D.value.length?(fe(),me("a",pd,[...m[11]||(m[11]=[L("img",{class:"sc-powered__img",src:Dc,alt:"Powered by SoundCloud"},null,-1)])])):qe("",!0)]),D.value.length?(fe(),me("div",{key:D.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":D.value[0],"data-soundcloud-playlist-alt":D.value.slice(1).join("|")},[...m[12]||(m[12]=[L("div",{class:"sc-player__status"},"Loading tracks...",-1)])],8,gd)):(fe(),me("div",bd," Playlist will appear here soon. "))]),L("div",vd,[B.value?(fe(),me("div",yd,ce(B.value),1)):qe("",!0),w.value?(fe(),me("ul",wd,[(fe(!0),me(Oe,null,Wt(w.value.split(`
`),(v,T)=>(fe(),me("li",{key:T},[L("span",kd,ce(v),1)]))),128))])):(fe(),me("p",Sd,"No description yet."))])])])])):qe("",!0)]),_:1})]))}},Ed=Go(Td,[["__scopeId","data-v-7fcfb4b4"]]);Fc(Ed).mount("#app");
