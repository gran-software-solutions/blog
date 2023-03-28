"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7982],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return a?o.createElement(p,s(s({ref:t},d),{},{components:a})):o.createElement(p,s({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:n,s[1]=r;for(var c=2;c<i;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const i={title:"Yes, companies in the automobile industry can (and should) undergo a digital transformation",authors:"dodalovicgran",tags:["business"],enableComments:!0},s=void 0,r={permalink:"/2023/01/17/automotive-industry-digitalization",editUrl:"https://github.com/gran-software-solutions/blog/tree/main/blog/2023-01-17-automotive-industry-digitalization/index.mdx",source:"@site/blog/2023-01-17-automotive-industry-digitalization/index.mdx",title:"Yes, companies in the automobile industry can (and should) undergo a digital transformation",description:"Example banner",date:"2023-01-17T00:00:00.000Z",formattedDate:"January 17, 2023",tags:[{label:"business",permalink:"/tags/business"}],readingTime:16.36,hasTruncateMarker:!0,authors:[{name:"Dusan Odalovic",title:"Senior engineer @ GRAN Software Solutions GmbH",url:"https://github.com/dodalovicgran",imageURL:"https://github.com/dodalovicgran.png",key:"dodalovicgran"}],frontMatter:{title:"Yes, companies in the automobile industry can (and should) undergo a digital transformation",authors:"dodalovicgran",tags:["business"],enableComments:!0},prevItem:{title:"What is Unit testing",permalink:"/2023/01/18/what-is-unit-testing"},nextItem:{title:"POC and MVP - What Is The Difference",permalink:"/2023/01/15/poc-and-mvp-what-is-the-difference"}},l={authorsImageUrls:[void 0]},c=[{value:"What were the challenges we were facing?",id:"what-were-the-challenges-we-were-facing",level:2},{value:"Integration with an inexperienced internal engineering team",id:"integration-with-an-inexperienced-internal-engineering-team",level:2},{value:"Absence of any project management techiques / tooling",id:"absence-of-any-project-management-techiques--tooling",level:2},{value:"No consensus about the way of working and common core values",id:"no-consensus-about-the-way-of-working-and-common-core-values",level:2},{value:"Cumbersome tooling available",id:"cumbersome-tooling-available",level:2},{value:"Not invented here syndrome",id:"not-invented-here-syndrome",level:2},{value:"Getting access / credentials for anything takes from weeks to months",id:"getting-access--credentials-for-anything-takes-from-weeks-to-months",level:2},{value:"Lack of transparency - no estimations for work needed to be done",id:"lack-of-transparency---no-estimations-for-work-needed-to-be-done",level:2},{value:"Bringing more and more people to solve quality issues with quantity approach",id:"bringing-more-and-more-people-to-solve-quality-issues-with-quantity-approach",level:2},{value:"Enforce using immature in-house developed abstractions",id:"enforce-using-immature-in-house-developed-abstractions",level:2},{value:"The actions we took to improve the situation",id:"the-actions-we-took-to-improve-the-situation",level:2},{value:"Evolution instead of revolution",id:"evolution-instead-of-revolution",level:3},{value:"Using project management tooling: JIRA, Azure DEVOPS",id:"using-project-management-tooling-jira-azure-devops",level:3},{value:"Using own AWS / Azure subscriptions, rather then a client-provided on premise solution",id:"using-own-aws--azure-subscriptions-rather-then-a-client-provided-on-premise-solution",level:3},{value:"From nothing, via self-hosted GitLab to GitHub",id:"from-nothing-via-self-hosted-gitlab-to-github",level:3},{value:"Full automation with IaaC, terraform and GitHub Actions",id:"full-automation-with-iaac-terraform-and-github-actions",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Example banner",src:a(7743).Z,width:"960",height:"540"})),(0,n.kt)("p",null,"I am excited to share that I was part of a successful digital transformation project in the automotive industry.\nThis project involved implementing new technologies and processes to streamline operations and improve overall efficiency."),(0,n.kt)("p",null,"The results were impressive, with significant cost savings and increased productivity. By sharing own experience and knowledge in this blog post, you can gain valuable insights on how to apply similar strategies in your own industries and achieve similar success in you own digital transformation initiatives."),(0,n.kt)("p",null,"Whether you're in automotive or any other field, the principles and approach can be adapted to fit your particular case."),(0,n.kt)("h2",{id:"what-were-the-challenges-we-were-facing"},"What were the challenges we were facing?"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Challenges",src:a(9311).Z,width:"960",height:"640"})),(0,n.kt)("p",null,"There was an initial understanding of what had to be done."),(0,n.kt)("p",null,"It's common for businesses to have a general idea of the software product they want to develop, but not all the details worked out yet. This is completely normal and expected. In fact, it's often better to start with a \"half-baked\" idea and let it evolve and take shape during the development process."),(0,n.kt)("p",null,"The development process can act as a discovery phase where the idea is shaped, features are added or removed, and the final product is refined to meet the specific needs of the business and its customers. This allows for a more flexible approach and the ability to adapt to changing market conditions or customer feedback. It's important to remember that the software development process is iterative, and the idea will likely evolve and change over time. Businesses should be open to this process and be prepared to adjust their original vision as needed. This approach ultimately leads to a more polished and successful end product."),(0,n.kt)("p",null,"Approximately in June 2021, when there was only a broad knowledge of what needed to be done, I joined the project. The project began with the following team in place: I had a senior backend engineer role, another senior devops consultant was already on the team when I joined, and representing the client was a product owner."),(0,n.kt)("p",null,"Let's delve deeper into the challenges we faced once the project began."),(0,n.kt)("h2",{id:"integration-with-an-inexperienced-internal-engineering-team"},"Integration with an inexperienced internal engineering team"),(0,n.kt)("p",null,"Collaborating with an engineering team that lacked experience building modern software systems presented a number of difficulties. One major issue was that the team was unfamiliar with the latest development methodologies, tools, and technologies. This lead to delays and inefficiencies in the development process, as well as a lack of scalability and maintainability in the final product."),(0,n.kt)("p",null,"Another challenge was that the team lacked the necessary skills to design and implement complex systems. This can result in poor system architecture, which leads to issues with performance, security, and reliability. Additionally, the team didn\u2019t have any experience troubleshooting and debugging problems that arise during development, which can further slow down the process."),(0,n.kt)("p",null,"To mitigate these difficulties, it was necessary to provide additional training and support to the team (often in the form of pair programming, collaborative coding sessions, etc.), as well as to establish clear communication and collaboration processes. My role on the project was exactly that - to provide guidance and mentorship to the team."),(0,n.kt)("h2",{id:"absence-of-any-project-management-techiques--tooling"},"Absence of any project management techiques / tooling"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Desert",src:a(3654).Z,width:"960",height:"640"})),(0,n.kt)("p",null,"Project management is an essential part of software development. It involves planning, organizing, and overseeing the development process to ensure that the project is completed on time, within budget, and to the satisfaction of the stakeholders. Without proper project management methodologies and tools, software development projects can suffer from a variety of negative impacts."),(0,n.kt)("p",null,"What are the risks of not having any project management strategy when joining a project?"),(0,n.kt)("p",null,"One of the most significant negative impacts of not having project management methodologies and tools is ",(0,n.kt)("strong",{parentName:"p"},"poor communication"),". Without these tools, it can be difficult to keep track of project progress, assign tasks, and communicate with team members. This can lead to ",(0,n.kt)("strong",{parentName:"p"},"delays, misunderstandings, and confusion"),"."),(0,n.kt)("p",null,"Another negative impact is the ",(0,n.kt)("strong",{parentName:"p"},"lack of organization"),". Without project management methodologies and tools, it can be difficult to ",(0,n.kt)("strong",{parentName:"p"},"keep track of project timelines, budgets, and resources"),". This can lead to ",(0,n.kt)("strong",{parentName:"p"},"delays, cost overruns, and a lack of accountability"),"."),(0,n.kt)("p",null,"In addition, without project management methodologies and tools, it can be difficult ",(0,n.kt)("strong",{parentName:"p"},"to identify and manage risks"),". This can lead to unexpected issues and delays, and can also lead to higher costs."),(0,n.kt)("p",null,"Finally, without project management methodologies and tools, it can be difficult to ensure that the project is meeting the needs of the stakeholders. This can lead to ",(0,n.kt)("strong",{parentName:"p"},"dissatisfaction")," and, ultimately, ",(0,n.kt)("strong",{parentName:"p"},"the failure of the project"),"."),(0,n.kt)("h2",{id:"no-consensus-about-the-way-of-working-and-common-core-values"},"No consensus about the way of working and common core values"),(0,n.kt)("p",null,"When a team is working on a software development project, it's important for everyone to be on the same page about how the work will be done and what values are important to the team. Without consensus, things can quickly become chaotic and inefficient."),(0,n.kt)("p",null,"One of the biggest problems with not having a consensus is that team members may have different ideas about how the work should be done. This can lead to confusion and delays as team members try to figure out what they are supposed to be doing. It can also lead to frustration as team members feel that their ideas are not being heard or respected."),(0,n.kt)("p",null,"Another problem with not having a consensus is that team members may have different ideas about what is important in the project. This can lead to unmet expectations as team members may feel that their priorities are not being considered. It can also lead to disappointment, as team members may feel that the project is not meeting their expectations."),(0,n.kt)("p",null,"Finally, not having a consensus can lead to decreased satisfaction among team members. When team members feel that their ideas and values are not being respected, they may become disengaged and demotivated. This can lead to a lack of commitment to the project and a decrease in overall team performance."),(0,n.kt)("h2",{id:"cumbersome-tooling-available"},"Cumbersome tooling available"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Bad tooling",src:a(4535).Z,width:"811",height:"720"})),(0,n.kt)("p",null,"Inadequate tooling can have a significant impact on software development speed and communication effectiveness. When tools like self-hosted Rocket Chat or Jira (which were a must-have) are unstable or offline, it can disrupt the flow of work and impede collaboration among team members. Developers may be unable to access important information or communicate with their colleagues, leading to delays and confusion. Additionally, when tooling is unreliable, it can erode trust and morale among team members, further hampering productivity."),(0,n.kt)("p",null,"To ensure that software development is efficient and effective, it's essential to have robust and reliable tools in place that can support the needs of the team. This may include using cloud-based solutions or outsourcing the hosting and maintenance of these tools to a third-party provider."),(0,n.kt)("h2",{id:"not-invented-here-syndrome"},"Not invented here syndrome"),(0,n.kt)("p",null,'Following "not invented here" practices can lead to less effective processes, higher maintenance costs, and opportunity costs. These practices involve rejecting or avoiding ideas or solutions that were developed externally, instead opting to develop similar solutions internally.'),(0,n.kt)("p",null,"Internal solutions may require significant resources to maintain and update, leading to higher costs over time."),(0,n.kt)("p",null,"At the start of the project, I suggested that we switch from our self-hosted Rocket Chat tool to Slack or a similar program, and abandon our slow, problematic self-hosted Jira installation; this suggestion was not well received by the team."),(0,n.kt)("h2",{id:"getting-access--credentials-for-anything-takes-from-weeks-to-months"},"Getting access / credentials for anything takes from weeks to months"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Turtle",src:a(5624).Z,width:"960",height:"638"})),(0,n.kt)("p",null,"Bureaucratic processes can have a significant negative impact on software development teams."),(0,n.kt)("p",null,"These processes often require extensive (and often outdated) documentation to be read and understood, creating confusion and delays. Additionally, navigating the complex hierarchy of approval and authorization needed to gain access to resources can be time-consuming and frustrating."),(0,n.kt)("p",null,"Lastly, bureaucratic processes can limit the ability to quickly access necessary documentation for troubleshooting purposes, leading to additional costs and delays."),(0,n.kt)("h2",{id:"lack-of-transparency---no-estimations-for-work-needed-to-be-done"},"Lack of transparency - no estimations for work needed to be done"),(0,n.kt)("p",null,"The team was struggling with a lack of transparency. They were not properly estimating project tasks, which led to delayed deliveries and a high number of tasks that were simply too big to be carried to completion. This resulted in extra-long delivery times and a lot of frustration for team members."),(0,n.kt)("p",null,"The team's lack of transparency was causing a lot of problems. They were not communicating effectively with each other or with their stakeholders, and as a result, they were not able to deliver projects on time. They were also not able to manage their workload effectively, which led to a lot of stress and burnout among team members."),(0,n.kt)("p",null,"In order to solve this problem, the team needed to start estimating project tasks more accurately. They also needed to start communicating more effectively with each other and with their stakeholders. This would help them better manage their workload and deliver projects on time."),(0,n.kt)("p",null,"To do this, the team decided to start using a project management tool that would help us estimate project tasks more accurately. We also decided to start holding regular team meetings to discuss progress and make sure everyone was on the same page."),(0,n.kt)("h2",{id:"bringing-more-and-more-people-to-solve-quality-issues-with-quantity-approach"},"Bringing more and more people to solve quality issues with quantity approach"),(0,n.kt)("p",null,"The software development team was in trouble.  Despite being composed of skilled and experienced engineers, we were struggling to deliver projects on time and within budget. The root cause of this problem was a lack of effective and transparent processes."),(0,n.kt)("p",null,"The team had no clear guidelines for how to approach a project, and there was a lack of communication between team members. This resulted in confusion and delays, as team members were not sure what was expected of them. Additionally, there was a lack of accountability, as team members were not held responsible for their actions."),(0,n.kt)("p",null,"In an effort to fix this problem, the company decided to bring in more external people to the project. They believed that these new team members would bring fresh perspectives and new ideas to the table. However, this decision only made things worse."),(0,n.kt)("p",null,"The new team members had to spend a significant amount of time getting up to speed on the project. They had to learn about the company's processes, the existing codebase, and the project's requirements. This ramp-up time slowed down the project even more, as the new team members were not able to contribute to the project right away."),(0,n.kt)("p",null,"The team's lack of effective and transparent processes also made it difficult for the new team members to understand what was happening on the project. They were not sure who to go to for help, and they were not sure how to communicate with the rest of the team."),(0,n.kt)("h2",{id:"enforce-using-immature-in-house-developed-abstractions"},"Enforce using immature in-house developed abstractions"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"In-house abstractions",src:a(7777).Z,width:"2041",height:"660"})),(0,n.kt)("p",null,"In-house abstractions are a common (anti)pattern"),(0,n.kt)("p",null,"When a large company enforces internal software development teams to use software abstractions that hide complexities of the Cloud configuration, or enforce using in-house unstable and low-quality shared libraries, it can have negative effects on the delivery time and product quality."),(0,n.kt)("p",null,"This can lead to delays in delivery and lower satisfaction among the development team. Additionally, the use of abstractions can make it more difficult for developers to understand and troubleshoot issues, leading to increased frustration and a decrease in productivity."),(0,n.kt)("p",null,"Furthermore, using in-house shared libraries of low-quality can result in bugs and errors that can be difficult to fix, further delaying delivery and lowering product quality."),(0,n.kt)("h2",{id:"the-actions-we-took-to-improve-the-situation"},"The actions we took to improve the situation"),(0,n.kt)("p",null,"As you can see, there were a number of concerns that needed to be addressed. I then sat down with the rest of the team to discuss our current situation and our future course of action. How can we handle each of these concerns? The list of specific steps we took to advance the project is below."),(0,n.kt)("h3",{id:"evolution-instead-of-revolution"},"Evolution instead of revolution"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Evolution",src:a(7743).Z,width:"960",height:"540"})),(0,n.kt)("p",null,"Performing a major transformation within the automotive industry can be a challenging task, but it is essential to plan for evolution rather than revolution. A compact approach that focuses on gradual changes will be more effective in achieving the desired outcome."),(0,n.kt)("p",null,"When transforming a company, it's important to keep in mind that there may be resistance to changes from employees and stakeholders. This can be due to a lack of willingness to change the status quo or a fear of the unknown. It's crucial to address these concerns and work towards building a shared vision for the future."),(0,n.kt)("p",null,"One way to approach this is by involving employees and stakeholders in the planning process. This allows them to feel a sense of ownership and commitment to the changes that are being made. It's also important to communicate the benefits of the transformation clearly and consistently. This will help to build buy-in and support for the changes that are being made."),(0,n.kt)("h3",{id:"using-project-management-tooling-jira-azure-devops"},"Using project management tooling: JIRA, Azure DEVOPS"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"What should we do",src:a(4783).Z,width:"1243",height:"546"})),(0,n.kt)("p",null,"At the very start, since there wasn\u2019t anything to kick the project off, we operated without any plan or organization. The product owner had a rough idea that needed to be worked on, and that was all there was."),(0,n.kt)("p",null,"First, we organized the work in an iterative manner, by deciding to follow Scrum methodology. We decided to have two-week sprints. We still didn\u2019t have any tools at hand, so we started with a shared document. We wrote some task titles, and next to them, we wrote the names of developers who would like to tackle them. This was the way we did things in the first sprint."),(0,n.kt)("p",null,"After a while, which was to be expected, such a rudimentary process became a bottleneck, so we decided that we should start using self-hosted Jira (provided by the client), which helped increase the transparency of what we do."),(0,n.kt)("p",null,"This has already helped tremendously. As this tool was self-hosted, it suffered stability issues, so we went for a similar tool, Azure DevOps, which has been very stable since then, and it\u2019s still being used on the project."),(0,n.kt)("p",null,"We experienced the following benefits by using these project management tools:"),(0,n.kt)("p",null,"Improved collaboration: These tools allow team members to work together more effectively, by providing a centralized location for project information and communication."),(0,n.kt)("p",null,"Increased visibility: With project management tooling, it is easier to keep track of project progress, identify issues, and make adjustments as needed. This can help teams to stay on schedule and deliver projects on time."),(0,n.kt)("p",null,"Better organization: Project management tooling can help teams to better organize tasks, assign responsibilities, and manage resources. This can improve efficiency and reduce the risk of errors."),(0,n.kt)("p",null,"Enhanced reporting: These tools typically provide detailed reporting and analytics, which can be used to gain insights into project performance and make data-driven decisions."),(0,n.kt)("p",null,"Improved communication: With project management tooling, it is easier to keep stakeholders informed about project progress and status. This can help to build trust and improve the working relationship between different teams and departments."),(0,n.kt)("p",null,"Streamlined workflows: These tools can help to automate repetitive tasks and streamline workflows, making it easier to manage projects and free up team members to focus on more important work."),(0,n.kt)("h3",{id:"using-own-aws--azure-subscriptions-rather-then-a-client-provided-on-premise-solution"},"Using own AWS / Azure subscriptions, rather then a client-provided on premise solution"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWS &amp; Azure",src:a(6452).Z,width:"935",height:"297"})),(0,n.kt)("p",null,"At the start of the project, our team was offered that some other team at the client site manages our infrastructure for us. This was a on-premise solution. This, clearly, could sound reasonable - that someone else volunteers to take part of your problem on themselves - but this was something we didn\u2019t want to happen for a couple of reasons:"),(0,n.kt)("p",null,"More often than not, in-house teams do not have such level of technical expertise compared to engineering force at Microsoft, Google, etc."),(0,n.kt)("p",null,"It\u2019s not a rare case that the documentation doesn\u2019t exist, or it\u2019s very poor"),(0,n.kt)("p",null,"Major cloud vendors are faster with integrating tools, such as for instance Kubernetes, than the in-house teams."),(0,n.kt)("p",null,"Solutions offered by in-house teams have been tested on a much smaller number of customers, so the quality of services offered is significantly lower then the ones provided by major cloud providers."),(0,n.kt)("p",null,"We went for the Azure cloud, which offers many advantages over an on-premise, self-managed solution. Most notably, the ability to scale quickly and elastically as your business needs change. With Azure, you can quickly deploy virtual machines and other services on demand with a few clicks of a button and only pay for what you use. Additionally, since all the infrastructure is managed in the cloud, you don\u2019t have to worry about server maintenance or patching of software updates which can eat up valuable time and resources. Finally, Microsoft provides a wide range of services that are tailored to meet any need, from big data analytics to content delivery networks, along with access to their global network of data centers, ensuring high availability for mission-critical workloads."),(0,n.kt)("h3",{id:"from-nothing-via-self-hosted-gitlab-to-github"},"From nothing, via self-hosted GitLab to GitHub"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"GitLab vs GitHub",src:a(680).Z,width:"1671",height:"381"})),(0,n.kt)("p",null,"The project kicked off with no place where our source-code could be stored. Our external DevOps consultant proposed that we start with self-hosting a GitLab instance. This allows us to have the flexibility of configuring it to fit our needs. We began using the system and were generally content with it, however, we encountered some occasional interruptions in service. This forced us to think about a more stable solution that could boost our productivity."),(0,n.kt)("p",null,"After talking within our team, I came up with proposal to give GitHub and GitHub Actions a try. It became quickly evident that this was the best course of action to take."),(0,n.kt)("p",null,"It enabled us to collaborate on projects with team members located around the world. All code changes are tracked by Github, and it's easy to see exactly who changed what, when they made the change, and any comments that were left with the update. This helped ensure quality control is maintained at all times during development cycles. GitHub Actions helped our developers save time with repetitive tasks such as running tests or deploying builds."),(0,n.kt)("h3",{id:"full-automation-with-iaac-terraform-and-github-actions"},"Full automation with IaaC, terraform and GitHub Actions"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IaaC",src:a(9938).Z,width:"2042",height:"910"})),(0,n.kt)("p",null,"Some practices of our client, at the time I joined the project, were that the applications were quite often managed manually, which made us face the following challenges:"),(0,n.kt)("p",null,"Reduced Visibility: As changes are made manually or using different tools, they can easily go unnoticed, which can cause unexpected issues or conflicts."),(0,n.kt)("p",null,"Manual Updates: Keeping systems up to date and maintaining a consistent configuration requires manual updates, which can be time consuming and prone to errors due to human error."),(0,n.kt)("p",null,"Security Vulnerabilities: Without automation and version control that Infrastructure as Code provides, outdated software and configurations put the system at risk of security vulnerabilities that could allow malicious actors access to the system and data it stores or processes."),(0,n.kt)("p",null,"Poor Scalability: When building systems without Infrastructure as Code, resources become more limited when you need them most - such as during times of increased user demand or when changing business needs demand a larger scale solution than you have currently in place."),(0,n.kt)("p",null,"The team went for Infrastructure as Code (IaaC), and the tool we used for it was Terraform, which helped us manage both of our clouds - the AWS one and the Azure one. We built pipelines that would validate any changes made to the infrastructure, and automatically deploy it to our environments using GitHub Actions, so we eliminated the need for someone to be in charge of doing this manually."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"As a conclusion, this blog post urges you to use cutting-edge software engineering techniques in areas that are technically stale. As a result, businesses will advance, and engineering teams will be happy."),(0,n.kt)("p",null,"If you know someone who could benefit from or be inspired by this article, show your support by sharing it with them!"))}u.isMDXComponent=!0},9311:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img1-5ac26411d5d4c8c879d959118785acc5.png"},9938:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img10-e6c7fe36dc081b2161d622163d29f549.png"},3654:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img2-863fe9960250655321c7b81feeef41e2.png"},4535:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img3-4b01183524d6f5010abfe65734f84862.png"},5624:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img4-15ecbadb4a02bc3ce0650c213affd80f.png"},7777:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img5-bd843381eb731c6a845942cef692859c.png"},7743:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img6-3e77c6c4b24cdfd177e1e17bb63ef47a.png"},4783:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img7-8e564ed92a1d8f5a5f47fa829c5671b1.png"},6452:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img8-10c5bb9ccb4e8b59f2a4afad6b58b2e4.png"},680:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/img9-f1452f0e312158ec6ac856bec39fe6df.png"}}]);