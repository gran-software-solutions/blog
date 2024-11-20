"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5590],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(6540);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,r=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),y=s,d=h["".concat(r,".").concat(y)]||h[y]||p[y]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[h]="string"==typeof e?e:s,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9041:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(6540);const s=function(e){const t=e.width?{width:`${e.width}px`}:{};return void 0!==e.title?a.createElement("center",null,a.createElement("figure",null,a.createElement("img",{src:e.src,alt:e.alt,style:t}),a.createElement("figcaption",{style:{textAlign:"center"}},e.title))):a.createElement("img",{src:e.src,alt:e.alt,style:t})}},9860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(8168),s=(n(6540),n(5680));n(9041);const o={title:"Weekly Sheetty Scoop\ud83c\udf66 #5",authors:"gglazewskigran",tags:["sheetty","weekly"],enableComments:!0},i=void 0,l={permalink:"/2024/04/26/weekly-sheetty-scoop-5",source:"@site/blog/2024-04-26-weekly-sheetty-scoop-5/index.mdx",title:"Weekly Sheetty Scoop\ud83c\udf66 #5",description:"Our server has root access with a password.",date:"2024-04-26T00:00:00.000Z",formattedDate:"April 26, 2024",tags:[{label:"sheetty",permalink:"/tags/sheetty"},{label:"weekly",permalink:"/tags/weekly"}],readingTime:5.84,hasTruncateMarker:!0,authors:[{name:"Greg Glazewski",title:"Software Engineer @ GRAN Software Solutions GmbH",url:"https://www.linkedin.com/in/greg-glazewski-88390827",imageURL:"https://github.com/gglazewskigran.png",key:"gglazewskigran"}],frontMatter:{title:"Weekly Sheetty Scoop\ud83c\udf66 #5",authors:"gglazewskigran",tags:["sheetty","weekly"],enableComments:!0},prevItem:{title:"Sheetty Teams: Collaborate and Track Time Together",permalink:"/2024/04/29/sheetty-teams-intro"},nextItem:{title:"Weekly Sheetty Scoop\ud83c\udf66 #4",permalink:"/2024/04/19/weekly-sheetty-scoop-4"}},r={authorsImageUrls:[void 0]},c=[{value:"Fortifying The Remote Access",id:"fortifying-the-remote-access",level:2},{value:"First of all, the root user is a dangerous user.",id:"first-of-all-the-root-user-is-a-dangerous-user",level:3},{value:"Secondly, password access is a vulnerability.",id:"secondly-password-access-is-a-vulnerability",level:3},{value:"Thirdly, the port itself is a danger.",id:"thirdly-the-port-itself-is-a-danger",level:3},{value:"How To Turn My SSH Access Into a Fortress?",id:"how-to-turn-my-ssh-access-into-a-fortress",level:2},{value:"Close The Doors",id:"close-the-doors",level:3},{value:"Disable root Access",id:"disable-root-access",level:3},{value:"Disable Password Authentication",id:"disable-password-authentication",level:3},{value:"Create Custom Users",id:"create-custom-users",level:3},{value:"Change Default SSH Port",id:"change-default-ssh-port",level:3},{value:"That&#39;s All Folks",id:"thats-all-folks",level:2}],u={toc:c},h="wrapper";function p(e){let{components:t,...o}=e;return(0,s.yg)(h,(0,a.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Our server has root access with a password."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"ssh root@x.x.x.x")),(0,s.yg)("p",null,"It\u2019s default, it\u2019s how it\u2019s been provisioned."),(0,s.yg)("p",null,"It\u2019s not good."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Weekly Sheetty Scoop #5",src:n(7609).A,title:"Weekly Sheetty Scoop #5",width:"960",height:"540"})),(0,s.yg)("h2",{id:"fortifying-the-remote-access"},"Fortifying The Remote Access"),(0,s.yg)("h3",{id:"first-of-all-the-root-user-is-a-dangerous-user"},"First of all, the root user is a dangerous user."),(0,s.yg)("p",null,"Anyone accessing our VPS with root user has unrestricted access, can create or delete anything on the filesystem, start or stop any service. With not necessarily bad intentions, you could break stuff accidentally."),(0,s.yg)("p",null,"Root user is so obvious bots are attacking constantly (we had around 1752 access attempts in 12h from starting the server)."),(0,s.yg)("h3",{id:"secondly-password-access-is-a-vulnerability"},"Secondly, password access is a vulnerability."),(0,s.yg)("p",null,"Scripts can rapidly re-try various passwords until they find it. Passwords can be guessed if you are not using random characters. Passwords can be sniffed with keyloggers."),(0,s.yg)("h3",{id:"thirdly-the-port-itself-is-a-danger"},"Thirdly, the port itself is a danger."),(0,s.yg)("p",null,"Although there are over 120k ports in your server, only three of them account for 65% of all attacks. ",(0,s.yg)("a",{parentName:"p",href:"https://www.alertlogic.com/blog/65-of-port-vulnerabilities-target-just-three-ports/"},"And one of them is port 22, the ssh port"),"."),(0,s.yg)("p",null,"That\u2019s a lot of topics, so I\u2019ll break it down into multiple posts."),(0,s.yg)("h2",{id:"how-to-turn-my-ssh-access-into-a-fortress"},"How To Turn My SSH Access Into a Fortress?"),(0,s.yg)("p",null,"Let\u2019s say you have secret documents from ESA, NASA and Pentagon. You have to protect it from Russian hackers."),(0,s.yg)("p",null,"So you go to contabo.com and buy a VPS for 4,50\u20ac. After 5 minutes it\u2019s up and ready. You SSH inside with your root access and place the secret file there."),(0,s.yg)("p",null,(0,s.yg)("inlineCode",{parentName:"p"},"esa_nasa_pentagon_db_dump.sql")),(0,s.yg)("h3",{id:"close-the-doors"},"Close The Doors"),(0,s.yg)("p",null,"For all the reasons mentioned above, you need to close the doors. We are using ansible (",(0,s.yg)("a",{parentName:"p",href:"https://docs.ansible.com/"},"https://docs.ansible.com/"),") to provision our servers."),(0,s.yg)("p",null,"We have a playbook called close_the_doors.yaml and it looks like this:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"- hosts: all\n become: true\n\n vars:\n   users:\n     - name: gg\n       email: gg@gransoftware.de\n       public_key: \"\n     ,,__     oink\n    c''   )?     oink\n      ''''\n          \"\n     - name: do\n       email: do@gransoftware.de\n       public_key: \"wink wink :)\"\n\n tasks:\n   - name: Create users\n     ansible.builtin.user:\n       name: \"{{ item.name }}\"\n       comment: \"{{ item.email }}\"\n       group: sudo\n       append: true\n     loop: \"{{ users }}\"\n\n   - name: Ensure .ssh directory exists\n     ansible.builtin.file:\n       path: \"/home/{{ item.name }}/.ssh\"\n       state: directory\n       mode: '0700'\n       owner: \"{{ item.name }}\"\n     loop: \"{{ users }}\"\n\n   - name: Copy public keys\n     ansible.builtin.copy:\n       content: \"{{ item.public_key }}\"\n       dest: \"/home/{{ item.name }}/.ssh/authorized_keys\"\n       mode: '0600'\n       owner: \"{{ item.name }}\"\n     loop: \"{{ users }}\"\n\n   - name: Disable root login\n     ansible.builtin.lineinfile:\n       path: /etc/ssh/sshd_config\n       regexp: '^PermitRootLogin'\n       line: 'PermitRootLogin no'\n\n   - name: Allow no password for sudo group in sudoers\n     ansible.builtin.lineinfile:\n       path: /etc/sudoers\n       line: '%sudo ALL=(ALL:ALL) NOPASSWD:ALL'\n       validate: 'visudo -cf %s'\n\n   - name: Disable PasswordAuthentication\n     lineinfile:\n       path: /etc/ssh/sshd_config\n       regexp: '^PasswordAuthentication'\n       line: 'PasswordAuthentication no'\n\n    - name: Enable PubkeyAuthentication\n      lineinfile:\n        path: /etc/ssh/sshd_config\n        regexp: '^#PubkeyAuthentication'\n        line: 'PubkeyAuthentication yes'\n\n   - name: Change default SSH port\n     ansible.builtin.lineinfile:\n       path: /etc/ssh/sshd_config\n       regexp: '^#?Port'\n       line: 'Port 2222'\n     notify: Restart sshd\n\n handlers:\n   - name: Restart sshd\n     ansible.builtin.service:\n       name: sshd\n       state: restarted\n")),(0,s.yg)("h3",{id:"disable-root-access"},"Disable root Access"),(0,s.yg)("p",null,"To close the doors we need to disallow root login."),(0,s.yg)("p",null,"Most likely, the default sshd settings of your server (",(0,s.yg)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),") look like this:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"...\n#LoginGraceTime 2m\nPermitRootLogin yes # <--- this line allows to use ssh root@0.0.0.0\n#StrictModes yes\n#MaxAuthTries 6\n#MaxSessions 10\n...\n")),(0,s.yg)("p",null,"Ansible has this ",(0,s.yg)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/lineinfile_module.html"},"lineinfile module")," that allows us to:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"make sure that a defined line exists in a file,"),(0,s.yg)("li",{parentName:"ul"},"or find lines with regex and replace them with the defined line.")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"   - name: Disable root login\n     ansible.builtin.lineinfile:\n       path: /etc/ssh/sshd_config\n       regexp: '^PermitRootLogin'\n       line: 'PermitRootLogin no'\n")),(0,s.yg)("p",null,"Once it's done, no amount of ",(0,s.yg)("inlineCode",{parentName:"p"},"ssh root@x.x.x.x")," will let them bots in."),(0,s.yg)("h3",{id:"disable-password-authentication"},"Disable Password Authentication"),(0,s.yg)("p",null,"Then we disable passwords for all users, forcing them to use keys. The default sshd_config may look like this:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"...\n#PubkeyAuthentication yes\n...\nPasswordAuthentication yes\n...\n")),(0,s.yg)("p",null,"In order to make the remote access to VPS more secure, we'll disable password authentication and force users to use keys."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"- name: Disable PasswordAuthentication\n     lineinfile:\n       path: /etc/ssh/sshd_config\n       regexp: '^PasswordAuthentication'\n       line: 'PasswordAuthentication no'\n\n- name: Enable PubkeyAuthentication\n      lineinfile:\n        path: /etc/ssh/sshd_config\n        regexp: '^#PubkeyAuthentication'\n        line: 'PubkeyAuthentication yes'\n\n")),(0,s.yg)("p",null,"From now on, no one can SSH into the ",(0,s.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Virtual_private_server"},"VPS")," using root user or passwords."),(0,s.yg)("p",null,"All changes in the ",(0,s.yg)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config")," file require restart of the SSH Daemon. More about this in a bit."),(0,s.yg)("h3",{id:"create-custom-users"},"Create Custom Users"),(0,s.yg)("p",null,"Effectively, you would lose access to your ",(0,s.yg)("inlineCode",{parentName:"p"},"esa_nasa_pentagon_db_dump")," file. To maintain access to the VPS, we\u2019ll create users in the same playbook."),(0,s.yg)("p",null,"Use vars to create a list of users that you want to give access to. Those are defined by a name, email and a public key. I won\u2019t explain ",(0,s.yg)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"how to generate keys"),"."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'vars:\n  users:\n    - name: John Doe\n      email: jd@gransoftware.de\n      public_key: "RSA or whatever you use"\n    - name: Jane Doe\n      email: jd2@gransoftware.de\n      public_key: "RSA or whatever you use"\n')),(0,s.yg)("p",null,"Storing public keys in git is fine, so we\u2019ll simply hardcode them. And by using another handy ",(0,s.yg)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/user_module.html"},"module from Ansible")," we can easily create users on the machine (you don\u2019t have to loop if you need only one user)."),(0,s.yg)("p",null,"It\u2019s important to add them to the sudo group so they can operate the VPS. If your users are in multiple groups, then set the ",(0,s.yg)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/user_module.html#parameter-append"},"flag \u201cappend\u201d to true"),"."),(0,s.yg)("p",null,"Now that users are created, it doesn't mean yet that they can login via SSH. To allow this, we have to create the ",(0,s.yg)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys")," files for each user. Sooo, another ",(0,s.yg)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/file_module.html"},"module")," and another loop."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},'- name: Ensure .ssh directory exists\n  ansible.builtin.file:\n    path: "/home/{{ item.name }}/.ssh"\n    state: directory\n    mode: \'0700\'\n    owner: "{{ item.name }}"\n  loop: "{{ users }}"\n\n- name: Copy public keys\n  ansible.builtin.copy:\n    content: "{{ item.public_key }}"\n    dest: "/home/{{ item.name }}/.ssh/authorized_keys"\n    mode: \'0600\'\n    owner: "{{ item.name }}"\n  loop: "{{ users }}"\n')),(0,s.yg)("p",null,"Important! ",(0,s.yg)("a",{parentName:"p",href:"https://askubuntu.com/a/746246"},"Make sure that the directory has a mode 700 and that the user owns the directory"),"."),(0,s.yg)("p",null,"Once the directory is created, you use the []copy module](",(0,s.yg)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/copy_module.html"},"https://docs.ansible.com/ansible/latest/collections/ansible/builtin/copy_module.html"),") to create a file (confusing name, aint it?) with the public key."),(0,s.yg)("h3",{id:"change-default-ssh-port"},"Change Default SSH Port"),(0,s.yg)("p",null,"The best way to win a fight is to avoid it. And since the majority of bots and scripts attack port 22, we\u2019ll simply change it and mitigate the huge swaths of potential attacks by doing so."),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"   - name: Change default SSH port\n     ansible.builtin.lineinfile:\n       path: /etc/ssh/sshd_config\n       regexp: '^#?Port'\n       line: 'Port 2222'\n     notify: Restart sshd # <-- this will trigger a handler. See below \ud83d\udc47\n")),(0,s.yg)("p",null,"I know, the ",(0,s.yg)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config")," file got really pulverized. But it\u2019s necessary to fortify remote access to the VPS."),(0,s.yg)("admonition",{type:"tip"},(0,s.yg)("p",{parentName:"admonition"},"For the changes in this file to take effect, you need to restart the sshd. Ansible lets you do that by defining a ",(0,s.yg)("inlineCode",{parentName:"p"},"handler")," and by using ",(0,s.yg)("inlineCode",{parentName:"p"},"notify")," to trigger it by name after the task is done."),(0,s.yg)("pre",{parentName:"admonition"},(0,s.yg)("code",{parentName:"pre",className:"language-yaml"},"handlers:\n  - name: Restart sshd\n    ansible.builtin.service:\n      name: sshd\n      state: restarted\n"))),(0,s.yg)("p",null,"Now fire it up\n",(0,s.yg)("inlineCode",{parentName:"p"},"ansible-playbook close_the_doors.yaml")),(0,s.yg)("p",null,"And sleep well, knowing that the KGB won\u2019t steal your Western secrets."),(0,s.yg)("h2",{id:"thats-all-folks"},"That's All Folks"),(0,s.yg)("p",null,"That\u2019s it for this week\u2019s Weekly Sheetty Scoop. Thanks for reading!"),(0,s.yg)("p",null,"But don\u2019t just read. Try it out now. It only takes 1 minute: ",(0,s.yg)("a",{parentName:"p",href:"https://sheetty.com"},"sheetty.com"),"\nAnd with a 90 day trial, you can\u2019t go wrong."))}p.isMDXComponent=!0},7609:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cover-af9695aa10a037bd0d9daea811bd1e41.png"}}]);