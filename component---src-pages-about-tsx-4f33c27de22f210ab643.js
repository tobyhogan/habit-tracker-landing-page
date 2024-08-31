"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[970],{3020:function(e,t,r){var a=r(758);t.A=function(){return a.createElement("footer",{className:"text-center py-8"},a.createElement("p",null,"© Habitazen 2024"))}},6942:function(e,t,r){var a=r(758),n=r(9789),l=r(1336);t.A=function(){const{0:e,1:t}=(0,a.useState)(!1),{0:r,1:o}=(0,a.useState)(!1);(0,a.useEffect)((()=>{document.body.classList.add("dark"),localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),o(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),o(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),o(!0))}),[]);const c=a.createElement(a.Fragment,null,a.createElement(n.Link,{to:"https://habit-tracker-indol-ten.vercel.app/",className:"Link1 hover:underline"},"Log In"),a.createElement(n.Link,{to:"/",className:"Link1 hover:underline"},"Home"),a.createElement(n.Link,{to:"/about",className:"Link1 hover:underline"},"About"),a.createElement(n.Link,{to:"/documentation",className:"Link1 hover:underline"},"Docs"),a.createElement(n.Link,{to:"/submit-feedback",className:"Link1 hover:underline"},"Submit Feedback"));return a.createElement("header",{className:"NavBar flex justify-between fixed w-full"},a.createElement(n.Link,{to:"/",className:"Link1 text-[35px] ml-14 py-2.5"},"Habitazen"),a.createElement("div",{className:"flex flex-row"},a.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"Link1 rounded-md text-md my-auto mr-8 py-1.5 px-6 h-fit bg-gradient-to-tr from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800"},"Sign Up Now!"),a.createElement("div",{className:"FullNav"},a.createElement("ul",{className:"flex mt-6 mr-4"},c)),a.createElement("div",{className:"ToggleNav"},a.createElement("button",{onClick:()=>{t((e=>!e))}},a.createElement(l.vIB,{className:"ml-4 mr-8 mt-6 text-black dark:text-white",size:30})),e?a.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-24 w-50 absolute rounded-md bg-white dark:bg-[#333333]"},a.createElement("ul",{className:"flex flex-col text-start ml-3"},c)):null)))}},3948:function(e,t,r){r.r(t),r.d(t,{Head:function(){return o}});var a=r(758),n=r(6942),l=r(3020);t.default=()=>a.createElement("div",{className:""},a.createElement(n.A,null),a.createElement("main",{className:"pt-24 mb-36"},a.createElement("h1",{className:"text-3xl mt-8"},"About"),a.createElement("h2",{className:"text-xl mt-4"},"Development"),a.createElement("h3",{className:"text-lg mt-4"},"Developed by Toby Hogan (",a.createElement("a",{href:"https://tobyhogan.space",className:"underline",target:"_blank"},"tobyhogan.space"),") as a ",a.createElement("a",{href:"https://tobyhogan.github.io/kazen-projects-landing-page/",target:"_blank",className:"underline"},"Kazen Projects")," Project")),a.createElement(l.A,null));const o=()=>a.createElement("title",null,"About Page")},1714:function(e,t,r){r.d(t,{k5:function(){return b}});var a=r(758),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),o=["attr","size","title"];function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function b(e){return t=>a.createElement(f,i({attr:m({},e.attr)},t),d(e.child))}function f(e){var t=t=>{var r,{attr:n,size:l,title:s}=e,u=c(e,o),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-4f33c27de22f210ab643.js.map