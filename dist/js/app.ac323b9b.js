(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],u=0,h=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"56f466b5"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,n[1](c)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3ccd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}}),n("v-main",[t.AppStatus?n("v-alert",{attrs:{dense:"",text:"",type:"success"}},[t._v(" App State: "+t._s(t.AppState)+" ")]):n("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[t._v(" Something went wrong ")]),n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"5"}},[n("AppTitleInput")],1),n("v-col",{attrs:{cols:"5"}},[n("AppSubmitMessageInput")],1)],1),n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"5"}},[n("AppCompanyInput")],1),n("v-col",{attrs:{cols:"5"}},[n("AppAboutInput")],1)],1)],1)],1)],1)},o=[],s=(n("99af"),n("d4ec")),i=n("bee2"),l="http://18.194.254.254",c=function(){function t(e){Object(s["a"])(this,t),this.http=e,this.host=l,this.namespace="raketech-form-test/v1",this.UrlList={AppHealth:"".concat(this.host,"/wp-json/").concat(this.namespace,"/health/status")}}return Object(i["a"])(t,[{key:"GetAppHealth",value:function(){return this.http.get(this.UrlList.AppHealth).then((function(t){return t.data}))}}]),t}(),u={Success:"Success",Error:"Error"},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"10"}},[n("v-text-field",{attrs:{label:"Form Title"},model:{value:t.FormTitle,callback:function(e){t.FormTitle=e},expression:"FormTitle"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.CallSetFormTitle()}}},[t._v(" Save ")])],1)],1),n("v-overlay",{attrs:{absolute:"",value:t.overlay}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)],1)},h=[],m=function(){function t(e){Object(s["a"])(this,t),this.host=l,this.http=e,this.namespace="raketech-form-test/v1",this.UrlList={SetFormTitle:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/title"),GetFormTitle:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/title/get"),SetCompanyDetails:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/company-details"),GetCompanyDetails:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/company-details/get"),SetAbout:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/about"),GetAbout:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/about/get"),SetSubmitMessage:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/submit-message"),GetSubmitMessage:"".concat(this.host,"/wp-json/").concat(this.namespace,"/form/submit-message/get")}}return Object(i["a"])(t,[{key:"SetSubmitMessage",value:function(t){return this.http.post(this.UrlList.SetSubmitMessage,{message:t}).then((function(t){return t.data}))}},{key:"GetSubmitMessage",value:function(){return this.http.get(this.UrlList.GetSubmitMessage).then((function(t){return t.data}))}},{key:"SetAbout",value:function(t){return this.http.post(this.UrlList.SetAbout,{about:t}).then((function(t){return t.data}))}},{key:"GetAbout",value:function(){return this.http.get(this.UrlList.GetAbout).then((function(t){return t.data}))}},{key:"SetCompanyDetails",value:function(t){return this.http.post(this.UrlList.SetCompanyDetails,{CompanyDetails:t}).then((function(t){return t.data}))}},{key:"GetCompanyDetails",value:function(){return this.http.get(this.UrlList.GetCompanyDetails).then((function(t){return t.data}))}},{key:"SetFormTitle",value:function(t){return this.http.post(this.UrlList.SetFormTitle,{title:t}).then((function(t){return t.data}))}},{key:"GetFormTitle",value:function(){return this.http.get(this.UrlList.GetFormTitle).then((function(t){return t.data}))}}]),t}(),v=(n("3ccd"),{name:"App-Title-Input",data:function(){return{FormTitle:"",FormHttpService:m,disabled:!1,overlay:!1}},beforeMount:function(){var t=this;this.FormHttpService=new m(this.$http),this.FormHttpService.GetFormTitle().then((function(e){t.FormTitle=e.title}))},computed:{isDisabled:function(){return this.FormTitle.length<=1}},methods:{CallSetFormTitle:function(){var t=this;this.overlay=!0,this.FormHttpService.SetFormTitle(this.FormTitle).then((function(e){t.overlay=!1,console.log(e)}))}}}),f=v,b=n("2877"),d=n("6544"),y=n.n(d),S=n("8336"),g=n("62ad"),C=n("a523"),A=n("a797"),w=n("490a"),V=n("0fd9"),F=n("8654"),x=Object(b["a"])(f,p,h,!1,null,null,null),M=x.exports;y()(x,{VBtn:S["a"],VCol:g["a"],VContainer:C["a"],VOverlay:A["a"],VProgressCircular:w["a"],VRow:V["a"],VTextField:F["a"]});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"10"}},[n("v-textarea",{attrs:{label:"Company Details"},model:{value:t.CompanyDetails,callback:function(e){t.CompanyDetails=e},expression:"CompanyDetails"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.CallSetCompanyDetails()}}},[t._v(" Save ")])],1)],1),n("v-overlay",{attrs:{absolute:"",value:t.overlay}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)],1)},T=[],_=(n("61c3"),{name:"App-Company-Input",data:function(){return{FormHttpService:m,overlay:!1,CompanyDetails:""}},beforeMount:function(){var t=this;this.FormHttpService=new m(this.$http),this.FormHttpService.GetCompanyDetails().then((function(e){t.CompanyDetails=e.details}))},computed:{isDisabled:function(){return this.CompanyDetails.length<=1}},methods:{CallSetCompanyDetails:function(){var t=this;this.overlay=!0,this.FormHttpService.SetCompanyDetails(this.CompanyDetails).then((function(e){console.log(e),t.overlay=!1}))}}}),O=_,H=n("a844"),D=Object(b["a"])(O,j,T,!1,null,null,null),k=D.exports;y()(D,{VBtn:S["a"],VCol:g["a"],VContainer:C["a"],VOverlay:A["a"],VProgressCircular:w["a"],VRow:V["a"],VTextarea:H["a"]});var G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"10"}},[n("v-textarea",{attrs:{label:"About Us"},model:{value:t.AboutContent,callback:function(e){t.AboutContent=e},expression:"AboutContent"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.CallSetAbout()}}},[t._v(" Save ")])],1)],1),n("v-overlay",{attrs:{absolute:"",value:t.overlay}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)],1)},P=[],$=(n("bf43"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-overlay",{attrs:{absolute:"",value:t.overlay}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)}),E=[],L={name:"AppOverlay",props:{overlay:!1},data:function(){return{}}},I=L,U=Object(b["a"])(I,$,E,!1,null,null,null),z=U.exports;y()(U,{VOverlay:A["a"],VProgressCircular:w["a"]});var B={name:"App-About-Input",components:{AppOverlay:z},data:function(){return{FormHttpService:m,overlay:null,AboutContent:""}},computed:{isDisabled:function(){return this.AboutContent.length<=1}},beforeMount:function(){var t=this;this.FormHttpService=new m(this.$http),this.FormHttpService.GetAbout().then((function(e){t.AboutContent=e.about}))},methods:{CallSetAbout:function(){var t=this;this.overlay=!0,this.FormHttpService.SetAbout(this.AboutContent).then((function(e){console.log(e),t.overlay=!1}))}}},R=B,J=Object(b["a"])(R,G,P,!1,null,null,null),q=J.exports;y()(J,{VBtn:S["a"],VCol:g["a"],VContainer:C["a"],VOverlay:A["a"],VProgressCircular:w["a"],VRow:V["a"],VTextarea:H["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"10"}},[n("v-text-field",{attrs:{label:"Submit Message"},model:{value:t.SubmitMessage,callback:function(e){t.SubmitMessage=e},expression:"SubmitMessage"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{disabled:t.isDisabled},on:{click:function(e){return t.CallSetSubmitMessage()}}},[t._v(" Save ")])],1)],1),n("v-overlay",{attrs:{absolute:"",value:t.overlay}},[n("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}})],1)],1)},N=[],Q=(n("62f1"),{name:"App-Submit-Message-Input",data:function(){return{FormHttpService:m,disabled:!0,SubmitMessage:"",overlay:!1}},computed:{isDisabled:function(){return this.SubmitMessage.length<=1}},beforeMount:function(){var t=this;this.FormHttpService=new m(this.$http),this.FormHttpService.GetSubmitMessage().then((function(e){return t.SubmitMessage=e.submitMessage}))},methods:{CallSetSubmitMessage:function(){var t=this;this.overlay=!0,this.FormHttpService.SetSubmitMessage(this.SubmitMessage).then((function(e){console.log(e),t.overlay=!1}))}}}),W=Q,X=Object(b["a"])(W,K,N,!1,null,null,null),Y=X.exports;y()(X,{VBtn:S["a"],VCol:g["a"],VContainer:C["a"],VOverlay:A["a"],VProgressCircular:w["a"],VRow:V["a"],VTextField:F["a"]});var Z={name:"App",components:{AppSubmitMessageInput:Y,AppAboutInput:q,AppCompanyInput:k,AppTitleInput:M},data:function(){return{AppState:null,AppStatus:null,overlay:!1,HealthHttpService:c}},beforeMount:function(){var t=this;this.HealthHttpService=new c(this.$http),this.HealthHttpService.GetAppHealth().then((function(e){t.AppStatus=!!e,t.AppState=u.Success})).catch((function(t){return console.log(t)}))},methods:{}},tt=Z,et=n("0798"),nt=n("7496"),at=n("40dc"),rt=n("f6c4"),ot=Object(b["a"])(tt,r,o,!1,null,null,null),st=ot.exports;y()(ot,{VAlert:et["a"],VApp:nt["a"],VAppBar:at["a"],VCol:g["a"],VContainer:C["a"],VMain:rt["a"],VRow:V["a"]});n("d3b7");var it=n("8c4f"),lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],ut={name:"Home"},pt=ut,ht=Object(b["a"])(pt,lt,ct,!1,null,null,null),mt=ht.exports;a["a"].use(it["a"]);var vt=[{path:"/",name:"Home",component:mt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],ft=new it["a"]({routes:vt}),bt=ft,dt=n("2f62");a["a"].use(dt["a"]);var yt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),St=n("f309");a["a"].use(St["a"]);var gt=new St["a"]({}),Ct=n("bc3a"),At=n.n(Ct),wt=n("a7fe"),Vt=n.n(wt);a["a"].use(Vt.a,At.a),a["a"].config.productionTip=!1,new a["a"]({router:bt,store:yt,vuetify:gt,render:function(t){return t(st)}}).$mount("#app")},"61c3":function(t,e,n){},"62f1":function(t,e,n){},bf43:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ac323b9b.js.map