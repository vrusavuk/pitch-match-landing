(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},o=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"020f":function(t,e,a){"use strict";var r=a("a1d4"),n=a.n(r);n.a},"0686":function(t,e,a){},"0bea":function(t,e,a){},1917:function(t,e,a){t.exports=a.p+"img/mockup-2.26c3343f.png"},"241e":function(t,e,a){},"286a":function(t,e,a){"use strict";var r=a("9fea"),n=a.n(r);n.a},"2a7d":function(t,e,a){},"2b04":function(t,e,a){t.exports=a.p+"img/app-store-badge.fe71e206.png"},"3cbd":function(t,e,a){t.exports=a.p+"img/soccer.6e111119.svg"},"3e74":function(t,e,a){},"43e1":function(t,e,a){"use strict";var r=a("2a7d"),n=a.n(r);n.a},"496c":function(t,e,a){"use strict";var r=a("241e"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"app"},[a("router-view",{attrs:{name:"navbar"}}),a("v-main",[a("router-view",{attrs:{name:"home"}}),a("router-view",{attrs:{name:"features"}}),a("router-view",{attrs:{name:"homeru"}}),a("router-view",{attrs:{name:"featuresru"}}),a("router-view",{attrs:{name:"footer"}})],1),a("router-view")],1)},o=[],s={data:function(){return{}}},i=s,c=a("2877"),l=a("6544"),u=a.n(l),p=a("7496"),f=a("f6c4"),h=Object(c["a"])(i,n,o,!1,null,null,null),v=h.exports;u()(h,{VApp:p["a"],VMain:f["a"]});var d=a("8c4f"),g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{color:(t.isScrolling,"transparent"),fixed:"",flat:"",dark:""}},[r("v-slide-x-transition",[t.showLogo?r("v-img",{staticClass:"shrink",attrs:{src:a("8092"),contain:"",height:"50",position:"relative"}}):t._e()],1),r("v-spacer"),r("v-btn-toggle",{attrs:{rounded:"",mandatory:""}},[r("router-link",{attrs:{to:"/ru"}},[r("v-btn",{attrs:{icon:""}},[t._v(" ru ")])],1),r("router-link",{attrs:{to:"/en"}},[r("v-btn",{attrs:{icon:""}},[t._v(" en ")])],1)],1)],1)},m=[],b={name:"AppNavbar",data:function(){return{showLogo:!1,isScrolling:!1}},methods:{onScroll:function(){var t=window.pageYOffset;this.isScrolling=t>50,this.showLogo=t>200}}},_=b,w=a("40dc"),y=a("8336"),C=a("a609"),x=a("adda"),k=a("0789"),O=a("2fa4"),j=a("269a"),M=a.n(j),S=a("f977"),P=Object(c["a"])(_,g,m,!1,null,null,null),V=P.exports;u()(P,{VAppBar:w["a"],VBtn:y["a"],VBtnToggle:C["a"],VImg:x["a"],VSlideXTransition:k["c"],VSpacer:O["a"]}),M()(P,{Scroll:S["b"]});var E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"intro-bg"},[r("div",{staticClass:"intro"},[r("intro"),r("img",{staticClass:"img-fluid",attrs:{src:a("b580"),alt:"Pitch Match Mockup"}})],1)])},$=[],A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Pitch-Match")]),r("p",[t._v("Soccer available for everyone at any time!")]),r("div",{staticClass:"row"},[r("div",{staticClass:"c"},[r("a",{attrs:{href:"https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&path=appstore"}},[r("img",{attrs:{alt:"App Store Badge",src:a("2b04"),width:"200",height:"auto"}})])]),r("div",{staticClass:"c"},[r("a",{attrs:{href:"https://play.google.com/store/apps?hl=en"}},[r("img",{attrs:{alt:"App Store Badge",src:a("be22"),width:"200",height:"auto"}})])])])])}],T={name:"Intro"},F=T,L=(a("f3e4"),Object(c["a"])(F,A,B,!1,null,"0ad0f29c",null)),R=L.exports,I={name:"Home",components:{Intro:R}},W=I,N=(a("727c"),Object(c["a"])(W,E,$,!1,null,"d16447b4",null)),Z=N.exports,J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"intro-bg"},[r("div",{staticClass:"intro"},[r("intro-ru"),r("img",{staticClass:"img-fluid",attrs:{src:a("b580"),alt:"Pitch Match Mockup"}})],1)])},Y=[],G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Pitch-Match")]),r("p",[t._v("Футбол доступен для всех, в любое время!")]),r("div",{staticClass:"row"},[r("div",{staticClass:"c"},[r("a",{attrs:{href:"https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&path=appstore"}},[r("img",{attrs:{alt:"App Store Badge",src:a("2b04"),width:"200",height:"auto"}})])]),r("div",{staticClass:"c"},[r("a",{attrs:{href:"https://play.google.com/store/apps?hl=en"}},[r("img",{attrs:{alt:"App Store Badge",src:a("be22"),width:"200",height:"auto"}})])])])])}],D={name:"IntroRu"},X=D,q=(a("62d4"),Object(c["a"])(X,G,H,!1,null,"40609a8c",null)),z=q.exports,K={name:"Home",components:{IntroRu:z}},Q=K,U=(a("496c"),Object(c["a"])(Q,J,Y,!1,null,"407b5f08",null)),tt=U.exports,et=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"content has-text-centered"},[r("h1",[t._v(" Download Pitch-Match Now ")]),r("p",[t._v(" Available for all iOS and Android devices ")]),r("p",[r("a",{staticClass:"badge",attrs:{href:"https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&path=appstore"}},[r("img",{attrs:{alt:"App Store Badge",src:a("2b04"),width:"150",height:"auto"}})]),r("a",{attrs:{href:"https://play.google.com/store/apps?hl=en"}},[r("img",{attrs:{alt:"App Store Badge",src:a("be22"),width:"150",height:"auto"}})])]),r("h4",[t._v(" 2020 Pitch-Match ⚽All rights reserved ")])])])}],rt={},nt=rt,ot=(a("8028"),Object(c["a"])(nt,et,at,!1,null,"26763ccd",null)),st=ot.exports,it=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("div",{staticClass:"content has-text-centered"},[r("h1",[t._v(" Скачай Pitch-Match сейчас ")]),r("p",[t._v(" Приложение доступно на всех iOS и Android устройствах ")]),r("p",[r("a",{staticClass:"badge",attrs:{href:"https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&path=appstore"}},[r("img",{attrs:{alt:"App Store Badge",src:a("2b04"),width:"150",height:"auto"}})]),r("a",{attrs:{href:"https://play.google.com/store/apps?hl=en"}},[r("img",{attrs:{alt:"App Store Badge",src:a("be22"),width:"150",height:"auto"}})])]),r("h4",[t._v(" 2020 Pitch-Match ⚽All rights reserved ")])])])}],lt={},ut=lt,pt=(a("43e1"),Object(c["a"])(ut,it,ct,!1,null,"293ec08a",null)),ft=pt.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("section",{staticClass:"features-bg"},[a("div",{staticClass:"features"},[a("v-row",{attrs:{justify:"space-around"}},[a("v-chip-group",{attrs:{multiple:"","active-class":"white",dark:""}},t._l(t.tags,(function(e){return a("v-chip",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)]),a("section",{staticClass:"bg-container"},[a("div",[a("features-text")],1)])])},vt=[],dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.alignments,(function(e){return r("v-container",{key:e},[r("v-row",{staticClass:"header"},[r("h1",[t._v(" Features ")])]),r("v-row",{staticClass:"p"},[r("p",[t._v(" Pitch-Match is a user friendly app and is very easy to use. We made sure you fully enjoy your experience, from meeting with people up to playing soccer! ")])]),r("v-row",{staticClass:"pt"},[r("v-col",[r("img",{attrs:{src:a("6369"),alt:"download icon",height:"50",width:"50"}}),r("h3",[t._v("Free download")]),r("p",[t._v("You can freely download the app and use it right away")]),r("img",{attrs:{src:a("3cbd"),alt:"soccer icon",height:"50",width:"50"}}),r("h3",[t._v("Play soccer")]),r("p",[t._v("You can discover all soccer fields within your city and join real life soccer games")])]),r("v-col",[r("div",{staticClass:"img-fluid"},[r("mockup")],1)]),r("v-col",[r("img",{attrs:{src:a("b855"),alt:"profile icon",height:"40",width:"40"}}),r("h3",[t._v("Player profile")]),r("p",[t._v("Create a profile, receive ratings from other players and meet new people in your area")]),r("img",{attrs:{src:a("6e1a"),alt:"free download",height:"50",width:"50"}}),r("h3",[t._v("Create games")]),r("p",[t._v("Book a soccer filed nearby, create a game event and invite people to your game")])])],1)],1)})),1)},gt=[],mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{staticClass:"img-fluid",attrs:{src:a("1917"),alt:"Pitch Match Mockup"}})},bt=[],_t={name:"Mockup"},wt=_t,yt=(a("c07b"),Object(c["a"])(wt,mt,bt,!1,null,"0f320e0d",null)),Ct=yt.exports,xt={name:"FeaturesText",components:{Mockup:Ct},data:function(){return{alignments:["center"]}}},kt=xt,Ot=(a("91c6"),a("62ad")),jt=a("a523"),Mt=a("0fd9"),St=Object(c["a"])(kt,dt,gt,!1,null,"2212a3aa",null),Pt=St.exports;u()(St,{VCol:Ot["a"],VContainer:jt["a"],VRow:Mt["a"]});var Vt={name:"Features",components:{FeaturesText:Pt},data:function(){return{tags:["Play soccer","Create games","Join games","Book fields nearby","News Feed","Profile","Leave feedback"]}}},Et=Vt,$t=(a("286a"),a("cc20")),At=a("ef9a"),Bt=Object(c["a"])(Et,ht,vt,!1,null,"61747d0a",null),Tt=Bt.exports;u()(Bt,{VChip:$t["a"],VChipGroup:At["a"],VRow:Mt["a"]});var Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("section",{staticClass:"features-bg"},[a("div",{staticClass:"features"},[a("v-row",{attrs:{justify:"space-around"}},[a("v-chip-group",{attrs:{multiple:"","active-class":"white",dark:""}},t._l(t.tags,(function(e){return a("v-chip",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)]),a("section",{staticClass:"bg-container"},[a("div",[a("features-text-ru")],1)])])},Lt=[],Rt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.alignments,(function(e){return r("v-container",{key:e},[r("v-row",{staticClass:"header"},[r("h1",[t._v(" Описание ")])]),r("v-row",{staticClass:"p"},[r("p",[t._v(" Pitch-Match - это новое приложение, удобноe и очень простоe в использовании. Получайте удовольствие от встречи с новыми людьми и игры в футбол! ")])]),r("v-row",{staticClass:"pt"},[r("v-col",[r("img",{attrs:{src:a("6369"),alt:"download icon",height:"50",width:"50"}}),r("h3",[t._v("Бесплатная загрузка")]),r("p",[t._v("Скачайте приложение совершенно бесплатно и сразу же его используйте")]),r("img",{attrs:{src:a("3cbd"),alt:"soccer icon",height:"50",width:"50"}}),r("h3",[t._v("Играйте в футбол")]),r("p",[t._v("Открывайте для себя все футбольные поля в городе и присоединяйтесь к реальным футбольным играм")])]),r("v-col",[r("div",{staticClass:"img-fluid"},[r("mockup")],1)]),r("v-col",[r("img",{attrs:{src:a("b855"),alt:"profile icon",height:"40",width:"40"}}),r("h3",[t._v("Профиль игрока")]),r("p",[t._v("Получайте оценки от других игроков и знакомьтесь с новыми людьми")]),r("img",{attrs:{src:a("6e1a"),alt:"free download",height:"50",width:"50"}}),r("h3",[t._v("Создай свою игру")]),r("p",[t._v("Забронируй близжайшее поле, создай свое футбольное событие и пригласи людей в свою игру")])])],1)],1)})),1)},It=[],Wt={name:"FeaturesText",components:{Mockup:Ct},data:function(){return{alignments:["center"]}}},Nt=Wt,Zt=(a("9329"),Object(c["a"])(Nt,Rt,It,!1,null,"59c65066",null)),Jt=Zt.exports;u()(Zt,{VCol:Ot["a"],VContainer:jt["a"],VRow:Mt["a"]});var Yt={name:"FeaturesRu",components:{Mockup:Ct,FeaturesTextRu:Jt},data:function(){return{tags:["Играй в футбол","Создавай игры","Присоединяйся к играм","Бронируй поле поблизости","Лента событий","Профиль","Оценивай игру"]}}},Gt=Yt,Ht=(a("020f"),Object(c["a"])(Gt,Ft,Lt,!1,null,"1c456150",null)),Dt=Ht.exports;u()(Ht,{VChip:$t["a"],VChipGroup:At["a"],VRow:Mt["a"]});var Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"bg"},[a("container",{staticClass:"container"},[a("h1",[t._v("404")]),a("h2",[t._v("Oops...⚽")]),a("p",[t._v("Try going to the "),a("router-link",{attrs:{to:"/ru"}},[t._v("home")]),t._v(" page.")],1),a("v-btn-toggle")],1)],1)},qt=[],zt={},Kt=zt,Qt=(a("7bdb"),Object(c["a"])(Kt,Xt,qt,!1,null,"bad8c5b0",null)),Ut=Qt.exports;u()(Qt,{VBtnToggle:C["a"]}),r["a"].use(d["a"]);var te=[{path:"/",redirect:"/ru",components:{navbar:V,homeru:tt,featuresru:Dt,footer:ft}},{path:"/en",components:{navbar:V,home:Z,features:Tt,footer:st}},{path:"/ru",components:{navbar:V,homeru:tt,featuresru:Dt,footer:ft}},{path:"/*",component:Ut}],ee=new d["a"]({mode:"history",linkExactActiveClass:"active",routes:te}),ae=ee,re=a("2f62");r["a"].use(re["a"]);var ne=new re["a"].Store({state:{},mutations:{},actions:{},modules:{}}),oe=(a("eb46"),a("7e7d"),a("f309"));r["a"].use(oe["a"]);var se=new oe["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:ae,store:ne,vuetify:se,render:function(t){return t(v)}}).$mount("#app")},"5d89":function(t,e,a){},"62d4":function(t,e,a){"use strict";var r=a("9ba5"),n=a.n(r);n.a},6369:function(t,e,a){t.exports=a.p+"img/download.f4e5ad94.svg"},"6e1a":function(t,e,a){t.exports=a.p+"img/hearts.74674afd.svg"},"727c":function(t,e,a){"use strict";var r=a("d4c0"),n=a.n(r);n.a},"7bdb":function(t,e,a){"use strict";var r=a("3e74"),n=a.n(r);n.a},"7e7d":function(t,e,a){},8028:function(t,e,a){"use strict";var r=a("0bea"),n=a.n(r);n.a},8092:function(t,e,a){t.exports=a.p+"img/logo-pitch-match.44844c05.png"},"91c6":function(t,e,a){"use strict";var r=a("a8b2"),n=a.n(r);n.a},9329:function(t,e,a){"use strict";var r=a("abe7"),n=a.n(r);n.a},"9ba5":function(t,e,a){},"9fea":function(t,e,a){},a1d4:function(t,e,a){},a8b2:function(t,e,a){},abe7:function(t,e,a){},b580:function(t,e,a){t.exports=a.p+"img/mocukup.e22a8185.png"},b855:function(t,e,a){t.exports=a.p+"img/profile.6eaccd6a.svg"},be22:function(t,e,a){t.exports=a.p+"img/google-play-badge.cbc54da3.png"},c07b:function(t,e,a){"use strict";var r=a("5d89"),n=a.n(r);n.a},d4c0:function(t,e,a){},f3e4:function(t,e,a){"use strict";var r=a("0686"),n=a.n(r);n.a}});
//# sourceMappingURL=app.197e9ed1.js.map