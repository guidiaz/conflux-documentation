"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[9745],{71362:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>x,toc:()=>d});var i=l(85893),s=l(11151);const r={sidebar_position:1,title:"\u8fd0\u884c\u77ff\u5de5\u8282\u70b9",displayed_sidebar:"generalSidebar"},c=void 0,x={id:"general/mine-stake/mine/running-mining-node",title:"\u8fd0\u884c\u77ff\u5de5\u8282\u70b9",description:"Conflux\u7f51\u7edcPoW\uff08\u5de5\u4f5c\u91cf\u8bc1\u660e\uff09- GPU\u6316\u77ff\u6307\u5357",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/mine-stake/mine/running-mining-node.md",sourceDirName:"general/mine-stake/mine",slug:"/general/mine-stake/mine/running-mining-node",permalink:"/zh-CN/docs/general/mine-stake/mine/running-mining-node",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u8fd0\u884c\u77ff\u5de5\u8282\u70b9",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"Mining & Staking",permalink:"/zh-CN/docs/category/mining--staking"},next:{title:"PoS Staking",permalink:"/zh-CN/docs/general/mine-stake/stake/"}},o={},d=[{value:"Conflux\u7f51\u7edcPoW\uff08\u5de5\u4f5c\u91cf\u8bc1\u660e\uff09- GPU\u6316\u77ff\u6307\u5357",id:"conflux\u7f51\u7edcpow\u5de5\u4f5c\u91cf\u8bc1\u660e--gpu\u6316\u77ff\u6307\u5357",level:2},{value:"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c",id:"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c",level:2},{value:"Windows \u6d4b\u8bd5\u6307\u5357",id:"windows-\u6d4b\u8bd5\u6307\u5357",level:2},{value:"\u8fd0\u884c\u6587\u4ef6",id:"\u8fd0\u884c\u6587\u4ef6",level:2},{value:"\u51c6\u5907\u8fd0\u884c Conflux",id:"\u51c6\u5907\u8fd0\u884c-conflux",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u8fd0\u884c GPU \u6316\u77ff\u7a0b\u5e8f",id:"\u8fd0\u884c-gpu-\u6316\u77ff\u7a0b\u5e8f",level:2},{value:"Linux\u6d4b\u8bd5\u6307\u5357",id:"linux\u6d4b\u8bd5\u6307\u5357",level:2},{value:"\u51c6\u5907\u8fd0\u884c Conflux",id:"\u51c6\u5907\u8fd0\u884c-conflux-1",level:2},{value:"\u914d\u7f6e\u8bf4\u660e",id:"\u914d\u7f6e\u8bf4\u660e-1",level:2},{value:"\u8fd0\u884c GPU \u6316\u77ff\u7a0b\u5e8f",id:"\u8fd0\u884c-gpu-\u6316\u77ff\u7a0b\u5e8f-1",level:2},{value:"\u6e29\u99a8\u63d0\u793a\uff1a",id:"\u6e29\u99a8\u63d0\u793a",level:2}];function t(n){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"conflux\u7f51\u7edcpow\u5de5\u4f5c\u91cf\u8bc1\u660e--gpu\u6316\u77ff\u6307\u5357",children:"Conflux\u7f51\u7edcPoW\uff08\u5de5\u4f5c\u91cf\u8bc1\u660e\uff09- GPU\u6316\u77ff\u6307\u5357"}),"\n",(0,i.jsx)(e.p,{children:"\u7f51\u7edc\uff1aConflux Hydra"}),"\n",(0,i.jsx)(e.p,{children:"\u7248\u672c\uff1av2.2.1-fixpos"}),"\n",(0,i.jsx)(e.p,{children:"\u663e\u5361\u7c7b\u578b\uff1aNVIDIA GPU"}),"\n",(0,i.jsx)(e.p,{children:"\u663e\u5b58\u5bb9\u91cf\uff1a8GB\u6216\u66f4\u591a"}),"\n",(0,i.jsxs)(e.p,{children:["\u5b89\u88c5NVIDIA\u9a71\u52a8\u7a0b\u5e8f\uff1a",(0,i.jsx)(e.a,{href:"https://www.nvidia.cn/Download/index.aspx?lang=cn",children:"\u4e0b\u8f7d\u94fe\u63a5"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c",children:"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c"}),"\n",(0,i.jsxs)(e.p,{children:["\u8981\u4e0b\u8f7dConflux\u8282\u70b9\u7684\u6700\u65b0\u7248\u672c\uff0c\u8bf7\u53c2\u8003\u4ee5\u4e0b\u94fe\u63a5\uff1a",(0,i.jsx)(e.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases",children:"https://github.com/Conflux-Chain/conflux-rust/releases"})]}),"\n",(0,i.jsx)(e.h2,{id:"windows-\u6d4b\u8bd5\u6307\u5357",children:"Windows \u6d4b\u8bd5\u6307\u5357"}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u5efa\u8bae\u5173\u95ed\u9632\u75c5\u6bd2\u8f6f\u4ef6\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u9700\u8981Win 10, version 1903 \u6216\u8005\u66f4\u9ad8"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd0\u884c\u6587\u4ef6",children:"\u8fd0\u884c\u6587\u4ef6"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["**cfxmine.win.zip: \u6316\u77ff\u7a0b\u5e8f\uff1a",(0,i.jsx)(e.a,{href:"https://github.com/Conflux-Chain/open-cfxmine/releases",children:"\u70b9\u51fb\u67e5\u770bConflux PoW\u6316\u77ff\u7b97\u6cd5"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"conflux_v2.2.1-fixpos.zip\uff1a\u5168\u8282\u70b9\u7a0b\u5e8f\uff1a"}),(0,i.jsx)(e.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases",children:"\u70b9\u51fb\u67e5\u770b\u5168\u8282\u70b9\u7a0b\u5e8f"})]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u51c6\u5907\u8fd0\u884c-conflux",children:"\u51c6\u5907\u8fd0\u884c Conflux"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a\u201cconflux\u201d\u7684\u76ee\u5f55"}),"\n",(0,i.jsx)(e.li,{children:"\u89e3\u538b\u4e0b\u8f7d\u5305\u5230\u76ee\u5f55"}),"\n",(0,i.jsx)(e.li,{children:"\u8bf7\u4e0b\u8f7d pos_config \u5305\u5e76\u5c06\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\u79fb\u52a8\u5230\u8fd0\u884c\u76ee\u5f55"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u26a0\ufe0f"," \u76ee\u5f55\u7ed3\u6784\u5e94\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"conflux\n\u2514\u2500\u2500 run\n    \u2514\u2500\u2500 pos_config\n    \u2514\u2500\u2500 conflux.exe\n    \u2514\u2500\u2500 conflux.pdb\n    \u2514\u2500\u2500 hydra.toml\n    \u2514\u2500\u2500 log.yaml\n    \u2514\u2500\u2500 clear_state.bat\n    \u2514\u2500\u2500 clear_state.sh\n    \u2514\u2500\u2500 libcrypto-1_1-x64.dll\n    \u2514\u2500\u2500 libssl-1_1-x64.dll\n    \u2514\u2500\u2500 start.bat\n    \u2514\u2500\u2500 start.sh\n    \u2514\u2500\u2500 throttling.toml\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u4e4b\u524d\u7684 tethys.toml \u5df2\u66f4\u6539\u4e3a hydra.toml\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u7f6e\u8bf4\u660e",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u60a8\u53ea\u8fd0\u884c PoS \u8282\u70b9\uff0c\u8fd9\u91cc\u65e0\u9700\u8fdb\u884c\u4efb\u4f55\u4fee\u6539\uff1b \u5982\u679c\u60a8\u8ba1\u5212\u8fd0\u884c GPU \u6316\u77ff\u8f6f\u4ef6\uff0c\u60a8\u9700\u8981\u7f16\u8f91 hydra.toml \u6587\u4ef6\u4ee5\u8fdb\u884c\u914d\u7f6e\u8bbe\u7f6e\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'# mining_author="cfx:xxxxxxxxxx..."\n'})}),"\n",(0,i.jsxs)(e.p,{children:['\u8bf7\u5c06 "cfx',":xxxx",'..." \u4fee\u6539\u4e3a\u60a8\u81ea\u5df1\u7684\u94b1\u5305\u5730\u5740\uff0c\u5e76\u5220\u9664 "mining_author..." \u524d\u9762\u7684 "#" \u7b26\u53f7\u3002']}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd0\u884c-gpu-\u6316\u77ff\u7a0b\u5e8f",children:"\u8fd0\u884c GPU \u6316\u77ff\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(e.p,{children:["Conflux GPU \u6316\u77ff\u7a0b\u5e8f ",(0,i.jsx)(e.strong,{children:"cfxmine"})," \u9700\u8981\u4e0e Conflux \u5168\u8282\u70b9\u7a0b\u5e8f\u4e00\u8d77\u8fd0\u884c\u3002 \u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728\u547d\u4ee4\u63d0\u793a\u7b26\uff08cmd\uff09\u4e2d\u6253\u5f00 ",(0,i.jsx)(e.strong,{children:"run"})," \u53ef\u6267\u884c\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\uff0c\u5e76\u542f\u52a8\u5168\u8282\u70b9\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cd conflux\\run\nconflux --config hydra.toml --full 2>stderr.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u540e\u5c31\u53ef\u4ee5\u5f00\u59cb\u6316\u77ff\u4e86\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u547d\u4ee4\u63d0\u793a\u7b26\uff08cmd\uff09\u4e2d\u6253\u5f00 cfxmine \u53ef\u6267\u884c\u6587\u4ef6\uff0c\u5e76\u542f\u52a8 Conflux GPU \u6316\u77ff\u7a0b\u5e8f\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cd conflux\ncfxmine --gpu 1\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u5728\u5b8c\u6210\u5168\u8282\u70b9\u7684\u540c\u6b65\u4e4b\u540e\uff0c\u624d\u6267\u884c GPU \u547d\u4ee4\u884c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"linux\u6d4b\u8bd5\u6307\u5357",children:"Linux\u6d4b\u8bd5\u6307\u5357"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8fd0\u884c\u6587\u4ef6"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"cfxmine.linux.gz:"})," ",(0,i.jsx)(e.a,{href:"https://github.com/Conflux-Chain/open-cfxmine/releases",children:"Mining ProgramClick to see Conflux PoW Mining Algorithm"})]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"conflux_linux_v2.2.1-fixpos\uff1a\u5168\u8282\u70b9\u7a0b\u5e8f"})," [\u70b9\u51fb\u67e5\u770b\u5168\u8282\u70b9\u7a0b\u5e8f] (",(0,i.jsx)(e.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases",children:"https://github.com/Conflux-Chain/conflux-rust/releases"}),")"]}),"\n",(0,i.jsx)(e.li,{children:"\uff08\u4e0e\u5148\u524d\u7248\u672c\u7684\u533a\u522b\uff1a\u5728\u4e3b\u7f51\u53d1\u5e03\u4e2d\uff0cdefault.toml \u5c06\u88ab\u91cd\u547d\u540d\u4e3a tethys.toml\uff0c\u5728\u6d4b\u8bd5\u7f51\u4e2d\u5c06\u88ab\u547d\u540d\u4e3a testnet.toml\u3002\uff09"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u51c6\u5907\u8fd0\u884c-conflux-1",children:"\u51c6\u5907\u8fd0\u884c Conflux"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a\u201cconflux\u201d\u7684\u76ee\u5f55"}),"\n",(0,i.jsx)(e.li,{children:"\u89e3\u538b\u4e0b\u8f7d\u5305\u5230\u76ee\u5f55"}),"\n",(0,i.jsx)(e.li,{children:"\u8bf7\u4e0b\u8f7d pos_config \u5305\u5e76\u5c06\u89e3\u538b\u540e\u7684\u6587\u4ef6\u5939\u79fb\u52a8\u5230\u8fd0\u884c\u76ee\u5f55\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u26a0\ufe0f"," \u76ee\u5f55\u7ed3\u6784\u5e94\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"conflux\n\u2514\u2500\u2500 run\n    \u2514\u2500\u2500 pos_config\n    \u2514\u2500\u2500 conflux.exe\n    \u2514\u2500\u2500 conflux.pdb\n    \u2514\u2500\u2500 hydra.toml\n    \u2514\u2500\u2500 log.yaml\n    \u2514\u2500\u2500 clear_state.bat\n    \u2514\u2500\u2500 clear_state.sh\n    \u2514\u2500\u2500 libcrypto-1_1-x64.dll\n    \u2514\u2500\u2500 libssl-1_1-x64.dll\n    \u2514\u2500\u2500 start.bat\n    \u2514\u2500\u2500 start.sh\n    \u2514\u2500\u2500 throttling.toml\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u4e4b\u524d\u7684 tethys.toml \u5df2\u66f4\u6539\u4e3a hydra.toml\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u914d\u7f6e\u8bf4\u660e-1",children:"\u914d\u7f6e\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.p,{children:["\u8bf7\u4f7f\u7528\u6587\u672c\u7f16\u8f91\u5668\u6253\u5f00 ",(0,i.jsx)(e.code,{children:"run/hydra.toml"})," \u6587\u4ef6\uff0c\u5e76\u914d\u7f6e\u4e0e\u6316\u77ff\u76f8\u5173\u7684\u53c2\u6570\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:'# mining_author="cfx:xxxxxxxxxx..."\n'})}),"\n",(0,i.jsxs)(e.p,{children:['\u8bf7\u5c06 "cfx',":xxxx",'..." \u4fee\u6539\u4e3a\u60a8\u81ea\u5df1\u7684\u94b1\u5305\u5730\u5740\uff0c\u5e76\u5220\u9664 "mining_author..." \u524d\u9762\u7684 "#" \u7b26\u53f7\u3002']}),"\n",(0,i.jsx)(e.h2,{id:"\u8fd0\u884c-gpu-\u6316\u77ff\u7a0b\u5e8f-1",children:"\u8fd0\u884c GPU \u6316\u77ff\u7a0b\u5e8f"}),"\n",(0,i.jsxs)(e.p,{children:["Conflux GPU \u6316\u77ff\u7a0b\u5e8f ",(0,i.jsx)(e.strong,{children:"cfxmine"})," \u9700\u8981\u4e0e Conflux \u5168\u8282\u70b9\u7a0b\u5e8f\u4e00\u8d77\u8fd0\u884c\u3002 \u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728 Bash\uff08\u6216\u4efb\u4f55\u7b26\u5408 POSIX \u6807\u51c6\u7684 Shell\uff09\u4e2d\uff0c\u542f\u52a8\u5168\u8282\u70b9\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cd conflux/run\n./conflux --config hydra.toml --full 2>stderr.txt\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u540e\u5c31\u53ef\u4ee5\u5f00\u59cb\u6316\u77ff\u4e86\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728 Bash\uff08\u6216\u4efb\u4f55\u7b26\u5408 POSIX \u6807\u51c6\u7684 Shell\uff09\u4e2d\u6253\u5f00 cfxmine \u53ef\u6267\u884c\u6587\u4ef6\u6240\u5728\u7684\u76ee\u5f55\uff0c\u5e76\u542f\u52a8 Conflux GPU \u6316\u77ff\u7a0b\u5e8f\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u64cd\u4f5c\uff1a"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cd conflux\n./cfxmine --gpu 1\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u5728\u5b8c\u6210\u5168\u8282\u70b9\u7684\u540c\u6b65\u4e4b\u540e\uff0c\u624d\u6267\u884c GPU \u547d\u4ee4\u884c\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6e29\u99a8\u63d0\u793a",children:"\u6e29\u99a8\u63d0\u793a\uff1a"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c Conflux \u5168\u8282\u70b9\u7a0b\u5e8f\u548c ",(0,i.jsx)(e.strong,{children:"cfxmine"})," \u4e0d\u5728\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\uff0c\u60a8\u53ef\u4ee5\u5728\u542f\u52a8 cfxmine \u65f6\u6307\u5b9a\u8fdc\u7a0b Conflux \u5168\u8282\u70b9\u7a0b\u5e8f\u7684 IP \u5730\u5740\u548c\u7aef\u53e3\uff08\u9ed8\u8ba4\u4e3a 32525\uff09\u3002"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"./cfxmine --gpu --addr A.B.C.D\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6216\u8005"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"./cfxmine --gpu --addr A.B.C.D --port xxxx\n"})}),"\n",(0,i.jsx)(e.p,{children:'\u5982\u679c\u60a8\u5e0c\u671b\u6307\u5b9a\u8fdc\u7a0b\u8282\u70b9\uff0c\u60a8\u9700\u8981\u5c06\u8282\u70b9\u7684\u914d\u7f6e\u66f4\u6539\u4e3a\uff1astratum_listen_address="0.0.0.0"\uff0c\u5e76\u5220\u9664 # \u7b26\u53f7\u3002'}),"\n",(0,i.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u5728\u5b8c\u6210\u5168\u8282\u70b9\u7684\u540c\u6b65\u4e4b\u540e\uff0c\u624d\u6267\u884c GPU \u547d\u4ee4\u884c\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(t,{...n})}):t(n)}},11151:(n,e,l)=>{l.d(e,{Z:()=>x,a:()=>c});var i=l(67294);const s={},r=i.createContext(s);function c(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function x(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);