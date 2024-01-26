"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8606],{17201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(85893),r=t(11151);const s={sidebar_position:2,title:"Contract Verification",description:"How to verify your smart contracts on ConfluxScan",displayed_sidebar:"eSpaceSidebar"},i=void 0,c={id:"espace/tutorials/VerifyContracts",title:"Contract Verification",description:"How to verify your smart contracts on ConfluxScan",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/espace/tutorials/VerifyContracts.md",sourceDirName:"espace/tutorials",slug:"/espace/tutorials/VerifyContracts",permalink:"/zh-CN/docs/espace/tutorials/VerifyContracts",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Contract Verification",description:"How to verify your smart contracts on ConfluxScan",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"Brownie",permalink:"/zh-CN/docs/espace/tutorials/deployContract/brownie"},next:{title:"\u7f51\u7edc RPC \u7aef\u70b9",permalink:"/zh-CN/docs/espace/network-endpoints"}},a={},l=[{value:"Using Developer Tools",id:"using-developer-tools",level:2},{value:"Hardhat",id:"hardhat",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Verify on Web UI Manually",id:"verify-on-web-ui-manually",level:2},{value:"Resources",id:"resources",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"After deploying your smart contracts, it's important to verify your code on a block explorer. This can be done in an automated way using your developer tooling or the Web UI."}),"\n",(0,o.jsx)(n.h2,{id:"using-developer-tools",children:"Using Developer Tools"}),"\n",(0,o.jsx)(n.p,{children:"Most smart contract tooling has plugins for verifying your contracts easily on ConfluxScan."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"\u7f51\u7edc\u540d\u79f0"}),(0,o.jsx)(n.th,{children:"Scan API"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u4e3b\u7f51"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://evmapi.confluxscan.io/api/",children:"https://evmapi.confluxscan.io/api/"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"\u6d4b\u8bd5\u7f51"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://evmapi-testnet.confluxscan.io/api/",children:"https://evmapi-testnet.confluxscan.io/api/"})})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"hardhat",children:"Hardhat"}),"\n",(0,o.jsxs)(n.p,{children:["Modify ",(0,o.jsx)(n.code,{children:"hardhat.config.ts"})," to point to Conflux eSpace's RPC and block explorer API. A dummy ",(0,o.jsx)(n.code,{children:"apiKey"})," value is required, but anything works for its value."]}),"\n",(0,o.jsx)(n.p,{children:"For example, if you are using eSpace testnet, your config will look like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"...\n\nconst config: HardhatUserConfig = {\n  ...\n  solidity: \"0.8.19\",\n  networks: {\n    espaceTestnet: {\n      url: \"https://evm.confluxrpc.com\",\n      accounts:\n        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],\n    },\n  },\n  sourcify: {\n    enabled: false,\n  },\n  etherscan: {\n    apiKey: {\n      espaceTestnet: 'espace',\n    },\n    customChains: [\n      {\n        network: 'espaceTestnet',\n        chainId: 71,\n        urls: {\n          apiURL: 'https://evmapi-testnet.confluxscan.io/api/',\n          browserURL: 'https://evmtestnet.confluxscan.io/',\n        },\n      },\n    ],\n  },\n}\n\n...\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you can verify the smart contract by running the following command."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-solidity",children:"npx hardhat verify --network espaceTestnet <contract address> <space separated constructor parameters>\n"})}),"\n",(0,o.jsx)(n.p,{children:"For example, this is how a smart contract that receives two uint parameters in the constructor should look:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-solidity",children:"npx hardhat verify --network espaceTestnet 0xD9880690bd717189cC3Fbe7B9020F27fae7Ac76F 123 456\n"})}),"\n",(0,o.jsx)(n.h3,{id:"foundry",children:"Foundry"}),"\n",(0,o.jsxs)(n.p,{children:["When using Foundry, the ",(0,o.jsx)(n.code,{children:"verify-contract"})," command helps automate the process of verifying contracts. If your contract has constructor arguments, you can specify these in ABI-encoded form with the ",(0,o.jsx)(n.code,{children:"--constructor-args"})," option. For example, if your constructor takes two ",(0,o.jsx)(n.code,{children:"uint256"})," variables:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:' --constructor-args $(cast abi-encode "constructor(uint256,uint256)" 0 7)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Refer to the ",(0,o.jsx)(n.a,{href:"https://book.getfoundry.sh/reference/forge/forge-verify-contract",children:"Foundry documentation"})," for further options you can specify."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"forge verify-contract <contract address> <contract name> \\\n  --verifier-url https://evmapi-testnet.confluxscan.io/api/ \\\n  --etherscan-api-key <anything is ok> \\\n  --constructor-args <your constructor arguments>\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Do not specify the chain ID."})}),"\n",(0,o.jsx)(n.h2,{id:"verify-on-web-ui-manually",children:"Verify on Web UI Manually"}),"\n",(0,o.jsxs)(n.p,{children:["Any contract deployed on eSpace can be verified on the ",(0,o.jsx)(n.a,{href:"https://evm.confluxscan.net/",children:"ConfluxScan"})," block explorer's contract detail page. If contract is not verified, the contract detail page will show a entry to verify page."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(76292).Z+"",width:"1680",height:"865"})}),"\n",(0,o.jsx)(n.p,{children:"Developer can use flatten tools (hardhat, foundry) to merge his contract and it's dependencies into one file. Then copy the flatten code into the editor. And fill in the contract name, compiler version, license. Finally, click the submit button to verify the contract."}),"\n",(0,o.jsxs)(n.p,{children:["If the verification failed, maybe the ",(0,o.jsx)(n.strong,{children:"compiler version"})," or ",(0,o.jsx)(n.strong,{children:"optimization settings"})," or ",(0,o.jsx)(n.strong,{children:"evm version"})," are not correct. Please check the compiler version and optimization settings in the contract deployment configuration."]}),"\n",(0,o.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.23/using-the-compiler.html#setting-the-evm-version-to-target",children:"EVM Versions to Target"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},76292:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/contract-verify-submit-54ed66cb32a2486eb6f424ff35041692.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);