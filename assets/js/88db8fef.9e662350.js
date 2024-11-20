"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7710],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,h=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(8168),r=(n(6540),n(5680));const i={title:"What is Unit testing",authors:"dodalovicgran",tags:["testing"],enableComments:!0},o=void 0,s={permalink:"/2023/01/18/what-is-unit-testing",source:"@site/blog/2023-01-18-what-is-unit-testing/index.mdx",title:"What is Unit testing",description:"Example banner",date:"2023-01-18T00:00:00.000Z",formattedDate:"January 18, 2023",tags:[{label:"testing",permalink:"/tags/testing"}],readingTime:3.745,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",title:"Software Engineer @ GRAN Software Solutions GmbH",url:"https://github.com/dodalovicgran",imageURL:"https://github.com/dodalovicgran.png",key:"dodalovicgran"}],frontMatter:{title:"What is Unit testing",authors:"dodalovicgran",tags:["testing"],enableComments:!0},prevItem:{title:"What Is Technical Debt?",permalink:"/2023/03/22/what-is-technical-debt"},nextItem:{title:"Yes, companies in the automobile industry can (and should) undergo a digital transformation",permalink:"/2023/01/17/automotive-industry-digitalization"}},l={authorsImageUrls:[void 0]},c=[{value:"Anatomy of Unit tests",id:"anatomy-of-unit-tests",level:2},{value:"Arrange phase",id:"arrange-phase",level:2},{value:"Act phase",id:"act-phase",level:2},{value:"Assert phase",id:"assert-phase",level:2},{value:"Naming test methods",id:"naming-test-methods",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},g="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(g,(0,a.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example banner",src:n(6070).A,width:"633",height:"425"})),(0,r.yg)("p",null,"I'll give a brief overview of the concept of unit testing for those of you who are unfamiliar with the subject."),(0,r.yg)("p",null,"Unit testing allows us to test code behavior ",(0,r.yg)("strong",{parentName:"p"},"in isolation")," so that we can ",(0,r.yg)("strong",{parentName:"p"},"verify implementation correctness"),'. Unit tests, unlike some other tests, need to be able to execute very quickly, providing you with an almost instant answer to the question, "Does my code work as expected?\u201d On top of that, they should be isolated from any external processes, like file-system access or calling databases or web services, during their execution.'),(0,r.yg)("h2",{id:"anatomy-of-unit-tests"},"Anatomy of Unit tests"),(0,r.yg)("p",null,"In general, we should plan our test method implementation to be divided into three parts, as shown below:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example banner",src:n(1049).A,width:"1949",height:"750"})),(0,r.yg)("p",null,"Let\u2019s now explain each of these three phases."),(0,r.yg)("h2",{id:"arrange-phase"},"Arrange phase"),(0,r.yg)("p",null,'In this phase we "emulate" execution environment of the code under test. What does that mean? Let\'s use a code snippet of the function we want to unit test:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},"class ProductService(\n    val shippingCostService: ShippingCostService,\n    val taxCalculationService: TaxCalculationService,\n    val productPriceService: PriceService) {\n\n    fun getPrice(productID: String): Long {\n        val basePrice: Long = priceService.getPrice(productID)\n        val shippingCosts: Long = shippingCostService.getShippingCosts(productID)\n        val taxes: Long = taxCalculationService.calculateTax(productID)\n        return basePrice + shippingCosts + taxes\n   }\n}\n")),(0,r.yg)("p",null,"Here we have imaginary ",(0,r.yg)("strong",{parentName:"p"},"ProductService")," with ",(0,r.yg)("strong",{parentName:"p"},"getPrice")," method, which we'd like to test. Unfortunately - there are already some complications: this method can't be tested in isolation!\nWhy? Simply because our class depends on other classes to fulfill it's responsibility: ",(0,r.yg)("inlineCode",{parentName:"p"},"ShippingCostService"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"TaxCalculationService")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"PriceService"),". We can call them ",(0,r.yg)("strong",{parentName:"p"},"collaborators"),"."),(0,r.yg)("p",null,"Luckily, all modern programming languages support some kind of support for emulation (you can hear the term ",(0,r.yg)("strong",{parentName:"p"},"\u201cmocking\u201d"),") of our collaborators. Using these tools, we can give ",(0,r.yg)("strong",{parentName:"p"},"instructions to our test engine to mimic their particular behavior (as per the instructions we provide) during test method execution"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example banner",src:n(7042).A,width:"1151",height:"638"})),(0,r.yg)("p",null,"In our imaginary case - we could give such an instruction:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},"class TestClass {\n    @Test\n    fun getPrice_when_shipping_cost_service_returns_proper_number_returns_positive_number() {\n        // arrange phase\n        val productID = UUID.randomUUID().toString()\n        when(priceService.getPrice(productID)).thenReturn(5L)\n        ...\n    }\n}\n")),(0,r.yg)("h2",{id:"act-phase"},"Act phase"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example banner",src:n(699).A,width:"1185",height:"456"})),(0,r.yg)("p",null,"In this phase, we actually execute the functionality under test. The example below shows how we execute the ",(0,r.yg)("inlineCode",{parentName:"p"},"getPrice")," method of the ",(0,r.yg)("inlineCode",{parentName:"p"},"productService"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'class ProductServiceTest {\n    @Test\n    fun myTestMethod() {\n        // act phase\n        val calculatedPrice = productService.getPrice("XY-123")\n        // assert phase\n        ...\n    }\n}\n')),(0,r.yg)("p",null,"Usually, after calling the function we're testing, we have to determine whether our function is correct or not. In our case,\nthe function ",(0,r.yg)("strong",{parentName:"p"},"returns some value"),", which we can inspect and ",(0,r.yg)("strong",{parentName:"p"},"make a conclusion about whether the value is expected or not"),". Also,\neven in the case that the function we test returns no value, the ",(0,r.yg)("strong",{parentName:"p"},"test context might have changed as a result of interaction"),",\nand we could inspect these context changes to verify our function's correctness."),(0,r.yg)("h2",{id:"assert-phase"},"Assert phase"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example banner",src:n(8708).A,width:"890",height:"554"})),(0,r.yg)("p",null,"Now after the function we want to test got executed, we need to verify for correctness."),(0,r.yg)("p",null,"In this phase, we typically do the following things:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"verify return value from the function we tested, for instance:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},'val calculatedPrice = productService.getPrice("XY-123")\n// verify starts here\nassertThat(calculatedPrice).isEqualTo(5)\n'))),(0,r.yg)("li",{parentName:"ul"},"verify that we had proper interactions with our collaborators during our test execution, for instance:",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},"verify(taxCalculationService, times(1)).calculateTax(productID)\n")))),(0,r.yg)("h2",{id:"naming-test-methods"},"Naming test methods"),(0,r.yg)("p",null,"Consistency is key, someone said. Our brains feel more comfortable when they recognize patterns with ease. Let\u2019s dissect the pattern I use when writing my test methods:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"Example banner",src:n(9837).A,width:"2500",height:"454"})),(0,r.yg)("p",null,"It consists of three parts, delimited by ",(0,r.yg)("inlineCode",{parentName:"p"},"_"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the first part is ",(0,r.yg)("strong",{parentName:"p"},"the method name we test"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the middle part is ",(0,r.yg)("strong",{parentName:"p"},"the short description of the function execution context"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"the last portion describes ",(0,r.yg)("strong",{parentName:"p"},"expected outcome")))),(0,r.yg)("p",null,"Here are some more examples illustrating this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-kotlin"},"@Test\nfun getUserDetails_whenDatabaseDown_throwsException() {}\n@Test\nfun getNumberOfRegisteredUsers_whenNetworkError_returnsNull() {}\n")),(0,r.yg)("admonition",{title:"Key takeaways",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"We need to know ",(0,r.yg)("strong",{parentName:"p"},"what is the function we want to test")," and more precisely, ",(0,r.yg)("strong",{parentName:"p"},"which scenario")," we are testing")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Each test method should be composed out of three code blocks - ",(0,r.yg)("strong",{parentName:"p"},"Arrange"),", ",(0,r.yg)("strong",{parentName:"p"},"Act"),", and ",(0,r.yg)("strong",{parentName:"p"},"Assert")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Arrange")," - establish an environment needed to execute the test method"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Act")," - invoke your test method"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Assert")," - verify that the returned value from the method and/or the execution environment is in the state expected"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"We should name our test methods so that it's enough to understand the test just be reading test method name")))),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"Writing automated unit tests is important. If you think you learned something new, feel free to spread the word by sharing this article to your friends"))}u.isMDXComponent=!0},1049:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/img1-b79374be116362be8aee402f2657b2df.png"},7042:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/img2-3fffa976840c6635ed4dc9844cf9cfcc.png"},699:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/img3-99c8e5bc5be80f38f70e3de19660a3d4.png"},8708:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/img4-440ceba9ca3d99064a9e0be0458e91d2.png"},9837:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/img5-b51b9a3a6e5ca8a8c3f7210d0a9b2a7d.png"},6070:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/img6-5fab86289ab07acd27d19ac3be644713.png"}}]);