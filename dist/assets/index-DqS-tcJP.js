(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Rs(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const fe={},gt=[],gn=()=>{},So=()=>!1,Ai=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Fs=e=>e.startsWith("onUpdate:"),ze=Object.assign,Is=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Cl=Object.prototype.hasOwnProperty,le=(e,n)=>Cl.call(e,n),N=Array.isArray,bt=e=>$t(e)==="[object Map]",Tt=e=>$t(e)==="[object Set]",Tr=e=>$t(e)==="[object Date]",G=e=>typeof e=="function",ye=e=>typeof e=="string",bn=e=>typeof e=="symbol",ue=e=>e!==null&&typeof e=="object",_o=e=>(ue(e)||G(e))&&G(e.then)&&G(e.catch),To=Object.prototype.toString,$t=e=>To.call(e),El=e=>$t(e).slice(8,-1),Co=e=>$t(e)==="[object Object]",Hs=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pt=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pi=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Ml=/-\w/g,$n=Pi(e=>e.replace(Ml,n=>n.slice(1).toUpperCase())),xl=/\B([A-Z])/g,ut=Pi(e=>e.replace(xl,"-$1").toLowerCase()),Eo=Pi(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zi=Pi(e=>e?`on${Eo(e)}`:""),Un=(e,n)=>!Object.is(e,n),pi=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Mo=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},xo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Ll=e=>{const n=ye(e)?Number(e):NaN;return isNaN(n)?e:n};let Cr;const Ri=()=>Cr||(Cr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Fi(e){if(N(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=ye(i)?Rl(i):Fi(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(ye(e)||ue(e))return e}const zl=/;(?![^(]*\))/g,Al=/:([^]+)/,Pl=/\/\*[^]*?\*\//g;function Rl(e){const n={};return e.replace(Pl,"").split(zl).forEach(t=>{if(t){const i=t.split(Al);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function vt(e){let n="";if(ye(e))n=e;else if(N(e))for(let t=0;t<e.length;t++){const i=vt(e[t]);i&&(n+=i+" ")}else if(ue(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Fl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Il=Rs(Fl);function Lo(e){return!!e||e===""}function Hl(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=Jt(e[i],n[i]);return t}function Jt(e,n){if(e===n)return!0;let t=Tr(e),i=Tr(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=bn(e),i=bn(n),t||i)return e===n;if(t=N(e),i=N(n),t||i)return t&&i?Hl(e,n):!1;if(t=ue(e),i=ue(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),c=n.hasOwnProperty(o);if(l&&!c||!l&&c||!Jt(e[o],n[o]))return!1}}return String(e)===String(n)}function Os(e,n){return e.findIndex(t=>Jt(t,n))}const zo=e=>!!(e&&e.__v_isRef===!0),oe=e=>ye(e)?e:e==null?"":N(e)||ue(e)&&(e.toString===To||!G(e.toString))?zo(e)?oe(e.value):JSON.stringify(e,Ao,2):String(e),Ao=(e,n)=>zo(n)?Ao(e,n.value):bt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[Qi(i,r)+" =>"]=s,t),{})}:Tt(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Qi(t))}:bn(n)?Qi(n):ue(n)&&!N(n)&&!Co(n)?String(n):n,Qi=(e,n="")=>{var t;return bn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let Je;class Ol{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Je,!n&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=Je;try{return Je=this,n()}finally{Je=t}}}on(){++this._on===1&&(this.prevScope=Je,Je=this)}off(){this._on>0&&--this._on===0&&(Je=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Dl(){return Je}let ge;const es=new WeakSet;class Po{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Je&&Je.active&&Je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,es.has(this)&&(es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Er(this),Io(this);const n=ge,t=ln;ge=this,ln=!0;try{return this.fn()}finally{Ho(this),ge=n,ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Bs(n);this.deps=this.depsTail=void 0,Er(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bs(this)&&this.run()}get dirty(){return bs(this)}}let Ro=0,Rt,Ft;function Fo(e,n=!1){if(e.flags|=8,n){e.next=Ft,Ft=e;return}e.next=Rt,Rt=e}function Ds(){Ro++}function Ns(){if(--Ro>0)return;if(Ft){let n=Ft;for(Ft=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Rt;){let n=Rt;for(Rt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function Io(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ho(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Bs(i),Nl(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function bs(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Oo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Oo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Nt)||(e.globalVersion=Nt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!bs(e))))return;e.flags|=2;const n=e.dep,t=ge,i=ln;ge=e,ln=!0;try{Io(e);const s=e.fn(e._value);(n.version===0||Un(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{ge=t,ln=i,Ho(e),e.flags&=-3}}function Bs(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Bs(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Nl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let ln=!0;const Do=[];function zn(){Do.push(ln),ln=!1}function An(){const e=Do.pop();ln=e===void 0?!0:e}function Er(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=ge;ge=void 0;try{n()}finally{ge=t}}}let Nt=0;class Bl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ws{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!ge||!ln||ge===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ge)t=this.activeLink=new Bl(ge,this),ge.deps?(t.prevDep=ge.depsTail,ge.depsTail.nextDep=t,ge.depsTail=t):ge.deps=ge.depsTail=t,No(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ge.depsTail,t.nextDep=void 0,ge.depsTail.nextDep=t,ge.depsTail=t,ge.deps===t&&(ge.deps=i)}return t}trigger(n){this.version++,Nt++,this.notify(n)}notify(n){Ds();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ns()}}}function No(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)No(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const vs=new WeakMap,at=Symbol(""),ys=Symbol(""),Bt=Symbol("");function Fe(e,n,t){if(ln&&ge){let i=vs.get(e);i||vs.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new Ws),s.map=i,s.key=t),s.track()}}function xn(e,n,t,i,s,r){const o=vs.get(e);if(!o){Nt++;return}const l=c=>{c&&c.trigger()};if(Ds(),n==="clear")o.forEach(l);else{const c=N(e),p=c&&Hs(t);if(c&&t==="length"){const h=Number(i);o.forEach((b,S)=>{(S==="length"||S===Bt||!bn(S)&&S>=h)&&l(b)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),p&&l(o.get(Bt)),n){case"add":c?p&&l(o.get("length")):(l(o.get(at)),bt(e)&&l(o.get(ys)));break;case"delete":c||(l(o.get(at)),bt(e)&&l(o.get(ys)));break;case"set":bt(e)&&l(o.get(at));break}}Ns()}function ht(e){const n=ae(e);return n===e?n:(Fe(n,"iterate",Bt),on(e)?n:n.map(cn))}function Ii(e){return Fe(e=ae(e),"iterate",Bt),e}function Bn(e,n){return Pn(e)?lt(e)?_t(cn(n)):_t(n):cn(n)}const Wl={__proto__:null,[Symbol.iterator](){return ns(this,Symbol.iterator,e=>Bn(this,e))},concat(...e){return ht(this).concat(...e.map(n=>N(n)?ht(n):n))},entries(){return ns(this,"entries",e=>(e[1]=Bn(this,e[1]),e))},every(e,n){return _n(this,"every",e,n,void 0,arguments)},filter(e,n){return _n(this,"filter",e,n,t=>t.map(i=>Bn(this,i)),arguments)},find(e,n){return _n(this,"find",e,n,t=>Bn(this,t),arguments)},findIndex(e,n){return _n(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return _n(this,"findLast",e,n,t=>Bn(this,t),arguments)},findLastIndex(e,n){return _n(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return _n(this,"forEach",e,n,void 0,arguments)},includes(...e){return ts(this,"includes",e)},indexOf(...e){return ts(this,"indexOf",e)},join(e){return ht(this).join(e)},lastIndexOf(...e){return ts(this,"lastIndexOf",e)},map(e,n){return _n(this,"map",e,n,void 0,arguments)},pop(){return xt(this,"pop")},push(...e){return xt(this,"push",e)},reduce(e,...n){return Mr(this,"reduce",e,n)},reduceRight(e,...n){return Mr(this,"reduceRight",e,n)},shift(){return xt(this,"shift")},some(e,n){return _n(this,"some",e,n,void 0,arguments)},splice(...e){return xt(this,"splice",e)},toReversed(){return ht(this).toReversed()},toSorted(e){return ht(this).toSorted(e)},toSpliced(...e){return ht(this).toSpliced(...e)},unshift(...e){return xt(this,"unshift",e)},values(){return ns(this,"values",e=>Bn(this,e))}};function ns(e,n,t){const i=Ii(e),s=i[n]();return i!==e&&!on(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Kl=Array.prototype;function _n(e,n,t,i,s,r){const o=Ii(e),l=o!==e&&!on(e),c=o[n];if(c!==Kl[n]){const b=c.apply(e,r);return l?cn(b):b}let p=t;o!==e&&(l?p=function(b,S){return t.call(this,Bn(e,b),S,e)}:t.length>2&&(p=function(b,S){return t.call(this,b,S,e)}));const h=c.call(o,p,i);return l&&s?s(h):h}function Mr(e,n,t,i){const s=Ii(e);let r=t;return s!==e&&(on(e)?t.length>3&&(r=function(o,l,c){return t.call(this,o,l,c,e)}):r=function(o,l,c){return t.call(this,o,Bn(e,l),c,e)}),s[n](r,...i)}function ts(e,n,t){const i=ae(e);Fe(i,"iterate",Bt);const s=i[n](...t);return(s===-1||s===!1)&&Vs(t[0])?(t[0]=ae(t[0]),i[n](...t)):s}function xt(e,n,t=[]){zn(),Ds();const i=ae(e)[n].apply(e,t);return Ns(),An(),i}const jl=Rs("__proto__,__v_isRef,__isVue"),Bo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bn));function Vl(e){bn(e)||(e=String(e));const n=ae(this);return Fe(n,"has",e),n.hasOwnProperty(e)}class Wo{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?ec:Go:r?Vo:jo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const o=N(n);if(!s){let c;if(o&&(c=Wl[t]))return c;if(t==="hasOwnProperty")return Vl}const l=Reflect.get(n,t,He(n)?n:i);if((bn(t)?Bo.has(t):jl(t))||(s||Fe(n,"get",t),r))return l;if(He(l)){const c=o&&Hs(t)?l:l.value;return s&&ue(c)?ks(c):c}return ue(l)?s?ks(l):yt(l):l}}class Ko extends Wo{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const o=N(n)&&Hs(t);if(!this._isShallow){const p=Pn(r);if(!on(i)&&!Pn(i)&&(r=ae(r),i=ae(i)),!o&&He(r)&&!He(i))return p||(r.value=i),!0}const l=o?Number(t)<n.length:le(n,t),c=Reflect.set(n,t,i,He(n)?n:s);return n===ae(s)&&(l?Un(i,r)&&xn(n,"set",t,i):xn(n,"add",t,i)),c}deleteProperty(n,t){const i=le(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&xn(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!bn(t)||!Bo.has(t))&&Fe(n,"has",t),i}ownKeys(n){return Fe(n,"iterate",N(n)?"length":at),Reflect.ownKeys(n)}}class Gl extends Wo{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Ul=new Ko,$l=new Gl,Jl=new Ko(!0);const ws=e=>e,si=e=>Reflect.getPrototypeOf(e);function ql(e,n,t){return function(...i){const s=this.__v_raw,r=ae(s),o=bt(r),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,p=s[e](...i),h=t?ws:n?_t:cn;return!n&&Fe(r,"iterate",c?ys:at),{next(){const{value:b,done:S}=p.next();return S?{value:b,done:S}:{value:l?[h(b[0]),h(b[1])]:h(b),done:S}},[Symbol.iterator](){return this}}}}function ri(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Xl(e,n){const t={get(s){const r=this.__v_raw,o=ae(r),l=ae(s);e||(Un(s,l)&&Fe(o,"get",s),Fe(o,"get",l));const{has:c}=si(o),p=n?ws:e?_t:cn;if(c.call(o,s))return p(r.get(s));if(c.call(o,l))return p(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Fe(ae(s),"iterate",at),s.size},has(s){const r=this.__v_raw,o=ae(r),l=ae(s);return e||(Un(s,l)&&Fe(o,"has",s),Fe(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,c=ae(l),p=n?ws:e?_t:cn;return!e&&Fe(c,"iterate",at),l.forEach((h,b)=>s.call(r,p(h),p(b),o))}};return ze(t,e?{add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear")}:{add(s){!n&&!on(s)&&!Pn(s)&&(s=ae(s));const r=ae(this);return si(r).has.call(r,s)||(r.add(s),xn(r,"add",s,s)),this},set(s,r){!n&&!on(r)&&!Pn(r)&&(r=ae(r));const o=ae(this),{has:l,get:c}=si(o);let p=l.call(o,s);p||(s=ae(s),p=l.call(o,s));const h=c.call(o,s);return o.set(s,r),p?Un(r,h)&&xn(o,"set",s,r):xn(o,"add",s,r),this},delete(s){const r=ae(this),{has:o,get:l}=si(r);let c=o.call(r,s);c||(s=ae(s),c=o.call(r,s)),l&&l.call(r,s);const p=r.delete(s);return c&&xn(r,"delete",s,void 0),p},clear(){const s=ae(this),r=s.size!==0,o=s.clear();return r&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ql(s,e,n)}),t}function Ks(e,n){const t=Xl(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(le(t,s)&&s in i?t:i,s,r)}const Yl={get:Ks(!1,!1)},Zl={get:Ks(!1,!0)},Ql={get:Ks(!0,!1)};const jo=new WeakMap,Vo=new WeakMap,Go=new WeakMap,ec=new WeakMap;function nc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tc(e){return e.__v_skip||!Object.isExtensible(e)?0:nc(El(e))}function yt(e){return Pn(e)?e:js(e,!1,Ul,Yl,jo)}function ic(e){return js(e,!1,Jl,Zl,Vo)}function ks(e){return js(e,!0,$l,Ql,Go)}function js(e,n,t,i,s){if(!ue(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=tc(e);if(r===0)return e;const o=s.get(e);if(o)return o;const l=new Proxy(e,r===2?i:t);return s.set(e,l),l}function lt(e){return Pn(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pn(e){return!!(e&&e.__v_isReadonly)}function on(e){return!!(e&&e.__v_isShallow)}function Vs(e){return e?!!e.__v_raw:!1}function ae(e){const n=e&&e.__v_raw;return n?ae(n):e}function sc(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&Mo(e,"__v_skip",!0),e}const cn=e=>ue(e)?yt(e):e,_t=e=>ue(e)?ks(e):e;function He(e){return e?e.__v_isRef===!0:!1}function Le(e){return rc(e,!1)}function rc(e,n){return He(e)?e:new oc(e,n)}class oc{constructor(n,t){this.dep=new Ws,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ae(n),this._value=t?n:cn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||on(n)||Pn(n);n=i?n:ae(n),Un(n,t)&&(this._rawValue=n,this._value=i?n:cn(n),this.dep.trigger())}}function ac(e){return He(e)?e.value:e}const lc={get:(e,n,t)=>n==="__v_raw"?e:ac(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return He(s)&&!He(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function Uo(e){return lt(e)?e:new Proxy(e,lc)}class cc{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Ws(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return Fo(this,!0),!0}get value(){const n=this.dep.track();return Oo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function uc(e,n,t=!1){let i,s;return G(e)?i=e:(i=e.get,s=e.set),new cc(i,s,t)}const oi={},ki=new WeakMap;let it;function dc(e,n=!1,t=it){if(t){let i=ki.get(t);i||ki.set(t,i=[]),i.push(e)}}function hc(e,n,t=fe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:c}=t,p=I=>s?I:on(I)||s===!1||s===0?Ln(I,1):Ln(I);let h,b,S,C,z=!1,F=!1;if(He(e)?(b=()=>e.value,z=on(e)):lt(e)?(b=()=>p(e),z=!0):N(e)?(F=!0,z=e.some(I=>lt(I)||on(I)),b=()=>e.map(I=>{if(He(I))return I.value;if(lt(I))return p(I);if(G(I))return c?c(I,2):I()})):G(e)?n?b=c?()=>c(e,2):e:b=()=>{if(S){zn();try{S()}finally{An()}}const I=it;it=h;try{return c?c(e,3,[C]):e(C)}finally{it=I}}:b=gn,n&&s){const I=b,Q=s===!0?1/0:s;b=()=>Ln(I(),Q)}const se=Dl(),K=()=>{h.stop(),se&&se.active&&Is(se.effects,h)};if(r&&n){const I=n;n=(...Q)=>{I(...Q),K()}}let j=F?new Array(e.length).fill(oi):oi;const R=I=>{if(!(!(h.flags&1)||!h.dirty&&!I))if(n){const Q=h.run();if(s||z||(F?Q.some((de,U)=>Un(de,j[U])):Un(Q,j))){S&&S();const de=it;it=h;try{const U=[Q,j===oi?void 0:F&&j[0]===oi?[]:j,C];j=Q,c?c(n,3,U):n(...U)}finally{it=de}}}else h.run()};return l&&l(R),h=new Po(b),h.scheduler=o?()=>o(R,!1):R,C=I=>dc(I,!1,h),S=h.onStop=()=>{const I=ki.get(h);if(I){if(c)c(I,4);else for(const Q of I)Q();ki.delete(h)}},n?i?R(!0):j=h.run():o?o(R.bind(null,!0),!0):h.run(),K.pause=h.pause.bind(h),K.resume=h.resume.bind(h),K.stop=K,K}function Ln(e,n=1/0,t){if(n<=0||!ue(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,He(e))Ln(e.value,n,t);else if(N(e))for(let i=0;i<e.length;i++)Ln(e[i],n,t);else if(Tt(e)||bt(e))e.forEach(i=>{Ln(i,n,t)});else if(Co(e)){for(const i in e)Ln(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Ln(e[i],n,t)}return e}function qt(e,n,t,i){try{return i?e(...i):e()}catch(s){Hi(s,n,t)}}function un(e,n,t,i){if(G(e)){const s=qt(e,n,t,i);return s&&_o(s)&&s.catch(r=>{Hi(r,n,t)}),s}if(N(e)){const s=[];for(let r=0;r<e.length;r++)s.push(un(e[r],n,t,i));return s}}function Hi(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||fe;if(n){let l=n.parent;const c=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h){for(let b=0;b<h.length;b++)if(h[b](e,c,p)===!1)return}l=l.parent}if(r){zn(),qt(r,null,10,[e,c,p]),An();return}}fc(e,t,s,i,o)}function fc(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const Ke=[];let mn=-1;const wt=[];let Wn=null,pt=0;const $o=Promise.resolve();let Si=null;function Cn(e){const n=Si||$o;return e?n.then(this?e.bind(this):e):n}function mc(e){let n=mn+1,t=Ke.length;for(;n<t;){const i=n+t>>>1,s=Ke[i],r=Wt(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function Gs(e){if(!(e.flags&1)){const n=Wt(e),t=Ke[Ke.length-1];!t||!(e.flags&2)&&n>=Wt(t)?Ke.push(e):Ke.splice(mc(n),0,e),e.flags|=1,Jo()}}function Jo(){Si||(Si=$o.then(Xo))}function pc(e){N(e)?wt.push(...e):Wn&&e.id===-1?Wn.splice(pt+1,0,e):e.flags&1||(wt.push(e),e.flags|=1),Jo()}function xr(e,n,t=mn+1){for(;t<Ke.length;t++){const i=Ke[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Ke.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function qo(e){if(wt.length){const n=[...new Set(wt)].sort((t,i)=>Wt(t)-Wt(i));if(wt.length=0,Wn){Wn.push(...n);return}for(Wn=n,pt=0;pt<Wn.length;pt++){const t=Wn[pt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Wn=null,pt=0}}const Wt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Xo(e){try{for(mn=0;mn<Ke.length;mn++){const n=Ke[mn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),qt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;mn<Ke.length;mn++){const n=Ke[mn];n&&(n.flags&=-2)}mn=-1,Ke.length=0,qo(),Si=null,(Ke.length||wt.length)&&Xo()}}let rn=null,Yo=null;function _i(e){const n=rn;return rn=e,Yo=e&&e.type.__scopeId||null,n}function Ss(e,n=rn,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&Ei(-1);const r=_i(n);let o;try{o=e(...s)}finally{_i(r),i._d&&Ei(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function is(e,n){if(rn===null)return e;const t=ji(rn),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,o,l,c=fe]=n[s];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&Ln(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function Qn(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let c=l.dir[i];c&&(zn(),un(c,t,8,[e.el,l,e,n]),An())}}const gc=Symbol("_vte"),Zo=e=>e.__isTeleport,Mn=Symbol("_leaveCb"),ai=Symbol("_enterCb");function bc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ni(()=>{e.isMounted=!0}),Bi(()=>{e.isUnmounting=!0}),e}const sn=[Function,Array],Qo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},ea=e=>{const n=e.subTree;return n.component?ea(n.component):n},vc={name:"BaseTransition",props:Qo,setup(e,{slots:n}){const t=Ea(),i=bc();return()=>{const s=n.default&&ia(n.default(),!0);if(!s||!s.length)return;const r=na(s),o=ae(e),{mode:l}=o;if(i.isLeaving)return ss(r);const c=Lr(r);if(!c)return ss(r);let p=_s(c,o,i,t,b=>p=b);c.type!==je&&Kt(c,p);let h=t.subTree&&Lr(t.subTree);if(h&&h.type!==je&&!rt(h,c)&&ea(t).type!==je){let b=_s(h,o,i,t);if(Kt(h,b),l==="out-in"&&c.type!==je)return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete b.afterLeave,h=void 0},ss(r);l==="in-out"&&c.type!==je?b.delayLeave=(S,C,z)=>{const F=ta(i,h);F[String(h.key)]=h,S[Mn]=()=>{C(),S[Mn]=void 0,delete p.delayedLeave,h=void 0},p.delayedLeave=()=>{z(),delete p.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function na(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==je){n=t;break}}return n}const yc=vc;function ta(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function _s(e,n,t,i,s){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:h,onEnterCancelled:b,onBeforeLeave:S,onLeave:C,onAfterLeave:z,onLeaveCancelled:F,onBeforeAppear:se,onAppear:K,onAfterAppear:j,onAppearCancelled:R}=n,I=String(e.key),Q=ta(t,e),de=(W,ee)=>{W&&un(W,i,9,ee)},U=(W,ee)=>{const ie=ee[1];de(W,ee),N(W)?W.every(L=>L.length<=1)&&ie():W.length<=1&&ie()},te={mode:o,persisted:l,beforeEnter(W){let ee=c;if(!t.isMounted)if(r)ee=se||c;else return;W[Mn]&&W[Mn](!0);const ie=Q[I];ie&&rt(e,ie)&&ie.el[Mn]&&ie.el[Mn](),de(ee,[W])},enter(W){let ee=p,ie=h,L=b;if(!t.isMounted)if(r)ee=K||p,ie=j||h,L=R||b;else return;let q=!1;const he=W[ai]=Ce=>{q||(q=!0,Ce?de(L,[W]):de(ie,[W]),te.delayedLeave&&te.delayedLeave(),W[ai]=void 0)};ee?U(ee,[W,he]):he()},leave(W,ee){const ie=String(e.key);if(W[ai]&&W[ai](!0),t.isUnmounting)return ee();de(S,[W]);let L=!1;const q=W[Mn]=he=>{L||(L=!0,ee(),he?de(F,[W]):de(z,[W]),W[Mn]=void 0,Q[ie]===e&&delete Q[ie])};Q[ie]=e,C?U(C,[W,q]):q()},clone(W){const ee=_s(W,n,t,i,s);return s&&s(ee),ee}};return te}function ss(e){if(Oi(e))return e=Jn(e),e.children=null,e}function Lr(e){if(!Oi(e))return Zo(e.type)&&e.children?na(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&G(t.default))return t.default()}}function Kt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Kt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function ia(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const l=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===qe?(o.patchFlag&128&&s++,i=i.concat(ia(o.children,n,l))):(n||o.type!==je)&&i.push(l!=null?Jn(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function sa(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ti=new WeakMap;function It(e,n,t,i,s=!1){if(N(e)){e.forEach((z,F)=>It(z,n&&(N(n)?n[F]:n),t,i,s));return}if(Ht(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&It(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?ji(i.component):i.el,o=s?null:r,{i:l,r:c}=e,p=n&&n.r,h=l.refs===fe?l.refs={}:l.refs,b=l.setupState,S=ae(b),C=b===fe?So:z=>le(S,z);if(p!=null&&p!==c){if(zr(n),ye(p))h[p]=null,C(p)&&(b[p]=null);else if(He(p)){p.value=null;const z=n;z.k&&(h[z.k]=null)}}if(G(c))qt(c,l,12,[o,h]);else{const z=ye(c),F=He(c);if(z||F){const se=()=>{if(e.f){const K=z?C(c)?b[c]:h[c]:c.value;if(s)N(K)&&Is(K,r);else if(N(K))K.includes(r)||K.push(r);else if(z)h[c]=[r],C(c)&&(b[c]=h[c]);else{const j=[r];c.value=j,e.k&&(h[e.k]=j)}}else z?(h[c]=o,C(c)&&(b[c]=o)):F&&(c.value=o,e.k&&(h[e.k]=o))};if(o){const K=()=>{se(),Ti.delete(e)};K.id=-1,Ti.set(e,K),Qe(K,t)}else zr(e),se()}}}function zr(e){const n=Ti.get(e);n&&(n.flags|=8,Ti.delete(e))}Ri().requestIdleCallback;Ri().cancelIdleCallback;const Ht=e=>!!e.type.__asyncLoader,Oi=e=>e.type.__isKeepAlive;function wc(e,n){ra(e,"a",n)}function kc(e,n){ra(e,"da",n)}function ra(e,n,t=Ve){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Di(n,i,t),t){let s=t.parent;for(;s&&s.parent;)Oi(s.parent.vnode)&&Sc(i,n,t,s),s=s.parent}}function Sc(e,n,t,i){const s=Di(n,e,i,!0);oa(()=>{Is(i[n],s)},t)}function Di(e,n,t=Ve,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{zn();const l=Xt(t),c=un(n,t,e,o);return l(),An(),c});return i?s.unshift(r):s.push(r),r}}const Rn=e=>(n,t=Ve)=>{(!Vt||e==="sp")&&Di(e,(...i)=>n(...i),t)},_c=Rn("bm"),Ni=Rn("m"),Tc=Rn("bu"),Cc=Rn("u"),Bi=Rn("bum"),oa=Rn("um"),Ec=Rn("sp"),Mc=Rn("rtg"),xc=Rn("rtc");function Lc(e,n=Ve){Di("ec",e,n)}const zc=Symbol.for("v-ndc");function li(e,n,t,i){let s;const r=t,o=N(e);if(o||ye(e)){const l=o&&lt(e);let c=!1,p=!1;l&&(c=!on(e),p=Pn(e),e=Ii(e)),s=new Array(e.length);for(let h=0,b=e.length;h<b;h++)s[h]=n(c?p?_t(cn(e[h])):cn(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=n(l+1,l,void 0,r)}else if(ue(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>n(l,c,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const h=l[c];s[c]=n(e[h],h,c,r)}}else s=[];return s}const Ts=e=>e?Ma(e)?ji(e):Ts(e.parent):null,Ot=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ts(e.parent),$root:e=>Ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>la(e),$forceUpdate:e=>e.f||(e.f=()=>{Gs(e.update)}),$nextTick:e=>e.n||(e.n=Cn.bind(e.proxy)),$watch:e=>Kc.bind(e)}),rs=(e,n)=>e!==fe&&!e.__isScriptSetup&&le(e,n),Ac={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:c}=e;if(n[0]!=="$"){const S=o[n];if(S!==void 0)switch(S){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(rs(i,n))return o[n]=1,i[n];if(s!==fe&&le(s,n))return o[n]=2,s[n];if(le(r,n))return o[n]=3,r[n];if(t!==fe&&le(t,n))return o[n]=4,t[n];Cs&&(o[n]=0)}}const p=Ot[n];let h,b;if(p)return n==="$attrs"&&Fe(e.attrs,"get",""),p(e);if((h=l.__cssModules)&&(h=h[n]))return h;if(t!==fe&&le(t,n))return o[n]=4,t[n];if(b=c.config.globalProperties,le(b,n))return b[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return rs(s,n)?(s[n]=t,!0):i!==fe&&le(i,n)?(i[n]=t,!0):le(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:o}},l){let c;return!!(t[l]||e!==fe&&l[0]!=="$"&&le(e,l)||rs(n,l)||le(r,l)||le(i,l)||le(Ot,l)||le(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:le(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Ar(e){return N(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let Cs=!0;function Pc(e){const n=la(e),t=e.proxy,i=e.ctx;Cs=!1,n.beforeCreate&&Pr(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:c,inject:p,created:h,beforeMount:b,mounted:S,beforeUpdate:C,updated:z,activated:F,deactivated:se,beforeDestroy:K,beforeUnmount:j,destroyed:R,unmounted:I,render:Q,renderTracked:de,renderTriggered:U,errorCaptured:te,serverPrefetch:W,expose:ee,inheritAttrs:ie,components:L,directives:q,filters:he}=n;if(p&&Rc(p,i,null),o)for(const Y in o){const $=o[Y];G($)&&(i[Y]=$.bind(t))}if(s){const Y=s.call(t,t);ue(Y)&&(e.data=yt(Y))}if(Cs=!0,r)for(const Y in r){const $=r[Y],Ge=G($)?$.bind(t,t):G($.get)?$.get.bind(t,t):gn,dn=!G($)&&G($.set)?$.set.bind(t):gn,Oe=J({get:Ge,set:dn});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:Xe=>Oe.value=Xe})}if(l)for(const Y in l)aa(l[Y],i,t,Y);if(c){const Y=G(c)?c.call(t):c;Reflect.ownKeys(Y).forEach($=>{Nc($,Y[$])})}h&&Pr(h,e,"c");function O(Y,$){N($)?$.forEach(Ge=>Y(Ge.bind(t))):$&&Y($.bind(t))}if(O(_c,b),O(Ni,S),O(Tc,C),O(Cc,z),O(wc,F),O(kc,se),O(Lc,te),O(xc,de),O(Mc,U),O(Bi,j),O(oa,I),O(Ec,W),N(ee))if(ee.length){const Y=e.exposed||(e.exposed={});ee.forEach($=>{Object.defineProperty(Y,$,{get:()=>t[$],set:Ge=>t[$]=Ge,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===gn&&(e.render=Q),ie!=null&&(e.inheritAttrs=ie),L&&(e.components=L),q&&(e.directives=q),W&&sa(e)}function Rc(e,n,t=gn){N(e)&&(e=Es(e));for(const i in e){const s=e[i];let r;ue(s)?"default"in s?r=gi(s.from||i,s.default,!0):r=gi(s.from||i):r=gi(s),He(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[i]=r}}function Pr(e,n,t){un(N(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function aa(e,n,t,i){let s=i.includes(".")?da(t,i):()=>t[i];if(ye(e)){const r=n[e];G(r)&&en(s,r)}else if(G(e))en(s,e.bind(t));else if(ue(e))if(N(e))e.forEach(r=>aa(r,n,t,i));else{const r=G(e.handler)?e.handler.bind(t):n[e.handler];G(r)&&en(s,r,e)}}function la(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(n);let c;return l?c=l:!s.length&&!t&&!i?c=n:(c={},s.length&&s.forEach(p=>Ci(c,p,o,!0)),Ci(c,n,o)),ue(n)&&r.set(n,c),c}function Ci(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&Ci(e,r,t,!0),s&&s.forEach(o=>Ci(e,o,t,!0));for(const o in n)if(!(i&&o==="expose")){const l=Fc[o]||t&&t[o];e[o]=l?l(e[o],n[o]):n[o]}return e}const Fc={data:Rr,props:Fr,emits:Fr,methods:zt,computed:zt,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:zt,directives:zt,watch:Hc,provide:Rr,inject:Ic};function Rr(e,n){return n?e?function(){return ze(G(e)?e.call(this,this):e,G(n)?n.call(this,this):n)}:n:e}function Ic(e,n){return zt(Es(e),Es(n))}function Es(e){if(N(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function We(e,n){return e?[...new Set([].concat(e,n))]:n}function zt(e,n){return e?ze(Object.create(null),e,n):n}function Fr(e,n){return e?N(e)&&N(n)?[...new Set([...e,...n])]:ze(Object.create(null),Ar(e),Ar(n??{})):n}function Hc(e,n){if(!e)return n;if(!n)return e;const t=ze(Object.create(null),e);for(const i in n)t[i]=We(e[i],n[i]);return t}function ca(){return{app:null,config:{isNativeTag:So,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oc=0;function Dc(e,n){return function(i,s=null){G(i)||(i=ze({},i)),s!=null&&!ue(s)&&(s=null);const r=ca(),o=new WeakSet,l=[];let c=!1;const p=r.app={_uid:Oc++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Su,get config(){return r.config},set config(h){},use(h,...b){return o.has(h)||(h&&G(h.install)?(o.add(h),h.install(p,...b)):G(h)&&(o.add(h),h(p,...b))),p},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),p},component(h,b){return b?(r.components[h]=b,p):r.components[h]},directive(h,b){return b?(r.directives[h]=b,p):r.directives[h]},mount(h,b,S){if(!c){const C=p._ceVNode||Ie(i,s);return C.appContext=r,S===!0?S="svg":S===!1&&(S=void 0),e(C,h,S),c=!0,p._container=h,h.__vue_app__=p,ji(C.component)}},onUnmount(h){l.push(h)},unmount(){c&&(un(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(h,b){return r.provides[h]=b,p},runWithContext(h){const b=kt;kt=p;try{return h()}finally{kt=b}}};return p}}let kt=null;function Nc(e,n){if(Ve){let t=Ve.provides;const i=Ve.parent&&Ve.parent.provides;i===t&&(t=Ve.provides=Object.create(i)),t[e]=n}}function gi(e,n,t=!1){const i=Ea();if(i||kt){let s=kt?kt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&G(n)?n.call(i&&i.proxy):n}}const Bc=Symbol.for("v-scx"),Wc=()=>gi(Bc);function en(e,n,t){return ua(e,n,t)}function ua(e,n,t=fe){const{immediate:i,deep:s,flush:r,once:o}=t,l=ze({},t),c=n&&i||!n&&r!=="post";let p;if(Vt){if(r==="sync"){const C=Wc();p=C.__watcherHandles||(C.__watcherHandles=[])}else if(!c){const C=()=>{};return C.stop=gn,C.resume=gn,C.pause=gn,C}}const h=Ve;l.call=(C,z,F)=>un(C,h,z,F);let b=!1;r==="post"?l.scheduler=C=>{Qe(C,h&&h.suspense)}:r!=="sync"&&(b=!0,l.scheduler=(C,z)=>{z?C():Gs(C)}),l.augmentJob=C=>{n&&(C.flags|=4),b&&(C.flags|=2,h&&(C.id=h.uid,C.i=h))};const S=hc(e,n,l);return Vt&&(p?p.push(S):c&&S()),S}function Kc(e,n,t){const i=this.proxy,s=ye(e)?e.includes(".")?da(i,e):()=>i[e]:e.bind(i,i);let r;G(n)?r=n:(r=n.handler,t=n);const o=Xt(this),l=ua(s,r.bind(i),t);return o(),l}function da(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const jc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${$n(n)}Modifiers`]||e[`${ut(n)}Modifiers`];function Vc(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||fe;let s=t;const r=n.startsWith("update:"),o=r&&jc(i,n.slice(7));o&&(o.trim&&(s=t.map(h=>ye(h)?h.trim():h)),o.number&&(s=t.map(xo)));let l,c=i[l=Zi(n)]||i[l=Zi($n(n))];!c&&r&&(c=i[l=Zi(ut(n))]),c&&un(c,e,6,s);const p=i[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,un(p,e,6,s)}}const Gc=new WeakMap;function ha(e,n,t=!1){const i=t?Gc:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},l=!1;if(!G(e)){const c=p=>{const h=ha(p,n,!0);h&&(l=!0,ze(o,h))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(ue(e)&&i.set(e,null),null):(N(r)?r.forEach(c=>o[c]=null):ze(o,r),ue(e)&&i.set(e,o),o)}function Wi(e,n){return!e||!Ai(n)?!1:(n=n.slice(2).replace(/Once$/,""),le(e,n[0].toLowerCase()+n.slice(1))||le(e,ut(n))||le(e,n))}function Ir(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:c,render:p,renderCache:h,props:b,data:S,setupState:C,ctx:z,inheritAttrs:F}=e,se=_i(e);let K,j;try{if(t.shapeFlag&4){const I=s||i,Q=I;K=pn(p.call(Q,I,h,b,C,S,z)),j=l}else{const I=n;K=pn(I.length>1?I(b,{attrs:l,slots:o,emit:c}):I(b,null)),j=n.props?l:Uc(l)}}catch(I){Dt.length=0,Hi(I,e,1),K=Ie(je)}let R=K;if(j&&F!==!1){const I=Object.keys(j),{shapeFlag:Q}=R;I.length&&Q&7&&(r&&I.some(Fs)&&(j=$c(j,r)),R=Jn(R,j,!1,!0))}return t.dirs&&(R=Jn(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(t.dirs):t.dirs),t.transition&&Kt(R,t.transition),K=R,_i(se),K}const Uc=e=>{let n;for(const t in e)(t==="class"||t==="style"||Ai(t))&&((n||(n={}))[t]=e[t]);return n},$c=(e,n)=>{const t={};for(const i in e)(!Fs(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function Jc(e,n,t){const{props:i,children:s,component:r}=e,{props:o,children:l,patchFlag:c}=n,p=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Hr(i,o,p):!!o;if(c&8){const h=n.dynamicProps;for(let b=0;b<h.length;b++){const S=h[b];if(o[S]!==i[S]&&!Wi(p,S))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Hr(i,o,p):!0:!!o;return!1}function Hr(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!Wi(t,r))return!0}return!1}function qc({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const fa={},ma=()=>Object.create(fa),pa=e=>Object.getPrototypeOf(e)===fa;function Xc(e,n,t,i=!1){const s={},r=ma();e.propsDefaults=Object.create(null),ga(e,n,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);t?e.props=i?s:ic(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Yc(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=ae(s),[c]=e.propsOptions;let p=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let b=0;b<h.length;b++){let S=h[b];if(Wi(e.emitsOptions,S))continue;const C=n[S];if(c)if(le(r,S))C!==r[S]&&(r[S]=C,p=!0);else{const z=$n(S);s[z]=Ms(c,l,z,C,e,!1)}else C!==r[S]&&(r[S]=C,p=!0)}}}else{ga(e,n,s,r)&&(p=!0);let h;for(const b in l)(!n||!le(n,b)&&((h=ut(b))===b||!le(n,h)))&&(c?t&&(t[b]!==void 0||t[h]!==void 0)&&(s[b]=Ms(c,l,b,void 0,e,!0)):delete s[b]);if(r!==l)for(const b in r)(!n||!le(n,b))&&(delete r[b],p=!0)}p&&xn(e.attrs,"set","")}function ga(e,n,t,i){const[s,r]=e.propsOptions;let o=!1,l;if(n)for(let c in n){if(Pt(c))continue;const p=n[c];let h;s&&le(s,h=$n(c))?!r||!r.includes(h)?t[h]=p:(l||(l={}))[h]=p:Wi(e.emitsOptions,c)||(!(c in i)||p!==i[c])&&(i[c]=p,o=!0)}if(r){const c=ae(t),p=l||fe;for(let h=0;h<r.length;h++){const b=r[h];t[b]=Ms(s,c,b,p[b],e,!le(p,b))}}return o}function Ms(e,n,t,i,s,r){const o=e[t];if(o!=null){const l=le(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&G(c)){const{propsDefaults:p}=s;if(t in p)i=p[t];else{const h=Xt(s);i=p[t]=c.call(null,n),h()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===ut(t))&&(i=!0))}return i}const Zc=new WeakMap;function ba(e,n,t=!1){const i=t?Zc:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},l=[];let c=!1;if(!G(e)){const h=b=>{c=!0;const[S,C]=ba(b,n,!0);ze(o,S),C&&l.push(...C)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!c)return ue(e)&&i.set(e,gt),gt;if(N(r))for(let h=0;h<r.length;h++){const b=$n(r[h]);Or(b)&&(o[b]=fe)}else if(r)for(const h in r){const b=$n(h);if(Or(b)){const S=r[h],C=o[b]=N(S)||G(S)?{type:S}:ze({},S),z=C.type;let F=!1,se=!0;if(N(z))for(let K=0;K<z.length;++K){const j=z[K],R=G(j)&&j.name;if(R==="Boolean"){F=!0;break}else R==="String"&&(se=!1)}else F=G(z)&&z.name==="Boolean";C[0]=F,C[1]=se,(F||le(C,"default"))&&l.push(b)}}const p=[o,l];return ue(e)&&i.set(e,p),p}function Or(e){return e[0]!=="$"&&!Pt(e)}const Us=e=>e==="_"||e==="_ctx"||e==="$stable",$s=e=>N(e)?e.map(pn):[pn(e)],Qc=(e,n,t)=>{if(n._n)return n;const i=Ss((...s)=>$s(n(...s)),t);return i._c=!1,i},va=(e,n,t)=>{const i=e._ctx;for(const s in e){if(Us(s))continue;const r=e[s];if(G(r))n[s]=Qc(s,r,i);else if(r!=null){const o=$s(r);n[s]=()=>o}}},ya=(e,n)=>{const t=$s(n);e.slots.default=()=>t},wa=(e,n,t)=>{for(const i in n)(t||!Us(i))&&(e[i]=n[i])},eu=(e,n,t)=>{const i=e.slots=ma();if(e.vnode.shapeFlag&32){const s=n._;s?(wa(i,n,t),t&&Mo(i,"_",s,!0)):va(n,i)}else n&&ya(e,n)},nu=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,o=fe;if(i.shapeFlag&32){const l=n._;l?t&&l===1?r=!1:wa(s,n,t):(r=!n.$stable,va(n,s)),o=n}else n&&(ya(e,n),o={default:1});if(r)for(const l in s)!Us(l)&&o[l]==null&&delete s[l]},Qe=ou;function tu(e){return iu(e)}function iu(e,n){const t=Ri();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:c,setText:p,setElementText:h,parentNode:b,nextSibling:S,setScopeId:C=gn,insertStaticContent:z}=e,F=(u,f,g,_=null,y=null,w=null,x=void 0,E=null,M=!!f.dynamicChildren)=>{if(u===f)return;u&&!rt(u,f)&&(_=Ee(u),Xe(u,y,w,!0),u=null),f.patchFlag===-2&&(M=!1,f.dynamicChildren=null);const{type:k,ref:D,shapeFlag:A}=f;switch(k){case Ki:se(u,f,g,_);break;case je:K(u,f,g,_);break;case as:u==null&&j(f,g,_,x);break;case qe:L(u,f,g,_,y,w,x,E,M);break;default:A&1?Q(u,f,g,_,y,w,x,E,M):A&6?q(u,f,g,_,y,w,x,E,M):(A&64||A&128)&&k.process(u,f,g,_,y,w,x,E,M,Hn)}D!=null&&y?It(D,u&&u.ref,w,f||u,!f):D==null&&u&&u.ref!=null&&It(u.ref,null,w,u,!0)},se=(u,f,g,_)=>{if(u==null)i(f.el=l(f.children),g,_);else{const y=f.el=u.el;f.children!==u.children&&p(y,f.children)}},K=(u,f,g,_)=>{u==null?i(f.el=c(f.children||""),g,_):f.el=u.el},j=(u,f,g,_)=>{[u.el,u.anchor]=z(u.children,f,g,_,u.el,u.anchor)},R=({el:u,anchor:f},g,_)=>{let y;for(;u&&u!==f;)y=S(u),i(u,g,_),u=y;i(f,g,_)},I=({el:u,anchor:f})=>{let g;for(;u&&u!==f;)g=S(u),s(u),u=g;s(f)},Q=(u,f,g,_,y,w,x,E,M)=>{if(f.type==="svg"?x="svg":f.type==="math"&&(x="mathml"),u==null)de(f,g,_,y,w,x,E,M);else{const k=u.el&&u.el._isVueCE?u.el:null;try{k&&k._beginPatch(),W(u,f,y,w,x,E,M)}finally{k&&k._endPatch()}}},de=(u,f,g,_,y,w,x,E)=>{let M,k;const{props:D,shapeFlag:A,transition:H,dirs:B}=u;if(M=u.el=o(u.type,w,D&&D.is,D),A&8?h(M,u.children):A&16&&te(u.children,M,null,_,y,os(u,w),x,E),B&&Qn(u,null,_,"created"),U(M,u,u.scopeId,x,_),D){for(const ce in D)ce!=="value"&&!Pt(ce)&&r(M,ce,null,D[ce],w,_);"value"in D&&r(M,"value",null,D.value,w),(k=D.onVnodeBeforeMount)&&fn(k,_,u)}B&&Qn(u,null,_,"beforeMount");const X=su(y,H);X&&H.beforeEnter(M),i(M,f,g),((k=D&&D.onVnodeMounted)||X||B)&&Qe(()=>{k&&fn(k,_,u),X&&H.enter(M),B&&Qn(u,null,_,"mounted")},y)},U=(u,f,g,_,y)=>{if(g&&C(u,g),_)for(let w=0;w<_.length;w++)C(u,_[w]);if(y){let w=y.subTree;if(f===w||_a(w.type)&&(w.ssContent===f||w.ssFallback===f)){const x=y.vnode;U(u,x,x.scopeId,x.slotScopeIds,y.parent)}}},te=(u,f,g,_,y,w,x,E,M=0)=>{for(let k=M;k<u.length;k++){const D=u[k]=E?Kn(u[k]):pn(u[k]);F(null,D,f,g,_,y,w,x,E)}},W=(u,f,g,_,y,w,x)=>{const E=f.el=u.el;let{patchFlag:M,dynamicChildren:k,dirs:D}=f;M|=u.patchFlag&16;const A=u.props||fe,H=f.props||fe;let B;if(g&&et(g,!1),(B=H.onVnodeBeforeUpdate)&&fn(B,g,f,u),D&&Qn(f,u,g,"beforeUpdate"),g&&et(g,!0),(A.innerHTML&&H.innerHTML==null||A.textContent&&H.textContent==null)&&h(E,""),k?ee(u.dynamicChildren,k,E,g,_,os(f,y),w):x||$(u,f,E,null,g,_,os(f,y),w,!1),M>0){if(M&16)ie(E,A,H,g,y);else if(M&2&&A.class!==H.class&&r(E,"class",null,H.class,y),M&4&&r(E,"style",A.style,H.style,y),M&8){const X=f.dynamicProps;for(let ce=0;ce<X.length;ce++){const re=X[ce],Ae=A[re],Pe=H[re];(Pe!==Ae||re==="value")&&r(E,re,Ae,Pe,y,g)}}M&1&&u.children!==f.children&&h(E,f.children)}else!x&&k==null&&ie(E,A,H,g,y);((B=H.onVnodeUpdated)||D)&&Qe(()=>{B&&fn(B,g,f,u),D&&Qn(f,u,g,"updated")},_)},ee=(u,f,g,_,y,w,x)=>{for(let E=0;E<f.length;E++){const M=u[E],k=f[E],D=M.el&&(M.type===qe||!rt(M,k)||M.shapeFlag&198)?b(M.el):g;F(M,k,D,null,_,y,w,x,!0)}},ie=(u,f,g,_,y)=>{if(f!==g){if(f!==fe)for(const w in f)!Pt(w)&&!(w in g)&&r(u,w,f[w],null,y,_);for(const w in g){if(Pt(w))continue;const x=g[w],E=f[w];x!==E&&w!=="value"&&r(u,w,E,x,y,_)}"value"in g&&r(u,"value",f.value,g.value,y)}},L=(u,f,g,_,y,w,x,E,M)=>{const k=f.el=u?u.el:l(""),D=f.anchor=u?u.anchor:l("");let{patchFlag:A,dynamicChildren:H,slotScopeIds:B}=f;B&&(E=E?E.concat(B):B),u==null?(i(k,g,_),i(D,g,_),te(f.children||[],g,D,y,w,x,E,M)):A>0&&A&64&&H&&u.dynamicChildren?(ee(u.dynamicChildren,H,g,y,w,x,E),(f.key!=null||y&&f===y.subTree)&&ka(u,f,!0)):$(u,f,g,D,y,w,x,E,M)},q=(u,f,g,_,y,w,x,E,M)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?y.ctx.activate(f,g,_,x,M):he(f,g,_,y,w,x,M):Ce(u,f,M)},he=(u,f,g,_,y,w,x)=>{const E=u.component=pu(u,_,y);if(Oi(u)&&(E.ctx.renderer=Hn),gu(E,!1,x),E.asyncDep){if(y&&y.registerDep(E,O,x),!u.el){const M=E.subTree=Ie(je);K(null,M,f,g),u.placeholder=M.el}}else O(E,u,f,g,y,w,x)},Ce=(u,f,g)=>{const _=f.component=u.component;if(Jc(u,f,g))if(_.asyncDep&&!_.asyncResolved){Y(_,f,g);return}else _.next=f,_.update();else f.el=u.el,_.vnode=f},O=(u,f,g,_,y,w,x)=>{const E=()=>{if(u.isMounted){let{next:A,bu:H,u:B,parent:X,vnode:ce}=u;{const Ye=Sa(u);if(Ye){A&&(A.el=ce.el,Y(u,A,x)),Ye.asyncDep.then(()=>{u.isUnmounted||E()});return}}let re=A,Ae;et(u,!1),A?(A.el=ce.el,Y(u,A,x)):A=ce,H&&pi(H),(Ae=A.props&&A.props.onVnodeBeforeUpdate)&&fn(Ae,X,A,ce),et(u,!0);const Pe=Ir(u),ve=u.subTree;u.subTree=Pe,F(ve,Pe,b(ve.el),Ee(ve),u,y,w),A.el=Pe.el,re===null&&qc(u,Pe.el),B&&Qe(B,y),(Ae=A.props&&A.props.onVnodeUpdated)&&Qe(()=>fn(Ae,X,A,ce),y)}else{let A;const{el:H,props:B}=f,{bm:X,m:ce,parent:re,root:Ae,type:Pe}=u,ve=Ht(f);et(u,!1),X&&pi(X),!ve&&(A=B&&B.onVnodeBeforeMount)&&fn(A,re,f),et(u,!0);{Ae.ce&&Ae.ce._def.shadowRoot!==!1&&Ae.ce._injectChildStyle(Pe);const Ye=u.subTree=Ir(u);F(null,Ye,g,_,u,y,w),f.el=Ye.el}if(ce&&Qe(ce,y),!ve&&(A=B&&B.onVnodeMounted)){const Ye=f;Qe(()=>fn(A,re,Ye),y)}(f.shapeFlag&256||re&&Ht(re.vnode)&&re.vnode.shapeFlag&256)&&u.a&&Qe(u.a,y),u.isMounted=!0,f=g=_=null}};u.scope.on();const M=u.effect=new Po(E);u.scope.off();const k=u.update=M.run.bind(M),D=u.job=M.runIfDirty.bind(M);D.i=u,D.id=u.uid,M.scheduler=()=>Gs(D),et(u,!0),k()},Y=(u,f,g)=>{f.component=u;const _=u.vnode.props;u.vnode=f,u.next=null,Yc(u,f.props,_,g),nu(u,f.children,g),zn(),xr(u),An()},$=(u,f,g,_,y,w,x,E,M=!1)=>{const k=u&&u.children,D=u?u.shapeFlag:0,A=f.children,{patchFlag:H,shapeFlag:B}=f;if(H>0){if(H&128){dn(k,A,g,_,y,w,x,E,M);return}else if(H&256){Ge(k,A,g,_,y,w,x,E,M);return}}B&8?(D&16&&In(k,y,w),A!==k&&h(g,A)):D&16?B&16?dn(k,A,g,_,y,w,x,E,M):In(k,y,w,!0):(D&8&&h(g,""),B&16&&te(A,g,_,y,w,x,E,M))},Ge=(u,f,g,_,y,w,x,E,M)=>{u=u||gt,f=f||gt;const k=u.length,D=f.length,A=Math.min(k,D);let H;for(H=0;H<A;H++){const B=f[H]=M?Kn(f[H]):pn(f[H]);F(u[H],B,g,null,y,w,x,E,M)}k>D?In(u,y,w,!0,!1,A):te(f,g,_,y,w,x,E,M,A)},dn=(u,f,g,_,y,w,x,E,M)=>{let k=0;const D=f.length;let A=u.length-1,H=D-1;for(;k<=A&&k<=H;){const B=u[k],X=f[k]=M?Kn(f[k]):pn(f[k]);if(rt(B,X))F(B,X,g,null,y,w,x,E,M);else break;k++}for(;k<=A&&k<=H;){const B=u[A],X=f[H]=M?Kn(f[H]):pn(f[H]);if(rt(B,X))F(B,X,g,null,y,w,x,E,M);else break;A--,H--}if(k>A){if(k<=H){const B=H+1,X=B<D?f[B].el:_;for(;k<=H;)F(null,f[k]=M?Kn(f[k]):pn(f[k]),g,X,y,w,x,E,M),k++}}else if(k>H)for(;k<=A;)Xe(u[k],y,w,!0),k++;else{const B=k,X=k,ce=new Map;for(k=X;k<=H;k++){const Z=f[k]=M?Kn(f[k]):pn(f[k]);Z.key!=null&&ce.set(Z.key,k)}let re,Ae=0;const Pe=H-X+1;let ve=!1,Ye=0;const Xn=new Array(Pe);for(k=0;k<Pe;k++)Xn[k]=0;for(k=B;k<=A;k++){const Z=u[k];if(Ae>=Pe){Xe(Z,y,w,!0);continue}let $e;if(Z.key!=null)$e=ce.get(Z.key);else for(re=X;re<=H;re++)if(Xn[re-X]===0&&rt(Z,f[re])){$e=re;break}$e===void 0?Xe(Z,y,w,!0):(Xn[$e-X]=k+1,$e>=Ye?Ye=$e:ve=!0,F(Z,f[$e],g,null,y,w,x,E,M),Ae++)}const Zt=ve?ru(Xn):gt;for(re=Zt.length-1,k=Pe-1;k>=0;k--){const Z=X+k,$e=f[Z],Yn=f[Z+1],hn=Z+1<D?Yn.el||Yn.placeholder:_;Xn[k]===0?F(null,$e,g,hn,y,w,x,E,M):ve&&(re<0||k!==Zt[re]?Oe($e,g,hn,2):re--)}}},Oe=(u,f,g,_,y=null)=>{const{el:w,type:x,transition:E,children:M,shapeFlag:k}=u;if(k&6){Oe(u.component.subTree,f,g,_);return}if(k&128){u.suspense.move(f,g,_);return}if(k&64){x.move(u,f,g,Hn);return}if(x===qe){i(w,f,g);for(let A=0;A<M.length;A++)Oe(M[A],f,g,_);i(u.anchor,f,g);return}if(x===as){R(u,f,g);return}if(_!==2&&k&1&&E)if(_===0)E.beforeEnter(w),i(w,f,g),Qe(()=>E.enter(w),y);else{const{leave:A,delayLeave:H,afterLeave:B}=E,X=()=>{u.ctx.isUnmounted?s(w):i(w,f,g)},ce=()=>{w._isLeaving&&w[Mn](!0),A(w,()=>{X(),B&&B()})};H?H(w,X,ce):ce()}else i(w,f,g)},Xe=(u,f,g,_=!1,y=!1)=>{const{type:w,props:x,ref:E,children:M,dynamicChildren:k,shapeFlag:D,patchFlag:A,dirs:H,cacheIndex:B}=u;if(A===-2&&(y=!1),E!=null&&(zn(),It(E,null,g,u,!0),An()),B!=null&&(f.renderCache[B]=void 0),D&256){f.ctx.deactivate(u);return}const X=D&1&&H,ce=!Ht(u);let re;if(ce&&(re=x&&x.onVnodeBeforeUnmount)&&fn(re,f,u),D&6)Fn(u.component,g,_);else{if(D&128){u.suspense.unmount(g,_);return}X&&Qn(u,null,f,"beforeUnmount"),D&64?u.type.remove(u,f,g,Hn,_):k&&!k.hasOnce&&(w!==qe||A>0&&A&64)?In(k,f,g,!1,!0):(w===qe&&A&384||!y&&D&16)&&In(M,f,g),_&&Ct(u)}(ce&&(re=x&&x.onVnodeUnmounted)||X)&&Qe(()=>{re&&fn(re,f,u),X&&Qn(u,null,f,"unmounted")},g)},Ct=u=>{const{type:f,el:g,anchor:_,transition:y}=u;if(f===qe){qn(g,_);return}if(f===as){I(u);return}const w=()=>{s(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:x,delayLeave:E}=y,M=()=>x(g,w);E?E(u.el,w,M):M()}else w()},qn=(u,f)=>{let g;for(;u!==f;)g=S(u),s(u),u=g;s(f)},Fn=(u,f,g)=>{const{bum:_,scope:y,job:w,subTree:x,um:E,m:M,a:k}=u;Dr(M),Dr(k),_&&pi(_),y.stop(),w&&(w.flags|=8,Xe(x,u,f,g)),E&&Qe(E,f),Qe(()=>{u.isUnmounted=!0},f)},In=(u,f,g,_=!1,y=!1,w=0)=>{for(let x=w;x<u.length;x++)Xe(u[x],f,g,_,y)},Ee=u=>{if(u.shapeFlag&6)return Ee(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=S(u.anchor||u.el),g=f&&f[gc];return g?S(g):f};let Ue=!1;const _e=(u,f,g)=>{u==null?f._vnode&&Xe(f._vnode,null,null,!0):F(f._vnode||null,u,f,null,null,null,g),f._vnode=u,Ue||(Ue=!0,xr(),qo(),Ue=!1)},Hn={p:F,um:Xe,m:Oe,r:Ct,mt:he,mc:te,pc:$,pbc:ee,n:Ee,o:e};return{render:_e,hydrate:void 0,createApp:Dc(_e)}}function os({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function et({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function su(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ka(e,n,t=!1){const i=e.children,s=n.children;if(N(i)&&N(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=Kn(s[r]),l.el=o.el),!t&&l.patchFlag!==-2&&ka(o,l)),l.type===Ki&&l.patchFlag!==-1&&(l.el=o.el),l.type===je&&!l.el&&(l.el=o.el)}}function ru(e){const n=e.slice(),t=[0];let i,s,r,o,l;const c=e.length;for(i=0;i<c;i++){const p=e[i];if(p!==0){if(s=t[t.length-1],e[s]<p){n[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,e[t[l]]<p?r=l+1:o=l;p<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function Sa(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Sa(n)}function Dr(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const _a=e=>e.__isSuspense;function ou(e,n){n&&n.pendingBranch?N(e)?n.effects.push(...e):n.effects.push(e):pc(e)}const qe=Symbol.for("v-fgt"),Ki=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Dt=[];let nn=null;function pe(e=!1){Dt.push(nn=e?null:[])}function au(){Dt.pop(),nn=Dt[Dt.length-1]||null}let jt=1;function Ei(e,n=!1){jt+=e,e<0&&nn&&n&&(nn.hasOnce=!0)}function Ta(e){return e.dynamicChildren=jt>0?nn||gt:null,au(),jt>0&&nn&&nn.push(e),e}function be(e,n,t,i,s,r){return Ta(T(e,n,t,i,s,r,!0))}function lu(e,n,t,i,s){return Ta(Ie(e,n,t,i,s,!0))}function Mi(e){return e?e.__v_isVNode===!0:!1}function rt(e,n){return e.type===n.type&&e.key===n.key}const Ca=({key:e})=>e??null,bi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||He(e)||G(e)?{i:rn,r:e,k:n,f:!!t}:e:null);function T(e,n=null,t=null,i=0,s=null,r=e===qe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Ca(n),ref:n&&bi(n),scopeId:Yo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:rn};return l?(Js(c,t),r&128&&e.normalize(c)):t&&(c.shapeFlag|=ye(t)?8:16),jt>0&&!o&&nn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&nn.push(c),c}const Ie=cu;function cu(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===zc)&&(e=je),Mi(e)){const l=Jn(e,n,!0);return t&&Js(l,t),jt>0&&!r&&nn&&(l.shapeFlag&6?nn[nn.indexOf(e)]=l:nn.push(l)),l.patchFlag=-2,l}if(wu(e)&&(e=e.__vccOpts),n){n=uu(n);let{class:l,style:c}=n;l&&!ye(l)&&(n.class=vt(l)),ue(c)&&(Vs(c)&&!N(c)&&(c=ze({},c)),n.style=Fi(c))}const o=ye(e)?1:_a(e)?128:Zo(e)?64:ue(e)?4:G(e)?2:0;return T(e,n,t,i,s,o,r,!0)}function uu(e){return e?Vs(e)||pa(e)?ze({},e):e:null}function Jn(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:c}=e,p=n?hu(s||{},n):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Ca(p),ref:n&&n.ref?t&&r?N(r)?r.concat(bi(n)):[r,bi(n)]:bi(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==qe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Jn(e.ssContent),ssFallback:e.ssFallback&&Jn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&Kt(h,c.clone(h)),h}function du(e=" ",n=0){return Ie(Ki,null,e,n)}function an(e="",n=!1){return n?(pe(),lu(je,null,e)):Ie(je,null,e)}function pn(e){return e==null||typeof e=="boolean"?Ie(je):N(e)?Ie(qe,null,e.slice()):Mi(e)?Kn(e):Ie(Ki,null,String(e))}function Kn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Jn(e)}function Js(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(N(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),Js(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!pa(n)?n._ctx=rn:s===3&&rn&&(rn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else G(n)?(n={default:n,_ctx:rn},t=32):(n=String(n),i&64?(t=16,n=[du(n)]):t=8);e.children=n,e.shapeFlag|=t}function hu(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=vt([n.class,i.class]));else if(s==="style")n.style=Fi([n.style,i.style]);else if(Ai(s)){const r=n[s],o=i[s];o&&r!==o&&!(N(r)&&r.includes(o))&&(n[s]=r?[].concat(r,o):o)}else s!==""&&(n[s]=i[s])}return n}function fn(e,n,t,i=null){un(e,n,7,[t,i])}const fu=ca();let mu=0;function pu(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||fu,r={uid:mu++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ol(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ba(i,s),emitsOptions:ha(i,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Vc.bind(null,r),e.ce&&e.ce(r),r}let Ve=null;const Ea=()=>Ve||rn;let xi,xs;{const e=Ri(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};xi=n("__VUE_INSTANCE_SETTERS__",t=>Ve=t),xs=n("__VUE_SSR_SETTERS__",t=>Vt=t)}const Xt=e=>{const n=Ve;return xi(e),e.scope.on(),()=>{e.scope.off(),xi(n)}},Nr=()=>{Ve&&Ve.scope.off(),xi(null)};function Ma(e){return e.vnode.shapeFlag&4}let Vt=!1;function gu(e,n=!1,t=!1){n&&xs(n);const{props:i,children:s}=e.vnode,r=Ma(e);Xc(e,i,r,n),eu(e,s,t||n);const o=r?bu(e,n):void 0;return n&&xs(!1),o}function bu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ac);const{setup:i}=t;if(i){zn();const s=e.setupContext=i.length>1?yu(e):null,r=Xt(e),o=qt(i,e,0,[e.props,s]),l=_o(o);if(An(),r(),(l||e.sp)&&!Ht(e)&&sa(e),l){if(o.then(Nr,Nr),n)return o.then(c=>{Br(e,c)}).catch(c=>{Hi(c,e,0)});e.asyncDep=o}else Br(e,o)}else xa(e)}function Br(e,n,t){G(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ue(n)&&(e.setupState=Uo(n)),xa(e)}function xa(e,n,t){const i=e.type;e.render||(e.render=i.render||gn);{const s=Xt(e);zn();try{Pc(e)}finally{An(),s()}}}const vu={get(e,n){return Fe(e,"get",""),e[n]}};function yu(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,vu),slots:e.slots,emit:e.emit,expose:n}}function ji(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Uo(sc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Ot)return Ot[t](e)},has(n,t){return t in n||t in Ot}})):e.proxy}function wu(e){return G(e)&&"__vccOpts"in e}const J=(e,n)=>uc(e,n,Vt);function ku(e,n,t){try{Ei(-1);const i=arguments.length;return i===2?ue(n)&&!N(n)?Mi(n)?Ie(e,null,[n]):Ie(e,n):Ie(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Mi(t)&&(t=[t]),Ie(e,n,t))}finally{Ei(1)}}const Su="3.5.25";let Ls;const Wr=typeof window<"u"&&window.trustedTypes;if(Wr)try{Ls=Wr.createPolicy("vue",{createHTML:e=>e})}catch{}const La=Ls?e=>Ls.createHTML(e):e=>e,_u="http://www.w3.org/2000/svg",Tu="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Kr=En&&En.createElement("template"),Cu={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?En.createElementNS(_u,e):n==="mathml"?En.createElementNS(Tu,e):t?En.createElement(e,{is:t}):En.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>En.createTextNode(e),createComment:e=>En.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>En.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const o=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Kr.innerHTML=La(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=Kr.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Nn="transition",Lt="animation",Gt=Symbol("_vtc"),za={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Eu=ze({},Qo,za),Mu=e=>(e.displayName="Transition",e.props=Eu,e),jr=Mu((e,{slots:n})=>ku(yc,xu(e),n)),nt=(e,n=[])=>{N(e)?e.forEach(t=>t(...n)):e&&e(...n)},Vr=e=>e?N(e)?e.some(n=>n.length>1):e.length>1:!1;function xu(e){const n={};for(const L in e)L in za||(n[L]=e[L]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:p=o,appearToClass:h=l,leaveFromClass:b=`${t}-leave-from`,leaveActiveClass:S=`${t}-leave-active`,leaveToClass:C=`${t}-leave-to`}=e,z=Lu(s),F=z&&z[0],se=z&&z[1],{onBeforeEnter:K,onEnter:j,onEnterCancelled:R,onLeave:I,onLeaveCancelled:Q,onBeforeAppear:de=K,onAppear:U=j,onAppearCancelled:te=R}=n,W=(L,q,he,Ce)=>{L._enterCancelled=Ce,tt(L,q?h:l),tt(L,q?p:o),he&&he()},ee=(L,q)=>{L._isLeaving=!1,tt(L,b),tt(L,C),tt(L,S),q&&q()},ie=L=>(q,he)=>{const Ce=L?U:j,O=()=>W(q,L,he);nt(Ce,[q,O]),Gr(()=>{tt(q,L?c:r),Tn(q,L?h:l),Vr(Ce)||Ur(q,i,F,O)})};return ze(n,{onBeforeEnter(L){nt(K,[L]),Tn(L,r),Tn(L,o)},onBeforeAppear(L){nt(de,[L]),Tn(L,c),Tn(L,p)},onEnter:ie(!1),onAppear:ie(!0),onLeave(L,q){L._isLeaving=!0;const he=()=>ee(L,q);Tn(L,b),L._enterCancelled?(Tn(L,S),qr(L)):(qr(L),Tn(L,S)),Gr(()=>{L._isLeaving&&(tt(L,b),Tn(L,C),Vr(I)||Ur(L,i,se,he))}),nt(I,[L,he])},onEnterCancelled(L){W(L,!1,void 0,!0),nt(R,[L])},onAppearCancelled(L){W(L,!0,void 0,!0),nt(te,[L])},onLeaveCancelled(L){ee(L),nt(Q,[L])}})}function Lu(e){if(e==null)return null;if(ue(e))return[ls(e.enter),ls(e.leave)];{const n=ls(e);return[n,n]}}function ls(e){return Ll(e)}function Tn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Gt]||(e[Gt]=new Set)).add(n)}function tt(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[Gt];t&&(t.delete(n),t.size||(e[Gt]=void 0))}function Gr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let zu=0;function Ur(e,n,t,i){const s=e._endId=++zu,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:l,propCount:c}=Au(e,n);if(!o)return i();const p=o+"end";let h=0;const b=()=>{e.removeEventListener(p,S),r()},S=C=>{C.target===e&&++h>=c&&b()};setTimeout(()=>{h<c&&b()},l+1),e.addEventListener(p,S)}function Au(e,n){const t=window.getComputedStyle(e),i=z=>(t[z]||"").split(", "),s=i(`${Nn}Delay`),r=i(`${Nn}Duration`),o=$r(s,r),l=i(`${Lt}Delay`),c=i(`${Lt}Duration`),p=$r(l,c);let h=null,b=0,S=0;n===Nn?o>0&&(h=Nn,b=o,S=r.length):n===Lt?p>0&&(h=Lt,b=p,S=c.length):(b=Math.max(o,p),h=b>0?o>p?Nn:Lt:null,S=h?h===Nn?r.length:c.length:0);const C=h===Nn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Nn}Property`).toString());return{type:h,timeout:b,propCount:S,hasTransform:C}}function $r(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>Jr(t)+Jr(e[i])))}function Jr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function qr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Pu(e,n,t){const i=e[Gt];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Xr=Symbol("_vod"),Ru=Symbol("_vsh"),Fu=Symbol(""),Iu=/(?:^|;)\s*display\s*:/;function Hu(e,n,t){const i=e.style,s=ye(t);let r=!1;if(t&&!s){if(n)if(ye(n))for(const o of n.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&vi(i,l,"")}else for(const o in n)t[o]==null&&vi(i,o,"");for(const o in t)o==="display"&&(r=!0),vi(i,o,t[o])}else if(s){if(n!==t){const o=i[Fu];o&&(t+=";"+o),i.cssText=t,r=Iu.test(t)}}else n&&e.removeAttribute("style");Xr in e&&(e[Xr]=r?i.display:"",e[Ru]&&(i.display="none"))}const Yr=/\s*!important$/;function vi(e,n,t){if(N(t))t.forEach(i=>vi(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=Ou(e,n);Yr.test(t)?e.setProperty(ut(i),t.replace(Yr,""),"important"):e[i]=t}}const Zr=["Webkit","Moz","ms"],cs={};function Ou(e,n){const t=cs[n];if(t)return t;let i=$n(n);if(i!=="filter"&&i in e)return cs[n]=i;i=Eo(i);for(let s=0;s<Zr.length;s++){const r=Zr[s]+i;if(r in e)return cs[n]=r}return n}const Qr="http://www.w3.org/1999/xlink";function eo(e,n,t,i,s,r=Il(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Qr,n.slice(6,n.length)):e.setAttributeNS(Qr,n,t):t==null||r&&!Lo(t)?e.removeAttribute(n):e.setAttribute(n,r?"":bn(t)?String(t):t)}function no(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?La(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Lo(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(s||n)}function qs(e,n,t,i){e.addEventListener(n,t,i)}function Du(e,n,t,i){e.removeEventListener(n,t,i)}const to=Symbol("_vei");function Nu(e,n,t,i,s=null){const r=e[to]||(e[to]={}),o=r[n];if(i&&o)o.value=i;else{const[l,c]=Bu(n);if(i){const p=r[n]=ju(i,s);qs(e,l,p,c)}else o&&(Du(e,l,o,c),r[n]=void 0)}}const io=/(?:Once|Passive|Capture)$/;function Bu(e){let n;if(io.test(e)){n={};let i;for(;i=e.match(io);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ut(e.slice(2)),n]}let us=0;const Wu=Promise.resolve(),Ku=()=>us||(Wu.then(()=>us=0),us=Date.now());function ju(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;un(Vu(i,t.value),n,5,[i])};return t.value=e,t.attached=Ku(),t}function Vu(e,n){if(N(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const so=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gu=(e,n,t,i,s,r)=>{const o=s==="svg";n==="class"?Pu(e,i,o):n==="style"?Hu(e,t,i):Ai(n)?Fs(n)||Nu(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Uu(e,n,i,o))?(no(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&eo(e,n,i,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!ye(i))?no(e,$n(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),eo(e,n,i,o))};function Uu(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&so(n)&&G(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return so(n)&&ye(t)?!1:n in e}const Li=e=>{const n=e.props["onUpdate:modelValue"]||!1;return N(n)?t=>pi(n,t):n},St=Symbol("_assign"),ro={deep:!0,created(e,n,t){e[St]=Li(t),qs(e,"change",()=>{const i=e._modelValue,s=Ut(e),r=e.checked,o=e[St];if(N(i)){const l=Os(i,s),c=l!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const p=[...i];p.splice(l,1),o(p)}}else if(Tt(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o(Aa(e,r))})},mounted:oo,beforeUpdate(e,n,t){e[St]=Li(t),oo(e,n,t)}};function oo(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(N(n))s=Os(n,i.props.value)>-1;else if(Tt(n))s=n.has(i.props.value);else{if(n===t)return;s=Jt(n,Aa(e,!0))}e.checked!==s&&(e.checked=s)}const $u={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=Tt(n);qs(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?xo(Ut(o)):Ut(o));e[St](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,Cn(()=>{e._assigning=!1})}),e[St]=Li(i)},mounted(e,{value:n}){ao(e,n)},beforeUpdate(e,n,t){e[St]=Li(t)},updated(e,{value:n}){e._assigning||ao(e,n)}};function ao(e,n){const t=e.multiple,i=N(n);if(!(t&&!i&&!Tt(n))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],l=Ut(o);if(t)if(i){const c=typeof l;c==="string"||c==="number"?o.selected=n.some(p=>String(p)===String(l)):o.selected=Os(n,l)>-1}else o.selected=n.has(l);else if(Jt(Ut(o),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ut(e){return"_value"in e?e._value:e.value}function Aa(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Ju=["ctrl","shift","alt","meta"],qu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Ju.some(t=>e[`${t}Key`]&&!n.includes(t))},Xu=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<n.length;o++){const l=qu[n[o]];if(l&&l(s,n))return}return e(s,...r)}))},Yu=ze({patchProp:Gu},Cu);let lo;function Zu(){return lo||(lo=tu(Yu))}const Qu=((...e)=>{const n=Zu().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=nd(i);if(!s)return;const r=n._component;!G(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,ed(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},n});function ed(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function nd(e){return ye(e)?document.querySelector(e):e}const td="/favicon.png",id="/images/zoom-out.png",sd="/images/zoom-in.png",rd="/images/about_music_logo.png",od="/images/dk3-min.jpg",ad="/images/share-icon.png",ld="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",ct=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Gioachino Rossini",birth:1792,death:1868},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Bedřich Smetana",birth:1824,death:1884},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Richard Strauss",birth:1864,death:1949},{name:"Jean Sibelius",birth:1865,death:1957},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Igor Stravinsky",birth:1882,death:1971},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Carl Orff",birth:1895,death:1982},{name:"George Gershwin",birth:1898,death:1937},{name:"Dmitri Shostakovich",birth:1906,death:1975}],cd={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/strawinski.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Richard Strauss":"comp/rstrauss.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Bedřich Smetana":"comp/smetana.jpg","George Gershwin":"comp/gershwin.jpg","Carl Orff":"comp/orff.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function Pa(e){const n=cd[e];return n?n.startsWith("/")?n:`/${n}`:null}function ud(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function dd(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],s=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-s),l=n.slice(0,n.length-s).map(p=>p.trim()).filter(Boolean).map(p=>p[0]?p[0].toUpperCase()+".":"").filter(Boolean).join(" "),c=r.join(" ");return l?`${l} ${c}`:c}const Yt=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let zs=Yt.reduce((e,n)=>(e[n.id]=n.label,e),{});const co=Math.min(...ct.map(e=>e.birth)),hd=Math.max(...ct.map(e=>e.birth));let As=[...ct],jn=null,Vn=null;const fd={r:255,g:255,b:255},md={r:37,g:99,b:235};At("#f3f4f6"),fo(1750),At("#e6eef8"),fo(1820),At("#e8f4ff"),At("#eef2f7");const zi=1677.5,yi=1980,Ra=yi-zi,pd=6,gd=2,bd=0,wi={barHeight:50,widthScale:1,fontScale:1},ft={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let Gn={...wi};function ds(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function uo(e={}){Gn={barHeight:ds(e.barHeight??Gn.barHeight??wi.barHeight,ft.barHeight.min,ft.barHeight.max),widthScale:ds(e.widthScale??Gn.widthScale??wi.widthScale,ft.widthScale.min,ft.widthScale.max),fontScale:ds(e.fontScale??Gn.fontScale??wi.fontScale,ft.fontScale.min,ft.fontScale.max)}}function vd(){return pd*Gn.widthScale}function ci(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=Ra*vd()+bd,i=(n.clientWidth||window.innerWidth)*gd*Gn.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function ot(e){return(e-zi)/Ra*100}function Fa(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function At(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function hs({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function ho(e,n,t){const i=Fa(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function fo(e){const n=hd-co;return n<=0?0:Fa((e-co)/n)}const yd={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function Xs(e){return yd[e]||"#f3f4f6"}function wd(e){return e?zs[e]||Yt.find(n=>n.id===e)?.label||e:""}function mo(e={}){!e||typeof e!="object"||(zs={...zs,...e})}function kd(e){const n=Yt.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function Sd(e,n){const t=Number(e),i=Number(n),s=kd(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let o=null,l=0;return Yt.forEach(c=>{const p=Math.max(0,Math.min(i,c.to)-Math.max(t,c.from));p>l&&(l=p,o=c.id)}),o&&l>r/2?o:s}function _d(e){const n=Xs(e),t=At(n),i=ho(t,fd,.12),s=ho(t,md,.04);return`linear-gradient(145deg, ${hs(i)} 0%, ${hs(t)} 58%, ${hs(s)} 100%)`}function po(e){Array.isArray(e)?As=[...e]:As=[...ct]}function Ys(){const e=document.getElementById("gantt"),n=document.getElementById("axis");if(!e)return;const t=s=>Number.isInteger(jn)&&s===jn,i=s=>Number.isInteger(Vn)&&s===Vn;e.querySelectorAll(".bar").forEach(s=>{const r=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",t(r)),s.classList.toggle("bar--hovered",i(r))}),e.querySelectorAll(".bar-connector").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),o=t(r),l=i(r);s.classList.toggle("bar-connector--selected",o),s.classList.toggle("bar-connector--hover",l)}),n&&n.querySelectorAll(".life-label").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),o=t(r),l=i(r);s.classList.toggle("life-label--active",o||l),s.classList.toggle("life-label--hover",l)})}function Ia(e){Number.isInteger(e)?jn=e:jn=null,Ys()}function st(e){Number.isInteger(e)?Vn=e:Vn=null,Ys()}function go(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(zi/10)*10,t=Math.ceil(yi/10)*10;Yt.forEach(i=>{const s=Math.max(i.from,zi),r=Math.min(i.to,yi);if(r<=s)return;const o=document.createElement("div");o.className="era-band",o.style.left=ot(s)+"%",o.style.width=ot(r)-ot(s)+"%",o.style.backgroundImage="none",o.style.backgroundColor=Xs(i.id),o.textContent=wd(i.id)||i.label,i.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===yi&&(o.style.borderRight="none"),e.appendChild(o)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=ot(i)+"%",e.appendChild(s);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=ot(i)+"%",o.textContent=i,e.appendChild(o)}}function ui(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="",n&&n.querySelectorAll(".life-label").forEach(z=>z.remove());const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=document.createDocumentFragment(),o=As||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const l=[...o].sort((z,F)=>z.birth-F.birth),c=l.length,p=l.map((z,F)=>({composer:z,laneIndex:F}));Number.isInteger(jn)&&(jn<0||jn>=c)&&(jn=null),Number.isInteger(Vn)&&(Vn<0||Vn>=c)&&(Vn=null);const h=2,b=Gn.barHeight,S=b+h,C=c*b+Math.max(0,c-1)*h;e.style.height=C+"px",c&&(p.forEach(({composer:z,laneIndex:F})=>{const se=z.displayName||z.name,K=ot(z.birth),j=ot(z.death),R=document.createElement("div");R.className="bar",R.setAttribute("data-lane-index",F),R.setAttribute("data-name",z.name);const I=Sd(z.birth,z.death);R.style.backgroundImage=_d(I),R.style.backgroundColor=Xs(I);const Q=K,de=j-K,te=F*S+b*.5+i,W=(O,Y)=>{const $=document.createElement("div");$.className="bar-connector",$.setAttribute("data-lane-index",F),$.setAttribute("data-side",Y),$.style.left=O+"%",$.style.top=-i+"px",$.style.height=te+"px",s.appendChild($)};if(W(Q,"start"),W(Q+de,"end"),n){const O=document.createElement("div");O.className="life-label",O.setAttribute("data-lane-index",F),O.setAttribute("data-side","start"),O.style.left=Q+"%",O.textContent=z.birth,r.appendChild(O);const Y=document.createElement("div");Y.className="life-label",Y.setAttribute("data-lane-index",F),Y.setAttribute("data-side","end"),Y.style.left=Q+de+"%",Y.textContent=z.death,r.appendChild(Y)}R.style.left=Q+"%",R.style.width=de+"%",R.style.top=F*S+"px",R.style.height=b+"px",R.style.lineHeight=b+"px",R.style.fontSize=b*.25*Gn.fontScale+"px";const ee=Pa(z.name);let ie=0;if(ee){const O=document.createElement("img");O.className="bar-avatar",ie=Math.max(10,Math.round(b*1.1)),O.style.width=ie+"px",O.style.height=ie+"px",O.src=ee,O.alt=se||z.name,R.appendChild(O)}const L=document.createElement("span");L.className="bar-label",L.textContent=se,R.appendChild(L);const q=document.createElement("span");q.className="bar-dates",q.textContent=`${z.birth} – ${z.death}`,R.appendChild(q),e.appendChild(R),L.scrollWidth>L.clientWidth&&(L.textContent=dd(se),L.scrollWidth>L.clientWidth&&(L.textContent=ud(se)));const he=()=>{const $=R.clientWidth-12-(ie?ie+6:0)-6;if($<=0){q.style.display="none";return}L.scrollWidth+q.scrollWidth+6>$&&(q.style.display="none")};(()=>{R.clientWidth>0?he():typeof window<"u"&&window.requestAnimationFrame(he)})(),R.addEventListener("click",O=>{O.stopPropagation(),Ia(F),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:z,laneIndex:F}}))}),R.addEventListener("mouseenter",()=>st(F)),R.addEventListener("mouseleave",()=>st(null)),R.addEventListener("touchstart",O=>{if(!O.touches||O.touches.length!==1)return;const Y=O.touches[0];R.dataset.touchStartX=String(Y.clientX),R.dataset.touchStartY=String(Y.clientY),st(F)},{passive:!0}),R.addEventListener("touchmove",O=>{if(!O.touches||O.touches.length!==1)return;const Y=Number(R.dataset.touchStartX||"0"),$=Number(R.dataset.touchStartY||"0"),Ge=O.touches[0],dn=Math.abs(Ge.clientX-Y),Oe=Math.abs(Ge.clientY-$);(dn>6||Oe>6)&&st(null)},{passive:!0}),R.addEventListener("touchend",()=>{st(null)},{passive:!0}),R.addEventListener("touchcancel",()=>{st(null)},{passive:!0})}),e.appendChild(s),n&&n.appendChild(r),Ys())}function Td(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4;let s=0,r=0,o=0,l=0,c=0,p=0,h=null;const b=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},S=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true",e.dispatchEvent(new CustomEvent("timeline-pan-start")))},C=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",b())};function z(){if(h=null,!n||!t)return;const U=c-s,te=p-r;e.scrollLeft=o-U,e.scrollTop=l-te}const F=U=>{U.button===0&&(n=!0,t=!1,e.classList.remove("panning"),s=U.clientX,r=U.clientY,c=U.clientX,p=U.clientY,o=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),U.preventDefault())},se=U=>{if(n){if(c=U.clientX,p=U.clientY,!t){const te=Math.abs(c-s),W=Math.abs(p-r);if(te>i||W>i)S();else return}h===null&&(h=window.requestAnimationFrame(z)),U.preventDefault()}},K=()=>{n&&(n=!1,C(),h!==null&&(cancelAnimationFrame(h),h=null))};e.addEventListener("mousedown",F),window.addEventListener("mousemove",se),window.addEventListener("mouseup",K);let j=null,R=!1;const I=U=>{if(j!==null||U.touches.length!==1)return;const te=U.touches[0];j=te.identifier,R=!1,s=te.clientX,r=te.clientY,c=te.clientX,p=te.clientY,o=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),C()},Q=U=>{if(j===null)return;const te=Array.from(U.touches).find(q=>q.identifier===j);if(!te)return;const W=te.clientX-s,ee=te.clientY-r,ie=Math.abs(W),L=Math.abs(ee);if(!R)if(ie>i||L>i)R=!0,S();else return;e.scrollLeft=o-W,e.scrollTop=l-ee,U.preventDefault()},de=U=>{j===null||!Array.from(U.changedTouches).some(W=>W.identifier===j)||(j=null,R=!1,C())};e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchmove",Q,{passive:!1}),e.addEventListener("touchend",de,{passive:!0}),e.addEventListener("touchcancel",de,{passive:!0})}function Cd(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};const i=.5,s=12,r=(p,h,b)=>{const S=p.getBoundingClientRect();return S.bottom>h&&S.top<b},o=()=>e.scrollTop+e.clientHeight>=e.scrollHeight-s,l=()=>{if(o())return;const p=Array.from(n.querySelectorAll(".bar"));if(!p.length)return;const h=e.getBoundingClientRect(),S=(t?.getBoundingClientRect()?.bottom??h.top)+1,C=h.bottom,z=p.find(j=>r(j,S,C));if(!z)return;const F=z.getBoundingClientRect(),se=S,K=F.top-se;Math.abs(K)<=i||Ps(e,{left:e.scrollLeft,top:Math.max(0,e.scrollTop+K),behavior:"auto"})},c=()=>{l()};return e.addEventListener("timeline-pan-end",c),()=>{e.removeEventListener("timeline-pan-end",c)}}function Ps(e,{left:n=0,top:t=0,behavior:i="smooth"}){const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":i;if(e.scrollTo){e.scrollTo({left:n,top:t,behavior:r});return}e.scrollLeft=n,e.scrollTop=t}function Ed(e={}){uo(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:ct;po(n),mo(e.eraLabels||{}),ci(),go(),ui(),Td();const t=Cd(),i=()=>ci();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const l=document.getElementById("timeline");l&&Ps(l,{left:0,top:0,behavior:"smooth"})}function o(){const l=document.getElementById("timeline");l&&Ps(l,{left:Math.max(0,l.scrollWidth-l.clientWidth),top:Math.max(0,l.scrollHeight-l.clientHeight),behavior:"smooth"})}return{goToStart:r,goToEnd:o,setComposers(l){po(l),ui()},updateSettings(l){uo(l||{}),ci(),ui()},updateEraLabels(l){mo(l||{}),ci(),go(),ui()},setSelectedLane:Ia,setHoveredLane:st,destroy(){window.removeEventListener("resize",i),t()}}}const Ha=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},Md={class:"timeline-wrapper"},xd={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),l=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(l)?null:l}}))};return Ni(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=Ed({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),Bi(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),en(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),en(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),en(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(pe(),be("div",Md,[...r[0]||(r[0]=[T("div",{id:"timeline"},[T("div",{class:"timeline-inner"},[T("div",{id:"axis",class:"axis"}),T("div",{id:"gantt"})])],-1)])]))}},Ld=Ha(xd,[["__scopeId","data-v-095e97d5"]]),zd=`# Composer fact sheets

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
- Orff-Schulwerk: Sein paedagogisches Konzept Orff-Schulwerk praegte Musikunterricht weltweit - Bewegung, Sprache und Perkussion als Basis.`,Ad={class:"app"},Pd={class:"topbar"},Rd={class:"language-switcher"},Fd={class:"visually-hidden",for:"language-select"},Id=["aria-label"],Hd=["value"],Od={class:"menu-nav"},Dd={class:"content"},Nd={key:0},Bd={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},Wd={class:"filter-dock__header"},Kd=["aria-pressed","aria-label"],jd=["src"],Vd={key:0,class:"filter-dock__body"},Gd={class:"filter-dock__body-inner"},Ud={class:"nav-controls",role:"group","aria-label":"Timeline navigation and zoom"},$d=["disabled"],Jd=["disabled"],qd=["disabled"],Xd=["disabled"],Yd={class:"filter-panel",role:"group","aria-label":"Composer filters"},Zd={class:"filter-panel__options"},Qd=["onUpdate:modelValue","aria-label"],eh={class:"filter-panel__label"},nh={key:1,class:"about"},th={class:"about__card"},ih={class:"about__title"},sh={class:"about__text"},rh={class:"about__text"},oh={class:"about__author"},ah={class:"about__author-body"},lh={class:"about__author-label"},ch={class:"about__author-name"},uh={class:"about__contributors"},dh={class:"about__contributors-title"},hh={class:"about__contributors-list"},fh={class:"about__contributors-name"},mh=["href"],ph={key:0,class:"about__contributors-toggle"},gh={class:"about__contributors-toggle-label"},bh={class:"composer-modal__content"},vh={class:"composer-modal__header"},yh={class:"composer-modal__titles"},wh={class:"composer-modal__name"},kh={key:0,class:"composer-modal__dates"},Sh={class:"composer-modal__header-actions"},_h=["aria-label"],Th={key:0,class:"composer-modal__share-feedback"},Ch={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},Eh=["disabled"],Mh={class:"composer-modal__position"},xh=["disabled"],Lh={class:"composer-modal__body"},zh={key:0,class:"composer-modal__hero"},Ah=["src","alt"],Ph={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},Rh=["disabled"],Fh={class:"composer-modal__position"},Ih=["disabled"],Hh={class:"composer-modal__hero-meta"},Oh={class:"composer-modal__name-small"},Dh={key:0,class:"composer-modal__dates-small"},Nh={class:"composer-modal__playlist"},Bh={class:"composer-modal__playlist-header"},Wh={class:"composer-modal__playlist-title"},Kh={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},jh=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],Vh={class:"sc-player__status"},Gh={class:"sc-player__status-text"},Uh={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},$h={class:"composer-modal__description"},Jh={key:0,class:"composer-modal__facts-title"},qh={key:1,class:"composer-modal__facts"},Xh={class:"composer-modal__fact-text"},Yh={key:2,class:"composer-modal__muted"},mt="en",bo="timeline-language",vo="timeline-language-user-set",di="/composer/",hi=25,yo=150,fs=.2,wo=1.5,Zh=.35,ms=1.7,ko=.95,Qh=.6,fi=1,Be=12,ps=35,gs=8,ef=320,nf=.88,tf=1.12,mi=6,sf={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},share:{button:"Share",copied:"Link copied"},soundcloud:{loading:"Loading tracks from SoundCloud..."},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",testFeaturesLabel:"Turn on test functions",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Matveeva",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended"},apply:"Apply",minimizeControls:"Hide timeline controls",restoreControls:"Show timeline controls"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},share:{button:"Teilen",copied:"Link kopiert"},soundcloud:{loading:"Tracks von SoundCloud werden geladen..."},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Matveeva",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden",minimizeControls:"Steuerungselemente ausblenden",restoreControls:"Steuerungselemente anzeigen"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},share:{button:"Поделиться",copied:"Ссылка скопирована"},soundcloud:{loading:"Загружаем треки из SoundCloud..."},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",testFeaturesLabel:"Включить тестовые функции",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Матвеева",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить",minimizeControls:"Скрыть панель управления",restoreControls:"Показать панель управления"}}},t=Object.keys(n),i=Le(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=Le(mt),o=Le(!1),l=J(()=>!o.value),c=J(()=>n[r.value]||n.en),p=J(()=>t.map(a=>({value:a,label:n[a]?.label||a.toUpperCase()}))),h=J(()=>c.value.appTitle),b=J(()=>c.value.languageLabel||"Language"),S=J(()=>c.value.navigation||n.en.navigation),C=J(()=>c.value.about||n.en.about),z=J(()=>C.value.contributors||n.en.about.contributors||[]),F=J(()=>C.value.testFeaturesLabel||n.en.about.testFeaturesLabel||"Test functions"),se=J(()=>c.value.eras||n.en.eras),K=J(()=>c.value.soundcloud||n.en.soundcloud||{}),j=J(()=>K.value.loading||"Loading tracks from SoundCloud..."),R=J(()=>c.value.composers||{}),I=J(()=>{const a=R.value.names||{},d={};return Object.entries(a).forEach(([m,v])=>{d[De(m)]=v}),d}),Q=J(()=>{const a={};return Object.entries(Zt||{}).forEach(([d,m])=>{const v=De(d),P=m?.[r.value];if(P){a[v]=P;return}r.value==="en"&&m?.en&&(a[v]=m.en)}),a}),de=J(()=>({...Q.value,...I.value})),U=J(()=>c.value.filter||n.en.filter),te=J(()=>({essentials:U.value.groups?.essentials||"Essential Icons",core:U.value.groups?.core||"Core Classics",expanded:U.value.groups?.expanded||"Extended Classics"})),W=J(()=>{const a=R.value.descriptions||{},d={};return Object.entries(a).forEach(([m,v])=>{d[De(m)]=v}),d}),ee=J(()=>{const a=R.value.factsTitles||{},d={};return Object.entries(a).forEach(([m,v])=>{d[De(m)]=v}),d}),ie=J(()=>c.value.modal||n.en.modal),L=J(()=>c.value.share||n.en.share),q=Le(!1),he=Le("composers"),Ce=[30,40,50,70,100],O="".replace(/\/$/,""),$="https://soundcloud.com/dmitry-kotikov/sets/",Ge="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",dn=new Set;function Oe(a,d,m){return Number.isNaN(a)?d:Math.min(m,Math.max(d,a))}function Xe(a){const d=Oe((a-hi)/(yo-hi),0,1),m=Math.pow(d,Zh),v=fs+(wo-fs)*m;return Oe(v,fs,wo)}function Ct(a){const d=Oe((a-hi)/(yo-hi),0,1),m=Math.pow(d,Qh),v=ms-(ms-ko)*m;return Oe(v,ko,ms)}const qn=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Richard Strauss","Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet","Gioachino Rossini"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich","George Gershwin","Igor Stravinsky","Bedřich Smetana","Jean Sibelius","Carl Orff"]}],Fn=Le(qn.reduce((a,d)=>(a[d.id]=!0,a),{})),In=J(()=>{const a=c.value.filter||{};return{minimize:a.minimizeControls||"Hide timeline controls",restore:a.restoreControls||"Show timeline controls"}}),Ee=Le(null),Ue=Le(Be),_e=Le(null);let Hn=0;const vn=Le(!1);let u=null;const f=Le("bottom-left"),g=yt({active:!1,pointerId:null,startX:0,startY:0,startLeft:0,startTop:0,element:null}),_=J(()=>{const a={left:`${Ue.value}px`,transition:g.active?"none":"left 360ms cubic-bezier(0.22, 0.61, 0.36, 1)"};return _e.value!=null&&(a.top=`${_e.value}px`),a}),y=yt({active:!1,startDistance:0});function w(a,d){const m=a.clientX-d.clientX,v=a.clientY-d.clientY;return Math.hypot(m,v)}const x=yt({barHeight:Ce[fi],widthScale:Xe(Ce[fi]),fontScale:Ct(Ce[fi])}),E=Le(fi),M=J(()=>E.value<=0),k=J(()=>E.value>=Ce.length-1),D=Le(!0),A=Le(!1);function H(a){const d=Oe(a,0,Ce.length-1);E.value=d;const m=Ce[d];x.barHeight=m,x.widthScale=Xe(m),x.fontScale=Ct(m)}function B(a){const d=a>0?1:-1;H(E.value+d)}function X(){const a=document.getElementById("timeline");if(!a)return;const d=Math.max(0,a.scrollWidth-a.clientWidth),m=Math.max(0,a.scrollHeight-a.clientHeight);D.value=a.scrollLeft<=mi&&a.scrollTop<=mi,A.value=a.scrollLeft>=d-mi&&a.scrollTop>=m-mi}async function ce(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),X(),await Cn(),Et()}async function re(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),X(),await Cn(),Ji()}const Ae=J(()=>{const a=qn.map(m=>m.id).filter(m=>Fn.value[m]),d=new Set;return a.forEach(m=>{qn.find(P=>P.id===m)?.composers?.forEach(P=>d.add(P))}),d}),Pe=J(()=>{const a=Ae.value;return a.size?ct.filter(d=>a.has(d.name)):[]}),ve=J(()=>[...Pe.value].sort((a,d)=>a.birth-d.birth).map(a=>({...a,displayName:$i(a.name)}))),{descriptionsByLocale:Ye,playlistIdsByKey:Xn,namesByLocale:Zt}=Ga(zd),Z=Le(null),$e=Le(!1),Yn=Le("");let hn=null;const Vi=J(()=>Z.value!==null),we=J(()=>Z.value===null?null:ve.value[Z.value]),Qt=J(()=>we.value?$i(we.value.name):""),Zs=J(()=>we.value?Pa(we.value.name):null),Qs=J(()=>we.value?Ua(we.value.name):""),er=J(()=>we.value?$a(we.value.name):""),Oa=J(()=>we.value?Za(we.value.name):[]),Da=J(()=>Oa.value.map(a=>pl(a)).filter(Boolean)),Zn=J(()=>{const a=Da.value.filter(Boolean);return a.length?a:[Ge]}),Gi=J(()=>(Z.value??0)>0),Ui=J(()=>Z.value!==null&&Z.value<ve.value.length-1);function De(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Na(a){return De(a).replace(/\s+/g,"-")}function nr(a){const d=Na(a);return`${di}${encodeURIComponent(d)}`}function Ba(a){return a.startsWith(di)?a.slice(di.length):""}function Wa(a){const d=De(String(a||"").replace(/-/g," ")),m=ct.find(v=>De(v.name)===d);return m?m.name:""}function Ka(a){if(!a)return;const d=qn.find(m=>m.composers.includes(a));!d||Fn.value[d.id]||(Fn.value={...Fn.value,[d.id]:!0})}async function tr(a=window.location.pathname){$e.value=!0;try{ei(a);const d=Ba(a);if(!d){Z.value=null;return}const m=decodeURIComponent(d),v=Wa(m);if(!v){Z.value=null;return}Ka(v),await Cn();const P=ve.value.findIndex(V=>V.name===v);Z.value=P>=0?P:null}finally{$e.value=!1}}function ja(a){if(!a||typeof window>"u")return"";const d=nr(a);return new URL(d,window.location.origin).toString()}async function Va(){if(!we.value)return;const a=ja(we.value.name);if(!a)return;const d=Qt.value||we.value.name;try{if(navigator.share){await navigator.share({title:d,url:a});return}}catch(m){if(m?.name!=="AbortError")console.warn("Share failed, falling back to clipboard",m);else return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const m=document.createElement("textarea");m.value=a,m.setAttribute("readonly","true"),m.style.position="absolute",m.style.left="-9999px",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}Yn.value=L.value.copied||"Link copied",hn&&clearTimeout(hn),hn=setTimeout(()=>{Yn.value="",hn=null},2200)}catch(m){console.warn("Failed to copy share link",m)}}function $i(a){const d=De(a);return de.value[d]||a}function ir(a){return te.value[a]||a}function Ga(a){const d=a.split(`
`),m={},v={},P={};let V=null,ne=null,Se=null,Re="en",ke=[];const Ne=()=>{(V||ne)&&[V,ne].filter(Boolean).forEach(tn=>{m[tn]=m[tn]||{},m[tn][Re]=ke.join(`
`).trim(),Se&&(P[tn]=Se)}),ke=[],Se=null,ne=null};for(const Te of d){const tn=Te.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(tn){Ne();const[,me,Me,Ze]=tn;V=De(Ze||me),ne=De(me),Re=(Me||"en").toLowerCase(),Se=Ze||null;continue}const kn=V?Te.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(kn){const[,me,Me]=kn,Ze=(me||Re||"en").toLowerCase(),xe=Me.trim();[V,ne].filter(Boolean).forEach(Yi=>{v[Yi]=v[Yi]||{},v[Yi][Ze]=xe});continue}V&&Te.startsWith("- ")&&ke.push(Te.replace(/^- /,"").trim())}return Ne(),{descriptionsByLocale:m,playlistIdsByKey:P,namesByLocale:v}}function Ua(a){const d=qa(a),m=De(a),v=W.value[m];if(v)return v;const P=d[r.value];return P||(d.en?d.en:Object.values(d)[0]||"")}function $a(a){const d=ee.value[De(a)];return d||Ya(a)}function Ja(a,d){const m=De(d);if(a[m])return a[m];const v=m.split(" ").filter(Boolean),P=v[v.length-1];return P&&a[P]?a[P]:""}function qa(a){const d=De(a),m=d.split(" ").filter(Boolean),v=[d],P=m[m.length-1];P&&P!==d&&v.push(P);for(const V of v)if(Ye[V])return Ye[V];return{}}function Xa(a){return De(a).replace(/\s+/g,"-").replace(/-+/g,"-")}function Ya(a){const d=s[r.value]||s.en,m=r.value==="ru"?$i(a):"";if(r.value==="ru"&&m)return`${m} - ${d}`;const v=String(a||"").trim().split(/\s+/).filter(Boolean);if(!v.length)return"";const P=v[v.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(P)&&v.length>=2?v[v.length-2]:P} ${d}`}function Za(a){const d=[],m=Xa(a);m&&!d.includes(m)&&d.push(m);const v=Ja(Xn,a);return v&&!d.includes(v)&&d.push(v),d}function ei(a=window.location.pathname){if(a.startsWith(di)){he.value="composers";return}he.value=a==="/about"?"about":"composers"}const sr=()=>tr();function rr(a){window.location.pathname!==a&&(history.pushState({},"",a),ei(a)),q.value=!1}function or(a){rr(a==="about"?"/about":"/")}function Qa(){q.value=!q.value}function el(){q.value=!1}function ar(a){vn.value!==a&&(vn.value=a)}function nl(){ar(!vn.value)}function ni(){if(typeof document>"u")return 0;const a=document.querySelector(".topbar");return a&&a.offsetHeight?a.offsetHeight:0}function On(){if(typeof window>"u")return{width:0,height:0,offsetLeft:0,offsetTop:0};const a=window.visualViewport;return a?{width:a.width,height:a.height,offsetLeft:a.offsetLeft||0,offsetTop:a.offsetTop||0}:{width:window.innerWidth,height:window.innerHeight,offsetLeft:0,offsetTop:0}}function Dn(a){const d=Ee.value;if(!d||typeof window>"u")return a;const{width:m,offsetLeft:v}=On(),P=v+Be,V=Math.max(P,v+m-d.offsetWidth-Be);return Math.min(Math.max(a,P),V)}function yn(a){const d=Ee.value;if(!d||typeof window>"u")return a;const{height:m,offsetTop:v}=On(),P=Math.max(ni()+Be,v+Be),V=Math.max(P,v+m-d.offsetHeight-Be);return Math.min(Math.max(a,P),V)}function dt(){const a=Ee.value;if(_e.value==null&&a&&typeof window<"u"){const{height:d,offsetTop:m}=On();_e.value=yn(m+d-a.offsetHeight-24)}Ue.value=Dn(Ue.value),_e.value!=null&&(_e.value=yn(_e.value))}function Ji(){dt(),f.value="top-right";const d=Ee.value?.offsetWidth||0,{width:m,offsetLeft:v,offsetTop:P}=On();Ue.value=Dn(v+m-d-Be);const V=ni()+ps+gs;_e.value=yn(P+V)}function Et(){dt(),f.value="bottom-left";const d=Ee.value?.offsetHeight||0,{height:m,offsetTop:v}=On();Ue.value=Dn(Be),_e.value=yn(v+m-d-Be)}function lr(){dt(),f.value="top-left";const{offsetTop:a}=On(),d=ni()+ps+gs;Ue.value=Dn(Be),_e.value=yn(a+d)}function cr(){dt(),f.value="bottom-right";const a=Ee.value,d=a?.offsetWidth||0,m=a?.offsetHeight||0,{width:v,height:P,offsetLeft:V,offsetTop:ne}=On();Ue.value=Dn(V+v-d-Be),_e.value=yn(ne+P-m-Be)}function tl(){const a=Ee.value;if(!a)return;const{width:d,height:m,offsetLeft:v,offsetTop:P}=On(),V=ni()+ps+gs,ne=Dn(Be),Se=Dn(v+d-a.offsetWidth-Be),Re=yn(P+V),ke=yn(P+m-a.offsetHeight-Be),Ne=Ue.value,Te=_e.value??0,tn=[{anchor:"top-left",dx:Ne-ne,dy:Te-Re},{anchor:"top-right",dx:Ne-Se,dy:Te-Re},{anchor:"bottom-left",dx:Ne-ne,dy:Te-ke},{anchor:"bottom-right",dx:Ne-Se,dy:Te-ke}];tn.sort((me,Me)=>me.dx*me.dx+me.dy*me.dy-(Me.dx*Me.dx+Me.dy*Me.dy));const kn=tn[0]?.anchor;if(kn==="top-left"){lr();return}if(kn==="top-right"){Ji();return}if(kn==="bottom-left"){Et();return}cr()}function ur(a){if(!g.active||a.pointerId!==g.pointerId)return;a.preventDefault();const d=a.clientX-g.startX,m=a.clientY-g.startY;Ue.value=Dn(g.startLeft+d),_e.value!=null&&(_e.value=yn(g.startTop+m))}function dr(){window.removeEventListener("pointermove",ur),window.removeEventListener("pointerup",ti),window.removeEventListener("pointercancel",ti)}function hr(a){const d=g.element;if(g.active=!1,g.element=null,g.pointerId=null,d?.releasePointerCapture&&a!=null)try{d.releasePointerCapture(a)}catch{}}function ti(a){!g.active||a.pointerId!==g.pointerId||(dr(),hr(a.pointerId),tl())}function il(){g.active&&(dr(),hr(g.pointerId))}function sl(a){const d=a.timeStamp||Date.now();d-Hn<=ef&&a.preventDefault(),Hn=d}function rl(a){if(g.active||a.pointerType==="mouse"&&a.button!==0)return;const d=a.target;if(d&&typeof d.closest=="function"&&d.closest("button, a, input, select, textarea, label, [role='button'], .filter-panel"))return;dt(),f.value="free",a.preventDefault(),g.active=!0,g.pointerId=a.pointerId,g.startX=a.clientX,g.startY=a.clientY,g.startLeft=Ue.value,g.startTop=_e.value??0,g.element=Ee.value;const v=Ee.value;if(v?.setPointerCapture)try{v.setPointerCapture(a.pointerId)}catch{}window.addEventListener("pointermove",ur),window.addEventListener("pointerup",ti),window.addEventListener("pointercancel",ti)}function fr(a){!a||!a.touches||a.touches.length===2&&(y.active=!0,y.startDistance=w(a.touches[0],a.touches[1]))}function mr(a){if(!y.active||!a||!a.touches||a.touches.length!==2)return;a.preventDefault();const d=w(a.touches[0],a.touches[1]),m=y.startDistance||d,v=m?d/m:1;if(v>=tf){B(1),y.startDistance=d;return}v<=nf&&(B(-1),y.startDistance=d)}function ii(a){(a?.touches?.length??0)<2&&(y.active=!1,y.startDistance=0)}function pr(){vn.value||ar(!0)}function gr(){Et()}function ol(){wn()}function wn(){if(f.value==="top-left"){lr();return}if(f.value==="top-right"){Ji();return}if(f.value==="bottom-right"){cr();return}if(f.value==="bottom-left"){Et();return}dt()}function Mt(a,{persist:d=!1}={}){const m=t.includes(a)?a:mt;if(r.value=m,d)try{localStorage.setItem(bo,m),localStorage.setItem(vo,"1")}catch{}}function al(a){i.value=!0,Mt(a,{persist:!0})}function ll(a){const d=a?.target?.value;d&&al(d)}function cl(){try{return localStorage.getItem(bo)}catch{return null}}function ul(){try{return localStorage.getItem(vo)==="1"}catch{return!1}}function dl(){const a=cl(),d=ul();if(Mt(mt),a&&d&&t.includes(a)){i.value=!0,Mt(a);return}hl()}async function hl(){const a=!i.value;a||(r.value,void 0);const d=[fl,ml];for(const m of d){const v=await m();if(v){const P=String(v).toUpperCase();if(!a)return;const V=P==="RU"?"ru":["DE","AT","CH"].includes(P)?"de":mt;Mt(V);return}}a&&Mt(mt)}async function fl(){try{const a=await fetch("https://ipapi.co/json/");return a.ok&&(await a.json())?.country_code||null}catch(a){console.warn("ipapi lookup failed:",a)}return null}async function ml(){try{const a=await fetch("https://ipwho.is/");return a.ok&&(await a.json())?.country_code||null}catch(a){console.warn("ipwho.is lookup failed:",a)}return null}function of(a,d){}function br(){rr("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function qi(a){const d=a.detail,m=d?.laneIndex;if(Number.isInteger(m)&&ve.value[m]){Z.value=m;return}const v=d?.composer?.name;if(!v)return;const P=ve.value.findIndex(V=>V.name===v);P>=0&&(Z.value=P)}function vr(){Z.value=null}function yr(){!Gi.value||Z.value===null||(Z.value-=1)}function wr(){!Ui.value||Z.value===null||(Z.value+=1)}Ni(async()=>{dl(),await tr(),await Cn(),Et(),typeof ResizeObserver<"u"&&(u=new ResizeObserver(ol),Ee.value&&u.observe(Ee.value)),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(qi),window.addEventListener("popstate",sr),window.addEventListener("composer-select",qi),window.addEventListener("resize",wn),window.visualViewport&&(window.visualViewport.addEventListener("resize",wn),window.visualViewport.addEventListener("scroll",wn)),wn();const a=document.getElementById("timeline");a&&(a.addEventListener("scroll",X,{passive:!0}),a.addEventListener("timeline-pan-start",pr),a.addEventListener("touchstart",fr,{passive:!0}),a.addEventListener("touchmove",mr,{passive:!1}),a.addEventListener("touchend",ii,{passive:!0}),a.addEventListener("touchcancel",ii,{passive:!0}),X())}),Bi(()=>{window.removeEventListener("popstate",sr),window.removeEventListener("composer-select",qi),window.removeEventListener("resize",wn),window.visualViewport&&(window.visualViewport.removeEventListener("resize",wn),window.visualViewport.removeEventListener("scroll",wn)),u&&(u.disconnect(),u=null),il(),hn&&(clearTimeout(hn),hn=null);const a=document.getElementById("timeline");a&&(a.removeEventListener("scroll",X),a.removeEventListener("timeline-pan-start",pr),a.removeEventListener("touchstart",fr),a.removeEventListener("touchmove",mr),a.removeEventListener("touchend",ii),a.removeEventListener("touchcancel",ii))}),en(h,a=>{a&&(document.title=a)},{immediate:!0}),en(r,async a=>{const d=t.includes(a)?a:mt;if(d!==a){r.value=d;return}try{document.documentElement.setAttribute("data-lang",d)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(se.value),await Cn(),wn()}),en(Vi,async a=>{a?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await Cn(),Zn.value.length&&Sr()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",kr())}),en(Z,a=>{const d=window.timeline;!d||typeof d.setSelectedLane!="function"||(Number.isInteger(a)?d.setSelectedLane(a):d.setSelectedLane(null))}),en(Z,a=>{if($e.value)return;if(Number.isInteger(a)&&ve.value[a]){const m=ve.value[a].name,v=nr(m);window.location.pathname!==v&&(history.pushState({},"",v),ei(v));return}const d=he.value==="about"?"/about":"/";window.location.pathname!==d&&(history.replaceState({},"",d),ei(d))}),en(Zn,async a=>{Vi.value&&(kr(),await Cn(),a.length&&Sr())}),en(()=>ve.value.map(a=>a.name),a=>{if(Z.value===null)return;const d=we.value;if(!d){Z.value=null;return}const m=a.findIndex(v=>v===d.name);m===-1?Z.value=null:Z.value=m});function Xi(a){return a?O?O.endsWith("/")&&a.startsWith("/")?O+a.slice(1):!O.endsWith("/")&&!a.startsWith("/")?`${O}/${a}`:O+a:a:O}function pl(a){if(!a)return"";const d=$;if(!d)return"";const m=d.endsWith("/");return`${d}${m?"":"/"}${a}`}function kr(){dn.forEach(a=>{try{a.pause(),a.currentTime=0}catch(d){console.error("Failed to stop SoundCloud audio",d)}}),dn.clear()}function Sr(a,d=document){const v=(d||document).querySelectorAll("[data-soundcloud-playlist]");v.length&&(v.length,v.forEach(P=>{gl(P,()=>{})}))}async function gl(a,d){const m=()=>{typeof d=="function"&&setTimeout(()=>d(),0)};if(!a||a.dataset.soundcloudReady==="true"||a.dataset.soundcloudReady==="loading"||a.dataset.soundcloudReady==="error"){m();return}const v=a.getAttribute("data-soundcloud-playlist"),P=a.getAttribute("data-soundcloud-playlist-alt")||"",V=[v,...P.split("|")].map(Re=>(Re||"").trim()).filter(Boolean);if(!V.length){m();return}a.dataset.soundcloudReady="loading",a.innerHTML=bl();let ne=null;for(const Re of V)try{const ke=await yl(Re),Ne=Array.isArray(ke.tracks)&&ke.tracks.length?ke.tracks:ke&&ke.kind==="track"?[ke]:[],Te=wl(Ne);_l(a,Te,Re),m();return}catch(ke){if(ne=ke,ke&&ke.status===429){_r(a,Re),m();return}}console.error("Failed to build SoundCloud player",ne);const Se=V[0]||Ge;_r(a,Se),m()}function bl(){return`
    <div class="sc-player__status">
      <span class="sc-player__spinner" aria-hidden="true"></span>
      <span class="sc-player__status-text">${j.value}</span>
    </div>
  `.trim()}async function vl(a){if(!a)throw new Error("No track provided");const d=a.media&&Array.isArray(a.media.transcodings)?a.media.transcodings:[];if(d.length){let m=d.find(v=>v&&v.format&&v.format.protocol==="progressive");if(m||(m=d[0]),m&&m.url)try{const v=await kl(m.url,a.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:a.id,transcodingUrl:m.url,finalUrl:v}),v}catch(v){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",v)}}if(!a.id)throw new Error("No track id provided");return Sl(a.id,a.track_authorization)}async function yl(a){const d=Xi("/api/soundcloud/playlist")+`?url=${encodeURIComponent(a)}`,m=await fetch(d);if(!m.ok){const v=new Error(`SoundCloud playlist error: ${m.status}`);throw v.status=m.status,v.retryAfter=Number(m.headers?.get("Retry-After"))||void 0,v}return m.json()}function wl(a=[]){return Array.isArray(a)?a.map((d,m)=>{if(!d)return null;const v=`Track ${m+1}`,V=[d.title,d.publisher_metadata?.release_title,d.permalink,d.permalink_url,d.id?String(d.id):null].map(ne=>typeof ne=="string"?ne.trim():"").filter(Boolean)[0]||v;return{...d,title:V}}).filter(Boolean):[]}async function kl(a,d){const m=new URLSearchParams;m.set("url",a),d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const v=Xi("/api/soundcloud/transcoding")+`?${m.toString()}`,P=await fetch(v);if(!P.ok){const ne=new Error(`SoundCloud transcoding error: ${P.status}`);throw ne.status=P.status,ne.retryAfter=Number(P.headers?.get("Retry-After"))||void 0,ne}const V=await P.json();if(!V?.url)throw new Error("Transcoding response missing url");return V.url}async function Sl(a,d){const m=new URLSearchParams;d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const v=m.toString(),P=Xi(`/api/soundcloud/streams/${a}`)+(v?`?${v}`:""),V=await fetch(P);if(!V.ok){const Se=new Error(`SoundCloud stream error: ${V.status}`);throw Se.status=V.status,Se.retryAfter=Number(V.headers?.get("Retry-After"))||void 0,Se}const ne=await V.json();if(!ne?.url)throw new Error("Stream response missing url");return ne.url}function _r(a,d){const m=`https://w.soundcloud.com/player/?url=${encodeURIComponent(d)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;a.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${m}"
    ></iframe>
  `,a.dataset.soundcloudReady="true"}function _l(a,d,m){if(!Array.isArray(d)||!d.length){a.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',a.dataset.soundcloudReady="error";return}a.classList.add("sc-player");const v=document.createElement("div");v.className="sc-track-list";const P=document.createElement("audio");P.preload="none",dn.add(P);let V=null,ne=null,Se=null,Re=!1;const ke=[],Ne=(me,Me)=>{me.dataset.state=Me,me.textContent=Me==="playing"?"⏸":Me==="loading"?"...":"▶"},Te=me=>Ne(me,"idle"),tn=()=>{ne&&Te(ne),V=null,ne=null,Se=null};P.addEventListener("ended",()=>{const me=Se===null?-1:Se+1;if(me>=0&&me<d.length){kn(me,{auto:!0});return}tn()}),P.addEventListener("pause",()=>{ne&&P.currentTime<(P.duration||1/0)&&Te(ne)});const kn=async(me,{auto:Me=!1}={})=>{if(Re)return;const Ze=d[me],xe=ke[me];if(!(!Ze||!xe)){if(!Me&&Se===me&&!P.paused){P.pause(),Te(xe);return}Re=!0,Ne(xe,"loading");try{const Sn=await vl(Ze);if(!Sn)throw new Error("No stream URL returned");P.src=Sn,await P.play(),Tl(Ze),ne&&ne!==xe&&Te(ne),ne=xe,V=Ze?.id??me,Se=me,Ne(xe,"playing")}catch(Sn){console.error("Failed to play SoundCloud track",Sn),Te(xe),a.dataset.soundcloudReady="error"}finally{Re=!1}}};d.forEach((me,Me)=>{const Ze=document.createElement("div");Ze.className="sc-track";const xe=document.createElement("button");xe.type="button",xe.className="sc-track__button",xe.setAttribute("aria-label","Play track"),Ne(xe,"idle"),ke.push(xe);const Sn=document.createElement("div");Sn.className="sc-track__title",Sn.textContent=me?.title||`Track ${Me+1}`,Ze.append(xe,Sn),v.append(Ze),xe.addEventListener("click",()=>{kn(Me)})}),a.innerHTML="",a.append(v,P),a.dataset.soundcloudReady="true"}function Tl(a){if(!("mediaSession"in navigator)||typeof MediaMetadata>"u")return;const d=a?.title||"Classical Music",m=a?.publisher_metadata?.artist||a?.user?.username||a?.user?.full_name||"",v=a?.publisher_metadata?.album_title||"";navigator.mediaSession.metadata=new MediaMetadata({title:d,artist:m,album:v,artwork:[{src:"/images/about_music_logo.png",type:"image/png"}]})}return(a,d)=>(pe(),be("div",Ad,[T("header",Pd,[T("button",{class:"menu-button",onClick:Qa,"aria-label":"Toggle navigation menu"},[...d[6]||(d[6]=[T("span",{class:"menu-icon"},null,-1)])]),T("img",{class:"logo",src:td,alt:"Logo",onClick:br}),T("div",{class:"app-title",role:"button",onClick:br},oe(h.value),1),T("div",Rd,[T("label",Fd,oe(b.value),1),is(T("select",{id:"language-select",class:"language-select","onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m),"aria-label":b.value,onChange:ll},[(pe(!0),be(qe,null,li(p.value,m=>(pe(),be("option",{key:m.value,value:m.value},oe(m.label),9,Hd))),128))],40,Id),[[$u,r.value]])])]),T("aside",{class:vt(["side-menu",{"side-menu--open":q.value}])},[T("nav",Od,[T("button",{class:vt(["menu-item",{"menu-item--active":he.value==="composers"}]),onClick:d[1]||(d[1]=m=>or("composers"))},oe(S.value.composers),3),T("button",{class:vt(["menu-item",{"menu-item--active":he.value==="about"}]),onClick:d[2]||(d[2]=m=>or("about"))},oe(S.value.about),3)])],2),q.value?(pe(),be("div",{key:0,class:"backdrop",onClick:el})):an("",!0),T("main",Dd,[he.value==="composers"?(pe(),be("section",Nd,[T("div",{class:"filter-dock",style:Fi(_.value),ref_key:"filterDockRef",ref:Ee,onPointerdown:rl,onTouchend:sl},[T("div",Bd,[T("div",Wd,[T("button",{type:"button",class:"filter-dock__collapse control-btn","aria-pressed":vn.value,"aria-label":vn.value?In.value.restore:In.value.minimize,onClick:nl},[T("img",{src:vn.value?"/images/window-maximize.svg":"/images/window-minimize.svg",alt:"","aria-hidden":"true"},null,8,jd)],8,Kd)]),Ie(jr,{name:"filter-dock-collapse",onAfterEnter:gr,onAfterLeave:gr},{default:Ss(()=>[vn.value?an("",!0):(pe(),be("div",Vd,[T("div",Gd,[T("div",Ud,[T("button",{type:"button",class:"control-btn",disabled:D.value,onClick:ce,"aria-label":"Jump to start of timeline"}," ⇤ ",8,$d),T("button",{type:"button",class:"control-btn",disabled:M.value,onClick:d[3]||(d[3]=m=>B(-1)),"aria-label":"Make timeline blocks smaller"},[...d[7]||(d[7]=[T("img",{class:"control-icon",src:id,alt:"","aria-hidden":"true"},null,-1)])],8,Jd),T("button",{type:"button",class:"control-btn",disabled:k.value,onClick:d[4]||(d[4]=m=>B(1)),"aria-label":"Make timeline blocks larger"},[...d[8]||(d[8]=[T("img",{class:"control-icon",src:sd,alt:"","aria-hidden":"true"},null,-1)])],8,qd),T("button",{type:"button",class:"control-btn",disabled:A.value,onClick:re,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Xd)]),T("div",Yd,[T("div",Zd,[(pe(),be(qe,null,li(qn,m=>T("label",{key:m.id,class:"filter-panel__item"},[is(T("input",{"onUpdate:modelValue":v=>Fn.value[m.id]=v,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${ir(m.id)}`},null,8,Qd),[[ro,Fn.value[m.id]]]),T("span",eh,oe(ir(m.id)),1)])),64))])])])]))]),_:1})])],36),Ie(Ld,{composers:ve.value,settings:x,"era-labels":se.value},null,8,["composers","settings","era-labels"])])):he.value==="about"?(pe(),be("section",nh,[T("div",th,[d[12]||(d[12]=T("img",{class:"about__logo",src:rd,alt:"Music logo",loading:"lazy"},null,-1)),T("h1",ih,oe(C.value.title),1),T("p",sh,oe(C.value.intro),1),T("p",rh,oe(C.value.goal),1),T("div",oh,[d[11]||(d[11]=T("img",{class:"about__photo",src:od,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),T("div",ah,[T("div",lh,oe(C.value.authorLabel),1),T("div",ch,oe(C.value.authorName),1),d[9]||(d[9]=T("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),d[10]||(d[10]=T("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),T("div",uh,[T("div",dh,oe(C.value.contributorsTitle),1),T("ul",hh,[(pe(!0),be(qe,null,li(z.value,m=>(pe(),be("li",{key:m.url,class:"about__contributors-item"},[T("span",fh,oe(m.name),1),T("a",{class:"about__contributors-link",href:m.url,target:"_blank",rel:"noreferrer"},oe(m.linkText),9,mh),m.url==="https://facebook.com/olga.shibanova"?(pe(),be("div",ph,[T("label",gh,[is(T("input",{"onUpdate:modelValue":d[5]||(d[5]=v=>o.value=v),class:"about__contributors-toggle-input",type:"checkbox","aria-label":"Toggle test features"},null,512),[[ro,o.value]]),T("span",null,oe(F.value),1)])])):an("",!0)]))),128))])])])])):an("",!0)]),Ie(jr,{name:"fade"},{default:Ss(()=>[Vi.value?(pe(),be("div",{key:0,class:"composer-modal",onClick:Xu(vr,["self"])},[T("div",bh,[T("header",vh,[T("div",yh,[T("h2",wh,oe(Qt.value),1),we.value?(pe(),be("p",kh,oe(we.value.birth)+" — "+oe(we.value.death),1)):an("",!0)]),T("div",Sh,[T("button",{class:"composer-modal__share",type:"button",onClick:Va,"aria-label":L.value.button},[...d[13]||(d[13]=[T("img",{class:"composer-modal__share-icon",src:ad,alt:""},null,-1)])],8,_h),Yn.value?(pe(),be("span",Th,oe(Yn.value),1)):an("",!0),T("div",Ch,[T("button",{class:"composer-modal__arrow",onClick:yr,disabled:!Gi.value,"aria-label":"Previous"}," ← ",8,Eh),T("span",Mh,oe((Z.value??0)+1)+" / "+oe(ve.value.length),1),T("button",{class:"composer-modal__arrow",onClick:wr,disabled:!Ui.value,"aria-label":"Next"}," → ",8,xh)]),T("button",{class:"composer-modal__close",onClick:vr,"aria-label":"Close composer details"},"×")])]),T("div",Lh,[Zs.value?(pe(),be("div",zh,[T("img",{class:"composer-modal__photo",src:Zs.value,alt:Qt.value},null,8,Ah),T("div",Ph,[T("button",{class:"composer-modal__arrow",onClick:yr,disabled:!Gi.value,"aria-label":"Previous"}," ← ",8,Rh),T("span",Fh,oe((Z.value??0)+1)+" / "+oe(ve.value.length),1),T("button",{class:"composer-modal__arrow",onClick:wr,disabled:!Ui.value,"aria-label":"Next"}," → ",8,Ih)]),T("div",Hh,[T("div",Oh,oe(Qt.value),1),we.value?(pe(),be("div",Dh,oe(we.value.birth)+" — "+oe(we.value.death),1)):an("",!0)])])):an("",!0),T("div",Nh,[T("div",Bh,[T("div",Wh,oe(ie.value.keyWorks),1),Zn.value.length?(pe(),be("a",Kh,[...d[14]||(d[14]=[T("img",{class:"sc-powered__img",src:ld,alt:"Powered by SoundCloud"},null,-1)])])):an("",!0)]),Zn.value.length?(pe(),be("div",{key:Zn.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":Zn.value[0],"data-soundcloud-playlist-alt":Zn.value.slice(1).join("|")},[T("div",Vh,[d[15]||(d[15]=T("span",{class:"sc-player__spinner","aria-hidden":"true"},null,-1)),T("span",Gh,oe(j.value),1)])],8,jh)):(pe(),be("div",Uh," Playlist will appear here soon. "))]),T("div",$h,[er.value?(pe(),be("div",Jh,oe(er.value),1)):an("",!0),Qs.value?(pe(),be("ul",qh,[(pe(!0),be(qe,null,li(Qs.value.split(`
`),(m,v)=>(pe(),be("li",{key:v},[T("span",Xh,oe(m),1)]))),128))])):(pe(),be("p",Yh,"No description yet."))])])])])):an("",!0)]),_:1})]))}},rf=Ha(sf,[["__scopeId","data-v-cacae77c"]]);Qu(rf).mount("#app");
