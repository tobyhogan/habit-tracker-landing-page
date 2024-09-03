"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[763],{3020:function(e,t,r){var n=r(758);t.A=function(){return n.createElement("footer",{className:"text-center py-8"},n.createElement("p",null,"© Habitazen 2024"))}},4556:function(e,t,r){r.d(t,{A:function(){return c}});var n=r(758),a=r(9789),l=r(1336);var o=function(e){let{text:t,to:r,setNavOpen:l}=e;return n.createElement("button",{className:"Link1 hover:underline",onClick:()=>{(0,a.navigate)(r),l(!1)}},t)};var c=function(){const{0:e,1:t}=(0,n.useState)(!1),{0:r,1:c}=(0,n.useState)(!1),i=(0,n.useRef)(null),s=(0,n.useRef)(null);var m,u;m=i,u=s,(0,n.useEffect)((()=>{function e(e){!m.current||m.current.contains(e.target)||u.current.contains(e.target)||t(!1)}return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[m,u]);const d=n.createElement(n.Fragment,null,n.createElement(o,{to:"https://habit-tracker-indol-ten.vercel.app/",text:"Log In",setNavOpen:t}),n.createElement(o,{to:"/",text:"Home",setNavOpen:t}),n.createElement(o,{to:"/about",text:"About",setNavOpen:t}),n.createElement(o,{to:"/documentation",text:"Docs",setNavOpen:t}),n.createElement(o,{to:"/privacy-policy",text:"Privacy",setNavOpen:t}),n.createElement(o,{to:"/contact",text:"Contact",setNavOpen:t}));return(0,n.useEffect)((()=>{document.body.classList.add("dark"),localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),c(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),c(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),c(!0))}),[]),n.createElement("header",{className:"NavBar flex justify-between fixed w-full"},n.createElement(a.Link,{to:"/",className:"Link1 text-[35px] ml-[4vw] py-2.5"},"Habitazen"),n.createElement("div",{className:"flex flex-row"},n.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"Link1 rounded-md text-md my-auto mr-[1vw] py-1.5 px-[3vw] h-fit bg-gradient-to-tr from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800"},"Sign Up Now!"),n.createElement("div",{className:"FullNav ml-4 mr-5"},n.createElement("ul",{className:"flex mt-6 [&>*]:mr-3"},d)),n.createElement("div",{className:"ToggleNav"},n.createElement("button",{onClick:()=>{t((e=>!e))},ref:s},n.createElement(l.vIB,{className:"ml-4 mr-[3vw] mt-6 text-black dark:text-white",size:30})),e?n.createElement("div",{ref:i,className:"border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-24 w-50 absolute rounded-md bg-white dark:bg-[#333333]"},n.createElement("ul",{className:"flex flex-col [&>*]:text-start ml-3"},d)):null)))}},2441:function(e,t,r){r.r(t),r.d(t,{Head:function(){return o}});var n=r(758),a=r(4556),l=r(3020);t.default=()=>n.createElement("div",{className:""},n.createElement(a.A,null),n.createElement("main",{className:"pt-20 pb-40"},n.createElement("h1",{className:"text-3xl mt-8"},"Documentation"),n.createElement("h2",{className:"text-xl mt-4"},"Main App"),n.createElement("p",null,"More coming soon...")),n.createElement(l.A,null));const o=()=>n.createElement("title",null,"Documentation")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var n=r(758),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),o=["attr","size","title"];function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>n.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>n.createElement(p,i({attr:m({},e.attr)},t),d(e.child))}function p(e){var t=t=>{var r,{attr:a,size:l,title:s}=e,u=c(e,o),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=component---src-pages-documentation-tsx-16229583715445be6d09.js.map