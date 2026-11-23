import{a as si}from"./disc-catalog-BerLgE9d.js";const Ec="180",Os={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xf=0,ph=1,Mf=2,wc=1,yf=2,ni=3,Ti=0,Qt=1,yt=2,Vt=0,zs=1,yl=2,mh=3,gh=4,ed=5,wn=100,Sf=101,bf=102,Ef=103,wf=104,xr=200,Tf=201,Af=202,Cf=203,Sl=204,bl=205,El=206,Rf=207,wl=208,Pf=209,Df=210,Lf=211,If=212,Uf=213,Nf=214,Tl=0,Al=1,Cl=2,Gs=3,Rl=4,Pl=5,Dl=6,Ll=7,Tc=0,Ff=1,Of=2,Ei=0,td=1,nd=2,id=3,Ac=4,sd=5,rd=6,od=7,ad=300,Ws=301,Xs=302,Il=303,Ul=304,ta=306,Wn=1e3,Ji=1001,Nl=1002,en=1003,zf=1004,$r=1005,Cn=1006,Sa=1007,Qi=1008,Pn=1009,ld=1010,cd=1011,Rr=1012,Cc=1013,is=1014,Bn=1015,Ai=1016,Rc=1017,Pc=1018,qs=1020,hd=35902,ud=35899,dd=1021,fd=1022,vn=1023,Pr=1026,Ys=1027,Dc=1028,Lc=1029,pd=1030,Ic=1031,Uc=1033,zo=33776,Bo=33777,ko=33778,Ho=33779,Fl=35840,Ol=35841,zl=35842,Bl=35843,kl=36196,Hl=37492,Vl=37496,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,jl=37813,Zl=37814,Kl=37815,$l=37816,Jl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,lc=36285,cc=36286,Bf=3200,kf=3201,na=0,Hf=1,ri="",ut="srgb",js="srgb-linear",jo="linear",ht="srgb",_s=7680,_h=519,Vf=512,Gf=513,Wf=514,md=515,Xf=516,qf=517,Yf=518,jf=519,vh=35044,xh="300 es",kn=2e3,Zo=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const Er=Math.PI/180,Zs=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Nc(i,e){return(i%e+e)%e}function Zf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Kf(i,e,t){return i!==e?(t-i)/(e-i):0}function wr(i,e,t){return(1-t)*i+t*e}function $f(i,e,t,n){return wr(i,e,1-Math.exp(-t*n))}function Jf(i,e=1){return e-Math.abs(Nc(i,e*2)-e)}function Qf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function np(i,e){return i+Math.random()*(e-i)}function ip(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(Mh=i);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(i){return i*Er}function op(i){return i*Zs}function ap(i){return(i&i-1)===0&&i!==0}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Us(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const tt={DEG2RAD:Er,RAD2DEG:Zs,generateUUID:cs,clamp:$e,euclideanModulo:Nc,mapLinear:Zf,inverseLerp:Kf,lerp:wr,damp:$f,pingpong:Jf,smoothstep:Qf,smootherstep:ep,randInt:tp,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:$t,denormalize:Us};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==p||c!==d||h!==g){let m=1-a;const f=l*p+c*d+h*g+u*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const E=Math.sqrt(x),S=Math.atan2(E,f*y);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E}const v=a*y;if(l=l*m+p*v,c=c*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*p,e[t+1]=l*g+h*p+c*u-a*d,e[t+2]=c*g+h*d+a*p-l*u,e[t+3]=h*g-a*u-l*p-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),p=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new L,yh=new Xn;class et{constructor(e,t,n,s,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],x=s[4],v=s[7],E=s[2],S=s[5],A=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*m+a*x+l*S,r[6]=o*f+a*v+l*A,r[1]=c*_+h*y+u*E,r[4]=c*m+h*x+u*S,r[7]=c*f+h*v+u*A,r[2]=p*_+d*y+g*E,r[5]=p*m+d*x+g*S,r[8]=p*f+d*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,d=c*r-o*l,g=t*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new et;function gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function up(){const i=Dr("canvas");return i.style.display="block",i}const Sh={};function Lr(i){i in Sh||(Sh[i]=!0,console.warn(i))}function dp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const bh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fp(){const i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ht&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ht&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?jo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Lr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Lr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:e,whitePoint:n,transfer:jo,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),i}const rt=fp();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vs;class pp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Dr("canvas")),vs.width=e.width,vs.height=e.height;const s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=li(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(li(t[n]/255)*255):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mp=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wa(s[o].image)):r.push(wa(s[o]))}else r=wa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gp=0;const Ta=new L;class Wt extends ls{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=Ji,s=Ji,r=Cn,o=Qi,a=vn,l=Pn,c=Wt.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=cs(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ta).x}get height(){return this.source.getSize(Ta).y}get depth(){return this.source.getSize(Ta).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Nl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Nl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=ad;Wt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,E=(f+1)/2,S=(h+p)/4,A=(u+_)/4,C=(g+m)/4;return x>v&&x>E?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=S/n,r=A/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(p-h)/y,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _p extends ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Wt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends _p{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _d extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(r,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Qr.subVectors(this.max,hr),xs.subVectors(e.a,hr),Ms.subVectors(e.b,hr),ys.subVectors(e.c,hr),fi.subVectors(Ms,xs),pi.subVectors(ys,Ms),Vi.subVectors(xs,ys);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Vi.z,Vi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Vi.z,0,-Vi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Vi.y,Vi.x,0];return!Aa(t,xs,Ms,ys,Qr)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,xs,Ms,ys,Qr))?!1:(eo.crossVectors(fi,pi),t=[eo.x,eo.y,eo.z],Aa(t,xs,Ms,ys,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,Jr=new Dn,xs=new L,Ms=new L,ys=new L,fi=new L,pi=new L,Vi=new L,hr=new L,Qr=new L,eo=new L,Gi=new L;function Aa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Gi.fromArray(i,r);const a=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xp=new Dn,ur=new L,Ca=new L;class er{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Ca)),this.expandByPoint(ur.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new L,Ra=new L,to=new L,mi=new L,Pa=new L,no=new L,Da=new L;class ia{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ra.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ra);const r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=mi.dot(this.direction),l=-mi.dot(to),c=mi.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ra).addScaledVector(to,p),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){Pa.subVectors(t,e),no.subVectors(n,e),Da.crossVectors(Pa,no);let o=this.direction.dot(Da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(mi,no));if(l<0)return null;const c=a*this.direction.dot(Pa.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(Da);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,s,r,o,a,l,c,h,u,p,d,g,_,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,p,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,p,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=p-_*c,t[9]=-a*l,t[2]=_-p*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,d=l*u,g=c*h,_=c*u;t[0]=p-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=p*c+_,t[1]=l*u,t[5]=_*c+p,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-p*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=p-_*u}else if(e.order==="XZY"){const p=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mp,e,yp)}lookAt(e,t,n){const s=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(n,cn),gi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(n,cn)),gi.normalize(),io.crossVectors(cn,gi),s[0]=gi.x,s[4]=io.x,s[8]=cn.x,s[1]=gi.y,s[5]=io.y,s[9]=cn.y,s[2]=gi.z,s[6]=io.z,s[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],v=n[11],E=n[15],S=s[0],A=s[4],C=s[8],b=s[12],w=s[1],R=s[5],U=s[9],V=s[13],H=s[2],X=s[6],G=s[10],B=s[14],F=s[3],j=s[7],ae=s[11],re=s[15];return r[0]=o*S+a*w+l*H+c*F,r[4]=o*A+a*R+l*X+c*j,r[8]=o*C+a*U+l*G+c*ae,r[12]=o*b+a*V+l*B+c*re,r[1]=h*S+u*w+p*H+d*F,r[5]=h*A+u*R+p*X+d*j,r[9]=h*C+u*U+p*G+d*ae,r[13]=h*b+u*V+p*B+d*re,r[2]=g*S+_*w+m*H+f*F,r[6]=g*A+_*R+m*X+f*j,r[10]=g*C+_*U+m*G+f*ae,r[14]=g*b+_*V+m*B+f*re,r[3]=y*S+x*w+v*H+E*F,r[7]=y*A+x*R+v*X+E*j,r[11]=y*C+x*U+v*G+E*ae,r[15]=y*b+x*V+v*B+E*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*d-n*l*d)+_*(+t*l*d-t*c*p+r*o*p-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*p+s*o*u-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=u*m*c-_*p*c+_*l*d-a*m*d-u*l*f+a*p*f,x=g*p*c-h*m*c-g*l*d+o*m*d+h*l*f-o*p*f,v=h*_*c-g*u*c+g*a*d-o*_*d-h*a*f+o*u*f,E=g*u*l-h*_*l-g*a*p+o*_*p+h*a*m-o*u*m,S=t*y+n*x+s*v+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/S;return e[0]=y*A,e[1]=(_*p*r-u*m*r-_*s*d+n*m*d+u*s*f-n*p*f)*A,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*A,e[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*d-n*l*d)*A,e[4]=x*A,e[5]=(h*m*r-g*p*r+g*s*d-t*m*d-h*s*f+t*p*f)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*A,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*d+t*l*d)*A,e[8]=v*A,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*f-t*u*f)*A,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*A,e[12]=E*A,e[13]=(h*_*s-g*u*s+g*n*p-t*_*p-h*n*m+t*u*m)*A,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*A,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*p+t*a*p)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,d=r*h,g=r*u,_=o*h,m=o*u,f=a*u,y=l*c,x=l*h,v=l*u,E=n.x,S=n.y,A=n.z;return s[0]=(1-(_+f))*E,s[1]=(d+v)*E,s[2]=(g-x)*E,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(p+f))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(p+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const c=1/r,h=1/o,u=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=u,bn.elements[9]*=u,bn.elements[10]*=u,t.setFromRotationMatrix(bn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=kn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===kn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Zo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===kn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Zo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new L,bn=new at,Mp=new L(0,0,0),yp=new L(1,1,1),gi=new L,io=new L,cn=new L,wh=new at,Th=new Xn;class Ln{constructor(e=0,t=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sp=0;const Ah=new L,bs=new Xn,Jn=new at,so=new L,dr=new L,bp=new L,Ep=new Xn,Ch=new L(1,0,0),Rh=new L(0,1,0),Ph=new L(0,0,1),Dh={type:"added"},wp={type:"removed"},Es={type:"childadded",child:null},La={type:"childremoved",child:null};class Pt extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new L,t=new Ln,n=new Xn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new et}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(dr,so,this.up):Jn.lookAt(so,dr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(Jn),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wp),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,bp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Ep,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Pt.DEFAULT_UP=new L(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new L,Qn=new L,Ia=new L,ei=new L,ws=new L,Ts=new L,Lh=new L,Ua=new L,Na=new L,Fa=new L,Oa=new pt,za=new pt,Ba=new pt;class Tn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Qn.subVectors(n,t),Ia.subVectors(e,t);const o=En.dot(En),a=En.dot(Qn),l=En.dot(Ia),c=Qn.dot(Qn),h=Qn.dot(Ia),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,d=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Oa.setScalar(0),za.setScalar(0),Ba.setScalar(0),Oa.fromBufferAttribute(e,t),za.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Oa,r.x),o.addScaledVector(za,r.y),o.addScaledVector(Ba,r.z),o}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Qn.subVectors(e,t),En.cross(Qn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ws.subVectors(s,n),Ts.subVectors(r,n),Ua.subVectors(e,n);const l=ws.dot(Ua),c=Ts.dot(Ua);if(l<=0&&c<=0)return t.copy(n);Na.subVectors(e,s);const h=ws.dot(Na),u=Ts.dot(Na);if(h>=0&&u<=h)return t.copy(s);const p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ws,o);Fa.subVectors(e,r);const d=ws.dot(Fa),g=Ts.dot(Fa);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ts,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Lh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Lh,a);const f=1/(m+_+p);return o=_*f,a=p*f,t.copy(n).addScaledVector(ws,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ro={h:0,s:0,l:0};function ka(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Nc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ka(o,r,e+1/3),this.g=ka(o,r,e),this.b=ka(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){const n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return rt.workingToColorSpace(Zt.copy(this),e),Math.round($e(Zt.r*255,0,255))*65536+Math.round($e(Zt.g*255,0,255))*256+Math.round($e(Zt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=ut){rt.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(ro);const n=wr(_i.h,ro.h,t),s=wr(_i.s,ro.s,t),r=wr(_i.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new ke;ke.NAMES=vd;let Tp=0;class ui extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=zs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xt extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new L,oo=new he;let Ap=0;class ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}}class xd extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Md extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Cp=0;const gn=new at,Ha=new Pt,As=new L,hn=new Dn,fr=new Dn,kt=new L;class St extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Md:xd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(hn.min,fr.min),hn.expandByPoint(kt),kt.addVectors(hn.max,fr.max),hn.expandByPoint(kt)):(hn.expandByPoint(fr.min),hn.expandByPoint(fr.max))}hn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),kt.add(As)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,p=new he,d=new he,g=new he,_=new L,m=new L;function f(C,b,w){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,w),p.fromBufferAttribute(r,C),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,w),h.sub(c),u.sub(c),d.sub(p),g.sub(p);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[C].add(_),a[b].add(_),a[w].add(_),l[C].add(m),l[b].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,b=y.length;C<b;++C){const w=y[C],R=w.start,U=w.count;for(let V=R,H=R+U;V<H;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new L,v=new L,E=new L,S=new L;function A(C){E.fromBufferAttribute(s,C),S.copy(E);const b=a[C];x.copy(b),x.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(S,b);const R=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,R)}for(let C=0,b=y.length;C<b;++C){const w=y[C],R=w.start,U=w.count;for(let V=R,H=R+U;V<H;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new ln(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new St,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const p=c[h],d=e(p,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new at,Wi=new ia,ao=new er,Uh=new L,lo=new L,co=new L,ho=new L,Va=new L,uo=new L,Nh=new L,fo=new L;class Fe extends Pt{constructor(e=new St,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Va.fromBufferAttribute(u,e),o?uo.addScaledVector(Va,h):uo.addScaledVector(Va.sub(t),h))}t.add(uo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(ao.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(ao,Uh)===null||Wi.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Ih.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){const S=a.getX(v),A=a.getX(v+1),C=a.getX(v+2);s=po(this,f,e,n,c,h,u,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=po(this,o,e,n,c,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,E=x;v<E;v+=3){const S=v,A=v+1,C=v+2;s=po(this,f,e,n,c,h,u,S,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const y=m,x=m+1,v=m+2;s=po(this,o,e,n,c,h,u,y,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Rp(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ti,a),l===null)return null;fo.copy(a),fo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(fo);return c<t.near||c>t.far?null:{distance:c,point:fo.clone(),object:i}}function po(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,lo),i.getVertexPosition(l,co),i.getVertexPosition(c,ho);const h=Rp(i,e,t,n,lo,co,ho,Nh);if(h){const u=new L;Tn.getBarycoord(Nh,lo,co,ho,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new L,materialIndex:0};Tn.getNormal(lo,co,ho,p.normal),h.face=p,h.barycoord=u}return h}class Di extends St{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(_,m,f,y,x,v,E,S,A,C,b){const w=v/A,R=E/C,U=v/2,V=E/2,H=S/2,X=A+1,G=C+1;let B=0,F=0;const j=new L;for(let ae=0;ae<G;ae++){const re=ae*R-V;for(let se=0;se<X;se++){const K=se*w-U;j[_]=K*y,j[m]=re*x,j[f]=H,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[f]=S>0?1:-1,h.push(j.x,j.y,j.z),u.push(se/A),u.push(1-ae/C),B+=1}}for(let ae=0;ae<C;ae++)for(let re=0;re<A;re++){const se=p+re+X*ae,K=p+re+X*(ae+1),ce=p+(re+1)+X*(ae+1),we=p+(re+1)+X*ae;l.push(se,K,we),l.push(K,ce,we),F+=6}a.addGroup(d,F,b),d+=F,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=Ks(i[t]);for(const s in n)e[s]=n[s]}return e}function Pp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Si={clone:Ks,merge:Jt};var Dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dp,this.fragmentShader=Lp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Pp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sd extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new L,Fh=new he,Oh=new he;class an extends Sd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cs=-90,Rs=1;class Ip extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Cs,Rs,e,t);s.layers=this.layers,this.add(s);const r=new an(Cs,Rs,e,t);r.layers=this.layers,this.add(r);const o=new an(Cs,Rs,e,t);o.layers=this.layers,this.add(o);const a=new an(Cs,Rs,e,t);a.layers=this.layers,this.add(a);const l=new an(Cs,Rs,e,t);l.layers=this.layers,this.add(l);const c=new an(Cs,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class bd extends Wt{constructor(e=[],t=Ws,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Up extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new bd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Di(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:Ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Vt});r.uniforms.tEquirect.value=t;const o=new Fe(s,r),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Cn),new Ip(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class nt extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Np={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ed extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zc extends Wt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,h=en,u,p){super(null,o,a,l,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends ln{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new at,Bh=new at,mo=[],kh=new Dn,Fp=new at,pr=new Fe,mr=new er;class wd extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),kh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),mr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(pr.geometry=this.geometry,pr.material=this.material,pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mr.copy(this.boundingSphere),mr.applyMatrix4(n),e.ray.intersectsSphere(mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),Bh.multiplyMatrices(n,Ps),pr.matrixWorld=Bh,pr.raycast(e,mo);for(let o=0,a=mo.length;o<a;o++){const l=mo[o];l.instanceId=r,l.object=this,t.push(l)}mo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zc(new Float32Array(s*this.count),s,this.count,Dc,Bn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wa=new L,Op=new L,zp=new et;class Mi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Wa.subVectors(n,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zp.getNormalMatrix(e),s=this.coplanarPoint(Wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new er,Bp=new he(.5,.5),go=new L;class Bc{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],_=r[9],m=r[10],f=r[11],y=r[12],x=r[13],v=r[14],E=r[15];if(s[0].setComponents(c-o,d-h,f-g,E-y).normalize(),s[1].setComponents(c+o,d+h,f+g,E+y).normalize(),s[2].setComponents(c+a,d+u,f+_,E+x).normalize(),s[3].setComponents(c-a,d-u,f-_,E-x).normalize(),n)s[4].setComponents(l,p,m,v).normalize(),s[5].setComponents(c-l,d-p,f-m,E-v).normalize();else if(s[4].setComponents(c-l,d-p,f-m,E-v).normalize(),t===kn)s[5].setComponents(c+l,d+p,f+m,E+v).normalize();else if(t===Zo)s[5].setComponents(l,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){Xi.center.set(0,0,0);const t=Bp.distanceTo(e.center);return Xi.radius=.7071067811865476+t,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Td extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new at,hc=new ia,_o=new er,vo=new L;class Vh extends Pt{constructor(e=new St,t=new Td){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Hh.copy(s).invert(),hc.copy(e.ray).applyMatrix4(Hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,_=d;g<_;g++){const m=c.getX(g);vo.fromBufferAttribute(u,m),Gh(vo,m,l,s,e,t,this)}}else{const p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=p,_=d;g<_;g++)vo.fromBufferAttribute(u,g),Gh(vo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gh(i,e,t,n,s,r,o){const a=hc.distanceSqToPoint(i);if(a<t){const l=new L;hc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ot extends Wt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kc extends Wt{constructor(e,t,n=is,s,r,o,a=en,l=en,c,h=Pr,u=1){if(h!==Pr&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ad extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hc extends St{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,p=t,d=2*u+p,g=n*2+r,_=s+1,m=new L,f=new L;for(let y=0;y<=g;y++){let x=0,v=0,E=0,S=0;if(y<=n){const b=y/n,w=b*Math.PI/2;v=-h-e*Math.cos(w),E=e*Math.sin(w),S=-e*Math.cos(w),x=b*u}else if(y<=n+r){const b=(y-n)/r;v=-h+b*t,E=e,S=0,x=u+b*p}else{const b=(y-n-r)/n,w=b*Math.PI/2;v=h+e*Math.sin(w),E=e*Math.cos(w),S=e*Math.sin(w),x=u+p+b*u}const A=Math.max(0,Math.min(1,x/d));let C=0;y===0?C=.5/s:y===g&&(C=-.5/s);for(let b=0;b<=s;b++){const w=b/s,R=w*Math.PI*2,U=Math.sin(R),V=Math.cos(R);f.x=-E*V,f.y=v,f.z=E*U,a.push(f.x,f.y,f.z),m.set(-E*V,S,E*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(w+C,A)}if(y>0){const b=(y-1)*_;for(let w=0;w<s;w++){const R=b+w,U=b+w+1,V=y*_+w,H=y*_+w+1;o.push(R,U,V),o.push(U,H,V)}}}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class $s extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new L,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){const d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ci extends St{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],d=[];let g=0;const _=[],m=n/2;let f=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function y(){const v=new L,E=new L;let S=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const b=[],w=C/r,R=w*(t-e)+e;for(let U=0;U<=s;U++){const V=U/s,H=V*l+a,X=Math.sin(H),G=Math.cos(H);E.x=R*X,E.y=-w*n+m,E.z=R*G,u.push(E.x,E.y,E.z),v.set(X,A,G).normalize(),p.push(v.x,v.y,v.z),d.push(V,1-w),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const w=_[b][C],R=_[b+1][C],U=_[b+1][C+1],V=_[b][C+1];(e>0||b!==0)&&(h.push(w,R,V),S+=3),(t>0||b!==r-1)&&(h.push(R,U,V),S+=3)}c.addGroup(f,S,0),f+=S}function x(v){const E=g,S=new he,A=new L;let C=0;const b=v===!0?e:t,w=v===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*w,0),p.push(0,w,0),d.push(.5,.5),g++;const R=g;for(let U=0;U<=s;U++){const H=U/s*l+a,X=Math.cos(H),G=Math.sin(H);A.x=b*G,A.y=m*w,A.z=b*X,u.push(A.x,A.y,A.z),p.push(0,w,0),S.x=X*.5+.5,S.y=G*.5*w+.5,d.push(S.x,S.y),g++}for(let U=0;U<s;U++){const V=E+U,H=R+U;v===!0?h.push(H,H+1,V):h.push(H+1,H,V),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,l=new at;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vc extends jn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class kp extends Vc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const xo=new L,Xa=new Gc,qa=new Gc,Ya=new Gc;class ss extends jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xo.subVectors(s[0],s[1]).add(s[0]),c=xo);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xa.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,_,m),qa.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,_,m),Ya.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),qa.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Ya.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Xa.calc(l),qa.calc(l),Ya.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Hp(i,e){const t=1-i;return t*t*e}function Vp(i,e){return 2*(1-i)*i*e}function Gp(i,e){return i*i*e}function Tr(i,e,t,n){return Hp(i,e)+Vp(i,t)+Gp(i,n)}function Wp(i,e){const t=1-i;return t*t*t*e}function Xp(i,e){const t=1-i;return 3*t*t*i*e}function qp(i,e){return 3*(1-i)*i*i*e}function Yp(i,e){return i*i*i*e}function Ar(i,e,t,n,s){return Wp(i,e)+Xp(i,t)+qp(i,n)+Yp(i,s)}class Cd extends jn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,s.x,r.x,o.x,a.x),Ar(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jp extends jn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ar(e,s.x,r.x,o.x,a.x),Ar(e,s.y,r.y,o.y,a.y),Ar(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rd extends jn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zp extends jn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pd extends jn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dd extends jn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Tr(e,s.x,r.x,o.x),Tr(e,s.y,r.y,o.y),Tr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ld extends jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Wh(a,l.x,c.x,h.x,u.x),Wh(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var Ko=Object.freeze({__proto__:null,ArcCurve:kp,CatmullRomCurve3:ss,CubicBezierCurve:Cd,CubicBezierCurve3:jp,EllipseCurve:Vc,LineCurve:Rd,LineCurve3:Zp,QuadraticBezierCurve:Pd,QuadraticBezierCurve3:Dd,SplineCurve:Ld});class Kp extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ko[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ko[s.type]().fromJSON(s))}return this}}class uc extends Kp{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Rd(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Pd(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Cd(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ld(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Vc(e,t,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yn extends uc{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new uc().fromJSON(s))}return this}}function $p(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Id(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=nm(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let p=t;p<s;p+=t){const d=i[p],g=i[p+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ir(r,o,t,a,l,c,0),o}function Id(i,e,t,n,s){let r;if(s===fm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Xh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Xh(o/n|0,i[o],i[o+1],r);return r&&Js(r,r.next)&&(Nr(r),r=r.next),r}function rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Js(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ir(i,e,t,n,s,r,o){if(!i)return;!o&&r&&am(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Qp(i,n,s,r):Jp(i)){e.push(l.i,i.i,c.i),Nr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=em(rs(i),e),Ir(i,e,t,n,s,r,2)):o===2&&tm(i,e,t,n,s,r):Ir(rs(i),e,t,n,s,r,1);break}}}function Jp(i){const e=i.prev,t=i,n=i.next;if(Tt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),p=Math.max(s,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&Mr(s,a,r,l,o,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Tt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,p=o.y,d=Math.min(a,l,c),g=Math.min(h,u,p),_=Math.max(a,l,c),m=Math.max(h,u,p),f=dc(d,g,e,t,n),y=dc(_,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=y;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Mr(a,h,l,u,c,p,x.x,x.y)&&Tt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Mr(a,h,l,u,c,p,v.x,v.y)&&Tt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Mr(a,h,l,u,c,p,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Mr(a,h,l,u,c,p,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function em(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Js(n,s)&&Nd(n,t,t.next,s)&&Ur(n,s)&&Ur(s,n)&&(e.push(n.i,t.i,s.i),Nr(t),Nr(t.next),t=i=s),t=t.next}while(t!==i);return rs(t)}function tm(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hm(o,a)){let l=Fd(o,a);o=rs(o,o.next),l=rs(l,l.next),Ir(o,e,t,n,s,r,0),Ir(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function nm(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Id(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(cm(c))}s.sort(im);for(let r=0;r<s.length;r++)t=sm(s[r],t);return t}function im(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function sm(i,e){const t=rm(i,e);if(!t)return e;const n=Fd(t,i);return rs(n,n.next),rs(t,t.next)}function rm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Js(i,t))return t;do{if(Js(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Ud(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Ur(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&om(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function om(i,e){return Tt(i.prev,i,e.prev)<0&&Tt(e.next,i,i.next)<0}function am(i,e,t,n){let s=i;do s.z===0&&(s.z=dc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,lm(s)}function lm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function dc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function cm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ud(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Mr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ud(i,e,t,n,s,r,o,a)}function hm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!um(i,e)&&(Ur(i,e)&&Ur(e,i)&&dm(i,e)&&(Tt(i.prev,i,e.prev)||Tt(i,e.prev,e))||Js(i,e)&&Tt(i.prev,i,i.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Js(i,e){return i.x===e.x&&i.y===e.y}function Nd(i,e,t,n){const s=yo(Tt(i,e,t)),r=yo(Tt(i,e,n)),o=yo(Tt(t,n,i)),a=yo(Tt(t,n,e));return!!(s!==r&&o!==a||s===0&&Mo(i,t,e)||r===0&&Mo(i,n,e)||o===0&&Mo(t,i,n)||a===0&&Mo(t,e,n))}function Mo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function yo(i){return i>0?1:i<0?-1:0}function um(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Nd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ur(i,e){return Tt(i.prev,i,i.next)<0?Tt(i,e,i.next)>=0&&Tt(i,i.prev,e)>=0:Tt(i,e,i.prev)<0||Tt(i,i.next,e)<0}function dm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fd(i,e){const t=fc(i.i,i.x,i.y),n=fc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xh(i,e,t,n){const s=fc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Nr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class pm{static triangulate(e,t,n=2){return $p(e,t,n)}}class ai{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ai.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];qh(e),Yh(n,e);let o=e.length;t.forEach(qh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Yh(n,t[l]);const a=pm.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Li extends St{constructor(e=new Yn([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:mm;let x,v=!1,E,S,A,C;f&&(x=f.getSpacedPoints(h),v=!0,p=!1,E=f.computeFrenetFrames(h,!1),S=new L,A=new L,C=new L),p||(m=0,d=0,g=0,_=0);const b=a.extractPoints(c);let w=b.shape;const R=b.holes;if(!ai.isClockWise(w)){w=w.reverse();for(let ee=0,J=R.length;ee<J;ee++){const ne=R[ee];ai.isClockWise(ne)&&(R[ee]=ne.reverse())}}function V(ee){const ne=10000000000000001e-36;let te=ee[0];for(let be=1;be<=ee.length;be++){const de=be%ee.length,Me=ee[de],He=Me.x-te.x,ze=Me.y-te.y,P=He*He+ze*ze,T=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(te.x),Math.abs(te.y)),W=ne*T*T;if(P<=W){ee.splice(de,1),be--;continue}te=Me}}V(w),R.forEach(V);const H=R.length,X=w;for(let ee=0;ee<H;ee++){const J=R[ee];w=w.concat(J)}function G(ee,J,ne){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(J,ne)}const B=w.length;function F(ee,J,ne){let te,be,de;const Me=ee.x-J.x,He=ee.y-J.y,ze=ne.x-ee.x,P=ne.y-ee.y,T=Me*Me+He*He,W=Me*P-He*ze;if(Math.abs(W)>Number.EPSILON){const Z=Math.sqrt(T),ue=Math.sqrt(ze*ze+P*P),$=J.x-He/Z,De=J.y+Me/Z,ye=ne.x-P/ue,Le=ne.y+ze/ue,Ne=((ye-$)*P-(Le-De)*ze)/(Me*P-He*ze);te=$+Me*Ne-ee.x,be=De+He*Ne-ee.y;const ge=te*te+be*be;if(ge<=2)return new he(te,be);de=Math.sqrt(ge/2)}else{let Z=!1;Me>Number.EPSILON?ze>Number.EPSILON&&(Z=!0):Me<-Number.EPSILON?ze<-Number.EPSILON&&(Z=!0):Math.sign(He)===Math.sign(P)&&(Z=!0),Z?(te=-He,be=Me,de=Math.sqrt(T)):(te=Me,be=He,de=Math.sqrt(T/2))}return new he(te/de,be/de)}const j=[];for(let ee=0,J=X.length,ne=J-1,te=ee+1;ee<J;ee++,ne++,te++)ne===J&&(ne=0),te===J&&(te=0),j[ee]=F(X[ee],X[ne],X[te]);const ae=[];let re,se=j.concat();for(let ee=0,J=H;ee<J;ee++){const ne=R[ee];re=[];for(let te=0,be=ne.length,de=be-1,Me=te+1;te<be;te++,de++,Me++)de===be&&(de=0),Me===be&&(Me=0),re[te]=F(ne[te],ne[de],ne[Me]);ae.push(re),se=se.concat(re)}let K;if(m===0)K=ai.triangulateShape(X,R);else{const ee=[],J=[];for(let ne=0;ne<m;ne++){const te=ne/m,be=d*Math.cos(te*Math.PI/2),de=g*Math.sin(te*Math.PI/2)+_;for(let Me=0,He=X.length;Me<He;Me++){const ze=G(X[Me],j[Me],de);_e(ze.x,ze.y,-be),te===0&&ee.push(ze)}for(let Me=0,He=H;Me<He;Me++){const ze=R[Me];re=ae[Me];const P=[];for(let T=0,W=ze.length;T<W;T++){const Z=G(ze[T],re[T],de);_e(Z.x,Z.y,-be),te===0&&P.push(Z)}te===0&&J.push(P)}}K=ai.triangulateShape(ee,J)}const ce=K.length,we=g+_;for(let ee=0;ee<B;ee++){const J=p?G(w[ee],se[ee],we):w[ee];v?(A.copy(E.normals[0]).multiplyScalar(J.x),S.copy(E.binormals[0]).multiplyScalar(J.y),C.copy(x[0]).add(A).add(S),_e(C.x,C.y,C.z)):_e(J.x,J.y,0)}for(let ee=1;ee<=h;ee++)for(let J=0;J<B;J++){const ne=p?G(w[J],se[J],we):w[J];v?(A.copy(E.normals[ee]).multiplyScalar(ne.x),S.copy(E.binormals[ee]).multiplyScalar(ne.y),C.copy(x[ee]).add(A).add(S),_e(C.x,C.y,C.z)):_e(ne.x,ne.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){const J=ee/m,ne=d*Math.cos(J*Math.PI/2),te=g*Math.sin(J*Math.PI/2)+_;for(let be=0,de=X.length;be<de;be++){const Me=G(X[be],j[be],te);_e(Me.x,Me.y,u+ne)}for(let be=0,de=R.length;be<de;be++){const Me=R[be];re=ae[be];for(let He=0,ze=Me.length;He<ze;He++){const P=G(Me[He],re[He],te);v?_e(P.x,P.y+x[h-1].y,x[h-1].x+ne):_e(P.x,P.y,u+ne)}}}q(),Y();function q(){const ee=s.length/3;if(p){let J=0,ne=B*J;for(let te=0;te<ce;te++){const be=K[te];pe(be[2]+ne,be[1]+ne,be[0]+ne)}J=h+m*2,ne=B*J;for(let te=0;te<ce;te++){const be=K[te];pe(be[0]+ne,be[1]+ne,be[2]+ne)}}else{for(let J=0;J<ce;J++){const ne=K[J];pe(ne[2],ne[1],ne[0])}for(let J=0;J<ce;J++){const ne=K[J];pe(ne[0]+B*h,ne[1]+B*h,ne[2]+B*h)}}n.addGroup(ee,s.length/3-ee,0)}function Y(){const ee=s.length/3;let J=0;fe(X,J),J+=X.length;for(let ne=0,te=R.length;ne<te;ne++){const be=R[ne];fe(be,J),J+=be.length}n.addGroup(ee,s.length/3-ee,1)}function fe(ee,J){let ne=ee.length;for(;--ne>=0;){const te=ne;let be=ne-1;be<0&&(be=ee.length-1);for(let de=0,Me=h+m*2;de<Me;de++){const He=B*de,ze=B*(de+1),P=J+te+He,T=J+be+He,W=J+be+ze,Z=J+te+ze;Ve(P,T,W,Z)}}}function _e(ee,J,ne){l.push(ee),l.push(J),l.push(ne)}function pe(ee,J,ne){Xe(ee),Xe(J),Xe(ne);const te=s.length/3,be=y.generateTopUV(n,s,te-3,te-2,te-1);I(be[0]),I(be[1]),I(be[2])}function Ve(ee,J,ne,te){Xe(ee),Xe(J),Xe(te),Xe(J),Xe(ne),Xe(te);const be=s.length/3,de=y.generateSideWallUV(n,s,be-6,be-3,be-2,be-1);I(de[0]),I(de[1]),I(de[3]),I(de[1]),I(de[2]),I(de[3])}function Xe(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function I(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return gm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ko[s.type]().fromJSON(s)),new Li(n,e.options)}}const mm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(p,1-g),new he(_,1-f)]:[new he(a,1-l),new he(h,1-u),new he(d,1-g),new he(m,1-f)]}};function gm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class kr extends St{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$e(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new L,p=new he,d=new L,g=new L,_=new L;let m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=t;y++){const x=n+y*h*s,v=Math.sin(x),E=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*v,u.y=e[S].y,u.z=e[S].x*E,o.push(u.x,u.y,u.z),p.x=y/t,p.y=S/(e.length-1),a.push(p.x,p.y);const A=l[3*S+0]*v,C=l[3*S+1],b=l[3*S+0]*E;c.push(A,C,b)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const v=x+y*e.length,E=v,S=v+e.length,A=v+e.length+1,C=v+1;r.push(E,S,C),r.push(A,C,S)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.points,e.segments,e.phiStart,e.phiLength)}}class Dt extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,p=t/l,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*p-o;for(let x=0;x<c;x++){const v=x*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){const x=y+c*f,v=y+c*(f+1),E=y+1+c*(f+1),S=y+1+c*f;d.push(x,v,S),d.push(v,E,S)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wc extends St{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const p=(t-e)/s,d=new L,g=new he;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;d.x=u*Math.cos(f),d.y=u*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const y=f+m,x=y,v=y+n+1,E=y+n+2,S=y+1;a.push(x,v,S),a.push(v,E,S)}}this.setIndex(a),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wi extends St{constructor(e=new Yn([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(o,2));function c(h){const u=s.length/3,p=h.extractPoints(t);let d=p.shape;const g=p.holes;ai.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=g.length;m<f;m++){const y=g[m];ai.isClockWise(y)===!0&&(g[m]=y.reverse())}const _=ai.triangulateShape(d,g);for(let m=0,f=g.length;m<f;m++){const y=g[m];d=d.concat(y)}for(let m=0,f=d.length;m<f;m++){const y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,f=_.length;m<f;m++){const y=_[m],x=y[0]+u,v=y[1]+u,E=y[2]+u;n.push(x,v,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return _m(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new wi(n,e.curveSegments)}}function _m(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ci extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,p=new L,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&l===Math.PI&&(v=-.5/t);for(let E=0;E<=t;E++){const S=E/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(S+v,1-x),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){const x=h[f][y+1],v=h[f][y],E=h[f+1][y],S=h[f+1][y+1];(f!==0||o>0)&&d.push(x,v,S),(f!==n-1||l<Math.PI)&&d.push(v,E,S)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends St{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new L,u=new L,p=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(_,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Hr extends St{constructor(e=new Dd(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new he;let h=new L;const u=[],p=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),f()}function m(x){h=e.getPointAt(x/t,h);const v=o.normals[x],E=o.binormals[x];for(let S=0;S<=s;S++){const A=S/s*Math.PI*2,C=Math.sin(A),b=-Math.cos(A);l.x=b*v.x+C*E.x,l.y=b*v.y+C*E.y,l.z=b*v.z+C*E.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){const E=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),A=(s+1)*x+v,C=(s+1)*(x-1)+v;g.push(E,S,C),g.push(S,A,C)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)c.x=x/t,c.y=v/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Hr(new Ko[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class vm extends ui{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ke(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class xm extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gt extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class un extends gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mm extends ui{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ym extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=na,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sm extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bm extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ja={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Em{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const wm=new Em;class Xc{constructor(e){this.manager=e!==void 0?e:wm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class Tm extends Xc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ja.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ds.get(o);u===void 0&&(u=[],Ds.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=Dr("img");function l(){h(),t&&t(this);const u=Ds.get(this)||[];for(let p=0;p<u.length;p++){const d=u[p];d.onLoad&&d.onLoad(this)}Ds.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ja.remove(`image:${e}`);const p=Ds.get(this)||[];for(let d=0;d<p.length;d++){const g=p[d];g.onError&&g.onError(u)}Ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ja.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class jh extends Xc{constructor(e){super(e)}load(e,t,n,s){const r=new Wt,o=new Tm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class sa extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Am extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Za=new at,Zh=new L,Kh=new L;class qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),Za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cm extends qc{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Yc extends sa{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $h=new at,gr=new L,Ka=new L;class Rm extends qc{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),Ka.copy(n.position),Ka.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ka),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,n.coordinateSystem,n.reversedDepth)}}class jc extends sa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Zc extends Sd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Pm extends qc{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dm extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Pm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Lm extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Im{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Jh=new at;class Od{constructor(e,t,n=0,s=1/0){this.ray=new ia(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(e,t=!0,n=[]){return pc(e,this,n,t),n.sort(Qh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pc(e[s],this,n,t);return n.sort(Qh),n}}function Qh(i,e){return i.distance-e.distance}function pc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)pc(r[o],e,t,!0)}}class eu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Um extends ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function tu(i,e,t,n){const s=Nm(n);switch(t){case dd:return i*e;case Dc:return i*e/s.components*s.byteLength;case Lc:return i*e/s.components*s.byteLength;case pd:return i*e*2/s.components*s.byteLength;case Ic:return i*e*2/s.components*s.byteLength;case fd:return i*e*3/s.components*s.byteLength;case vn:return i*e*4/s.components*s.byteLength;case Uc:return i*e*4/s.components*s.byteLength;case zo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ko:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case zl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ic:case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nm(i){switch(i){case Pn:case ld:return{byteLength:1,components:1};case Rr:case cd:case Ai:return{byteLength:2,components:1};case Rc:case Pc:return{byteLength:2,components:4};case is:case Cc:case Bn:return{byteLength:4,components:1};case hd:case ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);function zd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fm(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E0=`#ifdef USE_GRADIENTMAP
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
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C0=`uniform bool receiveShadow;
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
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#endif`,N0=`struct PhysicalMaterial {
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
}`,F0=`
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
#endif`,O0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`#define DISTANCE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,$g=`uniform vec3 diffuse;
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
}`,Jg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,e1=`#define MATCAP
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
}`,t1=`#define MATCAP
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
}`,n1=`#define NORMAL
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
}`,i1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,r1=`#define PHONG
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
}`,o1=`#define STANDARD
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
}`,a1=`#define STANDARD
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
}`,l1=`#define TOON
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
}`,c1=`#define TOON
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
}`,h1=`uniform float size;
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
}`,u1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,f1=`uniform vec3 color;
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
}`,p1=`uniform float rotation;
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
}`,m1=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Om,alphahash_pars_fragment:zm,alphamap_fragment:Bm,alphamap_pars_fragment:km,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:Ym,beginnormal_vertex:jm,bsdfs:Zm,iridescence_fragment:Km,bumpmap_pars_fragment:$m,clipping_planes_fragment:Jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:_0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:R0,envmap_vertex:x0,fog_vertex:M0,fog_pars_vertex:y0,fog_fragment:S0,fog_pars_fragment:b0,gradientmap_pars_fragment:E0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:A0,lights_pars_begin:C0,lights_toon_fragment:P0,lights_toon_pars_fragment:D0,lights_phong_fragment:L0,lights_phong_pars_fragment:I0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:F0,lights_fragment_maps:O0,lights_fragment_end:z0,logdepthbuf_fragment:B0,logdepthbuf_pars_fragment:k0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:j0,morphinstance_vertex:Z0,morphcolor_vertex:K0,morphnormal_vertex:$0,morphtarget_pars_vertex:J0,morphtarget_vertex:Q0,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:xg,shadowmap_vertex:Mg,shadowmask_pars_fragment:yg,skinbase_vertex:Sg,skinning_pars_vertex:bg,skinning_vertex:Eg,skinnormal_vertex:wg,specularmap_fragment:Tg,specularmap_pars_fragment:Ag,tonemapping_fragment:Cg,tonemapping_pars_fragment:Rg,transmission_fragment:Pg,transmission_pars_fragment:Dg,uv_pars_fragment:Lg,uv_pars_vertex:Ig,uv_vertex:Ug,worldpos_vertex:Ng,background_vert:Fg,background_frag:Og,backgroundCube_vert:zg,backgroundCube_frag:Bg,cube_vert:kg,cube_frag:Hg,depth_vert:Vg,depth_frag:Gg,distanceRGBA_vert:Wg,distanceRGBA_frag:Xg,equirect_vert:qg,equirect_frag:Yg,linedashed_vert:jg,linedashed_frag:Zg,meshbasic_vert:Kg,meshbasic_frag:$g,meshlambert_vert:Jg,meshlambert_frag:Qg,meshmatcap_vert:e1,meshmatcap_frag:t1,meshnormal_vert:n1,meshnormal_frag:i1,meshphong_vert:s1,meshphong_frag:r1,meshphysical_vert:o1,meshphysical_frag:a1,meshtoon_vert:l1,meshtoon_frag:c1,points_vert:h1,points_frag:u1,shadow_vert:d1,shadow_frag:f1,sprite_vert:p1,sprite_frag:m1},Ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Fn={basic:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Jt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Jt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Jt([Ce.points,Ce.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Jt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Jt([Ce.common,Ce.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Jt([Ce.sprite,Ce.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Jt([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Jt([Ce.lights,Ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Fn.physical={uniforms:Jt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const So={r:0,b:0,g:0},qi=new Ln,g1=new at;function _1(i,e,t,n,s,r,o){const a=new ke(0);let l=r===!0?0:1,c,h,u=null,p=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const E=g(x);E===null?f(a,l):E&&E.isColor&&(f(E,1),v=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===ta)?(h===void 0&&(h=new Fe(new Di(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Ks(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(v.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g1.makeRotationFromEuler(qi)),h.material.toneMapped=rt.getTransfer(E.colorSpace)!==ht,(u!==E||p!==E.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Fe(new Dt(2,2),new Gt({name:"BackgroundMaterial",uniforms:Ks(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||p!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,p=E.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,v){x.getRGB(So,yd(i)),n.buffers.color.setClear(So.r,So.g,So.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(a,l)},render:_,addToRenderList:m,dispose:y}}function v1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(w,R,U,V,H){let X=!1;const G=u(V,U,R);r!==G&&(r=G,c(r.object)),X=d(w,V,U,H),X&&g(w,V,U,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(w,R,U,V),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,R,U){const V=U.wireframe===!0;let H=n[w.id];H===void 0&&(H={},n[w.id]=H);let X=H[R.id];X===void 0&&(X={},H[R.id]=X);let G=X[V];return G===void 0&&(G=p(l()),X[V]=G),G}function p(w){const R=[],U=[],V=[];for(let H=0;H<t;H++)R[H]=0,U[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:V,object:w,attributes:{},index:null}}function d(w,R,U,V){const H=r.attributes,X=R.attributes;let G=0;const B=U.getAttributes();for(const F in B)if(B[F].location>=0){const ae=H[F];let re=X[F];if(re===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),ae===void 0||ae.attribute!==re||re&&ae.data!==re.data)return!0;G++}return r.attributesNum!==G||r.index!==V}function g(w,R,U,V){const H={},X=R.attributes;let G=0;const B=U.getAttributes();for(const F in B)if(B[F].location>=0){let ae=X[F];ae===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const re={};re.attribute=ae,ae&&ae.data&&(re.data=ae.data),H[F]=re,G++}r.attributes=H,r.attributesNum=G,r.index=V}function _(){const w=r.newAttributes;for(let R=0,U=w.length;R<U;R++)w[R]=0}function m(w){f(w,0)}function f(w,R){const U=r.newAttributes,V=r.enabledAttributes,H=r.attributeDivisors;U[w]=1,V[w]===0&&(i.enableVertexAttribArray(w),V[w]=1),H[w]!==R&&(i.vertexAttribDivisor(w,R),H[w]=R)}function y(){const w=r.newAttributes,R=r.enabledAttributes;for(let U=0,V=R.length;U<V;U++)R[U]!==w[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function x(w,R,U,V,H,X,G){G===!0?i.vertexAttribIPointer(w,R,U,H,X):i.vertexAttribPointer(w,R,U,V,H,X)}function v(w,R,U,V){_();const H=V.attributes,X=U.getAttributes(),G=R.defaultAttributeValues;for(const B in X){const F=X[B];if(F.location>=0){let j=H[B];if(j===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(j=w.instanceColor)),j!==void 0){const ae=j.normalized,re=j.itemSize,se=e.get(j);if(se===void 0)continue;const K=se.buffer,ce=se.type,we=se.bytesPerElement,q=ce===i.INT||ce===i.UNSIGNED_INT||j.gpuType===Cc;if(j.isInterleavedBufferAttribute){const Y=j.data,fe=Y.stride,_e=j.offset;if(Y.isInstancedInterleavedBuffer){for(let pe=0;pe<F.locationSize;pe++)f(F.location+pe,Y.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let pe=0;pe<F.locationSize;pe++)m(F.location+pe);i.bindBuffer(i.ARRAY_BUFFER,K);for(let pe=0;pe<F.locationSize;pe++)x(F.location+pe,re/F.locationSize,ce,ae,fe*we,(_e+re/F.locationSize*pe)*we,q)}else{if(j.isInstancedBufferAttribute){for(let Y=0;Y<F.locationSize;Y++)f(F.location+Y,j.meshPerAttribute);w.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Y=0;Y<F.locationSize;Y++)m(F.location+Y);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Y=0;Y<F.locationSize;Y++)x(F.location+Y,re/F.locationSize,ce,ae,re*we,re/F.locationSize*Y*we,q)}}else if(G!==void 0){const ae=G[B];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(F.location,ae);break;case 3:i.vertexAttrib3fv(F.location,ae);break;case 4:i.vertexAttrib4fv(F.location,ae);break;default:i.vertexAttrib1fv(F.location,ae)}}}}y()}function E(){C();for(const w in n){const R=n[w];for(const U in R){const V=R[U];for(const H in V)h(V[H].object),delete V[H];delete R[U]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;const R=n[w.id];for(const U in R){const V=R[U];for(const H in V)h(V[H].object),delete V[H];delete R[U]}delete n[w.id]}function A(w){for(const R in n){const U=n[R];if(U[w.id]===void 0)continue;const V=U[w.id];for(const H in V)h(V[H].object),delete V[H];delete U[w.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function x1(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,p){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function M1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==vn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:S}}function y1(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Mi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let v=f.clippingState||null;l.value=v,v=h(g,p,x,d);for(let E=0;E!==x;++E)v[E]=t[E];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=d+_*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function S1(i){let e=new WeakMap;function t(o,a){return a===Il?o.mapping=Ws:a===Ul&&(o.mapping=Xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Il||a===Ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Up(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Fs=4,nu=[.125,.215,.35,.446,.526,.582],$i=20,$a=new Zc,iu=new ke;let Ja=null,Qa=0,el=0,tl=!1;const Ki=(1+Math.sqrt(5))/2,Ls=1/Ki,su=[new L(-Ki,Ls,0),new L(Ki,Ls,0),new L(-Ls,0,Ki),new L(Ls,0,Ki),new L(0,Ki,-Ls),new L(0,Ki,Ls),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],b1=new L;class mc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=b1}=r;Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ai,format:vn,colorSpace:js,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E1(r)),this._blurMaterial=w1(r,e,t)}return s}_compileMaterial(e){const t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,s,r){const l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(iu),u.toneMapping=Ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Xt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),m=new Fe(new Di,_);let f=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,f=!0):(_.color.copy(iu),f=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const E=this._cubeSize;bo(s,v*E,x>2?E:0,E,E),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ws||e.mapping===Xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;bo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,$a)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=su[(s-r-1)%su.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Fe(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*$i-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):$i;m>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$i}`);const f=[];let y=0;for(let A=0;A<$i;++A){const C=A/_,b=Math.exp(-C*C/2);f.push(b),A===0?y+=b:A<m&&(y+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const v=this._sizeLods[s],E=3*v*(s>x-Fs?s-x+Fs:0),S=4*(this._cubeSize-v);bo(t,E,S,3*v,2*v),l.setRenderTarget(t),l.render(u,$a)}}function E1(i){const e=[],t=[],n=[];let s=i;const r=i-Fs+1+nu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Fs?l=nu[o-i+Fs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(f*g*d);for(let S=0;S<d;S++){const A=S%3*2/3-1,C=S>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(b,_*g*S),x.set(p,m*g*S);const w=[S,S,S,S,S,S];v.set(w,f*g*S)}const E=new St;E.setAttribute("position",new ln(y,_)),E.setAttribute("uv",new ln(x,m)),E.setAttribute("faceIndex",new ln(v,f)),e.push(E),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function w1(i,e,t){const n=new Float32Array($i),s=new L(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function ou(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function au(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vt,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function T1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Il||l===Ul,h=l===Ws||l===Xs;if(c||h){let u=e.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new mc(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new mc(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function A1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function C1(i,e,t,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){const p=u.attributes;for(const d in p)e.update(p[d],i.ARRAY_BUFFER)}function c(u){const p=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,v=y.length;x<v;x+=3){const E=y[x+0],S=y[x+1],A=y[x+2];p.push(E,S,S,A,A,E)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const E=x+0,S=x+1,A=x+2;p.push(E,S,S,A,A,E)}}else return;const m=new(gd(p)?Md:xd)(p,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function R1(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,d){i.drawElements(n,d,r,p*o),t.update(d,n,1)}function c(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function u(p,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=d[y]*_[y];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function P1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function D1(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let b=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",b)};p!==void 0&&p.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const S=new Float32Array(v*E*4*u),A=new _d(S,v,E,u);A.type=Bn,A.needsUpdate=!0;const C=x*4;for(let w=0;w<u;w++){const R=m[w],U=f[w],V=y[w],H=v*E*4*w;for(let X=0;X<R.count;X++){const G=X*C;d===!0&&(s.fromBufferAttribute(R,X),S[H+G+0]=s.x,S[H+G+1]=s.y,S[H+G+2]=s.z,S[H+G+3]=0),g===!0&&(s.fromBufferAttribute(U,X),S[H+G+4]=s.x,S[H+G+5]=s.y,S[H+G+6]=s.z,S[H+G+7]=0),_===!0&&(s.fromBufferAttribute(V,X),S[H+G+8]=s.x,S[H+G+9]=s.y,S[H+G+10]=s.z,S[H+G+11]=V.itemSize===4?s.w:1)}}p={count:u,texture:A,size:new he(v,E)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function L1(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Bd=new Wt,lu=new kc(1,1),kd=new _d,Hd=new vp,Vd=new bd,cu=[],hu=[],uu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function tr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ra(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function I1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function N1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function F1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function O1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),Bt(t,n)}}function z1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),Bt(t,n)}}function B1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),Bt(t,n)}}function k1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function H1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function V1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function G1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function W1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function X1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function Y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function j1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=md,r=lu):r=Bd,t.setTexture2D(e||r,s)}function Z1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hd,s)}function K1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vd,s)}function $1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kd,s)}function J1(i){switch(i){case 5126:return I1;case 35664:return U1;case 35665:return N1;case 35666:return F1;case 35674:return O1;case 35675:return z1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return $1}}function Q1(i,e){i.uniform1fv(this.addr,e)}function e_(i,e){const t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function t_(i,e){const t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function n_(i,e){const t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function i_(i,e){const t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s_(i,e){const t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r_(i,e){const t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o_(i,e){i.uniform1iv(this.addr,e)}function a_(i,e){i.uniform2iv(this.addr,e)}function l_(i,e){i.uniform3iv(this.addr,e)}function c_(i,e){i.uniform4iv(this.addr,e)}function h_(i,e){i.uniform1uiv(this.addr,e)}function u_(i,e){i.uniform2uiv(this.addr,e)}function d_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function p_(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bd,r[o])}function m_(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Hd,r[o])}function g_(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vd,r[o])}function __(i,e,t){const n=this.cache,s=e.length,r=ra(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kd,r[o])}function v_(i){switch(i){case 5126:return Q1;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}class x_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=J1(t.type)}}class M_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v_(t.type)}}class y_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function S_(i,e,t){const n=i.name,s=n.length;for(nl.lastIndex=0;;){const r=nl.exec(n),o=nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pu(t,c===void 0?new x_(a,i,e):new M_(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new y_(a),pu(t,u)),t=u}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);S_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function mu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const b_=37297;let E_=0;function w_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gu=new et;function T_(i){rt._getMatrix(gu,rt.workingColorSpace,i);const e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case jo:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _u(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+w_(i.getShaderSource(e),a)}else return r}function A_(i,e){const t=T_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function C_(i,e){let t;switch(e){case td:t="Linear";break;case nd:t="Reinhard";break;case id:t="Cineon";break;case Ac:t="ACESFilmic";break;case rd:t="AgX";break;case od:t="Neutral";break;case sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Eo=new L;function R_(){rt.getLuminanceCoefficients(Eo);const i=Eo.x.toFixed(4),e=Eo.y.toFixed(4),t=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function D_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function L_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function yr(i){return i!==""}function vu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(I_,N_)}const U_=new Map;function N_(i,e){let t=Qe[e];if(t===void 0){const n=U_.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(F_,O_)}function O_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function z_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===yf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function B_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function k_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xs&&(e="ENVMAP_MODE_REFRACTION"),e}function H_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ff:e="ENVMAP_BLENDING_MIX";break;case Of:e="ENVMAP_BLENDING_ADD";break}return e}function V_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function G_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=z_(t),c=B_(t),h=k_(t),u=H_(t),p=V_(t),d=P_(t),g=D_(r),_=s.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),f.length>0&&(f+=`
`)):(m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),f=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ei?C_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,A_("linearToOutputTexel",t.outputColorSpace),R_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),o=gc(o),o=vu(o,t),o=xu(o,t),a=gc(a),a=vu(a,t),a=xu(a,t),o=Mu(o),a=Mu(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+o,v=y+f+a,E=mu(s,s.VERTEX_SHADER,x),S=mu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,E),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(E)||"",H=s.getShaderInfoLog(S)||"",X=U.trim(),G=V.trim(),B=H.trim();let F=!0,j=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,S);else{const ae=_u(s,E,"vertex"),re=_u(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+ae+`
`+re)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||B==="")&&(j=!1);j&&(R.diagnostics={runnable:F,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:B,prefix:f}})}s.deleteShader(E),s.deleteShader(S),C=new Vo(s,_),b=L_(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,b_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}let W_=0;class X_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new q_(e),t.set(e,n)),n}}class q_{constructor(e){this.id=W_++,this.code=e,this.usedTimes=0}}function Y_(i,e,t,n,s,r,o){const a=new Oc,l=new X_,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,R,U,V){const H=U.fog,X=V.geometry,G=b.isMeshStandardMaterial?U.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),F=B&&B.mapping===ta?B.image.height:null,j=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=ae!==void 0?ae.length:0;let se=0;X.morphAttributes.position!==void 0&&(se=1),X.morphAttributes.normal!==void 0&&(se=2),X.morphAttributes.color!==void 0&&(se=3);let K,ce,we,q;if(j){const ot=Fn[j];K=ot.vertexShader,ce=ot.fragmentShader}else K=b.vertexShader,ce=b.fragmentShader,l.update(b),we=l.getVertexShaderID(b),q=l.getFragmentShaderID(b);const Y=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),_e=V.isInstancedMesh===!0,pe=V.isBatchedMesh===!0,Ve=!!b.map,Xe=!!b.matcap,I=!!B,ee=!!b.aoMap,J=!!b.lightMap,ne=!!b.bumpMap,te=!!b.normalMap,be=!!b.displacementMap,de=!!b.emissiveMap,Me=!!b.metalnessMap,He=!!b.roughnessMap,ze=b.anisotropy>0,P=b.clearcoat>0,T=b.dispersion>0,W=b.iridescence>0,Z=b.sheen>0,ue=b.transmission>0,$=ze&&!!b.anisotropyMap,De=P&&!!b.clearcoatMap,ye=P&&!!b.clearcoatNormalMap,Le=P&&!!b.clearcoatRoughnessMap,Ne=W&&!!b.iridescenceMap,ge=W&&!!b.iridescenceThicknessMap,Te=Z&&!!b.sheenColorMap,Ge=Z&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Ee=!!b.specularColorMap,We=!!b.specularIntensityMap,k=ue&&!!b.transmissionMap,oe=ue&&!!b.thicknessMap,xe=!!b.gradientMap,Ue=!!b.alphaMap,Se=b.alphaTest>0,le=!!b.alphaHash,Pe=!!b.extensions;let Ye=Ei;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const lt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:ce,defines:b.defines,customVertexShaderID:we,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:pe,batchingColor:pe&&V._colorsTexture!==null,instancing:_e,instancingColor:_e&&V.instanceColor!==null,instancingMorph:_e&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:js,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:Xe,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:F,aoMap:ee,lightMap:J,bumpMap:ne,normalMap:te,displacementMap:p&&be,emissiveMap:de,normalMapObjectSpace:te&&b.normalMapType===Hf,normalMapTangentSpace:te&&b.normalMapType===na,metalnessMap:Me,roughnessMap:He,anisotropy:ze,anisotropyMap:$,clearcoat:P,clearcoatMap:De,clearcoatNormalMap:ye,clearcoatRoughnessMap:Le,dispersion:T,iridescence:W,iridescenceMap:Ne,iridescenceThicknessMap:ge,sheen:Z,sheenColorMap:Te,sheenRoughnessMap:Ge,specularMap:Oe,specularColorMap:Ee,specularIntensityMap:We,transmission:ue,transmissionMap:k,thicknessMap:oe,gradientMap:xe,opaque:b.transparent===!1&&b.blending===zs&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Se,alphaHash:le,combine:b.combine,mapUv:Ve&&_(b.map.channel),aoMapUv:ee&&_(b.aoMap.channel),lightMapUv:J&&_(b.lightMap.channel),bumpMapUv:ne&&_(b.bumpMap.channel),normalMapUv:te&&_(b.normalMap.channel),displacementMapUv:be&&_(b.displacementMap.channel),emissiveMapUv:de&&_(b.emissiveMap.channel),metalnessMapUv:Me&&_(b.metalnessMap.channel),roughnessMapUv:He&&_(b.roughnessMap.channel),anisotropyMapUv:$&&_(b.anisotropyMap.channel),clearcoatMapUv:De&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:ye&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(b.sheenRoughnessMap.channel),specularMapUv:Oe&&_(b.specularMap.channel),specularColorMapUv:Ee&&_(b.specularColorMap.channel),specularIntensityMapUv:We&&_(b.specularIntensityMap.channel),transmissionMapUv:k&&_(b.transmissionMap.channel),thicknessMapUv:oe&&_(b.thicknessMap.channel),alphaMapUv:Ue&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(te||ze),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!X.attributes.uv&&(Ve||Ue),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:V.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===ht,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yt,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function f(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)w.push(R),w.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(w,b),x(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function x(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const w=g[b.type];let R;if(w){const U=Fn[w];R=Si.clone(U.uniforms)}else R=b.uniforms;return R}function E(b,w){let R;for(let U=0,V=h.length;U<V;U++){const H=h[U];if(H.cacheKey===w){R=H,++R.usedTimes;break}}return R===void 0&&(R=new G_(i,w,b,r),h.push(R)),R}function S(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:C}}function j_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Z_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,d,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):t.push(f)}function l(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||Z_),n.length>1&&n.sort(p||Su),s.length>1&&s.sort(p||Su)}function h(){for(let u=e,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function K_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new bu,i.set(n,[o])):s>=r.length?(o=new bu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function $_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new ke};break;case"SpotLight":t={position:new L,direction:new L,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function J_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Q_=0;function ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tv(i){const e=new $_,t=J_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new at,o=new at;function a(c){let h=0,u=0,p=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,y=0,x=0,v=0,E=0,S=0,A=0;c.sort(ev);for(let b=0,w=c.length;b<w;b++){const R=c[b],U=R.color,V=R.intensity,H=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=U.r*V,u+=U.g*V,p+=U.b*V;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],V);A++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,F=t.get(R);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=R.shadow.matrix,y++}n.directional[d]=G,d++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(U).multiplyScalar(V),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const B=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,B.updateMatrices(R),R.castShadow&&S++),n.spotLightMatrix[_]=B.matrix,R.castShadow){const F=t.get(R);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=X,v++}_++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(U).multiplyScalar(V),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const B=R.shadow,F=t.get(R);F.shadowIntensity=B.intensity,F.shadowBias=B.bias,F.shadowNormalBias=B.normalBias,F.shadowRadius=B.radius,F.shadowMapSize=B.mapSize,F.shadowCameraNear=B.camera.near,F.shadowCameraFar=B.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(V),G.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=A,n.version=Q_++)}function l(c,h){let u=0,p=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const x=c[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Eu(i){const e=new tv(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Eu(i),e.set(s,[a])):r>=o.length?(a=new Eu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
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
}`;function rv(i,e,t){let n=new Bc;const s=new he,r=new he,o=new pt,a=new Sm({depthPacking:kf}),l=new bm,c={},h=t.maxTextureSize,u={[Ti]:Qt,[Qt]:Ti,[yt]:yt},p=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new St;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let f=this.type;this.render=function(S,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const b=i.getRenderTarget(),w=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Vt),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const V=f!==ni&&this.type===ni,H=f===ni&&this.type!==ni;for(let X=0,G=S.length;X<G;X++){const B=S[X],F=B.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const j=F.getFrameExtents();if(s.multiply(j),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,F.mapSize.y=r.y)),F.map===null||V===!0||H===!0){const re=this.type!==ni?{minFilter:en,magFilter:en}:{};F.map!==null&&F.map.dispose(),F.map=new qn(s.x,s.y,re),F.map.texture.name=B.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const ae=F.getViewportCount();for(let re=0;re<ae;re++){const se=F.getViewport(re);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),U.viewport(o),F.updateMatrices(B,re),n=F.getFrustum(),v(A,C,F.camera,B,this.type)}F.isPointLightShadow!==!0&&this.type===ni&&y(F,C),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,R)};function y(S,A){const C=e.update(_);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new qn(s.x,s.y)),p.uniforms.shadow_pass.value=S.map.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,C,p,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,C,d,_,null)}function x(S,A,C,b){let w=null;const R=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)w=R;else if(w=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=w.uuid,V=A.uuid;let H=c[U];H===void 0&&(H={},c[U]=H);let X=H[V];X===void 0&&(X=w.clone(),H[V]=X,A.addEventListener("dispose",E)),w=X}if(w.visible=A.visible,w.wireframe=A.wireframe,b===ni?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const U=i.properties.get(w);U.light=C}return w}function v(S,A,C,b,w){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===ni)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const V=e.update(S),H=S.material;if(Array.isArray(H)){const X=V.groups;for(let G=0,B=X.length;G<B;G++){const F=X[G],j=H[F.materialIndex];if(j&&j.visible){const ae=x(S,j,b,w);S.onBeforeShadow(i,S,A,C,V,ae,F),i.renderBufferDirect(C,null,V,ae,S,F),S.onAfterShadow(i,S,A,C,V,ae,F)}}}else if(H.visible){const X=x(S,H,b,w);S.onBeforeShadow(i,S,A,C,V,X,null),i.renderBufferDirect(C,null,V,X,S,null),S.onAfterShadow(i,S,A,C,V,X,null)}}const U=S.children;for(let V=0,H=U.length;V<H;V++)v(U[V],A,C,b,w)}function E(S){S.target.removeEventListener("dispose",E);for(const C in c){const b=c[C],w=S.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const ov={[Tl]:Al,[Cl]:Dl,[Rl]:Ll,[Gs]:Pl,[Al]:Tl,[Dl]:Cl,[Ll]:Rl,[Pl]:Gs};function av(i,e){function t(){let k=!1;const oe=new pt;let xe=null;const Ue=new pt(0,0,0,0);return{setMask:function(Se){xe!==Se&&!k&&(i.colorMask(Se,Se,Se,Se),xe=Se)},setLocked:function(Se){k=Se},setClear:function(Se,le,Pe,Ye,lt){lt===!0&&(Se*=Ye,le*=Ye,Pe*=Ye),oe.set(Se,le,Pe,Ye),Ue.equals(oe)===!1&&(i.clearColor(Se,le,Pe,Ye),Ue.copy(oe))},reset:function(){k=!1,xe=null,Ue.set(-1,0,0,0)}}}function n(){let k=!1,oe=!1,xe=null,Ue=null,Se=null;return{setReversed:function(le){if(oe!==le){const Pe=e.get("EXT_clip_control");le?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),oe=le;const Ye=Se;Se=null,this.setClear(Ye)}},getReversed:function(){return oe},setTest:function(le){le?Y(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(le){xe!==le&&!k&&(i.depthMask(le),xe=le)},setFunc:function(le){if(oe&&(le=ov[le]),Ue!==le){switch(le){case Tl:i.depthFunc(i.NEVER);break;case Al:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case Rl:i.depthFunc(i.EQUAL);break;case Pl:i.depthFunc(i.GEQUAL);break;case Dl:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=le}},setLocked:function(le){k=le},setClear:function(le){Se!==le&&(oe&&(le=1-le),i.clearDepth(le),Se=le)},reset:function(){k=!1,xe=null,Ue=null,Se=null,oe=!1}}}function s(){let k=!1,oe=null,xe=null,Ue=null,Se=null,le=null,Pe=null,Ye=null,lt=null;return{setTest:function(ot){k||(ot?Y(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!k&&(i.stencilMask(ot),oe=ot)},setFunc:function(ot,mt,dn){(xe!==ot||Ue!==mt||Se!==dn)&&(i.stencilFunc(ot,mt,dn),xe=ot,Ue=mt,Se=dn)},setOp:function(ot,mt,dn){(le!==ot||Pe!==mt||Ye!==dn)&&(i.stencilOp(ot,mt,dn),le=ot,Pe=mt,Ye=dn)},setLocked:function(ot){k=ot},setClear:function(ot){lt!==ot&&(i.clearStencil(ot),lt=ot)},reset:function(){k=!1,oe=null,xe=null,Ue=null,Se=null,le=null,Pe=null,Ye=null,lt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,y=null,x=null,v=null,E=null,S=null,A=new ke(0,0,0),C=0,b=!1,w=null,R=null,U=null,V=null,H=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),G=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),G=B>=2);let j=null,ae={};const re=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),K=new pt().fromArray(re),ce=new pt().fromArray(se);function we(k,oe,xe,Ue){const Se=new Uint8Array(4),le=i.createTexture();i.bindTexture(k,le),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<xe;Pe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(oe+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return le}const q={};q[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(Gs),ne(!1),te(ph),Y(i.CULL_FACE),ee(Vt);function Y(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function fe(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function _e(k,oe){return u[k]!==oe?(i.bindFramebuffer(k,oe),u[k]=oe,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=oe),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function pe(k,oe){let xe=d,Ue=!1;if(k){xe=p.get(oe),xe===void 0&&(xe=[],p.set(oe,xe));const Se=k.textures;if(xe.length!==Se.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Pe=Se.length;le<Pe;le++)xe[le]=i.COLOR_ATTACHMENT0+le;xe.length=Se.length,Ue=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(xe)}function Ve(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const Xe={[wn]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};Xe[Ef]=i.MIN,Xe[wf]=i.MAX;const I={[xr]:i.ZERO,[Tf]:i.ONE,[Af]:i.SRC_COLOR,[Sl]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[wl]:i.DST_COLOR,[El]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[bl]:i.ONE_MINUS_SRC_ALPHA,[Pf]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[Lf]:i.CONSTANT_COLOR,[If]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Nf]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(k,oe,xe,Ue,Se,le,Pe,Ye,lt,ot){if(k===Vt){_===!0&&(fe(i.BLEND),_=!1);return}if(_===!1&&(Y(i.BLEND),_=!0),k!==ed){if(k!==m||ot!==b){if((f!==wn||v!==wn)&&(i.blendEquation(i.FUNC_ADD),f=wn,v=wn),ot)switch(k){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,x=null,E=null,S=null,A.set(0,0,0),C=0,m=k,b=ot}return}Se=Se||oe,le=le||xe,Pe=Pe||Ue,(oe!==f||Se!==v)&&(i.blendEquationSeparate(Xe[oe],Xe[Se]),f=oe,v=Se),(xe!==y||Ue!==x||le!==E||Pe!==S)&&(i.blendFuncSeparate(I[xe],I[Ue],I[le],I[Pe]),y=xe,x=Ue,E=le,S=Pe),(Ye.equals(A)===!1||lt!==C)&&(i.blendColor(Ye.r,Ye.g,Ye.b,lt),A.copy(Ye),C=lt),m=k,b=!1}function J(k,oe){k.side===yt?fe(i.CULL_FACE):Y(i.CULL_FACE);let xe=k.side===Qt;oe&&(xe=!xe),ne(xe),k.blending===zs&&k.transparent===!1?ee(Vt):ee(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ue=k.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),de(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(k){w!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),w=k)}function te(k){k!==xf?(Y(i.CULL_FACE),k!==R&&(k===ph?i.cullFace(i.BACK):k===Mf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),R=k}function be(k){k!==U&&(G&&i.lineWidth(k),U=k)}function de(k,oe,xe){k?(Y(i.POLYGON_OFFSET_FILL),(V!==oe||H!==xe)&&(i.polygonOffset(oe,xe),V=oe,H=xe)):fe(i.POLYGON_OFFSET_FILL)}function Me(k){k?Y(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function He(k){k===void 0&&(k=i.TEXTURE0+X-1),j!==k&&(i.activeTexture(k),j=k)}function ze(k,oe,xe){xe===void 0&&(j===null?xe=i.TEXTURE0+X-1:xe=j);let Ue=ae[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},ae[xe]=Ue),(Ue.type!==k||Ue.texture!==oe)&&(j!==xe&&(i.activeTexture(xe),j=xe),i.bindTexture(k,oe||q[k]),Ue.type=k,Ue.texture=oe)}function P(){const k=ae[j];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ne(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(k){K.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),K.copy(k))}function Ge(k){ce.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ce.copy(k))}function Oe(k,oe){let xe=c.get(oe);xe===void 0&&(xe=new WeakMap,c.set(oe,xe));let Ue=xe.get(k);Ue===void 0&&(Ue=i.getUniformBlockIndex(oe,k.name),xe.set(k,Ue))}function Ee(k,oe){const Ue=c.get(oe).get(k);l.get(oe)!==Ue&&(i.uniformBlockBinding(oe,Ue,k.__bindingPointIndex),l.set(oe,Ue))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},j=null,ae={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,y=null,x=null,v=null,E=null,S=null,A=new ke(0,0,0),C=0,b=!1,w=null,R=null,U=null,V=null,H=null,K.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:fe,bindFramebuffer:_e,drawBuffers:pe,useProgram:Ve,setBlending:ee,setMaterial:J,setFlipSided:ne,setCullFace:te,setLineWidth:be,setPolygonOffset:de,setScissorTest:Me,activeTexture:He,bindTexture:ze,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Ne,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:Ee,texStorage2D:ye,texStorage3D:Le,texSubImage2D:Z,texSubImage3D:ue,compressedTexSubImage2D:$,compressedTexSubImage3D:De,scissor:Te,viewport:Ge,reset:We}}function lv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return d?new OffscreenCanvas(P,T):Dr("canvas")}function _(P,T,W){let Z=1;const ue=ze(P);if((ue.width>W||ue.height>W)&&(Z=W/Math.max(ue.width,ue.height)),Z<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(Z*ue.width),De=Math.floor(Z*ue.height);u===void 0&&(u=g($,De));const ye=T?g($,De):u;return ye.width=$,ye.height=De,ye.getContext("2d").drawImage(P,0,0,$,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+$+"x"+De+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,T,W,Z,ue=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=T;if(T===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),T===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),T===i.RGBA){const De=ue?jo:rt.getTransfer(Z);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=De===ht?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(P,T){let W;return P?T===null||T===is||T===qs?W=i.DEPTH24_STENCIL8:T===Bn?W=i.DEPTH32F_STENCIL8:T===Rr&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===is||T===qs?W=i.DEPTH_COMPONENT24:T===Bn?W=i.DEPTH_COMPONENT32F:T===Rr&&(W=i.DEPTH_COMPONENT16),W}function E(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==Cn?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function S(P){const T=P.target;T.removeEventListener("dispose",S),C(T),T.isVideoTexture&&h.delete(T)}function A(P){const T=P.target;T.removeEventListener("dispose",A),w(T)}function C(P){const T=n.get(P);if(T.__webglInit===void 0)return;const W=P.source,Z=p.get(W);if(Z){const ue=Z[T.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&b(P),Object.keys(Z).length===0&&p.delete(W)}n.remove(P)}function b(P){const T=n.get(P);i.deleteTexture(T.__webglTexture);const W=P.source,Z=p.get(W);delete Z[T.__cacheKey],o.memory.textures--}function w(P){const T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let ue=0;ue<T.__webglFramebuffer[Z].length;ue++)i.deleteFramebuffer(T.__webglFramebuffer[Z][ue]);else i.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[Z]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=P.textures;for(let Z=0,ue=W.length;Z<ue;Z++){const $=n.get(W[Z]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(W[Z])}n.remove(P)}let R=0;function U(){R=0}function V(){const P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function H(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function X(P,T){const W=n.get(P);if(P.isVideoTexture&&Me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(W,P,T);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function G(P,T){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){q(W,P,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function B(P,T){const W=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){q(W,P,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function F(P,T){const W=n.get(P);if(P.version>0&&W.__version!==P.version){Y(W,P,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const j={[Wn]:i.REPEAT,[Ji]:i.CLAMP_TO_EDGE,[Nl]:i.MIRRORED_REPEAT},ae={[en]:i.NEAREST,[zf]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},re={[Vf]:i.NEVER,[jf]:i.ALWAYS,[Gf]:i.LESS,[md]:i.LEQUAL,[Wf]:i.EQUAL,[Yf]:i.GEQUAL,[Xf]:i.GREATER,[qf]:i.NOTEQUAL};function se(P,T){if(T.type===Bn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Cn||T.magFilter===Sa||T.magFilter===$r||T.magFilter===Qi||T.minFilter===Cn||T.minFilter===Sa||T.minFilter===$r||T.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,j[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,j[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,j[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ae[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===en||T.minFilter!==$r&&T.minFilter!==Qi||T.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function K(P,T){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",S));const Z=T.source;let ue=p.get(Z);ue===void 0&&(ue={},p.set(Z,ue));const $=H(T);if($!==P.__cacheKey){ue[$]===void 0&&(ue[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ue[$].usedTimes++;const De=ue[P.__cacheKey];De!==void 0&&(ue[P.__cacheKey].usedTimes--,De.usedTimes===0&&b(T)),P.__cacheKey=$,P.__webglTexture=ue[$].texture}return W}function ce(P,T,W){return Math.floor(Math.floor(P/W)/T)}function we(P,T,W,Z){const $=P.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,Z,T.data);else{$.sort((ge,Te)=>ge.start-Te.start);let De=0;for(let ge=1;ge<$.length;ge++){const Te=$[De],Ge=$[ge],Oe=Te.start+Te.count,Ee=ce(Ge.start,T.width,4),We=ce(Te.start,T.width,4);Ge.start<=Oe+1&&Ee===We&&ce(Ge.start+Ge.count-1,T.width,4)===Ee?Te.count=Math.max(Te.count,Ge.start+Ge.count-Te.start):(++De,$[De]=Ge)}$.length=De+1;const ye=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ge=0,Te=$.length;ge<Te;ge++){const Ge=$[ge],Oe=Math.floor(Ge.start/4),Ee=Math.ceil(Ge.count/4),We=Oe%T.width,k=Math.floor(Oe/T.width),oe=Ee,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,We,k,oe,xe,W,Z,T.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ye),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function q(P,T,W){let Z=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=i.TEXTURE_3D);const ue=K(P,T),$=T.source;t.bindTexture(Z,P.__webglTexture,i.TEXTURE0+W);const De=n.get($);if($.version!==De.__version||ue===!0){t.activeTexture(i.TEXTURE0+W);const ye=rt.getPrimaries(rt.workingColorSpace),Le=T.colorSpace===ri?null:rt.getPrimaries(T.colorSpace),Ne=T.colorSpace===ri||ye===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ge=_(T.image,!1,s.maxTextureSize);ge=He(T,ge);const Te=r.convert(T.format,T.colorSpace),Ge=r.convert(T.type);let Oe=x(T.internalFormat,Te,Ge,T.colorSpace,T.isVideoTexture);se(Z,T);let Ee;const We=T.mipmaps,k=T.isVideoTexture!==!0,oe=De.__version===void 0||ue===!0,xe=$.dataReady,Ue=E(T,ge);if(T.isDepthTexture)Oe=v(T.format===Ys,T.type),oe&&(k?t.texStorage2D(i.TEXTURE_2D,1,Oe,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Te,Ge,null));else if(T.isDataTexture)if(We.length>0){k&&oe&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,We[0].width,We[0].height);for(let Se=0,le=We.length;Se<le;Se++)Ee=We[Se],k?xe&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ee.width,Ee.height,Te,Ge,Ee.data):t.texImage2D(i.TEXTURE_2D,Se,Oe,Ee.width,Ee.height,0,Te,Ge,Ee.data);T.generateMipmaps=!1}else k?(oe&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ge.width,ge.height),xe&&we(T,ge,Te,Ge)):t.texImage2D(i.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Te,Ge,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Oe,We[0].width,We[0].height,ge.depth);for(let Se=0,le=We.length;Se<le;Se++)if(Ee=We[Se],T.format!==vn)if(Te!==null)if(k){if(xe)if(T.layerUpdates.size>0){const Pe=tu(Ee.width,Ee.height,T.format,T.type);for(const Ye of T.layerUpdates){const lt=Ee.data.subarray(Ye*Pe/Ee.data.BYTES_PER_ELEMENT,(Ye+1)*Pe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,Ye,Ee.width,Ee.height,1,Te,lt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Ee.width,Ee.height,ge.depth,Te,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Se,Oe,Ee.width,Ee.height,ge.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Se,0,0,0,Ee.width,Ee.height,ge.depth,Te,Ge,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Se,Oe,Ee.width,Ee.height,ge.depth,0,Te,Ge,Ee.data)}else{k&&oe&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,We[0].width,We[0].height);for(let Se=0,le=We.length;Se<le;Se++)Ee=We[Se],T.format!==vn?Te!==null?k?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,Se,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,Se,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?xe&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Ee.width,Ee.height,Te,Ge,Ee.data):t.texImage2D(i.TEXTURE_2D,Se,Oe,Ee.width,Ee.height,0,Te,Ge,Ee.data)}else if(T.isDataArrayTexture)if(k){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Oe,ge.width,ge.height,ge.depth),xe)if(T.layerUpdates.size>0){const Se=tu(ge.width,ge.height,T.format,T.type);for(const le of T.layerUpdates){const Pe=ge.data.subarray(le*Se/ge.data.BYTES_PER_ELEMENT,(le+1)*Se/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ge.width,ge.height,1,Te,Ge,Pe)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Te,Ge,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ge.width,ge.height,ge.depth,0,Te,Ge,ge.data);else if(T.isData3DTexture)k?(oe&&t.texStorage3D(i.TEXTURE_3D,Ue,Oe,ge.width,ge.height,ge.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Te,Ge,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ge.width,ge.height,ge.depth,0,Te,Ge,ge.data);else if(T.isFramebufferTexture){if(oe)if(k)t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ge.width,ge.height);else{let Se=ge.width,le=ge.height;for(let Pe=0;Pe<Ue;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Oe,Se,le,0,Te,Ge,null),Se>>=1,le>>=1}}else if(We.length>0){if(k&&oe){const Se=ze(We[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Oe,Se.width,Se.height)}for(let Se=0,le=We.length;Se<le;Se++)Ee=We[Se],k?xe&&t.texSubImage2D(i.TEXTURE_2D,Se,0,0,Te,Ge,Ee):t.texImage2D(i.TEXTURE_2D,Se,Oe,Te,Ge,Ee);T.generateMipmaps=!1}else if(k){if(oe){const Se=ze(ge);t.texStorage2D(i.TEXTURE_2D,Ue,Oe,Se.width,Se.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Ge,ge)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Te,Ge,ge);m(T)&&f(Z),De.__version=$.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Y(P,T,W){if(T.image.length!==6)return;const Z=K(P,T),ue=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+W);const $=n.get(ue);if(ue.version!==$.__version||Z===!0){t.activeTexture(i.TEXTURE0+W);const De=rt.getPrimaries(rt.workingColorSpace),ye=T.colorSpace===ri?null:rt.getPrimaries(T.colorSpace),Le=T.colorSpace===ri||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ne=T.isCompressedTexture||T.image[0].isCompressedTexture,ge=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let le=0;le<6;le++)!Ne&&!ge?Te[le]=_(T.image[le],!0,s.maxCubemapSize):Te[le]=ge?T.image[le].image:T.image[le],Te[le]=He(T,Te[le]);const Ge=Te[0],Oe=r.convert(T.format,T.colorSpace),Ee=r.convert(T.type),We=x(T.internalFormat,Oe,Ee,T.colorSpace),k=T.isVideoTexture!==!0,oe=$.__version===void 0||Z===!0,xe=ue.dataReady;let Ue=E(T,Ge);se(i.TEXTURE_CUBE_MAP,T);let Se;if(Ne){k&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,We,Ge.width,Ge.height);for(let le=0;le<6;le++){Se=Te[le].mipmaps;for(let Pe=0;Pe<Se.length;Pe++){const Ye=Se[Pe];T.format!==vn?Oe!==null?k?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,We,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,0,0,Ye.width,Ye.height,Oe,Ee,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe,We,Ye.width,Ye.height,0,Oe,Ee,Ye.data)}}}else{if(Se=T.mipmaps,k&&oe){Se.length>0&&Ue++;const le=ze(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,We,le.width,le.height)}for(let le=0;le<6;le++)if(ge){k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Te[le].width,Te[le].height,Oe,Ee,Te[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Te[le].width,Te[le].height,0,Oe,Ee,Te[le].data);for(let Pe=0;Pe<Se.length;Pe++){const lt=Se[Pe].image[le].image;k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,lt.width,lt.height,Oe,Ee,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,We,lt.width,lt.height,0,Oe,Ee,lt.data)}}else{k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,Ee,Te[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Oe,Ee,Te[le]);for(let Pe=0;Pe<Se.length;Pe++){const Ye=Se[Pe];k?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,0,0,Oe,Ee,Ye.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe+1,We,Oe,Ee,Ye.image[le])}}}m(T)&&f(i.TEXTURE_CUBE_MAP),$.__version=ue.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function fe(P,T,W,Z,ue,$){const De=r.convert(W.format,W.colorSpace),ye=r.convert(W.type),Le=x(W.internalFormat,De,ye,W.colorSpace),Ne=n.get(T),ge=n.get(W);if(ge.__renderTarget=T,!Ne.__hasExternalTextures){const Te=Math.max(1,T.width>>$),Ge=Math.max(1,T.height>>$);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,$,Le,Te,Ge,T.depth,0,De,ye,null):t.texImage2D(ue,$,Le,Te,Ge,0,De,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),de(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ue,ge.__webglTexture,0,be(T)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ue,ge.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(P,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){const Z=T.depthTexture,ue=Z&&Z.isDepthTexture?Z.type:null,$=v(T.stencilBuffer,ue),De=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=be(T);de(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,$,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,$,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,P)}else{const Z=T.textures;for(let ue=0;ue<Z.length;ue++){const $=Z[ue],De=r.convert($.format,$.colorSpace),ye=r.convert($.type),Le=x($.internalFormat,De,ye,$.colorSpace),Ne=be(T);W&&de(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Le,T.width,T.height):de(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Le,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Le,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const ue=Z.__webglTexture,$=be(T);if(T.depthTexture.format===Pr)de(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(T.depthTexture.format===Ys)de(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function Ve(P){const T=n.get(P),W=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const Z=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){const ue=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",ue)};Z.addEventListener("dispose",ue),T.__depthDisposeCallback=ue}T.__boundDepthTexture=Z}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const Z=P.texture.mipmaps;Z&&Z.length>0?pe(T.__webglFramebuffer[0],P):pe(T.__webglFramebuffer,P)}else if(W){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=i.createRenderbuffer(),_e(T.__webglDepthbuffer[Z],P,!1);else{const ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,$)}}else{const Z=P.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),_e(T.__webglDepthbuffer,P,!1);else{const ue=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(P,T,W){const Z=n.get(P);T!==void 0&&fe(Z.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ve(P)}function I(P){const T=P.texture,W=n.get(P),Z=n.get(T);P.addEventListener("dispose",A);const ue=P.textures,$=P.isWebGLCubeRenderTarget===!0,De=ue.length>1;if(De||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=T.version,o.memory.textures++),$){W.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ye]=[];for(let Le=0;Le<T.mipmaps.length;Le++)W.__webglFramebuffer[ye][Le]=i.createFramebuffer()}else W.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)W.__webglFramebuffer[ye]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(De)for(let ye=0,Le=ue.length;ye<Le;ye++){const Ne=n.get(ue[ye]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&de(P)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ye=0;ye<ue.length;ye++){const Le=ue[ye];W.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ye]);const Ne=r.convert(Le.format,Le.colorSpace),ge=r.convert(Le.type),Te=x(Le.internalFormat,Ne,ge,Le.colorSpace,P.isXRRenderTarget===!0),Ge=be(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Te,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,W.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),se(i.TEXTURE_CUBE_MAP,T);for(let ye=0;ye<6;ye++)if(T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)fe(W.__webglFramebuffer[ye][Le],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Le);else fe(W.__webglFramebuffer[ye],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(T)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ye=0,Le=ue.length;ye<Le;ye++){const Ne=ue[ye],ge=n.get(Ne);let Te=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ge.__webglTexture),se(Te,Ne),fe(W.__webglFramebuffer,P,Ne,i.COLOR_ATTACHMENT0+ye,Te,0),m(Ne)&&f(Te)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Z.__webglTexture),se(ye,T),T.mipmaps&&T.mipmaps.length>0)for(let Le=0;Le<T.mipmaps.length;Le++)fe(W.__webglFramebuffer[Le],P,T,i.COLOR_ATTACHMENT0,ye,Le);else fe(W.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,ye,0);m(T)&&f(ye),t.unbindTexture()}P.depthBuffer&&Ve(P)}function ee(P){const T=P.textures;for(let W=0,Z=T.length;W<Z;W++){const ue=T[W];if(m(ue)){const $=y(P),De=n.get(ue).__webglTexture;t.bindTexture($,De),f($),t.unbindTexture()}}}const J=[],ne=[];function te(P){if(P.samples>0){if(de(P)===!1){const T=P.textures,W=P.width,Z=P.height;let ue=i.COLOR_BUFFER_BIT;const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(P),ye=T.length>1;if(ye)for(let Ne=0;Ne<T.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Le=P.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ne=0;Ne<T.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const ge=n.get(T[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,W,Z,0,0,W,Z,ue,i.NEAREST),l===!0&&(J.length=0,ne.length=0,J.push(i.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(J.push($),ne.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ne=0;Ne<T.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ne]);const ge=n.get(T[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function be(P){return Math.min(s.maxSamples,P.samples)}function de(P){const T=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Me(P){const T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function He(P,T){const W=P.colorSpace,Z=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==js&&W!==ri&&(rt.getTransfer(W)===ht?(Z!==vn||ue!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=Xe,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=de}function cv(i,e){function t(n,s=ri){let r;const o=rt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Rc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ud)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ld)return i.BYTE;if(n===cd)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===Cc)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===dd)return i.ALPHA;if(n===fd)return i.RGB;if(n===vn)return i.RGBA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===Ys)return i.DEPTH_STENCIL;if(n===Dc)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===pd)return i.RG;if(n===Ic)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===zo||n===Bo||n===ko||n===Ho)if(o===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Ol||n===zl||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Hl)return o===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===jl||n===Zl||n===Kl||n===$l||n===Jl||n===Ql||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Kl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return o===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ic)return o===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===ac||n===lc||n===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const hv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uv=`
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

}`;class dv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:hv,fragmentShader:uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Dt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fv extends ls{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new dv,f={},y=t.getContextAttributes();let x=null,v=null;const E=[],S=[],A=new he;let C=null;const b=new an;b.viewport=new pt;const w=new an;w.viewport=new pt;const R=[b,w],U=new Lm;let V=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=E[q];return Y===void 0&&(Y=new Ga,E[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=E[q];return Y===void 0&&(Y=new Ga,E[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=E[q];return Y===void 0&&(Y=new Ga,E[q]=Y),Y.getHandSpace()};function X(q){const Y=S.indexOf(q.inputSource);if(Y===-1)return;const fe=E[Y];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",B);for(let q=0;q<E.length;q++){const Y=S[q];Y!==null&&(S[q]=null,E[q].disconnect(Y))}V=null,H=null,m.reset();for(const q in f)delete f[q];e.setRenderTarget(x),d=null,p=null,u=null,s=null,v=null,we.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,_e=null,pe=null;y.depth&&(pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=y.stencil?Ys:Pr,_e=y.stencil?qs:is);const Ve={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new qn(p.textureWidth,p.textureHeight,{format:vn,type:Pn,depthTexture:new kc(p.textureWidth,p.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const fe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new qn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),we.setContext(s),we.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(q){for(let Y=0;Y<q.removed.length;Y++){const fe=q.removed[Y],_e=S.indexOf(fe);_e>=0&&(S[_e]=null,E[_e].disconnect(fe))}for(let Y=0;Y<q.added.length;Y++){const fe=q.added[Y];let _e=S.indexOf(fe);if(_e===-1){for(let Ve=0;Ve<E.length;Ve++)if(Ve>=S.length){S.push(fe),_e=Ve;break}else if(S[Ve]===null){S[Ve]=fe,_e=Ve;break}if(_e===-1)break}const pe=E[_e];pe&&pe.connect(fe)}}const F=new L,j=new L;function ae(q,Y,fe){F.setFromMatrixPosition(Y.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const _e=F.distanceTo(j),pe=Y.projectionMatrix.elements,Ve=fe.projectionMatrix.elements,Xe=pe[14]/(pe[10]-1),I=pe[14]/(pe[10]+1),ee=(pe[9]+1)/pe[5],J=(pe[9]-1)/pe[5],ne=(pe[8]-1)/pe[0],te=(Ve[8]+1)/Ve[0],be=Xe*ne,de=Xe*te,Me=_e/(-ne+te),He=Me*-ne;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(He),q.translateZ(Me),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),pe[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const ze=Xe+Me,P=I+Me,T=be-He,W=de+(_e-He),Z=ee*I/P*ze,ue=J*I/P*ze;q.projectionMatrix.makePerspective(T,W,Z,ue,ze,P),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Y=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),U.near=w.near=b.near=Y,U.far=w.far=b.far=fe,(V!==U.near||H!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),V=U.near,H=U.far),U.layers.mask=q.layers.mask|6,b.layers.mask=U.layers.mask&3,w.layers.mask=U.layers.mask&5;const _e=q.parent,pe=U.cameras;re(U,_e);for(let Ve=0;Ve<pe.length;Ve++)re(pe[Ve],_e);pe.length===2?ae(U,b,w):U.projectionMatrix.copy(b.projectionMatrix),se(q,U,_e)};function se(q,Y,fe){fe===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(q){l=q,p!==null&&(p.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return f[q]};let K=null;function ce(q,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let _e=!1;fe.length!==U.cameras.length&&(U.cameras.length=0,_e=!0);for(let I=0;I<fe.length;I++){const ee=fe[I];let J=null;if(d!==null)J=d.getViewport(ee);else{const te=u.getViewSubImage(p,ee);J=te.viewport,I===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let ne=R[I];ne===void 0&&(ne=new an,ne.layers.enable(I),ne.viewport=new pt,R[I]=ne),ne.matrix.fromArray(ee.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ee.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(J.x,J.y,J.width,J.height),I===0&&(U.matrix.copy(ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),_e===!0&&U.cameras.push(ne)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(fe[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<fe.length;I++){const ee=fe[I].camera;if(ee){let J=f[ee];J||(J=new Ad,f[ee]=J);const ne=u.getCameraImage(ee);J.sourceTexture=ne}}}}for(let fe=0;fe<E.length;fe++){const _e=S[fe],pe=E[fe];_e!==null&&pe!==void 0&&pe.update(_e,Y,c||o)}K&&K(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const we=new zd;we.setAnimationLoop(ce),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}}const Yi=new Ln,pv=new at;function mv(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),x=y.envMap,v=y.envMapRotation;x&&(m.envMap.value=x,Yi.copy(v),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(Yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=s[y.id];v===void 0&&(g(y),v=h(y),s[y.id]=v,y.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(y,E);const S=e.render.frame;r[y.id]!==S&&(p(y),r[y.id]=S)}function h(y){const x=u();y.__bindingPointIndex=x;const v=i.createBuffer(),E=y.__size,S=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const x=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let S=0,A=v.length;S<A;S++){const C=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,w=C.length;b<w;b++){const R=C[b];if(d(R,S,b,E)===!0){const U=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let X=0;X<V.length;X++){const G=V[X],B=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,U+H,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,H),H+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,v,E){const S=y.value,A=x+"_"+v;if(E[A]===void 0)return typeof S=="number"||typeof S=="boolean"?E[A]=S:E[A]=S.clone(),!0;{const C=E[A];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return E[A]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(y){const x=y.uniforms;let v=0;const E=16;for(let A=0,C=x.length;A<C;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,R=b.length;w<R;w++){const U=b[w],V=Array.isArray(U.value)?U.value:[U.value];for(let H=0,X=V.length;H<X;H++){const G=V[H],B=_(G),F=v%E,j=F%B.boundary,ae=F+j;v+=j,ae!==0&&E-ae<B.storage&&(v+=E-ae),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=B.storage}}}const S=v%E;return S>0&&(v+=E-S),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class _v{constructor(e={}){const{canvas:t=up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=ut;let S=0,A=0,C=null,b=-1,w=null;const R=new pt,U=new pt;let V=null;const H=new ke(0);let X=0,G=t.width,B=t.height,F=1,j=null,ae=null;const re=new pt(0,0,G,B),se=new pt(0,0,G,B);let K=!1;const ce=new Bc;let we=!1,q=!1;const Y=new at,fe=new L,_e=new pt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Xe(){return C===null?F:1}let I=n;function ee(M,D){return t.getContext(M,D)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Se,!1),I===null){const D="webgl2";if(I=ee(D,M),I===null)throw ee(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let J,ne,te,be,de,Me,He,ze,P,T,W,Z,ue,$,De,ye,Le,Ne,ge,Te,Ge,Oe,Ee,We;function k(){J=new A1(I),J.init(),Oe=new cv(I,J),ne=new M1(I,J,e,Oe),te=new av(I,J),ne.reversedDepthBuffer&&p&&te.buffers.depth.setReversed(!0),be=new P1(I),de=new j_,Me=new lv(I,J,te,de,ne,Oe,be),He=new S1(v),ze=new T1(v),P=new Fm(I),Ee=new v1(I,P),T=new C1(I,P,be,Ee),W=new L1(I,T,P,be),ge=new D1(I,ne,Me),ye=new y1(de),Z=new Y_(v,He,ze,J,ne,Ee,ye),ue=new mv(v,de),$=new K_,De=new nv(J),Ne=new _1(v,He,ze,te,W,d,l),Le=new rv(v,W,ne),We=new gv(I,be,ne,te),Te=new x1(I,J,be),Ge=new R1(I,J,be),be.programs=Z.programs,v.capabilities=ne,v.extensions=J,v.properties=de,v.renderLists=$,v.shadowMap=Le,v.state=te,v.info=be}k();const oe=new fv(v,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=J.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=J.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(G,B,!1))},this.getSize=function(M){return M.set(G,B)},this.setSize=function(M,D,N=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,B=D,t.width=Math.floor(M*F),t.height=Math.floor(D*F),N===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(G*F,B*F).floor()},this.setDrawingBufferSize=function(M,D,N){G=M,B=D,F=N,t.width=Math.floor(M*N),t.height=Math.floor(D*N),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(re)},this.setViewport=function(M,D,N,z){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,D,N,z),te.viewport(R.copy(re).multiplyScalar(F).round())},this.getScissor=function(M){return M.copy(se)},this.setScissor=function(M,D,N,z){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,D,N,z),te.scissor(U.copy(se).multiplyScalar(F).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(M){te.setScissorTest(K=M)},this.setOpaqueSort=function(M){j=M},this.setTransparentSort=function(M){ae=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,N=!0){let z=0;if(M){let O=!1;if(C!==null){const Q=C.texture.format;O=Q===Uc||Q===Ic||Q===Lc}if(O){const Q=C.texture.type,ie=Q===Pn||Q===is||Q===Rr||Q===qs||Q===Rc||Q===Pc,ve=Ne.getClearColor(),me=Ne.getClearAlpha(),Ae=ve.r,Re=ve.g,Ie=ve.b;ie?(g[0]=Ae,g[1]=Re,g[2]=Ie,g[3]=me,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ae,_[1]=Re,_[2]=Ie,_[3]=me,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),N&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ne.dispose(),$.dispose(),De.dispose(),de.dispose(),He.dispose(),ze.dispose(),W.dispose(),Ee.dispose(),We.dispose(),Z.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",dn),oe.removeEventListener("sessionend",or),fn.stop()};function xe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=be.autoReset,D=Le.enabled,N=Le.autoUpdate,z=Le.needsUpdate,O=Le.type;k(),be.autoReset=M,Le.enabled=D,Le.autoUpdate=N,Le.needsUpdate=z,Le.type=O}function Se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function le(M){const D=M.target;D.removeEventListener("dispose",le),Pe(D)}function Pe(M){Ye(M),de.remove(M)}function Ye(M){const D=de.get(M).programs;D!==void 0&&(D.forEach(function(N){Z.releaseProgram(N)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,N,z,O,Q){D===null&&(D=pe);const ie=O.isMesh&&O.matrixWorld.determinant()<0,ve=jr(M,D,N,z,O);te.setMaterial(z,ie);let me=N.index,Ae=1;if(z.wireframe===!0){if(me=T.getWireframeAttribute(N),me===void 0)return;Ae=2}const Re=N.drawRange,Ie=N.attributes.position;let je=Re.start*Ae,it=(Re.start+Re.count)*Ae;Q!==null&&(je=Math.max(je,Q.start*Ae),it=Math.min(it,(Q.start+Q.count)*Ae)),me!==null?(je=Math.max(je,0),it=Math.min(it,me.count)):Ie!=null&&(je=Math.max(je,0),it=Math.min(it,Ie.count));const dt=it-je;if(dt<0||dt===1/0)return;Ee.setup(O,z,ve,N,me);let ct,st=Te;if(me!==null&&(ct=P.get(me),st=Ge,st.setIndex(ct)),O.isMesh)z.wireframe===!0?(te.setLineWidth(z.wireframeLinewidth*Xe()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(O.isLine){let Be=z.linewidth;Be===void 0&&(Be=1),te.setLineWidth(Be*Xe()),O.isLineSegments?st.setMode(I.LINES):O.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else O.isPoints?st.setMode(I.POINTS):O.isSprite&&st.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Lr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Be=O._multiDrawStarts,Ze=O._multiDrawCounts,Je=O._multiDrawCount,bt=me?P.get(me).bytesPerElement:1,yn=de.get(z).currentProgram.getUniforms();for(let vt=0;vt<Je;vt++)yn.setValue(I,"_gl_DrawID",vt),st.render(Be[vt]/bt,Ze[vt])}else if(O.isInstancedMesh)st.renderInstances(je,dt,O.count);else if(N.isInstancedBufferGeometry){const Be=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Ze=Math.min(N.instanceCount,Be);st.renderInstances(je,dt,Ze)}else st.render(je,dt)};function lt(M,D,N){M.transparent===!0&&M.side===yt&&M.forceSinglePass===!1?(M.side=Qt,M.needsUpdate=!0,ki(M,D,N),M.side=Ti,M.needsUpdate=!0,ki(M,D,N),M.side=yt):ki(M,D,N)}this.compile=function(M,D,N=null){N===null&&(N=M),f=De.get(N),f.init(D),x.push(f),N.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),M!==N&&M.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const z=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const Q=O.material;if(Q)if(Array.isArray(Q))for(let ie=0;ie<Q.length;ie++){const ve=Q[ie];lt(ve,N,O),z.add(ve)}else lt(Q,N,O),z.add(Q)}),f=x.pop(),z},this.compileAsync=function(M,D,N=null){const z=this.compile(M,D,N);return new Promise(O=>{function Q(){if(z.forEach(function(ie){de.get(ie).currentProgram.isReady()&&z.delete(ie)}),z.size===0){O(M);return}setTimeout(Q,10)}J.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ot=null;function mt(M){ot&&ot(M)}function dn(){fn.stop()}function or(){fn.start()}const fn=new zd;fn.setAnimationLoop(mt),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(M){ot=M,oe.setAnimationLoop(M),M===null?fn.stop():fn.start()},oe.addEventListener("sessionstart",dn),oe.addEventListener("sessionend",or),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(D),D=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,C),f=De.get(M,x.length),f.init(D),x.push(f),Y.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ce.setFromProjectionMatrix(Y,kn,D.reversedDepth),q=this.localClippingEnabled,we=ye.init(this.clippingPlanes,q),m=$.get(M,y.length),m.init(),y.push(m),oe.enabled===!0&&oe.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&xn(Q,D,-1/0,v.sortObjects)}xn(M,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(j,ae),Ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ve&&Ne.addToRenderList(m,M),this.info.render.frame++,we===!0&&ye.beginShadows();const N=f.state.shadowsArray;Le.render(N,M,D),we===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,O=m.transmissive;if(f.setupLights(),D.isArrayCamera){const Q=D.cameras;if(O.length>0)for(let ie=0,ve=Q.length;ie<ve;ie++){const me=Q[ie];Bi(z,O,M,me)}Ve&&Ne.render(M);for(let ie=0,ve=Q.length;ie<ve;ie++){const me=Q[ie];di(m,M,me,me.viewport)}}else O.length>0&&Bi(z,O,M,D),Ve&&Ne.render(M),di(m,M,D);C!==null&&A===0&&(Me.updateMultisampleRenderTarget(C),Me.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(v,M,D),Ee.resetDefaultState(),b=-1,w=null,x.pop(),x.length>0?(f=x[x.length-1],we===!0&&ye.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function xn(M,D,N,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ce.intersectsSprite(M)){z&&_e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Y);const ie=W.update(M),ve=M.material;ve.visible&&m.push(M,ie,ve,N,_e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ce.intersectsObject(M))){const ie=W.update(M),ve=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),_e.copy(M.boundingSphere.center)):(ie.boundingSphere===null&&ie.computeBoundingSphere(),_e.copy(ie.boundingSphere.center)),_e.applyMatrix4(M.matrixWorld).applyMatrix4(Y)),Array.isArray(ve)){const me=ie.groups;for(let Ae=0,Re=me.length;Ae<Re;Ae++){const Ie=me[Ae],je=ve[Ie.materialIndex];je&&je.visible&&m.push(M,ie,je,N,_e.z,Ie)}}else ve.visible&&m.push(M,ie,ve,N,_e.z,null)}}const Q=M.children;for(let ie=0,ve=Q.length;ie<ve;ie++)xn(Q[ie],D,N,z)}function di(M,D,N,z){const O=M.opaque,Q=M.transmissive,ie=M.transparent;f.setupLightsView(N),we===!0&&ye.setGlobalState(v.clippingPlanes,N),z&&te.viewport(R.copy(z)),O.length>0&&gs(O,D,N),Q.length>0&&gs(Q,D,N),ie.length>0&&gs(ie,D,N),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Bi(M,D,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new qn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Ai:Pn,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[z.id],ie=z.viewport||R;Q.setSize(ie.z*v.transmissionResolutionScale,ie.w*v.transmissionResolutionScale);const ve=v.getRenderTarget(),me=v.getActiveCubeFace(),Ae=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&Ne.render(N);const Re=v.toneMapping;v.toneMapping=Ei;const Ie=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),we===!0&&ye.setGlobalState(v.clippingPlanes,z),gs(M,N,z),Me.updateMultisampleRenderTarget(Q),Me.updateRenderTargetMipmap(Q),J.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,dt=D.length;it<dt;it++){const ct=D[it],st=ct.object,Be=ct.geometry,Ze=ct.material,Je=ct.group;if(Ze.side===yt&&st.layers.test(z.layers)){const bt=Ze.side;Ze.side=Qt,Ze.needsUpdate=!0,ar(st,N,z,Be,Ze,Je),Ze.side=bt,Ze.needsUpdate=!0,je=!0}}je===!0&&(Me.updateMultisampleRenderTarget(Q),Me.updateRenderTargetMipmap(Q))}v.setRenderTarget(ve,me,Ae),v.setClearColor(H,X),Ie!==void 0&&(z.viewport=Ie),v.toneMapping=Re}function gs(M,D,N){const z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,Q=M.length;O<Q;O++){const ie=M[O],ve=ie.object,me=ie.geometry,Ae=ie.group;let Re=ie.material;Re.allowOverride===!0&&z!==null&&(Re=z),ve.layers.test(N.layers)&&ar(ve,D,N,me,Re,Ae)}}function ar(M,D,N,z,O,Q){M.onBeforeRender(v,D,N,z,O,Q),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(v,D,N,z,M,Q),O.transparent===!0&&O.side===yt&&O.forceSinglePass===!1?(O.side=Qt,O.needsUpdate=!0,v.renderBufferDirect(N,D,z,O,M,Q),O.side=Ti,O.needsUpdate=!0,v.renderBufferDirect(N,D,z,O,M,Q),O.side=yt):v.renderBufferDirect(N,D,z,O,M,Q),M.onAfterRender(v,D,N,z,O,Q)}function ki(M,D,N){D.isScene!==!0&&(D=pe);const z=de.get(M),O=f.state.lights,Q=f.state.shadowsArray,ie=O.state.version,ve=Z.getParameters(M,O.state,Q,D,N),me=Z.getProgramCacheKey(ve);let Ae=z.programs;z.environment=M.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(M.isMeshStandardMaterial?ze:He).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",le),Ae=new Map,z.programs=Ae);let Re=Ae.get(me);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===ie)return Zn(M,ve),Re}else ve.uniforms=Z.getUniforms(M),M.onBeforeCompile(ve,v),Re=Z.acquireProgram(ve,me),Ae.set(me,Re),z.uniforms=ve.uniforms;const Ie=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=ye.uniform),Zn(M,ve),z.needsLights=xa(M),z.lightsStateVersion=ie,z.needsLights&&(Ie.ambientLightColor.value=O.state.ambient,Ie.lightProbe.value=O.state.probe,Ie.directionalLights.value=O.state.directional,Ie.directionalLightShadows.value=O.state.directionalShadow,Ie.spotLights.value=O.state.spot,Ie.spotLightShadows.value=O.state.spotShadow,Ie.rectAreaLights.value=O.state.rectArea,Ie.ltc_1.value=O.state.rectAreaLTC1,Ie.ltc_2.value=O.state.rectAreaLTC2,Ie.pointLights.value=O.state.point,Ie.pointLightShadows.value=O.state.pointShadow,Ie.hemisphereLights.value=O.state.hemi,Ie.directionalShadowMap.value=O.state.directionalShadowMap,Ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ie.spotShadowMap.value=O.state.spotShadowMap,Ie.spotLightMatrix.value=O.state.spotLightMatrix,Ie.spotLightMap.value=O.state.spotLightMap,Ie.pointShadowMap.value=O.state.pointShadowMap,Ie.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function Mn(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Vo.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Zn(M,D){const N=de.get(M);N.outputColorSpace=D.outputColorSpace,N.batching=D.batching,N.batchingColor=D.batchingColor,N.instancing=D.instancing,N.instancingColor=D.instancingColor,N.instancingMorph=D.instancingMorph,N.skinning=D.skinning,N.morphTargets=D.morphTargets,N.morphNormals=D.morphNormals,N.morphColors=D.morphColors,N.morphTargetsCount=D.morphTargetsCount,N.numClippingPlanes=D.numClippingPlanes,N.numIntersection=D.numClipIntersection,N.vertexAlphas=D.vertexAlphas,N.vertexTangents=D.vertexTangents,N.toneMapping=D.toneMapping}function jr(M,D,N,z,O){D.isScene!==!0&&(D=pe),Me.resetTextureUnits();const Q=D.fog,ie=z.isMeshStandardMaterial?D.environment:null,ve=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:js,me=(z.isMeshStandardMaterial?ze:He).get(z.envMap||ie),Ae=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Re=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!N.morphAttributes.position,je=!!N.morphAttributes.normal,it=!!N.morphAttributes.color;let dt=Ei;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(dt=v.toneMapping);const ct=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,st=ct!==void 0?ct.length:0,Be=de.get(z),Ze=f.state.lights;if(we===!0&&(q===!0||M!==w)){const Kt=M===w&&z.id===b;ye.setState(z,M,Kt)}let Je=!1;z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Ze.state.version||Be.outputColorSpace!==ve||O.isBatchedMesh&&Be.batching===!1||!O.isBatchedMesh&&Be.batching===!0||O.isBatchedMesh&&Be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Be.instancing===!1||!O.isInstancedMesh&&Be.instancing===!0||O.isSkinnedMesh&&Be.skinning===!1||!O.isSkinnedMesh&&Be.skinning===!0||O.isInstancedMesh&&Be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Be.instancingMorph===!1&&O.morphTexture!==null||Be.envMap!==me||z.fog===!0&&Be.fog!==Q||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ye.numPlanes||Be.numIntersection!==ye.numIntersection)||Be.vertexAlphas!==Ae||Be.vertexTangents!==Re||Be.morphTargets!==Ie||Be.morphNormals!==je||Be.morphColors!==it||Be.toneMapping!==dt||Be.morphTargetsCount!==st)&&(Je=!0):(Je=!0,Be.__version=z.version);let bt=Be.currentProgram;Je===!0&&(bt=ki(z,D,O));let yn=!1,vt=!1,cr=!1;const Et=bt.getUniforms(),pn=Be.uniforms;if(te.useProgram(bt.program)&&(yn=!0,vt=!0,cr=!0),z.id!==b&&(b=z.id,vt=!0),yn||w!==M){te.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Et.setValue(I,"projectionMatrix",M.projectionMatrix),Et.setValue(I,"viewMatrix",M.matrixWorldInverse);const rn=Et.map.cameraPosition;rn!==void 0&&rn.setValue(I,fe.setFromMatrixPosition(M.matrixWorld)),ne.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Et.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),w!==M&&(w=M,vt=!0,cr=!0)}if(O.isSkinnedMesh){Et.setOptional(I,O,"bindMatrix"),Et.setOptional(I,O,"bindMatrixInverse");const Kt=O.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Et.setValue(I,"boneTexture",Kt.boneTexture,Me))}O.isBatchedMesh&&(Et.setOptional(I,O,"batchingTexture"),Et.setValue(I,"batchingTexture",O._matricesTexture,Me),Et.setOptional(I,O,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",O._indirectTexture,Me),Et.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",O._colorsTexture,Me));const mn=N.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ge.update(O,N,bt),(vt||Be.receiveShadow!==O.receiveShadow)&&(Be.receiveShadow=O.receiveShadow,Et.setValue(I,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pn.envMap.value=me,pn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(pn.envMapIntensity.value=D.environmentIntensity),vt&&(Et.setValue(I,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&lr(pn,cr),Q&&z.fog===!0&&ue.refreshFogUniforms(pn,Q),ue.refreshMaterialUniforms(pn,z,F,B,f.state.transmissionRenderTarget[M.id]),Vo.upload(I,Mn(Be),pn,Me)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vo.upload(I,Mn(Be),pn,Me),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Et.setValue(I,"center",O.center),Et.setValue(I,"modelViewMatrix",O.modelViewMatrix),Et.setValue(I,"normalMatrix",O.normalMatrix),Et.setValue(I,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Kt=z.uniformsGroups;for(let rn=0,ya=Kt.length;rn<ya;rn++){const Hi=Kt[rn];We.update(Hi,bt),We.bind(Hi,bt)}}return bt}function lr(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function xa(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,D,N){const z=de.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),de.get(M.texture).__webglTexture=D,de.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:N,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){const N=de.get(M);N.__webglFramebuffer=D,N.__useDefaultFramebuffer=D===void 0};const Zr=I.createFramebuffer();this.setRenderTarget=function(M,D=0,N=0){C=M,S=D,A=N;let z=!0,O=null,Q=!1,ie=!1;if(M){const me=de.get(M);if(me.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(me.__webglFramebuffer===void 0)Me.setupRenderTarget(M);else if(me.__hasExternalTextures)Me.rebindTextures(M,de.get(M.texture).__webglTexture,de.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ie=M.depthTexture;if(me.__boundDepthTexture!==Ie){if(Ie!==null&&de.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ie=!0);const Re=de.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?O=Re[D][N]:O=Re[D],Q=!0):M.samples>0&&Me.useMultisampledRTT(M)===!1?O=de.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[N]:O=Re,R.copy(M.viewport),U.copy(M.scissor),V=M.scissorTest}else R.copy(re).multiplyScalar(F).floor(),U.copy(se).multiplyScalar(F).floor(),V=K;if(N!==0&&(O=Zr),te.bindFramebuffer(I.FRAMEBUFFER,O)&&z&&te.drawBuffers(M,O),te.viewport(R),te.scissor(U),te.setScissorTest(V),Q){const me=de.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,N)}else if(ie){const me=D;for(let Ae=0;Ae<M.textures.length;Ae++){const Re=de.get(M.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,N,me)}}else if(M!==null&&N!==0){const me=de.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,N)}b=-1},this.readRenderTargetPixels=function(M,D,N,z,O,Q,ie,ve=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=de.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ie!==void 0&&(me=me[ie]),me){te.bindFramebuffer(I.FRAMEBUFFER,me);try{const Ae=M.textures[ve],Re=Ae.format,Ie=Ae.type;if(!ne.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&N>=0&&N<=M.height-O&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),I.readPixels(D,N,z,O,Oe.convert(Re),Oe.convert(Ie),Q))}finally{const Ae=C!==null?de.get(C).__webglFramebuffer:null;te.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,D,N,z,O,Q,ie,ve=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=de.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ie!==void 0&&(me=me[ie]),me)if(D>=0&&D<=M.width-z&&N>=0&&N<=M.height-O){te.bindFramebuffer(I.FRAMEBUFFER,me);const Ae=M.textures[ve],Re=Ae.format,Ie=Ae.type;if(!ne.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ve),I.readPixels(D,N,z,O,Oe.convert(Re),Oe.convert(Ie),0);const it=C!==null?de.get(C).__webglFramebuffer:null;te.bindFramebuffer(I.FRAMEBUFFER,it);const dt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await dp(I,dt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,je),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(je),I.deleteSync(dt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,N=0){const z=Math.pow(2,-N),O=Math.floor(M.image.width*z),Q=Math.floor(M.image.height*z),ie=D!==null?D.x:0,ve=D!==null?D.y:0;Me.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,N,0,0,ie,ve,O,Q),te.unbindTexture()};const Kr=I.createFramebuffer(),Ma=I.createFramebuffer();this.copyTextureToTexture=function(M,D,N=null,z=null,O=0,Q=null){Q===null&&(O!==0?(Lr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=O,O=0):Q=0);let ie,ve,me,Ae,Re,Ie,je,it,dt;const ct=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(N!==null)ie=N.max.x-N.min.x,ve=N.max.y-N.min.y,me=N.isBox3?N.max.z-N.min.z:1,Ae=N.min.x,Re=N.min.y,Ie=N.isBox3?N.min.z:0;else{const mn=Math.pow(2,-O);ie=Math.floor(ct.width*mn),ve=Math.floor(ct.height*mn),M.isDataArrayTexture?me=ct.depth:M.isData3DTexture?me=Math.floor(ct.depth*mn):me=1,Ae=0,Re=0,Ie=0}z!==null?(je=z.x,it=z.y,dt=z.z):(je=0,it=0,dt=0);const st=Oe.convert(D.format),Be=Oe.convert(D.type);let Ze;D.isData3DTexture?(Me.setTexture3D(D,0),Ze=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Me.setTexture2DArray(D,0),Ze=I.TEXTURE_2D_ARRAY):(Me.setTexture2D(D,0),Ze=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Je=I.getParameter(I.UNPACK_ROW_LENGTH),bt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),yn=I.getParameter(I.UNPACK_SKIP_PIXELS),vt=I.getParameter(I.UNPACK_SKIP_ROWS),cr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie);const Et=M.isDataArrayTexture||M.isData3DTexture,pn=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){const mn=de.get(M),Kt=de.get(D),rn=de.get(mn.__renderTarget),ya=de.get(Kt.__renderTarget);te.bindFramebuffer(I.READ_FRAMEBUFFER,rn.__webglFramebuffer),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,ya.__webglFramebuffer);for(let Hi=0;Hi<me;Hi++)Et&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(M).__webglTexture,O,Ie+Hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,de.get(D).__webglTexture,Q,dt+Hi)),I.blitFramebuffer(Ae,Re,ie,ve,je,it,ie,ve,I.DEPTH_BUFFER_BIT,I.NEAREST);te.bindFramebuffer(I.READ_FRAMEBUFFER,null),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||de.has(M)){const mn=de.get(M),Kt=de.get(D);te.bindFramebuffer(I.READ_FRAMEBUFFER,Kr),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ma);for(let rn=0;rn<me;rn++)Et?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,O,Ie+rn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,O),pn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kt.__webglTexture,Q,dt+rn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kt.__webglTexture,Q),O!==0?I.blitFramebuffer(Ae,Re,ie,ve,je,it,ie,ve,I.COLOR_BUFFER_BIT,I.NEAREST):pn?I.copyTexSubImage3D(Ze,Q,je,it,dt+rn,Ae,Re,ie,ve):I.copyTexSubImage2D(Ze,Q,je,it,Ae,Re,ie,ve);te.bindFramebuffer(I.READ_FRAMEBUFFER,null),te.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pn?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Ze,Q,je,it,dt,ie,ve,me,st,Be,ct.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Ze,Q,je,it,dt,ie,ve,me,st,ct.data):I.texSubImage3D(Ze,Q,je,it,dt,ie,ve,me,st,Be,ct):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,je,it,ie,ve,st,Be,ct.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,je,it,ct.width,ct.height,st,ct.data):I.texSubImage2D(I.TEXTURE_2D,Q,je,it,ie,ve,st,Be,ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,Je),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,yn),I.pixelStorei(I.UNPACK_SKIP_ROWS,vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,cr),Q===0&&D.generateMipmaps&&I.generateMipmap(Ze),te.unbindTexture()},this.initRenderTarget=function(M){de.get(M).__webglFramebuffer===void 0&&Me.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Me.setTextureCube(M,0):M.isData3DTexture?Me.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Me.setTexture2DArray(M,0):Me.setTexture2D(M,0),te.unbindTexture()},this.resetState=function(){S=0,A=0,C=null,te.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function Gd(i){const{width:e,height:t}=i.canvas;i.fillStyle="#081c1840";for(let r=1;r<t;r+=4)i.fillRect(0,r,e,1);const n=i.createRadialGradient(e*.47,t*.43,t*.28,e*.49,t*.48,e*.61);n.addColorStop(0,"#06231b00"),n.addColorStop(1,"#03150fc4"),i.fillStyle=n,i.fillRect(0,0,e,t);const s=i.createLinearGradient(0,0,e*.5,t*.58);s.addColorStop(0,"#e3f6d33d"),s.addColorStop(.38,"#cce8cd09"),s.addColorStop(1,"#d5f3cf00"),i.fillStyle=s,i.beginPath(),i.moveTo(0,0),i.lineTo(e*.49,0),i.lineTo(e*.12,t),i.lineTo(0,t),i.fill()}function vv(){const i=document.createElement("canvas");i.width=512,i.height=448;const e=i.getContext("2d"),t=new Ot(i);t.colorSpace=ut;function n(s,r){const o=(a,l,c,h,u)=>{e.fillStyle="#3b6555",e.fillRect(a,l,c,h),e.fillStyle="#ebebc7",e.fillRect(a+3,l+3,c-6,h-6),e.fillStyle=u,e.fillRect(a+6,l+6,c-11,h-11)};e.fillStyle="#78a387",e.fillRect(0,0,512,448),o(15,17,482,35,"#c3ceb1"),e.fillStyle="#345341",e.font="18px monospace",e.fillText("DOISH OS",31,41);for(let a=0;a<3;a++){const l=74+a*73;o(26,l,30,25,"#e2dfb6"),e.fillStyle="#dce2bf",e.font="12px monospace",e.fillText(["HOME","MUSIC","FILES"][a],22,l+41)}o(128,64,350,291,"#e4e1bf"),o(136,72,335,31,s?"#8eb98c":"#a9c2a1"),e.fillStyle="#314b3c",e.font='17px "Microsoft YaHei",sans-serif',e.fillText("光盘资料库",147,94),e.fillStyle="#6c775d",e.font="12px monospace",e.fillText("FILE  EDIT  VIEW",149,125);for(let a=0;a<Math.min(4,si.length);a++){const l=160+a*75;o(l,157,30,26,"#aeb88e"),e.fillStyle="#695d40",e.fillRect(l+7,166,14,4),e.fillRect(l+8,174,12,3),e.font="10px monospace",e.fillText(["DISC 1","DISC 2","DISC 3","DISC 4"][a],l-3,202)}e.fillStyle="#a7aa86",e.fillRect(147,319,310,20),si.length||(e.fillStyle="#52634e",e.font='19px "Microsoft YaHei",sans-serif',e.fillText("光盘集暂为空",225,228)),s&&si.length&&(e.fillStyle="#3d5944",e.font='13px "Microsoft YaHei",sans-serif',e.fillText("选择一张光盘开始",154,334)),o(13,396,486,40,"#bdcbb0");for(let a=0;a<14;a++)o(25+a*26,410,15,13,a%3===0?"#829a70":"#b6ac7f");e.fillStyle="#4e664e",e.fillRect(419,410,6+Math.sin(r)*2,11),e.font="17px monospace",e.fillText("10:09",435,422),Gd(e),t.needsUpdate=!0}return n(!1,0),{map:t,draw:n}}function wu(i,e,t){const n=document.createElement("canvas");n.width=n.height=32;const s=n.getContext("2d"),r=s.createRadialGradient(16,16,0,16,16,16);return r.addColorStop(0,"#ffffff"),r.addColorStop(.25,"#ffffffb0"),r.addColorStop(1,"#ffffff00"),s.fillStyle=r,s.fillRect(0,0,32,32),new Td({map:new Ot(n),color:i,opacity:e,size:t,transparent:!0,depthWrite:!1,toneMapped:!1})}function xv(i,e,t,n){const s=new Float32Array(180),r=new St;r.setAttribute("position",new ln(s,3));const o=new Vh(r,wu("#ffe2a9",.45,.033));o.frustumCulled=!1,o.raycast=()=>{},i.add(o);const a=new St,l=new Float32Array(33);a.setAttribute("position",new ln(l,3));const c=new Vh(a,wu("#fff3db",.19,.075));c.frustumCulled=!1,c.raycast=()=>{},e.add(c);const h=new nt;h.position.set(.16,1.25,.12),t.add(h);for(let y=0;y<5;y++){const x=new Fe(new Hc(.011,.11,3,8),new Xt({color:"#ffe0a2",opacity:.55,transparent:!0,depthWrite:!1}));x.position.x=(y-2)*.055,x.raycast=()=>{},h.add(x)}const u=new St;u.setAttribute("position",new Ke([-.35,.71,-1.39,1.96,2.31,-1.39,5.643,4.595,.74,4.257,3.635,.74],3)),u.setAttribute("uv",new Ke([0,0,0,1,1,1,1,0],2)),u.setIndex([0,1,2,0,2,3]);const p=new Gt({transparent:!0,depthWrite:!1,side:yt,blending:yl,uniforms:{strength:{value:.08}},vertexShader:"varying vec2 tex; void main(){tex=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 tex; uniform float strength; void main(){float edge=sin(3.14159*tex.y)*sin(3.14159*tex.x);gl_FragColor=vec4(1.,.72,.39,edge*edge*strength);}"}),d=new Fe(u,p);d.raycast=()=>{},d.userData.skipContactShadows=!0,i.add(d);const g=document.createElement("canvas");g.width=g.height=128;const _=g.getContext("2d"),m=_.createImageData(128,128);let f=4229;for(let y=0;y<m.data.length;y+=4)f=f*16807%2147483647,m.data[y]=m.data[y+1]=m.data[y+2]=f%256,m.data[y+3]=255;return _.putImageData(m,0,0),n.style.setProperty("--room-grain",`url(${g.toDataURL()})`),(y,x,v,E)=>{p.uniforms.strength.value=.112*x,d.visible=x>.02,o.visible=x>.06,o.material.opacity=.41*x;for(let S=0;S<60;S++){const A=S*.6180339%1,C=S*.317037%1-.5,b=Math.sin(y*.39+S*2)*.073;s[S*3]=-.2+4.75*A+C*.63+b,s[S*3+1]=.9+3.02*A+C*1.11+Math.sin(y*.29+S)*.13,s[S*3+2]=-1.12+1.97*A+(S*.428%1-.5)*.8}r.attributes.position.needsUpdate=!0,c.visible=E;for(let S=0;S<11;S++){const A=(S/11+y*.29)%1;l[S*3]=Math.sin(A*7+y*.7)*A*.073,l[S*3+1]=.215+A*.34,l[S*3+2]=Math.cos(A*5)*.052*A}a.attributes.position.needsUpdate=!0,h.visible=v;for(let S=0;S<h.children.length;S++)h.children[S].scale.y=.35+(.5+.5*Math.sin(y*4.8+S*.94))*.72}}const Tu=[[48,55,58,62],[45,52,55,59],[43,50,53,57],[46,53,57,60]];function Mv(){let i,e,t,n=0,s=0,r=!1;const o=.54;function a(u,p,d,g,_){const m=i.createOscillator(),f=i.createGain();m.type=_,m.frequency.value=440*2**((u-69)/12),f.gain.setValueAtTime(1e-4,p),f.gain.exponentialRampToValueAtTime(g,p+.041),f.gain.exponentialRampToValueAtTime(1e-4,p+d),m.connect(f).connect(e),m.start(p),m.stop(p+d+.02),m.onended=()=>{m.disconnect(),f.disconnect()}}function l(){for(s<i.currentTime-.25&&(s=i.currentTime+.035);s<i.currentTime+.16;){const u=Tu[Math.floor(n/8)%Tu.length],p=n%8;(p===0||p===4)&&a(u[0]-12,s,.9,.15,"sine"),(p===0||p===3)&&u.slice(1).forEach((d,g)=>a(d,s+g*.032,1.46,.069,"triangle")),(p===2||p===5||p===7)&&a(u[1+p%3]+12,s,.62,.057,"sine"),s+=o/2,n++}}let c=.16;function h(u){if(r=u,!u){clearInterval(t),t=null,e&&e.gain.setTargetAtTime(0,i.currentTime,.055);return}const p=window.AudioContext||window.webkitAudioContext;p&&(i||(i=new p,e=i.createGain(),e.gain.value=0,e.connect(i.destination)),i.resume().then(()=>{!r||t||(s=i.currentTime+.035,n=0,e.gain.setTargetAtTime(c,i.currentTime,.09),l(),t=setInterval(l,80))}).catch(()=>{}))}return{play:h,setVolume(u){c=.16*u/.7,r&&e&&e.gain.setTargetAtTime(c,i.currentTime,.055)}}}function yv(i){return()=>(i=i*16807%2147483647,(i-1)/2147483646)}function Wd(i=!1){const e=document.createElement("canvas");e.width=1024,e.height=i?1024:512;const t=e.getContext("2d"),n=yv(i?7304:1509),s=i?128:512;for(let o=0,a=0;o<e.height;o+=s,a++){const l=n(),c=t.createLinearGradient(0,o,0,o+s);c.addColorStop(0,`hsl(30 42% ${55+l*6}%)`),c.addColorStop(.49,`hsl(32 43% ${58+l*6}%)`),c.addColorStop(1,`hsl(28 39% ${54+l*6}%)`),t.fillStyle=c,t.fillRect(0,o,1024,s),t.save(),t.beginPath(),t.rect(0,o,1024,s),t.clip();const h=175+n()*640,u=o+s*(.3+n()*.4),p=n()*6.28;for(let d=0;d<s*2.5;d++){const g=o+n()*s,_=g-u,m=1.5+n()*2.5,f=d%17===0;t.strokeStyle=d%4===0?`rgba(253,218,155,${.05+n()*.16})`:`rgba(76,41,18,${.045+n()*(f?.28:.16)})`,t.lineWidth=f?1.6:.23+n()*.66,t.beginPath();for(let y=0;y<=1024;y+=8){const x=Math.exp(-(((y-h)/102)**2+(_/25)**2)),v=Math.sin(y*.008+p+g*.022)*m+Math.sin(y*.018+g*.045)*1.2,E=g+v+Math.tanh(_*.3)*x*13;y===0?t.moveTo(y,E):t.lineTo(y,E)}t.stroke()}for(let d=0;d<s*7;d++){const g=n()*1024,_=o+n()*s;t.fillStyle=d%3===0?"#edd1a051":"#52342238",t.fillRect(g,_,1+n()*8,.35+n()*.65)}if(t.restore(),i){t.fillStyle="#715031b0",t.fillRect(0,o,1024,2),t.fillStyle="#eaca9d8a",t.fillRect(0,o+2,1024,1);const d=165+a*293%720;t.fillStyle="#5c3d2485",t.fillRect(d,o,2,s),t.fillStyle="#f4d7a88a",t.fillRect(d+2,o,1,s)}}const r=new Ot(e);return r.colorSpace=ut,r.anisotropy=8,i&&(r.wrapS=r.wrapT=Wn,r.repeat.set(4,9)),r}function Sv(){const i=document.createElement("canvas");i.width=i.height=512;const e=new Ot(i);return Xd(e,0),e}function Xd(i,e){const t=i.image.getContext("2d");t.save(),t.fillStyle="#191919",t.fillRect(0,0,512,512),t.translate(Math.sin(e*.42)*3,Math.sin(e*.31)*2),t.filter="blur(8px)",t.fillStyle="#ffffff";const n=s=>(512-s)*.37;for(const[s,r]of[[69,190],[218,327],[355,458]])for(const[o,a]of[[26,146],[174,299]])t.beginPath(),t.moveTo(o+n(s),s),t.lineTo(a+n(s),s),t.lineTo(a+n(r),r),t.lineTo(o+n(r),r),t.closePath(),t.fill();t.filter="blur(9px)";for(let s=0;s<21;s++){const r=365+s*97%145,o=63+s*113%364;t.fillStyle=s%3===0?"#35352d55":"#51493744",t.beginPath(),t.ellipse(r+Math.sin(e*.61+s)*6,o+Math.sin(e*.47+s)*4,11+s%7,5+s%6,-.56,0,Math.PI*2),t.fill()}t.restore(),i.needsUpdate=!0}function hs(i,{x:e,y:t,z:n,width:s,depth:r,radius:o,spread:a,opacity:l}){const h=document.createElement("canvas");h.width=h.height=96;const u=h.getContext("2d"),p=u.createImageData(96,96),d=s+a*2,g=r+a*2;for(let y=0;y<96;y++)for(let x=0;x<96;x++){const v=Math.abs((x/95-.5)*d)-s/2+o,E=Math.abs((y/95-.5)*g)-r/2+o,S=Math.hypot(Math.max(v,0),Math.max(E,0))+Math.min(Math.max(v,E),0)-o,A=Math.min(1,Math.max(0,S/a)),C=(y*96+x)*4;p.data[C]=255,p.data[C+1]=255,p.data[C+2]=255,p.data[C+3]=Math.round(255*(1-A)**3)}u.putImageData(p,0,0);const _=new Ot(h),m=new Xt({color:"#3e372a",map:_,opacity:l,transparent:!0,depthWrite:!1}),f=new Fe(new Dt(d,g),m);f.rotation.x=-Math.PI/2,f.position.set(e,t,n),f.raycast=()=>{},i.add(f)}function bv({root:i,box:e,cylinder:t,lineTube:n,mat:s,wood:r,silver:o,greenDark:a,cream:l}){const c=new nt;c.position.set(-3.48,.12,-.83),c.jewelCases=[],i.add(c),e(1.52,.1,.81,0,.09,0,a,.049,c);for(const R of[-.55,.55])for(const U of[-.24,.24])t(.073,.052,R,.026,U,o,c);hs(i,{x:c.position.x,y:.121,z:c.position.z,width:1.5,depth:.79,radius:.17,spread:.18,opacity:.43});const h=.96,u=(R,U=h)=>[Math.sin(R)*U,.87+Math.cos(R)*U,-.07],p=Array.from({length:15},(R,U)=>u(-.69+U*.103)),d=[[-.48,.14,-.07],[-.63,.47,-.07],[-.69,.86,-.07],[-.68,1.2,-.07],...p];n(d,.106,r,c);const g=new ss(d.slice(0,7).map(R=>new L(...R))),_=[];for(let R=0;R<=128;R++){const U=R/128,V=U*Math.PI*11,H=g.getPoint(U),X=g.getTangent(U);H.addScaledVector(new L(X.y,-X.x,0),.116*Math.cos(V)),H.z+=.116*Math.sin(V),_.push(H.toArray())}const m=new ss(_.map(R=>new L(...R))),f=new Fe(new Hr(m,160,.013,8,!1),o);f.castShadow=!0,c.add(f);const x=["#bca387","#6c7c66","#ac7359","#8a98a2","#d2ae64","#ddd2b8"].map(R=>s(R,.65)),v=new un({color:"#eeeae0",transparent:!0,opacity:.32,roughness:.16,depthWrite:!1});for(let R=0;R<13;R++){const U=-.64+R*.106,V=new nt;V.position.set(...u(U)),V.rotation.z=-U,c.add(V),n([[-.027,.025,-.23],[-.027,-.012,-.24],[-.027,-.03,0],[-.027,-.013,.24],[-.027,.041,.245]],.012,o,V);const H=new nt;V.add(H),c.jewelCases.push(H),e(.044,.353,.44,0,.185,0,v,.005,H).castShadow=!1,e(.037,.335,.409,0,.187,0,x[R%x.length],.003,H),e(.043,.018,.438,0,.36,0,l,.003,H)}const E=new Yn,S=Array.from({length:15},(R,U)=>u(-.69+U*.103,1.33)),A=Array.from({length:15},(R,U)=>u(.752-U*.103,.9)),[C,...b]=[...S,...A];E.moveTo(C[0],C[1]);for(const[R,U]of b)E.lineTo(R,U);const w=new Fe(new wi(E),new Xt({visible:!1,side:yt}));w.position.z=.12,c.add(w),e(.84,.065,.67,.27,.19,.025,a,.027,c),e(.78,.36,.056,.28,.32,-.29,a,.025,c);for(const R of[-.12,.68])e(.07,.48,.68,R,.4,.025,a,.035,c);e(.85,.14,.055,.28,.25,.36,a,.025,c);for(let R=0;R<8;R++){const U=e(.019,.67,.58,-.044+R*.088,.55,.014,x[(R+1)%x.length],.004,c);U.rotation.z=-.07,e(.016,.63,.018,U.position.x+.022,.55,.311,l,.004,c).rotation.z=-.07}return c}const Au={type:"change"},$c={type:"start"},qd={type:"end"},wo=new ia,Cu=new Mi,Ev=Math.cos(70*tt.DEG2RAD),Ut=new L,on=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},il=1e-6;class wv extends Um{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Xn,this._lastTargetPosition=new L,this._quat=new Xn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eu,this._sphericalDelta=new eu,this._scale=1,this._panOffset=new L,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new L,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Av.bind(this),this._onPointerDown=Tv.bind(this),this._onPointerUp=Cv.bind(this),this._onContextMenu=Nv.bind(this),this._onMouseWheel=Dv.bind(this),this._onKeyDown=Lv.bind(this),this._onTouchStart=Iv.bind(this),this._onTouchMove=Uv.bind(this),this._onMouseDown=Rv.bind(this),this._onMouseMove=Pv.bind(this),this._interceptControlDown=Fv.bind(this),this._interceptControlUp=Ov.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Au),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ut.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wo.origin.copy(this.object.position),wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wo.direction))<Ev?this.object.lookAt(this.target):(Cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),wo.intersectPlane(Cu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>il||this._lastTargetPosition.distanceToSquared(this.target)>il?(this.dispatchEvent(Au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-on*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Tv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Av(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Cv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qd),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case Os.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case Os.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent($c)}function Pv(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Dv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent($c),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qd))}function Lv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Iv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent($c)}function Uv(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function Nv(i){this.enabled!==!1&&i.preventDefault()}function Fv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ov(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _r=new L;function _n(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;_r.copy(e),_r[n]=0,_r.normalize();const c=.5*o/(o+a),h=1-_r.angleTo(i)/l;return Math.sign(_r[t])===1?h*c:a/(o+a)+c+c*(1-h)}class Jc extends Di{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,_=new L,m=.5/o;for(let f=0,y=0;f<u.length;f+=3,y+=2)switch(l.fromArray(u,f),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[f+0]=h.x*Math.sign(l.x)+c.x*r,u[f+1]=h.y*Math.sign(l.y)+c.y*r,u[f+2]=h.z*Math.sign(l.z)+c.z*r,p[f+0]=c.x,p[f+1]=c.y,p[f+2]=c.z,Math.floor(f/g)){case 0:_.set(1,0,0),d[y+0]=_n(_,c,"z","y",r,n),d[y+1]=1-_n(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[y+0]=1-_n(_,c,"z","y",r,n),d[y+1]=1-_n(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[y+0]=1-_n(_,c,"x","z",r,e),d[y+1]=_n(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),d[y+0]=1-_n(_,c,"x","z",r,e),d[y+1]=1-_n(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),d[y+0]=1-_n(_,c,"x","y",r,e),d[y+1]=1-_n(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[y+0]=_n(_,c,"x","y",r,e),d[y+1]=1-_n(_,c,"y","x",r,t);break}}static fromJSON(e){return new Jc(e.width,e.height,e.depth,e.segments,e.radius)}}class zv extends Ed{constructor(){super();const e=new Di;e.deleteAttribute("uv");const t=new gt({side:Qt}),n=new gt,s=new jc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new wd(e,n,6),a=new Pt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Fe(e,Is(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Fe(e,Is(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Fe(e,Is(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Fe(e,Is(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const p=new Fe(e,Is(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const d=new Fe(e,Is(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Is(i){return new ym({color:0,emissive:16777215,emissiveIntensity:i})}const Go={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Bv=new Zc(-1,1,1,-1,0,1);class kv extends St{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}}const Hv=new kv;class Qc{constructor(e){this._mesh=new Fe(Hv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Bv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Yd extends nr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Qc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ru extends nr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Vv extends nr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Gv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ai}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yd(Go),this.copyPass.material.blending=Vt,this.clock=new Im}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ru!==void 0&&(o instanceof Ru?n=!0:o instanceof Vv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wv extends nr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const To={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new at},cameraProjectionMatrixInverse:{value:new at},cameraWorldMatrix:{value:new at},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ao={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},sl={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Xv(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=qv(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],l=2*Math.PI*a/n,c=new L(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new zc(s,e,e);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}function qv(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const Co={defines:{SAMPLES:16,SAMPLE_VECTORS:jd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new he},cameraProjectionMatrixInverse:{value:new at},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function jd(i,e,t){const n=Yv(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function Yv(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}class jv{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,p=l-u,d=c-u,g=e-p,_=t-d;let m,f;g>_?(m=1,f=0):(m=0,f=1);const y=g-m+h,x=_-f+h,v=g-1+2*h,E=_-1+2*h,S=l&255,A=c&255,C=this.perm[S+this.perm[A]]%12,b=this.perm[S+m+this.perm[A+f]]%12,w=this.perm[S+1+this.perm[A+1]]%12;let R=.5-g*g-_*_;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[C],g,_));let U=.5-y*y-x*x;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[b],y,x));let V=.5-v*v-E*E;return V<0?r=0:(V*=V,r=V*V*this._dot(this.grad3[w],v,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),p=Math.floor(n+c),d=1/6,g=(h+u+p)*d,_=h-g,m=u-g,f=p-g,y=e-_,x=t-m,v=n-f;let E,S,A,C,b,w;y>=x?x>=v?(E=1,S=0,A=0,C=1,b=1,w=0):y>=v?(E=1,S=0,A=0,C=1,b=0,w=1):(E=0,S=0,A=1,C=1,b=0,w=1):x<v?(E=0,S=0,A=1,C=0,b=1,w=1):y<v?(E=0,S=1,A=0,C=0,b=1,w=1):(E=0,S=1,A=0,C=1,b=1,w=0);const R=y-E+d,U=x-S+d,V=v-A+d,H=y-C+2*d,X=x-b+2*d,G=v-w+2*d,B=y-1+3*d,F=x-1+3*d,j=v-1+3*d,ae=h&255,re=u&255,se=p&255,K=this.perm[ae+this.perm[re+this.perm[se]]]%12,ce=this.perm[ae+E+this.perm[re+S+this.perm[se+A]]]%12,we=this.perm[ae+C+this.perm[re+b+this.perm[se+w]]]%12,q=this.perm[ae+1+this.perm[re+1+this.perm[se+1]]]%12;let Y=.6-y*y-x*x-v*v;Y<0?s=0:(Y*=Y,s=Y*Y*this._dot3(this.grad3[K],y,x,v));let fe=.6-R*R-U*U-V*V;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[ce],R,U,V));let _e=.6-H*H-X*X-G*G;_e<0?o=0:(_e*=_e,o=_e*_e*this._dot3(this.grad3[we],H,X,G));let pe=.6-B*B-F*F-j*j;return pe<0?a=0:(pe*=pe,a=pe*pe*this._dot3(this.grad3[q],B,F,j)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,p,d,g;const _=(e+t+n+s)*l,m=Math.floor(e+_),f=Math.floor(t+_),y=Math.floor(n+_),x=Math.floor(s+_),v=(m+f+y+x)*c,E=m-v,S=f-v,A=y-v,C=x-v,b=e-E,w=t-S,R=n-A,U=s-C,V=b>w?32:0,H=b>R?16:0,X=w>R?8:0,G=b>U?4:0,B=w>U?2:0,F=R>U?1:0,j=V+H+X+G+B+F,ae=o[j][0]>=3?1:0,re=o[j][1]>=3?1:0,se=o[j][2]>=3?1:0,K=o[j][3]>=3?1:0,ce=o[j][0]>=2?1:0,we=o[j][1]>=2?1:0,q=o[j][2]>=2?1:0,Y=o[j][3]>=2?1:0,fe=o[j][0]>=1?1:0,_e=o[j][1]>=1?1:0,pe=o[j][2]>=1?1:0,Ve=o[j][3]>=1?1:0,Xe=b-ae+c,I=w-re+c,ee=R-se+c,J=U-K+c,ne=b-ce+2*c,te=w-we+2*c,be=R-q+2*c,de=U-Y+2*c,Me=b-fe+3*c,He=w-_e+3*c,ze=R-pe+3*c,P=U-Ve+3*c,T=b-1+4*c,W=w-1+4*c,Z=R-1+4*c,ue=U-1+4*c,$=m&255,De=f&255,ye=y&255,Le=x&255,Ne=a[$+a[De+a[ye+a[Le]]]]%32,ge=a[$+ae+a[De+re+a[ye+se+a[Le+K]]]]%32,Te=a[$+ce+a[De+we+a[ye+q+a[Le+Y]]]]%32,Ge=a[$+fe+a[De+_e+a[ye+pe+a[Le+Ve]]]]%32,Oe=a[$+1+a[De+1+a[ye+1+a[Le+1]]]]%32;let Ee=.6-b*b-w*w-R*R-U*U;Ee<0?h=0:(Ee*=Ee,h=Ee*Ee*this._dot4(r[Ne],b,w,R,U));let We=.6-Xe*Xe-I*I-ee*ee-J*J;We<0?u=0:(We*=We,u=We*We*this._dot4(r[ge],Xe,I,ee,J));let k=.6-ne*ne-te*te-be*be-de*de;k<0?p=0:(k*=k,p=k*k*this._dot4(r[Te],ne,te,be,de));let oe=.6-Me*Me-He*He-ze*ze-P*P;oe<0?d=0:(oe*=oe,d=oe*oe*this._dot4(r[Ge],Me,He,ze,P));let xe=.6-T*T-W*W-Z*Z-ue*ue;return xe<0?g=0:(xe*=xe,g=xe*xe*this._dot4(r[Oe],T,W,Z,ue)),27*(h+u+p+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}}class Nn extends nr{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Xv(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new qn(this.width,this.height,{type:Ai}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Gt({defines:Object.assign({},To.defines),uniforms:Si.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,blending:Vt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Mm,this.normalMaterial.blending=Vt,this.pdMaterial=new Gt({defines:Object.assign({},Co.defines),uniforms:Si.clone(Co.uniforms),vertexShader:Co.vertexShader,fragmentShader:Co.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Gt({defines:Object.assign({},Ao.defines),uniforms:Si.clone(Ao.uniforms),vertexShader:Ao.vertexShader,fragmentShader:Ao.fragmentShader,blending:Vt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Gt({uniforms:Si.clone(Go.uniforms),vertexShader:Go.vertexShader,fragmentShader:Go.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:wl,blendDst:xr,blendEquation:wn,blendSrcAlpha:El,blendDstAlpha:xr,blendEquationAlpha:wn}),this.blendMaterial=new Gt({uniforms:Si.clone(sl.uniforms),vertexShader:sl.vertexShader,fragmentShader:sl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ed,blendSrc:wl,blendDst:xr,blendEquation:wn,blendSrcAlpha:El,blendDstAlpha:xr,blendEquationAlpha:wn}),this._fsQuad=new Qc(null),this._originalClearColor=new ke,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new kc,this.depthTexture.format=Ys,this.depthTexture.type=qs,this.normalRenderTarget=new qn(this.width,this.height,{minFilter:en,magFilter:en,type:Ai,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=jd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case Nn.OUTPUT.Off:break;case Nn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Nn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new jv,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}const r=new zc(s,e,e,vn,Pn);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}}Nn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Ro={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Zv extends nr{constructor(){super(),this.uniforms=Si.clone(Ro.uniforms),this.material=new xm({name:Ro.name,uniforms:this.uniforms,vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader}),this._fsQuad=new Qc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===td?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===id?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===od?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===sd&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Kv={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},$v='*{box-sizing:border-box}body{margin:0;background:#f2eee6;color:#515344;font:14px Arial,Microsoft YaHei,sans-serif}button,a{-webkit-tap-highlight-color:transparent}button{font:inherit;cursor:pointer}button:focus-visible,a:focus-visible{outline:2px solid #74805f;outline-offset:5px}button{color:inherit}a{color:inherit;text-decoration:none}.page-head{height:90px;padding:0 5%;display:flex;align-items:center;justify-content:space-between}.page-head>a{font:32px Georgia,serif;letter-spacing:-1px}.page-head a span{font:12px Arial,sans-serif;margin-left:17px;letter-spacing:1px;color:#78796b}.page-head>span{font-size:12px;color:#878678}.desktop{max-width:1300px;min-height:calc(100svh - 164px);margin:auto;padding:45px 5% 60px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:70px}.overline{font-size:13px;color:#8c8b78;margin:0 0 18px}h1{font-weight:400;font-size:clamp(48px,5.3vw,78px);letter-spacing:-3px;line-height:1.2;margin:0 0 24px}.intro-copy{font-size:15px;line-height:1.9;color:#858474}.collection{display:block;position:relative;margin-top:38px;width:320px;padding:25px 25px 16px;border:1px solid #d2d2bd;border-radius:9px;background:linear-gradient(120deg,#dedfce,#e9e9db 60%,#d6d9c3);box-shadow:inset 0 1px #ffffffb0,0 12px 23px #575c3a12;text-align:left;transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s,border-color .35s}.collection:hover,.collection:focus-visible{transform:translateY(-5px) scale(1.035);border-color:#a4b489;box-shadow:inset 0 1px #fff,0 0 28px #d3e5a48a,0 18px 35px #5f714326}.shelf-art{display:flex;align-items:flex-end;height:89px;gap:7px;padding:0 8px;border-bottom:5px solid #a5ad8c;perspective:700px}.shelf-art i{display:block;width:23px;height:80px;background:linear-gradient(90deg,#b4b6a7,#ecece4 25%,#fbfaf4 38%,#bfc5b4 50%,#e9e9df 75%,#acae9b);border:1px solid #a7ad99;border-radius:2px;transform:rotateY(-12deg);box-shadow:3px 0 2px #61704715}.shelf-art i:nth-child(3n){height:86px;border-top:12px solid #b7c2ad}.shelf-art i:nth-child(3n+1){border-top:12px solid #b7856e}.shelf-art i:nth-child(3n+2){border-top:12px solid #86a8b8}.collection-label{display:block;position:relative;padding-top:16px}.collection-label b{font-size:15px;font-weight:500}.collection-label small{display:block;margin-top:7px;font-size:11px;color:#7c846d}.collection-label em{position:absolute;right:0;top:24px;font-style:normal;font-size:21px}.note{font-size:11px;color:#969485;margin-top:20px}.computer-area{position:relative;height:400px;width:490px;max-width:100%;justify-self:center;align-self:center}.computer{position:absolute;left:0;top:25px;width:320px;z-index:2}.monitor{height:258px;padding:26px 25px 30px;background:linear-gradient(125deg,#eae4d3,#d6cfb9);border:1px solid #c8bfa8;border-radius:18px 18px 12px 12px;box-shadow:inset 3px 3px 4px #fff9e9,6px 8px #c8c0a9,15px 20px 35px #82785e19;position:relative}.screen{position:relative;height:199px;background:#8fae9c;border:7px solid #b7b8a1;border-radius:35%/7%;box-shadow:inset 0 0 22px #1b594d42;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center}.screen-wave{position:absolute;width:350px;height:160px;left:-55px;bottom:-90px;background:#b1c9ac77;border-radius:50%;transform:rotate(-15deg)}#screen-copy{position:relative;z-index:1;color:#f0f2d9;text-shadow:0 1px #57756430;padding:12px}#screen-copy small{font-size:9px;letter-spacing:2px}#screen-copy b{display:block;font-size:21px;font-weight:400;margin:15px 0 10px}#screen-copy p{font-size:11px;line-height:1.7;margin:0}.monitor-label{display:block;text-align:center;color:#99947e;font:7px Arial;margin-top:10px;letter-spacing:1px}.led{width:4px;height:4px;background:#8fa87c;position:absolute;right:20px;bottom:12px;border-radius:50%}.stand{width:76px;height:34px;margin:auto;background:linear-gradient(90deg,#ccc4ac,#ded7c0);box-shadow:inset 0 8px 10px #81785624}.stand-foot{width:133px;height:14px;margin:auto;border-radius:6px;background:#ddd5bd;box-shadow:0 5px #bcb59d}.tower{position:absolute;right:0;top:15px;width:133px;height:294px;background:linear-gradient(120deg,#e7e0cc,#d4ccb4);border:1px solid #c5bda4;border-radius:8px 8px 3px 3px;box-shadow:inset 3px 3px #f6f1df,7px 5px #c4bca5,13px 14px 30px #6f674b16;padding:20px 12px}.drive-bay{height:35px;margin-bottom:8px;border:1px solid #bcb49b;background:#ddd6be;box-shadow:inset 2px 2px #efe9d8}.drive-bay:after{content:"";display:block;height:1px;background:#b8b09a;width:60%;margin:21px auto}.drive-slot{height:8px;background:#4f5145;margin-top:12px;border-radius:1px;box-shadow:0 2px #efe8d5}.drive-tray{width:116px;height:24px;background:#d5ccb2;border:1px solid #aaa58d;position:absolute;left:7px;top:123px;transform:perspective(200px) rotateX(40deg);transform-origin:top;transition:transform 1s,opacity .7s}.drive-tray:after{content:"";display:block;width:60px;height:16px;border:1px solid #b5ae98;border-radius:50%;margin:2px auto}.tower.loaded .drive-tray{transform:perspective(200px) rotateX(40deg) scaleY(.02);opacity:0}.power{margin-top:50px;width:17px;height:17px;border-radius:50%;border:2px solid #b9b19a;box-shadow:inset 0 1px 3px #877e5c33}.vents{margin-top:20px;height:31px;background:repeating-linear-gradient(0deg,transparent 0 4px,#b9b19a 4px 5px)}.table{height:16px;background:linear-gradient(#b99c72,#a8906b);position:absolute;top:340px;left:-35px;right:-25px;border-radius:5px;box-shadow:0 13px 25px #7a725a19}.computer-caption{position:absolute;top:372px;font-size:12px;left:0;right:0;text-align:center;color:#8c8b79}.page-footer{height:74px;padding:0 5%;display:flex;justify-content:space-between;align-items:center;color:#999582;font-size:11px}#reset{border:0;background:transparent;padding:12px;color:#687652}dialog{border:0;padding:0;color:#515344;background:#f1eee3;box-shadow:0 25px 100px #343a3240}dialog::backdrop{background:#3e443852;-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px)}dialog[open]{animation:arrive .45s cubic-bezier(.2,.8,.2,1)}#board{width:min(1050px,92vw);height:85svh;max-height:1000px;border-radius:12px;background:linear-gradient(110deg,#eeebde,#f6f3e8 55%,#eeeddf);overflow:auto}#board:before{content:"";position:absolute;top:0;left:0;right:0;height:6px;background:#a3ab8b}.board-heading{position:relative;display:flex;justify-content:space-between;padding:38px 45px 20px}.board-heading small{font-size:10px;letter-spacing:2px;color:#9b9c87}h2{font-weight:400;font-size:29px;letter-spacing:-.8px;margin:13px 0}.board-heading p{font-size:13px;color:#8e8e7c;line-height:1.8}.close{position:absolute;right:20px;top:20px;background:transparent;border:0;font-size:27px;width:40px;height:40px;color:#8e927f}.disc-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 27px;padding:10px 45px 38px}.album{border:0;background:none;padding:0;text-align:left;min-width:0}.jewel{position:relative;display:block;aspect-ratio:1;width:100%;padding:8px 7px 8px 13px;background:linear-gradient(135deg,#f9fcf180,#c4cabc55);border:1px solid #a5ad9c95;border-radius:3px;box-shadow:inset 1px 1px 2px #fff,3px 5px #a3ab982c,7px 12px 20px #69704c18;transition:transform .3s,box-shadow .3s;isolation:isolate}.jewel:before{content:"";position:absolute;top:0;bottom:0;left:4px;width:5px;border-left:1px solid #fafcf980;border-right:1px solid #929c8170;z-index:2}.jewel:after{content:"";position:absolute;inset:0;background:linear-gradient(130deg,#fff5,transparent 35%,transparent 70%,#fff3);pointer-events:none;z-index:3}.album:hover .jewel,.album:focus-visible .jewel{transform:translateY(-7px) rotate(-2deg);box-shadow:inset 1px 1px 2px #fff,3px 7px #a3ab982c,0 10px 30px #d1e3a078}.cover{display:flex;position:relative;overflow:hidden;width:100%;height:100%;flex-direction:column;justify-content:space-between;padding:12px;background:var(--paper);color:var(--ink);box-shadow:0 0 0 1px #393d281a}.cover .serial{font-size:7px;letter-spacing:1px;z-index:1}.cover .cover-title{font:25px Georgia,serif;line-height:.95;z-index:1;letter-spacing:-1px;white-space:pre-line}.cover .cover-foot{font-size:6px;letter-spacing:1px;z-index:1}.cover .art{position:absolute;inset:0;pointer-events:none}.art:before,.art:after{content:"";position:absolute}.art.orbit:before{width:78%;height:78%;right:-12%;bottom:8%;border:18px solid var(--accent);border-radius:50%}.art.orbit:after{height:2px;width:130%;background:var(--ink);transform:rotate(-35deg);left:-15%;top:50%}.art.grid{background:repeating-linear-gradient(0deg,transparent 0 23px,#ffffff35 23px 24px),repeating-linear-gradient(90deg,transparent 0 23px,#ffffff35 23px 24px)}.art.grid:after{width:50%;height:50%;background:var(--accent);bottom:12%;right:-10%;transform:rotate(32deg)}.art.flower:before{width:65%;height:65%;border-radius:50% 0 50% 50%;background:var(--accent);right:-4%;top:20%;transform:rotate(35deg)}.art.flower:after{width:24%;height:24%;border-radius:50%;background:var(--paper);right:18%;top:40%}.art.wave:before{width:160%;height:70%;border-radius:50%;background:var(--accent);bottom:-20%;left:-35%;transform:rotate(-30deg)}.art.wave:after{width:160%;height:60%;border-radius:50%;border:1px solid var(--ink);bottom:-10%;left:-25%;transform:rotate(-30deg)}.album-label{display:block;margin-top:15px;font-size:13px}.album small{display:block;font-size:10px;color:#92917e;margin-top:6px}.board-footer{display:flex;justify-content:space-between;padding:25px 45px;background:#e4e5d5;color:#858b72;font-size:11px}#detail{width:min(850px,93vw);border-radius:12px;overflow:visible}.detail-layout{display:grid;grid-template-columns:1fr 1fr;gap:50px;padding:80px 45px 60px;align-items:center}.unboxing{height:270px;position:relative;display:flex;align-items:center}.unboxing>.jewel{width:205px;height:205px;flex-shrink:0;z-index:2;transform:rotate(-6deg)}.unboxing .cover-title{font-size:33px}.optical-disc{position:absolute;width:187px;height:187px;left:30px;top:43px;border-radius:50%;background:conic-gradient(from 40deg,#d3d3c5,#f8f4db,#c8d7d0,#e0d2dd,#e9e5c5,#adbec5,#d3d3c5);box-shadow:inset 0 0 0 1px #a5ad9c,0 10px 20px #6b72581a;z-index:1;transition:transform .85s cubic-bezier(.2,.7,.2,1);display:grid;place-items:center;isolation:isolate}.optical-disc:before{content:"";position:absolute;inset:12px;border:1px solid #ffffff85;border-radius:50%}.optical-disc:after{content:"";position:absolute;width:18px;height:18px;border-radius:50%;background:#f1eee3;box-shadow:0 0 0 8px #c1c9be,0 0 0 9px #999f9460}.disc-print{width:135px;height:135px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--paper);color:var(--ink);border:1px solid #fff8;font:12px Georgia,serif;letter-spacing:1px;text-align:center;padding-bottom:65px;white-space:pre-line}.unboxing.out .optical-disc{transform:translate(118px) rotate(35deg)}.unboxing.returning .optical-disc{transform:translate(0) rotate(0)}.detail-copy{opacity:0;transform:translateY(9px);transition:opacity .45s .4s,transform .45s .4s}.out~.detail-copy{opacity:1;transform:none}.detail-copy>small{font-size:10px;letter-spacing:2px;color:#92977e}.detail-copy h2{font-size:30px;margin:15px 0}.detail-copy>p{color:#838672;font-size:14px;line-height:1.9}.detail-copy .detail-question{margin-top:25px;font-size:12px;color:#626c51}.actions{display:flex;gap:8px;margin-top:12px}.actions button{border:1px solid #bdc4ad;border-radius:5px;background:transparent;padding:12px 16px;font-size:12px;transition:background .2s,transform .2s}.actions button:active{transform:translateY(2px)}#insert{background:#737e5d;color:#fbf8ed;border-color:#737e5d}#insert:hover{background:#5a6749}#put-back:hover{background:#e1e5d4}.demo-tag{display:block;font-size:10px;color:#a3a38d;margin-top:16px}.flying-disc{position:fixed!important;left:0;top:0;z-index:10000;pointer-events:none;margin:0;transition:none}.screen.loaded{background:#6d806b}.screen.loaded #screen-copy{animation:screen-in 1s ease-out}#announcement{position:fixed;bottom:28px;left:50%;transform:translate(-50%,15px);background:#57654b;color:#faf7ed;padding:12px 22px;border-radius:6px;font-size:12px;z-index:15;opacity:0;pointer-events:none;transition:opacity .3s,transform .3s}#announcement.show{opacity:1;transform:translate(-50%)}button:disabled{cursor:wait;opacity:.7}[hidden]{display:none!important}@keyframes arrive{0%{opacity:0;transform:translateY(25px) scale(.97)}to{opacity:1;transform:none}}@keyframes screen-in{0%{opacity:0;filter:blur(5px)}to{opacity:1;filter:none}}@media(max-width:950px){.desktop{gap:20px}.computer-area{transform:scale(.8);transform-origin:center;width:490px;margin-left:-35px}.disc-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.detail-layout{gap:20px;padding:65px 30px 45px}.unboxing>.jewel{width:180px;height:180px}.optical-disc{width:165px;height:165px;top:54px}.disc-print{width:120px;height:120px}.unboxing.out .optical-disc{transform:translate(95px) rotate(35deg)}}@media(max-width:650px){.page-head{height:76px;padding:0 22px}.page-head>span{display:none}.page-head a span{font-size:10px;margin-left:10px}.desktop{grid-template-columns:1fr;padding:20px 25px 0;gap:20px}.intro h1{font-size:52px}.intro-copy{font-size:13px}.collection{width:100%;max-width:340px;margin-top:24px}.note{font-size:10px}.computer-area{width:490px;max-width:none;transform:scale(.64);transform-origin:top left;margin:25px 0 -120px;justify-self:start}.page-footer{padding:0 25px;font-size:10px;gap:10px}.page-footer>span{max-width:140px;line-height:1.6}.board-heading{padding:30px 22px 12px}.board-heading h2{font-size:22px}.board-heading p{font-size:12px;max-width:240px}.disc-grid{grid-template-columns:repeat(3,minmax(0,1fr));padding:12px 20px 30px;gap:22px 13px}.jewel{padding:4px 3px 4px 8px}.cover{padding:7px}.cover .cover-title{font-size:17px}.cover .serial{font-size:5px}.cover .cover-foot{font-size:4px}.album-label{font-size:11px;line-height:1.5;margin-top:10px}.album small{font-size:9px;line-height:1.5}.board-footer{padding:18px 22px;font-size:10px}.detail-layout{grid-template-columns:1fr;padding:40px 28px 30px;gap:0}.unboxing{width:290px;max-width:100%;height:240px;justify-self:center}.unboxing>.jewel{width:175px;height:175px}.unboxing .optical-disc{top:40px}.detail-copy h2{font-size:26px;margin:10px 0}.detail-copy>p{font-size:13px}.detail-copy .detail-question{margin-top:16px}.actions button{padding:13px 15px}.close{right:10px;top:10px}#detail{max-height:92svh;overflow:auto}.demo-tag{font-size:9px}.art.orbit:before{border-width:9px}.detail-layout .cover{padding:14px}.detail-layout .cover .serial{font-size:8px}.detail-layout .cover .cover-foot{font-size:6px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.cover .cover-title{font-size:22px;line-height:1.03;letter-spacing:-.9px}.unboxing .cover-title{font-size:25px}.unboxing>.jewel{padding:12px 10px 12px 17px}@media(max-width:650px){.cover .cover-title{font-size:12px;letter-spacing:-.5px;line-height:1.08}.unboxing .cover-title{font-size:22px}}#board.is-empty{width:min(460px,92vw);height:auto}#board.is-empty .disc-grid{display:none}';function Jv({host:i,onOpen:e,onClose:t,onOpenCollection:n,prepareInsertion:s,getDrivePoint:r,onLoad:o,onEject:a,onToggleFocus:l,motionEnabled:c}){const h=i.attachShadow({mode:"open"}),u=matchMedia("(prefers-reduced-motion: reduce)").matches,p=B=>`--paper:${B.paper};--ink:${B.ink};--accent:${B.accent}`,d=(B,F)=>`<span class="jewel" style="${p(B)}"><span class="cover"><span class="serial">DOISH / VOL. ${String(F+1).padStart(2,"0")}</span><span class="art ${B.art}"></span><span class="cover-title">${B.en}</span><span class="cover-foot">A PERSONAL COLLECTION / ${B.category}</span></span></span>`,g=B=>`<span class="optical-disc" style="${p(B)}" aria-hidden="true"><span class="disc-print">${B.en}</span></span>`;h.innerHTML=`<style>${$v}
 :host{position:absolute;inset:0;z-index:3;pointer-events:none;font:14px Arial,"Microsoft YaHei",sans-serif;color:#515344}button,dialog{pointer-events:auto}dialog{position:fixed}.close{z-index:5}dialog::backdrop{background:#3e44383d;backdrop-filter:blur(5px)}
 #rack-trigger{position:absolute;pointer-events:none;background:transparent;border:0;border-radius:6px}
 #rack-trigger:focus-visible{outline:2px solid #abb991;outline-offset:4px}
 :host([data-desktop-open]) :is(#rack-trigger,#reading-actions){display:none!important}
 #board.is-empty{height:auto;width:min(420px,92vw)}
 #board[open]{animation:collection-board-in .22s ease-out both}
 #board[open].collection-still{animation:none}
 @keyframes collection-board-in{from{opacity:0}to{opacity:1}}
 #board,#detail{border:1px solid #939079;border-radius:7px;background:#f6f0de;box-shadow:0 2px 0 #9c805d,0 8px 30px #3437282b}
 #board::before{height:5px;background:linear-gradient(90deg,#50653f,#788361)}
 .board-heading h2,.detail-copy h2{font-family:Georgia,"Microsoft YaHei",serif;color:#39492e}
 #insert{background:#4e633f}
 #announcement{position:fixed;bottom:100px}
 @media(max-width:650px){#announcement{bottom:140px;max-width:85vw;width:max-content}}
 #reading-actions{position:absolute;right:85px;bottom:20px;display:flex;gap:8px}
 #reading-actions[hidden]{display:none}
 #reading-actions button{position:static;border:1px solid #bcc4aa;background:#f9f6e9;padding:10px 14px;min-height:44px;border-radius:6px;font-size:12px}
 @media(max-width:650px){#reading-actions{right:80px;bottom:20px;gap:5px}#reading-actions button{padding:8px;font-size:11px}}
 </style><button id="rack-trigger" aria-label="打开狗鱼的光盘集" aria-haspopup="dialog"></button><div id="reading-actions" hidden><button id="screen-focus">返回房间</button><button id="open-collection" hidden>打开光盘集</button><button id="eject" hidden>退出光盘 · 重新挑选 ↗</button></div>
 <dialog id="board" class="${si.length?"":"is-empty"}" aria-labelledby="board-title"><div class="board-heading"><div><small>DOISH / COLLECTION</small><h2 id="board-title">光盘集</h2><p>${si.length?"挑一张光盘，看看里面的内容。":"目前还没有光盘。"}</p></div><button class="close" id="close-board" aria-label="收起光盘集">×</button></div><div class="disc-grid">${si.map((B,F)=>`<button class="album" data-album="${F}" aria-label="选择${B.title}">${d(B,F)}<span class="album-label">${B.title}</span><small>${B.category}</small></button>`).join("")}</div></dialog>
 <dialog id="detail" aria-labelledby="detail-title"><button class="close" id="close-detail" aria-label="放回光盘">×</button><div class="detail-layout"><div class="unboxing" id="unboxing"></div><div class="detail-copy"><small id="detail-category"></small><h2 id="detail-title"></h2><p id="detail-description"></p><p class="detail-question">这张光盘，你想怎么处理？</p><div class="actions"><button id="put-back">放回</button><button id="insert">放进电脑查看 →</button></div><span class="demo-tag">示例光盘 · 真实作品内容后续接入</span></div></div></dialog><div id="announcement" role="status" aria-live="polite"></div>`;const _=B=>h.querySelector(B),m=_("#rack-trigger"),f=_("#board"),y=_("#detail");let x=0,v=!1,E,S,A,C,b=[];const w=B=>new Promise(F=>setTimeout(F,u?0:B));function R(B){clearTimeout(S),_("#announcement").textContent=B,_("#announcement").classList.add("show"),S=setTimeout(()=>_("#announcement").classList.remove("show"),3600)}function U(){b.forEach(B=>B.cancel()),b=[]}function V(){if(v||f.open)return;const B=!u&&c();if(e(),f.classList.toggle("collection-still",!B),f.showModal(),B&&si.length){const F=_(".disc-grid"),j=getComputedStyle(F).gridTemplateColumns.split(" ").length,ae=A?f.getBoundingClientRect():m.getBoundingClientRect();b=Array.from(F.children,(re,se)=>{const K=re.getBoundingClientRect(),ce=H(ae.x+ae.width/2-K.x-K.width/2,-240,180),we=H(ae.y+ae.height/2-K.y-K.height/2,-100,150);return re.animate([{transform:`translate(${ce}px,${we}px) scale(.56) rotate(-6deg)`,opacity:0},{transform:"translateY(-5px) scale(1.02)",opacity:1,offset:.82},{transform:"none",opacity:1}],{duration:470,delay:120+se%j*100,fill:"backwards",easing:"cubic-bezier(.22,.68,.22,1)"})})}_("#close-board").focus()}function H(B,F,j){return Math.max(F,Math.min(j,B))}function X(){v||(U(),f.close(),t(),A?A():m.focus(),A=null)}m.addEventListener("click",()=>C?C():V()),_("#close-board").addEventListener("click",X),_(".disc-grid").addEventListener("click",B=>{const F=B.target.closest("[data-album]");if(!F||v)return;x=+F.dataset.album,E=F;const j=si[x];_("#unboxing").className="unboxing",_("#unboxing").innerHTML=g(j)+d(j,x),_("#detail-category").textContent=j.category,_("#detail-title").textContent=j.title,_("#detail-description").textContent=j.description,y.showModal(),_("#put-back").focus(),requestAnimationFrame(()=>requestAnimationFrame(()=>_("#unboxing").classList.add("out")))});async function G(){v||(v=!0,_("#unboxing").classList.add("returning"),await w(650),y.close(),E?.focus(),v=!1)}_("#put-back").addEventListener("click",G),_("#close-detail").addEventListener("click",G),f.addEventListener("cancel",B=>{B.preventDefault(),X()}),y.addEventListener("cancel",B=>{B.preventDefault(),G()});for(const B of[f,y])B.addEventListener("click",F=>{if(F.target!==B)return;const j=B.getBoundingClientRect();(F.clientX<j.left||F.clientX>j.right||F.clientY<j.top||F.clientY>j.bottom)&&(B===y?G():X())});return _("#insert").addEventListener("click",async()=>{if(v)return;v=!0,A=null,_("#insert").disabled=!0,_("#put-back").disabled=!0;const B=si[x],F=_("#unboxing .optical-disc"),j=F.getBoundingClientRect(),ae=F.cloneNode(!0);ae.classList.add("flying-disc"),ae.style.cssText+=`;left:${j.left}px;top:${j.top}px;width:${j.width}px;height:${j.height}px;`,y.close(),f.close(),m.hidden=!0,_("#reading-actions").hidden=!0,h.append(ae);try{U();const re=await s(),se=r(),K=se.x-j.left-j.width/2,ce=se.y-j.top-j.height/2;await ae.animate([{transform:"translate(0,0) rotate(35deg)",opacity:1},{offset:.68,transform:`translate(${K}px,${ce-18}px) scale(.44) rotate(155deg)`,opacity:1},{transform:`translate(${K}px,${ce}px) scale(.16,.025) rotate(180deg)`,opacity:0}],{duration:u||!re?1:1500,easing:"cubic-bezier(.4,0,.2,1)",fill:"forwards"}).finished,ae.remove(),await o(B),_("#reading-actions").hidden=!1,_("#screen-focus").focus({preventScroll:!0})}catch(re){console.error("Disc insertion failed",re),R("光盘暂时未能载入，请重新选择。")}finally{ae.remove(),v=!1,m.hidden=!1,_("#insert").disabled=!1,_("#put-back").disabled=!1,t()}}),_("#screen-focus").addEventListener("click",l),_("#open-collection").addEventListener("click",()=>{n(),V()}),_("#eject").addEventListener("click",()=>{v||(a(),_("#reading-actions").hidden=!0,V())}),{open:V,setRackAction(B){C=B},openFromDesktop(B){v||f.open||(A=B,V())},rackHasFocus:()=>m.matches(":focus-visible"),updateFocus(B,F){_("#reading-actions").hidden=!B&&!F,_("#screen-focus").textContent=B?"返回房间":"聚焦电脑",_("#eject").hidden=!F,_("#open-collection").hidden=F||!B},updateBounds(B){m.style.left=`${B.x}px`,m.style.top=`${B.y}px`,m.style.width=`${Math.max(38,B.w)}px`,m.style.height=`${Math.max(50,B.h)}px`}}}const Qv="/assets/dusk-De50M9Nc.m4a",ex="/assets/dusk-DOtXA5Pe.mp4",tx="/assets/dusk-B7IzDS6s.webp",nx="/assets/evening-BYTsTJNx.m4a",ix="/assets/evening-B7ONjhBb.mp4",sx="/assets/evening-ClmvA9VQ.webp",rx="/assets/morning-TgC0UaN1.m4a",ox="/assets/morning-BI7KfhsU.mp4",ax="/assets/morning-pw-VbD1p.webp",lx="/assets/night-DNfc017s.m4a",cx="/assets/night-DfC5k9lP.mp4",hx="/assets/night-BBCFiRug.webp",ux="/assets/noon-CtqyJ-JA.m4a",dx="/assets/noon-Dx5tGb_d.mp4",fx="/assets/noon-w-tII12x.webp",px=[["#c6dcd9","#f7e4c4","#8daba3","#d4bfa1","#ddd4ae","#aeb49a","#8faab0","#808d76","#748b65","#d1cc94","#fff2cd"],["#a9cfd8","#edf0d6","#8ca9a6","#c6a98d","#e0ceac","#abb49a","#99aeb2","#8a9787","#718d62","#b4be83","#fff2cf"],["#99a8c1","#efbf9b","#a392a3","#a88a78","#dbb48d","#a9aa8f","#898fa7","#8e807a","#6e795e","#b0a477","#ffdf9b"],["#34475e","#68778a","#566778","#5d5966","#8a8179","#758286","#596779","#646b73","#4c675d","#899377","#ffce88"]];function yi(i,e,t){i.fillStyle=e,i.beginPath(),t.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath(),i.fill()}function Ht(i,e,t,...n){i.strokeStyle=e,i.lineWidth=t,i.beginPath(),n.forEach(([s,r],o)=>o?i.lineTo(s,r):i.moveTo(s,r)),i.stroke()}function ti(i,e,t,n,s,r){i.fillStyle=e,i.beginPath(),i.ellipse(t,n,s,r,0,0,Math.PI*2),i.fill()}function Po(i,e,t,n,s,r,o,a,l,c,h,u){yi(i,l,[[e,t],[e+r,t-25],[e+n+r,t-25],[e+n,t]]),yi(i,a,[[e+n,t],[e+n+r,t-25],[e+n+r,t+s-25],[e+n,t+s]]),i.fillStyle=o,i.fillRect(e,t,n,s);for(let g=0;g<4;g++){const _=t+12+g*(s-24)/4;for(let m=0;m<4;m++){const f=e+12+m*(n-15)/4,y=u&&(g*3+m*5+Math.floor(e))%5<2;if(i.fillStyle=a,i.fillRect(f-2,_-2,21,18),i.fillStyle=y?h:c,i.fillRect(f,_,17,13),Ht(i,o,1,[f+8,_],[f+8,_+13]),Ht(i,o,1,[f,_+6],[f+17,_+6]),(m+g)%3===0){const x=f-3,v=_+16;Ht(i,a,4,[x,v],[x+24,v]);for(let E=0;E<5;E++)Ht(i,a,1,[x+E*5,v],[x+E*5,v-7]);Ht(i,a,1,[x,v-7],[x+24,v-7])}}Ht(i,a,.7,[e,_+23],[e+n,_+23])}Ht(i,o,4,[e,t],[e+n,t],[e+n+r,t-25]);const p=e+n*.56,d=t-18;Ht(i,a,1,[p,d],[p,d-24]),Ht(i,a,1,[p-12,d-20],[p+12,d-25]),Ht(i,a,1,[p-7,d-24],[p-7,d-17])}function mx(i,e,t,n){const[s,r,o,a,l,c,h,u,p,d,g]=px[e],_=e>=2,m=i.createLinearGradient(0,0,0,260);m.addColorStop(0,s),m.addColorStop(1,r),i.fillStyle=m,i.fillRect(0,0,640,560),i.save(),i.globalAlpha=e===3?.22:.66;for(let v=0;v<7;v++){const E=(v*127+t*(2+v%3))%885-120,S=40+v*37%103;ti(i,r,E,S,64,9),ti(i,r,E+20,S-7,35,11)}i.restore(),i.globalAlpha=.66;for(let v=0;v<15;v++){const E=v*46-22,S=16+v*23%39;i.fillStyle=o,i.fillRect(E,190-S,37,S+70),i.fillStyle=h;for(let A=0;A<3;A++)for(let C=0;C<3;C++)i.fillRect(E+5+C*10,195-S+A*10,3,4)}i.globalAlpha=1,yi(i,c,[[0,236],[322,209],[640,245],[640,560],[0,560]]),yi(i,l,[[313,216],[378,224],[555,560],[84,560]]),yi(i,u,[[324,218],[366,223],[498,560],[137,560]]);for(let v=0;v<6;v++){const E=258+v*v*10,S=343-(E-218)*.067;Ht(i,l,1+v*.35,[S,E],[S-4-v*1.5,E+6+v*3])}Po(i,24,238,178,157,49,l,a,a,h,g,_),Po(i,186,199,105,112,30,c,u,l,h,g,_),Po(i,473,220,164,143,45,l,a,c,h,g,_),Po(i,395,252,159,165,55,a,u,l,h,g,_);const f=e===3?"#b88570":"#a45f4c";i.fillStyle=p,i.fillRect(113,358,89,20),i.fillStyle="#f3e8ce",i.font="14px sans-serif",i.fillText("修车配钥匙",121,373),i.fillStyle=f,i.fillRect(398,373,153,26),i.fillStyle="#fff0d6",i.font="bold 17px sans-serif",i.fillText("街角副食店",411,392),yi(i,c,[[396,397],[550,397],[560,413],[386,413]]);for(let v=0;v<7;v++)yi(i,f,[[399+v*22,397],[408+v*22,397],[403+v*23,413],[393+v*23,413]]);i.fillStyle=h,i.fillRect(403,414,112,27),i.fillStyle=_?g:l,i.fillRect(439,415,32,29);for(let v=0;v<6;v++)i.fillRect(402+v*21,437,12,8);Ht(i,u,1,[62,298],[180,306]);for(let v=0;v<4;v++){const E=77+v*24,S=Math.sin(t*1.7+v)*2;yi(i,[c,r,f,h][v],[[E,300],[E+14,301],[E+13+S,320],[E+S,319]])}for(const v of[415,431])i.strokeStyle="#5d665d",i.lineWidth=1.7,i.beginPath(),i.arc(v,454,6,0,Math.PI*2),i.stroke();Ht(i,h,2,[415,454],[423,445],[431,454],[420,454],[415,454]);for(let v=0;v<3;v++){const E=(t*(8+v*2)+v*85)%275,S=548-E,A=119+v*18+E*.61,C=1-E/550;ti(i,u,A,S+2,7*C,2*C),Ht(i,u,2*C,[A,S-5*C],[A+Math.sin(t*5+v)*4*C,S+2],[A,S-5*C],[A-Math.sin(t*5+v)*4*C,S+2]),Ht(i,[f,h,r][v],6*C,[A,S-15*C],[A,S-6*C]),ti(i,_?l:a,A,S-19*C,3*C,3.5*C)}const y=569-(t*13+52)%350,x=299+(y-300)*.12;ti(i,h,x,y,9,5),ti(i,u,x+8,y+2,3,2),ti(i,u,x-8,y+2,3,2),ti(i,r,x,y-5,3,4),Ht(i,u,2,[60,446],[72,261]),Ht(i,u,2,[602,487],[595,219]);for(let v=0;v<3;v++)i.strokeStyle=u,i.lineWidth=1,i.beginPath(),i.moveTo(68,267+v*7),i.quadraticCurveTo(325,326+v*5,595,225+v*7),i.stroke();for(const[v,E,S]of[[25,458,75],[79,521,53],[600,499,66],[638,461,50]])for(let A=0;A<15;A++){const C=A*2.4,b=S*(A%5)/6,w=Math.sin(t*.9+A*.43)*3;ti(i,A%3===0?d:p,v+Math.cos(C)*b+w,E+Math.sin(C)*b,S*.33,S*.25)}}const _c={width:1582,height:670,clearHeight:512},Fr=[{id:"morning",name:"清晨",start:5,light:"#fff0d6",strength:2.5,ambient:1.16,background:"#f8f0e7",sun:.52,night:0},{id:"noon",name:"午后",start:10,light:"#fff6df",strength:3,ambient:1.35,background:"#f8f0e7",sun:1,night:0},{id:"evening",name:"傍晚",start:17,light:"#ffc18c",strength:2,ambient:1.03,background:"#e9d5c6",sun:.42,night:0},{id:"night",name:"入夜",start:20,light:"#b3c9ee",strength:.55,ambient:.65,background:"#b7bec7",sun:0,night:1},{id:"pre-dawn",name:"凌晨",start:0,light:"#a8bce6",strength:.42,ambient:.58,background:"#a9b3c3",sun:0,night:1}],gx=Object.assign({"./assets/courtyard-live/dusk.m4a":Qv,"./assets/courtyard-live/dusk.mp4":ex,"./assets/courtyard-live/dusk.webp":tx,"./assets/courtyard-live/evening.m4a":nx,"./assets/courtyard-live/evening.mp4":ix,"./assets/courtyard-live/evening.webp":sx,"./assets/courtyard-live/morning.m4a":rx,"./assets/courtyard-live/morning.mp4":ox,"./assets/courtyard-live/morning.webp":ax,"./assets/courtyard-live/night.m4a":lx,"./assets/courtyard-live/night.mp4":cx,"./assets/courtyard-live/night.webp":hx,"./assets/courtyard-live/noon.m4a":ux,"./assets/courtyard-live/noon.mp4":dx,"./assets/courtyard-live/noon.webp":fx}),_x={morning:"morning",noon:"noon",evening:"dusk",night:"evening","pre-dawn":"night"},rl=(i,e)=>gx[`./assets/courtyard-live/${_x[i.id]}.${e}`];function Zd(i=new Date().getHours()){return Fr.reduce((e,t)=>t.start<=i&&t.start>=e.start?t:e,Fr[4])}function Do(i){return i==="auto"?Zd():Fr.find(e=>e.id===i)}function vx({onLighting:i}){const{width:e,height:t}=_c,n=document.createElement("canvas");n.width=e,n.height=t;const s=n.getContext("2d");s.fillStyle="#e8e9d8",s.fillRect(0,0,e,t);const r=new Ot(n);r.colorSpace=ut,r.anisotropy=8;const o=document.createElement("canvas");o.width=e,o.height=t;const a=o.getContext("2d"),l=document.createElement("video");l.muted=!0,l.defaultMuted=!0,l.playsInline=!0,l.loop=!0,l.preload="none";const c=new Audio;c.loop=!0,c.volume=.68,c.preload="none";let h=!1;const u=new Map;let p="auto";try{const K=localStorage.getItem("doish-window-time");Do(K)&&(p=K)}catch{}let d=Do(p),g=d,_=d,m=d,f=1,y=-1,x=0,v=0,E=!0,S=!1,A=!1,C=!1;function b(K){if(u.has(K.id))return;const ce=new Image;ce.onload=ce.onerror=()=>{E=!0},ce.src=rl(K,"webp"),u.set(K.id,ce)}function w(K){const ce=u.get(K.id);return ce?.complete&&ce.naturalWidth>0}function R(){if(F.setAttribute("aria-pressed",String(h)),F.textContent=h?"窗外声音 · 开":"窗外声音 · 关",!h||document.hidden||!C){c.pause();return}const K=rl(d,"m4a");c.getAttribute("src")!==K&&(c.src=K),c.play().catch(ce=>{ce.name==="AbortError"||c.getAttribute("src")!==K||(h=!1,R())})}function U(K){if(!K||A){l.pause();return}const ce=rl(d,"mp4");l.getAttribute("src")!==ce&&(l.src=ce,y=-1),l.play().catch(we=>{we.name==="AbortError"||l.getAttribute("src")!==ce||(A=!0,E=!0)})}l.addEventListener("loadeddata",()=>{E=!0}),l.addEventListener("error",()=>{A=!0,E=!0});function V(K){g=K,b(K)}function H(K){a.drawImage(n,0,0),m=_,f=K?0:1,d=g,l.pause(),l.removeAttribute("src"),l.load(),y=-1,A=!1,U(K),R(),E=!0}function X(){const K=u.get(d.id);if(l.readyState>=l.HAVE_CURRENT_DATA&&!A?(s.drawImage(l,0,0,e,t),y=l.currentTime):w(d)?s.drawImage(K,0,0,e,t):(s.save(),s.scale(e/640,t/560),mx(s,Math.min(Fr.indexOf(d),3),x),s.restore()),S){s.fillStyle="#566f824d",s.fillRect(0,0,e,t);for(let ce=0;ce<80;ce++){const we=ce*137.7%e,q=(ce*83.1+x*(70+ce%5*13))%(t+34)-19;s.strokeStyle=ce%4===0?"#f1faff99":"#e7f5fb47",s.lineWidth=ce%4===0?1.6:.8,s.beginPath(),s.moveTo(we,q),s.lineTo(we-5,q+12+ce%16),s.stroke()}}}const G=document.createElement("label");G.className="daylight-control",G.innerHTML='<span id="daylight-status">窗外</span><select id="daylight" aria-label="窗外时段"></select>';const B=G.querySelector("select");B.add(new Option("跟随时间","auto"));for(const K of Fr)B.add(new Option(K.name,K.id));B.value=p;const F=document.createElement("button");F.type="button",F.textContent="窗外声音 · 关",F.setAttribute("aria-pressed","false");const j=document.querySelector("#room-settings");j.insertBefore(G,document.querySelector("#motion")),j.insertBefore(F,document.querySelector("#motion"));function ae(K){const ce=Do(K);if(ce){p=K,B.value=p;try{localStorage.setItem("doish-window-time",p)}catch{}V(ce)}}B.addEventListener("change",K=>ae(K.target.value)),F.addEventListener("click",()=>{h=!h,R()}),document.addEventListener("visibilitychange",()=>{U(C&&!document.hidden),R()}),b(d);function re(K){K=K&&!document.hidden,K!==C&&(C=K,U(K),R())}function se(K,ce){ce=ce&&!document.hidden,v+=K,p==="auto"&&v>=5&&(v=0,V(Zd()));let we=E;d!==g&&u.get(g.id)?.complete&&(H(ce),we=!0),re(ce),ce&&(x+=K),f<1&&(f=ce?Math.min(1,f+K/1.4):1,E=!0,we=!0);const q=l.readyState>=l.HAVE_CURRENT_DATA&&l.currentTime!==y;if(!E&&!(ce&&(S||q||!w(d))))return;X();const Y=f*f*(3-2*f);if(Y<1&&(s.globalAlpha=1-Y,s.drawImage(o,0,0),s.globalAlpha=1),r.needsUpdate=!0,we){const fe=(_e,pe)=>tt.lerp(_e,pe,Y);_={name:d.name,sun:fe(m.sun,d.sun),light:new ke(m.light).lerp(new ke(d.light),Y),strength:fe(m.strength,d.strength),ambient:fe(m.ambient,d.ambient),background:new ke(m.background).lerp(new ke(d.background),Y),night:fe(m.night,d.night)},i({..._,color:_.light,sunlight:S?.3:_.sun})}E=!1}return{texture:r,tick:se,setMode:ae,setMotion:re,getMode:()=>p,isNight:()=>!!Do(p).night,setRain:K=>{S=K,E=!0},getRain:()=>S}}function xx({stage:i,camera:e,windowObject:t,player:n,windowView:s,toggleRecord:r,isRecordPlaying:o,setVolume:a}){const l=document.createElement("section");l.className="room-rail",l.hidden=!0,i.append(l);const c=new L,h=new L;let u=70,p;function d(m=!1){l.hidden=!0,m&&(p?.getClientRects().length?p:document.querySelector("#room-menu-toggle")).focus()}function g(){if(l.hidden)return;h.copy(c).project(e);const m=(h.x+1)*i.clientWidth/2,f=(1-h.y)*i.clientHeight/2;l.style.left=Math.max(8,Math.min(m-l.offsetWidth/2,i.clientWidth-l.offsetWidth-8))+"px",l.style.top=Math.max(8,Math.min(f+2,i.clientHeight-l.offsetHeight-8))+"px"}function _(m){p=document.activeElement;const f=m==="window",y=new Dn().setFromObject(f?t:n);y.getCenter(c),c.y=y.min.y,c.z=y.max.z;const x=f?"窗外":"唱片机";l.dataset.kind=m,l.setAttribute("aria-label",x),l.innerHTML='<header><strong></strong><button type="button" aria-label="收起">×</button></header><div class="rail-controls"></div>',l.querySelector("strong").textContent=x,l.querySelector("header button").onclick=()=>d(!0);const v=l.querySelector(".rail-controls");if(f){for(const[S,A]of[["auto","自动"],["morning","清晨"],["noon","午后"],["evening","傍晚"],["night","夜晚"]]){const C=document.createElement("button");C.textContent=A,C.dataset.mode=S,C.setAttribute("aria-pressed",String(s.getMode()===S)),C.onclick=()=>{s.setMode(S),v.querySelectorAll("[data-mode]").forEach(b=>b.setAttribute("aria-pressed",String(b===C)))},v.append(C)}const E=document.createElement("button");E.textContent="☂ 下雨",E.setAttribute("aria-pressed",String(s.getRain())),E.onclick=()=>{s.setRain(!s.getRain()),E.setAttribute("aria-pressed",String(s.getRain()))},v.append(E)}else{let S=function(){E.textContent=o()?"Ⅱ 暂停":"▶ 播放",E.setAttribute("aria-pressed",String(o()))};v.innerHTML='<i class="vinyl-mark" aria-hidden="true"></i><button type="button"></button><label>音量 <input type="range" min="0" max="100"></label>';const E=v.querySelector("button");S(),E.onclick=()=>{r(),S()};const A=v.querySelector("input");A.value=u,A.oninput=()=>{u=Number(A.value),a(u/100)}}l.hidden=!1,g(),v.querySelector("button").focus({preventScroll:!0})}return document.addEventListener("keydown",m=>{m.key==="Escape"&&!l.hidden&&d(!0)}),document.addEventListener("pointerdown",m=>{!l.hidden&&!l.contains(m.target)&&d()},!0),{open:_,close:d,position:g}}function Pu(i,e,t,n=0){i.fillStyle="#e8cfaa",i.fillRect(0,0,e,t),i.save(),i.scale(e/800,t/600),i.beginPath(),i.rect(67,54,666,492),i.clip(),i.fillStyle="#aeb6a0",i.fillRect(0,0,800,600),i.fillStyle="#dfc596",i.beginPath(),i.moveTo(58,310),i.bezierCurveTo(70,273,105,276,120,275),i.bezierCurveTo(138,245,168,245,192,252),i.bezierCurveTo(205,218,239,207,262,215),i.bezierCurveTo(286,182,334,182,354,200),i.bezierCurveTo(373,151,416,149,439,160),i.bezierCurveTo(479,101,533,98,565,122),i.bezierCurveTo(598,147,605,160,615,182),i.bezierCurveTo(666,174,700,200,710,216),i.bezierCurveTo(733,197,767,211,793,245),i.lineTo(800,385),i.lineTo(0,385),i.fill();const s=(r,o)=>{i.fillStyle=r,i.beginPath(),o(),i.lineTo(800,600),i.lineTo(0,600),i.closePath(),i.fill()};s("#969b77",()=>{i.moveTo(0,331),i.bezierCurveTo(150,313,206,342,329,397),i.bezierCurveTo(468,427,639,363,800,332)}),s("#657d70",()=>{i.moveTo(0,451),i.bezierCurveTo(191,462,282,430,424,366),i.bezierCurveTo(556,308,693,259,800,294)}),s("#8e9363",()=>{i.moveTo(0,452),i.bezierCurveTo(165,398,265,432,379,472),i.bezierCurveTo(520,433,642,359,800,389)}),s("#73774b",()=>{i.moveTo(0,459),i.bezierCurveTo(206,420,313,452,450,500),i.bezierCurveTo(594,553,710,569,800,565)});for(let r=0;r<16500;r++)i.fillStyle=r%2?"#f7e7b832":"#44392223",i.fillRect(r*127.619%800,r*55.317%600,.7+r%3*.45,1.8);if(n>0){const r=1-n/6;i.translate(65+670*r,485+Math.sin(r*12)*9),i.globalAlpha=Math.min(.8,r*9,(1-r)*9),i.fillStyle="#e8d8ae",i.beginPath(),i.ellipse(0,0,13,4,0,0,Math.PI*2),i.moveTo(-8,0),i.lineTo(-20,-6),i.lineTo(-20,6),i.fill()}i.restore()}const Du={monitor:"M5 4H19Q21 4 21 6V15Q21 17 19 17H5Q3 17 3 15V6Q3 4 5 4Z M7 21H17 M10 17L9 21 M14 17L15 21",record:"M4 14H20Q22 14 22 16V19H2V16Q2 14 4 14Z M16 14L19 6 M17 6H21 M5 14C5 10 15 10 15 14 M17 17H18",cabinet:"M3 5H21V19H3Z M12 5V19 M9 11V14 M15 11V14 M5 19V21 M19 19V21",art:"M3 4H21V20H3Z M3 16L8 11L12 15L16 10L21 16 M14 8H15",window:"M3 20V9C3 2 21 2 21 9V20Z M3 10H21 M12 10V20",lamp:"M10 11L17 5 M11 18L7 11L10 8 M5 20H17 M13 8C12 4 18 1 21 5L22 8Z M16 11L15 13 M20 11V13",leaf:"M5 20C6 15 10 9 17 6 M9 15C4 15 2 11 3 7C8 7 11 10 9 15Z M11 12C9 6 14 3 21 3C21 9 17 13 11 12Z",mug:"M3 8H16V15Q16 20 10 20Q3 20 3 15Z M16 10H19Q23 10 21 14Q20 16 16 16 M6 3V5 M12 3V5",draft:"M6 3H15L19 7V20H6Z M14 3V8H19 M9 12H16 M9 16H14",idea:"M8 17C8 14 5 13 5 9A7 7 0 0 1 19 9C19 13 16 14 16 17Z M9 21H15 M12 17V10 M10 9L12 11L14 9",bookmark:"M6 3H18V21L12 16L6 21Z M12 7V12 M9.5 9.5H14.5",guestbook:"M5 4H19Q21 4 21 6V20H5Q3 20 3 18V6Q3 4 5 4Z M7 4V20 M11 9H17 M11 13H15",fish:"M3 12C8 6 13 6 17 10L21 7V17L17 14C13 18 8 18 3 12Z M8 11H8.1",pen:"M4 20L5 15L16 4Q18 2 20 4Q22 6 20 8L9 19Z M14 6L18 10 M5 15L9 19",spoon:"M5 20L13 12 M12 9C12 5 16 2 19 4C23 7 18 13 14 13Q11 13 12 9Z",headphones:"M4 14V11A8 8 0 0 1 20 11V14 M4 13H7V20H5Q3 20 3 18V15Q3 13 4 13Z M20 13H17V20H19Q21 20 21 18V15Q21 13 20 13Z",wateringCan:"M8 10H16V19H8Z M8 11C1 11 1 18 8 17 M16 16L21 7 M19 7L23 9 M10 10V7H15",clock:"M21 12A9 9 0 1 1 3 12A9 9 0 1 1 21 12Z M12 6V12L16 14",slipper:"M3 17C3 14 6 12 9 11C12 10 12 5 17 5Q22 5 22 11Q22 16 15 18L5 19Q3 19 3 17Z M10 11Q15 11 17 16",chair:"M6 20L8 14 M17 20L15 14 M6 14H18V11H6Z M8 11V5Q8 3 10 3H14Q16 3 16 5V11"};let ol;function Mx(){if(ol)return ol;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createImageData(i,i);let s=527;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let o=0;o<n.data.length;o+=4){const a=r()<.48;n.data[o]=a?255:99,n.data[o+1]=a?251:75,n.data[o+2]=a?226:44,n.data[o+3]=r()**2*49}t.putImageData(n,0,0);for(let o=0;o<250;o++)t.fillStyle=o%2?"#8b69382c":"#fffbed7d",t.fillRect(r()*i,r()*i,1+r()*2,1);return ol=e,e}function Lu(i,e,t=0){const n=new Path2D,s=1+t,r=i-1-t,o=1+t,a=e-2.5-t,l=(o+a)/2,c=4.7+t*.24,h=4.5-t*.4;return n.moveTo(s+h,o),n.lineTo(r-h,o),n.quadraticCurveTo(r,o,r,o+h),n.lineTo(r,a-6),n.lineTo(r-6,a),n.lineTo(s+h,a),n.quadraticCurveTo(s,a,s,a-h),n.lineTo(s,l+c),n.bezierCurveTo(s+c*1.3,l+c,s+c*1.3,l-c,s,l-c),n.lineTo(s,o+h),n.quadraticCurveTo(s,o,s+h,o),n.closePath(),n}function yx(i,e,t){const n=Math.min(3,Math.max(2,window.devicePixelRatio||1));i.width=e*n,i.height=t*n;const s=i.getContext("2d");s.scale(n,n);const r=Lu(e,t);s.save(),s.translate(0,1.2),s.fillStyle="#b8a477",s.fill(r),s.restore();const o=s.createLinearGradient(0,0,0,t);o.addColorStop(0,"#fbf0d5"),o.addColorStop(.48,"#f2e6c6"),o.addColorStop(1,"#e9dbb7"),s.fillStyle=o,s.fill(r);const a=s.createPattern(Mx(),"repeat");a.setTransform(new DOMMatrix().scale(.58)),s.fillStyle=a,s.fill(r);const l=s.createLinearGradient(0,0,0,t);l.addColorStop(0,"#fff8e6"),l.addColorStop(1,"#b9a47d"),s.strokeStyle=l,s.lineWidth=.8,s.stroke(r);const c=Lu(e,t,2.25),h=s.createLinearGradient(0,0,0,t);h.addColorStop(0,"#a58b5b75"),h.addColorStop(.53,"#bda77a45"),h.addColorStop(1,"#fff6df"),s.strokeStyle=h,s.stroke(c)}function Sx(i,e){const t=i.getContext("2d");if(t.clearRect(0,0,24,24),t.lineCap=t.lineJoin="round",t.strokeStyle=t.fillStyle="#6d744c",t.lineWidth=1.65,e!=="disc"){t.stroke(new Path2D(Du[e]??Du.fish));return}t.beginPath(),t.arc(12,12,10.7,0,Math.PI*2),t.fill(),t.strokeStyle=t.fillStyle="#f4e7c7",t.lineWidth=.62;for(const n of[5.3,6.8,8.3])for(const s of[-1.3,1.84])t.beginPath(),t.arc(12,12,n,s,s+.95),t.stroke();t.beginPath(),t.arc(12,12,2.85,0,Math.PI*2),t.fill(),t.beginPath(),t.fillStyle="#6d744c",t.arc(12,12,.85,0,Math.PI*2),t.fill()}function bx(i,e=!1){const t=document.createElement("div");t.className="room-object-label",e?t.setAttribute("role","status"):t.setAttribute("aria-hidden","true"),t.innerHTML=`
    <canvas class="room-ticket-paper" aria-hidden="true"></canvas>
    <canvas class="room-ticket-icon" width="72" height="72" aria-hidden="true"></canvas>
    <i class="room-ticket-perforation" aria-hidden="true"></i>
    <span class="room-ticket-text"></span>
  `;const[n,s,,r]=t.children;s.getContext("2d").scale(3,3),i.append(t);let o,a=0;function l(c,h){if(r.textContent!==c){r.textContent=c;const u=t.offsetWidth;u!==a&&(a=u,yx(n,a,t.offsetHeight))}return h!==o&&(Sx(s,h),o=h),a/2}return{element:t,setContent:l}}function Ex(i,e){const{element:t,setContent:n}=bx(i),s=[],r=new L,o=new ke("#e8ecc0");function a(c){const h={value:0},u=new Map;for(const d of c)d.traverse(g=>{const _=g.material;if(!(!g.isMesh||g.userData.roomHoverIgnore||!_?.visible)&&!(!_.isMeshStandardMaterial&&!_.isMeshBasicMaterial)){if(!u.has(_)){const m=_.clone();m.onBeforeCompile=f=>{_.onBeforeCompile(f),f.uniforms.roomHoverAmount=h,f.uniforms.roomHoverColor={value:o},f.fragmentShader=`uniform float roomHoverAmount;
uniform vec3 roomHoverColor;
`+f.fragmentShader.replace("#include <opaque_fragment>",`
                outgoingLight += roomHoverAmount * roomHoverColor * .14;
                #include <opaque_fragment>
              `)},m.customProgramCacheKey=()=>"room-hover|"+_.customProgramCacheKey(),u.set(_,m)}g.material=u.get(_)}});const p={amount:h};return s.push(p),p}function l(c,h,u){for(const y of s){const x=y===c?.effect?1:0,v=h/(x?.11:.16);y.amount.value=u?tt.clamp(y.amount.value+(x?v:-v),0,1):x}if(t.classList.toggle("is-still",!u),!c){t.classList.remove("is-visible");return}const p=n(c.label(),c.icon);c.anchor.localToWorld(r.copy(c.hitPoint??c.anchorPoint)),r.project(e);const d=i.clientWidth,g=i.clientHeight,_=Math.min(p+8,d/2),m=tt.clamp((r.x+1)*d/2,_,d-_),f=tt.clamp((1-r.y)*g/2-10,40,g-12);t.style.left=m+"px",t.style.top=f+"px",t.classList.toggle("is-visible",Math.abs(r.x)<=1&&Math.abs(r.y)<=1&&r.z<1)}return{register:a,tick:l}}const $o=(i,e,t)=>tt.smoothstep(i,e,t),xt=(i,e,t,n)=>$o(i,e,t)*(1-$o(i,t,n));function Nt(i,e=0,t=2,n=4){const s=Math.max(0,i-e);return Math.sin(s*Math.PI*2*t)*Math.exp(-s*n)*(1-$o(i,.83,1))}const wx={桌面钢笔:"pen",搅拌匙:"spoon",桌面耳机:"headphones",主机旁的耳机:"sparePhones",墙面海报:"poster",墙上挂钟:"clock",地上的书叠:"books",倚放的黑胶:"leaningRecord",叠放的唱片:"stack",唱片封套:"sleeve",摊开的唱片:"openSleeve",布面拖鞋:"shoe",藤编阅读椅:"chair"};function Tx(){let i=null,e=null;const t=[new L(1,0,0),new L(0,1,0),new L(0,0,1)],n=new Xn;function s(){e&&(e.sheets.forEach(({apply:l})=>l(0)),e=null),i&&(i.reset(),i=null)}function r(l,c,h,u){if(s(),!h)return;e={sheets:[c,...l.filter(g=>g!==c).sort((g,_)=>g.position.distanceToSquared(c.position)-_.position.distanceToSquared(c.position))].map(g=>{if(u){const x=g.geometry.attributes.position,{width:v,height:E}=g.geometry.parameters;return{apply(S){for(let A=0;A<x.count;A++){const C=x.getX(A)/v+.5,b=.5-x.getY(A)/E;x.setZ(A,v*.24*S*b**2*(.3+.7*C))}x.needsUpdate=!0,g.geometry.computeVertexNormals()}}}const _=g.position.clone(),m=g.quaternion.clone(),f=new L(0,g.children[0].geometry.parameters.height/2,0),y=new L;return{apply(x){g.quaternion.copy(m).multiply(n.setFromAxisAngle(t[0],-.16*x)),g.position.copy(_).add(y.copy(f).applyQuaternion(m)).sub(y.copy(f).applyQuaternion(g.quaternion))}}}),started:performance.now()}}function o(l,c,h,u){if(s(),!u){h?.();return}const p=[],g=c(_=>{const m=_.position.clone(),f=_.rotation.clone(),y=_.scale.clone();return p.push(()=>{_.position.copy(m),_.rotation.copy(f),_.scale.copy(y)}),_},_=>p.push(_));i={duration:l,finish:h,apply:g,started:performance.now(),reset:()=>p.forEach(_=>_())}}function a(l,c){if(e){const m=l-e.started;for(const[f,{apply:y}]of e.sheets.entries()){const x=c?tt.clamp((m-f*53)/365,0,1):1;y(Math.sin(x*Math.PI)**2*(1-f*.1))}(!c||m>=365+53*(e.sheets.length-1))&&(e=null)}if(!i)return;const{started:h,duration:u,finish:p,apply:d,reset:g}=i,_=c?Math.min(1,(l-h)/u):1;if(_>=1){s(),p?.();return}g(),d(_)}return{play:o,playPaperGroup:r,stop:s,tick:a}}const Ax={rack:[820,(i,e)=>{const t=i.jewelCases.map(e);return n=>t.forEach((s,r)=>{const o=Nt(n,r*.041,2.8,5.2);s.rotation.z-=o*.14,s.position.y+=Math.max(0,o)*.021})}],headphones:[620,(i,e)=>{const[t,n,s,r]=i.children.map(e),o=e(n.children[0]);return a=>{const l=xt(a,0,.15,.33),c=Nt(a,.14,2.1);o.scale.y*=1-.28*l,n.position.y+=.051*Math.max(0,c)-.012*l,n.rotation.z-=.29*c,s.rotation.z-=.07*c,r.rotation.z-=.09*c,t.rotation.z+=.19*Nt(a,.29,2.2)}}],sparePhones:[520,(i,e)=>{const[t,n]=i.children.map(e);return s=>{t.scale.y*=1-.32*xt(s,0,.23,.67),n.position.x+=.014*xt(s,.1,.42,.76),n.rotation.z+=.08*Nt(s,.35)}}],pen:[470,(i,e)=>(e(i),t=>{const n=Nt(t,0,1.8);i.rotation.z+=.49*n,i.rotation.y+=.11*n,i.position.x+=.018*xt(t,0,.29,.95)})],shoe:[490,(i,e)=>{const t=e(i.children[2]);return n=>{t.scale.y*=1-.3*xt(n,0,.22,.58),t.rotation.x+=.066*Nt(n,.3)}}],art:[650,(i,e)=>(e(i),t=>{const n=.08*Nt(t,0,1.6,2.8);i.position.x+=Math.sin(n)*.39,i.rotation.z+=n})],clock:[440,(i,e)=>{const t=e(i.secondHand);return n=>{t.rotation.z-=.105*($o(n,.22,.44)+.4*Nt(n,.4,3))}}],leaf:[740,(i,e)=>{const t=e(i.children.find(s=>s.isGroup&&s.children.some(r=>r.isInstancedMesh))),n=t.children.filter(s=>s.isInstancedMesh).map(e);return s=>{t.rotation.z+=.045*Nt(s,0,1.5),n.forEach((r,o)=>r.rotation.x+=.075*Nt(s,.08+o*.047,1.65))}}],books:[550,(i,e)=>{const t=e(i.children.at(-1)),n=e(i.children.at(-2));return s=>{t.position.x+=.083*xt(s,0,.4,.98),t.rotation.y+=.12*Nt(s,0,1.3),n.position.x+=.025*xt(s,.18,.53,1)}}],stack:[620,(i,e)=>{const t=e(i.children.at(-1)),n=e(i.children.at(-2));return s=>{t.rotation.y+=.29*xt(s,0,.53,1),n.position.x+=.031*xt(s,.17,.47,.93)}}],leaningRecord:[610,(i,e)=>{e(i);const t=e(i.children.at(-1));return n=>{i.rotation.z+=.1*Nt(n,0,1.6),t.rotation.y+=.34*xt(n,.06,.44,.96)}}],sleeve:[550,(i,e)=>(e(i),t=>{i.rotation.x+=.16*Nt(t,0,1.6)})],openSleeve:[590,(i,e)=>{const[t,n,s]=i.children.map(e);return r=>{t.position.x-=.086*xt(r,0,.32,.96),n.position.x-=.086*xt(r,0,.32,.96),s.rotation.y+=.39*xt(r,.17,.59,1)}}],chair:[800,(i,e)=>{e(i);const t=e(i.children.find(n=>n.geometry?.type==="PlaneGeometry"));return n=>{i.rotation.x+=.038*Nt(n,0,1.45),t.rotation.x+=.059*Nt(n,.25,1.8)}}],sticker:[520,(i,e)=>(e(i),t=>{const n=Nt(t,0,2.6);i.rotation.y+=.21*n,i.position.z+=.011*Math.abs(n)})]},Cx=3.68,Rx=2.64,ii=1024,Sr=768;function Iu(){const i=document.createElement("canvas");return i.width=ii,i.height=Sr,i}function Uu(i,e){const t=new Ot(i);return t.wrapS=t.wrapT=Wn,t.anisotropy=8,t.colorSpace=e,t}function Px(i,e,t,n,s,r){i.save(),i.translate(e,t),i.scale(n,n),i.rotate(s),i.lineCap="round",i.strokeStyle="#7c8757",i.lineWidth=1.5,i.beginPath(),i.moveTo(-1,36),i.quadraticCurveTo(-6,14,-2,-23),i.moveTo(-2,17),i.quadraticCurveTo(11,-4,16,-14),i.moveTo(-4,21),i.quadraticCurveTo(-11,8,-19,0),i.stroke();for(const[a,l,c,h]of[[-3,23,-.85,14],[-2,17,.99,12],[-4,12,-.9,10],[7,4,1.1,10],[-12,7,-.85,9],[-3,1,-.85,8]])i.save(),i.translate(a,l),i.rotate(c),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(-7,-h*.62,0,-h),i.quadraticCurveTo(5,-h*.65,0,0),i.fillStyle=r()>.5?"#8d9a62c9":"#6f8258bd",i.fill(),i.strokeStyle="#d4d6a779",i.lineWidth=.7,i.beginPath(),i.moveTo(0,-1),i.quadraticCurveTo(-1,-h*.45,0,-h+2),i.stroke(),i.restore();const o=["#768f9dcb","#829caebd","#8ca7b4c9","#6e8ea5c7"];for(const[a,l,c]of[[-2,-25,7],[16,-15,5.7],[-20,-1,4.7]]){const h=r()*Math.PI;for(let u=0;u<5;u++){const p=h+u*Math.PI*2/5,d=c*(.62+r()*.09);i.fillStyle=o[Math.floor(r()*o.length)],i.beginPath(),i.ellipse(a+Math.cos(p)*d,l+Math.sin(p)*d,c*.59,c*.43,p,0,Math.PI*2),i.fill()}i.fillStyle="#d1c079",i.beginPath(),i.arc(a,l,c*.24,0,Math.PI*2),i.fill()}i.restore()}function Dx(i,e,t,n){i.save(),i.translate(e,t),i.rotate(n),i.strokeStyle="#8b946373",i.lineWidth=1.25,i.beginPath(),i.moveTo(0,11),i.quadraticCurveTo(-1,3,1,-5),i.stroke(),i.fillStyle="#929c6b91",i.beginPath(),i.ellipse(1,-5,2.1,3.8,.22,0,Math.PI*2),i.ellipse(-1,2,1.6,3,-.64,0,Math.PI*2),i.fill(),i.restore()}function Lx(){const i=Iu(),e=i.getContext("2d"),t=Iu(),n=t.getContext("2d");let s=30787;const r=()=>(s=s*16807%2147483647,s/2147483647);n.fillStyle="#eee0c1",n.fillRect(0,0,ii,Sr),e.fillStyle="#808080",e.fillRect(0,0,ii,Sr);for(let o=0;o<41e3;o++){const a=r()*ii,l=r()*Sr,c=.45+r()*3.6;n.fillStyle=o%3===0?"#a88a6216":"#fff9e41a",n.fillRect(a,l,c*.54,c),e.fillStyle=o%3===0?"#22222261":"#ededed69",e.fillRect(a,l,c*.57,c)}for(let o=0;o<3250;o++){const a=r()*ii,l=r()*Sr,c=2+r()*7;e.strokeStyle=o%2?"#d5d5d562":"#44444462",e.lineWidth=.6+r()*.8,e.beginPath(),e.moveTo(a,l),e.quadraticCurveTo(a+2,l+c*.27,a+(r()-.5)*3,l+c),e.stroke()}for(let o=0;o<4;o++)for(let a=0;a<4;a++){const l=128+a*256+(o%2?112:0)+(r()-.5)*29,c=89+o*192+(r()-.5)*24,h=.9+r()*.25,u=(r()-.5)*.28,p=s;for(const d of[-ii,0,ii])s=p,Px(n,l+d,c,h,u,r);if((o+a)%3!==0){const d=l+82+r()*69,g=c+31+r()*49;for(const _ of[-ii,0,ii])Dx(n,d+_,g,-u)}}return new gt({map:Uu(t,ut),bumpMap:Uu(i,ri),bumpScale:.009,roughness:.88})}function Lo(i){const e=i.geometry.attributes.position,t=i.geometry.attributes.uv;for(let n=0;n<e.count;n++)t.setXY(n,(e.getX(n)+i.position.x)/Cx,(e.getY(n)+i.position.y)/Rx);t.needsUpdate=!0}const es={left:-4.77,right:3.14,sill:2.44,spring:5,rise:.79,z:-1.86};function Io(i){const[e,...t]=i,n=new Yn;n.moveTo(...e);for(const s of t)n.lineTo(...s);return n.closePath(),n}function Ix(i,e){const t=new Xt({map:i,toneMapped:!1});return t.onBeforeCompile=n=>{n.uniforms.roomGlint=e,n.fragmentShader=`uniform float roomGlint;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
      // Each flute bends the background image sideways and catches a bright rim.
      float rib = vMapUv.x * 213.0;
      float flute = sin(rib * 6.2831853);
      vec2 bentUv = vMapUv + vec2(flute * 0.009, flute * 0.005);
      vec3 outside = texture2D(map, bentUv).rgb * 0.56;
      outside += texture2D(map, bentUv + vec2(0.004, 0.016)).rgb * 0.22;
      outside += texture2D(map, bentUv - vec2(0.004, 0.016)).rgb * 0.22;
      float light = dot(outside, vec3(0.2126, 0.7152, 0.0722));
      float rim = pow(max(0.0, cos(rib * 6.2831853 + 0.8)), 7.0);
      float gold = smoothstep(0.53, 0.97, outside.r) *
                   (1.0 - smoothstep(0.15, 0.73, outside.b));
      vec3 blue = vec3(0.024, 0.33, 0.97) * (0.19 + light * 0.58);
      blue += vec3(0.16, 0.29, 0.45) * (0.08 + light) * rim;
      float along = (vMapUv.x - (0.30 + roomGlint * 0.39)) * 20.0;
      float passingLight = sin(clamp(roomGlint,0.0,1.0)*3.141593) * exp(-along*along);
      blue += vec3(0.28,0.19,0.095) * passingLight * rim;
      diffuseColor.rgb *= mix(blue, outside * vec3(1.1, 0.88, 0.54), gold * 0.48);
    `)},t}function Ux({root:i,box:e,wood:t,wall:n,texture:s}){const{left:r,right:o,sill:a,spring:l,rise:c,z:h}=es,u=o-r,p=(r+o)/2,d=21.12,g=.13,_=-1.96,m=Array.from({length:81},(B,F)=>{const j=F/80;return[r+j*u,l+4*c*j*(1-j)]});Lo(e(r+11,21,g,(r-11)/2,10.62,_,n,0)),Lo(e(11-o,21,g,(o+11)/2,10.62,_,n,0)),Lo(e(u,a-.12,g,p,(a+.12)/2,_,n,0));const f=new wi(Io([...m,[o,d],[r,d]])),y=new Fe(f,n);y.position.z=_+g/2,Lo(y),y.receiveShadow=!0,i.add(y);const x=new nt;x.position.set(p,(a+l)/2,h),i.add(x);const v=(B,F,j,ae,re,se,K)=>e(B,F,j,ae-x.position.x,re-x.position.y,se-h,t,K,x);v(u+.18,.076,.31,p,a-.034,h+.027,.022),v(u,.115,.19,p,l,h,.017),v(u,.071,.17,p,a+.023,h,.012);for(const B of[r,o])v(.11,l-a,.21,B,(a+l)/2,h,.016);v(.069,l-a,.147,p,(a+l)/2,h+.004,.011);const E=new Li(Io([...m.map(([B,F])=>[B,F-.032]),...m.slice().reverse().map(([B,F])=>[B,F+.037])]),{depth:.16,bevelEnabled:!0,bevelSize:.023,bevelThickness:.018,bevelSegments:3}),S=E.attributes.uv;for(let B=0;B<S.count;B++)S.setXY(B,(S.getX(B)+5)/u,S.getY(B));const A=new Fe(E,t);A.position.set(-x.position.x,-x.position.y,-.077),A.castShadow=A.receiveShadow=!0,x.add(A);const C=_c.clearHeight/_c.height,b=new Fe(new Dt(u,l-a),new Xt({map:s,toneMapped:!1})),w=b.geometry.attributes.uv;for(let B=0;B<w.count;B++)w.setY(B,w.getY(B)*C);b.position.set(p,(a+l)/2,-2.02),b.userData.skipContactShadows=!0,i.add(b);const R=new wi(Io(m)),U=R.attributes.uv;for(let B=0;B<U.count;B++)U.setXY(B,(U.getX(B)-r)/u,C+(1-C)*(U.getY(B)-l)/c);const V={value:0},H=new Fe(R,Ix(s,V));H.position.z=-2.02,H.userData.skipContactShadows=!0,i.add(H);const X=new Fe(R,new vm({color:"#182d28",opacity:.24,depthWrite:!1}));X.position.z=-1.988,X.receiveShadow=!0,X.raycast=()=>{},X.userData.skipContactShadows=!0,i.add(X);const G=new Fe(new wi(Io([[r,a],[o,a],...m.slice().reverse()])),new Xt({visible:!1}));return G.geometry.translate(-p,-(a+l)/2,0),G.position.set(p,(a+l)/2,-1.985),i.add(G),{hit:G,frame:x,glint:V}}function Nx(i,e,t){const{sill:n,z:s}=es,r=e.position.clone(),o=e.quaternion.clone(),a=new Xn().setFromAxisAngle(new L(0,0,1),-.75);a.premultiply(o);const l=new L(.275,.205,.008),c=new L,h=new L(0,.48,.02),u=new L,p=new Map(t.map(H=>[H,H.position.clone().add(new L(0,.162*H.scale.y,0))])),d=new Map(t.map(H=>[H,H.children.filter(X=>X.isGroup).map(X=>({leaf:X,angle:X.rotation.x}))]));function g(H,X,G,B){const F=new Xt({color:X,opacity:G,transparent:!0,depthWrite:!1}),j=new Fe(H,F);return j.scale.setScalar(B),j.visible=!1,j.raycast=()=>{},j.userData.skipContactShadows=!0,i.add(j),j}const _=new ci(1,8,6),m=new $s(1,28),f=Array.from({length:12},(H,X)=>g(_,X%3?"#c8e6eb":"#edf8f1",.82,.014)),y=g(_,"#e3f4ec",.89,.014),x=new L,v=t.map((H,X)=>{const G=g(m,"#554329",0,1);return G.position.set(H.position.x,n+.007+X*.001,s+.102),G.rotation.x=-Math.PI/2,G}),E=Array.from({length:3},(H,X)=>{const G=g(_,"#785c42",0,1);return G.position.set(t[1].position.x+(X-1)*.12,n-.073,-1.892+X*.001),G});let S=null,A=0,C=-1/0;function b(H,X){if(S)return;const G=performance.now(),B=H===t[1]?[...t].reverse():t;S={now:G,order:B,count:G-C<17e3?Math.min(A+1,3):1,poured:!1},X||w(G)}function w(H){A=S.count,C=H,S.poured=!0}function R(H,X){const G=H-C,B=1-tt.smoothstep(G,8e3,18e3);if(v.forEach((Y,fe)=>{Y.visible=B>0,Y.material.opacity=B*(.26+A*.08),Y.scale.set((.16+A*.025)*(fe?.85:1),.073+A*.012,1)}),E.forEach((Y,fe)=>{const _e=X?tt.clamp((G-220-fe*155)/1600,0,1):1;Y.visible=A===3&&_e>0&&B>0,Y.position.y=n-.077-(X?.4:.2)*_e,Y.scale.set(.013,.033+_e*.057,.005),Y.material.opacity=B*.6}),!S)return;const F=X?H-S.now:2440,j=F>=1050,ae=p.get(S.order[0]),re=p.get(S.order[1]);u.copy(j?re:ae).add(h),u.sub(c.copy(l).multiply(e.scale).applyQuaternion(a)),F<420?e.position.lerpVectors(r,u,tt.smoothstep(F,0,420)):F<1050?e.position.copy(u):F<1340?(u.lerp(c.copy(ae).add(h).sub(V()),1-tt.smoothstep(F,1050,1340)),e.position.copy(u)):e.position.lerpVectors(u,r,tt.smoothstep(F,1900,2440));const se=tt.smoothstep(F,150,420)*(1-tt.smoothstep(F,1820,2370));e.quaternion.copy(o).slerp(a,se),c.copy(l).multiply(e.scale).applyQuaternion(e.quaternion).add(e.position);const K=j?re:ae,ce=F>=415&&F<1e3||F>=1340&&F<1850;f.forEach((Y,fe)=>{if(Y.visible=ce,!ce)return;const _e=(F*1.8+fe*31)%350/350;Y.position.lerpVectors(c,K,_e),Y.position.y+=.1*Math.sin(_e*Math.PI),Y.position.x+=Math.sin(fe*2.1)*_e*.034,Y.scale.set(.012,.023,.012)});const we=tt.smoothstep(F,1900,2070),q=F>=1850&&F<2070;q||x.copy(c),y.visible=q,q&&(y.position.lerpVectors(x,re,we),y.scale.set(.012,.02,.012)),S.order.forEach((Y,fe)=>{d.get(Y).forEach(({leaf:_e,angle:pe},Ve)=>{const Xe=(fe?1480:540)+Ve*9,I=Math.max(0,F-Xe),ee=F>=2440?0:Math.sin(I*.025)*Math.exp(-I/145);_e.rotation.x=pe+.18*ee})}),F>=1820&&!S.poured&&w(H),F>=2440&&(e.position.copy(r),e.quaternion.copy(o),S=null)}const U=new L;function V(){return U.copy(l).multiply(e.scale).applyQuaternion(a)}return{play:b,tick:R}}function Fx({root:i,canvas:e,camera:t,controls:n,box:s,mat:r,wood:o,cream:a,cabinetDoors:l,deskHeight:c,windowView:h,mountedWindow:u,monitor:p,tower:d,powerButton:g,computerCue:_,rack:m,collectionUI:f,setLocked:y,player:x,furniture:v,toggleDay:E,toggleComputer:S,computerLabel:A,toggleRecord:C,isRecordPlaying:b,setVolume:w}){const R=matchMedia("(prefers-reduced-motion: reduce)").matches,U=e.parentElement,V=Ex(U,t),H=Tx(),X=[],G=[!1,!1,!1];let B=null,F=null,j=null,ae=0,re=0,se=null,K=!R;const ce=(M,D,N)=>H.play(M,D,N,K),we=(M,D,N)=>()=>{const[z,O]=Ax[D];ce(z,(Q,ie)=>O(M,Q,ie),N)};function q(M,D,N,z,{available:O=()=>!0,parts:Q=[M],anchor:ie=M,atHit:ve=!1,movesOnClick:me=!1}={}){ie.updateWorldMatrix(!0,!0);const Ae=new Dn().setFromObject(ie),Re=ie.worldToLocal(Ae.getCenter(new L).setY(Ae.max.y)),Ie={object:M,label:typeof D=="function"?D:()=>D,icon:N,action:z,available:O,parts:Q,anchor:ie,anchorPoint:Re,atHit:ve,movesOnClick:me,effect:V.register(Q)};return X.push(Ie),Ie}const Y=r("#e4dcc6",.9);r("#727c65",.8);function fe(M,D=960,N=440){const z=document.createElement("canvas");z.width=D,z.height=N,M(z.getContext("2d"),D,N);const O=new Ot(z);return O.colorSpace=ut,O}function _e(M,D,N,z,O){M.fillStyle=O,M.beginPath(),M.ellipse(D,N,z,z*.35,0,0,Math.PI*2),M.fill(),M.beginPath(),M.moveTo(D-z*.8,N),M.lineTo(D-z*1.45,N-z*.42),M.lineTo(D-z*1.45,N+z*.42),M.closePath(),M.fill(),M.fillStyle="#f3eddd",M.beginPath(),M.arc(D+z*.55,N-z*.05,z*.055,0,Math.PI*2),M.fill()}const pe=new nt;pe.position.set(4.04,3.86,-1.82),pe.scale.setScalar(.6),i.add(pe),s(1.82,1.4,.08,0,0,0,o,.022,pe),s(1.73,1.31,.016,0,0,.042,r("#956c43",.68),.01,pe);const Ve=fe(Pu,800,600),Xe=new gt({map:Ve,roughness:.94}),I=new Fe(new Dt(1.67,1.25),Xe);I.position.z=.054,I.receiveShadow=!0,pe.add(I);let ee=0;function J(M,D=0){if(!ee){Pu(M,800,600,D);return}M.fillStyle="#d9d3bd",M.fillRect(0,0,800,600),M.fillStyle="#2f4e52",M.fillRect(67,54,666,492),M.save(),M.beginPath(),M.rect(67,54,666,492),M.clip(),M.fillStyle="#cabb90",M.beginPath(),M.arc(565,162,36,0,Math.PI*2),M.fill(),M.strokeStyle="#a0ada0",M.lineWidth=2;for(let O=0;O<23;O++){const Q=246+O*15;M.beginPath(),M.moveTo(60,Q),M.bezierCurveTo(231,Q-160,311,Q+113,463,Q-4),M.bezierCurveTo(538,Q-68,632,Q-75,743,Q-28),M.stroke()}D>0&&_e(M,120+555*(1-D/6),428,11,"#e6d5a7"),M.restore()}function ne(){J(Ve.image.getContext("2d"),re),Ve.needsUpdate=!0}function te(){Ye(ee?"夜色等高线":"午后的山景","",()=>{const M=document.createElement("canvas");M.width=800,M.height=600,J(M.getContext("2d")),M.className="life-painting",M.setAttribute("role","img"),M.setAttribute("aria-label",ee?"墨蓝底色上的淡金月亮与山形线条":"奶油色纸面上的墨绿叠山和浅金色云层"),xe.append(M),mt(ee?"换回午后山景":"换成夜色等高线",()=>{ee=1-ee,ne(),te()})})}const be=we(pe,"art",te);q(pe,"查看挂画","art",be);const de=u.hit,Me=xx({stage:U,camera:t,windowObject:de,player:x,windowView:h,toggleRecord:C,isRecordPlaying:b,setVolume:w}),He=()=>ce(630,(M,D)=>{const{glint:N}=u;return D(()=>N.value=0),z=>{N.value=z}},dn);q(de,"查看窗外","window",He,{parts:[u.frame],atHit:!0}),l.forEach(({door:M},D)=>{q(M,()=>G[D]?"关闭柜门":D===2?"打开右侧柜门":"打开柜门","cabinet",()=>{const N=()=>{G[D]=!G[D]};if(G[D]){H.stop(),N();return}ce(155,z=>{const O=z(M.children[1]);return Q=>{O.position.z-=.018*xt(Q,0,.47,1)}},N)},{movesOnClick:!0})});const ze=we(m,"rack",f.open),P=q(m,"打开光盘集","disc",ze);f.setRackAction(ze);const T=()=>Me.open("player");q(x,"打开唱片机","record",()=>{C(),ce(630,()=>()=>{},T)});const W=()=>ce(490,(M,D)=>(D(()=>_.screen=0),N=>{_.screen=-.23*xt(N,0,.16,.31)+.55*xt(N,.18,.49,1)}),S),Z=()=>ce(450,(M,D)=>(M(g),D(()=>_.power=0),N=>{g.position.z-=.012*xt(N,0,.24,.48),_.power=1.8*xt(N,.22,.55,1)}),S),ue=()=>ce(350,M=>{const D=M(v.shade);return N=>{D.rotation.z-=.23*Nt(N,0,1.35)}},E);q(p,A,"monitor",W,{atHit:!0}),q(d,A,"monitor",Z,{atHit:!0}),q(v.lamp,()=>h.isNight()?"切换日间":"切换夜间","lamp",ue),q(v.plant,"窗边藤蔓","leaf",we(v.plant,"leaf"),{atHit:!0}),q(v.mug,"咖啡杯","mug",()=>Ne());const $=M=>v.props.labels.find(D=>D.label===M).object,De=[$("窗台盆栽"),$("窗台小盆栽")],ye=$("黄铜浇水壶"),Le=Nx(v.props.group,ye,De);function Ne(M){ce(M?660:690,(D,N)=>{const{mug:z,liquid:O,ripples:Q}=v;return D(M??z),D(O),N(()=>Q.forEach(ie=>ie.material.opacity=0)),ie=>{M?M.rotation.z+=.23*Nt(ie,0,1.65):z.position.x+=.019*xt(ie,0,.21,.48),O.rotation.z+=.056*Nt(ie,.17,1.68),Q.forEach((ve,me)=>{ve.scale.setScalar(.25+.98*Math.max(0,Math.min(1,(ie-.21-me*.13)/.52))),ve.material.opacity=.48*xt(ie,.21+me*.13,.39+me*.13,.78+me*.13)})}})}const ge=new Map;v.props.group.traverse(M=>{M.isMesh&&ge.set(M,null)});const Te=new Map([["手写便签",{label:"手写便签",curl:!0}],["墙上照片",{label:"墙上照片",curl:!1}]]);for(const[M,D]of Te)D.objects=v.props.labels.filter(N=>N.label===M).map(N=>N.object),D.effect=V.register(D.objects);for(const{object:M,label:D,icon:N}of v.props.labels){M.updateWorldMatrix(!0,!0);const z=new Dn().setFromObject(M),O=M.worldToLocal(z.getCenter(new L).setY(z.max.y)),Q=Te.get(D),ie=Q?()=>H.playPaperGroup(Q.objects,M,K,Q.curl):M===ye||De.includes(M)?()=>{H.stop(),Le.play(M,K)}:D==="搅拌匙"?()=>Ne(M):D==="墙面海报"?()=>H.playPaperGroup([M],M,K,!1):we(M,wx[D]),ve={object:M,label:()=>Q?.label??D,icon:N,action:ie,anchor:M,anchorPoint:O,available:()=>!0,effect:Q?.effect};M.traverse(me=>{me.isMesh&&ge.set(me,ve)})}function Ge(M,D,N,z,O,Q,ie,ve){const me=ie===null,Ae=me?.34:.46,Re=new nt;Re.position.set(M,D,N),i.add(Re),me&&(Re.rotation.y=.18);const Ie=r(Q,me?.86:void 0);s(.65,.012,Ae,0,-.039,0,Ie,.006,Re),s(.035,.082,Ae,-.306,0,0,Ie,.014,Re),s(.6,.052,Ae-.03,.01,-.004,.005,Y,.006,Re);const je=new nt;je.position.set(-.302,.039,0),Re.add(je),s(.628,.012,Ae,.312,0,0,Ie,.006,je);const it=Array.from({length:3},(Ze,Je)=>{const bt=new nt;return bt.position.set(-.288,.024+Je*.003,0),Re.add(bt),s(.585,.002,Ae-.026,.296,0,0,Y,7e-4,bt),bt}),dt=z==="灵感"?["#879b78","#bc9a68","#84a6a7"].map((Ze,Je)=>s(.05,.003,.044,.271,.032,(Je-1)*.092,r(Ze,.91),.001,Re)):[],ct=fe((Ze,Je,bt)=>{me?(Ze.fillStyle="#e9d6ab",Ze.beginPath(),Ze.roundRect(105,93,302,174,9),Ze.fill(),Ze.strokeStyle="#8b694a",Ze.lineWidth=2,Ze.strokeRect(117,105,278,150)):(Ze.strokeStyle="#293a3170",Ze.lineWidth=2,Ze.strokeRect(16,16,Je-32,bt-32)),Ze.fillStyle=me?"#533e2d":"#293a31",Ze.font=me?'600 64px "Microsoft YaHei"':'48px "Microsoft YaHei"',Ze.textAlign="center",Ze.fillText(z,Je/2,bt/2+16)},512,360),st=new Fe(new Dt(.6,Ae-.04),new Xt({map:ct,transparent:!0,depthWrite:!1}));st.rotation.x=-Math.PI/2,st.position.set(.302,.008,0),je.add(st);const Be={group:Re,index:ie,title:z,showContent:ve,coverHinge:je,topLeaves:it,tabs:dt};return Be.target=q(Re,z,O,()=>lt(Be),{available:()=>me||G[ie]}),Be}const Oe=[Ge(-.92,.808,-.38,"草稿","draft","#748b76",0,()=>fn("草稿")),Ge(-.88,.416,-.33,"灵感","idea","#ad8b64",0,()=>fn("灵感")),Ge(.78,.808,-.4,"收藏","bookmark","#7b8b9f",1,()=>fn("收藏")),Ge(-1.66,c+.045,-.25,"访客簿","guestbook","#9c7967",null,di)],Ee=fe((M,D,N)=>{M.fillStyle="#eee4c7",M.beginPath(),M.ellipse(D/2,N/2,D*.47,N*.43,-.13,0,Math.PI*2),M.fill(),_e(M,D*.52,N*.5,D*.23,"#6c8a77")},256,160),We=new Fe(new Dt(.23,.15),new Xt({map:Ee,transparent:!0}));We.position.copy(p.localToWorld(new L(-.4,.34,.34))),We.rotation.z=-.18,i.add(We);const k=we(We,"sticker",()=>{re=K?6:0});q(We,"小鱼贴纸","fish",k);const oe=document.createElement("dialog");oe.className="life-dialog",oe.setAttribute("aria-labelledby","life-title"),oe.innerHTML='<button class="life-close" aria-label="关闭，回到房间">×</button><h2 id="life-title"></h2><p class="life-description"></p><div class="life-body"></div>',document.body.append(oe);const xe=oe.querySelector(".life-body");let Ue=null;oe.querySelector(".life-close").onclick=Pe,oe.addEventListener("cancel",M=>{M.preventDefault(),Pe()}),oe.addEventListener("click",M=>{if(M.target!==oe)return;const D=oe.getBoundingClientRect();(M.clientX<D.left||M.clientX>D.right||M.clientY<D.top||M.clientY>D.bottom)&&Pe()});const Se=oe.querySelector("h2"),le=oe.querySelector(".life-description");oe.addEventListener("close",()=>{oe.open||se||(y(!1),Ue?.focus?.({preventScroll:!0}))});function Pe(){se?.state==="shown"&&(se.state="returning",se.started=performance.now(),U.inert=!0),oe.close()}function Ye(M,D,N){const z=oe.open;!z&&!se&&(Ue=document.activeElement),Se.textContent=M,le.textContent=D,le.hidden=!D,xe.replaceChildren(),N?.(),z||(oe.classList.toggle("life-unfold",!!se),oe.classList.toggle("life-still",!K),y(!0),U.inert=!1,oe.showModal()),oe.scrollTop=0,oe.querySelector(".life-close").focus({preventScroll:!0})}function lt(M,D=!1){if(se)return;H.stop();const N=D&&M.index!==null&&!G[M.index]?.35:0;M.index!==null&&(G[M.index]=!0),oe.open||(Ue=document.activeElement);const{group:z}=M;se={item:M,state:"leaving",started:performance.now(),openDelay:N,start:z.position.clone(),rotation:z.quaternion.clone()},oe.open&&oe.close(),y(!0),U.inert=!0}function ot(){if(!se)return;const{item:M,start:D,rotation:N,state:z}=se,O=innerWidth<=740,Q=(performance.now()-se.started)/1e3,ie=M.index===null?.95:.9,ve=z==="shown"||!K?1:Math.min(1,Q/(z==="leaving"?ie+se.openDelay:.52)),me=z==="returning"?1-ve:ve,Ae=z==="leaving"?Math.max(0,(me*(ie+se.openDelay)-se.openDelay)/ie):me,Re=K?xt(Ae,.07,.37,.84):0;M.coverHinge.rotation.z=Re*(M.index===null?.28:.16),M.topLeaves.forEach((yn,vt)=>{yn.rotation.z=(M.title==="收藏"?.095:.069)*xt(Ae,.13+vt*.054,.43+vt*.054,.82+vt*.04),yn.position.z=M.title==="草稿"?.029*xt(Ae,.05+vt*.03,.31+vt*.046,.74+vt*.05):0}),M.tabs.forEach((yn,vt)=>{yn.position.x=.271+.064*xt(Ae,.07+vt*.07,.38+vt*.07,.76+vt*.07)});const Ie=tt.smoothstep(Ae,.27,1),je=tt.smoothstep(Ae,0,.27),it=2.3,dt=2*it*Math.tan(tt.degToRad(t.getEffectiveFOV()/2)),ct=new L((O?0:-.55)*dt*t.aspect/2,(O?.58:.1)*dt/2,-it).applyQuaternion(t.quaternion).add(t.position),st=t.quaternion.clone().multiply(new Xn().setFromAxisAngle(new L(1,0,0),Math.PI/2)),Be=D.clone();Be.z+=je*(M.index===null?.34:1.2);const Ze=tt.smoothstep(Ae,M.index===null?.17:.07,.35);Be.y+=Ze*(M.index===null?.27:.12),M.group.position.lerpVectors(Be,ct,Ie),M.group.position.y+=Math.sin(Ie*Math.PI)*.28,M.group.quaternion.copy(N).slerp(st,Ie);const Je=M.title==="访客簿"?-.17:M.title==="灵感"?.12:-.07;M.group.rotateZ(Je*Math.sin(Ie*Math.PI));const bt=dt*(O?.19:.27)/.65;M.group.scale.setScalar(tt.lerp(1,bt,Ie)),ve===1&&z==="leaving"?(se.state="shown",M.showContent()):ve===1&&z==="returning"&&(se=null,U.inert=!1,y(!1),Ue?.focus?.({preventScroll:!0}))}function mt(M,D,N=xe){const z=document.createElement("button");return z.textContent=M,z.onclick=D,N.append(z),z}function dn(){Me.open("window")}function or(M){const D=document.createElement("nav");D.className="book-tabs",D.setAttribute("aria-label","柜内手册"),xe.append(D);for(const N of["草稿","灵感","收藏","访客簿"])mt(N,()=>N==="访客簿"?di():fn(N),D).setAttribute("aria-pressed",String(N===M))}function fn(M){Ye(M,M==="草稿"?"小鱼的形状练习 · 两页示例":M==="灵感"?"取自房间的三种颜色":"留给以后收录的票根和旧物。",()=>{or(M);const D=document.createElement("div");if(D.className="life-sketch",xe.append(D),M==="草稿"){let N=0;const z=document.createElement("canvas");z.width=760,z.height=380,D.append(z);const O=document.createElement("p");D.append(O);const Q=()=>{const ie=z.getContext("2d");ie.fillStyle="#e9e2cf",ie.fillRect(0,0,760,380),ie.strokeStyle="#738371",ie.lineWidth=2;for(let ve=0;ve<5;ve++)ie.beginPath(),ie.ellipse(130+ve*125,160+Math.sin(ve)*35,50,20+N*8,-.2,0,Math.PI*2),ie.stroke();if(N)for(let ve=0;ve<5;ve++)_e(ie,130+ve*125,160+Math.sin(ve)*35,40,"#829782");O.textContent=N?"形状慢慢变成了小鱼。示意页，等待真实创作替换。":"从几条随手画的弧线开始。示意草稿，并非个人作品档案。"};Q(),mt("翻一页",()=>{N=1-N,Q()})}else if(M==="灵感")for(const[N,z]of[["柜门","#8d9d84"],["纸页","#d5c9ad"],["水面","#7d9b9b"]]){const O=document.createElement("span");O.className="life-swatch",O.style.background=z,O.textContent=N+" "+z,D.append(O)}else D.textContent="收藏暂为空。";mt("放回柜子",Pe)})}let xn=[];try{const M=JSON.parse(localStorage.getItem("doish-guestbook-v1")||"[]");Array.isArray(M)&&(xn=M.filter(D=>D&&typeof D.note=="string"&&typeof D.stamp=="string"&&typeof D.date=="string").slice(-30))}catch{}function di(){Ye("访客簿","留言保存在当前浏览器。",()=>{or("访客簿");const M=document.createElement("form");M.className="life-guestform",xe.append(M);const D=document.createElement("div");D.className="life-options",M.append(D);let N="小鱼";for(const me of["小鱼","一片叶子","一杯茶"]){const Ae=mt(me,()=>{N=me,D.querySelectorAll("button").forEach(Re=>Re.setAttribute("aria-pressed",String(Re===Ae)))},D);Ae.type="button",Ae.setAttribute("aria-pressed",String(me===N))}const z=document.createElement("label");z.textContent="留一句话（可选，最多 80 字）",M.append(z);const O=document.createElement("textarea");O.maxLength=80,O.rows=2,O.placeholder="今天也来这里坐了一会儿。",O.setAttribute("aria-label","访客簿留言"),z.append(O);const Q=mt("盖章，留下这次停留",()=>{},M);Q.type="submit";const ie=document.createElement("p");ie.setAttribute("role","status"),M.append(ie),M.onsubmit=me=>{me.preventDefault();const Ae={stamp:N,note:O.value.trim().slice(0,80),date:new Date().toLocaleString("zh-CN")},Re=[...xn,Ae].slice(-30);try{localStorage.setItem("doish-guestbook-v1",JSON.stringify(Re)),xn=Re,di(),xe.querySelector("[role=status]").textContent="已盖章，保存在这个浏览器里。"}catch{ie.textContent="浏览器暂时无法保存，请允许本地存储后再试。"}};const ve=document.createElement("div");ve.className="life-entries",xe.append(ve);for(const me of[...xn].reverse()){const Ae=document.createElement("article"),Re=document.createElement("strong"),Ie=document.createElement("p"),je=document.createElement("small");Re.textContent=me.stamp,Ie.textContent=me.note||"来这里坐了一会儿。",je.textContent=me.date,Ae.append(Re,Ie,je),ve.append(Ae)}if(!xn.length){const me=document.createElement("p");me.textContent="本子还是空白的，第一枚章留给你。",ve.append(me)}xn.length&&mt("清空这个浏览器的记录",()=>{Ye("清空本地访客簿？","只会删除这个浏览器里的记录，清空后无法恢复。",()=>{mt("保留记录",di),mt("确认清空",()=>{try{localStorage.removeItem("doish-guestbook-v1"),xn=[],di()}catch{le.textContent="暂时无法清空记录。"}})})})})}const Bi=document.createElement("button");Bi.className="life-explore",Bi.textContent="逛逛房间",Bi.onclick=()=>Ye("逛逛房间","",()=>{mt("打开电脑",()=>{Pe(),W()}),mt(h.isNight()?"台灯 · 回到日间":"台灯 · 切到夜间",()=>{Pe(),ue()}),mt("窗边 · 推窗与晴雨",()=>{Pe(),He()}),mt("打开唱片机",()=>{Pe(),T()}),Oe.forEach(M=>mt(M.title,()=>lt(M,!0))),mt("找找小鱼贴纸",()=>{Pe(),k()}),mt("看看墙上的画",()=>{Pe(),be()})}),document.querySelector("#room-settings").append(Bi);const gs=document.querySelector("#room-shortcuts");for(const[M,D]of[["光盘架",ze],["电脑",W],["窗边",He],["唱机",T],["柜内",()=>lt(Oe[0],!0)]])mt(M,()=>{document.querySelector("#room-menu-toggle").click(),D()},gs);document.querySelector("#room-menu-toggle").addEventListener("click",()=>Me.close());const ar=new Od,ki=new he;let Mn=null,Zn=null,jr=0;function lr(M){if(!n.enabled)return null;const D=e.getBoundingClientRect();ki.set((M.clientX-D.left)/D.width*2-1,1-(M.clientY-D.top)/D.height*2),ar.setFromCamera(ki,t);for(const N of ar.intersectObjects(i.children,!0)){const z=N.object;let O=!0;for(let ie=z;ie;ie=ie.parent)if(!ie.visible){O=!1;break}if(!O)continue;if(ge.has(z)){const ie=ge.get(z);if(ie)return ie;continue}const Q=X.find(ie=>ie.available()&&(z===ie.object||ie.parts.some(ve=>xa(ve,z))));if(Q)return Q.atHit&&Q!==B&&(Q.hitPoint=Q.anchor.worldToLocal(N.point)),Q;if(z.material?.visible!==!1&&!z.material?.transparent&&!z.userData.skipContactShadows)break}return null}function xa(M,D){for(let N=D;N;N=N.parent)if(N===M)return!0;return!1}function Zr(){B=null,F=null,Zn=null,e.style.cursor=""}function Kr(M){B=M&&!Mn?lr(M):null,e.style.cursor=B?.action?"pointer":""}e.addEventListener("pointerdown",M=>{Mn={x:M.clientX,y:M.clientY}}),e.addEventListener("pointerup",M=>{const D=lr(M),N=Mn&&Math.hypot(M.clientX-Mn.x,M.clientY-Mn.y)<6;Mn=null,Zn=M.pointerType==="touch"?null:M,B=M.pointerType==="touch"||N&&D?.movesOnClick?null:lr(M),N&&D?.action&&(F=D,ae=performance.now()+700,D.action()),e.style.cursor=n.enabled&&B?.action?"pointer":""}),e.addEventListener("pointercancel",()=>{Mn=null,Zr()}),e.addEventListener("pointermove",M=>{F=null,Zn=M.pointerType==="touch"?null:M,Kr(Zn)}),e.addEventListener("pointerleave",Zr);let Ma=0;return{hovered:M=>n.enabled&&j?.object===M,tick(M,D){Me.position(),K=D&&!R;const N=performance.now();H.tick(N,K),Le.tick(N,K),N>=ae&&(F=null);let z=!1;l.forEach(({hinge:O},Q)=>{const ie=G[Q]?-1.95:0;if(O.rotation.y===ie)return;z=!0;const ve=tt.damp(O.rotation.y,ie,7,M);O.rotation.y=K&&Math.abs(ve-ie)>.006?ve:ie,O.updateWorldMatrix(!0,!0)}),n.enabled&&Zn&&!Mn&&!F&&z&&N>=jr&&(Kr(Zn),jr=N+60),ot(),j=n.enabled?(B?.available()?B:null)??F??(f.rackHasFocus()?P:null):se?.state==="leaving"&&N-se.started<550?se.item.target:null,V.tick(j,M,K),re>0&&(re=Math.max(0,re-M),K&&(++Ma%4===0||re===0)&&ne())}}}function Ox(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new St;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let p=0;p<i.length;++p){const d=i[p].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[p].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Nu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][p]);const g=Nu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Nu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new ln(o,t,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<t;g++){const _=h.getComponent(p,g);a.setComponent(p+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const Fu=[[[0,0],[-.18,.05],[-.32,.21],[-.34,.43],[-.26,.66],[-.11,.87],[.035,1],[.17,.78],[.31,.57],[.34,.36],[.25,.15]],[[0,0],[-.25,.065],[-.34,.28],[-.31,.55],[-.23,.72],[-.12,.86],[-.04,1],[.14,.88],[.26,.69],[.29,.48],[.24,.22],[.13,.06]],[[0,.05],[-.16,.01],[-.31,.12],[-.39,.33],[-.32,.6],[-.16,.83],[.03,1],[.22,.8],[.35,.57],[.36,.32],[.29,.13],[.16,.04]],[[0,0],[-.15,.09],[-.23,.34],[-.22,.6],[-.14,.83],[-.02,1],[.11,.82],[.2,.62],[.23,.38],[.16,.15]]],Ou=[[[0,.05],[-.2,.015],[-.34,.1],[-.43,.21],[-.345,.29],[-.31,.36],[-.46,.47],[-.58,.65],[-.38,.635],[-.23,.55],[-.13,.62],[-.09,.79],[.035,1],[.17,.78],[.23,.6],[.3,.565],[.43,.65],[.6,.67],[.5,.48],[.33,.37],[.37,.29],[.46,.18],[.28,.075],[.14,.025]],[[0,0],[-.16,.025],[-.32,.16],[-.39,.33],[-.54,.59],[-.39,.57],[-.27,.51],[-.16,.56],[-.14,.73],[-.035,1],[.13,.81],[.19,.63],[.24,.55],[.38,.6],[.54,.72],[.5,.49],[.39,.31],[.29,.16],[.15,.06]],[[0,.065],[-.15,.045],[-.34,.1],[-.49,.245],[-.36,.28],[-.35,.39],[-.57,.57],[-.61,.73],[-.38,.65],[-.23,.56],[-.15,.62],[0,1],[.17,.79],[.22,.6],[.31,.57],[.46,.63],[.58,.61],[.47,.44],[.32,.35],[.35,.27],[.43,.16],[.23,.08]]];function zx(i,e,t){const n=i.map(([g,_])=>new he(g,_)),r=new ss(n.map(({x:g,y:_})=>new L(g,_,0)),!0,"centripetal").getPoints(e?54:24).slice(0,-1),o=.37,a=(g,_,m)=>{const f=Math.exp(-Math.abs(g)*(e?4.2:7))*Math.sin(Math.PI*_)*.083,y=(.14-t*.06)*_**3,x=g*(.25+t*.08)*Math.sin(4.1*_+t),v=Math.sin(_*21+g*13+t*.9)*.021*m**4;return f+y-g*g*.36+x+v},l=[0,o,a(0,o,0)],c=[.5,o],h=[],u=r.length,p=e?[.17,.38,.61,.82,1]:[.26,.54,.79,1];for(const g of p)for(const _ of r){const m=_.x*g,f=o+(_.y-o)*g;l.push(m,f,a(m,f,g)),c.push(m/1.38+.5,f)}for(let g=0;g<u;g++){const _=g+1,m=(g+1)%u+1;h.push(0,m,_);for(let f=0;f<p.length-1;f++){const y=f*u,x=y+u;h.push(y+_,y+m,x+m,y+_,x+m,x+_)}}const d=new St;return d.setAttribute("position",new Ke(l,3)),d.setAttribute("uv",new Ke(c,2)),d.setIndex(h),d.computeVertexNormals(),d}function Bx(i,e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.scale(2,2);const s=n.createLinearGradient(21,23,119,113);s.addColorStop(0,"#9fa982"),s.addColorStop(.39,"#d6dfbb"),s.addColorStop(.66,"#c3d1ae"),s.addColorStop(1,"#9eac88"),n.fillStyle=s,n.fillRect(0,0,128,128);for(let l=0;l<5600;l++)n.fillStyle=l%3?"#e9f7ca22":"#52613116",n.fillRect(e()*128,e()*128,.14+e()*1.36,.23+e()*.8);const r=(l,c,h,u,p,d)=>{n.beginPath(),n.moveTo(l,c),n.bezierCurveTo(l*.7+h*.3,c-1,h*.85+l*.15,u+7,h,u),n.lineWidth=p,n.lineCap="round",n.strokeStyle=d,n.stroke()},o=n.createLinearGradient(0,126,0,2);o.addColorStop(0,"#fff5bc"),o.addColorStop(.7,"#fff9cfe9"),o.addColorStop(1,"#fffce300"),r(64,125,65,2,i?2.3:1.65,o);for(const l of[-1,1]){for(let c=0;c<7;c++){const h=112-c*13+(e()-.5)*7,u=64+l*((i?44:33)*Math.sin(Math.PI*(c+1)/9));r(64,h,u,h-18-e()*7,.72,"#fcffe2b8"),r(64+(u-64)*.59,h-7,u+l*2,h+1,.32,"#feffdfa0")}i&&(r(64,121,64+l*53,43,1.85,"#fff5cde6"),r(64,121,64+l*38,101,1.2,"#fff3bebc"),r(64+l*26,84,64+l*27,63,.63,"#f9feda95"))}const a=new Ot(t);return a.colorSpace=ut,a.anisotropy=4,a}function kx(i,e){const t=new un({map:Bx(i,e),roughness:i?.57:.74,clearcoat:i?.21:.07,clearcoatRoughness:.52,side:yt});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",Qe.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );",`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
        float leafBacklight = max( dot( -geometryNormal, directLight.direction ), 0.0 );
        float leafScatter = leafBacklight * 0.26 + (1.0 - abs(dotNL)) * 0.045;
        reflectedLight.directDiffuse += directLight.color * leafScatter *
          BRDF_Lambert( material.diffuseColor * vec3( 1.17, 1.02, 0.59 ) );`))},t}function Hx(i){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#ae6039",t.fillRect(0,0,256,256);for(let s=0;s<5800;s++){t.fillStyle=s%3?"#f9c79a30":"#66381d31";const r=.5+i()*(s%17===0?6:2);t.fillRect(i()*256,i()*256,r*1.25,r)}const n=new Ot(e);return n.colorSpace=ut,n}function Vx(i){const e=new nt,t=new nt,n=es.right+.73,s=-.93;t.position.set(n,.12,s),i.add(e),e.add(t);const r=new Yc("#ffdf9d",0,6.2,.49,.76,0);r.position.set(5.47,6.22,1.35),r.target.position.set(3.19,4.6,-1.65),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.35,r.shadow.camera.far=7,r.shadow.normalBias=.009,r.shadow.bias=-3e-4,r.shadow.radius=4,r.shadow.autoUpdate=!1,r.shadow.needsUpdate=!0,e.add(r,r.target);let o=197889;const a=()=>(o=o*16807%2147483647,o/2147483647),l=Hx(a),c=new Fe(new kr([[0,.013],[.265,.013],[.32,.042],[.375,.11],[.41,.2],[.414,.29],[.404,.357],[.42,.374],[.421,.398],[.407,.413],[.382,.408],[.373,.386],[.374,.344],[.35,.24],[0,.24]].map(([se,K])=>new he(se,K)),64),new gt({map:l,bumpMap:l,bumpScale:.018,roughness:.79}));c.castShadow=c.receiveShadow=!0,t.add(c);const h=new Fe(new Ci(.38,.36,.022,48),new gt({color:"#493624",roughness:1}));h.position.y=.355,h.receiveShadow=!0,t.add(h),hs(i,{x:n,y:.122,z:s,width:.74,depth:.74,radius:.3,spread:.24,opacity:.43});const u=[],p=[],d=[],g=[],_=[],m=[],f=["#465723","#55712a","#637934","#74893b","#5b7536"].map(se=>new ke(se)),y=["#8ca337","#a5b641","#b8bc4a","#a9bc56"].map(se=>new ke(se)),x=se=>new L(...se);function v(se,K,ce=p,we=.54){const q=new ss(se.map(x)),Y=Math.max(6,se.length*5),fe=new Hr(q,Y,K,6),_e=fe.attributes.position;for(let pe=0;pe<=Y;pe++){const Ve=pe/Y,Xe=q.getPointAt(Ve),I=1-Ve*we;for(let ee=0;ee<=6;ee++){const J=pe*7+ee;_e.setXYZ(J,Xe.x+(_e.getX(J)-Xe.x)*I,Xe.y+(_e.getY(J)-Xe.y)*I,Xe.z+(_e.getZ(J)-Xe.z)*I)}}return ce.push(fe),q}function E(se,K,ce,we,q,{start:Y=.04,end:fe=.98,ivy:_e=!1,stems:pe}={}){let Ve=0;const Xe=Array.from({length:K},()=>.23+a()**1.25*1.6),I=Xe.reduce((J,ne)=>J+ne,0),ee=a()*Math.PI*2;for(let J=0;J<K;J++){const ne=tt.lerp(Y,fe,(Ve+Xe[J]*.5)/I);Ve+=Xe[J];const te=se.getPointAt(ne),be=se.getTangentAt(ne),de=ee+J*2.39996+(a()-.5)*1.1,Me=Math.sin(de),He=Math.atan2(be.y,be.x)-Math.PI/2+Me*(1.12+a()*1.14),ze=ne>.74&&a()<.56||a()<.07,P=tt.lerp(ce,we,a())*(ze?.79:1),T=P*(_e?.22:.13)*(.6+a()*.9),W=te.clone().add(new L(-Math.sin(He)*T,Math.cos(He)*T,(.2+Math.cos(de)*.6)*T)),Z=ze?y:f,ue=Z[Math.floor(a()*Z.length)].clone().multiplyScalar(.77+a()*.31),$=(a()-.5)*1.65+Math.cos(de)*.31,De=(a()-.5)*1.8;q.push({anchor:W,theta:He,size:P,color:ue,tilt:$,twist:De,shape:Math.floor(a()*(_e?Ou.length:Fu.length)),width:.81+a()*.3+(ze?-.09:0)}),pe&&v([te.toArray(),te.clone().lerp(W,.52).add(new L(0,-.009,.013)).toArray(),W.toArray()],P*(_e?.022:.021),pe,.4)}}const S=v([[3.72,.46,-.93],[3.57,.83,-1.17],[3.67,1.26,-1.46],[3.53,1.77,-1.7],[3.68,2.3,-1.73],[3.43,2.84,-1.68],[3.38,3.42,-1.66],[3.32,4.13,-1.62],[3.5,4.68,-1.6],[3.2,5.04,-1.6]],.024,u),A=v([[3.84,.46,-.98],[3.82,.87,-1.24],[3.69,1.32,-1.54],[3.97,1.83,-1.71],[4.28,2.38,-1.73],[4.33,2.8,-1.67],[4.16,3.07,-1.66],[3.69,3.19,-1.67]],.017,u);E(S,28,.105,.21,d,{start:.29}),E(A,23,.095,.18,d,{start:.27});const C=v([[3.46,4,-1.69],[3.56,4.54,-1.65],[3.36,4.89,-1.59],[2.99,5.12,-1.58],[2.59,5.12,-1.62],[2.3,4.97,-1.64]],.018,u),b=v([[3.54,4.52,-1.63],[3.4,4.02,-1.63],[3.39,3.59,-1.66],[3.46,3.13,-1.64],[3.88,2.98,-1.7]],.011);E(b,23,.087,.19,d);const w=v([[3.63,1.66,-1.64],[3.33,1.94,-1.66],[3.15,2.17,-1.6],[2.89,2.3,-1.59]],.009);E(w,14,.092,.18,d);const R=v([[3.39,4.83,-1.67],[3.71,5.08,-1.66],[4.08,5.15,-1.67],[4.4,4.96,-1.7],[4.54,4.63,-1.71]],.012,u);for(const[se,K,ce,we,q,Y,fe]of[[C,.3,.79,36,.46,.41,.23],[C,.3,.53,12,.23,.23,.18],[C,.7,.98,11,.29,.22,.13],[R,.15,.72,26,.38,.36,.18],[R,.73,1,11,.28,.22,.12],[b,.26,.56,13,.21,.23,.12],[b,.72,1,10,.21,.16,.12]])for(let _e=0;_e<we;_e++){const pe=se.getPointAt(tt.lerp(K,ce,a())),Ve=_e*2.39996+a()*.82,Xe=Math.cos(Ve)*q*(.41+a()*.95),I=Math.sin(Ve)*Y*(.41+a()*.95),ee=.045+a()*fe,J=v([pe.toArray(),[pe.x+Xe*.32,pe.y+I*.46,pe.z+ee*.45],[pe.x+Xe*.72,pe.y+I*.84,pe.z+ee],[pe.x+Xe,pe.y+I,pe.z+ee*.82]],.004);E(J,5+Math.floor(a()*5),.077,.177,d)}for(const se of[[[3.42,4.78,-1.52],[3.21,4.97,-1.37],[2.94,4.91,-1.26]],[[3.71,4.98,-1.47],[3.94,5.01,-1.26],[4.21,4.84,-1.23]],[[3.53,4.58,-1.51],[3.6,4.44,-1.28],[3.76,4.27,-1.27]],[[3.43,3.5,-1.61],[3.53,3.35,-1.4],[3.52,3.2,-1.43]],[[4.18,3.05,-1.63],[4.37,2.92,-1.48],[4.42,2.78,-1.46]]])E(v(se,.007),4,.23,.48,g,{ivy:!0,stems:p});for(const se of[[[3.29,5.07,-1.55],[3.07,5.28,-1.57],[2.71,5.41,-1.63],[2.55,5.5,-1.62]],[[4.09,5.15,-1.55],[4.36,5.28,-1.56],[4.63,5.33,-1.57]],[[4.35,4.89,-1.56],[4.55,4.96,-1.55],[4.72,5.09,-1.55]],[[3.73,3.04,-1.56],[3.88,3,-1.56],[4.1,3.1,-1.61]]])E(v(se,.005,p,.74),7,.08,.138,d,{stems:p});const U=new nt;U.position.set(2.98,5.07,-1.49),e.add(U);const V=[],H=v([[0,0,0],[-.57,-.16,.24],[-1.16,-.58,.37],[-1.81,-.81,.41],[-2.43,-.66,.3],[-2.94,-.18,.1],[-3.25,.03,-.03]],.012,V);E(H,23,.091,.17,_,{stems:V}),E(H,9,.18,.34,m,{start:.12,end:.88,ivy:!0,stems:V});const X=v([[-1.37,-.69,.37],[-1.64,-.84,.48],[-1.9,-.96,.45],[-2.13,-.94,.41]],.005,V);E(X,12,.075,.14,_);const G=v([[-.59,-.18,.24],[-.98,-.26,.26],[-1.25,-.27,.21],[-1.61,-.17,.19]],.005,V);E(G,10,.07,.13,_);const B=new gt({color:"#855532",roughness:.93}),F=new gt({color:"#646530",roughness:.86});function j(se,K,ce){const we=new Fe(Ox(se),K);we.castShadow=!0,ce.add(we);for(const q of se)q.dispose()}j(u,B,e),j(p,F,e),j(V,F,U);for(const[se,K,ce,we]of[[Fu,!1,d,_],[Ou,!0,g,m]]){const q=kx(K,a),Y=new Pt;se.forEach((fe,_e)=>{const pe=zx(fe,K,_e);for(const[Ve,Xe]of[[ce,e],[we,U]]){const I=Ve.filter(J=>J.shape===_e);if(!I.length)continue;const ee=new wd(pe,q,I.length);I.forEach(({anchor:J,theta:ne,size:te,color:be,tilt:de,twist:Me,width:He},ze)=>{Y.position.copy(J),Y.rotation.set(de,Me,ne,"ZXY"),Y.scale.set(te*He,te,te),Y.updateMatrix(),ee.setMatrixAt(ze,Y.matrix),ee.setColorAt(ze,be)}),ee.castShadow=ee.receiveShadow=!0,ee.computeBoundingSphere(),Xe.add(ee)}})}let ae=0,re=0;return{plant:e,update(se,K,ce,we,q){r.intensity=q*1.48,r.visible=q>.02;const Y=ae>.002;ae=we?tt.damp(ae,ce?1:0,5,se):0,U.rotation.x=Math.sin(K*2.1)*.025*ae,U.rotation.y=Math.cos(K*1.9)*.017*ae,re+=se,(ae>.002&&re>.12||Y&&ae<=.002)&&(r.shadow.needsUpdate=!0,re=0)}}}const vc=8.56,xc=3.44,al=.12,zu={oat:{name:"燕麦双边",base:"#bda47c",edge:"#757751",height:.055,colors:["#8d8b64","#a39770"]},hills:{name:"鼠尾草叠山",base:"#a79371",edge:"#777c54",height:.083,colors:["#919778","#727d52","#586247"]},clay:{name:"陶土格纹",base:"#a27961",edge:"#805c48",height:.067,colors:["#b69471","#98745c","#c5a784"]}};function Gx(i){const e=vc/2,t=xc/2,n=new Yn;if(i==="hills")n.moveTo(-e+.46,-t+.24),n.bezierCurveTo(-e+1.8,-t-.17,-.85,-t+.1,.35,-t+.02),n.bezierCurveTo(1.74,-t-.07,3.48,-t+.04,e-.31,-t+.36),n.bezierCurveTo(e+.17,-t+.62,e-.14,.55,e-.17,1.1),n.bezierCurveTo(e-.22,t+.18,1.87,t+.02,.66,t-.11),n.bezierCurveTo(-1.24,t-.31,-2.9,t+.3,-e+.58,t-.08),n.bezierCurveTo(-e-.09,t-.21,-e-.06,-t+.59,-e+.46,-t+.24);else{const s=i==="oat"?.17:.35;n.moveTo(-e+s,-t),n.lineTo(e-s,-t),n.quadraticCurveTo(e,-t,e,-t+s),n.lineTo(e,t-s),n.quadraticCurveTo(e,t,e-s,t),n.lineTo(-e+s,t),n.quadraticCurveTo(-e,t,-e,t-s),n.lineTo(-e,-t+s),n.quadraticCurveTo(-e,-t,-e+s,-t)}return n.closePath(),n}function Bu(i,e,t,n,s){i.beginPath(),i.moveTo(n+s,n),i.lineTo(e-n-s,n),i.lineTo(e-n-s,n+s),i.lineTo(e-n,n+s),i.lineTo(e-n,t-n-s),i.lineTo(e-n-s,t-n-s),i.lineTo(e-n-s,t-n),i.lineTo(n+s,t-n),i.lineTo(n+s,t-n-s),i.lineTo(n,t-n-s),i.lineTo(n,n+s),i.lineTo(n+s,n+s),i.closePath(),i.stroke()}function Wx(i,e){const t=document.createElement("canvas");t.width=1536,t.height=656;const{width:n,height:s}=t,r=t.getContext("2d");if(r.fillStyle=e.base,r.fillRect(0,0,n,s),i==="oat")r.strokeStyle=e.colors[0],r.lineWidth=19,Bu(r,n,s,32,24),r.strokeStyle=e.colors[1],r.lineWidth=7,Bu(r,n,s,61,22);else if(i==="hills")e.colors.forEach((p,d)=>{const g=125+d*140;r.fillStyle=p,r.beginPath(),r.moveTo(0,g+66),r.bezierCurveTo(n*.2,g-120,n*.36,g+166,n*.55,g+39),r.bezierCurveTo(n*.73,g-104,n*.84,g-65,n,g-14),r.lineTo(n,s),r.lineTo(0,s),r.fill()});else{for(let d=0;d<Math.ceil(s/92);d++)for(let g=0;g<Math.ceil(n/92);g++)r.fillStyle=e.colors[(d*2+g)%e.colors.length],r.globalAlpha=(d+g)%2===0?.57:.31,r.fillRect(g*92,d*92,92,92);r.globalAlpha=1,r.strokeStyle="#775646",r.lineWidth=19,r.strokeRect(27,27,n-54,s-54),r.strokeStyle="#c6a282",r.lineWidth=6,r.strokeRect(45,45,n-90,s-90)}const o=document.createElement("canvas");o.width=n,o.height=s;const a=o.getContext("2d");a.fillStyle="#777",a.fillRect(0,0,n,s);let l=913;const c=i==="oat"?5:7;for(let p=0;p<s;p+=c)for(let d=-(c/2);d<n;d+=c+1){l=l*16807%2147483647;const g=l/2147483647,_=d+p/c%2*c/2,m=p+(g-.5)*2.5;r.fillStyle=g>.52?`rgba(255,235,198,${g*.32})`:`rgba(56,40,24,${(1-g)*.34})`,r.beginPath(),r.ellipse(_,m,c*.47,c*.3,i==="oat"?0:.5,0,Math.PI*2),r.fill(),a.fillStyle=g>.22?"#aaa":"#919191",a.beginPath(),a.ellipse(_,m,c*.44,c*.28,0,0,Math.PI*2),a.fill()}const h=new Ot(t);h.colorSpace=ut,h.anisotropy=8;const u=new Ot(o);return u.anisotropy=8,{color:h,height:u}}function Xx(i){const e=new nt;e.position.set(.04,al,1.97),i.add(e),hs(i,{x:e.position.x,y:al+.001,z:e.position.z,width:vc,depth:xc,radius:.28,spread:.16,opacity:.38});const t=new Map,n=[],s=new Od(void 0,new L(0,-1,0));let r;function o(h){r.updateWorldMatrix(!0,!1),s.ray.origin.set(h.position.x,1,h.position.z);const u=[];Fe.prototype.raycast.call(r,s,u),h.position.y=u.reduce((p,d)=>Math.max(p,d.point.y),al)}function a(h){if(!t.has(h)){const u=zu[h],{color:p,height:d}=Wx(h,u),g=new Li(Gx(h),{depth:u.height-.022,bevelEnabled:!0,bevelThickness:.013,bevelSize:.031,bevelSegments:3,curveSegments:22}),_=g.attributes.position,m=g.attributes.uv;for(const v of g.groups)if(v.materialIndex===0)for(let E=v.start;E<v.start+v.count;E++)m.setXY(E,_.getX(E)/vc+.5,_.getY(E)/xc+.5);const f=new un({map:p,bumpMap:d,bumpScale:h==="oat"?.028:.047,roughness:.94,sheen:1,sheenColor:"#aa9673",sheenRoughness:.76}),y=new gt({color:u.edge,bumpMap:d,bumpScale:.023,roughness:.97}),x=new Fe(g,[f,y]);x.rotation.x=-Math.PI/2,x.position.y=.015,x.castShadow=!0,x.receiveShadow=!0,x.raycast=()=>{},e.add(x),t.set(h,x)}for(const[u,p]of t)p.visible=u===h;r=t.get(h),n.forEach(o)}const l=document.querySelector("#room-rug");let c;try{c=localStorage.getItem("doish-room-rug")}catch{}return l.value=Object.hasOwn(zu,c)?c:"oat",a(l.value),l.addEventListener("change",()=>{a(l.value);try{localStorage.setItem("doish-room-rug",l.value)}catch{}}),h=>{n.push(h),o(h)}}const qx="/assets/room-reference-prints-728FMqp9.png",Yx="/assets/yorushika-thats-why-i-gave-up-on-music-DJDHHoax.jpg",jx={poster:[0,0,72,120],portrait:[74,0,36,45],garden:[113,0,36,45],trees:[151,0,36,45],steps:[189,0,36,45],roof:[227,0,36,45],floor:[114,126,104,56],second:[222,126,29,105],clock:[270,0,72,72],throw:[277,82,77,163]};function Zx(){const i={},e=new jh().load(qx,()=>{for(const n of Object.values(i))n.needsUpdate=!0});e.colorSpace=ut;for(const[n,[s,r,o,a]]of Object.entries(jx)){const l=e.clone();l.offset.set((s+.5)/384,1-(r+a-.5)/256),l.repeat.set((o-1)/384,(a-1)/256),l.anisotropy=4,l.minFilter=Cn,i[n]=l}const t=new jh().load(Yx);return t.colorSpace=ut,t.anisotropy=4,{...i,yorushika:t}}function Ft(i,e,t,n,s=0){const r=new nt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function wt(i,e,t){const n=new Fe(e,t);return n.castShadow=n.receiveShadow=!0,i.add(n),n}function eh(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Ot(n);return s.colorSpace=ut,s.anisotropy=4,s}function Kd(i,e,t){let n=2837;for(let s=0;s<e*t/7;s++){n=n*16807%2147483647;const r=n%e,o=Math.floor(n/e)%t;i.fillStyle=s%3?"#472c1811":"#fff9dc43",i.fillRect(r,o,1+s%2,1)}}function Kx(i,e,t,n,s=0){const r=new Dt(e,t,12,12);r.rotateX(-Math.PI/2);const o=r.attributes.position;for(let a=0;a<o.count;a++){const l=o.getX(a)/e+.5,c=o.getZ(a)/t+.5;o.setY(a,s*(l*c)**5)}return r.computeVertexNormals(),wt(i,r,new gt({map:n,roughness:.9,side:yt}))}function $x({root:i,box:e,cylinder:t,mat:n,lineTube:s,deskHeight:r,describe:o}){const a=Ft(i,-.91,r+.03,-.17,.94);o(a,"桌面钢笔","pen"),e(.019,.018,.25,0,0,0,n("#324f48",.4),.008,a),e(.016,.016,.046,0,0,.12,n("#b6a782",.39,.53),.006,a);const l=t(.008,.027,0,0,-.136,n("#938776",.34,.61),a,.001,10);l.rotation.x=Math.PI/2;const c=Ft(i,-1.13,r+.156,-.335,-.18);o(c,"搅拌匙","spoon");const h=n("#afa18b",.29,.68);s([[0,0,0],[-.022,.073,-.006],[-.049,.156,-.018]],.006,h,c);const u=wt(c,new ci(1,20,12),h);u.scale.set(.019,.031,.006),u.position.set(.006,-.024,.004),u.rotation.z=.28;const p=wt(c,new ci(1,16,10),h);p.scale.set(.009,.024,.006),p.position.set(-.051,.158,-.018),p.rotation.z=.32;const d=Ft(i,1.25,r+.02,-.27,.22);o(d,"桌面耳机","headphones");const g=n("#4e3e32",.88),_=n("#a89066",.45,.24);for(const[y,x,v]of[[-.17,-.065,-.23],[.15,.035,.32]]){const E=Ft(d,y,.099,x,v),S=t(.096,.054,0,0,0,g,E,.102,30);S.rotation.x=Math.PI/2;const A=t(.077,.029,0,0,.035,_,E,.083,30);A.rotation.x=Math.PI/2}s([[-.19,.071,-.09],[-.13,.035,-.22],[.05,.031,-.245],[.23,.052,-.14],[.23,.077,.025]],.016,g,d),e(.27,.13,.085,.035,.051,-.219,_,.03,d).rotation.y=-.12;const m=Ft(i,.79,r+1.27,-.895,.13);o(m,"主机旁的耳机","headphones");const f=t(.1,.05,0,0,0,g,m,.096,32);f.rotation.z=Math.PI/2,t(.076,.045,.036,0,0,_,m,.074,32).rotation.z=Math.PI/2,s([[.036,.044,0],[.112,.05,-.065],[.202,.042,-.1],[.273,.012,-.095]],.014,g,m),t(.072,.047,.27,0,-.095,g,m,.068,28).rotation.z=Math.PI/2}function Jx({root:i,box:e,mat:t,lineTube:n,window:s,describe:r}){const o=Ft(i,s.left+.4,s.sill+.005,s.z+.015);r(o,"窗台盆栽","leaf"),o.scale.set(1.29,1.2,1.09);const a=t("#9f583c",.79),l=t("#b37156",.71),c=f=>new kr(f.map(([y,x])=>new he(y,x)),32);wt(o,c([[0,.008],[.099,.008],[.117,.022],[.112,.037],[0,.037]]),a),wt(o,c([[.065,.035],[.078,.04],[.107,.174],[.096,.174],[.069,.055]]),a),wt(o,c([[.102,.155],[.113,.158],[.114,.184],[.094,.184],[.093,.162]]),l),wt(o,new Ci(.095,.095,.014,24),t("#473921",.98)).position.y=.158;const h=["#72774d","#637a55","#818b60","#566344"].map(f=>t(f,.69)),u=new ci(1,12,8);for(const[f,y,x,v,E]of[[0,9,.186,.22,.93],[1,7,.2,.18,.58],[2,5,.23,.13,.28]])for(let S=0;S<y;S++){const A=Ft(o,0,x,0,S/y*Math.PI*2+f),C=wt(A,u,h[(S+f)%h.length]);C.rotation.x=E,C.position.set(0,Math.cos(E)*v/2,Math.sin(E)*v/2),C.scale.set(.04-f*.004,v/2,.014)}const p=t("#9a855d",.39,.59),d=o.clone();d.position.x=s.left+.91,d.rotation.y=.52,d.scale.set(1.02,.94,.93),i.add(d),r(d,"窗台小盆栽","leaf");const g=new ci(1,12,8);for(const[f,y]of[[1.24,.035],[1.4,.043],[1.49,.025],[1.59,.032],[2.65,.032]]){const x=wt(i,g,t("#a09670",.98));x.position.set(s.left+f,s.sill+.023,s.z+.106),x.scale.set(y,y*.46,y*.78)}const _=Ft(i,s.left+2.17,s.sill+.005,s.z-.012,-.15);r(_,"黄铜浇水壶","wateringCan"),_.scale.set(1.45,2.12,.91),wt(_,c([[0,0],[.105,0],[.114,.012],[.112,.12],[.09,.169],[.064,.175],[.055,.155],[0,.151]]),p),n([[-.09,.08,0],[-.17,.125,0],[-.177,.217,0],[-.104,.249,0],[-.04,.19,0]],.014,p,_);const m=wt(_,new Ci(.013,.025,.237,16),p);m.position.set(.176,.138,.008),m.quaternion.setFromUnitVectors(new L(0,1,0),new L(.84,.55,0).normalize()),e(.034,.037,.043,.275,.205,.008,p,.008,_).rotation.z=-.45}function Qx({root:i,box:e,mat:t,prints:n,describe:s,window:r}){const o=t("#d9c9a6",.9),a=t("#aa9261",.93),l=[["poster",r.left-.66,3.59,.81,1.13,.012],["portrait",r.left-.29,3.11,.3,.36,.16],["garden",r.left-.72,2.69,.29,.36,-.12],["trees",4.84,3.31,.28,.36,.04],["steps",4.88,2.93,.28,.35,-.1],["roof",5.18,2.7,.28,.33,.07]];for(const[g,_,m,f,y,x]of l){const v=Ft(i,_,m,g==="portrait"?-1.865:-1.885);s(v,g==="poster"?"墙面海报":"墙上照片","art"),v.rotation.z=x,e(f,y,.012,0,0,0,o,.006,v),wt(v,new Dt(f-.037,y-.048),new gt({map:n[g],roughness:.9})).position.set(0,.009,.008),e(f*.33,.056,.008,-f*.09,y*.475,.011,a,.005,v).rotation.z=.13,g==="poster"&&(e(f*.18,.06,.008,f*.37,-y*.472,.011,a,.005,v).rotation.z=-.33)}const c=eh(256,256,(g,_,m)=>{g.fillStyle="#f6dfa0",g.fillRect(0,0,_,m),g.save(),g.scale(_/112,m/112),g.strokeStyle="#766348",g.lineWidth=.92,g.lineCap="round";for(let f=0;f<5;f++)for(let y=15;y<93-f%3*12;y+=8+(f+y)%5){const x=29+f*11;g.beginPath(),g.moveTo(y,x),g.quadraticCurveTo(y+2,x-3-(y+f)%3,y+3,x-1),g.quadraticCurveTo(y+3,x+1,y+6,x-.5),g.stroke()}g.restore(),Kd(g,_,m)});for(const[g,_,m,f,y,x]of[[-4.86,2.41,.25,.25,-.08,"#ffffff"],[5.22,3.11,.24,.23,-.02,"#ffffff"],[-1.28,2.02,.23,.25,.04,"#a4b07f"],[-1,2.08,.22,.21,.17,"#e6e3d4"],[-1.14,1.83,.23,.23,-.14,"#ffffff"]]){const v=wt(i,new Dt(m,f,4,6),new gt({map:c,color:x,roughness:.98}));s(v,"手写便签","draft"),v.position.set(g,_,-1.882),v.rotation.z=y}const h=Ft(i,5.02,3.91,-1.86);s(h,"墙上挂钟","clock");const u=wt(h,new Ci(.318,.32,.055,48),t("#615240",.59,.2));u.rotation.x=Math.PI/2;const p=wt(h,new $s(.297,48),new gt({map:n.clock,roughness:.65}));p.position.z=.03;const d=Ft(h,0,0,.034);e(.005,.187,.002,0,.089,0,t("#935640",.65),.001,d),d.rotation.z=.45,h.secondHand=d}function eM({root:i,box:e,cylinder:t,mat:n,prints:s,restOnRug:r,describe:o}){const a=n("#cbbc96",.96),l=n("#272822",.4),c=n("#b8885a",.78),h=n("#575441",.9),u=["#6d7864","#907356","#655c53","#98745b","#80866c"].map(S=>n(S,.86)),p=(S,A,C)=>{const b=Ft(i,S,0,A,C);return r(b),b};function d(S,A,C){const b=Ft(S,...C);t(A,.016,0,0,0,l,b,A,56),t(A*.26,.004,0,.009,0,c,b,A*.26,32),t(.011,.004,0,.012,0,h,b,.011,10);const w=n("#454238",.68);for(const R of[.48,.66,.82,.93]){const U=wt(b,new Ri(A*R,.0018,4,48),w);U.rotation.x=Math.PI/2,U.position.y=.0085}}function g(S,A,C,b){e(A,C,.018,0,C/2,0,a,.009,S),wt(S,new Dt(A-.016,C-.016),new gt({map:s[b],roughness:.91})).position.set(0,C/2,.01)}const _=p(-4.81,-1.05,-.11);o(_,"地上的书叠","guestbook"),_.scale.y=1.17;for(let S=0;S<6;S++){const A=.041+S%3*.014,C=Ft(_,S*.027,.024+S*.057,-S*.022,S%2?.19:-.14),b=.73-S*.041;e(b,A,.41,0,0,0,u[S%5],.013,C),e(b-.038,A*.53,.39,0,0,.015,a,.006,C),e(b*.61,.011,.008,-.045,0,.212,u[(S+2)%5],.002,C)}const m=p(-3.69,-.51,.84);o(m,"倚放的黑胶","disc"),m.rotation.z=.43,g(m,.59,.78,"second");const f=Ft(m,.03,.432,.036);f.rotation.x=Math.PI/2,d(f,.266,[0,0,0]);const y=p(-3.11,.53,-.18);o(y,"叠放的唱片","disc");for(let S=0;S<5;S++){const A=Ft(y,S*.013,.015+S*.027,-S*.013,.02+S*.026);e(.94,.024,.88,0,0,0,u[S],.009,A),e(.9,.007,.866,0,.009,0,a,.003,A)}d(y,.425,[.036,.151,-.046]);const x=p(2.16,1.89,-.17);o(x,"唱片封套","disc"),x.rotation.x=-.1,g(x,.83,.8,"second");const v=p(2.41,2.03,.044);o(v,"唱片封套","disc"),v.rotation.x=-.13,g(v,.82,.82,"yorushika");const E=p(2.05,2.72,.15);o(E,"摊开的唱片","disc"),e(.91,.022,.68,0,.012,0,a,.007,E),Kx(E,.893,.667,s.floor).position.y=.024,d(E,.427,[.66,.016,-.014])}function tM({root:i,mat:e,restOnRug:t,describe:n}){const s=e("#8b795d",.98),r=e("#c0a77b",.98),o=eh(64,64,(d,g,_)=>{d.fillStyle="#b6a078",d.fillRect(0,0,g,_);for(let m=0;m<g;m+=3)d.fillStyle=m%2?"#6e613752":"#f2dcc97c",d.fillRect(m,0,1,_);for(let m=0;m<_;m+=4)d.fillStyle="#f6e4c748",d.fillRect(0,m,g,1);Kd(d,g,_)}),a=new gt({map:o,roughness:.99}),l=new Yn;l.moveTo(0,-.24),l.bezierCurveTo(.15,-.255,.143,-.15,.114,.12),l.bezierCurveTo(.12,.275,-.109,.278,-.11,.148),l.bezierCurveTo(-.13,-.14,-.14,-.235,0,-.24);const c=new Li(l,{depth:.023,bevelEnabled:!0,bevelSize:.008,bevelThickness:.006,bevelSegments:2});c.rotateX(Math.PI/2),c.translate(0,.029,0);const h=new wi(l);h.rotateX(Math.PI/2),h.translate(0,.036,0);const u=new Dt(1,1,18,14),p=u.attributes.position;for(let d=0;d<p.count;d++){const g=p.getX(d)*Math.PI,_=p.getY(d)+.5,m=.12*Math.sin(Math.min(1,_*2.5)*Math.PI/2);p.setXYZ(d,m*Math.sin(g),.035+.112*Math.sin(_*Math.PI/2)*Math.cos(g),-.238+_*.266)}u.computeVertexNormals(),a.side=yt;for(const[d,g,_]of[[-1.21,2.18,.69],[-.76,1.65,.79]]){const m=Ft(i,d,0,g,_);n(m,"布面拖鞋","slipper"),m.scale.set(1.29,1.19,1.39),wt(m,c,s);const f=r.clone();f.side=yt,wt(m,h,f),wt(m,u,a),hs(m,{x:0,y:.002,z:0,width:.24,depth:.46,radius:.09,spread:.065,opacity:.37}),t(m)}}function nM({root:i,mat:e,lineTube:t,restOnRug:n,prints:s,describe:r}){const o=Ft(i,.54,0,2.48,.83);r(o,"藤编阅读椅","chair"),o.scale.set(1.45,1.39,1.55);const a=e("#795036",.53),l=e("#a98055",.75),c=eh(128,128,(f,y,x)=>{for(let v=4;v<y+x;v+=8)f.strokeStyle=v%16===4?"#be995e":"#917243",f.lineWidth=2.1,f.beginPath(),f.moveTo(v,0),f.lineTo(v-x,x),f.moveTo(v-x,0),f.lineTo(v,x),f.stroke();for(let v=4;v<y;v+=8)f.fillStyle="#c4a275",f.fillRect(v,0,1,x)}),h=new gt({map:c,alphaTest:.4,side:yt,roughness:.91}),u=(f,y,x,v)=>Array.from({length:33},(E,S)=>{const A=S/32*Math.PI*2,C=x[0]+Math.cos(A)*f,b=Math.sin(A)*y;return v?[C,x[1],x[2]+b]:[C,x[1]+b,x[2]+b*.17]});for(const f of[-1,1])t([[f*.3,.004,-.38],[f*.26,.25,-.29],[f*.25,.51,-.27]],.025,a,o),t([[f*.305,.004,.39],[f*.25,.32,.27],[f*.25,.54,.27],[f*.22,.89,.34],[f*.17,1.07,.36]],.025,a,o),t([[f*.24,.49,-.26],[f*.33,.65,-.27],[f*.34,.67,-.1],[f*.29,.67,.16],[f*.225,.74,.31]],.019,a,o);t(u(.286,.316,[0,.49,0],!0),.026,a,o),t(u(.235,.26,[0,.32,0],!0),.015,l,o);const p=wt(o,new $s(1,40),h);p.position.y=.499,p.rotation.x=-Math.PI/2,p.scale.set(.265,.294,1);const d=Ft(o,0,.923,.337);d.rotation.x=.168,t(u(.251,.283,[0,.923,.337],!1),.026,a,o),wt(d,new $s(1,40),h).scale.set(.226,.261,1);const _=new Dt(1,1,14,22),m=_.attributes.position;for(let f=0;f<m.count;f++){const y=m.getX(f)+.5,x=m.getY(f)+.5,v=.012*Math.sin(y*Math.PI*8+x*.9),E=x**12;m.setXYZ(f,-.11+y*.395-.035*x,.523+.687*x,.365+.068*Math.sin(Math.PI*x)+v-.115*E)}_.computeVertexNormals(),wt(o,_,new gt({map:s.throw,side:yt,roughness:.97})),hs(o,{x:0,y:.002,z:.025,width:.58,depth:.72,radius:.16,spread:.18,opacity:.28}),n(o)}function iM(i){const e=new nt,t=[];i.root.add(e);const n={...i,root:e,prints:Zx(),describe(s,r,o){t.push({object:s,label:r,icon:o})}};return $x(n),Jx(n),Qx(n),eM(n),tM(n),nM(n),{group:e,labels:t}}function sM({root:i,box:e,cylinder:t,lineTube:n,mat:s,deskHeight:r,window:o}){const a=s("#68734d",.75);function l(re,se,K){const ce=new Fe(new kr(re.map(([we,q])=>new he(we,q)),64),se);return ce.castShadow=!0,ce.receiveShadow=!0,K.add(ce),ce}const c=Xx(i),h=iM({root:i,box:e,cylinder:t,lineTube:n,mat:s,deskHeight:r,window:o,restOnRug:c}),u=Vx(i),p=new nt;p.position.set(-1.98,r,-.79),p.rotation.y=.28,i.add(p);const d=s("#ad9f82",.32,.66),g=s("#bb9452",.29,.45);t(.206,.065,0,.033,0,a,p),t(.203,.011,0,.01,0,s("#393932"),p);const _=[new he(0,.094),new he(-.106,.39),new he(.188,.675)];for(let re=0;re<_.length-1;re++){const se=_[re],K=_[re+1],ce=K.clone().sub(se);for(const we of[-.043,.043]){const q=e(.037,ce.length(),.026,(se.x+K.x)/2,(se.y+K.y)/2,we,d,.009,p);q.rotation.z=-Math.atan2(ce.x,ce.y)}}for(const{x:re,y:se}of _){const K=t(.044,.116,re,se,0,d,p);K.rotation.x=Math.PI/2;const ce=t(.026,.009,re,se,.06,g,p);ce.rotation.x=Math.PI/2}const m=new nt;m.position.set(.293,.64,0),m.rotation.set(-.28,0,.15),p.add(m);const f=new un({color:"#d9c7a4",roughness:.29,clearcoat:.43,clearcoatRoughness:.31});l([[.196,.004],[.198,-.001],[.204,-.004],[.21,-.002],[.214,.003],[.215,.01],[.211,.022],[.199,.05],[.182,.075],[.159,.099],[.129,.119],[.092,.132],[.049,.14],[.004,.142]],f,m),l([[.004,.109],[.074,.105],[.119,.091],[.154,.071],[.179,.046],[.191,.022],[.196,.004]],g,m);const y=new Xt({color:"#ffe5a3"}),x=l([[0,.024],[.046,.025],[.071,.032],[.086,.045],[.088,.053]],y,m);x.castShadow=!1,x.userData.roomHoverIgnore=!0,t(.051,.035,0,.148,0,d,m);const v=new Yc("#ffbd69",0,3.3,.61,.7,2);v.position.set(.293,.585,0),v.target.position.set(.62,.02,.2),p.add(v,v.target);const E=new jc("#ffd18a",.12,1.7,2);E.position.set(.3,.53,.02),p.add(E);const S=new nt;S.position.set(-1.13,r,-.31),i.add(S);const A=new un({color:"#e8d9b9",vertexColors:!0,roughness:.3,clearcoat:.38,clearcoatRoughness:.29}),C=l([[0,.009],[.067,.009],[.071,.002],[.079,.002],[.083,.013],[.092,.025],[.1,.044],[.104,.079],[.105,.087],[.106,.116],[.107,.123],[.11,.167],[.111,.196],[.109,.205],[.104,.21],[.098,.209],[.094,.203],[.093,.193],[.093,.167],[.09,.1],[.082,.056],[.066,.043],[0,.042]],A,S),b=C.geometry.attributes.position,w=new ke("#84946b"),R=new ke(1,1,1),U=[];for(let re=0;re<b.count;re++){const se=b.getY(re);U.push(...(se>=.087&&se<=.116?w:R).toArray())}C.geometry.setAttribute("color",new Ke(U,3));const V=new un({color:"#3d271a",roughness:.26,clearcoat:.43,clearcoatRoughness:.26}),H=t(.0925,.006,0,.162,0,V,S);H.castShadow=!1;const X=new Ri(.065,.00125,5,36),G=Array.from({length:2},()=>{const re=new Fe(X,new Xt({color:"#d9c09b",transparent:!0,opacity:0,depthWrite:!1}));return re.rotation.x=-Math.PI/2,re.position.y=.166,re.raycast=()=>{},S.add(re),re}),B=new un({color:"#e8d9b9",roughness:.32,clearcoat:.32}),F=new Fe(new Ri(.054,.012,10,32),B);F.position.set(.108,.113,0),F.scale.set(.83,1.03,1),F.castShadow=!0,F.receiveShadow=!0,S.add(F);const j=new ke("#cdbb8a"),ae=new ke("#fff0bd");return{lamp:p,shade:m,plant:u.plant,mug:S,liquid:H,ripples:G,props:h,update(re,se,K,ce,we,q,Y){const fe=ce?-.47:-.28;m.rotation.x=q?tt.damp(m.rotation.x,fe,9,re):fe,y.color.copy(j).lerp(ae,Math.max(K,ce?.35:0)),v.intensity=.2+K*4.5,E.intensity=.12+K*.96,u.update(re,se,we,q,Y)}}}const ll="/assets/spring-B01OgPH9.webp",cl="/assets/summer-C0oxVU_2.webp",hl="/assets/autumn-BYZNcRC1.webp",ul="/assets/winter-C4MA2YoZ.webp",rM=[ul,ul,ll,ll,ll,cl,cl,cl,hl,hl,hl,ul],ku=1.5,oM=.72;function aM(i){const e=i.querySelector(".seasonal-edges");let t=1,n;function s(){const r=Math.max(0,Math.min(1,(ku-t)/(ku-oM))),o=r*r*(3-2*r),a=27*r;if(e.style.setProperty("--season-reveal",o),e.style.setProperty("--season-depth",a+"%"),!o)return;const l=rM[new Date().getMonth()];l!==n&&(e.style.setProperty("--season-art",`url("${l}")`),n=l)}return document.addEventListener("visibilitychange",()=>{document.hidden||s()}),r=>{t=r,s()}}const lM='.memory-note,.desktop-gadget,#experience-switcher,.desktop-icons>:not([data-window=resume],[data-window=contact],[data-disc-reader]),.desktop-trash,.quick-launch,#agent-tray,#context-menu,#start-menu .start-apps,#start-menu .start-links>:not([data-open=resume],[data-open=contact],[data-disc-reader]){display:none!important}.desktop-icons{grid-template-columns:repeat(3,88px)}.room-disc-icon{display:grid;place-items:center;width:45px;height:45px;border:1px solid #f4fdff;border-radius:50%;background:conic-gradient(from 34deg,#f5fcff,#c3bce8,#c9f6f2,#8ca4c7,#fff0d7,#ceebfd,#f5fcff);box-shadow:inset 0 0 0 4px #fff5,0 3px 7px #16395a65}.room-disc-icon:after{content:"";width:8px;height:8px;border-radius:50%;background:#477ba0;box-shadow:0 0 0 4px #f4fbffad}#start-btn{display:flex;flex:0 0 auto;align-items:center;gap:7px;width:auto;padding-inline:8px 14px;color:#fff;text-shadow:0 1px 2px #1b405d}#start-menu{width:min(284px,calc(100vw - 10px))}#start-menu .start-grid,#start-menu .start-links{display:block;min-height:0}#exit-room-computer{display:flex;align-items:center;gap:8px;width:calc(100% - 20px);min-height:44px;margin:0 10px 10px;padding:7px 10px;border:1px solid #914b24;border-radius:5px;background:linear-gradient(#fff2dd,#efd0a7);color:#632b16;cursor:pointer;font-weight:700}#exit-room-computer span{font-size:19px}#exit-room-computer small{margin-inline-start:auto;font-size:11px;font-weight:400}#exit-room-computer:hover,#exit-room-computer:focus-visible{background:#fff3da;outline:2px solid #914b24;outline-offset:1px}',Hu="https://hajimi-tomato.github.io/doishshow/";async function cM(i){const e=await fetch(Hu,{signal:i});if(!e.ok)throw new Error("Published desktop unavailable");const t=new DOMParser().parseFromString(await e.text(),"text/html"),n=t.querySelector("#start-menu .start-links");if(!n)throw new Error("Published desktop menu unavailable");const s=t.createElement("base");s.href=Hu,t.head.prepend(s);const r=t.createElement("style");r.textContent=lM,t.head.append(r),t.querySelector("#start-btn").insertAdjacentHTML("beforeend","<b>开始</b>"),t.querySelector(".desktop-icons").insertAdjacentHTML("beforeend",'<button class="desktop-icon" type="button" data-disc-reader><span class="room-disc-icon" aria-hidden="true"></span><span>光盘读取器</span></button>'),n.insertAdjacentHTML("afterbegin",'<button type="button" data-disc-reader>光盘读取器</button>');const o=t.createElement("button");o.id="exit-room-computer",o.type="button",o.innerHTML='<span aria-hidden="true">⏻</span>退出电脑<small>回到房间</small>',n.closest("#start-menu").append(o);const a=t.createElement("script");return a.textContent='document.addEventListener("DOMContentLoaded", () => parent.postMessage("doish-desktop-ready", location.origin === "null" ? "*" : location.origin), { once: true });',t.body.append(a),"<!doctype html>"+t.documentElement.outerHTML}function hM(i,e,t,n){const s=document.createElement("section");s.className="computer-desktop",s.setAttribute("aria-label","doish 的 Windows 桌面"),s.hidden=!0,s.innerHTML=`
    <div class="computer-desktop__connection" tabindex="-1">
      <p role="status" class="computer-desktop__status">正在连接 Windows 桌面…</p>
      <button type="button" hidden>取消加载</button>
    </div>
    <div class="computer-desktop__power-line" aria-hidden="true"></div>
  `,i.append(s);const r=s.querySelector(".computer-desktop__connection"),o=s.querySelector('[role="status"]'),a=r.querySelector("button");let l,c,h=!1;function u(){c?.abort(),s.hidden=!0,l?.remove(),l=null,i.removeAttribute("data-windows-open")}async function p(){if(s.hidden||h)return;h=!0;const g=s.dataset.state==="running";if(l?.contentDocument.querySelector('#start-btn[aria-expanded="true"]')?.click(),g&&t()){s.dataset.state="closing";const _=s.animate([{transform:"none",opacity:1},{transform:"none",opacity:1,offset:.82},{transform:"none",opacity:0}],{duration:560,easing:"linear",fill:"forwards"});await _.finished,_.cancel()}u(),h=!1,e()}a.addEventListener("click",p),r.addEventListener("keydown",g=>{g.key==="Escape"&&p()});async function d(){const g=new AbortController;c=g;const _=setTimeout(()=>{o.classList.remove("computer-desktop__status--quiet"),a.hidden=!1},5e3),m=setTimeout(()=>g.abort(new Error("Desktop load timed out")),18e3);let f;try{const y=await cM(g.signal);g.signal.throwIfAborted(),f=document.createElement("iframe"),f.title="DOISH HOME OS",f.referrerPolicy="no-referrer",f.setAttribute("sandbox","allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-downloads"),await new Promise((S,A)=>{function C(b){b.source!==f.contentWindow||b.origin!==location.origin||b.data!=="doish-desktop-ready"||(window.removeEventListener("message",C),S())}window.addEventListener("message",C,{signal:g.signal}),g.signal.addEventListener("abort",()=>A(g.signal.reason),{once:!0}),f.srcdoc=y,s.prepend(f)}),g.signal.throwIfAborted();const x=f.contentDocument,v=x.querySelector("#exit-room-computer");if(!v)throw new Error("Desktop exit unavailable");v.addEventListener("click",p);for(const S of x.querySelectorAll("[data-disc-reader]"))S.addEventListener("click",()=>{x.querySelector('#start-btn[aria-expanded="true"]')?.click(),n(()=>{l?.focus(),x.querySelector(".desktop-icons [data-disc-reader]")?.focus()})});x.querySelector('a[href="#desktop"]')?.addEventListener("click",S=>{S.preventDefault(),x.querySelector("#desktop .desktop-icon")?.focus()}),l=f,s.dataset.state="running",t()||x.querySelector("#boot-skip")?.click(),l.focus()}catch{if(f?.remove(),h||s.hidden||c!==g)return;s.dataset.state="error",o.textContent="暂时无法加载 Windows 桌面。",o.classList.remove("computer-desktop__status--quiet"),a.textContent="返回房间",a.hidden=!1,a.focus()}finally{clearTimeout(_),clearTimeout(m),c===g&&(c=null)}}return{get isOpen(){return!s.hidden},detachForDisc:u,open(){s.hidden=!1,i.setAttribute("data-windows-open",""),s.dataset.state="loading",o.textContent="正在连接 Windows 桌面…",o.classList.add("computer-desktop__status--quiet"),a.textContent="取消加载",a.hidden=!0,r.focus({preventScroll:!0}),d()}}}function os(i,e,t,n,s=0){const r=new nt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function Or(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Ot(n);return s.colorSpace=ut,s.anisotropy=4,s}function $d(i){const e=Or(128,128,(t,n,s)=>{t.fillStyle="#e4dfd1",t.fillRect(0,0,n,s);for(let r=0;r<n;r+=3)t.fillStyle=r%9?"#5d4c3326":"#5d4c3343",t.fillRect(r,0,1,s);for(let r=0;r<s;r+=3)t.fillStyle=r%9?"#fffaf150":"#40372838",t.fillRect(0,r,n,1)});return new gt({color:i,map:e,bumpMap:e,bumpScale:.006,roughness:.94})}function uM({entry:i,box:e,cylinder:t,mat:n,wood:s}){const r=os(i,-7.36,.12,-1.78,.76),o=Or(384,768,(x,v,E)=>{const S=x.createLinearGradient(0,0,v,E);S.addColorStop(0,"#425044"),S.addColorStop(.58,"#4a5949"),S.addColorStop(1,"#374536"),x.fillStyle=S,x.fillRect(0,0,v,E);let A=9753;const C=()=>(A=A*16807%2147483647,A/2147483647);for(let b=0;b<3600;b++)x.fillStyle=b%3?"#bfb28816":"#121b1330",x.fillRect(C()*v,C()*E,.5+C()*1.4,.6+C()*3);for(let b=0;b<380;b++){const w=b%3?C()*v:v-C()**2*45,R=b%3?E-C()**2*195:C()*E;x.fillStyle=b%4?"#b7a17b40":"#d2b48b65",x.fillRect(w,R,1+C()*7,.45+C()*1.8)}}),a=s.clone();a.color.set("#b6976c");const l=new gt({map:o,bumpMap:o,bumpScale:.006,roughness:.71}),c=n("#354336",.65),h=n("#20291f",.85),u=n("#c49d5f",.34,.64),p=n("#907349",.51,.56),d=1.46,g=5.16;e(.15,g+.18,.16,.012,g/2,-.015,a,.016,r),e(.105,g+.04,.076,-.045,g/2,.068,c,.011,r),e(d+.14,.155,.17,-d/2,g+.073,-.012,a,.014,r),e(d,.085,.078,-d/2,g+.023,.067,c,.01,r),e(d-.035,g-.034,.094,-d/2-.104,g/2,.015,l,.021,r),e(.02,g-.048,.022,-.097,g/2,.044,h,.005,r),e(.115,.49,.029,-.205,2.27,.079,p,.01,r);for(const x of[2.069,2.466]){const v=t(.013,.009,-.205,x,.096,u,r,.013,12);v.rotation.x=Math.PI/2}const _=t(.033,.087,-.205,2.22,.128,u,r,.043,20);_.rotation.x=Math.PI/2;const m=new Fe(new ci(.067,20,12),u);m.scale.z=.81,m.position.set(-.205,2.22,.181),m.castShadow=!0,r.add(m),e(.015,.034,.01,-.205,2.36,.101,h,.005,r);const f=new Fe(new Ri(.041,.01,8,26),u);f.position.set(-.64,3.54,.07),r.add(f);const y=t(.032,.012,-.64,3.54,.066,h,r,.032,20);y.rotation.x=Math.PI/2;for(const x of[.52,4.25]){t(.017,.28,-.098,x,.079,p,r,.017,16);for(const v of[-.135,.135])t(.019,.019,-.098,x+v,.079,u,r,.019,16)}}function dl(i,e,t,n){const s=-e/2,r=-t/2;return i.moveTo(s+n,r),i.lineTo(-s-n,r),i.quadraticCurveTo(-s,r,-s,r+n),i.lineTo(-s,-r-n),i.quadraticCurveTo(-s,-r,-s-n,-r),i.lineTo(s+n,-r),i.quadraticCurveTo(s,-r,s,-r-n),i.lineTo(s,r+n),i.quadraticCurveTo(s,r,s+n,r),i}function dM({entry:i,wood:e}){const t=os(i,-6.42,3.1,-1.87),n=e.clone();n.color.set("#be955e"),n.roughness=.45;const s=.86,r=2.64,o=dl(new Yn,s+.112,r+.112,.192);o.holes.push(dl(new uc,s-.026,r-.026,.139));const a=new Fe(new Li(o,{depth:.044,bevelEnabled:!0,bevelThickness:.016,bevelSize:.015,bevelSegments:3}),n);a.castShadow=a.receiveShadow=!0,t.add(a);const l=Or(160,460,(p,d,g)=>{const _=p.createLinearGradient(0,0,d,g*.83);_.addColorStop(0,"#534b36"),_.addColorStop(.55,"#8b7b58"),_.addColorStop(1,"#a19371"),p.fillStyle=_,p.fillRect(0,0,d,g),p.save(),p.setTransform(1,-.63,.04,1,56,120),p.filter="blur(4px)",p.fillStyle="#fceac0";for(let f=0;f<7;f++){const y=f*43+(f>2?23:0);for(let x=0;x<3;x++)p.fillRect(x*33,y,27,37)}p.restore();const m=p.createLinearGradient(0,0,0,g);m.addColorStop(0,"#d0bda227"),m.addColorStop(.83,"#d0bda200"),m.addColorStop(1,"#cbb18b50"),p.fillStyle=m,p.fillRect(0,0,d,g)}),c=new wi(dl(new Yn,s,r,.148)),h=c.attributes.uv;for(let p=0;p<h.count;p++)h.setXY(p,h.getX(p)/s+.5,h.getY(p)/r+.5);const u=new Fe(c,new un({map:l,roughness:.29,metalness:.09,clearcoat:.38,clearcoatRoughness:.18}));u.position.z=.036,t.add(u)}function fM({entry:i,box:e,cylinder:t,mat:n,wood:s}){const r=os(i,-5.37,1.77,-1.875);r.name="Wall-mounted letter holder";const o=s.clone();o.color.set("#c3a076"),o.roughness=.59;const a=o.clone();a.color.set("#a8865c");const l=n("#514235",.72),c=.6;function h(y,x,v,E){const S=new Yn;S.moveTo(0,0),S.lineTo(c,0),S.lineTo(c,y-.04),E?(S.quadraticCurveTo(c,y-.02,c-.062,y-.035),S.quadraticCurveTo(c/2,y+.09,.062,y-.035),S.quadraticCurveTo(0,y-.035,0,y-.078)):(S.bezierCurveTo(.46,y-.01,.44,y-.045,.3,y+.012),S.bezierCurveTo(.196,y+.061,.13,y-.02,0,y-.012)),S.closePath();const A=new Li(S,{depth:x,bevelEnabled:!0,bevelSize:.007,bevelThickness:.007,bevelSegments:2}),C=A.attributes.uv;for(let w=0;w<C.count;w++)C.setXY(w,C.getX(w)/c,C.getY(w)/y);const b=new Fe(A,o);b.position.set(-c/2,0,v),b.castShadow=b.receiveShadow=!0,r.add(b)}h(.56,.032,0,!0),h(.265,.027,.145,!1),e(c,.045,.164,0,.025,.089,a,.008,r);for(const y of[-.287,.287])e(.033,.334,.143,y,.165,.087,a,.008,r);for(const y of[-.214,.214]){const x=t(.017,.008,y,.492,.041,l,r,.017,14);x.rotation.x=Math.PI/2,e(.021,.003,.004,y,.492,.047,n("#a99575",.48),.001,r)}const u=Or(240,160,(y,x,v)=>{y.fillStyle="#eee1c5",y.fillRect(0,0,x,v),y.save(),y.beginPath(),y.rect(0,0,x,v),y.rect(9,9,x-18,v-18),y.clip("evenodd");for(let E=-v;E<x;E+=20)y.fillStyle=E%40?"#ae624c":"#5f818c",y.beginPath(),y.moveTo(E,0),y.lineTo(E+9,0),y.lineTo(E+v+9,v),y.lineTo(E+v,v),y.fill();y.restore(),y.strokeStyle="#a4937057",y.lineWidth=1,y.beginPath(),y.moveTo(9,18),y.lineTo(x/2,v*.51),y.lineTo(x-9,18),y.stroke(),y.fillStyle="#b49c7960",y.fillRect(x-46,17,25,29)}),p=new gt({map:u,roughness:.96});for(const[y,x,v,E]of[[-.107,.398,.068,.14],[-.073,.318,.12,-.09]])e(.317,.204,.012,y,x,v,p,.005,r).rotation.set(-.11,0,E);const d=Or(192,256,(y,x,v)=>{y.fillStyle="#d8c6a3",y.fillRect(0,0,x,v);for(const E of[10,105]){y.fillStyle="#635645",y.fillRect(E,20,76,9),y.fillRect(E,36,76,2);for(let S=0;S<35;S++)y.fillStyle=S%4?"#6158469a":"#514737c9",y.fillRect(E,47+S*5,70-S*27%21,1.3),y.fillRect(E+57,47+S*5,10+S%4*3,1.1)}}),g=os(r,.166,.447,.075,-.5);g.rotation.z=-.222;const _=new gt({map:d,roughness:.96,side:yt}),m=new Fe(new Ci(.063,.061,.484,24,1,!0),_);m.castShadow=!0,g.add(m);const f=n("#b4a281",.96);for(const y of[.052,.058,.064]){const x=new Fe(new Ri(y,.0022,6,24),f);x.rotation.x=-Math.PI/2,x.position.y=.241,g.add(x)}}function pM({bench:i,box:e,lineTube:t,mat:n}){const s=os(i,.34,.997,-.01,-.1),r=$d("#a08b60"),o=r.clone();o.color.set("#b4a373");const a=n("#8a7953",.91),l=n("#c1ae83",.93),c=n("#806040",.74),h=n("#b4a180",.38,.67);e(1.04,.684,.389,0,.346,0,r,.12,s);for(const x of[-1,1])e(.178,.5,.351,x*.426,.282,.016,r,.065,s),t([[x*.475,.1,.139],[x*.523,.17,.144],[x*.519,.44,.135],[x*.469,.605,.123]],.01,a,s);e(.863,.322,.055,0,.253,.188,r,.024,s);const u=new Dt(1,.52,20,12),p=u.attributes.position;for(let x=0;x<p.count;x++){const v=p.getX(x)*2,E=p.getY(x)/.52+.5,S=v*(.482+.032*Math.sin(E*Math.PI)),A=.341+.38*Math.sin(E*Math.PI*.54)+.076*v*v*(1-E)-.024*v*v*E,C=.226-.371*E**2+.027*(1-v*v)*Math.sin(E*Math.PI);p.setXYZ(x,S,A,C)}u.computeVertexNormals(),o.side=yt;const d=new Fe(u,o);d.castShadow=d.receiveShadow=!0,s.add(d),t([[-.469,.42,.227],[-.3,.366,.234],[0,.34,.23],[.3,.37,.233],[.469,.42,.227]],.009,a,s),t([[-.451,.431,.23],[-.29,.381,.237],[0,.356,.233],[.29,.381,.237],[.451,.431,.23]],.003,l,s),t([[-.15,.695,-.029],[-.089,.747,-.039],[.086,.745,-.039],[.152,.692,-.026]],.023,c,s);for(const x of[-.255,.26]){e(.072,.281,.024,x,.319,.237,c,.018,s);for(const v of[-.043,.043])e(.013,.089,.013,x+v,.306,.253,h,.006,s);for(const v of[-.045,.045])e(.084,.012,.013,x,.306+v,.253,h,.006,s);e(.008,.057,.015,x,.328,.257,h,.003,s)}const g=new ss([[-.47,.595,.008],[-.575,.433,.071],[-.737,.166,.196],[-.837,.045,.218],[-.744,.025,.248],[-.54,.028,.231],[-.447,.096,.108]].map(x=>new L(...x))),_=new Dt(.066,1,2,32),m=_.attributes.position;for(let x=0;x<m.count;x++){const v=m.getX(x),E=m.getY(x)+.5,S=g.getPoint(E),A=g.getTangent(E),C=new L(A.y,-A.x,0).normalize();S.addScaledVector(C,v),m.setXYZ(x,S.x,S.y,S.z)}_.computeVertexNormals();const f=r.clone();f.color.set("#938258"),f.side=yt;const y=new Fe(_,f);y.castShadow=!0,s.add(y)}function mM(){const i=new Yn;return i.moveTo(-.072,-.245),i.bezierCurveTo(-.151,-.232,-.164,-.085,-.139,.11),i.bezierCurveTo(-.126,.287,.12,.302,.15,.14),i.bezierCurveTo(.166,.012,.096,-.117,.089,-.207),i.quadraticCurveTo(.071,-.268,-.072,-.245),i}function gM({bench:i,box:e,lineTube:t,mat:n}){const s=n("#e4d4b3",.74),r=n("#9c8b6e",.85),o=$d("#eadabd"),a=n("#6d604b",.99),l=n("#fff0d4",.91),c=new Li(mM(),{depth:.031,bevelSize:.013,bevelThickness:.01,bevelSegments:2,steps:1});c.rotateX(Math.PI/2);for(const[h,u,p]of[[.26,.037,.19],[.615,.009,.23]]){const d=os(i,h,.367,u,p),g=new Fe(c,s);g.position.y=.045,g.castShadow=g.receiveShadow=!0,d.add(g),e(.27,.126,.299,0,.099,.087,o,.057,d),e(.235,.11,.228,-.006,.095,-.115,o,.05,d),e(.143,.013,.137,-.004,.151,-.122,a,.005,d),t([[-.074,.149,-.02],[-.09,.163,-.119],[-.064,.164,-.21],[.046,.163,-.211],[.08,.159,-.113],[.067,.152,-.029]],.014,o,d),t([[-.137,.051,.002],[-.143,.05,.12],[-.092,.05,.236],[.014,.05,.266],[.113,.05,.216],[.146,.05,.107]],.004,r,d);for(let _=0;_<4;_++){const m=.011+_*.038;t([[-.062,.157,m],[-.003,.17,m+.008],[.063,.156,m+.016]],.006,l,d),t([[-.061,.156,m+.02],[0,.169,m+.011],[.064,.156,m]],.005,l,d)}}}function _M({entry:i,box:e,lineTube:t,mat:n,wood:s}){const r=os(i,5.83,.12,-1.21),o=s.clone();o.color.set("#e4b783");const a=o.clone();a.color.set("#cda06a"),e(2.28,.124,.7,0,.941,0,o,.026,r),e(2.04,.146,.056,0,.833,.258,o,.011,r),e(2.04,.105,.05,0,.853,-.259,o,.009,r);for(const l of[-.976,.976]){for(const c of[-.235,.235])e(.104,.923,.105,l,.463,c,o,.015,r);e(.065,.111,.531,l,.838,0,a,.01,r)}for(const l of[-.235,.235])e(2.037,.075,.066,0,.361,l,o,.01,r);for(let l=0;l<8;l++)e(1.978,.037,.052,0,.366,-.197+l*.056,a,.006,r);hs(r,{x:0,y:.001,z:0,width:2.18,depth:.57,radius:.075,spread:.23,opacity:.48}),pM({bench:r,box:e,lineTube:t,mat:n}),gM({bench:r,box:e,lineTube:t,mat:n})}function vM({root:i,box:e,cylinder:t,lineTube:n,mat:s,wood:r}){const o=new nt;o.name="Campus apartment entryway",i.add(o),uM({entry:o,box:e,cylinder:t,mat:s,wood:r}),dM({entry:o,wood:r}),fM({entry:o,box:e,cylinder:t,mat:s,wood:r}),_M({entry:o,box:e,lineTube:n,mat:s,wood:r})}const hi=document.querySelector("#stage"),Pi=document.querySelector("#scene"),xM=aM(hi),In=new Ed;In.background=new ke("#f8f0e7").multiplyScalar(1.75);const _t=new an(41,1,.08,70),Vr=new L(-.21,2.38,-.45),An=new L(-.21,4.96,20.85);_t.position.copy(An);_t.lookAt(Vr);let Un;try{Un=new _v({canvas:Pi,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loading").hidden=!0,document.querySelector("#error").hidden=!1,i}Un.setPixelRatio(Math.min(devicePixelRatio,2));Un.shadowMap.enabled=!0;Un.shadowMap.type=wc;Un.toneMapping=Ac;Un.toneMappingExposure=1;const Jd=new mc(Un),Qd=new zv;In.environment=Jd.fromScene(Qd,.04).texture;Qd.dispose();Jd.dispose();In.environmentIntensity=.34;const At=new wv(_t,Pi);At.target.copy(Vr);At.enableDamping=!0;At.dampingFactor=.1;At.enablePan=!1;At.minDistance=1.55;At.maxDistance=26;At.minPolarAngle=1.438;At.maxPolarAngle=1.489;At.minAzimuthAngle=-.037;At.maxAzimuthAngle=.037;At.rotateSpeed=.16;At.update();const Wo=new Am("#fff8e8","#b4aa96",1.35);In.add(Wo);const nn=new Yc("#ffdda9",4.5,0,.36,.13,0);nn.position.set(8.2,5.5,4.6);nn.target.position.set(1.76,1.56,-.97);nn.castShadow=!0;nn.shadow.mapSize.set(2048,2048);nn.shadow.camera.near=.5;nn.shadow.camera.far=21;nn.shadow.normalBias=.025;nn.shadow.bias=-12e-5;nn.shadow.radius=5;In.add(nn,nn.target);const Jo=new Dm("#f6f1e2",.68);Jo.position.set(-4,3,4);In.add(Jo);let fl=13579;function pl(){return fl=fl*16807%2147483647,(fl-1)/2147483646}function MM(){const i=document.createElement("canvas");i.width=i.height=512;const e=i.getContext("2d");e.fillStyle="#e3cbaa",e.fillRect(0,0,512,512);for(let n=0;n<28500;n++){e.fillStyle=n%3===0?"#91735446":"#fff4d948";const s=.35+pl()*1.32;e.fillRect(pl()*512,pl()*512,s,s*.76)}const t=new Ot(i);return t.colorSpace=ut,t.wrapS=t.wrapT=Wn,t.repeat.set(4,7),t}const Ct=(i,e=.55,t=0)=>new gt({color:i,roughness:e,metalness:t}),Gr=Ct("#dfd4b9",.4),us=Ct("#e7ddc6",.46),Ii=Ct("#b9ae91",.5),th=Ct("#222723",.55),Ui=Ct("#bab6a5",.3,.7),ds=Ct("#858359",.42),oa=Ct("#626d4d",.5),Vu=MM(),Gu=Wd(),yM=Lx(),Ni=new un({map:Gu,bumpMap:Gu,bumpScale:.011,roughness:.43,clearcoat:.22,clearcoatRoughness:.43}),Rt=new nt;In.add(Rt);function qe(i,e,t,n,s,r,o,a=.025,l=Rt){const c=new Fe(a?new Jc(i,e,t,3,Math.min(a,i/2.01,e/2.01,t/2.01)):new Di(i,e,t),o);return c.position.set(n,s,r),c.castShadow=!0,c.receiveShadow=!0,l.add(c),c}function qt(i,e,t,n,s,r,o=Rt,a=i,l=48){const c=new Fe(new Ci(i,a,e,l),r);return c.position.set(t,n,s),c.castShadow=!0,c.receiveShadow=!0,o.add(c),c}function ir(i,e,t,n=Rt){const s=new ss(i.map(o=>new L(...o))),r=new Fe(new Hr(s,40,e,8,!1),t);return r.castShadow=!0,n.add(r),r}function sr(i,e,t,n,s,r,o,a=Rt){const l=new Fe(new ci(1,24,16),o);return l.position.set(i,e,t),l.scale.set(n,s,r),l.castShadow=!0,l.receiveShadow=!0,a.add(l),l}const Wu=Wd(!0),aa=new Fe(new Dt(24,24),new gt({map:Wu,bumpMap:Wu,bumpScale:.022,roughness:.65}));aa.rotation.x=-Math.PI/2;aa.position.set(0,.12,10);aa.receiveShadow=!0;Rt.add(aa);qe(22,.1,.05,0,.17,-1.86,Ni,.008);const SM=new gt({map:Vu,bumpMap:Vu,bumpScale:.015,roughness:.94,color:"#819377"});qe(22,1.52,.014,0,.88,-1.89,SM,0).castShadow=!1;for(const[i,e]of[[-11,es.left],[es.right,11]])qe(e-i,.054,.052,(i+e)/2,es.spring,-1.86,Ni,.012);nn.map=Sv();const nh=new jc("#a6dbce",0,2.5);nh.position.set(-.19,1.76,-.62);Rt.add(nh);const bM=new ke("#ffbd75"),Xu=new ke("#fff8e8"),qu=new ke("#619abe"),EM=new ke("#b4aa96"),wM=new ke("#597788");let br=0,Xo=1;const Hn=vx({onLighting:i=>{br=i.night,Xo=i.sunlight*(1-i.night),nn.color.copy(i.color).lerp(bM,.52*(1-i.night)),nn.intensity=i.strength*2.45*(1-i.night),Wo.intensity=i.ambient*tt.lerp(.73,.43,i.night),Wo.color.copy(Xu).lerp(qu,i.night),Wo.groundColor.copy(EM).lerp(wM,i.night),Jo.color.copy(Xu).lerp(qu,i.night),Jo.intensity=tt.lerp(.7,.34,i.night),In.background.copy(i.background).multiplyScalar(1.75),In.environmentIntensity=.34-i.night*.21,nh.intensity=i.night*.53,Qo!==i.name&&(Qo=i.name,ks())}}),TM=Ux({root:Rt,box:qe,wood:Ni,wall:yM,texture:Hn.texture}),tn=.4,AM=-.02,rr=-.9,Mc=.12,la=new nt;la.position.y=Mc*.2;la.scale.y=.8;Rt.add(la);const CM=Rt.children.length;qe(5.49,.2,1.73,tn,.34,rr,oa,.08);for(const i of[tn-2.34,tn,tn+2.34])for(const e of[-1.48,-.23])qt(.087,.2,i,.22,e,ds);hs(Rt,{x:tn,y:.121,z:rr,width:5.39,depth:1.63,radius:.11,spread:.32,opacity:.48});qe(5.55,.13,1.75,tn,.36,rr,ds,.055);qe(5.55,.1,1.75,tn,1.68,rr,ds,.04);qe(5.45,1.3,.09,tn,1.01,-1.73,oa,.02);for(const i of[tn-2.71,tn+2.71])qe(.13,1.43,1.75,i,1.01,rr,ds,.05);qe(5.6,.14,1.82,tn,1.8,rr,Ni,.12);for(const i of[.37,1.67])qe(5.35,.1,.09,tn,i,-.015,ds,.025);for(const i of[tn-2.66,tn+2.66])qe(.09,1.3,.09,i,1.02,-.015,ds,.025);const ef=[];for(let i=0;i<3;i++){const e=tn+(i-1)*1.735,t=new nt;t.position.set(e-.85,1.02,AM+.025),Rt.add(t);const n=new nt;n.position.x=.85,t.add(n),qe(1.7,1.18,.065,0,0,0,ds,.06,n),qe(.045,.27,.057,.64,.07,.085,Ui,.02,n),ef.push({hinge:t,door:n}),qe(1.67,.045,1.6,e,.91,-.88,Ni,.015),i<2&&qe(.045,1.3,1.6,e+.87,1.02,-.88,oa,.01)}for(const i of Rt.children.slice(CM))la.add(i);const Rn=Mc+(1.88-Mc)*.8,Lt=new nt;Lt.position.set(-.19,Rn,-.86);Lt.scale.setScalar(.95);Rt.add(Lt);const Wr=Ct("#276c62",.48),tf=new un({color:"#4d9b8d",roughness:.24,metalness:.04,clearcoat:.78,transparent:!0,opacity:.77,depthWrite:!1}),ca=Ct("#68ab9a",.27,.1);sr(0,.79,-.47,.71,.67,.68,tf,Lt).castShadow=!1;sr(0,.79,-.46,.61,.57,.58,Wr,Lt);for(const i of[-.48,.48])for(const e of[-.56,.048])qt(.097,.12,i,.06,e,Wr,Lt);qe(1.37,1.35,.3,0,.8,.095,ca,.148,Lt);qe(1.31,1.29,.24,0,.815,.143,us,.118,Lt);qe(1.13,.97,.045,0,.92,.259,Ii,.065,Lt);qe(1.08,.92,.025,0,.92,.286,Ct("#59665c",.6),.055,Lt);const fs=new un({color:"#f0fff9",roughness:.24,metalness:.04,clearcoat:.8,clearcoatRoughness:.16,emissive:"#32564e",emissiveIntensity:.12}),ih=new Dt(1.02,.86,36,30),Uo=ih.attributes.position;for(let i=0;i<Uo.count;i++){let e=Uo.getX(i),t=Uo.getY(i);const n=Math.abs(e),s=Math.abs(t),r=.51-.045,o=.43-.045;if(n>r&&s>o){const a=n-r,l=s-o,c=Math.hypot(a,l);c>.045&&(e=Math.sign(e)*(r+a/c*.045),t=Math.sign(t)*(o+l/c*.045))}Uo.setXYZ(i,e,t,.31+.038*(1-(e/.51)**2)*(1-(t/.43)**2))}ih.computeVertexNormals();const as=new Fe(ih,fs);as.position.set(0,.92,0);as.receiveShadow=!0;Lt.add(as);as.userData.roomHoverIgnore=!0;const sh=vv();fs.map=sh.map;fs.emissiveMap=sh.map;fs.emissive.set("#9cd4b2");fs.roughness=.17;qe(.13,.025,.015,.4,.35,.245,Ii,.006,Lt);sr(.48,.35,.26,.012,.009,.005,Ct("#a2b99a"),Lt);const RM=Ct("#b3aa93",.72),rh=Ct("#c6bda6",.46),PM=Ct("#726b53",.9);for(const i of[-.458,.458])for(let e=-2;e<=2;e++)for(let t=-4;t<=4;t++){if((t/4.4)**2+(e/2.5)**2>1)continue;const n=qt(.004,.003,i+t*.017,.275+e*.015,.265,PM,Lt,.004,8);n.rotation.x=Math.PI/2,n.castShadow=!1}for(let i=0;i<8;i++)qe(.019,.012,.126,-.157+i*.044,1.403,-.36,Wr,.005,Lt);for(const i of[-.35,-.22,-.09])qe(.085,.045,.012,i,.355,.257,Ii,.012,Lt),qe(.065,.028,.016,i,.355,.269,rh,.009,Lt);const DM=qt(.024,.012,.4,.35,.267,rh,Lt);DM.rotation.x=Math.PI/2;function LM(i,e){const t=document.createElement("canvas");t.width=256,t.height=96;const n=t.getContext("2d");n.clearRect(0,0,256,96),n.fillStyle="#777563",n.font="30px Georgia",n.textAlign="center",n.fillText(i,128,39),n.font="11px Arial",n.fillText(e,128,66);const s=new Ot(t);return s.colorSpace=ut,s}function IM(i,e,t,n,s,r,o,a){const l=new Fe(new Dt(i,e),new Xt({map:LM(r,o),transparent:!0,depthWrite:!1}));return l.position.set(t,n,s),a.add(l),l}IM(.26,.09,.05,.365,.256,"doish","COLOR DISPLAY",Lt);const Yt=new nt;Yt.position.set(.88,Rn,-.9);Yt.scale.setScalar(.74);Rt.add(Yt);qe(.65,1.42,.79,0,.755,-.009,Wr,.105,Yt);qe(.77,1.57,.91,0,.8,0,tf,.141,Yt).castShadow=!1;for(let i=-6;i<=6;i++){const e=i*.051;for(const[t,n]of i>=-5&&i<=5?[[.51,.87],[1.4,.22]]:[[.789,1.37]])qe(.014,n,.019,e,t,.459,ca,.006,Yt).castShadow=!1}for(let i=-6;i<=6;i++)for(const e of[-.381,.381])qe(.017,1.34,.012,e,.795,i*.058,ca,.005,Yt).castShadow=!1;for(const i of[-.23,.23])for(const e of[-.26,.26])qt(.075,.095,i,.05,e,Wr,Yt);qe(.65,.3,.055,0,1.064,.477,us,.045,Yt);qe(.53,.064,.021,0,.95,.508,th,.008,Yt);qe(.48,.11,.018,0,1.122,.509,Gr,.01,Yt);qe(.29,.009,.009,-.052,1.102,.522,Ii,.003,Yt);qe(.058,.025,.011,.21,1.02,.513,Ii,.009,Yt);const Fi=new nt;Fi.position.set(0,.94,.53);Yt.add(Fi);qe(.54,.027,.58,0,0,.21,us,.012,Fi);qe(.55,.055,.035,0,-.004,.5,Gr,.008,Fi);const UM=new un({color:"#d8d8cd",metalness:.8,roughness:.2,iridescence:.7,iridescenceIOR:1.3,side:yt}),bi=new Fe(new Wc(.032,.215,64),UM);bi.rotation.x=-Math.PI/2;bi.position.set(0,.019,.2);Fi.add(bi);bi.visible=!1;qt(.058,.003,0,.022,.2,Ui,Fi);const nf=qt(.061,.024,0,.586,.479,ca,Yt);nf.rotation.x=Math.PI/2;const sf=new gt({color:"#8fc2a4",emissive:"#82ffd2",emissiveIntensity:.42});sr(0,.49,.484,.014,.014,.008,sf,Yt).userData.roomHoverIgnore=!0;const Oi=new nt;Oi.position.set(-.19,Rn+.018,-.08);Oi.scale.setScalar(.88);Oi.rotation.x=.055;Rt.add(Oi);qe(1.2,.075,.4,0,0,0,Gr,.025,Oi);for(let i=0;i<5;i++)for(let e=0;e<16;e++)i===4&&e>2&&e<9||qe(.057,.025,.048,-.55+e*.071,.049,-.155+i*.067,i===0?Ii:us,.007,Oi);qe(.43,.025,.048,-.15,.049,.113,us,.008,Oi);sr(.51,Rn+.054,-.015,.1,.044,.145,us);ir([[.51,Rn+.02,-.14],[.54,Rn+.02,-.36],[.65,Rn+.02,-.48],[.66,Rn+.02,-.82]],.009,Ii);const ha=document.createElement("canvas");ha.width=1024;ha.height=320;const Xr=ha.getContext("2d");Xr.fillStyle="#797867";Xr.font="24px Arial";Xr.textAlign="center";Xr.textBaseline="middle";const rf=[["esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","","",""],["1","2","3","4","5","6","7","8","9","0","−","=","←","7","8","9"],["Q","W","E","R","T","Y","U","I","O","P","[","]","↵","4","5","6"],["A","S","D","F","G","H","J","K","L",";","'","↑","","1","2","3"],["ctrl","alt","","","","","","","","alt","←","↓","→","0",".","↵"]];rf.forEach((i,e)=>i.forEach((t,n)=>Xr.fillText(t,n*64+32,e*64+32)));const of=new Ot(ha);of.colorSpace=ut;const NM=new Xt({map:of,transparent:!0,depthWrite:!1,side:yt});for(let i=0;i<5;i++)for(let e=0;e<16;e++){if(!rf[i][e])continue;const t=new Dt(.049,.037),n=t.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,(e+n.getX(r))/16,1-(i+1-n.getY(r))/5);const s=new Fe(t,NM);s.rotation.x=-Math.PI/2,s.position.set(-.55+e*.071,.063,-.155+i*.067),Oi.add(s)}ir([[.02,2.004,-.13],[.02,2.009,-.07],[.02,2.01,-.02]],.0018,RM);qe(.019,.008,.035,.02,2.011,-.075,rh,.006);const sn=new nt;sn.position.set(2.28,Rn,-.89);sn.scale.setScalar(.92);Rt.add(sn);qe(1.42,.17,1.12,0,.1,0,us,.055,sn);qe(1.36,.025,1.06,0,.197,0,Ii,.025,sn);for(const i of[-.52,.52])for(const e of[-.4,.4])qt(.055,.05,i,0,e,th,sn);qt(.46,.043,-.12,.23,.025,Ui,sn);const zi=new nt;zi.position.set(-.12,.259,.025);sn.add(zi);qt(.444,.015,0,0,0,Ct("#242720",.33),zi);for(let i=0;i<21;i++){const e=new Fe(new Ri(.17+i*.012,.0012,3,80),Ct(i%2?"#45463b":"#32362d",.4));e.rotation.x=Math.PI/2,e.position.y=.009,zi.add(e)}qt(.115,.004,0,.012,0,Ct("#b6a886",.8),zi);qt(.009,.027,0,.025,0,Ui,zi);qe(.035,.002,.012,.04,.016,.012,Ct("#777252"),.001,zi);qt(.055,.08,.49,.26,-.36,Ui,sn);const oi=new nt;oi.position.set(.49,.31,-.36);sn.add(oi);ir([[0,0,0],[-.01,.01,.15],[-.16,.01,.64],[-.27,0,.72]],.018,Ui,oi);qe(.06,.035,.1,-.27,-.01,.72,th,.012,oi);const af=new gt({color:"#8f6846",emissive:"#ff943d",emissiveIntensity:0});sr(.26,.104,.565,.024,.024,.014,af,sn).userData.roomHoverIgnore=!0;for(const i of[.4,.58]){const e=qt(.036,.035,i,.1,.58,Ui,sn);e.rotation.x=Math.PI/2}const ps=new nt;ps.position.set(0,.23,-.51);ps.rotation.x=-1.04;sn.add(ps);const FM=new un({color:"#918574",transparent:!0,opacity:.23,roughness:.085,clearcoat:1,clearcoatRoughness:.11,metalness:0,side:yt,depthWrite:!1});function oh(i,e,t,n,s,r,o){const a=qe(i,e,t,n,s,r,FM,o,ps);a.castShadow=!1,a.userData.skipContactShadows=!0}oh(1.43,.022,1.1,0,0,.52,.012);for(const i of[-.71,.71])oh(.012,.115,1.09,i,-.05,.52,.004);oh(1.43,.115,.012,0,-.05,1.06,.004);const lf=Ct("#8b8777",.36,.25);for(const i of[-.71,.71])qe(.008,.014,1.09,i,.006,.52,lf,.003,ps);qe(1.43,.012,.009,0,.006,1.06,lf,.003,ps);const ua=document.createElement("canvas");ua.width=128;ua.height=256;const ah=ua.getContext("2d"),qr=ah.createLinearGradient(0,0,128,170);qr.addColorStop(0,"#fff4d68f");qr.addColorStop(.22,"#fff8e326");qr.addColorStop(.42,"#fff8e300");qr.addColorStop(1,"#fff8e300");ah.fillStyle=qr;ah.fillRect(0,0,128,256);const cf=new Ot(ua);cf.colorSpace=ut;const da=new Fe(new Dt(1.39,1.05),new Xt({map:cf,transparent:!0,depthWrite:!1,opacity:.42,side:yt}));da.rotation.x=-Math.PI/2;da.position.set(0,.016,.54);da.userData.skipContactShadows=!0;ps.add(da);const lh=bv({root:Rt,box:qe,cylinder:qt,lineTube:ir,mat:Ct,wood:Ni,silver:Ui,greenDark:oa,cream:Gr});lh.scale.y=.95;class OM extends Nn{excluded=[];render(...e){const t=this.excluded.filter(n=>n.visible);for(const n of t)n.visible=!1;try{super.render(...e)}finally{for(const n of t)n.visible=!0}}setSize(e,t){super.setSize(Math.max(1,Math.round(e*.67)),Math.max(1,Math.round(t*.67)))}}const ms=new Gv(Un),No=Un.getContext(),zM=No.getInternalformatParameter(No.RENDERBUFFER,No.RGBA16F,No.SAMPLES),hf=Array.from(zM??[]).filter(i=>i>=2&&i<=4),uf=Un.getPixelRatio()<=1.4&&hf.length>0;uf&&(ms.readBuffer.samples=Math.min(...hf));ms.addPass(new Wv(In,_t));const fa=new OM(In,_t,1,1);fa.updateGtaoMaterial({radius:.21,distanceExponent:1,thickness:.82,distanceFallOff:1,scale:1,samples:16});fa.blendIntensity=.62;ms.addPass(fa);ms.addPass(new Zv);const yc=uf?null:new Yd(Kv);yc&&ms.addPass(yc);const Yr=matchMedia("(prefers-reduced-motion: reduce)").matches;let Mt=!Yr,ts=null,zn=!1,Qo="午后";const Yu=document.querySelector(".caption p");function ks(){if(ts){Yu.textContent=`正在查看：${ts.title}`;return}Yu.textContent=zn?`${Qo}，唱片还在转。`:`${Qo}，唱片停了下来。`}const qo=document.querySelector("#motion");function df(){Hn.setMotion(Mt),qo.setAttribute("aria-pressed",String(Mt)),qo.setAttribute("title",Mt?"暂停场景动效":"开启场景动效"),qo.querySelector("span").textContent=Mt?"开":"关",ks()}df();qo.addEventListener("click",()=>{Mt=!Mt,df()});const BM={perspective:An,left:An.clone().add(new L(-.52,0,0)),right:An.clone().add(new L(.52,0,0))},pa=[...document.querySelectorAll("[data-view]")],ch={position:An,target:Vr,zoom:1,view:"perspective"};let Vn=null,Gn=!1,zr=ch,ff=!1;const Qs=hM(hi,VM,()=>Mt&&!Yr,i=>va.openFromDesktop(i));function hh(i){pa.forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.view===i)))}function uh(){return{position:_t.position.clone(),target:At.target.clone(),zoom:_t.zoom,view:pa.find(i=>i.getAttribute("aria-pressed")==="true")?.dataset.view}}function ns(i,e=1100){Vn={from:uh(),destination:i,start:performance.now(),duration:Mt&&!Yr?e:0},hh(i.view),dh(performance.now())}function dh(i){if(!Vn)return;const{from:e,destination:t,start:n,duration:s}=Vn,r=s&&Mt?Math.min((i-n)/s,1):1,o=tt.smoothstep(r,0,1);_t.position.lerpVectors(e.position,t.position,o),At.target.lerpVectors(e.target,t.target,o),_t.zoom=tt.lerp(e.zoom,t.zoom,o),_t.updateProjectionMatrix(),r===1&&(Vn=null)}function ea(){const i=as.getWorldPosition(new L),t=Math.max(1.48,1.53/_t.aspect)/(2*Math.tan(tt.degToRad(_t.fov/2)));return{position:i.clone().add(new L(-.07,t*.101,t)),target:i,zoom:1}}function Hs(i){Gn=i,hi.toggleAttribute("data-screen-focused",i),va.updateFocus(i,!!ts)}function kM(){Gn&&ns(zr),Hs(!1)}function HM(){Qs.isOpen||(Qs.open(),_a())}function VM(){_a(),Br.focus({preventScroll:!0})}function GM(){Gn||(zr=uh()),Hs(!Gn),ns(Gn?ea():zr)}pa.forEach(i=>i.addEventListener("click",()=>{const e=i.dataset.view;Hs(!1),ns({position:BM[e],target:Vr,zoom:1,view:e}),ma()}));At.addEventListener("start",()=>{Vn=null,hh(void 0)});function pf(){const i=hi.clientWidth,e=hi.clientHeight,t=i/e;xM(t),_t.aspect=t;const n=Math.max(3.66,5.56/t);if(_t.fov=tt.radToDeg(2*Math.atan(n/22)),Gn)if(Vn)Vn.destination=ea();else{const s=ea();_t.position.copy(s.position),At.target.copy(s.target)}_t.updateProjectionMatrix(),Un.setSize(i,e),ms.setSize(i,e),yc?.uniforms.resolution.value.set(1/Pi.width,1/Pi.height)}window.addEventListener("resize",pf);pf();const Vs=document.querySelector("#room-menu"),Br=document.querySelector("#room-menu-toggle");function ma(){Vs.hidden=!0,Br.setAttribute("aria-expanded","false")}Br.addEventListener("click",()=>{Vs.hidden=!Vs.hidden,Br.setAttribute("aria-expanded",String(!Vs.hidden))});Pi.addEventListener("pointerdown",ma);document.addEventListener("keydown",i=>{i.key==="Escape"&&!Vs.hidden&&!document.querySelector("dialog[open]")&&(ma(),Br.focus())});const On=new Set,WM=["KeyW","KeyA","KeyS","KeyD"],xi=new L,vr=new L;function mf(){return At.enabled&&!Gn&&!Vn&&Vs.hidden&&!document.querySelector("dialog[open]")&&!document.activeElement?.closest("input, textarea, select, [contenteditable]")}document.addEventListener("keydown",i=>{!WM.includes(i.code)||i.altKey||i.ctrlKey||i.metaKey||!mf()||(i.preventDefault(),On.add(i.code))});document.addEventListener("keyup",i=>On.delete(i.code));window.addEventListener("blur",()=>On.clear());document.addEventListener("visibilitychange",()=>{document.hidden&&On.clear()});function ju(i,e,t,n){return e>0?Math.min(e,Math.max(0,n-i)):Math.max(e,Math.min(0,t-i))}function XM(i){if(!On.size)return;if(!mf()){On.clear();return}const e=Number(On.has("KeyW"))-Number(On.has("KeyS")),t=Number(On.has("KeyD"))-Number(On.has("KeyA"));vr.subVectors(At.target,_t.position).setY(0).normalize(),xi.set(vr.x*e-vr.z*t,0,vr.z*e+vr.x*t),xi.normalize().multiplyScalar(i*2.65);const n=_t.position.z-An.z,s=tt.clamp(.52+n*.12,.16,.82);xi.x=ju(_t.position.x,xi.x,An.x-s,An.x+s),xi.z=ju(_t.position.z,xi.z,An.z-2.8,An.z+2.5),_t.position.add(xi),At.target.add(xi),hh(void 0)}const ga=document.createElement("div");ga.id="room-disc-ui";hi.append(ga);let Yo=null;function gf(i){const e=i.clone().project(_t),t=Pi.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function qM(i){const e=document.createElement("canvas");e.width=512,e.height=448;const t=e.getContext("2d");t.fillStyle="#1c3833",t.fillRect(0,0,512,448),t.fillStyle="#32564c",t.fillRect(0,0,512,83),t.textBaseline="middle",t.fillStyle="#e7ead5",t.font='22px "Microsoft YaHei", sans-serif',t.fillText(i.category,42,50),t.font='bold 46px "Microsoft YaHei", sans-serif',t.fillText(i.title,42,149,428),t.font='26px "Microsoft YaHei", sans-serif';let n="",s=222;for(const o of i.description)t.measureText(n+o).width>420&&(t.fillText(n,42,s),n="",s+=44),n+=o;n&&t.fillText(n,42,s),t.fillStyle="#aac5a8",t.font='20px "Microsoft YaHei", sans-serif',t.fillText("示例光盘",42,382),Gd(t);const r=new Ot(e);return r.colorSpace=ut,r}const Fo=new Xt({toneMapped:!1});function ml(i){Fo.map?.dispose(),Fo.map=i?qM(i):null,Fo.needsUpdate=!0,as.material=i?Fo:fs,as.receiveShadow=!i,Pi.setAttribute("aria-label",i?`CRT 显示 ${i.title}。 ${i.description}`:"青绿复古电脑、唱片机与复古绿柜子的 3D 房间")}function Sc(i){ff=i,_a()}function _a(){const i=ff||Qs.isOpen;ga.toggleAttribute("data-desktop-open",Qs.isOpen),At.enabled=!i,pa.forEach(t=>t.disabled=i);const e=hi.querySelector(".life-explore");e&&(e.disabled=i),i&&ma()}function gl(i){const e=Mt&&!Yr?680:0;return Yo={from:Fi.position.z,to:i,start:performance.now(),duration:e},fh(performance.now()),e}function fh(i){if(!Yo)return;const{from:e,to:t,start:n,duration:s}=Yo,r=s&&Mt?Math.min((i-n)/s,1):1;Fi.position.z=tt.lerp(e,t,tt.smoothstep(r,0,1)),r===1&&(Yo=null)}const Zu=i=>i?new Promise(e=>setTimeout(e,i)):Promise.resolve(),va=Jv({host:ga,motionEnabled:()=>Mt,onOpenCollection:kM,onOpen:()=>Sc(!0),onClose:()=>Sc(!1),async prepareInsertion(){return Qs.isOpen&&(Qs.detachForDisc(),_a()),!Gn&&!Vn&&(zr=uh()),ts=null,Hs(!1),ml(null),ks(),bi.visible=!1,gl(.53),ns(ch),await Zu(Vn?.duration),dh(performance.now()),At.update(),_t.updateMatrixWorld(),Mt&&!Yr},getDrivePoint:()=>gf(bi.getWorldPosition(new L)),async onLoad(i){bi.visible=!0,await Zu(gl(-.01)),fh(performance.now()),ts=i,ml(i),Hs(!0),ks(),ns(ea(),1350)},onToggleFocus:GM,onEject(){Gn&&ns(zr),ts=null,bi.visible=!1,Hs(!1),gl(.53),ml(null),ks()}}),ji=new Dn,Cr=sM({root:Rt,box:qe,cylinder:qt,lineTube:ir,mat:Ct,deskHeight:Rn,window:es});vM({root:Rt,box:qe,cylinder:qt,lineTube:ir,mat:Ct,wood:Ni});const YM=xv(Rt,Cr.mug,sn,hi);Rt.traverse(i=>{i.userData.skipContactShadows&&fa.excluded.push(i)});const Ku=Mv(),bc={screen:0,power:0};let _l=0,vl=Hn.isNight()?"noon":Hn.getMode();function jM(){const i=Hn.getMode();if(Hn.isNight()){Hn.setMode(vl==="auto"?"noon":vl);return}vl=i,Hn.setMode("night")}const Oo=Fx({root:Rt,canvas:Pi,camera:_t,controls:At,box:qe,mat:Ct,wood:Ni,cream:Gr,cabinetDoors:ef,deskHeight:Rn,windowView:Hn,mountedWindow:TM,monitor:Lt,tower:Yt,powerButton:nf,computerCue:bc,rack:lh,collectionUI:va,setLocked:Sc,player:sn,furniture:Cr,toggleDay:jM,toggleComputer:HM,computerLabel:()=>"打开电脑",setVolume:Ku.setVolume,isRecordPlaying:()=>zn,toggleRecord(){zn=!zn,Ku.play(zn),ks()}});function ZM(){ji.setFromObject(lh);const i=hi.getBoundingClientRect();let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const r of[ji.min.x,ji.max.x])for(const o of[ji.min.y,ji.max.y])for(const a of[ji.min.z,ji.max.z]){const l=gf(new L(r,o,a));e=Math.min(e,l.x),n=Math.max(n,l.x),t=Math.min(t,l.y),s=Math.max(s,l.y)}va.updateBounds({x:e-i.left,y:t-i.top,w:n-e,h:s-t})}let $u=performance.now(),Zi=0,xl=0,Ju=!1,Ml=0,Qu=performance.now();function _f(i){requestAnimationFrame(_f);const e=(i-Qu)/1e3;e<1/25||(Qu=i,Hn.tick(Math.min(e,1.4),Mt))}requestAnimationFrame(_f);function vf(i){requestAnimationFrame(vf);const e=Math.min((i-$u)/1e3,.05);$u=i,dh(i),XM(e),At.update(),_t.updateMatrixWorld(),Oo.tick(e,Mt),fh(i),ZM(),Mt&&(Zi+=e);const t=Gn||Oo.hovered(Lt);xl+=e,(t!==Ju||Mt&&xl>.145&&!ts)&&(Ju=t,xl=0,sh.draw(t,Zi*.17)),fs.emissiveIntensity=(t?.44:.3)+br*.38+Math.sin(Zi*5.2)*.014+bc.screen,sf.emissiveIntensity=.55+Math.sin(Zi*2.3)*.24+bc.power;const n=zn?-.31:.38,s=zn?0:-.12;oi.rotation.y=Mt?tt.damp(oi.rotation.y,n,3.3,e):n;const o=Math.abs(oi.rotation.y-n)<.22?s:-.12;oi.rotation.x=Mt?tt.damp(oi.rotation.x,o,4.3,e):o,_l=Mt?tt.damp(_l,zn?3.49:0,5.2,e):0,zi.rotation.y-=e*_l,af.emissiveIntensity=zn?1.25+br*.52:br*.38,Cr.update(e,Zi,br,Oo.hovered(Cr.lamp),Oo.hovered(Cr.plant),Mt,Xo),YM(Zi,Xo,zn,Mt),Ml+=e,Mt&&Ml>.13&&Xo>.05&&(Xd(nn.map,Zi),Ml=0),ms.render()}requestAnimationFrame(i=>{vf(i);const e=document.querySelector("#loading");e.classList.add("done"),Mt&&(_t.position.copy(An).lerp(Vr,-.035),ns(ch,1050)),setTimeout(()=>e.remove(),650)});
