"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3120],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},i="The Tree-Graph",s={unversionedId:"learn/conflux-basics/tree-graph",id:"learn/conflux-basics/tree-graph",title:"The Tree-Graph",description:"At the heart of Conflux is the Tree-Graph ledger structure and the GHAST chain selection rule.",source:"@site/docs/learn/conflux-basics/tree-graph.md",sourceDirName:"learn/conflux-basics",slug:"/learn/conflux-basics/tree-graph",permalink:"/docs/learn/conflux-basics/tree-graph",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Why Transaction is Pending?",permalink:"/docs/learn/conflux-basics/transactions/why_tx_is_pending"},next:{title:"Addresses",permalink:"/docs/learn/conflux-basics/addresses"}},c={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-tree-graph"},"The Tree-Graph"),(0,a.kt)("p",null,"At the heart of Conflux is the ",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1805.03870.pdf"},"Tree-Graph")," ledger structure and the ",(0,a.kt)("a",{parentName:"p",href:"https://confluxnetwork.medium.com/conflux-research-group-ghast-mechanism-adaptive-weight-ghast-explained-part-1-ffe8224a7282"},"GHAST")," chain selection rule."),(0,a.kt)("p",null,"Distributed ledgers need to deal with concurrent blocks, aka forks. Blockchains like Bitcoin and Ethereum use the ",(0,a.kt)("a",{parentName:"p",href:"https://confluxnetwork.medium.com/advantages-and-disadvantages-of-the-longest-chain-rule-bc27225a2728"},"longest chain rule")," to select one fork and discard all the rest. The discarded blocks contribute neither to the system\u2019s security, nor to its throughput. As a result, there is an ",(0,a.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2013/881.pdf"},"inherent conflict")," between scalability and security in these blockchains. Conflux, on the other hand, incorporates all concurrent blocks into its ledger, achieving very high levels of security and performance."),(0,a.kt)("p",null,"First, Conflux replaces the longest chain rule with the GHAST chain selection rule. With this rule, a fork is selected based on the mining power working on its subtree, not just on a chain, which in turn makes this selection much more robust. This allows Conflux to use a block creation rate as high as 2 blocks per second. GHAST can also withstand liveness attacks."),(0,a.kt)("p",null,"Second, Conflux uses the Tree-Graph as its ledger structure. Each block, apart from having a single parent edge, also contains a list of reference edges to previous blocks. This introduces new information about the before-after relationship between blocks. This structure is essentially a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Polytree"},"directed tree")," (parent edges only) embedded inside a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"DAG")," (all edges), hence the name Tree-Graph."),(0,a.kt)("p",null,"When processing transactions, Conflux first selects a pivot chain in the Tree-Graph using GHAST. Then, using the pivot chain and the reference edges, it orders the ledger into a linear sequence of blocks. Finally, it executes transactions following this linear order."))}u.isMDXComponent=!0}}]);