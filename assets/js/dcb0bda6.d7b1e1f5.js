"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[931],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1928:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={slug:"thoughts-after-building-a-reddit-clone-in-mern-node-react",title:"Thoughts after Building a Reddit Clone in MERN (Node & React)",authors:"tamalweb",tags:["project","nodejs"]},l=void 0,d={permalink:"/tamalwebsite/thoughts-after-building-a-reddit-clone-in-mern-node-react",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2018/9-22-thoughts-after-building-a-reddit-clone-in-mern-node-react/index.md",source:"@site/blog/2018/9-22-thoughts-after-building-a-reddit-clone-in-mern-node-react/index.md",title:"Thoughts after Building a Reddit Clone in MERN (Node & React)",description:"So last week I put together a reddit like site, a clone of reddit as you can say. This is my first MERN stack application I am putting out to the world. I pretty much did a rush work and cut a lot of corners, just to get it out there and see how it goes.",date:"2018-09-22T00:00:00.000Z",formattedDate:"September 22, 2018",tags:[{label:"project",permalink:"/tamalwebsite/tags/project"},{label:"nodejs",permalink:"/tamalwebsite/tags/nodejs"}],readingTime:3.005,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],prevItem:{title:"Specializing in JavaScript",permalink:"/tamalwebsite/specializing-in-javascript"},nextItem:{title:"Finally I got to Build a MERN Stack Application!",permalink:"/tamalwebsite/finally-i-got-to-build-a-mern-stack-application"}},u={authorsImageUrls:[void 0]},p=[{value:"Features",id:"features",children:[],level:2},{value:"Some thoughts after publishing it online:",id:"some-thoughts-after-publishing-it-online",children:[],level:2},{value:"Comments:",id:"comments",children:[],level:2}],c={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"So last week I put together a reddit like site, a clone of reddit as you can say. This is my first MERN stack application I am putting out to the world. I pretty much did a rush work and cut a lot of corners, just to get it out there and see how it goes."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"A user can get a display name. This time I did not use any user registration mechanism. This also lead to some spam, which I will share in the rest of this post."),(0,i.kt)("p",null,"The user can post something and vote up and down. Users can vote as many times as she wants, again some lazy coding."),(0,i.kt)("p",null,"It was more like a prototype of how the app would look and feel like. I didn\u2019t do much work in the backend other than connecting the database."),(0,i.kt)("p",null,"So I was happy to put it out there, hosting it on heroku."),(0,i.kt)("p",null,"Both my front end client code and backend server code is hosted on Heroku. After deploying I was getting a \u2018Not Found\u2019 error."),(0,i.kt)("p",null,"After some digging, I found that the \u2018build\u2019 folder in the react app gets ignored by default in the gitignore file. So I put that backup and now my app it up!"),(0,i.kt)("h2",{id:"some-thoughts-after-publishing-it-online"},"Some thoughts after publishing it online:"),(0,i.kt)("p",null,"Using it on localhost vs actual live deployment has day and night difference."),(0,i.kt)("p",null,"The app loads the posts after it publishes into the database, so this makes the app lose its react-ness. So in future work I will post the data to the state first, so when someone submits a post it gets displayed instantly and then sent to the database in the background."),(0,i.kt)("p",null,"The site needs a loading indicator. Currently, the page stays dumb for a few seconds until all the post gets loaded."),(0,i.kt)("p",null,"When I shared the site with the dev community, people started to spam the site. This is the first time I went to a headless approach. My backend gets data pushed to it via REST API\u2019s. I did not secure my API\u2019s this means anyone can send a request to it and manipulate the database. This + not having any validations led to a lot of post spam."),(0,i.kt)("p",null,"After a few days I dig into the code and added some validation mechanisms to the code."),(0,i.kt)("h2",{id:"comments"},"Comments:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Christophe:")," Hi Tamal,\nReading your awesome blogposts.\nI following the same way as you. Learning the basics from a lot of (web)languages (html,css,JS,php,perl,Sass,\u2026) and have experience with a lot of cms\u2019systems like processwire, Drupal, Get Simple CMS, GRAV CMS, \u2026 the last 3 years Building WP websites and do small theme and plugin development work.\nI\u2019m not an advanced programmer, but is difficult focus on one programming language.\nIn the feature i will try do a different thing and will do more developing webapps. So with this in mind, trying learn NodeJS the last weeks.\nSearching the internet about NodeJS articles, bought a book about NodeJS and looking a lot of NodeJS video\u2019s. At the moment i can build a (more advanced) \u2018hello world\u2019 app in NodeJS. I understand now what MEAN-stack is and other basic stuff. Explore the Express Generator and so on. But, there is a lot of work for me while developing like a pro. So i follow your blog with a lot of interest. Last but not least, sorry for my poor English ?\nGrtz from Belgium \ud83d\ude09"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"All the best Chris, try to stick to one language/tech. Node is very good, but it can be overwhelming. Just keep on grinding and building stuff.")))}h.isMDXComponent=!0}}]);