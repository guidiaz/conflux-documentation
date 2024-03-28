"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7625],{63113:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=o(85893),r=o(11151);const c={id:"txpool_rpc",sidebar_position:2,title:"txpool Namespace",keywords:["conflux","txpool-rpc","sdk"],displayed_sidebar:"coreSidebar"},t=void 0,l={id:"core/build/json-rpc/txpool_rpc",title:"txpool Namespace",description:"txpool related RPCs which can enable developer get more info about transaction pool. Which was introduced from conflux-rust v1.1.6.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/build/json-rpc/txpool-namespace.md",sourceDirName:"core/build/json-rpc",slug:"/core/build/json-rpc/txpool_rpc",permalink:"/es/docs/core/build/json-rpc/txpool_rpc",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"txpool_rpc",sidebar_position:2,title:"txpool Namespace",keywords:["conflux","txpool-rpc","sdk"],displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"cfx Namespace",permalink:"/es/docs/core/build/json-rpc/cfx-namespace"},next:{title:"pos Namespace",permalink:"/es/docs/core/build/json-rpc/pos_rpc"}},a={},d=[{value:"RPCs",id:"rpcs",level:2},{value:"txpool_nextNonce",id:"txpool_nextnonce",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Example",id:"example",level:4}];function i(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"txpool"})," related RPCs which can enable developer get more info about transaction pool. Which was introduced from ",(0,s.jsx)(n.code,{children:"conflux-rust v1.1.6"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["These RPC methods require node's ",(0,s.jsx)(n.code,{children:"public_rpc_apis"})," config set to ",(0,s.jsx)(n.code,{children:"safe"})," or ",(0,s.jsx)(n.code,{children:"all"}),", or the namespace include ",(0,s.jsx)(n.code,{children:"txpool"})]}),"\n",(0,s.jsx)(n.h2,{id:"rpcs",children:"RPCs"}),"\n",(0,s.jsx)(n.h3,{id:"txpool_nextnonce",children:"txpool_nextNonce"}),"\n",(0,s.jsx)(n.p,{children:"Return one address's next usable nonce in transaction pool."}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ADDRESS"}),": CIP-37 address"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'params: [\n  "cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91"\n]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"QUANTITY"})," - Account's next usable nonce"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'curl --location --request POST \'http://localhost:12537\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "id": 1,\n    "jsonrpc": "2.0",\n    "method": "txpool_nextNonce",\n    "params": ["cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91"]\n}\'\n'})}),"\n",(0,s.jsx)(n.p,{children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "id": "15922956697249514502",\n    "result": "0x278"\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>t});var s=o(67294);const r={},c=s.createContext(r);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);