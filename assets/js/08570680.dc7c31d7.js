"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9944],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=l,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},62575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(25773),l=(n(27378),n(35318));const r={sidebar_position:1,title:"When clause contexts",description:"Podman Desktop when clause contexts reference",tags:["podman-desktop","extension","writing","when clause"],keywords:["podman desktop","extension","writing","when clause"]},o="When clause contexts",i={unversionedId:"extensions/write/when-clause-context",id:"extensions/write/when-clause-context",title:"When clause contexts",description:"Podman Desktop when clause contexts reference",source:"@site/docs/extensions/write/when-clause-context.md",sourceDirName:"extensions/write",slug:"/extensions/write/when-clause-context",permalink:"/docs/extensions/write/when-clause-context",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/extensions/write/when-clause-context.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"extension",permalink:"/docs/tags/extension"},{label:"writing",permalink:"/docs/tags/writing"},{label:"when clause",permalink:"/docs/tags/when-clause"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"When clause contexts",description:"Podman Desktop when clause contexts reference",tags:["podman-desktop","extension","writing","when clause"],keywords:["podman desktop","extension","writing","when clause"]},sidebar:"mySidebar",previous:{title:"Writing",permalink:"/docs/extensions/write/"},next:{title:"Publishing",permalink:"/docs/extensions/publish/"}},s={},p=[{value:"Available context keys",id:"available-context-keys",level:3},{value:"Add a custom when clause context",id:"add-a-custom-when-clause-context",level:3},{value:"Conditional operators",id:"conditional-operators",level:3},{value:"Logical operators",id:"logical-operators",level:4},{value:"Equality operators",id:"equality-operators",level:4},{value:"Comparison operators",id:"comparison-operators",level:4},{value:"In and not in",id:"in-and-not-in",level:4},{value:"Match operator",id:"match-operator",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"when-clause-contexts"},"When clause contexts"),(0,l.kt)("p",null,"Podman Desktop uses when clauses to enable or disable extensions command and UI customizations, such as views."),(0,l.kt)("p",null,"For example, the Kind extension adds a custom icon to a container that has a label equals to ",(0,l.kt)("inlineCode",{parentName:"p"},"io.x-k8s.kind.cluster")," by using the following instruction."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"views": {\n   "icons/containersList": [\n     {\n       "when": "io.x-k8s.kind.cluster in containerLabelKeys",\n       "icon": "${kind-icon}"\n     }\n   ]\n }\n')),(0,l.kt)("p",null,"A when clause can consist of a context key (such as ",(0,l.kt)("inlineCode",{parentName:"p"},"isLinux"),") or complex expressions to define a specific state."),(0,l.kt)("h3",{id:"available-context-keys"},"Available context keys"),(0,l.kt)("p",null,"Podman Desktop has a set of context keys that are evaluated to Boolean true/false."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Context key"),(0,l.kt)("th",{parentName:"tr",align:null},"True when"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Operating system contexts")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isLinux"),(0,l.kt)("td",{parentName:"tr",align:null},"True when the OS is Linux.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isWindows"),(0,l.kt)("td",{parentName:"tr",align:null},"True when the OS is Windows.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isMac"),(0,l.kt)("td",{parentName:"tr",align:null},"True when the OS is macOS.")))),(0,l.kt)("p",null,"Podman Desktop also provides context keys that return values that can be used to create meaningful expressions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Context key"),(0,l.kt)("th",{parentName:"tr",align:null},"Value in it"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerLabelKeys"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of all labels belonging to the current container. Example: ",(0,l.kt)("inlineCode",{parentName:"td"},'"value in containerLabelKeys"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectedImageId"),(0,l.kt)("td",{parentName:"tr",align:null},"The image id which the dashboard/image menu opened belong to. Example ",(0,l.kt)("inlineCode",{parentName:"td"},'"selectedImageId in imagesPushInProgressToKind"'))))),(0,l.kt)("h3",{id:"add-a-custom-when-clause-context"},"Add a custom when clause context"),(0,l.kt)("p",null,"If you are creating your own extension and none of the existing keys suit your needs, you can set your own context key by calling the function ",(0,l.kt)("inlineCode",{parentName:"p"},"setValue(key: string, value: any, scope?: 'onboarding')")," provided by the ",(0,l.kt)("inlineCode",{parentName:"p"},"context")," namespace in the Podman Desktop API."),(0,l.kt)("p",null,"The scope, if specified, triggers a custom behavior to avoid any type of collisions between different extensions for that specific scope. Podman Desktop is responsible for handling its state and cleans it accordingly when necessary."),(0,l.kt)("p",null,"If omitted, the key/value is set globally. For this reason it is recommended to use the extension id as part of the key to avoid unexpected collisions with other extensions."),(0,l.kt)("p",null,"The first example below sets the key ",(0,l.kt)("inlineCode",{parentName:"p"},'"podmanIsInstalled"')," to true globally while the second example sets the key ",(0,l.kt)("inlineCode",{parentName:"p"},'"toolInstalled"')," to ",(0,l.kt)("inlineCode",{parentName:"p"},"oc.exe")," using the onboarding scope."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"   extensionsAPI.context.setValue('podmanIsInstalled', true);\n\n   extensionsAPI.context.setValue('toolInstalled', 'oc.exe', 'onboarding');\n")),(0,l.kt)("p",null,"After setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"toolInstalled")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"oc.exe"),", you could use this information in the ",(0,l.kt)("inlineCode",{parentName:"p"},"when")," clause to enable something"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "when": "onboardingContext:toolInstalled == oc.exe"\n}\n')),(0,l.kt)("h3",{id:"conditional-operators"},"Conditional operators"),(0,l.kt)("p",null,"To create ",(0,l.kt)("inlineCode",{parentName:"p"},"when")," clauses a bit more complex Podman Desktop offers a set of operators that can be combined with each other."),(0,l.kt)("h4",{id:"logical-operators"},"Logical operators"),(0,l.kt)("p",null,"Logical operators allow combining simple context keys or when-clause expressions that include other operators"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!podmanIsInstalled")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"!(podmanIsInstalled && isWindows)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"And"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"&&")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"podmanIsInstalled && isWindows"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Or"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"\\|\\|")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"isLinux \\|\\| isWindows"))))),(0,l.kt)("h4",{id:"equality-operators"},"Equality operators"),(0,l.kt)("p",null,"Equality operators allow checking for equality of a context key's value againt a specified value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," the right side is a value and not considered as a context key, so no value is searched in the context. If it contains whitespaces, it must be wrapped in single-quotes (for example ",(0,l.kt)("inlineCode",{parentName:"p"},"'my tool.exe'"),")"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Equality"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"==")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onboardingContext:toolInstalled == oc.exe"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Inequality"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!=")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onboardingContext:toolInstalled != oc.exe"))))),(0,l.kt)("h4",{id:"comparison-operators"},"Comparison operators"),(0,l.kt)("p",null,"Comparison operator allow comparing a context key's value against a number."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," the left and right side of the operator must be separated by whitespace - ",(0,l.kt)("inlineCode",{parentName:"p"},"bar < 2"),", but not ",(0,l.kt)("inlineCode",{parentName:"p"},"bar<2")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Greater than"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">"),", ",(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onboardingContext:toolInstalled > 2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Less than"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onboardingContext:toolInstalled <= 3"))))),(0,l.kt)("h4",{id:"in-and-not-in"},"In and not in"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"in"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"not in")," operators allow checking if a value exists/not exists within the other. The right should be a context key, which value is retrieved in the context. The left can be a value or a context key."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"In"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"in")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label in containerLabelKeys"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not in")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label not in containerLabelKeys"))))),(0,l.kt)("h4",{id:"match-operator"},"Match operator"),(0,l.kt)("p",null,"The match operator allow treating the right side item as a regular expression literal to match against the left side."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Matches"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"=~")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"label =~ /podman$/"))))))}m.isMDXComponent=!0}}]);