"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5463],{94387:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(85893),t=n(11151);const i={displayed_sidebar:"generalSidebar"},o="Error",a={id:"general/build/smart-contracts/gas-optimization/error",title:"Error",description:"In Solidity, developers can define errors in three main forms",source:"@site/docs/general/build/smart-contracts/gas-optimization/error.md",sourceDirName:"general/build/smart-contracts/gas-optimization",slug:"/general/build/smart-contracts/gas-optimization/error",permalink:"/docs/general/build/smart-contracts/gas-optimization/error",draft:!1,unlisted:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/build/smart-contracts/gas-optimization/error.md",tags:[],version:"current",frontMatter:{displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Constant vs Immutable",permalink:"/docs/general/build/smart-contracts/gas-optimization/constant"},next:{title:"Unchecked",permalink:"/docs/general/build/smart-contracts/gas-optimization/unchecked"}},c={},d=[];function l(e){const r={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"error",children:"Error"}),"\n",(0,s.jsxs)(r.p,{children:["In Solidity, developers can define errors in three main forms: ",(0,s.jsx)(r.code,{children:"revert"}),", ",(0,s.jsx)(r.code,{children:"require"}),", and ",(0,s.jsx)(r.code,{children:"assert"}),". The main differences between these methods from a functional perspective are two-fold:"]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Whether they can throw developer-defined error reasons;"}),"\n",(0,s.jsx)(r.li,{children:"Whether they can throw developer-defined errors carrying variables;"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"The main differences are as follows:"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Custom Reason"}),(0,s.jsx)(r.th,{children:"Carries Variable"}),(0,s.jsx)(r.th,{children:"Example"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"revert"})}),(0,s.jsx)(r.td,{children:"\u2705"}),(0,s.jsx)(r.td,{children:"\u2705"}),(0,s.jsx)(r.td,{children:"Reason: UnauthorizedAccess(0x05D01CAF54524A610CCF187082201120757f7AE5)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"require"})}),(0,s.jsx)(r.td,{children:"\u2705"}),(0,s.jsx)(r.td,{children:"\u274c"}),(0,s.jsx)(r.td,{children:"Reason: UnauthorizedAccess"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"assert"})}),(0,s.jsx)(r.td,{children:"\u274c"}),(0,s.jsx)(r.td,{children:"\u274c"}),(0,s.jsx)(r.td,{children:"Reason: Assertion violated"})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"DemoCode"})}),"\n",(0,s.jsx)(r.p,{children:"Below, we use the three forms of errors to observe the changes in gas usage:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-solidity",children:'contract Error {\n    error UnauthorizedAccess();\n\n    // gas: 164\n    function errorRevert() external pure {\n        if (true) revert UnauthorizedAccess();\n    }\n\n    // gas: 268\n    function errorRequire() external pure {\n        require(false, "UnauthorizedAccess");\n    }\n\n    // gas: 180\n    function errorAssert() external pure {\n        assert(false);\n    }\n}\n'})}),"\n",(0,s.jsx)(r.p,{children:"the gas optimization suggestions are as follows:"}),"\n",(0,s.jsxs)(r.p,{children:["\ud83c\udf1f1. ",(0,s.jsx)(r.code,{children:"revert"})," is the most recommended as it can throw error messages as well as related variables."]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83c\udf1f2. The string in ",(0,s.jsx)(r.code,{children:"require"})," is stored on-chain, which not only consumes more gas but also increases the contract size. It is recommended to choose based on actual needs."]}),"\n",(0,s.jsxs)(r.p,{children:["\ud83c\udf1f3. If there's a scenario where ",(0,s.jsx)(r.code,{children:"assert"})," is used, it's suggested to replace it with ",(0,s.jsx)(r.code,{children:"revert"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>o});var s=n(67294);const t={},i=s.createContext(t);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);