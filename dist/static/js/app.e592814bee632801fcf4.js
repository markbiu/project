webpackJsonp([1],{"4IhO":function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("kV13"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:"/"}},[this._v("index")]),this._v(" "),n("router-link",{attrs:{to:"/cale"}},[this._v("cale")]),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var c=e("C7Lr")({name:"App"},r,!1,function(t){e("4IhO")},null,null).exports,s=e("7LQH"),i=e("lC5x"),u=e.n(i),a=e("J0Oq"),l=e.n(a),f=e("4YfN"),_=e.n(f),m=e("48sp"),v={methods:_()({add:function(t){this.$store.commit("increment",t)}},Object(m.b)(["setOnline","readUsers"]),Object(m.b)({fn:"f1"})),created:function(){var t=this;return l()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.$store.commit("setA",5),console.log(99),console.log(t.$store.state.a),console.log(t.$store.state.mod_a.a);case 4:case"end":return n.stop()}},n,t)}))()},computed:_()({},Object(m.d)(["a","b"]),Object(m.c)(["getCount","setOnlines"]),Object(m.d)({mod_a:function(t){return t.mod_a.num}}))},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index"},[e("p",[t._v("a:"+t._s(t.a))]),t._v(" "),t._v("\n  mod_a:"+t._s(t.mod_a)+"\n  "),e("p",[t._v(t._s(t.getCount))]),t._v(" "),e("p",[t._v("count: "+t._s(t.$store.getters.getCount))]),t._v(" "),e("ul",t._l(t.setOnlines,function(n,o){return e("li",{key:o},[t._v("\n      姓名："+t._s(n.name)+" 年龄："+t._s(n.age)+"\n    ")])}),0),t._v(" "),e("button",{on:{click:function(n){return t.setOnline(2)}}},[t._v("召唤biubiu")]),t._v(" "),e("button",{on:{click:function(n){t.count+=5}}},[t._v("count")]),t._v(" "),e("button",{on:{click:function(n){return t.fn(1)}}},[t._v("+1")]),t._v(" "),e("button",{on:{click:function(n){return t.fn(20)}}},[t._v("actions")]),t._v(" "),e("button",[t._v("getters")])])},staticRenderFns:[]};var p=e("C7Lr")(v,d,!1,function(t){e("P2FE")},null,null).exports,h={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v("\n  "+t._s(t.$store.state.count)),e("br"),t._v(" "),e("button",{on:{click:function(n){return t.reduce(10)}}},[t._v("-1")]),t._v(" "),e("button",{on:{click:function(n){return t.f2(20)}}},[t._v("actions")])])},staticRenderFns:[]},b=e("C7Lr")({methods:{reduce:function(t){this.$store.commit("reduce",t)},f2:function(t){this.$store.dispatch("f2",t)}}},h,!1,null,null,null).exports;o.a.use(s.a);var O=new s.a({routes:[{path:"/",name:"index",component:p},{path:"/cale",name:"cale",component:b}]});o.a.use(m.a);var g=new m.a.Store({strict:!0,state:{count:0,a:12,b:5,userline:[]},mutations:{increment:function(t,n){t.count+=n},reduce:function(t,n){t.count-=n},setA:function(t,n){t.a=n},setB:function(t,n){t.b=n},setOnline:function(t,n){t.userline.forEach(function(t){t.id==n&&(t.state=!0)})},setUsers:function(t,n){t.userline=n}},actions:{f1:function(t,n){t.commit("increment",n)},f2:function(t,n){(0,t.commit)("reduce",n)},setA:function(t,n){(0,t.commit)("setA",n)},setB:function(t,n){(0,t.commit)("setB",n)},setOnline:function(t,n){t.commit("setOnline",n),console.log(t)},readUsers:function(t){var n=this,e=t.commit;return l()(u.a.mark(function t(){var o,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:8081/data.txt");case 2:return o=t.sent,t.next=5,o.json();case 5:r=t.sent,e("setUsers",r);case 7:case"end":return t.stop()}},t,n)}))()}},getters:{getCount:function(t){return t.a+t.count},setOnlines:function(t){return t.userline.filter(function(t){return t.state})}},modules:{mod_a:{state:{a:1},mutations:{setA:function(t,n){t.a=n}}}}});o.a.config.productionTip=!1,new o.a({el:"#app",router:O,store:g,components:{App:c},template:"<App/>"})},P2FE:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.e592814bee632801fcf4.js.map