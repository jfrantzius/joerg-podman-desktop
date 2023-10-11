"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7714],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(25773),i=(n(27378),n(35318));const o={sidebar_position:1,title:"Writing",description:"Writing a Podman Desktop extension",tags:["podman-desktop","extension","writing"],keywords:["podman desktop","extension","writing"]},r="Writing a Podman Desktop extension",s={unversionedId:"extensions/write/index",id:"extensions/write/index",title:"Writing",description:"Writing a Podman Desktop extension",source:"@site/docs/extensions/write/index.md",sourceDirName:"extensions/write",slug:"/extensions/write/",permalink:"/docs/extensions/write/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/extensions/write/index.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"extension",permalink:"/docs/tags/extension"},{label:"writing",permalink:"/docs/tags/writing"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Writing",description:"Writing a Podman Desktop extension",tags:["podman-desktop","extension","writing"],keywords:["podman desktop","extension","writing"]},sidebar:"mySidebar",previous:{title:"Writing extensions",permalink:"/docs/extensions/"},next:{title:"When clause contexts",permalink:"/docs/extensions/write/when-clause-context"}},p={},l=[{value:"Initializing a Podman Desktop extension",id:"initializing-a-podman-desktop-extension",level:2},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Procedure",id:"procedure",level:4},{value:"Verification",id:"verification",level:4},{value:"Writing a Podman Desktop extension entry point",id:"writing-a-podman-desktop-extension-entry-point",level:2},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Procedure",id:"procedure-1",level:4},{value:"Verification",id:"verification-1",level:4},{value:"Additional resources",id:"additional-resources",level:4},{value:"Next steps",id:"next-steps",level:4}],m={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"writing-a-podman-desktop-extension"},"Writing a Podman Desktop extension"),(0,i.kt)("p",null,"To write a Podman Desktop extension, start a Node.js or TypeScript project calling the Podman Desktop API, and ensure all runtime dependencies are inside the final binary."),(0,i.kt)("h2",{id:"initializing-a-podman-desktop-extension"},"Initializing a Podman Desktop extension"),(0,i.kt)("p",null,"Write the Podman Desktop extension Node.js package metadata."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript or TypeScript")),(0,i.kt)("h4",{id:"procedure"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create and edit a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add TypeScript and Podman Desktop API to the development dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},' "devDependencies": {\n   "@podman-desktop/api": "latest",\n   "typescript": "latest"\n },\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the required metadata:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'  "name": "my-extension",\n  "displayName": "My Hello World extension",\n  "description": "How to write my first extension",\n  "version": "0.0.1",\n  "icon": "icon.png",\n  "publisher": "benoitf",\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the Podman Desktop version that might run this extension:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'  "engines": {\n    "podman-desktop": "latest"\n  },\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the main entry point:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},' "main": "./dist/extension.js"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a Hello World command contribution"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'  "contributes": {\n    "commands": [\n     {\n       "command": "my.first.command",\n       "title": "My First Extension: Hello World"\n     }\n   ]\n  }\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add an ",(0,i.kt)("inlineCode",{parentName:"p"},"icon.png")," file to the project."))),(0,i.kt)("h4",{id:"verification"},"Verification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Full ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@podman-desktop/api": "latest",\n    "typescript": "latest"\n  },\n  "name": "my-extension",\n  "displayName": "My Hello World extension",\n  "description": "How to write my first extension",\n  "version": "0.0.1",\n  "icon": "icon.png",\n  "publisher": "benoitf",\n  "engines": {\n    "podman-desktop": "latest"\n  },\n  "main": "./dist/extension.js",\n  "contributes": {\n    "commands": [\n      {\n        "command": "my.first.command",\n        "title": "My First Extension: Hello World"\n      }\n    ]\n  }\n}\n')))),(0,i.kt)("h2",{id:"writing-a-podman-desktop-extension-entry-point"},"Writing a Podman Desktop extension entry point"),(0,i.kt)("p",null,"Write the extension features."),(0,i.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JavaScript or TypeScript")),(0,i.kt)("h4",{id:"procedure-1"},"Procedure"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create and edit a ",(0,i.kt)("inlineCode",{parentName:"p"},"dist/extension.js")," file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Import the Podman Desktop API"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as podmanDesktopAPI from '@podman-desktop/api';\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Expose the ",(0,i.kt)("inlineCode",{parentName:"p"},"activate")," function to call on activation."),(0,i.kt)("p",{parentName:"li"},"The signature of the function can be:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Synchronous"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function activate(): void;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Asynchronous"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function activate(): Promise<void>;\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) Add an extension context to the ",(0,i.kt)("inlineCode",{parentName:"p"},"activate")," function enabling the extension to register disposable resources:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function activate(extensionContext: podmanDesktopAPI.ExtensionContext): Promise<void> {}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Register the command and the callback"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as podmanDesktopAPI from '@podman-desktop/api';\nexport async function activate(extensionContext: podmanDesktopAPI.ExtensionContext): Promise<void> {\n  // register the command referenced in package.json file\n  const myFirstCommand = podmanDesktopAPI.commands.registerCommand('my.first.command', async () => {\n    // display a choice to the user for selecting some values\n    const result = await podmanDesktopAPI.window.showQuickPick(['un', 'deux', 'trois'], {\n      canPickMany: true, // user can select more than one choice\n    });\n\n    // display an information message with the user choice\n    await podmanDesktopAPI.window.showInformationMessage(`The choice was: ${result}`);\n  });\n\n  // create an item in the status bar to run our command\n  // it will stick on the left of the status bar\n  const item = podmanDesktopAPI.window.createStatusBarItem(podmanDesktopAPI.StatusBarAlignLeft, 100);\n  item.text = 'My first command';\n  item.command = 'my.first.command';\n  item.show();\n\n  // register disposable resources to it's removed when we deactivte the extension\n  extensionContext.subscriptions.push(myFirstCommand);\n  extensionContext.subscriptions.push(item);\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) Expose the ",(0,i.kt)("inlineCode",{parentName:"p"},"deactivate")," function to call on deactivation."),(0,i.kt)("p",{parentName:"li"},"The signature of the function can be:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Synchronous"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export function deactivate(): void;\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Asynchronous"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function deactivate(): Promise<void>;\n")))))),(0,i.kt)("h4",{id:"verification-1"},"Verification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The extension compiles and produces the output in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All runtime dependencies are inside the final binary."))),(0,i.kt)("h4",{id:"additional-resources"},"Additional resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider a packer such as ",(0,i.kt)("a",{parentName:"li",href:"https://rollupjs.org"},"Rollup")," or ",(0,i.kt)("a",{parentName:"li",href:"https://webpack.js.org"},"Webpack")," to shrink the size of the artifact.")),(0,i.kt)("h4",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/extensions/publish"},"Publishing a Podman Desktop extension"))))}d.isMDXComponent=!0}}]);