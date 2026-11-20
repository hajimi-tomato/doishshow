import"./modulepreload-polyfill-B5Qt9EMX.js";const sc="180",Rs={ROTATE:0,DOLLY:1,PAN:2},As={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tf=0,Zc=1,nf=2,rc=1,sf=2,ei=3,yi=0,tn=1,It=2,Wt=0,Ps=1,sl=2,Kc=3,$c=4,Uu=5,An=100,rf=101,of=102,af=103,lf=104,cr=200,cf=201,hf=202,uf=203,rl=204,ol=205,al=206,df=207,ll=208,ff=209,pf=210,mf=211,gf=212,_f=213,vf=214,cl=0,hl=1,ul=2,Fs=3,dl=4,fl=5,pl=6,ml=7,oc=0,xf=1,Mf=2,Mi=0,Nu=1,Fu=2,Ou=3,ac=4,zu=5,Bu=6,ku=7,Hu=300,Os=301,zs=302,gl=303,_l=304,Go=306,Wn=1e3,Xi=1001,vl=1002,nn=1003,Sf=1004,kr=1005,Pn=1006,aa=1007,Yi=1008,Ln=1009,Vu=1010,Gu=1011,xr=1012,lc=1013,Zi=1014,Hn=1015,bi=1016,cc=1017,hc=1018,Bs=1020,Wu=35902,Xu=35899,Yu=1021,qu=1022,Sn=1023,Mr=1026,ks=1027,uc=1028,dc=1029,ju=1030,fc=1031,pc=1033,wo=33776,Ao=33777,Co=33778,Ro=33779,xl=35840,Ml=35841,Sl=35842,yl=35843,bl=36196,El=37492,Tl=37496,wl=37808,Al=37809,Cl=37810,Rl=37811,Pl=37812,Dl=37813,Ll=37814,Il=37815,Ul=37816,Nl=37817,Fl=37818,Ol=37819,zl=37820,Bl=37821,kl=36492,Hl=36494,Vl=36495,Gl=36283,Wl=36284,Xl=36285,Yl=36286,yf=3200,bf=3201,Wo=0,Ef=1,ni="",_t="srgb",Hs="srgb-linear",Fo="linear",ct="srgb",ls=7680,Jc=519,Tf=512,wf=513,Af=514,Zu=515,Cf=516,Rf=517,Pf=518,Df=519,Qc=35044,eh="300 es",Vn=2e3,Oo=2001;class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const pr=Math.PI/180,Vs=180/Math.PI;function es(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function mc(i,e){return(i%e+e)%e}function Lf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function If(i,e,t){return i!==e?(t-i)/(e-i):0}function mr(i,e,t){return(1-t)*i+t*e}function Uf(i,e,t,n){return mr(i,e,1-Math.exp(-t*n))}function Nf(i,e=1){return e-Math.abs(mc(i,e*2)-e)}function Ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function zf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bf(i,e){return i+Math.random()*(e-i)}function kf(i){return i*(.5-Math.random())}function Hf(i){i!==void 0&&(th=i);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vf(i){return i*pr}function Gf(i){return i*Vs}function Wf(i){return(i&i-1)===0&&i!==0}function Xf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ht={DEG2RAD:pr,RAD2DEG:Vs,generateUUID:es,clamp:Je,euclideanModulo:mc,mapLinear:Lf,inverseLerp:If,lerp:mr,damp:Uf,pingpong:Nf,smoothstep:Ff,smootherstep:Of,randInt:zf,randFloat:Bf,randFloatSpread:kf,seededRandom:Hf,degToRad:Vf,radToDeg:Gf,isPowerOfTwo:Wf,ceilPowerOfTwo:Xf,floorPowerOfTwo:Yf,setQuaternionFromProperEuler:qf,normalize:Qt,denormalize:ws};class re{constructor(e=0,t=0){re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ei{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==m){let g=1-a;const p=c*f+l*d+h*m+u*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),E=Math.atan2(w,p*M);g=Math.sin(g*E)/w,a=Math.sin(a*E)/w}const v=a*M;if(c=c*g+f*v,l=l*g+d*v,h=h*g+m*v,u=u*g+_*v,g===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-a*d,e[t+2]=l*m+h*d+a*f-c*u,e[t+3]=h*m-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new I,nh=new Ei;class et{constructor(e,t,n,s,r,o,a,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=s[0],g=s[3],p=s[6],M=s[1],x=s[4],v=s[7],w=s[2],E=s[5],A=s[8];return r[0]=o*_+a*M+c*w,r[3]=o*g+a*x+c*E,r[6]=o*p+a*v+c*A,r[1]=l*_+h*M+u*w,r[4]=l*g+h*x+u*E,r[7]=l*p+h*v+u*A,r[2]=f*_+d*M+m*w,r[5]=f*g+d*x+m*E,r[8]=f*p+d*v+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=t*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new et;function Ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){const i=Sr("canvas");return i.style.display="block",i}const ih={};function yr(i){i in ih||(ih[i]=!0,console.warn(i))}function Zf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const sh=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){const i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=Ds(s.r),s.g=Ds(s.g),s.b=Ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),i}const rt=Kf();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let cs;class $f{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=Sr("canvas")),cs.width=e.width,cs.height=e.height;const s=cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jf=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ha(s[o].image)):r.push(ha(s[o]))}else r=ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$f.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qf=0;const ua=new I;class Yt extends Qi{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=Xi,s=Xi,r=Pn,o=Yi,a=Sn,c=Ln,l=Yt.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=es(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wn:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case vl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wn:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case vl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Hu;Yt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(d+1)/2,w=(p+1)/2,E=(h+f)/4,A=(u+_)/4,R=(m+g)/4;return x>v&&x>w?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=R/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=R/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ep extends Qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Yt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends ep{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $u extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tp extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Vr.subVectors(this.max,er),hs.subVectors(e.a,er),us.subVectors(e.b,er),ds.subVectors(e.c,er),ci.subVectors(us,hs),hi.subVectors(ds,us),Ni.subVectors(hs,ds);let t=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ni.z,Ni.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ni.z,0,-Ni.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ni.y,Ni.x,0];return!da(t,hs,us,ds,Vr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,hs,us,ds,Vr))?!1:(Gr.crossVectors(ci,hi),t=[Gr.x,Gr.y,Gr.z],da(t,hs,us,ds,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new I,new I,new I,new I,new I,new I,new I,new I],En=new I,Hr=new Yn,hs=new I,us=new I,ds=new I,ci=new I,hi=new I,Ni=new I,er=new I,Vr=new I,Gr=new I,Fi=new I;function da(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Fi.fromArray(i,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=e.dot(Fi),l=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const np=new Yn,tr=new I,fa=new I;class Ys{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):np.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(tr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(fa)),this.expandByPoint(tr.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zn=new I,pa=new I,Wr=new I,ui=new I,ma=new I,Xr=new I,ga=new I;class Xo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pa.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),a=ui.dot(this.direction),c=-ui.dot(Wr),l=ui.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pa).addScaledVector(Wr,f),d}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){ma.subVectors(t,e),Xr.subVectors(n,e),ga.crossVectors(ma,Xr);let o=this.direction.dot(ga),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,e);const c=a*this.direction.dot(Xr.crossVectors(ui,Xr));if(c<0)return null;const l=a*this.direction.dot(ma.cross(ui));if(l<0||c+l>o)return null;const h=-a*ui.dot(ga);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,m,_,g){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,_,g)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,m=l*h,_=l*u;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,m=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,m=a*h,_=a*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,m=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ip,e,sp)}lookAt(e,t,n){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),di.crossVectors(n,mn),di.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),di.crossVectors(n,mn)),di.normalize(),Yr.crossVectors(mn,di),s[0]=di.x,s[4]=Yr.x,s[8]=mn.x,s[1]=di.y,s[5]=Yr.y,s[9]=mn.y,s[2]=di.z,s[6]=Yr.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],x=n[7],v=n[11],w=n[15],E=s[0],A=s[4],R=s[8],y=s[12],S=s[1],T=s[5],L=s[9],N=s[13],H=s[2],B=s[6],G=s[10],$=s[14],O=s[3],ee=s[7],se=s[11],fe=s[15];return r[0]=o*E+a*S+c*H+l*O,r[4]=o*A+a*T+c*B+l*ee,r[8]=o*R+a*L+c*G+l*se,r[12]=o*y+a*N+c*$+l*fe,r[1]=h*E+u*S+f*H+d*O,r[5]=h*A+u*T+f*B+d*ee,r[9]=h*R+u*L+f*G+d*se,r[13]=h*y+u*N+f*$+d*fe,r[2]=m*E+_*S+g*H+p*O,r[6]=m*A+_*T+g*B+p*ee,r[10]=m*R+_*L+g*G+p*se,r[14]=m*y+_*N+g*$+p*fe,r[3]=M*E+x*S+v*H+w*O,r[7]=M*A+x*T+v*B+w*ee,r[11]=M*R+x*L+v*G+w*se,r[15]=M*y+x*N+v*$+w*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+g*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],M=u*g*l-_*f*l+_*c*d-a*g*d-u*c*p+a*f*p,x=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,v=h*_*l-m*u*l+m*a*d-o*_*d-h*a*p+o*u*p,w=m*u*c-h*_*c-m*a*f+o*_*f+h*a*g-o*u*g,E=t*M+n*x+s*v+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=M*A,e[1]=(_*f*r-u*g*r-_*s*d+n*g*d+u*s*p-n*f*p)*A,e[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*p+n*c*p)*A,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*A,e[4]=x*A,e[5]=(h*g*r-m*f*r+m*s*d-t*g*d-h*s*p+t*f*p)*A,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*p-t*c*p)*A,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*A,e[8]=v*A,e[9]=(m*u*r-h*_*r-m*n*d+t*_*d+h*n*p-t*u*p)*A,e[10]=(o*_*r-m*a*r+m*n*l-t*_*l-o*n*p+t*a*p)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*A,e[12]=w*A,e[13]=(h*_*s-m*u*s+m*n*f-t*_*f-h*n*g+t*u*g)*A,e[14]=(m*a*s-o*_*s-m*n*c+t*_*c+o*n*g-t*a*g)*A,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,_=o*h,g=o*u,p=a*u,M=c*l,x=c*h,v=c*u,w=n.x,E=n.y,A=n.z;return s[0]=(1-(_+p))*w,s[1]=(d+v)*w,s[2]=(m-x)*w,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(f+p))*E,s[6]=(g+M)*E,s[7]=0,s[8]=(m+x)*A,s[9]=(g-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=fs.set(s[0],s[1],s[2]).length();const o=fs.set(s[4],s[5],s[6]).length(),a=fs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const l=1/r,h=1/o,u=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Vn,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Vn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Oo)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Vn,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Vn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Oo)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const fs=new I,Tn=new lt,ip=new I(0,0,0),sp=new I(1,1,1),di=new I,Yr=new I,mn=new I,oh=new lt,ah=new Ei;class In{constructor(e=0,t=0,n=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rp=0;const lh=new I,ps=new Ei,Kn=new lt,qr=new I,nr=new I,op=new I,ap=new Ei,ch=new I(1,0,0),hh=new I(0,1,0),uh=new I(0,0,1),dh={type:"added"},lp={type:"removed"},ms={type:"childadded",child:null},_a={type:"childremoved",child:null};class wt extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new In,n=new Ei,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new et}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qr.copy(e):qr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(nr,qr,this.up):Kn.lookAt(qr,nr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(Kn),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),ms.child=e,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lp),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,op),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,ap,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new I,$n=new I,va=new I,Jn=new I,gs=new I,_s=new I,fh=new I,xa=new I,Ma=new I,Sa=new I,ya=new pt,ba=new pt,Ea=new pt;class Cn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),wn.subVectors(e,t),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){wn.subVectors(s,t),$n.subVectors(n,t),va.subVectors(e,t);const o=wn.dot(wn),a=wn.dot($n),c=wn.dot(va),l=$n.dot($n),h=$n.dot(va),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ya.setScalar(0),ba.setScalar(0),Ea.setScalar(0),ya.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),Ea.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(Ea,r.z),o}static isFrontFacing(e,t,n,s){return wn.subVectors(n,t),$n.subVectors(e,t),wn.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),wn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),_s.subVectors(r,n),xa.subVectors(e,n);const c=gs.dot(xa),l=_s.dot(xa);if(c<=0&&l<=0)return t.copy(n);Ma.subVectors(e,s);const h=gs.dot(Ma),u=_s.dot(Ma);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(gs,o);Sa.subVectors(e,r);const d=gs.dot(Sa),m=_s.dot(Sa);if(m>=0&&d<=m)return t.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(_s,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return fh.subVectors(r,s),a=(u-h)/(u-h+(d-m)),t.copy(s).addScaledVector(fh,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Ta(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=mc(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ta(o,r,e+1/3),this.g=Ta(o,r,e),this.b=Ta(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return rt.workingToColorSpace(Kt.copy(this),e),Math.round(Je(Kt.r*255,0,255))*65536+Math.round(Je(Kt.g*255,0,255))*256+Math.round(Je(Kt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(Kt.copy(this),t);const n=Kt.r,s=Kt.g,r=Kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=_t){rt.workingToColorSpace(Kt.copy(this),e);const t=Kt.r,n=Kt.g,s=Kt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(jr);const n=mr(fi.h,jr.h,t),s=mr(fi.s,jr.s,t),r=mr(fi.l,jr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new ze;ze.NAMES=Ju;let cp=0;class ai extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Ps,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(n.blending=this.blending),this.side!==yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==An&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rn extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new I,Zr=new re;let hp=0;class un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qc,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zr.fromBufferAttribute(this,t),Zr.applyMatrix3(e),this.setXY(t,Zr.x,Zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class Qu extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ed extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let up=0;const xn=new lt,wa=new wt,vs=new I,gn=new Yn,ir=new Yn,kt=new I;class Mt extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ku(e)?ed:Qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(gn.min,ir.min),gn.expandByPoint(kt),kt.addVectors(gn.max,ir.max),gn.expandByPoint(kt)):(gn.expandByPoint(ir.min),gn.expandByPoint(ir.max))}gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(vs.fromBufferAttribute(e,l),kt.add(vs)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new I,c[R]=new I;const l=new I,h=new I,u=new I,f=new re,d=new re,m=new re,_=new I,g=new I;function p(R,y,S){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(T),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(T),a[R].add(_),a[y].add(_),a[S].add(_),c[R].add(g),c[y].add(g),c[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,y=M.length;R<y;++R){const S=M[R],T=S.start,L=S.count;for(let N=T,H=T+L;N<H;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new I,v=new I,w=new I,E=new I;function A(R){w.fromBufferAttribute(s,R),E.copy(w);const y=a[R];x.copy(y),x.sub(w.multiplyScalar(w.dot(y))).normalize(),v.crossVectors(E,y);const T=v.dot(c[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,y=M.length;R<y;++R){const S=M[R],T=S.start,L=S.count;for(let N=T,H=T+L;N<H;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new un(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new lt,Oi=new Xo,Kr=new Ys,mh=new I,$r=new I,Jr=new I,Qr=new I,Aa=new I,eo=new I,gh=new I,to=new I;class We extends wt{constructor(e=new Mt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Aa.fromBufferAttribute(u,e),o?eo.addScaledVector(Aa,h):eo.addScaledVector(Aa.sub(t),h))}t.add(eo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Kr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Kr,mh)===null||Oi.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(ph),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,w=x;v<w;v+=3){const E=a.getX(v),A=a.getX(v+1),R=a.getX(v+2);s=no(this,p,e,n,l,h,u,E,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=no(this,o,e,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let v=M,w=x;v<w;v+=3){const E=v,A=v+1,R=v+2;s=no(this,p,e,n,l,h,u,E,A,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=g,x=g+1,v=g+2;s=no(this,o,e,n,l,h,u,M,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function dp(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===yi,a),c===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(to);return l<t.near||l>t.far?null:{distance:l,point:to.clone(),object:i}}function no(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,$r),i.getVertexPosition(c,Jr),i.getVertexPosition(l,Qr);const h=dp(i,e,t,n,$r,Jr,Qr,gh);if(h){const u=new I;Cn.getBarycoord(gh,$r,Jr,Qr,u),s&&(h.uv=Cn.getInterpolatedAttribute(s,a,c,l,u,new re)),r&&(h.uv1=Cn.getInterpolatedAttribute(r,a,c,l,u,new re)),o&&(h.normal=Cn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};Cn.getNormal($r,Jr,Qr,f.normal),h.face=f,h.barycoord=u}return h}class Ai extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function m(_,g,p,M,x,v,w,E,A,R,y){const S=v/A,T=w/R,L=v/2,N=w/2,H=E/2,B=A+1,G=R+1;let $=0,O=0;const ee=new I;for(let se=0;se<G;se++){const fe=se*T-N;for(let xe=0;xe<B;xe++){const Pe=xe*S-L;ee[_]=Pe*M,ee[g]=fe*x,ee[p]=H,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[g]=0,ee[p]=E>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(xe/A),u.push(1-se/R),$+=1}}for(let se=0;se<R;se++)for(let fe=0;fe<A;fe++){const xe=f+fe+B*se,Pe=f+fe+B*(se+1),Be=f+(fe+1)+B*(se+1),Ne=f+(fe+1)+B*se;c.push(xe,Pe,Ne),c.push(Pe,Be,Ne),O+=6}a.addGroup(d,O,y),d+=O,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=Gs(i[t]);for(const s in n)e[s]=n[s]}return e}function fp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function td(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const vi={clone:Gs,merge:en};var pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pp,this.fragmentShader=mp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new I,_h=new re,vh=new re;class hn extends nd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vs*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,_h,vh),t.subVectors(vh,_h)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const xs=-90,Ms=1;class gp extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(xs,Ms,e,t);s.layers=this.layers,this.add(s);const r=new hn(xs,Ms,e,t);r.layers=this.layers,this.add(r);const o=new hn(xs,Ms,e,t);o.layers=this.layers,this.add(o);const a=new hn(xs,Ms,e,t);a.layers=this.layers,this.add(a);const c=new hn(xs,Ms,e,t);c.layers=this.layers,this.add(c);const l=new hn(xs,Ms,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class id extends Yt{constructor(e=[],t=Os,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _p extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new id(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Wt});r.uniforms.tEquirect.value=t;const o=new We(s,r),a=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Pn),new gp(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class at extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vp={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new at,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new at,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new at,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new at;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sd extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vc extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xh extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new lt,Mh=new lt,io=[],Sh=new Yn,xp=new lt,sr=new We,rr=new Ys;class rd extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Sh.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Sh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ys),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),rr.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Mh.multiplyMatrices(n,Ss),sr.matrixWorld=Mh,sr.raycast(e,io);for(let o=0,a=io.length;o<a;o++){const c=io[o];c.instanceId=r,c.object=this,t.push(c)}io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vc(new Float32Array(s*this.count),s,this.count,uc,Hn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ra=new I,Mp=new I,Sp=new et;class gi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ra.subVectors(n,t).cross(Mp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sp.getNormalMatrix(e),s=this.coplanarPoint(Ra).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Ys,yp=new re(.5,.5),so=new I;class xc{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],M=r[12],x=r[13],v=r[14],w=r[15];if(s[0].setComponents(l-o,d-h,p-m,w-M).normalize(),s[1].setComponents(l+o,d+h,p+m,w+M).normalize(),s[2].setComponents(l+a,d+u,p+_,w+x).normalize(),s[3].setComponents(l-a,d-u,p-_,w-x).normalize(),n)s[4].setComponents(c,f,g,v).normalize(),s[5].setComponents(l-c,d-f,p-g,w-v).normalize();else if(s[4].setComponents(l-c,d-f,p-g,w-v).normalize(),t===Vn)s[5].setComponents(l+c,d+f,p+g,w+v).normalize();else if(t===Oo)s[5].setComponents(c,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);const t=yp.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(so.x=s.normal.x>0?e.max.x:e.min.x,so.y=s.normal.y>0?e.max.y:e.min.y,so.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class od extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yh=new lt,ql=new Xo,ro=new Ys,oo=new I;class bh extends wt{constructor(e=new Mt,t=new od){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;yh.copy(s).invert(),ql.copy(e.ray).applyMatrix4(yh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=l.getX(m);oo.fromBufferAttribute(u,g),Eh(oo,g,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)oo.fromBufferAttribute(u,m),Eh(oo,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eh(i,e,t,n,s,r,o){const a=ql.distanceSqToPoint(i);if(a<t){const c=new I;ql.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gt extends Yt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mc extends Yt{constructor(e,t,n=Zi,s,r,o,a=nn,c=nn,l,h=Mr,u=1){if(h!==Mr&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ad extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sc extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+r,_=s+1,g=new I,p=new I;for(let M=0;M<=m;M++){let x=0,v=0,w=0,E=0;if(M<=n){const y=M/n,S=y*Math.PI/2;v=-h-e*Math.cos(S),w=e*Math.sin(S),E=-e*Math.cos(S),x=y*u}else if(M<=n+r){const y=(M-n)/r;v=-h+y*t,w=e,E=0,x=u+y*f}else{const y=(M-n-r)/n,S=y*Math.PI/2;v=h+e*Math.sin(S),w=e*Math.cos(S),E=e*Math.sin(S),x=u+f+y*u}const A=Math.max(0,Math.min(1,x/d));let R=0;M===0?R=.5/s:M===m&&(R=-.5/s);for(let y=0;y<=s;y++){const S=y/s,T=S*Math.PI*2,L=Math.sin(T),N=Math.cos(T);p.x=-w*N,p.y=v,p.z=w*L,a.push(p.x,p.y,p.z),g.set(-w*N,E,w*L),g.normalize(),c.push(g.x,g.y,g.z),l.push(S+R,A)}if(M>0){const y=(M-1)*_;for(let S=0;S<s;S++){const T=y+S,L=y+S+1,N=M*_+S,H=M*_+S+1;o.push(T,L,N),o.push(L,H,N)}}}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class br extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,h=new re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ki extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function M(){const v=new I,w=new I;let E=0;const A=(t-e)/n;for(let R=0;R<=r;R++){const y=[],S=R/r,T=S*(t-e)+e;for(let L=0;L<=s;L++){const N=L/s,H=N*c+a,B=Math.sin(H),G=Math.cos(H);w.x=T*B,w.y=-S*n+g,w.z=T*G,u.push(w.x,w.y,w.z),v.set(B,A,G).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-S),y.push(m++)}_.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){const S=_[y][R],T=_[y+1][R],L=_[y+1][R+1],N=_[y][R+1];(e>0||y!==0)&&(h.push(S,T,N),E+=3),(t>0||y!==r-1)&&(h.push(T,L,N),E+=3)}l.addGroup(p,E,0),p+=E}function x(v){const w=m,E=new re,A=new I;let R=0;const y=v===!0?e:t,S=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,g*S,0),f.push(0,S,0),d.push(.5,.5),m++;const T=m;for(let L=0;L<=s;L++){const H=L/s*c+a,B=Math.cos(H),G=Math.sin(H);A.x=y*G,A.y=g*S,A.z=y*B,u.push(A.x,A.y,A.z),f.push(0,S,0),E.x=B*.5+.5,E.y=G*.5*S+.5,d.push(E.x,E.y),m++}for(let L=0;L<s;L++){const N=w+L,H=T+L;v===!0?h.push(H,H+1,N):h.push(H+1,H,N),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new re:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new lt;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Je(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Je(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yc extends qn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class bp extends yc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function bc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ao=new I,Pa=new bc,Da=new bc,La=new bc;class Ws extends qn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ao.subVectors(s[0],s[1]).add(s[0]),l=ao);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ao.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ao),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Pa.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,_,g),Da.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,_,g),La.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Pa.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Da.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),La.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Pa.calc(c),Da.calc(c),La.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Th(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Ep(i,e){const t=1-i;return t*t*e}function Tp(i,e){return 2*(1-i)*i*e}function wp(i,e){return i*i*e}function gr(i,e,t,n){return Ep(i,e)+Tp(i,t)+wp(i,n)}function Ap(i,e){const t=1-i;return t*t*t*e}function Cp(i,e){const t=1-i;return 3*t*t*i*e}function Rp(i,e){return 3*(1-i)*i*i*e}function Pp(i,e){return i*i*i*e}function _r(i,e,t,n,s){return Ap(i,e)+Cp(i,t)+Rp(i,n)+Pp(i,s)}class ld extends qn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,s.x,r.x,o.x,a.x),_r(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dp extends qn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_r(e,s.x,r.x,o.x,a.x),_r(e,s.y,r.y,o.y,a.y),_r(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cd extends qn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lp extends qn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends qn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ud extends qn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,s.x,r.x,o.x),gr(e,s.y,r.y,o.y),gr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dd extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Th(a,c.x,l.x,h.x,u.x),Th(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new re().fromArray(s))}return this}}var zo=Object.freeze({__proto__:null,ArcCurve:bp,CatmullRomCurve3:Ws,CubicBezierCurve:ld,CubicBezierCurve3:Dp,EllipseCurve:yc,LineCurve:cd,LineCurve3:Lp,QuadraticBezierCurve:hd,QuadraticBezierCurve3:ud,SplineCurve:dd});class Ip extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new zo[s.type]().fromJSON(s))}return this}}class wh extends Ip{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new cd(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new hd(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new ld(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new dd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new yc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qs extends wh{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new wh().fromJSON(s))}return this}}function Up(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=fd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Bp(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){const d=i[f],m=i[f+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Er(r,o,t,a,c,l,0),o}function fd(i,e,t,n,s){let r;if(s===Kp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ah(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ah(o/n|0,i[o],i[o+1],r);return r&&Xs(r,r.next)&&(wr(r),r=r.next),r}function $i(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xs(t,t.next)||bt(t.prev,t,t.next)===0)){if(wr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Er(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Wp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?Fp(i,n,s,r):Np(i)){e.push(c.i,i.i,l.i),wr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Op($i(i),e),Er(i,e,t,n,s,r,2)):o===2&&zp(i,e,t,n,s,r):Er($i(i),e,t,n,s,r,1);break}}}function Np(i){const e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&hr(s,a,r,c,o,l,m.x,m.y)&&bt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(bt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),m=Math.min(h,u,f),_=Math.max(a,c,l),g=Math.max(h,u,f),p=jl(d,m,e,t,n),M=jl(_,g,e,t,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=p&&v&&v.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&hr(a,h,c,u,l,f,x.x,x.y)&&bt(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&hr(a,h,c,u,l,f,v.x,v.y)&&bt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&hr(a,h,c,u,l,f,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&hr(a,h,c,u,l,f,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Op(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Xs(n,s)&&md(n,t,t.next,s)&&Tr(n,s)&&Tr(s,n)&&(e.push(n.i,t.i,s.i),wr(t),wr(t.next),t=i=s),t=t.next}while(t!==i);return $i(t)}function zp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qp(o,a)){let c=gd(o,a);o=$i(o,o.next),c=$i(c,c.next),Er(o,e,t,n,s,r,0),Er(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=fd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Yp(l))}s.sort(kp);for(let r=0;r<s.length;r++)t=Hp(s[r],t);return t}function kp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Hp(i,e){const t=Vp(i,e);if(!t)return e;const n=gd(t,i);return $i(n,n.next),$i(t,t.next)}function Vp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Xs(i,t))return t;do{if(Xs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&pd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);Tr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Gp(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Gp(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function Wp(i,e,t,n){let s=i;do s.z===0&&(s.z=jl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xp(s)}function Xp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function jl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Yp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pd(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function hr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&pd(i,e,t,n,s,r,o,a)}function qp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!jp(i,e)&&(Tr(i,e)&&Tr(e,i)&&Zp(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||Xs(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xs(i,e){return i.x===e.x&&i.y===e.y}function md(i,e,t,n){const s=co(bt(i,e,t)),r=co(bt(i,e,n)),o=co(bt(t,n,i)),a=co(bt(t,n,e));return!!(s!==r&&o!==a||s===0&&lo(i,t,e)||r===0&&lo(i,n,e)||o===0&&lo(t,i,n)||a===0&&lo(t,e,n))}function lo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function co(i){return i>0?1:i<0?-1:0}function jp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&md(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Tr(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function Zp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gd(i,e){const t=Zl(i.i,i.x,i.y),n=Zl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ah(i,e,t,n){const s=Zl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class $p{static triangulate(e,t,n=2){return Up(e,t,n)}}class si{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return si.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ch(e),Rh(n,e);let o=e.length;t.forEach(Ch);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Rh(n,t[c]);const a=$p.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ch(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Rh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Rr extends Mt{constructor(e=new qs([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new $e(s,3)),this.setAttribute("uv",new $e(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Jp;let x,v=!1,w,E,A,R;p&&(x=p.getSpacedPoints(h),v=!0,f=!1,w=p.computeFrenetFrames(h,!1),E=new I,A=new I,R=new I),f||(g=0,d=0,m=0,_=0);const y=a.extractPoints(l);let S=y.shape;const T=y.holes;if(!si.isClockWise(S)){S=S.reverse();for(let ne=0,j=T.length;ne<j;ne++){const ie=T[ne];si.isClockWise(ie)&&(T[ne]=ie.reverse())}}function N(ne){const ie=10000000000000001e-36;let te=ne[0];for(let ue=1;ue<=ne.length;ue++){const Q=ue%ne.length,ce=ne[Q],Fe=ce.x-te.x,Oe=ce.y-te.y,P=Fe*Fe+Oe*Oe,b=Math.max(Math.abs(ce.x),Math.abs(ce.y),Math.abs(te.x),Math.abs(te.y)),z=ie*b*b;if(P<=z){ne.splice(Q,1),ue--;continue}te=ce}}N(S),T.forEach(N);const H=T.length,B=S;for(let ne=0;ne<H;ne++){const j=T[ne];S=S.concat(j)}function G(ne,j,ie){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(j,ie)}const $=S.length;function O(ne,j,ie){let te,ue,Q;const ce=ne.x-j.x,Fe=ne.y-j.y,Oe=ie.x-ne.x,P=ie.y-ne.y,b=ce*ce+Fe*Fe,z=ce*P-Fe*Oe;if(Math.abs(z)>Number.EPSILON){const X=Math.sqrt(b),oe=Math.sqrt(Oe*Oe+P*P),W=j.x-Fe/X,Ae=j.y+ce/X,de=ie.x-P/oe,we=ie.y+Oe/oe,De=((de-W)*P-(we-Ae)*Oe)/(ce*P-Fe*Oe);te=W+ce*De-ne.x,ue=Ae+Fe*De-ne.y;const le=te*te+ue*ue;if(le<=2)return new re(te,ue);Q=Math.sqrt(le/2)}else{let X=!1;ce>Number.EPSILON?Oe>Number.EPSILON&&(X=!0):ce<-Number.EPSILON?Oe<-Number.EPSILON&&(X=!0):Math.sign(Fe)===Math.sign(P)&&(X=!0),X?(te=-Fe,ue=ce,Q=Math.sqrt(b)):(te=ce,ue=Fe,Q=Math.sqrt(b/2))}return new re(te/Q,ue/Q)}const ee=[];for(let ne=0,j=B.length,ie=j-1,te=ne+1;ne<j;ne++,ie++,te++)ie===j&&(ie=0),te===j&&(te=0),ee[ne]=O(B[ne],B[ie],B[te]);const se=[];let fe,xe=ee.concat();for(let ne=0,j=H;ne<j;ne++){const ie=T[ne];fe=[];for(let te=0,ue=ie.length,Q=ue-1,ce=te+1;te<ue;te++,Q++,ce++)Q===ue&&(Q=0),ce===ue&&(ce=0),fe[te]=O(ie[te],ie[Q],ie[ce]);se.push(fe),xe=xe.concat(fe)}let Pe;if(g===0)Pe=si.triangulateShape(B,T);else{const ne=[],j=[];for(let ie=0;ie<g;ie++){const te=ie/g,ue=d*Math.cos(te*Math.PI/2),Q=m*Math.sin(te*Math.PI/2)+_;for(let ce=0,Fe=B.length;ce<Fe;ce++){const Oe=G(B[ce],ee[ce],Q);ye(Oe.x,Oe.y,-ue),te===0&&ne.push(Oe)}for(let ce=0,Fe=H;ce<Fe;ce++){const Oe=T[ce];fe=se[ce];const P=[];for(let b=0,z=Oe.length;b<z;b++){const X=G(Oe[b],fe[b],Q);ye(X.x,X.y,-ue),te===0&&P.push(X)}te===0&&j.push(P)}}Pe=si.triangulateShape(ne,j)}const Be=Pe.length,Ne=m+_;for(let ne=0;ne<$;ne++){const j=f?G(S[ne],xe[ne],Ne):S[ne];v?(A.copy(w.normals[0]).multiplyScalar(j.x),E.copy(w.binormals[0]).multiplyScalar(j.y),R.copy(x[0]).add(A).add(E),ye(R.x,R.y,R.z)):ye(j.x,j.y,0)}for(let ne=1;ne<=h;ne++)for(let j=0;j<$;j++){const ie=f?G(S[j],xe[j],Ne):S[j];v?(A.copy(w.normals[ne]).multiplyScalar(ie.x),E.copy(w.binormals[ne]).multiplyScalar(ie.y),R.copy(x[ne]).add(A).add(E),ye(R.x,R.y,R.z)):ye(ie.x,ie.y,u/h*ne)}for(let ne=g-1;ne>=0;ne--){const j=ne/g,ie=d*Math.cos(j*Math.PI/2),te=m*Math.sin(j*Math.PI/2)+_;for(let ue=0,Q=B.length;ue<Q;ue++){const ce=G(B[ue],ee[ue],te);ye(ce.x,ce.y,u+ie)}for(let ue=0,Q=T.length;ue<Q;ue++){const ce=T[ue];fe=se[ue];for(let Fe=0,Oe=ce.length;Fe<Oe;Fe++){const P=G(ce[Fe],fe[Fe],te);v?ye(P.x,P.y+x[h-1].y,x[h-1].x+ie):ye(P.x,P.y,u+ie)}}}K(),J();function K(){const ne=s.length/3;if(f){let j=0,ie=$*j;for(let te=0;te<Be;te++){const ue=Pe[te];pe(ue[2]+ie,ue[1]+ie,ue[0]+ie)}j=h+g*2,ie=$*j;for(let te=0;te<Be;te++){const ue=Pe[te];pe(ue[0]+ie,ue[1]+ie,ue[2]+ie)}}else{for(let j=0;j<Be;j++){const ie=Pe[j];pe(ie[2],ie[1],ie[0])}for(let j=0;j<Be;j++){const ie=Pe[j];pe(ie[0]+$*h,ie[1]+$*h,ie[2]+$*h)}}n.addGroup(ne,s.length/3-ne,0)}function J(){const ne=s.length/3;let j=0;_e(B,j),j+=B.length;for(let ie=0,te=T.length;ie<te;ie++){const ue=T[ie];_e(ue,j),j+=ue.length}n.addGroup(ne,s.length/3-ne,1)}function _e(ne,j){let ie=ne.length;for(;--ie>=0;){const te=ie;let ue=ie-1;ue<0&&(ue=ne.length-1);for(let Q=0,ce=h+g*2;Q<ce;Q++){const Fe=$*Q,Oe=$*(Q+1),P=j+te+Fe,b=j+ue+Fe,z=j+ue+Oe,X=j+te+Oe;ke(P,b,z,X)}}}function ye(ne,j,ie){c.push(ne),c.push(j),c.push(ie)}function pe(ne,j,ie){qe(ne),qe(j),qe(ie);const te=s.length/3,ue=M.generateTopUV(n,s,te-3,te-2,te-1);U(ue[0]),U(ue[1]),U(ue[2])}function ke(ne,j,ie,te){qe(ne),qe(j),qe(te),qe(j),qe(ie),qe(te);const ue=s.length/3,Q=M.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);U(Q[0]),U(Q[1]),U(Q[3]),U(Q[1]),U(Q[2]),U(Q[3])}function qe(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function U(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Qp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new zo[s.type]().fromJSON(s)),new Rr(n,e.options)}}const Jp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,c),new re(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],m=e[s*3+2],_=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new re(o,1-c),new re(l,1-u),new re(f,1-m),new re(_,1-p)]:[new re(a,1-c),new re(h,1-u),new re(d,1-m),new re(g,1-p)]}};function Qp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Pr extends Mt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Je(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new I,f=new re,d=new I,m=new I,_=new I;let g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let M=0;M<=t;M++){const x=n+M*h*s,v=Math.sin(x),w=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*v,u.y=e[E].y,u.z=e[E].x*w,o.push(u.x,u.y,u.z),f.x=M/t,f.y=E/(e.length-1),a.push(f.x,f.y);const A=c[3*E+0]*v,R=c[3*E+1],y=c[3*E+0]*w;l.push(A,R,y)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){const v=x+M*e.length,w=v,E=v+e.length,A=v+e.length+1,R=v+1;r.push(w,E,R),r.push(A,R,E)}this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("uv",new $e(a,2)),this.setAttribute("normal",new $e(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ft extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let x=0;x<l;x++){const v=x*u-r;m.push(v,-M,0),_.push(0,0,1),g.push(x/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const x=M+l*p,v=M+l*(p+1),w=M+1+l*(p+1),E=M+1+l*p;d.push(x,v,E),d.push(v,w,E)}this.setIndex(d),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=e;const f=(t-e)/s,d=new I,m=new re;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=r+g/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const M=p+g,x=M,v=M+n+1,w=M+n+2,E=M+1;a.push(x,v,E),a.push(v,w,E)}}this.setIndex(a),this.setAttribute("position",new $e(c,3)),this.setAttribute("normal",new $e(l,3)),this.setAttribute("uv",new $e(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class qi extends Mt{constructor(e=new qs([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(r,3)),this.setAttribute("uv",new $e(o,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const m=f.holes;si.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const M=m[g];si.isClockWise(M)===!0&&(m[g]=M.reverse())}const _=si.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){const M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=_.length;g<p;g++){const M=_[g],x=M[0]+u,v=M[1]+u,w=M[2]+u;n.push(x,v,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return em(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new qi(n,e.curveSegments)}}function em(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Ar extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,f=new I,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const M=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const E=w/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(E+v,1-x),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const x=h[p][M+1],v=h[p][M],w=h[p+1][M],E=h[p+1][M+1];(p!==0||o>0)&&d.push(x,v,E),(p!==n-1||c<Math.PI)&&d.push(v,w,E)}this.setIndex(d),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dr extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const _=m/s*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const _=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(_,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lr extends Mt{constructor(e=new ud(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new re;let h=new I;const u=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(f,3)),this.setAttribute("uv",new $e(d,2));function _(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),M(),p()}function g(x){h=e.getPointAt(x/t,h);const v=o.normals[x],w=o.binormals[x];for(let E=0;E<=s;E++){const A=E/s*Math.PI*2,R=Math.sin(A),y=-Math.cos(A);c.x=y*v.x+R*w.x,c.y=y*v.y+R*w.y,c.z=y*v.z+R*w.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let v=1;v<=s;v++){const w=(s+1)*(x-1)+(v-1),E=(s+1)*x+(v-1),A=(s+1)*x+v,R=(s+1)*(x-1)+v;m.push(w,E,R),m.push(E,A,R)}}function M(){for(let x=0;x<=t;x++)for(let v=0;v<=s;v++)l.x=x/t,l.y=v/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Lr(new zo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class tm extends ai{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class nm extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Et extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yn extends Et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class im extends ai{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class sm extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rm extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class om extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ia={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class am{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const lm=new am;class Tc{constructor(e){this.manager=e!==void 0?e:lm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Tc.DEFAULT_MATERIAL_NAME="__DEFAULT";const ys=new WeakMap;class cm extends Tc{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ia.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ys.get(o);u===void 0&&(u=[],ys.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=Sr("img");function c(){h(),t&&t(this);const u=ys.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}ys.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ia.remove(`image:${e}`);const f=ys.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(u)}ys.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ia.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class hm extends Tc{constructor(e){super(e)}load(e,t,n,s){const r=new Yt,o=new cm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Yo extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class um extends Yo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ua=new lt,Ph=new I,Dh=new I;class wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Dh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dh),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dm extends wc{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Vs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ac extends Yo{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lh=new lt,or=new I,Na=new I;class fm extends wc{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),or.setFromMatrixPosition(e.matrixWorld),n.position.copy(or),Na.copy(n.position),Na.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Na),n.updateMatrixWorld(),s.makeTranslation(-or.x,-or.y,-or.z),Lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh,n.coordinateSystem,n.reversedDepth)}}class Cc extends Yo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new fm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rc extends nd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pm extends wc{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mm extends Yo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new pm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gm extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _m{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ih=new lt;class _d{constructor(e,t,n=0,s=1/0){this.ray=new Xo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(e,t=!0,n=[]){return Kl(e,this,n,t),n.sort(Uh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kl(e[s],this,n,t);return n.sort(Uh),n}}function Uh(i,e){return i.distance-e.distance}function Kl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Kl(r[o],e,t,!0)}}class Nh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class vm extends Qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Fh(i,e,t,n){const s=xm(n);switch(t){case Yu:return i*e;case uc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case ju:return i*e*2/s.components*s.byteLength;case fc:return i*e*2/s.components*s.byteLength;case qu:return i*e*3/s.components*s.byteLength;case Sn:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case wo:case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ml:case yl:return Math.max(i,16)*Math.max(e,8)/4;case xl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case bl:case El:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Al:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Bl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kl:case Hl:case Vl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xl:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xm(i){switch(i){case Ln:case Vu:return{byteLength:1,components:1};case xr:case Gu:case bi:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case Zi:case lc:case Hn:return{byteLength:4,components:1};case Wu:case Xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sc);function vd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ym=`#ifdef USE_ALPHAHASH
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
#endif`,bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rm=`#ifdef USE_BATCHING
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
#endif`,Pm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wm=`#define PI 3.141592653589793
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
} // validated`,Xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$m="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qm=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v0=`PhysicalMaterial material;
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
#endif`,x0=`struct PhysicalMaterial {
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
}`,M0=`
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,P0=`#if defined( USE_POINTS_UV )
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
#endif`,D0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,j0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ag=`#ifdef USE_SKINNING
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
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
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
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Rg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Og=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,Bg=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,qg=`#define TOON
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
}`,jg=`uniform float size;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,$g=`uniform vec3 color;
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
}`,Jg=`uniform float rotation;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Sm,alphahash_pars_fragment:ym,alphamap_fragment:bm,alphamap_pars_fragment:Em,alphatest_fragment:Tm,alphatest_pars_fragment:wm,aomap_fragment:Am,aomap_pars_fragment:Cm,batching_pars_vertex:Rm,batching_vertex:Pm,begin_vertex:Dm,beginnormal_vertex:Lm,bsdfs:Im,iridescence_fragment:Um,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Om,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Bm,color_fragment:km,color_pars_fragment:Hm,color_pars_vertex:Vm,color_vertex:Gm,common:Wm,cube_uv_reflection_fragment:Xm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:qm,displacementmap_vertex:jm,emissivemap_fragment:Zm,emissivemap_pars_fragment:Km,colorspace_fragment:$m,colorspace_pars_fragment:Jm,envmap_fragment:Qm,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:v0,lights_physical_pars_fragment:x0,lights_fragment_begin:M0,lights_fragment_maps:S0,lights_fragment_end:y0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:w0,map_fragment:A0,map_pars_fragment:C0,map_particle_fragment:R0,map_particle_pars_fragment:P0,metalnessmap_fragment:D0,metalnessmap_pars_fragment:L0,morphinstance_vertex:I0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:F0,morphtarget_vertex:O0,normal_fragment_begin:z0,normal_fragment_maps:B0,normal_pars_fragment:k0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:q0,opaque_fragment:j0,packing:Z0,premultiplied_alpha_fragment:K0,project_vertex:$0,dithering_fragment:J0,dithering_pars_fragment:Q0,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:og,skinning_pars_vertex:ag,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:vg,worldpos_vertex:xg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:yg,backgroundCube_frag:bg,cube_vert:Eg,cube_frag:Tg,depth_vert:wg,depth_frag:Ag,distanceRGBA_vert:Cg,distanceRGBA_frag:Rg,equirect_vert:Pg,equirect_frag:Dg,linedashed_vert:Lg,linedashed_frag:Ig,meshbasic_vert:Ug,meshbasic_frag:Ng,meshlambert_vert:Fg,meshlambert_frag:Og,meshmatcap_vert:zg,meshmatcap_frag:Bg,meshnormal_vert:kg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Gg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:Yg,meshtoon_frag:qg,points_vert:jg,points_frag:Zg,shadow_vert:Kg,shadow_frag:$g,sprite_vert:Jg,sprite_frag:Qg},Te={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},zn={basic:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ze(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:en([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:en([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:en([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ze(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:en([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:en([Te.points,Te.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:en([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:en([Te.common,Te.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:en([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:en([Te.sprite,Te.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:en([Te.common,Te.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:en([Te.lights,Te.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};zn.physical={uniforms:en([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const ho={r:0,b:0,g:0},Bi=new In,e_=new lt;function t_(i,e,t,n,s,r,o){const a=new ze(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const w=m(x);w===null?p(a,c):w&&w.isColor&&(p(w,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,v){const w=m(v);w&&(w.isCubeTexture||w.mapping===Go)?(h===void 0&&(h=new We(new Ai(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Gs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(v.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e_.makeRotationFromEuler(Bi)),h.material.toneMapped=rt.getTransfer(w.colorSpace)!==ct,(u!==w||f!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new We(new Ft(2,2),new Xt({name:"BackgroundMaterial",uniforms:Gs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=rt.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(ho,td(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,v,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(a,c)},render:_,addToRenderList:g,dispose:M}}function n_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,T,L,N,H){let B=!1;const G=u(N,L,T);r!==G&&(r=G,l(r.object)),B=d(S,N,L,H),B&&m(S,N,L,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(S,T,L,N),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,T,L){const N=L.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let B=H[T.id];B===void 0&&(B={},H[T.id]=B);let G=B[N];return G===void 0&&(G=f(c()),B[N]=G),G}function f(S){const T=[],L=[],N=[];for(let H=0;H<t;H++)T[H]=0,L[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:L,attributeDivisors:N,object:S,attributes:{},index:null}}function d(S,T,L,N){const H=r.attributes,B=T.attributes;let G=0;const $=L.getAttributes();for(const O in $)if($[O].location>=0){const se=H[O];let fe=B[O];if(fe===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function m(S,T,L,N){const H={},B=T.attributes;let G=0;const $=L.getAttributes();for(const O in $)if($[O].location>=0){let se=B[O];se===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),H[O]=fe,G++}r.attributes=H,r.attributesNum=G,r.index=N}function _(){const S=r.newAttributes;for(let T=0,L=S.length;T<L;T++)S[T]=0}function g(S){p(S,0)}function p(S,T){const L=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;L[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),H[S]!==T&&(i.vertexAttribDivisor(S,T),H[S]=T)}function M(){const S=r.newAttributes,T=r.enabledAttributes;for(let L=0,N=T.length;L<N;L++)T[L]!==S[L]&&(i.disableVertexAttribArray(L),T[L]=0)}function x(S,T,L,N,H,B,G){G===!0?i.vertexAttribIPointer(S,T,L,H,B):i.vertexAttribPointer(S,T,L,N,H,B)}function v(S,T,L,N){_();const H=N.attributes,B=L.getAttributes(),G=T.defaultAttributeValues;for(const $ in B){const O=B[$];if(O.location>=0){let ee=H[$];if(ee===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const se=ee.normalized,fe=ee.itemSize,xe=e.get(ee);if(xe===void 0)continue;const Pe=xe.buffer,Be=xe.type,Ne=xe.bytesPerElement,K=Be===i.INT||Be===i.UNSIGNED_INT||ee.gpuType===lc;if(ee.isInterleavedBufferAttribute){const J=ee.data,_e=J.stride,ye=ee.offset;if(J.isInstancedInterleavedBuffer){for(let pe=0;pe<O.locationSize;pe++)p(O.location+pe,J.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<O.locationSize;pe++)g(O.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let pe=0;pe<O.locationSize;pe++)x(O.location+pe,fe/O.locationSize,Be,se,_e*Ne,(ye+fe/O.locationSize*pe)*Ne,K)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<O.locationSize;J++)p(O.location+J,ee.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<O.locationSize;J++)g(O.location+J);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let J=0;J<O.locationSize;J++)x(O.location+J,fe/O.locationSize,Be,se,fe*Ne,fe/O.locationSize*J*Ne,K)}}else if(G!==void 0){const se=G[$];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(O.location,se);break;case 3:i.vertexAttrib3fv(O.location,se);break;case 4:i.vertexAttrib4fv(O.location,se);break;default:i.vertexAttrib1fv(O.location,se)}}}}M()}function w(){R();for(const S in n){const T=n[S];for(const L in T){const N=T[L];for(const H in N)h(N[H].object),delete N[H];delete T[L]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const T=n[S.id];for(const L in T){const N=T[L];for(const H in N)h(N[H].object),delete N[H];delete T[L]}delete n[S.id]}function A(S){for(const T in n){const L=n[T];if(L[S.id]===void 0)continue;const N=L[S.id];for(const H in N)h(N[H].object),delete N[H];delete L[S.id]}}function R(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function i_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function s_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Hn&&!R)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:E}}function r_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new gi,a=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,x=M*4;let v=p.clippingState||null;c.value=v,v=h(m,f,x,d);for(let w=0;w!==x;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function o_(i){let e=new WeakMap;function t(o,a){return a===gl?o.mapping=Os:a===_l&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gl||a===_l)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new _p(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Cs=4,Oh=[.125,.215,.35,.446,.526,.582],Wi=20,Fa=new Rc,zh=new ze;let Oa=null,za=0,Ba=0,ka=!1;const Gi=(1+Math.sqrt(5))/2,bs=1/Gi,Bh=[new I(-Gi,bs,0),new I(Gi,bs,0),new I(-bs,0,Gi),new I(bs,0,Gi),new I(0,Gi,-bs),new I(0,Gi,bs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],a_=new I;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=a_}=r;Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,za,Ba),this._renderer.xr.enabled=ka,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:bi,format:Sn,colorSpace:Hs,depthBuffer:!1},s=kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(r)),this._blurMaterial=c_(r,e,t)}return s}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s,r){const c=new hn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zh),u.toneMapping=Mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new rn({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new We(new Ai,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(zh),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const w=this._cubeSize;uo(s,v*w,x>2?w:0,w,w),u.setRenderTarget(s),p&&u.render(g,c),u.render(e,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Os||e.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;uo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Bh[(s-r-1)%Bh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new We(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Wi;g>Wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wi}`);const p=[];let M=0;for(let A=0;A<Wi;++A){const R=A/_,y=Math.exp(-R*R/2);p.push(y),A===0?M+=y:A<g&&(M+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const v=this._sizeLods[s],w=3*v*(s>x-Cs?s-x+Cs:0),E=4*(this._cubeSize-v);uo(t,w,E,3*v,2*v),c.setRenderTarget(t),c.render(u,Fa)}}function l_(i){const e=[],t=[],n=[];let s=i;const r=i-Cs+1+Oh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Cs?c=Oh[o-i+Cs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*d),x=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,R=E>2?0:-1,y=[A,R,0,A+2/3,R,0,A+2/3,R+1,0,A,R,0,A+2/3,R+1,0,A,R+1,0];M.set(y,_*m*E),x.set(f,g*m*E);const S=[E,E,E,E,E,E];v.set(S,p*m*E)}const w=new Mt;w.setAttribute("position",new un(M,_)),w.setAttribute("uv",new un(x,g)),w.setAttribute("faceIndex",new un(v,p)),e.push(w),s>Cs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kh(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c_(i,e,t){const n=new Float32Array(Wi),s=new I(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Hh(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Vh(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wt,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function h_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===gl||c===_l,h=c===Os||c===zs;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new $l(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new $l(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let x=0,v=M.length;x<v;x+=3){const w=M[x+0],E=M[x+1],A=M[x+2];f.push(w,E,E,A,A,w)}}else if(m!==void 0){const M=m.array;_=m.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const w=x+0,E=x+1,A=x+2;f.push(w,E,E,A,A,w)}}else return;const g=new(Ku(f)?ed:Qu)(f,1);g.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function f_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function u(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*_[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*w*4*u),A=new $u(E,v,w,u);A.type=Hn,A.needsUpdate=!0;const R=x*4;for(let S=0;S<u;S++){const T=g[S],L=p[S],N=M[S],H=v*w*4*S;for(let B=0;B<T.count;B++){const G=B*R;d===!0&&(s.fromBufferAttribute(T,B),E[H+G+0]=s.x,E[H+G+1]=s.y,E[H+G+2]=s.z,E[H+G+3]=0),m===!0&&(s.fromBufferAttribute(L,B),E[H+G+4]=s.x,E[H+G+5]=s.y,E[H+G+6]=s.z,E[H+G+7]=0),_===!0&&(s.fromBufferAttribute(N,B),E[H+G+8]=s.x,E[H+G+9]=s.y,E[H+G+10]=s.z,E[H+G+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new re(v,w)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function g_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const xd=new Yt,Gh=new Mc(1,1),Md=new $u,Sd=new tp,yd=new id,Wh=[],Xh=[],Yh=new Float32Array(16),qh=new Float32Array(9),jh=new Float32Array(4);function js(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qo(i,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function __(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function x_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function S_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;jh.set(n),i.uniformMatrix2fv(this.addr,!1,jh),Bt(t,n)}}function y_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;qh.set(n),i.uniformMatrix3fv(this.addr,!1,qh),Bt(t,n)}}function b_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,n))return;Yh.set(n),i.uniformMatrix4fv(this.addr,!1,Yh),Bt(t,n)}}function E_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function R_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function D_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function L_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gh.compareFunction=Zu,r=Gh):r=xd,t.setTexture2D(e||r,s)}function I_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sd,s)}function U_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yd,s)}function N_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Md,s)}function F_(i){switch(i){case 5126:return __;case 35664:return v_;case 35665:return x_;case 35666:return M_;case 35674:return S_;case 35675:return y_;case 35676:return b_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return w_;case 35669:case 35673:return A_;case 5125:return C_;case 36294:return R_;case 36295:return P_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return L_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return N_}}function O_(i,e){i.uniform1fv(this.addr,e)}function z_(i,e){const t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function B_(i,e){const t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function k_(i,e){const t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function H_(i,e){const t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V_(i,e){const t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G_(i,e){const t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W_(i,e){i.uniform1iv(this.addr,e)}function X_(i,e){i.uniform2iv(this.addr,e)}function Y_(i,e){i.uniform3iv(this.addr,e)}function q_(i,e){i.uniform4iv(this.addr,e)}function j_(i,e){i.uniform1uiv(this.addr,e)}function Z_(i,e){i.uniform2uiv(this.addr,e)}function K_(i,e){i.uniform3uiv(this.addr,e)}function $_(i,e){i.uniform4uiv(this.addr,e)}function J_(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xd,r[o])}function Q_(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sd,r[o])}function ev(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yd,r[o])}function tv(i,e,t){const n=this.cache,s=e.length,r=qo(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Md,r[o])}function nv(i){switch(i){case 5126:return O_;case 35664:return z_;case 35665:return B_;case 35666:return k_;case 35674:return H_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return Y_;case 35669:case 35673:return q_;case 5125:return j_;case 36294:return Z_;case 36295:return K_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}class iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F_(t.type)}}class sv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}}class rv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Zh(i,e){i.seq.push(e),i.map[e.id]=e}function ov(i,e,t){const n=i.name,s=n.length;for(Ha.lastIndex=0;;){const r=Ha.exec(n),o=Ha.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zh(t,l===void 0?new iv(a,i,e):new sv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new rv(a),Zh(t,u)),t=u}}}class Po{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ov(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Kh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const av=37297;let lv=0;function cv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const $h=new et;function hv(i){rt._getMatrix($h,rt.workingColorSpace,i);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cv(i.getShaderSource(e),a)}else return r}function uv(i,e){const t=hv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dv(i,e){let t;switch(e){case Nu:t="Linear";break;case Fu:t="Reinhard";break;case Ou:t="Cineon";break;case ac:t="ACESFilmic";break;case Bu:t="AgX";break;case ku:t="Neutral";break;case zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new I;function fv(){rt.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function mv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ur(i){return i!==""}function Qh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(_v,xv)}const vv=new Map;function xv(i,e){let t=Qe[e];if(t===void 0){const n=vv.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}const Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(Mv,Sv)}function Sv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function yv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function bv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case zs:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ev(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===zs&&(e="ENVMAP_MODE_REFRACTION"),e}function Tv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case oc:e="ENVMAP_BLENDING_MULTIPLY";break;case xf:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function wv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Av(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=yv(t),l=bv(t),h=Ev(t),u=Tv(t),f=wv(t),d=pv(t),m=mv(r),_=s.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ur).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(g=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Mi?dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,uv("linearToOutputTexel",t.outputColorSpace),fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=Jl(o),o=Qh(o,t),o=eu(o,t),a=Jl(a),a=Qh(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+g+o,v=M+p+a,w=Kh(s,s.VERTEX_SHADER,x),E=Kh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(T){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(w)||"",H=s.getShaderInfoLog(E)||"",B=L.trim(),G=N.trim(),$=H.trim();let O=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,E);else{const se=Jh(s,w,"vertex"),fe=Jh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+B+`
`+se+`
`+fe)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||$==="")&&(ee=!1);ee&&(T.diagnostics={runnable:O,programLog:B,vertexShader:{log:G,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(w),s.deleteShader(E),R=new Po(s,_),y=gv(s,_)}let R;this.getUniforms=function(){return R===void 0&&A(this),R};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,av)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=E,this}let Cv=0;class Rv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pv(e),t.set(e,n)),n}}class Pv{constructor(e){this.id=Cv++,this.code=e,this.usedTimes=0}}function Dv(i,e,t,n,s,r,o){const a=new _c,c=new Rv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,S,T,L,N){const H=L.fog,B=N.geometry,G=y.isMeshStandardMaterial?L.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||G),O=$&&$.mapping===Go?$.image.height:null,ee=m[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=se!==void 0?se.length:0;let xe=0;B.morphAttributes.position!==void 0&&(xe=1),B.morphAttributes.normal!==void 0&&(xe=2),B.morphAttributes.color!==void 0&&(xe=3);let Pe,Be,Ne,K;if(ee){const be=zn[ee];Pe=be.vertexShader,Be=be.fragmentShader}else Pe=y.vertexShader,Be=y.fragmentShader,c.update(y),Ne=c.getVertexShaderID(y),K=c.getFragmentShaderID(y);const J=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),ye=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,ke=!!y.map,qe=!!y.matcap,U=!!$,ne=!!y.aoMap,j=!!y.lightMap,ie=!!y.bumpMap,te=!!y.normalMap,ue=!!y.displacementMap,Q=!!y.emissiveMap,ce=!!y.metalnessMap,Fe=!!y.roughnessMap,Oe=y.anisotropy>0,P=y.clearcoat>0,b=y.dispersion>0,z=y.iridescence>0,X=y.sheen>0,oe=y.transmission>0,W=Oe&&!!y.anisotropyMap,Ae=P&&!!y.clearcoatMap,de=P&&!!y.clearcoatNormalMap,we=P&&!!y.clearcoatRoughnessMap,De=z&&!!y.iridescenceMap,le=z&&!!y.iridescenceThicknessMap,Ee=X&&!!y.sheenColorMap,He=X&&!!y.sheenRoughnessMap,Re=!!y.specularMap,Se=!!y.specularColorMap,Ye=!!y.specularIntensityMap,F=oe&&!!y.transmissionMap,he=oe&&!!y.thicknessMap,Me=!!y.gradientMap,Le=!!y.alphaMap,me=y.alphaTest>0,D=!!y.alphaHash,Z=!!y.extensions;let ae=Mi;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ae=i.toneMapping);const ve={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:Pe,fragmentShader:Be,defines:y.defines,customVertexShaderID:Ne,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:pe,batchingColor:pe&&N._colorsTexture!==null,instancing:ye,instancingColor:ye&&N.instanceColor!==null,instancingMorph:ye&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Hs,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:qe,envMap:U,envMapMode:U&&$.mapping,envMapCubeUVHeight:O,aoMap:ne,lightMap:j,bumpMap:ie,normalMap:te,displacementMap:f&&ue,emissiveMap:Q,normalMapObjectSpace:te&&y.normalMapType===Ef,normalMapTangentSpace:te&&y.normalMapType===Wo,metalnessMap:ce,roughnessMap:Fe,anisotropy:Oe,anisotropyMap:W,clearcoat:P,clearcoatMap:Ae,clearcoatNormalMap:de,clearcoatRoughnessMap:we,dispersion:b,iridescence:z,iridescenceMap:De,iridescenceThicknessMap:le,sheen:X,sheenColorMap:Ee,sheenRoughnessMap:He,specularMap:Re,specularColorMap:Se,specularIntensityMap:Ye,transmission:oe,transmissionMap:F,thicknessMap:he,gradientMap:Me,opaque:y.transparent===!1&&y.blending===Ps&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:D,combine:y.combine,mapUv:ke&&_(y.map.channel),aoMapUv:ne&&_(y.aoMap.channel),lightMapUv:j&&_(y.lightMap.channel),bumpMapUv:ie&&_(y.bumpMap.channel),normalMapUv:te&&_(y.normalMap.channel),displacementMapUv:ue&&_(y.displacementMap.channel),emissiveMapUv:Q&&_(y.emissiveMap.channel),metalnessMapUv:ce&&_(y.metalnessMap.channel),roughnessMapUv:Fe&&_(y.roughnessMap.channel),anisotropyMapUv:W&&_(y.anisotropyMap.channel),clearcoatMapUv:Ae&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(y.sheenRoughnessMap.channel),specularMapUv:Re&&_(y.specularMap.channel),specularColorMapUv:Se&&_(y.specularColorMap.channel),specularIntensityMapUv:Ye&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:he&&_(y.thicknessMap.channel),alphaMapUv:Le&&_(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(te||Oe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(ke||Le),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===ct,decodeVideoTextureEmissive:Q&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===It,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Z&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&y.extensions.multiDraw===!0||pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)S.push(T),S.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(M(S,y),x(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function x(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){const S=m[y.type];let T;if(S){const L=zn[S];T=vi.clone(L.uniforms)}else T=y.uniforms;return T}function w(y,S){let T;for(let L=0,N=h.length;L<N;L++){const H=h[L];if(H.cacheKey===S){T=H,++T.usedTimes;break}}return T===void 0&&(T=new Av(i,S,y,r),h.push(T)),T}function E(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function A(y){c.remove(y)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:R}}function Lv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Iv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function su(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,m,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Iv),n.length>1&&n.sort(f||iu),s.length>1&&s.sort(f||iu)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Uv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Fv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ov=0;function zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bv(i){const e=new Nv,t=Fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new lt,o=new lt;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,M=0,x=0,v=0,w=0,E=0,A=0;l.sort(zv);for(let y=0,S=l.length;y<S;y++){const T=l[y],L=T.color,N=T.intensity,H=T.distance,B=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=L.r*N,u+=L.g*N,f+=L.b*N;else if(T.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(T.sh.coefficients[G],N);A++}else if(T.isDirectionalLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,O=t.get(T);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=B,n.directionalShadowMatrix[d]=T.shadow.matrix,M++}n.directional[d]=G,d++}else if(T.isSpotLight){const G=e.get(T);G.position.setFromMatrixPosition(T.matrixWorld),G.color.copy(L).multiplyScalar(N),G.distance=H,G.coneCos=Math.cos(T.angle),G.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),G.decay=T.decay,n.spot[_]=G;const $=T.shadow;if(T.map&&(n.spotLightMap[w]=T.map,w++,$.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,T.castShadow){const O=t.get(T);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=B,v++}_++}else if(T.isRectAreaLight){const G=e.get(T);G.color.copy(L).multiplyScalar(N),G.halfWidth.set(T.width*.5,0,0),G.halfHeight.set(0,T.height*.5,0),n.rectArea[g]=G,g++}else if(T.isPointLight){const G=e.get(T);if(G.color.copy(T.color).multiplyScalar(T.intensity),G.distance=T.distance,G.decay=T.decay,T.castShadow){const $=T.shadow,O=t.get(T);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=T.shadow.matrix,x++}n.point[m]=G,m++}else if(T.isHemisphereLight){const G=e.get(T);G.skyColor.copy(T.color).multiplyScalar(N),G.groundColor.copy(T.groundColor).multiplyScalar(N),n.hemi[p]=G,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==g||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==w||R.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,R.directionalLength=d,R.pointLength=m,R.spotLength=_,R.rectAreaLength=g,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=w,R.numLightProbes=A,n.version=Ov++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function ru(i){const e=new Bv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function kv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ru(i),e.set(s,[a])):r>=o.length?(a=new ru(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Hv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vv=`uniform sampler2D shadow_pass;
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
}`;function Gv(i,e,t){let n=new xc;const s=new re,r=new re,o=new pt,a=new rm({depthPacking:bf}),c=new om,l={},h=t.maxTextureSize,u={[yi]:tn,[tn]:yi,[It]:It},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Hv,fragmentShader:Vv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Mt;m.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let p=this.type;this.render=function(E,A,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Wt),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const N=p!==ei&&this.type===ei,H=p===ei&&this.type!==ei;for(let B=0,G=E.length;B<G;B++){const $=E[B],O=$.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ee=O.getFrameExtents();if(s.multiply(ee),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,O.mapSize.y=r.y)),O.map===null||N===!0||H===!0){const fe=this.type!==ei?{minFilter:nn,magFilter:nn}:{};O.map!==null&&O.map.dispose(),O.map=new Xn(s.x,s.y,fe),O.map.texture.name=$.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const se=O.getViewportCount();for(let fe=0;fe<se;fe++){const xe=O.getViewport(fe);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),L.viewport(o),O.updateMatrices($,fe),n=O.getFrustum(),v(A,R,O.camera,$,this.type)}O.isPointLightShadow!==!0&&this.type===ei&&M(O,R),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,S,T)};function M(E,A){const R=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,R,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,R,d,_,null)}function x(E,A,R,y){let S=null;const T=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)S=T;else if(S=R.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=S.uuid,N=A.uuid;let H=l[L];H===void 0&&(H={},l[L]=H);let B=H[N];B===void 0&&(B=S.clone(),H[N]=B,A.addEventListener("dispose",w)),S=B}if(S.visible=A.visible,S.wireframe=A.wireframe,y===ei?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=i.properties.get(S);L.light=R}return S}function v(E,A,R,y,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ei)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const N=e.update(E),H=E.material;if(Array.isArray(H)){const B=N.groups;for(let G=0,$=B.length;G<$;G++){const O=B[G],ee=H[O.materialIndex];if(ee&&ee.visible){const se=x(E,ee,y,S);E.onBeforeShadow(i,E,A,R,N,se,O),i.renderBufferDirect(R,null,N,se,E,O),E.onAfterShadow(i,E,A,R,N,se,O)}}}else if(H.visible){const B=x(E,H,y,S);E.onBeforeShadow(i,E,A,R,N,B,null),i.renderBufferDirect(R,null,N,B,E,null),E.onAfterShadow(i,E,A,R,N,B,null)}}const L=E.children;for(let N=0,H=L.length;N<H;N++)v(L[N],A,R,y,S)}function w(E){E.target.removeEventListener("dispose",w);for(const R in l){const y=l[R],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Wv={[cl]:hl,[ul]:pl,[dl]:ml,[Fs]:fl,[hl]:cl,[pl]:ul,[ml]:dl,[fl]:Fs};function Xv(i,e){function t(){let F=!1;const he=new pt;let Me=null;const Le=new pt(0,0,0,0);return{setMask:function(me){Me!==me&&!F&&(i.colorMask(me,me,me,me),Me=me)},setLocked:function(me){F=me},setClear:function(me,D,Z,ae,ve){ve===!0&&(me*=ae,D*=ae,Z*=ae),he.set(me,D,Z,ae),Le.equals(he)===!1&&(i.clearColor(me,D,Z,ae),Le.copy(he))},reset:function(){F=!1,Me=null,Le.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,Me=null,Le=null,me=null;return{setReversed:function(D){if(he!==D){const Z=e.get("EXT_clip_control");D?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT),he=D;const ae=me;me=null,this.setClear(ae)}},getReversed:function(){return he},setTest:function(D){D?J(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(D){Me!==D&&!F&&(i.depthMask(D),Me=D)},setFunc:function(D){if(he&&(D=Wv[D]),Le!==D){switch(D){case cl:i.depthFunc(i.NEVER);break;case hl:i.depthFunc(i.ALWAYS);break;case ul:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case fl:i.depthFunc(i.GEQUAL);break;case pl:i.depthFunc(i.GREATER);break;case ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Le=D}},setLocked:function(D){F=D},setClear:function(D){me!==D&&(he&&(D=1-D),i.clearDepth(D),me=D)},reset:function(){F=!1,Me=null,Le=null,me=null,he=!1}}}function s(){let F=!1,he=null,Me=null,Le=null,me=null,D=null,Z=null,ae=null,ve=null;return{setTest:function(be){F||(be?J(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(be){he!==be&&!F&&(i.stencilMask(be),he=be)},setFunc:function(be,it,Ge){(Me!==be||Le!==it||me!==Ge)&&(i.stencilFunc(be,it,Ge),Me=be,Le=it,me=Ge)},setOp:function(be,it,Ge){(D!==be||Z!==it||ae!==Ge)&&(i.stencilOp(be,it,Ge),D=be,Z=it,ae=Ge)},setLocked:function(be){F=be},setClear:function(be){ve!==be&&(i.clearStencil(be),ve=be)},reset:function(){F=!1,he=null,Me=null,Le=null,me=null,D=null,Z=null,ae=null,ve=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,M=null,x=null,v=null,w=null,E=null,A=new ze(0,0,0),R=0,y=!1,S=null,T=null,L=null,N=null,H=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=$>=1):O.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=$>=2);let ee=null,se={};const fe=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Pe=new pt().fromArray(fe),Be=new pt().fromArray(xe);function Ne(F,he,Me,Le){const me=new Uint8Array(4),D=i.createTexture();i.bindTexture(F,D),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Z=0;Z<Me;Z++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(he+Z,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return D}const K={};K[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Fs),ie(!1),te(Zc),J(i.CULL_FACE),ne(Wt);function J(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function _e(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function ye(F,he){return u[F]!==he?(i.bindFramebuffer(F,he),u[F]=he,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=he),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=he),!0):!1}function pe(F,he){let Me=d,Le=!1;if(F){Me=f.get(he),Me===void 0&&(Me=[],f.set(he,Me));const me=F.textures;if(Me.length!==me.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let D=0,Z=me.length;D<Z;D++)Me[D]=i.COLOR_ATTACHMENT0+D;Me.length=me.length,Le=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,Le=!0);Le&&i.drawBuffers(Me)}function ke(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const qe={[An]:i.FUNC_ADD,[rf]:i.FUNC_SUBTRACT,[of]:i.FUNC_REVERSE_SUBTRACT};qe[af]=i.MIN,qe[lf]=i.MAX;const U={[cr]:i.ZERO,[cf]:i.ONE,[hf]:i.SRC_COLOR,[rl]:i.SRC_ALPHA,[pf]:i.SRC_ALPHA_SATURATE,[ll]:i.DST_COLOR,[al]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[df]:i.ONE_MINUS_DST_ALPHA,[mf]:i.CONSTANT_COLOR,[gf]:i.ONE_MINUS_CONSTANT_COLOR,[_f]:i.CONSTANT_ALPHA,[vf]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(F,he,Me,Le,me,D,Z,ae,ve,be){if(F===Wt){_===!0&&(_e(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),F!==Uu){if(F!==g||be!==y){if((p!==An||v!==An)&&(i.blendEquation(i.FUNC_ADD),p=An,v=An),be)switch(F){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,x=null,w=null,E=null,A.set(0,0,0),R=0,g=F,y=be}return}me=me||he,D=D||Me,Z=Z||Le,(he!==p||me!==v)&&(i.blendEquationSeparate(qe[he],qe[me]),p=he,v=me),(Me!==M||Le!==x||D!==w||Z!==E)&&(i.blendFuncSeparate(U[Me],U[Le],U[D],U[Z]),M=Me,x=Le,w=D,E=Z),(ae.equals(A)===!1||ve!==R)&&(i.blendColor(ae.r,ae.g,ae.b,ve),A.copy(ae),R=ve),g=F,y=!1}function j(F,he){F.side===It?_e(i.CULL_FACE):J(i.CULL_FACE);let Me=F.side===tn;he&&(Me=!Me),ie(Me),F.blending===Ps&&F.transparent===!1?ne(Wt):ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Le=F.stencilWrite;a.setTest(Le),Le&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Q(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function te(F){F!==tf?(J(i.CULL_FACE),F!==T&&(F===Zc?i.cullFace(i.BACK):F===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),T=F}function ue(F){F!==L&&(G&&i.lineWidth(F),L=F)}function Q(F,he,Me){F?(J(i.POLYGON_OFFSET_FILL),(N!==he||H!==Me)&&(i.polygonOffset(he,Me),N=he,H=Me)):_e(i.POLYGON_OFFSET_FILL)}function ce(F){F?J(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Fe(F){F===void 0&&(F=i.TEXTURE0+B-1),ee!==F&&(i.activeTexture(F),ee=F)}function Oe(F,he,Me){Me===void 0&&(ee===null?Me=i.TEXTURE0+B-1:Me=ee);let Le=se[Me];Le===void 0&&(Le={type:void 0,texture:void 0},se[Me]=Le),(Le.type!==F||Le.texture!==he)&&(ee!==Me&&(i.activeTexture(Me),ee=Me),i.bindTexture(F,he||K[F]),Le.type=F,Le.texture=he)}function P(){const F=se[ee];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){Pe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Pe.copy(F))}function He(F){Be.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Be.copy(F))}function Re(F,he){let Me=l.get(he);Me===void 0&&(Me=new WeakMap,l.set(he,Me));let Le=Me.get(F);Le===void 0&&(Le=i.getUniformBlockIndex(he,F.name),Me.set(F,Le))}function Se(F,he){const Le=l.get(he).get(F);c.get(he)!==Le&&(i.uniformBlockBinding(he,Le,F.__bindingPointIndex),c.set(he,Le))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ee=null,se={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,M=null,x=null,v=null,w=null,E=null,A=new ze(0,0,0),R=0,y=!1,S=null,T=null,L=null,N=null,H=null,Pe.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:_e,bindFramebuffer:ye,drawBuffers:pe,useProgram:ke,setBlending:ne,setMaterial:j,setFlipSided:ie,setCullFace:te,setLineWidth:ue,setPolygonOffset:Q,setScissorTest:ce,activeTexture:Fe,bindTexture:Oe,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:De,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:Se,texStorage2D:de,texStorage3D:we,texSubImage2D:X,texSubImage3D:oe,compressedTexSubImage2D:W,compressedTexSubImage3D:Ae,scissor:Ee,viewport:He,reset:Ye}}function Yv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new re,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return d?new OffscreenCanvas(P,b):Sr("canvas")}function _(P,b,z){let X=1;const oe=Oe(P);if((oe.width>z||oe.height>z)&&(X=z/Math.max(oe.width,oe.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const W=Math.floor(X*oe.width),Ae=Math.floor(X*oe.height);u===void 0&&(u=m(W,Ae));const de=b?m(W,Ae):u;return de.width=W,de.height=Ae,de.getContext("2d").drawImage(P,0,0,W,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+W+"x"+Ae+")."),de}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,b,z,X,oe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let W=b;if(b===i.RED&&(z===i.FLOAT&&(W=i.R32F),z===i.HALF_FLOAT&&(W=i.R16F),z===i.UNSIGNED_BYTE&&(W=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.R8UI),z===i.UNSIGNED_SHORT&&(W=i.R16UI),z===i.UNSIGNED_INT&&(W=i.R32UI),z===i.BYTE&&(W=i.R8I),z===i.SHORT&&(W=i.R16I),z===i.INT&&(W=i.R32I)),b===i.RG&&(z===i.FLOAT&&(W=i.RG32F),z===i.HALF_FLOAT&&(W=i.RG16F),z===i.UNSIGNED_BYTE&&(W=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RG8UI),z===i.UNSIGNED_SHORT&&(W=i.RG16UI),z===i.UNSIGNED_INT&&(W=i.RG32UI),z===i.BYTE&&(W=i.RG8I),z===i.SHORT&&(W=i.RG16I),z===i.INT&&(W=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RGB8UI),z===i.UNSIGNED_SHORT&&(W=i.RGB16UI),z===i.UNSIGNED_INT&&(W=i.RGB32UI),z===i.BYTE&&(W=i.RGB8I),z===i.SHORT&&(W=i.RGB16I),z===i.INT&&(W=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),z===i.UNSIGNED_INT&&(W=i.RGBA32UI),z===i.BYTE&&(W=i.RGBA8I),z===i.SHORT&&(W=i.RGBA16I),z===i.INT&&(W=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),b===i.RGBA){const Ae=oe?Fo:rt.getTransfer(X);z===i.FLOAT&&(W=i.RGBA32F),z===i.HALF_FLOAT&&(W=i.RGBA16F),z===i.UNSIGNED_BYTE&&(W=Ae===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(P,b){let z;return P?b===null||b===Zi||b===Bs?z=i.DEPTH24_STENCIL8:b===Hn?z=i.DEPTH32F_STENCIL8:b===xr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Zi||b===Bs?z=i.DEPTH_COMPONENT24:b===Hn?z=i.DEPTH_COMPONENT32F:b===xr&&(z=i.DEPTH_COMPONENT16),z}function w(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==Pn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function E(P){const b=P.target;b.removeEventListener("dispose",E),R(b),b.isVideoTexture&&h.delete(b)}function A(P){const b=P.target;b.removeEventListener("dispose",A),S(b)}function R(P){const b=n.get(P);if(b.__webglInit===void 0)return;const z=P.source,X=f.get(z);if(X){const oe=X[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&y(P),Object.keys(X).length===0&&f.delete(z)}n.remove(P)}function y(P){const b=n.get(P);i.deleteTexture(b.__webglTexture);const z=P.source,X=f.get(z);delete X[b.__cacheKey],o.memory.textures--}function S(P){const b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(b.__webglFramebuffer[X]))for(let oe=0;oe<b.__webglFramebuffer[X].length;oe++)i.deleteFramebuffer(b.__webglFramebuffer[X][oe]);else i.deleteFramebuffer(b.__webglFramebuffer[X]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[X])}else{if(Array.isArray(b.__webglFramebuffer))for(let X=0;X<b.__webglFramebuffer.length;X++)i.deleteFramebuffer(b.__webglFramebuffer[X]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let X=0;X<b.__webglColorRenderbuffer.length;X++)b.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[X]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=P.textures;for(let X=0,oe=z.length;X<oe;X++){const W=n.get(z[X]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(P)}let T=0;function L(){T=0}function N(){const P=T;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),T+=1,P}function H(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function B(P,b){const z=n.get(P);if(P.isVideoTexture&&ce(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){const X=P.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,P,b);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function G(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){K(z,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function $(P,b){const z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){K(z,P,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function O(P,b){const z=n.get(P);if(P.version>0&&z.__version!==P.version){J(z,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const ee={[Wn]:i.REPEAT,[Xi]:i.CLAMP_TO_EDGE,[vl]:i.MIRRORED_REPEAT},se={[nn]:i.NEAREST,[Sf]:i.NEAREST_MIPMAP_NEAREST,[kr]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[Yi]:i.LINEAR_MIPMAP_LINEAR},fe={[Tf]:i.NEVER,[Df]:i.ALWAYS,[wf]:i.LESS,[Zu]:i.LEQUAL,[Af]:i.EQUAL,[Pf]:i.GEQUAL,[Cf]:i.GREATER,[Rf]:i.NOTEQUAL};function xe(P,b){if(b.type===Hn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pn||b.magFilter===aa||b.magFilter===kr||b.magFilter===Yi||b.minFilter===Pn||b.minFilter===aa||b.minFilter===kr||b.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ee[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ee[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ee[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,se[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==kr&&b.minFilter!==Yi||b.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Pe(P,b){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",E));const X=b.source;let oe=f.get(X);oe===void 0&&(oe={},f.set(X,oe));const W=H(b);if(W!==P.__cacheKey){oe[W]===void 0&&(oe[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),oe[W].usedTimes++;const Ae=oe[P.__cacheKey];Ae!==void 0&&(oe[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&y(b)),P.__cacheKey=W,P.__webglTexture=oe[W].texture}return z}function Be(P,b,z){return Math.floor(Math.floor(P/z)/b)}function Ne(P,b,z,X){const W=P.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,X,b.data);else{W.sort((le,Ee)=>le.start-Ee.start);let Ae=0;for(let le=1;le<W.length;le++){const Ee=W[Ae],He=W[le],Re=Ee.start+Ee.count,Se=Be(He.start,b.width,4),Ye=Be(Ee.start,b.width,4);He.start<=Re+1&&Se===Ye&&Be(He.start+He.count-1,b.width,4)===Se?Ee.count=Math.max(Ee.count,He.start+He.count-Ee.start):(++Ae,W[Ae]=He)}W.length=Ae+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let le=0,Ee=W.length;le<Ee;le++){const He=W[le],Re=Math.floor(He.start/4),Se=Math.ceil(He.count/4),Ye=Re%b.width,F=Math.floor(Re/b.width),he=Se,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ye,F,he,Me,z,X,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function K(P,b,z){let X=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(X=i.TEXTURE_3D);const oe=Pe(P,b),W=b.source;t.bindTexture(X,P.__webglTexture,i.TEXTURE0+z);const Ae=n.get(W);if(W.version!==Ae.__version||oe===!0){t.activeTexture(i.TEXTURE0+z);const de=rt.getPrimaries(rt.workingColorSpace),we=b.colorSpace===ni?null:rt.getPrimaries(b.colorSpace),De=b.colorSpace===ni||de===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let le=_(b.image,!1,s.maxTextureSize);le=Fe(b,le);const Ee=r.convert(b.format,b.colorSpace),He=r.convert(b.type);let Re=x(b.internalFormat,Ee,He,b.colorSpace,b.isVideoTexture);xe(X,b);let Se;const Ye=b.mipmaps,F=b.isVideoTexture!==!0,he=Ae.__version===void 0||oe===!0,Me=W.dataReady,Le=w(b,le);if(b.isDepthTexture)Re=v(b.format===ks,b.type),he&&(F?t.texStorage2D(i.TEXTURE_2D,1,Re,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Re,le.width,le.height,0,Ee,He,null));else if(b.isDataTexture)if(Ye.length>0){F&&he&&t.texStorage2D(i.TEXTURE_2D,Le,Re,Ye[0].width,Ye[0].height);for(let me=0,D=Ye.length;me<D;me++)Se=Ye[me],F?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Se.width,Se.height,Ee,He,Se.data):t.texImage2D(i.TEXTURE_2D,me,Re,Se.width,Se.height,0,Ee,He,Se.data);b.generateMipmaps=!1}else F?(he&&t.texStorage2D(i.TEXTURE_2D,Le,Re,le.width,le.height),Me&&Ne(b,le,Ee,He)):t.texImage2D(i.TEXTURE_2D,0,Re,le.width,le.height,0,Ee,He,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Re,Ye[0].width,Ye[0].height,le.depth);for(let me=0,D=Ye.length;me<D;me++)if(Se=Ye[me],b.format!==Sn)if(Ee!==null)if(F){if(Me)if(b.layerUpdates.size>0){const Z=Fh(Se.width,Se.height,b.format,b.type);for(const ae of b.layerUpdates){const ve=Se.data.subarray(ae*Z/Se.data.BYTES_PER_ELEMENT,(ae+1)*Z/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,ae,Se.width,Se.height,1,Ee,ve)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,le.depth,Ee,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,Re,Se.width,Se.height,le.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,le.depth,Ee,He,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,Re,Se.width,Se.height,le.depth,0,Ee,He,Se.data)}else{F&&he&&t.texStorage2D(i.TEXTURE_2D,Le,Re,Ye[0].width,Ye[0].height);for(let me=0,D=Ye.length;me<D;me++)Se=Ye[me],b.format!==Sn?Ee!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Se.width,Se.height,Ee,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,me,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Se.width,Se.height,Ee,He,Se.data):t.texImage2D(i.TEXTURE_2D,me,Re,Se.width,Se.height,0,Ee,He,Se.data)}else if(b.isDataArrayTexture)if(F){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Re,le.width,le.height,le.depth),Me)if(b.layerUpdates.size>0){const me=Fh(le.width,le.height,b.format,b.type);for(const D of b.layerUpdates){const Z=le.data.subarray(D*me/le.data.BYTES_PER_ELEMENT,(D+1)*me/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,le.width,le.height,1,Ee,He,Z)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ee,He,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,Ee,He,le.data);else if(b.isData3DTexture)F?(he&&t.texStorage3D(i.TEXTURE_3D,Le,Re,le.width,le.height,le.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ee,He,le.data)):t.texImage3D(i.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,Ee,He,le.data);else if(b.isFramebufferTexture){if(he)if(F)t.texStorage2D(i.TEXTURE_2D,Le,Re,le.width,le.height);else{let me=le.width,D=le.height;for(let Z=0;Z<Le;Z++)t.texImage2D(i.TEXTURE_2D,Z,Re,me,D,0,Ee,He,null),me>>=1,D>>=1}}else if(Ye.length>0){if(F&&he){const me=Oe(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Le,Re,me.width,me.height)}for(let me=0,D=Ye.length;me<D;me++)Se=Ye[me],F?Me&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ee,He,Se):t.texImage2D(i.TEXTURE_2D,me,Re,Ee,He,Se);b.generateMipmaps=!1}else if(F){if(he){const me=Oe(le);t.texStorage2D(i.TEXTURE_2D,Le,Re,me.width,me.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,He,le)}else t.texImage2D(i.TEXTURE_2D,0,Re,Ee,He,le);g(b)&&p(X),Ae.__version=W.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function J(P,b,z){if(b.image.length!==6)return;const X=Pe(P,b),oe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);const W=n.get(oe);if(oe.version!==W.__version||X===!0){t.activeTexture(i.TEXTURE0+z);const Ae=rt.getPrimaries(rt.workingColorSpace),de=b.colorSpace===ni?null:rt.getPrimaries(b.colorSpace),we=b.colorSpace===ni||Ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const De=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let D=0;D<6;D++)!De&&!le?Ee[D]=_(b.image[D],!0,s.maxCubemapSize):Ee[D]=le?b.image[D].image:b.image[D],Ee[D]=Fe(b,Ee[D]);const He=Ee[0],Re=r.convert(b.format,b.colorSpace),Se=r.convert(b.type),Ye=x(b.internalFormat,Re,Se,b.colorSpace),F=b.isVideoTexture!==!0,he=W.__version===void 0||X===!0,Me=oe.dataReady;let Le=w(b,He);xe(i.TEXTURE_CUBE_MAP,b);let me;if(De){F&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ye,He.width,He.height);for(let D=0;D<6;D++){me=Ee[D].mipmaps;for(let Z=0;Z<me.length;Z++){const ae=me[Z];b.format!==Sn?Re!==null?F?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z,Ye,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z,0,0,ae.width,ae.height,Re,Se,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z,Ye,ae.width,ae.height,0,Re,Se,ae.data)}}}else{if(me=b.mipmaps,F&&he){me.length>0&&Le++;const D=Oe(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Le,Ye,D.width,D.height)}for(let D=0;D<6;D++)if(le){F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Ee[D].width,Ee[D].height,Re,Se,Ee[D].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ye,Ee[D].width,Ee[D].height,0,Re,Se,Ee[D].data);for(let Z=0;Z<me.length;Z++){const ve=me[Z].image[D].image;F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z+1,0,0,ve.width,ve.height,Re,Se,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z+1,Ye,ve.width,ve.height,0,Re,Se,ve.data)}}else{F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,0,0,Re,Se,Ee[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,0,Ye,Re,Se,Ee[D]);for(let Z=0;Z<me.length;Z++){const ae=me[Z];F?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z+1,0,0,Re,Se,ae.image[D]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+D,Z+1,Ye,Re,Se,ae.image[D])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),W.__version=oe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function _e(P,b,z,X,oe,W){const Ae=r.convert(z.format,z.colorSpace),de=r.convert(z.type),we=x(z.internalFormat,Ae,de,z.colorSpace),De=n.get(b),le=n.get(z);if(le.__renderTarget=b,!De.__hasExternalTextures){const Ee=Math.max(1,b.width>>W),He=Math.max(1,b.height>>W);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,W,we,Ee,He,b.depth,0,Ae,de,null):t.texImage2D(oe,W,we,Ee,He,0,Ae,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Q(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,oe,le.__webglTexture,0,ue(b)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,oe,le.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(P,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){const X=b.depthTexture,oe=X&&X.isDepthTexture?X.type:null,W=v(b.stencilBuffer,oe),Ae=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=ue(b);Q(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,W,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,W,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,W,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,P)}else{const X=b.textures;for(let oe=0;oe<X.length;oe++){const W=X[oe],Ae=r.convert(W.format,W.colorSpace),de=r.convert(W.type),we=x(W.internalFormat,Ae,de,W.colorSpace),De=ue(b);z&&Q(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,we,b.width,b.height):Q(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,we,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,we,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pe(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(b.depthTexture);X.__renderTarget=b,(!X.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const oe=X.__webglTexture,W=ue(b);if(b.depthTexture.format===Mr)Q(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(b.depthTexture.format===ks)Q(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function ke(P){const b=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const X=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),X){const oe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,X.removeEventListener("dispose",oe)};X.addEventListener("dispose",oe),b.__depthDisposeCallback=oe}b.__boundDepthTexture=X}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const X=P.texture.mipmaps;X&&X.length>0?pe(b.__webglFramebuffer[0],P):pe(b.__webglFramebuffer,P)}else if(z){b.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[X]),b.__webglDepthbuffer[X]===void 0)b.__webglDepthbuffer[X]=i.createRenderbuffer(),ye(b.__webglDepthbuffer[X],P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,W)}}else{const X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ye(b.__webglDepthbuffer,P,!1);else{const oe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(P,b,z){const X=n.get(P);b!==void 0&&_e(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ke(P)}function U(P){const b=P.texture,z=n.get(P),X=n.get(b);P.addEventListener("dispose",A);const oe=P.textures,W=P.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=b.version,o.memory.textures++),W){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let we=0;we<b.mipmaps.length;we++)z.__webglFramebuffer[de][we]=i.createFramebuffer()}else z.__webglFramebuffer[de]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)z.__webglFramebuffer[de]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let de=0,we=oe.length;de<we;de++){const De=n.get(oe[de]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Q(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const we=oe[de];z.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const De=r.convert(we.format,we.colorSpace),le=r.convert(we.type),Ee=x(we.internalFormat,De,le,we.colorSpace,P.isXRRenderTarget===!0),He=ue(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ee,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,z.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),xe(i.TEXTURE_CUBE_MAP,b);for(let de=0;de<6;de++)if(b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)_e(z.__webglFramebuffer[de][we],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,we);else _e(z.__webglFramebuffer[de],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let de=0,we=oe.length;de<we;de++){const De=oe[de],le=n.get(De);let Ee=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ee=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,le.__webglTexture),xe(Ee,De),_e(z.__webglFramebuffer,P,De,i.COLOR_ATTACHMENT0+de,Ee,0),g(De)&&p(Ee)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,X.__webglTexture),xe(de,b),b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)_e(z.__webglFramebuffer[we],P,b,i.COLOR_ATTACHMENT0,de,we);else _e(z.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,de,0);g(b)&&p(de),t.unbindTexture()}P.depthBuffer&&ke(P)}function ne(P){const b=P.textures;for(let z=0,X=b.length;z<X;z++){const oe=b[z];if(g(oe)){const W=M(P),Ae=n.get(oe).__webglTexture;t.bindTexture(W,Ae),p(W),t.unbindTexture()}}}const j=[],ie=[];function te(P){if(P.samples>0){if(Q(P)===!1){const b=P.textures,z=P.width,X=P.height;let oe=i.COLOR_BUFFER_BIT;const W=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(P),de=b.length>1;if(de)for(let De=0;De<b.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const we=P.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let De=0;De<b.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[De]);const le=n.get(b[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,oe,i.NEAREST),c===!0&&(j.length=0,ie.length=0,j.push(i.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(j.push(W),ie.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let De=0;De<b.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[De]);const le=n.get(b[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ue(P){return Math.min(s.maxSamples,P.samples)}function Q(P){const b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(P){const b=o.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Fe(P,b){const z=P.colorSpace,X=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Hs&&z!==ni&&(rt.getTransfer(z)===ct?(X!==Sn||oe!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=O,this.rebindTextures=qe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Q}function qv(i,e){function t(n,s=ni){let r;const o=rt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===bi)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===qu)return i.RGB;if(n===Sn)return i.RGBA;if(n===Mr)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===dc)return i.RED_INTEGER;if(n===ju)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===wo||n===Ao||n===Co||n===Ro)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===Ml||n===Sl||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bl||n===El||n===Tl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bl||n===El)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===zl||n===Bl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Il)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ul)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kl||n===Hl||n===Vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===kl)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gl||n===Wl||n===Xl||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zv=`
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

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ad(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:jv,fragmentShader:Zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends Qi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new Kv,p={},M=t.getContextAttributes();let x=null,v=null;const w=[],E=[],A=new re;let R=null;const y=new hn;y.viewport=new pt;const S=new hn;S.viewport=new pt;const T=[y,S],L=new gm;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=w[K];return J===void 0&&(J=new Ca,w[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=w[K];return J===void 0&&(J=new Ca,w[K]=J),J.getGripSpace()},this.getHand=function(K){let J=w[K];return J===void 0&&(J=new Ca,w[K]=J),J.getHandSpace()};function B(K){const J=E.indexOf(K.inputSource);if(J===-1)return;const _e=w[J];_e!==void 0&&(_e.update(K.inputSource,K.frame,l||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let K=0;K<w.length;K++){const J=E[K];J!==null&&(E[K]=null,w[K].disconnect(J))}N=null,H=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(x),d=null,f=null,u=null,s=null,v=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ye=null,pe=null;M.depth&&(pe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=M.stencil?ks:Mr,ye=M.stencil?Bs:Zi);const ke={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Xn(f.textureWidth,f.textureHeight,{format:Sn,type:Ln,depthTexture:new Mc(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ne.setContext(s),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(K){for(let J=0;J<K.removed.length;J++){const _e=K.removed[J],ye=E.indexOf(_e);ye>=0&&(E[ye]=null,w[ye].disconnect(_e))}for(let J=0;J<K.added.length;J++){const _e=K.added[J];let ye=E.indexOf(_e);if(ye===-1){for(let ke=0;ke<w.length;ke++)if(ke>=E.length){E.push(_e),ye=ke;break}else if(E[ke]===null){E[ke]=_e,ye=ke;break}if(ye===-1)break}const pe=w[ye];pe&&pe.connect(_e)}}const O=new I,ee=new I;function se(K,J,_e){O.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const ye=O.distanceTo(ee),pe=J.projectionMatrix.elements,ke=_e.projectionMatrix.elements,qe=pe[14]/(pe[10]-1),U=pe[14]/(pe[10]+1),ne=(pe[9]+1)/pe[5],j=(pe[9]-1)/pe[5],ie=(pe[8]-1)/pe[0],te=(ke[8]+1)/ke[0],ue=qe*ie,Q=qe*te,ce=ye/(-ie+te),Fe=ce*-ie;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Fe),K.translateZ(ce),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),pe[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Oe=qe+ce,P=U+ce,b=ue-Fe,z=Q+(ye-Fe),X=ne*U/P*Oe,oe=j*U/P*Oe;K.projectionMatrix.makePerspective(b,z,X,oe,Oe,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let J=K.near,_e=K.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),L.near=S.near=y.near=J,L.far=S.far=y.far=_e,(N!==L.near||H!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,H=L.far),L.layers.mask=K.layers.mask|6,y.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const ye=K.parent,pe=L.cameras;fe(L,ye);for(let ke=0;ke<pe.length;ke++)fe(pe[ke],ye);pe.length===2?se(L,y,S):L.projectionMatrix.copy(y.projectionMatrix),xe(K,L,ye)};function xe(K,J,_e){_e===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(K){return p[K]};let Pe=null;function Be(K,J){if(h=J.getViewerPose(l||o),m=J,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ye=!1;_e.length!==L.cameras.length&&(L.cameras.length=0,ye=!0);for(let U=0;U<_e.length;U++){const ne=_e[U];let j=null;if(d!==null)j=d.getViewport(ne);else{const te=u.getViewSubImage(f,ne);j=te.viewport,U===0&&(e.setRenderTargetTextures(v,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(v))}let ie=T[U];ie===void 0&&(ie=new hn,ie.layers.enable(U),ie.viewport=new pt,T[U]=ie),ie.matrix.fromArray(ne.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ne.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(j.x,j.y,j.width,j.height),U===0&&(L.matrix.copy(ie.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ye===!0&&L.cameras.push(ie)}const pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const U=u.getDepthInformation(_e[0]);U&&U.isValid&&U.texture&&g.init(U,s.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let U=0;U<_e.length;U++){const ne=_e[U].camera;if(ne){let j=p[ne];j||(j=new ad,p[ne]=j);const ie=u.getCameraImage(ne);j.sourceTexture=ie}}}}for(let _e=0;_e<w.length;_e++){const ye=E[_e],pe=w[_e];ye!==null&&pe!==void 0&&pe.update(ye,J,l||o)}Pe&&Pe(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Ne=new vd;Ne.setAnimationLoop(Be),this.setAnimationLoop=function(K){Pe=K},this.dispose=function(){}}}const ki=new In,Jv=new lt;function Qv(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,td(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,x):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,v=M.envMapRotation;x&&(g.envMap.value=x,ki.copy(v),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(ki)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function e1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function l(M,x){let v=s[M.id];v===void 0&&(m(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",g));const w=x.program;n.updateUBOMapping(M,w);const E=e.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){const x=u();M.__bindingPointIndex=x;const v=i.createBuffer(),w=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],v=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=v.length;E<A;E++){const R=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,S=R.length;y<S;y++){const T=R[y];if(d(T,E,y,w)===!0){const L=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let H=0;for(let B=0;B<N.length;B++){const G=N[B],$=_(G);typeof G=="number"||typeof G=="boolean"?(T.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,L+H,T.__data)):G.isMatrix3?(T.__data[0]=G.elements[0],T.__data[1]=G.elements[1],T.__data[2]=G.elements[2],T.__data[3]=0,T.__data[4]=G.elements[3],T.__data[5]=G.elements[4],T.__data[6]=G.elements[5],T.__data[7]=0,T.__data[8]=G.elements[6],T.__data[9]=G.elements[7],T.__data[10]=G.elements[8],T.__data[11]=0):(G.toArray(T.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,v,w){const E=M.value,A=x+"_"+v;if(w[A]===void 0)return typeof E=="number"||typeof E=="boolean"?w[A]=E:w[A]=E.clone(),!0;{const R=w[A];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return w[A]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function m(M){const x=M.uniforms;let v=0;const w=16;for(let A=0,R=x.length;A<R;A++){const y=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,T=y.length;S<T;S++){const L=y[S],N=Array.isArray(L.value)?L.value:[L.value];for(let H=0,B=N.length;H<B;H++){const G=N[H],$=_(G),O=v%w,ee=O%$.boundary,se=O+ee;v+=ee,se!==0&&w-se<$.storage&&(v+=w-se),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=$.storage}}}const E=v%w;return E>0&&(v+=w-E),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class t1{constructor(e={}){const{canvas:t=jf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const M=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=_t;let E=0,A=0,R=null,y=-1,S=null;const T=new pt,L=new pt;let N=null;const H=new ze(0);let B=0,G=t.width,$=t.height,O=1,ee=null,se=null;const fe=new pt(0,0,G,$),xe=new pt(0,0,G,$);let Pe=!1;const Be=new xc;let Ne=!1,K=!1;const J=new lt,_e=new I,ye=new pt,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function qe(){return R===null?O:1}let U=n;function ne(C,k){return t.getContext(C,k)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){const k="webgl2";if(U=ne(k,C),U===null)throw ne(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let j,ie,te,ue,Q,ce,Fe,Oe,P,b,z,X,oe,W,Ae,de,we,De,le,Ee,He,Re,Se,Ye;function F(){j=new u_(U),j.init(),Re=new qv(U,j),ie=new s_(U,j,e,Re),te=new Xv(U,j),ie.reversedDepthBuffer&&f&&te.buffers.depth.setReversed(!0),ue=new p_(U),Q=new Lv,ce=new Yv(U,j,te,Q,ie,Re,ue),Fe=new o_(v),Oe=new h_(v),P=new Mm(U),Se=new n_(U,P),b=new d_(U,P,ue,Se),z=new g_(U,b,P,ue),le=new m_(U,ie,ce),de=new r_(Q),X=new Dv(v,Fe,Oe,j,ie,Se,de),oe=new Qv(v,Q),W=new Uv,Ae=new kv(j),De=new t_(v,Fe,Oe,te,z,d,c),we=new Gv(v,z,ie),Ye=new e1(U,ue,ie,te),Ee=new i_(U,j,ue),He=new f_(U,j,ue),ue.programs=X.programs,v.capabilities=ie,v.extensions=j,v.properties=Q,v.renderLists=W,v.shadowMap=we,v.state=te,v.info=ue}F();const he=new $v(v,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=j.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=j.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(G,$,!1))},this.getSize=function(C){return C.set(G,$)},this.setSize=function(C,k,Y=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,$=k,t.width=Math.floor(C*O),t.height=Math.floor(k*O),Y===!0&&(t.style.width=C+"px",t.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(G*O,$*O).floor()},this.setDrawingBufferSize=function(C,k,Y){G=C,$=k,O=Y,t.width=Math.floor(C*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(fe)},this.setViewport=function(C,k,Y,q){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,k,Y,q),te.viewport(T.copy(fe).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,k,Y,q){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,k,Y,q),te.scissor(L.copy(xe).multiplyScalar(O).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(C){te.setScissorTest(Pe=C)},this.setOpaqueSort=function(C){ee=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,Y=!0){let q=0;if(C){let V=!1;if(R!==null){const ge=R.texture.format;V=ge===pc||ge===fc||ge===dc}if(V){const ge=R.texture.type,Ce=ge===Ln||ge===Zi||ge===xr||ge===Bs||ge===cc||ge===hc,Ue=De.getClearColor(),Ie=De.getClearAlpha(),je=Ue.r,Ke=Ue.g,Ve=Ue.b;Ce?(m[0]=je,m[1]=Ke,m[2]=Ve,m[3]=Ie,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=je,_[1]=Ke,_[2]=Ve,_[3]=Ie,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}k&&(q|=U.DEPTH_BUFFER_BIT),Y&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",me,!1),De.dispose(),W.dispose(),Ae.dispose(),Q.dispose(),Fe.dispose(),Oe.dispose(),z.dispose(),Se.dispose(),Ye.dispose(),X.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ge),he.removeEventListener("sessionend",tt),nt.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const C=ue.autoReset,k=we.enabled,Y=we.autoUpdate,q=we.needsUpdate,V=we.type;F(),ue.autoReset=C,we.enabled=k,we.autoUpdate=Y,we.needsUpdate=q,we.type=V}function me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function D(C){const k=C.target;k.removeEventListener("dispose",D),Z(k)}function Z(C){ae(C),Q.remove(C)}function ae(C){const k=Q.get(C).programs;k!==void 0&&(k.forEach(function(Y){X.releaseProgram(Y)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,Y,q,V,ge){k===null&&(k=pe);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Br(C,k,Y,q,V);te.setMaterial(q,Ce);let Ie=Y.index,je=1;if(q.wireframe===!0){if(Ie=b.getWireframeAttribute(Y),Ie===void 0)return;je=2}const Ke=Y.drawRange,Ve=Y.attributes.position;let st=Ke.start*je,dt=(Ke.start+Ke.count)*je;ge!==null&&(st=Math.max(st,ge.start*je),dt=Math.min(dt,(ge.start+ge.count)*je)),Ie!==null?(st=Math.max(st,0),dt=Math.min(dt,Ie.count)):Ve!=null&&(st=Math.max(st,0),dt=Math.min(dt,Ve.count));const Tt=dt-st;if(Tt<0||Tt===1/0)return;Se.setup(V,q,Ue,Y,Ie);let xt,gt=Ee;if(Ie!==null&&(xt=P.get(Ie),gt=He,gt.setIndex(xt)),V.isMesh)q.wireframe===!0?(te.setLineWidth(q.wireframeLinewidth*qe()),gt.setMode(U.LINES)):gt.setMode(U.TRIANGLES);else if(V.isLine){let Xe=q.linewidth;Xe===void 0&&(Xe=1),te.setLineWidth(Xe*qe()),V.isLineSegments?gt.setMode(U.LINES):V.isLineLoop?gt.setMode(U.LINE_LOOP):gt.setMode(U.LINE_STRIP)}else V.isPoints?gt.setMode(U.POINTS):V.isSprite&&gt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))gt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Xe=V._multiDrawStarts,St=V._multiDrawCounts,ot=V._multiDrawCount,fn=Ie?P.get(Ie).bytesPerElement:1,as=Q.get(q).currentProgram.getUniforms();for(let pn=0;pn<ot;pn++)as.setValue(U,"_gl_DrawID",pn),gt.render(Xe[pn]/fn,St[pn])}else if(V.isInstancedMesh)gt.renderInstances(st,Tt,V.count);else if(Y.isInstancedBufferGeometry){const Xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,St=Math.min(Y.instanceCount,Xe);gt.renderInstances(st,Tt,St)}else gt.render(st,Tt)};function ve(C,k,Y){C.transparent===!0&&C.side===It&&C.forceSinglePass===!1?(C.side=tn,C.needsUpdate=!0,Fn(C,k,Y),C.side=yi,C.needsUpdate=!0,Fn(C,k,Y),C.side=It):Fn(C,k,Y)}this.compile=function(C,k,Y=null){Y===null&&(Y=C),p=Ae.get(Y),p.init(k),x.push(p),Y.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),C!==Y&&C.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const q=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let Ce=0;Ce<ge.length;Ce++){const Ue=ge[Ce];ve(Ue,Y,V),q.add(Ue)}else ve(ge,Y,V),q.add(ge)}),p=x.pop(),q},this.compileAsync=function(C,k,Y=null){const q=this.compile(C,k,Y);return new Promise(V=>{function ge(){if(q.forEach(function(Ce){Q.get(Ce).currentProgram.isReady()&&q.delete(Ce)}),q.size===0){V(C);return}setTimeout(ge,10)}j.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let be=null;function it(C){be&&be(C)}function Ge(){nt.stop()}function tt(){nt.start()}const nt=new vd;nt.setAnimationLoop(it),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(C){be=C,he.setAnimationLoop(C),C===null?nt.stop():nt.start()},he.addEventListener("sessionstart",Ge),he.addEventListener("sessionend",tt),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,k,R),p=Ae.get(C,x.length),p.init(k),x.push(p),J.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Be.setFromProjectionMatrix(J,Vn,k.reversedDepth),K=this.localClippingEnabled,Ne=de.init(this.clippingPlanes,K),g=W.get(C,M.length),g.init(),M.push(g),he.enabled===!0&&he.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&mt(ge,k,-1/0,v.sortObjects)}mt(C,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ee,se),ke=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ke&&De.addToRenderList(g,C),this.info.render.frame++,Ne===!0&&de.beginShadows();const Y=p.state.shadowsArray;we.render(Y,C,k),Ne===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,V=g.transmissive;if(p.setupLights(),k.isArrayCamera){const ge=k.cameras;if(V.length>0)for(let Ce=0,Ue=ge.length;Ce<Ue;Ce++){const Ie=ge[Ce];jt(q,V,C,Ie)}ke&&De.render(C);for(let Ce=0,Ue=ge.length;Ce<Ue;Ce++){const Ie=ge[Ce];ut(g,C,Ie,Ie.viewport)}}else V.length>0&&jt(q,V,C,k),ke&&De.render(C),ut(g,C,k);R!==null&&A===0&&(ce.updateMultisampleRenderTarget(R),ce.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,k),Se.resetDefaultState(),y=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],Ne===!0&&de.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function mt(C,k,Y,q){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)Y=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Be.intersectsSprite(C)){q&&ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const Ce=z.update(C),Ue=C.material;Ue.visible&&g.push(C,Ce,Ue,Y,ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Be.intersectsObject(C))){const Ce=z.update(C),Ue=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ye.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ye.copy(Ce.boundingSphere.center)),ye.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(Ue)){const Ie=Ce.groups;for(let je=0,Ke=Ie.length;je<Ke;je++){const Ve=Ie[je],st=Ue[Ve.materialIndex];st&&st.visible&&g.push(C,Ce,st,Y,ye.z,Ve)}}else Ue.visible&&g.push(C,Ce,Ue,Y,ye.z,null)}}const ge=C.children;for(let Ce=0,Ue=ge.length;Ce<Ue;Ce++)mt(ge[Ce],k,Y,q)}function ut(C,k,Y,q){const V=C.opaque,ge=C.transmissive,Ce=C.transparent;p.setupLightsView(Y),Ne===!0&&de.setGlobalState(v.clippingPlanes,Y),q&&te.viewport(T.copy(q)),V.length>0&&dn(V,k,Y),ge.length>0&&dn(ge,k,Y),Ce.length>0&&dn(Ce,k,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function jt(C,k,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Xn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?bi:Ln,minFilter:Yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ge=p.state.transmissionRenderTarget[q.id],Ce=q.viewport||T;ge.setSize(Ce.z*v.transmissionResolutionScale,Ce.w*v.transmissionResolutionScale);const Ue=v.getRenderTarget(),Ie=v.getActiveCubeFace(),je=v.getActiveMipmapLevel();v.setRenderTarget(ge),v.getClearColor(H),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),ke&&De.render(Y);const Ke=v.toneMapping;v.toneMapping=Mi;const Ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Ne===!0&&de.setGlobalState(v.clippingPlanes,q),dn(C,Y,q),ce.updateMultisampleRenderTarget(ge),ce.updateRenderTargetMipmap(ge),j.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let dt=0,Tt=k.length;dt<Tt;dt++){const xt=k[dt],gt=xt.object,Xe=xt.geometry,St=xt.material,ot=xt.group;if(St.side===It&&gt.layers.test(q.layers)){const fn=St.side;St.side=tn,St.needsUpdate=!0,li(gt,Y,q,Xe,St,ot),St.side=fn,St.needsUpdate=!0,st=!0}}st===!0&&(ce.updateMultisampleRenderTarget(ge),ce.updateRenderTargetMipmap(ge))}v.setRenderTarget(Ue,Ie,je),v.setClearColor(H,B),Ve!==void 0&&(q.viewport=Ve),v.toneMapping=Ke}function dn(C,k,Y){const q=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ge=C.length;V<ge;V++){const Ce=C[V],Ue=Ce.object,Ie=Ce.geometry,je=Ce.group;let Ke=Ce.material;Ke.allowOverride===!0&&q!==null&&(Ke=q),Ue.layers.test(Y.layers)&&li(Ue,k,Y,Ie,Ke,je)}}function li(C,k,Y,q,V,ge){C.onBeforeRender(v,k,Y,q,V,ge),C.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(v,k,Y,q,C,ge),V.transparent===!0&&V.side===It&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,v.renderBufferDirect(Y,k,q,V,C,ge),V.side=yi,V.needsUpdate=!0,v.renderBufferDirect(Y,k,q,V,C,ge),V.side=It):v.renderBufferDirect(Y,k,q,V,C,ge),C.onAfterRender(v,k,Y,q,V,ge)}function Fn(C,k,Y){k.isScene!==!0&&(k=pe);const q=Q.get(C),V=p.state.lights,ge=p.state.shadowsArray,Ce=V.state.version,Ue=X.getParameters(C,V.state,ge,k,Y),Ie=X.getProgramCacheKey(Ue);let je=q.programs;q.environment=C.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(C.isMeshStandardMaterial?Oe:Fe).get(C.envMap||q.environment),q.envMapRotation=q.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,je===void 0&&(C.addEventListener("dispose",D),je=new Map,q.programs=je);let Ke=je.get(Ie);if(Ke!==void 0){if(q.currentProgram===Ke&&q.lightsStateVersion===Ce)return Ii(C,Ue),Ke}else Ue.uniforms=X.getUniforms(C),C.onBeforeCompile(Ue,v),Ke=X.acquireProgram(Ue,Ie),je.set(Ie,Ke),q.uniforms=Ue.uniforms;const Ve=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=de.uniform),Ii(C,Ue),q.needsLights=$d(C),q.lightsStateVersion=Ce,q.needsLights&&(Ve.ambientLightColor.value=V.state.ambient,Ve.lightProbe.value=V.state.probe,Ve.directionalLights.value=V.state.directional,Ve.directionalLightShadows.value=V.state.directionalShadow,Ve.spotLights.value=V.state.spot,Ve.spotLightShadows.value=V.state.spotShadow,Ve.rectAreaLights.value=V.state.rectArea,Ve.ltc_1.value=V.state.rectAreaLTC1,Ve.ltc_2.value=V.state.rectAreaLTC2,Ve.pointLights.value=V.state.point,Ve.pointLightShadows.value=V.state.pointShadow,Ve.hemisphereLights.value=V.state.hemi,Ve.directionalShadowMap.value=V.state.directionalShadowMap,Ve.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ve.spotShadowMap.value=V.state.spotShadowMap,Ve.spotLightMatrix.value=V.state.spotLightMatrix,Ve.spotLightMap.value=V.state.spotLightMap,Ve.pointShadowMap.value=V.state.pointShadowMap,Ve.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Ke,q.uniformsList=null,Ke}function Pt(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Po.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Ii(C,k){const Y=Q.get(C);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Br(C,k,Y,q,V){k.isScene!==!0&&(k=pe),ce.resetTextureUnits();const ge=k.fog,Ce=q.isMeshStandardMaterial?k.environment:null,Ue=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Hs,Ie=(q.isMeshStandardMaterial?Oe:Fe).get(q.envMap||Ce),je=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ke=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ve=!!Y.morphAttributes.position,st=!!Y.morphAttributes.normal,dt=!!Y.morphAttributes.color;let Tt=Mi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=v.toneMapping);const xt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=xt!==void 0?xt.length:0,Xe=Q.get(q),St=p.state.lights;if(Ne===!0&&(K===!0||C!==S)){const Jt=C===S&&q.id===y;de.setState(q,C,Jt)}let ot=!1;q.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==St.state.version||Xe.outputColorSpace!==Ue||V.isBatchedMesh&&Xe.batching===!1||!V.isBatchedMesh&&Xe.batching===!0||V.isBatchedMesh&&Xe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Xe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Xe.instancing===!1||!V.isInstancedMesh&&Xe.instancing===!0||V.isSkinnedMesh&&Xe.skinning===!1||!V.isSkinnedMesh&&Xe.skinning===!0||V.isInstancedMesh&&Xe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Xe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Xe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Xe.instancingMorph===!1&&V.morphTexture!==null||Xe.envMap!==Ie||q.fog===!0&&Xe.fog!==ge||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==de.numPlanes||Xe.numIntersection!==de.numIntersection)||Xe.vertexAlphas!==je||Xe.vertexTangents!==Ke||Xe.morphTargets!==Ve||Xe.morphNormals!==st||Xe.morphColors!==dt||Xe.toneMapping!==Tt||Xe.morphTargetsCount!==gt)&&(ot=!0):(ot=!0,Xe.__version=q.version);let fn=Xe.currentProgram;ot===!0&&(fn=Fn(q,k,V));let as=!1,pn=!1,Qs=!1;const yt=fn.getUniforms(),_n=Xe.uniforms;if(te.useProgram(fn.program)&&(as=!0,pn=!0,Qs=!0),q.id!==y&&(y=q.id,pn=!0),as||S!==C){te.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",C.projectionMatrix),yt.setValue(U,"viewMatrix",C.matrixWorldInverse);const ln=yt.map.cameraPosition;ln!==void 0&&ln.setValue(U,_e.setFromMatrixPosition(C.matrixWorld)),ie.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,pn=!0,Qs=!0)}if(V.isSkinnedMesh){yt.setOptional(U,V,"bindMatrix"),yt.setOptional(U,V,"bindMatrixInverse");const Jt=V.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),yt.setValue(U,"boneTexture",Jt.boneTexture,ce))}V.isBatchedMesh&&(yt.setOptional(U,V,"batchingTexture"),yt.setValue(U,"batchingTexture",V._matricesTexture,ce),yt.setOptional(U,V,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",V._indirectTexture,ce),yt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",V._colorsTexture,ce));const vn=Y.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&le.update(V,Y,fn),(pn||Xe.receiveShadow!==V.receiveShadow)&&(Xe.receiveShadow=V.receiveShadow,yt.setValue(U,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(_n.envMap.value=Ie,_n.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),pn&&(yt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Kd(_n,Qs),ge&&q.fog===!0&&oe.refreshFogUniforms(_n,ge),oe.refreshMaterialUniforms(_n,q,O,$,p.state.transmissionRenderTarget[C.id]),Po.upload(U,Pt(Xe),_n,ce)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Po.upload(U,Pt(Xe),_n,ce),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(U,"center",V.center),yt.setValue(U,"modelViewMatrix",V.modelViewMatrix),yt.setValue(U,"normalMatrix",V.normalMatrix),yt.setValue(U,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Jt=q.uniformsGroups;for(let ln=0,oa=Jt.length;ln<oa;ln++){const Ui=Jt[ln];Ye.update(Ui,fn),Ye.bind(Ui,fn)}}return fn}function Kd(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function $d(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,k,Y){const q=Q.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Q.get(C.texture).__webglTexture=k,Q.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const Y=Q.get(C);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Jd=U.createFramebuffer();this.setRenderTarget=function(C,k=0,Y=0){R=C,E=k,A=Y;let q=!0,V=null,ge=!1,Ce=!1;if(C){const Ie=Q.get(C);if(Ie.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(Ie.__webglFramebuffer===void 0)ce.setupRenderTarget(C);else if(Ie.__hasExternalTextures)ce.rebindTextures(C,Q.get(C.texture).__webglTexture,Q.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ve=C.depthTexture;if(Ie.__boundDepthTexture!==Ve){if(Ve!==null&&Q.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(C)}}const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const Ke=Q.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ke[k])?V=Ke[k][Y]:V=Ke[k],ge=!0):C.samples>0&&ce.useMultisampledRTT(C)===!1?V=Q.get(C).__webglMultisampledFramebuffer:Array.isArray(Ke)?V=Ke[Y]:V=Ke,T.copy(C.viewport),L.copy(C.scissor),N=C.scissorTest}else T.copy(fe).multiplyScalar(O).floor(),L.copy(xe).multiplyScalar(O).floor(),N=Pe;if(Y!==0&&(V=Jd),te.bindFramebuffer(U.FRAMEBUFFER,V)&&q&&te.drawBuffers(C,V),te.viewport(T),te.scissor(L),te.setScissorTest(N),ge){const Ie=Q.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,Y)}else if(Ce){const Ie=k;for(let je=0;je<C.textures.length;je++){const Ke=Q.get(C.textures[je]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+je,Ke.__webglTexture,Y,Ie)}}else if(C!==null&&Y!==0){const Ie=Q.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,Y)}y=-1},this.readRenderTargetPixels=function(C,k,Y,q,V,ge,Ce,Ue=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){te.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const je=C.textures[Ue],Ke=je.format,Ve=je.type;if(!ie.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-q&&Y>=0&&Y<=C.height-V&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ue),U.readPixels(k,Y,q,V,Re.convert(Ke),Re.convert(Ve),ge))}finally{const je=R!==null?Q.get(R).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(C,k,Y,q,V,ge,Ce,Ue=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Q.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(k>=0&&k<=C.width-q&&Y>=0&&Y<=C.height-V){te.bindFramebuffer(U.FRAMEBUFFER,Ie);const je=C.textures[Ue],Ke=je.format,Ve=je.type;if(!ie.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.bufferData(U.PIXEL_PACK_BUFFER,ge.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ue),U.readPixels(k,Y,q,V,Re.convert(Ke),Re.convert(Ve),0);const dt=R!==null?Q.get(R).__webglFramebuffer:null;te.bindFramebuffer(U.FRAMEBUFFER,dt);const Tt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zf(U,Tt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,st),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ge),U.deleteBuffer(st),U.deleteSync(Tt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,Y=0){const q=Math.pow(2,-Y),V=Math.floor(C.image.width*q),ge=Math.floor(C.image.height*q),Ce=k!==null?k.x:0,Ue=k!==null?k.y:0;ce.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ce,Ue,V,ge),te.unbindTexture()};const Qd=U.createFramebuffer(),ef=U.createFramebuffer();this.copyTextureToTexture=function(C,k,Y=null,q=null,V=0,ge=null){ge===null&&(V!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=V,V=0):ge=0);let Ce,Ue,Ie,je,Ke,Ve,st,dt,Tt;const xt=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(Y!==null)Ce=Y.max.x-Y.min.x,Ue=Y.max.y-Y.min.y,Ie=Y.isBox3?Y.max.z-Y.min.z:1,je=Y.min.x,Ke=Y.min.y,Ve=Y.isBox3?Y.min.z:0;else{const vn=Math.pow(2,-V);Ce=Math.floor(xt.width*vn),Ue=Math.floor(xt.height*vn),C.isDataArrayTexture?Ie=xt.depth:C.isData3DTexture?Ie=Math.floor(xt.depth*vn):Ie=1,je=0,Ke=0,Ve=0}q!==null?(st=q.x,dt=q.y,Tt=q.z):(st=0,dt=0,Tt=0);const gt=Re.convert(k.format),Xe=Re.convert(k.type);let St;k.isData3DTexture?(ce.setTexture3D(k,0),St=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ce.setTexture2DArray(k,0),St=U.TEXTURE_2D_ARRAY):(ce.setTexture2D(k,0),St=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const ot=U.getParameter(U.UNPACK_ROW_LENGTH),fn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),as=U.getParameter(U.UNPACK_SKIP_PIXELS),pn=U.getParameter(U.UNPACK_SKIP_ROWS),Qs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);const yt=C.isDataArrayTexture||C.isData3DTexture,_n=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const vn=Q.get(C),Jt=Q.get(k),ln=Q.get(vn.__renderTarget),oa=Q.get(Jt.__renderTarget);te.bindFramebuffer(U.READ_FRAMEBUFFER,ln.__webglFramebuffer),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let Ui=0;Ui<Ie;Ui++)yt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(C).__webglTexture,V,Ve+Ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Q.get(k).__webglTexture,ge,Tt+Ui)),U.blitFramebuffer(je,Ke,Ce,Ue,st,dt,Ce,Ue,U.DEPTH_BUFFER_BIT,U.NEAREST);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||Q.has(C)){const vn=Q.get(C),Jt=Q.get(k);te.bindFramebuffer(U.READ_FRAMEBUFFER,Qd),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,ef);for(let ln=0;ln<Ie;ln++)yt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,V,Ve+ln):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,V),_n?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Jt.__webglTexture,ge,Tt+ln):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Jt.__webglTexture,ge),V!==0?U.blitFramebuffer(je,Ke,Ce,Ue,st,dt,Ce,Ue,U.COLOR_BUFFER_BIT,U.NEAREST):_n?U.copyTexSubImage3D(St,ge,st,dt,Tt+ln,je,Ke,Ce,Ue):U.copyTexSubImage2D(St,ge,st,dt,je,Ke,Ce,Ue);te.bindFramebuffer(U.READ_FRAMEBUFFER,null),te.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _n?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(St,ge,st,dt,Tt,Ce,Ue,Ie,gt,Xe,xt.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(St,ge,st,dt,Tt,Ce,Ue,Ie,gt,xt.data):U.texSubImage3D(St,ge,st,dt,Tt,Ce,Ue,Ie,gt,Xe,xt):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ge,st,dt,Ce,Ue,gt,Xe,xt.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ge,st,dt,xt.width,xt.height,gt,xt.data):U.texSubImage2D(U.TEXTURE_2D,ge,st,dt,Ce,Ue,gt,Xe,xt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,as),U.pixelStorei(U.UNPACK_SKIP_ROWS,pn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qs),ge===0&&k.generateMipmaps&&U.generateMipmap(St),te.unbindTexture()},this.initRenderTarget=function(C){Q.get(C).__webglFramebuffer===void 0&&ce.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ce.setTextureCube(C,0):C.isData3DTexture?ce.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ce.setTexture2DArray(C,0):ce.setTexture2D(C,0),te.unbindTexture()},this.resetState=function(){E=0,A=0,R=null,te.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}function bd(i){const{width:e,height:t}=i.canvas;i.fillStyle="#081c1840";for(let r=1;r<t;r+=4)i.fillRect(0,r,e,1);const n=i.createRadialGradient(e*.47,t*.43,t*.28,e*.49,t*.48,e*.61);n.addColorStop(0,"#06231b00"),n.addColorStop(1,"#03150fc4"),i.fillStyle=n,i.fillRect(0,0,e,t);const s=i.createLinearGradient(0,0,e*.5,t*.58);s.addColorStop(0,"#e3f6d33d"),s.addColorStop(.38,"#cce8cd09"),s.addColorStop(1,"#d5f3cf00"),i.fillStyle=s,i.beginPath(),i.moveTo(0,0),i.lineTo(e*.49,0),i.lineTo(e*.12,t),i.lineTo(0,t),i.fill()}function n1(){const i=document.createElement("canvas");i.width=512,i.height=448;const e=i.getContext("2d"),t=new Gt(i);t.colorSpace=_t;function n(s,r){const o=(a,c,l,h,u)=>{e.fillStyle="#3b6555",e.fillRect(a,c,l,h),e.fillStyle="#ebebc7",e.fillRect(a+3,c+3,l-6,h-6),e.fillStyle=u,e.fillRect(a+6,c+6,l-11,h-11)};e.fillStyle="#78a387",e.fillRect(0,0,512,448),o(15,17,482,35,"#c3ceb1"),e.fillStyle="#345341",e.font="18px monospace",e.fillText("DOISH OS",31,41);for(let a=0;a<3;a++){const c=74+a*73;o(26,c,30,25,"#e2dfb6"),e.fillStyle="#dce2bf",e.font="12px monospace",e.fillText(["HOME","MUSIC","FILES"][a],22,c+41)}o(128,64,350,291,"#e4e1bf"),o(136,72,335,31,s?"#8eb98c":"#a9c2a1"),e.fillStyle="#314b3c",e.font='17px "Microsoft YaHei",sans-serif',e.fillText("光盘资料库",147,94),e.fillStyle="#6c775d",e.font="12px monospace",e.fillText("FILE  EDIT  VIEW",149,125);for(let a=0;a<4;a++){const c=160+a*75;o(c,157,30,26,"#aeb88e"),e.fillStyle="#695d40",e.fillRect(c+7,166,14,4),e.fillRect(c+8,174,12,3),e.font="10px monospace",e.fillText(["DISC 1","DISC 2","DISC 3","DISC 4"][a],c-3,202)}e.fillStyle="#a7aa86",e.fillRect(147,319,310,20),s&&(e.fillStyle="#3d5944",e.font='13px "Microsoft YaHei",sans-serif',e.fillText("选择一张光盘开始",154,334)),o(13,396,486,40,"#bdcbb0");for(let a=0;a<14;a++)o(25+a*26,410,15,13,a%3===0?"#829a70":"#b6ac7f");e.fillStyle="#4e664e",e.fillRect(419,410,6+Math.sin(r)*2,11),e.font="17px monospace",e.fillText("10:09",435,422),bd(e),t.needsUpdate=!0}return n(!1,0),{map:t,draw:n}}function ou(i,e,t){const n=document.createElement("canvas");n.width=n.height=32;const s=n.getContext("2d"),r=s.createRadialGradient(16,16,0,16,16,16);return r.addColorStop(0,"#ffffff"),r.addColorStop(.25,"#ffffffb0"),r.addColorStop(1,"#ffffff00"),s.fillStyle=r,s.fillRect(0,0,32,32),new od({map:new Gt(n),color:i,opacity:e,size:t,transparent:!0,depthWrite:!1,toneMapped:!1})}function i1(i,e,t,n){const s=new Float32Array(180),r=new Mt;r.setAttribute("position",new un(s,3));const o=new bh(r,ou("#ffe2a9",.45,.033));o.frustumCulled=!1,o.raycast=()=>{},i.add(o);const a=new Mt,c=new Float32Array(33);a.setAttribute("position",new un(c,3));const l=new bh(a,ou("#fff3db",.19,.075));l.frustumCulled=!1,l.raycast=()=>{},e.add(l);const h=new at;h.position.set(.16,1.25,.12),t.add(h);for(let M=0;M<5;M++){const x=new We(new Sc(.011,.11,3,8),new rn({color:"#ffe0a2",opacity:.55,transparent:!0,depthWrite:!1}));x.position.x=(M-2)*.055,x.raycast=()=>{},h.add(x)}const u=new Mt;u.setAttribute("position",new $e([-.35,.71,-1.39,1.96,2.31,-1.39,5.643,4.595,.74,4.257,3.635,.74],3)),u.setAttribute("uv",new $e([0,0,0,1,1,1,1,0],2)),u.setIndex([0,1,2,0,2,3]);const f=new Xt({transparent:!0,depthWrite:!1,side:It,blending:sl,uniforms:{strength:{value:.08}},vertexShader:"varying vec2 tex; void main(){tex=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 tex; uniform float strength; void main(){float edge=sin(3.14159*tex.y)*sin(3.14159*tex.x);gl_FragColor=vec4(1.,.72,.39,edge*edge*strength);}"}),d=new We(u,f);d.raycast=()=>{},d.userData.skipContactShadows=!0,i.add(d);const m=document.createElement("canvas");m.width=m.height=128;const _=m.getContext("2d"),g=_.createImageData(128,128);let p=4229;for(let M=0;M<g.data.length;M+=4)p=p*16807%2147483647,g.data[M]=g.data[M+1]=g.data[M+2]=p%256,g.data[M+3]=255;return _.putImageData(g,0,0),n.style.setProperty("--room-grain",`url(${m.toDataURL()})`),(M,x,v,w)=>{f.uniforms.strength.value=.112*x,d.visible=x>.02,o.visible=x>.06,o.material.opacity=.41*x;for(let E=0;E<60;E++){const A=E*.6180339%1,R=E*.317037%1-.5,y=Math.sin(M*.39+E*2)*.073;s[E*3]=-.2+4.75*A+R*.63+y,s[E*3+1]=.9+3.02*A+R*1.11+Math.sin(M*.29+E)*.13,s[E*3+2]=-1.12+1.97*A+(E*.428%1-.5)*.8}r.attributes.position.needsUpdate=!0,l.visible=w;for(let E=0;E<11;E++){const A=(E/11+M*.29)%1;c[E*3]=Math.sin(A*7+M*.7)*A*.073,c[E*3+1]=.215+A*.34,c[E*3+2]=Math.cos(A*5)*.052*A}a.attributes.position.needsUpdate=!0,h.visible=v;for(let E=0;E<h.children.length;E++)h.children[E].scale.y=.35+(.5+.5*Math.sin(M*4.8+E*.94))*.72}}const au=[[48,55,58,62],[45,52,55,59],[43,50,53,57],[46,53,57,60]];function s1(){let i,e,t,n=0,s=0,r=!1;const o=.54;function a(l,h,u,f,d){const m=i.createOscillator(),_=i.createGain();m.type=d,m.frequency.value=440*2**((l-69)/12),_.gain.setValueAtTime(1e-4,h),_.gain.exponentialRampToValueAtTime(f,h+.041),_.gain.exponentialRampToValueAtTime(1e-4,h+u),m.connect(_).connect(e),m.start(h),m.stop(h+u+.02),m.onended=()=>{m.disconnect(),_.disconnect()}}function c(){for(s<i.currentTime-.25&&(s=i.currentTime+.035);s<i.currentTime+.16;){const l=au[Math.floor(n/8)%au.length],h=n%8;(h===0||h===4)&&a(l[0]-12,s,.9,.15,"sine"),(h===0||h===3)&&l.slice(1).forEach((u,f)=>a(u,s+f*.032,1.46,.069,"triangle")),(h===2||h===5||h===7)&&a(l[1+h%3]+12,s,.62,.057,"sine"),s+=o/2,n++}}return l=>{if(r=l,!l){clearInterval(t),t=null,e&&e.gain.setTargetAtTime(0,i.currentTime,.055);return}const h=window.AudioContext||window.webkitAudioContext;h&&(i||(i=new h,e=i.createGain(),e.gain.value=0,e.connect(i.destination)),i.resume().then(()=>{!r||t||(s=i.currentTime+.035,n=0,e.gain.setTargetAtTime(.16,i.currentTime,.09),c(),t=setInterval(c,80))}).catch(()=>{}))}}function r1(i){return()=>(i=i*16807%2147483647,(i-1)/2147483646)}function Ed(i=!1){const e=document.createElement("canvas");e.width=1024,e.height=i?1024:512;const t=e.getContext("2d"),n=r1(i?7304:1509),s=i?128:512;for(let o=0,a=0;o<e.height;o+=s,a++){const c=n(),l=t.createLinearGradient(0,o,0,o+s);l.addColorStop(0,`hsl(30 42% ${55+c*6}%)`),l.addColorStop(.49,`hsl(32 43% ${58+c*6}%)`),l.addColorStop(1,`hsl(28 39% ${54+c*6}%)`),t.fillStyle=l,t.fillRect(0,o,1024,s),t.save(),t.beginPath(),t.rect(0,o,1024,s),t.clip();const h=175+n()*640,u=o+s*(.3+n()*.4),f=n()*6.28;for(let d=0;d<s*2.5;d++){const m=o+n()*s,_=m-u,g=1.5+n()*2.5,p=d%17===0;t.strokeStyle=d%4===0?`rgba(253,218,155,${.05+n()*.16})`:`rgba(76,41,18,${.045+n()*(p?.28:.16)})`,t.lineWidth=p?1.6:.23+n()*.66,t.beginPath();for(let M=0;M<=1024;M+=8){const x=Math.exp(-(((M-h)/102)**2+(_/25)**2)),v=Math.sin(M*.008+f+m*.022)*g+Math.sin(M*.018+m*.045)*1.2,w=m+v+Math.tanh(_*.3)*x*13;M===0?t.moveTo(M,w):t.lineTo(M,w)}t.stroke()}for(let d=0;d<s*7;d++){const m=n()*1024,_=o+n()*s;t.fillStyle=d%3===0?"#edd1a051":"#52342238",t.fillRect(m,_,1+n()*8,.35+n()*.65)}if(t.restore(),i){t.fillStyle="#715031b0",t.fillRect(0,o,1024,2),t.fillStyle="#eaca9d8a",t.fillRect(0,o+2,1024,1);const d=165+a*293%720;t.fillStyle="#5c3d2485",t.fillRect(d,o,2,s),t.fillStyle="#f4d7a88a",t.fillRect(d+2,o,1,s)}}const r=new Gt(e);return r.colorSpace=_t,r.anisotropy=8,i&&(r.wrapS=r.wrapT=Wn,r.repeat.set(4,9)),r}function o1(){const i=document.createElement("canvas");i.width=i.height=512;const e=new Gt(i);return Td(e,0),e}function Td(i,e){const t=i.image.getContext("2d");t.save(),t.fillStyle="#191919",t.fillRect(0,0,512,512),t.translate(Math.sin(e*.42)*3,Math.sin(e*.31)*2),t.filter="blur(8px)",t.fillStyle="#ffffff";const n=s=>(512-s)*.37;for(const[s,r]of[[69,190],[218,327],[355,458]])for(const[o,a]of[[26,146],[174,299]])t.beginPath(),t.moveTo(o+n(s),s),t.lineTo(a+n(s),s),t.lineTo(a+n(r),r),t.lineTo(o+n(r),r),t.closePath(),t.fill();t.filter="blur(9px)";for(let s=0;s<21;s++){const r=365+s*97%145,o=63+s*113%364;t.fillStyle=s%3===0?"#35352d55":"#51493744",t.beginPath(),t.ellipse(r+Math.sin(e*.61+s)*6,o+Math.sin(e*.47+s)*4,11+s%7,5+s%6,-.56,0,Math.PI*2),t.fill()}t.restore(),i.needsUpdate=!0}function Zs(i,{x:e,y:t,z:n,width:s,depth:r,radius:o,spread:a,opacity:c}){const h=document.createElement("canvas");h.width=h.height=96;const u=h.getContext("2d"),f=u.createImageData(96,96),d=s+a*2,m=r+a*2;for(let M=0;M<96;M++)for(let x=0;x<96;x++){const v=Math.abs((x/95-.5)*d)-s/2+o,w=Math.abs((M/95-.5)*m)-r/2+o,E=Math.hypot(Math.max(v,0),Math.max(w,0))+Math.min(Math.max(v,w),0)-o,A=Math.min(1,Math.max(0,E/a)),R=(M*96+x)*4;f.data[R]=255,f.data[R+1]=255,f.data[R+2]=255,f.data[R+3]=Math.round(255*(1-A)**3)}u.putImageData(f,0,0);const _=new Gt(h),g=new rn({color:"#3e372a",map:_,opacity:c,transparent:!0,depthWrite:!1}),p=new We(new Ft(d,m),g);p.rotation.x=-Math.PI/2,p.position.set(e,t,n),p.raycast=()=>{},i.add(p)}function a1({root:i,box:e,cylinder:t,lineTube:n,mat:s,wood:r,silver:o,greenDark:a,cream:c}){const l=new at;l.position.set(-3.48,.12,-.83),i.add(l),e(1.52,.1,.81,0,.09,0,a,.049,l);for(const T of[-.55,.55])for(const L of[-.24,.24])t(.073,.052,T,.026,L,o,l);Zs(i,{x:l.position.x,y:.121,z:l.position.z,width:1.5,depth:.79,radius:.17,spread:.18,opacity:.43});const h=.96,u=(T,L=h)=>[Math.sin(T)*L,.87+Math.cos(T)*L,-.07],f=Array.from({length:15},(T,L)=>u(-.69+L*.103)),d=[[-.48,.14,-.07],[-.63,.47,-.07],[-.69,.86,-.07],[-.68,1.2,-.07],...f];n(d,.106,r,l);const m=new Ws(d.slice(0,7).map(T=>new I(...T))),_=[];for(let T=0;T<=128;T++){const L=T/128,N=L*Math.PI*11,H=m.getPoint(L),B=m.getTangent(L);H.addScaledVector(new I(B.y,-B.x,0),.116*Math.cos(N)),H.z+=.116*Math.sin(N),_.push(H.toArray())}const g=new Ws(_.map(T=>new I(...T))),p=new We(new Lr(g,160,.013,8,!1),o);p.castShadow=!0,l.add(p);const x=["#bca387","#6c7c66","#ac7359","#8a98a2","#d2ae64","#ddd2b8"].map(T=>s(T,.65)),v=new yn({color:"#eeeae0",transparent:!0,opacity:.32,roughness:.16,depthWrite:!1});for(let T=0;T<13;T++){const L=-.64+T*.106,N=new at;N.position.set(...u(L)),N.rotation.z=-L,l.add(N),n([[-.027,.025,-.23],[-.027,-.012,-.24],[-.027,-.03,0],[-.027,-.013,.24],[-.027,.041,.245]],.012,o,N);const H=new at;N.add(H),e(.044,.353,.44,0,.185,0,v,.005,H).castShadow=!1,e(.037,.335,.409,0,.187,0,x[T%x.length],.003,H),e(.043,.018,.438,0,.36,0,c,.003,H)}const w=new qs,E=Array.from({length:15},(T,L)=>u(-.69+L*.103,1.33)),A=Array.from({length:15},(T,L)=>u(.752-L*.103,.9)),[R,...y]=[...E,...A];w.moveTo(R[0],R[1]);for(const[T,L]of y)w.lineTo(T,L);const S=new We(new qi(w),new rn({visible:!1,side:It}));S.position.z=.12,l.add(S),e(.84,.065,.67,.27,.19,.025,a,.027,l),e(.78,.36,.056,.28,.32,-.29,a,.025,l);for(const T of[-.12,.68])e(.07,.48,.68,T,.4,.025,a,.035,l);e(.85,.14,.055,.28,.25,.36,a,.025,l);for(let T=0;T<8;T++){const L=e(.019,.67,.58,-.044+T*.088,.55,.014,x[(T+1)%x.length],.004,l);L.rotation.z=-.07,e(.016,.63,.018,L.position.x+.022,.55,.311,c,.004,l).rotation.z=-.07}return l}const lu={type:"change"},Dc={type:"start"},wd={type:"end"},po=new Xo,cu=new gi,l1=Math.cos(70*ht.DEG2RAD),Ot=new I,cn=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Va=1e-6;class c1 extends vm{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rs.ROTATE,MIDDLE:Rs.DOLLY,RIGHT:Rs.PAN},this.touches={ONE:As.ROTATE,TWO:As.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ei,this._lastTargetPosition=new I,this._quat=new Ei().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nh,this._sphericalDelta=new Nh,this._scale=1,this._panOffset=new I,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new I,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=u1.bind(this),this._onPointerDown=h1.bind(this),this._onPointerUp=d1.bind(this),this._onContextMenu=x1.bind(this),this._onMouseWheel=m1.bind(this),this._onKeyDown=g1.bind(this),this._onTouchStart=_1.bind(this),this._onTouchMove=v1.bind(this),this._onMouseDown=f1.bind(this),this._onMouseMove=p1.bind(this),this._interceptControlDown=M1.bind(this),this._interceptControlUp=S1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lu),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Ot.copy(t).sub(this.target),Ot.applyQuaternion(this._quat),this._spherical.setFromVector3(Ot),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),s<-Math.PI?s+=cn:s>Math.PI&&(s-=cn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ot.setFromSpherical(this._spherical),Ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ot.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(po.origin.copy(this.object.position),po.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(po.direction))<l1?this.object.lookAt(this.target):(cu.setFromNormalAndCoplanarPoint(this.object.up,this.target),po.intersectPlane(cu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Va||this._lastTargetPosition.distanceToSquared(this.target)>Va?(this.dispatchEvent(lu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ot.setFromMatrixColumn(t,0),Ot.multiplyScalar(-e),this._panOffset.add(Ot)}_panUp(e,t){this.screenSpacePanning===!0?Ot.setFromMatrixColumn(t,1):(Ot.setFromMatrixColumn(t,0),Ot.crossVectors(this.object.up,Ot)),Ot.multiplyScalar(e),this._panOffset.add(Ot)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ot.copy(s).sub(this.target);let r=Ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function h1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function u1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function d1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wd),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function f1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Rs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case Rs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case Rs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Dc)}function p1(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function m1(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Dc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wd))}function g1(i){this.enabled!==!1&&this._handleKeyDown(i)}function _1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case As.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case As.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case As.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case As.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Dc)}function v1(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function x1(i){this.enabled!==!1&&i.preventDefault()}function M1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function S1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ar=new I;function Mn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;ar.copy(e),ar[n]=0,ar.normalize();const l=.5*o/(o+a),h=1-ar.angleTo(i)/c;return Math.sign(ar[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Lc extends Ai{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new I,l=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,_=new I,g=.5/o;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(c.fromArray(u,p),l.copy(c),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[p+0]=h.x*Math.sign(c.x)+l.x*r,u[p+1]=h.y*Math.sign(c.y)+l.y*r,u[p+2]=h.z*Math.sign(c.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/m)){case 0:_.set(1,0,0),d[M+0]=Mn(_,l,"z","y",r,n),d[M+1]=1-Mn(_,l,"y","z",r,t);break;case 1:_.set(-1,0,0),d[M+0]=1-Mn(_,l,"z","y",r,n),d[M+1]=1-Mn(_,l,"y","z",r,t);break;case 2:_.set(0,1,0),d[M+0]=1-Mn(_,l,"x","z",r,e),d[M+1]=Mn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[M+0]=1-Mn(_,l,"x","z",r,e),d[M+1]=1-Mn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[M+0]=1-Mn(_,l,"x","y",r,e),d[M+1]=1-Mn(_,l,"y","x",r,t);break;case 5:_.set(0,0,-1),d[M+0]=Mn(_,l,"x","y",r,e),d[M+1]=1-Mn(_,l,"y","x",r,t);break}}static fromJSON(e){return new Lc(e.width,e.height,e.depth,e.segments,e.radius)}}class y1 extends sd{constructor(){super();const e=new Ai;e.deleteAttribute("uv");const t=new Et({side:tn}),n=new Et,s=new Cc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new We(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new rd(e,n,6),a=new wt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new We(e,Es(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new We(e,Es(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new We(e,Es(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new We(e,Es(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new We(e,Es(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new We(e,Es(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Es(i){return new sm({color:0,emissive:16777215,emissiveIntensity:i})}const Do={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const b1=new Rc(-1,1,1,-1,0,1);class E1 extends Mt{constructor(){super(),this.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $e([0,2,0,0,2,0],2))}}const T1=new E1;class Ic{constructor(e){this._mesh=new We(T1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,b1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ad extends Ks{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vi.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ic(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class hu extends Ks{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class w1 extends Ks{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class A1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ad(Do),this.copyPass.material.blending=Wt,this.clock=new _m}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hu!==void 0&&(o instanceof hu?n=!0:o instanceof w1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class C1 extends Ks{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ze}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const mo={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new lt},cameraProjectionMatrixInverse:{value:new lt},cameraWorldMatrix:{value:new lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

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
		}`},go={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Ga={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function R1(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=P1(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=t[o],c=2*Math.PI*a/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();s[o*4]=(l.x*.5+.5)*255,s[o*4+1]=(l.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}const r=new vc(s,e,e);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}function P1(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}const _o={defines:{SAMPLES:16,SAMPLE_VECTORS:Cd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraProjectionMatrixInverse:{value:new lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Cd(i,e,t){const n=D1(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function D1(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new I(Math.cos(r),Math.sin(r),o))}return n}class L1{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,d=l-u,m=e-f,_=t-d;let g,p;m>_?(g=1,p=0):(g=0,p=1);const M=m-g+h,x=_-p+h,v=m-1+2*h,w=_-1+2*h,E=c&255,A=l&255,R=this.perm[E+this.perm[A]]%12,y=this.perm[E+g+this.perm[A+p]]%12,S=this.perm[E+1+this.perm[A+1]]%12;let T=.5-m*m-_*_;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[R],m,_));let L=.5-M*M-x*x;L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[y],M,x));let N=.5-v*v-w*w;return N<0?r=0:(N*=N,r=N*N*this._dot(this.grad3[S],v,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(n+l),d=1/6,m=(h+u+f)*d,_=h-m,g=u-m,p=f-m,M=e-_,x=t-g,v=n-p;let w,E,A,R,y,S;M>=x?x>=v?(w=1,E=0,A=0,R=1,y=1,S=0):M>=v?(w=1,E=0,A=0,R=1,y=0,S=1):(w=0,E=0,A=1,R=1,y=0,S=1):x<v?(w=0,E=0,A=1,R=0,y=1,S=1):M<v?(w=0,E=1,A=0,R=0,y=1,S=1):(w=0,E=1,A=0,R=1,y=1,S=0);const T=M-w+d,L=x-E+d,N=v-A+d,H=M-R+2*d,B=x-y+2*d,G=v-S+2*d,$=M-1+3*d,O=x-1+3*d,ee=v-1+3*d,se=h&255,fe=u&255,xe=f&255,Pe=this.perm[se+this.perm[fe+this.perm[xe]]]%12,Be=this.perm[se+w+this.perm[fe+E+this.perm[xe+A]]]%12,Ne=this.perm[se+R+this.perm[fe+y+this.perm[xe+S]]]%12,K=this.perm[se+1+this.perm[fe+1+this.perm[xe+1]]]%12;let J=.6-M*M-x*x-v*v;J<0?s=0:(J*=J,s=J*J*this._dot3(this.grad3[Pe],M,x,v));let _e=.6-T*T-L*L-N*N;_e<0?r=0:(_e*=_e,r=_e*_e*this._dot3(this.grad3[Be],T,L,N));let ye=.6-H*H-B*B-G*G;ye<0?o=0:(ye*=ye,o=ye*ye*this._dot3(this.grad3[Ne],H,B,G));let pe=.6-$*$-O*O-ee*ee;return pe<0?a=0:(pe*=pe,a=pe*pe*this._dot3(this.grad3[K],$,O,ee)),32*(s+r+o+a)}noise4d(e,t,n,s){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,f,d,m;const _=(e+t+n+s)*c,g=Math.floor(e+_),p=Math.floor(t+_),M=Math.floor(n+_),x=Math.floor(s+_),v=(g+p+M+x)*l,w=g-v,E=p-v,A=M-v,R=x-v,y=e-w,S=t-E,T=n-A,L=s-R,N=y>S?32:0,H=y>T?16:0,B=S>T?8:0,G=y>L?4:0,$=S>L?2:0,O=T>L?1:0,ee=N+H+B+G+$+O,se=o[ee][0]>=3?1:0,fe=o[ee][1]>=3?1:0,xe=o[ee][2]>=3?1:0,Pe=o[ee][3]>=3?1:0,Be=o[ee][0]>=2?1:0,Ne=o[ee][1]>=2?1:0,K=o[ee][2]>=2?1:0,J=o[ee][3]>=2?1:0,_e=o[ee][0]>=1?1:0,ye=o[ee][1]>=1?1:0,pe=o[ee][2]>=1?1:0,ke=o[ee][3]>=1?1:0,qe=y-se+l,U=S-fe+l,ne=T-xe+l,j=L-Pe+l,ie=y-Be+2*l,te=S-Ne+2*l,ue=T-K+2*l,Q=L-J+2*l,ce=y-_e+3*l,Fe=S-ye+3*l,Oe=T-pe+3*l,P=L-ke+3*l,b=y-1+4*l,z=S-1+4*l,X=T-1+4*l,oe=L-1+4*l,W=g&255,Ae=p&255,de=M&255,we=x&255,De=a[W+a[Ae+a[de+a[we]]]]%32,le=a[W+se+a[Ae+fe+a[de+xe+a[we+Pe]]]]%32,Ee=a[W+Be+a[Ae+Ne+a[de+K+a[we+J]]]]%32,He=a[W+_e+a[Ae+ye+a[de+pe+a[we+ke]]]]%32,Re=a[W+1+a[Ae+1+a[de+1+a[we+1]]]]%32;let Se=.6-y*y-S*S-T*T-L*L;Se<0?h=0:(Se*=Se,h=Se*Se*this._dot4(r[De],y,S,T,L));let Ye=.6-qe*qe-U*U-ne*ne-j*j;Ye<0?u=0:(Ye*=Ye,u=Ye*Ye*this._dot4(r[le],qe,U,ne,j));let F=.6-ie*ie-te*te-ue*ue-Q*Q;F<0?f=0:(F*=F,f=F*F*this._dot4(r[Ee],ie,te,ue,Q));let he=.6-ce*ce-Fe*Fe-Oe*Oe-P*P;he<0?d=0:(he*=he,d=he*he*this._dot4(r[He],ce,Fe,Oe,P));let Me=.6-b*b-z*z-X*X-oe*oe;return Me<0?m=0:(Me*=Me,m=Me*Me*this._dot4(r[Re],b,z,X,oe)),27*(h+u+f+d+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}}class On extends Ks{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=R1(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xn(this.width,this.height,{type:bi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Xt({defines:Object.assign({},mo.defines),uniforms:vi.clone(mo.uniforms),vertexShader:mo.vertexShader,fragmentShader:mo.fragmentShader,blending:Wt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new im,this.normalMaterial.blending=Wt,this.pdMaterial=new Xt({defines:Object.assign({},_o.defines),uniforms:vi.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Xt({defines:Object.assign({},go.defines),uniforms:vi.clone(go.uniforms),vertexShader:go.vertexShader,fragmentShader:go.fragmentShader,blending:Wt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Xt({uniforms:vi.clone(Do.uniforms),vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ll,blendDst:cr,blendEquation:An,blendSrcAlpha:al,blendDstAlpha:cr,blendEquationAlpha:An}),this.blendMaterial=new Xt({uniforms:vi.clone(Ga.uniforms),vertexShader:Ga.vertexShader,fragmentShader:Ga.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Uu,blendSrc:ll,blendDst:cr,blendEquation:An,blendSrcAlpha:al,blendDstAlpha:cr,blendEquationAlpha:An}),this._fsQuad=new Ic(null),this._originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Mc,this.depthTexture.format=ks,this.depthTexture.type=Bs,this.normalRenderTarget=new Xn(this.width,this.height,{minFilter:nn,magFilter:nn,type:bi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Cd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case On.OUTPUT.Off:break;case On.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case On.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case On.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case On.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case On.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case On.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Wt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);const o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){const t=new L1,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=o,l=a;s[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const r=new vc(s,e,e,Sn,Ln);return r.wrapS=Wn,r.wrapT=Wn,r.needsUpdate=!0,r}}On.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const vo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class I1 extends Ks{constructor(){super(),this.uniforms=vi.clone(vo.uniforms),this.material=new nm({name:vo.name,uniforms:this.uniforms,vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader}),this._fsQuad=new Ic(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===zu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const U1={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new re(1/1024,1/512)}},vertexShader:`

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

		}`},N1='*{box-sizing:border-box}body{margin:0;background:#f2eee6;color:#515344;font:14px Arial,Microsoft YaHei,sans-serif}button,a{-webkit-tap-highlight-color:transparent}button{font:inherit;cursor:pointer}button:focus-visible,a:focus-visible{outline:2px solid #74805f;outline-offset:5px}button{color:inherit}a{color:inherit;text-decoration:none}.page-head{height:90px;padding:0 5%;display:flex;align-items:center;justify-content:space-between}.page-head>a{font:32px Georgia,serif;letter-spacing:-1px}.page-head a span{font:12px Arial,sans-serif;margin-left:17px;letter-spacing:1px;color:#78796b}.page-head>span{font-size:12px;color:#878678}.desktop{max-width:1300px;min-height:calc(100svh - 164px);margin:auto;padding:45px 5% 60px;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:70px}.overline{font-size:13px;color:#8c8b78;margin:0 0 18px}h1{font-weight:400;font-size:clamp(48px,5.3vw,78px);letter-spacing:-3px;line-height:1.2;margin:0 0 24px}.intro-copy{font-size:15px;line-height:1.9;color:#858474}.collection{display:block;position:relative;margin-top:38px;width:320px;padding:25px 25px 16px;border:1px solid #d2d2bd;border-radius:9px;background:linear-gradient(120deg,#dedfce,#e9e9db 60%,#d6d9c3);box-shadow:inset 0 1px #ffffffb0,0 12px 23px #575c3a12;text-align:left;transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s,border-color .35s}.collection:hover,.collection:focus-visible{transform:translateY(-5px) scale(1.035);border-color:#a4b489;box-shadow:inset 0 1px #fff,0 0 28px #d3e5a48a,0 18px 35px #5f714326}.shelf-art{display:flex;align-items:flex-end;height:89px;gap:7px;padding:0 8px;border-bottom:5px solid #a5ad8c;perspective:700px}.shelf-art i{display:block;width:23px;height:80px;background:linear-gradient(90deg,#b4b6a7,#ecece4 25%,#fbfaf4 38%,#bfc5b4 50%,#e9e9df 75%,#acae9b);border:1px solid #a7ad99;border-radius:2px;transform:rotateY(-12deg);box-shadow:3px 0 2px #61704715}.shelf-art i:nth-child(3n){height:86px;border-top:12px solid #b7c2ad}.shelf-art i:nth-child(3n+1){border-top:12px solid #b7856e}.shelf-art i:nth-child(3n+2){border-top:12px solid #86a8b8}.collection-label{display:block;position:relative;padding-top:16px}.collection-label b{font-size:15px;font-weight:500}.collection-label small{display:block;margin-top:7px;font-size:11px;color:#7c846d}.collection-label em{position:absolute;right:0;top:24px;font-style:normal;font-size:21px}.note{font-size:11px;color:#969485;margin-top:20px}.computer-area{position:relative;height:400px;width:490px;max-width:100%;justify-self:center;align-self:center}.computer{position:absolute;left:0;top:25px;width:320px;z-index:2}.monitor{height:258px;padding:26px 25px 30px;background:linear-gradient(125deg,#eae4d3,#d6cfb9);border:1px solid #c8bfa8;border-radius:18px 18px 12px 12px;box-shadow:inset 3px 3px 4px #fff9e9,6px 8px #c8c0a9,15px 20px 35px #82785e19;position:relative}.screen{position:relative;height:199px;background:#8fae9c;border:7px solid #b7b8a1;border-radius:35%/7%;box-shadow:inset 0 0 22px #1b594d42;overflow:hidden;display:flex;align-items:center;justify-content:center;text-align:center}.screen-wave{position:absolute;width:350px;height:160px;left:-55px;bottom:-90px;background:#b1c9ac77;border-radius:50%;transform:rotate(-15deg)}#screen-copy{position:relative;z-index:1;color:#f0f2d9;text-shadow:0 1px #57756430;padding:12px}#screen-copy small{font-size:9px;letter-spacing:2px}#screen-copy b{display:block;font-size:21px;font-weight:400;margin:15px 0 10px}#screen-copy p{font-size:11px;line-height:1.7;margin:0}.monitor-label{display:block;text-align:center;color:#99947e;font:7px Arial;margin-top:10px;letter-spacing:1px}.led{width:4px;height:4px;background:#8fa87c;position:absolute;right:20px;bottom:12px;border-radius:50%}.stand{width:76px;height:34px;margin:auto;background:linear-gradient(90deg,#ccc4ac,#ded7c0);box-shadow:inset 0 8px 10px #81785624}.stand-foot{width:133px;height:14px;margin:auto;border-radius:6px;background:#ddd5bd;box-shadow:0 5px #bcb59d}.tower{position:absolute;right:0;top:15px;width:133px;height:294px;background:linear-gradient(120deg,#e7e0cc,#d4ccb4);border:1px solid #c5bda4;border-radius:8px 8px 3px 3px;box-shadow:inset 3px 3px #f6f1df,7px 5px #c4bca5,13px 14px 30px #6f674b16;padding:20px 12px}.drive-bay{height:35px;margin-bottom:8px;border:1px solid #bcb49b;background:#ddd6be;box-shadow:inset 2px 2px #efe9d8}.drive-bay:after{content:"";display:block;height:1px;background:#b8b09a;width:60%;margin:21px auto}.drive-slot{height:8px;background:#4f5145;margin-top:12px;border-radius:1px;box-shadow:0 2px #efe8d5}.drive-tray{width:116px;height:24px;background:#d5ccb2;border:1px solid #aaa58d;position:absolute;left:7px;top:123px;transform:perspective(200px) rotateX(40deg);transform-origin:top;transition:transform 1s,opacity .7s}.drive-tray:after{content:"";display:block;width:60px;height:16px;border:1px solid #b5ae98;border-radius:50%;margin:2px auto}.tower.loaded .drive-tray{transform:perspective(200px) rotateX(40deg) scaleY(.02);opacity:0}.power{margin-top:50px;width:17px;height:17px;border-radius:50%;border:2px solid #b9b19a;box-shadow:inset 0 1px 3px #877e5c33}.vents{margin-top:20px;height:31px;background:repeating-linear-gradient(0deg,transparent 0 4px,#b9b19a 4px 5px)}.table{height:16px;background:linear-gradient(#b99c72,#a8906b);position:absolute;top:340px;left:-35px;right:-25px;border-radius:5px;box-shadow:0 13px 25px #7a725a19}.computer-caption{position:absolute;top:372px;font-size:12px;left:0;right:0;text-align:center;color:#8c8b79}.page-footer{height:74px;padding:0 5%;display:flex;justify-content:space-between;align-items:center;color:#999582;font-size:11px}#reset{border:0;background:transparent;padding:12px;color:#687652}dialog{border:0;padding:0;color:#515344;background:#f1eee3;box-shadow:0 25px 100px #343a3240}dialog::backdrop{background:#3e443852;-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px)}dialog[open]{animation:arrive .45s cubic-bezier(.2,.8,.2,1)}#board{width:min(1050px,92vw);height:85svh;max-height:1000px;border-radius:12px;background:linear-gradient(110deg,#eeebde,#f6f3e8 55%,#eeeddf);overflow:auto}#board:before{content:"";position:absolute;top:0;left:0;right:0;height:6px;background:#a3ab8b}.board-heading{position:relative;display:flex;justify-content:space-between;padding:38px 45px 20px}.board-heading small{font-size:10px;letter-spacing:2px;color:#9b9c87}h2{font-weight:400;font-size:29px;letter-spacing:-.8px;margin:13px 0}.board-heading p{font-size:13px;color:#8e8e7c;line-height:1.8}.close{position:absolute;right:20px;top:20px;background:transparent;border:0;font-size:27px;width:40px;height:40px;color:#8e927f}.disc-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 27px;padding:10px 45px 38px}.album{border:0;background:none;padding:0;text-align:left;min-width:0}.jewel{position:relative;display:block;aspect-ratio:1;width:100%;padding:8px 7px 8px 13px;background:linear-gradient(135deg,#f9fcf180,#c4cabc55);border:1px solid #a5ad9c95;border-radius:3px;box-shadow:inset 1px 1px 2px #fff,3px 5px #a3ab982c,7px 12px 20px #69704c18;transition:transform .3s,box-shadow .3s;isolation:isolate}.jewel:before{content:"";position:absolute;top:0;bottom:0;left:4px;width:5px;border-left:1px solid #fafcf980;border-right:1px solid #929c8170;z-index:2}.jewel:after{content:"";position:absolute;inset:0;background:linear-gradient(130deg,#fff5,transparent 35%,transparent 70%,#fff3);pointer-events:none;z-index:3}.album:hover .jewel,.album:focus-visible .jewel{transform:translateY(-7px) rotate(-2deg);box-shadow:inset 1px 1px 2px #fff,3px 7px #a3ab982c,0 10px 30px #d1e3a078}.cover{display:flex;position:relative;overflow:hidden;width:100%;height:100%;flex-direction:column;justify-content:space-between;padding:12px;background:var(--paper);color:var(--ink);box-shadow:0 0 0 1px #393d281a}.cover .serial{font-size:7px;letter-spacing:1px;z-index:1}.cover .cover-title{font:25px Georgia,serif;line-height:.95;z-index:1;letter-spacing:-1px;white-space:pre-line}.cover .cover-foot{font-size:6px;letter-spacing:1px;z-index:1}.cover .art{position:absolute;inset:0;pointer-events:none}.art:before,.art:after{content:"";position:absolute}.art.orbit:before{width:78%;height:78%;right:-12%;bottom:8%;border:18px solid var(--accent);border-radius:50%}.art.orbit:after{height:2px;width:130%;background:var(--ink);transform:rotate(-35deg);left:-15%;top:50%}.art.grid{background:repeating-linear-gradient(0deg,transparent 0 23px,#ffffff35 23px 24px),repeating-linear-gradient(90deg,transparent 0 23px,#ffffff35 23px 24px)}.art.grid:after{width:50%;height:50%;background:var(--accent);bottom:12%;right:-10%;transform:rotate(32deg)}.art.flower:before{width:65%;height:65%;border-radius:50% 0 50% 50%;background:var(--accent);right:-4%;top:20%;transform:rotate(35deg)}.art.flower:after{width:24%;height:24%;border-radius:50%;background:var(--paper);right:18%;top:40%}.art.wave:before{width:160%;height:70%;border-radius:50%;background:var(--accent);bottom:-20%;left:-35%;transform:rotate(-30deg)}.art.wave:after{width:160%;height:60%;border-radius:50%;border:1px solid var(--ink);bottom:-10%;left:-25%;transform:rotate(-30deg)}.album-label{display:block;margin-top:15px;font-size:13px}.album small{display:block;font-size:10px;color:#92917e;margin-top:6px}.board-footer{display:flex;justify-content:space-between;padding:25px 45px;background:#e4e5d5;color:#858b72;font-size:11px}#detail{width:min(850px,93vw);border-radius:12px;overflow:visible}.detail-layout{display:grid;grid-template-columns:1fr 1fr;gap:50px;padding:80px 45px 60px;align-items:center}.unboxing{height:270px;position:relative;display:flex;align-items:center}.unboxing>.jewel{width:205px;height:205px;flex-shrink:0;z-index:2;transform:rotate(-6deg)}.unboxing .cover-title{font-size:33px}.optical-disc{position:absolute;width:187px;height:187px;left:30px;top:43px;border-radius:50%;background:conic-gradient(from 40deg,#d3d3c5,#f8f4db,#c8d7d0,#e0d2dd,#e9e5c5,#adbec5,#d3d3c5);box-shadow:inset 0 0 0 1px #a5ad9c,0 10px 20px #6b72581a;z-index:1;transition:transform .85s cubic-bezier(.2,.7,.2,1);display:grid;place-items:center;isolation:isolate}.optical-disc:before{content:"";position:absolute;inset:12px;border:1px solid #ffffff85;border-radius:50%}.optical-disc:after{content:"";position:absolute;width:18px;height:18px;border-radius:50%;background:#f1eee3;box-shadow:0 0 0 8px #c1c9be,0 0 0 9px #999f9460}.disc-print{width:135px;height:135px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--paper);color:var(--ink);border:1px solid #fff8;font:12px Georgia,serif;letter-spacing:1px;text-align:center;padding-bottom:65px;white-space:pre-line}.unboxing.out .optical-disc{transform:translate(118px) rotate(35deg)}.unboxing.returning .optical-disc{transform:translate(0) rotate(0)}.detail-copy{opacity:0;transform:translateY(9px);transition:opacity .45s .4s,transform .45s .4s}.out~.detail-copy{opacity:1;transform:none}.detail-copy>small{font-size:10px;letter-spacing:2px;color:#92977e}.detail-copy h2{font-size:30px;margin:15px 0}.detail-copy>p{color:#838672;font-size:14px;line-height:1.9}.detail-copy .detail-question{margin-top:25px;font-size:12px;color:#626c51}.actions{display:flex;gap:8px;margin-top:12px}.actions button{border:1px solid #bdc4ad;border-radius:5px;background:transparent;padding:12px 16px;font-size:12px;transition:background .2s,transform .2s}.actions button:active{transform:translateY(2px)}#insert{background:#737e5d;color:#fbf8ed;border-color:#737e5d}#insert:hover{background:#5a6749}#put-back:hover{background:#e1e5d4}.demo-tag{display:block;font-size:10px;color:#a3a38d;margin-top:16px}.flying-disc{position:fixed!important;left:0;top:0;z-index:10000;pointer-events:none;margin:0;transition:none}.screen.loaded{background:#6d806b}.screen.loaded #screen-copy{animation:screen-in 1s ease-out}#announcement{position:fixed;bottom:28px;left:50%;transform:translate(-50%,15px);background:#57654b;color:#faf7ed;padding:12px 22px;border-radius:6px;font-size:12px;z-index:15;opacity:0;pointer-events:none;transition:opacity .3s,transform .3s}#announcement.show{opacity:1;transform:translate(-50%)}button:disabled{cursor:wait;opacity:.7}[hidden]{display:none!important}@keyframes arrive{0%{opacity:0;transform:translateY(25px) scale(.97)}to{opacity:1;transform:none}}@keyframes screen-in{0%{opacity:0;filter:blur(5px)}to{opacity:1;filter:none}}@media(max-width:950px){.desktop{gap:20px}.computer-area{transform:scale(.8);transform-origin:center;width:490px;margin-left:-35px}.disc-grid{grid-template-columns:repeat(3,minmax(0,1fr))}.detail-layout{gap:20px;padding:65px 30px 45px}.unboxing>.jewel{width:180px;height:180px}.optical-disc{width:165px;height:165px;top:54px}.disc-print{width:120px;height:120px}.unboxing.out .optical-disc{transform:translate(95px) rotate(35deg)}}@media(max-width:650px){.page-head{height:76px;padding:0 22px}.page-head>span{display:none}.page-head a span{font-size:10px;margin-left:10px}.desktop{grid-template-columns:1fr;padding:20px 25px 0;gap:20px}.intro h1{font-size:52px}.intro-copy{font-size:13px}.collection{width:100%;max-width:340px;margin-top:24px}.note{font-size:10px}.computer-area{width:490px;max-width:none;transform:scale(.64);transform-origin:top left;margin:25px 0 -120px;justify-self:start}.page-footer{padding:0 25px;font-size:10px;gap:10px}.page-footer>span{max-width:140px;line-height:1.6}.board-heading{padding:30px 22px 12px}.board-heading h2{font-size:22px}.board-heading p{font-size:12px;max-width:240px}.disc-grid{grid-template-columns:repeat(3,minmax(0,1fr));padding:12px 20px 30px;gap:22px 13px}.jewel{padding:4px 3px 4px 8px}.cover{padding:7px}.cover .cover-title{font-size:17px}.cover .serial{font-size:5px}.cover .cover-foot{font-size:4px}.album-label{font-size:11px;line-height:1.5;margin-top:10px}.album small{font-size:9px;line-height:1.5}.board-footer{padding:18px 22px;font-size:10px}.detail-layout{grid-template-columns:1fr;padding:40px 28px 30px;gap:0}.unboxing{width:290px;max-width:100%;height:240px;justify-self:center}.unboxing>.jewel{width:175px;height:175px}.unboxing .optical-disc{top:40px}.detail-copy h2{font-size:26px;margin:10px 0}.detail-copy>p{font-size:13px}.detail-copy .detail-question{margin-top:16px}.actions button{padding:13px 15px}.close{right:10px;top:10px}#detail{max-height:92svh;overflow:auto}.demo-tag{font-size:9px}.art.orbit:before{border-width:9px}.detail-layout .cover{padding:14px}.detail-layout .cover .serial{font-size:8px}.detail-layout .cover .cover-foot{font-size:6px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}.cover .cover-title{font-size:22px;line-height:1.03;letter-spacing:-.9px}.unboxing .cover-title{font-size:25px}.unboxing>.jewel{padding:12px 10px 12px 17px}@media(max-width:650px){.cover .cover-title{font-size:12px;letter-spacing:-.5px;line-height:1.08}.unboxing .cover-title{font-size:22px}}',Wa=[["AI 产品实习","工作经历",`THINK
& MAKE`,"#788572","#f1eddb","#b4c4a0","orbit","从需求分析到方案设计，记录 AI 产品项目如何一步步走向真实使用。"],["视觉设计选集","美术与设计",`WAYS
OF SEEING`,"#ddcfb5","#5c6552","#b88467","grid","关于色彩、形状与构图的探索，收录视觉作品与它们的创作过程。"],["LoRA 炼制记录","模型与实验",`A LITTLE
DIFFERENT`,"#859ca4","#f2e9ce","#c5d4cf","flower","从训练素材、参数调整到结果对比，记录每次模型实验的发现。"],["交互与界面","设计项目",`BETWEEN
YOU & ME`,"#bfc1a1","#485944","#e5dec2","wave","整理用户研究、任务流程与界面方案，观察设计如何回应真实问题。"],["夏日视觉实验","个人创作",`SUMMER
ON REPEAT`,"#d4bca5","#655f4c","#eee5cc","wave","把夏日的光线、颜色与记忆留在画面里。"],["生成式图像","AI 创作",`ANOTHER
POSSIBILITY`,"#b4bdab","#586857","#e7d6b8","flower","收录图像风格探索，把偶然的结果逐渐变成可控制的方法。"],["手绘与日常","个人存档",`SMALL
OBSERVATIONS`,"#b78970","#f6e7c8","#d1b596","orbit","一些手稿、练习，以及日常生活里值得留下的小小观察。"],["未完成的灵感","进行中",`TO BE
CONTINUED`,"#d9dacb","#65725d","#adb9a1","grid","给新的工作成果与还没完成的尝试，预留下一张光盘的位置。"]].map(([i,e,t,n,s,r,o,a])=>({title:i,category:e,en:t,paper:n,ink:s,accent:r,art:o,description:a}));function F1({host:i,onOpen:e,onClose:t,onOpenCollection:n,prepareInsertion:s,getDrivePoint:r,onLoad:o,onEject:a,onToggleFocus:c}){const l=i.attachShadow({mode:"open"}),h=matchMedia("(prefers-reduced-motion: reduce)").matches,u=T=>`--paper:${T.paper};--ink:${T.ink};--accent:${T.accent}`,f=(T,L)=>`<span class="jewel" style="${u(T)}"><span class="cover"><span class="serial">DOISH / VOL. ${String(L+1).padStart(2,"0")}</span><span class="art ${T.art}"></span><span class="cover-title">${T.en}</span><span class="cover-foot">A PERSONAL COLLECTION / ${T.category}</span></span></span>`,d=T=>`<span class="optical-disc" style="${u(T)}" aria-hidden="true"><span class="disc-print">${T.en}</span></span>`;l.innerHTML=`<style>${N1}
 :host{position:absolute;inset:0;z-index:3;pointer-events:none;font:14px Arial,"Microsoft YaHei",sans-serif;color:#515344}button,dialog{pointer-events:auto}dialog{position:fixed}.close{z-index:5}dialog::backdrop{background:#3e44383d;backdrop-filter:blur(5px)}
 #rack-trigger{position:absolute;pointer-events:none;background:transparent;border:0;border-radius:6px}
 #rack-trigger:focus-visible{outline:2px solid #abb991;outline-offset:4px}
 #announcement{position:fixed;bottom:100px}
 @media(max-width:650px){#announcement{bottom:140px;max-width:85vw;width:max-content}}
 #reading-actions{position:absolute;right:85px;bottom:20px;display:flex;gap:8px}
 #reading-actions[hidden]{display:none}
 #reading-actions button{position:static;border:1px solid #bcc4aa;background:#f9f6e9;padding:10px 14px;min-height:44px;border-radius:6px;font-size:12px}
 @media(max-width:650px){#reading-actions{right:80px;bottom:20px;gap:5px}#reading-actions button{padding:8px;font-size:11px}}
 </style><button id="rack-trigger" aria-label="打开狗鱼的光盘集" aria-haspopup="dialog"></button><div id="reading-actions" hidden><button id="screen-focus">返回房间</button><button id="open-collection" hidden>选择光盘</button><button id="eject" hidden>退出光盘 · 重新挑选 ↗</button></div>
 <dialog id="board" aria-labelledby="board-title"><div class="board-heading"><div><small>DOISH / COLLECTION</small><h2 id="board-title">一整架的灵感与经历。</h2><p>每张光盘装着一件做过的事。点击一张，先看看它。</p></div><button class="close" id="close-board" aria-label="收起光盘集">×</button></div><div class="disc-grid">${Wa.map((T,L)=>`<button class="album" data-album="${L}" aria-label="选择${T.title}">${f(T,L)}<span class="album-label">${T.title}</span><small>${T.category}</small></button>`).join("")}</div><footer class="board-footer"><span>留一些空位，给接下来发生的事。</span><span>8 / ∞</span></footer></dialog>
 <dialog id="detail" aria-labelledby="detail-title"><button class="close" id="close-detail" aria-label="放回光盘">×</button><div class="detail-layout"><div class="unboxing" id="unboxing"></div><div class="detail-copy"><small id="detail-category"></small><h2 id="detail-title"></h2><p id="detail-description"></p><p class="detail-question">这张光盘，你想怎么处理？</p><div class="actions"><button id="put-back">放回</button><button id="insert">放进电脑查看 →</button></div><span class="demo-tag">示例光盘 · 真实作品内容后续接入</span></div></div></dialog><div id="announcement" role="status" aria-live="polite"></div>`;const m=T=>l.querySelector(T),_=m("#rack-trigger"),g=m("#board"),p=m("#detail");let M=0,x=!1,v,w;const E=T=>new Promise(L=>setTimeout(L,h?0:T));function A(T){clearTimeout(w),m("#announcement").textContent=T,m("#announcement").classList.add("show"),w=setTimeout(()=>m("#announcement").classList.remove("show"),3600)}function R(){x||g.open||(e(),g.showModal(),m("#close-board").focus())}function y(){x||(g.close(),t(),_.focus())}_.addEventListener("click",R),m("#close-board").addEventListener("click",y),m(".disc-grid").addEventListener("click",T=>{const L=T.target.closest("[data-album]");if(!L||x)return;M=+L.dataset.album,v=L;const N=Wa[M];m("#unboxing").className="unboxing",m("#unboxing").innerHTML=d(N)+f(N,M),m("#detail-category").textContent=N.category,m("#detail-title").textContent=N.title,m("#detail-description").textContent=N.description,p.showModal(),m("#put-back").focus(),requestAnimationFrame(()=>requestAnimationFrame(()=>m("#unboxing").classList.add("out")))});async function S(){x||(x=!0,m("#unboxing").classList.add("returning"),await E(650),p.close(),v?.focus(),x=!1)}m("#put-back").addEventListener("click",S),m("#close-detail").addEventListener("click",S),g.addEventListener("cancel",T=>{T.preventDefault(),y()}),p.addEventListener("cancel",T=>{T.preventDefault(),S()});for(const T of[g,p])T.addEventListener("click",L=>{if(L.target!==T)return;const N=T.getBoundingClientRect();(L.clientX<N.left||L.clientX>N.right||L.clientY<N.top||L.clientY>N.bottom)&&(T===p?S():y())});return m("#insert").addEventListener("click",async()=>{if(x)return;x=!0,m("#insert").disabled=!0,m("#put-back").disabled=!0;const T=Wa[M],L=m("#unboxing .optical-disc"),N=L.getBoundingClientRect(),H=L.cloneNode(!0);H.classList.add("flying-disc"),H.style.cssText+=`;left:${N.left}px;top:${N.top}px;width:${N.width}px;height:${N.height}px;`,p.close(),g.close(),_.hidden=!0,m("#reading-actions").hidden=!0,l.append(H);try{const B=await s(),G=r(),$=G.x-N.left-N.width/2,O=G.y-N.top-N.height/2;await H.animate([{transform:"translate(0,0) rotate(35deg)",opacity:1},{offset:.68,transform:`translate(${$}px,${O-18}px) scale(.44) rotate(155deg)`,opacity:1},{transform:`translate(${$}px,${O}px) scale(.16,.025) rotate(180deg)`,opacity:0}],{duration:h||!B?1:1500,easing:"cubic-bezier(.4,0,.2,1)",fill:"forwards"}).finished,H.remove(),await o(T),m("#reading-actions").hidden=!1,m("#screen-focus").focus({preventScroll:!0})}catch(B){console.error("Disc insertion failed",B),A("光盘暂时未能载入，请重新选择。")}finally{H.remove(),x=!1,_.hidden=!1,m("#insert").disabled=!1,m("#put-back").disabled=!1,t()}}),m("#screen-focus").addEventListener("click",c),m("#open-collection").addEventListener("click",()=>{n(),R()}),m("#eject").addEventListener("click",()=>{x||(a(),m("#reading-actions").hidden=!0,R())}),{open:R,rackHasFocus:()=>_.matches(":focus-visible"),updateFocus(T,L){m("#reading-actions").hidden=!T&&!L,m("#screen-focus").textContent=T?"返回房间":"聚焦电脑",m("#eject").hidden=!L,m("#open-collection").hidden=L||!T},updateBounds(T){_.style.left=`${T.x}px`,_.style.top=`${T.y}px`,_.style.width=`${Math.max(38,T.w)}px`,_.style.height=`${Math.max(50,T.h)}px`}}}const O1=[["#c6dcd9","#f7e4c4","#8daba3","#d4bfa1","#ddd4ae","#aeb49a","#8faab0","#808d76","#748b65","#d1cc94","#fff2cd"],["#a9cfd8","#edf0d6","#8ca9a6","#c6a98d","#e0ceac","#abb49a","#99aeb2","#8a9787","#718d62","#b4be83","#fff2cf"],["#99a8c1","#efbf9b","#a392a3","#a88a78","#dbb48d","#a9aa8f","#898fa7","#8e807a","#6e795e","#b0a477","#ffdf9b"],["#34475e","#68778a","#566778","#5d5966","#8a8179","#758286","#596779","#646b73","#4c675d","#899377","#ffce88"]];function _i(i,e,t){i.fillStyle=e,i.beginPath(),t.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath(),i.fill()}function Ht(i,e,t,...n){i.strokeStyle=e,i.lineWidth=t,i.beginPath(),n.forEach(([s,r],o)=>o?i.lineTo(s,r):i.moveTo(s,r)),i.stroke()}function Qn(i,e,t,n,s,r){i.fillStyle=e,i.beginPath(),i.ellipse(t,n,s,r,0,0,Math.PI*2),i.fill()}function xo(i,e,t,n,s,r,o,a,c,l,h,u){_i(i,c,[[e,t],[e+r,t-25],[e+n+r,t-25],[e+n,t]]),_i(i,a,[[e+n,t],[e+n+r,t-25],[e+n+r,t+s-25],[e+n,t+s]]),i.fillStyle=o,i.fillRect(e,t,n,s);for(let m=0;m<4;m++){const _=t+12+m*(s-24)/4;for(let g=0;g<4;g++){const p=e+12+g*(n-15)/4,M=u&&(m*3+g*5+Math.floor(e))%5<2;if(i.fillStyle=a,i.fillRect(p-2,_-2,21,18),i.fillStyle=M?h:l,i.fillRect(p,_,17,13),Ht(i,o,1,[p+8,_],[p+8,_+13]),Ht(i,o,1,[p,_+6],[p+17,_+6]),(g+m)%3===0){const x=p-3,v=_+16;Ht(i,a,4,[x,v],[x+24,v]);for(let w=0;w<5;w++)Ht(i,a,1,[x+w*5,v],[x+w*5,v-7]);Ht(i,a,1,[x,v-7],[x+24,v-7])}}Ht(i,a,.7,[e,_+23],[e+n,_+23])}Ht(i,o,4,[e,t],[e+n,t],[e+n+r,t-25]);const f=e+n*.56,d=t-18;Ht(i,a,1,[f,d],[f,d-24]),Ht(i,a,1,[f-12,d-20],[f+12,d-25]),Ht(i,a,1,[f-7,d-24],[f-7,d-17])}function z1(i,e,t,n){const[s,r,o,a,c,l,h,u,f,d,m]=O1[e],_=e>=2,g=i.createLinearGradient(0,0,0,260);g.addColorStop(0,s),g.addColorStop(1,r),i.fillStyle=g,i.fillRect(0,0,640,560),i.save(),i.globalAlpha=e===3?.22:.66;for(let v=0;v<7;v++){const w=(v*127+t*(2+v%3))%885-120,E=40+v*37%103;Qn(i,r,w,E,64,9),Qn(i,r,w+20,E-7,35,11)}i.restore(),i.globalAlpha=.66;for(let v=0;v<15;v++){const w=v*46-22,E=16+v*23%39;i.fillStyle=o,i.fillRect(w,190-E,37,E+70),i.fillStyle=h;for(let A=0;A<3;A++)for(let R=0;R<3;R++)i.fillRect(w+5+R*10,195-E+A*10,3,4)}i.globalAlpha=1,_i(i,l,[[0,236],[322,209],[640,245],[640,560],[0,560]]),_i(i,c,[[313,216],[378,224],[555,560],[84,560]]),_i(i,u,[[324,218],[366,223],[498,560],[137,560]]);for(let v=0;v<6;v++){const w=258+v*v*10,E=343-(w-218)*.067;Ht(i,c,1+v*.35,[E,w],[E-4-v*1.5,w+6+v*3])}xo(i,24,238,178,157,49,c,a,a,h,m,_),xo(i,186,199,105,112,30,l,u,c,h,m,_),xo(i,473,220,164,143,45,c,a,l,h,m,_),xo(i,395,252,159,165,55,a,u,c,h,m,_);const p=e===3?"#b88570":"#a45f4c";i.fillStyle=f,i.fillRect(113,358,89,20),i.fillStyle="#f3e8ce",i.font="14px sans-serif",i.fillText("修车配钥匙",121,373),i.fillStyle=p,i.fillRect(398,373,153,26),i.fillStyle="#fff0d6",i.font="bold 17px sans-serif",i.fillText("街角副食店",411,392),_i(i,l,[[396,397],[550,397],[560,413],[386,413]]);for(let v=0;v<7;v++)_i(i,p,[[399+v*22,397],[408+v*22,397],[403+v*23,413],[393+v*23,413]]);i.fillStyle=h,i.fillRect(403,414,112,27),i.fillStyle=_?m:c,i.fillRect(439,415,32,29);for(let v=0;v<6;v++)i.fillRect(402+v*21,437,12,8);Ht(i,u,1,[62,298],[180,306]);for(let v=0;v<4;v++){const w=77+v*24,E=Math.sin(t*1.7+v)*2;_i(i,[l,r,p,h][v],[[w,300],[w+14,301],[w+13+E,320],[w+E,319]])}for(const v of[415,431])i.strokeStyle="#5d665d",i.lineWidth=1.7,i.beginPath(),i.arc(v,454,6,0,Math.PI*2),i.stroke();Ht(i,h,2,[415,454],[423,445],[431,454],[420,454],[415,454]);for(let v=0;v<3;v++){const w=(t*(8+v*2)+v*85)%275,E=548-w,A=119+v*18+w*.61,R=1-w/550;Qn(i,u,A,E+2,7*R,2*R),Ht(i,u,2*R,[A,E-5*R],[A+Math.sin(t*5+v)*4*R,E+2],[A,E-5*R],[A-Math.sin(t*5+v)*4*R,E+2]),Ht(i,[p,h,r][v],6*R,[A,E-15*R],[A,E-6*R]),Qn(i,_?c:a,A,E-19*R,3*R,3.5*R)}const M=569-(t*13+52)%350,x=299+(M-300)*.12;Qn(i,h,x,M,9,5),Qn(i,u,x+8,M+2,3,2),Qn(i,u,x-8,M+2,3,2),Qn(i,r,x,M-5,3,4),Ht(i,u,2,[60,446],[72,261]),Ht(i,u,2,[602,487],[595,219]);for(let v=0;v<3;v++)i.strokeStyle=u,i.lineWidth=1,i.beginPath(),i.moveTo(68,267+v*7),i.quadraticCurveTo(325,326+v*5,595,225+v*7),i.stroke();for(const[v,w,E]of[[25,458,75],[79,521,53],[600,499,66],[638,461,50]])for(let A=0;A<15;A++){const R=A*2.4,y=E*(A%5)/6,S=Math.sin(t*.9+A*.43)*3;Qn(i,A%3===0?d:f,v+Math.cos(R)*y+S,w+Math.sin(R)*y,E*.33,E*.25)}if(n){i.fillStyle="#526b843b",i.fillRect(0,0,640,560);for(let v=0;v<58;v++){const w=v*137.7%640,E=(v*83.1+t*(65+v%5*11))%610-25;Ht(i,"#e7f5fb85",v%3===0?1.5:.7,[w,E],[w-5,E+15+v%13])}}}const B1=""+new URL("window-apartments-u3Gb4SCH.webp",import.meta.url).href,Ts=[{id:"morning",name:"清晨",plate:0,light:"#fff0d6",strength:2.5,ambient:1.16,background:"#f8f0e7"},{id:"noon",name:"午后",plate:1,light:"#fff6df",strength:3,ambient:1.35,background:"#f8f0e7"},{id:"evening",name:"傍晚",plate:2,light:"#ffc18c",strength:2,ambient:1.03,background:"#e9d5c6"},{id:"night",name:"夜晚",plate:3,light:"#b3c9ee",strength:.55,ambient:.65,background:"#b7bec7"}];function Xa(){const i=new Date().getHours();return i>=5&&i<10?0:i>=10&&i<17?1:i>=17&&i<20?2:3}function k1({onLighting:i}){const e=document.createElement("canvas");e.width=1440,e.height=520;const t=e.getContext("2d");t.fillStyle="#e8e9d8",t.fillRect(0,0,e.width,e.height);const n=new Gt(e);n.colorSpace=_t,n.anisotropy=8;const s=document.createElement("canvas");s.width=e.width,s.height=e.height;const r=s.getContext("2d");let o=1,a=o,c=1,l=0,h=0,u=!0,f="noon",d=!1;try{const E=localStorage.getItem("doish-window-time");["auto",...Ts.map(A=>A.id)].includes(E)&&(f=E,o=a=f==="auto"?Xa():Ts.findIndex(A=>A.id===f))}catch{}const m=new Image,_=[],g=["brightness(.90) saturate(.79) hue-rotate(8deg)","brightness(1.02) saturate(.88)","brightness(.72) saturate(1.09) sepia(.24)","brightness(.26) saturate(.47) hue-rotate(163deg)"];m.onload=()=>{for(const E of g){const A=document.createElement("canvas");A.width=m.naturalWidth,A.height=m.naturalHeight;const R=A.getContext("2d");R.filter=E,R.drawImage(m,0,0),_.push(A)}u=!0},m.src=B1;function p(E,A){const{width:R,height:y}=e,S=_[A];if(!S){E.save(),E.scale(R/640,y/560),z1(E,A,l,d),E.restore();return}const T=10,L=Math.max((R+T*2)/S.width,(y+T*2)/S.height),N=S.width*L,H=S.height*L,B=Math.sin(l*.19)*4;E.drawImage(S,(R-N)/2+B,(y-H)/2,N,H);const G=E.createLinearGradient(0,0,R,y);if(G.addColorStop(0,A===3?"#788fac18":"#ffeac041"),G.addColorStop(.48,"#fff6e600"),G.addColorStop(1,"#3b3d361f"),E.fillStyle=G,E.fillRect(0,0,R,y),d){E.fillStyle="#566f824d",E.fillRect(0,0,R,y);for(let $=0;$<80;$++){const O=$*137.7%R,ee=($*83.1+l*(70+$%5*13))%(y+34)-19;E.strokeStyle=$%4===0?"#f1faff99":"#e7f5fb47",E.lineWidth=$%4===0?1.6:.8,E.beginPath(),E.moveTo(O,ee),E.lineTo(O-5,ee+12+$%16),E.stroke()}}}const M=document.createElement("label");M.className="daylight-control",M.innerHTML='<span id="daylight-status">窗外</span><select id="daylight" aria-label="窗外时段"><option value="auto">跟随时间</option><option value="morning">清晨</option><option value="noon">午后</option><option value="evening">傍晚</option><option value="night">夜晚</option></select>',document.querySelector("#room-menu").insertBefore(M,document.querySelector("#motion")),M.querySelector("select").value=f;function x(E){if(["auto",...Ts.map(A=>A.id)].includes(E)){f=E,M.querySelector("select").value=f;try{localStorage.setItem("doish-window-time",f)}catch{}v(f==="auto"?Xa():Ts.findIndex(A=>A.id===f))}}M.querySelector("select").addEventListener("change",E=>x(E.target.value));function v(E){E!==a&&(o=a,a=E,c=0,u=!0)}function w(E,A){if(h+=E,f==="auto"&&h>30&&(h=0,v(Xa())),A&&(l+=E,u=!0),c<1&&(c=A?Math.min(1,c+E/2.3):1,u=!0),!u)return;p(t,c===1?a:o),c<1&&(p(r,a),t.globalAlpha=c,t.drawImage(s,0,0),t.globalAlpha=1),n.needsUpdate=!0;const R=Ts[o],y=Ts[a],S=c*c*(3-2*c);i({name:y.name,sunlight:d?.3:ht.lerp([.52,1,.42,0][o],[.52,1,.42,0][a],S),color:new ze(R.light).lerp(new ze(y.light),S),strength:ht.lerp(R.strength,y.strength,S),ambient:ht.lerp(R.ambient,y.ambient,S),background:new ze(R.background).lerp(new ze(y.background),S),night:ht.lerp(o===3?1:0,a===3?1:0,S)}),u=!1}return{texture:n,tick:w,setMode:x,getMode:()=>f,setRain:E=>{d=E,u=!0},getRain:()=>d}}function uu(i,e,t,n=0){i.fillStyle="#e8cfaa",i.fillRect(0,0,e,t),i.save(),i.scale(e/800,t/600),i.beginPath(),i.rect(67,54,666,492),i.clip(),i.fillStyle="#aeb6a0",i.fillRect(0,0,800,600),i.fillStyle="#dfc596",i.beginPath(),i.moveTo(58,310),i.bezierCurveTo(70,273,105,276,120,275),i.bezierCurveTo(138,245,168,245,192,252),i.bezierCurveTo(205,218,239,207,262,215),i.bezierCurveTo(286,182,334,182,354,200),i.bezierCurveTo(373,151,416,149,439,160),i.bezierCurveTo(479,101,533,98,565,122),i.bezierCurveTo(598,147,605,160,615,182),i.bezierCurveTo(666,174,700,200,710,216),i.bezierCurveTo(733,197,767,211,793,245),i.lineTo(800,385),i.lineTo(0,385),i.fill();const s=(r,o)=>{i.fillStyle=r,i.beginPath(),o(),i.lineTo(800,600),i.lineTo(0,600),i.closePath(),i.fill()};s("#969b77",()=>{i.moveTo(0,331),i.bezierCurveTo(150,313,206,342,329,397),i.bezierCurveTo(468,427,639,363,800,332)}),s("#657d70",()=>{i.moveTo(0,451),i.bezierCurveTo(191,462,282,430,424,366),i.bezierCurveTo(556,308,693,259,800,294)}),s("#8e9363",()=>{i.moveTo(0,452),i.bezierCurveTo(165,398,265,432,379,472),i.bezierCurveTo(520,433,642,359,800,389)}),s("#73774b",()=>{i.moveTo(0,459),i.bezierCurveTo(206,420,313,452,450,500),i.bezierCurveTo(594,553,710,569,800,565)});for(let r=0;r<16500;r++)i.fillStyle=r%2?"#f7e7b832":"#44392223",i.fillRect(r*127.619%800,r*55.317%600,.7+r%3*.45,1.8);if(n>0){const r=1-n/6;i.translate(65+670*r,485+Math.sin(r*12)*9),i.globalAlpha=Math.min(.8,r*9,(1-r)*9),i.fillStyle="#e8d8ae",i.beginPath(),i.ellipse(0,0,13,4,0,0,Math.PI*2),i.moveTo(-8,0),i.lineTo(-20,-6),i.lineTo(-20,6),i.fill()}i.restore()}const du={monitor:"M5 4H19Q21 4 21 6V15Q21 17 19 17H5Q3 17 3 15V6Q3 4 5 4Z M7 21H17 M10 17L9 21 M14 17L15 21",record:"M4 14H20Q22 14 22 16V19H2V16Q2 14 4 14Z M16 14L19 6 M17 6H21 M5 14C5 10 15 10 15 14 M17 17H18",cabinet:"M3 5H21V19H3Z M12 5V19 M9 11V14 M15 11V14 M5 19V21 M19 19V21",art:"M3 4H21V20H3Z M3 16L8 11L12 15L16 10L21 16 M14 8H15",window:"M3 20V9C3 2 21 2 21 9V20Z M3 10H21 M12 10V20",lamp:"M10 11L17 5 M11 18L7 11L10 8 M5 20H17 M13 8C12 4 18 1 21 5L22 8Z M16 11L15 13 M20 11V13",leaf:"M5 20C6 15 10 9 17 6 M9 15C4 15 2 11 3 7C8 7 11 10 9 15Z M11 12C9 6 14 3 21 3C21 9 17 13 11 12Z",mug:"M3 8H16V15Q16 20 10 20Q3 20 3 15Z M16 10H19Q23 10 21 14Q20 16 16 16 M6 3V5 M12 3V5",draft:"M6 3H15L19 7V20H6Z M14 3V8H19 M9 12H16 M9 16H14",idea:"M8 17C8 14 5 13 5 9A7 7 0 0 1 19 9C19 13 16 14 16 17Z M9 21H15 M12 17V10 M10 9L12 11L14 9",bookmark:"M6 3H18V21L12 16L6 21Z M12 7V12 M9.5 9.5H14.5",guestbook:"M5 4H19Q21 4 21 6V20H5Q3 20 3 18V6Q3 4 5 4Z M7 4V20 M11 9H17 M11 13H15",fish:"M3 12C8 6 13 6 17 10L21 7V17L17 14C13 18 8 18 3 12Z M8 11H8.1",pen:"M4 20L5 15L16 4Q18 2 20 4Q22 6 20 8L9 19Z M14 6L18 10 M5 15L9 19",spoon:"M5 20L13 12 M12 9C12 5 16 2 19 4C23 7 18 13 14 13Q11 13 12 9Z",headphones:"M4 14V11A8 8 0 0 1 20 11V14 M4 13H7V20H5Q3 20 3 18V15Q3 13 4 13Z M20 13H17V20H19Q21 20 21 18V15Q21 13 20 13Z",wateringCan:"M8 10H16V19H8Z M8 11C1 11 1 18 8 17 M16 16L21 7 M19 7L23 9 M10 10V7H15",clock:"M21 12A9 9 0 1 1 3 12A9 9 0 1 1 21 12Z M12 6V12L16 14",slipper:"M3 17C3 14 6 12 9 11C12 10 12 5 17 5Q22 5 22 11Q22 16 15 18L5 19Q3 19 3 17Z M10 11Q15 11 17 16",chair:"M6 20L8 14 M17 20L15 14 M6 14H18V11H6Z M8 11V5Q8 3 10 3H14Q16 3 16 5V11"};let Ya;function H1(){if(Ya)return Ya;const i=128,e=document.createElement("canvas");e.width=e.height=i;const t=e.getContext("2d"),n=t.createImageData(i,i);let s=527;const r=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296);for(let o=0;o<n.data.length;o+=4){const a=r()<.48;n.data[o]=a?255:99,n.data[o+1]=a?251:75,n.data[o+2]=a?226:44,n.data[o+3]=r()**2*49}t.putImageData(n,0,0);for(let o=0;o<250;o++)t.fillStyle=o%2?"#8b69382c":"#fffbed7d",t.fillRect(r()*i,r()*i,1+r()*2,1);return Ya=e,e}function fu(i,e,t=0){const n=new Path2D,s=1+t,r=i-1-t,o=1+t,a=e-2.5-t,c=(o+a)/2,l=4.7+t*.24,h=4.5-t*.4;return n.moveTo(s+h,o),n.lineTo(r-h,o),n.quadraticCurveTo(r,o,r,o+h),n.lineTo(r,a-6),n.lineTo(r-6,a),n.lineTo(s+h,a),n.quadraticCurveTo(s,a,s,a-h),n.lineTo(s,c+l),n.bezierCurveTo(s+l*1.3,c+l,s+l*1.3,c-l,s,c-l),n.lineTo(s,o+h),n.quadraticCurveTo(s,o,s+h,o),n.closePath(),n}function V1(i,e,t){const n=Math.min(3,Math.max(2,window.devicePixelRatio||1));i.width=e*n,i.height=t*n;const s=i.getContext("2d");s.scale(n,n);const r=fu(e,t);s.save(),s.translate(0,1.2),s.fillStyle="#b8a477",s.fill(r),s.restore();const o=s.createLinearGradient(0,0,0,t);o.addColorStop(0,"#fbf0d5"),o.addColorStop(.48,"#f2e6c6"),o.addColorStop(1,"#e9dbb7"),s.fillStyle=o,s.fill(r);const a=s.createPattern(H1(),"repeat");a.setTransform(new DOMMatrix().scale(.58)),s.fillStyle=a,s.fill(r);const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,"#fff8e6"),c.addColorStop(1,"#b9a47d"),s.strokeStyle=c,s.lineWidth=.8,s.stroke(r);const l=fu(e,t,2.25),h=s.createLinearGradient(0,0,0,t);h.addColorStop(0,"#a58b5b75"),h.addColorStop(.53,"#bda77a45"),h.addColorStop(1,"#fff6df"),s.strokeStyle=h,s.stroke(l)}function G1(i,e){const t=i.getContext("2d");if(t.clearRect(0,0,24,24),t.lineCap=t.lineJoin="round",t.strokeStyle=t.fillStyle="#6d744c",t.lineWidth=1.65,e!=="disc"){t.stroke(new Path2D(du[e]??du.fish));return}t.beginPath(),t.arc(12,12,10.7,0,Math.PI*2),t.fill(),t.strokeStyle=t.fillStyle="#f4e7c7",t.lineWidth=.62;for(const n of[5.3,6.8,8.3])for(const s of[-1.3,1.84])t.beginPath(),t.arc(12,12,n,s,s+.95),t.stroke();t.beginPath(),t.arc(12,12,2.85,0,Math.PI*2),t.fill(),t.beginPath(),t.fillStyle="#6d744c",t.arc(12,12,.85,0,Math.PI*2),t.fill()}function W1(i,e=!1){const t=document.createElement("div");t.className="room-object-label",e?t.setAttribute("role","status"):t.setAttribute("aria-hidden","true"),t.innerHTML=`
    <canvas class="room-ticket-paper" aria-hidden="true"></canvas>
    <canvas class="room-ticket-icon" width="72" height="72" aria-hidden="true"></canvas>
    <i class="room-ticket-perforation" aria-hidden="true"></i>
    <span class="room-ticket-text"></span>
  `;const[n,s,,r]=t.children;s.getContext("2d").scale(3,3),i.append(t);let o,a=0;function c(l,h){if(r.textContent!==l){r.textContent=l;const u=t.offsetWidth;u!==a&&(a=u,V1(n,a,t.offsetHeight))}return h!==o&&(G1(s,h),o=h),a/2}return{element:t,setContent:c}}function X1(i,e){const{element:t,setContent:n}=W1(i),s=[],r=new I,o=new ze("#e8ecc0");function a(l){const h={value:0},u=new Map;for(const d of l)d.traverse(m=>{const _=m.material;if(!(!m.isMesh||m.userData.roomHoverIgnore||!_?.visible)&&!(!_.isMeshStandardMaterial&&!_.isMeshBasicMaterial)){if(!u.has(_)){const g=_.clone();g.onBeforeCompile=p=>{_.onBeforeCompile(p),p.uniforms.roomHoverAmount=h,p.uniforms.roomHoverColor={value:o},p.fragmentShader=`uniform float roomHoverAmount;
uniform vec3 roomHoverColor;
`+p.fragmentShader.replace("#include <opaque_fragment>",`
                outgoingLight += roomHoverAmount * roomHoverColor * .14;
                #include <opaque_fragment>
              `)},g.customProgramCacheKey=()=>"room-hover|"+_.customProgramCacheKey(),u.set(_,g)}m.material=u.get(_)}});const f={amount:h};return s.push(f),f}function c(l,h,u){for(const M of s){const x=M===l?.effect?1:0,v=h/(x?.11:.16);M.amount.value=u?ht.clamp(M.amount.value+(x?v:-v),0,1):x}if(t.classList.toggle("is-still",!u),!l){t.classList.remove("is-visible");return}const f=n(l.label(),l.icon);l.anchor.localToWorld(r.copy(l.hitPoint??l.anchorPoint)),r.project(e);const d=i.clientWidth,m=i.clientHeight,_=Math.min(f+8,d/2),g=ht.clamp((r.x+1)*d/2,_,d-_),p=ht.clamp((1-r.y)*m/2-10,40,m-12);t.style.left=g+"px",t.style.top=p+"px",t.classList.toggle("is-visible",Math.abs(r.x)<=1&&Math.abs(r.y)<=1&&r.z<1)}return{register:a,tick:c}}function Y1({root:i,canvas:e,camera:t,controls:n,box:s,mat:r,wood:o,cream:a,cabinetDoors:c,deskHeight:l,windowView:h,mountedWindow:u,monitor:f,tower:d,rack:m,collectionUI:_,setLocked:g,player:p,furniture:M,toggleDay:x,toggleComputer:v,computerLabel:w,toggleRecord:E,isRecordPlaying:A}){const R=matchMedia("(prefers-reduced-motion: reduce)").matches,y=e.parentElement,S=X1(y,t),T=[],L=[!1,!1,!1];let N=null,H=null,B=null,G=0,$=0,O=null,ee=!R;function se(D,Z,ae,ve,{available:be=()=>!0,parts:it=[D],anchor:Ge=D,atHit:tt=!1,movesOnClick:nt=!1}={}){Ge.updateWorldMatrix(!0,!0);const mt=new Yn().setFromObject(Ge),ut=Ge.worldToLocal(mt.getCenter(new I).setY(mt.max.y)),jt={object:D,label:typeof Z=="function"?Z:()=>Z,icon:ae,action:ve,available:be,parts:it,anchor:Ge,anchorPoint:ut,atHit:tt,movesOnClick:nt,effect:S.register(it)};return T.push(jt),jt}const fe=r("#e4dcc6",.9);r("#727c65",.8);function xe(D,Z=960,ae=440){const ve=document.createElement("canvas");ve.width=Z,ve.height=ae,D(ve.getContext("2d"),Z,ae);const be=new Gt(ve);return be.colorSpace=_t,be}function Pe(D,Z,ae,ve,be){D.fillStyle=be,D.beginPath(),D.ellipse(Z,ae,ve,ve*.35,0,0,Math.PI*2),D.fill(),D.beginPath(),D.moveTo(Z-ve*.8,ae),D.lineTo(Z-ve*1.45,ae-ve*.42),D.lineTo(Z-ve*1.45,ae+ve*.42),D.closePath(),D.fill(),D.fillStyle="#f3eddd",D.beginPath(),D.arc(Z+ve*.55,ae-ve*.05,ve*.055,0,Math.PI*2),D.fill()}const Be=new at;Be.position.set(4.04,3.86,-1.82),Be.scale.setScalar(.6),i.add(Be),s(1.82,1.4,.08,0,0,0,o,.022,Be),s(1.73,1.31,.016,0,0,.042,r("#956c43",.68),.01,Be);const Ne=xe(uu,800,600),K=new Et({map:Ne,roughness:.94}),J=new We(new Ft(1.67,1.25),K);J.position.z=.054,J.receiveShadow=!0,Be.add(J);let _e=0;function ye(D,Z=0){if(!_e){uu(D,800,600,Z);return}D.fillStyle="#d9d3bd",D.fillRect(0,0,800,600),D.fillStyle="#2f4e52",D.fillRect(67,54,666,492),D.save(),D.beginPath(),D.rect(67,54,666,492),D.clip(),D.fillStyle="#cabb90",D.beginPath(),D.arc(565,162,36,0,Math.PI*2),D.fill(),D.strokeStyle="#a0ada0",D.lineWidth=2;for(let be=0;be<23;be++){const it=246+be*15;D.beginPath(),D.moveTo(60,it),D.bezierCurveTo(231,it-160,311,it+113,463,it-4),D.bezierCurveTo(538,it-68,632,it-75,743,it-28),D.stroke()}Z>0&&Pe(D,120+555*(1-Z/6),428,11,"#e6d5a7"),D.restore()}function pe(){ye(Ne.image.getContext("2d"),$),Ne.needsUpdate=!0}function ke(){z(_e?"夜色等高线":"午后的山景","",()=>{const D=document.createElement("canvas");D.width=800,D.height=600,ye(D.getContext("2d")),D.className="life-painting",D.setAttribute("role","img"),D.setAttribute("aria-label",_e?"墨蓝底色上的淡金月亮与山形线条":"奶油色纸面上的墨绿叠山和浅金色云层"),ce.append(D),W(_e?"换回午后山景":"换成夜色等高线",()=>{_e=1-_e,pe(),ke()})})}se(Be,"查看挂画","art",ke);const qe=u.hit;se(qe,"查看窗外","window",Ae,{parts:[u.frame],atHit:!0}),c.forEach(({door:D},Z)=>{Z===2?se(D,"右侧柜门","cabinet"):se(D,()=>L[Z]?"关闭柜门":"打开柜门","cabinet",()=>{L[Z]=!L[Z]},{movesOnClick:!0})});const U=se(m,"打开光盘集","disc",_.open);se(p,()=>A()?"暂停唱片":"播放唱片","record",E),se(f,w,"monitor",v,{parts:[f,d],atHit:!0}),se(M.lamp,()=>h.getMode()==="night"?"切换日间":"切换夜间","lamp",x),se(M.plant,"窗边藤蔓","leaf",null,{atHit:!0}),se(M.mug,"咖啡杯","mug");const ne=new Map;M.props.group.traverse(D=>{D.isMesh&&ne.set(D,null)});for(const{object:D,label:Z,icon:ae}of M.props.labels){D.updateWorldMatrix(!0,!0);const ve=new Yn().setFromObject(D),be=D.worldToLocal(ve.getCenter(new I).setY(ve.max.y)),it={object:D,label:()=>Z,icon:ae,anchor:D,anchorPoint:be,available:()=>!0};D.traverse(Ge=>{Ge.isMesh&&ne.set(Ge,it)})}function j(D,Z,ae,ve,be,it,Ge,tt){const nt=Ge===null,mt=nt?.34:.46,ut=new at;ut.position.set(D,Z,ae),i.add(ut),nt&&(ut.rotation.y=.18);const jt=r(it,nt?.86:void 0);nt?(s(.65,.012,mt,0,-.039,0,jt,.006,ut),s(.035,.082,mt,-.306,0,0,jt,.014,ut)):s(.65,.09,mt,0,0,0,jt,.018,ut),s(.6,nt?.066:.05,mt-.03,.01,0,.005,fe,.006,ut),s(.65,.012,mt,0,.039,0,jt,.006,ut);const dn=xe((Pt,Ii,Br)=>{nt?(Pt.fillStyle="#e9d6ab",Pt.beginPath(),Pt.roundRect(105,93,302,174,9),Pt.fill(),Pt.strokeStyle="#8b694a",Pt.lineWidth=2,Pt.strokeRect(117,105,278,150)):(Pt.strokeStyle="#293a3170",Pt.lineWidth=2,Pt.strokeRect(16,16,Ii-32,Br-32)),Pt.fillStyle=nt?"#533e2d":"#293a31",Pt.font=nt?'600 64px "Microsoft YaHei"':'48px "Microsoft YaHei"',Pt.textAlign="center",Pt.fillText(ve,Ii/2,Br/2+16)},512,360),li=new We(new Ft(.6,mt-.04),new rn({map:dn,transparent:!0,depthWrite:!1}));li.rotation.x=-Math.PI/2,li.position.y=.047,ut.add(li);const Fn={group:ut,index:Ge,title:ve,showContent:tt};return Fn.target=se(ut,ve,be,()=>X(Fn),{available:()=>nt||L[Ge]}),Fn}const ie=[j(-.92,.808,-.38,"草稿","draft","#748b76",0,()=>de("草稿")),j(-.88,.416,-.33,"灵感","idea","#ad8b64",0,()=>de("灵感")),j(.78,.808,-.4,"收藏","bookmark","#7b8b9f",1,()=>de("收藏")),j(-1.66,l+.045,-.25,"访客簿","guestbook","#9c7967",null,De)],te=xe((D,Z,ae)=>{D.fillStyle="#eee4c7",D.beginPath(),D.ellipse(Z/2,ae/2,Z*.47,ae*.43,-.13,0,Math.PI*2),D.fill(),Pe(D,Z*.52,ae*.5,Z*.23,"#6c8a77")},256,160),ue=new We(new Ft(.23,.15),new rn({map:te,transparent:!0}));ue.position.copy(f.localToWorld(new I(-.4,.34,.34))),ue.rotation.z=-.18,i.add(ue),se(ue,"小鱼贴纸","fish",()=>{$=6});const Q=document.createElement("dialog");Q.className="life-dialog",Q.setAttribute("aria-labelledby","life-title"),Q.innerHTML='<button class="life-close" aria-label="关闭，回到房间">×</button><h2 id="life-title"></h2><p class="life-description"></p><div class="life-body"></div>',document.body.append(Q);const ce=Q.querySelector(".life-body");let Fe=null;Q.querySelector(".life-close").onclick=b,Q.addEventListener("cancel",D=>{D.preventDefault(),b()}),Q.addEventListener("click",D=>{if(D.target!==Q)return;const Z=Q.getBoundingClientRect();(D.clientX<Z.left||D.clientX>Z.right||D.clientY<Z.top||D.clientY>Z.bottom)&&b()});const Oe=Q.querySelector("h2"),P=Q.querySelector(".life-description");Q.addEventListener("close",()=>{Q.open||O||(g(!1),Fe?.focus?.({preventScroll:!0}))});function b(){O?.state==="shown"&&(O.state="returning",O.started=performance.now(),y.inert=!0),Q.close()}function z(D,Z,ae){const ve=Q.open;!ve&&!O&&(Fe=document.activeElement),Oe.textContent=D,P.textContent=Z,P.hidden=!Z,ce.replaceChildren(),ae?.(),ve||(Q.classList.toggle("life-unfold",!!O),Q.classList.toggle("life-still",!ee),g(!0),y.inert=!1,Q.showModal()),Q.scrollTop=0,Q.querySelector(".life-close").focus({preventScroll:!0})}function X(D,Z=!1){if(O)return;const ae=Z&&D.index!==null&&!L[D.index]?.35:0;D.index!==null&&(L[D.index]=!0),Q.open||(Fe=document.activeElement);const{group:ve}=D;O={item:D,state:"leaving",started:performance.now(),openDelay:ae,start:ve.position.clone(),rotation:ve.quaternion.clone()},Q.open&&Q.close(),g(!0),y.inert=!0}function oe(){if(!O)return;const{item:D,start:Z,rotation:ae,state:ve}=O,be=innerWidth<=740,it=(performance.now()-O.started)/1e3,Ge=ve==="shown"||!ee?1:Math.min(1,it/(ve==="leaving"?1.22+O.openDelay:.62)),tt=ve==="returning"?1-Ge:Ge,nt=ve==="leaving"?Math.max(0,(tt*(1.22+O.openDelay)-O.openDelay)/1.22):tt,mt=ht.smoothstep(nt,.27,1),ut=ht.smoothstep(nt,0,.27),jt=2.3,dn=2*jt*Math.tan(ht.degToRad(t.getEffectiveFOV()/2)),li=new I((be?0:-.55)*dn*t.aspect/2,(be?.58:.1)*dn/2,-jt).applyQuaternion(t.quaternion).add(t.position),Fn=t.quaternion.clone().multiply(new Ei().setFromAxisAngle(new I(1,0,0),Math.PI/2)),Pt=Z.clone();Pt.z+=ut*(D.index===null?.34:1.2),Pt.y+=ut*(D.index===null?.27:.12),D.group.position.lerpVectors(Pt,li,mt),D.group.position.y+=Math.sin(mt*Math.PI)*.28,D.group.quaternion.copy(ae).slerp(Fn,mt);const Ii=dn*(be?.19:.27)/.65;D.group.scale.setScalar(ht.lerp(1,Ii,mt)),Ge===1&&ve==="leaving"?(O.state="shown",D.showContent()):Ge===1&&ve==="returning"&&(O=null,y.inert=!1,g(!1),Fe?.focus?.({preventScroll:!0}))}function W(D,Z,ae=ce){const ve=document.createElement("button");return ve.textContent=D,ve.onclick=Z,ae.append(ve),ve}function Ae(){z("窗外的街角","",()=>{const D=document.createElement("div");D.className="life-options",ce.append(D);for(const[Z,ae]of[["auto","跟随时间"],["morning","清晨"],["noon","午后"],["evening","傍晚"],["night","夜晚"]])W(ae,()=>{h.setMode(Z),Ae()},D).setAttribute("aria-pressed",String(h.getMode()===Z));W(h.getRain()?"雨停了，看看晴天":"让窗外下一点雨",()=>{h.setRain(!h.getRain()),Ae()})})}function de(D){z(D,D==="草稿"?"小鱼的形状练习 · 两页示例":D==="灵感"?"取自房间的三种颜色":"留给以后收录的票根和旧物。",()=>{const Z=document.createElement("div");if(Z.className="life-sketch",ce.append(Z),D==="草稿"){let ae=0;const ve=document.createElement("canvas");ve.width=760,ve.height=380,Z.append(ve);const be=document.createElement("p");Z.append(be);const it=()=>{const Ge=ve.getContext("2d");Ge.fillStyle="#e9e2cf",Ge.fillRect(0,0,760,380),Ge.strokeStyle="#738371",Ge.lineWidth=2;for(let tt=0;tt<5;tt++)Ge.beginPath(),Ge.ellipse(130+tt*125,160+Math.sin(tt)*35,50,20+ae*8,-.2,0,Math.PI*2),Ge.stroke();if(ae)for(let tt=0;tt<5;tt++)Pe(Ge,130+tt*125,160+Math.sin(tt)*35,40,"#829782");be.textContent=ae?"形状慢慢变成了小鱼。示意页，等待真实创作替换。":"从几条随手画的弧线开始。示意草稿，并非个人作品档案。"};it(),W("翻一页",()=>{ae=1-ae,it()})}else if(D==="灵感")for(const[ae,ve]of[["柜门","#8d9d84"],["纸页","#d5c9ad"],["水面","#7d9b9b"]]){const be=document.createElement("span");be.className="life-swatch",be.style.background=ve,be.textContent=ae+" "+ve,Z.append(be)}else Z.textContent="收藏暂为空。";W("放回柜子",b)})}let we=[];try{const D=JSON.parse(localStorage.getItem("doish-guestbook-v1")||"[]");Array.isArray(D)&&(we=D.filter(Z=>Z&&typeof Z.note=="string"&&typeof Z.stamp=="string"&&typeof Z.date=="string").slice(-30))}catch{}function De(){z("来过这里","这是保存在当前浏览器的访客簿，不会公开上传。给这次停留盖一个章吧。",()=>{const D=document.createElement("form");D.className="life-guestform",ce.append(D);const Z=document.createElement("div");Z.className="life-options",D.append(Z);let ae="小鱼";for(const nt of["小鱼","一片叶子","一杯茶"]){const mt=W(nt,()=>{ae=nt,Z.querySelectorAll("button").forEach(ut=>ut.setAttribute("aria-pressed",String(ut===mt)))},Z);mt.type="button",mt.setAttribute("aria-pressed",String(nt===ae))}const ve=document.createElement("label");ve.textContent="留一句话（可选，最多 80 字）",D.append(ve);const be=document.createElement("textarea");be.maxLength=80,be.rows=2,be.placeholder="今天也来这里坐了一会儿。",be.setAttribute("aria-label","访客簿留言"),ve.append(be);const it=W("盖章，留下这次停留",()=>{},D);it.type="submit";const Ge=document.createElement("p");Ge.setAttribute("role","status"),D.append(Ge),D.onsubmit=nt=>{nt.preventDefault();const mt={stamp:ae,note:be.value.trim().slice(0,80),date:new Date().toLocaleString("zh-CN")},ut=[...we,mt].slice(-30);try{localStorage.setItem("doish-guestbook-v1",JSON.stringify(ut)),we=ut,De(),ce.querySelector("[role=status]").textContent="已盖章，保存在这个浏览器里。"}catch{Ge.textContent="浏览器暂时无法保存，请允许本地存储后再试。"}};const tt=document.createElement("div");tt.className="life-entries",ce.append(tt);for(const nt of[...we].reverse()){const mt=document.createElement("article"),ut=document.createElement("strong"),jt=document.createElement("p"),dn=document.createElement("small");ut.textContent=nt.stamp,jt.textContent=nt.note||"来这里坐了一会儿。",dn.textContent=nt.date,mt.append(ut,jt,dn),tt.append(mt)}if(!we.length){const nt=document.createElement("p");nt.textContent="本子还是空白的，第一枚章留给你。",tt.append(nt)}we.length&&W("清空这个浏览器的记录",()=>{z("清空本地访客簿？","只会删除这个浏览器里的记录，清空后无法恢复。",()=>{W("保留记录",De),W("确认清空",()=>{try{localStorage.removeItem("doish-guestbook-v1"),we=[],De()}catch{P.textContent="暂时无法清空记录。"}})})})})}const le=document.createElement("button");le.className="life-explore",le.textContent="逛逛房间",le.onclick=()=>z("逛逛房间","",()=>{W("打开电脑",()=>{b(),v()}),W(h.getMode()==="night"?"台灯 · 回到日间":"台灯 · 切到夜间",()=>{x(),b()}),W("窗边 · 推窗与晴雨",Ae),W(A()?"暂停唱片":"播放唱片",()=>{E(),b()}),ie.forEach(D=>W(D.title,()=>X(D,!0))),W("找找小鱼贴纸",()=>{Q.close(),$=6}),W("看看墙上的画",ke)}),document.querySelector("#room-menu").append(le);const Ee=new _d,He=new re;let Re=null,Se=null,Ye=0;function F(D,Z=!0){if(!n.enabled)return null;const ae=e.getBoundingClientRect();He.set((D.clientX-ae.left)/ae.width*2-1,1-(D.clientY-ae.top)/ae.height*2),Ee.setFromCamera(He,t);for(const ve of Ee.intersectObjects(i.children,!0)){const be=ve.object;let it=!0;for(let tt=be;tt;tt=tt.parent)if(!tt.visible){it=!1;break}if(!it)continue;if(ne.has(be)){const tt=ne.get(be);if(Z&&tt)return tt;continue}const Ge=T.find(tt=>tt.available()&&(be===tt.object||tt.parts.some(nt=>he(nt,be))));if(Ge)return Ge.atHit&&Ge!==N&&(Ge.hitPoint=Ge.anchor.worldToLocal(ve.point)),Ge;if(be.material?.visible!==!1&&!be.material?.transparent&&!be.userData.skipContactShadows)break}return null}function he(D,Z){for(let ae=Z;ae;ae=ae.parent)if(ae===D)return!0;return!1}function Me(){N=null,H=null,Se=null,e.style.cursor=""}function Le(D){N=D&&!Re?F(D):null,e.style.cursor=N?.action?"pointer":""}e.addEventListener("pointerdown",D=>{Re={x:D.clientX,y:D.clientY}}),e.addEventListener("pointerup",D=>{const Z=F(D,!1),ae=Re&&Math.hypot(D.clientX-Re.x,D.clientY-Re.y)<6;Re=null,Se=D.pointerType==="touch"?null:D,N=D.pointerType==="touch"||ae&&Z?.movesOnClick?null:F(D),ae&&Z?.action&&(H=Z,G=performance.now()+700,Z.action()),e.style.cursor=n.enabled&&N?.action?"pointer":""}),e.addEventListener("pointercancel",()=>{Re=null,Me()}),e.addEventListener("pointermove",D=>{H=null,Se=D.pointerType==="touch"?null:D,Le(Se)}),e.addEventListener("pointerleave",Me);let me=0;return{hovered:D=>n.enabled&&B?.object===D,tick(D,Z){ee=Z&&!R;const ae=performance.now();ae>=G&&(H=null);let ve=!1;c.forEach(({hinge:be},it)=>{const Ge=L[it]?-1.95:0;if(be.rotation.y===Ge)return;ve=!0;const tt=ht.damp(be.rotation.y,Ge,7,D);be.rotation.y=ee&&Math.abs(tt-Ge)>.006?tt:Ge,be.updateWorldMatrix(!0,!0)}),n.enabled&&Se&&!Re&&!H&&ve&&ae>=Ye&&(Le(Se),Ye=ae+60),oe(),B=n.enabled?(N?.available()?N:null)??H??(_.rackHasFocus()?U:null):O?.state==="leaving"&&ae-O.started<550?O.item.target:null,S.tick(B,D,ee),$>0&&($=Math.max(0,$-D),ee&&(++me%4===0||$===0)&&pe())}}}function q1(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Mt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=pu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const m=pu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function pu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new un(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const j1=3.68,Z1=2.64,ti=1024,dr=768;function mu(){const i=document.createElement("canvas");return i.width=ti,i.height=dr,i}function gu(i,e){const t=new Gt(i);return t.wrapS=t.wrapT=Wn,t.anisotropy=8,t.colorSpace=e,t}function K1(i,e,t,n,s,r){i.save(),i.translate(e,t),i.scale(n,n),i.rotate(s),i.lineCap="round",i.strokeStyle="#7c8757",i.lineWidth=1.5,i.beginPath(),i.moveTo(-1,36),i.quadraticCurveTo(-6,14,-2,-23),i.moveTo(-2,17),i.quadraticCurveTo(11,-4,16,-14),i.moveTo(-4,21),i.quadraticCurveTo(-11,8,-19,0),i.stroke();for(const[a,c,l,h]of[[-3,23,-.85,14],[-2,17,.99,12],[-4,12,-.9,10],[7,4,1.1,10],[-12,7,-.85,9],[-3,1,-.85,8]])i.save(),i.translate(a,c),i.rotate(l),i.beginPath(),i.moveTo(0,0),i.quadraticCurveTo(-7,-h*.62,0,-h),i.quadraticCurveTo(5,-h*.65,0,0),i.fillStyle=r()>.5?"#8d9a62c9":"#6f8258bd",i.fill(),i.strokeStyle="#d4d6a779",i.lineWidth=.7,i.beginPath(),i.moveTo(0,-1),i.quadraticCurveTo(-1,-h*.45,0,-h+2),i.stroke(),i.restore();const o=["#768f9dcb","#829caebd","#8ca7b4c9","#6e8ea5c7"];for(const[a,c,l]of[[-2,-25,7],[16,-15,5.7],[-20,-1,4.7]]){const h=r()*Math.PI;for(let u=0;u<5;u++){const f=h+u*Math.PI*2/5,d=l*(.62+r()*.09);i.fillStyle=o[Math.floor(r()*o.length)],i.beginPath(),i.ellipse(a+Math.cos(f)*d,c+Math.sin(f)*d,l*.59,l*.43,f,0,Math.PI*2),i.fill()}i.fillStyle="#d1c079",i.beginPath(),i.arc(a,c,l*.24,0,Math.PI*2),i.fill()}i.restore()}function $1(i,e,t,n){i.save(),i.translate(e,t),i.rotate(n),i.strokeStyle="#8b946373",i.lineWidth=1.25,i.beginPath(),i.moveTo(0,11),i.quadraticCurveTo(-1,3,1,-5),i.stroke(),i.fillStyle="#929c6b91",i.beginPath(),i.ellipse(1,-5,2.1,3.8,.22,0,Math.PI*2),i.ellipse(-1,2,1.6,3,-.64,0,Math.PI*2),i.fill(),i.restore()}function J1(){const i=mu(),e=i.getContext("2d"),t=mu(),n=t.getContext("2d");let s=30787;const r=()=>(s=s*16807%2147483647,s/2147483647);n.fillStyle="#eee0c1",n.fillRect(0,0,ti,dr),e.fillStyle="#808080",e.fillRect(0,0,ti,dr);for(let o=0;o<41e3;o++){const a=r()*ti,c=r()*dr,l=.45+r()*3.6;n.fillStyle=o%3===0?"#a88a6216":"#fff9e41a",n.fillRect(a,c,l*.54,l),e.fillStyle=o%3===0?"#22222261":"#ededed69",e.fillRect(a,c,l*.57,l)}for(let o=0;o<3250;o++){const a=r()*ti,c=r()*dr,l=2+r()*7;e.strokeStyle=o%2?"#d5d5d562":"#44444462",e.lineWidth=.6+r()*.8,e.beginPath(),e.moveTo(a,c),e.quadraticCurveTo(a+2,c+l*.27,a+(r()-.5)*3,c+l),e.stroke()}for(let o=0;o<4;o++)for(let a=0;a<4;a++){const c=128+a*256+(o%2?112:0)+(r()-.5)*29,l=89+o*192+(r()-.5)*24,h=.9+r()*.25,u=(r()-.5)*.28,f=s;for(const d of[-ti,0,ti])s=f,K1(n,c+d,l,h,u,r);if((o+a)%3!==0){const d=c+82+r()*69,m=l+31+r()*49;for(const _ of[-ti,0,ti])$1(n,d+_,m,-u)}}return new Et({map:gu(t,_t),bumpMap:gu(i,ni),bumpScale:.009,roughness:.88})}function Mo(i){const e=i.geometry.attributes.position,t=i.geometry.attributes.uv;for(let n=0;n<e.count;n++)t.setXY(n,(e.getX(n)+i.position.x)/j1,(e.getY(n)+i.position.y)/Z1);t.needsUpdate=!0}const Ls={left:-4.63,right:3.06,sill:2.44,spring:4.43,rise:.76,z:-1.86};function So(i){const[e,...t]=i,n=new qs;n.moveTo(...e);for(const s of t)n.lineTo(...s);return n.closePath(),n}function Q1(i){const e=new rn({map:i,toneMapped:!1});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <map_fragment>",`
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
      diffuseColor.rgb *= mix(blue, outside * vec3(1.1, 0.88, 0.54), gold * 0.48);
    `)},e}function ex({root:i,box:e,wood:t,wall:n,texture:s}){const{left:r,right:o,sill:a,spring:c,rise:l,z:h}=Ls,u=o-r,f=(r+o)/2,d=21.12,m=.13,_=-1.96,g=Array.from({length:81},(B,G)=>{const $=G/80;return[r+$*u,c+4*l*$*(1-$)]});Mo(e(r+11,21,m,(r-11)/2,10.62,_,n,0)),Mo(e(11-o,21,m,(o+11)/2,10.62,_,n,0)),Mo(e(u,a-.12,m,f,(a+.12)/2,_,n,0));const p=new qi(So([...g,[o,d],[r,d]])),M=new We(p,n);M.position.z=_+m/2,Mo(M),M.receiveShadow=!0,i.add(M);const x=new at;x.position.set(f,(a+c)/2,h),i.add(x);const v=(B,G,$,O,ee,se,fe)=>e(B,G,$,O-x.position.x,ee-x.position.y,se-h,t,fe,x);v(u+.18,.076,.31,f,a-.034,h+.027,.022),v(u,.115,.19,f,c,h,.017),v(u,.071,.17,f,a+.023,h,.012);for(const B of[r,o])v(.11,c-a,.21,B,(a+c)/2,h,.016);v(.069,c-a,.147,f,(a+c)/2,h+.004,.011);const w=new Rr(So([...g.map(([B,G])=>[B,G-.032]),...g.slice().reverse().map(([B,G])=>[B,G+.037])]),{depth:.16,bevelEnabled:!0,bevelSize:.023,bevelThickness:.018,bevelSegments:3}),E=w.attributes.uv;for(let B=0;B<E.count;B++)E.setXY(B,(E.getX(B)+5)/u,E.getY(B));const A=new We(w,t);A.position.set(-x.position.x,-x.position.y,-.077),A.castShadow=A.receiveShadow=!0,x.add(A);const R=new We(new Ft(u,c-a),new rn({map:s,toneMapped:!1})),y=R.geometry.attributes.uv;for(let B=0;B<y.count;B++)y.setY(B,y.getY(B)*.75);R.position.set(f,(a+c)/2,-2.02),R.userData.skipContactShadows=!0,i.add(R);const S=new qi(So(g)),T=S.attributes.uv;for(let B=0;B<T.count;B++)T.setXY(B,(T.getX(B)-r)/u,.75+.245*(T.getY(B)-c)/l);const L=new We(S,Q1(s));L.position.z=-2.02,L.userData.skipContactShadows=!0,i.add(L);const N=new We(S,new tm({color:"#182d28",opacity:.24,depthWrite:!1}));N.position.z=-1.988,N.receiveShadow=!0,N.raycast=()=>{},N.userData.skipContactShadows=!0,i.add(N);const H=new We(new qi(So([[r,a],[o,a],...g.slice().reverse()])),new rn({visible:!1}));return H.geometry.translate(-f,-(a+c)/2,0),H.position.set(f,(a+c)/2,-1.756),i.add(H),{hit:H,frame:x}}const _u=[[[0,0],[-.18,.05],[-.32,.21],[-.34,.43],[-.26,.66],[-.11,.87],[.035,1],[.17,.78],[.31,.57],[.34,.36],[.25,.15]],[[0,0],[-.25,.065],[-.34,.28],[-.31,.55],[-.23,.72],[-.12,.86],[-.04,1],[.14,.88],[.26,.69],[.29,.48],[.24,.22],[.13,.06]],[[0,.05],[-.16,.01],[-.31,.12],[-.39,.33],[-.32,.6],[-.16,.83],[.03,1],[.22,.8],[.35,.57],[.36,.32],[.29,.13],[.16,.04]],[[0,0],[-.15,.09],[-.23,.34],[-.22,.6],[-.14,.83],[-.02,1],[.11,.82],[.2,.62],[.23,.38],[.16,.15]]],vu=[[[0,.05],[-.2,.015],[-.34,.1],[-.43,.21],[-.345,.29],[-.31,.36],[-.46,.47],[-.58,.65],[-.38,.635],[-.23,.55],[-.13,.62],[-.09,.79],[.035,1],[.17,.78],[.23,.6],[.3,.565],[.43,.65],[.6,.67],[.5,.48],[.33,.37],[.37,.29],[.46,.18],[.28,.075],[.14,.025]],[[0,0],[-.16,.025],[-.32,.16],[-.39,.33],[-.54,.59],[-.39,.57],[-.27,.51],[-.16,.56],[-.14,.73],[-.035,1],[.13,.81],[.19,.63],[.24,.55],[.38,.6],[.54,.72],[.5,.49],[.39,.31],[.29,.16],[.15,.06]],[[0,.065],[-.15,.045],[-.34,.1],[-.49,.245],[-.36,.28],[-.35,.39],[-.57,.57],[-.61,.73],[-.38,.65],[-.23,.56],[-.15,.62],[0,1],[.17,.79],[.22,.6],[.31,.57],[.46,.63],[.58,.61],[.47,.44],[.32,.35],[.35,.27],[.43,.16],[.23,.08]]];function tx(i,e,t){const n=i.map(([m,_])=>new re(m,_)),r=new Ws(n.map(({x:m,y:_})=>new I(m,_,0)),!0,"centripetal").getPoints(e?54:24).slice(0,-1),o=.37,a=(m,_,g)=>{const p=Math.exp(-Math.abs(m)*(e?4.2:7))*Math.sin(Math.PI*_)*.083,M=(.14-t*.06)*_**3,x=m*(.25+t*.08)*Math.sin(4.1*_+t),v=Math.sin(_*21+m*13+t*.9)*.021*g**4;return p+M-m*m*.36+x+v},c=[0,o,a(0,o,0)],l=[.5,o],h=[],u=r.length,f=e?[.17,.38,.61,.82,1]:[.26,.54,.79,1];for(const m of f)for(const _ of r){const g=_.x*m,p=o+(_.y-o)*m;c.push(g,p,a(g,p,m)),l.push(g/1.38+.5,p)}for(let m=0;m<u;m++){const _=m+1,g=(m+1)%u+1;h.push(0,g,_);for(let p=0;p<f.length-1;p++){const M=p*u,x=M+u;h.push(M+_,M+g,x+g,M+_,x+g,x+_)}}const d=new Mt;return d.setAttribute("position",new $e(c,3)),d.setAttribute("uv",new $e(l,2)),d.setIndex(h),d.computeVertexNormals(),d}function nx(i,e){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d");n.scale(2,2);const s=n.createLinearGradient(21,23,119,113);s.addColorStop(0,"#9fa982"),s.addColorStop(.39,"#d6dfbb"),s.addColorStop(.66,"#c3d1ae"),s.addColorStop(1,"#9eac88"),n.fillStyle=s,n.fillRect(0,0,128,128);for(let c=0;c<5600;c++)n.fillStyle=c%3?"#e9f7ca22":"#52613116",n.fillRect(e()*128,e()*128,.14+e()*1.36,.23+e()*.8);const r=(c,l,h,u,f,d)=>{n.beginPath(),n.moveTo(c,l),n.bezierCurveTo(c*.7+h*.3,l-1,h*.85+c*.15,u+7,h,u),n.lineWidth=f,n.lineCap="round",n.strokeStyle=d,n.stroke()},o=n.createLinearGradient(0,126,0,2);o.addColorStop(0,"#fff5bc"),o.addColorStop(.7,"#fff9cfe9"),o.addColorStop(1,"#fffce300"),r(64,125,65,2,i?2.3:1.65,o);for(const c of[-1,1]){for(let l=0;l<7;l++){const h=112-l*13+(e()-.5)*7,u=64+c*((i?44:33)*Math.sin(Math.PI*(l+1)/9));r(64,h,u,h-18-e()*7,.72,"#fcffe2b8"),r(64+(u-64)*.59,h-7,u+c*2,h+1,.32,"#feffdfa0")}i&&(r(64,121,64+c*53,43,1.85,"#fff5cde6"),r(64,121,64+c*38,101,1.2,"#fff3bebc"),r(64+c*26,84,64+c*27,63,.63,"#f9feda95"))}const a=new Gt(t);return a.colorSpace=_t,a.anisotropy=4,a}function ix(i,e){const t=new yn({map:nx(i,e),roughness:i?.57:.74,clearcoat:i?.21:.07,clearcoatRoughness:.52,side:It});return t.onBeforeCompile=n=>{n.fragmentShader=n.fragmentShader.replace("#include <lights_physical_pars_fragment>",Qe.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );",`reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
        float leafBacklight = max( dot( -geometryNormal, directLight.direction ), 0.0 );
        float leafScatter = leafBacklight * 0.26 + (1.0 - abs(dotNL)) * 0.045;
        reflectedLight.directDiffuse += directLight.color * leafScatter *
          BRDF_Lambert( material.diffuseColor * vec3( 1.17, 1.02, 0.59 ) );`))},t}function sx(i){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");t.fillStyle="#ae6039",t.fillRect(0,0,256,256);for(let s=0;s<5800;s++){t.fillStyle=s%3?"#f9c79a30":"#66381d31";const r=.5+i()*(s%17===0?6:2);t.fillRect(i()*256,i()*256,r*1.25,r)}const n=new Gt(e);return n.colorSpace=_t,n}function rx(i){const e=new at,t=new at,n=Ls.right+.73,s=-.93;t.position.set(n,.12,s),i.add(e),e.add(t);const r=new Ac("#ffdf9d",0,6.2,.49,.76,0);r.position.set(5.47,6.22,1.35),r.target.position.set(3.19,4.6,-1.65),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=.35,r.shadow.camera.far=7,r.shadow.normalBias=.009,r.shadow.bias=-3e-4,r.shadow.radius=4,r.shadow.autoUpdate=!1,r.shadow.needsUpdate=!0,e.add(r,r.target);let o=197889;const a=()=>(o=o*16807%2147483647,o/2147483647),c=sx(a),l=new We(new Pr([[0,.013],[.265,.013],[.32,.042],[.375,.11],[.41,.2],[.414,.29],[.404,.357],[.42,.374],[.421,.398],[.407,.413],[.382,.408],[.373,.386],[.374,.344],[.35,.24],[0,.24]].map(([xe,Pe])=>new re(xe,Pe)),64),new Et({map:c,bumpMap:c,bumpScale:.018,roughness:.79}));l.castShadow=l.receiveShadow=!0,t.add(l);const h=new We(new Ki(.38,.36,.022,48),new Et({color:"#493624",roughness:1}));h.position.y=.355,h.receiveShadow=!0,t.add(h),Zs(i,{x:n,y:.122,z:s,width:.74,depth:.74,radius:.3,spread:.24,opacity:.43});const u=[],f=[],d=[],m=[],_=[],g=[],p=["#465723","#55712a","#637934","#74893b","#5b7536"].map(xe=>new ze(xe)),M=["#8ca337","#a5b641","#b8bc4a","#a9bc56"].map(xe=>new ze(xe)),x=xe=>new I(...xe);function v(xe,Pe,Be=f,Ne=.54){const K=new Ws(xe.map(x)),J=Math.max(6,xe.length*5),_e=new Lr(K,J,Pe,6),ye=_e.attributes.position;for(let pe=0;pe<=J;pe++){const ke=pe/J,qe=K.getPointAt(ke),U=1-ke*Ne;for(let ne=0;ne<=6;ne++){const j=pe*7+ne;ye.setXYZ(j,qe.x+(ye.getX(j)-qe.x)*U,qe.y+(ye.getY(j)-qe.y)*U,qe.z+(ye.getZ(j)-qe.z)*U)}}return Be.push(_e),K}function w(xe,Pe,Be,Ne,K,{start:J=.04,end:_e=.98,ivy:ye=!1,stems:pe}={}){let ke=0;const qe=Array.from({length:Pe},()=>.23+a()**1.25*1.6),U=qe.reduce((j,ie)=>j+ie,0),ne=a()*Math.PI*2;for(let j=0;j<Pe;j++){const ie=ht.lerp(J,_e,(ke+qe[j]*.5)/U);ke+=qe[j];const te=xe.getPointAt(ie),ue=xe.getTangentAt(ie),Q=ne+j*2.39996+(a()-.5)*1.1,ce=Math.sin(Q),Fe=Math.atan2(ue.y,ue.x)-Math.PI/2+ce*(1.12+a()*1.14),Oe=ie>.74&&a()<.56||a()<.07,P=ht.lerp(Be,Ne,a())*(Oe?.79:1),b=P*(ye?.22:.13)*(.6+a()*.9),z=te.clone().add(new I(-Math.sin(Fe)*b,Math.cos(Fe)*b,(.2+Math.cos(Q)*.6)*b)),X=Oe?M:p,oe=X[Math.floor(a()*X.length)].clone().multiplyScalar(.77+a()*.31),W=(a()-.5)*1.65+Math.cos(Q)*.31,Ae=(a()-.5)*1.8;K.push({anchor:z,theta:Fe,size:P,color:oe,tilt:W,twist:Ae,shape:Math.floor(a()*(ye?vu.length:_u.length)),width:.81+a()*.3+(Oe?-.09:0)}),pe&&v([te.toArray(),te.clone().lerp(z,.52).add(new I(0,-.009,.013)).toArray(),z.toArray()],P*(ye?.022:.021),pe,.4)}}const E=v([[3.72,.46,-.93],[3.57,.83,-1.17],[3.67,1.26,-1.46],[3.53,1.77,-1.7],[3.68,2.3,-1.73],[3.43,2.84,-1.68],[3.38,3.42,-1.66],[3.32,4.13,-1.62],[3.5,4.68,-1.6],[3.2,5.04,-1.6]],.024,u),A=v([[3.84,.46,-.98],[3.82,.87,-1.24],[3.69,1.32,-1.54],[3.97,1.83,-1.71],[4.28,2.38,-1.73],[4.33,2.8,-1.67],[4.16,3.07,-1.66],[3.69,3.19,-1.67]],.017,u);w(E,28,.105,.21,d,{start:.29}),w(A,23,.095,.18,d,{start:.27});const R=v([[3.46,4,-1.69],[3.56,4.54,-1.65],[3.36,4.89,-1.59],[2.99,5.12,-1.58],[2.59,5.12,-1.62],[2.3,4.97,-1.64]],.018,u),y=v([[3.54,4.52,-1.63],[3.4,4.02,-1.63],[3.39,3.59,-1.66],[3.46,3.13,-1.64],[3.88,2.98,-1.7]],.011);w(y,23,.087,.19,d);const S=v([[3.63,1.66,-1.64],[3.33,1.94,-1.66],[3.15,2.17,-1.6],[2.89,2.3,-1.59]],.009);w(S,14,.092,.18,d);const T=v([[3.39,4.83,-1.67],[3.71,5.08,-1.66],[4.08,5.15,-1.67],[4.4,4.96,-1.7],[4.54,4.63,-1.71]],.012,u);for(const[xe,Pe,Be,Ne,K,J,_e]of[[R,.3,.79,36,.46,.41,.23],[R,.3,.53,12,.23,.23,.18],[R,.7,.98,11,.29,.22,.13],[T,.15,.72,26,.38,.36,.18],[T,.73,1,11,.28,.22,.12],[y,.26,.56,13,.21,.23,.12],[y,.72,1,10,.21,.16,.12]])for(let ye=0;ye<Ne;ye++){const pe=xe.getPointAt(ht.lerp(Pe,Be,a())),ke=ye*2.39996+a()*.82,qe=Math.cos(ke)*K*(.41+a()*.95),U=Math.sin(ke)*J*(.41+a()*.95),ne=.045+a()*_e,j=v([pe.toArray(),[pe.x+qe*.32,pe.y+U*.46,pe.z+ne*.45],[pe.x+qe*.72,pe.y+U*.84,pe.z+ne],[pe.x+qe,pe.y+U,pe.z+ne*.82]],.004);w(j,5+Math.floor(a()*5),.077,.177,d)}for(const xe of[[[3.42,4.78,-1.52],[3.21,4.97,-1.37],[2.94,4.91,-1.26]],[[3.71,4.98,-1.47],[3.94,5.01,-1.26],[4.21,4.84,-1.23]],[[3.53,4.58,-1.51],[3.6,4.44,-1.28],[3.76,4.27,-1.27]],[[3.43,3.5,-1.61],[3.53,3.35,-1.4],[3.52,3.2,-1.43]],[[4.18,3.05,-1.63],[4.37,2.92,-1.48],[4.42,2.78,-1.46]]])w(v(xe,.007),4,.23,.48,m,{ivy:!0,stems:f});for(const xe of[[[3.29,5.07,-1.55],[3.07,5.28,-1.57],[2.71,5.41,-1.63],[2.55,5.5,-1.62]],[[4.09,5.15,-1.55],[4.36,5.28,-1.56],[4.63,5.33,-1.57]],[[4.35,4.89,-1.56],[4.55,4.96,-1.55],[4.72,5.09,-1.55]],[[3.73,3.04,-1.56],[3.88,3,-1.56],[4.1,3.1,-1.61]]])w(v(xe,.005,f,.74),7,.08,.138,d,{stems:f});const L=new at;L.position.set(2.98,5.07,-1.49),e.add(L);const N=[],H=v([[0,0,0],[-.57,-.16,.24],[-1.16,-.58,.37],[-1.81,-.81,.41],[-2.43,-.66,.3],[-2.94,-.18,.1],[-3.25,.03,-.03]],.012,N);w(H,23,.091,.17,_,{stems:N}),w(H,9,.18,.34,g,{start:.12,end:.88,ivy:!0,stems:N});const B=v([[-1.37,-.69,.37],[-1.64,-.84,.48],[-1.9,-.96,.45],[-2.13,-.94,.41]],.005,N);w(B,12,.075,.14,_);const G=v([[-.59,-.18,.24],[-.98,-.26,.26],[-1.25,-.27,.21],[-1.61,-.17,.19]],.005,N);w(G,10,.07,.13,_);const $=new Et({color:"#855532",roughness:.93}),O=new Et({color:"#646530",roughness:.86});function ee(xe,Pe,Be){const Ne=new We(q1(xe),Pe);Ne.castShadow=!0,Be.add(Ne);for(const K of xe)K.dispose()}ee(u,$,e),ee(f,O,e),ee(N,O,L);for(const[xe,Pe,Be,Ne]of[[_u,!1,d,_],[vu,!0,m,g]]){const K=ix(Pe,a),J=new wt;xe.forEach((_e,ye)=>{const pe=tx(_e,Pe,ye);for(const[ke,qe]of[[Be,e],[Ne,L]]){const U=ke.filter(j=>j.shape===ye);if(!U.length)continue;const ne=new rd(pe,K,U.length);U.forEach(({anchor:j,theta:ie,size:te,color:ue,tilt:Q,twist:ce,width:Fe},Oe)=>{J.position.copy(j),J.rotation.set(Q,ce,ie,"ZXY"),J.scale.set(te*Fe,te,te),J.updateMatrix(),ne.setMatrixAt(Oe,J.matrix),ne.setColorAt(Oe,ue)}),ne.castShadow=ne.receiveShadow=!0,ne.computeBoundingSphere(),qe.add(ne)}})}let se=0,fe=0;return{plant:e,update(xe,Pe,Be,Ne,K){r.intensity=K*1.48,r.visible=K>.02;const J=se>.002;se=Ne?ht.damp(se,Be?1:0,5,xe):0,L.rotation.x=Math.sin(Pe*2.1)*.025*se,L.rotation.y=Math.cos(Pe*1.9)*.017*se,fe+=xe,(se>.002&&fe>.12||J&&se<=.002)&&(r.shadow.needsUpdate=!0,fe=0)}}}const Ql=8.56,ec=3.44,qa=.12,xu={oat:{name:"燕麦双边",base:"#bda47c",edge:"#757751",height:.055,colors:["#8d8b64","#a39770"]},hills:{name:"鼠尾草叠山",base:"#a79371",edge:"#777c54",height:.083,colors:["#919778","#727d52","#586247"]},clay:{name:"陶土格纹",base:"#a27961",edge:"#805c48",height:.067,colors:["#b69471","#98745c","#c5a784"]}};function ox(i){const e=Ql/2,t=ec/2,n=new qs;if(i==="hills")n.moveTo(-e+.46,-t+.24),n.bezierCurveTo(-e+1.8,-t-.17,-.85,-t+.1,.35,-t+.02),n.bezierCurveTo(1.74,-t-.07,3.48,-t+.04,e-.31,-t+.36),n.bezierCurveTo(e+.17,-t+.62,e-.14,.55,e-.17,1.1),n.bezierCurveTo(e-.22,t+.18,1.87,t+.02,.66,t-.11),n.bezierCurveTo(-1.24,t-.31,-2.9,t+.3,-e+.58,t-.08),n.bezierCurveTo(-e-.09,t-.21,-e-.06,-t+.59,-e+.46,-t+.24);else{const s=i==="oat"?.17:.35;n.moveTo(-e+s,-t),n.lineTo(e-s,-t),n.quadraticCurveTo(e,-t,e,-t+s),n.lineTo(e,t-s),n.quadraticCurveTo(e,t,e-s,t),n.lineTo(-e+s,t),n.quadraticCurveTo(-e,t,-e,t-s),n.lineTo(-e,-t+s),n.quadraticCurveTo(-e,-t,-e+s,-t)}return n.closePath(),n}function Mu(i,e,t,n,s){i.beginPath(),i.moveTo(n+s,n),i.lineTo(e-n-s,n),i.lineTo(e-n-s,n+s),i.lineTo(e-n,n+s),i.lineTo(e-n,t-n-s),i.lineTo(e-n-s,t-n-s),i.lineTo(e-n-s,t-n),i.lineTo(n+s,t-n),i.lineTo(n+s,t-n-s),i.lineTo(n,t-n-s),i.lineTo(n,n+s),i.lineTo(n+s,n+s),i.closePath(),i.stroke()}function ax(i,e){const t=document.createElement("canvas");t.width=1536,t.height=656;const{width:n,height:s}=t,r=t.getContext("2d");if(r.fillStyle=e.base,r.fillRect(0,0,n,s),i==="oat")r.strokeStyle=e.colors[0],r.lineWidth=19,Mu(r,n,s,32,24),r.strokeStyle=e.colors[1],r.lineWidth=7,Mu(r,n,s,61,22);else if(i==="hills")e.colors.forEach((f,d)=>{const m=125+d*140;r.fillStyle=f,r.beginPath(),r.moveTo(0,m+66),r.bezierCurveTo(n*.2,m-120,n*.36,m+166,n*.55,m+39),r.bezierCurveTo(n*.73,m-104,n*.84,m-65,n,m-14),r.lineTo(n,s),r.lineTo(0,s),r.fill()});else{for(let d=0;d<Math.ceil(s/92);d++)for(let m=0;m<Math.ceil(n/92);m++)r.fillStyle=e.colors[(d*2+m)%e.colors.length],r.globalAlpha=(d+m)%2===0?.57:.31,r.fillRect(m*92,d*92,92,92);r.globalAlpha=1,r.strokeStyle="#775646",r.lineWidth=19,r.strokeRect(27,27,n-54,s-54),r.strokeStyle="#c6a282",r.lineWidth=6,r.strokeRect(45,45,n-90,s-90)}const o=document.createElement("canvas");o.width=n,o.height=s;const a=o.getContext("2d");a.fillStyle="#777",a.fillRect(0,0,n,s);let c=913;const l=i==="oat"?5:7;for(let f=0;f<s;f+=l)for(let d=-(l/2);d<n;d+=l+1){c=c*16807%2147483647;const m=c/2147483647,_=d+f/l%2*l/2,g=f+(m-.5)*2.5;r.fillStyle=m>.52?`rgba(255,235,198,${m*.32})`:`rgba(56,40,24,${(1-m)*.34})`,r.beginPath(),r.ellipse(_,g,l*.47,l*.3,i==="oat"?0:.5,0,Math.PI*2),r.fill(),a.fillStyle=m>.22?"#aaa":"#919191",a.beginPath(),a.ellipse(_,g,l*.44,l*.28,0,0,Math.PI*2),a.fill()}const h=new Gt(t);h.colorSpace=_t,h.anisotropy=8;const u=new Gt(o);return u.anisotropy=8,{color:h,height:u}}function lx(i){const e=new at;e.position.set(.04,qa,1.97),i.add(e),Zs(i,{x:e.position.x,y:qa+.001,z:e.position.z,width:Ql,depth:ec,radius:.28,spread:.16,opacity:.38});const t=new Map,n=[],s=new _d(void 0,new I(0,-1,0));let r;function o(h){r.updateWorldMatrix(!0,!1),s.ray.origin.set(h.position.x,1,h.position.z);const u=[];We.prototype.raycast.call(r,s,u),h.position.y=u.reduce((f,d)=>Math.max(f,d.point.y),qa)}function a(h){if(!t.has(h)){const u=xu[h],{color:f,height:d}=ax(h,u),m=new Rr(ox(h),{depth:u.height-.022,bevelEnabled:!0,bevelThickness:.013,bevelSize:.031,bevelSegments:3,curveSegments:22}),_=m.attributes.position,g=m.attributes.uv;for(const v of m.groups)if(v.materialIndex===0)for(let w=v.start;w<v.start+v.count;w++)g.setXY(w,_.getX(w)/Ql+.5,_.getY(w)/ec+.5);const p=new yn({map:f,bumpMap:d,bumpScale:h==="oat"?.028:.047,roughness:.94,sheen:1,sheenColor:"#aa9673",sheenRoughness:.76}),M=new Et({color:u.edge,bumpMap:d,bumpScale:.023,roughness:.97}),x=new We(m,[p,M]);x.rotation.x=-Math.PI/2,x.position.y=.015,x.castShadow=!0,x.receiveShadow=!0,x.raycast=()=>{},e.add(x),t.set(h,x)}for(const[u,f]of t)f.visible=u===h;r=t.get(h),n.forEach(o)}const c=document.querySelector("#room-rug");let l;try{l=localStorage.getItem("doish-room-rug")}catch{}return c.value=Object.hasOwn(xu,l)?l:"oat",a(c.value),c.addEventListener("change",()=>{a(c.value);try{localStorage.setItem("doish-room-rug",c.value)}catch{}}),h=>{n.push(h),o(h)}}const cx=""+new URL("room-reference-prints-728FMqp9.png",import.meta.url).href,hx={poster:[0,0,72,120],portrait:[74,0,36,45],garden:[113,0,36,45],trees:[151,0,36,45],steps:[189,0,36,45],roof:[227,0,36,45],record:[0,126,112,112],floor:[114,126,104,56],second:[222,126,29,105],clock:[270,0,72,72],throw:[277,82,77,163]};function ux(){const i={},e=new hm().load(cx,()=>{for(const t of Object.values(i))t.needsUpdate=!0});e.colorSpace=_t;for(const[t,[n,s,r,o]]of Object.entries(hx)){const a=e.clone();a.offset.set((n+.5)/384,1-(s+o-.5)/256),a.repeat.set((r-1)/384,(o-1)/256),a.anisotropy=4,a.minFilter=Pn,i[t]=a}return i}function Vt(i,e,t,n,s=0){const r=new at;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function Lt(i,e,t){const n=new We(e,t);return n.castShadow=n.receiveShadow=!0,i.add(n),n}function Uc(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);const s=new Gt(n);return s.colorSpace=_t,s.anisotropy=4,s}function Rd(i,e,t){let n=2837;for(let s=0;s<e*t/7;s++){n=n*16807%2147483647;const r=n%e,o=Math.floor(n/e)%t;i.fillStyle=s%3?"#472c1811":"#fff9dc43",i.fillRect(r,o,1+s%2,1)}}function dx(i,e,t,n,s=0){const r=new Ft(e,t,12,12);r.rotateX(-Math.PI/2);const o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a)/e+.5,l=o.getZ(a)/t+.5;o.setY(a,s*(c*l)**5)}return r.computeVertexNormals(),Lt(i,r,new Et({map:n,roughness:.9,side:It}))}function fx({root:i,box:e,cylinder:t,mat:n,lineTube:s,deskHeight:r,describe:o}){const a=Vt(i,-.91,r+.03,-.17,.94);o(a,"桌面钢笔","pen"),e(.019,.018,.25,0,0,0,n("#324f48",.4),.008,a),e(.016,.016,.046,0,0,.12,n("#b6a782",.39,.53),.006,a);const c=t(.008,.027,0,0,-.136,n("#938776",.34,.61),a,.001,10);c.rotation.x=Math.PI/2;const l=Vt(i,-1.25,r+.245,-.34,-.1);o(l,"搅拌匙","spoon"),e(.026,.235,.021,0,0,0,n("#987855",.53,.43),.01,l).rotation.z=.24;const h=Vt(i,1.25,r+.02,-.27,.22);o(h,"桌面耳机","headphones");const u=n("#4e3e32",.88),f=n("#a89066",.45,.24);for(const[m,_,g]of[[-.17,-.065,-.23],[.15,.035,.32]]){const p=Vt(h,m,.099,_,g),M=t(.096,.054,0,0,0,u,p,.102,30);M.rotation.x=Math.PI/2;const x=t(.077,.029,0,0,.035,f,p,.083,30);x.rotation.x=Math.PI/2}s([[-.19,.071,-.09],[-.13,.035,-.22],[.05,.031,-.245],[.23,.052,-.14],[.23,.077,.025]],.016,u,h),e(.27,.13,.085,.035,.051,-.219,f,.03,h).rotation.y=-.12;const d=Vt(i,.81,r+1.207,-.805,.42);o(d,"主机旁的耳机","headphones"),t(.109,.068,0,0,0,u,d,.106,32).rotation.z=Math.PI/2,t(.09,.078,0,0,0,f,d,.09,32).rotation.z=Math.PI/2,e(.31,.106,.116,.18,-.005,-.018,f,.026,d)}function px({root:i,box:e,mat:t,lineTube:n,window:s,describe:r}){const o=Vt(i,s.left+.4,s.sill+.005,s.z+.015);r(o,"窗台盆栽","leaf"),o.scale.set(1.29,1.2,1.09);const a=t("#9f583c",.79),c=t("#b37156",.71),l=p=>new Pr(p.map(([M,x])=>new re(M,x)),32);Lt(o,l([[0,.008],[.099,.008],[.117,.022],[.112,.037],[0,.037]]),a),Lt(o,l([[.065,.035],[.078,.04],[.107,.174],[.096,.174],[.069,.055]]),a),Lt(o,l([[.102,.155],[.113,.158],[.114,.184],[.094,.184],[.093,.162]]),c),Lt(o,new Ki(.095,.095,.014,24),t("#473921",.98)).position.y=.158;const h=["#72774d","#637a55","#818b60","#566344"].map(p=>t(p,.69)),u=new Ar(1,12,8);for(const[p,M,x,v,w]of[[0,9,.186,.22,.93],[1,7,.2,.18,.58],[2,5,.23,.13,.28]])for(let E=0;E<M;E++){const A=Vt(o,0,x,0,E/M*Math.PI*2+p),R=Lt(A,u,h[(E+p)%h.length]);R.rotation.x=w,R.position.set(0,Math.cos(w)*v/2,Math.sin(w)*v/2),R.scale.set(.04-p*.004,v/2,.014)}const f=t("#9a855d",.39,.59),d=o.clone();d.position.x=s.left+.91,d.rotation.y=.52,d.scale.set(1.02,.94,.93),i.add(d),r(d,"窗台小盆栽","leaf");const m=new Ar(1,12,8);for(const[p,M]of[[1.24,.035],[1.4,.043],[1.49,.025],[1.59,.032],[2.65,.032]]){const x=Lt(i,m,t("#a09670",.98));x.position.set(s.left+p,s.sill+.023,s.z+.106),x.scale.set(M,M*.46,M*.78)}const _=Vt(i,s.left+2.17,s.sill+.005,s.z-.012,-.15);r(_,"黄铜浇水壶","wateringCan"),_.scale.set(1.45,2.12,.91),Lt(_,l([[0,0],[.105,0],[.114,.012],[.112,.12],[.09,.169],[.064,.175],[.055,.155],[0,.151]]),f),n([[-.09,.08,0],[-.17,.125,0],[-.177,.217,0],[-.104,.249,0],[-.04,.19,0]],.014,f,_);const g=Lt(_,new Ki(.013,.025,.237,16),f);g.position.set(.176,.138,.008),g.quaternion.setFromUnitVectors(new I(0,1,0),new I(.84,.55,0).normalize()),e(.034,.037,.043,.275,.205,.008,f,.008,_).rotation.z=-.45}function mx({root:i,box:e,mat:t,prints:n,describe:s}){const r=t("#d9c9a6",.9),o=t("#aa9261",.93),a=[["poster",-5.29,3.59,.81,1.13,.012],["portrait",-4.92,3.11,.3,.36,.16],["garden",-5.35,2.69,.29,.36,-.12],["trees",4.84,3.31,.28,.36,.04],["steps",4.88,2.93,.28,.35,-.1],["roof",5.18,2.7,.28,.33,.07]];for(const[f,d,m,_,g,p]of a){const M=Vt(i,d,m,f==="portrait"?-1.865:-1.885);s(M,f==="poster"?"墙面海报":"墙上照片","art"),M.rotation.z=p,e(_,g,.012,0,0,0,r,.006,M),Lt(M,new Ft(_-.037,g-.048),new Et({map:n[f],roughness:.9})).position.set(0,.009,.008),e(_*.33,.056,.008,-_*.09,g*.475,.011,o,.005,M).rotation.z=.13,f==="poster"&&(e(_*.18,.06,.008,_*.37,-g*.472,.011,o,.005,M).rotation.z=-.33)}const c=Uc(112,112,(f,d,m)=>{f.fillStyle="#f6dfa0",f.fillRect(0,0,d,m),f.strokeStyle="#836345",f.lineWidth=1.45;for(let _=0;_<5;_++){f.beginPath(),f.moveTo(14,28+_*12);for(let g=18;g<87-_%3*12;g+=4)f.lineTo(g,28+_*12+Math.sin(g*1.43+_)*2.4);f.stroke()}Rd(f,d,m)});for(const[f,d,m,_,g,p]of[[-4.86,2.41,.25,.25,-.08,"#ffffff"],[5.22,3.11,.24,.23,-.02,"#ffffff"],[-1.28,2.02,.23,.25,.04,"#a4b07f"],[-1,2.08,.22,.21,.17,"#e6e3d4"],[-1.14,1.83,.23,.23,-.14,"#ffffff"]]){const M=Lt(i,new Ft(m,_),new Et({map:c,color:p,roughness:.98}));s(M,"手写便签","draft"),M.position.set(f,d,-1.876),M.rotation.z=g}const l=Vt(i,5.02,3.91,-1.86);s(l,"墙上挂钟","clock");const h=Lt(l,new Ki(.318,.32,.055,48),t("#615240",.59,.2));h.rotation.x=Math.PI/2;const u=Lt(l,new br(.297,48),new Et({map:n.clock,roughness:.65}));u.position.z=.03}function gx({root:i,box:e,cylinder:t,mat:n,prints:s,restOnRug:r,describe:o}){const a=n("#cbbc96",.96),c=n("#272822",.4),l=n("#b8885a",.78),h=n("#575441",.9),u=["#6d7864","#907356","#655c53","#98745b","#80866c"].map(A=>n(A,.86)),f=(A,R,y)=>{const S=Vt(i,A,0,R,y);return r(S),S};function d(A,R,y){const S=Vt(A,...y);t(R,.016,0,0,0,c,S,R,56),t(R*.26,.004,0,.009,0,l,S,R*.26,32),t(.011,.004,0,.012,0,h,S,.011,10);const T=n("#454238",.68);for(const L of[.48,.66,.82,.93]){const N=Lt(S,new Dr(R*L,.0018,4,48),T);N.rotation.x=Math.PI/2,N.position.y=.0085}}function m(A,R,y,S){e(R,y,.018,0,y/2,0,a,.009,A),Lt(A,new Ft(R-.016,y-.016),new Et({map:s[S],roughness:.91})).position.set(0,y/2,.01)}const _=f(-4.81,-1.05,-.11);o(_,"地上的书叠","guestbook"),_.scale.y=1.17;for(let A=0;A<6;A++){const R=.041+A%3*.014,y=Vt(_,A*.027,.024+A*.057,-A*.022,A%2?.19:-.14),S=.73-A*.041;e(S,R,.41,0,0,0,u[A%5],.013,y),e(S-.038,R*.53,.39,0,0,.015,a,.006,y),e(S*.61,.011,.008,-.045,0,.212,u[(A+2)%5],.002,y)}const g=f(-3.69,-.51,.84);o(g,"倚放的黑胶","disc"),g.rotation.z=.43,m(g,.59,.78,"second");const p=Vt(g,.03,.432,.036);p.rotation.x=Math.PI/2,d(p,.266,[0,0,0]);const M=f(-2.2,-.05,.84);o(M,"备用唱片封套","disc"),M.rotation.x=-.18;for(const[A,R,y]of[[0,.28,0],[.018,.29,.033],[.038,.3,.06]])e(.64,.6,.02,A,R,y,a,.007,M);const x=f(-3.11,.53,-.18);o(x,"叠放的唱片","disc");for(let A=0;A<5;A++){const R=Vt(x,A*.013,.015+A*.027,-A*.013,.02+A*.026);e(.94,.024,.88,0,0,0,u[A],.009,R),e(.9,.007,.866,0,.009,0,a,.003,R)}d(x,.425,[.036,.151,-.046]);const v=f(1.91,.6,-.17);o(v,"唱片封套","disc"),v.rotation.x=-.1,m(v,.83,.8,"second");const w=f(2.18,.78,.044);o(w,"唱片封套","disc"),w.rotation.x=-.13,m(w,.87,.79,"record");const E=f(2.03,1.66,.15);o(E,"摊开的唱片","disc"),e(.91,.022,.68,0,.012,0,a,.007,E),dx(E,.893,.667,s.floor).position.y=.024,d(E,.427,[.66,.016,-.014])}function _x({root:i,mat:e,restOnRug:t,describe:n}){const s=e("#8b795d",.98),r=e("#c0a77b",.98),o=Uc(64,64,(d,m,_)=>{d.fillStyle="#b6a078",d.fillRect(0,0,m,_);for(let g=0;g<m;g+=3)d.fillStyle=g%2?"#6e613752":"#f2dcc97c",d.fillRect(g,0,1,_);for(let g=0;g<_;g+=4)d.fillStyle="#f6e4c748",d.fillRect(0,g,m,1);Rd(d,m,_)}),a=new Et({map:o,roughness:.99}),c=new qs;c.moveTo(0,-.24),c.bezierCurveTo(.15,-.255,.143,-.15,.114,.12),c.bezierCurveTo(.12,.275,-.109,.278,-.11,.148),c.bezierCurveTo(-.13,-.14,-.14,-.235,0,-.24);const l=new Rr(c,{depth:.023,bevelEnabled:!0,bevelSize:.008,bevelThickness:.006,bevelSegments:2});l.rotateX(Math.PI/2),l.translate(0,.029,0);const h=new qi(c);h.rotateX(Math.PI/2),h.translate(0,.036,0);const u=new Ft(1,1,18,14),f=u.attributes.position;for(let d=0;d<f.count;d++){const m=f.getX(d)*Math.PI,_=f.getY(d)+.5,g=.12*Math.sin(Math.min(1,_*2.5)*Math.PI/2);f.setXYZ(d,g*Math.sin(m),.035+.112*Math.sin(_*Math.PI/2)*Math.cos(m),-.238+_*.266)}u.computeVertexNormals(),a.side=It;for(const[d,m,_]of[[-1.21,2.18,.69],[-.76,1.65,.79]]){const g=Vt(i,d,0,m,_);n(g,"布面拖鞋","slipper"),g.scale.set(1.29,1.19,1.39),Lt(g,l,s);const p=r.clone();p.side=It,Lt(g,h,p),Lt(g,u,a),Zs(g,{x:0,y:.002,z:0,width:.24,depth:.46,radius:.09,spread:.065,opacity:.37}),t(g)}}function vx({root:i,mat:e,lineTube:t,restOnRug:n,prints:s,describe:r}){const o=Vt(i,.54,0,2.48,.83);r(o,"藤编阅读椅","chair"),o.scale.set(1.45,1.39,1.55);const a=e("#795036",.53),c=e("#a98055",.75),l=Uc(128,128,(p,M,x)=>{for(let v=4;v<M+x;v+=8)p.strokeStyle=v%16===4?"#be995e":"#917243",p.lineWidth=2.1,p.beginPath(),p.moveTo(v,0),p.lineTo(v-x,x),p.moveTo(v-x,0),p.lineTo(v,x),p.stroke();for(let v=4;v<M;v+=8)p.fillStyle="#c4a275",p.fillRect(v,0,1,x)}),h=new Et({map:l,alphaTest:.4,side:It,roughness:.91}),u=(p,M,x,v)=>Array.from({length:33},(w,E)=>{const A=E/32*Math.PI*2,R=x[0]+Math.cos(A)*p,y=Math.sin(A)*M;return v?[R,x[1],x[2]+y]:[R,x[1]+y,x[2]+y*.17]});for(const p of[-1,1])t([[p*.3,.004,-.38],[p*.26,.25,-.29],[p*.25,.51,-.27]],.025,a,o),t([[p*.305,.004,.39],[p*.25,.32,.27],[p*.25,.54,.27],[p*.22,.89,.34],[p*.17,1.07,.36]],.025,a,o),t([[p*.24,.49,-.26],[p*.33,.65,-.27],[p*.34,.67,-.1],[p*.29,.67,.16],[p*.225,.74,.31]],.019,a,o);t(u(.286,.316,[0,.49,0],!0),.026,a,o),t(u(.235,.26,[0,.32,0],!0),.015,c,o);const f=Lt(o,new br(1,40),h);f.position.y=.499,f.rotation.x=-Math.PI/2,f.scale.set(.265,.294,1);const d=Vt(o,0,.923,.337);d.rotation.x=.168,t(u(.251,.283,[0,.923,.337],!1),.026,a,o),Lt(d,new br(1,40),h).scale.set(.226,.261,1);const _=new Ft(1,1,14,22),g=_.attributes.position;for(let p=0;p<g.count;p++){const M=g.getX(p)+.5,x=g.getY(p)+.5,v=.012*Math.sin(M*Math.PI*8+x*.9),w=x**12;g.setXYZ(p,-.11+M*.395-.035*x,.523+.687*x,.365+.068*Math.sin(Math.PI*x)+v-.115*w)}_.computeVertexNormals(),Lt(o,_,new Et({map:s.throw,side:It,roughness:.97})),Zs(o,{x:0,y:.002,z:.025,width:.58,depth:.72,radius:.16,spread:.18,opacity:.28}),n(o)}function xx(i){const e=new at,t=[];i.root.add(e);const n={...i,root:e,prints:ux(),describe(s,r,o){t.push({object:s,label:r,icon:o})}};return fx(n),px(n),mx(n),gx(n),_x(n),vx(n),{group:e,labels:t}}function Mx({root:i,box:e,cylinder:t,lineTube:n,mat:s,deskHeight:r,window:o}){const a=s("#68734d",.75);function c(O,ee,se){const fe=new We(new Pr(O.map(([xe,Pe])=>new re(xe,Pe)),64),ee);return fe.castShadow=!0,fe.receiveShadow=!0,se.add(fe),fe}const l=lx(i),h=xx({root:i,box:e,cylinder:t,lineTube:n,mat:s,deskHeight:r,window:o,restOnRug:l}),u=rx(i),f=new at;f.position.set(-1.98,r,-.79),f.rotation.y=.28,i.add(f);const d=s("#ad9f82",.32,.66),m=s("#bb9452",.29,.45);t(.206,.065,0,.033,0,a,f),t(.203,.011,0,.01,0,s("#393932"),f);const _=[new re(0,.094),new re(-.106,.39),new re(.188,.675)];for(let O=0;O<_.length-1;O++){const ee=_[O],se=_[O+1],fe=se.clone().sub(ee);for(const xe of[-.043,.043]){const Pe=e(.037,fe.length(),.026,(ee.x+se.x)/2,(ee.y+se.y)/2,xe,d,.009,f);Pe.rotation.z=-Math.atan2(fe.x,fe.y)}}for(const{x:O,y:ee}of _){const se=t(.044,.116,O,ee,0,d,f);se.rotation.x=Math.PI/2;const fe=t(.026,.009,O,ee,.06,m,f);fe.rotation.x=Math.PI/2}const g=new at;g.position.set(.293,.64,0),g.rotation.set(-.28,0,.15),f.add(g);const p=new yn({color:"#d9c7a4",roughness:.29,clearcoat:.43,clearcoatRoughness:.31});c([[.196,.004],[.198,-.001],[.204,-.004],[.21,-.002],[.214,.003],[.215,.01],[.211,.022],[.199,.05],[.182,.075],[.159,.099],[.129,.119],[.092,.132],[.049,.14],[.004,.142]],p,g),c([[.004,.109],[.074,.105],[.119,.091],[.154,.071],[.179,.046],[.191,.022],[.196,.004]],m,g);const M=new rn({color:"#ffe5a3"}),x=c([[0,.024],[.046,.025],[.071,.032],[.086,.045],[.088,.053]],M,g);x.castShadow=!1,x.userData.roomHoverIgnore=!0,t(.051,.035,0,.148,0,d,g);const v=new Ac("#ffbd69",0,3.3,.61,.7,2);v.position.set(.293,.585,0),v.target.position.set(.62,.02,.2),f.add(v,v.target);const w=new Cc("#ffd18a",.12,1.7,2);w.position.set(.3,.53,.02),f.add(w);const E=new at;E.position.set(-1.13,r,-.31),i.add(E);const A=new yn({color:"#e8d9b9",vertexColors:!0,roughness:.3,clearcoat:.38,clearcoatRoughness:.29}),R=c([[0,.009],[.067,.009],[.071,.002],[.079,.002],[.083,.013],[.092,.025],[.1,.044],[.104,.079],[.105,.087],[.106,.116],[.107,.123],[.11,.167],[.111,.196],[.109,.205],[.104,.21],[.098,.209],[.094,.203],[.093,.193],[.093,.167],[.09,.1],[.082,.056],[.066,.043],[0,.042]],A,E),y=R.geometry.attributes.position,S=new ze("#84946b"),T=new ze(1,1,1),L=[];for(let O=0;O<y.count;O++){const ee=y.getY(O);L.push(...(ee>=.087&&ee<=.116?S:T).toArray())}R.geometry.setAttribute("color",new $e(L,3));const N=new yn({color:"#3d271a",roughness:.26,clearcoat:.43,clearcoatRoughness:.26});t(.0925,.006,0,.162,0,N,E).castShadow=!1;const H=new yn({color:"#e8d9b9",roughness:.32,clearcoat:.32}),B=new We(new Dr(.054,.012,10,32),H);B.position.set(.108,.113,0),B.scale.set(.83,1.03,1),B.castShadow=!0,B.receiveShadow=!0,E.add(B);const G=new ze("#cdbb8a"),$=new ze("#fff0bd");return{lamp:f,plant:u.plant,mug:E,props:h,update(O,ee,se,fe,xe,Pe,Be){const Ne=fe?-.47:-.28;g.rotation.x=Pe?ht.damp(g.rotation.x,Ne,9,O):Ne,M.color.copy(G).lerp($,Math.max(se,fe?.35:0)),v.intensity=.2+se*4.5,w.intensity=.12+se*.96,u.update(O,ee,xe,Pe,Be)}}}const ja=""+new URL("spring-B01OgPH9.webp",import.meta.url).href,Za=""+new URL("summer-C0oxVU_2.webp",import.meta.url).href,Ka=""+new URL("autumn-BYZNcRC1.webp",import.meta.url).href,$a=""+new URL("winter-C4MA2YoZ.webp",import.meta.url).href,Sx=[$a,$a,ja,ja,ja,Za,Za,Za,Ka,Ka,Ka,$a],Su=1.5,yx=.72;function bx(i){const e=i.querySelector(".seasonal-edges");let t=1,n;function s(){const r=Math.max(0,Math.min(1,(Su-t)/(Su-yx))),o=r*r*(3-2*r),a=27*r;if(e.style.setProperty("--season-reveal",o),e.style.setProperty("--season-depth",a+"%"),!o)return;const c=Sx[new Date().getMonth()];c!==n&&(e.style.setProperty("--season-art",`url("${c}")`),n=c)}return document.addEventListener("visibilitychange",()=>{document.hidden||s()}),r=>{t=r,s()}}const Ti=document.querySelector("#stage"),wi=document.querySelector("#scene"),Ex=bx(Ti),Un=new sd;Un.background=new ze("#f8f0e7").multiplyScalar(1.75);const vt=new hn(41,1,.08,70),Ir=new I(-.21,2.38,-.45),Rn=new I(-.21,4.96,20.85);vt.position.copy(Rn);vt.lookAt(Ir);let Nn;try{Nn=new t1({canvas:wi,antialias:!0,powerPreference:"high-performance"})}catch(i){throw document.querySelector("#loading").hidden=!0,document.querySelector("#error").hidden=!1,i}Nn.setPixelRatio(Math.min(devicePixelRatio,2));Nn.shadowMap.enabled=!0;Nn.shadowMap.type=rc;Nn.toneMapping=ac;Nn.toneMappingExposure=1;const Pd=new $l(Nn),Dd=new y1;Un.environment=Pd.fromScene(Dd,.04).texture;Dd.dispose();Pd.dispose();Un.environmentIntensity=.34;const At=new c1(vt,wi);At.target.copy(Ir);At.enableDamping=!0;At.dampingFactor=.1;At.enablePan=!1;At.minDistance=1.55;At.maxDistance=26;At.minPolarAngle=1.438;At.maxPolarAngle=1.489;At.minAzimuthAngle=-.037;At.maxAzimuthAngle=.037;At.rotateSpeed=.16;At.update();const Lo=new um("#fff8e8","#b4aa96",1.35);Un.add(Lo);const on=new Ac("#ffdda9",4.5,0,.36,.13,0);on.position.set(8.2,5.5,4.6);on.target.position.set(1.76,1.56,-.97);on.castShadow=!0;on.shadow.mapSize.set(2048,2048);on.shadow.camera.near=.5;on.shadow.camera.far=21;on.shadow.normalBias=.025;on.shadow.bias=-12e-5;on.shadow.radius=5;Un.add(on,on.target);const Bo=new mm("#f6f1e2",.68);Bo.position.set(-4,3,4);Un.add(Bo);let Ja=13579;function Qa(){return Ja=Ja*16807%2147483647,(Ja-1)/2147483646}function Tx(){const i=document.createElement("canvas");i.width=i.height=512;const e=i.getContext("2d");e.fillStyle="#e3cbaa",e.fillRect(0,0,512,512);for(let n=0;n<28500;n++){e.fillStyle=n%3===0?"#91735446":"#fff4d948";const s=.35+Qa()*1.32;e.fillRect(Qa()*512,Qa()*512,s,s*.76)}const t=new Gt(i);return t.colorSpace=_t,t.wrapS=t.wrapT=Wn,t.repeat.set(4,7),t}const Ct=(i,e=.55,t=0)=>new Et({color:i,roughness:e,metalness:t}),Ur=Ct("#dfd4b9",.4),ts=Ct("#e7ddc6",.46),Ci=Ct("#b9ae91",.5),Nc=Ct("#222723",.55),Ri=Ct("#bab6a5",.3,.7),ns=Ct("#858359",.42),jo=Ct("#626d4d",.5),yu=Tx(),bu=Ed(),wx=J1(),is=new yn({map:bu,bumpMap:bu,bumpScale:.011,roughness:.43,clearcoat:.22,clearcoatRoughness:.43}),Rt=new at;Un.add(Rt);function Ze(i,e,t,n,s,r,o,a=.025,c=Rt){const l=new We(a?new Lc(i,e,t,3,Math.min(a,i/2.01,e/2.01,t/2.01)):new Ai(i,e,t),o);return l.position.set(n,s,r),l.castShadow=!0,l.receiveShadow=!0,c.add(l),l}function $t(i,e,t,n,s,r,o=Rt,a=i,c=48){const l=new We(new Ki(i,a,e,c),r);return l.position.set(t,n,s),l.castShadow=!0,l.receiveShadow=!0,o.add(l),l}function Nr(i,e,t,n=Rt){const s=new Ws(i.map(o=>new I(...o))),r=new We(new Lr(s,40,e,8,!1),t);return r.castShadow=!0,n.add(r),r}function $s(i,e,t,n,s,r,o,a=Rt){const c=new We(new Ar(1,24,16),o);return c.position.set(i,e,t),c.scale.set(n,s,r),c.castShadow=!0,c.receiveShadow=!0,a.add(c),c}const Eu=Ed(!0),Zo=new We(new Ft(24,24),new Et({map:Eu,bumpMap:Eu,bumpScale:.022,roughness:.65}));Zo.rotation.x=-Math.PI/2;Zo.position.set(0,.12,10);Zo.receiveShadow=!0;Rt.add(Zo);Ze(22,.1,.05,0,.17,-1.86,is,.008);const Ax=new Et({map:yu,bumpMap:yu,bumpScale:.015,roughness:.94,color:"#819377"});Ze(22,1.52,.014,0,.88,-1.89,Ax,0).castShadow=!1;for(const[i,e]of[[-11,Ls.left],[Ls.right,11]])Ze(e-i,.054,.052,(i+e)/2,Ls.spring,-1.86,is,.012);on.map=o1();const Fc=new Cc("#a6dbce",0,2.5);Fc.position.set(-.19,1.76,-.62);Rt.add(Fc);const Cx=new ze("#ffbd75"),Tu=new ze("#fff8e8"),wu=new ze("#619abe"),Rx=new ze("#b4aa96"),Px=new ze("#597788");let fr=0,Io=1;const Si=k1({onLighting:i=>{fr=i.night,Io=i.sunlight*(1-i.night),on.color.copy(i.color).lerp(Cx,.52*(1-i.night)),on.intensity=i.strength*2.45*(1-i.night),Lo.intensity=i.ambient*ht.lerp(.73,.43,i.night),Lo.color.copy(Tu).lerp(wu,i.night),Lo.groundColor.copy(Rx).lerp(Px,i.night),Bo.color.copy(Tu).lerp(wu,i.night),Bo.intensity=ht.lerp(.7,.34,i.night),Un.background.copy(i.background).multiplyScalar(1.75),Un.environmentIntensity=.34-i.night*.21,Fc.intensity=i.night*.53,ko!==i.name&&(ko=i.name,Is())}}),Dx=ex({root:Rt,box:Ze,wood:is,wall:wx,texture:Si.texture}),sn=.4,Lx=-.02,Js=-.9,tc=.12,Ko=new at;Ko.position.y=tc*.2;Ko.scale.y=.8;Rt.add(Ko);const Ix=Rt.children.length;Ze(5.49,.2,1.73,sn,.34,Js,jo,.08);for(const i of[sn-2.34,sn,sn+2.34])for(const e of[-1.48,-.23])$t(.087,.2,i,.22,e,ns);Zs(Rt,{x:sn,y:.121,z:Js,width:5.39,depth:1.63,radius:.11,spread:.32,opacity:.48});Ze(5.55,.13,1.75,sn,.36,Js,ns,.055);Ze(5.55,.1,1.75,sn,1.68,Js,ns,.04);Ze(5.45,1.3,.09,sn,1.01,-1.73,jo,.02);for(const i of[sn-2.71,sn+2.71])Ze(.13,1.43,1.75,i,1.01,Js,ns,.05);Ze(5.6,.14,1.82,sn,1.8,Js,is,.12);for(const i of[.37,1.67])Ze(5.35,.1,.09,sn,i,-.015,ns,.025);for(const i of[sn-2.66,sn+2.66])Ze(.09,1.3,.09,i,1.02,-.015,ns,.025);const Ld=[];for(let i=0;i<3;i++){const e=sn+(i-1)*1.735,t=new at;t.position.set(e-.85,1.02,Lx+.025),Rt.add(t);const n=new at;n.position.x=.85,t.add(n),Ze(1.7,1.18,.065,0,0,0,ns,.06,n),Ze(.045,.27,.057,.64,.07,.085,Ri,.02,n),Ld.push({hinge:t,door:n}),Ze(1.67,.045,1.6,e,.91,-.88,is,.015),i<2&&Ze(.045,1.3,1.6,e+.87,1.02,-.88,jo,.01)}for(const i of Rt.children.slice(Ix))Ko.add(i);const Dn=tc+(1.88-tc)*.8,Ut=new at;Ut.position.set(-.19,Dn,-.86);Ut.scale.setScalar(.95);Rt.add(Ut);const Fr=Ct("#276c62",.48),Id=new yn({color:"#4d9b8d",roughness:.24,metalness:.04,clearcoat:.78,transparent:!0,opacity:.77,depthWrite:!1}),$o=Ct("#68ab9a",.27,.1);$s(0,.79,-.47,.71,.67,.68,Id,Ut).castShadow=!1;$s(0,.79,-.46,.61,.57,.58,Fr,Ut);for(const i of[-.48,.48])for(const e of[-.56,.048])$t(.097,.12,i,.06,e,Fr,Ut);Ze(1.37,1.35,.3,0,.8,.095,$o,.148,Ut);Ze(1.31,1.29,.24,0,.815,.143,ts,.118,Ut);Ze(1.13,.97,.045,0,.92,.259,Ci,.065,Ut);Ze(1.08,.92,.025,0,.92,.286,Ct("#59665c",.6),.055,Ut);const ss=new yn({color:"#f0fff9",roughness:.24,metalness:.04,clearcoat:.8,clearcoatRoughness:.16,emissive:"#32564e",emissiveIntensity:.12}),Oc=new Ft(1.02,.86,36,30),yo=Oc.attributes.position;for(let i=0;i<yo.count;i++){let e=yo.getX(i),t=yo.getY(i);const n=Math.abs(e),s=Math.abs(t),r=.51-.045,o=.43-.045;if(n>r&&s>o){const a=n-r,c=s-o,l=Math.hypot(a,c);l>.045&&(e=Math.sign(e)*(r+a/l*.045),t=Math.sign(t)*(o+c/l*.045))}yo.setXYZ(i,e,t,.31+.038*(1-(e/.51)**2)*(1-(t/.43)**2))}Oc.computeVertexNormals();const Ji=new We(Oc,ss);Ji.position.set(0,.92,0);Ji.receiveShadow=!0;Ut.add(Ji);Ji.userData.roomHoverIgnore=!0;const zc=n1();ss.map=zc.map;ss.emissiveMap=zc.map;ss.emissive.set("#9cd4b2");ss.roughness=.17;Ze(.13,.025,.015,.4,.35,.245,Ci,.006,Ut);$s(.48,.35,.26,.012,.009,.005,Ct("#a2b99a"),Ut);const Ux=Ct("#b3aa93",.72),Bc=Ct("#c6bda6",.46),Nx=Ct("#726b53",.9);for(const i of[-.458,.458])for(let e=-2;e<=2;e++)for(let t=-4;t<=4;t++){if((t/4.4)**2+(e/2.5)**2>1)continue;const n=$t(.004,.003,i+t*.017,.275+e*.015,.265,Nx,Ut,.004,8);n.rotation.x=Math.PI/2,n.castShadow=!1}for(let i=0;i<8;i++)Ze(.019,.012,.126,-.157+i*.044,1.403,-.36,Fr,.005,Ut);for(const i of[-.35,-.22,-.09])Ze(.085,.045,.012,i,.355,.257,Ci,.012,Ut),Ze(.065,.028,.016,i,.355,.269,Bc,.009,Ut);const Fx=$t(.024,.012,.4,.35,.267,Bc,Ut);Fx.rotation.x=Math.PI/2;function Ox(i,e){const t=document.createElement("canvas");t.width=256,t.height=96;const n=t.getContext("2d");n.clearRect(0,0,256,96),n.fillStyle="#777563",n.font="30px Georgia",n.textAlign="center",n.fillText(i,128,39),n.font="11px Arial",n.fillText(e,128,66);const s=new Gt(t);return s.colorSpace=_t,s}function zx(i,e,t,n,s,r,o,a){const c=new We(new Ft(i,e),new rn({map:Ox(r,o),transparent:!0,depthWrite:!1}));return c.position.set(t,n,s),a.add(c),c}zx(.26,.09,.05,.365,.256,"doish","COLOR DISPLAY",Ut);const qt=new at;qt.position.set(.88,Dn,-.9);qt.scale.setScalar(.74);Rt.add(qt);Ze(.65,1.42,.79,0,.755,-.009,Fr,.105,qt);Ze(.77,1.57,.91,0,.8,0,Id,.141,qt).castShadow=!1;for(let i=-6;i<=6;i++){const e=i*.051;for(const[t,n]of i>=-5&&i<=5?[[.51,.87],[1.4,.22]]:[[.789,1.37]])Ze(.014,n,.019,e,t,.459,$o,.006,qt).castShadow=!1}for(let i=-6;i<=6;i++)for(const e of[-.381,.381])Ze(.017,1.34,.012,e,.795,i*.058,$o,.005,qt).castShadow=!1;for(const i of[-.23,.23])for(const e of[-.26,.26])$t(.075,.095,i,.05,e,Fr,qt);Ze(.65,.3,.055,0,1.064,.477,ts,.045,qt);Ze(.53,.064,.021,0,.95,.508,Nc,.008,qt);Ze(.48,.11,.018,0,1.122,.509,Ur,.01,qt);Ze(.29,.009,.009,-.052,1.102,.522,Ci,.003,qt);Ze(.058,.025,.011,.21,1.02,.513,Ci,.009,qt);const Pi=new at;Pi.position.set(0,.94,.53);qt.add(Pi);Ze(.54,.027,.58,0,0,.21,ts,.012,Pi);Ze(.55,.055,.035,0,-.004,.5,Ur,.008,Pi);const Bx=new yn({color:"#d8d8cd",metalness:.8,roughness:.2,iridescence:.7,iridescenceIOR:1.3,side:It}),xi=new We(new Ec(.032,.215,64),Bx);xi.rotation.x=-Math.PI/2;xi.position.set(0,.019,.2);Pi.add(xi);xi.visible=!1;$t(.058,.003,0,.022,.2,Ri,Pi);const kx=$t(.061,.024,0,.586,.479,$o,qt);kx.rotation.x=Math.PI/2;const Ud=new Et({color:"#8fc2a4",emissive:"#82ffd2",emissiveIntensity:.42});$s(0,.49,.484,.014,.014,.008,Ud,qt).userData.roomHoverIgnore=!0;const Di=new at;Di.position.set(-.19,Dn+.018,-.08);Di.scale.setScalar(.88);Di.rotation.x=.055;Rt.add(Di);Ze(1.2,.075,.4,0,0,0,Ur,.025,Di);for(let i=0;i<5;i++)for(let e=0;e<16;e++)i===4&&e>2&&e<9||Ze(.057,.025,.048,-.55+e*.071,.049,-.155+i*.067,i===0?Ci:ts,.007,Di);Ze(.43,.025,.048,-.15,.049,.113,ts,.008,Di);$s(.51,Dn+.054,-.015,.1,.044,.145,ts);Nr([[.51,Dn+.02,-.14],[.54,Dn+.02,-.36],[.65,Dn+.02,-.48],[.66,Dn+.02,-.82]],.009,Ci);const Jo=document.createElement("canvas");Jo.width=1024;Jo.height=320;const Or=Jo.getContext("2d");Or.fillStyle="#797867";Or.font="24px Arial";Or.textAlign="center";Or.textBaseline="middle";const Nd=[["esc","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","","",""],["1","2","3","4","5","6","7","8","9","0","−","=","←","7","8","9"],["Q","W","E","R","T","Y","U","I","O","P","[","]","↵","4","5","6"],["A","S","D","F","G","H","J","K","L",";","'","↑","","1","2","3"],["ctrl","alt","","","","","","","","alt","←","↓","→","0",".","↵"]];Nd.forEach((i,e)=>i.forEach((t,n)=>Or.fillText(t,n*64+32,e*64+32)));const Fd=new Gt(Jo);Fd.colorSpace=_t;const Hx=new rn({map:Fd,transparent:!0,depthWrite:!1,side:It});for(let i=0;i<5;i++)for(let e=0;e<16;e++){if(!Nd[i][e])continue;const t=new Ft(.049,.037),n=t.attributes.uv;for(let r=0;r<n.count;r++)n.setXY(r,(e+n.getX(r))/16,1-(i+1-n.getY(r))/5);const s=new We(t,Hx);s.rotation.x=-Math.PI/2,s.position.set(-.55+e*.071,.063,-.155+i*.067),Di.add(s)}Nr([[.02,2.004,-.13],[.02,2.009,-.07],[.02,2.01,-.02]],.0018,Ux);Ze(.019,.008,.035,.02,2.011,-.075,Bc,.006);const an=new at;an.position.set(2.28,Dn,-.89);an.scale.setScalar(.92);Rt.add(an);Ze(1.42,.17,1.12,0,.1,0,ts,.055,an);Ze(1.36,.025,1.06,0,.197,0,Ci,.025,an);for(const i of[-.52,.52])for(const e of[-.4,.4])$t(.055,.05,i,0,e,Nc,an);$t(.46,.043,-.12,.23,.025,Ri,an);const Li=new at;Li.position.set(-.12,.259,.025);an.add(Li);$t(.444,.015,0,0,0,Ct("#242720",.33),Li);for(let i=0;i<21;i++){const e=new We(new Dr(.17+i*.012,.0012,3,80),Ct(i%2?"#45463b":"#32362d",.4));e.rotation.x=Math.PI/2,e.position.y=.009,Li.add(e)}$t(.115,.004,0,.012,0,Ct("#b6a886",.8),Li);$t(.009,.027,0,.025,0,Ri,Li);Ze(.035,.002,.012,.04,.016,.012,Ct("#777252"),.001,Li);$t(.055,.08,.49,.26,-.36,Ri,an);const ii=new at;ii.position.set(.49,.31,-.36);an.add(ii);Nr([[0,0,0],[-.01,.01,.15],[-.16,.01,.64],[-.27,0,.72]],.018,Ri,ii);Ze(.06,.035,.1,-.27,-.01,.72,Nc,.012,ii);const Od=new Et({color:"#8f6846",emissive:"#ff943d",emissiveIntensity:0});$s(.26,.104,.565,.024,.024,.014,Od,an).userData.roomHoverIgnore=!0;for(const i of[.4,.58]){const e=$t(.036,.035,i,.1,.58,Ri,an);e.rotation.x=Math.PI/2}const rs=new at;rs.position.set(0,.23,-.51);rs.rotation.x=-1.04;an.add(rs);const Vx=new yn({color:"#918574",transparent:!0,opacity:.23,roughness:.085,clearcoat:1,clearcoatRoughness:.11,metalness:0,side:It,depthWrite:!1});function kc(i,e,t,n,s,r,o){const a=Ze(i,e,t,n,s,r,Vx,o,rs);a.castShadow=!1,a.userData.skipContactShadows=!0}kc(1.43,.022,1.1,0,0,.52,.012);for(const i of[-.71,.71])kc(.012,.115,1.09,i,-.05,.52,.004);kc(1.43,.115,.012,0,-.05,1.06,.004);const zd=Ct("#8b8777",.36,.25);for(const i of[-.71,.71])Ze(.008,.014,1.09,i,.006,.52,zd,.003,rs);Ze(1.43,.012,.009,0,.006,1.06,zd,.003,rs);const Qo=document.createElement("canvas");Qo.width=128;Qo.height=256;const Hc=Qo.getContext("2d"),zr=Hc.createLinearGradient(0,0,128,170);zr.addColorStop(0,"#fff4d68f");zr.addColorStop(.22,"#fff8e326");zr.addColorStop(.42,"#fff8e300");zr.addColorStop(1,"#fff8e300");Hc.fillStyle=zr;Hc.fillRect(0,0,128,256);const Bd=new Gt(Qo);Bd.colorSpace=_t;const ea=new We(new Ft(1.39,1.05),new rn({map:Bd,transparent:!0,depthWrite:!1,opacity:.42,side:It}));ea.rotation.x=-Math.PI/2;ea.position.set(0,.016,.54);ea.userData.skipContactShadows=!0;rs.add(ea);const Vc=a1({root:Rt,box:Ze,cylinder:$t,lineTube:Nr,mat:Ct,wood:is,silver:Ri,greenDark:jo,cream:Ur});Vc.scale.y=.95;class Gx extends On{excluded=[];render(...e){const t=this.excluded.filter(n=>n.visible);for(const n of t)n.visible=!1;try{super.render(...e)}finally{for(const n of t)n.visible=!0}}setSize(e,t){super.setSize(Math.max(1,Math.round(e*.67)),Math.max(1,Math.round(t*.67)))}}const os=new A1(Nn),bo=Nn.getContext(),Wx=bo.getInternalformatParameter(bo.RENDERBUFFER,bo.RGBA16F,bo.SAMPLES),kd=Array.from(Wx??[]).filter(i=>i>=2&&i<=4),Hd=Nn.getPixelRatio()<=1.4&&kd.length>0;Hd&&(os.readBuffer.samples=Math.min(...kd));os.addPass(new C1(Un,vt));const ta=new Gx(Un,vt,1,1);ta.updateGtaoMaterial({radius:.21,distanceExponent:1,thickness:.82,distanceFallOff:1,scale:1,samples:16});ta.blendIntensity=.62;os.addPass(ta);os.addPass(new I1);const nc=Hd?null:new Ad(U1);nc&&os.addPass(nc);const na=matchMedia("(prefers-reduced-motion: reduce)").matches;let Dt=!na,oi=null,kn=!1,ko="午后";const Au=document.querySelector(".caption p");function Is(){if(oi){Au.textContent=`正在查看：${oi.title}`;return}Au.textContent=kn?`${ko}，唱片还在转。`:`${ko}，唱片停了下来。`}const Uo=document.querySelector("#motion");function Vd(){Uo.setAttribute("aria-pressed",String(Dt)),Uo.setAttribute("title",Dt?"暂停场景动效":"开启场景动效"),Uo.querySelector("span").textContent=Dt?"开":"关",Is()}Vd();Uo.addEventListener("click",()=>{Dt=!Dt,Vd()});const Xx={perspective:Rn,left:Rn.clone().add(new I(-.52,0,0)),right:Rn.clone().add(new I(.52,0,0))},ia=[...document.querySelectorAll("[data-view]")],Gc={position:Rn,target:Ir,zoom:1,view:"perspective"};let Gn=null,bn=!1,Cr=Gc;function Wc(i){ia.forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.view===i)))}function Xc(){return{position:vt.position.clone(),target:At.target.clone(),zoom:vt.zoom,view:ia.find(i=>i.getAttribute("aria-pressed")==="true")?.dataset.view}}function ji(i,e=1100){Gn={from:Xc(),destination:i,start:performance.now(),duration:Dt&&!na?e:0},Wc(i.view),Yc(performance.now())}function Yc(i){if(!Gn)return;const{from:e,destination:t,start:n,duration:s}=Gn,r=s&&Dt?Math.min((i-n)/s,1):1,o=ht.smoothstep(r,0,1);vt.position.lerpVectors(e.position,t.position,o),At.target.lerpVectors(e.target,t.target,o),vt.zoom=ht.lerp(e.zoom,t.zoom,o),vt.updateProjectionMatrix(),r===1&&(Gn=null)}function Ho(){const i=Ji.getWorldPosition(new I),t=Math.max(1.48,1.53/vt.aspect)/(2*Math.tan(ht.degToRad(vt.fov/2)));return{position:i.clone().add(new I(-.07,t*.101,t)),target:i,zoom:1}}function Us(i){bn=i,Ti.toggleAttribute("data-screen-focused",i),ra.updateFocus(i,!!oi)}function Gd(){bn&&ji(Cr),Us(!1)}function Yx(){if(bn&&!oi){Gd(),ra.open();return}Wd()}function Wd(){bn||(Cr=Xc()),Us(!bn),ji(bn?Ho():Cr)}ia.forEach(i=>i.addEventListener("click",()=>{const e=i.dataset.view;Us(!1),ji({position:Xx[e],target:Ir,zoom:1,view:e}),sa()}));At.addEventListener("start",()=>{Gn=null,Wc(void 0)});function Xd(){const i=Ti.clientWidth,e=Ti.clientHeight,t=i/e;Ex(t),vt.aspect=t;const n=Math.max(3.66,5.56/t);vt.fov=ht.radToDeg(2*Math.atan(n/22)),bn&&(Gn?Gn.destination=Ho():vt.position.copy(Ho().position)),vt.updateProjectionMatrix(),Nn.setSize(i,e),os.setSize(i,e),nc?.uniforms.resolution.value.set(1/wi.width,1/wi.height)}window.addEventListener("resize",Xd);Xd();const Ns=document.querySelector("#room-menu"),Vo=document.querySelector("#room-menu-toggle");function sa(){Ns.hidden=!0,Vo.setAttribute("aria-expanded","false")}Vo.addEventListener("click",()=>{Ns.hidden=!Ns.hidden,Vo.setAttribute("aria-expanded",String(!Ns.hidden))});wi.addEventListener("pointerdown",sa);document.addEventListener("keydown",i=>{i.key==="Escape"&&!Ns.hidden&&!document.querySelector("dialog[open]")&&(sa(),Vo.focus())});const Bn=new Set,qx=["KeyW","KeyA","KeyS","KeyD"],mi=new I,lr=new I;function Yd(){return At.enabled&&!bn&&!Gn&&Ns.hidden&&!document.querySelector("dialog[open]")&&!document.activeElement?.closest("input, textarea, select, [contenteditable]")}document.addEventListener("keydown",i=>{!qx.includes(i.code)||i.altKey||i.ctrlKey||i.metaKey||!Yd()||(i.preventDefault(),Bn.add(i.code))});document.addEventListener("keyup",i=>Bn.delete(i.code));window.addEventListener("blur",()=>Bn.clear());document.addEventListener("visibilitychange",()=>{document.hidden&&Bn.clear()});function Cu(i,e,t,n){return e>0?Math.min(e,Math.max(0,n-i)):Math.max(e,Math.min(0,t-i))}function jx(i){if(!Bn.size)return;if(!Yd()){Bn.clear();return}const e=Number(Bn.has("KeyW"))-Number(Bn.has("KeyS")),t=Number(Bn.has("KeyD"))-Number(Bn.has("KeyA"));lr.subVectors(At.target,vt.position).setY(0).normalize(),mi.set(lr.x*e-lr.z*t,0,lr.z*e+lr.x*t),mi.normalize().multiplyScalar(i*2.65);const n=vt.position.z-Rn.z,s=ht.clamp(.52+n*.12,.16,.82);mi.x=Cu(vt.position.x,mi.x,Rn.x-s,Rn.x+s),mi.z=Cu(vt.position.z,mi.z,Rn.z-2.8,Rn.z+2.5),vt.position.add(mi),At.target.add(mi),Wc(void 0)}const qc=document.createElement("div");qc.id="room-disc-ui";Ti.append(qc);let No=null;function qd(i){const e=i.clone().project(vt),t=wi.getBoundingClientRect();return{x:t.left+(e.x+1)*t.width/2,y:t.top+(1-e.y)*t.height/2}}function Zx(i){const e=document.createElement("canvas");e.width=512,e.height=448;const t=e.getContext("2d");t.fillStyle="#1c3833",t.fillRect(0,0,512,448),t.fillStyle="#32564c",t.fillRect(0,0,512,83),t.textBaseline="middle",t.fillStyle="#e7ead5",t.font='22px "Microsoft YaHei", sans-serif',t.fillText(i.category,42,50),t.font='bold 46px "Microsoft YaHei", sans-serif',t.fillText(i.title,42,149,428),t.font='26px "Microsoft YaHei", sans-serif';let n="",s=222;for(const o of i.description)t.measureText(n+o).width>420&&(t.fillText(n,42,s),n="",s+=44),n+=o;n&&t.fillText(n,42,s),t.fillStyle="#aac5a8",t.font='20px "Microsoft YaHei", sans-serif',t.fillText("示例光盘",42,382),bd(t);const r=new Gt(e);return r.colorSpace=_t,r}const Eo=new rn({toneMapped:!1});function el(i){Eo.map?.dispose(),Eo.map=i?Zx(i):null,Eo.needsUpdate=!0,Ji.material=i?Eo:ss,Ji.receiveShadow=!i,wi.setAttribute("aria-label",i?`CRT 显示 ${i.title}。 ${i.description}`:"青绿复古电脑、唱片机与复古绿柜子的 3D 房间")}function ic(i){At.enabled=!i,ia.forEach(t=>t.disabled=i);const e=Ti.querySelector(".life-explore");e&&(e.disabled=i),i&&sa()}function tl(i){const e=Dt&&!na?680:0;return No={from:Pi.position.z,to:i,start:performance.now(),duration:e},jc(performance.now()),e}function jc(i){if(!No)return;const{from:e,to:t,start:n,duration:s}=No,r=s&&Dt?Math.min((i-n)/s,1):1;Pi.position.z=ht.lerp(e,t,ht.smoothstep(r,0,1)),r===1&&(No=null)}const Ru=i=>i?new Promise(e=>setTimeout(e,i)):Promise.resolve(),ra=F1({host:qc,onOpenCollection:Gd,onOpen:()=>ic(!0),onClose:()=>ic(!1),async prepareInsertion(){return!bn&&!Gn&&(Cr=Xc()),oi=null,Us(!1),el(null),Is(),xi.visible=!1,tl(.53),ji(Gc),await Ru(Gn?.duration),Yc(performance.now()),At.update(),vt.updateMatrixWorld(),Dt&&!na},getDrivePoint:()=>qd(xi.getWorldPosition(new I)),async onLoad(i){xi.visible=!0,await Ru(tl(-.01)),jc(performance.now()),oi=i,el(i),Us(!0),Is(),ji(Ho(),1350)},onToggleFocus:Wd,onEject(){bn&&ji(Cr),oi=null,xi.visible=!1,Us(!1),tl(.53),el(null),Is()}}),Hi=new Yn,vr=Mx({root:Rt,box:Ze,cylinder:$t,lineTube:Nr,mat:Ct,deskHeight:Dn,window:Ls}),Kx=i1(Rt,vr.mug,an,Ti);Rt.traverse(i=>{i.userData.skipContactShadows&&ta.excluded.push(i)});const $x=s1();let Pu=Si.getMode()==="night"?"noon":Si.getMode();function Jx(){const i=Si.getMode();if(i==="night"){Si.setMode(Pu);return}Pu=i,Si.setMode("night")}const To=Y1({root:Rt,canvas:wi,camera:vt,controls:At,box:Ze,mat:Ct,wood:is,cream:Ur,cabinetDoors:Ld,deskHeight:Dn,windowView:Si,mountedWindow:Dx,monitor:Ut,tower:qt,rack:Vc,collectionUI:ra,setLocked:ic,player:an,furniture:vr,toggleDay:Jx,toggleComputer:Yx,computerLabel:()=>bn?oi?"返回房间":"打开光盘集":"打开电脑",isRecordPlaying:()=>kn,toggleRecord(){kn=!kn,$x(kn),Is()}});function Qx(){Hi.setFromObject(Vc);const i=Ti.getBoundingClientRect();let e=1/0,t=1/0,n=-1/0,s=-1/0;for(const r of[Hi.min.x,Hi.max.x])for(const o of[Hi.min.y,Hi.max.y])for(const a of[Hi.min.z,Hi.max.z]){const c=qd(new I(r,o,a));e=Math.min(e,c.x),n=Math.max(n,c.x),t=Math.min(t,c.y),s=Math.max(s,c.y)}ra.updateBounds({x:e-i.left,y:t-i.top,w:n-e,h:s-t})}let Du=performance.now(),Vi=0,nl=0,Lu=!1,il=0,Iu=performance.now();function jd(i){requestAnimationFrame(jd);const e=(i-Iu)/1e3;e<.1||(Iu=i,Si.tick(Math.min(e,.2),Dt))}requestAnimationFrame(jd);function Zd(i){requestAnimationFrame(Zd);const e=Math.min((i-Du)/1e3,.05);Du=i,Yc(i),jx(e),At.update(),vt.updateMatrixWorld(),To.tick(e,Dt),jc(i),Qx(),Dt&&(Vi+=e);const t=bn||To.hovered(Ut);nl+=e,(t!==Lu||Dt&&nl>.145&&!oi)&&(Lu=t,nl=0,zc.draw(t,Vi*.17)),ss.emissiveIntensity=(t?.44:.3)+fr*.38+Math.sin(Vi*5.2)*.014,Ud.emissiveIntensity=.55+Math.sin(Vi*2.3)*.24;const n=kn?-.31:.38,s=kn?0:-.12;ii.rotation.y=Dt?ht.damp(ii.rotation.y,n,3.3,e):n;const o=Math.abs(ii.rotation.y-n)<.22?s:-.12;ii.rotation.x=Dt?ht.damp(ii.rotation.x,o,4.3,e):o,Dt&&kn&&(Li.rotation.y-=e*3.49),Od.emissiveIntensity=kn?1.25+fr*.52:fr*.38,vr.update(e,Vi,fr,To.hovered(vr.lamp),To.hovered(vr.plant),Dt,Io),Kx(Vi,Io,kn,Dt),il+=e,Dt&&il>.13&&Io>.05&&(Td(on.map,Vi),il=0),os.render()}requestAnimationFrame(i=>{Zd(i);const e=document.querySelector("#loading");e.classList.add("done"),Dt&&(vt.position.copy(Rn).lerp(Ir,-.035),ji(Gc,1050)),setTimeout(()=>e.remove(),650)});
