"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[9456],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var A=a.createContext({}),s=function(e){var t=a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(A.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,A=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=s(n),c=l,p=h["".concat(A,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(p,o(o({ref:t},d),{},{components:n})):a.createElement(p,o({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=h;var r={};for(var A in t)hasOwnProperty.call(t,A)&&(r[A]=t[A]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7300:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return A},metadata:function(){return s},assets:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={slug:"things-i-learned-while-building-a-personal-project",title:"Things I Learned While Building a Personal Project",authors:"tamalweb",tags:["javascript","project"]},A=void 0,s={permalink:"/tamalwebsite/things-i-learned-while-building-a-personal-project",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2018/5-28-things-i-learned-while-building-a-personal-project/index.md",source:"@site/blog/2018/5-28-things-i-learned-while-building-a-personal-project/index.md",title:"Things I Learned While Building a Personal Project",description:"Last week I ran into a real world problem.",date:"2018-05-28T00:00:00.000Z",formattedDate:"May 28, 2018",tags:[{label:"javascript",permalink:"/tamalwebsite/tags/javascript"},{label:"project",permalink:"/tamalwebsite/tags/project"}],readingTime:4.4,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],prevItem:{title:"Deleting an Item From MongoDB Mongoose By User Permission",permalink:"/tamalwebsite/deleting-an-item-from-mongodb-mongoose-by-user-permission"},nextItem:{title:"Quitting is important",permalink:"/tamalwebsite/quitting-is-important"}},d={authorsImageUrls:[void 0]},u=[{value:"The initial idea:",id:"the-initial-idea",children:[],level:2},{value:"Tracking how many days passed",id:"tracking-how-many-days-passed",children:[],level:2},{value:"Saving the data",id:"saving-the-data",children:[],level:2},{value:"Making it work",id:"making-it-work",children:[],level:2},{value:"Designing the frontend &amp; putting it all together",id:"designing-the-frontend--putting-it-all-together",children:[],level:2},{value:"Making it general purpose",id:"making-it-general-purpose",children:[],level:2},{value:"Final thoughts",id:"final-thoughts",children:[],level:2}],h={toc:u};function c(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Last week I ran into a real world problem."),(0,i.kt)("p",null,"It\u2019s hard to keep track of my washed and dirty clothes. I have no idea how long it\u2019s been since last wash. So I needed to track them by making a list and counting the dates."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"laundry list",src:n(9732).Z})),(0,i.kt)("p",null,"The first idea is obviously writing them down on paper, but then I thought why not use my JavaScript skills to build an app to track it?"),(0,i.kt)("h2",{id:"the-initial-idea"},"The initial idea:"),(0,i.kt)("p",null,"It\u2019s a one page app with a To-Do list kind of functionality. I want to be able to add and remove items. In this context, my items are the clothes."),(0,i.kt)("p",null,"I also want to add a date into that clothe and count how many days have been passed."),(0,i.kt)("p",null,"Doing a quick google search revealed that there is a Date object in JavaScript which I can tap into."),(0,i.kt)("p",null,"So for every clothe, I attached the current date into it."),(0,i.kt)("p",null,"I created an array of objects. Each object being the item of clothing that has an item text and a date field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const sampleData = [\n  { text: 'Sample Item', date: '2018-05-21T14:53:18.883Z', done: false },\n  { text: 'Another Sample', date: '2018-05-21T14:53:26.899Z', done: false },\n]\n")),(0,i.kt)("p",null,"For now I just need these two things."),(0,i.kt)("h2",{id:"tracking-how-many-days-passed"},"Tracking how many days passed"),(0,i.kt)("p",null,"In my mind I thought I had to do some calculations and save the new data in a new field for how many days passed. Then I remembered, there is a cool library called Moment.js."),(0,i.kt)("p",null,"If I put the date into the moment function, it will show a nice little relative time like ",(0,i.kt)("strong",{parentName:"p"},"2 days ago")," or ",(0,i.kt)("strong",{parentName:"p"},"7 days from now.")),(0,i.kt)("p",null,"So I quickly implemented momentjs into my application. This saved me a lot of work trying to calculate the relative days."),(0,i.kt)("h2",{id:"saving-the-data"},"Saving the data"),(0,i.kt)("p",null,"So for an application like this, the data has to be stored somewhere. I can\u2019t just open the app, add items and when I refresh the page it\u2019s all gone."),(0,i.kt)("p",null,"I know how to add data into database, but for that I will need to make it into a Node.js app with MongoDB and specialized web hosting. It\u2019s just a side project, I don\u2019t want to go in all the trouble for this."),(0,i.kt)("p",null,"I searched online and found there is an api called localStorage."),(0,i.kt)("p",null,"So with localStorage you can save some text data into a user\u2019s browser."),(0,i.kt)("p",null,"This is just the thing I need for my app. So I went ahead and look into ways to implement it."),(0,i.kt)("p",null,"So when I add items into my list, it will be stored in my web browser as local storage."),(0,i.kt)("h2",{id:"making-it-work"},"Making it work"),(0,i.kt)("p",null,"I coded the basic implementation of the app, but I was running into problems. The main problem I faced was, I created a variable called \u201citems\u201d and this variable contained the array of objects. The object was grabbed from the local storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const items = JSON.parse(localStorage.getItem('items'))\n")),(0,i.kt)("p",null,"But when you open the app for the first time, there is no local storage and no data in that variable, this led to huge problems."),(0,i.kt)("p",null,"I found Wes Bos had a ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YL1F4dCUlLc"},"dedicated video tutorial")," on localStorage api. I looked into the tutorial and it helped a lot to build out my app. His walkthrough helped build this app in a much more efficient way."),(0,i.kt)("p",null,"So to solve my initial problem, I set my items variable to the data found from localStorage. But when there is no local storage, it will fall back to an empty array ","[ ]","."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const items = JSON.parse(localStorage.getItem('items')) || []\n")),(0,i.kt)("h2",{id:"designing-the-frontend--putting-it-all-together"},"Designing the frontend & putting it all together"),(0,i.kt)("p",null,"After my app was working as I wanted, I went on to my favorite part: the design. I worked a few hours to come up with a sleek user interface."),(0,i.kt)("p",null,"I built the items into an ordered list, so they come with numbers."),(0,i.kt)("p",null,"I did some CSS work to make the app look pretty."),(0,i.kt)("h2",{id:"making-it-general-purpose"},"Making it general purpose"),(0,i.kt)("p",null,"I built this glorified ToDo list to track my laundry, but not everyone will be using it for the same purpose. So I went ahead and made it more \u201cgeneral\u201d"),(0,i.kt)("p",null,"I made the title into something which the user can change."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"change the title",src:n(6683).Z})),(0,i.kt)("p",null,"I made the title into a form field and when the user clicks on it, he/she can change it to something else."),(0,i.kt)("p",null,"I also made the website title tag into the title of the app and also saved it into local storage."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"website title tag",src:n(7028).Z})),(0,i.kt)("p",null,"I did it by setting the document.title property to my variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// 1. Getting the title from local storage OR fallback to default title\nlet title = localStorage.getItem('localTitle') || 'Laundry List \u270e Edit this!'\n// 2. Getting the title from the form\ndocument.querySelector('[name=title]').value = title\n// 3. Setting the document title tag\ndocument.title = title\n")),(0,i.kt)("h2",{id:"final-thoughts"},"Final thoughts"),(0,i.kt)("p",null,"I had fun working on this little thing. It\u2019s really useful too! I am using it to properly track my laundry."),(0,i.kt)("p",null,"I am also going to work on a portable mobile version, so people can use it offline and in mobile too."),(0,i.kt)("p",null,"This little side project taught me so many new things. You can check out the ",(0,i.kt)("a",{parentName:"p",href:"https://tamalweb.github.io/ClothesWashTracker/"},"finished version over here"),"."))}c.isMDXComponent=!0},9732:function(e,t,n){t.Z=n.p+"assets/images/1-e0822a16b8f9ce78116f04a1c2f86b30.png"},6683:function(e,t){t.Z="data:image/png;base64,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"},7028:function(e,t){t.Z="data:image/png;base64,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"}}]);