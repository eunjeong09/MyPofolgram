"use strict";(self["webpackChunkmypofolgram_front"]=self["webpackChunkmypofolgram_front"]||[]).push([[220],{3250:function(e,s,t){t.r(s),t.d(s,{default:function(){return I}});var r=t(6252);function o(e,s,t,o,n,i){const u=(0,r.up)("StoryList"),a=(0,r.up)("PostList");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u),(0,r.Wm)(a)])}var n=t(3577);const i={class:"storyList"},u=["onClick"],a=["src"];function l(e,s,t,o,l,m){return(0,r.wg)(),(0,r.iD)("div",i,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.rows,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"story",onClick:s=>m.moveTo(`/story/${e.id}`),key:e},[(0,r._)("img",{src:e.userImgUrl,alt:"사용자프로필",class:(0,n.C_)({circle:!1===e.view})},null,10,a),(0,r._)("p",null,(0,n.zw)(e.nickName),1)],8,u)))),128))])}var m={date(){return{rows:[]}},created(){this.getStoryList()},methods:{getStoryList(){let e={rows:[{id:1,nickName:"eunjeong1",userImgUrl:"/images/example.jpeg",view:!1},{id:2,nickName:"eunjeong2",userImgUrl:"/images/example.jpeg",view:!1},{id:3,nickName:"eunjeong3",userImgUrl:"/images/example.jpeg",view:!0},{id:4,nickName:"eunjeong4",userImgUrl:"/images/example.jpeg",view:!0}]};this.rows=e.rows},moveTo(e){this.$router.push({path:e})}}},g=t(3744);const c=(0,g.Z)(m,[["render",l]]);var d=c,p=t(4430),w=t(8637),v={components:{StoryList:d,PostList:p.Z},data(){return{testValue:"test"}},created(){let e=sessionStorage.getItem("userId");this.setUserId(e),this.getUserInfo()},computed:{},methods:{...(0,w.OI)("userInfo",["setUserId"]),...(0,w.nv)("userInfo",["getUserInfo"])}};const f=(0,g.Z)(v,[["render",o]]);var I=f}}]);
//# sourceMappingURL=220.0810e7d3.js.map