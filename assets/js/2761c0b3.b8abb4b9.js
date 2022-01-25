"use strict";(self.webpackChunktamalweb=self.webpackChunktamalweb||[]).push([[7754],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5569:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={slug:"deleting-an-item-from-mongodb-mongoose-by-user-permission",title:"Deleting an Item From MongoDB Mongoose By User Permission",authors:"tamalweb",tags:["nodejs"]},s=void 0,d={permalink:"/tamalwebsite/deleting-an-item-from-mongodb-mongoose-by-user-permission",editUrl:"https://github.com/tamalweb/tamalwebsite/tree/master/blog/2018/6-7-deleting-an-item-from-mongodb-mongoose-by-user-permission/index.md",source:"@site/blog/2018/6-7-deleting-an-item-from-mongodb-mongoose-by-user-permission/index.md",title:"Deleting an Item From MongoDB Mongoose By User Permission",description:"The first thing you learn when building a web application is CRUD, Create Read, Update and Destroy. I was learning Node.js to build the backend of my application. The first few lessons were about creating data, and then editing it.",date:"2018-06-07T00:00:00.000Z",formattedDate:"June 7, 2018",tags:[{label:"nodejs",permalink:"/tamalwebsite/tags/nodejs"}],readingTime:2.515,truncated:!0,authors:[{name:"Tamal Web",title:"Frontend Engineer, author of this blog",url:"/about",imageURL:"/img/tamalweb.jpg",key:"tamalweb"}],prevItem:{title:"Why I am not a Fanboy of JavaScript",permalink:"/tamalwebsite/why-i-am-not-a-fanboy-of-javascript"},nextItem:{title:"Things I Learned While Building a Personal Project",permalink:"/tamalwebsite/things-i-learned-while-building-a-personal-project"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The first thing you learn when building a web application is ",(0,a.kt)("strong",{parentName:"p"},"CRUD"),", Create Read, Update and Destroy. I was learning Node.js to build the backend of my application. The first few lessons were about creating data, and then editing it."),(0,a.kt)("p",null,"In MongoDB mongoose, there are some handy commands for creating, editing items. Let\u2019s say I have a blog post which I created. To edit it, I call the ",(0,a.kt)("inlineCode",{parentName:"p"},".findOneAndUpdate()")," method for editing the existing collection."),(0,a.kt)("p",null,"I soon figured out there must be a ",(0,a.kt)("inlineCode",{parentName:"p"},".removeOne()")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".deleteOne()")," method to delete an item from the database collection."),(0,a.kt)("p",null,"I gave that a try."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"deleting post",src:n(699).Z})),(0,a.kt)("p",null,"I created a controller to delete a collection, with some trial and error I was able to figure out the command for deleting a blog post is running the ",(0,a.kt)("inlineCode",{parentName:"p"},".deleteOne()")," method on my Blog object."),(0,a.kt)("p",null,"In my router, I used a GET method for this delete option. Anytime I call the delete route, the post with that ID will be deleted."),(0,a.kt)("p",null,"This week I am building a twitter clone with Node.js. Here I have a bunch of tweets posted by bunch of users."),(0,a.kt)("p",null,"Now here\u2019s the problem, anyone can delete a tweet with the delete button, even the people who are not even logged in."),(0,a.kt)("p",null,"You can type in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Site.com/delete/5b16d5ac27542f10343e2717")," and can manually delete any tweet from the database, because it\u2019s a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," request."),(0,a.kt)("p",null,"To fix this issue, I added a controller to check if the user is logged in to complete this action."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"router.get(\n  '/delete/:id',\n  authController.isLoggedIn,\n  tweetController.deleteTweet\n)\n")),(0,a.kt)("p",null,"Okay, now only the logged in users can delete a tweet. But the problem was still there, anyone can delete any tweet."),(0,a.kt)("p",null,"So I have to use a permission for deleting. Only allow the owner of that tweet to be able to delete it."),(0,a.kt)("p",null,"I modeled this code after Wes Bos\u2019 LearnNode course. In video #29 he shows how to display the edit screen only to the owner of that store."),(0,a.kt)("p",null,"The code looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"code",src:n(4619).Z})),(0,a.kt)("p",null,"So first I load up the store from the database and check for if the user actually owns the store. If the user owns the store, only then I will render the edit store page."),(0,a.kt)("p",null,"However this won\u2019t work with the delete action. You see if I call .deleteOne()\ufeff, then the tweet will be already deleted."),(0,a.kt)("p",null,"So instead I called the tweet first and then checked if the user owned that tweet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"exports.deleteTweet = async (req, res) => {\n  try {\n    const tweet = await Tweet.findOne({ _id: req.params.id })\n    if (!req.user.username === 'tamal') {\n      confirmedOwner(tweet, req.user)\n    }\n\n    const deleteTweet = await Tweet.deleteOne(tweet)\n    res.redirect('back')\n  } catch (e) {\n    console.log(e)\n    res.redirect('/?msg=Failed to delete')\n  }\n}\n")),(0,a.kt)("p",null,"Once he/she is a verified owner, only then run the next command which is deleting the tweet."),(0,a.kt)("p",null,"This made things bulletproof for now. Only the logged in users, who actually owned the tweet can delete it."),(0,a.kt)("p",null,"The final step was to only show the \u201cDelete\u201d link to the owner of that tweet."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"delete link",src:n(1229).Z})))}m.isMDXComponent=!0},699:function(e,t,n){t.Z=n.p+"assets/images/1-d3a03f7d5cdbfc3ab5669fb895f9db37.png"},4619:function(e,t,n){t.Z=n.p+"assets/images/3-5a6c35e6b220ca822bd75b637a1251f5.png"},1229:function(e,t,n){t.Z=n.p+"assets/images/5-b2c063e34e4e3aa3193706542f0f62f9.png"}}]);