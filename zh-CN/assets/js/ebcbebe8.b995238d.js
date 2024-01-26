"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[4849],{35360:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=i(85893),t=i(11151);const o={sidebar_position:2,title:"\u8282\u70b9\u7c7b\u578b",description:"\u4e86\u89e3Conflux \u7f51\u7edc\u4e2d\u4e0d\u540c\u7c7b\u578b\u7684\u8282\u70b9\u3002",displayed_sidebar:"generalSidebar"},r=void 0,s={id:"general/run-a-node/node-types",title:"\u8282\u70b9\u7c7b\u578b",description:"\u4e86\u89e3Conflux \u7f51\u7edc\u4e2d\u4e0d\u540c\u7c7b\u578b\u7684\u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/node-types.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/node-types",permalink:"/zh-CN/docs/general/run-a-node/node-types",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8282\u70b9\u7c7b\u578b",description:"\u4e86\u89e3Conflux \u7f51\u7edc\u4e2d\u4e0d\u540c\u7c7b\u578b\u7684\u8282\u70b9\u3002",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u8fd0\u884c\u8282\u70b9",permalink:"/zh-CN/docs/general/run-a-node/"},next:{title:"\u8282\u70b9\u5feb\u7167\u5de5\u5177",permalink:"/zh-CN/docs/general/run-a-node/snapshot-tool"}},d={},c=[{value:"\u8282\u70b9\u7c7b\u578b\u5dee\u5f02",id:"\u8282\u70b9\u7c7b\u578b\u5dee\u5f02",level:2},{value:"\u5168\u8282\u70b9",id:"\u5168\u8282\u70b9",level:2},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:3},{value:"How to Run",id:"how-to-run",level:3},{value:"\u5f52\u6863\u8282\u70b9",id:"\u5f52\u6863\u8282\u70b9",level:2},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42-1",level:3},{value:"How to Run",id:"how-to-run-1",level:3},{value:"\u8f7b\u8282\u70b9",id:"\u8f7b\u8282\u70b9",level:2},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42-2",level:3},{value:"How to Run",id:"how-to-run-2",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"Why the cfx_getTransactionByHash API returns null?",id:"why-the-cfx_gettransactionbyhash-api-returns-null",level:3},{value:"Is fullnode enough for Exchange?",id:"is-fullnode-enough-for-exchange",level:3},{value:"I want to participate in mining or staking, which node type should I run?",id:"i-want-to-participate-in-mining-or-staking-which-node-type-should-i-run",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["\u5728 Conflux \u7f51\u7edc\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8fd0\u884c\u4e09\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u8282\u70b9\uff0c\u6bcf\u79cd\u7c7b\u578b\u90fd\u6709\u4e0d\u540c\u7684\u76ee\u7684\u548c\u4e0d\u540c\u7684\u786c\u4ef6\u8981\u6c42\u3002 \u8fd9\u4e09\u7c7b\u5206\u522b\u662f\uff1a",(0,l.jsx)(n.strong,{children:"\u5f52\u6863\u8282\u70b9\uff0c\u5168\u8282\u70b9\u548c\u8f7b\u8282\u70b9"}),"\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4e09\u79cd\u7c7b\u578b\u7684\u8282\u70b9\u4e4b\u95f4\u7684\u533a\u522b\u5728\u4e8e",(0,l.jsx)(n.strong,{children:"\u5b58\u50a8\u7684\u6570\u636e\u91cf"}),"\u3002 \u5f52\u6863\u8282\u70b9\u9700\u8981\u7684\u5b58\u50a8\u6700\u591a\uff0c\u800c\u8f7b\u8282\u70b9\u9700\u8981\u7684\u6700\u5c11\u3002 \u5f53\u7136\uff0c\u66f4\u591a\u7684\u6570\u636e\u4f1a\u6d88\u8017\u66f4\u591a\u7684\u786c\u4ef6\u8d44\u6e90\u3002 \u4e00\u822c\u800c\u8a00\uff0c",(0,l.jsx)(n.strong,{children:"\u5982\u679c\u60a8\u60f3\u53c2\u4e0e\u6316\u77ff\uff0c\u8fd0\u884c\u4e00\u4e2a\u5168\u8282\u70b9\u5373\u53ef"}),"\u3002 \u5982\u679c\u60a8\u60f3\u63d0\u4f9b RPC \u670d\u52a1\uff0c\u5219\u9700\u8981\u8fd0\u884c\u5f52\u6863\u8282\u70b9\u3002 \u8f7b\u8282\u70b9\u4e3b\u8981\u7528\u4f5c\u94b1\u5305\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728Conflux\u7f51\u7edc\u4e2d\u8fd0\u884c\u6240\u6709\u7c7b\u578b\u8282\u70b9\u7684\u8981\u6c42\u548c\u5b83\u4eec\u4e4b\u95f4\u7684\u533a\u522b\uff0c\u5177\u4f53\u63cf\u8ff0\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.h2,{id:"\u8282\u70b9\u7c7b\u578b\u5dee\u5f02",children:"\u8282\u70b9\u7c7b\u578b\u5dee\u5f02"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Full Node"}),": Stores all block headers and blocks in the most recent ",(0,l.jsx)(n.strong,{children:"100,000 Epochs"}),". ",(0,l.jsx)(n.strong,{children:"\u9002\u7528\u4e8e\u5927\u591a\u6570\u7528\u6237\u548c\u5f00\u53d1\u8005"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u5f52\u6863\u8282\u70b9\uff08Archive Node\uff09"}),"\uff1a\u5b58\u50a8\u6574\u4e2a\u533a\u5757\u94fe\u548c\u6240\u6709\u5386\u53f2\u6570\u636e\u3002 \u9700\u8981\u5927\u91cf\u5b58\u50a8\u7a7a\u95f4\uff0c\u9002\u7528\u4e8e\u8fdb\u884c\u6570\u636e\u5206\u6790\u548c\u9700\u8981\u8bbf\u95ee\u5b8c\u6574\u5386\u53f2\u6570\u636e\u7684\u5e94\u7528\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u8f7b\u8282\u70b9\uff08Light Node\uff09"}),"\uff1a\u4ec5\u5b58\u50a8\u533a\u5757\u5934\u548c\u4e00\u5c0f\u90e8\u5206\u533a\u5757\u94fe\u548c\u5386\u53f2\u6570\u636e\u3002 \u9002\u7528\u4e8e\u8d44\u6e90\u6709\u9650\u7684\u8bbe\u5907\uff0c\u53ef\u4ee5\u5728\u4e0d\u5b58\u50a8\u6574\u4e2a\u533a\u5757\u94fe\u7684\u60c5\u51b5\u4e0b\u4e0e\u533a\u5757\u94fe\u7f51\u7edc\u4ea4\u4e92\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5168\u8282\u70b9",children:"\u5168\u8282\u70b9"}),"\n",(0,l.jsxs)(n.p,{children:["A full node stores the entire block headers and blocks in the most recent ",(0,l.jsx)(n.strong,{children:"100,000 Epochs"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"\u786c\u4ef6\u8981\u6c42",children:"\u786c\u4ef6\u8981\u6c42"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"At least 16GB of RAM."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A minimum of 1.5TB free disk space (SSD is recommended)."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A stable internet connection."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"how-to-run",children:"How to Run"}),"\n",(0,l.jsx)(n.p,{children:'Follow the steps in the previous tutorial to install and configure the Conflux node, then set the mode parameter in the configuration file to "full":'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'mode = "full" \n'})}),"\n",(0,l.jsx)(n.p,{children:"Start the node with the custom configuration file, using the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5f52\u6863\u8282\u70b9",children:"\u5f52\u6863\u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:"An archive node stores the entire data of the blockchain, including all blocks, transactions. It requires more storage than a full node."}),"\n",(0,l.jsx)(n.h3,{id:"\u786c\u4ef6\u8981\u6c42-1",children:"\u786c\u4ef6\u8981\u6c42"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"At least 32GB of RAM."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A minimum of 2TB free disk space (SSD is recommended)."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"A stable internet connection."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"how-to-run-1",children:"How to Run"}),"\n",(0,l.jsx)(n.p,{children:'Set the mode parameter in the configuration file to "archive":'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'mode = "archive" \n'})}),"\n",(0,l.jsx)(n.p,{children:"Start the node with the custom configuration file, using the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8f7b\u8282\u70b9",children:"\u8f7b\u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:"A light node only stores the block headers and a small subset of other data, allowing it to verify the authenticity of the data without storing the entire blockchain."}),"\n",(0,l.jsx)(n.h3,{id:"\u786c\u4ef6\u8981\u6c42-2",children:"\u786c\u4ef6\u8981\u6c42"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"At least 4GB of RAM."}),"\n",(0,l.jsx)(n.li,{children:"A minimum of 300GB free disk space (SSD is recommended)."}),"\n",(0,l.jsx)(n.li,{children:"A stable internet connection."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"how-to-run-2",children:"How to Run"}),"\n",(0,l.jsx)(n.p,{children:'Set the mode parameter in the configuration file to "light":'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'mode = "light" \n'})}),"\n",(0,l.jsx)(n.p,{children:"Start the node with the custom configuration file, using the following command:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,l.jsx)(n.h3,{id:"why-the-cfx_gettransactionbyhash-api-returns-null",children:"Why the cfx_getTransactionByHash API returns null?"}),"\n",(0,l.jsxs)(n.p,{children:["If you want to get the transaction details, you need to run a ",(0,l.jsx)(n.code,{children:"fullnode"})," or ",(0,l.jsx)(n.code,{children:"archivenode"}),", and set the ",(0,l.jsx)(n.code,{children:"persist_tx_index"})," config to ",(0,l.jsx)(n.code,{children:"true"}),". The fullnode only store transactions in latest 100,000 Epoch."]}),"\n",(0,l.jsx)(n.h3,{id:"is-fullnode-enough-for-exchange",children:"Is fullnode enough for Exchange?"}),"\n",(0,l.jsx)(n.p,{children:"Yes, fullnode only support querying transactions in latest 100,000 Epoch"}),"\n",(0,l.jsx)(n.h3,{id:"i-want-to-participate-in-mining-or-staking-which-node-type-should-i-run",children:"I want to participate in mining or staking, which node type should I run?"}),"\n",(0,l.jsx)(n.p,{children:"Fullnode will be enough."})]})}function a(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var l=i(67294);const t={},o=l.createContext(t);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);