(this["webpackJsonpbookmark-app"]=this["webpackJsonpbookmark-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(9),j=n.n(a),b=(n(14),n(7)),i=n(4),l=n(6),s=n(8),o=(n(15),n(0));var u=function(){var e=Object(c.useState)({name:"",url:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),j=Object(s.a)(a,2),u=j[0],O=j[1],d=function(e){r(Object(l.a)(Object(l.a)({},n),{},Object(i.a)({},e.target.id,e.target.value)))};console.log(u);var h=function(e){var t=Number(e.target.id),n=Object(b.a)(u);n.splice(t,1),console.log("filtered",n),O(n)};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("h2",{children:"Create a New Bookmark"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O([].concat(Object(b.a)(u),[n])),r({name:"",url:""})},children:[Object(o.jsx)("label",{htmlFor:"name",children:"Website Name"}),Object(o.jsx)("input",{type:"text",name:"name",id:"name",onChange:d,value:n.name}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"url",children:"URL"}),Object(o.jsx)("input",{type:"text",name:"url",id:"url",onChange:d,value:n.url}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]}),Object(o.jsx)("p",{children:"------------------------------"}),u.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{className:"App-link",target:"_blank",rel:"noreferrer",href:e.url,children:Object(o.jsx)("p",{children:e.name})}),Object(o.jsx)("button",{id:t,onClick:h,children:"Delete"})]},t)}))]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,j=t.getTTFB;n(e),c(e),r(e),a(e),j(e)}))};j.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.c9cbfbdf.chunk.js.map