"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5961],{78669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(85893),a=n(11151),o=n(73992),s=n(18679);const l={sidebar_position:1,title:"Hardhat and Foundry",description:"Deploying smart contracts using Hardhat and Foundry",displayed_sidebar:"eSpaceSidebar"},c=void 0,i={id:"espace/tutorials/deployContract/hardhatAndFoundry",title:"Hardhat and Foundry",description:"Deploying smart contracts using Hardhat and Foundry",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/espace/tutorials/deployContract/hardhatAndFoundry.md",sourceDirName:"espace/tutorials/deployContract",slug:"/espace/tutorials/deployContract/hardhatAndFoundry",permalink:"/es/docs/espace/tutorials/deployContract/hardhatAndFoundry",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/conflux/es",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Hardhat and Foundry",description:"Deploying smart contracts using Hardhat and Foundry",displayed_sidebar:"eSpaceSidebar"},sidebar:"eSpaceSidebar",previous:{title:"How to Deploy Contract",permalink:"/es/docs/category/how-to-deploy-contract"},next:{title:"Remix IDE",permalink:"/es/docs/espace/tutorials/deployContract/remix"}},d={},u=[{value:"Deploying smart contracts with Hardhat",id:"deploying-smart-contracts-with-hardhat",level:2},{value:"Video Guides",id:"video-guides",level:3},{value:"Deploying smart contracts with Foundry",id:"deploying-smart-contracts-with-foundry",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Invalid parameters: tx",id:"invalid-parameters-tx",level:3},{value:"Feedback",id:"feedback",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The eSpace Testnet allows anyone to deploy a smart contract on eSpace. In this tutorial, you will learn how to deploy a contract on eSpace Testnet using common tools for developing on Ethereum. This ",(0,r.jsx)(t.a,{href:"https://github.com/conflux-fans/espace-contract-guide",children:"demo repo"})," illustrates contract deployment with ",(0,r.jsx)(t.a,{href:"https://hardhat.org/",children:"Hardhat"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/foundry-rs/foundry",children:"Foundry"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Before you start deploying the contract, ",(0,r.jsx)(t.strong,{children:"you need to request test tokens"})," from a ",(0,r.jsx)(t.a,{href:"https://efaucet.confluxnetwork.org/",children:"eSpace faucet"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"deploying-smart-contracts-with-hardhat",children:"Deploying smart contracts with Hardhat"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["If you haven't already, install ",(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"nodejs"})," and ",(0,r.jsx)(t.a,{href:"https://classic.yarnpkg.com/lang/en/docs/install",children:"yarn"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Clone the repo and install dependencies:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/conflux-fans/espace-contract-guide\ncd espace-contract-guide\nyarn install\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Create a ",(0,r.jsx)(t.code,{children:".env"})," file following the example ",(0,r.jsx)(t.code,{children:".env.example"})," in the root directory. Change ",(0,r.jsx)(t.code,{children:"PRIVATE_KEY"})," to your own account private key in the ",(0,r.jsx)(t.code,{children:".env"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Run ",(0,r.jsx)(t.code,{children:"yarn compile"})," to compile the contract."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Run ",(0,r.jsx)(t.code,{children:"yarn deploy:eSpaceTestnet"})," to deploy the contract on the eSpace Testnet."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Run ",(0,r.jsx)(t.code,{children:"yarn test"})," for hardhat tests."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"video-guides",children:"Video Guides"}),"\n",(0,r.jsx)(t.p,{children:"To learn more about smart contract deployment using Hardhat, please refer to the following videos:"}),"\n","\n","\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(s.Z,{value:"overview",label:"Hardhat Overview",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/p0Bzc2Y_0Kc?si=sfchFwTtSHlHyK4w",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),(0,r.jsx)(s.Z,{value:"tutorial",label:"Hardhat Tutorial",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SBzhyV3TSGg?si=HXxu0XdHAsNNJPkf",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})})]}),"\n",(0,r.jsx)(t.h2,{id:"deploying-smart-contracts-with-foundry",children:"Deploying smart contracts with Foundry"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Clone the repo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"git clone https://github.com/conflux-fans/espace-contract-guide\ncd espace-contract-guide\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Install Foundry:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"curl -L https://foundry.paradigm.xyz | bash\nfoundryup\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Run ",(0,r.jsx)(t.code,{children:"forge build"})," to build the project."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Deploy your contract with Foundry:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"forge create --rpc-url https://evmtestnet.confluxrpc.com \\\n  --value <lock_amount> \\\n  --constructor-args <unlock_time> \\\n  --private-key <your_private_key> \\\n  --legacy \\\n  contracts/Lock.sol:Lock\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<lock_amount>"})," is the amount of test ",(0,r.jsx)(t.code,{children:"CFX"})," to be locked in the contract. Try setting this to some small amount, like ",(0,r.jsx)(t.code,{children:"0.0000001ether"}),".&#x20"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<unlock_time>"})," is the Unix timestamp after which the funds locked in the contract will become available for withdrawal. Try setting this to some Unix timestamp in the future, like ",(0,r.jsx)(t.code,{children:"1730390400"})," (this Unix timestamp corresponds to October 1, 2024)."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Por ejemplo:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"forge create --rpc-url https://evmtestnet.confluxrpc.com \\\n  --value 0.00000000002ether \\\n  --constructor-args 1696118400 \\\n  --private-key 0xabc123abc123abc123abc123abc123abc123abc123abc123abc123abc123abc1 \\\n  --legacy contracts/Lock.sol:Lock\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"faqs",children:"FAQs"}),"\n",(0,r.jsx)(t.h3,{id:"invalid-parameters-tx",children:"Invalid parameters: tx"}),"\n",(0,r.jsxs)(t.p,{children:["You may encounter error messages like ",(0,r.jsx)(t.code,{children:"Invalid parameters: tx"})," when deploying a contract. Please make sure that your deploy account has enough test tokens to deploy the contract. You can request test tokens from the ",(0,r.jsx)(t.a,{href:"https://efaucet.confluxnetwork.org/",children:"eSpace faucet"}),".\nFor more possible reasons, please refer to the ",(0,r.jsx)(t.a,{href:"/docs/core/core-space-basics/transactions/send-tx-error",children:"Sending Transaction Errors"})," and ",(0,r.jsx)(t.a,{href:"/docs/core/build/json-rpc/cfx_sendTransaction-errors",children:"sendRawTransaction RPC method error messages"})]}),"\n",(0,r.jsx)(t.h2,{id:"feedback",children:"Feedback"}),"\n",(0,r.jsxs)(t.p,{children:["Thank you for participating in and developing on the eSpace Testnet! If you encounter any issues, join our ",(0,r.jsx)(t.a,{href:"https://discord.gg/conflux-network-707952293412339843",children:"Discord"})," and ask us in it."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},18679:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},73992:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),o=n(72957),s=n(16550),l=n(81270),c=n(75238),i=n(33609),d=n(92560);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=m({queryString:n,groupId:a}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=i??f;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{y&&c(y)}),[y]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=n(51048);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=l[n].value;a!==r&&(i(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(j,{...e,...t})]})}function w(e){const t=(0,x.Z)();return(0,b.jsx)(v,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(67294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);