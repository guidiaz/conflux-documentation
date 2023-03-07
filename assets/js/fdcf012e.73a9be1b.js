"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2478],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),h=o,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(f,s(s({ref:t},p),{},{components:a})):n.createElement(f,s({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:7,title:"Spaces",keywords:["to polish"]},s="Spaces",c={unversionedId:"general/conflux-basics/spaces",id:"general/conflux-basics/spaces",title:"Spaces",description:"The Concept of Space",source:"@site/docs/general/conflux-basics/spaces.md",sourceDirName:"general/conflux-basics",slug:"/general/conflux-basics/spaces",permalink:"/docs/general/conflux-basics/spaces",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/conflux-basics/spaces.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Spaces",keywords:["to polish"]},sidebar:"tutorialSidebar",previous:{title:"Economics",permalink:"/docs/general/conflux-basics/economics"},next:{title:"Accounts",permalink:"/docs/general/conflux-basics/accounts"}},i={},l=[{value:"The Concept of Space",id:"the-concept-of-space",level:2},{value:"Why Introduce eSpace?",id:"why-introduce-espace",level:2},{value:"The Relationship Between the Two Space",id:"the-relationship-between-the-two-space",level:2},{value:"How to Communicate Between Spaces",id:"how-to-communicate-between-spaces",level:2},{value:"Mirror Address",id:"mirror-address",level:2},{value:"Internal Contract CrossSpaceCall",id:"internal-contract-crossspacecall",level:2},{value:"How To Choose",id:"how-to-choose",level:2},{value:"Reference",id:"reference",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spaces"},"Spaces"),(0,o.kt)("h2",{id:"the-concept-of-space"},"The Concept of Space"),(0,o.kt)("p",null,"In Conflux v2.0 (Hydra) upgrade, a new space called ",(0,o.kt)("inlineCode",{parentName:"p"},"eSpace")," is introduced by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90"),". It is an ",(0,o.kt)("inlineCode",{parentName:"p"},"independent space (or chain)")," which is compatible with Ethereum ",(0,o.kt)("inlineCode",{parentName:"p"},"interface"),", including ",(0,o.kt)("inlineCode",{parentName:"p"},"RPC")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"EVM"),". The original chain will be called ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSpace")," and remain unchanged and unaffected."),(0,o.kt)("p",null,"Space is an abstract concept that is used to isolate and distinguish ",(0,o.kt)("inlineCode",{parentName:"p"},"Ethereum format transaction")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"Conflux transaction"),". The two spaces are logically independent, and they do not affect each other."),(0,o.kt)("p",null,"To better understand, you can think CoreSpace and eSpace as two separate chains, where eSpace is a sub-chain of CoreSpace."),(0,o.kt)("p",null,"In other ways, we can refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualization technology")," from operating system concepts, and hence understood eSpace as a ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualized")," Ethereum chain running in the original network."),(0,o.kt)("h2",{id:"why-introduce-espace"},"Why Introduce eSpace?"),(0,o.kt)("p",null,"Conflux is a high-performance, fully decentralized public chain enabled by an innovative Tree-Graph consensus algorithm. The transaction fee of Conflux is very low that can be seen as almost free compared to other networks such as Ethereum. But consider Ethereum has already build a mature ecosystem including tools, SDKs, wallets, Solidity libraries. In order to reduce the migration cost of projects and users, and make users experience the advantages of low fees and high TPS of Conflux, eSpace was introduced."),(0,o.kt)("p",null,"Through the fully compatible interface, smart contracts and dApps of Ethereum can be directly deployed to eSpace without any modification. Development tools, SDKs, wallets, and services of Ethereum can be directly used in eSpace. Users do not need to learn new knowledge but just use the original tools to get started directly."),(0,o.kt)("p",null,"eSpace is very easy to use for ethereum developers and users, just like BSC, Polygon, Aurora."),(0,o.kt)("h2",{id:"the-relationship-between-the-two-space"},"The Relationship Between the Two Space"),(0,o.kt)("p",null,"CoreSpace and eSpace are two logically independent spaces with their own transactions, account status, and contracts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To interact with CoreSpace use Conflux-compatible wallet (Fluent), SDK (*-conflux-SDK), and development tools (chainIDE, conflux-truffle)."),(0,o.kt)("li",{parentName:"ul"},"To interact with eSpace directly use the existing tools and products from the Ethereum ecosystem, such as Metamask, truffle, hardhat, ethers.js, etc. (by simply setting the RPC network of the tool to ",(0,o.kt)("a",{parentName:"li",href:"../../espace/learn/network-endpoints.md"},"Conflux eSpace RPC"),").")),(0,o.kt)("p",null,"In terms of the underlying data storage, both Spaces reuse the same ledger (chain). A block may contain transactions from both Spaces, and they are only differentiated by the transaction type when transactions are executed. Each will only impact the account status in its own Space."),(0,o.kt)("h2",{id:"how-to-communicate-between-spaces"},"How to Communicate Between Spaces"),(0,o.kt)("p",null,"The brand new eSpace chain has not introduced new tokens. CFX is still used as native token in eSpace to pay transaction fees. Which can be transferred across the two spaces by the newly introduced internal contract ",(0,o.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall"),"."),(0,o.kt)("h2",{id:"mirror-address"},"Mirror Address"),(0,o.kt)("p",null,"Each account in CoreSpace has a corresponding account in eSpace, which we call the ",(0,o.kt)("inlineCode",{parentName:"p"},"Mirror Address"),". However, eSpace accounts do not have the corresponding account in CoreSpace. The mirror address from CoreSpace to eSpace is calculated by fixed steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Decode the original Base32 address to get the address payload with the Buffer format."),(0,o.kt)("li",{parentName:"ol"},"Hash the payload by Keccak and take the last 20 bytes."),(0,o.kt)("li",{parentName:"ol"},"The mirror address is the result of the previous step in hex encoding.")),(0,o.kt)("p",null,"Conflux SDKs provide methods to calculate the base32 mirror address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// js-conflux-sdk example\n> const { address } = require('js-conflux-sdk')\n> address.cfxMappedEVMSpaceAddress('cfx:aamgvyzht7h1zxdghb9ee9w26wrz8rd3gj837392dp')\n'0x62954816cE133B41Ab888e1b68b62549DE2f32e0'\n")),(0,o.kt)("p",null,"Note: Do not directly use the hex address that is resulted from decoding the base32 address as the ",(0,o.kt)("inlineCode",{parentName:"p"},"eSpace mirror address")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"eSpace address"),". This operation is wrong and will lead to loss of assets."),(0,o.kt)("h2",{id:"internal-contract-crossspacecall"},"Internal Contract CrossSpaceCall"),(0,o.kt)("p",null,"CrossSpaceCall is an internal contract located in ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreSpace")," with hex40 format address ",(0,o.kt)("inlineCode",{parentName:"p"},"0x08880000000000000000000000000000000000000006"),". The specific interface of the contract can be found in its ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/learn/core-space-basics/internal-contracts/crossSpaceCall"},"interface documentation"),"."),(0,o.kt)("p",null,"The internal contract CrossSpaceCall provides several functions."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"It enables the cross-space transfers of CFX."),(0,o.kt)("li",{parentName:"ol"},"It enables deploy contracts to eSpace from CoreSpace."),(0,o.kt)("li",{parentName:"ol"},"It enables eSpace contract methods to be called in CoreSpace.")),(0,o.kt)("p",null,"The cross-space transfers of CFX are synchronous and can be done within one transaction. It is simpler, safer, and faster compared to cross-chain transfers."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://confluxhub.io/espace-bridge/cross-space"},"ConfluxHub CrossSpace app")," is a CFX, ERC20 cross-space transfer application based on this internal contract, which is very user-friendly."),(0,o.kt)("p",null,"The detail of CrossSpaceCall can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.conflux123.xyz/books/conflux-espace/page/spaces"},"separate section"),"."),(0,o.kt)("h2",{id:"how-to-choose"},"How To Choose"),(0,o.kt)("p",null,"Conflux CoreSpace is a native space that supports ",(0,o.kt)("inlineCode",{parentName:"p"},"contract sponsorship")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"has more network capacity (higher TPS)"),", but requires unique Base32 addresses, RPC, SDK, etc. Therefore, if you want to develop a brand new project, you can choose the CoreSpace and the users of the project can interact with the project by paying no gas fee."),(0,o.kt)("p",null,"If you want to deploy an Ethereum project to take advantage of Conflux's high performance and low cost in order to reduce user costs, you can choose eSpace. The project can be deployed directly without any modification. If you are a skilled Ethereum engineer, you can also choose eSpace directly and use the tools and SDKs that you are familiar with to get started quickly."),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"CIP-90"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/espace/build/compatibility/evm_space_rpc_compatibility"},"Espace RPC Compatibility"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/espace/build/compatibility/evm-compatibility"},"Espace EVM Compatibility"),".")))}u.isMDXComponent=!0}}]);