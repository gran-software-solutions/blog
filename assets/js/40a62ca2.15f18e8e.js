"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2345],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1409:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const i={title:"What Is Technical Debt?",authors:"gglazewskigran",tags:["technical debt"]},r=void 0,l={permalink:"/blog/2023/03/22/what-is-technical-debt",editUrl:"https://github.com/gran-software-solutions/blog/tree/main/blog/2023-03-22-what-is-technical-debt/index.mdx",source:"@site/blog/2023-03-22-what-is-technical-debt/index.mdx",title:"What Is Technical Debt?",description:"a turtle sleeping on a beach",date:"2023-03-22T00:00:00.000Z",formattedDate:"March 22, 2023",tags:[{label:"technical debt",permalink:"/blog/tags/technical-debt"}],readingTime:10.705,hasTruncateMarker:!0,authors:[{name:"Greg Glazewski",title:"Senior engineer @ GRAN Software Solutions GmbH",url:"https://github.com/gglazewskigran",imageURL:"https://github.com/gglazewskigran.png",key:"gglazewskigran"}],frontMatter:{title:"What Is Technical Debt?",authors:"gglazewskigran",tags:["technical debt"]},nextItem:{title:"What is Unit testing",permalink:"/blog/2023/01/18/what-is-unit-testing"}},s={authorsImageUrls:[void 0]},u=[{value:"The Original Metaphor",id:"the-original-metaphor",level:2},{value:"Uncle Bob\u2019s Take On Technical Debt",id:"uncle-bobs-take-on-technical-debt",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"a turtle sleeping on a beach",src:a(9507).Z,width:"640",height:"353"})),(0,o.kt)("p",null,"Is there a deliberate understanding of what a \u201ctechnical debt\u201d is and what it isn\u2019t? In this article we will see how the understanding of technical debt evolved and what it means today to organisations and teams\nworking with software-intensive projects."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cSlow and steady wins the race.\u201d")),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Aesop, ancient storyteller, 600 BCE")),(0,o.kt)("h2",{id:"the-original-metaphor"},"The Original Metaphor"),(0,o.kt)("p",null,"The term was coined in early 1990 by Ward Cunningham",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-166d63"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-166d63",className:"footnote-ref"},"1")),". He first used this term as a financial metaphor for software development. At that time he was working on a financial product and, inspired by George Lakoff",(0,o.kt)("sup",{parentName:"p",id:"fnref-2-166d63"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2-166d63",className:"footnote-ref"},"2")),",\nwanted to reach a common understanding with stakeholders. As he said:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cI coined the debt metaphor to explain the refactoring that we were doing in the Y Cash product\u201d"))),(0,o.kt)("p",null,"What is worth noting here is that Cunningham\u2019s metaphor is strictly related to refactoring of code. The reason why would you need to refactor your software, Cunningham explains using following words:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cI thought that rushing software out the door, to get some experience with it, was a good idea. But of course, you would eventually go back and as you learn things about that software you would repay that loan by\nrefactoring the program to reflect your experience as you acquired it\u201d"))),(0,o.kt)("p",null,"The gist of it is that while software is developed with a high uncertainty, you learn as you go and incorporate those learnings into your software by refactoring. Cunningham explains also the consequences of not doing it:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cIf you develop a program for a long period of time by only adding features and never reorganising it to reflect your understanding of those features then eventually this program does not contain any understanding\nand all efforts to work on it take longer and longer, and you will make zero progress\u201d"))),(0,o.kt)("p",null,"In short: not refactoring your code grinds your project to a halt."),(0,o.kt)("p",null,"Cunningham\u2019s metaphor tells us that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can create software that you understand only partially - ",(0,o.kt)("strong",{parentName:"li"},"this is your loan"),"."),(0,o.kt)("li",{parentName:"ol"},"Working on a code that does not reflect your current understanding of your problem costs extra time - ",(0,o.kt)("strong",{parentName:"li"},"this is your interest"),"."),(0,o.kt)("li",{parentName:"ol"},"As you learn more about your problems, you ought to refactor your code - ",(0,o.kt)("strong",{parentName:"li"},"repay your loan"),"."),(0,o.kt)("li",{parentName:"ol"},"Otherwise, you make no progress - ",(0,o.kt)("strong",{parentName:"li"},"or your purchasing power goes to zero"),".")),(0,o.kt)("p",null,"Originally, the metaphor is about understanding the software you are working on. Some extended its meaning to include quality issues - hacks and workarounds. But Cunningham was very clear about this:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cBloggers have explained the debt metaphor and confused it with the idea that you could write code poorly with the intention of doing a good job later and thinking that was the primary source of debt. I'm never in favour\nof writing code poorly, but I am in favour of writing code to reflect your current understanding of the problem even if that understanding is partial.\u201d"))),(0,o.kt)("p",null,"In other words, ",(0,o.kt)("strong",{parentName:"p"},"technical debt is not an excuse to produce low quality code"),". Technical debt is about producing good quality code without full understanding of the problem. Low quality code can prevent you from paying back\nyour debt as Cunningham explains:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cThe ability to pay back debt and make the debt metaphor work for your advantage depends upon you ",(0,o.kt)("strong",{parentName:"em"},"writing code that is clean enough to be able to refactor it")," as you come to understand your problem\u201d"))),(0,o.kt)("p",null,"The original financial metaphor tells us what technical debt is and what it is not:"),(0,o.kt)("p",null,"Technical debt is not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bugs"),(0,o.kt)("li",{parentName:"ul"},"Convoluted code"),(0,o.kt)("li",{parentName:"ul"},"Unreadable code"),(0,o.kt)("li",{parentName:"ul"},"Magic numbers"),(0,o.kt)("li",{parentName:"ul"},"Hacks"),(0,o.kt)("li",{parentName:"ul"},"Duck tape methods")),(0,o.kt)("p",null,"Technical debt is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Solution that seems to be optimal today but may not be optimal tomorrow"),(0,o.kt)("li",{parentName:"ul"},"Solution that we hope to be optimal, although we have no possibility to assess it today")),(0,o.kt)("p",null,"If you haven\u2019t yet, you should watch his ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/pqeJFYwnkjE"},"video"))),(0,o.kt)("h2",{id:"uncle-bobs-take-on-technical-debt"},"Uncle Bob\u2019s Take On Technical Debt"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mess",src:a(8384).Z,width:"640",height:"480"})),(0,o.kt)("p",null,"You probably have no clue who I am, but you surely know Uncle Bob. He agreed with Cunningham that technical debt does not come from low quality code:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cA mess is not a technical debt. A mess is just a mess.\u201d"))),(0,o.kt)("p",null,"Uncle Bob draws a thick line between low quality and a technical debt. He says that a technical debt is a rational but risky decision that can potentially be beneficial in the future:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cTechnical debt decisions are made based on real project constraints. They are risky, but they can be beneficial. The decision to make a mess is never rational, is always based on laziness and unprofessionalism, and has no chance\nof paying off in the future. A mess is always a loss.\u201d"))),(0,o.kt)("p",null,"Mess on the other hand is always a loss. Uncle Bob cannot find an excuse for \u201cquick and dirty\u201d solutions, hacks and workarounds that sometimes are labelled a technical debt. On the contrary. Uncle Bob believes that the more debt you\ntake on, the more discipline you must exercise in your project:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cWhen you buy a house and take on a big mortgage debt, you tighten up all your spending and accounting. You clean up your books and your budgets. You behave with increased discipline. The same is true of technical debt.\u201d"))),(0,o.kt)("p",null,"Uncle Bob pretty much reiterates Cunningham\u2019s point of view about what technical debt isn\u2019t:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bugs"),(0,o.kt)("li",{parentName:"ul"},"Convoluted code"),(0,o.kt)("li",{parentName:"ul"},"Unreadable code"),(0,o.kt)("li",{parentName:"ul"},"Magic numbers"),(0,o.kt)("li",{parentName:"ul"},"Hacks"),(0,o.kt)("li",{parentName:"ul"},"Duck tape methods")),(0,o.kt)("p",null,"And what technical debt is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Solution that seems to be optimal today but may not be optimal tomorrow"),(0,o.kt)("li",{parentName:"ul"},"Solution that we hope to be optimal, although we have no possibility to assess it today")),(0,o.kt)("p",null,"As an example, Uncle Bob is using a decision about iframes vs AJAX. On a higher level it could be a scenario where a product team does not take into account internationalisation in their designs but at some point in time the company\nintroduces their product on a different continent and so an expensive redesign is required."),(0,o.kt)("p",null,"Read more on ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"https://sites.google.com/site/unclebobconsultingllc/a-mess-is-not-a-technical-debt"},"Uncle Bob\u2019s blog")),"."),(0,o.kt)("h1",{id:"martin-fowlers-take-on-technical-debt"},"Martin Fowler\u2019s Take On Technical Debt"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mess",src:a(2865).Z,width:"619",height:"598"})),(0,o.kt)("p",null,"Martin Fowler is an equally important persona in software engineering that expressed his view on what technical debt is and isn\u2019t. In contrast to Ward Cunningham and Uncle Bob, Martin Fowler found a place for low quality code, and\neven ignorance, in technical debt. As he said:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cThe metaphor of debt is sometimes used to justify neglecting internal quality. The argument is that it takes time and effort to stop cruft from building up.\u201d"))),(0,o.kt)("p",null,"We will discuss shortly what is meant by \u201ccruft\u201d."),(0,o.kt)("p",null,"Fowler says that technical debt is both deliberate or inadvertent and reckless or prudent. This creates a taxonomy of technical debt:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inadvertent Reckless"),(0,o.kt)("li",{parentName:"ul"},"Deliberate Reckless"),(0,o.kt)("li",{parentName:"ul"},"Deliberate Prudent"),(0,o.kt)("li",{parentName:"ul"},"Inadvertent Prudent")),(0,o.kt)("p",null,"With those 4 types of technical debt, the whole field is covered. Meaning, a technical debt can originate from low quality code (reckless) or assumption based decisions (prudent). To draw a more detailed picture, we could describe those\ntypes like so:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Inadvertent Reckless")," - We don\u2019t know how to do it, but we will anyway",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Deliberate Reckless")," - We know how to do it but doing it quick and dirty will maybe save us time",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Deliberate Prudent")," - We know it\u2019s not good, but this is a one time job and so worth it",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Inadvertent Prudent")," - Now we see the difference between our assumptions and real requirements",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Fowler says that debt, in the form of deficiencies in internal quality, will build up and make it harder to modify the system. Those deficiencies are cruft that lives next to essential complexity required to do the job."),(0,o.kt)("p",null,"Neglecting internal quality may be a good call if managed properly, e.g. to roll out features faster and repay the debt as soon as possible. Unfortunately, more often than not it is mismanaged and, as Fowler puts it:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cCruft has a quick impact, slowing down the very new features that are needed quickly.\u201d"))),(0,o.kt)("p",null,"You can read more about his point of view ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/TechnicalDebtQuadrant.html"},"here"))," and ",(0,o.kt)("u",null,(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/TechnicalDebt.html"},"here")),"."),(0,o.kt)("h1",{id:"my-take-on-technical-debt"},"My Take On Technical Debt"),(0,o.kt)("p",null,"The metaphor of technical debt is attracting academic attention. Since 2006, a number of research in this area is growing systematically as you can see in the following table ",(0,o.kt)("sup",{parentName:"p",id:"fnref-3-166d63"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3-166d63",className:"footnote-ref"},"3")),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"2006"),(0,o.kt)("th",{parentName:"tr",align:null},"2010"),(0,o.kt)("th",{parentName:"tr",align:null},"2011"),(0,o.kt)("th",{parentName:"tr",align:null},"2012"),(0,o.kt)("th",{parentName:"tr",align:null},"2013"),(0,o.kt)("th",{parentName:"tr",align:null},"2014"),(0,o.kt)("th",{parentName:"tr",align:null},"total*"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"17"),(0,o.kt)("td",{parentName:"tr",align:null},"24"),(0,o.kt)("td",{parentName:"tr",align:null},"58"),(0,o.kt)("td",{parentName:"tr",align:null},"47"),(0,o.kt)("td",{parentName:"tr",align:null},"61"),(0,o.kt)("td",{parentName:"tr",align:null},"208")))),(0,o.kt)("p",null,"*as of 2016"),(0,o.kt)("p",null,"After studying a big portion of those papers, the answer is as usual: it depends."),(0,o.kt)("p",null,"The term itself has no universal definition and its meaning is fluid. From a company to a company, from an individual to an individual. It changes scope, taxonomy and importance. It touches every aspect of software development. From\ndesign and architecture, through infrastructure, tests and bugs up to requirements, processes and even people."),(0,o.kt)("p",null,"The only thing that matters, though, is ",(0,o.kt)("strong",{parentName:"p"},"what technical debt means to your team")," and organisation. It is of utmost importance to have a deliberate understanding of technical debt within the boundaries of your context - be it a team\nor the whole company.\nHowever, you define technical debt, there are a few rules of thumb that every team and organisation should follow:"),(0,o.kt)("p",null,"You must be able to reason about technical debt with developers ",(0,o.kt)("strong",{parentName:"p"},"and")," managers.",(0,o.kt)("br",null),"\nTechnical debt must be ",(0,o.kt)("strong",{parentName:"p"},"discussed openly and transparently"),".",(0,o.kt)("br",null),"\nTechnical debt must be ",(0,o.kt)("strong",{parentName:"p"},"documented")," along with cost of its existence and cost of potential payoff.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Increasing visibility of technical debt is the first step of managing it. Just because you don\u2019t manage technical debt, doesn't mean it doesn't exist. It\u2019s always there, incurring costs, causing delays, bugs, incidents and users\u2019\ndissatisfaction."),(0,o.kt)("h1",{id:"what-you-can-do-today-to-manage-technical-debt"},"What You Can Do Today To Manage Technical Debt"),(0,o.kt)("p",null,"Ask your fellow teammates how they ",(0,o.kt)("strong",{parentName:"p"},"define technical debt"),". Collect all definitions, put them on a wall, do a brainstorming session. Ask questions about anything that slows you down:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Are bugs technical debt?"),(0,o.kt)("li",{parentName:"ul"},"Are code smells technical debt?"),(0,o.kt)("li",{parentName:"ul"},"Are missing requirements technical debt?")),(0,o.kt)("p",null,"Once you know what to call a technical debt, create a label in your issue tracker or project management system and ",(0,o.kt)("strong",{parentName:"p"},"start writing tickets for technical debt")," and labelling them. Put them in the backlog!"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cAll work is work; all work goes on the backlog.\u201d")," ",(0,o.kt)("sup",{parentName:"p",id:"fnref-4-166d63"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4-166d63",className:"footnote-ref"},"4")))),(0,o.kt)("p",null,"A good technical debt ticket includes information about:",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Where is it")," - it could be a file, module, piece of architecture or even part of your deployment process",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Cost of its existence")," - what problems does it incur. You cannot really estimate the value of it, but at least try using fibonacci numbers or t-shirt sizes.",(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"Cost of repayment")," - how much effort would it take to fix it. Again, try abstracting it away. Maybe the same way you do with your tickets (unless you estimate hours, then stop doing it)",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Having a proper ticket helps to reason about when and if to repay a specific debt. And having it in the backlog allows you to ",(0,o.kt)("strong",{parentName:"p"},"prioritise technical debt"),". Every time you decide which tickets to deal with, ask if there are technical\ndebt tickets related to the specific area of the code you want to work on. E.g. if you are adding a new endpoint to your REST API, ask if there are technical debt issues with the router or input validation. And if so, do them first."),(0,o.kt)("p",null,"Below you will find an example of a technical debt ticket:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"[TD]"," Extending router is cumbersome and difficult to test"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Where is it"),": there are a bunch of files you have to touch when adding a new endpoint. First the router, then you need to extend interfaces and every class that\u2019s implementing it. There\u2019s no proper test for the router, only unit tests for implementations.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Cost of its existence"),": I\u2019d say it\u2019s an 8. We are at the stage where a new endpoint is coming up pretty much every sprint, so we constantly add to the complexity. If we don\u2019t fix it soon, it will grow to a 13.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Cost of repayment"),": To fix it, we need to reduce the number of interfaces and maybe replace some with a functional approach (lambdas?). With concept and implementation I think it\u2019s a day or two. Or 5 points if you will.")))),(0,o.kt)("p",null,"Yes, I believe estimating time should be avoided. But I am not going to force it on anyone."),(0,o.kt)("p",null,"And whatever you do, ",(0,o.kt)("strong",{parentName:"p"},"follow established software engineering practices"),". Otherwise, you will accrue reckless and inadvertent technical debt."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-166d63"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Ward_Cunningham"},"https://en.wikipedia.org/wiki/Ward_Cunningham"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-166d63",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2-166d63"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Metaphors_We_Live_By"},"https://en.wikipedia.org/wiki/Metaphors_We_Live_By"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2-166d63",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3-166d63"},"Nicolli S.R. Alves, Thiago S. Mendes, Manoel G. de Mendon\xe7a, Rodrigo O. Sp\xednola, Forrest Shull, Carolyn Seaman (2016), \u201cIdentification and Management of Technical Debt: A Systematic Mapping Study\u201d",(0,o.kt)("a",{parentName:"li",href:"#fnref-3-166d63",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-4-166d63"},"Kruchten, Nord (2019), \u201cManaging Technical Debt: Reducing Friction in Software Development\u201d p.191",(0,o.kt)("a",{parentName:"li",href:"#fnref-4-166d63",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},9507:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img-e65d5f5bf967aa41439c8ee66d9c1bfd.jpg"},8384:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img1-dc8f9776266c29576e32c8fb5471e346.jpg"},2865:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img2-7738737635706836192116d5ae761ec4.png"}}]);