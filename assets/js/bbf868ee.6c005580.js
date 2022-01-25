"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[5506],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return g}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=o,m=d["".concat(r,".").concat(g)]||d[g]||u[g]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2721:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return r},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return g}});var n=a(7462),o=a(3366),i=(a(7294),a(3905)),s=["components"],l={slug:"google-analytics-with-reactjs",title:"How to Add the New Google Analytics 4 in Reactjs App",authors:"tamalweb",tags:["reactjs","google"]},r=void 0,c={permalink:"/google-analytics-with-reactjs",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2021/11-19-google-analytics-with-reactjs/index.md",source:"@site/blog/2021/11-19-google-analytics-with-reactjs/index.md",title:"How to Add the New Google Analytics 4 in Reactjs App",description:'You probably know about the react-ga npm package but the sad news is, it does not work with the latest Google Analytics 4 version. It works with the old UA-0000-01 tags, but not with the G-XXXXXX tags. I\u2019m sure an updated version of the package will solve it, but for the time being, I found a better and a working method of adding GA to your React application. And it\u2019s so obvious, you will feel like, "why didn\u2019t I think about it before?"',date:"2021-11-19T00:00:00.000Z",formattedDate:"November 19, 2021",tags:[{label:"reactjs",permalink:"/tags/reactjs"},{label:"google",permalink:"/tags/google"}],readingTime:4.09,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],prevItem:{title:"Best Practices on How to Compress Images For Reactjs",permalink:"/compress-images-reactjs"},nextItem:{title:"What is null in JavaScript?",permalink:"/null-javascript"}},p={authorsImageUrls:[void 0]},u=[{value:"Step-by-Step Guide to Adding Script Tag in Reactjs App",id:"step-by-step-guide-to-adding-script-tag-in-reactjs-app",children:[],level:2},{value:"How To Track Custom Events in Reactjs App?",id:"how-to-track-custom-events-in-reactjs-app",children:[],level:2},{value:"How to See the Custom Even Parameters in GA Dashboard?",id:"how-to-see-the-custom-even-parameters-in-ga-dashboard",children:[],level:2},{value:"Key Takaways:",id:"key-takaways",children:[],level:2}],d={toc:u};function g(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You probably know about the react-ga npm package but the sad news is, it does not work with the latest Google Analytics 4 version. It works with the old ",(0,i.kt)("inlineCode",{parentName:"p"},"UA-0000-01")," tags, but not with the ",(0,i.kt)("inlineCode",{parentName:"p"},"G-XXXXXX"),' tags. I\u2019m sure an updated version of the package will solve it, but for the time being, I found a better and a working method of adding GA to your React application. And it\u2019s so obvious, you will feel like, "why didn\u2019t I think about it before?"'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"featured",src:a(1841).Z})),(0,i.kt)("p",null,"So how to add the new Google Analytics 4 in Reactjs app? ",(0,i.kt)("strong",{parentName:"p"},"You simply copy the Google Analytics script tag into the ",(0,i.kt)("inlineCode",{parentName:"strong"},"<head>")," section of your index.html file in the public directory.")),(0,i.kt)("p",null,"Yeah, I know right, it\u2019s that obvious. I found it by trial and error. If you stick around, I will show you a step-by-step guide and also give you a glimpse at how did I figure it out."),(0,i.kt)("h2",{id:"step-by-step-guide-to-adding-script-tag-in-reactjs-app"},"Step-by-Step Guide to Adding Script Tag in Reactjs App"),(0,i.kt)("p",null,"Create a new property in Google Analytics."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4329).Z})),(0,i.kt)("p",null,"Don\u2019t select advanced and Universal tracking. Just click next."),(0,i.kt)("p",null,"Enter the usual business info and move on to create."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6124).Z})),(0,i.kt)("p",null,"Now after the setup, pick the \u201cweb\u201d data stream."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(601).Z})),(0,i.kt)("p",null,"Enter your website URL and continue."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1747).Z})),(0,i.kt)("p",null,"Select the Global site tag (",(0,i.kt)("inlineCode",{parentName:"p"},"gtag.js"),") option and"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4771).Z})),(0,i.kt)("p",null,"copy the code."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5630).Z})),(0,i.kt)("p",null,"Open your React project directory. For me, I created the app using create react app. Go to public > index.html."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4028).Z})),(0,i.kt)("p",null,"Put the GA script tag inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," tag. I am putting this as the last item of the head tag, after the site title."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1350).Z})),(0,i.kt)("p",null,"Build your project and publish. For me, I have set up my project in Netlify with GitHub CI. So every time I push the changes to my Github main branch, it will be deployed automatically."),(0,i.kt)("p",null,"Now visit your website from your browser or mobile device and verify that Google Analytics is registering the views. If you can see the views, that means you have successfully set up your analytics with the React app."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6864).Z})),(0,i.kt)("h2",{id:"how-to-track-custom-events-in-reactjs-app"},"How To Track Custom Events in Reactjs App?"),(0,i.kt)("p",null,"If you want to track custom events you can use this npm package ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ga-gtag"},"ga-gtag")," which integrates Google Analytics 4 with your Reactjs application."),(0,i.kt)("p",null,"Recently I created a ",(0,i.kt)("a",{parentName:"p",href:"https://reactionpoll.com/"},"poll maker app")," and I wanted to know how many people downloaded the polls using my app."),(0,i.kt)("p",null,"GA custom events come in handy for this type of tracking. ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/gtagjs/events"},"Learn more about custom events from GA website"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"gtag('event', 'download_poll_image', {\n  poll_title: 'some value',\n})\n")),(0,i.kt)("p",null,"Previously we added the GA script tag into the head section of our index.html file, but we can\u2019t use gtag inside our JS file because it\u2019s not defined. This is where this handy package comes in."),(0,i.kt)("p",null,"Just install the package using npm install ga-gtag and import it into your project file where you will be tracking the event."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import gtag from 'ga-gtag'\n")),(0,i.kt)("p",null,"Now since I want to track the image downloads, I will add this custom method inside my image download function."),(0,i.kt)("p",null,"This is how the gtag event function looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function trackDownloadEvent() {\n  gtag('event', 'download_poll_image', {\n    poll_title: 'some title',\n  })\n}\n")),(0,i.kt)("p",null,"See I have named the event ",(0,i.kt)("inlineCode",{parentName:"p"},"download_poll_image")," and inside I am tracking the ",(0,i.kt)("inlineCode",{parentName:"p"},"poll_title")," parameter. This way, I will know how many times a new image has been downloaded and what were the titles of the polls that are generated."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(6024).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Side note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When I used this package to install the gtag instead of pasting the script tag, I was not receiving any data for new users. That\u2019s why I decided to manually copy-paste the script tag and use this package just for tracking custom events."))),(0,i.kt)("h2",{id:"how-to-see-the-custom-even-parameters-in-ga-dashboard"},"How to See the Custom Even Parameters in GA Dashboard?"),(0,i.kt)("p",null,"One issue I ran into was, the custom event parameters don\u2019t get saved in Google Analytics 4. So I can see all the ",(0,i.kt)("inlineCode",{parentName:"p"},"download_poll_image")," events, but not the individual poll titles. I did some Googling and found that it will only show up on the real-time pane (not good)."),(0,i.kt)("p",null,"So to make GA save these parameters, you have to mark that event as a conversion for it to store all the parameters you want:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4071).Z})),(0,i.kt)("p",null,"Now Analytics will keep them."),(0,i.kt)("p",null,"If you have come to the end of this post and it helped you with setting up Google Analytics with your React app, then please let me know by tweeting about it."),(0,i.kt)("p",null,"It tells me that I have done a good job and will inspire me to share more cool stuff in the future."),(0,i.kt)("h2",{id:"key-takaways"},"Key Takaways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add Google Analytics tag simply by pasting into the head section of index.html page."),(0,i.kt)("li",{parentName:"ul"},"The react-ga npm package still doesn\u2019t work with the new ",(0,i.kt)("inlineCode",{parentName:"li"},"G-XXXXX")," tags."),(0,i.kt)("li",{parentName:"ul"},"Use gtag npm package to track custom events."),(0,i.kt)("li",{parentName:"ul"},"To persist the custom event parameters, you have to instruct GA.")))}g.isMDXComponent=!0},4329:function(e,t,a){t.Z=a.p+"assets/images/1-b012a71fdd267c7f8b47ab25d481b2d2.png"},6024:function(e,t,a){t.Z=a.p+"assets/images/10-897d58c2e2e323379dceacbcf6f02e97.png"},4071:function(e,t,a){t.Z=a.p+"assets/images/11-fccd41f08be985ab080956471972caeb.png"},6124:function(e,t,a){t.Z=a.p+"assets/images/2-93a37cd497bc28c48d84ec34c9a0b330.png"},601:function(e,t,a){t.Z=a.p+"assets/images/3-5f6f54dccbd02c51293b19513642a879.png"},1747:function(e,t,a){t.Z=a.p+"assets/images/4-ee8222e7576e8bd4c8c6b794a3ddfacb.png"},4771:function(e,t,a){t.Z=a.p+"assets/images/5-608785d7a4cf17c4c93ce9c23ac88898.png"},5630:function(e,t,a){t.Z=a.p+"assets/images/6-53ec50e6cb53591c65576c098e60cb8d.png"},4028:function(e,t,a){t.Z=a.p+"assets/images/7-e19dc46035b62f5d31c98b344118b00f.png"},1350:function(e,t,a){t.Z=a.p+"assets/images/8-0a1ce4039298b9bdece9f0ea4c00aac6.png"},6864:function(e,t,a){t.Z=a.p+"assets/images/9-85cab2a6800f72173673afd997285710.png"},1841:function(e,t,a){t.Z=a.p+"assets/images/featured-c4c54eced3257c95a48a755421aa04b6.png"}}]);