(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f69ae94"],{"0f7d":function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"messagebox"},[t("div",[t("i",{staticClass:"fa fa-bell-o",on:{click:e.openMessageMenu}}),t("item-menu",{ref:"messageMenu",staticClass:"item-menu",attrs:{open:e.messageMenu},on:{"close-menu":function(n){e.messageMenu=!1}}},[t("ul",[t("li",[t("button",[e._v("消息")])]),t("li",[t("button",[e._v("...")])])])])],1),t("div",[t("span",{on:{click:e.openUserMenu}},[t("i",{staticClass:"fa fa-user-o"}),e._v(" username")]),t("item-menu",{ref:"userMenu",staticClass:"item-menu",attrs:{open:e.userMenu},on:{"close-menu":function(n){e.userMenu=!1}}},[t("ul",[t("li",[t("router-link",{attrs:{tag:"button",to:"/user"}},[e._v("设置")])],1),t("li",[t("button",{on:{click:e.logout}},[e._v(" 登出 ")])])])])],1)])},u=[],o=(t("d3b7"),t("e282")),a=o.tokenKey,i=function(){sessionStorage.removeItem(a),localStorage.removeItem(a)},c=t("cf63"),r={name:"Message",components:{"item-menu":function(){return t.e("chunk-469abbdd").then(t.bind(null,"fb62"))}},data:function(){return{messageMenu:!1,userMenu:!1}},methods:{logout:function(){fetch("/user/logout",{method:"DELETE",headers:{"X-Auth-Token":Object(c["a"])()}}).catch((function(e){console.log(e)})),i(),this.$router.push("/login")},openUserMenu:function(){this.userMenu=!0},openMessageMenu:function(){this.messageMenu=!0}}},l=r,m=(t("e8b7"),t("2877")),f=Object(m["a"])(l,s,u,!1,null,"234b6694",null);n["default"]=f.exports},8231:function(e,n,t){},e8b7:function(e,n,t){"use strict";var s=t("8231"),u=t.n(s);u.a}}]);
//# sourceMappingURL=chunk-1f69ae94.bb3f0d4e.js.map