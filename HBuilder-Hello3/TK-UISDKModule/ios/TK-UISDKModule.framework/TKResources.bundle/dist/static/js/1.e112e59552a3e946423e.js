webpackJsonp([1],{KLdp:function(t,i){},S6Ip:function(t,i){},gMig:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),s("nsZj"),s("S6Ip");var e=s("vQ9b"),r=s("4PMK"),n=s("o69Z"),v=s("JOBW"),h=s("5Fm4"),c=Object(n.b)("sticky"),o=c[0],a=c[1],_=o({mixins:[Object(h.a)(function(t,i){if(this.scroller||(this.scroller=Object(v.c)(this.$el)),this.observer){var s=i?"observe":"unobserve";this.observer[s](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()})],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{offsetTopPx:function(){return Object(r.b)(this.offsetTop)},style:function(){if(this.fixed){var t={};return Object(n.e)(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTopPx&&this.fixed&&(t.top=this.offsetTopPx+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},created:function(){var t=this;!n.h&&window.IntersectionObserver&&(this.observer=new IntersectionObserver(function(i){i[0].intersectionRatio>0&&t.onScroll()},{root:document.body}))},methods:{onScroll:function(){var t=this;if(!Object(e.a)(this.$el)){this.height=this.$el.offsetHeight;var i=this.container,s=this.offsetTopPx,r=Object(v.b)(window),n=Object(v.a)(this.$el),h=function(){t.$emit("scroll",{scrollTop:r,isFixed:t.fixed})};if(i){var c=n+i.offsetHeight;if(r+s+this.height>c){var o=this.height+r-c;return o<this.height?(this.fixed=!0,this.transform=-(o+s)):this.fixed=!1,void h()}}r+s>n?(this.fixed=!0,this.transform=0):this.fixed=!1,h()}}},render:function(){var t=arguments[0],i=this.fixed;return t("div",{style:{height:i?this.height+"px":null}},[t("div",{class:a({fixed:i}),style:this.style},[this.slots()])])}});s("7+uW").default.use(_);var p={name:"privacyprotocal",data:function(){return{content:this.$t("privacy.b")}},props:["from"],created:function(){this.$route.query.name&&(this.content=this.content.replace(this.$t("app"),decodeURI(this.$route.query.name)))},methods:{handleback:function(){this.$router.go(-1)}}},f={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"privacyprotocal"},["web"!==t.$route.query.from?s("div",{directives:[{name:"show",rawName:"v-show",value:"login"!=t.from,expression:"from != 'login'"}],staticClass:"header"},[s("div",{staticClass:"icon-back",on:{click:t.handleback}})]):t._e(),t._v(" "),s("div",{staticClass:"container"},[s("div",["web"!==t.$route.query.from?s("h1",[t._v(t._s(this.$t("privacy.title")))]):t._e(),t._v(" "),s("h3",[t._v(t._s(this.$t("privacy.a")))]),t._v(" "),s("p",[t._v("\n        "+t._s(t.content)+"\n      ")])]),t._v(" "),s("div",[s("h3",[t._v(t._s(this.$t("privacy.c")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.d"))+"\n      ")]),t._v(" "),s("p",[t._v(t._s(this.$t("privacy.e")))]),t._v(" "),s("p",[t._v(t._s(this.$t("privacy.f")))]),t._v(" "),s("p",[t._v("\n          1). "+t._s(this.$t("privacy.g"))+"\n      ")]),t._v(" "),s("p",[t._v("\n          2).\n        "+t._s(this.$t("privacy.h"))+"\n      ")]),t._v(" "),s("p",[t._v("\n          3).\n        "+t._s(this.$t("privacy.i"))+"\n      ")])]),t._v(" "),s("div",[s("h3",[t._v(t._s(this.$t("privacy.j")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.k"))+"\n      ")]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.l"))+"\n      ")])]),t._v(" "),s("div",[s("h3",[t._v(t._s(this.$t("privacy.m")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.n"))+"\n      ")]),t._v(" "),s("p",[t._v(t._s(this.$t("privacy.o")))]),t._v(" "),s("p",[t._v(t._s(this.$t("privacy.q")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.q"))+"\n      ")]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.r"))+"\n      ")]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.s"))+"\n      ")]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.t"))+"\n      ")]),t._v(" "),s("p",[t._v(t._s(this.$t("privacy.u")))])]),t._v(" "),s("div",[s("h3",[t._v(t._s(this.$t("privacy.v")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.w"))+"\n      ")])]),t._v(" "),s("div",[s("h3",[t._v(t._s(this.$t("privacy.x")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.y"))+"\n      ")]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.z"))+"\n      ")]),t._v(" "),s("p",[t._v(t._s(this.$t("privacy.aa")))])]),t._v(" "),s("div",[s("h3",[t._v(t._s(this.$t("privacy.ab")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.ac"))+"\n      ")])]),t._v(" "),s("div",[s("h3",[t._v(t._s(this.$t("privacy.ad")))]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.ae"))+"\n      ")]),t._v(" "),s("p",[t._v("\n        "+t._s(this.$t("privacy.af"))+"\n      ")])])])])},staticRenderFns:[]},d=s("VU/8")(p,f,!1,function(t){s("KLdp")},"data-v-4c3cdcf4",null);i.default=d.exports}});