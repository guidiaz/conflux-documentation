"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[2789],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7661:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),a=r(6010),l=r(3734),o=r(3699),i=r(2735),c=r(7325);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:l,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:l},r," ",l),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function d(e){let{item:t}=e;const r=(0,l.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,l.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,l.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(g,e);const o=(0,l.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},9275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(4137)),l=r(7661);const o={sidebar_position:1,title:"Wallets"},i=void 0,c={unversionedId:"general/tutorials/wallets/wallets",id:"general/tutorials/wallets/wallets",title:"Wallets",description:"In this section, you will find Tutorials for Wallets that support Conflux Network",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/tutorials/wallets/wallets.mdx",sourceDirName:"general/tutorials/wallets",slug:"/general/tutorials/wallets/",permalink:"/zh-CN/docs/general/tutorials/wallets/",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Wallets"},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/zh-CN/docs/general/tutorials/"},next:{title:"Fluent",permalink:"/zh-CN/docs/general/tutorials/wallets/fluent"}},s={},u=[{value:"Supported Wallets",id:"supported-wallets",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, you will find Tutorials for Wallets that support Conflux Network"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Wallets supported depend on the Space you plan to interact with.")),(0,a.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,a.kt)("th",{parentName:"tr",align:null},"Core Space Supported"),(0,a.kt)("th",{parentName:"tr",align:null},"eSpace Supported"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./fluent"},"Fluent")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./ledger"},"Ledger")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"./metamask"},"MetaMask")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,a.kt)("p",null,"For more information about each wallet, please navigate to the corresponding section."),(0,a.kt)(l.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);