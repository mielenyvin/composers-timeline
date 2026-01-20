(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function lr(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const ze={},Dt=[],Hn=()=>{},Go=()=>!1,rs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),cr=e=>e.startsWith("onUpdate:"),Xe=Object.assign,ur=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Hl=Object.prototype.hasOwnProperty,ke=(e,n)=>Hl.call(e,n),J=Array.isArray,Nt=e=>bi(e)==="[object Map]",$t=e=>bi(e)==="[object Set]",Vr=e=>bi(e)==="[object Date]",ne=e=>typeof e=="function",Re=e=>typeof e=="string",Nn=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",jo=e=>(Ce(e)||ne(e))&&ne(e.then)&&ne(e.catch),Vo=Object.prototype.toString,bi=e=>Vo.call(e),Dl=e=>bi(e).slice(8,-1),$o=e=>bi(e)==="[object Object]",dr=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ii=lr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),os=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Nl=/-\w/g,dt=os(e=>e.replace(Nl,n=>n.slice(1).toUpperCase())),Wl=/\B([A-Z])/g,Et=os(e=>e.replace(Wl,"-$1").toLowerCase()),qo=os(e=>e.charAt(0).toUpperCase()+e.slice(1)),Es=os(e=>e?`on${qo(e)}`:""),ut=(e,n)=>!Object.is(e,n),Gi=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Uo=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},Jo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Bl=e=>{const n=Re(e)?Number(e):NaN;return isNaN(n)?e:n};let $r;const as=()=>$r||($r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function St(e){if(J(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=Re(i)?Vl(i):St(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(Re(e)||Ce(e))return e}const Kl=/;(?![^(]*\))/g,Gl=/:([^]+)/,jl=/\/\*[^]*?\*\//g;function Vl(e){const n={};return e.replace(jl,"").split(Kl).forEach(t=>{if(t){const i=t.split(Gl);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function wn(e){let n="";if(Re(e))n=e;else if(J(e))for(let t=0;t<e.length;t++){const i=wn(e[t]);i&&(n+=i+" ")}else if(Ce(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const $l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ql=lr($l);function Xo(e){return!!e||e===""}function Ul(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=yi(e[i],n[i]);return t}function yi(e,n){if(e===n)return!0;let t=Vr(e),i=Vr(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=Nn(e),i=Nn(n),t||i)return e===n;if(t=J(e),i=J(n),t||i)return t&&i?Ul(e,n):!1;if(t=Ce(e),i=Ce(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=n.hasOwnProperty(a);if(l&&!c||!l&&c||!yi(e[a],n[a]))return!1}}return String(e)===String(n)}function hr(e,n){return e.findIndex(t=>yi(t,n))}const Yo=e=>!!(e&&e.__v_isRef===!0),O=e=>Re(e)?e:e==null?"":J(e)||Ce(e)&&(e.toString===Vo||!ne(e.toString))?Yo(e)?O(e.value):JSON.stringify(e,Qo,2):String(e),Qo=(e,n)=>Yo(n)?Qo(e,n.value):Nt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[zs(i,r)+" =>"]=s,t),{})}:$t(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>zs(t))}:Nn(n)?zs(n):Ce(n)&&!J(n)&&!$o(n)?String(n):n,zs=(e,n="")=>{var t;return Nn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let gn;class Jl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gn,!n&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=gn;try{return gn=this,n()}finally{gn=t}}}on(){++this._on===1&&(this.prevScope=gn,gn=this)}off(){this._on>0&&--this._on===0&&(gn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xl(){return gn}let Me;const Ls=new WeakSet;class Zo{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gn&&gn.active&&gn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ls.has(this)&&(Ls.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||na(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qr(this),ta(this);const n=Me,t=Mn;Me=this,Mn=!0;try{return this.fn()}finally{ia(this),Me=n,Mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)pr(n);this.deps=this.depsTail=void 0,qr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ls.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){js(this)&&this.run()}get dirty(){return js(this)}}let ea=0,si,ri;function na(e,n=!1){if(e.flags|=8,n){e.next=ri,ri=e;return}e.next=si,si=e}function fr(){ea++}function mr(){if(--ea>0)return;if(ri){let n=ri;for(ri=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;si;){let n=si;for(si=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function ta(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function ia(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),pr(i),Yl(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function js(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(sa(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function sa(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ui)||(e.globalVersion=ui,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!js(e))))return;e.flags|=2;const n=e.dep,t=Me,i=Mn;Me=e,Mn=!0;try{ta(e);const s=e.fn(e._value);(n.version===0||ut(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{Me=t,Mn=i,ia(e),e.flags&=-3}}function pr(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)pr(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Yl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Mn=!0;const ra=[];function Xn(){ra.push(Mn),Mn=!1}function Yn(){const e=ra.pop();Mn=e===void 0?!0:e}function qr(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=Me;Me=void 0;try{n()}finally{Me=t}}}let ui=0;class Ql{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Me||!Mn||Me===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Me)t=this.activeLink=new Ql(Me,this),Me.deps?(t.prevDep=Me.depsTail,Me.depsTail.nextDep=t,Me.depsTail=t):Me.deps=Me.depsTail=t,oa(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Me.depsTail,t.nextDep=void 0,Me.depsTail.nextDep=t,Me.depsTail=t,Me.deps===t&&(Me.deps=i)}return t}trigger(n){this.version++,ui++,this.notify(n)}notify(n){fr();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{mr()}}}function oa(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)oa(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Vs=new WeakMap,Tt=Symbol(""),$s=Symbol(""),di=Symbol("");function Ze(e,n,t){if(Mn&&Me){let i=Vs.get(e);i||Vs.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new gr),s.map=i,s.key=t),s.track()}}function Un(e,n,t,i,s,r){const a=Vs.get(e);if(!a){ui++;return}const l=c=>{c&&c.trigger()};if(fr(),n==="clear")a.forEach(l);else{const c=J(e),p=c&&dr(t);if(c&&t==="length"){const h=Number(i);a.forEach((g,C)=>{(C==="length"||C===di||!Nn(C)&&C>=h)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),p&&l(a.get(di)),n){case"add":c?p&&l(a.get("length")):(l(a.get(Tt)),Nt(e)&&l(a.get($s)));break;case"delete":c||(l(a.get(Tt)),Nt(e)&&l(a.get($s)));break;case"set":Nt(e)&&l(a.get(Tt));break}}mr()}function It(e){const n=ye(e);return n===e?n:(Ze(n,"iterate",di),Cn(e)?n:n.map(xn))}function ls(e){return Ze(e=ye(e),"iterate",di),e}function st(e,n){return Qn(e)?Ct(e)?Vt(xn(n)):Vt(n):xn(n)}const Zl={__proto__:null,[Symbol.iterator](){return Ms(this,Symbol.iterator,e=>st(this,e))},concat(...e){return It(this).concat(...e.map(n=>J(n)?It(n):n))},entries(){return Ms(this,"entries",e=>(e[1]=st(this,e[1]),e))},every(e,n){return jn(this,"every",e,n,void 0,arguments)},filter(e,n){return jn(this,"filter",e,n,t=>t.map(i=>st(this,i)),arguments)},find(e,n){return jn(this,"find",e,n,t=>st(this,t),arguments)},findIndex(e,n){return jn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return jn(this,"findLast",e,n,t=>st(this,t),arguments)},findLastIndex(e,n){return jn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return jn(this,"forEach",e,n,void 0,arguments)},includes(...e){return xs(this,"includes",e)},indexOf(...e){return xs(this,"indexOf",e)},join(e){return It(this).join(e)},lastIndexOf(...e){return xs(this,"lastIndexOf",e)},map(e,n){return jn(this,"map",e,n,void 0,arguments)},pop(){return Zt(this,"pop")},push(...e){return Zt(this,"push",e)},reduce(e,...n){return Ur(this,"reduce",e,n)},reduceRight(e,...n){return Ur(this,"reduceRight",e,n)},shift(){return Zt(this,"shift")},some(e,n){return jn(this,"some",e,n,void 0,arguments)},splice(...e){return Zt(this,"splice",e)},toReversed(){return It(this).toReversed()},toSorted(e){return It(this).toSorted(e)},toSpliced(...e){return It(this).toSpliced(...e)},unshift(...e){return Zt(this,"unshift",e)},values(){return Ms(this,"values",e=>st(this,e))}};function Ms(e,n,t){const i=ls(e),s=i[n]();return i!==e&&!Cn(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const ec=Array.prototype;function jn(e,n,t,i,s,r){const a=ls(e),l=a!==e&&!Cn(e),c=a[n];if(c!==ec[n]){const g=c.apply(e,r);return l?xn(g):g}let p=t;a!==e&&(l?p=function(g,C){return t.call(this,st(e,g),C,e)}:t.length>2&&(p=function(g,C){return t.call(this,g,C,e)}));const h=c.call(a,p,i);return l&&s?s(h):h}function Ur(e,n,t,i){const s=ls(e);let r=t;return s!==e&&(Cn(e)?t.length>3&&(r=function(a,l,c){return t.call(this,a,l,c,e)}):r=function(a,l,c){return t.call(this,a,st(e,l),c,e)}),s[n](r,...i)}function xs(e,n,t){const i=ye(e);Ze(i,"iterate",di);const s=i[n](...t);return(s===-1||s===!1)&&yr(t[0])?(t[0]=ye(t[0]),i[n](...t)):s}function Zt(e,n,t=[]){Xn(),fr();const i=ye(e)[n].apply(e,t);return mr(),Yn(),i}const nc=lr("__proto__,__v_isRef,__isVue"),aa=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nn));function tc(e){Nn(e)||(e=String(e));const n=ye(this);return Ze(n,"has",e),n.hasOwnProperty(e)}class la{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?hc:ha:r?da:ua).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const a=J(n);if(!s){let c;if(a&&(c=Zl[t]))return c;if(t==="hasOwnProperty")return tc}const l=Reflect.get(n,t,Je(n)?n:i);if((Nn(t)?aa.has(t):nc(t))||(s||Ze(n,"get",t),r))return l;if(Je(l)){const c=a&&dr(t)?l:l.value;return s&&Ce(c)?Us(c):c}return Ce(l)?s?Us(l):Wt(l):l}}class ca extends la{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const a=J(n)&&dr(t);if(!this._isShallow){const p=Qn(r);if(!Cn(i)&&!Qn(i)&&(r=ye(r),i=ye(i)),!a&&Je(r)&&!Je(i))return p||(r.value=i),!0}const l=a?Number(t)<n.length:ke(n,t),c=Reflect.set(n,t,i,Je(n)?n:s);return n===ye(s)&&(l?ut(i,r)&&Un(n,"set",t,i):Un(n,"add",t,i)),c}deleteProperty(n,t){const i=ke(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&Un(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!Nn(t)||!aa.has(t))&&Ze(n,"has",t),i}ownKeys(n){return Ze(n,"iterate",J(n)?"length":Tt),Reflect.ownKeys(n)}}class ic extends la{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const sc=new ca,rc=new ic,oc=new ca(!0);const qs=e=>e,Ri=e=>Reflect.getPrototypeOf(e);function ac(e,n,t){return function(...i){const s=this.__v_raw,r=ye(s),a=Nt(r),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=s[e](...i),h=t?qs:n?Vt:xn;return!n&&Ze(r,"iterate",c?$s:Tt),{next(){const{value:g,done:C}=p.next();return C?{value:g,done:C}:{value:l?[h(g[0]),h(g[1])]:h(g),done:C}},[Symbol.iterator](){return this}}}}function Ii(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function lc(e,n){const t={get(s){const r=this.__v_raw,a=ye(r),l=ye(s);e||(ut(s,l)&&Ze(a,"get",s),Ze(a,"get",l));const{has:c}=Ri(a),p=n?qs:e?Vt:xn;if(c.call(a,s))return p(r.get(s));if(c.call(a,l))return p(r.get(l));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Ze(ye(s),"iterate",Tt),s.size},has(s){const r=this.__v_raw,a=ye(r),l=ye(s);return e||(ut(s,l)&&Ze(a,"has",s),Ze(a,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const a=this,l=a.__v_raw,c=ye(l),p=n?qs:e?Vt:xn;return!e&&Ze(c,"iterate",Tt),l.forEach((h,g)=>s.call(r,p(h),p(g),a))}};return Xe(t,e?{add:Ii("add"),set:Ii("set"),delete:Ii("delete"),clear:Ii("clear")}:{add(s){!n&&!Cn(s)&&!Qn(s)&&(s=ye(s));const r=ye(this);return Ri(r).has.call(r,s)||(r.add(s),Un(r,"add",s,s)),this},set(s,r){!n&&!Cn(r)&&!Qn(r)&&(r=ye(r));const a=ye(this),{has:l,get:c}=Ri(a);let p=l.call(a,s);p||(s=ye(s),p=l.call(a,s));const h=c.call(a,s);return a.set(s,r),p?ut(r,h)&&Un(a,"set",s,r):Un(a,"add",s,r),this},delete(s){const r=ye(this),{has:a,get:l}=Ri(r);let c=a.call(r,s);c||(s=ye(s),c=a.call(r,s)),l&&l.call(r,s);const p=r.delete(s);return c&&Un(r,"delete",s,void 0),p},clear(){const s=ye(this),r=s.size!==0,a=s.clear();return r&&Un(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ac(s,e,n)}),t}function vr(e,n){const t=lc(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(ke(t,s)&&s in i?t:i,s,r)}const cc={get:vr(!1,!1)},uc={get:vr(!1,!0)},dc={get:vr(!0,!1)};const ua=new WeakMap,da=new WeakMap,ha=new WeakMap,hc=new WeakMap;function fc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mc(e){return e.__v_skip||!Object.isExtensible(e)?0:fc(Dl(e))}function Wt(e){return Qn(e)?e:br(e,!1,sc,cc,ua)}function pc(e){return br(e,!1,oc,uc,da)}function Us(e){return br(e,!0,rc,dc,ha)}function br(e,n,t,i,s){if(!Ce(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=mc(e);if(r===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,r===2?i:t);return s.set(e,l),l}function Ct(e){return Qn(e)?Ct(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function Cn(e){return!!(e&&e.__v_isShallow)}function yr(e){return e?!!e.__v_raw:!1}function ye(e){const n=e&&e.__v_raw;return n?ye(n):e}function gc(e){return!ke(e,"__v_skip")&&Object.isExtensible(e)&&Uo(e,"__v_skip",!0),e}const xn=e=>Ce(e)?Wt(e):e,Vt=e=>Ce(e)?Us(e):e;function Je(e){return e?e.__v_isRef===!0:!1}function ge(e){return vc(e,!1)}function vc(e,n){return Je(e)?e:new bc(e,n)}class bc{constructor(n,t){this.dep=new gr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ye(n),this._value=t?n:xn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||Cn(n)||Qn(n);n=i?n:ye(n),ut(n,t)&&(this._rawValue=n,this._value=i?n:xn(n),this.dep.trigger())}}function yc(e){return Je(e)?e.value:e}const wc={get:(e,n,t)=>n==="__v_raw"?e:yc(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return Je(s)&&!Je(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function fa(e){return Ct(e)?e:new Proxy(e,wc)}class kc{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new gr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return na(this,!0),!0}get value(){const n=this.dep.track();return sa(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function _c(e,n,t=!1){let i,s;return ne(e)?i=e:(i=e.get,s=e.set),new kc(i,s,t)}const Fi={},Ji=new WeakMap;let yt;function Sc(e,n=!1,t=yt){if(t){let i=Ji.get(t);i||Ji.set(t,i=[]),i.push(e)}}function Tc(e,n,t=ze){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:l,call:c}=t,p=W=>s?W:Cn(W)||s===!1||s===0?Jn(W,1):Jn(W);let h,g,C,L,H=!1,V=!1;if(Je(e)?(g=()=>e.value,H=Cn(e)):Ct(e)?(g=()=>p(e),H=!0):J(e)?(V=!0,H=e.some(W=>Ct(W)||Cn(W)),g=()=>e.map(W=>{if(Je(W))return W.value;if(Ct(W))return p(W);if(ne(W))return c?c(W,2):W()})):ne(e)?n?g=c?()=>c(e,2):e:g=()=>{if(C){Xn();try{C()}finally{Yn()}}const W=yt;yt=h;try{return c?c(e,3,[L]):e(L)}finally{yt=W}}:g=Hn,n&&s){const W=g,he=s===!0?1/0:s;g=()=>Jn(W(),he)}const ce=Xl(),F=()=>{h.stop(),ce&&ce.active&&ur(ce.effects,h)};if(r&&n){const W=n;n=(...he)=>{W(...he),F()}}let N=V?new Array(e.length).fill(Fi):Fi;const ee=W=>{if(!(!(h.flags&1)||!h.dirty&&!W))if(n){const he=h.run();if(s||H||(V?he.some((q,Q)=>ut(q,N[Q])):ut(he,N))){C&&C();const q=yt;yt=h;try{const Q=[he,N===Fi?void 0:V&&N[0]===Fi?[]:N,L];N=he,c?c(n,3,Q):n(...Q)}finally{yt=q}}}else h.run()};return l&&l(ee),h=new Zo(g),h.scheduler=a?()=>a(ee,!1):ee,L=W=>Sc(W,!1,h),C=h.onStop=()=>{const W=Ji.get(h);if(W){if(c)c(W,4);else for(const he of W)he();Ji.delete(h)}},n?i?ee(!0):N=h.run():a?a(ee.bind(null,!0),!0):h.run(),F.pause=h.pause.bind(h),F.resume=h.resume.bind(h),F.stop=F,F}function Jn(e,n=1/0,t){if(n<=0||!Ce(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Je(e))Jn(e.value,n,t);else if(J(e))for(let i=0;i<e.length;i++)Jn(e[i],n,t);else if($t(e)||Nt(e))e.forEach(i=>{Jn(i,n,t)});else if($o(e)){for(const i in e)Jn(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Jn(e[i],n,t)}return e}function wi(e,n,t,i){try{return i?e(...i):e()}catch(s){cs(s,n,t)}}function An(e,n,t,i){if(ne(e)){const s=wi(e,n,t,i);return s&&jo(s)&&s.catch(r=>{cs(r,n,t)}),s}if(J(e)){const s=[];for(let r=0;r<e.length;r++)s.push(An(e[r],n,t,i));return s}}function cs(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||ze;if(n){let l=n.parent;const c=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h){for(let g=0;g<h.length;g++)if(h[g](e,c,p)===!1)return}l=l.parent}if(r){Xn(),wi(r,null,10,[e,c,p]),Yn();return}}Cc(e,t,s,i,a)}function Cc(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const fn=[];let In=-1;const Bt=[];let rt=null,Ht=0;const ma=Promise.resolve();let Xi=null;function vn(e){const n=Xi||ma;return e?n.then(this?e.bind(this):e):n}function Ec(e){let n=In+1,t=fn.length;for(;n<t;){const i=n+t>>>1,s=fn[i],r=hi(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function wr(e){if(!(e.flags&1)){const n=hi(e),t=fn[fn.length-1];!t||!(e.flags&2)&&n>=hi(t)?fn.push(e):fn.splice(Ec(n),0,e),e.flags|=1,pa()}}function pa(){Xi||(Xi=ma.then(va))}function zc(e){J(e)?Bt.push(...e):rt&&e.id===-1?rt.splice(Ht+1,0,e):e.flags&1||(Bt.push(e),e.flags|=1),pa()}function Jr(e,n,t=In+1){for(;t<fn.length;t++){const i=fn[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;fn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ga(e){if(Bt.length){const n=[...new Set(Bt)].sort((t,i)=>hi(t)-hi(i));if(Bt.length=0,rt){rt.push(...n);return}for(rt=n,Ht=0;Ht<rt.length;Ht++){const t=rt[Ht];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}rt=null,Ht=0}}const hi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function va(e){try{for(In=0;In<fn.length;In++){const n=fn[In];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),wi(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;In<fn.length;In++){const n=fn[In];n&&(n.flags&=-2)}In=-1,fn.length=0,ga(),Xi=null,(fn.length||Bt.length)&&va()}}let Tn=null,ba=null;function Yi(e){const n=Tn;return Tn=e,ba=e&&e.type.__scopeId||null,n}function Js(e,n=Tn,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&es(-1);const r=Yi(n);let a;try{a=e(...s)}finally{Yi(r),i._d&&es(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Xs(e,n){if(Tn===null)return e;const t=ps(Tn),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,a,l,c=ze]=n[s];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&Jn(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function pt(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let a=0;a<s.length;a++){const l=s[a];r&&(l.oldValue=r[a].value);let c=l.dir[i];c&&(Xn(),An(c,t,8,[e.el,l,e,n]),Yn())}}const Lc=Symbol("_vte"),ya=e=>e.__isTeleport,qn=Symbol("_leaveCb"),Oi=Symbol("_enterCb");function Mc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return hs(()=>{e.isMounted=!0}),ki(()=>{e.isUnmounting=!0}),e}const Sn=[Function,Array],wa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},ka=e=>{const n=e.subTree;return n.component?ka(n.component):n},xc={name:"BaseTransition",props:wa,setup(e,{slots:n}){const t=qa(),i=Mc();return()=>{const s=n.default&&Ta(n.default(),!0);if(!s||!s.length)return;const r=_a(s),a=ye(e),{mode:l}=a;if(i.isLeaving)return As(r);const c=Xr(r);if(!c)return As(r);let p=Ys(c,a,i,t,g=>p=g);c.type!==mn&&fi(c,p);let h=t.subTree&&Xr(t.subTree);if(h&&h.type!==mn&&!kt(h,c)&&ka(t).type!==mn){let g=Ys(h,a,i,t);if(fi(h,g),l==="out-in"&&c.type!==mn)return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete g.afterLeave,h=void 0},As(r);l==="in-out"&&c.type!==mn?g.delayLeave=(C,L,H)=>{const V=Sa(i,h);V[String(h.key)]=h,C[qn]=()=>{L(),C[qn]=void 0,delete p.delayedLeave,h=void 0},p.delayedLeave=()=>{H(),delete p.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function _a(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==mn){n=t;break}}return n}const Ac=xc;function Sa(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function Ys(e,n,t,i,s){const{appear:r,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:h,onEnterCancelled:g,onBeforeLeave:C,onLeave:L,onAfterLeave:H,onLeaveCancelled:V,onBeforeAppear:ce,onAppear:F,onAfterAppear:N,onAppearCancelled:ee}=n,W=String(e.key),he=Sa(t,e),q=(B,X)=>{B&&An(B,i,9,X)},Q=(B,X)=>{const $=X[1];q(B,X),J(B)?B.every(x=>x.length<=1)&&$():B.length<=1&&$()},Z={mode:a,persisted:l,beforeEnter(B){let X=c;if(!t.isMounted)if(r)X=ce||c;else return;B[qn]&&B[qn](!0);const $=he[W];$&&kt(e,$)&&$.el[qn]&&$.el[qn](),q(X,[B])},enter(B){let X=p,$=h,x=g;if(!t.isMounted)if(r)X=F||p,$=N||h,x=ee||g;else return;let se=!1;const ve=B[Oi]=De=>{se||(se=!0,De?q(x,[B]):q($,[B]),Z.delayedLeave&&Z.delayedLeave(),B[Oi]=void 0)};X?Q(X,[B,ve]):ve()},leave(B,X){const $=String(e.key);if(B[Oi]&&B[Oi](!0),t.isUnmounting)return X();q(C,[B]);let x=!1;const se=B[qn]=ve=>{x||(x=!0,X(),ve?q(V,[B]):q(H,[B]),B[qn]=void 0,he[$]===e&&delete he[$])};he[$]=e,L?Q(L,[B,se]):se()},clone(B){const X=Ys(B,n,t,i,s);return s&&s(X),X}};return Z}function As(e){if(us(e))return e=ht(e),e.children=null,e}function Xr(e){if(!us(e))return ya(e.type)&&e.children?_a(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ne(t.default))return t.default()}}function fi(e,n){e.shapeFlag&6&&e.component?(e.transition=n,fi(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Ta(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let a=e[r];const l=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===en?(a.patchFlag&128&&s++,i=i.concat(Ta(a.children,n,l))):(n||a.type!==mn)&&i.push(l!=null?ht(a,{key:l}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Ca(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Qi=new WeakMap;function oi(e,n,t,i,s=!1){if(J(e)){e.forEach((H,V)=>oi(H,n&&(J(n)?n[V]:n),t,i,s));return}if(ai(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&oi(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?ps(i.component):i.el,a=s?null:r,{i:l,r:c}=e,p=n&&n.r,h=l.refs===ze?l.refs={}:l.refs,g=l.setupState,C=ye(g),L=g===ze?Go:H=>ke(C,H);if(p!=null&&p!==c){if(Yr(n),Re(p))h[p]=null,L(p)&&(g[p]=null);else if(Je(p)){p.value=null;const H=n;H.k&&(h[H.k]=null)}}if(ne(c))wi(c,l,12,[a,h]);else{const H=Re(c),V=Je(c);if(H||V){const ce=()=>{if(e.f){const F=H?L(c)?g[c]:h[c]:c.value;if(s)J(F)&&ur(F,r);else if(J(F))F.includes(r)||F.push(r);else if(H)h[c]=[r],L(c)&&(g[c]=h[c]);else{const N=[r];c.value=N,e.k&&(h[e.k]=N)}}else H?(h[c]=a,L(c)&&(g[c]=a)):V&&(c.value=a,e.k&&(h[e.k]=a))};if(a){const F=()=>{ce(),Qi.delete(e)};F.id=-1,Qi.set(e,F),yn(F,t)}else Yr(e),ce()}}}function Yr(e){const n=Qi.get(e);n&&(n.flags|=8,Qi.delete(e))}as().requestIdleCallback;as().cancelIdleCallback;const ai=e=>!!e.type.__asyncLoader,us=e=>e.type.__isKeepAlive;function Pc(e,n){Ea(e,"a",n)}function Rc(e,n){Ea(e,"da",n)}function Ea(e,n,t=pn){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ds(n,i,t),t){let s=t.parent;for(;s&&s.parent;)us(s.parent.vnode)&&Ic(i,n,t,s),s=s.parent}}function Ic(e,n,t,i){const s=ds(n,e,i,!0);za(()=>{ur(i[n],s)},t)}function ds(e,n,t=pn,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...a)=>{Xn();const l=_i(t),c=An(n,t,e,a);return l(),Yn(),c});return i?s.unshift(r):s.push(r),r}}const Zn=e=>(n,t=pn)=>{(!pi||e==="sp")&&ds(e,(...i)=>n(...i),t)},Fc=Zn("bm"),hs=Zn("m"),Oc=Zn("bu"),Hc=Zn("u"),ki=Zn("bum"),za=Zn("um"),Dc=Zn("sp"),Nc=Zn("rtg"),Wc=Zn("rtc");function Bc(e,n=pn){ds("ec",e,n)}const Kc=Symbol.for("v-ndc");function Kt(e,n,t,i){let s;const r=t,a=J(e);if(a||Re(e)){const l=a&&Ct(e);let c=!1,p=!1;l&&(c=!Cn(e),p=Qn(e),e=ls(e)),s=new Array(e.length);for(let h=0,g=e.length;h<g;h++)s[h]=n(c?p?Vt(xn(e[h])):xn(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=n(l+1,l,void 0,r)}else if(Ce(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>n(l,c,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const h=l[c];s[c]=n(e[h],h,c,r)}}else s=[];return s}const Qs=e=>e?Ua(e)?ps(e):Qs(e.parent):null,li=Xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qs(e.parent),$root:e=>Qs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ma(e),$forceUpdate:e=>e.f||(e.f=()=>{wr(e.update)}),$nextTick:e=>e.n||(e.n=vn.bind(e.proxy)),$watch:e=>eu.bind(e)}),Ps=(e,n)=>e!==ze&&!e.__isScriptSetup&&ke(e,n),Gc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:l,appContext:c}=e;if(n[0]!=="$"){const C=a[n];if(C!==void 0)switch(C){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(Ps(i,n))return a[n]=1,i[n];if(s!==ze&&ke(s,n))return a[n]=2,s[n];if(ke(r,n))return a[n]=3,r[n];if(t!==ze&&ke(t,n))return a[n]=4,t[n];Zs&&(a[n]=0)}}const p=li[n];let h,g;if(p)return n==="$attrs"&&Ze(e.attrs,"get",""),p(e);if((h=l.__cssModules)&&(h=h[n]))return h;if(t!==ze&&ke(t,n))return a[n]=4,t[n];if(g=c.config.globalProperties,ke(g,n))return g[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return Ps(s,n)?(s[n]=t,!0):i!==ze&&ke(i,n)?(i[n]=t,!0):ke(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:a}},l){let c;return!!(t[l]||e!==ze&&l[0]!=="$"&&ke(e,l)||Ps(n,l)||ke(r,l)||ke(i,l)||ke(li,l)||ke(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ke(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Qr(e){return J(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Zs=!0;function jc(e){const n=Ma(e),t=e.proxy,i=e.ctx;Zs=!1,n.beforeCreate&&Zr(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:l,provide:c,inject:p,created:h,beforeMount:g,mounted:C,beforeUpdate:L,updated:H,activated:V,deactivated:ce,beforeDestroy:F,beforeUnmount:N,destroyed:ee,unmounted:W,render:he,renderTracked:q,renderTriggered:Q,errorCaptured:Z,serverPrefetch:B,expose:X,inheritAttrs:$,components:x,directives:se,filters:ve}=n;if(p&&Vc(p,i,null),a)for(const ae in a){const ue=a[ae];ne(ue)&&(i[ae]=ue.bind(t))}if(s){const ae=s.call(t,t);Ce(ae)&&(e.data=Wt(ae))}if(Zs=!0,r)for(const ae in r){const ue=r[ae],Ne=ne(ue)?ue.bind(t,t):ne(ue.get)?ue.get.bind(t,t):Hn,de=!ne(ue)&&ne(ue.set)?ue.set.bind(t):Hn,Ee=D({get:Ne,set:de});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:we=>Ee.value=we})}if(l)for(const ae in l)La(l[ae],i,t,ae);if(c){const ae=ne(c)?c.call(t):c;Reflect.ownKeys(ae).forEach(ue=>{Yc(ue,ae[ue])})}h&&Zr(h,e,"c");function R(ae,ue){J(ue)?ue.forEach(Ne=>ae(Ne.bind(t))):ue&&ae(ue.bind(t))}if(R(Fc,g),R(hs,C),R(Oc,L),R(Hc,H),R(Pc,V),R(Rc,ce),R(Bc,Z),R(Wc,q),R(Nc,Q),R(ki,N),R(za,W),R(Dc,B),J(X))if(X.length){const ae=e.exposed||(e.exposed={});X.forEach(ue=>{Object.defineProperty(ae,ue,{get:()=>t[ue],set:Ne=>t[ue]=Ne,enumerable:!0})})}else e.exposed||(e.exposed={});he&&e.render===Hn&&(e.render=he),$!=null&&(e.inheritAttrs=$),x&&(e.components=x),se&&(e.directives=se),B&&Ca(e)}function Vc(e,n,t=Hn){J(e)&&(e=er(e));for(const i in e){const s=e[i];let r;Ce(s)?"default"in s?r=ji(s.from||i,s.default,!0):r=ji(s.from||i):r=ji(s),Je(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):n[i]=r}}function Zr(e,n,t){An(J(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function La(e,n,t,i){let s=i.includes(".")?Pa(t,i):()=>t[i];if(Re(e)){const r=n[e];ne(r)&&Ue(s,r)}else if(ne(e))Ue(s,e.bind(t));else if(Ce(e))if(J(e))e.forEach(r=>La(r,n,t,i));else{const r=ne(e.handler)?e.handler.bind(t):n[e.handler];ne(r)&&Ue(s,r,e)}}function Ma(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(n);let c;return l?c=l:!s.length&&!t&&!i?c=n:(c={},s.length&&s.forEach(p=>Zi(c,p,a,!0)),Zi(c,n,a)),Ce(n)&&r.set(n,c),c}function Zi(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&Zi(e,r,t,!0),s&&s.forEach(a=>Zi(e,a,t,!0));for(const a in n)if(!(i&&a==="expose")){const l=$c[a]||t&&t[a];e[a]=l?l(e[a],n[a]):n[a]}return e}const $c={data:eo,props:no,emits:no,methods:ni,computed:ni,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:ni,directives:ni,watch:Uc,provide:eo,inject:qc};function eo(e,n){return n?e?function(){return Xe(ne(e)?e.call(this,this):e,ne(n)?n.call(this,this):n)}:n:e}function qc(e,n){return ni(er(e),er(n))}function er(e){if(J(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function dn(e,n){return e?[...new Set([].concat(e,n))]:n}function ni(e,n){return e?Xe(Object.create(null),e,n):n}function no(e,n){return e?J(e)&&J(n)?[...new Set([...e,...n])]:Xe(Object.create(null),Qr(e),Qr(n??{})):n}function Uc(e,n){if(!e)return n;if(!n)return e;const t=Xe(Object.create(null),e);for(const i in n)t[i]=dn(e[i],n[i]);return t}function xa(){return{app:null,config:{isNativeTag:Go,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jc=0;function Xc(e,n){return function(i,s=null){ne(i)||(i=Xe({},i)),s!=null&&!Ce(s)&&(s=null);const r=xa(),a=new WeakSet,l=[];let c=!1;const p=r.app={_uid:Jc++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ru,get config(){return r.config},set config(h){},use(h,...g){return a.has(h)||(h&&ne(h.install)?(a.add(h),h.install(p,...g)):ne(h)&&(a.add(h),h(p,...g))),p},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),p},component(h,g){return g?(r.components[h]=g,p):r.components[h]},directive(h,g){return g?(r.directives[h]=g,p):r.directives[h]},mount(h,g,C){if(!c){const L=p._ceVNode||nn(i,s);return L.appContext=r,C===!0?C="svg":C===!1&&(C=void 0),e(L,h,C),c=!0,p._container=h,h.__vue_app__=p,ps(L.component)}},onUnmount(h){l.push(h)},unmount(){c&&(An(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(h,g){return r.provides[h]=g,p},runWithContext(h){const g=Gt;Gt=p;try{return h()}finally{Gt=g}}};return p}}let Gt=null;function Yc(e,n){if(pn){let t=pn.provides;const i=pn.parent&&pn.parent.provides;i===t&&(t=pn.provides=Object.create(i)),t[e]=n}}function ji(e,n,t=!1){const i=qa();if(i||Gt){let s=Gt?Gt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&ne(n)?n.call(i&&i.proxy):n}}const Qc=Symbol.for("v-scx"),Zc=()=>ji(Qc);function Ue(e,n,t){return Aa(e,n,t)}function Aa(e,n,t=ze){const{immediate:i,deep:s,flush:r,once:a}=t,l=Xe({},t),c=n&&i||!n&&r!=="post";let p;if(pi){if(r==="sync"){const L=Zc();p=L.__watcherHandles||(L.__watcherHandles=[])}else if(!c){const L=()=>{};return L.stop=Hn,L.resume=Hn,L.pause=Hn,L}}const h=pn;l.call=(L,H,V)=>An(L,h,H,V);let g=!1;r==="post"?l.scheduler=L=>{yn(L,h&&h.suspense)}:r!=="sync"&&(g=!0,l.scheduler=(L,H)=>{H?L():wr(L)}),l.augmentJob=L=>{n&&(L.flags|=4),g&&(L.flags|=2,h&&(L.id=h.uid,L.i=h))};const C=Tc(e,n,l);return pi&&(p?p.push(C):c&&C()),C}function eu(e,n,t){const i=this.proxy,s=Re(e)?e.includes(".")?Pa(i,e):()=>i[e]:e.bind(i,i);let r;ne(n)?r=n:(r=n.handler,t=n);const a=_i(this),l=Aa(s,r.bind(i),t);return a(),l}function Pa(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const nu=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${dt(n)}Modifiers`]||e[`${Et(n)}Modifiers`];function tu(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||ze;let s=t;const r=n.startsWith("update:"),a=r&&nu(i,n.slice(7));a&&(a.trim&&(s=t.map(h=>Re(h)?h.trim():h)),a.number&&(s=t.map(Jo)));let l,c=i[l=Es(n)]||i[l=Es(dt(n))];!c&&r&&(c=i[l=Es(Et(n))]),c&&An(c,e,6,s);const p=i[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,An(p,e,6,s)}}const iu=new WeakMap;function Ra(e,n,t=!1){const i=t?iu:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let a={},l=!1;if(!ne(e)){const c=p=>{const h=Ra(p,n,!0);h&&(l=!0,Xe(a,h))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(Ce(e)&&i.set(e,null),null):(J(r)?r.forEach(c=>a[c]=null):Xe(a,r),Ce(e)&&i.set(e,a),a)}function fs(e,n){return!e||!rs(n)?!1:(n=n.slice(2).replace(/Once$/,""),ke(e,n[0].toLowerCase()+n.slice(1))||ke(e,Et(n))||ke(e,n))}function to(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:l,emit:c,render:p,renderCache:h,props:g,data:C,setupState:L,ctx:H,inheritAttrs:V}=e,ce=Yi(e);let F,N;try{if(t.shapeFlag&4){const W=s||i,he=W;F=Fn(p.call(he,W,h,g,L,C,H)),N=l}else{const W=n;F=Fn(W.length>1?W(g,{attrs:l,slots:a,emit:c}):W(g,null)),N=n.props?l:su(l)}}catch(W){ci.length=0,cs(W,e,1),F=nn(mn)}let ee=F;if(N&&V!==!1){const W=Object.keys(N),{shapeFlag:he}=ee;W.length&&he&7&&(r&&W.some(cr)&&(N=ru(N,r)),ee=ht(ee,N,!1,!0))}return t.dirs&&(ee=ht(ee,null,!1,!0),ee.dirs=ee.dirs?ee.dirs.concat(t.dirs):t.dirs),t.transition&&fi(ee,t.transition),F=ee,Yi(ce),F}const su=e=>{let n;for(const t in e)(t==="class"||t==="style"||rs(t))&&((n||(n={}))[t]=e[t]);return n},ru=(e,n)=>{const t={};for(const i in e)(!cr(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function ou(e,n,t){const{props:i,children:s,component:r}=e,{props:a,children:l,patchFlag:c}=n,p=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?io(i,a,p):!!a;if(c&8){const h=n.dynamicProps;for(let g=0;g<h.length;g++){const C=h[g];if(a[C]!==i[C]&&!fs(p,C))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?io(i,a,p):!0:!!a;return!1}function io(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!fs(t,r))return!0}return!1}function au({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const Ia={},Fa=()=>Object.create(Ia),Oa=e=>Object.getPrototypeOf(e)===Ia;function lu(e,n,t,i=!1){const s={},r=Fa();e.propsDefaults=Object.create(null),Ha(e,n,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);t?e.props=i?s:pc(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function cu(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,l=ye(s),[c]=e.propsOptions;let p=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=e.vnode.dynamicProps;for(let g=0;g<h.length;g++){let C=h[g];if(fs(e.emitsOptions,C))continue;const L=n[C];if(c)if(ke(r,C))L!==r[C]&&(r[C]=L,p=!0);else{const H=dt(C);s[H]=nr(c,l,H,L,e,!1)}else L!==r[C]&&(r[C]=L,p=!0)}}}else{Ha(e,n,s,r)&&(p=!0);let h;for(const g in l)(!n||!ke(n,g)&&((h=Et(g))===g||!ke(n,h)))&&(c?t&&(t[g]!==void 0||t[h]!==void 0)&&(s[g]=nr(c,l,g,void 0,e,!0)):delete s[g]);if(r!==l)for(const g in r)(!n||!ke(n,g))&&(delete r[g],p=!0)}p&&Un(e.attrs,"set","")}function Ha(e,n,t,i){const[s,r]=e.propsOptions;let a=!1,l;if(n)for(let c in n){if(ii(c))continue;const p=n[c];let h;s&&ke(s,h=dt(c))?!r||!r.includes(h)?t[h]=p:(l||(l={}))[h]=p:fs(e.emitsOptions,c)||(!(c in i)||p!==i[c])&&(i[c]=p,a=!0)}if(r){const c=ye(t),p=l||ze;for(let h=0;h<r.length;h++){const g=r[h];t[g]=nr(s,c,g,p[g],e,!ke(p,g))}}return a}function nr(e,n,t,i,s,r){const a=e[t];if(a!=null){const l=ke(a,"default");if(l&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ne(c)){const{propsDefaults:p}=s;if(t in p)i=p[t];else{const h=_i(s);i=p[t]=c.call(null,n),h()}}else i=c;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!l?i=!1:a[1]&&(i===""||i===Et(t))&&(i=!0))}return i}const uu=new WeakMap;function Da(e,n,t=!1){const i=t?uu:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,a={},l=[];let c=!1;if(!ne(e)){const h=g=>{c=!0;const[C,L]=Da(g,n,!0);Xe(a,C),L&&l.push(...L)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!c)return Ce(e)&&i.set(e,Dt),Dt;if(J(r))for(let h=0;h<r.length;h++){const g=dt(r[h]);so(g)&&(a[g]=ze)}else if(r)for(const h in r){const g=dt(h);if(so(g)){const C=r[h],L=a[g]=J(C)||ne(C)?{type:C}:Xe({},C),H=L.type;let V=!1,ce=!0;if(J(H))for(let F=0;F<H.length;++F){const N=H[F],ee=ne(N)&&N.name;if(ee==="Boolean"){V=!0;break}else ee==="String"&&(ce=!1)}else V=ne(H)&&H.name==="Boolean";L[0]=V,L[1]=ce,(V||ke(L,"default"))&&l.push(g)}}const p=[a,l];return Ce(e)&&i.set(e,p),p}function so(e){return e[0]!=="$"&&!ii(e)}const kr=e=>e==="_"||e==="_ctx"||e==="$stable",_r=e=>J(e)?e.map(Fn):[Fn(e)],du=(e,n,t)=>{if(n._n)return n;const i=Js((...s)=>_r(n(...s)),t);return i._c=!1,i},Na=(e,n,t)=>{const i=e._ctx;for(const s in e){if(kr(s))continue;const r=e[s];if(ne(r))n[s]=du(s,r,i);else if(r!=null){const a=_r(r);n[s]=()=>a}}},Wa=(e,n)=>{const t=_r(n);e.slots.default=()=>t},Ba=(e,n,t)=>{for(const i in n)(t||!kr(i))&&(e[i]=n[i])},hu=(e,n,t)=>{const i=e.slots=Fa();if(e.vnode.shapeFlag&32){const s=n._;s?(Ba(i,n,t),t&&Uo(i,"_",s,!0)):Na(n,i)}else n&&Wa(e,n)},fu=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,a=ze;if(i.shapeFlag&32){const l=n._;l?t&&l===1?r=!1:Ba(s,n,t):(r=!n.$stable,Na(n,s)),a=n}else n&&(Wa(e,n),a={default:1});if(r)for(const l in s)!kr(l)&&a[l]==null&&delete s[l]},yn=bu;function mu(e){return pu(e)}function pu(e,n){const t=as();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:l,createComment:c,setText:p,setElementText:h,parentNode:g,nextSibling:C,setScopeId:L=Hn,insertStaticContent:H}=e,V=(u,f,b,w=null,S=null,k=null,M=void 0,z=null,E=!!f.dynamicChildren)=>{if(u===f)return;u&&!kt(u,f)&&(w=Ie(u),we(u,S,k,!0),u=null),f.patchFlag===-2&&(E=!1,f.dynamicChildren=null);const{type:T,ref:G,shapeFlag:I}=f;switch(T){case ms:ce(u,f,b,w);break;case mn:F(u,f,b,w);break;case Is:u==null&&N(f,b,w,M);break;case en:x(u,f,b,w,S,k,M,z,E);break;default:I&1?he(u,f,b,w,S,k,M,z,E):I&6?se(u,f,b,w,S,k,M,z,E):(I&64||I&128)&&T.process(u,f,b,w,S,k,M,z,E,En)}G!=null&&S?oi(G,u&&u.ref,k,f||u,!f):G==null&&u&&u.ref!=null&&oi(u.ref,null,k,u,!0)},ce=(u,f,b,w)=>{if(u==null)i(f.el=l(f.children),b,w);else{const S=f.el=u.el;f.children!==u.children&&p(S,f.children)}},F=(u,f,b,w)=>{u==null?i(f.el=c(f.children||""),b,w):f.el=u.el},N=(u,f,b,w)=>{[u.el,u.anchor]=H(u.children,f,b,w,u.el,u.anchor)},ee=({el:u,anchor:f},b,w)=>{let S;for(;u&&u!==f;)S=C(u),i(u,b,w),u=S;i(f,b,w)},W=({el:u,anchor:f})=>{let b;for(;u&&u!==f;)b=C(u),s(u),u=b;s(f)},he=(u,f,b,w,S,k,M,z,E)=>{if(f.type==="svg"?M="svg":f.type==="math"&&(M="mathml"),u==null)q(f,b,w,S,k,M,z,E);else{const T=u.el&&u.el._isVueCE?u.el:null;try{T&&T._beginPatch(),B(u,f,S,k,M,z,E)}finally{T&&T._endPatch()}}},q=(u,f,b,w,S,k,M,z)=>{let E,T;const{props:G,shapeFlag:I,transition:K,dirs:Y}=u;if(E=u.el=a(u.type,k,G&&G.is,G),I&8?h(E,u.children):I&16&&Z(u.children,E,null,w,S,Rs(u,k),M,z),Y&&pt(u,null,w,"created"),Q(E,u,u.scopeId,M,w),G){for(const fe in G)fe!=="value"&&!ii(fe)&&r(E,fe,null,G[fe],k,w);"value"in G&&r(E,"value",null,G.value,k),(T=G.onVnodeBeforeMount)&&Rn(T,w,u)}Y&&pt(u,null,w,"beforeMount");const te=gu(S,K);te&&K.beforeEnter(E),i(E,f,b),((T=G&&G.onVnodeMounted)||te||Y)&&yn(()=>{T&&Rn(T,w,u),te&&K.enter(E),Y&&pt(u,null,w,"mounted")},S)},Q=(u,f,b,w,S)=>{if(b&&L(u,b),w)for(let k=0;k<w.length;k++)L(u,w[k]);if(S){let k=S.subTree;if(f===k||ja(k.type)&&(k.ssContent===f||k.ssFallback===f)){const M=S.vnode;Q(u,M,M.scopeId,M.slotScopeIds,S.parent)}}},Z=(u,f,b,w,S,k,M,z,E=0)=>{for(let T=E;T<u.length;T++){const G=u[T]=z?ot(u[T]):Fn(u[T]);V(null,G,f,b,w,S,k,M,z)}},B=(u,f,b,w,S,k,M)=>{const z=f.el=u.el;let{patchFlag:E,dynamicChildren:T,dirs:G}=f;E|=u.patchFlag&16;const I=u.props||ze,K=f.props||ze;let Y;if(b&&gt(b,!1),(Y=K.onVnodeBeforeUpdate)&&Rn(Y,b,f,u),G&&pt(f,u,b,"beforeUpdate"),b&&gt(b,!0),(I.innerHTML&&K.innerHTML==null||I.textContent&&K.textContent==null)&&h(z,""),T?X(u.dynamicChildren,T,z,b,w,Rs(f,S),k):M||ue(u,f,z,null,b,w,Rs(f,S),k,!1),E>0){if(E&16)$(z,I,K,b,S);else if(E&2&&I.class!==K.class&&r(z,"class",null,K.class,S),E&4&&r(z,"style",I.style,K.style,S),E&8){const te=f.dynamicProps;for(let fe=0;fe<te.length;fe++){const me=te[fe],Be=I[me],Ke=K[me];(Ke!==Be||me==="value")&&r(z,me,Be,Ke,S,b)}}E&1&&u.children!==f.children&&h(z,f.children)}else!M&&T==null&&$(z,I,K,b,S);((Y=K.onVnodeUpdated)||G)&&yn(()=>{Y&&Rn(Y,b,f,u),G&&pt(f,u,b,"updated")},w)},X=(u,f,b,w,S,k,M)=>{for(let z=0;z<f.length;z++){const E=u[z],T=f[z],G=E.el&&(E.type===en||!kt(E,T)||E.shapeFlag&198)?g(E.el):b;V(E,T,G,null,w,S,k,M,!0)}},$=(u,f,b,w,S)=>{if(f!==b){if(f!==ze)for(const k in f)!ii(k)&&!(k in b)&&r(u,k,f[k],null,S,w);for(const k in b){if(ii(k))continue;const M=b[k],z=f[k];M!==z&&k!=="value"&&r(u,k,z,M,S,w)}"value"in b&&r(u,"value",f.value,b.value,S)}},x=(u,f,b,w,S,k,M,z,E)=>{const T=f.el=u?u.el:l(""),G=f.anchor=u?u.anchor:l("");let{patchFlag:I,dynamicChildren:K,slotScopeIds:Y}=f;Y&&(z=z?z.concat(Y):Y),u==null?(i(T,b,w),i(G,b,w),Z(f.children||[],b,G,S,k,M,z,E)):I>0&&I&64&&K&&u.dynamicChildren?(X(u.dynamicChildren,K,b,S,k,M,z),(f.key!=null||S&&f===S.subTree)&&Ka(u,f,!0)):ue(u,f,b,G,S,k,M,z,E)},se=(u,f,b,w,S,k,M,z,E)=>{f.slotScopeIds=z,u==null?f.shapeFlag&512?S.ctx.activate(f,b,w,M,E):ve(f,b,w,S,k,M,E):De(u,f,E)},ve=(u,f,b,w,S,k,M)=>{const z=u.component=Eu(u,w,S);if(us(u)&&(z.ctx.renderer=En),zu(z,!1,M),z.asyncDep){if(S&&S.registerDep(z,R,M),!u.el){const E=z.subTree=nn(mn);F(null,E,f,b),u.placeholder=E.el}}else R(z,u,f,b,S,k,M)},De=(u,f,b)=>{const w=f.component=u.component;if(ou(u,f,b))if(w.asyncDep&&!w.asyncResolved){ae(w,f,b);return}else w.next=f,w.update();else f.el=u.el,w.vnode=f},R=(u,f,b,w,S,k,M)=>{const z=()=>{if(u.isMounted){let{next:I,bu:K,u:Y,parent:te,vnode:fe}=u;{const Ge=Ga(u);if(Ge){I&&(I.el=fe.el,ae(u,I,M)),Ge.asyncDep.then(()=>{u.isUnmounted||z()});return}}let me=I,Be;gt(u,!1),I?(I.el=fe.el,ae(u,I,M)):I=fe,K&&Gi(K),(Be=I.props&&I.props.onVnodeBeforeUpdate)&&Rn(Be,te,I,fe),gt(u,!0);const Ke=to(u),rn=u.subTree;u.subTree=Ke,V(rn,Ke,g(rn.el),Ie(rn),u,S,k),I.el=Ke.el,me===null&&au(u,Ke.el),Y&&yn(Y,S),(Be=I.props&&I.props.onVnodeUpdated)&&yn(()=>Rn(Be,te,I,fe),S)}else{let I;const{el:K,props:Y}=f,{bm:te,m:fe,parent:me,root:Be,type:Ke}=u,rn=ai(f);gt(u,!1),te&&Gi(te),!rn&&(I=Y&&Y.onVnodeBeforeMount)&&Rn(I,me,f),gt(u,!0);{Be.ce&&Be.ce._def.shadowRoot!==!1&&Be.ce._injectChildStyle(Ke);const Ge=u.subTree=to(u);V(null,Ge,b,w,u,S,k),f.el=Ge.el}if(fe&&yn(fe,S),!rn&&(I=Y&&Y.onVnodeMounted)){const Ge=f;yn(()=>Rn(I,me,Ge),S)}(f.shapeFlag&256||me&&ai(me.vnode)&&me.vnode.shapeFlag&256)&&u.a&&yn(u.a,S),u.isMounted=!0,f=b=w=null}};u.scope.on();const E=u.effect=new Zo(z);u.scope.off();const T=u.update=E.run.bind(E),G=u.job=E.runIfDirty.bind(E);G.i=u,G.id=u.uid,E.scheduler=()=>wr(G),gt(u,!0),T()},ae=(u,f,b)=>{f.component=u;const w=u.vnode.props;u.vnode=f,u.next=null,cu(u,f.props,w,b),fu(u,f.children,b),Xn(),Jr(u),Yn()},ue=(u,f,b,w,S,k,M,z,E=!1)=>{const T=u&&u.children,G=u?u.shapeFlag:0,I=f.children,{patchFlag:K,shapeFlag:Y}=f;if(K>0){if(K&128){de(T,I,b,w,S,k,M,z,E);return}else if(K&256){Ne(T,I,b,w,S,k,M,z,E);return}}Y&8?(G&16&&sn(T,S,k),I!==T&&h(b,I)):G&16?Y&16?de(T,I,b,w,S,k,M,z,E):sn(T,S,k,!0):(G&8&&h(b,""),Y&16&&Z(I,b,w,S,k,M,z,E))},Ne=(u,f,b,w,S,k,M,z,E)=>{u=u||Dt,f=f||Dt;const T=u.length,G=f.length,I=Math.min(T,G);let K;for(K=0;K<I;K++){const Y=f[K]=E?ot(f[K]):Fn(f[K]);V(u[K],Y,b,null,S,k,M,z,E)}T>G?sn(u,S,k,!0,!1,I):Z(f,b,w,S,k,M,z,E,I)},de=(u,f,b,w,S,k,M,z,E)=>{let T=0;const G=f.length;let I=u.length-1,K=G-1;for(;T<=I&&T<=K;){const Y=u[T],te=f[T]=E?ot(f[T]):Fn(f[T]);if(kt(Y,te))V(Y,te,b,null,S,k,M,z,E);else break;T++}for(;T<=I&&T<=K;){const Y=u[I],te=f[K]=E?ot(f[K]):Fn(f[K]);if(kt(Y,te))V(Y,te,b,null,S,k,M,z,E);else break;I--,K--}if(T>I){if(T<=K){const Y=K+1,te=Y<G?f[Y].el:w;for(;T<=K;)V(null,f[T]=E?ot(f[T]):Fn(f[T]),b,te,S,k,M,z,E),T++}}else if(T>K)for(;T<=I;)we(u[T],S,k,!0),T++;else{const Y=T,te=T,fe=new Map;for(T=te;T<=K;T++){const Se=f[T]=E?ot(f[T]):Fn(f[T]);Se.key!=null&&fe.set(Se.key,T)}let me,Be=0;const Ke=K-te+1;let rn=!1,Ge=0;const Pn=new Array(Ke);for(T=0;T<Ke;T++)Pn[T]=0;for(T=Y;T<=I;T++){const Se=u[T];if(Be>=Ke){we(Se,S,k,!0);continue}let on;if(Se.key!=null)on=fe.get(Se.key);else for(me=te;me<=K;me++)if(Pn[me-te]===0&&kt(Se,f[me])){on=me;break}on===void 0?we(Se,S,k,!0):(Pn[on-te]=T+1,on>=Ge?Ge=on:rn=!0,V(Se,f[on],b,null,S,k,M,z,E),Be++)}const ft=rn?vu(Pn):Dt;for(me=ft.length-1,T=Ke-1;T>=0;T--){const Se=te+T,on=f[Se],zt=f[Se+1],Lt=Se+1<G?zt.el||zt.placeholder:w;Pn[T]===0?V(null,on,b,Lt,S,k,M,z,E):rn&&(me<0||T!==ft[me]?Ee(on,b,Lt,2):me--)}}},Ee=(u,f,b,w,S=null)=>{const{el:k,type:M,transition:z,children:E,shapeFlag:T}=u;if(T&6){Ee(u.component.subTree,f,b,w);return}if(T&128){u.suspense.move(f,b,w);return}if(T&64){M.move(u,f,b,En);return}if(M===en){i(k,f,b);for(let I=0;I<E.length;I++)Ee(E[I],f,b,w);i(u.anchor,f,b);return}if(M===Is){ee(u,f,b);return}if(w!==2&&T&1&&z)if(w===0)z.beforeEnter(k),i(k,f,b),yn(()=>z.enter(k),S);else{const{leave:I,delayLeave:K,afterLeave:Y}=z,te=()=>{u.ctx.isUnmounted?s(k):i(k,f,b)},fe=()=>{k._isLeaving&&k[qn](!0),I(k,()=>{te(),Y&&Y()})};K?K(k,te,fe):fe()}else i(k,f,b)},we=(u,f,b,w=!1,S=!1)=>{const{type:k,props:M,ref:z,children:E,dynamicChildren:T,shapeFlag:G,patchFlag:I,dirs:K,cacheIndex:Y}=u;if(I===-2&&(S=!1),z!=null&&(Xn(),oi(z,null,b,u,!0),Yn()),Y!=null&&(f.renderCache[Y]=void 0),G&256){f.ctx.deactivate(u);return}const te=G&1&&K,fe=!ai(u);let me;if(fe&&(me=M&&M.onVnodeBeforeUnmount)&&Rn(me,f,u),G&6)We(u.component,b,w);else{if(G&128){u.suspense.unmount(b,w);return}te&&pt(u,null,f,"beforeUnmount"),G&64?u.type.remove(u,f,b,En,w):T&&!T.hasOnce&&(k!==en||I>0&&I&64)?sn(T,f,b,!1,!0):(k===en&&I&384||!S&&G&16)&&sn(E,f,b),w&&tn(u)}(fe&&(me=M&&M.onVnodeUnmounted)||te)&&yn(()=>{me&&Rn(me,f,u),te&&pt(u,null,f,"unmounted")},b)},tn=u=>{const{type:f,el:b,anchor:w,transition:S}=u;if(f===en){be(b,w);return}if(f===Is){W(u);return}const k=()=>{s(b),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(u.shapeFlag&1&&S&&!S.persisted){const{leave:M,delayLeave:z}=S,E=()=>M(b,k);z?z(u.el,k,E):E()}else k()},be=(u,f)=>{let b;for(;u!==f;)b=C(u),s(u),u=b;s(f)},We=(u,f,b)=>{const{bum:w,scope:S,job:k,subTree:M,um:z,m:E,a:T}=u;ro(E),ro(T),w&&Gi(w),S.stop(),k&&(k.flags|=8,we(M,u,f,b)),z&&yn(z,f),yn(()=>{u.isUnmounted=!0},f)},sn=(u,f,b,w=!1,S=!1,k=0)=>{for(let M=k;M<u.length;M++)we(u[M],f,b,w,S)},Ie=u=>{if(u.shapeFlag&6)return Ie(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=C(u.anchor||u.el),b=f&&f[Lc];return b?C(b):f};let Ye=!1;const Fe=(u,f,b)=>{u==null?f._vnode&&we(f._vnode,null,null,!0):V(f._vnode||null,u,f,null,null,null,b),f._vnode=u,Ye||(Ye=!0,Jr(),ga(),Ye=!1)},En={p:V,um:we,m:Ee,r:tn,mt:ve,mc:Z,pc:ue,pbc:X,n:Ie,o:e};return{render:Fe,hydrate:void 0,createApp:Xc(Fe)}}function Rs({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function gt({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function gu(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Ka(e,n,t=!1){const i=e.children,s=n.children;if(J(i)&&J(s))for(let r=0;r<i.length;r++){const a=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=ot(s[r]),l.el=a.el),!t&&l.patchFlag!==-2&&Ka(a,l)),l.type===ms&&l.patchFlag!==-1&&(l.el=a.el),l.type===mn&&!l.el&&(l.el=a.el)}}function vu(e){const n=e.slice(),t=[0];let i,s,r,a,l;const c=e.length;for(i=0;i<c;i++){const p=e[i];if(p!==0){if(s=t[t.length-1],e[s]<p){n[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)l=r+a>>1,e[t[l]]<p?r=l+1:a=l;p<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=n[a];return t}function Ga(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ga(n)}function ro(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const ja=e=>e.__isSuspense;function bu(e,n){n&&n.pendingBranch?J(e)?n.effects.push(...e):n.effects.push(e):zc(e)}const en=Symbol.for("v-fgt"),ms=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),Is=Symbol.for("v-stc"),ci=[];let kn=null;function ie(e=!1){ci.push(kn=e?null:[])}function yu(){ci.pop(),kn=ci[ci.length-1]||null}let mi=1;function es(e,n=!1){mi+=e,e<0&&kn&&n&&(kn.hasOnce=!0)}function Va(e){return e.dynamicChildren=mi>0?kn||Dt:null,yu(),mi>0&&kn&&kn.push(e),e}function oe(e,n,t,i,s,r){return Va(v(e,n,t,i,s,r,!0))}function tr(e,n,t,i,s){return Va(nn(e,n,t,i,s,!0))}function ns(e){return e?e.__v_isVNode===!0:!1}function kt(e,n){return e.type===n.type&&e.key===n.key}const $a=({key:e})=>e??null,Vi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Re(e)||Je(e)||ne(e)?{i:Tn,r:e,k:n,f:!!t}:e:null);function v(e,n=null,t=null,i=0,s=null,r=e===en?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&$a(n),ref:n&&Vi(n),scopeId:ba,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tn};return l?(Sr(c,t),r&128&&e.normalize(c)):t&&(c.shapeFlag|=Re(t)?8:16),mi>0&&!a&&kn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&kn.push(c),c}const nn=wu;function wu(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===Kc)&&(e=mn),ns(e)){const l=ht(e,n,!0);return t&&Sr(l,t),mi>0&&!r&&kn&&(l.shapeFlag&6?kn[kn.indexOf(e)]=l:kn.push(l)),l.patchFlag=-2,l}if(Au(e)&&(e=e.__vccOpts),n){n=ku(n);let{class:l,style:c}=n;l&&!Re(l)&&(n.class=wn(l)),Ce(c)&&(yr(c)&&!J(c)&&(c=Xe({},c)),n.style=St(c))}const a=Re(e)?1:ja(e)?128:ya(e)?64:Ce(e)?4:ne(e)?2:0;return v(e,n,t,i,s,a,r,!0)}function ku(e){return e?yr(e)||Oa(e)?Xe({},e):e:null}function ht(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:l,transition:c}=e,p=n?Su(s||{},n):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&$a(p),ref:n&&n.ref?t&&r?J(r)?r.concat(Vi(n)):[r,Vi(n)]:Vi(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==en?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ht(e.ssContent),ssFallback:e.ssFallback&&ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&fi(h,c.clone(h)),h}function _u(e=" ",n=0){return nn(ms,null,e,n)}function hn(e="",n=!1){return n?(ie(),tr(mn,null,e)):nn(mn,null,e)}function Fn(e){return e==null||typeof e=="boolean"?nn(mn):J(e)?nn(en,null,e.slice()):ns(e)?ot(e):nn(ms,null,String(e))}function ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ht(e)}function Sr(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(J(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),Sr(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Oa(n)?n._ctx=Tn:s===3&&Tn&&(Tn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ne(n)?(n={default:n,_ctx:Tn},t=32):(n=String(n),i&64?(t=16,n=[_u(n)]):t=8);e.children=n,e.shapeFlag|=t}function Su(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=wn([n.class,i.class]));else if(s==="style")n.style=St([n.style,i.style]);else if(rs(s)){const r=n[s],a=i[s];a&&r!==a&&!(J(r)&&r.includes(a))&&(n[s]=r?[].concat(r,a):a)}else s!==""&&(n[s]=i[s])}return n}function Rn(e,n,t,i=null){An(e,n,7,[t,i])}const Tu=xa();let Cu=0;function Eu(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||Tu,r={uid:Cu++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Da(i,s),emitsOptions:Ra(i,s),emit:null,emitted:null,propsDefaults:ze,inheritAttrs:i.inheritAttrs,ctx:ze,data:ze,props:ze,attrs:ze,slots:ze,refs:ze,setupState:ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=tu.bind(null,r),e.ce&&e.ce(r),r}let pn=null;const qa=()=>pn||Tn;let ts,ir;{const e=as(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};ts=n("__VUE_INSTANCE_SETTERS__",t=>pn=t),ir=n("__VUE_SSR_SETTERS__",t=>pi=t)}const _i=e=>{const n=pn;return ts(e),e.scope.on(),()=>{e.scope.off(),ts(n)}},oo=()=>{pn&&pn.scope.off(),ts(null)};function Ua(e){return e.vnode.shapeFlag&4}let pi=!1;function zu(e,n=!1,t=!1){n&&ir(n);const{props:i,children:s}=e.vnode,r=Ua(e);lu(e,i,r,n),hu(e,s,t||n);const a=r?Lu(e,n):void 0;return n&&ir(!1),a}function Lu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gc);const{setup:i}=t;if(i){Xn();const s=e.setupContext=i.length>1?xu(e):null,r=_i(e),a=wi(i,e,0,[e.props,s]),l=jo(a);if(Yn(),r(),(l||e.sp)&&!ai(e)&&Ca(e),l){if(a.then(oo,oo),n)return a.then(c=>{ao(e,c)}).catch(c=>{cs(c,e,0)});e.asyncDep=a}else ao(e,a)}else Ja(e)}function ao(e,n,t){ne(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ce(n)&&(e.setupState=fa(n)),Ja(e)}function Ja(e,n,t){const i=e.type;e.render||(e.render=i.render||Hn);{const s=_i(e);Xn();try{jc(e)}finally{Yn(),s()}}}const Mu={get(e,n){return Ze(e,"get",""),e[n]}};function xu(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Mu),slots:e.slots,emit:e.emit,expose:n}}function ps(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(fa(gc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in li)return li[t](e)},has(n,t){return t in n||t in li}})):e.proxy}function Au(e){return ne(e)&&"__vccOpts"in e}const D=(e,n)=>_c(e,n,pi);function Pu(e,n,t){try{es(-1);const i=arguments.length;return i===2?Ce(n)&&!J(n)?ns(n)?nn(e,null,[n]):nn(e,n):nn(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ns(t)&&(t=[t]),nn(e,n,t))}finally{es(1)}}const Ru="3.5.25";let sr;const lo=typeof window<"u"&&window.trustedTypes;if(lo)try{sr=lo.createPolicy("vue",{createHTML:e=>e})}catch{}const Xa=sr?e=>sr.createHTML(e):e=>e,Iu="http://www.w3.org/2000/svg",Fu="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,co=$n&&$n.createElement("template"),Ou={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?$n.createElementNS(Iu,e):n==="mathml"?$n.createElementNS(Fu,e):t?$n.createElement(e,{is:t}):$n.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>$n.createTextNode(e),createComment:e=>$n.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>$n.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const a=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{co.innerHTML=Xa(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=co.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},it="transition",ei="animation",gi=Symbol("_vtc"),Ya={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hu=Xe({},wa,Ya),Du=e=>(e.displayName="Transition",e.props=Hu,e),uo=Du((e,{slots:n})=>Pu(Ac,Nu(e),n)),vt=(e,n=[])=>{J(e)?e.forEach(t=>t(...n)):e&&e(...n)},ho=e=>e?J(e)?e.some(n=>n.length>1):e.length>1:!1;function Nu(e){const n={};for(const x in e)x in Ya||(n[x]=e[x]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:p=a,appearToClass:h=l,leaveFromClass:g=`${t}-leave-from`,leaveActiveClass:C=`${t}-leave-active`,leaveToClass:L=`${t}-leave-to`}=e,H=Wu(s),V=H&&H[0],ce=H&&H[1],{onBeforeEnter:F,onEnter:N,onEnterCancelled:ee,onLeave:W,onLeaveCancelled:he,onBeforeAppear:q=F,onAppear:Q=N,onAppearCancelled:Z=ee}=n,B=(x,se,ve,De)=>{x._enterCancelled=De,bt(x,se?h:l),bt(x,se?p:a),ve&&ve()},X=(x,se)=>{x._isLeaving=!1,bt(x,g),bt(x,L),bt(x,C),se&&se()},$=x=>(se,ve)=>{const De=x?Q:N,R=()=>B(se,x,ve);vt(De,[se,R]),fo(()=>{bt(se,x?c:r),Vn(se,x?h:l),ho(De)||mo(se,i,V,R)})};return Xe(n,{onBeforeEnter(x){vt(F,[x]),Vn(x,r),Vn(x,a)},onBeforeAppear(x){vt(q,[x]),Vn(x,c),Vn(x,p)},onEnter:$(!1),onAppear:$(!0),onLeave(x,se){x._isLeaving=!0;const ve=()=>X(x,se);Vn(x,g),x._enterCancelled?(Vn(x,C),vo(x)):(vo(x),Vn(x,C)),fo(()=>{x._isLeaving&&(bt(x,g),Vn(x,L),ho(W)||mo(x,i,ce,ve))}),vt(W,[x,ve])},onEnterCancelled(x){B(x,!1,void 0,!0),vt(ee,[x])},onAppearCancelled(x){B(x,!0,void 0,!0),vt(Z,[x])},onLeaveCancelled(x){X(x),vt(he,[x])}})}function Wu(e){if(e==null)return null;if(Ce(e))return[Fs(e.enter),Fs(e.leave)];{const n=Fs(e);return[n,n]}}function Fs(e){return Bl(e)}function Vn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[gi]||(e[gi]=new Set)).add(n)}function bt(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[gi];t&&(t.delete(n),t.size||(e[gi]=void 0))}function fo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Bu=0;function mo(e,n,t,i){const s=e._endId=++Bu,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:l,propCount:c}=Ku(e,n);if(!a)return i();const p=a+"end";let h=0;const g=()=>{e.removeEventListener(p,C),r()},C=L=>{L.target===e&&++h>=c&&g()};setTimeout(()=>{h<c&&g()},l+1),e.addEventListener(p,C)}function Ku(e,n){const t=window.getComputedStyle(e),i=H=>(t[H]||"").split(", "),s=i(`${it}Delay`),r=i(`${it}Duration`),a=po(s,r),l=i(`${ei}Delay`),c=i(`${ei}Duration`),p=po(l,c);let h=null,g=0,C=0;n===it?a>0&&(h=it,g=a,C=r.length):n===ei?p>0&&(h=ei,g=p,C=c.length):(g=Math.max(a,p),h=g>0?a>p?it:ei:null,C=h?h===it?r.length:c.length:0);const L=h===it&&/\b(?:transform|all)(?:,|$)/.test(i(`${it}Property`).toString());return{type:h,timeout:g,propCount:C,hasTransform:L}}function po(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>go(t)+go(e[i])))}function go(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function vo(e){return(e?e.ownerDocument:document).body.offsetHeight}function Gu(e,n,t){const i=e[gi];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const bo=Symbol("_vod"),ju=Symbol("_vsh"),Vu=Symbol(""),$u=/(?:^|;)\s*display\s*:/;function qu(e,n,t){const i=e.style,s=Re(t);let r=!1;if(t&&!s){if(n)if(Re(n))for(const a of n.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&$i(i,l,"")}else for(const a in n)t[a]==null&&$i(i,a,"");for(const a in t)a==="display"&&(r=!0),$i(i,a,t[a])}else if(s){if(n!==t){const a=i[Vu];a&&(t+=";"+a),i.cssText=t,r=$u.test(t)}}else n&&e.removeAttribute("style");bo in e&&(e[bo]=r?i.display:"",e[ju]&&(i.display="none"))}const yo=/\s*!important$/;function $i(e,n,t){if(J(t))t.forEach(i=>$i(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=Uu(e,n);yo.test(t)?e.setProperty(Et(i),t.replace(yo,""),"important"):e[i]=t}}const wo=["Webkit","Moz","ms"],Os={};function Uu(e,n){const t=Os[n];if(t)return t;let i=dt(n);if(i!=="filter"&&i in e)return Os[n]=i;i=qo(i);for(let s=0;s<wo.length;s++){const r=wo[s]+i;if(r in e)return Os[n]=r}return n}const ko="http://www.w3.org/1999/xlink";function _o(e,n,t,i,s,r=ql(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(ko,n.slice(6,n.length)):e.setAttributeNS(ko,n,t):t==null||r&&!Xo(t)?e.removeAttribute(n):e.setAttribute(n,r?"":Nn(t)?String(t):t)}function So(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Xa(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Xo(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(s||n)}function Tr(e,n,t,i){e.addEventListener(n,t,i)}function Ju(e,n,t,i){e.removeEventListener(n,t,i)}const To=Symbol("_vei");function Xu(e,n,t,i,s=null){const r=e[To]||(e[To]={}),a=r[n];if(i&&a)a.value=i;else{const[l,c]=Yu(n);if(i){const p=r[n]=ed(i,s);Tr(e,l,p,c)}else a&&(Ju(e,l,a,c),r[n]=void 0)}}const Co=/(?:Once|Passive|Capture)$/;function Yu(e){let n;if(Co.test(e)){n={};let i;for(;i=e.match(Co);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Et(e.slice(2)),n]}let Hs=0;const Qu=Promise.resolve(),Zu=()=>Hs||(Qu.then(()=>Hs=0),Hs=Date.now());function ed(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;An(nd(i,t.value),n,5,[i])};return t.value=e,t.attached=Zu(),t}function nd(e,n){if(J(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const Eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,td=(e,n,t,i,s,r)=>{const a=s==="svg";n==="class"?Gu(e,i,a):n==="style"?qu(e,t,i):rs(n)?cr(n)||Xu(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):id(e,n,i,a))?(So(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&_o(e,n,i,a,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Re(i))?So(e,dt(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),_o(e,n,i,a))};function id(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&Eo(n)&&ne(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Eo(n)&&Re(t)?!1:n in e}const is=e=>{const n=e.props["onUpdate:modelValue"]||!1;return J(n)?t=>Gi(n,t):n},jt=Symbol("_assign"),Qa={deep:!0,created(e,n,t){e[jt]=is(t),Tr(e,"change",()=>{const i=e._modelValue,s=vi(e),r=e.checked,a=e[jt];if(J(i)){const l=hr(i,s),c=l!==-1;if(r&&!c)a(i.concat(s));else if(!r&&c){const p=[...i];p.splice(l,1),a(p)}}else if($t(i)){const l=new Set(i);r?l.add(s):l.delete(s),a(l)}else a(Za(e,r))})},mounted:zo,beforeUpdate(e,n,t){e[jt]=is(t),zo(e,n,t)}};function zo(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(J(n))s=hr(n,i.props.value)>-1;else if($t(n))s=n.has(i.props.value);else{if(n===t)return;s=yi(n,Za(e,!0))}e.checked!==s&&(e.checked=s)}const sd={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=$t(n);Tr(e,"change",()=>{const r=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>t?Jo(vi(a)):vi(a));e[jt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,vn(()=>{e._assigning=!1})}),e[jt]=is(i)},mounted(e,{value:n}){Lo(e,n)},beforeUpdate(e,n,t){e[jt]=is(t)},updated(e,{value:n}){e._assigning||Lo(e,n)}};function Lo(e,n){const t=e.multiple,i=J(n);if(!(t&&!i&&!$t(n))){for(let s=0,r=e.options.length;s<r;s++){const a=e.options[s],l=vi(a);if(t)if(i){const c=typeof l;c==="string"||c==="number"?a.selected=n.some(p=>String(p)===String(l)):a.selected=hr(n,l)>-1}else a.selected=n.has(l);else if(yi(vi(a),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function vi(e){return"_value"in e?e._value:e.value}function Za(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const rd=["ctrl","shift","alt","meta"],od={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>rd.some(t=>e[`${t}Key`]&&!n.includes(t))},ad=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<n.length;a++){const l=od[n[a]];if(l&&l(s,n))return}return e(s,...r)}))},ld=Xe({patchProp:td},Ou);let Mo;function cd(){return Mo||(Mo=mu(ld))}const ud=((...e)=>{const n=cd().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=hd(i);if(!s)return;const r=n._component;!ne(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,dd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},n});function dd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hd(e){return Re(e)?document.querySelector(e):e}const fd="/favicon.png",md="/images/zoom-out.png",pd="/images/zoom-in.png",gd="/images/share-icon.png",vd="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",Dn=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Jean-Philippe Rameau",birth:1683,death:1764},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Gioachino Rossini",birth:1792,death:1868},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Richard Strauss",birth:1864,death:1949},{name:"Jean Sibelius",birth:1865,death:1957},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Igor Stravinsky",birth:1882,death:1971},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Carl Orff",birth:1895,death:1982},{name:"George Gershwin",birth:1898,death:1937},{name:"Dmitri Shostakovich",birth:1906,death:1975}],bd={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/strawinski.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Richard Strauss":"comp/rstrauss.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","George Gershwin":"comp/gershwin.jpg","Carl Orff":"comp/orff.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function el(e){const n=bd[e];return n?n.startsWith("/")?n:`/${n}`:null}function yd(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}const On=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let rr=On.reduce((e,n)=>(e[n.id]=n.label,e),{});const xo=Math.min(...Dn.map(e=>e.birth)),wd=Math.max(...Dn.map(e=>e.birth));let or=[...Dn],at=null,lt=null;const kd={r:255,g:255,b:255},_d={r:37,g:99,b:235};ti("#f3f4f6"),Ro(1750),ti("#e6eef8"),Ro(1820),ti("#e8f4ff"),ti("#eef2f7");const ss=1677.5,qi=1980,nl=qi-ss,Sd=6,Td=2,Cd=0,Ui={barHeight:50,widthScale:1,fontScale:1},Ft={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let ct={...Ui};function Ds(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function Ao(e={}){ct={barHeight:Ds(e.barHeight??ct.barHeight??Ui.barHeight,Ft.barHeight.min,Ft.barHeight.max),widthScale:Ds(e.widthScale??ct.widthScale??Ui.widthScale,Ft.widthScale.min,Ft.widthScale.max),fontScale:Ds(e.fontScale??ct.fontScale??Ui.fontScale,Ft.fontScale.min,Ft.fontScale.max)}}function Ed(){return Sd*ct.widthScale}function Hi(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=nl*Ed()+Cd,i=(n.clientWidth||window.innerWidth)*Td*ct.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function _t(e){return(e-ss)/nl*100}function tl(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function ti(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function Ns({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function Po(e,n,t){const i=tl(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function Ro(e){const n=wd-xo;return n<=0?0:tl((e-xo)/n)}const zd={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function Cr(e){return zd[e]||"#f3f4f6"}function Ld(e){return e?rr[e]||On.find(n=>n.id===e)?.label||e:""}function Io(e={}){!e||typeof e!="object"||(rr={...rr,...e})}function Md(e){const n=On.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function xd(e,n){const t=Number(e),i=Number(n),s=Md(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let a=null,l=0;return On.forEach(c=>{const p=Math.max(0,Math.min(i,c.to)-Math.max(t,c.from));p>l&&(l=p,a=c.id)}),a&&l>r/2?a:s}function Ad(e){const n=Cr(e),t=ti(n),i=Po(t,kd,.12),s=Po(t,_d,.04);return`linear-gradient(145deg, ${Ns(i)} 0%, ${Ns(t)} 58%, ${Ns(s)} 100%)`}function Fo(e){Array.isArray(e)?or=[...e]:or=[...Dn]}function Er(){const e=document.getElementById("gantt"),n=document.getElementById("axis");if(!e)return;const t=s=>Number.isInteger(at)&&s===at,i=s=>Number.isInteger(lt)&&s===lt;e.querySelectorAll(".bar").forEach(s=>{const r=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",t(r)),s.classList.toggle("bar--hovered",i(r))}),e.querySelectorAll(".bar-connector").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),a=t(r),l=i(r);s.classList.toggle("bar-connector--selected",a),s.classList.toggle("bar-connector--hover",l)}),n&&n.querySelectorAll(".life-label").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),a=t(r),l=i(r);s.classList.toggle("life-label--active",a||l),s.classList.toggle("life-label--hover",l)})}function il(e){Number.isInteger(e)?at=e:at=null,Er()}function wt(e){Number.isInteger(e)?lt=e:lt=null,Er()}function Oo(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(ss/10)*10,t=Math.ceil(qi/10)*10;On.forEach(i=>{const s=Math.max(i.from,ss),r=Math.min(i.to,qi);if(r<=s)return;const a=document.createElement("div");a.className="era-band",a.style.left=_t(s)+"%",a.style.width=_t(r)-_t(s)+"%",a.style.backgroundImage="none",a.style.backgroundColor=Cr(i.id),a.textContent=Ld(i.id)||i.label,i.id==="baroque"&&(a.style.justifyContent="flex-end",a.style.paddingLeft="6px",a.style.paddingRight="26px",a.style.textAlign="right"),r===qi&&(a.style.borderRight="none"),e.appendChild(a)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=_t(i)+"%",e.appendChild(s);const a=document.createElement("div");a.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),a.style.left=_t(i)+"%",a.textContent=i,e.appendChild(a)}}function Di(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="",n&&n.querySelectorAll(".life-label").forEach(F=>F.remove());const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=document.createDocumentFragment(),a=or||[],l=e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth,c=6,p=c/l*100,h=[...a].sort((F,N)=>F.birth-N.birth),g=h.length,C=h.map((F,N)=>({composer:F,laneIndex:N}));Number.isInteger(at)&&(at<0||at>=g)&&(at=null),Number.isInteger(lt)&&(lt<0||lt>=g)&&(lt=null);const L=2,H=ct.barHeight,V=H+L,ce=g*H+Math.max(0,g-1)*L;e.style.height=ce+"px",g&&(C.forEach(({composer:F,laneIndex:N})=>{const ee=F.displayName||F.name,W=_t(F.birth),he=_t(F.death),q=document.createElement("div");q.className="bar",q.setAttribute("data-lane-index",N),q.setAttribute("data-name",F.name);const Q=xd(F.birth,F.death);q.style.backgroundImage=Ad(Q),q.style.backgroundColor=Cr(Q);const Z=W,B=he-W,X=he-p,x=N*V+H*.5+i,se=(de,Ee)=>{const we=document.createElement("div");we.className="bar-connector",we.setAttribute("data-lane-index",N),we.setAttribute("data-side",Ee),we.style.left=de+"%",we.style.top=-i+"px",we.style.height=x+"px",s.appendChild(we)};if(se(Z,"start"),se(X,"end"),n){const de=document.createElement("div");de.className="life-label",de.setAttribute("data-lane-index",N),de.setAttribute("data-side","start"),de.style.left=Z+"%",de.textContent=F.birth,r.appendChild(de);const Ee=document.createElement("div");Ee.className="life-label",Ee.setAttribute("data-lane-index",N),Ee.setAttribute("data-side","end"),Ee.style.left=X+"%",Ee.textContent=F.death,r.appendChild(Ee)}q.style.left=Z+"%",q.style.width="calc("+B+"% - "+c+"px)",q.style.top=N*V+"px",q.style.height=H+"px",q.style.lineHeight="1.15",q.style.fontSize=H*.28*ct.fontScale+"px";const ve=el(F.name);let De=0;if(ve){const de=document.createElement("img");de.className="bar-avatar",De=Math.max(10,Math.round(H*1.1)),de.style.width=De+"px",de.style.height=De+"px",de.src=ve,de.alt=ee||F.name,q.appendChild(de)}const R=document.createElement("div");R.className="bar-text";const ae=document.createElement("span");ae.className="bar-label",ae.textContent=ee,R.appendChild(ae);const ue=document.createElement("span");ue.className="bar-dates",ue.textContent=`${F.birth} – ${F.death}`,R.appendChild(ue),q.appendChild(R),e.appendChild(q);const Ne=()=>{ae.scrollWidth>ae.clientWidth&&(ae.textContent=yd(ee))};ae.clientWidth>0?Ne():typeof window<"u"&&window.requestAnimationFrame(Ne),q.addEventListener("click",de=>{de.stopPropagation(),il(N),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:F,laneIndex:N}}))}),q.addEventListener("mouseenter",()=>wt(N)),q.addEventListener("mouseleave",()=>wt(null)),q.addEventListener("touchstart",de=>{if(!de.touches||de.touches.length!==1)return;const Ee=de.touches[0];q.dataset.touchStartX=String(Ee.clientX),q.dataset.touchStartY=String(Ee.clientY),wt(N)},{passive:!0}),q.addEventListener("touchmove",de=>{if(!de.touches||de.touches.length!==1)return;const Ee=Number(q.dataset.touchStartX||"0"),we=Number(q.dataset.touchStartY||"0"),tn=de.touches[0],be=Math.abs(tn.clientX-Ee),We=Math.abs(tn.clientY-we);(be>6||We>6)&&wt(null)},{passive:!0}),q.addEventListener("touchend",()=>{wt(null)},{passive:!0}),q.addEventListener("touchcancel",()=>{wt(null)},{passive:!0})}),e.appendChild(s),n&&n.appendChild(r),Er())}function Pd(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4;let s=0,r=0,a=0,l=0,c=0,p=0,h=null;const g=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},C=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true",e.dispatchEvent(new CustomEvent("timeline-pan-start")))},L=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",g())};function H(){if(h=null,!n||!t)return;const Q=c-s,Z=p-r;e.scrollLeft=a-Q,e.scrollTop=l-Z}const V=Q=>{Q.button===0&&(n=!0,t=!1,e.classList.remove("panning"),s=Q.clientX,r=Q.clientY,c=Q.clientX,p=Q.clientY,a=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),Q.preventDefault())},ce=Q=>{if(n){if(c=Q.clientX,p=Q.clientY,!t){const Z=Math.abs(c-s),B=Math.abs(p-r);if(Z>i||B>i)C();else return}h===null&&(h=window.requestAnimationFrame(H)),Q.preventDefault()}},F=()=>{n&&(n=!1,L(),h!==null&&(cancelAnimationFrame(h),h=null))};e.addEventListener("mousedown",V),window.addEventListener("mousemove",ce),window.addEventListener("mouseup",F);let N=null,ee=!1;const W=Q=>{if(N!==null||Q.touches.length!==1)return;const Z=Q.touches[0];N=Z.identifier,ee=!1,s=Z.clientX,r=Z.clientY,c=Z.clientX,p=Z.clientY,a=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),L()},he=Q=>{if(N===null)return;const Z=Array.from(Q.touches).find(se=>se.identifier===N);if(!Z)return;const B=Z.clientX-s,X=Z.clientY-r,$=Math.abs(B),x=Math.abs(X);if(!ee)if($>i||x>i)ee=!0,C();else return;e.scrollLeft=a-B,e.scrollTop=l-X,Q.preventDefault()},q=Q=>{N===null||!Array.from(Q.changedTouches).some(B=>B.identifier===N)||(N=null,ee=!1,L())};e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchmove",he,{passive:!1}),e.addEventListener("touchend",q,{passive:!0}),e.addEventListener("touchcancel",q,{passive:!0})}function Rd(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};const i=.5,s=12,r=(p,h,g)=>{const C=p.getBoundingClientRect();return C.bottom>h&&C.top<g},a=()=>e.scrollTop+e.clientHeight>=e.scrollHeight-s,l=()=>{if(a())return;const p=Array.from(n.querySelectorAll(".bar"));if(!p.length)return;const h=e.getBoundingClientRect(),C=(t?.getBoundingClientRect()?.bottom??h.top)+1,L=h.bottom,H=p.find(N=>r(N,C,L));if(!H)return;const V=H.getBoundingClientRect(),ce=C,F=V.top-ce;Math.abs(F)<=i||ar(e,{left:e.scrollLeft,top:Math.max(0,e.scrollTop+F),behavior:"auto"})},c=()=>{l()};return e.addEventListener("timeline-pan-end",c),()=>{e.removeEventListener("timeline-pan-end",c)}}function ar(e,{left:n=0,top:t=0,behavior:i="smooth"}){const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":i;if(e.scrollTo){e.scrollTo({left:n,top:t,behavior:r});return}e.scrollLeft=n,e.scrollTop=t}function Id(e={}){Ao(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:Dn;Fo(n),Io(e.eraLabels||{}),Hi(),Oo(),Di(),Pd();const t=Rd(),i=()=>Hi();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const l=document.getElementById("timeline");l&&ar(l,{left:0,top:0,behavior:"smooth"})}function a(){const l=document.getElementById("timeline");l&&ar(l,{left:Math.max(0,l.scrollWidth-l.clientWidth),top:Math.max(0,l.scrollHeight-l.clientHeight),behavior:"smooth"})}return{goToStart:r,goToEnd:a,setComposers(l){Fo(l),Di()},updateSettings(l){Ao(l||{}),Hi(),Di()},updateEraLabels(l){Io(l||{}),Hi(),Oo(),Di()},setSelectedLane:il,setHoveredLane:wt,destroy(){window.removeEventListener("resize",i),t()}}}const gs=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},Fd={class:"timeline-wrapper"},Od={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const a=r.getAttribute("data-name"),l=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:a?{name:a}:null,laneIndex:Number.isNaN(l)?null:l}}))};return hs(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=Id({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),ki(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),Ue(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),Ue(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),Ue(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(ie(),oe("div",Fd,[...r[0]||(r[0]=[v("div",{id:"timeline"},[v("div",{class:"timeline-inner"},[v("div",{id:"axis",class:"axis"}),v("div",{id:"gantt"})])],-1)])]))}},Hd=gs(Od,[["__scopeId","data-v-095e97d5"]]),Dd="/images/about_music_logo.png",Nd="/images/dk3-min.jpg",Wd={class:"about"},Bd={class:"about__card"},Kd={class:"about__title"},Gd={class:"about__text"},jd={class:"about__text"},Vd={class:"about__author"},$d={class:"about__author-body"},qd={class:"about__author-label"},Ud={class:"about__author-name"},Jd={class:"about__contributors"},Xd={class:"about__contributors-title"},Yd={class:"about__contributors-list"},Qd={class:"about__contributors-name"},Zd=["href"],eh={key:0,class:"about__contributors-toggle"},nh={class:"about__contributors-toggle-label"},th={__name:"AboutPage",props:{language:{type:String,default:"en"},testFeaturesEnabled:{type:Boolean,default:!1}},emits:["update:testFeaturesEnabled"],setup(e,{emit:n}){const t={en:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",testFeaturesLabel:"Turn on test functions",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"Official website of the pianist"},{name:"Olga Matveeva",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]},de:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",testFeaturesLabel:"Testfunktionen einschalten",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"Offizielle Website des Pianisten"},{name:"Olga Matveeva",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]},ru:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",testFeaturesLabel:"Включить тестовые функции",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Матвеева",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]}},i=e,s=n,r=D(()=>t[i.language]||t.en),a=D(()=>r.value.contributors||t.en.contributors||[]),l=D(()=>r.value.testFeaturesLabel||t.en.testFeaturesLabel||"Test functions"),c=D({get:()=>i.testFeaturesEnabled,set:p=>s("update:testFeaturesEnabled",p)});return(p,h)=>(ie(),oe("section",Wd,[v("div",Bd,[h[4]||(h[4]=v("img",{class:"about__logo",src:Dd,alt:"Music logo",loading:"lazy"},null,-1)),v("h1",Kd,O(r.value.title),1),v("p",Gd,O(r.value.intro),1),v("p",jd,O(r.value.goal),1),v("div",Vd,[h[3]||(h[3]=v("img",{class:"about__photo",src:Nd,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),v("div",$d,[v("div",qd,O(r.value.authorLabel),1),v("div",Ud,O(r.value.authorName),1),h[1]||(h[1]=v("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),h[2]||(h[2]=v("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),v("div",Jd,[v("div",Xd,O(r.value.contributorsTitle),1),v("ul",Yd,[(ie(!0),oe(en,null,Kt(a.value,g=>(ie(),oe("li",{key:g.url,class:"about__contributors-item"},[v("span",Qd,O(g.name),1),v("a",{class:"about__contributors-link",href:g.url,target:"_blank",rel:"noreferrer"},O(g.linkText),9,Zd),g.url==="https://www.linkedin.com/in/olga-shibanova"?(ie(),oe("div",eh,[v("label",nh,[Xs(v("input",{"onUpdate:modelValue":h[0]||(h[0]=C=>c.value=C),class:"about__contributors-toggle-input",type:"checkbox","aria-label":"Toggle test features"},null,512),[[Qa,c.value]]),v("span",null,O(l.value),1)])])):hn("",!0)]))),128))])])])]))}},ih=gs(th,[["__scopeId","data-v-e20b3556"]]),sh="/images/telegram.svg",rh="/images/whatsapp.svg",oh={class:"quiz__card"},ah={class:"quiz__header"},lh={class:"quiz__title"},ch={class:"quiz__subtitle"},uh={key:0,class:"quiz__intro"},dh={class:"quiz__intro-card"},hh={class:"quiz__intro-title"},fh={class:"quiz__intro-list"},mh={class:"quiz__difficulty"},ph={class:"quiz__difficulty-label"},gh={class:"quiz__difficulty-options"},vh=["aria-pressed","disabled"],bh=["aria-pressed","disabled"],yh={key:0,class:"quiz__error",role:"status"},wh=["disabled"],kh={key:1,class:"quiz__result"},_h={class:"quiz__result-score"},Sh={class:"quiz__result-mode"},Th={class:"quiz__result-text"},Ch={class:"quiz__result-text"},Eh={class:"quiz__share"},zh={class:"quiz__share-title"},Lh={class:"quiz__share-preview"},Mh={class:"quiz__share-preview-title"},xh={class:"quiz__share-preview-body"},Ah={class:"quiz__share-actions"},Ph=["href","aria-label","title"],Rh={class:"sr-only"},Ih=["href","aria-label","title"],Fh={class:"sr-only"},Oh={key:2,class:"quiz__round"},Hh={class:"quiz__round-top"},Dh={class:"quiz__round-label"},Nh={class:"quiz__round-top-right"},Wh={class:"quiz__score-pill"},Bh=["aria-label","title"],Kh={class:"quiz__progress-track","aria-hidden":"true"},Gh={class:"quiz__listen"},jh=["disabled"],Vh={style:{"font-size":"14px"}},$h={class:"quiz__listen-body"},qh={class:"quiz__listen-title"},Uh=["src"],Jh={class:"quiz__question"},Xh={class:"quiz__options"},Yh=["disabled","aria-pressed","onClick"],Qh={class:"quiz__options quiz__options--era"},Zh=["disabled","aria-pressed","onClick"],ef={key:0,class:"quiz__feedback",role:"status"},nf={key:0,class:"quiz__feedback-block"},tf={class:"quiz__feedback-title"},sf={class:"quiz__feedback-body"},rf={key:1,class:"quiz__feedback-block"},of={class:"quiz__feedback-title"},af={class:"quiz__feedback-body"},lf={class:"quiz__actions"},cf=["disabled"],uf="/playlist_easy.json",df="/playlist_hard.json",hf="https://soundcloud.com/dmitry-kotikov/sets/quizeasy",ff="https://soundcloud.com/dmitry-kotikov/sets/quizhard",mf={__name:"QuizPage",props:{language:{type:String,default:"en"},composerNames:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e,t=[['Danse Du Grand Calumet De La Paix  from "Les Sauvages" (Les Indes Galantes) Jean-Philippe Rameau',"Jean-Philippe Rameau"],["Carl Orff - Carmina Burana - O Fortuna","Carl Orff"],["Finlandia, Op.26","Jean Sibelius"],["George Gershwin - Rhapsody In Blue","George Gershwin"],["Rossini - The Barber of Seville - Overture - Marriner","Gioachino Rossini"],["Richard Strauss - Also Sprach Zarathustra, Op. 30","Richard Strauss"],["Nessum dorma - Turandot / Giacomo Puccini","Giacomo Puccini"],["Offenbach: Orpheus in the Underworld, Overture. (Can-can)","Jacques Offenbach"],["Shostakovich: Symphony No. 7 in C Major, Op. 60 (Leningrad) - I. Allegretto (June 1988)","Dmitri Shostakovich"],["Sergei Prokofiev - Dance Of The Knights from Romeo and Juliet, Op. 64","Sergei Prokofiev"],["Igor Stravinsky Rite Of Spring – NEC Philharmonia + Hugh Wolff","Igor Stravinsky"],["MAURICE RAVEL ~ Bolero","Maurice Ravel"],["Rachmaninoff Piano Concerto No. 1, Op. 1 - I. Vivace","Sergei Rachmaninoff"],["Scriabin - Etude in D# minor op8no12","Alexander Scriabin"],["Gymnopédie no.1 - Erik Satie","Erik Satie"],["Clair de Lune - Debussy","Claude Debussy"],["Gustav Mahler: Adagietto from Symphony #5","Gustav Mahler"],["Rimsky-Korsakov: Scheherazade, Op. 35 - The Tale of Prince Kalendar ( Lento-Allegro molto)","Nikolai Rimsky-Korsakov"],["Edvard Grieg: Peer Gynt Suite No.1, Op. 46 / Morning Mood (performed using Vienna Symphonic Library)","Edvard Grieg"],["Antonín Dvořák — Symphony No. 9 In E Minor  From The New World , Op. 95 IV. Allegro Con Fuoco","Antonin Dvorak"],["Pyotr Ilyich Tchaikovsky - The Nutcracker Suite, Op. 71a. III. Waltz of the Flowers","Pyotr Ilyich Tchaikovsky"],["Khovanshchina: Introduction - Dawn on the Moscow River","Modest Mussorgsky"],["Carmen - Habanera (Piano Version) Georges Bizet","Georges Bizet"],["The Swan - Saint-Saens","Camille Saint-Saens"],["Alexander Borodin: Polovetsian Dances","Alexander Borodin"],["Brahms - Symphony No. 3 In F Major, Op. 90 - III. Poco Allegretto","Johannes Brahms"],["Johann Strauss II - The Blue Danube Waltz","Johann Strauss II"],["La Donna E Mobile - Giuseppe Verdi","Giuseppe Verdi"],["Liszt - La Campanella In G - Sharp Minor (From Grandes Études De Paganini, S.141,No.3)","Franz Liszt"],["Robert Schumann - Kinderszenen Op.15 No.7, Träumerei","Robert Schumann"],["Chopin - Nocturne in E Flat Major op. 9 No. 2","Frederic Chopin"],["Wedding March - Felix Mendelssohn","Felix Mendelssohn"],["Former Anthem of Russia (1990-2000) - The Patriotic Song, Glinka | патриотическая песня глинки","Mikhail Glinka"],["Hector Berlioz / Symphonie Fantastique, Op.14 V Dream of a Witches' Sabbath","Hector Berlioz"],["Franz Schubert - Ave Maria","Franz Schubert"],["Paganini - Violin Concerto No. 2 In B Minor, III. Rondo “La Campanella“","Niccolo Paganini"],["Ludwig Van Beethoven - Sonata No. 17 In D Minor For Piano, Op. 31 - 2 (The Tempest)- III. Allegretto","Ludwig van Beethoven"],["Serenade No.13, G Major, K525, Eine Kleine Nachtmusic II. Romanze Andante","Wolfgang Amadeus Mozart"],["Joseph Haydn: Symphony No. 49 In F Minor - Allegro Di Molto","Joseph Haydn"],['Handel/Goossens: "Hallelujah" from "Messiah" HWV 56',"George Frideric Handel"],["Scarlatti: Sonata In D Minor K141","Domenico Scarlatti"],["Orchestral Suite No. 3 in D Major, BWV 1068 ”Air on G String”","Johann Sebastian Bach"],["Violin Concerto in E major, RV 269 - Spring","Antonio Vivaldi"]],i=[["Rameau - La Poule","Jean-Philippe Rameau"],["Carmina Burana, XIV. In Taberna - Carl Orff","Carl Orff"],["Symphony No.2 In D Major, Op. 43: I. Allegretto","Jean Sibelius"],["Gershwin - 3 Preludes:  I. Allegro ben ritmato e deciso","George Gershwin"],["I'taliana In Algeri - Overture","Gioachino Rossini"],["Strauss: Die Frau ohne Schatten Symphonic Fantasy (Erato 1992)","Richard Strauss"],["Giacomo Puccini - Madama Butterfly -  Humming Chorus","Giacomo Puccini"],["La Belle Helene - Overture","Jacques Offenbach"],["SHOSTAKOVICH: String Quartet No. 8 in C Minor, Op. 110: II. Allegro molto - Quatuor Danel","Dmitri Shostakovich"],["Prokofiev: Symphony No. 1 in D Major, Op. 25","Sergei Prokofiev"],["Stravinsky: Firebird Suite - Infernal Dance of King Kaschei","Igor Stravinsky"],["Ravel, La Valse","Maurice Ravel"],["Rachmaninoff Elegie Op. 3 No. 1","Sergei Rachmaninoff"],["Alexander Scriabin - Piano Sonata No 5 in F sharp Op 53","Alexander Scriabin"],["Sarabande N.1","Erik Satie"],["La Cathedrale Engloutie / The Sunken Cathedral - Claude Debussy","Claude Debussy"],["Mahler Symphony No 3 in D Minor (October 2018)","Gustav Mahler"],["RIMSKY-KORSAKOV Scheherazade:  1 The Sea and Sinbad’s Ship","Nikolai Rimsky-Korsakov"],["1. Allegro moderato (D minor)","Sergei Rachmaninoff"],['A. Dvorak, Stabat Mater "Inflammatus", Cornelia Lanz (Altsolo), Herkulessaal Munchen',"Antonin Dvorak"],["P.I. Tchaikovsky:  Kak bi znala ya","Pyotr Ilyich Tchaikovsky"],["Modest Mussorgsky (Orch. Shostakovich) - Songs and Dances of Death - Alvarez - Toro- Campinas - 2019","Modest Mussorgsky"],["Bizet: The Pearl Fishers, Au fond du temple saint","Georges Bizet"],["Camille Saint-Saens, violin concerto N.3 in B minor op 61, 1st m","Camille Saint-Saens"],["Занятие 16-17 Бородин_Опера Князь Игорь 5 Плач Ярославны","Alexander Borodin"],["Brahms, Violin Concerto in D, op. 77","Johannes Brahms"],["Strauss, Johann Tritsch Tratsch Polka","Johann Strauss II"],['Verdi Requiem: "Dies Irae"',"Giuseppe Verdi"],["Liszt - Consolation No. 3 In D - Flat Major","Franz Liszt"],["Carnaval, Op. 9 No. 5 Eusebius - Robert Schumann","Robert Schumann"],["Chopin Heroic Polonaise Op.53 A Flat Major - Played by Valentina Lisitsa","Frederic Chopin"],["Mendelssohn Venetian Gondola Song Op 30 No 6","Felix Mendelssohn"],["Попутная песня - Нестор Кукольник-М.Глинка","Mikhail Glinka"],["Le carnaval romain: Overture (feat. Armenian Philharmonic Orchestra)","Hector Berlioz"],["Schubert - Der Leiermann - Thomas Quasthoff  Daniel Barenboim","Franz Schubert"],["Paganini: Violin Concerto No. 1 in D Major (Augustin Hadelich, violin; Carlos Kalmar, conductor)","Niccolo Paganini"],["Beethoven Symphony No. 3 in E-Flat Major, Op  55 (Eroica) (September 2019)","Ludwig van Beethoven"],["Violin Concerto No. 3 in G major, K. 216 - I. Allegro - Wolfgang Amadeus Mozart (8D Binaural Remastered - Music Therapy)","Wolfgang Amadeus Mozart"],["01 Haydn - The Creation, Part One, The Representation Of Chaos","Joseph Haydn"],["George Frideric Handel - Sarabande Suite No 4 In D Minor HMV 437 (Chamber)","George Frideric Handel"],["D. Scarlatti, Sonata in B Minor, K. 27","Domenico Scarlatti"],["French Suite No. 5 in G major, BWV 816: VII. Gigue (Original Version)","Johann Sebastian Bach"],["Vivaldi: Mandolin Concerto in C major, RV 425 - 1. Allegro (2013.06.12)","Antonio Vivaldi"]];function s(_){return String(_||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’‘`]/g,"'").replace(/[–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase()}const r=new Map(t.map(([_,A])=>[s(_),A])),a=new Map(i.map(([_,A])=>[s(_),A])),l=Dn.map(_=>_.name);function c(_){return String(_||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function p(_){const A=c(_);return n.composerNames?.[A]||_}function h(_){return n.eraLabels?.[_]||On.find(A=>A.id===_)?.label||""}const g=D(()=>On.map(_=>h(_.id))),C=new Map(Dn.map(_=>[s(_.name),_.name])),L={en:{retry:"Play again",abort:"Quit quiz",confirmAbort:"Do you really want to quit the quiz?",title:"Guess the composer",subtitle:"Press Play, listen to the excerpt, and guess who wrote it.",start:"Start the quiz",rulesTitle:"How it works",rule1:"Listen to the excerpt and choose the composer.",rule2:"Pick the era for a bonus half-point.",rule3:"Simple uses famous pieces. Hard uses rarer ones. Your total shows up at the end.",difficultyLabel:"Mode",difficultySimple:"Simple",difficultyHard:"Hard",loadingQuiz:"Loading quiz...",playlistError:"Quiz data is unavailable right now.",round:"Round",of:"of",play:"Play",pause:"Pause",listenPrompt:"Listen to the excerpt",listenHelp:"Replay as many times as you need.",loading:"Loading audio...",audioError:"Audio is unavailable. Try again in a moment.",chooseComposerPrompt:"Who is the composer?",chooseEraPrompt:"Which era fits best?",composerCorrect:"Correct composer!",composerWrong:"Not quite.",eraCorrect:"Era bonus!",eraWrong:"Not quite.",composerAnswerLabel:"Composer:",eraAnswerLabel:"Era:",next:"Next",finish:"Finish",scoreLabel:"Score",resultLine:"Final score:",resultModeLabel:"Mode:",resultWin:"Sharp ear - well done.",resultLose:"Worth another listen to sharpen your ear.",retry:"Play again",shareTitle:"Share your result",sharePreviewTitle:"Message preview",shareTemplate:"My score in the classical music quiz ({mode} mode): {score}/{total}. Test your knowledge here",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Copy link",shareCopied:"Copied"},de:{retry:"Nochmal spielen",abort:"Quiz abbrechen",confirmAbort:"Willst du das Quiz wirklich abbrechen?",title:"Rate den Komponisten",subtitle:"Abspielen druecken, anhoeren und den Komponisten erraten.",start:"Quiz starten",rulesTitle:"So geht's",rule1:"Hoere den Ausschnitt und waehle den Komponisten.",rule2:"Waehle auch die Epoche - das gibt einen halben Bonuspunkt.",rule3:"Einfach = bekannte Stuecke. Schwer = seltenere Stuecke. Die Gesamtpunktzahl kommt am Ende.",difficultyLabel:"Modus",difficultySimple:"Einfach",difficultyHard:"Schwer",loadingQuiz:"Quiz wird geladen...",playlistError:"Quizdaten sind gerade nicht verfuegbar.",round:"Runde",of:"von",play:"Abspielen",pause:"Pause",listenPrompt:"Ausschnitt anhoeren",listenHelp:"Du kannst beliebig oft neu starten.",loading:"Audio wird geladen...",audioError:"Audio ist gerade nicht verfuegbar. Versuch's gleich nochmal.",chooseComposerPrompt:"Wer ist der Komponist?",chooseEraPrompt:"Welche Epoche passt am besten?",composerCorrect:"Komponist stimmt!",composerWrong:"Nicht ganz.",eraCorrect:"Epoche-Bonus!",eraWrong:"Nicht ganz.",composerAnswerLabel:"Komponist:",eraAnswerLabel:"Epoche:",next:"Weiter",finish:"Fertig",scoreLabel:"Punkte",resultLine:"Endstand:",resultModeLabel:"Modus:",resultWin:"Starkes Gehoer - gut gemacht.",resultLose:"Ein zweiter Durchlauf hilft dem Gehoer.",retry:"Nochmal spielen",shareTitle:"Ergebnis teilen",sharePreviewTitle:"Vorschau",shareTemplate:"Mein Ergebnis im Klassik-Quiz ({mode}): {score}/{total}. Teste dein Wissen hier",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Link kopieren",shareCopied:"Kopiert"},ru:{retry:"Пройти еще раз",abort:"Прервать викторину",confirmAbort:"Действительно ли вы хотите прервать викторину?",title:"Угадайте композитора",subtitle:'Нажмите "Слушать", прослушайте фрагмент и угадайте автора.',start:"Начать виктотрину",rulesTitle:"Как играть",rule1:"Прослушайте фрагмент и выберите композитора.",rule2:"Угадайте эпоху - это дает полбалла бонусом.",rule3:'"Просто" - более известные произведения. "Сложно" - более редкие. Итоговый счет будет в конце.',loadingQuiz:"Загружаем викторину...",playlistError:"Викторина сейчас недоступна.",round:"Раунд",of:"из",play:"Слушать",pause:"Пауза",listenPrompt:"Слушайте фрагмент",listenHelp:"Можно переслушивать сколько угодно раз.",loading:"Загружаем аудио...",audioError:"Аудио сейчас недоступно. Попробуйте еще раз чуть позже.",chooseComposerPrompt:"Кто это?",chooseEraPrompt:"К какой эпохе это ближе?",composerCorrect:"Композитор угадан верно!",composerWrong:"Композитор угадан неверно.",eraCorrect:"Бонус за эпоху!",eraWrong:"Не совсем.",composerAnswerLabel:"Композитор:",eraAnswerLabel:"Эпоха:",next:"Дальше",finish:"Узнать результат",scoreLabel:"Счет",resultLine:"Результат:",resultModeLabel:"Режим:",resultWin:"Вы - настоящий знаток академической музыки.",resultLose:"Стоит прослушать еще раз всех композиторов на таймлайне и результат будет лучше.",retry:"Сыграть еще раз",shareTitle:"Поделиться результатом",sharePreviewTitle:"Текст:",difficultyLabel:"Режим",difficultySimple:"Простой",difficultyHard:"Сложный",shareTemplate:"Мой результат в викторине по классической музыке на {mode} уровне: {score}/{total}. Проверьте себя здесь",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Скопировать ссылку",shareCopied:"Скопировано"}},H="".replace(/\/$/,""),V=ge([]),ce=ge(!1),F=ge(!1),N=ge(0),ee=ge(null),W=ge(null),he=ge(null),q=ge(null);let Q=null;const Z=ge(!1),B=ge(!1),X=ge(!1),$=ge("simple"),x=ge(!1),se=ge(""),ve=new Map,De=ge("simple"),R=D(()=>L[n.language]||L.en),ae=D(()=>(De.value||$.value)==="hard"?R.value.difficultyHard:R.value.difficultySimple),ue=D(()=>{const _=De.value||$.value;return(n.language||"en")==="ru"?_==="hard"?"сложном":"легком":ae.value}),Ne=D(()=>typeof window>"u"?"":window.location.href.split("#")[0]),de=D(()=>(R.value.shareTemplate||"").replace("{score}",u.value).replace("{total}",f.value).replace("{mode}",ue.value).replace(/\s+/g," ").trim()),Ee=D(()=>{const _=Ne.value||"",A=de.value||"";return _?A?`${A}: ${_}`:_:A}),we=D(()=>{const _=encodeURIComponent(Ne.value||""),A=encodeURIComponent(de.value||""),j=encodeURIComponent(Ee.value||"");return{telegram:`https://t.me/share/url?url=${_}&text=${A}`,whatsApp:`https://wa.me/?text=${j}`}}),tn=D(()=>V.value.length),be=D(()=>V.value[N.value]||null),We=D(()=>!!be.value?.selectedComposer),sn=D(()=>!!be.value?.selectedEra),Ie=D(()=>We.value&&sn.value),Ye=D(()=>be.value?.selectedComposer===be.value?.composer),Fe=D(()=>be.value?.selectedEra===be.value?.eraLabel),En=D(()=>V.value.reduce((_,A)=>_+(A.composerCorrect?1:0)+(A.eraCorrect?.5:0),0)),_n=D(()=>tn.value*1.5),u=D(()=>I(En.value)),f=D(()=>I(_n.value)),b=D(()=>!ce.value||F.value?"":`${R.value.round} ${N.value+1} ${R.value.of} ${tn.value}`),w=D(()=>N.value>=tn.value-1?R.value.finish:R.value.next),S=D(()=>{if(!F.value)return"";const _=_n.value*.7;return En.value>=_?R.value.resultWin:R.value.resultLose}),k=D(()=>!ce.value||!tn.value?0:F.value?100:(N.value+1)/tn.value*100),M=D(()=>be.value?.id?E(`/api/soundcloud/audio/${be.value.id}`):""),z=D(()=>X.value?R.value.audioError:B.value?R.value.loading:R.value.listenHelp);function E(_){return _?H?H.endsWith("/")&&_.startsWith("/")?H+_.slice(1):!H.endsWith("/")&&!_.startsWith("/")?`${H}/${_}`:H+_:_:H}function T(_){const A=encodeURIComponent(_);return E(`/api/soundcloud/playlist?url=${A}`)}function G(_){const A=[..._];for(let j=A.length-1;j>0;j-=1){const _e=Math.floor(Math.random()*(j+1));[A[j],A[_e]]=[A[_e],A[j]]}return A}function I(_){return Number.isInteger(_)?String(_):_.toFixed(1)}function K(_){return C.get(s(_))||_}function Y(_){const A=K(_),j=Dn.find(Oe=>Oe.name===A);if(!j)return null;const _e=Math.round((j.birth+j.death)/2),le=On.find(Oe=>_e>=Oe.from&&_e<Oe.to),zn=On[On.length-1]?.id;return h(le?.id||zn)}function te(_){const A=l.filter(_e=>_e!==_),j=G(A).slice(0,3);return G([_,...j].map(p))}function fe(_){return _.map(A=>{const j=K(A.composer),_e=Y(j)||"",le=p(j);return{...A,composer:le,eraLabel:_e,composerOptions:te(j),eraOptions:g.value,selectedComposer:null,selectedEra:null,composerCorrect:!1,eraCorrect:!1}})}function me(_){return _==="hard"?{source:df,url:ff,map:a}:{source:uf,url:hf,map:r}}function Be(_,A){if(!Array.isArray(_)||!_.length)return[];const j=G(_);return j.slice(0,Math.min(A,j.length))}async function Ke(_){if(ve.has(_))return ve.get(_);x.value=!0,se.value="";const{source:A,url:j,map:_e}=me(_);try{let le=await fetch(A),zn=null;if(le.ok)zn=await le.json();else{if(le=await fetch(T(j)),!le.ok)throw new Error(`Playlist error ${le.status}`);zn=await le.json()}const Oe=(zn?.tracks||[]).map(et=>{const Qe=s(et?.title),an=_e.get(Qe);return!an||!et?.id?null:{id:et.id,composer:an,title:et.title}}).filter(Boolean);if(!Oe.length)throw new Error("Playlist mapping empty");return ve.set(_,Oe),Oe}catch(le){return console.error("Quiz playlist load failed",le),se.value=R.value.playlistError,[]}finally{x.value=!1}}function rn(){const _=ee.value;Z.value=!1,B.value=!1,X.value=!1,_&&(_.pause(),_.currentTime=0,_.load())}function Ge(){const _=ee.value;Z.value=!1,B.value=!1,_&&(_.pause(),_.currentTime=0)}function Pn(_,A=-12){const j=_?.value||_;if(!j)return;const _e=W.value;if(_e&&typeof _e.scrollTo=="function"){const le=_e.getBoundingClientRect(),Oe=j.getBoundingClientRect().top-le.top;_e.scrollTo({top:_e.scrollTop+Oe+A,behavior:"smooth"});return}if(typeof j.scrollIntoView=="function"){j.scrollIntoView({behavior:"smooth",block:"center"});return}typeof window<"u"&&typeof window.scrollTo=="function"&&window.scrollTo({top:0,behavior:"smooth"})}function ft({behavior:_="smooth",duration:A=700}={}){const j=W.value,_e=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,le=Qe=>1-Math.pow(1-Qe,3),zn=(Qe,an,mt,bs)=>{const At=Qe();if(!Number.isFinite(At)||At===mt){an(mt);return}const Jt=performance.now(),Xt=ys=>{const Ei=Math.min(1,(ys-Jt)/bs),ws=At+(mt-At)*le(Ei);an(ws),Ei<1&&requestAnimationFrame(Xt)};requestAnimationFrame(Xt)},Oe=Qe=>{if(Qe)try{if(_e||_!=="smooth"||A<=0){Qe.scrollTop=0,typeof Qe.scrollTo=="function"&&Qe.scrollTo({top:0,behavior:"auto"});return}zn(()=>Qe.scrollTop,an=>{Qe.scrollTop=an},0,A)}catch{}},et=()=>{if(typeof window>"u")return;const Qe=an=>{try{window.scrollTo(0,an)}catch{}};if(_e||_!=="smooth"||A<=0){try{window.scrollTo({top:0,behavior:"auto"})}catch{window.scrollTo(0,0)}return}zn(()=>window.scrollY||0,an=>Qe(an),0,A)};Oe(j),et(),typeof document<"u"&&(Oe(document.documentElement),Oe(document.body)),requestAnimationFrame(()=>{Oe(j),typeof document<"u"&&(Oe(document.documentElement),Oe(document.body)),requestAnimationFrame(()=>{j&&(j.scrollTop=0),typeof document<"u"&&(document.documentElement.scrollTop=0,document.body.scrollTop=0),typeof window<"u"&&window.scrollTo(0,0)})})}async function Se(){if(x.value)return;se.value="";const _=await Ke($.value);if(!_.length)return;const A=Be(_,10);De.value=$.value,V.value=fe(A),N.value=0,ce.value=!0,F.value=!1,rn()}function on(){Se()}function zt(){if(typeof window<"u"){const _=R.value.confirmAbort||"Do you really want to quit the quiz?";if(!window.confirm(_))return}Ge(),V.value=[],N.value=0,F.value=!1,ce.value=!1,se.value="",X.value=!1,B.value=!1,Z.value=!1,De.value=$.value}function Lt(_){const A=be.value;!A||A.selectedComposer||(A.selectedComposer=_,A.composerCorrect=_===A.composer,Ge(),vn(()=>{Pn(Q,-3)}))}function Le(_){const A=be.value;!A||A.selectedEra||(A.selectedEra=_,A.eraCorrect=_===A.eraLabel,vn(()=>{Pn(q,-24)}))}function qt(){if(!Ie.value)return;N.value>=tn.value-1?(F.value=!0,Ge()):N.value+=1,vn(()=>{ft({behavior:"smooth",duration:200})})}async function Mt(){const _=ee.value;if(_){X.value=!1;try{_.paused?(B.value=!0,await _.play()):_.pause()}catch(A){console.error("Audio playback failed",A),X.value=!0,B.value=!1}}}function Wn(){Z.value=!0,B.value=!1}function Ut(){Z.value=!0,B.value=!1}function Pe(){Z.value=!1,B.value=!1}function xt(){Z.value=!1}function Si(){B.value=!0}function Ti(){B.value=!1}function Ci(){B.value=!1}function vs(){X.value=!0,B.value=!1,Z.value=!1}return Ue(M,async()=>{!ce.value||F.value||(await vn(),rn())}),Ue($,()=>{se.value=""}),Ue(F,_=>{_&&Ge()}),ki(()=>{Ge()}),(_,A)=>(ie(),oe("section",{class:"quiz",ref_key:"quizEl",ref:W},[v("div",oh,[v("header",ah,[v("h1",lh,O(R.value.title),1),v("p",ch,O(R.value.subtitle),1)]),ce.value?F.value?(ie(),oe("div",kh,[v("div",_h,O(u.value)+"/"+O(f.value),1),v("div",Sh,O(R.value.resultModeLabel)+" "+O(ae.value),1),v("div",Th,O(R.value.resultLine),1),v("div",Ch,O(S.value),1),v("div",Eh,[v("div",zh,O(R.value.shareTitle),1),v("div",Lh,[v("div",Mh,O(R.value.sharePreviewTitle),1),v("div",xh,O(Ee.value),1)]),v("div",Ah,[v("a",{class:"quiz__share-button",href:we.value.telegram,target:"_blank",rel:"noopener noreferrer","aria-label":R.value.shareTelegram,title:R.value.shareTelegram},[A[2]||(A[2]=v("img",{class:"quiz__share-icon",src:sh,alt:"","aria-hidden":"true"},null,-1)),v("span",Rh,O(R.value.shareTelegram),1)],8,Ph),v("a",{class:"quiz__share-button",href:we.value.whatsApp,target:"_blank",rel:"noopener noreferrer","aria-label":R.value.shareWhatsApp,title:R.value.shareWhatsApp},[A[3]||(A[3]=v("img",{class:"quiz__share-icon",src:rh,alt:"","aria-hidden":"true"},null,-1)),v("span",Fh,O(R.value.shareWhatsApp),1)],8,Ih)])]),v("button",{class:"quiz__primary",type:"button",onClick:on},O(R.value.retry),1)])):(ie(),oe("div",Oh,[v("div",Hh,[v("div",Dh,O(b.value),1),v("div",Nh,[v("div",Wh,O(R.value.scoreLabel)+" "+O(u.value)+"/"+O(f.value),1),v("button",{class:"quiz__secondary quiz__secondary--ghost",type:"button","aria-label":R.value.abort,title:R.value.abort,onClick:zt},[...A[4]||(A[4]=[v("span",{class:"quiz__icon","aria-hidden":"true"},"×",-1)])],8,Bh)])]),v("div",Kh,[v("div",{class:"quiz__progress-bar",style:St({width:`${k.value}%`})},null,4)]),v("div",Gh,[v("button",{class:"quiz__play",type:"button",disabled:!M.value,onClick:Mt},[v("span",{class:wn(["quiz__play-icon",{"quiz__play-icon--pause":Z.value}])},null,2),v("span",Vh,O(Z.value?R.value.pause:R.value.play),1)],8,jh),v("div",$h,[v("div",qh,O(R.value.listenPrompt),1),v("div",{class:wn(["quiz__listen-status",{"quiz__listen-status--error":X.value}])},O(z.value),3)])]),(ie(),oe("audio",{ref_key:"audioEl",ref:ee,class:"quiz__audio",key:be.value?.id,src:M.value,preload:"none","aria-hidden":"true",onPlay:Wn,onPlaying:Ut,onPause:Pe,onEnded:xt,onWaiting:Si,onCanplay:Ti,onLoadeddata:Ci,onError:vs},null,40,Uh)),v("div",Jh,O(R.value.chooseComposerPrompt),1),v("div",Xh,[(ie(!0),oe(en,null,Kt(be.value.composerOptions,(j,_e)=>(ie(),oe("button",{key:j,class:wn(["quiz__option",{"is-selected":j===be.value.selectedComposer,"is-correct":We.value&&j===be.value.composer,"is-wrong":We.value&&j===be.value.selectedComposer&&j!==be.value.composer}]),ref_for:!0,ref:le=>{_e===0&&(Je(Q)?Q.value=le:Q=le)},type:"button",disabled:We.value,"aria-pressed":j===be.value.selectedComposer,style:St({"--index":_e}),onClick:le=>Lt(j)},O(j),15,Yh))),128))]),v("div",{ref_key:"eraQuestionEl",ref:he,class:"quiz__question"},O(R.value.chooseEraPrompt),513),v("div",Qh,[(ie(!0),oe(en,null,Kt(be.value.eraOptions,(j,_e)=>(ie(),oe("button",{key:j,class:wn(["quiz__option",{"is-selected":j===be.value.selectedEra,"is-correct":sn.value&&j===be.value.eraLabel,"is-wrong":sn.value&&j===be.value.selectedEra&&j!==be.value.eraLabel}]),type:"button",disabled:sn.value,"aria-pressed":j===be.value.selectedEra,style:St({"--index":_e}),onClick:le=>Le(j)},O(j),15,Zh))),128))]),We.value||sn.value?(ie(),oe("div",ef,[We.value?(ie(),oe("div",nf,[v("div",tf,O(Ye.value?R.value.composerCorrect:R.value.composerWrong),1),v("div",sf,O(R.value.composerAnswerLabel)+" "+O(be.value.composer),1)])):hn("",!0),sn.value?(ie(),oe("div",rf,[v("div",of,O(Fe.value?R.value.eraCorrect:R.value.eraWrong),1),v("div",af,O(R.value.eraAnswerLabel)+" "+O(be.value.eraLabel),1)])):hn("",!0)])):hn("",!0),v("div",lf,[v("button",{ref_key:"nextButtonEl",ref:q,class:"quiz__secondary",type:"button",disabled:!Ie.value,onClick:qt},O(w.value),9,cf)])])):(ie(),oe("div",uh,[v("div",dh,[v("div",hh,O(R.value.rulesTitle),1),v("ul",fh,[v("li",null,O(R.value.rule1),1),v("li",null,O(R.value.rule2),1),v("li",null,O(R.value.rule3),1)])]),v("div",mh,[v("div",ph,O(R.value.difficultyLabel),1),v("div",gh,[v("button",{type:"button",class:wn(["quiz__difficulty-option",{"is-active":$.value==="simple"}]),"aria-pressed":$.value==="simple",disabled:x.value,onClick:A[0]||(A[0]=j=>$.value="simple")},O(R.value.difficultySimple),11,vh),v("button",{type:"button",class:wn(["quiz__difficulty-option",{"is-active":$.value==="hard"}]),"aria-pressed":$.value==="hard",disabled:x.value,onClick:A[1]||(A[1]=j=>$.value="hard")},O(R.value.difficultyHard),11,bh)])]),se.value?(ie(),oe("div",yh,O(se.value),1)):hn("",!0),v("button",{class:"quiz__primary",type:"button",disabled:x.value,onClick:Se},O(x.value?R.value.loadingQuiz:R.value.start),9,wh)]))])],512))}},pf=gs(mf,[["__scopeId","data-v-4285243b"]]),gf=`# Composer fact sheets

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
- Orff-Schulwerk: Sein paedagogisches Konzept Orff-Schulwerk praegte Musikunterricht weltweit - Bewegung, Sprache und Perkussion als Basis.`,vf={class:"app"},bf={class:"topbar"},yf={class:"language-switcher"},wf={class:"visually-hidden",for:"language-select"},kf=["aria-label"],_f=["value"],Sf={class:"menu-nav"},Tf={class:"content"},Cf={key:0},Ef={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},zf={class:"filter-dock__header"},Lf=["aria-pressed","aria-label"],Mf=["src"],xf={key:0,class:"filter-dock__body"},Af={class:"filter-dock__body-inner"},Pf={class:"nav-controls",role:"group","aria-label":"Timeline navigation and zoom"},Rf=["disabled"],If=["disabled"],Ff=["disabled"],Of=["disabled"],Hf={class:"filter-panel",role:"group","aria-label":"Composer filters"},Df={class:"filter-panel__options"},Nf=["onUpdate:modelValue","aria-label"],Wf={class:"filter-panel__label"},Bf={class:"composer-modal__content"},Kf={class:"composer-modal__header"},Gf={class:"composer-modal__titles"},jf={class:"composer-modal__name"},Vf={key:0,class:"composer-modal__dates"},$f={class:"composer-modal__header-actions"},qf=["aria-label"],Uf={key:0,class:"composer-modal__share-feedback"},Jf={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},Xf=["disabled"],Yf={class:"composer-modal__position"},Qf=["disabled"],Zf={class:"composer-modal__body"},em={key:0,class:"composer-modal__hero"},nm=["src","alt"],tm={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},im=["disabled"],sm={class:"composer-modal__position"},rm=["disabled"],om={class:"composer-modal__hero-meta"},am={class:"composer-modal__name-small"},lm={key:0,class:"composer-modal__dates-small"},cm={class:"composer-modal__playlist"},um={class:"composer-modal__playlist-header"},dm={class:"composer-modal__playlist-title"},hm={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},fm=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],mm={class:"sc-player__status"},pm={class:"sc-player__status-text"},gm={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},vm={class:"composer-modal__description"},bm={key:0,class:"composer-modal__facts-title"},ym={key:1,class:"composer-modal__facts"},wm={class:"composer-modal__fact-text"},km={key:2,class:"composer-modal__muted"},Ot="en",Ho="timeline-language",Do="timeline-language-user-set",No="timeline-filter-groups",Ni="/composer/",Wi=25,Wo=150,Ws=.2,Bo=1.5,_m=.35,Bs=1.45,Ko=.5,Sm=.6,Bi=1,un=12,Ks=35,Gs=8,Tm=320,Cm="(max-width: 720px), (pointer: coarse)",Em=.88,zm=1.12,Ki=6,Lm=520,Mm=2,xm={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About",quiz:"Check your knowledge"},modal:{keyWorks:"Key works to know"},share:{button:"Share",copied:"Link copied"},soundcloud:{loading:"Loading tracks from SoundCloud..."},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended"},apply:"Apply",minimizeControls:"Hide timeline controls",restoreControls:"Show timeline controls"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt",quiz:"Wissen testen"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},share:{button:"Teilen",copied:"Link kopiert"},soundcloud:{loading:"Tracks von SoundCloud werden geladen..."},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden",minimizeControls:"Steuerungselemente ausblenden",restoreControls:"Steuerungselemente anzeigen"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте",quiz:"Проверьте знания"},modal:{keyWorks:"Ключевые произведения"},share:{button:"Поделиться",copied:"Ссылка скопирована"},soundcloud:{loading:"Загружаем треки из SoundCloud..."},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить",minimizeControls:"Скрыть панель управления",restoreControls:"Показать панель управления"}}},t=Object.keys(n),i=ge(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=ge(Ot),a=ge(!1),l=D(()=>!a.value),c=D(()=>n[r.value]||n.en),p=D(()=>t.map(o=>({value:o,label:n[o]?.label||o.toUpperCase()}))),h=D(()=>c.value.appTitle),g=D(()=>c.value.languageLabel||"Language"),C=D(()=>c.value.navigation||n.en.navigation),L=D(()=>c.value.eras||n.en.eras),H=D(()=>c.value.soundcloud||n.en.soundcloud||{}),V=D(()=>H.value.loading||"Loading tracks from SoundCloud..."),ce=D(()=>c.value.composers||{}),F=D(()=>{const o=ce.value.names||{},d={};return Object.entries(o).forEach(([m,y])=>{d[le(m)]=y}),d}),N=D(()=>{const o={};return Object.entries(Lt||{}).forEach(([d,m])=>{const y=le(d),P=m?.[r.value];if(P){o[y]=P;return}r.value==="en"&&m?.en&&(o[y]=m.en)}),o}),ee=D(()=>({...N.value,...F.value})),W=D(()=>c.value.filter||n.en.filter),he=D(()=>({essentials:W.value.groups?.essentials||"Essential Icons",core:W.value.groups?.core||"Core Classics",expanded:W.value.groups?.expanded||"Extended Classics"})),q=D(()=>{const o=ce.value.descriptions||{},d={};return Object.entries(o).forEach(([m,y])=>{d[le(m)]=y}),d}),Q=D(()=>{const o=ce.value.factsTitles||{},d={};return Object.entries(o).forEach(([m,y])=>{d[le(m)]=y}),d}),Z=D(()=>c.value.modal||n.en.modal),B=D(()=>c.value.share||n.en.share),X=ge(!1),$=ge("composers"),x=[43,50,65],se=[30,35,45],ve="".replace(/\/$/,""),R="https://soundcloud.com/dmitry-kotikov/sets/",ae="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",ue=new Set;function Ne(o,d,m){return Number.isNaN(o)?d:Math.min(m,Math.max(d,o))}function de(o){const d=Ne((o-Wi)/(Wo-Wi),0,1),m=Math.pow(d,_m),y=Ws+(Bo-Ws)*m;return Ne(y,Ws,Bo)}function Ee(o){const d=Ne((o-Wi)/(Wo-Wi),0,1),m=Math.pow(d,Sm),y=Bs-(Bs-Ko)*m;return Ne(y,Ko,Bs)}const we=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Claude Debussy","Sergei Rachmaninoff"]},{id:"core",label:"Core Classics",composers:["Johannes Brahms","Giuseppe Verdi","Richard Strauss","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet","Gioachino Rossini","Dmitri Shostakovich","Sergei Prokofiev","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Erik Satie","Joseph Haydn"]},{id:"expanded",label:"Extended Classics",composers:["Jean-Philippe Rameau","Niccolò Paganini","Hector Berlioz","Jacques Offenbach","Alexander Scriabin","George Gershwin","Igor Stravinsky","Jean Sibelius","Carl Orff"]}];function tn(){return we.reduce((o,d)=>(o[d.id]=d.id!=="expanded",o),{})}function be(o){const d=tn();return!o||typeof o!="object"||we.forEach(m=>{const y=o[m.id];typeof y=="boolean"&&(d[m.id]=y)}),d}const We=ge(tn()),sn=D(()=>{const o=c.value.filter||{};return{minimize:o.minimizeControls||"Hide timeline controls",restore:o.restoreControls||"Show timeline controls"}}),Ie=ge(null),Ye=ge(un),Fe=ge(null);let En=0;const _n=ge(!1);let u=null;function f(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia(Cm).matches}const b=ge("bottom-left"),w=Wt({active:!1,pointerId:null,startX:0,startY:0,startLeft:0,startTop:0,element:null}),S=D(()=>{const o={left:`${Ye.value}px`,transition:w.active?"none":"left 360ms cubic-bezier(0.22, 0.61, 0.36, 1)"};return Fe.value!=null&&(o.top=`${Fe.value}px`),o}),k=Wt({active:!1,startDistance:0});function M(o,d){const m=o.clientX-d.clientX,y=o.clientY-d.clientY;return Math.hypot(m,y)}const z=Wt({barHeight:x[Bi],widthScale:de(se[Bi]),fontScale:Ee(x[Bi])}),E=ge(Bi),T=D(()=>E.value<=0),G=D(()=>E.value>=x.length-1),I=ge(!0),K=ge(!1);function Y(o){const d=Ne(o,0,x.length-1);E.value=d;const m=x[d];z.barHeight=m,z.widthScale=de(se[d]),z.fontScale=Ee(m)}function te(o){const d=o>0?1:-1;Y(E.value+d)}function fe(){const o=document.getElementById("timeline");if(!o)return;const d=Math.max(0,o.scrollWidth-o.clientWidth),m=Math.max(0,o.scrollHeight-o.clientHeight);I.value=o.scrollLeft<=Ki&&o.scrollTop<=Ki,K.value=o.scrollLeft>=d-Ki&&o.scrollTop>=m-Ki}async function me(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),fe(),await vn(),Yt()}async function Be(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),fe(),await vn(),_s()}function Ke(o,{left:d,top:m,duration:y=Lm}={}){const P=o.scrollLeft,U=o.scrollTop,re=Number.isFinite(d)?d:P,Ae=Number.isFinite(m)?m:U,Te=re-P,xe=Ae-U;if(!Te&&!xe)return;const ln=performance.now(),He=Ve=>{const bn=Ve-ln,je=Math.min(1,bn/y),$e=je<.5?4*je*je*je:1-Math.pow(-2*je+2,3)/2;o.scrollLeft=P+Te*$e,o.scrollTop=U+xe*$e,je<1&&requestAnimationFrame(He)};requestAnimationFrame(He)}async function rn(){if($.value!=="composers"||!ft.value.length)return;await vn();const o=document.getElementById("timeline");if(!o)return;const d=o.querySelector('.bar[data-lane-index="0"]');if(!d)return;const m=o.getBoundingClientRect(),y=d.getBoundingClientRect();let P=o.scrollLeft,U=o.scrollTop;const re=m.left+Mm,Ae=y.left-re;if(P=Math.max(0,o.scrollLeft+Ae),y.top<m.top||y.bottom>m.bottom){const Te=y.top-m.top;U=Math.max(0,o.scrollTop+Te)}Ke(o,{left:P,top:U}),fe()}async function Ge(){await rn()}const Pn=D(()=>{const o=we.map(m=>m.id).filter(m=>We.value[m]),d=new Set;return o.forEach(m=>{we.find(P=>P.id===m)?.composers?.forEach(P=>d.add(P))}),d}),ft=D(()=>{const o=Pn.value;return o.size?Dn.filter(d=>o.has(d.name)):[]}),Se=D(()=>[...ft.value].sort((o,d)=>o.birth-d.birth).map(o=>({...o,displayName:Jt(o.name)}))),{descriptionsByLocale:on,playlistIdsByKey:zt,namesByLocale:Lt}=ys(gf),Le=ge(null),qt=ge(!1),Mt=ge("");let Wn=null;const Ut=D(()=>Le.value!==null),Pe=D(()=>Le.value===null?null:Se.value[Le.value]),xt=D(()=>Pe.value?Jt(Pe.value.name):""),Si=D(()=>Pe.value?el(Pe.value.name):null),Ti=D(()=>Pe.value?Ei(Pe.value.name):""),Ci=D(()=>Pe.value?ws(Pe.value.name):""),vs=D(()=>Pe.value?ll(Pe.value.name):[]),_=D(()=>vs.value.map(o=>zl(o)).filter(Boolean)),A=D(()=>{const o=_.value.filter(Boolean);return o.length?o:[ae]}),j=D(()=>(Le.value??0)>0),_e=D(()=>Le.value!==null&&Le.value<Se.value.length-1);function le(o){return o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function zn(o){return le(o).replace(/\s+/g,"-")}function Oe(o){const d=zn(o);return`${Ni}${encodeURIComponent(d)}`}function et(o){return o.startsWith(Ni)?o.slice(Ni.length):""}function Qe(o){const d=le(String(o||"").replace(/-/g," ")),m=Dn.find(y=>le(y.name)===d);return m?m.name:""}function an(o){if(!o)return;const d=we.find(m=>m.composers.includes(o));!d||We.value[d.id]||(We.value={...We.value,[d.id]:!0})}async function mt(o=window.location.pathname){qt.value=!0;try{zi(o);const d=et(o);if(!d){Le.value=null;return}const m=decodeURIComponent(d),y=Qe(m);if(!y){Le.value=null;return}an(y),await vn();const P=Se.value.findIndex(U=>U.name===y);Le.value=P>=0?P:null}finally{qt.value=!1}}function bs(o){if(!o||typeof window>"u")return"";const d=Oe(o);return new URL(d,window.location.origin).toString()}async function At(){if(!Pe.value)return;const o=bs(Pe.value.name);if(!o)return;const d=xt.value||Pe.value.name;try{if(navigator.share){await navigator.share({title:d,url:o});return}}catch(m){if(m?.name!=="AbortError")console.warn("Share failed, falling back to clipboard",m);else return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(o);else{const m=document.createElement("textarea");m.value=o,m.setAttribute("readonly","true"),m.style.position="absolute",m.style.left="-9999px",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}Mt.value=B.value.copied||"Link copied",Wn&&clearTimeout(Wn),Wn=setTimeout(()=>{Mt.value="",Wn=null},2200)}catch(m){console.warn("Failed to copy share link",m)}}function Jt(o){const d=le(o);return ee.value[d]||o}function Xt(o){return he.value[o]||o}function ys(o){const d=o.split(`
`),m={},y={},P={};let U=null,re=null,Ae=null,Te="en",xe=[];const ln=()=>{(U||re)&&[U,re].filter(Boolean).forEach(Ve=>{m[Ve]=m[Ve]||{},m[Ve][Te]=xe.join(`
`).trim(),Ae&&(P[Ve]=Ae)}),xe=[],Ae=null,re=null};for(const He of d){const Ve=He.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Ve){ln();const[,je,$e,Rt]=Ve;U=le(Rt||je),re=le(je),Te=($e||"en").toLowerCase(),Ae=Rt||null;continue}const bn=U?He.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(bn){const[,je,$e]=bn,Rt=(je||Te||"en").toLowerCase(),Pi=$e.trim();[U,re].filter(Boolean).forEach(qe=>{y[qe]=y[qe]||{},y[qe][Rt]=Pi});continue}U&&He.startsWith("- ")&&xe.push(He.replace(/^- /,"").trim())}return ln(),{descriptionsByLocale:m,playlistIdsByKey:P,namesByLocale:y}}function Ei(o){const d=rl(o),m=le(o),y=q.value[m];if(y)return y;const P=d[r.value];return P||(d.en?d.en:Object.values(d)[0]||"")}function ws(o){const d=Q.value[le(o)];return d||al(o)}function sl(o,d){const m=le(d);if(o[m])return o[m];const y=m.split(" ").filter(Boolean),P=y[y.length-1];return P&&o[P]?o[P]:""}function rl(o){const d=le(o),m=d.split(" ").filter(Boolean),y=[d],P=m[m.length-1];P&&P!==d&&y.push(P);for(const U of y)if(on[U])return on[U];return{}}function ol(o){return le(o).replace(/\s+/g,"-").replace(/-+/g,"-")}function al(o){const d=s[r.value]||s.en,m=r.value==="ru"?Jt(o):"";if(r.value==="ru"&&m)return`${m} - ${d}`;const y=String(o||"").trim().split(/\s+/).filter(Boolean);if(!y.length)return"";const P=y[y.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(P)&&y.length>=2?y[y.length-2]:P} ${d}`}function ll(o){const d=[],m=ol(o);m&&!d.includes(m)&&d.push(m);const y=sl(zt,o);return y&&!d.includes(y)&&d.push(y),d}function zi(o=window.location.pathname){if(o.startsWith(Ni)){$.value="composers";return}if(o==="/about"){$.value="about";return}if(o==="/quiz"){$.value="quiz";return}$.value="composers"}const zr=()=>mt();function Li(o){window.location.pathname!==o&&(history.pushState({},"",o),zi(o)),X.value=!1}function ks(o){if(o==="about"){Li("/about");return}if(o==="quiz"){Li("/quiz");return}Li("/")}function cl(){X.value=!X.value}function ul(){X.value=!1}function Lr(o){_n.value!==o&&(_n.value=o)}function dl(){Lr(!_n.value)}function Mi(){if(typeof document>"u")return 0;const o=document.querySelector(".topbar");return o&&o.offsetHeight?o.offsetHeight:0}function nt(){if(typeof window>"u")return{width:0,height:0,offsetLeft:0,offsetTop:0};const o=window.visualViewport;return o?{width:o.width,height:o.height,offsetLeft:o.offsetLeft||0,offsetTop:o.offsetTop||0}:{width:window.innerWidth,height:window.innerHeight,offsetLeft:0,offsetTop:0}}function tt(o){const d=Ie.value;if(!d||typeof window>"u")return o;const{width:m,offsetLeft:y}=nt(),P=y+un,U=Math.max(P,y+m-d.offsetWidth-un);return Math.min(Math.max(o,P),U)}function Bn(o){const d=Ie.value;if(!d||typeof window>"u")return o;const{height:m,offsetTop:y}=nt(),P=Math.max(Mi()+un,y+un),U=Math.max(P,y+m-d.offsetHeight-un);return Math.min(Math.max(o,P),U)}function Pt(){const o=Ie.value;if(Fe.value==null&&o&&typeof window<"u"){const{height:d,offsetTop:m}=nt();Fe.value=Bn(m+d-o.offsetHeight-24)}Ye.value=tt(Ye.value),Fe.value!=null&&(Fe.value=Bn(Fe.value))}function _s(){Pt(),b.value="top-right";const d=Ie.value?.offsetWidth||0,{width:m,offsetLeft:y,offsetTop:P}=nt();Ye.value=tt(y+m-d-un);const U=Mi()+Ks+Gs;Fe.value=Bn(P+U)}function Yt(){Pt(),b.value="bottom-left";const d=Ie.value?.offsetHeight||0,{height:m,offsetTop:y}=nt();Ye.value=tt(un),Fe.value=Bn(y+m-d-un)}function Mr(){Pt(),b.value="top-left";const{offsetTop:o}=nt(),d=Mi()+Ks+Gs;Ye.value=tt(un),Fe.value=Bn(o+d)}function xr(){Pt(),b.value="bottom-right";const o=Ie.value,d=o?.offsetWidth||0,m=o?.offsetHeight||0,{width:y,height:P,offsetLeft:U,offsetTop:re}=nt();Ye.value=tt(U+y-d-un),Fe.value=Bn(re+P-m-un)}function hl(){const o=Ie.value;if(!o)return;const{width:d,height:m,offsetLeft:y,offsetTop:P}=nt(),U=Mi()+Ks+Gs,re=tt(un),Ae=tt(y+d-o.offsetWidth-un),Te=Bn(P+U),xe=Bn(P+m-o.offsetHeight-un),ln=Ye.value,He=Fe.value??0,Ve=[{anchor:"top-left",dx:ln-re,dy:He-Te},{anchor:"top-right",dx:ln-Ae,dy:He-Te},{anchor:"bottom-left",dx:ln-re,dy:He-xe},{anchor:"bottom-right",dx:ln-Ae,dy:He-xe}];Ve.sort((je,$e)=>je.dx*je.dx+je.dy*je.dy-($e.dx*$e.dx+$e.dy*$e.dy));const bn=Ve[0]?.anchor;if(bn==="top-left"){Mr();return}if(bn==="top-right"){_s();return}if(bn==="bottom-left"){Yt();return}xr()}function Ar(o){if(!w.active||o.pointerId!==w.pointerId)return;o.preventDefault();const d=o.clientX-w.startX,m=o.clientY-w.startY;Ye.value=tt(w.startLeft+d),Fe.value!=null&&(Fe.value=Bn(w.startTop+m))}function Pr(){window.removeEventListener("pointermove",Ar),window.removeEventListener("pointerup",xi),window.removeEventListener("pointercancel",xi)}function Rr(o){const d=w.element;if(w.active=!1,w.element=null,w.pointerId=null,d?.releasePointerCapture&&o!=null)try{d.releasePointerCapture(o)}catch{}}function xi(o){!w.active||o.pointerId!==w.pointerId||(Pr(),Rr(o.pointerId),hl())}function fl(){w.active&&(Pr(),Rr(w.pointerId))}function ml(o){const d=o.timeStamp||Date.now();d-En<=Tm&&o.preventDefault(),En=d}function pl(o){if(w.active||o.pointerType==="mouse"&&o.button!==0)return;const d=o.target;if(d&&typeof d.closest=="function"&&d.closest("button, a, input, select, textarea, label, [role='button'], .filter-panel"))return;Pt(),b.value="free",o.preventDefault(),w.active=!0,w.pointerId=o.pointerId,w.startX=o.clientX,w.startY=o.clientY,w.startLeft=Ye.value,w.startTop=Fe.value??0,w.element=Ie.value;const y=Ie.value;if(y?.setPointerCapture)try{y.setPointerCapture(o.pointerId)}catch{}window.addEventListener("pointermove",Ar),window.addEventListener("pointerup",xi),window.addEventListener("pointercancel",xi)}function Ir(o){!o||!o.touches||o.touches.length===2&&(k.active=!0,k.startDistance=M(o.touches[0],o.touches[1]))}function Fr(o){if(!k.active||!o||!o.touches||o.touches.length!==2)return;o.preventDefault();const d=M(o.touches[0],o.touches[1]),m=k.startDistance||d,y=m?d/m:1;if(y>=zm){te(1),k.startDistance=d;return}y<=Em&&(te(-1),k.startDistance=d)}function Ai(o){(o?.touches?.length??0)<2&&(k.active=!1,k.startDistance=0)}function Or(){f()&&!_n.value&&Lr(!0)}function Hr(){Yt()}function gl(){Kn()}function Kn(){if(b.value==="top-left"){Mr();return}if(b.value==="top-right"){_s();return}if(b.value==="bottom-right"){xr();return}if(b.value==="bottom-left"){Yt();return}Pt()}function Qt(o,{persist:d=!1}={}){const m=t.includes(o)?o:Ot;if(r.value=m,d)try{localStorage.setItem(Ho,m),localStorage.setItem(Do,"1")}catch{}}function vl(o){i.value=!0,Qt(o,{persist:!0})}function bl(o){const d=o?.target?.value;d&&vl(d)}function yl(){try{return localStorage.getItem(Ho)}catch{return null}}function wl(){try{const o=localStorage.getItem(No);return o?be(JSON.parse(o)):null}catch{return null}}function kl(){const o=wl();o&&(We.value=o)}function _l(){try{return localStorage.getItem(Do)==="1"}catch{return!1}}function Sl(){const o=yl(),d=_l();if(Qt(Ot),o&&d&&t.includes(o)){i.value=!0,Qt(o);return}Tl()}async function Tl(){const o=!i.value;o||(r.value,void 0);const d=[Cl,El];for(const m of d){const y=await m();if(y){const P=String(y).toUpperCase();if(!o)return;const U=P==="RU"?"ru":["DE","AT","CH"].includes(P)?"de":Ot;Qt(U);return}}o&&Qt(Ot)}async function Cl(){try{const o=await fetch("https://ipapi.co/json/");return o.ok&&(await o.json())?.country_code||null}catch(o){console.warn("ipapi lookup failed:",o)}return null}async function El(){try{const o=await fetch("https://ipwho.is/");return o.ok&&(await o.json())?.country_code||null}catch(o){console.warn("ipwho.is lookup failed:",o)}return null}function Pm(o,d){}function Dr(){Li("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function Ss(o){const d=o.detail,m=d?.laneIndex;if(Number.isInteger(m)&&Se.value[m]){Le.value=m;return}const y=d?.composer?.name;if(!y)return;const P=Se.value.findIndex(U=>U.name===y);P>=0&&(Le.value=P)}function Nr(){Le.value=null}function Wr(){!j.value||Le.value===null||(Le.value-=1)}function Br(){!_e.value||Le.value===null||(Le.value+=1)}hs(async()=>{Sl(),kl(),await mt(),await vn(),Yt(),typeof ResizeObserver<"u"&&(u=new ResizeObserver(gl),Ie.value&&u.observe(Ie.value)),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(Ss),window.addEventListener("popstate",zr),window.addEventListener("composer-select",Ss),window.addEventListener("resize",Kn),window.visualViewport&&(window.visualViewport.addEventListener("resize",Kn),window.visualViewport.addEventListener("scroll",Kn)),Kn();const o=document.getElementById("timeline");o&&(o.addEventListener("scroll",fe,{passive:!0}),o.addEventListener("timeline-pan-start",Or),o.addEventListener("touchstart",Ir,{passive:!0}),o.addEventListener("touchmove",Fr,{passive:!1}),o.addEventListener("touchend",Ai,{passive:!0}),o.addEventListener("touchcancel",Ai,{passive:!0}),fe())}),ki(()=>{window.removeEventListener("popstate",zr),window.removeEventListener("composer-select",Ss),window.removeEventListener("resize",Kn),window.visualViewport&&(window.visualViewport.removeEventListener("resize",Kn),window.visualViewport.removeEventListener("scroll",Kn)),u&&(u.disconnect(),u=null),fl(),Wn&&(clearTimeout(Wn),Wn=null);const o=document.getElementById("timeline");o&&(o.removeEventListener("scroll",fe),o.removeEventListener("timeline-pan-start",Or),o.removeEventListener("touchstart",Ir),o.removeEventListener("touchmove",Fr),o.removeEventListener("touchend",Ai),o.removeEventListener("touchcancel",Ai))}),Ue(h,o=>{o&&(document.title=o)},{immediate:!0}),Ue(We,o=>{try{localStorage.setItem(No,JSON.stringify(o))}catch{}},{deep:!0}),Ue(r,async o=>{const d=t.includes(o)?o:Ot;if(d!==o){r.value=d;return}try{document.documentElement.setAttribute("data-lang",d)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(L.value),await vn(),Kn()}),Ue(Ut,async o=>{o?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await vn(),A.value.length&&Gr()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",Kr())}),Ue(Le,o=>{const d=window.timeline;!d||typeof d.setSelectedLane!="function"||(Number.isInteger(o)?d.setSelectedLane(o):d.setSelectedLane(null))}),Ue(Le,o=>{if(qt.value)return;if(Number.isInteger(o)&&Se.value[o]){const m=Se.value[o].name,y=Oe(m);window.location.pathname!==y&&(history.pushState({},"",y),zi(y));return}const d=$.value==="about"?"/about":$.value==="quiz"?"/quiz":"/";window.location.pathname!==d&&(history.replaceState({},"",d),zi(d))}),Ue(A,async o=>{Ut.value&&(Kr(),await vn(),o.length&&Gr())}),Ue(()=>Se.value.map(o=>o.name),o=>{if(Le.value===null)return;const d=Pe.value;if(!d){Le.value=null;return}const m=o.findIndex(y=>y===d.name);m===-1?Le.value=null:Le.value=m});function Ts(o){return o?ve?ve.endsWith("/")&&o.startsWith("/")?ve+o.slice(1):!ve.endsWith("/")&&!o.startsWith("/")?`${ve}/${o}`:ve+o:o:ve}function zl(o){if(!o)return"";const d=R;if(!d)return"";const m=d.endsWith("/");return`${d}${m?"":"/"}${o}`}function Kr(){ue.forEach(o=>{try{o.pause(),o.currentTime=0}catch(d){console.error("Failed to stop SoundCloud audio",d)}}),ue.clear()}function Gr(o,d=document){const y=(d||document).querySelectorAll("[data-soundcloud-playlist]");y.length&&(y.length,y.forEach(P=>{Ll(P,()=>{})}))}async function Ll(o,d){const m=()=>{typeof d=="function"&&setTimeout(()=>d(),0)};if(!o||o.dataset.soundcloudReady==="true"||o.dataset.soundcloudReady==="loading"||o.dataset.soundcloudReady==="error"){m();return}const y=o.getAttribute("data-soundcloud-playlist"),P=o.getAttribute("data-soundcloud-playlist-alt")||"",U=[y,...P.split("|")].map(Te=>(Te||"").trim()).filter(Boolean);if(!U.length){m();return}o.dataset.soundcloudReady="loading",o.innerHTML=Ml();let re=null;for(const Te of U)try{const xe=await Al(Te),ln=Array.isArray(xe.tracks)&&xe.tracks.length?xe.tracks:xe&&xe.kind==="track"?[xe]:[],He=Pl(ln);Fl(o,He,Te),m();return}catch(xe){if(re=xe,xe&&xe.status===429){jr(o,Te),m();return}}console.error("Failed to build SoundCloud player",re);const Ae=U[0]||ae;jr(o,Ae),m()}function Ml(){return`
    <div class="sc-player__status">
      <span class="sc-player__spinner" aria-hidden="true"></span>
      <span class="sc-player__status-text">${V.value}</span>
    </div>
  `.trim()}async function xl(o){if(!o)throw new Error("No track provided");const d=o.media&&Array.isArray(o.media.transcodings)?o.media.transcodings:[];if(d.length){let m=d.find(y=>y&&y.format&&y.format.protocol==="progressive");if(m||(m=d[0]),m&&m.url)try{const y=await Rl(m.url,o.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:o.id,transcodingUrl:m.url,finalUrl:y}),y}catch(y){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",y)}}if(!o.id)throw new Error("No track id provided");return Il(o.id,o.track_authorization)}async function Al(o){const d=Ts("/api/soundcloud/playlist")+`?url=${encodeURIComponent(o)}`,m=await fetch(d);if(!m.ok){const y=new Error(`SoundCloud playlist error: ${m.status}`);throw y.status=m.status,y.retryAfter=Number(m.headers?.get("Retry-After"))||void 0,y}return m.json()}function Pl(o=[]){return Array.isArray(o)?o.map((d,m)=>{if(!d)return null;const y=`Track ${m+1}`,U=[d.title,d.publisher_metadata?.release_title,d.permalink,d.permalink_url,d.id?String(d.id):null].map(re=>typeof re=="string"?re.trim():"").filter(Boolean)[0]||y;return{...d,title:U}}).filter(Boolean):[]}async function Rl(o,d){const m=new URLSearchParams;m.set("url",o),d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const y=Ts("/api/soundcloud/transcoding")+`?${m.toString()}`,P=await fetch(y);if(!P.ok){const re=new Error(`SoundCloud transcoding error: ${P.status}`);throw re.status=P.status,re.retryAfter=Number(P.headers?.get("Retry-After"))||void 0,re}const U=await P.json();if(!U?.url)throw new Error("Transcoding response missing url");return U.url}async function Il(o,d){const m=new URLSearchParams;d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const y=m.toString(),P=Ts(`/api/soundcloud/streams/${o}`)+(y?`?${y}`:""),U=await fetch(P);if(!U.ok){const Ae=new Error(`SoundCloud stream error: ${U.status}`);throw Ae.status=U.status,Ae.retryAfter=Number(U.headers?.get("Retry-After"))||void 0,Ae}const re=await U.json();if(!re?.url)throw new Error("Stream response missing url");return re.url}function jr(o,d){const m=`https://w.soundcloud.com/player/?url=${encodeURIComponent(d)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;o.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${m}"
    ></iframe>
  `,o.dataset.soundcloudReady="true"}function Fl(o,d,m){if(!Array.isArray(d)||!d.length){o.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',o.dataset.soundcloudReady="error";return}o.classList.add("sc-player");const y=document.createElement("div");y.className="sc-track-list";const P=document.createElement("audio");P.preload="none",ue.add(P);let U=null,re=null,Ae=null,Te=null,xe=!1;const ln=[],He=[],Ve=(pe,qe)=>{pe.dataset.state=qe,pe.textContent=qe==="playing"?"⏸":qe==="loading"?"...":"▶️"},bn=(pe,qe)=>{pe&&pe.classList.toggle("is-playing",qe)},je=pe=>{if(!pe)return;const qe=pe.querySelector(".sc-track__title-text");if(!qe)return;const Ln=qe.scrollWidth-pe.clientWidth;Ln>4?(pe.dataset.scroll="true",pe.style.setProperty("--scroll-distance",`${Ln}px`)):(pe.dataset.scroll="false",pe.style.removeProperty("--scroll-distance"))},$e=pe=>Ve(pe,"idle"),Rt=()=>{re&&$e(re),Te&&bn(Te,!1),U=null,re=null,Ae=null,Te=null};P.addEventListener("ended",()=>{const pe=Ae===null?-1:Ae+1;if(pe>=0&&pe<d.length){Pi(pe,{auto:!0});return}Rt()}),P.addEventListener("pause",()=>{re&&P.currentTime<(P.duration||1/0)&&$e(re),Te&&bn(Te,!1)});const Pi=async(pe,{auto:qe=!1}={})=>{if(xe)return;const Ln=d[pe],cn=ln[pe];if(!(!Ln||!cn)){if(!qe&&Ae===pe&&!P.paused){P.pause(),$e(cn);return}xe=!0,Ve(cn,"loading");try{const Gn=await xl(Ln);if(!Gn)throw new Error("No stream URL returned");P.src=Gn,await P.play(),Ol(Ln),re&&re!==cn&&$e(re),re=cn,U=Ln?.id??pe,Ae=pe,Te&&Te!==He[pe]&&bn(Te,!1),Te=He[pe]||null,bn(Te,!0),Ve(cn,"playing")}catch(Gn){console.error("Failed to play SoundCloud track",Gn),$e(cn),o.dataset.soundcloudReady="error"}finally{xe=!1}}};d.forEach((pe,qe)=>{const Ln=document.createElement("div");Ln.className="sc-track";const cn=document.createElement("button");cn.type="button",cn.className="sc-track__button",cn.setAttribute("aria-label","Play track"),Ve(cn,"idle"),ln.push(cn);const Gn=document.createElement("div");Gn.className="sc-track__title";const Cs=document.createElement("span");Cs.className="sc-track__title-text",Cs.textContent=pe?.title||`Track ${qe+1}`,Gn.append(Cs),He.push(Gn),Ln.append(cn,Gn),y.append(Ln),cn.addEventListener("click",()=>{Pi(qe)})}),o.innerHTML="",o.append(y,P),requestAnimationFrame(()=>{He.forEach(pe=>je(pe))}),o.dataset.soundcloudReady="true"}function Ol(o){if(!("mediaSession"in navigator)||typeof MediaMetadata>"u")return;const d=o?.title||"Classical Music",m=o?.publisher_metadata?.artist||o?.user?.username||o?.user?.full_name||"",y=o?.publisher_metadata?.album_title||"";navigator.mediaSession.metadata=new MediaMetadata({title:d,artist:m,album:y,artwork:[{src:"/images/about_music_logo.png",type:"image/png"}]})}return(o,d)=>(ie(),oe("div",vf,[v("header",bf,[v("button",{class:"menu-button",onClick:cl,"aria-label":"Toggle navigation menu"},[...d[7]||(d[7]=[v("span",{class:"menu-icon"},null,-1)])]),v("img",{class:"logo",src:fd,alt:"Logo",onClick:Dr}),v("div",{class:"app-title",role:"button",onClick:Dr},O(h.value),1),v("div",yf,[v("label",wf,O(g.value),1),Xs(v("select",{id:"language-select",class:"language-select","onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m),"aria-label":g.value,onChange:bl},[(ie(!0),oe(en,null,Kt(p.value,m=>(ie(),oe("option",{key:m.value,value:m.value},O(m.label),9,_f))),128))],40,kf),[[sd,r.value]])])]),v("aside",{class:wn(["side-menu",{"side-menu--open":X.value}])},[v("nav",Sf,[v("button",{class:wn(["menu-item",{"menu-item--active":$.value==="composers"}]),onClick:d[1]||(d[1]=m=>ks("composers"))},O(C.value.composers),3),v("button",{class:wn(["menu-item",{"menu-item--active":$.value==="quiz"}]),onClick:d[2]||(d[2]=m=>ks("quiz"))},O(C.value.quiz),3),v("button",{class:wn(["menu-item",{"menu-item--active":$.value==="about"}]),onClick:d[3]||(d[3]=m=>ks("about"))},O(C.value.about),3)])],2),X.value?(ie(),oe("div",{key:0,class:"backdrop",onClick:ul})):hn("",!0),v("main",Tf,[$.value==="composers"?(ie(),oe("section",Cf,[v("div",{class:"filter-dock",style:St(S.value),ref_key:"filterDockRef",ref:Ie,onPointerdown:pl,onTouchend:ml},[v("div",Ef,[v("div",zf,[v("button",{type:"button",class:"filter-dock__collapse control-btn","aria-pressed":_n.value,"aria-label":_n.value?sn.value.restore:sn.value.minimize,onClick:dl},[v("img",{src:_n.value?"/images/window-maximize.svg":"/images/window-minimize.svg",alt:"","aria-hidden":"true"},null,8,Mf)],8,Lf)]),nn(uo,{name:"filter-dock-collapse",onAfterEnter:Hr,onAfterLeave:Hr},{default:Js(()=>[_n.value?hn("",!0):(ie(),oe("div",xf,[v("div",Af,[v("div",Pf,[v("button",{type:"button",class:"control-btn",disabled:I.value,onClick:me,"aria-label":"Jump to start of timeline"}," ⇤ ",8,Rf),v("button",{type:"button",class:"control-btn",disabled:T.value,onClick:d[4]||(d[4]=m=>te(-1)),"aria-label":"Make timeline blocks smaller"},[...d[8]||(d[8]=[v("img",{class:"control-icon",src:md,alt:"","aria-hidden":"true"},null,-1)])],8,If),v("button",{type:"button",class:"control-btn",disabled:G.value,onClick:d[5]||(d[5]=m=>te(1)),"aria-label":"Make timeline blocks larger"},[...d[9]||(d[9]=[v("img",{class:"control-icon",src:pd,alt:"","aria-hidden":"true"},null,-1)])],8,Ff),v("button",{type:"button",class:"control-btn",disabled:K.value,onClick:Be,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Of)]),v("div",Hf,[v("div",Df,[(ie(),oe(en,null,Kt(we,m=>v("label",{key:m.id,class:"filter-panel__item"},[Xs(v("input",{"onUpdate:modelValue":y=>We.value[m.id]=y,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${Xt(m.id)}`,onChange:Ge},null,40,Nf),[[Qa,We.value[m.id]]]),v("span",Wf,O(Xt(m.id)),1)])),64))])])])]))]),_:1})])],36),nn(Hd,{composers:Se.value,settings:z,"era-labels":L.value},null,8,["composers","settings","era-labels"])])):$.value==="about"?(ie(),tr(ih,{key:1,language:r.value,"test-features-enabled":a.value,"onUpdate:testFeaturesEnabled":d[6]||(d[6]=m=>a.value=m)},null,8,["language","test-features-enabled"])):$.value==="quiz"?(ie(),tr(pf,{key:2,language:r.value,"composer-names":ee.value,"era-labels":L.value},null,8,["language","composer-names","era-labels"])):hn("",!0)]),nn(uo,{name:"fade"},{default:Js(()=>[Ut.value?(ie(),oe("div",{key:0,class:"composer-modal",onClick:ad(Nr,["self"])},[v("div",Bf,[v("header",Kf,[v("div",Gf,[v("h2",jf,O(xt.value),1),Pe.value?(ie(),oe("p",Vf,O(Pe.value.birth)+" — "+O(Pe.value.death),1)):hn("",!0)]),v("div",$f,[v("button",{class:"composer-modal__share",type:"button",onClick:At,"aria-label":B.value.button},[...d[10]||(d[10]=[v("img",{class:"composer-modal__share-icon",src:gd,alt:""},null,-1)])],8,qf),Mt.value?(ie(),oe("span",Uf,O(Mt.value),1)):hn("",!0),v("div",Jf,[v("button",{class:"composer-modal__arrow",onClick:Wr,disabled:!j.value,"aria-label":"Previous"}," ← ",8,Xf),v("span",Yf,O((Le.value??0)+1)+" / "+O(Se.value.length),1),v("button",{class:"composer-modal__arrow",onClick:Br,disabled:!_e.value,"aria-label":"Next"}," → ",8,Qf)]),v("button",{class:"composer-modal__close",onClick:Nr,"aria-label":"Close composer details"},"×")])]),v("div",Zf,[Si.value?(ie(),oe("div",em,[v("img",{class:"composer-modal__photo",src:Si.value,alt:xt.value},null,8,nm),v("div",tm,[v("button",{class:"composer-modal__arrow",onClick:Wr,disabled:!j.value,"aria-label":"Previous"}," ← ",8,im),v("span",sm,O((Le.value??0)+1)+" / "+O(Se.value.length),1),v("button",{class:"composer-modal__arrow",onClick:Br,disabled:!_e.value,"aria-label":"Next"}," → ",8,rm)]),v("div",om,[v("div",am,O(xt.value),1),Pe.value?(ie(),oe("div",lm,O(Pe.value.birth)+" — "+O(Pe.value.death),1)):hn("",!0)])])):hn("",!0),v("div",cm,[v("div",um,[v("div",dm,O(Z.value.keyWorks),1),A.value.length?(ie(),oe("a",hm,[...d[11]||(d[11]=[v("img",{class:"sc-powered__img",src:vd,alt:"Powered by SoundCloud"},null,-1)])])):hn("",!0)]),A.value.length?(ie(),oe("div",{key:A.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":A.value[0],"data-soundcloud-playlist-alt":A.value.slice(1).join("|")},[v("div",mm,[d[12]||(d[12]=v("span",{class:"sc-player__spinner","aria-hidden":"true"},null,-1)),v("span",pm,O(V.value),1)])],8,fm)):(ie(),oe("div",gm," Playlist will appear here soon. "))]),v("div",vm,[Ci.value?(ie(),oe("div",bm,O(Ci.value),1)):hn("",!0),Ti.value?(ie(),oe("ul",ym,[(ie(!0),oe(en,null,Kt(Ti.value.split(`
`),(m,y)=>(ie(),oe("li",{key:y},[v("span",wm,O(m),1)]))),128))])):(ie(),oe("p",km,"No description yet."))])])])])):hn("",!0)]),_:1})]))}},Am=gs(xm,[["__scopeId","data-v-b8de2eef"]]);ud(Am).mount("#app");
