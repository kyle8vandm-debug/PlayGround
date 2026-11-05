(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="180",Mh=0,ol=1,wh=2,Cc=1,Rc=2,In=3,wn=0,Ge=1,He=2,Yn=0,Wi=1,ll=2,cl=3,hl=4,Sh=5,ci=100,Th=101,Eh=102,Ah=103,Ch=104,Rh=200,Dh=201,Ph=202,Lh=203,Oa=204,Ba=205,Ih=206,Uh=207,Nh=208,kh=209,Fh=210,Oh=211,Bh=212,zh=213,Hh=214,za=0,Ha=1,Ga=2,ji=3,Va=4,Wa=5,$a=6,Xa=7,Dc=0,Gh=1,Vh=2,jn=0,Wh=1,$h=2,Xh=3,Pc=4,qh=5,Yh=6,jh=7,Lc=300,Ki=301,Zi=302,qa=303,Ya=304,zr=306,Cr=1e3,ui=1001,ja=1002,tn=1003,Kh=1004,Us=1005,xn=1006,jr=1007,fi=1008,Sn=1009,Ic=1010,Uc=1011,bs=1012,ko=1013,gi=1014,_n=1015,Cs=1016,Fo=1017,Oo=1018,Ms=1020,Nc=35902,kc=35899,Fc=1021,Oc=1022,hn=1023,ws=1026,Ss=1027,Bo=1028,zo=1029,Bc=1030,Ho=1031,Go=1033,gr=33776,vr=33777,xr=33778,_r=33779,Ka=35840,Za=35841,Ja=35842,Qa=35843,to=36196,eo=37492,no=37496,io=37808,so=37809,ro=37810,ao=37811,oo=37812,lo=37813,co=37814,ho=37815,uo=37816,fo=37817,po=37818,mo=37819,go=37820,vo=37821,xo=36492,_o=36494,yo=36495,bo=36283,Mo=36284,wo=36285,So=36286,Zh=3200,Jh=3201,zc=0,Qh=1,Xn="",Ue="srgb",Ji="srgb-linear",Rr="linear",se="srgb",bi=7680,dl=519,td=512,ed=513,nd=514,Hc=515,id=516,sd=517,rd=518,ad=519,To=35044,Dr=35048,ul="300 es",yn=2e3,Pr=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,Eo=180/Math.PI;function Kn(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[r&255]+Le[r>>8&255]+Le[r>>16&255]+Le[r>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Zt(r,t,e){return Math.max(t,Math.min(e,r))}function od(r,t){return(r%t+t)%t}function Kr(r,t,e){return(1-e)*r+e*t}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class es{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==u||l!==p||h!==g){let m=1-o;const f=c*u+l*p+h*g+d*v,w=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const C=Math.sqrt(S),A=Math.atan2(C,f*w);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const _=o*w;if(c=c*m+u*_,l=l*m+p*_,h=h*m+g*_,d=d*m+v*_,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[a],u=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=c(n/2),p=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zr.copy(this).projectOnVector(t),this.sub(Zr)}reflect(t){return this.sub(Zr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new R,fl=new es;class Xt{constructor(t,e,n,i,s,a,o,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],w=i[1],S=i[4],_=i[7],C=i[2],A=i[5],E=i[8];return s[0]=a*v+o*w+c*C,s[3]=a*m+o*S+c*A,s[6]=a*f+o*_+c*E,s[1]=l*v+h*w+d*C,s[4]=l*m+h*S+d*A,s[7]=l*f+h*_+d*E,s[2]=u*v+p*w+g*C,s[5]=u*m+p*S+g*A,s[8]=u*f+p*_+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*s,p=l*s-a*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*s-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Xt;function Gc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Lr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ld(){const r=Lr("canvas");return r.style.display="block",r}const pl={};function Ts(r){r in pl||(pl[r]=!0,console.warn(r))}function cd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ml=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){const r={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===se&&(i.r=Nn(i.r),i.g=Nn(i.g),i.b=Nn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===se&&(i.r=$i(i.r),i.g=$i(i.g),i.b=$i(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?Rr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ji]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:se,toXYZ:ml,fromXYZ:gl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),r}const te=hd();function Nn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function $i(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mi;class dd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=Lr("canvas")),Mi.width=t.width,Mi.height=t.height;const i=Mi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Nn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ud=0;class Vo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Qr(i[a].image)):s.push(Qr(i[a]))}else s=Qr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Qr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fd=0;const ta=new R;class Ne extends ts{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=ui,i=ui,s=xn,a=fi,o=hn,c=Sn,l=Ne.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Kn(),this.name="",this.source=new Vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ta).x}get height(){return this.source.getSize(ta).y}get depth(){return this.source.getSize(ta).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cr:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cr:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Lc;Ne.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,i=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,_=(p+1)/2,C=(f+1)/2,A=(h+u)/4,E=(d+v)/4,L=(g+m)/4;return S>_&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=E/n):_>C?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=A/i,s=L/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=L/s),this.set(n,i,s,e),this}let w=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-v)/w,this.z=(u-h)/w,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Ne(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Vo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends pd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vc extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class md extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),ks.subVectors(this.max,rs),wi.subVectors(t.a,rs),Si.subVectors(t.b,rs),Ti.subVectors(t.c,rs),On.subVectors(Si,wi),Bn.subVectors(Ti,Si),ei.subVectors(wi,Ti);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ei.z,ei.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ei.z,0,-ei.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ei.y,ei.x,0];return!ea(e,wi,Si,Ti,ks)||(e=[1,0,0,0,1,0,0,0,1],!ea(e,wi,Si,Ti,ks))?!1:(Fs.crossVectors(On,Bn),e=[Fs.x,Fs.y,Fs.z],ea(e,wi,Si,Ti,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Cn=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,Ns=new xi,wi=new R,Si=new R,Ti=new R,On=new R,Bn=new R,ei=new R,rs=new R,ks=new R,Fs=new R,ni=new R;function ea(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ni.fromArray(r,s);const o=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const gd=new xi,as=new R,na=new R;class _i{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(na)),this.expandByPoint(as.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new R,ia=new R,Os=new R,zn=new R,sa=new R,Bs=new R,ra=new R;class Hr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ia.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(ia);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Os),o=zn.dot(this.direction),c=-zn.dot(Os),l=zn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=s*h,d>=0)if(u>=-g)if(u<=g){const v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),p=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ia).addScaledVector(Os,u),p}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),i=Rn.dot(Rn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,i,s){sa.subVectors(e,t),Bs.subVectors(n,t),ra.crossVectors(sa,Bs);let a=this.direction.dot(ra),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);const c=o*this.direction.dot(Bs.crossVectors(zn,Bs));if(c<0)return null;const l=o*this.direction.dot(sa.cross(zn));if(l<0||c+l>a)return null;const h=-o*zn.dot(ra);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,s,a,o,c,l,h,d,u,p,g,v,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,d,u,p,g,v,m)}set(t,e,n,i,s,a,o,c,l,h,d,u,p,g,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ei.setFromMatrixColumn(t,0).length(),s=1/Ei.setFromMatrixColumn(t,1).length(),a=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,v=l*d;e[0]=u+v*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,v=l*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,v=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=v-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,xd)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Hn.crossVectors(n,Ye),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Hn.crossVectors(n,Ye)),Hn.normalize(),zs.crossVectors(Ye,Hn),i[0]=Hn.x,i[4]=zs.x,i[8]=Ye.x,i[1]=Hn.y,i[5]=zs.y,i[9]=Ye.y,i[2]=Hn.z,i[6]=zs.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],w=n[3],S=n[7],_=n[11],C=n[15],A=i[0],E=i[4],L=i[8],M=i[12],b=i[1],P=i[5],k=i[9],H=i[13],Y=i[2],W=i[6],q=i[10],Z=i[14],G=i[3],ct=i[7],gt=i[11],Rt=i[15];return s[0]=a*A+o*b+c*Y+l*G,s[4]=a*E+o*P+c*W+l*ct,s[8]=a*L+o*k+c*q+l*gt,s[12]=a*M+o*H+c*Z+l*Rt,s[1]=h*A+d*b+u*Y+p*G,s[5]=h*E+d*P+u*W+p*ct,s[9]=h*L+d*k+u*q+p*gt,s[13]=h*M+d*H+u*Z+p*Rt,s[2]=g*A+v*b+m*Y+f*G,s[6]=g*E+v*P+m*W+f*ct,s[10]=g*L+v*k+m*q+f*gt,s[14]=g*M+v*H+m*Z+f*Rt,s[3]=w*A+S*b+_*Y+C*G,s[7]=w*E+S*P+_*W+C*ct,s[11]=w*L+S*k+_*q+C*gt,s[15]=w*M+S*H+_*Z+C*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],v=t[7],m=t[11],f=t[15];return g*(+s*c*d-i*l*d-s*o*u+n*l*u+i*o*p-n*c*p)+v*(+e*c*p-e*l*u+s*a*u-i*a*p+i*l*h-s*c*h)+m*(+e*l*d-e*o*p-s*a*d+n*a*p+s*o*h-n*l*h)+f*(-i*o*h-e*c*d+e*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],v=t[13],m=t[14],f=t[15],w=d*m*l-v*u*l+v*c*p-o*m*p-d*c*f+o*u*f,S=g*u*l-h*m*l-g*c*p+a*m*p+h*c*f-a*u*f,_=h*v*l-g*d*l+g*o*p-a*v*p-h*o*f+a*d*f,C=g*d*c-h*v*c-g*o*u+a*v*u+h*o*m-a*d*m,A=e*w+n*S+i*_+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=w*E,t[1]=(v*u*s-d*m*s-v*i*p+n*m*p+d*i*f-n*u*f)*E,t[2]=(o*m*s-v*c*s+v*i*l-n*m*l-o*i*f+n*c*f)*E,t[3]=(d*c*s-o*u*s-d*i*l+n*u*l+o*i*p-n*c*p)*E,t[4]=S*E,t[5]=(h*m*s-g*u*s+g*i*p-e*m*p-h*i*f+e*u*f)*E,t[6]=(g*c*s-a*m*s-g*i*l+e*m*l+a*i*f-e*c*f)*E,t[7]=(a*u*s-h*c*s+h*i*l-e*u*l-a*i*p+e*c*p)*E,t[8]=_*E,t[9]=(g*d*s-h*v*s-g*n*p+e*v*p+h*n*f-e*d*f)*E,t[10]=(a*v*s-g*o*s+g*n*l-e*v*l-a*n*f+e*o*f)*E,t[11]=(h*o*s-a*d*s-h*n*l+e*d*l+a*n*p-e*o*p)*E,t[12]=C*E,t[13]=(h*v*i-g*d*i+g*n*u-e*v*u-h*n*m+e*d*m)*E,t[14]=(g*o*i-a*v*i-g*n*c+e*v*c+a*n*m-e*o*m)*E,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*u+e*o*u)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,d=o+o,u=s*l,p=s*h,g=s*d,v=a*h,m=a*d,f=o*d,w=c*l,S=c*h,_=c*d,C=n.x,A=n.y,E=n.z;return i[0]=(1-(v+f))*C,i[1]=(p+_)*C,i[2]=(g-S)*C,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(u+f))*A,i[6]=(m+w)*A,i[7]=0,i[8]=(g+S)*E,i[9]=(m-w)*E,i[10]=(1-(u+v))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ei.set(i[0],i[1],i[2]).length();const a=Ei.set(i[4],i[5],i[6]).length(),o=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],on.copy(this);const l=1/s,h=1/a,d=1/o;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,e.setFromRotationMatrix(on),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=yn,c=!1){const l=this.elements,h=2*s/(e-t),d=2*s/(n-i),u=(e+t)/(e-t),p=(n+i)/(n-i);let g,v;if(c)g=s/(a-s),v=a*s/(a-s);else if(o===yn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Pr)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=yn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),p=-(n+i)/(n-i);let g,v;if(c)g=1/(a-s),v=a/(a-s);else if(o===yn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Pr)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new R,on=new ne,vd=new R(0,0,0),xd=new R(1,1,1),Hn=new R,zs=new R,Ye=new R,vl=new ne,xl=new es;class Tn{constructor(t=0,e=0,n=0,i=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Wo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _d=0;const _l=new R,Ai=new es,Dn=new ne,Hs=new R,os=new R,yd=new R,bd=new es,yl=new R(1,0,0),bl=new R(0,1,0),Ml=new R(0,0,1),wl={type:"added"},Md={type:"removed"},Ci={type:"childadded",child:null},aa={type:"childremoved",child:null};class ue extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new R,e=new Tn,n=new es,i=new R(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(bl,t)}rotateZ(t){return this.rotateOnAxis(Ml,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(bl,t)}translateZ(t){return this.translateOnAxis(Ml,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(os,Hs,this.up):Dn.lookAt(Hs,os,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Ai.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Md),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new R(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new R,Pn=new R,oa=new R,Ln=new R,Ri=new R,Di=new R,Sl=new R,la=new R,ca=new R,ha=new R,da=new ae,ua=new ae,fa=new ae;class Qe{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ln.subVectors(t,e),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ln.subVectors(i,e),Pn.subVectors(n,e),oa.subVectors(t,e);const a=ln.dot(ln),o=ln.dot(Pn),c=ln.dot(oa),l=Pn.dot(Pn),h=Pn.dot(oa),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return da.setScalar(0),ua.setScalar(0),fa.setScalar(0),da.fromBufferAttribute(t,e),ua.fromBufferAttribute(t,n),fa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(da,s.x),a.addScaledVector(ua,s.y),a.addScaledVector(fa,s.z),a}static isFrontFacing(t,e,n,i){return ln.subVectors(n,e),Pn.subVectors(t,e),ln.cross(Pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Ri.subVectors(i,n),Di.subVectors(s,n),la.subVectors(t,n);const c=Ri.dot(la),l=Di.dot(la);if(c<=0&&l<=0)return e.copy(n);ca.subVectors(t,i);const h=Ri.dot(ca),d=Di.dot(ca);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ri,a);ha.subVectors(t,s);const p=Ri.dot(ha),g=Di.dot(ha);if(g>=0&&p<=g)return e.copy(s);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Di,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Sl.subVectors(s,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Sl,o);const f=1/(m+v+u);return a=v*f,o=u*f,e.copy(n).addScaledVector(Ri,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function pa(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=od(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=pa(a,s,t+1/3),this.g=pa(a,s,t),this.b=pa(a,s,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=$i(t.r),this.g=$i(t.g),this.b=$i(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return te.workingToColorSpace(Ie.copy(this),t),Math.round(Zt(Ie.r*255,0,255))*65536+Math.round(Zt(Ie.g*255,0,255))*256+Math.round(Zt(Ie.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,s=Ie.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ue){te.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Gs);const n=Kr(Gn.h,Gs.h,e),i=Kr(Gn.s,Gs.s,e),s=Kr(Gn.l,Gs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Mt;Mt.NAMES=Wc;let wd=0;class Zn extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=Wi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oa,this.blendDst=Ba,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mn extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new R,Vs=new zt;let Sd=0;class we{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=To,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Vs.fromBufferAttribute(this,e),Vs.applyMatrix3(t),this.setXY(e,Vs.x,Vs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==To&&(t.usage=this.usage),t}}class $c extends we{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xc extends we{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends we{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Td=0;const sn=new ne,ma=new ue,Pi=new R,je=new xi,ls=new xi,Re=new R;class be extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gc(t)?Xc:$c)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return ma.lookAt(t),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(je.min,ls.min),je.expandByPoint(Re),Re.addVectors(je.max,ls.max),je.expandByPoint(Re)):(je.expandByPoint(ls.min),je.expandByPoint(ls.max))}je.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Re.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(t,l),Re.add(Pi)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new we(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new R,c[L]=new R;const l=new R,h=new R,d=new R,u=new zt,p=new zt,g=new zt,v=new R,m=new R;function f(L,M,b){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,b),u.fromBufferAttribute(s,L),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(v),o[M].add(v),o[b].add(v),c[L].add(m),c[M].add(m),c[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,M=w.length;L<M;++L){const b=w[L],P=b.start,k=b.count;for(let H=P,Y=P+k;H<Y;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new R,_=new R,C=new R,A=new R;function E(L){C.fromBufferAttribute(i,L),A.copy(C);const M=o[L];S.copy(M),S.sub(C.multiplyScalar(C.dot(M))).normalize(),_.crossVectors(A,M);const P=_.dot(c[L])<0?-1:1;a.setXYZW(L,S.x,S.y,S.z,P)}for(let L=0,M=w.length;L<M;++L){const b=w[L],P=b.start,k=b.count;for(let H=P,Y=P+k;H<Y;H+=3)E(t.getX(H+0)),E(t.getX(H+1)),E(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new R,s=new R,a=new R,o=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new we(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new ne,ii=new Hr,Ws=new _i,El=new R,$s=new R,Xs=new R,qs=new R,ga=new R,Ys=new R,Al=new R,js=new R;class Wt extends ue{constructor(t=new be,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ys.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(ga.fromBufferAttribute(d,t),a?Ys.addScaledVector(ga,h):Ys.addScaledVector(ga.sub(e),h))}e.add(Ys)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),ii.copy(t.ray).recast(t.near),!(Ws.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ws,El)===null||ii.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Tl.copy(s).invert(),ii.copy(t.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,C=S;_<C;_+=3){const A=o.getX(_),E=o.getX(_+1),L=o.getX(_+2);i=Ks(this,f,t,n,l,h,d,A,E,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=o.getX(m),S=o.getX(m+1),_=o.getX(m+2);i=Ks(this,a,t,n,l,h,d,w,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const m=u[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,C=S;_<C;_+=3){const A=_,E=_+1,L=_+2;i=Ks(this,f,t,n,l,h,d,A,E,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const w=m,S=m+1,_=m+2;i=Ks(this,a,t,n,l,h,d,w,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ed(r,t,e,n,i,s,a,o){let c;if(t.side===Ge?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===wn,o),c===null)return null;js.copy(o),js.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(js);return l<e.near||l>e.far?null:{distance:l,point:js.clone(),object:r}}function Ks(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,$s),r.getVertexPosition(c,Xs),r.getVertexPosition(l,qs);const h=Ed(r,t,e,n,$s,Xs,qs,Al);if(h){const d=new R;Qe.getBarycoord(Al,$s,Xs,qs,d),i&&(h.uv=Qe.getInterpolatedAttribute(i,o,c,l,d,new zt)),s&&(h.uv1=Qe.getInterpolatedAttribute(s,o,c,l,d,new zt)),a&&(h.normal=Qe.getInterpolatedAttribute(a,o,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new R,materialIndex:0};Qe.getNormal($s,Xs,qs,u.normal),h.face=u,h.barycoord=d}return h}class Se extends be{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function g(v,m,f,w,S,_,C,A,E,L,M){const b=_/E,P=C/L,k=_/2,H=C/2,Y=A/2,W=E+1,q=L+1;let Z=0,G=0;const ct=new R;for(let gt=0;gt<q;gt++){const Rt=gt*P-H;for(let at=0;at<W;at++){const mt=at*b-k;ct[v]=mt*w,ct[m]=Rt*S,ct[f]=Y,l.push(ct.x,ct.y,ct.z),ct[v]=0,ct[m]=0,ct[f]=A>0?1:-1,h.push(ct.x,ct.y,ct.z),d.push(at/E),d.push(1-gt/L),Z+=1}}for(let gt=0;gt<L;gt++)for(let Rt=0;Rt<E;Rt++){const at=u+Rt+W*gt,mt=u+Rt+W*(gt+1),dt=u+(Rt+1)+W*(gt+1),Dt=u+(Rt+1)+W*gt;c.push(at,mt,Dt),c.push(mt,dt,Dt),G+=6}o.addGroup(p,G,M),p+=G,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Be(r){const t={};for(let e=0;e<r.length;e++){const n=Qi(r[e]);for(const i in n)t[i]=n[i]}return t}function Ad(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function qc(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Cd={clone:Qi,merge:Be};var Rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yc extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new R,Cl=new zt,Rl=new zt;class Je extends Yc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Eo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Cl,Rl),e.subVectors(Rl,Cl)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Ii=1;class Pd extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Je(Li,Ii,t,e);i.layers=this.layers,this.add(i);const s=new Je(Li,Ii,t,e);s.layers=this.layers,this.add(s);const a=new Je(Li,Ii,t,e);a.layers=this.layers,this.add(a);const o=new Je(Li,Ii,t,e);o.layers=this.layers,this.add(o);const c=new Je(Li,Ii,t,e);c.layers=this.layers,this.add(c);const l=new Je(Li,Ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends Ne{constructor(t=[],e=Ki,n,i,s,a,o,c,l,h){super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ld extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new jc(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Se(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Yn});s.uniforms.tEquirect.value=e;const a=new Wt(i,s),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=xn),new Pd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class jt extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Id={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Id)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class $o{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new $o(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ud extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=To,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new R;class Ir{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new we(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ir(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Kc extends Zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ui;const cs=new R,Ni=new R,ki=new R,Fi=new zt,hs=new zt,Zc=new ne,Zs=new R,ds=new R,Js=new R,Dl=new zt,xa=new zt,Pl=new zt;class kd extends ue{constructor(t=new Kc){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new be;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nd(e,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Ir(n,3,0,!1)),Ui.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Ui,this.material=t,this.center=new zt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),Zc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-ki.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;Qs(Zs.set(-.5,-.5,0),ki,a,Ni,i,s),Qs(ds.set(.5,-.5,0),ki,a,Ni,i,s),Qs(Js.set(.5,.5,0),ki,a,Ni,i,s),Dl.set(0,0),xa.set(1,0),Pl.set(1,1);let o=t.ray.intersectTriangle(Zs,ds,Js,!1,cs);if(o===null&&(Qs(ds.set(-.5,.5,0),ki,a,Ni,i,s),xa.set(0,1),o=t.ray.intersectTriangle(Zs,Js,ds,!1,cs),o===null))return;const c=t.ray.origin.distanceTo(cs);c<t.near||c>t.far||e.push({distance:c,point:cs.clone(),uv:Qe.getInterpolation(cs,Zs,ds,Js,Dl,xa,Pl,new zt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qs(r,t,e,n,i,s){Fi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(hs.x=s*Fi.x-i*Fi.y,hs.y=i*Fi.x+s*Fi.y):hs.copy(Fi),r.copy(t),r.x+=hs.x,r.y+=hs.y,r.applyMatrix4(Zc)}class Fd extends Ne{constructor(t=null,e=1,n=1,i,s,a,o,c,l=tn,h=tn,d,u){super(null,a,o,c,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ll extends we{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Oi=new ne,Il=new ne,tr=[],Ul=new xi,Od=new ne,us=new Wt,fs=new _i;class qn extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Od)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),Ul.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union(Ul)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),fs.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Oi),Il.multiplyMatrices(n,Oi),us.matrixWorld=Il,us.raycast(t,tr);for(let a=0,o=tr.length;a<o;a++){const c=tr[a];c.instanceId=s,c.object=this,e.push(c)}tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fd(new Float32Array(i*this.count),i,this.count,Bo,_n));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const _a=new R,Bd=new R,zd=new Xt;class $n{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_a.subVectors(n,e).cross(Bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_a),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zd.getNormalMatrix(t),i=this.coplanarPoint(_a).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const si=new _i,Hd=new zt(.5,.5),er=new R;class Xo{constructor(t=new $n,e=new $n,n=new $n,i=new $n,s=new $n,a=new $n){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],u=s[6],p=s[7],g=s[8],v=s[9],m=s[10],f=s[11],w=s[12],S=s[13],_=s[14],C=s[15];if(i[0].setComponents(l-a,p-h,f-g,C-w).normalize(),i[1].setComponents(l+a,p+h,f+g,C+w).normalize(),i[2].setComponents(l+o,p+d,f+v,C+S).normalize(),i[3].setComponents(l-o,p-d,f-v,C-S).normalize(),n)i[4].setComponents(c,u,m,_).normalize(),i[5].setComponents(l-c,p-u,f-m,C-_).normalize();else if(i[4].setComponents(l-c,p-u,f-m,C-_).normalize(),e===yn)i[5].setComponents(l+c,p+u,f+m,C+_).normalize();else if(e===Pr)i[5].setComponents(c,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);const e=Hd.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(er.x=i.normal.x>0?t.max.x:t.min.x,er.y=i.normal.y>0?t.max.y:t.min.y,er.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qo extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ur=new R,Nr=new R,Nl=new ne,ps=new Hr,nr=new _i,ya=new R,kl=new R;class Jc extends ue{constructor(t=new be,e=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ur.fromBufferAttribute(e,i-1),Nr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ur.distanceTo(Nr);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(i),nr.radius+=s,t.ray.intersectsSphere(nr)===!1)return;Nl.copy(i).invert(),ps.copy(t.ray).applyMatrix4(Nl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=h.getX(v),w=h.getX(v+1),S=ir(this,t,ps,c,f,w,v);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(p),f=ir(this,t,ps,c,v,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=l){const f=ir(this,t,ps,c,v,v+1,v);f&&e.push(f)}if(this.isLineLoop){const v=ir(this,t,ps,c,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ir(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(Ur.fromBufferAttribute(o,i),Nr.fromBufferAttribute(o,s),e.distanceSqToSegment(Ur,Nr,ya,kl)>n)return;ya.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ya);if(!(l<t.near||l>t.far))return{distance:l,point:kl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Fl=new R,Ol=new R;class Gd extends Jc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Fl.fromBufferAttribute(e,i),Ol.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fl.distanceTo(Ol);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vd extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bl=new ne,Ao=new Hr,sr=new _i,rr=new R;class Wd extends ue{constructor(t=new be,e=new Vd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(i),sr.radius+=s,t.ray.intersectsSphere(sr)===!1)return;Bl.copy(i).invert(),Ao.copy(t.ray).applyMatrix4(Bl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,v=p;g<v;g++){const m=l.getX(g);rr.fromBufferAttribute(d,m),zl(rr,m,c,i,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,v=p;g<v;g++)rr.fromBufferAttribute(d,g),zl(rr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zl(r,t,e,n,i,s,a){const o=Ao.distanceSqToPoint(r);if(o<e){const c=new R;Ao.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Yo extends Ne{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qc extends Ne{constructor(t,e,n=gi,i,s,a,o=tn,c=tn,l,h=ws,d=1){if(h!==ws&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class th extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class dn extends be{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],p=[];let g=0;const v=[],m=n/2;let f=0;w(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(p,2));function w(){const _=new R,C=new R;let A=0;const E=(e-t)/n;for(let L=0;L<=s;L++){const M=[],b=L/s,P=b*(e-t)+t;for(let k=0;k<=i;k++){const H=k/i,Y=H*c+o,W=Math.sin(Y),q=Math.cos(Y);C.x=P*W,C.y=-b*n+m,C.z=P*q,d.push(C.x,C.y,C.z),_.set(W,E,q).normalize(),u.push(_.x,_.y,_.z),p.push(H,1-b),M.push(g++)}v.push(M)}for(let L=0;L<i;L++)for(let M=0;M<s;M++){const b=v[M][L],P=v[M+1][L],k=v[M+1][L+1],H=v[M][L+1];(t>0||M!==0)&&(h.push(b,P,H),A+=3),(e>0||M!==s-1)&&(h.push(P,k,H),A+=3)}l.addGroup(f,A,0),f+=A}function S(_){const C=g,A=new zt,E=new R;let L=0;const M=_===!0?t:e,b=_===!0?1:-1;for(let k=1;k<=i;k++)d.push(0,m*b,0),u.push(0,b,0),p.push(.5,.5),g++;const P=g;for(let k=0;k<=i;k++){const Y=k/i*c+o,W=Math.cos(Y),q=Math.sin(Y);E.x=M*q,E.y=m*b,E.z=M*W,d.push(E.x,E.y,E.z),u.push(0,b,0),A.x=W*.5+.5,A.y=q*.5*b+.5,p.push(A.x,A.y),g++}for(let k=0;k<i;k++){const H=C+k,Y=P+k;_===!0?h.push(Y,Y+1,H):h.push(Y+1,Y,H),L+=3}l.addGroup(f,L,_===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends dn{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Rs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gr extends be{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new le(s,3)),this.setAttribute("normal",new le(s.slice(),3)),this.setAttribute("uv",new le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const S=new R,_=new R,C=new R;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],_),p(e[A+2],C),c(S,_,C,w)}function c(w,S,_,C){const A=C+1,E=[];for(let L=0;L<=A;L++){E[L]=[];const M=w.clone().lerp(_,L/A),b=S.clone().lerp(_,L/A),P=A-L;for(let k=0;k<=P;k++)k===0&&L===A?E[L][k]=M:E[L][k]=M.clone().lerp(b,k/P)}for(let L=0;L<A;L++)for(let M=0;M<2*(A-L)-1;M++){const b=Math.floor(M/2);M%2===0?(u(E[L][b+1]),u(E[L+1][b]),u(E[L][b])):(u(E[L][b+1]),u(E[L+1][b+1]),u(E[L+1][b]))}}function l(w){const S=new R;for(let _=0;_<s.length;_+=3)S.x=s[_+0],S.y=s[_+1],S.z=s[_+2],S.normalize().multiplyScalar(w),s[_+0]=S.x,s[_+1]=S.y,s[_+2]=S.z}function h(){const w=new R;for(let S=0;S<s.length;S+=3){w.x=s[S+0],w.y=s[S+1],w.z=s[S+2];const _=m(w)/2/Math.PI+.5,C=f(w)/Math.PI+.5;a.push(_,1-C)}g(),d()}function d(){for(let w=0;w<a.length;w+=6){const S=a[w+0],_=a[w+2],C=a[w+4],A=Math.max(S,_,C),E=Math.min(S,_,C);A>.9&&E<.1&&(S<.2&&(a[w+0]+=1),_<.2&&(a[w+2]+=1),C<.2&&(a[w+4]+=1))}}function u(w){s.push(w.x,w.y,w.z)}function p(w,S){const _=w*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){const w=new R,S=new R,_=new R,C=new R,A=new zt,E=new zt,L=new zt;for(let M=0,b=0;M<s.length;M+=9,b+=6){w.set(s[M+0],s[M+1],s[M+2]),S.set(s[M+3],s[M+4],s[M+5]),_.set(s[M+6],s[M+7],s[M+8]),A.set(a[b+0],a[b+1]),E.set(a[b+2],a[b+3]),L.set(a[b+4],a[b+5]),C.copy(w).add(S).add(_).divideScalar(3);const P=m(C);v(A,b+0,w,P),v(E,b+2,S,P),v(L,b+4,_,P)}}function v(w,S,_,C){C<0&&w.x===1&&(a[S]=w.x-1),_.x===0&&_.z===0&&(a[S]=C/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.vertices,t.indices,t.radius,t.details)}}class Vr extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Vr(t.radius,t.detail)}}const ar=new R,or=new R,ba=new R,lr=new Qe;class $d extends be{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(yr*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],d=new Array(3),u={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:f}=lr;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),f.fromBufferAttribute(o,l[2]),lr.getNormal(ba),d[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(f.x*i)},${Math.round(f.y*i)},${Math.round(f.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){const S=(w+1)%3,_=d[w],C=d[S],A=lr[h[w]],E=lr[h[S]],L=`${_}_${C}`,M=`${C}_${_}`;M in u&&u[M]?(ba.dot(u[M].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(E.x,E.y,E.z)),u[M]=null):L in u||(u[L]={index0:l[w],index1:l[S],normal:ba.clone()})}}for(const g in u)if(u[g]){const{index0:v,index1:m}=u[g];ar.fromBufferAttribute(o,v),or.fromBufferAttribute(o,m),p.push(ar.x,ar.y,ar.z),p.push(or.x,or.y,or.z)}this.setAttribute("position",new le(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class kn extends Gr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new kn(t.radius,t.detail)}}class Fn extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],v=[],m=[];for(let f=0;f<h;f++){const w=f*u-a;for(let S=0;S<l;S++){const _=S*d-s;g.push(_,-w,0),v.push(0,0,1),m.push(S/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){const S=w+l*f,_=w+l*(f+1),C=w+1+l*(f+1),A=w+1+l*f;p.push(S,_,A),p.push(_,C,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ns extends be{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,p=new R,g=new zt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const f=s+m/n*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let f=0;f<n;f++){const w=f+m,S=w,_=w+n+1,C=w+n+2,A=w+1;o.push(S,_,A),o.push(_,C,A)}}this.setIndex(o),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Es extends be{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new R,u=new R,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const w=[],S=f/n;let _=0;f===0&&a===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let C=0;C<=e;C++){const A=C/e;d.x=-t*Math.cos(i+A*s)*Math.sin(a+S*o),d.y=t*Math.cos(a+S*o),d.z=t*Math.sin(i+A*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(A+_,1-S),w.push(l++)}h.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const S=h[f][w+1],_=h[f][w],C=h[f+1][w],A=h[f+1][w+1];(f!==0||a>0)&&p.push(S,_,A),(f!==n-1||c<Math.PI)&&p.push(_,C,A)}this.setIndex(p),this.setAttribute("position",new le(g,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class De extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xd extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qd extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jo extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yd extends jo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ma=new ne,Hl=new R,Gl=new R;class eh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xo,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hl),Gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gl),e.updateMatrixWorld(),Ma.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ma,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ma)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Vl=new ne,ms=new R,wa=new R;class jd extends eh{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(ms),wa.copy(n.position),wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wa),n.updateMatrixWorld(),i.makeTranslation(-ms.x,-ms.y,-ms.z),Vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl,n.coordinateSystem,n.reversedDepth)}}class Kd extends jo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class nh extends Yc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zd extends eh{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends jo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new Zd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jd extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const $l=new ne;class Qd{constructor(t,e,n=0,i=1/0){this.ray=new Hr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $l.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($l),this}intersectObject(t,e=!0,n=[]){return Co(t,this,n,e),n.sort(Xl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Co(t[i],this,n,e);return n.sort(Xl),n}}function Xl(r,t){return r.distance-t.distance}function Co(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Co(s[a],t,e,!0)}}function ql(r,t,e,n){const i=tu(n);switch(e){case Fc:return r*t;case Bo:return r*t/i.components*i.byteLength;case zo:return r*t/i.components*i.byteLength;case Bc:return r*t*2/i.components*i.byteLength;case Ho:return r*t*2/i.components*i.byteLength;case Oc:return r*t*3/i.components*i.byteLength;case hn:return r*t*4/i.components*i.byteLength;case Go:return r*t*4/i.components*i.byteLength;case gr:case vr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xr:case _r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Za:case Qa:return Math.max(r,16)*Math.max(t,8)/4;case Ka:case Ja:return Math.max(r,8)*Math.max(t,8)/2;case to:case eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case no:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case so:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ro:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ao:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case oo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case lo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case co:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ho:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case uo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case po:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case mo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case go:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case vo:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case xo:case _o:case yo:return Math.ceil(r/4)*Math.ceil(t/4)*16;case bo:case Mo:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wo:case So:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tu(r){switch(r){case Sn:case Ic:return{byteLength:1,components:1};case bs:case Uc:case Cs:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case gi:case ko:case _n:return{byteLength:4,components:1};case Nc:case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ih(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function eu(r){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const v=d[p];r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ru=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Eu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Au=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ku=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ef=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$f=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Up=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:su,alphamap_pars_fragment:ru,alphatest_fragment:au,alphatest_pars_fragment:ou,aomap_fragment:lu,aomap_pars_fragment:cu,batching_pars_vertex:hu,batching_vertex:du,begin_vertex:uu,beginnormal_vertex:fu,bsdfs:pu,iridescence_fragment:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:vu,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:_u,clipping_planes_vertex:yu,color_fragment:bu,color_pars_fragment:Mu,color_pars_vertex:wu,color_vertex:Su,common:Tu,cube_uv_reflection_fragment:Eu,defaultnormal_vertex:Au,displacementmap_pars_vertex:Cu,displacementmap_vertex:Ru,emissivemap_fragment:Du,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Iu,envmap_fragment:Uu,envmap_common_pars_fragment:Nu,envmap_pars_fragment:ku,envmap_pars_vertex:Fu,envmap_physical_pars_fragment:Yu,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:Hu,fog_pars_fragment:Gu,gradientmap_pars_fragment:Vu,lightmap_pars_fragment:Wu,lights_lambert_fragment:$u,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:ju,lights_toon_pars_fragment:Ku,lights_phong_fragment:Zu,lights_phong_pars_fragment:Ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:tf,lights_fragment_begin:ef,lights_fragment_maps:nf,lights_fragment_end:sf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:lf,map_fragment:cf,map_pars_fragment:hf,map_particle_fragment:df,map_particle_pars_fragment:uf,metalnessmap_fragment:ff,metalnessmap_pars_fragment:pf,morphinstance_vertex:mf,morphcolor_vertex:gf,morphnormal_vertex:vf,morphtarget_pars_vertex:xf,morphtarget_vertex:_f,normal_fragment_begin:yf,normal_fragment_maps:bf,normal_pars_fragment:Mf,normal_pars_vertex:wf,normal_vertex:Sf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Rf,opaque_fragment:Df,packing:Pf,premultiplied_alpha_fragment:Lf,project_vertex:If,dithering_fragment:Uf,dithering_pars_fragment:Nf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Ff,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:Hf,skinbase_vertex:Gf,skinning_pars_vertex:Vf,skinning_vertex:Wf,skinnormal_vertex:$f,specularmap_fragment:Xf,specularmap_pars_fragment:qf,tonemapping_fragment:Yf,tonemapping_pars_fragment:jf,transmission_fragment:Kf,transmission_pars_fragment:Zf,uv_pars_fragment:Jf,uv_pars_vertex:Qf,uv_vertex:tp,worldpos_vertex:ep,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:ap,cube_frag:op,depth_vert:lp,depth_frag:cp,distanceRGBA_vert:hp,distanceRGBA_frag:dp,equirect_vert:up,equirect_frag:fp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:vp,meshlambert_vert:xp,meshlambert_frag:_p,meshmatcap_vert:yp,meshmatcap_frag:bp,meshnormal_vert:Mp,meshnormal_frag:wp,meshphong_vert:Sp,meshphong_frag:Tp,meshphysical_vert:Ep,meshphysical_frag:Ap,meshtoon_vert:Cp,meshtoon_frag:Rp,points_vert:Dp,points_frag:Pp,shadow_vert:Lp,shadow_frag:Ip,sprite_vert:Up,sprite_frag:Np},ht={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},pn={basic:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Be([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Be([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Be([ht.points,ht.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Be([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Be([ht.common,ht.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Be([ht.sprite,ht.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Be([ht.common,ht.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Be([ht.lights,ht.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};pn.physical={uniforms:Be([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const cr={r:0,b:0,g:0},ri=new Tn,kp=new ne;function Fp(r,t,e,n,i,s,a){const o=new Mt(0);let c=s===!0?0:1,l,h,d=null,u=0,p=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function v(S){let _=!1;const C=g(S);C===null?f(o,c):C&&C.isColor&&(f(C,1),_=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,_){const C=g(_);C&&(C.isCubeTexture||C.mapping===zr)?(h===void 0&&(h=new Wt(new Se(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Qi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ri.copy(_.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(ri)),h.material.toneMapped=te.getTransfer(C.colorSpace)!==se,(d!==C||u!==C.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,p=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Wt(new Fn(2,2),new un({name:"BackgroundMaterial",uniforms:Qi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(C.colorSpace)!==se,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,d=C,u=C.version,p=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,_){S.getRGB(cr,qc(r)),n.buffers.color.setClear(cr.r,cr.g,cr.b,_,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(o,c)},render:v,addToRenderList:m,dispose:w}}function Op(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(b,P,k,H,Y){let W=!1;const q=d(H,k,P);s!==q&&(s=q,l(s.object)),W=p(b,H,k,Y),W&&g(b,H,k,Y),Y!==null&&t.update(Y,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(b,P,k,H),Y!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return r.createVertexArray()}function l(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function d(b,P,k){const H=k.wireframe===!0;let Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let W=Y[P.id];W===void 0&&(W={},Y[P.id]=W);let q=W[H];return q===void 0&&(q=u(c()),W[H]=q),q}function u(b){const P=[],k=[],H=[];for(let Y=0;Y<e;Y++)P[Y]=0,k[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:H,object:b,attributes:{},index:null}}function p(b,P,k,H){const Y=s.attributes,W=P.attributes;let q=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){const gt=Y[G];let Rt=W[G];if(Rt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Rt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Rt=b.instanceColor)),gt===void 0||gt.attribute!==Rt||Rt&&gt.data!==Rt.data)return!0;q++}return s.attributesNum!==q||s.index!==H}function g(b,P,k,H){const Y={},W=P.attributes;let q=0;const Z=k.getAttributes();for(const G in Z)if(Z[G].location>=0){let gt=W[G];gt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor));const Rt={};Rt.attribute=gt,gt&&gt.data&&(Rt.data=gt.data),Y[G]=Rt,q++}s.attributes=Y,s.attributesNum=q,s.index=H}function v(){const b=s.newAttributes;for(let P=0,k=b.length;P<k;P++)b[P]=0}function m(b){f(b,0)}function f(b,P){const k=s.newAttributes,H=s.enabledAttributes,Y=s.attributeDivisors;k[b]=1,H[b]===0&&(r.enableVertexAttribArray(b),H[b]=1),Y[b]!==P&&(r.vertexAttribDivisor(b,P),Y[b]=P)}function w(){const b=s.newAttributes,P=s.enabledAttributes;for(let k=0,H=P.length;k<H;k++)P[k]!==b[k]&&(r.disableVertexAttribArray(k),P[k]=0)}function S(b,P,k,H,Y,W,q){q===!0?r.vertexAttribIPointer(b,P,k,Y,W):r.vertexAttribPointer(b,P,k,H,Y,W)}function _(b,P,k,H){v();const Y=H.attributes,W=k.getAttributes(),q=P.defaultAttributeValues;for(const Z in W){const G=W[Z];if(G.location>=0){let ct=Y[Z];if(ct===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(ct=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(ct=b.instanceColor)),ct!==void 0){const gt=ct.normalized,Rt=ct.itemSize,at=t.get(ct);if(at===void 0)continue;const mt=at.buffer,dt=at.type,Dt=at.bytesPerElement,$=dt===r.INT||dt===r.UNSIGNED_INT||ct.gpuType===ko;if(ct.isInterleavedBufferAttribute){const K=ct.data,xt=K.stride,Nt=ct.offset;if(K.isInstancedInterleavedBuffer){for(let Lt=0;Lt<G.locationSize;Lt++)f(G.location+Lt,K.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Lt=0;Lt<G.locationSize;Lt++)m(G.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let Lt=0;Lt<G.locationSize;Lt++)S(G.location+Lt,Rt/G.locationSize,dt,gt,xt*Dt,(Nt+Rt/G.locationSize*Lt)*Dt,$)}else{if(ct.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)f(G.location+K,ct.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let K=0;K<G.locationSize;K++)m(G.location+K);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let K=0;K<G.locationSize;K++)S(G.location+K,Rt/G.locationSize,dt,gt,Rt*Dt,Rt/G.locationSize*K*Dt,$)}}else if(q!==void 0){const gt=q[Z];if(gt!==void 0)switch(gt.length){case 2:r.vertexAttrib2fv(G.location,gt);break;case 3:r.vertexAttrib3fv(G.location,gt);break;case 4:r.vertexAttrib4fv(G.location,gt);break;default:r.vertexAttrib1fv(G.location,gt)}}}}w()}function C(){L();for(const b in n){const P=n[b];for(const k in P){const H=P[k];for(const Y in H)h(H[Y].object),delete H[Y];delete P[k]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const k in P){const H=P[k];for(const Y in H)h(H[Y].object),delete H[Y];delete P[k]}delete n[b.id]}function E(b){for(const P in n){const k=n[P];if(k[b.id]===void 0)continue;const H=k[b.id];for(const Y in H)h(H[Y].object),delete H[Y];delete k[b.id]}}function L(){M(),a=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Bp(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(r.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v]*u[v];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function zp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==hn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===Cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Sn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==_n&&!L)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:C,maxSamples:A}}function Hp(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new $n,o=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{const w=s?0:n,S=w*4;let _=f.clippingState||null;c.value=_,_=h(g,u,S,p);for(let C=0;C!==S;++C)_[C]=e[C];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const f=p+v*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=p;S!==v;++S,_+=4)a.copy(d[S]).applyMatrix4(w,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Gp(r){let t=new WeakMap;function e(a,o){return o===qa?a.mapping=Ki:o===Ya&&(a.mapping=Zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qa||o===Ya)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ld(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Gi=4,Yl=[.125,.215,.35,.446,.526,.582],hi=20,Sa=new nh,jl=new Mt;let Ta=null,Ea=0,Aa=0,Ca=!1;const oi=(1+Math.sqrt(5))/2,Bi=1/oi,Kl=[new R(-oi,Bi,0),new R(oi,Bi,0),new R(-Bi,0,oi),new R(Bi,0,oi),new R(0,oi,-Bi),new R(0,oi,Bi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],Vp=new R;class Zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=Vp}=s;Ta=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Ea,Aa),this._renderer.xr.enabled=Ca,t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Cs,format:hn,colorSpace:Ji,depthBuffer:!1},i=Jl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wp(s)),this._blurMaterial=$p(s,t,e)}return i}_compileMaterial(t){const e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,Sa)}_sceneToCubeUV(t,e,n,i,s){const c=new Je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(jl),d.toneMapping=jn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const v=new Mn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new Wt(new Se,v);let f=!1;const w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,f=!0):(v.color.copy(jl),f=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));const C=this._cubeSize;hr(i,_*C,S>2?C:0,C,C),d.setRenderTarget(i),f&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ki||t.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Kl[(i-s-1)%Kl.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Wt(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let w=0;for(let E=0;E<hi;++E){const L=E/v,M=Math.exp(-L*L/2);f.push(M),E===0?w+=M:E<m&&(w+=2*M)}for(let E=0;E<f.length;E++)f[E]=f[E]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const _=this._sizeLods[i],C=3*_*(i>S-Gi?i-S+Gi:0),A=4*(this._cubeSize-_);hr(e,C,A,3*_,2*_),c.setRenderTarget(e),c.render(d,Sa)}}function Wp(r){const t=[],e=[],n=[];let i=r;const s=r-Gi+1+Yl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-Gi?c=Yl[a-r+Gi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,v=3,m=2,f=1,w=new Float32Array(v*g*p),S=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,L=A>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];w.set(M,v*g*A),S.set(u,m*g*A);const b=[A,A,A,A,A,A];_.set(b,f*g*A)}const C=new be;C.setAttribute("position",new we(w,v)),C.setAttribute("uv",new we(S,m)),C.setAttribute("faceIndex",new we(_,f)),t.push(C),i>Gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Jl(r,t,e){const n=new vi(r,t,e);return n.texture.mapping=zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function $p(r,t,e){const n=new Float32Array(hi),i=new R(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ql(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function tc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Xp(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===qa||c===Ya,h=c===Ki||c===Zi;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Zl(r)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Zl(r)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function qp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yp(r,t,e,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const p=s.get(u);p&&(t.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)t.update(u[p],r.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let S=0,_=w.length;S<_;S+=3){const C=w[S+0],A=w[S+1],E=w[S+2];u.push(C,A,A,E,E,C)}}else if(g!==void 0){const w=g.array;v=g.version;for(let S=0,_=w.length/3-1;S<_;S+=3){const C=S+0,A=S+1,E=S+2;u.push(C,A,A,E,E,C)}}else return;const m=new(Gc(u)?Xc:$c)(u,1);m.version=v;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function jp(r,t,e){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,p){r.drawElements(n,p,s,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(r.drawElementsInstanced(n,p,s,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,u,0,v,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*v[w];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Kp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zp(r,t,e){const n=new WeakMap,i=new ae;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let b=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let C=o.attributes.position.count*_,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const E=new Float32Array(C*A*4*d),L=new Vc(E,C,A,d);L.type=_n,L.needsUpdate=!0;const M=_*4;for(let P=0;P<d;P++){const k=f[P],H=w[P],Y=S[P],W=C*A*4*P;for(let q=0;q<k.count;q++){const Z=q*M;g===!0&&(i.fromBufferAttribute(k,q),E[W+Z+0]=i.x,E[W+Z+1]=i.y,E[W+Z+2]=i.z,E[W+Z+3]=0),v===!0&&(i.fromBufferAttribute(H,q),E[W+Z+4]=i.x,E[W+Z+5]=i.y,E[W+Z+6]=i.z,E[W+Z+7]=0),m===!0&&(i.fromBufferAttribute(Y,q),E[W+Z+8]=i.x,E[W+Z+9]=i.y,E[W+Z+10]=i.z,E[W+Z+11]=Y.itemSize===4?i.w:1)}}u={count:d,texture:L,size:new zt(C,A)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",v),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Jp(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const sh=new Ne,ec=new Qc(1,1),rh=new Vc,ah=new md,oh=new jc,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),ac=new Float32Array(4);function is(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=nc[i];if(s===void 0&&(s=new Float32Array(i),nc[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ee(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ae(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Wr(r,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Qp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function tm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;r.uniform2fv(this.addr,t),Ae(e,t)}}function em(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;r.uniform3fv(this.addr,t),Ae(e,t)}}function nm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;r.uniform4fv(this.addr,t),Ae(e,t)}}function im(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;ac.set(n),r.uniformMatrix2fv(this.addr,!1,ac),Ae(e,n)}}function sm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;rc.set(n),r.uniformMatrix3fv(this.addr,!1,rc),Ae(e,n)}}function rm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Ee(e,n))return;sc.set(n),r.uniformMatrix4fv(this.addr,!1,sc),Ae(e,n)}}function am(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function om(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;r.uniform2iv(this.addr,t),Ae(e,t)}}function lm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;r.uniform3iv(this.addr,t),Ae(e,t)}}function cm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;r.uniform4iv(this.addr,t),Ae(e,t)}}function hm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function dm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;r.uniform2uiv(this.addr,t),Ae(e,t)}}function um(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;r.uniform3uiv(this.addr,t),Ae(e,t)}}function fm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;r.uniform4uiv(this.addr,t),Ae(e,t)}}function pm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ec.compareFunction=Hc,s=ec):s=sh,e.setTexture2D(t||s,i)}function mm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ah,i)}function gm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||oh,i)}function vm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rh,i)}function xm(r){switch(r){case 5126:return Qp;case 35664:return tm;case 35665:return em;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return hm;case 36294:return dm;case 36295:return um;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return vm}}function _m(r,t){r.uniform1fv(this.addr,t)}function ym(r,t){const e=is(t,this.size,2);r.uniform2fv(this.addr,e)}function bm(r,t){const e=is(t,this.size,3);r.uniform3fv(this.addr,e)}function Mm(r,t){const e=is(t,this.size,4);r.uniform4fv(this.addr,e)}function wm(r,t){const e=is(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Sm(r,t){const e=is(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Tm(r,t){const e=is(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Em(r,t){r.uniform1iv(this.addr,t)}function Am(r,t){r.uniform2iv(this.addr,t)}function Cm(r,t){r.uniform3iv(this.addr,t)}function Rm(r,t){r.uniform4iv(this.addr,t)}function Dm(r,t){r.uniform1uiv(this.addr,t)}function Pm(r,t){r.uniform2uiv(this.addr,t)}function Lm(r,t){r.uniform3uiv(this.addr,t)}function Im(r,t){r.uniform4uiv(this.addr,t)}function Um(r,t,e){const n=this.cache,i=t.length,s=Wr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||sh,s[a])}function Nm(r,t,e){const n=this.cache,i=t.length,s=Wr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ah,s[a])}function km(r,t,e){const n=this.cache,i=t.length,s=Wr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||oh,s[a])}function Fm(r,t,e){const n=this.cache,i=t.length,s=Wr(e,i);Ee(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||rh,s[a])}function Om(r){switch(r){case 5126:return _m;case 35664:return ym;case 35665:return bm;case 35666:return Mm;case 35674:return wm;case 35675:return Sm;case 35676:return Tm;case 5124:case 35670:return Em;case 35667:case 35671:return Am;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Dm;case 36294:return Pm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Fm}}class Bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=xm(e.type)}}class zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Om(e.type)}}class Hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function oc(r,t){r.seq.push(t),r.map[t.id]=t}function Gm(r,t,e){const n=r.name,i=n.length;for(Ra.lastIndex=0;;){const s=Ra.exec(n),a=Ra.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){oc(e,l===void 0?new Bm(o,r,t):new zm(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Hm(o),oc(e,d)),e=d}}}class br{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Gm(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function lc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Vm=37297;let Wm=0;function $m(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const cc=new Xt;function Xm(r){te._getMatrix(cc,te.workingColorSpace,r);const t=`mat3( ${cc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(r)){case Rr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hc(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+$m(r.getShaderSource(t),o)}else return s}function qm(r,t){const e=Xm(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ym(r,t){let e;switch(t){case Wh:e="Linear";break;case $h:e="Reinhard";break;case Xh:e="Cineon";break;case Pc:e="ACESFilmic";break;case Yh:e="AgX";break;case jh:e="Neutral";break;case qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new R;function jm(){te.getLuminanceCoefficients(dr);const r=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xs).join(`
`)}function Zm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jm(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function xs(r){return r!==""}function dc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(r){return r.replace(Qm,e0)}const t0=new Map;function e0(r,t){let e=Yt[t];if(e===void 0){const n=t0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ro(e)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(r){return r.replace(n0,i0)}function i0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function s0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function r0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ki:case Zi:t="ENVMAP_TYPE_CUBE";break;case zr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Zi:t="ENVMAP_MODE_REFRACTION";break}return t}function o0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Gh:t="ENVMAP_BLENDING_MIX";break;case Vh:t="ENVMAP_BLENDING_ADD";break}return t}function l0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function c0(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=s0(e),l=r0(e),h=a0(e),d=o0(e),u=l0(e),p=Km(e),g=Zm(s),v=i.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xs).join(`
`),f.length>0&&(f+=`
`)):(m=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),f=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==jn?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),a=Ro(a),a=dc(a,e),a=uc(a,e),o=Ro(o),o=dc(o,e),o=uc(o,e),a=fc(a),o=fc(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=w+m+a,_=w+f+o,C=lc(i,i.VERTEX_SHADER,S),A=lc(i,i.FRAGMENT_SHADER,_);i.attachShader(v,C),i.attachShader(v,A),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(P){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(v)||"",H=i.getShaderInfoLog(C)||"",Y=i.getShaderInfoLog(A)||"",W=k.trim(),q=H.trim(),Z=Y.trim();let G=!0,ct=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,C,A);else{const gt=hc(i,C,"vertex"),Rt=hc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+gt+`
`+Rt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||Z==="")&&(ct=!1);ct&&(P.diagnostics={runnable:G,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:Z,prefix:f}})}i.deleteShader(C),i.deleteShader(A),L=new br(i,v),M=Jm(i,v)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(v,Vm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let h0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new u0(t),e.set(t,n)),n}}class u0{constructor(t){this.id=h0++,this.code=t,this.usedTimes=0}}function f0(r,t,e,n,i,s,a){const o=new Wo,c=new d0,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,P,k,H){const Y=k.fog,W=H.geometry,q=M.isMeshStandardMaterial?k.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),G=Z&&Z.mapping===zr?Z.image.height:null,ct=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Rt=gt!==void 0?gt.length:0;let at=0;W.morphAttributes.position!==void 0&&(at=1),W.morphAttributes.normal!==void 0&&(at=2),W.morphAttributes.color!==void 0&&(at=3);let mt,dt,Dt,$;if(ct){const ee=pn[ct];mt=ee.vertexShader,dt=ee.fragmentShader}else mt=M.vertexShader,dt=M.fragmentShader,c.update(M),Dt=c.getVertexShaderID(M),$=c.getFragmentShaderID(M);const K=r.getRenderTarget(),xt=r.state.buffers.depth.getReversed(),Nt=H.isInstancedMesh===!0,Lt=H.isBatchedMesh===!0,Jt=!!M.map,Pe=!!M.matcap,D=!!Z,fe=!!M.aoMap,Vt=!!M.lightMap,Ot=!!M.bumpMap,St=!!M.normalMap,pe=!!M.displacementMap,Tt=!!M.emissiveMap,qt=!!M.metalnessMap,Ce=!!M.roughnessMap,ye=M.anisotropy>0,T=M.clearcoat>0,x=M.dispersion>0,F=M.iridescence>0,X=M.sheen>0,J=M.transmission>0,V=ye&&!!M.anisotropyMap,Pt=T&&!!M.clearcoatMap,ot=T&&!!M.clearcoatNormalMap,Et=T&&!!M.clearcoatRoughnessMap,At=F&&!!M.iridescenceMap,it=F&&!!M.iridescenceThicknessMap,pt=X&&!!M.sheenColorMap,Ft=X&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,ut=!!M.specularColorMap,$t=!!M.specularIntensityMap,I=J&&!!M.transmissionMap,st=J&&!!M.thicknessMap,lt=!!M.gradientMap,_t=!!M.alphaMap,et=M.alphaTest>0,j=!!M.alphaHash,wt=!!M.extensions;let Ht=jn;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ht=r.toneMapping);const ce={shaderID:ct,shaderType:M.type,shaderName:M.name,vertexShader:mt,fragmentShader:dt,defines:M.defines,customVertexShaderID:Dt,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&H._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&H.instanceColor!==null,instancingMorph:Nt&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ji,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:Pe,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:G,aoMap:fe,lightMap:Vt,bumpMap:Ot,normalMap:St,displacementMap:u&&pe,emissiveMap:Tt,normalMapObjectSpace:St&&M.normalMapType===Qh,normalMapTangentSpace:St&&M.normalMapType===zc,metalnessMap:qt,roughnessMap:Ce,anisotropy:ye,anisotropyMap:V,clearcoat:T,clearcoatMap:Pt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,dispersion:x,iridescence:F,iridescenceMap:At,iridescenceThicknessMap:it,sheen:X,sheenColorMap:pt,sheenRoughnessMap:Ft,specularMap:Ct,specularColorMap:ut,specularIntensityMap:$t,transmission:J,transmissionMap:I,thicknessMap:st,gradientMap:lt,opaque:M.transparent===!1&&M.blending===Wi&&M.alphaToCoverage===!1,alphaMap:_t,alphaTest:et,alphaHash:j,combine:M.combine,mapUv:Jt&&v(M.map.channel),aoMapUv:fe&&v(M.aoMap.channel),lightMapUv:Vt&&v(M.lightMap.channel),bumpMapUv:Ot&&v(M.bumpMap.channel),normalMapUv:St&&v(M.normalMap.channel),displacementMapUv:pe&&v(M.displacementMap.channel),emissiveMapUv:Tt&&v(M.emissiveMap.channel),metalnessMapUv:qt&&v(M.metalnessMap.channel),roughnessMapUv:Ce&&v(M.roughnessMap.channel),anisotropyMapUv:V&&v(M.anisotropyMap.channel),clearcoatMapUv:Pt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:ot&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(M.sheenRoughnessMap.channel),specularMapUv:Ct&&v(M.specularMap.channel),specularColorMapUv:ut&&v(M.specularColorMap.channel),specularIntensityMapUv:$t&&v(M.specularIntensityMap.channel),transmissionMapUv:I&&v(M.transmissionMap.channel),thicknessMapUv:st&&v(M.thicknessMap.channel),alphaMapUv:_t&&v(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(St||ye),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(Jt||_t),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:at,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===se,decodeVideoTextureEmissive:Tt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===se,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===Ge,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:wt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&M.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(w(b,M),S(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function w(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function S(M,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const b=g[M.type];let P;if(b){const k=pn[b];P=Cd.clone(k.uniforms)}else P=M.uniforms;return P}function C(M,b){let P;for(let k=0,H=h.length;k<H;k++){const Y=h[k];if(Y.cacheKey===b){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new c0(r,b,M,s),h.push(P)),P}function A(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:C,releaseProgram:A,releaseShaderCache:E,programs:h,dispose:L}}function p0(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function m0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function mc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function gc(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,p,g,v,m){let f=r[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},r[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function o(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,v,m){const f=a(d,u,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||m0),n.length>1&&n.sort(u||mc),i.length>1&&i.sort(u||mc)}function h(){for(let d=t,u=r.length;d<u;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function g0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new gc,r.set(n,[a])):i>=s.length?(a=new gc,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function v0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Mt};break;case"SpotLight":e={position:new R,direction:new R,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new R,halfWidth:new R,halfHeight:new R};break}return r[t.id]=e,e}}}function x0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let _0=0;function y0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function b0(r){const t=new v0,e=x0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,s=new ne,a=new ne;function o(l){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,w=0,S=0,_=0,C=0,A=0,E=0;l.sort(y0);for(let M=0,b=l.length;M<b;M++){const P=l[M],k=P.color,H=P.intensity,Y=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=k.r*H,d+=k.g*H,u+=k.b*H;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],H);E++}else if(P.isDirectionalLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=q,p++}else if(P.isSpotLight){const q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(k).multiplyScalar(H),q.distance=Y,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[v]=q;const Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[v]=Z.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=W,_++}v++}else if(P.isRectAreaLight){const q=t.get(P);q.color.copy(k).multiplyScalar(H),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=q,g++}else if(P.isHemisphereLight){const q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(H),q.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[f]=q,f++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==w||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==C||L.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=E,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=w,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=C,L.numLightProbes=E,n.version=_0++)}function c(l,h){let d=0,u=0,p=0,g=0,v=0;const m=h.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){const S=l[f];if(S.isDirectionalLight){const _=n.directional[d];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),d++}else if(S.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function vc(r){const t=new b0(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function M0(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new vc(r),t.set(i,[o])):s>=a.length?(o=new vc(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const w0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T0(r,t,e){let n=new Xo;const i=new zt,s=new zt,a=new ae,o=new Xd({depthPacking:Jh}),c=new qd,l={},h=e.maxTextureSize,d={[wn]:Ge,[Ge]:wn,[He]:He},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:w0,fragmentShader:S0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new be;g.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let f=this.type;this.render=function(A,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Yn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=f!==In&&this.type===In,Y=f===In&&this.type!==In;for(let W=0,q=A.length;W<q;W++){const Z=A[W],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ct=G.getFrameExtents();if(i.multiply(ct),s.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ct.x),i.x=s.x*ct.x,G.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ct.y),i.y=s.y*ct.y,G.mapSize.y=s.y)),G.map===null||H===!0||Y===!0){const Rt=this.type!==In?{minFilter:tn,magFilter:tn}:{};G.map!==null&&G.map.dispose(),G.map=new vi(i.x,i.y,Rt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const gt=G.getViewportCount();for(let Rt=0;Rt<gt;Rt++){const at=G.getViewport(Rt);a.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),k.viewport(a),G.updateMatrices(Z,Rt),n=G.getFrustum(),_(E,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===In&&w(G,L),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(M,b,P)};function w(A,E){const L=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(E,null,L,u,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(E,null,L,p,v,null)}function S(A,E,L,M){let b=null;const P=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=L.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const k=b.uuid,H=E.uuid;let Y=l[k];Y===void 0&&(Y={},l[k]=Y);let W=Y[H];W===void 0&&(W=b.clone(),Y[H]=W,E.addEventListener("dispose",C)),b=W}if(b.visible=E.visible,b.wireframe=E.wireframe,M===In?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:d[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=r.properties.get(b);k.light=L}return b}function _(A,E,L,M,b){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===In)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=t.update(A),Y=A.material;if(Array.isArray(Y)){const W=H.groups;for(let q=0,Z=W.length;q<Z;q++){const G=W[q],ct=Y[G.materialIndex];if(ct&&ct.visible){const gt=S(A,ct,M,b);A.onBeforeShadow(r,A,E,L,H,gt,G),r.renderBufferDirect(L,null,H,gt,A,G),A.onAfterShadow(r,A,E,L,H,gt,G)}}}else if(Y.visible){const W=S(A,Y,M,b);A.onBeforeShadow(r,A,E,L,H,W,null),r.renderBufferDirect(L,null,H,W,A,null),A.onAfterShadow(r,A,E,L,H,W,null)}}const k=A.children;for(let H=0,Y=k.length;H<Y;H++)_(k[H],E,L,M,b)}function C(A){A.target.removeEventListener("dispose",C);for(const L in l){const M=l[L],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const E0={[za]:Ha,[Ga]:$a,[Va]:Xa,[ji]:Wa,[Ha]:za,[$a]:Ga,[Xa]:Va,[Wa]:ji};function A0(r,t){function e(){let I=!1;const st=new ae;let lt=null;const _t=new ae(0,0,0,0);return{setMask:function(et){lt!==et&&!I&&(r.colorMask(et,et,et,et),lt=et)},setLocked:function(et){I=et},setClear:function(et,j,wt,Ht,ce){ce===!0&&(et*=Ht,j*=Ht,wt*=Ht),st.set(et,j,wt,Ht),_t.equals(st)===!1&&(r.clearColor(et,j,wt,Ht),_t.copy(st))},reset:function(){I=!1,lt=null,_t.set(-1,0,0,0)}}}function n(){let I=!1,st=!1,lt=null,_t=null,et=null;return{setReversed:function(j){if(st!==j){const wt=t.get("EXT_clip_control");j?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),st=j;const Ht=et;et=null,this.setClear(Ht)}},getReversed:function(){return st},setTest:function(j){j?K(r.DEPTH_TEST):xt(r.DEPTH_TEST)},setMask:function(j){lt!==j&&!I&&(r.depthMask(j),lt=j)},setFunc:function(j){if(st&&(j=E0[j]),_t!==j){switch(j){case za:r.depthFunc(r.NEVER);break;case Ha:r.depthFunc(r.ALWAYS);break;case Ga:r.depthFunc(r.LESS);break;case ji:r.depthFunc(r.LEQUAL);break;case Va:r.depthFunc(r.EQUAL);break;case Wa:r.depthFunc(r.GEQUAL);break;case $a:r.depthFunc(r.GREATER);break;case Xa:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=j}},setLocked:function(j){I=j},setClear:function(j){et!==j&&(st&&(j=1-j),r.clearDepth(j),et=j)},reset:function(){I=!1,lt=null,_t=null,et=null,st=!1}}}function i(){let I=!1,st=null,lt=null,_t=null,et=null,j=null,wt=null,Ht=null,ce=null;return{setTest:function(ee){I||(ee?K(r.STENCIL_TEST):xt(r.STENCIL_TEST))},setMask:function(ee){st!==ee&&!I&&(r.stencilMask(ee),st=ee)},setFunc:function(ee,An,fn){(lt!==ee||_t!==An||et!==fn)&&(r.stencilFunc(ee,An,fn),lt=ee,_t=An,et=fn)},setOp:function(ee,An,fn){(j!==ee||wt!==An||Ht!==fn)&&(r.stencilOp(ee,An,fn),j=ee,wt=An,Ht=fn)},setLocked:function(ee){I=ee},setClear:function(ee){ce!==ee&&(r.clearStencil(ee),ce=ee)},reset:function(){I=!1,st=null,lt=null,_t=null,et=null,j=null,wt=null,Ht=null,ce=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,S=null,_=null,C=null,A=null,E=new Mt(0,0,0),L=0,M=!1,b=null,P=null,k=null,H=null,Y=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Z=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=Z>=2);let ct=null,gt={};const Rt=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),mt=new ae().fromArray(Rt),dt=new ae().fromArray(at);function Dt(I,st,lt,_t){const et=new Uint8Array(4),j=r.createTexture();r.bindTexture(I,j),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let wt=0;wt<lt;wt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(st,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,et):r.texImage2D(st+wt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,et);return j}const $={};$[r.TEXTURE_2D]=Dt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(r.DEPTH_TEST),a.setFunc(ji),Ot(!1),St(ol),K(r.CULL_FACE),fe(Yn);function K(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function xt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function Nt(I,st){return d[I]!==st?(r.bindFramebuffer(I,st),d[I]=st,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=st),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=st),!0):!1}function Lt(I,st){let lt=p,_t=!1;if(I){lt=u.get(st),lt===void 0&&(lt=[],u.set(st,lt));const et=I.textures;if(lt.length!==et.length||lt[0]!==r.COLOR_ATTACHMENT0){for(let j=0,wt=et.length;j<wt;j++)lt[j]=r.COLOR_ATTACHMENT0+j;lt.length=et.length,_t=!0}}else lt[0]!==r.BACK&&(lt[0]=r.BACK,_t=!0);_t&&r.drawBuffers(lt)}function Jt(I){return g!==I?(r.useProgram(I),g=I,!0):!1}const Pe={[ci]:r.FUNC_ADD,[Th]:r.FUNC_SUBTRACT,[Eh]:r.FUNC_REVERSE_SUBTRACT};Pe[Ah]=r.MIN,Pe[Ch]=r.MAX;const D={[Rh]:r.ZERO,[Dh]:r.ONE,[Ph]:r.SRC_COLOR,[Oa]:r.SRC_ALPHA,[Fh]:r.SRC_ALPHA_SATURATE,[Nh]:r.DST_COLOR,[Ih]:r.DST_ALPHA,[Lh]:r.ONE_MINUS_SRC_COLOR,[Ba]:r.ONE_MINUS_SRC_ALPHA,[kh]:r.ONE_MINUS_DST_COLOR,[Uh]:r.ONE_MINUS_DST_ALPHA,[Oh]:r.CONSTANT_COLOR,[Bh]:r.ONE_MINUS_CONSTANT_COLOR,[zh]:r.CONSTANT_ALPHA,[Hh]:r.ONE_MINUS_CONSTANT_ALPHA};function fe(I,st,lt,_t,et,j,wt,Ht,ce,ee){if(I===Yn){v===!0&&(xt(r.BLEND),v=!1);return}if(v===!1&&(K(r.BLEND),v=!0),I!==Sh){if(I!==m||ee!==M){if((f!==ci||_!==ci)&&(r.blendEquation(r.FUNC_ADD),f=ci,_=ci),ee)switch(I){case Wi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ll:r.blendFunc(r.ONE,r.ONE);break;case cl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ll:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case cl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,S=null,C=null,A=null,E.set(0,0,0),L=0,m=I,M=ee}return}et=et||st,j=j||lt,wt=wt||_t,(st!==f||et!==_)&&(r.blendEquationSeparate(Pe[st],Pe[et]),f=st,_=et),(lt!==w||_t!==S||j!==C||wt!==A)&&(r.blendFuncSeparate(D[lt],D[_t],D[j],D[wt]),w=lt,S=_t,C=j,A=wt),(Ht.equals(E)===!1||ce!==L)&&(r.blendColor(Ht.r,Ht.g,Ht.b,ce),E.copy(Ht),L=ce),m=I,M=!1}function Vt(I,st){I.side===He?xt(r.CULL_FACE):K(r.CULL_FACE);let lt=I.side===Ge;st&&(lt=!lt),Ot(lt),I.blending===Wi&&I.transparent===!1?fe(Yn):fe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const _t=I.stencilWrite;o.setTest(_t),_t&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):xt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(I){b!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),b=I)}function St(I){I!==Mh?(K(r.CULL_FACE),I!==P&&(I===ol?r.cullFace(r.BACK):I===wh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xt(r.CULL_FACE),P=I}function pe(I){I!==k&&(q&&r.lineWidth(I),k=I)}function Tt(I,st,lt){I?(K(r.POLYGON_OFFSET_FILL),(H!==st||Y!==lt)&&(r.polygonOffset(st,lt),H=st,Y=lt)):xt(r.POLYGON_OFFSET_FILL)}function qt(I){I?K(r.SCISSOR_TEST):xt(r.SCISSOR_TEST)}function Ce(I){I===void 0&&(I=r.TEXTURE0+W-1),ct!==I&&(r.activeTexture(I),ct=I)}function ye(I,st,lt){lt===void 0&&(ct===null?lt=r.TEXTURE0+W-1:lt=ct);let _t=gt[lt];_t===void 0&&(_t={type:void 0,texture:void 0},gt[lt]=_t),(_t.type!==I||_t.texture!==st)&&(ct!==lt&&(r.activeTexture(lt),ct=lt),r.bindTexture(I,st||$[I]),_t.type=I,_t.texture=st)}function T(){const I=gt[ct];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(I){mt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function Ft(I){dt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),dt.copy(I))}function Ct(I,st){let lt=l.get(st);lt===void 0&&(lt=new WeakMap,l.set(st,lt));let _t=lt.get(I);_t===void 0&&(_t=r.getUniformBlockIndex(st,I.name),lt.set(I,_t))}function ut(I,st){const _t=l.get(st).get(I);c.get(st)!==_t&&(r.uniformBlockBinding(st,_t,I.__bindingPointIndex),c.set(st,_t))}function $t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ct=null,gt={},d={},u=new WeakMap,p=[],g=null,v=!1,m=null,f=null,w=null,S=null,_=null,C=null,A=null,E=new Mt(0,0,0),L=0,M=!1,b=null,P=null,k=null,H=null,Y=null,mt.set(0,0,r.canvas.width,r.canvas.height),dt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:xt,bindFramebuffer:Nt,drawBuffers:Lt,useProgram:Jt,setBlending:fe,setMaterial:Vt,setFlipSided:Ot,setCullFace:St,setLineWidth:pe,setPolygonOffset:Tt,setScissorTest:qt,activeTexture:Ce,bindTexture:ye,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:At,texImage3D:it,updateUBOMapping:Ct,uniformBlockBinding:ut,texStorage2D:ot,texStorage3D:Et,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:V,compressedTexSubImage3D:Pt,scissor:pt,viewport:Ft,reset:$t}}function C0(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new zt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):Lr("canvas")}function v(T,x,F){let X=1;const J=ye(T);if((J.width>F||J.height>F)&&(X=F/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(X*J.width),Pt=Math.floor(X*J.height);d===void 0&&(d=g(V,Pt));const ot=x?g(V,Pt):d;return ot.width=V,ot.height=Pt,ot.getContext("2d").drawImage(T,0,0,V,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+Pt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){r.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?r.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(T,x,F,X,J=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=x;if(x===r.RED&&(F===r.FLOAT&&(V=r.R32F),F===r.HALF_FLOAT&&(V=r.R16F),F===r.UNSIGNED_BYTE&&(V=r.R8)),x===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(V=r.R8UI),F===r.UNSIGNED_SHORT&&(V=r.R16UI),F===r.UNSIGNED_INT&&(V=r.R32UI),F===r.BYTE&&(V=r.R8I),F===r.SHORT&&(V=r.R16I),F===r.INT&&(V=r.R32I)),x===r.RG&&(F===r.FLOAT&&(V=r.RG32F),F===r.HALF_FLOAT&&(V=r.RG16F),F===r.UNSIGNED_BYTE&&(V=r.RG8)),x===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(V=r.RG8UI),F===r.UNSIGNED_SHORT&&(V=r.RG16UI),F===r.UNSIGNED_INT&&(V=r.RG32UI),F===r.BYTE&&(V=r.RG8I),F===r.SHORT&&(V=r.RG16I),F===r.INT&&(V=r.RG32I)),x===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(V=r.RGB8UI),F===r.UNSIGNED_SHORT&&(V=r.RGB16UI),F===r.UNSIGNED_INT&&(V=r.RGB32UI),F===r.BYTE&&(V=r.RGB8I),F===r.SHORT&&(V=r.RGB16I),F===r.INT&&(V=r.RGB32I)),x===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(V=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(V=r.RGBA16UI),F===r.UNSIGNED_INT&&(V=r.RGBA32UI),F===r.BYTE&&(V=r.RGBA8I),F===r.SHORT&&(V=r.RGBA16I),F===r.INT&&(V=r.RGBA32I)),x===r.RGB&&(F===r.UNSIGNED_INT_5_9_9_9_REV&&(V=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(V=r.R11F_G11F_B10F)),x===r.RGBA){const Pt=J?Rr:te.getTransfer(X);F===r.FLOAT&&(V=r.RGBA32F),F===r.HALF_FLOAT&&(V=r.RGBA16F),F===r.UNSIGNED_BYTE&&(V=Pt===se?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)}return(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function _(T,x){let F;return T?x===null||x===gi||x===Ms?F=r.DEPTH24_STENCIL8:x===_n?F=r.DEPTH32F_STENCIL8:x===bs&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gi||x===Ms?F=r.DEPTH_COMPONENT24:x===_n?F=r.DEPTH_COMPONENT32F:x===bs&&(F=r.DEPTH_COMPONENT16),F}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==xn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),L(x),x.isVideoTexture&&h.delete(x)}function E(T){const x=T.target;x.removeEventListener("dispose",E),b(x)}function L(T){const x=n.get(T);if(x.__webglInit===void 0)return;const F=T.source,X=u.get(F);if(X){const J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(T),Object.keys(X).length===0&&u.delete(F)}n.remove(T)}function M(T){const x=n.get(T);r.deleteTexture(x.__webglTexture);const F=T.source,X=u.get(F);delete X[x.__cacheKey],a.memory.textures--}function b(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)r.deleteFramebuffer(x.__webglFramebuffer[X][J]);else r.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)r.deleteFramebuffer(x.__webglFramebuffer[X]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let X=0,J=F.length;X<J;X++){const V=n.get(F[X]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(F[X])}n.remove(T)}let P=0;function k(){P=0}function H(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function Y(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function W(T,x){const F=n.get(T);if(T.isVideoTexture&&qt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,T,x);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+x)}function q(T,x){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){$(F,T,x);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+x)}function Z(T,x){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){$(F,T,x);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+x)}function G(T,x){const F=n.get(T);if(T.version>0&&F.__version!==T.version){K(F,T,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+x)}const ct={[Cr]:r.REPEAT,[ui]:r.CLAMP_TO_EDGE,[ja]:r.MIRRORED_REPEAT},gt={[tn]:r.NEAREST,[Kh]:r.NEAREST_MIPMAP_NEAREST,[Us]:r.NEAREST_MIPMAP_LINEAR,[xn]:r.LINEAR,[jr]:r.LINEAR_MIPMAP_NEAREST,[fi]:r.LINEAR_MIPMAP_LINEAR},Rt={[td]:r.NEVER,[ad]:r.ALWAYS,[ed]:r.LESS,[Hc]:r.LEQUAL,[nd]:r.EQUAL,[rd]:r.GEQUAL,[id]:r.GREATER,[sd]:r.NOTEQUAL};function at(T,x){if(x.type===_n&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===xn||x.magFilter===jr||x.magFilter===Us||x.magFilter===fi||x.minFilter===xn||x.minFilter===jr||x.minFilter===Us||x.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,ct[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,ct[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,ct[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,gt[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==Us&&x.minFilter!==fi||x.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function mt(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const X=x.source;let J=u.get(X);J===void 0&&(J={},u.set(X,J));const V=Y(x);if(V!==T.__cacheKey){J[V]===void 0&&(J[V]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[V].usedTimes++;const Pt=J[T.__cacheKey];Pt!==void 0&&(J[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&M(x)),T.__cacheKey=V,T.__webglTexture=J[V].texture}return F}function dt(T,x,F){return Math.floor(Math.floor(T/F)/x)}function Dt(T,x,F,X){const V=T.updateRanges;if(V.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,F,X,x.data);else{V.sort((it,pt)=>it.start-pt.start);let Pt=0;for(let it=1;it<V.length;it++){const pt=V[Pt],Ft=V[it],Ct=pt.start+pt.count,ut=dt(Ft.start,x.width,4),$t=dt(pt.start,x.width,4);Ft.start<=Ct+1&&ut===$t&&dt(Ft.start+Ft.count-1,x.width,4)===ut?pt.count=Math.max(pt.count,Ft.start+Ft.count-pt.start):(++Pt,V[Pt]=Ft)}V.length=Pt+1;const ot=r.getParameter(r.UNPACK_ROW_LENGTH),Et=r.getParameter(r.UNPACK_SKIP_PIXELS),At=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let it=0,pt=V.length;it<pt;it++){const Ft=V[it],Ct=Math.floor(Ft.start/4),ut=Math.ceil(Ft.count/4),$t=Ct%x.width,I=Math.floor(Ct/x.width),st=ut,lt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,$t),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),e.texSubImage2D(r.TEXTURE_2D,0,$t,I,st,lt,F,X,x.data)}T.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Et),r.pixelStorei(r.UNPACK_SKIP_ROWS,At)}}function $(T,x,F){let X=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=r.TEXTURE_3D);const J=mt(T,x),V=x.source;e.bindTexture(X,T.__webglTexture,r.TEXTURE0+F);const Pt=n.get(V);if(V.version!==Pt.__version||J===!0){e.activeTexture(r.TEXTURE0+F);const ot=te.getPrimaries(te.workingColorSpace),Et=x.colorSpace===Xn?null:te.getPrimaries(x.colorSpace),At=x.colorSpace===Xn||ot===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let it=v(x.image,!1,i.maxTextureSize);it=Ce(x,it);const pt=s.convert(x.format,x.colorSpace),Ft=s.convert(x.type);let Ct=S(x.internalFormat,pt,Ft,x.colorSpace,x.isVideoTexture);at(X,x);let ut;const $t=x.mipmaps,I=x.isVideoTexture!==!0,st=Pt.__version===void 0||J===!0,lt=V.dataReady,_t=C(x,it);if(x.isDepthTexture)Ct=_(x.format===Ss,x.type),st&&(I?e.texStorage2D(r.TEXTURE_2D,1,Ct,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,Ct,it.width,it.height,0,pt,Ft,null));else if(x.isDataTexture)if($t.length>0){I&&st&&e.texStorage2D(r.TEXTURE_2D,_t,Ct,$t[0].width,$t[0].height);for(let et=0,j=$t.length;et<j;et++)ut=$t[et],I?lt&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,Ft,ut.data):e.texImage2D(r.TEXTURE_2D,et,Ct,ut.width,ut.height,0,pt,Ft,ut.data);x.generateMipmaps=!1}else I?(st&&e.texStorage2D(r.TEXTURE_2D,_t,Ct,it.width,it.height),lt&&Dt(x,it,pt,Ft)):e.texImage2D(r.TEXTURE_2D,0,Ct,it.width,it.height,0,pt,Ft,it.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&st&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Ct,$t[0].width,$t[0].height,it.depth);for(let et=0,j=$t.length;et<j;et++)if(ut=$t[et],x.format!==hn)if(pt!==null)if(I){if(lt)if(x.layerUpdates.size>0){const wt=ql(ut.width,ut.height,x.format,x.type);for(const Ht of x.layerUpdates){const ce=ut.data.subarray(Ht*wt/ut.data.BYTES_PER_ELEMENT,(Ht+1)*wt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,Ht,ut.width,ut.height,1,pt,ce)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,it.depth,pt,ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,Ct,ut.width,ut.height,it.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?lt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,it.depth,pt,Ft,ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,Ct,ut.width,ut.height,it.depth,0,pt,Ft,ut.data)}else{I&&st&&e.texStorage2D(r.TEXTURE_2D,_t,Ct,$t[0].width,$t[0].height);for(let et=0,j=$t.length;et<j;et++)ut=$t[et],x.format!==hn?pt!==null?I?lt&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,ut.data):e.compressedTexImage2D(r.TEXTURE_2D,et,Ct,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?lt&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ut.width,ut.height,pt,Ft,ut.data):e.texImage2D(r.TEXTURE_2D,et,Ct,ut.width,ut.height,0,pt,Ft,ut.data)}else if(x.isDataArrayTexture)if(I){if(st&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Ct,it.width,it.height,it.depth),lt)if(x.layerUpdates.size>0){const et=ql(it.width,it.height,x.format,x.type);for(const j of x.layerUpdates){const wt=it.data.subarray(j*et/it.data.BYTES_PER_ELEMENT,(j+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,pt,Ft,wt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,Ft,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,it.width,it.height,it.depth,0,pt,Ft,it.data);else if(x.isData3DTexture)I?(st&&e.texStorage3D(r.TEXTURE_3D,_t,Ct,it.width,it.height,it.depth),lt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,Ft,it.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,it.width,it.height,it.depth,0,pt,Ft,it.data);else if(x.isFramebufferTexture){if(st)if(I)e.texStorage2D(r.TEXTURE_2D,_t,Ct,it.width,it.height);else{let et=it.width,j=it.height;for(let wt=0;wt<_t;wt++)e.texImage2D(r.TEXTURE_2D,wt,Ct,et,j,0,pt,Ft,null),et>>=1,j>>=1}}else if($t.length>0){if(I&&st){const et=ye($t[0]);e.texStorage2D(r.TEXTURE_2D,_t,Ct,et.width,et.height)}for(let et=0,j=$t.length;et<j;et++)ut=$t[et],I?lt&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,pt,Ft,ut):e.texImage2D(r.TEXTURE_2D,et,Ct,pt,Ft,ut);x.generateMipmaps=!1}else if(I){if(st){const et=ye(it);e.texStorage2D(r.TEXTURE_2D,_t,Ct,et.width,et.height)}lt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,Ft,it)}else e.texImage2D(r.TEXTURE_2D,0,Ct,pt,Ft,it);m(x)&&f(X),Pt.__version=V.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function K(T,x,F){if(x.image.length!==6)return;const X=mt(T,x),J=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+F);const V=n.get(J);if(J.version!==V.__version||X===!0){e.activeTexture(r.TEXTURE0+F);const Pt=te.getPrimaries(te.workingColorSpace),ot=x.colorSpace===Xn?null:te.getPrimaries(x.colorSpace),Et=x.colorSpace===Xn||Pt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const At=x.isCompressedTexture||x.image[0].isCompressedTexture,it=x.image[0]&&x.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!At&&!it?pt[j]=v(x.image[j],!0,i.maxCubemapSize):pt[j]=it?x.image[j].image:x.image[j],pt[j]=Ce(x,pt[j]);const Ft=pt[0],Ct=s.convert(x.format,x.colorSpace),ut=s.convert(x.type),$t=S(x.internalFormat,Ct,ut,x.colorSpace),I=x.isVideoTexture!==!0,st=V.__version===void 0||X===!0,lt=J.dataReady;let _t=C(x,Ft);at(r.TEXTURE_CUBE_MAP,x);let et;if(At){I&&st&&e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,$t,Ft.width,Ft.height);for(let j=0;j<6;j++){et=pt[j].mipmaps;for(let wt=0;wt<et.length;wt++){const Ht=et[wt];x.format!==hn?Ct!==null?I?lt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,Ht.width,Ht.height,Ct,Ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,$t,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,0,0,Ht.width,Ht.height,Ct,ut,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt,$t,Ht.width,Ht.height,0,Ct,ut,Ht.data)}}}else{if(et=x.mipmaps,I&&st){et.length>0&&_t++;const j=ye(pt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,_t,$t,j.width,j.height)}for(let j=0;j<6;j++)if(it){I?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,Ct,ut,pt[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,pt[j].width,pt[j].height,0,Ct,ut,pt[j].data);for(let wt=0;wt<et.length;wt++){const ce=et[wt].image[j].image;I?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,ce.width,ce.height,Ct,ut,ce.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,$t,ce.width,ce.height,0,Ct,ut,ce.data)}}else{I?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,ut,pt[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Ct,ut,pt[j]);for(let wt=0;wt<et.length;wt++){const Ht=et[wt];I?lt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,0,0,Ct,ut,Ht.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,wt+1,$t,Ct,ut,Ht.image[j])}}}m(x)&&f(r.TEXTURE_CUBE_MAP),V.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xt(T,x,F,X,J,V){const Pt=s.convert(F.format,F.colorSpace),ot=s.convert(F.type),Et=S(F.internalFormat,Pt,ot,F.colorSpace),At=n.get(x),it=n.get(F);if(it.__renderTarget=x,!At.__hasExternalTextures){const pt=Math.max(1,x.width>>V),Ft=Math.max(1,x.height>>V);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,V,Et,pt,Ft,x.depth,0,Pt,ot,null):e.texImage2D(J,V,Et,pt,Ft,0,Pt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,T),Tt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,X,J,it.__webglTexture,0,pe(x)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,X,J,it.__webglTexture,V),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Nt(T,x,F){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,V=_(x.stencilBuffer,J),Pt=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=pe(x);Tt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,V,x.width,x.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,V,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,V,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,T)}else{const X=x.textures;for(let J=0;J<X.length;J++){const V=X[J],Pt=s.convert(V.format,V.colorSpace),ot=s.convert(V.type),Et=S(V.internalFormat,Pt,ot,V.colorSpace),At=pe(x);F&&Tt(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Et,x.width,x.height):Tt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,Et,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Et,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const J=X.__webglTexture,V=pe(x);if(x.depthTexture.format===ws)Tt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(x.depthTexture.format===Ss)Tt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Jt(T){const x=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=T.texture.mipmaps;X&&X.length>0?Lt(x.__webglFramebuffer[0],T):Lt(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=r.createRenderbuffer(),Nt(x.__webglDepthbuffer[X],T,!1);else{const J=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[X];r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,V)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Nt(x.__webglDepthbuffer,T,!1);else{const J=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,V)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Pe(T,x,F){const X=n.get(T);x!==void 0&&xt(X.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Jt(T)}function D(T){const x=T.texture,F=n.get(T),X=n.get(x);T.addEventListener("dispose",E);const J=T.textures,V=T.isWebGLCubeRenderTarget===!0,Pt=J.length>1;if(Pt||(X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture()),X.__version=x.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let Et=0;Et<x.mipmaps.length;Et++)F.__webglFramebuffer[ot][Et]=r.createFramebuffer()}else F.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)F.__webglFramebuffer[ot]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let ot=0,Et=J.length;ot<Et;ot++){const At=n.get(J[ot]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),a.memory.textures++)}if(T.samples>0&&Tt(T)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const Et=J[ot];F.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);const At=s.convert(Et.format,Et.colorSpace),it=s.convert(Et.type),pt=S(Et.internalFormat,At,it,Et.colorSpace,T.isXRRenderTarget===!0),Ft=pe(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,pt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Nt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(V){e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture),at(r.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)xt(F.__webglFramebuffer[ot][Et],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et);else xt(F.__webglFramebuffer[ot],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let ot=0,Et=J.length;ot<Et;ot++){const At=J[ot],it=n.get(At);let pt=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(pt,it.__webglTexture),at(pt,At),xt(F.__webglFramebuffer,T,At,r.COLOR_ATTACHMENT0+ot,pt,0),m(At)&&f(pt)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,X.__webglTexture),at(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let Et=0;Et<x.mipmaps.length;Et++)xt(F.__webglFramebuffer[Et],T,x,r.COLOR_ATTACHMENT0,ot,Et);else xt(F.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,ot,0);m(x)&&f(ot),e.unbindTexture()}T.depthBuffer&&Jt(T)}function fe(T){const x=T.textures;for(let F=0,X=x.length;F<X;F++){const J=x[F];if(m(J)){const V=w(T),Pt=n.get(J).__webglTexture;e.bindTexture(V,Pt),f(V),e.unbindTexture()}}}const Vt=[],Ot=[];function St(T){if(T.samples>0){if(Tt(T)===!1){const x=T.textures,F=T.width,X=T.height;let J=r.COLOR_BUFFER_BIT;const V=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=n.get(T),ot=x.length>1;if(ot)for(let At=0;At<x.length;At++)e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Et=T.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let At=0;At<x.length;At++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const it=n.get(x[At]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,F,X,0,0,F,X,J,r.NEAREST),c===!0&&(Vt.length=0,Ot.length=0,Vt.push(r.COLOR_ATTACHMENT0+At),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Vt.push(V),Ot.push(V),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let At=0;At<x.length;At++){e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);const it=n.get(x[At]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,it,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function pe(T){return Math.min(i.maxSamples,T.samples)}function Tt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function qt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ce(T,x){const F=T.colorSpace,X=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Ji&&F!==Xn&&(te.getTransfer(F)===se?(X!==hn||J!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Pe,this.setupRenderTarget=D,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Tt}function R0(r,t){function e(n,i=Xn){let s;const a=te.getTransfer(i);if(n===Sn)return r.UNSIGNED_BYTE;if(n===Fo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ic)return r.BYTE;if(n===Uc)return r.SHORT;if(n===bs)return r.UNSIGNED_SHORT;if(n===ko)return r.INT;if(n===gi)return r.UNSIGNED_INT;if(n===_n)return r.FLOAT;if(n===Cs)return r.HALF_FLOAT;if(n===Fc)return r.ALPHA;if(n===Oc)return r.RGB;if(n===hn)return r.RGBA;if(n===ws)return r.DEPTH_COMPONENT;if(n===Ss)return r.DEPTH_STENCIL;if(n===Bo)return r.RED;if(n===zo)return r.RED_INTEGER;if(n===Bc)return r.RG;if(n===Ho)return r.RG_INTEGER;if(n===Go)return r.RGBA_INTEGER;if(n===gr||n===vr||n===xr||n===_r)if(a===se)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Za||n===Ja||n===Qa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ka)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===eo||n===no)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===to||n===eo)return a===se?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===no)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===vo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===io)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===co)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return a===se?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===_o||n===yo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===xo)return a===se?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bo||n===Mo||n===wo||n===So)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===bo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Mo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===So)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const D0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class L0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:D0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I0 extends ts{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",m=new L0,f={},w=e.getContextAttributes();let S=null,_=null;const C=[],A=[],E=new zt;let L=null;const M=new Je;M.viewport=new ae;const b=new Je;b.viewport=new ae;const P=[M,b],k=new Jd;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=C[$];return K===void 0&&(K=new va,C[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=C[$];return K===void 0&&(K=new va,C[$]=K),K.getGripSpace()},this.getHand=function($){let K=C[$];return K===void 0&&(K=new va,C[$]=K),K.getHandSpace()};function W($){const K=A.indexOf($.inputSource);if(K===-1)return;const xt=C[K];xt!==void 0&&(xt.update($.inputSource,$.frame,l||a),xt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",Z);for(let $=0;$<C.length;$++){const K=A[$];K!==null&&(A[$]=null,C[$].disconnect(K))}H=null,Y=null,m.reset();for(const $ in f)delete f[$];t.setRenderTarget(S),p=null,u=null,d=null,i=null,_=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",q),i.addEventListener("inputsourceschange",Z),w.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Nt=null,Lt=null;w.depth&&(Lt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=w.stencil?Ss:ws,Nt=w.stencil?Ms:gi);const Jt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Jt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new vi(u.textureWidth,u.textureHeight,{format:hn,type:Sn,depthTexture:new Qc(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,xt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new vi(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z($){for(let K=0;K<$.removed.length;K++){const xt=$.removed[K],Nt=A.indexOf(xt);Nt>=0&&(A[Nt]=null,C[Nt].disconnect(xt))}for(let K=0;K<$.added.length;K++){const xt=$.added[K];let Nt=A.indexOf(xt);if(Nt===-1){for(let Jt=0;Jt<C.length;Jt++)if(Jt>=A.length){A.push(xt),Nt=Jt;break}else if(A[Jt]===null){A[Jt]=xt,Nt=Jt;break}if(Nt===-1)break}const Lt=C[Nt];Lt&&Lt.connect(xt)}}const G=new R,ct=new R;function gt($,K,xt){G.setFromMatrixPosition(K.matrixWorld),ct.setFromMatrixPosition(xt.matrixWorld);const Nt=G.distanceTo(ct),Lt=K.projectionMatrix.elements,Jt=xt.projectionMatrix.elements,Pe=Lt[14]/(Lt[10]-1),D=Lt[14]/(Lt[10]+1),fe=(Lt[9]+1)/Lt[5],Vt=(Lt[9]-1)/Lt[5],Ot=(Lt[8]-1)/Lt[0],St=(Jt[8]+1)/Jt[0],pe=Pe*Ot,Tt=Pe*St,qt=Nt/(-Ot+St),Ce=qt*-Ot;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ce),$.translateZ(qt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ye=Pe+qt,T=D+qt,x=pe-Ce,F=Tt+(Nt-Ce),X=fe*D/T*ye,J=Vt*D/T*ye;$.projectionMatrix.makePerspective(x,F,X,J,ye,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Rt($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let K=$.near,xt=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),k.near=b.near=M.near=K,k.far=b.far=M.far=xt,(H!==k.near||Y!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,Y=k.far),k.layers.mask=$.layers.mask|6,M.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const Nt=$.parent,Lt=k.cameras;Rt(k,Nt);for(let Jt=0;Jt<Lt.length;Jt++)Rt(Lt[Jt],Nt);Lt.length===2?gt(k,M,b):k.projectionMatrix.copy(M.projectionMatrix),at($,k,Nt)};function at($,K,xt){xt===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(xt.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Eo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function($){return f[$]};let mt=null;function dt($,K){if(h=K.getViewerPose(l||a),g=K,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(_,p.framebuffer),t.setRenderTarget(_));let Nt=!1;xt.length!==k.cameras.length&&(k.cameras.length=0,Nt=!0);for(let D=0;D<xt.length;D++){const fe=xt[D];let Vt=null;if(p!==null)Vt=p.getViewport(fe);else{const St=d.getViewSubImage(u,fe);Vt=St.viewport,D===0&&(t.setRenderTargetTextures(_,St.colorTexture,St.depthStencilTexture),t.setRenderTarget(_))}let Ot=P[D];Ot===void 0&&(Ot=new Je,Ot.layers.enable(D),Ot.viewport=new ae,P[D]=Ot),Ot.matrix.fromArray(fe.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(fe.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),D===0&&(k.matrix.copy(Ot.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Nt===!0&&k.cameras.push(Ot)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const D=d.getDepthInformation(xt[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(Lt&&Lt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let D=0;D<xt.length;D++){const fe=xt[D].camera;if(fe){let Vt=f[fe];Vt||(Vt=new th,f[fe]=Vt);const Ot=d.getCameraImage(fe);Vt.sourceTexture=Ot}}}}for(let xt=0;xt<C.length;xt++){const Nt=A[xt],Lt=C[xt];Nt!==null&&Lt!==void 0&&Lt.update(Nt,K,l||a)}mt&&mt($,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Dt=new ih;Dt.setAnimationLoop(dt),this.setAnimationLoop=function($){mt=$},this.dispose=function(){}}}const ai=new Tn,U0=new ne;function N0(r,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,qc(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,w,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),h(m,f)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,w,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ge&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ge&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),S=w.envMap,_=w.envMapRotation;S&&(m.envMap.value=S,ai.copy(_),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(U0.makeRotationFromEuler(ai)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ge&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const _=S.program;n.uniformBlockBinding(w,_)}function l(w,S){let _=i[w.id];_===void 0&&(g(w),_=h(w),i[w.id]=_,w.addEventListener("dispose",m));const C=S.program;n.updateUBOMapping(w,C);const A=t.render.frame;s[w.id]!==A&&(u(w),s[w.id]=A)}function h(w){const S=d();w.__bindingPointIndex=S;const _=r.createBuffer(),C=w.__size,A=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,_),_}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const S=i[w.id],_=w.uniforms,C=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,E=_.length;A<E;A++){const L=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,b=L.length;M<b;M++){const P=L[M];if(p(P,A,M,C)===!0){const k=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let W=0;W<H.length;W++){const q=H[W],Z=v(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,k+Y,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,Y),Y+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(w,S,_,C){const A=w.value,E=S+"_"+_;if(C[E]===void 0)return typeof A=="number"||typeof A=="boolean"?C[E]=A:C[E]=A.clone(),!0;{const L=C[E];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[E]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(w){const S=w.uniforms;let _=0;const C=16;for(let E=0,L=S.length;E<L;E++){const M=Array.isArray(S[E])?S[E]:[S[E]];for(let b=0,P=M.length;b<P;b++){const k=M[b],H=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,W=H.length;Y<W;Y++){const q=H[Y],Z=v(q),G=_%C,ct=G%Z.boundary,gt=G+ct;_+=ct,gt!==0&&C-gt<Z.storage&&(_+=C-gt),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=Z.storage}}}const A=_%C;return A>0&&(_+=C-A),w.__size=_,w.__cache={},this}function v(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function f(){for(const w in i)r.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:c,update:l,dispose:f}}class F0{constructor(t={}){const{canvas:e=ld(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let C=!1;this._outputColorSpace=Ue;let A=0,E=0,L=null,M=-1,b=null;const P=new ae,k=new ae;let H=null;const Y=new Mt(0);let W=0,q=e.width,Z=e.height,G=1,ct=null,gt=null;const Rt=new ae(0,0,q,Z),at=new ae(0,0,q,Z);let mt=!1;const dt=new Xo;let Dt=!1,$=!1;const K=new ne,xt=new R,Nt=new ae,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function Pe(){return L===null?G:1}let D=n;function fe(y,U){return e.getContext(y,U)}try{const y={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${No}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",_t,!1),e.addEventListener("webglcontextcreationerror",et,!1),D===null){const U="webgl2";if(D=fe(U,y),D===null)throw fe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Vt,Ot,St,pe,Tt,qt,Ce,ye,T,x,F,X,J,V,Pt,ot,Et,At,it,pt,Ft,Ct,ut,$t;function I(){Vt=new qp(D),Vt.init(),Ct=new R0(D,Vt),Ot=new zp(D,Vt,t,Ct),St=new A0(D,Vt),Ot.reversedDepthBuffer&&u&&St.buffers.depth.setReversed(!0),pe=new Kp(D),Tt=new p0,qt=new C0(D,Vt,St,Tt,Ot,Ct,pe),Ce=new Gp(_),ye=new Xp(_),T=new eu(D),ut=new Op(D,T),x=new Yp(D,T,pe,ut),F=new Jp(D,x,T,pe),it=new Zp(D,Ot,qt),ot=new Hp(Tt),X=new f0(_,Ce,ye,Vt,Ot,ut,ot),J=new N0(_,Tt),V=new g0,Pt=new M0(Vt),At=new Fp(_,Ce,ye,St,F,p,c),Et=new T0(_,F,Ot),$t=new k0(D,pe,Ot,St),pt=new Bp(D,Vt,pe),Ft=new jp(D,Vt,pe),pe.programs=X.programs,_.capabilities=Ot,_.extensions=Vt,_.properties=Tt,_.renderLists=V,_.shadowMap=Et,_.state=St,_.info=pe}I();const st=new I0(_,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Vt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Vt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(y){y!==void 0&&(G=y,this.setSize(q,Z,!1))},this.getSize=function(y){return y.set(q,Z)},this.setSize=function(y,U,O=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=y,Z=U,e.width=Math.floor(y*G),e.height=Math.floor(U*G),O===!0&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(q*G,Z*G).floor()},this.setDrawingBufferSize=function(y,U,O){q=y,Z=U,G=O,e.width=Math.floor(y*O),e.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(P)},this.getViewport=function(y){return y.copy(Rt)},this.setViewport=function(y,U,O,B){y.isVector4?Rt.set(y.x,y.y,y.z,y.w):Rt.set(y,U,O,B),St.viewport(P.copy(Rt).multiplyScalar(G).round())},this.getScissor=function(y){return y.copy(at)},this.setScissor=function(y,U,O,B){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,U,O,B),St.scissor(k.copy(at).multiplyScalar(G).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(y){St.setScissorTest(mt=y)},this.setOpaqueSort=function(y){ct=y},this.setTransparentSort=function(y){gt=y},this.getClearColor=function(y){return y.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,O=!0){let B=0;if(y){let N=!1;if(L!==null){const nt=L.texture.format;N=nt===Go||nt===Ho||nt===zo}if(N){const nt=L.texture.type,ft=nt===Sn||nt===gi||nt===bs||nt===Ms||nt===Fo||nt===Oo,yt=At.getClearColor(),vt=At.getClearAlpha(),kt=yt.r,Bt=yt.g,It=yt.b;ft?(g[0]=kt,g[1]=Bt,g[2]=It,g[3]=vt,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=kt,v[1]=Bt,v[2]=It,v[3]=vt,D.clearBufferiv(D.COLOR,0,v))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",_t,!1),e.removeEventListener("webglcontextcreationerror",et,!1),At.dispose(),V.dispose(),Pt.dispose(),Tt.dispose(),Ce.dispose(),ye.dispose(),F.dispose(),ut.dispose(),$t.dispose(),X.dispose(),st.dispose(),st.removeEventListener("sessionstart",fn),st.removeEventListener("sessionend",el),Qn.stop()};function lt(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function _t(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=pe.autoReset,U=Et.enabled,O=Et.autoUpdate,B=Et.needsUpdate,N=Et.type;I(),pe.autoReset=y,Et.enabled=U,Et.autoUpdate=O,Et.needsUpdate=B,Et.type=N}function et(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function j(y){const U=y.target;U.removeEventListener("dispose",j),wt(U)}function wt(y){Ht(y),Tt.remove(y)}function Ht(y){const U=Tt.get(y).programs;U!==void 0&&(U.forEach(function(O){X.releaseProgram(O)}),y.isShaderMaterial&&X.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,B,N,nt){U===null&&(U=Lt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,yt=gh(y,U,O,B,N);St.setMaterial(B,ft);let vt=O.index,kt=1;if(B.wireframe===!0){if(vt=x.getWireframeAttribute(O),vt===void 0)return;kt=2}const Bt=O.drawRange,It=O.attributes.position;let Kt=Bt.start*kt,ie=(Bt.start+Bt.count)*kt;nt!==null&&(Kt=Math.max(Kt,nt.start*kt),ie=Math.min(ie,(nt.start+nt.count)*kt)),vt!==null?(Kt=Math.max(Kt,0),ie=Math.min(ie,vt.count)):It!=null&&(Kt=Math.max(Kt,0),ie=Math.min(ie,It.count));const _e=ie-Kt;if(_e<0||_e===1/0)return;ut.setup(N,B,yt,O,vt);let de,oe=pt;if(vt!==null&&(de=T.get(vt),oe=Ft,oe.setIndex(de)),N.isMesh)B.wireframe===!0?(St.setLineWidth(B.wireframeLinewidth*Pe()),oe.setMode(D.LINES)):oe.setMode(D.TRIANGLES);else if(N.isLine){let Ut=B.linewidth;Ut===void 0&&(Ut=1),St.setLineWidth(Ut*Pe()),N.isLineSegments?oe.setMode(D.LINES):N.isLineLoop?oe.setMode(D.LINE_LOOP):oe.setMode(D.LINE_STRIP)}else N.isPoints?oe.setMode(D.POINTS):N.isSprite&&oe.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))oe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ut=N._multiDrawStarts,ve=N._multiDrawCounts,Qt=N._multiDrawCount,Xe=vt?T.get(vt).bytesPerElement:1,yi=Tt.get(B).currentProgram.getUniforms();for(let qe=0;qe<Qt;qe++)yi.setValue(D,"_gl_DrawID",qe),oe.render(Ut[qe]/Xe,ve[qe])}else if(N.isInstancedMesh)oe.renderInstances(Kt,_e,N.count);else if(O.isInstancedBufferGeometry){const Ut=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ve=Math.min(O.instanceCount,Ut);oe.renderInstances(Kt,_e,ve)}else oe.render(Kt,_e)};function ce(y,U,O){y.transparent===!0&&y.side===He&&y.forceSinglePass===!1?(y.side=Ge,y.needsUpdate=!0,Is(y,U,O),y.side=wn,y.needsUpdate=!0,Is(y,U,O),y.side=He):Is(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),f=Pt.get(O),f.init(U),S.push(f),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let ft=0;ft<nt.length;ft++){const yt=nt[ft];ce(yt,O,N),B.add(yt)}else ce(nt,O,N),B.add(nt)}),f=S.pop(),B},this.compileAsync=function(y,U,O=null){const B=this.compile(y,U,O);return new Promise(N=>{function nt(){if(B.forEach(function(ft){Tt.get(ft).currentProgram.isReady()&&B.delete(ft)}),B.size===0){N(y);return}setTimeout(nt,10)}Vt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let ee=null;function An(y){ee&&ee(y)}function fn(){Qn.stop()}function el(){Qn.start()}const Qn=new ih;Qn.setAnimationLoop(An),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(y){ee=y,st.setAnimationLoop(y),y===null?Qn.stop():Qn.start()},st.addEventListener("sessionstart",fn),st.addEventListener("sessionend",el),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,U,L),f=Pt.get(y,S.length),f.init(U),S.push(f),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),dt.setFromProjectionMatrix(K,yn,U.reversedDepth),$=this.localClippingEnabled,Dt=ot.init(this.clippingPlanes,$),m=V.get(y,w.length),m.init(),w.push(m),st.enabled===!0&&st.isPresenting===!0){const nt=_.xr.getDepthSensingMesh();nt!==null&&qr(nt,U,-1/0,_.sortObjects)}qr(y,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ct,gt),Jt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Jt&&At.addToRenderList(m,y),this.info.render.frame++,Dt===!0&&ot.beginShadows();const O=f.state.shadowsArray;Et.render(O,y,U),Dt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let ft=0,yt=nt.length;ft<yt;ft++){const vt=nt[ft];il(B,N,y,vt)}Jt&&At.render(y);for(let ft=0,yt=nt.length;ft<yt;ft++){const vt=nt[ft];nl(m,y,vt,vt.viewport)}}else N.length>0&&il(B,N,y,U),Jt&&At.render(y),nl(m,y,U);L!==null&&E===0&&(qt.updateMultisampleRenderTarget(L),qt.updateRenderTargetMipmap(L)),y.isScene===!0&&y.onAfterRender(_,y,U),ut.resetDefaultState(),M=-1,b=null,S.pop(),S.length>0?(f=S[S.length-1],Dt===!0&&ot.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function qr(y,U,O,B){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||dt.intersectsSprite(y)){B&&Nt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(K);const ft=F.update(y),yt=y.material;yt.visible&&m.push(y,ft,yt,O,Nt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||dt.intersectsObject(y))){const ft=F.update(y),yt=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Nt.copy(y.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Nt.copy(ft.boundingSphere.center)),Nt.applyMatrix4(y.matrixWorld).applyMatrix4(K)),Array.isArray(yt)){const vt=ft.groups;for(let kt=0,Bt=vt.length;kt<Bt;kt++){const It=vt[kt],Kt=yt[It.materialIndex];Kt&&Kt.visible&&m.push(y,ft,Kt,O,Nt.z,It)}}else yt.visible&&m.push(y,ft,yt,O,Nt.z,null)}}const nt=y.children;for(let ft=0,yt=nt.length;ft<yt;ft++)qr(nt[ft],U,O,B)}function nl(y,U,O,B){const N=y.opaque,nt=y.transmissive,ft=y.transparent;f.setupLightsView(O),Dt===!0&&ot.setGlobalState(_.clippingPlanes,O),B&&St.viewport(P.copy(B)),N.length>0&&Ls(N,U,O),nt.length>0&&Ls(nt,U,O),ft.length>0&&Ls(ft,U,O),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function il(y,U,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new vi(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Cs:Sn,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const nt=f.state.transmissionRenderTarget[B.id],ft=B.viewport||P;nt.setSize(ft.z*_.transmissionResolutionScale,ft.w*_.transmissionResolutionScale);const yt=_.getRenderTarget(),vt=_.getActiveCubeFace(),kt=_.getActiveMipmapLevel();_.setRenderTarget(nt),_.getClearColor(Y),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Jt&&At.render(O);const Bt=_.toneMapping;_.toneMapping=jn;const It=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Dt===!0&&ot.setGlobalState(_.clippingPlanes,B),Ls(y,O,B),qt.updateMultisampleRenderTarget(nt),qt.updateRenderTargetMipmap(nt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let ie=0,_e=U.length;ie<_e;ie++){const de=U[ie],oe=de.object,Ut=de.geometry,ve=de.material,Qt=de.group;if(ve.side===He&&oe.layers.test(B.layers)){const Xe=ve.side;ve.side=Ge,ve.needsUpdate=!0,sl(oe,O,B,Ut,ve,Qt),ve.side=Xe,ve.needsUpdate=!0,Kt=!0}}Kt===!0&&(qt.updateMultisampleRenderTarget(nt),qt.updateRenderTargetMipmap(nt))}_.setRenderTarget(yt,vt,kt),_.setClearColor(Y,W),It!==void 0&&(B.viewport=It),_.toneMapping=Bt}function Ls(y,U,O){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=y.length;N<nt;N++){const ft=y[N],yt=ft.object,vt=ft.geometry,kt=ft.group;let Bt=ft.material;Bt.allowOverride===!0&&B!==null&&(Bt=B),yt.layers.test(O.layers)&&sl(yt,U,O,vt,Bt,kt)}}function sl(y,U,O,B,N,nt){y.onBeforeRender(_,U,O,B,N,nt),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(_,U,O,B,y,nt),N.transparent===!0&&N.side===He&&N.forceSinglePass===!1?(N.side=Ge,N.needsUpdate=!0,_.renderBufferDirect(O,U,B,N,y,nt),N.side=wn,N.needsUpdate=!0,_.renderBufferDirect(O,U,B,N,y,nt),N.side=He):_.renderBufferDirect(O,U,B,N,y,nt),y.onAfterRender(_,U,O,B,N,nt)}function Is(y,U,O){U.isScene!==!0&&(U=Lt);const B=Tt.get(y),N=f.state.lights,nt=f.state.shadowsArray,ft=N.state.version,yt=X.getParameters(y,N.state,nt,U,O),vt=X.getProgramCacheKey(yt);let kt=B.programs;B.environment=y.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(y.isMeshStandardMaterial?ye:Ce).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,kt===void 0&&(y.addEventListener("dispose",j),kt=new Map,B.programs=kt);let Bt=kt.get(vt);if(Bt!==void 0){if(B.currentProgram===Bt&&B.lightsStateVersion===ft)return al(y,yt),Bt}else yt.uniforms=X.getUniforms(y),y.onBeforeCompile(yt,_),Bt=X.acquireProgram(yt,vt),kt.set(vt,Bt),B.uniforms=yt.uniforms;const It=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(It.clippingPlanes=ot.uniform),al(y,yt),B.needsLights=xh(y),B.lightsStateVersion=ft,B.needsLights&&(It.ambientLightColor.value=N.state.ambient,It.lightProbe.value=N.state.probe,It.directionalLights.value=N.state.directional,It.directionalLightShadows.value=N.state.directionalShadow,It.spotLights.value=N.state.spot,It.spotLightShadows.value=N.state.spotShadow,It.rectAreaLights.value=N.state.rectArea,It.ltc_1.value=N.state.rectAreaLTC1,It.ltc_2.value=N.state.rectAreaLTC2,It.pointLights.value=N.state.point,It.pointLightShadows.value=N.state.pointShadow,It.hemisphereLights.value=N.state.hemi,It.directionalShadowMap.value=N.state.directionalShadowMap,It.directionalShadowMatrix.value=N.state.directionalShadowMatrix,It.spotShadowMap.value=N.state.spotShadowMap,It.spotLightMatrix.value=N.state.spotLightMatrix,It.spotLightMap.value=N.state.spotLightMap,It.pointShadowMap.value=N.state.pointShadowMap,It.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Bt,B.uniformsList=null,Bt}function rl(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=br.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function al(y,U){const O=Tt.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function gh(y,U,O,B,N){U.isScene!==!0&&(U=Lt),qt.resetTextureUnits();const nt=U.fog,ft=B.isMeshStandardMaterial?U.environment:null,yt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ji,vt=(B.isMeshStandardMaterial?ye:Ce).get(B.envMap||ft),kt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Bt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),It=!!O.morphAttributes.position,Kt=!!O.morphAttributes.normal,ie=!!O.morphAttributes.color;let _e=jn;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_e=_.toneMapping);const de=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=de!==void 0?de.length:0,Ut=Tt.get(B),ve=f.state.lights;if(Dt===!0&&($===!0||y!==b)){const ke=y===b&&B.id===M;ot.setState(B,y,ke)}let Qt=!1;B.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ve.state.version||Ut.outputColorSpace!==yt||N.isBatchedMesh&&Ut.batching===!1||!N.isBatchedMesh&&Ut.batching===!0||N.isBatchedMesh&&Ut.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ut.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ut.instancing===!1||!N.isInstancedMesh&&Ut.instancing===!0||N.isSkinnedMesh&&Ut.skinning===!1||!N.isSkinnedMesh&&Ut.skinning===!0||N.isInstancedMesh&&Ut.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ut.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ut.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ut.instancingMorph===!1&&N.morphTexture!==null||Ut.envMap!==vt||B.fog===!0&&Ut.fog!==nt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ot.numPlanes||Ut.numIntersection!==ot.numIntersection)||Ut.vertexAlphas!==kt||Ut.vertexTangents!==Bt||Ut.morphTargets!==It||Ut.morphNormals!==Kt||Ut.morphColors!==ie||Ut.toneMapping!==_e||Ut.morphTargetsCount!==oe)&&(Qt=!0):(Qt=!0,Ut.__version=B.version);let Xe=Ut.currentProgram;Qt===!0&&(Xe=Is(B,U,N));let yi=!1,qe=!1,ss=!1;const xe=Xe.getUniforms(),en=Ut.uniforms;if(St.useProgram(Xe.program)&&(yi=!0,qe=!0,ss=!0),B.id!==M&&(M=B.id,qe=!0),yi||b!==y){St.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xe.setValue(D,"projectionMatrix",y.projectionMatrix),xe.setValue(D,"viewMatrix",y.matrixWorldInverse);const Ve=xe.map.cameraPosition;Ve!==void 0&&Ve.setValue(D,xt.setFromMatrixPosition(y.matrixWorld)),Ot.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&xe.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),b!==y&&(b=y,qe=!0,ss=!0)}if(N.isSkinnedMesh){xe.setOptional(D,N,"bindMatrix"),xe.setOptional(D,N,"bindMatrixInverse");const ke=N.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),xe.setValue(D,"boneTexture",ke.boneTexture,qt))}N.isBatchedMesh&&(xe.setOptional(D,N,"batchingTexture"),xe.setValue(D,"batchingTexture",N._matricesTexture,qt),xe.setOptional(D,N,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",N._indirectTexture,qt),xe.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",N._colorsTexture,qt));const nn=O.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&it.update(N,O,Xe),(qe||Ut.receiveShadow!==N.receiveShadow)&&(Ut.receiveShadow=N.receiveShadow,xe.setValue(D,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(en.envMap.value=vt,en.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(en.envMapIntensity.value=U.environmentIntensity),qe&&(xe.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ut.needsLights&&vh(en,ss),nt&&B.fog===!0&&J.refreshFogUniforms(en,nt),J.refreshMaterialUniforms(en,B,G,Z,f.state.transmissionRenderTarget[y.id]),br.upload(D,rl(Ut),en,qt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(br.upload(D,rl(Ut),en,qt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&xe.setValue(D,"center",N.center),xe.setValue(D,"modelViewMatrix",N.modelViewMatrix),xe.setValue(D,"normalMatrix",N.normalMatrix),xe.setValue(D,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const ke=B.uniformsGroups;for(let Ve=0,Yr=ke.length;Ve<Yr;Ve++){const ti=ke[Ve];$t.update(ti,Xe),$t.bind(ti,Xe)}}return Xe}function vh(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function xh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(y,U,O){const B=Tt.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Tt.get(y.texture).__webglTexture=U,Tt.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const O=Tt.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const _h=D.createFramebuffer();this.setRenderTarget=function(y,U=0,O=0){L=y,A=U,E=O;let B=!0,N=null,nt=!1,ft=!1;if(y){const vt=Tt.get(y);if(vt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(vt.__webglFramebuffer===void 0)qt.setupRenderTarget(y);else if(vt.__hasExternalTextures)qt.rebindTextures(y,Tt.get(y.texture).__webglTexture,Tt.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const It=y.depthTexture;if(vt.__boundDepthTexture!==It){if(It!==null&&Tt.has(It)&&(y.width!==It.image.width||y.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qt.setupDepthRenderbuffer(y)}}const kt=y.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(ft=!0);const Bt=Tt.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Bt[U])?N=Bt[U][O]:N=Bt[U],nt=!0):y.samples>0&&qt.useMultisampledRTT(y)===!1?N=Tt.get(y).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[O]:N=Bt,P.copy(y.viewport),k.copy(y.scissor),H=y.scissorTest}else P.copy(Rt).multiplyScalar(G).floor(),k.copy(at).multiplyScalar(G).floor(),H=mt;if(O!==0&&(N=_h),St.bindFramebuffer(D.FRAMEBUFFER,N)&&B&&St.drawBuffers(y,N),St.viewport(P),St.scissor(k),St.setScissorTest(H),nt){const vt=Tt.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,O)}else if(ft){const vt=U;for(let kt=0;kt<y.textures.length;kt++){const Bt=Tt.get(y.textures[kt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+kt,Bt.__webglTexture,O,vt)}}else if(y!==null&&O!==0){const vt=Tt.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vt.__webglTexture,O)}M=-1},this.readRenderTargetPixels=function(y,U,O,B,N,nt,ft,yt=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){St.bindFramebuffer(D.FRAMEBUFFER,vt);try{const kt=y.textures[yt],Bt=kt.format,It=kt.type;if(!Ot.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-B&&O>=0&&O<=y.height-N&&(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),D.readPixels(U,O,B,N,Ct.convert(Bt),Ct.convert(It),nt))}finally{const kt=L!==null?Tt.get(L).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,B,N,nt,ft,yt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Tt.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt)if(U>=0&&U<=y.width-B&&O>=0&&O<=y.height-N){St.bindFramebuffer(D.FRAMEBUFFER,vt);const kt=y.textures[yt],Bt=kt.format,It=kt.type;if(!Ot.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Kt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+yt),D.readPixels(U,O,B,N,Ct.convert(Bt),Ct.convert(It),0);const ie=L!==null?Tt.get(L).__webglFramebuffer:null;St.bindFramebuffer(D.FRAMEBUFFER,ie);const _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cd(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Kt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Kt),D.deleteSync(_e),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,O=0){const B=Math.pow(2,-O),N=Math.floor(y.image.width*B),nt=Math.floor(y.image.height*B),ft=U!==null?U.x:0,yt=U!==null?U.y:0;qt.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,ft,yt,N,nt),St.unbindTexture()};const yh=D.createFramebuffer(),bh=D.createFramebuffer();this.copyTextureToTexture=function(y,U,O=null,B=null,N=0,nt=null){nt===null&&(N!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=N,N=0):nt=0);let ft,yt,vt,kt,Bt,It,Kt,ie,_e;const de=y.isCompressedTexture?y.mipmaps[nt]:y.image;if(O!==null)ft=O.max.x-O.min.x,yt=O.max.y-O.min.y,vt=O.isBox3?O.max.z-O.min.z:1,kt=O.min.x,Bt=O.min.y,It=O.isBox3?O.min.z:0;else{const nn=Math.pow(2,-N);ft=Math.floor(de.width*nn),yt=Math.floor(de.height*nn),y.isDataArrayTexture?vt=de.depth:y.isData3DTexture?vt=Math.floor(de.depth*nn):vt=1,kt=0,Bt=0,It=0}B!==null?(Kt=B.x,ie=B.y,_e=B.z):(Kt=0,ie=0,_e=0);const oe=Ct.convert(U.format),Ut=Ct.convert(U.type);let ve;U.isData3DTexture?(qt.setTexture3D(U,0),ve=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(qt.setTexture2DArray(U,0),ve=D.TEXTURE_2D_ARRAY):(qt.setTexture2D(U,0),ve=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Qt=D.getParameter(D.UNPACK_ROW_LENGTH),Xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),qe=D.getParameter(D.UNPACK_SKIP_ROWS),ss=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It);const xe=y.isDataArrayTexture||y.isData3DTexture,en=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const nn=Tt.get(y),ke=Tt.get(U),Ve=Tt.get(nn.__renderTarget),Yr=Tt.get(ke.__renderTarget);St.bindFramebuffer(D.READ_FRAMEBUFFER,Ve.__webglFramebuffer),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let ti=0;ti<vt;ti++)xe&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(y).__webglTexture,N,It+ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.get(U).__webglTexture,nt,_e+ti)),D.blitFramebuffer(kt,Bt,ft,yt,Kt,ie,ft,yt,D.DEPTH_BUFFER_BIT,D.NEAREST);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||Tt.has(y)){const nn=Tt.get(y),ke=Tt.get(U);St.bindFramebuffer(D.READ_FRAMEBUFFER,yh),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,bh);for(let Ve=0;Ve<vt;Ve++)xe?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,N,It+Ve):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,N),en?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ke.__webglTexture,nt,_e+Ve):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ke.__webglTexture,nt),N!==0?D.blitFramebuffer(kt,Bt,ft,yt,Kt,ie,ft,yt,D.COLOR_BUFFER_BIT,D.NEAREST):en?D.copyTexSubImage3D(ve,nt,Kt,ie,_e+Ve,kt,Bt,ft,yt):D.copyTexSubImage2D(ve,nt,Kt,ie,kt,Bt,ft,yt);St.bindFramebuffer(D.READ_FRAMEBUFFER,null),St.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else en?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ve,nt,Kt,ie,_e,ft,yt,vt,oe,Ut,de.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,nt,Kt,ie,_e,ft,yt,vt,oe,de.data):D.texSubImage3D(ve,nt,Kt,ie,_e,ft,yt,vt,oe,Ut,de):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,nt,Kt,ie,ft,yt,oe,Ut,de.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,nt,Kt,ie,de.width,de.height,oe,de.data):D.texSubImage2D(D.TEXTURE_2D,nt,Kt,ie,ft,yt,oe,Ut,de);D.pixelStorei(D.UNPACK_ROW_LENGTH,Qt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ss),nt===0&&U.generateMipmaps&&D.generateMipmap(ve),St.unbindTexture()},this.initRenderTarget=function(y){Tt.get(y).__webglFramebuffer===void 0&&qt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?qt.setTextureCube(y,0):y.isData3DTexture?qt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?qt.setTexture2DArray(y,0):qt.setTexture2D(y,0),St.unbindTexture()},this.resetState=function(){A=0,E=0,L=null,St.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const ge=22,Gt=2.7,Te=ge*Gt/2,Xi=9,qi=9,O0=4,B0=4,ur=6,Ke={gold:{name:"Gold",icon:"i-coin",color:"#e7c37a"},wood:{name:"Wood",icon:"i-wood",color:"#c58e56"},stone:{name:"Stone",icon:"i-stone",color:"#c3c5c2"},food:{name:"Food",icon:"i-food",color:"#b7cd79"}},Da={gold:520,wood:420,stone:540,food:320},he={keep:{name:"The Keep",icon:"i-crown",w:O0,h:B0,cost:{},hp:3800,workers:0,hidden:!0,category:"Heart",maxLevel:0,population:10,production:{gold:2,wood:2,stone:2,food:1},desc:"The heart of your city. If it falls, everything falls."},wall:{name:"Stone Wall",icon:"i-wall",w:1,h:1,cost:{stone:8},hp:340,workers:0,category:"Fortify",maxLevel:0,desc:"Drag to raise a line of stone walls. Raiders must break through."},gate:{name:"Gatehouse",icon:"i-gate",w:1,h:1,cost:{stone:45,wood:15,gold:20},hp:820,workers:0,category:"Fortify",maxLevel:3,desc:"A reinforced gate. Raiders are drawn to it — make it strong."},tower:{name:"Archer Tower",icon:"i-tower",w:2,h:2,cost:{stone:55,wood:20,gold:30},hp:720,workers:0,category:"Fortify",maxLevel:3,desc:"Archers loose arrows at nearby raiders. Range 17.",tower:{kind:"arrow",range:17,damage:16,cooldown:1.05}},house:{name:"House",icon:"i-house",w:2,h:2,cost:{wood:45,stone:25,gold:15},hp:340,workers:0,category:"City",maxLevel:3,population:8,production:{gold:2},desc:"Homes for your people. Adds population and collects taxes."},farm:{name:"Farm & Mill",icon:"i-farm",w:3,h:3,cost:{wood:45,gold:15},hp:260,workers:3,category:"City",maxLevel:3,production:{food:7},desc:"Fields, orchard and a windmill. Produces food."},lumber:{name:"Lumber Camp",icon:"i-lumber",w:2,h:2,cost:{wood:50,stone:20,gold:15},hp:280,workers:2,category:"City",maxLevel:3,production:{wood:6},desc:"Sawpit and log yard. Produces wood."},quarry:{name:"Quarry",icon:"i-quarry",w:2,h:2,cost:{wood:50,stone:20,gold:15},hp:300,workers:3,category:"City",maxLevel:3,production:{stone:6},desc:"A terraced stone pit. Produces stone."},market:{name:"Market",icon:"i-market",w:2,h:2,cost:{wood:65,stone:30,gold:35},hp:320,workers:2,category:"City",maxLevel:3,production:{gold:5},happiness:2,desc:"Traders' stalls. Produces gold and a little joy."},tavern:{name:"Tavern",icon:"i-tavern",w:2,h:2,cost:{wood:55,stone:40,gold:30},hp:320,workers:2,category:"City",maxLevel:3,production:{gold:3},happiness:9,desc:"Ale and song. Lifts happiness and earns coin."},chapel:{name:"Chapel",icon:"i-chapel",w:2,h:2,cost:{stone:60,wood:20,gold:30},hp:360,workers:1,category:"City",maxLevel:3,production:{gold:1},happiness:6,desc:"A quiet spire. Lifts the spirit of your people."},garden:{name:"Garden",icon:"i-garden",w:2,h:2,cost:{wood:30,stone:10,gold:10},hp:160,workers:0,category:"City",maxLevel:3,happiness:7,desc:"Green terraces, hedges and flowers. Adds happiness."},barracks:{name:"Barracks",icon:"i-barracks",w:3,h:2,cost:{wood:80,stone:40,gold:50},hp:480,workers:4,category:"War",maxLevel:3,garrison:2,desc:"Trains a garrison of swordsmen. More levels, more guards."},ballista:{name:"Ballista",icon:"i-ballista",w:2,h:2,cost:{wood:80,stone:60,gold:70},hp:460,workers:2,category:"War",maxLevel:3,desc:"Slow, piercing bolts. Excellent against rams and warlords.",tower:{kind:"ballista",range:23,damage:62,cooldown:2.5}},catapult:{name:"Catapult",icon:"i-catapult",w:3,h:3,cost:{wood:100,stone:90,gold:90},hp:520,workers:3,category:"War",maxLevel:3,desc:"Lobs firepots that damage groups of raiders. Range 26.",tower:{kind:"catapult",range:26,damage:52,cooldown:3.3}},road:{name:"Cobbled Road",icon:"i-road",w:1,h:1,cost:{stone:2},hp:0,workers:0,category:"City",maxLevel:0,road:!0,desc:"Paint cobbled streets freely. Your city, your winding ways."}},xc=["wall","gate","road","tower","house","farm","lumber","quarry","market","tavern","chapel","garden","barracks","ballista","catapult"],Do={raider:{name:"Raider",hp:90,speed:2.45,damage:9,cooldown:1,radius:.42,scale:1,color:10305329,shield:.8,cost:0,structureDamage:1},shield:{name:"Shieldman",hp:235,speed:1.62,damage:15,cooldown:1.2,radius:.5,scale:1.13,color:7220521,shield:1.25,structureDamage:1.15},berserk:{name:"Berserker",hp:150,speed:2.95,damage:23,cooldown:.82,radius:.44,scale:1.02,color:11688490,shield:.5,structureDamage:1.3},ram:{name:"Battering Ram",hp:720,speed:1.16,damage:62,cooldown:1.5,radius:.82,scale:1.5,color:6113589,shield:0,structureDamage:2.4,siege:!0},warlord:{name:"Warlord Gruk",hp:3200,speed:1.4,damage:48,cooldown:1,radius:.95,scale:1.95,color:5055298,shield:1.6,structureDamage:2,boss:!0},ratking:{name:"The Gnawing King",hp:1400,speed:1.9,damage:28,cooldown:.9,radius:.72,scale:1.7,color:7031343,shield:1.35,structureDamage:2,boss:!0},crowqueen:{name:"The Crow Queen",hp:2300,speed:1.7,damage:38,cooldown:.85,radius:.8,scale:1.85,color:3680842,shield:1.5,structureDamage:2.2,boss:!0},ironcolossus:{name:"The Iron Colossus",hp:3900,speed:1.2,damage:56,cooldown:1.1,radius:.98,scale:2.12,color:4869973,shield:1.8,structureDamage:2.8,boss:!0},frostmaw:{name:"Frostmaw",hp:5400,speed:1.55,damage:68,cooldown:.92,radius:1.02,scale:2.22,color:9422812,shield:1.6,structureDamage:2.6,boss:!0},ashking:{name:"The Ash King",hp:7600,speed:1.45,damage:84,cooldown:.86,radius:1.08,scale:2.38,color:3677220,shield:1.9,structureDamage:3.1,boss:!0}},mi=[{name:"The First Raid",sub:"A raiding party has been spotted on the coast.",comp:{raider:6}},{name:"Axes at the Gate",sub:"They brought a battering ram this time.",comp:{raider:9,ram:1}},{name:"Shield Wall",sub:"Hardened shieldmen march behind the raiders.",comp:{raider:11,shield:4}},{name:"Sack and Burn",sub:"The warband wants your granary.",comp:{raider:13,shield:6,ram:2}},{name:"Fury of the North",sub:"Berserkers have joined the horde.",comp:{raider:15,shield:7,berserk:3,ram:2}},{name:"The Long Siege",sub:"Three rams. Hold the walls.",comp:{raider:17,shield:9,berserk:4,ram:3}},{name:"Red Sky Morning",sub:"Scouts say a warlord leads them.",comp:{raider:19,shield:11,berserk:6,ram:4}},{name:"Warlord Gruk",sub:"The warlord has come to take your crown.",comp:{raider:20,shield:12,berserk:7,ram:5,warlord:1},boss:!0}],ze=mi.length,zi={kicker:"The Chronicle · Prologue",title:"A Second Life",lead:"You remember dying.",body:["A rain-slick street. A blinding light. Then nothing — until you woke in the body of Caelan Ashbourne, last heir of a house that no longer exists.","This is Vareth, a world of warring crowns and iron hordes. Six kingdoms have knelt to Warlord Gruk. Your house was burned, your people scattered. You have no army, no gold, and one grey island no one wanted.","But you have something no one else in this world has: memories of another life, and the Crown System — a voice only you can hear that turns land, labour and loyalty into numbers you can bend. In your old world you built cities. Here, you will build an empire.","You died once. This time, you will not be forgotten."],oath:"“A second life. A broken crown. A world that has no idea what is about to hit it.”",cta:"Awaken"},Un=[{id:"home",name:"The Home Shore",short:"Home Shore",from:1,to:2,x:16,y:74,icon:"i-house",flag:"blue",tag:"Chapter I",lore:"A grey island, a broken keep, and the last oath of House Ashbourne. In my old life I called this a blank slate. Here, they call it a grave. Either way, it is mine.",claim:"The Home Shore is yours. Exiles gather beneath your banner — and your name crosses the water for the first time."},{id:"greenvale",name:"Greenvale",short:"Greenvale",from:3,to:4,x:34,y:47,icon:"i-farm",flag:"green",tag:"Chapter II",lore:"The old kingdom's granary. A granary is worth more than a crown. My old world learned that the hard way; this one is about to.",claim:"Greenvale swears to you. Grain carts roll toward your island, and the first true kingdom answers your call."},{id:"ashen",name:"The Ashen March",short:"Ashen March",from:5,to:6,x:55,y:66,icon:"i-tent",flag:"red",tag:"Chapter III",lore:"Burned orchards and berserker camps. They burned the farms to starve me. They never studied logistics. Give them steel instead.",claim:"The Ashen March has a new lord. Berserker banners are cut down and hung from your walls."},{id:"frostfang",name:"Frostfang Pass",short:"Frostfang",from:7,to:7,x:71,y:29,icon:"i-tower",flag:"blue",tag:"Chapter IV",lore:"The only road to the Iron Citadel. Hold the pass, hold the world. Geography is destiny — I did not need a second life to know that.",claim:"Frostfang falls. The road to Gruk's throne lies open, and the north holds its breath."},{id:"citadel",name:"Citadel of Gruk",short:"Iron Citadel",from:8,to:8,x:87,y:48,icon:"i-skull",flag:"red",tag:"Chapter V",lore:"The Iron Horde's throne. One throne. One system. One last siege. I died once already — he should have known better.",claim:"Warlord Gruk is dead. The Iron Horde scatters. Six crowns wait for the last Ashbourne to speak."}];function Po(r){return Un.find(t=>r>=t.from&&r<=t.to)||Un[Un.length-1]}function z0(r,t){return t>=r.to}const H0=["First blood. The Crown System rewards me with numbers. I can work with numbers.","The Home Shore is mine. In my old life I never owned more than an apartment. This is better.","Shield wall broken. I saw the flaw before the battle — they built it to face a charge, not a city.","Greenvale kneels. Grain is a weapon. I will not forget it.","The berserkers break. Fear is a resource too, and I have spent it well.","The north is mine. Only the pass and the warlord remain.","Frostfang falls. I can almost see his throne from here. I died once already. He should have known better.","Gruk is dead. Six crowns kneel. The System says the tutorial is complete. Of course it does."],fr={kicker:"The Chronicle · Finale",title:"A World Reborn",body:"The Iron Horde is broken. Six crowns send envoys to your island — not to demand tribute, but to swear. The last heir has become the first sovereign of a united Vareth. Then the Crown System speaks one last time: “Congratulations, Administrator. The tutorial is complete.” You died once. Now the world is your blueprint.",oath:"“They gave us an island no one wanted. We gave them a world.”"},Mr=[{id:"warrens",name:"The Gnawing Warrens",region:"home",x:26,y:89,tier:1,power:"Tier I · Elite",unlockWave:1,boss:"ratking",comp:{raider:8},loot:{gold:260,wood:160,stone:160,crowns:90},skin:"livery_rat",lore:"A collapsed granary where the rats grew bold enough to wear a crown. The villagers left offerings. The Crown System left a quest marker.",bossLine:"Something enormous is dragging a rusted crown through the dark."},{id:"crypt",name:"Crowspire Crypt",region:"greenvale",x:45,y:62,tier:2,power:"Tier II · Deadly",unlockWave:3,boss:"crowqueen",comp:{shield:6,berserk:3},loot:{gold:420,wood:240,stone:260,crowns:140},skin:"sky_crow",lore:"A bell tower buried upside down. Every crow in Greenvale roosts here, and their queen remembers every farmer who ever threw a stone.",bossLine:"The flock parts. A woman in a cloak of black feathers descends."},{id:"forge",name:"The Black Forge",region:"ashen",x:67,y:79,tier:3,power:"Tier III · Brutal",unlockWave:5,boss:"ironcolossus",comp:{raider:7,shield:7,berserk:5},loot:{gold:680,wood:360,stone:420,crowns:190},skin:"stone_blackiron",lore:"The Iron Horde's first foundry, still hot. Its master was once a smith. Now he is a walking wall of black iron with a hammer the size of a gate.",bossLine:"The forge doors open. Something made of iron and anger steps out."},{id:"hollow",name:"Frostmaw Hollow",region:"frostfang",x:80,y:19,tier:4,power:"Tier IV · Nightmare",unlockWave:7,boss:"frostmaw",comp:{shield:10,berserk:7,ram:2},loot:{gold:940,wood:460,stone:560,crowns:260},skin:"roof_frost",lore:"A glacier split open like a wound. The thing inside has been eating the pass for a hundred years. It has never been hungry enough to leave — until now.",bossLine:"The ice groans. A white shape unfolds to its full height."},{id:"vault",name:"Vault of the Ash King",region:"citadel",x:93,y:64,tier:5,power:"Tier V · Apocalyptic",unlockWave:7,boss:"ashking",comp:{raider:12,shield:10,berserk:8,ram:4},loot:{gold:1400,wood:700,stone:900,crowns:380},skin:"captain_ashen",lore:"Beneath Gruk's citadel, behind nine sealed doors, the first king of the Iron Horde waits for a worthy heir. The System marks him simply: optional. It is lying.",bossLine:"Nine doors open at once. The Ash King is already awake."}];function _s(r){return Mr.find(t=>t.id===r)||null}const gs=[{id:"livery",name:"Livery",icon:"i-crown",blurb:"Banners and royal accents."},{id:"roof",name:"Roofing",icon:"i-house",blurb:"The skyline of your city."},{id:"stone",name:"Masonry",icon:"i-wall",blurb:"Walls, keeps and stonework."},{id:"sky",name:"Realm Skies",icon:"i-star",blurb:"The light above your world."},{id:"captain",name:"Captain",icon:"i-captain",blurb:"Armour for Captain Aldric."}],lh=[{id:"livery_ashbourne",cat:"livery",name:"Ashbourne Blue",desc:"The last banner of your fallen house. Free and proud.",price:0,free:!0,banner:"blue",ui:"#e7c37a",ui2:"#b8914d"},{id:"livery_frost",cat:"livery",name:"Frostguard",desc:"Pale blue banners and a cold silver interface.",price:140,banner:"frost",ui:"#9fd8ef",ui2:"#5f9bb8"},{id:"livery_ember",cat:"livery",name:"Ember Company",desc:"Blackened red cloth, lit by the fires of the Ashen March.",price:140,banner:"ember",ui:"#f08a5d",ui2:"#b85a3b"},{id:"livery_verdant",cat:"livery",name:"Verdant Oath",desc:"Green livery for a city that grows faster than it burns.",price:120,banner:"verdant",ui:"#a9d18e",ui2:"#6f9a55"},{id:"livery_sun",cat:"livery",name:"Sun King",desc:"The gilded banner of a sovereign. Exclusive to the Sovereign's Oath.",price:0,subscription:!0,banner:"sun",ui:"#ffd86b",ui2:"#c9a24e"},{id:"livery_rat",cat:"livery",name:"Rat Crown",desc:"A grubby banner taken from the Gnawing King. First clear: The Gnawing Warrens.",price:0,dungeon:"warrens",banner:"rat",ui:"#c9b18a",ui2:"#8d7a5a"},{id:"roof_terracotta",cat:"roof",name:"Terracotta",desc:"Warm clay tiles, the colour of home.",price:0,free:!0,color:11029304},{id:"roof_slate",cat:"roof",name:"Storm Slate",desc:"Dark blue-grey stone that sheds rain and arrows alike.",price:150,color:5859188},{id:"roof_copper",cat:"roof",name:"Copper Verdant",desc:"Aging copper roofs with a green patina.",price:180,color:5213042},{id:"roof_gilded",cat:"roof",name:"Gilded Tiles",desc:"Roofs that catch the sun and hold it.",price:260,color:13740885},{id:"roof_frost",cat:"roof",name:"Frostmaw Ice",desc:"Roofs of pale glacial stone. First clear: Frostmaw Hollow.",price:0,dungeon:"hollow",color:12377062},{id:"stone_limestone",cat:"stone",name:"Honey Limestone",desc:"The honest stone of the Home Shore.",price:0,free:!0,color:16777215},{id:"stone_marble",cat:"stone",name:"Pale Marble",desc:"White stone for a city that intends to be remembered.",price:160,color:15855073},{id:"stone_granite",cat:"stone",name:"Grey Granite",desc:"Heavy, dark and almost impossible to break.",price:160,color:9672090},{id:"stone_sandstone",cat:"stone",name:"Desert Sandstone",desc:"Warm southern stone, carried north by conquest.",price:140,color:14599580},{id:"stone_blackiron",cat:"stone",name:"Black Iron",desc:"Walls darkened in the Black Forge. First clear: The Black Forge.",price:0,dungeon:"forge",color:5264475},{id:"sky_day",cat:"sky",name:"Clear Day",desc:"The clean northern light of Vareth.",price:0,free:!0,theme:"day"},{id:"sky_golden",cat:"sky",name:"Golden Hour",desc:"Long shadows, warm stone, and the feeling that something is about to begin.",price:220,theme:"golden"},{id:"sky_storm",cat:"sky",name:"Siege Storm",desc:"Heavy clouds and hard rain. Perfect weather for a siege.",price:220,theme:"storm"},{id:"sky_dawn",cat:"sky",name:"Rose Dawn",desc:"A soft pink morning after a long night on the walls.",price:180,theme:"dawn"},{id:"sky_crow",cat:"sky",name:"Crow Moon",desc:"A violet sky full of wings. First clear: Crowspire Crypt.",price:0,dungeon:"crypt",theme:"crow"},{id:"captain_steel",cat:"captain",name:"Steel & Blue",desc:"Aldric's trusted campaign armour.",price:0,free:!0,palette:"steel"},{id:"captain_gold",cat:"captain",name:"Gilded Captain",desc:"Gold plate for the commander of a growing kingdom.",price:200,palette:"gold"},{id:"captain_crimson",cat:"captain",name:"Crimson Blade",desc:"Red cloak, dark steel, and absolutely no subtlety.",price:180,palette:"crimson"},{id:"captain_obsidian",cat:"captain",name:"Obsidian Watch",desc:"Black armour that seems to swallow torchlight.",price:240,palette:"obsidian"},{id:"captain_ashen",cat:"captain",name:"Ash King's Bane",desc:"Armour reforged from the Ash King's shell. First clear: Vault of the Ash King.",price:0,dungeon:"vault",palette:"ashen"}];function G0(r){return lh.filter(t=>t.cat===r)}function Ze(r){return lh.find(t=>t.id===r)||null}const Vi={livery:"livery_ashbourne",roof:"roof_terracotta",stone:"stone_limestone",sky:"sky_day",captain:"captain_steel"},Yi={name:"The Sovereign's Oath",price:"$4.99 / month",crowns:200,days:30,benefits:["+20% resource production from every building","+10% damage from towers and siege engines","−25% gold cost for all repairs","+1 active city goal","Sun King livery included while active","200 Crowns granted on activation"]},As={steel:{tunic:3892101,cape:3100014,plate:11120820,trim:14267495,plume:12076595},gold:{tunic:8018979,cape:12095821,plate:14926452,trim:16770721,plume:16767083},crimson:{tunic:8137250,cape:9383718,plate:9259588,trim:14723192,plume:15764061},obsidian:{tunic:2369072,cape:1776932,plate:4869721,trim:9080732,plume:9399236},ashen:{tunic:3874599,cape:4857125,plate:6967623,trim:13666906,plume:16742986}},ch=[{id:"pouch",name:"Pouch of Crowns",crowns:500,price:"$1.99"},{id:"chest",name:"War Chest",crowns:1200,price:"$4.99"},{id:"vault",name:"Royal Vault",crowns:2600,price:"$9.99"}],kr=[{x:2,z:-42,camp:"north"},{x:39,z:14,camp:"east"},{x:-38,z:17,camp:"west"}],ys=[{name:"Camp",min:0,reward:null},{name:"Hamlet",min:45,reward:{gold:120,wood:100,stone:100,food:60}},{name:"Village",min:110,reward:{gold:200,wood:160,stone:160,food:90}},{name:"Town",min:195,reward:{gold:300,wood:220,stone:220,food:120}},{name:"Bastion",min:300,reward:{gold:420,wood:300,stone:300,food:160}},{name:"Castle",min:430,reward:{gold:560,wood:380,stone:380,food:200}},{name:"Citadel",min:590,reward:{gold:800,wood:500,stone:500,food:260}}],wr=[{id:"house2",title:"Raise 2 houses for your people",goal:{kind:"count",type:"house",n:2},reward:{wood:70,stone:50}},{id:"farm1",title:"Build a farm and windmill",goal:{kind:"count",type:"farm",n:1},reward:{food:80,gold:40}},{id:"wall10",title:"Lay 10 stone wall segments",goal:{kind:"count",type:"wall",n:10},reward:{stone:90,gold:30}},{id:"tower1",title:"Raise an archer tower",goal:{kind:"count",type:"tower",n:1},reward:{wood:60,gold:50}},{id:"road14",title:"Pave 14 stretches of road",goal:{kind:"roads",n:14},reward:{gold:50,stone:50}},{id:"market1",title:"Open a market",goal:{kind:"count",type:"market",n:1},reward:{gold:90,food:30}},{id:"pop24",title:"Grow your population to 24",goal:{kind:"population",n:24},reward:{gold:100,wood:80}},{id:"upgrade2",title:"Upgrade any 2 buildings",goal:{kind:"upgrades",n:2},reward:{stone:120,wood:100}},{id:"tavern1",title:"Build a tavern for the garrison",goal:{kind:"count",type:"tavern",n:1},reward:{gold:80,food:70}},{id:"barracks1",title:"Build a barracks",goal:{kind:"count",type:"barracks",n:1},reward:{gold:110,food:60}},{id:"happy70",title:"Reach 70 happiness",goal:{kind:"happiness",n:70},reward:{gold:120,wood:80}},{id:"tower3",title:"Have 3 archer towers standing",goal:{kind:"count",type:"tower",n:3},reward:{stone:150,gold:90}},{id:"wave1",title:"Survive the first raid",goal:{kind:"wave",n:1},reward:{gold:140,wood:90,stone:90}},{id:"splendor150",title:"Reach 150 city splendor",goal:{kind:"splendor",n:150},reward:{gold:180,food:100}},{id:"ballista1",title:"Build a ballista",goal:{kind:"count",type:"ballista",n:1},reward:{gold:160,stone:100}},{id:"upgrade5",title:"Upgrade 5 buildings",goal:{kind:"upgrades",n:5},reward:{gold:220,stone:160}},{id:"wave3",title:"Survive the shield wall",goal:{kind:"wave",n:3},reward:{gold:250,wood:160,stone:160}},{id:"pop50",title:"Grow your population to 50",goal:{kind:"population",n:50},reward:{gold:260,food:160}},{id:"catapult1",title:"Build a catapult",goal:{kind:"count",type:"catapult",n:1},reward:{gold:280,stone:180}},{id:"wave5",title:"Break the northern fury",goal:{kind:"wave",n:5},reward:{gold:340,wood:220,stone:220}},{id:"splendor400",title:"Reach 400 city splendor",goal:{kind:"splendor",n:400},reward:{gold:420,food:240}},{id:"wave8",title:"Defeat Warlord Gruk",goal:{kind:"wave",n:8},reward:{gold:700,wood:400,stone:400}}],V0=[{id:"fletch",name:"Fletching",icon:"i-volley",desc:"+25% damage from every tower and siege engine."},{id:"mason",name:"Masonry",icon:"i-wall",desc:"+30% max HP for every structure. Walls hold longer."},{id:"bounty",name:"Bountiful Land",icon:"i-farm",desc:"+40% resource production from all city buildings."},{id:"rapid",name:"Rapid Fire",icon:"i-tower",desc:"+20% fire rate for towers and siege engines."},{id:"chest",name:"War Chest",icon:"i-coin",desc:"Gain 300 gold, 250 wood and 250 stone immediately."},{id:"medic",name:"Field Medics",icon:"i-repair",desc:"Your captain and garrison heal fully, and gain +40% HP."},{id:"siege",name:"Siege Engineers",icon:"i-catapult",desc:"+35% damage from ballistas and catapults."},{id:"stone",name:"Stonemason",icon:"i-stone",desc:"Walls and gates cost 25% less stone."},{id:"hero",name:"Oath of the Captain",icon:"i-captain",desc:"Captain Aldric gains +50% damage and +30% HP."},{id:"tax",name:"Tax Reform",icon:"i-market",desc:"Houses and markets produce +50% gold."}];function Lo(r){let t=0;for(let e=0;e<ys.length;e++)r>=ys[e].min&&(t=e);return{index:t,...ys[t],next:ys[t+1]||null}}function Sr(r,t=1){const e=he[r],n=t===1?1:Math.pow(1.95,t-1),i={};for(const[s,a]of Object.entries(e.cost))i[s]=Math.max(1,Math.round(a*n));return i}function W0(r){const t=he[r.type];if(!t.maxLevel||r.level>=t.maxLevel)return null;const e=Sr(r.type,r.level+1),n={};for(const[i,s]of Object.entries(e))n[i]=Math.max(1,Math.round(s*.85));return n.gold=(n.gold||0)+Math.round(35*r.level),n}function $0(r,t=1){const e=he[r];return Math.round(e.hp*(1+(t-1)*.45))}function Tr(r,t=1){const e=he[r];if(!e.production)return{};const n=1+(t-1)*.7,i={};for(const[s,a]of Object.entries(e.production))i[s]=a*n;return i}function Er(r,t=1){const e=he[r];return e.happiness?e.happiness*(1+(t-1)*.55):0}function pi(r,t=1){return(he[r].workers||0)+Math.max(0,t-1)}function hh(r,t=1){const e=he[r];return e.population?Math.round(e.population*(1+(t-1)*.75)):0}function Zo(r,t=1){const e=he[r];return e.garrison?e.garrison+(t-1):0}function Io(r,t=1){const e=he[r];return e.tower?{...e.tower,damage:e.tower.damage*(1+(t-1)*.55),range:e.tower.range+(t-1)*1.6}:null}function cn(r,t){return t*ge+r}function pr(r,t){const e=Math.floor((r+Te)/Gt),n=Math.floor((t+Te)/Gt);return{i:e,j:n}}function Fr(r){return Math.max(0,Math.min(ge-1,r))}const Pa=new Map;function rn(r,t={}){const e=`${r}|${t.roughness??.82}|${t.metalness??.02}|${t.flat??!0}|${t.emissive??0}|${t.emissiveIntensity??1}|${t.transparent??!1}|${t.opacity??1}|${t.side??0}`;if(Pa.has(e))return Pa.get(e);const n=new De({color:r,roughness:t.roughness??.82,metalness:t.metalness??.02,flatShading:t.flat??!0,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??wn});return Pa.set(e,n),n}function _c(r,t={}){return new Mn({color:r,transparent:t.transparent??!1,opacity:t.opacity??1,depthTest:t.depthTest??!0,depthWrite:t.depthWrite??!0,side:t.side??wn,toneMapped:t.toneMapped??!0})}function Ds(r,t,e={}){const n=new Wt(r,t);return(e.x!==void 0||e.y!==void 0||e.z!==void 0)&&n.position.set(e.x||0,e.y||0,e.z||0),e.rx&&(n.rotation.x=e.rx),e.ry&&(n.rotation.y=e.ry),e.rz&&(n.rotation.z=e.rz),e.cast!==!1&&(n.castShadow=!0),e.receive!==!1&&(n.receiveShadow=!0),e.scale&&n.scale.setScalar(e.scale),e.parent&&e.parent.add(n),n}function z(r,t,e,n,i,s=0,a=0,o=0,c={}){const l=c.mat||rn(i,c.matOpts),h=new Se(t,e,n);return Ds(h,l,{x:s,y:a,z:o,ry:c.ry,rx:c.rx,rz:c.rz,parent:r,cast:c.cast,receive:c.receive})}function me(r,t,e,n,i,s=0,a=0,o=0,c={}){const l=c.mat||rn(i,c.matOpts),h=new dn(t,e,n,c.seg||8,c.hseg||1,!1);return Ds(h,l,{x:s,y:a,z:o,ry:c.ry,rx:c.rx,rz:c.rz,parent:r,cast:c.cast,receive:c.receive})}function mn(r,t,e,n,i=0,s=0,a=0,o={}){const c=o.mat||rn(n,o.matOpts),l=new Rs(t,e,o.seg||8,1);return Ds(l,c,{x:i,y:s,z:a,ry:o.ry,rx:o.rx,rz:o.rz,parent:r,cast:o.cast,receive:o.receive})}function $e(r,t,e,n=0,i=0,s=0,a={}){const o=a.mat||rn(e,a.matOpts),c=new kn(t,a.detail??1);return Ds(c,o,{x:n,y:i,z:s,parent:r,scale:a.scale,cast:a.cast,receive:a.receive})}function La(r,t,e,n,i={}){const s=i.color??13222060,a=i.h??.52,o=i.w??.44,c=i.d??.38,l=i.n??5,h=rn(s,{roughness:.9}),d=t/l,u=e/l;for(let p=0;p<l;p++){const g=-t/2+d*(p+.5),v=-e/2+u*(p+.5);i.noNorth||z(r,o,a,c,s,g,n+a/2,-e/2+c/2,{mat:h}),i.noSouth||z(r,o,a,c,s,g,n+a/2,e/2-c/2,{mat:h}),i.noWest||z(r,c,a,o,s,-t/2+c/2,n+a/2,v,{mat:h}),i.noEast||z(r,c,a,o,s,t/2-c/2,n+a/2,v,{mat:h})}}function Hi(r,t,e,n,i,s,a,o,c={}){const l=t/2,h=e/2,d=new Float32Array([-l,0,-h,l,0,-h,0,n,-h,-l,0,h,0,n,h,l,0,h,-l,0,-h,0,n,-h,0,n,h,-l,0,-h,0,n,h,-l,0,h,l,0,-h,l,0,h,0,n,h,l,0,-h,0,n,h,0,n,-h]),u=new be;u.setAttribute("position",new we(d,3)),u.computeVertexNormals();const p=c.mat||rn(i,{roughness:.9});return Ds(u,p,{x:s,y:a,z:o,parent:r,ry:c.ry})}const yc={blue:{bg:"#244763",fg:"#e7c37a",emblem:"crown"},red:{bg:"#5f1f1b",fg:"#d9a441",emblem:"crown"},frost:{bg:"#2f5a72",fg:"#d6eef8",emblem:"snow"},ember:{bg:"#3a1616",fg:"#f08a5d",emblem:"flame"},verdant:{bg:"#1f3b2a",fg:"#b7d99a",emblem:"leaf"},sun:{bg:"#4a2e10",fg:"#ffd86b",emblem:"sun"},rat:{bg:"#3d3524",fg:"#c9b18a",emblem:"rat"}},Ia=new Map;function dh(r="blue"){const t=yc[r]?r:"blue";if(Ia.has(t))return Ia.get(t);const e=yc[t],n=document.createElement("canvas");n.width=64,n.height=96;const i=n.getContext("2d");i.fillStyle=e.bg,i.fillRect(0,0,64,96),i.strokeStyle=e.fg,i.lineWidth=4,i.strokeRect(5,5,54,86),i.fillStyle=e.fg;const s=()=>{i.beginPath(),i.moveTo(17,48),i.lineTo(17,33),i.lineTo(25,40),i.lineTo(32,26),i.lineTo(39,40),i.lineTo(47,33),i.lineTo(47,48),i.closePath(),i.fill(),i.fillRect(17,51,30,6)};if(e.emblem==="sun"){i.beginPath(),i.arc(32,42,11,0,Math.PI*2),i.fill();for(let o=0;o<10;o++){const c=o/10*Math.PI*2;i.save(),i.translate(32,42),i.rotate(c),i.fillRect(-1.4,-20,2.8,7),i.restore()}}else if(e.emblem==="snow"){i.lineWidth=3;for(let o=0;o<6;o++){const c=o/6*Math.PI*2;i.beginPath(),i.moveTo(32,42),i.lineTo(32+Math.cos(c)*16,42+Math.sin(c)*16),i.stroke(),i.beginPath(),i.arc(32+Math.cos(c)*11,42+Math.sin(c)*11,2.1,0,Math.PI*2),i.fill()}}else if(e.emblem==="flame")i.beginPath(),i.moveTo(32,24),i.bezierCurveTo(45,36,43,50,32,58),i.bezierCurveTo(21,50,19,36,32,24),i.fill(),i.fillStyle=e.bg,i.beginPath(),i.moveTo(32,39),i.bezierCurveTo(38,46,36,52,32,54),i.bezierCurveTo(28,52,26,46,32,39),i.fill();else if(e.emblem==="leaf"){i.beginPath(),i.moveTo(32,24),i.bezierCurveTo(49,34,45,54,32,59),i.bezierCurveTo(19,54,15,34,32,24),i.fill(),i.strokeStyle=e.bg,i.lineWidth=2,i.beginPath(),i.moveTo(32,28),i.lineTo(32,57),i.stroke();for(let o=0;o<4;o++)i.beginPath(),i.moveTo(32,35+o*5),i.lineTo(27-o,31+o*5),i.stroke(),i.beginPath(),i.moveTo(32,38+o*5),i.lineTo(37+o,34+o*5),i.stroke()}else e.emblem==="rat"?(i.beginPath(),i.arc(32,44,13,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(23,33,7,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(41,33,7,0,Math.PI*2),i.fill(),i.fillStyle=e.bg,i.beginPath(),i.arc(27,41,2,0,Math.PI*2),i.fill(),i.beginPath(),i.arc(37,41,2,0,Math.PI*2),i.fill(),i.fillStyle=e.fg,i.fillRect(30,48,4,3)):(s(),i.beginPath(),i.arc(32,68,5,0,Math.PI*2),i.fill());const a=new Yo(n);return a.colorSpace=Ue,a.anisotropy=4,Ia.set(t,a),a}function uh(r="blue",t=1){const e=new jt,n=me(e,.055*t,.075*t,3.4*t,5061418,0,1.7*t,0,{seg:5});n.castShadow=!1;const i=dh(r),s=new Fn(.92*t,1.35*t,6,1),a=new De({map:i,side:He,roughness:.92,metalness:0}),o=new Wt(s,a);return o.position.set(.48*t,2.6*t,0),o.castShadow=!1,e.add(o),{group:e,flag:o,base:s.attributes.position.array.slice(),phase:Math.random()*10}}function X0(){const r=document.createElement("canvas");r.width=128,r.height=128;const t=r.getContext("2d");t.fillStyle="#7f7d70",t.fillRect(0,0,128,128);const e=["#8d8a7c","#767467","#969384","#6f6d62","#858275"];for(let i=0;i<8;i++)for(let s=0;s<8;s++){const a=s*16+(i%2?8:0);t.fillStyle=e[(s*3+i*5)%e.length],t.beginPath();const o=a%128+(Math.random()*2-1),c=i*16+(Math.random()*2-1);t.roundRect(o+1,c+1,13,13,4),t.fill()}t.fillStyle="rgba(35,35,30,.12)";for(let i=0;i<140;i++)t.fillRect(Math.random()*128,Math.random()*128,1.4,1.4);const n=new Yo(r);return n.colorSpace=Ue,n.wrapS=n.wrapT=Cr,n.anisotropy=4,n}function bt(r,t){return r+Math.random()*(t-r)}function di(r,t,e){return Math.max(t,Math.min(e,r))}const tt={stone:13222319,stoneDark:10327428,stoneLight:14603712,plaster:15129020,timber:7031342,wood:8215095,woodDark:5586986,roof:11029304,roofDark:8534059,gold:14267495,iron:5857381},bc={day:{top:4028592,mid:10405597,horizon:15849128,bg:10405597,fog:12175812,hemiSky:12573166,hemiGround:5858116,hemi:1.15,sun:16770232,sunI:2.6,deep:2382704,shallow:5215907,cloud:16052196,cloudO:.92,foam:14149855},golden:{top:4939666,mid:12884614,horizon:16173434,bg:14266756,fog:13281157,hemiSky:15845275,hemiGround:5984312,hemi:1.08,sun:16757860,sunI:2.9,deep:2772062,shallow:6064780,cloud:16766884,cloudO:.9,foam:15849134},storm:{top:2831426,mid:6187892,horizon:9345686,bg:6187892,fog:7174780,hemiSky:9544882,hemiGround:4015680,hemi:.86,sun:14081506,sunI:1.45,deep:1848641,shallow:3891818,cloud:8161425,cloudO:.96,foam:12833487},dawn:{top:6057885,mid:13867682,horizon:16767408,bg:14132909,fog:12821412,hemiSky:15254731,hemiGround:6052420,hemi:1.05,sun:16763041,sunI:2.35,deep:2903395,shallow:7048860,cloud:16769236,cloudO:.9,foam:15653074},crow:{top:2104378,mid:4928864,horizon:10116974,bg:3812173,fog:4864600,hemiSky:9072808,hemiGround:2894131,hemi:.9,sun:14262468,sunI:1.75,deep:1909816,shallow:4082280,cloud:5719397,cloudO:.94,foam:12166852}};function q0(r,t){const e=Math.min(window.innerWidth,window.innerHeight)<700,n={value:0};r.fog=new $o(12175812,150,330);const i=new Yd(12573166,5858116,1.15);r.add(i);const s=new Wl(16770232,2.6);s.position.set(-48,62,34),s.castShadow=!0;const a=s.shadow.camera;a.left=-62,a.right=62,a.top=62,a.bottom=-62,a.near=1,a.far=180,s.shadow.mapSize.set(e?1024:2048,e?1024:2048),s.shadow.bias=-7e-4,s.shadow.normalBias=.04,r.add(s),r.add(s.target);const o=new Wl(10207960,.45);o.position.set(40,20,-45),r.add(o);const c=new un({side:Ge,depthWrite:!1,uniforms:{uTop:{value:new Mt(4028592)},uMid:{value:new Mt(10405597)},uHorizon:{value:new Mt(15849128)},uSun:{value:new R(-48,62,34).normalize()}},vertexShader:`
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,fragmentShader:`
      uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHorizon; uniform vec3 uSun;
      varying vec3 vPos;
      void main() {
        float h = clamp(vPos.y, -0.15, 1.0);
        vec3 col = mix(uHorizon, uMid, smoothstep(-0.02, 0.28, h));
        col = mix(col, uTop, smoothstep(0.25, 0.85, h));
        float sunDot = max(dot(normalize(vPos), normalize(uSun)), 0.0);
        col += vec3(1.0, 0.78, 0.48) * pow(sunDot, 90.0) * 0.65;
        col += vec3(1.0, 0.86, 0.64) * pow(sunDot, 8.0) * 0.18;
        gl_FragColor = vec4(col, 1.0);
      }`}),l=new Wt(new Es(360,24,16),c);l.frustumCulled=!1,r.add(l);const h=Y0();r.add(h);const d=j0();r.add(d);const u=new ns(47.5,62,64),p=new Mn({color:14149855,transparent:!0,opacity:.16,side:He,depthWrite:!1}),g=new Wt(u,p);g.rotation.x=-Math.PI/2,g.position.y=-7.32,r.add(g);const v=new un({uniforms:{uTime:n,uDeep:{value:new Mt(2382704)},uShallow:{value:new Mt(5215907)},uSun:{value:new R(-48,62,34)}},vertexShader:`
      uniform float uTime;
      varying vec3 vWorld;
      varying float vWave;
      void main() {
        vec3 p = position;
        float w = sin(p.x * 0.11 + uTime * 0.55) * 0.14 + sin(p.y * 0.18 - uTime * 0.42) * 0.1 + sin((p.x + p.y) * 0.27 + uTime * 0.9) * 0.05;
        p.z += w;
        vWave = w;
        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,fragmentShader:`
      uniform float uTime; uniform vec3 uDeep; uniform vec3 uShallow; uniform vec3 uSun;
      varying vec3 vWorld; varying float vWave;
      void main() {
        float bands = sin(vWorld.x * 0.32 + uTime * 0.7) * sin(vWorld.z * 0.27 - uTime * 0.5);
        vec3 col = mix(uDeep, uShallow, 0.35 + bands * 0.13 + vWave * 0.35);
        vec3 viewDir = normalize(cameraPosition - vWorld);
        float fres = pow(1.0 - max(viewDir.y, 0.0), 3.0);
        col = mix(col, vec3(0.58, 0.79, 0.83), fres * 0.32);
        vec3 sunDir = normalize(uSun);
        float glint = pow(max(dot(reflect(-sunDir, vec3(0.0, 1.0, 0.0)), viewDir), 0.0), 72.0);
        col += vec3(1.0, 0.86, 0.62) * glint * 0.45;
        gl_FragColor = vec4(col, 1.0);
      }`}),m=new Wt(new Fn(520,520,96,96),v);m.rotation.x=-Math.PI/2,m.position.y=-7.65,m.receiveShadow=!1,r.add(m);const f=[];let w=0;for(;f.length<(e?48:74)&&w++<1200;){const at=Math.random()*Math.PI*2,mt=bt(34,46.5),dt=Math.cos(at)*mt,Dt=Math.sin(at)*mt;Math.abs(dt)<32&&Math.abs(Dt)<32||kr.some($=>Math.hypot(dt-$.x,Dt-$.z)<8)||f.push({x:dt,z:Dt,s:bt(.75,1.3)})}const S=new dn(.16,.28,2.2,5),_=new qn(S,rn(6965805,{roughness:.95}),f.length),C=new kn(1.7,0),A=new qn(C,rn(6063944,{roughness:.95}),f.length*2),E=new ue,L=[6063944,7247954,5208898,8036698];f.forEach((at,mt)=>{E.position.set(at.x,1.1*at.s,at.z),E.rotation.set(0,Math.random()*6,0),E.scale.setScalar(at.s),E.updateMatrix(),_.setMatrixAt(mt,E.matrix);const dt=new Mt(L[mt%L.length]);A.setColorAt(mt*2,dt),E.position.set(at.x,2.9*at.s,at.z),E.scale.set(at.s*bt(.9,1.25),at.s*bt(.95,1.3),at.s*bt(.9,1.25)),E.updateMatrix(),A.setMatrixAt(mt*2,E.matrix),E.position.set(at.x+.3,4.1*at.s,at.z-.1),E.scale.setScalar(at.s*bt(.65,.9)),E.updateMatrix(),A.setMatrixAt(mt*2+1,E.matrix),A.setColorAt(mt*2+1,dt)}),_.castShadow=!0,_.receiveShadow=!0,A.castShadow=!0,A.receiveShadow=!0,A.instanceColor.needsUpdate=!0,r.add(_,A);const M=30,b=new qn(new Vr(1,0),rn(9735552,{roughness:.95}),M);for(let at=0;at<M;at++){const mt=Math.random()*Math.PI*2,dt=bt(31,46);E.position.set(Math.cos(mt)*dt,bt(.1,.4),Math.sin(mt)*dt),E.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),E.scale.set(bt(.6,1.9),bt(.5,1.1),bt(.6,1.7)),E.updateMatrix(),b.setMatrixAt(at,E.matrix)}b.castShadow=!0,b.receiveShadow=!0,r.add(b);const P=150,k=new qn(new kn(.11,0),new De({roughness:.9,vertexColors:!1}),P),H=[15255406,14649994,13219558,15918788];for(let at=0;at<P;at++){const mt=Math.random()*Math.PI*2,dt=bt(31,46),Dt=Math.cos(mt)*dt,$=Math.sin(mt)*dt;E.position.set(Dt,.18+Math.random()*.08,$),E.rotation.set(0,Math.random()*3,0),E.scale.setScalar(bt(.7,1.6)),E.updateMatrix(),k.setMatrixAt(at,E.matrix),k.setColorAt(at,new Mt(H[at%H.length]))}k.instanceColor.needsUpdate=!0,r.add(k);const Y=[],W=new De({color:16052196,roughness:1,transparent:!0,opacity:.92,flatShading:!0});for(let at=0;at<9;at++){const mt=new jt,dt=3+at%3;for(let K=0;K<dt;K++){const xt=bt(2.4,5.2),Nt=new Wt(new kn(xt,1),W);Nt.position.set(bt(-4,4),bt(-.7,.7),bt(-3,3)),Nt.scale.y=bt(.45,.7),mt.add(Nt)}const Dt=at/9*Math.PI*2+bt(-.3,.3),$=bt(85,170);mt.position.set(Math.cos(Dt)*$,bt(26,44),Math.sin(Dt)*$),mt.scale.setScalar(bt(.7,1.4)),mt.userData.speed=bt(.4,1.1),r.add(mt),Y.push(mt)}for(let at=0;at<3;at++){const mt=1.1+at*2.1,dt=150+at*25,Dt=new jt,$=mn(Dt,bt(10,16),bt(9,15),7044451,0,2,0,{seg:7,matOpts:{roughness:1}});$.scale.z=1.4;const K=me(Dt,9,11,1,7312470,0,7,0,{seg:7});K.scale.z=1.3,mn(Dt,2.6,5,5143108,bt(-2,2),11,bt(-2,2),{seg:5}),Dt.position.set(Math.cos(mt)*dt,-8,Math.sin(mt)*dt),Dt.rotation.y=bt(0,5),r.add(Dt)}const q=kr.map((at,mt)=>K0(r,at,mt)),Z=[],G=new qo({color:2896438,transparent:!0,opacity:.7});for(let at=0;at<4;at++){const mt=new be;mt.setAttribute("position",new le([-.8,.3,0,0,0,0,.8,.3,0],3));const dt=new Jc(mt,G);dt.userData={a:Math.random()*6,r:bt(55,85),y:bt(18,30),speed:bt(.03,.07)},r.add(dt),Z.push(dt)}let ct="day";function gt(at){const mt=bc[at]?at:"day";if(mt===ct)return mt;const dt=bc[mt];return ct=mt,c.uniforms.uTop.value.setHex(dt.top),c.uniforms.uMid.value.setHex(dt.mid),c.uniforms.uHorizon.value.setHex(dt.horizon),r.background=new Mt(dt.bg),r.fog&&r.fog.color.setHex(dt.fog),i.color.setHex(dt.hemiSky),i.groundColor.setHex(dt.hemiGround),i.intensity=dt.hemi,s.color.setHex(dt.sun),s.intensity=dt.sunI,o.intensity=mt==="storm"?.22:mt==="crow"?.5:.45,v.uniforms.uDeep.value.setHex(dt.deep),v.uniforms.uShallow.value.setHex(dt.shallow),W.color.setHex(dt.cloud),W.opacity=dt.cloudO,p.color.setHex(dt.foam),mt}function Rt(at,mt){n.value=mt,p.opacity=.13+Math.sin(mt*.5)*.035;for(const dt of Y)dt.position.x+=dt.userData.speed*at,dt.position.x>200&&(dt.position.x=-200);for(const dt of Z){const Dt=dt.userData;Dt.a+=Dt.speed*at,dt.position.set(Math.cos(Dt.a)*Dt.r,Dt.y+Math.sin(mt*.7+Dt.a)*1.5,Math.sin(Dt.a)*Dt.r),dt.rotation.y=-Dt.a+Math.PI/2}for(const dt of q)dt.update(at,mt)}return{update:Rt,sun:s,water:m,camps:q,top:h,isMobile:e,applySkyTheme:gt,get skyTheme(){return ct}}}function Y0(){const e=[],n=[],i=[],s=l=>49.5+Math.sin(l*3.1)*1.4+Math.sin(l*5.7+1.1)*.9+Math.sin(l*9.3+2)*.45;e.push(0,.02,0),n.push(.44,.58,.31);for(let l=1;l<=12;l++){const h=l/12;for(let d=0;d<72;d++){const u=d/72*Math.PI*2,p=s(u)*h,g=Math.cos(u)*p,v=Math.sin(u)*p,m=Math.max(0,(h-.88)/.12),f=.02+m*m*.55+(Math.sin(u*7.1)*.5+.5)*.1*m;e.push(g,f,v);const w=Math.sin(g*.24+v*.13)*.5+.5,S=Math.sin(g*.08-v*.22+1.4)*.5+.5,_=new Mt(7247697).lerp(new Mt(8694117),w*.55+S*.25);n.push(_.r,_.g,_.b)}}for(let l=0;l<72;l++)i.push(0,1+(l+1)%72,1+l);for(let l=1;l<12;l++)for(let h=0;h<72;h++){const d=1+(l-1)*72+h,u=1+(l-1)*72+(h+1)%72,p=1+l*72+h,g=1+l*72+(h+1)%72;i.push(d,u,p,u,g,p)}const a=new be;a.setAttribute("position",new le(e,3)),a.setAttribute("color",new le(n,3)),a.setIndex(i),a.computeVertexNormals();const o=new De({vertexColors:!0,roughness:.97,metalness:0}),c=new Wt(a,o);return c.receiveShadow=!0,c}function j0(){const t=[{r:1,y:.02,color:new Mt(7634255)},{r:.99,y:-1.6,color:new Mt(9205598)},{r:1.02,y:-4.6,color:new Mt(7758156)},{r:.96,y:-8.2,color:new Mt(6706498)},{r:.9,y:-13.5,color:new Mt(5063992)}],e=[],n=[],i=[],s=l=>49.5+Math.sin(l*3.1)*1.4+Math.sin(l*5.7+1.1)*.9+Math.sin(l*9.3+2)*.45;for(let l=0;l<t.length;l++)for(let h=0;h<72;h++){const d=h/72*Math.PI*2,u=s(d)*t[l].r*(1+Math.sin(d*11+l*1.7)*.012);e.push(Math.cos(d)*u,t[l].y,Math.sin(d)*u);const p=t[l].color.clone(),g=Math.sin(d*9+l)*.06;p.offsetHSL(0,0,g),n.push(p.r,p.g,p.b)}for(let l=0;l<t.length-1;l++)for(let h=0;h<72;h++){const d=l*72+h,u=l*72+(h+1)%72,p=(l+1)*72+h,g=(l+1)*72+(h+1)%72;i.push(d,u,p,u,g,p)}const a=new be;a.setAttribute("position",new le(e,3)),a.setAttribute("color",new le(n,3)),a.setIndex(i),a.computeVertexNormals();const o=new De({vertexColors:!0,roughness:1,flatShading:!0}),c=new Wt(a,o);return c.receiveShadow=!0,c}function K0(r,t,e){const n=new jt;n.position.set(t.x,0,t.z),n.rotation.y=Math.atan2(-t.x,-t.z)+Math.PI;const i=uh("red",1.05);i.group.position.set(4.5,0,1),n.add(i.group);const s=[7297862,6114363,8021068];for(let l=0;l<3;l++){const h=new jt;h.position.set(-3.5+l*3.4,0,-1.2+l%2*2.5),h.rotation.y=bt(-.5,.5),mn(h,1.9,2.7,s[l],0,1.35,0,{seg:4}),z(h,.9,1.45,.06,3418141,0,.7,1.05),n.add(h)}const a=new jt;a.position.set(0,0,3.5);for(let l=0;l<5;l++){const h=l/5*Math.PI*2;$e(a,.34,7037528,Math.cos(h)*.8,.2,Math.sin(h)*.8)}const o=mn(a,.4,1.2,16751434,0,.75,0,{seg:5});o.material=new Mn({color:16753226,transparent:!0,opacity:.9}),n.add(a);const c=new Kd(16747578,6,12,2);return c.position.set(0,1.2,3.5),n.add(c),r.add(n),{group:n,update(l,h){o.scale.setScalar(.85+Math.sin(h*9+e)*.16),c.intensity=5+Math.sin(h*12+e*2)*1.6,i.flag.rotation.y=Math.sin(h*2.1+e)*.18}}}function fh(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new be;let l=0;for(let h=0;h<r.length;++h){const d=r[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const d=[];for(let u=0;u<r.length;++u){const p=r[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=r[u].attributes.position.count}c.setIndex(d)}for(const h in s){const d=Mc(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][u]);const g=Mc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Mc(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){const h=r[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new we(a,e,n);let c=0;for(let l=0;l<r.length;++l){const h=r[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const We=520;class Z0{constructor(t){this.positions=new Float32Array(We*3),this.colors=new Float32Array(We*3),this.sizes=new Float32Array(We),this.alphas=new Float32Array(We),this.vel=new Float32Array(We*3),this.life=new Float32Array(We),this.maxLife=new Float32Array(We),this.gravity=new Float32Array(We),this.drag=new Float32Array(We),this.baseSize=new Float32Array(We),this.cursor=0,this.active=0;const e=new be;e.setAttribute("position",new we(this.positions,3)),e.setAttribute("aColor",new we(this.colors,3)),e.setAttribute("aSize",new we(this.sizes,1)),e.setAttribute("aAlpha",new we(this.alphas,1)),e.setDrawRange(0,0);const n=new un({transparent:!0,depthWrite:!1,vertexShader:`
        attribute float aSize;
        attribute float aAlpha;
        attribute vec3 aColor;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = aColor; vAlpha = aAlpha;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * (300.0 / max(1.0, -mv.z));
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.08, d) * vAlpha;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vColor, a);
        }`});this.points=new Wd(e,n),this.points.frustumCulled=!1,this.points.renderOrder=20,t.add(this.points),this.geo=e}spawn(t,e,n,i={}){const s=this.cursor;this.cursor=(this.cursor+1)%We;const a=s*3;this.positions[a]=t+(i.jitter??0)*(Math.random()-.5),this.positions[a+1]=e+(i.jitter??0)*.5*Math.random(),this.positions[a+2]=n+(i.jitter??0)*(Math.random()-.5);const o=i.speed??1,c=i.up??.5;this.vel[a]=(Math.random()-.5)*o,this.vel[a+1]=(Math.random()*.7+c)*o,this.vel[a+2]=(Math.random()-.5)*o;const l=new Mt(i.color??16777215),h=i.colorJitter??.12;this.colors[a]=l.r*bt(1-h,1+h),this.colors[a+1]=l.g*bt(1-h,1+h),this.colors[a+2]=l.b*bt(1-h,1+h);const d=i.life??1;return this.life[s]=d,this.maxLife[s]=d,this.gravity[s]=i.gravity??-2,this.drag[s]=i.drag??.8,this.baseSize[s]=i.size??6,this.sizes[s]=this.baseSize[s],this.alphas[s]=i.alpha??1,this.active=Math.min(We,this.active+1),s}burst(t,e={}){const n=e.count??10;for(let i=0;i<n;i++)this.spawn(t.x,t.y,t.z,{...e,speed:(e.speed??2)*bt(.45,1.25),size:(e.size??8)*bt(.55,1.35),life:(e.life??1)*bt(.6,1.25),up:e.up??.4})}update(t){if(!this.active)return;let e=0;for(let n=0;n<We;n++){if(this.life[n]<=0){this.alphas[n]!==0&&(this.alphas[n]=0);continue}this.life[n]-=t;const i=n*3,s=Math.max(0,this.life[n]/this.maxLife[n]);this.vel[i+1]+=this.gravity[n]*t;const a=Math.exp(-this.drag[n]*t);this.vel[i]*=a,this.vel[i+2]*=a,this.positions[i]+=this.vel[i]*t,this.positions[i+1]+=this.vel[i+1]*t,this.positions[i+2]+=this.vel[i+2]*t,this.positions[i+1]<.06&&(this.positions[i+1]=.06,this.vel[i+1]*=-.25),this.sizes[n]=this.baseSize[n]*(.5+s*.8),this.alphas[n]=s<.25?s/.25:Math.min(1,s*1.4),e++}this.active=e,this.geo.setDrawRange(0,We),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.aColor.needsUpdate=!0,this.geo.attributes.aSize.needsUpdate=!0,this.geo.attributes.aAlpha.needsUpdate=!0}}function vn(r,t,e=12563612,n=18,i=2.4){r.burst(t,{count:n,color:e,speed:i,life:1.15,size:10,gravity:-1.2,drag:1.8,up:.25,alpha:.75})}function Uo(r,t,e=16765562,n=12){r.burst(t,{count:n,color:e,speed:4,life:.6,size:5,gravity:-6,drag:.6,up:.6,alpha:1})}function Ar(r,t,e=9318183,n=10){r.burst(t,{count:n,color:e,speed:2.8,life:.7,size:6,gravity:-7,drag:.5,up:.5,alpha:.9})}function J0(r,t,e=20){r.burst(t,{count:e,color:16747578,speed:3.2,life:1.3,size:12,gravity:1.4,drag:1,up:.8,alpha:.85}),r.burst(t,{count:Math.round(e*.5),color:16765562,speed:2,life:.5,size:6,gravity:-2,drag:.8,up:.4,alpha:1})}class Q0{constructor(t){this.scene=t,this.items=[],this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=64,this.ctx=this.canvas.getContext("2d")}spawn(t,e,n="#f2e6ca",i=30){const s=document.createElement("canvas");s.width=256,s.height=64;const a=s.getContext("2d");a.font=`700 ${i}px Georgia, serif`,a.textAlign="center",a.textBaseline="middle",a.lineWidth=6,a.strokeStyle="rgba(10,12,14,.65)",a.strokeText(t,128,34),a.fillStyle=n,a.fillText(t,128,34);const o=new Yo(s);o.colorSpace=Ue;const c=new Kc({map:o,transparent:!0,depthTest:!1,depthWrite:!1}),l=new kd(c);l.position.copy(e),l.scale.set(4,1,1),l.renderOrder=50,this.scene.add(l),this.items.push({sprite:l,life:1.4,vy:1.4,mat:c,tex:o})}update(t){for(let e=this.items.length-1;e>=0;e--){const n=this.items[e];n.life-=t,n.sprite.position.y+=n.vy*t,n.vy*=.97,n.mat.opacity=Math.max(0,Math.min(1,n.life*1.8)),n.life<=0&&(this.scene.remove(n.sprite),n.mat.dispose(),n.tex.dispose(),this.items.splice(e,1))}}}const tg=new Set([12037786,14077368,13156267,14998470,14472126,13616818,13090216,13222319,10327428,14603712,13616559,10985099,14735039,14209211,12830146,12366752,10130050]),eg=new Set([11029304,8534059,9259829,8079932,7227952,10306612]),Ua=new Map;function Wn(r,t,e,n,i,s,a){const o=new Se(r,t,e);o.translate(n,i,s);const c=new Mt(a),l=o.attributes.position.count,h=new Float32Array(l*3);for(let d=0;d<l;d++)h[d*3]=c.r,h[d*3+1]=c.g,h[d*3+2]=c.b;return o.setAttribute("color",new we(h,3)),o}function ng(r){if(Ua.has(r))return Ua.get(r);const t=[];t.push(Wn(Gt*1.01,.55,Gt*1.01,0,.275,0,12037786)),t.push(Wn(Gt*.98,2.1,Gt*.98,0,1.6,0,14077368)),t.push(Wn(Gt*1,.22,Gt*1,0,2.76,0,13156267));const e=[14998470,14472126],n=(a,o)=>{const c=a==="n"||a==="s"?Gt:.34,l=a==="n"||a==="s"?.34:Gt,h=a==="e"?Gt/2-.09:a==="w"?-Gt/2+.09:0,d=a==="n"?-Gt/2+.09:a==="s"?Gt/2-.09:0;t.push(Wn(c,.5,l,h,3.1,d,e[o%2]));const u=a==="n"||a==="s"?Gt:.18,p=a==="n"||a==="s"?.18:Gt,g=a==="e"?Gt/2-.36:a==="w"?-Gt/2+.36:0,v=a==="n"?-Gt/2+.36:a==="s"?Gt/2-.36:0;t.push(Wn(u,.3,p,g,2.93,v,13616818));const m=4;for(let f=0;f<m;f++){const w=-Gt/2+Gt/(m+.2)*(f+.6)+.1;a==="n"||a==="s"?t.push(Wn(.4,.48,.32,w,3.58,d,e[(f+o)%2])):t.push(Wn(.32,.48,.4,h,3.58,w,e[(f+o)%2]))}};let i=0;if(r&1||n("n",i++),r&2||n("e",i++),r&4||n("s",i++),r&8||n("w",i++),r===0)for(const[a,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.push(Wn(.38,2.7,.38,a*(Gt/2-.02),1.35,o*(Gt/2-.02),13090216));const s=fh(t,!1);return t.forEach(a=>a.dispose()),Ua.set(r,s),s}class ig{constructor(t,e,n){this.scene=t,this.fx=e,this.audio=n,this.game=null,this.structures=[],this.byId=new Map,this.nextId=1,this.cells=new Array(ge*ge).fill(null),this.roads=new Map,this.banners=[],this.windmills=[],this.bonuses={masonry:0},this.wallDirty=!0,this.wallInstances=[],this.roadMesh=null,this.roadDirty=!0,this.selection=null,this.selectedRing=this.makeSelectionRing(),this.ghost=this.makeGhost(),this.fireTimer=0,this.time=0,this.skins={...Vi},this.bannerKind="blue",this.roofColor=null,this.roofDarkColor=null,this.stoneColor=16777215,this.tintCache=new Map,this.initWalls(),this.initRoads()}initWalls(){const t=new De({vertexColors:!0,roughness:.92,metalness:.02,flatShading:!0});for(let e=0;e<16;e++){const n=ng(e),i=new qn(n,t,260);i.count=0,i.instanceMatrix.setUsage(Dr),i.castShadow=!0,i.receiveShadow=!0,i.frustumCulled=!1,i.userData.mask=e,this.scene.add(i),this.wallInstances.push(i)}}initRoads(){const t=X0(),e=new De({map:t,roughness:.95,metalness:.01}),n=new Se(Gt*.985,.11,Gt*.985);this.roadMesh=new qn(n,e,ge*ge),this.roadMesh.count=0,this.roadMesh.instanceMatrix.setUsage(Dr),this.roadMesh.receiveShadow=!0,this.roadMesh.castShadow=!1,this.roadMesh.frustumCulled=!1,this.scene.add(this.roadMesh)}rebuildWalls(){const t=Array.from({length:16},()=>[]);for(const i of this.structures)i.type==="wall"&&t[this.wallMask(i.i,i.j)].push(i);const e=new ue,n=new Mt;for(let i=0;i<16;i++){const s=this.wallInstances[i],a=t[i];s.count=a.length,a.forEach((o,c)=>{const l=this.cellCenter(o.i,o.j);e.position.set(l.x,0,l.z),e.rotation.set(0,0,0),e.scale.set(1,1,1),e.updateMatrix(),s.setMatrixAt(c,e.matrix);const h=o.hp/o.maxHp,d=.78+o.id*37%13/60;n.setRGB(d*(.55+h*.45),d*(.5+h*.5),d*(.46+h*.5)),s.setColorAt(c,n),o.wallSlot={mesh:s,index:c}}),s.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0)}this.wallDirty=!1}rebuildRoads(){const t=new ue;let e=0;for(const n of this.roads.values()){const i=this.cellCenter(n.i,n.j);t.position.set(i.x,.075,i.z),t.rotation.set(0,0,0),t.scale.set(1,1,1),t.updateMatrix(),this.roadMesh.setMatrixAt(e++,t.matrix)}this.roadMesh.count=e,this.roadMesh.instanceMatrix.needsUpdate=!0,this.roadDirty=!1}wallMask(t,e){let n=0;return this.isWall(t,e-1)&&(n|=1),this.isWall(t+1,e)&&(n|=2),this.isWall(t,e+1)&&(n|=4),this.isWall(t-1,e)&&(n|=8),n}isWall(t,e){if(t<0||e<0||t>=ge||e>=ge)return!1;const n=this.cells[cn(t,e)];return!!n&&n.type==="wall"}updateWallColor(t){if(!t.wallSlot)return;const{mesh:e,index:n}=t.wallSlot,i=new Mt,s=t.hp/t.maxHp,a=.78+t.id*37%13/60;i.setRGB(a*(.55+s*.45),a*(.5+s*.5),a*(.46+s*.5)),e.setColorAt(n,i),e.instanceColor&&(e.instanceColor.needsUpdate=!0)}cellCenter(t,e){return{x:(t+.5)*Gt-Te,z:(e+.5)*Gt-Te}}centerOf(t){return this.cellCenter(t.i+(t.w-1)/2,t.j+(t.h-1)/2)}getStructureAt(t,e){return t<0||e<0||t>=ge||e>=ge?null:this.cells[cn(t,e)]}getStructureAtWorld(t,e){const n=Math.floor((t+Te)/Gt),i=Math.floor((e+Te)/Gt);return this.getStructureAt(n,i)}canPlace(t,e,n){const i=he[t];if(!i)return{ok:!1,reason:"Unknown building"};if(!i.road&&this.structures.length>=140)return{ok:!1,reason:"Castle is at capacity"};if(e<0||n<0||e+i.w>ge||n+i.h>ge)return{ok:!1,reason:"Outside the island"};if(i.road)return this.roads.has(cn(e,n))?{ok:!1,reason:"Road already paved"}:this.cells[cn(e,n)]?{ok:!1,reason:"Blocked by a building"}:{ok:!0};for(let s=0;s<i.w;s++)for(let a=0;a<i.h;a++)if(this.cells[cn(e+s,n+a)])return{ok:!1,reason:"Something is already built here"};if(t!=="wall"&&t!=="gate"&&t!=="tower")for(let s=-1;s<=i.w;s++)for(let a=-1;a<=i.h;a++){if(s>=0&&s<i.w&&a>=0&&a<i.h)continue;const o=this.getStructureAt(e+s,n+a);if(o&&o.type==="keep")return{ok:!1,reason:"Leave room around the keep"}}return{ok:!0}}place(t,e,n,i={}){const s=he[t];if(!s)return null;if(s.road)return this.paintRoad(e,n,i);if(!i.force&&!this.canPlace(t,e,n).ok)return null;const a=i.level||1,o={id:this.nextId++,type:t,i:e,j:n,w:s.w,h:s.h,level:a,maxHp:this.calcMaxHp(t,a),hp:i.hp??this.calcMaxHp(t,a),group:null,bar:null,height:4,aimGroup:null,arm:null,muzzleY:2,smokeTimer:0,spawnAnim:i.animate===!1?1:0,selected:!1,wallSlot:null};i.hp!=null&&(o.hp=Math.min(o.hp,o.maxHp));for(let h=0;h<s.w;h++)for(let d=0;d<s.h;d++)this.cells[cn(e+h,n+d)]=o;let c=!1;for(let h=0;h<s.w;h++)for(let d=0;d<s.h;d++)this.roads.delete(cn(e+h,n+d))&&(c=!0);c&&(this.roadDirty=!0);const l=this.centerOf(o);return o.group=t==="keep"?this.buildKeep(o):this.buildVisual(t,a,o),o.group.position.set(l.x,0,l.z),this.scene.add(o.group),this.tintGroup(o.group),o.spawnAnim<1&&(o.group.scale.y=.05),this.structures.push(o),this.byId.set(o.id,o),t==="wall"&&(this.wallDirty=!0),(t==="wall"||t==="gate")&&this.markNeighborWalls(e,n),i.quiet||(vn(this.fx,new R(l.x,.5,l.z),13023387,16,2.2),this.audio?.build()),t==="keep"&&this.ensureBar(o,!0),this.game?.onCityChanged(),o}paintRoad(t,e,n={}){if(t<0||e<0||t>=ge||e>=ge)return null;const i=cn(t,e);return this.roads.has(i)||this.cells[i]?null:(this.roads.set(i,{i:t,j:e}),this.roadDirty=!0,n.quiet||this.audio?.place(),{type:"road",i:t,j:e})}removeRoad(t,e,n={}){const i=cn(t,e);return this.roads.delete(i)?(this.roadDirty=!0,n.quiet||this.audio?.place(),!0):!1}markNeighborWalls(t,e){this.wallDirty=!0}removeStructure(t,e={}){if(!t||t.type==="keep")return!1;he[t.type];for(let n=0;n<t.w;n++)for(let i=0;i<t.h;i++){const s=cn(t.i+n,t.j+i);this.cells[s]===t&&(this.cells[s]=null)}if(this.structures=this.structures.filter(n=>n!==t),this.byId.delete(t.id),t.group){const n=this.centerOf(t);vn(this.fx,new R(n.x,.8,n.z),11773063,26,3.2),this.scene.remove(t.group),t.group.traverse(i=>{i.isMesh&&i.geometry?.dispose?.()})}return t.bar&&(this.scene.remove(t.bar.group),t.bar=null),t.type==="wall"&&(this.wallDirty=!0),this.selection===t&&this.select(null),e.quiet||this.audio?.raze(),this.game?.onCityChanged(),!0}upgrade(t){const e=he[t.type];if(!e||!e.maxLevel||t.level>=e.maxLevel)return!1;t.level++,t.maxHp=this.calcMaxHp(t.type,t.level),t.hp=t.maxHp;const n=this.centerOf(t);return t.group&&(this.scene.remove(t.group),t.group.traverse(i=>{i.isMesh&&i.geometry?.dispose?.()})),t.group=this.buildVisual(t.type,t.level,t),t.group.position.set(n.x,0,n.z),t.group.scale.y=.72,this.scene.add(t.group),this.tintGroup(t.group),Uo(this.fx,new R(n.x,t.height*.6,n.z),16765562,30),vn(this.fx,new R(n.x,.5,n.z),14272936,16,2.4),t.bar&&this.updateBar(t),this.game?.onCityChanged(),!0}calcMaxHp(t,e){return Math.round($0(t,e)*(1+(this.bonuses.masonry||0)))}applyMasonry(){for(const t of this.structures){const e=t.maxHp,n=this.calcMaxHp(t.type,t.level);n>e&&(t.hp+=n-e,t.maxHp=n),this.updateBar(t)}}tintMaterial(t,e,n){if(!t||t.map||t.userData&&t.userData.skinLocked)return t;const i=`${t.uuid}|${e}|${n}`;if(this.tintCache.has(i))return this.tintCache.get(i);const s=t.clone(),a=new Mt(e);if(n==="roof"){s.color.copy(a);const o={h:0,s:0,l:0};s.color.getHSL(o),s.color.setHSL(o.h,o.s,Math.max(.06,Math.min(.82,o.l)))}else s.color.lerp(a,.68);return s.userData={...s.userData||{},skinLocked:!1},this.tintCache.set(i,s),s}tintGroup(t){if(!t)return;const e=this.stoneColor!==16777215&&this.stoneColor!=null,n=this.roofColor!=null;!e&&!n||t.traverse(i=>{if(!i.isMesh||!i.material)return;const s=i.material;if(Array.isArray(s)||s.map)return;const a=s.color?s.color.getHex():null;a!=null&&(n&&eg.has(a)?i.material=this.tintMaterial(s,this.roofColor,"roof"):e&&tg.has(a)&&(i.material=this.tintMaterial(s,this.stoneColor,"stone")))})}tintWalls(){if(!this.wallInstances.length)return;const t=this.wallInstances[0].material;!t||!t.color||(this.stoneColor===16777215||this.stoneColor==null?t.color.setHex(16777215):t.color.lerp(new Mt(this.stoneColor),.62),t.needsUpdate=!0)}recolorBanners(){for(const t of this.banners)t?.flag?.material&&(t.flag.material.map=dh(this.bannerKind),t.flag.material.needsUpdate=!0)}applySkins(t={}){this.skins={...Vi,...t};const e=Ze(this.skins.livery),n=Ze(this.skins.roof),i=Ze(this.skins.stone);this.bannerKind=e?.banner||"blue",this.roofColor=n?.color??tt.roof,this.roofDarkColor=n?.color??tt.roofDark,this.stoneColor=i?.color??16777215,this.tintCache.clear(),this.rebuildVisuals()}rebuildVisuals(){this.banners=[],this.windmills=[];for(const t of this.structures){const e=this.centerOf(t);t.group&&(this.scene.remove(t.group),t.group.traverse(n=>{n.isMesh&&n.geometry?.dispose?.()})),t.group=t.type==="keep"?this.buildKeep(t):this.buildVisual(t.type,t.level,t),t.group.position.set(e.x,0,e.z),t.spawnAnim=1,this.scene.add(t.group),this.tintGroup(t.group),t.bar&&this.updateBar(t)}this.tintWalls(),this.recolorBanners(),this.selection&&this.select(this.selection)}damage(t,e,n){if(!(!t||t.hp<=0))if(t.hp=Math.max(0,t.hp-e),t.type==="wall"&&this.updateWallColor(t),t.type==="keep"&&this.ensureBar(t,!0),t.hp>0){if(t.hp<t.maxHp&&!t.bar&&this.ensureBar(t,t.type==="keep"),this.updateBar(t),Math.random()<.28){const i=this.centerOf(t);this.fx.burst(new R(i.x+bt(-1,1),1+Math.random()*t.height,i.z+bt(-1,1)),{count:3,color:13221283,speed:2,life:.7,size:5,gravity:-2,drag:1,up:.4,alpha:.7})}}else{if(t.type==="keep"){this.game?.onKeepDestroyed();return}const i=this.centerOf(t);vn(this.fx,new R(i.x,.8,i.z),11773063,30,3.6),Uo(this.fx,new R(i.x,1.4,i.z),14262860,12),this.soundCrumble(),this.removeStructure(t,{quiet:!0}),this.game?.onStructureDestroyed?.(t)}}soundCrumble(){this.audio?.raze()}repairAll(t){let e=0;for(const n of this.structures){if(n.hp>=n.maxHp)continue;const i=Math.min(n.maxHp-n.hp,n.maxHp*t);n.hp+=i,e+=i,this.updateBar(n),n.type==="wall"&&this.updateWallColor(n)}return e>0&&this.game?.onCityChanged(),e}ensureBar(t,e=!1){if(t.bar)return t.bar;const n=t.type==="keep"?4.4:Math.max(1.8,Math.min(3,(t.w+t.h)*.55)),i=new jt,s=_c(1382426,{transparent:!0,opacity:.72,depthTest:!1,depthWrite:!1}),a=new Wt(new Fn(n,t.type==="keep"?.34:.2),s);a.renderOrder=90;const o=_c(7909210,{depthTest:!1,depthWrite:!1}),c=new Wt(new Fn(n-.08,t.type==="keep"?.24:.11),o);return c.position.z=.002,c.renderOrder=91,i.add(a,c),i.renderOrder=90,i.visible=!1,this.scene.add(i),t.bar={group:i,fill:c,fillMat:o,bgMat:s,w:n,force:e},this.updateBar(t),t.bar}updateBar(t){if(!t.bar)return;const e=Math.max(0,t.hp/t.maxHp);t.bar.fill.scale.x=Math.max(.02,e),t.bar.fill.position.x=-(t.bar.w-.08)*(1-e)/2;const n=t.bar.fillMat.color;e>.55?n.setHex(7909210):e>.28?n.setHex(13805642):n.setHex(12866882),t.bar.group.visible=t.hp<t.maxHp||t.type==="keep"}stats(){let t=10,e=0,n=55;const i={gold:0,wood:0,stone:0,food:0};let s=0;for(const o of this.structures){he[o.type],t+=hh(o.type,o.level),e+=pi(o.type,o.level),n+=Er(o.type,o.level),s+=Zo(o.type,o.level);const c=Tr(o.type,o.level);for(const[l,h]of Object.entries(c))i[l]+=h}const a=Math.max(0,(e-36)*.25);return n=Math.max(5,Math.min(100,n-a)),{capacity:t,used:e,happiness:n,production:i,garrison:Math.min(8,s)}}splendor(t=0){let e=15+t*25+this.roads.size*.2;for(const n of this.structures)n.type==="wall"?e+=.8:n.type==="keep"?e+=10:e+=5+n.level*4+(he[n.type].tower?3:0);return Math.round(e)}serialize(){return{structures:this.structures.map(t=>({type:t.type,i:t.i,j:t.j,level:t.level,hp:Math.round(t.hp)})),roads:[...this.roads.values()].map(t=>[t.i,t.j])}}reset(t={}){this.clearAll();const e=this.place("keep",Xi,qi,{force:!0,quiet:!0,animate:!1});return e&&(e.hp=e.maxHp=this.calcMaxHp("keep",1)),this.wallDirty=!0,this.roadDirty=!0,e}load(t){if(this.clearAll(),t?.structures?.length)for(const e of t.structures)he[e.type]&&this.place(e.type,e.i,e.j,{force:!0,quiet:!0,animate:!1,level:e.level||1,hp:e.hp});if(this.getStructureAt(Xi,qi)||this.place("keep",Xi,qi,{force:!0,quiet:!0,animate:!1}),t?.roads)for(const[e,n]of t.roads)this.paintRoad(e,n,{quiet:!0});this.wallDirty=!0,this.roadDirty=!0,this.game?.onCityChanged()}clearAll(){for(const t of[...this.structures])t.group&&(this.scene.remove(t.group),t.group.traverse(e=>{e.isMesh&&e.geometry?.dispose?.()})),t.bar&&this.scene.remove(t.bar.group);this.structures=[],this.byId.clear(),this.cells.fill(null),this.roads.clear(),this.banners=[],this.windmills=[],this.selection=null,this.selectedRing.visible=!1,this.wallDirty=!0,this.roadDirty=!0}buildVisual(t,e,n){switch(t){case"tower":return this.buildTower(e,n);case"gate":return this.buildGate(e,n);case"house":return this.buildHouse(e,n);case"farm":return this.buildFarm(e,n);case"lumber":return this.buildLumber(e,n);case"quarry":return this.buildQuarry(e,n);case"market":return this.buildMarket(e,n);case"tavern":return this.buildTavern(e,n);case"chapel":return this.buildChapel(e,n);case"garden":return this.buildGarden(e,n);case"barracks":return this.buildBarracks(e,n);case"ballista":return this.buildBallista(e,n);case"catapult":return this.buildCatapult(e,n);default:return new jt}}addFlag(t,e="blue",n=1,i=0,s=0,a=0){const o=uh(e==="blue"?this.bannerKind:e,n);return o.group.position.set(i,s,a),t.add(o.group),this.banners.push(o),o}buildTower(t,e){const n=new jt,i=6.6+t*1.05;me(n,2.45,2.75,.7,tt.stoneDark,0,.35,0,{seg:12}),me(n,2.05,2.35,i,tt.stone,0,.7+i/2,0,{seg:12}),me(n,2.55,2.55,.34,tt.stoneLight,0,i+.9,0,{seg:12});const s=i+1.08;for(let a=0;a<9;a++){const o=a/9*Math.PI*2;z(n,.56,.58,.42,tt.stoneLight,Math.cos(o)*2.28,s+.29,Math.sin(o)*2.28,{ry:-o})}z(n,1.02,1.8,.16,tt.woodDark,0,1.55,2.22),z(n,1.18,2,.1,tt.stoneLight,0,1.6,2.29),z(n,.96,1.65,.2,tt.woodDark,0,1.5,2.34,{cast:!1});for(let a=0;a<3;a++){const o=.55+a*1.5;z(n,.52,.95,.12,3880496,Math.cos(o)*2.12,3.2+a*.6,Math.sin(o)*2.12,{ry:-o,cast:!1})}if(t>=2&&(me(n,.18,.24,.95,7176082,.9,i+1.3,.3,{seg:5}),$e(n,.18,14201740,.9,i+1.95,.3,{detail:0})),t>=2&&this.addFlag(n,"blue",.75,0,i+1.15,0),t>=3){me(n,2.9,2.9,.28,tt.woodDark,0,i*.55,0,{seg:12});for(let a=0;a<12;a++){const o=a/12*Math.PI*2;z(n,.18,.8,.18,tt.wood,Math.cos(o)*2.6,i*.55+.5,Math.sin(o)*2.6)}}return e.height=s+1.4,e.muzzleY=s+.5,n}buildGate(t,e){const n=new jt;z(n,2.65,3.3,2.65,tt.stone,0,1.65,0),z(n,2.8,.4,2.8,tt.stoneDark,0,.2,0),La(n,2.65,2.65,3.3,{n:4,color:tt.stoneLight}),z(n,1.45,2.25,.24,2893344,0,1.3,1.34,{cast:!1}),z(n,.66,2.1,.16,tt.woodDark,-.36,1.18,1.46),z(n,.66,2.1,.16,tt.woodDark,.36,1.18,1.46);for(const i of[-.36,.36])z(n,.1,1.9,.05,3815994,i,1.18,1.56,{cast:!1});return z(n,1.2,.12,.12,3815994,0,1.05,1.56),t>=2&&this.addFlag(n,"blue",.65,.85,3.15,.8),t>=3&&(z(n,2.1,.5,.1,tt.stoneLight,0,3,1.34),$e(n,.12,14267495,0,3.25,1.4,{detail:0})),e.height=4.2,n}buildHouse(t,e){const n=new jt,i=2.2+(t-1)*.32;z(n,4.7,.3,4.3,tt.stoneDark,0,.15,0),z(n,4.45,i,4.05,tt.plaster,0,i/2+.3,0);const s=tt.timber;for(const a of[-1,1])for(const o of[-1,1])z(n,.19,i,.19,s,a*2.1,i/2+.3,o*1.9);for(const a of[-1,1]){z(n,4.45,.16,.12,s,0,i+.22,a*2.03),z(n,4.45,.16,.12,s,0,.48,a*2.03);for(const o of[-1.1,1.1])z(n,.15,i,.12,s,o,i/2+.3,a*2.03)}for(const a of[-1,1]){const o=z(n,.13,1.4,.1,s,a*1.55,i*.62,2.06,{rz:a*.55});o.castShadow=!1}return Hi(n,5.35,4.95,2.2,tt.roof,0,i+.35,0),z(n,5,.14,.22,tt.roofDark,0,i+2.5,0,{cast:!1}),z(n,.62,1.7,.62,tt.stoneDark,1.55,i+1.35,-.9),z(n,1,1.8,.14,tt.woodDark,0,1.2,2.08),z(n,.78,.9,.06,15910775,-1.35,1.55,2.08,{cast:!1,mat:new De({color:15910775,emissive:5913616,emissiveIntensity:.7,roughness:.8})}),z(n,.78,.9,.06,15910775,1.35,1.55,2.08,{cast:!1,mat:new De({color:15910775,emissive:5913616,emissiveIntensity:.7,roughness:.8})}),t>=2&&(z(n,1.6,2,2.4,tt.plaster,2.9,1.3,.8),Hi(n,2.1,2.9,1.2,tt.roofDark,2.9,2.3,.8),z(n,.5,1.2,.5,tt.stoneDark,3.2,3.2,.2)),t>=3&&(this.addFlag(n,"blue",.6,-2.5,i+1.4,2),z(n,.9,.9,.9,tt.wood,2.7,.45,-1.9)),e.height=i+3,n}cropGeometry(t,e,n){const i=[];for(let a=0;a<t;a++)for(let o=0;o<e;o++){const c=new Rs(.16,.62,4);c.translate(-3.2+o*.92,.35,-3+a*.82);const l=new Mt(n),h=new Float32Array(c.attributes.position.count*3);for(let d=0;d<c.attributes.position.count;d++)h[d*3]=l.r,h[d*3+1]=l.g,h[d*3+2]=l.b;c.setAttribute("color",new we(h,3)),i.push(c)}const s=fh(i,!1);return i.forEach(a=>a.dispose()),s}buildFarm(t,e){const n=new jt;z(n,8,.14,8,7689784,0,.06,0);const i=new De({vertexColors:!0,roughness:.9}),s=new Wt(this.cropGeometry(5+t,5,t>=2?9087307:8167235),i);s.position.set(.8,.12,.8),s.castShadow=!0,n.add(s);for(let c=0;c<9;c++)z(n,.12,.7,.12,tt.woodDark,-3.9+c*.98,.35,-3.9),z(n,.12,.7,.12,tt.woodDark,-3.9+c*.98,.35,3.9);z(n,7.9,.1,.1,tt.wood,0,.55,-3.9),z(n,7.9,.1,.1,tt.wood,0,.55,3.9);const a=new jt;a.position.set(-2.7,0,-2.5),me(a,1.25,1.5,3.9,13616039,0,1.95,0,{seg:8}),mn(a,1.55,1.5,tt.roofDark,0,4.6,0,{seg:8}),z(a,.7,1.2,.15,tt.woodDark,0,.8,1.42);const o=new jt;o.position.set(0,3.9,1.5);for(let c=0;c<4;c++){const l=z(o,.28,2.3,.08,14207140,0,1.15,0,{cast:!1});l.rotation.z=c*Math.PI/2,l.position.set(Math.sin(c*Math.PI/2)*1.15,Math.cos(c*Math.PI/2)*1.15,0)}return a.add(o),this.windmills.push({blades:o,speed:.7+t*.12}),n.add(a),$e(n,.7,13349739,2.6,.6,-2.4,{detail:1,scale:new R(1,.8,1)}),$e(n,.55,12362845,2.9,.5,-1.2,{detail:1,scale:new R(1.1,.75,1)}),t>=3&&(me(n,.9,1.1,2.6,13616039,3.1,1.3,2.8,{seg:8}),mn(n,1.15,1,tt.roof,3.1,3.1,2.8,{seg:8})),e.height=6.2,n}buildLumber(t,e){const n=new jt;z(n,4.9,.12,4.9,7296569,0,.06,0);for(const[a,o]of[[-1.7,-1.6],[1.7,-1.6],[-1.7,1.6],[1.7,1.6]])z(n,.18,2.2,.18,tt.woodDark,a,1.1,o);const i=z(n,4.3,.16,4,8215095,0,2.4,0);i.rotation.x=.14;for(let a=0;a<3+t;a++){const o=me(n,.28,.32,3,tt.wood,-1.2+a%3*.72,.35+Math.floor(a/3)*.55,.4,{seg:7});o.rotation.z=Math.PI/2}z(n,1,.6,.9,tt.woodDark,2.3,.35,1.7);const s=z(n,.08,1.2,.08,tt.wood,2.35,1.1,1.65);return s.rotation.z=.4,z(n,.4,.35,.08,tt.iron,2.06,1.55,1.65,{rz:.4}),z(n,.3,.9,.1,9071172,1.8,.45,1.7),e.height=3.3,n}buildQuarry(t,e){const n=new jt;z(n,5,.12,5,7827551,0,.06,0),z(n,3.4,.5,3.4,6248780,0,.25,0);const i=rn(10130050,{roughness:.98});for(let s=0;s<5+t*2;s++){const a=bt(.45,.9),o=new Wt(new Vr(a,0),i);o.position.set(bt(-2.1,2.1),.45+a*.3,bt(-2.1,2.1)),o.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),o.castShadow=!0,o.receiveShadow=!0,n.add(o)}z(n,.22,3.2,.22,tt.woodDark,-1.8,1.8,-1.6),z(n,.22,2,.22,tt.woodDark,-.8,2.4,-1.6,{rz:-.75}),z(n,2.8,.18,.18,tt.wood,-.7,3.25,-1.6),z(n,.06,1.5,.06,4143666,.5,2.5,-1.6),z(n,.6,.5,.6,9143156,.5,1.65,-1.6);for(let s=0;s<3;s++)z(n,.8,.45,.6,12366752,1.6,.28+s*.45,1.3+s%2*.5);return e.height=3.8,n}buildMarket(t,e){const n=new jt;z(n,4.9,.1,4.9,9075294,0,.05,0);const i=2+(t>=2?1:0);for(let s=0;s<i;s++){const a=-1.5+s%2*3,o=-1.4+Math.floor(s/2)*2.7;z(n,2.5,.2,1.5,tt.wood,a,1.05,o);for(const c of[-1.05,1.05])for(const l of[-.55,.55])z(n,.12,1.1,.12,tt.woodDark,a+c,.55,o+l);for(let c=0;c<6;c++)z(n,.42,.06,1.9,c%2?15259830:10173488,a-1.05+c*.42,1.65,o,{cast:!1});z(n,2.55,.08,1.9,0,a,1.65,o,{cast:!1,matOpts:{transparent:!0,opacity:0}}),$e(n,.16,14263361,a-.5,1.28,o+.2,{detail:0}),$e(n,.16,12144445,a,1.28,o+.15,{detail:0}),$e(n,.16,8231499,a+.5,1.28,o+.2,{detail:0}),z(n,.5,.35,.5,9136708,a+.9,.25,o-.7)}for(let s=0;s<3;s++)me(n,.3,.34,.7,8149560,1.8,.35,-1.9+s*.8,{seg:7});return e.height=2.4,n}buildTavern(t,e){const n=new jt,i=2.7;z(n,4.9,.3,4.5,tt.stoneDark,0,.15,0),z(n,4.6,i,4.2,tt.plaster,0,1.65,0);for(const s of[-1,1])for(const a of[-1,1])z(n,.2,i,.2,tt.timber,s*2.16,1.65,a*1.98);for(const s of[-1,1])z(n,4.6,.18,.12,tt.timber,0,.55,s*2.1),z(n,4.6,.18,.12,tt.timber,0,2.9,s*2.1);Hi(n,5.4,5,2.3,9259829,0,3.1,0),z(n,.65,1.9,.65,tt.stoneDark,-1.6,3.8,-.7),z(n,1,1.9,.15,tt.woodDark,0,1.25,2.15),z(n,.75,.85,.06,15910775,1.55,1.65,2.13,{cast:!1,mat:new De({color:15910775,emissive:5913616,emissiveIntensity:.8,roughness:.8})}),z(n,.08,.8,.08,tt.iron,2.4,2.3,2.15),z(n,.9,.55,.08,tt.wood,2.8,1.95,2.15);for(let s=0;s<3;s++)me(n,.3,.34,.72,tt.wood,-2.6,.36,1.15+s*.7,{seg:7});return z(n,1.5,.1,.8,tt.wood,2,.75,-2.2),z(n,.12,.7,.12,tt.woodDark,1.4,.35,-2.2),z(n,.12,.7,.12,tt.woodDark,2.6,.35,-2.2),t>=2&&(z(n,1.6,1.6,.1,tt.plaster,0,4.1,2.5),z(n,1.8,.15,.8,tt.woodDark,0,3.3,2.45)),t>=3&&this.addFlag(n,"blue",.66,2.6,3.2,1.7),e.height=5.1,n}buildChapel(t,e){const n=new jt;z(n,3.8,.3,5,tt.stoneDark,0,.15,-.3),z(n,3.5,2.8,4.4,14209211,0,1.7,-.5),Hi(n,4.3,5,1.9,8079932,0,3.1,-.5),z(n,1.5,5.2,1.5,14209211,0,2.6,2),z(n,1.75,.25,1.75,tt.stone,0,5.15,2),mn(n,1.15,2.2,8079932,0,6.3,2,{seg:4,ry:Math.PI/4}),z(n,.09,1.1,.09,4932408,0,7.7,2),z(n,.5,.09,.09,4932408,0,7.9,2),z(n,.9,1.8,.12,tt.woodDark,0,1.2,2.78);for(const i of[-1,1])z(n,.42,1.2,.07,4937318,i,1.7,2.77,{cast:!1}),z(n,.42,.4,.07,4937318,i,2.45,2.77,{cast:!1,rz:0});return t>=2&&(z(n,1.4,2.2,2,14209211,2.3,1.3,-.8),Hi(n,1.8,2.4,1.2,8079932,2.3,2.4,-.8)),t>=3&&(this.addFlag(n,"blue",.55,0,6.9,2),z(n,.2,.2,.2,tt.gold,0,8.35,2,{cast:!1})),e.height=8.4,n}buildGarden(t,e){const n=new jt;z(n,5.1,.12,5.1,7312470,0,.06,0);for(const[s,a,o,c]of[[0,-2.3,4.6,.45],[0,2.3,4.6,.45],[-2.3,0,.45,4.2],[2.3,0,.45,4.2]])z(n,o,.65,c,5208639,s,.35,a);me(n,.9,1.05,.45,tt.stone,0,.22,0,{seg:10}),me(n,.72,.8,.18,6201002,0,.5,0,{seg:10,matOpts:{transparent:!0,opacity:.8}}),me(n,.18,.28,1.2,tt.stoneLight,0,.85,0,{seg:8}),$e(n,.32,tt.stoneLight,0,1.5,0,{detail:1});const i=[14651279,14731109,13219558,15787725];for(let s=0;s<10+t*4;s++){const a=Math.random()*Math.PI*2,o=bt(1.2,2);$e(n,.12,i[s%i.length],Math.cos(a)*o,.25,Math.sin(a)*o,{detail:0,cast:!1})}for(let s=0;s<2;s++)z(n,1,.12,.4,tt.wood,-1.4+s*2.8,.35,1.7),z(n,.12,.35,.35,tt.woodDark,-1.8+s*3.6,.18,1.7);if(t>=2){const s=new jt;me(s,.16,.24,1.4,tt.timber,0,.7,0),$e(s,.8,6130763,0,1.7,0,{detail:1}),s.position.set(1.7,0,-1.4),n.add(s)}return t>=3&&(z(n,.5,1.3,.5,tt.stone,1.6,.65,.9),$e(n,.3,tt.gold,1.6,1.5,.9,{detail:1})),e.height=2.3,n}buildBarracks(t,e){const n=new jt;z(n,7.2,.16,4.9,9140831,0,.08,0),z(n,6.3,2.6,3.6,10125404,0,1.4,-.4),Hi(n,7,4.4,2,7227952,0,2.7,-.4),z(n,1,1.9,.12,tt.woodDark,-1.6,1.15,1.44),z(n,.8,.8,.06,15910775,1.4,1.5,1.44,{cast:!1,mat:new De({color:15910775,emissive:5913616,emissiveIntensity:.7})}),this.addFlag(n,"blue",.7,-2.8,2.8,1.2);for(let i=0;i<7;i++)z(n,.14,.8,.14,tt.woodDark,.1+i*.9,.4,2.1);z(n,6,.1,.1,tt.wood,3,.65,2.1);for(let i=0;i<2;i++){const s=1.4+i*1.9;me(n,.1,.12,1.5,tt.woodDark,s,.85,.4,{seg:5}),z(n,.8,.1,.1,tt.wood,s,1.45,.4),$e(n,.22,14070407,s,1.85,.4,{detail:0}),me(n,.3,.3,.08,10119999,s,1.25,.4,{seg:8,rx:Math.PI/2})}z(n,1.2,.1,.3,tt.wood,-2.4,1,1.1);for(let i=0;i<3;i++)z(n,.05,1.4,.05,tt.iron,-2.8+i*.4,.7,1.1);if(t>=2)for(let i=0;i<2;i++){const s=-2.6+i*2;z(n,1.3,.15,1.3,7232063,s,.08,2.9),mn(n,1,1.2,9271900,s,.8,2.9,{seg:4})}return t>=3&&(z(n,.9,1.4,.9,tt.stone,2.9,.7,3.4),this.addFlag(n,"red",.55,2.9,1.6,3.4)),e.height=5,n}buildBallista(t,e){const n=new jt;z(n,4.4,.32,4.4,8283718,0,.16,0);for(const[a,o]of[[-1.7,-1.7],[1.7,-1.7],[-1.7,1.7],[1.7,1.7]])z(n,.24,1.4,.24,tt.woodDark,a,.9,o);z(n,4,.18,2.6,tt.wood,0,1.55,0);const i=new jt;i.position.set(0,1.8,0),z(i,1.4,.3,.5,tt.woodDark,0,.15,0),z(i,.14,.14,2.9,tt.wood,0,.4,.4);const s=new jt;s.position.set(0,.45,1.4);for(const a of[-1,1]){const o=z(s,1.8,.12,.12,4930086,a*.75,.15,-.25,{rz:a*.32});o.castShadow=!0}if(z(s,.06,.06,2.2,3813672,0,.2,.45),i.add(s),t>=2)for(const a of[-1,1])z(i,.09,.09,2.2,tt.iron,a*.55,.32,.2);return n.add(i),e.aimGroup=i,e.muzzleY=2.5,z(n,.8,.5,.8,tt.woodDark,-1.6,.3,1.7),me(n,.18,.18,.8,9274228,1.5,.7,1.5,{seg:6,rx:Math.PI/2}),e.height=3.2,n}buildCatapult(t,e){const n=new jt;z(n,7,.3,6,8283718,0,.15,0);for(const[o,c]of[[-2.7,-2.2],[2.7,-2.2],[-2.7,2.2],[2.7,2.2]])z(n,.26,1,.26,tt.woodDark,o,.7,c);for(const[o,c]of[[-2.8,-2.4],[2.8,-2.4],[-2.8,2.4],[2.8,2.4]])me(n,.6,.6,.25,tt.woodDark,o,.6,c,{seg:8,rx:Math.PI/2});z(n,5,.35,1,tt.woodDark,0,1.25,0);const i=new jt;i.position.set(0,1.5,0),z(i,.5,.3,3,tt.wood,0,.2,0);const s=new jt;s.position.set(0,.4,-.8);const a=z(s,.24,.24,4.6,tt.wood,0,0,1.4);return a.rotation.x=-.35,z(s,.1,1,.1,4078130,.7,-.4,-.2),z(s,.6,.55,.6,7037012,.7,-.6,.2),z(s,1,.4,1,tt.woodDark,0,.15,3.6),i.add(s),n.add(i),e.aimGroup=i,e.arm=s,e.muzzleY=3.2,z(n,1,.5,1,tt.woodDark,3,.28,2.2),e.height=4.4,n}buildKeep(t){const e=new jt,n=13616559,i=10985099,s=14735039;z(e,10.7,1.35,10.7,i,0,.67,0),z(e,8.6,8.8,8.6,n,0,5.7,0),z(e,9.2,.6,9.2,s,0,10.1,0),La(e,9.2,9.2,10.35,{n:7,color:s,w:.52,h:.72,d:.46});for(const[a,o]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const c=a*4.45,l=o*4.45;me(e,1.9,2.05,11.2,n,c,6,l,{seg:10}),me(e,2.25,2.25,.35,s,c,11.55,l,{seg:10});for(let h=0;h<7;h++){const d=h/7*Math.PI*2;z(e,.4,.55,.34,s,c+Math.cos(d)*2,11.95,l+Math.sin(d)*2,{ry:-d})}mn(e,2.2,2.4,10306612,c,13.35,l,{seg:10}),z(e,.08,1.6,.08,4865325,c,15,l),this.addFlag(e,"blue",.8,c,15,l);for(const[h,d]of[[0,1.95],[0,-1.95],[1.95,0],[-1.95,0]])z(e,.32,.8,.12,3815217,c+h,6.2+(a+o)*.3,l+d,{cast:!1})}me(e,2.35,2.6,13,n,0,7.15,0,{seg:12}),me(e,2.75,2.75,.4,s,0,13.7,0,{seg:12}),La(e,5,5,13.9,{n:6,color:s,w:.5,h:.6,d:.4}),mn(e,2.5,3.2,10306612,0,15.5,0,{seg:12}),z(e,.1,2.4,.1,4208426,0,18.2,0),this.addFlag(e,"blue",1.2,0,18.2,0),z(e,2.4,3.8,.22,3090464,0,2.3,4.36,{cast:!1}),z(e,2.8,4.2,.2,s,0,2.5,4.32),z(e,2.1,3.5,.2,4600868,0,2.2,4.5);for(let a=0;a<3;a++)z(e,3.6-a*.5,.3,.7,s,0,.15+a*.28,5.05+a*.4);for(const a of[-1,1])for(const o of[-1,1])z(e,.5,1.2,.1,4012338,a*3.2,6.4,o*4.33,{cast:!1}),z(e,.5,1.2,.1,4012338,a*4.33,6.4,o*3.2,{cast:!1});for(const a of[-1,1]){z(e,.12,1.4,.12,tt.iron,a*2.8,2.3,4.5);const o=$e(e,.22,16753226,a*2.8,3.1,4.5,{detail:0,cast:!1});o.material=new Mn({color:16753226})}return t.height=20,e}makeSelectionRing(){const t=new ns(1,1.1,48),e=new Mn({color:15188858,transparent:!0,opacity:.72,side:He,depthWrite:!1}),n=new Wt(t,e);return n.rotation.x=-Math.PI/2,n.position.y=.1,n.visible=!1,n.renderOrder=5,this.scene.add(n),n}select(t){if(this.selection=t,!t){this.selectedRing.visible=!1;return}const e=this.centerOf(t),n=Math.max(t.w,t.h)*Gt*.55+.5;this.selectedRing.position.set(e.x,.12,e.z),this.selectedRing.scale.setScalar(n),this.selectedRing.visible=!0}makeGhost(){const t=new jt,e=new Mn({color:10409082,transparent:!0,opacity:.28,depthWrite:!1}),n=new Wt(new Se(1,1,1),e);n.position.y=.5,t.add(n);const i=new Gd(new $d(new Se(1,1,1)),new qo({color:13496488,transparent:!0,opacity:.85}));return i.position.y=.5,t.add(i),t.visible=!1,t.userData={boxMesh:n,edges:i,mat:e},this.scene.add(t),t}updateGhost(t,e,n,i){if(!t){this.ghost.visible=!1;return}const s=he[t],a=this.ghost;a.visible=!0;const o=i?10409082:14178890;a.userData.mat.color.setHex(o),a.userData.edges.material.color.setHex(i?14087602:16752784);const c=s.road?Gt*.96:s.w*Gt,l=s.road?Gt*.96:s.h*Gt,h=s.road?.12:s.hidden?4:Math.min(5,(s.h+1)*.8);a.userData.boxMesh.scale.set(c,h,l),a.userData.boxMesh.position.y=h/2+.05,a.userData.edges.scale.set(c,h,l),a.userData.edges.position.y=h/2+.05;const d=this.cellCenter(e+(s.w-1)/2,n+(s.h-1)/2);a.position.set(d.x,0,d.z)}hideGhost(){this.ghost.visible=!1}update(t,e,n){this.time=n,this.wallDirty&&this.rebuildWalls(),this.roadDirty&&this.rebuildRoads();for(const i of this.banners)i.flag.rotation.y=Math.sin(n*2+i.phase)*.26,i.flag.rotation.z=Math.sin(n*1.3+i.phase)*.04;for(const i of this.windmills)i.blades.rotation.z+=t*i.speed;this.selection&&(this.selectedRing.rotation.z+=t*.25,this.selectedRing.material.opacity=.55+Math.sin(n*3)*.15);for(const i of this.structures){if(i.spawnAnim<1){i.spawnAnim=Math.min(1,i.spawnAnim+t*2.6);const a=i.spawnAnim,o=1-Math.pow(1-a,3),c=a<.85?o*1.04:1+Math.sin((a-.85)*Math.PI/.15)*.02;i.group.scale.y=Math.max(.05,Math.min(1.04,c)),a>=1&&(i.group.scale.y=1)}if(i.bar){const a=this.centerOf(i);i.bar.group.position.set(a.x,i.height+.65,a.z),i.bar.group.quaternion.copy(e.quaternion)}const s=i.hp/i.maxHp;if(s<.62&&i.hp>0&&(i.smokeTimer-=t,i.smokeTimer<=0)){i.smokeTimer=bt(.5,1.2);const a=this.centerOf(i),o=i.height*bt(.35,.85);this.fx.burst(new R(a.x+bt(-1.2,1.2),o,a.z+bt(-1.2,1.2)),{count:s<.3?5:2,color:s<.3?16747068:9209721,speed:1.2,life:1.8,size:s<.3?11:9,gravity:s<.3?1.2:.6,drag:.8,up:.5,alpha:.5})}}}}class sg{constructor(){this.ctx=null,this.master=null,this.enabled=localStorage.getItem("steelstone_sound")!=="off",this.started=!1,this.wind=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.enabled?.5:0,this.master.connect(this.ctx.destination),this.noiseBuffer=this.makeNoise(2.5),this.startWind(),this.started=!0)}makeNoise(t=2){const e=this.ctx,n=e.createBuffer(1,e.sampleRate*t,e.sampleRate),i=n.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return n}startWind(){if(!this.ctx)return;const t=this.ctx,e=t.createBufferSource();e.buffer=this.noiseBuffer,e.loop=!0;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=320,n.Q.value=.6;const i=t.createGain();i.gain.value=.05,e.connect(n).connect(i).connect(this.master),e.start(),this.wind={src:e,filter:n,gain:i};const s=t.createOscillator();s.frequency.value=.07;const a=t.createGain();a.gain.value=120,s.connect(a).connect(n.frequency),s.start(),this.windLfo=s}setEnabled(t){this.enabled=t,localStorage.setItem("steelstone_sound",t?"on":"off"),this.master&&this.master.gain.setTargetAtTime(t?.5:0,this.ctx.currentTime,.05)}toggle(){return this.setEnabled(!this.enabled),this.enabled}tone(t,e=.15,n="sine",i=.1,s={}){if(!this.ctx||!this.enabled)return;const a=this.ctx,o=a.currentTime+(s.delay||0),c=a.createOscillator(),l=a.createGain();c.type=n,c.frequency.setValueAtTime(t,o),s.slide&&c.frequency.exponentialRampToValueAtTime(Math.max(30,s.slide),o+e),l.gain.setValueAtTime(1e-4,o),l.gain.exponentialRampToValueAtTime(i,o+Math.min(.02,e*.2)),l.gain.exponentialRampToValueAtTime(1e-4,o+e);const h=a.createStereoPanner?a.createStereoPanner():null;h?(h.pan.value=s.pan||0,c.connect(l).connect(h).connect(this.master)):c.connect(l).connect(this.master),c.start(o),c.stop(o+e+.05)}noise(t=.2,e=1400,n=.1,i={}){if(!this.ctx||!this.enabled)return;const s=this.ctx,a=s.currentTime+(i.delay||0),o=s.createBufferSource();o.buffer=this.noiseBuffer;const c=s.createBiquadFilter();c.type=i.type||"bandpass",c.frequency.setValueAtTime(e,a),i.slide&&c.frequency.exponentialRampToValueAtTime(Math.max(60,i.slide),a+t),c.Q.value=i.q??.8;const l=s.createGain();l.gain.setValueAtTime(1e-4,a),l.gain.exponentialRampToValueAtTime(n,a+.012),l.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c).connect(l).connect(this.master),o.start(a),o.stop(a+t+.05)}click(){this.tone(320,.06,"triangle",.045)}select(){this.tone(440,.07,"sine",.05),this.tone(660,.08,"sine",.03,{delay:.03})}error(){this.tone(180,.12,"square",.045,{slide:120})}build(){this.noise(.18,700,.11,{type:"lowpass"}),this.tone(110,.18,"triangle",.09,{slide:70}),this.tone(260,.08,"square",.025,{delay:.02})}place(){this.tone(140,.12,"triangle",.07,{slide:95})}upgrade(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.22,"triangle",.05,{delay:e*.055})),this.noise(.5,2400,.02,{type:"highpass"})}raze(){this.noise(.35,400,.14,{type:"lowpass",slide:90}),this.tone(80,.3,"sawtooth",.05,{slide:45})}arrow(){this.noise(.09,2400,.035,{type:"highpass"})}bolt(){this.noise(.14,900,.07,{type:"bandpass"}),this.tone(180,.1,"sawtooth",.03,{slide:90})}hit(){this.noise(.07,800,.05,{type:"bandpass"})}sword(){this.noise(.1,1800,.04,{type:"highpass"}),this.tone(240,.06,"triangle",.02)}boom(){this.noise(.7,250,.26,{type:"lowpass",slide:60}),this.tone(65,.6,"sine",.2,{slide:32})}horn(){[196,247,294].forEach((t,e)=>{this.tone(t,1.1,"sawtooth",.035,{delay:e*.03}),this.tone(t*1.005,1,"triangle",.03,{delay:e*.03})})}wave(){this.tone(130,1.3,"sawtooth",.06,{slide:98}),this.tone(196,1.2,"triangle",.04),this.noise(1.2,300,.05,{type:"lowpass"})}victory(){[523,659,784,1046,1318].forEach((t,e)=>this.tone(t,.7,"triangle",.06,{delay:e*.12})),this.tone(262,1.8,"sine",.05,{delay:.24})}defeat(){[330,294,247,196].forEach((t,e)=>this.tone(t,.6,"sawtooth",.045,{delay:e*.18,slide:t*.96}))}cooldownReady(){this.tone(880,.09,"sine",.03),this.tone(1320,.12,"sine",.02,{delay:.05})}hero(){this.tone(392,.16,"triangle",.045),this.tone(587,.2,"triangle",.035,{delay:.05})}}const Q=(r,t=document)=>t.querySelector(r),Oe=(r,t=document)=>[...t.querySelectorAll(r)];function rt(r,t="ic"){return`<svg class="${t}"><use href="#${r}"/></svg>`}function rg(r){return Math.floor(r+1e-4)}const wc={day:["#3d78b0","#9ec6dd","#f1d6a8"],golden:["#4b5f92","#c49a86","#f6c97a"],storm:["#2b3442","#5e6b74","#8e9a96"],dawn:["#5c6f9d","#d39aa2","#ffd9b0"],crow:["#201c3a","#4b3560","#9a5f6e"]},vs=[{kicker:"The Crown System",title:"A second life, a new interface",icon:"i-crown",text:"You died once. You woke as Caelan Ashbourne with a city-builder’s memories and a voice only you can hear. The Crown System turns land, labour and loyalty into numbers. This is the field manual it wrote for you."},{kicker:"Step 1 · Foundations",title:"Build your first house",icon:"i-house",text:"Pick a building from the palette below, then tap the island. Houses add population; population staffs every other building. Your keep is already standing at the centre of the grid.",events:[{type:"place"}],wait:"Place any building to continue."},{kicker:"Step 2 · The economy",title:"Feed the machine",icon:"i-farm",text:"Farms, lumber camps and quarries produce resources every six seconds. Markets turn that surplus into gold. Happiness multiplies everything — gardens and taverns keep people smiling.",events:[{type:"place",data:["farm","lumber","quarry","market","tavern","garden"]}],wait:"Place a production building to continue."},{kicker:"Step 3 · Streets",title:"Pave the way",icon:"i-road",text:"Roads are cheap, raise city splendor, and make a city feel like a city. Choose the road tool and drag across the grass.",events:[{type:"place",data:["road"]}],wait:"Pave at least one road tile to continue."},{kicker:"Step 4 · Defences",title:"Raise the wall",icon:"i-wall",text:"Walls slow raiders; gates attract them; towers shoot them. Drag the wall tool to paint a line of stone around your keep. A wall is only as good as the gate that funnels the enemy.",events:[{type:"place",data:["wall","gate","tower"]}],wait:"Build a wall, gate or tower to continue."},{kicker:"Step 5 · Progress",title:"Upgrade everything",icon:"i-upgrade",text:"Tap a building with the Camera tool to inspect it. Upgrading raises output, hit points and tower damage. Your city rank rises with splendor — and so does your army.",events:[{type:"upgrade"}],wait:"Upgrade any building to continue."},{kicker:"Step 6 · The world",title:"Open the war map",icon:"i-tent",text:"Five regions stand between your grey island and Warlord Gruk. The map also hides dungeons: elite bosses with unique loot and first-clear skins. Open it now.",events:[{type:"map"}],wait:"Open the War Map to continue."},{kicker:"Step 7 · The siege",title:"Sound the horn",icon:"i-horn",text:"When your walls are ready, press Begin Wave. Towers fire automatically; you command Captain Aldric and the battle boons. Every wave survived makes the next one stronger.",events:[{type:"wave"}],wait:"Begin a wave to continue."},{kicker:"Step 8 · Command",title:"Lead from the front",icon:"i-captain",text:"During a siege, tap the ground to send Captain Aldric there. Q looses an arrow volley, W sounds the war horn, E repairs the walls. Hold the keep, and the region is yours.",events:[{type:"hero"},{type:"ability"}],wait:"Command the captain or use an ability to finish the tutorial."}];class ag{constructor(t){this.game=t,this.el={title:Q("#title"),hud:Q("#hud"),modal:Q("#modal"),modalCard:Q("#modal-card"),resources:Q("#resources"),phasePill:Q("#phase-pill"),phaseLabel:Q("#phase-label"),waveLabel:Q("#wave-label"),waveProgress:Q("#wave-progress"),wprogFill:Q("#wprog-fill"),wprogText:Q("#wprog-text"),bossBar:Q("#boss-bar"),bossFill:Q("#boss-fill"),bossName:Q("#boss-name-text"),quest:Q("#quest"),questList:Q("#quest-list"),rankLabel:Q("#rank-label"),rpFill:Q("#rp-fill"),rpLabel:Q("#rp-label"),abilities:Q("#battle-abilities"),heroHud:Q("#hero-hud"),heroFill:Q("#hero-fill"),heroState:Q("#hero-state"),targetHint:Q("#target-hint"),bottombar:Q("#bottombar"),palette:Q("#palette"),selName:Q("#sel-name"),selDesc:Q("#sel-desc"),selCost:Q("#sel-cost"),selIcon:Q(".sel-ic"),btnWave:Q("#btn-wave"),waveMain:Q("#wave-btn-main"),waveSub:Q("#wave-btn-sub"),btnCamera:Q("#tool-camera"),btnUndo:Q("#btn-undo"),btnDemolish:Q("#btn-demolish"),btnRepair:Q("#btn-repair"),btnMap:Q("#btn-map"),btnShop:Q("#btn-shop"),crownBadge:Q("#crown-badge"),btnSound:Q("#btn-sound"),btnMenu:Q("#btn-menu"),tutorial:Q("#tutorial"),tutStep:Q("#tut-step"),tutKicker:Q("#tut-kicker"),tutTitle:Q("#tut-title"),tutText:Q("#tut-text"),tutWait:Q("#tut-wait"),tutIcon:Q("#tut-icon-use"),tutBar:Q("#tut-bar-fill"),tutNext:Q("#tut-next"),tutSkip:Q("#tut-skip"),toast:Q("#toast"),callout:Q("#wave-callout"),hint:Q("#hint-banner"),best:Q("#best-label"),btnContinue:Q("#btn-continue"),titleFoot:Q(".title-foot")},this.resourceEls={},this.resourceState={},this.cardEls={},this.resourcesDirty=!0,this.cityDirty=!0,this.questsDirty=!0,this.modalOpen=!1,this.modalCloseable=!0,this.howFromPause=!1,this.currentRank=Lo(0),this.waveButtonState="",this.toastTimer=null,this.hintTimer=null,this.calloutTimer=null,this.mapSelected=null,this.shopTab="livery",this.tutorialIndex=0,this.tutorialActive=!1,this.currentDungeon=null,this.buildResources(),this.buildPalette(),this.bind(),this.updateSound(t.audio.enabled),this.markQuestsDirty(),this.updateResources(),this.updateQuests(),this.updateTitle(),this.updateCrowns(),this.setBuildMode()}updateCrowns(){const t=Math.max(0,Math.floor(this.game.premium?.crowns||0)),e=t.toLocaleString("en-US");this.el.crownBadge&&(this.el.crownBadge.textContent=t>=1e4?`${Math.floor(t/1e3)}k`:e),Oe("[data-crown-balance]").forEach(n=>{n.textContent=e})}buildResources(){const t=[["gold","i-coin"],["wood","i-wood"],["stone","i-stone"],["food","i-food"]];let e="";for(const[n,i]of t)e+=`<div class="res" data-type="${n}" title="${Ke[n].name}"><svg class="ic"><use href="#${i}"/></svg><b id="res-${n}">0</b><span class="delta"></span></div>`;e+='<div class="res city" data-type="pop" title="Population: workers / housing"><svg class="ic"><use href="#i-people"/></svg><b id="res-pop">0/10</b></div>',e+='<div class="res city" data-type="happy" title="Happiness: boosts resource production"><svg class="ic"><use href="#i-happy"/></svg><b id="res-happy">55</b></div>',this.el.resources.innerHTML=e;for(const n of["gold","wood","stone","food","pop","happy"])this.resourceEls[n]=Q(`#res-${n}`)}buildPalette(){let t="";for(const e of xc){const n=he[e];if(!n||n.hidden)continue;const i=Object.entries(n.cost).map(([s,a])=>`<span class="c"><svg class="ic"><use href="#${Ke[s].icon}"/></svg>${a}</span>`).join("");t+=`<button class="build-card" data-type="${e}" data-cat="${n.category}" title="${n.name} — ${n.desc}">
        ${rt(n.icon)}
        <span class="name">${n.name.replace("Stone ","").replace("Cobbled ","").replace("Archer ","")}</span>
        <span class="cost">${i}</span>
      </button>`}this.el.palette.innerHTML=t,Oe(".build-card",this.el.palette).forEach(e=>{this.cardEls[e.dataset.type]=e,e.addEventListener("click",()=>{this.game.audio.init(),this.game.selectBuild(e.dataset.type)})})}bind(){const t=this.game;Q("#btn-play").addEventListener("click",()=>{t.audio.init(),t.audio.click(),t.startNewCampaign()}),Q("#btn-continue").addEventListener("click",()=>{t.audio.init(),t.audio.click(),t.continueCampaign()}),Q("#btn-sandbox").addEventListener("click",()=>{t.audio.init(),t.audio.click(),t.startSandbox()}),Q("#btn-how").addEventListener("click",()=>{t.audio.init(),t.audio.click(),this.showHowTo()}),this.el.btnMap.addEventListener("click",()=>{t.audio.init(),t.audio.click(),t.openWarMap()}),this.el.btnShop.addEventListener("click",()=>{t.audio.init(),t.audio.click(),t.openShop()}),this.el.btnSound.addEventListener("click",()=>t.toggleSound()),this.el.btnMenu.addEventListener("click",()=>{t.audio.init(),t.audio.click(),t.pause()}),this.el.tutNext.addEventListener("click",()=>this.advanceTutorial()),this.el.tutSkip.addEventListener("click",()=>this.finishTutorial()),this.el.btnWave.addEventListener("click",()=>{t.audio.init(),t.audio.click(),t.beginWave()}),this.el.btnCamera.addEventListener("click",()=>t.selectCamera()),this.el.btnUndo.addEventListener("click",()=>t.undo()),this.el.btnDemolish.addEventListener("click",()=>t.selectDemolish()),this.el.btnRepair.addEventListener("click",()=>{t.audio.init(),t.state==="combat"?t.useAbility("repair"):t.repairAll()}),Q("#ability-volley").addEventListener("click",()=>t.useAbility("volley")),Q("#ability-horn").addEventListener("click",()=>t.useAbility("horn")),Q("#ability-repair").addEventListener("click",()=>t.useAbility("repair")),Q("#cancel-target").addEventListener("click",()=>{t.aimingVolley=!1,this.setAimingVolley(!1)}),Q("#hero-focus").addEventListener("click",()=>t.focusHero()),this.el.modal.querySelector(".modal-backdrop").addEventListener("click",()=>{this.modalCloseable&&this.escapeModal()}),window.addEventListener("keydown",e=>this.onKey(e))}onKey(t){const e=this.game;if(t.target&&t.target.matches&&t.target.matches("input, textarea"))return;if(t.key==="Escape"){if(this.modalOpen){this.modalCloseable?this.escapeModal():e.state==="paused"&&e.resume();return}if(e.aimingVolley){e.aimingVolley=!1,this.setAimingVolley(!1);return}if(e.state==="combat"){e.pause();return}if(e.state==="build"||e.state==="sandbox"){e.selectCamera();return}}if(this.modalOpen||e.state==="title")return;const n=t.key.toLowerCase();if((t.ctrlKey||t.metaKey)&&n==="z"){t.preventDefault(),e.undo();return}if(n==="m"){t.preventDefault(),e.openWarMap();return}if(n==="c"){t.preventDefault(),e.openShop();return}if(n==="v"){e.selectCamera();return}if(n==="x"){e.selectDemolish();return}if(n==="q"&&e.state==="combat"){e.useAbility("volley");return}if(n==="w"){if(e.state==="combat"){e.useAbility("horn");return}t.preventDefault(),e.beginWave();return}if(n==="e"){t.preventDefault(),e.state==="combat"?e.useAbility("repair"):e.repairAll();return}if(n===" "&&e.state==="build"){t.preventDefault(),e.beginWave();return}if(n>="1"&&n<="9"){const i=Number(n)-1,s=xc[i];s&&e.selectBuild(s)}}showHUD(t){this.el.hud.classList.toggle("hidden",!t)}showTitle(t){t?(this.el.title.classList.remove("hidden","fade-out"),this.el.title.style.display="flex",this.el.title.style.pointerEvents="",this.updateTitle()):(this.el.title.classList.add("fade-out"),setTimeout(()=>{this.el.title.classList.contains("fade-out")&&(this.el.title.classList.add("hidden"),this.el.title.style.display="none")},450))}updateTitle(){const t=this.game.getSaveInfo(),e=this.game.getSaveInfo("steelstone_sandbox_v2");if(this.el.btnContinue){const i=!!(t&&t.city);this.el.btnContinue.classList.toggle("hidden",!i);const s=this.el.btnContinue.querySelector("span");i&&s&&(s.textContent=t.completed?"Continue Castle":`Continue · Wave ${t.wave||1}`)}const n=Math.max(this.game.bestWave||0,t?.wavesSurvived||0,e?.wavesSurvived||0);this.el.best.textContent=n>0?`Best defense: Wave ${n} / ${ze}`:"Best defense: —",t?.completed&&(this.el.best.textContent=`Campaign complete · Best defense: all ${ze} waves`)}setBuildMode(){const t=this.game;this.currentDungeon=null,this.el.bottombar.classList.remove("hidden","combat"),this.el.bottombar.style.display="",this.el.abilities.classList.add("hidden"),this.el.heroHud.classList.add("hidden"),this.el.waveProgress.classList.add("hidden"),this.el.bossBar.classList.add("hidden"),this.el.quest.classList.remove("hidden"),this.el.quest.classList.remove("done"),this.el.phasePill.classList.remove("combat"),this.showHUD(!0),this.el.btnWave.style.display=t.sandbox?"none":"",this.el.btnWave.classList.toggle("ready",!t.sandbox&&t.state==="build"),this.updatePhase(),this.updateWaveButton(),this.setTool(t.tool,t.selectedType),this.markResourcesDirty(),this.markCityDirty(),this.markQuestsDirty(),this.setAimingVolley(!1),this.updateSound(t.audio.enabled),setTimeout(()=>this.el.quest.classList.remove("hidden"),10)}enterCombat(){this.game,this.currentDungeon=null,this.el.bottombar.classList.add("hidden"),this.el.abilities.classList.remove("hidden"),this.el.heroHud.classList.remove("hidden"),this.el.waveProgress.classList.remove("hidden"),this.el.quest.classList.add("hidden"),this.el.phasePill.classList.add("combat"),this.el.btnWave.classList.remove("ready"),this.el.targetHint.classList.add("hidden"),this.setAimingVolley(!1),this.updatePhase(),this.updateWaveProgress(),this.updateHeroHud(),this.updateAbilities(),this.el.bossBar.classList.add("hidden"),this.game.castle.hideGhost(),this.game.castle.select(null),this.game.ui.closeModal(!0)}enterDungeon(t){this.currentDungeon=t,this.el.phasePill.classList.add("combat"),this.updatePhase(),this.updateWaveProgress(),this.el.quest.classList.add("hidden"),this.el.heroHud.classList.remove("hidden"),this.el.abilities.classList.remove("hidden"),this.el.waveProgress.classList.remove("hidden")}updatePhase(){const t=this.game;t.state==="combat"&&this.currentDungeon?(this.el.phaseLabel.textContent="Dungeon",this.el.waveLabel.textContent=this.currentDungeon.name,this.el.phasePill.classList.add("combat")):t.state==="combat"?(this.el.phaseLabel.textContent="Under Siege",this.el.waveLabel.textContent=`Wave ${t.wave} / ${ze}`,this.el.phasePill.classList.add("combat")):t.state==="sandbox"?(this.el.phaseLabel.textContent="Free Build",this.el.waveLabel.textContent="No sieges",this.el.phasePill.classList.remove("combat")):t.state==="title"?(this.el.phaseLabel.textContent="Build Phase",this.el.waveLabel.textContent=`Wave ${t.wave} / ${ze}`):(this.el.phaseLabel.textContent="Build Phase",this.el.waveLabel.textContent=`Wave ${Math.min(t.wave,ze)} / ${ze}`,this.el.phasePill.classList.remove("combat"))}updateWaveButton(){const t=this.game;if(t.sandbox){this.el.btnWave.style.display="none";return}this.el.btnWave.style.display="",this.el.waveMain.textContent=t.wave===ze?"Final Wave":"Begin Wave";const e=mi[Math.min(t.wave,ze)-1],n=e?Object.values(e.comp).reduce((i,s)=>i+s,0):0;this.el.waveSub.textContent=e?`Wave ${t.wave} · ${n} enemies`:"The raiders are coming",this.el.btnWave.classList.toggle("ready",t.state==="build")}setTool(t,e){this.el.btnCamera.classList.toggle("active",t==="camera"),this.el.btnDemolish.classList.toggle("active",t==="demolish");for(const[n,i]of Object.entries(this.cardEls))i.classList.toggle("selected",t==="build"&&n===e);this.updateSelected()}updateSelected(){const t=this.game;if(t.tool==="build"&&t.selectedType){const e=he[t.selectedType];this.el.selIcon.innerHTML=`<use href="#${e.icon}"/>`,this.el.selName.textContent=e.name,this.el.selDesc.textContent=e.desc,this.el.selCost.innerHTML=this.costHTML(t.getCost(t.selectedType),!0,!0)}else t.tool==="demolish"?(this.el.selIcon.innerHTML='<use href="#i-hammer"/>',this.el.selName.textContent="Raze",this.el.selDesc.textContent="Tap or drag to remove buildings. Half the cost is recovered.",this.el.selCost.innerHTML='<span style="color:#a99f8c">Keep is permanent</span>'):(this.el.selIcon.innerHTML='<use href="#i-eye"/>',this.el.selName.textContent="Inspect & Camera",this.el.selDesc.textContent="Drag to look around. Tap a building to inspect or upgrade it.",this.el.selCost.innerHTML='<span style="color:#a99f8c">Two fingers to pan & zoom</span>')}costHTML(t,e=!1,n=!1){const i=this.game,s=[];for(const[a,o]of Object.entries(t||{})){if(!n&&o<=0)continue;const c=e&&!i.sandbox&&(i.resources[a]||0)<o;s.push(`<span class="${c?"short":""}">${rt(Ke[a].icon)}${Math.ceil(o)}</span>`)}return s.join("")}markResourcesDirty(){this.resourcesDirty=!0,this.cityDirty=!0}markCityDirty(){this.cityDirty=!0}markQuestsDirty(){this.questsDirty=!0}pulseAll(){for(const t of["gold","wood","stone","food"])this.pulseResource(t)}pulseResources(t){for(const e of t)this.pulseResource(e)}pulseResource(t){const e=this.resourceEls[t];e&&(e.classList.add("flash"),setTimeout(()=>e.classList.remove("flash"),380))}updateResources(){const t=this.game,e=t.castle.stats();for(const n of["gold","wood","stone","food"]){const i=rg(t.resources[n]||0);this.resourceEls[n]&&(this.resourceEls[n].textContent=i)}this.resourceEls.pop&&(this.resourceEls.pop.textContent=`${e.used}/${e.capacity}`,this.resourceEls.pop.parentElement?.classList.toggle("crowded",e.used/Math.max(1,e.capacity)>.9)),this.resourceEls.happy&&(this.resourceEls.happy.textContent=`${Math.round(e.happiness)}`,this.resourceEls.happy.parentElement?.classList.toggle("unhappy",e.happiness<35)),this.resourcesDirty=!1}updateCity(){const t=this.game;this.updateResources();for(const[e,n]of Object.entries(this.cardEls)){const i=t.getCost(e);n.classList.toggle("unaffordable",!t.canAfford(i))}this.updateSelected(),this.updatePhase(),t.state!=="combat"&&this.updateWaveButton(),this.cityDirty=!1}updateQuests(){const t=this.game;t.ensureQuests();let e="";const n=3+(t.isSubscribed?.()?1:0);for(const l of t.quests.active.slice(0,n)){const h=wr.find(p=>p.id===l);if(!h)continue;const d=t.questProgress(h),u=Object.entries(h.reward).map(([p,g])=>`<span title="${Ke[p].name}">${rt(Ke[p].icon)}${g}</span>`).join("");e+=`<li>
        <span class="qbox"></span>
        <span class="qtext">${h.title}<span class="qprog">${Math.min(d.cur,d.n)}/${d.n}</span>
          <span class="qreward">${u}</span>
        </span>
      </li>`}this.el.questList.innerHTML=e;const i=t.castle.splendor(t.wavesSurvived),s=Lo(i);this.currentRank=s,this.el.rankLabel.textContent=s.name;const a=s.next,o=a?Math.max(1,a.min-s.min):1,c=a?Math.max(0,Math.min(1,(i-s.min)/o)):1;this.el.rpFill.style.width=`${c*100}%`,this.el.rpLabel.textContent=a?`${i} splendor · ${Math.max(0,a.min-i)} to ${a.name}`:`${i} splendor · legendary`,this.questsDirty=!1}updateRank(t,e){this.currentRank=e,this.el.rankLabel.textContent=e.name;const n=e.next,i=n?Math.max(1,n.min-e.min):1,s=n?Math.max(0,Math.min(1,(t-e.min)/i)):1;this.el.rpFill.style.width=`${s*100}%`,this.el.rpLabel.textContent=n?`${t} splendor · ${Math.max(0,n.min-t)} to ${n.name}`:`${t} splendor · legendary`}updateCombat(){this.updateWaveProgress(),this.updateAbilities(),this.updateHeroHud(),this.updateBoss(),this.resourcesDirty&&this.updateResources()}updateWaveProgress(){const t=this.game;let e=t.combat?.totalEnemies||0;if(!this.currentDungeon){const i=mi[t.wave-1];if(!i)return;e=Object.values(i.comp).reduce((s,a)=>s+a,0)}e||(e=Math.max(1,(t.combat?.queue.length||0)+(t.combat?.enemies?.length||0)));const n=(t.combat?.queue.length||0)+(t.combat?.enemies||[]).filter(i=>i.hp>0).length;this.el.wprogFill.style.width=`${Math.max(0,Math.min(100,n/e*100))}%`,this.el.wprogText.textContent=this.currentDungeon?`${n} of ${e} dungeon foes`:`${n} of ${e} remaining`}updateAbilities(){const t=this.game;for(const e of["volley","horn","repair"]){const n=Q(`#ability-${e}`);if(!n)continue;const i=t.cooldowns[e]||0,s=t.cooldownMax[e]||1,a=Math.max(0,Math.min(1,i/s));n.classList.toggle("cooling",i>0),n.classList.toggle("ready",i<=0),n.style.setProperty("--cd",(a*100).toFixed(1)),n.classList.toggle("targeting",e==="volley"&&t.aimingVolley)}}updateHeroHud(){const t=this.game;if(!t.combat)return;const e=t.combat.hero;this.el.heroHud.classList.remove("hidden");const n=e.maxHp?Math.max(0,e.hp/e.maxHp):0;this.el.heroFill.style.width=`${n*100}%`,this.el.heroHud.classList.toggle("dead",!e.alive),e.alive?e.target?this.el.heroState.textContent="Fighting":e.hasCommand?this.el.heroState.textContent="Moving":this.el.heroState.textContent="Guarding":this.el.heroState.textContent=`Fallen · ${Math.ceil(e.respawnTimer)}s`}updateBoss(){const e=this.game.combat?.boss;if(!e||e.hp<=0){this.el.bossBar.classList.add("hidden");return}this.el.bossBar.classList.remove("hidden"),this.el.bossName&&(this.el.bossName.textContent=e.def?.name||"Champion"),this.el.bossFill.style.width=`${Math.max(0,e.hp/e.maxHp)*100}%`}showBoss(t="Warlord Gruk"){this.el.bossName&&(this.el.bossName.textContent=t),this.el.bossBar.classList.remove("hidden")}hideBoss(){this.el.bossBar.classList.add("hidden")}setAimingVolley(t){this.el.targetHint.classList.toggle("hidden",!t),this.el.abilities.classList.toggle("targeting-mode",t),t&&this.el.abilities.classList.remove("hidden")}updateSound(t){this.el.btnSound&&(this.el.btnSound.innerHTML=`<svg class="ic"><use href="#${t?"i-sound":"i-muted"}"/></svg>`,this.el.btnSound.setAttribute("aria-label",t?"Mute sound":"Enable sound"))}tick(t){this.resourcesDirty&&this.updateResources(),this.cityDirty&&this.updateCity(),this.questsDirty&&this.game.state!=="combat"&&this.updateQuests(),this.game.state==="combat"&&this.updateAbilities()}toast(t,e=""){this.el.toast.textContent=t,this.el.toast.className=`show ${e}`.trim(),clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>{this.el.toast.className=this.el.toast.className.replace("show","").trim()},3400)}hint(t,e=6e3){this.el.hint.textContent=t,this.el.hint.classList.remove("hidden"),this.el.hint.style.animation="none",this.el.hint.offsetWidth,this.el.hint.style.animation="",clearTimeout(this.hintTimer),this.hintTimer=setTimeout(()=>this.el.hint.classList.add("hidden"),e)}callout(t,e="",n="",i=""){const s=this.el.callout;s.innerHTML=`<div class="wc-kicker">${e}</div><div class="wc-title">${t}</div><div class="wc-sub">${n}</div>`,s.classList.remove("hidden"),s.style.animation="none",s.offsetWidth,s.style.animation="",clearTimeout(this.calloutTimer),this.calloutTimer=setTimeout(()=>s.classList.add("hidden"),3800)}openModal(t,e={}){this.el.modalCard.className=`modal-card ${e.className||""}`.trim(),this.el.modalCard.innerHTML=t,this.el.modal.classList.remove("hidden"),this.modalOpen=!0,this.modalCloseable=e.closeable!==!1,e.onMount&&e.onMount(this.el.modalCard),Oe("[data-close]",this.el.modalCard).forEach(n=>n.addEventListener("click",()=>this.escapeModal()))}closeModal(t=!1){this.el.modal.classList.add("hidden"),this.modalOpen=!1,t&&(this.el.modalCard.innerHTML="")}escapeModal(){const t=this.game;if(t.state==="paused"){if(this.howFromPause){this.howFromPause=!1,t.resume(),this.el.modal.classList.add("hidden"),this.modalOpen=!1;return}t.resume();return}this.closeModal(!0),t.selectedStructure&&t.clearSelection()}showBuilding(t){const e=this.game,n=he[t.type],i=t.level,s=e.castle.stats(),a=[];Math.max(0,Math.min(100,t.hp/t.maxHp*100)),a.push(`<div class="bld-stat"><span>${rt("i-shield")}Integrity</span><b>${Math.ceil(t.hp)} / ${t.maxHp}</b></div>`),n.population&&a.push(`<div class="bld-stat"><span>${rt("i-people")}Population</span><b>+${hh(t.type,i)} capacity</b></div>`),n.workers&&a.push(`<div class="bld-stat"><span>${rt("i-people")}Workers</span><b>${pi(t.type,i)}</b></div>`);const o=Tr(t.type,i);if(Object.keys(o).length){const d=Object.entries(o).map(([u,p])=>`${rt(Ke[u].icon)} +${Math.round(p*10)/10}`).join(" ");a.push(`<div class="bld-stat"><span>${rt("i-farm")}Per 6s</span><b>${d}</b></div>`)}n.happiness&&a.push(`<div class="bld-stat"><span>${rt("i-happy")}Happiness</span><b>+${Er(t.type,i)}</b></div>`),n.garrison&&a.push(`<div class="bld-stat"><span>${rt("i-captain")}Garrison</span><b>${Zo(t.type,i)} guards</b></div>`);const c=Io(t.type,i);c&&(a.push(`<div class="bld-stat"><span>${rt("i-tower")}Damage</span><b>${Math.round(c.damage)} per shot</b></div>`),a.push(`<div class="bld-stat"><span>${rt("i-eye")}Range</span><b>${c.range.toFixed(1)}</b></div>`));let l="";if(n.maxLevel&&i<n.maxLevel){const d=e.getUpgradeCost(t),u=e.staffMissing(t.type,i+1,i);e.canAfford(d);const p=Tr(t.type,i+1),g=Object.keys(p).length?Object.entries(p).map(([w,S])=>{const _=Tr(t.type,i)[w]||0;return`${Ke[w].name} +${Math.round((S-_)*10)/10}/6s`}).join(" · "):"",v=n.happiness?` · Happiness +${Math.round(Er(t.type,i+1)-Er(t.type,i))}`:"",m=Io(t.type,i+1),f=m?` · Damage ${Math.round(m.damage)} · Range ${m.range.toFixed(1)}`:"";l=`<div class="bld-up">
        <h4>${rt("i-upgrade")}Upgrade to level ${i+1}</h4>
        <p>${g||"Stronger structure"}${v}${f}<br/>
        Costs ${e.costText(d)}${n.workers?" · +1 worker":""}${u>0?` · <span style="color:#e08b7b">needs ${u} more population</span>`:""}.</p>
        <div class="up-cost">${this.costHTML(d,!0)}</div>
      </div>`}else n.maxLevel&&(l=`<div class="bld-up"><h4>${rt("i-star")}Masterwork</h4><p>This building is at its highest level. It stands as a monument to your city.</p></div>`);const h=`
      <button class="modal-close" data-close aria-label="Close">${rt("i-x")}</button>
      <div class="bld-head">
        <div class="bld-art">${rt(n.icon)}</div>
        <div class="bld-headtext">
          <div class="modal-kicker">${n.category} · Level ${i}${n.maxLevel?` / ${n.maxLevel}`:""}</div>
          <h2 class="modal-title">${n.name}</h2>
        </div>
      </div>
      <p class="modal-sub">${n.desc}</p>
      <div class="bld-stats">${a.join("")}</div>
      ${l}
      <div class="bld-actions">
        ${n.maxLevel&&i<n.maxLevel?`<button class="btn gold" data-upgrade ${!e.canAfford(e.getUpgradeCost(t))||e.staffMissing(t.type,i+1,i)>0?'disabled style="opacity:.45"':""}>${rt("i-upgrade")}Upgrade</button>`:""}
        <button class="btn" data-repair ${t.hp>=t.maxHp?'disabled style="opacity:.45"':""}>${rt("i-repair")}Repair</button>
        ${t.type!=="keep"?`<button class="btn demolish" data-demolish>${rt("i-hammer")}Raze</button>`:""}
        <button class="btn" data-close>${rt("i-x")}Close</button>
      </div>
      <div class="modal-note" style="margin-top:10px;font-size:10px;color:#8d8473">${n.workers?`Employs ${pi(t.type,i)} of your ${s.capacity} people. `:""}${t.type==="tower"||t.type==="ballista"||t.type==="catapult"?"Fires automatically during a siege.":""}</div>
    `;this.openModal(h,{closeable:!0,className:"narrow",onMount:d=>{const u=Q("[data-upgrade]",d);u&&u.addEventListener("click",()=>e.upgradeSelected());const p=Q("[data-repair]",d);p&&p.addEventListener("click",()=>e.repairStructure(t));const g=Q("[data-demolish]",d);g&&g.addEventListener("click",()=>{e.demolishAt(t.i,t.j),e.clearSelection()})}})}showReward(t,e,n,i={}){const s=this.game,a=Po(t),o=Object.entries(e).map(([u,p])=>`<span class="loot-chip">${rt(Ke[u].icon)}+${p}</span>`).join(""),c=n.map(u=>`
      <button class="upgrade-card" data-upgrade="${u.id}">
        <div class="uic">${rt(u.icon)}</div>
        <h4>${u.name}</h4>
        <p>${u.desc}</p>
      </button>`).join(""),l=i.claim?`
      <div class="claim-banner">
        <span class="claim-icon">${rt("i-crown")}</span>
        <div><b>${i.claim.name} is yours.</b><span>${i.claim.claim}</span></div>
        <span class="claim-crowns">${rt("i-crown")}+${i.claim.reward} Crowns</span>
      </div>`:"",h=i.chronicle?`<div class="chronicle-line">${rt("i-eye")}<span>${i.chronicle}</span></div>`:"",d=`
      <div class="modal-kicker">${a?.tag||"The Chronicle"} · Wave ${t} survived</div>
      <h2 class="modal-title">The line holds.</h2>
      <p class="modal-sub">Your people cheer from the battlements. Choose a permanent boon before the next raid — the enemy will return stronger.</p>
      ${l}
      ${h}
      <div class="rew-loot">${o}</div>
      <div class="upgrade-grid">${c}</div>
      <div class="modal-actions"><span class="modal-note">Choose one boon. It applies immediately.</span></div>
    `;this.openModal(d,{closeable:!1,onMount:u=>{Oe("[data-upgrade]",u).forEach(p=>p.addEventListener("click",()=>s.pickUpgrade(p.dataset.upgrade)))}}),this.el.quest.classList.add("hidden")}showVictory(){const t=this.game;t.castle.stats();const e=t.castle.splendor(t.wavesSurvived),n=`
      <div class="rankup-card story-finale">
        <div class="rankup-crest">${rt("i-crown")}</div>
        <div class="modal-kicker">${fr.kicker}</div>
        <h2 class="modal-title">${fr.title}</h2>
        <p class="modal-sub">${fr.body}</p>
        <div class="oath-line">${fr.oath}</div>
        <div class="stats-grid">
          <div class="stat"><b>${ze}</b><span>Waves held</span></div>
          <div class="stat"><b>${t.regionsClaimed.length}</b><span>Regions claimed</span></div>
          <div class="stat"><b>${e}</b><span>Splendor</span></div>
        </div>
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-keep>${rt("i-hammer")}Keep Building</button>
          <button class="btn" data-map>${rt("i-tent")}War Map</button>
          <button class="btn" data-shop>${rt("i-crown")}Crown Vault</button>
          <button class="btn" data-title>Return to Title</button>
        </div>
      </div>`;this.openModal(n,{closeable:!1,className:"narrow",onMount:i=>{Q("[data-keep]",i).addEventListener("click",()=>{this.closeModal(!0),t.keepBuilding()}),Q("[data-map]",i).addEventListener("click",()=>{this.closeModal(!0),t.keepBuilding(),t.openWarMap()}),Q("[data-shop]",i).addEventListener("click",()=>{t.openShop()}),Q("[data-title]",i).addEventListener("click",()=>{this.closeModal(!0),t.returnToTitle()})}})}showDefeat(t=!1,e=null){const n=this.game,i=n.castle.splendor(n.wavesSurvived),s=`
      <div class="rankup-card">
        <div class="rankup-crest" style="color:#d98b7c;border-color:rgba(184,70,51,.55);background:radial-gradient(circle at 40% 30%,rgba(184,70,51,.25),rgba(0,0,0,.3))">${rt("i-skull")}</div>
        <div class="modal-kicker">${t?"The dungeon claims you":"The keep has fallen"}</div>
        <h2 class="modal-title" style="color:#f0c3b7">${t?`${e?.name||"The dungeon"} holds.`:"Your city burns."}</h2>
        <p class="modal-sub">${t?"The boss is still breathing and your company is broken. The Crown System logs the attempt and offers you the door. Retry the dungeon with a stronger castle — or walk away with your city intact.":"The raiders broke through and put the keep to the torch. The island remembers what you built — return to the planning table and try a different defense."}</p>
        <div class="stats-grid">
          <div class="stat"><b>${n.wavesSurvived}</b><span>Waves held</span></div>
          <div class="stat"><b>${n.clearedDungeons.length}</b><span>Dungeons cleared</span></div>
          <div class="stat"><b>${i}</b><span>Splendor</span></div>
        </div>
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-retry>${rt("i-undo")}${t?"Retry Dungeon":"Retry Wave"}</button>
          <button class="btn" data-title>Return to Title</button>
        </div>
        <div class="modal-note" style="text-align:center;margin-top:10px">Retry restores your castle exactly as it stood before the ${t?"dungeon":"wave"}.</div>
      </div>`;this.openModal(s,{closeable:!1,className:"narrow",onMount:a=>{Q("[data-retry]",a).addEventListener("click",()=>t?n.retryDungeon():n.retryWave()),Q("[data-title]",a).addEventListener("click",()=>{this.closeModal(!0),n.returnToTitle()})}})}showPause(){const t=this.game,e=t.audio.enabled,n=`
      <button class="modal-close" data-close aria-label="Resume">${rt("i-x")}</button>
      <div class="modal-kicker">${t.sandbox?"Free build":"Campaign"}</div>
      <h2 class="modal-title">Paused</h2>
      <p class="modal-sub">${t.sandbox?"Your city is quiet. The sea is calm.":`Wave ${Math.min(t.wave,ze)} of ${ze} · ${t.wavesSurvived} survived`}</p>
      <div class="pause-list">
        <div class="pause-row"><span>Sound</span><button class="switch ${e?"on":""}" data-sound aria-label="Toggle sound"></button></div>
      </div>
      <div class="modal-actions">
        <button class="btn gold" data-resume>${rt("i-play")}Resume</button>
        <button class="btn" data-map>${rt("i-tent")}War Map</button>
        <button class="btn" data-shop>${rt("i-crown")}Crown Vault</button>
        <button class="btn" data-how>${rt("i-eye")}How to Play</button>
      </div>
      <div class="modal-actions" style="margin-top:8px">
        <button class="btn" data-title>Save & Return to Title</button>
        <button class="btn danger" data-restart>New City</button>
      </div>
      <div class="modal-note" style="margin-top:12px">Press Esc to resume. Your campaign is autosaved while you build.</div>
    `;this.openModal(n,{closeable:!0,className:"narrow",onMount:i=>{Q("[data-resume]",i).addEventListener("click",()=>t.resume()),Q("[data-sound]",i).addEventListener("click",s=>{const a=t.audio.toggle();s.currentTarget.classList.toggle("on",a),this.updateSound(a)}),Q("[data-how]",i).addEventListener("click",()=>{this.howFromPause=!0,this.showHowTo()}),Q("[data-map]",i).addEventListener("click",()=>t.openWarMap()),Q("[data-shop]",i).addEventListener("click",()=>t.openShop()),Q("[data-title]",i).addEventListener("click",()=>{this.closeModal(!0),t.returnToTitle()}),Q("[data-restart]",i).addEventListener("click",()=>{this.showConfirm("Found a new city?","This campaign castle and its progress will be lost.","Abandon & Rebuild",()=>{this.closeModal(!0),t.state="title",t.startNewCampaign(!0)})})}})}showHowTo(){const t=`
      <button class="modal-close" data-close aria-label="Close">${rt("i-x")}</button>
      <div class="modal-kicker">Field manual</div>
      <h2 class="modal-title">Build it your way.</h2>
      <p class="modal-sub">Steel &amp; Stone is a free-form castle-city builder with real sieges. There is no correct castle — only the one you can hold.</p>
      <div class="how-grid">
        <div class="how-item"><h4>${rt("i-hand")}Place & paint</h4><p>Choose a building from the bottom bar, then tap the island. <b>Walls, gates and roads paint</b> while you drag. Tap <b>Camera</b> to look around and inspect.</p></div>
        <div class="how-item"><h4>${rt("i-house")}Grow a city</h4><p>Houses add <b>population</b>; farms, lumber camps, quarries and markets employ workers and produce resources every 6 seconds. Happiness boosts output.</p></div>
        <div class="how-item"><h4>${rt("i-upgrade")}Upgrade everything</h4><p>Tap any building with the Camera tool to inspect it. Spend resources to upgrade it — more output, more hit points, better towers.</p></div>
        <div class="how-item"><h4>${rt("i-captain")}Command the captain</h4><p>During a siege, <b>tap the ground</b> to send Captain Aldric there. He fights on his own, cleaves nearby raiders, and revives if he falls.</p></div>
        <div class="how-item"><h4>${rt("i-tower")}Hold the line</h4><p>Towers and siege engines fire automatically. Raiders path toward your keep and will break the cheapest route — gates attract them, walls slow them.</p></div>
        <div class="how-item"><h4>${rt("i-horn")}Use your boons</h4><p>Q volleys arrows, W sounds the war horn, E repairs the walls. After every wave, choose a permanent boon for your castle.</p></div>
      </div>
      <div class="modal-actions">
        <span class="modal-note">Tip: houses first, then economy, then walls and towers.</span>
        <button class="btn gold" data-close>Understood</button>
      </div>
    `;this.openModal(t,{closeable:!0,className:"",onMount:e=>{Oe("[data-close]",e).forEach(n=>n.addEventListener("click",()=>{this.howFromPause?(this.howFromPause=!1,this.showPause()):this.closeModal(!0)}))}})}showPrologue(){const t=this.game,e=zi.body.map(i=>`<p>${i}</p>`).join(""),n=`
      <div class="story-modal">
        <div class="story-glow"></div>
        <div class="modal-kicker">${zi.kicker}</div>
        <h2 class="modal-title story-title">${zi.title}</h2>
        <p class="story-lead">${zi.lead}</p>
        <div class="story-body">${e}</div>
        <div class="oath-line">${zi.oath}</div>
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-awaken>${rt("i-crown")}${zi.cta}</button>
        </div>
        <div class="modal-note" style="text-align:center;margin-top:10px">The Crown System will guide you through your first city. You can skip it at any time.</div>
      </div>`;this.openModal(n,{closeable:!1,className:"story-modal-card",onMount:i=>{Q("[data-awaken]",i).addEventListener("click",()=>{t.audio.init(),t.audio.victory(),this.closeModal(!0),this.startTutorial()})}})}startTutorial(){!this.game||this.game.tutorialDone||(this.tutorialIndex=0,this.tutorialActive=!0,this.renderTutorial())}renderTutorial(){const t=vs[this.tutorialIndex];if(!t){this.finishTutorial();return}const e=this.tutorialIndex+1;this.el.tutStep.textContent=`${e} / ${vs.length}`,this.el.tutKicker.textContent=t.kicker,this.el.tutTitle.textContent=t.title,this.el.tutText.textContent=t.text,this.el.tutIcon.setAttribute("href",`#${t.icon}`),this.el.tutBar.style.width=`${e/vs.length*100}%`;const n=!!(t.events&&t.events.length);this.el.tutWait.classList.toggle("hidden",!n),n&&(this.el.tutWait.innerHTML=`${rt("i-arrow")}<span>${t.wait||"Complete the action to continue."}</span>`),this.el.tutNext.classList.toggle("hidden",n),this.el.tutNext.textContent=this.tutorialIndex===0?"Begin":"Continue",this.el.tutorial.classList.remove("hidden"),this.tutorialActive=!0}tutorialEvent(t,e){if(!this.tutorialActive)return;const n=vs[this.tutorialIndex];!n?.events?.length||!n.events.some(s=>s.type!==t?!1:Array.isArray(s.data)?s.data.includes(e):!0)||(this.game.audio?.select?.(),this.tutorialIndex++,this.renderTutorial())}advanceTutorial(){if(!this.tutorialActive)return;const t=vs[this.tutorialIndex];if(!t){this.finishTutorial();return}t.events?.length||(this.game.audio?.click?.(),this.tutorialIndex++,this.renderTutorial())}finishTutorial(){if(!this.tutorialActive){this.el.tutorial.classList.add("hidden");return}this.tutorialActive=!1,this.el.tutorial.classList.add("hidden"),this.game.finishTutorial?.()}regionById(t){return Un.find(e=>e.id===t)||null}regionStatus(t){const e=this.game;return e.regionsClaimed.includes(t.id)?{key:"claimed",label:"Claimed",note:"Banner raised"}:e.wave>=t.from&&e.wave<=t.to&&!e.completed?{key:"current",label:"Front line",note:`Wave ${Math.min(e.wave,t.to)}`}:e.wave<t.from?{key:"locked",label:"Sealed",note:`Wave ${t.from}`}:{key:"cleared",label:"Unclaimed",note:"Ready"}}showWarMap(){const t=this.game;if(!this.mapSelected){const a=Po(Math.min(t.wave,ze));this.mapSelected={type:"region",id:a.id}}const e=Un.map(a=>`${a.x},${a.y}`).join(" "),n=Un.map(a=>{const o=this.regionStatus(a);return`<button class="map-node region ${o.key}" style="left:${a.x}%;top:${a.y}%" data-node="region" data-id="${a.id}" aria-label="${a.name}">
        <span class="node-pin">${rt(a.icon)}</span>
        <span class="node-label"><b>${a.short}</b><i>${o.label}</i></span>
        ${o.key==="claimed"?`<span class="node-badge">${rt("i-crown")}</span>`:""}
      </button>`}).join(""),i=Mr.map(a=>{const o=t.dungeonAvailable(a),c=t.isDungeonCleared(a.id),l=this.regionById(a.region);return`${l?`<path class="dungeon-path" d="M ${l.x} ${l.y} L ${a.x} ${a.y}"/>`:""}<button class="map-node dungeon ${o?c?"cleared":"open":"locked"}" style="left:${a.x}%;top:${a.y}%" data-node="dungeon" data-id="${a.id}" aria-label="${a.name}">
        <span class="node-pin">${rt(c?"i-star":"i-skull")}</span>
        <span class="node-label"><b>${a.name.replace(/^The /,"")}</b><i>${c?"Cleared":o?"Dungeon":`Wave ${a.unlockWave}`}</i></span>
      </button>`}).join(""),s=`
      <button class="modal-close" data-close aria-label="Close">${rt("i-x")}</button>
      <div class="map-head">
        <div class="map-heading">
          <div class="modal-kicker">The War Table</div>
          <h2 class="modal-title">The crowns of Vareth</h2>
          <p class="modal-sub">Five regions stand between your grey island and the Iron Citadel. Claim them by holding their waves — then descend into the dungeons hidden along the road.</p>
        </div>
        <div class="map-wealth">
          <span class="crown-pill">${rt("i-crown")}<b data-crown-balance>${(t.premium.crowns||0).toLocaleString("en-US")}</b><em>Crowns</em></span>
          <button class="btn small gold" data-shop>${rt("i-crown")}Crown Vault</button>
        </div>
      </div>
      <div class="map-body">
        <div class="war-map">
          <div class="map-terrain"></div>
          <svg class="map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline class="map-route" points="${e}"/>
            ${i.match(/<path[^>]*>/g)?.join("")||""}
          </svg>
          ${n}
          ${i.replace(/<path[^>]*>/g,"")}
          <span class="map-compass">N</span>
          <span class="map-sea-label">The Sundered Sea</span>
          <span class="map-iron-label">The Iron Citadel</span>
        </div>
        <aside class="map-panel" id="map-panel"></aside>
      </div>
      <div class="map-legend">
        <span><i class="legend-dot claimed"></i>Claimed</span>
        <span><i class="legend-dot current"></i>Front line</span>
        <span><i class="legend-dot locked"></i>Sealed</span>
        <span><i class="legend-dot dungeon"></i>Dungeon</span>
        <span class="legend-spacer"></span>
        <span>${t.regionsClaimed.length} / ${Un.length} regions · ${t.clearedDungeons.length} / ${Mr.length} dungeons</span>
      </div>`;this.openModal(s,{closeable:!0,className:"war-map-modal",onMount:a=>{Oe("[data-node]",a).forEach(o=>o.addEventListener("click",()=>{t.audio.init(),t.audio.click(),this.mapSelected={type:o.dataset.node,id:o.dataset.id},this.renderMapInfo()})),Q("[data-shop]",a)?.addEventListener("click",()=>t.openShop()),this.renderMapInfo(),this.updateCrowns()}})}renderMapInfo(){const t=this.game,e=this.el.modalCard,n=Q("#map-panel",e);if(!n)return;const i=this.mapSelected||{type:"region",id:Un[0].id};if(Oe(".map-node",e).forEach(l=>l.classList.toggle("active",l.dataset.node===i.type&&l.dataset.id===i.id)),i.type==="dungeon"){const l=_s(i.id);if(!l)return;const h=Do[l.boss],d=Ze(l.skin),u=t.dungeonAvailable(l),p=t.isDungeonCleared(l.id),g=this.regionById(l.region),v=Object.entries(l.loot).filter(([m,f])=>f>0).map(([m,f])=>{const w=m==="crowns"?"i-crown":Ke[m].icon;return`<span class="loot-chip">${rt(w)}+${f}</span>`}).join("");n.innerHTML=`
        <div class="panel-kicker">${l.power}${p?" · Cleared":""}</div>
        <h3 class="panel-title">${l.name}</h3>
        <div class="panel-where">${rt(g?.icon||"i-tent")}${g?.name||"Vareth"}</div>
        <p class="panel-lore">${l.lore}</p>
        <div class="panel-boss">
          <span class="panel-boss-ic">${rt("i-skull")}</span>
          <div><b>${h?.name||l.boss}</b><span>${l.bossLine}</span></div>
        </div>
        <div class="panel-section"><h4>Loot</h4><div class="rew-loot tight">${v}</div></div>
        <div class="panel-section">
          <h4>First clear</h4>
          <div class="panel-skin">${d?this.skinPreviewHTML(d):""}<div><b>${d?.name||"Exclusive skin"}</b><span>${p?"Already claimed — repeat clears give reduced resources.":"Awarded the first time you defeat this boss."}</span></div></div>
        </div>
        <div class="panel-actions">
          <button class="btn gold wide" data-enter ${u?"":"disabled"}>${rt("i-skull")}${u?p?"Descend Again":"Enter the Dungeon":`Unlocks after Wave ${l.unlockWave}`}</button>
        </div>
        ${u?"":`<div class="panel-note">Survive ${l.unlockWave-t.wavesSurvived} more wave${l.unlockWave-t.wavesSurvived===1?"":"s"} to open this dungeon.</div>`}`,Q("[data-enter]",n)?.addEventListener("click",()=>this.showDungeonBrief(l));return}const s=this.regionById(i.id)||Un[0],a=this.regionStatus(s),o=!t.sandbox&&(a.key==="current"||a.key==="cleared"),c=t.regionsClaimed.includes(s.id);n.innerHTML=`
      <div class="panel-kicker">${s.tag} · ${a.label}</div>
      <h3 class="panel-title">${s.name}</h3>
      <div class="panel-where">${rt(s.icon)}Waves ${s.from}–${s.to}</div>
      <p class="panel-lore">${s.lore}</p>
      <div class="panel-stats">
        <div><span>Waves held</span><b>${Math.min(t.wavesSurvived,s.to)} / ${s.to}</b></div>
        <div><span>Status</span><b class="st-${a.key}">${a.label}</b></div>
      </div>
      ${c?`<div class="panel-claim">${rt("i-crown")}<span>${s.claim}</span></div>`:`<div class="panel-note">Hold every wave through Wave ${s.to} to claim this region. Each claim grants <b>60 Crowns</b>.</div>`}
      <div class="panel-section">
        <h4>Dungeons in this region</h4>
        ${this.regionDungeonList(s.id)}
      </div>
      <div class="panel-actions">
        ${o?`<button class="btn gold wide" data-march>${rt("i-horn")}March to Wave ${Math.min(t.wave,s.to)}</button>`:`<button class="btn wide" data-close>${c?"Return to your city":"Close the war table"}</button>`}
      </div>`,Q("[data-march]",n)?.addEventListener("click",()=>{this.closeModal(!0),t.beginWave()}),Oe("[data-dungeon]",n).forEach(l=>l.addEventListener("click",()=>{const h=_s(l.dataset.dungeon);h&&(this.mapSelected={type:"dungeon",id:h.id},this.renderMapInfo())}))}regionDungeonList(t){const e=this.game,n=Mr.filter(i=>i.region===t);return n.length?n.map(i=>{const s=e.dungeonAvailable(i),a=e.isDungeonCleared(i.id);return`<button class="panel-dungeon ${s?"":"locked"}" data-dungeon="${i.id}">
        <span class="pd-ic">${rt(a?"i-star":"i-skull")}</span>
        <span class="pd-name">${i.name}<i>${i.power}</i></span>
        <span class="pd-state">${a?"Cleared":s?"Open":`W${i.unlockWave}`}</span>
      </button>`}).join(""):'<div class="panel-note">No dungeons are marked here. The Crown System is silent.</div>'}skinPreviewHTML(t){if(!t)return"";if(t.cat==="sky"){const n=wc[t.theme]||wc.day;return`<div class="skin-swatch sky" style="--s1:${n[0]};--s2:${n[1]};--s3:${n[2]}"><span class="swatch-sun"></span></div>`}if(t.cat==="roof")return`<div class="skin-swatch roof" style="--swatch:${`#${(t.color||11029304).toString(16).padStart(6,"0")}`}"><span class="swatch-roof"></span></div>`;if(t.cat==="stone")return`<div class="skin-swatch stone" style="--swatch:${t.color===16777215?"#d8cdb4":`#${t.color.toString(16).padStart(6,"0")}`}"><span class="swatch-brick"></span></div>`;if(t.cat==="captain"){const n=As[t.palette]||As.steel,i=s=>`#${s.toString(16).padStart(6,"0")}`;return`<div class="skin-swatch captain" style="--tunic:${i(n.tunic)};--cape:${i(n.cape)};--plate:${i(n.plate)};--trim:${i(n.trim)}">${rt("i-captain")}</div>`}return`<div class="skin-swatch livery" style="--cloth:${{blue:"#244763",red:"#5f1f1b",frost:"#2f5a72",ember:"#3a1616",verdant:"#1f3b2a",sun:"#4a2e10",rat:"#3d3524"}[t.banner]||"#244763"};--trim:${t.ui||"#e7c37a"}">${rt("i-crown")}</div>`}showShop(){const t=this.game;gs.some(s=>s.id===this.shopTab)||(this.shopTab=gs[0].id);const e=gs.map(s=>`<button class="shop-tab ${this.shopTab===s.id?"active":""}" data-tab="${s.id}">${rt(s.icon)}<span>${s.name}</span></button>`).join(""),n=ch.map(s=>`
      <button class="crown-pack" data-pack="${s.id}">
        <span class="pack-amount">${rt("i-crown")}${s.crowns.toLocaleString("en-US")}</span>
        <b>${s.name}</b>
        <i>${s.price}</i>
        <em>Simulated</em>
      </button>`).join(""),i=`
      <button class="modal-close" data-close aria-label="Close">${rt("i-x")}</button>
      <div class="shop-head">
        <div>
          <div class="modal-kicker">The Crown Vault</div>
          <h2 class="modal-title">Dress your kingdom.</h2>
          <p class="modal-sub">Banners, roofs, stone and skies. Everything here is cosmetic — your city still rises on its own merit.</p>
        </div>
        <div class="shop-wealth">
          <span class="crown-pill big">${rt("i-crown")}<b data-crown-balance>${(t.premium.crowns||0).toLocaleString("en-US")}</b><em>Crowns</em></span>
        </div>
      </div>
      <div class="shop-tabs">${e}</div>
      <div class="shop-grid" id="shop-grid"></div>
      <div class="shop-cols">
        <section class="shop-block">
          <h3>${rt("i-crown")}Packs of Crowns</h3>
          <p>Crowns unlock cosmetics and region banners. Packs are simulated in this demo — no payment is taken.</p>
          <div class="pack-grid">${n}</div>
        </section>
        <section class="shop-block oath-block" id="shop-oath"></section>
      </div>
      <div class="demo-note">${rt("i-eye")} <span><b>Demo store.</b> Crowns, packs and the Sovereign's Oath are entirely simulated. No money is charged, no card is needed, and nothing here affects save progress.</span></div>`;this.openModal(i,{closeable:!0,className:"shop-modal",onMount:s=>{Oe("[data-tab]",s).forEach(a=>a.addEventListener("click",()=>{t.audio.init(),t.audio.click(),this.shopTab=a.dataset.tab,Oe("[data-tab]",s).forEach(o=>o.classList.toggle("active",o.dataset.tab===this.shopTab)),this.renderShopGrid()})),Oe("[data-pack]",s).forEach(a=>a.addEventListener("click",()=>{t.buyCrowns(a.dataset.pack),this.updateCrowns()})),this.renderOath(),this.renderShopGrid(),this.updateCrowns()}})}renderShopGrid(){const t=this.game,e=Q("#shop-grid",this.el.modalCard);if(!e)return;const n=gs.find(a=>a.id===this.shopTab)||gs[0],s=G0(n.id).map(a=>{const o=t.ownsSkin(a.id),c=t.premium.equipped[a.cat]===a.id;let l;if(c)l=`<button class="btn small" disabled>${rt("i-shield")}Equipped</button>`;else if(o)l=`<button class="btn small gold" data-equip="${a.id}">Equip</button>`;else if(a.dungeon){const d=_s(a.dungeon);l=`<button class="btn small" disabled title="${d?d.name:"Dungeon"}">${rt("i-skull")}First clear</button>`}else a.subscription?l=`<button class="btn small" disabled>${rt("i-crown")}Oath exclusive</button>`:l=`<button class="btn small gold" data-buy="${a.id}">Buy · ${a.price}</button>`;const h=c?"Equipped":o?"Owned":a.dungeon?"Dungeon reward":a.subscription?"Sovereign's Oath":a.price?`${a.price} Crowns`:"Free";return`<article class="skin-card ${c?"equipped":""} ${o?"owned":""}">
        ${this.skinPreviewHTML(a)}
        <div class="skin-body">
          <div class="skin-head"><h4>${a.name}</h4><span class="skin-tag">${h}</span></div>
          <p>${a.desc}</p>
          <div class="skin-foot">
            ${a.dungeon&&!o?`<span class="skin-source">${rt("i-tent")}${_s(a.dungeon)?.name||"Dungeon"}</span>`:"<span></span>"}
            ${l}
          </div>
        </div>
      </article>`}).join("");e.innerHTML=`<div class="shop-cat-blurb">${rt(n.icon)}<div><b>${n.name}</b><span>${n.blurb}</span></div></div>${s}`,Oe("[data-equip]",e).forEach(a=>a.addEventListener("click",()=>{t.equipSkin(a.dataset.equip),this.renderShopGrid()})),Oe("[data-buy]",e).forEach(a=>a.addEventListener("click",()=>{t.buySkin(a.dataset.buy),this.updateCrowns(),this.renderShopGrid()}))}renderOath(){const t=this.game,e=Q("#shop-oath",this.el.modalCard);if(!e)return;const n=t.isSubscribed(),i=t.subscriptionDaysLeft();e.innerHTML=`
      <h3>${rt("i-crown")}${Yi.name}</h3>
      <div class="oath-price">${n?`<b>Active</b><span>${i} day${i===1?"":"s"} remaining</span>`:`<b>${Yi.price}</b><span>cancel anytime</span>`}</div>
      <p>${n?"Your oath holds. The Crown System notes your continued patronage — the benefits below are already applied.":"A monthly pledge for a sovereign who wants every edge. Activation is simulated in this prototype."}</p>
      <ul class="oath-benefits">${Yi.benefits.map(s=>`<li>${rt("i-star")}<span>${s}</span></li>`).join("")}</ul>
      <button class="btn ${n?"":"gold"} wide" data-oath ${n?"disabled":""}>${n?"Oath Sworn":"Swear the Oath · demo"}</button>
      <div class="demo-mini">No card, no charge. The subscription is simulated for demonstration.</div>`,Q("[data-oath]",e)?.addEventListener("click",()=>{if(t.isSubscribed())return;t.activateSubscription()&&(this.updateCrowns(),this.renderOath(),this.renderShopGrid())})}showDungeonBrief(t){const e=this.game,n=Do[t.boss],i=Ze(t.skin),s=e.dungeonAvailable(t),a=e.isDungeonCleared(t.id),o=this.regionById(t.region),c=Object.entries(t.loot).filter(([h,d])=>d>0).map(([h,d])=>{const u=h==="crowns"?"i-crown":Ke[h].icon;return`<span class="loot-chip">${rt(u)}+${d}</span>`}).join(""),l=`
      <button class="modal-close" data-close aria-label="Close">${rt("i-x")}</button>
      <div class="dungeon-brief">
        <div class="brief-emblem">${rt("i-skull")}</div>
        <div class="modal-kicker">${t.power} · ${o?.name||"Vareth"}</div>
        <h2 class="modal-title">${t.name}</h2>
        <p class="modal-sub">${t.lore}</p>
        <div class="brief-cols">
          <div class="brief-block">
            <h4>${rt("i-skull")}Boss</h4>
            <b>${n?.name||t.boss}</b>
            <p>${t.bossLine}</p>
            <div class="brief-hp">${rt("i-shield")}${n?.hp||"?"} HP · ${n?.damage||"?"} damage</div>
          </div>
          <div class="brief-block">
            <h4>${rt("i-crown")}Loot</h4>
            <div class="rew-loot tight">${c}</div>
            ${i?`<div class="brief-skin">${this.skinPreviewHTML(i)}<div><b>${i.name}</b><span>${a?"First clear already claimed. Repeat clears give reduced resources.":"Exclusive first-clear reward."}</span></div></div>`:""}
          </div>
        </div>
        <div class="modal-actions">
          <button class="btn" data-close>Not yet</button>
          <button class="btn gold" data-launch ${s?"":"disabled"}>${rt("i-horn")}${s?"Begin the Descent":`Unlocks after Wave ${t.unlockWave}`}</button>
        </div>
        ${s?'<div class="modal-note" style="text-align:center;margin-top:10px">Your castle is saved before the fight. Defeat returns you to the war table.</div>':""}
      </div>`;this.openModal(l,{closeable:!0,className:"dungeon-brief-card",onMount:h=>{Oe("[data-close]",h).forEach(d=>d.addEventListener("click",()=>this.closeModal(!0))),Q("[data-launch]",h)?.addEventListener("click",()=>{e.audio.init(),this.closeModal(!0),e.startDungeon(t.id)})}})}showDungeonComplete(t,e={}){const n=this.game,i=e.loot||{},s=i.crowns||0,a=Object.entries(i).map(([l,h])=>!h||l==="crowns"?"":`<span class="loot-chip">${rt(Ke[l].icon)}+${h}</span>`).join("")+(s?`<span class="loot-chip crown">${rt("i-crown")}+${s} Crowns</span>`:""),o=e.skin,c=`
      <div class="rankup-card dungeon-win">
        <div class="rankup-crest">${rt("i-skull")}</div>
        <div class="modal-kicker">${t.power} · ${e.first?"First clear":"Cleared again"}</div>
        <h2 class="modal-title">${t.name} is silent.</h2>
        <p class="modal-sub">${e.first?"The boss falls and the dark gives up its hoard. The Crown System marks the dungeon complete — and something new hangs in your vault.":"The boss falls again. The hoard is thinner the second time, but your name is still carved into the stone."}</p>
        <div class="rew-loot">${a}</div>
        ${o&&e.first?`<div class="first-clear">
          ${this.skinPreviewHTML(o)}
          <div><div class="fc-kicker">${rt("i-star")}First clear unlocked</div><b>${o.name}</b><span>Equip it from the Crown Vault.</span></div>
        </div>`:""}
        <div class="modal-actions" style="justify-content:center;margin-top:18px">
          <button class="btn gold" data-return>${rt("i-hammer")}Return to the City</button>
          <button class="btn" data-map>${rt("i-tent")}War Map</button>
        </div>
        <div class="modal-note" style="text-align:center;margin-top:10px">${e.first?"First-clear skin added to your collection.":"Repeat clears grant reduced gold, wood and stone."}</div>
      </div>`;this.openModal(c,{closeable:!1,className:"narrow",onMount:l=>{Q("[data-return]",l).addEventListener("click",()=>{this.closeModal(!0),n.finishDungeon()}),Q("[data-map]",l).addEventListener("click",()=>{n.finishDungeon(),n.openWarMap()})}})}showConfirm(t,e,n,i){const s=`
      <button class="modal-close" data-close aria-label="Cancel">${rt("i-x")}</button>
      <div class="modal-kicker">A new beginning</div>
      <h2 class="modal-title">${t}</h2>
      <p class="modal-sub">${e}</p>
      <div class="modal-actions">
        <button class="btn" data-close>Cancel</button>
        <button class="btn gold" data-confirm>${n}</button>
      </div>`;this.openModal(s,{closeable:!0,className:"narrow",onMount:a=>{Oe("[data-close]",a).forEach(o=>o.addEventListener("click",()=>this.closeModal(!0))),Q("[data-confirm]",a).addEventListener("click",()=>{this.closeModal(!0),i()})}})}}const og=new R(0,1,0),Na=new R;new R;class lg{constructor(){this.a=[]}get size(){return this.a.length}push(t){const e=this.a;e.push(t);let n=e.length-1;for(;n>0;){const i=n-1>>1;if(e[i].f<=e[n].f)break;[e[i],e[n]]=[e[n],e[i]],n=i}}pop(){const t=this.a,e=t[0],n=t.pop();if(t.length){t[0]=n;let i=0;for(;;){const s=i*2+1,a=s+1;let o=i;if(s<t.length&&t[s].f<t[o].f&&(o=s),a<t.length&&t[a].f<t[o].f&&(o=a),o===i)break;[t[o],t[i]]=[t[i],t[o]],i=o}}return e}}function cg(r){if(!r)return 1;switch(r.type){case"keep":return 1;case"gate":return 3.4;case"wall":return 8;case"tower":return 6;default:return 5}}function Sc(r,t,e,n,i){t=Fr(t),e=Fr(e);const s=ge*ge,a=e*ge+t,o=i*ge+n;if(a===o)return[{i:t,j:e}];const c=new Float32Array(s).fill(1/0),l=new Int32Array(s).fill(-1),h=new Uint8Array(s),d=new lg;c[a]=0;const u=(w,S)=>{const _=Math.abs(w-n),C=Math.abs(S-i);return _+C+(Math.SQRT2-2)*Math.min(_,C)};d.push({idx:a,i:t,j:e,f:u(t,e)});const p=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];let g=!1;for(;d.size;){const w=d.pop();if(!h[w.idx]){if(h[w.idx]=1,w.idx===o){g=!0;break}for(const[S,_,C]of p){const A=w.i+S,E=w.j+_;if(A<0||E<0||A>=ge||E>=ge)continue;const L=E*ge+A;if(h[L])continue;const M=r.cells[L],b=C*cg(M),P=c[w.idx]+b;P<c[L]&&(c[L]=P,l[L]=w.idx,d.push({idx:L,i:A,j:E,f:P+u(A,E)}))}}}if(!g)return[];const v=[];let m=o,f=0;for(;m!==-1&&f++<s&&(v.push({i:m%ge,j:Math.floor(m/ge)}),m!==a);)m=l[m];return v.reverse(),v}class Tc{constructor(t,e){this.team=e,this.max=100;const n=new De({color:16777215,roughness:.85,flatShading:!0}),i=rn(13805953,{roughness:.9}),s=new De({color:16777215,roughness:.88,flatShading:!0}),a=rn(12173508,{roughness:.55,metalness:.35}),o=(c,l)=>{const h=new qn(c,l,this.max);return h.count=0,h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1,h.instanceMatrix.setUsage(Dr),t.add(h),h};this.body=o(new dn(.28,.38,1,6),n),this.head=o(new kn(.24,1),i),this.shield=o(new Se(.48,.62,.09),s),this.weapon=o(new Se(.075,.95,.075),a),this.dummy=new ue,this.color=new Mt,this.white=new Mt(16777215)}render(t){const e=t.filter(i=>i.hp>0||i.deathT<1),n=Math.min(this.max,e.length);for(let i=0;i<n;i++){const s=e[i],a=s.hp<=0,o=a?Math.min(1,s.deathT):0,c=s.scale*(a?Math.max(.02,1-o*1.1):1),l=a?0:Math.sin(s.anim)*.06,h=a?o*1.4:s.attackAnim>0?Math.sin(s.attackAnim*Math.PI)*.15:0,d=s.yaw,u=.02+l;this.dummy.position.set(s.x,u+.58*c,s.z),this.dummy.rotation.set(a?o*1.35:h*.4,d,a?o*.7:0),this.dummy.scale.set(c,c,c),this.dummy.updateMatrix(),this.body.setMatrixAt(i,this.dummy.matrix),this.dummy.position.set(s.x,u+1.26*c,s.z),this.dummy.rotation.set(0,d,0),this.dummy.scale.set(c,c,c),this.dummy.updateMatrix(),this.head.setMatrixAt(i,this.dummy.matrix);const p=-.44,g=Math.cos(d)*p,v=-Math.sin(d)*p,m=s.shieldScale??1;this.dummy.position.set(s.x+g,u+.72*c,s.z+v),this.dummy.rotation.set(0,d+.12,a?o*1.2:0),this.dummy.scale.set(c*m,c*m,c),this.dummy.updateMatrix(),this.shield.setMatrixAt(i,this.dummy.matrix);const f=s.attackAnim>0?Math.sin(s.attackAnim*Math.PI):0;if(s.isRam)this.dummy.position.set(s.x,u+.9*c,s.z+.5*c),this.dummy.rotation.set(0,d,Math.PI/2),this.dummy.scale.set(c*1.3,c*2.5,c*1.3);else{const _=Math.cos(d)*.46,C=-Math.sin(d)*.46;this.dummy.position.set(s.x+_,u+.8*c,s.z+C),this.dummy.rotation.set(-f*1.3,d,.25+f*.5),this.dummy.scale.set(c,c,c)}this.dummy.updateMatrix(),this.weapon.setMatrixAt(i,this.dummy.matrix);const w=this.color.setHex(s.color);s.flash>0&&w.lerp(this.white,Math.min(.85,s.flash)),this.body.setColorAt(i,w);const S=this.color.setHex(s.shieldColor??7489327);s.flash>0&&S.lerp(this.white,Math.min(.7,s.flash*.8)),this.shield.setColorAt(i,S)}for(const i of[this.body,this.head,this.shield,this.weapon])i.count=n,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}hide(){for(const t of[this.body,this.head,this.shield,this.weapon])t.count=0}}class hg{constructor(t,e,n){this.scene=t,this.fx=e,this.audio=n,this.group=this.build(),this.group.visible=!1,t.add(this.group),this.ring=new Wt(new ns(.62,.78,24),new Mn({color:15188858,transparent:!0,opacity:.65,side:He,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.08,this.scene.add(this.ring),this.ring.visible=!1,this.x=3,this.z=7,this.yaw=0,this.maxHp=720,this.hp=720,this.damage=46,this.level=1,this.alive=!0,this.respawnTimer=0,this.speed=3.5,this.attackCd=0,this.attackAnim=0,this.anim=0,this.command=new R(3,0,7),this.hasCommand=!1,this.target=null}build(){const t=this.palette||As.steel,e=new jt,n=(S,_={})=>new De({color:S,roughness:_.roughness??.8,metalness:_.metalness??.05,flatShading:_.flat??!0});this.legL=new jt,this.legR=new jt,this.legL.position.set(-.16,.62,0),this.legR.position.set(.16,.62,0),this.legMat=n(3883857,{roughness:.9});const i=new Wt(new Se(.2,.62,.24),this.legMat);i.position.y=-.3;const s=i.clone();i.castShadow=s.castShadow=!0,this.legL.add(i),this.legR.add(s),e.add(this.legL,this.legR),this.tunicMat=n(t.tunic,{roughness:.8});const a=new Wt(new dn(.33,.4,.95,7),this.tunicMat);a.position.y=1.1,a.castShadow=!0,e.add(a),this.plateMat=n(t.plate,{roughness:.45,metalness:.5});const o=new Wt(new Se(.6,.5,.36),this.plateMat);o.position.y=1.22,o.castShadow=!0,e.add(o),this.trimMat=n(t.trim,{roughness:.75});const c=new Wt(new Se(.62,.12,.44),this.trimMat);c.position.y=.78,e.add(c);const l=new Wt(new kn(.25,1),n(13805953,{roughness:.9}));l.position.y=1.86,l.castShadow=!0,e.add(l);const h=new Wt(new dn(.29,.31,.34,8),this.plateMat);h.position.y=2.03,h.castShadow=!0,e.add(h);const d=new Wt(new Es(.29,8,5,0,Math.PI*2,0,Math.PI/2),this.plateMat);d.position.y=2.17,e.add(d),this.plumeMat=n(t.plume,{roughness:.85});const u=new Wt(new Rs(.13,.55,5),this.plumeMat);u.position.set(0,2.5,-.05),u.rotation.z=-.15,e.add(u),this.capeMat=new De({color:t.cape,side:He,roughness:.95}),this.cape=new Wt(new Fn(.8,1.2,3,3),this.capeMat),this.cape.position.set(0,1.3,-.28),this.cape.rotation.x=.15,this.cape.castShadow=!1,e.add(this.cape),this.armR=new jt,this.armR.position.set(.42,1.35,.02);const p=new Wt(new Se(.15,.58,.15),this.tunicMat);p.position.y=-.24,p.castShadow=!0,this.armR.add(p);const g=new Wt(new Se(.08,1,.04),n(14147040,{metalness:.6,roughness:.35}));g.position.set(0,-.9,.05),g.castShadow=!0,this.armR.add(g);const v=new Wt(new Se(.3,.06,.08),this.trimMat);v.position.set(0,-.36,.05),this.armR.add(v),e.add(this.armR),this.armL=new jt,this.armL.position.set(-.44,1.3,.02);const m=new Wt(new Se(.14,.55,.14),this.tunicMat);m.position.y=-.2,m.castShadow=!0,this.armL.add(m),this.shieldMat=n(t.cape,{roughness:.65});const f=new Wt(new dn(.4,.4,.09,12),this.shieldMat);f.rotation.z=Math.PI/2,f.position.set(-.12,-.12,.16),f.castShadow=!0,this.armL.add(f);const w=new Wt(new Es(.12,8,6),this.trimMat);return w.position.set(-.19,-.12,.16),this.armL.add(w),e.add(this.armL),e}applyPalette(t){if(t){this.palette=t,this.tunicMat?.color.setHex(t.tunic),this.capeMat?.color.setHex(t.cape),this.plateMat?.color.setHex(t.plate),this.trimMat?.color.setHex(t.trim),this.plumeMat?.color.setHex(t.plume),this.shieldMat?.color.setHex(t.cape);for(const e of[this.tunicMat,this.capeMat,this.plateMat,this.trimMat,this.plumeMat,this.shieldMat])e&&(e.needsUpdate=!0)}}get active(){return this.alive&&this.group.visible}reset(t){this.hp=this.maxHp,this.alive=!0,this.respawnTimer=0,this.x=t.x+2.4,this.z=t.z+6.4,this.command.set(this.x,0,this.z),this.hasCommand=!1,this.target=null,this.group.visible=!0,this.ring.visible=!0}commandTo(t){return!this.alive||!this.group.visible?!1:(this.command.set(t.x,0,t.z),this.hasCommand=!0,!0)}takeDamage(t){this.alive&&(this.hp=Math.max(0,this.hp-t),this.hp<=0&&(this.alive=!1,this.group.visible=!1,this.ring.visible=!1,this.respawnTimer=16,Ar(this.fx,new R(this.x,1,this.z),9318183,20),vn(this.fx,new R(this.x,.5,this.z),12430996,18),this.audio?.defeat?.()))}update(t,e,n,i){if(!this.group.visible){!this.alive&&n&&(this.respawnTimer-=t,this.respawnTimer<=0&&(this.alive=!0,this.hp=this.maxHp,this.x=i.x+2.4,this.z=i.z+6.4,this.group.visible=!0,this.ring.visible=!0,this.command.set(this.x,0,this.z),this.hasCommand=!1));return}if(!this.alive)return;this.attackCd=Math.max(0,this.attackCd-t),this.attackAnim=Math.max(0,this.attackAnim-t*3.4);let s=null,a=1/0;for(const c of e){if(c.hp<=0)continue;const l=Math.hypot(c.x-this.x,c.z-this.z);l<a&&(a=l,s=c)}if(s&&a<10.5){this.target=s;const c=s.x-this.x,l=s.z-this.z,h=Math.hypot(c,l);if(this.yaw=Math.atan2(c,l),h>1.75)this.x+=c/h*this.speed*t,this.z+=l/h*this.speed*t,this.anim+=t*8;else if(this.attackCd<=0){this.attackCd=.78,this.attackAnim=1,this.audio?.sword();let d=0;for(const u of e){if(u.hp<=0)continue;Math.hypot(u.x-this.x,u.z-this.z)<3.1&&(d++,this.hitEnemy(u,this.damage+bt(-5,8)),u.hp<=0&&this.onKill?.(u))}d&&Uo(this.fx,new R(s.x,1.1,s.z),16765562,8)}}else{this.target=null;const c=this.hasCommand?this.command.x:i.x+2.4,l=this.hasCommand?this.command.z:i.z+6.4,h=c-this.x,d=l-this.z,u=Math.hypot(h,d);u>.7?(this.yaw=Math.atan2(h,d),this.x+=h/u*this.speed*t,this.z+=d/u*this.speed*t,this.anim+=t*7):this.hasCommand&&(this.hasCommand=!1)}this.x=di(this.x,-43,43),this.z=di(this.z,-43,43),this.group.position.set(this.x,0,this.z),this.group.rotation.y=li(this.group.rotation.y,this.yaw,12,t);const o=Math.sin(this.anim)*.045;this.group.position.y=o,this.legL.rotation.x=Math.sin(this.anim)*.4,this.legR.rotation.x=-Math.sin(this.anim)*.4,this.armR.rotation.x=-this.attackAnim*2.3,this.armR.rotation.z=-.2+this.attackAnim*.8,this.armL.rotation.x=-.15+Math.sin(this.anim*.7)*.05,this.cape.rotation.x=.18+Math.sin(this.anim*.8)*.1+Math.min(.6,Math.abs(Math.sin(this.anim*.4))*.3),this.ring.position.set(this.x,.07,this.z),this.ring.rotation.z+=t*.4,this.ring.material.opacity=.4+Math.sin(performance.now()*.004)*.12}hitEnemy(t,e){t.hp=Math.max(0,t.hp-e),t.flash=1}}function li(r,t,e,n){let i=t-r;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return r+i*(1-Math.exp(-e*n))}class dg{constructor(t,e,n,i,s={}){this.scene=t,this.castle=e,this.fx=n,this.audio=i,this.callbacks=s,this.enemyCrowd=new Tc(t,"enemy"),this.defenderCrowd=new Tc(t,"defender"),this.enemies=[],this.defenders=[],this.queue=[],this.projectiles=[],this.active=!1,this.waveNumber=0,this.time=0,this.allSpawned=!0,this.boss=null,this.hornTimer=0,this.mode="wave",this.dungeon=null,this.totalEnemies=0,this.hero=new hg(t,n,i),this.hero.onKill=a=>this.killEnemy(a),this.commandMarker=new Wt(new ns(.65,1.05,32),new Mn({color:15783059,transparent:!0,opacity:.8,side:He,depthWrite:!1})),this.commandMarker.rotation.x=-Math.PI/2,this.commandMarker.position.y=.09,this.commandMarker.visible=!1,this.scene.add(this.commandMarker),this.markerTime=0,this.arrowMesh=this.initProjectileMesh(new dn(.035,.035,.8,4),13619924,90),this.boltMesh=this.initProjectileMesh(new dn(.06,.06,1.3,4),7300694,24),this.boulderMesh=this.initProjectileMesh(new kn(.34,0),9273713,16),this.projectileDummy=new ue,this.q=new es}initProjectileMesh(t,e,n){const i=new qn(t,new De({color:e,roughness:.55,metalness:.25,flatShading:!0}),n);return i.count=0,i.frustumCulled=!1,i.castShadow=!1,i.instanceMatrix.setUsage(Dr),this.scene.add(i),i}startWave(t,e={}){this.callbacks={...this.callbacks,...e},this.clear(),this.mode="wave",this.dungeon=null,this.waveNumber=t,this.active=!0,this.time=0,this.allSpawned=!1,this.totalSpawned=0;const n=mi[t-1]||mi[mi.length-1],i=n.boss?[0,1,2]:[t%3,(t+1)%3];this.queueEncounter(n.comp,i,["warlord"],!1,1-Object.values(n.comp).reduce((s,a)=>s+a,0)*.008),this.setupEncounter()}startDungeon(t,e={}){if(!t)return;this.callbacks={...this.callbacks,...e},this.clear(),this.mode="dungeon",this.dungeon=t,this.waveNumber=4+t.tier*2,this.active=!0,this.time=0,this.allSpawned=!1,this.totalSpawned=0;const n={...t.comp,[t.boss]:1};this.queueEncounter(n,[0,1,2],[t.boss],!0,.62),this.setupEncounter()}queueEncounter(t,e,n,i,s=.6){const a=[];let o=0;for(const[p,g]of Object.entries(t))for(let v=0;v<g;v++)a.push({type:p,spawn:e[o%e.length]}),o++;const c=new Set(n||[]),l=a.filter(p=>c.has(p.type)),h=a.filter(p=>!c.has(p.type));for(let p=h.length-1;p>0;p--){const g=Math.random()*(p+1)|0;[h[p],h[g]]=[h[g],h[p]]}const d=[...h,...l];this.totalEnemies=d.length;const u=Math.max(.46,s);this.queue=d.map((p,g)=>({...p,isBoss:c.has(p.type),noScale:i&&c.has(p.type),delay:.65+g*u+bt(-.18,.22)})).sort((p,g)=>p.delay-g.delay)}setupEncounter(){this.spawnDefenders();const t=this.castle.centerOf(this.castle.structures.find(e=>e.type==="keep")||{i:Xi,j:qi,w:4,h:4});this.hero.reset(t),this.hero.maxHp=Math.round(720*(this.callbacks.heroHpMult||1)),this.hero.hp=this.hero.maxHp,this.hero.damage=46*(this.callbacks.heroDmgMult||1),this.boss=null}spawnDefenders(){for(const a of this.defenders)this.defenderCrowdCull(a);this.defenders=[];const t=this.castle.structures.filter(a=>a.type==="barracks");let e=0;const n=[];for(const a of t){const o=this.castle.centerOf(a),c=Zo("barracks",a.level);for(let l=0;l<c&&e<8;l++){const h=l/c*Math.PI*2;n.push({x:o.x+Math.cos(h)*(2.2+e%2*.8),z:o.z+Math.sin(h)*2.2}),e++}}const i=this.castle.structures.find(a=>a.type==="keep"),s=i?this.castle.centerOf(i):{x:0,z:0};if(!n.length){for(let a=0;a<2;a++)n.push({x:s.x+(a?2.5:-2.5),z:s.z+6.2});e=2}for(let a=0;a<e;a++){const o=n[a%n.length],c={x:o.x+bt(-.4,.4),z:o.z+bt(-.4,.4),yaw:0,hp:155,maxHp:155,scale:1.02,radius:.42,color:4025236,shieldColor:3233391,shieldScale:1,anim:Math.random()*6,attackAnim:0,flash:0,deathT:0,attackCd:bt(0,.4),target:null,post:o,speed:2.45,damage:13,isHero:!1};this.defenders.push(c)}}defenderCrowdCull(){}spawnEnemy(t,e,n=1,i=1){const s=Do[t];if(!s)return;const a=kr[e%kr.length],o=a.x+bt(-2.2,2.2),c=a.z+bt(-2.2,2.2),l=Fr(Math.round((o+Te)/Gt-.5)),h=Fr(Math.round((c+Te)/Gt-.5)),d=Sc(this.castle,l,h,Xi+2,qi+2),u={x:o,z:c,yaw:Math.atan2(-o,-c),hp:s.hp*n,maxHp:s.hp*n,type:t,def:s,scale:s.scale,radius:s.radius,color:s.color,shieldColor:t==="shield"?7092776:7489327,shieldScale:s.shield||.001,anim:Math.random()*6,attackAnim:0,flash:0,deathT:0,speed:s.speed,damage:s.damage*i,attackCd:bt(0,.7),structureDamage:s.structureDamage||1,siege:!!s.siege,boss:!!s.boss,isRam:t==="ram",path:d,pathIdx:1,pathTimer:bt(1.5,3),targetStructure:null,combatTarget:null,state:"walk"};this.enemies.push(u),this.totalSpawned++,u.boss&&(this.boss=u,this.callbacks.onBossSpawn?.(u)),vn(this.fx,new R(o,.4,c),12365460,10,1.6)}update(t,e={}){if(this.time+=t,this.hornTimer=Math.max(0,this.hornTimer-t),this.markerTime>0?(this.markerTime-=t,this.commandMarker.visible=!0,this.commandMarker.scale.setScalar(1+(1-this.markerTime/1.2)*1.6),this.commandMarker.material.opacity=Math.max(0,this.markerTime/1.2)*.8):this.commandMarker.visible=!1,!this.active){this.hero.group.visible=!1,this.hero.ring.visible=!1,this.enemyCrowd.render(this.enemies),this.updateDeaths(t),this.renderProjectiles(t,!1);return}for(;this.queue.length&&this.queue[0].delay<=this.time;){const s=this.queue.shift(),a=s.noScale?1:1+(this.waveNumber-1)*.11,o=s.noScale?1:1+(this.waveNumber-1)*.075;this.spawnEnemy(s.type,s.spawn,a,o)}this.allSpawned=this.queue.length===0;for(const s of this.enemies)s.hp<=0||this.updateEnemy(s,t);this.updateDefenders(t);const n=this.castle.structures.find(s=>s.type==="keep"),i=n?this.castle.centerOf(n):{x:0,z:0};this.hero.update(t,this.enemies,this.active,i),this.updateTowers(t,e),this.renderProjectiles(t,!0),this.updateDeaths(t),this.enemyCrowd.render(this.enemies),this.defenderCrowd.render(this.defenders),this.heroCapeWave(t),this.allSpawned&&!this.enemies.some(s=>s.hp>0)&&(this.active=!1,this.hero.group.visible=!1,this.hero.ring.visible=!1,this.mode==="dungeon"&&this.dungeon?this.callbacks.onDungeonComplete?.(this.dungeon):this.callbacks.onWaveComplete?.(this.waveNumber))}heroCapeWave(t){}updateEnemy(t,e){if(t.flash=Math.max(0,t.flash-e*4.5),t.attackAnim=Math.max(0,t.attackAnim-e*3.2),t.attackCd=Math.max(0,t.attackCd-e),t.pathTimer-=e,t.anim+=e*(t.speed*2.2),t.siege&&(t.combatTarget=null),!t.siege){let h=null,d=5.2;for(const u of this.defenders){if(u.hp<=0)continue;const p=Math.hypot(u.x-t.x,u.z-t.z);p<d&&(d=p,h=u)}if(this.hero.active){const u=Math.hypot(this.hero.x-t.x,this.hero.z-t.z);u<6.2&&u<d&&(d=u,h=this.hero)}h?t.combatTarget=h:t.combatTarget&&(t.combatTarget.hp<=0||Math.hypot(t.combatTarget.x-t.x,t.combatTarget.z-t.z)>8.5)&&(t.combatTarget=null)}if(t.combatTarget){const h=t.combatTarget,d=h===this.hero;if(h.hp<=0)t.combatTarget=null;else{const u=h.x-t.x,p=h.z-t.z,g=Math.hypot(u,p);t.yaw=li(t.yaw,Math.atan2(u,p),9,e);const v=1.65+t.radius;g>v?this.moveEnemy(t,h.x,h.z,g,e):t.attackCd<=0&&(t.attackCd=t.def.cooldown,t.attackAnim=1,this.audio?.hit(),d?this.hero.takeDamage(t.damage*1.1):(h.hp=Math.max(0,h.hp-t.damage),h.flash=1,Ar(this.fx,new R(h.x,1,h.z),8202786,6)));return}}let n=t.targetStructure;if(n&&n.hp<=0&&(t.targetStructure=null,n=null),!n&&t.path&&t.pathIdx<t.path.length){const h=t.path[t.pathIdx],d=this.castle.getStructureAt(h.i,h.j);d&&d.hp>0&&(t.targetStructure=d,n=d)}if(n){const h=this.castle.centerOf(n),d=h.x-t.x,u=h.z-t.z,p=Math.hypot(d,u);t.yaw=li(t.yaw,Math.atan2(d,u),9,e);const g=Math.max(n.w,n.h)*Gt*.48+t.radius+.35;p>g?this.moveEnemy(t,h.x,h.z,p,e):t.attackCd<=0&&(t.attackCd=t.def.cooldown,t.attackAnim=1,this.castle.damage(n,t.damage*t.structureDamage,"enemy"),this.audio?.hit(),t.isRam&&(vn(this.fx,new R(h.x,1.6,h.z),12036494,10,2.6),this.audio?.build()));return}if(!t.path||!t.path.length||t.pathTimer<=0){const h=Math.floor((t.x+Te)/Gt),d=Math.floor((t.z+Te)/Gt);t.path=Sc(this.castle,h,d,Xi+2,qi+2),t.pathIdx=1,t.pathTimer=bt(2.4,4)}if(!t.path||t.pathIdx>=t.path.length){const h=this.castle.structures.find(d=>d.type==="keep");if(h){const d=this.castle.centerOf(h),u=d.x-t.x,p=d.z-t.z,g=Math.hypot(u,p);g>6.8?this.moveEnemy(t,d.x,d.z,g,e):t.attackCd<=0&&(t.attackCd=t.def.cooldown,t.attackAnim=1,this.castle.damage(h,t.damage*t.structureDamage,"enemy"))}return}const i=t.path[t.pathIdx],s=(i.i+.5)*Gt-Te,a=(i.j+.5)*Gt-Te,o=s-t.x,c=a-t.z,l=Math.hypot(o,c);if(l<.5){t.pathIdx++;return}t.yaw=li(t.yaw,Math.atan2(o,c),8,e),this.moveEnemy(t,s,a,l,e)}moveEnemy(t,e,n,i,s){let a=(e-t.x)/Math.max(.001,i),o=(n-t.z)/Math.max(.001,i);for(const d of this.enemies){if(d===t||d.hp<=0)continue;const u=t.x-d.x,p=t.z-d.z,g=u*u+p*p,v=(t.radius+d.radius)*1.55;if(g<v*v&&g>1e-4){const m=Math.sqrt(g);a+=u/m*.55,o+=p/m*.55}}const c=Math.hypot(a,o)||1;a/=c,o/=c;const l=t.combatTarget?.7:1;t.x+=a*t.speed*l*s,t.z+=o*t.speed*l*s;const h=Math.hypot(t.x,t.z);h>47&&(t.x*=47/h,t.z*=47/h)}updateDefenders(t){for(const e of this.defenders){if(e.hp<=0){e.deathT+=t*2.4;continue}e.flash=Math.max(0,e.flash-t*4),e.attackAnim=Math.max(0,e.attackAnim-t*3.2),e.attackCd=Math.max(0,e.attackCd-t);let n=null,i=23;for(const s of this.enemies){if(s.hp<=0)continue;const a=Math.hypot(s.x-e.x,s.z-e.z);a<i&&(i=a,n=s)}if(n){const s=n.x-e.x,a=n.z-e.z,o=Math.hypot(s,a);e.yaw=li(e.yaw,Math.atan2(s,a),9,t),o>1.55?(e.x+=s/o*e.speed*t,e.z+=a/o*e.speed*t,e.anim+=t*7):e.attackCd<=0&&(e.attackCd=.9,e.attackAnim=1,n.hp=Math.max(0,n.hp-e.damage),n.flash=1,this.audio?.sword(),n.hp<=0&&this.killEnemy(n))}else{const s=e.post.x-e.x,a=e.post.z-e.z,o=Math.hypot(s,a);o>.6&&(e.yaw=li(e.yaw,Math.atan2(s,a),8,t),e.x+=s/o*e.speed*.7*t,e.z+=a/o*e.speed*.7*t,e.anim+=t*6)}}}killEnemy(t){t.hp<=0&&t.deathT===0&&(t.deathT=.001,Ar(this.fx,new R(t.x,.8,t.z),8202786,t.boss?30:9),t.boss&&this.callbacks.onBossKilled?.(t),this.callbacks.onKill?.(t))}updateDeaths(t){for(const e of this.enemies)e.hp<=0&&(e.deathT<=0&&(e.deathT=.001),e.deathT=Math.min(1,e.deathT+t*2.2));this.enemies=this.enemies.filter(e=>e.hp>0||e.deathT<1);for(const e of this.defenders)e.hp<=0&&(e.deathT+=t);this.defenders=this.defenders.filter(e=>e.hp>0||e.deathT<1)}updateTowers(t,e={}){const n=(e.towerDamageMult||1)*(this.hornTimer>0?1.25:1),i=(e.fireRateMult||1)*(this.hornTimer>0?1.2:1);for(const s of this.castle.structures){const a=Io(s.type,s.level);if(!a||s.hp<=0)continue;s.cd=(s.cd||0)-t,s.fireAnim=Math.max(0,(s.fireAnim||0)-t*2.6);const o=this.castle.centerOf(s);let c=null,l=a.range;for(const u of this.enemies){if(u.hp<=0)continue;const p=Math.hypot(u.x-o.x,u.z-o.z),g=u.siege||u.boss?3.5:0;p-g<l&&(l=p-g,c=u)}if(c&&s.aimGroup){const u=Math.atan2(c.x-o.x,c.z-o.z);s.aimGroup.rotation.y=li(s.aimGroup.rotation.y,u,5,t)}if(!c||s.cd>0)continue;const h=(s.type==="ballista"||s.type==="catapult")&&e.siegeDamageMult||1,d=a.damage*n*h;s.cd=a.cooldown/i,this.fireTower(s,a,c,d,o),s.arm&&(s.fireAnim=1)}}fireTower(t,e,n,i,s){const a=new R(s.x,t.muzzleY||3,s.z),o=new R(n.x,.8,n.z);e.kind==="catapult"?(this.projectiles.push({kind:"boulder",start:a,end:o,t:0,dur:1.15+a.distanceTo(o)/55,arc:7+a.distanceTo(o)*.08,damage:i,aoe:3.4,target:null,delay:0}),this.audio?.bolt()):e.kind==="ballista"?(this.projectiles.push({kind:"bolt",start:a,end:o,t:0,dur:.34,arc:.6,damage:i,aoe:0,target:n,delay:0}),this.audio?.bolt()):(this.projectiles.push({kind:"arrow",start:a,end:o,t:0,dur:.4,arc:1.2,damage:i,aoe:0,target:n,delay:0}),this.audio?.arrow())}castVolley(t){for(let n=0;n<20;n++){const i=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*4.6,a=t.x+Math.cos(i)*s,o=t.z+Math.sin(i)*s;this.projectiles.push({kind:"arrow",start:new R(a+bt(-2,2),26+bt(0,6),o+bt(-2,2)),end:new R(a,.4,o),t:0,dur:.55+Math.random()*.5,arc:0,damage:34,aoe:1.7,target:null,delay:Math.random()*.55,volley:!0})}this.audio?.arrow()}damageArea(t,e,n){for(const i of this.enemies)i.hp<=0||Math.hypot(i.x-t.x,i.z-t.z)<=e&&(i.hp=Math.max(0,i.hp-n),i.flash=1,i.hp<=0&&this.killEnemy(i));for(const i of this.defenders)i.hp<=0}renderProjectiles(t,e){if(e)for(let o=this.projectiles.length-1;o>=0;o--){const c=this.projectiles[o];if(c.delay>0){c.delay-=t;continue}c.t+=t/c.dur,c.t>=1&&(this.impact(c),this.projectiles.splice(o,1))}let n=0,i=0,s=0;const a=og;for(const o of this.projectiles){if(o.delay>0)continue;const c=Math.min(1,o.t),l=o.start.x+(o.end.x-o.start.x)*c,h=o.start.z+(o.end.z-o.start.z)*c,u=o.start.y+(o.end.y-o.start.y)*c+Math.sin(c*Math.PI)*o.arc,p=Math.min(1,c+.02),g=o.start.x+(o.end.x-o.start.x)*p,v=o.start.z+(o.end.z-o.start.z)*p,m=o.start.y+(o.end.y-o.start.y)*p+Math.sin(p*Math.PI)*o.arc;Na.set(g-l,m-u,v-h).normalize(),this.q.setFromUnitVectors(a,Na.lengthSq()>0?Na:a),this.projectileDummy.position.set(l,u,h),this.projectileDummy.quaternion.copy(this.q),this.projectileDummy.scale.set(1,1,1),o.kind==="arrow"?n<90&&(this.projectileDummy.updateMatrix(),this.arrowMesh.setMatrixAt(n++,this.projectileDummy.matrix)):o.kind==="bolt"?i<24&&(this.projectileDummy.updateMatrix(),this.boltMesh.setMatrixAt(i++,this.projectileDummy.matrix)):(this.projectileDummy.scale.setScalar(1),s<16&&(this.projectileDummy.updateMatrix(),this.boulderMesh.setMatrixAt(s++,this.projectileDummy.matrix)))}this.arrowMesh.count=n,this.arrowMesh.instanceMatrix.needsUpdate=!0,this.boltMesh.count=i,this.boltMesh.instanceMatrix.needsUpdate=!0,this.boulderMesh.count=s,this.boulderMesh.instanceMatrix.needsUpdate=!0}impact(t){const e=new R(t.end.x,.2,t.end.z);if(t.kind==="boulder")this.damageArea(e,t.aoe,t.damage),J0(this.fx,new R(e.x,.6,e.z),26),vn(this.fx,new R(e.x,.5,e.z),10391674,16,3),this.audio?.boom(),this.callbacks.onBoom?.(.55);else if(t.volley||t.aoe>0)this.damageArea(e,t.aoe,t.damage),vn(this.fx,e,11115395,3,1.4);else{let n=null;if(t.target&&t.target.hp>0&&(n=t.target),!n){for(const i of this.enemies)if(!(i.hp<=0)&&Math.hypot(i.x-e.x,i.z-e.z)<1.2){n=i;break}}n?(n.hp=Math.max(0,n.hp-t.damage),n.flash=1,Ar(this.fx,new R(n.x,1,n.z),8071713,t.kind==="bolt"?10:5),n.hp<=0&&this.killEnemy(n)):vn(this.fx,e,11115395,3,1.1)}}commandHero(t){return this.active&&this.hero.commandTo(t)?(this.commandMarker.position.set(t.x,.09,t.z),this.markerTime=1.2,this.audio?.hero(),!0):!1}activateHorn(){this.hornTimer=12,this.audio?.horn()}healAll(t){for(const e of this.castle.structures)e.hp=Math.min(e.maxHp,e.hp+e.maxHp*t),this.castle.updateBar(e),e.type==="wall"&&this.castle.updateWallColor(e);for(const e of this.defenders)e.hp=Math.min(e.maxHp,e.hp+e.maxHp*t);this.hero.hp=Math.min(this.hero.maxHp,this.hero.hp+this.hero.maxHp*t)}applyHeroUpgrade(){this.hero.maxHp=Math.round(this.hero.maxHp*1.3),this.hero.hp=this.hero.maxHp,this.hero.damage*=1.5}clear(){this.enemies=[],this.defenders=[],this.queue=[],this.projectiles=[],this.boss=null,this.active=!1,this.hornTimer=0,this.allSpawned=!0,this.mode="wave",this.dungeon=null,this.totalEnemies=0,this.enemyCrowd.hide(),this.defenderCrowd.hide(),this.hero.group.visible=!1,this.hero.ring.visible=!1,this.hero.alive=!0,this.commandMarker.visible=!1,this.arrowMesh.count=0,this.boltMesh.count=0,this.boulderMesh.count=0}aliveCount(){return this.enemies.filter(t=>t.hp>0).length+this.queue.length}spawnedAlive(){return this.enemies.filter(t=>t.hp>0).length}}const mr="steelstone_campaign_v2",Ec="steelstone_sandbox_v2",ka="steelstone_best_v2",Ac="steelstone_premium_v1";class ug{constructor({scene:t,camera:e,renderer:n,world:i,castle:s,fx:a,audio:o,controls:c}){this.scene=t,this.camera=e,this.renderer=n,this.world=i,this.castle=s,this.fx=a,this.audio=o,this.controls=c,this.castle.game=this,this.controls.game=this,this.state="title",this.previousState=null,this.sandbox=!1,this.wave=1,this.wavesSurvived=0,this.resources={...Da},this.upgrades=[],this.rankIndex=0,this.bestWave=Number(localStorage.getItem(ka)||0),this.quests={active:[],done:[]},this.tool="camera",this.selectedType=null,this.selectedStructure=null,this.undoStack=[],this.lastPaintCell=null,this.aimingVolley=!1,this.cooldowns={volley:0,horn:0,repair:0},this.cooldownMax={volley:25,horn:45,repair:35},this.tickTimer=ur,this.time=0,this.questTimer=0,this.rankTimer=0,this.saveDirty=!1,this.saveTimer=0,this.snapshot=null,this.heroHintShown=!1,this.completed=!1,this.timeScale=1,this.clearedDungeons=[],this.regionsClaimed=[],this.activeDungeon=null,this.tutorialDone=!1,this.mapSelected=null,this.premium=this.loadPremium(),this.combat=new dg(t,s,a,o,{onWaveComplete:l=>this.onWaveComplete(l),onDungeonComplete:l=>this.onDungeonComplete(l),onBossSpawn:l=>this.onBossSpawn(l),onBossKilled:l=>this.onBossKilled(l),onKill:l=>this.onEnemyKilled(l),onBoom:l=>this.shake(l)}),this.combat.callbacks.heroHpMult=1,this.combat.callbacks.heroDmgMult=1,s.reset(),this.ui=new ag(this),this.applyEquippedSkins(),this.enterTitle(!0)}loadPremium(){const t={crowns:320,ownedSkins:["livery_ashbourne","roof_terracotta","stone_limestone","sky_day","captain_steel"],equipped:{...Vi},subscriptionUntil:0,purchased:[]};try{const e=localStorage.getItem(Ac);if(!e)return t;const n=JSON.parse(e),i={...t.equipped,...n.equipped||{}};for(const s of Object.keys(Vi)){const a=Ze(i[s]);(!a||a.cat!==s)&&(i[s]=Vi[s])}return{crowns:Math.max(0,Number(n.crowns)||0),ownedSkins:Array.isArray(n.ownedSkins)?[...new Set([...t.ownedSkins,...n.ownedSkins])]:t.ownedSkins,equipped:i,subscriptionUntil:Number(n.subscriptionUntil)||0,purchased:Array.isArray(n.purchased)?n.purchased:[]}}catch{return t}}savePremium(){try{localStorage.setItem(Ac,JSON.stringify(this.premium))}catch{}}isSubscribed(){return(this.premium?.subscriptionUntil||0)>Date.now()}ownsSkin(t){const e=Ze(t);return e?e.free||e.subscription&&this.isSubscribed()?!0:this.premium.ownedSkins.includes(t):!1}isDungeonCleared(t){return this.clearedDungeons.includes(t)}addCrowns(t){this.premium.crowns=Math.max(0,(this.premium.crowns||0)+t),this.savePremium(),this.ui?.updateCrowns()}buySkin(t){const e=Ze(t);return e?this.ownsSkin(t)?(this.ui?.toast("You already own that skin.","good"),!1):e.dungeon?(this.ui?.toast("Dungeon skins are earned by defeating their boss.","bad"),!1):e.subscription?(this.ui?.toast("This skin is included with the Sovereign’s Oath.","bad"),!1):(this.premium.crowns||0)<e.price?(this.ui?.toast(`You need ${e.price-this.premium.crowns} more Crowns.`,"bad"),!1):(this.premium.crowns-=e.price,this.premium.ownedSkins.push(t),this.savePremium(),this.equipSkin(t,!0),this.ui?.updateCrowns?.(),this.ui?.toast(`${e.name} unlocked.`,"good"),this.audio.upgrade(),!0):!1}equipSkin(t){const e=Ze(t);return!e||!this.ownsSkin(t)?!1:(this.premium.equipped[e.cat]=t,this.savePremium(),this.applyEquippedSkins(),this.ui?.toast(`${e.name} equipped.`,"good"),this.audio.select(),!0)}buyCrowns(t){const e=ch.find(n=>n.id===t);return e?(this.addCrowns(e.crowns),this.premium.purchased.push({id:t,at:Date.now()}),this.savePremium(),this.ui?.toast(`Demo purchase complete: +${e.crowns} Crowns. No real payment was taken.`,"good"),this.audio.victory(),!0):!1}activateSubscription(){return this.isSubscribed()?(this.ui?.toast("Your Sovereign’s Oath is already active.","good"),!1):(this.premium.subscriptionUntil=Date.now()+Yi.days*864e5,this.premium.crowns=(this.premium.crowns||0)+Yi.crowns,this.premium.ownedSkins.push("livery_sun"),this.premium.equipped.livery="livery_sun",this.savePremium(),this.applyEquippedSkins(),this.ui?.updateCrowns(),this.ui?.toast(`The Sovereign’s Oath is sworn. ${Yi.crowns} Crowns granted (demo, no charge).`,"good"),this.audio.victory(),!0)}subscriptionDaysLeft(){const t=(this.premium?.subscriptionUntil||0)-Date.now();return Math.max(0,Math.ceil(t/864e5))}applyEquippedSkins(){const t=this.premium?.equipped||Vi,e=Ze(t.livery),n=Ze(t.sky),i=Ze(t.captain);this.castle?.applySkins(t),this.world?.applySkyTheme?.(n?.theme||"day"),this.combat?.hero?.applyPalette?.(As[i?.palette]||As.steel),e&&(document.documentElement.style.setProperty("--gold",e.ui||"#e7c37a"),document.documentElement.style.setProperty("--gold-2",e.ui2||"#b8914d"))}enterTitle(t=!1){this.state="title",this.combat.clear(),this.castle.select(null),this.ui.closeModal(!0),this.ui.showHUD(!1),this.ui.showTitle(!0),this.controls.setCinematic(!0),this.ui.updateTitle(),t||this.saveNow()}startNewCampaign(t=!1){if(this.hasCampaignSave()&&!t){this.ui.showConfirm("Found a new city?","Your current campaign save will be replaced. The old castle cannot be recovered.","Found New City",()=>this.startNewCampaign(!0));return}this.castle.bonuses.masonry=0,this.castle.reset(),this.combat.clear(),this.resources={...Da},this.wave=1,this.wavesSurvived=0,this.upgrades=[],this.rankIndex=0,this.bestWave=this.bestWave||0,this.quests={active:[],done:[]},this.completed=!1,this.sandbox=!1,this.clearedDungeons=[],this.regionsClaimed=[],this.activeDungeon=null,this.tutorialDone=!1,this.tool="camera",this.selectedType=null,this.selectedStructure=null,this.undoStack=[],this.aimingVolley=!1,this.cooldowns={volley:0,horn:0,repair:0},this.tickTimer=ur,this.time=0,this.ensureQuests(),this.state="build",this.applyEquippedSkins(),this.ui.closeModal(!0),this.ui.showTitle(!1),this.ui.showHUD(!0),this.ui.setBuildMode(),this.controls.setCinematic(!1),this.controls.focusHome(!0),this.saveNow(),this.updateRank(!0),this.ui.toast("Your banners rise over a new island. Build your city.","good"),setTimeout(()=>{this.state==="build"&&!this.tutorialDone&&this.ui.showPrologue()},350)}continueCampaign(){const t=this.readSave(mr);if(!t){this.ui.toast("No saved castle was found.","bad");return}if(t.completed){this.startSandbox(t);return}this.loadState(t),this.sandbox=!1,this.state="build",this.completed=!1,this.ui.closeModal(!0),this.ui.showTitle(!1),this.ui.showHUD(!0),this.ui.setBuildMode(),this.controls.setCinematic(!1),this.controls.focusHome(!0),this.ensureQuests(),this.ui.toast(`Welcome back. Wave ${this.wave} awaits.`,"good"),this.updateRank(!0)}startSandbox(t=null){const e=t||this.readSave(Ec);e&&e.city?(this.loadState(e),this.resources=e.resources||{gold:5e4,wood:5e4,stone:5e4,food:5e4}):(this.castle.bonuses.masonry=0,this.castle.reset(),this.resources={gold:5e4,wood:5e4,stone:5e4,food:5e4},this.wave=1,this.wavesSurvived=e?.wavesSurvived||0,this.upgrades=[],this.rankIndex=0,this.quests={active:[],done:[]},this.ensureQuests()),this.sandbox=!0,this.state="sandbox",this.completed=!1,this.tutorialDone=!0,this.activeDungeon=null,this.combat.clear(),this.applyEquippedSkins(),this.tool="camera",this.selectedType=null,this.undoStack=[],this.cooldowns={volley:0,horn:0,repair:0},this.tickTimer=ur,this.ui.closeModal(!0),this.ui.showTitle(!1),this.ui.showHUD(!0),this.ui.setBuildMode(),this.controls.setCinematic(!1),this.controls.focusHome(!0),this.saveNow(),this.updateRank(!0),this.ui.toast("Free Build — no raiders will come. Raise whatever you dream.","good"),this.ui.hint("Stone, wood and coin are plentiful here. Every street is yours.",8e3)}loadState(t){this.resources={...Da,...t.resources||{}},this.wave=t.wave||1,this.wavesSurvived=t.wavesSurvived||0,this.upgrades=Array.isArray(t.upgrades)?t.upgrades:[],this.castle.bonuses.masonry=this.upgrades.includes("mason")?.3:0,this.rankIndex=t.rankIndex||0,this.quests=t.quests&&Array.isArray(t.quests.active)?t.quests:{active:[],done:[]},this.bestWave=Math.max(this.bestWave,t.bestWave||0,t.wavesSurvived||0),this.completed=!!t.completed,this.clearedDungeons=Array.isArray(t.clearedDungeons)?[...t.clearedDungeons]:[],this.regionsClaimed=Array.isArray(t.regionsClaimed)?[...t.regionsClaimed]:[],this.tutorialDone=!!t.tutorialDone,this.activeDungeon=null,this.combat.clear(),this.castle.clearAll(),t.city?this.castle.load(t.city):this.castle.reset(),this.castle.applyMasonry(),this.ensureQuests(),this.undoStack=[],this.snapshot=null,this.castle.select(null),this.applyEquippedSkins(),this.ui?.markCityDirty()}hasCampaignSave(){const t=this.readSave(mr);return!!(t&&t.city)}getSaveInfo(t=mr){return this.readSave(t)}readSave(t){try{const e=localStorage.getItem(t);return e?JSON.parse(e):null}catch{return null}}saveNow(){if(this.state==="title"||this.state==="paused"||this.state==="defeat"||this.state==="combat")return;const t={version:2,resources:{...this.resources},wave:this.wave,wavesSurvived:this.wavesSurvived,upgrades:[...this.upgrades],rankIndex:this.rankIndex,quests:{active:[...this.quests.active],done:[...this.quests.done]},city:this.castle.serialize(),bestWave:this.bestWave,completed:this.completed,clearedDungeons:[...this.clearedDungeons],regionsClaimed:[...this.regionsClaimed],tutorialDone:this.tutorialDone,updated:Date.now()};try{localStorage.setItem(this.sandbox?Ec:mr,JSON.stringify(t)),localStorage.setItem(ka,String(this.bestWave)),this.saveDirty=!1}catch{}}saveSoon(){this.saveDirty=!0,this.saveTimer=1.2}canAfford(t){if(this.sandbox)return!0;for(const[e,n]of Object.entries(t||{}))if((this.resources[e]||0)<n)return!1;return!0}missingResources(t){const e={};for(const[n,i]of Object.entries(t||{})){const s=this.resources[n]||0;s<i&&(e[n]=Math.ceil(i-s))}return e}spend(t){if(!this.sandbox){for(const[e,n]of Object.entries(t||{}))this.resources[e]=Math.max(0,(this.resources[e]||0)-n);this.ui?.markResourcesDirty()}}grant(t,e=!1){for(const[n,i]of Object.entries(t||{}))this.resources[n]=(this.resources[n]||0)+i;this.ui?.markResourcesDirty(),e||this.ui?.pulseAll()}stats(){return this.castle.stats()}productionMultiplier(){let e=.8+this.stats().happiness/250;return this.hasUpgrade("bounty")&&(e*=1.4),e*=1+this.rankIndex*.02,this.isSubscribed()&&(e*=1.2),e}tickEconomy(){const t=this.castle.stats(),e=this.productionMultiplier(),n={};for(const[i,s]of Object.entries(t.production)){if(s<=0)continue;let a=s*e;i==="gold"&&this.hasUpgrade("tax")&&(a*=1.5),this.resources[i]=(this.resources[i]||0)+a,n[i]=Math.round(a*10)/10}Object.keys(n).length&&(this.ui?.markResourcesDirty(),this.ui?.pulseResources(Object.keys(n))),this.tickTimer=ur}getCost(t){let e={...Sr(t,1)};return this.hasUpgrade("stone")&&(t==="wall"||t==="gate")&&(e.stone=Math.max(1,Math.round((e.stone||0)*.75))),e}getUpgradeCost(t){let e=W0(t);return e?(this.hasUpgrade("stone")&&(t.type==="wall"||t.type==="gate")&&(e.stone=Math.max(1,Math.round((e.stone||0)*.75))),e):null}canStaff(t,e=1,n=0){if(this.sandbox)return!0;const i=this.stats(),s=pi(t,e)-pi(t,n);return s<=0?!0:i.used+s<=i.capacity}staffMissing(t,e=1,n=0){const i=this.stats(),s=pi(t,e)-pi(t,n);return Math.max(0,i.used+s-i.capacity)}hasUpgrade(t){return this.upgrades.includes(t)}combatBonuses(){const t=this.isSubscribed()?1.1:1;return{towerDamageMult:(this.hasUpgrade("fletch")?1.25:1)*(1+this.rankIndex*.04)*t,fireRateMult:this.hasUpgrade("rapid")?1.2:1,siegeDamageMult:(this.hasUpgrade("siege")?1.35:1)*t,heroHpMult:(this.hasUpgrade("medic")?1.4:1)*(this.hasUpgrade("hero")?1.3:1),heroDmgMult:this.hasUpgrade("hero")?1.5:1}}repairGold(t){const e=this.isSubscribed()?.75:1;return Math.max(1,Math.round(t*e))}selectBuild(t){if(this.state==="combat"||this.state==="reward"||this.state==="victory"||this.state==="defeat"||t==="keep")return;this.tool="build",this.selectedType=t,this.aimingVolley=!1,this.castle.select(null),this.selectedStructure=null,this.ui.closeModal(!0),this.ui.setTool("build",t),this.ui.updateSelected(),this.audio.select(),this.ui.tutorialEvent?.("select",t),he[t].road?this.ui.hint("Drag across the grass to pave a road.",4500):t==="wall"&&this.ui.hint("Drag across the grass to raise a wall line.",4500)}selectCamera(){this.tool="camera",this.selectedType=null,this.castle.hideGhost(),this.castle.select(null),this.selectedStructure=null,this.ui.closeModal(!0),this.ui.setTool("camera"),this.audio.click()}selectDemolish(){if(this.state!=="combat"){if(this.tool==="demolish"){this.selectCamera();return}this.tool="demolish",this.selectedType=null,this.selectedStructure=null,this.castle.select(null),this.castle.hideGhost(),this.ui.closeModal(!0),this.ui.setTool("demolish"),this.ui.hint("Tap or drag across buildings to raze them. Half the cost is refunded.",5e3),this.audio.select()}}get isPaintTool(){return this.tool==="demolish"||this.tool==="build"&&(this.selectedType==="wall"||this.selectedType==="road"||this.selectedType==="gate")}updateGhostAt(t){if(this.state!=="build"&&this.state!=="sandbox"){this.castle.hideGhost();return}if(this.tool!=="build"||!this.selectedType){this.castle.hideGhost();return}const{i:e,j:n}=pr(t.x,t.z);he[this.selectedType];const i=this.castle.canPlace(this.selectedType,e,n).ok&&this.canAfford(this.getCost(this.selectedType));this.castle.updateGhost(this.selectedType,e,n,i),this.lastGhost={i:e,j:n}}onTap(t){if(this.audio.init(),this.state==="title"||this.state==="paused"||this.state==="reward"||this.state==="victory"||this.state==="defeat")return;if(this.state==="combat"){if(this.aimingVolley){this.castVolley(t);return}this.combat.commandHero(t)?(this.ui.tutorialEvent?.("hero"),this.heroHintShown||(this.heroHintShown=!0,this.ui.toast("Captain Aldric answers your command.","good"))):this.ui.toast("The captain is recovering from his wounds.","bad");return}const{i:e,j:n}=pr(t.x,t.z);if(this.tool==="build")this.tryPlace(this.selectedType,e,n);else if(this.tool==="demolish")this.demolishAt(e,n);else{const i=this.castle.getStructureAt(e,n);i?this.inspect(i):this.selectedStructure&&this.clearSelection()}}onPointerGround(t){(this.state==="build"||this.state==="sandbox")&&(this.tool==="build"?this.updateGhostAt(t):this.castle.hideGhost())}startPaint(t){return this.isPaintTool?(this.audio.init(),this.lastPaintCell=null,this.tool==="demolish"?this.paintDemolish(t):this.paintBuild(t),!0):!1}dragPaint(t){this.isPaintTool&&(this.tool==="demolish"?this.paintDemolish(t):this.paintBuild(t))}endPaint(){this.lastPaintCell=null,this.ui?.markResourcesDirty()}paintBuild(t){const{i:e,j:n}=pr(t.x,t.z),i=`${e}:${n}`;if(this.lastPaintCell===i)return;this.lastPaintCell=i,this.updateGhostAt(t);const s=this.getCost(this.selectedType);if(!this.castle.canPlace(this.selectedType,e,n).ok)return;if(!this.canAfford(s)){this.ui.toast("Not enough resources.","bad");return}if(this.selectedType!=="road"&&!this.canStaff(this.selectedType,1)){this.ui.toast(`Need ${this.staffMissing(this.selectedType,1)} more population — raise a house.`,"bad");return}this.castle.place(this.selectedType,e,n,{force:!0})&&(this.spend(s),this.undoStack.push({type:this.selectedType,i:e,j:n,cost:s}),this.undoStack.length>40&&this.undoStack.shift(),this.audio.place(),this.saveSoon(),this.ui.markCityDirty(),this.ui.tutorialEvent?.("place",this.selectedType))}paintDemolish(t){const{i:e,j:n}=pr(t.x,t.z),i=`${e}:${n}`;this.lastPaintCell!==i&&(this.lastPaintCell=i,this.demolishAt(e,n,!0))}tryPlace(t,e,n){if(!t||this.state!=="build"&&this.state!=="sandbox")return;if(this.castle.structures.length>=140){this.ui.toast("Your castle is at capacity.","bad");return}const i=this.castle.canPlace(t,e,n);if(!i.ok){this.audio.error(),this.ui.toast(i.reason,"bad");return}const s=this.getCost(t);if(!this.canAfford(s)){this.audio.error();const o=this.missingResources(s),c=Object.entries(o).map(([l,h])=>`${Math.ceil(h)} ${Ke[l].name.toLowerCase()}`).join(", ");this.ui.toast(`You need ${c}.`,"bad");return}if(t!=="road"&&!this.canStaff(t,1)){this.audio.error(),this.ui.toast(`Not enough workers. Build a house for ${this.staffMissing(t,1)} more people.`,"bad");return}this.castle.place(t,e,n,{force:!0})&&(this.spend(s),this.undoStack.push({type:t,i:e,j:n,cost:s}),this.undoStack.length>40&&this.undoStack.shift(),this.audio.place(),this.saveSoon(),this.ui.markCityDirty(),this.checkQuests(),this.ui.tutorialEvent?.("place",t),!this.defsHintShown&&t==="house"&&(this.defsHintShown=!0))}demolishAt(t,e,n=!1){const i=this.castle.getStructureAt(t,e);if(i){if(i.type==="keep"){this.ui.toast("The keep cannot be razed.","bad");return}const a=this.refundFor(i);this.castle.removeStructure(i),this.grant(a,!0),this.selectedStructure===i&&this.clearSelection(),this.saveSoon(),this.ui.markCityDirty(),n||(this.ui.toast(`Razed ${he[i.type].name}. Recovered ${this.costText(a)}.`,"good"),this.audio.raze());return}const s=cn(t,e);this.castle.roads.has(s)&&(this.castle.removeRoad(t,e,{quiet:n}),this.sandbox||(this.resources.stone+=1),this.saveSoon(),this.ui.markCityDirty())}refundFor(t){he[t.type];const e={},n=(i,s)=>{for(const[a,o]of Object.entries(i||{}))e[a]=(e[a]||0)+Math.floor(o*s)};n(Sr(t.type,1),.5);for(let i=1;i<t.level;i++)n(Sr(t.type,i+1),.35);return e}costText(t){return Object.entries(t).filter(([,e])=>e>0).map(([e,n])=>`${Math.floor(n)} ${Ke[e].name.toLowerCase()}`).join(" · ")}undo(){if(this.state==="combat")return;const t=this.undoStack.pop();if(!t){this.ui.toast("Nothing to undo.","bad");return}if(t.type==="road")this.castle.removeRoad(t.i,t.j,{quiet:!0});else{const e=this.castle.getStructureAt(t.i,t.j);if(!e){this.ui.toast("That structure is already gone.","bad");return}this.castle.removeStructure(e,{quiet:!0})}this.grant(t.cost,!0),this.selectedStructure&&this.clearSelection(),this.audio.place(),this.saveSoon(),this.ui.markCityDirty(),this.ui.toast("Last build undone.","good")}inspect(t){this.selectedStructure=t,this.castle.select(t),this.ui.showBuilding(t),this.audio.select()}clearSelection(){this.selectedStructure=null,this.castle.select(null),this.ui.closeModal(!0)}upgradeSelected(){const t=this.selectedStructure;if(!t)return;const e=he[t.type];if(!e.maxLevel||t.level>=e.maxLevel)return;const n=this.getUpgradeCost(t);if(!this.canAfford(n)){this.audio.error(),this.ui.toast("Not enough resources for that upgrade.","bad");return}if(!this.canStaff(t.type,t.level+1,t.level)){this.audio.error(),this.ui.toast(`Upgrading needs ${this.staffMissing(t.type,t.level+1,t.level)} more population.`,"bad");return}this.spend(n),this.castle.upgrade(t),this.audio.upgrade(),this.shake(.18),this.ui.toast(`${e.name} upgraded to level ${t.level}.`,"good"),this.ui.showBuilding(t),this.saveSoon(),this.ui.markCityDirty(),this.checkQuests(),this.updateRank(),this.ui.tutorialEvent?.("upgrade",t.type)}repairStructure(t){if(!t||t.hp>=t.maxHp)return;const e=t.maxHp-t.hp,n={gold:this.repairGold(Math.max(8,Math.round(e*.055+8)))};if(!this.canAfford(n)){this.audio.error(),this.ui.toast("Not enough gold for repairs.","bad");return}this.spend(n),t.hp=t.maxHp,this.castle.updateBar(t),t.type==="wall"&&this.castle.updateWallColor(t),this.audio.upgrade(),this.ui.toast(`${he[t.type].name} repaired for ${n.gold} gold.`,"good"),this.ui.showBuilding(t),this.saveSoon()}repairAll(){if(this.state==="combat")return;if(!this.castle.structures.some(s=>s.hp<s.maxHp)){this.ui.toast("Everything is already standing firm.","good");return}const e=this.repairGold(60),n={gold:e,wood:40,stone:40};if(!this.canAfford(n)){this.audio.error(),this.ui.toast(`You need ${e} gold, 40 wood and 40 stone to repair the city.`,"bad");return}this.spend(n);const i=this.castle.repairAll(.3);this.audio.upgrade(),this.ui.toast(`Repairs complete — ${Math.round(i)} hit points restored.`,"good"),this.saveSoon(),this.ui.markCityDirty(),this.selectedStructure&&this.ui.showBuilding(this.selectedStructure)}beginWave(){if(this.state!=="build")return;if(this.wave>ze){this.showVictory();return}this.wave>1&&this.castle.structures.length<4&&this.ui.toast("Raise some defenses before sounding the horn.","bad"),this.ui.tutorialEvent?.("wave",this.wave),this.activeDungeon=null,this.clearSelection(),this.ui.closeModal(!0),this.tool="camera",this.selectedType=null,this.ui.setTool("camera"),this.castle.hideGhost(),this.snapshot={city:this.castle.serialize(),resources:{...this.resources},wave:this.wave,wavesSurvived:this.wavesSurvived,upgrades:[...this.upgrades],rankIndex:this.rankIndex,quests:{active:[...this.quests.active],done:[...this.quests.done]},completed:this.completed},this.saveNow(),this.state="combat",this.cooldowns={volley:0,horn:0,repair:0},this.aimingVolley=!1,this.combat.startWave(this.wave,this.combatBonuses()),this.ui.enterCombat(),this.audio.wave(),setTimeout(()=>this.audio.horn(),250);const t=mi[this.wave-1];this.ui.callout(`WAVE ${this.wave}`,t?.name||"The enemy approaches",t?.sub||"","combat"),this.heroHintShown=!1,setTimeout(()=>{this.state==="combat"&&this.ui.hint("Tap the ground to command Captain Aldric. Towers fire on their own.",7e3)},2400)}onWaveComplete(t){if(this.state!=="combat")return;this.combat.active=!1,this.state="reward",this.wavesSurvived=Math.max(this.wavesSurvived,t),this.bestWave=Math.max(this.bestWave,t);try{localStorage.setItem(ka,String(this.bestWave))}catch{}this.wave=t+1;const e={gold:80+t*25,wood:50+t*18,stone:60+t*22,food:35+t*12};this.grant(e,!0),this.ui.tutorialEvent?.("waveComplete",t);const n=H0[t-1]||"",i=this.claimRegionIfDue(t);if(this.updateRank(!0),this.checkQuests(!0),this.audio.victory(),this.shake(.2),t>=ze){this.completed=!0,this.wave=ze,this.saveNowForced(),this.showVictory();return}this.ui.showReward(t,e,this.rewardChoices(),{claim:i,chronicle:n}),this.saveDirty=!0}claimRegionIfDue(t){const e=Po(t);return!e||this.regionsClaimed.includes(e.id)||!z0(e,this.wavesSurvived)?null:(this.regionsClaimed.push(e.id),this.addCrowns(60),this.audio.victory(),this.ui?.toast(`${e.name} is yours. +60 Crowns.`,"good"),this.saveSoon(),{...e,reward:60})}saveNowForced(){const t=this.state;this.state="build",this.saveNow(),this.state=t}rewardChoices(){const t=V0.filter(n=>!this.hasUpgrade(n.id));for(let n=t.length-1;n>0;n--){const i=Math.random()*(n+1)|0;[t[n],t[i]]=[t[i],t[n]]}const e=t.slice(0,3);for(;e.length<3;)e.push({id:"spoils",name:"Spoils of War",icon:"i-coin",desc:"Gain 250 gold, 160 wood and 160 stone immediately."});return e}pickUpgrade(t){this.state==="reward"&&(t==="spoils"?this.grant({gold:250,wood:160,stone:160}):(this.upgrades.includes(t)||this.upgrades.push(t),t==="chest"&&this.grant({gold:300,wood:250,stone:250}),t==="mason"&&(this.castle.bonuses.masonry=.3,this.castle.applyMasonry()),t==="medic"&&this.castle.repairAll(.25)),this.audio.upgrade(),this.ui.closeModal(!0),this.combat.clear(),this.state="build",this.ui.setBuildMode(),this.saveNow(),this.ui.markCityDirty(),this.checkQuests(!0),this.updateRank(!0),this.ui.toast("Boon chosen. The next wave will be harder.","good"))}onDefeat(){this.state==="combat"&&(this.state="defeat",this.combat.active=!1,this.combat.hero.group.visible=!1,this.combat.hero.ring.visible=!1,this.audio.defeat(),this.shake(.8),this.ui.showDefeat(!!this.activeDungeon,this.activeDungeon))}onKeepDestroyed(){this.onDefeat()}retryWave(){if(this.activeDungeon||this.snapshot?.dungeonId){this.retryDungeon();return}if(!this.snapshot){this.startNewCampaign(!0);return}this.restoreSnapshot(),this.audio.click(),this.ui.closeModal(!0),this.ui.toast("The keep is rebuilt. Try a different defense.","good")}restoreSnapshot(){if(!this.snapshot)return;const t=this.snapshot;this.resources={...t.resources},this.wave=t.wave,this.wavesSurvived=t.wavesSurvived,this.upgrades=[...t.upgrades],this.castle.bonuses.masonry=this.upgrades.includes("mason")?.3:0,this.rankIndex=t.rankIndex,this.quests={active:[...t.quests.active],done:[...t.quests.done]},this.castle.clearAll(),this.castle.load(t.city),this.castle.applyMasonry(),this.combat.clear(),this.state="build",this.activeDungeon=null,this.completed=t.completed,this.undoStack=[],this.tool="camera",this.selectedType=null,this.selectedStructure=null,this.castle.select(null),this.applyEquippedSkins(),this.ui.showHUD(!0),this.ui.setBuildMode(),this.ui.markCityDirty(),this.controls.setCinematic(!1),this.controls.focusHome(!0),this.saveNow(),this.updateRank(!0)}showVictory(){this.state="victory",this.completed=!0,this.combat.active=!1,this.saveNowForced(),this.ui.showVictory(),this.audio.victory()}keepBuilding(){this.completed=!0,this.sandbox=!0,this.state="sandbox",this.combat.clear(),this.tool="camera",this.ui.closeModal(!0),this.ui.setBuildMode(),this.ui.showHUD(!0),this.saveNow(),this.ui.toast("Your castle endures. Free Build is now yours.","good"),this.controls.setCinematic(!1)}dungeonAvailable(t){return!!t&&this.wavesSurvived>=t.unlockWave}openWarMap(){if(this.state==="combat"||this.state==="reward"||this.state==="victory"||this.state==="defeat"){this.ui.toast("The war table is closed while the walls are under attack.","bad");return}this.state==="paused"&&this.resume(),this.ui.tutorialEvent?.("map"),this.ui.showWarMap()}openShop(){if(this.state==="combat"||this.state==="reward"||this.state==="victory"||this.state==="defeat"){this.ui.toast("The Crown vault is sealed during a siege.","bad");return}this.state==="paused"&&this.resume(),this.ui.showShop()}startDungeon(t){const e=typeof t=="string"?_s(t):t;if(e){if(this.state!=="build"&&this.state!=="sandbox"){this.ui.toast("Finish what you are doing first.","bad");return}if(!this.dungeonAvailable(e)){const n=Math.max(0,e.unlockWave-this.wavesSurvived);this.ui.toast(`This dungeon unlocks after ${n} more wave${n===1?"":"s"}.`,"bad");return}this.clearSelection(),this.ui.closeModal(!0),this.tool="camera",this.selectedType=null,this.ui.setTool("camera"),this.castle.hideGhost(),this.snapshot={city:this.castle.serialize(),resources:{...this.resources},wave:this.wave,wavesSurvived:this.wavesSurvived,upgrades:[...this.upgrades],rankIndex:this.rankIndex,quests:{active:[...this.quests.active],done:[...this.quests.done]},completed:this.completed,dungeonId:e.id},this.saveNow(),this.state="combat",this.activeDungeon=e,this.cooldowns={volley:0,horn:0,repair:0},this.aimingVolley=!1,this.combat.startDungeon(e,this.combatBonuses()),this.ui.enterCombat(),this.ui.enterDungeon(e),this.audio.wave(),setTimeout(()=>this.audio.horn(),220),this.ui.callout(e.power.toUpperCase(),e.name,e.bossLine,"boss"),this.heroHintShown=!1,setTimeout(()=>{this.state==="combat"&&this.ui.hint(`Slay ${this.combat.boss?.def?.name||"the boss"} to clear the dungeon.`,7e3)},2600)}}onDungeonComplete(t){if(this.state!=="combat"||!this.activeDungeon||this.activeDungeon.id!==t.id)return;this.combat.active=!1,this.state="reward";const e=!this.clearedDungeons.includes(t.id),n={...t.loot};if(!e)for(const a of["gold","wood","stone"])n[a]=Math.round(n[a]*.45);const i=n.crowns||0;delete n.crowns,this.grant(n,!0),i&&this.addCrowns(i);let s=null;e&&(this.clearedDungeons.push(t.id),s=Ze(t.skin),s&&!this.premium.ownedSkins.includes(s.id)&&(this.premium.ownedSkins.push(s.id),this.savePremium())),this.castle.repairAll(.35),this.updateRank(!0),this.checkQuests(!0),this.audio.victory(),this.shake(.3),this.saveNowForced(),this.ui.showDungeonComplete(t,{first:e,loot:{...n,crowns:i},skin:s})}finishDungeon(){this.combat.clear(),this.activeDungeon=null,this.state="build",this.ui.closeModal(!0),this.ui.setBuildMode(),this.ui.showHUD(!0),this.controls.setCinematic(!1),this.tool="camera",this.ui.setTool("camera"),this.saveNow(),this.updateRank(!0),this.ui.toast("The dungeon is quiet. Its loot is yours.","good")}retryDungeon(){const t=this.activeDungeon?.id||this.snapshot?.dungeonId;t&&(this.restoreSnapshot(),this.ui.closeModal(!0),this.startDungeon(t))}useAbility(t){if(this.state==="combat"){if(this.cooldowns[t]>0){this.ui.toast(`${t==="volley"?"Arrow Volley":t==="horn"?"War Horn":"Repair"} is not ready yet.`,"bad");return}if(this.ui.tutorialEvent?.("ability",t),t==="volley"){this.aimingVolley=!this.aimingVolley,this.ui.setAimingVolley(this.aimingVolley),this.aimingVolley&&this.ui.hint("Tap the battlefield to loose the volley.",4e3);return}if(t==="horn"){this.combat.activateHorn(),this.cooldowns.horn=this.cooldownMax.horn,this.ui.callout("WAR HORN","Arrows fly faster","Towers deal more damage for 12 seconds","buff"),this.ui.toast("War horns sound across the walls!","good"),this.shake(.25);return}t==="repair"&&(this.combat.healAll(.22),this.cooldowns.repair=this.cooldownMax.repair,this.ui.toast("Masons rush the walls. All structures repaired 22%.","good"),this.audio.upgrade())}}castVolley(t){this.aimingVolley&&(this.aimingVolley=!1,this.ui.setAimingVolley(!1),this.combat.castVolley(t),this.cooldowns.volley=this.cooldownMax.volley,this.audio.horn(),this.ui.callout("ARROW VOLLEY","The sky darkens","A rain of arrows falls on the enemy","combat"),this.shake(.15))}focusHero(){if(!this.combat.hero.group.visible){this.ui.toast("Captain Aldric is recovering.","bad");return}this.controls.focusOn(new R(this.combat.hero.x,0,this.combat.hero.z),40),this.audio.click()}onEnemyKilled(t){const e=t.boss?this.activeDungeon?260:150:t.type==="ram"?14:t.type==="shield"?4:t.type==="berserk"?3:2;this.resources.gold=(this.resources.gold||0)+e,this.ui?.markResourcesDirty(),t.boss&&(this.shake(.6),this.ui.toast(`${t.def?.name||"The champion"} has fallen!`,"good"),this.ui.hideBoss())}onBossSpawn(t){this.ui.showBoss(t.def?.name||"Champion"),this.audio.horn();const e=t.def?.name||"Champion";this.activeDungeon?this.ui.callout(e.toUpperCase(),"Dungeon boss",this.activeDungeon.bossLine,"boss"):this.ui.callout(e.toUpperCase(),"The horde parts","A champion of the north enters the field","boss"),this.shake(.5)}onBossKilled(){this.ui.hideBoss(),this.audio.victory()}shake(t){this.controls?.shake(t)}ensureQuests(){this.quests||(this.quests={active:[],done:[]}),Array.isArray(this.quests.active)||(this.quests.active=[]),Array.isArray(this.quests.done)||(this.quests.done=[]);for(const e of[...this.quests.active])wr.find(n=>n.id===e)||(this.quests.active=this.quests.active.filter(n=>n!==e));const t=3+(this.isSubscribed()?1:0);for(const e of wr){if(this.quests.active.length>=t)break;this.quests.done.includes(e.id)||this.quests.active.includes(e.id)||this.quests.active.push(e.id)}}questProgress(t){const e=t.goal;if(e.kind==="count"){if(e.type==="road")return{cur:Math.min(this.castle.roads.size,e.n),n:e.n};const n=this.castle.structures.filter(i=>i.type===e.type).length;return{cur:Math.min(n,e.n),n:e.n}}if(e.kind==="roads")return{cur:Math.min(this.castle.roads.size,e.n),n:e.n};if(e.kind==="population"){const n=this.castle.stats().capacity;return{cur:Math.min(n,e.n),n:e.n}}if(e.kind==="upgrades"){const n=this.castle.structures.filter(i=>i.level>=2).length;return{cur:Math.min(n,e.n),n:e.n}}if(e.kind==="happiness"){const n=Math.round(this.castle.stats().happiness);return{cur:Math.min(n,e.n),n:e.n}}if(e.kind==="splendor"){const n=this.castle.splendor(this.wavesSurvived);return{cur:Math.min(n,e.n),n:e.n}}return e.kind==="wave"?{cur:Math.min(this.wavesSurvived,e.n),n:e.n}:{cur:0,n:e.n}}checkQuests(t=!1){if(!t&&this.state==="combat")return;this.ensureQuests();let e=!1;for(const n of[...this.quests.active]){const i=wr.find(a=>a.id===n);if(!i)continue;const s=this.questProgress(i);s.cur>=s.n&&(this.quests.active=this.quests.active.filter(a=>a!==n),this.quests.done.push(n),this.grant(i.reward,!0),this.ui?.toast(`Goal complete: ${i.title}. Reward: ${this.costText(i.reward)}.`,"good"),e=!0)}e&&(this.ensureQuests(),this.ui?.markQuestsDirty(),this.saveSoon()),this.ui?.markQuestsDirty()}updateRank(t=!1){if(this.state==="title"||this.state==="paused"||(this.rankTimer-=1,!t&&this.rankTimer>0))return;this.rankTimer=1;const e=this.castle.splendor(this.wavesSurvived),n=Lo(e);if(n.index>this.rankIndex){let i={gold:0,wood:0,stone:0,food:0};for(let s=this.rankIndex+1;s<=n.index;s++){const a=ys[s];if(a.reward)for(const[o,c]of Object.entries(a.reward))i[o]=(i[o]||0)+c}this.rankIndex=n.index,this.grant(i,!0),this.audio.victory(),this.shake(.25),this.ui.callout(n.name.toUpperCase(),"Your settlement grows",`A new chapter for your castle · ${this.costText(i)}`,"rank"),this.ui.toast(`Your city is now a ${n.name}. Rank bonus: +${n.index*4}% tower damage.`,"good"),this.saveSoon(),this.ui.markQuestsDirty()}this.ui?.updateRank(e,n)}finishTutorial(){this.tutorialDone=!0,this.saveSoon(),this.ui?.toast("The Crown System will keep its counsel. Press M for the war map and the Crown for the vault.","good")}pause(){this.state==="title"||this.state==="paused"||this.state==="reward"||this.state==="victory"||this.state==="defeat"||(this.previousState=this.state,this.state="paused",(this.previousState==="build"||this.previousState==="sandbox")&&this.saveNow(),this.ui.showPause())}resume(){this.state==="paused"&&(this.state=this.previousState||"build",this.ui.closeModal(!0),this.controls.setCinematic(!1))}returnToTitle(){this.state==="combat"&&this.snapshot&&this.restoreSnapshot(),(this.state==="build"||this.state==="sandbox")&&this.saveNow(),this.combat.clear(),this.selectedStructure=null,this.castle.select(null),this.state="title",this.ui.closeModal(!0),this.ui.showHUD(!1),this.ui.showTitle(!0),this.ui.updateTitle(),this.controls.setCinematic(!0)}toggleSound(){this.audio.init();const t=this.audio.toggle();this.ui.updateSound(t),this.ui.toast(t?"Sound on.":"Sound muted.","good")}update(t){if(this.time+=t,this.state==="title"||this.state==="paused"){this.saveDirty&&(this.saveTimer-=t,this.saveTimer<=0&&this.saveNow());return}for(const e of Object.keys(this.cooldowns))this.cooldowns[e]=Math.max(0,this.cooldowns[e]-t);this.state!=="reward"&&this.state!=="victory"&&this.state!=="defeat"&&(this.tickTimer-=t,this.tickTimer<=0&&this.tickEconomy()),this.state==="combat"&&(this.combat.update(t,this.combatBonuses()),this.ui.updateCombat()),(this.state==="build"||this.state==="sandbox"||this.state==="reward")&&(this.questTimer-=t,this.questTimer<=0&&(this.questTimer=.7,this.checkQuests(this.state==="reward")),this.rankTimer-=t,this.rankTimer<=0&&this.updateRank()),this.saveDirty&&(this.saveTimer-=t,this.saveTimer<=0&&(this.state==="build"||this.state==="sandbox")&&this.saveNow()),this.ui.tick(t)}onCityChanged(){this.state!=="title"&&(this.ui?.markCityDirty(),this.saveSoon())}onStructureDestroyed(t){this.selectedStructure===t&&this.clearSelection(),this.ui?.markCityDirty()}}const $r=document.getElementById("scene"),En=new F0({canvas:$r,antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1});En.outputColorSpace=Ue;En.toneMapping=Pc;En.toneMappingExposure=1.12;En.shadowMap.enabled=!0;En.shadowMap.type=Rc;const Jn=new Ud;Jn.background=new Mt(10405597);const bn=new Je(50,1,.5,520);bn.position.set(48,52,52);const Ps=q0(Jn),Jo=new Z0(Jn),fg=new Q0(Jn),ph=new sg,Qo=new ig(Jn,Jo,ph);document.body.classList.add("cinematic");const pg=new $n(new R(0,1,0),0);class mg{constructor(t,e,n){this.camera=t,this.dom=e,this.isMobile=n,this.game=null,this.target=new R(0,0,0),this.desiredTarget=new R(0,0,0),this.yaw=.74,this.pitch=.74,this.dist=n?70:66,this.minDist=24,this.maxDist=n?155:135,this.minPitch=.2,this.maxPitch=1.34,this.cinematic=!0,this.cineTime=0,this.pointers=new Map,this.mode=null,this.pinchStart=0,this.midStart={x:0,y:0},this.downAt=0,this.moved=!1,this.multi=!1,this.pointerStart={x:0,y:0},this.shakeAmt=0,this.time=0,this.raycaster=new Qd,this.ndc=new zt,this.groundPoint=new R,this._right=new R,this._forward=new R,this._mid={x:0,y:0},this.bind(),this.focusHome(!0),this.applyCamera(0)}bind(){const t=this.dom;t.addEventListener("pointerdown",e=>this.onDown(e),{passive:!1}),t.addEventListener("pointermove",e=>this.onMove(e),{passive:!1}),t.addEventListener("pointerup",e=>this.onUp(e),{passive:!1}),t.addEventListener("pointercancel",e=>this.onUp(e),{passive:!1}),t.addEventListener("pointerleave",e=>this.onLeave(e)),t.addEventListener("wheel",e=>this.onWheel(e),{passive:!1}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("blur",()=>{this.pointers.clear(),this.mode=null,this.game&&this.game.endPaint()})}setCinematic(t){this.cinematic!==t&&(this.cinematic=t,document.body.classList.toggle("cinematic",t),t?(this.desiredTarget.set(0,3.5,0),this.yaw=.5,this.pitch=.34,this.dist=this.isMobile?104:88):this.focusHome(!0))}focusHome(t=!1){this.desiredTarget.set(0,1.5,0),t&&this.target.copy(this.desiredTarget),this.yaw=.72,this.pitch=this.isMobile?.86:.8,this.dist=this.isMobile?72:65}focusOn(t,e=42){this.desiredTarget.set(t.x,1.2,t.z),this.dist=Math.min(this.dist,e+12)}shake(t=.3){this.shakeAmt=Math.min(2.4,this.shakeAmt+t)}screenToGround(t,e,n=new R){const i=this.dom.getBoundingClientRect(),s=(t-i.left)/Math.max(1,i.width)*2-1,a=-((e-i.top)/Math.max(1,i.height))*2+1;this.ndc.set(s,a),this.raycaster.setFromCamera(this.ndc,this.camera);const o=this.raycaster.ray.intersectPlane(pg,n);return o?(o.x=di(o.x,-Te-8,Te+8),o.z=di(o.z,-Te-8,Te+8),o):null}onDown(t){this.dom.setPointerCapture?.(t.pointerId),this.game?.audio?.init(),this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType});const e=this.screenToGround(t.clientX,t.clientY);if(e){if(t.preventDefault(),this.pointers.size===1){this.downAt=performance.now(),this.moved=!1,this.multi=!1,this.pointerStart.x=t.clientX,this.pointerStart.y=t.clientY;const n=this.game;n&&(n.state==="build"||n.state==="sandbox")&&n.isPaintTool?(this.mode="paint",n.startPaint(e)):t.button===2||t.button===1?this.mode="pan":this.mode="orbit"}else if(this.pointers.size===2){this.multi=!0,this.mode==="paint"&&this.game?.endPaint(),this.mode="gesture";const n=[...this.pointers.values()];this.pinchStart=Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y),this._mid.x=(n[0].x+n[1].x)/2,this._mid.y=(n[0].y+n[1].y)/2,this.midStart.x=this._mid.x,this.midStart.y=this._mid.y}}}onMove(t){if(!this.pointers.has(t.pointerId)){if(t.pointerType==="mouse"){const s=this.screenToGround(t.clientX,t.clientY);s&&this.game?.onPointerGround(s)}return}const e=this.pointers.get(t.pointerId),n=e.x,i=e.y;if(e.x=t.clientX,e.y=t.clientY,this.mode==="paint"){t.preventDefault();const s=this.screenToGround(t.clientX,t.clientY);s&&(Math.abs(t.clientX-this.pointerStart.x)+Math.abs(t.clientY-this.pointerStart.y)>4&&(this.moved=!0),this.game?.dragPaint(s));return}if(this.mode==="gesture"&&this.pointers.size>=2){t.preventDefault();const s=[...this.pointers.values()],a=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y),o={x:(s[0].x+s[1].x)/2,y:(s[0].y+s[1].y)/2};this.pinchStart>10&&a>10&&(this.dist=di(this.dist*(this.pinchStart/a),this.minDist,this.maxDist));const c=o.x-this._mid.x,l=o.y-this._mid.y;Math.abs(c)+Math.abs(l)>.5&&this.pan(c,l,1.6),this.pinchStart=a,this._mid.x=o.x,this._mid.y=o.y,this.moved=!0;return}if(this.mode==="orbit"){const s=t.clientX-n,a=t.clientY-i;if(Math.abs(t.clientX-this.pointerStart.x)+Math.abs(t.clientY-this.pointerStart.y)>5&&(this.moved=!0),!this.moved)return;t.preventDefault(),this.yaw-=s*.0062,this.pitch=di(this.pitch+a*.0052,this.minPitch,this.maxPitch);return}this.mode==="pan"&&(t.preventDefault(),this.pan(t.clientX-n,t.clientY-i,1.2))}pan(t,e,n=1){const i=this.dist*.0016*n;this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.desiredTarget.addScaledVector(this._right,-t*i),this.desiredTarget.addScaledVector(this._forward,e*i);const s=Math.hypot(this.desiredTarget.x,this.desiredTarget.z);s>Te+4&&(this.desiredTarget.x*=(Te+4)/s,this.desiredTarget.z*=(Te+4)/s)}onUp(t){if(!this.pointers.has(t.pointerId))return;const e=this.mode,n=this.multi;if(this.pointers.delete(t.pointerId),this.dom.releasePointerCapture?.(t.pointerId),e==="paint"){this.pointers.size===0&&this.game?.endPaint(),this.mode=this.pointers.size===1?"orbit":null;return}if(this.pointers.size===0){const i=performance.now()-this.downAt;if(e==="orbit"&&!this.moved&&!n&&i<750){const a=this.screenToGround(t.clientX,t.clientY);a&&this.game?.onTap(a)}this.mode=null}else this.pointers.size===1&&(this.mode="orbit",this.pointerStart.x=t.clientX,this.pointerStart.y=t.clientY,this.moved=!0)}onLeave(t){t.pointerType==="mouse"&&this.pointers.size===0&&this.game?.castle?.hideGhost()}onWheel(t){t.preventDefault(),this.game?.audio?.init();const e=Math.exp(t.deltaY*.0012);this.dist=di(this.dist*e,this.minDist,this.maxDist)}update(t){this.time+=t,this.cinematic&&(this.cineTime+=t,this.yaw=.45+Math.sin(this.cineTime*.045)*.32,this.pitch=.47+Math.sin(this.cineTime*.07)*.03);const e=1-Math.exp(-7*t);this.target.lerp(this.desiredTarget,e),this.applyCamera(t)}applyCamera(t){const e=Math.cos(this.pitch),n=Math.sin(this.pitch);let i=this.target.x+Math.sin(this.yaw)*e*this.dist,s=this.target.y+n*this.dist,a=this.target.z+Math.cos(this.yaw)*e*this.dist;if(this.shakeAmt>.001){const o=this.shakeAmt;i+=Math.sin(this.time*61)*o*.42,s+=Math.sin(this.time*73+1.7)*o*.3,a+=Math.cos(this.time*67+.4)*o*.42,this.shakeAmt=Math.max(0,this.shakeAmt-(t||.016)*2.8)}this.camera.position.set(i,s,a),this.camera.lookAt(this.target),this.camera.position.y<6&&(this.camera.position.y=6)}}const Xr=new mg(bn,$r,Ps.isMobile);function tl(){const r=window.innerWidth,t=window.innerHeight,e=Math.min(window.devicePixelRatio||1,Ps.isMobile?1.6:2);En.setPixelRatio(e),En.setSize(r,t,!1),bn.aspect=r/Math.max(1,t),bn.fov=bn.aspect<.85?56:50,bn.updateProjectionMatrix(),Xr.isMobile=Math.min(r,t)<700}window.addEventListener("resize",tl);window.visualViewport?.addEventListener("resize",tl);tl();let Or;try{Or=new ug({scene:Jn,camera:bn,renderer:En,world:Ps,castle:Qo,fx:Jo,audio:ph,controls:Xr})}catch(r){console.error("Steel & Stone failed to start:",r);const e=document.getElementById("title")?.querySelector(".title-content");if(e){const n=document.createElement("div");n.style.cssText="margin-top:18px;padding:12px 14px;border:1px solid rgba(184,70,51,.5);border-radius:8px;background:rgba(30,10,8,.75);color:#f0c3b7;font-size:12px;line-height:1.5;max-width:520px",n.textContent=`The castle could not be raised: ${r?.message||r}. Check the console for details.`,e.appendChild(n)}throw r}window.__steel={game:Or,castle:Qo,combat:Or.combat,controls:Xr,scene:Jn,camera:bn,renderer:En,world:Ps};window.__steelReady=!0;let Br=performance.now(),Fa=0;function mh(r){requestAnimationFrame(mh);const t=Math.min(.05,Math.max(0,(r-Br)/1e3));Br=r,Fa+=t,Xr.update(t),Ps.update(t,Fa),Qo.update(t,bn,Fa),Or.update(t),Jo.update(t),fg.update(t),En.render(Jn,bn)}requestAnimationFrame(mh);document.addEventListener("visibilitychange",()=>{document.hidden,Br=performance.now()});$r.addEventListener("webglcontextlost",r=>{r.preventDefault(),console.warn("WebGL context lost")});$r.addEventListener("webglcontextrestored",()=>{console.info("WebGL context restored")});
