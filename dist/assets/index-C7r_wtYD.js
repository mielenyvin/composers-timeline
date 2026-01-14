(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Ss(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const fe={},lt=[],mn=()=>{},ro=()=>!1,_i=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ts=e=>e.startsWith("onUpdate:"),xe=Object.assign,Cs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},sl=Object.prototype.hasOwnProperty,se=(e,n)=>sl.call(e,n),D=Array.isArray,ct=e=>Kt(e)==="[object Map]",gt=e=>Kt(e)==="[object Set]",lr=e=>Kt(e)==="[object Date]",j=e=>typeof e=="function",we=e=>typeof e=="string",pn=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",oo=e=>(ue(e)||j(e))&&j(e.then)&&j(e.catch),ao=Object.prototype.toString,Kt=e=>ao.call(e),rl=e=>Kt(e).slice(8,-1),lo=e=>Kt(e)==="[object Object]",Es=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xt=Ss(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Si=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},ol=/-\w/g,Hn=Si(e=>e.replace(ol,n=>n.slice(1).toUpperCase())),al=/\B([A-Z])/g,Qn=Si(e=>e.replace(al,"-$1").toLowerCase()),co=Si(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ki=Si(e=>e?`on${co(e)}`:""),Rn=(e,n)=>!Object.is(e,n),oi=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},uo=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},fo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},ll=e=>{const n=we(e)?Number(e):NaN;return isNaN(n)?e:n};let cr;const Ti=()=>cr||(cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ci(e){if(D(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=we(i)?fl(i):Ci(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(we(e)||ue(e))return e}const cl=/;(?![^(]*\))/g,ul=/:([^]+)/,dl=/\/\*[^]*?\*\//g;function fl(e){const n={};return e.replace(dl,"").split(cl).forEach(t=>{if(t){const i=t.split(ul);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function ut(e){let n="";if(we(e))n=e;else if(D(e))for(let t=0;t<e.length;t++){const i=ut(e[t]);i&&(n+=i+" ")}else if(ue(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const hl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ml=Ss(hl);function ho(e){return!!e||e===""}function pl(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=jt(e[i],n[i]);return t}function jt(e,n){if(e===n)return!0;let t=lr(e),i=lr(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=pn(e),i=pn(n),t||i)return e===n;if(t=D(e),i=D(n),t||i)return t&&i?pl(e,n):!1;if(t=ue(e),i=ue(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=n.hasOwnProperty(o);if(a&&!c||!a&&c||!jt(e[o],n[o]))return!1}}return String(e)===String(n)}function xs(e,n){return e.findIndex(t=>jt(t,n))}const mo=e=>!!(e&&e.__v_isRef===!0),te=e=>we(e)?e:e==null?"":D(e)||ue(e)&&(e.toString===ao||!j(e.toString))?mo(e)?te(e.value):JSON.stringify(e,po,2):String(e),po=(e,n)=>mo(n)?po(e,n.value):ct(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[ji(i,r)+" =>"]=s,t),{})}:gt(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ji(t))}:pn(n)?ji(n):ue(n)&&!D(n)&&!lo(n)?String(n):n,ji=(e,n="")=>{var t;return pn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let je;class gl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!n&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=je;try{return je=this,n()}finally{je=t}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bl(){return je}let he;const Vi=new WeakSet;class go{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vi.has(this)&&(Vi.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ur(this),yo(this);const n=he,t=rn;he=this,rn=!0;try{return this.fn()}finally{wo(this),he=n,rn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)zs(n);this.deps=this.depsTail=void 0,ur(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vi.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){os(this)&&this.run()}get dirty(){return os(this)}}let bo=0,Mt,Lt;function vo(e,n=!1){if(e.flags|=8,n){e.next=Lt,Lt=e;return}e.next=Mt,Mt=e}function Ms(){bo++}function Ls(){if(--bo>0)return;if(Lt){let n=Lt;for(Lt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Mt;){let n=Mt;for(Mt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function yo(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function wo(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),zs(i),vl(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function os(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(ko(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function ko(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===It)||(e.globalVersion=It,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!os(e))))return;e.flags|=2;const n=e.dep,t=he,i=rn;he=e,rn=!0;try{yo(e);const s=e.fn(e._value);(n.version===0||Rn(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{he=t,rn=i,wo(e),e.flags&=-3}}function zs(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)zs(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function vl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let rn=!0;const _o=[];function Sn(){_o.push(rn),rn=!1}function Tn(){const e=_o.pop();rn=e===void 0?!0:e}function ur(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=he;he=void 0;try{n()}finally{he=t}}}let It=0;class yl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class As{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!he||!rn||he===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==he)t=this.activeLink=new yl(he,this),he.deps?(t.prevDep=he.depsTail,he.depsTail.nextDep=t,he.depsTail=t):he.deps=he.depsTail=t,So(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=he.depsTail,t.nextDep=void 0,he.depsTail.nextDep=t,he.depsTail=t,he.deps===t&&(he.deps=i)}return t}trigger(n){this.version++,It++,this.notify(n)}notify(n){Ms();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ls()}}}function So(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)So(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const as=new WeakMap,Yn=Symbol(""),ls=Symbol(""),Rt=Symbol("");function Le(e,n,t){if(rn&&he){let i=as.get(e);i||as.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new As),s.map=i,s.key=t),s.track()}}function kn(e,n,t,i,s,r){const o=as.get(e);if(!o){It++;return}const a=c=>{c&&c.trigger()};if(Ms(),n==="clear")o.forEach(a);else{const c=D(e),m=c&&Es(t);if(c&&t==="length"){const d=Number(i);o.forEach((b,T)=>{(T==="length"||T===Rt||!pn(T)&&T>=d)&&a(b)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),m&&a(o.get(Rt)),n){case"add":c?m&&a(o.get("length")):(a(o.get(Yn)),ct(e)&&a(o.get(ls)));break;case"delete":c||(a(o.get(Yn)),ct(e)&&a(o.get(ls)));break;case"set":ct(e)&&a(o.get(Yn));break}}Ls()}function st(e){const n=ie(e);return n===e?n:(Le(n,"iterate",Rt),sn(e)?n:n.map(on))}function Ei(e){return Le(e=ie(e),"iterate",Rt),e}function Ln(e,n){return Cn(e)?Zn(e)?pt(on(n)):pt(n):on(n)}const wl={__proto__:null,[Symbol.iterator](){return Gi(this,Symbol.iterator,e=>Ln(this,e))},concat(...e){return st(this).concat(...e.map(n=>D(n)?st(n):n))},entries(){return Gi(this,"entries",e=>(e[1]=Ln(this,e[1]),e))},every(e,n){return bn(this,"every",e,n,void 0,arguments)},filter(e,n){return bn(this,"filter",e,n,t=>t.map(i=>Ln(this,i)),arguments)},find(e,n){return bn(this,"find",e,n,t=>Ln(this,t),arguments)},findIndex(e,n){return bn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return bn(this,"findLast",e,n,t=>Ln(this,t),arguments)},findLastIndex(e,n){return bn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return bn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Ui(this,"includes",e)},indexOf(...e){return Ui(this,"indexOf",e)},join(e){return st(this).join(e)},lastIndexOf(...e){return Ui(this,"lastIndexOf",e)},map(e,n){return bn(this,"map",e,n,void 0,arguments)},pop(){return St(this,"pop")},push(...e){return St(this,"push",e)},reduce(e,...n){return dr(this,"reduce",e,n)},reduceRight(e,...n){return dr(this,"reduceRight",e,n)},shift(){return St(this,"shift")},some(e,n){return bn(this,"some",e,n,void 0,arguments)},splice(...e){return St(this,"splice",e)},toReversed(){return st(this).toReversed()},toSorted(e){return st(this).toSorted(e)},toSpliced(...e){return st(this).toSpliced(...e)},unshift(...e){return St(this,"unshift",e)},values(){return Gi(this,"values",e=>Ln(this,e))}};function Gi(e,n,t){const i=Ei(e),s=i[n]();return i!==e&&!sn(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const kl=Array.prototype;function bn(e,n,t,i,s,r){const o=Ei(e),a=o!==e&&!sn(e),c=o[n];if(c!==kl[n]){const b=c.apply(e,r);return a?on(b):b}let m=t;o!==e&&(a?m=function(b,T){return t.call(this,Ln(e,b),T,e)}:t.length>2&&(m=function(b,T){return t.call(this,b,T,e)}));const d=c.call(o,m,i);return a&&s?s(d):d}function dr(e,n,t,i){const s=Ei(e);let r=t;return s!==e&&(sn(e)?t.length>3&&(r=function(o,a,c){return t.call(this,o,a,c,e)}):r=function(o,a,c){return t.call(this,o,Ln(e,a),c,e)}),s[n](r,...i)}function Ui(e,n,t){const i=ie(e);Le(i,"iterate",Rt);const s=i[n](...t);return(s===-1||s===!1)&&Is(t[0])?(t[0]=ie(t[0]),i[n](...t)):s}function St(e,n,t=[]){Sn(),Ms();const i=ie(e)[n].apply(e,t);return Ls(),Tn(),i}const _l=Ss("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pn));function Sl(e){pn(e)||(e=String(e));const n=ie(this);return Le(n,"has",e),n.hasOwnProperty(e)}class Co{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Fl:Lo:r?Mo:xo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const o=D(n);if(!s){let c;if(o&&(c=wl[t]))return c;if(t==="hasOwnProperty")return Sl}const a=Reflect.get(n,t,Ae(n)?n:i);if((pn(t)?To.has(t):_l(t))||(s||Le(n,"get",t),r))return a;if(Ae(a)){const c=o&&Es(t)?a:a.value;return s&&ue(c)?us(c):c}return ue(a)?s?us(a):dt(a):a}}class Eo extends Co{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const o=D(n)&&Es(t);if(!this._isShallow){const m=Cn(r);if(!sn(i)&&!Cn(i)&&(r=ie(r),i=ie(i)),!o&&Ae(r)&&!Ae(i))return m||(r.value=i),!0}const a=o?Number(t)<n.length:se(n,t),c=Reflect.set(n,t,i,Ae(n)?n:s);return n===ie(s)&&(a?Rn(i,r)&&kn(n,"set",t,i):kn(n,"add",t,i)),c}deleteProperty(n,t){const i=se(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&kn(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!pn(t)||!To.has(t))&&Le(n,"has",t),i}ownKeys(n){return Le(n,"iterate",D(n)?"length":Yn),Reflect.ownKeys(n)}}class Tl extends Co{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Cl=new Eo,El=new Tl,xl=new Eo(!0);const cs=e=>e,Yt=e=>Reflect.getPrototypeOf(e);function Ml(e,n,t){return function(...i){const s=this.__v_raw,r=ie(s),o=ct(r),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,m=s[e](...i),d=t?cs:n?pt:on;return!n&&Le(r,"iterate",c?ls:Yn),{next(){const{value:b,done:T}=m.next();return T?{value:b,done:T}:{value:a?[d(b[0]),d(b[1])]:d(b),done:T}},[Symbol.iterator](){return this}}}}function Zt(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Ll(e,n){const t={get(s){const r=this.__v_raw,o=ie(r),a=ie(s);e||(Rn(s,a)&&Le(o,"get",s),Le(o,"get",a));const{has:c}=Yt(o),m=n?cs:e?pt:on;if(c.call(o,s))return m(r.get(s));if(c.call(o,a))return m(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Le(ie(s),"iterate",Yn),s.size},has(s){const r=this.__v_raw,o=ie(r),a=ie(s);return e||(Rn(s,a)&&Le(o,"has",s),Le(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,c=ie(a),m=n?cs:e?pt:on;return!e&&Le(c,"iterate",Yn),a.forEach((d,b)=>s.call(r,m(d),m(b),o))}};return xe(t,e?{add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear")}:{add(s){!n&&!sn(s)&&!Cn(s)&&(s=ie(s));const r=ie(this);return Yt(r).has.call(r,s)||(r.add(s),kn(r,"add",s,s)),this},set(s,r){!n&&!sn(r)&&!Cn(r)&&(r=ie(r));const o=ie(this),{has:a,get:c}=Yt(o);let m=a.call(o,s);m||(s=ie(s),m=a.call(o,s));const d=c.call(o,s);return o.set(s,r),m?Rn(r,d)&&kn(o,"set",s,r):kn(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:a}=Yt(r);let c=o.call(r,s);c||(s=ie(s),c=o.call(r,s)),a&&a.call(r,s);const m=r.delete(s);return c&&kn(r,"delete",s,void 0),m},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&kn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ml(s,e,n)}),t}function Ps(e,n){const t=Ll(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(se(t,s)&&s in i?t:i,s,r)}const zl={get:Ps(!1,!1)},Al={get:Ps(!1,!0)},Pl={get:Ps(!0,!1)};const xo=new WeakMap,Mo=new WeakMap,Lo=new WeakMap,Fl=new WeakMap;function Il(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rl(e){return e.__v_skip||!Object.isExtensible(e)?0:Il(rl(e))}function dt(e){return Cn(e)?e:Fs(e,!1,Cl,zl,xo)}function Hl(e){return Fs(e,!1,xl,Al,Mo)}function us(e){return Fs(e,!0,El,Pl,Lo)}function Fs(e,n,t,i,s){if(!ue(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=Rl(e);if(r===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,r===2?i:t);return s.set(e,a),a}function Zn(e){return Cn(e)?Zn(e.__v_raw):!!(e&&e.__v_isReactive)}function Cn(e){return!!(e&&e.__v_isReadonly)}function sn(e){return!!(e&&e.__v_isShallow)}function Is(e){return e?!!e.__v_raw:!1}function ie(e){const n=e&&e.__v_raw;return n?ie(n):e}function Dl(e){return!se(e,"__v_skip")&&Object.isExtensible(e)&&uo(e,"__v_skip",!0),e}const on=e=>ue(e)?dt(e):e,pt=e=>ue(e)?us(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function Ee(e){return Nl(e,!1)}function Nl(e,n){return Ae(e)?e:new Ol(e,n)}class Ol{constructor(n,t){this.dep=new As,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ie(n),this._value=t?n:on(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||sn(n)||Cn(n);n=i?n:ie(n),Rn(n,t)&&(this._rawValue=n,this._value=i?n:on(n),this.dep.trigger())}}function Wl(e){return Ae(e)?e.value:e}const Bl={get:(e,n,t)=>n==="__v_raw"?e:Wl(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return Ae(s)&&!Ae(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function zo(e){return Zn(e)?e:new Proxy(e,Bl)}class Kl{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new As(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=It-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return vo(this,!0),!0}get value(){const n=this.dep.track();return ko(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function jl(e,n,t=!1){let i,s;return j(e)?i=e:(i=e.get,s=e.set),new Kl(i,s,t)}const Qt={},fi=new WeakMap;let Jn;function Vl(e,n=!1,t=Jn){if(t){let i=fi.get(t);i||fi.set(t,i=[]),i.push(e)}}function Gl(e,n,t=fe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:c}=t,m=I=>s?I:sn(I)||s===!1||s===0?_n(I,1):_n(I);let d,b,T,S,A=!1,O=!1;if(Ae(e)?(b=()=>e.value,A=sn(e)):Zn(e)?(b=()=>m(e),A=!0):D(e)?(O=!0,A=e.some(I=>Zn(I)||sn(I)),b=()=>e.map(I=>{if(Ae(I))return I.value;if(Zn(I))return m(I);if(j(I))return c?c(I,2):I()})):j(e)?n?b=c?()=>c(e,2):e:b=()=>{if(T){Sn();try{T()}finally{Tn()}}const I=Jn;Jn=d;try{return c?c(e,3,[S]):e(S)}finally{Jn=I}}:b=mn,n&&s){const I=b,X=s===!0?1/0:s;b=()=>_n(I(),X)}const re=bl(),B=()=>{d.stop(),re&&re.active&&Cs(re.effects,d)};if(r&&n){const I=n;n=(...X)=>{I(...X),B()}}let P=O?new Array(e.length).fill(Qt):Qt;const J=I=>{if(!(!(d.flags&1)||!d.dirty&&!I))if(n){const X=d.run();if(s||A||(O?X.some((pe,V)=>Rn(pe,P[V])):Rn(X,P))){T&&T();const pe=Jn;Jn=d;try{const V=[X,P===Qt?void 0:O&&P[0]===Qt?[]:P,S];P=X,c?c(n,3,V):n(...V)}finally{Jn=pe}}}else d.run()};return a&&a(J),d=new go(b),d.scheduler=o?()=>o(J,!1):J,S=I=>Vl(I,!1,d),T=d.onStop=()=>{const I=fi.get(d);if(I){if(c)c(I,4);else for(const X of I)X();fi.delete(d)}},n?i?J(!0):P=d.run():o?o(J.bind(null,!0),!0):d.run(),B.pause=d.pause.bind(d),B.resume=d.resume.bind(d),B.stop=B,B}function _n(e,n=1/0,t){if(n<=0||!ue(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ae(e))_n(e.value,n,t);else if(D(e))for(let i=0;i<e.length;i++)_n(e[i],n,t);else if(gt(e)||ct(e))e.forEach(i=>{_n(i,n,t)});else if(lo(e)){for(const i in e)_n(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&_n(e[i],n,t)}return e}function Vt(e,n,t,i){try{return i?e(...i):e()}catch(s){xi(s,n,t)}}function an(e,n,t,i){if(j(e)){const s=Vt(e,n,t,i);return s&&oo(s)&&s.catch(r=>{xi(r,n,t)}),s}if(D(e)){const s=[];for(let r=0;r<e.length;r++)s.push(an(e[r],n,t,i));return s}}function xi(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||fe;if(n){let a=n.parent;const c=n.proxy,m=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let b=0;b<d.length;b++)if(d[b](e,c,m)===!1)return}a=a.parent}if(r){Sn(),Vt(r,null,10,[e,c,m]),Tn();return}}Ul(e,t,s,i,o)}function Ul(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const De=[];let fn=-1;const ft=[];let zn=null,at=0;const Ao=Promise.resolve();let hi=null;function en(e){const n=hi||Ao;return e?n.then(this?e.bind(this):e):n}function $l(e){let n=fn+1,t=De.length;for(;n<t;){const i=n+t>>>1,s=De[i],r=Ht(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function Rs(e){if(!(e.flags&1)){const n=Ht(e),t=De[De.length-1];!t||!(e.flags&2)&&n>=Ht(t)?De.push(e):De.splice($l(n),0,e),e.flags|=1,Po()}}function Po(){hi||(hi=Ao.then(Io))}function Jl(e){D(e)?ft.push(...e):zn&&e.id===-1?zn.splice(at+1,0,e):e.flags&1||(ft.push(e),e.flags|=1),Po()}function fr(e,n,t=fn+1){for(;t<De.length;t++){const i=De[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;De.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Fo(e){if(ft.length){const n=[...new Set(ft)].sort((t,i)=>Ht(t)-Ht(i));if(ft.length=0,zn){zn.push(...n);return}for(zn=n,at=0;at<zn.length;at++){const t=zn[at];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}zn=null,at=0}}const Ht=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Io(e){try{for(fn=0;fn<De.length;fn++){const n=De[fn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Vt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;fn<De.length;fn++){const n=De[fn];n&&(n.flags&=-2)}fn=-1,De.length=0,Fo(),hi=null,(De.length||ft.length)&&Io()}}let tn=null,Ro=null;function mi(e){const n=tn;return tn=e,Ro=e&&e.type.__scopeId||null,n}function ds(e,n=tn,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&bi(-1);const r=mi(n);let o;try{o=e(...s)}finally{mi(r),i._d&&bi(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function $i(e,n){if(tn===null)return e;const t=Ii(tn),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,o,a,c=fe]=n[s];r&&(j(r)&&(r={mounted:r,updated:r}),r.deep&&_n(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function Vn(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let c=a.dir[i];c&&(Sn(),an(c,t,8,[e.el,a,e,n]),Tn())}}const ql=Symbol("_vte"),Ho=e=>e.__isTeleport,wn=Symbol("_leaveCb"),ei=Symbol("_enterCb");function Xl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zi(()=>{e.isMounted=!0}),Ai(()=>{e.isUnmounting=!0}),e}const Qe=[Function,Array],Do={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},No=e=>{const n=e.subTree;return n.component?No(n.component):n},Yl={name:"BaseTransition",props:Do,setup(e,{slots:n}){const t=ua(),i=Xl();return()=>{const s=n.default&&Bo(n.default(),!0);if(!s||!s.length)return;const r=Oo(s),o=ie(e),{mode:a}=o;if(i.isLeaving)return Ji(r);const c=hr(r);if(!c)return Ji(r);let m=fs(c,o,i,t,b=>m=b);c.type!==Ne&&Dt(c,m);let d=t.subTree&&hr(t.subTree);if(d&&d.type!==Ne&&!qn(d,c)&&No(t).type!==Ne){let b=fs(d,o,i,t);if(Dt(d,b),a==="out-in"&&c.type!==Ne)return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete b.afterLeave,d=void 0},Ji(r);a==="in-out"&&c.type!==Ne?b.delayLeave=(T,S,A)=>{const O=Wo(i,d);O[String(d.key)]=d,T[wn]=()=>{S(),T[wn]=void 0,delete m.delayedLeave,d=void 0},m.delayedLeave=()=>{A(),delete m.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function Oo(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Ne){n=t;break}}return n}const Zl=Yl;function Wo(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function fs(e,n,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:m,onAfterEnter:d,onEnterCancelled:b,onBeforeLeave:T,onLeave:S,onAfterLeave:A,onLeaveCancelled:O,onBeforeAppear:re,onAppear:B,onAfterAppear:P,onAppearCancelled:J}=n,I=String(e.key),X=Wo(t,e),pe=(W,G)=>{W&&an(W,i,9,G)},V=(W,G)=>{const K=G[1];pe(W,G),D(W)?W.every(L=>L.length<=1)&&K():W.length<=1&&K()},Q={mode:o,persisted:a,beforeEnter(W){let G=c;if(!t.isMounted)if(r)G=re||c;else return;W[wn]&&W[wn](!0);const K=X[I];K&&qn(e,K)&&K.el[wn]&&K.el[wn](),pe(G,[W])},enter(W){let G=m,K=d,L=b;if(!t.isMounted)if(r)G=B||m,K=P||d,L=J||b;else return;let Y=!1;const me=W[ei]=ye=>{Y||(Y=!0,ye?pe(L,[W]):pe(K,[W]),Q.delayedLeave&&Q.delayedLeave(),W[ei]=void 0)};G?V(G,[W,me]):me()},leave(W,G){const K=String(e.key);if(W[ei]&&W[ei](!0),t.isUnmounting)return G();pe(T,[W]);let L=!1;const Y=W[wn]=me=>{L||(L=!0,G(),me?pe(O,[W]):pe(A,[W]),W[wn]=void 0,X[K]===e&&delete X[K])};X[K]=e,S?V(S,[W,Y]):Y()},clone(W){const G=fs(W,n,t,i,s);return s&&s(G),G}};return Q}function Ji(e){if(Mi(e))return e=Dn(e),e.children=null,e}function hr(e){if(!Mi(e))return Ho(e.type)&&e.children?Oo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&j(t.default))return t.default()}}function Dt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Dt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Bo(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Ve?(o.patchFlag&128&&s++,i=i.concat(Bo(o.children,n,a))):(n||o.type!==Ne)&&i.push(a!=null?Dn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ko(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const pi=new WeakMap;function zt(e,n,t,i,s=!1){if(D(e)){e.forEach((A,O)=>zt(A,n&&(D(n)?n[O]:n),t,i,s));return}if(At(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zt(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?Ii(i.component):i.el,o=s?null:r,{i:a,r:c}=e,m=n&&n.r,d=a.refs===fe?a.refs={}:a.refs,b=a.setupState,T=ie(b),S=b===fe?ro:A=>se(T,A);if(m!=null&&m!==c){if(mr(n),we(m))d[m]=null,S(m)&&(b[m]=null);else if(Ae(m)){m.value=null;const A=n;A.k&&(d[A.k]=null)}}if(j(c))Vt(c,a,12,[o,d]);else{const A=we(c),O=Ae(c);if(A||O){const re=()=>{if(e.f){const B=A?S(c)?b[c]:d[c]:c.value;if(s)D(B)&&Cs(B,r);else if(D(B))B.includes(r)||B.push(r);else if(A)d[c]=[r],S(c)&&(b[c]=d[c]);else{const P=[r];c.value=P,e.k&&(d[e.k]=P)}}else A?(d[c]=o,S(c)&&(b[c]=o)):O&&(c.value=o,e.k&&(d[e.k]=o))};if(o){const B=()=>{re(),pi.delete(e)};B.id=-1,pi.set(e,B),Je(B,t)}else mr(e),re()}}}function mr(e){const n=pi.get(e);n&&(n.flags|=8,pi.delete(e))}Ti().requestIdleCallback;Ti().cancelIdleCallback;const At=e=>!!e.type.__asyncLoader,Mi=e=>e.type.__isKeepAlive;function Ql(e,n){jo(e,"a",n)}function ec(e,n){jo(e,"da",n)}function jo(e,n,t=Oe){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Li(n,i,t),t){let s=t.parent;for(;s&&s.parent;)Mi(s.parent.vnode)&&nc(i,n,t,s),s=s.parent}}function nc(e,n,t,i){const s=Li(n,e,i,!0);Vo(()=>{Cs(i[n],s)},t)}function Li(e,n,t=Oe,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{Sn();const a=Gt(t),c=an(n,t,e,o);return a(),Tn(),c});return i?s.unshift(r):s.push(r),r}}const En=e=>(n,t=Oe)=>{(!Ot||e==="sp")&&Li(e,(...i)=>n(...i),t)},tc=En("bm"),zi=En("m"),ic=En("bu"),sc=En("u"),Ai=En("bum"),Vo=En("um"),rc=En("sp"),oc=En("rtg"),ac=En("rtc");function lc(e,n=Oe){Li("ec",e,n)}const cc=Symbol.for("v-ndc");function ni(e,n,t,i){let s;const r=t,o=D(e);if(o||we(e)){const a=o&&Zn(e);let c=!1,m=!1;a&&(c=!sn(e),m=Cn(e),e=Ei(e)),s=new Array(e.length);for(let d=0,b=e.length;d<b;d++)s[d]=n(c?m?pt(on(e[d])):on(e[d]):e[d],d,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=n(a+1,a,void 0,r)}else if(ue(e))if(e[Symbol.iterator])s=Array.from(e,(a,c)=>n(a,c,void 0,r));else{const a=Object.keys(e);s=new Array(a.length);for(let c=0,m=a.length;c<m;c++){const d=a[c];s[c]=n(e[d],d,c,r)}}else s=[];return s}const hs=e=>e?da(e)?Ii(e):hs(e.parent):null,Pt=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hs(e.parent),$root:e=>hs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Uo(e),$forceUpdate:e=>e.f||(e.f=()=>{Rs(e.update)}),$nextTick:e=>e.n||(e.n=en.bind(e.proxy)),$watch:e=>kc.bind(e)}),qi=(e,n)=>e!==fe&&!e.__isScriptSetup&&se(e,n),uc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:c}=e;if(n[0]!=="$"){const T=o[n];if(T!==void 0)switch(T){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(qi(i,n))return o[n]=1,i[n];if(s!==fe&&se(s,n))return o[n]=2,s[n];if(se(r,n))return o[n]=3,r[n];if(t!==fe&&se(t,n))return o[n]=4,t[n];ms&&(o[n]=0)}}const m=Pt[n];let d,b;if(m)return n==="$attrs"&&Le(e.attrs,"get",""),m(e);if((d=a.__cssModules)&&(d=d[n]))return d;if(t!==fe&&se(t,n))return o[n]=4,t[n];if(b=c.config.globalProperties,se(b,n))return b[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return qi(s,n)?(s[n]=t,!0):i!==fe&&se(i,n)?(i[n]=t,!0):se(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let c;return!!(t[a]||e!==fe&&a[0]!=="$"&&se(e,a)||qi(n,a)||se(r,a)||se(i,a)||se(Pt,a)||se(s.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:se(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function pr(e){return D(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let ms=!0;function dc(e){const n=Uo(e),t=e.proxy,i=e.ctx;ms=!1,n.beforeCreate&&gr(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:c,inject:m,created:d,beforeMount:b,mounted:T,beforeUpdate:S,updated:A,activated:O,deactivated:re,beforeDestroy:B,beforeUnmount:P,destroyed:J,unmounted:I,render:X,renderTracked:pe,renderTriggered:V,errorCaptured:Q,serverPrefetch:W,expose:G,inheritAttrs:K,components:L,directives:Y,filters:me}=n;if(m&&fc(m,i,null),o)for(const q in o){const ee=o[q];j(ee)&&(i[q]=ee.bind(t))}if(s){const q=s.call(t,t);ue(q)&&(e.data=dt(q))}if(ms=!0,r)for(const q in r){const ee=r[q],Ge=j(ee)?ee.bind(t,t):j(ee.get)?ee.get.bind(t,t):mn,Nn=!j(ee)&&j(ee.set)?ee.set.bind(t):mn,ln=U({get:Ge,set:Nn});Object.defineProperty(i,q,{enumerable:!0,configurable:!0,get:()=>ln.value,set:Pe=>ln.value=Pe})}if(a)for(const q in a)Go(a[q],i,t,q);if(c){const q=j(c)?c.call(t):c;Reflect.ownKeys(q).forEach(ee=>{vc(ee,q[ee])})}d&&gr(d,e,"c");function ge(q,ee){D(ee)?ee.forEach(Ge=>q(Ge.bind(t))):ee&&q(ee.bind(t))}if(ge(tc,b),ge(zi,T),ge(ic,S),ge(sc,A),ge(Ql,O),ge(ec,re),ge(lc,Q),ge(ac,pe),ge(oc,V),ge(Ai,P),ge(Vo,I),ge(rc,W),D(G))if(G.length){const q=e.exposed||(e.exposed={});G.forEach(ee=>{Object.defineProperty(q,ee,{get:()=>t[ee],set:Ge=>t[ee]=Ge,enumerable:!0})})}else e.exposed||(e.exposed={});X&&e.render===mn&&(e.render=X),K!=null&&(e.inheritAttrs=K),L&&(e.components=L),Y&&(e.directives=Y),W&&Ko(e)}function fc(e,n,t=mn){D(e)&&(e=ps(e));for(const i in e){const s=e[i];let r;ue(s)?"default"in s?r=ai(s.from||i,s.default,!0):r=ai(s.from||i):r=ai(s),Ae(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[i]=r}}function gr(e,n,t){an(D(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function Go(e,n,t,i){let s=i.includes(".")?qo(t,i):()=>t[i];if(we(e)){const r=n[e];j(r)&&nn(s,r)}else if(j(e))nn(s,e.bind(t));else if(ue(e))if(D(e))e.forEach(r=>Go(r,n,t,i));else{const r=j(e.handler)?e.handler.bind(t):n[e.handler];j(r)&&nn(s,r,e)}}function Uo(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(n);let c;return a?c=a:!s.length&&!t&&!i?c=n:(c={},s.length&&s.forEach(m=>gi(c,m,o,!0)),gi(c,n,o)),ue(n)&&r.set(n,c),c}function gi(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&gi(e,r,t,!0),s&&s.forEach(o=>gi(e,o,t,!0));for(const o in n)if(!(i&&o==="expose")){const a=hc[o]||t&&t[o];e[o]=a?a(e[o],n[o]):n[o]}return e}const hc={data:br,props:vr,emits:vr,methods:Ct,computed:Ct,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Ct,directives:Ct,watch:pc,provide:br,inject:mc};function br(e,n){return n?e?function(){return xe(j(e)?e.call(this,this):e,j(n)?n.call(this,this):n)}:n:e}function mc(e,n){return Ct(ps(e),ps(n))}function ps(e){if(D(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function He(e,n){return e?[...new Set([].concat(e,n))]:n}function Ct(e,n){return e?xe(Object.create(null),e,n):n}function vr(e,n){return e?D(e)&&D(n)?[...new Set([...e,...n])]:xe(Object.create(null),pr(e),pr(n??{})):n}function pc(e,n){if(!e)return n;if(!n)return e;const t=xe(Object.create(null),e);for(const i in n)t[i]=He(e[i],n[i]);return t}function $o(){return{app:null,config:{isNativeTag:ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gc=0;function bc(e,n){return function(i,s=null){j(i)||(i=xe({},i)),s!=null&&!ue(s)&&(s=null);const r=$o(),o=new WeakSet,a=[];let c=!1;const m=r.app={_uid:gc++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:nu,get config(){return r.config},set config(d){},use(d,...b){return o.has(d)||(d&&j(d.install)?(o.add(d),d.install(m,...b)):j(d)&&(o.add(d),d(m,...b))),m},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),m},component(d,b){return b?(r.components[d]=b,m):r.components[d]},directive(d,b){return b?(r.directives[d]=b,m):r.directives[d]},mount(d,b,T){if(!c){const S=m._ceVNode||ze(i,s);return S.appContext=r,T===!0?T="svg":T===!1&&(T=void 0),e(S,d,T),c=!0,m._container=d,d.__vue_app__=m,Ii(S.component)}},onUnmount(d){a.push(d)},unmount(){c&&(an(a,m._instance,16),e(null,m._container),delete m._container.__vue_app__)},provide(d,b){return r.provides[d]=b,m},runWithContext(d){const b=ht;ht=m;try{return d()}finally{ht=b}}};return m}}let ht=null;function vc(e,n){if(Oe){let t=Oe.provides;const i=Oe.parent&&Oe.parent.provides;i===t&&(t=Oe.provides=Object.create(i)),t[e]=n}}function ai(e,n,t=!1){const i=ua();if(i||ht){let s=ht?ht._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&j(n)?n.call(i&&i.proxy):n}}const yc=Symbol.for("v-scx"),wc=()=>ai(yc);function nn(e,n,t){return Jo(e,n,t)}function Jo(e,n,t=fe){const{immediate:i,deep:s,flush:r,once:o}=t,a=xe({},t),c=n&&i||!n&&r!=="post";let m;if(Ot){if(r==="sync"){const S=wc();m=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=mn,S.resume=mn,S.pause=mn,S}}const d=Oe;a.call=(S,A,O)=>an(S,d,A,O);let b=!1;r==="post"?a.scheduler=S=>{Je(S,d&&d.suspense)}:r!=="sync"&&(b=!0,a.scheduler=(S,A)=>{A?S():Rs(S)}),a.augmentJob=S=>{n&&(S.flags|=4),b&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const T=Gl(e,n,a);return Ot&&(m?m.push(T):c&&T()),T}function kc(e,n,t){const i=this.proxy,s=we(e)?e.includes(".")?qo(i,e):()=>i[e]:e.bind(i,i);let r;j(n)?r=n:(r=n.handler,t=n);const o=Gt(this),a=Jo(s,r.bind(i),t);return o(),a}function qo(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const _c=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Hn(n)}Modifiers`]||e[`${Qn(n)}Modifiers`];function Sc(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||fe;let s=t;const r=n.startsWith("update:"),o=r&&_c(i,n.slice(7));o&&(o.trim&&(s=t.map(d=>we(d)?d.trim():d)),o.number&&(s=t.map(fo)));let a,c=i[a=Ki(n)]||i[a=Ki(Hn(n))];!c&&r&&(c=i[a=Ki(Qn(n))]),c&&an(c,e,6,s);const m=i[a+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,an(m,e,6,s)}}const Tc=new WeakMap;function Xo(e,n,t=!1){const i=t?Tc:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!j(e)){const c=m=>{const d=Xo(m,n,!0);d&&(a=!0,xe(o,d))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!a?(ue(e)&&i.set(e,null),null):(D(r)?r.forEach(c=>o[c]=null):xe(o,r),ue(e)&&i.set(e,o),o)}function Pi(e,n){return!e||!_i(n)?!1:(n=n.slice(2).replace(/Once$/,""),se(e,n[0].toLowerCase()+n.slice(1))||se(e,Qn(n))||se(e,n))}function yr(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:c,render:m,renderCache:d,props:b,data:T,setupState:S,ctx:A,inheritAttrs:O}=e,re=mi(e);let B,P;try{if(t.shapeFlag&4){const I=s||i,X=I;B=hn(m.call(X,I,d,b,S,T,A)),P=a}else{const I=n;B=hn(I.length>1?I(b,{attrs:a,slots:o,emit:c}):I(b,null)),P=n.props?a:Cc(a)}}catch(I){Ft.length=0,xi(I,e,1),B=ze(Ne)}let J=B;if(P&&O!==!1){const I=Object.keys(P),{shapeFlag:X}=J;I.length&&X&7&&(r&&I.some(Ts)&&(P=Ec(P,r)),J=Dn(J,P,!1,!0))}return t.dirs&&(J=Dn(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(t.dirs):t.dirs),t.transition&&Dt(J,t.transition),B=J,mi(re),B}const Cc=e=>{let n;for(const t in e)(t==="class"||t==="style"||_i(t))&&((n||(n={}))[t]=e[t]);return n},Ec=(e,n)=>{const t={};for(const i in e)(!Ts(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function xc(e,n,t){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:c}=n,m=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?wr(i,o,m):!!o;if(c&8){const d=n.dynamicProps;for(let b=0;b<d.length;b++){const T=d[b];if(o[T]!==i[T]&&!Pi(m,T))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wr(i,o,m):!0:!!o;return!1}function wr(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!Pi(t,r))return!0}return!1}function Mc({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const Yo={},Zo=()=>Object.create(Yo),Qo=e=>Object.getPrototypeOf(e)===Yo;function Lc(e,n,t,i=!1){const s={},r=Zo();e.propsDefaults=Object.create(null),ea(e,n,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);t?e.props=i?s:Hl(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function zc(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=ie(s),[c]=e.propsOptions;let m=!1;if((i||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let b=0;b<d.length;b++){let T=d[b];if(Pi(e.emitsOptions,T))continue;const S=n[T];if(c)if(se(r,T))S!==r[T]&&(r[T]=S,m=!0);else{const A=Hn(T);s[A]=gs(c,a,A,S,e,!1)}else S!==r[T]&&(r[T]=S,m=!0)}}}else{ea(e,n,s,r)&&(m=!0);let d;for(const b in a)(!n||!se(n,b)&&((d=Qn(b))===b||!se(n,d)))&&(c?t&&(t[b]!==void 0||t[d]!==void 0)&&(s[b]=gs(c,a,b,void 0,e,!0)):delete s[b]);if(r!==a)for(const b in r)(!n||!se(n,b))&&(delete r[b],m=!0)}m&&kn(e.attrs,"set","")}function ea(e,n,t,i){const[s,r]=e.propsOptions;let o=!1,a;if(n)for(let c in n){if(xt(c))continue;const m=n[c];let d;s&&se(s,d=Hn(c))?!r||!r.includes(d)?t[d]=m:(a||(a={}))[d]=m:Pi(e.emitsOptions,c)||(!(c in i)||m!==i[c])&&(i[c]=m,o=!0)}if(r){const c=ie(t),m=a||fe;for(let d=0;d<r.length;d++){const b=r[d];t[b]=gs(s,c,b,m[b],e,!se(m,b))}}return o}function gs(e,n,t,i,s,r){const o=e[t];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:m}=s;if(t in m)i=m[t];else{const d=Gt(s);i=m[t]=c.call(null,n),d()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Qn(t))&&(i=!0))}return i}const Ac=new WeakMap;function na(e,n,t=!1){const i=t?Ac:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let c=!1;if(!j(e)){const d=b=>{c=!0;const[T,S]=na(b,n,!0);xe(o,T),S&&a.push(...S)};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!c)return ue(e)&&i.set(e,lt),lt;if(D(r))for(let d=0;d<r.length;d++){const b=Hn(r[d]);kr(b)&&(o[b]=fe)}else if(r)for(const d in r){const b=Hn(d);if(kr(b)){const T=r[d],S=o[b]=D(T)||j(T)?{type:T}:xe({},T),A=S.type;let O=!1,re=!0;if(D(A))for(let B=0;B<A.length;++B){const P=A[B],J=j(P)&&P.name;if(J==="Boolean"){O=!0;break}else J==="String"&&(re=!1)}else O=j(A)&&A.name==="Boolean";S[0]=O,S[1]=re,(O||se(S,"default"))&&a.push(b)}}const m=[o,a];return ue(e)&&i.set(e,m),m}function kr(e){return e[0]!=="$"&&!xt(e)}const Hs=e=>e==="_"||e==="_ctx"||e==="$stable",Ds=e=>D(e)?e.map(hn):[hn(e)],Pc=(e,n,t)=>{if(n._n)return n;const i=ds((...s)=>Ds(n(...s)),t);return i._c=!1,i},ta=(e,n,t)=>{const i=e._ctx;for(const s in e){if(Hs(s))continue;const r=e[s];if(j(r))n[s]=Pc(s,r,i);else if(r!=null){const o=Ds(r);n[s]=()=>o}}},ia=(e,n)=>{const t=Ds(n);e.slots.default=()=>t},sa=(e,n,t)=>{for(const i in n)(t||!Hs(i))&&(e[i]=n[i])},Fc=(e,n,t)=>{const i=e.slots=Zo();if(e.vnode.shapeFlag&32){const s=n._;s?(sa(i,n,t),t&&uo(i,"_",s,!0)):ta(n,i)}else n&&ia(e,n)},Ic=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,o=fe;if(i.shapeFlag&32){const a=n._;a?t&&a===1?r=!1:sa(s,n,t):(r=!n.$stable,ta(n,s)),o=n}else n&&(ia(e,n),o={default:1});if(r)for(const a in s)!Hs(a)&&o[a]==null&&delete s[a]},Je=Oc;function Rc(e){return Hc(e)}function Hc(e,n){const t=Ti();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:c,setText:m,setElementText:d,parentNode:b,nextSibling:T,setScopeId:S=mn,insertStaticContent:A}=e,O=(u,h,p,w=null,y=null,v=null,M=void 0,E=null,C=!!h.dynamicChildren)=>{if(u===h)return;u&&!qn(u,h)&&(w=Fe(u),Pe(u,y,v,!0),u=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:_,ref:H,shapeFlag:z}=h;switch(_){case Fi:re(u,h,p,w);break;case Ne:B(u,h,p,w);break;case Yi:u==null&&P(h,p,w,M);break;case Ve:L(u,h,p,w,y,v,M,E,C);break;default:z&1?X(u,h,p,w,y,v,M,E,C):z&6?Y(u,h,p,w,y,v,M,E,C):(z&64||z&128)&&_.process(u,h,p,w,y,v,M,E,C,Ie)}H!=null&&y?zt(H,u&&u.ref,v,h||u,!h):H==null&&u&&u.ref!=null&&zt(u.ref,null,v,u,!0)},re=(u,h,p,w)=>{if(u==null)i(h.el=a(h.children),p,w);else{const y=h.el=u.el;h.children!==u.children&&m(y,h.children)}},B=(u,h,p,w)=>{u==null?i(h.el=c(h.children||""),p,w):h.el=u.el},P=(u,h,p,w)=>{[u.el,u.anchor]=A(u.children,h,p,w,u.el,u.anchor)},J=({el:u,anchor:h},p,w)=>{let y;for(;u&&u!==h;)y=T(u),i(u,p,w),u=y;i(h,p,w)},I=({el:u,anchor:h})=>{let p;for(;u&&u!==h;)p=T(u),s(u),u=p;s(h)},X=(u,h,p,w,y,v,M,E,C)=>{if(h.type==="svg"?M="svg":h.type==="math"&&(M="mathml"),u==null)pe(h,p,w,y,v,M,E,C);else{const _=u.el&&u.el._isVueCE?u.el:null;try{_&&_._beginPatch(),W(u,h,y,v,M,E,C)}finally{_&&_._endPatch()}}},pe=(u,h,p,w,y,v,M,E)=>{let C,_;const{props:H,shapeFlag:z,transition:R,dirs:N}=u;if(C=u.el=o(u.type,v,H&&H.is,H),z&8?d(C,u.children):z&16&&Q(u.children,C,null,w,y,Xi(u,v),M,E),N&&Vn(u,null,w,"created"),V(C,u,u.scopeId,M,w),H){for(const ae in H)ae!=="value"&&!xt(ae)&&r(C,ae,null,H[ae],v,w);"value"in H&&r(C,"value",null,H.value,v),(_=H.onVnodeBeforeMount)&&un(_,w,u)}N&&Vn(u,null,w,"beforeMount");const Z=Dc(y,R);Z&&R.beforeEnter(C),i(C,h,p),((_=H&&H.onVnodeMounted)||Z||N)&&Je(()=>{_&&un(_,w,u),Z&&R.enter(C),N&&Vn(u,null,w,"mounted")},y)},V=(u,h,p,w,y)=>{if(p&&S(u,p),w)for(let v=0;v<w.length;v++)S(u,w[v]);if(y){let v=y.subTree;if(h===v||aa(v.type)&&(v.ssContent===h||v.ssFallback===h)){const M=y.vnode;V(u,M,M.scopeId,M.slotScopeIds,y.parent)}}},Q=(u,h,p,w,y,v,M,E,C=0)=>{for(let _=C;_<u.length;_++){const H=u[_]=E?An(u[_]):hn(u[_]);O(null,H,h,p,w,y,v,M,E)}},W=(u,h,p,w,y,v,M)=>{const E=h.el=u.el;let{patchFlag:C,dynamicChildren:_,dirs:H}=h;C|=u.patchFlag&16;const z=u.props||fe,R=h.props||fe;let N;if(p&&Gn(p,!1),(N=R.onVnodeBeforeUpdate)&&un(N,p,h,u),H&&Vn(h,u,p,"beforeUpdate"),p&&Gn(p,!0),(z.innerHTML&&R.innerHTML==null||z.textContent&&R.textContent==null)&&d(E,""),_?G(u.dynamicChildren,_,E,p,w,Xi(h,y),v):M||ee(u,h,E,null,p,w,Xi(h,y),v,!1),C>0){if(C&16)K(E,z,R,p,y);else if(C&2&&z.class!==R.class&&r(E,"class",null,R.class,y),C&4&&r(E,"style",z.style,R.style,y),C&8){const Z=h.dynamicProps;for(let ae=0;ae<Z.length;ae++){const ne=Z[ae],Me=z[ne],be=R[ne];(be!==Me||ne==="value")&&r(E,ne,Me,be,y,p)}}C&1&&u.children!==h.children&&d(E,h.children)}else!M&&_==null&&K(E,z,R,p,y);((N=R.onVnodeUpdated)||H)&&Je(()=>{N&&un(N,p,h,u),H&&Vn(h,u,p,"updated")},w)},G=(u,h,p,w,y,v,M)=>{for(let E=0;E<h.length;E++){const C=u[E],_=h[E],H=C.el&&(C.type===Ve||!qn(C,_)||C.shapeFlag&198)?b(C.el):p;O(C,_,H,null,w,y,v,M,!0)}},K=(u,h,p,w,y)=>{if(h!==p){if(h!==fe)for(const v in h)!xt(v)&&!(v in p)&&r(u,v,h[v],null,y,w);for(const v in p){if(xt(v))continue;const M=p[v],E=h[v];M!==E&&v!=="value"&&r(u,v,E,M,y,w)}"value"in p&&r(u,"value",h.value,p.value,y)}},L=(u,h,p,w,y,v,M,E,C)=>{const _=h.el=u?u.el:a(""),H=h.anchor=u?u.anchor:a("");let{patchFlag:z,dynamicChildren:R,slotScopeIds:N}=h;N&&(E=E?E.concat(N):N),u==null?(i(_,p,w),i(H,p,w),Q(h.children||[],p,H,y,v,M,E,C)):z>0&&z&64&&R&&u.dynamicChildren?(G(u.dynamicChildren,R,p,y,v,M,E),(h.key!=null||y&&h===y.subTree)&&ra(u,h,!0)):ee(u,h,p,H,y,v,M,E,C)},Y=(u,h,p,w,y,v,M,E,C)=>{h.slotScopeIds=E,u==null?h.shapeFlag&512?y.ctx.activate(h,p,w,M,C):me(h,p,w,y,v,M,C):ye(u,h,C)},me=(u,h,p,w,y,v,M)=>{const E=u.component=Jc(u,w,y);if(Mi(u)&&(E.ctx.renderer=Ie),qc(E,!1,M),E.asyncDep){if(y&&y.registerDep(E,ge,M),!u.el){const C=E.subTree=ze(Ne);B(null,C,h,p),u.placeholder=C.el}}else ge(E,u,h,p,y,v,M)},ye=(u,h,p)=>{const w=h.component=u.component;if(xc(u,h,p))if(w.asyncDep&&!w.asyncResolved){q(w,h,p);return}else w.next=h,w.update();else h.el=u.el,w.vnode=h},ge=(u,h,p,w,y,v,M)=>{const E=()=>{if(u.isMounted){let{next:z,bu:R,u:N,parent:Z,vnode:ae}=u;{const Ye=oa(u);if(Ye){z&&(z.el=ae.el,q(u,z,M)),Ye.asyncDep.then(()=>{u.isUnmounted||E()});return}}let ne=z,Me;Gn(u,!1),z?(z.el=ae.el,q(u,z,M)):z=ae,R&&oi(R),(Me=z.props&&z.props.onVnodeBeforeUpdate)&&un(Me,Z,z,ae),Gn(u,!0);const be=yr(u),Ue=u.subTree;u.subTree=be,O(Ue,be,b(Ue.el),Fe(Ue),u,y,v),z.el=be.el,ne===null&&Mc(u,be.el),N&&Je(N,y),(Me=z.props&&z.props.onVnodeUpdated)&&Je(()=>un(Me,Z,z,ae),y)}else{let z;const{el:R,props:N}=h,{bm:Z,m:ae,parent:ne,root:Me,type:be}=u,Ue=At(h);Gn(u,!1),Z&&oi(Z),!Ue&&(z=N&&N.onVnodeBeforeMount)&&un(z,ne,h),Gn(u,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(be);const Ye=u.subTree=yr(u);O(null,Ye,p,w,u,y,v),h.el=Ye.el}if(ae&&Je(ae,y),!Ue&&(z=N&&N.onVnodeMounted)){const Ye=h;Je(()=>un(z,ne,Ye),y)}(h.shapeFlag&256||ne&&At(ne.vnode)&&ne.vnode.shapeFlag&256)&&u.a&&Je(u.a,y),u.isMounted=!0,h=p=w=null}};u.scope.on();const C=u.effect=new go(E);u.scope.off();const _=u.update=C.run.bind(C),H=u.job=C.runIfDirty.bind(C);H.i=u,H.id=u.uid,C.scheduler=()=>Rs(H),Gn(u,!0),_()},q=(u,h,p)=>{h.component=u;const w=u.vnode.props;u.vnode=h,u.next=null,zc(u,h.props,w,p),Ic(u,h.children,p),Sn(),fr(u),Tn()},ee=(u,h,p,w,y,v,M,E,C=!1)=>{const _=u&&u.children,H=u?u.shapeFlag:0,z=h.children,{patchFlag:R,shapeFlag:N}=h;if(R>0){if(R&128){Nn(_,z,p,w,y,v,M,E,C);return}else if(R&256){Ge(_,z,p,w,y,v,M,E,C);return}}N&8?(H&16&&We(_,y,v),z!==_&&d(p,z)):H&16?N&16?Nn(_,z,p,w,y,v,M,E,C):We(_,y,v,!0):(H&8&&d(p,""),N&16&&Q(z,p,w,y,v,M,E,C))},Ge=(u,h,p,w,y,v,M,E,C)=>{u=u||lt,h=h||lt;const _=u.length,H=h.length,z=Math.min(_,H);let R;for(R=0;R<z;R++){const N=h[R]=C?An(h[R]):hn(h[R]);O(u[R],N,p,null,y,v,M,E,C)}_>H?We(u,y,v,!0,!1,z):Q(h,p,w,y,v,M,E,C,z)},Nn=(u,h,p,w,y,v,M,E,C)=>{let _=0;const H=h.length;let z=u.length-1,R=H-1;for(;_<=z&&_<=R;){const N=u[_],Z=h[_]=C?An(h[_]):hn(h[_]);if(qn(N,Z))O(N,Z,p,null,y,v,M,E,C);else break;_++}for(;_<=z&&_<=R;){const N=u[z],Z=h[R]=C?An(h[R]):hn(h[R]);if(qn(N,Z))O(N,Z,p,null,y,v,M,E,C);else break;z--,R--}if(_>z){if(_<=R){const N=R+1,Z=N<H?h[N].el:w;for(;_<=R;)O(null,h[_]=C?An(h[_]):hn(h[_]),p,Z,y,v,M,E,C),_++}}else if(_>R)for(;_<=z;)Pe(u[_],y,v,!0),_++;else{const N=_,Z=_,ae=new Map;for(_=Z;_<=R;_++){const Se=h[_]=C?An(h[_]):hn(h[_]);Se.key!=null&&ae.set(Se.key,_)}let ne,Me=0;const be=R-Z+1;let Ue=!1,Ye=0;const On=new Array(be);for(_=0;_<be;_++)On[_]=0;for(_=N;_<=z;_++){const Se=u[_];if(Me>=be){Pe(Se,y,v,!0);continue}let le;if(Se.key!=null)le=ae.get(Se.key);else for(ne=Z;ne<=R;ne++)if(On[ne-Z]===0&&qn(Se,h[ne])){le=ne;break}le===void 0?Pe(Se,y,v,!0):(On[le-Z]=_+1,le>=Ye?Ye=le:Ue=!0,O(Se,h[le],p,null,y,v,M,E,C),Me++)}const ve=Ue?Nc(On):lt;for(ne=ve.length-1,_=be-1;_>=0;_--){const Se=Z+_,le=h[Se],nt=h[Se+1],yt=Se+1<H?nt.el||nt.placeholder:w;On[_]===0?O(null,le,p,yt,y,v,M,E,C):Ue&&(ne<0||_!==ve[ne]?ln(le,p,yt,2):ne--)}}},ln=(u,h,p,w,y=null)=>{const{el:v,type:M,transition:E,children:C,shapeFlag:_}=u;if(_&6){ln(u.component.subTree,h,p,w);return}if(_&128){u.suspense.move(h,p,w);return}if(_&64){M.move(u,h,p,Ie);return}if(M===Ve){i(v,h,p);for(let z=0;z<C.length;z++)ln(C[z],h,p,w);i(u.anchor,h,p);return}if(M===Yi){J(u,h,p);return}if(w!==2&&_&1&&E)if(w===0)E.beforeEnter(v),i(v,h,p),Je(()=>E.enter(v),y);else{const{leave:z,delayLeave:R,afterLeave:N}=E,Z=()=>{u.ctx.isUnmounted?s(v):i(v,h,p)},ae=()=>{v._isLeaving&&v[wn](!0),z(v,()=>{Z(),N&&N()})};R?R(v,Z,ae):ae()}else i(v,h,p)},Pe=(u,h,p,w=!1,y=!1)=>{const{type:v,props:M,ref:E,children:C,dynamicChildren:_,shapeFlag:H,patchFlag:z,dirs:R,cacheIndex:N}=u;if(z===-2&&(y=!1),E!=null&&(Sn(),zt(E,null,p,u,!0),Tn()),N!=null&&(h.renderCache[N]=void 0),H&256){h.ctx.deactivate(u);return}const Z=H&1&&R,ae=!At(u);let ne;if(ae&&(ne=M&&M.onVnodeBeforeUnmount)&&un(ne,h,u),H&6)Xe(u.component,p,w);else{if(H&128){u.suspense.unmount(p,w);return}Z&&Vn(u,null,h,"beforeUnmount"),H&64?u.type.remove(u,h,p,Ie,w):_&&!_.hasOnce&&(v!==Ve||z>0&&z&64)?We(_,h,p,!1,!0):(v===Ve&&z&384||!y&&H&16)&&We(C,h,p),w&&et(u)}(ae&&(ne=M&&M.onVnodeUnmounted)||Z)&&Je(()=>{ne&&un(ne,h,u),Z&&Vn(u,null,h,"unmounted")},p)},et=u=>{const{type:h,el:p,anchor:w,transition:y}=u;if(h===Ve){$t(p,w);return}if(h===Yi){I(u);return}const v=()=>{s(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:M,delayLeave:E}=y,C=()=>M(p,v);E?E(u.el,v,C):C()}else v()},$t=(u,h)=>{let p;for(;u!==h;)p=T(u),s(u),u=p;s(h)},Xe=(u,h,p)=>{const{bum:w,scope:y,job:v,subTree:M,um:E,m:C,a:_}=u;_r(C),_r(_),w&&oi(w),y.stop(),v&&(v.flags|=8,Pe(M,u,h,p)),E&&Je(E,h),Je(()=>{u.isUnmounted=!0},h)},We=(u,h,p,w=!1,y=!1,v=0)=>{for(let M=v;M<u.length;M++)Pe(u[M],h,p,w,y)},Fe=u=>{if(u.shapeFlag&6)return Fe(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const h=T(u.anchor||u.el),p=h&&h[ql];return p?T(p):h};let _e=!1;const vt=(u,h,p)=>{u==null?h._vnode&&Pe(h._vnode,null,null,!0):O(h._vnode||null,u,h,null,null,null,p),h._vnode=u,_e||(_e=!0,fr(),Fo(),_e=!1)},Ie={p:O,um:Pe,m:ln,r:et,mt:me,mc:Q,pc:ee,pbc:G,n:Fe,o:e};return{render:vt,hydrate:void 0,createApp:bc(vt)}}function Xi({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Gn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Dc(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ra(e,n,t=!1){const i=e.children,s=n.children;if(D(i)&&D(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=An(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&ra(o,a)),a.type===Fi&&a.patchFlag!==-1&&(a.el=o.el),a.type===Ne&&!a.el&&(a.el=o.el)}}function Nc(e){const n=e.slice(),t=[0];let i,s,r,o,a;const c=e.length;for(i=0;i<c;i++){const m=e[i];if(m!==0){if(s=t[t.length-1],e[s]<m){n[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,e[t[a]]<m?r=a+1:o=a;m<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function oa(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:oa(n)}function _r(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const aa=e=>e.__isSuspense;function Oc(e,n){n&&n.pendingBranch?D(e)?n.effects.push(...e):n.effects.push(e):Jl(e)}const Ve=Symbol.for("v-fgt"),Fi=Symbol.for("v-txt"),Ne=Symbol.for("v-cmt"),Yi=Symbol.for("v-stc"),Ft=[];let qe=null;function ce(e=!1){Ft.push(qe=e?null:[])}function Wc(){Ft.pop(),qe=Ft[Ft.length-1]||null}let Nt=1;function bi(e,n=!1){Nt+=e,e<0&&qe&&n&&(qe.hasOnce=!0)}function la(e){return e.dynamicChildren=Nt>0?qe||lt:null,Wc(),Nt>0&&qe&&qe.push(e),e}function de(e,n,t,i,s,r){return la(x(e,n,t,i,s,r,!0))}function Bc(e,n,t,i,s){return la(ze(e,n,t,i,s,!0))}function vi(e){return e?e.__v_isVNode===!0:!1}function qn(e,n){return e.type===n.type&&e.key===n.key}const ca=({key:e})=>e??null,li=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||Ae(e)||j(e)?{i:tn,r:e,k:n,f:!!t}:e:null);function x(e,n=null,t=null,i=0,s=null,r=e===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&ca(n),ref:n&&li(n),scopeId:Ro,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return a?(Ns(c,t),r&128&&e.normalize(c)):t&&(c.shapeFlag|=we(t)?8:16),Nt>0&&!o&&qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&qe.push(c),c}const ze=Kc;function Kc(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===cc)&&(e=Ne),vi(e)){const a=Dn(e,n,!0);return t&&Ns(a,t),Nt>0&&!r&&qe&&(a.shapeFlag&6?qe[qe.indexOf(e)]=a:qe.push(a)),a.patchFlag=-2,a}if(Qc(e)&&(e=e.__vccOpts),n){n=jc(n);let{class:a,style:c}=n;a&&!we(a)&&(n.class=ut(a)),ue(c)&&(Is(c)&&!D(c)&&(c=xe({},c)),n.style=Ci(c))}const o=we(e)?1:aa(e)?128:Ho(e)?64:ue(e)?4:j(e)?2:0;return x(e,n,t,i,s,o,r,!0)}function jc(e){return e?Is(e)||Qo(e)?xe({},e):e:null}function Dn(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:c}=e,m=n?Gc(s||{},n):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:m,key:m&&ca(m),ref:n&&n.ref?t&&r?D(r)?r.concat(li(n)):[r,li(n)]:li(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ve?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Dn(e.ssContent),ssFallback:e.ssFallback&&Dn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&Dt(d,c.clone(d)),d}function Vc(e=" ",n=0){return ze(Fi,null,e,n)}function $e(e="",n=!1){return n?(ce(),Bc(Ne,null,e)):ze(Ne,null,e)}function hn(e){return e==null||typeof e=="boolean"?ze(Ne):D(e)?ze(Ve,null,e.slice()):vi(e)?An(e):ze(Fi,null,String(e))}function An(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Dn(e)}function Ns(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(D(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),Ns(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Qo(n)?n._ctx=tn:s===3&&tn&&(tn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else j(n)?(n={default:n,_ctx:tn},t=32):(n=String(n),i&64?(t=16,n=[Vc(n)]):t=8);e.children=n,e.shapeFlag|=t}function Gc(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=ut([n.class,i.class]));else if(s==="style")n.style=Ci([n.style,i.style]);else if(_i(s)){const r=n[s],o=i[s];o&&r!==o&&!(D(r)&&r.includes(o))&&(n[s]=r?[].concat(r,o):o)}else s!==""&&(n[s]=i[s])}return n}function un(e,n,t,i=null){an(e,n,7,[t,i])}const Uc=$o();let $c=0;function Jc(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||Uc,r={uid:$c++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:na(i,s),emitsOptions:Xo(i,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Sc.bind(null,r),e.ce&&e.ce(r),r}let Oe=null;const ua=()=>Oe||tn;let yi,bs;{const e=Ti(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};yi=n("__VUE_INSTANCE_SETTERS__",t=>Oe=t),bs=n("__VUE_SSR_SETTERS__",t=>Ot=t)}const Gt=e=>{const n=Oe;return yi(e),e.scope.on(),()=>{e.scope.off(),yi(n)}},Sr=()=>{Oe&&Oe.scope.off(),yi(null)};function da(e){return e.vnode.shapeFlag&4}let Ot=!1;function qc(e,n=!1,t=!1){n&&bs(n);const{props:i,children:s}=e.vnode,r=da(e);Lc(e,i,r,n),Fc(e,s,t||n);const o=r?Xc(e,n):void 0;return n&&bs(!1),o}function Xc(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,uc);const{setup:i}=t;if(i){Sn();const s=e.setupContext=i.length>1?Zc(e):null,r=Gt(e),o=Vt(i,e,0,[e.props,s]),a=oo(o);if(Tn(),r(),(a||e.sp)&&!At(e)&&Ko(e),a){if(o.then(Sr,Sr),n)return o.then(c=>{Tr(e,c)}).catch(c=>{xi(c,e,0)});e.asyncDep=o}else Tr(e,o)}else fa(e)}function Tr(e,n,t){j(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ue(n)&&(e.setupState=zo(n)),fa(e)}function fa(e,n,t){const i=e.type;e.render||(e.render=i.render||mn);{const s=Gt(e);Sn();try{dc(e)}finally{Tn(),s()}}}const Yc={get(e,n){return Le(e,"get",""),e[n]}};function Zc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Yc),slots:e.slots,emit:e.emit,expose:n}}function Ii(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(zo(Dl(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Pt)return Pt[t](e)},has(n,t){return t in n||t in Pt}})):e.proxy}function Qc(e){return j(e)&&"__vccOpts"in e}const U=(e,n)=>jl(e,n,Ot);function eu(e,n,t){try{bi(-1);const i=arguments.length;return i===2?ue(n)&&!D(n)?vi(n)?ze(e,null,[n]):ze(e,n):ze(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&vi(t)&&(t=[t]),ze(e,n,t))}finally{bi(1)}}const nu="3.5.25";let vs;const Cr=typeof window<"u"&&window.trustedTypes;if(Cr)try{vs=Cr.createPolicy("vue",{createHTML:e=>e})}catch{}const ha=vs?e=>vs.createHTML(e):e=>e,tu="http://www.w3.org/2000/svg",iu="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,Er=yn&&yn.createElement("template"),su={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?yn.createElementNS(tu,e):n==="mathml"?yn.createElementNS(iu,e):t?yn.createElement(e,{is:t}):yn.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const o=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Er.innerHTML=ha(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=Er.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}n.insertBefore(a,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Mn="transition",Tt="animation",Wt=Symbol("_vtc"),ma={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ru=xe({},Do,ma),ou=e=>(e.displayName="Transition",e.props=ru,e),xr=ou((e,{slots:n})=>eu(Zl,au(e),n)),Un=(e,n=[])=>{D(e)?e.forEach(t=>t(...n)):e&&e(...n)},Mr=e=>e?D(e)?e.some(n=>n.length>1):e.length>1:!1;function au(e){const n={};for(const L in e)L in ma||(n[L]=e[L]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:m=o,appearToClass:d=a,leaveFromClass:b=`${t}-leave-from`,leaveActiveClass:T=`${t}-leave-active`,leaveToClass:S=`${t}-leave-to`}=e,A=lu(s),O=A&&A[0],re=A&&A[1],{onBeforeEnter:B,onEnter:P,onEnterCancelled:J,onLeave:I,onLeaveCancelled:X,onBeforeAppear:pe=B,onAppear:V=P,onAppearCancelled:Q=J}=n,W=(L,Y,me,ye)=>{L._enterCancelled=ye,$n(L,Y?d:a),$n(L,Y?m:o),me&&me()},G=(L,Y)=>{L._isLeaving=!1,$n(L,b),$n(L,S),$n(L,T),Y&&Y()},K=L=>(Y,me)=>{const ye=L?V:P,ge=()=>W(Y,L,me);Un(ye,[Y,ge]),Lr(()=>{$n(Y,L?c:r),vn(Y,L?d:a),Mr(ye)||zr(Y,i,O,ge)})};return xe(n,{onBeforeEnter(L){Un(B,[L]),vn(L,r),vn(L,o)},onBeforeAppear(L){Un(pe,[L]),vn(L,c),vn(L,m)},onEnter:K(!1),onAppear:K(!0),onLeave(L,Y){L._isLeaving=!0;const me=()=>G(L,Y);vn(L,b),L._enterCancelled?(vn(L,T),Fr(L)):(Fr(L),vn(L,T)),Lr(()=>{L._isLeaving&&($n(L,b),vn(L,S),Mr(I)||zr(L,i,re,me))}),Un(I,[L,me])},onEnterCancelled(L){W(L,!1,void 0,!0),Un(J,[L])},onAppearCancelled(L){W(L,!0,void 0,!0),Un(Q,[L])},onLeaveCancelled(L){G(L),Un(X,[L])}})}function lu(e){if(e==null)return null;if(ue(e))return[Zi(e.enter),Zi(e.leave)];{const n=Zi(e);return[n,n]}}function Zi(e){return ll(e)}function vn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Wt]||(e[Wt]=new Set)).add(n)}function $n(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[Wt];t&&(t.delete(n),t.size||(e[Wt]=void 0))}function Lr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let cu=0;function zr(e,n,t,i){const s=e._endId=++cu,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:c}=uu(e,n);if(!o)return i();const m=o+"end";let d=0;const b=()=>{e.removeEventListener(m,T),r()},T=S=>{S.target===e&&++d>=c&&b()};setTimeout(()=>{d<c&&b()},a+1),e.addEventListener(m,T)}function uu(e,n){const t=window.getComputedStyle(e),i=A=>(t[A]||"").split(", "),s=i(`${Mn}Delay`),r=i(`${Mn}Duration`),o=Ar(s,r),a=i(`${Tt}Delay`),c=i(`${Tt}Duration`),m=Ar(a,c);let d=null,b=0,T=0;n===Mn?o>0&&(d=Mn,b=o,T=r.length):n===Tt?m>0&&(d=Tt,b=m,T=c.length):(b=Math.max(o,m),d=b>0?o>m?Mn:Tt:null,T=d?d===Mn?r.length:c.length:0);const S=d===Mn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Mn}Property`).toString());return{type:d,timeout:b,propCount:T,hasTransform:S}}function Ar(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>Pr(t)+Pr(e[i])))}function Pr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Fr(e){return(e?e.ownerDocument:document).body.offsetHeight}function du(e,n,t){const i=e[Wt];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Ir=Symbol("_vod"),fu=Symbol("_vsh"),hu=Symbol(""),mu=/(?:^|;)\s*display\s*:/;function pu(e,n,t){const i=e.style,s=we(t);let r=!1;if(t&&!s){if(n)if(we(n))for(const o of n.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ci(i,a,"")}else for(const o in n)t[o]==null&&ci(i,o,"");for(const o in t)o==="display"&&(r=!0),ci(i,o,t[o])}else if(s){if(n!==t){const o=i[hu];o&&(t+=";"+o),i.cssText=t,r=mu.test(t)}}else n&&e.removeAttribute("style");Ir in e&&(e[Ir]=r?i.display:"",e[fu]&&(i.display="none"))}const Rr=/\s*!important$/;function ci(e,n,t){if(D(t))t.forEach(i=>ci(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=gu(e,n);Rr.test(t)?e.setProperty(Qn(i),t.replace(Rr,""),"important"):e[i]=t}}const Hr=["Webkit","Moz","ms"],Qi={};function gu(e,n){const t=Qi[n];if(t)return t;let i=Hn(n);if(i!=="filter"&&i in e)return Qi[n]=i;i=co(i);for(let s=0;s<Hr.length;s++){const r=Hr[s]+i;if(r in e)return Qi[n]=r}return n}const Dr="http://www.w3.org/1999/xlink";function Nr(e,n,t,i,s,r=ml(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Dr,n.slice(6,n.length)):e.setAttributeNS(Dr,n,t):t==null||r&&!ho(t)?e.removeAttribute(n):e.setAttribute(n,r?"":pn(t)?String(t):t)}function Or(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?ha(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const a=typeof e[n];a==="boolean"?t=ho(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(s||n)}function Os(e,n,t,i){e.addEventListener(n,t,i)}function bu(e,n,t,i){e.removeEventListener(n,t,i)}const Wr=Symbol("_vei");function vu(e,n,t,i,s=null){const r=e[Wr]||(e[Wr]={}),o=r[n];if(i&&o)o.value=i;else{const[a,c]=yu(n);if(i){const m=r[n]=_u(i,s);Os(e,a,m,c)}else o&&(bu(e,a,o,c),r[n]=void 0)}}const Br=/(?:Once|Passive|Capture)$/;function yu(e){let n;if(Br.test(e)){n={};let i;for(;i=e.match(Br);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Qn(e.slice(2)),n]}let es=0;const wu=Promise.resolve(),ku=()=>es||(wu.then(()=>es=0),es=Date.now());function _u(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;an(Su(i,t.value),n,5,[i])};return t.value=e,t.attached=ku(),t}function Su(e,n){if(D(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const Kr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Tu=(e,n,t,i,s,r)=>{const o=s==="svg";n==="class"?du(e,i,o):n==="style"?pu(e,t,i):_i(n)?Ts(n)||vu(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Cu(e,n,i,o))?(Or(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Nr(e,n,i,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!we(i))?Or(e,Hn(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),Nr(e,n,i,o))};function Cu(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&Kr(n)&&j(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kr(n)&&we(t)?!1:n in e}const wi=e=>{const n=e.props["onUpdate:modelValue"]||!1;return D(n)?t=>oi(n,t):n},mt=Symbol("_assign"),jr={deep:!0,created(e,n,t){e[mt]=wi(t),Os(e,"change",()=>{const i=e._modelValue,s=Bt(e),r=e.checked,o=e[mt];if(D(i)){const a=xs(i,s),c=a!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const m=[...i];m.splice(a,1),o(m)}}else if(gt(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(pa(e,r))})},mounted:Vr,beforeUpdate(e,n,t){e[mt]=wi(t),Vr(e,n,t)}};function Vr(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(D(n))s=xs(n,i.props.value)>-1;else if(gt(n))s=n.has(i.props.value);else{if(n===t)return;s=jt(n,pa(e,!0))}e.checked!==s&&(e.checked=s)}const Eu={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=gt(n);Os(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?fo(Bt(o)):Bt(o));e[mt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,en(()=>{e._assigning=!1})}),e[mt]=wi(i)},mounted(e,{value:n}){Gr(e,n)},beforeUpdate(e,n,t){e[mt]=wi(t)},updated(e,{value:n}){e._assigning||Gr(e,n)}};function Gr(e,n){const t=e.multiple,i=D(n);if(!(t&&!i&&!gt(n))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],a=Bt(o);if(t)if(i){const c=typeof a;c==="string"||c==="number"?o.selected=n.some(m=>String(m)===String(a)):o.selected=xs(n,a)>-1}else o.selected=n.has(a);else if(jt(Bt(o),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Bt(e){return"_value"in e?e._value:e.value}function pa(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const xu=["ctrl","shift","alt","meta"],Mu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>xu.some(t=>e[`${t}Key`]&&!n.includes(t))},Lu=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<n.length;o++){const a=Mu[n[o]];if(a&&a(s,n))return}return e(s,...r)}))},zu=xe({patchProp:Tu},su);let Ur;function Au(){return Ur||(Ur=Rc(zu))}const Pu=((...e)=>{const n=Au().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=Iu(i);if(!s)return;const r=n._component;!j(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Fu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},n});function Fu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Iu(e){return we(e)?document.querySelector(e):e}const Ru="/favicon.png",Hu="/images/about_music_logo.png",Du="/images/dk3-min.jpg",Nu="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",bt=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Dmitri Shostakovich",birth:1906,death:1975}],Ou={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/stravinsky.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function ga(e){return Ou[e]||null}function Wu(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function Bu(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],s=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-s),a=n.slice(0,n.length-s).map(m=>m.trim()).filter(Boolean).map(m=>m[0]?m[0].toUpperCase()+".":"").filter(Boolean).join(" "),c=r.join(" ");return a?`${a} ${c}`:c}const Ut=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let ys=Ut.reduce((e,n)=>(e[n.id]=n.label,e),{});const $r=Math.min(...bt.map(e=>e.birth)),Ku=Math.max(...bt.map(e=>e.birth));let ws=[...bt],Pn=null,Fn=null;const ju={r:255,g:255,b:255},Vu={r:37,g:99,b:235};Et("#f3f4f6"),Xr(1750),Et("#e6eef8"),Xr(1820),Et("#e8f4ff"),Et("#eef2f7");const ki=1677.5,ui=1980,ba=ui-ki,Gu=6,Uu=2,$u=0,di={barHeight:50,widthScale:1,fontScale:1},rt={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let In={...di};function ns(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function Jr(e={}){In={barHeight:ns(e.barHeight??In.barHeight??di.barHeight,rt.barHeight.min,rt.barHeight.max),widthScale:ns(e.widthScale??In.widthScale??di.widthScale,rt.widthScale.min,rt.widthScale.max),fontScale:ns(e.fontScale??In.fontScale??di.fontScale,rt.fontScale.min,rt.fontScale.max)}}function Ju(){return Gu*In.widthScale}function ti(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=ba*Ju()+$u,i=(n.clientWidth||window.innerWidth)*Uu*In.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function Xn(e){return(e-ki)/ba*100}function va(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function Et(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function ts({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function qr(e,n,t){const i=va(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function Xr(e){const n=Ku-$r;return n<=0?0:va((e-$r)/n)}const qu={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function Ws(e){return qu[e]||"#f3f4f6"}function Xu(e){return e?ys[e]||Ut.find(n=>n.id===e)?.label||e:""}function Yr(e={}){!e||typeof e!="object"||(ys={...ys,...e})}function Yu(e){const n=Ut.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function Zu(e,n){const t=Number(e),i=Number(n),s=Yu(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let o=null,a=0;return Ut.forEach(c=>{const m=Math.max(0,Math.min(i,c.to)-Math.max(t,c.from));m>a&&(a=m,o=c.id)}),o&&a>r/2?o:s}function Qu(e){const n=Ws(e),t=Et(n),i=qr(t,ju,.12),s=qr(t,Vu,.04);return`linear-gradient(145deg, ${ts(i)} 0%, ${ts(t)} 58%, ${ts(s)} 100%)`}function Zr(e){Array.isArray(e)?ws=[...e]:ws=[...bt]}function Bs(){const e=document.getElementById("gantt");if(!e)return;const n=i=>Number.isInteger(Pn)&&i===Pn,t=i=>Number.isInteger(Fn)&&i===Fn;e.querySelectorAll(".bar").forEach(i=>{const s=Number(i.getAttribute("data-lane-index"));i.classList.toggle("bar--selected",n(s)),i.classList.toggle("bar--hovered",t(s))}),e.querySelectorAll(".bar-connector").forEach(i=>{const s=Number(i.getAttribute("data-lane-index")),r=n(s),o=t(s);i.classList.toggle("bar-connector--selected",r),i.classList.toggle("bar-connector--hover",o)})}function ya(e){Number.isInteger(e)?Pn=e:Pn=null,Bs()}function ks(e){Number.isInteger(e)?Fn=e:Fn=null,Bs()}function Qr(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(ki/10)*10,t=Math.ceil(ui/10)*10;Ut.forEach(i=>{const s=Math.max(i.from,ki),r=Math.min(i.to,ui);if(r<=s)return;const o=document.createElement("div");o.className="era-band",o.style.left=Xn(s)+"%",o.style.width=Xn(r)-Xn(s)+"%",o.style.backgroundImage="none",o.style.backgroundColor=Ws(i.id),o.textContent=Xu(i.id)||i.label,i.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===ui&&(o.style.borderRight="none"),e.appendChild(o)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=Xn(i)+"%",e.appendChild(s);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=Xn(i)+"%",o.textContent=i,e.appendChild(o)}}function is(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="";const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=ws||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const o=[...r].sort((S,A)=>S.birth-A.birth),a=o.length,c=o.map((S,A)=>({composer:S,laneIndex:A}));Number.isInteger(Pn)&&(Pn<0||Pn>=a)&&(Pn=null),Number.isInteger(Fn)&&(Fn<0||Fn>=a)&&(Fn=null);const m=2,d=In.barHeight,b=d+m,T=a*d+Math.max(0,a-1)*m;e.style.height=T+"px",a&&(c.forEach(({composer:S,laneIndex:A})=>{const O=S.displayName||S.name,re=Xn(S.birth),B=Xn(S.death),P=document.createElement("div");P.className="bar",P.setAttribute("data-lane-index",A),P.setAttribute("data-name",S.name);const J=Zu(S.birth,S.death);P.style.backgroundImage=Qu(J),P.style.backgroundColor=Ws(J);const I=re,X=B-re,V=A*b+d*.5+i,Q=(ye,ge)=>{const q=document.createElement("div");q.className="bar-connector",q.setAttribute("data-lane-index",A),q.setAttribute("data-side",ge),q.style.left=ye+"%",q.style.top=-i+"px",q.style.height=V+"px",s.appendChild(q)};Q(I,"start"),Q(I+X,"end"),P.style.left=I+"%",P.style.width=X+"%",P.style.top=A*b+"px",P.style.height=d+"px",P.style.lineHeight=d+"px",P.style.fontSize=d*.25*In.fontScale+"px";const W=ga(S.name);let G=0;if(W){const ye=document.createElement("img");ye.className="bar-avatar",G=Math.max(10,Math.round(d*1.1)),ye.style.width=G+"px",ye.style.height=G+"px",ye.src=W,ye.alt=O||S.name,P.appendChild(ye)}const K=document.createElement("span");K.className="bar-label",K.textContent=O,P.appendChild(K);const L=document.createElement("span");L.className="bar-dates",L.textContent=`${S.birth} – ${S.death}`,P.appendChild(L),e.appendChild(P),K.scrollWidth>K.clientWidth&&(K.textContent=Bu(O),K.scrollWidth>K.clientWidth&&(K.textContent=Wu(O)));const Y=()=>{const q=P.clientWidth-12-(G?G+6:0)-6;if(q<=0){L.style.display="none";return}K.scrollWidth+L.scrollWidth+6>q&&(L.style.display="none")};(()=>{P.clientWidth>0?Y():typeof window<"u"&&window.requestAnimationFrame(Y)})(),P.addEventListener("click",ye=>{ye.stopPropagation(),ya(A),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:S,laneIndex:A}}))}),P.addEventListener("mouseenter",()=>ks(A)),P.addEventListener("mouseleave",()=>ks(null))}),e.appendChild(s),Bs())}function ed(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4;let s=0,r=0,o=0,a=0,c=0,m=0,d=null;const b=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},T=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true")},S=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",b())};function A(){if(d=null,!n||!t)return;const V=c-s,Q=m-r;e.scrollLeft=o-V,e.scrollTop=a-Q}const O=V=>{V.button===0&&(n=!0,t=!1,e.classList.remove("panning"),s=V.clientX,r=V.clientY,c=V.clientX,m=V.clientY,o=e.scrollLeft,a=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),V.preventDefault())},re=V=>{if(n){if(c=V.clientX,m=V.clientY,!t){const Q=Math.abs(c-s),W=Math.abs(m-r);if(Q>i||W>i)T();else return}d===null&&(d=window.requestAnimationFrame(A)),V.preventDefault()}},B=()=>{n&&(n=!1,S(),d!==null&&(cancelAnimationFrame(d),d=null))};e.addEventListener("mousedown",O),window.addEventListener("mousemove",re),window.addEventListener("mouseup",B);let P=null,J=!1;const I=V=>{if(P!==null||V.touches.length!==1)return;const Q=V.touches[0];P=Q.identifier,J=!1,s=Q.clientX,r=Q.clientY,c=Q.clientX,m=Q.clientY,o=e.scrollLeft,a=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),S()},X=V=>{if(P===null)return;const Q=Array.from(V.touches).find(Y=>Y.identifier===P);if(!Q)return;const W=Q.clientX-s,G=Q.clientY-r,K=Math.abs(W),L=Math.abs(G);if(!J)if(K>i||L>i)J=!0,T();else return;e.scrollLeft=o-W,e.scrollTop=a-G,V.preventDefault()},pe=V=>{P===null||!Array.from(V.changedTouches).some(W=>W.identifier===P)||(P=null,J=!1,S())};e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchmove",X,{passive:!1}),e.addEventListener("touchend",pe,{passive:!0}),e.addEventListener("touchcancel",pe,{passive:!0})}function nd(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};const i=.5,s=12,r=(m,d,b)=>{const T=m.getBoundingClientRect();return T.bottom>d&&T.top<b},o=()=>e.scrollTop+e.clientHeight>=e.scrollHeight-s,a=()=>{if(o())return;const m=Array.from(n.querySelectorAll(".bar"));if(!m.length)return;const d=e.getBoundingClientRect(),T=(t?.getBoundingClientRect()?.bottom??d.top)+1,S=d.bottom,A=m.find(P=>r(P,T,S));if(!A)return;const O=A.getBoundingClientRect(),re=T,B=O.top-re;Math.abs(B)<=i||_s(e,{left:e.scrollLeft,top:Math.max(0,e.scrollTop+B),behavior:"auto"})},c=()=>{a()};return e.addEventListener("timeline-pan-end",c),()=>{e.removeEventListener("timeline-pan-end",c)}}function _s(e,{left:n=0,top:t=0,behavior:i="smooth"}){const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":i;if(e.scrollTo){e.scrollTo({left:n,top:t,behavior:r});return}e.scrollLeft=n,e.scrollTop=t}function td(e={}){Jr(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:bt;Zr(n),Yr(e.eraLabels||{}),ti(),Qr(),is(),ed();const t=nd(),i=()=>ti();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const a=document.getElementById("timeline");a&&_s(a,{left:0,top:0,behavior:"auto"})}function o(){const a=document.getElementById("timeline");a&&_s(a,{left:Math.max(0,a.scrollWidth-a.clientWidth),top:Math.max(0,a.scrollHeight-a.clientHeight),behavior:"auto"})}return{goToStart:r,goToEnd:o,setComposers(a){Zr(a),is()},updateSettings(a){Jr(a||{}),ti(),is()},updateEraLabels(a){Yr(a||{}),ti(),Qr()},setSelectedLane:ya,setHoveredLane:ks,destroy(){window.removeEventListener("resize",i),t()}}}const wa=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},id={class:"timeline-wrapper"},sd={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),a=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(a)?null:a}}))};return zi(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=td({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),Ai(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),nn(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),nn(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),nn(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(ce(),de("div",id,[...r[0]||(r[0]=[x("div",{id:"timeline"},[x("div",{class:"timeline-inner"},[x("div",{id:"axis",class:"axis"}),x("div",{id:"gantt"})])],-1)])]))}},rd=wa(sd,[["__scopeId","data-v-095e97d5"]]),od=`# Composer fact sheets

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
`,ad={class:"app"},ld={class:"topbar"},cd={class:"language-switcher"},ud={class:"visually-hidden",for:"language-select"},dd=["aria-label"],fd=["value"],hd={class:"menu-nav"},md={class:"content"},pd={key:0},gd={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},bd={class:"filter-dock__header"},vd=["aria-pressed","aria-label"],yd={"aria-hidden":"true"},wd={key:0,class:"nav-controls",role:"group","aria-label":"Timeline navigation"},kd=["disabled"],_d=["disabled"],Sd={key:1,class:"scale-controls",role:"group","aria-label":"Adjust timeline size"},Td=["disabled"],Cd=["disabled"],Ed=["aria-expanded"],xd={key:0,id:"filter-panel",class:"filter-panel",role:"dialog","aria-label":"Composer filters"},Md={class:"filter-panel__options"},Ld=["onUpdate:modelValue","aria-label"],zd={class:"filter-panel__label"},Ad={class:"filter-panel__actions"},Pd={key:1,class:"about"},Fd={class:"about__card"},Id={class:"about__title"},Rd={class:"about__text"},Hd={class:"about__text"},Dd={class:"about__author"},Nd={class:"about__author-body"},Od={class:"about__author-label"},Wd={class:"about__author-name"},Bd={class:"about__contributors"},Kd={class:"about__contributors-title"},jd={class:"about__contributors-list"},Vd={class:"about__contributors-name"},Gd=["href"],Ud={key:0,class:"about__contributors-toggle"},$d={class:"about__contributors-toggle-label"},Jd={class:"composer-modal__content"},qd={class:"composer-modal__header"},Xd={class:"composer-modal__titles"},Yd={class:"composer-modal__name"},Zd={key:0,class:"composer-modal__dates"},Qd={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},ef=["disabled"],nf={class:"composer-modal__position"},tf=["disabled"],sf={class:"composer-modal__body"},rf={key:0,class:"composer-modal__hero"},of=["src","alt"],af={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},lf=["disabled"],cf={class:"composer-modal__position"},uf=["disabled"],df={class:"composer-modal__hero-meta"},ff={class:"composer-modal__name-small"},hf={key:0,class:"composer-modal__dates-small"},mf={class:"composer-modal__playlist"},pf={class:"composer-modal__playlist-header"},gf={class:"composer-modal__playlist-title"},bf={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},vf=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],yf={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},wf={class:"composer-modal__description"},kf={key:0,class:"composer-modal__facts-title"},_f={key:1,class:"composer-modal__facts"},Sf={class:"composer-modal__fact-text"},Tf={key:2,class:"composer-modal__muted"},ot="en",eo="timeline-language",no="timeline-language-user-set",ii=25,to=150,ss=.2,io=1.5,Cf=.35,rs=1.7,so=.95,Ef=.6,si=1,dn=12,xf=320,Mf=.88,Lf=1.12,ri=6,zf={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",testFeaturesLabel:"Test functions",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Matveeva",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended Classics"},apply:"Apply",minimizeControls:"Hide timeline controls",restoreControls:"Show timeline controls"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Matveeva",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden",minimizeControls:"Steuerungselemente ausblenden",restoreControls:"Steuerungselemente anzeigen"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",testFeaturesLabel:"Тестовые функции",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Матвеева",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить",minimizeControls:"Скрыть панель управления",restoreControls:"Показать панель управления"}}},t=Object.keys(n),i=Ee(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=Ee(ot),o=Ee(!1),a=U(()=>!o.value),c=U(()=>n[r.value]||n.en),m=U(()=>t.map(l=>({value:l,label:n[l]?.label||l.toUpperCase()}))),d=U(()=>c.value.appTitle),b=U(()=>c.value.languageLabel||"Language"),T=U(()=>c.value.navigation||n.en.navigation),S=U(()=>c.value.about||n.en.about),A=U(()=>S.value.contributors||n.en.about.contributors||[]),O=U(()=>S.value.testFeaturesLabel||n.en.about.testFeaturesLabel||"Test functions"),re=U(()=>c.value.eras||n.en.eras),B=U(()=>c.value.composers||{}),P=U(()=>{const l=B.value.names||{},f={};return Object.entries(l).forEach(([g,k])=>{f[Ze(g)]=k}),f}),J=U(()=>{const l={};return Object.entries(On||{}).forEach(([f,g])=>{const k=Ze(f),F=g?.[r.value];if(F){l[k]=F;return}r.value==="en"&&g?.en&&(l[k]=g.en)}),l}),I=U(()=>({...J.value,...P.value})),X=U(()=>c.value.filter||n.en.filter),pe=U(()=>({essentials:X.value.groups?.essentials||"Essential Icons",core:X.value.groups?.core||"Core Classics",expanded:X.value.groups?.expanded||"Extended Classics"})),V=U(()=>X.value.apply||"Apply"),Q=U(()=>{const l=B.value.descriptions||{},f={};return Object.entries(l).forEach(([g,k])=>{f[Ze(g)]=k}),f}),W=U(()=>{const l=B.value.factsTitles||{},f={};return Object.entries(l).forEach(([g,k])=>{f[Ze(g)]=k}),f}),G=U(()=>c.value.modal||n.en.modal),K=Ee(!1),L=Ee("composers"),Y=[30,40,50,70,100],me="".replace(/\/$/,""),ge="https://soundcloud.com/dmitry-kotikov/sets/",q="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",ee=new Set;function Ge(l,f,g){return Number.isNaN(l)?f:Math.min(g,Math.max(f,l))}function Nn(l){const f=Ge((l-ii)/(to-ii),0,1),g=Math.pow(f,Cf),k=ss+(io-ss)*g;return Ge(k,ss,io)}function ln(l){const f=Ge((l-ii)/(to-ii),0,1),g=Math.pow(f,Ef),k=rs-(rs-so)*g;return Ge(k,so,rs)}const Pe=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich"]}],et=Ee(Pe.reduce((l,f)=>(l[f.id]=!0,l),{})),$t=U(()=>{const l=c.value.filter||{};return{minimize:l.minimizeControls||"Hide timeline controls",restore:l.restoreControls||"Show timeline controls"}}),Xe=Ee(!1),We=Ee(null),Fe=Ee(dn),_e=Ee(null);let vt=0;const Ie=Ee(!1),xn=Ee("bottom-left"),u=Ee(null),h=U(()=>{const l={left:`${Fe.value}px`};return _e.value!=null&&(l.top=`${_e.value}px`),l}),p=dt({active:!1,pointerId:null,startX:0,startY:0,startLeft:0,startTop:0,element:null}),w=dt({active:!1,startDistance:0});function y(l,f){const g=l.clientX-f.clientX,k=l.clientY-f.clientY;return Math.hypot(g,k)}const v=dt({barHeight:Y[si],widthScale:Nn(Y[si]),fontScale:ln(Y[si])}),M=Ee(si),E=U(()=>M.value<=0),C=U(()=>M.value>=Y.length-1),_=Ee(!0),H=Ee(!1);function z(l){const f=Ge(l,0,Y.length-1);M.value=f;const g=Y[f];v.barHeight=g,v.widthScale=Nn(g),v.fontScale=ln(g)}function R(l){const f=l>0?1:-1;z(M.value+f)}function N(){const l=document.getElementById("timeline");if(!l)return;const f=Math.max(0,l.scrollWidth-l.clientWidth),g=Math.max(0,l.scrollHeight-l.clientHeight);_.value=l.scrollLeft<=ri&&l.scrollTop<=ri,H.value=l.scrollLeft>=f-ri&&l.scrollTop>=g-ri}async function Z(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),N(),await en(),Jt()}async function ae(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),N(),await en(),Da()}const ne=U(()=>{const l=Pe.map(g=>g.id).filter(g=>et.value[g]),f=new Set;return l.forEach(g=>{Pe.find(F=>F.id===g)?.composers?.forEach(F=>f.add(F))}),f}),Me=U(()=>{const l=ne.value;return l.size?bt.filter(f=>l.has(f.name)):[]}),be=U(()=>[...Me.value].sort((l,f)=>l.birth-f.birth).map(l=>({...l,displayName:Di(l.name)}))),{descriptionsByLocale:Ue,playlistIdsByKey:Ye,namesByLocale:On}=Sa(od),ve=Ee(null),Se=U(()=>ve.value!==null),le=U(()=>ve.value===null?null:be.value[ve.value]),nt=U(()=>le.value?Di(le.value.name):""),yt=U(()=>le.value?ga(le.value.name):null),Ks=U(()=>le.value?Ta(le.value.name):""),js=U(()=>le.value?Ca(le.value.name):""),ka=U(()=>le.value?za(le.value.name):[]),_a=U(()=>ka.value.map(l=>qa(l)).filter(Boolean)),Wn=U(()=>{const l=_a.value.filter(Boolean);return l.length?l:[q]}),Ri=U(()=>(ve.value??0)>0),Hi=U(()=>ve.value!==null&&ve.value<be.value.length-1);function Ze(l){return l.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Di(l){const f=Ze(l);return I.value[f]||l}function Vs(l){return pe.value[l]||l}function Sa(l){const f=l.split(`
`),g={},k={},F={};let $=null,oe=null,Be=null,Ke="en",ke=[];const Kn=()=>{($||oe)&&[$,oe].filter(Boolean).forEach(Re=>{g[Re]=g[Re]||{},g[Re][Ke]=ke.join(`
`).trim(),Be&&(F[Re]=Be)}),ke=[],Be=null,oe=null};for(const Te of f){const Re=Te.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Re){Kn();const[,Ce,jn,gn]=Re;$=Ze(gn||Ce),oe=Ze(Ce),Ke=(jn||"en").toLowerCase(),Be=gn||null;continue}const it=$?Te.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(it){const[,Ce,jn]=it,gn=(Ce||Ke||"en").toLowerCase(),il=jn.trim();[$,oe].filter(Boolean).forEach(Bi=>{k[Bi]=k[Bi]||{},k[Bi][gn]=il});continue}$&&Te.startsWith("- ")&&ke.push(Te.replace(/^- /,"").trim())}return Kn(),{descriptionsByLocale:g,playlistIdsByKey:F,namesByLocale:k}}function Ta(l){const f=xa(l),g=Ze(l),k=Q.value[g];if(k)return k;const F=f[r.value];return F||(f.en?f.en:Object.values(f)[0]||"")}function Ca(l){const f=W.value[Ze(l)];return f||La(l)}function Ea(l,f){const g=Ze(f);if(l[g])return l[g];const k=g.split(" ").filter(Boolean),F=k[k.length-1];return F&&l[F]?l[F]:""}function xa(l){const f=Ze(l),g=f.split(" ").filter(Boolean),k=[f],F=g[g.length-1];F&&F!==f&&k.push(F);for(const $ of k)if(Ue[$])return Ue[$];return{}}function Ma(l){return Ze(l).replace(/\s+/g,"-").replace(/-+/g,"-")}function La(l){const f=s[r.value]||s.en,g=r.value==="ru"?Di(l):"";if(r.value==="ru"&&g)return`${g} - ${f}`;const k=String(l||"").trim().split(/\s+/).filter(Boolean);if(!k.length)return"";const F=k[k.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(F)&&k.length>=2?k[k.length-2]:F} ${f}`}function za(l){const f=[],g=Ma(l);g&&!f.includes(g)&&f.push(g);const k=Ea(Ye,l);return k&&!f.includes(k)&&f.push(k),f}function Ni(l=window.location.pathname){L.value=l==="/about"?"about":"composers"}const Gs=()=>Ni();function Us(l){window.location.pathname!==l&&(history.pushState({},"",l),Ni(l)),K.value=!1}function $s(l){Us(l==="about"?"/about":"/")}function Aa(){K.value=!K.value}function Pa(){K.value=!1}async function Fa(){cn();const l=!Xe.value;l&&(u.value={left:Fe.value,top:_e.value,anchor:xn.value}),Xe.value=l,await en(),cn()}async function Ia(){Xe.value&&!u.value&&(cn(),u.value={left:Fe.value,top:_e.value,anchor:xn.value}),Xe.value=!1,await en(),cn()}function Ra(){return new Promise(l=>{requestAnimationFrame(()=>requestAnimationFrame(l))})}async function Js(){if(await en(),await Ra(),cn(),!Xe.value&&u.value){const l=u.value;xn.value=l.anchor||xn.value,Fe.value=kt(l.left),l.top!=null&&(_e.value=tt(l.top)),u.value=null;return}cn()}async function Ha(){if(Ie.value=!Ie.value,Ie.value){Xe.value=!1,await en(),Jt();return}await en(),Jt()}function qs(){if(typeof document>"u")return 0;const l=document.querySelector(".topbar");return l&&l.offsetHeight?l.offsetHeight:0}function wt(){if(typeof window>"u")return{width:0,height:0,offsetLeft:0,offsetTop:0};const l=window.visualViewport;return l?{width:l.width,height:l.height,offsetLeft:l.offsetLeft||0,offsetTop:l.offsetTop||0}:{width:window.innerWidth,height:window.innerHeight,offsetLeft:0,offsetTop:0}}function kt(l){const f=We.value;if(!f||typeof window>"u")return l;const{width:g,offsetLeft:k}=wt(),F=k+dn,$=Math.max(F,k+g-f.offsetWidth-dn);return Math.min(Math.max(l,F),$)}function tt(l){const f=We.value;if(!f||typeof window>"u")return l;const{height:g,offsetTop:k}=wt(),F=Math.max(qs()+dn,k+dn),$=Math.max(F,k+g-f.offsetHeight-dn);return Math.min(Math.max(l,F),$)}function cn(){const l=We.value;if(_e.value==null&&l&&typeof window<"u"){const{height:f,offsetTop:g}=wt();_e.value=tt(g+f-l.offsetHeight-24)}Fe.value=kt(Fe.value),_e.value!=null&&(_e.value=tt(_e.value))}function Da(){cn(),xn.value="top-right";const f=We.value?.offsetWidth||0,{width:g,offsetLeft:k}=wt();Fe.value=kt(k+g-f-dn),_e.value=tt(qs()+dn)}function Jt(){cn(),xn.value="bottom-left";const f=We.value?.offsetHeight||0,{height:g,offsetTop:k}=wt();Fe.value=kt(dn),_e.value=tt(k+g-f-dn)}function Xs(l){if(!p.active||l.pointerId!==p.pointerId)return;l.preventDefault();const f=l.clientX-p.startX,g=l.clientY-p.startY;Fe.value=kt(p.startLeft+f),_e.value!=null&&(_e.value=tt(p.startTop+g))}function Ys(){window.removeEventListener("pointermove",Xs),window.removeEventListener("pointerup",qt),window.removeEventListener("pointercancel",qt)}function Zs(l){const f=p.element;if(p.active=!1,p.element=null,p.pointerId=null,f?.releasePointerCapture&&l!=null)try{f.releasePointerCapture(l)}catch{}}function qt(l){!p.active||l.pointerId!==p.pointerId||(Ys(),Zs(l.pointerId))}function Na(){p.active&&(Ys(),Zs(p.pointerId))}function Oa(l){const f=l.timeStamp||Date.now();f-vt<=xf&&l.preventDefault(),vt=f}function Wa(l){if(p.active||l.pointerType==="mouse"&&l.button!==0)return;const f=l.target;if(f&&typeof f.closest=="function"&&f.closest("button, a, input, select, textarea, label, [role='button'], .filter-panel"))return;cn(),xn.value="free",l.preventDefault(),p.active=!0,p.pointerId=l.pointerId,p.startX=l.clientX,p.startY=l.clientY,p.startLeft=Fe.value,p.startTop=_e.value??0,p.element=We.value;const k=We.value;if(k?.setPointerCapture)try{k.setPointerCapture(l.pointerId)}catch{}window.addEventListener("pointermove",Xs),window.addEventListener("pointerup",qt),window.addEventListener("pointercancel",qt)}function Qs(l){!l||!l.touches||l.touches.length===2&&(w.active=!0,w.startDistance=y(l.touches[0],l.touches[1]))}function er(l){if(!w.active||!l||!l.touches||l.touches.length!==2)return;l.preventDefault();const f=y(l.touches[0],l.touches[1]),g=w.startDistance||f,k=g?f/g:1;if(k>=Lf){R(1),w.startDistance=f;return}k<=Mf&&(R(-1),w.startDistance=f)}function Xt(l){(l?.touches?.length??0)<2&&(w.active=!1,w.startDistance=0)}function Bn(){cn()}function _t(l,{persist:f=!1}={}){const g=t.includes(l)?l:ot;if(r.value=g,f)try{localStorage.setItem(eo,g),localStorage.setItem(no,"1")}catch{}}function Ba(l){i.value=!0,_t(l,{persist:!0})}function Ka(l){const f=l?.target?.value;f&&Ba(f)}function ja(){try{return localStorage.getItem(eo)}catch{return null}}function Va(){try{return localStorage.getItem(no)==="1"}catch{return!1}}function Ga(){const l=ja(),f=Va();if(_t(ot),l&&f&&t.includes(l)){i.value=!0,_t(l);return}Ua()}async function Ua(){const l=!i.value;l||(r.value,void 0);const f=[$a,Ja];for(const g of f){const k=await g();if(k){const F=String(k).toUpperCase();if(!l)return;const $=F==="RU"?"ru":["DE","AT","CH"].includes(F)?"de":ot;_t($);return}}l&&_t(ot)}async function $a(){try{const l=await fetch("https://ipapi.co/json/");return l.ok&&(await l.json())?.country_code||null}catch(l){console.warn("ipapi lookup failed:",l)}return null}async function Ja(){try{const l=await fetch("https://ipwho.is/");return l.ok&&(await l.json())?.country_code||null}catch(l){console.warn("ipwho.is lookup failed:",l)}return null}function Pf(l,f){}function nr(){Us("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function Oi(l){const f=l.detail,g=f?.laneIndex;if(Number.isInteger(g)&&be.value[g]){ve.value=g;return}const k=f?.composer?.name;if(!k)return;const F=be.value.findIndex($=>$.name===k);F>=0&&(ve.value=F)}function tr(){ve.value=null}function ir(){!Ri.value||ve.value===null||(ve.value-=1)}function sr(){!Hi.value||ve.value===null||(ve.value+=1)}zi(async()=>{Ga(),Ni(),await en(),Jt(),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(Oi),window.addEventListener("popstate",Gs),window.addEventListener("composer-select",Oi),window.addEventListener("resize",Bn),window.visualViewport&&(window.visualViewport.addEventListener("resize",Bn),window.visualViewport.addEventListener("scroll",Bn)),Bn();const l=document.getElementById("timeline");l&&(l.addEventListener("scroll",N,{passive:!0}),l.addEventListener("touchstart",Qs,{passive:!0}),l.addEventListener("touchmove",er,{passive:!1}),l.addEventListener("touchend",Xt,{passive:!0}),l.addEventListener("touchcancel",Xt,{passive:!0}),N())}),Ai(()=>{window.removeEventListener("popstate",Gs),window.removeEventListener("composer-select",Oi),window.removeEventListener("resize",Bn),window.visualViewport&&(window.visualViewport.removeEventListener("resize",Bn),window.visualViewport.removeEventListener("scroll",Bn)),Na();const l=document.getElementById("timeline");l&&(l.removeEventListener("scroll",N),l.removeEventListener("touchstart",Qs),l.removeEventListener("touchmove",er),l.removeEventListener("touchend",Xt),l.removeEventListener("touchcancel",Xt))}),nn(d,l=>{l&&(document.title=l)},{immediate:!0}),nn(r,l=>{const f=t.includes(l)?l:ot;if(f!==l){r.value=f;return}try{document.documentElement.setAttribute("data-lang",f)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(re.value)}),nn(Se,async l=>{l?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await en(),Wn.value.length&&or()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",rr())}),nn(ve,l=>{const f=window.timeline;!f||typeof f.setSelectedLane!="function"||(Number.isInteger(l)?f.setSelectedLane(l):f.setSelectedLane(null))}),nn(Wn,async l=>{Se.value&&(rr(),await en(),l.length&&or())}),nn(()=>be.value.map(l=>l.name),l=>{if(ve.value===null)return;const f=le.value;if(!f){ve.value=null;return}const g=l.findIndex(k=>k===f.name);g===-1?ve.value=null:ve.value=g});function Wi(l){return l?me?me.endsWith("/")&&l.startsWith("/")?me+l.slice(1):!me.endsWith("/")&&!l.startsWith("/")?`${me}/${l}`:me+l:l:me}function qa(l){if(!l)return"";const f=ge;if(!f)return"";const g=f.endsWith("/");return`${f}${g?"":"/"}${l}`}function rr(){ee.forEach(l=>{try{l.pause(),l.currentTime=0}catch(f){console.error("Failed to stop SoundCloud audio",f)}}),ee.clear()}function or(l,f=document){const k=(f||document).querySelectorAll("[data-soundcloud-playlist]");k.length&&(k.length,k.forEach(F=>{Xa(F,()=>{})}))}async function Xa(l,f){const g=()=>{typeof f=="function"&&setTimeout(()=>f(),0)};if(!l||l.dataset.soundcloudReady==="true"||l.dataset.soundcloudReady==="loading"||l.dataset.soundcloudReady==="error"){g();return}const k=l.getAttribute("data-soundcloud-playlist"),F=l.getAttribute("data-soundcloud-playlist-alt")||"",$=[k,...F.split("|")].map(Ke=>(Ke||"").trim()).filter(Boolean);if(!$.length){g();return}l.dataset.soundcloudReady="loading",l.innerHTML='<div class="sc-player__status">Loading tracks from SoundCloud...</div>';let oe=null;for(const Ke of $)try{const ke=await Za(Ke),Kn=Array.isArray(ke.tracks)&&ke.tracks.length?ke.tracks:ke&&ke.kind==="track"?[ke]:[],Te=Qa(Kn);tl(l,Te,Ke),g();return}catch(ke){if(oe=ke,ke&&ke.status===429){ar(l,Ke),g();return}}console.error("Failed to build SoundCloud player",oe);const Be=$[0]||q;ar(l,Be),g()}async function Ya(l){if(!l)throw new Error("No track provided");const f=l.media&&Array.isArray(l.media.transcodings)?l.media.transcodings:[];if(f.length){let g=f.find(k=>k&&k.format&&k.format.protocol==="progressive");if(g||(g=f[0]),g&&g.url)try{const k=await el(g.url,l.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:l.id,transcodingUrl:g.url,finalUrl:k}),k}catch(k){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",k)}}if(!l.id)throw new Error("No track id provided");return nl(l.id,l.track_authorization)}async function Za(l){const f=Wi("/api/soundcloud/playlist")+`?url=${encodeURIComponent(l)}`,g=await fetch(f);if(!g.ok){const k=new Error(`SoundCloud playlist error: ${g.status}`);throw k.status=g.status,k.retryAfter=Number(g.headers?.get("Retry-After"))||void 0,k}return g.json()}function Qa(l=[]){return Array.isArray(l)?l.map((f,g)=>{if(!f)return null;const k=`Track ${g+1}`,$=[f.title,f.publisher_metadata?.release_title,f.permalink,f.permalink_url,f.id?String(f.id):null].map(oe=>typeof oe=="string"?oe.trim():"").filter(Boolean)[0]||k;return{...f,title:$}}).filter(Boolean):[]}async function el(l,f){const g=new URLSearchParams;g.set("url",l),f&&g.set("track_authorization",f),a.value&&g.set("proxy","1");const k=Wi("/api/soundcloud/transcoding")+`?${g.toString()}`,F=await fetch(k);if(!F.ok){const oe=new Error(`SoundCloud transcoding error: ${F.status}`);throw oe.status=F.status,oe.retryAfter=Number(F.headers?.get("Retry-After"))||void 0,oe}const $=await F.json();if(!$?.url)throw new Error("Transcoding response missing url");return $.url}async function nl(l,f){const g=new URLSearchParams;f&&g.set("track_authorization",f),a.value&&g.set("proxy","1");const k=g.toString(),F=Wi(`/api/soundcloud/streams/${l}`)+(k?`?${k}`:""),$=await fetch(F);if(!$.ok){const Be=new Error(`SoundCloud stream error: ${$.status}`);throw Be.status=$.status,Be.retryAfter=Number($.headers?.get("Retry-After"))||void 0,Be}const oe=await $.json();if(!oe?.url)throw new Error("Stream response missing url");return oe.url}function ar(l,f){const g=`https://w.soundcloud.com/player/?url=${encodeURIComponent(f)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;l.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${g}"
    ></iframe>
  `,l.dataset.soundcloudReady="true"}function tl(l,f,g){if(!Array.isArray(f)||!f.length){l.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',l.dataset.soundcloudReady="error";return}l.classList.add("sc-player");const k=document.createElement("div");k.className="sc-track-list";const F=document.createElement("audio");F.preload="none",ee.add(F);let $=null,oe=null,Be=!1;const Ke=(Te,Re)=>{Te.dataset.state=Re,Te.textContent=Re==="playing"?"⏸":Re==="loading"?"...":"▶"},ke=Te=>Ke(Te,"idle"),Kn=()=>{oe&&ke(oe),$=null,oe=null};F.addEventListener("ended",Kn),F.addEventListener("pause",()=>{oe&&F.currentTime<(F.duration||1/0)&&ke(oe)}),f.forEach((Te,Re)=>{const it=document.createElement("div");it.className="sc-track";const Ce=document.createElement("button");Ce.type="button",Ce.className="sc-track__button",Ce.setAttribute("aria-label","Play track"),Ke(Ce,"idle");const jn=document.createElement("div");jn.className="sc-track__title",jn.textContent=Te?.title||`Track ${Re+1}`,it.append(Ce,jn),k.append(it),Ce.addEventListener("click",async()=>{if(!Be){if($===(Te?.id??Re)&&!F.paused){F.pause(),ke(Ce);return}Be=!0,Ke(Ce,"loading");try{const gn=await Ya(Te);if(!gn)throw new Error("No stream URL returned");F.src=gn,await F.play(),oe&&oe!==Ce&&ke(oe),oe=Ce,$=Te?.id??Re,Ke(Ce,"playing")}catch(gn){console.error("Failed to play SoundCloud track",gn),ke(Ce),l.dataset.soundcloudReady="error"}finally{Be=!1}}})}),l.innerHTML="",l.append(k,F),l.dataset.soundcloudReady="true"}return(l,f)=>(ce(),de("div",ad,[x("header",ld,[x("button",{class:"menu-button",onClick:Aa,"aria-label":"Toggle navigation menu"},[...f[6]||(f[6]=[x("span",{class:"menu-icon"},null,-1)])]),x("img",{class:"logo",src:Ru,alt:"Logo",onClick:nr}),x("div",{class:"app-title",role:"button",onClick:nr},te(d.value),1),x("div",cd,[x("label",ud,te(b.value),1),$i(x("select",{id:"language-select",class:"language-select","onUpdate:modelValue":f[0]||(f[0]=g=>r.value=g),"aria-label":b.value,onChange:Ka},[(ce(!0),de(Ve,null,ni(m.value,g=>(ce(),de("option",{key:g.value,value:g.value},te(g.label),9,fd))),128))],40,dd),[[Eu,r.value]])])]),x("aside",{class:ut(["side-menu",{"side-menu--open":K.value}])},[x("nav",hd,[x("button",{class:ut(["menu-item",{"menu-item--active":L.value==="composers"}]),onClick:f[1]||(f[1]=g=>$s("composers"))},te(T.value.composers),3),x("button",{class:ut(["menu-item",{"menu-item--active":L.value==="about"}]),onClick:f[2]||(f[2]=g=>$s("about"))},te(T.value.about),3)])],2),K.value?(ce(),de("div",{key:0,class:"backdrop",onClick:Pa})):$e("",!0),x("main",md,[L.value==="composers"?(ce(),de("section",pd,[x("div",{class:"filter-dock",style:Ci(h.value),ref_key:"filterDockRef",ref:We,onPointerdown:Wa,onTouchend:Oa},[x("div",gd,[x("div",bd,[x("button",{type:"button",class:"filter-dock__collapse control-btn","aria-pressed":Ie.value,"aria-label":Ie.value?$t.value.restore:$t.value.minimize,onClick:Ha},[x("span",yd,te(Ie.value?"↑":"↓"),1)],8,vd)]),!Xe.value&&!Ie.value?(ce(),de("div",wd,[x("button",{type:"button",class:"control-btn",disabled:_.value,onClick:Z,"aria-label":"Jump to start of timeline"}," ⇤ ",8,kd),x("button",{type:"button",class:"control-btn",disabled:H.value,onClick:ae,"aria-label":"Jump to end of timeline"}," ⇥ ",8,_d)])):$e("",!0),!Xe.value&&!Ie.value?(ce(),de("div",Sd,[x("button",{type:"button",class:"control-btn",disabled:E.value,onClick:f[3]||(f[3]=g=>R(-1)),"aria-label":"Make timeline blocks smaller"}," − ",8,Td),x("button",{type:"button",class:"control-btn",disabled:C.value,onClick:f[4]||(f[4]=g=>R(1)),"aria-label":"Make timeline blocks larger"}," + ",8,Cd)])):$e("",!0),Ie.value?$e("",!0):(ce(),de("button",{key:2,class:"filter-dock__toggle control-btn control-primary","aria-expanded":Xe.value,"aria-controls":"filter-panel",onClick:Fa,"aria-label":"Filter composers"},[...f[7]||(f[7]=[x("svg",{class:"filter-icon",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[x("path",{d:"M3 5h18l-7 8v5l-4 2v-7L3 5z"})],-1)])],8,Ed)),ze(xr,{name:"filter-fade",onAfterEnter:Js,onAfterLeave:Js},{default:ds(()=>[Xe.value?(ce(),de("div",xd,[x("div",Md,[(ce(),de(Ve,null,ni(Pe,g=>x("label",{key:g.id,class:"filter-panel__item"},[$i(x("input",{"onUpdate:modelValue":k=>et.value[g.id]=k,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${Vs(g.id)}`},null,8,Ld),[[jr,et.value[g.id]]]),x("span",zd,te(Vs(g.id)),1)])),64))]),x("div",Ad,[x("button",{type:"button",class:"filter-panel__ok control-btn",onClick:Ia,"aria-label":"Close filters"},te(V.value),1)])])):$e("",!0)]),_:1})])],36),ze(rd,{composers:be.value,settings:v,"era-labels":re.value},null,8,["composers","settings","era-labels"])])):L.value==="about"?(ce(),de("section",Pd,[x("div",Fd,[f[11]||(f[11]=x("img",{class:"about__logo",src:Hu,alt:"Music logo",loading:"lazy"},null,-1)),x("h1",Id,te(S.value.title),1),x("p",Rd,te(S.value.intro),1),x("p",Hd,te(S.value.goal),1),x("div",Dd,[f[10]||(f[10]=x("img",{class:"about__photo",src:Du,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),x("div",Nd,[x("div",Od,te(S.value.authorLabel),1),x("div",Wd,te(S.value.authorName),1),f[8]||(f[8]=x("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),f[9]||(f[9]=x("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),x("div",Bd,[x("div",Kd,te(S.value.contributorsTitle),1),x("ul",jd,[(ce(!0),de(Ve,null,ni(A.value,g=>(ce(),de("li",{key:g.url,class:"about__contributors-item"},[x("span",Vd,te(g.name),1),x("a",{class:"about__contributors-link",href:g.url,target:"_blank",rel:"noreferrer"},te(g.linkText),9,Gd),g.url==="https://facebook.com/olga.shibanova"?(ce(),de("div",Ud,[x("label",$d,[$i(x("input",{"onUpdate:modelValue":f[5]||(f[5]=k=>o.value=k),class:"about__contributors-toggle-input",type:"checkbox","aria-label":"Toggle test features"},null,512),[[jr,o.value]]),x("span",null,te(O.value),1)])])):$e("",!0)]))),128))])])])])):$e("",!0)]),ze(xr,{name:"fade"},{default:ds(()=>[Se.value?(ce(),de("div",{key:0,class:"composer-modal",onClick:Lu(tr,["self"])},[x("div",Jd,[x("header",qd,[x("div",Xd,[x("h2",Yd,te(nt.value),1),le.value?(ce(),de("p",Zd,te(le.value.birth)+" — "+te(le.value.death),1)):$e("",!0)]),x("div",Qd,[x("button",{class:"composer-modal__arrow",onClick:ir,disabled:!Ri.value,"aria-label":"Previous"}," ← ",8,ef),x("span",nf,te((ve.value??0)+1)+" / "+te(be.value.length),1),x("button",{class:"composer-modal__arrow",onClick:sr,disabled:!Hi.value,"aria-label":"Next"}," → ",8,tf)]),x("button",{class:"composer-modal__close",onClick:tr,"aria-label":"Close composer details"},"×")]),x("div",sf,[yt.value?(ce(),de("div",rf,[x("img",{class:"composer-modal__photo",src:yt.value,alt:nt.value},null,8,of),x("div",af,[x("button",{class:"composer-modal__arrow",onClick:ir,disabled:!Ri.value,"aria-label":"Previous"}," ← ",8,lf),x("span",cf,te((ve.value??0)+1)+" / "+te(be.value.length),1),x("button",{class:"composer-modal__arrow",onClick:sr,disabled:!Hi.value,"aria-label":"Next"}," → ",8,uf)]),x("div",df,[x("div",ff,te(nt.value),1),le.value?(ce(),de("div",hf,te(le.value.birth)+" — "+te(le.value.death),1)):$e("",!0)])])):$e("",!0),x("div",mf,[x("div",pf,[x("div",gf,te(G.value.keyWorks),1),Wn.value.length?(ce(),de("a",bf,[...f[12]||(f[12]=[x("img",{class:"sc-powered__img",src:Nu,alt:"Powered by SoundCloud"},null,-1)])])):$e("",!0)]),Wn.value.length?(ce(),de("div",{key:Wn.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":Wn.value[0],"data-soundcloud-playlist-alt":Wn.value.slice(1).join("|")},[...f[13]||(f[13]=[x("div",{class:"sc-player__status"},"Loading tracks...",-1)])],8,vf)):(ce(),de("div",yf," Playlist will appear here soon. "))]),x("div",wf,[js.value?(ce(),de("div",kf,te(js.value),1)):$e("",!0),Ks.value?(ce(),de("ul",_f,[(ce(!0),de(Ve,null,ni(Ks.value.split(`
`),(g,k)=>(ce(),de("li",{key:k},[x("span",Sf,te(g),1)]))),128))])):(ce(),de("p",Tf,"No description yet."))])])])])):$e("",!0)]),_:1})]))}},Af=wa(zf,[["__scopeId","data-v-2c9d0449"]]);Pu(Af).mount("#app");
