"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3249],{4029:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(6540),l=n(53),r=n(1003),o=n(7559),i=n(7131),c=n(6669),s=n(2011),m=n(8168),d=n(1312),u=n(9022);function g(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.A,(0,m.A)({},n,{subLabel:a.createElement(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.A,(0,m.A)({},t,{subLabel:a.createElement(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function f(){const{assets:e,metadata:t}=(0,i.e)(),{title:n,description:l,date:o,tags:c,authors:s,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(r.be,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:o}),s.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&a.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}var v=n(7763);function p(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.e)(),{nextItem:o,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:f,toc_max_heading_level:p}=d;return a.createElement(c.A,{sidebar:t,toc:!u&&r.length>0?a.createElement(v.A,{toc:r,minHeadingLevel:f,maxHeadingLevel:p}):void 0},a.createElement(s.A,null,n),(o||m)&&a.createElement(g,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.i,{content:e.content,isBlogPostPage:!0},a.createElement(r.e3,{className:(0,l.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage)},a.createElement(f,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},7763:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(8168),l=n(6540),r=n(53),o=n(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},c="table-of-contents__link toc-highlight",s="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,r.A)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(o.A,(0,a.A)({},n,{linkClassName:c,linkActiveClassName:s})))}},5195:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(8168),l=n(6540),r=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>c(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const g=l.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:u,...f}=e;const v=(0,r.p)(),p=m??v.tableOfContents.minHeadingLevel,h=u??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return d((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:h}}),[c,s,p,h])),l.createElement(g,(0,a.A)({toc:b,className:n,linkClassName:c},f))}},2011:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),l=n(7131),r=n(8258);function o(e){const{metadata:t,isBlogPostPage:n}=(0,l.e)(),{frontMatter:o,slug:i,title:c}=t,{enableComments:s}=o;return a.createElement(a.Fragment,null,a.createElement(r.A,e))}}}]);