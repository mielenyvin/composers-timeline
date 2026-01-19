(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Xs(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Ce={},It=[],An=()=>{},Io=()=>!1,Ji=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ys=e=>e.startsWith("onUpdate:"),Ge=Object.assign,Qs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Hl=Object.prototype.hasOwnProperty,ve=(e,n)=>Hl.call(e,n),U=Array.isArray,Ft=e=>hi(e)==="[object Map]",Kt=e=>hi(e)==="[object Set]",Or=e=>hi(e)==="[object Date]",te=e=>typeof e=="function",Pe=e=>typeof e=="string",Rn=e=>typeof e=="symbol",ke=e=>e!==null&&typeof e=="object",Fo=e=>(ke(e)||te(e))&&te(e.then)&&te(e.catch),Oo=Object.prototype.toString,hi=e=>Oo.call(e),Dl=e=>hi(e).slice(8,-1),Ho=e=>hi(e)==="[object Object]",Zs=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yt=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xi=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Nl=/-\w/g,at=Xi(e=>e.replace(Nl,n=>n.slice(1).toUpperCase())),Wl=/\B([A-Z])/g,St=Xi(e=>e.replace(Wl,"-$1").toLowerCase()),Do=Xi(e=>e.charAt(0).toUpperCase()+e.slice(1)),ms=Xi(e=>e?`on${Do(e)}`:""),ot=(e,n)=>!Object.is(e,n),Ri=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},No=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},Wo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Bl=e=>{const n=Pe(e)?Number(e):NaN;return isNaN(n)?e:n};let Hr;const Yi=()=>Hr||(Hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wt(e){if(U(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=Pe(i)?jl(i):wt(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(Pe(e)||ke(e))return e}const Kl=/;(?![^(]*\))/g,Gl=/:([^]+)/,Vl=/\/\*[^]*?\*\//g;function jl(e){const n={};return e.replace(Vl,"").split(Kl).forEach(t=>{if(t){const i=t.split(Gl);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function hn(e){let n="";if(Pe(e))n=e;else if(U(e))for(let t=0;t<e.length;t++){const i=hn(e[t]);i&&(n+=i+" ")}else if(ke(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const $l="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ql=Xs($l);function Bo(e){return!!e||e===""}function Ul(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=fi(e[i],n[i]);return t}function fi(e,n){if(e===n)return!0;let t=Or(e),i=Or(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=Rn(e),i=Rn(n),t||i)return e===n;if(t=U(e),i=U(n),t||i)return t&&i?Ul(e,n):!1;if(t=ke(e),i=ke(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const a in e){const l=e.hasOwnProperty(a),c=n.hasOwnProperty(a);if(l&&!c||!l&&c||!fi(e[a],n[a]))return!1}}return String(e)===String(n)}function er(e,n){return e.findIndex(t=>fi(t,n))}const Ko=e=>!!(e&&e.__v_isRef===!0),I=e=>Pe(e)?e:e==null?"":U(e)||ke(e)&&(e.toString===Oo||!te(e.toString))?Ko(e)?I(e.value):JSON.stringify(e,Go,2):String(e),Go=(e,n)=>Ko(n)?Go(e,n.value):Ft(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[ps(i,r)+" =>"]=s,t),{})}:Kt(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>ps(t))}:Rn(n)?ps(n):ke(n)&&!U(n)&&!Ho(n)?String(n):n,ps=(e,n="")=>{var t;return Rn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let cn;class Jl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=cn,!n&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=cn;try{return cn=this,n()}finally{cn=t}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){this._on>0&&--this._on===0&&(cn=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Xl(){return cn}let Ee;const gs=new WeakSet;class Vo{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gs.has(this)&&(gs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$o(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Dr(this),qo(this);const n=Ee,t=Sn;Ee=this,Sn=!0;try{return this.fn()}finally{Uo(this),Ee=n,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)ir(n);this.deps=this.depsTail=void 0,Dr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ps(this)&&this.run()}get dirty(){return Ps(this)}}let jo=0,Qt,Zt;function $o(e,n=!1){if(e.flags|=8,n){e.next=Zt,Zt=e;return}e.next=Qt,Qt=e}function nr(){jo++}function tr(){if(--jo>0)return;if(Zt){let n=Zt;for(Zt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Qt;){let n=Qt;for(Qt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function qo(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Uo(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ir(i),Yl(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function Ps(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Jo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Jo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===si)||(e.globalVersion=si,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ps(e))))return;e.flags|=2;const n=e.dep,t=Ee,i=Sn;Ee=e,Sn=!0;try{qo(e);const s=e.fn(e._value);(n.version===0||ot(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{Ee=t,Sn=i,Uo(e),e.flags&=-3}}function ir(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ir(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Yl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Sn=!0;const Xo=[];function qn(){Xo.push(Sn),Sn=!1}function Un(){const e=Xo.pop();Sn=e===void 0?!0:e}function Dr(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=Ee;Ee=void 0;try{n()}finally{Ee=t}}}let si=0;class Ql{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class sr{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Ee||!Sn||Ee===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ee)t=this.activeLink=new Ql(Ee,this),Ee.deps?(t.prevDep=Ee.depsTail,Ee.depsTail.nextDep=t,Ee.depsTail=t):Ee.deps=Ee.depsTail=t,Yo(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ee.depsTail,t.nextDep=void 0,Ee.depsTail.nextDep=t,Ee.depsTail=t,Ee.deps===t&&(Ee.deps=i)}return t}trigger(n){this.version++,si++,this.notify(n)}notify(n){nr();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{tr()}}}function Yo(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)Yo(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Rs=new WeakMap,kt=Symbol(""),Is=Symbol(""),ri=Symbol("");function je(e,n,t){if(Sn&&Ee){let i=Rs.get(e);i||Rs.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new sr),s.map=i,s.key=t),s.track()}}function jn(e,n,t,i,s,r){const a=Rs.get(e);if(!a){si++;return}const l=c=>{c&&c.trigger()};if(nr(),n==="clear")a.forEach(l);else{const c=U(e),p=c&&Zs(t);if(c&&t==="length"){const h=Number(i);a.forEach((g,E)=>{(E==="length"||E===ri||!Rn(E)&&E>=h)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),p&&l(a.get(ri)),n){case"add":c?p&&l(a.get("length")):(l(a.get(kt)),Ft(e)&&l(a.get(Is)));break;case"delete":c||(l(a.get(kt)),Ft(e)&&l(a.get(Is)));break;case"set":Ft(e)&&l(a.get(kt));break}}tr()}function xt(e){const n=ge(e);return n===e?n:(je(n,"iterate",ri),gn(e)?n:n.map(Cn))}function Qi(e){return je(e=ge(e),"iterate",ri),e}function et(e,n){return Jn(e)?_t(e)?Bt(Cn(n)):Bt(n):Cn(n)}const Zl={__proto__:null,[Symbol.iterator](){return vs(this,Symbol.iterator,e=>et(this,e))},concat(...e){return xt(this).concat(...e.map(n=>U(n)?xt(n):n))},entries(){return vs(this,"entries",e=>(e[1]=et(this,e[1]),e))},every(e,n){return Bn(this,"every",e,n,void 0,arguments)},filter(e,n){return Bn(this,"filter",e,n,t=>t.map(i=>et(this,i)),arguments)},find(e,n){return Bn(this,"find",e,n,t=>et(this,t),arguments)},findIndex(e,n){return Bn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Bn(this,"findLast",e,n,t=>et(this,t),arguments)},findLastIndex(e,n){return Bn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Bn(this,"forEach",e,n,void 0,arguments)},includes(...e){return bs(this,"includes",e)},indexOf(...e){return bs(this,"indexOf",e)},join(e){return xt(this).join(e)},lastIndexOf(...e){return bs(this,"lastIndexOf",e)},map(e,n){return Bn(this,"map",e,n,void 0,arguments)},pop(){return qt(this,"pop")},push(...e){return qt(this,"push",e)},reduce(e,...n){return Nr(this,"reduce",e,n)},reduceRight(e,...n){return Nr(this,"reduceRight",e,n)},shift(){return qt(this,"shift")},some(e,n){return Bn(this,"some",e,n,void 0,arguments)},splice(...e){return qt(this,"splice",e)},toReversed(){return xt(this).toReversed()},toSorted(e){return xt(this).toSorted(e)},toSpliced(...e){return xt(this).toSpliced(...e)},unshift(...e){return qt(this,"unshift",e)},values(){return vs(this,"values",e=>et(this,e))}};function vs(e,n,t){const i=Qi(e),s=i[n]();return i!==e&&!gn(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const ec=Array.prototype;function Bn(e,n,t,i,s,r){const a=Qi(e),l=a!==e&&!gn(e),c=a[n];if(c!==ec[n]){const g=c.apply(e,r);return l?Cn(g):g}let p=t;a!==e&&(l?p=function(g,E){return t.call(this,et(e,g),E,e)}:t.length>2&&(p=function(g,E){return t.call(this,g,E,e)}));const h=c.call(a,p,i);return l&&s?s(h):h}function Nr(e,n,t,i){const s=Qi(e);let r=t;return s!==e&&(gn(e)?t.length>3&&(r=function(a,l,c){return t.call(this,a,l,c,e)}):r=function(a,l,c){return t.call(this,a,et(e,l),c,e)}),s[n](r,...i)}function bs(e,n,t){const i=ge(e);je(i,"iterate",ri);const s=i[n](...t);return(s===-1||s===!1)&&ar(t[0])?(t[0]=ge(t[0]),i[n](...t)):s}function qt(e,n,t=[]){qn(),nr();const i=ge(e)[n].apply(e,t);return tr(),Un(),i}const nc=Xs("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rn));function tc(e){Rn(e)||(e=String(e));const n=ge(this);return je(n,"has",e),n.hasOwnProperty(e)}class Zo{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?hc:ia:r?ta:na).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const a=U(n);if(!s){let c;if(a&&(c=Zl[t]))return c;if(t==="hasOwnProperty")return tc}const l=Reflect.get(n,t,Ue(n)?n:i);if((Rn(t)?Qo.has(t):nc(t))||(s||je(n,"get",t),r))return l;if(Ue(l)){const c=a&&Zs(t)?l:l.value;return s&&ke(c)?Os(c):c}return ke(l)?s?Os(l):Ot(l):l}}class ea extends Zo{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const a=U(n)&&Zs(t);if(!this._isShallow){const p=Jn(r);if(!gn(i)&&!Jn(i)&&(r=ge(r),i=ge(i)),!a&&Ue(r)&&!Ue(i))return p||(r.value=i),!0}const l=a?Number(t)<n.length:ve(n,t),c=Reflect.set(n,t,i,Ue(n)?n:s);return n===ge(s)&&(l?ot(i,r)&&jn(n,"set",t,i):jn(n,"add",t,i)),c}deleteProperty(n,t){const i=ve(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&jn(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!Rn(t)||!Qo.has(t))&&je(n,"has",t),i}ownKeys(n){return je(n,"iterate",U(n)?"length":kt),Reflect.ownKeys(n)}}class ic extends Zo{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const sc=new ea,rc=new ic,oc=new ea(!0);const Fs=e=>e,Si=e=>Reflect.getPrototypeOf(e);function ac(e,n,t){return function(...i){const s=this.__v_raw,r=ge(s),a=Ft(r),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=s[e](...i),h=t?Fs:n?Bt:Cn;return!n&&je(r,"iterate",c?Is:kt),{next(){const{value:g,done:E}=p.next();return E?{value:g,done:E}:{value:l?[h(g[0]),h(g[1])]:h(g),done:E}},[Symbol.iterator](){return this}}}}function Ci(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function lc(e,n){const t={get(s){const r=this.__v_raw,a=ge(r),l=ge(s);e||(ot(s,l)&&je(a,"get",s),je(a,"get",l));const{has:c}=Si(a),p=n?Fs:e?Bt:Cn;if(c.call(a,s))return p(r.get(s));if(c.call(a,l))return p(r.get(l));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!e&&je(ge(s),"iterate",kt),s.size},has(s){const r=this.__v_raw,a=ge(r),l=ge(s);return e||(ot(s,l)&&je(a,"has",s),je(a,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const a=this,l=a.__v_raw,c=ge(l),p=n?Fs:e?Bt:Cn;return!e&&je(c,"iterate",kt),l.forEach((h,g)=>s.call(r,p(h),p(g),a))}};return Ge(t,e?{add:Ci("add"),set:Ci("set"),delete:Ci("delete"),clear:Ci("clear")}:{add(s){!n&&!gn(s)&&!Jn(s)&&(s=ge(s));const r=ge(this);return Si(r).has.call(r,s)||(r.add(s),jn(r,"add",s,s)),this},set(s,r){!n&&!gn(r)&&!Jn(r)&&(r=ge(r));const a=ge(this),{has:l,get:c}=Si(a);let p=l.call(a,s);p||(s=ge(s),p=l.call(a,s));const h=c.call(a,s);return a.set(s,r),p?ot(r,h)&&jn(a,"set",s,r):jn(a,"add",s,r),this},delete(s){const r=ge(this),{has:a,get:l}=Si(r);let c=a.call(r,s);c||(s=ge(s),c=a.call(r,s)),l&&l.call(r,s);const p=r.delete(s);return c&&jn(r,"delete",s,void 0),p},clear(){const s=ge(this),r=s.size!==0,a=s.clear();return r&&jn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ac(s,e,n)}),t}function rr(e,n){const t=lc(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(ve(t,s)&&s in i?t:i,s,r)}const cc={get:rr(!1,!1)},uc={get:rr(!1,!0)},dc={get:rr(!0,!1)};const na=new WeakMap,ta=new WeakMap,ia=new WeakMap,hc=new WeakMap;function fc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mc(e){return e.__v_skip||!Object.isExtensible(e)?0:fc(Dl(e))}function Ot(e){return Jn(e)?e:or(e,!1,sc,cc,na)}function pc(e){return or(e,!1,oc,uc,ta)}function Os(e){return or(e,!0,rc,dc,ia)}function or(e,n,t,i,s){if(!ke(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=mc(e);if(r===0)return e;const a=s.get(e);if(a)return a;const l=new Proxy(e,r===2?i:t);return s.set(e,l),l}function _t(e){return Jn(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Jn(e){return!!(e&&e.__v_isReadonly)}function gn(e){return!!(e&&e.__v_isShallow)}function ar(e){return e?!!e.__v_raw:!1}function ge(e){const n=e&&e.__v_raw;return n?ge(n):e}function gc(e){return!ve(e,"__v_skip")&&Object.isExtensible(e)&&No(e,"__v_skip",!0),e}const Cn=e=>ke(e)?Ot(e):e,Bt=e=>ke(e)?Os(e):e;function Ue(e){return e?e.__v_isRef===!0:!1}function ye(e){return vc(e,!1)}function vc(e,n){return Ue(e)?e:new bc(e,n)}class bc{constructor(n,t){this.dep=new sr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ge(n),this._value=t?n:Cn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||gn(n)||Jn(n);n=i?n:ge(n),ot(n,t)&&(this._rawValue=n,this._value=i?n:Cn(n),this.dep.trigger())}}function yc(e){return Ue(e)?e.value:e}const wc={get:(e,n,t)=>n==="__v_raw"?e:yc(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return Ue(s)&&!Ue(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function sa(e){return _t(e)?e:new Proxy(e,wc)}class kc{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new sr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return $o(this,!0),!0}get value(){const n=this.dep.track();return Jo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function _c(e,n,t=!1){let i,s;return te(e)?i=e:(i=e.get,s=e.set),new kc(i,s,t)}const Ti={},Ni=new WeakMap;let gt;function Sc(e,n=!1,t=gt){if(t){let i=Ni.get(t);i||Ni.set(t,i=[]),i.push(e)}}function Cc(e,n,t=Ce){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:l,call:c}=t,p=F=>s?F:gn(F)||s===!1||s===0?$n(F,1):$n(F);let h,g,E,M,O=!1,V=!1;if(Ue(e)?(g=()=>e.value,O=gn(e)):_t(e)?(g=()=>p(e),O=!0):U(e)?(V=!0,O=e.some(F=>_t(F)||gn(F)),g=()=>e.map(F=>{if(Ue(F))return F.value;if(_t(F))return p(F);if(te(F))return c?c(F,2):F()})):te(e)?n?g=c?()=>c(e,2):e:g=()=>{if(E){qn();try{E()}finally{Un()}}const F=gt;gt=h;try{return c?c(e,3,[M]):e(M)}finally{gt=F}}:g=An,n&&s){const F=g,X=s===!0?1/0:s;g=()=>$n(F(),X)}const ue=Xl(),P=()=>{h.stop(),ue&&ue.active&&Qs(ue.effects,h)};if(r&&n){const F=n;n=(...X)=>{F(...X),P()}}let D=V?new Array(e.length).fill(Ti):Ti;const Z=F=>{if(!(!(h.flags&1)||!h.dirty&&!F))if(n){const X=h.run();if(s||O||(V?X.some((B,j)=>ot(B,D[j])):ot(X,D))){E&&E();const B=gt;gt=h;try{const j=[X,D===Ti?void 0:V&&D[0]===Ti?[]:D,M];D=X,c?c(n,3,j):n(...j)}finally{gt=B}}}else h.run()};return l&&l(Z),h=new Vo(g),h.scheduler=a?()=>a(Z,!1):Z,M=F=>Sc(F,!1,h),E=h.onStop=()=>{const F=Ni.get(h);if(F){if(c)c(F,4);else for(const X of F)X();Ni.delete(h)}},n?i?Z(!0):D=h.run():a?a(Z.bind(null,!0),!0):h.run(),P.pause=h.pause.bind(h),P.resume=h.resume.bind(h),P.stop=P,P}function $n(e,n=1/0,t){if(n<=0||!ke(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ue(e))$n(e.value,n,t);else if(U(e))for(let i=0;i<e.length;i++)$n(e[i],n,t);else if(Kt(e)||Ft(e))e.forEach(i=>{$n(i,n,t)});else if(Ho(e)){for(const i in e)$n(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&$n(e[i],n,t)}return e}function mi(e,n,t,i){try{return i?e(...i):e()}catch(s){Zi(s,n,t)}}function Tn(e,n,t,i){if(te(e)){const s=mi(e,n,t,i);return s&&Fo(s)&&s.catch(r=>{Zi(r,n,t)}),s}if(U(e)){const s=[];for(let r=0;r<e.length;r++)s.push(Tn(e[r],n,t,i));return s}}function Zi(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||Ce;if(n){let l=n.parent;const c=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h){for(let g=0;g<h.length;g++)if(h[g](e,c,p)===!1)return}l=l.parent}if(r){qn(),mi(r,null,10,[e,c,p]),Un();return}}Tc(e,t,s,i,a)}function Tc(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const tn=[];let Ln=-1;const Ht=[];let nt=null,Rt=0;const ra=Promise.resolve();let Wi=null;function _n(e){const n=Wi||ra;return e?n.then(this?e.bind(this):e):n}function Ec(e){let n=Ln+1,t=tn.length;for(;n<t;){const i=n+t>>>1,s=tn[i],r=oi(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function lr(e){if(!(e.flags&1)){const n=oi(e),t=tn[tn.length-1];!t||!(e.flags&2)&&n>=oi(t)?tn.push(e):tn.splice(Ec(n),0,e),e.flags|=1,oa()}}function oa(){Wi||(Wi=ra.then(la))}function zc(e){U(e)?Ht.push(...e):nt&&e.id===-1?nt.splice(Rt+1,0,e):e.flags&1||(Ht.push(e),e.flags|=1),oa()}function Wr(e,n,t=Ln+1){for(;t<tn.length;t++){const i=tn[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;tn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function aa(e){if(Ht.length){const n=[...new Set(Ht)].sort((t,i)=>oi(t)-oi(i));if(Ht.length=0,nt){nt.push(...n);return}for(nt=n,Rt=0;Rt<nt.length;Rt++){const t=nt[Rt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}nt=null,Rt=0}}const oi=e=>e.id==null?e.flags&2?-1:1/0:e.id;function la(e){try{for(Ln=0;Ln<tn.length;Ln++){const n=tn[Ln];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),mi(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Ln<tn.length;Ln++){const n=tn[Ln];n&&(n.flags&=-2)}Ln=-1,tn.length=0,aa(),Wi=null,(tn.length||Ht.length)&&la()}}let pn=null,ca=null;function Bi(e){const n=pn;return pn=e,ca=e&&e.type.__scopeId||null,n}function Hs(e,n=pn,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&Vi(-1);const r=Bi(n);let a;try{a=e(...s)}finally{Bi(r),i._d&&Vi(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ds(e,n){if(pn===null)return e;const t=rs(pn),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,a,l,c=Ce]=n[s];r&&(te(r)&&(r={mounted:r,updated:r}),r.deep&&$n(a),i.push({dir:r,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return e}function ht(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let a=0;a<s.length;a++){const l=s[a];r&&(l.oldValue=r[a].value);let c=l.dir[i];c&&(qn(),Tn(c,t,8,[e.el,l,e,n]),Un())}}const Lc=Symbol("_vte"),ua=e=>e.__isTeleport,Vn=Symbol("_leaveCb"),Ei=Symbol("_enterCb");function Mc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ts(()=>{e.isMounted=!0}),pi(()=>{e.isUnmounting=!0}),e}const mn=[Function,Array],da={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},ha=e=>{const n=e.subTree;return n.component?ha(n.component):n},xc={name:"BaseTransition",props:da,setup(e,{slots:n}){const t=Da(),i=Mc();return()=>{const s=n.default&&pa(n.default(),!0);if(!s||!s.length)return;const r=fa(s),a=ge(e),{mode:l}=a;if(i.isLeaving)return ys(r);const c=Br(r);if(!c)return ys(r);let p=Ns(c,a,i,t,g=>p=g);c.type!==sn&&ai(c,p);let h=t.subTree&&Br(t.subTree);if(h&&h.type!==sn&&!bt(h,c)&&ha(t).type!==sn){let g=Ns(h,a,i,t);if(ai(h,g),l==="out-in"&&c.type!==sn)return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete g.afterLeave,h=void 0},ys(r);l==="in-out"&&c.type!==sn?g.delayLeave=(E,M,O)=>{const V=ma(i,h);V[String(h.key)]=h,E[Vn]=()=>{M(),E[Vn]=void 0,delete p.delayedLeave,h=void 0},p.delayedLeave=()=>{O(),delete p.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function fa(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==sn){n=t;break}}return n}const Ac=xc;function ma(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function Ns(e,n,t,i,s){const{appear:r,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:h,onEnterCancelled:g,onBeforeLeave:E,onLeave:M,onAfterLeave:O,onLeaveCancelled:V,onBeforeAppear:ue,onAppear:P,onAfterAppear:D,onAppearCancelled:Z}=n,F=String(e.key),X=ma(t,e),B=(K,Y)=>{K&&Tn(K,i,9,Y)},j=(K,Y)=>{const Q=Y[1];B(K,Y),U(K)?K.every(k=>k.length<=1)&&Q():K.length<=1&&Q()},ee={mode:a,persisted:l,beforeEnter(K){let Y=c;if(!t.isMounted)if(r)Y=ue||c;else return;K[Vn]&&K[Vn](!0);const Q=X[F];Q&&bt(e,Q)&&Q.el[Vn]&&Q.el[Vn](),B(Y,[K])},enter(K){let Y=p,Q=h,k=g;if(!t.isMounted)if(r)Y=P||p,Q=D||h,k=Z||g;else return;let he=!1;const be=K[Ei]=Ve=>{he||(he=!0,Ve?B(k,[K]):B(Q,[K]),ee.delayedLeave&&ee.delayedLeave(),K[Ei]=void 0)};Y?j(Y,[K,be]):be()},leave(K,Y){const Q=String(e.key);if(K[Ei]&&K[Ei](!0),t.isUnmounting)return Y();B(E,[K]);let k=!1;const he=K[Vn]=be=>{k||(k=!0,Y(),be?B(V,[K]):B(O,[K]),K[Vn]=void 0,X[Q]===e&&delete X[Q])};X[Q]=e,M?j(M,[K,he]):he()},clone(K){const Y=Ns(K,n,t,i,s);return s&&s(Y),Y}};return ee}function ys(e){if(es(e))return e=lt(e),e.children=null,e}function Br(e){if(!es(e))return ua(e.type)&&e.children?fa(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&te(t.default))return t.default()}}function ai(e,n){e.shapeFlag&6&&e.component?(e.transition=n,ai(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function pa(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let a=e[r];const l=t==null?a.key:String(t)+String(a.key!=null?a.key:r);a.type===$e?(a.patchFlag&128&&s++,i=i.concat(pa(a.children,n,l))):(n||a.type!==sn)&&i.push(l!=null?lt(a,{key:l}):a)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ga(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ki=new WeakMap;function ei(e,n,t,i,s=!1){if(U(e)){e.forEach((O,V)=>ei(O,n&&(U(n)?n[V]:n),t,i,s));return}if(ni(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ei(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?rs(i.component):i.el,a=s?null:r,{i:l,r:c}=e,p=n&&n.r,h=l.refs===Ce?l.refs={}:l.refs,g=l.setupState,E=ge(g),M=g===Ce?Io:O=>ve(E,O);if(p!=null&&p!==c){if(Kr(n),Pe(p))h[p]=null,M(p)&&(g[p]=null);else if(Ue(p)){p.value=null;const O=n;O.k&&(h[O.k]=null)}}if(te(c))mi(c,l,12,[a,h]);else{const O=Pe(c),V=Ue(c);if(O||V){const ue=()=>{if(e.f){const P=O?M(c)?g[c]:h[c]:c.value;if(s)U(P)&&Qs(P,r);else if(U(P))P.includes(r)||P.push(r);else if(O)h[c]=[r],M(c)&&(g[c]=h[c]);else{const D=[r];c.value=D,e.k&&(h[e.k]=D)}}else O?(h[c]=a,M(c)&&(g[c]=a)):V&&(c.value=a,e.k&&(h[e.k]=a))};if(a){const P=()=>{ue(),Ki.delete(e)};P.id=-1,Ki.set(e,P),dn(P,t)}else Kr(e),ue()}}}function Kr(e){const n=Ki.get(e);n&&(n.flags|=8,Ki.delete(e))}Yi().requestIdleCallback;Yi().cancelIdleCallback;const ni=e=>!!e.type.__asyncLoader,es=e=>e.type.__isKeepAlive;function Pc(e,n){va(e,"a",n)}function Rc(e,n){va(e,"da",n)}function va(e,n,t=rn){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ns(n,i,t),t){let s=t.parent;for(;s&&s.parent;)es(s.parent.vnode)&&Ic(i,n,t,s),s=s.parent}}function Ic(e,n,t,i){const s=ns(n,e,i,!0);ba(()=>{Qs(i[n],s)},t)}function ns(e,n,t=rn,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...a)=>{qn();const l=gi(t),c=Tn(n,t,e,a);return l(),Un(),c});return i?s.unshift(r):s.push(r),r}}const Xn=e=>(n,t=rn)=>{(!ci||e==="sp")&&ns(e,(...i)=>n(...i),t)},Fc=Xn("bm"),ts=Xn("m"),Oc=Xn("bu"),Hc=Xn("u"),pi=Xn("bum"),ba=Xn("um"),Dc=Xn("sp"),Nc=Xn("rtg"),Wc=Xn("rtc");function Bc(e,n=rn){ns("ec",e,n)}const Kc=Symbol.for("v-ndc");function Dt(e,n,t,i){let s;const r=t,a=U(e);if(a||Pe(e)){const l=a&&_t(e);let c=!1,p=!1;l&&(c=!gn(e),p=Jn(e),e=Qi(e)),s=new Array(e.length);for(let h=0,g=e.length;h<g;h++)s[h]=n(c?p?Bt(Cn(e[h])):Cn(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=n(l+1,l,void 0,r)}else if(ke(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>n(l,c,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const h=l[c];s[c]=n(e[h],h,c,r)}}else s=[];return s}const Ws=e=>e?Na(e)?rs(e):Ws(e.parent):null,ti=Ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ws(e.parent),$root:e=>Ws(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wa(e),$forceUpdate:e=>e.f||(e.f=()=>{lr(e.update)}),$nextTick:e=>e.n||(e.n=_n.bind(e.proxy)),$watch:e=>eu.bind(e)}),ws=(e,n)=>e!==Ce&&!e.__isScriptSetup&&ve(e,n),Gc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:l,appContext:c}=e;if(n[0]!=="$"){const E=a[n];if(E!==void 0)switch(E){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(ws(i,n))return a[n]=1,i[n];if(s!==Ce&&ve(s,n))return a[n]=2,s[n];if(ve(r,n))return a[n]=3,r[n];if(t!==Ce&&ve(t,n))return a[n]=4,t[n];Bs&&(a[n]=0)}}const p=ti[n];let h,g;if(p)return n==="$attrs"&&je(e.attrs,"get",""),p(e);if((h=l.__cssModules)&&(h=h[n]))return h;if(t!==Ce&&ve(t,n))return a[n]=4,t[n];if(g=c.config.globalProperties,ve(g,n))return g[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return ws(s,n)?(s[n]=t,!0):i!==Ce&&ve(i,n)?(i[n]=t,!0):ve(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:a}},l){let c;return!!(t[l]||e!==Ce&&l[0]!=="$"&&ve(e,l)||ws(n,l)||ve(r,l)||ve(i,l)||ve(ti,l)||ve(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ve(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Gr(e){return U(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Bs=!0;function Vc(e){const n=wa(e),t=e.proxy,i=e.ctx;Bs=!1,n.beforeCreate&&Vr(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:l,provide:c,inject:p,created:h,beforeMount:g,mounted:E,beforeUpdate:M,updated:O,activated:V,deactivated:ue,beforeDestroy:P,beforeUnmount:D,destroyed:Z,unmounted:F,render:X,renderTracked:B,renderTriggered:j,errorCaptured:ee,serverPrefetch:K,expose:Y,inheritAttrs:Q,components:k,directives:he,filters:be}=n;if(p&&jc(p,i,null),a)for(const ae in a){const le=a[ae];te(le)&&(i[ae]=le.bind(t))}if(s){const ae=s.call(t,t);ke(ae)&&(e.data=Ot(ae))}if(Bs=!0,r)for(const ae in r){const le=r[ae],Le=te(le)?le.bind(t,t):te(le.get)?le.get.bind(t,t):An,W=!te(le)&&te(le.set)?le.set.bind(t):An,pe=H({get:Le,set:W});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>pe.value,set:fe=>pe.value=fe})}if(l)for(const ae in l)ya(l[ae],i,t,ae);if(c){const ae=te(c)?c.call(t):c;Reflect.ownKeys(ae).forEach(le=>{Yc(le,ae[le])})}h&&Vr(h,e,"c");function _e(ae,le){U(le)?le.forEach(Le=>ae(Le.bind(t))):le&&ae(le.bind(t))}if(_e(Fc,g),_e(ts,E),_e(Oc,M),_e(Hc,O),_e(Pc,V),_e(Rc,ue),_e(Bc,ee),_e(Wc,B),_e(Nc,j),_e(pi,D),_e(ba,F),_e(Dc,K),U(Y))if(Y.length){const ae=e.exposed||(e.exposed={});Y.forEach(le=>{Object.defineProperty(ae,le,{get:()=>t[le],set:Le=>t[le]=Le,enumerable:!0})})}else e.exposed||(e.exposed={});X&&e.render===An&&(e.render=X),Q!=null&&(e.inheritAttrs=Q),k&&(e.components=k),he&&(e.directives=he),K&&ga(e)}function jc(e,n,t=An){U(e)&&(e=Ks(e));for(const i in e){const s=e[i];let r;ke(s)?"default"in s?r=Ii(s.from||i,s.default,!0):r=Ii(s.from||i):r=Ii(s),Ue(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):n[i]=r}}function Vr(e,n,t){Tn(U(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function ya(e,n,t,i){let s=i.includes(".")?Sa(t,i):()=>t[i];if(Pe(e)){const r=n[e];te(r)&&Ke(s,r)}else if(te(e))Ke(s,e.bind(t));else if(ke(e))if(U(e))e.forEach(r=>ya(r,n,t,i));else{const r=te(e.handler)?e.handler.bind(t):n[e.handler];te(r)&&Ke(s,r,e)}}function wa(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(n);let c;return l?c=l:!s.length&&!t&&!i?c=n:(c={},s.length&&s.forEach(p=>Gi(c,p,a,!0)),Gi(c,n,a)),ke(n)&&r.set(n,c),c}function Gi(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&Gi(e,r,t,!0),s&&s.forEach(a=>Gi(e,a,t,!0));for(const a in n)if(!(i&&a==="expose")){const l=$c[a]||t&&t[a];e[a]=l?l(e[a],n[a]):n[a]}return e}const $c={data:jr,props:$r,emits:$r,methods:Jt,computed:Jt,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Jt,directives:Jt,watch:Uc,provide:jr,inject:qc};function jr(e,n){return n?e?function(){return Ge(te(e)?e.call(this,this):e,te(n)?n.call(this,this):n)}:n:e}function qc(e,n){return Jt(Ks(e),Ks(n))}function Ks(e){if(U(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function en(e,n){return e?[...new Set([].concat(e,n))]:n}function Jt(e,n){return e?Ge(Object.create(null),e,n):n}function $r(e,n){return e?U(e)&&U(n)?[...new Set([...e,...n])]:Ge(Object.create(null),Gr(e),Gr(n??{})):n}function Uc(e,n){if(!e)return n;if(!n)return e;const t=Ge(Object.create(null),e);for(const i in n)t[i]=en(e[i],n[i]);return t}function ka(){return{app:null,config:{isNativeTag:Io,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jc=0;function Xc(e,n){return function(i,s=null){te(i)||(i=Ge({},i)),s!=null&&!ke(s)&&(s=null);const r=ka(),a=new WeakSet,l=[];let c=!1;const p=r.app={_uid:Jc++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ru,get config(){return r.config},set config(h){},use(h,...g){return a.has(h)||(h&&te(h.install)?(a.add(h),h.install(p,...g)):te(h)&&(a.add(h),h(p,...g))),p},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),p},component(h,g){return g?(r.components[h]=g,p):r.components[h]},directive(h,g){return g?(r.directives[h]=g,p):r.directives[h]},mount(h,g,E){if(!c){const M=p._ceVNode||qe(i,s);return M.appContext=r,E===!0?E="svg":E===!1&&(E=void 0),e(M,h,E),c=!0,p._container=h,h.__vue_app__=p,rs(M.component)}},onUnmount(h){l.push(h)},unmount(){c&&(Tn(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(h,g){return r.provides[h]=g,p},runWithContext(h){const g=Nt;Nt=p;try{return h()}finally{Nt=g}}};return p}}let Nt=null;function Yc(e,n){if(rn){let t=rn.provides;const i=rn.parent&&rn.parent.provides;i===t&&(t=rn.provides=Object.create(i)),t[e]=n}}function Ii(e,n,t=!1){const i=Da();if(i||Nt){let s=Nt?Nt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&te(n)?n.call(i&&i.proxy):n}}const Qc=Symbol.for("v-scx"),Zc=()=>Ii(Qc);function Ke(e,n,t){return _a(e,n,t)}function _a(e,n,t=Ce){const{immediate:i,deep:s,flush:r,once:a}=t,l=Ge({},t),c=n&&i||!n&&r!=="post";let p;if(ci){if(r==="sync"){const M=Zc();p=M.__watcherHandles||(M.__watcherHandles=[])}else if(!c){const M=()=>{};return M.stop=An,M.resume=An,M.pause=An,M}}const h=rn;l.call=(M,O,V)=>Tn(M,h,O,V);let g=!1;r==="post"?l.scheduler=M=>{dn(M,h&&h.suspense)}:r!=="sync"&&(g=!0,l.scheduler=(M,O)=>{O?M():lr(M)}),l.augmentJob=M=>{n&&(M.flags|=4),g&&(M.flags|=2,h&&(M.id=h.uid,M.i=h))};const E=Cc(e,n,l);return ci&&(p?p.push(E):c&&E()),E}function eu(e,n,t){const i=this.proxy,s=Pe(e)?e.includes(".")?Sa(i,e):()=>i[e]:e.bind(i,i);let r;te(n)?r=n:(r=n.handler,t=n);const a=gi(this),l=_a(s,r.bind(i),t);return a(),l}function Sa(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const nu=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${at(n)}Modifiers`]||e[`${St(n)}Modifiers`];function tu(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||Ce;let s=t;const r=n.startsWith("update:"),a=r&&nu(i,n.slice(7));a&&(a.trim&&(s=t.map(h=>Pe(h)?h.trim():h)),a.number&&(s=t.map(Wo)));let l,c=i[l=ms(n)]||i[l=ms(at(n))];!c&&r&&(c=i[l=ms(St(n))]),c&&Tn(c,e,6,s);const p=i[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Tn(p,e,6,s)}}const iu=new WeakMap;function Ca(e,n,t=!1){const i=t?iu:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let a={},l=!1;if(!te(e)){const c=p=>{const h=Ca(p,n,!0);h&&(l=!0,Ge(a,h))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(ke(e)&&i.set(e,null),null):(U(r)?r.forEach(c=>a[c]=null):Ge(a,r),ke(e)&&i.set(e,a),a)}function is(e,n){return!e||!Ji(n)?!1:(n=n.slice(2).replace(/Once$/,""),ve(e,n[0].toLowerCase()+n.slice(1))||ve(e,St(n))||ve(e,n))}function qr(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:l,emit:c,render:p,renderCache:h,props:g,data:E,setupState:M,ctx:O,inheritAttrs:V}=e,ue=Bi(e);let P,D;try{if(t.shapeFlag&4){const F=s||i,X=F;P=Mn(p.call(X,F,h,g,M,E,O)),D=l}else{const F=n;P=Mn(F.length>1?F(g,{attrs:l,slots:a,emit:c}):F(g,null)),D=n.props?l:su(l)}}catch(F){ii.length=0,Zi(F,e,1),P=qe(sn)}let Z=P;if(D&&V!==!1){const F=Object.keys(D),{shapeFlag:X}=Z;F.length&&X&7&&(r&&F.some(Ys)&&(D=ru(D,r)),Z=lt(Z,D,!1,!0))}return t.dirs&&(Z=lt(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(t.dirs):t.dirs),t.transition&&ai(Z,t.transition),P=Z,Bi(ue),P}const su=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ji(t))&&((n||(n={}))[t]=e[t]);return n},ru=(e,n)=>{const t={};for(const i in e)(!Ys(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function ou(e,n,t){const{props:i,children:s,component:r}=e,{props:a,children:l,patchFlag:c}=n,p=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Ur(i,a,p):!!a;if(c&8){const h=n.dynamicProps;for(let g=0;g<h.length;g++){const E=h[g];if(a[E]!==i[E]&&!is(p,E))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===a?!1:i?a?Ur(i,a,p):!0:!!a;return!1}function Ur(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!is(t,r))return!0}return!1}function au({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const Ta={},Ea=()=>Object.create(Ta),za=e=>Object.getPrototypeOf(e)===Ta;function lu(e,n,t,i=!1){const s={},r=Ea();e.propsDefaults=Object.create(null),La(e,n,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);t?e.props=i?s:pc(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function cu(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,l=ge(s),[c]=e.propsOptions;let p=!1;if((i||a>0)&&!(a&16)){if(a&8){const h=e.vnode.dynamicProps;for(let g=0;g<h.length;g++){let E=h[g];if(is(e.emitsOptions,E))continue;const M=n[E];if(c)if(ve(r,E))M!==r[E]&&(r[E]=M,p=!0);else{const O=at(E);s[O]=Gs(c,l,O,M,e,!1)}else M!==r[E]&&(r[E]=M,p=!0)}}}else{La(e,n,s,r)&&(p=!0);let h;for(const g in l)(!n||!ve(n,g)&&((h=St(g))===g||!ve(n,h)))&&(c?t&&(t[g]!==void 0||t[h]!==void 0)&&(s[g]=Gs(c,l,g,void 0,e,!0)):delete s[g]);if(r!==l)for(const g in r)(!n||!ve(n,g))&&(delete r[g],p=!0)}p&&jn(e.attrs,"set","")}function La(e,n,t,i){const[s,r]=e.propsOptions;let a=!1,l;if(n)for(let c in n){if(Yt(c))continue;const p=n[c];let h;s&&ve(s,h=at(c))?!r||!r.includes(h)?t[h]=p:(l||(l={}))[h]=p:is(e.emitsOptions,c)||(!(c in i)||p!==i[c])&&(i[c]=p,a=!0)}if(r){const c=ge(t),p=l||Ce;for(let h=0;h<r.length;h++){const g=r[h];t[g]=Gs(s,c,g,p[g],e,!ve(p,g))}}return a}function Gs(e,n,t,i,s,r){const a=e[t];if(a!=null){const l=ve(a,"default");if(l&&i===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&te(c)){const{propsDefaults:p}=s;if(t in p)i=p[t];else{const h=gi(s);i=p[t]=c.call(null,n),h()}}else i=c;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!l?i=!1:a[1]&&(i===""||i===St(t))&&(i=!0))}return i}const uu=new WeakMap;function Ma(e,n,t=!1){const i=t?uu:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,a={},l=[];let c=!1;if(!te(e)){const h=g=>{c=!0;const[E,M]=Ma(g,n,!0);Ge(a,E),M&&l.push(...M)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!c)return ke(e)&&i.set(e,It),It;if(U(r))for(let h=0;h<r.length;h++){const g=at(r[h]);Jr(g)&&(a[g]=Ce)}else if(r)for(const h in r){const g=at(h);if(Jr(g)){const E=r[h],M=a[g]=U(E)||te(E)?{type:E}:Ge({},E),O=M.type;let V=!1,ue=!0;if(U(O))for(let P=0;P<O.length;++P){const D=O[P],Z=te(D)&&D.name;if(Z==="Boolean"){V=!0;break}else Z==="String"&&(ue=!1)}else V=te(O)&&O.name==="Boolean";M[0]=V,M[1]=ue,(V||ve(M,"default"))&&l.push(g)}}const p=[a,l];return ke(e)&&i.set(e,p),p}function Jr(e){return e[0]!=="$"&&!Yt(e)}const cr=e=>e==="_"||e==="_ctx"||e==="$stable",ur=e=>U(e)?e.map(Mn):[Mn(e)],du=(e,n,t)=>{if(n._n)return n;const i=Hs((...s)=>ur(n(...s)),t);return i._c=!1,i},xa=(e,n,t)=>{const i=e._ctx;for(const s in e){if(cr(s))continue;const r=e[s];if(te(r))n[s]=du(s,r,i);else if(r!=null){const a=ur(r);n[s]=()=>a}}},Aa=(e,n)=>{const t=ur(n);e.slots.default=()=>t},Pa=(e,n,t)=>{for(const i in n)(t||!cr(i))&&(e[i]=n[i])},hu=(e,n,t)=>{const i=e.slots=Ea();if(e.vnode.shapeFlag&32){const s=n._;s?(Pa(i,n,t),t&&No(i,"_",s,!0)):xa(n,i)}else n&&Aa(e,n)},fu=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,a=Ce;if(i.shapeFlag&32){const l=n._;l?t&&l===1?r=!1:Pa(s,n,t):(r=!n.$stable,xa(n,s)),a=n}else n&&(Aa(e,n),a={default:1});if(r)for(const l in s)!cr(l)&&a[l]==null&&delete s[l]},dn=bu;function mu(e){return pu(e)}function pu(e,n){const t=Yi();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:l,createComment:c,setText:p,setElementText:h,parentNode:g,nextSibling:E,setScopeId:M=An,insertStaticContent:O}=e,V=(u,f,b,_=null,C=null,S=null,x=void 0,L=null,z=!!f.dynamicChildren)=>{if(u===f)return;u&&!bt(u,f)&&(_=Re(u),fe(u,C,S,!0),u=null),f.patchFlag===-2&&(z=!1,f.dynamicChildren=null);const{type:T,ref:$,shapeFlag:R}=f;switch(T){case ss:ue(u,f,b,_);break;case sn:P(u,f,b,_);break;case _s:u==null&&D(f,b,_,x);break;case $e:k(u,f,b,_,C,S,x,L,z);break;default:R&1?X(u,f,b,_,C,S,x,L,z):R&6?he(u,f,b,_,C,S,x,L,z):(R&64||R&128)&&T.process(u,f,b,_,C,S,x,L,z,En)}$!=null&&C?ei($,u&&u.ref,S,f||u,!f):$==null&&u&&u.ref!=null&&ei(u.ref,null,S,u,!0)},ue=(u,f,b,_)=>{if(u==null)i(f.el=l(f.children),b,_);else{const C=f.el=u.el;f.children!==u.children&&p(C,f.children)}},P=(u,f,b,_)=>{u==null?i(f.el=c(f.children||""),b,_):f.el=u.el},D=(u,f,b,_)=>{[u.el,u.anchor]=O(u.children,f,b,_,u.el,u.anchor)},Z=({el:u,anchor:f},b,_)=>{let C;for(;u&&u!==f;)C=E(u),i(u,b,_),u=C;i(f,b,_)},F=({el:u,anchor:f})=>{let b;for(;u&&u!==f;)b=E(u),s(u),u=b;s(f)},X=(u,f,b,_,C,S,x,L,z)=>{if(f.type==="svg"?x="svg":f.type==="math"&&(x="mathml"),u==null)B(f,b,_,C,S,x,L,z);else{const T=u.el&&u.el._isVueCE?u.el:null;try{T&&T._beginPatch(),K(u,f,C,S,x,L,z)}finally{T&&T._endPatch()}}},B=(u,f,b,_,C,S,x,L)=>{let z,T;const{props:$,shapeFlag:R,transition:G,dirs:J}=u;if(z=u.el=a(u.type,S,$&&$.is,$),R&8?h(z,u.children):R&16&&ee(u.children,z,null,_,C,ks(u,S),x,L),J&&ht(u,null,_,"created"),j(z,u,u.scopeId,x,_),$){for(const de in $)de!=="value"&&!Yt(de)&&r(z,de,null,$[de],S,_);"value"in $&&r(z,"value",null,$.value,S),(T=$.onVnodeBeforeMount)&&zn(T,_,u)}J&&ht(u,null,_,"beforeMount");const ie=gu(C,G);ie&&G.beforeEnter(z),i(z,f,b),((T=$&&$.onVnodeMounted)||ie||J)&&dn(()=>{T&&zn(T,_,u),ie&&G.enter(z),J&&ht(u,null,_,"mounted")},C)},j=(u,f,b,_,C)=>{if(b&&M(u,b),_)for(let S=0;S<_.length;S++)M(u,_[S]);if(C){let S=C.subTree;if(f===S||Fa(S.type)&&(S.ssContent===f||S.ssFallback===f)){const x=C.vnode;j(u,x,x.scopeId,x.slotScopeIds,C.parent)}}},ee=(u,f,b,_,C,S,x,L,z=0)=>{for(let T=z;T<u.length;T++){const $=u[T]=L?tt(u[T]):Mn(u[T]);V(null,$,f,b,_,C,S,x,L)}},K=(u,f,b,_,C,S,x)=>{const L=f.el=u.el;let{patchFlag:z,dynamicChildren:T,dirs:$}=f;z|=u.patchFlag&16;const R=u.props||Ce,G=f.props||Ce;let J;if(b&&ft(b,!1),(J=G.onVnodeBeforeUpdate)&&zn(J,b,f,u),$&&ht(f,u,b,"beforeUpdate"),b&&ft(b,!0),(R.innerHTML&&G.innerHTML==null||R.textContent&&G.textContent==null)&&h(L,""),T?Y(u.dynamicChildren,T,L,b,_,ks(f,C),S):x||le(u,f,L,null,b,_,ks(f,C),S,!1),z>0){if(z&16)Q(L,R,G,b,C);else if(z&2&&R.class!==G.class&&r(L,"class",null,G.class,C),z&4&&r(L,"style",R.style,G.style,C),z&8){const ie=f.dynamicProps;for(let de=0;de<ie.length;de++){const ce=ie[de],Fe=R[ce],He=G[ce];(He!==Fe||ce==="value")&&r(L,ce,Fe,He,C,b)}}z&1&&u.children!==f.children&&h(L,f.children)}else!x&&T==null&&Q(L,R,G,b,C);((J=G.onVnodeUpdated)||$)&&dn(()=>{J&&zn(J,b,f,u),$&&ht(f,u,b,"updated")},_)},Y=(u,f,b,_,C,S,x)=>{for(let L=0;L<f.length;L++){const z=u[L],T=f[L],$=z.el&&(z.type===$e||!bt(z,T)||z.shapeFlag&198)?g(z.el):b;V(z,T,$,null,_,C,S,x,!0)}},Q=(u,f,b,_,C)=>{if(f!==b){if(f!==Ce)for(const S in f)!Yt(S)&&!(S in b)&&r(u,S,f[S],null,C,_);for(const S in b){if(Yt(S))continue;const x=b[S],L=f[S];x!==L&&S!=="value"&&r(u,S,L,x,C,_)}"value"in b&&r(u,"value",f.value,b.value,C)}},k=(u,f,b,_,C,S,x,L,z)=>{const T=f.el=u?u.el:l(""),$=f.anchor=u?u.anchor:l("");let{patchFlag:R,dynamicChildren:G,slotScopeIds:J}=f;J&&(L=L?L.concat(J):J),u==null?(i(T,b,_),i($,b,_),ee(f.children||[],b,$,C,S,x,L,z)):R>0&&R&64&&G&&u.dynamicChildren?(Y(u.dynamicChildren,G,b,C,S,x,L),(f.key!=null||C&&f===C.subTree)&&Ra(u,f,!0)):le(u,f,b,$,C,S,x,L,z)},he=(u,f,b,_,C,S,x,L,z)=>{f.slotScopeIds=L,u==null?f.shapeFlag&512?C.ctx.activate(f,b,_,x,z):be(f,b,_,C,S,x,z):Ve(u,f,z)},be=(u,f,b,_,C,S,x)=>{const L=u.component=Eu(u,_,C);if(es(u)&&(L.ctx.renderer=En),zu(L,!1,x),L.asyncDep){if(C&&C.registerDep(L,_e,x),!u.el){const z=L.subTree=qe(sn);P(null,z,f,b),u.placeholder=z.el}}else _e(L,u,f,b,C,S,x)},Ve=(u,f,b)=>{const _=f.component=u.component;if(ou(u,f,b))if(_.asyncDep&&!_.asyncResolved){ae(_,f,b);return}else _.next=f,_.update();else f.el=u.el,_.vnode=f},_e=(u,f,b,_,C,S,x)=>{const L=()=>{if(u.isMounted){let{next:R,bu:G,u:J,parent:ie,vnode:de}=u;{const ln=Ia(u);if(ln){R&&(R.el=de.el,ae(u,R,x)),ln.asyncDep.then(()=>{u.isUnmounted||L()});return}}let ce=R,Fe;ft(u,!1),R?(R.el=de.el,ae(u,R,x)):R=de,G&&Ri(G),(Fe=R.props&&R.props.onVnodeBeforeUpdate)&&zn(Fe,ie,R,de),ft(u,!0);const He=qr(u),an=u.subTree;u.subTree=He,V(an,He,g(an.el),Re(an),u,C,S),R.el=He.el,ce===null&&au(u,He.el),J&&dn(J,C),(Fe=R.props&&R.props.onVnodeUpdated)&&dn(()=>zn(Fe,ie,R,de),C)}else{let R;const{el:G,props:J}=f,{bm:ie,m:de,parent:ce,root:Fe,type:He}=u,an=ni(f);ft(u,!1),ie&&Ri(ie),!an&&(R=J&&J.onVnodeBeforeMount)&&zn(R,ce,f),ft(u,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(He);const ln=u.subTree=qr(u);V(null,ln,b,_,u,C,S),f.el=ln.el}if(de&&dn(de,C),!an&&(R=J&&J.onVnodeMounted)){const ln=f;dn(()=>zn(R,ce,ln),C)}(f.shapeFlag&256||ce&&ni(ce.vnode)&&ce.vnode.shapeFlag&256)&&u.a&&dn(u.a,C),u.isMounted=!0,f=b=_=null}};u.scope.on();const z=u.effect=new Vo(L);u.scope.off();const T=u.update=z.run.bind(z),$=u.job=z.runIfDirty.bind(z);$.i=u,$.id=u.uid,z.scheduler=()=>lr($),ft(u,!0),T()},ae=(u,f,b)=>{f.component=u;const _=u.vnode.props;u.vnode=f,u.next=null,cu(u,f.props,_,b),fu(u,f.children,b),qn(),Wr(u),Un()},le=(u,f,b,_,C,S,x,L,z=!1)=>{const T=u&&u.children,$=u?u.shapeFlag:0,R=f.children,{patchFlag:G,shapeFlag:J}=f;if(G>0){if(G&128){W(T,R,b,_,C,S,x,L,z);return}else if(G&256){Le(T,R,b,_,C,S,x,L,z);return}}J&8?($&16&&bn(T,C,S),R!==T&&h(b,R)):$&16?J&16?W(T,R,b,_,C,S,x,L,z):bn(T,C,S,!0):($&8&&h(b,""),J&16&&ee(R,b,_,C,S,x,L,z))},Le=(u,f,b,_,C,S,x,L,z)=>{u=u||It,f=f||It;const T=u.length,$=f.length,R=Math.min(T,$);let G;for(G=0;G<R;G++){const J=f[G]=z?tt(f[G]):Mn(f[G]);V(u[G],J,b,null,C,S,x,L,z)}T>$?bn(u,C,S,!0,!1,R):ee(f,b,_,C,S,x,L,z,R)},W=(u,f,b,_,C,S,x,L,z)=>{let T=0;const $=f.length;let R=u.length-1,G=$-1;for(;T<=R&&T<=G;){const J=u[T],ie=f[T]=z?tt(f[T]):Mn(f[T]);if(bt(J,ie))V(J,ie,b,null,C,S,x,L,z);else break;T++}for(;T<=R&&T<=G;){const J=u[R],ie=f[G]=z?tt(f[G]):Mn(f[G]);if(bt(J,ie))V(J,ie,b,null,C,S,x,L,z);else break;R--,G--}if(T>R){if(T<=G){const J=G+1,ie=J<$?f[J].el:_;for(;T<=G;)V(null,f[T]=z?tt(f[T]):Mn(f[T]),b,ie,C,S,x,L,z),T++}}else if(T>G)for(;T<=R;)fe(u[T],C,S,!0),T++;else{const J=T,ie=T,de=new Map;for(T=ie;T<=G;T++){const Se=f[T]=z?tt(f[T]):Mn(f[T]);Se.key!=null&&de.set(Se.key,T)}let ce,Fe=0;const He=G-ie+1;let an=!1,ln=0;const In=new Array(He);for(T=0;T<He;T++)In[T]=0;for(T=J;T<=R;T++){const Se=u[T];if(Fe>=He){fe(Se,C,S,!0);continue}let Je;if(Se.key!=null)Je=de.get(Se.key);else for(ce=ie;ce<=G;ce++)if(In[ce-ie]===0&&bt(Se,f[ce])){Je=ce;break}Je===void 0?fe(Se,C,S,!0):(In[Je-ie]=T+1,Je>=ln?ln=Je:an=!0,V(Se,f[Je],b,null,C,S,x,L,z),Fe++)}const ut=an?vu(In):It;for(ce=ut.length-1,T=He-1;T>=0;T--){const Se=ie+T,Je=f[Se],Ct=f[Se+1],Tt=Se+1<$?Ct.el||Ct.placeholder:_;In[T]===0?V(null,Je,b,Tt,C,S,x,L,z):an&&(ce<0||T!==ut[ce]?pe(Je,b,Tt,2):ce--)}}},pe=(u,f,b,_,C=null)=>{const{el:S,type:x,transition:L,children:z,shapeFlag:T}=u;if(T&6){pe(u.component.subTree,f,b,_);return}if(T&128){u.suspense.move(f,b,_);return}if(T&64){x.move(u,f,b,En);return}if(x===$e){i(S,f,b);for(let R=0;R<z.length;R++)pe(z[R],f,b,_);i(u.anchor,f,b);return}if(x===_s){Z(u,f,b);return}if(_!==2&&T&1&&L)if(_===0)L.beforeEnter(S),i(S,f,b),dn(()=>L.enter(S),C);else{const{leave:R,delayLeave:G,afterLeave:J}=L,ie=()=>{u.ctx.isUnmounted?s(S):i(S,f,b)},de=()=>{S._isLeaving&&S[Vn](!0),R(S,()=>{ie(),J&&J()})};G?G(S,ie,de):de()}else i(S,f,b)},fe=(u,f,b,_=!1,C=!1)=>{const{type:S,props:x,ref:L,children:z,dynamicChildren:T,shapeFlag:$,patchFlag:R,dirs:G,cacheIndex:J}=u;if(R===-2&&(C=!1),L!=null&&(qn(),ei(L,null,b,u,!0),Un()),J!=null&&(f.renderCache[J]=void 0),$&256){f.ctx.deactivate(u);return}const ie=$&1&&G,de=!ni(u);let ce;if(de&&(ce=x&&x.onVnodeBeforeUnmount)&&zn(ce,f,u),$&6)on(u.component,b,_);else{if($&128){u.suspense.unmount(b,_);return}ie&&ht(u,null,f,"beforeUnmount"),$&64?u.type.remove(u,f,b,En,_):T&&!T.hasOnce&&(S!==$e||R>0&&R&64)?bn(T,f,b,!1,!0):(S===$e&&R&384||!C&&$&16)&&bn(z,f,b),_&&vn(u)}(de&&(ce=x&&x.onVnodeUnmounted)||ie)&&dn(()=>{ce&&zn(ce,f,u),ie&&ht(u,null,f,"unmounted")},b)},vn=u=>{const{type:f,el:b,anchor:_,transition:C}=u;if(f===$e){ct(b,_);return}if(f===_s){F(u);return}const S=()=>{s(b),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(u.shapeFlag&1&&C&&!C.persisted){const{leave:x,delayLeave:L}=C,z=()=>x(b,S);L?L(u.el,S,z):z()}else S()},ct=(u,f)=>{let b;for(;u!==f;)b=E(u),s(u),u=b;s(f)},on=(u,f,b)=>{const{bum:_,scope:C,job:S,subTree:x,um:L,m:z,a:T}=u;Xr(z),Xr(T),_&&Ri(_),C.stop(),S&&(S.flags|=8,fe(x,u,f,b)),L&&dn(L,f),dn(()=>{u.isUnmounted=!0},f)},bn=(u,f,b,_=!1,C=!1,S=0)=>{for(let x=S;x<u.length;x++)fe(u[x],f,b,_,C)},Re=u=>{if(u.shapeFlag&6)return Re(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=E(u.anchor||u.el),b=f&&f[Lc];return b?E(b):f};let Oe=!1;const xe=(u,f,b)=>{u==null?f._vnode&&fe(f._vnode,null,null,!0):V(f._vnode||null,u,f,null,null,null,b),f._vnode=u,Oe||(Oe=!0,Wr(),aa(),Oe=!1)},En={p:V,um:fe,m:pe,r:vn,mt:be,mc:ee,pc:le,pbc:Y,n:Re,o:e};return{render:xe,hydrate:void 0,createApp:Xc(xe)}}function ks({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function ft({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function gu(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Ra(e,n,t=!1){const i=e.children,s=n.children;if(U(i)&&U(s))for(let r=0;r<i.length;r++){const a=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=tt(s[r]),l.el=a.el),!t&&l.patchFlag!==-2&&Ra(a,l)),l.type===ss&&l.patchFlag!==-1&&(l.el=a.el),l.type===sn&&!l.el&&(l.el=a.el)}}function vu(e){const n=e.slice(),t=[0];let i,s,r,a,l;const c=e.length;for(i=0;i<c;i++){const p=e[i];if(p!==0){if(s=t[t.length-1],e[s]<p){n[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)l=r+a>>1,e[t[l]]<p?r=l+1:a=l;p<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=n[a];return t}function Ia(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ia(n)}function Xr(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const Fa=e=>e.__isSuspense;function bu(e,n){n&&n.pendingBranch?U(e)?n.effects.push(...e):n.effects.push(e):zc(e)}const $e=Symbol.for("v-fgt"),ss=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),_s=Symbol.for("v-stc"),ii=[];let fn=null;function se(e=!1){ii.push(fn=e?null:[])}function yu(){ii.pop(),fn=ii[ii.length-1]||null}let li=1;function Vi(e,n=!1){li+=e,e<0&&fn&&n&&(fn.hasOnce=!0)}function Oa(e){return e.dynamicChildren=li>0?fn||It:null,yu(),li>0&&fn&&fn.push(e),e}function oe(e,n,t,i,s,r){return Oa(v(e,n,t,i,s,r,!0))}function Vs(e,n,t,i,s){return Oa(qe(e,n,t,i,s,!0))}function ji(e){return e?e.__v_isVNode===!0:!1}function bt(e,n){return e.type===n.type&&e.key===n.key}const Ha=({key:e})=>e??null,Fi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Pe(e)||Ue(e)||te(e)?{i:pn,r:e,k:n,f:!!t}:e:null);function v(e,n=null,t=null,i=0,s=null,r=e===$e?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ha(n),ref:n&&Fi(n),scopeId:ca,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pn};return l?(dr(c,t),r&128&&e.normalize(c)):t&&(c.shapeFlag|=Pe(t)?8:16),li>0&&!a&&fn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&fn.push(c),c}const qe=wu;function wu(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===Kc)&&(e=sn),ji(e)){const l=lt(e,n,!0);return t&&dr(l,t),li>0&&!r&&fn&&(l.shapeFlag&6?fn[fn.indexOf(e)]=l:fn.push(l)),l.patchFlag=-2,l}if(Au(e)&&(e=e.__vccOpts),n){n=ku(n);let{class:l,style:c}=n;l&&!Pe(l)&&(n.class=hn(l)),ke(c)&&(ar(c)&&!U(c)&&(c=Ge({},c)),n.style=wt(c))}const a=Pe(e)?1:Fa(e)?128:ua(e)?64:ke(e)?4:te(e)?2:0;return v(e,n,t,i,s,a,r,!0)}function ku(e){return e?ar(e)||za(e)?Ge({},e):e:null}function lt(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:l,transition:c}=e,p=n?Su(s||{},n):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ha(p),ref:n&&n.ref?t&&r?U(r)?r.concat(Fi(n)):[r,Fi(n)]:Fi(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==$e?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&ai(h,c.clone(h)),h}function _u(e=" ",n=0){return qe(ss,null,e,n)}function nn(e="",n=!1){return n?(se(),Vs(sn,null,e)):qe(sn,null,e)}function Mn(e){return e==null||typeof e=="boolean"?qe(sn):U(e)?qe($e,null,e.slice()):ji(e)?tt(e):qe(ss,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function dr(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(U(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),dr(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!za(n)?n._ctx=pn:s===3&&pn&&(pn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else te(n)?(n={default:n,_ctx:pn},t=32):(n=String(n),i&64?(t=16,n=[_u(n)]):t=8);e.children=n,e.shapeFlag|=t}function Su(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=hn([n.class,i.class]));else if(s==="style")n.style=wt([n.style,i.style]);else if(Ji(s)){const r=n[s],a=i[s];a&&r!==a&&!(U(r)&&r.includes(a))&&(n[s]=r?[].concat(r,a):a)}else s!==""&&(n[s]=i[s])}return n}function zn(e,n,t,i=null){Tn(e,n,7,[t,i])}const Cu=ka();let Tu=0;function Eu(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||Cu,r={uid:Tu++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ma(i,s),emitsOptions:Ca(i,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:i.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=tu.bind(null,r),e.ce&&e.ce(r),r}let rn=null;const Da=()=>rn||pn;let $i,js;{const e=Yi(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};$i=n("__VUE_INSTANCE_SETTERS__",t=>rn=t),js=n("__VUE_SSR_SETTERS__",t=>ci=t)}const gi=e=>{const n=rn;return $i(e),e.scope.on(),()=>{e.scope.off(),$i(n)}},Yr=()=>{rn&&rn.scope.off(),$i(null)};function Na(e){return e.vnode.shapeFlag&4}let ci=!1;function zu(e,n=!1,t=!1){n&&js(n);const{props:i,children:s}=e.vnode,r=Na(e);lu(e,i,r,n),hu(e,s,t||n);const a=r?Lu(e,n):void 0;return n&&js(!1),a}function Lu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Gc);const{setup:i}=t;if(i){qn();const s=e.setupContext=i.length>1?xu(e):null,r=gi(e),a=mi(i,e,0,[e.props,s]),l=Fo(a);if(Un(),r(),(l||e.sp)&&!ni(e)&&ga(e),l){if(a.then(Yr,Yr),n)return a.then(c=>{Qr(e,c)}).catch(c=>{Zi(c,e,0)});e.asyncDep=a}else Qr(e,a)}else Wa(e)}function Qr(e,n,t){te(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ke(n)&&(e.setupState=sa(n)),Wa(e)}function Wa(e,n,t){const i=e.type;e.render||(e.render=i.render||An);{const s=gi(e);qn();try{Vc(e)}finally{Un(),s()}}}const Mu={get(e,n){return je(e,"get",""),e[n]}};function xu(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Mu),slots:e.slots,emit:e.emit,expose:n}}function rs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(sa(gc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ti)return ti[t](e)},has(n,t){return t in n||t in ti}})):e.proxy}function Au(e){return te(e)&&"__vccOpts"in e}const H=(e,n)=>_c(e,n,ci);function Pu(e,n,t){try{Vi(-1);const i=arguments.length;return i===2?ke(n)&&!U(n)?ji(n)?qe(e,null,[n]):qe(e,n):qe(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ji(t)&&(t=[t]),qe(e,n,t))}finally{Vi(1)}}const Ru="3.5.25";let $s;const Zr=typeof window<"u"&&window.trustedTypes;if(Zr)try{$s=Zr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ba=$s?e=>$s.createHTML(e):e=>e,Iu="http://www.w3.org/2000/svg",Fu="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,eo=Gn&&Gn.createElement("template"),Ou={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?Gn.createElementNS(Iu,e):n==="mathml"?Gn.createElementNS(Fu,e):t?Gn.createElement(e,{is:t}):Gn.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const a=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{eo.innerHTML=Ba(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=eo.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Zn="transition",Ut="animation",ui=Symbol("_vtc"),Ka={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hu=Ge({},da,Ka),Du=e=>(e.displayName="Transition",e.props=Hu,e),no=Du((e,{slots:n})=>Pu(Ac,Nu(e),n)),mt=(e,n=[])=>{U(e)?e.forEach(t=>t(...n)):e&&e(...n)},to=e=>e?U(e)?e.some(n=>n.length>1):e.length>1:!1;function Nu(e){const n={};for(const k in e)k in Ka||(n[k]=e[k]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:p=a,appearToClass:h=l,leaveFromClass:g=`${t}-leave-from`,leaveActiveClass:E=`${t}-leave-active`,leaveToClass:M=`${t}-leave-to`}=e,O=Wu(s),V=O&&O[0],ue=O&&O[1],{onBeforeEnter:P,onEnter:D,onEnterCancelled:Z,onLeave:F,onLeaveCancelled:X,onBeforeAppear:B=P,onAppear:j=D,onAppearCancelled:ee=Z}=n,K=(k,he,be,Ve)=>{k._enterCancelled=Ve,pt(k,he?h:l),pt(k,he?p:a),be&&be()},Y=(k,he)=>{k._isLeaving=!1,pt(k,g),pt(k,M),pt(k,E),he&&he()},Q=k=>(he,be)=>{const Ve=k?j:D,_e=()=>K(he,k,be);mt(Ve,[he,_e]),io(()=>{pt(he,k?c:r),Kn(he,k?h:l),to(Ve)||so(he,i,V,_e)})};return Ge(n,{onBeforeEnter(k){mt(P,[k]),Kn(k,r),Kn(k,a)},onBeforeAppear(k){mt(B,[k]),Kn(k,c),Kn(k,p)},onEnter:Q(!1),onAppear:Q(!0),onLeave(k,he){k._isLeaving=!0;const be=()=>Y(k,he);Kn(k,g),k._enterCancelled?(Kn(k,E),ao(k)):(ao(k),Kn(k,E)),io(()=>{k._isLeaving&&(pt(k,g),Kn(k,M),to(F)||so(k,i,ue,be))}),mt(F,[k,be])},onEnterCancelled(k){K(k,!1,void 0,!0),mt(Z,[k])},onAppearCancelled(k){K(k,!0,void 0,!0),mt(ee,[k])},onLeaveCancelled(k){Y(k),mt(X,[k])}})}function Wu(e){if(e==null)return null;if(ke(e))return[Ss(e.enter),Ss(e.leave)];{const n=Ss(e);return[n,n]}}function Ss(e){return Bl(e)}function Kn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[ui]||(e[ui]=new Set)).add(n)}function pt(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[ui];t&&(t.delete(n),t.size||(e[ui]=void 0))}function io(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Bu=0;function so(e,n,t,i){const s=e._endId=++Bu,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:a,timeout:l,propCount:c}=Ku(e,n);if(!a)return i();const p=a+"end";let h=0;const g=()=>{e.removeEventListener(p,E),r()},E=M=>{M.target===e&&++h>=c&&g()};setTimeout(()=>{h<c&&g()},l+1),e.addEventListener(p,E)}function Ku(e,n){const t=window.getComputedStyle(e),i=O=>(t[O]||"").split(", "),s=i(`${Zn}Delay`),r=i(`${Zn}Duration`),a=ro(s,r),l=i(`${Ut}Delay`),c=i(`${Ut}Duration`),p=ro(l,c);let h=null,g=0,E=0;n===Zn?a>0&&(h=Zn,g=a,E=r.length):n===Ut?p>0&&(h=Ut,g=p,E=c.length):(g=Math.max(a,p),h=g>0?a>p?Zn:Ut:null,E=h?h===Zn?r.length:c.length:0);const M=h===Zn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Zn}Property`).toString());return{type:h,timeout:g,propCount:E,hasTransform:M}}function ro(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>oo(t)+oo(e[i])))}function oo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ao(e){return(e?e.ownerDocument:document).body.offsetHeight}function Gu(e,n,t){const i=e[ui];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const lo=Symbol("_vod"),Vu=Symbol("_vsh"),ju=Symbol(""),$u=/(?:^|;)\s*display\s*:/;function qu(e,n,t){const i=e.style,s=Pe(t);let r=!1;if(t&&!s){if(n)if(Pe(n))for(const a of n.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Oi(i,l,"")}else for(const a in n)t[a]==null&&Oi(i,a,"");for(const a in t)a==="display"&&(r=!0),Oi(i,a,t[a])}else if(s){if(n!==t){const a=i[ju];a&&(t+=";"+a),i.cssText=t,r=$u.test(t)}}else n&&e.removeAttribute("style");lo in e&&(e[lo]=r?i.display:"",e[Vu]&&(i.display="none"))}const co=/\s*!important$/;function Oi(e,n,t){if(U(t))t.forEach(i=>Oi(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=Uu(e,n);co.test(t)?e.setProperty(St(i),t.replace(co,""),"important"):e[i]=t}}const uo=["Webkit","Moz","ms"],Cs={};function Uu(e,n){const t=Cs[n];if(t)return t;let i=at(n);if(i!=="filter"&&i in e)return Cs[n]=i;i=Do(i);for(let s=0;s<uo.length;s++){const r=uo[s]+i;if(r in e)return Cs[n]=r}return n}const ho="http://www.w3.org/1999/xlink";function fo(e,n,t,i,s,r=ql(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(ho,n.slice(6,n.length)):e.setAttributeNS(ho,n,t):t==null||r&&!Bo(t)?e.removeAttribute(n):e.setAttribute(n,r?"":Rn(t)?String(t):t)}function mo(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Ba(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Bo(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(s||n)}function hr(e,n,t,i){e.addEventListener(n,t,i)}function Ju(e,n,t,i){e.removeEventListener(n,t,i)}const po=Symbol("_vei");function Xu(e,n,t,i,s=null){const r=e[po]||(e[po]={}),a=r[n];if(i&&a)a.value=i;else{const[l,c]=Yu(n);if(i){const p=r[n]=ed(i,s);hr(e,l,p,c)}else a&&(Ju(e,l,a,c),r[n]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function Yu(e){let n;if(go.test(e)){n={};let i;for(;i=e.match(go);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),n]}let Ts=0;const Qu=Promise.resolve(),Zu=()=>Ts||(Qu.then(()=>Ts=0),Ts=Date.now());function ed(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Tn(nd(i,t.value),n,5,[i])};return t.value=e,t.attached=Zu(),t}function nd(e,n){if(U(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const vo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,td=(e,n,t,i,s,r)=>{const a=s==="svg";n==="class"?Gu(e,i,a):n==="style"?qu(e,t,i):Ji(n)?Ys(n)||Xu(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):id(e,n,i,a))?(mo(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&fo(e,n,i,a,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Pe(i))?mo(e,at(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),fo(e,n,i,a))};function id(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&vo(n)&&te(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vo(n)&&Pe(t)?!1:n in e}const qi=e=>{const n=e.props["onUpdate:modelValue"]||!1;return U(n)?t=>Ri(n,t):n},Wt=Symbol("_assign"),Ga={deep:!0,created(e,n,t){e[Wt]=qi(t),hr(e,"change",()=>{const i=e._modelValue,s=di(e),r=e.checked,a=e[Wt];if(U(i)){const l=er(i,s),c=l!==-1;if(r&&!c)a(i.concat(s));else if(!r&&c){const p=[...i];p.splice(l,1),a(p)}}else if(Kt(i)){const l=new Set(i);r?l.add(s):l.delete(s),a(l)}else a(Va(e,r))})},mounted:bo,beforeUpdate(e,n,t){e[Wt]=qi(t),bo(e,n,t)}};function bo(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(U(n))s=er(n,i.props.value)>-1;else if(Kt(n))s=n.has(i.props.value);else{if(n===t)return;s=fi(n,Va(e,!0))}e.checked!==s&&(e.checked=s)}const sd={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=Kt(n);hr(e,"change",()=>{const r=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>t?Wo(di(a)):di(a));e[Wt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,_n(()=>{e._assigning=!1})}),e[Wt]=qi(i)},mounted(e,{value:n}){yo(e,n)},beforeUpdate(e,n,t){e[Wt]=qi(t)},updated(e,{value:n}){e._assigning||yo(e,n)}};function yo(e,n){const t=e.multiple,i=U(n);if(!(t&&!i&&!Kt(n))){for(let s=0,r=e.options.length;s<r;s++){const a=e.options[s],l=di(a);if(t)if(i){const c=typeof l;c==="string"||c==="number"?a.selected=n.some(p=>String(p)===String(l)):a.selected=er(n,l)>-1}else a.selected=n.has(l);else if(fi(di(a),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function di(e){return"_value"in e?e._value:e.value}function Va(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const rd=["ctrl","shift","alt","meta"],od={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>rd.some(t=>e[`${t}Key`]&&!n.includes(t))},ad=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let a=0;a<n.length;a++){const l=od[n[a]];if(l&&l(s,n))return}return e(s,...r)}))},ld=Ge({patchProp:td},Ou);let wo;function cd(){return wo||(wo=mu(ld))}const ud=((...e)=>{const n=cd().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=hd(i);if(!s)return;const r=n._component;!te(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,dd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},n});function dd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hd(e){return Pe(e)?document.querySelector(e):e}const fd="/favicon.png",md="/images/zoom-out.png",pd="/images/zoom-in.png",gd="/images/share-icon.png",vd="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",Pn=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Jean-Philippe Rameau",birth:1683,death:1764},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Gioachino Rossini",birth:1792,death:1868},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Richard Strauss",birth:1864,death:1949},{name:"Jean Sibelius",birth:1865,death:1957},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Igor Stravinsky",birth:1882,death:1971},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Carl Orff",birth:1895,death:1982},{name:"George Gershwin",birth:1898,death:1937},{name:"Dmitri Shostakovich",birth:1906,death:1975}],bd={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/strawinski.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Richard Strauss":"comp/rstrauss.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","George Gershwin":"comp/gershwin.jpg","Carl Orff":"comp/orff.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function ja(e){const n=bd[e];return n?n.startsWith("/")?n:`/${n}`:null}function yd(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}const xn=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let qs=xn.reduce((e,n)=>(e[n.id]=n.label,e),{});const ko=Math.min(...Pn.map(e=>e.birth)),wd=Math.max(...Pn.map(e=>e.birth));let Us=[...Pn],it=null,st=null;const kd={r:255,g:255,b:255},_d={r:37,g:99,b:235};Xt("#f3f4f6"),Co(1750),Xt("#e6eef8"),Co(1820),Xt("#e8f4ff"),Xt("#eef2f7");const Ui=1677.5,Hi=1980,$a=Hi-Ui,Sd=6,Cd=2,Td=0,Di={barHeight:50,widthScale:1,fontScale:1},At={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let rt={...Di};function Es(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function _o(e={}){rt={barHeight:Es(e.barHeight??rt.barHeight??Di.barHeight,At.barHeight.min,At.barHeight.max),widthScale:Es(e.widthScale??rt.widthScale??Di.widthScale,At.widthScale.min,At.widthScale.max),fontScale:Es(e.fontScale??rt.fontScale??Di.fontScale,At.fontScale.min,At.fontScale.max)}}function Ed(){return Sd*rt.widthScale}function zi(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=$a*Ed()+Td,i=(n.clientWidth||window.innerWidth)*Cd*rt.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function yt(e){return(e-Ui)/$a*100}function qa(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function Xt(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function zs({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function So(e,n,t){const i=qa(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function Co(e){const n=wd-ko;return n<=0?0:qa((e-ko)/n)}const zd={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function fr(e){return zd[e]||"#f3f4f6"}function Ld(e){return e?qs[e]||xn.find(n=>n.id===e)?.label||e:""}function To(e={}){!e||typeof e!="object"||(qs={...qs,...e})}function Md(e){const n=xn.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function xd(e,n){const t=Number(e),i=Number(n),s=Md(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let a=null,l=0;return xn.forEach(c=>{const p=Math.max(0,Math.min(i,c.to)-Math.max(t,c.from));p>l&&(l=p,a=c.id)}),a&&l>r/2?a:s}function Ad(e){const n=fr(e),t=Xt(n),i=So(t,kd,.12),s=So(t,_d,.04);return`linear-gradient(145deg, ${zs(i)} 0%, ${zs(t)} 58%, ${zs(s)} 100%)`}function Eo(e){Array.isArray(e)?Us=[...e]:Us=[...Pn]}function mr(){const e=document.getElementById("gantt"),n=document.getElementById("axis");if(!e)return;const t=s=>Number.isInteger(it)&&s===it,i=s=>Number.isInteger(st)&&s===st;e.querySelectorAll(".bar").forEach(s=>{const r=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",t(r)),s.classList.toggle("bar--hovered",i(r))}),e.querySelectorAll(".bar-connector").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),a=t(r),l=i(r);s.classList.toggle("bar-connector--selected",a),s.classList.toggle("bar-connector--hover",l)}),n&&n.querySelectorAll(".life-label").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),a=t(r),l=i(r);s.classList.toggle("life-label--active",a||l),s.classList.toggle("life-label--hover",l)})}function Ua(e){Number.isInteger(e)?it=e:it=null,mr()}function vt(e){Number.isInteger(e)?st=e:st=null,mr()}function zo(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(Ui/10)*10,t=Math.ceil(Hi/10)*10;xn.forEach(i=>{const s=Math.max(i.from,Ui),r=Math.min(i.to,Hi);if(r<=s)return;const a=document.createElement("div");a.className="era-band",a.style.left=yt(s)+"%",a.style.width=yt(r)-yt(s)+"%",a.style.backgroundImage="none",a.style.backgroundColor=fr(i.id),a.textContent=Ld(i.id)||i.label,i.id==="baroque"&&(a.style.justifyContent="flex-end",a.style.paddingLeft="6px",a.style.paddingRight="26px",a.style.textAlign="right"),r===Hi&&(a.style.borderRight="none"),e.appendChild(a)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=yt(i)+"%",e.appendChild(s);const a=document.createElement("div");a.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),a.style.left=yt(i)+"%",a.textContent=i,e.appendChild(a)}}function Li(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="",n&&n.querySelectorAll(".life-label").forEach(P=>P.remove());const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=document.createDocumentFragment(),a=Us||[],l=e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth,c=6,p=c/l*100,h=[...a].sort((P,D)=>P.birth-D.birth),g=h.length,E=h.map((P,D)=>({composer:P,laneIndex:D}));Number.isInteger(it)&&(it<0||it>=g)&&(it=null),Number.isInteger(st)&&(st<0||st>=g)&&(st=null);const M=2,O=rt.barHeight,V=O+M,ue=g*O+Math.max(0,g-1)*M;e.style.height=ue+"px",g&&(E.forEach(({composer:P,laneIndex:D})=>{const Z=P.displayName||P.name,F=yt(P.birth),X=yt(P.death),B=document.createElement("div");B.className="bar",B.setAttribute("data-lane-index",D),B.setAttribute("data-name",P.name);const j=xd(P.birth,P.death);B.style.backgroundImage=Ad(j),B.style.backgroundColor=fr(j);const ee=F,K=X-F,Y=X-p,k=D*V+O*.5+i,he=(W,pe)=>{const fe=document.createElement("div");fe.className="bar-connector",fe.setAttribute("data-lane-index",D),fe.setAttribute("data-side",pe),fe.style.left=W+"%",fe.style.top=-i+"px",fe.style.height=k+"px",s.appendChild(fe)};if(he(ee,"start"),he(Y,"end"),n){const W=document.createElement("div");W.className="life-label",W.setAttribute("data-lane-index",D),W.setAttribute("data-side","start"),W.style.left=ee+"%",W.textContent=P.birth,r.appendChild(W);const pe=document.createElement("div");pe.className="life-label",pe.setAttribute("data-lane-index",D),pe.setAttribute("data-side","end"),pe.style.left=Y+"%",pe.textContent=P.death,r.appendChild(pe)}B.style.left=ee+"%",B.style.width="calc("+K+"% - "+c+"px)",B.style.top=D*V+"px",B.style.height=O+"px",B.style.lineHeight="1.15",B.style.fontSize=O*.28*rt.fontScale+"px";const be=ja(P.name);let Ve=0;if(be){const W=document.createElement("img");W.className="bar-avatar",Ve=Math.max(10,Math.round(O*1.1)),W.style.width=Ve+"px",W.style.height=Ve+"px",W.src=be,W.alt=Z||P.name,B.appendChild(W)}const _e=document.createElement("div");_e.className="bar-text";const ae=document.createElement("span");ae.className="bar-label",ae.textContent=Z,_e.appendChild(ae);const le=document.createElement("span");le.className="bar-dates",le.textContent=`${P.birth} – ${P.death}`,_e.appendChild(le),B.appendChild(_e),e.appendChild(B);const Le=()=>{ae.scrollWidth>ae.clientWidth&&(ae.textContent=yd(Z))};ae.clientWidth>0?Le():typeof window<"u"&&window.requestAnimationFrame(Le),B.addEventListener("click",W=>{W.stopPropagation(),Ua(D),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:P,laneIndex:D}}))}),B.addEventListener("mouseenter",()=>vt(D)),B.addEventListener("mouseleave",()=>vt(null)),B.addEventListener("touchstart",W=>{if(!W.touches||W.touches.length!==1)return;const pe=W.touches[0];B.dataset.touchStartX=String(pe.clientX),B.dataset.touchStartY=String(pe.clientY),vt(D)},{passive:!0}),B.addEventListener("touchmove",W=>{if(!W.touches||W.touches.length!==1)return;const pe=Number(B.dataset.touchStartX||"0"),fe=Number(B.dataset.touchStartY||"0"),vn=W.touches[0],ct=Math.abs(vn.clientX-pe),on=Math.abs(vn.clientY-fe);(ct>6||on>6)&&vt(null)},{passive:!0}),B.addEventListener("touchend",()=>{vt(null)},{passive:!0}),B.addEventListener("touchcancel",()=>{vt(null)},{passive:!0})}),e.appendChild(s),n&&n.appendChild(r),mr())}function Pd(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4;let s=0,r=0,a=0,l=0,c=0,p=0,h=null;const g=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},E=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true",e.dispatchEvent(new CustomEvent("timeline-pan-start")))},M=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",g())};function O(){if(h=null,!n||!t)return;const j=c-s,ee=p-r;e.scrollLeft=a-j,e.scrollTop=l-ee}const V=j=>{j.button===0&&(n=!0,t=!1,e.classList.remove("panning"),s=j.clientX,r=j.clientY,c=j.clientX,p=j.clientY,a=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),j.preventDefault())},ue=j=>{if(n){if(c=j.clientX,p=j.clientY,!t){const ee=Math.abs(c-s),K=Math.abs(p-r);if(ee>i||K>i)E();else return}h===null&&(h=window.requestAnimationFrame(O)),j.preventDefault()}},P=()=>{n&&(n=!1,M(),h!==null&&(cancelAnimationFrame(h),h=null))};e.addEventListener("mousedown",V),window.addEventListener("mousemove",ue),window.addEventListener("mouseup",P);let D=null,Z=!1;const F=j=>{if(D!==null||j.touches.length!==1)return;const ee=j.touches[0];D=ee.identifier,Z=!1,s=ee.clientX,r=ee.clientY,c=ee.clientX,p=ee.clientY,a=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),M()},X=j=>{if(D===null)return;const ee=Array.from(j.touches).find(he=>he.identifier===D);if(!ee)return;const K=ee.clientX-s,Y=ee.clientY-r,Q=Math.abs(K),k=Math.abs(Y);if(!Z)if(Q>i||k>i)Z=!0,E();else return;e.scrollLeft=a-K,e.scrollTop=l-Y,j.preventDefault()},B=j=>{D===null||!Array.from(j.changedTouches).some(K=>K.identifier===D)||(D=null,Z=!1,M())};e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchmove",X,{passive:!1}),e.addEventListener("touchend",B,{passive:!0}),e.addEventListener("touchcancel",B,{passive:!0})}function Rd(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};const i=.5,s=12,r=(p,h,g)=>{const E=p.getBoundingClientRect();return E.bottom>h&&E.top<g},a=()=>e.scrollTop+e.clientHeight>=e.scrollHeight-s,l=()=>{if(a())return;const p=Array.from(n.querySelectorAll(".bar"));if(!p.length)return;const h=e.getBoundingClientRect(),E=(t?.getBoundingClientRect()?.bottom??h.top)+1,M=h.bottom,O=p.find(D=>r(D,E,M));if(!O)return;const V=O.getBoundingClientRect(),ue=E,P=V.top-ue;Math.abs(P)<=i||Js(e,{left:e.scrollLeft,top:Math.max(0,e.scrollTop+P),behavior:"auto"})},c=()=>{l()};return e.addEventListener("timeline-pan-end",c),()=>{e.removeEventListener("timeline-pan-end",c)}}function Js(e,{left:n=0,top:t=0,behavior:i="smooth"}){const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":i;if(e.scrollTo){e.scrollTo({left:n,top:t,behavior:r});return}e.scrollLeft=n,e.scrollTop=t}function Id(e={}){_o(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:Pn;Eo(n),To(e.eraLabels||{}),zi(),zo(),Li(),Pd();const t=Rd(),i=()=>zi();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const l=document.getElementById("timeline");l&&Js(l,{left:0,top:0,behavior:"smooth"})}function a(){const l=document.getElementById("timeline");l&&Js(l,{left:Math.max(0,l.scrollWidth-l.clientWidth),top:Math.max(0,l.scrollHeight-l.clientHeight),behavior:"smooth"})}return{goToStart:r,goToEnd:a,setComposers(l){Eo(l),Li()},updateSettings(l){_o(l||{}),zi(),Li()},updateEraLabels(l){To(l||{}),zi(),zo(),Li()},setSelectedLane:Ua,setHoveredLane:vt,destroy(){window.removeEventListener("resize",i),t()}}}const os=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},Fd={class:"timeline-wrapper"},Od={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const a=r.getAttribute("data-name"),l=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:a?{name:a}:null,laneIndex:Number.isNaN(l)?null:l}}))};return ts(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=Id({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),pi(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),Ke(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),Ke(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),Ke(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(se(),oe("div",Fd,[...r[0]||(r[0]=[v("div",{id:"timeline"},[v("div",{class:"timeline-inner"},[v("div",{id:"axis",class:"axis"}),v("div",{id:"gantt"})])],-1)])]))}},Hd=os(Od,[["__scopeId","data-v-095e97d5"]]),Dd="/images/about_music_logo.png",Nd="/images/dk3-min.jpg",Wd={class:"about"},Bd={class:"about__card"},Kd={class:"about__title"},Gd={class:"about__text"},Vd={class:"about__text"},jd={class:"about__author"},$d={class:"about__author-body"},qd={class:"about__author-label"},Ud={class:"about__author-name"},Jd={class:"about__contributors"},Xd={class:"about__contributors-title"},Yd={class:"about__contributors-list"},Qd={class:"about__contributors-name"},Zd=["href"],eh={key:0,class:"about__contributors-toggle"},nh={class:"about__contributors-toggle-label"},th={__name:"AboutPage",props:{language:{type:String,default:"en"},testFeaturesEnabled:{type:Boolean,default:!1}},emits:["update:testFeaturesEnabled"],setup(e,{emit:n}){const t={en:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",testFeaturesLabel:"Turn on test functions",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"Official website of the pianist"},{name:"Olga Matveeva",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]},de:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",testFeaturesLabel:"Testfunktionen einschalten",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"Offizielle Website des Pianisten"},{name:"Olga Matveeva",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]},ru:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",testFeaturesLabel:"Включить тестовые функции",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Матвеева",url:"https://www.linkedin.com/in/olga-shibanova",linkText:"LinkedIn"}]}},i=e,s=n,r=H(()=>t[i.language]||t.en),a=H(()=>r.value.contributors||t.en.contributors||[]),l=H(()=>r.value.testFeaturesLabel||t.en.testFeaturesLabel||"Test functions"),c=H({get:()=>i.testFeaturesEnabled,set:p=>s("update:testFeaturesEnabled",p)});return(p,h)=>(se(),oe("section",Wd,[v("div",Bd,[h[4]||(h[4]=v("img",{class:"about__logo",src:Dd,alt:"Music logo",loading:"lazy"},null,-1)),v("h1",Kd,I(r.value.title),1),v("p",Gd,I(r.value.intro),1),v("p",Vd,I(r.value.goal),1),v("div",jd,[h[3]||(h[3]=v("img",{class:"about__photo",src:Nd,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),v("div",$d,[v("div",qd,I(r.value.authorLabel),1),v("div",Ud,I(r.value.authorName),1),h[1]||(h[1]=v("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),h[2]||(h[2]=v("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),v("div",Jd,[v("div",Xd,I(r.value.contributorsTitle),1),v("ul",Yd,[(se(!0),oe($e,null,Dt(a.value,g=>(se(),oe("li",{key:g.url,class:"about__contributors-item"},[v("span",Qd,I(g.name),1),v("a",{class:"about__contributors-link",href:g.url,target:"_blank",rel:"noreferrer"},I(g.linkText),9,Zd),g.url==="https://www.linkedin.com/in/olga-shibanova"?(se(),oe("div",eh,[v("label",nh,[Ds(v("input",{"onUpdate:modelValue":h[0]||(h[0]=E=>c.value=E),class:"about__contributors-toggle-input",type:"checkbox","aria-label":"Toggle test features"},null,512),[[Ga,c.value]]),v("span",null,I(l.value),1)])])):nn("",!0)]))),128))])])])]))}},ih=os(th,[["__scopeId","data-v-e20b3556"]]),sh={class:"quiz"},rh={class:"quiz__card"},oh={class:"quiz__header"},ah={class:"quiz__title"},lh={class:"quiz__subtitle"},ch={key:0,class:"quiz__intro"},uh={class:"quiz__intro-card"},dh={class:"quiz__intro-title"},hh={class:"quiz__intro-list"},fh={class:"quiz__difficulty"},mh={class:"quiz__difficulty-label"},ph={class:"quiz__difficulty-options"},gh=["aria-pressed","disabled"],vh=["aria-pressed","disabled"],bh={key:0,class:"quiz__error",role:"status"},yh=["disabled"],wh={key:1,class:"quiz__result"},kh={class:"quiz__result-score"},_h={class:"quiz__result-mode"},Sh={class:"quiz__result-text"},Ch={class:"quiz__result-text"},Th={class:"quiz__share"},Eh={class:"quiz__share-title"},zh={class:"quiz__share-preview"},Lh={class:"quiz__share-preview-title"},Mh={class:"quiz__share-preview-body"},xh={class:"quiz__share-actions"},Ah=["href"],Ph=["href"],Rh={key:2,class:"quiz__round"},Ih={class:"quiz__round-top"},Fh={class:"quiz__round-label"},Oh={class:"quiz__round-top-right"},Hh={class:"quiz__score-pill"},Dh=["aria-label","title"],Nh={class:"quiz__progress-track","aria-hidden":"true"},Wh={class:"quiz__listen"},Bh=["disabled"],Kh={style:{"font-size":"14px"}},Gh={class:"quiz__listen-body"},Vh={class:"quiz__listen-title"},jh=["src"],$h={class:"quiz__question"},qh={class:"quiz__options"},Uh=["disabled","aria-pressed","onClick"],Jh={class:"quiz__question"},Xh={class:"quiz__options quiz__options--era"},Yh=["disabled","aria-pressed","onClick"],Qh={key:0,class:"quiz__feedback",role:"status"},Zh={key:0,class:"quiz__feedback-block"},ef={class:"quiz__feedback-title"},nf={class:"quiz__feedback-body"},tf={key:1,class:"quiz__feedback-block"},sf={class:"quiz__feedback-title"},rf={class:"quiz__feedback-body"},of={class:"quiz__actions"},af=["disabled"],lf="https://soundcloud.com/dmitry-kotikov/sets/quizeasy",cf="https://soundcloud.com/dmitry-kotikov/sets/quizhard",uf={__name:"QuizPage",props:{language:{type:String,default:"en"},composerNames:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e,t=[['Danse Du Grand Calumet De La Paix  from "Les Sauvages" (Les Indes Galantes) Jean-Philippe Rameau',"Jean-Philippe Rameau"],["Carl Orff - Carmina Burana - O Fortuna","Carl Orff"],["Finlandia, Op.26","Jean Sibelius"],["George Gershwin - Rhapsody In Blue","George Gershwin"],["Rossini - The Barber of Seville - Overture - Marriner","Gioachino Rossini"],["Richard Strauss - Also Sprach Zarathustra, Op. 30","Richard Strauss"],["Nessum dorma - Turandot / Giacomo Puccini","Giacomo Puccini"],["Offenbach: Orpheus in the Underworld, Overture. (Can-can)","Jacques Offenbach"],["Shostakovich: Symphony No. 7 in C Major, Op. 60 (Leningrad) - I. Allegretto (June 1988)","Dmitri Shostakovich"],["Sergei Prokofiev - Dance Of The Knights from Romeo and Juliet, Op. 64","Sergei Prokofiev"],["Igor Stravinsky Rite Of Spring – NEC Philharmonia + Hugh Wolff","Igor Stravinsky"],["MAURICE RAVEL ~ Bolero","Maurice Ravel"],["Rachmaninoff Piano Concerto No. 1, Op. 1 - I. Vivace","Sergei Rachmaninoff"],["Scriabin - Etude in D# minor op8no12","Alexander Scriabin"],["Gymnopédie no.1 - Erik Satie","Erik Satie"],["Clair de Lune - Debussy","Claude Debussy"],["Gustav Mahler: Adagietto from Symphony #5","Gustav Mahler"],["Rimsky-Korsakov: Scheherazade, Op. 35 - The Tale of Prince Kalendar ( Lento-Allegro molto)","Nikolai Rimsky-Korsakov"],["Edvard Grieg: Peer Gynt Suite No.1, Op. 46 / Morning Mood (performed using Vienna Symphonic Library)","Edvard Grieg"],["Antonín Dvořák — Symphony No. 9 In E Minor  From The New World , Op. 95 IV. Allegro Con Fuoco","Antonin Dvorak"],["Pyotr Ilyich Tchaikovsky - The Nutcracker Suite, Op. 71a. III. Waltz of the Flowers","Pyotr Ilyich Tchaikovsky"],["Khovanshchina: Introduction - Dawn on the Moscow River","Modest Mussorgsky"],["Carmen - Habanera (Piano Version) Georges Bizet","Georges Bizet"],["The Swan - Saint-Saens","Camille Saint-Saens"],["Alexander Borodin: Polovetsian Dances","Alexander Borodin"],["Brahms - Symphony No. 3 In F Major, Op. 90 - III. Poco Allegretto","Johannes Brahms"],["Johann Strauss II - The Blue Danube Waltz","Johann Strauss II"],["La Donna E Mobile - Giuseppe Verdi","Giuseppe Verdi"],["Liszt - La Campanella In G - Sharp Minor (From Grandes Études De Paganini, S.141,No.3)","Franz Liszt"],["Robert Schumann - Kinderszenen Op.15 No.7, Träumerei","Robert Schumann"],["Chopin - Nocturne in E Flat Major op. 9 No. 2","Frederic Chopin"],["Wedding March - Felix Mendelssohn","Felix Mendelssohn"],["Former Anthem of Russia (1990-2000) - The Patriotic Song, Glinka | патриотическая песня глинки","Mikhail Glinka"],["Hector Berlioz / Symphonie Fantastique, Op.14 V Dream of a Witches' Sabbath","Hector Berlioz"],["Franz Schubert - Ave Maria","Franz Schubert"],["Paganini - Violin Concerto No. 2 In B Minor, III. Rondo “La Campanella“","Niccolo Paganini"],["Ludwig Van Beethoven - Sonata No. 17 In D Minor For Piano, Op. 31 - 2 (The Tempest)- III. Allegretto","Ludwig van Beethoven"],["Serenade No.13, G Major, K525, Eine Kleine Nachtmusic II. Romanze Andante","Wolfgang Amadeus Mozart"],["Joseph Haydn: Symphony No. 49 In F Minor - Allegro Di Molto","Joseph Haydn"],['Handel/Goossens: "Hallelujah" from "Messiah" HWV 56',"George Frideric Handel"],["Scarlatti: Sonata In D Minor K141","Domenico Scarlatti"],["Orchestral Suite No. 3 in D Major, BWV 1068 ”Air on G String”","Johann Sebastian Bach"],["Violin Concerto in E major, RV 269 - Spring","Antonio Vivaldi"]],i=[["Rameau - La Poule","Jean-Philippe Rameau"],["Carmina Burana, XIV. In Taberna - Carl Orff","Carl Orff"],["Symphony No.2 In D Major, Op. 43: I. Allegretto","Jean Sibelius"],["Gershwin - 3 Preludes:  I. Allegro ben ritmato e deciso","George Gershwin"],["I'taliana In Algeri - Overture","Gioachino Rossini"],["Strauss: Die Frau ohne Schatten Symphonic Fantasy (Erato 1992)","Richard Strauss"],["Giacomo Puccini - Madama Butterfly -  Humming Chorus","Giacomo Puccini"],["La Belle Helene - Overture","Jacques Offenbach"],["SHOSTAKOVICH: String Quartet No. 8 in C Minor, Op. 110: II. Allegro molto - Quatuor Danel","Dmitri Shostakovich"],["Prokofiev: Symphony No. 1 in D Major, Op. 25","Sergei Prokofiev"],["Stravinsky: Firebird Suite - Infernal Dance of King Kaschei","Igor Stravinsky"],["Ravel, La Valse","Maurice Ravel"],["Rachmaninoff Elegie Op. 3 No. 1","Sergei Rachmaninoff"],["Alexander Scriabin - Piano Sonata No 5 in F sharp Op 53","Alexander Scriabin"],["Sarabande N.1","Erik Satie"],["La Cathedrale Engloutie / The Sunken Cathedral - Claude Debussy","Claude Debussy"],["Mahler Symphony No 3 in D Minor (October 2018)","Gustav Mahler"],["RIMSKY-KORSAKOV Scheherazade:  1 The Sea and Sinbad’s Ship","Nikolai Rimsky-Korsakov"],["1. Allegro moderato (D minor)","Sergei Rachmaninoff"],['A. Dvorak, Stabat Mater "Inflammatus", Cornelia Lanz (Altsolo), Herkulessaal Munchen',"Antonin Dvorak"],["P.I. Tchaikovsky:  Kak bi znala ya","Pyotr Ilyich Tchaikovsky"],["Modest Mussorgsky (Orch. Shostakovich) - Songs and Dances of Death - Alvarez - Toro- Campinas - 2019","Modest Mussorgsky"],["Bizet: The Pearl Fishers, Au fond du temple saint","Georges Bizet"],["Camille Saint-Saens, violin concerto N.3 in B minor op 61, 1st m","Camille Saint-Saens"],["Занятие 16-17 Бородин_Опера Князь Игорь 5 Плач Ярославны","Alexander Borodin"],["Brahms, Violin Concerto in D, op. 77","Johannes Brahms"],["Strauss, Johann Tritsch Tratsch Polka","Johann Strauss II"],['Verdi Requiem: "Dies Irae"',"Giuseppe Verdi"],["Liszt - Consolation No. 3 In D - Flat Major","Franz Liszt"],["Carnaval, Op. 9 No. 5 Eusebius - Robert Schumann","Robert Schumann"],["Chopin Heroic Polonaise Op.53 A Flat Major - Played by Valentina Lisitsa","Frederic Chopin"],["Mendelssohn Venetian Gondola Song Op 30 No 6","Felix Mendelssohn"],["Попутная песня - Нестор Кукольник-М.Глинка","Mikhail Glinka"],["Le carnaval romain: Overture (feat. Armenian Philharmonic Orchestra)","Hector Berlioz"],["Schubert - Der Leiermann - Thomas Quasthoff  Daniel Barenboim","Franz Schubert"],["Paganini: Violin Concerto No. 1 in D Major (Augustin Hadelich, violin; Carlos Kalmar, conductor)","Niccolo Paganini"],["Beethoven Symphony No. 3 in E-Flat Major, Op  55 (Eroica) (September 2019)","Ludwig van Beethoven"],["Violin Concerto No. 3 in G major, K. 216 - I. Allegro - Wolfgang Amadeus Mozart (8D Binaural Remastered - Music Therapy)","Wolfgang Amadeus Mozart"],["01 Haydn - The Creation, Part One, The Representation Of Chaos","Joseph Haydn"],["George Frideric Handel - Sarabande Suite No 4 In D Minor HMV 437 (Chamber)","George Frideric Handel"],["D. Scarlatti, Sonata in B Minor, K. 27","Domenico Scarlatti"],["French Suite No. 5 in G major, BWV 816: VII. Gigue (Original Version)","Johann Sebastian Bach"],["Vivaldi: Mandolin Concerto in C major, RV 425 - 1. Allegro (2013.06.12)","Antonio Vivaldi"]];function s(w){return String(w||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[’‘`]/g,"'").replace(/[–—]/g,"-").replace(/\s+/g," ").trim().toLowerCase()}const r=new Map(t.map(([w,N])=>[s(w),N])),a=new Map(i.map(([w,N])=>[s(w),N])),l=Pn.map(w=>w.name);function c(w){return String(w||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function p(w){const N=c(w);return n.composerNames?.[N]||w}function h(w){return n.eraLabels?.[w]||xn.find(N=>N.id===w)?.label||""}const g=H(()=>xn.map(w=>h(w.id))),E=new Map(Pn.map(w=>[s(w.name),w.name])),M={en:{retry:"Play again",abort:"Quit quiz",confirmAbort:"Do you really want to quit the quiz?",title:"Guess the composer",subtitle:"Press Play, listen to the excerpt, and guess who wrote it.",start:"Start the quiz",rulesTitle:"How it works",rule1:"Listen to the excerpt and choose the composer.",rule2:"Pick the era for a bonus half-point.",rule3:"Simple uses famous pieces. Hard uses rarer ones. Your total shows up at the end.",difficultyLabel:"Mode",difficultySimple:"Simple",difficultyHard:"Hard",loadingQuiz:"Loading quiz...",playlistError:"Quiz data is unavailable right now.",round:"Round",of:"of",play:"Play",pause:"Pause",listenPrompt:"Listen to the excerpt",listenHelp:"Replay as many times as you need.",loading:"Loading audio...",audioError:"Audio is unavailable. Try again in a moment.",chooseComposerPrompt:"Who is the composer?",chooseEraPrompt:"Which era fits best?",composerCorrect:"Correct composer!",composerWrong:"Not quite.",eraCorrect:"Era bonus!",eraWrong:"Not quite.",composerAnswerLabel:"Composer:",eraAnswerLabel:"Era:",next:"Next",finish:"Finish",scoreLabel:"Score",resultLine:"Final score",resultModeLabel:"Mode:",resultWin:"Sharp ear - well done.",resultLose:"Worth another listen to sharpen your ear.",retry:"Play again",shareTitle:"Share your result",sharePreviewTitle:"Message preview",shareTemplate:"My score in the classical music quiz ({mode} mode): {score}/{total}. Test your knowledge here",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Copy link",shareCopied:"Copied"},de:{retry:"Nochmal spielen",abort:"Quiz abbrechen",confirmAbort:"Willst du das Quiz wirklich abbrechen?",title:"Rate den Komponisten",subtitle:"Abspielen druecken, anhoeren und den Komponisten erraten.",start:"Quiz starten",rulesTitle:"So geht's",rule1:"Hoere den Ausschnitt und waehle den Komponisten.",rule2:"Waehle auch die Epoche - das gibt einen halben Bonuspunkt.",rule3:"Einfach = bekannte Stuecke. Schwer = seltenere Stuecke. Die Gesamtpunktzahl kommt am Ende.",difficultyLabel:"Modus",difficultySimple:"Einfach",difficultyHard:"Schwer",loadingQuiz:"Quiz wird geladen...",playlistError:"Quizdaten sind gerade nicht verfuegbar.",round:"Runde",of:"von",play:"Abspielen",pause:"Pause",listenPrompt:"Ausschnitt anhoeren",listenHelp:"Du kannst beliebig oft neu starten.",loading:"Audio wird geladen...",audioError:"Audio ist gerade nicht verfuegbar. Versuch's gleich nochmal.",chooseComposerPrompt:"Wer ist der Komponist?",chooseEraPrompt:"Welche Epoche passt am besten?",composerCorrect:"Komponist stimmt!",composerWrong:"Nicht ganz.",eraCorrect:"Epoche-Bonus!",eraWrong:"Nicht ganz.",composerAnswerLabel:"Komponist:",eraAnswerLabel:"Epoche:",next:"Weiter",finish:"Fertig",scoreLabel:"Punkte",resultLine:"Endstand",resultModeLabel:"Modus:",resultWin:"Starkes Gehoer - gut gemacht.",resultLose:"Ein zweiter Durchlauf hilft dem Gehoer.",retry:"Nochmal spielen",shareTitle:"Ergebnis teilen",sharePreviewTitle:"Vorschau",shareTemplate:"Mein Ergebnis im Klassik-Quiz ({mode}): {score}/{total}. Teste dein Wissen hier",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Link kopieren",shareCopied:"Kopiert"},ru:{retry:"Сыграть еще раз",abort:"Прервать викторину",confirmAbort:"Действительно ли вы хотите прервать викторину?",title:"Угадайте композитора",subtitle:'Нажмите "Слушать", прослушайте фрагмент и угадайте автора.',start:"Начать виктотрину",rulesTitle:"Как играть",rule1:"Прослушайте фрагмент и выберите композитора.",rule2:"Угадайте эпоху - это дает полбалла бонусом.",rule3:'"Просто" - более известные произведения. "Сложно" - более редкие. Итоговый счет будет в конце.',loadingQuiz:"Загружаем викторину...",playlistError:"Викторина сейчас недоступна.",round:"Раунд",of:"из",play:"Слушать",pause:"Пауза",listenPrompt:"Слушайте фрагмент",listenHelp:"Можно переслушивать сколько угодно раз.",loading:"Загружаем аудио...",audioError:"Аудио сейчас недоступно. Попробуйте еще раз чуть позже.",chooseComposerPrompt:"Кто это?",chooseEraPrompt:"К какой эпохе это ближе?",composerCorrect:"Композитор угадан верно!",composerWrong:"Композитор угадан неверно.",eraCorrect:"Бонус за эпоху!",eraWrong:"Не совсем.",composerAnswerLabel:"Композитор:",eraAnswerLabel:"Эпоха:",next:"Дальше",finish:"Узнать результат",scoreLabel:"Счет",resultLine:"Итоговый счет",resultModeLabel:"Режим:",resultWin:"Вы - настоящий знаток академической музыки.",resultLose:"Стоит прослушать еще раз всех композиторов на таймлайне и результат будет лучше.",retry:"Сыграть еще раз",shareTitle:"Поделиться результатом",sharePreviewTitle:"Текст:",difficultyLabel:"Режим",difficultySimple:"Простой",difficultyHard:"Сложный",shareTemplate:"Мой результат в викторине по классической музыке на {mode} уровне: {score}/{total}. Проверьте себя здесь",shareX:"X",shareFacebook:"Facebook",shareLinkedIn:"LinkedIn",shareTelegram:"Telegram",shareWhatsApp:"WhatsApp",shareCopy:"Скопировать ссылку",shareCopied:"Скопировано"}},O="".replace(/\/$/,""),V=ye([]),ue=ye(!1),P=ye(!1),D=ye(0),Z=ye(null),F=ye(!1),X=ye(!1),B=ye(!1),j=ye("simple"),ee=ye(!1),K=ye(""),Y=new Map,Q=ye("simple"),k=H(()=>M[n.language]||M.en),he=H(()=>(Q.value||j.value)==="hard"?k.value.difficultyHard:k.value.difficultySimple),be=H(()=>{const w=Q.value||j.value;return(n.language||"en")==="ru"?w==="hard"?"сложном":"легком":he.value}),Ve=H(()=>typeof window>"u"?"":window.location.href.split("#")[0]),_e=H(()=>(k.value.shareTemplate||"").replace("{score}",Oe.value).replace("{total}",xe.value).replace("{mode}",be.value).replace(/\s+/g," ").trim()),ae=H(()=>{const w=Ve.value||"",N=_e.value||"";return w?N?`${N}: ${w}`:w:N}),le=H(()=>{const w=encodeURIComponent(ae.value);return{telegram:`https://t.me/share/url?text=${w}`,whatsApp:`https://wa.me/?text=${w}`}}),Le=H(()=>V.value.length),W=H(()=>V.value[D.value]||null),pe=H(()=>!!W.value?.selectedComposer),fe=H(()=>!!W.value?.selectedEra),vn=H(()=>pe.value&&fe.value),ct=H(()=>W.value?.selectedComposer===W.value?.composer),on=H(()=>W.value?.selectedEra===W.value?.eraLabel),bn=H(()=>V.value.reduce((w,N)=>w+(N.composerCorrect?1:0)+(N.eraCorrect?.5:0),0)),Re=H(()=>Le.value*1.5),Oe=H(()=>L(bn.value)),xe=H(()=>L(Re.value)),En=H(()=>!ue.value||P.value?"":`${k.value.round} ${D.value+1} ${k.value.of} ${Le.value}`),yn=H(()=>D.value>=Le.value-1?k.value.finish:k.value.next),u=H(()=>{if(!P.value)return"";const w=Re.value*.7;return bn.value>=w?k.value.resultWin:k.value.resultLose}),f=H(()=>!ue.value||!Le.value?0:P.value?100:(D.value+1)/Le.value*100),b=H(()=>W.value?.id?C(`/api/soundcloud/audio/${W.value.id}`):""),_=H(()=>B.value?k.value.audioError:X.value?k.value.loading:k.value.listenHelp);function C(w){return w?O?O.endsWith("/")&&w.startsWith("/")?O+w.slice(1):!O.endsWith("/")&&!w.startsWith("/")?`${O}/${w}`:O+w:w:O}function S(w){const N=encodeURIComponent(w);return C(`/api/soundcloud/playlist?url=${N}`)}function x(w){const N=[...w];for(let ne=N.length-1;ne>0;ne-=1){const Ae=Math.floor(Math.random()*(ne+1));[N[ne],N[Ae]]=[N[Ae],N[ne]]}return N}function L(w){return Number.isInteger(w)?String(w):w.toFixed(1)}function z(w){return E.get(s(w))||w}function T(w){const N=z(w),ne=Pn.find(wn=>wn.name===N);if(!ne)return null;const Ae=Math.round((ne.birth+ne.death)/2),On=xn.find(wn=>Ae>=wn.from&&Ae<wn.to),dt=xn[xn.length-1]?.id;return h(On?.id||dt)}function $(w){const N=l.filter(Ae=>Ae!==w),ne=x(N).slice(0,3);return x([w,...ne].map(p))}function R(w){return w.map(N=>{const ne=z(N.composer),Ae=T(ne)||"",On=p(ne);return{...N,composer:On,eraLabel:Ae,composerOptions:$(ne),eraOptions:g.value,selectedComposer:null,selectedEra:null,composerCorrect:!1,eraCorrect:!1}})}function G(w){return w==="hard"?{url:cf,map:a}:{url:lf,map:r}}function J(w,N){if(!Array.isArray(w)||!w.length)return[];const ne=x(w);return ne.slice(0,Math.min(N,ne.length))}async function ie(w){if(Y.has(w))return Y.get(w);ee.value=!0,K.value="";const{url:N,map:ne}=G(w);try{const Ae=await fetch(S(N));if(!Ae.ok)throw new Error(`Playlist error ${Ae.status}`);const dt=((await Ae.json())?.tracks||[]).map(wn=>{const Hn=s(wn?.title),zt=ne.get(Hn);return!zt||!wn?.id?null:{id:wn.id,composer:zt,title:wn.title}}).filter(Boolean);if(!dt.length)throw new Error("Playlist mapping empty");return Y.set(w,dt),dt}catch(Ae){return console.error("Quiz playlist load failed",Ae),K.value=k.value.playlistError,[]}finally{ee.value=!1}}function de(){const w=Z.value;F.value=!1,X.value=!1,B.value=!1,w&&(w.pause(),w.currentTime=0,w.load())}function ce(){const w=Z.value;F.value=!1,X.value=!1,w&&(w.pause(),w.currentTime=0)}async function Fe(){if(ee.value)return;K.value="";const w=await ie(j.value);if(!w.length)return;const N=J(w,10);Q.value=j.value,V.value=R(N),D.value=0,ue.value=!0,P.value=!1,de()}function He(){Fe()}function an(){if(typeof window<"u"){const w=k.value.confirmAbort||"Do you really want to quit the quiz?";if(!window.confirm(w))return}ce(),V.value=[],D.value=0,P.value=!1,ue.value=!1,K.value="",B.value=!1,X.value=!1,F.value=!1,Q.value=j.value}function ln(w){const N=W.value;!N||N.selectedComposer||(N.selectedComposer=w,N.composerCorrect=w===N.composer,ce())}function In(w){const N=W.value;!N||N.selectedEra||(N.selectedEra=w,N.eraCorrect=w===N.eraLabel)}function ut(){if(vn.value){if(D.value>=Le.value-1){P.value=!0,ce();return}D.value+=1}}async function Se(){const w=Z.value;if(w){B.value=!1;try{w.paused?(X.value=!0,await w.play()):w.pause()}catch(N){console.error("Audio playback failed",N),B.value=!0,X.value=!1}}}function Je(){F.value=!0,X.value=!1}function Ct(){F.value=!0,X.value=!1}function Tt(){F.value=!1,X.value=!1}function Te(){F.value=!1}function Gt(){X.value=!0}function Et(){X.value=!1}function Fn(){X.value=!1}function Vt(){B.value=!0,X.value=!1,F.value=!1}return Ke(b,async()=>{!ue.value||P.value||(await _n(),de())}),Ke(j,()=>{K.value=""}),Ke(P,w=>{w&&ce()}),pi(()=>{ce()}),(w,N)=>(se(),oe("section",sh,[v("div",rh,[v("header",oh,[v("h1",ah,I(k.value.title),1),v("p",lh,I(k.value.subtitle),1)]),ue.value?P.value?(se(),oe("div",wh,[v("div",kh,I(Oe.value)+"/"+I(xe.value),1),v("div",_h,I(k.value.resultModeLabel)+" "+I(he.value),1),v("div",Sh,I(k.value.resultLine),1),v("div",Ch,I(u.value),1),v("div",Th,[v("div",Eh,I(k.value.shareTitle),1),v("div",zh,[v("div",Lh,I(k.value.sharePreviewTitle),1),v("div",Mh,I(ae.value),1)]),v("div",xh,[v("a",{class:"quiz__share-button",href:le.value.telegram,target:"_blank",rel:"noopener noreferrer"},I(k.value.shareTelegram),9,Ah),v("a",{class:"quiz__share-button",href:le.value.whatsApp,target:"_blank",rel:"noopener noreferrer"},I(k.value.shareWhatsApp),9,Ph)])]),v("button",{class:"quiz__primary",type:"button",onClick:He},I(k.value.retry),1)])):(se(),oe("div",Rh,[v("div",Ih,[v("div",Fh,I(En.value),1),v("div",Oh,[v("div",Hh,I(k.value.scoreLabel)+" "+I(Oe.value)+"/"+I(xe.value),1),v("button",{class:"quiz__secondary quiz__secondary--ghost",type:"button","aria-label":k.value.abort,title:k.value.abort,onClick:an},[...N[2]||(N[2]=[v("span",{class:"quiz__icon","aria-hidden":"true"},"×",-1)])],8,Dh)])]),v("div",Nh,[v("div",{class:"quiz__progress-bar",style:wt({width:`${f.value}%`})},null,4)]),v("div",Wh,[v("button",{class:"quiz__play",type:"button",disabled:!b.value,onClick:Se},[v("span",{class:hn(["quiz__play-icon",{"quiz__play-icon--pause":F.value}])},null,2),v("span",Kh,I(F.value?k.value.pause:k.value.play),1)],8,Bh),v("div",Gh,[v("div",Vh,I(k.value.listenPrompt),1),v("div",{class:hn(["quiz__listen-status",{"quiz__listen-status--error":B.value}])},I(_.value),3)])]),(se(),oe("audio",{ref_key:"audioEl",ref:Z,class:"quiz__audio",key:W.value?.id,src:b.value,preload:"none","aria-hidden":"true",onPlay:Je,onPlaying:Ct,onPause:Tt,onEnded:Te,onWaiting:Gt,onCanplay:Et,onLoadeddata:Fn,onError:Vt},null,40,jh)),v("div",$h,I(k.value.chooseComposerPrompt),1),v("div",qh,[(se(!0),oe($e,null,Dt(W.value.composerOptions,(ne,Ae)=>(se(),oe("button",{key:ne,class:hn(["quiz__option",{"is-selected":ne===W.value.selectedComposer,"is-correct":pe.value&&ne===W.value.composer,"is-wrong":pe.value&&ne===W.value.selectedComposer&&ne!==W.value.composer}]),type:"button",disabled:pe.value,"aria-pressed":ne===W.value.selectedComposer,style:wt({"--index":Ae}),onClick:On=>ln(ne)},I(ne),15,Uh))),128))]),v("div",Jh,I(k.value.chooseEraPrompt),1),v("div",Xh,[(se(!0),oe($e,null,Dt(W.value.eraOptions,(ne,Ae)=>(se(),oe("button",{key:ne,class:hn(["quiz__option",{"is-selected":ne===W.value.selectedEra,"is-correct":fe.value&&ne===W.value.eraLabel,"is-wrong":fe.value&&ne===W.value.selectedEra&&ne!==W.value.eraLabel}]),type:"button",disabled:fe.value,"aria-pressed":ne===W.value.selectedEra,style:wt({"--index":Ae}),onClick:On=>In(ne)},I(ne),15,Yh))),128))]),pe.value||fe.value?(se(),oe("div",Qh,[pe.value?(se(),oe("div",Zh,[v("div",ef,I(ct.value?k.value.composerCorrect:k.value.composerWrong),1),v("div",nf,I(k.value.composerAnswerLabel)+" "+I(W.value.composer),1)])):nn("",!0),fe.value?(se(),oe("div",tf,[v("div",sf,I(on.value?k.value.eraCorrect:k.value.eraWrong),1),v("div",rf,I(k.value.eraAnswerLabel)+" "+I(W.value.eraLabel),1)])):nn("",!0)])):nn("",!0),v("div",of,[v("button",{class:"quiz__secondary",type:"button",disabled:!vn.value,onClick:ut},I(yn.value),9,af)])])):(se(),oe("div",ch,[v("div",uh,[v("div",dh,I(k.value.rulesTitle),1),v("ul",hh,[v("li",null,I(k.value.rule1),1),v("li",null,I(k.value.rule2),1),v("li",null,I(k.value.rule3),1)])]),v("div",fh,[v("div",mh,I(k.value.difficultyLabel),1),v("div",ph,[v("button",{type:"button",class:hn(["quiz__difficulty-option",{"is-active":j.value==="simple"}]),"aria-pressed":j.value==="simple",disabled:ee.value,onClick:N[0]||(N[0]=ne=>j.value="simple")},I(k.value.difficultySimple),11,gh),v("button",{type:"button",class:hn(["quiz__difficulty-option",{"is-active":j.value==="hard"}]),"aria-pressed":j.value==="hard",disabled:ee.value,onClick:N[1]||(N[1]=ne=>j.value="hard")},I(k.value.difficultyHard),11,vh)])]),K.value?(se(),oe("div",bh,I(K.value),1)):nn("",!0),v("button",{class:"quiz__primary",type:"button",disabled:ee.value,onClick:Fe},I(ee.value?k.value.loadingQuiz:k.value.start),9,yh)]))])]))}},df=os(uf,[["__scopeId","data-v-765ab547"]]),hf=`# Composer fact sheets

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
- Orff-Schulwerk: Sein paedagogisches Konzept Orff-Schulwerk praegte Musikunterricht weltweit - Bewegung, Sprache und Perkussion als Basis.`,ff={class:"app"},mf={class:"topbar"},pf={class:"language-switcher"},gf={class:"visually-hidden",for:"language-select"},vf=["aria-label"],bf=["value"],yf={class:"menu-nav"},wf={class:"content"},kf={key:0},_f={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},Sf={class:"filter-dock__header"},Cf=["aria-pressed","aria-label"],Tf=["src"],Ef={key:0,class:"filter-dock__body"},zf={class:"filter-dock__body-inner"},Lf={class:"nav-controls",role:"group","aria-label":"Timeline navigation and zoom"},Mf=["disabled"],xf=["disabled"],Af=["disabled"],Pf=["disabled"],Rf={class:"filter-panel",role:"group","aria-label":"Composer filters"},If={class:"filter-panel__options"},Ff=["onUpdate:modelValue","aria-label"],Of={class:"filter-panel__label"},Hf={class:"composer-modal__content"},Df={class:"composer-modal__header"},Nf={class:"composer-modal__titles"},Wf={class:"composer-modal__name"},Bf={key:0,class:"composer-modal__dates"},Kf={class:"composer-modal__header-actions"},Gf=["aria-label"],Vf={key:0,class:"composer-modal__share-feedback"},jf={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},$f=["disabled"],qf={class:"composer-modal__position"},Uf=["disabled"],Jf={class:"composer-modal__body"},Xf={key:0,class:"composer-modal__hero"},Yf=["src","alt"],Qf={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},Zf=["disabled"],em={class:"composer-modal__position"},nm=["disabled"],tm={class:"composer-modal__hero-meta"},im={class:"composer-modal__name-small"},sm={key:0,class:"composer-modal__dates-small"},rm={class:"composer-modal__playlist"},om={class:"composer-modal__playlist-header"},am={class:"composer-modal__playlist-title"},lm={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},cm=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],um={class:"sc-player__status"},dm={class:"sc-player__status-text"},hm={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},fm={class:"composer-modal__description"},mm={key:0,class:"composer-modal__facts-title"},pm={key:1,class:"composer-modal__facts"},gm={class:"composer-modal__fact-text"},vm={key:2,class:"composer-modal__muted"},Pt="en",Lo="timeline-language",Mo="timeline-language-user-set",xo="timeline-filter-groups",Mi="/composer/",xi=25,Ao=150,Ls=.2,Po=1.5,bm=.35,Ms=1.45,Ro=.5,ym=.6,Ai=1,Ze=12,xs=35,As=8,wm=320,km="(max-width: 720px), (pointer: coarse)",_m=.88,Sm=1.12,Pi=6,Cm=520,Tm=2,Em={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About",quiz:"Check your knowledge"},modal:{keyWorks:"Key works to know"},share:{button:"Share",copied:"Link copied"},soundcloud:{loading:"Loading tracks from SoundCloud..."},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended"},apply:"Apply",minimizeControls:"Hide timeline controls",restoreControls:"Show timeline controls"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt",quiz:"Wissen testen"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},share:{button:"Teilen",copied:"Link kopiert"},soundcloud:{loading:"Tracks von SoundCloud werden geladen..."},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden",minimizeControls:"Steuerungselemente ausblenden",restoreControls:"Steuerungselemente anzeigen"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте",quiz:"Проверьте знания"},modal:{keyWorks:"Ключевые произведения"},share:{button:"Поделиться",copied:"Ссылка скопирована"},soundcloud:{loading:"Загружаем треки из SoundCloud..."},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить",minimizeControls:"Скрыть панель управления",restoreControls:"Показать панель управления"}}},t=Object.keys(n),i=ye(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=ye(Pt),a=ye(!1),l=H(()=>!a.value),c=H(()=>n[r.value]||n.en),p=H(()=>t.map(o=>({value:o,label:n[o]?.label||o.toUpperCase()}))),h=H(()=>c.value.appTitle),g=H(()=>c.value.languageLabel||"Language"),E=H(()=>c.value.navigation||n.en.navigation),M=H(()=>c.value.eras||n.en.eras),O=H(()=>c.value.soundcloud||n.en.soundcloud||{}),V=H(()=>O.value.loading||"Loading tracks from SoundCloud..."),ue=H(()=>c.value.composers||{}),P=H(()=>{const o=ue.value.names||{},d={};return Object.entries(o).forEach(([m,y])=>{d[Xe(m)]=y}),d}),D=H(()=>{const o={};return Object.entries(Tt||{}).forEach(([d,m])=>{const y=Xe(d),A=m?.[r.value];if(A){o[y]=A;return}r.value==="en"&&m?.en&&(o[y]=m.en)}),o}),Z=H(()=>({...D.value,...P.value})),F=H(()=>c.value.filter||n.en.filter),X=H(()=>({essentials:F.value.groups?.essentials||"Essential Icons",core:F.value.groups?.core||"Core Classics",expanded:F.value.groups?.expanded||"Extended Classics"})),B=H(()=>{const o=ue.value.descriptions||{},d={};return Object.entries(o).forEach(([m,y])=>{d[Xe(m)]=y}),d}),j=H(()=>{const o=ue.value.factsTitles||{},d={};return Object.entries(o).forEach(([m,y])=>{d[Xe(m)]=y}),d}),ee=H(()=>c.value.modal||n.en.modal),K=H(()=>c.value.share||n.en.share),Y=ye(!1),Q=ye("composers"),k=[43,50,65],he=[30,35,45],be="".replace(/\/$/,""),_e="https://soundcloud.com/dmitry-kotikov/sets/",ae="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",le=new Set;function Le(o,d,m){return Number.isNaN(o)?d:Math.min(m,Math.max(d,o))}function W(o){const d=Le((o-xi)/(Ao-xi),0,1),m=Math.pow(d,bm),y=Ls+(Po-Ls)*m;return Le(y,Ls,Po)}function pe(o){const d=Le((o-xi)/(Ao-xi),0,1),m=Math.pow(d,ym),y=Ms-(Ms-Ro)*m;return Le(y,Ro,Ms)}const fe=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Claude Debussy","Sergei Rachmaninoff"]},{id:"core",label:"Core Classics",composers:["Johannes Brahms","Giuseppe Verdi","Richard Strauss","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet","Gioachino Rossini","Dmitri Shostakovich","Sergei Prokofiev","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Erik Satie","Joseph Haydn"]},{id:"expanded",label:"Extended Classics",composers:["Jean-Philippe Rameau","Niccolò Paganini","Hector Berlioz","Jacques Offenbach","Alexander Scriabin","George Gershwin","Igor Stravinsky","Jean Sibelius","Carl Orff"]}];function vn(){return fe.reduce((o,d)=>(o[d.id]=d.id!=="expanded",o),{})}function ct(o){const d=vn();return!o||typeof o!="object"||fe.forEach(m=>{const y=o[m.id];typeof y=="boolean"&&(d[m.id]=y)}),d}const on=ye(vn()),bn=H(()=>{const o=c.value.filter||{};return{minimize:o.minimizeControls||"Hide timeline controls",restore:o.restoreControls||"Show timeline controls"}}),Re=ye(null),Oe=ye(Ze),xe=ye(null);let En=0;const yn=ye(!1);let u=null;function f(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia(km).matches}const b=ye("bottom-left"),_=Ot({active:!1,pointerId:null,startX:0,startY:0,startLeft:0,startTop:0,element:null}),C=H(()=>{const o={left:`${Oe.value}px`,transition:_.active?"none":"left 360ms cubic-bezier(0.22, 0.61, 0.36, 1)"};return xe.value!=null&&(o.top=`${xe.value}px`),o}),S=Ot({active:!1,startDistance:0});function x(o,d){const m=o.clientX-d.clientX,y=o.clientY-d.clientY;return Math.hypot(m,y)}const L=Ot({barHeight:k[Ai],widthScale:W(he[Ai]),fontScale:pe(k[Ai])}),z=ye(Ai),T=H(()=>z.value<=0),$=H(()=>z.value>=k.length-1),R=ye(!0),G=ye(!1);function J(o){const d=Le(o,0,k.length-1);z.value=d;const m=k[d];L.barHeight=m,L.widthScale=W(he[d]),L.fontScale=pe(m)}function ie(o){const d=o>0?1:-1;J(z.value+d)}function de(){const o=document.getElementById("timeline");if(!o)return;const d=Math.max(0,o.scrollWidth-o.clientWidth),m=Math.max(0,o.scrollHeight-o.clientHeight);R.value=o.scrollLeft<=Pi&&o.scrollTop<=Pi,G.value=o.scrollLeft>=d-Pi&&o.scrollTop>=m-Pi}async function ce(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),de(),await _n(),jt()}async function Fe(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),de(),await _n(),us()}function He(o,{left:d,top:m,duration:y=Cm}={}){const A=o.scrollLeft,q=o.scrollTop,re=Number.isFinite(d)?d:A,Me=Number.isFinite(m)?m:q,we=re-A,ze=Me-q;if(!we&&!ze)return;const Ye=performance.now(),Ie=Ne=>{const un=Ne-Ye,De=Math.min(1,un/y),We=De<.5?4*De*De*De:1-Math.pow(-2*De+2,3)/2;o.scrollLeft=A+we*We,o.scrollTop=q+ze*We,De<1&&requestAnimationFrame(Ie)};requestAnimationFrame(Ie)}async function an(){if(Q.value!=="composers"||!ut.value.length)return;await _n();const o=document.getElementById("timeline");if(!o)return;const d=o.querySelector('.bar[data-lane-index="0"]');if(!d)return;const m=o.getBoundingClientRect(),y=d.getBoundingClientRect();let A=o.scrollLeft,q=o.scrollTop;const re=m.left+Tm,Me=y.left-re;if(A=Math.max(0,o.scrollLeft+Me),y.top<m.top||y.bottom>m.bottom){const we=y.top-m.top;q=Math.max(0,o.scrollTop+we)}He(o,{left:A,top:q}),de()}async function ln(){await an()}const In=H(()=>{const o=fe.map(m=>m.id).filter(m=>on.value[m]),d=new Set;return o.forEach(m=>{fe.find(A=>A.id===m)?.composers?.forEach(A=>d.add(A))}),d}),ut=H(()=>{const o=In.value;return o.size?Pn.filter(d=>o.has(d.name)):[]}),Se=H(()=>[...ut.value].sort((o,d)=>o.birth-d.birth).map(o=>({...o,displayName:ls(o.name)}))),{descriptionsByLocale:Je,playlistIdsByKey:Ct,namesByLocale:Tt}=nl(hf),Te=ye(null),Gt=ye(!1),Et=ye("");let Fn=null;const Vt=H(()=>Te.value!==null),w=H(()=>Te.value===null?null:Se.value[Te.value]),N=H(()=>w.value?ls(w.value.name):""),ne=H(()=>w.value?ja(w.value.name):null),Ae=H(()=>w.value?tl(w.value.name):""),On=H(()=>w.value?il(w.value.name):""),dt=H(()=>w.value?ll(w.value.name):[]),wn=H(()=>dt.value.map(o=>zl(o)).filter(Boolean)),Hn=H(()=>{const o=wn.value.filter(Boolean);return o.length?o:[ae]}),zt=H(()=>(Te.value??0)>0),as=H(()=>Te.value!==null&&Te.value<Se.value.length-1);function Xe(o){return o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Ja(o){return Xe(o).replace(/\s+/g,"-")}function pr(o){const d=Ja(o);return`${Mi}${encodeURIComponent(d)}`}function Xa(o){return o.startsWith(Mi)?o.slice(Mi.length):""}function Ya(o){const d=Xe(String(o||"").replace(/-/g," ")),m=Pn.find(y=>Xe(y.name)===d);return m?m.name:""}function Qa(o){if(!o)return;const d=fe.find(m=>m.composers.includes(o));!d||on.value[d.id]||(on.value={...on.value,[d.id]:!0})}async function gr(o=window.location.pathname){Gt.value=!0;try{vi(o);const d=Xa(o);if(!d){Te.value=null;return}const m=decodeURIComponent(d),y=Ya(m);if(!y){Te.value=null;return}Qa(y),await _n();const A=Se.value.findIndex(q=>q.name===y);Te.value=A>=0?A:null}finally{Gt.value=!1}}function Za(o){if(!o||typeof window>"u")return"";const d=pr(o);return new URL(d,window.location.origin).toString()}async function el(){if(!w.value)return;const o=Za(w.value.name);if(!o)return;const d=N.value||w.value.name;try{if(navigator.share){await navigator.share({title:d,url:o});return}}catch(m){if(m?.name!=="AbortError")console.warn("Share failed, falling back to clipboard",m);else return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(o);else{const m=document.createElement("textarea");m.value=o,m.setAttribute("readonly","true"),m.style.position="absolute",m.style.left="-9999px",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}Et.value=K.value.copied||"Link copied",Fn&&clearTimeout(Fn),Fn=setTimeout(()=>{Et.value="",Fn=null},2200)}catch(m){console.warn("Failed to copy share link",m)}}function ls(o){const d=Xe(o);return Z.value[d]||o}function vr(o){return X.value[o]||o}function nl(o){const d=o.split(`
`),m={},y={},A={};let q=null,re=null,Me=null,we="en",ze=[];const Ye=()=>{(q||re)&&[q,re].filter(Boolean).forEach(Ne=>{m[Ne]=m[Ne]||{},m[Ne][we]=ze.join(`
`).trim(),Me&&(A[Ne]=Me)}),ze=[],Me=null,re=null};for(const Ie of d){const Ne=Ie.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Ne){Ye();const[,De,We,Mt]=Ne;q=Xe(Mt||De),re=Xe(De),we=(We||"en").toLowerCase(),Me=Mt||null;continue}const un=q?Ie.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(un){const[,De,We]=un,Mt=(De||we||"en").toLowerCase(),_i=We.trim();[q,re].filter(Boolean).forEach(Be=>{y[Be]=y[Be]||{},y[Be][Mt]=_i});continue}q&&Ie.startsWith("- ")&&ze.push(Ie.replace(/^- /,"").trim())}return Ye(),{descriptionsByLocale:m,playlistIdsByKey:A,namesByLocale:y}}function tl(o){const d=rl(o),m=Xe(o),y=B.value[m];if(y)return y;const A=d[r.value];return A||(d.en?d.en:Object.values(d)[0]||"")}function il(o){const d=j.value[Xe(o)];return d||al(o)}function sl(o,d){const m=Xe(d);if(o[m])return o[m];const y=m.split(" ").filter(Boolean),A=y[y.length-1];return A&&o[A]?o[A]:""}function rl(o){const d=Xe(o),m=d.split(" ").filter(Boolean),y=[d],A=m[m.length-1];A&&A!==d&&y.push(A);for(const q of y)if(Je[q])return Je[q];return{}}function ol(o){return Xe(o).replace(/\s+/g,"-").replace(/-+/g,"-")}function al(o){const d=s[r.value]||s.en,m=r.value==="ru"?ls(o):"";if(r.value==="ru"&&m)return`${m} - ${d}`;const y=String(o||"").trim().split(/\s+/).filter(Boolean);if(!y.length)return"";const A=y[y.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(A)&&y.length>=2?y[y.length-2]:A} ${d}`}function ll(o){const d=[],m=ol(o);m&&!d.includes(m)&&d.push(m);const y=sl(Ct,o);return y&&!d.includes(y)&&d.push(y),d}function vi(o=window.location.pathname){if(o.startsWith(Mi)){Q.value="composers";return}if(o==="/about"){Q.value="about";return}if(o==="/quiz"){Q.value="quiz";return}Q.value="composers"}const br=()=>gr();function bi(o){window.location.pathname!==o&&(history.pushState({},"",o),vi(o)),Y.value=!1}function cs(o){if(o==="about"){bi("/about");return}if(o==="quiz"){bi("/quiz");return}bi("/")}function cl(){Y.value=!Y.value}function ul(){Y.value=!1}function yr(o){yn.value!==o&&(yn.value=o)}function dl(){yr(!yn.value)}function yi(){if(typeof document>"u")return 0;const o=document.querySelector(".topbar");return o&&o.offsetHeight?o.offsetHeight:0}function Yn(){if(typeof window>"u")return{width:0,height:0,offsetLeft:0,offsetTop:0};const o=window.visualViewport;return o?{width:o.width,height:o.height,offsetLeft:o.offsetLeft||0,offsetTop:o.offsetTop||0}:{width:window.innerWidth,height:window.innerHeight,offsetLeft:0,offsetTop:0}}function Qn(o){const d=Re.value;if(!d||typeof window>"u")return o;const{width:m,offsetLeft:y}=Yn(),A=y+Ze,q=Math.max(A,y+m-d.offsetWidth-Ze);return Math.min(Math.max(o,A),q)}function Dn(o){const d=Re.value;if(!d||typeof window>"u")return o;const{height:m,offsetTop:y}=Yn(),A=Math.max(yi()+Ze,y+Ze),q=Math.max(A,y+m-d.offsetHeight-Ze);return Math.min(Math.max(o,A),q)}function Lt(){const o=Re.value;if(xe.value==null&&o&&typeof window<"u"){const{height:d,offsetTop:m}=Yn();xe.value=Dn(m+d-o.offsetHeight-24)}Oe.value=Qn(Oe.value),xe.value!=null&&(xe.value=Dn(xe.value))}function us(){Lt(),b.value="top-right";const d=Re.value?.offsetWidth||0,{width:m,offsetLeft:y,offsetTop:A}=Yn();Oe.value=Qn(y+m-d-Ze);const q=yi()+xs+As;xe.value=Dn(A+q)}function jt(){Lt(),b.value="bottom-left";const d=Re.value?.offsetHeight||0,{height:m,offsetTop:y}=Yn();Oe.value=Qn(Ze),xe.value=Dn(y+m-d-Ze)}function wr(){Lt(),b.value="top-left";const{offsetTop:o}=Yn(),d=yi()+xs+As;Oe.value=Qn(Ze),xe.value=Dn(o+d)}function kr(){Lt(),b.value="bottom-right";const o=Re.value,d=o?.offsetWidth||0,m=o?.offsetHeight||0,{width:y,height:A,offsetLeft:q,offsetTop:re}=Yn();Oe.value=Qn(q+y-d-Ze),xe.value=Dn(re+A-m-Ze)}function hl(){const o=Re.value;if(!o)return;const{width:d,height:m,offsetLeft:y,offsetTop:A}=Yn(),q=yi()+xs+As,re=Qn(Ze),Me=Qn(y+d-o.offsetWidth-Ze),we=Dn(A+q),ze=Dn(A+m-o.offsetHeight-Ze),Ye=Oe.value,Ie=xe.value??0,Ne=[{anchor:"top-left",dx:Ye-re,dy:Ie-we},{anchor:"top-right",dx:Ye-Me,dy:Ie-we},{anchor:"bottom-left",dx:Ye-re,dy:Ie-ze},{anchor:"bottom-right",dx:Ye-Me,dy:Ie-ze}];Ne.sort((De,We)=>De.dx*De.dx+De.dy*De.dy-(We.dx*We.dx+We.dy*We.dy));const un=Ne[0]?.anchor;if(un==="top-left"){wr();return}if(un==="top-right"){us();return}if(un==="bottom-left"){jt();return}kr()}function _r(o){if(!_.active||o.pointerId!==_.pointerId)return;o.preventDefault();const d=o.clientX-_.startX,m=o.clientY-_.startY;Oe.value=Qn(_.startLeft+d),xe.value!=null&&(xe.value=Dn(_.startTop+m))}function Sr(){window.removeEventListener("pointermove",_r),window.removeEventListener("pointerup",wi),window.removeEventListener("pointercancel",wi)}function Cr(o){const d=_.element;if(_.active=!1,_.element=null,_.pointerId=null,d?.releasePointerCapture&&o!=null)try{d.releasePointerCapture(o)}catch{}}function wi(o){!_.active||o.pointerId!==_.pointerId||(Sr(),Cr(o.pointerId),hl())}function fl(){_.active&&(Sr(),Cr(_.pointerId))}function ml(o){const d=o.timeStamp||Date.now();d-En<=wm&&o.preventDefault(),En=d}function pl(o){if(_.active||o.pointerType==="mouse"&&o.button!==0)return;const d=o.target;if(d&&typeof d.closest=="function"&&d.closest("button, a, input, select, textarea, label, [role='button'], .filter-panel"))return;Lt(),b.value="free",o.preventDefault(),_.active=!0,_.pointerId=o.pointerId,_.startX=o.clientX,_.startY=o.clientY,_.startLeft=Oe.value,_.startTop=xe.value??0,_.element=Re.value;const y=Re.value;if(y?.setPointerCapture)try{y.setPointerCapture(o.pointerId)}catch{}window.addEventListener("pointermove",_r),window.addEventListener("pointerup",wi),window.addEventListener("pointercancel",wi)}function Tr(o){!o||!o.touches||o.touches.length===2&&(S.active=!0,S.startDistance=x(o.touches[0],o.touches[1]))}function Er(o){if(!S.active||!o||!o.touches||o.touches.length!==2)return;o.preventDefault();const d=x(o.touches[0],o.touches[1]),m=S.startDistance||d,y=m?d/m:1;if(y>=Sm){ie(1),S.startDistance=d;return}y<=_m&&(ie(-1),S.startDistance=d)}function ki(o){(o?.touches?.length??0)<2&&(S.active=!1,S.startDistance=0)}function zr(){f()&&!yn.value&&yr(!0)}function Lr(){jt()}function gl(){Nn()}function Nn(){if(b.value==="top-left"){wr();return}if(b.value==="top-right"){us();return}if(b.value==="bottom-right"){kr();return}if(b.value==="bottom-left"){jt();return}Lt()}function $t(o,{persist:d=!1}={}){const m=t.includes(o)?o:Pt;if(r.value=m,d)try{localStorage.setItem(Lo,m),localStorage.setItem(Mo,"1")}catch{}}function vl(o){i.value=!0,$t(o,{persist:!0})}function bl(o){const d=o?.target?.value;d&&vl(d)}function yl(){try{return localStorage.getItem(Lo)}catch{return null}}function wl(){try{const o=localStorage.getItem(xo);return o?ct(JSON.parse(o)):null}catch{return null}}function kl(){const o=wl();o&&(on.value=o)}function _l(){try{return localStorage.getItem(Mo)==="1"}catch{return!1}}function Sl(){const o=yl(),d=_l();if($t(Pt),o&&d&&t.includes(o)){i.value=!0,$t(o);return}Cl()}async function Cl(){const o=!i.value;o||(r.value,void 0);const d=[Tl,El];for(const m of d){const y=await m();if(y){const A=String(y).toUpperCase();if(!o)return;const q=A==="RU"?"ru":["DE","AT","CH"].includes(A)?"de":Pt;$t(q);return}}o&&$t(Pt)}async function Tl(){try{const o=await fetch("https://ipapi.co/json/");return o.ok&&(await o.json())?.country_code||null}catch(o){console.warn("ipapi lookup failed:",o)}return null}async function El(){try{const o=await fetch("https://ipwho.is/");return o.ok&&(await o.json())?.country_code||null}catch(o){console.warn("ipwho.is lookup failed:",o)}return null}function Lm(o,d){}function Mr(){bi("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function ds(o){const d=o.detail,m=d?.laneIndex;if(Number.isInteger(m)&&Se.value[m]){Te.value=m;return}const y=d?.composer?.name;if(!y)return;const A=Se.value.findIndex(q=>q.name===y);A>=0&&(Te.value=A)}function xr(){Te.value=null}function Ar(){!zt.value||Te.value===null||(Te.value-=1)}function Pr(){!as.value||Te.value===null||(Te.value+=1)}ts(async()=>{Sl(),kl(),await gr(),await _n(),jt(),typeof ResizeObserver<"u"&&(u=new ResizeObserver(gl),Re.value&&u.observe(Re.value)),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(ds),window.addEventListener("popstate",br),window.addEventListener("composer-select",ds),window.addEventListener("resize",Nn),window.visualViewport&&(window.visualViewport.addEventListener("resize",Nn),window.visualViewport.addEventListener("scroll",Nn)),Nn();const o=document.getElementById("timeline");o&&(o.addEventListener("scroll",de,{passive:!0}),o.addEventListener("timeline-pan-start",zr),o.addEventListener("touchstart",Tr,{passive:!0}),o.addEventListener("touchmove",Er,{passive:!1}),o.addEventListener("touchend",ki,{passive:!0}),o.addEventListener("touchcancel",ki,{passive:!0}),de())}),pi(()=>{window.removeEventListener("popstate",br),window.removeEventListener("composer-select",ds),window.removeEventListener("resize",Nn),window.visualViewport&&(window.visualViewport.removeEventListener("resize",Nn),window.visualViewport.removeEventListener("scroll",Nn)),u&&(u.disconnect(),u=null),fl(),Fn&&(clearTimeout(Fn),Fn=null);const o=document.getElementById("timeline");o&&(o.removeEventListener("scroll",de),o.removeEventListener("timeline-pan-start",zr),o.removeEventListener("touchstart",Tr),o.removeEventListener("touchmove",Er),o.removeEventListener("touchend",ki),o.removeEventListener("touchcancel",ki))}),Ke(h,o=>{o&&(document.title=o)},{immediate:!0}),Ke(on,o=>{try{localStorage.setItem(xo,JSON.stringify(o))}catch{}},{deep:!0}),Ke(r,async o=>{const d=t.includes(o)?o:Pt;if(d!==o){r.value=d;return}try{document.documentElement.setAttribute("data-lang",d)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(M.value),await _n(),Nn()}),Ke(Vt,async o=>{o?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await _n(),Hn.value.length&&Ir()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",Rr())}),Ke(Te,o=>{const d=window.timeline;!d||typeof d.setSelectedLane!="function"||(Number.isInteger(o)?d.setSelectedLane(o):d.setSelectedLane(null))}),Ke(Te,o=>{if(Gt.value)return;if(Number.isInteger(o)&&Se.value[o]){const m=Se.value[o].name,y=pr(m);window.location.pathname!==y&&(history.pushState({},"",y),vi(y));return}const d=Q.value==="about"?"/about":Q.value==="quiz"?"/quiz":"/";window.location.pathname!==d&&(history.replaceState({},"",d),vi(d))}),Ke(Hn,async o=>{Vt.value&&(Rr(),await _n(),o.length&&Ir())}),Ke(()=>Se.value.map(o=>o.name),o=>{if(Te.value===null)return;const d=w.value;if(!d){Te.value=null;return}const m=o.findIndex(y=>y===d.name);m===-1?Te.value=null:Te.value=m});function hs(o){return o?be?be.endsWith("/")&&o.startsWith("/")?be+o.slice(1):!be.endsWith("/")&&!o.startsWith("/")?`${be}/${o}`:be+o:o:be}function zl(o){if(!o)return"";const d=_e;if(!d)return"";const m=d.endsWith("/");return`${d}${m?"":"/"}${o}`}function Rr(){le.forEach(o=>{try{o.pause(),o.currentTime=0}catch(d){console.error("Failed to stop SoundCloud audio",d)}}),le.clear()}function Ir(o,d=document){const y=(d||document).querySelectorAll("[data-soundcloud-playlist]");y.length&&(y.length,y.forEach(A=>{Ll(A,()=>{})}))}async function Ll(o,d){const m=()=>{typeof d=="function"&&setTimeout(()=>d(),0)};if(!o||o.dataset.soundcloudReady==="true"||o.dataset.soundcloudReady==="loading"||o.dataset.soundcloudReady==="error"){m();return}const y=o.getAttribute("data-soundcloud-playlist"),A=o.getAttribute("data-soundcloud-playlist-alt")||"",q=[y,...A.split("|")].map(we=>(we||"").trim()).filter(Boolean);if(!q.length){m();return}o.dataset.soundcloudReady="loading",o.innerHTML=Ml();let re=null;for(const we of q)try{const ze=await Al(we),Ye=Array.isArray(ze.tracks)&&ze.tracks.length?ze.tracks:ze&&ze.kind==="track"?[ze]:[],Ie=Pl(Ye);Fl(o,Ie,we),m();return}catch(ze){if(re=ze,ze&&ze.status===429){Fr(o,we),m();return}}console.error("Failed to build SoundCloud player",re);const Me=q[0]||ae;Fr(o,Me),m()}function Ml(){return`
    <div class="sc-player__status">
      <span class="sc-player__spinner" aria-hidden="true"></span>
      <span class="sc-player__status-text">${V.value}</span>
    </div>
  `.trim()}async function xl(o){if(!o)throw new Error("No track provided");const d=o.media&&Array.isArray(o.media.transcodings)?o.media.transcodings:[];if(d.length){let m=d.find(y=>y&&y.format&&y.format.protocol==="progressive");if(m||(m=d[0]),m&&m.url)try{const y=await Rl(m.url,o.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:o.id,transcodingUrl:m.url,finalUrl:y}),y}catch(y){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",y)}}if(!o.id)throw new Error("No track id provided");return Il(o.id,o.track_authorization)}async function Al(o){const d=hs("/api/soundcloud/playlist")+`?url=${encodeURIComponent(o)}`,m=await fetch(d);if(!m.ok){const y=new Error(`SoundCloud playlist error: ${m.status}`);throw y.status=m.status,y.retryAfter=Number(m.headers?.get("Retry-After"))||void 0,y}return m.json()}function Pl(o=[]){return Array.isArray(o)?o.map((d,m)=>{if(!d)return null;const y=`Track ${m+1}`,q=[d.title,d.publisher_metadata?.release_title,d.permalink,d.permalink_url,d.id?String(d.id):null].map(re=>typeof re=="string"?re.trim():"").filter(Boolean)[0]||y;return{...d,title:q}}).filter(Boolean):[]}async function Rl(o,d){const m=new URLSearchParams;m.set("url",o),d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const y=hs("/api/soundcloud/transcoding")+`?${m.toString()}`,A=await fetch(y);if(!A.ok){const re=new Error(`SoundCloud transcoding error: ${A.status}`);throw re.status=A.status,re.retryAfter=Number(A.headers?.get("Retry-After"))||void 0,re}const q=await A.json();if(!q?.url)throw new Error("Transcoding response missing url");return q.url}async function Il(o,d){const m=new URLSearchParams;d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const y=m.toString(),A=hs(`/api/soundcloud/streams/${o}`)+(y?`?${y}`:""),q=await fetch(A);if(!q.ok){const Me=new Error(`SoundCloud stream error: ${q.status}`);throw Me.status=q.status,Me.retryAfter=Number(q.headers?.get("Retry-After"))||void 0,Me}const re=await q.json();if(!re?.url)throw new Error("Stream response missing url");return re.url}function Fr(o,d){const m=`https://w.soundcloud.com/player/?url=${encodeURIComponent(d)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;o.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${m}"
    ></iframe>
  `,o.dataset.soundcloudReady="true"}function Fl(o,d,m){if(!Array.isArray(d)||!d.length){o.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',o.dataset.soundcloudReady="error";return}o.classList.add("sc-player");const y=document.createElement("div");y.className="sc-track-list";const A=document.createElement("audio");A.preload="none",le.add(A);let q=null,re=null,Me=null,we=null,ze=!1;const Ye=[],Ie=[],Ne=(me,Be)=>{me.dataset.state=Be,me.textContent=Be==="playing"?"⏸":Be==="loading"?"...":"▶️"},un=(me,Be)=>{me&&me.classList.toggle("is-playing",Be)},De=me=>{if(!me)return;const Be=me.querySelector(".sc-track__title-text");if(!Be)return;const kn=Be.scrollWidth-me.clientWidth;kn>4?(me.dataset.scroll="true",me.style.setProperty("--scroll-distance",`${kn}px`)):(me.dataset.scroll="false",me.style.removeProperty("--scroll-distance"))},We=me=>Ne(me,"idle"),Mt=()=>{re&&We(re),we&&un(we,!1),q=null,re=null,Me=null,we=null};A.addEventListener("ended",()=>{const me=Me===null?-1:Me+1;if(me>=0&&me<d.length){_i(me,{auto:!0});return}Mt()}),A.addEventListener("pause",()=>{re&&A.currentTime<(A.duration||1/0)&&We(re),we&&un(we,!1)});const _i=async(me,{auto:Be=!1}={})=>{if(ze)return;const kn=d[me],Qe=Ye[me];if(!(!kn||!Qe)){if(!Be&&Me===me&&!A.paused){A.pause(),We(Qe);return}ze=!0,Ne(Qe,"loading");try{const Wn=await xl(kn);if(!Wn)throw new Error("No stream URL returned");A.src=Wn,await A.play(),Ol(kn),re&&re!==Qe&&We(re),re=Qe,q=kn?.id??me,Me=me,we&&we!==Ie[me]&&un(we,!1),we=Ie[me]||null,un(we,!0),Ne(Qe,"playing")}catch(Wn){console.error("Failed to play SoundCloud track",Wn),We(Qe),o.dataset.soundcloudReady="error"}finally{ze=!1}}};d.forEach((me,Be)=>{const kn=document.createElement("div");kn.className="sc-track";const Qe=document.createElement("button");Qe.type="button",Qe.className="sc-track__button",Qe.setAttribute("aria-label","Play track"),Ne(Qe,"idle"),Ye.push(Qe);const Wn=document.createElement("div");Wn.className="sc-track__title";const fs=document.createElement("span");fs.className="sc-track__title-text",fs.textContent=me?.title||`Track ${Be+1}`,Wn.append(fs),Ie.push(Wn),kn.append(Qe,Wn),y.append(kn),Qe.addEventListener("click",()=>{_i(Be)})}),o.innerHTML="",o.append(y,A),requestAnimationFrame(()=>{Ie.forEach(me=>De(me))}),o.dataset.soundcloudReady="true"}function Ol(o){if(!("mediaSession"in navigator)||typeof MediaMetadata>"u")return;const d=o?.title||"Classical Music",m=o?.publisher_metadata?.artist||o?.user?.username||o?.user?.full_name||"",y=o?.publisher_metadata?.album_title||"";navigator.mediaSession.metadata=new MediaMetadata({title:d,artist:m,album:y,artwork:[{src:"/images/about_music_logo.png",type:"image/png"}]})}return(o,d)=>(se(),oe("div",ff,[v("header",mf,[v("button",{class:"menu-button",onClick:cl,"aria-label":"Toggle navigation menu"},[...d[7]||(d[7]=[v("span",{class:"menu-icon"},null,-1)])]),v("img",{class:"logo",src:fd,alt:"Logo",onClick:Mr}),v("div",{class:"app-title",role:"button",onClick:Mr},I(h.value),1),v("div",pf,[v("label",gf,I(g.value),1),Ds(v("select",{id:"language-select",class:"language-select","onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m),"aria-label":g.value,onChange:bl},[(se(!0),oe($e,null,Dt(p.value,m=>(se(),oe("option",{key:m.value,value:m.value},I(m.label),9,bf))),128))],40,vf),[[sd,r.value]])])]),v("aside",{class:hn(["side-menu",{"side-menu--open":Y.value}])},[v("nav",yf,[v("button",{class:hn(["menu-item",{"menu-item--active":Q.value==="composers"}]),onClick:d[1]||(d[1]=m=>cs("composers"))},I(E.value.composers),3),v("button",{class:hn(["menu-item",{"menu-item--active":Q.value==="quiz"}]),onClick:d[2]||(d[2]=m=>cs("quiz"))},I(E.value.quiz),3),v("button",{class:hn(["menu-item",{"menu-item--active":Q.value==="about"}]),onClick:d[3]||(d[3]=m=>cs("about"))},I(E.value.about),3)])],2),Y.value?(se(),oe("div",{key:0,class:"backdrop",onClick:ul})):nn("",!0),v("main",wf,[Q.value==="composers"?(se(),oe("section",kf,[v("div",{class:"filter-dock",style:wt(C.value),ref_key:"filterDockRef",ref:Re,onPointerdown:pl,onTouchend:ml},[v("div",_f,[v("div",Sf,[v("button",{type:"button",class:"filter-dock__collapse control-btn","aria-pressed":yn.value,"aria-label":yn.value?bn.value.restore:bn.value.minimize,onClick:dl},[v("img",{src:yn.value?"/images/window-maximize.svg":"/images/window-minimize.svg",alt:"","aria-hidden":"true"},null,8,Tf)],8,Cf)]),qe(no,{name:"filter-dock-collapse",onAfterEnter:Lr,onAfterLeave:Lr},{default:Hs(()=>[yn.value?nn("",!0):(se(),oe("div",Ef,[v("div",zf,[v("div",Lf,[v("button",{type:"button",class:"control-btn",disabled:R.value,onClick:ce,"aria-label":"Jump to start of timeline"}," ⇤ ",8,Mf),v("button",{type:"button",class:"control-btn",disabled:T.value,onClick:d[4]||(d[4]=m=>ie(-1)),"aria-label":"Make timeline blocks smaller"},[...d[8]||(d[8]=[v("img",{class:"control-icon",src:md,alt:"","aria-hidden":"true"},null,-1)])],8,xf),v("button",{type:"button",class:"control-btn",disabled:$.value,onClick:d[5]||(d[5]=m=>ie(1)),"aria-label":"Make timeline blocks larger"},[...d[9]||(d[9]=[v("img",{class:"control-icon",src:pd,alt:"","aria-hidden":"true"},null,-1)])],8,Af),v("button",{type:"button",class:"control-btn",disabled:G.value,onClick:Fe,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Pf)]),v("div",Rf,[v("div",If,[(se(),oe($e,null,Dt(fe,m=>v("label",{key:m.id,class:"filter-panel__item"},[Ds(v("input",{"onUpdate:modelValue":y=>on.value[m.id]=y,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${vr(m.id)}`,onChange:ln},null,40,Ff),[[Ga,on.value[m.id]]]),v("span",Of,I(vr(m.id)),1)])),64))])])])]))]),_:1})])],36),qe(Hd,{composers:Se.value,settings:L,"era-labels":M.value},null,8,["composers","settings","era-labels"])])):Q.value==="about"?(se(),Vs(ih,{key:1,language:r.value,"test-features-enabled":a.value,"onUpdate:testFeaturesEnabled":d[6]||(d[6]=m=>a.value=m)},null,8,["language","test-features-enabled"])):Q.value==="quiz"?(se(),Vs(df,{key:2,language:r.value,"composer-names":Z.value,"era-labels":M.value},null,8,["language","composer-names","era-labels"])):nn("",!0)]),qe(no,{name:"fade"},{default:Hs(()=>[Vt.value?(se(),oe("div",{key:0,class:"composer-modal",onClick:ad(xr,["self"])},[v("div",Hf,[v("header",Df,[v("div",Nf,[v("h2",Wf,I(N.value),1),w.value?(se(),oe("p",Bf,I(w.value.birth)+" — "+I(w.value.death),1)):nn("",!0)]),v("div",Kf,[v("button",{class:"composer-modal__share",type:"button",onClick:el,"aria-label":K.value.button},[...d[10]||(d[10]=[v("img",{class:"composer-modal__share-icon",src:gd,alt:""},null,-1)])],8,Gf),Et.value?(se(),oe("span",Vf,I(Et.value),1)):nn("",!0),v("div",jf,[v("button",{class:"composer-modal__arrow",onClick:Ar,disabled:!zt.value,"aria-label":"Previous"}," ← ",8,$f),v("span",qf,I((Te.value??0)+1)+" / "+I(Se.value.length),1),v("button",{class:"composer-modal__arrow",onClick:Pr,disabled:!as.value,"aria-label":"Next"}," → ",8,Uf)]),v("button",{class:"composer-modal__close",onClick:xr,"aria-label":"Close composer details"},"×")])]),v("div",Jf,[ne.value?(se(),oe("div",Xf,[v("img",{class:"composer-modal__photo",src:ne.value,alt:N.value},null,8,Yf),v("div",Qf,[v("button",{class:"composer-modal__arrow",onClick:Ar,disabled:!zt.value,"aria-label":"Previous"}," ← ",8,Zf),v("span",em,I((Te.value??0)+1)+" / "+I(Se.value.length),1),v("button",{class:"composer-modal__arrow",onClick:Pr,disabled:!as.value,"aria-label":"Next"}," → ",8,nm)]),v("div",tm,[v("div",im,I(N.value),1),w.value?(se(),oe("div",sm,I(w.value.birth)+" — "+I(w.value.death),1)):nn("",!0)])])):nn("",!0),v("div",rm,[v("div",om,[v("div",am,I(ee.value.keyWorks),1),Hn.value.length?(se(),oe("a",lm,[...d[11]||(d[11]=[v("img",{class:"sc-powered__img",src:vd,alt:"Powered by SoundCloud"},null,-1)])])):nn("",!0)]),Hn.value.length?(se(),oe("div",{key:Hn.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":Hn.value[0],"data-soundcloud-playlist-alt":Hn.value.slice(1).join("|")},[v("div",um,[d[12]||(d[12]=v("span",{class:"sc-player__spinner","aria-hidden":"true"},null,-1)),v("span",dm,I(V.value),1)])],8,cm)):(se(),oe("div",hm," Playlist will appear here soon. "))]),v("div",fm,[On.value?(se(),oe("div",mm,I(On.value),1)):nn("",!0),Ae.value?(se(),oe("ul",pm,[(se(!0),oe($e,null,Dt(Ae.value.split(`
`),(m,y)=>(se(),oe("li",{key:y},[v("span",gm,I(m),1)]))),128))])):(se(),oe("p",vm,"No description yet."))])])])])):nn("",!0)]),_:1})]))}},zm=os(Em,[["__scopeId","data-v-b8de2eef"]]);ud(zm).mount("#app");
