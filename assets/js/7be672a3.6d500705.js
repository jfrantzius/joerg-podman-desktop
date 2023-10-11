"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3691],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,g=c["".concat(s,".").concat(k)]||c[k]||p[k]||r;return n?i.createElement(g,o(o({ref:t},m),{},{components:n})):i.createElement(g,o({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=n(25773),a=(n(27378),n(35318));const r={sidebar_position:10,title:"Push an image to Minikube",description:"Pushing an image to your Minikube cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},o="Pushing an image to your local Minikube-powered Kubernetes cluster",l={unversionedId:"kubernetes/minikube/pushing-an-image-to-minikube",id:"kubernetes/minikube/pushing-an-image-to-minikube",title:"Push an image to Minikube",description:"Pushing an image to your Minikube cluster",source:"@site/docs/kubernetes/minikube/pushing-an-image-to-minikube.md",sourceDirName:"kubernetes/minikube",slug:"/kubernetes/minikube/pushing-an-image-to-minikube",permalink:"/docs/kubernetes/minikube/pushing-an-image-to-minikube",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/kubernetes/minikube/pushing-an-image-to-minikube.md",tags:[{label:"migrating-to-kubernetes",permalink:"/docs/tags/migrating-to-kubernetes"},{label:"images",permalink:"/docs/tags/images"}],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Push an image to Minikube",description:"Pushing an image to your Minikube cluster",keywords:["podman desktop","podman","containers","images","migrating","kubernetes"],tags:["migrating-to-kubernetes","images"]},sidebar:"mySidebar",previous:{title:"Building and testing an image",permalink:"/docs/kubernetes/minikube/building-an-image-and-testing-it-in-minikube"},next:{title:"Writing extensions",permalink:"/docs/extensions/"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pushing-an-image-to-your-local-minikube-powered-kubernetes-cluster"},"Pushing an image to your local Minikube-powered Kubernetes cluster"),(0,a.kt)("p",null,"With Podman Desktop, you can push an image to your local Minikube-powered Kubernetes cluster."),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/onboarding/containers"},"You onboarded a container engine"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/onboarding-for-kubernetes/minikube"},"You onboarded a Minikube cluster"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/kubernetes/minikube/working-with-your-local-minikube-cluster"},"You have set your Kubernetes context to your Minikube cluster"),"."),(0,a.kt)("li",{parentName:"ul"},"Your image is available on the ",(0,a.kt)("strong",{parentName:"li"},"Images")," page: ",(0,a.kt)("inlineCode",{parentName:"li"},"<my_image>:<my_tag>"),".")),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("strong",{parentName:"li"},"Podman Desktop dashboard > ",(0,a.kt)("icon",{icon:"fa-solid fa-cloud",size:"lg"})," Images"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-search",size:"lg"})," Search images"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"<your_image>:<your_tag>"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," > ",(0,a.kt)("icon",{icon:"fa-solid fa-ellipsis-v",size:"lg"})," Push image to Minikube cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"If you created many Minikube clusters, select your Minikube cluster from the list.")),(0,a.kt)("h4",{id:"verification"},"Verification"),(0,a.kt)("p",null,"Minikube enables you to list loaded images, using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-command"},"$ minikube image list\n")),(0,a.kt)("p",null,"You can also create a Pod that uses the loaded image:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"verify_my_image.yaml")," Kubernetes YAML file on your workstation.\nReplace the placeholders:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Pod ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," and container ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," value must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character."),(0,a.kt)("li",{parentName:"ul"},"Container ",(0,a.kt)("inlineCode",{parentName:"li"},"image")," value is the image you pushed.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: <verify-my-image>\nspec:\n  containers:\n    - name: <my-image>\n      image: <my_image>:<my_tag>\n      imagePullPolicy: Never\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods > Play Kubernetes YAML"),"."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Kubernetes YAML file"),": select your ",(0,a.kt)("inlineCode",{parentName:"li"},"verify_my_image.yaml")," file."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Select Runtime"),": ",(0,a.kt)("strong",{parentName:"li"},"Using a Kubernetes cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Play"),"."),(0,a.kt)("li",{parentName:"ol"},"Clik ",(0,a.kt)("strong",{parentName:"li"},"Done")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("icon",{icon:"fa-solid fa-cubes",size:"lg"})," Pods"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("icon",{icon:"fa-solid fa-search",size:"lg"})," Search pods"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"<verify-my-image>"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The pod ",(0,a.kt)("strong",{parentName:"p"},"Status")," is ",(0,a.kt)("strong",{parentName:"p"},"Running"),"."))))}p.isMDXComponent=!0}}]);