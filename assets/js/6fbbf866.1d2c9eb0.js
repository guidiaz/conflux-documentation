"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1606],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,m=u["".concat(i,".").concat(h)]||u[h]||p[h]||r;return t?o.createElement(m,l(l({ref:n},d),{},{components:t})):o.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},3147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={sidebar_position:3,title:"Snapshot Tool",displayed_sidebar:"generalSidebar"},l=void 0,s={unversionedId:"general/run-a-node/snapshot-tool",id:"general/run-a-node/snapshot-tool",title:"Snapshot Tool",description:"Introduction",source:"@site/docs/general/run-a-node/snapshot-tool.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/snapshot-tool",permalink:"/docs/general/run-a-node/snapshot-tool",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/run-a-node/snapshot-tool.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Snapshot Tool",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Node Types",permalink:"/docs/general/run-a-node/node-types"},next:{title:"Advanced",permalink:"/docs/category/advanced"}},i={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage Instructions",id:"usage-instructions",level:2},{value:"More Information",id:"more-information",level:2}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Conflux Blockchain Data Snapshot Tool (aka Archive-Tool) is designed to help users quickly set up a Conflux node from a snapshot. This tool provides the download links, and by default, it downloads the DB snapshot data of the current day. The Snapshot tool can help save weeks of time required to download and sync all the blockchain data at the moment of running a node. Using this tool is optional, but highly recommended. The tool supports resuming downloads from breakpoints using the curl command. If an error occurs during the process, users are advised to follow the script prompts."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Ensure you have curl installed on your system. If not, you can download and install it from ",(0,a.kt)("a",{parentName:"p",href:"https://curl.se/"},"here"),"."),(0,a.kt)("h2",{id:"usage-instructions"},"Usage Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For Linux & Mac - Mainnet - Archive Node: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/M/download.sh\nwget https://conflux-blockchain-data-us.s3.us-west-1.amazonaws.com/archivenode-db/M/download.sh\nwget https://conflux-blockchain-data-eu.s3.eu-central-1.amazonaws.com/archivenode-db/M/download.sh\nbash download.sh \n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"For Windows - Mainnet - Archive Node: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/M/download.bat\nwget https://conflux-blockchain-data-us.s3.us-west-1.amazonaws.com/archivenode-db/M/download.bat\nget https://conflux-blockchain-data-eu.s3.eu-central-1.amazonaws.com/archivenode-db/M/download.bat\ndownload.bat \n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"For Linux & Mac - Mainnet - Full Node: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/fullnode-db/M/download.sh\nbash download.sh \n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"For Linux & Mac - Testnet - Archive Node: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/T/download.sh\nbash download.sh \n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"For Windows - Testnet - Archive Node: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/archivenode-db/T/download.bat\ndownload.bat \n")),(0,a.kt)("p",null,"Then, you\u2019ll need to unzip the file, and copy (or move) its content into your node folder, usually named \u201cconflux-rust\u201d "),(0,a.kt)("p",null,"For example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xvzf conflux-fullnode-db-snapshot-2023-09-20.tgz ./conflux-rust\n")),(0,a.kt)("h2",{id:"more-information"},"More Information"),(0,a.kt)("p",null,"For more information, please visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/conflux-fans/archive-tool"},"Archive-tool readme page"),"."))}p.isMDXComponent=!0}}]);