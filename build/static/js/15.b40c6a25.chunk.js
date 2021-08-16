(this["webpackJsonpfirebase-cms1"]=this["webpackJsonpfirebase-cms1"]||[]).push([[15],{724:function(e,t,a){"use strict";var c=a(10),r=a(140),n=a(141),s=a.n(n),l=a(1);t.a=function(e){var t=e.className,a=Object(r.a)(e,["className"]);return Object(l.jsx)("div",Object(c.a)(Object(c.a)({},a),{},{className:s()("text-34px font-medium capitalize leading-none",t)}))}},727:function(e,t,a){"use strict";var c=a(140),r=a(10),n=a(250),s=a(675),l=a(0),o=a.n(l),i=a(141),b=a.n(i),d=a(1),u=o.a.forwardRef((function(e,t){return Object(d.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{ref:t,children:Object(d.jsx)(n.b,{className:"text-red-500",size:20})}))}));t.a=function(e){var t=e.className,a=void 0===t?"":t,n=e.options,l=e.error,o=e.white,i=void 0!==o&&o,j=Object(c.a)(e,["className","options","error","white"]);return Object(d.jsxs)("div",{className:"".concat(a," relative flex items-center"),children:[Object(d.jsx)("select",Object(r.a)(Object(r.a)({className:b()("px-3 h-34px border-2 border-solid w-full rounded outline-none",{"border-red-400":l,"focus:border-blue-300":!l,"border-gray-300 bg-gray-300":!i,"border-white bg-white":i})},j),{},{spellCheck:!1,children:n.map((function(e,t){return Object(d.jsx)("option",{value:e.value,children:e.label},"opt-"+t)}))})),l?Object(d.jsx)(s.a,{title:l,placement:"top",children:Object(d.jsx)(u,{className:"absolute right-2 my-auto w-auto"})}):null]})}},730:function(e,t,a){"use strict";var c=a(60),r=a(1);t.a=function(e){var t=e.title,a=e.onCreate,n=e.buttonTitle;return Object(r.jsx)("div",{className:"h-96 bg-gray-300 rounded-md flex w-full p-12",children:Object(r.jsxs)("div",{className:"m-auto",children:[Object(r.jsx)("div",{className:"text-28px mb-5 font-medium text-center",children:t}),Object(r.jsx)(c.a,{className:"mx-auto bg-orange-300 hover:bg-orange-301 block",onClick:a,children:n})]})})}},783:function(e,t,a){"use strict";var c=a(140),r=a(10),n=a(253),s=a.n(n),l=a(675),o=a(0),i=a.n(o),b=a(1),d=i.a.forwardRef((function(e,t){return Object(b.jsx)("div",Object(r.a)(Object(r.a)({},e),{},{ref:t,children:Object(b.jsx)(s.a,{className:"text-red-500 text-xl",fontSize:"inherit"})}))}));t.a=function(e){var t=e.className,a=void 0===t?"":t,n=e.error,s=Object(c.a)(e,["className","error"]);return Object(b.jsxs)("div",{className:"".concat(a," relative flex items-center"),children:[Object(b.jsx)("input",Object(r.a)(Object(r.a)({className:"px-3 h-34px w-full rounded outline-none ".concat(n?"border-red-500":"focus:border-blue-300 border-white","  border-2 border-solid focus:border-3")},s),{},{spellCheck:!1})),n?Object(b.jsx)(l.a,{title:n,placement:"top",children:Object(b.jsx)(d,{className:"absolute right-2 my-auto w-auto"})}):null]})}},924:function(e,t,a){"use strict";a.r(t);var c=a(10),r=a(6),n=a(251),s=a(141),l=a.n(s),o=a(724),i=a(727),b=a(0),d=a(24),u=a(60),j=a(783),m=a(189),f=a(23),O=a(730),h=a(1);t.default=function(){var e=Object(b.useState)(),t=Object(r.a)(e,2),a=t[0],s=t[1],x=Object(b.useState)(),p=Object(r.a)(x,2),v=p[0],g=p[1],w=Object(b.useState)(),N=Object(r.a)(w,2),k=N[0],y=N[1],C=Object(d.d)((function(e){return e.collectionTypes})),S=Object(d.c)(),T=["POST","DELETE","PATCH","PUT","GET"];Object(b.useEffect)((function(){if(a){var e=C.find((function(e){return e.id===a}));g(JSON.parse(JSON.stringify(e))),y(JSON.parse(JSON.stringify(e)))}C.length&&!a&&s(C[0].id)}),[a,C]);var J=JSON.stringify(k)!==JSON.stringify(v),E=Object(f.k)();return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.a,{className:"mb-1",children:"Webhooks"}),Object(h.jsx)("div",{className:"mb-12",children:"Create webhooks for events in each collection"}),C.length?Object(h.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap",children:[Object(h.jsx)("div",{className:"max-w-192px mb-3 mr-4 block lg:hidden w-full",children:Object(h.jsx)(i.a,{onChange:function(e){return!J||window.confirm("Changes will be lost")?s(e.target.value):{}},value:a,options:C.map((function(e){return{value:e.id,label:e.name}}))})}),Object(h.jsx)(m.a,{className:"min-w-192px flex-shrink-0 mr-4 hidden lg:block select-none max-h-72 pr-4 scrollbar-dark",autoHide:!1,children:C.map((function(e){return Object(h.jsx)("div",{onClick:function(){return!J||window.confirm("Changes will be lost")?s(e.id):{}},className:"mb-1 capitalize cursor-pointer ".concat(a===e.id?"bg-orange-300":"hover:bg-gray-300"," rounded h-34px leading-34px px-3"),children:e.name},e.id)}))}),Object(h.jsx)("div",{className:"lg:flex-grow w-full rounded bg-gray-300 p-7",children:v?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"flex justify-between mb-4",children:[Object(h.jsx)("div",{className:"text-22px capitalize font-medium mb-3",children:v.name}),Object(h.jsx)(u.a,{disabled:!J,className:l()("mb-3",{"cursor-default bg-white text-gray-400":!J,"bg-orange-300 hover:bg-orange-301":J}),onClick:function(){Object(n.d)(v.docId,v),S({type:"UPDATE_COLLECTION",docId:v.docId,payload:v})},children:J?"Save":"Saved!"})]}),["find","find one","create","update","delete"].map((function(e){return Object(h.jsxs)("div",{className:"flex mb-2",children:[Object(h.jsxs)("div",{className:"w-32",children:["On ",e]}),Object(h.jsx)(i.a,{className:"mr-2",white:!0,options:T.map((function(e){return{value:e,label:e}})),value:v.webhooks[e].method,onChange:function(t){var a=Object(c.a)({},v.webhooks);a[e].method=t.target.value,g((function(e){return e?Object(c.a)(Object(c.a)({},e),{},{webhooks:a}):e}))}}),Object(h.jsx)("div",{className:"flex-grow",children:Object(h.jsx)(j.a,{value:v.webhooks[e].url,onChange:function(t){var a=Object(c.a)({},v.webhooks);a[e].url=t.target.value,g((function(e){return e?Object(c.a)(Object(c.a)({},e),{},{webhooks:a}):e}))},placeholder:"Type your url",className:"w-full placeholder-gray-300"})})]})}))]}):null})]}):Object(h.jsx)(O.a,{title:"Create collection to add webhooks for",buttonTitle:"Create collection type",onCreate:function(){return E.push("/collections")}})]})}}}]);
//# sourceMappingURL=15.b40c6a25.chunk.js.map