(function(e){function n(n){for(var o,c,s=n[0],a=n[1],u=n[2],f=0,p=[];f<s.length;f++)c=s[f],r[c]&&p.push(r[c][0]),r[c]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,s=1;s<t.length;s++){var a=t[s];0!==r[a]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i=[];function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=a;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},2856:function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var o,r,i=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t("br"),t("button",{staticClass:"btn btn-outline-primary",on:{click:e.microsoftGo}},[e._v(e._s(e.message))]),t("vue-snotify"),e._l(e.response,function(n,o){return t("div",{key:o},[t("label",[t("input",{attrs:{type:"checkbox"}}),e._v(" "+e._s(n))])])})],2)},s=[],a={name:"importContacts",data:function(){return{clientId:"837fe74f-e66b-441f-8728-088de9fc6670",token:void 0,response:[]}},mounted:function(){},methods:{microsoftGo:function(){var e=this,n="Contacts.Read";hello.init({windows:this.clientId},{redirect_uri:"http://localhost:8080",scope:n}),hello("windows").login({scope:n}).then(function(n){e.$snotify.success("","👨‍💻")}).finally(function(){setTimeout(function(){e.token=JSON.parse(localStorage.getItem("windows")).access_token,e.runMicrosoft()},500)})},runMicrosoft:function(){var e=this;fetch("https://graph.microsoft.com/beta/me/contacts?$select=emailaddresses",{headers:{Authorization:"Bearer ".concat(this.token)}}).then(function(e){return e.json()}).then(function(n){n.value.map(function(n){e.response.push(n.emailAddresses[0].address)})}).catch(function(){})}}},u=a,l=t("2877"),f=Object(l["a"])(u,o,r,!1,null,null,null);f.options.__file="importContacts.vue";var p=f.exports,d={name:"app",mixins:[p],data:function(){return{message:"Microsoft =D"}},components:{importContacts:p}},h=d,v=(t("5c0b"),Object(l["a"])(h,c,s,!1,null,null,null));v.options.__file="App.vue";var b=v.exports,m=t("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var g=t("f213");t("26e8");i["a"].config.productionTip=!1,i["a"].use(g["a"]),new i["a"]({render:function(e){return e(b)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";var o=t("2856"),r=t.n(o);r.a}});
//# sourceMappingURL=app.ace6f53a.js.map