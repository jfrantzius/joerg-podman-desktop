"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2570],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),k=o,g=p["".concat(l,".").concat(k)]||p[k]||d[k]||i;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},59002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(25773),o=(r(27378),r(35318));const i={sidebar_position:5,title:"Restarting your Kind cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},a="Restarting your local Kind-powered Kubernetes cluster",s={unversionedId:"onboarding-for-kubernetes/kind/restarting-your-kind-cluster",id:"onboarding-for-kubernetes/kind/restarting-your-kind-cluster",title:"Restarting your Kind cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",source:"@site/docs/onboarding-for-kubernetes/kind/restarting-your-kind-cluster.md",sourceDirName:"onboarding-for-kubernetes/kind",slug:"/onboarding-for-kubernetes/kind/restarting-your-kind-cluster",permalink:"/docs/onboarding-for-kubernetes/kind/restarting-your-kind-cluster",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/onboarding-for-kubernetes/kind/restarting-your-kind-cluster.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"kind",permalink:"/docs/tags/kind"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Restarting your Kind cluster",description:"Restarting your local Kind-powered Kubernetes cluster.",keywords:["podman desktop","podman","containers","migrating","kubernetes","kind"],tags:["migrating-to-kubernetes","kind"]},sidebar:"mySidebar",previous:{title:"Creating a Kind cluster",permalink:"/docs/onboarding-for-kubernetes/kind/creating-a-kind-cluster"},next:{title:"Deleting your Kind cluster",permalink:"/docs/onboarding-for-kubernetes/kind/deleting-your-kind-cluster"}},l={},u=[{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Workaround",id:"workaround",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"restarting-your-local-kind-powered-kubernetes-cluster"},"Restarting your local Kind-powered Kubernetes cluster"),(0,o.kt)("p",null,"With Podman Desktop, you can restart your local Kind-powered Kubernetes cluster."),(0,o.kt)("h4",{id:"procedure"},"Procedure"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the Kind cluster to restart."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("icon",{icon:"fa-solid fa-repeat",size:"lg"}),".")),(0,o.kt)("h4",{id:"verification"},"Verification"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Containers"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the Kind cluster that restarted."),(0,o.kt)("li",{parentName:"ol"},"The cluster ",(0,o.kt)("strong",{parentName:"li"},"Age")," is consistent with the restart time."),(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("strong",{parentName:"li"},"Pods"),"."),(0,o.kt)("li",{parentName:"ol"},"Find the pods that are running on your Kind cluster.")),(0,o.kt)("h4",{id:"workaround"},"Workaround"),(0,o.kt)("p",null,"Kind has no command to restart a cluster.\nTherefore, Podman Desktop stops the Kind cluster, starts it again, and hopes for the best.\nThe Kind cluster might not restart successfully.\nIn that case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consider replacing Kind with a local Kubernetes cluster that you can restart, such as ",(0,o.kt)("a",{parentName:"li",href:"https://developers.redhat.com/products/openshift-local/"},"OpenShift Local"),"."),(0,o.kt)("li",{parentName:"ul"},"Consider ",(0,o.kt)("a",{parentName:"li",href:"/docs/onboarding-for-kubernetes/kind/deleting-your-kind-cluster"},"deleting your Kind cluster"),", and ",(0,o.kt)("a",{parentName:"li",href:"/docs/onboarding-for-kubernetes/kind/creating-a-kind-cluster"},"creating a Kind cluster"),".")))}d.isMDXComponent=!0}}]);