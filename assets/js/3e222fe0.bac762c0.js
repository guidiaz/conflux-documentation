"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[611],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(a),d=r,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},7415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:4},s="Transferring Funds Across Spaces",i={unversionedId:"learn/getting-started/transfer-funds",id:"learn/getting-started/transfer-funds",title:"Transferring Funds Across Spaces",description:"Overview",source:"@site/docs/learn/getting-started/transfer-funds.md",sourceDirName:"learn/getting-started",slug:"/learn/getting-started/transfer-funds",permalink:"/docs/learn/getting-started/transfer-funds",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to Get Testnet CFX",permalink:"/docs/learn/getting-started/funding-your-wallet/how_to_use_cfx_faucet"},next:{title:"Network Endpoints",permalink:"/docs/category/network-endpoints"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"ConfluxHub",id:"confluxhub",level:2},{value:"Cross-Space Transfers for Developers",id:"cross-space-transfers-for-developers",level:2},{value:"Internal Contract",id:"internal-contract",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transferring-funds-across-spaces"},"Transferring Funds Across Spaces"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Since the Hydra hard fork in 2022, Conflux has two spaces: Core Space and eSpace. Both spaces use CFX as their native token and they run on the same blockchain. For more details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/@thegaram/S15_VAwh5"},"documentation")," or to ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/conflux-network/conflux-espace-a-high-level-overview-cdca29bc422a"},"this article"),"."),(0,r.kt)("p",null,"It is possible to move CFX or ERC20 tokens between Core Space and eSpace. This operation is called cross-space transfer. In the next section, we will explain how you can make such transfers."),(0,r.kt)("h2",{id:"confluxhub"},"ConfluxHub"),(0,r.kt)("p",null,"The easiest way to transfer assets between Core Space and eSpace is to use ",(0,r.kt)("a",{parentName:"p",href:"https://confluxhub.io/espace-bridge/cross-space"},"ConfluxHub"),". We recommend that you set up two wallets: ",(0,r.kt)("a",{parentName:"p",href:"https://fluentwallet.com/"},"Fluent")," for Core Space and ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," for eSpace."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Locale Dropdown",src:a(2594).Z,width:"1766",height:"1422"})),(0,r.kt)("p",null,"Follow these steps to make a cross-space transfer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Start by clicking on ",(0,r.kt)("inlineCode",{parentName:"li"},"Connect Wallet")," to connect your Fluent and MetaMask wallets to ConfluxHub."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"To: Conflux eSpace")," at the top shows that you are making a transfer from Core Space to eSpace. If you would like to make a transfer in the other direction, click on the arrow next to this text."),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"Conflux eSpace Destination Address")," field, type in your eSpace address or click the MetaMask icon on the right to fill this field automatically."),(0,r.kt)("li",{parentName:"ul"},"Next, select the token that you want to transfer and enter the transfer amount."),(0,r.kt)("li",{parentName:"ul"},"If the button on the bottom says ",(0,r.kt)("inlineCode",{parentName:"li"},"Approve"),", click on it to submit an ERC20 token approval first."),(0,r.kt)("li",{parentName:"ul"},"Once the button on the bottom says ",(0,r.kt)("inlineCode",{parentName:"li"},"Transfer"),", click on it to make the transfer.")),(0,r.kt)("p",null,"Making a cross-space transfer from eSpace to Core Space follows a similar process but it has two main steps: First, transfer the token to the bridge on eSpace. Second, withdraw the token from the bridge on Core Space. Please follow the site\u2019s instructions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f When making a cross-space transfer, always double check your addresses to avoid accidental asset loss.")),(0,r.kt)("h2",{id:"cross-space-transfers-for-developers"},"Cross-Space Transfers for Developers"),(0,r.kt)("p",null,"Below we will discuss how to make cross-space transfers programmatically."),(0,r.kt)("h3",{id:"internal-contract"},"Internal Contract"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90")," introduced the concept of two spaces running on one blockchain, and defined a new ",(0,r.kt)("a",{parentName:"p",href:"https://hackmd.io/@thegaram/S15_VAwh5"},"internal contract")," to connect the two. This contract is available under the address ",(0,r.kt)("a",{parentName:"p",href:"https://confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv"},(0,r.kt)("inlineCode",{parentName:"a"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaa2sn102vjv"))," (hex: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000006"),") on Core Space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"interface CrossSpace {\n    /* methods for cross-space CFX transfers */\n\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n    \n    function withdrawFromMapped(uint256 value) external;\n\n    function mappedBalance(address addr) external view returns (uint256);\n    \n    /* methods for other cross-space operations */\n\n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n    \n    // ...\n}\n\n")))}u.isMDXComponent=!0},2594:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/transferAssets-0c1a3f76a3a0ea978d3697997283f63a.png"}}]);