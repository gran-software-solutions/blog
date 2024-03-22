"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"What is Unit testing",authors:"dodalovicgran",tags:["testing"],enableComments:!0},o=void 0,s={permalink:"/2023/01/18/what-is-unit-testing",editUrl:"https://github.com/gran-software-solutions/blog/tree/main/blog/2023-01-18-what-is-unit-testing/index.mdx",source:"@site/blog/2023-01-18-what-is-unit-testing/index.mdx",title:"What is Unit testing",description:"Example banner",date:"2023-01-18T00:00:00.000Z",formattedDate:"January 18, 2023",tags:[{label:"testing",permalink:"/tags/testing"}],readingTime:3.745,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",title:"Software Engineer @ GRAN Software Solutions GmbH",url:"https://github.com/dodalovicgran",imageURL:"https://github.com/dodalovicgran.png",key:"dodalovicgran"}],frontMatter:{title:"What is Unit testing",authors:"dodalovicgran",tags:["testing"],enableComments:!0},prevItem:{title:"What Is Technical Debt?",permalink:"/2023/03/22/what-is-technical-debt"},nextItem:{title:"Yes, companies in the automobile industry can (and should) undergo a digital transformation",permalink:"/2023/01/17/automotive-industry-digitalization"}},l={authorsImageUrls:[void 0]},c=[{value:"Anatomy of Unit tests",id:"anatomy-of-unit-tests",level:2},{value:"Arrange phase",id:"arrange-phase",level:2},{value:"Act phase",id:"act-phase",level:2},{value:"Assert phase",id:"assert-phase",level:2},{value:"Naming test methods",id:"naming-test-methods",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(5352).Z,width:"633",height:"425"})),(0,r.kt)("p",null,"I'll give a brief overview of the concept of unit testing for those of you who are unfamiliar with the subject."),(0,r.kt)("p",null,"Unit testing allows us to test code behavior ",(0,r.kt)("strong",{parentName:"p"},"in isolation")," so that we can ",(0,r.kt)("strong",{parentName:"p"},"verify implementation correctness"),'. Unit tests, unlike some other tests, need to be able to execute very quickly, providing you with an almost instant answer to the question, "Does my code work as expected?\u201d On top of that, they should be isolated from any external processes, like file-system access or calling databases or web services, during their execution.'),(0,r.kt)("h2",{id:"anatomy-of-unit-tests"},"Anatomy of Unit tests"),(0,r.kt)("p",null,"In general, we should plan our test method implementation to be divided into three parts, as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(4152).Z,width:"1949",height:"750"})),(0,r.kt)("p",null,"Let\u2019s now explain each of these three phases."),(0,r.kt)("h2",{id:"arrange-phase"},"Arrange phase"),(0,r.kt)("p",null,'In this phase we "emulate" execution environment of the code under test. What does that mean? Let\'s use a code snippet of the function we want to unit test:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class ProductService(\n    val shippingCostService: ShippingCostService,\n    val taxCalculationService: TaxCalculationService,\n    val productPriceService: PriceService) {\n\n    fun getPrice(productID: String): Long {\n        val basePrice: Long = priceService.getPrice(productID)\n        val shippingCosts: Long = shippingCostService.getShippingCosts(productID)\n        val taxes: Long = taxCalculationService.calculateTax(productID)\n        return basePrice + shippingCosts + taxes\n   }\n}\n")),(0,r.kt)("p",null,"Here we have imaginary ",(0,r.kt)("strong",{parentName:"p"},"ProductService")," with ",(0,r.kt)("strong",{parentName:"p"},"getPrice")," method, which we'd like to test. Unfortunately - there are already some complications: this method can't be tested in isolation!\nWhy? Simply because our class depends on other classes to fulfill it's responsibility: ",(0,r.kt)("inlineCode",{parentName:"p"},"ShippingCostService"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"TaxCalculationService")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PriceService"),". We can call them ",(0,r.kt)("strong",{parentName:"p"},"collaborators"),"."),(0,r.kt)("p",null,"Luckily, all modern programming languages support some kind of support for emulation (you can hear the term ",(0,r.kt)("strong",{parentName:"p"},"\u201cmocking\u201d"),") of our collaborators. Using these tools, we can give ",(0,r.kt)("strong",{parentName:"p"},"instructions to our test engine to mimic their particular behavior (as per the instructions we provide) during test method execution"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(2112).Z,width:"1151",height:"638"})),(0,r.kt)("p",null,"In our imaginary case - we could give such an instruction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"class TestClass {\n    @Test\n    fun getPrice_when_shipping_cost_service_returns_proper_number_returns_positive_number() {\n        // arrange phase\n        val productID = UUID.randomUUID().toString()\n        when(priceService.getPrice(productID)).thenReturn(5L)\n        ...\n    }\n}\n")),(0,r.kt)("h2",{id:"act-phase"},"Act phase"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(3582).Z,width:"1185",height:"456"})),(0,r.kt)("p",null,"In this phase, we actually execute the functionality under test. The example below shows how we execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPrice")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"productService"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class ProductServiceTest {\n    @Test\n    fun myTestMethod() {\n        // act phase\n        val calculatedPrice = productService.getPrice("XY-123")\n        // assert phase\n        ...\n    }\n}\n')),(0,r.kt)("p",null,"Usually, after calling the function we're testing, we have to determine whether our function is correct or not. In our case,\nthe function ",(0,r.kt)("strong",{parentName:"p"},"returns some value"),", which we can inspect and ",(0,r.kt)("strong",{parentName:"p"},"make a conclusion about whether the value is expected or not"),". Also,\neven in the case that the function we test returns no value, the ",(0,r.kt)("strong",{parentName:"p"},"test context might have changed as a result of interaction"),",\nand we could inspect these context changes to verify our function's correctness."),(0,r.kt)("h2",{id:"assert-phase"},"Assert phase"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(2279).Z,width:"890",height:"554"})),(0,r.kt)("p",null,"Now after the function we want to test got executed, we need to verify for correctness."),(0,r.kt)("p",null,"In this phase, we typically do the following things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"verify return value from the function we tested, for instance:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val calculatedPrice = productService.getPrice("XY-123")\n// verify starts here\nassertThat(calculatedPrice).isEqualTo(5)\n'))),(0,r.kt)("li",{parentName:"ul"},"verify that we had proper interactions with our collaborators during our test execution, for instance:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"verify(taxCalculationService, times(1)).calculateTax(productID)\n")))),(0,r.kt)("h2",{id:"naming-test-methods"},"Naming test methods"),(0,r.kt)("p",null,"Consistency is key, someone said. Our brains feel more comfortable when they recognize patterns with ease. Let\u2019s dissect the pattern I use when writing my test methods:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example banner",src:n(1087).Z,width:"2500",height:"454"})),(0,r.kt)("p",null,"It consists of three parts, delimited by ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the first part is ",(0,r.kt)("strong",{parentName:"p"},"the method name we test"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the middle part is ",(0,r.kt)("strong",{parentName:"p"},"the short description of the function execution context"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"the last portion describes ",(0,r.kt)("strong",{parentName:"p"},"expected outcome")))),(0,r.kt)("p",null,"Here are some more examples illustrating this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Test\nfun getUserDetails_whenDatabaseDown_throwsException() {}\n@Test\nfun getNumberOfRegisteredUsers_whenNetworkError_returnsNull() {}\n")),(0,r.kt)("admonition",{title:"Key takeaways",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We need to know ",(0,r.kt)("strong",{parentName:"p"},"what is the function we want to test")," and more precisely, ",(0,r.kt)("strong",{parentName:"p"},"which scenario")," we are testing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each test method should be composed out of three code blocks - ",(0,r.kt)("strong",{parentName:"p"},"Arrange"),", ",(0,r.kt)("strong",{parentName:"p"},"Act"),", and ",(0,r.kt)("strong",{parentName:"p"},"Assert")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Arrange")," - establish an environment needed to execute the test method"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Act")," - invoke your test method"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Assert")," - verify that the returned value from the method and/or the execution environment is in the state expected"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"We should name our test methods so that it's enough to understand the test just be reading test method name")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Writing automated unit tests is important. If you think you learned something new, feel free to spread the word by sharing this article to your friends"))}m.isMDXComponent=!0},4152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img1-b79374be116362be8aee402f2657b2df.png"},2112:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img2-3fffa976840c6635ed4dc9844cf9cfcc.png"},3582:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img3-99c8e5bc5be80f38f70e3de19660a3d4.png"},2279:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img4-440ceba9ca3d99064a9e0be0458e91d2.png"},1087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img5-b51b9a3a6e5ca8a8c3f7210d0a9b2a7d.png"},5352:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/img6-5fab86289ab07acd27d19ac3be644713.png"}}]);