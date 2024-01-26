"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[902],{38758:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=s(85893),t=s(11151);const r={sidebar_position:4,title:"Transaction",displayed_sidebar:"eSpaceSidebar"},o=void 0,c={id:"espace/build/transaction",title:"Transaction",description:"eSpace's transaction is same as Ethereum 155 transaction, which means developers can use the same tools and libraries(ethers.js) to construct and send transaction. Currently Ethereum 1559 and EIP-2718 are not supported.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/espace/build/transaction.md",sourceDirName:"espace/build",slug:"/espace/build/transaction",permalink:"/es/docs/espace/build/transaction",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Transaction",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"JSON-RPC Compatibility",permalink:"/es/docs/espace/build/jsonrpc-compatibility"},next:{title:"eSpace Mapped Addresses(Cross Space)",permalink:"/es/docs/espace/build/accounts"}},i={},d=[{value:"FAQs",id:"faqs",level:2},{value:"How many block confirmations are required for a transaction to be considered final?",id:"how-many-block-confirmations-are-required-for-a-transaction-to-be-considered-final",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"eSpace's transaction is same as Ethereum 155 transaction, which means developers can use the same tools and libraries(ethers.js) to construct and send transaction. Currently Ethereum 1559 and EIP-2718 are not supported."}),"\n",(0,a.jsxs)(n.p,{children:["The RPC's ",(0,a.jsx)(n.code,{children:"eth_sendRawTransaction"}),"'s possible errors are same as ",(0,a.jsx)(n.a,{href:"/docs/core/build/json-rpc/cfx_sendTransaction-errors",children:"Core Space sending transactions errors"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The transaction lifecycle is also same Core Space ",(0,a.jsx)(n.a,{href:"/docs/core/core-space-basics/transactions/lifecycle",children:"Transaction Lifecycle"}),", is slightly different from Ethereum's transaction lifecycle (Ethereum Transaction does not need defer 5 block to execute)."]}),"\n",(0,a.jsxs)(n.p,{children:["If your eSpace transactions are pending or have failed to execute, you can utilize the ",(0,a.jsx)(n.a,{href:"/docs/core/core-space-basics/transactions/why-transaction-is-pending",children:"same method with Core Space to debug and handle them"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,a.jsx)(n.h3,{id:"how-many-block-confirmations-are-required-for-a-transaction-to-be-considered-final",children:"How many block confirmations are required for a transaction to be considered final?"}),"\n",(0,a.jsx)(n.p,{children:"The confirmation block number is 100 blocks, and finalized block number is 400 blocks."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var a=s(67294);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);