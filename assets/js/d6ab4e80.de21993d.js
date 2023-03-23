"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8524],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},h=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(o),f=a,p=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return o?n.createElement(p,r(r({ref:t},h),{},{components:o})):n.createElement(p,r({ref:t},h))}));function p(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},3972:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=o(7462),a=(o(7294),o(3905));const i={sidebar_position:5,title:"FAQs"},r="PoS FAQs",l={unversionedId:"general/mine-stake/stake/faqs",id:"general/mine-stake/stake/faqs",title:"FAQs",description:"What is the new Proof-of-Stake chain for Conflux?",source:"@site/docs/general/mine-stake/stake/faqs.md",sourceDirName:"general/mine-stake/stake",slug:"/general/mine-stake/stake/faqs",permalink:"/docs/general/mine-stake/stake/faqs",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/general/mine-stake/stake/faqs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"FAQs"},sidebar:"tutorialSidebar",previous:{title:"Running a PoS Staking Pool",permalink:"/docs/general/mine-stake/stake/running-staking-pool"},next:{title:"Build",permalink:"/docs/general/build/"}},s={},c=[{value:"What is the new Proof-of-Stake chain for Conflux?",id:"what-is-the-new-proof-of-stake-chain-for-conflux",level:2},{value:"How is PoS in Conflux different from other PoS-based chains?",id:"how-is-pos-in-conflux-different-from-other-pos-based-chains",level:2},{value:"When will the PoS upgrade be released?",id:"when-will-the-pos-upgrade-be-released",level:2},{value:"Will the PoS upgrade break compatibility?",id:"will-the-pos-upgrade-break-compatibility",level:2},{value:"How can I become a validator in the PoS chain?",id:"how-can-i-become-a-validator-in-the-pos-chain",level:2},{value:"What are the main advantages of the PoS chain?",id:"what-are-the-main-advantages-of-the-pos-chain",level:2},{value:"I&#39;m a developer, how will the PoS upgrade affect me?",id:"im-a-developer-how-will-the-pos-upgrade-affect-me",level:2},{value:"What is CIP-43 doing?",id:"what-is-cip-43-doing",level:2},{value:"Will Conflux become a PoS chain after CIP-43?",id:"will-conflux-become-a-pos-chain-after-cip-43",level:2},{value:"Conflux does not recognize PoS, so why did it choose to introduce it?",id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it",level:2},{value:"Does PoS increase the complexity of transaction confirmation?",id:"does-pos-increase-the-complexity-of-transaction-confirmation",level:2},{value:"What is forced retirement?",id:"what-is-forced-retirement",level:2},{value:"How can I safely restart my PoS node?",id:"how-can-i-safely-restart-my-pos-node",level:2}],h={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pos-faqs"},"PoS FAQs"),(0,a.kt)("h2",{id:"what-is-the-new-proof-of-stake-chain-for-conflux"},"What is the new Proof-of-Stake chain for Conflux?"),(0,a.kt)("p",null,"The PoS chain is an overlay chain that works alongside the PoW chain. The PoS chain will bring added security to the PoW chain and provide finality to transactions."),(0,a.kt)("h2",{id:"how-is-pos-in-conflux-different-from-other-pos-based-chains"},"How is PoS in Conflux different from other PoS-based chains?"),(0,a.kt)("p",null,"Conflux will use a hybrid PoW-PoS chain. There is currently no plan to do a full migration to a PoS chain."),(0,a.kt)("h2",{id:"when-will-the-pos-upgrade-be-released"},"When will the PoS upgrade be released?"),(0,a.kt)("p",null,"The PoS upgrade will be deployed in February. You can join the tests here."),(0,a.kt)("h2",{id:"will-the-pos-upgrade-break-compatibility"},"Will the PoS upgrade break compatibility?"),(0,a.kt)("p",null,"Yes. Users running Conflux nodes will need to update their clients to be able to run the PoS chain."),(0,a.kt)("h2",{id:"how-can-i-become-a-validator-in-the-pos-chain"},"How can I become a validator in the PoS chain?"),(0,a.kt)("p",null,"For instructions on how to join the PoS public tests, check the Mining section of the forum or ",(0,a.kt)("a",{parentName:"p",href:"https://forum.conflux.fun/c/English/mining"},"click here"),"."),(0,a.kt)("h2",{id:"what-are-the-main-advantages-of-the-pos-chain"},"What are the main advantages of the PoS chain?"),(0,a.kt)("p",null,"There are two main advantages to the PoS chain: increased security and transaction finality."),(0,a.kt)("p",null,"With the upgrade, the network can sustain a 51% attack without risking the integrity of the pivot chain."),(0,a.kt)("p",null,"In a scenario where an attacker successfully takes over 17% of the committee members, the PoW chain will continue to operate as usual, but it transactions won't be finalized until the attacker disappears."),(0,a.kt)("p",null,"To conduct a successful attack where the pivot chain can diverge, an attacker will need to to control at least 84% of the committee members."),(0,a.kt)("h2",{id:"im-a-developer-how-will-the-pos-upgrade-affect-me"},"I'm a developer, how will the PoS upgrade affect me?"),(0,a.kt)("p",null,"The PoS upgrade won't affect the execution environment of smart contracts."),(0,a.kt)("h2",{id:"what-is-cip-43-doing"},"What is CIP-43 doing?"),(0,a.kt)("p",null,"CIP-43 introduces a PoS chain as the witness chain to prevent 51% attacks."),(0,a.kt)("h2",{id:"will-conflux-become-a-pos-chain-after-cip-43"},"Will Conflux become a PoS chain after CIP-43?"),(0,a.kt)("p",null,"In CIP-43, PoS requires the consensus from at least 84% of the PoS participants to interfere with the PoW chain's behavior. Also need to mention that according to the protocol, PoS nodes should only sign blocks that have been confirmed by the PoW consensus."),(0,a.kt)("p",null,"This means that unless more than 84% of staking voters unite to attack the network, Conflux acts no differently than running with only the PoW chain if there are no PoW attacks. Transaction packaging, transaction executing, and block sorting are still done by the miners."),(0,a.kt)("p",null,"If users believe that at least 17% of the PoS nodes are honest, then they only need to consider the PoW rules."),(0,a.kt)("h2",{id:"conflux-does-not-recognize-pos-so-why-did-it-choose-to-introduce-it"},"Conflux does not recognize PoS, so why did it choose to introduce it?"),(0,a.kt)("p",null,"In a PoS chain, a group with more than 34% of the Stake can prevent any transaction from being recorded to the chain and thus stop the chain. A group with more than 67% of the Stake can take full control of the chain and launch a double-spend attack at will. In Long Range Attacks, the attacker can rewrite the whole history by buying the private keys of the investors who made a sell-off."),(0,a.kt)("p",null,"Then what does CIP-43 look like? Without a 51% attack, 34% of the Stake can't do anything, and 67% of the Stake still can't do anything either. (17% of the Stake can stop the PoS chain, but the PoW chain can still run as usual, just like how it behaves without CIP-43). It takes at least 84% of the Stake (>5/6) to have a tangible impact on the PoW chain, and the Long Range Attacks of PoS have almost no effects here as well."),(0,a.kt)("p",null,"Overall, the dependency of CIP-43 on Staking nodes is completely different from that of a pure PoS chain."),(0,a.kt)("h2",{id:"does-pos-increase-the-complexity-of-transaction-confirmation"},"Does PoS increase the complexity of transaction confirmation?"),(0,a.kt)("p",null,"Firstly, due to the special nature of the Conflux consensus, the transaction confirmation cannot be achieved by simply counting the number of confirmed blocks. If you know anything about GHOST, the GHOST protocol requires comparing the size of each level of subtrees and sibling subtrees. Conflux's GHAST protocol is even more complex. Conflux transaction confirmation rules are listed below. The process in which you saw the flashing of the \u201csecurity level\u201d icon on ConfluxScan is in fact supported by these mathematical formulas in behind."),(0,a.kt)("p",null,"Compared with these formulas, it is not very expensive to take an extra look at the state of the PoS chain."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:o(7539).Z,width:"654",height:"649"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Locale Dropdown",src:o(2527).Z,width:"688",height:"764"})),(0,a.kt)("h2",{id:"what-is-forced-retirement"},"What is forced retirement?"),(0,a.kt)("p",null,"If a candidate is elected to join the committee but does not participate in signing between two elections, all the locked votes will unlock automatically. This can happen if your PoS node is offline for some reason. In this case, the node's PoS account will be unable to acquire voting power for the following 7 days. This mechanism is often referred to as ",(0,a.kt)("em",{parentName:"p"},"forced retirement"),"."),(0,a.kt)("h2",{id:"how-can-i-safely-restart-my-pos-node"},"How can I safely restart my PoS node?"),(0,a.kt)("p",null,"To prevent forced retirement while restarting your PoS node, it is recommended to follow the these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"./conflux RPC local pos stop_election")," on the PoS node. The node will return either ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL")," or a future PoS block number. After running this command, the node will not apply to join the PoS committee in the next term."),(0,a.kt)("li",{parentName:"ol"},"If the command returns a block number, keep the node running. Run the same command again after the PoS block of the returned block number has been generated (est. several hours later). At this point, the command should return ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),". The node will no longer receive PoS rewards after this block."),(0,a.kt)("li",{parentName:"ol"},"Once the command returns ",(0,a.kt)("inlineCode",{parentName:"li"},"NULL"),", the node can be safely stopped. The PoS voting process will resume to normal automatically after the node has been restarted (est. 2-3 hours to generate new PoS rewards).")))}u.isMDXComponent=!0},7539:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/4finalization-236dca6eab0a10b3c90706c675d9bdba.png"},2527:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/5finalization-ebd5ff3e899bd07f4f6f350f66a75e5b.png"}}]);