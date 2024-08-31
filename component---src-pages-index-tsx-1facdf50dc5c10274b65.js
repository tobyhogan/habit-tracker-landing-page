"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[245],{3020:function(e,t,r){var a=r(758);t.A=function(){return a.createElement("footer",{className:"text-center py-8"},a.createElement("p",null,"© Habitazen 2024"))}},6942:function(e,t,r){var a=r(758),n=r(9789),l=r(1336);t.A=function(){const{0:e,1:t}=(0,a.useState)(!1),{0:r,1:o}=(0,a.useState)(!1);(0,a.useEffect)((()=>{document.body.classList.add("dark"),localStorage.getItem("theme")?"light"==localStorage.getItem("theme")?(document.body.classList.add("light"),o(!1)):"dark"==localStorage.getItem("theme")&&(document.body.classList.add("dark"),o(!0)):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,localStorage.setItem("theme","dark"),document.body.classList.add("dark"),o(!0))}),[]);const c=a.createElement(a.Fragment,null,a.createElement(n.Link,{to:"https://habit-tracker-indol-ten.vercel.app/",className:"Link1 hover:underline"},"Log In"),a.createElement(n.Link,{to:"/",className:"Link1 hover:underline"},"Home"),a.createElement(n.Link,{to:"/about",className:"Link1 hover:underline"},"About"),a.createElement(n.Link,{to:"/documentation",className:"Link1 hover:underline"},"Docs"),a.createElement(n.Link,{to:"/submit-feedback",className:"Link1 hover:underline"},"Submit Feedback"));return a.createElement("header",{className:"NavBar flex justify-between fixed w-full"},a.createElement(n.Link,{to:"/",className:"Link1 text-[35px] ml-[4vw] py-2.5"},"Habitazen"),a.createElement("div",{className:"flex flex-row"},a.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"Link1 rounded-md text-md my-auto mr-[1vw] py-1.5 px-[3vw] h-fit bg-gradient-to-tr from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800"},"Sign Up Now!"),a.createElement("div",{className:"FullNav ml-4 mr-5"},a.createElement("ul",{className:"flex mt-6"},c)),a.createElement("div",{className:"ToggleNav"},a.createElement("button",{onClick:()=>{t((e=>!e))}},a.createElement(l.vIB,{className:"ml-4 mr-[3vw] mt-6 text-black dark:text-white",size:30})),e?a.createElement("div",{className:"border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-24 w-50 absolute rounded-md bg-white dark:bg-[#333333]"},a.createElement("ul",{className:"flex flex-col text-start ml-3"},c)):null)))}},8081:function(e,t,r){r.r(t),r.d(t,{Head:function(){return s},default:function(){return i}});var a=r(758),n=r(9789),l=r(6942),o=r(3020),c=r.p+"static/habitazen-dark-67902c7ef1aa81c58513cdc268c1e590.png";var i=()=>a.createElement(a.Fragment,null,a.createElement(l.A,null),a.createElement("main",{className:"pt-16 pb-10 px-[5vw]"},a.createElement("div",{className:"mx-6"},a.createElement("img",{src:c,className:"w-[550px] border-[1px] mt-12"})),a.createElement("h1",{className:"text-2xl mt-8"},"Habitazen: An Unreasonably Effective Habit Tracker"),a.createElement("div",{className:"flex flex-col mx-auto w-fit mt-8"},a.createElement("a",{href:"https://habit-tracker-indol-ten.vercel.app/",className:"Link1 rounded-md text-lg py-1.5 px-6 bg-gradient-to-tr from-green-500 to-blue-700 hover:from-green-600 hover:to-blue-800"},"Sign Up Now!"),a.createElement(n.Link,{to:"https://habit-tracker-indol-ten.vercel.app/",className:"Link2 mt-4 mx-auto"},"Or Log In")),a.createElement("h2",{className:"mt-8"},"What it for?"),a.createElement("h3",{className:"mt-3"},"Ever find yourself struggling to stick to positive habits consistently? - That's what this tracker helps with! ",a.createElement("br",null)," We've found that seeing your overall progress, and building up a streak is massively helpful in motivating you to keep up with good habits."),a.createElement("h2",{className:"mt-8"},"Core Features:"),a.createElement("ul",{className:"mx-auto w-fit mt-3 pl-14"},a.createElement("li",null,"- Shows habit week view"),a.createElement("li",null,"- Allows habits to be archived"),a.createElement("li",null,"- Dark or light theme"),a.createElement("li",null,"- Habit metrics: total and current streak")),a.createElement("h2",{className:"mt-6"},"Platforms:"),a.createElement("ul",{className:"mt-3 w-fit mx-auto [&>h3]:text-left pl-12"},a.createElement("h3",null,"- Web App (in browser)"),a.createElement("h3",null,"- Mobile App (add from browser)"),a.createElement("h3",null,"- Desktop (add from browser)"),a.createElement("h3",null,"- Android App (install apk from below)")),a.createElement("h2",{className:"mt-6"},"More Information"),a.createElement("h3",{className:"mt-2"},"With the tracker, you can also log other habits: neutral ones(for observation) or negative ones(for prevention)"),a.createElement("h2",{className:"text-xl mt-10"},"Download App"),a.createElement("h3",{className:"mt-3 text-lg"},"Android:"),a.createElement("div",{className:"mx-auto w-fit"},a.createElement(n.Link,{to:"https://drive.google.com/file/d/1rep6FARskJUY_Jtzs57yacXZqxA3EHIS/view?usp=drive_link",className:"Link2 underline mt-3"},"Download APK File"))),a.createElement(o.A,null));const s=()=>a.createElement("title",null,"Habitazen Habit Tracker")},1714:function(e,t,r){r.d(t,{k5:function(){return f}});var a=r(758),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(n),o=["attr","size","title"];function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){var a;return(t="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?a:a+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){return e&&e.map(((e,t)=>a.createElement(e.tag,m({key:t},e.attr),d(e.child))))}function f(e){return t=>a.createElement(p,i({attr:m({},e.attr)},t),d(e.child))}function p(e){var t=t=>{var r,{attr:n,size:l,title:s}=e,u=c(e,o),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:m(m({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(e=>t(e))):t(n)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1facdf50dc5c10274b65.js.map