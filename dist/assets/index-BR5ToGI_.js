(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function As(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const me={},ft=[],yn=()=>{},bo=()=>!1,Pi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ps=e=>e.startsWith("onUpdate:"),Te=Object.assign,Rs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Sl=Object.prototype.hasOwnProperty,ae=(e,n)=>Sl.call(e,n),D=Array.isArray,mt=e=>$t(e)==="[object Map]",kt=e=>$t(e)==="[object Set]",yr=e=>$t(e)==="[object Date]",$=e=>typeof e=="function",ve=e=>typeof e=="string",wn=e=>typeof e=="symbol",de=e=>e!==null&&typeof e=="object",vo=e=>(de(e)||$(e))&&$(e.then)&&$(e.catch),yo=Object.prototype.toString,$t=e=>yo.call(e),_l=e=>$t(e).slice(8,-1),wo=e=>$t(e)==="[object Object]",Fs=e=>ve(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pt=As(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ri=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Cl=/-\w/g,Kn=Ri(e=>e.replace(Cl,n=>n.slice(1).toUpperCase())),Tl=/\B([A-Z])/g,ot=Ri(e=>e.replace(Tl,"-$1").toLowerCase()),ko=Ri(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zi=Ri(e=>e?`on${ko(e)}`:""),Wn=(e,n)=>!Object.is(e,n),gi=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},So=(e,n,t,i=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:i,value:t})},_o=e=>{const n=parseFloat(e);return isNaN(n)?e:n},El=e=>{const n=ve(e)?Number(e):NaN;return isNaN(n)?e:n};let wr;const Fi=()=>wr||(wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ii(e){if(D(e)){const n={};for(let t=0;t<e.length;t++){const i=e[t],s=ve(i)?zl(i):Ii(i);if(s)for(const r in s)n[r]=s[r]}return n}else if(ve(e)||de(e))return e}const Ml=/;(?![^(]*\))/g,xl=/:([^]+)/,Ll=/\/\*[^]*?\*\//g;function zl(e){const n={};return e.replace(Ll,"").split(Ml).forEach(t=>{if(t){const i=t.split(xl);i.length>1&&(n[i[0].trim()]=i[1].trim())}}),n}function pt(e){let n="";if(ve(e))n=e;else if(D(e))for(let t=0;t<e.length;t++){const i=pt(e[t]);i&&(n+=i+" ")}else if(de(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pl=As(Al);function Co(e){return!!e||e===""}function Rl(e,n){if(e.length!==n.length)return!1;let t=!0;for(let i=0;t&&i<e.length;i++)t=Jt(e[i],n[i]);return t}function Jt(e,n){if(e===n)return!0;let t=yr(e),i=yr(n);if(t||i)return t&&i?e.getTime()===n.getTime():!1;if(t=wn(e),i=wn(n),t||i)return e===n;if(t=D(e),i=D(n),t||i)return t&&i?Rl(e,n):!1;if(t=de(e),i=de(n),t||i){if(!t||!i)return!1;const s=Object.keys(e).length,r=Object.keys(n).length;if(s!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),c=n.hasOwnProperty(o);if(l&&!c||!l&&c||!Jt(e[o],n[o]))return!1}}return String(e)===String(n)}function Is(e,n){return e.findIndex(t=>Jt(t,n))}const To=e=>!!(e&&e.__v_isRef===!0),ie=e=>ve(e)?e:e==null?"":D(e)||de(e)&&(e.toString===yo||!$(e.toString))?To(e)?ie(e.value):JSON.stringify(e,Eo,2):String(e),Eo=(e,n)=>To(n)?Eo(e,n.value):mt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[i,s],r)=>(t[Qi(i,r)+" =>"]=s,t),{})}:kt(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Qi(t))}:wn(n)?Qi(n):de(n)&&!D(n)&&!wo(n)?String(n):n,Qi=(e,n="")=>{var t;return wn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let je;class Fl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=je,!n&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=je;try{return je=this,n()}finally{je=t}}}on(){++this._on===1&&(this.prevScope=je,je=this)}off(){this._on>0&&--this._on===0&&(je=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Il(){return je}let ge;const es=new WeakSet;class Mo{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,je&&je.active&&je.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,es.has(this)&&(es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kr(this),zo(this);const n=ge,t=un;ge=this,un=!0;try{return this.fn()}finally{Ao(this),ge=n,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Bs(n);this.deps=this.depsTail=void 0,kr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ps(this)&&this.run()}get dirty(){return ps(this)}}let xo=0,Rt,Ft;function Lo(e,n=!1){if(e.flags|=8,n){e.next=Ft,Ft=e;return}e.next=Rt,Rt=e}function Hs(){xo++}function Os(){if(--xo>0)return;if(Ft){let n=Ft;for(Ft=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;Rt;){let n=Rt;for(Rt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(i){e||(e=i)}n=t}}if(e)throw e}function zo(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Ao(e){let n,t=e.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Bs(i),Hl(i)):n=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=n,e.depsTail=t}function ps(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Po(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Po(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dt)||(e.globalVersion=Dt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ps(e))))return;e.flags|=2;const n=e.dep,t=ge,i=un;ge=e,un=!0;try{zo(e);const s=e.fn(e._value);(n.version===0||Wn(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{ge=t,un=i,Ao(e),e.flags&=-3}}function Bs(e,n=!1){const{dep:t,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),t.subs===e&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Bs(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Hl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let un=!0;const Ro=[];function zn(){Ro.push(un),un=!1}function An(){const e=Ro.pop();un=e===void 0?!0:e}function kr(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=ge;ge=void 0;try{n()}finally{ge=t}}}let Dt=0;class Ol{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ds{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!ge||!un||ge===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ge)t=this.activeLink=new Ol(ge,this),ge.deps?(t.prevDep=ge.depsTail,ge.depsTail.nextDep=t,ge.depsTail=t):ge.deps=ge.depsTail=t,Fo(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ge.depsTail,t.nextDep=void 0,ge.depsTail.nextDep=t,ge.depsTail=t,ge.deps===t&&(ge.deps=i)}return t}trigger(n){this.version++,Dt++,this.notify(n)}notify(n){Hs();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Os()}}}function Fo(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let i=n.deps;i;i=i.nextDep)Fo(i)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const gs=new WeakMap,it=Symbol(""),bs=Symbol(""),Nt=Symbol("");function Pe(e,n,t){if(un&&ge){let i=gs.get(e);i||gs.set(e,i=new Map);let s=i.get(t);s||(i.set(t,s=new Ds),s.map=i,s.key=t),s.track()}}function xn(e,n,t,i,s,r){const o=gs.get(e);if(!o){Dt++;return}const l=c=>{c&&c.trigger()};if(Hs(),n==="clear")o.forEach(l);else{const c=D(e),p=c&&Fs(t);if(c&&t==="length"){const h=Number(i);o.forEach((g,_)=>{(_==="length"||_===Nt||!wn(_)&&_>=h)&&l(g)})}else switch((t!==void 0||o.has(void 0))&&l(o.get(t)),p&&l(o.get(Nt)),n){case"add":c?p&&l(o.get("length")):(l(o.get(it)),mt(e)&&l(o.get(bs)));break;case"delete":c||(l(o.get(it)),mt(e)&&l(o.get(bs)));break;case"set":mt(e)&&l(o.get(it));break}}Os()}function ct(e){const n=oe(e);return n===e?n:(Pe(n,"iterate",Nt),ln(e)?n:n.map(dn))}function Hi(e){return Pe(e=oe(e),"iterate",Nt),e}function In(e,n){return Pn(e)?st(e)?wt(dn(n)):wt(n):dn(n)}const Bl={__proto__:null,[Symbol.iterator](){return ns(this,Symbol.iterator,e=>In(this,e))},concat(...e){return ct(this).concat(...e.map(n=>D(n)?ct(n):n))},entries(){return ns(this,"entries",e=>(e[1]=In(this,e[1]),e))},every(e,n){return Cn(this,"every",e,n,void 0,arguments)},filter(e,n){return Cn(this,"filter",e,n,t=>t.map(i=>In(this,i)),arguments)},find(e,n){return Cn(this,"find",e,n,t=>In(this,t),arguments)},findIndex(e,n){return Cn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Cn(this,"findLast",e,n,t=>In(this,t),arguments)},findLastIndex(e,n){return Cn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Cn(this,"forEach",e,n,void 0,arguments)},includes(...e){return ts(this,"includes",e)},indexOf(...e){return ts(this,"indexOf",e)},join(e){return ct(this).join(e)},lastIndexOf(...e){return ts(this,"lastIndexOf",e)},map(e,n){return Cn(this,"map",e,n,void 0,arguments)},pop(){return xt(this,"pop")},push(...e){return xt(this,"push",e)},reduce(e,...n){return Sr(this,"reduce",e,n)},reduceRight(e,...n){return Sr(this,"reduceRight",e,n)},shift(){return xt(this,"shift")},some(e,n){return Cn(this,"some",e,n,void 0,arguments)},splice(...e){return xt(this,"splice",e)},toReversed(){return ct(this).toReversed()},toSorted(e){return ct(this).toSorted(e)},toSpliced(...e){return ct(this).toSpliced(...e)},unshift(...e){return xt(this,"unshift",e)},values(){return ns(this,"values",e=>In(this,e))}};function ns(e,n,t){const i=Hi(e),s=i[n]();return i!==e&&!ln(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const Dl=Array.prototype;function Cn(e,n,t,i,s,r){const o=Hi(e),l=o!==e&&!ln(e),c=o[n];if(c!==Dl[n]){const g=c.apply(e,r);return l?dn(g):g}let p=t;o!==e&&(l?p=function(g,_){return t.call(this,In(e,g),_,e)}:t.length>2&&(p=function(g,_){return t.call(this,g,_,e)}));const h=c.call(o,p,i);return l&&s?s(h):h}function Sr(e,n,t,i){const s=Hi(e);let r=t;return s!==e&&(ln(e)?t.length>3&&(r=function(o,l,c){return t.call(this,o,l,c,e)}):r=function(o,l,c){return t.call(this,o,In(e,l),c,e)}),s[n](r,...i)}function ts(e,n,t){const i=oe(e);Pe(i,"iterate",Nt);const s=i[n](...t);return(s===-1||s===!1)&&Ks(t[0])?(t[0]=oe(t[0]),i[n](...t)):s}function xt(e,n,t=[]){zn(),Hs();const i=oe(e)[n].apply(e,t);return Os(),An(),i}const Nl=As("__proto__,__v_isRef,__isVue"),Io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(wn));function Wl(e){wn(e)||(e=String(e));const n=oe(this);return Pe(n,"has",e),n.hasOwnProperty(e)}class Ho{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,i){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Yl:No:r?Do:Bo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(i)?n:void 0;const o=D(n);if(!s){let c;if(o&&(c=Bl[t]))return c;if(t==="hasOwnProperty")return Wl}const l=Reflect.get(n,t,Fe(n)?n:i);if((wn(t)?Io.has(t):Nl(t))||(s||Pe(n,"get",t),r))return l;if(Fe(l)){const c=o&&Fs(t)?l:l.value;return s&&de(c)?ys(c):c}return de(l)?s?ys(l):gt(l):l}}class Oo extends Ho{constructor(n=!1){super(!1,n)}set(n,t,i,s){let r=n[t];const o=D(n)&&Fs(t);if(!this._isShallow){const p=Pn(r);if(!ln(i)&&!Pn(i)&&(r=oe(r),i=oe(i)),!o&&Fe(r)&&!Fe(i))return p||(r.value=i),!0}const l=o?Number(t)<n.length:ae(n,t),c=Reflect.set(n,t,i,Fe(n)?n:s);return n===oe(s)&&(l?Wn(i,r)&&xn(n,"set",t,i):xn(n,"add",t,i)),c}deleteProperty(n,t){const i=ae(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&i&&xn(n,"delete",t,void 0),s}has(n,t){const i=Reflect.has(n,t);return(!wn(t)||!Io.has(t))&&Pe(n,"has",t),i}ownKeys(n){return Pe(n,"iterate",D(n)?"length":it),Reflect.ownKeys(n)}}class Kl extends Ho{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const jl=new Oo,Vl=new Kl,Gl=new Oo(!0);const vs=e=>e,ri=e=>Reflect.getPrototypeOf(e);function Ul(e,n,t){return function(...i){const s=this.__v_raw,r=oe(s),o=mt(r),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,p=s[e](...i),h=t?vs:n?wt:dn;return!n&&Pe(r,"iterate",c?bs:it),{next(){const{value:g,done:_}=p.next();return _?{value:g,done:_}:{value:l?[h(g[0]),h(g[1])]:h(g),done:_}},[Symbol.iterator](){return this}}}}function oi(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function $l(e,n){const t={get(s){const r=this.__v_raw,o=oe(r),l=oe(s);e||(Wn(s,l)&&Pe(o,"get",s),Pe(o,"get",l));const{has:c}=ri(o),p=n?vs:e?wt:dn;if(c.call(o,s))return p(r.get(s));if(c.call(o,l))return p(r.get(l));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Pe(oe(s),"iterate",it),s.size},has(s){const r=this.__v_raw,o=oe(r),l=oe(s);return e||(Wn(s,l)&&Pe(o,"has",s),Pe(o,"has",l)),s===l?r.has(s):r.has(s)||r.has(l)},forEach(s,r){const o=this,l=o.__v_raw,c=oe(l),p=n?vs:e?wt:dn;return!e&&Pe(c,"iterate",it),l.forEach((h,g)=>s.call(r,p(h),p(g),o))}};return Te(t,e?{add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear")}:{add(s){!n&&!ln(s)&&!Pn(s)&&(s=oe(s));const r=oe(this);return ri(r).has.call(r,s)||(r.add(s),xn(r,"add",s,s)),this},set(s,r){!n&&!ln(r)&&!Pn(r)&&(r=oe(r));const o=oe(this),{has:l,get:c}=ri(o);let p=l.call(o,s);p||(s=oe(s),p=l.call(o,s));const h=c.call(o,s);return o.set(s,r),p?Wn(r,h)&&xn(o,"set",s,r):xn(o,"add",s,r),this},delete(s){const r=oe(this),{has:o,get:l}=ri(r);let c=o.call(r,s);c||(s=oe(s),c=o.call(r,s)),l&&l.call(r,s);const p=r.delete(s);return c&&xn(r,"delete",s,void 0),p},clear(){const s=oe(this),r=s.size!==0,o=s.clear();return r&&xn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ul(s,e,n)}),t}function Ns(e,n){const t=$l(e,n);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(ae(t,s)&&s in i?t:i,s,r)}const Jl={get:Ns(!1,!1)},ql={get:Ns(!1,!0)},Xl={get:Ns(!0,!1)};const Bo=new WeakMap,Do=new WeakMap,No=new WeakMap,Yl=new WeakMap;function Zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ql(e){return e.__v_skip||!Object.isExtensible(e)?0:Zl(_l(e))}function gt(e){return Pn(e)?e:Ws(e,!1,jl,Jl,Bo)}function ec(e){return Ws(e,!1,Gl,ql,Do)}function ys(e){return Ws(e,!0,Vl,Xl,No)}function Ws(e,n,t,i,s){if(!de(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=Ql(e);if(r===0)return e;const o=s.get(e);if(o)return o;const l=new Proxy(e,r===2?i:t);return s.set(e,l),l}function st(e){return Pn(e)?st(e.__v_raw):!!(e&&e.__v_isReactive)}function Pn(e){return!!(e&&e.__v_isReadonly)}function ln(e){return!!(e&&e.__v_isShallow)}function Ks(e){return e?!!e.__v_raw:!1}function oe(e){const n=e&&e.__v_raw;return n?oe(n):e}function nc(e){return!ae(e,"__v_skip")&&Object.isExtensible(e)&&So(e,"__v_skip",!0),e}const dn=e=>de(e)?gt(e):e,wt=e=>de(e)?ys(e):e;function Fe(e){return e?e.__v_isRef===!0:!1}function we(e){return tc(e,!1)}function tc(e,n){return Fe(e)?e:new ic(e,n)}class ic{constructor(n,t){this.dep=new Ds,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:oe(n),this._value=t?n:dn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,i=this.__v_isShallow||ln(n)||Pn(n);n=i?n:oe(n),Wn(n,t)&&(this._rawValue=n,this._value=i?n:dn(n),this.dep.trigger())}}function sc(e){return Fe(e)?e.value:e}const rc={get:(e,n,t)=>n==="__v_raw"?e:sc(Reflect.get(e,n,t)),set:(e,n,t,i)=>{const s=e[n];return Fe(s)&&!Fe(t)?(s.value=t,!0):Reflect.set(e,n,t,i)}};function Wo(e){return st(e)?e:new Proxy(e,rc)}class oc{constructor(n,t,i){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Ds(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return Lo(this,!0),!0}get value(){const n=this.dep.track();return Po(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function ac(e,n,t=!1){let i,s;return $(e)?i=e:(i=e.get,s=e.set),new oc(i,s,t)}const ai={},Si=new WeakMap;let Qn;function lc(e,n=!1,t=Qn){if(t){let i=Si.get(t);i||Si.set(t,i=[]),i.push(e)}}function cc(e,n,t=me){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:l,call:c}=t,p=I=>s?I:ln(I)||s===!1||s===0?Ln(I,1):Ln(I);let h,g,_,E,z=!1,F=!1;if(Fe(e)?(g=()=>e.value,z=ln(e)):st(e)?(g=()=>p(e),z=!0):D(e)?(F=!0,z=e.some(I=>st(I)||ln(I)),g=()=>e.map(I=>{if(Fe(I))return I.value;if(st(I))return p(I);if($(I))return c?c(I,2):I()})):$(e)?n?g=c?()=>c(e,2):e:g=()=>{if(_){zn();try{_()}finally{An()}}const I=Qn;Qn=h;try{return c?c(e,3,[E]):e(E)}finally{Qn=I}}:g=yn,n&&s){const I=g,X=s===!0?1/0:s;g=()=>Ln(I(),X)}const se=Il(),K=()=>{h.stop(),se&&se.active&&Rs(se.effects,h)};if(r&&n){const I=n;n=(...X)=>{I(...X),K()}}let V=F?new Array(e.length).fill(ai):ai;const P=I=>{if(!(!(h.flags&1)||!h.dirty&&!I))if(n){const X=h.run();if(s||z||(F?X.some((he,G)=>Wn(he,V[G])):Wn(X,V))){_&&_();const he=Qn;Qn=h;try{const G=[X,V===ai?void 0:F&&V[0]===ai?[]:V,E];V=X,c?c(n,3,G):n(...G)}finally{Qn=he}}}else h.run()};return l&&l(P),h=new Mo(g),h.scheduler=o?()=>o(P,!1):P,E=I=>lc(I,!1,h),_=h.onStop=()=>{const I=Si.get(h);if(I){if(c)c(I,4);else for(const X of I)X();Si.delete(h)}},n?i?P(!0):V=h.run():o?o(P.bind(null,!0),!0):h.run(),K.pause=h.pause.bind(h),K.resume=h.resume.bind(h),K.stop=K,K}function Ln(e,n=1/0,t){if(n<=0||!de(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Fe(e))Ln(e.value,n,t);else if(D(e))for(let i=0;i<e.length;i++)Ln(e[i],n,t);else if(kt(e)||mt(e))e.forEach(i=>{Ln(i,n,t)});else if(wo(e)){for(const i in e)Ln(e[i],n,t);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Ln(e[i],n,t)}return e}function qt(e,n,t,i){try{return i?e(...i):e()}catch(s){Oi(s,n,t)}}function hn(e,n,t,i){if($(e)){const s=qt(e,n,t,i);return s&&vo(s)&&s.catch(r=>{Oi(r,n,t)}),s}if(D(e)){const s=[];for(let r=0;r<e.length;r++)s.push(hn(e[r],n,t,i));return s}}function Oi(e,n,t,i=!0){const s=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=n&&n.appContext.config||me;if(n){let l=n.parent;const c=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h){for(let g=0;g<h.length;g++)if(h[g](e,c,p)===!1)return}l=l.parent}if(r){zn(),qt(r,null,10,[e,c,p]),An();return}}uc(e,t,s,i,o)}function uc(e,n,t,i=!0,s=!1){if(s)throw e;console.error(e)}const Be=[];let bn=-1;const bt=[];let Hn=null,ht=0;const Ko=Promise.resolve();let _i=null;function Xe(e){const n=_i||Ko;return e?n.then(this?e.bind(this):e):n}function dc(e){let n=bn+1,t=Be.length;for(;n<t;){const i=n+t>>>1,s=Be[i],r=Wt(s);r<e||r===e&&s.flags&2?n=i+1:t=i}return n}function js(e){if(!(e.flags&1)){const n=Wt(e),t=Be[Be.length-1];!t||!(e.flags&2)&&n>=Wt(t)?Be.push(e):Be.splice(dc(n),0,e),e.flags|=1,jo()}}function jo(){_i||(_i=Ko.then(Go))}function hc(e){D(e)?bt.push(...e):Hn&&e.id===-1?Hn.splice(ht+1,0,e):e.flags&1||(bt.push(e),e.flags|=1),jo()}function _r(e,n,t=bn+1){for(;t<Be.length;t++){const i=Be[t];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Be.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vo(e){if(bt.length){const n=[...new Set(bt)].sort((t,i)=>Wt(t)-Wt(i));if(bt.length=0,Hn){Hn.push(...n);return}for(Hn=n,ht=0;ht<Hn.length;ht++){const t=Hn[ht];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Hn=null,ht=0}}const Wt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Go(e){try{for(bn=0;bn<Be.length;bn++){const n=Be[bn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),qt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;bn<Be.length;bn++){const n=Be[bn];n&&(n.flags&=-2)}bn=-1,Be.length=0,Vo(),_i=null,(Be.length||bt.length)&&Go()}}let an=null,Uo=null;function Ci(e){const n=an;return an=e,Uo=e&&e.type.__scopeId||null,n}function ws(e,n=an,t){if(!n||e._n)return e;const i=(...s)=>{i._d&&Mi(-1);const r=Ci(n);let o;try{o=e(...s)}finally{Ci(r),i._d&&Mi(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function is(e,n){if(an===null)return e;const t=Vi(an),i=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[r,o,l,c=me]=n[s];r&&($(r)&&(r={mounted:r,updated:r}),r.deep&&Ln(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function qn(e,n,t,i){const s=e.dirs,r=n&&n.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let c=l.dir[i];c&&(zn(),hn(c,t,8,[e.el,l,e,n]),An())}}const fc=Symbol("_vte"),$o=e=>e.__isTeleport,Mn=Symbol("_leaveCb"),li=Symbol("_enterCb");function mc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ni(()=>{e.isMounted=!0}),Wi(()=>{e.isUnmounting=!0}),e}const on=[Function,Array],Jo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:on,onEnter:on,onAfterEnter:on,onEnterCancelled:on,onBeforeLeave:on,onLeave:on,onAfterLeave:on,onLeaveCancelled:on,onBeforeAppear:on,onAppear:on,onAfterAppear:on,onAppearCancelled:on},qo=e=>{const n=e.subTree;return n.component?qo(n.component):n},pc={name:"BaseTransition",props:Jo,setup(e,{slots:n}){const t=ka(),i=mc();return()=>{const s=n.default&&Zo(n.default(),!0);if(!s||!s.length)return;const r=Xo(s),o=oe(e),{mode:l}=o;if(i.isLeaving)return ss(r);const c=Cr(r);if(!c)return ss(r);let p=ks(c,o,i,t,g=>p=g);c.type!==De&&Kt(c,p);let h=t.subTree&&Cr(t.subTree);if(h&&h.type!==De&&!nt(h,c)&&qo(t).type!==De){let g=ks(h,o,i,t);if(Kt(h,g),l==="out-in"&&c.type!==De)return i.isLeaving=!0,g.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete g.afterLeave,h=void 0},ss(r);l==="in-out"&&c.type!==De?g.delayLeave=(_,E,z)=>{const F=Yo(i,h);F[String(h.key)]=h,_[Mn]=()=>{E(),_[Mn]=void 0,delete p.delayedLeave,h=void 0},p.delayedLeave=()=>{z(),delete p.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return r}}};function Xo(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==De){n=t;break}}return n}const gc=pc;function Yo(e,n){const{leavingVNodes:t}=e;let i=t.get(n.type);return i||(i=Object.create(null),t.set(n.type,i)),i}function ks(e,n,t,i,s){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:h,onEnterCancelled:g,onBeforeLeave:_,onLeave:E,onAfterLeave:z,onLeaveCancelled:F,onBeforeAppear:se,onAppear:K,onAfterAppear:V,onAppearCancelled:P}=n,I=String(e.key),X=Yo(t,e),he=(N,Y)=>{N&&hn(N,i,9,Y)},G=(N,Y)=>{const te=Y[1];he(N,Y),D(N)?N.every(L=>L.length<=1)&&te():N.length<=1&&te()},ne={mode:o,persisted:l,beforeEnter(N){let Y=c;if(!t.isMounted)if(r)Y=se||c;else return;N[Mn]&&N[Mn](!0);const te=X[I];te&&nt(e,te)&&te.el[Mn]&&te.el[Mn](),he(Y,[N])},enter(N){let Y=p,te=h,L=g;if(!t.isMounted)if(r)Y=K||p,te=V||h,L=P||g;else return;let Z=!1;const pe=N[li]=ke=>{Z||(Z=!0,ke?he(L,[N]):he(te,[N]),ne.delayedLeave&&ne.delayedLeave(),N[li]=void 0)};Y?G(Y,[N,pe]):pe()},leave(N,Y){const te=String(e.key);if(N[li]&&N[li](!0),t.isUnmounting)return Y();he(_,[N]);let L=!1;const Z=N[Mn]=pe=>{L||(L=!0,Y(),pe?he(F,[N]):he(z,[N]),N[Mn]=void 0,X[te]===e&&delete X[te])};X[te]=e,E?G(E,[N,Z]):Z()},clone(N){const Y=ks(N,n,t,i,s);return s&&s(Y),Y}};return ne}function ss(e){if(Bi(e))return e=jn(e),e.children=null,e}function Cr(e){if(!Bi(e))return $o(e.type)&&e.children?Xo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&$(t.default))return t.default()}}function Kt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,Kt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Zo(e,n=!1,t){let i=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const l=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Ve?(o.patchFlag&128&&s++,i=i.concat(Zo(o.children,n,l))):(n||o.type!==De)&&i.push(l!=null?jn(o,{key:l}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function Qo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Ti=new WeakMap;function It(e,n,t,i,s=!1){if(D(e)){e.forEach((z,F)=>It(z,n&&(D(n)?n[F]:n),t,i,s));return}if(Ht(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&It(e,n,t,i.component.subTree);return}const r=i.shapeFlag&4?Vi(i.component):i.el,o=s?null:r,{i:l,r:c}=e,p=n&&n.r,h=l.refs===me?l.refs={}:l.refs,g=l.setupState,_=oe(g),E=g===me?bo:z=>ae(_,z);if(p!=null&&p!==c){if(Tr(n),ve(p))h[p]=null,E(p)&&(g[p]=null);else if(Fe(p)){p.value=null;const z=n;z.k&&(h[z.k]=null)}}if($(c))qt(c,l,12,[o,h]);else{const z=ve(c),F=Fe(c);if(z||F){const se=()=>{if(e.f){const K=z?E(c)?g[c]:h[c]:c.value;if(s)D(K)&&Rs(K,r);else if(D(K))K.includes(r)||K.push(r);else if(z)h[c]=[r],E(c)&&(g[c]=h[c]);else{const V=[r];c.value=V,e.k&&(h[e.k]=V)}}else z?(h[c]=o,E(c)&&(g[c]=o)):F&&(c.value=o,e.k&&(h[e.k]=o))};if(o){const K=()=>{se(),Ti.delete(e)};K.id=-1,Ti.set(e,K),Ye(K,t)}else Tr(e),se()}}}function Tr(e){const n=Ti.get(e);n&&(n.flags|=8,Ti.delete(e))}Fi().requestIdleCallback;Fi().cancelIdleCallback;const Ht=e=>!!e.type.__asyncLoader,Bi=e=>e.type.__isKeepAlive;function bc(e,n){ea(e,"a",n)}function vc(e,n){ea(e,"da",n)}function ea(e,n,t=Ne){const i=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Di(n,i,t),t){let s=t.parent;for(;s&&s.parent;)Bi(s.parent.vnode)&&yc(i,n,t,s),s=s.parent}}function yc(e,n,t,i){const s=Di(n,e,i,!0);na(()=>{Rs(i[n],s)},t)}function Di(e,n,t=Ne,i=!1){if(t){const s=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...o)=>{zn();const l=Xt(t),c=hn(n,t,e,o);return l(),An(),c});return i?s.unshift(r):s.push(r),r}}const Rn=e=>(n,t=Ne)=>{(!Vt||e==="sp")&&Di(e,(...i)=>n(...i),t)},wc=Rn("bm"),Ni=Rn("m"),kc=Rn("bu"),Sc=Rn("u"),Wi=Rn("bum"),na=Rn("um"),_c=Rn("sp"),Cc=Rn("rtg"),Tc=Rn("rtc");function Ec(e,n=Ne){Di("ec",e,n)}const Mc=Symbol.for("v-ndc");function ci(e,n,t,i){let s;const r=t,o=D(e);if(o||ve(e)){const l=o&&st(e);let c=!1,p=!1;l&&(c=!ln(e),p=Pn(e),e=Hi(e)),s=new Array(e.length);for(let h=0,g=e.length;h<g;h++)s[h]=n(c?p?wt(dn(e[h])):dn(e[h]):e[h],h,void 0,r)}else if(typeof e=="number"){s=new Array(e);for(let l=0;l<e;l++)s[l]=n(l+1,l,void 0,r)}else if(de(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>n(l,c,void 0,r));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,p=l.length;c<p;c++){const h=l[c];s[c]=n(e[h],h,c,r)}}else s=[];return s}const Ss=e=>e?Sa(e)?Vi(e):Ss(e.parent):null,Ot=Te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ss(e.parent),$root:e=>Ss(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>{js(e.update)}),$nextTick:e=>e.n||(e.n=Xe.bind(e.proxy)),$watch:e=>Dc.bind(e)}),rs=(e,n)=>e!==me&&!e.__isScriptSetup&&ae(e,n),xc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:c}=e;if(n[0]!=="$"){const _=o[n];if(_!==void 0)switch(_){case 1:return i[n];case 2:return s[n];case 4:return t[n];case 3:return r[n]}else{if(rs(i,n))return o[n]=1,i[n];if(s!==me&&ae(s,n))return o[n]=2,s[n];if(ae(r,n))return o[n]=3,r[n];if(t!==me&&ae(t,n))return o[n]=4,t[n];_s&&(o[n]=0)}}const p=Ot[n];let h,g;if(p)return n==="$attrs"&&Pe(e.attrs,"get",""),p(e);if((h=l.__cssModules)&&(h=h[n]))return h;if(t!==me&&ae(t,n))return o[n]=4,t[n];if(g=c.config.globalProperties,ae(g,n))return g[n]},set({_:e},n,t){const{data:i,setupState:s,ctx:r}=e;return rs(s,n)?(s[n]=t,!0):i!==me&&ae(i,n)?(i[n]=t,!0):ae(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:i,appContext:s,props:r,type:o}},l){let c;return!!(t[l]||e!==me&&l[0]!=="$"&&ae(e,l)||rs(n,l)||ae(r,l)||ae(i,l)||ae(Ot,l)||ae(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ae(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Er(e){return D(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let _s=!0;function Lc(e){const n=ia(e),t=e.proxy,i=e.ctx;_s=!1,n.beforeCreate&&Mr(n.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:l,provide:c,inject:p,created:h,beforeMount:g,mounted:_,beforeUpdate:E,updated:z,activated:F,deactivated:se,beforeDestroy:K,beforeUnmount:V,destroyed:P,unmounted:I,render:X,renderTracked:he,renderTriggered:G,errorCaptured:ne,serverPrefetch:N,expose:Y,inheritAttrs:te,components:L,directives:Z,filters:pe}=n;if(p&&zc(p,i,null),o)for(const j in o){const J=o[j];$(J)&&(i[j]=J.bind(t))}if(s){const j=s.call(t,t);de(j)&&(e.data=gt(j))}if(_s=!0,r)for(const j in r){const J=r[j],Ge=$(J)?J.bind(t,t):$(J.get)?J.get.bind(t,t):yn,kn=!$(J)&&$(J.set)?J.set.bind(t):yn,Ue=U({get:Ge,set:kn});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:Ee=>Ue.value=Ee})}if(l)for(const j in l)ta(l[j],i,t,j);if(c){const j=$(c)?c.call(t):c;Reflect.ownKeys(j).forEach(J=>{Hc(J,j[J])})}h&&Mr(h,e,"c");function O(j,J){D(J)?J.forEach(Ge=>j(Ge.bind(t))):J&&j(J.bind(t))}if(O(wc,g),O(Ni,_),O(kc,E),O(Sc,z),O(bc,F),O(vc,se),O(Ec,ne),O(Tc,he),O(Cc,G),O(Wi,V),O(na,I),O(_c,N),D(Y))if(Y.length){const j=e.exposed||(e.exposed={});Y.forEach(J=>{Object.defineProperty(j,J,{get:()=>t[J],set:Ge=>t[J]=Ge,enumerable:!0})})}else e.exposed||(e.exposed={});X&&e.render===yn&&(e.render=X),te!=null&&(e.inheritAttrs=te),L&&(e.components=L),Z&&(e.directives=Z),N&&Qo(e)}function zc(e,n,t=yn){D(e)&&(e=Cs(e));for(const i in e){const s=e[i];let r;de(s)?"default"in s?r=bi(s.from||i,s.default,!0):r=bi(s.from||i):r=bi(s),Fe(r)?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):n[i]=r}}function Mr(e,n,t){hn(D(e)?e.map(i=>i.bind(n.proxy)):e.bind(n.proxy),n,t)}function ta(e,n,t,i){let s=i.includes(".")?oa(t,i):()=>t[i];if(ve(e)){const r=n[e];$(r)&&Ze(s,r)}else if($(e))Ze(s,e.bind(t));else if(de(e))if(D(e))e.forEach(r=>ta(r,n,t,i));else{const r=$(e.handler)?e.handler.bind(t):n[e.handler];$(r)&&Ze(s,r,e)}}function ia(e){const n=e.type,{mixins:t,extends:i}=n,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(n);let c;return l?c=l:!s.length&&!t&&!i?c=n:(c={},s.length&&s.forEach(p=>Ei(c,p,o,!0)),Ei(c,n,o)),de(n)&&r.set(n,c),c}function Ei(e,n,t,i=!1){const{mixins:s,extends:r}=n;r&&Ei(e,r,t,!0),s&&s.forEach(o=>Ei(e,o,t,!0));for(const o in n)if(!(i&&o==="expose")){const l=Ac[o]||t&&t[o];e[o]=l?l(e[o],n[o]):n[o]}return e}const Ac={data:xr,props:Lr,emits:Lr,methods:zt,computed:zt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:zt,directives:zt,watch:Rc,provide:xr,inject:Pc};function xr(e,n){return n?e?function(){return Te($(e)?e.call(this,this):e,$(n)?n.call(this,this):n)}:n:e}function Pc(e,n){return zt(Cs(e),Cs(n))}function Cs(e){if(D(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Oe(e,n){return e?[...new Set([].concat(e,n))]:n}function zt(e,n){return e?Te(Object.create(null),e,n):n}function Lr(e,n){return e?D(e)&&D(n)?[...new Set([...e,...n])]:Te(Object.create(null),Er(e),Er(n??{})):n}function Rc(e,n){if(!e)return n;if(!n)return e;const t=Te(Object.create(null),e);for(const i in n)t[i]=Oe(e[i],n[i]);return t}function sa(){return{app:null,config:{isNativeTag:bo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fc=0;function Ic(e,n){return function(i,s=null){$(i)||(i=Te({},i)),s!=null&&!de(s)&&(s=null);const r=sa(),o=new WeakSet,l=[];let c=!1;const p=r.app={_uid:Fc++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:yu,get config(){return r.config},set config(h){},use(h,...g){return o.has(h)||(h&&$(h.install)?(o.add(h),h.install(p,...g)):$(h)&&(o.add(h),h(p,...g))),p},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),p},component(h,g){return g?(r.components[h]=g,p):r.components[h]},directive(h,g){return g?(r.directives[h]=g,p):r.directives[h]},mount(h,g,_){if(!c){const E=p._ceVNode||Re(i,s);return E.appContext=r,_===!0?_="svg":_===!1&&(_=void 0),e(E,h,_),c=!0,p._container=h,h.__vue_app__=p,Vi(E.component)}},onUnmount(h){l.push(h)},unmount(){c&&(hn(l,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(h,g){return r.provides[h]=g,p},runWithContext(h){const g=vt;vt=p;try{return h()}finally{vt=g}}};return p}}let vt=null;function Hc(e,n){if(Ne){let t=Ne.provides;const i=Ne.parent&&Ne.parent.provides;i===t&&(t=Ne.provides=Object.create(i)),t[e]=n}}function bi(e,n,t=!1){const i=ka();if(i||vt){let s=vt?vt._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&$(n)?n.call(i&&i.proxy):n}}const Oc=Symbol.for("v-scx"),Bc=()=>bi(Oc);function Ze(e,n,t){return ra(e,n,t)}function ra(e,n,t=me){const{immediate:i,deep:s,flush:r,once:o}=t,l=Te({},t),c=n&&i||!n&&r!=="post";let p;if(Vt){if(r==="sync"){const E=Bc();p=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=yn,E.resume=yn,E.pause=yn,E}}const h=Ne;l.call=(E,z,F)=>hn(E,h,z,F);let g=!1;r==="post"?l.scheduler=E=>{Ye(E,h&&h.suspense)}:r!=="sync"&&(g=!0,l.scheduler=(E,z)=>{z?E():js(E)}),l.augmentJob=E=>{n&&(E.flags|=4),g&&(E.flags|=2,h&&(E.id=h.uid,E.i=h))};const _=cc(e,n,l);return Vt&&(p?p.push(_):c&&_()),_}function Dc(e,n,t){const i=this.proxy,s=ve(e)?e.includes(".")?oa(i,e):()=>i[e]:e.bind(i,i);let r;$(n)?r=n:(r=n.handler,t=n);const o=Xt(this),l=ra(s,r.bind(i),t);return o(),l}function oa(e,n){const t=n.split(".");return()=>{let i=e;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Nc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${Kn(n)}Modifiers`]||e[`${ot(n)}Modifiers`];function Wc(e,n,...t){if(e.isUnmounted)return;const i=e.vnode.props||me;let s=t;const r=n.startsWith("update:"),o=r&&Nc(i,n.slice(7));o&&(o.trim&&(s=t.map(h=>ve(h)?h.trim():h)),o.number&&(s=t.map(_o)));let l,c=i[l=Zi(n)]||i[l=Zi(Kn(n))];!c&&r&&(c=i[l=Zi(ot(n))]),c&&hn(c,e,6,s);const p=i[l+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,hn(p,e,6,s)}}const Kc=new WeakMap;function aa(e,n,t=!1){const i=t?Kc:n.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},l=!1;if(!$(e)){const c=p=>{const h=aa(p,n,!0);h&&(l=!0,Te(o,h))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!l?(de(e)&&i.set(e,null),null):(D(r)?r.forEach(c=>o[c]=null):Te(o,r),de(e)&&i.set(e,o),o)}function Ki(e,n){return!e||!Pi(n)?!1:(n=n.slice(2).replace(/Once$/,""),ae(e,n[0].toLowerCase()+n.slice(1))||ae(e,ot(n))||ae(e,n))}function zr(e){const{type:n,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:l,emit:c,render:p,renderCache:h,props:g,data:_,setupState:E,ctx:z,inheritAttrs:F}=e,se=Ci(e);let K,V;try{if(t.shapeFlag&4){const I=s||i,X=I;K=vn(p.call(X,I,h,g,E,_,z)),V=l}else{const I=n;K=vn(I.length>1?I(g,{attrs:l,slots:o,emit:c}):I(g,null)),V=n.props?l:jc(l)}}catch(I){Bt.length=0,Oi(I,e,1),K=Re(De)}let P=K;if(V&&F!==!1){const I=Object.keys(V),{shapeFlag:X}=P;I.length&&X&7&&(r&&I.some(Ps)&&(V=Vc(V,r)),P=jn(P,V,!1,!0))}return t.dirs&&(P=jn(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(t.dirs):t.dirs),t.transition&&Kt(P,t.transition),K=P,Ci(se),K}const jc=e=>{let n;for(const t in e)(t==="class"||t==="style"||Pi(t))&&((n||(n={}))[t]=e[t]);return n},Vc=(e,n)=>{const t={};for(const i in e)(!Ps(i)||!(i.slice(9)in n))&&(t[i]=e[i]);return t};function Gc(e,n,t){const{props:i,children:s,component:r}=e,{props:o,children:l,patchFlag:c}=n,p=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Ar(i,o,p):!!o;if(c&8){const h=n.dynamicProps;for(let g=0;g<h.length;g++){const _=h[g];if(o[_]!==i[_]&&!Ki(p,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?Ar(i,o,p):!0:!!o;return!1}function Ar(e,n,t){const i=Object.keys(n);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(n[r]!==e[r]&&!Ki(t,r))return!0}return!1}function Uc({vnode:e,parent:n},t){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=n.vnode).el=t,n=n.parent;else break}}const la={},ca=()=>Object.create(la),ua=e=>Object.getPrototypeOf(e)===la;function $c(e,n,t,i=!1){const s={},r=ca();e.propsDefaults=Object.create(null),da(e,n,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);t?e.props=i?s:ec(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Jc(e,n,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,l=oe(s),[c]=e.propsOptions;let p=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let g=0;g<h.length;g++){let _=h[g];if(Ki(e.emitsOptions,_))continue;const E=n[_];if(c)if(ae(r,_))E!==r[_]&&(r[_]=E,p=!0);else{const z=Kn(_);s[z]=Ts(c,l,z,E,e,!1)}else E!==r[_]&&(r[_]=E,p=!0)}}}else{da(e,n,s,r)&&(p=!0);let h;for(const g in l)(!n||!ae(n,g)&&((h=ot(g))===g||!ae(n,h)))&&(c?t&&(t[g]!==void 0||t[h]!==void 0)&&(s[g]=Ts(c,l,g,void 0,e,!0)):delete s[g]);if(r!==l)for(const g in r)(!n||!ae(n,g))&&(delete r[g],p=!0)}p&&xn(e.attrs,"set","")}function da(e,n,t,i){const[s,r]=e.propsOptions;let o=!1,l;if(n)for(let c in n){if(Pt(c))continue;const p=n[c];let h;s&&ae(s,h=Kn(c))?!r||!r.includes(h)?t[h]=p:(l||(l={}))[h]=p:Ki(e.emitsOptions,c)||(!(c in i)||p!==i[c])&&(i[c]=p,o=!0)}if(r){const c=oe(t),p=l||me;for(let h=0;h<r.length;h++){const g=r[h];t[g]=Ts(s,c,g,p[g],e,!ae(p,g))}}return o}function Ts(e,n,t,i,s,r){const o=e[t];if(o!=null){const l=ae(o,"default");if(l&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&$(c)){const{propsDefaults:p}=s;if(t in p)i=p[t];else{const h=Xt(s);i=p[t]=c.call(null,n),h()}}else i=c;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===ot(t))&&(i=!0))}return i}const qc=new WeakMap;function ha(e,n,t=!1){const i=t?qc:n.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},l=[];let c=!1;if(!$(e)){const h=g=>{c=!0;const[_,E]=ha(g,n,!0);Te(o,_),E&&l.push(...E)};!t&&n.mixins.length&&n.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!c)return de(e)&&i.set(e,ft),ft;if(D(r))for(let h=0;h<r.length;h++){const g=Kn(r[h]);Pr(g)&&(o[g]=me)}else if(r)for(const h in r){const g=Kn(h);if(Pr(g)){const _=r[h],E=o[g]=D(_)||$(_)?{type:_}:Te({},_),z=E.type;let F=!1,se=!0;if(D(z))for(let K=0;K<z.length;++K){const V=z[K],P=$(V)&&V.name;if(P==="Boolean"){F=!0;break}else P==="String"&&(se=!1)}else F=$(z)&&z.name==="Boolean";E[0]=F,E[1]=se,(F||ae(E,"default"))&&l.push(g)}}const p=[o,l];return de(e)&&i.set(e,p),p}function Pr(e){return e[0]!=="$"&&!Pt(e)}const Vs=e=>e==="_"||e==="_ctx"||e==="$stable",Gs=e=>D(e)?e.map(vn):[vn(e)],Xc=(e,n,t)=>{if(n._n)return n;const i=ws((...s)=>Gs(n(...s)),t);return i._c=!1,i},fa=(e,n,t)=>{const i=e._ctx;for(const s in e){if(Vs(s))continue;const r=e[s];if($(r))n[s]=Xc(s,r,i);else if(r!=null){const o=Gs(r);n[s]=()=>o}}},ma=(e,n)=>{const t=Gs(n);e.slots.default=()=>t},pa=(e,n,t)=>{for(const i in n)(t||!Vs(i))&&(e[i]=n[i])},Yc=(e,n,t)=>{const i=e.slots=ca();if(e.vnode.shapeFlag&32){const s=n._;s?(pa(i,n,t),t&&So(i,"_",s,!0)):fa(n,i)}else n&&ma(e,n)},Zc=(e,n,t)=>{const{vnode:i,slots:s}=e;let r=!0,o=me;if(i.shapeFlag&32){const l=n._;l?t&&l===1?r=!1:pa(s,n,t):(r=!n.$stable,fa(n,s)),o=n}else n&&(ma(e,n),o={default:1});if(r)for(const l in s)!Vs(l)&&o[l]==null&&delete s[l]},Ye=iu;function Qc(e){return eu(e)}function eu(e,n){const t=Fi();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:c,setText:p,setElementText:h,parentNode:g,nextSibling:_,setScopeId:E=yn,insertStaticContent:z}=e,F=(u,f,b,S=null,k=null,v=null,M=void 0,x=null,C=!!f.dynamicChildren)=>{if(u===f)return;u&&!nt(u,f)&&(S=Gn(u),Ee(u,k,v,!0),u=null),f.patchFlag===-2&&(C=!1,f.dynamicChildren=null);const{type:w,ref:B,shapeFlag:A}=f;switch(w){case ji:se(u,f,b,S);break;case De:K(u,f,b,S);break;case as:u==null&&V(f,b,S,M);break;case Ve:L(u,f,b,S,k,v,M,x,C);break;default:A&1?X(u,f,b,S,k,v,M,x,C):A&6?Z(u,f,b,S,k,v,M,x,C):(A&64||A&128)&&w.process(u,f,b,S,k,v,M,x,C,Me)}B!=null&&k?It(B,u&&u.ref,v,f||u,!f):B==null&&u&&u.ref!=null&&It(u.ref,null,v,u,!0)},se=(u,f,b,S)=>{if(u==null)i(f.el=l(f.children),b,S);else{const k=f.el=u.el;f.children!==u.children&&p(k,f.children)}},K=(u,f,b,S)=>{u==null?i(f.el=c(f.children||""),b,S):f.el=u.el},V=(u,f,b,S)=>{[u.el,u.anchor]=z(u.children,f,b,S,u.el,u.anchor)},P=({el:u,anchor:f},b,S)=>{let k;for(;u&&u!==f;)k=_(u),i(u,b,S),u=k;i(f,b,S)},I=({el:u,anchor:f})=>{let b;for(;u&&u!==f;)b=_(u),s(u),u=b;s(f)},X=(u,f,b,S,k,v,M,x,C)=>{if(f.type==="svg"?M="svg":f.type==="math"&&(M="mathml"),u==null)he(f,b,S,k,v,M,x,C);else{const w=u.el&&u.el._isVueCE?u.el:null;try{w&&w._beginPatch(),N(u,f,k,v,M,x,C)}finally{w&&w._endPatch()}}},he=(u,f,b,S,k,v,M,x)=>{let C,w;const{props:B,shapeFlag:A,transition:H,dirs:W}=u;if(C=u.el=o(u.type,v,B&&B.is,B),A&8?h(C,u.children):A&16&&ne(u.children,C,null,S,k,os(u,v),M,x),W&&qn(u,null,S,"created"),G(C,u,u.scopeId,M,S),B){for(const re in B)re!=="value"&&!Pt(re)&&r(C,re,null,B[re],v,S);"value"in B&&r(C,"value",null,B.value,v),(w=B.onVnodeBeforeMount)&&pn(w,S,u)}W&&qn(u,null,S,"beforeMount");const Q=nu(k,H);Q&&H.beforeEnter(C),i(C,f,b),((w=B&&B.onVnodeMounted)||Q||W)&&Ye(()=>{w&&pn(w,S,u),Q&&H.enter(C),W&&qn(u,null,S,"mounted")},k)},G=(u,f,b,S,k)=>{if(b&&E(u,b),S)for(let v=0;v<S.length;v++)E(u,S[v]);if(k){let v=k.subTree;if(f===v||va(v.type)&&(v.ssContent===f||v.ssFallback===f)){const M=k.vnode;G(u,M,M.scopeId,M.slotScopeIds,k.parent)}}},ne=(u,f,b,S,k,v,M,x,C=0)=>{for(let w=C;w<u.length;w++){const B=u[w]=x?On(u[w]):vn(u[w]);F(null,B,f,b,S,k,v,M,x)}},N=(u,f,b,S,k,v,M)=>{const x=f.el=u.el;let{patchFlag:C,dynamicChildren:w,dirs:B}=f;C|=u.patchFlag&16;const A=u.props||me,H=f.props||me;let W;if(b&&Xn(b,!1),(W=H.onVnodeBeforeUpdate)&&pn(W,b,f,u),B&&qn(f,u,b,"beforeUpdate"),b&&Xn(b,!0),(A.innerHTML&&H.innerHTML==null||A.textContent&&H.textContent==null)&&h(x,""),w?Y(u.dynamicChildren,w,x,b,S,os(f,k),v):M||J(u,f,x,null,b,S,os(f,k),v,!1),C>0){if(C&16)te(x,A,H,b,k);else if(C&2&&A.class!==H.class&&r(x,"class",null,H.class,k),C&4&&r(x,"style",A.style,H.style,k),C&8){const Q=f.dynamicProps;for(let re=0;re<Q.length;re++){const ee=Q[re],Le=A[ee],ze=H[ee];(ze!==Le||ee==="value")&&r(x,ee,Le,ze,k,b)}}C&1&&u.children!==f.children&&h(x,f.children)}else!M&&w==null&&te(x,A,H,b,k);((W=H.onVnodeUpdated)||B)&&Ye(()=>{W&&pn(W,b,f,u),B&&qn(f,u,b,"updated")},S)},Y=(u,f,b,S,k,v,M)=>{for(let x=0;x<f.length;x++){const C=u[x],w=f[x],B=C.el&&(C.type===Ve||!nt(C,w)||C.shapeFlag&198)?g(C.el):b;F(C,w,B,null,S,k,v,M,!0)}},te=(u,f,b,S,k)=>{if(f!==b){if(f!==me)for(const v in f)!Pt(v)&&!(v in b)&&r(u,v,f[v],null,k,S);for(const v in b){if(Pt(v))continue;const M=b[v],x=f[v];M!==x&&v!=="value"&&r(u,v,x,M,k,S)}"value"in b&&r(u,"value",f.value,b.value,k)}},L=(u,f,b,S,k,v,M,x,C)=>{const w=f.el=u?u.el:l(""),B=f.anchor=u?u.anchor:l("");let{patchFlag:A,dynamicChildren:H,slotScopeIds:W}=f;W&&(x=x?x.concat(W):W),u==null?(i(w,b,S),i(B,b,S),ne(f.children||[],b,B,k,v,M,x,C)):A>0&&A&64&&H&&u.dynamicChildren?(Y(u.dynamicChildren,H,b,k,v,M,x),(f.key!=null||k&&f===k.subTree)&&ga(u,f,!0)):J(u,f,b,B,k,v,M,x,C)},Z=(u,f,b,S,k,v,M,x,C)=>{f.slotScopeIds=x,u==null?f.shapeFlag&512?k.ctx.activate(f,b,S,M,C):pe(f,b,S,k,v,M,C):ke(u,f,C)},pe=(u,f,b,S,k,v,M)=>{const x=u.component=hu(u,S,k);if(Bi(u)&&(x.ctx.renderer=Me),fu(x,!1,M),x.asyncDep){if(k&&k.registerDep(x,O,M),!u.el){const C=x.subTree=Re(De);K(null,C,f,b),u.placeholder=C.el}}else O(x,u,f,b,k,v,M)},ke=(u,f,b)=>{const S=f.component=u.component;if(Gc(u,f,b))if(S.asyncDep&&!S.asyncResolved){j(S,f,b);return}else S.next=f,S.update();else f.el=u.el,S.vnode=f},O=(u,f,b,S,k,v,M)=>{const x=()=>{if(u.isMounted){let{next:A,bu:H,u:W,parent:Q,vnode:re}=u;{const tn=ba(u);if(tn){A&&(A.el=re.el,j(u,A,M)),tn.asyncDep.then(()=>{u.isUnmounted||x()});return}}let ee=A,Le;Xn(u,!1),A?(A.el=re.el,j(u,A,M)):A=re,H&&gi(H),(Le=A.props&&A.props.onVnodeBeforeUpdate)&&pn(Le,Q,A,re),Xn(u,!0);const ze=zr(u),nn=u.subTree;u.subTree=ze,F(nn,ze,g(nn.el),Gn(nn),u,k,v),A.el=ze.el,ee===null&&Uc(u,ze.el),W&&Ye(W,k),(Le=A.props&&A.props.onVnodeUpdated)&&Ye(()=>pn(Le,Q,A,re),k)}else{let A;const{el:H,props:W}=f,{bm:Q,m:re,parent:ee,root:Le,type:ze}=u,nn=Ht(f);Xn(u,!1),Q&&gi(Q),!nn&&(A=W&&W.onVnodeBeforeMount)&&pn(A,ee,f),Xn(u,!0);{Le.ce&&Le.ce._def.shadowRoot!==!1&&Le.ce._injectChildStyle(ze);const tn=u.subTree=zr(u);F(null,tn,b,S,u,k,v),f.el=tn.el}if(re&&Ye(re,k),!nn&&(A=W&&W.onVnodeMounted)){const tn=f;Ye(()=>pn(A,ee,tn),k)}(f.shapeFlag&256||ee&&Ht(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&Ye(u.a,k),u.isMounted=!0,f=b=S=null}};u.scope.on();const C=u.effect=new Mo(x);u.scope.off();const w=u.update=C.run.bind(C),B=u.job=C.runIfDirty.bind(C);B.i=u,B.id=u.uid,C.scheduler=()=>js(B),Xn(u,!0),w()},j=(u,f,b)=>{f.component=u;const S=u.vnode.props;u.vnode=f,u.next=null,Jc(u,f.props,S,b),Zc(u,f.children,b),zn(),_r(u),An()},J=(u,f,b,S,k,v,M,x,C=!1)=>{const w=u&&u.children,B=u?u.shapeFlag:0,A=f.children,{patchFlag:H,shapeFlag:W}=f;if(H>0){if(H&128){kn(w,A,b,S,k,v,M,x,C);return}else if(H&256){Ge(w,A,b,S,k,v,M,x,C);return}}W&8?(B&16&&en(w,k,v),A!==w&&h(b,A)):B&16?W&16?kn(w,A,b,S,k,v,M,x,C):en(w,k,v,!0):(B&8&&h(b,""),W&16&&ne(A,b,S,k,v,M,x,C))},Ge=(u,f,b,S,k,v,M,x,C)=>{u=u||ft,f=f||ft;const w=u.length,B=f.length,A=Math.min(w,B);let H;for(H=0;H<A;H++){const W=f[H]=C?On(f[H]):vn(f[H]);F(u[H],W,b,null,k,v,M,x,C)}w>B?en(u,k,v,!0,!1,A):ne(f,b,S,k,v,M,x,C,A)},kn=(u,f,b,S,k,v,M,x,C)=>{let w=0;const B=f.length;let A=u.length-1,H=B-1;for(;w<=A&&w<=H;){const W=u[w],Q=f[w]=C?On(f[w]):vn(f[w]);if(nt(W,Q))F(W,Q,b,null,k,v,M,x,C);else break;w++}for(;w<=A&&w<=H;){const W=u[A],Q=f[H]=C?On(f[H]):vn(f[H]);if(nt(W,Q))F(W,Q,b,null,k,v,M,x,C);else break;A--,H--}if(w>A){if(w<=H){const W=H+1,Q=W<B?f[W].el:S;for(;w<=H;)F(null,f[w]=C?On(f[w]):vn(f[w]),b,Q,k,v,M,x,C),w++}}else if(w>H)for(;w<=A;)Ee(u[w],k,v,!0),w++;else{const W=w,Q=w,re=new Map;for(w=Q;w<=H;w++){const Ie=f[w]=C?On(f[w]):vn(f[w]);Ie.key!=null&&re.set(Ie.key,w)}let ee,Le=0;const ze=H-Q+1;let nn=!1,tn=0;const Se=new Array(ze);for(w=0;w<ze;w++)Se[w]=0;for(w=W;w<=A;w++){const Ie=u[w];if(Le>=ze){Ee(Ie,k,v,!0);continue}let sn;if(Ie.key!=null)sn=re.get(Ie.key);else for(ee=Q;ee<=H;ee++)if(Se[ee-Q]===0&&nt(Ie,f[ee])){sn=ee;break}sn===void 0?Ee(Ie,k,v,!0):(Se[sn-Q]=w+1,sn>=tn?tn=sn:nn=!0,F(Ie,f[sn],b,null,k,v,M,x,C),Le++)}const _t=nn?tu(Se):ft;for(ee=_t.length-1,w=ze-1;w>=0;w--){const Ie=Q+w,sn=f[Ie],fe=f[Ie+1],at=Ie+1<B?fe.el||fe.placeholder:S;Se[w]===0?F(null,sn,b,at,k,v,M,x,C):nn&&(ee<0||w!==_t[ee]?Ue(sn,b,at,2):ee--)}}},Ue=(u,f,b,S,k=null)=>{const{el:v,type:M,transition:x,children:C,shapeFlag:w}=u;if(w&6){Ue(u.component.subTree,f,b,S);return}if(w&128){u.suspense.move(f,b,S);return}if(w&64){M.move(u,f,b,Me);return}if(M===Ve){i(v,f,b);for(let A=0;A<C.length;A++)Ue(C[A],f,b,S);i(u.anchor,f,b);return}if(M===as){P(u,f,b);return}if(S!==2&&w&1&&x)if(S===0)x.beforeEnter(v),i(v,f,b),Ye(()=>x.enter(v),k);else{const{leave:A,delayLeave:H,afterLeave:W}=x,Q=()=>{u.ctx.isUnmounted?s(v):i(v,f,b)},re=()=>{v._isLeaving&&v[Mn](!0),A(v,()=>{Q(),W&&W()})};H?H(v,Q,re):re()}else i(v,f,b)},Ee=(u,f,b,S=!1,k=!1)=>{const{type:v,props:M,ref:x,children:C,dynamicChildren:w,shapeFlag:B,patchFlag:A,dirs:H,cacheIndex:W}=u;if(A===-2&&(k=!1),x!=null&&(zn(),It(x,null,b,u,!0),An()),W!=null&&(f.renderCache[W]=void 0),B&256){f.ctx.deactivate(u);return}const Q=B&1&&H,re=!Ht(u);let ee;if(re&&(ee=M&&M.onVnodeBeforeUnmount)&&pn(ee,f,u),B&6)Vn(u.component,b,S);else{if(B&128){u.suspense.unmount(b,S);return}Q&&qn(u,null,f,"beforeUnmount"),B&64?u.type.remove(u,f,b,Me,S):w&&!w.hasOnce&&(v!==Ve||A>0&&A&64)?en(w,f,b,!1,!0):(v===Ve&&A&384||!k&&B&16)&&en(C,f,b),S&&St(u)}(re&&(ee=M&&M.onVnodeUnmounted)||Q)&&Ye(()=>{ee&&pn(ee,f,u),Q&&qn(u,null,f,"unmounted")},b)},St=u=>{const{type:f,el:b,anchor:S,transition:k}=u;if(f===Ve){Zt(b,S);return}if(f===as){I(u);return}const v=()=>{s(b),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(u.shapeFlag&1&&k&&!k.persisted){const{leave:M,delayLeave:x}=k,C=()=>M(b,v);x?x(u.el,v,C):C()}else v()},Zt=(u,f)=>{let b;for(;u!==f;)b=_(u),s(u),u=b;s(f)},Vn=(u,f,b)=>{const{bum:S,scope:k,job:v,subTree:M,um:x,m:C,a:w}=u;Rr(C),Rr(w),S&&gi(S),k.stop(),v&&(v.flags|=8,Ee(M,u,f,b)),x&&Ye(x,f),Ye(()=>{u.isUnmounted=!0},f)},en=(u,f,b,S=!1,k=!1,v=0)=>{for(let M=v;M<u.length;M++)Ee(u[M],f,b,S,k)},Gn=u=>{if(u.shapeFlag&6)return Gn(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const f=_(u.anchor||u.el),b=f&&f[fc];return b?_(b):f};let We=!1;const cn=(u,f,b)=>{u==null?f._vnode&&Ee(f._vnode,null,null,!0):F(f._vnode||null,u,f,null,null,null,b),f._vnode=u,We||(We=!0,_r(),Vo(),We=!1)},Me={p:F,um:Ee,m:Ue,r:St,mt:pe,mc:ne,pc:J,pbc:Y,n:Gn,o:e};return{render:cn,hydrate:void 0,createApp:Ic(cn)}}function os({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Xn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function nu(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ga(e,n,t=!1){const i=e.children,s=n.children;if(D(i)&&D(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=On(s[r]),l.el=o.el),!t&&l.patchFlag!==-2&&ga(o,l)),l.type===ji&&l.patchFlag!==-1&&(l.el=o.el),l.type===De&&!l.el&&(l.el=o.el)}}function tu(e){const n=e.slice(),t=[0];let i,s,r,o,l;const c=e.length;for(i=0;i<c;i++){const p=e[i];if(p!==0){if(s=t[t.length-1],e[s]<p){n[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)l=r+o>>1,e[t[l]]<p?r=l+1:o=l;p<e[t[r]]&&(r>0&&(n[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=n[o];return t}function ba(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:ba(n)}function Rr(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}const va=e=>e.__isSuspense;function iu(e,n){n&&n.pendingBranch?D(e)?n.effects.push(...e):n.effects.push(e):hc(e)}const Ve=Symbol.for("v-fgt"),ji=Symbol.for("v-txt"),De=Symbol.for("v-cmt"),as=Symbol.for("v-stc"),Bt=[];let Qe=null;function ce(e=!1){Bt.push(Qe=e?null:[])}function su(){Bt.pop(),Qe=Bt[Bt.length-1]||null}let jt=1;function Mi(e,n=!1){jt+=e,e<0&&Qe&&n&&(Qe.hasOnce=!0)}function ya(e){return e.dynamicChildren=jt>0?Qe||ft:null,su(),jt>0&&Qe&&Qe.push(e),e}function ue(e,n,t,i,s,r){return ya(T(e,n,t,i,s,r,!0))}function ru(e,n,t,i,s){return ya(Re(e,n,t,i,s,!0))}function xi(e){return e?e.__v_isVNode===!0:!1}function nt(e,n){return e.type===n.type&&e.key===n.key}const wa=({key:e})=>e??null,vi=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ve(e)||Fe(e)||$(e)?{i:an,r:e,k:n,f:!!t}:e:null);function T(e,n=null,t=null,i=0,s=null,r=e===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&wa(n),ref:n&&vi(n),scopeId:Uo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:an};return l?(Us(c,t),r&128&&e.normalize(c)):t&&(c.shapeFlag|=ve(t)?8:16),jt>0&&!o&&Qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&Qe.push(c),c}const Re=ou;function ou(e,n=null,t=null,i=0,s=null,r=!1){if((!e||e===Mc)&&(e=De),xi(e)){const l=jn(e,n,!0);return t&&Us(l,t),jt>0&&!r&&Qe&&(l.shapeFlag&6?Qe[Qe.indexOf(e)]=l:Qe.push(l)),l.patchFlag=-2,l}if(bu(e)&&(e=e.__vccOpts),n){n=au(n);let{class:l,style:c}=n;l&&!ve(l)&&(n.class=pt(l)),de(c)&&(Ks(c)&&!D(c)&&(c=Te({},c)),n.style=Ii(c))}const o=ve(e)?1:va(e)?128:$o(e)?64:de(e)?4:$(e)?2:0;return T(e,n,t,i,s,o,r,!0)}function au(e){return e?Ks(e)||ua(e)?Te({},e):e:null}function jn(e,n,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:l,transition:c}=e,p=n?cu(s||{},n):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&wa(p),ref:n&&n.ref?t&&r?D(r)?r.concat(vi(n)):[r,vi(n)]:vi(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Ve?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jn(e.ssContent),ssFallback:e.ssFallback&&jn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&i&&Kt(h,c.clone(h)),h}function lu(e=" ",n=0){return Re(ji,null,e,n)}function Ke(e="",n=!1){return n?(ce(),ru(De,null,e)):Re(De,null,e)}function vn(e){return e==null||typeof e=="boolean"?Re(De):D(e)?Re(Ve,null,e.slice()):xi(e)?On(e):Re(ji,null,String(e))}function On(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jn(e)}function Us(e,n){let t=0;const{shapeFlag:i}=e;if(n==null)n=null;else if(D(n))t=16;else if(typeof n=="object")if(i&65){const s=n.default;s&&(s._c&&(s._d=!1),Us(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!ua(n)?n._ctx=an:s===3&&an&&(an.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else $(n)?(n={default:n,_ctx:an},t=32):(n=String(n),i&64?(t=16,n=[lu(n)]):t=8);e.children=n,e.shapeFlag|=t}function cu(...e){const n={};for(let t=0;t<e.length;t++){const i=e[t];for(const s in i)if(s==="class")n.class!==i.class&&(n.class=pt([n.class,i.class]));else if(s==="style")n.style=Ii([n.style,i.style]);else if(Pi(s)){const r=n[s],o=i[s];o&&r!==o&&!(D(r)&&r.includes(o))&&(n[s]=r?[].concat(r,o):o)}else s!==""&&(n[s]=i[s])}return n}function pn(e,n,t,i=null){hn(e,n,7,[t,i])}const uu=sa();let du=0;function hu(e,n,t){const i=e.type,s=(n?n.appContext:e.appContext)||uu,r={uid:du++,vnode:e,type:i,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ha(i,s),emitsOptions:aa(i,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:i.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Wc.bind(null,r),e.ce&&e.ce(r),r}let Ne=null;const ka=()=>Ne||an;let Li,Es;{const e=Fi(),n=(t,i)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Li=n("__VUE_INSTANCE_SETTERS__",t=>Ne=t),Es=n("__VUE_SSR_SETTERS__",t=>Vt=t)}const Xt=e=>{const n=Ne;return Li(e),e.scope.on(),()=>{e.scope.off(),Li(n)}},Fr=()=>{Ne&&Ne.scope.off(),Li(null)};function Sa(e){return e.vnode.shapeFlag&4}let Vt=!1;function fu(e,n=!1,t=!1){n&&Es(n);const{props:i,children:s}=e.vnode,r=Sa(e);$c(e,i,r,n),Yc(e,s,t||n);const o=r?mu(e,n):void 0;return n&&Es(!1),o}function mu(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xc);const{setup:i}=t;if(i){zn();const s=e.setupContext=i.length>1?gu(e):null,r=Xt(e),o=qt(i,e,0,[e.props,s]),l=vo(o);if(An(),r(),(l||e.sp)&&!Ht(e)&&Qo(e),l){if(o.then(Fr,Fr),n)return o.then(c=>{Ir(e,c)}).catch(c=>{Oi(c,e,0)});e.asyncDep=o}else Ir(e,o)}else _a(e)}function Ir(e,n,t){$(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:de(n)&&(e.setupState=Wo(n)),_a(e)}function _a(e,n,t){const i=e.type;e.render||(e.render=i.render||yn);{const s=Xt(e);zn();try{Lc(e)}finally{An(),s()}}}const pu={get(e,n){return Pe(e,"get",""),e[n]}};function gu(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,pu),slots:e.slots,emit:e.emit,expose:n}}function Vi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Wo(nc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Ot)return Ot[t](e)},has(n,t){return t in n||t in Ot}})):e.proxy}function bu(e){return $(e)&&"__vccOpts"in e}const U=(e,n)=>ac(e,n,Vt);function vu(e,n,t){try{Mi(-1);const i=arguments.length;return i===2?de(n)&&!D(n)?xi(n)?Re(e,null,[n]):Re(e,n):Re(e,null,n):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&xi(t)&&(t=[t]),Re(e,n,t))}finally{Mi(1)}}const yu="3.5.25";let Ms;const Hr=typeof window<"u"&&window.trustedTypes;if(Hr)try{Ms=Hr.createPolicy("vue",{createHTML:e=>e})}catch{}const Ca=Ms?e=>Ms.createHTML(e):e=>e,wu="http://www.w3.org/2000/svg",ku="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Or=En&&En.createElement("template"),Su={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,i)=>{const s=n==="svg"?En.createElementNS(wu,e):n==="mathml"?En.createElementNS(ku,e):t?En.createElement(e,{is:t}):En.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>En.createTextNode(e),createComment:e=>En.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>En.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,i,s,r){const o=t?t.previousSibling:n.lastChild;if(s&&(s===r||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Or.innerHTML=Ca(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const l=Or.content;if(i==="svg"||i==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}n.insertBefore(l,t)}return[o?o.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Fn="transition",Lt="animation",Gt=Symbol("_vtc"),Ta={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_u=Te({},Jo,Ta),Cu=e=>(e.displayName="Transition",e.props=_u,e),Br=Cu((e,{slots:n})=>vu(gc,Tu(e),n)),Yn=(e,n=[])=>{D(e)?e.forEach(t=>t(...n)):e&&e(...n)},Dr=e=>e?D(e)?e.some(n=>n.length>1):e.length>1:!1;function Tu(e){const n={};for(const L in e)L in Ta||(n[L]=e[L]);if(e.css===!1)return n;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:p=o,appearToClass:h=l,leaveFromClass:g=`${t}-leave-from`,leaveActiveClass:_=`${t}-leave-active`,leaveToClass:E=`${t}-leave-to`}=e,z=Eu(s),F=z&&z[0],se=z&&z[1],{onBeforeEnter:K,onEnter:V,onEnterCancelled:P,onLeave:I,onLeaveCancelled:X,onBeforeAppear:he=K,onAppear:G=V,onAppearCancelled:ne=P}=n,N=(L,Z,pe,ke)=>{L._enterCancelled=ke,Zn(L,Z?h:l),Zn(L,Z?p:o),pe&&pe()},Y=(L,Z)=>{L._isLeaving=!1,Zn(L,g),Zn(L,E),Zn(L,_),Z&&Z()},te=L=>(Z,pe)=>{const ke=L?G:V,O=()=>N(Z,L,pe);Yn(ke,[Z,O]),Nr(()=>{Zn(Z,L?c:r),Tn(Z,L?h:l),Dr(ke)||Wr(Z,i,F,O)})};return Te(n,{onBeforeEnter(L){Yn(K,[L]),Tn(L,r),Tn(L,o)},onBeforeAppear(L){Yn(he,[L]),Tn(L,c),Tn(L,p)},onEnter:te(!1),onAppear:te(!0),onLeave(L,Z){L._isLeaving=!0;const pe=()=>Y(L,Z);Tn(L,g),L._enterCancelled?(Tn(L,_),Vr(L)):(Vr(L),Tn(L,_)),Nr(()=>{L._isLeaving&&(Zn(L,g),Tn(L,E),Dr(I)||Wr(L,i,se,pe))}),Yn(I,[L,pe])},onEnterCancelled(L){N(L,!1,void 0,!0),Yn(P,[L])},onAppearCancelled(L){N(L,!0,void 0,!0),Yn(ne,[L])},onLeaveCancelled(L){Y(L),Yn(X,[L])}})}function Eu(e){if(e==null)return null;if(de(e))return[ls(e.enter),ls(e.leave)];{const n=ls(e);return[n,n]}}function ls(e){return El(e)}function Tn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Gt]||(e[Gt]=new Set)).add(n)}function Zn(e,n){n.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const t=e[Gt];t&&(t.delete(n),t.size||(e[Gt]=void 0))}function Nr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Mu=0;function Wr(e,n,t,i){const s=e._endId=++Mu,r=()=>{s===e._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:l,propCount:c}=xu(e,n);if(!o)return i();const p=o+"end";let h=0;const g=()=>{e.removeEventListener(p,_),r()},_=E=>{E.target===e&&++h>=c&&g()};setTimeout(()=>{h<c&&g()},l+1),e.addEventListener(p,_)}function xu(e,n){const t=window.getComputedStyle(e),i=z=>(t[z]||"").split(", "),s=i(`${Fn}Delay`),r=i(`${Fn}Duration`),o=Kr(s,r),l=i(`${Lt}Delay`),c=i(`${Lt}Duration`),p=Kr(l,c);let h=null,g=0,_=0;n===Fn?o>0&&(h=Fn,g=o,_=r.length):n===Lt?p>0&&(h=Lt,g=p,_=c.length):(g=Math.max(o,p),h=g>0?o>p?Fn:Lt:null,_=h?h===Fn?r.length:c.length:0);const E=h===Fn&&/\b(?:transform|all)(?:,|$)/.test(i(`${Fn}Property`).toString());return{type:h,timeout:g,propCount:_,hasTransform:E}}function Kr(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,i)=>jr(t)+jr(e[i])))}function jr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Vr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Lu(e,n,t){const i=e[Gt];i&&(n=(n?[n,...i]:[...i]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Gr=Symbol("_vod"),zu=Symbol("_vsh"),Au=Symbol(""),Pu=/(?:^|;)\s*display\s*:/;function Ru(e,n,t){const i=e.style,s=ve(t);let r=!1;if(t&&!s){if(n)if(ve(n))for(const o of n.split(";")){const l=o.slice(0,o.indexOf(":")).trim();t[l]==null&&yi(i,l,"")}else for(const o in n)t[o]==null&&yi(i,o,"");for(const o in t)o==="display"&&(r=!0),yi(i,o,t[o])}else if(s){if(n!==t){const o=i[Au];o&&(t+=";"+o),i.cssText=t,r=Pu.test(t)}}else n&&e.removeAttribute("style");Gr in e&&(e[Gr]=r?i.display:"",e[zu]&&(i.display="none"))}const Ur=/\s*!important$/;function yi(e,n,t){if(D(t))t.forEach(i=>yi(e,n,i));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const i=Fu(e,n);Ur.test(t)?e.setProperty(ot(i),t.replace(Ur,""),"important"):e[i]=t}}const $r=["Webkit","Moz","ms"],cs={};function Fu(e,n){const t=cs[n];if(t)return t;let i=Kn(n);if(i!=="filter"&&i in e)return cs[n]=i;i=ko(i);for(let s=0;s<$r.length;s++){const r=$r[s]+i;if(r in e)return cs[n]=r}return n}const Jr="http://www.w3.org/1999/xlink";function qr(e,n,t,i,s,r=Pl(n)){i&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Jr,n.slice(6,n.length)):e.setAttributeNS(Jr,n,t):t==null||r&&!Co(t)?e.removeAttribute(n):e.setAttribute(n,r?"":wn(t)?String(t):t)}function Xr(e,n,t,i,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Ca(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let o=!1;if(t===""||t==null){const l=typeof e[n];l==="boolean"?t=Co(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{e[n]=t}catch{}o&&e.removeAttribute(s||n)}function $s(e,n,t,i){e.addEventListener(n,t,i)}function Iu(e,n,t,i){e.removeEventListener(n,t,i)}const Yr=Symbol("_vei");function Hu(e,n,t,i,s=null){const r=e[Yr]||(e[Yr]={}),o=r[n];if(i&&o)o.value=i;else{const[l,c]=Ou(n);if(i){const p=r[n]=Nu(i,s);$s(e,l,p,c)}else o&&(Iu(e,l,o,c),r[n]=void 0)}}const Zr=/(?:Once|Passive|Capture)$/;function Ou(e){let n;if(Zr.test(e)){n={};let i;for(;i=e.match(Zr);)e=e.slice(0,e.length-i[0].length),n[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ot(e.slice(2)),n]}let us=0;const Bu=Promise.resolve(),Du=()=>us||(Bu.then(()=>us=0),us=Date.now());function Nu(e,n){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;hn(Wu(i,t.value),n,5,[i])};return t.value=e,t.attached=Du(),t}function Wu(e,n){if(D(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(i=>s=>!s._stopped&&i&&i(s))}else return n}const Qr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ku=(e,n,t,i,s,r)=>{const o=s==="svg";n==="class"?Lu(e,i,o):n==="style"?Ru(e,t,i):Pi(n)?Ps(n)||Hu(e,n,t,i,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ju(e,n,i,o))?(Xr(e,n,i),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&qr(e,n,i,o,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!ve(i))?Xr(e,Kn(n),i,r,n):(n==="true-value"?e._trueValue=i:n==="false-value"&&(e._falseValue=i),qr(e,n,i,o))};function ju(e,n,t,i){if(i)return!!(n==="innerHTML"||n==="textContent"||n in e&&Qr(n)&&$(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qr(n)&&ve(t)?!1:n in e}const zi=e=>{const n=e.props["onUpdate:modelValue"]||!1;return D(n)?t=>gi(n,t):n},yt=Symbol("_assign"),eo={deep:!0,created(e,n,t){e[yt]=zi(t),$s(e,"change",()=>{const i=e._modelValue,s=Ut(e),r=e.checked,o=e[yt];if(D(i)){const l=Is(i,s),c=l!==-1;if(r&&!c)o(i.concat(s));else if(!r&&c){const p=[...i];p.splice(l,1),o(p)}}else if(kt(i)){const l=new Set(i);r?l.add(s):l.delete(s),o(l)}else o(Ea(e,r))})},mounted:no,beforeUpdate(e,n,t){e[yt]=zi(t),no(e,n,t)}};function no(e,{value:n,oldValue:t},i){e._modelValue=n;let s;if(D(n))s=Is(n,i.props.value)>-1;else if(kt(n))s=n.has(i.props.value);else{if(n===t)return;s=Jt(n,Ea(e,!0))}e.checked!==s&&(e.checked=s)}const Vu={deep:!0,created(e,{value:n,modifiers:{number:t}},i){const s=kt(n);$s(e,"change",()=>{const r=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>t?_o(Ut(o)):Ut(o));e[yt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,Xe(()=>{e._assigning=!1})}),e[yt]=zi(i)},mounted(e,{value:n}){to(e,n)},beforeUpdate(e,n,t){e[yt]=zi(t)},updated(e,{value:n}){e._assigning||to(e,n)}};function to(e,n){const t=e.multiple,i=D(n);if(!(t&&!i&&!kt(n))){for(let s=0,r=e.options.length;s<r;s++){const o=e.options[s],l=Ut(o);if(t)if(i){const c=typeof l;c==="string"||c==="number"?o.selected=n.some(p=>String(p)===String(l)):o.selected=Is(n,l)>-1}else o.selected=n.has(l);else if(Jt(Ut(o),n)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ut(e){return"_value"in e?e._value:e.value}function Ea(e,n){const t=n?"_trueValue":"_falseValue";return t in e?e[t]:n}const Gu=["ctrl","shift","alt","meta"],Uu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Gu.some(t=>e[`${t}Key`]&&!n.includes(t))},$u=(e,n)=>{const t=e._withMods||(e._withMods={}),i=n.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<n.length;o++){const l=Uu[n[o]];if(l&&l(s,n))return}return e(s,...r)}))},Ju=Te({patchProp:Ku},Su);let io;function qu(){return io||(io=Qc(Ju))}const Xu=((...e)=>{const n=qu().createApp(...e),{mount:t}=n;return n.mount=i=>{const s=Zu(i);if(!s)return;const r=n._component;!$(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Yu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},n});function Yu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zu(e){return ve(e)?document.querySelector(e):e}const Qu="/favicon.png",ed="/images/about_music_logo.png",nd="/images/dk3-min.jpg",td="/images/share-icon.png",id="/images/powered_by_black-4339b4c3c9cf88da9bfb15a16c4f6914.png",rt=[{name:"Antonio Vivaldi",birth:1678,death:1741},{name:"Johann Sebastian Bach",birth:1685,death:1750},{name:"Domenico Scarlatti",birth:1685,death:1757},{name:"George Frideric Handel",birth:1685,death:1759},{name:"Joseph Haydn",birth:1732,death:1809},{name:"Wolfgang Amadeus Mozart",birth:1756,death:1791},{name:"Ludwig van Beethoven",birth:1770,death:1827},{name:"Niccolò Paganini",birth:1782,death:1840},{name:"Gioachino Rossini",birth:1792,death:1868},{name:"Franz Schubert",birth:1797,death:1828},{name:"Hector Berlioz",birth:1803,death:1869},{name:"Mikhail Glinka",birth:1804,death:1857},{name:"Felix Mendelssohn",birth:1809,death:1847},{name:"Frédéric Chopin",birth:1810,death:1849},{name:"Robert Schumann",birth:1810,death:1856},{name:"Franz Liszt",birth:1811,death:1886},{name:"Giuseppe Verdi",birth:1813,death:1901},{name:"Bedřich Smetana",birth:1824,death:1884},{name:"Johann Strauss II",birth:1825,death:1899},{name:"Johannes Brahms",birth:1833,death:1897},{name:"Alexander Borodin",birth:1833,death:1887},{name:"Camille Saint-Saëns",birth:1835,death:1921},{name:"Jacques Offenbach",birth:1819,death:1880},{name:"Georges Bizet",birth:1838,death:1875},{name:"Modest Mussorgsky",birth:1839,death:1881},{name:"Pyotr Ilyich Tchaikovsky",birth:1840,death:1893},{name:"Antonín Dvořák",birth:1841,death:1904},{name:"Edvard Grieg",birth:1843,death:1907},{name:"Nikolai Rimsky-Korsakov",birth:1844,death:1908},{name:"Giacomo Puccini",birth:1858,death:1924},{name:"Gustav Mahler",birth:1860,death:1911},{name:"Claude Debussy",birth:1862,death:1918},{name:"Richard Strauss",birth:1864,death:1949},{name:"Jean Sibelius",birth:1865,death:1957},{name:"Erik Satie",birth:1866,death:1925},{name:"Alexander Scriabin",birth:1872,death:1915},{name:"Sergei Rachmaninoff",birth:1873,death:1943},{name:"Maurice Ravel",birth:1875,death:1937},{name:"Igor Stravinsky",birth:1882,death:1971},{name:"Sergei Prokofiev",birth:1891,death:1953},{name:"Carl Orff",birth:1895,death:1982},{name:"George Gershwin",birth:1898,death:1937},{name:"Dmitri Shostakovich",birth:1906,death:1975}],sd={"Richard Wagner":"comp/wagner.jpg","Igor Stravinsky":"comp/strawinski.jpg","Antonio Vivaldi":"comp/vivaldi.jpg","Johann Sebastian Bach":"comp/bach.png","Domenico Scarlatti":"comp/scarlatti.jpg","George Frideric Handel":"comp/handel.jpg","Joseph Haydn":"comp/haydn.jpg","Wolfgang Amadeus Mozart":"comp/mozart.jpg","Ludwig van Beethoven":"comp/beethoven.jpg","Niccolò Paganini":"comp/paganini.jpeg","Franz Schubert":"comp/schubert.jpg","Hector Berlioz":"comp/berlioz.jpg","Mikhail Glinka":"comp/glinka.jpg","Felix Mendelssohn":"comp/mendelssohn.jpg","Frédéric Chopin":"comp/chopin.jpeg","Robert Schumann":"comp/schumann.jpg","Franz Liszt":"comp/liszt.jpg","Giuseppe Verdi":"comp/verdi.jpg","Richard Strauss":"comp/rstrauss.jpg","Johann Strauss II":"comp/strauss.jpg","Johannes Brahms":"comp/brahms.jpg","Alexander Borodin":"comp/borodin.jpg","Camille Saint-Saëns":"comp/saint-saens.jpg","Jacques Offenbach":"comp/offenbach.jpg","Georges Bizet":"comp/bizet.jpg","Modest Mussorgsky":"comp/musorgskiy.jpg","Pyotr Ilyich Tchaikovsky":"comp/tchaikovsky.jpg","Antonín Dvořák":"comp/dvorak.jpg","Edvard Grieg":"comp/grieg.jpg","Nikolai Rimsky-Korsakov":"comp/rimsky-korsakov.jpg","Gustav Mahler":"comp/mahler.jpg","Claude Debussy":"comp/debussy.jpg","Erik Satie":"comp/satie.jpg","Alexander Scriabin":"comp/scriabin.jpg","Sergei Rachmaninoff":"comp/rachmaninoff.jpg","Maurice Ravel":"comp/ravel.jpg","Béla Bartók":"comp/bartok.jpg","Sergei Prokofiev":"comp/prokofiev.jpg","Dmitri Shostakovich":"comp/shostakovich.jpg","Bedřich Smetana":"comp/smetana.jpg","George Gershwin":"comp/gershwin.jpg","Carl Orff":"comp/orff.jpg","Carl Maria von Weber":"comp/weber.jpg","Giacomo Puccini":"comp/puccini.jpg","Jean Sibelius":"comp/sibelius.jpg","Christoph Willibald Gluck":"comp/gluck.jpg","Gioachino Rossini":"comp/rossini.jpg","Jean-Philippe Rameau":"comp/rameau.jpg"};function Ma(e){const n=sd[e];return n?n.startsWith("/")?n:`/${n}`:null}function rd(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1];return/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?n[n.length-2]+" "+t:t}function od(e){const n=String(e||"").trim().split(/\s+/).filter(Boolean);if(n.length<=1)return e;const t=n[n.length-1],s=/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(t)&&n.length>=2?2:1,r=n.slice(n.length-s),l=n.slice(0,n.length-s).map(p=>p.trim()).filter(Boolean).map(p=>p[0]?p[0].toUpperCase()+".":"").filter(Boolean).join(" "),c=r.join(" ");return l?`${l} ${c}`:c}const Yt=[{id:"baroque",label:"Baroque",from:1600,to:1750},{id:"classical",label:"Classical",from:1750,to:1820},{id:"romantic",label:"Romantic",from:1820,to:1900},{id:"twentieth",label:"20th Century",from:1900,to:2e3}];let xs=Yt.reduce((e,n)=>(e[n.id]=n.label,e),{});const so=Math.min(...rt.map(e=>e.birth)),ad=Math.max(...rt.map(e=>e.birth));let Ls=[...rt],Bn=null,Dn=null;const ld={r:255,g:255,b:255},cd={r:37,g:99,b:235};At("#f3f4f6"),ao(1750),At("#e6eef8"),ao(1820),At("#e8f4ff"),At("#eef2f7");const Ai=1677.5,wi=1980,xa=wi-Ai,ud=6,dd=2,hd=0,ki={barHeight:50,widthScale:1,fontScale:1},ut={barHeight:{min:25,max:150},widthScale:{min:.05,max:2},fontScale:{min:.9,max:1.8}};let Nn={...ki};function ds(e,n,t){return Number.isNaN(e)?n:Math.min(t,Math.max(n,e))}function ro(e={}){Nn={barHeight:ds(e.barHeight??Nn.barHeight??ki.barHeight,ut.barHeight.min,ut.barHeight.max),widthScale:ds(e.widthScale??Nn.widthScale??ki.widthScale,ut.widthScale.min,ut.widthScale.max),fontScale:ds(e.fontScale??Nn.fontScale??ki.fontScale,ut.fontScale.min,ut.fontScale.max)}}function fd(){return ud*Nn.widthScale}function ui(){const e=document.querySelector(".timeline-inner"),n=document.getElementById("timeline");if(!e||!n)return;const t=xa*fd()+hd,i=(n.clientWidth||window.innerWidth)*dd*Nn.widthScale,s=Math.max(t,i);e.style.width=s+"px",e.style.minWidth=s+"px"}function tt(e){return(e-Ai)/xa*100}function La(e){return Number.isNaN(e)?0:Math.min(1,Math.max(0,e))}function At(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(s=>s+s).join(""):n,i=parseInt(t,16);return{r:i>>16&255,g:i>>8&255,b:i&255}}function hs({r:e,g:n,b:t}){const i=s=>Math.round(s).toString(16).padStart(2,"0");return`#${i(e)}${i(n)}${i(t)}`}function oo(e,n,t){const i=La(t);return{r:e.r+(n.r-e.r)*i,g:e.g+(n.g-e.g)*i,b:e.b+(n.b-e.b)*i}}function ao(e){const n=ad-so;return n<=0?0:La((e-so)/n)}const md={baroque:"#f3f4f6",classical:"#eef5ff",romantic:"#e3f0ff",twentieth:"#dfdfdf"};function Js(e){return md[e]||"#f3f4f6"}function pd(e){return e?xs[e]||Yt.find(n=>n.id===e)?.label||e:""}function lo(e={}){!e||typeof e!="object"||(xs={...xs,...e})}function gd(e){const n=Yt.find(t=>e>=t.from&&e<t.to);return n?n.id:null}function bd(e,n){const t=Number(e),i=Number(n),s=gd(t);if(!Number.isFinite(t)||!Number.isFinite(i)||i<=t)return s;const r=i-t;let o=null,l=0;return Yt.forEach(c=>{const p=Math.max(0,Math.min(i,c.to)-Math.max(t,c.from));p>l&&(l=p,o=c.id)}),o&&l>r/2?o:s}function vd(e){const n=Js(e),t=At(n),i=oo(t,ld,.12),s=oo(t,cd,.04);return`linear-gradient(145deg, ${hs(i)} 0%, ${hs(t)} 58%, ${hs(s)} 100%)`}function co(e){Array.isArray(e)?Ls=[...e]:Ls=[...rt]}function qs(){const e=document.getElementById("gantt"),n=document.getElementById("axis");if(!e)return;const t=s=>Number.isInteger(Bn)&&s===Bn,i=s=>Number.isInteger(Dn)&&s===Dn;e.querySelectorAll(".bar").forEach(s=>{const r=Number(s.getAttribute("data-lane-index"));s.classList.toggle("bar--selected",t(r)),s.classList.toggle("bar--hovered",i(r))}),e.querySelectorAll(".bar-connector").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),o=t(r),l=i(r);s.classList.toggle("bar-connector--selected",o),s.classList.toggle("bar-connector--hover",l)}),n&&n.querySelectorAll(".life-label").forEach(s=>{const r=Number(s.getAttribute("data-lane-index")),o=t(r),l=i(r);s.classList.toggle("life-label--active",o||l),s.classList.toggle("life-label--hover",l)})}function za(e){Number.isInteger(e)?Bn=e:Bn=null,qs()}function et(e){Number.isInteger(e)?Dn=e:Dn=null,qs()}function uo(){const e=document.getElementById("axis");if(!e)return;e.innerHTML="";const n=Math.ceil(Ai/10)*10,t=Math.ceil(wi/10)*10;Yt.forEach(i=>{const s=Math.max(i.from,Ai),r=Math.min(i.to,wi);if(r<=s)return;const o=document.createElement("div");o.className="era-band",o.style.left=tt(s)+"%",o.style.width=tt(r)-tt(s)+"%",o.style.backgroundImage="none",o.style.backgroundColor=Js(i.id),o.textContent=pd(i.id)||i.label,i.id==="baroque"&&(o.style.justifyContent="flex-end",o.style.paddingLeft="6px",o.style.paddingRight="26px",o.style.textAlign="right"),r===wi&&(o.style.borderRight="none"),e.appendChild(o)});for(let i=n;i<=t;i+=10){const s=document.createElement("div"),r=i%50===0;s.className="axis-tick "+(r?"major":"minor"),s.style.left=tt(i)+"%",e.appendChild(s);const o=document.createElement("div");o.className="axis-label "+(r?"axis-label-major":"axis-label-minor"),o.style.left=tt(i)+"%",o.textContent=i,e.appendChild(o)}}function di(){const e=document.getElementById("gantt"),n=document.getElementById("axis"),t=document.getElementById("timeline");if(!e)return;e.innerHTML="",n&&n.querySelectorAll(".life-label").forEach(z=>z.remove());const i=parseFloat(window.getComputedStyle(e).marginTop||"0")||0,s=document.createDocumentFragment(),r=document.createDocumentFragment(),o=Ls||[];e&&e.clientWidth||n&&n.clientWidth||t&&t.clientWidth||window.innerWidth;const l=[...o].sort((z,F)=>z.birth-F.birth),c=l.length,p=l.map((z,F)=>({composer:z,laneIndex:F}));Number.isInteger(Bn)&&(Bn<0||Bn>=c)&&(Bn=null),Number.isInteger(Dn)&&(Dn<0||Dn>=c)&&(Dn=null);const h=2,g=Nn.barHeight,_=g+h,E=c*g+Math.max(0,c-1)*h;e.style.height=E+"px",c&&(p.forEach(({composer:z,laneIndex:F})=>{const se=z.displayName||z.name,K=tt(z.birth),V=tt(z.death),P=document.createElement("div");P.className="bar",P.setAttribute("data-lane-index",F),P.setAttribute("data-name",z.name);const I=bd(z.birth,z.death);P.style.backgroundImage=vd(I),P.style.backgroundColor=Js(I);const X=K,he=V-K,ne=F*_+g*.5+i,N=(O,j)=>{const J=document.createElement("div");J.className="bar-connector",J.setAttribute("data-lane-index",F),J.setAttribute("data-side",j),J.style.left=O+"%",J.style.top=-i+"px",J.style.height=ne+"px",s.appendChild(J)};if(N(X,"start"),N(X+he,"end"),n){const O=document.createElement("div");O.className="life-label",O.setAttribute("data-lane-index",F),O.setAttribute("data-side","start"),O.style.left=X+"%",O.textContent=z.birth,r.appendChild(O);const j=document.createElement("div");j.className="life-label",j.setAttribute("data-lane-index",F),j.setAttribute("data-side","end"),j.style.left=X+he+"%",j.textContent=z.death,r.appendChild(j)}P.style.left=X+"%",P.style.width=he+"%",P.style.top=F*_+"px",P.style.height=g+"px",P.style.lineHeight=g+"px",P.style.fontSize=g*.25*Nn.fontScale+"px";const Y=Ma(z.name);let te=0;if(Y){const O=document.createElement("img");O.className="bar-avatar",te=Math.max(10,Math.round(g*1.1)),O.style.width=te+"px",O.style.height=te+"px",O.src=Y,O.alt=se||z.name,P.appendChild(O)}const L=document.createElement("span");L.className="bar-label",L.textContent=se,P.appendChild(L);const Z=document.createElement("span");Z.className="bar-dates",Z.textContent=`${z.birth} – ${z.death}`,P.appendChild(Z),e.appendChild(P),L.scrollWidth>L.clientWidth&&(L.textContent=od(se),L.scrollWidth>L.clientWidth&&(L.textContent=rd(se)));const pe=()=>{const J=P.clientWidth-12-(te?te+6:0)-6;if(J<=0){Z.style.display="none";return}L.scrollWidth+Z.scrollWidth+6>J&&(Z.style.display="none")};(()=>{P.clientWidth>0?pe():typeof window<"u"&&window.requestAnimationFrame(pe)})(),P.addEventListener("click",O=>{O.stopPropagation(),za(F),window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:z,laneIndex:F}}))}),P.addEventListener("mouseenter",()=>et(F)),P.addEventListener("mouseleave",()=>et(null)),P.addEventListener("touchstart",O=>{if(!O.touches||O.touches.length!==1)return;const j=O.touches[0];P.dataset.touchStartX=String(j.clientX),P.dataset.touchStartY=String(j.clientY),et(F)},{passive:!0}),P.addEventListener("touchmove",O=>{if(!O.touches||O.touches.length!==1)return;const j=Number(P.dataset.touchStartX||"0"),J=Number(P.dataset.touchStartY||"0"),Ge=O.touches[0],kn=Math.abs(Ge.clientX-j),Ue=Math.abs(Ge.clientY-J);(kn>6||Ue>6)&&et(null)},{passive:!0}),P.addEventListener("touchend",()=>{et(null)},{passive:!0}),P.addEventListener("touchcancel",()=>{et(null)},{passive:!0})}),e.appendChild(s),n&&n.appendChild(r),qs())}function yd(){const e=document.getElementById("timeline");if(!e)return;let n=!1,t=!1;const i=4;let s=0,r=0,o=0,l=0,c=0,p=0,h=null;const g=()=>{e.dispatchEvent(new CustomEvent("timeline-pan-end"))},_=()=>{t||(t=!0,e.classList.add("panning"),e.dataset.panning="true")},E=()=>{t&&(t=!1,e.classList.remove("panning"),e.dataset.panning="false",g())};function z(){if(h=null,!n||!t)return;const G=c-s,ne=p-r;e.scrollLeft=o-G,e.scrollTop=l-ne}const F=G=>{G.button===0&&(n=!0,t=!1,e.classList.remove("panning"),s=G.clientX,r=G.clientY,c=G.clientX,p=G.clientY,o=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),G.preventDefault())},se=G=>{if(n){if(c=G.clientX,p=G.clientY,!t){const ne=Math.abs(c-s),N=Math.abs(p-r);if(ne>i||N>i)_();else return}h===null&&(h=window.requestAnimationFrame(z)),G.preventDefault()}},K=()=>{n&&(n=!1,E(),h!==null&&(cancelAnimationFrame(h),h=null))};e.addEventListener("mousedown",F),window.addEventListener("mousemove",se),window.addEventListener("mouseup",K);let V=null,P=!1;const I=G=>{if(V!==null||G.touches.length!==1)return;const ne=G.touches[0];V=ne.identifier,P=!1,s=ne.clientX,r=ne.clientY,c=ne.clientX,p=ne.clientY,o=e.scrollLeft,l=e.scrollTop,e.scrollTo&&e.scrollTo({left:e.scrollLeft,top:e.scrollTop,behavior:"auto"}),E()},X=G=>{if(V===null)return;const ne=Array.from(G.touches).find(Z=>Z.identifier===V);if(!ne)return;const N=ne.clientX-s,Y=ne.clientY-r,te=Math.abs(N),L=Math.abs(Y);if(!P)if(te>i||L>i)P=!0,_();else return;e.scrollLeft=o-N,e.scrollTop=l-Y,G.preventDefault()},he=G=>{V===null||!Array.from(G.changedTouches).some(N=>N.identifier===V)||(V=null,P=!1,E())};e.addEventListener("touchstart",I,{passive:!0}),e.addEventListener("touchmove",X,{passive:!1}),e.addEventListener("touchend",he,{passive:!0}),e.addEventListener("touchcancel",he,{passive:!0})}function wd(){const e=document.getElementById("timeline"),n=document.getElementById("gantt"),t=document.getElementById("axis");if(!e||!n)return()=>{};const i=.5,s=12,r=(p,h,g)=>{const _=p.getBoundingClientRect();return _.bottom>h&&_.top<g},o=()=>e.scrollTop+e.clientHeight>=e.scrollHeight-s,l=()=>{if(o())return;const p=Array.from(n.querySelectorAll(".bar"));if(!p.length)return;const h=e.getBoundingClientRect(),_=(t?.getBoundingClientRect()?.bottom??h.top)+1,E=h.bottom,z=p.find(V=>r(V,_,E));if(!z)return;const F=z.getBoundingClientRect(),se=_,K=F.top-se;Math.abs(K)<=i||zs(e,{left:e.scrollLeft,top:Math.max(0,e.scrollTop+K),behavior:"auto"})},c=()=>{l()};return e.addEventListener("timeline-pan-end",c),()=>{e.removeEventListener("timeline-pan-end",c)}}function zs(e,{left:n=0,top:t=0,behavior:i="smooth"}){const r=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches?"auto":i;if(e.scrollTo){e.scrollTo({left:n,top:t,behavior:r});return}e.scrollLeft=n,e.scrollTop=t}function kd(e={}){ro(e.settings||{});const n=Object.prototype.hasOwnProperty.call(e,"composers")?e.composers:rt;co(n),lo(e.eraLabels||{}),ui(),uo(),di(),yd();const t=wd(),i=()=>ui();window.addEventListener("resize",i);const s=document.getElementById("timeline");s&&(s.style.visibility="visible");function r(){const l=document.getElementById("timeline");l&&zs(l,{left:0,top:0,behavior:"auto"})}function o(){const l=document.getElementById("timeline");l&&zs(l,{left:Math.max(0,l.scrollWidth-l.clientWidth),top:Math.max(0,l.scrollHeight-l.clientHeight),behavior:"auto"})}return{goToStart:r,goToEnd:o,setComposers(l){co(l),di()},updateSettings(l){ro(l||{}),ui(),di()},updateEraLabels(l){lo(l||{}),ui(),uo(),di()},setSelectedLane:za,setHoveredLane:et,destroy(){window.removeEventListener("resize",i),t()}}}const Aa=(e,n)=>{const t=e.__vccOpts||e;for(const[i,s]of n)t[i]=s;return t},Sd={class:"timeline-wrapper"},_d={__name:"ComposersTimeline",props:{composers:{type:Array,default:()=>[]},settings:{type:Object,default:()=>({})},eraLabels:{type:Object,default:()=>({})}},setup(e){const n=e;let t=null;const i=s=>{const r=s.target?.closest?.(".bar");if(!r)return;const o=r.getAttribute("data-name"),l=Number(r.getAttribute("data-lane-index"));window.dispatchEvent(new CustomEvent("composer-select",{detail:{composer:o?{name:o}:null,laneIndex:Number.isNaN(l)?null:l}}))};return Ni(()=>{const s=document.getElementById("timeline");s&&s.addEventListener("click",i),t=kd({composers:n.composers,settings:n.settings,eraLabels:n.eraLabels}),window.timeline=t}),Wi(()=>{const s=document.getElementById("timeline");s&&s.removeEventListener("click",i),t?.destroy?.(),t=null}),Ze(()=>n.composers,s=>{t&&t.setComposers(s)},{deep:!0}),Ze(()=>n.settings,s=>{!t||!t.updateSettings||t.updateSettings(s)},{deep:!0}),Ze(()=>n.eraLabels,s=>{!t||!t.updateEraLabels||t.updateEraLabels(s)},{deep:!0}),(s,r)=>(ce(),ue("div",Sd,[...r[0]||(r[0]=[T("div",{id:"timeline"},[T("div",{class:"timeline-inner"},[T("div",{id:"axis",class:"axis"}),T("div",{id:"gantt"})])],-1)])]))}},Cd=Aa(_d,[["__scopeId","data-v-095e97d5"]]),Td=`# Composer fact sheets

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
- Orff-Schulwerk: Sein paedagogisches Konzept Orff-Schulwerk praegte Musikunterricht weltweit - Bewegung, Sprache und Perkussion als Basis.`,Ed={class:"app"},Md={class:"topbar"},xd={class:"language-switcher"},Ld={class:"visually-hidden",for:"language-select"},zd=["aria-label"],Ad=["value"],Pd={class:"menu-nav"},Rd={class:"content"},Fd={key:0},Id={class:"control-stack control-pill",role:"group","aria-label":"Timeline controls"},Hd={class:"filter-dock__header"},Od=["aria-pressed","aria-label"],Bd={"aria-hidden":"true"},Dd={key:0,class:"nav-controls",role:"group","aria-label":"Timeline navigation"},Nd=["disabled"],Wd=["disabled"],Kd={key:1,class:"scale-controls",role:"group","aria-label":"Adjust timeline size"},jd=["disabled"],Vd=["disabled"],Gd=["aria-expanded"],Ud={key:0,id:"filter-panel",class:"filter-panel",role:"dialog","aria-label":"Composer filters"},$d={class:"filter-panel__options"},Jd=["onUpdate:modelValue","aria-label"],qd={class:"filter-panel__label"},Xd={class:"filter-panel__actions"},Yd={key:1,class:"about"},Zd={class:"about__card"},Qd={class:"about__title"},eh={class:"about__text"},nh={class:"about__text"},th={class:"about__author"},ih={class:"about__author-body"},sh={class:"about__author-label"},rh={class:"about__author-name"},oh={class:"about__contributors"},ah={class:"about__contributors-title"},lh={class:"about__contributors-list"},ch={class:"about__contributors-name"},uh=["href"],dh={key:0,class:"about__contributors-toggle"},hh={class:"about__contributors-toggle-label"},fh={class:"composer-modal__content"},mh={class:"composer-modal__header"},ph={class:"composer-modal__titles"},gh={class:"composer-modal__name"},bh={key:0,class:"composer-modal__dates"},vh={class:"composer-modal__header-actions"},yh=["aria-label"],wh={key:0,class:"composer-modal__share-feedback"},kh={class:"composer-modal__nav composer-modal__nav--header","aria-label":"Composer navigation"},Sh=["disabled"],_h={class:"composer-modal__position"},Ch=["disabled"],Th={class:"composer-modal__body"},Eh={key:0,class:"composer-modal__hero"},Mh=["src","alt"],xh={class:"composer-modal__nav composer-modal__nav--mobile","aria-label":"Composer navigation"},Lh=["disabled"],zh={class:"composer-modal__position"},Ah=["disabled"],Ph={class:"composer-modal__hero-meta"},Rh={class:"composer-modal__name-small"},Fh={key:0,class:"composer-modal__dates-small"},Ih={class:"composer-modal__playlist"},Hh={class:"composer-modal__playlist-header"},Oh={class:"composer-modal__playlist-title"},Bh={key:0,class:"sc-powered",href:"https://soundcloud.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Powered by SoundCloud"},Dh=["data-soundcloud-playlist","data-soundcloud-playlist-alt"],Nh={class:"sc-player__status"},Wh={class:"sc-player__status-text"},Kh={key:1,class:"composer-modal__playlist-box composer-modal__playlist-box--empty"},jh={class:"composer-modal__description"},Vh={key:0,class:"composer-modal__facts-title"},Gh={key:1,class:"composer-modal__facts"},Uh={class:"composer-modal__fact-text"},$h={key:2,class:"composer-modal__muted"},dt="en",ho="timeline-language",fo="timeline-language-user-set",hi="/composer/",fi=25,mo=150,fs=.2,po=1.5,Jh=.35,ms=1.7,go=.95,qh=.6,mi=1,gn=12,Xh=320,Yh=.88,Zh=1.12,pi=6,Qh={__name:"App",setup(e){const n={en:{label:"En",appTitle:"The Story of Classical Music in Time",languageLabel:"Language",navigation:{composers:"Composers Timeline",about:"About"},modal:{keyWorks:"Key works to know"},share:{button:"Share",copied:"Link copied"},soundcloud:{loading:"Loading tracks from SoundCloud..."},about:{title:"Understand classical music by ear",intro:"Sometimes you hear a familiar melody and know it is classical music. But whose? Bach, Beethoven, or Mozart - it can be hard to tell immediately.",goal:"This site is designed to help you hear the character of each era and each composer, compare their stories and musical voices, and never get lost in the names again.",authorLabel:"Project creator and author",authorName:"Dmitrii Kotikov",contributorsTitle:"Project collaborators",testFeaturesLabel:"Turn on test functions",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Matveeva",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Baroque",classical:"Classical",romantic:"Romantic",twentieth:"20th Century"},composers:{},filter:{groups:{essentials:"Essential Icons",core:"Core Classics",expanded:"Extended Classics"},apply:"Apply",minimizeControls:"Hide timeline controls",restoreControls:"Show timeline controls"}},de:{label:"De",appTitle:"Die Geschichte der klassischen Musik",languageLabel:"Sprache",navigation:{composers:"Zeitstrahl der Komponisten",about:"Über das Projekt"},modal:{keyWorks:"Wichtige Werke zum Kennenlernen"},share:{button:"Teilen",copied:"Link kopiert"},soundcloud:{loading:"Tracks von SoundCloud werden geladen..."},about:{title:"Klassische Musik mit dem Ohr verstehen",intro:"Manchmal hört man eine vertraute Melodie und weiß: Das ist klassische Musik. Aber von wem? Bach, Beethoven oder Mozart – das erkennt man nicht immer sofort.",goal:"Diese Seite soll helfen, den Charakter jeder Epoche und jedes Komponisten zu hören, ihre Geschichten und Klangfarben zu vergleichen und sich in all den Namen nicht mehr zu verlieren.",authorLabel:"Initiator und Autor des Projekts",authorName:"Dmitrii Kotikov",contributorsTitle:"Projektpartner",contributors:[{name:"Timofey Muhortov",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Olga Matveeva",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Barock",classical:"Klassik",romantic:"Romantik",twentieth:"20. Jahrhundert"},composers:{},filter:{groups:{essentials:"Essenzielle Ikonen",core:"Kernklassiker",expanded:"Erweiterte Klassiker"},apply:"Anwenden",minimizeControls:"Steuerungselemente ausblenden",restoreControls:"Steuerungselemente anzeigen"}},ru:{label:"Ru",appTitle:"История классической музыки",languageLabel:"Язык",navigation:{composers:"Таймлайн композиторов",about:"О проекте"},modal:{keyWorks:"Ключевые произведения"},share:{button:"Поделиться",copied:"Ссылка скопирована"},soundcloud:{loading:"Загружаем треки из SoundCloud..."},about:{title:"Понимать классическую музыку на слух",intro:"Иногда слышишь знакомую мелодию и понимаешь: это классическая музыка. Но чья? Баха, Бетховена или Моцарта - сразу не всегда понятно.",goal:"Этот сайт помогает услышать характер каждой эпохи и каждого композитора, сравнивать их истории и музыкальные голоса - и больше не теряться в именах.",authorLabel:"Автор и создатель проекта",authorName:"Дмитрий Котиков",contributorsTitle:"Соавторы проекта",testFeaturesLabel:"Включить тестовые функции",contributors:[{name:"Тимофей Мухортов",url:"https://timofeymuhortov.ru",linkText:"timofeymuhortov.ru"},{name:"Ольга Матвеева",url:"https://facebook.com/olga.shibanova",linkText:"facebook.com/olga.shibanova"}]},eras:{baroque:"Барокко",classical:"Классицизм",romantic:"Романтизм",twentieth:"XX век"},composers:{},filter:{groups:{essentials:"Ключевые фигуры",core:"Основа классики",expanded:"Расширенный канон"},apply:"Применить",minimizeControls:"Скрыть панель управления",restoreControls:"Показать панель управления"}}},t=Object.keys(n),i=we(!1),s={en:"essentials",de:"- Kurzprofil",ru:"ключевые факты"},r=we(dt),o=we(!1),l=U(()=>!o.value),c=U(()=>n[r.value]||n.en),p=U(()=>t.map(a=>({value:a,label:n[a]?.label||a.toUpperCase()}))),h=U(()=>c.value.appTitle),g=U(()=>c.value.languageLabel||"Language"),_=U(()=>c.value.navigation||n.en.navigation),E=U(()=>c.value.about||n.en.about),z=U(()=>E.value.contributors||n.en.about.contributors||[]),F=U(()=>E.value.testFeaturesLabel||n.en.about.testFeaturesLabel||"Test functions"),se=U(()=>c.value.eras||n.en.eras),K=U(()=>c.value.soundcloud||n.en.soundcloud||{}),V=U(()=>K.value.loading||"Loading tracks from SoundCloud..."),P=U(()=>c.value.composers||{}),I=U(()=>{const a=P.value.names||{},d={};return Object.entries(a).forEach(([m,y])=>{d[He(m)]=y}),d}),X=U(()=>{const a={};return Object.entries(sn||{}).forEach(([d,m])=>{const y=He(d),R=m?.[r.value];if(R){a[y]=R;return}r.value==="en"&&m?.en&&(a[y]=m.en)}),a}),he=U(()=>({...X.value,...I.value})),G=U(()=>c.value.filter||n.en.filter),ne=U(()=>({essentials:G.value.groups?.essentials||"Essential Icons",core:G.value.groups?.core||"Core Classics",expanded:G.value.groups?.expanded||"Extended Classics"})),N=U(()=>G.value.apply||"Apply"),Y=U(()=>{const a=P.value.descriptions||{},d={};return Object.entries(a).forEach(([m,y])=>{d[He(m)]=y}),d}),te=U(()=>{const a=P.value.factsTitles||{},d={};return Object.entries(a).forEach(([m,y])=>{d[He(m)]=y}),d}),L=U(()=>c.value.modal||n.en.modal),Z=U(()=>c.value.share||n.en.share),pe=we(!1),ke=we("composers"),O=[30,40,50,70,100],j="".replace(/\/$/,""),Ge="https://soundcloud.com/dmitry-kotikov/sets/",kn="https://soundcloud.com/dmitry-kotikov/sets/antonio-vivaldi",Ue=new Set;function Ee(a,d,m){return Number.isNaN(a)?d:Math.min(m,Math.max(d,a))}function St(a){const d=Ee((a-fi)/(mo-fi),0,1),m=Math.pow(d,Jh),y=fs+(po-fs)*m;return Ee(y,fs,po)}function Zt(a){const d=Ee((a-fi)/(mo-fi),0,1),m=Math.pow(d,qh),y=ms-(ms-go)*m;return Ee(y,go,ms)}const Vn=[{id:"essentials",label:"Essential Icons",composers:["Johann Sebastian Bach","Wolfgang Amadeus Mozart","Ludwig van Beethoven","Pyotr Ilyich Tchaikovsky","Frédéric Chopin","Antonio Vivaldi","Johannes Brahms","Giuseppe Verdi","Claude Debussy"]},{id:"core",label:"Core Classics",composers:["Richard Strauss","Joseph Haydn","George Frideric Handel","Franz Schubert","Felix Mendelssohn","Robert Schumann","Franz Liszt","Antonín Dvořák","Edvard Grieg","Maurice Ravel","Giacomo Puccini","Gustav Mahler","Sergei Rachmaninoff","Domenico Scarlatti","Camille Saint-Saëns","Georges Bizet","Gioachino Rossini"]},{id:"expanded",label:"Extended Classics",composers:["Niccolò Paganini","Hector Berlioz","Mikhail Glinka","Johann Strauss II","Alexander Borodin","Jacques Offenbach","Modest Mussorgsky","Nikolai Rimsky-Korsakov","Alexander Scriabin","Erik Satie","Sergei Prokofiev","Dmitri Shostakovich","George Gershwin","Igor Stravinsky","Bedřich Smetana","Jean Sibelius","Carl Orff"]}],en=we(Vn.reduce((a,d)=>(a[d.id]=!0,a),{})),Gn=U(()=>{const a=c.value.filter||{};return{minimize:a.minimizeControls||"Hide timeline controls",restore:a.restoreControls||"Show timeline controls"}}),We=we(!1),cn=we(null),Me=we(gn),xe=we(null);let u=0;const f=we(!1),b=we("bottom-left"),S=we(null),k=U(()=>{const a={left:`${Me.value}px`};return xe.value!=null&&(a.top=`${xe.value}px`),a}),v=gt({active:!1,pointerId:null,startX:0,startY:0,startLeft:0,startTop:0,element:null}),M=gt({active:!1,startDistance:0});function x(a,d){const m=a.clientX-d.clientX,y=a.clientY-d.clientY;return Math.hypot(m,y)}const C=gt({barHeight:O[mi],widthScale:St(O[mi]),fontScale:Zt(O[mi])}),w=we(mi),B=U(()=>w.value<=0),A=U(()=>w.value>=O.length-1),H=we(!0),W=we(!1);function Q(a){const d=Ee(a,0,O.length-1);w.value=d;const m=O[d];C.barHeight=m,C.widthScale=St(m),C.fontScale=Zt(m)}function re(a){const d=a>0?1:-1;Q(w.value+d)}function ee(){const a=document.getElementById("timeline");if(!a)return;const d=Math.max(0,a.scrollWidth-a.clientWidth),m=Math.max(0,a.scrollHeight-a.clientHeight);H.value=a.scrollLeft<=pi&&a.scrollTop<=pi,W.value=a.scrollLeft>=d-pi&&a.scrollTop>=m-pi}async function Le(){window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart(),ee(),await Xe(),ti()}async function ze(){window.timeline&&typeof window.timeline.goToEnd=="function"&&window.timeline.goToEnd(),ee(),await Xe(),el()}const nn=U(()=>{const a=Vn.map(m=>m.id).filter(m=>en.value[m]),d=new Set;return a.forEach(m=>{Vn.find(R=>R.id===m)?.composers?.forEach(R=>d.add(R))}),d}),tn=U(()=>{const a=nn.value;return a.size?rt.filter(d=>a.has(d.name)):[]}),Se=U(()=>[...tn.value].sort((a,d)=>a.birth-d.birth).map(a=>({...a,displayName:Ji(a.name)}))),{descriptionsByLocale:_t,playlistIdsByKey:Ie,namesByLocale:sn}=Na(Td),fe=we(null),at=we(!1),Qt=we("");let Un=null;const Gi=U(()=>fe.value!==null),ye=U(()=>fe.value===null?null:Se.value[fe.value]),ei=U(()=>ye.value?Ji(ye.value.name):""),Xs=U(()=>ye.value?Ma(ye.value.name):null),Ys=U(()=>ye.value?Wa(ye.value.name):""),Zs=U(()=>ye.value?Ka(ye.value.name):""),Pa=U(()=>ye.value?$a(ye.value.name):[]),Ra=U(()=>Pa.value.map(a=>hl(a)).filter(Boolean)),$n=U(()=>{const a=Ra.value.filter(Boolean);return a.length?a:[kn]}),Ui=U(()=>(fe.value??0)>0),$i=U(()=>fe.value!==null&&fe.value<Se.value.length-1);function He(a){return a.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim()}function Fa(a){return He(a).replace(/\s+/g,"-")}function Qs(a){const d=Fa(a);return`${hi}${encodeURIComponent(d)}`}function Ia(a){return a.startsWith(hi)?a.slice(hi.length):""}function Ha(a){const d=He(String(a||"").replace(/-/g," ")),m=rt.find(y=>He(y.name)===d);return m?m.name:""}function Oa(a){if(!a)return;const d=Vn.find(m=>m.composers.includes(a));!d||en.value[d.id]||(en.value={...en.value,[d.id]:!0})}async function er(a=window.location.pathname){at.value=!0;try{ni(a);const d=Ia(a);if(!d){fe.value=null;return}const m=decodeURIComponent(d),y=Ha(m);if(!y){fe.value=null;return}Oa(y),await Xe();const R=Se.value.findIndex(q=>q.name===y);fe.value=R>=0?R:null}finally{at.value=!1}}function Ba(a){if(!a||typeof window>"u")return"";const d=Qs(a);return new URL(d,window.location.origin).toString()}async function Da(){if(!ye.value)return;const a=Ba(ye.value.name);if(!a)return;const d=ei.value||ye.value.name;try{if(navigator.share){await navigator.share({title:d,url:a});return}}catch(m){if(m?.name!=="AbortError")console.warn("Share failed, falling back to clipboard",m);else return}try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(a);else{const m=document.createElement("textarea");m.value=a,m.setAttribute("readonly","true"),m.style.position="absolute",m.style.left="-9999px",document.body.appendChild(m),m.select(),document.execCommand("copy"),document.body.removeChild(m)}Qt.value=Z.value.copied||"Link copied",Un&&clearTimeout(Un),Un=setTimeout(()=>{Qt.value="",Un=null},2200)}catch(m){console.warn("Failed to copy share link",m)}}function Ji(a){const d=He(a);return he.value[d]||a}function nr(a){return ne.value[a]||a}function Na(a){const d=a.split(`
`),m={},y={},R={};let q=null,le=null,Ae=null,$e="en",_e=[];const mn=()=>{(q||le)&&[q,le].filter(Boolean).forEach(Sn=>{m[Sn]=m[Sn]||{},m[Sn][$e]=_e.join(`
`).trim(),Ae&&(R[Sn]=Ae)}),_e=[],Ae=null,le=null};for(const Je of d){const Sn=Je.match(/^##\s+(.+?)\s+essentials(?:\s*\((\w{2})\))?(?:\s*\{#([a-z0-9_-]+)\})?/i);if(Sn){mn();const[,be,rn,qe]=Sn;q=He(qe||be),le=He(be),$e=(rn||"en").toLowerCase(),Ae=qe||null;continue}const Mt=q?Je.match(/^name\s*(?:\((\w{2})\))?\s*:\s*(.+)$/i):null;if(Mt){const[,be,rn]=Mt,qe=(be||$e||"en").toLowerCase(),Ce=rn.trim();[q,le].filter(Boolean).forEach(Yi=>{y[Yi]=y[Yi]||{},y[Yi][qe]=Ce});continue}q&&Je.startsWith("- ")&&_e.push(Je.replace(/^- /,"").trim())}return mn(),{descriptionsByLocale:m,playlistIdsByKey:R,namesByLocale:y}}function Wa(a){const d=Va(a),m=He(a),y=Y.value[m];if(y)return y;const R=d[r.value];return R||(d.en?d.en:Object.values(d)[0]||"")}function Ka(a){const d=te.value[He(a)];return d||Ua(a)}function ja(a,d){const m=He(d);if(a[m])return a[m];const y=m.split(" ").filter(Boolean),R=y[y.length-1];return R&&a[R]?a[R]:""}function Va(a){const d=He(a),m=d.split(" ").filter(Boolean),y=[d],R=m[m.length-1];R&&R!==d&&y.push(R);for(const q of y)if(_t[q])return _t[q];return{}}function Ga(a){return He(a).replace(/\s+/g,"-").replace(/-+/g,"-")}function Ua(a){const d=s[r.value]||s.en,m=r.value==="ru"?Ji(a):"";if(r.value==="ru"&&m)return`${m} - ${d}`;const y=String(a||"").trim().split(/\s+/).filter(Boolean);if(!y.length)return"";const R=y[y.length-1];return`${/^(?:[IVX]+|\d+|Jr\.?|Sr\.?)$/i.test(R)&&y.length>=2?y[y.length-2]:R} ${d}`}function $a(a){const d=[],m=Ga(a);m&&!d.includes(m)&&d.push(m);const y=ja(Ie,a);return y&&!d.includes(y)&&d.push(y),d}function ni(a=window.location.pathname){if(a.startsWith(hi)){ke.value="composers";return}ke.value=a==="/about"?"about":"composers"}const tr=()=>er();function ir(a){window.location.pathname!==a&&(history.pushState({},"",a),ni(a)),pe.value=!1}function sr(a){ir(a==="about"?"/about":"/")}function Ja(){pe.value=!pe.value}function qa(){pe.value=!1}async function Xa(){fn();const a=!We.value;a&&(S.value={left:Me.value,top:xe.value,anchor:b.value}),We.value=a,await Xe(),fn()}async function Ya(){We.value&&!S.value&&(fn(),S.value={left:Me.value,top:xe.value,anchor:b.value}),We.value=!1,await Xe(),fn()}function Za(){return new Promise(a=>{requestAnimationFrame(()=>requestAnimationFrame(a))})}async function rr(){if(await Xe(),await Za(),fn(),!We.value&&S.value){const a=S.value;b.value=a.anchor||b.value,Me.value=Tt(a.left),a.top!=null&&(xe.value=lt(a.top)),S.value=null;return}fn()}async function Qa(){if(f.value=!f.value,f.value){We.value=!1,await Xe(),ti();return}await Xe(),ti()}function or(){if(typeof document>"u")return 0;const a=document.querySelector(".topbar");return a&&a.offsetHeight?a.offsetHeight:0}function Ct(){if(typeof window>"u")return{width:0,height:0,offsetLeft:0,offsetTop:0};const a=window.visualViewport;return a?{width:a.width,height:a.height,offsetLeft:a.offsetLeft||0,offsetTop:a.offsetTop||0}:{width:window.innerWidth,height:window.innerHeight,offsetLeft:0,offsetTop:0}}function Tt(a){const d=cn.value;if(!d||typeof window>"u")return a;const{width:m,offsetLeft:y}=Ct(),R=y+gn,q=Math.max(R,y+m-d.offsetWidth-gn);return Math.min(Math.max(a,R),q)}function lt(a){const d=cn.value;if(!d||typeof window>"u")return a;const{height:m,offsetTop:y}=Ct(),R=Math.max(or()+gn,y+gn),q=Math.max(R,y+m-d.offsetHeight-gn);return Math.min(Math.max(a,R),q)}function fn(){const a=cn.value;if(xe.value==null&&a&&typeof window<"u"){const{height:d,offsetTop:m}=Ct();xe.value=lt(m+d-a.offsetHeight-24)}Me.value=Tt(Me.value),xe.value!=null&&(xe.value=lt(xe.value))}function el(){fn(),b.value="top-right";const d=cn.value?.offsetWidth||0,{width:m,offsetLeft:y}=Ct();Me.value=Tt(y+m-d-gn),xe.value=lt(or()+gn)}function ti(){fn(),b.value="bottom-left";const d=cn.value?.offsetHeight||0,{height:m,offsetTop:y}=Ct();Me.value=Tt(gn),xe.value=lt(y+m-d-gn)}function ar(a){if(!v.active||a.pointerId!==v.pointerId)return;a.preventDefault();const d=a.clientX-v.startX,m=a.clientY-v.startY;Me.value=Tt(v.startLeft+d),xe.value!=null&&(xe.value=lt(v.startTop+m))}function lr(){window.removeEventListener("pointermove",ar),window.removeEventListener("pointerup",ii),window.removeEventListener("pointercancel",ii)}function cr(a){const d=v.element;if(v.active=!1,v.element=null,v.pointerId=null,d?.releasePointerCapture&&a!=null)try{d.releasePointerCapture(a)}catch{}}function ii(a){!v.active||a.pointerId!==v.pointerId||(lr(),cr(a.pointerId))}function nl(){v.active&&(lr(),cr(v.pointerId))}function tl(a){const d=a.timeStamp||Date.now();d-u<=Xh&&a.preventDefault(),u=d}function il(a){if(v.active||a.pointerType==="mouse"&&a.button!==0)return;const d=a.target;if(d&&typeof d.closest=="function"&&d.closest("button, a, input, select, textarea, label, [role='button'], .filter-panel"))return;fn(),b.value="free",a.preventDefault(),v.active=!0,v.pointerId=a.pointerId,v.startX=a.clientX,v.startY=a.clientY,v.startLeft=Me.value,v.startTop=xe.value??0,v.element=cn.value;const y=cn.value;if(y?.setPointerCapture)try{y.setPointerCapture(a.pointerId)}catch{}window.addEventListener("pointermove",ar),window.addEventListener("pointerup",ii),window.addEventListener("pointercancel",ii)}function ur(a){!a||!a.touches||a.touches.length===2&&(M.active=!0,M.startDistance=x(a.touches[0],a.touches[1]))}function dr(a){if(!M.active||!a||!a.touches||a.touches.length!==2)return;a.preventDefault();const d=x(a.touches[0],a.touches[1]),m=M.startDistance||d,y=m?d/m:1;if(y>=Zh){re(1),M.startDistance=d;return}y<=Yh&&(re(-1),M.startDistance=d)}function si(a){(a?.touches?.length??0)<2&&(M.active=!1,M.startDistance=0)}function Jn(){fn()}function Et(a,{persist:d=!1}={}){const m=t.includes(a)?a:dt;if(r.value=m,d)try{localStorage.setItem(ho,m),localStorage.setItem(fo,"1")}catch{}}function sl(a){i.value=!0,Et(a,{persist:!0})}function rl(a){const d=a?.target?.value;d&&sl(d)}function ol(){try{return localStorage.getItem(ho)}catch{return null}}function al(){try{return localStorage.getItem(fo)==="1"}catch{return!1}}function ll(){const a=ol(),d=al();if(Et(dt),a&&d&&t.includes(a)){i.value=!0,Et(a);return}cl()}async function cl(){const a=!i.value;a||(r.value,void 0);const d=[ul,dl];for(const m of d){const y=await m();if(y){const R=String(y).toUpperCase();if(!a)return;const q=R==="RU"?"ru":["DE","AT","CH"].includes(R)?"de":dt;Et(q);return}}a&&Et(dt)}async function ul(){try{const a=await fetch("https://ipapi.co/json/");return a.ok&&(await a.json())?.country_code||null}catch(a){console.warn("ipapi lookup failed:",a)}return null}async function dl(){try{const a=await fetch("https://ipwho.is/");return a.ok&&(await a.json())?.country_code||null}catch(a){console.warn("ipwho.is lookup failed:",a)}return null}function nf(a,d){}function hr(){ir("/"),window.timeline&&typeof window.timeline.goToStart=="function"&&window.timeline.goToStart()}function qi(a){const d=a.detail,m=d?.laneIndex;if(Number.isInteger(m)&&Se.value[m]){fe.value=m;return}const y=d?.composer?.name;if(!y)return;const R=Se.value.findIndex(q=>q.name===y);R>=0&&(fe.value=R)}function fr(){fe.value=null}function mr(){!Ui.value||fe.value===null||(fe.value-=1)}function pr(){!$i.value||fe.value===null||(fe.value+=1)}Ni(async()=>{ll(),await er(),await Xe(),ti(),window.timeline&&typeof window.timeline.onBarClick=="function"&&window.timeline.onBarClick(qi),window.addEventListener("popstate",tr),window.addEventListener("composer-select",qi),window.addEventListener("resize",Jn),window.visualViewport&&(window.visualViewport.addEventListener("resize",Jn),window.visualViewport.addEventListener("scroll",Jn)),Jn();const a=document.getElementById("timeline");a&&(a.addEventListener("scroll",ee,{passive:!0}),a.addEventListener("touchstart",ur,{passive:!0}),a.addEventListener("touchmove",dr,{passive:!1}),a.addEventListener("touchend",si,{passive:!0}),a.addEventListener("touchcancel",si,{passive:!0}),ee())}),Wi(()=>{window.removeEventListener("popstate",tr),window.removeEventListener("composer-select",qi),window.removeEventListener("resize",Jn),window.visualViewport&&(window.visualViewport.removeEventListener("resize",Jn),window.visualViewport.removeEventListener("scroll",Jn)),nl(),Un&&(clearTimeout(Un),Un=null);const a=document.getElementById("timeline");a&&(a.removeEventListener("scroll",ee),a.removeEventListener("touchstart",ur),a.removeEventListener("touchmove",dr),a.removeEventListener("touchend",si),a.removeEventListener("touchcancel",si))}),Ze(h,a=>{a&&(document.title=a)},{immediate:!0}),Ze(r,a=>{const d=t.includes(a)?a:dt;if(d!==a){r.value=d;return}try{document.documentElement.setAttribute("data-lang",d)}catch{}window.timeline&&typeof window.timeline.updateEraLabels=="function"&&window.timeline.updateEraLabels(se.value)}),Ze(Gi,async a=>{a?(document.documentElement.style.overscrollBehavior="none",document.body.style.overscrollBehavior="none",document.body.style.overflow="hidden",document.body.style.touchAction="none",await Xe(),$n.value.length&&br()):(document.documentElement.style.overscrollBehavior="",document.body.style.overscrollBehavior="",document.body.style.overflow="",document.body.style.touchAction="",gr())}),Ze(fe,a=>{const d=window.timeline;!d||typeof d.setSelectedLane!="function"||(Number.isInteger(a)?d.setSelectedLane(a):d.setSelectedLane(null))}),Ze(fe,a=>{if(at.value)return;if(Number.isInteger(a)&&Se.value[a]){const m=Se.value[a].name,y=Qs(m);window.location.pathname!==y&&(history.pushState({},"",y),ni(y));return}const d=ke.value==="about"?"/about":"/";window.location.pathname!==d&&(history.replaceState({},"",d),ni(d))}),Ze($n,async a=>{Gi.value&&(gr(),await Xe(),a.length&&br())}),Ze(()=>Se.value.map(a=>a.name),a=>{if(fe.value===null)return;const d=ye.value;if(!d){fe.value=null;return}const m=a.findIndex(y=>y===d.name);m===-1?fe.value=null:fe.value=m});function Xi(a){return a?j?j.endsWith("/")&&a.startsWith("/")?j+a.slice(1):!j.endsWith("/")&&!a.startsWith("/")?`${j}/${a}`:j+a:a:j}function hl(a){if(!a)return"";const d=Ge;if(!d)return"";const m=d.endsWith("/");return`${d}${m?"":"/"}${a}`}function gr(){Ue.forEach(a=>{try{a.pause(),a.currentTime=0}catch(d){console.error("Failed to stop SoundCloud audio",d)}}),Ue.clear()}function br(a,d=document){const y=(d||document).querySelectorAll("[data-soundcloud-playlist]");y.length&&(y.length,y.forEach(R=>{fl(R,()=>{})}))}async function fl(a,d){const m=()=>{typeof d=="function"&&setTimeout(()=>d(),0)};if(!a||a.dataset.soundcloudReady==="true"||a.dataset.soundcloudReady==="loading"||a.dataset.soundcloudReady==="error"){m();return}const y=a.getAttribute("data-soundcloud-playlist"),R=a.getAttribute("data-soundcloud-playlist-alt")||"",q=[y,...R.split("|")].map($e=>($e||"").trim()).filter(Boolean);if(!q.length){m();return}a.dataset.soundcloudReady="loading",a.innerHTML=ml();let le=null;for(const $e of q)try{const _e=await gl($e),mn=Array.isArray(_e.tracks)&&_e.tracks.length?_e.tracks:_e&&_e.kind==="track"?[_e]:[],Je=bl(mn);wl(a,Je,$e),m();return}catch(_e){if(le=_e,_e&&_e.status===429){vr(a,$e),m();return}}console.error("Failed to build SoundCloud player",le);const Ae=q[0]||kn;vr(a,Ae),m()}function ml(){return`
    <div class="sc-player__status">
      <span class="sc-player__spinner" aria-hidden="true"></span>
      <span class="sc-player__status-text">${V.value}</span>
    </div>
  `.trim()}async function pl(a){if(!a)throw new Error("No track provided");const d=a.media&&Array.isArray(a.media.transcodings)?a.media.transcodings:[];if(d.length){let m=d.find(y=>y&&y.format&&y.format.protocol==="progressive");if(m||(m=d[0]),m&&m.url)try{const y=await vl(m.url,a.track_authorization);return console.debug("[SC] Using transcoding URL",{trackId:a.id,transcodingUrl:m.url,finalUrl:y}),y}catch(y){console.error("[SC] Transcoding proxy failed, falling back to streams endpoint",y)}}if(!a.id)throw new Error("No track id provided");return yl(a.id,a.track_authorization)}async function gl(a){const d=Xi("/api/soundcloud/playlist")+`?url=${encodeURIComponent(a)}`,m=await fetch(d);if(!m.ok){const y=new Error(`SoundCloud playlist error: ${m.status}`);throw y.status=m.status,y.retryAfter=Number(m.headers?.get("Retry-After"))||void 0,y}return m.json()}function bl(a=[]){return Array.isArray(a)?a.map((d,m)=>{if(!d)return null;const y=`Track ${m+1}`,q=[d.title,d.publisher_metadata?.release_title,d.permalink,d.permalink_url,d.id?String(d.id):null].map(le=>typeof le=="string"?le.trim():"").filter(Boolean)[0]||y;return{...d,title:q}}).filter(Boolean):[]}async function vl(a,d){const m=new URLSearchParams;m.set("url",a),d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const y=Xi("/api/soundcloud/transcoding")+`?${m.toString()}`,R=await fetch(y);if(!R.ok){const le=new Error(`SoundCloud transcoding error: ${R.status}`);throw le.status=R.status,le.retryAfter=Number(R.headers?.get("Retry-After"))||void 0,le}const q=await R.json();if(!q?.url)throw new Error("Transcoding response missing url");return q.url}async function yl(a,d){const m=new URLSearchParams;d&&m.set("track_authorization",d),l.value&&m.set("proxy","1");const y=m.toString(),R=Xi(`/api/soundcloud/streams/${a}`)+(y?`?${y}`:""),q=await fetch(R);if(!q.ok){const Ae=new Error(`SoundCloud stream error: ${q.status}`);throw Ae.status=q.status,Ae.retryAfter=Number(q.headers?.get("Retry-After"))||void 0,Ae}const le=await q.json();if(!le?.url)throw new Error("Stream response missing url");return le.url}function vr(a,d){const m=`https://w.soundcloud.com/player/?url=${encodeURIComponent(d)}&auto_play=false&show_user=false&hide_related=true&show_comments=false&show_reposts=false&show_teaser=false&show_playcount=false&sharing=false&show_artwork=false&buying=false&liking=false&download=false&visual=false`;a.innerHTML=`
    <iframe
      show_user="false"
      class="sc-player__embed"
      allow="autoplay"
      scrolling="no"
      frameborder="no"
      height="450"
      src="${m}"
    ></iframe>
  `,a.dataset.soundcloudReady="true"}function wl(a,d,m){if(!Array.isArray(d)||!d.length){a.innerHTML='<div class="sc-player__status sc-player__status--error">No tracks found for this playlist.</div>',a.dataset.soundcloudReady="error";return}a.classList.add("sc-player");const y=document.createElement("div");y.className="sc-track-list";const R=document.createElement("audio");R.preload="none",Ue.add(R);let q=null,le=null,Ae=null,$e=!1;const _e=[],mn=(be,rn)=>{be.dataset.state=rn,be.textContent=rn==="playing"?"⏸":rn==="loading"?"...":"▶"},Je=be=>mn(be,"idle"),Sn=()=>{le&&Je(le),q=null,le=null,Ae=null};R.addEventListener("ended",()=>{const be=Ae===null?-1:Ae+1;if(be>=0&&be<d.length){Mt(be,{auto:!0});return}Sn()}),R.addEventListener("pause",()=>{le&&R.currentTime<(R.duration||1/0)&&Je(le)});const Mt=async(be,{auto:rn=!1}={})=>{if($e)return;const qe=d[be],Ce=_e[be];if(!(!qe||!Ce)){if(!rn&&Ae===be&&!R.paused){R.pause(),Je(Ce);return}$e=!0,mn(Ce,"loading");try{const _n=await pl(qe);if(!_n)throw new Error("No stream URL returned");R.src=_n,await R.play(),kl(qe),le&&le!==Ce&&Je(le),le=Ce,q=qe?.id??be,Ae=be,mn(Ce,"playing")}catch(_n){console.error("Failed to play SoundCloud track",_n),Je(Ce),a.dataset.soundcloudReady="error"}finally{$e=!1}}};d.forEach((be,rn)=>{const qe=document.createElement("div");qe.className="sc-track";const Ce=document.createElement("button");Ce.type="button",Ce.className="sc-track__button",Ce.setAttribute("aria-label","Play track"),mn(Ce,"idle"),_e.push(Ce);const _n=document.createElement("div");_n.className="sc-track__title",_n.textContent=be?.title||`Track ${rn+1}`,qe.append(Ce,_n),y.append(qe),Ce.addEventListener("click",()=>{Mt(rn)})}),a.innerHTML="",a.append(y,R),a.dataset.soundcloudReady="true"}function kl(a){if(!("mediaSession"in navigator)||typeof MediaMetadata>"u")return;const d=a?.title||"Classical Music",m=a?.publisher_metadata?.artist||a?.user?.username||a?.user?.full_name||"",y=a?.publisher_metadata?.album_title||"";navigator.mediaSession.metadata=new MediaMetadata({title:d,artist:m,album:y,artwork:[{src:"/images/about_music_logo.png",type:"image/png"}]})}return(a,d)=>(ce(),ue("div",Ed,[T("header",Md,[T("button",{class:"menu-button",onClick:Ja,"aria-label":"Toggle navigation menu"},[...d[6]||(d[6]=[T("span",{class:"menu-icon"},null,-1)])]),T("img",{class:"logo",src:Qu,alt:"Logo",onClick:hr}),T("div",{class:"app-title",role:"button",onClick:hr},ie(h.value),1),T("div",xd,[T("label",Ld,ie(g.value),1),is(T("select",{id:"language-select",class:"language-select","onUpdate:modelValue":d[0]||(d[0]=m=>r.value=m),"aria-label":g.value,onChange:rl},[(ce(!0),ue(Ve,null,ci(p.value,m=>(ce(),ue("option",{key:m.value,value:m.value},ie(m.label),9,Ad))),128))],40,zd),[[Vu,r.value]])])]),T("aside",{class:pt(["side-menu",{"side-menu--open":pe.value}])},[T("nav",Pd,[T("button",{class:pt(["menu-item",{"menu-item--active":ke.value==="composers"}]),onClick:d[1]||(d[1]=m=>sr("composers"))},ie(_.value.composers),3),T("button",{class:pt(["menu-item",{"menu-item--active":ke.value==="about"}]),onClick:d[2]||(d[2]=m=>sr("about"))},ie(_.value.about),3)])],2),pe.value?(ce(),ue("div",{key:0,class:"backdrop",onClick:qa})):Ke("",!0),T("main",Rd,[ke.value==="composers"?(ce(),ue("section",Fd,[T("div",{class:"filter-dock",style:Ii(k.value),ref_key:"filterDockRef",ref:cn,onPointerdown:il,onTouchend:tl},[T("div",Id,[T("div",Hd,[T("button",{type:"button",class:"filter-dock__collapse control-btn","aria-pressed":f.value,"aria-label":f.value?Gn.value.restore:Gn.value.minimize,onClick:Qa},[T("span",Bd,ie(f.value?"↑":"↓"),1)],8,Od)]),!We.value&&!f.value?(ce(),ue("div",Dd,[T("button",{type:"button",class:"control-btn",disabled:H.value,onClick:Le,"aria-label":"Jump to start of timeline"}," ⇤ ",8,Nd),T("button",{type:"button",class:"control-btn",disabled:W.value,onClick:ze,"aria-label":"Jump to end of timeline"}," ⇥ ",8,Wd)])):Ke("",!0),!We.value&&!f.value?(ce(),ue("div",Kd,[T("button",{type:"button",class:"control-btn",disabled:B.value,onClick:d[3]||(d[3]=m=>re(-1)),"aria-label":"Make timeline blocks smaller"}," − ",8,jd),T("button",{type:"button",class:"control-btn",disabled:A.value,onClick:d[4]||(d[4]=m=>re(1)),"aria-label":"Make timeline blocks larger"}," + ",8,Vd)])):Ke("",!0),f.value?Ke("",!0):(ce(),ue("button",{key:2,class:"filter-dock__toggle control-btn control-primary","aria-expanded":We.value,"aria-controls":"filter-panel",onClick:Xa,"aria-label":"Filter composers"},[...d[7]||(d[7]=[T("svg",{class:"filter-icon",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},[T("path",{d:"M3 5h18l-7 8v5l-4 2v-7L3 5z"})],-1)])],8,Gd)),Re(Br,{name:"filter-fade",onAfterEnter:rr,onAfterLeave:rr},{default:ws(()=>[We.value?(ce(),ue("div",Ud,[T("div",$d,[(ce(),ue(Ve,null,ci(Vn,m=>T("label",{key:m.id,class:"filter-panel__item"},[is(T("input",{"onUpdate:modelValue":y=>en.value[m.id]=y,type:"checkbox",class:"filter-panel__checkbox","aria-label":`Toggle ${nr(m.id)}`},null,8,Jd),[[eo,en.value[m.id]]]),T("span",qd,ie(nr(m.id)),1)])),64))]),T("div",Xd,[T("button",{type:"button",class:"filter-panel__ok control-btn",onClick:Ya,"aria-label":"Close filters"},ie(N.value),1)])])):Ke("",!0)]),_:1})])],36),Re(Cd,{composers:Se.value,settings:C,"era-labels":se.value},null,8,["composers","settings","era-labels"])])):ke.value==="about"?(ce(),ue("section",Yd,[T("div",Zd,[d[11]||(d[11]=T("img",{class:"about__logo",src:ed,alt:"Music logo",loading:"lazy"},null,-1)),T("h1",Qd,ie(E.value.title),1),T("p",eh,ie(E.value.intro),1),T("p",nh,ie(E.value.goal),1),T("div",th,[d[10]||(d[10]=T("img",{class:"about__photo",src:nd,alt:"Dmitrii Kotikov",loading:"lazy"},null,-1)),T("div",ih,[T("div",sh,ie(E.value.authorLabel),1),T("div",rh,ie(E.value.authorName),1),d[8]||(d[8]=T("a",{class:"about__link",href:"https://www.linkedin.com/in/dmitrykotikov/",target:"_blank",rel:"noreferrer"}," LinkedIn ",-1)),d[9]||(d[9]=T("a",{class:"about__link",href:"https://thequot.es/",target:"_blank",rel:"noreferrer"}," thequot.es ",-1))])]),T("div",oh,[T("div",ah,ie(E.value.contributorsTitle),1),T("ul",lh,[(ce(!0),ue(Ve,null,ci(z.value,m=>(ce(),ue("li",{key:m.url,class:"about__contributors-item"},[T("span",ch,ie(m.name),1),T("a",{class:"about__contributors-link",href:m.url,target:"_blank",rel:"noreferrer"},ie(m.linkText),9,uh),m.url==="https://facebook.com/olga.shibanova"?(ce(),ue("div",dh,[T("label",hh,[is(T("input",{"onUpdate:modelValue":d[5]||(d[5]=y=>o.value=y),class:"about__contributors-toggle-input",type:"checkbox","aria-label":"Toggle test features"},null,512),[[eo,o.value]]),T("span",null,ie(F.value),1)])])):Ke("",!0)]))),128))])])])])):Ke("",!0)]),Re(Br,{name:"fade"},{default:ws(()=>[Gi.value?(ce(),ue("div",{key:0,class:"composer-modal",onClick:$u(fr,["self"])},[T("div",fh,[T("header",mh,[T("div",ph,[T("h2",gh,ie(ei.value),1),ye.value?(ce(),ue("p",bh,ie(ye.value.birth)+" — "+ie(ye.value.death),1)):Ke("",!0)]),T("div",vh,[T("button",{class:"composer-modal__share",type:"button",onClick:Da,"aria-label":Z.value.button},[...d[12]||(d[12]=[T("img",{class:"composer-modal__share-icon",src:td,alt:""},null,-1)])],8,yh),Qt.value?(ce(),ue("span",wh,ie(Qt.value),1)):Ke("",!0),T("div",kh,[T("button",{class:"composer-modal__arrow",onClick:mr,disabled:!Ui.value,"aria-label":"Previous"}," ← ",8,Sh),T("span",_h,ie((fe.value??0)+1)+" / "+ie(Se.value.length),1),T("button",{class:"composer-modal__arrow",onClick:pr,disabled:!$i.value,"aria-label":"Next"}," → ",8,Ch)]),T("button",{class:"composer-modal__close",onClick:fr,"aria-label":"Close composer details"},"×")])]),T("div",Th,[Xs.value?(ce(),ue("div",Eh,[T("img",{class:"composer-modal__photo",src:Xs.value,alt:ei.value},null,8,Mh),T("div",xh,[T("button",{class:"composer-modal__arrow",onClick:mr,disabled:!Ui.value,"aria-label":"Previous"}," ← ",8,Lh),T("span",zh,ie((fe.value??0)+1)+" / "+ie(Se.value.length),1),T("button",{class:"composer-modal__arrow",onClick:pr,disabled:!$i.value,"aria-label":"Next"}," → ",8,Ah)]),T("div",Ph,[T("div",Rh,ie(ei.value),1),ye.value?(ce(),ue("div",Fh,ie(ye.value.birth)+" — "+ie(ye.value.death),1)):Ke("",!0)])])):Ke("",!0),T("div",Ih,[T("div",Hh,[T("div",Oh,ie(L.value.keyWorks),1),$n.value.length?(ce(),ue("a",Bh,[...d[13]||(d[13]=[T("img",{class:"sc-powered__img",src:id,alt:"Powered by SoundCloud"},null,-1)])])):Ke("",!0)]),$n.value.length?(ce(),ue("div",{key:$n.value[0],class:"composer-modal__playlist-box sc-player","data-soundcloud-playlist":$n.value[0],"data-soundcloud-playlist-alt":$n.value.slice(1).join("|")},[T("div",Nh,[d[14]||(d[14]=T("span",{class:"sc-player__spinner","aria-hidden":"true"},null,-1)),T("span",Wh,ie(V.value),1)])],8,Dh)):(ce(),ue("div",Kh," Playlist will appear here soon. "))]),T("div",jh,[Zs.value?(ce(),ue("div",Vh,ie(Zs.value),1)):Ke("",!0),Ys.value?(ce(),ue("ul",Gh,[(ce(!0),ue(Ve,null,ci(Ys.value.split(`
`),(m,y)=>(ce(),ue("li",{key:y},[T("span",Uh,ie(m),1)]))),128))])):(ce(),ue("p",$h,"No description yet."))])])])])):Ke("",!0)]),_:1})]))}},ef=Aa(Qh,[["__scopeId","data-v-d76f1d28"]]);Xu(ef).mount("#app");
