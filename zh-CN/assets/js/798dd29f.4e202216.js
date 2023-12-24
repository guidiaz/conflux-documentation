"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[915],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},17661:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),o=r(3734),i=r(83699),c=r(2735),s=r(97325);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function u(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(m,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},96702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(17661);const i={sidebar_position:2.5,displayed_sidebar:"generalSidebar"},c="\u786c\u5206\u53c9",s={unversionedId:"general/hardforks/hardforks",id:"general/hardforks/hardforks",title:"\u786c\u5206\u53c9",description:"A hard fork represents a significant alteration in a blockchain network's protocol. Such a change is not backward compatible, implying that every network participant must upgrade their software to the latest version to remain an active participant within the network. Upon the execution of the hard forks, all network participants are expected to update their nodes to the newest version. Failure to do so will render them incapable of participating in the validation and verification of new transactions on the blockchain.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/general/hardforks/hardforks.md",sourceDirName:"general/hardforks",slug:"/general/hardforks/",permalink:"/zh-CN/docs/general/hardforks/",draft:!1,editUrl:"https://crowdin.com/project/conflux/zh-CN",tags:[],version:"current",sidebarPosition:2.5,frontMatter:{sidebar_position:2.5,displayed_sidebar:"generalSidebar"},sidebar:"generalSidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/zh-CN/docs/general/run-a-node/nodes-faqs"},next:{title:"v2.0",permalink:"/zh-CN/docs/general/hardforks/v2.0"}},l={},d=[],p={toc:d},u="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u786c\u5206\u53c9"},"\u786c\u5206\u53c9"),(0,a.kt)("p",null,"A hard fork represents a significant alteration in a blockchain network's protocol. Such a change is not backward compatible, implying that every network participant must upgrade their software to the latest version to remain an active participant within the network. Upon the execution of the hard forks, all network participants are expected to update their nodes to the newest version. Failure to do so will render them incapable of participating in the validation and verification of new transactions on the blockchain."),(0,a.kt)("p",null,"It's helpful to visualize a hard fork as a split in the blockchain's course. Prior to the hard fork, all participants traveled along the same trajectory. However, following the hard fork, this single path divides into two distinct paths. One continues under the old rules, while the other adheres to the newly implemented rules."),(0,a.kt)("p",null,"However, hard forks are typically preplanned and generally agreed upon by the community in advance, in which case the old blockchain typically ceases to exist. All members upgrade their systems, and the outdated version becomes obsolete."),(0,a.kt)("p",null,"This section itemizes the hard forks of Conflux and provides a description of the associated modifications."),(0,a.kt)(o.Z,{mdxType:"DocCardList"}))}h.isMDXComponent=!0}}]);