"use strict";(self["webpackChunkmypofolgram_front"]=self["webpackChunkmypofolgram_front"]||[]).push([[219],{3219:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var a=s(6252),n=s(3577);const o={key:0,class:"topBack"},l=(0,a._)("p",null,"댓글",-1),r=(0,a._)("i",{class:"fa-solid fa-paper-plane right"},null,-1),m={id:"commentList"},i={class:"content"},c=["src"],h={class:"area"},u=(0,a._)("p",null,null,-1),g={class:"time"},p=["src"],d={class:"area"},_={class:"time"};function C(t,e,s,C,w,f){return(0,a.wg)(),(0,a.iD)(a.HY,null,[!0===w.changeComment?((0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("i",{class:"fa-solid fa-chevron-left",onClick:e[0]||(e[0]=e=>t.$router.go(-1))}),l,r])):(0,a.kq)("",!0),(0,a._)("div",m,[(0,a._)("div",i,[(0,a._)("img",{src:this.userImgUrl,alt:"프로필"},null,8,c),(0,a._)("div",h,[(0,a._)("b",null,(0,n.zw)(this.nickName),1),(0,a._)("span",null,(0,n.zw)(this.content),1),u,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.hashtags,(t=>((0,a.wg)(),(0,a.iD)("span",{class:"hashtag",key:t},[(0,a._)("span",null,"#"+(0,n.zw)(t)+" ",1)])))),128)),(0,a._)("p",g,(0,n.zw)(this.calculateDate(this.createDate)),1)])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.localCommentList,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"comment",key:t},[(0,a._)("img",{src:t.userImgUrl,alt:"프로필"},null,8,p),(0,a._)("div",d,[(0,a._)("b",null,(0,n.zw)(t.nickName),1),(0,a._)("span",null,(0,n.zw)(t.comment),1),(0,a._)("p",_,(0,n.zw)(this.calculateDate(t.createDate)),1)])])))),128))])],64)}var w=s(7662),f=s(8108),k=s(8637),D={data(){return{localCommentList:[],changeComment:!0,postId:"",body:"",userImgUrl:"",nickName:"",createDate:"",hashtags:[],rows:[]}},mounted(){this.getComments()},computed:{...(0,k.Se)("comment",["getterPostForComment"])},methods:{getComments(){f.Z.get("/api/post/getCommentList",{params:{postId:"1"}}).then((t=>{this.localCommentList=t.data.result})),this.content=this.getterPostForComment.content,this.body=this.getterPostForComment.body,this.nickName=this.getterPostForComment.nickName,this.userImgUrl=this.getterPostForComment.userImgUrl,this.createDate=this.getterPostForComment.createDate,this.hashtags=this.getterPostForComment.hashtags},calculateDate(t){return w.Z.getDate(t)}}},v=s(3744);const y=(0,v.Z)(D,[["render",C]]);var b=y}}]);
//# sourceMappingURL=219.2755f97c.js.map