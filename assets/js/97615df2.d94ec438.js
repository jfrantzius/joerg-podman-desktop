"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5375],{4917:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=a(5773),n=(a(7378),a(5318)),l=a(2975);const r={title:"Release Notes - Podman Desktop 1.2",description:"Podman Desktop 1.2 has been released!",slug:"podman-desktop-release-1.2",authors:["cdrage"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1},p=void 0,i={permalink:"/blog/podman-desktop-release-1.2",source:"@site/blog/2023-07-12-release-1.2.md",title:"Release Notes - Podman Desktop 1.2",description:"Podman Desktop 1.2 has been released!",date:"2023-07-12T00:00:00.000Z",formattedDate:"July 12, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"openshift",permalink:"/blog/tags/openshift"}],readingTime:6.05,hasTruncateMarker:!1,authors:[{name:"Charlie Drage",title:"Software Engineer",url:"https://github.com/cdrage",imageURL:"https://github.com/cdrage.png",key:"cdrage"}],frontMatter:{title:"Release Notes - Podman Desktop 1.2",description:"Podman Desktop 1.2 has been released!",slug:"podman-desktop-release-1.2",authors:["cdrage"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1},nextItem:{title:"Release Notes - Podman Desktop 1.1",permalink:"/blog/podman-desktop-release-1.1"}},s={authorsImageUrls:[void 0]},m=[{value:"Release Details",id:"release-details",level:2},{value:"Added start/stop/delete/restart buttons for Compose",id:"added-startstopdeleterestart-buttons-for-compose",level:3},{value:"Kubernetes context on the status bar",id:"kubernetes-context-on-the-status-bar",level:3},{value:"Rename images",id:"rename-images",level:3},{value:"Troubleshooting page",id:"troubleshooting-page",level:3},{value:"Protocol handler support",id:"protocol-handler-support",level:3},{value:"Other Notable Features",id:"other-notable-features",level:2},{value:"Documentation Updates",id:"documentation-updates",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2}],u={toc:m};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Podman Desktop 1.2 Release! \ud83c\udf89"),(0,n.kt)("p",null,"We're excited to announce the release of Podman Desktop version 1.2.0! This release includes many new features (Kubernetes, Compose and extension support!), bug fixes, and improvements to enhance your container management experience. Here's a summary of the key changes in this release:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Added start/stop/delete/restart buttons for Compose"),": You can now make changes to an entire Compose group of containers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Kubernetes context on the status bar"),": Choose from multiple Kubernetes contexts more easily all from the status bar"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rename images"),": Rename an image with a click of a button"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Protocol handler support"),": Added support for protocol handlers such as ",(0,n.kt)("inlineCode",{parentName:"li"},"open podman-desktop:extension/redhat.openshift-local")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Troubleshooting page"),": A troubleshooting page for helping diagnose Podman Desktop related development issues")),(0,n.kt)("p",null,"Podman Desktop 1.2 is now available. ",(0,n.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Podman-desktop-1-2-hero",src:a(1965).Z,width:"1920",height:"1080"})),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-details"},"Release Details"),(0,n.kt)("h3",{id:"added-startstopdeleterestart-buttons-for-compose"},"Added start/stop/delete/restart buttons for Compose"),(0,n.kt)("p",null,"In the last month we've been addind support for more Compose features. Before you were only able to control a group of containers if they were in a Pod. Now we have added the ability to control a group of Compose containers. You can now start, stop, delete and restart a group of containers launched by either ",(0,n.kt)("inlineCode",{parentName:"p"},"docker-compose")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"podman-compose"),"."),(0,n.kt)("p",null,"Stay tuned as we add even more features to Compose! If you have any feedback or feature requests, feel free to open an issue or start a discussion on GitHub."),(0,n.kt)(l.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/253331226-d80e7637-c223-4bb8-8675-1dcb8d48818f.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,n.kt)("h3",{id:"kubernetes-context-on-the-status-bar"},"Kubernetes context on the status bar"),(0,n.kt)("p",null,"With Kubernetes context on the status bar, you can switch from one context to another in just a couple of clicks. Easily switch to a different cluster all together. If there are multiple contexts available, you can now click and pick which one to use."),(0,n.kt)(l.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/19958075/243804525-242b02b4-fc3c-415b-be08-24eb1933adc5.mov",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,n.kt)("h3",{id:"rename-images"},"Rename images"),(0,n.kt)("p",null,"Deployed an image but now you need to rename it / add a new tag? Podman Desktop allows you to edit an image now. Thanks to an awesome contributor ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tuckerrc"},"@tuckerrc")," who added the new feature."),(0,n.kt)(l.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/251759557-bd15a631-93ee-4383-a81c-8ef3934dfb59.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,n.kt)("h3",{id:"troubleshooting-page"},"Troubleshooting page"),(0,n.kt)("p",null,"Developing an extension for Podman Desktop? Want to view the logs of Podman Desktop as well as ping your container connection? We now have a troubleshooting page!"),(0,n.kt)("p",null,"Click on the lightbulb button on the bottom right to access the page."),(0,n.kt)(l.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/248210601-e0a5deb0-44ad-4eea-9b24-134754fede80.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,n.kt)("h3",{id:"protocol-handler-support"},"Protocol handler support"),(0,n.kt)("p",null,"Podman Desktop now supports protocol handling when using the terminal! Want to access your favourite extension directly from a script or the terminal? If you type in ",(0,n.kt)("inlineCode",{parentName:"p"},"open podman-desktop:extension/redhat.openshift-local")," in the terminal, Podman Desktop will automatically load up to the correct extension."),(0,n.kt)(l.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/243304511-b11ad1e4-4c2f-455c-957a-01653d2a93c8.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"other-notable-features"},"Other Notable Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Background colors and FormPage (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2977"},"PR #2977"),")"),(0,n.kt)("li",{parentName:"ul"},"Add ability to add insecure registry / skipping cert verify (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2896"},"PR #2896"),")"),(0,n.kt)("li",{parentName:"ul"},"Add support for icon contribution (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2984"},"PR #2984"),")"),(0,n.kt)("li",{parentName:"ul"},"Add warning dialog message that virtual machine has low memory limit (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2822"},"PR #2822"),")"),(0,n.kt)("li",{parentName:"ul"},"Propose indexed name for new pod (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3028"},"PR #3028"),")"),(0,n.kt)("li",{parentName:"ul"},"Add restart button after enabling / disabling mac os compatibility (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2841"},"PR #2841"),")"),(0,n.kt)("li",{parentName:"ul"},"Add environment related helper constants (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3079"},"PR #3079"),")"),(0,n.kt)("li",{parentName:"ul"},"Allow entrypoint and cmd when starting container (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3031"},"PR #3031"),")"),(0,n.kt)("li",{parentName:"ul"},"Add a way to debug stores in troubleshooting page (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3121"},"PR #3121"),")"),(0,n.kt)("li",{parentName:"ul"},"Add custompick component (#2855) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3012"},"PR #3012"),")"),(0,n.kt)("li",{parentName:"ul"},"Dynamic breadcrumbs (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3119"},"PR #3119"),")"),(0,n.kt)("li",{parentName:"ul"},"Icons on form pages (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3155"},"PR #3155"),")"),(0,n.kt)("li",{parentName:"ul"},"Switch more pages to formpage (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3162"},"PR #3162"),")"),(0,n.kt)("li",{parentName:"ul"},"Add rename image button (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2588"},"PR #2588"),")"),(0,n.kt)("li",{parentName:"ul"},"Fixed headers, improved scrollbars (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2863"},"PR #2863"),")"),(0,n.kt)("li",{parentName:"ul"},"Reports warnings on failed kube deploy, fixes error out (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3050"},"PR #3050"),")"),(0,n.kt)("li",{parentName:"ul"},"Kube context on statusbar (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2755"},"PR #2755"),")"),(0,n.kt)("li",{parentName:"ul"},"Install provider if not installed when clicking on create new button (#2706) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2817"},"PR #2817"),")"),(0,n.kt)("li",{parentName:"ul"},"Add tag and authenticated push capacity to the extension API (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2876"},"PR #2876"),")"),(0,n.kt)("li",{parentName:"ul"},"Add navigation bar e2e tests (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2950"},"PR #2950"),")")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"documentation-updates"},"Documentation Updates"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix documentation for building image of extensions (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2873"},"PR #2873"),")"),(0,n.kt)("li",{parentName:"ul"},"Add Minikube install docs (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2824"},"PR #2824"),")"),(0,n.kt)("li",{parentName:"ul"},"Add Minikube documentation (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2694"},"PR #2694"),")"),(0,n.kt)("li",{parentName:"ul"},"Updated Building an image procedure (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2964"},"PR #2964"),")"),(0,n.kt)("li",{parentName:"ul"},"Starting a container (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2958"},"PR #2958"),")"),(0,n.kt)("li",{parentName:"ul"},"Pulling an image (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2956"},"PR #2956"),")"),(0,n.kt)("li",{parentName:"ul"},"Updated selecting containers to run in a pod (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2970"},"PR #2970"),")"),(0,n.kt)("li",{parentName:"ul"},"Pushing an image to a registry (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2969"},"PR #2969"),")"),(0,n.kt)("li",{parentName:"ul"},"How to add an insecure registry (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2953"},"PR #2953"),")"),(0,n.kt)("li",{parentName:"ul"},"Add documentation for lima (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2995"},"PR #2995"),")"),(0,n.kt)("li",{parentName:"ul"},"Replace broken link to podman.io (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2994"},"PR #2994"),")"),(0,n.kt)("li",{parentName:"ul"},"Authenticating to a pre-configured registry (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2965"},"PR #2965"),")"),(0,n.kt)("li",{parentName:"ul"},"Lima is not a container engine (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3051"},"PR #3051"),")"),(0,n.kt)("li",{parentName:"ul"},"Using the Troubleshooting page (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3083"},"PR #3083"),")"),(0,n.kt)("li",{parentName:"ul"},"View and select your current Kubernetes context in the status bar (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3090"},"PR #3090"),")")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"notable-bug-fixes"},"Notable Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deleting a running pod generates an error (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2827"},"PR #2827"),")"),(0,n.kt)("li",{parentName:"ul"},"If kubeconfig is empty, does not try to do things, cancel (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2874"},"PR #2874"),")"),(0,n.kt)("li",{parentName:"ul"},"Async telemetry startup (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2885"},"PR #2885"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not block startup while waiting for kube resource refresh (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2884"},"PR #2884"),")"),(0,n.kt)("li",{parentName:"ul"},"Images list too wide (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2918"},"PR #2918"),")"),(0,n.kt)("li",{parentName:"ul"},"Compose deactivate function never called (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2922"},"PR #2922"),")"),(0,n.kt)("li",{parentName:"ul"},"Auto-scrolling on form pages, layout issues (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2927"},"PR #2927"),")"),(0,n.kt)("li",{parentName:"ul"},"Show current context in quick pick (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2920"},"PR #2920"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove sticky position of loader in dashboard UI (#2535) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2959"},"PR #2959"),")"),(0,n.kt)("li",{parentName:"ul"},"Undo change that broke the website (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2992"},"PR #2992"),")"),(0,n.kt)("li",{parentName:"ul"},"Detailspage, resizing & consistency (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2987"},"PR #2987"),")"),(0,n.kt)("li",{parentName:"ul"},"Quick pick click to close and over nav bar (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2758"},"PR #2758"),")"),(0,n.kt)("li",{parentName:"ul"},"Only show empty screen when no pods (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2929"},"PR #2929"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not redirect to /pods when deleting pod in containerlist (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2963"},"PR #2963"),")"),(0,n.kt)("li",{parentName:"ul"},"Bulk delete on pods should call the pod deletion (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2979"},"PR #2979"),")"),(0,n.kt)("li",{parentName:"ul"},"Update nodejs version to 18 in .nvmrc to fix yarn install failure (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2989"},"PR #2989"),")"),(0,n.kt)("li",{parentName:"ul"},"Website check targets (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2996"},"PR #2996"),")"),(0,n.kt)("li",{parentName:"ul"},"Don't show exception to user (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3034"},"PR #3034"),")"),(0,n.kt)("li",{parentName:"ul"},"Interpret arguments given to info command for example (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3015"},"PR #3015"),")"),(0,n.kt)("li",{parentName:"ul"},"Change defaults for Podman machine (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3061"},"PR #3061"),")"),(0,n.kt)("li",{parentName:"ul"},"Normalize development/production folders path (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3113"},"PR #3113"),")"),(0,n.kt)("li",{parentName:"ul"},"Calculate machine socket path for linux (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3070"},"PR #3070"),")"),(0,n.kt)("li",{parentName:"ul"},"Replace backslash with slash so to support rendering on Windows (#3120) (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3122"},"PR #3122"),")"),(0,n.kt)("li",{parentName:"ul"},"Keep stdout and stderr in the error object for Docker Desktop extensions (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3014"},"PR #3014"),")"),(0,n.kt)("li",{parentName:"ul"},"Mark task completed if there's a failure (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3016"},"PR #3016"),")"),(0,n.kt)("li",{parentName:"ul"},"Handle invalid kubeconfig file (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3129"},"PR #3129"),")"),(0,n.kt)("li",{parentName:"ul"},"Do not remove registries when podman extension is stopping (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3136"},"PR #3136"),")"),(0,n.kt)("li",{parentName:"ul"},"Warning should be amber (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3153"},"PR #3153"),")"),(0,n.kt)("li",{parentName:"ul"},"Load user extensions from plugins as removable (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3152"},"PR #3152"),")"),(0,n.kt)("li",{parentName:"ul"},"Images with spaces in entrypoints or commands fail to start (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3161"},"PR #3161"),")"),(0,n.kt)("li",{parentName:"ul"},"Scrolling offscreen when clicking checkbox (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/3178"},"PR #3178"),")"),(0,n.kt)("li",{parentName:"ul"},"Avoid messagebox expanding offscreen (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2778"},"PR #2778"),")"),(0,n.kt)("li",{parentName:"ul"},"Release-notes-generator run failure (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2752"},"PR #2752"),")"),(0,n.kt)("li",{parentName:"ul"},"Unable to do a new build if the previous one failed (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2721"},"PR #2721"),")")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"community-thank-you"},"Community Thank You"),(0,n.kt)("p",null,"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better."),(0,n.kt)("p",null,"A big shoutout to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/afbjorklund"},"@afbjorklund"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tuckerrc"},"@tuckerrc")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/evanshortiss"},"@evanshortiss")," who contributed to this release!"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"final-notes"},"Final notes"),(0,n.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.2.0"},"here")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.2.0"},"here"),"."),(0,n.kt)("p",null,"Get the latest release from the ",(0,n.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}d.isMDXComponent=!0},1965:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/podman-desktop-release-1.2-3a022da0788ed1fd7e6c1820879dd235.png"}}]);