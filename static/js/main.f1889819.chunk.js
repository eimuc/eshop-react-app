(this["webpackJsonpeshop-react-app"]=this["webpackJsonpeshop-react-app"]||[]).push([[0],{35:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(28),s=n.n(a),i=(n(35),n(8)),l=n(2),o=n(9),u=n(11),d=n(0);var j,b,f,x=function(e){var t=e.content,n=e.route,c=e.className;return Object(d.jsx)("li",{className:Object(u.a)("p-2 font-semibold text-xl hover:text-white",c),children:Object(d.jsx)(i.c,{to:n,children:t})})},h=["title","titleId"];function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e,t){var n=e.title,r=e.titleId,a=O(e,h);return c.createElement("svg",m({viewBox:"0 -31 512.00026 512",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,j||(j=c.createElement("path",{fill:"currentColor",d:"m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"})),b||(b=c.createElement("path",{fill:"currentColor",d:"m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})),f||(f=c.createElement("path",{fill:"currentColor",d:"m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})))}var v=c.forwardRef(p),g=(n.p,n(13)),y=n.n(g),N=n(15),w=n(12),C=n(30),k=n.n(C),I={isLoading:!1,data:null};var E=function(){var e=Object(c.useState)(I),t=Object(w.a)(e,2),n=t[0],r=t[1],a=Object(l.f)();function s(){return(s=Object(N.a)(y.a.mark((function e(t){var n,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({data:null,isLoading:!0}),e.prev=1,e.next=4,k()(t);case 4:n=e.sent,c=n.data,r({data:c,isLoading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),a.push("/error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(o.a)(Object(o.a)({},n),{},{call:function(e){return s.apply(this,arguments)}})},S="https://fakestoreapi.com",L={method:"GET",url:"".concat(S,"/products")},T=function(e,t){return{method:"POST",url:"".concat(S,"/carts"),data:{userId:5,products:[{productId:e,quantity:t}]}}},D={url:"https://fakestoreapi.com/carts/5",method:"GET"},P=Object(c.createContext)({});var R=function(e){var t=e.children,n=E(),r=n.data,a=n.isLoading,s=n.call;return Object(c.useEffect)((function(){s(D)}),[]),Object(d.jsx)(P.Provider,{value:{cart:r,isLoading:a,refreshData:function(){return s(D)}},children:t})};function z(){var e,t=Object(c.useContext)(P).cart;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{className:"w-8 h-8"}),Object(d.jsx)("span",{className:"absolute text-yellow-400 text-xs font-bold",style:{right:"35%",top:"25%"},children:null===t||void 0===t||null===(e=t.products)||void 0===e?void 0:e.length})]})}var A=function(){return Object(d.jsx)(x,{route:"/cart",content:Object(d.jsx)(z,{}),className:"ml-auto mr-2 relative"})},G=[{content:"PRODUCTS",route:"/"},{content:"VISION",route:"/vision"}];var B=function(){return Object(d.jsx)("nav",{className:"bg-blue-300",children:Object(d.jsxs)("ul",{className:"flex",children:[G.map((function(e){return Object(d.jsx)(x,Object(o.a)({},e),e.route)})),Object(d.jsx)(A,{})]})})},F={default:"text-blue-400 hover:bg-gray-50",primary:"text-white bg-blue-400 hover:bg-blue-500"};var J=function(e){var t=e.type,n=void 0===t?"default":t,c=e.className,r=e.children,a=e.disabled,s=e.to,l=e.onClick,o=Object(u.a)("p-1 focus:outline-none rounded font-semibold",a?"bg-gray-300 cursor-default text-gray-400":F[n],c);return s?Object(d.jsx)(i.c,{to:s,className:o,disabled:a,onClick:l,children:r}):Object(d.jsx)("button",{className:o,disabled:a,onClick:l,children:r})};var V=function(e){var t=e.className,n=e.children,c=e.isRounded;return Object(d.jsx)("div",{className:Object(u.a)("bg-white border shadow p-2",t,c&&"rounded"),children:n})};var W=function(e){var t=e.id,n=e.image,c=e.title,r=e.price;return Object(d.jsx)("li",{className:"p-2",children:Object(d.jsxs)(V,{className:"w-64 h-80",isRounded:!0,children:[Object(d.jsx)("div",{className:"h-3/4 flex ",children:Object(d.jsx)("img",{src:n,alt:c,className:"max-h-full m-auto"})}),Object(d.jsx)("div",{className:" text-center truncate font-bold",title:c,children:c}),Object(d.jsxs)("div",{className:"text-center font-semibold",children:[r,"\u20ac"]}),Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsx)(J,{to:"/products/".concat(t),children:"VIEW"})})]})})},q=["title","titleId"];function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function U(e,t){e.title;var n=e.titleId,r=Q(e,q);return c.createElement("svg",M({className:"animate-spin bg-blue-400 rounded-md h-10 w-10",viewBox:"0 0 10 10",ref:t,"aria-labelledby":n},r))}var $=c.forwardRef(U);n.p;var H=function(e){var t=e.text,n=void 0===t?"Loading":t,c=e.dots;return Object(d.jsxs)("div",{className:"h-full flex flex-col justify-center items-center",children:[Object(d.jsx)($,{}),Object(d.jsxs)("div",{className:"flex mt-2 font-semibold",children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)("span",{className:"w-3",children:c})]})]})};var K=function(){var e=E(),t=e.data,n=e.isLoading,r=e.call;return Object(c.useEffect)((function(){r(L)}),[]),n||!t?Object(d.jsx)(H,{text:"Fetching products"}):Object(d.jsx)("ul",{className:"flex flex-wrap",children:t.map((function(e){return Object(d.jsx)(W,{id:e.id,title:e.title,image:e.image,price:e.price},e.id)}))})},X="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 cursor-pointer outline-none focus:outline-none",Y="m-auto text-2xl font-thin";var Z=function(e){var t=e.className,n=e.count,c=e.onIncrement,r=e.onDecrement,a=e.onInputChange;return Object(d.jsxs)("div",{className:"flex flex-row h-8 w-20 rounded-lg relative bg-transparent mt-1 ".concat(t),children:[Object(d.jsx)("button",{className:"rounded-l ".concat(X),onClick:r,children:Object(d.jsx)("span",{className:Y,children:"\u2212"})}),Object(d.jsx)("input",{className:"outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700",type:"number",onChange:a,value:n}),Object(d.jsx)("button",{className:"rounded-r ".concat(X),onClick:c,children:Object(d.jsx)("span",{className:Y,children:"+"})})]})};var _=function(){var e=Object(c.useState)(1),t=Object(w.a)(e,2),n=t[0],r=t[1];return{count:n,onIncrement:function(){r(""===n?1:function(e){return e+1})},onDecrement:function(){r(1===n||""===n?1:function(e){return e-1})},onInputChange:function(e){e.target.value?r(parseInt(e.target.value)):r("")}}};var ee=function(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){r((function(e){return"..."===e?"":e+"."}))}),300);return function(){return clearInterval(e)}}),[]),n};function te(){var e=ee();return Object(d.jsxs)(J,{type:"primary",disabled:!0,children:["ADDING TO CART",e]})}function ne(e){var t=e.onClick;return Object(d.jsx)(J,{type:"primary",onClick:t,children:"ADD TO CART"})}var ce=function(e){var t=e.isLoading,n=e.onClick;return t?Object(d.jsx)(te,{}):Object(d.jsx)(ne,{onClick:n})};var re=function(){var e=Object(l.g)().id,t=_(),n=E(),r=n.data,a=n.isLoading,s=n.call,i=E(),u=i.isLoading,j=i.call;function b(){return(b=Object(N.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(T(r.id,t.count));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){s(function(e){return{method:"GET",url:"".concat(S,"/products/").concat(e)}}(e))}),[]),a||!r?Object(d.jsx)(H,{text:"Fetching product info"}):Object(d.jsxs)("div",{className:"flex m-auto px-2",style:{maxWidth:1e3},children:[Object(d.jsx)("div",{className:"pr-6 max-w-1/2",children:Object(d.jsx)(V,{children:Object(d.jsx)("img",{src:null===r||void 0===r?void 0:r.image,alt:null===r||void 0===r?void 0:r.title})})}),Object(d.jsxs)("div",{className:"pl-6 max-w-1/2",children:[Object(d.jsx)("h1",{className:"text-2xl mb-4 font-semibold",children:null===r||void 0===r?void 0:r.title}),Object(d.jsxs)("div",{className:"text-3xl mb-4 font-bold",children:["$",null===r||void 0===r?void 0:r.price]}),Object(d.jsx)("p",{className:"mb-4",children:null===r||void 0===r?void 0:r.description}),Object(d.jsx)("div",{className:"mb-2 font-semibold",children:"Quantity"}),Object(d.jsx)(Z,Object(o.a)({className:"mb-4"},t)),Object(d.jsx)(ce,{isLoading:u,onClick:function(){return b.apply(this,arguments)}})]})]})};var ae=function(){return Object(d.jsx)("div",{children:"Vision"})};var se=function(){return Object(d.jsx)("div",{children:"Something failed. Try to reload the page."})};var ie=function(){var e=Object(c.useContext)(P),t=e.cart,n=e.isLoading,r=e.refreshData;return Object(c.useEffect)((function(){r()}),[]),n?Object(d.jsx)(H,{}):Object(d.jsx)("div",{children:JSON.stringify(t)})};var le=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(R,{children:[Object(d.jsx)("header",{children:Object(d.jsx)(B,{})}),Object(d.jsx)("main",{className:"p-3",style:{height:"calc(100vh - 44px)"},children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:["/","products"],component:K}),Object(d.jsx)(l.a,{exact:!0,path:"/products/:id",component:re}),Object(d.jsx)(l.a,{exact:!0,path:"/vision",component:ae}),Object(d.jsx)(l.a,{exact:!0,patch:"/cart",component:ie}),Object(d.jsx)(l.a,{exact:!0,path:"/error",component:se})]})})]})})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(i.b,{basename:"/eshop-react-app",children:Object(d.jsx)(le,{})})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.f1889819.chunk.js.map