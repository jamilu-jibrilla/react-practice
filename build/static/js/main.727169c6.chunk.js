(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(15),a=c.n(s),r=c(10),o=(c(22),c(9)),j=c(1),u=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts/?_limit=7").then((function(e){return e.json()})).then((function(e){return n(e)}))}),[]),Object(j.jsx)("div",{children:c.map((function(e){return Object(j.jsxs)("div",{className:"postCard",children:[Object(j.jsx)("img",{className:"img",src:"./background.jpg",height:"300",width:"1000",alt:""}),Object(j.jsxs)("div",{className:"dateSec",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("img",{src:"./share.png",alt:"",height:"20px",width:"20px"})]}),Object(j.jsx)("p",{children:"Jan 19 2020"}),Object(j.jsxs)("p",{children:[e.body,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate soluta dolore accusamus ut minima odio! Architecto, nobis rerum facere a magnam quisquam itaque explicabo consequatur voluptate! Non illum earum sint."]}),Object(j.jsx)(o.b,{to:"/Home/".concat(e.id),children:"read more"})]})}))})},d=function(e){var t=e.match,c="https://jsonplaceholder.typicode.com/posts/".concat(t.params.id),n=Object(i.useState)([]),s=Object(r.a)(n,2),a=s[0],o=s[1];return Object(i.useEffect)((function(){fetch(c).then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"postCard",children:[Object(j.jsx)("img",{className:"img",src:"./background.jpg",height:"300",width:"600",alt:""}),Object(j.jsxs)("div",{className:"dateSec",children:[Object(j.jsx)("h1",{children:a.title}),Object(j.jsx)("img",{src:"./share.png",alt:"",height:"20px",width:"20px"})]}),Object(j.jsx)("p",{children:"Jan 19 2020"}),Object(j.jsxs)("p",{children:[a.body,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate soluta dolore accusamus ut minima odio! Architecto, nobis rerum facere a magnam quisquam itaque explicabo consequatur voluptate! Non illum earum sint."]}),Object(j.jsx)("a",{href:"",children:"read more"})]})})},l=function(){return Object(j.jsx)("header",{style:{color:"black",fontSize:"1.2em",height:"200px",backgroundColor:"white",margin:"0px",display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"10px",textAlign:"center"},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"CATS WHO CODE "}),Object(j.jsx)("p",{children:"Blog post"})]})})},h=c(2);var m=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{path:"/",exact:!0,component:u}),Object(j.jsx)(h.a,{path:"/Home/:id",component:d})]})]})})},p=(c(29),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))});a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.727169c6.chunk.js.map