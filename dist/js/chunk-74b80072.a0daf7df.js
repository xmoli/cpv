(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74b80072"],{"27ae":function(e,s,t){},"576b":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("transition-group",{staticClass:"wrapper",attrs:{tag:"ul",name:"fade"}},e._l(e.messagebox,(function(s,n){return t("li",{key:n,staticClass:"tip-box"},[e._v(" "+e._s(s.message)+" "),t("i",{staticClass:"fa fa-close",on:{click:function(s){return e.remove(n,s)}}})])})),0)},i=[],a=(t("c975"),t("a434"),{props:["message","delay"],data:function(){return{messagebox:[]}},watch:{message:function(e,s){var t=e;this.show(t),this.store(t)}},methods:{show:function(e){var s;this.messagebox.push(e),s=this.delay?this.delay:6e3,setTimeout(function(){var s=this.messagebox.indexOf(e);s>=0&&this.messagebox.splice(s,1)}.bind(this),s)},store:function(e){console.log(e.message)},remove:function(e,s){this.messagebox.splice(e,1)}}}),o=a,r=(t("9b3f"),t("e592"),t("2877")),c=Object(r["a"])(o,n,i,!1,null,"a50eb700",null);s["default"]=c.exports},"7f21":function(e,s,t){},"9b3f":function(e,s,t){"use strict";var n=t("7f21"),i=t.n(n);i.a},c975:function(e,s,t){"use strict";var n=t("23e7"),i=t("4d64").indexOf,a=t("a640"),o=t("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),f=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!u||!f},{indexOf:function(e){return c?r.apply(this,arguments)||0:i(this,e,arguments.length>1?arguments[1]:void 0)}})},e592:function(e,s,t){"use strict";var n=t("27ae"),i=t.n(n);i.a}}]);
//# sourceMappingURL=chunk-74b80072.a0daf7df.js.map