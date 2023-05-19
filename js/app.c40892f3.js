(function(){"use strict";var e={3523:function(e,t,n){var r=n(9242),o=n(3396);function a(e,t,n,r,a,i){const u=(0,o.up)("HeaderSection"),s=(0,o.up)("router-view"),c=(0,o.up)("FooterSection");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o.Wm)(s),(0,o.Wm)(c)],64)}const i={class:"header"},u={class:"header__content"};function s(e,t,n,a,s,c){const l=(0,o.up)("Logo"),d=(0,o.up)("router-link"),m=(0,o.up)("UserBlock"),f=(0,o.up)("AuthBlok"),p=(0,o.up)("UserMenu"),h=(0,o.up)("Container");return(0,o.wg)(),(0,o.iD)("header",i,[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o.Wm)(d,{to:{name:"homepage"}},{default:(0,o.w5)((()=>[(0,o.Wm)(l)])),_:1}),(0,o._)("nav",{class:"header__navigation",onMouseover:t[0]||(t[0]=(...t)=>e.openMenu&&e.openMenu(...t)),onMouseleave:t[1]||(t[1]=(...t)=>e.closeMenu&&e.closeMenu(...t))},[e.isAuth?((0,o.wg)(),(0,o.j4)(m,{key:0,onClick:e.toggleHideMenu},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(f,{key:1})),(0,o.wy)((0,o.Wm)(p,{close:e.closeMenu,onLogout:e.signOut},null,8,["close","onLogout"]),[[r.F8,!e.isHiddenMenu]])],32)])])),_:1})])}n(7658);var c=n(8202),l=n.p+"img/logo.470d6e91.svg";const d={src:l};function m(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("img",d)}var f=(0,o.aZ)({name:"LogoApp"}),p=n(89);const h=(0,p.Z)(f,[["render",m]]);var g=h;const v=e=>((0,o.dD)("data-v-7e23ff49"),e=e(),(0,o.Cn)(),e),b={class:"authBlok"},w=v((()=>(0,o._)("span",{class:"divider"}," / ",-1)));function y(e,t,n,r,a,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o.Wm)(u,{to:{name:"login"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Вхід ")])),_:1}),w,(0,o.Wm)(u,{to:{name:"registration"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" Реестрація ")])),_:1})])}var _=(0,o.aZ)({name:"authBlok"});const k=(0,p.Z)(_,[["render",y],["__scopeId","data-v-7e23ff49"]]);var A=k;const M=e=>((0,o.dD)("data-v-085b55b2"),e=e(),(0,o.Cn)(),e),C={class:"menu"},Z=M((()=>(0,o._)("span",null,"menu",-1))),I=M((()=>(0,o._)("svg",{class:"menu__image",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{d:"M9 0C6.38286 0 4.25391 2.12896 4.25391 4.74609C4.25391 7.36323 6.38286 9.49219 9 9.49219C11.6171 9.49219 13.7461 7.36323 13.7461 4.74609C13.7461 2.12896 11.6171 0 9 0Z"}),(0,o._)("path",{d:"M16.8216 14.0161C15.4028 11.8877 13.0282 10.6172 10.4708 10.6172H7.5292C4.9718 10.6172 2.5972 11.8877 1.17844 14.0161L1.08984 14.1489V18H16.9102H16.9102V14.1489L16.8216 14.0161Z"})],-1))),S=[Z,I];function U(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("button",C,S)}var O=(0,o.aZ)({name:"UserBlock"});const j=(0,p.Z)(O,[["render",U],["__scopeId","data-v-085b55b2"]]);var H=j;const D={class:"menu"},N={class:"menu__item"},E={class:"menu__item-button"};function P(e,t,n,r,a,i){const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("ul",D,[(0,o._)("li",N,[(0,o.Wm)(u,{to:{name:"orders"}},{default:(0,o.w5)((()=>[(0,o.Uk)(" My orders ")])),_:1})]),(0,o._)("li",E,[(0,o.Wm)(u,{to:{name:"orders"}},{default:(0,o.w5)((()=>[(0,o._)("button",{class:"button",onClick:t[0]||(t[0]=t=>e.$emit("logout"))},"Exit")])),_:1})])])}var B=(0,o.aZ)({name:"UserMenu"});const T=(0,p.Z)(B,[["render",P],["__scopeId","data-v-6b7ea462"]]);var L=T,W=n(65),x=(0,o.aZ)({name:"HeaderSection",components:{Container:c.Z,Logo:g,AuthBlok:A,UserBlock:H,UserMenu:L},data(){return{isHiddenMenu:!0}},methods:{...(0,W.nv)("auth",["logout"]),openMenu(){this.isAuth&&(this.isHiddenMenu=!1)},closeMenu(){this.isHiddenMenu=!0},toggleHideMenu(){this.isHiddenMenu=!this.isHiddenMenu},async signOut(){try{await this.logout(),this.closeMenu(),this.$router.push({name:"login"})}catch(e){console.log("error: ",e)}}},computed:{...(0,W.Se)("auth",["isAuth"])}});const F=(0,p.Z)(x,[["render",s],["__scopeId","data-v-3e03509a"]]);var q=F;const $={class:"footer"};function z(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("footer",$)}var K=(0,o.aZ)({name:"FooterSection"});const V=(0,p.Z)(K,[["render",z],["__scopeId","data-v-18dfc661"]]);var X=V,J=(0,o.aZ)({components:{HeaderSection:q,FooterSection:X}});const Y=(0,p.Z)(J,[["render",a]]);var G=Y,Q=n(2483),R=n(5103),ee=n(4479),te=n(5677),ne=n(4287),re={async registrationUser({email:e,password:t,name:n}){try{await(0,te.Xb)(ee.I,e,t);const r=ee.I.currentUser;null!==r&&(await(0,te.ck)(r,{displayName:n}),await(0,ne.pl)((0,ne.JU)(ee.db,"users",r.uid),{reserved:[]}));const o=ee.I.currentUser;if(o){const e={userName:o.displayName,email:o.email,uid:o.uid};return e}return null}catch(r){console.log("error: ",r)}},async loginUser({email:e,password:t}){try{const{user:n}=await(0,te.e5)(ee.I,e,t),r={userName:n.displayName,email:n.email,uid:n.uid};return r}catch(n){console.log("error: ",n)}},async logout(){try{await(0,te.w7)(ee.I)}catch(e){console.log("error: ",e)}}};const oe={user:{userName:null,email:null,uid:null},isAuth:!1},ae={namespaced:!0,state:{...oe},getters:{isAuth(e){return!!e.user.uid},user(e){return e.user}},mutations:{setUser(e,t){e.user=t},setIsAuth(e,t){e.isAuth=t},setInitialState(e){e.isAuth=oe.isAuth,e.user=oe.user}},actions:{async registration({commit:e},t){const n=await re.registrationUser(t);e("setUser",n),e("setIsAuth",!0)},async login({commit:e},t){const n=await re.loginUser(t);e("setUser",n),e("setIsAuth",!0)},async logout({commit:e}){await re.logout(),e("setInitialState")}}};var ie=ae;const ue=(0,W.MT)({modules:{auth:ie},plugins:[new R.ZP({storage:window.localStorage}).plugin]}),se=()=>Promise.all([n.e(941),n.e(917)]).then(n.bind(n,7548)),ce=()=>Promise.all([n.e(941),n.e(70)]).then(n.bind(n,6056)),le=()=>Promise.all([n.e(869),n.e(149)]).then(n.bind(n,1562)),de=()=>Promise.all([n.e(869),n.e(24)]).then(n.bind(n,481)),me=()=>n.e(994).then(n.bind(n,9994)),fe=()=>n.e(311).then(n.bind(n,7311)),pe=[{path:"/",component:ce,name:"homepage"},{path:"/apartment/:id",component:se,name:"apartment",meta:{requiresAuth:!0}},{path:"/login",component:de,name:"login",meta:{hideToAuth:!0}},{path:"/registration",component:le,name:"registration",meta:{hideToAuth:!0}},{path:"/orders",component:fe,name:"orders",meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",component:me,name:"error-page"}],he=(0,Q.p7)({history:(0,Q.PO)("/vue-ts-apartment-search/"),routes:pe});he.beforeEach(((e,t,n)=>{const r=ue.getters["auth/isAuth"];e.matched.some((e=>e.meta.requiresAuth))&&(r||n({name:"login"})),e.matched.some((e=>e.meta.hideToAuth))&&r&&n({name:"homepage"}),n()}));var ge=he;(0,r.ri)(G).use(ue).use(ge).mount("#app")},4479:function(e,t,n){n.d(t,{I:function(){return s},db:function(){return c}});var r=n(7795),o=n(5677),a=n(4287);const i={apiKey:"AIzaSyDeziyP0cFxZgpn2ZeyEpjjjOk-XFikxDo",authDomain:"vue-ts-search-apartment.firebaseapp.com",projectId:"vue-ts-search-apartment",storageBucket:"vue-ts-search-apartment.appspot.com",messagingSenderId:"804895901781",appId:"1:804895901781:web:1be7c9834bb0ef83cbecdc"},u=(0,r.ZF)(i),s=(0,o.v0)(u),c=(0,a.ad)(u)},8202:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(3396);const o={class:"container"};function a(e,t,n,a,i,u){return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])}var i=(0,r.aZ)({name:"container-block",setup(){return{}}}),u=n(89);const s=(0,u.Z)(i,[["render",a],["__scopeId","data-v-535fc9cf"]]);var c=s}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{24:"cf9009fa",70:"7b8b475c",149:"18a6a182",311:"7572c4d1",869:"bb2117da",917:"ea7e276f",941:"4eb1800d",994:"9cf7497b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{24:"fe5efc67",70:"cc1049a7",149:"c19ab726",311:"55499993",917:"cb25aa7a",994:"2553d3ac"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-ts-learn:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=r),e[r]=[o];var m=function(t,n){u.onerror=u.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-ts-apartment-search/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(t(i,u))return o();e(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={24:1,70:1,149:1,311:1,917:1,994:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunkvue_ts_learn"]=self["webpackChunkvue_ts_learn"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3523)}));r=n.O(r)})();
//# sourceMappingURL=app.c40892f3.js.map