"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5399],{95891:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(85893),s=r(11151);const o={id:"common_rpc_error",sidebar_position:6,title:"Common RPC errors",keywords:["rpc","error"],displayed_sidebar:"generalSidebar"},i=void 0,d={id:"general/faq/Errors/common_rpc_error",title:"Common RPC errors",description:"Common errors",source:"@site/docs/general/faq/Errors/common-rpc-errors.md",sourceDirName:"general/faq/Errors",slug:"/general/faq/Errors/common_rpc_error",permalink:"/docs/general/faq/Errors/common_rpc_error",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/faq/Errors/common-rpc-errors.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"common_rpc_error",sidebar_position:6,title:"Common RPC errors",keywords:["rpc","error"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Why Transaction is Pending?",permalink:"/docs/general/faq/core-space-transactions/why-transaction-is-pending"},next:{title:"Contributing",permalink:"/docs/general/CONTRIBUTING"}},t={},c=[{value:"Common errors",id:"common-errors",level:2},{value:"Method not found",id:"method-not-found",level:3},{value:"Lacking parameters",id:"lacking-parameters",level:3},{value:"Passing extra parameters",id:"passing-extra-parameters",level:3},{value:"Invalid base32 address passed",id:"invalid-base32-address-passed",level:3},{value:"Invalid block/transaction hash passed",id:"invalid-blocktransaction-hash-passed",level:3},{value:"Estimate error",id:"estimate-error",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"common-errors",children:"Common errors"}),"\n",(0,a.jsx)(n.h3,{id:"method-not-found",children:"Method not found"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32601,\n        "message": "Method not found"\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"lacking-parameters",children:"Lacking parameters"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 0, expected a tuple of size 1."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"passing-extra-parameters",children:"Passing extra parameters"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 2, expected fewer elements in array."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"invalid-base32-address-passed",children:"Invalid base32 address passed"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: Invalid base32 address: input net8888:aak2rra2njvd77ezwjvx04kkds9fzagfe6xm1vavv4dd error invalid checksum (actual 1122 != 0)."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"invalid-blocktransaction-hash-passed",children:"Invalid block/transaction hash passed"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 65, expected a (both 0x-prefixed or not) hex string with length of 64."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"estimate-error",children:"Estimate error"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: VmError(OutOfGas))"\n    },\n    "id": "15922956697249514502"\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var a=r(67294);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);