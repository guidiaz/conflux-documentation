"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8808],{12545:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=t(85893),a=t(11151);const c={sidebar_position:2,title:"The Graph",displayed_sidebar:"eSpaceSidebar"},s=void 0,o={id:"espace/build/infrastructure/graph/graph",title:"The Graph",description:"The Graph \u4f5c\u4e3a EVM\uff08\u4ee5\u592a\u574a\u865a\u62df\u673a\uff09\u517c\u5bb9\u94fe\u7684\u4e3b\u8981\u533a\u5757\u94fe\u6570\u636e\u7d22\u5f15\u548c\u67e5\u8be2\u89e3\u51b3\u65b9\u6848 \u867d\u7136 Conflux eSpace \u5e76\u672a\u76f4\u63a5\u5f97\u5230 The Graph \u7684\u652f\u6301\uff0c\u4f46\u5176\u5b8c\u5168\u7684 EVM \u517c\u5bb9\u6027\u4f7f\u5f97\u5728 Conflux eSpace \u4e0a\u4f7f\u7528 The Graph \u6210\u4e3a\u53ef\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/build/infrastructure/graph/graph.mdx",sourceDirName:"espace/build/infrastructure/graph",slug:"/espace/build/infrastructure/graph/",permalink:"/zh-CN/docs/espace/build/infrastructure/graph/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"The Graph",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"RPC \u63d0\u4f9b\u5546",permalink:"/zh-CN/docs/espace/build/infrastructure/RPC-Provider"},next:{title:"\u8282\u70b9\u914d\u7f6e",permalink:"/zh-CN/docs/espace/build/infrastructure/graph/setup-graph-node"}},i={},p=[];function u(e){const r={a:"a",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"https://thegraph.com/",children:"The Graph"})," \u4f5c\u4e3a EVM\uff08\u4ee5\u592a\u574a\u865a\u62df\u673a\uff09\u517c\u5bb9\u94fe\u7684\u4e3b\u8981\u533a\u5757\u94fe\u6570\u636e\u7d22\u5f15\u548c\u67e5\u8be2\u89e3\u51b3\u65b9\u6848 \u867d\u7136 Conflux eSpace \u5e76\u672a\u76f4\u63a5\u5f97\u5230 The Graph \u7684\u652f\u6301\uff0c\u4f46\u5176\u5b8c\u5168\u7684 EVM \u517c\u5bb9\u6027\u4f7f\u5f97\u5728 Conflux eSpace \u4e0a\u4f7f\u7528 The Graph \u6210\u4e3a\u53ef\u80fd\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u8981\u5728 Conflux eSpace \u5185\u4f7f\u7528 The Graph\uff0c\u9700\u8981\u5efa\u7acb\u4e00\u4e2a The Graph \u8282\u70b9\uff0c\u968f\u540e\u521b\u5efa\u5b50\u56fe\u3002 \u6709\u5173\u5982\u4f55",(0,n.jsx)(r.a,{href:"/zh-CN/docs/espace/build/infrastructure/graph/setup-graph-node",children:"\u8bbe\u7f6e The Graph \u8282\u70b9"})," \u548c\u5728",(0,n.jsx)(r.a,{href:"/zh-CN/docs/espace/build/infrastructure/graph/create-subgraphs",children:" Conflux eSpace \u4e0a\u521b\u5efa\u5b50\u56fe"}),"\u7684\u5168\u9762\u6307\u5357\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u6211\u4eec\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,n.jsx)(r.code,{children:"Congraph"})," \u7684\u81ea\u6258\u7ba1\u56fe\u8282\u70b9\u96c6\u7fa4\u670d\u52a1 \u5bf9\u4e8e\u90a3\u4e9b\u5e0c\u671b\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"Congraph"})," \u5728 Conflux eSpace\uff08\u652f\u6301\u6d4b\u8bd5\u7f51\u548c\u4e3b\u7f51\uff09\u7d22\u5f15\u5176\u5b50\u56fe\u7684\u793e\u533a dAPP \u5f00\u53d1\u8005\uff0c\u8bf7\u8054\u7cfb ",(0,n.jsx)(r.a,{href:"mailto:bd@confluxnetwork.org",children:"bd@confluxnetwork.org"})," \u53d1\u9001\u60a8\u7684\u8bf7\u6c42\u3002"]})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>s});var n=t(67294);const a={},c=n.createContext(a);function s(e){const r=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(c.Provider,{value:r},e.children)}}}]);