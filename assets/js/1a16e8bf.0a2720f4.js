"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2079],{8960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(5773),o=(a(7378),a(5318)),s=a(2975);const l={title:"Release Notes - Podman Desktop 1.1",description:"Podman Desktop 1.1 has been released!",slug:"podman-desktop-release-1.1",authors:["deboer"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1},i=void 0,p={permalink:"/blog/podman-desktop-release-1.1",source:"@site/blog/2023-06-08-release-1.1.md",title:"Release Notes - Podman Desktop 1.1",description:"Podman Desktop 1.1 has been released!",date:"2023-06-08T00:00:00.000Z",formattedDate:"June 8, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"openshift",permalink:"/blog/tags/openshift"}],readingTime:2.465,hasTruncateMarker:!0,authors:[{name:"Tim deBoer",title:"Architect",url:"https://github.com/deboer-tim",imageURL:"https://github.com/deboer-tim.png",key:"deboer"}],frontMatter:{title:"Release Notes - Podman Desktop 1.1",description:"Podman Desktop 1.1 has been released!",slug:"podman-desktop-release-1.1",authors:["deboer"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - Podman Desktop 1.2",permalink:"/blog/podman-desktop-release-1.2"},nextItem:{title:"Release Notes - Podman Desktop 1.0",permalink:"/blog/podman-desktop-release-1.0"}},r={authorsImageUrls:[void 0]},m=[{value:"Release Details",id:"release-details",level:2},{value:"Podman v4.5.1",id:"podman-v451",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Lima Support",id:"lima-support",level:3},{value:"Other UI and UX Improvements",id:"other-ui-and-ux-improvements",level:3},{value:"New Loading Screen",id:"new-loading-screen",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2}],d={toc:m};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Podman Desktop 1.1 Release! \ud83c\udf89"),(0,o.kt)("p",null,"This is primarily a bug-fix release to fix a few important issues, but we've managed to squeeze in a few enhancements\nalong the way."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Podman 4.5.1"),": Podman 4.5.1 now included in Windows and Mac installers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Extensions"),": Update extensions from within Podman Desktop."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Lima Support"),": Choose engine type and override its name from the settings."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UX and UI Improvements"),": New loading screen.")),(0,o.kt)("p",null,"Podman Desktop 1.1 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Podman-desktop-1-1-hero",src:a(4825).Z,width:"3958",height:"2308"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"release-details"},"Release Details"),(0,o.kt)("h3",{id:"podman-v451"},"Podman v4.5.1"),(0,o.kt)("p",null,"Podman Desktop 1.1 moves up to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/releases/tag/v4.5.1"},"Podman 4.5.1"),"."),(0,o.kt)("h3",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"Optional extensions will follow their own lifecycle and update independently from Podman Desktop. As of\nthis release you'll be able to see when there is an update available and install from within\nPodman Desktop ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2655"},"#2655"),"."),(0,o.kt)("p",null,"We've also added options in ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Preferences")," to\nautomatically check for and install extension updates."),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/241246481-305d215f-2a5c-46e8-9cc3-ecd90a6bd2bc.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update extensions",src:a(8687).Z,width:"1324",height:"364"})),(0,o.kt)("h3",{id:"lima-support"},"Lima Support"),(0,o.kt)("p",null,"Thanks to contributor ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/afbjorklund"},"Anders Bj\xf6rklund"),", we have some improvements to the\nLima extension! In ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("icon",{icon:"fa-solid fa-cog",size:"lg"}),"Settings > Preferences")," you can select which\nengine type Lima runs on and override the instance name ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2674"},"#2674"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/10364051/241755966-0a6a293b-b18e-4222-9c40-abd6c114d464.png",alt:"Lima preferences"})),(0,o.kt)("h3",{id:"other-ui-and-ux-improvements"},"Other UI and UX Improvements"),(0,o.kt)("h4",{id:"new-loading-screen"},"New Loading Screen"),(0,o.kt)("p",null,"We have a new loading screen, Podman Desktop style! ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/2743"},"#2743"),"."),(0,o.kt)(s.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/243706137-324b5870-f6a0-4bc1-ac91-e8b45c374c90.mp4",width:"100%",height:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"other-notable-enhancements"},"Other Notable Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker-compose can be installed system-wide ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2718"},"#2718"),"."),(0,o.kt)("li",{parentName:"ul"},"Show warning when creating a pod with two containers that use the same port ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2671"},"#2671"),"."),(0,o.kt)("li",{parentName:"ul"},"Display Kubernetes context name in pod label ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2634"},"#2634"),"."),(0,o.kt)("li",{parentName:"ul"},"Add Docker compatibility button using flatpak-spawn ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1925"},"#1925"),"."),(0,o.kt)("li",{parentName:"ul"},"Improve UI consistency of Pull Image page ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2604"},"#2604"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notable-bug-fixes"},"Notable Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Could not install extensions on Windows 10 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2762"},"#2762"),"."),(0,o.kt)("li",{parentName:"ul"},"Could not use locally built images on Kubernetes ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2710"},"#2710"),"."),(0,o.kt)("li",{parentName:"ul"},"Dashboard still suggests update after installation ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2648"},"#2648"),"."),(0,o.kt)("li",{parentName:"ul"},"Could not Play Kubernetes YAML to Podman on Windows ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2594"},"#2594"),"."),(0,o.kt)("li",{parentName:"ul"},"Pod label wasn't always shown in list ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2614"},"#2614"),"."),(0,o.kt)("li",{parentName:"ul"},"Dashboard button state was resetting ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2584"},"#2584"),"."),(0,o.kt)("li",{parentName:"ul"},"Change checkbox style so they don't look like stop buttons ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2723"},"#2723"),".")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"community-thank-you"},"Community Thank You"),(0,o.kt)("p",null,"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better. In this\nsprint we received pull requests from the following people:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/fatelei"},"wangxiaolei")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2602"},"#2602 - Add meaningful tooltips to build, pull, prune buttons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/AsciiWolf"},"AsciiWolf")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2607"},"#2607 - fix typing error in Flathub name")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2609"},"#2609 - fix Flatpak install instructions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/afbjorklund"},"Anders Bj\xf6rklund")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/2674"},"#2674 - Select engine for Lima provider"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"final-notes"},"Final notes"),(0,o.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.1.0"},"here")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.1.0"},"here"),"."),(0,o.kt)("p",null,"Get the latest release from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}u.isMDXComponent=!0},4825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/podman-desktop-release-1.1-44e0feeaa28730210c0fbecda0193b95.png"},8687:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/update-extensions-6b1ea25170c2f1b7608d8f5a887d902a.png"}}]);