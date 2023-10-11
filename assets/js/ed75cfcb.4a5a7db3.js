"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3584],{35318:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>k});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=c(a),k=r,u=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return a?n.createElement(u,i(i({ref:t},l),{},{components:a})):n.createElement(u,i({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},56117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>c});var n=a(25773),r=(a(27378),a(35318));const o={sidebar_position:3,title:"Using `podman-mac-helper` on macOS",description:"Using the `podman-mac-helper` tool can make it easier to migrate from Docker to Podman on macOS, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",keywords:["podman desktop","podman","containers","migrating","docker","macos"],tags:["migrating-from-docker","mac0S"]},i="Using the podman-mac-helper tool to migrate from Docker to Podman on macOS",m={unversionedId:"migrating-from-docker/using-podman-mac-helper",id:"migrating-from-docker/using-podman-mac-helper",title:"Using `podman-mac-helper` on macOS",description:"Using the `podman-mac-helper` tool can make it easier to migrate from Docker to Podman on macOS, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",source:"@site/docs/migrating-from-docker/using-podman-mac-helper.md",sourceDirName:"migrating-from-docker",slug:"/migrating-from-docker/using-podman-mac-helper",permalink:"/docs/migrating-from-docker/using-podman-mac-helper",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/migrating-from-docker/using-podman-mac-helper.md",tags:[{label:"migrating-from-docker",permalink:"/docs/tags/migrating-from-docker"},{label:"mac0S",permalink:"/docs/tags/mac-0-s"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Using `podman-mac-helper` on macOS",description:"Using the `podman-mac-helper` tool can make it easier to migrate from Docker to Podman on macOS, as it allows you to continue using familiar Docker commands while taking advantage of the benefits of Podman.",keywords:["podman desktop","podman","containers","migrating","docker","macos"],tags:["migrating-from-docker","mac0S"]},sidebar:"mySidebar",previous:{title:"Using the `DOCKER_HOST` environment variable",permalink:"/docs/migrating-from-docker/using-the-docker_host-environment-variable"},next:{title:"Emulating Docker CLI with Podman",permalink:"/docs/migrating-from-docker/emulating-docker-cli-with-podman"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Additional resources",id:"additional-resources",level:4}],l={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-the-podman-mac-helper-tool-to-migrate-from-docker-to-podman-on-macos"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h1"},"podman-mac-helper")," tool to migrate from Docker to Podman on macOS"),(0,r.kt)("p",null,"Consider using ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-mac-help")," to migrate transparently to Podman on macOS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Continue using familiar Docker commands."),(0,r.kt)("li",{parentName:"ul"},"Take advantage of the benefits of Podman on macOS."),(0,r.kt)("li",{parentName:"ul"},"Your tools, such as ",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/"},"Maven")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.testcontainers.org/"},"Testcontainers"),", communicate with Podman without reconfiguration.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-mac-helper")," tool provides a compatibility layer that allows you to use most Docker commands with Podman on macOS.\nThe service redirects ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/run/docker")," to the fixed user-assigned UNIX socket location."),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/installation/macos-install"},"Podman")),(0,r.kt)("li",{parentName:"ul"},"Docker service is ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/use-desktop/pause/"},"paused")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/settings/mac/"},(0,r.kt)("em",{parentName:"a"},"Start Docker Desktop when you log in")," is disabled"),", or Docker is ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/uninstall/"},"uninstalled"),".")),(0,r.kt)("h4",{id:"procedure"},"Procedure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"podman-mac-helper")," service: run the command in a terminal:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"sudo podman-mac-helper install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart your Podman machine: go to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),", and in the Podman tile, click ",(0,r.kt)("icon",{icon:"fa-solid fa-repeat",size:"lg"}),"."))),(0,r.kt)("h4",{id:"verification"},"Verification"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Docker socket is a symbolic link for the Podman socket:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ ls -la /var/run/docker.sock\n")),(0,r.kt)("p",{parentName:"li"},"The output points to a ",(0,r.kt)("inlineCode",{parentName:"p"},"podman.sock")," file such as:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"/var/run/docker.sock -> /Users/username/.local/share/containers/podman/machine/podman.sock\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you query the Docker socket, you receive replies from Podman rather than Docker."),(0,r.kt)("p",{parentName:"li"},"For instance, this command outputs Podman version rather that Docker version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},'$ curl -s --unix-socket /var/run/docker.sock "http://v1.41/info"  | jq -r .ServerVersion\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your tools communicating to the Docker socket, such as ",(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/"},"Maven")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},"Testcontainers"),", communicate with Podman without reconfiguration.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optionally, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," CLI is installed) The docker CLI context is set to the default value ",(0,r.kt)("inlineCode",{parentName:"p"},"unix:///var/run/docker.sock"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker context list\nNAME       TYPE  DESCRIPTION                              DOCKER ENDPOINT             KUBERNETES ENDPOINT  ORCHESTRATOR\ndefault *  moby  Current DOCKER_HOST based configuration  unix:///var/run/docker.sock\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optionally, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," CLI is installed) The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," CLI communicates with the Podman socket."),(0,r.kt)("p",{parentName:"li"},"Therefore this command outputs Podman version rather that Docker version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ docker info --format=json | jq -r .ServerVersion\n")))),(0,r.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/tree/main/cmd/podman-mac-helper"},(0,r.kt)("inlineCode",{parentName:"a"},"podman-mac-helper")," source"))))}p.isMDXComponent=!0}}]);