"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6227],{35318:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25683:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(25773),r=(a(27378),a(35318));const o={sidebar_position:30,title:"Custom Lima instance",description:"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.",tags:["podman-desktop","podman","onboarding","containers","linux","macOS"],keywords:["podman desktop","containers","lima","onboarding","linux","macos"]},i="Creating a Lima instance for container workloads with Podman Desktop",s={unversionedId:"onboarding-for-containers/creating-a-lima-instance-with-podman-desktop",id:"onboarding-for-containers/creating-a-lima-instance-with-podman-desktop",title:"Custom Lima instance",description:"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.",source:"@site/docs/onboarding-for-containers/creating-a-lima-instance-with-podman-desktop.md",sourceDirName:"onboarding-for-containers",slug:"/onboarding-for-containers/creating-a-lima-instance-with-podman-desktop",permalink:"/docs/onboarding-for-containers/creating-a-lima-instance-with-podman-desktop",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/onboarding-for-containers/creating-a-lima-instance-with-podman-desktop.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"podman",permalink:"/docs/tags/podman"},{label:"onboarding",permalink:"/docs/tags/onboarding"},{label:"containers",permalink:"/docs/tags/containers"},{label:"linux",permalink:"/docs/tags/linux"},{label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Custom Lima instance",description:"Podman Desktop can assist you to create a custom Lima instance on Linux and macOS.",tags:["podman-desktop","podman","onboarding","containers","linux","macOS"],keywords:["podman desktop","containers","lima","onboarding","linux","macos"]},sidebar:"mySidebar",previous:{title:"Custom Podman machine",permalink:"/docs/onboarding-for-containers/creating-a-podman-machine-with-podman-desktop"},next:{title:"Onboarding for Kubernetes",permalink:"/docs/onboarding-for-kubernetes/"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-lima-instance-for-container-workloads-with-podman-desktop"},"Creating a Lima instance for container workloads with Podman Desktop"),(0,r.kt)("p",null,"To use the Lima provider you need a Lima instance running a Linux virtual machine."),(0,r.kt)("p",null,"In the future, Podman Desktop might be able to create Lima instances."),(0,r.kt)("p",null,"Consider creating a custom Lima instance to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Control the assigned resources: CPUs, memory, and disk size."),(0,r.kt)("li",{parentName:"ul"},"Use the rootful connection by default, for example to run Kind.")),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"limactl")," executable is installed.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://lima-vm.io/docs/installation/"},"Installing Lima"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ brew install lima\n")))),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In a terminal, create the Lima instance."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create a Lima instance with rootless Podman, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman")," template:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ limactl start --name=podman template://podman\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create a Lima instance with rootful Podman, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-rootful")," template:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ limactl start --name=podman template://podman-rootful\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create an Lima instance with rootless Docker, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," template:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ limactl start --name=docker template://docker\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create an Lima instance with rootful Docker, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-rootful")," template:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ limactl start --name=docker template://docker-rootful\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To select the number of CPUs, the memory, and the disk size, add the options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"limactl start")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"--cpus=2 --memory=2 --disk=50\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for the instance to start, and restart the Lima extension."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences > Extension: Lima"),", to change the instance name and type."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Podman (default)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: podman"),(0,r.kt)("li",{parentName:"ul"},"Name: podman\n",(0,r.kt)("img",{alt:"Lima preferences Podman",src:a(99939).Z,width:"602",height:"199"})))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Docker"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: docker"),(0,r.kt)("li",{parentName:"ul"},"Name: docker\n",(0,r.kt)("img",{alt:"Lima preferences Docker",src:a(1533).Z,width:"607",height:"205"})))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Extensions > Lima"),", to disable and enable the extension after changes."))))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'To verify the connection to a running "podman" instance:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ podman.lima version\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'To verify the connection to a running "docker" instance:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker.lima version\n")))))}c.isMDXComponent=!0},1533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lima-preferences-docker-2a17aa75bf2d45cb2850ce869016acea.png"},99939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lima-preferences-podman-1bc867f183e9e7cc1eb9bfc1f4e695c1.png"}}]);