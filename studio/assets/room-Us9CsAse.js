import{a as ri}from"./disc-catalog-BerLgE9d.js";const Tc="180",ks={ROTATE:0,DOLLY:1,PAN:2},zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cf=0,ph=1,Rf=2,Ac=1,Pf=2,ii=3,Ci=0,tn=1,Mt=2,Gt=0,Hs=1,wl=2,mh=3,gh=4,ad=5,Rn=100,Df=101,Lf=102,If=103,Uf=104,yr=200,Nf=201,Ff=202,Of=203,Tl=204,Al=205,Cl=206,zf=207,Rl=208,Bf=209,kf=210,Hf=211,Vf=212,Gf=213,Wf=214,Pl=0,Dl=1,Ll=2,qs=3,Il=4,Ul=5,Nl=6,Fl=7,Cc=0,Xf=1,qf=2,wi=0,ld=1,cd=2,hd=3,Rc=4,ud=5,dd=6,fd=7,pd=300,Ys=301,js=302,Ol=303,zl=304,sa=306,qn=1e3,es=1001,Bl=1002,nn=1003,Yf=1004,eo=1005,fn=1006,Ea=1007,ts=1008,Un=1009,md=1010,gd=1011,Lr=1012,Pc=1013,ss=1014,Vn=1015,Ri=1016,Dc=1017,Lc=1018,Zs=1020,_d=35902,vd=35899,xd=1021,Md=1022,yn=1023,Ir=1026,Ks=1027,Ic=1028,Uc=1029,yd=1030,Nc=1031,Fc=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,kl=35840,Hl=35841,Vl=35842,Gl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,jl=37809,Zl=37810,Kl=37811,$l=37812,Jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,oc=37821,ac=36492,lc=36494,cc=36495,hc=36283,uc=36284,dc=36285,fc=36286,jf=3200,Zf=3201,ra=0,Kf=1,oi="",ct="srgb",$s="srgb-linear",$o="linear",dt="srgb",xs=7680,_h=519,$f=512,Jf=513,Qf=514,Sd=515,ep=516,tp=517,np=518,ip=519,vh=35044,xh="300 es",Gn=2e3,Jo=2001;class us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mh=1234567;const Ar=Math.PI/180,Js=180/Math.PI;function ds(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Oc(i,e){return(i%e+e)%e}function sp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rp(i,e,t){return i!==e?(t-i)/(e-i):0}function Cr(i,e,t){return(1-t)*i+t*e}function op(i,e,t,n){return Cr(i,e,1-Math.exp(-t*n))}function ap(i,e=1){return e-Math.abs(Oc(i,e*2)-e)}function lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function up(i,e){return i+Math.random()*(e-i)}function dp(i){return i*(.5-Math.random())}function fp(i){i!==void 0&&(Mh=i);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(i){return i*Ar}function mp(i){return i*Js}function gp(i){return(i&i-1)===0&&i!==0}function _p(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xp(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),p=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Os(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const tt={DEG2RAD:Ar,RAD2DEG:Js,generateUUID:ds,clamp:$e,euclideanModulo:Oc,mapLinear:sp,inverseLerp:rp,lerp:Cr,damp:op,pingpong:ap,smoothstep:lp,smootherstep:cp,randInt:hp,randFloat:up,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:_p,floorPowerOfTwo:vp,setQuaternionFromProperEuler:xp,normalize:Qt,denormalize:Os};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==p||l!==d||h!==g){let m=1-a;const f=c*p+l*d+h*g+u*_,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const T=Math.sqrt(x),y=Math.atan2(T,f*M);m=Math.sin(m*y)/T,a=Math.sin(a*y)/T}const v=a*M;if(c=c*m+p*v,l=l*m+d*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*p,e[t+1]=c*g+h*p+l*u-a*d,e[t+2]=l*g+h*d+a*p-c*u,e[t+3]=h*g-a*u-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"YZX":this._x=p*h*u+l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u-p*d*g;break;case"XZY":this._x=p*h*u-l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new L,yh=new Yn;class Qe{constructor(e,t,n,s,r,o,a,c,l){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],_=s[0],m=s[3],f=s[6],M=s[1],x=s[4],v=s[7],T=s[2],y=s[5],C=s[8];return r[0]=o*_+a*M+c*T,r[3]=o*m+a*x+c*y,r[6]=o*f+a*v+c*C,r[1]=l*_+h*M+u*T,r[4]=l*m+h*x+u*y,r[7]=l*f+h*v+u*C,r[2]=p*_+d*M+g*T,r[5]=p*m+d*x+g*y,r[8]=p*f+d*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,p=a*c-h*r,d=l*r-o*c,g=t*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=p*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new Qe;function bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mp(){const i=Ur("canvas");return i.style.display="block",i}const Sh={};function Nr(i){i in Sh||(Sh[i]=!0,console.warn(i))}function yp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const bh=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eh=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sp(){const i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?$o:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:e,whitePoint:n,transfer:$o,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:bh,fromXYZ:Eh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),i}const st=Sp();function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ms;class bp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ms===void 0&&(Ms=Ur("canvas")),Ms.width=e.width,Ms.height=e.height;const s=Ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ep=0;class zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Aa(s[o].image)):r.push(Aa(s[o]))}else r=Aa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wp=0;const Ca=new L;class Ft extends us{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=es,s=es,r=fn,o=ts,a=yn,c=Un,l=Ft.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ds(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qn:e.x=e.x-Math.floor(e.x);break;case es:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qn:e.y=e.y-Math.floor(e.y);break;case es:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=pd;Ft.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(d+1)/2,T=(f+1)/2,y=(h+p)/4,C=(u+_)/4,R=(g+m)/4;return x>v&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=y/n,r=C/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=y/s,r=R/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=R/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(p-h)/M,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ft(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new zc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Tp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ed extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),no.subVectors(this.max,dr),ys.subVectors(e.a,dr),Ss.subVectors(e.b,dr),bs.subVectors(e.c,dr),pi.subVectors(Ss,ys),mi.subVectors(bs,Ss),Xi.subVectors(ys,bs);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Xi.z,Xi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Xi.z,0,-Xi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Xi.y,Xi.x,0];return!Ra(t,ys,Ss,bs,no)||(t=[1,0,0,0,1,0,0,0,1],!Ra(t,ys,Ss,bs,no))?!1:(io.crossVectors(pi,mi),t=[io.x,io.y,io.z],Ra(t,ys,Ss,bs,no))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Jn=[new L,new L,new L,new L,new L,new L,new L,new L],Tn=new L,to=new Nn,ys=new L,Ss=new L,bs=new L,pi=new L,mi=new L,Xi=new L,dr=new L,no=new L,io=new L,qi=new L;function Ra(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qi.fromArray(i,r);const a=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),c=e.dot(qi),l=t.dot(qi),h=n.dot(qi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Cp=new Nn,fr=new L,Pa=new L;class nr{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fr.subVectors(e,this.center);const t=fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fr.copy(e.center).add(Pa)),this.expandByPoint(fr.copy(e.center).sub(Pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Qn=new L,Da=new L,so=new L,gi=new L,La=new L,ro=new L,Ia=new L;class oa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Da.copy(e).add(t).multiplyScalar(.5),so.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(Da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(so),a=gi.dot(this.direction),c=-gi.dot(so),l=gi.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,d=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Da).addScaledVector(so,p),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){La.subVectors(t,e),ro.subVectors(n,e),Ia.crossVectors(La,ro);let o=this.direction.dot(Ia),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const c=a*this.direction.dot(ro.crossVectors(gi,ro));if(c<0)return null;const l=a*this.direction.dot(La.cross(gi));if(l<0||c+l>o)return null;const h=-a*gi.dot(Ia);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,s,r,o,a,c,l,h,u,p,d,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,p,d,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,p,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=p-_*l,t[9]=-a*c,t[2]=_-p*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const p=c*h,d=c*u,g=l*h,_=l*u;t[0]=p+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*h,d=c*u,g=l*h,_=l*u;t[0]=p-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=p*l+_,t[1]=c*u,t[5]=_*l+p,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-p*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=p-_*u}else if(e.order==="XZY"){const p=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=p*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Pp)}lookAt(e,t,n){const s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),_i.crossVectors(n,un),_i.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),_i.crossVectors(n,un)),_i.normalize(),oo.crossVectors(un,_i),s[0]=_i.x,s[4]=oo.x,s[8]=un.x,s[1]=_i.y,s[5]=oo.y,s[9]=un.y,s[2]=_i.z,s[6]=oo.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],x=n[7],v=n[11],T=n[15],y=s[0],C=s[4],R=s[8],S=s[12],E=s[1],D=s[5],F=s[9],V=s[13],k=s[2],q=s[6],W=s[10],G=s[14],z=s[3],K=s[7],H=s[11],j=s[15];return r[0]=o*y+a*E+c*k+l*z,r[4]=o*C+a*D+c*q+l*K,r[8]=o*R+a*F+c*W+l*H,r[12]=o*S+a*V+c*G+l*j,r[1]=h*y+u*E+p*k+d*z,r[5]=h*C+u*D+p*q+d*K,r[9]=h*R+u*F+p*W+d*H,r[13]=h*S+u*V+p*G+d*j,r[2]=g*y+_*E+m*k+f*z,r[6]=g*C+_*D+m*q+f*K,r[10]=g*R+_*F+m*W+f*H,r[14]=g*S+_*V+m*G+f*j,r[3]=M*y+x*E+v*k+T*z,r[7]=M*C+x*D+v*q+T*K,r[11]=M*R+x*F+v*W+T*H,r[15]=M*S+x*V+v*G+T*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],p=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*d-n*c*d)+_*(+t*c*d-t*l*p+r*o*p-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*p+s*o*u-n*o*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],p=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],M=u*m*l-_*p*l+_*c*d-a*m*d-u*c*f+a*p*f,x=g*p*l-h*m*l-g*c*d+o*m*d+h*c*f-o*p*f,v=h*_*l-g*u*l+g*a*d-o*_*d-h*a*f+o*u*f,T=g*u*c-h*_*c-g*a*p+o*_*p+h*a*m-o*u*m,y=t*M+n*x+s*v+r*T;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/y;return e[0]=M*C,e[1]=(_*p*r-u*m*r-_*s*d+n*m*d+u*s*f-n*p*f)*C,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*C,e[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*d-n*c*d)*C,e[4]=x*C,e[5]=(h*m*r-g*p*r+g*s*d-t*m*d-h*s*f+t*p*f)*C,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*f-t*c*f)*C,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*d+t*c*d)*C,e[8]=v*C,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*f-t*u*f)*C,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*C,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*C,e[12]=T*C,e[13]=(h*_*s-g*u*s+g*n*p-t*_*p-h*n*m+t*u*m)*C,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*p+t*a*p)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,p=r*l,d=r*h,g=r*u,_=o*h,m=o*u,f=a*u,M=c*l,x=c*h,v=c*u,T=n.x,y=n.y,C=n.z;return s[0]=(1-(_+f))*T,s[1]=(d+v)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(d-v)*y,s[5]=(1-(p+f))*y,s[6]=(m+M)*y,s[7]=0,s[8]=(g+x)*C,s[9]=(m-M)*C,s[10]=(1-(p+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);const l=1/r,h=1/o,u=1/a;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),p=(t+e)/(t-e),d=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Gn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Jo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),p=-(t+e)/(t-e),d=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Gn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Jo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Es=new L,An=new it,Rp=new L(0,0,0),Pp=new L(1,1,1),_i=new L,oo=new L,un=new L,wh=new it,Th=new Yn;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dp=0;const Ah=new L,ws=new Yn,ei=new it,ao=new L,pr=new L,Lp=new L,Ip=new Yn,Ch=new L(1,0,0),Rh=new L(0,1,0),Ph=new L(0,0,1),Dh={type:"added"},Up={type:"removed"},Ts={type:"childadded",child:null},Ua={type:"childremoved",child:null};class Rt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new L,t=new Fn,n=new Yn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Qe}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ao.copy(e):ao.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(pr,ao,this.up):ei.lookAt(ao,pr,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ei),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Up),Ua.child=e,this.dispatchEvent(Ua),Ua.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,e,Lp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,Ip,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new L(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new L,ti=new L,Na=new L,ni=new L,As=new L,Cs=new L,Lh=new L,Fa=new L,Oa=new L,za=new L,Ba=new pt,ka=new pt,Ha=new pt;class Pn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ti.subVectors(n,t),Na.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(ti),c=Cn.dot(Na),l=ti.dot(ti),h=ti.dot(Na),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,d=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(o,ni.y),c.addScaledVector(a,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ba.setScalar(0),ka.setScalar(0),Ha.setScalar(0),Ba.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,n),Ha.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ba,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Ha,r.z),o}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ti.subVectors(e,t),Cn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Cn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,n),Cs.subVectors(r,n),Fa.subVectors(e,n);const c=As.dot(Fa),l=Cs.dot(Fa);if(c<=0&&l<=0)return t.copy(n);Oa.subVectors(e,s);const h=As.dot(Oa),u=Cs.dot(Oa);if(h>=0&&u<=h)return t.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(As,o);za.subVectors(e,r);const d=As.dot(za),g=Cs.dot(za);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Cs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Lh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Lh,a);const f=1/(m+_+p);return o=_*f,a=p*f,t.copy(n).addScaledVector(As,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Va(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Oc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Va(o,r,e+1/3),this.g=Va(o,r,e),this.b=Va(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=wd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return st.workingToColorSpace($t.copy(this),e),Math.round($e($t.r*255,0,255))*65536+Math.round($e($t.g*255,0,255))*256+Math.round($e($t.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,r=$t.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=ct){st.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(lo);const n=Cr(vi.h,lo.h,t),s=Cr(vi.s,lo.s,t),r=Cr(vi.l,lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Be;Be.NAMES=wd;let Np=0;class di extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=Hs,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xt extends di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new L,co=new ce;let Fp=0;class cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vh,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)co.fromBufferAttribute(this,t),co.applyMatrix3(e),this.setXY(t,co.x,co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Os(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}}class Td extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ad extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ke extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Op=0;const xn=new it,Ga=new Rt,Rs=new L,dn=new Nn,mr=new Nn,kt=new L;class yt extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Ad:Td)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ke(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(dn.min,mr.min),dn.expandByPoint(kt),kt.addVectors(dn.max,mr.max),dn.expandByPoint(kt)):(dn.expandByPoint(mr.min),dn.expandByPoint(mr.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(e,l),kt.add(Rs)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;const l=new L,h=new L,u=new L,p=new ce,d=new ce,g=new ce,_=new L,m=new L;function f(R,S,E){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),p.fromBufferAttribute(r,R),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),h.sub(l),u.sub(l),d.sub(p),g.sub(p);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[R].add(_),a[S].add(_),a[E].add(_),c[R].add(m),c[S].add(m),c[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,S=M.length;R<S;++R){const E=M[R],D=E.start,F=E.count;for(let V=D,k=D+F;V<k;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new L,v=new L,T=new L,y=new L;function C(R){T.fromBufferAttribute(s,R),y.copy(T);const S=a[R];x.copy(S),x.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(y,S);const D=v.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,D)}for(let R=0,S=M.length;R<S;++R){const E=M[R],D=E.start,F=E.count;for(let V=D,k=D+F;V<k;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let p=0,d=e.count;p<d;p+=3){const g=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[d++]}return new cn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],d=e(p,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ih=new it,Yi=new oa,ho=new nr,Uh=new L,uo=new L,fo=new L,po=new L,Wa=new L,mo=new L,Nh=new L,go=new L;class Fe extends Rt{constructor(e=new yt,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Wa.fromBufferAttribute(u,e),o?mo.addScaledVector(Wa,h):mo.addScaledVector(Wa.sub(t),h))}t.add(mo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(r),Yi.copy(e.ray).recast(e.near),!(ho.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(ho,Uh)===null||Yi.origin.distanceToSquared(Uh)>(e.far-e.near)**2))&&(Ih.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=x;v<T;v+=3){const y=a.getX(v),C=a.getX(v+1),R=a.getX(v+2);s=_o(this,f,e,n,l,h,u,y,C,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=_o(this,o,e,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],f=o[m.materialIndex],M=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=x;v<T;v+=3){const y=v,C=v+1,R=v+2;s=_o(this,f,e,n,l,h,u,y,C,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const M=m,x=m+1,v=m+2;s=_o(this,o,e,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function zp(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ci,a),c===null)return null;go.copy(a),go.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(go);return l<t.near||l>t.far?null:{distance:l,point:go.clone(),object:i}}function _o(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,uo),i.getVertexPosition(c,fo),i.getVertexPosition(l,po);const h=zp(i,e,t,n,uo,fo,po,Nh);if(h){const u=new L;Pn.getBarycoord(Nh,uo,fo,po,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,a,c,l,u,new ce)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,a,c,l,u,new ce)),o&&(h.normal=Pn.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new L,materialIndex:0};Pn.getNormal(uo,fo,po,p.normal),h.face=p,h.barycoord=u}return h}class Ii extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function g(_,m,f,M,x,v,T,y,C,R,S){const E=v/C,D=T/R,F=v/2,V=T/2,k=y/2,q=C+1,W=R+1;let G=0,z=0;const K=new L;for(let H=0;H<W;H++){const j=H*D-V;for(let Q=0;Q<q;Q++){const de=Q*E-F;K[_]=de*M,K[m]=j*x,K[f]=k,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=y>0?1:-1,h.push(K.x,K.y,K.z),u.push(Q/C),u.push(1-H/R),G+=1}}for(let H=0;H<R;H++)for(let j=0;j<C;j++){const Q=p+j+q*H,de=p+j+q*(H+1),be=p+(j+1)+q*(H+1),Pe=p+(j+1)+q*H;c.push(Q,de,Pe),c.push(de,be,Pe),z+=6}a.addGroup(d,z,S),d+=z,p+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Qs(i[t]);for(const s in n)e[s]=n[s]}return e}function Bp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Si={clone:Qs,merge:en};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rd extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new L,Fh=new ce,Oh=new ce;class ln extends Rd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Oh),t.subVectors(Oh,Fh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Ds=1;class Vp extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Ps,Ds,e,t);s.layers=this.layers,this.add(s);const r=new ln(Ps,Ds,e,t);r.layers=this.layers,this.add(r);const o=new ln(Ps,Ds,e,t);o.layers=this.layers,this.add(o);const a=new ln(Ps,Ds,e,t);a.layers=this.layers,this.add(a);const c=new ln(Ps,Ds,e,t);c.layers=this.layers,this.add(c);const l=new ln(Ps,Ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pd extends Ft{constructor(e=[],t=Ys,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gp extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Pd(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ii(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Gt});r.uniforms.tEquirect.value=t;const o=new Fe(s,r),a=t.minFilter;return t.minFilter===ts&&(t.minFilter=fn),new Vp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class nt extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wp={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Dd extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class aa extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,h=nn,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ls=new it,Bh=new it,vo=[],kh=new Nn,Xp=new it,gr=new Fe,_r=new nr;class Ld extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),kh.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),_r.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(_r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),e.ray.intersectsSphere(_r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Bh.multiplyMatrices(n,Ls),gr.matrixWorld=Bh,gr.raycast(e,vo);for(let o=0,a=vo.length;o<a;o++){const c=vo[o];c.instanceId=r,c.object=this,t.push(c)}vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new aa(new Float32Array(s*this.count),s,this.count,Ic,Vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qa=new L,qp=new L,Yp=new Qe;class yi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qa.subVectors(n,t).cross(qp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yp.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new nr,jp=new ce(.5,.5),xo=new L;class kc{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],_=r[9],m=r[10],f=r[11],M=r[12],x=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,f-g,T-M).normalize(),s[1].setComponents(l+o,d+h,f+g,T+M).normalize(),s[2].setComponents(l+a,d+u,f+_,T+x).normalize(),s[3].setComponents(l-a,d-u,f-_,T-x).normalize(),n)s[4].setComponents(c,p,m,v).normalize(),s[5].setComponents(l-c,d-p,f-m,T-v).normalize();else if(s[4].setComponents(l-c,d-p,f-m,T-v).normalize(),t===Gn)s[5].setComponents(l+c,d+p,f+m,T+v).normalize();else if(t===Jo)s[5].setComponents(c,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const t=jp.distanceTo(e.center);return ji.radius=.7071067811865476+t,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Id extends di{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hh=new it,pc=new oa,Mo=new nr,yo=new L;class Vh extends Rt{constructor(e=new yt,t=new Id){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Hh.copy(s).invert(),pc.copy(e.ray).applyMatrix4(Hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=p,_=d;g<_;g++){const m=l.getX(g);yo.fromBufferAttribute(u,m),Gh(yo,m,c,s,e,t,this)}}else{const p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=p,_=d;g<_;g++)yo.fromBufferAttribute(u,g),Gh(yo,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gh(i,e,t,n,s,r,o){const a=pc.distanceSqToPoint(i);if(a<t){const c=new L;pc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Zp extends Ft{constructor(e,t,n,s,r=fn,o=fn,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}}class Ht extends Ft{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hc extends Ft{constructor(e,t,n=ss,s,r,o,a=nn,c=nn,l,h=Ir,u=1){if(h!==Ir&&h!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ud extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vc extends yt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,p=t,d=2*u+p,g=n*2+r,_=s+1,m=new L,f=new L;for(let M=0;M<=g;M++){let x=0,v=0,T=0,y=0;if(M<=n){const S=M/n,E=S*Math.PI/2;v=-h-e*Math.cos(E),T=e*Math.sin(E),y=-e*Math.cos(E),x=S*u}else if(M<=n+r){const S=(M-n)/r;v=-h+S*t,T=e,y=0,x=u+S*p}else{const S=(M-n-r)/n,E=S*Math.PI/2;v=h+e*Math.sin(E),T=e*Math.cos(E),y=e*Math.sin(E),x=u+p+S*u}const C=Math.max(0,Math.min(1,x/d));let R=0;M===0?R=.5/s:M===g&&(R=-.5/s);for(let S=0;S<=s;S++){const E=S/s,D=E*Math.PI*2,F=Math.sin(D),V=Math.cos(D);f.x=-T*V,f.y=v,f.z=T*F,a.push(f.x,f.y,f.z),m.set(-T*V,y,T*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(E+R,C)}if(M>0){const S=(M-1)*_;for(let E=0;E<s;E++){const D=S+E,F=S+E+1,V=M*_+E,k=M*_+E+1;o.push(D,F,V),o.push(F,k,V)}}}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class er extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,h=new ce;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Pi extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],d=[];let g=0;const _=[],m=n/2;let f=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function M(){const v=new L,T=new L;let y=0;const C=(t-e)/n;for(let R=0;R<=r;R++){const S=[],E=R/r,D=E*(t-e)+e;for(let F=0;F<=s;F++){const V=F/s,k=V*c+a,q=Math.sin(k),W=Math.cos(k);T.x=D*q,T.y=-E*n+m,T.z=D*W,u.push(T.x,T.y,T.z),v.set(q,C,W).normalize(),p.push(v.x,v.y,v.z),d.push(V,1-E),S.push(g++)}_.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){const E=_[S][R],D=_[S+1][R],F=_[S+1][R+1],V=_[S][R+1];(e>0||S!==0)&&(h.push(E,D,V),y+=3),(t>0||S!==r-1)&&(h.push(D,F,V),y+=3)}l.addGroup(f,y,0),f+=y}function x(v){const T=g,y=new ce,C=new L;let R=0;const S=v===!0?e:t,E=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*E,0),p.push(0,E,0),d.push(.5,.5),g++;const D=g;for(let F=0;F<=s;F++){const k=F/s*c+a,q=Math.cos(k),W=Math.sin(k);C.x=S*W,C.y=m*E,C.z=S*q,u.push(C.x,C.y,C.z),p.push(0,E,0),y.x=q*.5+.5,y.y=W*.5*E+.5,d.push(y.x,y.y),g++}for(let F=0;F<s;F++){const V=T+F,k=D+F;v===!0?h.push(k,k+1,V):h.push(k+1,k,V),R+=3}l.addGroup(f,R,v===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ce:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new L,s=[],r=[],o=[],a=new L,c=new it;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gc extends $n{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kp extends Gc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const So=new L,Ya=new Wc,ja=new Wc,Za=new Wc;class rs extends $n{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),l=So);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ya.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,_,m),ja.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,_,m),Za.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),ja.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Za.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Ya.calc(c),ja.calc(c),Za.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wh(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function $p(i,e){const t=1-i;return t*t*e}function Jp(i,e){return 2*(1-i)*i*e}function Qp(i,e){return i*i*e}function Rr(i,e,t,n){return $p(i,e)+Jp(i,t)+Qp(i,n)}function em(i,e){const t=1-i;return t*t*t*e}function tm(i,e){const t=1-i;return 3*t*t*i*e}function nm(i,e){return 3*(1-i)*i*i*e}function im(i,e){return i*i*i*e}function Pr(i,e,t,n,s){return em(i,e)+tm(i,t)+nm(i,n)+im(i,s)}class Nd extends $n{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(e,s.x,r.x,o.x,a.x),Pr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class sm extends $n{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Pr(e,s.x,r.x,o.x,a.x),Pr(e,s.y,r.y,o.y,a.y),Pr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fd extends $n{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rm extends $n{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Od extends $n{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zd extends $n{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,s.x,r.x,o.x),Rr(e,s.y,r.y,o.y),Rr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bd extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Wh(a,c.x,l.x,h.x,u.x),Wh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var Qo=Object.freeze({__proto__:null,ArcCurve:Kp,CatmullRomCurve3:rs,CubicBezierCurve:Nd,CubicBezierCurve3:sm,EllipseCurve:Gc,LineCurve:Fd,LineCurve3:rm,QuadraticBezierCurve:Od,QuadraticBezierCurve3:zd,SplineCurve:Bd});class om extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}}class mc extends om{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Fd(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Od(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Nd(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Bd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Gc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Zn extends mc{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new mc().fromJSON(s))}return this}}function am(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=kd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=dm(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let p=t;p<s;p+=t){const d=i[p],g=i[p+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Fr(r,o,t,a,c,l,0),o}function kd(i,e,t,n,s){let r;if(s===bm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Xh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Xh(o/n|0,i[o],i[o+1],r);return r&&tr(r,r.next)&&(zr(r),r=r.next),r}function os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||Et(t.prev,t,t.next)===0)){if(zr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&_m(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?cm(i,n,s,r):lm(i)){e.push(c.i,i.i,l.i),zr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=hm(os(i),e),Fr(i,e,t,n,s,r,2)):o===2&&um(i,e,t,n,s,r):Fr(os(i),e,t,n,s,r,1);break}}}function lm(i){const e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),p=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&Sr(s,a,r,c,o,l,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function cm(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Et(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,p=o.y,d=Math.min(a,c,l),g=Math.min(h,u,p),_=Math.max(a,c,l),m=Math.max(h,u,p),f=gc(d,g,e,t,n),M=gc(_,m,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=f&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Sr(a,h,c,u,l,p,x.x,x.y)&&Et(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Sr(a,h,c,u,l,p,v.x,v.y)&&Et(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=f;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Sr(a,h,c,u,l,p,x.x,x.y)&&Et(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Sr(a,h,c,u,l,p,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function hm(i,e){let t=i;do{const n=t.prev,s=t.next.next;!tr(n,s)&&Vd(n,t,t.next,s)&&Or(n,s)&&Or(s,n)&&(e.push(n.i,t.i,s.i),zr(t),zr(t.next),t=i=s),t=t.next}while(t!==i);return os(t)}function um(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Mm(o,a)){let c=Gd(o,a);o=os(o,o.next),c=os(c,c.next),Fr(o,e,t,n,s,r,0),Fr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function dm(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=kd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(xm(l))}s.sort(fm);for(let r=0;r<s.length;r++)t=pm(s[r],t);return t}function fm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function pm(i,e){const t=mm(i,e);if(!t)return e;const n=Gd(t,i);return os(n,n.next),os(t,t.next)}function mm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(tr(i,t))return t;do{if(tr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Hd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Or(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&gm(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function gm(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function _m(i,e,t,n){let s=i;do s.z===0&&(s.z=gc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vm(s)}function vm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function gc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Hd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Sr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Hd(i,e,t,n,s,r,o,a)}function Mm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ym(i,e)&&(Or(i,e)&&Or(e,i)&&Sm(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||tr(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function tr(i,e){return i.x===e.x&&i.y===e.y}function Vd(i,e,t,n){const s=Eo(Et(i,e,t)),r=Eo(Et(i,e,n)),o=Eo(Et(t,n,i)),a=Eo(Et(t,n,e));return!!(s!==r&&o!==a||s===0&&bo(i,t,e)||r===0&&bo(i,n,e)||o===0&&bo(t,i,n)||a===0&&bo(t,e,n))}function bo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Eo(i){return i>0?1:i<0?-1:0}function ym(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Or(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Sm(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gd(i,e){const t=_c(i.i,i.x,i.y),n=_c(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xh(i,e,t,n){const s=_c(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _c(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Em{static triangulate(e,t,n=2){return am(e,t,n)}}class ci{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ci.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];qh(e),Yh(n,e);let o=e.length;t.forEach(qh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Yh(n,t[c]);const a=Em.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function qh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ui extends yt{constructor(e=new Zn([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:wm;let x,v=!1,T,y,C,R;f&&(x=f.getSpacedPoints(h),v=!0,p=!1,T=f.computeFrenetFrames(h,!1),y=new L,C=new L,R=new L),p||(m=0,d=0,g=0,_=0);const S=a.extractPoints(l);let E=S.shape;const D=S.holes;if(!ci.isClockWise(E)){E=E.reverse();for(let ne=0,te=D.length;ne<te;ne++){const se=D[ne];ci.isClockWise(se)&&(D[ne]=se.reverse())}}function V(ne){const se=10000000000000001e-36;let ie=ne[0];for(let Se=1;Se<=ne.length;Se++){const ue=Se%ne.length,xe=ne[ue],ke=xe.x-ie.x,ze=xe.y-ie.y,P=ke*ke+ze*ze,b=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(ie.x),Math.abs(ie.y)),X=se*b*b;if(P<=X){ne.splice(ue,1),Se--;continue}ie=xe}}V(E),D.forEach(V);const k=D.length,q=E;for(let ne=0;ne<k;ne++){const te=D[ne];E=E.concat(te)}function W(ne,te,se){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(te,se)}const G=E.length;function z(ne,te,se){let ie,Se,ue;const xe=ne.x-te.x,ke=ne.y-te.y,ze=se.x-ne.x,P=se.y-ne.y,b=xe*xe+ke*ke,X=xe*P-ke*ze;if(Math.abs(X)>Number.EPSILON){const $=Math.sqrt(b),he=Math.sqrt(ze*ze+P*P),ee=te.x-ke/$,Le=te.y+xe/$,Me=se.x-P/he,Ie=se.y+ze/he,Ne=((Me-ee)*P-(Ie-Le)*ze)/(xe*P-ke*ze);ie=ee+xe*Ne-ne.x,Se=Le+ke*Ne-ne.y;const ge=ie*ie+Se*Se;if(ge<=2)return new ce(ie,Se);ue=Math.sqrt(ge/2)}else{let $=!1;xe>Number.EPSILON?ze>Number.EPSILON&&($=!0):xe<-Number.EPSILON?ze<-Number.EPSILON&&($=!0):Math.sign(ke)===Math.sign(P)&&($=!0),$?(ie=-ke,Se=xe,ue=Math.sqrt(b)):(ie=xe,Se=ke,ue=Math.sqrt(b/2))}return new ce(ie/ue,Se/ue)}const K=[];for(let ne=0,te=q.length,se=te-1,ie=ne+1;ne<te;ne++,se++,ie++)se===te&&(se=0),ie===te&&(ie=0),K[ne]=z(q[ne],q[se],q[ie]);const H=[];let j,Q=K.concat();for(let ne=0,te=k;ne<te;ne++){const se=D[ne];j=[];for(let ie=0,Se=se.length,ue=Se-1,xe=ie+1;ie<Se;ie++,ue++,xe++)ue===Se&&(ue=0),xe===Se&&(xe=0),j[ie]=z(se[ie],se[ue],se[xe]);H.push(j),Q=Q.concat(j)}let de;if(m===0)de=ci.triangulateShape(q,D);else{const ne=[],te=[];for(let se=0;se<m;se++){const ie=se/m,Se=d*Math.cos(ie*Math.PI/2),ue=g*Math.sin(ie*Math.PI/2)+_;for(let xe=0,ke=q.length;xe<ke;xe++){const ze=W(q[xe],K[xe],ue);_e(ze.x,ze.y,-Se),ie===0&&ne.push(ze)}for(let xe=0,ke=k;xe<ke;xe++){const ze=D[xe];j=H[xe];const P=[];for(let b=0,X=ze.length;b<X;b++){const $=W(ze[b],j[b],ue);_e($.x,$.y,-Se),ie===0&&P.push($)}ie===0&&te.push(P)}}de=ci.triangulateShape(ne,te)}const be=de.length,Pe=g+_;for(let ne=0;ne<G;ne++){const te=p?W(E[ne],Q[ne],Pe):E[ne];v?(C.copy(T.normals[0]).multiplyScalar(te.x),y.copy(T.binormals[0]).multiplyScalar(te.y),R.copy(x[0]).add(C).add(y),_e(R.x,R.y,R.z)):_e(te.x,te.y,0)}for(let ne=1;ne<=h;ne++)for(let te=0;te<G;te++){const se=p?W(E[te],Q[te],Pe):E[te];v?(C.copy(T.normals[ne]).multiplyScalar(se.x),y.copy(T.binormals[ne]).multiplyScalar(se.y),R.copy(x[ne]).add(C).add(y),_e(R.x,R.y,R.z)):_e(se.x,se.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){const te=ne/m,se=d*Math.cos(te*Math.PI/2),ie=g*Math.sin(te*Math.PI/2)+_;for(let Se=0,ue=q.length;Se<ue;Se++){const xe=W(q[Se],K[Se],ie);_e(xe.x,xe.y,u+se)}for(let Se=0,ue=D.length;Se<ue;Se++){const xe=D[Se];j=H[Se];for(let ke=0,ze=xe.length;ke<ze;ke++){const P=W(xe[ke],j[ke],ie);v?_e(P.x,P.y+x[h-1].y,x[h-1].x+se):_e(P.x,P.y,u+se)}}}Y(),Z();function Y(){const ne=s.length/3;if(p){let te=0,se=G*te;for(let ie=0;ie<be;ie++){const Se=de[ie];fe(Se[2]+se,Se[1]+se,Se[0]+se)}te=h+m*2,se=G*te;for(let ie=0;ie<be;ie++){const Se=de[ie];fe(Se[0]+se,Se[1]+se,Se[2]+se)}}else{for(let te=0;te<be;te++){const se=de[te];fe(se[2],se[1],se[0])}for(let te=0;te<be;te++){const se=de[te];fe(se[0]+G*h,se[1]+G*h,se[2]+G*h)}}n.addGroup(ne,s.length/3-ne,0)}function Z(){const ne=s.length/3;let te=0;me(q,te),te+=q.length;for(let se=0,ie=D.length;se<ie;se++){const Se=D[se];me(Se,te),te+=Se.length}n.addGroup(ne,s.length/3-ne,1)}function me(ne,te){let se=ne.length;for(;--se>=0;){const ie=se;let Se=se-1;Se<0&&(Se=ne.length-1);for(let ue=0,xe=h+m*2;ue<xe;ue++){const ke=G*ue,ze=G*(ue+1),P=te+ie+ke,b=te+Se+ke,X=te+Se+ze,$=te+ie+ze;Ve(P,b,X,$)}}}function _e(ne,te,se){c.push(ne),c.push(te),c.push(se)}function fe(ne,te,se){Ye(ne),Ye(te),Ye(se);const ie=s.length/3,Se=M.generateTopUV(n,s,ie-3,ie-2,ie-1);I(Se[0]),I(Se[1]),I(Se[2])}function Ve(ne,te,se,ie){Ye(ne),Ye(te),Ye(ie),Ye(te),Ye(se),Ye(ie);const Se=s.length/3,ue=M.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);I(ue[0]),I(ue[1]),I(ue[3]),I(ue[1]),I(ue[2]),I(ue[3])}function Ye(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function I(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Tm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Qo[s.type]().fromJSON(s)),new Ui(n,e.options)}}const wm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ce(r,o),new ce(a,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ce(o,1-c),new ce(l,1-u),new ce(p,1-g),new ce(_,1-f)]:[new ce(a,1-c),new ce(h,1-u),new ce(d,1-g),new ce(m,1-f)]}};function Tm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Gr extends yt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$e(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new L,p=new ce,d=new L,g=new L,_=new L;let m=0,f=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,f=e[M+1].y-e[M].y,d.x=f*1,d.y=-m,d.z=f*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[M+1].x-e[M].x,f=e[M+1].y-e[M].y,d.x=f*1,d.y=-m,d.z=f*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let M=0;M<=t;M++){const x=n+M*h*s,v=Math.sin(x),T=Math.cos(x);for(let y=0;y<=e.length-1;y++){u.x=e[y].x*v,u.y=e[y].y,u.z=e[y].x*T,o.push(u.x,u.y,u.z),p.x=M/t,p.y=y/(e.length-1),a.push(p.x,p.y);const C=c[3*y+0]*v,R=c[3*y+1],S=c[3*y+0]*T;l.push(C,R,S)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){const v=x+M*e.length,T=v,y=v+e.length,C=v+e.length+1,R=v+1;r.push(T,y,R),r.push(C,R,y)}this.setIndex(r),this.setAttribute("position",new Ke(o,3)),this.setAttribute("uv",new Ke(a,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.points,e.segments,e.phiStart,e.phiLength)}}class Pt extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,p=t/c,d=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const M=f*p-o;for(let x=0;x<l;x++){const v=x*u-r;g.push(v,-M,0),_.push(0,0,1),m.push(x/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const x=M+l*f,v=M+l*(f+1),T=M+1+l*(f+1),y=M+1+l*f;d.push(x,v,y),d.push(v,T,y)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xc extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const p=(t-e)/s,d=new L,g=new ce;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;d.x=u*Math.cos(f),d.y=u*Math.sin(f),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const M=f+m,x=M,v=M+n+1,T=M+n+2,y=M+1;a.push(x,v,y),a.push(v,T,y)}}this.setIndex(a),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ti extends yt{constructor(e=new Zn([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ke(s,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(o,2));function l(h){const u=s.length/3,p=h.extractPoints(t);let d=p.shape;const g=p.holes;ci.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=g.length;m<f;m++){const M=g[m];ci.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=ci.triangulateShape(d,g);for(let m=0,f=g.length;m<f;m++){const M=g[m];d=d.concat(M)}for(let m=0,f=d.length;m<f;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,f=_.length;m<f;m++){const M=_[m],x=M[0]+u,v=M[1]+u,T=M[2]+u;n.push(x,v,T),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Am(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Ti(n,e.curveSegments)}}function Am(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class ui extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,p=new L,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const M=[],x=f/n;let v=0;f===0&&o===0?v=.5/t:f===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){const y=T/t;u.x=-e*Math.cos(s+y*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+y*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),m.push(y+v,1-x),M.push(l++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<t;M++){const x=h[f][M+1],v=h[f][M],T=h[f+1][M],y=h[f+1][M+1];(f!==0||o>0)&&d.push(x,v,y),(f!==n-1||c<Math.PI)&&d.push(v,T,y)}this.setIndex(d),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ui(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Di extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new L,u=new L,p=new L;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,M=(s+1)*d+g;o.push(_,m,M),o.push(m,f,M)}this.setIndex(o),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Wr extends yt{constructor(e=new zd(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,c=new L,l=new ce;let h=new L;const u=[],p=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(p,3)),this.setAttribute("uv",new Ke(d,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),M(),f()}function m(x){h=e.getPointAt(x/t,h);const v=o.normals[x],T=o.binormals[x];for(let y=0;y<=s;y++){const C=y/s*Math.PI*2,R=Math.sin(C),S=-Math.cos(C);c.x=S*v.x+R*T.x,c.y=S*v.y+R*T.y,c.z=S*v.z+R*T.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){const T=(s+1)*(x-1)+(v-1),y=(s+1)*x+(v-1),C=(s+1)*x+v,R=(s+1)*(x-1)+v;g.push(T,y,R),g.push(y,C,R)}}function M(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)l.x=x/t,l.y=v/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Wr(new Qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Cm extends di{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Be(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Rm extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vt extends di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pn extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pm extends di{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Dm extends di{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lm extends di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Im extends di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Um{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=l.length;u<p;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nm=new Um;class qc{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qc.DEFAULT_MATERIAL_NAME="__DEFAULT";const Is=new WeakMap;class Fm extends qc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ka.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Is.get(o);u===void 0&&(u=[],Is.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=Ur("img");function c(){h(),t&&t(this);const u=Is.get(this)||[];for(let p=0;p<u.length;p++){const d=u[p];d.onLoad&&d.onLoad(this)}Is.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ka.remove(`image:${e}`);const p=Is.get(this)||[];for(let d=0;d<p.length;d++){const g=p[d];g.onError&&g.onError(u)}Is.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ka.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class jh extends qc{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,o=new Fm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class la extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Om extends la{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $a=new it,Zh=new L,Kh=new L;class Yc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kc,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zh),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),$a.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zm extends Yc{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jc extends la{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $h=new it,vr=new L,Ja=new L;class Bm extends Yc{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(vr),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h,n.coordinateSystem,n.reversedDepth)}}class Zc extends la{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kc extends Rd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class km extends Yc{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hm extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new km}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vm extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Gm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Jh=new it;class Wd{constructor(e,t,n=0,s=1/0){this.ray=new oa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Bc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Jh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jh),this}intersectObject(e,t=!0,n=[]){return vc(e,this,n,t),n.sort(Qh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vc(e[s],this,n,t);return n.sort(Qh),n}}function Qh(i,e){return i.distance-e.distance}function vc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)vc(r[o],e,t,!0)}}class eu{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wm extends us{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function tu(i,e,t,n){const s=Xm(n);switch(t){case xd:return i*e;case Ic:return i*e/s.components*s.byteLength;case Uc:return i*e/s.components*s.byteLength;case yd:return i*e*2/s.components*s.byteLength;case Nc:return i*e*2/s.components*s.byteLength;case Md:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Fc:return i*e*4/s.components*s.byteLength;case Vo:case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Gl:return Math.max(i,16)*Math.max(e,8)/4;case kl:case Vl:return Math.max(i,8)*Math.max(e,8)/2;case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ac:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case hc:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xm(i){switch(i){case Un:case md:return{byteLength:1,components:1};case Lr:case gd:case Ri:return{byteLength:2,components:1};case Dc:case Lc:return{byteLength:2,components:4};case ss:case Pc:case Vn:return{byteLength:4,components:1};case _d:case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);function Xd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,u[p]=_)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jm=`#ifdef USE_ALPHAHASH
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
#endif`,Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qm=`#ifdef USE_AOMAP
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
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,n0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,i0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,o0=`#ifdef USE_IRIDESCENCE
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
#endif`,a0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,z0=`uniform bool receiveShadow;
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
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`struct PhysicalMaterial {
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ng=`#if defined( USE_POINTS_UV )
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
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
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
#endif`,cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
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
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
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
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ig=`#ifdef USE_SKINNING
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
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define LAMBERT
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
}`,h_=`#define MATCAP
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
}`,u_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
}`,f_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,__=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,x_=`#define TOON
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
}`,M_=`uniform float size;
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
}`,y_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,b_=`uniform vec3 color;
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
}`,E_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Ym,alphahash_pars_fragment:jm,alphamap_fragment:Zm,alphamap_pars_fragment:Km,alphatest_fragment:$m,alphatest_pars_fragment:Jm,aomap_fragment:Qm,aomap_pars_fragment:e0,batching_pars_vertex:t0,batching_vertex:n0,begin_vertex:i0,beginnormal_vertex:s0,bsdfs:r0,iridescence_fragment:o0,bumpmap_pars_fragment:a0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:c0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:u0,color_fragment:d0,color_pars_fragment:f0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:v0,displacementmap_pars_vertex:x0,displacementmap_vertex:M0,emissivemap_fragment:y0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:E0,envmap_fragment:w0,envmap_common_pars_fragment:T0,envmap_pars_fragment:A0,envmap_pars_vertex:C0,envmap_physical_pars_fragment:B0,envmap_vertex:R0,fog_vertex:P0,fog_pars_vertex:D0,fog_fragment:L0,fog_pars_fragment:I0,gradientmap_pars_fragment:U0,lightmap_pars_fragment:N0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:O0,lights_pars_begin:z0,lights_toon_fragment:k0,lights_toon_pars_fragment:H0,lights_phong_fragment:V0,lights_phong_pars_fragment:G0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:j0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:$0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:eg,map_particle_fragment:tg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:rg,morphcolor_vertex:og,morphnormal_vertex:ag,morphtarget_pars_vertex:lg,morphtarget_vertex:cg,normal_fragment_begin:hg,normal_fragment_maps:ug,normal_pars_fragment:dg,normal_pars_vertex:fg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:vg,iridescence_pars_fragment:xg,opaque_fragment:Mg,packing:yg,premultiplied_alpha_fragment:Sg,project_vertex:bg,dithering_fragment:Eg,dithering_pars_fragment:wg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Rg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Dg,skinbase_vertex:Lg,skinning_pars_vertex:Ig,skinning_vertex:Ug,skinnormal_vertex:Ng,specularmap_fragment:Fg,specularmap_pars_fragment:Og,tonemapping_fragment:zg,tonemapping_pars_fragment:Bg,transmission_fragment:kg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Wg,worldpos_vertex:Xg,background_vert:qg,background_frag:Yg,backgroundCube_vert:jg,backgroundCube_frag:Zg,cube_vert:Kg,cube_frag:$g,depth_vert:Jg,depth_frag:Qg,distanceRGBA_vert:e_,distanceRGBA_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:h_,meshmatcap_frag:u_,meshnormal_vert:d_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:__,meshtoon_vert:v_,meshtoon_frag:x_,points_vert:M_,points_frag:y_,shadow_vert:S_,shadow_frag:b_,sprite_vert:E_,sprite_frag:w_},Ce={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Bn={basic:{uniforms:en([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:en([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:en([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:en([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:en([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Be(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:en([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:en([Ce.points,Ce.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:en([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:en([Ce.common,Ce.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:en([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:en([Ce.sprite,Ce.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:en([Ce.common,Ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:en([Ce.lights,Ce.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Bn.physical={uniforms:en([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const wo={r:0,b:0,g:0},Zi=new Fn,T_=new it;function A_(i,e,t,n,s,r,o){const a=new Be(0);let c=r===!0?0:1,l,h,u=null,p=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const T=g(x);T===null?f(a,c):T&&T.isColor&&(f(T,1),v=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===sa)?(h===void 0&&(h=new Fe(new Ii(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Qs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(y,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(v.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Zi)),h.material.toneMapped=st.getTransfer(T.colorSpace)!==dt,(u!==T||p!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,p=T.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Fe(new Pt(2,2),new Wt({name:"BackgroundMaterial",uniforms:Qs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=st.getTransfer(T.colorSpace)!==dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,p=T.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,v){x.getRGB(wo,Cd(i)),n.buffers.color.setClear(wo.r,wo.g,wo.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(a,c)},render:_,addToRenderList:m,dispose:M}}function C_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(E,D,F,V,k){let q=!1;const W=u(V,F,D);r!==W&&(r=W,l(r.object)),q=d(E,V,F,k),q&&g(E,V,F,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(E,D,F,V),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,D,F){const V=F.wireframe===!0;let k=n[E.id];k===void 0&&(k={},n[E.id]=k);let q=k[D.id];q===void 0&&(q={},k[D.id]=q);let W=q[V];return W===void 0&&(W=p(c()),q[V]=W),W}function p(E){const D=[],F=[],V=[];for(let k=0;k<t;k++)D[k]=0,F[k]=0,V[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:V,object:E,attributes:{},index:null}}function d(E,D,F,V){const k=r.attributes,q=D.attributes;let W=0;const G=F.getAttributes();for(const z in G)if(G[z].location>=0){const H=k[z];let j=q[z];if(j===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),H===void 0||H.attribute!==j||j&&H.data!==j.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(E,D,F,V){const k={},q=D.attributes;let W=0;const G=F.getAttributes();for(const z in G)if(G[z].location>=0){let H=q[z];H===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(H=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(H=E.instanceColor));const j={};j.attribute=H,H&&H.data&&(j.data=H.data),k[z]=j,W++}r.attributes=k,r.attributesNum=W,r.index=V}function _(){const E=r.newAttributes;for(let D=0,F=E.length;D<F;D++)E[D]=0}function m(E){f(E,0)}function f(E,D){const F=r.newAttributes,V=r.enabledAttributes,k=r.attributeDivisors;F[E]=1,V[E]===0&&(i.enableVertexAttribArray(E),V[E]=1),k[E]!==D&&(i.vertexAttribDivisor(E,D),k[E]=D)}function M(){const E=r.newAttributes,D=r.enabledAttributes;for(let F=0,V=D.length;F<V;F++)D[F]!==E[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function x(E,D,F,V,k,q,W){W===!0?i.vertexAttribIPointer(E,D,F,k,q):i.vertexAttribPointer(E,D,F,V,k,q)}function v(E,D,F,V){_();const k=V.attributes,q=F.getAttributes(),W=D.defaultAttributeValues;for(const G in q){const z=q[G];if(z.location>=0){let K=k[G];if(K===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){const H=K.normalized,j=K.itemSize,Q=e.get(K);if(Q===void 0)continue;const de=Q.buffer,be=Q.type,Pe=Q.bytesPerElement,Y=be===i.INT||be===i.UNSIGNED_INT||K.gpuType===Pc;if(K.isInterleavedBufferAttribute){const Z=K.data,me=Z.stride,_e=K.offset;if(Z.isInstancedInterleavedBuffer){for(let fe=0;fe<z.locationSize;fe++)f(z.location+fe,Z.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<z.locationSize;fe++)m(z.location+fe);i.bindBuffer(i.ARRAY_BUFFER,de);for(let fe=0;fe<z.locationSize;fe++)x(z.location+fe,j/z.locationSize,be,H,me*Pe,(_e+j/z.locationSize*fe)*Pe,Y)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)f(z.location+Z,K.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<z.locationSize;Z++)m(z.location+Z);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Z=0;Z<z.locationSize;Z++)x(z.location+Z,j/z.locationSize,be,H,j*Pe,j/z.locationSize*Z*Pe,Y)}}else if(W!==void 0){const H=W[G];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(z.location,H);break;case 3:i.vertexAttrib3fv(z.location,H);break;case 4:i.vertexAttrib4fv(z.location,H);break;default:i.vertexAttrib1fv(z.location,H)}}}}M()}function T(){R();for(const E in n){const D=n[E];for(const F in D){const V=D[F];for(const k in V)h(V[k].object),delete V[k];delete D[F]}delete n[E]}}function y(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const F in D){const V=D[F];for(const k in V)h(V[k].object),delete V[k];delete D[F]}delete n[E.id]}function C(E){for(const D in n){const F=n[D];if(F[E.id]===void 0)continue;const V=F[E.id];for(const k in V)h(V[k].object),delete V[k];delete F[E.id]}}function R(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function R_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,p){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*p[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function P_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===Ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Un&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!R)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,y=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:T,maxSamples:y}}function D_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new yi,a=new Qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,x=M*4;let v=f.clippingState||null;c.value=v,v=h(g,p,x,d);for(let T=0;T!==x;++T)v[T]=t[T];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=d+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function L_(i){let e=new WeakMap;function t(o,a){return a===Ol?o.mapping=Ys:a===zl&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ol||a===zl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Gp(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Bs=4,nu=[.125,.215,.35,.446,.526,.582],Qi=20,Qa=new Kc,iu=new Be;let el=null,tl=0,nl=0,il=!1;const Ji=(1+Math.sqrt(5))/2,Us=1/Ji,su=[new L(-Ji,Us,0),new L(Ji,Us,0),new L(-Us,0,Ji),new L(Us,0,Ji),new L(0,Ji,-Us),new L(0,Ji,Us),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],I_=new L;class xc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=I_}=r;el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=au(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),this._renderer.xr.enabled=il,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Ri,format:yn,colorSpace:$s,depthBuffer:!1},s=ru(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ru(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U_(r)),this._blurMaterial=N_(r,e,t)}return s}_compileMaterial(e){const t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,n,s,r){const c=new ln(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(iu),u.toneMapping=wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new Xt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new Fe(new Ii,_);let f=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,f=!0):(_.color.copy(iu),f=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const T=this._cubeSize;To(s,v*T,x>2?T:0,T,T),u.setRenderTarget(s),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ys||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=au()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;To(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=su[(s-r-1)%su.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Fe(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Qi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const f=[];let M=0;for(let C=0;C<Qi;++C){const R=C/_,S=Math.exp(-R*R/2);f.push(S),C===0?M+=S:C<m&&(M+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const v=this._sizeLods[s],T=3*v*(s>x-Bs?s-x+Bs:0),y=4*(this._cubeSize-v);To(t,T,y,3*v,2*v),c.setRenderTarget(t),c.render(u,Qa)}}function U_(i){const e=[],t=[],n=[];let s=i;const r=i-Bs+1+nu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Bs?c=nu[o-i+Bs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*d),x=new Float32Array(m*g*d),v=new Float32Array(f*g*d);for(let y=0;y<d;y++){const C=y%3*2/3-1,R=y>2?0:-1,S=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];M.set(S,_*g*y),x.set(p,m*g*y);const E=[y,y,y,y,y,y];v.set(E,f*g*y)}const T=new yt;T.setAttribute("position",new cn(M,_)),T.setAttribute("uv",new cn(x,m)),T.setAttribute("faceIndex",new cn(v,f)),e.push(T),s>Bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ru(i,e,t){const n=new jn(i,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function N_(i,e,t){const n=new Float32Array(Qi),s=new L(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function ou(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function au(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gt,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function F_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ol||c===zl,h=c===Ys||c===js;if(l||h){let u=e.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new xc(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new xc(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function O_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function z_(i,e,t,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const d in p)e.update(p[d],i.ARRAY_BUFFER)}function l(u){const p=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const T=M[x+0],y=M[x+1],C=M[x+2];p.push(T,y,y,C,C,T)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const T=x+0,y=x+1,C=x+2;p.push(T,y,y,C,C,T)}}else return;const m=new(bd(p)?Ad:Td)(p,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function B_(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*o),t.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}function u(p,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=d[M]*_[M];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function k_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function H_(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const y=new Float32Array(v*T*4*u),C=new Ed(y,v,T,u);C.type=Vn,C.needsUpdate=!0;const R=x*4;for(let E=0;E<u;E++){const D=m[E],F=f[E],V=M[E],k=v*T*4*E;for(let q=0;q<D.count;q++){const W=q*R;d===!0&&(s.fromBufferAttribute(D,q),y[k+W+0]=s.x,y[k+W+1]=s.y,y[k+W+2]=s.z,y[k+W+3]=0),g===!0&&(s.fromBufferAttribute(F,q),y[k+W+4]=s.x,y[k+W+5]=s.y,y[k+W+6]=s.z,y[k+W+7]=0),_===!0&&(s.fromBufferAttribute(V,q),y[k+W+8]=s.x,y[k+W+9]=s.y,y[k+W+10]=s.z,y[k+W+11]=V.itemSize===4?s.w:1)}}p={count:u,texture:C,size:new ce(v,T)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function V_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const qd=new Ft,lu=new Hc(1,1),Yd=new Ed,jd=new Ap,Zd=new Pd,cu=[],hu=[],uu=new Float32Array(16),du=new Float32Array(9),fu=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=cu[s];if(r===void 0&&(r=new Float32Array(s),cu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ca(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function W_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Y_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;fu.set(n),i.uniformMatrix2fv(this.addr,!1,fu),zt(t,n)}}function j_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),zt(t,n)}}function Z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Ot(t,n))return;uu.set(n),i.uniformMatrix4fv(this.addr,!1,uu),zt(t,n)}}function K_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function e1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function n1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function s1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=Sd,r=lu):r=qd,t.setTexture2D(e||r,s)}function r1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jd,s)}function o1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zd,s)}function a1(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yd,s)}function l1(i){switch(i){case 5126:return G_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return j_;case 35676:return Z_;case 5124:case 35670:return K_;case 35667:case 35671:return $_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function c1(i,e){i.uniform1fv(this.addr,e)}function h1(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function u1(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function d1(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function f1(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p1(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function m1(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function g1(i,e){i.uniform1iv(this.addr,e)}function _1(i,e){i.uniform2iv(this.addr,e)}function v1(i,e){i.uniform3iv(this.addr,e)}function x1(i,e){i.uniform4iv(this.addr,e)}function M1(i,e){i.uniform1uiv(this.addr,e)}function y1(i,e){i.uniform2uiv(this.addr,e)}function S1(i,e){i.uniform3uiv(this.addr,e)}function b1(i,e){i.uniform4uiv(this.addr,e)}function E1(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||qd,r[o])}function w1(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jd,r[o])}function T1(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zd,r[o])}function A1(i,e,t){const n=this.cache,s=e.length,r=ca(t,s);Ot(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Yd,r[o])}function C1(i){switch(i){case 5126:return c1;case 35664:return h1;case 35665:return u1;case 35666:return d1;case 35674:return f1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return M1;case 36294:return y1;case 36295:return S1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}class R1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=l1(t.type)}}class P1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C1(t.type)}}class D1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function pu(i,e){i.seq.push(e),i.map[e.id]=e}function L1(i,e,t){const n=i.name,s=n.length;for(sl.lastIndex=0;;){const r=sl.exec(n),o=sl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pu(t,l===void 0?new R1(a,i,e):new P1(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new D1(a),pu(t,u)),t=u}}}class qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);L1(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function mu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const I1=37297;let U1=0;function N1(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const gu=new Qe;function F1(i){st._getMatrix(gu,st.workingColorSpace,i);const e=`mat3( ${gu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case $o:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _u(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+N1(i.getShaderSource(e),a)}else return r}function O1(i,e){const t=F1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z1(i,e){let t;switch(e){case ld:t="Linear";break;case cd:t="Reinhard";break;case hd:t="Cineon";break;case Rc:t="ACESFilmic";break;case dd:t="AgX";break;case fd:t="Neutral";break;case ud:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ao=new L;function B1(){st.getLuminanceCoefficients(Ao);const i=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function H1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function br(i){return i!==""}function vu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(G1,X1)}const W1=new Map;function X1(i,e){let t=Je[e];if(t===void 0){const n=W1.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(q1,Y1)}function Y1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function j1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Z1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ys:case js:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===js&&(e="ENVMAP_MODE_REFRACTION"),e}function $1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cc:e="ENVMAP_BLENDING_MULTIPLY";break;case Xf:e="ENVMAP_BLENDING_MIX";break;case qf:e="ENVMAP_BLENDING_ADD";break}return e}function J1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q1(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=j1(t),l=Z1(t),h=K1(t),u=$1(t),p=J1(t),d=k1(t),g=H1(r),_=s.createProgram();let m,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),f.length>0&&(f+=`
`)):(m=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),f=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Je.tonemapping_pars_fragment:"",t.toneMapping!==wi?z1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,O1("linearToOutputTexel",t.outputColorSpace),B1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),o=Mc(o),o=vu(o,t),o=xu(o,t),a=Mc(a),a=vu(a,t),a=xu(a,t),o=Mu(o),a=Mu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+m+o,v=M+f+a,T=mu(s,s.VERTEX_SHADER,x),y=mu(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,y),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(D){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(T)||"",k=s.getShaderInfoLog(y)||"",q=F.trim(),W=V.trim(),G=k.trim();let z=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,y);else{const H=_u(s,T,"vertex"),j=_u(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+H+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||G==="")&&(K=!1);K&&(D.diagnostics={runnable:z,programLog:q,vertexShader:{log:W,prefix:m},fragmentShader:{log:G,prefix:f}})}s.deleteShader(T),s.deleteShader(y),R=new qo(s,_),S=V1(s,_)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,I1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=y,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nv(e),t.set(e,n)),n}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(i,e,t,n,s,r,o){const a=new Bc,c=new tv,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,D,F,V){const k=F.fog,q=V.geometry,W=S.isMeshStandardMaterial?F.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),z=G&&G.mapping===sa?G.image.height:null,K=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const H=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,j=H!==void 0?H.length:0;let Q=0;q.morphAttributes.position!==void 0&&(Q=1),q.morphAttributes.normal!==void 0&&(Q=2),q.morphAttributes.color!==void 0&&(Q=3);let de,be,Pe,Y;if(K){const rt=Bn[K];de=rt.vertexShader,be=rt.fragmentShader}else de=S.vertexShader,be=S.fragmentShader,c.update(S),Pe=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const Z=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),_e=V.isInstancedMesh===!0,fe=V.isBatchedMesh===!0,Ve=!!S.map,Ye=!!S.matcap,I=!!G,ne=!!S.aoMap,te=!!S.lightMap,se=!!S.bumpMap,ie=!!S.normalMap,Se=!!S.displacementMap,ue=!!S.emissiveMap,xe=!!S.metalnessMap,ke=!!S.roughnessMap,ze=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,X=S.iridescence>0,$=S.sheen>0,he=S.transmission>0,ee=ze&&!!S.anisotropyMap,Le=P&&!!S.clearcoatMap,Me=P&&!!S.clearcoatNormalMap,Ie=P&&!!S.clearcoatRoughnessMap,Ne=X&&!!S.iridescenceMap,ge=X&&!!S.iridescenceThicknessMap,Ae=$&&!!S.sheenColorMap,Ge=$&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,we=!!S.specularColorMap,We=!!S.specularIntensityMap,B=he&&!!S.transmissionMap,re=he&&!!S.thicknessMap,ve=!!S.gradientMap,Ue=!!S.alphaMap,ye=S.alphaTest>0,le=!!S.alphaHash,De=!!S.extensions;let Ze=wi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const ut={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:de,fragmentShader:be,defines:S.defines,customVertexShaderID:Pe,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:fe,batchingColor:fe&&V._colorsTexture!==null,instancing:_e,instancingColor:_e&&V.instanceColor!==null,instancingMorph:_e&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:$s,alphaToCoverage:!!S.alphaToCoverage,map:Ve,matcap:Ye,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:z,aoMap:ne,lightMap:te,bumpMap:se,normalMap:ie,displacementMap:p&&Se,emissiveMap:ue,normalMapObjectSpace:ie&&S.normalMapType===Kf,normalMapTangentSpace:ie&&S.normalMapType===ra,metalnessMap:xe,roughnessMap:ke,anisotropy:ze,anisotropyMap:ee,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ie,dispersion:b,iridescence:X,iridescenceMap:Ne,iridescenceThicknessMap:ge,sheen:$,sheenColorMap:Ae,sheenRoughnessMap:Ge,specularMap:Oe,specularColorMap:we,specularIntensityMap:We,transmission:he,transmissionMap:B,thicknessMap:re,gradientMap:ve,opaque:S.transparent===!1&&S.blending===Hs&&S.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:le,combine:S.combine,mapUv:Ve&&_(S.map.channel),aoMapUv:ne&&_(S.aoMap.channel),lightMapUv:te&&_(S.lightMap.channel),bumpMapUv:se&&_(S.bumpMap.channel),normalMapUv:ie&&_(S.normalMap.channel),displacementMapUv:Se&&_(S.displacementMap.channel),emissiveMapUv:ue&&_(S.emissiveMap.channel),metalnessMapUv:xe&&_(S.metalnessMap.channel),roughnessMapUv:ke&&_(S.roughnessMap.channel),anisotropyMapUv:ee&&_(S.anisotropyMap.channel),clearcoatMapUv:Le&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(S.sheenRoughnessMap.channel),specularMapUv:Oe&&_(S.specularMap.channel),specularColorMapUv:we&&_(S.specularColorMap.channel),specularIntensityMapUv:We&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:re&&_(S.thicknessMap.channel),alphaMapUv:Ue&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ie||ze),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(Ve||Ue),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:V.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Q,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Ve&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===dt,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mt,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:De&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&S.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function f(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)E.push(D),E.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(M(E,S),x(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function M(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const E=g[S.type];let D;if(E){const F=Bn[E];D=Si.clone(F.uniforms)}else D=S.uniforms;return D}function T(S,E){let D;for(let F=0,V=h.length;F<V;F++){const k=h[F];if(k.cacheKey===E){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Q1(i,E,S,r),h.push(D)),D}function y(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:T,releaseProgram:y,releaseShaderCache:C,programs:h,dispose:R}}function sv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function rv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,p,d,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):t.push(f)}function c(u,p,d,g,_,m){const f=o(u,p,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,p){t.length>1&&t.sort(u||rv),n.length>1&&n.sort(p||Su),s.length>1&&s.sort(p||Su)}function h(){for(let u=e,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function ov(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new bu,i.set(n,[o])):s>=r.length?(o=new bu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function av(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cv=0;function hv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uv(i){const e=new av,t=lv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new it,o=new it;function a(l){let h=0,u=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,M=0,x=0,v=0,T=0,y=0,C=0;l.sort(hv);for(let S=0,E=l.length;S<E;S++){const D=l[S],F=D.color,V=D.intensity,k=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=F.r*V,u+=F.g*V,p+=F.b*V;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],V);C++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,z=t.get(D);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=D.shadow.matrix,M++}n.directional[d]=W,d++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(V),W.distance=k,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;const G=D.shadow;if(D.map&&(n.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&y++),n.spotLightMatrix[_]=G.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=q,v++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const G=D.shadow,z=t.get(D);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=D.shadow.matrix,x++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(V),W.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==T||R.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+T-y,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=C,R.directionalLength=d,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=T,R.numLightProbes=C,n.version=cv++)}function c(l,h){let u=0,p=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const x=l[f];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Eu(i){const e=new uv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function dv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Eu(i),e.set(s,[a])):r>=o.length?(a=new Eu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function mv(i,e,t){let n=new kc;const s=new ce,r=new ce,o=new pt,a=new Lm({depthPacking:Zf}),c=new Im,l={},h=t.maxTextureSize,u={[Ci]:tn,[tn]:Ci,[Mt]:Mt},p=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:fv,fragmentShader:pv}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new yt;g.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Fe(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let f=this.type;this.render=function(y,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const S=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Gt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=f!==ii&&this.type===ii,k=f===ii&&this.type!==ii;for(let q=0,W=y.length;q<W;q++){const G=y[q],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const K=z.getFrameExtents();if(s.multiply(K),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,z.mapSize.y=r.y)),z.map===null||V===!0||k===!0){const j=this.type!==ii?{minFilter:nn,magFilter:nn}:{};z.map!==null&&z.map.dispose(),z.map=new jn(s.x,s.y,j),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const H=z.getViewportCount();for(let j=0;j<H;j++){const Q=z.getViewport(j);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),F.viewport(o),z.updateMatrices(G,j),n=z.getFrustum(),v(C,R,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===ii&&M(z,R),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,D)};function M(y,C){const R=e.update(_);p.defines.VSM_SAMPLES!==y.blurSamples&&(p.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new jn(s.x,s.y)),p.uniforms.shadow_pass.value=y.map.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(C,null,R,p,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(C,null,R,d,_,null)}function x(y,C,R,S){let E=null;const D=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)E=D;else if(E=R.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=E.uuid,V=C.uuid;let k=l[F];k===void 0&&(k={},l[F]=k);let q=k[V];q===void 0&&(q=E.clone(),k[V]=q,C.addEventListener("dispose",T)),E=q}if(E.visible=C.visible,E.wireframe=C.wireframe,S===ii?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const F=i.properties.get(E);F.light=R}return E}function v(y,C,R,S,E){if(y.visible===!1)return;if(y.layers.test(C.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&E===ii)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const V=e.update(y),k=y.material;if(Array.isArray(k)){const q=V.groups;for(let W=0,G=q.length;W<G;W++){const z=q[W],K=k[z.materialIndex];if(K&&K.visible){const H=x(y,K,S,E);y.onBeforeShadow(i,y,C,R,V,H,z),i.renderBufferDirect(R,null,V,H,y,z),y.onAfterShadow(i,y,C,R,V,H,z)}}}else if(k.visible){const q=x(y,k,S,E);y.onBeforeShadow(i,y,C,R,V,q,null),i.renderBufferDirect(R,null,V,q,y,null),y.onAfterShadow(i,y,C,R,V,q,null)}}const F=y.children;for(let V=0,k=F.length;V<k;V++)v(F[V],C,R,S,E)}function T(y){y.target.removeEventListener("dispose",T);for(const R in l){const S=l[R],E=y.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const gv={[Pl]:Dl,[Ll]:Nl,[Il]:Fl,[qs]:Ul,[Dl]:Pl,[Nl]:Ll,[Fl]:Il,[Ul]:qs};function _v(i,e){function t(){let B=!1;const re=new pt;let ve=null;const Ue=new pt(0,0,0,0);return{setMask:function(ye){ve!==ye&&!B&&(i.colorMask(ye,ye,ye,ye),ve=ye)},setLocked:function(ye){B=ye},setClear:function(ye,le,De,Ze,ut){ut===!0&&(ye*=Ze,le*=Ze,De*=Ze),re.set(ye,le,De,Ze),Ue.equals(re)===!1&&(i.clearColor(ye,le,De,Ze),Ue.copy(re))},reset:function(){B=!1,ve=null,Ue.set(-1,0,0,0)}}}function n(){let B=!1,re=!1,ve=null,Ue=null,ye=null;return{setReversed:function(le){if(re!==le){const De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),re=le;const Ze=ye;ye=null,this.setClear(Ze)}},getReversed:function(){return re},setTest:function(le){le?Z(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(le){ve!==le&&!B&&(i.depthMask(le),ve=le)},setFunc:function(le){if(re&&(le=gv[le]),Ue!==le){switch(le){case Pl:i.depthFunc(i.NEVER);break;case Dl:i.depthFunc(i.ALWAYS);break;case Ll:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=le}},setLocked:function(le){B=le},setClear:function(le){ye!==le&&(re&&(le=1-le),i.clearDepth(le),ye=le)},reset:function(){B=!1,ve=null,Ue=null,ye=null,re=!1}}}function s(){let B=!1,re=null,ve=null,Ue=null,ye=null,le=null,De=null,Ze=null,ut=null;return{setTest:function(rt){B||(rt?Z(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(rt){re!==rt&&!B&&(i.stencilMask(rt),re=rt)},setFunc:function(rt,mt,mn){(ve!==rt||Ue!==mt||ye!==mn)&&(i.stencilFunc(rt,mt,mn),ve=rt,Ue=mt,ye=mn)},setOp:function(rt,mt,mn){(le!==rt||De!==mt||Ze!==mn)&&(i.stencilOp(rt,mt,mn),le=rt,De=mt,Ze=mn)},setLocked:function(rt){B=rt},setClear:function(rt){ut!==rt&&(i.clearStencil(rt),ut=rt)},reset:function(){B=!1,re=null,ve=null,Ue=null,ye=null,le=null,De=null,Ze=null,ut=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,M=null,x=null,v=null,T=null,y=null,C=new Be(0,0,0),R=0,S=!1,E=null,D=null,F=null,V=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,G=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),W=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),W=G>=2);let K=null,H={};const j=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),de=new pt().fromArray(j),be=new pt().fromArray(Q);function Pe(B,re,ve,Ue){const ye=new Uint8Array(4),le=i.createTexture();i.bindTexture(B,le),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ve;De++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(re+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return le}const Y={};Y[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(qs),se(!1),ie(ph),Z(i.CULL_FACE),ne(Gt);function Z(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function me(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function _e(B,re){return u[B]!==re?(i.bindFramebuffer(B,re),u[B]=re,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function fe(B,re){let ve=d,Ue=!1;if(B){ve=p.get(re),ve===void 0&&(ve=[],p.set(re,ve));const ye=B.textures;if(ve.length!==ye.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let le=0,De=ye.length;le<De;le++)ve[le]=i.COLOR_ATTACHMENT0+le;ve.length=ye.length,Ue=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(ve)}function Ve(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const Ye={[Rn]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Lf]:i.FUNC_REVERSE_SUBTRACT};Ye[If]=i.MIN,Ye[Uf]=i.MAX;const I={[yr]:i.ZERO,[Nf]:i.ONE,[Ff]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[kf]:i.SRC_ALPHA_SATURATE,[Rl]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Hf]:i.CONSTANT_COLOR,[Vf]:i.ONE_MINUS_CONSTANT_COLOR,[Gf]:i.CONSTANT_ALPHA,[Wf]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(B,re,ve,Ue,ye,le,De,Ze,ut,rt){if(B===Gt){_===!0&&(me(i.BLEND),_=!1);return}if(_===!1&&(Z(i.BLEND),_=!0),B!==ad){if(B!==m||rt!==S){if((f!==Rn||v!==Rn)&&(i.blendEquation(i.FUNC_ADD),f=Rn,v=Rn),rt)switch(B){case Hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,x=null,T=null,y=null,C.set(0,0,0),R=0,m=B,S=rt}return}ye=ye||re,le=le||ve,De=De||Ue,(re!==f||ye!==v)&&(i.blendEquationSeparate(Ye[re],Ye[ye]),f=re,v=ye),(ve!==M||Ue!==x||le!==T||De!==y)&&(i.blendFuncSeparate(I[ve],I[Ue],I[le],I[De]),M=ve,x=Ue,T=le,y=De),(Ze.equals(C)===!1||ut!==R)&&(i.blendColor(Ze.r,Ze.g,Ze.b,ut),C.copy(Ze),R=ut),m=B,S=!1}function te(B,re){B.side===Mt?me(i.CULL_FACE):Z(i.CULL_FACE);let ve=B.side===tn;re&&(ve=!ve),se(ve),B.blending===Hs&&B.transparent===!1?ne(Gt):ne(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ue=B.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function ie(B){B!==Cf?(Z(i.CULL_FACE),B!==D&&(B===ph?i.cullFace(i.BACK):B===Rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),D=B}function Se(B){B!==F&&(W&&i.lineWidth(B),F=B)}function ue(B,re,ve){B?(Z(i.POLYGON_OFFSET_FILL),(V!==re||k!==ve)&&(i.polygonOffset(re,ve),V=re,k=ve)):me(i.POLYGON_OFFSET_FILL)}function xe(B){B?Z(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function ke(B){B===void 0&&(B=i.TEXTURE0+q-1),K!==B&&(i.activeTexture(B),K=B)}function ze(B,re,ve){ve===void 0&&(K===null?ve=i.TEXTURE0+q-1:ve=K);let Ue=H[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},H[ve]=Ue),(Ue.type!==B||Ue.texture!==re)&&(K!==ve&&(i.activeTexture(ve),K=ve),i.bindTexture(B,re||Y[B]),Ue.type=B,Ue.texture=re)}function P(){const B=H[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(B){de.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),de.copy(B))}function Ge(B){be.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),be.copy(B))}function Oe(B,re){let ve=l.get(re);ve===void 0&&(ve=new WeakMap,l.set(re,ve));let Ue=ve.get(B);Ue===void 0&&(Ue=i.getUniformBlockIndex(re,B.name),ve.set(B,Ue))}function we(B,re){const Ue=l.get(re).get(B);c.get(re)!==Ue&&(i.uniformBlockBinding(re,Ue,B.__bindingPointIndex),c.set(re,Ue))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,H={},u={},p=new WeakMap,d=[],g=null,_=!1,m=null,f=null,M=null,x=null,v=null,T=null,y=null,C=new Be(0,0,0),R=0,S=!1,E=null,D=null,F=null,V=null,k=null,de.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:me,bindFramebuffer:_e,drawBuffers:fe,useProgram:Ve,setBlending:ne,setMaterial:te,setFlipSided:se,setCullFace:ie,setLineWidth:Se,setPolygonOffset:ue,setScissorTest:xe,activeTexture:ke,bindTexture:ze,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:X,texImage2D:Ne,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:we,texStorage2D:Me,texStorage3D:Ie,texSubImage2D:$,texSubImage3D:he,compressedTexSubImage2D:ee,compressedTexSubImage3D:Le,scissor:Ae,viewport:Ge,reset:We}}function vv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return d?new OffscreenCanvas(P,b):Ur("canvas")}function _(P,b,X){let $=1;const he=ze(P);if((he.width>X||he.height>X)&&($=X/Math.max(he.width,he.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor($*he.width),Le=Math.floor($*he.height);u===void 0&&(u=g(ee,Le));const Me=b?g(ee,Le):u;return Me.width=ee,Me.height=Le,Me.getContext("2d").drawImage(P,0,0,ee,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ee+"x"+Le+")."),Me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,b,X,$,he=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=b;if(b===i.RED&&(X===i.FLOAT&&(ee=i.R32F),X===i.HALF_FLOAT&&(ee=i.R16F),X===i.UNSIGNED_BYTE&&(ee=i.R8)),b===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.R8UI),X===i.UNSIGNED_SHORT&&(ee=i.R16UI),X===i.UNSIGNED_INT&&(ee=i.R32UI),X===i.BYTE&&(ee=i.R8I),X===i.SHORT&&(ee=i.R16I),X===i.INT&&(ee=i.R32I)),b===i.RG&&(X===i.FLOAT&&(ee=i.RG32F),X===i.HALF_FLOAT&&(ee=i.RG16F),X===i.UNSIGNED_BYTE&&(ee=i.RG8)),b===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RG8UI),X===i.UNSIGNED_SHORT&&(ee=i.RG16UI),X===i.UNSIGNED_INT&&(ee=i.RG32UI),X===i.BYTE&&(ee=i.RG8I),X===i.SHORT&&(ee=i.RG16I),X===i.INT&&(ee=i.RG32I)),b===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),X===i.UNSIGNED_INT&&(ee=i.RGB32UI),X===i.BYTE&&(ee=i.RGB8I),X===i.SHORT&&(ee=i.RGB16I),X===i.INT&&(ee=i.RGB32I)),b===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),X===i.UNSIGNED_INT&&(ee=i.RGBA32UI),X===i.BYTE&&(ee=i.RGBA8I),X===i.SHORT&&(ee=i.RGBA16I),X===i.INT&&(ee=i.RGBA32I)),b===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),b===i.RGBA){const Le=he?$o:st.getTransfer($);X===i.FLOAT&&(ee=i.RGBA32F),X===i.HALF_FLOAT&&(ee=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ee=Le===dt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(P,b){let X;return P?b===null||b===ss||b===Zs?X=i.DEPTH24_STENCIL8:b===Vn?X=i.DEPTH32F_STENCIL8:b===Lr&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ss||b===Zs?X=i.DEPTH_COMPONENT24:b===Vn?X=i.DEPTH_COMPONENT32F:b===Lr&&(X=i.DEPTH_COMPONENT16),X}function T(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==fn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function y(P){const b=P.target;b.removeEventListener("dispose",y),R(b),b.isVideoTexture&&h.delete(b)}function C(P){const b=P.target;b.removeEventListener("dispose",C),E(b)}function R(P){const b=n.get(P);if(b.__webglInit===void 0)return;const X=P.source,$=p.get(X);if($){const he=$[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&S(P),Object.keys($).length===0&&p.delete(X)}n.remove(P)}function S(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const X=P.source,$=p.get(X);delete $[b.__cacheKey],o.memory.textures--}function E(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let he=0;he<b.__webglFramebuffer[$].length;he++)i.deleteFramebuffer(b.__webglFramebuffer[$][he]);else i.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)i.deleteFramebuffer(b.__webglFramebuffer[$]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=P.textures;for(let $=0,he=X.length;$<he;$++){const ee=n.get(X[$]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[$])}n.remove(P)}let D=0;function F(){D=0}function V(){const P=D;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function k(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function q(P,b){const X=n.get(P);if(P.isVideoTexture&&xe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&X.__version!==P.version){const $=P.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(X,P,b);return}}else P.isExternalTexture&&(X.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+b)}function W(P,b){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Y(X,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+b)}function G(P,b){const X=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){Y(X,P,b);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+b)}function z(P,b){const X=n.get(P);if(P.version>0&&X.__version!==P.version){Z(X,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+b)}const K={[qn]:i.REPEAT,[es]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},H={[nn]:i.NEAREST,[Yf]:i.NEAREST_MIPMAP_NEAREST,[eo]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[ts]:i.LINEAR_MIPMAP_LINEAR},j={[$f]:i.NEVER,[ip]:i.ALWAYS,[Jf]:i.LESS,[Sd]:i.LEQUAL,[Qf]:i.EQUAL,[np]:i.GEQUAL,[ep]:i.GREATER,[tp]:i.NOTEQUAL};function Q(P,b){if(b.type===Vn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fn||b.magFilter===Ea||b.magFilter===eo||b.magFilter===ts||b.minFilter===fn||b.minFilter===Ea||b.minFilter===eo||b.minFilter===ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,K[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,K[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,K[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,H[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,H[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,j[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==eo&&b.minFilter!==ts||b.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function de(P,b){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",y));const $=b.source;let he=p.get($);he===void 0&&(he={},p.set($,he));const ee=k(b);if(ee!==P.__cacheKey){he[ee]===void 0&&(he[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),he[ee].usedTimes++;const Le=he[P.__cacheKey];Le!==void 0&&(he[P.__cacheKey].usedTimes--,Le.usedTimes===0&&S(b)),P.__cacheKey=ee,P.__webglTexture=he[ee].texture}return X}function be(P,b,X){return Math.floor(Math.floor(P/X)/b)}function Pe(P,b,X,$){const ee=P.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,X,$,b.data);else{ee.sort((ge,Ae)=>ge.start-Ae.start);let Le=0;for(let ge=1;ge<ee.length;ge++){const Ae=ee[Le],Ge=ee[ge],Oe=Ae.start+Ae.count,we=be(Ge.start,b.width,4),We=be(Ae.start,b.width,4);Ge.start<=Oe+1&&we===We&&be(Ge.start+Ge.count-1,b.width,4)===we?Ae.count=Math.max(Ae.count,Ge.start+Ge.count-Ae.start):(++Le,ee[Le]=Ge)}ee.length=Le+1;const Me=i.getParameter(i.UNPACK_ROW_LENGTH),Ie=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ge=0,Ae=ee.length;ge<Ae;ge++){const Ge=ee[ge],Oe=Math.floor(Ge.start/4),we=Math.ceil(Ge.count/4),We=Oe%b.width,B=Math.floor(Oe/b.width),re=we,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,We,B,re,ve,X,$,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function Y(P,b,X){let $=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=i.TEXTURE_3D);const he=de(P,b),ee=b.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+X);const Le=n.get(ee);if(ee.version!==Le.__version||he===!0){t.activeTexture(i.TEXTURE0+X);const Me=st.getPrimaries(st.workingColorSpace),Ie=b.colorSpace===oi?null:st.getPrimaries(b.colorSpace),Ne=b.colorSpace===oi||Me===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ge=_(b.image,!1,s.maxTextureSize);ge=ke(b,ge);const Ae=r.convert(b.format,b.colorSpace),Ge=r.convert(b.type);let Oe=x(b.internalFormat,Ae,Ge,b.colorSpace,b.isVideoTexture);Q($,b);let we;const We=b.mipmaps,B=b.isVideoTexture!==!0,re=Le.__version===void 0||he===!0,ve=ee.dataReady,Ue=T(b,ge);if(b.isDepthTexture)Oe=v(b.format===Ks,b.type),re&&(B?t.texStorage2D(i.TEXTURE_2D,1,Oe,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ae,Ge,null));else if(b.isDataTexture)if(We.length>0){B&&re&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,We[0].width,We[0].height);for(let ye=0,le=We.length;ye<le;ye++)we=We[ye],B?ve&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,we.width,we.height,Ae,Ge,we.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,we.width,we.height,0,Ae,Ge,we.data);b.generateMipmaps=!1}else B?(re&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ge.width,ge.height),ve&&Pe(b,ge,Ae,Ge)):t.texImage2D(i.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ae,Ge,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){B&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Oe,We[0].width,We[0].height,ge.depth);for(let ye=0,le=We.length;ye<le;ye++)if(we=We[ye],b.format!==yn)if(Ae!==null)if(B){if(ve)if(b.layerUpdates.size>0){const De=tu(we.width,we.height,b.format,b.type);for(const Ze of b.layerUpdates){const ut=we.data.subarray(Ze*De/we.data.BYTES_PER_ELEMENT,(Ze+1)*De/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Ze,we.width,we.height,1,Ae,ut)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,ge.depth,Ae,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,we.width,we.height,ge.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,ge.depth,Ae,Ge,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Oe,we.width,we.height,ge.depth,0,Ae,Ge,we.data)}else{B&&re&&t.texStorage2D(i.TEXTURE_2D,Ue,Oe,We[0].width,We[0].height);for(let ye=0,le=We.length;ye<le;ye++)we=We[ye],b.format!==yn?Ae!==null?B?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ve&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,we.width,we.height,Ae,Ge,we.data):t.texImage2D(i.TEXTURE_2D,ye,Oe,we.width,we.height,0,Ae,Ge,we.data)}else if(b.isDataArrayTexture)if(B){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Oe,ge.width,ge.height,ge.depth),ve)if(b.layerUpdates.size>0){const ye=tu(ge.width,ge.height,b.format,b.type);for(const le of b.layerUpdates){const De=ge.data.subarray(le*ye/ge.data.BYTES_PER_ELEMENT,(le+1)*ye/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,ge.width,ge.height,1,Ae,Ge,De)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Ge,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ge.width,ge.height,ge.depth,0,Ae,Ge,ge.data);else if(b.isData3DTexture)B?(re&&t.texStorage3D(i.TEXTURE_3D,Ue,Oe,ge.width,ge.height,ge.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Ge,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ge.width,ge.height,ge.depth,0,Ae,Ge,ge.data);else if(b.isFramebufferTexture){if(re)if(B)t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ge.width,ge.height);else{let ye=ge.width,le=ge.height;for(let De=0;De<Ue;De++)t.texImage2D(i.TEXTURE_2D,De,Oe,ye,le,0,Ae,Ge,null),ye>>=1,le>>=1}}else if(We.length>0){if(B&&re){const ye=ze(We[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ye.width,ye.height)}for(let ye=0,le=We.length;ye<le;ye++)we=We[ye],B?ve&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ae,Ge,we):t.texImage2D(i.TEXTURE_2D,ye,Oe,Ae,Ge,we);b.generateMipmaps=!1}else if(B){if(re){const ye=ze(ge);t.texStorage2D(i.TEXTURE_2D,Ue,Oe,ye.width,ye.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Ge,ge)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Ae,Ge,ge);m(b)&&f($),Le.__version=ee.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,X){if(b.image.length!==6)return;const $=de(P,b),he=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+X);const ee=n.get(he);if(he.version!==ee.__version||$===!0){t.activeTexture(i.TEXTURE0+X);const Le=st.getPrimaries(st.workingColorSpace),Me=b.colorSpace===oi?null:st.getPrimaries(b.colorSpace),Ie=b.colorSpace===oi||Le===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ne=b.isCompressedTexture||b.image[0].isCompressedTexture,ge=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let le=0;le<6;le++)!Ne&&!ge?Ae[le]=_(b.image[le],!0,s.maxCubemapSize):Ae[le]=ge?b.image[le].image:b.image[le],Ae[le]=ke(b,Ae[le]);const Ge=Ae[0],Oe=r.convert(b.format,b.colorSpace),we=r.convert(b.type),We=x(b.internalFormat,Oe,we,b.colorSpace),B=b.isVideoTexture!==!0,re=ee.__version===void 0||$===!0,ve=he.dataReady;let Ue=T(b,Ge);Q(i.TEXTURE_CUBE_MAP,b);let ye;if(Ne){B&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,We,Ge.width,Ge.height);for(let le=0;le<6;le++){ye=Ae[le].mipmaps;for(let De=0;De<ye.length;De++){const Ze=ye[De];b.format!==yn?Oe!==null?B?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Ze.width,Ze.height,Oe,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,We,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Ze.width,Ze.height,Oe,we,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,We,Ze.width,Ze.height,0,Oe,we,Ze.data)}}}else{if(ye=b.mipmaps,B&&re){ye.length>0&&Ue++;const le=ze(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,We,le.width,le.height)}for(let le=0;le<6;le++)if(ge){B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ae[le].width,Ae[le].height,Oe,we,Ae[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Ae[le].width,Ae[le].height,0,Oe,we,Ae[le].data);for(let De=0;De<ye.length;De++){const ut=ye[De].image[le].image;B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,ut.width,ut.height,Oe,we,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,We,ut.width,ut.height,0,Oe,we,ut.data)}}else{B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Oe,we,Ae[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,We,Oe,we,Ae[le]);for(let De=0;De<ye.length;De++){const Ze=ye[De];B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,Oe,we,Ze.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,We,Oe,we,Ze.image[le])}}}m(b)&&f(i.TEXTURE_CUBE_MAP),ee.__version=he.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function me(P,b,X,$,he,ee){const Le=r.convert(X.format,X.colorSpace),Me=r.convert(X.type),Ie=x(X.internalFormat,Le,Me,X.colorSpace),Ne=n.get(b),ge=n.get(X);if(ge.__renderTarget=b,!Ne.__hasExternalTextures){const Ae=Math.max(1,b.width>>ee),Ge=Math.max(1,b.height>>ee);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ee,Ie,Ae,Ge,b.depth,0,Le,Me,null):t.texImage2D(he,ee,Ie,Ae,Ge,0,Le,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ue(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,he,ge.__webglTexture,0,Se(b)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,he,ge.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(P,b,X){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const $=b.depthTexture,he=$&&$.isDepthTexture?$.type:null,ee=v(b.stencilBuffer,he),Le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=Se(b);ue(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ee,b.width,b.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,P)}else{const $=b.textures;for(let he=0;he<$.length;he++){const ee=$[he],Le=r.convert(ee.format,ee.colorSpace),Me=r.convert(ee.type),Ie=x(ee.internalFormat,Le,Me,ee.colorSpace),Ne=Se(b);X&&ue(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ie,b.width,b.height):ue(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const he=$.__webglTexture,ee=Se(b);if(b.depthTexture.format===Ir)ue(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(b.depthTexture.format===Ks)ue(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function Ve(P){const b=n.get(P),X=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",he)};$.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=$}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const $=P.texture.mipmaps;$&&$.length>0?fe(b.__webglFramebuffer[0],P):fe(b.__webglFramebuffer,P)}else if(X){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=i.createRenderbuffer(),_e(b.__webglDepthbuffer[$],P,!1);else{const he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ee)}}else{const $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),_e(b.__webglDepthbuffer,P,!1);else{const he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(P,b,X){const $=n.get(P);b!==void 0&&me($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Ve(P)}function I(P){const b=P.texture,X=n.get(P),$=n.get(b);P.addEventListener("dispose",C);const he=P.textures,ee=P.isWebGLCubeRenderTarget===!0,Le=he.length>1;if(Le||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=b.version,o.memory.textures++),ee){X.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[Me]=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)X.__webglFramebuffer[Me][Ie]=i.createFramebuffer()}else X.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Me=0;Me<b.mipmaps.length;Me++)X.__webglFramebuffer[Me]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Le)for(let Me=0,Ie=he.length;Me<Ie;Me++){const Ne=n.get(he[Me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ue(P)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Me=0;Me<he.length;Me++){const Ie=he[Me];X.__webglColorRenderbuffer[Me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Me]);const Ne=r.convert(Ie.format,Ie.colorSpace),ge=r.convert(Ie.type),Ae=x(Ie.internalFormat,Ne,ge,Ie.colorSpace,P.isXRRenderTarget===!0),Ge=Se(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Ae,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,X.__webglColorRenderbuffer[Me])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Q(i.TEXTURE_CUBE_MAP,b);for(let Me=0;Me<6;Me++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)me(X.__webglFramebuffer[Me][Ie],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Ie);else me(X.__webglFramebuffer[Me],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(b)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Me=0,Ie=he.length;Me<Ie;Me++){const Ne=he[Me],ge=n.get(Ne);let Ae=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ge.__webglTexture),Q(Ae,Ne),me(X.__webglFramebuffer,P,Ne,i.COLOR_ATTACHMENT0+Me,Ae,0),m(Ne)&&f(Ae)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,$.__webglTexture),Q(Me,b),b.mipmaps&&b.mipmaps.length>0)for(let Ie=0;Ie<b.mipmaps.length;Ie++)me(X.__webglFramebuffer[Ie],P,b,i.COLOR_ATTACHMENT0,Me,Ie);else me(X.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,Me,0);m(b)&&f(Me),t.unbindTexture()}P.depthBuffer&&Ve(P)}function ne(P){const b=P.textures;for(let X=0,$=b.length;X<$;X++){const he=b[X];if(m(he)){const ee=M(P),Le=n.get(he).__webglTexture;t.bindTexture(ee,Le),f(ee),t.unbindTexture()}}}const te=[],se=[];function ie(P){if(P.samples>0){if(ue(P)===!1){const b=P.textures,X=P.width,$=P.height;let he=i.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(P),Me=b.length>1;if(Me)for(let Ne=0;Ne<b.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ie=P.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ne=0;Ne<b.length;Ne++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);const ge=n.get(b[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ge,0)}i.blitFramebuffer(0,0,X,$,0,0,X,$,he,i.NEAREST),c===!0&&(te.length=0,se.length=0,te.push(i.COLOR_ATTACHMENT0+Ne),P.depthBuffer&&P.resolveDepthBuffer===!1&&(te.push(ee),se.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Me)for(let Ne=0;Ne<b.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ne]);const ge=n.get(b[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Se(P){return Math.min(s.maxSamples,P.samples)}function ue(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xe(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function ke(P,b){const X=P.colorSpace,$=P.format,he=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==$s&&X!==oi&&(st.getTransfer(X)===dt?($!==yn||he!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=Ye,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ue}function xv(i,e){function t(n,s=oi){let r;const o=st.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_d)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===md)return i.BYTE;if(n===gd)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===Pc)return i.INT;if(n===ss)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Ri)return i.HALF_FLOAT;if(n===xd)return i.ALPHA;if(n===Md)return i.RGB;if(n===yn)return i.RGBA;if(n===Ir)return i.DEPTH_COMPONENT;if(n===Ks)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===yd)return i.RG;if(n===Nc)return i.RG_INTEGER;if(n===Fc)return i.RGBA_INTEGER;if(n===Vo||n===Go||n===Wo||n===Xo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Go)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Xl||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wl||n===Xl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===jl||n===Zl||n===Kl||n===$l||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ac||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ac)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yv=`
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

}`;class Sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ud(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:Mv,fragmentShader:yv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bv extends us{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Sv,f={},M=t.getContextAttributes();let x=null,v=null;const T=[],y=[],C=new ce;let R=null;const S=new ln;S.viewport=new pt;const E=new ln;E.viewport=new pt;const D=[S,E],F=new Vm;let V=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Xa,T[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Xa,T[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=T[Y];return Z===void 0&&(Z=new Xa,T[Y]=Z),Z.getHandSpace()};function q(Y){const Z=y.indexOf(Y.inputSource);if(Z===-1)return;const me=T[Z];me!==void 0&&(me.update(Y.inputSource,Y.frame,l||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",G);for(let Y=0;Y<T.length;Y++){const Z=y[Y];Z!==null&&(y[Y]=null,T[Y].disconnect(Z))}V=null,k=null,m.reset();for(const Y in f)delete f[Y];e.setRenderTarget(x),d=null,p=null,u=null,s=null,v=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,_e=null,fe=null;M.depth&&(fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?Ks:Ir,_e=M.stencil?Zs:ss);const Ve={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new jn(p.textureWidth,p.textureHeight,{format:yn,type:Un,depthTexture:new Hc(p.textureWidth,p.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new jn(d.framebufferWidth,d.framebufferHeight,{format:yn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(Y){for(let Z=0;Z<Y.removed.length;Z++){const me=Y.removed[Z],_e=y.indexOf(me);_e>=0&&(y[_e]=null,T[_e].disconnect(me))}for(let Z=0;Z<Y.added.length;Z++){const me=Y.added[Z];let _e=y.indexOf(me);if(_e===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=y.length){y.push(me),_e=Ve;break}else if(y[Ve]===null){y[Ve]=me,_e=Ve;break}if(_e===-1)break}const fe=T[_e];fe&&fe.connect(me)}}const z=new L,K=new L;function H(Y,Z,me){z.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const _e=z.distanceTo(K),fe=Z.projectionMatrix.elements,Ve=me.projectionMatrix.elements,Ye=fe[14]/(fe[10]-1),I=fe[14]/(fe[10]+1),ne=(fe[9]+1)/fe[5],te=(fe[9]-1)/fe[5],se=(fe[8]-1)/fe[0],ie=(Ve[8]+1)/Ve[0],Se=Ye*se,ue=Ye*ie,xe=_e/(-se+ie),ke=xe*-se;if(Z.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ke),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),fe[10]===-1)Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ze=Ye+xe,P=I+xe,b=Se-ke,X=ue+(_e-ke),$=ne*I/P*ze,he=te*I/P*ze;Y.projectionMatrix.makePerspective(b,X,$,he,ze,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Z=Y.near,me=Y.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(me=m.depthFar)),F.near=E.near=S.near=Z,F.far=E.far=S.far=me,(V!==F.near||k!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,k=F.far),F.layers.mask=Y.layers.mask|6,S.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;const _e=Y.parent,fe=F.cameras;j(F,_e);for(let Ve=0;Ve<fe.length;Ve++)j(fe[Ve],_e);fe.length===2?H(F,S,E):F.projectionMatrix.copy(S.projectionMatrix),Q(Y,F,_e)};function Q(Y,Z,me){me===null?Y.matrix.copy(Z.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Z.projectionMatrix),Y.projectionMatrixInverse.copy(Z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Js*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(Y){c=Y,p!==null&&(p.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let de=null;function be(Y,Z){if(h=Z.getViewerPose(l||o),g=Z,h!==null){const me=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let _e=!1;me.length!==F.cameras.length&&(F.cameras.length=0,_e=!0);for(let I=0;I<me.length;I++){const ne=me[I];let te=null;if(d!==null)te=d.getViewport(ne);else{const ie=u.getViewSubImage(p,ne);te=ie.viewport,I===0&&(e.setRenderTargetTextures(v,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(v))}let se=D[I];se===void 0&&(se=new ln,se.layers.enable(I),se.viewport=new pt,D[I]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(te.x,te.y,te.width,te.height),I===0&&(F.matrix.copy(se.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),_e===!0&&F.cameras.push(se)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const I=u.getDepthInformation(me[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<me.length;I++){const ne=me[I].camera;if(ne){let te=f[ne];te||(te=new Ud,f[ne]=te);const se=u.getCameraImage(ne);te.sourceTexture=se}}}}for(let me=0;me<T.length;me++){const _e=y[me],fe=T[me];_e!==null&&fe!==void 0&&fe.update(_e,Z,l||o)}de&&de(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Pe=new Xd;Pe.setAnimationLoop(be),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const Ki=new Fn,Ev=new it;function wv(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Cd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,M,x,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,M,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=e.get(f),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Ki)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,M,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tv(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=s[M.id];v===void 0&&(g(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",m));const T=x.program;n.updateUBOMapping(M,T);const y=e.render.frame;r[M.id]!==y&&(p(M),r[M.id]=y)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),T=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const x=s[M.id],v=M.uniforms,T=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let y=0,C=v.length;y<C;y++){const R=Array.isArray(v[y])?v[y]:[v[y]];for(let S=0,E=R.length;S<E;S++){const D=R[S];if(d(D,y,S,T)===!0){const F=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let q=0;q<V.length;q++){const W=V[q],G=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+k,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,v,T){const y=M.value,C=x+"_"+v;if(T[C]===void 0)return typeof y=="number"||typeof y=="boolean"?T[C]=y:T[C]=y.clone(),!0;{const R=T[C];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return T[C]=y,!0}else if(R.equals(y)===!1)return R.copy(y),!0}return!1}function g(M){const x=M.uniforms;let v=0;const T=16;for(let C=0,R=x.length;C<R;C++){const S=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,D=S.length;E<D;E++){const F=S[E],V=Array.isArray(F.value)?F.value:[F.value];for(let k=0,q=V.length;k<q;k++){const W=V[k],G=_(W),z=v%T,K=z%G.boundary,H=z+K;v+=K,H!==0&&T-H<G.storage&&(v+=T-H),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=G.storage}}}const y=v%T;return y>0&&(v+=T-y),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Av{constructor(e={}){const{canvas:t=Mp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let T=!1;this._outputColorSpace=ct;let y=0,C=0,R=null,S=-1,E=null;const D=new pt,F=new pt;let V=null;const k=new Be(0);let q=0,W=t.width,G=t.height,z=1,K=null,H=null;const j=new pt(0,0,W,G),Q=new pt(0,0,W,G);let de=!1;const be=new kc;let Pe=!1,Y=!1;const Z=new it,me=new L,_e=new pt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Ye(){return R===null?z:1}let I=n;function ne(A,w){return t.getContext(A,w)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tc}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ye,!1),I===null){const w="webgl2";if(I=ne(w,A),I===null)throw ne(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,se,ie,Se,ue,xe,ke,ze,P,b,X,$,he,ee,Le,Me,Ie,Ne,ge,Ae,Ge,Oe,we,We;function B(){te=new O_(I),te.init(),Oe=new xv(I,te),se=new P_(I,te,e,Oe),ie=new _v(I,te),se.reversedDepthBuffer&&p&&ie.buffers.depth.setReversed(!0),Se=new k_(I),ue=new sv,xe=new vv(I,te,ie,ue,se,Oe,Se),ke=new L_(v),ze=new F_(v),P=new qm(I),we=new C_(I,P),b=new z_(I,P,Se,we),X=new V_(I,b,P,Se),ge=new H_(I,se,xe),Me=new D_(ue),$=new iv(v,ke,ze,te,se,we,Me),he=new wv(v,ue),ee=new ov,Le=new dv(te),Ne=new A_(v,ke,ze,ie,X,d,c),Ie=new mv(v,X,se),We=new Tv(I,Se,se,ie),Ae=new R_(I,te,Se),Ge=new B_(I,te,Se),Se.programs=$.programs,v.capabilities=se,v.extensions=te,v.properties=ue,v.renderLists=ee,v.shadowMap=Ie,v.state=ie,v.info=Se}B();const re=new bv(v,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(W,G,!1))},this.getSize=function(A){return A.set(W,G)},this.setSize=function(A,w,U=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,G=w,t.width=Math.floor(A*z),t.height=Math.floor(w*z),U===!0&&(t.style.width=A+"px",t.style.height=w+"px"),this.setViewport(0,0,A,w)},this.getDrawingBufferSize=function(A){return A.set(W*z,G*z).floor()},this.setDrawingBufferSize=function(A,w,U){W=A,G=w,z=U,t.width=Math.floor(A*U),t.height=Math.floor(w*U),this.setViewport(0,0,A,w)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,w,U,O){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,w,U,O),ie.viewport(D.copy(j).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,w,U,O){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,w,U,O),ie.scissor(F.copy(Q).multiplyScalar(z).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){ie.setScissorTest(de=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){H=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(A=!0,w=!0,U=!0){let O=0;if(A){let N=!1;if(R!==null){const J=R.texture.format;N=J===Fc||J===Nc||J===Uc}if(N){const J=R.texture.type,ae=J===Un||J===ss||J===Lr||J===Zs||J===Dc||J===Lc,oe=Ne.getClearColor(),pe=Ne.getClearAlpha(),Ee=oe.r,Re=oe.g,Te=oe.b;ae?(g[0]=Ee,g[1]=Re,g[2]=Te,g[3]=pe,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Ee,_[1]=Re,_[2]=Te,_[3]=pe,I.clearBufferiv(I.COLOR,0,_))}else O|=I.COLOR_BUFFER_BIT}w&&(O|=I.DEPTH_BUFFER_BIT),U&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Ne.dispose(),ee.dispose(),Le.dispose(),ue.dispose(),ke.dispose(),ze.dispose(),X.dispose(),we.dispose(),We.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",mn),re.removeEventListener("sessionend",cr),gn.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Se.autoReset,w=Ie.enabled,U=Ie.autoUpdate,O=Ie.needsUpdate,N=Ie.type;B(),Se.autoReset=A,Ie.enabled=w,Ie.autoUpdate=U,Ie.needsUpdate=O,Ie.type=N}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const w=A.target;w.removeEventListener("dispose",le),De(w)}function De(A){Ze(A),ue.remove(A)}function Ze(A){const w=ue.get(A).programs;w!==void 0&&(w.forEach(function(U){$.releaseProgram(U)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,w,U,O,N,J){w===null&&(w=fe);const ae=N.isMesh&&N.matrixWorld.determinant()<0,oe=ur(A,w,U,O,N);ie.setMaterial(O,ae);let pe=U.index,Ee=1;if(O.wireframe===!0){if(pe=b.getWireframeAttribute(U),pe===void 0)return;Ee=2}const Re=U.drawRange,Te=U.attributes.position;let Xe=Re.start*Ee,et=(Re.start+Re.count)*Ee;J!==null&&(Xe=Math.max(Xe,J.start*Ee),et=Math.min(et,(J.start+J.count)*Ee)),pe!==null?(Xe=Math.max(Xe,0),et=Math.min(et,pe.count)):Te!=null&&(Xe=Math.max(Xe,0),et=Math.min(et,Te.count));const gt=et-Xe;if(gt<0||gt===1/0)return;we.setup(N,O,oe,U,pe);let ot,at=Ae;if(pe!==null&&(ot=P.get(pe),at=Ge,at.setIndex(ot)),N.isMesh)O.wireframe===!0?(ie.setLineWidth(O.wireframeLinewidth*Ye()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(N.isLine){let He=O.linewidth;He===void 0&&(He=1),ie.setLineWidth(He*Ye()),N.isLineSegments?at.setMode(I.LINES):N.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else N.isPoints?at.setMode(I.POINTS):N.isSprite&&at.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))at.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const He=N._multiDrawStarts,lt=N._multiDrawCounts,qe=N._multiDrawCount,Ct=pe?P.get(pe).bytesPerElement:1,jt=ue.get(O).currentProgram.getUniforms();for(let Bt=0;Bt<qe;Bt++)jt.setValue(I,"_gl_DrawID",Bt),at.render(He[Bt]/Ct,lt[Bt])}else if(N.isInstancedMesh)at.renderInstances(Xe,gt,N.count);else if(U.isInstancedBufferGeometry){const He=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,lt=Math.min(U.instanceCount,He);at.renderInstances(Xe,gt,lt)}else at.render(Xe,gt)};function ut(A,w,U){A.transparent===!0&&A.side===Mt&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Vi(A,w,U),A.side=Ci,A.needsUpdate=!0,Vi(A,w,U),A.side=Mt):Vi(A,w,U)}this.compile=function(A,w,U=null){U===null&&(U=A),f=Le.get(U),f.init(w),x.push(f),U.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),A!==U&&A.traverseVisible(function(N){N.isLight&&N.layers.test(w.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const O=new Set;return A.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let ae=0;ae<J.length;ae++){const oe=J[ae];ut(oe,U,N),O.add(oe)}else ut(J,U,N),O.add(J)}),f=x.pop(),O},this.compileAsync=function(A,w,U=null){const O=this.compile(A,w,U);return new Promise(N=>{function J(){if(O.forEach(function(ae){ue.get(ae).currentProgram.isReady()&&O.delete(ae)}),O.size===0){N(A);return}setTimeout(J,10)}te.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let rt=null;function mt(A){rt&&rt(A)}function mn(){gn.stop()}function cr(){gn.start()}const gn=new Xd;gn.setAnimationLoop(mt),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(A){rt=A,re.setAnimationLoop(A),A===null?gn.stop():gn.start()},re.addEventListener("sessionstart",mn),re.addEventListener("sessionend",cr),this.render=function(A,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(w),w=re.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,w,R),f=Le.get(A,x.length),f.init(w),x.push(f),Z.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),be.setFromProjectionMatrix(Z,Gn,w.reversedDepth),Y=this.localClippingEnabled,Pe=Me.init(this.clippingPlanes,Y),m=ee.get(A,M.length),m.init(),M.push(m),re.enabled===!0&&re.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&bn(J,w,-1/0,v.sortObjects)}bn(A,w,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,H),Ve=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ve&&Ne.addToRenderList(m,A),this.info.render.frame++,Pe===!0&&Me.beginShadows();const U=f.state.shadowsArray;Ie.render(U,A,w),Pe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,N=m.transmissive;if(f.setupLights(),w.isArrayCamera){const J=w.cameras;if(N.length>0)for(let ae=0,oe=J.length;ae<oe;ae++){const pe=J[ae];Hi(O,N,A,pe)}Ve&&Ne.render(A);for(let ae=0,oe=J.length;ae<oe;ae++){const pe=J[ae];fi(m,A,pe,pe.viewport)}}else N.length>0&&Hi(O,N,A,w),Ve&&Ne.render(A),fi(m,A,w);R!==null&&C===0&&(xe.updateMultisampleRenderTarget(R),xe.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(v,A,w),we.resetDefaultState(),S=-1,E=null,x.pop(),x.length>0?(f=x[x.length-1],Pe===!0&&Me.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function bn(A,w,U,O){if(A.visible===!1)return;if(A.layers.test(w.layers)){if(A.isGroup)U=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(w);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||be.intersectsSprite(A)){O&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Z);const ae=X.update(A),oe=A.material;oe.visible&&m.push(A,ae,oe,U,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||be.intersectsObject(A))){const ae=X.update(A),oe=A.material;if(O&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),_e.copy(ae.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(Z)),Array.isArray(oe)){const pe=ae.groups;for(let Ee=0,Re=pe.length;Ee<Re;Ee++){const Te=pe[Ee],Xe=oe[Te.materialIndex];Xe&&Xe.visible&&m.push(A,ae,Xe,U,_e.z,Te)}}else oe.visible&&m.push(A,ae,oe,U,_e.z,null)}}const J=A.children;for(let ae=0,oe=J.length;ae<oe;ae++)bn(J[ae],w,U,O)}function fi(A,w,U,O){const N=A.opaque,J=A.transmissive,ae=A.transparent;f.setupLightsView(U),Pe===!0&&Me.setGlobalState(v.clippingPlanes,U),O&&ie.viewport(D.copy(O)),N.length>0&&vs(N,w,U),J.length>0&&vs(J,w,U),ae.length>0&&vs(ae,w,U),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Hi(A,w,U,O){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new jn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ri:Un,minFilter:ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const J=f.state.transmissionRenderTarget[O.id],ae=O.viewport||D;J.setSize(ae.z*v.transmissionResolutionScale,ae.w*v.transmissionResolutionScale);const oe=v.getRenderTarget(),pe=v.getActiveCubeFace(),Ee=v.getActiveMipmapLevel();v.setRenderTarget(J),v.getClearColor(k),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&Ne.render(U);const Re=v.toneMapping;v.toneMapping=wi;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),Pe===!0&&Me.setGlobalState(v.clippingPlanes,O),vs(A,U,O),xe.updateMultisampleRenderTarget(J),xe.updateRenderTargetMipmap(J),te.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let et=0,gt=w.length;et<gt;et++){const ot=w[et],at=ot.object,He=ot.geometry,lt=ot.material,qe=ot.group;if(lt.side===Mt&&at.layers.test(O.layers)){const Ct=lt.side;lt.side=tn,lt.needsUpdate=!0,hr(at,U,O,He,lt,qe),lt.side=Ct,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(xe.updateMultisampleRenderTarget(J),xe.updateRenderTargetMipmap(J))}v.setRenderTarget(oe,pe,Ee),v.setClearColor(k,q),Te!==void 0&&(O.viewport=Te),v.toneMapping=Re}function vs(A,w,U){const O=w.isScene===!0?w.overrideMaterial:null;for(let N=0,J=A.length;N<J;N++){const ae=A[N],oe=ae.object,pe=ae.geometry,Ee=ae.group;let Re=ae.material;Re.allowOverride===!0&&O!==null&&(Re=O),oe.layers.test(U.layers)&&hr(oe,w,U,pe,Re,Ee)}}function hr(A,w,U,O,N,J){A.onBeforeRender(v,w,U,O,N,J),A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),N.onBeforeRender(v,w,U,O,A,J),N.transparent===!0&&N.side===Mt&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,v.renderBufferDirect(U,w,O,N,A,J),N.side=Ci,N.needsUpdate=!0,v.renderBufferDirect(U,w,O,N,A,J),N.side=Mt):v.renderBufferDirect(U,w,O,N,A,J),A.onAfterRender(v,w,U,O,N,J)}function Vi(A,w,U){w.isScene!==!0&&(w=fe);const O=ue.get(A),N=f.state.lights,J=f.state.shadowsArray,ae=N.state.version,oe=$.getParameters(A,N.state,J,w,U),pe=$.getProgramCacheKey(oe);let Ee=O.programs;O.environment=A.isMeshStandardMaterial?w.environment:null,O.fog=w.fog,O.envMap=(A.isMeshStandardMaterial?ze:ke).get(A.envMap||O.environment),O.envMapRotation=O.environment!==null&&A.envMap===null?w.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",le),Ee=new Map,O.programs=Ee);let Re=Ee.get(pe);if(Re!==void 0){if(O.currentProgram===Re&&O.lightsStateVersion===ae)return wn(A,oe),Re}else oe.uniforms=$.getUniforms(A),A.onBeforeCompile(oe,v),Re=$.acquireProgram(oe,pe),Ee.set(pe,Re),O.uniforms=oe.uniforms;const Te=O.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Te.clippingPlanes=Me.uniform),wn(A,oe),O.needsLights=$r(A),O.lightsStateVersion=ae,O.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=Re,O.uniformsList=null,Re}function En(A){if(A.uniformsList===null){const w=A.currentProgram.getUniforms();A.uniformsList=qo.seqWithValue(w.seq,A.uniforms)}return A.uniformsList}function wn(A,w){const U=ue.get(A);U.outputColorSpace=w.outputColorSpace,U.batching=w.batching,U.batchingColor=w.batchingColor,U.instancing=w.instancing,U.instancingColor=w.instancingColor,U.instancingMorph=w.instancingMorph,U.skinning=w.skinning,U.morphTargets=w.morphTargets,U.morphNormals=w.morphNormals,U.morphColors=w.morphColors,U.morphTargetsCount=w.morphTargetsCount,U.numClippingPlanes=w.numClippingPlanes,U.numIntersection=w.numClipIntersection,U.vertexAlphas=w.vertexAlphas,U.vertexTangents=w.vertexTangents,U.toneMapping=w.toneMapping}function ur(A,w,U,O,N){w.isScene!==!0&&(w=fe),xe.resetTextureUnits();const J=w.fog,ae=O.isMeshStandardMaterial?w.environment:null,oe=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$s,pe=(O.isMeshStandardMaterial?ze:ke).get(O.envMap||ae),Ee=O.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Re=!!U.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!U.morphAttributes.position,Xe=!!U.morphAttributes.normal,et=!!U.morphAttributes.color;let gt=wi;O.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(gt=v.toneMapping);const ot=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,at=ot!==void 0?ot.length:0,He=ue.get(O),lt=f.state.lights;if(Pe===!0&&(Y===!0||A!==E)){const Jt=A===E&&O.id===S;Me.setState(O,A,Jt)}let qe=!1;O.version===He.__version?(He.needsLights&&He.lightsStateVersion!==lt.state.version||He.outputColorSpace!==oe||N.isBatchedMesh&&He.batching===!1||!N.isBatchedMesh&&He.batching===!0||N.isBatchedMesh&&He.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&He.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&He.instancing===!1||!N.isInstancedMesh&&He.instancing===!0||N.isSkinnedMesh&&He.skinning===!1||!N.isSkinnedMesh&&He.skinning===!0||N.isInstancedMesh&&He.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&He.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&He.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&He.instancingMorph===!1&&N.morphTexture!==null||He.envMap!==pe||O.fog===!0&&He.fog!==J||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Me.numPlanes||He.numIntersection!==Me.numIntersection)||He.vertexAlphas!==Ee||He.vertexTangents!==Re||He.morphTargets!==Te||He.morphNormals!==Xe||He.morphColors!==et||He.toneMapping!==gt||He.morphTargetsCount!==at)&&(qe=!0):(qe=!0,He.__version=O.version);let Ct=He.currentProgram;qe===!0&&(Ct=Vi(O,w,N));let jt=!1,Bt=!1,Zt=!1;const St=Ct.getUniforms(),_n=He.uniforms;if(ie.useProgram(Ct.program)&&(jt=!0,Bt=!0,Zt=!0),O.id!==S&&(S=O.id,Bt=!0),jt||E!==A){ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),St.setValue(I,"projectionMatrix",A.projectionMatrix),St.setValue(I,"viewMatrix",A.matrixWorldInverse);const on=St.map.cameraPosition;on!==void 0&&on.setValue(I,me.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&St.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Bt=!0,Zt=!0)}if(N.isSkinnedMesh){St.setOptional(I,N,"bindMatrix"),St.setOptional(I,N,"bindMatrixInverse");const Jt=N.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),St.setValue(I,"boneTexture",Jt.boneTexture,xe))}N.isBatchedMesh&&(St.setOptional(I,N,"batchingTexture"),St.setValue(I,"batchingTexture",N._matricesTexture,xe),St.setOptional(I,N,"batchingIdTexture"),St.setValue(I,"batchingIdTexture",N._indirectTexture,xe),St.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&St.setValue(I,"batchingColorTexture",N._colorsTexture,xe));const vn=U.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ge.update(N,U,Ct),(Bt||He.receiveShadow!==N.receiveShadow)&&(He.receiveShadow=N.receiveShadow,St.setValue(I,"receiveShadow",N.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(_n.envMap.value=pe,_n.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&w.environment!==null&&(_n.envMapIntensity.value=w.environmentIntensity),Bt&&(St.setValue(I,"toneMappingExposure",v.toneMappingExposure),He.needsLights&&Gi(_n,Zt),J&&O.fog===!0&&he.refreshFogUniforms(_n,J),he.refreshMaterialUniforms(_n,O,z,G,f.state.transmissionRenderTarget[A.id]),qo.upload(I,En(He),_n,xe)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(qo.upload(I,En(He),_n,xe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&St.setValue(I,"center",N.center),St.setValue(I,"modelViewMatrix",N.modelViewMatrix),St.setValue(I,"normalMatrix",N.normalMatrix),St.setValue(I,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Jt=O.uniformsGroups;for(let on=0,ba=Jt.length;on<ba;on++){const Wi=Jt[on];We.update(Wi,Ct),We.bind(Wi,Ct)}}return Ct}function Gi(A,w){A.ambientLightColor.needsUpdate=w,A.lightProbe.needsUpdate=w,A.directionalLights.needsUpdate=w,A.directionalLightShadows.needsUpdate=w,A.pointLights.needsUpdate=w,A.pointLightShadows.needsUpdate=w,A.spotLights.needsUpdate=w,A.spotLightShadows.needsUpdate=w,A.rectAreaLights.needsUpdate=w,A.hemisphereLights.needsUpdate=w}function $r(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,w,U){const O=ue.get(A);O.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ue.get(A.texture).__webglTexture=w,ue.get(A.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:U,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,w){const U=ue.get(A);U.__webglFramebuffer=w,U.__useDefaultFramebuffer=w===void 0};const Sa=I.createFramebuffer();this.setRenderTarget=function(A,w=0,U=0){R=A,y=w,C=U;let O=!0,N=null,J=!1,ae=!1;if(A){const pe=ue.get(A);if(pe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(I.FRAMEBUFFER,null),O=!1;else if(pe.__webglFramebuffer===void 0)xe.setupRenderTarget(A);else if(pe.__hasExternalTextures)xe.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Te=A.depthTexture;if(pe.__boundDepthTexture!==Te){if(Te!==null&&ue.has(Te)&&(A.width!==Te.image.width||A.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(A)}}const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ae=!0);const Re=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[w])?N=Re[w][U]:N=Re[w],J=!0):A.samples>0&&xe.useMultisampledRTT(A)===!1?N=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[U]:N=Re,D.copy(A.viewport),F.copy(A.scissor),V=A.scissorTest}else D.copy(j).multiplyScalar(z).floor(),F.copy(Q).multiplyScalar(z).floor(),V=de;if(U!==0&&(N=Sa),ie.bindFramebuffer(I.FRAMEBUFFER,N)&&O&&ie.drawBuffers(A,N),ie.viewport(D),ie.scissor(F),ie.setScissorTest(V),J){const pe=ue.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+w,pe.__webglTexture,U)}else if(ae){const pe=w;for(let Ee=0;Ee<A.textures.length;Ee++){const Re=ue.get(A.textures[Ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,U,pe)}}else if(A!==null&&U!==0){const pe=ue.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,U)}S=-1},this.readRenderTargetPixels=function(A,w,U,O,N,J,ae,oe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){ie.bindFramebuffer(I.FRAMEBUFFER,pe);try{const Ee=A.textures[oe],Re=Ee.format,Te=Ee.type;if(!se.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=A.width-O&&U>=0&&U<=A.height-N&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+oe),I.readPixels(w,U,O,N,Oe.convert(Re),Oe.convert(Te),J))}finally{const Ee=R!==null?ue.get(R).__webglFramebuffer:null;ie.bindFramebuffer(I.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(A,w,U,O,N,J,ae,oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe)if(w>=0&&w<=A.width-O&&U>=0&&U<=A.height-N){ie.bindFramebuffer(I.FRAMEBUFFER,pe);const Ee=A.textures[oe],Re=Ee.format,Te=Ee.type;if(!se.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+oe),I.readPixels(w,U,O,N,Oe.convert(Re),Oe.convert(Te),0);const et=R!==null?ue.get(R).__webglFramebuffer:null;ie.bindFramebuffer(I.FRAMEBUFFER,et);const gt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yp(I,gt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Xe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(Xe),I.deleteSync(gt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,w=null,U=0){const O=Math.pow(2,-U),N=Math.floor(A.image.width*O),J=Math.floor(A.image.height*O),ae=w!==null?w.x:0,oe=w!==null?w.y:0;xe.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,U,0,0,ae,oe,N,J),ie.unbindTexture()};const Jr=I.createFramebuffer(),Qr=I.createFramebuffer();this.copyTextureToTexture=function(A,w,U=null,O=null,N=0,J=null){J===null&&(N!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let ae,oe,pe,Ee,Re,Te,Xe,et,gt;const ot=A.isCompressedTexture?A.mipmaps[J]:A.image;if(U!==null)ae=U.max.x-U.min.x,oe=U.max.y-U.min.y,pe=U.isBox3?U.max.z-U.min.z:1,Ee=U.min.x,Re=U.min.y,Te=U.isBox3?U.min.z:0;else{const vn=Math.pow(2,-N);ae=Math.floor(ot.width*vn),oe=Math.floor(ot.height*vn),A.isDataArrayTexture?pe=ot.depth:A.isData3DTexture?pe=Math.floor(ot.depth*vn):pe=1,Ee=0,Re=0,Te=0}O!==null?(Xe=O.x,et=O.y,gt=O.z):(Xe=0,et=0,gt=0);const at=Oe.convert(w.format),He=Oe.convert(w.type);let lt;w.isData3DTexture?(xe.setTexture3D(w,0),lt=I.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(xe.setTexture2DArray(w,0),lt=I.TEXTURE_2D_ARRAY):(xe.setTexture2D(w,0),lt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,w.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,w.unpackAlignment);const qe=I.getParameter(I.UNPACK_ROW_LENGTH),Ct=I.getParameter(I.UNPACK_IMAGE_HEIGHT),jt=I.getParameter(I.UNPACK_SKIP_PIXELS),Bt=I.getParameter(I.UNPACK_SKIP_ROWS),Zt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,Re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Te);const St=A.isDataArrayTexture||A.isData3DTexture,_n=w.isDataArrayTexture||w.isData3DTexture;if(A.isDepthTexture){const vn=ue.get(A),Jt=ue.get(w),on=ue.get(vn.__renderTarget),ba=ue.get(Jt.__renderTarget);ie.bindFramebuffer(I.READ_FRAMEBUFFER,on.__webglFramebuffer),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,ba.__webglFramebuffer);for(let Wi=0;Wi<pe;Wi++)St&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(A).__webglTexture,N,Te+Wi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ue.get(w).__webglTexture,J,gt+Wi)),I.blitFramebuffer(Ee,Re,ae,oe,Xe,et,ae,oe,I.DEPTH_BUFFER_BIT,I.NEAREST);ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||A.isRenderTargetTexture||ue.has(A)){const vn=ue.get(A),Jt=ue.get(w);ie.bindFramebuffer(I.READ_FRAMEBUFFER,Jr),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qr);for(let on=0;on<pe;on++)St?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,N,Te+on):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,N),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jt.__webglTexture,J,gt+on):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jt.__webglTexture,J),N!==0?I.blitFramebuffer(Ee,Re,ae,oe,Xe,et,ae,oe,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(lt,J,Xe,et,gt+on,Ee,Re,ae,oe):I.copyTexSubImage2D(lt,J,Xe,et,Ee,Re,ae,oe);ie.bindFramebuffer(I.READ_FRAMEBUFFER,null),ie.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(lt,J,Xe,et,gt,ae,oe,pe,at,He,ot.data):w.isCompressedArrayTexture?I.compressedTexSubImage3D(lt,J,Xe,et,gt,ae,oe,pe,at,ot.data):I.texSubImage3D(lt,J,Xe,et,gt,ae,oe,pe,at,He,ot):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,Xe,et,ae,oe,at,He,ot.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,Xe,et,ot.width,ot.height,at,ot.data):I.texSubImage2D(I.TEXTURE_2D,J,Xe,et,ae,oe,at,He,ot);I.pixelStorei(I.UNPACK_ROW_LENGTH,qe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct),I.pixelStorei(I.UNPACK_SKIP_PIXELS,jt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt),J===0&&w.generateMipmaps&&I.generateMipmap(lt),ie.unbindTexture()},this.initRenderTarget=function(A){ue.get(A).__webglFramebuffer===void 0&&xe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?xe.setTextureCube(A,0):A.isData3DTexture?xe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?xe.setTexture2DArray(A,0):xe.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){y=0,C=0,R=null,ie.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function Kd(i){const{width:e,height:t}=i.canvas;i.fillStyle="#081c1840";for(let r=1;r<t;r+=4)i.fillRect(0,r,e,1);const n=i.createRadialGradient(e*.47,t*.43,t*.28,e*.49,t*.48,e*.61);n.addColorStop(0,"#06231b00"),n.addColorStop(1,"#03150fc4"),i.fillStyle=n,i.fillRect(0,0,e,t);const s=i.createLinearGradient(0,0,e*.5,t*.58);s.addColorStop(0,"#e3f6d33d"),s.addColorStop(.38,"#cce8cd09"),s.addColorStop(1,"#d5f3cf00"),i.fillStyle=s,i.beginPath(),i.moveTo(0,0),i.lineTo(e*.49,0),i.lineTo(e*.12,t),i.lineTo(0,t),i.fill()}function Cv(){const i=document.createElement("canvas");i.width=512,i.height=448;const e=i.getContext("2d"),t=new Ht(i);t.colorSpace=ct;function n(s,r){const o=(a,c,l,h,u)=>{e.fillStyle="#3b6555",e.fillRect(a,c,l,h),e.fillStyle="#ebebc7",e.fillRect(a+3,c+3,l-6,h-6),e.fillStyle=u,e.fillRect(a+6,c+6,l-11,h-11)};e.fillStyle="#78a387",e.fillRect(0,0,512,448),o(15,17,482,35,"#c3ceb1"),e.fillStyle="#345341",e.font="18px monospace",e.fillText("DOISH OS",31,41);for(let a=0;a<3;a++){const c=74+a*73;o(26,c,30,25,"#e2dfb6"),e.fillStyle="#dce2bf",e.font="12px monospace",e.fillText(["HOME","MUSIC","FILES"][a],22,c+41)}o(128,64,350,291,"#e4e1bf"),o(136,72,335,31,s?"#8eb98c":"#a9c2a1"),e.fillStyle="#314b3c",e.font='17px "Microsoft YaHei",sans-serif',e.fillText("光盘资料库",147,94),e.fillStyle="#6c775d",e.font="12px monospace",e.fillText("FILE  EDIT  VIEW",149,125);for(let a=0;a<Math.min(4,ri.length);a++){const c=160+a*75;o(c,157,30,26,"#aeb88e"),e.fillStyle="#695d40",e.fillRect(c+7,166,14,4),e.fillRect(c+8,174,12,3),e.font="10px monospace",e.fillText(["DISC 1","DISC 2","DISC 3","DISC 4"][a],c-3,202)}e.fillStyle="#a7aa86",e.fillRect(147,319,310,20),ri.length||(e.fillStyle="#52634e",e.font='19px "Microsoft YaHei",sans-serif',e.fillText("光盘集暂为空",225,228)),s&&ri.length&&(e.fillStyle="#3d5944",e.font='13px "Microsoft YaHei",sans-serif',e.fillText("选择一张光盘开始",154,334)),o(13,396,486,40,"#bdcbb0");for(let a=0;a<14;a++)o(25+a*26,410,15,13,a%3===0?"#829a70":"#b6ac7f");e.fillStyle="#4e664e",e.fillRect(419,410,6+Math.sin(r)*2,11),e.font="17px monospace",e.fillText("10:09",435,422),Kd(e),t.needsUpdate=!0}return n(!1,0),{map:t,draw:n}}function wu(i,e,t){const n=document.createElement("canvas");n.width=n.height=32;const s=n.getContext("2d"),r=s.createRadialGradient(16,16,0,16,16,16);return r.addColorStop(0,"#ffffff"),r.addColorStop(.25,"#ffffffb0"),r.addColorStop(1,"#ffffff00"),s.fillStyle=r,s.fillRect(0,0,32,32),new Id({map:new Ht(n),color:i,opacity:e,size:t,transparent:!0,depthWrite:!1,toneMapped:!1})}function Rv(i,e,t,n){const s=new Float32Array(180),r=new yt;r.setAttribute("position",new cn(s,3));const o=new Vh(r,wu("#ffe2a9",.45,.033));o.frustumCulled=!1,o.raycast=()=>{},i.add(o);const a=new yt,c=new Float32Array(33);a.setAttribute("position",new cn(c,3));const l=new Vh(a,wu("#fff3db",.19,.075));l.frustumCulled=!1,l.raycast=()=>{},e.add(l);const h=new nt;h.position.set(.16,1.25,.12),t.add(h);for(let M=0;M<5;M++){const x=new Fe(new Vc(.011,.11,3,8),new Xt({color:"#ffe0a2",opacity:.55,transparent:!0,depthWrite:!1}));x.position.x=(M-2)*.055,x.raycast=()=>{},h.add(x)}const u=new yt;u.setAttribute("position",new Ke([-.35,.71,-1.39,1.96,2.31,-1.39,5.643,4.595,.74,4.257,3.635,.74],3)),u.setAttribute("uv",new Ke([0,0,0,1,1,1,1,0],2)),u.setIndex([0,1,2,0,2,3]);const p=new Wt({transparent:!0,depthWrite:!1,side:Mt,blending:wl,uniforms:{strength:{value:.08}},vertexShader:"varying vec2 tex; void main(){tex=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 tex; uniform float strength; void main(){float edge=sin(3.14159*tex.y)*sin(3.14159*tex.x);gl_FragColor=vec4(1.,.72,.39,edge*edge*strength);}"}),d=new Fe(u,p);d.raycast=()=>{},d.userData.skipContactShadows=!0,i.add(d);const g=document.createElement("canvas");g.width=g.height=128;const _=g.getContext("2d"),m=_.createImageData(128,128);let f=4229;for(let M=0;M<m.data.length;M+=4)f=f*16807%2147483647,m.data[M]=m.data[M+1]=m.data[M+2]=f%256,m.data[M+3]=255;return _.putImageData(m,0,0),n.style.setProperty("--room-grain",`url(${g.toDataURL()})`),(M,x,v,T)=>{p.uniforms.strength.value=.112*x,d.visible=x>.02,o.visible=x>.06,o.material.opacity=.41*x;for(let y=0;y<60;y++){const C=y*.6180339%1,R=y*.317037%1-.5,S=Math.sin(M*.39+y*2)*.073;s[y*3]=-.2+4.75*C+R*.63+S,s[y*3+1]=.9+3.02*C+R*1.11+Math.sin(M*.29+y)*.13,s[y*3+2]=-1.12+1.97*C+(y*.428%1-.5)*.8}r.attributes.position.needsUpdate=!0,l.visible=T;for(let y=0;y<11;y++){const C=(y/11+M*.29)%1;c[y*3]=Math.sin(C*7+M*.7)*C*.073,c[y*3+1]=.215+C*.34,c[y*3+2]=Math.cos(C*5)*.052*C}a.attributes.position.needsUpdate=!0,h.visible=v;for(let y=0;y<h.children.length;y++)h.children[y].scale.y=.35+(.5+.5*Math.sin(M*4.8+y*.94))*.72}}const Tu=[[48,55,58,62],[45,52,55,59],[43,50,53,57],[46,53,57,60]];function Pv(){let i,e,t,n=0,s=0,r=!1;const o=.54;function a(u,p,d,g,_){const m=i.createOscillator(),f=i.createGain();m.type=_,m.frequency.value=440*2**((u-69)/12),f.gain.setValueAtTime(1e-4,p),f.gain.exponentialRampToValueAtTime(g,p+.041),f.gain.exponentialRampToValueAtTime(1e-4,p+d),m.connect(f).connect(e),m.start(p),m.stop(p+d+.02),m.onended=()=>{m.disconnect(),f.disconnect()}}function c(){for(s<i.currentTime-.25&&(s=i.currentTime+.035);s<i.currentTime+.16;){const u=Tu[Math.floor(n/8)%Tu.length],p=n%8;(p===0||p===4)&&a(u[0]-12,s,.9,.15,"sine"),(p===0||p===3)&&u.slice(1).forEach((d,g)=>a(d,s+g*.032,1.46,.069,"triangle")),(p===2||p===5||p===7)&&a(u[1+p%3]+12,s,.62,.057,"sine"),s+=o/2,n++}}let l=.16;function h(u){if(r=u,!u){clearInterval(t),t=null,e&&e.gain.setTargetAtTime(0,i.currentTime,.055);return}const p=window.AudioContext||window.webkitAudioContext;p&&(i||(i=new p,e=i.createGain(),e.gain.value=0,e.connect(i.destination)),i.resume().then(()=>{!r||t||(s=i.currentTime+.035,n=0,e.gain.setTargetAtTime(l,i.currentTime,.09),c(),t=setInterval(c,80))}).catch(()=>{}))}return{play:h,setVolume(u){l=.16*u/.7,r&&e&&e.gain.setTargetAtTime(l,i.currentTime,.055)}}}function Dv(i){return()=>(i=i*16807%2147483647,(i-1)/2147483646)}function $d(i=!1){const e=document.createElement("canvas");e.width=1024,e.height=i?1024:512;const t=e.getContext("2d"),n=Dv(i?7304:1509),s=i?128:512;for(let o=0,a=0;o<e.height;o+=s,a++){const c=n(),l=t.createLinearGradient(0,o,0,o+s);l.addColorStop(0,`hsl(30 42% ${55+c*6}%)`),l.addColorStop(.49,`hsl(32 43% ${58+c*6}%)`),l.addColorStop(1,`hsl(28 39% ${54+c*6}%)`),t.fillStyle=l,t.fillRect(0,o,1024,s),t.save(),t.beginPath(),t.rect(0,o,1024,s),t.clip();const h=175+n()*640,u=o+s*(.3+n()*.4),p=n()*6.28;for(let d=0;d<s*2.5;d++){const g=o+n()*s,_=g-u,m=1.5+n()*2.5,f=d%17===0;t.strokeStyle=d%4===0?`rgba(253,218,155,${.05+n()*.16})`:`rgba(76,41,18,${.045+n()*(f?.28:.16)})`,t.lineWidth=f?1.6:.23+n()*.66,t.beginPath();for(let M=0;M<=1024;M+=8){const x=Math.exp(-(((M-h)/102)**2+(_/25)**2)),v=Math.sin(M*.008+p+g*.022)*m+Math.sin(M*.018+g*.045)*1.2,T=g+v+Math.tanh(_*.3)*x*13;M===0?t.moveTo(M,T):t.lineTo(M,T)}t.stroke()}for(let d=0;d<s*7;d++){const g=n()*1024,_=o+n()*s;t.fillStyle=d%3===0?"#edd1a051":"#52342238",t.fillRect(g,_,1+n()*8,.35+n()*.65)}if(t.restore(),i){t.fillStyle="#715031b0",t.fillRect(0,o,1024,2),t.fillStyle="#eaca9d8a",t.fillRect(0,o+2,1024,1);const d=165+a*293%720;t.fillStyle="#5c3d2485",t.fillRect(d,o,2,s),t.fillStyle="#f4d7a88a",t.fillRect(d+2,o,1,s)}}const r=new Ht(e);return r.colorSpace=ct,r.anisotropy=8,i&&(r.wrapS=r.wrapT=qn,r.repeat.set(4,9)),r}function Lv(){const i=document.createElement("canvas");i.width=i.height=512;const e=new Ht(i);return Jd(e,0),e}function Jd(i,e){const t=i.image.getContext("2d");t.save(),t.fillStyle="#191919",t.fillRect(0,0,512,512),t.translate(Math.sin(e*.42)*3,Math.sin(e*.31)*2),t.filter="blur(8px)",t.fillStyle="#ffffff";const n=s=>(512-s)*.37;for(const[s,r]of[[69,190],[218,327],[355,458]])for(const[o,a]of[[26,146],[174,299]])t.beginPath(),t.moveTo(o+n(s),s),t.lineTo(a+n(s),s),t.lineTo(a+n(r),r),t.lineTo(o+n(r),r),t.closePath(),t.fill();t.filter="blur(9px)";for(let s=0;s<21;s++){const r=365+s*97%145,o=63+s*113%364;t.fillStyle=s%3===0?"#35352d55":"#51493744",t.beginPath(),t.ellipse(r+Math.sin(e*.61+s)*6,o+Math.sin(e*.47+s)*4,11+s%7,5+s%6,-.56,0,Math.PI*2),t.fill()}t.restore(),i.needsUpdate=!0}function fs(i,{x:e,y:t,z:n,width:s,depth:r,radius:o,spread:a,opacity:c}){const h=document.createElement("canvas");h.width=h.height=96;const u=h.getContext("2d"),p=u.createImageData(96,96),d=s+a*2,g=r+a*2;for(let M=0;M<96;M++)for(let x=0;x<96;x++){const v=Math.abs((x/95-.5)*d)-s/2+o,T=Math.abs((M/95-.5)*g)-r/2+o,y=Math.hypot(Math.max(v,0),Math.max(T,0))+Math.min(Math.max(v,T),0)-o,C=Math.min(1,Math.max(0,y/a)),R=(M*96+x)*4;p.data[R]=255,p.data[R+1]=255,p.data[R+2]=255,p.data[R+3]=Math.round(255*(1-C)**3)}u.putImageData(p,0,0);const _=new Ht(h),m=new Xt({color:"#3e372a",map:_,opacity:c,transparent:!0,depthWrite:!1}),f=new Fe(new Pt(d,g),m);f.rotation.x=-Math.PI/2,f.position.set(e,t,n),f.raycast=()=>{},i.add(f)}function Iv({root:i,box:e,cylinder:t,lineTube:n,mat:s,wood:r,silver:o,greenDark:a,cream:c}){const l=new nt;l.position.set(-3.48,.12,-.83),l.jewelCases=[],i.add(l),e(1.52,.1,.81,0,.09,0,a,.049,l);for(const D of[-.55,.55])for(const F of[-.24,.24])t(.073,.052,D,.026,F,o,l);fs(i,{x:l.position.x,y:.121,z:l.position.z,width:1.5,depth:.79,radius:.17,spread:.18,opacity:.43});const h=.96,u=(D,F=h)=>[Math.sin(D)*F,.87+Math.cos(D)*F,-.07],p=Array.from({length:15},(D,F)=>u(-.69+F*.103)),d=[[-.48,.14,-.07],[-.63,.47,-.07],[-.69,.86,-.07],[-.68,1.2,-.07],...p];n(d,.106,r,l);const g=new rs(d.slice(0,7).map(D=>new L(...D))),_=[];for(let D=0;D<=128;D++){const F=D/128,V=F*Math.PI*11,k=g.getPoint(F),q=g.getTangent(F);k.addScaledVector(new L(q.y,-q.x,0),.116*Math.cos(V)),k.z+=.116*Math.sin(V),_.push(k.toArray())}const m=new rs(_.map(D=>new L(...D))),f=new Fe(new Wr(m,160,.013,8,!1),o);f.castShadow=!0,l.add(f);const x=["#bca387","#6c7c66","#ac7359","#8a98a2","#d2ae64","#ddd2b8"].map(D=>s(D,.65)),v=new pn({color:"#eeeae0",transparent:!0,opacity:.32,roughness:.16,depthWrite:!1});for(let D=0;D<13;D++){const F=-.64+D*.106,V=new nt;V.position.set(...u(F)),V.rotation.z=-F,l.add(V),n([[-.027,.025,-.23],[-.027,-.012,-.24],[-.027,-.03,0],[-.027,-.013,.24],[-.027,.041,.245]],.012,o,V);const k=new nt;V.add(k),l.jewelCases.push(k),e(.044,.353,.44,0,.185,0,v,.005,k).castShadow=!1,e(.037,.335,.409,0,.187,0,x[D%x.length],.003,k),e(.043,.018,.438,0,.36,0,c,.003,k)}const T=new Zn,y=Array.from({length:15},(D,F)=>u(-.69+F*.103,1.33)),C=Array.from({length:15},(D,F)=>u(.752-F*.103,.9)),[R,...S]=[...y,...C];T.moveTo(R[0],R[1]);for(const[D,F]of S)T.lineTo(D,F);const E=new Fe(new Ti(T),new Xt({visible:!1,side:Mt}));E.position.z=.12,l.add(E),e(.84,.065,.67,.27,.19,.025,a,.027,l),e(.78,.36,.056,.28,.32,-.29,a,.025,l);for(const D of[-.12,.68])e(.07,.48,.68,D,.4,.025,a,.035,l);e(.85,.14,.055,.28,.25,.36,a,.025,l);for(let D=0;D<8;D++){const F=e(.019,.67,.58,-.044+D*.088,.55,.014,x[(D+1)%x.length],.004,l);F.rotation.z=-.07,e(.016,.63,.018,F.position.x+.022,.55,.311,c,.004,l).rotation.z=-.07}return l}const Au={type:"change"},Jc={type:"start"},Qd={type:"end"},Co=new oa,Cu=new yi,Uv=Math.cos(70*tt.DEG2RAD),It=new L,an=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rl=1e-6;class Nv extends Wm{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:zs.ROTATE,TWO:zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Yn,this._lastTargetPosition=new L,this._quat=new Yn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eu,this._sphericalDelta=new eu,this._scale=1,this._panOffset=new L,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new L,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ov.bind(this),this._onPointerDown=Fv.bind(this),this._onPointerUp=zv.bind(this),this._onContextMenu=Xv.bind(this),this._onMouseWheel=Hv.bind(this),this._onKeyDown=Vv.bind(this),this._onTouchStart=Gv.bind(this),this._onTouchMove=Wv.bind(this),this._onMouseDown=Bv.bind(this),this._onMouseMove=kv.bind(this),this._interceptControlDown=qv.bind(this),this._interceptControlUp=Yv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Au),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Co.origin.copy(this.object.position),Co.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Co.direction))<Uv?this.object.lookAt(this.target):(Cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Co.intersectPlane(Cu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rl||this._lastTargetPosition.distanceToSquared(this.target)>rl?(this.dispatchEvent(Au),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ov(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qd),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Bv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case ks.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case ks.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Jc)}function kv(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Hv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Jc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Qd))}function Vv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Gv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Jc)}function Wv(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function Xv(i){this.enabled!==!1&&i.preventDefault()}function qv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const xr=new L;function Mn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;xr.copy(e),xr[n]=0,xr.normalize();const l=.5*o/(o+a),h=1-xr.angleTo(i)/c;return Math.sign(xr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Qc extends Ii{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new L,l=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,p=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,_=new L,m=.5/o;for(let f=0,M=0;f<u.length;f+=3,M+=2)switch(c.fromArray(u,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[f+0]=h.x*Math.sign(c.x)+l.x*r,u[f+1]=h.y*Math.sign(c.y)+l.y*r,u[f+2]=h.z*Math.sign(c.z)+l.z*r,p[f+0]=l.x,p[f+1]=l.y,p[f+2]=l.z,Math.floor(f/g)){case 0:_.set(1,0,0),d[M+0]=Mn(_,l,"z","y",r,n),d[M+1]=1-Mn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[M+0]=1-Mn(_,l,"z","y",r,n),d[M+1]=1-Mn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[M+0]=1-Mn(_,l,"x","z",r,e),d[M+1]=Mn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[M+0]=1-Mn(_,l,"x","z",r,e),d[M+1]=1-Mn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[M+0]=1-Mn(_,l,"x","y",r,e),d[M+1]=1-Mn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[M+0]=Mn(_,l,"x","y",r,e),d[M+1]=1-Mn(_,l,"y","x",r,t);break}}static fromJSON(e){return new Qc(e.width,e.height,e.depth,e.segments,e.radius)}}class jv extends Dd{constructor(){super();const e=new Ii;e.deleteAttribute("uv");const t=new vt({side:tn}),n=new vt,s=new Zc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ld(e,n,6),a=new Rt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new Fe(e,Ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Fe(e,Ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Fe(e,Ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Fe(e,Ns(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const p=new Fe(e,Ns(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const d=new Fe(e,Ns(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ns(i){return new Dm({color:0,emissive:16777215,emissiveIntensity:i})}const Yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Zv=new Kc(-1,1,1,-1,0,1);class Kv extends yt{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}}const $v=new Kv;class eh{constructor(e){this._mesh=new Fe($v,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Zv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ef extends sr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new eh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ru extends sr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Jv extends sr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Qv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ef(Yo),this.copyPass.material.blending=Gt,this.clock=new Gm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ru!==void 0&&(o instanceof Ru?n=!0:o instanceof Jv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ex extends sr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Be}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Ro={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new it},cameraProjectionMatrixInverse:{value:new it},cameraWorldMatrix:{value:new it},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},Po={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ol={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function tx(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=nx(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],c=2*Math.PI*a/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new aa(s,e,e);return r.wrapS=qn,r.wrapT=qn,r.needsUpdate=!0,r}function nx(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const Do={defines:{SAMPLES:16,SAMPLE_VECTORS:tf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ce},cameraProjectionMatrixInverse:{value:new it},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function tf(i,e,t){const n=ix(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function ix(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}class sx{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,p=c-u,d=l-u,g=e-p,_=t-d;let m,f;g>_?(m=1,f=0):(m=0,f=1);const M=g-m+h,x=_-f+h,v=g-1+2*h,T=_-1+2*h,y=c&255,C=l&255,R=this.perm[y+this.perm[C]]%12,S=this.perm[y+m+this.perm[C+f]]%12,E=this.perm[y+1+this.perm[C+1]]%12;let D=.5-g*g-_*_;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[R],g,_));let F=.5-M*M-x*x;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[S],M,x));let V=.5-v*v-T*T;return V<0?r=0:(V*=V,r=V*V*this._dot(this.grad3[E],v,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),p=Math.floor(n+l),d=1/6,g=(h+u+p)*d,_=h-g,m=u-g,f=p-g,M=e-_,x=t-m,v=n-f;let T,y,C,R,S,E;M>=x?x>=v?(T=1,y=0,C=0,R=1,S=1,E=0):M>=v?(T=1,y=0,C=0,R=1,S=0,E=1):(T=0,y=0,C=1,R=1,S=0,E=1):x<v?(T=0,y=0,C=1,R=0,S=1,E=1):M<v?(T=0,y=1,C=0,R=0,S=1,E=1):(T=0,y=1,C=0,R=1,S=1,E=0);const D=M-T+d,F=x-y+d,V=v-C+d,k=M-R+2*d,q=x-S+2*d,W=v-E+2*d,G=M-1+3*d,z=x-1+3*d,K=v-1+3*d,H=h&255,j=u&255,Q=p&255,de=this.perm[H+this.perm[j+this.perm[Q]]]%12,be=this.perm[H+T+this.perm[j+y+this.perm[Q+C]]]%12,Pe=this.perm[H+R+this.perm[j+S+this.perm[Q+E]]]%12,Y=this.perm[H+1+this.perm[j+1+this.perm[Q+1]]]%12;let Z=.6-M*M-x*x-v*v;Z<0?s=0:(Z*=Z,s=Z*Z*this._dot3(this.grad3[de],M,x,v));let me=.6-D*D-F*F-V*V;me<0?r=0:(me*=me,r=me*me*this._dot3(this.grad3[be],D,F,V));let _e=.6-k*k-q*q-W*W;_e<0?o=0:(_e*=_e,o=_e*_e*this._dot3(this.grad3[Pe],k,q,W));let fe=.6-G*G-z*z-K*K;return fe<0?a=0:(fe*=fe,a=fe*fe*this._dot3(this.grad3[Y],G,z,K)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,p,d,g;const _=(e+t+n+s)*c,m=Math.floor(e+_),f=Math.floor(t+_),M=Math.floor(n+_),x=Math.floor(s+_),v=(m+f+M+x)*l,T=m-v,y=f-v,C=M-v,R=x-v,S=e-T,E=t-y,D=n-C,F=s-R,V=S>E?32:0,k=S>D?16:0,q=E>D?8:0,W=S>F?4:0,G=E>F?2:0,z=D>F?1:0,K=V+k+q+W+G+z,H=o[K][0]>=3?1:0,j=o[K][1]>=3?1:0,Q=o[K][2]>=3?1:0,de=o[K][3]>=3?1:0,be=o[K][0]>=2?1:0,Pe=o[K][1]>=2?1:0,Y=o[K][2]>=2?1:0,Z=o[K][3]>=2?1:0,me=o[K][0]>=1?1:0,_e=o[K][1]>=1?1:0,fe=o[K][2]>=1?1:0,Ve=o[K][3]>=1?1:0,Ye=S-H+l,I=E-j+l,ne=D-Q+l,te=F-de+l,se=S-be+2*l,ie=E-Pe+2*l,Se=D-Y+2*l,ue=F-Z+2*l,xe=S-me+3*l,ke=E-_e+3*l,ze=D-fe+3*l,P=F-Ve+3*l,b=S-1+4*l,X=E-1+4*l,$=D-1+4*l,he=F-1+4*l,ee=m&255,Le=f&255,Me=M&255,Ie=x&255,Ne=a[ee+a[Le+a[Me+a[Ie]]]]%32,ge=a[ee+H+a[Le+j+a[Me+Q+a[Ie+de]]]]%32,Ae=a[ee+be+a[Le+Pe+a[Me+Y+a[Ie+Z]]]]%32,Ge=a[ee+me+a[Le+_e+a[Me+fe+a[Ie+Ve]]]]%32,Oe=a[ee+1+a[Le+1+a[Me+1+a[Ie+1]]]]%32;let we=.6-S*S-E*E-D*D-F*F;we<0?h=0:(we*=we,h=we*we*this._dot4(r[Ne],S,E,D,F));let We=.6-Ye*Ye-I*I-ne*ne-te*te;We<0?u=0:(We*=We,u=We*We*this._dot4(r[ge],Ye,I,ne,te));let B=.6-se*se-ie*ie-Se*Se-ue*ue;B<0?p=0:(B*=B,p=B*B*this._dot4(r[Ae],se,ie,Se,ue));let re=.6-xe*xe-ke*ke-ze*ze-P*P;re<0?d=0:(re*=re,d=re*re*this._dot4(r[Ge],xe,ke,ze,P));let ve=.6-b*b-X*X-$*$-he*he;return ve<0?g=0:(ve*=ve,g=ve*ve*this._dot4(r[Oe],b,X,$,he)),27*(h+u+p+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}}class zn extends sr{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=tx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new jn(this.width,this.height,{type:Ri}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Wt({defines:Object.assign({},Ro.defines),uniforms:Si.clone(Ro.uniforms),vertexShader:Ro.vertexShader,fragmentShader:Ro.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pm,this.normalMaterial.blending=Gt,this.pdMaterial=new Wt({defines:Object.assign({},Do.defines),uniforms:Si.clone(Do.uniforms),vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Wt({defines:Object.assign({},Po.defines),uniforms:Si.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,blending:Gt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Wt({uniforms:Si.clone(Yo.uniforms),vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Rl,blendDst:yr,blendEquation:Rn,blendSrcAlpha:Cl,blendDstAlpha:yr,blendEquationAlpha:Rn}),this.blendMaterial=new Wt({uniforms:Si.clone(ol.uniforms),vertexShader:ol.vertexShader,fragmentShader:ol.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ad,blendSrc:Rl,blendDst:yr,blendEquation:Rn,blendSrcAlpha:Cl,blendDstAlpha:yr,blendEquationAlpha:Rn}),this._fsQuad=new eh(null),this._originalClearColor=new Be,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Hc,this.depthTexture.format=Ks,this.depthTexture.type=Zs,this.normalRenderTarget=new jn(this.width,this.height,{minFilter:nn,magFilter:nn,type:Ri,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=tf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case zn.OUTPUT.Off:break;case zn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Gt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new sx,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const r=new aa(s,e,e,yn,Un);return r.wrapS=qn,r.wrapT=qn,r.needsUpdate=!0,r}}zn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Lo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class rx extends sr{constructor(){super(),this.uniforms=Si.clone(Lo.uniforms),this.material=new Rm({name:Lo.name,uniforms:this.uniforms,vertexShader:Lo.vertexShader,fragmentShader:Lo.fragmentShader}),this._fsQuad=new eh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===dt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ld?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===cd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ud&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const ox={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new ce(1/1024,1/512)}},vertexShader:`

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

		}`},ax='*{box-sizing:border-box}body{margin:0;background:#f2eee6;color:#515344;font:14px Arial,Microsoft YaHei,sans-serif}button,a{-webkit-tap-highlight-color:transparent}button{font:inherit;cursor:pointer}button:focus-visible,a:focus-visible{outline:2px solid #74805f;outline-offset:5px}button{color:inherit}a{color:inherit;text-decoration:none}.page-head{height:90px;padding:0 5%;display:flex;align-items:center;justify-content:space-between}.page-head>a{font:32px Georgia,serif;letter-spacing:-1px}.page-head a span{font:12px Arial,sans-serif;margin-left:17px;letter-spacing:1px;color:#78796b}.page-head>span{font-size:12px;color:#878678}.desktop{max-width:1300px;min-height:calc(100svh - 164px);margin:auto;padding:45px 5% 60px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:70px}.overline{font-size:13px;color:#8c8b78;margin:0 0 18px}h1{font-weight:400;font-size:clamp(48px,5.3vw,78px);letter-spacing:-3px;line-height:1.2;margin:0 0 24px}.intro-copy{font-size:15px;line-height:1.9;color:#858474}.collection{display:block;position:relative;margin-top:38px;width:320px;padding:25px 25px 16px;border:1px solid #d2d2bd;border-radius:9px;background:linear-gradient(120deg,#dedfce,#e9e9db 60%,#d6d9c3);box-shadow:inset 0 1px #ffffffb0,0 12px 23px #575c3a12;text-align:left;transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s,border-color .35s}.collection:hover,.collection:focus-visible{transform:translateY(-5px) scale(1.035);border-color:#a4b489;box-shadow:inset 0 1px #fff,0 0 28px #d3e5a48a,0 18px 35px #5f714326}.shelf-art{display:flex;align-items:flex-end;height:89px;gap:7px;padding:0 8px;border-bottom:5px solid #a5ad8c;perspective:700px}.shelf-art i{display:block;width:23px;height:80px;background:linear-gradient(90deg,#b4b6a7,#ecece4 25%,#fbfaf4 38%,#bfc5b4 50%,#e9e9df 75%,#acae9b);border:1px solid #a7ad99;border-radius:2px;transform:rotateY(-12deg);box-shadow:3px 0 2px #61704715}.shelf-art i:nth-child(3n){height:86px;border-top:12px solid #b7c2ad}.shelf-art i:nth-child(3n+1){border-top:12px solid #b7856e}.shelf-art i:nth-child(3n+2){border-top:12px solid #86a8b8}.collection-label{display:block;position:relative;padding-top:16px}.collection-label b{font-size:15px;font-weight:500}.collection-label small{display:block;margin-top:7px;font-size:11px;color:#7c846d}.collection-label em{position:absolute;right:0;top:24px;font-style:normal;font-size:21px}.note{font-size:11px;color:#969485;margin-top:20px}.computer-area{position:relative;height:400px;width:490px;max-width:100%;justify-self:center;align-self:center}.computer{position:absolute;left:0;top:25px;width:320px;z-index:2}.monitor{height:258px;padding:26px 25px 30px;background:linear-gradient(125deg,#eae4d3,#d6cfb9);border:1px solid #c8bfa8;border-radius:18px 18px 12px 12px;box-shadow:inset 3px 3px 4px #fff9e9,6px 8px #c8c0a9,15px 20px 35px #82785e19;position:relative}.screen{position:relative;height:199px;background:#8fae9c;border:7px solid #b7b8a1;border-radius:35%/7%;box-shadow:inset 0 0 22px #1b594d42;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center}.screen-wave{position:absolute;width:350px;height:160px;left:-55px;bottom:-90px;background:#b1c9ac77;border-radius:50%;transform:rotate(-15deg)}#screen-copy{position:relative;z-index:1;color:#f0f2d9;text-shadow:0 1px #57756430;padding:12px}#screen-copy small{font-size:9px;letter-spacing:2px}#screen-copy b{display:block;font-size:21px;font-weight:400;margin:15px 0 10px}#screen-copy p{font-size:11px;line-height:1.7;margin:0}.monitor-label{display:block;text-align:center;color:#99947e;font:7px Arial;margin-top:10px;letter-spacing:1px}.led{width:4px;height:4px;background:#8fa87c;position:absolute;right:20px;bottom:12px;border-radius:50%}.stand{width:76px;height:34px;margin:auto;background:linear-gradient(90deg,#ccc4ac,#ded7c0);box-shadow:inset 0 8px 10px #81785624}.stand-foot{width:133px;height:14px;margin:auto;border-radius:6px;background:#ddd5bd;box-shadow:0 5px #bcb59d}.tower{position:absolute;right:0;top:15px;width:133px;height:294px;background:linear-gradient(120deg,#e7e0cc,#d4ccb4);border:1px solid #c5bda4;border-radius:8px 8px 3px 3px;box-shadow:inset 3px 3px #f6f1df,7px 5px #c4bca5,13px 14px 30px #6f674b16;padding:20px 12px}.drive-bay{height:35px;margin-bottom:8px;border:1px solid #bcb49b;background:#ddd6be;box-shadow:inset 2px 2px #efe9d8}.drive-bay:after{content:"";display:block;height:1px;background:#b8b09a;width:60%;margin:21px auto}.drive-slot{height:8px;background:#4f5145;margin-top:12px;border-radius:1px;box-shadow:0 2px #efe8d5}.drive-tray{width:116px;height:24px;background:#d5ccb2;border:1px solid #aaa58d;position:absolute;left:7px;top:123px;transform:perspective(200px) rotateX(40deg);transform-origin:top;transition:transform 1s,opacity .7s}.drive-tray:after{content:"";display:block;width:60px;height:16px;border:1px solid #b5ae98;border-radius:50%;margin:2px auto}.tower.loaded .drive-tray{transform:perspective(200px) rotateX(40deg) scaleY(.02);opacity:0}.power{margin-top:50px;width:17px;height:17px;border-radius:50%;border:2px solid #b9b19a;box-shadow:inset 0 1px 3px #877e5c33}.vents{margin-top:20px;height:31px;background:repeating-linear-gradient(0deg,transparent 0 4px,#b9b19a 4px 5px)}.table{height:16px;background:linear-gradient(#b99c72,#a8906b);position:absolute;top:340px;left:-35px;right:-25px;border-radius:5px;box-shadow:0 13px 25px #7a725a19}.computer-caption{position:absolute;top:372px;font-size:12px;left:0;right:0;text-align:center;color:#8c8b79}.page-footer{height:74px;padding:0 5%;display:flex;justify-content:space-between;align-items:center;color:#999582;font-size:11px}#reset{border:0;background:transparent;padding:12px;color:#687652}dialog{border:0;padding:0;color:#515344;background:#f1eee3;box-shadow:0 25px 100px #343a3240}dialog::backdrop{background:#3e443852;-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px)}dialog[open]{animation:arrive .45s cubic-bezier(.2,.8,.2,1)}#board{width:min(1050px,92vw);height:85svh;max-height:1000px;border-radius:12px;background:linear-gradient(110deg,#eeebde,#f6f3e8 55%,#eeeddf);overflow:auto}#board:before{content:"";position:absolute;top:0;left:0;right:0;height:6px;background:#a3ab8b}.board-heading{position:relative;display:flex;justify-content:space-between;padding:38px 45px 20px}.board-heading small{font-size:10px;letter-spacing:2px;color:#9b9c87}h2{font-weight:400;font-size:29px;letter-spacing:-.8px;margin:13px 0}.board-heading p{font-size:13px;color:#8e8e7c;line-height:1.8}.close{position:absolute;right:20px;top:20px;background:transparent;border:0;font-size:27px;width:40px;height:40px;color:#8e927f}.disc-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 27px;padding:10px 45px 38px}.album{border:0;background:none;padding:0;text-align:left;min-width:0}.jewel{position:relative;display:block;aspect-ratio:1;width:100%;padding:8px 7px 8px 13px;background:linear-gradient(135deg,#f9fcf180,#c4cabc55);border:1px solid #a5ad9c95;border-radius:3px;box-shadow:inset 1px 1px 2px #fff,3px 5px #a3ab982c,7px 12px 20px #69704c18;transition:transform .3s,box-shadow .3s;isolation:isolate}.jewel:before{content:"";position:absolute;top:0;bottom:0;left:4px;width:5px;border-left:1px solid #fafcf980;border-right:1px solid #929c8170;z-index:2}.jewel:after{content:"";position:absolute;inset:0;background:linear-gradient(130deg,#fff5,transparent 35%,transparent 70%,#fff3);pointer-events:none;z-index:3}.album:hover .jewel,.album:focus-visible .jewel{transform:translateY(-7px) rotate(-2deg);box-shadow:inset 1px 1px 2px #fff,3px 7px #a3ab982c,0 10px 30px #d1e3a078}.cover{display:flex;position:relative;overflow:hidden;width:100%;height:100%;flex-direction:column;justify-content:space-between;padding:12px;background:var(--paper);color:var(--ink);box-shadow:0 0 0 1px #393d281a}.cover .serial{font-size:7px;letter-spacing:1px;z-index:1}.cover .cover-title{font:25px Georgia,serif;line-height:.95;z-index:1;letter-spacing:-1px;white-space:pre-line}.cover .cover-foot{font-size:6px;letter-spacing:1px;z-index:1}.cover .art{position:absolute;inset:0;pointer-events:none}.art:before,.art:after{content:"";position:absolute}.art.orbit:before{width:78%;height:78%;right:-12%;bottom:8%;border:18px solid var(--accent);border-radius:50%}.art.orbit:after{height:2px;width:130%;background:var(--ink);transform:rotate(-35deg);left:-15%;top:50%}.art.grid{background:repeating-linear-gradient(0deg,transparent 0 23px,#ffffff35 23px 24px),repeating-linear-gradient(90deg,transparent 0 23px,#ffffff35 23px 24px)}.art.grid:after{width:50%;height:50%;background:var(--accent);bottom:12%;right:-10%;transform:rotate(32deg)}.art.flower:before{width:65%;height:65%;border-radius:50% 0 50% 50%;background:var(--accent);right:-4%;top:20%;transform:rotate(35deg)}.art.flower:after{width:24%;height:24%;border-radius:50%;background:var(--paper);right:18%;top:40%}.art.wave:before{width:160%;height:70%;border-radius:50%;background:var(--accent);bottom:-20%;left:-35%;transform:rotate(-30deg)}.art.wave:after{width:160%;height:60%;border-radius:50%;border:1px solid var(--ink);bottom:-10%;left:-25%;transform:rotate(-30deg)}.album-label{display:block;margin-top:15px;font-size:13px}.album small{display:block;font-size:10px;color:#92917e;margin-top:6px}.board-footer{display:flex;justify-content:space-between;padding:25px 45px;background:#e4e5d5;color:#858b72;font-size:11px}#detail{width:min(850px,93vw);border-radius:12px;overflow:visible}.detail-layout{display:grid;grid-template-columns:1fr 1fr;gap:50px;padding:80px 45px 60px;align-items:center}.unboxing{height:270px;position:relative;display:flex;align-items:center}.unboxing>.jewel{width:205px;height:205px;flex-shrink:0;z-index:2;transform:rotate(-6deg)}.unboxing .cover-title{font-size:33px}.optical-disc{position:absolute;width:187px;height:187px;left:30px;top:43px;border-radius:50%;background:conic-gradient(from 40deg,#d3d3c5,#f8f4db,#c8d7d0,#e0d2dd,#e9e5c5,#adbec5,#d3d3c5);box-shadow:inset 0 0 0 1px #a5ad9c,0 10px 20px #6b72581a;z-index:1;transition:transform .85s cubic-bezier(.2,.7,.2,1);display:grid;place-items:center;isolation:isolate}.optical-disc:before{content:"";position:absolute;inset:12px;border:1px solid #ffffff85;border-radius:50%}.optical-disc:after{content:"";position:absolute;width:18px;height:18px;border-radius:50%;background:#f1eee3;box-shadow:0 0 0 8px #c1c9be,0 0 0 9px #999f9460}.disc-print{width:135px;height:135px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--paper);color:var(--ink);border:1px solid #fff8;font:12px Georgia,serif;letter-spacing:1px;text-align:center;padding-bottom:65px;white-space:pre-line}.unboxing.out .optical-disc{transform:translate(118px) rotate(35deg)}.unboxing.returning .optical-disc{transform:translate(0) rotate(0)}.detail-copy{opacity:0;transform:translateY(9px);transition:opacity .45s .4s,transform .45s .4s}.out~.detail-copy{opacity:1;transform:none}.detail-copy>small{font-size:10px;letter-spacing:2px;color:#92977e}.detail-copy h2{font-size:30px;margin:15px 0}.detail-copy>p{color:#838672;font-size:14px;line-height:1.9}.detail-copy .detail-question{margin-top:25px;font-size:12px;color:#626c51}.actions{display:flex;gap:8px;margin-top:12px}.actions button{border:1px solid #bdc4ad;border-radius:5px;background:transparent;padding:12px 16px;font-size:12px;transition:background .2s,transform .2s}.actions button:active{transform:translateY(2px)}#insert{background:#737e5d;color:#fbf8ed;border-color:#737e5d}#insert:hover{background:#5a6749}#put-back:hover{background:#e1e5d4}.demo-tag{display:block;font-size:10px;color:#a3a38d;margin-top:16px}.flying-disc{position:fixed!important;left:0;top:0;z-index:10000;pointer-events:none;margin:0;transition:none}.screen.loaded{background:#6d806b}.screen.loaded #screen-copy{animation:screen-in 1s ease-out}#announcement{position:fixed;bottom:28px;left:50%;transform:translate(-50%,15px);background:#57654b;color:#faf7ed;padding:12px 22px;border-radius:6px;font-size:12px;z-index:15;opacity:0;pointer-events:none;transition:opacity .3s,transform .3s}#announcement.show{opacity:1;transform:translate(-50%)}button:disabled{cursor:wait;opacity:.7}[hidden]{display:none!important}@keyframes arrive{0%{opacity:0;transform:translateY(25px) scale(.97)}to{opacity:1;transform:none}}@keyframes screen-in{0%{opacity:0;filter:blur(5px)}to{opacity:1;filter:none}}@media(max-width:950px){.desktop{gap:20px}.computer-area{transform:scale(.8);transform-origin:center;width:490px;margin-left:-35px}.disc-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.detail-layout{gap:20px;padding:65px 30px 45px}.unboxing>.jewel{width:180px;height:180px}.optical-disc{width:165px;height:165px;top:54px}.disc-print{width:120px;height:120px}.unboxing.out .optical-disc{transform:translate(95px) rotate(35deg)}}@media(max-width:650px){.page-head{height:76px;padding:0 22px}.page-head>span{display:none}.page-head a span{font-size:10px;margin-left:10px}.desktop{grid-template-columns:1fr;padding:20px 25px 0;gap:20px}.intro h1{font-size:52px}.intro-copy{font-size:13px}.collection{width:100%;max-width:340px;margin-top:24px}.note{font-size:10px}.computer-area{width:490px;max-width:none;transform:scale(.64);transform-origin:top left;margin:25px 0 -120px;justify-self:start}.page-footer{padding:0 25px;font-size:10px;gap:10px}.page-footer>span{max-width:140px;line-height:1.6}.board-heading{padding:30px 22px 12px}.board-heading h2{font-size:22px}.board-heading p{font-size:12px;max-width:240px}.disc-grid{grid-template-columns:repeat(3,minmax(0,1fr));padding:12px 20px 30px;gap:22px 13px}.jewel{padding:4px 3px 4px 8px}.cover{padding:7px}.cover .cover-title{font-size:17px}.cover .serial{font-size:5px}.cover .cover-foot{font-size:4px}.album-label{font-size:11px;line-height:1.5;margin-top:10px}.album small{font-size:9px;line-height:1.5}.board-footer{padding:18px 22px;font-size:10px}.detail-layout{grid-template-columns:1fr;padding:40px 28px 30px;gap:0}.unboxing{width:290px;max-width:100%;height:240px;justify-self:center}.unboxing>.jewel{width:175px;height:175px}.unboxing .optical-disc{top:40px}.detail-copy h2{font-size:26px;margin:10px 0}.detail-copy>p{font-size:13px}.detail-copy .detail-question{margin-top:16px}.actions button{padding:13px 15px}.close{right:10px;top:10px}#detail{max-height:92svh;overflow:auto}.demo-tag{font-size:9px}.art.orbit:before{border-width:9px}.detail-layout .cover{padding:14px}.detail-layout .cover .serial{font-size:8px}.detail-layout .cover .cover-foot{font-size:6px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.cover .cover-title{font-size:22px;line-height:1.03;letter-spacing:-.9px}.unboxing .cover-title{font-size:25px}.unboxing>.jewel{padding:12px 10px 12px 17px}@media(max-width:650px){.cover .cover-title{font-size:12px;letter-spacing:-.5px;line-height:1.08}.unboxing .cover-title{font-size:22px}}#board.is-empty{width:min(460px,92vw);height:auto}#board.is-empty .disc-grid{display:none}';function lx({host:i,onOpen:e,onClose:t,onOpenCollection:n,prepareInsertion:s,getDrivePoint:r,onLoad:o,onEject:a,onToggleFocus:c,motionEnabled:l}){const h=i.attachShadow({mode:"open"}),u=matchMedia("(prefers-reduced-motion: reduce)").matches,p=G=>`--paper:${G.paper};--ink:${G.ink};--accent:${G.accent}`,d=(G,z)=>`<span class="jewel" style="${p(G)}"><span class="cover"><span class="serial">DOISH / VOL. ${String(z+1).padStart(2,"0")}</span><span class="art ${G.art}"></span><span class="cover-title">${G.en}</span><span class="cover-foot">A PERSONAL COLLECTION / ${G.category}</span></span></span>`,g=G=>`<span class="optical-disc" style="${p(G)}" aria-hidden="true"><span class="disc-print">${G.en}</span></span>`;h.innerHTML=`<style>${ax}
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
 <dialog id="board" class="${ri.length?"":"is-empty"}" aria-labelledby="board-title"><div class="board-heading"><div><small>DOISH / COLLECTION</small><h2 id="board-title">光盘集</h2><p>${ri.length?"挑一张光盘，看看里面的内容。":"目前还没有光盘。"}</p></div><button class="close" id="close-board" aria-label="收起光盘集">×</button></div><div class="disc-grid">${ri.map((G,z)=>`<button class="album" data-album="${z}" aria-label="选择${G.title}">${d(G,z)}<span class="album-label">${G.title}</span><small>${G.category}</small></button>`).join("")}</div></dialog>
 <dialog id="detail" aria-labelledby="detail-title"><button class="close" id="close-detail" aria-label="放回光盘">×</button><div class="detail-layout"><div class="unboxing" id="unboxing"></div><div class="detail-copy"><small id="detail-category"></small><h2 id="detail-title"></h2><p id="detail-description"></p><p class="detail-question">这张光盘，你想怎么处理？</p><div class="actions"><button id="put-back">放回</button><button id="insert">放进电脑查看 →</button></div><span class="demo-tag">示例光盘 · 真实作品内容后续接入</span></div></div></dialog><div id="announcement" role="status" aria-live="polite"></div>`;const _=G=>h.querySelector(G),m=_("#rack-trigger"),f=_("#board"),M=_("#detail");let x=0,v=!1,T,y,C,R,S=[];const E=G=>new Promise(z=>setTimeout(z,u?0:G));function D(G){clearTimeout(y),_("#announcement").textContent=G,_("#announcement").classList.add("show"),y=setTimeout(()=>_("#announcement").classList.remove("show"),3600)}function F(){S.forEach(G=>G.cancel()),S=[]}function V(){if(v||f.open)return;const G=!u&&l();if(e(),f.classList.toggle("collection-still",!G),f.showModal(),G&&ri.length){const z=_(".disc-grid"),K=getComputedStyle(z).gridTemplateColumns.split(" ").length,H=C?f.getBoundingClientRect():m.getBoundingClientRect();S=Array.from(z.children,(j,Q)=>{const de=j.getBoundingClientRect(),be=k(H.x+H.width/2-de.x-de.width/2,-240,180),Pe=k(H.y+H.height/2-de.y-de.height/2,-100,150);return j.animate([{transform:`translate(${be}px,${Pe}px) scale(.56) rotate(-6deg)`,opacity:0},{transform:"translateY(-5px) scale(1.02)",opacity:1,offset:.82},{transform:"none",opacity:1}],{duration:470,delay:120+Q%K*100,fill:"backwards",easing:"cubic-bezier(.22,.68,.22,1)"})})}_("#close-board").focus()}function k(G,z,K){return Math.max(z,Math.min(K,G))}function q(){v||(F(),f.close(),t(),C?C():m.focus(),C=null)}m.addEventListener("click",()=>R?R():V()),_("#close-board").addEventListener("click",q),_(".disc-grid").addEventListener("click",G=>{const z=G.target.closest("[data-album]");if(!z||v)return;x=+z.dataset.album,T=z;const K=ri[x];_("#unboxing").className="unboxing",_("#unboxing").innerHTML=g(K)+d(K,x),_("#detail-category").textContent=K.category,_("#detail-title").textContent=K.title,_("#detail-description").textContent=K.description,M.showModal(),_("#put-back").focus(),requestAnimationFrame(()=>requestAnimationFrame(()=>_("#unboxing").classList.add("out")))});async function W(){v||(v=!0,_("#unboxing").classList.add("returning"),await E(650),M.close(),T?.focus(),v=!1)}_("#put-back").addEventListener("click",W),_("#close-detail").addEventListener("click",W),f.addEventListener("cancel",G=>{G.preventDefault(),q()}),M.addEventListener("cancel",G=>{G.preventDefault(),W()});for(const G of[f,M])G.addEventListener("click",z=>{if(z.target!==G)return;const K=G.getBoundingClientRect();(z.clientX<K.left||z.clientX>K.right||z.clientY<K.top||z.clientY>K.bottom)&&(G===M?W():q())});return _("#insert").addEventListener("click",async()=>{if(v)return;v=!0,C=null,_("#insert").disabled=!0,_("#put-back").disabled=!0;const G=ri[x],z=_("#unboxing .optical-disc"),K=z.getBoundingClientRect(),H=z.cloneNode(!0);H.classList.add("flying-disc"),H.style.cssText+=`;left:${K.left}px;top:${K.top}px;width:${K.width}px;height:${K.height}px;`,M.close(),f.close(),m.hidden=!0,_("#reading-actions").hidden=!0,h.append(H);try{F();const j=await s(),Q=r(),de=Q.x-K.left-K.width/2,be=Q.y-K.top-K.height/2;await H.animate([{transform:"translate(0,0) rotate(35deg)",opacity:1},{offset:.68,transform:`translate(${de}px,${be-18}px) scale(.44) rotate(155deg)`,opacity:1},{transform:`translate(${de}px,${be}px) scale(.16,.025) rotate(180deg)`,opacity:0}],{duration:u||!j?1:1500,easing:"cubic-bezier(.4,0,.2,1)",fill:"forwards"}).finished,H.remove(),await o(G),_("#reading-actions").hidden=!1,_("#screen-focus").focus({preventScroll:!0})}catch(j){console.error("Disc insertion failed",j),D("光盘暂时未能载入，请重新选择。")}finally{H.remove(),v=!1,m.hidden=!1,_("#insert").disabled=!1,_("#put-back").disabled=!1,t()}}),_("#screen-focus").addEventListener("click",c),_("#open-collection").addEventListener("click",()=>{n(),V()}),_("#eject").addEventListener("click",()=>{v||(a(),_("#reading-actions").hidden=!0,V())}),{open:V,setRackAction(G){R=G},openFromDesktop(G){v||f.open||(C=G,V())},rackHasFocus:()=>m.matches(":focus-visible"),updateFocus(G,z){_("#reading-actions").hidden=!G&&!z,_("#screen-focus").textContent=G?"返回房间":"聚焦电脑",_("#eject").hidden=!z,_("#open-collection").hidden=z||!G},updateBounds(G){m.style.left=`${G.x}px`,m.style.top=`${G.y}px`,m.style.width=`${Math.max(38,G.w)}px`,m.style.height=`${Math.max(50,G.h)}px`}}}const cx=""+new URL("dusk-De50M9Nc.m4a",import.meta.url).href,hx=""+new URL("dusk-S2rd1cGH.mp4",import.meta.url).href,ux=""+new URL("dusk-DoM2Wyzm.webp",import.meta.url).href,dx=""+new URL("evening-BYTsTJNx.m4a",import.meta.url).href,fx=""+new URL("evening-k03b_GhQ.mp4",import.meta.url).href,px=""+new URL("evening-nSLaVOH0.webp",import.meta.url).href,mx=""+new URL("morning-TgC0UaN1.m4a",import.meta.url).href,gx=""+new URL("morning-C6gPFr-l.mp4",import.meta.url).href,_x=""+new URL("morning-BtfVvtT3.webp",import.meta.url).href,vx=""+new URL("night-DNfc017s.m4a",import.meta.url).href,xx=""+new URL("night-mrzf_3PN.mp4",import.meta.url).href,Mx=""+new URL("night-QG-eVDpT.webp",import.meta.url).href,yx=""+new URL("noon-CtqyJ-JA.m4a",import.meta.url).href,Sx=""+new URL("noon-BDsLYHN-.mp4",import.meta.url).href,bx=""+new URL("noon-CBXrKIMm.webp",import.meta.url).href,Pu={height:670,clearHeight:512},Br=[{id:"morning",name:"清晨",start:5,light:"#fff0d6",strength:2.5,ambient:1.16,background:"#f8f0e7",sun:.52,night:0},{id:"noon",name:"午后",start:10,light:"#fff6df",strength:3,ambient:1.35,background:"#f8f0e7",sun:1,night:0},{id:"evening",name:"傍晚",start:17,light:"#ffc18c",strength:2,ambient:1.03,background:"#e9d5c6",sun:.42,night:0},{id:"night",name:"入夜",start:20,light:"#b3c9ee",strength:.55,ambient:.65,background:"#b7bec7",sun:0,night:1},{id:"pre-dawn",name:"凌晨",start:0,light:"#a8bce6",strength:.42,ambient:.58,background:"#a9b3c3",sun:0,night:1}],Du=[["auto","跟随时间"],...Br.map(({id:i,name:e})=>[i,e])],Ex=Object.assign({"./assets/courtyard-live/dusk.m4a":cx,"./assets/courtyard-live/dusk.mp4":hx,"./assets/courtyard-live/dusk.webp":ux,"./assets/courtyard-live/evening.m4a":dx,"./assets/courtyard-live/evening.mp4":fx,"./assets/courtyard-live/evening.webp":px,"./assets/courtyard-live/morning.m4a":mx,"./assets/courtyard-live/morning.mp4":gx,"./assets/courtyard-live/morning.webp":_x,"./assets/courtyard-live/night.m4a":vx,"./assets/courtyard-live/night.mp4":xx,"./assets/courtyard-live/night.webp":Mx,"./assets/courtyard-live/noon.m4a":yx,"./assets/courtyard-live/noon.mp4":Sx,"./assets/courtyard-live/noon.webp":bx}),wx={morning:"morning",noon:"noon",evening:"dusk",night:"evening","pre-dawn":"night"},Io=(i,e)=>Ex[`./assets/courtyard-live/${wx[i.id]}.${e}`];function nf(i=new Date().getHours()){return Br.reduce((e,t)=>t.start<=i&&t.start>=e.start?t:e,Br[4])}function Uo(i){return i==="auto"?nf():Br.find(e=>e.id===i)}function Tx({onLighting:i,onTexture:e}){const t=new aa(new Uint8Array([232,233,216,255]),1,1);t.colorSpace=ct,t.needsUpdate=!0;const n={rain:{value:0},time:{value:0}},s=document.createElement("video");s.muted=!0,s.defaultMuted=!0,s.playsInline=!0,s.loop=!0,s.preload="metadata";const r=new Zp(s);r.colorSpace=ct;let o=t;const a=new Audio;a.loop=!0,a.volume=.68,a.preload="none";let c=!1;const l=new Map;let h="auto";try{const H=localStorage.getItem("doish-window-time");Uo(H)&&(h=H)}catch{}let u=Uo(h),p=u,d=u,g=u,_=1,m=0,f=!0,M=!1,x=!1,v=!1;function T(H){if(l.has(H.id))return;const j=new Image;j.fetchPriority=H===u?"high":"low";const Q=new Ft(j);Q.colorSpace=ct,Q.anisotropy=4,j.onload=()=>{Q.needsUpdate=!0,(H===u||H===p)&&(f=!0)},j.onerror=()=>{H===p&&(f=!0)},l.set(H.id,Q),j.src=Io(H,"webp")}function y(H){H!==o&&(o=H,e(H))}function C(){const H=l.get(u.id),j=!x&&s.currentSrc===new URL(Io(u,"mp4"),document.baseURI).href&&s.readyState>=s.HAVE_CURRENT_DATA;y(j?r:H?.image.naturalWidth?H:t)}function R(){if(k.setAttribute("aria-pressed",String(c)),k.textContent=c?"窗外声音 · 开":"窗外声音 · 关",!c||document.hidden||!v){a.pause();return}const H=Io(u,"m4a");a.getAttribute("src")!==H&&(a.src=H),a.play().catch(j=>{j.name==="AbortError"||a.getAttribute("src")!==H||(c=!1,R())})}function S(H){if(!H||x){s.pause();return}const j=Io(u,"mp4");s.getAttribute("src")!==j&&(s.src=j),s.play().catch(Q=>{Q.name==="AbortError"||s.getAttribute("src")!==j||(x=!0,f=!0)})}s.addEventListener("loadeddata",()=>{f=!0}),s.addEventListener("error",()=>{x=!0,f=!0});function E(H){p=H,T(H)}function D(H){g=d,_=H?0:1,u=p,s.pause(),x=!1,H?S(!0):(s.removeAttribute("src"),s.load()),C(),R(),f=!0}const F=document.createElement("label");F.className="daylight-control",F.innerHTML='<span id="daylight-status">窗外</span><select id="daylight" aria-label="窗外时段"></select>';const V=F.querySelector("select");for(const[H,j]of Du)V.add(new Option(j,H));V.value=h;const k=document.createElement("button");k.type="button",k.textContent="窗外声音 · 关",k.setAttribute("aria-pressed","false");const q=document.querySelector("#room-settings");q.insertBefore(F,document.querySelector("#motion")),q.insertBefore(k,document.querySelector("#motion"));function W(H){const j=Uo(H);if(j){h=H,V.value=h;try{localStorage.setItem("doish-window-time",h)}catch{}E(j)}}V.addEventListener("change",H=>W(H.target.value)),k.addEventListener("click",()=>{c=!c,R()}),document.addEventListener("visibilitychange",()=>{S(v&&!document.hidden),R()}),T(u);const G=()=>Br.forEach(T);"requestIdleCallback"in window?requestIdleCallback(G,{timeout:1200}):setTimeout(G,250);function z(H){H=H&&!document.hidden,H!==v&&(v=H,S(H),R())}function K(H,j){j=j&&!document.hidden,m+=H,h==="auto"&&m>=5&&(m=0,E(nf())),u!==p&&l.get(p.id)?.image.complete&&D(j),z(j),j&&M&&(n.time.value+=H);let Q=f;_<1&&(_=j?Math.min(1,_+H/.38):1,Q=!0),f&&C();const de=_*_*(3-2*_);if(Q){const be=(Pe,Y)=>tt.lerp(Pe,Y,de);d={name:u.name,sun:be(g.sun,u.sun),light:new Be(g.light).lerp(new Be(u.light),de),strength:be(g.strength,u.strength),ambient:be(g.ambient,u.ambient),background:new Be(g.background).lerp(new Be(u.background),de),night:be(g.night,u.night)},i({...d,color:d.light,sunlight:M?.3:d.sun})}f=!1}return{texture:t,weather:n,modes:Du,tick:K,setMode:W,setMotion:z,getMode:()=>h,isNight:()=>!!Uo(h).night,setRain:H=>{M=H,n.rain.value=Number(H),f=!0},getRain:()=>M}}function Ax({stage:i,camera:e,windowObject:t,player:n,windowView:s,toggleRecord:r,isRecordPlaying:o,setVolume:a}){const c=document.createElement("section");c.className="room-rail",c.hidden=!0,i.append(c);const l=new L,h=new L;let u=70,p;function d(m=!1){c.hidden=!0,m&&(p?.getClientRects().length?p:document.querySelector("#room-menu-toggle")).focus()}function g(){if(c.hidden)return;h.copy(l).project(e);const m=(h.x+1)*i.clientWidth/2,f=(1-h.y)*i.clientHeight/2;c.style.left=Math.max(8,Math.min(m-c.offsetWidth/2,i.clientWidth-c.offsetWidth-8))+"px",c.style.top=Math.max(8,Math.min(f+2,i.clientHeight-c.offsetHeight-8))+"px"}function _(m){p=document.activeElement;const f=m==="window",M=new Nn().setFromObject(f?t:n);M.getCenter(l),l.y=M.min.y,l.z=M.max.z;const x=f?"窗外":"唱片机";c.dataset.kind=m,c.setAttribute("aria-label",x),c.innerHTML='<header><strong></strong><button type="button" aria-label="收起">×</button></header><div class="rail-controls"></div>',c.querySelector("strong").textContent=x,c.querySelector("header button").onclick=()=>d(!0);const v=c.querySelector(".rail-controls");if(f){for(const[y,C]of s.modes){const R=document.createElement("button");R.textContent=C,R.dataset.mode=y,R.setAttribute("aria-pressed",String(s.getMode()===y)),R.onclick=()=>{s.setMode(y),v.querySelectorAll("[data-mode]").forEach(S=>S.setAttribute("aria-pressed",String(S===R)))},v.append(R)}const T=document.createElement("button");T.textContent="☂ 下雨",T.setAttribute("aria-pressed",String(s.getRain())),T.onclick=()=>{s.setRain(!s.getRain()),T.setAttribute("aria-pressed",String(s.getRain()))},v.append(T)}else{let y=function(){T.textContent=o()?"Ⅱ 暂停":"▶ 播放",T.setAttribute("aria-pressed",String(o()))};v.innerHTML='<i class="vinyl-mark" aria-hidden="true"></i><button type="button"></button><label>音量 <input type="range" min="0" max="100"></label>';const T=v.querySelector("button");y(),T.onclick=()=>{r(),y()};const C=v.querySelector("input");C.value=u,C.oninput=()=>{u=Number(C.value),a(u/100)}}c.hidden=!1,g(),v.querySelector("button").focus({preventScroll:!0})}return document.addEventListener("keydown",m=>{m.key==="Escape"&&!c.hidden&&d(!0)}),document.addEventListener("pointerdown",m=>{!c.hidden&&!c.contains(m.target)&&d()},!0),{open:_,close:d,position:g}}function Lu(i,e,t,n=0){i.fillStyle="#e8cfaa",i.fillRect(0,0,e,t),i.save(),i.scale(e/800,t/600),i.beginPath(),i.rect(67,54,666,492),i.clip(),i.fillStyle="#aeb6a0",i.fillRect(0,0,800,600),i.fillStyle="#dfc596",i.beginPath(),i.moveTo(58,310),i.bezierCurveTo(70,273,105,276,120,275),i.bezierCurveTo(138,245,168,245,192,252),i.bezierCurveTo(205,218,239,207,262,215),i.bezierCurveTo(286,182,334,182,354,200),i.bezierCurveTo(373,151,416,149,439,160),i.bezierCurveTo(479,101,533,98,565,122),i.bezierCurveTo(598,147,605,160,615,182),i.bezierCurveTo(666,174,700,200,710,216),i.bezierCurveTo(733,197,767,211,793,245),i.lineTo(800,385),i.lineTo(0,385),i.fill();const s=(r,o)=>{i.fillStyle=r,i.beginPath(),o(),i.lineTo(800,600),i.lineTo(0,600),i.closePath(),i.fill()};s("#969b77",()=>{i.moveTo(0,331),i.bezierCurveTo(150,313,206,342,329,397),i.bezierCurveTo(468,427,639,363,800,332)}),s("#657d70",()=>{i.moveTo(0,451),i.bezierCurveTo(191,462,282,430,424,366),i.bezierCurveTo(556,308,693,259,800,294)}),s("#8e9363",()=>{i.moveTo(0,452),i.bezierCurveTo(165,398,265,432,379,472),i.bezierCurveTo(520,433,642,359,800,389)}),s("#73774b",()=>{i.moveTo(0,459),i.bezierCurveTo(206,420,313,452,450,500),i.bezierCurveTo(594,553,710,569,800,565)});for(let r=0;r<16500;r++)i.fillStyle=r%2?"#f7e7b832":"#44392223",i.fillRect(r*127.619%800,r*55.317%600,.7+r%3*.45,1.8);if(n>0){const r=1-n/6;i.translate(65+670*r,485+Math.sin(r*12)*9),i.globalAlpha=Math.min(.8,r*9,(1-r)*9),i.fillStyle="#e8d8ae",i.beginPath(),i.ellipse(0,0,13,4,0,0,Math.PI*2),i.moveTo(-8,0),i.lineTo(-20,-6),i.lineTo(-20,6),i.fill()}i.restore()}const Iu={monitor:"M5 4H19Q21 4 21 6V15Q21 17 19 17H5Q3 17 3 15V6Q3 4 5 4Z M7 21H17 M10 17L9 21 M14 17L15 21",record:"M4 14H20Q22 14 22 16V19H2V16Q2 14 4 14Z M16 14L19 6 M17 6H21 M5 14C5 10 15 10 15 14 M17 17H18",cabinet:"M3 5H21V19H3Z M12 5V19 M9 11V14 M15 11V14 M5 19V21 M19 19V21",art:"M3 4H21V20H3Z M3 16L8 11L12 15L16 10L21 16 M14 8H15",window:"M3 20V9C3 2 21 2 21 9V20Z M3 10H21 M12 10V20",lamp:"M10 11L17 5 M11 18L7 11L10 8 M5 20H17 M13 8C12 4 18 1 21 5L22 8Z M16 11L15 13 M20 11V13",leaf:"M5 20C6 15 10 9 17 6 M9 15C4 15 2 11 3 7C8 7 11 10 9 15Z M11 12C9 6 14 3 21 3C21 9 17 13 11 12Z",mug:"M3 8H16V15Q16 20 10 20Q3 20 3 15Z M16 10H19Q23 10 21 14Q20 16 16 16 M6 3V5 M12 3V5",draft:"M6 3H15L19 7V20H6Z M14 3V8H19 M9 12H16 M9 16H14",idea:"M8 17C8 14 5 13 5 9A7 7 0 0 1 19 9C19 13 16 14 16 17Z M9 21H15 M12 17V10 M10 9L12 11L14 9",bookmark:"M6 3H18V21L12 16L6 21Z M12 7V12 M9.5 9.5H14.5",guestbook:"M5 4H19Q21 4 21 6V20H5Q3 20 3 18V6Q3 4 5 4Z M7 4V20 M11 9H17 M11 13H15",fish:"M3 12C8 6 13 6 17 10L21 7V17L17 14C13 18 8 18 3 12Z M8 11H8.1",pen:"M4 20L5 15L16 4Q18 2 20 4Q22 6 20 8L9 19Z M14 6L18 10 M5 15L9 19",spoon:"M5 20L13 12 M12 9C12 5 16 2 19 4C23 7 18 13 14 13Q11 13 12 9Z",headphones:"M4 14V11A8 8 0 0 1 20 11V14 M4 13H7V20H5Q3 20 3 18V15Q3 13 4 13Z M20 13H17V20H19Q21 20 21 18V15Q21 13 20 13Z",wateringCan:"M8 10H16V19H8Z M8 11C1 11 1 18 8 17 M16 16L21 7 M19 7L23 9 M10 10V7H15",clock:"M21 12A9 9 0 1 1 3 12A9 9 0 1 1 21 12Z M12 6V12L16 14",slipper:"M3 17C3 14 6 12 9 11C12 10 12 5 17 5Q22 5 22 11Q22 16 15 18L5 19Q3 19 3 17Z M10 11Q15 11 17 16",chair:"M6 20L8 14 M17 20L15 14 M6 14H18V11H6Z M8 11V5Q8 3 10 3H14Q16 3 16 5V11"};let al;function Cx(){if(al)return al;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createImageData(i,i);let s=527;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let o=0;o<n.data.length;o+=4){const a=r()<.48;n.data[o]=a?255:99,n.data[o+1]=a?251:75,n.data[o+2]=a?226:44,n.data[o+3]=r()**2*49}t.putImageData(n,0,0);for(let o=0;o<250;o++)t.fillStyle=o%2?"#8b69382c":"#fffbed7d",t.fillRect(r()*i,r()*i,1+r()*2,1);return al=e,e}function Uu(i,e,t=0){const n=new Path2D,s=1+t,r=i-1-t,o=1+t,a=e-2.5-t,c=(o+a)/2,l=4.7+t*.24,h=4.5-t*.4;return n.moveTo(s+h,o),n.lineTo(r-h,o),n.quadraticCurveTo(r,o,r,o+h),n.lineTo(r,a-6),n.lineTo(r-6,a),n.lineTo(s+h,a),n.quadraticCurveTo(s,a,s,a-h),n.lineTo(s,c+l),n.bezierCurveTo(s+l*1.3,c+l,s+l*1.3,c-l,s,c-l),n.lineTo(s,o+h),n.quadraticCurveTo(s,o,s+h,o),n.closePath(),n}function Rx(i,e,t){const n=Math.min(3,Math.max(2,window.devicePixelRatio||1));i.width=e*n,i.height=t*n;const s=i.getContext("2d");s.scale(n,n);const r=Uu(e,t);s.save(),s.translate(0,1.2),s.fillStyle="#b8a477",s.fill(r),s.restore();const o=s.createLinearGradient(0,0,0,t);o.addColorStop(0,"#fbf0d5"),o.addColorStop(.48,"#f2e6c6"),o.addColorStop(1,"#e9dbb7"),s.fillStyle=o,s.fill(r);const a=s.createPattern(Cx(),"repeat");a.setTransform(new DOMMatrix().scale(.58)),s.fillStyle=a,s.fill(r);const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,"#fff8e6"),c.addColorStop(1,"#b9a47d"),s.strokeStyle=c,s.lineWidth=.8,s.stroke(r);const l=Uu(e,t,2.25),h=s.createLinearGradient(0,0,0,t);h.addColorStop(0,"#a58b5b75"),h.addColorStop(.53,"#bda77a45"),h.addColorStop(1,"#fff6df"),s.strokeStyle=h,s.stroke(l)}function Px(i,e){const t=i.getContext("2d");if(t.clearRect(0,0,24,24),t.lineCap=t.lineJoin="round",t.strokeStyle=t.fillStyle="#6d744c",t.lineWidth=1.65,e!=="disc"){t.stroke(new Path2D(Iu[e]??Iu.fish));return}t.beginPath(),t.arc(12,12,10.7,0,Math.PI*2),t.fill(),t.strokeStyle=t.fillStyle="#f4e7c7",t.lineWidth=.62;for(const n of[5.3,6.8,8.3])for(const s of[-1.3,1.84])t.beginPath(),t.arc(12,12,n,s,s+.95),t.stroke();t.beginPath(),t.arc(12,12,2.85,0,Math.PI*2),t.fill(),t.beginPath(),t.fillStyle="#6d744c",t.arc(12,12,.85,0,Math.PI*2),t.fill()}function Dx(i,e=!1){const t=document.createElement("div");t.className="room-object-label",e?t.setAttribute("role","status"):t.setAttribute("aria-hidden","true"),t.innerHTML=`
    <canvas class="room-ticket-paper" aria-hidden="true"></canvas>
    <canvas class="room-ticket-icon" width="72" height="72" aria-hidden="true"></canvas>
    <i class="room-ticket-perforation" aria-hidden="true"></i>
    <span class="room-ticket-text"></span>
  `;const[n,s,,r]=t.children;s.getContext("2d").scale(3,3),i.append(t);let o,a=0;function c(l,h){if(r.textContent!==l){r.textContent=l;const u=t.offsetWidth;u!==a&&(a=u,Rx(n,a,t.offsetHeight))}return h!==o&&(Px(s,h),o=h),a/2}return{element:t,setContent:c}}function Lx(i,e){const{element:t,setContent:n}=Dx(i),s=[],r=new L,o=new Be("#e8ecc0");function a(l){const h={value:0},u=new Map;for(const d of l)d.traverse(g=>{const _=g.material;if(!(!g.isMesh||g.userData.roomHoverIgnore||!_?.visible)&&!(!_.isMeshStandardMaterial&&!_.isMeshBasicMaterial)){if(!u.has(_)){const m=_.clone();m.onBeforeCompile=f=>{_.onBeforeCompile(f),f.uniforms.roomHoverAmount=h,f.uniforms.roomHoverColor={value:o},f.fragmentShader=`uniform float roomHoverAmount;
uniform vec3 roomHoverColor;
`+f.fragmentShader.replace("#include <opaque_fragment>",`
                outgoingLight += roomHoverAmount * roomHoverColor * .14;
                #include <opaque_fragment>
              `)},m.customProgramCacheKey=()=>"room-hover|"+_.customProgramCacheKey(),u.set(_,m)}g.material=u.get(_)}});const p={amount:h};return s.push(p),p}function c(l,h,u){for(const M of s){const x=M===l?.effect?1:0,v=h/(x?.11:.16);M.amount.value=u?tt.clamp(M.amount.value+(x?v:-v),0,1):x}if(t.classList.toggle("is-still",!u),!l){t.classList.remove("is-visible");return}const p=n(l.label(),l.icon);l.anchor.localToWorld(r.copy(l.hitPoint??l.anchorPoint)),r.project(e);const d=i.clientWidth,g=i.clientHeight,_=Math.min(p+8,d/2),m=tt.clamp((r.x+1)*d/2,_,d-_),f=tt.clamp((1-r.y)*g/2-10,40,g-12);t.style.left=m+"px",t.style.top=f+"px",t.classList.toggle("is-visible",Math.abs(r.x)<=1&&Math.abs(r.y)<=1&&r.z<1)}return{register:a,tick:c}}const ea=(i,e,t)=>tt.smoothstep(i,e,t),xt=(i,e,t,n)=>ea(i,e,t)*(1-ea(i,t,n));function Ut(i,e=0,t=2,n=4){const s=Math.max(0,i-e);return Math.sin(s*Math.PI*2*t)*Math.exp(-s*n)*(1-ea(i,.83,1))}const Ix={桌面钢笔:"pen",搅拌匙:"spoon",桌面耳机:"headphones",主机旁的耳机:"sparePhones",墙面海报:"poster",墙上挂钟:"clock",地上的书叠:"books",倚放的黑胶:"leaningRecord",叠放的唱片:"stack",唱片封套:"sleeve",摊开的唱片:"openSleeve",布面拖鞋:"shoe",藤编阅读椅:"chair"};function Ux(){let i=null,e=null;const t=[new L(1,0,0),new L(0,1,0),new L(0,0,1)],n=new Yn;function s(){e&&(e.sheets.forEach(({apply:c})=>c(0)),e=null),i&&(i.reset(),i=null)}function r(c,l,h,u){if(s(),!h)return;e={sheets:[l,...c.filter(g=>g!==l).sort((g,_)=>g.position.distanceToSquared(l.position)-_.position.distanceToSquared(l.position))].map(g=>{if(u){const x=g.geometry.attributes.position,{width:v,height:T}=g.geometry.parameters;return{apply(y){for(let C=0;C<x.count;C++){const R=x.getX(C)/v+.5,S=.5-x.getY(C)/T;x.setZ(C,v*.24*y*S**2*(.3+.7*R))}x.needsUpdate=!0,g.geometry.computeVertexNormals()}}}const _=g.position.clone(),m=g.quaternion.clone(),f=new L(0,g.children[0].geometry.parameters.height/2,0),M=new L;return{apply(x){g.quaternion.copy(m).multiply(n.setFromAxisAngle(t[0],-.16*x)),g.position.copy(_).add(M.copy(f).applyQuaternion(m)).sub(M.copy(f).applyQuaternion(g.quaternion))}}}),started:performance.now()}}function o(c,l,h,u){if(s(),!u){h?.();return}const p=[],g=l(_=>{const m=_.position.clone(),f=_.rotation.clone(),M=_.scale.clone();return p.push(()=>{_.position.copy(m),_.rotation.copy(f),_.scale.copy(M)}),_},_=>p.push(_));i={duration:c,finish:h,apply:g,started:performance.now(),reset:()=>p.forEach(_=>_())}}function a(c,l){if(e){const m=c-e.started;for(const[f,{apply:M}]of e.sheets.entries()){const x=l?tt.clamp((m-f*53)/365,0,1):1;M(Math.sin(x*Math.PI)**2*(1-f*.1))}(!l||m>=365+53*(e.sheets.length-1))&&(e=null)}if(!i)return;const{started:h,duration:u,finish:p,apply:d,reset:g}=i,_=l?Math.min(1,(c-h)/u):1;if(_>=1){s(),p?.();return}g(),d(_)}return{play:o,playPaperGroup:r,stop:s,tick:a}}const Nx={rack:[820,(i,e)=>{const t=i.jewelCases.map(e);return n=>t.forEach((s,r)=>{const o=Ut(n,r*.041,2.8,5.2);s.rotation.z-=o*.14,s.position.y+=Math.max(0,o)*.021})}],headphones:[620,(i,e)=>{const[t,n,s,r]=i.children.map(e),o=e(n.children[0]);return a=>{const c=xt(a,0,.15,.33),l=Ut(a,.14,2.1);o.scale.y*=1-.28*c,n.position.y+=.051*Math.max(0,l)-.012*c,n.rotation.z-=.29*l,s.rotation.z-=.07*l,r.rotation.z-=.09*l,t.rotation.z+=.19*Ut(a,.29,2.2)}}],sparePhones:[520,(i,e)=>{const[t,n]=i.children.map(e);return s=>{t.scale.y*=1-.32*xt(s,0,.23,.67),n.position.x+=.014*xt(s,.1,.42,.76),n.rotation.z+=.08*Ut(s,.35)}}],pen:[470,(i,e)=>(e(i),t=>{const n=Ut(t,0,1.8);i.rotation.z+=.49*n,i.rotation.y+=.11*n,i.position.x+=.018*xt(t,0,.29,.95)})],shoe:[490,(i,e)=>{const t=e(i.children[2]);return n=>{t.scale.y*=1-.3*xt(n,0,.22,.58),t.rotation.x+=.066*Ut(n,.3)}}],art:[650,(i,e)=>(e(i),t=>{const n=.08*Ut(t,0,1.6,2.8);i.position.x+=Math.sin(n)*.39,i.rotation.z+=n})],clock:[440,(i,e)=>{const t=e(i.secondHand);return n=>{t.rotation.z-=.105*(ea(n,.22,.44)+.4*Ut(n,.4,3))}}],leaf:[740,(i,e)=>{const t=e(i.children.find(s=>s.isGroup&&s.children.some(r=>r.isInstancedMesh))),n=t.children.filter(s=>s.isInstancedMesh).map(e);return s=>{t.rotation.z+=.045*Ut(s,0,1.5),n.forEach((r,o)=>r.rotation.x+=.075*Ut(s,.08+o*.047,1.65))}}],books:[550,(i,e)=>{const t=e(i.children.at(-1)),n=e(i.children.at(-2));return s=>{t.position.x+=.083*xt(s,0,.4,.98),t.rotation.y+=.12*Ut(s,0,1.3),n.position.x+=.025*xt(s,.18,.53,1)}}],stack:[620,(i,e)=>{const t=e(i.children.at(-1)),n=e(i.children.at(-2));return s=>{t.rotation.y+=.29*xt(s,0,.53,1),n.position.x+=.031*xt(s,.17,.47,.93)}}],leaningRecord:[610,(i,e)=>{e(i);const t=e(i.children.at(-1));return n=>{i.rotation.z+=.1*Ut(n,0,1.6),t.rotation.y+=.34*xt(n,.06,.44,.96)}}],sleeve:[550,(i,e)=>(e(i),t=>{i.rotation.x+=.16*Ut(t,0,1.6)})],openSleeve:[590,(i,e)=>{const[t,n,s]=i.children.map(e);return r=>{t.position.x-=.086*xt(r,0,.32,.96),n.position.x-=.086*xt(r,0,.32,.96),s.rotation.y+=.39*xt(r,.17,.59,1)}}],chair:[800,(i,e)=>{e(i);const t=e(i.children.find(n=>n.geometry?.type==="PlaneGeometry"));return n=>{i.rotation.x+=.038*Ut(n,0,1.45),t.rotation.x+=.059*Ut(n,.25,1.8)}}],sticker:[520,(i,e)=>(e(i),t=>{const n=Ut(t,0,2.6);i.rotation.y+=.21*n,i.position.z+=.011*Math.abs(n)})]},Fx=3.68,Ox=2.64,si=1024,Er=768;function Nu(){const i=document.createElement("canvas");return i.width=si,i.height=Er,i}function Fu(i,e){const t=new Ht(i);return t.wrapS=t.wrapT=qn,t.anisotropy=8,t.colorSpace=e,t}function zx(i,e,t,n,s,r){i.save(),i.translate(e,t),i.scale(n,n),i.rotate(s),i.lineCap="round",i.strokeStyle="#7c8757",i.lineWidth=1.5,i.beginPath(),i.moveTo(-1,36),i.quadraticCurveTo(-6,14,-2,-23),i.moveTo(-2,17),i.quadraticCurveTo(11,-4,16,-14),i.moveTo(-4,21),i.quadraticCurveTo(-11,8,-19,0),i.stroke();for(const[a,c,l,h]of[[-3,23,-.85,14],[-2,17,.99,12],[-4,12,-.9,10],[7,4,1.1,10],[-12,7,-.85,9],[-3,1,-.85,8]])i.save(),i.translate(a,c),i.rotate(l),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(-7,-h*.62,0,-h),i.quadraticCurveTo(5,-h*.65,0,0),i.fillStyle=r()>.5?"#8d9a62c9":"#6f8258bd",i.fill(),i.strokeStyle="#d4d6a779",i.lineWidth=.7,i.beginPath(),i.moveTo(0,-1),i.quadraticCurveTo(-1,-h*.45,0,-h+2),i.stroke(),i.restore();const o=["#768f9dcb","#829caebd","#8ca7b4c9","#6e8ea5c7"];for(const[a,c,l]of[[-2,-25,7],[16,-15,5.7],[-20,-1,4.7]]){const h=r()*Math.PI;for(let u=0;u<5;u++){const p=h+u*Math.PI*2/5,d=l*(.62+r()*.09);i.fillStyle=o[Math.floor(r()*o.length)],i.beginPath(),i.ellipse(a+Math.cos(p)*d,c+Math.sin(p)*d,l*.59,l*.43,p,0,Math.PI*2),i.fill()}i.fillStyle="#d1c079",i.beginPath(),i.arc(a,c,l*.24,0,Math.PI*2),i.fill()}i.restore()}function Bx(i,e,t,n){i.save(),i.translate(e,t),i.rotate(n),i.strokeStyle="#8b946373",i.lineWidth=1.25,i.beginPath(),i.moveTo(0,11),i.quadraticCurveTo(-1,3,1,-5),i.stroke(),i.fillStyle="#929c6b91",i.beginPath(),i.ellipse(1,-5,2.1,3.8,.22,0,Math.PI*2),i.ellipse(-1,2,1.6,3,-.64,0,Math.PI*2),i.fill(),i.restore()}function kx(){const i=Nu(),e=i.getContext("2d"),t=Nu(),n=t.getContext("2d");let s=30787;const r=()=>(s=s*16807%2147483647,s/2147483647);n.fillStyle="#eee0c1",n.fillRect(0,0,si,Er),e.fillStyle="#808080",e.fillRect(0,0,si,Er);for(let o=0;o<41e3;o++){const a=r()*si,c=r()*Er,l=.45+r()*3.6;n.fillStyle=o%3===0?"#a88a6216":"#fff9e41a",n.fillRect(a,c,l*.54,l),e.fillStyle=o%3===0?"#22222261":"#ededed69",e.fillRect(a,c,l*.57,l)}for(let o=0;o<3250;o++){const a=r()*si,c=r()*Er,l=2+r()*7;e.strokeStyle=o%2?"#d5d5d562":"#44444462",e.lineWidth=.6+r()*.8,e.beginPath(),e.moveTo(a,c),e.quadraticCurveTo(a+2,c+l*.27,a+(r()-.5)*3,c+l),e.stroke()}for(let o=0;o<4;o++)for(let a=0;a<4;a++){const c=128+a*256+(o%2?112:0)+(r()-.5)*29,l=89+o*192+(r()-.5)*24,h=.9+r()*.25,u=(r()-.5)*.28,p=s;for(const d of[-si,0,si])s=p,zx(n,c+d,l,h,u,r);if((o+a)%3!==0){const d=c+82+r()*69,g=l+31+r()*49;for(const _ of[-si,0,si])Bx(n,d+_,g,-u)}}return new vt({map:Fu(t,ct),bumpMap:Fu(i,oi),bumpScale:.009,roughness:.88})}function No(i){const e=i.geometry.attributes.position,t=i.geometry.attributes.uv;for(let n=0;n<e.count;n++)t.setXY(n,(e.getX(n)+i.position.x)/Fx,(e.getY(n)+i.position.y)/Ox);t.needsUpdate=!0}const Ai={left:-4.77,right:3.14,sill:2.44,spring:5,rise:.79,z:-1.86};function Fo(i){const[e,...t]=i,n=new Zn;n.moveTo(...e);for(const s of t)n.lineTo(...s);return n.closePath(),n}function Hx(i,e){const t=new Xt({map:i,toneMapped:!1});return t.onBeforeCompile=n=>{n.uniforms.roomGlint=e,n.fragmentShader=`uniform float roomGlint;
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("void main()",`
      vec3 readView(vec2 uv) {
        vec4 sampleColor = texture2D(map, uv);
        #ifdef DECODE_VIDEO_TEXTURE
          sampleColor = sRGBTransferEOTF(sampleColor);
        #endif
        return sampleColor.rgb;
      }
      void main()
    `),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
      // Each flute bends the background image sideways and catches a bright rim.
      float rib = vMapUv.x * 213.0;
      float flute = sin(rib * 6.2831853);
      vec2 bentUv = vMapUv + vec2(flute * 0.009, flute * 0.005);
      vec3 outside = readView(bentUv) * 0.56;
      outside += readView(bentUv + vec2(0.004, 0.016)) * 0.22;
      outside += readView(bentUv - vec2(0.004, 0.016)) * 0.22;
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
    `)},t}function Vx({root:i,box:e,wood:t,wall:n,texture:s,weather:r}){const{left:o,right:a,sill:c,spring:l,rise:h,z:u}=Ai,p=a-o,d=(o+a)/2,g=21.12,_=.13,m=-1.96,f=Array.from({length:81},(H,j)=>{const Q=j/80;return[o+Q*p,l+4*h*Q*(1-Q)]});No(e(o+11,21,_,(o-11)/2,10.62,m,n,0)),No(e(11-a,21,_,(a+11)/2,10.62,m,n,0)),No(e(p,c-.12,_,d,(c+.12)/2,m,n,0));const M=new Ti(Fo([...f,[a,g],[o,g]])),x=new Fe(M,n);x.position.z=m+_/2,No(x),x.receiveShadow=!0,i.add(x);const v=new nt;v.position.set(d,(c+l)/2,u),i.add(v);const T=(H,j,Q,de,be,Pe,Y)=>e(H,j,Q,de-v.position.x,be-v.position.y,Pe-u,t,Y,v);T(p+.18,.076,.31,d,c-.034,u+.027,.022),T(p,.115,.19,d,l,u,.017),T(p,.071,.17,d,c+.023,u,.012);for(const H of[o,a])T(.11,l-c,.21,H,(c+l)/2,u,.016);T(.069,l-c,.147,d,(c+l)/2,u+.004,.011);const y=new Ui(Fo([...f.map(([H,j])=>[H,j-.032]),...f.slice().reverse().map(([H,j])=>[H,j+.037])]),{depth:.16,bevelEnabled:!0,bevelSize:.023,bevelThickness:.018,bevelSegments:3}),C=y.attributes.uv;for(let H=0;H<C.count;H++)C.setXY(H,(C.getX(H)+5)/p,C.getY(H));const R=new Fe(y,t);R.position.set(-v.position.x,-v.position.y,-.077),R.castShadow=R.receiveShadow=!0,v.add(R);const S=Pu.clearHeight/Pu.height,E=new Xt({map:s,toneMapped:!1});E.onBeforeCompile=H=>{H.uniforms.windowRain=r.rain,H.uniforms.windowRainTime=r.time,H.fragmentShader=`uniform float windowRain; uniform float windowRainTime;
`+H.fragmentShader,H.fragmentShader=H.fragmentShader.replace("#include <map_fragment>",`
      #include <map_fragment>
      if (windowRain > 0.5) {
        vec2 uv = vec2(vMapUv.x * 76.0, vMapUv.y * 5.8);
        uv.x -= uv.y * .82;
        float column = floor(uv.x);
        float offset = fract(sin(column * 78.233) * 43758.5453);
        float drop = fract(uv.y + windowRainTime * (0.47 + offset * .43) + offset * 4.0);
        float streak = (1.0 - smoothstep(.010, .082, abs(fract(uv.x) - .5)))
                       * (1.0 - smoothstep(.0, .13, drop));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.16, .23, .30), .21);
        diffuseColor.rgb += vec3(.42, .56, .69) * streak * (.13 + .17 * offset);
      }
    `)};const D=new Fe(new Pt(p,l-c),E),F=D.geometry.attributes.uv;for(let H=0;H<F.count;H++)F.setY(H,F.getY(H)*S);D.position.set(d,(c+l)/2,-2.02),D.userData.skipContactShadows=!0,i.add(D);const V=new Ti(Fo(f)),k=V.attributes.uv;for(let H=0;H<k.count;H++)k.setXY(H,(k.getX(H)-o)/p,S+(1-S)*(k.getY(H)-l)/h);const q={value:0},W=new Fe(V,Hx(s,q));W.position.z=-2.02,W.userData.skipContactShadows=!0,i.add(W);const G=new Fe(V,new Cm({color:"#182d28",opacity:.24,depthWrite:!1}));G.position.z=-1.988,G.receiveShadow=!0,G.raycast=()=>{},G.userData.skipContactShadows=!0,i.add(G);const z=new Fe(new Ti(Fo([[o,c],[a,c],...f.slice().reverse()])),new Xt({visible:!1}));z.geometry.translate(-d,-(c+l)/2,0),z.position.set(d,(c+l)/2,-1.985),i.add(z);function K(H){for(const j of[E,W.material]){const Q=!!j.map.isVideoTexture!=!!H.isVideoTexture;j.map=H,Q&&(j.needsUpdate=!0)}}return{hit:z,frame:v,glint:q,setTexture:K}}function Gx(i,e,t){const{sill:n,z:s}=Ai,r=e.position.clone(),o=e.quaternion.clone(),a=new Yn().setFromAxisAngle(new L(0,0,1),-.75);a.premultiply(o);const c=new L(.275,.205,.008),l=new L,h=new L(0,.48,.02),u=new L,p=new Map(t.map(k=>[k,k.position.clone().add(new L(0,.162*k.scale.y,0))])),d=new Map(t.map(k=>[k,k.children.filter(q=>q.isGroup).map(q=>({leaf:q,angle:q.rotation.x}))]));function g(k,q,W,G){const z=new Xt({color:q,opacity:W,transparent:!0,depthWrite:!1}),K=new Fe(k,z);return K.scale.setScalar(G),K.visible=!1,K.raycast=()=>{},K.userData.skipContactShadows=!0,i.add(K),K}const _=new ui(1,8,6),m=new er(1,28),f=Array.from({length:12},(k,q)=>g(_,q%3?"#c8e6eb":"#edf8f1",.82,.014)),M=g(_,"#e3f4ec",.89,.014),x=new L,v=t.map((k,q)=>{const W=g(m,"#554329",0,1);return W.position.set(k.position.x,n+.007+q*.001,s+.102),W.rotation.x=-Math.PI/2,W}),T=Array.from({length:3},(k,q)=>{const W=g(_,"#785c42",0,1);return W.position.set(t[1].position.x+(q-1)*.12,n-.073,-1.892+q*.001),W});let y=null,C=0,R=-1/0;function S(k,q){if(y)return;const W=performance.now(),G=k===t[1]?[...t].reverse():t;y={now:W,order:G,count:W-R<17e3?Math.min(C+1,3):1,poured:!1},q||E(W)}function E(k){C=y.count,R=k,y.poured=!0}function D(k,q){const W=k-R,G=1-tt.smoothstep(W,8e3,18e3);if(v.forEach((Z,me)=>{Z.visible=G>0,Z.material.opacity=G*(.26+C*.08),Z.scale.set((.16+C*.025)*(me?.85:1),.073+C*.012,1)}),T.forEach((Z,me)=>{const _e=q?tt.clamp((W-220-me*155)/1600,0,1):1;Z.visible=C===3&&_e>0&&G>0,Z.position.y=n-.077-(q?.4:.2)*_e,Z.scale.set(.013,.033+_e*.057,.005),Z.material.opacity=G*.6}),!y)return;const z=q?k-y.now:2440,K=z>=1050,H=p.get(y.order[0]),j=p.get(y.order[1]);u.copy(K?j:H).add(h),u.sub(l.copy(c).multiply(e.scale).applyQuaternion(a)),z<420?e.position.lerpVectors(r,u,tt.smoothstep(z,0,420)):z<1050?e.position.copy(u):z<1340?(u.lerp(l.copy(H).add(h).sub(V()),1-tt.smoothstep(z,1050,1340)),e.position.copy(u)):e.position.lerpVectors(u,r,tt.smoothstep(z,1900,2440));const Q=tt.smoothstep(z,150,420)*(1-tt.smoothstep(z,1820,2370));e.quaternion.copy(o).slerp(a,Q),l.copy(c).multiply(e.scale).applyQuaternion(e.quaternion).add(e.position);const de=K?j:H,be=z>=415&&z<1e3||z>=1340&&z<1850;f.forEach((Z,me)=>{if(Z.visible=be,!be)return;const _e=(z*1.8+me*31)%350/350;Z.position.lerpVectors(l,de,_e),Z.position.y+=.1*Math.sin(_e*Math.PI),Z.position.x+=Math.sin(me*2.1)*_e*.034,Z.scale.set(.012,.023,.012)});const Pe=tt.smoothstep(z,1900,2070),Y=z>=1850&&z<2070;Y||x.copy(l),M.visible=Y,Y&&(M.position.lerpVectors(x,j,Pe),M.scale.set(.012,.02,.012)),y.order.forEach((Z,me)=>{d.get(Z).forEach(({leaf:_e,angle:fe},Ve)=>{const Ye=(me?1480:540)+Ve*9,I=Math.max(0,z-Ye),ne=z>=2440?0:Math.sin(I*.025)*Math.exp(-I/145);_e.rotation.x=fe+.18*ne})}),z>=1820&&!y.poured&&E(k),z>=2440&&(e.position.copy(r),e.quaternion.copy(o),y=null)}const F=new L;function V(){return F.copy(c).multiply(e.scale).applyQuaternion(a)}return{play:S,tick:D}}function Wx({root:i,canvas:e,camera:t,controls:n,box:s,mat:r,wood:o,cream:a,cabinetDoors:c,deskHeight:l,windowView:h,mountedWindow:u,monitor:p,tower:d,powerButton:g,computerCue:_,rack:m,collectionUI:f,setLocked:M,player:x,furniture:v,toggleDay:T,toggleComputer:y,computerLabel:C,toggleRecord:R,isRecordPlaying:S,setVolume:E}){const D=matchMedia("(prefers-reduced-motion: reduce)").matches,F=e.parentElement,V=Lx(F,t),k=Ux(),q=[],W=[!1,!1,!1];let G=null,z=null,K=null,H=0,j=0,Q=null,de=!D;const be=(w,U,O)=>k.play(w,U,O,de),Pe=(w,U,O)=>()=>{const[N,J]=Nx[U];be(N,(ae,oe)=>J(w,ae,oe),O)};function Y(w,U,O,N,{available:J=()=>!0,parts:ae=[w],anchor:oe=w,atHit:pe=!1,movesOnClick:Ee=!1}={}){oe.updateWorldMatrix(!0,!0);const Re=new Nn().setFromObject(oe),Te=oe.worldToLocal(Re.getCenter(new L).setY(Re.max.y)),Xe={object:w,label:typeof U=="function"?U:()=>U,icon:O,action:N,available:J,parts:ae,anchor:oe,anchorPoint:Te,atHit:pe,movesOnClick:Ee,effect:V.register(ae)};return q.push(Xe),Xe}const Z=r("#e4dcc6",.9);r("#727c65",.8);function me(w,U=960,O=440){const N=document.createElement("canvas");N.width=U,N.height=O,w(N.getContext("2d"),U,O);const J=new Ht(N);return J.colorSpace=ct,J}function _e(w,U,O,N,J){w.fillStyle=J,w.beginPath(),w.ellipse(U,O,N,N*.35,0,0,Math.PI*2),w.fill(),w.beginPath(),w.moveTo(U-N*.8,O),w.lineTo(U-N*1.45,O-N*.42),w.lineTo(U-N*1.45,O+N*.42),w.closePath(),w.fill(),w.fillStyle="#f3eddd",w.beginPath(),w.arc(U+N*.55,O-N*.05,N*.055,0,Math.PI*2),w.fill()}const fe=new nt;fe.position.set(4.04,3.86,-1.82),fe.scale.setScalar(.6),i.add(fe),s(1.82,1.4,.08,0,0,0,o,.022,fe),s(1.73,1.31,.016,0,0,.042,r("#956c43",.68),.01,fe);const Ve=me(Lu,800,600),Ye=new vt({map:Ve,roughness:.94}),I=new Fe(new Pt(1.67,1.25),Ye);I.position.z=.054,I.receiveShadow=!0,fe.add(I);let ne=0;function te(w,U=0){if(!ne){Lu(w,800,600,U);return}w.fillStyle="#d9d3bd",w.fillRect(0,0,800,600),w.fillStyle="#2f4e52",w.fillRect(67,54,666,492),w.save(),w.beginPath(),w.rect(67,54,666,492),w.clip(),w.fillStyle="#cabb90",w.beginPath(),w.arc(565,162,36,0,Math.PI*2),w.fill(),w.strokeStyle="#a0ada0",w.lineWidth=2;for(let J=0;J<23;J++){const ae=246+J*15;w.beginPath(),w.moveTo(60,ae),w.bezierCurveTo(231,ae-160,311,ae+113,463,ae-4),w.bezierCurveTo(538,ae-68,632,ae-75,743,ae-28),w.stroke()}U>0&&_e(w,120+555*(1-U/6),428,11,"#e6d5a7"),w.restore()}function se(){te(Ve.image.getContext("2d"),j),Ve.needsUpdate=!0}function ie(){Ze(ne?"夜色等高线":"午后的山景","",()=>{const w=document.createElement("canvas");w.width=800,w.height=600,te(w.getContext("2d")),w.className="life-painting",w.setAttribute("role","img"),w.setAttribute("aria-label",ne?"墨蓝底色上的淡金月亮与山形线条":"奶油色纸面上的墨绿叠山和浅金色云层"),ve.append(w),mt(ne?"换回午后山景":"换成夜色等高线",()=>{ne=1-ne,se(),ie()})})}const Se=Pe(fe,"art",ie);Y(fe,"查看挂画","art",Se);const ue=u.hit,xe=Ax({stage:F,camera:t,windowObject:ue,player:x,windowView:h,toggleRecord:R,isRecordPlaying:S,setVolume:E}),ke=()=>be(630,(w,U)=>{const{glint:O}=u;return U(()=>O.value=0),N=>{O.value=N}},mn);Y(ue,"查看窗外","window",ke,{parts:[u.frame],atHit:!0}),c.forEach(({door:w},U)=>{Y(w,()=>W[U]?"关闭柜门":U===2?"打开右侧柜门":"打开柜门","cabinet",()=>{const O=()=>{W[U]=!W[U]};if(W[U]){k.stop(),O();return}be(155,N=>{const J=N(w.children[1]);return ae=>{J.position.z-=.018*xt(ae,0,.47,1)}},O)},{movesOnClick:!0})});const ze=Pe(m,"rack",f.open),P=Y(m,"打开光盘集","disc",ze);f.setRackAction(ze);const b=()=>xe.open("player");Y(x,"打开唱片机","record",()=>{R(),be(630,()=>()=>{},b)});const X=()=>be(490,(w,U)=>(U(()=>_.screen=0),O=>{_.screen=-.23*xt(O,0,.16,.31)+.55*xt(O,.18,.49,1)}),y),$=()=>be(450,(w,U)=>(w(g),U(()=>_.power=0),O=>{g.position.z-=.012*xt(O,0,.24,.48),_.power=1.8*xt(O,.22,.55,1)}),y),he=()=>be(350,w=>{const U=w(v.shade);return O=>{U.rotation.z-=.23*Ut(O,0,1.35)}},T);Y(p,C,"monitor",X,{atHit:!0}),Y(d,C,"monitor",$,{atHit:!0}),Y(v.lamp,()=>h.isNight()?"切换日间":"切换夜间","lamp",he),Y(v.plant,"窗边藤蔓","leaf",Pe(v.plant,"leaf"),{atHit:!0}),Y(v.mug,"咖啡杯","mug",()=>Ne());const ee=w=>v.props.labels.find(U=>U.label===w).object,Le=[ee("窗台盆栽"),ee("窗台小盆栽")],Me=ee("黄铜浇水壶"),Ie=Gx(v.props.group,Me,Le);function Ne(w){be(w?660:690,(U,O)=>{const{mug:N,liquid:J,ripples:ae}=v;return U(w??N),U(J),O(()=>ae.forEach(oe=>oe.material.opacity=0)),oe=>{w?w.rotation.z+=.23*Ut(oe,0,1.65):N.position.x+=.019*xt(oe,0,.21,.48),J.rotation.z+=.056*Ut(oe,.17,1.68),ae.forEach((pe,Ee)=>{pe.scale.setScalar(.25+.98*Math.max(0,Math.min(1,(oe-.21-Ee*.13)/.52))),pe.material.opacity=.48*xt(oe,.21+Ee*.13,.39+Ee*.13,.78+Ee*.13)})}})}const ge=new Map;v.props.group.traverse(w=>{w.isMesh&&ge.set(w,null)});const Ae=new Map([["手写便签",{label:"手写便签",curl:!0}],["墙上照片",{label:"墙上照片",curl:!1}]]);for(const[w,U]of Ae)U.objects=v.props.labels.filter(O=>O.label===w).map(O=>O.object),U.effect=V.register(U.objects);for(const{object:w,label:U,icon:O}of v.props.labels){w.updateWorldMatrix(!0,!0);const N=new Nn().setFromObject(w),J=w.worldToLocal(N.getCenter(new L).setY(N.max.y)),ae=Ae.get(U),oe=ae?()=>k.playPaperGroup(ae.objects,w,de,ae.curl):w===Me||Le.includes(w)?()=>{k.stop(),Ie.play(w,de)}:U==="搅拌匙"?()=>Ne(w):U==="墙面海报"?()=>k.playPaperGroup([w],w,de,!1):Pe(w,Ix[U]),pe={object:w,label:()=>ae?.label??U,icon:O,action:oe,anchor:w,anchorPoint:J,available:()=>!0,effect:ae?.effect};w.traverse(Ee=>{Ee.isMesh&&ge.set(Ee,pe)})}function Ge(w,U,O,N,J,ae,oe,pe){const Ee=oe===null,Re=Ee?.34:.46,Te=new nt;Te.position.set(w,U,O),i.add(Te),Ee&&(Te.rotation.y=.18);const Xe=r(ae,Ee?.86:void 0);s(.65,.012,Re,0,-.039,0,Xe,.006,Te),s(.035,.082,Re,-.306,0,0,Xe,.014,Te),s(.6,.052,Re-.03,.01,-.004,.005,Z,.006,Te);const et=new nt;et.position.set(-.302,.039,0),Te.add(et),s(.628,.012,Re,.312,0,0,Xe,.006,et);const gt=Array.from({length:3},(qe,Ct)=>{const jt=new nt;return jt.position.set(-.288,.024+Ct*.003,0),Te.add(jt),s(.585,.002,Re-.026,.296,0,0,Z,7e-4,jt),jt}),ot=N==="灵感"?["#879b78","#bc9a68","#84a6a7"].map((qe,Ct)=>s(.05,.003,.044,.271,.032,(Ct-1)*.092,r(qe,.91),.001,Te)):[],at=me((qe,Ct,jt)=>{Ee?(qe.fillStyle="#e9d6ab",qe.beginPath(),qe.roundRect(105,93,302,174,9),qe.fill(),qe.strokeStyle="#8b694a",qe.lineWidth=2,qe.strokeRect(117,105,278,150)):(qe.strokeStyle="#293a3170",qe.lineWidth=2,qe.strokeRect(16,16,Ct-32,jt-32)),qe.fillStyle=Ee?"#533e2d":"#293a31",qe.font=Ee?'600 64px "Microsoft YaHei"':'48px "Microsoft YaHei"',qe.textAlign="center",qe.fillText(N,Ct/2,jt/2+16)},512,360),He=new Fe(new Pt(.6,Re-.04),new Xt({map:at,transparent:!0,depthWrite:!1}));He.rotation.x=-Math.PI/2,He.position.set(.302,.008,0),et.add(He);const lt={group:Te,index:oe,title:N,showContent:pe,coverHinge:et,topLeaves:gt,tabs:ot};return lt.target=Y(Te,N,J,()=>ut(lt),{available:()=>Ee||W[oe]}),lt}const Oe=[Ge(-.92,.808,-.38,"草稿","draft","#748b76",0,()=>gn("草稿")),Ge(-.88,.416,-.33,"灵感","idea","#ad8b64",0,()=>gn("灵感")),Ge(.78,.808,-.4,"收藏","bookmark","#7b8b9f",1,()=>gn("收藏")),Ge(-1.66,l+.045,-.25,"访客簿","guestbook","#9c7967",null,fi)],we=me((w,U,O)=>{w.fillStyle="#eee4c7",w.beginPath(),w.ellipse(U/2,O/2,U*.47,O*.43,-.13,0,Math.PI*2),w.fill(),_e(w,U*.52,O*.5,U*.23,"#6c8a77")},256,160),We=new Fe(new Pt(.23,.15),new Xt({map:we,transparent:!0}));We.position.copy(p.localToWorld(new L(-.4,.34,.34))),We.rotation.z=-.18,i.add(We);const B=Pe(We,"sticker",()=>{j=de?6:0});Y(We,"小鱼贴纸","fish",B);const re=document.createElement("dialog");re.className="life-dialog",re.setAttribute("aria-labelledby","life-title"),re.innerHTML='<button class="life-close" aria-label="关闭，回到房间">×</button><h2 id="life-title"></h2><p class="life-description"></p><div class="life-body"></div>',document.body.append(re);const ve=re.querySelector(".life-body");let Ue=null;re.querySelector(".life-close").onclick=De,re.addEventListener("cancel",w=>{w.preventDefault(),De()}),re.addEventListener("click",w=>{if(w.target!==re)return;const U=re.getBoundingClientRect();(w.clientX<U.left||w.clientX>U.right||w.clientY<U.top||w.clientY>U.bottom)&&De()});const ye=re.querySelector("h2"),le=re.querySelector(".life-description");re.addEventListener("close",()=>{re.open||Q||(M(!1),Ue?.focus?.({preventScroll:!0}))});function De(){Q?.state==="shown"&&(Q.state="returning",Q.started=performance.now(),F.inert=!0),re.close()}function Ze(w,U,O){const N=re.open;!N&&!Q&&(Ue=document.activeElement),ye.textContent=w,le.textContent=U,le.hidden=!U,ve.replaceChildren(),O?.(),N||(re.classList.toggle("life-unfold",!!Q),re.classList.toggle("life-still",!de),M(!0),F.inert=!1,re.showModal()),re.scrollTop=0,re.querySelector(".life-close").focus({preventScroll:!0})}function ut(w,U=!1){if(Q)return;k.stop();const O=U&&w.index!==null&&!W[w.index]?.35:0;w.index!==null&&(W[w.index]=!0),re.open||(Ue=document.activeElement);const{group:N}=w;Q={item:w,state:"leaving",started:performance.now(),openDelay:O,start:N.position.clone(),rotation:N.quaternion.clone()},re.open&&re.close(),M(!0),F.inert=!0}function rt(){if(!Q)return;const{item:w,start:U,rotation:O,state:N}=Q,J=innerWidth<=740,ae=(performance.now()-Q.started)/1e3,oe=w.index===null?.95:.9,pe=N==="shown"||!de?1:Math.min(1,ae/(N==="leaving"?oe+Q.openDelay:.52)),Ee=N==="returning"?1-pe:pe,Re=N==="leaving"?Math.max(0,(Ee*(oe+Q.openDelay)-Q.openDelay)/oe):Ee,Te=de?xt(Re,.07,.37,.84):0;w.coverHinge.rotation.z=Te*(w.index===null?.28:.16),w.topLeaves.forEach((Bt,Zt)=>{Bt.rotation.z=(w.title==="收藏"?.095:.069)*xt(Re,.13+Zt*.054,.43+Zt*.054,.82+Zt*.04),Bt.position.z=w.title==="草稿"?.029*xt(Re,.05+Zt*.03,.31+Zt*.046,.74+Zt*.05):0}),w.tabs.forEach((Bt,Zt)=>{Bt.position.x=.271+.064*xt(Re,.07+Zt*.07,.38+Zt*.07,.76+Zt*.07)});const Xe=tt.smoothstep(Re,.27,1),et=tt.smoothstep(Re,0,.27),gt=2.3,ot=2*gt*Math.tan(tt.degToRad(t.getEffectiveFOV()/2)),at=new L((J?0:-.55)*ot*t.aspect/2,(J?.58:.1)*ot/2,-gt).applyQuaternion(t.quaternion).add(t.position),He=t.quaternion.clone().multiply(new Yn().setFromAxisAngle(new L(1,0,0),Math.PI/2)),lt=U.clone();lt.z+=et*(w.index===null?.34:1.2);const qe=tt.smoothstep(Re,w.index===null?.17:.07,.35);lt.y+=qe*(w.index===null?.27:.12),w.group.position.lerpVectors(lt,at,Xe),w.group.position.y+=Math.sin(Xe*Math.PI)*.28,w.group.quaternion.copy(O).slerp(He,Xe);const Ct=w.title==="访客簿"?-.17:w.title==="灵感"?.12:-.07;w.group.rotateZ(Ct*Math.sin(Xe*Math.PI));const jt=ot*(J?.19:.27)/.65;w.group.scale.setScalar(tt.lerp(1,jt,Xe)),pe===1&&N==="leaving"?(Q.state="shown",w.showContent()):pe===1&&N==="returning"&&(Q=null,F.inert=!1,M(!1),Ue?.focus?.({preventScroll:!0}))}function mt(w,U,O=ve){const N=document.createElement("button");return N.textContent=w,N.onclick=U,O.append(N),N}function mn(){xe.open("window")}function cr(w){const U=document.createElement("nav");U.className="book-tabs",U.setAttribute("aria-label","柜内手册"),ve.append(U);for(const O of["草稿","灵感","收藏","访客簿"])mt(O,()=>O==="访客簿"?fi():gn(O),U).setAttribute("aria-pressed",String(O===w))}function gn(w){Ze(w,w==="草稿"?"小鱼的形状练习 · 两页示例":w==="灵感"?"取自房间的三种颜色":"留给以后收录的票根和旧物。",()=>{cr(w);const U=document.createElement("div");if(U.className="life-sketch",ve.append(U),w==="草稿"){let O=0;const N=document.createElement("canvas");N.width=760,N.height=380,U.append(N);const J=document.createElement("p");U.append(J);const ae=()=>{const oe=N.getContext("2d");oe.fillStyle="#e9e2cf",oe.fillRect(0,0,760,380),oe.strokeStyle="#738371",oe.lineWidth=2;for(let pe=0;pe<5;pe++)oe.beginPath(),oe.ellipse(130+pe*125,160+Math.sin(pe)*35,50,20+O*8,-.2,0,Math.PI*2),oe.stroke();if(O)for(let pe=0;pe<5;pe++)_e(oe,130+pe*125,160+Math.sin(pe)*35,40,"#829782");J.textContent=O?"形状慢慢变成了小鱼。示意页，等待真实创作替换。":"从几条随手画的弧线开始。示意草稿，并非个人作品档案。"};ae(),mt("翻一页",()=>{O=1-O,ae()})}else if(w==="灵感")for(const[O,N]of[["柜门","#8d9d84"],["纸页","#d5c9ad"],["水面","#7d9b9b"]]){const J=document.createElement("span");J.className="life-swatch",J.style.background=N,J.textContent=O+" "+N,U.append(J)}else U.textContent="收藏暂为空。";mt("放回柜子",De)})}let bn=[];try{const w=JSON.parse(localStorage.getItem("doish-guestbook-v1")||"[]");Array.isArray(w)&&(bn=w.filter(U=>U&&typeof U.note=="string"&&typeof U.stamp=="string"&&typeof U.date=="string").slice(-30))}catch{}function fi(){Ze("访客簿","留言保存在当前浏览器。",()=>{cr("访客簿");const w=document.createElement("form");w.className="life-guestform",ve.append(w);const U=document.createElement("div");U.className="life-options",w.append(U);let O="小鱼";for(const Ee of["小鱼","一片叶子","一杯茶"]){const Re=mt(Ee,()=>{O=Ee,U.querySelectorAll("button").forEach(Te=>Te.setAttribute("aria-pressed",String(Te===Re)))},U);Re.type="button",Re.setAttribute("aria-pressed",String(Ee===O))}const N=document.createElement("label");N.textContent="留一句话（可选，最多 80 字）",w.append(N);const J=document.createElement("textarea");J.maxLength=80,J.rows=2,J.placeholder="今天也来这里坐了一会儿。",J.setAttribute("aria-label","访客簿留言"),N.append(J);const ae=mt("盖章，留下这次停留",()=>{},w);ae.type="submit";const oe=document.createElement("p");oe.setAttribute("role","status"),w.append(oe),w.onsubmit=Ee=>{Ee.preventDefault();const Re={stamp:O,note:J.value.trim().slice(0,80),date:new Date().toLocaleString("zh-CN")},Te=[...bn,Re].slice(-30);try{localStorage.setItem("doish-guestbook-v1",JSON.stringify(Te)),bn=Te,fi(),ve.querySelector("[role=status]").textContent="已盖章，保存在这个浏览器里。"}catch{oe.textContent="浏览器暂时无法保存，请允许本地存储后再试。"}};const pe=document.createElement("div");pe.className="life-entries",ve.append(pe);for(const Ee of[...bn].reverse()){const Re=document.createElement("article"),Te=document.createElement("strong"),Xe=document.createElement("p"),et=document.createElement("small");Te.textContent=Ee.stamp,Xe.textContent=Ee.note||"来这里坐了一会儿。",et.textContent=Ee.date,Re.append(Te,Xe,et),pe.append(Re)}if(!bn.length){const Ee=document.createElement("p");Ee.textContent="本子还是空白的，第一枚章留给你。",pe.append(Ee)}bn.length&&mt("清空这个浏览器的记录",()=>{Ze("清空本地访客簿？","只会删除这个浏览器里的记录，清空后无法恢复。",()=>{mt("保留记录",fi),mt("确认清空",()=>{try{localStorage.removeItem("doish-guestbook-v1"),bn=[],fi()}catch{le.textContent="暂时无法清空记录。"}})})})})}const Hi=document.createElement("button");Hi.className="life-explore",Hi.textContent="逛逛房间",Hi.onclick=()=>Ze("逛逛房间","",()=>{mt("打开电脑",()=>{De(),X()}),mt(h.isNight()?"台灯 · 回到日间":"台灯 · 切到夜间",()=>{De(),he()}),mt("窗边 · 推窗与晴雨",()=>{De(),ke()}),mt("打开唱片机",()=>{De(),b()}),Oe.forEach(w=>mt(w.title,()=>ut(w,!0))),mt("找找小鱼贴纸",()=>{De(),B()}),mt("看看墙上的画",()=>{De(),Se()})}),document.querySelector("#room-settings").append(Hi);const vs=document.querySelector("#room-shortcuts");for(const[w,U]of[["光盘架",ze],["电脑",X],["窗边",ke],["唱机",b],["柜内",()=>ut(Oe[0],!0)]])mt(w,()=>{document.querySelector("#room-menu-toggle").click(),U()},vs);document.querySelector("#room-menu-toggle").addEventListener("click",()=>xe.close());const hr=new Wd,Vi=new ce;let En=null,wn=null,ur=0,Gi=!1;function $r(w){if(!n.enabled)return null;const U=e.getBoundingClientRect();Vi.set((w.clientX-U.left)/U.width*2-1,1-(w.clientY-U.top)/U.height*2),hr.setFromCamera(Vi,t);for(const O of hr.intersectObjects(i.children,!0)){const N=O.object;let J=!0;for(let oe=N;oe;oe=oe.parent)if(!oe.visible){J=!1;break}if(!J)continue;if(ge.has(N)){const oe=ge.get(N);if(oe)return oe;continue}const ae=q.find(oe=>oe.available()&&(N===oe.object||oe.parts.some(pe=>Sa(pe,N))));if(ae)return ae.atHit&&ae!==G&&(ae.hitPoint=ae.anchor.worldToLocal(O.point)),ae;if(N.material?.visible!==!1&&!N.material?.transparent&&!N.userData.skipContactShadows)break}return null}function Sa(w,U){for(let O=U;O;O=O.parent)if(O===w)return!0;return!1}function Jr(){G=null,z=null,wn=null,Gi=!1,e.style.cursor=""}function Qr(w){G=w&&!En?$r(w):null,e.style.cursor=G?.action?"pointer":""}e.addEventListener("pointerdown",w=>{En={x:w.clientX,y:w.clientY}}),e.addEventListener("pointerup",w=>{const U=En&&Math.hypot(w.clientX-En.x,w.clientY-En.y)<6;En=null,wn=w.pointerType==="touch"?null:w,Gi=!1;const O=U||wn?$r(w):null;G=wn&&!(U&&O?.movesOnClick)?O:null,U&&O?.action&&(z=O,H=performance.now()+700,O.action()),e.style.cursor=n.enabled&&G?.action?"pointer":""}),e.addEventListener("pointercancel",()=>{En=null,Jr()}),e.addEventListener("pointermove",w=>{z=null,wn=w.pointerType==="touch"?null:w,Gi=!0}),e.addEventListener("pointerleave",Jr);let A=0;return{hovered:w=>n.enabled&&K?.object===w,tick(w,U){xe.position(),de=U&&!D;const O=performance.now();k.tick(O,de),Ie.tick(O,de),O>=H&&(z=null);let N=!1;c.forEach(({hinge:J},ae)=>{const oe=W[ae]?-1.95:0;if(J.rotation.y===oe)return;N=!0;const pe=tt.damp(J.rotation.y,oe,7,w);J.rotation.y=de&&Math.abs(pe-oe)>.006?pe:oe,J.updateWorldMatrix(!0,!0)}),Gi?(Gi=!1,Qr(wn),ur=O+60):n.enabled&&wn&&!En&&!z&&N&&O>=ur&&(Qr(wn),ur=O+60),rt(),K=n.enabled?(G?.available()?G:null)??z??(f.rackHasFocus()?P:null):Q?.state==="leaving"&&O-Q.started<550?Q.item.target:null,V.tick(K,w,de),j>0&&(j=Math.max(0,j-w),de&&(++A%4===0||j===0)&&se())}}}function Xx(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new yt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let p=0;p<i.length;++p){const d=i[p].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[p].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Ou(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<u;++p){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][p]);const g=Ou(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Ou(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new cn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<t;g++){const _=h.getComponent(p,g);a.setComponent(p+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const zu=[[[0,0],[-.18,.05],[-.32,.21],[-.34,.43],[-.26,.66],[-.11,.87],[.035,1],[.17,.78],[.31,.57],[.34,.36],[.25,.15]],[[0,0],[-.25,.065],[-.34,.28],[-.31,.55],[-.23,.72],[-.12,.86],[-.04,1],[.14,.88],[.26,.69],[.29,.48],[.24,.22],[.13,.06]],[[0,.05],[-.16,.01],[-.31,.12],[-.39,.33],[-.32,.6],[-.16,.83],[.03,1],[.22,.8],[.35,.57],[.36,.32],[.29,.13],[.16,.04]],[[0,0],[-.15,.09],[-.23,.34],[-.22,.6],[-.14,.83],[-.02,1],[.11,.82],[.2,.62],[.23,.38],[.16,.15]]],Bu=[[[0,.05],[-.2,.015],[-.34,.1],[-.43,.21],[-.345,.29],[-.31,.36],[-.46,.47],[-.58,.65],[-.38,.635],[-.23,.55],[-.13,.62],[-.09,.79],[.035,1],[.17,.78],[.23,.6],[.3,.565],[.43,.65],[.6,.67],[.5,.48],[.33,.37],[.37,.29],[.46,.18],[.28,.075],[.14,.025]],[[0,0],[-.16,.025],[-.32,.16],[-.39,.33],[-.54,.59],[-.39,.57],[-.27,.51],[-.16,.56],[-.14,.73],[-.035,1],[.13,.81],[.19,.63],[.24,.55],[.38,.6],[.54,.72],[.5,.49],[.39,.31],[.29,.16],[.15,.06]],[[0,.065],[-.15,.045],[-.34,.1],[-.49,.245],[-.36,.28],[-.35,.39],[-.57,.57],[-.61,.73],[-.38,.65],[-.23,.56],[-.15,.62],[0,1],[.17,.79],[.22,.6],[.31,.57],[.46,.63],[.58,.61],[.47,.44],[.32,.35],[.35,.27],[.43,.16],[.23,.08]]];function qx(i,e,t){const n=i.map(([g,_])=>new ce(g,_)),r=new rs(n.map(({x:g,y:_})=>new L(g,_,0)),!0,"centripetal").getPoints(e?54:24).slice(0,-1),o=.37,a=(g,_,m)=>{const f=Math.exp(-Math.abs(g)*(e?4.2:7))*Math.sin(Math.PI*_)*.083,M=(.14-t*.06)*_**3,x=g*(.25+t*.08)*Math.sin(4.1*_+t),v=Math.sin(_*21+g*13+t*.9)*.021*m**4;return f+M-g*g*.36+x+v},c=[0,o,a(0,o,0)],l=[.5,o],h=[],u=r.length,p=e?[.17,.38,.61,.82,1]:[.26,.54,.79,1];for(const g of p)for(const _ of r){const m=_.x*g,f=o+(_.y-o)*g;c.push(m,f,a(m,f,g)),l.push(m/1.38+.5,f)}for(let g=0;g<u;g++){const _=g+1,m=(g+1)%u+1;h.push(0,m,_);for(let f=0;f<p.length-1;f++){const M=f*u,x=M+u;h.push(M+_,M+m,x+m,M+_,x+m,x+_)}}const d=new yt;return d.setAttribute("position",new Ke(c,3)),d.setAttribute("uv",new Ke(l,2)),d.setIndex(h),d.computeVertexNormals(),d}function Yx(i,e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.scale(2,2);const s=n.createLinearGradient(21,23,119,113);s.addColorStop(0,"#9fa982"),s.addColorStop(.39,"#d6dfbb"),s.addColorStop(.66,"#c3d1ae"),s.addColorStop(1,"#9eac88"),n.fillStyle=s,n.fillRect(0,0,128,128);for(let c=0;c<5600;c++)n.fillStyle=c%3?"#e9f7ca22":"#52613116",n.fillRect(e()*128,e()*128,.14+e()*1.36,.23+e()*.8);const r=(c,l,h,u,p,d)=>{n.beginPath(),n.moveTo(c,l),n.bezierCurveTo(c*.7+h*.3,l-1,h*.85+c*.15,u+7,h,u),n.lineWidth=p,n.lineCap="round",n.strokeStyle=d,n.stroke()},o=n.createLinearGradient(0,126,0,2);o.addColorStop(0,"#fff5bc"),o.addColorStop(.7,"#fff9cfe9"),o.addColorStop(1,"#fffce300"),r(64,125,65,2,i?2.3:1.65,o);for(const c of[-1,1]){for(let l=0;l<7;l++){const h=112-l*13+(e()-.5)*7,u=64+c*((i?44:33)*Math.sin(Math.PI*(l+1)/9));r(64,h,u,h-18-e()*7,.72,"#fcffe2b8"),r(64+(u-64)*.59,h-7,u+c*2,h+1,.32,"#feffdfa0")}i&&(r(64,121,64+c*53,43,1.85,"#fff5cde6"),r(64,121,64+c*38,101,1.2,"#fff3bebc"),r(64+c*26,84,64+c*27,63,.63,"#f9feda95"))}const a=new Ht(t);return a.colorSpace=ct,a.anisotropy=4,a}function jx(i,e){const t=new pn({map:Yx(i,e),roughness:i?.57:.74,clearcoat:i?.21:.07,clearcoatRoughness:.52,side:Mt});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",Je.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );",`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
        float leafBacklight = max( dot( -geometryNormal, directLight.direction ), 0.0 );
        float leafScatter = leafBacklight * 0.26 + (1.0 - abs(dotNL)) * 0.045;
        reflectedLight.directDiffuse += directLight.color * leafScatter *
          BRDF_Lambert( material.diffuseColor * vec3( 1.17, 1.02, 0.59 ) );`))},t}function Zx(i){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#ae6039",t.fillRect(0,0,256,256);for(let s=0;s<5800;s++){t.fillStyle=s%3?"#f9c79a30":"#66381d31";const r=.5+i()*(s%17===0?6:2);t.fillRect(i()*256,i()*256,r*1.25,r)}const n=new Ht(e);return n.colorSpace=ct,n}function Kx(i){const e=new nt,t=new nt,n=Ai.right+.73,s=-.93;t.position.set(n,.12,s),i.add(e),e.add(t);const r=new jc("#ffdf9d",0,6.2,.49,.76,0);r.position.set(5.47,6.22,1.35),r.target.position.set(3.3,5.28,-1.65),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.35,r.shadow.camera.far=7,r.shadow.normalBias=.009,r.shadow.bias=-3e-4,r.shadow.radius=4,r.shadow.autoUpdate=!1,r.shadow.needsUpdate=!0,e.add(r,r.target);let o=197889;const a=()=>(o=o*16807%2147483647,o/2147483647),c=Zx(a),l=new Fe(new Gr([[0,.013],[.265,.013],[.32,.042],[.375,.11],[.41,.2],[.414,.29],[.404,.357],[.42,.374],[.421,.398],[.407,.413],[.382,.408],[.373,.386],[.374,.344],[.35,.24],[0,.24]].map(([Q,de])=>new ce(Q,de)),64),new vt({map:c,bumpMap:c,bumpScale:.018,roughness:.79}));l.castShadow=l.receiveShadow=!0,t.add(l);const h=new Fe(new Pi(.38,.36,.022,48),new vt({color:"#493624",roughness:1}));h.position.y=.355,h.receiveShadow=!0,t.add(h),fs(i,{x:n,y:.122,z:s,width:.74,depth:.74,radius:.3,spread:.24,opacity:.43});const u=[],p=[],d=[],g=[],_=[],m=[],f=["#465723","#55712a","#637934","#74893b","#5b7536"].map(Q=>new Be(Q)),M=["#8ca337","#a5b641","#b8bc4a","#a9bc56"].map(Q=>new Be(Q)),x=Q=>new L(...Q);function v(Q,de,be=p,Pe=.54){const Y=new rs(Q.map(x)),Z=Math.max(6,Q.length*5),me=new Wr(Y,Z,de,6),_e=me.attributes.position;for(let fe=0;fe<=Z;fe++){const Ve=fe/Z,Ye=Y.getPointAt(Ve),I=1-Ve*Pe;for(let ne=0;ne<=6;ne++){const te=fe*7+ne;_e.setXYZ(te,Ye.x+(_e.getX(te)-Ye.x)*I,Ye.y+(_e.getY(te)-Ye.y)*I,Ye.z+(_e.getZ(te)-Ye.z)*I)}}return be.push(me),Y}function T(Q,de,be,Pe,Y,{start:Z=.04,end:me=.98,ivy:_e=!1,stems:fe}={}){let Ve=0;const Ye=Array.from({length:de},()=>.23+a()**1.25*1.6),I=Ye.reduce((te,se)=>te+se,0),ne=a()*Math.PI*2;for(let te=0;te<de;te++){const se=tt.lerp(Z,me,(Ve+Ye[te]*.5)/I);Ve+=Ye[te];const ie=Q.getPointAt(se),Se=Q.getTangentAt(se),ue=ne+te*2.39996+(a()-.5)*1.1,xe=Math.sin(ue),ke=Math.atan2(Se.y,Se.x)-Math.PI/2+xe*(1.12+a()*1.14),ze=se>.74&&a()<.56||a()<.07,P=tt.lerp(be,Pe,a())*(ze?.79:1),b=P*(_e?.22:.13)*(.6+a()*.9),X=ie.clone().add(new L(-Math.sin(ke)*b,Math.cos(ke)*b,(.2+Math.cos(ue)*.6)*b)),$=ze?M:f,he=$[Math.floor(a()*$.length)].clone().multiplyScalar(.77+a()*.31),ee=(a()-.5)*1.65+Math.cos(ue)*.31,Le=(a()-.5)*1.8;Y.push({anchor:X,theta:ke,size:P,color:he,tilt:ee,twist:Le,shape:Math.floor(a()*(_e?Bu.length:zu.length)),width:.81+a()*.3+(ze?-.09:0)}),fe&&v([ie.toArray(),ie.clone().lerp(X,.52).add(new L(0,-.009,.013)).toArray(),X.toArray()],P*(_e?.022:.021),fe,.4)}}const y=v([[3.72,.46,-.93],[3.57,.83,-1.17],[3.67,1.26,-1.46],[3.53,1.77,-1.7],[3.68,2.3,-1.73],[3.43,2.84,-1.68],[3.38,3.42,-1.66],[3.32,4.13,-1.62],[3.56,4.76,-1.6],[3.43,5.24,-1.62]],.024,u),C=v([[3.84,.46,-.98],[3.82,.87,-1.24],[3.69,1.32,-1.54],[3.97,1.83,-1.71],[4.28,2.38,-1.73],[4.33,2.8,-1.67],[4.16,3.07,-1.66],[3.69,3.19,-1.67]],.017,u);T(y,28,.105,.21,d,{start:.29}),T(C,23,.095,.18,d,{start:.27});const R=v([[3.51,4.64,-1.66],[3.52,5.13,-1.65],[3.33,5.42,-1.63],[3.05,5.52,-1.62],[2.76,5.54,-1.64],[2.53,5.54,-1.67]],.018,u),S=v([[3.54,4.52,-1.63],[3.4,4.02,-1.63],[3.39,3.59,-1.66],[3.46,3.13,-1.64],[3.88,2.98,-1.7]],.011);T(S,23,.087,.19,d);const E=v([[3.63,1.66,-1.64],[3.33,1.94,-1.66],[3.15,2.17,-1.6],[2.89,2.3,-1.59]],.009);T(E,14,.092,.18,d);const D=v([[3.46,5.08,-1.67],[3.73,5.39,-1.66],[4.08,5.52,-1.67],[4.39,5.43,-1.7],[4.55,5.29,-1.71]],.012,u);for(const[Q,de,be,Pe,Y,Z,me]of[[R,.39,.79,36,.4,.29,.2],[R,.38,.57,12,.22,.2,.16],[R,.7,.98,11,.23,.19,.12],[D,.15,.72,26,.38,.26,.18],[D,.73,1,11,.28,.22,.12],[S,.26,.56,13,.21,.23,.12],[S,.72,1,10,.21,.16,.12]])for(let _e=0;_e<Pe;_e++){const fe=Q.getPointAt(tt.lerp(de,be,a())),Ve=_e*2.39996+a()*.82,Ye=Math.cos(Ve)*Y*(.41+a()*.95),I=Math.sin(Ve)*Z*(.41+a()*.95),ne=.045+a()*me,te=v([fe.toArray(),[fe.x+Ye*.32,fe.y+I*.46,fe.z+ne*.45],[fe.x+Ye*.72,fe.y+I*.84,fe.z+ne],[fe.x+Ye,fe.y+I,fe.z+ne*.82]],.004);T(te,5+Math.floor(a()*5),.077,.177,d)}for(const Q of[[[3.43,5.29,-1.56],[3.25,5.46,-1.46],[3.02,5.53,-1.41]],[[3.72,5.49,-1.52],[3.95,5.48,-1.36],[4.23,5.44,-1.33]],[[3.53,4.58,-1.51],[3.6,4.44,-1.28],[3.76,4.27,-1.27]],[[3.43,3.5,-1.61],[3.53,3.35,-1.4],[3.52,3.2,-1.43]],[[4.18,3.05,-1.63],[4.37,2.92,-1.48],[4.42,2.78,-1.46]]]){const de=Q[0][1]>Ai.spring;T(v(Q,.007),4,de?.18:.23,de?.3:.48,g,{ivy:!0,stems:p})}for(const Q of[[[3.29,5.46,-1.59],[3.07,5.51,-1.62],[2.77,5.6,-1.67],[2.59,5.63,-1.68]],[[4.08,5.53,-1.63],[4.37,5.56,-1.64],[4.62,5.6,-1.65]],[[4.35,5.45,-1.65],[4.55,5.52,-1.64],[4.74,5.61,-1.63]],[[3.73,3.04,-1.56],[3.88,3,-1.56],[4.1,3.1,-1.61]]])T(v(Q,.005,p,.74),7,.08,.138,d,{stems:p});const F=new nt;F.position.set(3.05,5.53,-1.59),e.add(F);const V=[],k=v([[0,0,0],[-.38,-.02,.03],[-.77,.03,.06],[-1.17,.13,.045],[-1.47,.19,0],[-1.71,.21,-.035]],.011,V);T(k,19,.078,.13,_,{stems:V}),T(k,7,.13,.23,m,{start:.12,end:.91,ivy:!0,stems:V});const q=v([[-1.08,.11,.05],[-1.27,.2,.075],[-1.44,.24,.06],[-1.56,.27,.02]],.005,V);T(q,9,.064,.115,_);const W=v([[-.58,.01,.05],[-.78,.13,.09],[-.99,.21,.07]],.005,V);T(W,7,.062,.114,_);const G=new vt({color:"#855532",roughness:.93}),z=new vt({color:"#646530",roughness:.86});function K(Q,de,be){const Pe=new Fe(Xx(Q),de);Pe.castShadow=!0,be.add(Pe);for(const Y of Q)Y.dispose()}K(u,G,e),K(p,z,e),K(V,z,F);for(const[Q,de,be,Pe]of[[zu,!1,d,_],[Bu,!0,g,m]]){const Y=jx(de,a),Z=new Rt;Q.forEach((me,_e)=>{const fe=qx(me,de,_e);for(const[Ve,Ye]of[[be,e],[Pe,F]]){const I=Ve.filter(te=>te.shape===_e);if(!I.length)continue;const ne=new Ld(fe,Y,I.length);I.forEach(({anchor:te,theta:se,size:ie,color:Se,tilt:ue,twist:xe,width:ke},ze)=>{Z.position.copy(te),Z.rotation.set(ue,xe,se,"ZXY"),Z.scale.set(ie*ke,ie,ie),Z.updateMatrix(),ne.setMatrixAt(ze,Z.matrix),ne.setColorAt(ze,Se)}),ne.castShadow=ne.receiveShadow=!0,ne.computeBoundingSphere(),Ye.add(ne)}})}let H=0,j=0;return{plant:e,update(Q,de,be,Pe,Y){r.intensity=Y*1.48,r.visible=Y>.02;const Z=H>.002;H=Pe?tt.damp(H,be?1:0,5,Q):0,F.rotation.x=Math.sin(de*2.1)*.025*H,F.rotation.y=Math.cos(de*1.9)*.017*H,j+=Q,(H>.002&&j>.12||Z&&H<=.002)&&(r.shadow.needsUpdate=!0,j=0)}}}const yc=8.56,Sc=3.44,ll=.12,ku={oat:{name:"燕麦双边",base:"#bda47c",edge:"#757751",height:.055,colors:["#8d8b64","#a39770"]},hills:{name:"鼠尾草叠山",base:"#a79371",edge:"#777c54",height:.083,colors:["#919778","#727d52","#586247"]},clay:{name:"陶土格纹",base:"#a27961",edge:"#805c48",height:.067,colors:["#b69471","#98745c","#c5a784"]}};function $x(i){const e=yc/2,t=Sc/2,n=new Zn;if(i==="hills")n.moveTo(-e+.46,-t+.24),n.bezierCurveTo(-e+1.8,-t-.17,-.85,-t+.1,.35,-t+.02),n.bezierCurveTo(1.74,-t-.07,3.48,-t+.04,e-.31,-t+.36),n.bezierCurveTo(e+.17,-t+.62,e-.14,.55,e-.17,1.1),n.bezierCurveTo(e-.22,t+.18,1.87,t+.02,.66,t-.11),n.bezierCurveTo(-1.24,t-.31,-2.9,t+.3,-e+.58,t-.08),n.bezierCurveTo(-e-.09,t-.21,-e-.06,-t+.59,-e+.46,-t+.24);else{const s=i==="oat"?.17:.35;n.moveTo(-e+s,-t),n.lineTo(e-s,-t),n.quadraticCurveTo(e,-t,e,-t+s),n.lineTo(e,t-s),n.quadraticCurveTo(e,t,e-s,t),n.lineTo(-e+s,t),n.quadraticCurveTo(-e,t,-e,t-s),n.lineTo(-e,-t+s),n.quadraticCurveTo(-e,-t,-e+s,-t)}return n.closePath(),n}function Hu(i,e,t,n,s){i.beginPath(),i.moveTo(n+s,n),i.lineTo(e-n-s,n),i.lineTo(e-n-s,n+s),i.lineTo(e-n,n+s),i.lineTo(e-n,t-n-s),i.lineTo(e-n-s,t-n-s),i.lineTo(e-n-s,t-n),i.lineTo(n+s,t-n),i.lineTo(n+s,t-n-s),i.lineTo(n,t-n-s),i.lineTo(n,n+s),i.lineTo(n+s,n+s),i.closePath(),i.stroke()}function Jx(i,e){const t=document.createElement("canvas");t.width=1536,t.height=656;const{width:n,height:s}=t,r=t.getContext("2d");if(r.fillStyle=e.base,r.fillRect(0,0,n,s),i==="oat")r.strokeStyle=e.colors[0],r.lineWidth=19,Hu(r,n,s,32,24),r.strokeStyle=e.colors[1],r.lineWidth=7,Hu(r,n,s,61,22);else if(i==="hills")e.colors.forEach((p,d)=>{const g=125+d*140;r.fillStyle=p,r.beginPath(),r.moveTo(0,g+66),r.bezierCurveTo(n*.2,g-120,n*.36,g+166,n*.55,g+39),r.bezierCurveTo(n*.73,g-104,n*.84,g-65,n,g-14),r.lineTo(n,s),r.lineTo(0,s),r.fill()});else{for(let d=0;d<Math.ceil(s/92);d++)for(let g=0;g<Math.ceil(n/92);g++)r.fillStyle=e.colors[(d*2+g)%e.colors.length],r.globalAlpha=(d+g)%2===0?.57:.31,r.fillRect(g*92,d*92,92,92);r.globalAlpha=1,r.strokeStyle="#775646",r.lineWidth=19,r.strokeRect(27,27,n-54,s-54),r.strokeStyle="#c6a282",r.lineWidth=6,r.strokeRect(45,45,n-90,s-90)}const o=document.createElement("canvas");o.width=n,o.height=s;const a=o.getContext("2d");a.fillStyle="#777",a.fillRect(0,0,n,s);let c=913;const l=i==="oat"?5:7;for(let p=0;p<s;p+=l)for(let d=-(l/2);d<n;d+=l+1){c=c*16807%2147483647;const g=c/2147483647,_=d+p/l%2*l/2,m=p+(g-.5)*2.5;r.fillStyle=g>.52?`rgba(255,235,198,${g*.32})`:`rgba(56,40,24,${(1-g)*.34})`,r.beginPath(),r.ellipse(_,m,l*.47,l*.3,i==="oat"?0:.5,0,Math.PI*2),r.fill(),a.fillStyle=g>.22?"#aaa":"#919191",a.beginPath(),a.ellipse(_,m,l*.44,l*.28,0,0,Math.PI*2),a.fill()}const h=new Ht(t);h.colorSpace=ct,h.anisotropy=8;const u=new Ht(o);return u.anisotropy=8,{color:h,height:u}}function Qx(i){const e=new nt;e.position.set(.04,ll,1.97),i.add(e),fs(i,{x:e.position.x,y:ll+.001,z:e.position.z,width:yc,depth:Sc,radius:.28,spread:.16,opacity:.38});const t=new Map,n=[],s=new Wd(void 0,new L(0,-1,0));let r;function o(h){r.updateWorldMatrix(!0,!1),s.ray.origin.set(h.position.x,1,h.position.z);const u=[];Fe.prototype.raycast.call(r,s,u),h.position.y=u.reduce((p,d)=>Math.max(p,d.point.y),ll)}function a(h){if(!t.has(h)){const u=ku[h],{color:p,height:d}=Jx(h,u),g=new Ui($x(h),{depth:u.height-.022,bevelEnabled:!0,bevelThickness:.013,bevelSize:.031,bevelSegments:3,curveSegments:22}),_=g.attributes.position,m=g.attributes.uv;for(const v of g.groups)if(v.materialIndex===0)for(let T=v.start;T<v.start+v.count;T++)m.setXY(T,_.getX(T)/yc+.5,_.getY(T)/Sc+.5);const f=new pn({map:p,bumpMap:d,bumpScale:h==="oat"?.028:.047,roughness:.94,sheen:1,sheenColor:"#aa9673",sheenRoughness:.76}),M=new vt({color:u.edge,bumpMap:d,bumpScale:.023,roughness:.97}),x=new Fe(g,[f,M]);x.rotation.x=-Math.PI/2,x.position.y=.015,x.castShadow=!0,x.receiveShadow=!0,x.raycast=()=>{},e.add(x),t.set(h,x)}for(const[u,p]of t)p.visible=u===h;r=t.get(h),n.forEach(o)}const c=document.querySelector("#room-rug");let l;try{l=localStorage.getItem("doish-room-rug")}catch{}return c.value=Object.hasOwn(ku,l)?l:"oat",a(c.value),c.addEventListener("change",()=>{a(c.value);try{localStorage.setItem("doish-room-rug",c.value)}catch{}}),h=>{n.push(h),o(h)}}const eM=""+new URL("room-reference-prints-728FMqp9.png",import.meta.url).href,tM=""+new URL("yorushika-thats-why-i-gave-up-on-music-DJDHHoax.jpg",import.meta.url).href,nM={poster:[0,0,72,120],portrait:[74,0,36,45],garden:[113,0,36,45],trees:[151,0,36,45],steps:[189,0,36,45],roof:[227,0,36,45],floor:[114,126,104,56],second:[222,126,29,105],clock:[270,0,72,72],throw:[277,82,77,163]};function iM(){const i={},e=new jh().load(eM,()=>{for(const n of Object.values(i))n.needsUpdate=!0});e.colorSpace=ct;for(const[n,[s,r,o,a]]of Object.entries(nM)){const c=e.clone();c.offset.set((s+.5)/384,1-(r+a-.5)/256),c.repeat.set((o-1)/384,(a-1)/256),c.anisotropy=4,c.minFilter=fn,i[n]=c}const t=new jh().load(tM);return t.colorSpace=ct,t.anisotropy=4,{...i,yorushika:t}}function Nt(i,e,t,n,s=0){const r=new nt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function bt(i,e,t){const n=new Fe(e,t);return n.castShadow=n.receiveShadow=!0,i.add(n),n}function th(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Ht(n);return s.colorSpace=ct,s.anisotropy=4,s}function sf(i,e,t){let n=2837;for(let s=0;s<e*t/7;s++){n=n*16807%2147483647;const r=n%e,o=Math.floor(n/e)%t;i.fillStyle=s%3?"#472c1811":"#fff9dc43",i.fillRect(r,o,1+s%2,1)}}function sM(i,e,t,n,s=0){const r=new Pt(e,t,12,12);r.rotateX(-Math.PI/2);const o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a)/e+.5,l=o.getZ(a)/t+.5;o.setY(a,s*(c*l)**5)}return r.computeVertexNormals(),bt(i,r,new vt({map:n,roughness:.9,side:Mt}))}function rM({root:i,box:e,cylinder:t,mat:n,lineTube:s,deskHeight:r,describe:o}){const a=Nt(i,-.91,r+.03,-.17,.94);o(a,"桌面钢笔","pen"),e(.019,.018,.25,0,0,0,n("#324f48",.4),.008,a),e(.016,.016,.046,0,0,.12,n("#b6a782",.39,.53),.006,a);const c=t(.008,.027,0,0,-.136,n("#938776",.34,.61),a,.001,10);c.rotation.x=Math.PI/2;const l=Nt(i,-1.13,r+.156,-.335,-.18);o(l,"搅拌匙","spoon");const h=n("#afa18b",.29,.68);s([[0,0,0],[-.022,.073,-.006],[-.049,.156,-.018]],.006,h,l);const u=bt(l,new ui(1,20,12),h);u.scale.set(.019,.031,.006),u.position.set(.006,-.024,.004),u.rotation.z=.28;const p=bt(l,new ui(1,16,10),h);p.scale.set(.009,.024,.006),p.position.set(-.051,.158,-.018),p.rotation.z=.32;const d=Nt(i,1.25,r+.02,-.27,.22);o(d,"桌面耳机","headphones");const g=n("#4e3e32",.88),_=n("#a89066",.45,.24);for(const[M,x,v]of[[-.17,-.065,-.23],[.15,.035,.32]]){const T=Nt(d,M,.099,x,v),y=t(.096,.054,0,0,0,g,T,.102,30);y.rotation.x=Math.PI/2;const C=t(.077,.029,0,0,.035,_,T,.083,30);C.rotation.x=Math.PI/2}s([[-.19,.071,-.09],[-.13,.035,-.22],[.05,.031,-.245],[.23,.052,-.14],[.23,.077,.025]],.016,g,d),e(.27,.13,.085,.035,.051,-.219,_,.03,d).rotation.y=-.12;const m=Nt(i,.79,r+1.27,-.895,.13);o(m,"主机旁的耳机","headphones");const f=t(.1,.05,0,0,0,g,m,.096,32);f.rotation.z=Math.PI/2,t(.076,.045,.036,0,0,_,m,.074,32).rotation.z=Math.PI/2,s([[.036,.044,0],[.112,.05,-.065],[.202,.042,-.1],[.273,.012,-.095]],.014,g,m),t(.072,.047,.27,0,-.095,g,m,.068,28).rotation.z=Math.PI/2}function oM({root:i,box:e,mat:t,lineTube:n,window:s,describe:r}){const o=Nt(i,s.left+.4,s.sill+.005,s.z+.015);r(o,"窗台盆栽","leaf"),o.scale.set(1.29,1.2,1.09);const a=t("#9f583c",.79),c=t("#b37156",.71),l=f=>new Gr(f.map(([M,x])=>new ce(M,x)),32);bt(o,l([[0,.008],[.099,.008],[.117,.022],[.112,.037],[0,.037]]),a),bt(o,l([[.065,.035],[.078,.04],[.107,.174],[.096,.174],[.069,.055]]),a),bt(o,l([[.102,.155],[.113,.158],[.114,.184],[.094,.184],[.093,.162]]),c),bt(o,new Pi(.095,.095,.014,24),t("#473921",.98)).position.y=.158;const h=["#72774d","#637a55","#818b60","#566344"].map(f=>t(f,.69)),u=new ui(1,12,8);for(const[f,M,x,v,T]of[[0,9,.186,.22,.93],[1,7,.2,.18,.58],[2,5,.23,.13,.28]])for(let y=0;y<M;y++){const C=Nt(o,0,x,0,y/M*Math.PI*2+f),R=bt(C,u,h[(y+f)%h.length]);R.rotation.x=T,R.position.set(0,Math.cos(T)*v/2,Math.sin(T)*v/2),R.scale.set(.04-f*.004,v/2,.014)}const p=t("#9a855d",.39,.59),d=o.clone();d.position.x=s.left+.91,d.rotation.y=.52,d.scale.set(1.02,.94,.93),i.add(d),r(d,"窗台小盆栽","leaf");const g=new ui(1,12,8);for(const[f,M]of[[1.24,.035],[1.4,.043],[1.49,.025],[1.59,.032],[2.65,.032]]){const x=bt(i,g,t("#a09670",.98));x.position.set(s.left+f,s.sill+.023,s.z+.106),x.scale.set(M,M*.46,M*.78)}const _=Nt(i,s.left+2.17,s.sill+.005,s.z-.012,-.15);r(_,"黄铜浇水壶","wateringCan"),_.scale.set(1.45,2.12,.91),bt(_,l([[0,0],[.105,0],[.114,.012],[.112,.12],[.09,.169],[.064,.175],[.055,.155],[0,.151]]),p),n([[-.09,.08,0],[-.17,.125,0],[-.177,.217,0],[-.104,.249,0],[-.04,.19,0]],.014,p,_);const m=bt(_,new Pi(.013,.025,.237,16),p);m.position.set(.176,.138,.008),m.quaternion.setFromUnitVectors(new L(0,1,0),new L(.84,.55,0).normalize()),e(.034,.037,.043,.275,.205,.008,p,.008,_).rotation.z=-.45}function aM({root:i,box:e,mat:t,prints:n,describe:s,window:r}){const o=t("#d9c9a6",.9),a=t("#aa9261",.93),c=[["poster",r.left-.66,3.59,.81,1.13,.012],["portrait",r.left-.29,3.11,.3,.36,.16],["garden",r.left-.72,2.69,.29,.36,-.12],["trees",4.84,3.31,.28,.36,.04],["steps",4.88,2.93,.28,.35,-.1],["roof",5.18,2.7,.28,.33,.07]];for(const[g,_,m,f,M,x]of c){const v=Nt(i,_,m,g==="portrait"?-1.865:-1.885);s(v,g==="poster"?"墙面海报":"墙上照片","art"),v.rotation.z=x,e(f,M,.012,0,0,0,o,.006,v),bt(v,new Pt(f-.037,M-.048),new vt({map:n[g],roughness:.9})).position.set(0,.009,.008),e(f*.33,.056,.008,-f*.09,M*.475,.011,a,.005,v).rotation.z=.13,g==="poster"&&(e(f*.18,.06,.008,f*.37,-M*.472,.011,a,.005,v).rotation.z=-.33)}const l=th(256,256,(g,_,m)=>{g.fillStyle="#f6dfa0",g.fillRect(0,0,_,m),g.save(),g.scale(_/112,m/112),g.strokeStyle="#766348",g.lineWidth=.92,g.lineCap="round";for(let f=0;f<5;f++)for(let M=15;M<93-f%3*12;M+=8+(f+M)%5){const x=29+f*11;g.beginPath(),g.moveTo(M,x),g.quadraticCurveTo(M+2,x-3-(M+f)%3,M+3,x-1),g.quadraticCurveTo(M+3,x+1,M+6,x-.5),g.stroke()}g.restore(),sf(g,_,m)});for(const[g,_,m,f,M,x]of[[-4.86,2.41,.25,.25,-.08,"#ffffff"],[5.22,3.11,.24,.23,-.02,"#ffffff"],[-1.28,2.02,.23,.25,.04,"#a4b07f"],[-1,2.08,.22,.21,.17,"#e6e3d4"],[-1.14,1.83,.23,.23,-.14,"#ffffff"]]){const v=bt(i,new Pt(m,f,4,6),new vt({map:l,color:x,roughness:.98}));s(v,"手写便签","draft"),v.position.set(g,_,-1.882),v.rotation.z=M}const h=Nt(i,5.02,3.91,-1.86);s(h,"墙上挂钟","clock");const u=bt(h,new Pi(.318,.32,.055,48),t("#615240",.59,.2));u.rotation.x=Math.PI/2;const p=bt(h,new er(.297,48),new vt({map:n.clock,roughness:.65}));p.position.z=.03;const d=Nt(h,0,0,.034);e(.005,.187,.002,0,.089,0,t("#935640",.65),.001,d),d.rotation.z=.45,h.secondHand=d}function lM({root:i,box:e,cylinder:t,mat:n,prints:s,restOnRug:r,describe:o}){const a=n("#cbbc96",.96),c=n("#272822",.4),l=n("#b8885a",.78),h=n("#575441",.9),u=["#6d7864","#907356","#655c53","#98745b","#80866c"].map(y=>n(y,.86)),p=(y,C,R)=>{const S=Nt(i,y,0,C,R);return r(S),S};function d(y,C,R){const S=Nt(y,...R);t(C,.016,0,0,0,c,S,C,56),t(C*.26,.004,0,.009,0,l,S,C*.26,32),t(.011,.004,0,.012,0,h,S,.011,10);const E=n("#454238",.68);for(const D of[.48,.66,.82,.93]){const F=bt(S,new Di(C*D,.0018,4,48),E);F.rotation.x=Math.PI/2,F.position.y=.0085}}function g(y,C,R,S){e(C,R,.018,0,R/2,0,a,.009,y),bt(y,new Pt(C-.016,R-.016),new vt({map:s[S],roughness:.91})).position.set(0,R/2,.01)}const _=p(-4.81,-1.05,-.11);o(_,"地上的书叠","guestbook"),_.scale.y=1.17;for(let y=0;y<6;y++){const C=.041+y%3*.014,R=Nt(_,y*.027,.024+y*.057,-y*.022,y%2?.19:-.14),S=.73-y*.041;e(S,C,.41,0,0,0,u[y%5],.013,R),e(S-.038,C*.53,.39,0,0,.015,a,.006,R),e(S*.61,.011,.008,-.045,0,.212,u[(y+2)%5],.002,R)}const m=p(-3.69,-.51,.84);o(m,"倚放的黑胶","disc"),m.rotation.z=.43,g(m,.59,.78,"second");const f=Nt(m,.03,.432,.036);f.rotation.x=Math.PI/2,d(f,.266,[0,0,0]);const M=p(-3.11,.53,-.18);o(M,"叠放的唱片","disc");for(let y=0;y<5;y++){const C=Nt(M,y*.013,.015+y*.027,-y*.013,.02+y*.026);e(.94,.024,.88,0,0,0,u[y],.009,C),e(.9,.007,.866,0,.009,0,a,.003,C)}d(M,.425,[.036,.151,-.046]);const x=p(2.16,1.89,-.17);o(x,"唱片封套","disc"),x.rotation.x=-.1,g(x,.83,.8,"second");const v=p(2.41,2.03,.044);o(v,"唱片封套","disc"),v.rotation.x=-.13,g(v,.82,.82,"yorushika");const T=p(2.05,2.72,.15);o(T,"摊开的唱片","disc"),e(.91,.022,.68,0,.012,0,a,.007,T),sM(T,.893,.667,s.floor).position.y=.024,d(T,.427,[.66,.016,-.014])}function cM({root:i,mat:e,restOnRug:t,describe:n}){const s=e("#8b795d",.98),r=e("#c0a77b",.98),o=th(64,64,(d,g,_)=>{d.fillStyle="#b6a078",d.fillRect(0,0,g,_);for(let m=0;m<g;m+=3)d.fillStyle=m%2?"#6e613752":"#f2dcc97c",d.fillRect(m,0,1,_);for(let m=0;m<_;m+=4)d.fillStyle="#f6e4c748",d.fillRect(0,m,g,1);sf(d,g,_)}),a=new vt({map:o,roughness:.99}),c=new Zn;c.moveTo(0,-.24),c.bezierCurveTo(.15,-.255,.143,-.15,.114,.12),c.bezierCurveTo(.12,.275,-.109,.278,-.11,.148),c.bezierCurveTo(-.13,-.14,-.14,-.235,0,-.24);const l=new Ui(c,{depth:.023,bevelEnabled:!0,bevelSize:.008,bevelThickness:.006,bevelSegments:2});l.rotateX(Math.PI/2),l.translate(0,.029,0);const h=new Ti(c);h.rotateX(Math.PI/2),h.translate(0,.036,0);const u=new Pt(1,1,18,14),p=u.attributes.position;for(let d=0;d<p.count;d++){const g=p.getX(d)*Math.PI,_=p.getY(d)+.5,m=.12*Math.sin(Math.min(1,_*2.5)*Math.PI/2);p.setXYZ(d,m*Math.sin(g),.035+.112*Math.sin(_*Math.PI/2)*Math.cos(g),-.238+_*.266)}u.computeVertexNormals(),a.side=Mt;for(const[d,g,_]of[[-1.21,2.18,.69],[-.76,1.65,.79]]){const m=Nt(i,d,0,g,_);n(m,"布面拖鞋","slipper"),m.scale.set(1.29,1.19,1.39),bt(m,l,s);const f=r.clone();f.side=Mt,bt(m,h,f),bt(m,u,a),fs(m,{x:0,y:.002,z:0,width:.24,depth:.46,radius:.09,spread:.065,opacity:.37}),t(m)}}function hM({root:i,mat:e,lineTube:t,restOnRug:n,prints:s,describe:r}){const o=Nt(i,.54,0,2.48,.83);r(o,"藤编阅读椅","chair"),o.scale.set(1.45,1.39,1.55);const a=e("#795036",.53),c=e("#a98055",.75),l=th(128,128,(f,M,x)=>{for(let v=4;v<M+x;v+=8)f.strokeStyle=v%16===4?"#be995e":"#917243",f.lineWidth=2.1,f.beginPath(),f.moveTo(v,0),f.lineTo(v-x,x),f.moveTo(v-x,0),f.lineTo(v,x),f.stroke();for(let v=4;v<M;v+=8)f.fillStyle="#c4a275",f.fillRect(v,0,1,x)}),h=new vt({map:l,alphaTest:.4,side:Mt,roughness:.91}),u=(f,M,x,v)=>Array.from({length:33},(T,y)=>{const C=y/32*Math.PI*2,R=x[0]+Math.cos(C)*f,S=Math.sin(C)*M;return v?[R,x[1],x[2]+S]:[R,x[1]+S,x[2]+S*.17]});for(const f of[-1,1])t([[f*.3,.004,-.38],[f*.26,.25,-.29],[f*.25,.51,-.27]],.025,a,o),t([[f*.305,.004,.39],[f*.25,.32,.27],[f*.25,.54,.27],[f*.22,.89,.34],[f*.17,1.07,.36]],.025,a,o),t([[f*.24,.49,-.26],[f*.33,.65,-.27],[f*.34,.67,-.1],[f*.29,.67,.16],[f*.225,.74,.31]],.019,a,o);t(u(.286,.316,[0,.49,0],!0),.026,a,o),t(u(.235,.26,[0,.32,0],!0),.015,c,o);const p=bt(o,new er(1,40),h);p.position.y=.499,p.rotation.x=-Math.PI/2,p.scale.set(.265,.294,1);const d=Nt(o,0,.923,.337);d.rotation.x=.168,t(u(.251,.283,[0,.923,.337],!1),.026,a,o),bt(d,new er(1,40),h).scale.set(.226,.261,1);const _=new Pt(1,1,14,22),m=_.attributes.position;for(let f=0;f<m.count;f++){const M=m.getX(f)+.5,x=m.getY(f)+.5,v=.012*Math.sin(M*Math.PI*8+x*.9),T=x**12;m.setXYZ(f,-.11+M*.395-.035*x,.523+.687*x,.365+.068*Math.sin(Math.PI*x)+v-.115*T)}_.computeVertexNormals(),bt(o,_,new vt({map:s.throw,side:Mt,roughness:.97})),fs(o,{x:0,y:.002,z:.025,width:.58,depth:.72,radius:.16,spread:.18,opacity:.28}),n(o)}function uM(i){const e=new nt,t=[];i.root.add(e);const n={...i,root:e,prints:iM(),describe(s,r,o){t.push({object:s,label:r,icon:o})}};return rM(n),oM(n),aM(n),lM(n),cM(n),hM(n),{group:e,labels:t}}function dM({root:i,box:e,cylinder:t,lineTube:n,mat:s,deskHeight:r,window:o}){const a=s("#68734d",.75);function c(j,Q,de){const be=new Fe(new Gr(j.map(([Pe,Y])=>new ce(Pe,Y)),64),Q);return be.castShadow=!0,be.receiveShadow=!0,de.add(be),be}const l=Qx(i),h=uM({root:i,box:e,cylinder:t,lineTube:n,mat:s,deskHeight:r,window:o,restOnRug:l}),u=Kx(i),p=new nt;p.position.set(-1.98,r,-.79),p.rotation.y=.28,i.add(p);const d=s("#ad9f82",.32,.66),g=s("#bb9452",.29,.45);t(.206,.065,0,.033,0,a,p),t(.203,.011,0,.01,0,s("#393932"),p);const _=[new ce(0,.094),new ce(-.106,.39),new ce(.188,.675)];for(let j=0;j<_.length-1;j++){const Q=_[j],de=_[j+1],be=de.clone().sub(Q);for(const Pe of[-.043,.043]){const Y=e(.037,be.length(),.026,(Q.x+de.x)/2,(Q.y+de.y)/2,Pe,d,.009,p);Y.rotation.z=-Math.atan2(be.x,be.y)}}for(const{x:j,y:Q}of _){const de=t(.044,.116,j,Q,0,d,p);de.rotation.x=Math.PI/2;const be=t(.026,.009,j,Q,.06,g,p);be.rotation.x=Math.PI/2}const m=new nt;m.position.set(.293,.64,0),m.rotation.set(-.28,0,.15),p.add(m);const f=new pn({color:"#d9c7a4",roughness:.29,clearcoat:.43,clearcoatRoughness:.31});c([[.196,.004],[.198,-.001],[.204,-.004],[.21,-.002],[.214,.003],[.215,.01],[.211,.022],[.199,.05],[.182,.075],[.159,.099],[.129,.119],[.092,.132],[.049,.14],[.004,.142]],f,m),c([[.004,.109],[.074,.105],[.119,.091],[.154,.071],[.179,.046],[.191,.022],[.196,.004]],g,m);const M=new Xt({color:"#ffe5a3"}),x=c([[0,.024],[.046,.025],[.071,.032],[.086,.045],[.088,.053]],M,m);x.castShadow=!1,x.userData.roomHoverIgnore=!0,t(.051,.035,0,.148,0,d,m);const v=new jc("#ffbd69",0,3.3,.61,.7,2);v.position.set(.293,.585,0),v.target.position.set(.62,.02,.2),p.add(v,v.target);const T=new Zc("#ffd18a",.12,1.7,2);T.position.set(.3,.53,.02),p.add(T);const y=new nt;y.position.set(-1.13,r,-.31),i.add(y);const C=new pn({color:"#e8d9b9",vertexColors:!0,roughness:.3,clearcoat:.38,clearcoatRoughness:.29}),R=c([[0,.009],[.067,.009],[.071,.002],[.079,.002],[.083,.013],[.092,.025],[.1,.044],[.104,.079],[.105,.087],[.106,.116],[.107,.123],[.11,.167],[.111,.196],[.109,.205],[.104,.21],[.098,.209],[.094,.203],[.093,.193],[.093,.167],[.09,.1],[.082,.056],[.066,.043],[0,.042]],C,y),S=R.geometry.attributes.position,E=new Be("#84946b"),D=new Be(1,1,1),F=[];for(let j=0;j<S.count;j++){const Q=S.getY(j);F.push(...(Q>=.087&&Q<=.116?E:D).toArray())}R.geometry.setAttribute("color",new Ke(F,3));const V=new pn({color:"#3d271a",roughness:.26,clearcoat:.43,clearcoatRoughness:.26}),k=t(.0925,.006,0,.162,0,V,y);k.castShadow=!1;const q=new Di(.065,.00125,5,36),W=Array.from({length:2},()=>{const j=new Fe(q,new Xt({color:"#d9c09b",transparent:!0,opacity:0,depthWrite:!1}));return j.rotation.x=-Math.PI/2,j.position.y=.166,j.raycast=()=>{},y.add(j),j}),G=new pn({color:"#e8d9b9",roughness:.32,clearcoat:.32}),z=new Fe(new Di(.054,.012,10,32),G);z.position.set(.108,.113,0),z.scale.set(.83,1.03,1),z.castShadow=!0,z.receiveShadow=!0,y.add(z);const K=new Be("#cdbb8a"),H=new Be("#fff0bd");return{lamp:p,shade:m,plant:u.plant,mug:y,liquid:k,ripples:W,props:h,update(j,Q,de,be,Pe,Y,Z){const me=be?-.47:-.28;m.rotation.x=Y?tt.damp(m.rotation.x,me,9,j):me,M.color.copy(K).lerp(H,Math.max(de,be?.35:0)),v.intensity=.2+de*4.5,T.intensity=.12+de*.96,u.update(j,Q,Pe,Y,Z)}}}const cl=""+new URL("spring-B01OgPH9.webp",import.meta.url).href,hl=""+new URL("summer-C0oxVU_2.webp",import.meta.url).href,ul=""+new URL("autumn-BYZNcRC1.webp",import.meta.url).href,dl=""+new URL("winter-C4MA2YoZ.webp",import.meta.url).href,fM=[dl,dl,cl,cl,cl,hl,hl,hl,ul,ul,ul,dl],Vu=1.5,pM=.72;function mM(i){const e=i.querySelector(".seasonal-edges");let t=1,n;function s(){const r=Math.max(0,Math.min(1,(Vu-t)/(Vu-pM))),o=r*r*(3-2*r),a=27*r;if(e.style.setProperty("--season-reveal",o),e.style.setProperty("--season-depth",a+"%"),!o)return;const c=fM[new Date().getMonth()];c!==n&&(e.style.setProperty("--season-art",`url("${c}")`),n=c)}return document.addEventListener("visibilitychange",()=>{document.hidden||s()}),r=>{t=r,s()}}const gM='.memory-note,.desktop-gadget,#experience-switcher,.desktop-icons>:not([data-window=resume],[data-window=contact],[data-disc-reader]),.desktop-trash,.quick-launch,#agent-tray,#context-menu,#start-menu .start-apps,#start-menu .start-links>:not([data-open=resume],[data-open=contact],[data-disc-reader]){display:none!important}.desktop-icons{grid-template-columns:repeat(3,88px)}.room-disc-icon{display:grid;place-items:center;width:45px;height:45px;border:1px solid #f4fdff;border-radius:50%;background:conic-gradient(from 34deg,#f5fcff,#c3bce8,#c9f6f2,#8ca4c7,#fff0d7,#ceebfd,#f5fcff);box-shadow:inset 0 0 0 4px #fff5,0 3px 7px #16395a65}.room-disc-icon:after{content:"";width:8px;height:8px;border-radius:50%;background:#477ba0;box-shadow:0 0 0 4px #f4fbffad}#start-btn{display:flex;flex:0 0 auto;align-items:center;gap:7px;width:auto;padding-inline:8px 14px;color:#fff;text-shadow:0 1px 2px #1b405d}#start-menu{width:min(284px,calc(100vw - 10px))}#start-menu .start-grid,#start-menu .start-links{display:block;min-height:0}#exit-room-computer{display:flex;align-items:center;gap:8px;width:calc(100% - 20px);min-height:44px;margin:0 10px 10px;padding:7px 10px;border:1px solid #914b24;border-radius:5px;background:linear-gradient(#fff2dd,#efd0a7);color:#632b16;cursor:pointer;font-weight:700}#exit-room-computer span{font-size:19px}#exit-room-computer small{margin-inline-start:auto;font-size:11px;font-weight:400}#exit-room-computer:hover,#exit-room-computer:focus-visible{background:#fff3da;outline:2px solid #914b24;outline-offset:1px}',Gu="https://hajimi-tomato.github.io/doishshow/";async function _M(i){const e=await fetch(Gu,{signal:i});if(!e.ok)throw new Error("Published desktop unavailable");const t=new DOMParser().parseFromString(await e.text(),"text/html"),n=t.querySelector("#start-menu .start-links");if(!n)throw new Error("Published desktop menu unavailable");const s=t.createElement("base");s.href=Gu,t.head.prepend(s);const r=t.createElement("style");r.textContent=gM,t.head.append(r),t.querySelector("#start-btn").insertAdjacentHTML("beforeend","<b>开始</b>"),t.querySelector(".desktop-icons").insertAdjacentHTML("beforeend",'<button class="desktop-icon" type="button" data-disc-reader><span class="room-disc-icon" aria-hidden="true"></span><span>光盘读取器</span></button>'),n.insertAdjacentHTML("afterbegin",'<button type="button" data-disc-reader>光盘读取器</button>');const o=t.createElement("button");o.id="exit-room-computer",o.type="button",o.innerHTML='<span aria-hidden="true">⏻</span>退出电脑<small>回到房间</small>',n.closest("#start-menu").append(o);const a=t.createElement("script");return a.textContent='document.addEventListener("DOMContentLoaded", () => parent.postMessage("doish-desktop-ready", location.origin === "null" ? "*" : location.origin), { once: true });',t.body.append(a),"<!doctype html>"+t.documentElement.outerHTML}function vM(i,e,t,n){const s=document.createElement("section");s.className="computer-desktop",s.setAttribute("aria-label","doish 的 Windows 桌面"),s.hidden=!0,s.innerHTML=`
    <div class="computer-desktop__connection" tabindex="-1">
      <p role="status" class="computer-desktop__status">正在连接 Windows 桌面…</p>
      <button type="button" hidden>取消加载</button>
    </div>
    <div class="computer-desktop__power-line" aria-hidden="true"></div>
  `,i.append(s);const r=s.querySelector(".computer-desktop__connection"),o=s.querySelector('[role="status"]'),a=r.querySelector("button");let c,l,h=!1;function u(){l?.abort(),s.hidden=!0,c?.remove(),c=null,i.removeAttribute("data-windows-open")}async function p(){if(s.hidden||h)return;h=!0;const g=s.dataset.state==="running";if(c?.contentDocument.querySelector('#start-btn[aria-expanded="true"]')?.click(),g&&t()){s.dataset.state="closing";const _=s.animate([{transform:"none",opacity:1},{transform:"none",opacity:1,offset:.82},{transform:"none",opacity:0}],{duration:560,easing:"linear",fill:"forwards"});await _.finished,_.cancel()}u(),h=!1,e()}a.addEventListener("click",p),r.addEventListener("keydown",g=>{g.key==="Escape"&&p()});async function d(){const g=new AbortController;l=g;const _=setTimeout(()=>{o.classList.remove("computer-desktop__status--quiet"),a.hidden=!1},5e3),m=setTimeout(()=>g.abort(new Error("Desktop load timed out")),18e3);let f;try{const M=await _M(g.signal);g.signal.throwIfAborted(),f=document.createElement("iframe"),f.title="DOISH HOME OS",f.referrerPolicy="no-referrer",f.setAttribute("sandbox","allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox allow-downloads"),await new Promise((y,C)=>{function R(S){S.source!==f.contentWindow||S.origin!==location.origin||S.data!=="doish-desktop-ready"||(window.removeEventListener("message",R),y())}window.addEventListener("message",R,{signal:g.signal}),g.signal.addEventListener("abort",()=>C(g.signal.reason),{once:!0}),f.srcdoc=M,s.prepend(f)}),g.signal.throwIfAborted();const x=f.contentDocument,v=x.querySelector("#exit-room-computer");if(!v)throw new Error("Desktop exit unavailable");v.addEventListener("click",p);for(const y of x.querySelectorAll("[data-disc-reader]"))y.addEventListener("click",()=>{x.querySelector('#start-btn[aria-expanded="true"]')?.click(),n(()=>{c?.focus(),x.querySelector(".desktop-icons [data-disc-reader]")?.focus()})});x.querySelector('a[href="#desktop"]')?.addEventListener("click",y=>{y.preventDefault(),x.querySelector("#desktop .desktop-icon")?.focus()}),c=f,s.dataset.state="running",t()||x.querySelector("#boot-skip")?.click(),c.focus()}catch{if(f?.remove(),h||s.hidden||l!==g)return;s.dataset.state="error",o.textContent="暂时无法加载 Windows 桌面。",o.classList.remove("computer-desktop__status--quiet"),a.textContent="返回房间",a.hidden=!1,a.focus()}finally{clearTimeout(_),clearTimeout(m),l===g&&(l=null)}}return{get isOpen(){return!s.hidden},detachForDisc:u,open(){s.hidden=!1,i.setAttribute("data-windows-open",""),s.dataset.state="loading",o.textContent="正在连接 Windows 桌面…",o.classList.add("computer-desktop__status--quiet"),a.textContent="取消加载",a.hidden=!0,r.focus({preventScroll:!0}),d()}}}function as(i,e,t,n,s=0){const r=new nt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function kr(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Ht(n);return s.colorSpace=ct,s.anisotropy=4,s}function rf(i){const e=kr(128,128,(t,n,s)=>{t.fillStyle="#e4dfd1",t.fillRect(0,0,n,s);for(let r=0;r<n;r+=3)t.fillStyle=r%9?"#5d4c3326":"#5d4c3343",t.fillRect(r,0,1,s);for(let r=0;r<s;r+=3)t.fillStyle=r%9?"#fffaf150":"#40372838",t.fillRect(0,r,n,1)});return new vt({color:i,map:e,bumpMap:e,bumpScale:.006,roughness:.94})}function xM({entry:i,box:e,cylinder:t,mat:n,wood:s}){const r=as(i,-7.36,.12,-1.78,.76),o=kr(384,768,(x,v,T)=>{const y=x.createLinearGradient(0,0,v,T);y.addColorStop(0,"#425044"),y.addColorStop(.58,"#4a5949"),y.addColorStop(1,"#374536"),x.fillStyle=y,x.fillRect(0,0,v,T);let C=9753;const R=()=>(C=C*16807%2147483647,C/2147483647);for(let S=0;S<3600;S++)x.fillStyle=S%3?"#bfb28816":"#121b1330",x.fillRect(R()*v,R()*T,.5+R()*1.4,.6+R()*3);for(let S=0;S<380;S++){const E=S%3?R()*v:v-R()**2*45,D=S%3?T-R()**2*195:R()*T;x.fillStyle=S%4?"#b7a17b40":"#d2b48b65",x.fillRect(E,D,1+R()*7,.45+R()*1.8)}}),a=s.clone();a.color.set("#b6976c");const c=new vt({map:o,bumpMap:o,bumpScale:.006,roughness:.71}),l=n("#354336",.65),h=n("#20291f",.85),u=n("#c49d5f",.34,.64),p=n("#907349",.51,.56),d=1.46,g=5.16;e(.15,g+.18,.16,.012,g/2,-.015,a,.016,r),e(.105,g+.04,.076,-.045,g/2,.068,l,.011,r),e(d+.14,.155,.17,-d/2,g+.073,-.012,a,.014,r),e(d,.085,.078,-d/2,g+.023,.067,l,.01,r),e(d-.035,g-.034,.094,-d/2-.104,g/2,.015,c,.021,r),e(.02,g-.048,.022,-.097,g/2,.044,h,.005,r),e(.115,.49,.029,-.205,2.27,.079,p,.01,r);for(const x of[2.069,2.466]){const v=t(.013,.009,-.205,x,.096,u,r,.013,12);v.rotation.x=Math.PI/2}const _=t(.033,.087,-.205,2.22,.128,u,r,.043,20);_.rotation.x=Math.PI/2;const m=new Fe(new ui(.067,20,12),u);m.scale.z=.81,m.position.set(-.205,2.22,.181),m.castShadow=!0,r.add(m),e(.015,.034,.01,-.205,2.36,.101,h,.005,r);const f=new Fe(new Di(.041,.01,8,26),u);f.position.set(-.64,3.54,.07),r.add(f);const M=t(.032,.012,-.64,3.54,.066,h,r,.032,20);M.rotation.x=Math.PI/2;for(const x of[.52,4.25]){t(.017,.28,-.098,x,.079,p,r,.017,16);for(const v of[-.135,.135])t(.019,.019,-.098,x+v,.079,u,r,.019,16)}}function fl(i,e,t,n){const s=-e/2,r=-t/2;return i.moveTo(s+n,r),i.lineTo(-s-n,r),i.quadraticCurveTo(-s,r,-s,r+n),i.lineTo(-s,-r-n),i.quadraticCurveTo(-s,-r,-s-n,-r),i.lineTo(s+n,-r),i.quadraticCurveTo(s,-r,s,-r-n),i.lineTo(s,r+n),i.quadraticCurveTo(s,r,s+n,r),i}function MM({entry:i,wood:e}){const t=as(i,-6.42,3.1,-1.87),n=e.clone();n.color.set("#be955e"),n.roughness=.45;const s=.86,r=2.64,o=fl(new Zn,s+.112,r+.112,.192);o.holes.push(fl(new mc,s-.026,r-.026,.139));const a=new Fe(new Ui(o,{depth:.044,bevelEnabled:!0,bevelThickness:.016,bevelSize:.015,bevelSegments:3}),n);a.castShadow=a.receiveShadow=!0,t.add(a);const c=kr(160,460,(p,d,g)=>{const _=p.createLinearGradient(0,0,d,g*.83);_.addColorStop(0,"#534b36"),_.addColorStop(.55,"#8b7b58"),_.addColorStop(1,"#a19371"),p.fillStyle=_,p.fillRect(0,0,d,g),p.save(),p.setTransform(1,-.63,.04,1,56,120),p.filter="blur(4px)",p.fillStyle="#fceac0";for(let f=0;f<7;f++){const M=f*43+(f>2?23:0);for(let x=0;x<3;x++)p.fillRect(x*33,M,27,37)}p.restore();const m=p.createLinearGradient(0,0,0,g);m.addColorStop(0,"#d0bda227"),m.addColorStop(.83,"#d0bda200"),m.addColorStop(1,"#cbb18b50"),p.fillStyle=m,p.fillRect(0,0,d,g)}),l=new Ti(fl(new Zn,s,r,.148)),h=l.attributes.uv;for(let p=0;p<h.count;p++)h.setXY(p,h.getX(p)/s+.5,h.getY(p)/r+.5);const u=new Fe(l,new pn({map:c,roughness:.29,metalness:.09,clearcoat:.38,clearcoatRoughness:.18}));u.position.z=.036,t.add(u)}function yM({entry:i,box:e,cylinder:t,mat:n,wood:s}){const r=as(i,-5.37,1.77,-1.875);r.name="Wall-mounted letter holder";const o=s.clone();o.color.set("#c3a076"),o.roughness=.59;const a=o.clone();a.color.set("#a8865c");const c=n("#514235",.72),l=.6;function h(M,x,v,T){const y=new Zn;y.moveTo(0,0),y.lineTo(l,0),y.lineTo(l,M-.04),T?(y.quadraticCurveTo(l,M-.02,l-.062,M-.035),y.quadraticCurveTo(l/2,M+.09,.062,M-.035),y.quadraticCurveTo(0,M-.035,0,M-.078)):(y.bezierCurveTo(.46,M-.01,.44,M-.045,.3,M+.012),y.bezierCurveTo(.196,M+.061,.13,M-.02,0,M-.012)),y.closePath();const C=new Ui(y,{depth:x,bevelEnabled:!0,bevelSize:.007,bevelThickness:.007,bevelSegments:2}),R=C.attributes.uv;for(let E=0;E<R.count;E++)R.setXY(E,R.getX(E)/l,R.getY(E)/M);const S=new Fe(C,o);S.position.set(-l/2,0,v),S.castShadow=S.receiveShadow=!0,r.add(S)}h(.56,.032,0,!0),h(.265,.027,.145,!1),e(l,.045,.164,0,.025,.089,a,.008,r);for(const M of[-.287,.287])e(.033,.334,.143,M,.165,.087,a,.008,r);for(const M of[-.214,.214]){const x=t(.017,.008,M,.492,.041,c,r,.017,14);x.rotation.x=Math.PI/2,e(.021,.003,.004,M,.492,.047,n("#a99575",.48),.001,r)}const u=kr(240,160,(M,x,v)=>{M.fillStyle="#eee1c5",M.fillRect(0,0,x,v),M.save(),M.beginPath(),M.rect(0,0,x,v),M.rect(9,9,x-18,v-18),M.clip("evenodd");for(let T=-v;T<x;T+=20)M.fillStyle=T%40?"#ae624c":"#5f818c",M.beginPath(),M.moveTo(T,0),M.lineTo(T+9,0),M.lineTo(T+v+9,v),M.lineTo(T+v,v),M.fill();M.restore(),M.strokeStyle="#a4937057",M.lineWidth=1,M.beginPath(),M.moveTo(9,18),M.lineTo(x/2,v*.51),M.lineTo(x-9,18),M.stroke(),M.fillStyle="#b49c7960",M.fillRect(x-46,17,25,29)}),p=new vt({map:u,roughness:.96});for(const[M,x,v,T]of[[-.107,.398,.068,.14],[-.073,.318,.12,-.09]])e(.317,.204,.012,M,x,v,p,.005,r).rotation.set(-.11,0,T);const d=kr(192,256,(M,x,v)=>{M.fillStyle="#d8c6a3",M.fillRect(0,0,x,v);for(const T of[10,105]){M.fillStyle="#635645",M.fillRect(T,20,76,9),M.fillRect(T,36,76,2);for(let y=0;y<35;y++)M.fillStyle=y%4?"#6158469a":"#514737c9",M.fillRect(T,47+y*5,70-y*27%21,1.3),M.fillRect(T+57,47+y*5,10+y%4*3,1.1)}}),g=as(r,.166,.447,.075,-.5);g.rotation.z=-.222;const _=new vt({map:d,roughness:.96,side:Mt}),m=new Fe(new Pi(.063,.061,.484,24,1,!0),_);m.castShadow=!0,g.add(m);const f=n("#b4a281",.96);for(const M of[.052,.058,.064]){const x=new Fe(new Di(M,.0022,6,24),f);x.rotation.x=-Math.PI/2,x.position.y=.241,g.add(x)}}function SM({bench:i,box:e,lineTube:t,mat:n}){const s=as(i,.34,.997,-.01,-.1),r=rf("#a08b60"),o=r.clone();o.color.set("#b4a373");const a=n("#8a7953",.91),c=n("#c1ae83",.93),l=n("#806040",.74),h=n("#b4a180",.38,.67);e(1.04,.684,.389,0,.346,0,r,.12,s);for(const x of[-1,1])e(.178,.5,.351,x*.426,.282,.016,r,.065,s),t([[x*.475,.1,.139],[x*.523,.17,.144],[x*.519,.44,.135],[x*.469,.605,.123]],.01,a,s);e(.863,.322,.055,0,.253,.188,r,.024,s);const u=new Pt(1,.52,20,12),p=u.attributes.position;for(let x=0;x<p.count;x++){const v=p.getX(x)*2,T=p.getY(x)/.52+.5,y=v*(.482+.032*Math.sin(T*Math.PI)),C=.341+.38*Math.sin(T*Math.PI*.54)+.076*v*v*(1-T)-.024*v*v*T,R=.226-.371*T**2+.027*(1-v*v)*Math.sin(T*Math.PI);p.setXYZ(x,y,C,R)}u.computeVertexNormals(),o.side=Mt;const d=new Fe(u,o);d.castShadow=d.receiveShadow=!0,s.add(d),t([[-.469,.42,.227],[-.3,.366,.234],[0,.34,.23],[.3,.37,.233],[.469,.42,.227]],.009,a,s),t([[-.451,.431,.23],[-.29,.381,.237],[0,.356,.233],[.29,.381,.237],[.451,.431,.23]],.003,c,s),t([[-.15,.695,-.029],[-.089,.747,-.039],[.086,.745,-.039],[.152,.692,-.026]],.023,l,s);for(const x of[-.255,.26]){e(.072,.281,.024,x,.319,.237,l,.018,s);for(const v of[-.043,.043])e(.013,.089,.013,x+v,.306,.253,h,.006,s);for(const v of[-.045,.045])e(.084,.012,.013,x,.306+v,.253,h,.006,s);e(.008,.057,.015,x,.328,.257,h,.003,s)}const g=new rs([[-.47,.595,.008],[-.575,.433,.071],[-.737,.166,.196],[-.837,.045,.218],[-.744,.025,.248],[-.54,.028,.231],[-.447,.096,.108]].map(x=>new L(...x))),_=new Pt(.066,1,2,32),m=_.attributes.position;for(let x=0;x<m.count;x++){const v=m.getX(x),T=m.getY(x)+.5,y=g.getPoint(T),C=g.getTangent(T),R=new L(C.y,-C.x,0).normalize();y.addScaledVector(R,v),m.setXYZ(x,y.x,y.y,y.z)}_.computeVertexNormals();const f=r.clone();f.color.set("#938258"),f.side=Mt;const M=new Fe(_,f);M.castShadow=!0,s.add(M)}function bM(){const i=new Zn;return i.moveTo(-.072,-.245),i.bezierCurveTo(-.151,-.232,-.164,-.085,-.139,.11),i.bezierCurveTo(-.126,.287,.12,.302,.15,.14),i.bezierCurveTo(.166,.012,.096,-.117,.089,-.207),i.quadraticCurveTo(.071,-.268,-.072,-.245),i}function EM({bench:i,box:e,lineTube:t,mat:n}){const s=n("#e4d4b3",.74),r=n("#9c8b6e",.85),o=rf("#eadabd"),a=n("#6d604b",.99),c=n("#fff0d4",.91),l=new Ui(bM(),{depth:.031,bevelSize:.013,bevelThickness:.01,bevelSegments:2,steps:1});l.rotateX(Math.PI/2);for(const[h,u,p]of[[.26,.037,.19],[.615,.009,.23]]){const d=as(i,h,.367,u,p),g=new Fe(l,s);g.position.y=.045,g.castShadow=g.receiveShadow=!0,d.add(g),e(.27,.126,.299,0,.099,.087,o,.057,d),e(.235,.11,.228,-.006,.095,-.115,o,.05,d),e(.143,.013,.137,-.004,.151,-.122,a,.005,d),t([[-.074,.149,-.02],[-.09,.163,-.119],[-.064,.164,-.21],[.046,.163,-.211],[.08,.159,-.113],[.067,.152,-.029]],.014,o,d),t([[-.137,.051,.002],[-.143,.05,.12],[-.092,.05,.236],[.014,.05,.266],[.113,.05,.216],[.146,.05,.107]],.004,r,d);for(let _=0;_<4;_++){const m=.011+_*.038;t([[-.062,.157,m],[-.003,.17,m+.008],[.063,.156,m+.016]],.006,c,d),t([[-.061,.156,m+.02],[0,.169,m+.011],[.064,.156,m]],.005,c,d)}}}function wM({entry:i,box:e,lineTube:t,mat:n,wood:s}){const r=as(i,5.83,.12,-1.21),o=s.clone();o.color.set("#e4b783");const a=o.clone();a.color.set("#cda06a"),e(2.28,.124,.7,0,.941,0,o,.026,r),e(2.04,.146,.056,0,.833,.258,o,.011,r),e(2.04,.105,.05,0,.853,-.259,o,.009,r);for(const c of[-.976,.976]){for(const l of[-.235,.235])e(.104,.923,.105,c,.463,l,o,.015,r);e(.065,.111,.531,c,.838,0,a,.01,r)}for(const c of[-.235,.235])e(2.037,.075,.066,0,.361,c,o,.01,r);for(let c=0;c<8;c++)e(1.978,.037,.052,0,.366,-.197+c*.056,a,.006,r);fs(r,{x:0,y:.001,z:0,width:2.18,depth:.57,radius:.075,spread:.23,opacity:.48}),SM({bench:r,box:e,lineTube:t,mat:n}),EM({bench:r,box:e,lineTube:t,mat:n})}function TM({root:i,box:e,cylinder:t,lineTube:n,mat:s,wood:r}){const o=new nt;o.name="Campus apartment entryway",i.add(o),xM({entry:o,box:e,cylinder:t,mat:s,wood:r}),MM({entry:o,wood:r}),yM({entry:o,box:e,cylinder:t,mat:s,wood:r}),wM({entry:o,box:e,lineTube:n,mat:s,wood:r})}const hn=document.querySelector("#stage"),Li=document.querySelector("#scene");let Dn=!0;const AM=mM(hn),On=new Dd;On.background=new Be("#f8f0e7").multiplyScalar(1.75);const ht=new ln(41,1,.08,70),Xr=new L(-.21,2.38,-.45),Ln=new L(-.21,4.96,20.85);ht.position.copy(Ln);ht.lookAt(Xr);let Kn;try{Kn=new Av({canvas:Li,antialias:!1,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loading").hidden=!0,document.querySelector("#error").hidden=!1,i}const of=Kn.getContext(),Wu=of.getExtension("WEBGL_debug_renderer_info"),af=Wu&&/swiftshader|llvmpipe|software rasterizer/i.test(of.getParameter(Wu.UNMASKED_RENDERER_WEBGL));let ai=!!af;Kn.shadowMap.enabled=!0;Kn.shadowMap.type=Ac;Kn.toneMapping=Rc;Kn.toneMappingExposure=1;const lf=new xc(Kn),cf=new jv;On.environment=lf.fromScene(cf,.04).texture;cf.dispose();lf.dispose();On.environmentIntensity=.34;const wt=new Nv(ht,Li);wt.target.copy(Xr);wt.enableDamping=!0;wt.dampingFactor=.1;wt.enablePan=!1;wt.minDistance=1.55;wt.maxDistance=26;wt.minPolarAngle=1.438;wt.maxPolarAngle=1.489;wt.minAzimuthAngle=-.037;wt.maxAzimuthAngle=.037;wt.rotateSpeed=.16;wt.update();const jo=new Om("#fff8e8","#b4aa96",1.35);On.add(jo);const Vt=new jc("#ffdda9",4.5,0,.36,.13,0);Vt.position.set(8.2,5.5,4.6);Vt.target.position.set(1.76,1.56,-.97);Vt.castShadow=!0;Vt.shadow.mapSize.setScalar(ai?1024:1536);Vt.shadow.autoUpdate=!1;Vt.shadow.needsUpdate=!0;Vt.shadow.camera.near=.5;Vt.shadow.camera.far=21;Vt.shadow.normalBias=.025;Vt.shadow.bias=-12e-5;Vt.shadow.radius=5;On.add(Vt,Vt.target);const ta=new Hm("#f6f1e2",.68);ta.position.set(-4,3,4);On.add(ta);let pl=13579;function ml(){return pl=pl*16807%2147483647,(pl-1)/2147483646}function CM(){const i=document.createElement("canvas");i.width=i.height=512;const e=i.getContext("2d");e.fillStyle="#e3cbaa",e.fillRect(0,0,512,512);for(let n=0;n<28500;n++){e.fillStyle=n%3===0?"#91735446":"#fff4d948";const s=.35+ml()*1.32;e.fillRect(ml()*512,ml()*512,s,s*.76)}const t=new Ht(i);return t.colorSpace=ct,t.wrapS=t.wrapT=qn,t.repeat.set(4,7),t}const Tt=(i,e=.55,t=0)=>new vt({color:i,roughness:e,metalness:t}),qr=Tt("#dfd4b9",.4),ps=Tt("#e7ddc6",.46),Ni=Tt("#b9ae91",.5),nh=Tt("#222723",.55),Fi=Tt("#bab6a5",.3,.7),ms=Tt("#858359",.42),ha=Tt("#626d4d",.5),Xu=CM(),qu=$d(),RM=kx(),Oi=new pn({map:qu,bumpMap:qu,bumpScale:.011,roughness:.43,clearcoat:.22,clearcoatRoughness:.43}),At=new nt;On.add(At);function je(i,e,t,n,s,r,o,a=.025,c=At){const l=new Fe(a?new Qc(i,e,t,a<.012?1:3,Math.min(a,i/2.01,e/2.01,t/2.01)):new Ii(i,e,t),o);return l.position.set(n,s,r),l.castShadow=!0,l.receiveShadow=!0,c.add(l),l}function qt(i,e,t,n,s,r,o=At,a=i,c=48){const l=new Fe(new Pi(i,a,e,c),r);return l.position.set(t,n,s),l.castShadow=!0,l.receiveShadow=!0,o.add(l),l}function rr(i,e,t,n=At){const s=new rs(i.map(o=>new L(...o))),r=new Fe(new Wr(s,40,e,8,!1),t);return r.castShadow=!0,n.add(r),r}function or(i,e,t,n,s,r,o,a=At){const c=new Fe(new ui(1,24,16),o);return c.position.set(i,e,t),c.scale.set(n,s,r),c.castShadow=!0,c.receiveShadow=!0,a.add(c),c}const Yu=$d(!0),ua=new Fe(new Pt(24,24),new vt({map:Yu,bumpMap:Yu,bumpScale:.022,roughness:.65}));ua.rotation.x=-Math.PI/2;ua.position.set(0,.12,10);ua.receiveShadow=!0;At.add(ua);je(22,.1,.05,0,.17,-1.86,Oi,.008);const PM=new vt({map:Xu,bumpMap:Xu,bumpScale:.015,roughness:.94,color:"#819377"});je(22,1.52,.014,0,.88,-1.89,PM,0).castShadow=!1;for(const[i,e]of[[-11,Ai.left],[Ai.right,11]])je(e-i,.054,.052,(i+e)/2,Ai.spring,-1.86,Oi,.012);Vt.map=Lv();const ih=new Zc("#a6dbce",0,2.5);ih.position.set(-.19,1.76,-.62);At.add(ih);const DM=new Be("#ffbd75"),ju=new Be("#fff8e8"),Zu=new Be("#619abe"),LM=new Be("#b4aa96"),IM=new Be("#597788");let wr=0,Tr=1,gl=-1;const Sn=Tx({onTexture(i){hf.setTexture(i),Dn=!0},onLighting:i=>{Dn=!0,wr=i.night;const e=Math.round(i.night*100)/100;gl!==e&&(gl=e,hn.style.setProperty("--season-night",String(gl*.73))),Tr=i.sunlight*(1-i.night),Vt.color.copy(i.color).lerp(DM,.52*(1-i.night)),Vt.intensity=i.strength*2.45*(1-i.night),jo.intensity=i.ambient*tt.lerp(.73,.43,i.night),jo.color.copy(ju).lerp(Zu,i.night),jo.groundColor.copy(LM).lerp(IM,i.night),ta.color.copy(ju).lerp(Zu,i.night),ta.intensity=tt.lerp(.7,.34,i.night),On.background.copy(i.background).multiplyScalar(1.75),On.environmentIntensity=.34-i.night*.21,ih.intensity=i.night*.53,na!==i.name&&(na=i.name,Gs())}}),hf=Vx({root:At,box:je,wood:Oi,wall:RM,texture:Sn.texture,weather:Sn.weather}),sn=.4,UM=-.02,ar=-.9,bc=.12,da=new nt;da.position.y=bc*.2;da.scale.y=.8;At.add(da);const NM=At.children.length;je(5.49,.2,1.73,sn,.34,ar,ha,.08);for(const i of[sn-2.34,sn,sn+2.34])for(const e of[-1.48,-.23])qt(.087,.2,i,.22,e,ms);fs(At,{x:sn,y:.121,z:ar,width:5.39,depth:1.63,radius:.11,spread:.32,opacity:.48});je(5.55,.13,1.75,sn,.36,ar,ms,.055);je(5.55,.1,1.75,sn,1.68,ar,ms,.04);je(5.45,1.3,.09,sn,1.01,-1.73,ha,.02);for(const i of[sn-2.71,sn+2.71])je(.13,1.43,1.75,i,1.01,ar,ms,.05);je(5.6,.14,1.82,sn,1.8,ar,Oi,.12);for(const i of[.37,1.67])je(5.35,.1,.09,sn,i,-.015,ms,.025);for(const i of[sn-2.66,sn+2.66])je(.09,1.3,.09,i,1.02,-.015,ms,.025);const uf=[];for(let i=0;i<3;i++){const e=sn+(i-1)*1.735,t=new nt;t.position.set(e-.85,1.02,UM+.025),At.add(t);const n=new nt;n.position.x=.85,t.add(n),je(1.7,1.18,.065,0,0,0,ms,.06,n),je(.045,.27,.057,.64,.07,.085,Fi,.02,n),uf.push({hinge:t,door:n}),je(1.67,.045,1.6,e,.91,-.88,Oi,.015),i<2&&je(.045,1.3,1.6,e+.87,1.02,-.88,ha,.01)}for(const i of At.children.slice(NM))da.add(i);const In=bc+(1.88-bc)*.8,Dt=new nt;Dt.position.set(-.19,In,-.86);Dt.scale.setScalar(.95);At.add(Dt);const Yr=Tt("#276c62",.48),df=new pn({color:"#4d9b8d",roughness:.24,metalness:.04,clearcoat:.78,transparent:!0,opacity:.77,depthWrite:!1}),fa=Tt("#68ab9a",.27,.1);or(0,.79,-.47,.71,.67,.68,df,Dt).castShadow=!1;or(0,.79,-.46,.61,.57,.58,Yr,Dt);for(const i of[-.48,.48])for(const e of[-.56,.048])qt(.097,.12,i,.06,e,Yr,Dt);je(1.37,1.35,.3,0,.8,.095,fa,.148,Dt);je(1.31,1.29,.24,0,.815,.143,ps,.118,Dt);je(1.13,.97,.045,0,.92,.259,Ni,.065,Dt);je(1.08,.92,.025,0,.92,.286,Tt("#59665c",.6),.055,Dt);const gs=new pn({color:"#f0fff9",roughness:.24,metalness:.04,clearcoat:.8,clearcoatRoughness:.16,emissive:"#32564e",emissiveIntensity:.12}),sh=new Pt(1.02,.86,36,30),Oo=sh.attributes.position;for(let i=0;i<Oo.count;i++){let e=Oo.getX(i),t=Oo.getY(i);const n=Math.abs(e),s=Math.abs(t),r=.51-.045,o=.43-.045;if(n>r&&s>o){const a=n-r,c=s-o,l=Math.hypot(a,c);l>.045&&(e=Math.sign(e)*(r+a/l*.045),t=Math.sign(t)*(o+c/l*.045))}Oo.setXYZ(i,e,t,.31+.038*(1-(e/.51)**2)*(1-(t/.43)**2))}sh.computeVertexNormals();const ls=new Fe(sh,gs);ls.position.set(0,.92,0);ls.receiveShadow=!0;Dt.add(ls);ls.userData.roomHoverIgnore=!0;const rh=Cv();gs.map=rh.map;gs.emissiveMap=rh.map;gs.emissive.set("#9cd4b2");gs.roughness=.17;je(.13,.025,.015,.4,.35,.245,Ni,.006,Dt);or(.48,.35,.26,.012,.009,.005,Tt("#a2b99a"),Dt);const FM=Tt("#b3aa93",.72),oh=Tt("#c6bda6",.46),OM=Tt("#726b53",.9);for(const i of[-.458,.458])for(let e=-2;e<=2;e++)for(let t=-4;t<=4;t++){if((t/4.4)**2+(e/2.5)**2>1)continue;const n=qt(.004,.003,i+t*.017,.275+e*.015,.265,OM,Dt,.004,8);n.rotation.x=Math.PI/2,n.castShadow=!1}for(let i=0;i<8;i++)je(.019,.012,.126,-.157+i*.044,1.403,-.36,Yr,.005,Dt);for(const i of[-.35,-.22,-.09])je(.085,.045,.012,i,.355,.257,Ni,.012,Dt),je(.065,.028,.016,i,.355,.269,oh,.009,Dt);const zM=qt(.024,.012,.4,.35,.267,oh,Dt);zM.rotation.x=Math.PI/2;function BM(i,e){const t=document.createElement("canvas");t.width=256,t.height=96;const n=t.getContext("2d");n.clearRect(0,0,256,96),n.fillStyle="#777563",n.font="30px Georgia",n.textAlign="center",n.fillText(i,128,39),n.font="11px Arial",n.fillText(e,128,66);const s=new Ht(t);return s.colorSpace=ct,s}function kM(i,e,t,n,s,r,o,a){const c=new Fe(new Pt(i,e),new Xt({map:BM(r,o),transparent:!0,depthWrite:!1}));return c.position.set(t,n,s),a.add(c),c}kM(.26,.09,.05,.365,.256,"doish","COLOR DISPLAY",Dt);const Yt=new nt;Yt.position.set(.88,In,-.9);Yt.scale.setScalar(.74);At.add(Yt);je(.65,1.42,.79,0,.755,-.009,Yr,.105,Yt);je(.77,1.57,.91,0,.8,0,df,.141,Yt).castShadow=!1;for(let i=-6;i<=6;i++){const e=i*.051;for(const[t,n]of i>=-5&&i<=5?[[.51,.87],[1.4,.22]]:[[.789,1.37]])je(.014,n,.019,e,t,.459,fa,.006,Yt).castShadow=!1}for(let i=-6;i<=6;i++)for(const e of[-.381,.381])je(.017,1.34,.012,e,.795,i*.058,fa,.005,Yt).castShadow=!1;for(const i of[-.23,.23])for(const e of[-.26,.26])qt(.075,.095,i,.05,e,Yr,Yt);je(.65,.3,.055,0,1.064,.477,ps,.045,Yt);je(.53,.064,.021,0,.95,.508,nh,.008,Yt);je(.48,.11,.018,0,1.122,.509,qr,.01,Yt);je(.29,.009,.009,-.052,1.102,.522,Ni,.003,Yt);je(.058,.025,.011,.21,1.02,.513,Ni,.009,Yt);const zi=new nt;zi.position.set(0,.94,.53);Yt.add(zi);je(.54,.027,.58,0,0,.21,ps,.012,zi);je(.55,.055,.035,0,-.004,.5,qr,.008,zi);const HM=new pn({color:"#d8d8cd",metalness:.8,roughness:.2,iridescence:.7,iridescenceIOR:1.3,side:Mt}),bi=new Fe(new Xc(.032,.215,64),HM);bi.rotation.x=-Math.PI/2;bi.position.set(0,.019,.2);zi.add(bi);bi.visible=!1;qt(.058,.003,0,.022,.2,Fi,zi);const ff=qt(.061,.024,0,.586,.479,fa,Yt);ff.rotation.x=Math.PI/2;const pf=new vt({color:"#8fc2a4",emissive:"#82ffd2",emissiveIntensity:.42});or(0,.49,.484,.014,.014,.008,pf,Yt).userData.roomHoverIgnore=!0;const Bi=new nt;Bi.position.set(-.19,In+.018,-.08);Bi.scale.setScalar(.88);Bi.rotation.x=.055;At.add(Bi);je(1.2,.075,.4,0,0,0,qr,.025,Bi);for(let i=0;i<5;i++)for(let e=0;e<16;e++)i===4&&e>2&&e<9||je(.057,.025,.048,-.55+e*.071,.049,-.155+i*.067,i===0?Ni:ps,.007,Bi);je(.43,.025,.048,-.15,.049,.113,ps,.008,Bi);or(.51,In+.054,-.015,.1,.044,.145,ps);rr([[.51,In+.02,-.14],[.54,In+.02,-.36],[.65,In+.02,-.48],[.66,In+.02,-.82]],.009,Ni);const pa=document.createElement("canvas");pa.width=1024;pa.height=320;const jr=pa.getContext("2d");jr.fillStyle="#797867";jr.font="24px Arial";jr.textAlign="center";jr.textBaseline="middle";const mf=[["esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","","",""],["1","2","3","4","5","6","7","8","9","0","−","=","←","7","8","9"],["Q","W","E","R","T","Y","U","I","O","P","[","]","↵","4","5","6"],["A","S","D","F","G","H","J","K","L",";","'","↑","","1","2","3"],["ctrl","alt","","","","","","","","alt","←","↓","→","0",".","↵"]];mf.forEach((i,e)=>i.forEach((t,n)=>jr.fillText(t,n*64+32,e*64+32)));const gf=new Ht(pa);gf.colorSpace=ct;const VM=new Xt({map:gf,transparent:!0,depthWrite:!1,side:Mt});for(let i=0;i<5;i++)for(let e=0;e<16;e++){if(!mf[i][e])continue;const t=new Pt(.049,.037),n=t.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,(e+n.getX(r))/16,1-(i+1-n.getY(r))/5);const s=new Fe(t,VM);s.rotation.x=-Math.PI/2,s.position.set(-.55+e*.071,.063,-.155+i*.067),Bi.add(s)}rr([[.02,2.004,-.13],[.02,2.009,-.07],[.02,2.01,-.02]],.0018,FM);je(.019,.008,.035,.02,2.011,-.075,oh,.006);const rn=new nt;rn.position.set(2.28,In,-.89);rn.scale.setScalar(.92);At.add(rn);je(1.42,.17,1.12,0,.1,0,ps,.055,rn);je(1.36,.025,1.06,0,.197,0,Ni,.025,rn);for(const i of[-.52,.52])for(const e of[-.4,.4])qt(.055,.05,i,0,e,nh,rn);qt(.46,.043,-.12,.23,.025,Fi,rn);const ki=new nt;ki.position.set(-.12,.259,.025);rn.add(ki);qt(.444,.015,0,0,0,Tt("#242720",.33),ki);for(let i=0;i<21;i++){const e=new Fe(new Di(.17+i*.012,.0012,3,80),Tt(i%2?"#45463b":"#32362d",.4));e.rotation.x=Math.PI/2,e.position.y=.009,ki.add(e)}qt(.115,.004,0,.012,0,Tt("#b6a886",.8),ki);qt(.009,.027,0,.025,0,Fi,ki);je(.035,.002,.012,.04,.016,.012,Tt("#777252"),.001,ki);qt(.055,.08,.49,.26,-.36,Fi,rn);const li=new nt;li.position.set(.49,.31,-.36);rn.add(li);rr([[0,0,0],[-.01,.01,.15],[-.16,.01,.64],[-.27,0,.72]],.018,Fi,li);je(.06,.035,.1,-.27,-.01,.72,nh,.012,li);const _f=new vt({color:"#8f6846",emissive:"#ff943d",emissiveIntensity:0});or(.26,.104,.565,.024,.024,.014,_f,rn).userData.roomHoverIgnore=!0;for(const i of[.4,.58]){const e=qt(.036,.035,i,.1,.58,Fi,rn);e.rotation.x=Math.PI/2}const _s=new nt;_s.position.set(0,.23,-.51);_s.rotation.x=-1.04;rn.add(_s);const GM=new pn({color:"#918574",transparent:!0,opacity:.23,roughness:.085,clearcoat:1,clearcoatRoughness:.11,metalness:0,side:Mt,depthWrite:!1});function ah(i,e,t,n,s,r,o){const a=je(i,e,t,n,s,r,GM,o,_s);a.castShadow=!1,a.userData.skipContactShadows=!0}ah(1.43,.022,1.1,0,0,.52,.012);for(const i of[-.71,.71])ah(.012,.115,1.09,i,-.05,.52,.004);ah(1.43,.115,.012,0,-.05,1.06,.004);const vf=Tt("#8b8777",.36,.25);for(const i of[-.71,.71])je(.008,.014,1.09,i,.006,.52,vf,.003,_s);je(1.43,.012,.009,0,.006,1.06,vf,.003,_s);const ma=document.createElement("canvas");ma.width=128;ma.height=256;const lh=ma.getContext("2d"),Zr=lh.createLinearGradient(0,0,128,170);Zr.addColorStop(0,"#fff4d68f");Zr.addColorStop(.22,"#fff8e326");Zr.addColorStop(.42,"#fff8e300");Zr.addColorStop(1,"#fff8e300");lh.fillStyle=Zr;lh.fillRect(0,0,128,256);const xf=new Ht(ma);xf.colorSpace=ct;const ga=new Fe(new Pt(1.39,1.05),new Xt({map:xf,transparent:!0,depthWrite:!1,opacity:.42,side:Mt}));ga.rotation.x=-Math.PI/2;ga.position.set(0,.016,.54);ga.userData.skipContactShadows=!0;_s.add(ga);const Ei=Iv({root:At,box:je,cylinder:qt,lineTube:rr,mat:Tt,wood:Oi,silver:Fi,greenDark:ha,cream:qr});Ei.scale.y=.95;class WM extends zn{excluded=[];render(...e){const t=this.excluded.filter(n=>n.visible);for(const n of t)n.visible=!1;try{super.render(...e)}finally{for(const n of t)n.visible=!0}}setSize(e,t){super.setSize(Math.max(1,Math.round(e*.5)),Math.max(1,Math.round(t*.5)))}}const cs=new Qv(Kn);cs.addPass(new ex(On,ht));const lr=new WM(On,ht,1,1);lr.updateGtaoMaterial({radius:.21,distanceExponent:1,thickness:.82,distanceFallOff:1,scale:1,samples:12});lr.blendIntensity=.62;lr.enabled=!ai;cs.addPass(lr);cs.addPass(new rx);const Mf=new ef(ox);cs.addPass(Mf);const Kr=matchMedia("(prefers-reduced-motion: reduce)").matches;let _t=!Kr,ns=null,Hn=!1,na="午后";const Ku=document.querySelector(".caption p");function Gs(){if(ns){Ku.textContent=`正在查看：${ns.title}`;return}Ku.textContent=Hn?`${na}，唱片还在转。`:`${na}，唱片停了下来。`}const Zo=document.querySelector("#motion");function yf(){Dn=!0,Sn.setMotion(_t),Zo.setAttribute("aria-pressed",String(_t)),Zo.setAttribute("title",_t?"暂停场景动效":"开启场景动效"),Zo.querySelector("span").textContent=_t?"开":"关",Gs()}yf();Zo.addEventListener("click",()=>{_t=!_t,yf()});const XM={perspective:Ln,left:Ln.clone().add(new L(-.52,0,0)),right:Ln.clone().add(new L(.52,0,0))},_a=[...document.querySelectorAll("[data-view]")],ch={position:Ln,target:Xr,zoom:1,view:"perspective"};let Wn=null,Xn=!1,Hr=ch,Sf=!1;const hs=vM(hn,jM,()=>_t&&!Kr,i=>ya.openFromDesktop(i));function hh(i){_a.forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.view===i)))}function uh(){return{position:ht.position.clone(),target:wt.target.clone(),zoom:ht.zoom,view:_a.find(i=>i.getAttribute("aria-pressed")==="true")?.dataset.view}}function is(i,e=1100){Wn={from:uh(),destination:i,start:performance.now(),duration:_t&&!Kr?e:0},hh(i.view),dh(performance.now())}function dh(i){if(!Wn)return;const{from:e,destination:t,start:n,duration:s}=Wn,r=s&&_t?Math.min((i-n)/s,1):1,o=tt.smoothstep(r,0,1);ht.position.lerpVectors(e.position,t.position,o),wt.target.lerpVectors(e.target,t.target,o),ht.zoom=tt.lerp(e.zoom,t.zoom,o),ht.updateProjectionMatrix(),r===1&&(Wn=null)}function ia(){const i=ls.getWorldPosition(new L),t=Math.max(1.48,1.53/ht.aspect)/(2*Math.tan(tt.degToRad(ht.fov/2)));return{position:i.clone().add(new L(-.07,t*.101,t)),target:i,zoom:1}}function Ws(i){Xn=i,hn.toggleAttribute("data-screen-focused",i),ya.updateFocus(i,!!ns)}function qM(){Xn&&is(Hr),Ws(!1)}function YM(){hs.isOpen||(hs.open(),Ma())}function jM(){Ma(),Vr.focus({preventScroll:!0})}function ZM(){Xn||(Hr=uh()),Ws(!Xn),is(Xn?ia():Hr)}_a.forEach(i=>i.addEventListener("click",()=>{const e=i.dataset.view;Ws(!1),is({position:XM[e],target:Xr,zoom:1,view:e}),va()}));wt.addEventListener("start",()=>{Wn=null,hh(void 0)});function bf(){const i=hn.clientWidth,e=hn.clientHeight,t=i/e;AM(t),ht.aspect=t;const n=Math.max(3.66,5.56/t);if(ht.fov=tt.radToDeg(2*Math.atan(n/22)),Xn)if(Wn)Wn.destination=ia();else{const s=ia();ht.position.copy(s.position),wt.target.copy(s.target)}ht.updateProjectionMatrix(),Ef(i,e),Dn=!0}function Ef(i,e){const n=Math.min(devicePixelRatio,ai?af?.86:1:1.4,Math.sqrt((ai?98e4:23e5)/(i*e)));Kn.setPixelRatio(n),Kn.setSize(i,e),cs.setPixelRatio(n),cs.setSize(i,e),Mf.uniforms.resolution.value.set(1/Li.width,1/Li.height)}window.addEventListener("resize",bf);bf();const Xs=document.querySelector("#room-menu"),Vr=document.querySelector("#room-menu-toggle");function va(){Xs.hidden=!0,Vr.setAttribute("aria-expanded","false")}Vr.addEventListener("click",()=>{Xs.hidden=!Xs.hidden,Vr.setAttribute("aria-expanded",String(!Xs.hidden))});Li.addEventListener("pointerdown",va);document.addEventListener("keydown",i=>{i.key==="Escape"&&!Xs.hidden&&!document.querySelector("dialog[open]")&&(va(),Vr.focus())});const kn=new Set,KM=["KeyW","KeyA","KeyS","KeyD"],Mi=new L,Mr=new L;function wf(){return wt.enabled&&!Xn&&!Wn&&Xs.hidden&&!document.querySelector("dialog[open]")&&!document.activeElement?.closest("input, textarea, select, [contenteditable]")}document.addEventListener("keydown",i=>{!KM.includes(i.code)||i.altKey||i.ctrlKey||i.metaKey||!wf()||(i.preventDefault(),kn.add(i.code))});document.addEventListener("keyup",i=>kn.delete(i.code));window.addEventListener("blur",()=>kn.clear());document.addEventListener("visibilitychange",()=>{document.hidden&&kn.clear()});function $u(i,e,t,n){return e>0?Math.min(e,Math.max(0,n-i)):Math.max(e,Math.min(0,t-i))}function $M(i){if(!kn.size)return;if(!wf()){kn.clear();return}const e=Number(kn.has("KeyW"))-Number(kn.has("KeyS")),t=Number(kn.has("KeyD"))-Number(kn.has("KeyA"));Mr.subVectors(wt.target,ht.position).setY(0).normalize(),Mi.set(Mr.x*e-Mr.z*t,0,Mr.z*e+Mr.x*t),Mi.normalize().multiplyScalar(i*2.65);const n=ht.position.z-Ln.z,s=tt.clamp(.52+n*.12,.16,.82);Mi.x=$u(ht.position.x,Mi.x,Ln.x-s,Ln.x+s),Mi.z=$u(ht.position.z,Mi.z,Ln.z-2.8,Ln.z+2.5),ht.position.add(Mi),wt.target.add(Mi),hh(void 0)}const xa=document.createElement("div");xa.id="room-disc-ui";hn.append(xa);let Ko=null;function JM(i){const e=i.clone().project(ht),t=Li.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function QM(i){const e=document.createElement("canvas");e.width=512,e.height=448;const t=e.getContext("2d");t.fillStyle="#1c3833",t.fillRect(0,0,512,448),t.fillStyle="#32564c",t.fillRect(0,0,512,83),t.textBaseline="middle",t.fillStyle="#e7ead5",t.font='22px "Microsoft YaHei", sans-serif',t.fillText(i.category,42,50),t.font='bold 46px "Microsoft YaHei", sans-serif',t.fillText(i.title,42,149,428),t.font='26px "Microsoft YaHei", sans-serif';let n="",s=222;for(const o of i.description)t.measureText(n+o).width>420&&(t.fillText(n,42,s),n="",s+=44),n+=o;n&&t.fillText(n,42,s),t.fillStyle="#aac5a8",t.font='20px "Microsoft YaHei", sans-serif',t.fillText("示例光盘",42,382),Kd(t);const r=new Ht(e);return r.colorSpace=ct,r}const zo=new Xt({toneMapped:!1});function _l(i){zo.map?.dispose(),zo.map=i?QM(i):null,zo.needsUpdate=!0,ls.material=i?zo:gs,ls.receiveShadow=!i,Li.setAttribute("aria-label",i?`CRT 显示 ${i.title}。 ${i.description}`:"青绿复古电脑、唱片机与复古绿柜子的 3D 房间")}function Ec(i){Sf=i,Ma()}function Ma(){const i=Sf||hs.isOpen;xa.toggleAttribute("data-desktop-open",hs.isOpen),wt.enabled=!i,_a.forEach(t=>t.disabled=i);const e=hn.querySelector(".life-explore");e&&(e.disabled=i),i&&va()}function vl(i){const e=_t&&!Kr?680:0;return Ko={from:zi.position.z,to:i,start:performance.now(),duration:e},fh(performance.now()),e}function fh(i){if(!Ko)return;const{from:e,to:t,start:n,duration:s}=Ko,r=s&&_t?Math.min((i-n)/s,1):1;zi.position.z=tt.lerp(e,t,tt.smoothstep(r,0,1)),r===1&&(Ko=null)}const Ju=i=>i?new Promise(e=>setTimeout(e,i)):Promise.resolve(),ya=lx({host:xa,motionEnabled:()=>_t,onOpenCollection:qM,onOpen:()=>Ec(!0),onClose:()=>Ec(!1),async prepareInsertion(){return hs.isOpen&&(hs.detachForDisc(),Ma()),!Xn&&!Wn&&(Hr=uh()),ns=null,Ws(!1),_l(null),Gs(),bi.visible=!1,vl(.53),is(ch),await Ju(Wn?.duration),dh(performance.now()),wt.update(),ht.updateMatrixWorld(),_t&&!Kr},getDrivePoint:()=>JM(bi.getWorldPosition(new L)),async onLoad(i){bi.visible=!0,await Ju(vl(-.01)),fh(performance.now()),ns=i,_l(i),Ws(!0),Gs(),is(ia(),1350)},onToggleFocus:ZM,onEject(){Xn&&is(Hr),ns=null,bi.visible=!1,Ws(!1),vl(.53),_l(null),Gs()}}),Fs=new Nn().setFromObject(Ei),ey=Ei.matrixWorld.clone().invert(),Tf=[];for(const i of[Fs.min.x,Fs.max.x])for(const e of[Fs.min.y,Fs.max.y])for(const t of[Fs.min.z,Fs.max.z])Tf.push(new L(i,e,t).applyMatrix4(ey));const Qu=new it,ed=new it,td=new it,xl=new L;let nd=-1,id=-1;const Dr=dM({root:At,box:je,cylinder:qt,lineTube:rr,mat:Tt,deskHeight:In,window:Ai});TM({root:At,box:je,cylinder:qt,lineTube:rr,mat:Tt,wood:Oi});const ty=Rv(At,Dr.mug,rn,hn);At.traverse(i=>{i.userData.skipContactShadows&&lr.excluded.push(i)});const sd=Pv(),wc={screen:0,power:0};let Ml=0,yl=Sn.isNight()?"noon":Sn.getMode();function ny(){const i=Sn.getMode();if(Sn.isNight()){Sn.setMode(yl==="auto"?"noon":yl);return}yl=i,Sn.setMode("night")}const Bo=Wx({root:At,canvas:Li,camera:ht,controls:wt,box:je,mat:Tt,wood:Oi,cream:qr,cabinetDoors:uf,deskHeight:In,windowView:Sn,mountedWindow:hf,monitor:Dt,tower:Yt,powerButton:ff,computerCue:wc,rack:Ei,collectionUI:ya,setLocked:Ec,player:rn,furniture:Dr,toggleDay:ny,toggleComputer:YM,computerLabel:()=>"打开电脑",setVolume:sd.setVolume,isRecordPlaying:()=>Hn,toggleRecord(){Hn=!Hn,sd.play(Hn),Gs()}});function iy(){Ei.updateWorldMatrix(!0,!1);const i=hn.clientWidth,e=hn.clientHeight;if(nd===i&&id===e&&Qu.equals(ht.matrixWorld)&&ed.equals(ht.projectionMatrix)&&td.equals(Ei.matrixWorld))return;nd=i,id=e,Qu.copy(ht.matrixWorld),ed.copy(ht.projectionMatrix),td.copy(Ei.matrixWorld);let t=1/0,n=1/0,s=-1/0,r=-1/0;for(const o of Tf){xl.copy(o).applyMatrix4(Ei.matrixWorld).project(ht);const a=(xl.x+1)*i/2,c=(1-xl.y)*e/2;t=Math.min(t,a),n=Math.min(n,c),s=Math.max(s,a),r=Math.max(r,c)}ya.updateBounds({x:t,y:n,w:s-t,h:r-n})}for(const i of["pointermove","pointerup","pointerout","click","keydown","wheel","change"])hn.addEventListener(i,()=>{Dn=!0},{capture:!0,passive:!0});document.addEventListener("visibilitychange",()=>{Dn=!0});let Sl=performance.now(),$i=0,bl=0,rd=!1,El=0,ko=0,od=0,Ho=!1;function Af(i){if(requestAnimationFrame(Af),document.hidden||hs.isOpen){Ho||(Sn.setMotion(!1),Ho=!0),Sl=i;return}const e=Ho;e&&(Ho=!1,Dn=!0);const t=Math.max(0,(i-Sl)/1e3);if(ai&&!e&&t<.03)return;Sl=i,!ai&&_t&&t>.043&&t<1?ko++:ko=Math.max(0,ko-1),ko>=10&&(ai=!0,lr.enabled=!1,Ef(hn.clientWidth,hn.clientHeight),Dn=!0);const n=Math.min(t,.12);Sn.tick(Math.min(t,1),_t),dh(i),$M(Math.min(n,.05));const s=wt.update();if(ht.updateMatrixWorld(),Bo.tick(n,_t),fh(i),iy(),!_t&&!Dn&&!s)return;_t&&($i+=Math.min(t,.25));const r=Xn||Bo.hovered(Dt);bl+=t,(r!==rd||_t&&bl>.145&&!ns)&&(rd=r,bl=0,rh.draw(r,$i*.17)),gs.emissiveIntensity=(r?.44:.3)+wr*.38+Math.sin($i*5.2)*.014+wc.screen,pf.emissiveIntensity=.55+Math.sin($i*2.3)*.24+wc.power;const o=Hn?-.31:.38,a=Hn?0:-.12;li.rotation.y=_t?tt.damp(li.rotation.y,o,3.3,n):o;const l=Math.abs(li.rotation.y-o)<.22?a:-.12;li.rotation.x=_t?tt.damp(li.rotation.x,l,4.3,n):l,Ml=_t?tt.damp(Ml,Hn?3.49:0,5.2,n):0,ki.rotation.y-=n*Ml,_f.emissiveIntensity=Hn?1.25+wr*.52:wr*.38,Dr.update(n,$i,wr,Bo.hovered(Dr.lamp),Bo.hovered(Dr.plant),_t,Tr),ty($i,Tr,Hn,_t),El+=t,_t&&El>(ai?.36:.19)&&Tr>.05&&(Jd(Vt.map,$i),El=0),Tr>.05&&(!_t&&Dn||i-od>(ai?180:100))&&(Vt.shadow.needsUpdate=!0,od=i),Dn=!1,cs.render()}requestAnimationFrame(i=>{Af(i);const e=document.querySelector("#loading");e.classList.add("done"),_t&&(ht.position.copy(Ln).lerp(Xr,-.035),is(ch,1050)),setTimeout(()=>e.remove(),650)});
