"use strict";(self["webpackChunkmypofolgram_front"]=self["webpackChunkmypofolgram_front"]||[]).push([[175],{7175:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var i=s(6252),a=s(3577),l=s(9963);const n={class:"topWithButton"},r={class:"bold"},o={class:"modifyProfile"},u={class:"medium"},c=(0,i._)("div",{class:"line"},null,-1),h={class:"small"};function m(e,t,s,m,d,f){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",n,[(0,i._)("i",{class:"fa-solid fa-chevron-left",onClick:t[0]||(t[0]=t=>e.$router.go(-1))}),(0,i._)("p",r,(0,a.zw)(d.title),1),(0,i._)("p",{class:"point",onClick:t[1]||(t[1]=(...e)=>f.set&&f.set(...e))},"완료")]),(0,i._)("div",o,[(0,i._)("p",u,(0,a.zw)(d.title),1),(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>d.value=e)},null,512),[[l.nr,d.value]]),(0,i._)("i",{class:"fa-solid fa-circle-xmark right",onClick:t[3]||(t[3]=(...e)=>f.remove&&f.remove(...e))}),c,(0,i._)("p",h,(0,a.zw)(d.message),1)])],64)}var d=s(8637),f={props:["userId","userName","introduction","type","systemId"],data(){return{value:"",title:"",message:"",nickname:""}},watch:{},created(){this.pageSetting(this.type)},computed:{...(0,d.rn)("userInfo",["userInfo"])},methods:{...(0,d.nv)("userInfo",["setProfile","getUserInfo"]),pageSetting(e){switch(e){case"name":this.title="이름",this.message="사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여회원님의 ㅣ계정을 찾을 수 있도록 도와주세요. 이름은 14일 안에 두 번만 변경할 수 있습니다.",this.value=this.userId;break;case"nickname":this.title="사용자 이름",this.message="대부분의 경우 이후 14일 동안 사용자 이름을 다시 {{this.nickname}}(으)로 변경할 수 있습니다.",this.value=this.userName;break;case"intro":this.title="소개",this.value=this.introduction;break}},remove(){this.value=""},async set(){await this.setProfile({type:this.type,value:this.value,systemId:this.systemId}),this.$router.go(-1)}}},p=s(3744);const v=(0,p.Z)(f,[["render",m]]);var g=v}}]);
//# sourceMappingURL=175.a3c6e521.js.map