"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[1534],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),g=r,d=m["".concat(s,".").concat(g)]||m[g]||p[g]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return g}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={slug:"google-analytics-with-reactjs",title:"How to Add the New Google Analytics 4 in Reactjs App",authors:"tamalweb",tags:["reactjs","google"]},s=void 0,c={permalink:"/tamalwebsite/google-analytics-with-reactjs",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2021/11-19-google-analytics-with-reactjs/index.md",source:"@site/blog/2021/11-19-google-analytics-with-reactjs/index.md",title:"How to Add the New Google Analytics 4 in Reactjs App",description:'You probably know about the react-ga npm package but the sad news is, it does not work with the latest Google Analytics 4 version. It works with the old UA-0000-01 tags, but not with the G-XXXXXX tags. I\u2019m sure an updated version of the package will solve it, but for the time being, I found a better and a working method of adding GA to your React application. And it\u2019s so obvious, you will feel like, "why didn\u2019t I think about it before?"',date:"2021-11-19T00:00:00.000Z",formattedDate:"November 19, 2021",tags:[{label:"reactjs",permalink:"/tamalwebsite/tags/reactjs"},{label:"google",permalink:"/tamalwebsite/tags/google"}],readingTime:4.09,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],prevItem:{title:"Best Practices on How to Compress Images For Reactjs",permalink:"/tamalwebsite/compress-images-reactjs"},nextItem:{title:"What is null in JavaScript?",permalink:"/tamalwebsite/null-javascript"}},u={authorsImageUrls:[void 0]},p=[],m={toc:p};function g(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You probably know about the react-ga npm package but the sad news is, it does not work with the latest Google Analytics 4 version. It works with the old ",(0,a.kt)("inlineCode",{parentName:"p"},"UA-0000-01")," tags, but not with the ",(0,a.kt)("inlineCode",{parentName:"p"},"G-XXXXXX"),' tags. I\u2019m sure an updated version of the package will solve it, but for the time being, I found a better and a working method of adding GA to your React application. And it\u2019s so obvious, you will feel like, "why didn\u2019t I think about it before?"'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"featured",src:n(1841).Z})),(0,a.kt)("p",null,"So how to add the new Google Analytics 4 in Reactjs app? ",(0,a.kt)("strong",{parentName:"p"},"You simply copy the Google Analytics script tag into the ",(0,a.kt)("inlineCode",{parentName:"strong"},"<head>")," section of your index.html file in the public directory.")),(0,a.kt)("p",null,"Yeah, I know right, it\u2019s that obvious. I found it by trial and error. If you stick around, I will show you a step-by-step guide and also give you a glimpse at how did I figure it out."))}g.isMDXComponent=!0},1841:function(e,t,n){t.Z=n.p+"assets/images/featured-c4c54eced3257c95a48a755421aa04b6.png"}}]);