"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[1477],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=i(a),k=r,f=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_position:3,title:"MetaMask",keywords:["MetaMask","EVMSpace"]},o=void 0,p={unversionedId:"general/tutorials/wallets/metamask",id:"general/tutorials/wallets/metamask",title:"MetaMask",description:"This wallet supports eSpace ONLY.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/tutorials/wallets/metamask.md",sourceDirName:"general/tutorials/wallets",slug:"/general/tutorials/wallets/metamask",permalink:"/zh-CN/docs/general/tutorials/wallets/metamask",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"MetaMask",keywords:["MetaMask","EVMSpace"]},sidebar:"tutorialSidebar",previous:{title:"Ledger",permalink:"/zh-CN/docs/general/tutorials/wallets/ledger"},next:{title:"Transferring Funds",permalink:"/zh-CN/docs/category/transferring-funds"}},s={},i=[{value:"Introduction",id:"introduction",level:2},{value:"\u8fde\u63a5 MetaMask \u5230 Conflux eSpace\u3002",id:"\u8fde\u63a5-metamask-\u5230-conflux-espace",level:2}],c={toc:i},u="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This wallet supports eSpace ONLY.")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," \u662f\u4e00\u4e2a\u5177\u6709\u7528\u6237\u754c\u9762\u7684\u6d4f\u89c8\u5668\u6269\u5c55\uff0c\u7528\u4e8e\u4e0e\u517c\u5bb9\u4ee5\u592a\u574a\u7684\u533a\u5757\u94fe(\u4f8b\u5982 Conflux eSpace)\u8fdb\u884c\u4ea4\u4e92\u3002 For the purpose of this guide, we will assume you are already familiar with MetaMask and have it installed. \u5982\u679c\u60a8\u9700\u8981\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 MetaMask \u672c\u8eab\uff0c\u8bf7",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/faqs.html"},"\u67e5\u770bMetamask\u7684\u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u6f14\u793a\u5982\u4f55\u8fde\u63a5 MetaMask \u5230 Conflux eSpace Testnet\uff0c\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://remix.ethereum.org"},"Remix")," \u90e8\u7f72\u4e00\u4e2a\u7b80\u5355\u7684 ERC-20 \u5408\u7ea6\uff0c\u5e76\u4f7f\u7528 MetaMask \u8f6c\u79fb\u65b0\u4ee3\u5e01\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u672c\u6559\u7a0b\u4e2d\u7684\u5c4f\u5e55\u622a\u56fe\u6765\u81eaMetaMask \u6d4f\u89c8\u5668\u6269\u5c55\u7248\u672c 10.8.1\u3002")),(0,r.kt)("h2",{id:"\u8fde\u63a5-metamask-\u5230-conflux-espace"},"\u8fde\u63a5 MetaMask \u5230 Conflux eSpace\u3002"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0 Conflux eSpace \u7f51\u7edc\u5230\u60a8\u7684 MetaMask \u94b1\u5305\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00\u60a8\u7684\u6d4f\u89c8\u5668\uff0c\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"li",href:"https://chainlist.org%E3%80%82"},"https://chainlist.org\u3002")),(0,r.kt)("li",{parentName:"ol"},"\u641c\u7d22\u201cConflux eSpace\u201d"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u201cConflux eSpace\u201d\u4e0b\u70b9\u51fb\u201c\u8fde\u63a5\u94b1\u5305\u201d\uff0c\u4ee5\u5141\u8bb8\u6b64\u7ad9\u70b9\u5411 MetaMask \u53d1\u9001\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u201cConflux eSpace\u201d\u4e0b\u70b9\u51fb\u201c\u6dfb\u52a0\u5230 MetaMask\u201d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53 MetaMask \u63d0\u793a\u201c\u5141\u8bb8\u6b64\u7ad9\u70b9\u6dfb\u52a0\u7f51\u7edc\uff1f\u201d\u65f6\uff0c\u70b9\u51fb\u201c\u6279\u51c6\u201d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5f53 MetaMask \u63d0\u793a\u201c\u5141\u8bb8\u6b64\u7ad9\u70b9\u5207\u6362\u7f51\u7edc\uff1f\u201d\u65f6\uff0c\u70b9\u51fb\u201c\u6279\u51c6\u201d\u3002")),(0,r.kt)("p",null,"\u60a8\u7684 MetaMask \u94b1\u5305\u73b0\u5728\u5df2\u8fde\u63a5\u5230 Conflux eSpace\u3002 \u60a8\u53ef\u4ee5\u968f\u65f6\u901a\u8fc7Metamask\u4e2d\u7684\u7f51\u7edc\u9009\u62e9\u83dc\u5355\u5207\u6362\u5230\u5176\u4ed6\u7f51\u7edc\u3002"),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u7f51\u7edc\u9009\u62e9\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9\u201c\u6dfb\u52a0\u7f51\u7edc\u201d(\u6216\u201c\u81ea\u5b9a\u4e49 RPC\u201d)\u624b\u52a8\u5c06 Conflux eSpace \u6dfb\u52a0\u5230 MetaMask\uff1a"),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"MetaMask-network-select",src:a(7832).Z,width:"1343",height:"589"})),(0,r.kt)("p",null,"\u5bf9\u4e8eeSpace ",(0,r.kt)("strong",{parentName:"p"},"mainnet"),", \u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New RPC URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain ID"),": 1030"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Explorer URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),(0,r.kt)("p",null,"\u5bf9\u4e8e eSpace ",(0,r.kt)("strong",{parentName:"p"},"testnet"),"\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u914d\u7f6e\u503c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Network Name"),": Conflux eSpace (Testnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"New RPC URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chain ID"),": 71"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Currency Symbol"),": CFX"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Block Explorer URL"),": ",(0,r.kt)("a",{parentName:"li",href:"https://evmtestnet.confluxscan.net"},"https://evmtestnet.confluxscan.net"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MetaMask-create-EVM-Space-rpc",src:a(6379).Z,width:"1934",height:"1294"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6240\u6709Conflux eSpace RPC \u7aef\u70b9URL \u548c chain ID\u90fd\u53ef\u4ee5\u5728\u6211\u4eec\u7684\u7f51\u7edc\u9875\u9762\u4e0a\u627e\u5230\u3002")),(0,r.kt)("p",null,"\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fdd\u5b58"),"\uff0c\u7136\u540e\u60a8\u5e94\u8be5\u5728 MetaMask \u4e2d\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Conflux eSpace")," \u662f\u5f53\u524d\u9009\u62e9\u7684\u7f51\u7edc\u3002 \u4e3a\u4e86\u8ba9\u60a8\u4f53\u9a8c MetaMask\u64cd\u4f5c\u60c5\u51b5\uff0c\u6211\u4eec\u5c06\u628a\u5b83\u8fde\u63a5\u5230 Remix \u5e76\u6267\u884c\u4e00\u4e9b\u4ea4\u6613\u3002 \u672c\u6307\u5357\u7684\u5176\u4f59\u90e8\u5206\u5c06\u5047\u8bbe\u60a8\u7684 MetaMask \u5df2\u8fde\u63a5\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Conflux eSpace(Testnet)"),"\u3002"))}m.isMDXComponent=!0},6379:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_add_network-ce-cec2c8b22ca4e27c6b253415ff8f2244.png"},7832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_choose_network-0-0d3034f88dcd7bc92f61df7d1be9bb7c.png"}}]);