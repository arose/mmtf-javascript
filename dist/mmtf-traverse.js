!function(o,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):o.traverseMmtf=e()}(this,function(){"use strict";function o(o){return String.fromCharCode.apply(null,o).replace(/\0/g,"")}function e(e,n){var t,r,d,a,i=n.onModel,s=n.onChain,u=n.onGroup,m=n.onAtom,c=n.onBond,l=0,p=0,L=0,f=0,C=e.chainNameList,g=e.secStructList,h=e.insCodeList,I=e.sequenceIndexList,x=e.bFactorList,y=e.altLocList,b=e.occupancyList,v=e.bondAtomList,N=e.bondOrderList;if(e.chainsPerModel.forEach(function(n){for(i&&i({chainCount:n,modelIndex:l}),t=0;n>t;++t){var v=e.groupsPerChain[p];if(s){var N=o(e.chainIdList.subarray(4*p,4*p+4)),O=null;C&&(O=o(C.subarray(4*p,4*p+4))),s({groupCount:v,chainIndex:p,modelIndex:l,chainId:N,chainName:O})}for(r=0;v>r;++r){var S=e.groupList[e.groupTypeList[L]],T=S.atomNameList.length;if(u){var A=null;g&&(A=g[L]);var M=null;e.insCodeList&&(M=String.fromCharCode(h[L]));var q=null;I&&(q=I[L]),u({atomCount:T,groupIndex:L,chainIndex:p,modelIndex:l,groupId:e.groupIdList[L],groupType:e.groupTypeList[L],groupName:S.groupName,singleLetterCode:S.singleLetterCode,chemCompType:S.chemCompType,secStruct:A,insCode:M,sequenceIndex:q})}if(c){var z=S.bondAtomList;for(d=0,a=S.bondOrderList.length;a>d;++d)c({atomIndex1:f+z[2*d],atomIndex2:f+z[2*d+1],bondOrder:S.bondOrderList[d]})}for(d=0;T>d;++d){if(m){var F=null;x&&(F=x[f]);var P=null;y&&(P=String.fromCharCode(y[f]));var j=null;b&&(j=b[f]),m({atomIndex:f,groupIndex:L,chainIndex:p,modelIndex:l,atomId:e.atomIdList[f],element:S.elementList[d],atomName:S.atomNameList[d],atomCharge:S.atomChargeList[d],xCoord:e.xCoordList[f],yCoord:e.yCoordList[f],zCoord:e.zCoordList[f],bFactor:F,altLoc:P,occupancy:j})}f+=1}L+=1}p+=1}l+=1}),c&&v)for(d=0,a=v.length;a>d;d+=2)c({atomIndex1:v[d],atomIndex2:v[d+1],bondOrder:N?N[d/2]:null})}return e});