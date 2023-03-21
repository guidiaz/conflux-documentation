"use strict";(self.webpackChunkconflux_docs=self.webpackChunkconflux_docs||[]).push([[5143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:8.5,id:"transaction_explain",title:"Transactions",keywords:["transaction"]},r=void 0,s={unversionedId:"core/learn/core-space-basics/transaction_explain",id:"core/learn/core-space-basics/transaction_explain",title:"Transactions",description:"The act of sending a transaction is the only method of storing or modifying data on the blockchain. This includes both the transfer of CFX and the modification of contract states. The process of sending a transaction consists of three steps: constructing the transaction, signing it, and finally transmitting it. Most programming languages have an SDK with a convenient method that can be used for this purpose. However, if you are looking for a deeper understanding of the underlying mechanics or if you are experiencing problems when sending transactions, this article may help.",source:"@site/docs/core/learn/core-space-basics/core-transactions.md",sourceDirName:"core/learn/core-space-basics",slug:"/core/learn/core-space-basics/transaction_explain",permalink:"/docs/core/learn/core-space-basics/transaction_explain",draft:!1,editUrl:"https://github.com/Conflux-Chain/conflux-documentation/edit/main/docs/core/learn/core-space-basics/core-transactions.md",tags:[],version:"current",sidebarPosition:8.5,frontMatter:{sidebar_position:8.5,id:"transaction_explain",title:"Transactions",keywords:["transaction"]},sidebar:"tutorialSidebar",previous:{title:"Sponsorship Mechanism",permalink:"/docs/core/learn/core-space-basics/sponsor-mechanism"},next:{title:"Tutorial",permalink:"/docs/core/learn/tutorial/"}},l={},c=[{value:"Transaction Fields",id:"transaction-fields",level:2},{value:"Basic fields",id:"basic-fields",level:3},{value:"nonce",id:"nonce",level:3},{value:"Fee-related fields",id:"fee-related-fields",level:3},{value:"data",id:"data",level:3},{value:"Other Fields",id:"other-fields",level:3},{value:"Transaction signing and encoding",id:"transaction-signing-and-encoding",level:2},{value:"Differences between Conflux and Ethereum",id:"differences-between-conflux-and-ethereum",level:2},{value:"Related topics",id:"related-topics",level:2}],d={toc:c},h="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The act of sending a transaction is the only method of storing or modifying data on the blockchain. This includes both the transfer of CFX and the modification of contract states. The process of sending a transaction consists of three steps: constructing the transaction, signing it, and finally transmitting it. Most programming languages have an ",(0,i.kt)("a",{parentName:"p",href:"/docs/core/build/sdks-and-tools/sdks"},"SDK")," with a convenient method that can be used for this purpose. However, if you are looking for a deeper understanding of the underlying mechanics or if you are experiencing problems when sending transactions, this article may help."),(0,i.kt)("h2",{id:"transaction-fields"},"Transaction Fields"),(0,i.kt)("p",null,"In order to construct a transaction, the following fields are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nonce")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gas")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gasPrice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storageLimit")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chainId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"epochHeight"))),(0,i.kt)("h3",{id:"basic-fields"},"Basic fields"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"to"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," are the basic fields of a transaction. These fields correspond to the address of sender account, address of the receiver account and the amount to be transferred, respectively."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," field identifies the sender of the transaction. Essentially, the 'from' field tells you who is initiating the transaction and who is paying for the transaction. And in the ",(0,i.kt)("a",{parentName:"p",href:"#Signing"},"Signing")," phase, the transaction will be signed with the private key of the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," account, so you cannot specify any address as the sender. It is also important to remember that the account must have a sufficient balance to cover both the transfer amount (",(0,i.kt)("inlineCode",{parentName:"p"},"value")," field) and the transaction fee, otherwise the RPC will reject the transaction and it will not be sent. It's worth mentioning that in some specific cases, Conflux's sponsor mechanism can allow for other accounts to pay the transaction fee, allowing accounts with 0 balance to send transactions."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In fact, the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," field is not directly included in an encoded transaction. Generally speaking, tools such as SDKs will remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," field from transaction before encoding and sign the transaction using corresponding private key. Others can recover the sender from the signature of the transaction.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"to")," field indicates the recipient account of the transaction. If you are making a simple CFX transfer, this field should be set to the CFX recipient's account. If you are modifying the state of a contract, the to field should be set to the address of the contract. If you are deploying a new contract, the to field is left empty."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," field represents the amount of CFX to be transferred and must be set as an integer in the unit of Drip (10**-18 CFX)."),(0,i.kt)("h3",{id:"nonce"},"nonce"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," is the execution sequence number of transactions sent from an account. The correct value of this field can be queried using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," RPC method. And here are some details about the nonce mechanism:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The execution of transactions on the blockchain is in the order of nonce from small to large."),(0,i.kt)("li",{parentName:"ol"},"The initial value of nonce is 0, and the nonce is incremented by 1 for each transaction execution."),(0,i.kt)("li",{parentName:"ol"},"The nonce cannot be reused."),(0,i.kt)("li",{parentName:"ol"},"The nonce cannot be skipped: Suppose that the current nonce of an account is n. If the nonce of the transaction is m such that m > n, then the transaction will not be executed until all transactions with nonce < m have been executed."),(0,i.kt)("li",{parentName:"ol"},"After the transaction is sent via the ",(0,i.kt)("inlineCode",{parentName:"li"},"cfx_sendRawTransaction")," method, it will not be executed immediately. You must wait for the miner to pack it first. Once packed, it will be executed with a delay of 5 epochs. After the transaction is executed, the nonce of the account will be increased by one.")),(0,i.kt)("p",null,"Correctly setting the nonce is critical to a successful transaction execution. A common issue for developers is when a transaction is sent but its receipt (indicating successful execution) is not available, usually due to an accidentally skipped nonce. This results in the transaction being stuck in the transaction pool, waiting for previous transactions to be executed first."),(0,i.kt)("p",null,"When using an SDK to construct a transaction, value of nonce field do not need to be set manually as the SDK will automatically query it using ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_getNextNonce"),". However, if multiple transactions are sent at once, the nonce values may be reused because the return value of ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," is not updated immediately after the previous transaction is sent. To avoid this, the developer is advised to manage the nonce manually by recording the transaction hash, incrementing the nonce by 1, and using the updated value to construct subsequent transactions."),(0,i.kt)("h3",{id:"fee-related-fields"},"Fee-related fields"),(0,i.kt)("p",null,"In the Conflux network, transactions are processed by miners who charge a fee for their service. This fee incentivises miners to participate in the network and keep it running smoothly. The fees are paid in CFX and are specified by the transaction initiator through the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"storageLimit")," fields in the transaction."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," field represents the maximum amount of gas that can be used to execute the transaction. If the actual amount of gas consumed during the execution exceeds this limit, the transaction will fail. And if the actual consumption was less than the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," set, the sender must pay at least 75% of the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas"),", and up to 25% can be refunded, which means setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," too high is not encouraged. The gas consumption depends on the complexity of the contract code (or ",(0,i.kt)("inlineCode",{parentName:"p"},"21000")," if it is a simple transfer transaction) and can be estimated using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," method, which returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"gasUsed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"gasLimit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"storageCollaterized")," fields. It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"gasLimit")," as the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," field."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," field is the amount of Drip(10",(0,i.kt)("strong",{parentName:"p"},"-18 CFX) the sender is willing to pay per unit of gas, and should be greater than 1G(10"),"9). Miners prioritise transactions with higher payouts, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice")," can be increased to speed up the processing of a stuck transaction. The ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_gasPrice")," method provides a reasonable gas price based on network conditions."),(0,i.kt)("p",null,"In addition to transaction fees, the Conflux network requires the pledging of CFX for occupying new storage space or modifying existed storage during a transaction. The pledged CFX generates a 4% annual interest, which is paid to miners to subsidise their storage costs. When the occupied space is released or modified by others, the pledged CFX is returned. The ",(0,i.kt)("inlineCode",{parentName:"p"},"storageLimit")," field specifies the upper limit of the storage space that can be occupied by a transaction. And it is recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"storageCollaterized")," field of returned value from ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," as the ",(0,i.kt)("inlineCode",{parentName:"p"},"storageLimit")," field."),(0,i.kt)("p",null,"When sending a transaction, the sender must ensure that there is sufficient balance to cover the ",(0,i.kt)("inlineCode",{parentName:"p"},"value + storageLimit * (10^18/1024) + gas * gasPrice"),". If the balance is insufficient, the transaction will be rejected by nodes. If the transaction interacts with a contract that has a sponsor, the sender only needs to ensure sufficient funds for the value cost. The current SDK provides methods to automatically set reasonable values for ",(0,i.kt)("inlineCode",{parentName:"p"},"gas"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"storageLimit"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"gasPrice"),", but users can also specify these values manually."),(0,i.kt)("h3",{id:"data"},"data"),(0,i.kt)("p",null,"The data field of the transaction can be left blank or set to a hex-encoded byte array. This can be roughly categorized into three situations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Regular CFX transfer transaction: The ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," field is usually blank, but hex-encoded data can be set as a transaction remark or postscript."),(0,i.kt)("li",{parentName:"ul"},"Contract deployment transaction: ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," needs to be set as the contract's bytecode and the parameters of the constructor (if any)"),(0,i.kt)("li",{parentName:"ul"},"Contract call transaction: The ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," field is used to store the input data for the contract to call. The data is usually the contract method and data after parameter abi encoding. (When sending CFX to a contract, the data field is usually left blank)")),(0,i.kt)("p",null,"Smart contracts are usually written in high-level contract development languages (Solidity, vyper). You can use a compiler to obtain bytecode and abi. SDK will provide abi encoding methods for the encoding of the contract method call (encoding the method name and parameters)."),(0,i.kt)("h3",{id:"other-fields"},"Other Fields"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"chainId")," field in transactions is used to identify the specific chain. For example, the current chainId of the Conflux network is 1029 and that of the Conflux testnet is 1. This field is included in transactions primarily to prevent replay attacks. It's generally not necessary to fill in this field manually, as the SDK will automatically obtain the current RPC chainId through the ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_getStatus")," method."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"epochHeight")," field is used to specify the target epoch range for a transaction. Transactions will only be executed within the range of ","[epochHeight - 100000, epochHeight + 100000]",". If the epoch of the current chain exceeds this range, the transaction will be discarded. The SDK will also automatically set this field to the current epoch obtained by the ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_epochNumber")," method."),(0,i.kt)("h2",{id:"transaction-signing-and-encoding"},"Transaction signing and encoding"),(0,i.kt)("p",null,"After every field of a transaction is prepared, following steps are required before it can be sent using the ",(0,i.kt)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," method (don't worry, these steps are already implemented by wallets or SDKs):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare hash for signing: do RLP encoding in the order of ",(0,i.kt)("inlineCode",{parentName:"li"},"(nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data)")," and then apply the ",(0,i.kt)("inlineCode",{parentName:"li"},"keccak256")," operation to the encoded result to obtain a hash."),(0,i.kt)("li",{parentName:"ol"},"Signing: sign the hash obtained in the previous step using the private key of the sending account and perform the ecdsaSign signature operation to obtain the values for ",(0,i.kt)("inlineCode",{parentName:"li"},"r, s, v"),"."),(0,i.kt)("li",{parentName:"ol"},"Transaction Encoding: Do RLP encoding in the order of ",(0,i.kt)("inlineCode",{parentName:"li"},"((nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data), v, r, s)")," and convert it into a hexadecimal string.")),(0,i.kt)("h2",{id:"differences-between-conflux-and-ethereum"},"Differences between Conflux and Ethereum"),(0,i.kt)("p",null,"Compared to Ethereum ",(0,i.kt)("inlineCode",{parentName:"p"},"155 transaction"),", transactions through Conflux have several differences:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fields are different: with 2 more field ",(0,i.kt)("inlineCode",{parentName:"li"},"storageLimit"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"epochHeight"),"."),(0,i.kt)("li",{parentName:"ul"},"Differences when encoding transactionss:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The RLP structure to compute transaction hash is ",(0,i.kt)("inlineCode",{parentName:"li"},"[nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data]")),(0,i.kt)("li",{parentName:"ol"},"The RLP structure of a rawTx is ",(0,i.kt)("inlineCode",{parentName:"li"},"[[nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data], v, r, s]")))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"v")," value signed by ecdsaSign will not be specifically modified in Conflux, while in Ethereum, there will be some special treatments to the v value.")),(0,i.kt)("h2",{id:"related-topics"},"Related topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/core/build/json-rpc/json_rpc#cfx_sendrawtransaction"},"cfx_sendRawTransaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/general/faq/core-space-transactions/why-transaction-is-pending"},"why transaction is pending"))))}p.isMDXComponent=!0}}]);