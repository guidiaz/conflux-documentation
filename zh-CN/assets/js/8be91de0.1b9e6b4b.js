"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[6854],{32103:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=a(85893),r=a(11151);const s={sidebar_position:6,title:"CrossSpaceCall",displayed_sidebar:"coreSidebar"},c=void 0,o={id:"core/core-space-basics/internal-contracts/crossSpaceCall",title:"CrossSpaceCall",description:"CIP-90 \u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u5185\u7f6e\u5408\u7ea6\uff1aCrossSpaceCall. CrossSpaceCall enables CFX and data to be transferred between the two spaces.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/core/core-space-basics/internal-contracts/crossSpaceCall.md",sourceDirName:"core/core-space-basics/internal-contracts",slug:"/core/core-space-basics/internal-contracts/crossSpaceCall",permalink:"/zh-CN/docs/core/core-space-basics/internal-contracts/crossSpaceCall",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"CrossSpaceCall",displayed_sidebar:"coreSidebar"},sidebar:"coreSidebar",previous:{title:"PoSRegister",permalink:"/zh-CN/docs/core/core-space-basics/internal-contracts/poSRegister"},next:{title:"ParamsControl",permalink:"/zh-CN/docs/core/core-space-basics/internal-contracts/params-control"}},i={},d=[{value:"Interface",id:"interface",level:2},{value:"Further Explain",id:"further-explain",level:2},{value:"Space Bridge Dapp",id:"space-bridge-dapp",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md",children:"CIP-90"})," \u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u5185\u7f6e\u5408\u7ea6\uff1a",(0,t.jsx)(n.code,{children:"CrossSpaceCall"}),". CrossSpaceCall enables ",(0,t.jsx)(n.strong,{children:"CFX and data"})," to be transferred between the two spaces."]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(n.p,{children:["This contract's hex40 address is ",(0,t.jsx)(n.code,{children:"0x0888000000000000000000000000000000000006"})," with interface:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// SPDX-License-Identifier: MIT\npragma solidity >=0.5.0;\n\ninterface CrossSpaceCall {\n    event Call(bytes20 indexed sender, bytes20 indexed receiver, uint256 value, uint256 nonce, bytes data);\n\n    event Create(bytes20 indexed sender, bytes20 indexed contract_address, uint256 value, uint256 nonce, bytes init);\n\n    event Withdraw(bytes20 indexed sender, address indexed receiver, uint256 value, uint256 nonce);\n\n    event Outcome(bool success);\n\n    /**\n     * @dev Deploy a contract in eSpace\n     * @param init bytes -  The contract init bytecode\n     * @return bytes20 - The hex address of the deployed contract\n     */\n    function createEVM(bytes calldata init) external payable returns (bytes20);\n\n    /**\n     * @dev Transfer CFX from Core space to eSpace specify address. Transfer amount is specified by transaction value.\n     * @param to bytes20 - The hex address of the receiver address in eSpace\n     * @return output bytes\n     */\n    function transferEVM(bytes20 to) external payable returns (bytes memory output);\n\n    /**\n     * @dev Call eSpace contract method from Core space\n     * @param to bytes20 - The hex address of the contract in eSpace\n     * @param data bytes - The contract method call data\n     * @return output bytes - Method call result\n     */ \n    function callEVM(bytes20 to, bytes calldata data) external payable returns (bytes memory output);\n\n    /**\n     * @dev Static call eSpace contract method from Core space\n     * @param to bytes20 - The hex address of the contract in eSpace\n     * @param data bytes - The contract method call data\n     * @return output bytes - Method call result\n     */ \n    function staticCallEVM(bytes20 to, bytes calldata data) external view returns (bytes memory output);\n\n    /**\n     * @dev Widthdraw CFX from eSpace mapped account's balance\n     * @param value uint256 - The amount of CFX to be withdrawn\n     */ \n    function withdrawFromMapped(uint256 value) external;\n\n    /**\n     * @dev Query eSpace mapped account's CFX balance\n     * @param addr address - The core address to query\n     * @return uint256 - Balance\n     */\n    function mappedBalance(address addr) external view returns (uint256);\n\n    /**\n     * @dev Query eSpace mapped account's nonce\n     * @param addr address - The core address to query\n     * @return uint256 - Balance\n     * */ \n    function mappedNonce(address addr) external view returns (uint256);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6ce8\u610f\uff1a",(0,t.jsx)(n.code,{children:"CrossSpaceCall"}),"\u5408\u7ea6\u90e8\u7f72\u5728Core Space\u3002 \u5b83\u53ea\u80fd\u4eceCore Space\u8c03\u7528\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"further-explain",children:"Further Explain"}),"\n",(0,t.jsxs)(n.p,{children:["For detail information about how to use ",(0,t.jsx)(n.code,{children:"CrossSpaceCall"})," contract cross CFX and data between Core Space and eSpace ",(0,t.jsx)(n.a,{href:"/docs/espace/build/cross-space-bridge",children:"check here"}),". You can also find  JS and Solidity examples in there."]}),"\n",(0,t.jsx)(n.h2,{id:"space-bridge-dapp",children:"Space Bridge Dapp"}),"\n",(0,t.jsxs)(n.p,{children:["Common users can use the ",(0,t.jsx)(n.a,{href:"https://confluxhub.io/espace-bridge/cross-space",children:"Space Bridge Dapp"})," to cross CFX directly through their wallets(Fluent and MetaMask) easily."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://confluxhub.io/espace-bridge/cross-space",children:"Mainnet Space Bridge"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://test.confluxhub.io/espace-bridge/cross-space",children:"Testnet Space Bridge"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>c});var t=a(67294);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);