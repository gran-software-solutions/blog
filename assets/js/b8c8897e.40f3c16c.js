"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[213],{5680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>u});var t=a(6540);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(a),d=s,u=g["".concat(l,".").concat(d)]||g[d]||m[d]||r;return a?t.createElement(u,o(o({ref:n},c),{},{components:a})):t.createElement(u,o({ref:n},c))}));function u(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[g]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6758:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=a(8168),s=(a(6540),a(5680));const r={title:"To Gzip or Not to Gzip? A Guide to Using Compression in Vert.x REST APIs",authors:"dodalovicgran",tags:["REST API","technology","vertx"],enableComments:!0},o=void 0,i={permalink:"/2023/05/16/gzip-compression-guide-vertx-rest-api",source:"@site/blog/2023-05-16-gzip-compression-guide-vertx-rest-api/index.mdx",title:"To Gzip or Not to Gzip? A Guide to Using Compression in Vert.x REST APIs",description:"Elephants",date:"2023-05-16T00:00:00.000Z",formattedDate:"May 16, 2023",tags:[{label:"REST API",permalink:"/tags/rest-api"},{label:"technology",permalink:"/tags/technology"},{label:"vertx",permalink:"/tags/vertx"}],readingTime:4.465,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",title:"Software Engineer @ GRAN Software Solutions GmbH",url:"https://github.com/dodalovicgran",imageURL:"https://github.com/dodalovicgran.png",key:"dodalovicgran"}],frontMatter:{title:"To Gzip or Not to Gzip? A Guide to Using Compression in Vert.x REST APIs",authors:"dodalovicgran",tags:["REST API","technology","vertx"],enableComments:!0},prevItem:{title:"HATEOAS Hands-on for Backend and Frontend",permalink:"/2023/05/24/hateoas-hands-on-backend-frontend"},nextItem:{title:"Why you should design your REST APIs with concurrency in mind",permalink:"/2023/03/27/concurrency-in-rest-apis"}},l={authorsImageUrls:[void 0]},p=[{value:"What is gzip?",id:"what-is-gzip",level:2},{value:"Benefits of enabling gzip compression",id:"benefits-of-enabling-gzip-compression",level:2},{value:"Drawbacks of enabling gzip compression",id:"drawbacks-of-enabling-gzip-compression",level:2},{value:"Scenarios where disabling gzip compression may be preferable",id:"scenarios-where-disabling-gzip-compression-may-be-preferable",level:2},{value:"Example code",id:"example-code",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},g="wrapper";function m(e){let{components:n,...r}=e;return(0,s.yg)(g,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Elephants",src:a(6664).A,width:"1024",height:"1024"})),(0,s.yg)("p",null,"Gzip compression is a way of making files smaller on the web, which can improve the performance and efficiency of your vert.x based REST APIs. However, it also has some drawbacks and trade-offs that\nyou need to consider."),(0,s.yg)("p",null,"In this blog post, I will explain what gzip compression is, how it works, and how you can enable or disable it in your vert.x REST API.\nI will also discuss the pros and cons of enabling or disabling gzip compression in different scenarios."),(0,s.yg)("h2",{id:"what-is-gzip"},"What is gzip?"),(0,s.yg)("p",null,"Gzip compression is a way of making files smaller so they can travel faster on the web. It is like putting clothes in a vacuum bag and sucking out the air to make them take up less space. Gzip compression can make\nfiles up to 10 times smaller, depending on what\u2019s in them."),(0,s.yg)("p",null,"Gzip compression works by using a special code that finds and removes parts of the files that are repeated or not needed. It also adds some information at the beginning and end of the files to tell how they\nwere compressed and how to unpack them. The files are then divided into smaller pieces that are easier to send and receive."),(0,s.yg)("p",null,"Gzip compression is used by many websites and browsers, and can make web pages load faster and use less data. When a browser asks for a web page, it can tell the website if it can handle gzip compression.\nIf so, the website can pack the web page using gzip and send it to the browser. The browser can then unpack the web page using gzip and show it as usual. This way, both the website and the browser can save\ntime and money."),(0,s.yg)("h2",{id:"benefits-of-enabling-gzip-compression"},"Benefits of enabling gzip compression"),(0,s.yg)("p",null,"Here are the main benefits of enabling gzip compression:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Faster page load times"),": Gzip compression can make web pages load faster because they are smaller and take less time to travel over the network."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Reduced bandwidth usage"),": Gzip compression can reduce the amount of data that is transferred over the network between the website and the browser."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Improved user experience"),": Gzip compression can improve the user experience by making web pages load faster and use less data."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Improved SEO ranking"),": Gzip compression can improve the SEO ranking of a website because it makes web pages load faster and use less data (doesn't matter for REST APIs)."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Compatibility with most browsers and clients"),": Gzip compression is supported by most browsers and clients, so it can be used on most websites.")),(0,s.yg)("h2",{id:"drawbacks-of-enabling-gzip-compression"},"Drawbacks of enabling gzip compression"),(0,s.yg)("p",null,"Here are the main drawbacks of enabling gzip compression:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Increased CPU and memory usage")," on the server side, as the server has to compress the response before sending it to the client. This can affect the\nperformance and scalability of the server, especially if it has to handle many requests or large files."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("strong",{parentName:"li"},"Potential security risks and vulnerabilities"),", as some malicious clients may try to exploit gzip compression to launch attacks such as compression\noracle attacks or BREACH attacks . These attacks can allow an attacker to steal sensitive information from encrypted connections by manipulating the\ncompressed data."),(0,s.yg)("li",{parentName:"ul"},"Possible issues with ",(0,s.yg)("strong",{parentName:"li"},"caching and content negotiation"),", as some proxies or intermediaries may not support or respect gzip compression . This can result\nin corrupted or stale responses, or responses that do not match the client's preferences.")),(0,s.yg)("h2",{id:"scenarios-where-disabling-gzip-compression-may-be-preferable"},"Scenarios where disabling gzip compression may be preferable"),(0,s.yg)("p",null,"Here are some scenarios where disabling gzip compression on web servers may be preferable are:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"When the ",(0,s.yg)("strong",{parentName:"li"},"response body is already compressed or small"),", such as images, videos, or other binary files. In this case, gzip compression may not\nreduce the file size significantly, and may even increase it due to the overhead of the gzip header and trailer."),(0,s.yg)("li",{parentName:"ul"},"When the client ",(0,s.yg)("strong",{parentName:"li"},"does not support or accept gzip encoding"),", such as some older browsers or proxies. In this case, gzip compression may cause\ncompatibility issues or errors, and the server may need to send an uncompressed version of the response instead."),(0,s.yg)("li",{parentName:"ul"},"When the ",(0,s.yg)("strong",{parentName:"li"},"server resources are limited or overloaded"),", such as during peak traffic or high demand. In this case, gzip compression may consume\ntoo much CPU and memory on the server side, and affect the performance and availability of the server.")),(0,s.yg)("h2",{id:"example-code"},"Example code"),(0,s.yg)("p",null,"To see how gzip compression works with vert.x REST APIs, you need to clone the example ",(0,s.yg)("u",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/gran-software-solutions/gzip-rest-vertx"},"GitHub repository")),".\nAfter cloning the repository, you can start the application locally with ",(0,s.yg)("inlineCode",{parentName:"p"},"GZIP_ENABLED")," set to either true or false (to enable or disable server compression), for instance:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"GZIP_ENABLED=true ./gradlew run\n")),(0,s.yg)("p",null,"Test gzip compression with curl, by firing the following request:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"curl -H \"Accept-Encoding: gzip\" \\\n  -so /dev/null http://localhost:8888/users/b91acf06-021e-44cf-a4e5-a815934ff004 \\\n  -w '%{size_download}\\n'\n\n# response size in bytes\n133\n")),(0,s.yg)("p",null,"You should get a response size of ",(0,s.yg)("inlineCode",{parentName:"p"},"133")," bytes, which is smaller than the response size of ",(0,s.yg)("inlineCode",{parentName:"p"},"143")," bytes when gzip compression is disabled on the server side."),(0,s.yg)("h2",{id:"conclusion"},"Conclusion"),(0,s.yg)("p",null,"Gzip compression can make your REST APIs faster and more efficient, but it also has some drawbacks and trade-offs. The best advice is to\nenable gzip compression only when it is necessary, and disable it otherwise. This will help you avoid potential issues with performance, security and compatibility."),(0,s.yg)("p",null,"Thank you for reading and please share your feedback below."))}m.isMDXComponent=!0},6664:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/elephants-c93ea2d8ac48762d0247f685fc0db875.png"}}]);