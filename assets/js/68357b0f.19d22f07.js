"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8159],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79191:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:5,title:"Network RPC Endpoints",description:"Conflux eSpace RPC endpoints",displayed_sidebar:"eSpaceSidebar"},o=void 0,i={unversionedId:"espace/network-endpoints",id:"espace/network-endpoints",title:"Network RPC Endpoints",description:"Conflux eSpace RPC endpoints",source:"@site/docs/espace/network-endpoints.md",sourceDirName:"espace",slug:"/espace/network-endpoints",permalink:"/docs/espace/network-endpoints",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/espace/network-endpoints.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Network RPC Endpoints",description:"Conflux eSpace RPC endpoints",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Contract Verification",permalink:"/docs/espace/tutorials/VerifyContracts"},next:{title:"Advanced",permalink:"/docs/category/advanced-1"}},p={},d=[{value:"Confura",id:"confura",level:2},{value:"Hong Kong",id:"hong-kong",level:3},{value:"US East",id:"us-east",level:3},{value:"Rate Limits",id:"rate-limits",level:3},{value:"FAQs",id:"faqs",level:2},{value:"How to get a Confura advanced API key?",id:"how-to-get-a-confura-advanced-api-key",level:3},{value:"Does eSpace have any other RPC service or Provider?",id:"does-espace-have-any-other-rpc-service-or-provider",level:3}],u={toc:d},m="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"confura"},"Confura"),(0,r.kt)("p",null,"Confura, a public RPC service offered by the Conflux Foundation, is available for free use. However, to maintain the service's usability, there are rate limits in place for the free tier. For access to a higher tier of RPC service, you can make a purchase through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/build/tools/web3paywall"},"Web3 Paywall"),", or you can apply directly to the Conflux Foundation by emailing ",(0,r.kt)("a",{parentName:"p",href:"mailto:bd@confluxnetwork.org"},"bd@confluxnetwork.org"),"."),(0,r.kt)("h3",{id:"hong-kong"},"Hong Kong"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"1030 (0x406)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"HTTP"),": ",(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxrpc.com"},"https://evm.confluxrpc.com"),(0,r.kt)("br",null)," ",(0,r.kt)("em",{parentName:"td"},"Websocket"),": wss://evm.confluxrpc.com/ws"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxscan.net"},"https://evm.confluxscan.net"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#testnet"},"Testnet")),(0,r.kt)("td",{parentName:"tr",align:null},"71 (0x47)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"HTTP"),": ",(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.com"},"https://evmtestnet.confluxrpc.com"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Websocket"),": wss://evmtestnet.confluxrpc.com/ws"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.net"},"https://evmtestnet.confluxscan.net"))))),(0,r.kt)("h3",{id:"us-east"},"US East"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Network"),(0,r.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC Endpoint URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Explorer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),(0,r.kt)("td",{parentName:"tr",align:null},"1030 (0x406)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"HTTP"),": ",(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxrpc.org"},"https://evm.confluxrpc.org"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Websocket"),": wss://evm.confluxrpc.org/ws"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evm.confluxscan.io"},"https://evm.confluxscan.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#testnet"},"Testnet")),(0,r.kt)("td",{parentName:"tr",align:null},"71 (0x47)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxrpc.org"},"https://evmtestnet.confluxrpc.org"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"td"},"Websocket"),": wss://evmtestnet.confluxrpc.org/ws"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://evmtestnet.confluxscan.io"},"https://evmtestnet.confluxscan.io"))))),(0,r.kt)("h3",{id:"rate-limits"},"Rate Limits"),(0,r.kt)("p",null,"Reference for various fee tiers and their rate limits."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Fee Tier"),(0,r.kt)("th",{parentName:"tr",align:null},"Price"),(0,r.kt)("th",{parentName:"tr",align:null},"Rate Limits"),(0,r.kt)("th",{parentName:"tr",align:null},"Buy Links"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Free"),(0,r.kt)("td",{parentName:"tr",align:null},"$0"),(0,r.kt)("td",{parentName:"tr",align:null},"50 calls/second, up to  100,000 calls/day"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard"),(0,r.kt)("td",{parentName:"tr",align:null},"$150/mo"),(0,r.kt)("td",{parentName:"tr",align:null},"100 calls/second, up to 1,000,000 calls/day"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://confluxhub.io/payment/consumer/app/subscription/0x33A9451ee070d750a077C93f71D2cFcD0180Fa7D"},"mainnet")," ",(0,r.kt)("br",null)," ",(0,r.kt)("a",{parentName:"td",href:"https://test.confluxhub.io/payment/consumer/app/subscription/0x4805C5B2741088B8458ed781083eA8940186E477"},"testnet"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enterprise"),(0,r.kt)("td",{parentName:"tr",align:null},"please inquire ",(0,r.kt)("a",{parentName:"td",href:"mailto:bd@confluxnetwork.org"},"bd@confluxnetwork.org")),(0,r.kt)("td",{parentName:"tr",align:null},"customize on demand"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maximum result-set size is 10,000 for ",(0,r.kt)("inlineCode",{parentName:"li"},"getLogs")," call;"),(0,r.kt)("li",{parentName:"ul"},"Old archived event logs may be inaccessible due to data prune;"),(0,r.kt)("li",{parentName:"ul"},"Append your api key(get from ",(0,r.kt)("a",{parentName:"li",href:"/docs/general/build/tools/web3paywall"},"Web3 Paywall")," or Conflux Foundation) to the endpoint for privileged access (eg., ",(0,r.kt)("inlineCode",{parentName:"li"},"https://evm.confluxrpc.com/<api-key>"),");"),(0,r.kt)("li",{parentName:"ul"},"Rate limits are also imposed per RPC method, please check the following specification for more details.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Rate Limit Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"RPC Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Free tier"),(0,r.kt)("th",{parentName:"tr",align:null},"Standard Tier"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 50; ",(0,r.kt)("br",null)," daily total < 100k"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 100; ",(0,r.kt)("br",null)," daily total < 1million"),(0,r.kt)("td",{parentName:"tr",align:null},"overall RPC requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getLogs"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 5"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 20"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_call"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 5"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 50"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getBlockBy*"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 5"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 20"),(0,r.kt)("td",{parentName:"tr",align:null},"includes: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getBlockByHash"),", ",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"eth_getBlockByNumber"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eth_getTransaction*"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 5"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 20"),(0,r.kt)("td",{parentName:"tr",align:null},"includes: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getTransactionByHash"),", ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getTransactionReceipt"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 20"),(0,r.kt)("td",{parentName:"tr",align:null},"includes: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"parity_getBlockReceipts")," etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trace RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"QPS < 20"),(0,r.kt)("td",{parentName:"tr",align:null},"includes: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"trace_block"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"trace_filter"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"trace_transaction"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter API"),(0,r.kt)("td",{parentName:"tr",align:null},"not supported"),(0,r.kt)("td",{parentName:"tr",align:null},"supported"),(0,r.kt)("td",{parentName:"tr",align:null},"includes: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_newFilter"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"eth_getFilterChanges")," etc."))))),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("h3",{id:"how-to-get-a-confura-advanced-api-key"},"How to get a Confura advanced API key?"),(0,r.kt)("p",null,"Confura is a public RPC service provided by Conflux Foundation, it is free to use. For using the free tier, you don't need an API key. To get a higher tier RPC service, you can buy it at ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/build/tools/web3paywall"},"Web3 Paywall")," or apply from Conflux foundation by sending email to ",(0,r.kt)("a",{parentName:"p",href:"bd@confluxnetwork.org"},"bd@confluxnetwork.org")),(0,r.kt)("h3",{id:"does-espace-have-any-other-rpc-service-or-provider"},"Does eSpace have any other RPC service or Provider?"),(0,r.kt)("p",null,"Yes, you can check them ",(0,r.kt)("a",{parentName:"p",href:"/docs/espace/build/infrastructure/RPC-Provider"},"here")))}s.isMDXComponent=!0}}]);