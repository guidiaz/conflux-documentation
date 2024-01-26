"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[562],{16131:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=l(85893),i=l(11151);const s={sidebar_position:1,title:"\u8fd0\u884c\u8282\u70b9",description:"\u8fd0\u884c Conflux \u8282\u70b9\u7684\u5feb\u901f\u6307\u5357",toc_max_heading_level:4,displayed_sidebar:"generalSidebar"},t=void 0,r={id:"general/run-a-node/run-a-node",title:"\u8fd0\u884c\u8282\u70b9",description:"\u8fd0\u884c Conflux \u8282\u70b9\u7684\u5feb\u901f\u6307\u5357",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/run-a-node.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/",permalink:"/zh-CN/docs/general/run-a-node/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u8fd0\u884c\u8282\u70b9",description:"\u8fd0\u884c Conflux \u8282\u70b9\u7684\u5feb\u901f\u6307\u5357",toc_max_heading_level:4,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/general/run-a-node/Overview"},next:{title:"\u8282\u70b9\u7c7b\u578b",permalink:"/zh-CN/docs/general/run-a-node/node-types"}},d={},c=[{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"Step 1: Get the Conflux Client",id:"step-1-get-the-conflux-client",level:3},{value:"Option 1: Downloading the Conflux Client",id:"option-1-downloading-the-conflux-client",level:4},{value:"Option 2: Compiling the Conflux Client",id:"option-2-compiling-the-conflux-client",level:4},{value:"Step 2: Using Snapshot Tool (Optional)",id:"step-2-using-snapshot-tool-optional",level:3},{value:"\u4f7f\u7528\u793a\u4f8b\uff1a\uff08Linux\u548cMac - \u4e3b\u7f51 - \u5168\u8282\u70b9\uff09",id:"\u4f7f\u7528\u793a\u4f8blinux\u548cmac---\u4e3b\u7f51---\u5168\u8282\u70b9",level:4},{value:"Step 3: Configure the Node",id:"step-3-configure-the-node",level:3},{value:"Step 4: Running the Node",id:"step-4-running-the-node",level:3},{value:"Step 5: Interacting with the Node",id:"step-5-interacting-with-the-node",level:3},{value:"Step 6: Keeping Your Node Updated",id:"step-6-keeping-your-node-updated",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Conflux Network\u662f\u4e00\u4e2a\u5177\u6709\u53ef\u6269\u5c55\u6027\u7684\u533a\u5757\u94fe\u5e73\u53f0\uff0c\u65e8\u5728\u5b9e\u73b0\u9ad8\u541e\u5410\u91cf\u548c\u5b89\u5168\u6027\u3002 \u8fd0\u884cConflux\u8282\u70b9\u53ef\u4ee5\u8ba9\u4f60\u53c2\u4e0e\u5230\u7f51\u7edc\u4e2d\uff0c\u9a8c\u8bc1\u4ea4\u6613\uff0c\u5e76\u4e0eConflux\u533a\u5757\u94fe\u8fdb\u884c\u4ea4\u4e92\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u901a\u8fc7\u8fd0\u884cConflux\u8282\u70b9\u6765\u53c2\u4e0eConflux\u7f51\u7edc\u53ef\u4ee5\u63d0\u9ad8Conflux\u7f51\u7edc\u7684\u53bb\u4e2d\u5fc3\u5316\u7a0b\u5ea6\u3002 Here's a step-by-step guide to setting up and running a Conflux node."}),"\n",(0,o.jsx)(n.h2,{id:"\u786c\u4ef6\u8981\u6c42",children:"\u786c\u4ef6\u8981\u6c42"}),"\n",(0,o.jsxs)(n.p,{children:["The hardware requirements depend on the type of node you want to run. For the specific requirements of each type of node, please visit the section ",(0,o.jsx)(n.a,{href:"./node-types",children:"Node Types"})]}),"\n",(0,o.jsx)(n.p,{children:"For a Full Node, requirements are the following:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u81f3\u5c1116GB RAM(\u63a8\u835032GB)\uff0c4\u4e2aCPU \u6838\u5fc3\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u81f3\u5c111.5TB\u78c1\u76d8\u7a7a\u95f4(\u63a8\u8350\u4f7f\u7528SSD)\u3002"}),"\n",(0,o.jsx)(n.li,{children:"\u4e00\u4e2a\u7a33\u5b9a\u7684\u4e92\u8054\u7f51\u7f51\u7edc\u8fde\u63a5\u3002"}),"\n",(0,o.jsxs)(n.li,{children:["\u63a8\u8350\u4f7f\u7528 ",(0,o.jsx)(n.strong,{children:"ext4 \uff08\u4e3a\u4e86\u53ef\u9760\u6027\u548c\u7a33\u5b9a\u6027\uff09"}),"\uff0c\u56e0\u4e3aXFS\u867d\u7136\u6027\u80fd\u597d\u4f46\u662f\u4e0d\u7a33\u5b9a\u3002"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,o.jsx)(n.h3,{id:"step-1-get-the-conflux-client",children:"Step 1: Get the Conflux Client"}),"\n",(0,o.jsx)(n.p,{children:"There are two options, downloading a pre-built Conflux Client, or compiling the Conflux Client from source."}),"\n",(0,o.jsx)(n.h4,{id:"option-1-downloading-the-conflux-client",children:"Option 1: Downloading the Conflux Client"}),"\n",(0,o.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece",(0,o.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases",children:"conflux-rust\u4ed3\u5e93\u7684\u53d1\u884c\u7248\u9875\u9762"})," \u4e0b\u8f7d\u4e8c\u8fdb\u5236\u7684Conflux\u5ba2\u6237\u6bb5\u8f6f\u4ef6\u53d1\u884c\u7248\uff0c\u7136\u540e\u76f4\u63a5\u8fd0\u884c\u3002 \u5177\u4f53\u4fe1\u606f\u53ef\u4ee5\u8bbf\u95ee",(0,o.jsx)(n.a,{href:"/zh-CN/docs/general/run-a-node/advanced-topics/downloading-conflux-client",children:"\u8be5\u9875\u9762"}),"\u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"option-2-compiling-the-conflux-client",children:"Option 2: Compiling the Conflux Client"}),"\n",(0,o.jsxs)(n.p,{children:["Compiling the Conflux Client is another option, before compiling the Conflux node software, you'll need to install ",(0,o.jsx)(n.code,{children:"openssl"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"On Linux (Ubuntu)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"sudo apt-get update \nsudo apt upgrade \u2013y \nsudo apt install -y libssl-dev\n"})}),"\n",(0,o.jsx)(n.p,{children:"On macOS"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"brew install openssl \n"})}),"\n",(0,o.jsx)(n.p,{children:"The building can be done in two steps:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u514b\u9686Conflux\u4ed3\u5e93\u5230\u672c\u5730\uff0c\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\uff1a"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/Conflux-Chain/conflux-rust.git \n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u4ece\u6e90\u4ee3\u7801\u7f16\u8bd1\u51faConflux\u5ba2\u6237\u7aef\u8f6f\u4ef6\u7684\u4e8c\u8fdb\u5236\u7a0b\u5e8f\uff0c\u4f7f\u7528\u4ee5\u4e0b\u8bed\u53e5\uff1a"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"cd conflux-rust \ncargo build --release \n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u60f3\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee",(0,o.jsx)(n.a,{href:"/zh-CN/docs/general/run-a-node/advanced-topics/compiling-conflux-client",children:"\u8be5\u9875\u9762"}),"\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"step-2-using-snapshot-tool-optional",children:"Step 2: Using Snapshot Tool (Optional)"}),"\n",(0,o.jsx)(n.p,{children:"Conflux\u5feb\u7167\u5de5\u5177\uff08\u53c8\u79f0\u4e3a\u5f52\u6863\u5de5\u5177\uff09\u53ef\u4ee5\u5e2e\u52a9\u7528\u6237\u4ece\u5feb\u7167\u5feb\u901f\u5efa\u7acbConflux\u8282\u70b9\u3002 \u8be5\u5de5\u5177\u63d0\u4f9b\u4e86\u4e0b\u8f7d\u94fe\u63a5\uff0c\u4e14\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ec5\u4e0b\u8f7d\u5f53\u5929\u7684\u6570\u636e\u5e93\u5feb\u7167\u6570\u636e \u5feb\u7167\u5de5\u5177\u5728\u8fd0\u884c\u4e00\u4e2a\u8282\u70b9\u65f6\u53ef\u4ee5\u8282\u7701\u7528\u4e8e\u4e0b\u8f7d\u548c\u540c\u6b65\u6240\u6709\u533a\u5757\u94fe\u6570\u636e\u6240\u9700\u7684\u6570\u5468\u65f6\u95f4\u3002 \u5f3a\u70c8\u63a8\u8350\u4f7f\u7528\u8be5\u5de5\u5177\uff0c\u867d\u7136\u8be5\u5de5\u5177\u662f\u53ef\u9009\u7684\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u6709\u5173\u8be5\u5de5\u5177\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee",(0,o.jsx)(n.a,{href:"./snapshot-tool",children:"\u8be5\u90e8\u5206"}),"\u6216",(0,o.jsx)(n.a,{href:"https://github.com/conflux-fans/archive-tool",children:"GitHub\u4ed3\u5e93"})," \u3002"]}),"\n",(0,o.jsx)(n.h4,{id:"\u4f7f\u7528\u793a\u4f8blinux\u548cmac---\u4e3b\u7f51---\u5168\u8282\u70b9",children:"\u4f7f\u7528\u793a\u4f8b\uff1a\uff08Linux\u548cMac - \u4e3b\u7f51 - \u5168\u8282\u70b9\uff09"}),"\n",(0,o.jsx)(n.p,{children:"\u9996\u5148\uff0c\u4e0b\u8f7d\u5feb\u7167\u4e0b\u8f7d\u8f6f\u4ef6\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"wget <https://conflux-blockchain-data.oss-cn-beijing.aliyuncs.com/fullnode-db/M/download.sh> \n"})}),"\n",(0,o.jsx)(n.p,{children:"\u4e4b\u540e\uff0c\u8fd0\u884c\u201cdownload\u201d\u7a0b\u5e8f\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"bash download.sh \n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u538b\u7f29\u7684\u5feb\u7167\u6570\u636e\u5927\u5c0f\u4e3a\u51e0\u767eGB\u3002 \u4e0b\u8f7d\u5b8c\u6210\u540e\uff0c\u5c06\u5176\u5185\u5bb9\u89e3\u538b\u5230\u8282\u70b9\u7684 ",(0,o.jsx)(n.strong,{children:"run"})," \u6587\u4ef6\u5939\u4e2d\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"step-3-configure-the-node",children:"Step 3: Configure the Node"}),"\n",(0,o.jsxs)(n.p,{children:["\u60a8\u53ef\u80fd\u60f3\u8981\u901a\u8fc7\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\u6765\u914d\u7f6e\u60a8\u7684 Conflux \u8282\u70b9\u3002 \u4f60\u53ef\u4ee5\u5728Conflux\u4ed3\u5e93\u4e2d\u627e\u5230\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\uff0c\u4e00\u822c\u547d\u540d\u4e3a",(0,o.jsx)(n.strong,{children:"hydra.toml"}),"\uff08\u6216\u8005\u7c7b\u4f3c\u540d\u5b57\uff09\uff0c\u5b9e\u9645\u547d\u540d\u53d6\u51b3\u4e8e\u7f51\u7edc\u7248\u672c\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8fdb\u884c\u7f16\u8f91\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"nano ./run/hydra.toml \n"})}),"\n",(0,o.jsx)(n.p,{children:"Make sure to review and modify the settings according to your preferences and system capabilities."}),"\n",(0,o.jsxs)(n.p,{children:["\u66f4\u591a\u8be6\u7ec6\u6307\u5bfc\u8bf7\u8bbf\u95ee",(0,o.jsx)(n.a,{href:"/zh-CN/docs/general/run-a-node/advanced-topics/node-configuration",children:"\u8be5\u9875\u9762"}),"\u3002"]}),"\n",(0,o.jsx)(n.h3,{id:"step-4-running-the-node",children:"Step 4: Running the Node"}),"\n",(0,o.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8Conflux\u8282\u70b9\uff1a"}),"\n",(0,o.jsx)(n.p,{children:"\u5efa\u8bae\u5c06\u6700\u5927\u6253\u5f00\u6587\u4ef6\u6570\u8bbe\u7f6e\u4e3a10000\u3002 Linux\u4e2d\u9ed8\u8ba4\u503c\u4e3a1024\uff0c\u8fd0\u884cConflux\u8282\u70b9\u9700\u8981\u66f4\u591a\u3002 \u60a8\u53ef\u4ee5\u5728Linux\u7ec8\u7aef\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8bbe\u7f6e\u8be5\u53c2\u6570\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"ulimit -n 10000 \n"})}),"\n",(0,o.jsx)(n.p,{children:"\u4e3a\u4e86\u8fd0\u884cConflux\u8282\u70b9\uff0c\u6700\u540e\u8bf7\u8f6c\u5230conflux-rust\u6587\u4ef6\u5939\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u4f7f\u7528\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\u542f\u52a8Conflux\u5ba2\u6237\u7aef\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"conflux --config ./run/hydra.toml \n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6216\u8005\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"./start.sh\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8fd9\u5c06\u4f7f\u7528\u4f60\u4e4b\u524d\u7f16\u8f91\u7684\u914d\u7f6e\u6587\u4ef6\u542f\u52a8Conflux\u8282\u70b9\u3002"}),"\n",(0,o.jsx)(n.h3,{id:"step-5-interacting-with-the-node",children:"Step 5: Interacting with the Node"}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528RPC\u8c03\u7528\u4e0eConflux\u8282\u70b9\u4ea4\u4e92\u3002 Conflux\u8282\u70b9\u63d0\u4f9b\u4e86HTTP JSON-RPC\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u501f\u52a9\u8be5\u670d\u52a1\u53d1\u9001\u8bf7\u6c42\u5e76\u4e0e\u533a\u5757\u94fe\u4ea4\u4e92\u3002"}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -H "Content-Type: application/json" -X POST \u2013data \'{"jsonrpc":"2.0","method":"cfx_clientVersion","params":[],"id":67}\' 127.0.0.1:12537\n'})}),"\n",(0,o.jsx)(n.h3,{id:"step-6-keeping-your-node-updated",children:"Step 6: Keeping Your Node Updated"}),"\n",(0,o.jsxs)(n.p,{children:["\u786e\u4fdd\u5c06",(0,o.jsx)(n.a,{href:"/zh-CN/docs/general/run-a-node/how-to-upgrad",children:"Conflux\u8282\u70b9\u8f6f\u4ef6\u66f4\u65b0"})," \u5230\u6700\u65b0\u7248\u672c\uff0c\u4ee5\u786e\u4fdd\u4e0e\u7f51\u7edc\u7684\u517c\u5bb9\u6027\u5e76\u5305\u542b\u6700\u65b0\u7684\u529f\u80fd\u548c\u5b89\u5168\u8865\u4e01\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,o.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728\u8282\u70b9\u5efa\u7acb\u8fc7\u7a0b\u4e2d\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u67e5\u770b",(0,o.jsx)(n.a,{href:"/zh-CN/docs/general/run-a-node/nodes-faqs",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"})," \u548c",(0,o.jsx)(n.a,{href:"/zh-CN/docs/general/run-a-node/TroubleShooting",children:"\u6545\u969c\u6392\u9664"})," \u90e8\u5206\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>t});var o=l(67294);const i={},s=o.createContext(i);function t(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);