"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[9045],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return c}});var o=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=u(r),c=s,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||a;return r?o.createElement(m,n(n({ref:t},p),{},{components:r})):o.createElement(m,n({ref:t},p))}));function c(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,n=new Array(a);n[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,n[1]=i;for(var u=2;u<a;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1843:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return c}});var o=r(7462),s=r(3366),a=(r(7294),r(3905)),n=["components"],i={slug:"why-expressjs-in-nodejs",title:"Why Express JS is Used in Node JS?",authors:"tamalweb",tags:["nodejs","explainer"]},l=void 0,u={permalink:"/why-expressjs-in-nodejs",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2020/1-29-why-expressjs-in-nodejs/index.md",source:"@site/blog/2020/1-29-why-expressjs-in-nodejs/index.md",title:"Why Express JS is Used in Node JS?",description:"Whenever you go out and try to learn how to configure a web server with Node JS, you will see that the first thing the instructor does is to install Express. Just like you, I always wondered why most people use Express JS and is there another way to build a server without it?",date:"2020-01-29T00:00:00.000Z",formattedDate:"January 29, 2020",tags:[{label:"nodejs",permalink:"/tags/nodejs"},{label:"explainer",permalink:"/tags/explainer"}],readingTime:6.39,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],prevItem:{title:"Which Node JS Version Should I Use?",permalink:"/which-nodejs-version"},nextItem:{title:"How Much Time Does it Take to Learn Node JS for Beginners?",permalink:"/how-much-time-nodejs"}},p={authorsImageUrls:[void 0]},d=[{value:"What does Express JS do in Node JS development?",id:"what-does-express-js-do-in-node-js-development",children:[],level:2},{value:"What are middlewares in Express JS?",id:"what-are-middlewares-in-express-js",children:[],level:2},{value:"Can I build a web server with plain Node JS without a framework?",id:"can-i-build-a-web-server-with-plain-node-js-without-a-framework",children:[],level:2},{value:"Does Express JS come built-in with Node JS?",id:"does-express-js-come-built-in-with-node-js",children:[],level:2},{value:"Why JavaScript developers love Express JS?",id:"why-javascript-developers-love-express-js",children:[{value:"Express JS is minimal and unopinionated",id:"express-js-is-minimal-and-unopinionated",children:[],level:3},{value:"Other frameworks are built on Express JS",id:"other-frameworks-are-built-on-express-js",children:[],level:3},{value:"Companies using Express JS",id:"companies-using-express-js",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"References",id:"references",children:[],level:2}],h={toc:d};function c(e){var t=e.components,r=(0,s.Z)(e,n);return(0,a.kt)("wrapper",(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Whenever you go out and try to learn how to configure a web server with Node JS, you will see that the first thing the instructor does is to install Express. Just like you, I always wondered why most people use Express JS and is there another way to build a server without it?"),(0,a.kt)("p",null,"Why Express JS is used in Node JS? ",(0,a.kt)("strong",{parentName:"p"},"Express JS is a minimal framework for building web applications in Node JS. It makes the process of creating a server simple with built-in methods that\u2019s why Express JS is widely used and is the de facto framework for Node.")),(0,a.kt)("p",null,"Express JS is one framework that rules Node JS development. Express is also a central component for the MEAN stack development (MongoDB, Express, Angular, and Node)."),(0,a.kt)("p",null,"Before Express, it was hard and cumbersome to build out a web server with Node but now you can install Express and run a server within a few lines of codes."),(0,a.kt)("h2",{id:"what-does-express-js-do-in-node-js-development"},"What does Express JS do in Node JS development?"),(0,a.kt)("p",null,"We know that we can use Node JS to build a backend server. Node provides an http module that you can use to check for routes, parse the payloads and supply content. But as you start building multiple routes, this becomes repetitive and a complicated process. Express JS simplifies the process by providing effective route creation and support for middlewares. It gives you all the tools you will need for route creation, parse payloads, create HTML view pages, work with middleware functions and connect to databases."),(0,a.kt)("p",null,"So in a nutshell, Express JS is used to build out web applications with Node JS. Why it\u2019s used and instead of other frameworks? Because this is the one framework that 93% of the JavaScript developers like to use (State of JavaScript, 2019)."),(0,a.kt)("h2",{id:"what-are-middlewares-in-express-js"},"What are middlewares in Express JS?"),(0,a.kt)("p",null,"The Express framework works by making use of middlewares. Every route you create with Express JS will have the option to supply a middleware. Middleware is like a simple function that can do a certain task. Let\u2019s say I create a middleware called validateEmail to check if the given email is a valid email address or not. I can pass this middleware into the route and when it reaches that part, it will run the function for validating email addresses. With middle-wares, you can make modular code that you can reuse all over your application that makes it easy for development."),(0,a.kt)("h2",{id:"can-i-build-a-web-server-with-plain-node-js-without-a-framework"},"Can I build a web server with plain Node JS without a framework?"),(0,a.kt)("p",null,"Yes, you can build a web server using only the built-in Node modules without using any frameworks. In fact, people used to build servers using the built-in http and https modules before Express came along. After learning how to build a full-stack web application with Node, I got interested to learn how I can build a server with vanilla Node. The process is a bit complicated and I soon realized how easy Express makes to build a server. If you are interested to learn how to build a server with the built-in modules, you can check out this course from Pirple."),(0,a.kt)("h2",{id:"does-express-js-come-built-in-with-node-js"},"Does Express JS come built-in with Node JS?"),(0,a.kt)("p",null,"Although Express JS is a hugely popular framework for Node, it does not comes built-in with Node JS. To use this framework you will have to install express via NPM in your node project."),(0,a.kt)("h2",{id:"why-javascript-developers-love-express-js"},"Why JavaScript developers love Express JS?"),(0,a.kt)("p",null,"As mentioned previously that over 93% of the JavaScript developers are satisfied using the Express framework and would love to keep using it. Other than developer satisfaction, there are some other concrete reasons for using this framework. One big reason for using Express is that the framework is minimal and unopinionated. By this, it means, that with Express you can structure the app any way you want. Let me share what I mean by this."),(0,a.kt)("h3",{id:"express-js-is-minimal-and-unopinionated"},"Express JS is minimal and unopinionated"),(0,a.kt)("p",null,"According to the official Express JS homepage, it\u2019s a \u201cFast, unopinionated, minimalist web framework for Node.js\u201d (ExpressJS, 2020). Express uses less overhead in the core framework so that makes it minimal and a good choice for building out large web applications. You don\u2019t want to have a framework that fills your codebase with lots of bloatware that you are never gonna use. With minimal code, the framework will not slow down your entire application."),(0,a.kt)("p",null,"Express JS is fast because of minimal footprint, but it also helps you build a server quickly. With a few lines of code, you can create a simple web server. With some more lines, you can create routes. When I went to create a server using the core Node modules, I realized how long and how many lines of code and logic it takes just to serve a \u201cHello World\u201d page. This made me realize how quick and easy it is to build a server with a simple Express JS module."),(0,a.kt)("p",null,"Express is unopinionated and does not dictate you on how to structure your web applications. With Express you can structure your app any way you want; connect to any type of databases like MySQL, MongoDB or PostgreSQL; pick and use the view engine that you like the most such as pug, ejs, handlebars, mustache and many more."),(0,a.kt)("p",null,"When you have a specific need to fulfill you can pick another framework that best suits your needs. But did you know that other popular frameworks are actually built with Express?"),(0,a.kt)("h3",{id:"other-frameworks-are-built-on-express-js"},"Other frameworks are built on Express JS"),(0,a.kt)("p",null,"There are dozens of frameworks out there in the JavaScript ecosystem (Node.js Frameworks, 2020) and you know what, almost all of them are built on top of the core Express JS framework. Popular frameworks such as NestJS, Sails, Feathers JS, Loopback, and Graphql-yoga are among the few that are built using Express (ExpressJS, 2020). Another alternative framework to Node is Koa JS that is created by the same people who created Express JS. This shows the dominance of one single framework in the Node ecosystem."),(0,a.kt)("p",null,"If you are just getting started with Node and you don\u2019t know where to start, you can safely pick Express JS. Then when you are leveling up and know what exactly you need, you can pick up other frameworks."),(0,a.kt)("h3",{id:"companies-using-express-js"},"Companies using Express JS"),(0,a.kt)("p",null,"Of the top 10,000 websites on the internet, about 942 (9.42%) of the websites use Express JS (BuiltWith, 2020). This includes sites and services like PayPal, Glassdoor, Windows, Accenture, IBM, FOX Sports, Myntra, Uber, Yandex and many more (ExpressJS, 2020). Large companies using Express in their production application is a good enough reason to choose the Express framework and one of the dominating factors why people use it."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Express JS makes it super simple to build routes, connect to the database, work with middlewares and serve dynamic HTML pages to build out web servers. It\u2019s a fantastic tool that can speed up your Node development when you are just starting out. So I suggest you go ahead and give Express a try. Here are some steps to help you along the way,"),(0,a.kt)("p",null,"Take a look at the Express JS documentation\nBuild a Node server using Express JS\nLeave a comment on this post and let me know what you are going to build"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Express Usage Statistics. BuiltWith.com (2020). Retrieved January 29, 2020, from ",(0,a.kt)("a",{parentName:"li",href:"https://trends.builtwith.com/framework/Express"},"https://trends.builtwith.com/framework/Express")),(0,a.kt)("li",{parentName:"ol"},"Companies using Express in production. Expressjs.com (2020). Retrieved January 29, 2020, from ",(0,a.kt)("a",{parentName:"li",href:"https://expressjs.com/en/resources/companies-using-express.html"},"https://expressjs.com/en/resources/companies-using-express.html")),(0,a.kt)("li",{parentName:"ol"},"Frameworks built on Express. Expressjs.com (2020). Retrieved January 29, 2020, from ",(0,a.kt)("a",{parentName:"li",href:"https://expressjs.com/en/resources/frameworks.html"},"https://expressjs.com/en/resources/frameworks.html")),(0,a.kt)("li",{parentName:"ol"},"The State of JavaScript: Backend Frameworks. State of JS (2019). Retrieved January 29, 2020, ",(0,a.kt)("a",{parentName:"li",href:"https://2019.stateofjs.com/back-end/"},"https://2019.stateofjs.com/back-end/")),(0,a.kt)("li",{parentName:"ol"},"Node.js Frameworks. (2020). Retrieved January 29, 2020, from ",(0,a.kt)("a",{parentName:"li",href:"http://nodeframework.com/"},"http://nodeframework.com/"))))}c.isMDXComponent=!0}}]);