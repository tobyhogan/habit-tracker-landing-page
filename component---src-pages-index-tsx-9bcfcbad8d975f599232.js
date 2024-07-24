"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[245],{3020:function(e,t,r){r.d(t,{w:function(){return n}});var a=r(758);const n=e=>{let{}=e;return a.createElement("footer",{className:"text-center py-8"},a.createElement("p",null,"© Habitazen 2024"))}},6942:function(e,t,r){var a=r(758),n=r(1336);t.A=function(){const{0:e,1:t}=(0,a.useState)(!1),r=a.createElement(a.Fragment,null,a.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"hover:underline"},"Log In / Sign Up"),a.createElement("a",{href:"/",className:"hover:underline"},"Home"),a.createElement("a",{href:"/documentation",className:"hover:underline"},"Docs"),a.createElement("a",{href:"/submit-feedback",className:"hover:underline"},"Submit Feedback"));return a.createElement("nav",{className:"NavBar flex justify-between bg-slate-100 text-slate-600"},a.createElement("a",{href:"/",className:"text-[35px] ml-14 py-3"},"Habitazen"),a.createElement("div",{className:"FullNav"},a.createElement("ul",{className:"flex mt-6 mr-8"},r)),a.createElement("div",{className:"ToggleNav"},a.createElement("button",{onClick:()=>{t((e=>!e))}},a.createElement(n.vIB,{className:"ml-4 mr-8 mt-6",size:30})),e?a.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-24 w-50 absolute rounded-md bg-white"},a.createElement("ul",{className:"flex flex-col text-start ml-3"},r)):null))}},6725:function(e,t,r){r.r(t),r.d(t,{Head:function(){return i},default:function(){return o}});var a=r(758),n=r(6942),l=r(3020),c=r.p+"static/habitazen-ba6fd94a16482b69da1dcf08ecd84dec.png";var o=()=>a.createElement(a.Fragment,null,a.createElement(n.A,null),a.createElement("main",{className:"pb-20"},a.createElement("img",{src:c,className:"w-96 border-2 mt-8"}),a.createElement("h1",{className:"text-2xl mt-8"},"Habitazen: Advanced Habit Tracker"),a.createElement("div",{className:"flex flex-col mx-auto w-fit mt-8"},a.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/"},a.createElement("button",{className:"rounded-md py-2 px-3 text-white bg-slate-450 hover:bg-slate-500"},"Sign Up Now!")),a.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"mt-4 underline text-blue-400 mx-auto"},"Or Log In")),a.createElement("h2",{className:"text-xl mt-8"},"Features:"),a.createElement("ul",{className:"mx-auto w-fit mt-3 pl-8"},a.createElement("li",null,"- Shows you habit week view"),a.createElement("li",null,"- Dark Mode"),a.createElement("li",null,"- Allows habit archiving")),a.createElement("h2",{className:"text-xl mt-10"},"Download App"),a.createElement("h3",{className:"mt-3 text-lg"},"Android:"),a.createElement("div",{className:"LinkContainer mx-auto w-fit"},a.createElement("a",{href:"https://drive.google.com/file/d/1rep6FARskJUY_Jtzs57yacXZqxA3EHIS/view?usp=drive_link",className:""},"Download APK File"))),a.createElement(l.w,null));const i=()=>a.createElement("title",null,"Landing Page")},1714:function(e,t,r){r.d(t,{k5:function(){return p}});var a=r(758),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),c=["attr","size","title"];function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){return e&&e.map(((e,t)=>a.createElement(e.tag,m({key:t},e.attr),f(e.child))))}function p(e){return t=>a.createElement(b,i({attr:m({},e.attr)},t),f(e.child))}function b(e){var t=t=>{var r,{attr:n,size:l,title:s}=e,u=o(e,c),f=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9bcfcbad8d975f599232.js.map