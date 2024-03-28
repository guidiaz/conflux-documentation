"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[7503],{77758:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=s(85893),o=s(11151);const a={sidebar_position:5,title:"How to Sponsor a Contract",description:"Use the ConfluxScan Read&Write Tool to sponsor a contract.",displayed_sidebar:"coreSidebar"},r=void 0,c={id:"core/tutorials/how-to-sponsor-contract",title:"How to Sponsor a Contract",description:"Use the ConfluxScan Read&Write Tool to sponsor a contract.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/core/tutorials/how-to-sponsor-contract.md",sourceDirName:"core/tutorials",slug:"/core/tutorials/how-to-sponsor-contract",permalink:"/es/docs/core/tutorials/how-to-sponsor-contract",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"How to Sponsor a Contract",description:"Use the ConfluxScan Read&Write Tool to sponsor a contract.",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"Using ChainIDE for Smart Contract Development",permalink:"/es/docs/core/tutorials/chainide"},next:{title:"Complete NFT Tutorial",permalink:"/es/docs/core/tutorials/nft-tutorial"}},i={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Query Sponsor Info",id:"query-sponsor-info",level:2},{value:"Sponsor Storage",id:"sponsor-storage",level:2},{value:"Sponsor Gas",id:"sponsor-gas",level:2},{value:"Whitelist",id:"whitelist",level:2},{value:"Check Contract Storage Usage Info on ConfluxScan",id:"check-contract-storage-usage-info-on-confluxscan",level:2},{value:"Check Transactions Sponsored on ConfluxScan",id:"check-transactions-sponsored-on-confluxscan",level:2},{value:"Other Sponsor Methods",id:"other-sponsor-methods",level:2},{value:"FAQs",id:"faqs",level:2},{value:"I sponsored a contract, but the transaction still failed. Why?",id:"i-sponsored-a-contract-but-the-transaction-still-failed-why",level:3}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Conflux Core ",(0,n.jsx)(t.a,{href:"/es/docs/core/core-space-basics/sponsor-mechanism",children:"Sponsorship"})," offers a user-friendly feature for new blockchain users. This tutorial will guide you on how to use the ",(0,n.jsx)(t.a,{href:"https://www.confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar?tab=contract-viewer",children:"ConfluxScan Read&Write Tool"})," to sponsor a contract."]}),"\n",(0,n.jsx)(t.p,{children:"The Contract Read&Write Tool allows users to interact with smart contracts. Any verified contract on ConfluxScan can utilize this tool to read or write data."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.confluxscan.io/address/cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar?tab=contract-viewer",children:"Mainnet SponsorWhitelistControl Read&Write Tool"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://testnet.confluxscan.io/address/cfxtest:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaeprn7v0eh?tab=contract-viewer",children:"Testnet SponsorWhitelistControl Read&Write Tool"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(86953).Z+"",width:"1402",height:"802"})}),"\n",(0,n.jsx)(t.h2,{id:"preparation",children:"Preparation"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Install the ",(0,n.jsx)(t.a,{href:"https://fluentwallet.com/",children:"Fluent"})," wallet and switch to the Conflux Testnet network."]}),"\n",(0,n.jsxs)(t.li,{children:["Acquire some test tokens from the ",(0,n.jsx)(t.a,{href:"https://faucet.confluxnetwork.org/",children:"Conflux Testnet Faucet"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Have a contract address ready, for example: ",(0,n.jsx)(t.code,{children:"cfxtest:acgwyxdwpc8475n2na9uk9rfbghstg1xtumht10mue"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"query-sponsor-info",children:"Query Sponsor Info"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Read Contract"})," tab, all the contract's view methods are listed. Open any of them, input the parameter (if any), and click the ",(0,n.jsx)(t.strong,{children:"Query"})," button to obtain the result."]}),"\n",(0,n.jsxs)(t.p,{children:["For instance, using ",(0,n.jsx)(t.code,{children:"getSponsorForGas"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(75546).Z+"",width:"600",height:"258"})}),"\n",(0,n.jsxs)(t.p,{children:["If a ",(0,n.jsx)(t.strong,{children:"Zero Address"})," is returned, it signifies that the contract is not sponsored."]}),"\n",(0,n.jsx)(t.h2,{id:"sponsor-storage",children:"Sponsor Storage"}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.strong,{children:"Write Contract"})," tab, all the contract's write methods are listed. Before using it, connect your wallet."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(59310).Z+"",width:"481",height:"229"})}),"\n",(0,n.jsxs)(t.p,{children:["If a write method includes a ",(0,n.jsx)(t.strong,{children:"payable modifier"}),", the first input box can be used to set the amount of CFX to be transferred to the contract when calling the method."]}),"\n",(0,n.jsx)(t.p,{children:"For example, inputting 50 means transferring 50 CFX to the contract."}),"\n",(0,n.jsxs)(t.p,{children:["Then click the ",(0,n.jsx)(t.strong,{children:"Write"})," button. A popup will appear; click ",(0,n.jsx)(t.strong,{children:"Confirm"})," to approve the transaction."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(26192).Z+"",width:"920",height:"723"})}),"\n",(0,n.jsx)(t.p,{children:"After transaction execution, you can query the contract's sponsor info again."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(98349).Z+"",width:"480",height:"257"})}),"\n",(0,n.jsx)(t.p,{children:"Half of the CFX will be converted into storage points."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(37088).Z+"",width:"448",height:"265"})}),"\n",(0,n.jsx)(t.h2,{id:"sponsor-gas",children:"Sponsor Gas"}),"\n",(0,n.jsxs)(t.p,{children:["We will set 10 CFX for the gas sponsor balance, with an upper bound of ",(0,n.jsx)(t.strong,{children:"1000000000000000"})," Drip (",(0,n.jsx)(t.code,{children:"10**15"})," Drip)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(68021).Z+"",width:"479",height:"302"})}),"\n",(0,n.jsx)(t.p,{children:"After the transaction execution, you can query the contract's sponsor info again."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(73679).Z+"",width:"471",height:"260"})}),"\n",(0,n.jsx)(t.h2,{id:"whitelist",children:"Whitelist"}),"\n",(0,n.jsx)(t.p,{children:"Finally, add the zero address to the whitelist to use the contract without paying a gas fee."}),"\n",(0,n.jsx)(t.p,{children:'For the second parameter, which is an array, pass ["0x0000000000000000000000000000000000000000"].'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(19973).Z+"",width:"476",height:"238"})}),"\n",(0,n.jsx)(t.h2,{id:"check-contract-storage-usage-info-on-confluxscan",children:"Check Contract Storage Usage Info on ConfluxScan"}),"\n",(0,n.jsx)(t.p,{children:"You can check the contract's storage usage and sponsor balance info on the ConfluxScan contract detail page."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(87189).Z+"",width:"1229",height:"779"})}),"\n",(0,n.jsx)(t.h2,{id:"check-transactions-sponsored-on-confluxscan",children:"Check Transactions Sponsored on ConfluxScan"}),"\n",(0,n.jsxs)(t.p,{children:["After setting up the sponsor, you can interact with the contract without paying gas fee. The transaction will be marked as ",(0,n.jsx)(t.strong,{children:"Sponsored"})," on ConfluxScan in the detail page."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(3742).Z+"",width:"813",height:"472"})}),"\n",(0,n.jsx)(t.h2,{id:"other-sponsor-methods",children:"Other Sponsor Methods"}),"\n",(0,n.jsxs)(t.p,{children:["Developers can use SDKs to call the ",(0,n.jsx)(t.code,{children:"SponsorWhitelistControl"})," methods to sponsor a contract. For an example, see ",(0,n.jsx)(t.a,{href:"/es/docs/core/core-space-basics/internal-contracts/sponsor-whitelist-control#how-to-sponsor-a-contract",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"faqs",children:"FAQs"}),"\n",(0,n.jsx)(t.h3,{id:"i-sponsored-a-contract-but-the-transaction-still-failed-why",children:"I sponsored a contract, but the transaction still failed. Why?"}),"\n",(0,n.jsx)(t.p,{children:"Several reasons might cause the transaction to fail:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The upper bound is too small."}),"\n",(0,n.jsx)(t.li,{children:"The sponsor balance is insufficient."}),"\n",(0,n.jsx)(t.li,{children:"The whitelist is not set correctly."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19973:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/add-zero-address-whitelist-ade9dfe55f773713596de0a958fde966.png"},87189:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/contract-detail-page-55c300549098e8fc913f793a45aedc4f.jpg"},75546:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/query-gas-sponsor-081bea63c6ca3fb002b436f98444ebcc.png"},73679:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/query-sponsor-gas-balance-e6531c3dccefb470bbb5a8c50863c270.png"},98349:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/query-sponsor-storage-balance-4a752ab3385749e561a50018e3119c8e.png"},37088:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/query-storage-points-aa284b176153cc169e57fe1aeb651c6f.png"},26192:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/set-collateral-sponsor-popup-28cde293a4c43751425b9b06d48554bc.png"},59310:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/set-collateral-sponsor-a2fd07e4764b2e32999f7ea5e2e311c2.png"},68021:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/set-gas-sponsor-e065291f9689765a6841bfde35b2c79b.png"},86953:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/sponsor-read-methods-0f6c4e56b2af7970a51a637fe19b8e52.png"},3742:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/tx-is-sponsored-f213138a494cec0e8bf69f4de3a75fe2.jpg"},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var n=s(67294);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);