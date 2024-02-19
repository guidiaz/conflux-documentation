"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8955],{56900:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>t});var l=r(85893),i=r(11151);const o={sidebar_position:4,title:"\u5347\u7ea7\u8282\u70b9",displayed_sidebar:"generalSidebar"},s=void 0,d={id:"general/run-a-node/how-to-upgrad",title:"\u5347\u7ea7\u8282\u70b9",description:"\u5f53\u8282\u70b9\u8f6f\u4ef6\u53d1\u5e03\u65b0\u7248\u672c\u65f6\uff0c\u8282\u70b9\u8fd0\u8425\u8005\u9700\u8981\u5347\u7ea7\u8282\u70b9\u8f6f\u4ef6\u4ee5\u786e\u4fdd\u5176\u6b63\u5e38\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/run-a-node/how-to-upgrad.md",sourceDirName:"general/run-a-node",slug:"/general/run-a-node/how-to-upgrad",permalink:"/zh-CN/docs/general/run-a-node/how-to-upgrad",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5347\u7ea7\u8282\u70b9",displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u8282\u70b9\u5feb\u7167\u5de5\u5177",permalink:"/zh-CN/docs/general/run-a-node/snapshot-tool"},next:{title:"Advanced",permalink:"/zh-CN/docs/category/advanced"}},c={},t=[{value:"\u5982\u4f55\u5347\u7ea7\u8282\u70b9",id:"\u5982\u4f55\u5347\u7ea7\u8282\u70b9",level:2},{value:"1. \u4e0b\u8f7d\u65b0\u7684\u8282\u70b9\u8f6f\u4ef6",id:"1-\u4e0b\u8f7d\u65b0\u7684\u8282\u70b9\u8f6f\u4ef6",level:3},{value:"2. \u505c\u6b62\u65e7\u7684\u8282\u70b9\u8fdb\u7a0b",id:"2-\u505c\u6b62\u65e7\u7684\u8282\u70b9\u8fdb\u7a0b",level:3},{value:"3. \u66ff\u6362\u65e7\u8282\u70b9\u8f6f\u4ef6\u5e76\u542f\u52a8",id:"3-\u66ff\u6362\u65e7\u8282\u70b9\u8f6f\u4ef6\u5e76\u542f\u52a8",level:3},{value:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",level:2},{value:"\u5982\u4f55\u786e\u8ba4\u8282\u70b9\u8f6f\u4ef6\u7684\u7248\u672c\uff1f",id:"\u5982\u4f55\u786e\u8ba4\u8282\u70b9\u8f6f\u4ef6\u7684\u7248\u672c",level:3},{value:"\u5982\u4f55\u77e5\u9053\u8282\u70b9\u8f6f\u4ef6\u4f55\u65f6\u53d1\u5e03\u6700\u65b0\u7248\u672c\uff1f",id:"\u5982\u4f55\u77e5\u9053\u8282\u70b9\u8f6f\u4ef6\u4f55\u65f6\u53d1\u5e03\u6700\u65b0\u7248\u672c",level:3},{value:"\u5982\u679c\u8282\u70b9\u5728\u53d1\u5e03\u65b0\u7248\u672c\u540e\u4e0d\u5347\u7ea7\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f",id:"\u5982\u679c\u8282\u70b9\u5728\u53d1\u5e03\u65b0\u7248\u672c\u540e\u4e0d\u5347\u7ea7\u4f1a\u53d1\u751f\u4ec0\u4e48",level:3},{value:"\u91cd\u65b0\u542f\u52a8\u8282\u70b9\u540e\uff0c\u5c06\u533a\u5757\u6570\u636e\u540c\u6b65\u5230\u6700\u65b0\u9700\u8981\u591a\u957f\u65f6\u95f4\uff1f",id:"\u91cd\u65b0\u542f\u52a8\u8282\u70b9\u540e\u5c06\u533a\u5757\u6570\u636e\u540c\u6b65\u5230\u6700\u65b0\u9700\u8981\u591a\u957f\u65f6\u95f4",level:3},{value:"\u5982\u4f55\u8fc1\u79fb\u8282\u70b9\uff1f",id:"\u5982\u4f55\u8fc1\u79fb\u8282\u70b9",level:3},{value:"\u5982\u679c\u4f7f\u7528Docker\uff0c\u5982\u4f55\u5347\u7ea7\uff1f",id:"\u5982\u679c\u4f7f\u7528docker\u5982\u4f55\u5347\u7ea7",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u5f53\u8282\u70b9\u8f6f\u4ef6\u53d1\u5e03\u65b0\u7248\u672c\u65f6\uff0c\u8282\u70b9\u8fd0\u8425\u8005\u9700\u8981\u5347\u7ea7\u8282\u70b9\u8f6f\u4ef6\u4ee5\u786e\u4fdd\u5176\u6b63\u5e38\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5982\u4f55\u5347\u7ea7\u8282\u70b9",children:"\u5982\u4f55\u5347\u7ea7\u8282\u70b9"}),"\n",(0,l.jsx)(n.p,{children:"\u8282\u70b9\u66f4\u65b0\u6b65\u9aa4\u975e\u5e38\u76f4\u63a5\u3002 \u53ea\u9700\u7528\u7528\u65b0\u7684\u8282\u70b9\u8f6f\u4ef6\uff08Conflux\uff09\u66ff\u6362\u65e7\u7684\u8f6f\u4ef6\u5e76\u91cd\u65b0\u542f\u52a8\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"1-\u4e0b\u8f7d\u65b0\u7684\u8282\u70b9\u8f6f\u4ef6",children:"1. \u4e0b\u8f7d\u65b0\u7684\u8282\u70b9\u8f6f\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["\u8bbf\u95ee",(0,l.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases",children:"\u53d1\u5e03\u9875\u9762"})," \u5e76\u4e0b\u8f7d\u6700\u65b0\u7684\u8282\u70b9\u8f6f\u4ef6\u3002 \u89e3\u538b\u540e\uff0c\u4f60\u5c06\u627e\u5230\u4e00\u4e2a\u540d\u4e3aconflux\u7684\u53ef\u6267\u884c\u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"2-\u505c\u6b62\u65e7\u7684\u8282\u70b9\u8fdb\u7a0b",children:"2. \u505c\u6b62\u65e7\u7684\u8282\u70b9\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u5728Linux\u4e0a\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u6309Ctrl + C\u6765\u505c\u6b62\u8282\u70b9\u8f6f\u4ef6\u3002 \u5982\u679c\u65e0\u6cd5\u505c\u6b62\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528kill\u547d\u4ee4\u5f3a\u5236\u505c\u6b62\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6b63\u5728\u8fd0\u884c\u4e00\u4e2aPoS\u8282\u70b9\uff0c\u5219\u9700\u8981\u91c7\u53d6\u989d\u5916\u7684\u6b65\u9aa4\u6765\u9632\u6b62\u5f3a\u5236\u9000\u4f11\u3002 \u8bf7\u53c2\u9605",(0,l.jsx)(n.a,{href:"/docs/general/mine-stake/stake/faqs#how-can-i-safely-restart-my-pos-node",children:"\u5982\u4f55\u5b89\u5168\u91cd\u542f\u4e00\u4e2aPoS\u8282\u70b9"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"3-\u66ff\u6362\u65e7\u8282\u70b9\u8f6f\u4ef6\u5e76\u542f\u52a8",children:"3. \u66ff\u6362\u65e7\u8282\u70b9\u8f6f\u4ef6\u5e76\u542f\u52a8"}),"\n",(0,l.jsxs)(n.p,{children:["\u5c06\u65b0\u7684\u8282\u70b9\u8f6f\u4ef6 ",(0,l.jsx)(n.code,{children:"conflux"})," \u590d\u5236\u5230\u5b58\u653e\u8282\u70b9\u8f6f\u4ef6\u7684\u76ee\u5f55\u4e2d\uff0c\u5e76\u91cd\u65b0\u542f\u52a8\u8282\u70b9\u8f6f\u4ef6\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}),"\n",(0,l.jsx)(n.h3,{id:"\u5982\u4f55\u786e\u8ba4\u8282\u70b9\u8f6f\u4ef6\u7684\u7248\u672c",children:"\u5982\u4f55\u786e\u8ba4\u8282\u70b9\u8f6f\u4ef6\u7684\u7248\u672c\uff1f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"/conflux --version\nconflux conflux-rust/v2.3.3-89f0ce5-20231215/x86_64-linux-gnu/rustc1.73.0\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5982\u4f55\u77e5\u9053\u8282\u70b9\u8f6f\u4ef6\u4f55\u65f6\u53d1\u5e03\u6700\u65b0\u7248\u672c",children:"\u5982\u4f55\u77e5\u9053\u8282\u70b9\u8f6f\u4ef6\u4f55\u65f6\u53d1\u5e03\u6700\u65b0\u7248\u672c\uff1f"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u901a\u8fc7\u8bba\u575b\u3001\u793e\u533a\u548c\u5176\u4ed6\u6e20\u9053\u901a\u77e5\u8282\u70b9\u8fd0\u8425\u8005\u3002 \u60a8\u8fd8\u53ef\u4ee5\u5728",(0,l.jsx)(n.a,{href:"https://github.com/Conflux-Chain/conflux-rust/releases",children:"\u53d1\u5e03\u9875\u9762"}),"\u4e0a\u68c0\u67e5\u6700\u65b0\u7248\u672c\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u5982\u679c\u8282\u70b9\u5728\u53d1\u5e03\u65b0\u7248\u672c\u540e\u4e0d\u5347\u7ea7\u4f1a\u53d1\u751f\u4ec0\u4e48",children:"\u5982\u679c\u8282\u70b9\u5728\u53d1\u5e03\u65b0\u7248\u672c\u540e\u4e0d\u5347\u7ea7\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u53d1\u5e03\u7684\u7248\u672c\u662f\u786c\u5206\u53c9\u7248\u672c\uff0c\u5219\u6ca1\u5347\u7ea7\u5c06\u5bfc\u81f4\u8282\u70b9\u65e0\u6cd5\u540c\u6b65\u533a\u5757\uff0c\u4ece\u800c\u5bfc\u81f4\u8282\u70b9\u53d1\u751f\u6545\u969c\u3002 \u5bf9\u4e8e\u975e\u786c\u5206\u53c9\u7684\u66f4\u65b0\uff0c\u4e0d\u5347\u7ea7\u4e0d\u4f1a\u4ea7\u751f\u91cd\u5927\u5f71\u54cd\uff0c\u4f46\u5efa\u8bae\u5347\u7ea7\uff0c\u7279\u522b\u662f\u5bf9\u4e8ebug\u4fee\u590d\u7248\u672c\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u91cd\u65b0\u542f\u52a8\u8282\u70b9\u540e\u5c06\u533a\u5757\u6570\u636e\u540c\u6b65\u5230\u6700\u65b0\u9700\u8981\u591a\u957f\u65f6\u95f4",children:"\u91cd\u65b0\u542f\u52a8\u8282\u70b9\u540e\uff0c\u5c06\u533a\u5757\u6570\u636e\u540c\u6b65\u5230\u6700\u65b0\u9700\u8981\u591a\u957f\u65f6\u95f4\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u8282\u70b9\u5728\u5347\u7ea7\u524d\u5df2\u4e0e\u6700\u65b0\u533a\u5757\u540c\u6b65\uff0c\u90a3\u4e48\u8282\u70b9\u5c06\u5728\u5347\u7ea7\u540e\u4ece\u4e0a\u6b21\u540c\u6b65\u7684\u533a\u5757\u5f00\u59cb\u540c\u6b65\u3002 \u8fd9\u4e00\u822c\u9700\u8981\u51e0\u5206\u949f\u5230\u51e0\u5341\u5206\u949f\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u5982\u4f55\u8fc1\u79fb\u8282\u70b9",children:"\u5982\u4f55\u8fc1\u79fb\u8282\u70b9\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u9700\u8981\u66f4\u6362\u6216\u6269\u5c55\u673a\u5668\uff0c\u5e76\u4e14\u9700\u8981\u5c06\u8282\u70b9\u6570\u636e\u8fc1\u79fb\u5230\u65b0\u673a\u5668\u4e0a\uff0c\u8bf7\u5c06\u6574\u4e2a\u8282\u70b9\u8f6f\u4ef6\u76ee\u5f55\u590d\u5236\u5230\u65b0\u673a\u5668\u4e0a\u5e76\u542f\u52a8\u8282\u70b9\u8f6f\u4ef6\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"\u5982\u679c\u4f7f\u7528docker\u5982\u4f55\u5347\u7ea7",children:"\u5982\u679c\u4f7f\u7528Docker\uff0c\u5982\u4f55\u5347\u7ea7\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u60a8\u6b63\u5728\u4f7f\u7528Docker\uff0c\u8bf7\u9996\u5148\u505c\u6b62Docker\u5bb9\u5668\uff0c\u7136\u540e\u5c06Docker\u955c\u50cf\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\uff0c\u6700\u540e\u542f\u52a8Docker\u5bb9\u5668\u3002"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>s});var l=r(67294);const i={},o=l.createContext(i);function s(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);