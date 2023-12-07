"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6220],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},17727:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:2,title:"EVM Compatibility",description:"EVM Compatibility of Conflux eSpace",keywords:["EVM","Compatibility"],displayed_sidebar:"eSpaceSidebar"},l=void 0,o={unversionedId:"espace/build/evm-compatibility",id:"espace/build/evm-compatibility",title:"EVM Compatibility",description:"EVM Compatibility of Conflux eSpace",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/evm-compatibility.md",sourceDirName:"espace/build",slug:"/espace/build/evm-compatibility",permalink:"/zh-CN/docs/espace/build/evm-compatibility",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"EVM Compatibility",description:"EVM Compatibility of Conflux eSpace",keywords:["EVM","Compatibility"],displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Oracles",permalink:"/zh-CN/docs/espace/build/infrastructure/oracles"},next:{title:"JSON-RPC Compatibility",permalink:"/zh-CN/docs/espace/build/jsonrpc-compatibility"}},p={},c=[{value:"Transaction Type",id:"transaction-type",level:2},{value:"EVM Opcodes",id:"evm-opcodes",level:2},{value:"Block Time",id:"block-time",level:2},{value:"Contract Size",id:"contract-size",level:2},{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"Transaction Gas limit",id:"transaction-gas-limit",level:2},{value:"EVM Precompiles",id:"evm-precompiles",level:2},{value:"Phantom transactions",id:"phantom-transactions",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],d={toc:c},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"eSpace \u5b9e\u73b0\u4e86\u4e00\u4e2a\u4ee5\u592a\u574a\u865a\u62df\u673a (EVM)\u3002 \u4ee5\u4e0b\u662f eSpace \u548c\u4ee5\u592a\u574a\u4e4b\u95f4\u7684\u4e00\u4e9b\u533a\u522b\uff1a"),(0,r.kt)("h2",{id:"transaction-type"},"Transaction Type"),(0,r.kt)("p",null,"Currently eSpace only support ",(0,r.kt)("strong",{parentName:"p"},"155 type")," transaction. 1559 type transaction is not support."),(0,r.kt)("h2",{id:"evm-opcodes"},"EVM Opcodes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"BLOCKHASH")," opcode can only take ",(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER-1")," as input. (Unlike Ethereum, which takes any integer in ",(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER-256")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER-1")," as input). This is the ",(0,r.kt)("strong",{parentName:"li"},"only break opcode"),".")),(0,r.kt)("h2",{id:"block-time"},"Block Time"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NUMBER")," opcode\u5c06\u8fd4\u56de\u6811\u56fe",(0,r.kt)("inlineCode",{parentName:"p"},"epoch number"),"\u3002 \u56e0\u6b64\uff0c\u5728 eSpace \u5408\u7ea6\u4e2d\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"block.number")," \u4e0d\u4f1a\u4ee5\u7a33\u5b9a\u548c\u53ef\u9884\u6d4b\u7684\u901f\u7387\u589e\u957f\uff0c\u56e0\u6b64\u5b83\u53ef\u80fd\u4e0d\u9002\u5408\u7528\u4e8e\u6d4b\u91cf\u65f6\u95f4\u3002"),(0,r.kt)("p",null,"Block generate rate is 1.25s per block (mainnet), is same as Core Space Epoch time."),(0,r.kt)("h2",{id:"contract-size"},"Contract Size"),(0,r.kt)("p",null,"Contract max code size is ",(0,r.kt)("inlineCode",{parentName:"p"},"49152")," double as Ethereum"),(0,r.kt)("h2",{id:"transaction-fees"},"Transaction Fees"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SSTORE")," \u64cd\u4f5c\u7801\u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"SUICIDE")," opcode\u4e2d\u4e0d\u4f1a\u9000\u8fd8gas\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5360\u7528\u5b58\u50a8\u7684\u64cd\u4f5c\u6709\u4e0d\u540c\u7684gas\u6d88\u8017\u3002",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5f53\u5c06\u5b58\u50a8\u6761\u76ee\u4ece\u96f6\u66f4\u6539\u4e3a\u975e\u96f6\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"SSTORE")," \u82b1\u8d39 40000 gas\uff08\u800c\u4ee5\u592a\u574a\u4e2d\u4e3a 20000 gas\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u65b0\u5408\u7ea6\u65f6\uff0c\u6bcf\u4e2a\u5b57\u8282\u82b1\u8d39 400 gas\uff08\u800c\u4ee5\u592a\u574a\u4e2d\u4e3a 200 gas\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"CALL")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"SUICIDE")," \u521b\u5efa\u65b0\u8d26\u6237\u65f6\uff0c\u8be5\u64cd\u4f5c\u6d88\u8017 50000 gas\uff08\u800c\u4ee5\u592a\u574a\u4e2d\u4e3a 25000 gas\uff09\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\u6700\u591a ",(0,r.kt)("inlineCode",{parentName:"li"},"1/4")," \u7684\u4ea4\u6613 ",(0,r.kt)("inlineCode",{parentName:"li"},"gasLimit")," \u53ef\u4ee5\u88ab\u9000\u8fd8\uff08\u5982\u679c\u672a\u4f7f\u7528\uff09")),(0,r.kt)("h2",{id:"transaction-gas-limit"},"Transaction Gas limit"),(0,r.kt)("p",null,"Only the block whose block height is a multiple of ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," can pack Ethereum type transaction. The total gas limit of these transaction cannot exceed half of the block gas limit (1500w)."),(0,r.kt)("h2",{id:"evm-precompiles"},"EVM Precompiles"),(0,r.kt)("p",null,"All standard precompiles are supported."),(0,r.kt)("div",{class:"compat-evm-precompiles-table"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Spec"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x01"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ECRecover")),(0,r.kt)("td",{parentName:"tr",align:null},"ECDSA public key recovery"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x02"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SHA256")),(0,r.kt)("td",{parentName:"tr",align:null},"SHA-2 256-bit hash function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x03"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RIPEMD160")),(0,r.kt)("td",{parentName:"tr",align:null},"RIPEMD 160-bit hash function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x04"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Identity")),(0,r.kt)("td",{parentName:"tr",align:null},"Identity function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethereum.github.io/yellowpaper/paper.pdf"},"Yellow Paper")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x05"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ModExp")),(0,r.kt)("td",{parentName:"tr",align:null},"Big integer modular exponentiation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-198"},"EIP-198")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x06"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BN128Add")),(0,r.kt)("td",{parentName:"tr",align:null},"Elliptic curve addition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-196"},"EIP-196")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x07"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BN128Mul")),(0,r.kt)("td",{parentName:"tr",align:null},"Elliptic curve scalar multiplication"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-196"},"EIP-196")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x08"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"BN128Pair")),(0,r.kt)("td",{parentName:"tr",align:null},"Elliptic curve pairing check"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-197"},"EIP-197")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0x09"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Blake2F")),(0,r.kt)("td",{parentName:"tr",align:null},"BLAKE2b ",(0,r.kt)("inlineCode",{parentName:"td"},"F")," compression function"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-152"},"EIP-152")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"phantom-transactions"},"Phantom transactions"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"cross-space transaction")," is a transaction in the Conflux core space that, at some point during its execution, calls one of the state-changing (i.e., not ",(0,r.kt)("inlineCode",{parentName:"p"},"view"),") methods of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract. Such transactions can change CFX balances and contract storage in both spaces, core and eSpace."),(0,r.kt)("p",null,"As EVM clients are not aware of Conflux space transactions (the two spaces use different transaction formats), we construct one or more ",(0,r.kt)("em",{parentName:"p"},"phantom")," transactions (aka ",(0,r.kt)("em",{parentName:"p"},"virtual")," transactions) for each call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"CrossSpaceCall")," internal contract. These phantom transactions are derived from the corresponding core space transaction, they do not exist in the ledger. Phantom transactions have the following special properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5176\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"gas")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"gasPrice")," \u503c\u5747\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),"\u3002 \u8de8\u7a7a\u95f4\u4ea4\u6613\u7684 gas \u8d39\u7528\u5c06\u5728Core Space\u4e2d\u6536\u53d6\u3002 \u56e0\u6b64\uff0c\u76f8\u5e94\u7684 phantom \u4ea4\u6613\u4e0d\u4f1a\u6d88\u8017\u4efb\u4f55 gas\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6548\u7684\u7b7e\u540d\uff08",(0,r.kt)("inlineCode",{parentName:"li"},"r"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"s"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"v"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"standardV"),"\uff09\u3002 Conflux \u534f\u8bae\u65e0\u6cd5\u4ee3\u8868\u8de8\u7a7a\u95f4\u4ea4\u6613\u7684\u53d1\u9001\u8005\u7b7e\u540d\u4ea4\u6613\u3002 \u56e0\u6b64\uff0cphantom \u4ea4\u6613\u4f7f\u7528\u4e00\u4e2a\u4f2a\u9020\u7684\u7b7e\u540d\uff0c\u800c\u8fd9\u4e2a\u7b7e\u540d\u65e0\u6cd5\u901a\u8fc7 ECDSA \u9a8c\u8bc1\u3002")),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"When we retrieve epoch ",(0,r.kt)("inlineCode",{parentName:"p"},"0x72819")," in the Conflux core space, we see it contains a single Conflux transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cfx_getBlockByEpochNumber(0x72819, true)\n\n{\n  "epochNumber": "0x72819",\n  "hash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n  "transactions": [\n    {\n      "hash": "0xe89ef4b61434ec331b621b8687033f9e4058e76759a3522bdc50e0cb358f505e",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "NET8888:TYPE.USER:AAJFT5SK5RGK2KTJPMPUEJ69989N15KCCY7JAJEUP2",\n      "to": "NET8888:TYPE.CONTRACT:ACAP3N9KXZ7C4TU5NUU8G65FJ7A09MG1FY77ZAYSVW",\n      "gasPrice": "0x1",\n      "gas": "0x8b28d",\n      "storageLimit": "0x54",\n      "r": "0x2b943e84111cd5f95fbdf15667329ac546c9e5b99548d3c3702aeced4f07de6d",\n      "s": "0x2f47ae3c15ec2d1cbcf5bde3870aa21e1df54e8b7b926840a54faa9951cb3321",\n      "v": "0x0",\n      ...\n    }\n  ],\n  ...\n}\n')),(0,r.kt)("p",null,"When we retrieve the corresponding block in the eSpace, we see it contains two phantom transactions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'eth_getBlockByNumber(0x72819, true)\n\n{\n  "hash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n  "number": "0x72819",\n  "transactions": [\n    {\n      "hash": "0xfcdcf304b6b9dc263625b0924efaf3a7eb7044a17d27c0b8d631025b55d1147e",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "0x0000000000000000000000000000000000000000",\n      "to": "0xf709629eee416c2d2a53692d38f1568538d8022f",\n      "gasPrice": "0x0",\n      "gas": "0x0",\n      "r": "0x1",\n      "s": "0x1",\n      "v": "0x4593",\n      ...\n    },\n    {\n      "hash": "0xca2f5c5848458bea556f99e626db7108377d600e24add1920c4106358a1a5502",\n      "blockHash": "0x7440c9e8ebb2e87a7d187e4ad6d09027d860b3948cf4364bb883c028b6c3a858",\n      "from": "0xf709629eee416c2d2a53692d38f1568538d8022f",\n      "to": "0xdacf3af269b55ece5fe3239626a27f2a76c48245",\n      "gasPrice": "0x0",\n      "gas": "0x0",\n      "r": "0x1",\n      "s": "0x1",\n      "v": "0x4593",\n      ...\n    }\n  ],\n  ...\n}\n')))}m.isMDXComponent=!0}}]);