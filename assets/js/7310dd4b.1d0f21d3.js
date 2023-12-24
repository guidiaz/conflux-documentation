"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[3695],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?o.createElement(d,r(r({ref:t},h),{},{components:n})):o.createElement(d,r({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2,title:"Why Introducing PoS?",id:"why_pos",keywords:["pos","why"],displayed_sidebar:"generalSidebar"},r=void 0,s={unversionedId:"general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",id:"general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",title:"Why Introducing PoS?",description:"This is an article written before the Ethereum Merge to explain why Conflux decides to introduce PoS.",source:"@site/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why-pos.md",sourceDirName:"general/conflux-basics/consensus-mechanisms/proof-of-stake",slug:"/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",permalink:"/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why_pos",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/why-pos.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Why Introducing PoS?",id:"why_pos",keywords:["pos","why"],displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"PoS Overview",permalink:"/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/pos_overview"},next:{title:"FAQs",permalink:"/docs/general/conflux-basics/consensus-mechanisms/proof-of-stake/faqs"}},c={},l=[{value:"PoW + PoS Hybrid Consensus?",id:"pow--pos-hybrid-consensus",level:2}],h={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an article written before the Ethereum Merge to explain why Conflux decides to introduce PoS.")),(0,a.kt)("p",null,"Let's start by explaining the reality that Conflux will have to consider the risk of a 51% attack in quite a long period of time: Due to the huge mining revenue of Ethereum and the increasing demands of graphics cards, miners have already purchased a lot of graphics cards, forming a huge pool of hashing power."),(0,a.kt)("p",null,"Conflux also uses graphics cards for mining, and the hashing power of graphics cards to maintain the security of Conflux is still far behind that of Ethereum. Therefore, there is a risk that a large number of graphics cards will switch to Conflux in a short period of time to complete a 51% attack."),(0,a.kt)("p",null,'Similar risks of 51% attack exist not only in other PoW public chains with graphics card mining, but also exist in blockchains like BCH, which uses the same ASIC mining as BTC but with significantly lower computing power. To address the 51% attack risk, BCH has even gone so far as to adopt a "less elegant" solution by limiting the rollback length.'),(0,a.kt)("p",null,"In theory, a public chain with PoW can never completely eliminate the risk of 51% attack. In practice, whether or not an attacker launches a 51% attack largely depends on the benefits and costs of the attack. In terms of the attacker's gain: a successful 51% attack will not harm the mining profit. The attacker's gain may be reduced mainly for two reasons. One is the loss caused by the collapse of the token value after a successful attack; the other is the community may reach a consensus to roll back the state through a hard fork to eliminate the attacker's gain. However, nowadays blockchains have supported multiple on-chain assets and provided cross-chain services, so it is now difficult to eliminate the impact caused by a double-spending attack through a simple hard fork, which is quite different from the situation when ETC were forked from ETH."),(0,a.kt)("p",null,"In terms of increasing the cost to the 51% attackers, there are now three response options available:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Avoiding all large-scale hashing power pools. Specifically, abandon graphics card mining and change to specialized ASIC mining."),(0,a.kt)("li",{parentName:"ol"},"Getting Conflux's network hashing power approaching or even exceeding Ethereum. This requires increasing the total mining revenue of Conflux to a level comparable to that of Ethereum. The current mining issuance of Ethereum is about 2.6 ETH every 13 seconds, or an average of 0.2 ETH per second. Based on the market price of 3400 USD/ETH, that gives Ethereum a mining revenue of about 680 USD per second, or about 58,752,000 USD per day. To raise Conflux's mining revenue to this level, it would require a boost of about 170 times. This means increasing the revenue of each block to $340,  that is, increasing the reward per block to over 340 CFX while maintaining the price of 1USD/CFX, or increasing the unit price of CFX by 170 times while maintaining the output. Achieving this goal in the short term may require Elon Musk to send a tweet for CFX every week or even every day."),(0,a.kt)("li",{parentName:"ol"},"Introducing a PoS mechanism to counter 51% attacks. The PoS decision makes it impossible for an attacker to achieve a double-spending attack based solely on the advantage of computing power, unless the attacker additionally invests enough CFX to influence the PoS decision.")),(0,a.kt)("p",null,"Of these three options, we believe that only the last one is actually feasible."),(0,a.kt)("p",null,"As for the team's technical roadmap, Conflux's goal is to achieve a \"decentralized public chain platform that is accessible and affordable to everyone\", rather than a \"public chain with a specific PoW consensus protocol\". The technical approach is only a means to serve the goal, not the goal itself. For this reason, adding PoS finality decisions to Conflux's existing PoW consensus mechanism to improve confirmation speed and resist potential 51% attacks is in line with Conflux's goals. In addition, to reduce the complexity and potential risk of adding PoS finality mechanism, we choose to leave the selection and packaging of transactions entirely to PoW miners, and the ordering of blocks still follows the Tree-Graph ordering rules, with PoS voting only on the finality of blocks generated by PoW miners."),(0,a.kt)("p",null,"Regarding the understanding of PoW and PoS, we have never changed: PoW is more secure but slower to confirm; PoS is faster to confirm but less secure. The combination of PoW and PoS has the potential to be a more desirable consensus protocol"),(0,a.kt)("h2",{id:"pow--pos-hybrid-consensus"},"PoW + PoS Hybrid Consensus?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The advantages of PoW consensus - security and reliability"),(0,a.kt)("li",{parentName:"ul"},"Advantages of PoS consensus - efficiency (fast confirmation, low energy consumption)"),(0,a.kt)("li",{parentName:"ul"},"Both can achieve throughput close to the network capacity limit",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Further expansion requires infrastructure upgrade or layer2 solutions"))),(0,a.kt)("li",{parentName:"ul"},"How to combine the advantages of both?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"High security"),(0,a.kt)("li",{parentName:"ul"},"Fast confirmation"),(0,a.kt)("li",{parentName:"ul"},"Reasonable energy consumption")))))}p.isMDXComponent=!0}}]);