(this["webpackJsonpbook-finder"]=this["webpackJsonpbook-finder"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(6),r=n.n(s),i=(n(23),n(8)),a=n.n(i),u=n(18),b=n(9),l=(n.p,n(25),n(7)),j=n.n(l),h=n(0);var d=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],o=t[1],s=Object(c.useState)({items:[]}),r=Object(b.a)(s,2),i=r[0],l=r[1],d=function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("".concat("https://www.googleapis.com/books/v1/volumes","?q=").concat(n));case 2:t=e.sent,l(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("section",{children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d()},children:[Object(h.jsx)("h2",{children:" Book Search Tool"}),Object(h.jsxs)("div",{className:"book-div",children:["  ",Object(h.jsx)("input",{type:"search",className:"search-input",placeholder:"Search for books",value:n,onChange:function(e){o(e.target.value)}}),"\xa0\xa0",Object(h.jsx)("button",{className:"btn_book",type:"submit",children:"Search"})]})]}),Object(h.jsx)("ul",{className:"book-items",children:i.items.map((function(e,t){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{alt:"".concat(e.volumeInfo.title," book"),src:"http://books.google.com/books/content?id=".concat(e.id,"&printsec=frontcover&img=1&zoom=1&source=gbs_api")}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:["Title: ",e.volumeInfo.title]}),Object(h.jsxs)("p",{children:["Author: ",e.volumeInfo.authors]}),Object(h.jsxs)("p",{children:["Published Date: ",e.volumeInfo.publishedDate]})]})]}),Object(h.jsx)("hr",{})]},t)}))})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),p()}},[[45,1,2]]]);
//# sourceMappingURL=main.9f8cbf26.chunk.js.map