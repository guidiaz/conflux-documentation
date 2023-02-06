"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[8022],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1},s="Page Example",o={unversionedId:"build/apis/sample-page",id:"build/apis/sample-page",title:"Page Example",description:"Overview",source:"@site/docs/build/apis/sample-page.md",sourceDirName:"build/apis",slug:"/build/apis/sample-page",permalink:"/docs/build/apis/sample-page",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"cfx_sendRawTransaction errors",permalink:"/docs/build/apis/JSON-RPC/send_tx_error"},next:{title:"Conflux Core",permalink:"/docs/category/conflux-core"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"eSpace",id:"espace",level:2},{value:"Core Space",id:"core-space",level:2},{value:"Advanced",id:"advanced",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"page-example"},"Page Example"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Each Conflux ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/@thegaram/rymwcvajq"},"account")," is identified by its address. When sending tokens to someone or interacting with a smart contract, you will need to know their address. You can also share your address with other people so that you can receive token transfers."),(0,n.kt)("p",null,"The address of an account is derived from its ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/@thegaram/rymwcvajq"},"private key"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"private key (secret) --\x3e public key (public) --\x3e address (public)\n")),(0,n.kt)("p",null,"If you view an account as a mailbox, then the private key is the key that opens it, while the address is the name and address written on the mailbox."),(0,n.kt)("p",null,"Your accounts and addresses are usually managed by wallets like ",(0,n.kt)("a",{parentName:"p",href:"https://fluentwallet.com/"},"Fluent")," and ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),". It is also possible to create and process addresses programmatically."),(0,n.kt)("h2",{id:"espace"},"eSpace"),(0,n.kt)("p",null,"Below are some examples of valid eSpace addresses:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"0x123456789abcdef0123456789abcdef012345678\n0x0000000000000000000000000000000000000000\n0x9BAfD0857532f4Ed6FaE2b9aA49390E16a285d38\n")),(0,n.kt)("p",null,"Such addresses are called hex addresses. They begin with a ",(0,n.kt)("inlineCode",{parentName:"p"},"0x")," indicating hex encoding, followed by 40 hexadecimal digits."),(0,n.kt)("p",null,"To generate eSpace addresses, simply use MetaMask or any other EVM-compatible wallet."),(0,n.kt)("h2",{id:"core-space"},"Core Space"),(0,n.kt)("p",null,"Below are some examples of valid Core Space addresses:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cfx:aakdjzx2xm8r76awgvnhvgz6552berc0ta2dgfsdkf\nCFX:TYPE.USER:AAKDJZX2XM8R76AWGVNHVGZ6552BERC0TA2DGFSDKF\n\ncfxtest:ace41xttaevym36kztg88akdjzx2xm8r76rytme9nh\nCFXTEST:TYPE.CONTRACT:ACE41XTTAEVYM36KZTG88AKDJZX2XM8R76RYTME9NH\n")),(0,n.kt)("p",null,"This address format is called base32 checksum address, or CIP-37 address since it was defined in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"CIP-37"),"."),(0,n.kt)("p",null,"Each base32 address begins with a network prefix: ",(0,n.kt)("inlineCode",{parentName:"p"},"cfx")," for mainnet, ",(0,n.kt)("inlineCode",{parentName:"p"},"cfxtest")," for testnet addresses. Since base32 addresses use a checksum, if you make a typo, the resulting address will become invalid."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},"- cfx:aakdjzx2xm8r76awgvnhvgz6552berc0ta2dgfsdk0\n")),(0,n.kt)("h2",{id:"advanced"},"Advanced"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Under the hood, addresses are 20-byte binary data that have multiple string representations, including base32 and hex."),(0,n.kt)("li",{parentName:"ul"},"For a custom network, the network prefix becomes ",(0,n.kt)("inlineCode",{parentName:"li"},"net[id]"),". Example: ",(0,n.kt)("inlineCode",{parentName:"li"},"net11:aakdjzx2xm8r76awgvnhvgz6552berc0ta21v8h0fr")),(0,n.kt)("li",{parentName:"ul"},"Core Space RPCs typically expect base32 addresses. However, in Solidity source code, you will need to use the hex checksum address format defined in ",(0,n.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-55"},"EIP-55"),". You can use ",(0,n.kt)("a",{parentName:"li",href:"https://confluxscan.io/address-converter"},"this tool")," to convert between base32 and hex format."),(0,n.kt)("li",{parentName:"ul"},"In hex representation, Core Space user addresses start with ",(0,n.kt)("inlineCode",{parentName:"li"},"0x1"),", contract addresses start with ",(0,n.kt)("inlineCode",{parentName:"li"},"0x8"),", and ",(0,n.kt)("a",{parentName:"li",href:"https://hackmd.io/@thegaram/rymwcvajq"},"internal contract")," addresses start with ",(0,n.kt)("inlineCode",{parentName:"li"},"0x0"),". Any other prefix is invalid on Core Space."),(0,n.kt)("li",{parentName:"ul"},"The same private key might result in different addresses on Core Space and eSpace. \u26a0\ufe0f Do not use a hex-encoded Core Space address on eSpace. For cross-space transfers, please refer to the ",(0,n.kt)("a",{parentName:"li",href:"https://hackmd.io/@thegaram/rymwcvajq"},"relevant documentation"),"."),(0,n.kt)("li",{parentName:"ul"},"When generating HD wallet accounts following the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"},"BIP-32")," standard, we use the following derivation paths: ",(0,n.kt)("inlineCode",{parentName:"li"},"m/44'/60'/0'/0")," for eSpace, ",(0,n.kt)("inlineCode",{parentName:"li"},"m/44'/503'/0'/0")," for Core Space, as defined in ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0044.md"},"SLIP-0044"),".")))}c.isMDXComponent=!0}}]);