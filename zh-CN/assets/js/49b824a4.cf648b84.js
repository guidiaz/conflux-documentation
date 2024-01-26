"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8009],{41862:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var r=s(85893),c=s(11151);const t={id:"conflux_rpcs",title:"\u7f51\u7edc RPC \u7aef\u70b9",sidebar_position:4,keywords:["\u7aef\u70b9"],displayed_sidebar:"coreSidebar"},d=void 0,i={id:"core/conflux_rpcs",title:"\u7f51\u7edc RPC \u7aef\u70b9",description:"\u516c\u5f00\u53ef\u7528\u7684 Conflux Core \u7a7a\u95f4\u7f51\u7edc RPC \u7aef\u70b9",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/core-endpoints.md",sourceDirName:"core",slug:"/core/conflux_rpcs",permalink:"/zh-CN/docs/core/conflux_rpcs",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"conflux_rpcs",title:"\u7f51\u7edc RPC \u7aef\u70b9",sidebar_position:4,keywords:["\u7aef\u70b9"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"\u5f00\u53d1\u8005\u5feb\u901f\u5165\u95e8",permalink:"/zh-CN/docs/core/core-developer-quickstart"},next:{title:"Core Space Basics",permalink:"/zh-CN/docs/category/core-space-basics"}},l={},h=[{value:"1. Confura",id:"1-confura",level:2},{value:"\u516c\u5171\u7aef\u70b9",id:"\u516c\u5171\u7aef\u70b9",level:3},{value:"\u9999\u6e2f",id:"\u9999\u6e2f",level:4},{value:"\u7f8e\u56fd\u4e1c\u90e8",id:"\u7f8e\u56fd\u4e1c\u90e8",level:4},{value:"\u901f\u7387\u9650\u5236",id:"\u901f\u7387\u9650\u5236",level:3},{value:"2. Unifra",id:"2-unifra",level:2},{value:"\u516c\u5171\u7aef\u70b9",id:"\u516c\u5171\u7aef\u70b9-1",level:3}];function x(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u516c\u5f00\u53ef\u7528\u7684 Conflux Core \u7a7a\u95f4\u7f51\u7edc RPC \u7aef\u70b9"}),"\n",(0,r.jsx)(n.h2,{id:"1-confura",children:"1. Confura"}),"\n",(0,r.jsx)(n.p,{children:"Confura\u662fConflux\u7f51\u7edc\u4e0a\u7684\u4e00\u4e2a\u4e0e\u4ee5\u592a\u574aInfura\u7b49\u6548\u7684\u516c\u5171JSON-RPC\u670d\u52a1\uff0c\u7531Conflux\u57fa\u91d1\u4f1a\u5f00\u53d1\u548c\u7ef4\u62a4\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u7684\u516c\u5171RPC\u670d\u52a1\u4f4d\u4e8e\u5168\u7403\u4e0d\u540c\u7684\u5730\u533a\u3002 \u901a\u8fc7\u5229\u7528\u5730\u7406DNS\u8def\u7531\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u8bf7\u6c42\u4e0e\u4ed6\u4eec\u7269\u7406\u8ddd\u79bb\u6700\u8fd1\u7684\u533a\u57dfRPC\u670d\u52a1\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u516c\u5171\u7aef\u70b9",children:"\u516c\u5171\u7aef\u70b9"}),"\n",(0,r.jsx)(n.h4,{id:"\u9999\u6e2f",children:"\u9999\u6e2f"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7f51\u7edc\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u94fe ID"}),(0,r.jsx)(n.th,{children:"\u6d4f\u89c8\u5668\u7f51\u5740"}),(0,r.jsx)(n.th,{children:"RPC \u7aef\u70b9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e3b\u7f51"}),(0,r.jsx)(n.td,{children:"1029"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://confluxscan.net",children:"https://confluxscan.net"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"HTTP"}),": ",(0,r.jsx)(n.a,{href:"https://main.confluxrpc.com",children:"https://main.confluxrpc.com"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Websocket"}),": wss://main.confluxrpc.com/ws"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6d4b\u8bd5\u7f51"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://testnet.confluxscan.net",children:"https://testnet.confluxscan.net"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"HTTP"}),": ",(0,r.jsx)(n.a,{href:"https://main.confluxrpc.com",children:"https://main.confluxrpc.com"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Websocket"}),": wss://test.confluxrpc.com/ws"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"\u7f8e\u56fd\u4e1c\u90e8",children:"\u7f8e\u56fd\u4e1c\u90e8"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7f51\u7edc\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u94fe ID"}),(0,r.jsx)(n.th,{children:"\u6d4f\u89c8\u5668\u7f51\u5740"}),(0,r.jsx)(n.th,{children:"RPC \u7aef\u70b9"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e3b\u7f51"}),(0,r.jsx)(n.td,{children:"1029"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://confluxscan.io",children:"https://confluxscan.io"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"HTTP"}),": ",(0,r.jsx)(n.a,{href:"https://main.confluxrpc.org",children:"https://main.confluxrpc.org"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Websocket"}),": wss://main.confluxrpc.org/ws"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6d4b\u8bd5\u7f51"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://testnet.confluxscan.io",children:"https://testnet.confluxscan.io"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"HTTP"}),": ",(0,r.jsx)(n.a,{href:"https://test.confluxrpc.org",children:"https://test.confluxrpc.org"}),(0,r.jsx)("br",{}),(0,r.jsx)(n.em,{children:"Websocket"}),": wss://test.confluxrpc.org/ws"]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u901f\u7387\u9650\u5236",children:"\u901f\u7387\u9650\u5236"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u540c\u8d39\u7387\u6863\u6b21\u548c\u5176\u901f\u7387\u9650\u5236\u7684\u53c2\u8003\u3002"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u4ed8\u8d39\u7ea7\u522b"}),(0,r.jsx)(n.th,{children:"\u4ef7\u683c"}),(0,r.jsx)(n.th,{children:"\u901f\u7387\u9650\u5236"}),(0,r.jsx)(n.th,{children:"\u8d2d\u4e70\u94fe\u63a5"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u514d\u8d39"}),(0,r.jsx)(n.td,{children:"$0"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2 50 \u6b21\u8c03\u7528\uff0c\u6bcf\u5929\u6700\u591a100,000\u6b21 \u8c03\u7528"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u6807\u51c6"}),(0,r.jsx)(n.td,{children:"150 \u7f8e\u5143/\u6708"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2 100 \u6b21\u8c03\u7528\uff0c\u6bcf\u5929\u6700\u591a 1,000,000 \u6b21\u8c03\u7528"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"https://confluxhub.io/payment/consumer/app/subscription/0x33A9451ee070d750a077C93f71D2cFcD0180Fa7D",children:"mainnet"})," ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.a,{href:"https://test.confluxhub.io/payment/consumer/app/subscription/0x4805C5B2741088B8458ed781083eA8940186E477",children:"testnet"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4f01\u4e1a\u7528\u6237"}),(0,r.jsxs)(n.td,{children:["\u8bf7\u53d1\u90ae\u4ef6\u81f3 ",(0,r.jsx)(n.a,{href:"mailto:bd@confluxnetwork.org",children:"bd@confluxnetwork.org"})]}),(0,r.jsx)(n.td,{children:"\u6309\u9700\u5b9a\u5236"}),(0,r.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u8bf4\u660e"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"getLogs"}),"\u8c03\u7528\u7684\u7ed3\u679c\u96c6\u6700\u5927\u5927\u5c0f\u4e3a10,000\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u7531\u4e8e\u6570\u636e\u88c1\u526a\uff0c\u65e7\u7684\u5b58\u6863\u4e8b\u4ef6\u65e5\u5fd7\u53ef\u80fd\u65e0\u6cd5\u8bbf\u95ee\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u8bf7\u5c06\u60a8\u7684 Api \u5bc6\u94a5\u9644\u52a0\u5230\u7aef\u70b9\u4e0a\u4ee5\u83b7\u53d6\u7279\u6743\u8bbf\u95ee\uff08\u4f8b\u5982\uff1a",(0,r.jsx)(n.code,{children:"https://main.confluxrpc.com/<api-key>"}),"\uff09\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u6bcf\u4e2aRPC\u65b9\u6cd5\u4e5f\u6709\u901f\u7387\u9650\u5236\uff0c\u8bf7\u67e5\u9605\u4ee5\u4e0b\u89c4\u8303\u4ee5\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"\u901f\u7387\u9650\u5236\u7ec6\u5219"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"RPC \u65b9\u6cd5"}),(0,r.jsx)(n.th,{children:"\u514d\u8d39\u7ea7\u522b"}),(0,r.jsx)(n.th,{children:"\u6807\u51c6\u7ea7\u522b"}),(0,r.jsx)(n.th,{children:"\u6ce8\u91ca"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5168\u90e8"}),(0,r.jsxs)(n.td,{children:["\u6bcf\u79d2\u8bf7\u6c42\u6570< 50\uff1b",(0,r.jsx)("br",{}),"\u6bcf\u65e5\u603b\u6570 < 100,000"]}),(0,r.jsxs)(n.td,{children:["\u6bcf\u79d2\u8bf7\u6c42\u6570< 100\uff1b",(0,r.jsx)("br",{}),"\u6bcf\u65e5\u603b\u6570 < 100,0000"]}),(0,r.jsx)(n.td,{children:"RPC \u8bf7\u6c42\u603b\u6570"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cfx_getLogs"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 5"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 20"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cfx_call"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 5"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 50"}),(0,r.jsx)(n.td,{children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cfx_getBlockBy*"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 5"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 20"}),(0,r.jsxs)(n.td,{children:["\u5305\u62ec\uff1a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"cfx_getBlockByHash"}),", ",(0,r.jsx)("br",{}),(0,r.jsx)(n.code,{children:"cfx_getBlockByEPochNumber"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cfx_getTransaction*"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 5"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 20"}),(0,r.jsxs)(n.td,{children:["\u5305\u62ec\uff1a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"cfx_getTransactionByHash"}),", ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"cfx_getTransactionreceipt"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"debug RPC"}),(0,r.jsx)(n.td,{children:"\u6682\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 20"}),(0,r.jsxs)(n.td,{children:["\u5305\u62ec\uff1a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"cfx_getEpochreceips"})," \u7b49\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trace RPC"}),(0,r.jsx)(n.td,{children:"\u6682\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u6bcf\u79d2\u8bf7\u6c42\u6570< 20"}),(0,r.jsxs)(n.td,{children:["\u5305\u62ec\uff1a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"trace_block"}),", ",(0,r.jsx)(n.code,{children:"trace_filter"}),", ",(0,r.jsx)(n.code,{children:"trace_transaction"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"filter API"}),(0,r.jsx)(n.td,{children:"\u6682\u4e0d\u652f\u6301"}),(0,r.jsx)(n.td,{children:"\u652f\u6301"}),(0,r.jsxs)(n.td,{children:["\u5305\u62ec\uff1a ",(0,r.jsx)("br",{})," ",(0,r.jsx)(n.code,{children:"cfx_newFilter"}),", ",(0,r.jsx)(n.code,{children:"cfx_getFilterChanges"})," \u7b49\u3002"]})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"2-unifra",children:"2. Unifra"}),"\n",(0,r.jsx)(n.p,{children:"Unifra\u662f\u4e00\u4e2a\u4e13\u6ce8\u4e8e\u7b80\u5316\u533a\u5757\u94fe\u5f00\u53d1\u7684Web3\u5f00\u53d1\u8005\u5e73\u53f0\u3002 \u5b83\u5efa\u7acb\u4e86\u4e00\u5957\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u589e\u5f3a\u4e86API\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5353\u8d8a\u7684\u8282\u70b9\u57fa\u7840\u8bbe\u65bd\uff0c\u4ee5\u65e0\u7f1d\u6784\u5efa\u548c\u8fd0\u884c\u533a\u5757\u94fe\u5e94\u7528\u7a0b\u5e8f\u3002 Unifra \u4e3a\u591a\u4e2a\u94fe\u63d0\u4f9b API \u670d\u52a1\uff0c\u5305\u62ec \u4ee5\u592a\u574a\u3001BNB \u667a\u80fd\u94fe\u3001Polygon \u548c Conflux\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Unifra\u63d0\u4f9b\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u5f00\u653e\u8bbf\u95ee\u514d\u8d39\u7684\u516c\u5171\u7aef\u70b9"}),"\n",(0,r.jsx)(n.li,{children:"\u901a\u8fc7Notify\u63d0\u4f9b\u5b9e\u65f6\u7684webhook\u63d0\u9192"}),"\n",(0,r.jsx)(n.li,{children:"\u4e00\u6d41\u7684\u652f\u6301\u548c\u53ef\u9760\u6027/\u7a33\u5b9a\u6027"}),"\n",(0,r.jsx)(n.li,{children:"Unifra\u7684NFT API"}),"\n",(0,r.jsx)(n.li,{children:"\u5e26\u6709\u8bf7\u6c42\u6d4f\u89c8\u5668\u7684\u4eea\u8868\u677f"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u4f7f\u7528Unifra\u7684\u670d\u52a1\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5148\u6ce8\u518c\u4e00\u4e2a\u8d26\u6237\uff0c\u5e76\u5728",(0,r.jsx)(n.a,{href:"https://console.unifra.io/",children:"Unifra \u63a7\u5236\u53f0"}),"\u4e2d\u627e\u5230RPC\u7aef\u70b9\u3002 \u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b",(0,r.jsx)(n.a,{href:"https://docs.unifra.io/",children:"Unifra\u7684\u6587\u6863"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u516c\u5171\u7aef\u70b9-1",children:"\u516c\u5171\u7aef\u70b9"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7f51\u7edc\u540d\u79f0"}),(0,r.jsx)(n.th,{children:"\u94fe ID"}),(0,r.jsx)(n.th,{children:"\u6d4f\u89c8\u5668\u7f51\u5740"}),(0,r.jsx)(n.th,{children:"\u7aef\u70b9"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u4e3b\u7f51"}),(0,r.jsx)(n.td,{children:"1029"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://confluxscan.net",children:"https://confluxscan.net"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://conflux-core-public.unifra.io",children:"https://conflux-core-public.unifra.io"})})]})})]})]})}function o(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>d});var r=s(67294);const c={},t=r.createContext(c);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);