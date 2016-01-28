var StructureDecoder=function(){"use strict";function e(e,r){function t(e){for(var r={},t=0;e>t;t++){var n=i();r[n]=i()}return r}function n(t){var n=e.subarray(r,r+t);return r+=t,n}function a(t){var n=e.subarray(r,r+t),a=String.fromCharCode.apply(null,n);return r+=t,a}function o(e){for(var r=new Array(e),t=0;e>t;t++)r[t]=i();return r}function i(){var i,s,c,f=e[r];if(0===(128&f))return r++,f;if(128===(240&f))return s=15&f,r++,t(s);if(144===(240&f))return s=15&f,r++,o(s);if(160===(224&f))return s=31&f,r++,a(s);if(224===(224&f))return i=u.getInt8(r),r++,i;switch(f){case 192:return r++,null;case 194:return r++,!1;case 195:return r++,!0;case 196:return s=u.getUint8(r+1),r+=2,n(s);case 197:return s=u.getUint16(r+1),r+=3,n(s);case 198:return s=u.getUint32(r+1),r+=5,n(s);case 199:return s=u.getUint8(r+1),c=u.getUint8(r+2),r+=3,[c,n(s)];case 200:return s=u.getUint16(r+1),c=u.getUint8(r+3),r+=4,[c,n(s)];case 201:return s=u.getUint32(r+1),c=u.getUint8(r+5),r+=6,[c,n(s)];case 202:return i=u.getFloat32(r+1),r+=5,i;case 203:return i=u.getFloat64(r+1),r+=9,i;case 204:return i=e[r+1],r+=2,i;case 205:return i=u.getUint16(r+1),r+=3,i;case 206:return i=u.getUint32(r+1),r+=5,i;case 207:return r+=9,0;case 208:return i=u.getInt8(r+1),r+=2,i;case 209:return i=u.getInt16(r+1),r+=3,i;case 210:return i=u.getInt32(r+1),r+=5,i;case 211:return i=u.getInt64(r+1),r+=9,i;case 212:return c=u.getUint8(r+1),i=u.getUint8(r+2),r+=3,0===c&&0===i?void 0:[c,i];case 213:return c=u.getUint8(r+1),r+=2,[c,n(2)];case 214:return c=u.getUint8(r+1),r+=2,[c,n(4)];case 215:return c=u.getUint8(r+1),r+=2,[c,n(8)];case 216:return c=u.getUint8(r+1),r+=2,[c,n(16)];case 217:return s=u.getUint8(r+1),r+=2,a(s);case 218:return s=u.getUint16(r+1),r+=3,a(s);case 219:return s=u.getUint32(r+1),r+=5,a(s);case 220:return s=u.getUint16(r+1),r+=3,o(s);case 221:return s=u.getUint32(r+1),r+=5,o(s);case 222:return s=u.getUint16(r+1),r+=3,t(s);case 223:return s=u.getUint32(r+1),r+=5,t(s);case 216:return s=u.getUint16(r+1),r+=3,buf(s);case 217:return s=u.getUint32(r+1),r+=5,buf(s)}throw new Error("Unknown type 0x"+f.toString(16))}r=r||0;var u=new DataView(e.buffer);this.parse=i}function r(r){var t=new e(r),n=t.parse();return n}function t(e,r){var t=new DataView(e.buffer),n=e.byteOffset,a=e.byteLength;r||(r=new Int8Array(a));for(var o=0;a>o;o+=1)r[o]=t.getInt8(n+o);return r}function n(e,r,t){var n=new DataView(e.buffer),a=e.byteOffset,o=e.byteLength;r||(r=new Int16Array(o/2));for(var i=0;o>i;i+=2)r[i/2]=n.getInt16(a+i,t);return r}function a(e,r,t){var n=new DataView(e.buffer),a=e.byteOffset,o=e.byteLength;r||(r=new Int32Array(o/4));for(var i=0;o>i;i+=4)r[i/4]=n.getInt32(a+i,t);return r}function o(e,r,t){var n=e.length;t||(t=new Float32Array(n));for(var a=0;n>a;++a)t[a]=e[a]/r;return t}function i(e,r){var t,n;if(!r){var a=0;for(t=0,n=e.length;n>t;t+=2)a+=e[t+1];r=new e.constructor(a)}var o=0;for(t=0,n=e.length;n>t;t+=2)for(var i=e[t],u=e[t+1],s=0;u>s;++s)r[o]=i,o+=1;return r}function u(e){for(var r=1,t=e.length;t>r;++r)e[r]+=e[r-1];return e}function s(e,r,t){var n=e.length/2+r.length;t||(t=new Int32Array(n));for(var a=0,o=0,i=0,u=e.length;u>i;i+=2){var s=e[i],c=e[i+1];t[a]=s,0!==i&&(t[a]+=t[a-1]),a+=1;for(var f=0;c>f;++f)t[a]=t[a-1]+r[o],a+=1,o+=1}return t}function c(e,r,t,i,u){var c=s(a(e,void 0,u),n(r,void 0,u));return o(c,t,i)}function f(e,r){for(var t,n=e.resOrder,a=n.byteOffset,o=n.byteLength,i=new DataView(n.buffer),u=0,s=0,c=o/4;c>s;++s)t=i.getInt32(a+4*s,r),u+=e.groupMap[t].bondOrders.length;return u}function d(e,r,n){var o,s,d,l,h,m,g,_,v,S,b,y=(Object({},n),f(e)),w=e.numAtoms,U=e.resOrder.length/4,A=e.chainList.length/4,C=e.chainsPerModel.length;for(r?(g=r.bondStore,_=r.atomStore,v=r.residueStore,S=r.chainStore,b=r.modelStore):(g={atomIndex1:new Uint32Array(y),atomIndex2:new Uint32Array(y),bondOrder:new Uint8Array(y)},_={residueIndex:new Uint32Array(w),x:new Float32Array(w),y:new Float32Array(w),z:new Float32Array(w),bfactor:new Float32Array(w),element:new Uint8Array(3*w),serial:new Int32Array(w),hetero:new Int8Array(w),altloc:new Uint8Array(w),atomname:new Uint32Array(4*w)},v={chainIndex:new Uint32Array(U),atomOffset:new Uint32Array(U),atomCount:new Uint16Array(U),resno:new Int32Array(U),resname:new Uint8Array(5*U),sstruc:new Uint8Array(U)},S={modelIndex:new Uint16Array(A),residueOffset:new Uint32Array(A),residueCount:new Uint32Array(A),chainname:new Uint8Array(4*A)},b={chainOffset:new Uint32Array(C),chainCount:new Uint32Array(C)}),c(e.cartn_x_big,e.cartn_x_small,1e3,_.x),c(e.cartn_y_big,e.cartn_y_small,1e3,_.y),c(e.cartn_z_big,e.cartn_z_small,1e3,_.z),c(e.b_factor_big,e.b_factor_small,100,_.bfactor),u(i(a(e._atom_site_id),_.serial)),o=0,s=e._atom_site_label_alt_id.length;s>o;o+=2){var I=e._atom_site_label_alt_id[o];"?"===I?e._atom_site_label_alt_id[o]=0:e._atom_site_label_alt_id[o]=e._atom_site_label_alt_id[o].charCodeAt(0),e._atom_site_label_alt_id[o+1]=parseInt(e._atom_site_label_alt_id[o+1])}i(e._atom_site_label_alt_id,_.altloc),S.chainname.set(t(e.chainList));var p,O=e.chainsPerModel,x=0;for(o=0;C>o;++o){for(p=O[o],b.chainOffset[o]=x,b.chainCount[o]=p,d=0;p>d;++d)S.modelIndex[d+x]=o;x+=p}var M,D=e.groupsPerChain,F=0;for(o=0;A>o;++o){for(M=D[o],S.residueOffset[o]=F,S.residueCount[o]=M,d=0;M>d;++d)v.chainIndex[d+F]=o;F+=M}var L={0:"i",1:"s",2:"h",3:"e",4:"g",5:"b",6:"t",7:"l","-1":""};u(i(a(e._atom_site_auth_seq_id),v.resno));var z=a(e.resOrder),V=t(e.secStruct),k=0,P=0;for(o=0;U>o;++o){var B=e.groupMap[z[o]],G=B.hetFlag?1:0,R=B.atomInfo,T=R.length/2,j=B.bondIndices,q=B.bondOrders;for(d=0,l=q.length;l>d;++d)g.atomIndex1[P]=k+j[2*d],g.atomIndex2[P]=k+j[2*d+1],g.bondOrder[P]=q[d],P+=1;v.sstruc[o]=(L[V[o]]||"l").charCodeAt(),v.atomOffset[o]=k,v.atomCount[o]=T;var E=B.resName;for(d=0,l=E.length;l>d;++d)v.resname[5*o+d]=E.charCodeAt(d);for(d=0;T>d;++d){var N=R[2*d+1];for(h=0,m=N.length;m>h;++h)_.atomname[4*k+h]=N.charCodeAt(h);var H=R[2*d];for(h=0,m=H.length;m>h;++h)_.element[3*k+h]=H.charCodeAt(h);_.hetero[k]=G,_.residueIndex[k]=o,k+=1}}return{bondStore:g,atomStore:_,residueStore:v,chainStore:S,modelStore:b}}var l=function(e){function t(e,r){var t=performance.now(),n=d(v,e,r),a=performance.now();g.__structureDecodeTimeMs=a-t,g.bondStore=n.bondStore,g.atomStore=n.atomStore,g.residueStore=n.residueStore,g.chainStore=n.chainStore,g.modelStore=n.modelStore}function n(e){return[g.bondStore.atomIndex1[e],g.bondStore.atomIndex2[e],g.bondStore.bondOrder[e]]}function a(e){var r,t,n="";for(r=0;3>r&&(t=g.atomStore.element[3*e+r],t);++r)n+=String.fromCharCode(t);var a="";for(r=0;4>r&&(t=g.atomStore.atomname[4*e+r],t);++r)a+=String.fromCharCode(t);return[g.atomStore.residueIndex[e],g.atomStore.x[e],g.atomStore.y[e],g.atomStore.z[e],g.atomStore.bfactor[e],n,g.atomStore.serial[e],g.atomStore.hetero[e],String.fromCharCode(g.atomStore.altloc[e]),a]}function o(e){for(var r="",t=0;5>t;++t){var n=g.residueStore.resname[5*e+t];if(!n)break;r+=String.fromCharCode(n)}return[g.residueStore.chainIndex[e],g.residueStore.atomOffset[e],g.residueStore.atomCount[e],g.residueStore.resno[e],r,String.fromCharCode(g.residueStore.sstruc[e])]}function i(e){for(var r="",t=0;4>t;++t){var n=g.chainStore.chainname[4*e+t];if(!n)break;r+=String.fromCharCode(n)}return[g.chainStore.modelIndex[e],g.chainStore.residueOffset[e],g.chainStore.residueCount[e],r]}function u(e){return[g.modelStore.chainOffset[e],g.modelStore.chainCount[e]]}function s(e){for(var r=0;b>r;++r)e.apply(null,n(r))}function c(e){for(var r=0;y>r;++r)e.apply(null,a(r))}function l(e){for(var r=0;w>r;++r)e.apply(null,o(r))}function h(e){for(var r=0;U>r;++r)e.apply(null,i(r))}function m(e){for(var r=0;A>r;++r)e.apply(null,u(r))}var g=this;e instanceof ArrayBuffer?(g.buffer=e,e=new Uint8Array(e)):g.buffer=e.buffer;var _=performance.now(),v=r(e),S=performance.now();this.__msgpackDecodeTimeMs=S-_;var b=f(v),y=v.numAtoms,w=v.resOrder.length/4,U=v.chainList.length/4,A=v.chainsPerModel.length;this.unitCell=v.unitCell,this.spaceGroup=v.spaceGroup,this.bondCount=b,this.atomCount=y,this.residueCount=w,this.chainCount=U,this.modelCount=A,this.bondStore=void 0,this.atomStore=void 0,this.residueStore=void 0,this.chainStore=void 0,this.modelStore=void 0,this.decode=t,this.getBond=n,this.getAtom=a,this.getResidue=o,this.getChain=i,this.getModel=u,this.eachBond=s,this.eachAtom=c,this.eachResidue=l,this.eachChain=h,this.eachModel=m};return l}();