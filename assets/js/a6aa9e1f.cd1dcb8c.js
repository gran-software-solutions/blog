"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3089],{46:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7294),r=a(6010),o=a(2263),l=a(1944),i=a(5281),s=a(9058),c=a(9703),m=a(197),g=a(9985);function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,o.Z)(),{blogDescription:r,blogTitle:i,permalink:s}=t,c="/"===s?a:i;return n.createElement(n.Fragment,null,n.createElement(l.d,{title:c,description:r}),n.createElement(m.Z,{tag:"blog_posts_list"}))}function u(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(s.Z,{sidebar:r},n.createElement(g.Z,{items:a}),n.createElement(c.Z,{metadata:t}))}function d(e){return n.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage)},n.createElement(p,e),n.createElement(u,e))}},9703:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(5999),o=a(2244);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(o.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(o.Z,{permalink:l,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},9985:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(9460),o=a(7544);function l(e){let{items:t,component:a=o.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}},7544:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7294),r=a(9460),o=a(390),l=a(9861),i=a(2949);function s(){const{colorMode:e}=(0,i.I)();return n.createElement(l.Z,{repo:"gran-software-solutions/blog",repoId:"R_kgDOJKz_sQ",category:"General",categoryId:"DIC_kwDOJKz_sc4CVIMy",mapping:"url",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",loading:"lazy",crossorigin:"anonymous",async:!0})}var c=a(2389),m=a(7228);function g(e){const{metadata:t,isBlogPostPage:a}=(0,r.C)(),{frontMatter:l,slug:i,title:g}=((0,c.Z)(),t),{enableComments:p}=l;return n.createElement(n.Fragment,null,n.createElement(m.ZP,{expires:233,cookieName:"cookieConsentGivenOn",cookieValue:(new Date).toISOString()},"We use Cookies to deliver and improve our content. Please consult our ",n.createElement("a",{href:"https://www.gransoftware.de/privacy-policy"},"privacy policy")),n.createElement(o.Z,e),p&&a&&n.createElement(s,null))}}}]);