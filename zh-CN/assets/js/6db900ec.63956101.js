"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3130],{83543:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>t});var s=r(85893),a=r(11151);const o={id:"common_rpc_error",sidebar_position:7,title:"\u5e38\u89c1 RPC \u9519\u8bef",keywords:["rpc","error"],displayed_sidebar:"coreSidebar"},d=void 0,i={id:"core/build/json-rpc/common_rpc_error",title:"\u5e38\u89c1 RPC \u9519\u8bef",description:"\u5e38\u89c1\u9519\u8bef",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/build/json-rpc/common-rpc-errors.md",sourceDirName:"core/build/json-rpc",slug:"/core/build/json-rpc/common_rpc_error",permalink:"/zh-CN/docs/core/build/json-rpc/common_rpc_error",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"common_rpc_error",sidebar_position:7,title:"\u5e38\u89c1 RPC \u9519\u8bef",keywords:["rpc","error"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"\u53d1\u5e03/\u8ba2\u9605 API",permalink:"/zh-CN/docs/core/build/json-rpc/pubsub"},next:{title:"RPC Behaviour",permalink:"/zh-CN/docs/category/rpc-behaviour"}},c={},t=[{value:"\u5e38\u89c1\u9519\u8bef",id:"\u5e38\u89c1\u9519\u8bef",level:2},{value:"Method not found",id:"method-not-found",level:3},{value:"Lacking parameters",id:"lacking-parameters",level:3},{value:"Passing extra parameters",id:"passing-extra-parameters",level:3},{value:"Invalid base32 address passed",id:"invalid-base32-address-passed",level:3},{value:"Invalid block/transaction hash passed",id:"invalid-blocktransaction-hash-passed",level:3},{value:"Estimate error",id:"estimate-error",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5e38\u89c1\u9519\u8bef",children:"\u5e38\u89c1\u9519\u8bef"}),"\n",(0,s.jsx)(n.h3,{id:"method-not-found",children:"Method not found"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32601,\n        "message": "Method not found"\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"lacking-parameters",children:"Lacking parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 0, expected a tuple of size 1."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"passing-extra-parameters",children:"Passing extra parameters"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 2, expected fewer elements in array."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"invalid-base32-address-passed",children:"Invalid base32 address passed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: Invalid base32 address: input net8888:aak2rra2njvd77ezwjvx04kkds9fzagfe6xm1vavv4dd error invalid checksum (actual 1122 != 0)."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"invalid-blocktransaction-hash-passed",children:"Invalid block/transaction hash passed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Invalid params: invalid length 65, expected a (both 0x-prefixed or not) hex string with length of 64."\n    },\n    "id": "15922956697249514502"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"estimate-error",children:"Estimate error"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "error": {\n        "code": -32602,\n        "message": "Can not estimate: transaction execution failed, all gas will be charged (execution error: VmError(OutOfGas))"\n    },\n    "id": "15922956697249514502"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>d});var s=r(67294);const a={},o=s.createContext(a);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);