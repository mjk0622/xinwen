(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-xgpassword"],{"07c0":function(t,n,e){"use strict";var o=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("5530")),s=e("08e6"),u=e("26cb"),i={data:function(){return{password:"",newpassword:""}},computed:(0,a.default)({},(0,u.mapState)(["uid"])),methods:{xymm:function(){var t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;t.test(this.password)||(uni.showToast({icon:"none",title:"请输入6-12位密码"}),this.newpassword="")},btn:function(){(0,s.xgmima)({oldPassword:this.password,newPassword:this.newpassword,uid:this.uid}).then((function(t){console.log(t),0==t.data.code?(uni.showToast({icon:"none",title:t.data.msg}),setTimeout((function(){uni.clearStorage(),uni.switchTab({url:"/pages/my/my"}),uni.setStorageSync("suo",!0)}),500)):uni.showToast({icon:"none",title:t.data.msg})}))}}};n.default=i},"3cca":function(t,n,e){"use strict";e.r(n);var o=e("07c0"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,(function(){return o[t]}))}(s);n["default"]=a.a},"52b2":function(t,n,e){"use strict";e.r(n);var o=e("b315"),a=e("3cca");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("e295");var u,i=e("f0c5"),r=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,"5d34f90a",null,!1,o["a"],u);n["default"]=r.exports},b315:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return o}));var o={"u-Input":e("8958").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"forget"},[e("v-uni-view",{staticClass:"input"},[e("v-uni-view",{},[e("u--input",{attrs:{placeholder:"请输入老密码",border:"surround",customStyle:"padding:20upx",prefixIcon:"phone"},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),e("u--input",{attrs:{placeholder:"请设置新密码(6-12位)",border:"surround",customStyle:"padding:20upx",prefixIcon:"lock"},on:{blur:function(n){arguments[0]=n=t.$handleEvent(n),t.xymm.apply(void 0,arguments)}},model:{value:t.newpassword,callback:function(n){t.newpassword=n},expression:"newpassword"}})],1),e("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.btn.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)},s=[]},b782:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,".forget[data-v-5d34f90a]{width:100%;height:100vh;position:relative}.input .btn[data-v-5d34f90a]{margin-top:2vh;color:#fff;background-color:#07c160}",""]),t.exports=n},c1e8:function(t,n,e){var o=e("b782");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e("4f06").default;a("74115e09",o,!0,{sourceMap:!1,shadowMode:!1})},e295:function(t,n,e){"use strict";var o=e("c1e8"),a=e.n(o);a.a}}]);