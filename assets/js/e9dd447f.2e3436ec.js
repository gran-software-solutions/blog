"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},924:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=function(e){return void 0!==e.title?a.createElement("figure",null,a.createElement("center",null,a.createElement("img",{src:e.src,alt:e.alt}),a.createElement("figcaption",{style:{textAlign:"center"}},e.title))):a.createElement("img",{src:e.src,alt:e.alt})}},3018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(924);const i={title:"Quarkus as SaaS Backend: Time Tracking App Case Study",authors:"dodalovicgran",tags:["productivity"],enableComments:!0},s=void 0,l={permalink:"/2024/02/02/quarkus-as-saas-backend-time-tracking-app-case-study",editUrl:"https://github.com/gran-software-solutions/blog/tree/main/blog/2024-02-02-quarkus-as-saas-backend-time-tracking-app-case-study/index.mdx",source:"@site/blog/2024-02-02-quarkus-as-saas-backend-time-tracking-app-case-study/index.mdx",title:"Quarkus as SaaS Backend: Time Tracking App Case Study",description:"GRAN Software Solutions is a German company that designs and builds modern back-end solutions.",date:"2024-02-02T00:00:00.000Z",formattedDate:"February 2, 2024",tags:[{label:"productivity",permalink:"/tags/productivity"}],readingTime:6.705,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",title:"Senior engineer @ GRAN Software Solutions GmbH",url:"https://github.com/dodalovicgran",imageURL:"https://github.com/dodalovicgran.png",key:"dodalovicgran"}],frontMatter:{title:"Quarkus as SaaS Backend: Time Tracking App Case Study",authors:"dodalovicgran",tags:["productivity"],enableComments:!0},prevItem:{title:"Weekly Sheetty Scoop\ud83c\udf66 #1",permalink:"/2024/03/22/weekly-sheety-scoop-1"},nextItem:{title:"3 Important Reasons Why I Made My Own Tracking Tool",permalink:"/2024/01/05/3-important-reasons-why-i-made-my-own-tracking-tool"}},u={authorsImageUrls:[void 0]},c=[{value:"Discovering Quarkus",id:"discovering-quarkus",level:2},{value:"Our Backend Development Experience with Quarkus: The Key Features",id:"our-backend-development-experience-with-quarkus-the-key-features",level:2},{value:"Development Journey",id:"development-journey",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GRAN Software Solutions is a German company that designs and builds modern back-end solutions.\nWe work with large automotive clients and others to restructure and create new solutions.\nWe also develop and offer SaaS tools to help us and others in our daily work."),(0,o.kt)("p",null,"One such tool we built for ourselves and others is a time-tracking application called ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"https://sheetty.com"},"Sheetty")),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Frustrated developer",src:n(8791).Z,title:"Frustrated Developer",width:"1024",height:"1024"})),(0,o.kt)("p",null,"We needed to create a time-tracking application because the existing solutions on the market did not meet our specific requirements.\nThey were either not designed for developers lacked the simplicity we needed, or were loaded with unnecessary features.\nWe wanted to build a tool that was perfectly tailored to our needs, using the extensive experience we had gained from working on client projects over the years.\nWe also wanted to create a more modern and user-friendly design, which would be fun to use and incorporate newer technologies such as Quarkus."),(0,o.kt)("p",null,"The main issue we faced with existing time-tracking solutions was the lack of an easy way to switch between clients.\nWe also found that they did not support quick actions or shortcuts, which we were used to, and there was no visual way to see the time entries we made during the day.\nAdditionally, we wanted to track time within the context of contracts signed with our clients in terms of daily rates and contract caps.\nThat's why we decided to create a custom solution to address all of these specific needs."),(0,o.kt)("h2",{id:"discovering-quarkus"},"Discovering Quarkus"),(0,o.kt)("p",null,"When we were choosing the technology stack to use for our backend, our main goal was to use technologies that we were already familiar with, such as the Kotlin programming language, Spring Boot framework, and Postgres database.\nWe also wanted to select an ecosystem that could provide us with libraries for database connectivity, web client, caching, and other similar features.\nAdditionally, we wanted to use a high-performance solution to keep our hosting costs low and avoid high memory requirements."),(0,o.kt)("p",null,"After analyzing various solutions on the market, we decided to use the Quarkus framework as it met all of our requirements."),(0,o.kt)("h2",{id:"our-backend-development-experience-with-quarkus-the-key-features"},"Our Backend Development Experience with Quarkus: The Key Features"),(0,o.kt)("p",null,"We have designed our application architecture to separate the front-end and back-end parts.\nTo secure our back-end APIs in a modern and secure way, we opted to use JSON web tokens, and Quarkus has excellent support for them.\nWe also use role-based security for our APIs, and Quarkus makes it easy for us to implement this.\nWe have different roles in our application, such as regular users and admins, and this information is encoded in our JSON web tokens.\nQuarkus ensures that these tokens are not tampered with or manipulated when they reach our back-end systems."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="@RolesAllowed for authorization of our API endpoints"',title:'"@RolesAllowed',for:!0,authorization:!0,of:!0,our:!0,API:!0,'endpoints"':!0},'@Path("/clients")\n@RolesAllowed("User")\n@Produces(MediaType.APPLICATION_JSON)\n@ApplicationScoped\nclass ClientResource(\n    private val getClientsHandler: GetClientsHandler,\n    private val newClientHandler: NewClientHandler,\n')),(0,o.kt)("p",null,"We relied heavily on rich JSON support to model our data flexibly and delegate much of the functionality to Postgres itself to manipulate the data.\nThis way, we could pass the already-built JSON objects back to the API client, which significantly reduced the time it took to make design decisions in the application code.\nQuarkus provided fantastic support for JSON object APIs.\nWe believe that Postgres is the right place to perform data manipulations and aggregations, not the application code, due to performance and code maintenance reasons."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Using JsonObject to pass our data in and out"',title:'"Using',JsonObject:!0,to:!0,pass:!0,our:!0,data:!0,in:!0,and:!0,'out"':!0},'@GET\n@Produces(MediaType.APPLICATION_JSON)\nsuspend fun getProfile() = db.preparedQuery(\n    """select profile from "user" where email = $1""".trimIndent()\n).execute().awaitSuspending().first().getJsonObject("profile")\n')),(0,o.kt)("p",null,"Although Quarkus primarily targets Java programming language, Kotlin support is also quite good.\nWe used coroutines and suspending functions, which allowed for greater performance and much simpler code compared to some other asynchronous programming models that are available.\nKotlin's structured concurrency enabled us to write seemingly sequential code but in reality, very performant asynchronous code.\nQuarkus provides excellent Kotlin extension methods built on top of existing asynchronous APIs such as mutiny."),(0,o.kt)("p",null,"We executed the database migration on application startup, which was very important for us.\nFortunately, Quarkus has excellent Flyway support, so all our database migrations were in one place and executed during our back-end booting process.\nThis kept our database schema and data transparent and reproducible."),(0,o.kt)(r.Z,{src:n(1479).Z,alt:"Database Migrations",title:"Database Migrations",mdxType:"MyImg"}),(0,o.kt)("p",null,"For our deployments, we use Kubernetes.\nBefore using Quarkus, we described our application requirements using helm packaging, but with Quarkus, we opted for another approach as Quarkus offers a great Kubernetes extension.\nInstead of writing any code, we described our Kubernetes resources using an application.yaml file, keeping our complete application configuration in one place.\nThis extension generated Kubernetes resource files behind the scenes, which we then applied to our Kubernetes cluster.\nThis works well for us."),(0,o.kt)(r.Z,{src:n(2277).Z,alt:"Kubernetes configuration",title:"Kubernetes configuration",mdxType:"MyImg"}),(0,o.kt)("p",null,"For packaging our back-end API, we used the Jib extension.\nTo package our application in a container, all we had to do was use the application.yaml file and set all the required parameters such as image name tags repository, and so on.\nWe didn't have to maintain the Docker file on our own, which was very convenient."),(0,o.kt)("p",null,"Our time-tracking application needs to send emails to our users and admins on various occasions.\nTo keep things simpler, we decided not to go for any third-party API-driven email-sending approach.\nInstead, we send emails ourselves, and for that purpose, we use Qute email templates, which make composing and sending emails to our users very simple.\nThis extension provides support for coding coroutines, allowing for non-blocking sending and higher throughput."),(0,o.kt)(r.Z,{src:n(3330).Z,alt:"Qute Templates",title:"Qute Templates",mdxType:"MyImg"}),(0,o.kt)("h2",{id:"development-journey"},"Development Journey"),(0,o.kt)("p",null,"The Quarkus development process has been excellent so far.\nCompared to other frameworks like Spring Boot, Quarkus has a faster startup time and a smaller memory footprint.\nIt also provides profiles, which allows us to have slightly different configurations or behaviors between environments.\nWe can easily substitute some hard-to-run third-party services with local mocks, leaving the application code unchanged.\nQuarkus is also great in terms of configuration and how easily we can overwrite values stored in the application.yaml file with external environment variables.\nAlthough the hot reload mode didn't work well with Kotlin, I believe all the bugs related to it will be solved in upcoming releases.\nDuring development, we had to restart our running service most of the time for code changes to take effect."),(0,o.kt)("p",null,"Our backend API functionalities took approximately a month and a half to complete.\nConsidering that only two developers worked on the backend, I think it was an okay result.\nIn this phase of our product lifecycle, we decided against writing automated tests due to constantly revisiting requirements and our needs.\nInstead, we went for manual testing for now.\nOnce our Time tracking application gets more active users, we plan to start writing automated tests using Quarkus test support, including test containers and others.\nDeveloping a full-blown API, including API security with JSON web tokens and authorization in place, having database migration automatically applied during application boot time, having a flexible and maintainable code base revolving around JSON, with the ability to package and deploy our API to our Kubernetes cluster, is quite an achievement for just a month and a half of work."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We are glad to share that using Quarkus, Kotlin, and Postgres as the foundation of our backend API has been a fun and productive experience for us.\nQuarkus's ability to experiment quickly and leverage ready-made components has made us confident that we made the right technological choice.\nAlthough there are some imperfections with hot reload and some quirks with Kotlin, we are waiting for the fixes to be made and have no doubt that Quarkus is the best solution for us."),(0,o.kt)("p",null,"We are working smart and hard to bring new features to our time-tracking application.\nTo achieve this, we will continue to use the great features provided by Quarkus, which dramatically reduce the time needed to roll out our features quickly.\nWe invite you to try our time tracker at ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"https://sheetty.com"},"Sheetty")),"."))}h.isMDXComponent=!0},1479:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/db-migrations-20d83d549b89555b2695111136e42cbd.png"},2277:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/k8s-config-fa716b52e0abf59ca7011202abd3ea3d.png"},3330:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/qute-templates-02bd3157c7031ec06bf72722aebe375b.png"},8791:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/frustrated-developer-9902d5f73a2d16a0c5dcc9e6869d0f15.png"}}]);