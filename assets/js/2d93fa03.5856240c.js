"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2810],{3905:(A,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>c});var r=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function o(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function p(A,e){if(null==A)return{};var t,r,a=function(A,e){if(null==A)return{};var t,r,a={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var u=r.createContext({}),l=function(A){var e=r.useContext(u),t=e;return A&&(t="function"==typeof A?A(e):o(o({},e),A)),t},i=function(A){var e=l(A.components);return r.createElement(u.Provider,{value:e},A.children)},s="mdxType",d={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(A,e){var t=A.components,a=A.mdxType,n=A.originalType,u=A.parentName,i=p(A,["components","mdxType","originalType","parentName"]),s=l(t),f=a,c=s["".concat(u,".").concat(f)]||s[f]||d[f]||n;return t?r.createElement(c,o(o({ref:e},i),{},{components:t})):r.createElement(c,o({ref:e},i))}));function c(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var n=t.length,o=new Array(n);o[0]=f;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=A,p[s]="string"==typeof A?A:a,o[1]=p;for(var l=2;l<n;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},117:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const n={title:"3 Important Reasons Why I Made My Own Tracking Tool",authors:"gglazewskigran",tags:["productivity"],enableComments:!0},o=void 0,p={permalink:"/2024/01/05/3-important-reasons-why-i-made-my-own-tracking-tool",editUrl:"https://github.com/gran-software-solutions/blog/tree/main/blog/2024-01-05-3-important-reasons-why-i-made-my-own-tracking-tool/index.mdx",source:"@site/blog/2024-01-05-3-important-reasons-why-i-made-my-own-tracking-tool/index.mdx",title:"3 Important Reasons Why I Made My Own Tracking Tool",description:"A timeline with blocks of time on it",date:"2024-01-05T00:00:00.000Z",formattedDate:"January 5, 2024",tags:[{label:"productivity",permalink:"/tags/productivity"}],readingTime:2.465,hasTruncateMarker:!0,authors:[{name:"Greg Glazewski",title:"Software Engineer @ GRAN Software Solutions GmbH",url:"https://github.com/gglazewskigran",imageURL:"https://github.com/gglazewskigran.png",key:"gglazewskigran"}],frontMatter:{title:"3 Important Reasons Why I Made My Own Tracking Tool",authors:"gglazewskigran",tags:["productivity"],enableComments:!0},prevItem:{title:"Quarkus as SaaS Backend: Time Tracking App Case Study",permalink:"/2024/02/02/quarkus-as-saas-backend-time-tracking-app-case-study"},nextItem:{title:"HATEOAS Hands-on for Backend and Frontend",permalink:"/2023/05/24/hateoas-hands-on-backend-frontend"}},u={authorsImageUrls:[void 0]},l=[],i={toc:l},s="wrapper";function d(A){let{components:e,...n}=A;return(0,a.kt)(s,(0,r.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A timeline with blocks of time on it",src:t(6636).Z,title:"Tracking time is fun",width:"815",height:"155"})),(0,a.kt)("p",null,"I\u2019m a software developer and a freelancer. Tracking time is something I\u2019m doing every day."))}d.isMDXComponent=!0},6636:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAy8AAACbCAYAAABrnqTOAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAApdEVYdENyZWF0aW9uIFRpbWUARnIgMDUgSmFuIDIwMjQgMTA6NDY6MTggQ0VUvr8vugAAHy1JREFUeJzt3Xl8VPW9//H3zCSTnSwkEJYQdhL2RZaiVJBFEAWptqCWVkS91P5ud6uP2/Z3+7i3t712uX20tvbXFlqs3tpKBZeCYYmiEiEGCCREDCBLYpBACNm3mcz8/oiM2SYJJOTkm7yejwePB3MmZ87nnO/3fM75nPOdMzav1+sVAAAAAPRwdqsDAAAAAICOoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGCLA6gD6tvFgqvSTVVEv1LqujMYMjUAoKkaLipIgYa2Kg3a6d1e1Gm107q9tMot2uB+1mJqvbjTa7Pla3Wx9l83q9XquD6JPyP5DqqqWaKinvuOSqtToiMwQGScOSpOAwyRkiJSR17/Jpt+tjZbvlfyDVVklVldKlPKmypPuWbbKwKCkuQQoNl4JCrdnXaLdrR7uZycp247h2/aze3/ooihcrlBdLF89JHx5pSBa4dsGh0qip0oDE7rvaQbt1Xne3W3mxdDGv4YBcXnzjl9cbRcRIiclS3LBu3tdot06h3czU3e3Gca1rWLG/9WF858UKJZekmkoSRWfUVDX8K73Ufcuk3Tqvu9vtykWpsowTqc4oL5Yqyrt3X6PdOo92M1N3txvHta5hxf7Wh1G8WKG2Wsr7wOoozJd3vGF8bneh3bpGd7abq1Y6m909y+rNzmZ1775Gu3UN2s1M3dluHNe6Tnfvb30YxYsV6l2MKe0Krtru/WIh7dY1urPd3HXds5y+oDv3Ndqt69BuZuquduO41rV42EG3oHgBAAAAYASKFwAAAABGoHgBAAAAYASKFwAAAABGCLA6AHSv9DMF+t3eTJ0vKdfw/pH6+qJZmjA4tsnfbD2cq6ffOKjYiFBt+ZdVbX6ex+vVX/Yf046sU6p2uTQ9MV7/uuAmxUaE+v6moKRcP9+Zrvc/LlJ0WLDWzpmo5ZNG35D1661eSH9fL2V+oMpal6YNG6jvLJmtmLAQ3/ser1f/+c807c09p0XJI/S95XPb/Lyymlo9nXpI6WcK5AxwaGHScD08b6oCHZ9ez+hIX4F/NS63fpV6UO+czJPdZtOS8SP0lfkz5LDbfH/z/vkifWdLqqpdbj3/8AoNiYpo8zP35ubpL/uz9XFphUbFResr86dpwuC4Jn/TXl9B26zIkR3pK2gbOdI85EhcL4oXw6z548sqrWr5ZJBvL5mlRckj2pz345IK/fDVfXp43lTNGTlYu3LO6N+27tX/PrJS4UGBkqSdOae1+d0sPTpvmrYeyW03nuf2Zyv1+Fl9d+kchQc79Ye3M/XD1/bpN/cvkdRwwPje1reUNKi/vr1klk5dLNFTKfuVEN1Pk4cOuI4tYKZlv/p7i2kD+4Vp87o725039fhZvZCRo+8vv1kDI8P0h7eO6Efb0/Q/X1gkSfJ6vfr5rnR9VFymuyaPUbXL3e5n/vsr7yg4MEA/u3ehympq9fOdBxQY4NDDt0yR1LG+0tv9eEea3jn5UYvpi5NH6FtLZrU7/2/3HtKHl67ol6sXy+Wu1493vKt+IUH60mcmSZJOX7qiJ7e+qQ3zp+uXu99r9/OO5Bfqpyn79fVFMzVmQLReP3ZaT770pp5bv1JRoUGS2u8rfYFpOVJqv6/0BeRI85AjYRWKF8NMGjxAtW63vt0sMYQ6ne3Ou/3Yh5o5fLDumT5OkrTu5sk6eO5jpb5/RiunjdXhcxf0dOohPXXvAlXWduyRl0snjNKtYxM1PDZSkvTY/Bl65C87VF5Tp4hgpw6fu6DSmlo9fvscOew2DY3up5OFxdqWmdunihdJeure25QY8+lVI7utY6M2t2We0INzJ2vWiMGSpH+7Y65WPfMPnbtcqsT+kfrL/mzlFFzSr9Ys0YsH3+/QgfnLcycpKb6/ggMbUsDnb0rW68dO+w7M7fWVvmBKwkBlFVzSr9csVlCAwzfdGdB+2qxxubXz2Gn9v7XLNDI2SpL09UUz9ZMd72rtnIkqqa7Vd7a8oQfnTtbSCSM7dGAePyhW/7VqvqYNGyhJemz+dO3MOa3sgouaNyZBUvt9pS8wLUe211dstr5z94UcaRZyJKzCd14M87WFN+n9j4t0rKBIkSHBvn9Xb2X/dOcBfW/bW63Om1NwSdMTBzaZNnXoQGUXNPwi7LhBMfrve+a3edu7+ecPjAzzHZQlyW63yW6z+eLJOX9JU4YOaHIbeOqwT5fZV6z9zET97s1DCg8K8rVZRHDDydSZohLd+7utyv7oYov56j1e5V64rOnD4n3TwoICNWZgjG8b3jI6Qb/4/ELflaXmPF6vvvSn1/T3jOO+aVMTBvoOypJkt9nkbDQcor2+0hcsnzRaiTGR2nLwgyb7Wsgn2+317A+1+g/bWj0Ryr1wWaHOQN9BWWrY5leqalRQUqHo0GA9sWyOPvfJiU9rmvcLZ4DDd1CWJJvNJptscjoaTho60lf6AqtzZPN+0V6ObK+v9BVt5cjWcthV5EjrkCNhFYoXw0QEO/X47bP1i13pKq2uafG+M8AhZ6MrII0VllcqMqRp8o4OC9bFiipJUpjTqYlD4lqbtUOfX1Hr0ua0bN0+caQv6ReWV7VcZmiwLldUq97jbXNZvcmamePlsNv0v+nHWrxnt9vkDHTIYW+5O16urJLb42l1G14sq5QkjRoQ3WT8fGuCAxxNxmo3VlBSrpePnNCqRlcL2+srfcXjt8/RrpwzOppf2OK9AIdDwQEBau26eGFZy34f6LArzOn0tdvsEUPaXHZb/cJV79Ff38tRVGiQpic2HIg70lf6AqtzZFv9otUc2YG+0he0lSMl/zmMHGktciSswLAxA80eMURzRw3VL3dn6Icr5jV57xsLZ/qdr85dL3uzIQgOu001HbiF3tbnf3SlTI/85XXVuNy6afgg/eDOmz9dpqteQcFNTxSu3oWpdbsV6uwbY4PtNpueXDZXG55L0dxRQzV6QLTvvcSYSP314ZWtzlfn9jTM3yw3O+w21bjrO7zsP3zpjhbTd2R/qF+nZqjWXa8vfWaSlkwY2Wi5ne8rvUFseIj+deEMPZVyQJseXO67oihJi8cP1+Lxw1udr66+XvZWvmzd0G4d24b++sX9G19RYWmlBvYL0y8+v9B3wtUVfaW3sDJHttYv2syRXdBXeoO2cqS/HCaRI61GjoQVuPNiqMcWTFfuhWKlHj/b4XmcAQ55vE3vdtR7vE3Gql6P+MhwbfzyHfrdF5cqKiRYP3j5LXk/WY4zsPVlSlJQB8bF9iZDoyP00C2T9ZMd78pV7+nQPM6Ahl3U0+zPG9qtc7vvrWOHaeOXl+sXn1+oA6fP64X09xst98b0FRMtSh6hMQOj9czeQx2ex+lwyNPKncWGbdi5fv8/X1ioP375Dq2YMkbf3LLHd3fhRvYVExmTI29gXzENOdJM5Eh0N1rLUKHOQK2ZmaxXj57s8DwDIsJUWt30KTwlVTUa2C+sU7EE2O0aEhWhpPj+emLZHB3Ou6AThVfaXGb/sJA++RjQu6eNVUl1rY6d79j42v5hoXLYba23W0R4p2IJCwrU0OgITU+M11dvm6HnDmT7TqhuVF8x1UM3T9H2rA9bnKz4M6BfaIvt56r3qLKuTgP7tT18pT3x/cI1MjZKa2aN1+DIcKUcOyPpxvYVExmTI29gXzEROdJM5Eh0J4oXQ1XVufS3jONaMWVMh+eZOCROh881HZeamV+oSYPbHsPdltOXrrQ63e1puAU7cXCsjn50sUlCy8wr1KSh179Mk72ceUJRIUGa2MFt7rDblBQfq8N5F3zTKmtdOlFY3Klt2Fq71Xu9utpKN6KvmOxPaUe1fPKoFsNE/BkX319VdS6dLirxTTuSX6io0OB2f6fAnwtlFaqsdbWY7q5v2NduVF8xlSk58kb0FZORI81EjkR3ongx1DNvHta4+BgtTB7eZPqvUw/qP/+5r9V5lk8cpYyz57Xl4HGdKSrRn9OylF9cpoXjP/3tgwtlFbpQVqErVTXyeLy+11V1rhaf76r36Hvb3tbPdh5Q7oVifXDhsp56/YDiIkI1ZkCMJGl6Yrwig4P005QDOn3pilI/OKutmbm6e2rfeJRkYx9dKdef9mXpyTvmNvliaF5xmdZuelXHPy5qdb5V08Zq87tZevfDj3Ty4hX9eMe7mjgkzvdYxzp3va+dKmtdqnG7fK/dHo88Xq/+5bkUbcts+E2Ks0Wl+upfd+nFg8d1uqhEmXmF+u0bhzRvdILvwNORvtJX7Dl+RicLr+ix+TNaTH/wz/9sdYx7SGCAbp84Uj9N2a+c80U6ml+oX6dmaNW0sb5H3xZXVutCWYUKP/miaFF5lS6UVajkk98oad4vNr5zVE9ufVOZeYU6femK/vbe+8o5X6S5o4f6ltteX+lLrMqRjftFR3JkR/pKX+EvRzbPYc2RI61FjkR361sDanuJ9NPn9e6HH+nP65a3eK/a5fb7DPtBUeH64Ypb9Ls3M/XHd44oMSZSP/ncAt8PatV7vLrvD680mefq628unqUVU8Y0+fxAh12/WrNYv3nzkL79Yqrsdmny0AH66b23+Z7mY7fZ9KNVt+rnu9K14fkURYcF6//cNkNTEpo+YrK383i9+u/X39UXZiZpTKMvokpSvcejilqXXH6evrYwebgKyyv1i13vqbK2TtOGxet7yz/9wm92wSV9Z0tqk3n2ffLDYc8+dJeGRkeoqq5OtZ98IXF4bKSeumeBfv92pv6076giQoL02TEJWv/J7xdI7feVvqKoolpPpx7Sf6yc1+SLqFLDlz+ral3yN0jisfkz9Ks9GfruP96Qw27T4vEjdP/sCb73//3Vd3Ss0eM5v/H3PZKkBeMS9X/vuqVFv/ju7XO0cd9R/Wh7mqrqXBoRG6X/uvtWjWj0qNH2+kpfYWWObNwvOpIjpfb7Sl/QVo6U1CSHNUeOtA45Elaweb0dHKCIrpObIeW2/4NLrSmvqdO6zf/UNxfN0s2Nrib0WeNmSeP8Pz2oS3Wi3f76Xo7ePpGn396/tE9+16eF7mq3TrSZJD259U0lRPfTVxfMaP+PeztD9jVyZDOGtBs5shlypJm6c3/rw7jzYphfpx7U+EGxmjgktslvGIQ6nX6fUQ/rPbf/mJ669zZV1H76RUG7ze77ETb0PNuzT+lMUYm+tXhWk33NGRDQ4gojeg5ypJnIkeYhR8Iq9C7DZJ+/qNKqWq1pNnTh20tmaVFy3xtra5In/vFGk9cD+4Vp87o7LYoG7TmaX6iy6jp9+U//bDJ9cfIIfWvJLIuiQnvIkeYiR5qFHAmrULwY5m+P3G11CLgOr399tdUh4Br92x2MgzYROdJM5EjzkCNhFe6hAwAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxYuFisoqdeRsge+1x+PRG9knLYyo52ltm5z4+JLyiq5YFJF04MQ5VVTX+l43b0e0vk2ab7fu1BP7UU/UfJtY3bfJke3riX2bHNk+cqSZelqO7KsoXgAAAAAYgeIFAAAAgBEoXgAAAAAYgeIFAAAAgBEoXgAAAAAYgeIFAAAAgBEoXgAAAAAYgeIFAAAAgBEoXgAAAAAYgeIFAAAAgBEoXgAAAAAYgeIFAAAAgBECrA6gLwsNClR8ZITvtc1m14iB/S2MqOdpbZv0Dw9TgMO6untobKScgQ7f6+btiNa3SfPt1p16Yj/qiZpvE6v7NjmyfT2xb5Mj20eONFNPy5F9FcWLhUKDnAoNcvpe22zSiAExFkbU87S2TfpHhFoUTYOhMVFNXjdvR7S+TZpvt+7UE/tRT9R8m1jdt8mR7euJfZsc2T5ypJl6Wo7sqyipAQAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAESheAAAAABiB4gUAAACAEXp08bJnzx6rQwAAAAB6jN58ftyRdevRxQsAAAAAXHVNxUtfr/QAAACAvqInnh9z5wUAAACAESheAAAAABjhhhcvVtxu6o5l9sTbaGgf7WYm2s08tJmZaDfz0GZm6q3nx92xHO68AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI9i8Xq/X6iD6nPxcqarM6ih6h9B+UsK47lkW7dZ1uqvdaLOuw75mJtrNTORIM3Xn/taHUbwAAAAAMALDxgAAAAAYgeIFAAAAgBEoXgAAAAAYIcDqABrzeDzauXOn8vPz5Xa7tWDBAiUnJ0uSMjIy9N5778lms+mmm27SrFmzLI722lRWVuqVV15ReXm5HA6HVq5cqbi4OG3cuFG1tbW+vysuLtYTTzwhp9NpYbTXpqCgQCkpKaqrq1NMTIxWrVolp9Op8+fPa/fu3XI4HHK5XPrsZz+rUaNGWR3uNTl8+LAOHjwol8ul5ORk3XbbbZKknJwcpaWlyWazadCgQVq2bJkcDofF0V6bgoICvfTSS5o2bZrmzZvnm+5vnU3S2rpVVFRo27ZtkqS1a9daGV6nHD16VDt27NADDzygYcOGSWrIG6+99ppqampks9m0dOlS33umqK+v1549e5SRkaHvf//7vumZmZlKT0+XzWZTcHCwVq5cqaioKAsjvXbt9b2jR4/q1Vdf1Q9+8IPuDq3TWtvXSkpK9MwzzygyMtL3d/fee68GDhxoVZjXpbV9TTL/fERqfd16w/mIvzySlZWlgwcP+tblzjvv7DV5JDU1VadOnZLNZtO0adM0c+ZMq0K8Lm63W6+++qouXrwoj8ejWbNm6aabbmqzJuhRxUtWVpaqq6v16KOPqqKiQps2bdLo0aNVWlqqgwcP6tFHH5Ukvfjii5o+fboCAnpU+G3avXu3xo0bpxkzZujUqVPauXOnvvjFL+rhhx/2/c3p06eVmZlpVKLwer3atm2bVq9erbi4OKWmpio9PV3z5s3Trl27dOutt2rEiBG6dOmSXnjhBX3ta1+zOuQOKykp0f79+/XII48oICBAzz77rPLz8xUbG6uUlBRt2LBBYWFhSklJ0ZEjRzRjxgyrQ+6w4uJi7d27V2PGjGky3d86JyQkWBTptfO3blu3btXYsWN18uRJiyLrvKysLH388ccaPHhwk+k7duzQjBkzNHHiRJ05c0Y7duzQhg0bLIry+uzcuVNDhgyRzWbzTaupqdHhw4e1bt06BQUFKS0tTWlpaVq+fLmFkV67tvpeWVmZMjMzFRQUZEFkneNvX6utrdXgwYP14IMPWhNYF/C3rxUVFRl/PuJv3Uw/H5FazyNut1spKSn6xje+IafTqYMHD+qtt97SypUrLYz02rWWR06ePKn8/Hw98sgj8ng8evbZZzVixAjFxsZaGOm12b9/v5xOpzZs2KDq6mr95je/0fjx43XixIlWa4LAwMCeNWzs5MmTmjx5siQpPDxcgwYN0rlz55STk6OpU6cqMDBQgYGBeuCBB4xKFJJ06tQp37qNHj1aFy5ckMvl8r1fX1+v1NRULV682KoQr0tRUZFCQkIUFxcnSZo0aZJOnDghSQoNDVVVVZWkhpOQsLAwy+K8HidPntS4cePkdDplt9s1YcIE5ebmqqSkRFFRUb71SUpK8q2zKSIiInTfffcpPDy8yXR/62wSf+u2Zs2aFgdr0yQlJWnp0qWy25um7rvvvlvjx4+XJEVFRamurs6K8Dpl0aJFmjJlSpNpwcHBWr9+vYKCguTxeFRWVqZ+/fpZFOH1a6vvbd++XUuWLGlysmUKf/tabW2tkcVYY/72td5wPuJv3a4y9XxEaj2P2O12OZ1O1dTUSGo4H2neZ03QWh65fPmyEhISZLfbFRAQoNGjRxt3gW7WrFlasmSJJCkkJESBgYFyuVx+awKph915qaioUEREhO91RESEysvLVVJSosjISG3ZskXl5eWaNm2apk2bZmGk16a+vl4ej0eBgYG+aWFhYSovL1dMTIwk6dixY0pMTDTuwFxeXt4kCYSHh6usrOGZ8UuWLNHmzZu1f/9+lZWVafXq1VaFeV3Ky8ub9Mfw8HAVFBQoJiZGpaWlvn6Zm5ur8vJyCyO9do37YmP+1tkk/tbNtCuIrfG3Do33wX379hl1F/CqttonPT1de/fu1bBhw3wHOZP4W7dDhw4pPj7e2KLa375WW1urkpISPf/886qurtbIkSO1YMECvyfLPZG/NjP9fERqPxeaej4itb5udrtdy5Yt0+9//3tFRUXJ7XZr3bp1FkTXOa2tW3x8vPbs2eO7GH769GkNGTKku0PrlMYXOrKzsxUXF6fIyEi/NYHUw4oXqWEYUuP/22w2ud1uXblyRffcc49qa2u1ceNGDRkyRAMGDLAw0s65um5XHThwQJ/73OcsjKhrNF6v7du3a+nSpUpKStL58+e1bds2PfbYY8ZcYWwe59V1CwoK0ooVK/Tyyy/L4XAoMTHRuCtv/vhbZ/R8Ho9HO3bskMfj0dy5c60Op0vNnj1bM2fOVGpqqlJSUowbNtaakpISZWdnG/39K39iY2M1d+5cTZgwQZK0ZcsWHTp0yLix+K3pjecjzfWW85Gr6urqtGvXLj366KOKjIzUgQMHtGvXLq1YscLq0Dpt+PDhGj9+vJ577jmFhIRo4MCBxp6PHDlyRIcOHdL999/vm9ZaTSD1sKeNNa6qpIaxwBEREerXr58SExNlt9sVEhKihIQEXbx40cJIr43D4VBAQIBvKIfX61VlZaWvoiwuLpbX6/UNvTJJv379WrTZ1as1Z8+e9Y2FHjx4sOrq6lRRUWFJnNcjIiLCdxdJargrcXXdRo8erQcffFBr165VXFyccV/886etdUbP5fV69dJLLykkJEQrV67sNQVnZWWlTp8+Lanh6unUqVN19uxZa4PqIrm5uaqurtbmzZu1adMm1dbWatOmTXK73VaH1mnR0dGaMmWKAgICFBAQoKSkJF24cMHqsLqE6ecj7TH5fMSfwsJChYeH+x4gMXbsWOXl5VkcVdeZO3euHnroId13332y2+1Gno+kp6f7LuaEhIRI8l8TSD2seBk3bpyysrIkSaWlpSosLFRiYqLGjRun48ePy+PxyO126/z588btWGPGjPGt2wcffKCEhARfdXzu3DnFx8dbGd51i42NVV1dnS95Hz161Pc0iP79+/uGHJWWlsrj8Rj1vZexY8fqxIkTqqurU319vY4dO6bk5GR5vV5t2rRJFRUV8ng8ysjI0MSJE60Ot0v4W2f0bGlpaYqIiNDChQutDqVL1dfXa9u2bb6LHmfOnDHqi6htmT17tr7yla9o/fr1vu/1rF+/3tirpo3l5ORo+/btkhoK61OnThl7jGuuN5yPtMXk8xF/oqOjdeXKFd+T1HpTm12+fFnPP/+8PB6PKioqlJubq6SkJKvDuiZ5eXk6duyY7rvvviZD4/zVBJJk8za+J2Mxj8ej7du3Ky8vTzabTYsXL/Zdud+3b5+OHz+u+vp6TZ06VXPmzLE42mtTUVGhrVu3qqKiQsHBwVq1apWio6MlSW+99Zbq6+uNfCSt1NDxrg5XGTBggO6++24FBATo/Pnz2rVrlxwOh9xut5GPSs7IyPA9pnXy5Mm+R4FmZ2frnXfekcfjUXJysnEnjTk5OXr77bd9D1QIDQ3V7bffrpEjR/pdZ1O0tm4333yz0tLS5HK5VFlZqaioKE2aNEm33HKLxdFem927d+vUqVMqKSlRWFiYAgMDtW7dOj399NMKCQlp8rju9evXG/U9n2effVZVVVW6dOmS4uLiFBMTo9WrVys7O9v3WPLQ0FDdddddRl1ZLCkp0QsvvNBu3/vZz36mxx9/3KIor4+/PDJs2DC99tprKiwslM1mU0JCQptfEO+J/O1rwcHBxp+PtLVupp+P+MsjWVlZysjIkNPplM1m0/Lly33nYCZoK4/s2rVLp06dktfr1fz5833DNU2xZcsW5efn++64SNLSpUuVmJjotyboUcULAAAAAPhjzmUQAAAAAH0axQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI1C8AAAAADACxQsAAAAAI/x/yjqc9Ep8YmoAAAAASUVORK5CYII="}}]);